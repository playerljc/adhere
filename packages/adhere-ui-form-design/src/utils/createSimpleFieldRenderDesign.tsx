import React from 'react';
import type { ElementType, ReactNode } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../components';
import type { DesignContextType, DesignValue } from '../types';
import { computeLabelValueColSpan, findDesignValueById } from '../utils';

type FieldProps = Record<string, any>;

export function createSimpleFieldRenderDesign(Component: ElementType) {
  return function renderDesign({
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
      require: false,
      labelColSpan,
      valueColSpan,
      label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
      value: (
        <ValueDesign value={value}>
          {({ fieldProps, style, actions }) => {
            const { children, ...rest } = (fieldProps ?? {}) as FieldProps;

            return React.createElement(
              Component,
              {
                ...(rest as FieldProps),
                style: style ?? {},
                ...actions,
              },
              children as ReactNode,
            );
          }}
        </ValueDesign>
      ),
    };
  };
}

