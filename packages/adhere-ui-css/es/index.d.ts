export interface Init {
    (theme: {
        [prop: string]: string;
    }, wrapperEL?: HTMLElement): void;
}
/**
 * init
 * @param theme
 * @param wrapperEL
 */
declare const init: Init;
/**
 * theme
 * {
 *   colorPrimary
 * }
 * @param theme
 */
export default init;
