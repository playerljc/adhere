import { ModalShowProps } from 'antd-mobile';
import { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
export type duration = number | VoidFunction;
export interface SuccessDialogProps extends ModalShowProps {
    duration?: duration;
}
export interface SuccessDialog {
    (props: SuccessDialogProps): ModalShowHandler;
}
