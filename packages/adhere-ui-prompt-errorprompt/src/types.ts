import type { ArgsProps } from 'antd/lib/message';
import { ModalFunc } from 'antd/lib/modal/confirm';
import type { ModalFuncProps } from 'antd/lib/modal/interface';
import type { ReactNode } from 'react';

export type ConfigContent = ReactNode;
export type duration = number | VoidFunction;
export type JointContent = ConfigContent | ArgsProps;

export interface ErrorDialogProps extends ModalFuncProps {
  duration?: duration;
}

export interface ErrorDialog {
  (props: ErrorDialogProps): ReturnType<ModalFunc>;
}
