/**
 * 全局前置脚本文件。
 * Umi 区别于其他前端框架，没有显式的程序主入口（如 src/index.ts），所以当你有需要在应用前置、全局运行的逻辑时，优先考虑写入 global.ts 。
 *
 * 当你需要添加全局 Context 、修改应用运行时，请使用 app.tsx 。
 */

// 定义全局的 API 基础路径
window.API_BASE_URL = 'https://api.example.com';

// 在应用初始化时执行的全局逻辑
export function bootstrap() {
  console.log('Global initialization logic executed.');
  // 这里可以放置一些全局初始化操作，比如用户登录状态的检查，全局数据的预加载等
}