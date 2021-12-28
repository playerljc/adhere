/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * StickupLayoutItem
 * @constructor
 */
declare function StickupLayoutItem(props: any): JSX.Element;
declare namespace StickupLayoutItem {
    var defaultProps: {
        className: string;
        style: {};
        title: string;
        content: null;
    };
    var propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export default StickupLayoutItem;
