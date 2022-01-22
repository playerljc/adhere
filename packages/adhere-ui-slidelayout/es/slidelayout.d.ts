import Overlay from './overlay';
import Push from './push';
import Revolving from './reveal';
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
export declare function slider(el: HTMLElement | null | undefined, x: string, y: string, z: string, time: string | undefined, callback: Function): void;
/**
 * createMask
 * @param zIndex
 * @param closeCallback
 */
export declare function createMask(zIndex: number | string, closeCallback: Function): HTMLElement;
declare const _default: {
    Overlay: typeof Overlay;
    Push: typeof Push;
    Revolving: typeof Revolving;
};
export default _default;
