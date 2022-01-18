/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * CodePanel
 * @param props
 * @constructor
 */
declare function CodePanel(props: any): JSX.Element;
declare namespace CodePanel {
    var defaultProps: {
        codeText: string;
        expand: boolean;
    };
    var propTypes: {
        codeText: PropTypes.Requireable<string>;
        expand: PropTypes.Requireable<boolean>;
    };
}
export default CodePanel;
