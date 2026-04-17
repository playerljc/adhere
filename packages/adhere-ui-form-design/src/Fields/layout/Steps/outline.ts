import type { DesignItem } from '../../../types';
import { resolveI18nText } from '../../../utils';

/**
 * Steps 布局在大纲视图中的扩展能力
 */
export const stepsLayoutOutline = {
  getSlotTitlePrefix: ({ containerValue, slotIndex, lang }) => {
    const fp: any = containerValue.props?.fieldProps ?? {};
    const stepItems = fp.stepItems ?? [];
    const title = stepItems[slotIndex]?.title;
    const text = resolveI18nText(title, lang);
    return typeof text === 'string' ? text : '';
  },
  getNextFieldPropsByActiveSlot: ({ containerValue, slotIndex }) => {
    const fp: any = containerValue.props?.fieldProps ?? {};
    return {
      ...fp,
      current: slotIndex,
    };
  },
} satisfies NonNullable<DesignItem['outline']>;
