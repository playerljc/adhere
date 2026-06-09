import merge from 'lodash.merge';

import Util from '@baifendian/adhere-util';

import { Delete } from '../../../../../components/DesignFieldActions/actions';
import { TYPE as FLEX_TYPE } from '../../../../../Fields/layout/FlexLayout/constant';
import type { DesignValue, DesignValueProps } from '../../../../../types';
import type { GetItemByType } from './createTemplateField';

/**
 * Card 内纵向 Flex 布局，用于堆叠多个 TableGridLayout
 */
export function createTemplateInnerFlex(
  getItemByType: GetItemByType,
  children: DesignValue[],
): DesignValue {
  const item = getItemByType(FLEX_TYPE);
  const defaultProps = (item?.defaultValue ?? {}) as DesignValueProps;

  return {
    id: Util.uuid(),
    type: FLEX_TYPE,
    props: merge({}, defaultProps, {
      fieldProps: merge({}, defaultProps.fieldProps, {
        direction: 'vertical',
        wrap: false,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 12,
      }),
      children,
      fieldActionTypes: [Delete.key],
    }) as DesignValueProps,
  };
}
