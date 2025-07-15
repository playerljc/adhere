import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';

import type { ConfirmArgv } from '@baifendian/adhere-ui-messagedialog/lib/types';

/**
 * ImportantConfirm组件的属性接口
 * @interface ImportantConfirmProps
 * @description 重要确认对话框组件的属性定义
 */
export interface ImportantConfirmProps {
  /** 子元素内容 */
  children?: ReactNode;
  /** 对话框的z-index层级 */
  zIndex?: number;
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 确认成功后的回调函数，返回Promise */
  success?: () => Promise<void>;
}

/**
 * 打开确认对话框的参数接口
 * @interface OpenFunction
 * @description 通过ImportantConfirm.open()方法打开对话框时使用的参数
 * @extends Omit<ConfirmArgv, 'onSuccess'> 继承MessageDialog的Confirm参数，但排除onSuccess
 */
export interface OpenFunction extends Omit<ConfirmArgv, 'onSuccess'> {
  /** 确认成功后的回调函数，返回Promise */
  success?: () => Promise<void>;
}

/**
 * ImportantConfirm组件类型
 * @type ImportantConfirmComponent
 * @description 包含静态open方法的ImportantConfirm组件类型
 */
export type ImportantConfirmComponent = NamedExoticComponent<ImportantConfirmProps> & {
  /**
   * 静态方法：打开重要确认对话框
   * @param arg - 对话框配置参数
   */
  open: (arg: OpenFunction) => void;
};
