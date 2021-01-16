/**
 * IPermissionProps
 * @interface IPermissionProps
 */
export interface IPermissionProps {
  permissions: Array<string> | string;
  children: any;
  noMatch: React.ReactElement | null;
}
