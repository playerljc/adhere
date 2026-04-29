import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../components';
import type { DesignContextType, DesignValue } from '../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../utils';
import PhoneWithAreaCodeField from './PhoneWithAreaCodeField';

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
        {({ fieldProps, style, actions, lang }) => (
          <div style={style ?? {}} {...actions}>
            <PhoneWithAreaCodeField
              defaultCode={fieldProps.defaultCode}
              allowClear={fieldProps.allowClear}
              placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as any}
              value={formItemProps?.initialValue as any}
            />
          </div>
        )}
      </ValueDesign>
    ),
  };
}

