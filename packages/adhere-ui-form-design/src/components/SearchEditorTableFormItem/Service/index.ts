/**
 * SystemSearchEditorTableFormItem Service
 * @description 定义组件的服务配置，包括数据获取接口和响应处理逻辑
 */
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

/**
 * serviceName
 * @description 服务的唯一标识名称（需稳定，避免热更新重复注册导致异常）
 */
export const serviceName = 'SystemSearchEditorTableFormItem';

type XhrResponseBusiness = {
  codeKey: string;
  codeSuccess: number;
  codeSuccessKey: number;
  dataKey: string;
  messageKey: string;
};

const xhrResponseBusiness: XhrResponseBusiness = {
  codeKey: 'resCode',
  codeSuccess: 0,
  codeSuccessKey: 0,
  dataKey: 'data',
  messageKey: 'resMsg',
};

type FetchListResult = {
  total: number;
  records: unknown[];
  current?: number;
};

type FetchListService = {
  call: () => Promise<{
    data: Record<string, unknown>;
  }>;
  defaultResult: () => Pick<FetchListResult, 'total' | 'records'>;
};

/**
 * fetchList
 * @description 获取列表数据的模拟接口，返回空数据集用于初始化
 * @returns {Object} 包含 call 方法和 defaultResult 的服务配置对象
 */
export const fetchList: FetchListService = (() => {
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
const Service: XhrResponseBusiness & { name: string } = {
  ...xhrResponseBusiness,
  name: serviceName,
};

ServiceRegister.addConfig(Service.name, {
  fetchList,
  default: Service,
});

