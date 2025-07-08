/**
 * 路由监听函数：处理 PUSH 和 POP 操作
 */
declare const Listener: {
    (history: any, action: any): void;
    /**
     * 获取最近保存的回调函数（用于处理 POP）
     */
    getCode(): any;
    getTop(): string | null;
    getLength(): number;
};
export default Listener;
