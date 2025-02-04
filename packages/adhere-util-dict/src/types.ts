import type { ReactElement, ReactNode } from 'react';

export interface IDict {
  initStatic: () => void;
  initRemote: () => void;
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
  renderNormalLoading?: (params: { children: ReactNode; loading: boolean }) => ReactNode;
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

export type ModuleDictExpansion<T> = (handlerOptions: T) => T;

export type ModuleDictExpansions<T> = ModuleDictExpansion<T>[];

export type LabelValue = {
  label: string;
  value: string | number | symbol;
};

export interface HandlerTargetValue extends Function {
  isUseMemo?: boolean;
}

export type HandlerTarget = Partial<{
  [key: string]: HandlerTargetValue;
}>;

export type Target<T> = Partial<{
  [key: string]: {
    value: any;
    refresh: () => T;
  };
}>;
