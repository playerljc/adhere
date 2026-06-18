import type { ReactNode } from 'react';
import type { DesignProps, DesignValue } from '../../types';
/**
 * parseFormProperty
 * @description 对designValue进行解析
 * @param {{
 *   value: DesignValue;
 *   items: DesignProps['items'];
 * }} params
 * @return ReactElement
 */
export declare function parseFormProperty({ value, items, }: {
    value: DesignValue;
    items: DesignProps['items'];
}): ReactNode;
