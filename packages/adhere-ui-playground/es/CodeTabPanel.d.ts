/// <reference types="react" />
import PropTypes from 'prop-types';
import { ICodeTabPanelProps } from './types';
/**
 * CodeTabPanel
 * @param props
 * @constructor
 */
declare function CodeTabPanel(props: ICodeTabPanelProps): JSX.Element;
declare namespace CodeTabPanel {
    var defaultProps: {
        active: string;
        config: never[];
    };
    var propTypes: {
        active: PropTypes.Requireable<string>;
        config: PropTypes.Requireable<(PropTypes.InferProps<{
            key: PropTypes.Requireable<string>;
            title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            codeText: PropTypes.Requireable<string>;
            theme: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
    };
}
export declare const CodeTabPanelDefaultProps: {
    active: string;
    config: never[];
};
export declare const CodeTabPanelPropTypes: {
    active: PropTypes.Requireable<string>;
    config: PropTypes.Requireable<(PropTypes.InferProps<{
        key: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        codeText: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
    }> | null | undefined)[]>;
};
export default CodeTabPanel;
