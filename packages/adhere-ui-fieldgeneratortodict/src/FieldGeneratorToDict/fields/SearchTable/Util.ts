import SearchTable from '@baifendian/adhere-ui-searchtable';
// import ProSearchEditableCellRowDragSortStateTable from '@baifendian/adhere-ui-searchtable/es/DragSort/RowDragSort/ProSearchEditableCellRowDragSortStateTable';
// import ProSearchEditableRowDragSortStateTable from '@baifendian/adhere-ui-searchtable/es/DragSort/RowDragSort/ProSearchEditableRowDragSortStateTable';
// import ProSearchEditableTableRowDragSortStateTable from '@baifendian/adhere-ui-searchtable/es/DragSort/RowDragSort/ProSearchEditableTableRowDragSortStateTable';
// import ProSearchRowDragSortStateTable from '@baifendian/adhere-ui-searchtable/es/DragSort/RowDragSort/ProSearchRowDragSortStateTable';
// import ProEditableCellSearchStateTable from '@baifendian/adhere-ui-searchtable/es/Editable/ProEditableCellSearchStateTable';
// import ProEditableRowSearchStateTable from '@baifendian/adhere-ui-searchtable/es/Editable/ProEditableRowSearchStateTable';
// import ProEditableSearchStateTable from '@baifendian/adhere-ui-searchtable/es/Editable/ProEditableSearchStateTable';
// import ProSearchStateTable from '@baifendian/adhere-ui-searchtable/es/ProSearchStateTable';
// import SearchTableStateImplementFactory from '@baifendian/adhere-ui-searchtable/es/SearchTableStateImplement';
import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

const {
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

/**
 * createService
 */
function createService(params: {
  serviceName: string;
  dictName: string;
  responseBusiness?: any;
  defaultResult?: any;
}) {
  const { serviceName, dictName } = params;

  const xhrResponseBusiness = {
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
}) {
  const serviceName = Util.uuid();

  createService({ serviceName, dictName, responseBusiness, defaultResult });

  const model = createModel(serviceName, sage);

  /**
   * SubClass
   * @description 子类
   */
  class SubClass extends SuperClass {
    /**
     * applySuper
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
