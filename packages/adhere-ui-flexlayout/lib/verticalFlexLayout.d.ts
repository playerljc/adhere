import PropTypes from 'prop-types';
import { IVerticalFlexLayoutProps } from './types';
/**
 * VerticalFlexLayout
 * @param className
 * @param style
 * @param topClassName
 * @param topStyle
 * @param rightClassName
 * @param rightStyle
 * @param bottomClassName
 * @param bottomStyle
 * @param leftClassName
 * @param leftStyle
 * @param mainClassName
 * @param mainStyle
 * @param mainAutoWrapClassName
 * @param mainAutoStyle
 * @param mainWrapClassName
 * @param mainWrapStyle
 * @param renderTop
 * @param renderRight
 * @param renderBottom
 * @param renderLeft
 * @param renderMain
 * @param topProps
 * @param rightProps
 * @param bottomProps
 * @param leftProps
 * @param mainProps
 * @param mainAutoWrapProps
 * @constructor
 */
declare const VerticalFlexLayout: {
    ({ className, style, topClassName, topStyle, rightClassName, rightStyle, bottomClassName, bottomStyle, leftClassName, leftStyle, mainClassName, mainStyle, mainAutoWrapClassName, mainAutoStyle, mainWrapClassName, mainWrapStyle, renderTop, renderRight, renderBottom, renderLeft, renderMain, topProps, rightProps, bottomProps, leftProps, mainProps, mainAutoWrapProps, }: IVerticalFlexLayoutProps): JSX.Element;
    defaultProps: {
        className: string;
        style: {};
        topClassName: string;
        topStyle: {};
        rightClassName: string;
        rightStyle: {};
        bottomClassName: string;
        bottomStyle: {};
        leftClassName: string;
        leftStyle: {};
        mainClassName: string;
        mainStyle: {};
        mainAutoWrapClassName: string;
        mainAutoStyle: {};
        mainWrapClassName: string;
        mainWrapStyle: {};
        topProps: {};
        rightProps: {};
        bottomProps: {};
        leftProps: {};
        mainProps: {};
        mainAutoWrapProps: {};
        renderTop: null;
        renderRight: null;
        renderBottom: null;
        renderLeft: null;
        renderMain: null;
    };
    propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        topClassName: PropTypes.Requireable<string>;
        topStyle: PropTypes.Requireable<object>;
        rightClassName: PropTypes.Requireable<string>;
        rightStyle: PropTypes.Requireable<object>;
        bottomClassName: PropTypes.Requireable<string>;
        bottomStyle: PropTypes.Requireable<object>;
        leftClassName: PropTypes.Requireable<string>;
        leftStyle: PropTypes.Requireable<object>;
        mainClassName: PropTypes.Requireable<string>;
        mainStyle: PropTypes.Requireable<object>;
        mainAutoWrapClassName: PropTypes.Requireable<string>;
        mainAutoStyle: PropTypes.Requireable<object>;
        mainWrapClassName: PropTypes.Requireable<string>;
        mainWrapStyle: PropTypes.Requireable<object>;
        renderTop: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        renderRight: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        renderBottom: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        renderLeft: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        renderMain: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        topProps: PropTypes.Requireable<object>;
        rightProps: PropTypes.Requireable<object>;
        bottomProps: PropTypes.Requireable<object>;
        leftProps: PropTypes.Requireable<object>;
        mainProps: PropTypes.Requireable<object>;
        mainAutoWrapProps: PropTypes.Requireable<object>;
    };
};
export declare const defaultProps: {
    className: string;
    style: {};
    topClassName: string;
    topStyle: {};
    rightClassName: string;
    rightStyle: {};
    bottomClassName: string;
    bottomStyle: {};
    leftClassName: string;
    leftStyle: {};
    mainClassName: string;
    mainStyle: {};
    mainAutoWrapClassName: string;
    mainAutoStyle: {};
    mainWrapClassName: string;
    mainWrapStyle: {};
    topProps: {};
    rightProps: {};
    bottomProps: {};
    leftProps: {};
    mainProps: {};
    mainAutoWrapProps: {};
    renderTop: null;
    renderRight: null;
    renderBottom: null;
    renderLeft: null;
    renderMain: null;
};
export declare const propTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    topClassName: PropTypes.Requireable<string>;
    topStyle: PropTypes.Requireable<object>;
    rightClassName: PropTypes.Requireable<string>;
    rightStyle: PropTypes.Requireable<object>;
    bottomClassName: PropTypes.Requireable<string>;
    bottomStyle: PropTypes.Requireable<object>;
    leftClassName: PropTypes.Requireable<string>;
    leftStyle: PropTypes.Requireable<object>;
    mainClassName: PropTypes.Requireable<string>;
    mainStyle: PropTypes.Requireable<object>;
    mainAutoWrapClassName: PropTypes.Requireable<string>;
    mainAutoStyle: PropTypes.Requireable<object>;
    mainWrapClassName: PropTypes.Requireable<string>;
    mainWrapStyle: PropTypes.Requireable<object>;
    renderTop: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    renderRight: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    renderBottom: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    renderLeft: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    renderMain: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    topProps: PropTypes.Requireable<object>;
    rightProps: PropTypes.Requireable<object>;
    bottomProps: PropTypes.Requireable<object>;
    leftProps: PropTypes.Requireable<object>;
    mainProps: PropTypes.Requireable<object>;
    mainAutoWrapProps: PropTypes.Requireable<object>;
};
export default VerticalFlexLayout;
