// import Intl from '@baifendian/adhere-util-intl';
import type { WidgetToolBoxType } from '../../types/WidgetToolBoxTypes';
import { GroupType, WidgetType } from '../../types/WidgetTypes';
import WidgetToolBox from '../WidgetToolBox';

/**
 * TextArea
 * @description 多行文本
 */
const TextArea: WidgetToolBoxType = {
  ...WidgetToolBox,
  ...{
    groupType: GroupType.BASE,
    type: WidgetType.TEXT_AREA,
    name: '多行文本',
  },
};

export default TextArea;
