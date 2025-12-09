import type { Dispatch, ReactNode } from 'react';
import type { DesignValueAction } from '../../Design/DesignValueReducer';
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
export declare function parseStyleProperty({ value, items, dispatch, }: {
    value: DesignValue;
    items: DesignProps['items'];
    dispatch: Dispatch<DesignValueAction>;
}): ReactNode;
