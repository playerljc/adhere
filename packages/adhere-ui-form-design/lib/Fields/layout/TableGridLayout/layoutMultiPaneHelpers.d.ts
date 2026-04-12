import type { DesignValue } from '../../../types';
/** 将单槽位（Flex / 旧版 DesignValue[] / 单个控件 / 空）规范为 FlexLayout DesignValue */
export declare function normalizePaneSlotToFlex(pane: DesignValue | DesignValue[] | undefined): DesignValue;
/**
 * 保证 children[insertIndex] 存在且为 Flex，并返回该 Flex（用于 Tabs/Steps/Collapse 拖入）
 */
export declare function ensureFlexPaneAtSlot(children: DesignValue[], insertIndex: number): DesignValue;
export declare function pushSourceIntoPaneSlot(children: DesignValue[], insertIndex: number, source: DesignValue): void;
