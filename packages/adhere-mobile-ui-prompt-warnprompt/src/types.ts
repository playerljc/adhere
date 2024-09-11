import { ToastShowProps } from 'antd-mobile';
import type { ModalShowProps } from 'antd-mobile';
import type { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
import { ToastHandler } from 'antd-mobile/es/components/toast/methods';

export type duration = number | VoidFunction;

export interface WarnDialogProps extends ModalShowProps {
  duration?: duration;
}

export interface WarnDialog {
  (props: WarnDialogProps): ModalShowHandler;
}

export type WarnPromptComponent = {
  openWarnMessage: (props?: ToastShowProps) => ToastHandler;
  openWarnDialog: WarnDialog;
};
