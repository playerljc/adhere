import { SwipeAction } from 'antd-mobile';
import React from 'react';
import type { FC } from 'react';

import type { ActionSwiperProps } from '../types';

const COLORS = ['danger', 'primary', 'success'];

/**
 * ActionSwiper
 * @param children
 * @param config
 * @constructor
 */
const ActionSwiper: FC<ActionSwiperProps> = ({ children, config }) => (
  <SwipeAction
    rightActions={config.map((_config, _index) => ({
      key: _config.key,
      text: _config.text,
      onClick: () => {
        if (!!_config.disabled) return;

        _config.onClick?.();
      },
      color: !!_config.disabled ? 'light' : COLORS[_index % COLORS.length],
    }))}
  >
    {children}
  </SwipeAction>
);

export default ActionSwiper;
