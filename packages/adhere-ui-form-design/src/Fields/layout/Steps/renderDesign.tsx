import classNames from 'classnames';
import React, { type CSSProperties, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import type { StepsSwiperItemProps } from '@baifendian/adhere-ui-anthoc/es/types';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../../../Design/Context';
import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue, I18nValue } from '../../../types';
import {
  actionsCodeStringToEvents,
  isReactNode,
  isRootFieldId,
  resolveI18nText,
} from '../../../utils';
import { parseDesign } from '../../parse';
import InternalSteps, { type InternalStepsLayoutProps } from './InternalSteps';

const selectorPrefix = 'adhere-ui-fd-steps-layout';

function StepsLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps, flexProps, actionsProps },
  } = value;

  const fp = (fieldProps ?? {}) as InternalStepsLayoutProps;
  const initial = fp.initial ?? 0;
  const [current, setCurrent] = useState(fp.current ?? initial);

  const designContext = useContext(DesignContext);
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const actions = actionsCodeStringToEvents({
    actions: actionsProps?.actions ?? [],
    designContext,
  });

  const items = useMemo(() => {
    const _fieldProps = (fieldProps ?? {}) as InternalStepsLayoutProps;
    const stepItems = _fieldProps.stepItems ?? [];

    return stepItems.map((step, index) => {
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
          {paneChildren.map((child) => {
            const rendered = parseDesign({
              parentId: paneParentId,
              value: child,
              context: designContext,
            });

            return isReactNode(rendered) ? rendered : null;
          })}
        </>
      );

      const titleText =
        resolveI18nText(step.title as I18nValue | string | undefined, lang) ||
        `Step ${index + 1}`;
      const descriptionText = resolveI18nText(
        step.description as I18nValue | string | undefined,
        lang,
      );

      const lastIndex = Math.max(0, stepItems.length - 1);

      return {
        title: titleText,
        ...(descriptionText ? { description: descriptionText } : {}),
        disabled: step.disabled,
        children: paneNode,
        onNext: async () => {
          setCurrent((c) => {
            const n = Math.min(c + 1, lastIndex);
            designContext.setFieldProps(id, {
              ...fieldProps,
              current: n,
            });
            actions?.onChange?.(n);
            return n;
          });
        },
        onPrev: async () => {
          setCurrent((c) => {
            const n = Math.max(c - 1, 0);
            designContext.setFieldProps(id, {
              ...fieldProps,
              current: n,
            });
            actions?.onChange?.(n);
            return n;
          });
        },
      } as StepsSwiperItemProps;
    });
  }, [actions, children, designContext, fieldProps, id, lang]);

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

  useEffect(() => {
    setCurrent((fieldProps as InternalStepsLayoutProps)?.current ?? initial);
  }, [(fieldProps as InternalStepsLayoutProps)?.current, initial]);

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
        <InternalSteps
          {...(fieldProps as InternalStepsLayoutProps)}
          {...actions}
          current={current}
          id={id}
          styleProps={styleProps ?? {}}
          items={items}
          onChange={(next) => {
            if (actions?.onChange) {
              actions.onChange(next);
            }

            setCurrent(next);
            designContext.setFieldProps(id, {
              ...fieldProps,
              current: next,
            });
          }}
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
  return <StepsLayoutDesign value={value} />;
}
