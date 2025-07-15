import PropTypes from 'prop-types';
import React from 'react';
import type { CodeTabPanelProps } from './types';
/**
 * 代码标签面板组件
 * @component CodeTabPanel
 * @description 支持多标签页的代码展示组件
 * @param props - 组件属性
 * @returns JSX.Element
 */
declare const CodeTabPanel: React.NamedExoticComponent<CodeTabPanelProps>;
/**
 * 默认属性
 * @constant CodeTabPanelDefaultProps
 */
export declare const CodeTabPanelDefaultProps: {
    active: string;
    config: never[];
};
/**
 * 属性类型定义
 * @constant CodeTabPanelPropTypes
 */
export declare const CodeTabPanelPropTypes: {
    active: PropTypes.Requireable<string>;
    config: PropTypes.Requireable<(PropTypes.InferProps<{
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        key: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        codeText: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
    }> | null | undefined)[]>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
};
export default CodeTabPanel;
