import type { ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignProps, DesignValue, Terminal } from '../../types';
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
export declare function parseDesign({ terminal, value, items, onActiveFieldById, activeFieldId, }: {
    terminal: Terminal;
    value: DesignValue;
    items: DesignProps['items'];
    activeFieldId: string | null | undefined;
    onActiveFieldById: (id: string) => void;
}): DataItemRow | ReactNode;
