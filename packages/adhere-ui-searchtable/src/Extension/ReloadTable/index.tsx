import { Tooltip } from 'antd';
import React, { FC } from 'react';

import { ReloadOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchTable';
import { ReloadTableProps } from '../../types';

const ReloadTable: FC<ReloadTableProps> = ({ onReload, showLoading, renderReloadBtn }) => {
  return (
    <Tooltip title={`${Intl.v('刷新')}`}>
      {renderReloadBtn && renderReloadBtn({ showLoading, onReload })}
      {!renderReloadBtn && (
        <ReloadOutlined
          onClick={onReload}
          className={`${selectorPrefix}-reload-table-btn`}
          spin={showLoading}
        />
      )}
    </Tooltip>
  );
};

ReloadTable.displayName = 'ReloadTable';

export default ReloadTable;
