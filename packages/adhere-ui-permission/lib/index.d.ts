/// <reference types="react" />
declare const _default: {
    Permission: {
        ({ allPermission, permissions, children, noMatch, }: import("./types").IPermissionProps): JSX.Element;
        defaultProps: {
            allPermission: undefined;
            permissions: string;
            noMatch: null;
            children: null;
        };
        propTypes: {
            allPermission: import("prop-types").Requireable<any[]>;
            permissions: import("prop-types").Requireable<string | any[]>;
            noMatch: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
            children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        };
    };
    setPermission: (permission: any) => void;
    checkPermission: (allPermission: any, currentPermissions: any) => boolean;
    getPermission: () => any;
};
export default _default;
