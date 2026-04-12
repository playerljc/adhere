import Util from '@baifendian/adhere-util';

import type { DesignValue } from '../../../types';
import { TYPE } from './constant';

/** 与 Tabs/Steps/Collapse 的 createDefaultDesignValueProps 中每面板占位一致 */
export function createFlexLayoutDesignValue(): DesignValue {
  return {
    id: Util.uuid(),
    type: TYPE,
    props: {
      fieldProps: {
        direction: 'vertical',
        wrap: false,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'normal',
        gap: 8,
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: [],
    },
  };
}
