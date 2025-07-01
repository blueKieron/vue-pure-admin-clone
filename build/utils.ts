import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readdir, stat } from "node:fs";
import dayjs from "dayjs";

import {
  name,
  version,
  dependencies,
  devDependencies,
  engines
} from "../package.json";

// 启动‘node’进程时所在工作目录的绝对路径
const root: string = process.cwd();

/**
 * @description: 根据可选的路径片段生成一个新的绝对路径
 * @param dir 路径片段，默认 build 目录
 * @param metaUrl 模块的完整 url, 如果在 build 目录外调用必传 import.meta.url
 */
const pathResolve = (dir = ".", metaUrl = import.meta.url) => {
  // 当前文件目录的绝对路径
  const currentFileDir = dirname(fileURLToPath(metaUrl));
  // build 目录的绝对路径
  const buildDir = resolve(currentFileDir, "build");
  // 解析的绝对路径
  const resolvedPath = resolve(currentFileDir, dir);
  // 检查解析的绝对路径是否在 build 目录内
  if (resolvedPath.startsWith(buildDir)) {
    // 在 build 目录内，返回当前文件路径
    return fileURLToPath(metaUrl);
  }
  // 不在 build 目录内，返回解析后的绝对路径
  return resolvedPath;
};

const alias: Record<string, string> = {
  "@": pathResolve("../src"),
  "@build": pathResolve()
};

// 平台的名称、版本、运行所需要的 node 和 pnpm 版本、依赖、最后构建时间的类型提示
const __APP_INFO__ = {
  pkg: { name, version, engines, dependencies, devDependencies },
  lastBuildTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
};
// 处理环境变量
const wrapperEnv = (envConf: Recordable): ViteEnv => {
  const ret: ViteEnv = {
    VITE_PORT: 8848,
    VITE_PUBLIC_PATH: "",
    VITE_ROUTER_HISTORY: "",
    VITE_CDN: false,
    VITE_HIDE_HOME: "false",
    VITE_COMPRESSION: "none"
  };

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName =
      realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    ret[envName] = realName;
    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }

  return ret;
};

const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

const formatBytes = (bytes: number) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toPrecision(3)} ${sizes[i]}`;
};

const fileListTotal: number[] = [];
// 获取指定文件夹中所有文件的大小
const getPackageSize = options => {
  const { folder = "dist", callback, format = true } = options;
  readdir(folder, (err, files: string[]) => {
    if (err) throw err;
    let count = 0;

    const checkEnd = () => {
      ++count === files.length &&
        callback(format ? formatBytes(sum(fileListTotal)) : sum(fileListTotal));
    };

    files.forEach((item: string) => {
      stat(`${folder}/${item}`, async (err, stats) => {
        if (err) throw err;
        if (stats.isFile()) {
          fileListTotal.push(stats.size);
          checkEnd();
        } else if (stats.isDirectory()) {
          getPackageSize({
            folder: `${folder}/${item}`,
            callback: checkEnd
          });
        }
      });
    });
  });
};

export { root, pathResolve, alias, __APP_INFO__, wrapperEnv, getPackageSize };
