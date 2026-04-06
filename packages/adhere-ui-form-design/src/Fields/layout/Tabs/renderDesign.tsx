import classNames from 'classnames';
import React, { type CSSProperties, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../../../Design/Context';
import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { isRootFieldId, resolveI18nText } from '../../../utils';
import { parseDesign } from '../../parse';
import InternalTabs, { type InternalTabsLayoutProps } from './InternalTabs';

const selectorPrefix = 'adhere-ui-fd-tabs-layout';

function TabsLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps, flexProps },
  } = value;

  const designContext = useContext(DesignContext);
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const items = useMemo(() => {
    const _fieldProps = (fieldProps ?? {}) as InternalTabsLayoutProps;
    const tabItems = _fieldProps.tabItems ?? [];

    // children 数组的每一项对应一个 TabPane 的“容器节点”，真正的内容在该节点的 props.children 中
    return tabItems.map((tab, index) => {
      const paneContainer = children?.[index];
      const paneChildrenRaw = Array.isArray(paneContainer)
        ? paneContainer
        : paneContainer?.props?.children ?? [];
      const paneParentId = Array.isArray(paneContainer) ? id : paneContainer?.id ?? id;

      const paneChildren = paneChildrenRaw.reduce<DesignValue[]>((acc, c) => {
        if (Array.isArray(c)) {
          acc.push(...c);
        } else if (c) {
          acc.push(c);
        }
        return acc;
      }, []);

      const paneNode = (
        <>
          {paneChildren.map((child) =>
            parseDesign({
              parentId: paneParentId,
              value: child,
              context: designContext,
            }),
          )}
        </>
      );

      return {
        key: tab.key,
        label: resolveI18nText(tab.label as any, lang) || `Tab ${index + 1}`,
        disabled: tab.disabled,
        forceRender: tab.forceRender,
        destroyOnHidden: tab.destroyOnHidden,
        closable: tab.closable,
        children: paneNode,
      };
    });
  }, [children, designContext, fieldProps, id, lang]);

  const targetFlexStyle = useMemo<CSSProperties>(() => {
    const { minSize, scroll, ..._flexProps } = flexProps ?? {};

    return {
      ..._flexProps,
      minWidth: minSize ? 0 : 'initial',
      minHeight: minSize ? 0 : 'initial',
    };
  }, [flexProps]);

  const targetContainerStyle = useMemo(() => {
    const { scroll } = flexProps ?? {};

    if (isRootFieldId(id)) {
      return {
        overflow: 'auto',
      };
    }

    return {
      overflow: scroll ? 'auto' : 'hidden',
    };
  }, [flexProps, id]);

  return (
    <DesignFieldWrapper
      id={id}
      className={classNames(`${selectorPrefix}-design-field-wrapper`, {
        [`${selectorPrefix}-design-field-wrapper-fill`]: isRootFieldId(id),
        [`${selectorPrefix}-design-field-wrapper-no-border`]: isRootFieldId(id),
      })}
      style={targetFlexStyle}
    >
      <DroppableContainer
        id={id}
        value={value}
        className={`${selectorPrefix}-droppable-container`}
        style={targetContainerStyle}
      >
        <InternalTabs
          {...(fieldProps as InternalTabsLayoutProps)}
          id={id}
          styleProps={styleProps ?? {}}
          items={items}
        />
      </DroppableContainer>
    </DesignFieldWrapper>
  );
}

/**
 * renderDesign
 * @param props
 */
export function renderDesign({ value }: { value: DesignValue }): ReactNode {
  return <TabsLayoutDesign value={value} />;
}
