import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import { parseActionsProperty } from '../../../Fields';
import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue, StyleTabProps } from '../../../types';
import { DesignContext } from '../../Context';

const selectPrefix = `${SELECT_PREFIX}-design-properties-actions-tab`;

const FormTab: FC<StyleTabProps> = () => {
  const { getActiveDesignFieldValue, getItems } = useContext(DesignContext);

  const activeDesignFieldValue = getActiveDesignFieldValue();
  const items = getItems();

  return (
    <div className={classNames(selectPrefix)}>
      {parseActionsProperty({
        value: activeDesignFieldValue as DesignValue,
        items,
      })}
    </div>
  );
};

export default FormTab;
