import React from 'react';
import PropTypes from 'prop-types';

import IPermissionProps from './types';

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
 * @param {String | Array<String>} currentPermissions 当前组件或者页面对应得权限key
 * @return boolean
 */
export const checkPermission = (currentPermissions) => {
  // 所有的权限
  if (!permissions || !Array.isArray(permissions) || !currentPermissions) {
    return true;
  }

  if (Array.isArray(currentPermissions)) {
    return currentPermissions.every((curPermissions) => permissions.indexOf(curPermissions) !== -1);
  }

  return permissions.indexOf(currentPermissions) !== -1;
};

/**
 * Permission - 组件或者某一个模块的权限渲染方式
 * @param {String | Array<String>} permissions 当前组件或者某一个模块对应得权限key
 * @param {String | ReactElement} children 想要渲染的部分
 * @param {String | ReactElement} noMatch 没有权限是想要提示的部分
 * @return {String | ReactElement}
 */
const Permission = ({ permissions, children, noMatch = null }): IPermissionProps =>
  checkPermission(permissions) ? children : noMatch;

Permission.defaultProps = {
  permissions: '',
  noMatch: null,
  children: null,
};

Permission.propTypes = {
  permissions: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  noMatch: PropTypes.node,
  children: PropTypes.node,
};

export default Permission;
