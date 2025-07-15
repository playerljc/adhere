import chinaPhoneValidator from './chinaPhoneValidator';
import type { PhoneValidationResult, ValidatorOptions } from './types';
import { Carrier, CardType } from './types';

/**
 * 高级手机号验证工具类
 * @description 提供详细的手机号验证结果，包括运营商、卡类型等信息
 */
export class PhoneValidator {
  private options: Required<ValidatorOptions>;

  constructor(options: ValidatorOptions = {}) {
    this.options = {
      allowInternationalPrefix: options.allowInternationalPrefix ?? true,
      strict: options.strict ?? false,
      customErrorMessage: options.customErrorMessage ?? '无效的手机号码',
    };
  }

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
  validate(phoneNumber: string): PhoneValidationResult {
    // 基本格式检查
    if (!phoneNumber || typeof phoneNumber !== 'string') {
      return {
        isValid: false,
        error: this.options.customErrorMessage,
      };
    }

    // 清理输入
    const cleanedNumber = this.cleanPhoneNumber(phoneNumber);

    // 检查是否为有效的中国手机号
    if (!chinaPhoneValidator.isAllChinaPhoneNumber(cleanedNumber)) {
      return {
        isValid: false,
        error: this.options.customErrorMessage,
      };
    }

    // 确定运营商和卡类型
    const carrier = this.detectCarrier(cleanedNumber);
    const cardType = this.detectCardType(cleanedNumber);
    const supportsSMS = chinaPhoneValidator.isSMSChinaPhoneNumber(cleanedNumber);

    return {
      isValid: true,
      carrier,
      cardType,
      supportsSMS,
    };
  }

  /**
   * 清理手机号码格式
   * @param phoneNumber - 原始手机号码
   * @returns 清理后的手机号码
   */
  private cleanPhoneNumber(phoneNumber: string): string {
    // 移除所有非数字字符
    let cleaned = phoneNumber.replace(/\D/g, '');

    // 处理国际区号
    if (cleaned.startsWith('86')) {
      cleaned = cleaned.substring(2);
    }

    return cleaned;
  }

  /**
   * 检测运营商
   * @param phoneNumber - 手机号码
   * @returns 运营商类型
   */
  private detectCarrier(phoneNumber: string): Carrier | undefined {
    if (chinaPhoneValidator.isChinaMobileSIMCard(phoneNumber)) {
      return Carrier.CHINA_MOBILE;
    }
    if (chinaPhoneValidator.isChinaUnicomSIMCard(phoneNumber)) {
      return Carrier.CHINA_UNICOM;
    }
    if (chinaPhoneValidator.isChinaTelecomSIMCard(phoneNumber)) {
      return Carrier.CHINA_TELECOM;
    }
    if (chinaPhoneValidator.isChinaSARFTSIMCard(phoneNumber)) {
      return Carrier.CHINA_SARFT;
    }
    if (chinaPhoneValidator.isINMARSATSIMCard(phoneNumber)) {
      return Carrier.INMARSAT;
    }
    if (chinaPhoneValidator.isOnedowSIMCard(phoneNumber)) {
      return Carrier.ONEDOW;
    }
    if (chinaPhoneValidator.isVirtualSIMCard(phoneNumber)) {
      return Carrier.VIRTUAL;
    }
    if (chinaPhoneValidator.isIoTSIMCard(phoneNumber)) {
      return Carrier.IOT;
    }
    if (chinaPhoneValidator.isWIETSIMCard(phoneNumber)) {
      return Carrier.WIE;
    }

    return undefined;
  }

  /**
   * 检测卡类型
   * @param phoneNumber - 手机号码
   * @returns 卡类型
   */
  private detectCardType(phoneNumber: string): CardType | undefined {
    if (chinaPhoneValidator.isSIMCard(phoneNumber)) {
      return CardType.SIM_CARD;
    }
    if (chinaPhoneValidator.isVirtualSIMCard(phoneNumber)) {
      return CardType.VIRTUAL_SIM_CARD;
    }
    if (chinaPhoneValidator.isIoTSIMCard(phoneNumber)) {
      return CardType.IOT_SIM_CARD;
    }
    if (chinaPhoneValidator.isWIETSIMCard(phoneNumber)) {
      return CardType.WIE_SIM_CARD;
    }

    return undefined;
  }

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
  validateBatch(phoneNumbers: string[]): PhoneValidationResult[] {
    return phoneNumbers.map(phoneNumber => this.validate(phoneNumber));
  }

  /**
   * 获取验证统计信息
   * @param phoneNumbers - 手机号码数组
   * @returns 统计信息
   */
  getValidationStats(phoneNumbers: string[]) {
    const results = this.validateBatch(phoneNumbers);
    const stats = {
      total: results.length,
      valid: results.filter(r => r.isValid).length,
      invalid: results.filter(r => !r.isValid).length,
      carriers: {} as Record<Carrier, number>,
      cardTypes: {} as Record<CardType, number>,
      smsSupported: results.filter(r => r.supportsSMS).length,
    };

    // 统计运营商分布
    results.forEach(result => {
      if (result.carrier) {
        stats.carriers[result.carrier] = (stats.carriers[result.carrier] || 0) + 1;
      }
      if (result.cardType) {
        stats.cardTypes[result.cardType] = (stats.cardTypes[result.cardType] || 0) + 1;
      }
    });

    return stats;
  }
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
export function createPhoneValidator(options?: ValidatorOptions): PhoneValidator {
  return new PhoneValidator(options);
}

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
export function quickValidate(phoneNumber: string): boolean {
  return chinaPhoneValidator.isAllChinaPhoneNumber(phoneNumber);
} 