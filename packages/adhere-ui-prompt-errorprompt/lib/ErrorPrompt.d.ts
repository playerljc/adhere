import { ErrorDialog, ErrorMessage } from './types';
/**
 * 打开错误对话框
 *
 * @description 显示一个错误对话框，支持自动关闭功能
 * @param props - 错误对话框配置属性
 * @param props.duration - 自动关闭持续时间（毫秒），默认为3000ms，0表示不自动关闭
 * @param props.title - 对话框标题，默认为国际化提示文本
 * @param props.content - 对话框内容，默认为系统异常提示
 * @param props.mask - 是否显示遮罩，默认为false
 * @param props.maskClosable - 点击遮罩是否可关闭，默认为true
 * @param props.footer - 对话框底部，默认为null（不显示底部按钮）
 * @returns ModalFunc的返回结果，包含destroy等方法
 *
 * @example
 * ```typescript
 * // 基本用法
 * const result = openErrorDialog();
 *
 * // 自定义配置
 * const result = openErrorDialog({
 *   duration: 5000,
 *   title: '自定义标题',
 *   content: '自定义错误信息'
 * });
 *
 * // 手动关闭
 * result.destroy();
 * ```
 */
export declare const openErrorDialog: ErrorDialog;
/**
 * 显示错误消息提示
 *
 * @description 使用antd的message组件显示错误提示信息
 * @param content - 错误消息内容，可选，默认为系统异常提示
 * @param duration - 消息显示持续时间（毫秒），可选
 * @param onClose - 消息关闭时的回调函数，可选
 *
 * @example
 * ```typescript
 * // 基本用法
 * openErrorMessage();
 *
 * // 自定义消息
 * openErrorMessage('操作失败，请重试');
 *
 * // 自定义持续时间和回调
 * openErrorMessage(
 *   '网络连接失败',
 *   5000,
 *   () => console.log('消息已关闭')
 * );
 * ```
 */
export declare const openErrorMessage: ErrorMessage;
