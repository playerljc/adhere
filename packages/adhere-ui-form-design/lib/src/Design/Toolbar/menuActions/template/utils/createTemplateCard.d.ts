import type { DesignValue } from '../../../../../types';
import type { GetItemByType } from './createTemplateField';
/**
 * Card 分组容器（仅可包含布局类子节点）
 */
export declare function createTemplateCard(getItemByType: GetItemByType, titleKey: string, children: DesignValue[]): DesignValue;
