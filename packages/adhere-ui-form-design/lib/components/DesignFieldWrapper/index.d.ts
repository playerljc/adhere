import type { FC } from 'react';
import { DesignFieldWrapperProps } from '../../types';
/**
 * DesignFieldWrapper
 * @description 设计器中组件的最外层包裹组件
 * 实现的功能
 *  1.捕获组件的click事件
 *  2.显示控件的在设计视图中的工具栏(如删除控件,clone控件......) 当id === getActiveFieldId()时，显示工具栏
 */
declare const DesignFieldWrapper: FC<DesignFieldWrapperProps>;
export default DesignFieldWrapper;
