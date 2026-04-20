import type { ReactNode } from 'react';
import type { DesignProps, DesignValue } from '../../types';
/**
 * parseMainProperty
 * @description 对激活控件的designValue进行解析
 * @param {{
 *   value: DesignValue; 激活控件的designValue
 *   items: DesignProps['items']; 所有设计控件的集合
 * }} params
 * @return ReactElement 解析后的核心控件
 */
export declare function parseMainProperty({ value, items, }: {
    value: DesignValue;
    items: DesignProps['items'];
}): ReactNode;
