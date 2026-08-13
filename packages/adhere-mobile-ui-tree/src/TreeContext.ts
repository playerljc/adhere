import React from 'react';

import { DEFAULT_CHECKSTRICTLY, DEFAULT_ROW_GAP, DEFAULT_SIZE } from './Constant';
import type { TreeContext } from './types';

// 提供安全的默认值，避免TreeNode脱离Provider使用时调用undefined直接崩溃
export default React.createContext<TreeContext>({
  expandedKeys: () => [],
  selectedKeys: () => [],
  checkedKeys: () => [],
  loadedKeys: () => [],
  treeData: () => [],
  size: () => DEFAULT_SIZE,
  checkStrictly: () => DEFAULT_CHECKSTRICTLY,
  rowGap: () => DEFAULT_ROW_GAP,
  multiple: () => false,
  checkable: () => false,
  checkboxWidth: () => '',
  checkboxGap: () => '',
  titleGap: () => '',
  iconGap: () => '',
  indent: () => '',
  setExpandedKeys: () => {},
  setSelectedKeys: () => {},
  setCheckedKeys: () => {},
  setLoadedKeys: () => {},
});
