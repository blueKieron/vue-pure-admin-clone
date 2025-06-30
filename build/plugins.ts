import type { PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { codeInspectorPlugin } from "code-inspector-plugin";
import removeNoMatch from "vite-plugin-router-warn";
import { vitePluginFakeServer } from "vite-plugin-fake-server";
import svgLoader from "vite-svg-loader";
import Icons from "unplugin-icons/vite";
import removeConsole from "vite-plugin-remove-console";
import { visualizer } from "rollup-plugin-visualizer";

import { viteBuildInfo } from "./info";
import { cdn } from "./cdn";
import { pathResolve } from "./utils";
import { configCompressPlugin } from "./compress";
export function getPluginsList(
  VITE_CDN: boolean,
  VITE_COMPRESSION: ViteCompression
): PluginOption[] {
  const lifecycle = process.env.npm_lifecycle_event;
  return [
    tailwindcss(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === "deep-chat"
        }
      }
    }),
    // jsx tsx 语法支持
    vueJsx(),
    VueI18nPlugin({
      include: [pathResolve("../locales/**")]
    }),
    /**
     * 在页面上安卓组合键时，鼠标在页面移动即会在 DOM 上出现遮罩层并显示相关信息，点击一下将自动打开 IDE 并将光标定位到元素对应的代码位置
     * MAC 默认组合键 Option + Shfit
     * Windows 默认组合键 Alt + Shift
     * 更多用法看 https://inspector.fe-dev.cn/guide/start.html
     * */
    codeInspectorPlugin({
      bundler: "vite",
      hideConsole: true
    }),
    viteBuildInfo(),
    /**
     * 开发环境下移除非必要的 vue-router 动态路由警告 No match found for location with path
     * vite-plugin-router-match 只在开发环境中启用，只处理 vue-router 文件并且只在服务启动或重启时运行一次，性能消耗可忽略不计
     * */
    removeNoMatch(),
    // mock 支持
    vitePluginFakeServer({
      logger: false,
      include: "mock",
      infixName: false,
      enableProd: true
    }),
    // svg 组件化支持
    svgLoader(),
    // 自动按需加载图标
    Icons({
      compiler: "vue3",
      scale: 1
    }),
    VITE_CDN ? cdn : null,
    configCompressPlugin(VITE_COMPRESSION),
    // 线上环境删除 console
    removeConsole({ external: ["src/assets/iconfont/iconfont.js"] }),
    // 打包分析
    lifecycle === "report"
      ? visualizer({ open: true, brotliSize: true, filename: "report.html" })
      : (null as any)
  ];
}
