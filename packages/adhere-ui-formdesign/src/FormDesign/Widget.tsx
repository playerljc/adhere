import type { WidgetToolBoxType } from './WidgetToolBoxTypes';
import type { GroupType, Type } from './WidgetTypes';

/**
 * Widget
 * @description 小部件(在Area中的)
 */
class Widget {
  constructor(groupType: GroupType, type: Type, propertys: any) {
    this.groupType = groupType;
    this.type = type;
    this.propertys = propertys;
  }

  // 分组类型
  private readonly groupType: GroupType;

  // 小部件类型
  private readonly type: Type;

  // propertys(属性面板的所有属性)
  private readonly propertys: any;

  getGroupType() {
    return this.groupType;
  }

  getType() {
    return this.type;
  }

  getPropertys() {
    return this.propertys;
  }
}

export default Widget;
