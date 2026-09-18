import { notification } from 'antd';

import { validator as searchFieldValidator } from '../../../Util';
import type { ColumnSearchConfig, ColumnTypeExt, ValidatorRule } from '../../../types';
import type { SearchFieldItem, SearchFieldValidationContext } from '../types';

/**
 * getSearchFieldTitle
 * @description 获取查询项标题文本（用于 notification 等纯文本场景）
 */
export function getSearchFieldTitle(
  searchConfig: ColumnSearchConfig,
  column: ColumnTypeExt,
): string {
  const title = searchConfig.title ?? column.title;

  if (typeof title === 'string' || typeof title === 'number') {
    return String(title);
  }

  const dataIndex = searchConfig.dataIndex ?? column.dataIndex;

  return dataIndex != null ? String(dataIndex) : '';
}

/**
 * getRuleMessage
 * @description 从校验规则中提取错误文案
 */
export function getRuleMessage(rule: ValidatorRule | undefined, fallback: string): string {
  if (rule?.message == null) {
    return fallback;
  }

  return typeof rule.message === 'string' ? rule.message : fallback;
}

/**
 * getSearchFieldValue
 * @description 获取查询项当前值
 */
export function getSearchFieldValue(
  searchConfig: ColumnSearchConfig,
  dataIndex: string,
  state: Record<string, any>,
) {
  if (searchConfig.type === 'rangePicker') {
    const { startName, endName } = searchConfig;

    if (!startName || !endName) {
      return [undefined, undefined];
    }

    return [state[startName], state[endName]];
  }

  return state[dataIndex];
}

/**
 * isSearchValueEmpty
 * @description 判断查询项值是否为空
 */
export function isSearchValueEmpty(
  value: any,
  searchConfig: ColumnSearchConfig,
  state: Record<string, any>,
): boolean {
  if (searchConfig.type === 'rangePicker') {
    const { startName, endName } = searchConfig;

    if (!startName || !endName) {
      return true;
    }

    const start = state[startName];
    const end = state[endName];

    return !start || !end;
  }

  if (value === undefined || value === null || value === '') {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  return false;
}

/**
 * getSearchFieldRules
 * @description 合并 required 与 rules，生成最终校验规则
 */
export function getSearchFieldRules(
  searchConfig: ColumnSearchConfig,
  fieldTitle: string,
): ValidatorRule[] {
  const rules: ValidatorRule[] = [...((searchConfig.rules ?? []) as ValidatorRule[])];

  if (searchConfig.required && !rules.some((rule) => 'required' in rule && rule.required)) {
    rules.unshift({
      required: true,
      message: `${fieldTitle}不能为空`,
    });
  }

  return rules;
}

/**
 * showSearchValidationError
 * @description 使用 antd notification 展示查询校验错误
 */
export function showSearchValidationError(fieldTitle: string, message: string) {
  notification.error({
    message: fieldTitle,
    description: message,
  });
}

/**
 * validateSearchField
 * @description 校验单个查询项，失败时触发 onError 并返回 false
 */
export async function validateSearchField(
  item: SearchFieldItem,
  state: Record<string, any>,
  onError: (fieldTitle: string, message: string) => void,
): Promise<boolean> {
  const { searchConfig, column, dataIndex } = item;
  const fieldTitle = getSearchFieldTitle(searchConfig, column);
  const value = getSearchFieldValue(searchConfig, dataIndex, state);
  const rules = getSearchFieldRules(searchConfig, fieldTitle);

  if (!rules.length) {
    return true;
  }

  if (searchConfig.required && isSearchValueEmpty(value, searchConfig, state)) {
    const requiredRule = rules.find((rule) => 'required' in rule && rule.required);
    onError(fieldTitle, getRuleMessage(requiredRule, `${fieldTitle}不能为空`));
    return false;
  }

  try {
    await searchFieldValidator(rules).validator(rules, value, () => {});
    return true;
  } catch (error) {
    onError(fieldTitle, error instanceof Error ? error.message : String(error));
    return false;
  }
}

/**
 * validateSearchFields
 * @description 校验所有查询项；遇到第一个错误即阻断
 */
export async function validateSearchFields({
  state,
  fields,
  onError = showSearchValidationError,
}: SearchFieldValidationContext): Promise<boolean> {
  for (const item of fields) {
    const valid = await validateSearchField(item, state, onError);

    if (!valid) {
      return false;
    }
  }

  return true;
}
