// import Intl from '@baifendian/adhere-util-intl';
import type { WidgetToolBoxType } from '../../types/WidgetToolBoxTypes';
import { GroupType, Type } from '../../types/WidgetTypes';
import WidgetToolBox from '../WidgetToolBox';

/**
 * Input
 * @description 单行文本框
 */
const Input: WidgetToolBoxType = {
  ...WidgetToolBox,
  ...{
    groupType: GroupType.BASE,
    type: Type.INPUT,
    name: '单行文本框',
  },
};

export default Input;
