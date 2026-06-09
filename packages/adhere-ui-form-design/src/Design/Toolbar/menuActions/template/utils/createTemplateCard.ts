import merge from 'lodash.merge';

import Util from '@baifendian/adhere-util';

import { Delete } from '../../../../../components/DesignFieldActions/actions';
import { TYPE as CARD_TYPE } from '../../../../../Fields/layout/Card/constant';
import type { DesignValue, DesignValueProps } from '../../../../../types';
import type { GetItemByType } from './createTemplateField';
import { i18nFromKey } from './i18nFromKey';

/**
 * Card 分组容器（仅可包含布局类子节点）
 */
export function createTemplateCard(
  getItemByType: GetItemByType,
  titleKey: string,
  children: DesignValue[],
): DesignValue {
  const item = getItemByType(CARD_TYPE);
  const defaultProps = (item?.defaultValue ?? {}) as DesignValueProps;

  return {
    id: Util.uuid(),
    type: CARD_TYPE,
    props: merge({}, defaultProps, {
      fieldProps: merge({}, defaultProps.fieldProps, {
        title: i18nFromKey(titleKey),
        variant: 'outlined',
        hoverable: false,
      }),
      children,
      fieldActionTypes: [Delete.key],
    }) as DesignValueProps,
  };
}
