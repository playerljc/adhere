import React, { forwardRef } from 'react';

import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
import { createState } from '@ctsj/state/lib/react';

import { defaultProps, propTypes } from './SearchList';
import { SearchListImplement } from './SearchListImplement';
import type {
  SearchListImplementState,
  SearchListStateImplementFactoryFunction,
  SearchListStateImplementProps,
} from './types';

export const selectorPrefix = 'adhere-ui-searchstatetableimplement';

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
    super.componentWillUnmount?.();

    this.unsubscribe();
  }

  /**
   * getData
   * @description 获取列表的数据
   */
  getData(): object[] {
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()];
  }

  /**
   * getTotal
   * @description 获取列表总的数据树
   */
  getTotal(): number {
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()];
  }

  /**
   * showLoading
   * @description loading
   */
  showLoading(): boolean {
    return this.state.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * fetchDataExecute
   * @description 调用列表数据接口
   * @param searchParams
   */
  fetchDataExecute(searchParams?: object): Promise<any> {
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
