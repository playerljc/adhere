import { Popover, Tooltip } from 'antd';
import React, { FC } from 'react';

import { ColumnHeightOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchList';
import { ListDensitySettingProps } from '../../types';
import Setting from './Setting';

/**
 * ListDensitySetting
 * @description 列表密度设置
 * @param props
 * @constructor
 */
const ListDensitySetting: FC<ListDensitySettingProps> = (props) => {
  return (
    <Popover
      content={<Setting {...props} density={props.density ?? 'default'} />}
      placement="bottomRight"
      trigger="click"
      getPopupContainer={(el) => el.parentElement as HTMLElement}
    >
      <Tooltip title={`${Intl.v('密度')}`}>
        <div className={`${selectorPrefix}-list-density-setting-btn`}>
          {props.renderDensitySettingBtn && props.renderDensitySettingBtn()}
          {!props.renderDensitySettingBtn && <ColumnHeightOutlined />}
        </div>
      </Tooltip>
    </Popover>
  );
};

export default ListDensitySetting;
