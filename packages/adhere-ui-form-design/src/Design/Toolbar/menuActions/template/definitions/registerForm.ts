import UserRegisterInfo from '../../../../../../json/UserRegisterInfo.json';
import type { DesignValue } from '../../../../../types';
import type { GetItemByType } from '../utils/createTemplateField';
import { loadTemplateFromJson } from '../utils/loadTemplateFromJson';

/**
 * 用户注册信息模板 — 直接使用 json/UserRegisterInfo.json 作为单一数据源
 */
export function buildRegisterForm(_getItemByType?: GetItemByType) {
  return loadTemplateFromJson(UserRegisterInfo as DesignValue);
}
