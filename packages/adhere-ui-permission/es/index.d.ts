import { Permission, PermissionFun, checkPermission, getPermission, setPermission, PermissionUtils } from './Permission';
export type { PermissionProps, PermissionFunction, PermissionCheckResult, PermissionSetter, PermissionGetter, PermissionChecker, } from './types';
export { Permission, PermissionFun, checkPermission, getPermission, setPermission, PermissionUtils, };
declare const PermissionComponent: {
    Permission: import("react").FC<import("./types").PermissionProps>;
    setPermission: import("./types").PermissionSetter;
    checkPermission: import("./types").PermissionChecker;
    getPermission: import("./types").PermissionGetter;
    PermissionFun: typeof PermissionFun;
    PermissionUtils: {
        hasAnyPermission: (allPermission: string[] | undefined, permissions: string[]) => boolean;
        hasAllPermissions: (allPermission: string[] | undefined, permissions: string[]) => boolean;
        getPermissionIntersection: (allPermission: string[] | undefined, permissions: string[]) => string[];
        isEmpty: (permissions: string[]) => boolean;
        isValidFormat: (permission: string) => boolean;
    };
};
export default PermissionComponent;
