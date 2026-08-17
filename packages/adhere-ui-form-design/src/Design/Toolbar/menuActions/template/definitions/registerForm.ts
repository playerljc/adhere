import Register from '../../../../../../json/AllFields.json';
import type { DesignValue } from '../../../../../types';
import type { GetItemByType } from '../utils/createTemplateField';
import { loadTemplateFromJson } from '../utils/loadTemplateFromJson';

/**
 * 全部控件模板 — 使用 json/AllFields.json 作为数据源
 */
export function buildRegisterForm(_getItemByType?: GetItemByType) {
  return loadTemplateFromJson(Register as unknown as DesignValue);
}
