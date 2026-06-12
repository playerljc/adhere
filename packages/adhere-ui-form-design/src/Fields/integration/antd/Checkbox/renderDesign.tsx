import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, getDesignFormControlProps } from '../../../../utils';
import { resolveI18nText } from '../../../../utils';

/**
 * renderDesign - single Checkbox (no Group), Form uses valuePropName="checked"
 * @see https://ant.design/components/checkbox-cn#api
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
        {({ fieldProps, style, actions, lang, value, onChange, checked, targetKeys }) => {
          const { text, children, ...rest } = (fieldProps ?? {}) as CheckboxProps & {
            text?: React.ReactNode;
          };
          const label = resolveI18nText((children ?? text) as any, lang);

          return (
            <Checkbox
              {...rest}
              style={style ?? {}}
              {...actions}
              {...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys })}
            >
              {label}
            </Checkbox>
          );
        }}
      </ValueDesign>
    ),
  };
}
