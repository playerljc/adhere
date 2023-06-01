import classNames from 'classnames';
import qs from 'qs';
import React from 'react';

import ltr from '@/images/ltr.svg';
import rtl from '@/images/rtl.svg';
import Util from '@/util';

import styles from './index.less';

/**
 * changeDirection
 * @param {string} _direction 方向
 */
export const changeDirection = (_direction) => {
  const search = window.location.search;
  const pathname = window.location.pathname;
  const protocol = window.location.protocol;
  const host = window.location.host;

  const query = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  query.direction = _direction;

  window.location.href = `${protocol}//${host}/${pathname}?${qs.stringify(query)}`;
};

export default ({ className, style }) => {
  const direction = Util.getDirection();

  const map = new Map([
    [
      'ltr',
      {
        icon: ltr,
        handle: () => {
          changeDirection('rtl');
        },
      },
    ],
    [
      'rtl',
      {
        icon: rtl,
        handle: () => {
          changeDirection('ltr');
        },
      },
    ],
  ]);

  return (
    <div
      className={classNames(styles.Wrap, className)}
      style={style ?? {}}
      onClick={map.get(direction)?.handle}
    >
      <img src={map.get(direction)?.icon} alt="" />
    </div>
  );
};
