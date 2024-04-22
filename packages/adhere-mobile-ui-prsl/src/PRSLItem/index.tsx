import { Checkbox, Radio } from 'antd-mobile';
import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import Context from '../Context';
import type { PRSLItemProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-prsl-item';

const PRSLItem: FC<PRSLItemProps> = ({ className, style, children, record }) => {
  const {
    isUseSelectionMode,
    getRowKey,
    getOptionSelectedRowKeys,
    selectionChange,
    getSelectionMultiple,
  } = useContext(Context);

  const rowKey = getRowKey();

  const id = record?.[rowKey];

  const selectionMultiple = getSelectionMultiple();

  const optionSelectedRowKeys = getOptionSelectedRowKeys();

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      {isUseSelectionMode() && (
        <div className={`${selectorPrefix}-check`}>
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
      )}

      <div className={`${selectorPrefix}-main`}>{children}</div>
    </div>
  );
};

export default PRSLItem;
