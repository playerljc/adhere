import { Tooltip } from 'antd';
import React, { FC } from 'react';

import { InfoCircleOutlined } from '@ant-design/icons';

import { selectorPrefix } from '../../SearchTable';
import type { ColumnTipTitleProps } from '../../types';

const ColumnTipTitle: FC<ColumnTipTitleProps> = ({ tip, title }) => {
  return (
    <div className={`${selectorPrefix}-column-tip-title`}>
      <div className={`${selectorPrefix}-column-tip-title-content`}>{title}</div>
      <div className={`${selectorPrefix}-column-tip-title-info`}>
        <Tooltip title={tip}>
          <InfoCircleOutlined />
        </Tooltip>
      </div>
    </div>
  );
};

export default ColumnTipTitle;
