import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../../utils';

const { Search } = Input;

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
        {({ fieldProps, style, actions, lang }) => {
          const { placeholder, enterButton, ...restFieldProps } = fieldProps as SearchProps & {
            placeholder?: unknown;
            enterButton?: unknown;
          };

          return (
            <FieldWithTip tip={fieldProps.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <Search
                {...restFieldProps}
                {...actions}
                placeholder={resolveI18nText(placeholder as any, lang) as SearchProps['placeholder']}
                enterButton={
                  enterButton != null
                    ? (resolveI18nText(enterButton as any, lang) as SearchProps['enterButton'])
                    : undefined
                }
                style={style ?? {}}
                defaultValue={formItemProps?.initialValue as SearchProps['defaultValue']}
              />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}
