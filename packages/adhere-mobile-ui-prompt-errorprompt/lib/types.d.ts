import { ModalShowProps } from 'antd-mobile';
import { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
export type duration = number | VoidFunction;
export interface ErrorDialogProps extends ModalShowProps {
    duration?: duration;
}
export interface ErrorDialog {
    (props: ErrorDialogProps): ModalShowHandler;
}
