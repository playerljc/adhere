import PropTypes from 'prop-types';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../searchtable';
import { TableDensity } from '../../types';

const config = [
  {
    label: Intl.v('缺省'),
    value: TableDensity.DEFAULT,
  },
  {
    label: Intl.v('中等'),
    value: TableDensity.MIDDLE,
  },
  {
    label: Intl.v('紧凑'),
    value: TableDensity.SMALL,
  },
];

/**
 * TableDensitySetting
 * @param props
 * @constructor
 */
function TableDensitySetting({ density, onReset, onChange }) {
  return (
    <div className={`${selectorPrefix}-table-density-setting`}>
      <div className={`${selectorPrefix}-table-density-setting-header`}>
        <a onClick={onReset}>{Intl.v('重置')}</a>
      </div>

      <div className={`${selectorPrefix}-table-density-setting-body`}>
        <ul>
          {config.map((t) => (
            <li
              key={t.value}
              className={density === t.value ? 'active' : ''}
              onClick={() => {
                onChange(t.value);
              }}
            >
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

TableDensitySetting.defaultProps = {
  density: TableDensity.DEFAULT,
};

TableDensitySetting.propTypes = {
  density: PropTypes.string,
  onReset: PropTypes.func,
  onChange: PropTypes.func,
};

export default TableDensitySetting;
