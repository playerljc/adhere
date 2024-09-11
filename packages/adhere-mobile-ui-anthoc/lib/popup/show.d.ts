import type { ReactElement } from 'react';
import type { PopupShowHandler, PopupShowProps } from '../types';
/**
 * PopupWrapper
 * @param actions
 * @param closeOnAction
 * @param title
 * @param header
 * @param close
 * @param children
 * @param popupProps
 * @constructor
 */
export declare function PopupWrapper({ actions, closeOnAction, title, header, close, children, ...popupProps }: PopupShowProps & {
    visible: boolean;
    close?: () => void;
}): ReactElement;
/**
 * show
 * @param {PopupShowProps} props
 * @return PopupShowHandler
 */
export declare function show(props: PopupShowProps): PopupShowHandler;
/**
 * clear
 */
export declare function clear(): void;
