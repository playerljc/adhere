import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone } from '../../../utils';

/**
 * layoutReducerToAdd
 * @param state
 * @param action
 */
export function layoutReducerToAdd(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): (DesignValue | DesignValue[])[] {
  const stepsLayoutDesignValue = findDesignValueByIdToClone(action.targetId, state);

  if (!stepsLayoutDesignValue) return [];

  if (!stepsLayoutDesignValue.props.children) {
    stepsLayoutDesignValue.props.children = [];
  }

  const { children } = stepsLayoutDesignValue.props;

  const fieldProps = (stepsLayoutDesignValue.props.fieldProps ?? {}) as {
    current?: number;
    initial?: number;
  };
  const currentIndex =
    typeof fieldProps.current === 'number'
      ? fieldProps.current
      : typeof fieldProps.initial === 'number'
        ? fieldProps.initial
        : 0;

  const insertIndex =
    children.length > 0 ? Math.min(Math.max(0, currentIndex), children.length - 1) : 0;

  const current = children[insertIndex];
  if (!Array.isArray(current)) {
    children[insertIndex] = [];
  }
  (children[insertIndex] as DesignValue[]).push(action.sourceDesignValue);

  return [...children];
}
