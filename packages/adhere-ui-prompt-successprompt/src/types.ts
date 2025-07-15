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
 * 可以是数字（毫秒）或空函数
 */
export type Duration = number | VoidFunction;

/**
 * 联合内容类型
 * 可以是配置内容或消息参数
 */
export type JointContent = ConfigContent | ArgsProps;

/**
 * 成功对话框属性接口
 * 继承自ModalFuncProps并添加自定义属性
 */
export interface SuccessDialogProps extends ModalFuncProps {
  /** 自动关闭的持续时间（毫秒），默认为3000ms */
  duration?: Duration;
}

/**
 * 成功对话框函数类型
 * 返回ModalFunc的返回类型
 */
export interface SuccessDialog {
  (props: SuccessDialogProps): ReturnType<ModalFunc>;
}

/**
 * 成功消息函数参数接口
 */
export interface SuccessMessageParams {
  /** 消息内容 */
  content?: JointContent;
  /** 显示持续时间 */
  duration?: Duration;
  /** 关闭回调函数 */
  onClose?: VoidFunction;
}
