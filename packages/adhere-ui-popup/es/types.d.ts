/**
 * IConfig
 * @interface IConfig
 */
export interface IConfig {
    onCreate?: Function;
    onBeforeShow?: Function;
    onAfterShow?: Function;
    onBeforeClose?: () => Promise<void>;
    onAfterClose?: Function;
    onDestroy?: Function;
    children?: any;
    zIndex?: number;
}
