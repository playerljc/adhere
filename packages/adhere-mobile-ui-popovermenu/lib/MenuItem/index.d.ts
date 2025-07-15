import type { FC } from 'react';
import type { MenuItemProps } from '../types';
/**
 * 菜单项组件
 * @description 渲染单个菜单项，支持图标、文本、点击事件和禁用状态
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param icon - 菜单项图标
 * @param text - 菜单项文本
 * @param disabled - 是否禁用
 * @param onClick - 点击回调函数
 */
declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
