/**
 * Listener
 * @description 路由监听函数：处理 PUSH 和 POP 操作
 */
declare const Listener: {
    (history: any, action: any): void;
    /**
     * getCode
     * @description 获取最近保存的回调函数（用于处理 POP）
     */
    getCode(): any;
    /**
     * getTop
     */
    getTop(): string | null;
    /**
     * getLength
     */
    getLength(): number;
};
export default Listener;
