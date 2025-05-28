import React, { forwardRef } from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';
import Util from '@baifendian/adhere-util';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
import { createState } from '@ctsj/state/lib/react';

import { defaultProps, propTypes } from './SearchList';
import { SearchListImplement } from './SearchListImplement';
import type {
  SearchListImplementState,
  SearchListStateImplementFactoryFunction,
  SearchListStateImplementProps,
} from './types';

export const selectorPrefix = 'adhere-ui-search-state-table-implement';

const { cloneDeep } = SearchTable;

/**
 * SearchListStateImplement
 * @class
 * @classdesc - SearchList的state实现
 */
export class SearchListStateImplement<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  P extends SearchListStateImplementProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  S extends SearchListImplementState,
> extends SearchListImplement<SearchListStateImplementProps, SearchListImplementState> {
  static displayName = 'SearchListStateImplement';

  private unsubscribe: Function;

  constructor(props) {
    super(props);

    const { serviceNames, middleWares, reducer, models, mapStateToProps, mapDispatchToProps } =
      props.$state;

    this.unsubscribe = createState({
      // @ts-ignore
      initialState: { ...this.state },
      models,
      mapState: (state) => ({
        ...ServiceRegister.mapStateToProps({
          namespaces: serviceNames || [],
          state,
        }),
        ...{
          loading: state.loading,
        },
        ...(mapStateToProps ? mapStateToProps(state) : {}),
      }),
      mapDispatch: (dispatch) => ({
        ...ServiceRegister.mapDispatchToProps({
          namespaces: serviceNames || [],
          dispatch,
        }),
        ...(mapDispatchToProps ? mapDispatchToProps(dispatch) : {}),
      }),
      middleWares,
      reducer,
      ref: this,
    });
  }

  componentWillUnmount() {
    // @ts-ignore
    super.componentWillUnmount?.();

    this.unsubscribe();
  }

  /**
   * getData
   * @description 获取列表的数据
   */
  getData(): object[] {
    // @ts-ignore
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()];
  }

  /**
   * setData
   * @description 设置数据
   * @param data
   */
  setData<T extends Array<object>>(data: T | ((prevData: T) => T)): Promise<any[]> {
    return new Promise((resolve) => {
      let targetDataSource;

      if (Util.isArray(data)) {
        targetDataSource = data;
      } else if (Util.isFunction(data)) {
        targetDataSource = (data as Function)(this.getData());
      }

      if (targetDataSource) {
        const listData = cloneDeep(
          this.state[this.getServiceName()] ?? {
            [this.getFetchListPropName()]: {
              [this.getDataKey()]: [],
              [this.getTotalKey()]: 0,
            },
          },
        );
        listData[this.getFetchListPropName()][this.getDataKey()] = targetDataSource;

        this.setState(
          {
            [this.getServiceName()]: listData,
          },
          () => {
            resolve(listData?.[this.getFetchListPropName()]?.[this.getDataKey()]);
          },
        );
      }

      return Promise.resolve([]);
    });
  }

  /**
   * getTotal
   * @description 获取列表总的数据树
   */
  getTotal(): number {
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()];
  }

  /**
   * getCurrent
   * @description 获取当前页码
   */
  getCurrent() {
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getCurrentKey()];
  }

  /**
   * showLoading
   * @description loading
   */
  showLoading(): boolean {
    // @ts-ignore
    return this.state.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * fetchDataExecute
   * @description 调用列表数据接口
   * @param searchParams
   */
  fetchDataExecute(searchParams?: object): Promise<any> {
    // @ts-ignore
    return this.state[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }
}

SearchListStateImplement.defaultProps = {
  ...defaultProps,
};

SearchListStateImplement.propTypes = {
  ...propTypes,
};

/**
 * SearchListStateImplementFactory
 * @description 创建SearchListStateImplementFactory
 * @param serviceNames
 * @param middleWares
 * @param reducer
 * @param models
 * @param mapStateToProps
 * @param mapDispatchToProps
 */
const SearchListStateImplementFactory: SearchListStateImplementFactoryFunction<any, any> =
  ({ serviceNames, middleWares, reducer, models, mapStateToProps, mapDispatchToProps }) =>
  (Component) =>
    forwardRef<any, any>((props, ref) => (
      // @ts-ignore
      <Component
        ref={ref}
        className={`${selectorPrefix}-wrap`}
        isShowExpandSearch
        defaultExpandSearchCollapse={false}
        openSearchParamsMemory={false}
        {...props}
        // @ts-ignore
        $state={{
          serviceNames,
          middleWares,
          reducer,
          models,
          mapStateToProps,
          mapDispatchToProps,
        }}
      />
    ));

export default SearchListStateImplementFactory;
