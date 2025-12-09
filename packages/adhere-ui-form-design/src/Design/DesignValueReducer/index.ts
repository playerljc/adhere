import type { Reducer } from 'react';

import { REDUCER_ACTION_TYPE } from '../../constant';
import type { DesignValue } from '../../types';

export type DesignValueState = DesignValue | undefined;

export type DesignValueAction =
  | {
      type: REDUCER_ACTION_TYPE;
      payload: {
        id: string;
        props:
          | DesignValue['props']['fieldProps']
          | DesignValue['props']['formItemProps']
          | DesignValue['props']['styleProps'];
      };
    }
  | {
      type: 'noop';
    };

/**
 * findDesignValueById
 * @description 递归查找设计值中指定id的设计值
 * @param {string} id
 * @param {DesignValue} designValue
 * @return {DesignValue | undefined}
 */
function findDesignValueById(id: string, designValue: DesignValue): DesignValue | undefined {
  if (designValue.id === id) {
    return designValue;
  }

  if (designValue.props.children) {
    for (let i = 0; i < designValue.props.children.length; i++) {
      const child = designValue.props.children[i];
      const result = findDesignValueById(id, child);
      if (result) {
        return result;
      }
    }
  }
}
/**
 * reducer
 * @description 对设计值进行修改
 */
const reducer: Reducer<DesignValueState, DesignValueAction> = (state, action) => {
  switch (action.type) {
    // 修改FormItem的props
    case REDUCER_ACTION_TYPE.updateFormItemProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.formItemProps = {
          ...designValue.props.formItemProps,
          ...action.payload.props,
        };
      }

      return state;
    }

    // 修改控件本身的props
    case REDUCER_ACTION_TYPE.updateFieldProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.fieldProps = {
          ...designValue.props.fieldProps,
          ...action.payload.props,
        };
      }

      return state;
    }

    // 修改控件样式的props
    case REDUCER_ACTION_TYPE.updateStyleProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.styleProps = {
          ...designValue.props.styleProps,
          ...action.payload.props,
        };
      }

      return state;
    }

    // 什么都不做
    default:
      return state;
  }
};

export default reducer;
