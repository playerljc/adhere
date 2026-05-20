import { Toast } from 'antd-mobile';
import type { ToastShowProps } from 'antd-mobile';
import type { SuccessDialog } from './types';
/**
 * 打开成功消息提示（Toast形式）
 *
 * @description 显示一个轻量级的成功提示消息，通常用于操作成功后的反馈
 * @param props - Toast配置属性，可选
 * @returns Toast处理器，可用于手动关闭提示
 *
 * @example
 * ```tsx
 * // 基本用法
 * const handler = openSuccessMessage();
 *
 * // 自定义配置
 * const handler = openSuccessMessage({
 *   content: '保存成功！',
 *   duration: 2000
 * });
 *
 * // 手动关闭
 * setTimeout(() => handler.close(), 1000);
 * ```
 */
export declare const openSuccessMessage: (props?: ToastShowProps) => ReturnType<typeof Toast.show>;
/**
 * 打开成功对话框（Modal形式）
 *
 * @description 显示一个模态对话框，包含成功图标和消息内容，支持自动关闭
 * @param props - 对话框配置属性
 * @param props.duration - 自动关闭的持续时间（毫秒），默认3000ms，设为0或false禁用自动关闭
 * @param props.content - 对话框内容，默认显示"操作成功"
 * @param props.title - 对话框标题，默认显示"提示"
 * @param props.closeOnMaskClick - 是否允许点击遮罩关闭，默认true
 * @returns Modal处理器，可用于手动关闭对话框
 *
 * @example
 * ```tsx
 * // 基本用法
 * const handler = openSuccessDialog();
 *
 * // 自定义内容和持续时间
 * const handler = openSuccessDialog({
 *   content: '数据保存成功！',
 *   duration: 5000
 * });
 *
 * // 禁用自动关闭
 * const handler = openSuccessDialog({
 *   content: '请确认操作结果',
 *   duration: 0
 * });
 *
 * // 手动关闭
 * setTimeout(() => handler.close(), 2000);
 * ```
 */
export declare const openSuccessDialog: SuccessDialog;
