import clone from 'rfdc';

import Util from '@baifendian/adhere-util';

import type { DesignValue } from '../../../../../types';
import { genRootFieldId } from '../../../../../utils';

const cloneDeep = clone();

function regenerateNode(node: DesignValue): DesignValue {
  const next = cloneDeep(node);
  next.id = Util.uuid();
  if (next.props.children?.length) {
    next.props.children = next.props.children.map((child) => {
      if (Array.isArray(child)) {
        return child.map(regenerateNode);
      }
      return regenerateNode(child);
    }) as DesignValue[];
  }
  return next;
}

/**
 * 为设计树所有节点分配新 id，根节点使用 genRootFieldId
 */
export function regenerateDesignValueIds(designValue: DesignValue): DesignValue {
  const next = cloneDeep(designValue);
  next.id = genRootFieldId();
  if (next.props.children?.length) {
    next.props.children = next.props.children.map((child) => {
      if (Array.isArray(child)) {
        return child.map(regenerateNode);
      }
      return regenerateNode(child);
    }) as DesignValue[];
  }
  return next;
}
