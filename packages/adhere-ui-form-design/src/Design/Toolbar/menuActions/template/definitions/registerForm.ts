import Register from '../../../../../../json/Register.json';
import type { DesignValue } from '../../../../../types';
import type { GetItemByType } from '../utils/createTemplateField';
import { loadTemplateFromJson } from '../utils/loadTemplateFromJson';

/**
 * 实体注册模板 — 直接使用 json/Register.json 作为单一数据源
 */
export function buildRegisterForm(_getItemByType?: GetItemByType) {
  return loadTemplateFromJson(Register as DesignValue);
}
