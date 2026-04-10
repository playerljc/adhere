import type { TabsProps } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Tabs } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../../../Design/Context';
import type { TabsTabSettingItem } from '../../../components/TabsTabSettingFormItem';
import type { DesignValue, I18nValue, StyleProps } from '../../../types';
import { resolveI18nText, styleCodeStringToCSSProperties } from '../../../utils';
import { parseDesign } from '../../parse';

export type { TabsTabSettingItem };

export type InternalTabsLayoutProps = TabsProps & {
  id?: string;
  className?: string;
  style?: CSSProperties;
  styleProps?: StyleProps;
  children?: DesignValue[];
  /** 标签页配置，与 children 按下标一一对应 */
  tabItems?: TabsTabSettingItem[];
  /** 已构建好的 antd Tabs items（优先级高于 children + tabItems） */
  centered?: boolean;
  defaultActiveKey?: string;
};

const selectorPrefix = 'adhere-ui-fd-tabs-layout';

/**
 * InternalTabs
 * @description 设计器中的 Tabs 容器，属性对齐 antd Tabs（见 https://ant.design/components/tabs-cn ）
 */
const InternalTabs: FC<InternalTabsLayoutProps> = ({
  id,
  children,
  className,
  tabItems = [],
  items: itemsFromRender,
  type = 'line',
  size = 'middle',
  tabPlacement = 'top',
  centered = false,
  defaultActiveKey,
  destroyOnHidden,
  tabBarGutter,
  hideAdd,
  animated,
  styleProps,
  ...rest
}) => {
  const context = useContext(DesignContext);
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const targetProps = useMemo(() => {
    const rootStyle = styleCodeStringToCSSProperties(styleProps?.styles ?? '');
    const headerStyle = styleCodeStringToCSSProperties(styleProps?.headerStyles ?? '');
    const bodyStyle = styleCodeStringToCSSProperties(styleProps?.bodyStyles ?? '');

    const computedItems: NonNullable<TabsProps['items']> = itemsFromRender
      ? (itemsFromRender as NonNullable<TabsProps['items']>)
      : (() => {
          const parsedChildren = (children?.map((_item) =>
            parseDesign({
              parentId: id,
              value: _item,
              context,
            }),
          ) ?? []) as React.ReactNode[];

          return tabItems.map((tab, index) => {
            const labelText =
              resolveI18nText(tab.label as I18nValue | string | undefined, lang) ||
              `Tab ${index + 1}`;

            return {
              key: tab.key,
              label: labelText,
              disabled: tab.disabled,
              forceRender: tab.forceRender,
              destroyOnHidden: tab.destroyOnHidden,
              closable: tab.closable,
              children: (parsedChildren[index] ?? null) as ReactNode,
            };
          });
        })();

    const firstKey = computedItems[0]?.key;
    const activeDefault = defaultActiveKey ?? firstKey;

    return {
      className: classNames(selectorPrefix, className),
      style: rootStyle,
      type,
      size,
      tabPlacement,
      centered,
      defaultActiveKey: activeDefault,
      destroyOnHidden,
      tabBarGutter,
      hideAdd,
      animated,
      items: computedItems,
      styles: {
        root: rootStyle,
        header: headerStyle,
        content: bodyStyle,
      },
      ...rest,
    };
  }, [
    centered,
    children,
    className,
    context,
    defaultActiveKey,
    destroyOnHidden,
    id,
    lang,
    itemsFromRender,
    tabBarGutter,
    hideAdd,
    animated,
    size,
    styleProps,
    tabItems,
    tabPlacement,
    type,
    rest,
  ]);

  return <Tabs {...targetProps} />;
};

export default InternalTabs;
