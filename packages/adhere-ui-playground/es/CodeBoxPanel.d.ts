import React from 'react';
import PropTypes from 'prop-types';
import { ICodeBoxProps } from './types';
/**
 * CodeBoxPanel
 * @classdesc - 代码组
 * @constructor
 */
declare function CodeBoxPanel(props: ICodeBoxProps): JSX.Element;
declare namespace CodeBoxPanel {
    var defaultProps: {
        title: string;
        extra: null;
        isShowExpandAllBtn: boolean;
        columnCount: number;
        expandAll: boolean;
        config: never[];
    };
    var propTypes: {
        title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        isShowExpandAllBtn: PropTypes.Requireable<boolean>;
        columnCount: PropTypes.Requireable<number>;
        expandAll: PropTypes.Requireable<boolean>;
        config: PropTypes.Requireable<any[]>;
    };
}
declare const _default: React.MemoExoticComponent<typeof CodeBoxPanel>;
export default _default;
