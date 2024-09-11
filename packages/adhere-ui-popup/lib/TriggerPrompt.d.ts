import React from 'react';
import type { TriggerPromptHandle } from './types';
/**
 * TriggerPrompt
 * @constructor
 */
declare const TriggerPrompt: React.ForwardRefExoticComponent<Omit<import("./types").TriggerProps, "actions"> & {
    isShowCloseAction?: boolean | undefined;
    onSubmit?: (() => Promise<any>) | undefined;
    okText?: string | undefined;
} & React.RefAttributes<TriggerPromptHandle>>;
export default TriggerPrompt;
