import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone } from '../../../utils';

/**
 * layoutReducerToRemove
 * @param state
 * @param action
 *
 * Tabs children 为二维数组：每个 tab 对应一个 children 数组
 */
export function layoutReducerToRemove(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): (DesignValue | DesignValue[])[] {
  const tabsLayoutDesignValue = findDesignValueByIdToClone(action.targetId, state);
  if (!tabsLayoutDesignValue?.props?.children?.length) return [];

  const { children } = tabsLayoutDesignValue.props;

  for (let i = 0; i < children.length; i++) {
    const pane = children[i];
    if (!Array.isArray(pane)) continue;
    const idx = pane.findIndex((c) => c.id === action.sourceDesignValue.id);
    if (idx > -1) {
      pane.splice(idx, 1);
      break;
    }
  }

  return [...children];
}
