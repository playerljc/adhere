import React from 'react';
import type { DisplayNameInternal, InternalNestingFormItemHandle, InternalNestingFormItemProps } from '../types';
/**
 * InternalNestingFormItem
 * @description 如果表单数据的值是非原始类型，则可以使用当前组件作为FormItem的children
 */
declare const InternalNestingFormItem: React.NamedExoticComponent<InternalNestingFormItemProps & React.RefAttributes<InternalNestingFormItemHandle>>;
declare const NestingFormItem: DisplayNameInternal<typeof InternalNestingFormItem>;
export default NestingFormItem;
