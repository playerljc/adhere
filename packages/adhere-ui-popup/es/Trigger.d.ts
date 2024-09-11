import React from 'react';
import type { TriggerHandle, TriggerProps } from './types';
/**
 * Trigger
 * @param className
 * @param style
 * @param renderTrigger
 * @param popupConfig
 * @param title
 * @param closeIcon
 * @param extra
 * @param actions
 * @param isShowCloseAction
 * @param closeActionPosition
 * @param children
 * @param value
 * @param disabled
 * @param onChange
 * @constructor
 */
declare const Trigger: React.ForwardRefExoticComponent<TriggerProps & React.RefAttributes<TriggerHandle>>;
export default Trigger;
