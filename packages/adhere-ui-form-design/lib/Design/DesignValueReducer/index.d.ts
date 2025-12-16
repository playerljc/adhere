import type { Reducer } from 'react';
import { REDUCER_ACTION_TYPE } from '../../constant';
import type { DesignValue } from '../../types';
export type DesignValueState = DesignValue | undefined;
export type DesignValueAction = {
    type: REDUCER_ACTION_TYPE;
    payload: {
        id: string;
        props: DesignValue['props']['fieldProps'] | DesignValue['props']['formItemProps'] | DesignValue['props']['styleProps'] | DesignValue['props']['actionsProps'] | DesignValue['props']['children'];
    };
} | {
    type: 'noop';
};
/**
 * findDesignValueById
 * @description 递归查找设计值中指定id的设计值
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {DesignValue | undefined}
 */
export declare function findDesignValueById(id: string, designValue: DesignValue): DesignValue | undefined;
/**
 * findDesignValueByIdToClone
 * @description 递归查找设计值中指定id的设计值的clone版本
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {DesignValue | undefined}
 */
export declare function findDesignValueByIdToClone(id: string, designValue: DesignValue): DesignValue | undefined;
/**
 * reducer
 * @description 对设计值进行修改
 */
declare const reducer: Reducer<DesignValueState, DesignValueAction>;
export default reducer;
