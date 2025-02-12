import React from 'react';
import { ToolBarProps } from '../types';
/**
 * Toolbar
 * @description 工具栏，分为左侧和右侧，如果item多可以移动到Menu中
 * 左侧: 显示总户数(可有可无)
 * 右侧: {
 *   内置工具: [
 *     FilterItem: 过滤
 *     SortItem: 排序
 *     ViewSettingItem: 视图设置
 *   ]
 *   其他业务工具项: Array
 * }
 * beforeToolBarElement
 * default
 * afterToolBarElement
 */
declare const ToolBar: React.NamedExoticComponent<ToolBarProps>;
export default ToolBar;
