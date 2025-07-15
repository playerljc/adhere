import { Dialog } from 'antd-mobile';
import type { DialogConfirmProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { MouseEvent, memo, useCallback } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { ImportantConfirmProps } from './types';
import type { ImportantConfirmComponent } from './types';

/** CSS选择器前缀 */
const selectorPrefix = 'adhere-ui-mobile-important-confirm';

/** 警告图标的base64编码 */
const WARNING_ICON =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=';

/**
 * 重要确认对话框组件
 * 
 * 这是一个带有警告图标的确认对话框组件，用于需要用户特别注意的重要操作确认。
 * 组件可以作为普通React组件使用，也可以通过静态方法 `open` 直接调用。
 * 
 * @example
 * ```tsx
 * // 作为组件使用
 * <ImportantConfirm onConfirm={() => console.log('confirmed')}>
 *   <button>点击确认</button>
 * </ImportantConfirm>
 * 
 * // 作为静态方法使用
 * const result = await ImportantConfirm.open({
 *   content: '确定要删除这个文件吗？',
 *   onConfirm: () => deleteFile()
 * });
 * ```
 */
const InternalImportantConfirm = memo<ImportantConfirmProps>((props) => {
  const { className, style, children, ...restProps } = props;

  /**
   * 处理点击事件，阻止事件冒泡并打开确认对话框
   * @param e - 鼠标点击事件对象
   */
  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    return ImportantConfirm.open(restProps);
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
const ImportantConfirm = InternalImportantConfirm as ImportantConfirmComponent;

/**
 * 打开重要确认对话框的静态方法
 * 
 * @param props - 对话框配置属性，继承自 antd-mobile 的 DialogConfirmProps
 * @returns Promise<boolean> - 返回用户的选择结果，true表示确认，false表示取消
 * 
 * @example
 * ```tsx
 * const handleDelete = async () => {
 *   const confirmed = await ImportantConfirm.open({
 *     content: '确定要删除这个文件吗？',
 *     confirmText: '删除',
 *     cancelText: '取消'
 *   });
 *   
 *   if (confirmed) {
 *     // 执行删除操作
 *     deleteFile();
 *   }
 * };
 * ```
 */
ImportantConfirm.open = (props: DialogConfirmProps): Promise<boolean> =>
  Dialog.confirm({
    title: Intl.get('hint'),
    ...props,
    content: (
      <div className={`${selectorPrefix}-content`}>
        <img src={WARNING_ICON} alt="警告图标" />
        <div className={`${selectorPrefix}-content-info`}>
          {props.content ?? `${Intl.get('confirm_action')}?`}
        </div>
      </div>
    ),
  });

// 设置组件显示名称，便于调试
ImportantConfirm.displayName = 'ImportantConfirm';

export default ImportantConfirm;
