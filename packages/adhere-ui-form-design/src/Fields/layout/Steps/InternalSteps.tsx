import type { StepsSwiperItemProps, StepsSwiperProps } from '@baifendian/adhere-ui-anthoc/es/types';
import classNames from 'classnames';
import React, { useContext, useMemo, useRef } from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Steps } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { StepsStepSettingItem } from '../../../components/StepsStepSettingFormItem';
import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue, I18nValue, StyleProps } from '../../../types';
import { resolveI18nText, styleCodeStringToCSSProperties } from '../../../utils';
import { parseDesign } from '../../parse';

export type { StepsStepSettingItem };

export type InternalStepsLayoutProps = Omit<StepsSwiperProps, 'items'> & {
  id?: string;
  className?: string;
  style?: CSSProperties;
  styleProps?: StyleProps;
  children?: DesignValue[];
  /** 步骤配置，与 children 按下标一一对应 */
  stepItems?: StepsStepSettingItem[];
  /** 已构建好的 StepsSwiper items（优先级高于 children + stepItems） */
  items?: StepsSwiperItemProps[];
};

const selectorPrefix = `${SELECT_PREFIX}-steps-layout`;

/**
 * InternalSteps
 * @description 设计器中的 Steps 容器，属性对齐 StepsSwiper / antd Steps
 */
const InternalSteps: FC<InternalStepsLayoutProps> = ({
  id,
  children,
  className,
  style,
  stepItems = [],
  items: itemsFromRender,
  styleProps,
  ...rest
}) => {
  const context = useContext(DesignContext);
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const currentRef = useRef(rest.current ?? rest.initial ?? 0);
  currentRef.current = rest.current ?? rest.initial ?? 0;

  const targetProps = useMemo(() => {
    const rootStyle = styleCodeStringToCSSProperties(styleProps?.styles ?? '');
    const headerStyle = styleCodeStringToCSSProperties(styleProps?.headerStyles ?? '');
    const bodyStyle = styleCodeStringToCSSProperties(styleProps?.bodyStyles ?? '');

    const computedItems: StepsSwiperItemProps[] = itemsFromRender
      ? itemsFromRender
      : (() => {
          const parsedChildren = (children?.map((_item) =>
            parseDesign({
              parentId: id,
              value: _item,
              context,
            }),
          ) ?? []) as React.ReactNode[];
          const lastIndex = Math.max(0, stepItems.length - 1);

          return stepItems.map((step, index) => {
            const titleText =
              resolveI18nText(step.title as I18nValue | string | undefined, lang) ||
              `Step ${index + 1}`;
            const descriptionText = resolveI18nText(
              step.description as I18nValue | string | undefined,
              lang,
            );

            return {
              title: titleText,
              ...(descriptionText ? { description: descriptionText } : {}),
              ...(step.disabled !== undefined ? { disabled: step.disabled } : {}),
              children: (parsedChildren[index] ?? null) as ReactNode,
              onNext: async () => {
                const c = currentRef.current ?? 0;
                rest.onChange?.(Math.min(c + 1, lastIndex));
              },
              onPrev: async () => {
                const c = currentRef.current ?? 0;
                rest.onChange?.(Math.max(c - 1, 0));
              },
            } as StepsSwiperItemProps;
          });
        })();

    return {
      ...rest,
      className: classNames(selectorPrefix, className),
      style: { ...rootStyle, ...style },
      indicatorWrapperStyle: { ...(rest.indicatorWrapperStyle ?? {}), ...headerStyle },
      contentStyle: { ...(rest.contentStyle ?? {}), ...bodyStyle },
      items: computedItems,
    };
  }, [children, className, context, id, itemsFromRender, lang, rest, stepItems, style, styleProps]);

  return <Steps.StepsSwiper {...targetProps} />;
};

export default InternalSteps;
