import React from 'react';

/**
 * PermissionProps
 * @interface PermissionProps
 */
export interface PermissionProps {
  allPermission: undefined | string[];
  permissions: string[] | string;
  children: any;
  noMatch: () => React.ReactElement | null;
}

/**
 * PermissionFunction
 */
export interface PermissionFunction {
  allPermission: undefined | string[];
  permissions: string[] | string;
  match: any;
  noMatch: any;
}
