import classNames from 'classnames';
import React from 'react';

import { Dict } from '@baifendian/adhere';
import { Select } from '@baifendian/adhere-ui-anthoc';

import Util from '@/util';

import { changeDirection } from '../DirectionChange';

import styles from './index.less';

/**
 * changeLang
 * @param {string} _lang 语言的code
 */
export const changeLang = (_lang) => {
  Util.setLang(_lang);

  changeDirection(Dict.value.SystemLang.value[_lang].direction);
};

export default ({ className, style }) => {
  const defaultLang = Util.getLang();

  return (
    <div className={classNames(styles.Wrap, className)} style={style ?? {}}>
      <Select
        allowClear={false}
        value={defaultLang}
        onChange={(t) => {
          changeLang(t);
        }}
        options={Array.from(Object.values(Dict.value.SystemLang.value)).map((t) => ({
          label: t.name,
          value: t.code,
        }))}
      />
    </div>
  );
};
