import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

import { EditOutlined } from '@ant-design/icons';

import { selectorPrefix } from '../../../SearchTable';
import type { EditableCellViewProps } from '../../../types';

/**
 * EditableCellViewProps
 * @description 可编辑单元格的查看状态
 */
const EditableCellView: FC<EditableCellViewProps> = (props) => {
  const { record, column, rowIndex, columns, editableConfig, onTriggerChange, ...restProps } =
    props;

  const { useTrigger, renderToEditTrigger, dataIndex, onBeforeToEdit } = editableConfig;

  // 不使用句柄则返回原始组件
  if (!useTrigger) {
    // @ts-ignore
    return <>{restProps?.children}</>;
  }

  /**
   * renderTrigger
   * @description 渲染句柄
   */
  function renderTrigger() {
    return <EditOutlined />;
  }

  /**
   * onTrigger
   * @description 点击了句柄
   */
  function onTrigger() {
    if (onBeforeToEdit) {
      onBeforeToEdit({
        value: record[dataIndex as string],
        record,
        dataIndex,
        rowIndex,
      })?.then(() => onTriggerChange?.());
      return;
    }

    onTriggerChange?.();
  }

  return (
    <div className={`${selectorPrefix}-editablecell-view`}>
      <div
        className={classNames(
          `${selectorPrefix}-editablecell-view-inner`,
          'ellipsis' in column && column.ellipsis
            ? `${selectorPrefix}-editablecell-view-inner-ellipsis`
            : '',
        )}
      >
        {
          // @ts-ignore
          restProps?.children
        }
      </div>
      <div className={`${selectorPrefix}-editablecell-view-trigger`}>
        <div className={`${selectorPrefix}-editablecell-view-trigger-inner`} onClick={onTrigger}>
          {!!renderToEditTrigger &&
            renderToEditTrigger?.({
              value: record?.[dataIndex as string],
              record,
              dataIndex,
              rowIndex,
            })}
          {!renderToEditTrigger && renderTrigger()}
        </div>
      </div>
    </div>
  );
};

export default EditableCellView;
