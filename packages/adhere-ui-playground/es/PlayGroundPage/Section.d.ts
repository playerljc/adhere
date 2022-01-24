/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * Section
 * @param props
 * @constructor
 */
declare function Section(props: any): JSX.Element;
declare namespace Section {
    var defaultProps: {
        className: string;
        style: {};
    };
    var propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export declare const SectionDefaultProps: {
    className: string;
    style: {};
};
export declare const SectionPropTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
};
export default Section;
