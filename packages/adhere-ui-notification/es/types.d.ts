import React from 'react';
/**
 * IConfig
 * @interface IConfig
 */
export interface IConfig {
    style: 'ios' | 'material';
    type: 'top' | 'bottom';
    onCreate?: () => void;
    onShow?: () => void;
    onCloseBefore?: () => void;
    onCloseAfter?: () => void;
}
/**
 * IShowConfig
 * @interface IShowConfig
 */
export interface IShowConfig {
    closed: boolean;
    children: React.ReactElement;
}
/**
 * IShowStandardConfig
 * @interface IShowStandardConfig
 */
export interface IShowStandardConfig {
    closed: boolean;
    headerLabel: string | React.ReactElement;
    headerIcon: string;
    title: string | React.ReactElement;
    text: string | React.ReactElement;
    icon: string;
    datetime: string | React.ReactElement;
}
