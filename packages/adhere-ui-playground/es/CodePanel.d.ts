import PropTypes from 'prop-types';
import React from 'react';
import { CodePanelProps } from './types';
/**
 * CodePanel
 * @classdesc - 单一的代码片段
 * @constructor
 */
declare const CodePanel: React.NamedExoticComponent<CodePanelProps>;
export declare const CodePanelDefaultProps: {
    codeText: string;
    theme: string;
};
export declare const CodePanelPropTypes: {
    codeText: PropTypes.Requireable<string>;
    theme: PropTypes.Requireable<string>;
};
export default CodePanel;
