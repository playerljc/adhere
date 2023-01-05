import { PermissionFun } from './permission';
declare const _default: {
    Permission: {
        ({ allPermission, permissions, children, noMatch, }: import("./types").PermissionProps): JSX.Element;
        defaultProps: {
            allPermission: undefined;
            permissions: string;
            noMatch: null;
            children: null;
        };
        propTypes: {
            allPermission: import("prop-types").Requireable<any[]>;
            permissions: import("prop-types").Requireable<NonNullable<string | any[] | null | undefined>>;
            noMatch: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
            children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        };
    };
    setPermission: (permission: any) => void;
    checkPermission: (allPermission: any, currentPermissions: any) => boolean;
    getPermission: () => any;
    PermissionFun: typeof PermissionFun;
};
export default _default;
