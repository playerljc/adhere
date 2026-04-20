import type { CollapseProps } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Collapse } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import type { CollapsePanelSettingItem } from '../../../components/CollapsePanelSettingFormItem';
import type { DesignValue, I18nValue, StyleProps } from '../../../types';
import { resolveI18nText, styleCodeStringToCSSProperties } from '../../../utils';
import { parseDesign } from '../../parse';

export type { CollapsePanelSettingItem };

export type InternalCollapseLayoutProps = CollapseProps & {
  id?: string;
  className?: string;
  style?: CSSProperties;
  styleProps?: StyleProps;
  children?: DesignValue[];
  /** 面板配置，与 children 按下标一一对应 */
  panelItems?: CollapsePanelSettingItem[];
  /** 已构建好的 antd Collapse items（优先级高于 children + panelItems） */
  items?: CollapseProps['items'];
};

const selectorPrefix = `${SELECT_PREFIX}-collapse-layout`;

/**
 * InternalCollapse
 * @description 设计器中的 Collapse 容器，属性对齐 antd Collapse（见 https://ant.design/components/collapse-cn ）
 */
const InternalCollapse: FC<InternalCollapseLayoutProps> = ({
  id,
  children,
  className,
  panelItems = [],
  items: itemsFromRender,
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

    const computedItems: NonNullable<CollapseProps['items']> = itemsFromRender
      ? (itemsFromRender as NonNullable<CollapseProps['items']>)
      : (() => {
          const parsedChildren = (children?.map((_item) =>
            parseDesign({
              parentId: id,
              value: _item,
              context,
            }),
          ) ?? []) as React.ReactNode[];

          return panelItems.map((panel, index) => {
            const labelText =
              resolveI18nText(panel.label as I18nValue | string | undefined, lang) ||
              `Panel ${index + 1}`;

            return {
              key: String(panel.key),
              label: labelText,
              forceRender: panel.forceRender,
              destroyOnHidden: panel.destroyOnHidden,
              showArrow: panel.showArrow,
              collapsible: panel.collapsible,
              children: (parsedChildren[index] ?? null) as ReactNode,
            };
          });
        })();

    return {
      className: classNames(selectorPrefix, className),
      style: rootStyle,
      items: computedItems,
      styles: {
        root: rootStyle,
        header: headerStyle,
        body: bodyStyle,
      },
      ...rest,
    };
  }, [children, className, context, id, itemsFromRender, lang, panelItems, rest, styleProps]);

  return <Collapse {...targetProps} />;
};

export default InternalCollapse;
