declare const _default: {
    Dict: {
        handlers: Partial<{
            [key: string]: import("@baifendian/adhere-util-dict/es/types.js").HandlerTargetValue;
        }>;
        value: Partial<{
            [key: string]: {
                value: any;
                refresh: () => any;
            };
        }>;
        init: (dictArray?: import("@baifendian/adhere-util-dict/es/types.js").IDict[], _config?: import("@baifendian/adhere-util-dict/es/types.js").IConfig) => void;
        React: import("@baifendian/adhere-util-dict/es/types.js").DictReactComponentObj;
        useDict: (dictName: string, _options?: import("@baifendian/adhere-util-dict/es/types.js").UseDictOptions) => import("@baifendian/adhere-util-dict/es/types.js").UseDictState;
        genModuleDict: typeof import("@baifendian/adhere-util-dict/es/dict.js").genModuleDict;
    };
};
export default _default;
