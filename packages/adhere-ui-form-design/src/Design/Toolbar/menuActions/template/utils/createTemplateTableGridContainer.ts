import merge from 'lodash.merge';

import Util from '@baifendian/adhere-util';

import { Delete } from '../../../../../components/DesignFieldActions/actions';
import { TYPE as TABLE_GRID_TYPE } from '../../../../../Fields/layout/TableGridLayout/constant';
import type { DesignValue, DesignValueProps } from '../../../../../types';
import type { GetItemByType } from './createTemplateField';

/**
 * 将表单字段包裹在 TableGridLayout 中。
 * FlexLayout 只能直接放置布局/无表单控件；Input/Select 等返回 DataItemRow 的字段必须经 TableGridLayout 渲染。
 */
export function createTemplateTableGridContainer(
  getItemByType: GetItemByType,
  fields: DesignValue[],
): DesignValue {
  const item = getItemByType(TABLE_GRID_TYPE);
  const defaultProps = (item?.defaultValue ?? {}) as DesignValueProps;

  return {
    id: Util.uuid(),
    type: TABLE_GRID_TYPE,
    props: merge({}, defaultProps, {
      children: fields,
      fieldActionTypes: [Delete.key],
    }) as DesignValueProps,
  };
}

/** 单行 TableGridLayout，适用于 TextArea 等需独占一行的控件 */
export function createTemplateTableGridRow(
  getItemByType: GetItemByType,
  field: DesignValue,
): DesignValue {
  return createTemplateTableGridContainer(getItemByType, [field]);
}
