/**
 * 消息提示模块
 * @module Message
 * @description 提供简单的消息提示功能，包括成功提示等
 * @example
 * ```tsx
 * import Message from './Message';
 *
 * Message.success('操作成功');
 * ```
 */
declare const _default: {
    /**
     * 显示成功消息提示
     * @function success
     * @description 显示一个成功类型的消息提示，4秒后自动消失
     * @param title - 消息标题内容
     * @example
     * ```tsx
     * Message.success('保存成功');
     * ```
     */
    success(title: string): void;
};
export default _default;
