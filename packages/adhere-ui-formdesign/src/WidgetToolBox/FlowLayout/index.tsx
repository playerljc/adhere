// import Intl from '@baifendian/adhere-util-intl';
import type { WidgetToolBoxType } from '../../types/WidgetToolBoxTypes';
import { GroupType, Type } from '../../types/WidgetTypes';
import WidgetToolBox from '../WidgetToolBox';

/**
 * FlowLayout
 * @description 单行文本框
 */
const FlowLayout: WidgetToolBoxType = {
  ...WidgetToolBox,
  ...{
    groupType: GroupType.LAYOUT,
    type: Type.FLOW_LAYOUT,
    name: '流布局',
  },
};

export default FlowLayout;