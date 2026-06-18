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
 * @param props
 */
export declare function renderStyleProperty(props: DesignValueProps): ReactNode;
