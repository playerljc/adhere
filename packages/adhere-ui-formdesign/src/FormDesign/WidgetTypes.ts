/* 分组类型 */
export enum GroupType {
  LAYOUT = 'LAYOUT',
  CONTAINER = 'CONTAINER',
  BASE = 'BASE',
  ADVANCED = 'ADVANCED',
}

/*小部件类型*/
export enum Type {
  // 布局
  FLOW = 'FLOW',
  INLINE = 'INLINE',
  FLEX = 'FLEX',
  GRID = 'GRID',
  TABS = 'TABS',
  CARD = 'CARD',
  COLLAPSE = 'COLLAPSE',
  SPACE = 'SPACE',
  SPLIT = 'SPLIT',
  // 容器
  DYNAMIC_TABLE = 'DYNAMIC_TABLE',
  DYNAMIC_GROUP = 'DYNAMIC_GROUP',
  // 基本
  GROUP = 'GROUP',
  INPUT = 'INPUT',
  TEXT_AREA = 'TEXT_AREA',
  NUMBER = 'NUMBER',
}
