import type { DesignItem } from '../../../types';
import { resolveI18nText } from '../../../utils';

/**
 * Collapse 布局在大纲视图中的扩展能力
 */
export const collapseLayoutOutline = {
  getSlotTitlePrefix: ({ containerValue, slotIndex, lang }) => {
    const fp: any = containerValue.props?.fieldProps ?? {};
    const panelItems = fp.panelItems ?? [];
    const label = panelItems[slotIndex]?.label;
    const text = resolveI18nText(label, lang);
    return typeof text === 'string' ? text : '';
  },
  getNextFieldPropsByActiveSlot: ({ containerValue, slotIndex }) => {
    const fp: any = containerValue.props?.fieldProps ?? {};
    const panelItems = fp.panelItems ?? [];
    const accordion = fp.accordion ?? false;
    const key = panelItems[slotIndex]?.key;
    if (key === undefined || key === null || key === '') return null;
    const normalizedKey = String(key);
    const desiredDefaultActiveKey = accordion ? normalizedKey : [normalizedKey];
    return {
      ...fp,
      defaultActiveKey: desiredDefaultActiveKey,
    };
  },
} satisfies NonNullable<DesignItem['outline']>;
