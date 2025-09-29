import type { ModalTriggerPromptProps, ModalTriggerProps } from '../types';
import { createFactory } from '../util';
import Context from './Context';
import Modal from './Modal';
import ModalTrigger from './Trigger';
import ModalTriggerPrompt from './TriggerPrompt';

Modal.Context = Context;
Modal.Trigger = createFactory<ModalTriggerProps<any>>(ModalTrigger, {});
Modal.TriggerPrompt = createFactory<ModalTriggerPromptProps<any>>(ModalTriggerPrompt, {});

export default Modal;
