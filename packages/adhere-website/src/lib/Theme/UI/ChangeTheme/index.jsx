import classNames from 'classnames';
import React, { useState } from 'react';

import { Select } from '@baifendian/adhere-ui-anthoc';

import { render } from '@/index';

import { getThemeKey, getThemeKeys, setTheme as setSystemTheme } from '../../Util';

import styles from './index.less';

const { Option } = Select;

export default ({ className, style }) => {
  const [theme, setTheme] = useState(getThemeKey());

  return (
    <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
      <Select
        onChange={(t) => {
          setTheme(t);
          setSystemTheme(t);
          render();
        }}
        value={theme}
      >
        {getThemeKeys().map((key) => (
          <Option key={key} value={key}>
            <div className={styles.Option}>
              <span>{key}</span>
            </div>
          </Option>
        ))}
      </Select>
    </div>
  );
};
