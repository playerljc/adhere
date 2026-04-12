import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone, normalizeDesignChildren } from '../../../utils';

/** 向单个布局节点（TableGrid / Flex / Card 等）的 props.children 追加子项 */
export function pushSourceIntoLayoutChildren(layoutNode: DesignValue, source: DesignValue): void {
  if (!layoutNode.props.children) {
    layoutNode.props.children = [];
  }
  layoutNode.props.children.push(source);
}

/**
 * layoutReducerToAdd
 * @param state
 * @param action
 */
export function layoutReducerToAdd(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): DesignValue[] {
  const tableGridLayoutDesignValue = findDesignValueByIdToClone(action.targetId, state);

  if (tableGridLayoutDesignValue) {
    pushSourceIntoLayoutChildren(tableGridLayoutDesignValue, action.sourceDesignValue);
  }

  return normalizeDesignChildren(tableGridLayoutDesignValue?.props?.children) ?? [];
}
