import React from 'react';
/**
 * IScrollLoadProps
 * @interface IScrollLoadProps
 */
export interface IScrollLoadProps {
    className?: string;
    style?: React.CSSProperties;
    loadClassName: string;
    loadStyle: React.CSSProperties;
    emptyClassName: string;
    emptyStyle: React.CSSProperties;
    errorClassName: string;
    errorStyle: React.CSSProperties;
    distance: 50;
    onScrollBottom: Function;
    onEmptyClick: Function;
    onErrorClick: Function;
    renderLoading: Function | undefined;
    renderEmpty: Function | undefined;
    renderError: Function | undefined;
}
