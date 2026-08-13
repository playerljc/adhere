import { ButtonProps as AntdMobileButtonProps } from 'antd-mobile';
import type { CSSProperties, MouseEvent, ReactNode } from 'react';

/**
 * Popup配置接口
 * @interface IConfig
 */
export interface IConfig {
  /** 创建时的回调 */
  onCreate?: () => void;
  /** 显示前的回调 */
  onBeforeShow?: () => void;
  /** 显示后的回调 */
  onAfterShow?: () => void;
  /** 更新时的回调 */
  onUpdate?: () => void;
  /** 关闭前的回调，返回Promise */
  onBeforeClose?: () => Promise<void> | void;
  /** 关闭后的回调 */
  onAfterClose?: () => void;
  /** 销毁时的回调 */
  onDestroy?: () => void;
  /** 弹窗内容 */
  children: ReactNode;
  /** z-index层级 */
  zIndex?: number;
}

/**
 * 操作按钮配置
 */
export interface ActionConfig extends Omit<AntdMobileButtonProps, 'onClick'> {
  /** 按钮唯一标识 */
  key: string | number;
  /** 点击回调，返回Promise */
  onClick?: () => Promise<any>;
}

/**
 * Trigger组件属性
 */
export interface TriggerProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 弹窗内容 */
  children?: ReactNode;
  /** 当前值 */
  value?: any;
  /** 值变化回调 */
  onChange?: (value: any) => void;
  /** 渲染触发器 */
  renderTrigger?: () => ReactNode;
  /** 弹窗标题 */
  title?: ReactNode;
  /** 关闭图标 */
  closeIcon?: ReactNode | boolean;
  /** 额外内容 */
  extra?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示关闭按钮 */
  isShowCloseAction?: boolean;
  /** 关闭按钮位置 */
  closeActionPosition?: 'start' | 'end';
  /** 操作按钮配置 */
  actions?: ActionConfig[];
  /** 弹窗配置 */
  popupConfig?: Omit<IConfig, 'children'>;
  /** 触发前的回调 */
  beforeTrigger?: () => Promise<void>;
}

/**
 * TriggerPrompt组件属性
 */
export type TriggerPromptProps = TriggerProps & {
  /** 是否显示关闭按钮 */
  isShowCloseAction?: boolean;
  /** 提交回调 */
  onSubmit?: () => Promise<any>;
  /** 确认按钮文本 */
  okText?: string;
};

/**
 * SubmitButton组件属性
 */
export type SubmitButtonProps = Omit<AntdMobileButtonProps, 'onClick'> & {
  /** 点击回调 */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<any> | void;
};

/**
 * TriggerPrompt组件引用
 */
export interface TriggerPromptHandle {
  /** 关闭弹窗 */
  close: () => void;
}

/**
 * Trigger组件引用
 */
export interface TriggerHandle {
  /** 关闭弹窗 */
  close: () => void;
}
