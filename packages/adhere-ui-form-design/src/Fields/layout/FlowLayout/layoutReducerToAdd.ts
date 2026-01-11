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
  const designValue = findDesignValueByIdToClone(action.targetId, state);

  if (designValue?.props?.children) {
    designValue.props.children.push(action.sourceDesignValue);
  }

  return [...(designValue?.props?.children ?? [])];
}
