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
}
export interface InitFunc {
    (dictArray: IDict[], config: IConfig): void;
}
export interface IConfig {
    isUseMemo: boolean;
}
export interface DictComponentProps {
    children?: (params?: any) => ReactNode;
    firstLoading?: ReactElement;
    isEmpty?: (params?: any) => boolean;
    renderEmpty?: Function;
}
export interface DictComponentHandler {
    reset: () => Promise<any>;
}
export interface DictReactComponentObj {
    [prop: string]: any;
}
