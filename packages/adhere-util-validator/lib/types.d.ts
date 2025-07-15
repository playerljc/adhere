import validator from 'validator';
import { ChinaPhoneValidator } from './chinaPhoneValidator';
/**
 * 扩展验证器类型定义
 * @description 包含标准validator库的所有方法以及中国手机号验证方法
 */
export type ExtendedValidator = typeof validator & ChinaPhoneValidator;
/**
 * 手机号验证结果类型
 * @description 定义手机号验证的详细结果信息
 */
export interface PhoneValidationResult {
    /** 是否为有效的手机号 */
    isValid: boolean;
    /** 运营商类型 */
    carrier?: 'ChinaMobile' | 'ChinaUnicom' | 'ChinaTelecom' | 'ChinaSARFT' | 'INMARSAT' | 'Onedow' | 'Virtual' | 'IoT' | 'WIE';
    /** 卡类型 */
    cardType?: 'SIMCard' | 'VirtualSIMCard' | 'IoTSIMCard' | 'WIETSIMCard';
    /** 是否支持短信功能 */
    supportsSMS?: boolean;
    /** 错误信息 */
    error?: string;
}
/**
 * 验证器配置选项
 * @description 定义验证器的配置参数
 */
export interface ValidatorOptions {
    /** 是否允许国际区号前缀 */
    allowInternationalPrefix?: boolean;
    /** 是否严格模式（更严格的验证规则） */
    strict?: boolean;
    /** 自定义错误消息 */
    customErrorMessage?: string;
}
/**
 * 运营商枚举
 * @description 定义支持的运营商类型
 */
export declare enum Carrier {
    CHINA_MOBILE = "ChinaMobile",
    CHINA_UNICOM = "ChinaUnicom",
    CHINA_TELECOM = "ChinaTelecom",
    CHINA_SARFT = "ChinaSARFT",
    INMARSAT = "INMARSAT",
    ONEDOW = "Onedow",
    VIRTUAL = "Virtual",
    IOT = "IoT",
    WIE = "WIE"
}
/**
 * 卡类型枚举
 * @description 定义支持的卡类型
 */
export declare enum CardType {
    SIM_CARD = "SIMCard",
    VIRTUAL_SIM_CARD = "VirtualSIMCard",
    IOT_SIM_CARD = "IoTSIMCard",
    WIE_SIM_CARD = "WIETSIMCard"
}
export type { ChinaPhoneValidator };
