import PropTypes from 'prop-types';
import React from 'react';
import { CodeTabPanelProps } from './types';
/**
 * CodeTabPanel
 * @param props
 * @constructor
 */
declare const CodeTabPanel: React.NamedExoticComponent<CodeTabPanelProps>;
export declare const CodeTabPanelDefaultProps: {
    active: string;
    config: never[];
};
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
