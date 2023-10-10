import React from 'react';
// 和 history 相关的操作，用于获取当前路由信息、执行路由跳转、监听路由变更。
import { history } from 'umi'

export default function NotFoundPage() {
  console.log('history', history)
  const goHomePage = () => {
    // 跳转到指定路由
    history.push('/')
  }
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {/* You can add additional content or links here */}
      <button onClick={goHomePage}>go Home Page</button>
    </div>
  );
}
