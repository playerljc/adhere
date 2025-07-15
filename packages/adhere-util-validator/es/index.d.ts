import Validator from './validator';
/**
 * 验证器模块入口
 * @description 导出扩展的验证器对象，包含标准验证方法和中国手机号验证方法
 *
 * @example
 * ```typescript
 * import Validator, {
 *   Carrier,
 *   CardType,
 *   PhoneValidationResult,
 *   PhoneValidator,
 *   createPhoneValidator,
 *   quickValidate
 * } from '@adhere/util-validator';
 *
 * // 基础验证方法
 * const isValid = Validator.isAllChinaPhoneNumber('13812345678');
 *
 * // 高级验证类
 * const validator = new PhoneValidator();
 * const result = validator.validate('13812345678');
 *
 * // 快速验证
 * const quickResult = quickValidate('13812345678');
 *
 * // 使用类型定义
 * const validationResult: PhoneValidationResult = {
 *   isValid: true,
 *   carrier: Carrier.CHINA_MOBILE,
 *   cardType: CardType.SIM_CARD,
 *   supportsSMS: true
 * };
 * ```
 */
export default Validator;
export type { ExtendedValidator, ChinaPhoneValidator, PhoneValidationResult, ValidatorOptions, } from './types';
export { Carrier, CardType } from './types';
export { PhoneValidator, createPhoneValidator, quickValidate, } from './utils';
