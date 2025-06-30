import { Plugin as importToCDN } from "vite-plugin-cdn-import";

/**
 * @description 打包采用 cdn 模式，仅限外网使用（默认不采用，如果需要采用 cdn 模式， 请在 .env.production 文件将 VITE_CDN 设置成 true)
 * 平台采用国内 cdn: https://www.bootcdn.cn
 * 注意：上面提到的仅限外网使用也不是完成肯定的，如果你们公司内网部署的有相关的 js、css 文件，也可以将下面配置对应改一下，整一套内网版 cdn
 */
export const cdn = importToCDN({
  // prodUrl 解释：name: 对应下面 modules 的 name, version: 自动读取本地 package.json 的 dependencies 依赖中对应包的版本号，path: 对应下面 modules 的 path， 当然也可写完整路径，会替换 prodUrl
  prodUrl: "https://cdn.bootcdn.net/ajax/libs/{name}/{version}/{path}",
  modules: [
    {
      name: "vue",
      var: "Vue",
      path: "vue.global.prod.min.js"
    },
    {
      name: "vue-router",
      var: "VueRouter",
      path: "vue-router.global.min.js"
    },
    {
      name: "vue-i18n",
      var: "VueI18n",
      path: "vue-i18n.runtime.global.prod.min.js"
    },
    // 项目中没有直接安装 vue-demi, 但是 pinia 用到了，所以需要在引入 pinia 前引入 vue-demi
    {
      name: "vue-demi",
      var: "VueDemi",
      path: "index.iife.min.js"
    },
    {
      name: "pinia",
      var: "Pinia",
      path: "pinia.iife.min.js"
    },
    {
      name: "element-plus",
      var: "ElementPlus",
      path: "index.full.min.js"
    },
    {
      name: "axios",
      var: "axios",
      path: "axios.min.js"
    },
    {
      name: "dayjs",
      var: "dayjs",
      path: "dayjs.min.js"
    },
    {
      name: "echarts",
      var: "echarts",
      path: "echarts.min.js"
    }
  ]
});
