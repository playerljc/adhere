import React from 'react';
/**
 * IStickupLayoutProps
 * @interface IStickupLayoutProps
 */
export interface IStickupLayoutProps {
    className?: string;
    style?: React.CSSProperties;
    fixedClassName?: string;
    fixedStyle?: React.CSSProperties;
    innerClassName?: string;
    innerStyle?: React.CSSProperties;
    onChange?: Function;
}
export interface IIndexItem {
    start: number;
    end: number;
    dom: HTMLElement;
    index: number;
}
