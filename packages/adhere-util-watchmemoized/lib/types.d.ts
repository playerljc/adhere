/**
 * 获取值的函数类型
 */
export interface IGetValueFun {
    (): any;
}
/**
 * 设置值的函数类型
 */
export interface ISetValueFun {
    (value: any): void;
}
/**
 * 创建引用的函数类型
 * @template T - 引用值的类型
 */
export interface ICreateRefFun<T = any> {
    (defaultVal?: T): [IGetValueFun, ISetValueFun, symbol];
}
/**
 * 自定义比较函数类型
 * @template T - 比较值的类型
 */
export interface ICompareModeFun<T = any> {
    (oldValue: T, newValue: T): boolean;
}
/**
 * 比较配置接口
 * @template T - 比较值的类型
 */
export interface ICompareConfig<T = any> {
    /** 属性符号 */
    property: symbol;
    /** 比较模式：深度比较、浅比较或自定义比较函数 */
    mode: 'deep' | 'light' | ICompareModeFun<T>;
}
/**
 * 监听函数类型
 * @template T - 监听数据的类型
 */
export interface IWatchHandler<T = any> {
    (oldValue?: T, newValue?: T): void;
}
/**
 * 监听所有依赖项的函数类型
 */
export interface IWatchAllFun {
    (handler: IWatchHandler, depends: Array<symbol | ICompareConfig>): () => void;
}
/**
 * 监听任一依赖项的函数类型
 */
export interface IWatchRaceFun {
    (handler: IWatchHandler, depends: Array<symbol | ICompareConfig>): () => void;
}
/**
 * 创建记忆化函数的类型
 * @template T - 函数参数类型
 * @template R - 函数返回值类型
 */
export interface ICreateMemoFun<T extends any[] = any[], R = any> {
    (handler: (...args: T) => R, stackMaxSize?: number): (...args: T) => R;
}
/**
 * 监听创建器的on方法类型
 */
export interface IWatchCreateOnFun {
    (expression: string, handler: IWatchHandler): void;
}
/**
 * 监听创建器的remove方法类型
 */
export interface IWatchCreateRemoveFun {
    (expression: string, handler: IWatchHandler): void;
}
/**
 * 监听创建器返回的对象类型
 * @template T - 源对象的类型
 */
export interface IWatchCreateResult<T extends object> {
    /** 代理后的对象 */
    value: T;
    /** 添加监听器 */
    on: IWatchCreateOnFun;
    /** 移除监听器 */
    remove: IWatchCreateRemoveFun;
}
/**
 * 监听创建函数类型
 * @template T - 源对象的类型
 */
export interface IWatchCreateFun {
    <T extends object>(srcObj: T, listeners?: Record<string, IWatchHandler>): IWatchCreateResult<T>;
}
/**
 * 记忆化缓存项类型
 * @template T - 参数类型
 * @template R - 返回值类型
 */
export interface IMemoizedItem<T extends any[] = any[], R = any> {
    /** 缓存的结果值 */
    resultVal: R;
    /** 依赖的参数 */
    depends: T;
}
/**
 * 订阅处理器类型
 */
export interface ISubscriptionHandler {
    /** 订阅类型 */
    type: string;
    /** 处理函数 */
    handler: IWatchHandler;
}
/**
 * 变更日志项类型
 */
export interface IChangeLogItem {
    /** 变更类型 */
    type: string;
    /** 是否已变更 */
    isChange: boolean;
}
/**
 * 主要接口类型
 */
export interface IWatchMemoized {
    /** 创建引用 */
    createRef: ICreateRefFun;
    /** 记忆化相关功能 */
    memoized: {
        /** 监听功能 */
        watch: {
            /** 监听所有依赖项 */
            all: IWatchAllFun;
            /** 监听任一依赖项 */
            race: IWatchRaceFun;
        };
        /** 创建记忆化函数 */
        createMemoFun: ICreateMemoFun;
    };
    /** 监听功能 */
    watch: {
        /** 创建监听器 */
        create: IWatchCreateFun;
    };
}
