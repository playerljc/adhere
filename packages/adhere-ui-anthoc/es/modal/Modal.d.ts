import { Modal } from 'antd';
import type { ModalProps } from 'antd';
declare const ModalHOC: typeof Modal & {
    defaultProps?: Partial<ModalProps>;
    override?: (props: Partial<ModalProps>) => Partial<ModalProps>;
};
export default ModalHOC;
