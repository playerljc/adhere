import classNames from 'classnames';
import React, { FC } from 'react';

import { RevolvingItemProps } from './types';

const selectorPrefix = 'adhere-ui-revolving-item';

const RevolvingItem: FC<RevolvingItemProps> = (props) => {
  const { className = '', style = {}, children } = props;

  return (
    <div
      className={classNames(selectorPrefix, 'swiper-slide', className ?? '')}
      style={style ?? {}}
    >
      {children}
    </div>
  );
};

export default RevolvingItem;
