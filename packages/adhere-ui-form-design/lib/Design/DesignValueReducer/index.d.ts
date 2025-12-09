import type { Reducer } from 'react';
import type { DesignValue } from '../../types';
export type DesignValueState = DesignValue | undefined;
export type DesignValueAction = {
    type: 'reset';
    payload: DesignValue;
} | {
    type: 'noop';
};
/**
 * reducer
 * @description 对设计值进行修改
 */
declare const reducer: Reducer<DesignValueState, DesignValueAction>;
export default reducer;
