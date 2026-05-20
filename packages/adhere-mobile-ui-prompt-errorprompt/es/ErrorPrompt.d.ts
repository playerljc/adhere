import { Toast } from 'antd-mobile';
import type { ToastShowProps } from 'antd-mobile';
import type { ErrorDialog } from './types';
/**
 * 显示错误消息提示
 *
 * @param props - Toast显示属性，可选
 * @returns ToastHandler - Toast处理器，可用于手动关闭
 *
 * @example
 * ```tsx
 * // 基本用法
 * const handler = openErrorMessage();
 *
 * // 自定义配置
 * const handler = openErrorMessage({
 *   content: '自定义错误信息',
 *   duration: 2000
 * });
 * ```
 */
export declare const openErrorMessage: (props?: ToastShowProps) => ReturnType<typeof Toast.show>;
/**
 * 显示错误对话框
 *
 * @param props - 错误对话框属性
 * @param props.duration - 自动关闭持续时间（毫秒），默认为3000ms，设为0或空函数则不自动关闭
 * @param props.content - 对话框内容，默认为系统异常信息
 * @param props.title - 对话框标题，默认为"提示"
 * @param props.closeOnMaskClick - 是否允许点击遮罩关闭，默认为true
 * @returns ModalShowHandler - Modal处理器，可用于手动关闭对话框
 *
 * @example
 * ```tsx
 * // 基本用法
 * const handler = openErrorDialog();
 *
 * // 自定义配置
 * const handler = openErrorDialog({
 *   content: '自定义错误内容',
 *   duration: 5000,
 *   title: '错误'
 * });
 *
 * // 不自动关闭
 * const handler = openErrorDialog({
 *   duration: 0
 * });
 * ```
 */
export declare const openErrorDialog: ErrorDialog;
