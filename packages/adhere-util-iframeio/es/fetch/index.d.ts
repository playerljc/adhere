import Response from '../Response';
/**
 * Fetch
 * @class Fetch
 * @classdesc 客户端发送消息
 */
declare class Fetch {
    private readonly source;
    private readonly origin;
    constructor(source: MessageEventSource, origin: string);
    /**
     * send
     * @description 发送一个请求
     * @param targetWindow 目标window
     * @param targetOrigin 目标origin
     * @param pathname 路径
     * @param options 配置
     * @return Promise<Response>
     */
    private send;
    /**
     * get
     * @param params
     */
    get(...params: any[]): Promise<Response>;
    /**
     * put
     * @param params
     */
    put(...params: any[]): Promise<Response>;
    /**
     * delete
     * @param params
     */
    delete(...params: any[]): Promise<Response>;
}
export default Fetch;
