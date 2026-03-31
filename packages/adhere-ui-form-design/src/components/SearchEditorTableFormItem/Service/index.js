/**
 * SystemSearchEditorTableFormItem Service
 * @description 定义组件的服务配置，包括数据获取接口和响应处理逻辑
 */
import Util from '@baifendian/adhere-util';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

/**
 * genServiceName
 * @description 生成Service的唯一名字
 * @param {string} prefix 前缀
 * @return {string}
 */
export function genServiceName(prefix = '') {
  return `${prefix}${Util.uuid()}`;
}

/**
 * serviceName
 * @description 生成服务的唯一标识名称
 */
export const serviceName = genServiceName();

const xhrResponseBusiness = {
  codeKey: 'resCode',
  codeSuccess: 0,
  codeSuccessKey: 0,
  dataKey: 'data',
  messageKey: 'resMsg',
};

/**
 * fetchList
 * @description 获取列表数据的模拟接口，返回空数据集用于初始化
 * @returns {Object} 包含 call 方法和 defaultResult 的服务配置对象
 */
export const fetchList = (() => {
  return {
    call: () => {
      return Promise.resolve({
        data: {
          [xhrResponseBusiness.codeKey]: xhrResponseBusiness.codeSuccess,
          [xhrResponseBusiness.dataKey]: {
            total: 0,
            records: [],
            current: 1,
          },
          [xhrResponseBusiness.messageKey]: '',
        },
      });
    },
    defaultResult: () => ({
      total: 0,
      records: [],
    }),
  };
})();

/**
 * Service
 * @description 服务配置对象，包含响应业务处理规则和名称
 */
const Service = {
  ...xhrResponseBusiness,
  name: serviceName,
};

ServiceRegister.addConfig(Service.name, {
  fetchList,
  default: Service,
});
