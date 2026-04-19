import type { Reducer } from 'react';
import clone from 'rfdc';

import { REDUCER_ACTION_TYPE } from '../../constant';
import type { DataSourceConfig, DesignValue } from '../../types';
import {
  deleteDesignValueByIdInChildren,
  findDesignValueById,
  findParentWithChildIndex,
  flattenDesignChildren,
} from '../../utils';

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
      type: REDUCER_ACTION_TYPE.updateDataSourceConfig;
      payload: {
        id: string;
        dataSourceConfig: DataSourceConfig;
      };
    }
  | {
      type: REDUCER_ACTION_TYPE.swapNodes;
      payload: {
        idA: string;
        idB: string;
      };
    }
  | {
      type: REDUCER_ACTION_TYPE.replaceDesignValue;
      payload: {
        designValue: DesignValue;
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

    case REDUCER_ACTION_TYPE.updateDataSourceConfig: {
      const designValue = findDesignValueById(action.payload.id, state as DesignValue);
      if (designValue) {
        designValue.dataSourceConfig = action.payload.dataSourceConfig;
      }

      return clone()(state);
    }

    case REDUCER_ACTION_TYPE.swapNodes: {
      if (!state) return state;

      const { idA, idB } = action.payload;
      if (!idA || !idB || idA === idB) {
        return clone()(state);
      }

      const root = state as DesignValue;
      const locA = findParentWithChildIndex(root, idA);
      const locB = findParentWithChildIndex(root, idB);

      if (!locA || !locB) {
        return clone()(state);
      }

      const { parent: parentA, index: indexA } = locA;
      const { parent: parentB, index: indexB } = locB;

      // 同父：必须在「同一份」扁平数组上交换下标；若用两份 flatten 副本交叉赋值，会把同一引用写进错误槽位（例如出现两个 B）。
      if (parentA === parentB) {
        const flat = flattenDesignChildren(parentA.props.children);
        if (!flat[indexA] || !flat[indexB] || flat[indexA].id !== idA || flat[indexB].id !== idB) {
          return clone()(state);
        }
        const tmp = flat[indexA];
        flat[indexA] = flat[indexB];
        flat[indexB] = tmp;
        parentA.props.children = flat;
      } else {
        const flatA = flattenDesignChildren(parentA.props.children);
        const flatB = flattenDesignChildren(parentB.props.children);
        if (!flatA[indexA] || !flatB[indexB] || flatA[indexA].id !== idA || flatB[indexB].id !== idB) {
          return clone()(state);
        }
        const tmp = flatA[indexA];
        flatA[indexA] = flatB[indexB];
        flatB[indexB] = tmp;
        parentA.props.children = flatA;
        parentB.props.children = flatB;
      }

      return clone()(state);
    }

    case REDUCER_ACTION_TYPE.replaceDesignValue: {
      return clone()(action.payload.designValue);
    }

    // 什么都不做
    default:
      return state;
  }
};

export default reducer;
