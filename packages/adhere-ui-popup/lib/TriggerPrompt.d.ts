import React from 'react';
import type { TriggerPromptHandle } from './types';
/**
 * TriggerPrompt
 * @constructor
 */
declare const TriggerPrompt: React.ForwardRefExoticComponent<Omit<import("./types").TriggerProps, "actions"> & {
    isShowCloseAction?: boolean;
    onSubmit?: () => Promise<any>;
    okText?: string;
} & React.RefAttributes<TriggerPromptHandle>>;
export default TriggerPrompt;
