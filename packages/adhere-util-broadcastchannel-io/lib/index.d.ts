import Fetch from './fetch';
import { useFetch, useServer } from './react/hooks';
import Server from './server';
import Compose from './server/compose';
import Router from './server/router';
/**
 * BroadCastChannel通信工具库
 * @description 提供BroadCastChannel之间的通信功能，包括客户端和服务端
 */
declare const BroadCastChannelIO: {
    /** 客户端请求类 */
    Fetch: typeof Fetch;
    /** 服务端类 */
    Server: typeof Server;
    /** 路由类 */
    Router: typeof Router;
    /** 中间件组合函数 */
    Compose: typeof Compose;
    /** React Hooks */
    React: {
        /** 使用Fetch的Hook */
        useFetch: typeof useFetch;
        /** 使用Server的Hook */
        useServer: typeof useServer;
    };
};
export default BroadCastChannelIO;
