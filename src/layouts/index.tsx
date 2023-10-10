import React from 'react';
import { Link, Outlet } from 'umi';
import styles from './index.less';

// 约定 src/layouts/index.tsx 为全局路由。
// 返回一个 React 组件，并通过 <Outlet /> 渲染嵌套路由。
export default function Layout() {
  // console.log('React', React)
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      {/*  */}
      <Outlet />
    </div>
  );
}
