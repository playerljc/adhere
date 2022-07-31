import React from 'react';
import PropTypes from 'prop-types';
export declare const defaultProps: {};
export declare const propTypes: {
    getScrollWrapContainer: PropTypes.Requireable<(...args: any[]) => any>;
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    isLoading: PropTypes.Requireable<boolean>;
    hasMore: PropTypes.Requireable<boolean>;
    onLoadMore: PropTypes.Requireable<(...args: any[]) => any>;
    renderFirstLoading: PropTypes.Requireable<(...args: any[]) => any>;
    scrollLoadProps: PropTypes.Requireable<PropTypes.InferProps<{
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        loadClassName: PropTypes.Requireable<string>;
        loadStyle: PropTypes.Requireable<object>;
        emptyClassName: PropTypes.Requireable<string>;
        emptyStyle: PropTypes.Requireable<object>;
        errorClassName: PropTypes.Requireable<string>;
        errorStyle: PropTypes.Requireable<object>;
        distance: PropTypes.Requireable<number>;
        onScrollBottom: PropTypes.Requireable<(...args: any[]) => any>;
        onEmptyClick: PropTypes.Requireable<(...args: any[]) => any>;
        onErrorClick: PropTypes.Requireable<(...args: any[]) => any>;
        renderLoading: PropTypes.Requireable<(...args: any[]) => any>;
        renderEmpty: PropTypes.Requireable<(...args: any[]) => any>;
        renderError: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
};
declare const _default: React.ForwardRefExoticComponent<Partial<{
    getScrollWrapContainer: () => HTMLElement;
    className: string;
    style: React.CSSProperties;
    isLoading: boolean;
    hasMore: boolean;
    onLoadMore: Function;
    renderFirstLoading: () => React.ReactNode;
    scrollLoadProps: {
        className: string;
        style: React.CSSProperties;
        loadClassName: string;
        loadStyle: React.CSSProperties;
        emptyClassName: string;
        emptyStyle: React.CSSProperties;
        errorClassName: string;
        errorStyle: React.CSSProperties;
        distance: number;
        onScrollBottom: Function;
        onEmptyClick: Function;
        onErrorClick: Function;
        renderLoading: Function | undefined;
        renderEmpty: Function | undefined;
        renderError: Function | undefined;
    };
    children: React.ReactNode;
}> & React.RefAttributes<unknown>>;
export default _default;