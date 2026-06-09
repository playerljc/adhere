import { Select, type SelectProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { DesignPreviewFieldWithDataSource, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../../utils';

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

  const root = getDesignValue();
  const parent = parentId && root ? findDesignValueById(parentId, root) : undefined;

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
          <DesignPreviewFieldWithDataSource
            fieldProps={fieldProps}
            formItemProps={formItemProps}
            style={style ?? {}}
            actions={actions}
          >
            {({
              restFieldProps,
              options,
              loading,
              style: fieldStyle,
              actions: fieldActions,
              value,
              onChange,
            }) => (
              <Select
                {...(restFieldProps as SelectProps)}
                placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as any}
                loading={loading || undefined}
                options={options}
                style={fieldStyle}
                {...fieldActions}
                value={value as SelectProps['value']}
                onChange={onChange}
              />
            )}
          </DesignPreviewFieldWithDataSource>
        )}
      </ValueDesign>
    ),
  };
}
