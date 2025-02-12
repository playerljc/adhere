import type { ModalShowProps, ToastShowProps } from 'antd-mobile';
import type { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';
export type duration = number | VoidFunction;
export interface SuccessDialogProps extends ModalShowProps {
    duration?: duration;
}
export interface SuccessDialog {
    (props: SuccessDialogProps): ModalShowHandler;
}
export type SuccessDialogComponent = {
    openSuccessMessage: (props?: ToastShowProps) => ToastHandler;
    openSuccessDialog: SuccessDialog;
};
