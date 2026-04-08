import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone, normalizeDesignChildren } from '../../../utils';

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

  if (tableGridLayoutDesignValue?.props?.children) {
    tableGridLayoutDesignValue.props.children.push(action.sourceDesignValue);
  }

  return normalizeDesignChildren(tableGridLayoutDesignValue?.props?.children) ?? [];
}
