import { Modal } from 'antd';
import type { ModalProps } from 'antd';
declare const ModalHOC: typeof Modal & {
    defaultProps?: Partial<ModalProps>;
};
export default ModalHOC;
