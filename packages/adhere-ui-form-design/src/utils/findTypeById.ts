import type { DesignValue, FieldType } from '../types';

/**
 * 根据 id 在设计值树中查找并返回对应节点的 type
 * @description 递归查找设计值中指定id的字段类型
 */
export function findTypeById({
  id,
  designValue,
}: {
  id: string;
  designValue: DesignValue | undefined;
}): FieldType | undefined {
  if (!designValue) return undefined;

  if (designValue.id === id) {
    return designValue.type;
  }

  if (designValue.props.children) {
    for (let i = 0; i < designValue.props.children.length; i++) {
      const child = designValue.props.children[i];
      const result = findTypeById({ id, designValue: child });
      if (result !== undefined) {
        return result;
      }
    }
  }

  return undefined;
}
