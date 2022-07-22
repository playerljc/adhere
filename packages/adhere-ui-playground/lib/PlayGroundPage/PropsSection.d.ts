/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * PropsSection
 * @param title
 * @param extra
 * @param config
 * @constructor
 */
declare function PropsSection({ title, extra, config }: {
    title: any;
    extra: any;
    config: any;
}): JSX.Element;
declare namespace PropsSection {
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
export default PropsSection;
