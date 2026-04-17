import type { DesignItem } from '../../../types';
import { resolveI18nText } from '../../../utils';

/**
 * Tabs 布局在大纲视图中的扩展能力
 */
export const tabsLayoutOutline = {
  getSlotTitlePrefix: ({ containerValue, slotIndex, lang }) => {
    const fp: any = containerValue.props?.fieldProps ?? {};
    const tabItems = fp.tabItems ?? [];
    const label = tabItems[slotIndex]?.label;
    const text = resolveI18nText(label, lang);
    return typeof text === 'string' ? text : '';
  },
  getNextFieldPropsByActiveSlot: ({ containerValue, slotIndex }) => {
    const fp: any = containerValue.props?.fieldProps ?? {};
    const tabItems = fp.tabItems ?? [];
    const key = tabItems[slotIndex]?.key;
    if (key === undefined || key === null || key === '') return null;
    return {
      ...fp,
      defaultActiveKey: String(key),
    };
  },
} satisfies NonNullable<DesignItem['outline']>;
