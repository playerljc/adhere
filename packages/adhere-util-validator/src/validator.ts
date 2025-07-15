import validator from 'validator';
import chinaPhoneValidator from './chinaPhoneValidator';
import type { ExtendedValidator } from './types';

/**
 * 扩展的验证器对象，包含标准validator库的所有方法以及中国手机号验证方法
 * @description 提供完整的表单验证功能，包括标准验证方法和中国特色的手机号验证
 * 
 * @example
 * ```typescript
 * import Validator from '@adhere/util-validator';
 * 
 * // 标准验证方法
 * Validator.isEmail('test@example.com'); // true
 * Validator.isURL('https://example.com'); // true
 * 
 * // 中国手机号验证方法
 * Validator.isAllChinaPhoneNumber('13812345678'); // true
 * Validator.isChinaMobileSIMCard('13812345678'); // true
 * ```
 */
const extendedValidator: ExtendedValidator = {
  ...validator,
  ...chinaPhoneValidator,
};

export default extendedValidator;
