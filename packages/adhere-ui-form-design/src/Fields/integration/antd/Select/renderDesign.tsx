import { Select, type SelectProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import {
  DesignPreviewFieldWithDataSource,
  FieldWithTip,
  LabelDesign,
  ValueDesign,
} from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import {
  computeLabelValueColSpan,
  findDesignValueById,
  getDesignFormControlProps,
  resolveI18nText,
} from '../../../../utils';

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
        {({ fieldProps, style, actions, lang, value, onChange, checked, targetKeys }) => (
          <FieldWithTip tip={fieldProps.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
            <DesignPreviewFieldWithDataSource
              fieldProps={fieldProps}
              formItemProps={formItemProps}
              style={style ?? {}}
              actions={actions}
              value={value}
              onChange={onChange}
            >
              {({
                restFieldProps,
                options,
                loading,
                style: fieldStyle,
                actions: fieldActions,
                previewValue,
              }) => (
                <Select
                  {...(restFieldProps as SelectProps)}
                  placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as any}
                  loading={loading || undefined}
                  options={options}
                  style={fieldStyle}
                  {...fieldActions}
                  {...getDesignFormControlProps(formItemProps, {
                    value,
                    onChange,
                    checked,
                    targetKeys,
                    previewValue,
                  })}
                />
              )}
            </DesignPreviewFieldWithDataSource>
          </FieldWithTip>
        )}
      </ValueDesign>
    ),
  };
}
