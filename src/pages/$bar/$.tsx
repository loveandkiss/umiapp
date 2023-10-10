import React from 'react';
import { useParams } from 'umi';

export default function Demo() {
  const params = useParams()
  console.log('params', params)
  return (
    <div>
      <h1>动态路由22</h1>
    </div>
  );
}
