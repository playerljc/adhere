import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import { parseStyleProperty } from '../../../Fields';
import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue, StyleTabProps } from '../../../types';
import { DesignContext } from '../../Context';

const selectPrefix = `${SELECT_PREFIX}-design-properties-style-tab`;

const StyleTab: FC<StyleTabProps> = () => {
  const { getActiveDesignFieldValue, getItems } = useContext(DesignContext);

  const activeDesignFieldValue = getActiveDesignFieldValue();
  const items = getItems();

  return (
    <div className={classNames(selectPrefix)}>
      {parseStyleProperty({
        value: activeDesignFieldValue as DesignValue,
        items,
      })}
    </div>
  );
};

export default StyleTab;
