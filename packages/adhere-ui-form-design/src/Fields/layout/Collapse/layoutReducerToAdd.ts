import type { DesignValue } from '../../../types';
import { findDesignValueByIdToClone } from '../../../utils';

type PanelKeyItem = { key?: string | number };
type FieldPropsLike = {
  accordion?: boolean;
  defaultActiveKey?: string | number | Array<string | number>;
  panelItems?: PanelKeyItem[];
};

function resolveInsertKey(fieldProps: FieldPropsLike): string | undefined {
  const panelItems: PanelKeyItem[] = Array.isArray(fieldProps.panelItems) ? fieldProps.panelItems : [];
  const dk = fieldProps.defaultActiveKey;

  if (fieldProps.accordion) {
    const k = Array.isArray(dk) ? dk[0] : dk;
    return k != null && String(k).length ? String(k) : undefined;
  }

  if (Array.isArray(dk) && dk.length > 0) {
    const last = dk[dk.length - 1];
    return last != null ? String(last) : undefined;
  }

  if (dk != null && !Array.isArray(dk)) {
    return String(dk);
  }

  if (panelItems[0]?.key != null) {
    return String(panelItems[0].key);
  }

  return undefined;
}

/**
 * layoutReducerToAdd
 * @description 与 Tabs 一致：children 与 panelItems 按下标对应；插入到当前 defaultActiveKey 对应面板（非手风琴取最近展开的 key）
 */
export function layoutReducerToAdd(
  state: DesignValue,
  action: { sourceDesignValue: DesignValue; targetId: string },
): (DesignValue | DesignValue[])[] {
  const collapseLayoutDesignValue = findDesignValueByIdToClone(action.targetId, state);

  if (!collapseLayoutDesignValue) return [];

  if (!collapseLayoutDesignValue.props.children) {
    collapseLayoutDesignValue.props.children = [];
  }

  const { children } = collapseLayoutDesignValue.props;

  const fieldProps = (collapseLayoutDesignValue.props.fieldProps ?? {}) as FieldPropsLike;
  const panelItems: PanelKeyItem[] = Array.isArray(fieldProps.panelItems) ? fieldProps.panelItems : [];

  const targetKey = resolveInsertKey(fieldProps);
  const activeIndex =
    targetKey != null
      ? panelItems.findIndex((p) => String(p.key ?? '') === targetKey)
      : -1;

  const insertIndex =
    activeIndex > -1 ? Math.min(activeIndex, children.length) : children.length;

  const current = children[insertIndex];
  if (!Array.isArray(current)) {
    children[insertIndex] = [];
  }
  (children[insertIndex] as DesignValue[]).push(action.sourceDesignValue);

  return [...children];
}
