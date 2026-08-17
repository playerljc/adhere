import type { Reducer } from 'react';
import clone from 'rfdc';

import { REDUCER_ACTION_TYPE } from '../../constant';
import type { DataSourceConfig, DesignValue, FieldProps, Terminal } from '../../types';
import {
  clonePathContainingIds,
  deleteDesignValueById,
  findParentWithChildIndex,
  flattenDesignChildren,
  updateDesignValueById,
} from '../../utils';
import { mergeFieldPropsTerminalOverlay } from '../../utils';

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
      type: REDUCER_ACTION_TYPE.updateFieldPropsByTerminal;
      payload: {
        id: string;
        terminal: Terminal;
        props: Partial<FieldProps>;
      };
    }
  | {
      type: 'noop';
    };

function updateNodeProps(
  state: DesignValueState,
  id: string,
  patch: (node: DesignValue) => DesignValue,
): DesignValueState {
  if (!state) return state;
  return updateDesignValueById(state, id, patch);
}

/**
 * reducer
 * @description 对设计值进行修改（路径浅拷，未变更子树保持原引用）
 */
const reducer: Reducer<DesignValueState, DesignValueAction> = (state, action) => {
  switch (action.type) {
    // 修改FormItem的props
    case REDUCER_ACTION_TYPE.updateFormItemProps: {
      return updateNodeProps(state, action.payload.id, (node) => ({
        ...node,
        props: {
          ...node.props,
          formItemProps: action.payload.props as DesignValue['props']['formItemProps'],
        },
      }));
    }

    // 修改控件本身的props
    case REDUCER_ACTION_TYPE.updateFieldProps: {
      return updateNodeProps(state, action.payload.id, (node) => ({
        ...node,
        props: {
          ...node.props,
          fieldProps: action.payload.props as DesignValue['props']['fieldProps'],
        },
      }));
    }

    case REDUCER_ACTION_TYPE.updateFieldPropsByTerminal: {
      return updateNodeProps(state, action.payload.id, (node) => {
        const { terminal, props: patch } = action.payload;
        const prev = node.props.fieldPropsByTerminal ?? {};
        const nextOverlay = mergeFieldPropsTerminalOverlay(
          prev[terminal] as Partial<FieldProps> | undefined,
          patch,
        );
        return {
          ...node,
          props: {
            ...node.props,
            fieldPropsByTerminal: {
              ...prev,
              [terminal]: nextOverlay,
            },
          },
        };
      });
    }

    // 修改控件样式的props
    case REDUCER_ACTION_TYPE.updateStyleProps: {
      return updateNodeProps(state, action.payload.id, (node) => ({
        ...node,
        props: {
          ...node.props,
          styleProps: action.payload.props as DesignValue['props']['styleProps'],
        },
      }));
    }

    // 修改控件Actions的props
    case REDUCER_ACTION_TYPE.updateActionsProps: {
      return updateNodeProps(state, action.payload.id, (node) => ({
        ...node,
        props: {
          ...node.props,
          actionsProps: action.payload.props as DesignValue['props']['actionsProps'],
        },
      }));
    }

    // 修改控件Flex的props
    case REDUCER_ACTION_TYPE.updateFlexProps: {
      return updateNodeProps(state, action.payload.id, (node) => ({
        ...node,
        props: {
          ...node.props,
          flexProps: action.payload.props as DesignValue['props']['fieldProps'],
        },
      }));
    }

    // 修改控件children
    case REDUCER_ACTION_TYPE.updateChildrenProps: {
      return updateNodeProps(state, action.payload.id, (node) => ({
        ...node,
        props: {
          ...node.props,
          children: action.payload.props as DesignValue['props']['children'],
        },
      }));
    }

    // 在children中增加一个元素
    case REDUCER_ACTION_TYPE.addChildrenById: {
      if (!state) return state;

      return updateDesignValueById(state, action.payload.id, (node) => ({
        ...node,
        props: {
          ...node.props,
          children: [...(node.props.children ?? []), action.payload.child],
        },
      }));
    }

    // 删除指定id的children
    case REDUCER_ACTION_TYPE.deleteChildrenById: {
      if (!state) return state;

      return deleteDesignValueById(state, action.payload.id);
    }

    case REDUCER_ACTION_TYPE.updateDataSourceConfig: {
      return updateNodeProps(state, action.payload.id, (node) => ({
        ...node,
        dataSourceConfig: action.payload.dataSourceConfig,
      }));
    }

    case REDUCER_ACTION_TYPE.swapNodes: {
      if (!state) return state;

      const { idA, idB } = action.payload;
      if (!idA || !idB || idA === idB) {
        return state;
      }

      const root = state as DesignValue;
      const locA = findParentWithChildIndex(root, idA);
      const locB = findParentWithChildIndex(root, idB);

      if (!locA || !locB) {
        return state;
      }

      const { parent: parentA, index: indexA } = locA;
      const { parent: parentB, index: indexB } = locB;

      const { root: nextRoot, nodes } = clonePathContainingIds(
        root,
        new Set([parentA.id, parentB.id]),
      );
      const newParentA = nodes.get(parentA.id);
      const newParentB = nodes.get(parentB.id);
      if (!newParentA || !newParentB) {
        return state;
      }

      // 同父：必须在「同一份」扁平数组上交换下标；若用两份 flatten 副本交叉赋值，会把同一引用写进错误槽位（例如出现两个 B）。
      if (parentA === parentB) {
        const flat = flattenDesignChildren(newParentA.props.children);
        if (!flat[indexA] || !flat[indexB] || flat[indexA].id !== idA || flat[indexB].id !== idB) {
          return state;
        }
        const tmp = flat[indexA];
        flat[indexA] = flat[indexB];
        flat[indexB] = tmp;
        newParentA.props.children = flat;
      } else {
        const flatA = flattenDesignChildren(newParentA.props.children);
        const flatB = flattenDesignChildren(newParentB.props.children);
        if (
          !flatA[indexA] ||
          !flatB[indexB] ||
          flatA[indexA].id !== idA ||
          flatB[indexB].id !== idB
        ) {
          return state;
        }
        const tmp = flatA[indexA];
        flatA[indexA] = flatB[indexB];
        flatB[indexB] = tmp;
        newParentA.props.children = flatA;
        newParentB.props.children = flatB;
      }

      return nextRoot;
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
