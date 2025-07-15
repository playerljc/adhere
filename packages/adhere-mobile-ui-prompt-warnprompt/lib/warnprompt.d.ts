import type { ToastShowProps } from 'antd-mobile';
import type { WarnDialog, WarnPromptConfig } from './types';
/**
 * 显示警告消息（Toast形式）
 *
 * @description 在屏幕顶部显示一个临时的警告提示消息
 * @param props - Toast显示属性，可选
 * @returns Toast处理器，用于控制Toast的显示和隐藏
 *
 * @example
 * ```tsx
 * // 基本用法
 * const handler = openWarnMessage();
 *
 * // 自定义内容
 * const handler = openWarnMessage({
 *   content: '自定义警告消息',
 *   duration: 2000
 * });
 *
 * // 手动关闭
 * handler.close();
 * ```
 */
export declare const openWarnMessage: (props?: ToastShowProps) => import("antd-mobile/es/components/toast").ToastHandler;
/**
 * 显示警告对话框（Modal形式）
 *
 * @description 显示一个模态对话框，包含警告图标和内容，支持自动关闭
 * @param props - 对话框属性，包含duration等配置
 * @returns Modal处理器，用于控制对话框的显示和隐藏
 *
 * @example
 * ```tsx
 * // 基本用法
 * const handler = openWarnDialog({
 *   content: '这是一个警告对话框'
 * });
 *
 * // 自定义持续时间
 * const handler = openWarnDialog({
 *   content: '5秒后自动关闭',
 *   duration: 5000
 * });
 *
 * // 不自动关闭
 * const handler = openWarnDialog({
 *   content: '需要手动关闭',
 *   duration: 0
 * });
 *
 * // 手动关闭
 * handler.close();
 * ```
 */
export declare const openWarnDialog: WarnDialog;
/**
 * 获取当前配置
 *
 * @returns 当前使用的配置对象
 */
export declare const getConfig: () => Required<WarnPromptConfig>;
/**
 * 更新配置
 *
 * @param config - 新的配置对象
 */
export declare const updateConfig: (config: Partial<WarnPromptConfig>) => void;
/**
 * 重置配置为默认值
 */
export declare const resetConfig: () => void;
