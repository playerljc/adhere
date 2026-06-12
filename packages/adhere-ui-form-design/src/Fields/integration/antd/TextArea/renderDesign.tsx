import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import {
  computeLabelValueColSpan,
  findDesignValueById,
  getDesignFormControlProps,
  resolveI18nText,
} from '../../../../utils';

const { TextArea } = Input;

/**
 * renderDesign
 * @param props
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
        {({ fieldProps, style, actions, lang, value, onChange, checked, targetKeys }) => (
          <FieldWithTip tip={fieldProps.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
            <TextArea
              {...(fieldProps as TextAreaProps)}
              {...actions}
              {...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys })}
              placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as any}
              style={style ?? {}}
            />
          </FieldWithTip>
        )}
      </ValueDesign>
    ),
  };
}
