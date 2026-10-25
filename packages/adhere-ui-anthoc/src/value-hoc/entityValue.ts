import Util from '@baifendian/adhere-util';

const ENTITY_VALUE_KEYS = ['value', 'key', 'id'];

function isBlankText(value: unknown) {
  return typeof value === 'string' && value.trim() === '';
}

/**
 * isPrimitiveValue
 * @description 空字符串不参与实体还原。数字 0、布尔 false 仍然算原始值。
 */
export function isPrimitiveValue(value: unknown) {
  return value != null && !isBlankText(value) && Util.isPrimitive(value);
}

export function isRefValue(value: unknown) {
  return value != null && !isBlankText(value) && !Util.isArray(value) && Util.isRef(value);
}

export function isMultiplePrimitiveValue(value: unknown, nested = false) {
  if (value == null || isBlankText(value) || !Util.isArray(value) || !value.length) return false;
  const list = nested ? (value as unknown[]).flat() : (value as unknown[]);
  return list.some((item) => Util.isPrimitive(item));
}

export function isMultipleRefValue(value: unknown, nested = false) {
  if (value == null || isBlankText(value) || !Util.isArray(value) || !value.length) return false;
  const list = nested ? (value as unknown[]).flat() : (value as unknown[]);
  return list.every((item) => Util.isRef(item));
}

/**
 * readEntityValue
 * @description 显式 valueProp / fieldNames.value 优先，否则按 value、key、id 查找。
 */
export function readEntityValue(entity: any, preferred?: string) {
  if (entity == null || typeof entity !== 'object') return undefined;

  const primary = preferred || 'value';
  if (primary in entity) return entity[primary];

  for (let index = 0; index < ENTITY_VALUE_KEYS.length; index++) {
    const key = ENTITY_VALUE_KEYS[index];
    if (key in entity) return entity[key];
  }

  return undefined;
}

/**
 * sameEntityValue
 * @description 只比较引用和数组结构。原始值还原失败时数组内容仍相同，用来拦住重复 onChange。
 */
export function sameEntityValue(left: any, right: any): boolean {
  if (Object.is(left, right)) return true;
  if (Array.isArray(left) && Array.isArray(right)) {
    return (
      left.length === right.length &&
      left.every((item, index) => sameEntityValue(item, right[index]))
    );
  }
  return false;
}

export function childPassesThroughValue(childProps?: { labelInValue?: boolean; treeCheckStrictly?: boolean }) {
  return Boolean(childProps?.labelInValue || childProps?.treeCheckStrictly);
}
