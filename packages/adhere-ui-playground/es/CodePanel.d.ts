import React from 'react';
import PropTypes from 'prop-types';
import { ICodePanelProps } from './types';
/**
 * CodePanel
 * @classdesc - 单一的代码片段
 * @constructor
 */
declare function CodePanel(props: ICodePanelProps): JSX.Element;
declare namespace CodePanel {
    var defaultProps: {
        codeText: string;
        theme: string;
    };
    var propTypes: {
        codeText: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
    };
}
export declare const CodePanelDefaultProps: {
    codeText: string;
    theme: string;
};
export declare const CodePanelPropTypes: {
    codeText: PropTypes.Requireable<string>;
    theme: PropTypes.Requireable<string>;
};
declare const _default: React.MemoExoticComponent<typeof CodePanel>;
export default _default;
