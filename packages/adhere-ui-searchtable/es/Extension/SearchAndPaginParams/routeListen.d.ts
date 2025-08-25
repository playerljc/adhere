/**
 * Listener
 * @description 路由监听函数：处理 PUSH 和 POP 操作
 */
declare const Listener: {
    (history: any, action: any): void;
    getCode(): any;
    getTop(): string | null;
    getLength(): number;
};
export default Listener;
