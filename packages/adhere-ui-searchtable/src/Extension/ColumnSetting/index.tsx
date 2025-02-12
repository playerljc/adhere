import { Popover, Tooltip } from 'antd';
import React, { FC } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchTable';
import type { ColumnSettingProps } from '../../types';
import Setting from './Setting';

/**
 * ColumnSetting
 * @description 列设置
 * @param props
 * @constructor
 */
const ColumnSetting: FC<ColumnSettingProps> = (props) => {
  return (
    <Popover
      content={<Setting {...props} />}
      placement="bottomRight"
      trigger="click"
      // getPopupContainer={(el) => el.parentElement as HTMLElement}
    >
      <Tooltip title={`${Intl.v('列设置')}`}>
        <div className={`${selectorPrefix}-column-setting-btn`}>
          {props.renderColumnSettingBtn && props.renderColumnSettingBtn()}
          {!props.renderColumnSettingBtn && <SettingOutlined />}
        </div>
      </Tooltip>
    </Popover>
  );
};

export default ColumnSetting;
