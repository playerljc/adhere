import PropTypes from 'prop-types';
import { PermissionFunction, PermissionProps } from './types';
/**
 * setPermission - 设置拥有的所有权限
 * @param {Array<String>} permission
 */
export declare const setPermission: (permission: any) => void;
/**
 * getPermission - 获取拥有的所有权限
 * @return
 */
export declare const getPermission: () => any;
/**
 * checkPermission - 判断是否有权限方法
 * @param {Array<String>} allPermission
 * @param {String | Array<String>} currentPermissions 当前组件或者页面对应得权限key
 * @return boolean
 */
export declare const checkPermission: (allPermission: any, currentPermissions: any) => boolean;
/**
 * Permission - 组件或者某一个模块的权限渲染方式
 * @param {Array<String>} allPermission
 * @param {String | Array<String>} permissions 当前组件或者某一个模块对应得权限key
 * @param {String | ReactElement} children 想要渲染的部分
 * @param {String | ReactElement} noMatch 没有权限是想要提示的部分
 * @return {String | ReactElement}
 */
export declare const Permission: {
    ({ allPermission, permissions, children, noMatch, }: PermissionProps): JSX.Element;
    defaultProps: {
        allPermission: undefined;
        permissions: string;
        noMatch: null;
        children: null;
    };
    propTypes: {
        allPermission: PropTypes.Requireable<any[]>;
        permissions: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        noMatch: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * PermissionFun - 函数方式实现
 * @param allPermission
 * @param permissions
 * @param match
 * @param noMatch
 * @constructor
 */
export declare function PermissionFun({ allPermission, permissions, match, noMatch, }: PermissionFunction): any;
