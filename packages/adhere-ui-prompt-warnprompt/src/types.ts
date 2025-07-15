import type { ArgsProps } from 'antd/lib/message';
import { ModalFunc } from 'antd/lib/modal/confirm';
import type { ModalFuncProps } from 'antd/lib/modal/interface';
import type { ReactNode } from 'react';

/**
 * 配置内容类型
 * 可以是React节点或消息参数
 */
export type ConfigContent = ReactNode;

/**
 * 持续时间类型
 * 可以是数字（毫秒）或无参数函数
 */
export type Duration = number | VoidFunction;

/**
 * 联合内容类型
 * 可以是配置内容或消息参数
 */
export type JointContent = ConfigContent | ArgsProps;

/**
 * 警告对话框属性接口
 * 继承自ModalFuncProps并添加可选的持续时间
 */
export interface WarnDialogProps extends ModalFuncProps {
  /** 自动关闭的持续时间（毫秒），如果为0或未提供则不自动关闭 */
  duration?: Duration;
}

/**
 * 警告对话框函数类型
 * 接收WarnDialogProps参数，返回ModalFunc的返回值
 */
export interface WarnDialog {
  (props: WarnDialogProps): ReturnType<ModalFunc>;
}

/**
 * 警告消息函数类型
 * 用于显示警告消息
 */
export interface WarnMessage {
  (
    content?: JointContent,
    duration?: Duration,
    onClose?: VoidFunction,
  ): void;
}
