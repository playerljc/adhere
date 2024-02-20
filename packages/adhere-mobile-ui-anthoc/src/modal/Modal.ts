import { Modal } from 'antd-mobile';
import type { ModalProps } from 'antd-mobile';

import type { ModalHOCComponent } from '../types';
import { createFactory } from '../util';

const ModalHOC: ModalHOCComponent = createFactory<ModalProps>(Modal, {
  closeOnMaskClick: true,
  showCloseButton: true,
});

ModalHOC.displayName = 'Modal';

export default ModalHOC;
