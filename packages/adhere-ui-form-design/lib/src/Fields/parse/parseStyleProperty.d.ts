import type { ReactNode } from 'react';
import type { DesignProps, DesignValue } from '../../types';
/**
 * parseStyleProperty
 * @description 对designValue进行解析
 * @param {{
 *   value: DesignValue;
 *   items: DesignProps['items'];
 * }} params
 * @return ReactElement
 */
export declare function parseStyleProperty({ value, items, }: {
    value: DesignValue;
    items: DesignProps['items'];
}): ReactNode;
