import { defineConfig } from "umi";

export default defineConfig({
  // 配置式路由
  // 在配置文件中通过 routes 进行配置，格式为路由信息的数组。
  routes: [
    // 基础路由
    {
      path: "/",
      // 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始寻找。
      component: "index"
    },
    // 基础路由
    {
      path: "/docs",
      // 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始寻找。
      component: "docs"
    },
    // 动态路由
    {
      path: '/foo/:slug',
      component: '@/pages/foo/$slug.tsx'
    },
    // {
    //   path: '/:bar/*',
    //   component: '@/pages/$bar/$.tsx'
    // },
    // 基础路由
    {
      path: "/*",
      component: '@/pages/404.tsx'
    },
  ],
  npmClient: 'npm',
});
