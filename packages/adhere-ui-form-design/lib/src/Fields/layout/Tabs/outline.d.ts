/**
 * Tabs 布局在大纲视图中的扩展能力
 */
export declare const tabsLayoutOutline: {
    getSlotTitlePrefix: ({ containerValue, slotIndex, lang }: {
        containerValue: import("../../../types").DesignValue;
        slotIndex: number;
        lang: string;
    }) => string;
    getNextFieldPropsByActiveSlot: ({ containerValue, slotIndex }: {
        containerValue: import("../../../types").DesignValue;
        slotIndex: number;
    }) => any;
};
