import { Popover, Tooltip } from 'antd';
import React, { FC } from 'react';

import { ColumnHeightOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchTable';
import { TableDensity, TableDensitySettingProps } from '../../types';
import Setting from './Setting';

/**
 * TableDensitySetting
 * @description 表格密度设置
 * @param props
 * @constructor
 */
const TableDensitySetting: FC<TableDensitySettingProps> = (props) => {
  return (
    <Popover
      content={<Setting {...props} density={props.density ?? TableDensity.DEFAULT} />}
      placement="bottomRight"
      trigger="click"
      getPopupContainer={(el) => el.parentElement as HTMLElement}
    >
      <Tooltip title={`${Intl.v('密度')}`}>
        <div className={`${selectorPrefix}-table-density-setting-btn`}>
          {props.renderDensitySettingBtn && props.renderDensitySettingBtn()}
          {!props.renderDensitySettingBtn && <ColumnHeightOutlined />}
        </div>
      </Tooltip>
    </Popover>
  );
};

TableDensitySetting.displayName = 'TableDensitySetting';

export default TableDensitySetting;
