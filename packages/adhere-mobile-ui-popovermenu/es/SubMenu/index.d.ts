import type { FC } from 'react';
import type { SubMenuProps } from '../types';
/**
 * 子菜单组件
 * @description 渲染带有子菜单的菜单项，支持弹出式子菜单
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param direction - 菜单展开方向
 * @param icon - 菜单项图标
 * @param text - 菜单项文本
 * @param disabled - 是否禁用
 * @param popoverProps - Popover 组件的额外属性
 * @param items - 子菜单项配置
 * @param maxCount - 最大显示菜单项数量
 */
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
