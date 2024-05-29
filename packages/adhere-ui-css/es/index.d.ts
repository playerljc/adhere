import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
export interface Init {
    (theme: {
        [prop: string]: string;
    }, wrapperEL?: HTMLElement, media?: ConfigProviderProps['media']): void;
}
/**
 * init
 * @param theme
 * @param wrapperEL
 * @param media
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
