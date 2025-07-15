import type { FC } from 'react';
import type { MenuProps } from '../types';
/**
 * 菜单容器组件
 * @description 渲染菜单项列表，支持子菜单和普通菜单项
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param direction - 菜单展开方向
 * @param maxCount - 最大显示菜单项数量
 * @param items - 菜单项配置数组
 */
declare const Menu: FC<MenuProps>;
export default Menu;
