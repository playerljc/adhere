import React from 'react';
/**
 * useFirst hook 返回类型
 * @template T - 状态类型
 */
export type UseFirst = () => [boolean, (first: boolean) => void];
/**
 * useForceUpdate hook 返回类型
 */
export type UseForceUpdate = () => () => void;
/**
 * usePrevious hook 返回类型
 * @template T - 值的类型
 */
export type UsePrevious = <T>(value: T) => T | undefined;
/**
 * use hook 的操作类型
 */
export type UseType = 'reset' | 'reload';
/**
 * use hook 返回的数据结构
 * @template T - Promise 返回的数据类型
 */
export type UseResult<T = any> = {
    /** 数据结果 */
    data: T | null;
    /** 是否正在加载 */
    isPending: boolean;
    /** 是否验证失败 */
    isValidate: boolean;
    /** 操作类型 */
    type: UseType;
    /** 重置函数 */
    reset: (...args: any[]) => Promise<T>;
    /** 重新加载函数 */
    reload: (...args: any[]) => Promise<T>;
};
/**
 * use hook 类型定义
 * @template T - Promise 返回的数据类型
 * @template Args - Promise 函数的参数类型
 */
export type Use = <T = any, Args extends any[] = any[]>(p: (...args: Args) => Promise<T>, defaultArgs?: Args) => UseResult<T>;
/**
 * useSetState hook 回调函数类型
 */
export type SetStateCallback = () => void;
/**
 * useSetState hook 返回类型
 * @template T - 状态类型
 */
export type UseSetStateReturn<T> = [
    React.RefObject<T>,
    (value: T | ((prevState: T) => T), callback?: SetStateCallback) => void
];
/**
 * useSetState hook 类型定义
 * @template T - 状态类型
 */
export type UseSetState = <T>(initialState: T | (() => T)) => UseSetStateReturn<T>;
/**
 * usePropToState hook 返回类型
 * @template T - 状态类型
 */
export type UsePropToStateReturn<T> = [T, React.Dispatch<React.SetStateAction<T>>];
/**
 * usePropToState hook 类型定义
 * @template T - 状态类型
 */
export type UsePropToState = <T>(propValue: T) => UsePropToStateReturn<T>;
/**
 * useLatestState hook 返回类型
 * @template T - 状态类型
 */
export type UseLatestStateReturn<T> = [React.RefObject<T>, React.Dispatch<React.SetStateAction<T>>];
/**
 * useLatestState hook 类型定义
 * @template T - 状态类型
 */
export type UseLatestState = <T>(initialState: T | (() => T)) => UseLatestStateReturn<T>;
/**
 * useItemsRef hook 返回类型
 * @template T - 引用值的类型
 */
export type UseItemsRefReturn<T> = {
    /** 获取指定 key 的引用 */
    get: (key: string | symbol) => T | undefined;
    /** 设置指定 key 的引用 */
    set: (key: string | symbol, value: T | null | undefined) => Map<string | symbol, T> | undefined;
    /** 获取所有 keys */
    getKeys: () => IterableIterator<string | symbol> | undefined;
    /** 获取所有引用值 */
    getRefs: () => IterableIterator<T> | undefined;
};
/**
 * useItemsRef hook 类型定义
 * @template T - 引用值的类型
 */
export type UseItemsRef = <T>() => UseItemsRefReturn<T>;
/**
 * useMediaQuery hook 返回类型
 */
export type UseMediaQueryReturn = {
    /** 是否为手机尺寸 */
    isPhone: boolean;
    /** 是否为平板尺寸 */
    isPad: boolean;
    /** 是否为PC尺寸 */
    isPC: boolean;
};
/**
 * useMediaQuery hook 类型定义
 */
export type UseMediaQuery = () => UseMediaQueryReturn;
/**
 * useTriggerQuery hook 返回类型
 * @template T - 查询参数类型
 */
export type UseTriggerQueryReturn<T extends Record<string, any>> = {
    /** 设置字段值 */
    setFieldsValue: (updater: T | ((draft: T) => void)) => void;
    /** 当前字段值 */
    fieldsValue: React.RefObject<T>;
    /** 搜索参数 */
    searchParams: React.RefObject<T>;
    /** 执行搜索 */
    search: (callback?: () => void) => void;
    /** 重置搜索 */
    reset: (callback?: () => void, defaultValue?: Partial<T>) => void;
};
/**
 * useTriggerQuery hook 类型定义
 * @template T - 查询参数类型
 */
export type UseTriggerQuery = <T extends Record<string, any>>(defaultValue: T) => UseTriggerQueryReturn<T>;
/**
 * History object interface for navigation
 */
export interface HistoryObject {
    replace: (path: string) => void;
    push?: (path: string) => void;
    go?: (n: number) => void;
    back?: () => void;
    forward?: () => void;
    length?: number;
    location?: {
        pathname: string;
        search?: string;
        hash?: string;
        state?: any;
    };
    listen?: (listener: (location: any) => void) => () => void;
}
/**
 * useHistoryBack hook 返回类型
 */
export type UseHistoryBackReturn = {
    /** 返回函数 */
    back: () => void;
};
/**
 * useHistoryBack hook 类型定义
 */
export type UseHistoryBack = (history: HistoryObject, initialPathname: string, routePath?: string) => UseHistoryBackReturn;
