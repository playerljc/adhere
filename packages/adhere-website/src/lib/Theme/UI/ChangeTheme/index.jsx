import classNames from 'classnames';
import React, { useState } from 'react';

import { Select } from '@baifendian/adhere-ui-anthoc';

import { render } from '@/index';

import { getThemeKey, getThemeKeys, setTheme as setSystemTheme } from '../../Util';

import styles from './index.less';

const { Option } = Select;

/**
 * ChangeTheme
 * @param className
 * @param style
 * @return {JSX.Element}
 */
export default ({ className, style }) => {
  const [theme, setTheme] = useState(getThemeKey());

  return (
    <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
      <Select
        allowClear={false}
        value={theme}
        onChange={(t) => {
          setTheme(t);
          setSystemTheme(t);
          render();
        }}
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
