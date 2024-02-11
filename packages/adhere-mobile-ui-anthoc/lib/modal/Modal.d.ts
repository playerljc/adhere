import { Modal } from 'antd-mobile';
import type { ModalProps } from 'antd-mobile';
declare const ModalHOC: typeof Modal & {
    defaultProps?: Partial<ModalProps>;
};
export default ModalHOC;
