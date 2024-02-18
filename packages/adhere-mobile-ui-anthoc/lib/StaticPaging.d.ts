import React from 'react';
import type { StaticPagingProps } from './types';
/**
 * usePaging
 * @param options
 * @param children
 * @param defaultPaging
 * @param pagingProps
 */
declare function StaticPaging<Option>({ options, children, defaultPaging, ...pagingProps }: StaticPagingProps<Option>): React.JSX.Element;
export default StaticPaging;
