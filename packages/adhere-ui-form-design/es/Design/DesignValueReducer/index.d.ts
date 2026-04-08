import type { Reducer } from 'react';
import { REDUCER_ACTION_TYPE } from '../../constant';
import type { DataSourceConfig, DesignValue } from '../../types';
export type DesignValueState = DesignValue | undefined;
export type DesignValueAction = {
    type: REDUCER_ACTION_TYPE.updateFormItemProps | REDUCER_ACTION_TYPE.updateFieldProps | REDUCER_ACTION_TYPE.updateStyleProps | REDUCER_ACTION_TYPE.updateActionsProps | REDUCER_ACTION_TYPE.updateFlexProps | REDUCER_ACTION_TYPE.updateChildrenProps;
    payload: {
        id: string;
        props: DesignValue['props']['fieldProps'] | DesignValue['props']['formItemProps'] | DesignValue['props']['styleProps'] | DesignValue['props']['actionsProps'] | DesignValue['props']['flexProps'] | DesignValue['props']['children'];
    };
} | {
    type: REDUCER_ACTION_TYPE.addChildrenById;
    payload: {
        id: string;
        child: DesignValue;
    };
} | {
    type: REDUCER_ACTION_TYPE.deleteChildrenById;
    payload: {
        id: string;
    };
} | {
    type: REDUCER_ACTION_TYPE.updateDataSourceConfig;
    payload: {
        id: string;
        dataSourceConfig: DataSourceConfig;
    };
} | {
    type: 'noop';
};
/**
 * reducer
 * @description 对设计值进行修改
 */
declare const reducer: Reducer<DesignValueState, DesignValueAction>;
export default reducer;
