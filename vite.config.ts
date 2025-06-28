import { type UserConfigExport, type ConfigEnv, loadEnv } from "vite";

import { root, alias, wrapperEnv } from "./build/utils";

// https://vite.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const { VITE_CDN, VITE_PORT, VITE_COMPRESSION, VITE_PUBLIC_PATH } =
    wrapperEnv(loadEnv(mode, root));

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias
    },
    // 服务端渲染
    server: {
      port: VITE_PORT,
      host: "0.0.0.0",
      proxy: {},
      warmup: {
        clientFiles: ["./index.html", "./src/{views, components}/*"]
      }
    },
    plugins: []
  };
};
