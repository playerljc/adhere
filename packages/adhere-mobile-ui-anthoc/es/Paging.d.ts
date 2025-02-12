import React from 'react';
import type { PagingProps } from './types';
export declare const DEFAULT_LIMIT = 20;
/**
 * Paging
 * @param options
 * @param children
 * @param defaultPaging
 * @param isLocal
 * @param onLoad
 * @param onDataSourceChange
 * @param prslProps
 */
declare function Paging<Option>({ options, children, defaultPaging, isLocal, onLoad, onDataSourceChange, ...prslProps }: PagingProps<Option>): React.JSX.Element;
export default Paging;
