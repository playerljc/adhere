import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import { parseFlexProperty } from '../../../Fields';
import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue, PropertiesTabProps } from '../../../types';
import { DesignContext } from '../../Context';

const selectPrefix = `${SELECT_PREFIX}-design-properties-flex-tab`;

const FlexTab: FC<PropertiesTabProps> = () => {
  const { getActiveDesignFieldValue, getItems } = useContext(DesignContext);

  const activeDesignFieldValue = getActiveDesignFieldValue();
  const items = getItems();

  return (
    <div className={classNames(selectPrefix)}>
      {parseFlexProperty({
        value: activeDesignFieldValue as DesignValue,
        items,
      })}
    </div>
  );
};

export default FlexTab;
