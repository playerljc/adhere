import { Modal } from 'antd';
import type { ModalProps } from 'antd';

import { createFactory } from '../util';

const ModalHOC: typeof Modal & {
  defaultProps?: Partial<ModalProps>;
} = createFactory<ModalProps>(Modal, {
  closable: true,
  centered: true,
  maskClosable: true,
  destroyOnClose: true,
  zIndex: 999,
});

export default ModalHOC;
