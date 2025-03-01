import { useUpdateEffect } from 'ahooks';
import isEqual from 'lodash.isequal';
import uniqBy from 'lodash.sortby';
import sortby from 'lodash.sortby';
import React, { useMemo, useState } from 'react';

import { Select } from '@baifendian/adhere-ui-anthoc';
import type { DropdownRenderSelectProps } from '@baifendian/adhere-ui-anthoc/es/types';
import SearchList from '@baifendian/adhere-ui-searchlist';
import Util from '@baifendian/adhere-util';

import type { XhrResponseBusiness } from '../../../types';
import { createModel, createService } from '../../Util';

const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

interface SearchListClassFactoryParams {
  SuperClass: any;
  sage: any;
  override: Record<string, Function>;
  dictName: string;
  responseBusiness: XhrResponseBusiness;
  defaultResult: Record<string, any>;
  // 选择模式
  selectionMode?: 'single' | 'multiple';
}

interface CreateSearchListSelectParams {
  dictName: string;
  params: any;
  selectionMode: SearchListClassFactoryParams['selectionMode'];
}

/**
 * searchListClassFactory
 * @params {
 *   {
 *     sage: any;
 *     override: {[prop: string]: Function};
 *     dictName: string;
 *     responseBusiness?: any;
 *     defaultResult?: any;
 *   }
 * } params
 */
function searchListClassFactory({
  SuperClass,
  sage,
  override,
  dictName,
  responseBusiness,
  defaultResult,
  selectionMode = 'multiple',
}: SearchListClassFactoryParams) {
  const serviceName = Util.uuid();

  const isMulti = selectionMode === 'multiple';

  createService({ serviceName, dictName, responseBusiness, defaultResult });

  const model = createModel(serviceName, sage);

  /**
   * SubClass
   * @description 子类
   */
  class SubClass extends SuperClass {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        selectedRowKeys: props.value ?? [],
      };
    }

    componentDidUpdate(prevProps, prevState, snapshot?: any) {
      // super.componentDidUpdate(prevProps, prevState, snapshot);

      if (!isEqual(sortby(prevState.selectedRowKeys), sortby(this.state.selectedRowKeys))) {
        console.log('this.getChangeValue()===', this.getChangeValue(), this.props?.onChange);
        this.props?.onChange?.(this.getChangeValue());
      }

      if (isMulti) {
        if (!isEqual(sortby(prevProps.value ?? []), sortby(this.props.value ?? []))) {
          console.log('this.props.value', this.props.value);

          this.setState({
            selectedRowKeys: this.props.value,
          });
        }
      } else {
        if (prevProps.value !== this.props.value) {
          this.setState({
            selectedRowKeys: [this.props.value],
          });
        }
      }
    }

    /**
     * applySuper
     * @description在override中调用super方法
     * @param {string} funcName
     * @param {any[]} params
     */
    applySuper(funcName: string, params?: any[]) {
      return super[funcName](...(params ?? []));
    }

    // 复写一些必要的方法
    getComponentId() {
      return serviceName;
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getParams() {
      return {
        ...super.getParams(),
        cascadeParams: this.props.cascadeParams,
        onDataSourceChange: this.props.onDataSourceChange,
      };
    }

    /**
     * getChangeValue
     * @description
     */
    getChangeValue() {
      return this.getSelectedRowKeys();
    }

    /**
     * fetchData
     * @description 截获onDataSourceChange
     */
    fetchData() {
      return super.fetchData().then((res) => {
        this.props?.onDataSourceChange?.({
          dataSource: res[this.getFetchDataResultDataKey()][this.getDataKey()],
          extra: {
            type: 'paging',
            info: { page: this.state.page, limit: this.state.limit },
          },
        });

        return res;
      });
    }

    /**
     * getRowSelection
     * @description 设置rowSelection的type
     */
    getRowSelection() {
      const config = super.getRowSelection();

      return {
        ...config,
        type: new Map([
          ['single', 'radio'],
          ['multiple', 'checkbox'],
        ]).get(selectionMode),
      };
    }
  }

  /**
   * override
   * @description 复写用户提供的override
   */
  Object.keys(override).forEach((key) => {
    SubClass.prototype[key] = override[key];
  });

  return SearchListStateImplementFactory({
    serviceNames: [serviceName],
    // @ts-ignore
    middleWares: [],
    reducer: null,
    models: [model],
  })(SubClass as any);
}

/**
 * SELECT_LIST_OVERRIDE
 */
export const SELECT_LIST_OVERRIDE = {
  hasAdvancedSearch() {
    return false;
  },
  renderSearchToolBar() {
    return null;
  },
  isUseSearchWrapperGap() {
    return false;
  },
  isUseSearchFormToolBarGap() {
    return false;
  },
  getGridSearchFormColgroup() {
    return {
      columnCount: 2,
      colgroup: [, 'auto', , 'auto'],
    };
  },
};

/**
 * standardSearchListClassFactory
 * @param params
 */
export function standardSearchListClassFactory(params) {
  return searchListClassFactory({
    ...params,
    SuperClass: ProSearchStateList,
  });
}

/**
 * createSearchListSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 */
export function createSearchListSelect({
  dictName,
  params,
  selectionMode,
}: CreateSearchListSelectParams) {
  const SearchList = standardSearchListClassFactory({
    dictName,
    selectionMode,
    ...params,
    override: {
      ...SELECT_LIST_OVERRIDE,
      ...(params?.override ?? {}),
    },
  });

  return ({ onDataSourceChange, cascadeParams, listProps, defaultOptions, ...props }) => {
    const [options, setOptions] = useState([]);

    const isMulti = selectionMode === 'multiple';

    const [selectedRows, setSelectedRows] = useState<any[]>(defaultOptions ?? []);
    useUpdateEffect(() => {
      setSelectedRows(defaultOptions ?? []);
    }, [defaultOptions]);

    const allOptions = useMemo(
      () => uniqBy([...(options ?? []), ...selectedRows], 'value'),
      [options, selectedRows],
    );

    function getSelectTargetValue(originValue) {
      if (isMulti) {
        if (!originValue) return [];

        return originValue;
      }

      if (!originValue) return undefined;

      if (!originValue.length) {
        return undefined;
      }

      return originValue[0];
    }

    const onChange = (values) => {
      setSelectedRows((_selectedRows) => {
        const _values = Array.isArray(values) ? values : [values];

        if (!_values.length) return [];

        const rows = _values
          .map((_value) => options.find((t: any) => t.value === _value))
          .filter((t) => !!t);
        return uniqBy([..._selectedRows, ...rows], 'value');
      });

      props?.onChange?.(getSelectTargetValue(values));
    };

    const selectProps: DropdownRenderSelectProps = {
      shouldRenderEmptyData: true,
      options: allOptions,
      ...props,
    };

    if (isMulti) {
      selectProps.mode = 'multiple';
    }

    return (
      <Select.DropdownRenderSelect {...selectProps} onChange={onChange}>
        {({ originNode, ...rest }) => {
          return (
            <SearchList
              cascadeParams={cascadeParams}
              onDataSourceChange={({ dataSource }) => {
                setOptions(dataSource);
              }}
              {...rest}
              {...listProps}
            />
          );
        }}
      </Select.DropdownRenderSelect>
    );
  };
}
