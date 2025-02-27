import { useUpdateEffect } from 'ahooks';
import { TreeSelect as AntdTreeSelect } from 'antd';
import isEqual from 'lodash.isequal';
import sortby from 'lodash.sortby';
import uniqBy from 'lodash.uniqby';
import React, { useMemo, useState } from 'react';

import { Select, TreeSelect } from '@baifendian/adhere-ui-anthoc';
import type { DropdownRenderSelectProps } from '@baifendian/adhere-ui-anthoc/es/types';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

const {
  Table,
  ProSearchEditableCellRowDragSortStateTable,
  ProSearchEditableRowDragSortStateTable,
  ProSearchEditableTableRowDragSortStateTable,
  ProSearchRowDragSortStateTable,
  ProEditableCellSearchStateTable,
  ProEditableRowSearchStateTable,
  ProEditableSearchStateTable,
  ProSearchStateTable,
  SearchTableStateImplementFactory,
} = SearchTable;

interface CreateServiceParams {
  serviceName: string;
  dictName: string;
  responseBusiness?: XhrResponseBusiness;
  defaultResult?: Record<string, any>;
}

interface SearchTableClassFactoryParams {
  SuperClass: any;
  sage: any;
  override: Record<string, Function>;
  dictName: string;
  responseBusiness: XhrResponseBusiness;
  defaultResult: Record<string, any>;
  // 选择模式
  selectionMode?: 'single' | 'multiple';
  // 如果是多选模式下的行选择模式，normal本页选择，continuous跨页选择
  rowSelectionMode?: 'normal' | 'continuous';
  showCheckedStrategy?: symbol;
}

interface XhrResponseBusiness {
  codeKey: string;
  codeSuccess: number;
  codeSuccessKey: number;
  dataKey: string;
  messageKey: string;
}

interface CreateSearchTableSelectParams {
  dictName: string;
  params: any;
  selectionMode: SearchTableClassFactoryParams['selectionMode'];
  rowSelectionMode: SearchTableClassFactoryParams['rowSelectionMode'];
}

interface CreateSearchTreeTableSelectParams extends CreateSearchTableSelectParams {}

/**
 * createService
 */
function createService(params: CreateServiceParams) {
  const { serviceName, dictName } = params;

  const xhrResponseBusiness: XhrResponseBusiness = {
    codeKey: 'resCode',
    codeSuccess: 0,
    codeSuccessKey: 0,
    dataKey: 'data',
    messageKey: 'resMsg',
    ...(params?.responseBusiness ?? {}),
  };

  const fetchList = (() => {
    return {
      call: ({ cascadeParams, onDataSourceChange, ...params }) => {
        const dictValue = Dict.value[dictName]?.value;

        if (dictValue instanceof Function) {
          return dictValue({
            cascadeParams,
            params,
          });
        }

        return dictValue;
      },
      defaultResult: () =>
        params?.defaultResult ?? {
          total: 0,
          records: [],
        },
    };
  })();

  const Service = {
    ...xhrResponseBusiness,
    name: serviceName,
  };

  // 创建Services
  ServiceRegister.addConfig(Service.name, {
    fetchList,
    default: Service,
  });
}

/**
 * createModel
 * @param {string} serviceName
 * @param {any} saga
 */
function createModel(serviceName: string, saga: any) {
  const Model = Object.assign(ServiceRegister.model(serviceName), {});

  saga.model(Model);

  return Model;
}

/**
 * searchTableClassFactory
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
function searchTableClassFactory({
  SuperClass,
  sage,
  override,
  dictName,
  responseBusiness,
  defaultResult,
  selectionMode = 'multiple',
  rowSelectionMode = 'normal',
}: SearchTableClassFactoryParams) {
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
      super.componentDidUpdate(prevProps, prevState, snapshot);

      if (!isEqual(sortby(prevState.selectedRowKeys), sortby(this.state.selectedRowKeys))) {
        this.props?.onChange?.(this.getChangeValue());
      }

      if (isMulti) {
        if (!isEqual(sortby(prevProps.value ?? []), sortby(this.props.value ?? []))) {
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

    // componentWillReceiveProps(nextProps) {
    //   console.log('selectedRowKeys===');
    //   super.componentWillReceiveProps(nextProps);
    // }

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
      const selectedRowKeys = this.getSelectedRowKeys();

      if (isMulti) return selectedRowKeys;

      return !!selectedRowKeys.length ? selectedRowKeys[0] : undefined;
    }

    /**
     * fetchData
     * @description 截获onDataSourceChange
     */
    fetchData() {
      return super.fetchData().then((res) => {
        this.props.onDataSourceChange({
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
     * setData
     * @param params
     */
    setData(...params) {
      return super.setData(...params)?.then((res) => {
        this.props.onDataSourceChange({
          dataSource: res,
          extra: {
            type: 'asyncLoad',
          },
        });

        return res;
      });
    }

    /**
     * getRowSelectionMode
     * @description 行选择模式
     */
    getRowSelectionMode() {
      return new Map([
        ['normal', Table.ROW_SELECTION_NORMAL_MODE],
        ['continuous', Table.ROW_SELECTION_CONTINUOUS_MODE],
      ]).get(rowSelectionMode);
    }

    /**
     * getRowSelectionConfig
     * @description 设置rowSelection的type
     */
    getRowSelectionConfig() {
      const config = super.getRowSelectionConfig();

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

  return SearchTableStateImplementFactory({
    serviceNames: [serviceName],
    // @ts-ignore
    middleWares: [],
    reducer: null,
    models: [model],
  })(SubClass as any);
}

/**
 * SELECT_TABLE_OVERRIDE
 */
export const SELECT_TABLE_OVERRIDE = {
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
  isUseCheckedStrategy() {
    return false;
  },
};

/**
 * TREE_SELECT_TABLE_OVERRIDE
 */
export const TREE_SELECT_TABLE_OVERRIDE = ({ selectionMode, showCheckedStrategy }) => ({
  ...SELECT_TABLE_OVERRIDE,
  getCheckedStrategy() {
    return showCheckedStrategy;
  },
  isUseCheckedStrategy() {
    return selectionMode !== 'single';
  },
});

/**
 * standardSearchTableClassFactory
 * @param params
 */
export function standardSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProSearchStateTable,
  });
}

/**
 * editorCellSearchTableClassFactory
 * @param params
 */
export function editorCellSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProEditableCellSearchStateTable,
  });
}

/**
 * editorRowSearchTableClassFactory
 * @param params
 */
export function editorRowSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProEditableRowSearchStateTable,
  });
}

/**
 * editorTableSearchTableClassFactory
 * @param params
 */
export function editorTableSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProEditableSearchStateTable,
  });
}

/**
 * rowDragSortSearchTableClassFactory
 * @param params
 */
export function rowDragSortSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProSearchRowDragSortStateTable,
  });
}

/**
 * editorCellRowDragSortSearchTableClassFactory
 * @param params
 */
export function editorCellRowDragSortSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProSearchEditableCellRowDragSortStateTable,
  });
}

/**
 * editorRowDragSortSearchTableClassFactory
 * @param params
 */
export function editorRowDragSortSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProSearchEditableRowDragSortStateTable,
  });
}

/**
 * editorTableRowDragSortSearchTableClassFactory
 * @param params
 */
export function editorTableRowDragSortSearchTableClassFactory(params) {
  return searchTableClassFactory({
    ...params,
    SuperClass: ProSearchEditableTableRowDragSortStateTable,
  });
}

/**
 * createSearchTableSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 */
export function createSearchTableSelect({
  dictName,
  params,
  selectionMode,
  rowSelectionMode,
}: CreateSearchTableSelectParams) {
  const SearchTable = standardSearchTableClassFactory({
    dictName,
    selectionMode,
    rowSelectionMode,
    ...params,
    override: {
      ...SELECT_TABLE_OVERRIDE,
      ...(params?.override ?? {}),
    },
  });

  return ({ onDataSourceChange, cascadeParams, tableProps, defaultOptions, ...props }) => {
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

    const onChange = (values) => {
      setSelectedRows((_selectedRows) => {
        const _values = Array.isArray(values) ? values : [values];

        if (!_values.length) return [];

        const rows = _values
          .map((_value) => options.find((t: any) => t.value === _value))
          .filter((t) => !!t);
        return uniqBy([..._selectedRows, ...rows], 'value');
      });

      props?.onChange?.(values);
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
            <SearchTable
              cascadeParams={cascadeParams}
              onDataSourceChange={({ dataSource }) => {
                setOptions(dataSource);
              }}
              {...rest}
              {...tableProps}
            />
          );
        }}
      </Select.DropdownRenderSelect>
    );
  };
}

/**
 * createSearchTreeTableSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 * @param showCheckedStrategy
 */
export function createSearchTreeTableSelect({
  dictName,
  params,
  selectionMode,
  rowSelectionMode,
}: CreateSearchTreeTableSelectParams) {
  const showCheckedStrategy = params.showCheckedStrategy ?? Table.CHECKED_STRATEGY_SHOW_ALL;

  const isMulti = selectionMode === 'multiple';

  const InternalSearchTable = standardSearchTableClassFactory({
    dictName,
    selectionMode,
    rowSelectionMode,
    ...params,
    override: {
      ...TREE_SELECT_TABLE_OVERRIDE({
        selectionMode,
        showCheckedStrategy,
      }),
      ...(params?.override ?? {}),
    },
  });

  return ({ onDataSourceChange, cascadeParams, tableProps, ...props }) => {
    const [treeData, setTreeData] = useState([]);

    const showCheckedStrategyMap = new Map([
      [Table.CHECKED_STRATEGY_SHOW_ALL, AntdTreeSelect.SHOW_ALL],
      [Table.CHECKED_STRATEGY_SHOW_CHILD, AntdTreeSelect.SHOW_CHILD],
    ]);

    return (
      <TreeSelect.DropdownRenderSelect
        showCheckedStrategy={showCheckedStrategyMap.get(showCheckedStrategy)}
        treeCheckable={isMulti}
        multiple={isMulti}
        treeData={treeData}
        shouldRenderEmptyData
        {...props}
      >
        {({ originNode, ...rest }) => {
          return (
            <InternalSearchTable
              {...rest}
              {...tableProps}
              cascadeParams={cascadeParams}
              onDataSourceChange={({ dataSource: treeData }) => {
                setTreeData(treeData);
              }}
            />
          );
        }}
      </TreeSelect.DropdownRenderSelect>
    );
  };
}

/**
 * createAsyncSearchTableSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 */
export function createAsyncSearchTableSelect({
  dictName,
  params,
  selectionMode,
  rowSelectionMode,
}: CreateSearchTableSelectParams) {
  const showCheckedStrategy = params.showCheckedStrategy ?? Table.CHECKED_STRATEGY_SHOW_ALL;

  const isMulti = selectionMode === 'multiple';

  const InternalSearchTable = standardSearchTableClassFactory({
    dictName,
    selectionMode,
    rowSelectionMode,
    ...params,
    override: {
      ...TREE_SELECT_TABLE_OVERRIDE({
        selectionMode,
        showCheckedStrategy,
      }),
      /**
       * loadData
       * @description 异步加载数据
       * @param record
       */
      loadData(record) {
        // 获取字典的值
        const dictValue = Dict.value[dictName]?.value;

        // 如果值是一个函数(肯定是)
        if (dictValue instanceof Function) {
          // 调用这个函数
          return dictValue({
            // 第一次加载数据和异步加载都用一个字典，这里只能用isAsync参数来区分是否是异步加载数据，没辙现在也没想出来啥好办法
            isAsync: true,
            // 异步加载点击的那个节点的数据
            record,
          });
        }

        return dictValue;
      },
      ...(params?.override ?? {}),
    },
  });

  return ({ onDataSourceChange, cascadeParams, tableProps, ...props }) => {
    const [treeData, setTreeData] = useState([]);

    const showCheckedStrategyMap = new Map([
      [Table.CHECKED_STRATEGY_SHOW_ALL, AntdTreeSelect.SHOW_ALL],
      [Table.CHECKED_STRATEGY_SHOW_CHILD, AntdTreeSelect.SHOW_CHILD],
    ]);

    return (
      <TreeSelect.DropdownRenderSelect
        showCheckedStrategy={showCheckedStrategyMap.get(showCheckedStrategy)}
        treeCheckable={isMulti}
        multiple={isMulti}
        treeData={treeData}
        shouldRenderEmptyData
        {...props}
      >
        {({ originNode, ...rest }) => {
          return (
            <InternalSearchTable
              {...rest}
              {...tableProps}
              cascadeParams={cascadeParams}
              onDataSourceChange={({ dataSource: treeData }) => {
                setTreeData(treeData);
              }}
            />
          );
        }}
      </TreeSelect.DropdownRenderSelect>
    );
  };
}
