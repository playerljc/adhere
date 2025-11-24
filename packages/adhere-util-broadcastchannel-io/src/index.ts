import Fetch from './fetch';
import { useFetch, useServer } from './react/hooks';
import Server from './server';
import Compose from './server/compose';
import Router from './server/router';

/**
 * BroadCastChannel通信工具库
 * @description 提供BroadCastChannel之间的通信功能，包括客户端和服务端
 */
const BroadCastChannelIO = {
  /** 客户端请求类 */
  Fetch,
  /** 服务端类 */
  Server,
  /** 路由类 */
  Router,
  /** 中间件组合函数 */
  Compose,
  /** React Hooks */
  React: {
    /** 使用Fetch的Hook */
    useFetch,
    /** 使用Server的Hook */
    useServer,
  },
};

export default BroadCastChannelIO;
