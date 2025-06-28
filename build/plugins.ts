import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { codeInspectorPlugin } from "code-inspector-plugin";

import { pathResolve } from "./utils";
export function getPluginsList() {
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
    })
  ];
}
