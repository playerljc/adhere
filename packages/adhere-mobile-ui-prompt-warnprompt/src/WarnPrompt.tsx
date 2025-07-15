import { Modal, Toast } from 'antd-mobile';
import type { ToastShowProps } from 'antd-mobile';
import { ExclamationCircleOutline } from 'antd-mobile-icons';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { WarnDialog, WarnDialogProps, WarnPromptConfig } from './types';

/**
 * CSS选择器前缀
 */
const SELECTOR_PREFIX = 'adhere-mobile-warn-prompt';

/**
 * 默认配置
 */
const DEFAULT_CONFIG: Required<WarnPromptConfig> = {
  defaultDuration: 3000,
  defaultIconColor: '#faad14',
  defaultIconSize: 22,
};

/**
 * 定时器句柄
 */
let timerHandler: NodeJS.Timeout | null = null;

/**
 * 清除定时器
 */
const clearTimer = (): void => {
  if (timerHandler) {
    clearTimeout(timerHandler);
    timerHandler = null;
  }
};

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
export const openWarnMessage = (props?: ToastShowProps) => {
  return Toast.show({
    content: Intl.get('error_occurred_ext1'),
    maskClickable: false,
    icon: <ExclamationCircleOutline />,
    ...(props ?? {}),
  });
};

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
export const openWarnDialog: WarnDialog = ({ 
  duration = DEFAULT_CONFIG.defaultDuration, 
  ...props 
}: WarnDialogProps) => {
  // 清除之前的定时器
  clearTimer();

  const result = Modal.show({
    title: Intl.get('hint'),
    actions: [],
    closeOnMaskClick: true,
    ...(props ?? {}),
    content: (
      <div className={SELECTOR_PREFIX}>
        <div className={`${SELECTOR_PREFIX}-dialog-icon`}>
          <ExclamationCircleOutline />
        </div>

        <div className={`${SELECTOR_PREFIX}-dialog-content`}>
          {props.content ?? Intl.get('error_occurred_ext1')}
        </div>
      </div>
    ),
  });

  // 设置自动关闭定时器
  if (typeof duration === 'number' && duration > 0) {
    timerHandler = setTimeout(() => {
      result.close();
      clearTimer();
    }, duration);
  }

  return result;
};

/**
 * 获取当前配置
 * 
 * @returns 当前使用的配置对象
 */
export const getConfig = (): Required<WarnPromptConfig> => {
  return { ...DEFAULT_CONFIG };
};

/**
 * 更新配置
 * 
 * @param config - 新的配置对象
 */
export const updateConfig = (config: Partial<WarnPromptConfig>): void => {
  Object.assign(DEFAULT_CONFIG, config);
};

/**
 * 重置配置为默认值
 */
export const resetConfig = (): void => {
  Object.assign(DEFAULT_CONFIG, {
    defaultDuration: 3000,
    defaultIconColor: '#faad14',
    defaultIconSize: 22,
  });
};
