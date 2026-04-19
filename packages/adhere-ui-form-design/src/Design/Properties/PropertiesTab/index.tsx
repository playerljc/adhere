import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import type { FC } from 'react';

import { parseMainProperty } from '../../../Fields';
import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue, PropertiesTabProps } from '../../../types';
import { withMergedFieldPropsForTerminal } from '../../../utils';
import { DesignContext } from '../../Context';

const selectPrefix = `${SELECT_PREFIX}-design-properties-props-tab`;

const PropertiesTab: FC<PropertiesTabProps> = () => {
  const { getActiveDesignFieldValue, getItems, getTerminal } = useContext(DesignContext);

  const activeDesignFieldValue = getActiveDesignFieldValue();
  const items = getItems();
  const terminal = getTerminal();

  const valueForMainProperty = useMemo(() => {
    if (!activeDesignFieldValue) return null;
    return withMergedFieldPropsForTerminal(activeDesignFieldValue as DesignValue, terminal);
  }, [activeDesignFieldValue, terminal]);

  return (
    <div className={classNames(selectPrefix)}>
      {parseMainProperty({
        value: valueForMainProperty as DesignValue,
        items,
      })}
    </div>
  );
};

export default PropertiesTab;
