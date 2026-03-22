import type { Reducer } from 'react';
import clone from 'rfdc';

import { REDUCER_ACTION_TYPE } from '../../constant';
import type { DesignValue } from '../../types';
import { deleteDesignValueByIdInChildren, findDesignValueById } from '../../utils';

export type DesignValueState = DesignValue | undefined;

export type DesignValueAction =
  | {
      type:
        | REDUCER_ACTION_TYPE.updateFormItemProps
        | REDUCER_ACTION_TYPE.updateFieldProps
        | REDUCER_ACTION_TYPE.updateStyleProps
        | REDUCER_ACTION_TYPE.updateActionsProps
        | REDUCER_ACTION_TYPE.updateFlexProps
        | REDUCER_ACTION_TYPE.updateChildrenProps;
      payload: {
        id: string;
        props:
          | DesignValue['props']['fieldProps']
          | DesignValue['props']['formItemProps']
          | DesignValue['props']['styleProps']
          | DesignValue['props']['actionsProps']
          | DesignValue['props']['flexProps']
          | DesignValue['props']['children'];
      };
    }
  | {
      type: REDUCER_ACTION_TYPE.addChildrenById;
      payload: {
        id: string;
        child: DesignValue;
      };
    }
  | {
      type: REDUCER_ACTION_TYPE.deleteChildrenById;
      payload: {
        id: string;
      };
    }
  | {
      type: 'noop';
    };

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
        designValue.props.formItemProps = action.payload
          .props as DesignValue['props']['formItemProps'];
      }

      return clone()(state);
    }

    // 修改控件本身的props
    case REDUCER_ACTION_TYPE.updateFieldProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.fieldProps = action.payload.props as DesignValue['props']['fieldProps'];
      }

      return clone()(state);
    }

    // 修改控件样式的props
    case REDUCER_ACTION_TYPE.updateStyleProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.styleProps = action.payload.props as DesignValue['props']['styleProps'];
      }

      return clone()(state);
    }

    // 修改控件Actions的props
    case REDUCER_ACTION_TYPE.updateActionsProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.actionsProps = action.payload
          .props as DesignValue['props']['actionsProps'];
      }

      return clone()(state);
    }

    // 修改控件Flex的props
    case REDUCER_ACTION_TYPE.updateFlexProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.flexProps = action.payload.props as DesignValue['props']['fieldProps'];
      }

      return clone()(state);
    }

    // 修改控件children
    case REDUCER_ACTION_TYPE.updateChildrenProps: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.props.children = action.payload.props as DesignValue['props']['children'];
      }

      return clone()(state);
    }

    // 在children中增加一个元素
    case REDUCER_ACTION_TYPE.addChildrenById: {
      if (!state) return state;

      const designValue = findDesignValueById(action.payload.id, state as DesignValue);

      if (designValue) {
        if (!designValue.props.children) {
          designValue.props.children = [];
        }

        designValue.props.children.push(action.payload.child);
      }

      return clone()(state);
    }

    // 删除指定id的children
    case REDUCER_ACTION_TYPE.deleteChildrenById: {
      if (!state) return state;

      deleteDesignValueByIdInChildren(action.payload.id, state as DesignValue);

      return clone()(state);
    }

    // 什么都不做
    default:
      return state;
  }
};

export default reducer;
