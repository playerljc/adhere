import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone } from '../../../utils';

/**
 * layoutReducerToRemove
 * @param state
 * @param action
 *
 * Steps children 为二维数组：每个步骤对应一个 children 数组
 */
export function layoutReducerToRemove(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): (DesignValue | DesignValue[])[] {
  const stepsLayoutDesignValue = findDesignValueByIdToClone(action.targetId, state);
  if (!stepsLayoutDesignValue?.props?.children?.length) return [];

  const { children } = stepsLayoutDesignValue.props;

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
