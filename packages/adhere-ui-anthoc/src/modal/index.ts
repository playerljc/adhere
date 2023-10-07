import { Modal } from 'antd';

import { createFactory } from '../util';

export default createFactory(Modal, {
  closable: true,
  centered: true,
  maskClosable: true,
  destroyOnClose: true,
  zIndex: 999,
});
