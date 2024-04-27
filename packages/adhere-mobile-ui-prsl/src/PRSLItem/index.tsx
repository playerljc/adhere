import { Checkbox, Radio } from 'antd-mobile';
import classNames from 'classnames';
import React, { useCallback, useContext, useMemo } from 'react';
import type { FC } from 'react';

import { ActionSheetTrigger, ActionSwiper } from '../Action';
import Context from '../Context';
import { DragHandle, SortableItem } from '../DND';
import type { PRSLItemProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-prsl-item';

/**
 * PRSLItem
 * @param className
 * @param style
 * @param children
 * @param record
 * @constructor
 */
const PRSLItem: FC<PRSLItemProps> = ({ className, style, children, record }) => {
  const {
    isUseSelectionMode,
    isUseDNDMode,
    getRowKey,
    getOptionSelectedRowKeys,
    selectionChange,
    getSelectionMultiple,
    getIndexByIdFormOptionDataSource,
    getDndDragHandle,
    getActionTriggerMode,
    getRenderActionSheetTrigger,
    onAction,
  } = useContext(Context);

  const rowKey = getRowKey();

  const id = record?.[rowKey];

  const rowIndex = getIndexByIdFormOptionDataSource(id);

  const selectionMultiple = getSelectionMultiple();

  const optionSelectedRowKeys = getOptionSelectedRowKeys();

  const actionTriggerMode = getActionTriggerMode();

  const actionSheetTrigger = getRenderActionSheetTrigger?.();

  // 每一行Action的配置
  const actionsConfig = onAction(record as Record<string, any>, rowIndex);

  // 是否使用ActionSheet显示Action
  const isActionSheetTriggerMode = useMemo(
    () => actionTriggerMode === 'ActionSheet',
    [actionTriggerMode],
  );

  const wrapper = useCallback(
    (_children) => {
      const wrapperMemo = (
        <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
          {_children}
        </div>
      );

      if (!isActionSheetTriggerMode) {
        return <ActionSwiper config={actionsConfig}>{wrapperMemo}</ActionSwiper>;
      }

      return wrapperMemo;
    },
    [className, style, isActionSheetTriggerMode, actionsConfig],
  );

  const childrenWrapper = useMemo(
    () => (
      <div className={`${selectorPrefix}-main`}>
        {children?.({
          actionSheetTrigger:
            isActionSheetTriggerMode && actionsConfig.length ? (
              <ActionSheetTrigger config={actionsConfig} actionSheetTrigger={actionSheetTrigger} />
            ) : null,
        })}
      </div>
    ),
    [children, isActionSheetTriggerMode, actionsConfig],
  );

  function renderChildren() {
    // 选择模式
    if (isUseSelectionMode()) {
      return wrapper(
        <>
          <div className={`${selectorPrefix}-extra`}>
            {selectionMultiple && (
              <Checkbox
                checked={optionSelectedRowKeys.includes(id)}
                onChange={(_checked) => {
                  selectionChange(_checked, id);
                }}
              />
            )}

            {!selectionMultiple && (
              <Radio
                checked={optionSelectedRowKeys.includes(id)}
                onChange={(_checked) => {
                  selectionChange(_checked, id);
                }}
              />
            )}
          </div>
          {childrenWrapper}
        </>,
      );
    }
    // DND模式
    else if (isUseDNDMode()) {
      return (
        <SortableItem index={rowIndex}>
          {wrapper(
            <>
              <div className={`${selectorPrefix}-extra`}>
                <DragHandle>{getDndDragHandle()}</DragHandle>
              </div>
              {childrenWrapper}
            </>,
          )}
        </SortableItem>
      );
    }
    // 普通的模式
    else {
      return wrapper(childrenWrapper);
    }
  }

  return renderChildren();
};

export default PRSLItem;
