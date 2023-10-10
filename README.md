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

# src 目录下的.umi 目录

- dev 时的临时文件目录，比如入口文件、路由等，都会被临时生成到这里。
- 在 Umi.js 项目中，.umi 文件夹是由 Umi.js 框架自动生成和维护的，其中包含了一些用于构建和管理项目的重要配置和临时文件。这些文件和文件夹通常不需要手动修改，而是由 Umi.js 自动处理。
