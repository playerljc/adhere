import {
  Permission,
  PermissionFun,
  checkPermission,
  getPermission,
  setPermission,
  PermissionUtils,
} from './Permission';

// 导出类型定义
export type {
  PermissionProps,
  PermissionFunction,
  PermissionCheckResult,
  PermissionSetter,
  PermissionGetter,
  PermissionChecker,
} from './types';

// 导出组件和函数
export {
  Permission,
  PermissionFun,
  checkPermission,
  getPermission,
  setPermission,
  PermissionUtils,
};

// 默认导出
const PermissionComponent = {
  Permission,
  setPermission,
  checkPermission,
  getPermission,
  PermissionFun,
  PermissionUtils,
};

export default PermissionComponent;
