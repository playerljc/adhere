import React, { MouseEvent, memo, useCallback } from 'react';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import type { ImportantConfirmComponent, ImportantConfirmProps, OpenFunction } from './types';

/** CSS选择器前缀 */
const selectorPrefix = 'adhere-ui-important-confirm';

/** 警告图标SVG的base64编码 */
const WARNING_ICON_BASE64 =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi40LTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=';

/**
 * 内部ImportantConfirm组件
 * @description 重要确认对话框组件，点击时会打开确认对话框
 * @param props - 组件属性
 * @returns JSX元素
 */
const InternalImportantConfirm = memo<ImportantConfirmProps>((props) => {
  const { className, style, children } = props;

  /**
   * 点击事件处理函数
   * @param e - 鼠标点击事件
   */
  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const { children: _, ...dialogParams } = props;

    ImportantConfirm.open({ ...dialogParams });
  }, [props]);

  return (
    <div 
      className={`${selectorPrefix} ${className ?? ''}`.trim()} 
      style={style ?? {}} 
      onClick={handleClick}
    >
      {children}
    </div>
  );
});

// 设置组件显示名称
InternalImportantConfirm.displayName = 'InternalImportantConfirm';

/**
 * ImportantConfirm组件
 * @description 重要确认对话框组件，包含静态open方法
 */
const ImportantConfirm = InternalImportantConfirm as ImportantConfirmComponent;

// 设置组件显示名称
ImportantConfirm.displayName = 'ImportantConfirm';

/**
 * 打开重要确认对话框的静态方法
 * @param params - 对话框配置参数
 * @param params.success - 确认成功后的回调函数
 * @param params.title - 对话框标题，默认为国际化提示文本
 * @param params.text - 对话框内容，默认为确认操作提示
 * @param params.zIndex - 对话框层级，默认为资源字典中的最大层级
 */
ImportantConfirm.open = ({ success, ...params }: OpenFunction): void => {
  MessageDialog.Confirm({
    ...params,
    title: params.title || Intl.get('hint'),
    text: params.text || `${Intl.get('confirm_action')}?`,
    zIndex: params.zIndex ?? Resource?.Dict?.value?.ResourceNormalMaxZIndex?.value,
    icon: <img src={WARNING_ICON_BASE64} alt="warning" width={32} height={32} />,
    onSuccess: () =>
      new Promise<void>((resolve, reject) => {
        if (typeof success === 'function') {
          success()
            .then(() => resolve())
            .catch((error) => {
              console.error('ImportantConfirm success callback failed:', error);
              reject(error);
            });
        } else {
          resolve();
        }
      }),
  });
};

export default ImportantConfirm;
