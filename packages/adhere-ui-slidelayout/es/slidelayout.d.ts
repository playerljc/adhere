import React from 'react';
export declare const selectorPrefix = "adhere-ui-slide-layout";
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
    Overlay: React.NamedExoticComponent<import("./types").OverlayProps & React.RefAttributes<import("./types").SlideLayoutHandle>>;
    Push: React.NamedExoticComponent<import("./types").PushProps & React.RefAttributes<import("./types").SlideLayoutHandle>>;
    Revolving: React.NamedExoticComponent<import("./types").RevealProps & React.RefAttributes<import("./types").SlideLayoutHandle>>;
};
export default _default;
