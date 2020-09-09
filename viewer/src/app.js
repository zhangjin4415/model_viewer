import React from 'react';
import ReactDOM from 'react-dom';
import DcmLoad from './dcm/dcmLoad.js'

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
  <DcmLoad></DcmLoad>,
  MOUNT_NODE
)