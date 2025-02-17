import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import SearchTable from '../../src/index';
import { fetchData } from '../mock';

const { ProSearchStateTable, SearchTableStateImplementFactory } = SearchTable;

function createService({ serviceName, dictName }) {
  const xhrResponseBusiness = {
    // codeKey: 'code',
    // codeSuccess: 200,
    // codeSuccessKey: 0,
    // dataKey: 'data',
    // messageKey: 'message',
    codeKey: 'code',
    codeSuccessKey: 200,
    dataKey: 'data',
    messageKey: 'message',
  };

  // const fetchList = (() => {
  //   return {
  //     call: (params) => {
  //       // const dictValue = Dict.value[dictName]?.value;
  //       //
  //       // if (dictValue instanceof Function) {
  //       //   return dictValue({
  //       //     current: params.page,
  //       //     pageSize: params.limit,
  //       //   }).then((res) => {
  //       //     return {
  //       //       resCode: 0,
  //       //       resMsg: '',
  //       //       data: res,
  //       //     };
  //       //   });
  //       // } else {
  //       //   return dictValue;
  //       // }
  //
  //       const data = fetchData(params);
  //       console.log('111', data);
  //
  //       return Promise.resolve(data);
  //     },
  //     defaultResult: () => ({
  //       total: 0,
  //       records: [],
  //     }),
  //   };
  // })();

  const fetchList = (() => {
    return {
      call: (params) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const result = fetchData(params);
            console.log(result);
            resolve(result);
          }, 300);
        });
      },
      defaultResult: () => ({
        totalCount: 0,
        list: [],
      }),
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
 * @param serviceName
 * @param saga
 */
function createModel(serviceName, saga) {
  const Model = Object.assign(ServiceRegister.model(serviceName), {});

  saga.model(Model);

  return Model;
}

/**
 * searchTableClassFactory
 * @param override
 * @param dictName
 * @param saga
 */
export function searchTableClassFactory({ override, dictName, sage }) {
  // serviceName
  const serviceName = Util.uuid();

  // 创建Service
  createService({ serviceName, dictName });

  const model = createModel(serviceName, sage);

  /**
   * SubClass
   * @description 子类
   */
  class SubClass extends ProSearchStateTable {
    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
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
    middleWares: [],
    reducer: null,
    models: [model],
  })(SubClass);
}
