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

export interface DictNoPromiseComponentProps {
  children?: (params?: any) => ReactNode;
  isEmpty?: (params?: any) => boolean;
  renderEmpty?: Function;
}

export interface DictPromiseComponentProps extends DictNoPromiseComponentProps {
  firstLoading?: ReactElement;
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
