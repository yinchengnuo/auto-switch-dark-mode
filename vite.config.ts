/*
 * @Author: 尹成诺
 * @Date: 2023-01-19 09:54:15
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-01-19 10:16:57
 * @Description: file content
 */
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "AutoSwitchDarkMode",
      fileName: "AutoSwitchDarkMode",
    },
  },
});
