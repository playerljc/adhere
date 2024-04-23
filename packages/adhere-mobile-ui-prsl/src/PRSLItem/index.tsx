import { Checkbox, Radio } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { useCallback, useContext, useMemo } from 'react';
import type { FC } from 'react';
import { SortableHandle } from 'react-sortable-hoc';

import Context from '../Context';
import { SortableItem } from '../DND';
import type { PRSLItemProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-prsl-item';

const DragHandle = SortableHandle(
  ({ children }) =>
    children ?? (
      <span>
        <MoreOutline />
      </span>
    ),
);

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
  } = useContext(Context);

  const rowKey = getRowKey();

  const id = record?.[rowKey];

  const index = getIndexByIdFormOptionDataSource(id);

  const selectionMultiple = getSelectionMultiple();

  const optionSelectedRowKeys = getOptionSelectedRowKeys();

  const wrapper = useCallback(
    (_children) => {
      return (
        <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
          {_children}
        </div>
      );
    },
    [className, style],
  );

  const childrenWrapper = useMemo(
    () => <div className={`${selectorPrefix}-main`}>{children}</div>,
    [children],
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
        <SortableItem index={index}>
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
