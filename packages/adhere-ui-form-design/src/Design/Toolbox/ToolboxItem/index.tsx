import classNames from 'classnames';
import React, { useContext } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { SELECT_PREFIX } from '../../../constant';
import type { ToolboxItemProps } from '../../../types';

const selectPrefix = `${SELECT_PREFIX}-design-toolbox`;

/**
 * ToolboxItem
 */
const ToolboxItem: React.FC<ToolboxItemProps> = ({
  type,
  disabled,
  icon,
  label,
  tooltip,
  render,
  className,
  style,
}) => {
  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const lang = ConfigProviderContext.intl.lang!;

  return (
    <div
      key={type}
      className={classNames(`${selectPrefix}-group-list-item`, className, {
        [`${selectPrefix}-group-list-item-disabled`]: disabled,
      })}
      style={style}
      title={tooltip}
    >
      {!!render && render(lang)}

      {!render && (
        <>
          <i>{icon}</i>
          <span>{label}</span>
        </>
      )}
    </div>
  );
};

export default ToolboxItem;
