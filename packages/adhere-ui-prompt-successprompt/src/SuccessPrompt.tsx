import { Modal, message } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import type { JointContent, SuccessDialog, Duration, SuccessMessageParams } from './types';

/**
 * 全局定时器句柄
 * 用于管理成功对话框的自动关闭定时器
 */
let autoCloseHandler: NodeJS.Timeout | null = null;

/**
 * 默认配置常量
 */
const DEFAULT_CONFIG = {
  /** 默认持续时间（毫秒） */
  DEFAULT_DURATION: 3000,
  /** 默认标题 */
  DEFAULT_TITLE: 'hint',
  /** 默认内容 */
  DEFAULT_CONTENT: 'operation_successful',
} as const;

/**
 * 打开成功对话框
 *
 * @description 显示一个成功提示对话框，支持自动关闭功能
 * @param props - 对话框配置属性
 * @param props.duration - 自动关闭持续时间（毫秒），默认为3000ms，设为0或false禁用自动关闭
 * @param props.title - 对话框标题，默认为国际化提示文本
 * @param props.content - 对话框内容，默认为国际化成功文本
 * @param props.mask - 是否显示遮罩，默认为false
 * @param props.maskClosable - 点击遮罩是否可关闭，默认为true
 * @param props.footer - 底部按钮，默认为null（不显示）
 * @returns ModalFunc的返回结果，包含destroy等方法
 *
 * @example
 * ```typescript
 * // 基本用法
 * const result = openSuccessDialog();
 *
 * // 自定义配置
 * const result = openSuccessDialog({
 *   duration: 5000,
 *   title: '操作成功',
 *   content: '数据已保存',
 * });
 *
 * // 手动关闭
 * result.destroy();
 * ```
 */
export const openSuccessDialog: SuccessDialog = ({
  duration = DEFAULT_CONFIG.DEFAULT_DURATION,
  title = Intl.get(DEFAULT_CONFIG.DEFAULT_TITLE),
  content = Intl.get(DEFAULT_CONFIG.DEFAULT_CONTENT),
  mask = false,
  maskClosable = true,
  footer = null,
  ...props
}) => {
  // 清除之前的定时器
  if (autoCloseHandler) {
    clearTimeout(autoCloseHandler);
    autoCloseHandler = null;
  }

  const result = Modal.success({
    title,
    content,
    mask,
    maskClosable,
    footer,
    ...props,
  });

  // 设置自动关闭定时器
  if (duration && typeof duration === 'number' && duration > 0) {
    autoCloseHandler = setTimeout(() => {
      result.destroy();
      autoCloseHandler = null;
    }, duration);
  }

  return result;
};

/**
 * 显示成功消息提示
 *
 * @description 在页面顶部显示一个成功消息提示，支持自动消失
 * @param content - 消息内容，可选，默认为国际化成功文本
 * @param duration - 显示持续时间，可选，使用antd默认值
 * @param onClose - 关闭回调函数，可选
 * @returns void
 *
 * @example
 * ```typescript
 * // 基本用法
 * openSuccessMessage();
 *
 * // 自定义内容
 * openSuccessMessage('操作成功完成');
 *
 * // 自定义持续时间和回调
 * openSuccessMessage('保存成功', 3000, () => {
 *   console.log('消息已关闭');
 * });
 * ```
 */
export const openSuccessMessage = (
  content?: JointContent,
  duration?: Duration,
  onClose?: VoidFunction,
): void => {
  const messageContent = content || Intl.get(DEFAULT_CONFIG.DEFAULT_CONTENT);
  message.success(messageContent, duration, onClose);
};

/**
 * 显示成功消息提示（对象参数版本）
 *
 * @description 使用对象参数的方式显示成功消息，提供更好的类型支持
 * @param params - 消息参数对象
 * @param params.content - 消息内容
 * @param params.duration - 显示持续时间
 * @param params.onClose - 关闭回调函数
 * @returns void
 *
 * @example
 * ```typescript
 * openSuccessMessageWithParams({
 *   content: '操作成功',
 *   duration: 3000,
 *   onClose: () => console.log('关闭')
 * });
 * ```
 */
export const openSuccessMessageWithParams = (params: SuccessMessageParams): void => {
  const { content, duration, onClose } = params;
  openSuccessMessage(content, duration, onClose);
};

/**
 * 清理全局定时器
 *
 * @description 手动清理成功对话框的自动关闭定时器
 * 通常在组件卸载或需要立即关闭对话框时使用
 *
 * @example
 * ```typescript
 * // 在组件卸载时清理
 * useEffect(() => {
 *   return () => {
 *     clearSuccessDialogTimer();
 *   };
 * }, []);
 * ```
 */
export const clearSuccessDialogTimer = (): void => {
  if (autoCloseHandler) {
    clearTimeout(autoCloseHandler);
    autoCloseHandler = null;
  }
};
