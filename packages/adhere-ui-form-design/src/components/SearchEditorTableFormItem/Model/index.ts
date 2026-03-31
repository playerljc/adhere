/**
 * SystemSearchEditorTableFormItem Model
 * @description 注册和管理组件的状态模型，用于 Saga 状态管理
 */
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import sage from '../../../utils/saga';
import { serviceName } from '../Service';

/**
 * Model
 * @description 基于 serviceName 创建并注册状态模型实例
 */
const Model = Object.assign(ServiceRegister.model(serviceName), {}) as Record<string, unknown>;

sage.model(Model);

export default Model;

