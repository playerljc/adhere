declare const _default: {
    /**
     * isAllChinaPhoneNumber
     * @description - 匹配所有号码（手机卡 + 数据卡 + 上网卡）
     * @param phoneNumber
     */
    isAllChinaPhoneNumber(phoneNumber: string): boolean;
    /**
     * isSMSChinaPhoneNumber
     * @description - 匹配所有支持短信功能的号码（手机卡 + 上网卡）
     * @param phoneNumber
     */
    isSMSChinaPhoneNumber(phoneNumber: string): boolean;
    /**
     * isSIMCard
     * @description - 手机卡(匹配所有)
     * @param simCardNumber
     */
    isSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaMobileSIMCard
     * @description - 手机卡(匹配中国移动)
     * @param simCardNumber
     */
    isChinaMobileSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaUnicomSIMCard
     * @description - 手机卡(中国联通)
     * @param simCardNumber
     */
    isChinaUnicomSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaTelecomSIMCard
     * @description - 手机卡(中国电信)
     * @param simCardNumber
     */
    isChinaTelecomSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaSARFTSIMCard
     * @description - 手机卡(中国广电)
     * @param simCardNumber
     */
    isChinaSARFTSIMCard(simCardNumber: string): boolean;
    /**
     * isINMARSATSIMCard
     * @description - 匹配北京船舶通信导航有限公司（海事卫星通信）
     * @param simCardNumber
     */
    isINMARSATSIMCard(simCardNumber: string): boolean;
    /**
     * isOnedowSIMCard
     * @description - 工业和信息化部应急通信保障中心（应急通信）
     * @param simCardNumber
     */
    isOnedowSIMCard(simCardNumber: string): boolean;
    /**
     * isVirtualSIMCard
     * @description - 匹配所有
     * @param simCardNumber
     */
    isVirtualSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaMobileVirtualSIMCard
     * @description - 匹配中国移动
     * @param simCardNumber
     */
    isChinaMobileVirtualSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaUnicomVirtualSIMCard
     * @description - 匹配中国联通
     * @param simCardNumber
     */
    isChinaUnicomVirtualSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaTelecomVirtualSIMCard
     * @description - 匹配中国电信
     * @param simCardNumber
     */
    isChinaTelecomVirtualSIMCard(simCardNumber: string): boolean;
    isIoTSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaMobileIoTSIMCard
     * @description - 匹配中国移动
     * @param simCardNumber
     */
    isChinaMobileIoTSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaUnicomIoTSIMCard
     * @description - 匹配中国联通
     * @param simCardNumber
     */
    isChinaUnicomIoTSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaTelecomIoTSIMCard
     * @description - 匹配中国电信
     * @param simCardNumber
     */
    isChinaTelecomIoTSIMCard(simCardNumber: string): boolean;
    isWIETSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaMobileWIETSIMCard
     * @description - 匹配中国移动
     * @param simCardNumber
     */
    isChinaMobileWIETSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaUnicomWIETSIMCard
     * @description - 匹配中国联通
     * @param simCardNumber
     */
    isChinaUnicomWIETSIMCard(simCardNumber: string): boolean;
    /**
     * isChinaTelecomWIETSIMCard
     * @description - 匹配中国电信
     * @param simCardNumber
     */
    isChinaTelecomWIETSIMCard(simCardNumber: string): boolean;
};
export default _default;
