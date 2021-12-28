import React from 'react';
/**
 * IPermissionProps
 * @interface IPermissionProps
 */
export interface IPermissionProps {
    allPermission: undefined | Array<string>;
    permissions: Array<string> | string;
    children: any;
    noMatch: React.ReactElement | null;
}
