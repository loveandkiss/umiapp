# TypeScript

- Umi 默认开启 TypeScript，如果是使用官方脚手架创建项目，内置的文件是以 xx.(ts|tsx) 为主的。

- 如果想要在配置时拥有 TypeScript 语法提示，可以在配置的地方包一层 defineConfig():

```ts
// .umirc.ts

import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "@/pages/index" }],
});
```
