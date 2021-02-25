/// <reference types="react" />
import PropTypes from 'prop-types';
declare function JdCategoryTabItem({ id, children, className, style }: {
    id: any;
    children: any;
    className: any;
    style: any;
}): JSX.Element;
declare namespace JdCategoryTabItem {
    var defaultProps: {
        className: string;
        style: {};
        id: string;
    };
    var propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        id: PropTypes.Requireable<string>;
    };
}
export default JdCategoryTabItem;
