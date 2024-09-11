import PropTypes from 'prop-types';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

const selectorPrefix = 'adhere-ui-search-list';

const config = [
  {
    label: Intl.v('缺省'),
    value: 'default',
  },
  {
    label: Intl.v('大'),
    value: 'large',
  },
  {
    label: Intl.v('小'),
    value: 'small',
  },
];

/**
 * ListDensitySetting
 * @param props
 * @constructor
 */
function ListDensitySetting({ density, onReset, onChange }) {
  return (
    <div className={`${selectorPrefix}-list-density-setting`}>
      <div className={`${selectorPrefix}-list-density-setting-header`}>
        <a onClick={onReset}>{Intl.v('重置')}</a>
      </div>

      <div className={`${selectorPrefix}-list-density-setting-body`}>
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

ListDensitySetting.defaultProps = {
  density: 'default',
};

ListDensitySetting.propTypes = {
  density: PropTypes.string,
  onReset: PropTypes.func,
  onChange: PropTypes.func,
};

export default ListDensitySetting;
