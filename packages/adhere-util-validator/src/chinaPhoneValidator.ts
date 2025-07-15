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
const chinaPhoneValidator: ChinaPhoneValidator = {
  /**
   * 验证所有中国手机号码（手机卡 + 数据卡 + 上网卡）
   * @description 匹配所有号码（手机卡 + 数据卡 + 上网卡）
   * @param phoneNumber - 待验证的手机号码
   * @returns 是否为有效的中国手机号码
   */
  isAllChinaPhoneNumber(phoneNumber: string): boolean {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/.test(
      phoneNumber,
    );
  },

  /**
   * 验证支持短信功能的中国手机号码（手机卡 + 上网卡）
   * @description 匹配所有支持短信功能的号码（手机卡 + 上网卡）
   * @param phoneNumber - 待验证的手机号码
   * @returns 是否为支持短信功能的中国手机号码
   */
  isSMSChinaPhoneNumber(phoneNumber: string): boolean {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/.test(
      phoneNumber,
    );
  },

  //---------------------------------手机卡--------------------------------
  /**
   * 验证中国手机卡号码（匹配所有运营商）
   * @description 手机卡(匹配所有)
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为有效的中国手机卡号码
   */
  isSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/.test(
      simCardNumber,
    );
  },

  /**
   * 验证中国移动手机卡号码
   * @description 手机卡(匹配中国移动)
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为中国移动手机卡号码
   */
  isChinaMobileSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/.test(
      simCardNumber,
    );
  },

  /**
   * 验证中国联通手机卡号码
   * @description 手机卡(中国联通)
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为中国联通手机卡号码
   */
  isChinaUnicomSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/.test(simCardNumber);
  },

  /**
   * 验证中国电信手机卡号码
   * @description 手机卡(中国电信)
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为中国电信手机卡号码
   */
  isChinaTelecomSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/.test(
      simCardNumber,
    );
  },

  /**
   * 验证中国广电手机卡号码
   * @description 手机卡(中国广电)
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为中国广电手机卡号码
   */
  isChinaSARFTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?192\d{8}$/.test(simCardNumber);
  },

  /**
   * 验证海事卫星通信手机卡号码
   * @description 匹配北京船舶通信导航有限公司（海事卫星通信）
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为海事卫星通信手机卡号码
   */
  isINMARSATSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1749\d{7}$/.test(simCardNumber);
  },

  /**
   * 验证应急通信手机卡号码
   * @description 工业和信息化部应急通信保障中心（应急通信）
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为应急通信手机卡号码
   */
  isOnedowSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$/.test(simCardNumber);
  },

  //---------------------------------虚拟运营商--------------------------------
  /**
   * 验证虚拟运营商手机卡号码（匹配所有虚拟运营商）
   * @description 匹配所有虚拟运营商
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为虚拟运营商手机卡号码
   */
  isVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:7[01]|6[257])\d{8}$/.test(simCardNumber);
  },

  /**
   * 验证中国移动虚拟运营商手机卡号码
   * @description 匹配中国移动虚拟运营商
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为中国移动虚拟运营商手机卡号码
   */
  isChinaMobileVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:65\d|70[356])\d{7}$/.test(simCardNumber);
  },

  /**
   * 验证中国联通虚拟运营商手机卡号码
   * @description 匹配中国联通虚拟运营商
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为中国联通虚拟运营商手机卡号码
   */
  isChinaUnicomVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:70[4789]|71\d|67\d)\d{7}$/.test(simCardNumber);
  },

  /**
   * 验证中国电信虚拟运营商手机卡号码
   * @description 匹配中国电信虚拟运营商
   * @param simCardNumber - 待验证的手机卡号码
   * @returns 是否为中国电信虚拟运营商手机卡号码
   */
  isChinaTelecomVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:70[012]|62\d)\d{7}$/.test(simCardNumber);
  },

  //---------------------------------物联网数据卡--------------------------------
  /**
   * 验证物联网数据卡号码（匹配所有运营商）
   * @description 物联网数据卡验证
   * @param simCardNumber - 待验证的物联网卡号码
   * @returns 是否为物联网数据卡号码
   */
  isIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?14(?:[14]0|41|[68]\d)\d{9}$/.test(simCardNumber);
  },

  /**
   * 验证中国移动物联网数据卡号码
   * @description 匹配中国移动物联网卡
   * @param simCardNumber - 待验证的物联网卡号码
   * @returns 是否为中国移动物联网数据卡号码
   */
  isChinaMobileIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?14(?:4[01]|8\d)\d{9}$/.test(simCardNumber);
  },

  /**
   * 验证中国联通物联网数据卡号码
   * @description 匹配中国联通物联网卡
   * @param simCardNumber - 待验证的物联网卡号码
   * @returns 是否为中国联通物联网数据卡号码
   */
  isChinaUnicomIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?146\d{10}$/.test(simCardNumber);
  },

  /**
   * 验证中国电信物联网数据卡号码
   * @description 匹配中国电信物联网卡
   * @param simCardNumber - 待验证的物联网卡号码
   * @returns 是否为中国电信物联网数据卡号码
   */
  isChinaTelecomIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1410\d{9}$/.test(simCardNumber);
  },

  //---------------------------------上网卡--------------------------------
  /**
   * 验证上网卡号码（匹配所有运营商）
   * @description 上网卡验证
   * @param simCardNumber - 待验证的上网卡号码
   * @returns 是否为上网卡号码
   */
  isWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?14[579]\d{8}$/.test(simCardNumber);
  },

  /**
   * 验证中国移动上网卡号码
   * @description 匹配中国移动上网卡
   * @param simCardNumber - 待验证的上网卡号码
   * @returns 是否为中国移动上网卡号码
   */
  isChinaMobileWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?147\d{8}$/.test(simCardNumber);
  },

  /**
   * 验证中国联通上网卡号码
   * @description 匹配中国联通上网卡
   * @param simCardNumber - 待验证的上网卡号码
   * @returns 是否为中国联通上网卡号码
   */
  isChinaUnicomWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?145\d{8}$/.test(simCardNumber);
  },

  /**
   * 验证中国电信上网卡号码
   * @description 匹配中国电信上网卡
   * @param simCardNumber - 待验证的上网卡号码
   * @returns 是否为中国电信上网卡号码
   */
  isChinaTelecomWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?149\d{8}$/.test(simCardNumber);
  },
};

export default chinaPhoneValidator;
