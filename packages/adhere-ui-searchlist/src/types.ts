import type { ListProps } from 'antd';
import { ListSize } from 'antd/es/list';
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, RefObject } from 'react';
import { ReactNode } from 'react';

import { SearchProps, SearchState } from '@baifendian/adhere-ui-searchtable/es/types';

import SearchListImplement from './SearchListImplement';
import SearchListStateImplement from './SearchListStateImplement';

/**
 * SearchListProps
 */
export interface SearchListProps extends SearchProps {
  antdListProps: ListProps<any>;
}

/**
 * SearchListState
 */
export interface SearchListState extends SearchState {
  selectedRowKeys?: string[];
  selectedRows?: any[];
  listDensity?: ListSize;
}

/**
 * SearchListImplementProps
 * @interface SearchListImplementProps
 */
export interface SearchListImplementProps extends SearchListProps {
  [props: string]: any;
  getListWrapperInstance?: (ref?: RefObject<HTMLDivElement>) => void;
}

export interface SearchListImplementState extends SearchListState {
  [props: string]: any;
  searchParams?: any;
}

export interface ISearchListImplement {
  /**
   * showLoading - 是否显示遮罩
   */
  showLoading: () => boolean;

  /**
   * fetchData - 加载数据
   */
  fetchData: () => void;
}

export interface SearchListImplementFactoryFunction<T, P> {
  (params: {
    serviceNames: string[];
    mapStateToProps?: (state: any) => any;
    mapDispatchToProps?: (dispatch?: any) => any;
  }): (
    Component: typeof SearchListImplement,
  ) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}

export interface SearchListStateImplementFactoryFunction<T, P> {
  (params: {
    serviceNames: string[];
    models: any[];
    middleWares?: any[];
    reducer?: any;
    mapStateToProps?: (state: any) => any;
    mapDispatchToProps?: (dispatch?: any) => any;
  }): (
    Component: typeof SearchListStateImplement,
  ) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}

/**
 * SearchListStateImplementProps
 */
export interface SearchListStateImplementProps extends SearchListImplementProps {
  $state: {
    serviceNames: string[];
    middleWares: any[];
    reducer: any;
    models: any[];
    mapStateToProps?: (state: any) => any;
    mapDispatchToProps?: (dispatch?: any) => any;
  };
}

export type MetaItem<T> = {
  // 数据在数据项中对应的路径，支持通过数组查询嵌套路径
  dataIndex: string;
  // 自定义渲染函数
  render?: (text: ReactNode, record: T, index: number) => ReactNode | ReactNode[];
};

/**
 * Metas
 * @description 列配置类型
 */
export interface Metas<T> {
  title?: MetaItem<T>;
  subTitle?: MetaItem<T>;
  description?: MetaItem<T>;
  avatar?: MetaItem<T>;
  actions?:
    | MetaItem<T> & {
        cardActionProps?: 'extra' | 'actions';
      };
  content?: MetaItem<T>;
  extra?: MetaItem<T>;
}

/**
 * ListExpandable
 */
export interface ListExpandable {
  expandedRowKeys: string[];
  onExpandedRowsChange: (expandedRowKeys: string[]) => void;
}
