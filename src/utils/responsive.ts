import type { App } from "vue";
import Storage from "responsive-storage";
import { responsiveStorageNameSpace, routerArrays } from "@/config";

export const injectResponsiveStorage = (app: App, config: PlatformConfigs) => {
  const nameSpace = responsiveStorageNameSpace();
  console.log(nameSpace);
  const configObj = Object.assign(
    {
      // 国际化 默认中文
      locale: Storage.getData("locale", nameSpace) ?? {
        locale: config.Locale ?? "zh"
      },
      // layout 模式及主题
      layout: Storage.getData("layout", nameSpace) ?? {
        layout: config.Layout ?? "vertical",
        theme: config.Theme ?? "light",
        darkMode: config.DarkMode ?? false,
        sidebarStatus: config.SidebarStatus ?? true,
        epThemeColor: config.EpThemeColor ?? "#409eff",
        themeColor: config.Theme ?? "light", // 主题色（对应系统配置中的主题色，与 theme 不同的是它不会受到浅色、深色整体风格切换的影响，只会在手动切换主题色时改变）
        overallStyle: config.OverallStyle ?? "light" // 整体风格 （浅色：light 深色：dark 自动：system）
      },
      // 系统配置-界面显示
      configure: Storage.getData("configure", nameSpace) ?? {
        grey: config.Grey ?? false,
        weak: config.Weak ?? false,
        hideTabs: config.HideTabs ?? false,
        hideFooter: config.HideFooter ?? false,
        showLogo: config.ShowLogo ?? true,
        showModel: config.ShowModel ?? "smart",
        multiTagsCache: config.MultiTagsCache ?? false,
        stretch: config.Stretch ?? false
      }
    },
    config.MultiTagsCache
      ? {
          // 默认显示顶级菜单 tag
          tags: Storage.getData("tags", nameSpace) ?? routerArrays
        }
      : {}
  );

  app.use(Storage, { nameSpace, memory: configObj });
};
