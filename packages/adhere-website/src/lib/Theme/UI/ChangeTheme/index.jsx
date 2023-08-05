import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { useState } from 'react';

import { Select } from '@baifendian/adhere-ui-anthoc';

import { changeTheme, getThemeKey, getThemeKeys } from '../../Util';

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

  useUpdateEffect(() => {
    setTheme(getThemeKey);
  }, [getThemeKey()]);

  return (
    <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
      <Select
        allowClear={false}
        value={theme}
        onChange={(t) => {
          setTheme(t);
          changeTheme(t);
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
