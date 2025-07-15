/**
 * 中国手机号验证器接口
 * @description 定义所有中国手机号验证方法的类型
 */
export interface ChinaPhoneValidator {
    /**
     * 验证所有中国手机号码（手机卡 + 数据卡 + 上网卡）
     * @param phoneNumber - 待验证的手机号码
     * @returns 是否为有效的中国手机号码
     * @example
     * ```typescript
     * isAllChinaPhoneNumber('13812345678') // true
     * isAllChinaPhoneNumber('12345678901') // false
     * ```
     */
    isAllChinaPhoneNumber(phoneNumber: string): boolean;
    /**
     * 验证支持短信功能的中国手机号码（手机卡 + 上网卡）
     * @param phoneNumber - 待验证的手机号码
     * @returns 是否为支持短信功能的中国手机号码
     * @example
     * ```typescript
     * isSMSChinaPhoneNumber('13812345678') // true
     * isSMSChinaPhoneNumber('14101234567') // false (物联网卡不支持短信)
     * ```
     */
    isSMSChinaPhoneNumber(phoneNumber: string): boolean;
    /**
     * 验证中国手机卡号码（匹配所有运营商）
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为有效的中国手机卡号码
     */
    isSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国移动手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为中国移动手机卡号码
     */
    isChinaMobileSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国联通手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为中国联通手机卡号码
     */
    isChinaUnicomSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国电信手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为中国电信手机卡号码
     */
    isChinaTelecomSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国广电手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为中国广电手机卡号码
     */
    isChinaSARFTSIMCard(simCardNumber: string): boolean;
    /**
     * 验证海事卫星通信手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为海事卫星通信手机卡号码
     */
    isINMARSATSIMCard(simCardNumber: string): boolean;
    /**
     * 验证应急通信手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为应急通信手机卡号码
     */
    isOnedowSIMCard(simCardNumber: string): boolean;
    /**
     * 验证虚拟运营商手机卡号码（匹配所有虚拟运营商）
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为虚拟运营商手机卡号码
     */
    isVirtualSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国移动虚拟运营商手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为中国移动虚拟运营商手机卡号码
     */
    isChinaMobileVirtualSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国联通虚拟运营商手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为中国联通虚拟运营商手机卡号码
     */
    isChinaUnicomVirtualSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国电信虚拟运营商手机卡号码
     * @param simCardNumber - 待验证的手机卡号码
     * @returns 是否为中国电信虚拟运营商手机卡号码
     */
    isChinaTelecomVirtualSIMCard(simCardNumber: string): boolean;
    /**
     * 验证物联网数据卡号码（匹配所有运营商）
     * @param simCardNumber - 待验证的物联网卡号码
     * @returns 是否为物联网数据卡号码
     */
    isIoTSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国移动物联网数据卡号码
     * @param simCardNumber - 待验证的物联网卡号码
     * @returns 是否为中国移动物联网数据卡号码
     */
    isChinaMobileIoTSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国联通物联网数据卡号码
     * @param simCardNumber - 待验证的物联网卡号码
     * @returns 是否为中国联通物联网数据卡号码
     */
    isChinaUnicomIoTSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国电信物联网数据卡号码
     * @param simCardNumber - 待验证的物联网卡号码
     * @returns 是否为中国电信物联网数据卡号码
     */
    isChinaTelecomIoTSIMCard(simCardNumber: string): boolean;
    /**
     * 验证上网卡号码（匹配所有运营商）
     * @param simCardNumber - 待验证的上网卡号码
     * @returns 是否为上网卡号码
     */
    isWIETSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国移动上网卡号码
     * @param simCardNumber - 待验证的上网卡号码
     * @returns 是否为中国移动上网卡号码
     */
    isChinaMobileWIETSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国联通上网卡号码
     * @param simCardNumber - 待验证的上网卡号码
     * @returns 是否为中国联通上网卡号码
     */
    isChinaUnicomWIETSIMCard(simCardNumber: string): boolean;
    /**
     * 验证中国电信上网卡号码
     * @param simCardNumber - 待验证的上网卡号码
     * @returns 是否为中国电信上网卡号码
     */
    isChinaTelecomWIETSIMCard(simCardNumber: string): boolean;
}
/**
 * 中国手机号验证器
 * @description 提供完整的中国手机号码验证功能，包括各种运营商和卡类型的验证
 */
declare const chinaPhoneValidator: ChinaPhoneValidator;
export default chinaPhoneValidator;
