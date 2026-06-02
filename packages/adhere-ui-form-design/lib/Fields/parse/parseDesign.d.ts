import type { ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignContextType, DesignValue } from '../../types';
/**
 * parseDesign
 * @description 对designValue进行解析
 * @param {{
 *   terminal: Terminal;
 *   value: DesignValue;
 *   items: DesignProps['items'];
 *   onActiveFieldById: onActiveFieldById: (id: string) => void
 * }} params
 * @return ReactElement
 */
export declare function parseDesign({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow | ReactNode;
