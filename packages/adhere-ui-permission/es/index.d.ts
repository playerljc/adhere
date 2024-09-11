/// <reference types="react" />
import { PermissionFun } from './Permission';
declare const PermissionComponent: {
    Permission: import("react").FC<import("./types").PermissionProps>;
    setPermission: (permission: any) => void;
    checkPermission: (allPermission: any, currentPermissions: any) => boolean;
    getPermission: () => any;
    PermissionFun: typeof PermissionFun;
};
export default PermissionComponent;
