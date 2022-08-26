import React from 'react';
import PropTypes from 'prop-types';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { IPermissionProps, IPermissionFun } from './types';

// 所有的权限
let permissions = [];

/**
 * setPermission - 设置拥有的所有权限
 * @param {Array<String>} permission
 */
export const setPermission = (permission) => {
  permissions = permission;
};

/**
 * getPermission - 获取拥有的所有权限
 * @return
 */
export const getPermission = () => JSON.parse(JSON.stringify(permissions));

/**
 * checkPermission - 判断是否有权限方法
 * @param {Array<String>} allPermission
 * @param {String | Array<String>} currentPermissions 当前组件或者页面对应得权限key
 * @return boolean
 */
export const checkPermission = (allPermission = getPermission(), currentPermissions) => {
  allPermission = allPermission || getPermission();

  // 所有的权限
  if (!allPermission || !Array.isArray(allPermission) || !currentPermissions) {
    return true;
  }

  if (Array.isArray(currentPermissions)) {
    return currentPermissions.every(
      (curPermissions) => allPermission.indexOf(curPermissions) !== -1,
    );
  }

  return allPermission.indexOf(currentPermissions) !== -1;
};

/**
 * Permission - 组件或者某一个模块的权限渲染方式
 * @param {Array<String>} allPermission
 * @param {String | Array<String>} permissions 当前组件或者某一个模块对应得权限key
 * @param {String | ReactElement} children 想要渲染的部分
 * @param {String | ReactElement} noMatch 没有权限是想要提示的部分
 * @return {String | ReactElement}
 */
export const Permission = ({
  allPermission = getPermission(),
  permissions,
  children,
  noMatch,
}: IPermissionProps): JSX.Element => (
  <ConditionalRender conditional={checkPermission(allPermission, permissions)} noMatch={noMatch}>
    {children}
  </ConditionalRender>
);

/**
 * PermissionFun - 函数方式实现
 * @param allPermission
 * @param permissions
 * @param match
 * @param noMatch
 * @constructor
 */
export function PermissionFun({
  allPermission = getPermission(),
  permissions,
  match,
  noMatch,
}: IPermissionFun) {
  return ConditionalRender.conditionalRender({
    conditional: checkPermission(allPermission, permissions),
    match,
    noMatch,
  });
}

Permission.defaultProps = {
  allPermission: undefined,
  permissions: '',
  noMatch: null,
  children: null,
};

Permission.propTypes = {
  allPermission: PropTypes.array,
  permissions: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  noMatch: PropTypes.node,
  children: PropTypes.node,
};
