import { Modal, ModalProps } from 'antd';

import { createFactory } from '../util';

export default createFactory<ModalProps>(Modal, {
  closable: true,
  centered: true,
  maskClosable: true,
  destroyOnClose: true,
  zIndex: 999,
});
