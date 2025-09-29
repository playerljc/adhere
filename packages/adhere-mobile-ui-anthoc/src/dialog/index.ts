import type { DialogTriggerPromptProps, DialogTriggerProps } from '../types';
import { createFactory } from '../util';
import Context from './Context';
import Dialog from './Dialog';
import DialogTrigger from './Trigger';
import DialogTriggerPrompt from './TriggerPrompt';

Dialog.Context = Context;
Dialog.Trigger = createFactory<DialogTriggerProps<any>>(DialogTrigger, {});
Dialog.TriggerPrompt = createFactory<DialogTriggerPromptProps<any>>(DialogTriggerPrompt, {});

export default Dialog;
