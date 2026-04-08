import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone, normalizeDesignChildren } from '../../../utils';

export function layoutReducerToRemove(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): DesignValue[] {
  const designValue = findDesignValueByIdToClone(action.targetId, state);

  if (designValue?.props?.children) {
    designValue.props.children.slice(
      designValue.props.children.indexOf(action.sourceDesignValue),
      1,
    );
  }

  return normalizeDesignChildren(designValue?.props?.children) ?? [];
}
