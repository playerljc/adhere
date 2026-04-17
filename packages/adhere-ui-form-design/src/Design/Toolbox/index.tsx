import { Input } from 'antd';
import classNames from 'classnames';
import React, {
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { FC } from 'react';
import * as ReactIs from 'react-is';

import { ApartmentOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Collapse, Tabs } from '@baifendian/adhere-ui-anthoc';
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
  const [activeKeys, setActiveKeys] = useState<string[]>(() => toolBox.map(({ id }) => id));

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

  useEffect(() => {
    setActiveKeys((prev) => {
      const prevSet = new Set(prev);

      // 新增分组默认展开；已折叠/展开状态不被覆盖
      toolBox.forEach(({ id }) => {
        if (!prevSet.has(id)) prevSet.add(id);
      });

      // 清理已不存在的分组 key，并按 toolBox 顺序输出
      return toolBox.map(({ id }) => id).filter((id) => prevSet.has(id));
    });
  }, [toolBox]);

  const collapseItems = useMemo(() => {
    return toolBox
      .map(({ id, label, tooltip, columns: groupColumns, items, disabled }) => {
        const columns = groupColumns ?? 2;
        const visibleItems = filterItems(items);

        if (visibleItems.length === 0) return null;

        return {
          key: id,
          label: (
            <span
              className={classNames(`${selectPrefix}-group-title`)}
              title={groupTitleToolTip(tooltip)}
            >
              {groupTitle(label) as ReactNode}
            </span>
          ),
          children: (
            <ul
              className={classNames(`${selectPrefix}-group-list`)}
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {visibleItems.map(
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
          ),
        };
      })
      .filter(Boolean) as NonNullable<React.ComponentProps<typeof Collapse>['items']>;
  }, [filterItems, groupTitle, groupTitleToolTip, toolBox]);

  return (
    <div className={classNames(`${selectPrefix}-wrapper`)}>
      <Tabs
        classNames={{
          root: `${selectPrefix}-tabs`,
          header: `${selectPrefix}-tabs-header`,
          content: `${selectPrefix}-tabs-content`,
        }}
        items={[
          {
            key: 'ToolBox',
            label: '',
            icon: <CreditCardOutlined className={`${selectPrefix}-tabs-item-icon`} />,
            children: (
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
                  <Collapse
                    classNames={{
                      root: classNames(`${selectPrefix}-collapse`),
                      header: classNames(`${selectPrefix}-collapse-header`),
                      body: classNames(`${selectPrefix}-collapse-body`),
                    }}
                    ghost
                    expandIconPlacement="end"
                    activeKey={activeKeys}
                    items={collapseItems}
                    onChange={(keys) => {
                      const nextKeys = Array.isArray(keys) ? keys : [keys];
                      setActiveKeys(nextKeys.map(String));
                    }}
                  />
                </div>
              </div>
            ),
          },
          {
            key: 'Outline',
            label: '',
            icon: <ApartmentOutlined className={`${selectPrefix}-tabs-item-icon`} />,
            children: 'Content of Tab Pane 1',
          },
        ]}
      />
    </div>
  );
};

export default Toolbox;
