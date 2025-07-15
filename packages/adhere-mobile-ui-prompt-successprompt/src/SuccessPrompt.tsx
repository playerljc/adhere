import { Modal, Toast } from 'antd-mobile';
import type { ToastShowProps } from 'antd-mobile';
import { CheckCircleFill } from 'antd-mobile-icons';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { SuccessDialog, Duration } from './types';

const selectorPrefix = 'adhere-mobile-success-prompt';

/**
 * 全局定时器句柄，用于管理自动关闭的定时器
 */
let autoCloseHandler: NodeJS.Timeout | null = null;

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
export const openSuccessMessage = (props?: ToastShowProps): ReturnType<typeof Toast.show> => {
  return Toast.show({
    content: Intl.get('operation_successful'),
    maskClickable: false,
    icon: 'success',
    ...(props ?? {}),
  });
};

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
export const openSuccessDialog: SuccessDialog = ({ 
  duration = 3000, 
  content,
  ...props 
}) => {
  const result = Modal.show({
    title: Intl.get('hint'),
    actions: [],
    closeOnMaskClick: true,
    ...props,
    content: (
      <div className={selectorPrefix}>
        <div className={`${selectorPrefix}-dialog-icon`}>
          <CheckCircleFill />
        </div>

        <div className={`${selectorPrefix}-dialog-content`}>
          {content ?? Intl.get('operation_successful')}
        </div>
      </div>
    ),
  });

  // 处理自动关闭逻辑
  if (duration && typeof duration === 'number' && duration > 0) {
    // 清除之前的定时器
    if (autoCloseHandler) {
      clearTimeout(autoCloseHandler);
    }

    // 设置新的定时器
    autoCloseHandler = setTimeout(() => {
      result.close();
      autoCloseHandler = null;
    }, duration);
  }

  return result;
};
