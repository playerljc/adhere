import React, { MouseEvent, memo, useCallback } from 'react';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import { DelConfirmProps } from './types';
import type { DelConfirmComponent, OpenFunction } from './types';

/** CSS选择器前缀 */
const selectorPrefix = 'adhere-ui-del-confirm';

/**
 * 内部删除确认组件
 * 用于包装需要删除确认功能的元素
 * 
 * @param {DelConfirmProps} props - 组件属性
 * @returns {JSX.Element} 删除确认组件
 * 
 * @example
 * ```tsx
 * <DelConfirm success={handleDelete}>
 *   <Button>删除</Button>
 * </DelConfirm>
 * ```
 */
const InternalDelConfirm = memo<DelConfirmProps>((props) => {
  const { className, style, children } = props;

  /**
   * 点击事件处理函数
   * 阻止事件冒泡并打开删除确认对话框
   * 
   * @param {MouseEvent<HTMLDivElement>} e - 鼠标点击事件
   */
  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const { children: _, ...dialogParams } = props;

    DelConfirm.open({ 
      width: 350, 
      ...dialogParams 
    });
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
InternalDelConfirm.displayName = 'InternalDelConfirm';

/** DelConfirm 组件类型转换 */
const DelConfirm = InternalDelConfirm as DelConfirmComponent;

// 设置组件显示名称
DelConfirm.displayName = 'DelConfirm';

/**
 * 静态方法：打开删除确认对话框
 * 
 * @param {OpenFunction} params - 对话框配置参数
 * @param {() => Promise<void>} [params.success] - 确认删除成功后的回调函数
 * @param {string} [params.title] - 对话框标题，默认为国际化提示文本
 * @param {string} [params.text] - 对话框内容，默认为确认删除提示
 * @param {number} [params.zIndex] - 对话框层级，默认使用资源字典中的最大层级
 * 
 * @example
 * ```tsx
 * DelConfirm.open({
 *   title: '确认删除',
 *   text: '确定要删除这条记录吗？',
 *   success: async () => {
 *     await deleteRecord(id);
 *   }
 * });
 * ```
 */
DelConfirm.open = ({ success, ...params }: OpenFunction): void => {
  MessageDialog.Confirm({
    ...params,
    title: params.title || Intl.get('hint'),
    text: params.text || `${Intl.get('confirm_delete')}?`,
    zIndex: params.zIndex ?? Resource?.Dict?.value?.ResourceNormalMaxZIndex?.value,
    onSuccess: (): Promise<void> =>
      new Promise((resolve, reject) => {
        if (success) {
          success()
            .then(() => resolve())
            .catch((error) => {
              console.error('DelConfirm success callback failed:', error);
              reject(error);
            });
        } else {
          resolve();
        }
      }),
  });
};

export default DelConfirm;
