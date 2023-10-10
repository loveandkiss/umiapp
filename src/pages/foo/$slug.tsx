import React from 'react';
import { useParams, useLocation } from 'umi';

export default function Demo() {
  // 返回动态路由的匹配参数键值对对象
  const params = useParams()
  // 返回当前 location 对象
  const location = useLocation()
  console.log('location', location)
  return (
    <div>
      <h1>动态路由</h1>
    </div>
  );
}
