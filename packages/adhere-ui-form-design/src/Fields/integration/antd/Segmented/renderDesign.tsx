import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import { Segmented } from 'antd';
import React, { type ComponentProps } from 'react';

import { DesignPreviewFieldWithDataSource, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import type { DesignFieldDataSourceOption } from '../../../../utils';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

type SegmentedProps = ComponentProps<typeof Segmented>;

function toSegmentedOptions(
  options: DesignFieldDataSourceOption[],
): NonNullable<SegmentedProps['options']> {
  return options.map((o) => ({
    label: o.label,
    value: o.value,
  }));
}

/**
 * renderDesign �?Segmented，选项来自数据�?
 * @see https://ant.design/components/segmented-cn
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
        {({ fieldProps, style, actions }) => (
          <DesignPreviewFieldWithDataSource
            fieldProps={fieldProps}
            formItemProps={formItemProps}
            style={style ?? {}}
            actions={actions}
          >
            {({
              restFieldProps,
              options,
              style: fieldStyle,
              actions: fieldActions,
              previewValue,
            }) => (
              <Segmented
                {...(restFieldProps as SegmentedProps)}
                options={toSegmentedOptions(options)}
                style={{ width: '100%', ...(fieldStyle ?? {}) }}
                {...fieldActions}
                defaultValue={previewValue as SegmentedProps['defaultValue']}
              />
            )}
          </DesignPreviewFieldWithDataSource>
        )}
      </ValueDesign>
    ),
  };
}
