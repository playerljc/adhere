import { Radio } from 'antd';
import type { RadioProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import { SELECT_VALUE_KEY_NAME } from '../../../../constant';
import type { I18nValue } from '../../../../types';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';
import { resolveI18nText } from '../../../../utils';

function getI18nText(v: unknown): string | undefined {
  if (!v) return undefined;
  if (typeof v === 'string') return v;

  if (typeof v === 'object' && v !== null && SELECT_VALUE_KEY_NAME in (v as Record<string, any>)) {
    const i18n = v as I18nValue;
    const lang = i18n[SELECT_VALUE_KEY_NAME];
    return resolveI18nText(i18n, lang);
  }

  return undefined;
}

/**
 * renderDesign - single Radio (no Group, no Button), Form uses valuePropName="checked"
 * @see https://ant.design/components/radio-cn#api
 */
export function renderDesign({
  parentId,
  value,
  context,
}: {
  parentId?: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow {
  const {
    id,
    props: { formItemProps, styleProps },
  } = value;

  const { getDesignValue } = context;
  const designValue = getDesignValue() as DesignValue;
  const parent = findDesignValueById(parentId as string, designValue) as DesignValue;

  const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style, actions }) => {
          const { text, children, ...rest } = (fieldProps ?? {}) as RadioProps & {
            text?: React.ReactNode;
          };
          const label = getI18nText(children ?? text);

          return (
            <Radio
              {...rest}
              style={style ?? {}}
              {...actions}
              defaultChecked={(formItemProps as { initialValue?: boolean })?.initialValue}
            >
              {label}
            </Radio>
          );
        }}
      </ValueDesign>
    ),
  };
}
