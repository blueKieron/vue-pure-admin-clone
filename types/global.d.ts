/**
 * 全局类型声明，无需引入直接在 .vue .ts .tsx 文件中使用即可获得类型提示
 */

declare global {
  // 平台的名称、版本、运行所需的 node 和 pnpm 版本、依赖、最后构建时间的类型提示
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      engines: {
        node: string;
        pnpm: string;
      };
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  // 打包压缩格式的类型声明
  type ViteCompression =
    | "none"
    | "gzip"
    | "brotli"
    | "both"
    | "gzip-clear"
    | "brotli-clear"
    | "both-clear";

  /**
   * 全局自定义环境变量的类型声明
   */
  interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_ROUTER_HISTORY: string;
    VITE_CDN: boolean;
    VITE_HIDE_HOME: string;
    VITE_COMPRESSION: ViteCompression;
  }

  // 对应 public/platform-config.json 文件的类型声明
  interface PlatformConfigs {
    Version?: string;
    Title?: string;
    FixedHeader?: boolean;
    HiddenSidebar?: boolean;
    MultiTagsCache?: boolean;
    MaxTagsLevel?: number;
    KeepAlive?: boolean;
    Locale?: string;
    Layout?: string;
    Theme?: string;
    DarkMode?: boolean;
    OverallStyle?: string;
    Grey?: boolean;
    Weak?: boolean;
    HideTabs?: boolean;
    HideFooter?: boolean;
    Stretch?: boolean | number;
    SidebarStatus?: boolean;
    EpThemeColor?: string;
    ShowLogo?: boolean;
    ShowModel?: string;
    MenuArrowIconNoTransition?: boolean;
    CachingAsyncRoutes?: boolean;
    TooltipEffect?: Effect;
    ResponsiveStorageNameSpace?: string;
    MenuSearchHistory?: number;
    MapConfigure?: {
      amapKey?: string;
      options: {
        resizeEnable?: boolean;
        center?: number[];
        zoom?: number;
      };
    };
  }

  // 扩展 Element
  interface Element {
    // v-ripple 作用于 src/directives/ripple/index.ts
    _ripple?: {
      enabled?: boolean;
      centered?: boolean;
      class?: string;
      circle?: boolean;
      touched?: boolean;
    };
  }
}
