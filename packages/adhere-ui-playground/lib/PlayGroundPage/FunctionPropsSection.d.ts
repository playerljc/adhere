/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * FunctionPropsSection
 * @param title
 * @param extra
 * @param props
 * @constructor
 */
declare function FunctionPropsSection({ title, extra, config }: {
    title: any;
    extra: any;
    config: any;
}): JSX.Element;
declare namespace FunctionPropsSection {
    var defaultProps: {
        config: never[];
        className: string;
        style: {};
    };
    var propTypes: {
        config: PropTypes.Requireable<unknown[]>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export default FunctionPropsSection;
