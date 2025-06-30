import type { Plugin } from "vite";
import { isArray } from "@pureadmin/utils";
import compressPlugin from "vite-plugin-compression";

export const configCompressPlugin = (
  compress: ViteCompression
): Plugin | Plugin[] => {
  if (compress === "none") return null;

  const gz = {
    // 生成的压缩包后缀
    ext: ".gz",
    // 体积大于 threshold 才会被压缩
    threshold: 0,
    // 默认压缩 .js|mjs|json|css|html 后缀文件，设置成 true 压缩所有文件
    filter: () => true,
    // 压缩后是否删除原文件
    deleteOriginFile: false
  };

  const br = {
    ext: ".br",
    algorithm: "brotliCompress",
    threshold: 0,
    filter: () => true,
    deleteOriginFile: false
  };

  const codeList = [
    { k: "gzip", v: gz },
    { k: "brotli", v: br },
    { k: "both", v: [gz, br] }
  ];

  const plugins: Plugin[] = [];

  codeList.forEach(item => {
    if (compress.includes(item.k)) {
      if (compress.includes("clear")) {
        if (isArray(item.v)) {
          item.v.forEach(vItem => {
            plugins.push(
              compressPlugin(Object.assign(vItem, { deleteOriginFile: true }))
            );
          });
        } else {
          plugins.push(
            compressPlugin(Object.assign(item.v, { deleteOriginFile: true }))
          );
        }
      } else {
        if (isArray(item.v)) {
          item.v.forEach(vItem => {
            plugins.push(compressPlugin(vItem));
          });
        } else {
          plugins.push(compressPlugin(item.v));
        }
      }
    }
  });

  return plugins;
};
