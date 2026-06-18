import React, { type ReactNode } from 'react';
import type { DesignValueProps } from '../../../types';
/**
 * StyleProperty
 *
 * @description
 * 现在样式的设置用的是完全使用@monaco-editor来实现
 * 也就是说都需要在编辑器中手写css代码的方式实现
 *
 * @param {DesignValueProps} props
 */
export declare function StyleProperty(props: DesignValueProps): React.JSX.Element;
/**
 * renderStyleProperty
 * @description 我觉得直接写代码就行，不需要那么多的可视化设置
 * @param props
 */
export declare function renderStyleProperty(props: DesignValueProps): ReactNode;
