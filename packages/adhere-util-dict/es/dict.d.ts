import type { IConfig, IDict } from './types';
type TV<H> = {
    isStatic?: boolean;
    handler: H;
    isImmediateAccess?: boolean;
};
/**
 * genModuleDict
 * @param handlerOptions
 * @param {boolean} isUseMemo
 */
export declare function genModuleDict<T extends {
    [key: string]: TV<H>;
}, H extends (...args: any[]) => ReturnType<H>>(handlerOptions: T, isUseMemo?: boolean): {
    names: Partial<{
        [key: string]: string;
    }>;
    values: Partial<{ [K in keyof T]: {
        value: ReturnType<T[K]["handler"]>;
    }; }>;
};
declare const Dict: {
    /**
     * handler - 字典的定义对象
     */
    handlers: Partial<{
        [key: string]: import("./types").HandlerTargetValue;
    }>;
    /**
     * value - 字典的使用对象
     */
    value: Partial<{
        [key: string]: {
            value: any;
            refresh: () => any;
        };
    }>;
    /**
     * init - 字典的初始化
     * @param {
     *   {
     *    initStatic: () => void;
     *    initRemote: () => void;
     *   }[]
     * } dictArray 字典定义的集合
     * @param {IConfig} _config 字典的配置
     * @return {void}
     */
    init: (dictArray?: IDict[], _config?: IConfig) => void;
    /**
     * React - 字典对应的React组件
     */
    React: import("./types").DictReactComponentObj;
    /**
     * useDict - 字典的hook
     */
    useDict: (dictName: string, _options?: import("./types").UseDictOptions) => import("./types").UseDictState;
    /**
     * genModuleDict - 字典生成器
     */
    genModuleDict: typeof genModuleDict;
};
export default Dict;
