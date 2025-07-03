import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";
import { getPlatformConfig } from "./config";
import { createApp, type Directive } from "vue";

// 引入重置样式
import "./style/reset.scss";
// 导入公共样式
import "./style/index.scss";
import "element-plus/dist/index.css";
// 一定要在 main.ts 中导入 tailwind.css 防止 vite 每次 hmr 都会请求 src/style/index.css 整体 css 文件导致热更新慢的问题
import "./style/tailwind.css";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";

const app = createApp(App);

// 自定义指令
import * as directives from "@/directives";
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

// TODO: 全局注册 @iconify/vue 图标库

// TODO: 全局注册按钮级别权限组件

// 全局注册 vue-tippy
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import VueTippy from "vue-tippy";
app.use(VueTippy);

getPlatformConfig(app).then(async () => {
  setupStore(app);
  app.use(router);
});
