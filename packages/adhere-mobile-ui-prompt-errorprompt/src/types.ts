import type { ModalShowProps, ToastShowProps } from 'antd-mobile';
import type { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';

/**
 * 持续时间类型
 * 可以是数字（毫秒）或空函数
 */
export type Duration = number | VoidFunction;

/**
 * 错误对话框属性接口
 * 继承自ModalShowProps，并添加可选的持续时间配置
 */
export interface ErrorDialogProps extends ModalShowProps {
  /** 对话框自动关闭的持续时间（毫秒），如果为0或空函数则不自动关闭 */
  duration?: Duration;
}

/**
 * 错误对话框函数类型
 * 接收ErrorDialogProps参数，返回ModalShowHandler
 */
export type ErrorDialog = (props: ErrorDialogProps) => ModalShowHandler;

/**
 * 错误提示组件接口
 * 包含错误消息和错误对话框两个主要功能
 */
export interface ErrorPromptComponent {
  /** 显示错误消息提示 */
  openErrorMessage: (props?: ToastShowProps) => ToastHandler;
  /** 显示错误对话框 */
  openErrorDialog: ErrorDialog;
}
