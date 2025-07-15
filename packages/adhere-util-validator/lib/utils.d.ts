import type { PhoneValidationResult, ValidatorOptions } from './types';
import { Carrier, CardType } from './types';
/**
 * 高级手机号验证工具类
 * @description 提供详细的手机号验证结果，包括运营商、卡类型等信息
 */
export declare class PhoneValidator {
    private options;
    constructor(options?: ValidatorOptions);
    /**
     * 验证手机号并返回详细信息
     * @param phoneNumber - 待验证的手机号码
     * @returns 详细的验证结果
     *
     * @example
     * ```typescript
     * const validator = new PhoneValidator();
     * const result = validator.validate('13812345678');
     * console.log(result);
     * // {
     * //   isValid: true,
     * //   carrier: 'ChinaMobile',
     * //   cardType: 'SIMCard',
     * //   supportsSMS: true
     * // }
     * ```
     */
    validate(phoneNumber: string): PhoneValidationResult;
    /**
     * 清理手机号码格式
     * @param phoneNumber - 原始手机号码
     * @returns 清理后的手机号码
     */
    private cleanPhoneNumber;
    /**
     * 检测运营商
     * @param phoneNumber - 手机号码
     * @returns 运营商类型
     */
    private detectCarrier;
    /**
     * 检测卡类型
     * @param phoneNumber - 手机号码
     * @returns 卡类型
     */
    private detectCardType;
    /**
     * 批量验证手机号
     * @param phoneNumbers - 手机号码数组
     * @returns 验证结果数组
     *
     * @example
     * ```typescript
     * const validator = new PhoneValidator();
     * const results = validator.validateBatch(['13812345678', '13987654321']);
     * ```
     */
    validateBatch(phoneNumbers: string[]): PhoneValidationResult[];
    /**
     * 获取验证统计信息
     * @param phoneNumbers - 手机号码数组
     * @returns 统计信息
     */
    getValidationStats(phoneNumbers: string[]): {
        total: number;
        valid: number;
        invalid: number;
        carriers: Record<Carrier, number>;
        cardTypes: Record<CardType, number>;
        smsSupported: number;
    };
}
/**
 * 创建手机号验证器实例
 * @param options - 验证器配置选项
 * @returns 手机号验证器实例
 *
 * @example
 * ```typescript
 * const validator = createPhoneValidator({ strict: true });
 * const result = validator.validate('13812345678');
 * ```
 */
export declare function createPhoneValidator(options?: ValidatorOptions): PhoneValidator;
/**
 * 快速验证手机号（静态方法）
 * @param phoneNumber - 手机号码
 * @returns 是否为有效的中国手机号
 *
 * @example
 * ```typescript
 * const isValid = quickValidate('13812345678'); // true
 * ```
 */
export declare function quickValidate(phoneNumber: string): boolean;
