import React from 'react';
import type { PRSLHandle, PRSLProps } from './types';
/**
 * PRSL
 * @description
 * SearchKeyWord
 * Toolbar
 * beforeInnerElement
 * pullToRefreshElement: {
 *   {scrollLoadBeforeInnerElement}
 *   {scrollLoadElement}
 *   {scrollLoadAfterInnerElement}
 *   {showBackTopAnimation && backTopAnimationElement}
 * }
 * afterInnerElement
 */
declare const PRSL: React.NamedExoticComponent<PRSLProps & React.RefAttributes<PRSLHandle>>;
export default PRSL;
