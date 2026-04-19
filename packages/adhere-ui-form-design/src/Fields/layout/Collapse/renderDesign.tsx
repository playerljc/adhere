import classNames from 'classnames';
import React, { type CSSProperties, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../../../Design/Context';
import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import type { DesignValue } from '../../../types';
import { actionsCodeStringToEvents, isRootFieldId, resolveI18nText } from '../../../utils';
import { parseDesign } from '../../parse';
import InternalCollapse, { type InternalCollapseLayoutProps } from './InternalCollapse';
import { resolveFieldPropsForDesignEditor } from './resolveFieldPropsForDesignEditor';

const selectorPrefix = 'adhere-ui-fd-layout';

type ActiveKeyState = string | number | Array<string | number> | undefined;

function normalizeActiveKeyForCollapse(
  v: ActiveKeyState,
  accordion: boolean | undefined,
): ActiveKeyState {
  if (v === undefined || v === null) return undefined;
  if (accordion) {
    return Array.isArray(v) ? v[0] ?? undefined : v;
  }
  if (Array.isArray(v)) return v;
  return [v];
}

function CollapseLayoutDesign({ value }: { value: DesignValue }) {
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

  const fp = (fieldProps ?? {}) as InternalCollapseLayoutProps;
  const accordion = fp.accordion ?? false;

  const [activeKey, setActiveKey] = useState<ActiveKeyState>(() =>
    normalizeActiveKeyForCollapse(fp.defaultActiveKey as ActiveKeyState, accordion),
  );

  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const items = useMemo(() => {
    const _fieldProps = (fieldProps ?? {}) as InternalCollapseLayoutProps;
    const panelItems = _fieldProps.panelItems ?? [];

    return panelItems.map((panel, index) => {
      return {
        key: String(panel.key),
        label: resolveI18nText(panel.label as any, lang) || `Panel ${index + 1}`,
        forceRender: panel.forceRender,
        destroyOnHidden: panel.destroyOnHidden,
        showArrow: panel.showArrow,
        collapsible: panel.collapsible,
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
    const next = (fieldProps as InternalCollapseLayoutProps)?.defaultActiveKey as ActiveKeyState;
    setActiveKey(normalizeActiveKeyForCollapse(next, accordion));
  }, [(fieldProps as InternalCollapseLayoutProps)?.defaultActiveKey, accordion]);

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
        <InternalCollapse
          {...(fieldProps as InternalCollapseLayoutProps)}
          {...actions}
          activeKey={activeKey as InternalCollapseLayoutProps['activeKey']}
          id={id}
          styleProps={styleProps ?? {}}
          items={items}
          onChange={(keys) => {
            if (actions?.onChange) {
              actions.onChange.call(designContext, keys);
            }

            const _fp = fieldProps as InternalCollapseLayoutProps;
            const isAccordion = _fp.accordion ?? false;
            const nextDefault: ActiveKeyState = isAccordion
              ? keys.length
                ? keys[0]
                : undefined
              : keys;

            designContext.setFieldProps(id, {
              ...rawFieldProps,
              defaultActiveKey: nextDefault,
            });
            setActiveKey(normalizeActiveKeyForCollapse(nextDefault, isAccordion));
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
  return <CollapseLayoutDesign value={value} />;
}
