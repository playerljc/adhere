export default {
  /**
   * isAllChinaPhoneNumber
   * @description - 匹配所有号码（手机卡 + 数据卡 + 上网卡）
   * @param phoneNumber
   */
  isAllChinaPhoneNumber(phoneNumber: string): boolean {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/.test(
      phoneNumber,
    );
  },
  /**
   * isSMSChinaPhoneNumber
   * @description - 匹配所有支持短信功能的号码（手机卡 + 上网卡）
   * @param phoneNumber
   */
  isSMSChinaPhoneNumber(phoneNumber: string): boolean {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/.test(
      phoneNumber,
    );
  },
  //---------------------------------手机卡--------------------------------
  /**
   * isSIMCard
   * @description - 手机卡(匹配所有)
   * @param simCardNumber
   */
  isSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/.test(
      simCardNumber,
    );
  },
  /**
   * isChinaMobileSIMCard
   * @description - 手机卡(匹配中国移动)
   * @param simCardNumber
   */
  isChinaMobileSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/.test(
      simCardNumber,
    );
  },
  /**
   * isChinaUnicomSIMCard
   * @description - 手机卡(中国联通)
   * @param simCardNumber
   */
  isChinaUnicomSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/.test(simCardNumber);
  },
  /**
   * isChinaTelecomSIMCard
   * @description - 手机卡(中国电信)
   * @param simCardNumber
   */
  isChinaTelecomSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/.test(
      simCardNumber,
    );
  },
  /**
   * isChinaSARFTSIMCard
   * @description - 手机卡(中国广电)
   * @param simCardNumber
   */
  isChinaSARFTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?192\d{8}$/.test(simCardNumber);
  },
  /**
   * isINMARSATSIMCard
   * @description - 匹配北京船舶通信导航有限公司（海事卫星通信）
   * @param simCardNumber
   */
  isINMARSATSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1749\d{7}$/.test(simCardNumber);
  },
  /**
   * isOnedowSIMCard
   * @description - 工业和信息化部应急通信保障中心（应急通信）
   * @param simCardNumber
   */
  isOnedowSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$/.test(simCardNumber);
  },
  //---------------------------------虚拟运营商--------------------------------
  /**
   * isVirtualSIMCard
   * @description - 匹配所有
   * @param simCardNumber
   */
  isVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:7[01]|6[257])\d{8}$/.test(simCardNumber);
  },
  /**
   * isChinaMobileVirtualSIMCard
   * @description - 匹配中国移动
   * @param simCardNumber
   */
  isChinaMobileVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:65\d|70[356])\d{7}$/.test(simCardNumber);
  },
  /**
   * isChinaUnicomVirtualSIMCard
   * @description - 匹配中国联通
   * @param simCardNumber
   */
  isChinaUnicomVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:70[4789]|71\d|67\d)\d{7}$/.test(simCardNumber);
  },
  /**
   * isChinaTelecomVirtualSIMCard
   * @description - 匹配中国电信
   * @param simCardNumber
   */
  isChinaTelecomVirtualSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1(?:70[012]|62\d)\d{7}$/.test(simCardNumber);
  },
  //---------------------------------物联网数据卡--------------------------------
  isIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?14(?:[14]0|41|[68]\d)\d{9}$/.test(simCardNumber);
  },
  /**
   * isChinaMobileIoTSIMCard
   * @description - 匹配中国移动
   * @param simCardNumber
   */
  isChinaMobileIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?14(?:4[01]|8\d)\d{9}$/.test(simCardNumber);
  },
  /**
   * isChinaUnicomIoTSIMCard
   * @description - 匹配中国联通
   * @param simCardNumber
   */
  isChinaUnicomIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?146\d{10}$/.test(simCardNumber);
  },
  /**
   * isChinaTelecomIoTSIMCard
   * @description - 匹配中国电信
   * @param simCardNumber
   */
  isChinaTelecomIoTSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?1410\d{9}$/.test(simCardNumber);
  },
  //---------------------------------上网卡--------------------------------
  isWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?14[579]\d{8}$/.test(simCardNumber);
  },
  /**
   * isChinaMobileWIETSIMCard
   * @description - 匹配中国移动
   * @param simCardNumber
   */
  isChinaMobileWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?147\d{8}$/.test(simCardNumber);
  },
  /**
   * isChinaUnicomWIETSIMCard
   * @description - 匹配中国联通
   * @param simCardNumber
   */
  isChinaUnicomWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?145\d{8}$/.test(simCardNumber);
  },
  /**
   * isChinaTelecomWIETSIMCard
   * @description - 匹配中国电信
   * @param simCardNumber
   */
  isChinaTelecomWIETSIMCard(simCardNumber: string): boolean {
    return /^(?:\+?86)?149\d{8}$/.test(simCardNumber);
  },
};
