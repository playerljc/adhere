import PropTypes from 'prop-types';
import React from 'react';
export declare const CodeTabPanelDefaultProps: {
    active: string;
    config: never[];
};
export declare const CodeTabPanelPropTypes: {
    active: PropTypes.Requireable<string>;
    config: PropTypes.Requireable<(PropTypes.InferProps<{
        key: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        codeText: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
    }> | null | undefined)[]>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
};
declare const _default: React.MemoExoticComponent<any>;
export default _default;
