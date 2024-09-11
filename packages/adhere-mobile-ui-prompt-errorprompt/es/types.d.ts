import type { ModalShowProps, ToastShowProps } from 'antd-mobile';
import type { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';
export type duration = number | VoidFunction;
export interface ErrorDialogProps extends ModalShowProps {
    duration?: duration;
}
export interface ErrorDialog {
    (props: ErrorDialogProps): ModalShowHandler;
}
export type ErrorPromptComponent = {
    openErrorMessage: (props?: ToastShowProps) => ToastHandler;
    openErrorDialog: ErrorDialog;
};
