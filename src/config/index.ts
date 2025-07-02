import { type App } from "vue";

const getConfig = (key?: string): PlatformConfig => {};

// 获取项目动态全局配置
export const getPlatformConfig = (app: App): Promise<undefined> => {
  app.config.globalProperties.$config = getConfig();
};
