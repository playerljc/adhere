import { Dialog } from 'antd-mobile';
import type { DialogConfirmProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { MouseEvent, memo, useCallback } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DelConfirmComponent, DelConfirmProps } from './types';

/** CSS选择器前缀 */
const selectorPrefix = 'adhere-ui-mobile-del-confirm';

/**
 * 删除确认组件
 * 
 * 这是一个可点击的删除确认组件，点击时会弹出确认对话框。
 * 支持自定义样式和内容，同时提供静态方法直接打开确认对话框。
 * 
 * @example
 * ```tsx
 * // 作为组件使用
 * <DelConfirm onConfirm={() => handleDelete()}>
 *   <Button>删除</Button>
 * </DelConfirm>
 * 
 * // 作为静态方法使用
 * const confirmed = await DelConfirm.open({
 *   onConfirm: () => handleDelete()
 * });
 * ```
 * 
 * @param props - 组件属性
 * @returns 删除确认组件
 */
const InternalDelConfirm = memo<DelConfirmProps>((props) => {
  const { className, style, children, ...restProps } = props;

  /**
   * 处理点击事件
   * 阻止事件冒泡并打开删除确认对话框
   * 
   * @param e - 鼠标点击事件
   */
  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    return DelConfirm.open(restProps);
  }, [restProps]);

  return (
    <div
      className={classNames(selectorPrefix, className)}
      style={style}
      onClick={handleClick}
    >
      {children}
    </div>
  );
});

// 类型断言，将组件转换为包含静态方法的类型
const DelConfirm = InternalDelConfirm as DelConfirmComponent;

/**
 * 静态方法：打开删除确认对话框
 * 
 * 直接调用此方法可以打开一个删除确认对话框，无需渲染组件。
 * 
 * @example
 * ```tsx
 * const handleDelete = async () => {
 *   const confirmed = await DelConfirm.open({
 *     onConfirm: () => {
 *       // 执行删除操作
 *       deleteItem(id);
 *     }
 *   });
 *   
 *   if (confirmed) {
 *     console.log('用户确认删除');
 *   }
 * };
 * ```
 * 
 * @param props - 对话框配置属性，可选
 * @returns Promise<boolean> - 用户确认结果，true表示确认删除，false表示取消
 */
DelConfirm.open = (props?: DialogConfirmProps): Promise<boolean> =>
  Dialog.confirm({
    title: Intl.get('hint'),
    content: `${Intl.get('confirm_delete')}?`,
    ...props,
  });

// 设置组件显示名称，便于调试
DelConfirm.displayName = 'DelConfirm';

export default DelConfirm;
