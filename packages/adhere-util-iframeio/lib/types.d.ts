import type Context from './Context';
import Request from './Request';
import Response from './Response';
/**
 * 状态码类型定义
 */
export type StateCode = 0 | 200 | 404 | 500;
/**
 * 上下文选项接口
 */
export interface ContextOptions {
    /** 请求对象 */
    request: Request;
    /** 响应对象 */
    response: Response;
}
/**
 * 中间件函数类型定义
 * @param ctx - 上下文对象
 * @param next - 下一个中间件函数
 * @returns Promise<void> | void
 */
export type Middleware = (ctx: Context, next?: () => Promise<void> | void) => Promise<void> | void;
/**
 * 发送选项接口
 */
export interface SendOptions {
    /** 发送的数据 */
    data?: any;
    /** 请求头 */
    headers?: Record<string, string>;
}
/**
 * 请求选项接口
 */
export interface RequestOptions {
    /** 请求路径 */
    pathname: string;
    /** 请求头 */
    headers?: Record<string, string>;
    /** 状态码 */
    statusCode?: StateCode;
    /** 状态消息 */
    stateMessage?: string;
    /** 请求体 */
    body?: any;
    /** 请求类型 */
    type: 'request';
}
/**
 * 响应选项接口
 */
export interface ResponseOptions {
    /** 请求ID */
    requestId: string;
    /** 响应头 */
    headers: Record<string, string>;
    /** 状态码 */
    statusCode: StateCode;
    /** 状态消息 */
    stateMessage: string;
    /** 响应体 */
    body: any;
    /** 响应类型 */
    type: 'response';
}
/**
 * 消息事件数据接口
 */
export interface MessageEventData {
    /** 请求ID */
    requestId: string;
    /** 消息类型 */
    type: 'request' | 'response';
    /** 路径名 */
    pathname?: string;
    /** 请求头 */
    headers?: Record<string, string>;
    /** 状态码 */
    statusCode?: StateCode;
    /** 状态消息 */
    stateMessage?: string;
    /** 消息体 */
    body?: any;
}
/**
 * 服务器配置接口
 */
export interface ServerConfig {
    /** 白名单域名列表 */
    whitelist: string[];
    /** 源窗口对象 */
    source: MessageEventSource;
    /** 源域名 */
    sourceOrigin: string;
}
/**
 * 路由控制器配置接口
 */
export interface RouteController {
    /** 路由路径 */
    path: string;
    /** 中间件函数 */
    middleware: Middleware;
}
/**
 * React Hook 配置接口
 */
export interface UseServerConfig {
    /** 白名单域名列表 */
    whitelist: string[];
    /** 控制器列表 */
    controllers: RouteController[];
    /** 启动后的回调函数 */
    startAfterCB?: () => void;
}
/**
 * Fetch 配置接口
 */
export interface FetchConfig {
    /** 源窗口对象 */
    source: MessageEventSource;
    /** 源域名 */
    origin: string;
}
export type stateCode = StateCode;
export type MiddleWare = Middleware;
