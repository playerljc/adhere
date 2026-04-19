import { TYPE } from '../Fields/layout/FlexLayout/constant';
import type { DesignValue, DesignValueProps } from '../types';
import { genRootFieldId } from './rootFieldId';

function flattenTopLevelChildren(
  children: DesignValueProps['children'] | undefined,
): DesignValue[] {
  if (!children?.length) return [];
  const out: DesignValue[] = [];
  for (const item of children) {
    if (Array.isArray(item)) {
      for (const c of item) out.push(c);
    } else {
      out.push(item);
    }
  }
  return out;
}

/**
 * 画布上是否存在可清空的子项（根下是否有子节点）
 */
export function hasDesignCanvasUserContent(value: DesignValue | undefined): boolean {
  if (!value) return false;
  return flattenTopLevelChildren(value.props.children).length > 0;
}

/**
 * 创建与初次进入设计器（无 value）时一致的默认根布局
 */
export function createDefaultRootDesignValue(): DesignValue {
  return {
    id: genRootFieldId(),
    type: TYPE,
    props: {
      fieldProps: {
        direction: 'vertical',
        wrap: false,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'normal',
        gap: 8,
      },
      children: [],
    },
  };
}
