import { Modal, message } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import type { JointContent, WarnDialog, WarnMessage, Duration } from './types';

/** 全局定时器句柄，用于管理自动关闭的定时器 */
let autoCloseHandler: NodeJS.Timeout | null = null;

/**
 * 清理自动关闭定时器
 * @private
 */
const clearAutoCloseHandler = (): void => {
  if (autoCloseHandler) {
    clearTimeout(autoCloseHandler);
    autoCloseHandler = null;
  }
};

/**
 * 设置自动关闭定时器
 * @param duration - 持续时间（毫秒）
 * @param destroyFn - 销毁函数
 * @private
 */
const setAutoCloseHandler = (duration: number, destroyFn: () => void): void => {
  clearAutoCloseHandler();
  autoCloseHandler = setTimeout(() => {
    destroyFn();
    autoCloseHandler = null;
  }, duration);
};

/**
 * 打开警告对话框
 * 
 * @description 显示一个警告对话框，支持自动关闭功能
 * @param props - 警告对话框配置属性
 * @param props.duration - 自动关闭的持续时间（毫秒），默认为3000ms，设置为0或未提供则不自动关闭
 * @param props.title - 对话框标题，默认为国际化提示文本
 * @param props.mask - 是否显示遮罩，默认为false
 * @param props.maskClosable - 点击遮罩是否可关闭，默认为true
 * @param props.footer - 对话框底部，默认为null（不显示底部按钮）
 * @param props.content - 对话框内容
 * @param props.onOk - 确认回调函数
 * @param props.onCancel - 取消回调函数
 * @returns ModalFunc的返回值，包含destroy等方法
 * 
 * @example
 * ```tsx
 * // 基本用法
 * const modal = openWarnDialog({
 *   content: '这是一个警告信息',
 *   duration: 5000
 * });
 * 
 * // 手动关闭
 * modal.destroy();
 * 
 * // 不自动关闭
 * openWarnDialog({
 *   content: '需要用户手动关闭的警告',
 *   duration: 0
 * });
 * ```
 */
export const openWarnDialog: WarnDialog = ({ 
  duration = 3000, 
  title = Intl.get('hint'),
  mask = false,
  maskClosable = true,
  footer = null,
  ...props 
}) => {
  // 创建警告对话框
  const result = Modal.warning({
    title,
    mask,
    maskClosable,
    footer,
    ...props,
  });

  // 如果设置了持续时间且大于0，则设置自动关闭
  if (duration && typeof duration === 'number' && duration > 0) {
    setAutoCloseHandler(duration, result.destroy);
  }

  return result;
};

/**
 * 显示警告消息
 * 
 * @description 在页面顶部显示一个警告消息提示，支持自动消失
 * @param content - 消息内容，可以是字符串、React节点或消息配置对象
 * @param duration - 消息显示持续时间（毫秒），默认由antd message组件控制
 * @param onClose - 消息关闭时的回调函数
 * @returns void
 * 
 * @example
 * ```tsx
 * // 基本用法
 * openWarnMessage('操作失败，请重试');
 * 
 * // 自定义持续时间
 * openWarnMessage('数据保存成功', 5000);
 * 
 * // 带关闭回调
 * openWarnMessage('网络连接异常', 3000, () => {
 *   console.log('警告消息已关闭');
 * });
 * 
 * // 使用配置对象
 * openWarnMessage({
 *   content: '复杂的警告信息',
 *   duration: 4000,
 *   icon: <WarningOutlined />
 * });
 * ```
 */
export const openWarnMessage: WarnMessage = (
  content?: JointContent,
  duration?: Duration,
  onClose?: VoidFunction,
) => {
  return message.warning(content, duration, onClose);
};

/**
 * 清理所有警告对话框的自动关闭定时器
 * 
 * @description 手动清理全局定时器，通常在组件卸载时调用
 * 
 * @example
 * ```tsx
 * useEffect(() => {
 *   return () => {
 *     clearWarnDialogTimer();
 *   };
 * }, []);
 * ```
 */
export const clearWarnDialogTimer = (): void => {
  clearAutoCloseHandler();
};
