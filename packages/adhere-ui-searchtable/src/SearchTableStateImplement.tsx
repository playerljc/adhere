import React, { forwardRef } from 'react';

import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
import { createState } from '@ctsj/state/lib/react';

import { defaultProps, propTypes } from './SearchTable';
import { SearchTableImplement } from './SearchTableImplement';
import type {
  SearchTableImplementState,
  SearchTableStateImplementFactoryFunction,
  SearchTableStateImplementProps,
} from './types';

export const selectorPrefix = 'adhere-ui-searchstatetableimplement';

/**
 * SearchTableStateImplement
 * @class
 * @classdesc - SearchTable的state实现
 */
export class SearchTableStateImplement<
  P extends SearchTableStateImplementProps,
  S extends SearchTableImplementState,
> extends SearchTableImplement<SearchTableStateImplementProps, SearchTableImplementState> {
  static displayName = 'SearchTableStateImplement';

  private unsubscribe: Function;

  constructor(props) {
    super(props);

    const { serviceNames, middleWares, reducer, models, mapStateToProps, mapDispatchToProps } =
      props.$state;

    this.unsubscribe = createState({
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
   * @return {object[]}
   */
  getData(): object[] {
    return this.state?.[this.getServiceName()]?.[this.getFetchListPropName()]?.[this.getDataKey()];
  }

  /**
   * getTotal
   * @description 获取列表总的数据树
   * @return {number}
   */
  getTotal(): number {
    return this.state?.[this.getServiceName()]?.[this.getFetchListPropName()]?.[this.getTotalKey()];
  }

  /**
   * showLoading
   * @description loading
   * @return {boolean}
   */
  showLoading(): boolean {
    return this.state?.loading?.[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * fetchDataExecute
   * @description 调用列表数据接口
   * @param {any} searchParams
   * @return {Promise<any>}
   */
  fetchDataExecute(searchParams?: any): Promise<any> {
    return this.state?.[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }
}

SearchTableStateImplement.defaultProps = {
  ...defaultProps,
};

SearchTableStateImplement.propTypes = {
  ...propTypes,
};

/**
 * SearchTableStateImplementFactory
 * @description 创建SearchTableStateImplementFactory
 * @param serviceNames
 * @param middleWares
 * @param reducer
 * @param models
 * @param mapStateToProps
 * @param mapDispatchToProps
 */
const SearchTableStateImplementFactory: SearchTableStateImplementFactoryFunction<any, any> =
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
        fixedHeaderAutoTable
        fixedTableSpaceBetween
        {...props}
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

export default SearchTableStateImplementFactory;
