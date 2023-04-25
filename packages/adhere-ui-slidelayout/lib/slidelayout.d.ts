import React from 'react';
export declare const selectorPrefix = "adhere-ui-slidelayout";
/**
 * slider
 * @param el
 * @param x
 * @param y
 * @param z
 * @param time
 * @param callback
 */
export declare function slider(el: HTMLElement, x: string, y: string, z: string, time?: string, callback?: Function): void;
/**
 * createMask
 * @param zIndex
 * @param closeCallback
 */
export declare function createMask(zIndex: number | string, closeCallback: () => void): HTMLDivElement;
declare const _default: {
    Overlay: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("./types").OverlayProps & React.RefAttributes<import("./types").SlideLayoutHandle>>>;
    Push: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("./types").PushProps & React.RefAttributes<import("./types").SlideLayoutHandle>>>;
    Revolving: React.MemoExoticComponent<React.ForwardRefExoticComponent<import("./types").RevealProps & React.RefAttributes<import("./types").SlideLayoutHandle>>>;
};
export default _default;
