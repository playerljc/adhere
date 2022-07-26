/// <reference types="react" />
import PropTypes from 'prop-types';
import { IContourBlockProps } from './types';
/**
 * ContourBlock
 * @constructor
 */
declare function ContourBlock(props: IContourBlockProps): JSX.Element;
declare namespace ContourBlock {
    var defaultProps: {
        className: string;
        style: {};
    };
    var propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
}
export default ContourBlock;
