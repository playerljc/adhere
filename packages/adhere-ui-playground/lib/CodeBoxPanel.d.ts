/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * CodeBoxPanel
 * @classdesc - 代码组
 * @constructor
 */
declare function CodeBoxPanel(props: any): JSX.Element;
declare namespace CodeBoxPanel {
    var defaultProps: {
        columnCount: number;
    };
    var propTypes: {
        columnCount: PropTypes.Requireable<number>;
    };
}
export default CodeBoxPanel;
