import type { PopupTriggerPromptProps, PopupTriggerProps } from '../types';
import { createFactory } from '../util';
import Context from './Context';
import Popup from './Popup';
import PopupTrigger from './Trigger';
import PopupTriggerPrompt from './TriggerPrompt';
import { clear, show } from './show';

Popup.Context = Context;

Popup.Trigger = createFactory<PopupTriggerProps<any>>(PopupTrigger, {});
Popup.TriggerPrompt = createFactory<PopupTriggerPromptProps<any>>(PopupTriggerPrompt, {});

Popup.show = show;
Popup.clear = clear;

export default Popup;
