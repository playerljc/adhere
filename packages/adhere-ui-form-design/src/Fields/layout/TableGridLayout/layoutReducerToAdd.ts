import { findDesignValueByIdToClone } from '../../../Design/DesignValueReducer';
import type { DesignValue } from '../../../types';

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

  return [...(tableGridLayoutDesignValue?.props?.children ?? [])];
}
