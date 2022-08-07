/// <reference types="react" />
import PropTypes from 'prop-types';
import { IToolBarLayoutProps } from './types';
/**
 * ToolBarLayout
 * @param topToolBarItems
 * @param bottomToolBarItems
 * @param children
 * @param className
 * @param topClassName
 * @param bottomClassName
 * @param mainAutoWrapClassName
 * @param topProps
 * @param bottomProps
 * @param otherProps
 * @constructor
 */
declare function ToolBarLayout({ topToolBarItems, bottomToolBarItems, children, className, topClassName, bottomClassName, mainAutoWrapClassName, topProps, bottomProps, ...otherProps }: IToolBarLayoutProps): JSX.Element;
declare namespace ToolBarLayout {
    var defaultProps: {
        topToolBarItems: never[];
        bottomToolBarItems: never[];
    };
    var propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        topClassName: PropTypes.Requireable<string>;
        topStyle: PropTypes.Requireable<object>;
        bottomClassName: PropTypes.Requireable<string>;
        bottomStyle: PropTypes.Requireable<object>;
        mainClassName: PropTypes.Requireable<string>;
        mainStyle: PropTypes.Requireable<object>;
        mainAutoWrapClassName: PropTypes.Requireable<string>;
        mainAutoStyle: PropTypes.Requireable<object>;
        mainWrapClassName: PropTypes.Requireable<string>;
        mainWrapStyle: PropTypes.Requireable<object>;
        topToolBarItems: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        bottomToolBarItems: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        topProps: PropTypes.Requireable<object>;
        bottomProps: PropTypes.Requireable<object>;
        mainProps: PropTypes.Requireable<object>;
        mainAutoWrapProps: PropTypes.Requireable<object>;
    };
}
export default ToolBarLayout;
