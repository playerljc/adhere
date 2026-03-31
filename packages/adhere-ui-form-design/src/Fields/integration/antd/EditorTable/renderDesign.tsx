import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Util from '@baifendian/adhere-util';

import {
  EditableRowControlTable,
  EditableRowControlTableSuperTable,
} from '../../../../components/SearchEditorTableFormItem';
import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

class SubTable extends EditableRowControlTableSuperTable {
  onAdd() {
    return super.onAdd({
      id: Util.uuid(),
      name: '',
      createTime: undefined,
      no: '',
      cardType: '',
    });
  }

  getColumns() {
    const columns = super.getColumns();

    return [...columns];
  }
}

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
        {({ fieldProps, style, actions }) => (
          /*<Input
            {...(fieldProps as InputProps)}
            style={style ?? {}}
            {...actions}
            defaultValue={formItemProps?.initialValue as InputProps['defaultValue']}
          />*/
          <EditableRowControlTable subClass={SubTable} />
        )}
      </ValueDesign>
    ),
  };
}
