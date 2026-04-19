import classNames from 'classnames';
import React, { type CSSProperties, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../../../Design/Context';
import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import type { DesignValue } from '../../../types';
import { actionsCodeStringToEvents, isRootFieldId, resolveI18nText } from '../../../utils';
import { parseDesign } from '../../parse';
import InternalTabs, { type InternalTabsLayoutProps } from './InternalTabs';
import { resolveFieldPropsForDesignEditor } from './resolveFieldPropsForDesignEditor';

const selectorPrefix = 'adhere-ui-fd-layout';

function TabsLayoutDesign({ value }: { value: DesignValue }) {
  const { id, props } = value;
  const {
    children,
    styleProps,
    flexProps,
    actionsProps,
    fieldActionTypes,
    fieldProps: rawFieldProps,
  } = props;

  const designContext = useContext(DesignContext);
  const terminal = designContext.getTerminal();
  const fieldProps = useMemo(
    () => resolveFieldPropsForDesignEditor(props, terminal),
    [props, terminal],
  );

  const [activeKey, setActiveKey] = useState(
    (fieldProps as InternalTabsLayoutProps).defaultActiveKey,
  );
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const items = useMemo(() => {
    const _fieldProps = (fieldProps ?? {}) as InternalTabsLayoutProps;
    const tabItems = _fieldProps.tabItems ?? [];

    return tabItems.map((tab, index) => {
      return {
        key: tab.key,
        label: resolveI18nText(tab.label as any, lang) || `Tab ${index + 1}`,
        disabled: tab.disabled,
        forceRender: tab.forceRender,
        destroyOnHidden: tab.destroyOnHidden,
        closable: tab.closable,
        children: (parseDesign({
          parentId: id,
          value: children?.[index] as DesignValue,
          context: designContext,
        }) ?? null) as ReactNode,
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

  const actions = actionsCodeStringToEvents({
    actions: actionsProps?.actions ?? [],
    designContext,
  });

  useEffect(() => {
    setActiveKey((fieldProps as InternalTabsLayoutProps)?.defaultActiveKey);
  }, [(fieldProps as InternalTabsLayoutProps)?.defaultActiveKey]);

  return (
    <DesignFieldWrapper
      id={id}
      fieldActionTypes={fieldActionTypes}
      className={classNames(`${selectorPrefix}-design-field-wrapper`, {
        [`${selectorPrefix}-design-field-wrapper-fill`]: isRootFieldId(id),
        [`${selectorPrefix}-design-field-wrapper-no-border`]: isRootFieldId(id),
      })}
      style={targetFlexStyle}
    >
      <div className={`${selectorPrefix}-slots-container`} style={targetContainerStyle}>
        <InternalTabs
          {...(fieldProps as InternalTabsLayoutProps)}
          {...actions}
          activeKey={activeKey}
          id={id}
          styleProps={styleProps ?? {}}
          items={items}
          onChange={(key) => {
            if (actions?.onChange) {
              actions.onChange.call(designContext, key);
            }

            // 在这块动态修改 defaultActiveKey
            designContext.setFieldProps(id, {
              ...rawFieldProps,
              defaultActiveKey: key,
            });
          }}
        />
      </div>
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
