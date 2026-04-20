import classNames from 'classnames';
import React, { type CSSProperties, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import type { StepsSwiperItemProps } from '@baifendian/adhere-ui-anthoc/es/types';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import type { DesignValue, I18nValue } from '../../../types';
import { actionsCodeStringToEvents, isRootFieldId, resolveI18nText } from '../../../utils';
import { parseDesign } from '../../parse';
import InternalSteps, { type InternalStepsLayoutProps } from './InternalSteps';
import { resolveFieldPropsForDesignEditor } from './resolveFieldPropsForDesignEditor';

const selectorPrefix = `${SELECT_PREFIX}-layout`;

function StepsLayoutDesign({ value }: { value: DesignValue }) {
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

  const fp = (fieldProps ?? {}) as InternalStepsLayoutProps;
  const initial = fp.initial ?? 0;
  const [current, setCurrent] = useState(fp.current ?? initial);

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
      const titleText =
        resolveI18nText(step.title as I18nValue | string | undefined, lang) || `Step ${index + 1}`;
      const descriptionText = resolveI18nText(
        step.description as I18nValue | string | undefined,
        lang,
      );

      const lastIndex = Math.max(0, stepItems.length - 1);

      return {
        title: titleText,
        ...(descriptionText ? { description: descriptionText } : {}),
        disabled: step.disabled,
        children: parseDesign({
          parentId: id,
          value: children?.[index] as DesignValue,
          context: designContext,
        }),
        onNext: async () => {
          setCurrent((c) => {
            const n = Math.min(c + 1, lastIndex);
            designContext.setFieldProps(id, {
              ...rawFieldProps,
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
              ...rawFieldProps,
              current: n,
            });
            actions?.onChange?.(n);
            return n;
          });
        },
      } as StepsSwiperItemProps;
    });
  }, [actions, children, designContext, fieldProps, id, lang, rawFieldProps]);

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
      fieldActionTypes={fieldActionTypes}
      className={classNames(`${selectorPrefix}-design-field-wrapper`, {
        [`${selectorPrefix}-design-field-wrapper-fill`]: isRootFieldId(id),
        [`${selectorPrefix}-design-field-wrapper-no-border`]: isRootFieldId(id),
      })}
      style={targetFlexStyle}
    >
      <div className={`${selectorPrefix}-slots-container`} style={targetContainerStyle}>
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
              ...rawFieldProps,
              current: next,
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
  return <StepsLayoutDesign value={value} />;
}
