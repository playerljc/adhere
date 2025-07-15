import PropTypes from 'prop-types';
import React from 'react';
import type { CodePanelProps } from './types';
/**
 * 代码面板组件
 * @component CodePanel
 * @description 单一的代码片段展示组件，基于component-playground实现
 * @param props - 组件属性
 * @returns JSX.Element
 */
declare const CodePanel: React.NamedExoticComponent<CodePanelProps>;
/**
 * 默认属性
 * @constant CodePanelDefaultProps
 */
export declare const CodePanelDefaultProps: {
    codeText: string;
    theme: string;
};
/**
 * 属性类型定义
 * @constant CodePanelPropTypes
 */
export declare const CodePanelPropTypes: {
    codeText: PropTypes.Requireable<string>;
    theme: PropTypes.Requireable<string>;
};
export default CodePanel;
