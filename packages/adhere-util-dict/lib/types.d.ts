import type { ReactElement, ReactNode } from 'react';
export interface IDict {
    initStatic: () => {};
    initRemote: () => {};
}
export interface DictObj {
    handlers: any;
    value: any;
    init: InitFunc;
    React: DictReactComponentObj;
    useDict: Function;
}
export interface InitFunc {
    (dictArray: IDict[], config: IConfig): void;
}
export interface IConfig {
    isUseMemo: boolean;
}
export interface DictNoPromiseComponentProps {
    children?: (params?: any) => ReactNode;
    isEmpty?: (params?: any) => boolean;
    renderEmpty?: () => ReactNode;
}
export interface DictPromiseComponentProps extends DictNoPromiseComponentProps {
    firstLoading?: ReactElement;
    renderNormalLoading?: (params: {
        children: ReactNode;
        loading: boolean;
    }) => ReactNode;
}
export interface DictFunctionComponentProps extends DictPromiseComponentProps {
    args?: any[];
    isUseMemo?: boolean;
}
export interface DictComponentHandler {
    reset: () => Promise<any> | undefined;
}
export interface DictReactComponentObj {
    [prop: string | symbol]: any;
}
export interface StateData {
    data: any;
    isValidate: boolean;
    isPending: boolean;
}
export interface UseDictState extends StateData {
    refresh(): Promise<void>;
}
export interface UseDictOptions {
    functionArgs?: any[];
    isUseMemo?: boolean;
}
