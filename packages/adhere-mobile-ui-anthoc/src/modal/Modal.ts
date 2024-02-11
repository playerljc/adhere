import { Modal } from 'antd-mobile';
import type { ModalProps } from 'antd-mobile';

import { createFactory } from '../util';

const ModalHOC: typeof Modal & {
  defaultProps?: Partial<ModalProps>;
} = createFactory<ModalProps>(Modal, {});

ModalHOC.displayName = 'Modal';

export default ModalHOC;
