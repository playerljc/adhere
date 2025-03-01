import Dict from '@baifendian/adhere-util-dict';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import type { CreateServiceParams, XhrResponseBusiness } from '../types';

/**
 * deepDep - deepDep
 * @param {any} dep
 */
export const deepDep = (dep: any) => JSON.stringify(dep);

/**
 * getOriginDictNameByItemName
 * @description 根据itemName获取实际的dictName
 * // 实际使用的名字(业务名 + 组件名 + 功能名)
 * // p = SystemAppBasicLayoutRectifyTransferListSection(业务名) + SelectDynamic(组件名) + MultiFormItem(功能名)
 *
 * // 字典的名字(业务名 + 组件名)
 * // p = SystemAppBasicLayoutRectifyTransferListSection(业务名) + SelectDynamic(组件名)
 * @param {string} targetDictName 当前的dictName
 * @param {string} dictItemName dict的itemName(组件名)
 * @return {string} originDictName
 */
export const getOriginDictNameByItemName = (
  targetDictName: string,
  dictItemName: string,
): string => {
  return targetDictName.substring(0, targetDictName.lastIndexOf(dictItemName));
};

/**
 * createService
 */
export function createService(params: CreateServiceParams) {
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
export function createModel(serviceName: string, saga: any) {
  const Model = Object.assign(ServiceRegister.model(serviceName), {});

  saga.model(Model);

  return Model;
}
