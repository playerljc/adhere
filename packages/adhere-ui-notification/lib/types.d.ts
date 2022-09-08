import type { ReactElement } from 'react';
/**
 * Config
 * @interface Config
 */
export interface Config {
    style: 'ios' | 'material';
    type: 'top' | 'bottom';
    onCreate?: () => void;
    onShow?: () => void;
    onCloseBefore?: () => void;
    onCloseAfter?: () => void;
}
/**
 * ShowConfig
 * @interface ShowConfig
 */
export interface ShowConfig {
    closed: boolean;
    children: ReactElement;
}
/**
 * ShowStandardConfig
 * @interface ShowStandardConfig
 */
export interface ShowStandardConfig {
    closed: boolean;
    headerLabel: string | ReactElement;
    headerIcon: string;
    title: string | ReactElement;
    text: string | ReactElement;
    icon: string;
    datetime: string | ReactElement;
}
