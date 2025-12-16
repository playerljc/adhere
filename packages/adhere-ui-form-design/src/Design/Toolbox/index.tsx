import { Input } from 'antd';
import classNames from 'classnames';
import React, { type ReactNode, useCallback, useContext, useState } from 'react';
import type { FC } from 'react';
import * as ReactIs from 'react-is';

import type { IntlLanguage } from '@baifendian/adhere-ui-configprovider';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import { ToolBoxGroup, ToolBoxItem } from '../../types';
import type { ToolboxProps } from '../../types';
import DraggableItem from './DraggableItem';
import ToolboxItem from './ToolboxItem';

const selectPrefix = `${SELECT_PREFIX}-design-toolbox`;

const { Search } = Input;

/**
 * Toolbox
 */
const Toolbox: FC<ToolboxProps> = ({ toolBox }) => {
  const [kw, setKw] = useState('');

  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const lang = ConfigProviderContext.intl.lang!;

  const groupTitleToolTip = useCallback(
    (tooltip: ToolBoxGroup['tooltip']) => {
      if (!tooltip) return '';

      if (typeof tooltip === 'string') return tooltip;
      if (Util.isFunction(tooltip)) return tooltip(lang);
    },
    [lang],
  );

  const groupTitle = useCallback(
    (label: ToolBoxGroup['label']) => {
      if (typeof label === 'string' || ReactIs.isElement(label)) return label;

      if (Util.isFunction(label)) {
        return (label as (lang: IntlLanguage) => ReactNode)(lang);
      }

      return null;
    },
    [lang],
  );

  const filterItems = useCallback(
    (items: ToolBoxItem[]) => {
      return items.filter(({ searchLabel }) => {
        if (!kw) return true;

        if (!searchLabel) return true;

        return searchLabel.toLocaleLowerCase().includes(kw.toLocaleLowerCase());
      });
    },
    [kw],
  );

  return (
    <div className={classNames(selectPrefix)}>
      <div className={classNames(`${selectPrefix}-search-wrapper`)}>
        <Search
          placeholder={Intl.get('enter_search_keyword')}
          value={kw}
          onSearch={(value) => setKw(value)}
          onClear={() => {
            setKw('');
          }}
        />
      </div>

      <div className={classNames(`${selectPrefix}-body`)}>
        {toolBox.map(({ id, label, tooltip, columns, items, disabled }) => (
          <dl key={id} className={classNames(`${selectPrefix}-group`)}>
            <dt
              className={classNames(`${selectPrefix}-group-title`)}
              title={groupTitleToolTip(tooltip)}
            >
              {groupTitle(label) as ReactNode}
            </dt>

            <dd className={classNames(`${selectPrefix}-group-body`)}>
              <ul
                className={classNames(`${selectPrefix}-group-list`)}
                style={{
                  gridTemplateRows: `repeat(${columns}, 1fr)`,
                  gridTemplateColumns: `repeat(${columns}, 1fr)`,
                }}
              >
                {filterItems(items).map(
                  ({ type, disabled: itemDisabled, icon, label, tooltip, render }) => {
                    const toolboxItemData: ToolBoxItem = {
                      type,
                      disabled: itemDisabled ?? disabled,
                      icon,
                      label,
                      tooltip,
                      render,
                    };

                    return (
                      <DraggableItem
                        key={type}
                        id={type}
                        disabled={itemDisabled ?? disabled}
                        data={{
                          ...toolboxItemData,
                        }}
                      >
                        <ToolboxItem {...toolboxItemData} />
                      </DraggableItem>
                    );
                  },
                )}
              </ul>
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

export default Toolbox;
