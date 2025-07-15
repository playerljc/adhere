import type { BrowserInfo, IBrowserSniff } from './types';
/**
 * 浏览器嗅探工具类
 *
 * 提供浏览器信息检测功能，包括：
 * - 浏览器类型检测
 * - 设备类型检测
 * - 渲染引擎检测
 * - 操作系统检测
 * - 版本信息获取
 *
 * @example
 * ```typescript
 * import Browsersniff from '@baifendian/adhere-util-browsersniff';
 *
 * // 获取浏览器信息
 * const browserInfo = Browsersniff.getInstance();
 * console.log(browserInfo.browser); // 'Chrome'
 * console.log(browserInfo.version); // '94.0.4606.81'
 *
 * // 检测特定浏览器
 * if (Browsersniff.isBrowserChrome()) {
 *   console.log('当前是Chrome浏览器');
 * }
 *
 * // 检测设备类型
 * if (Browsersniff.isDeviceMobile()) {
 *   console.log('当前是移动设备');
 * }
 * ```
 */
declare class BrowserSniff implements IBrowserSniff {
    /**
     * 获取浏览器信息实例
     *
     * 返回包含完整浏览器信息的对象，包括：
     * - browser: 浏览器名称
     * - device: 设备类型 (PC/Mobile/Tablet)
     * - engine: 渲染引擎
     * - language: 语言设置
     * - os: 操作系统
     * - osVersion: 操作系统版本
     * - version: 浏览器版本
     *
     * @returns 浏览器信息对象
     *
     * @example
     * ```typescript
     * const info = Browsersniff.getInstance();
     * console.log(info);
     * // {
     * //   browser: "Chrome",
     * //   device: "PC",
     * //   engine: "Blink",
     * //   language: "zh_CN",
     * //   os: "Windows",
     * //   osVersion: "10.0",
     * //   version: "94.0.4606.81"
     * // }
     * ```
     */
    getInstance(): BrowserInfo;
    /**
     * 获取浏览器名称
     * @returns 浏览器名称
     */
    browser(): string;
    /**
     * 获取设备类型
     * @returns 设备类型 (PC/Mobile/Tablet)
     */
    device(): string;
    /**
     * 获取渲染引擎
     * @returns 渲染引擎名称
     */
    engine(): string;
    /**
     * 获取语言设置
     * @returns 语言代码 (如: zh_CN, en_US)
     */
    language(): string;
    /**
     * 获取操作系统
     * @returns 操作系统名称
     */
    os(): string;
    /**
     * 获取操作系统版本
     * @returns 操作系统版本号
     */
    osVersion(): string;
    /**
     * 获取浏览器版本
     * @returns 浏览器版本号
     */
    version(): string;
    /**
     * 检测是否为Safari浏览器
     * @returns 是否为Safari浏览器
     */
    isBrowserSafari(): boolean;
    /**
     * 检测是否为Chrome浏览器
     * @returns 是否为Chrome浏览器
     */
    isBrowserChrome(): boolean;
    /**
     * 检测是否为IE浏览器
     * @returns 是否为IE浏览器
     */
    isBrowserIE(): boolean;
    /**
     * 检测是否为Edge浏览器
     * @returns 是否为Edge浏览器
     */
    isBrowserEdge(): boolean;
    /**
     * 检测是否为Firefox浏览器
     * @returns 是否为Firefox浏览器
     */
    isBrowserFirefox(): boolean;
    /**
     * 检测是否为Firefox Focus浏览器
     * @returns 是否为Firefox Focus浏览器
     */
    isBrowserFirefoxFocus(): boolean;
    /**
     * 检测是否为Chromium浏览器
     * @returns 是否为Chromium浏览器
     */
    isBrowserChromium(): boolean;
    /**
     * 检测是否为Opera浏览器
     * @returns 是否为Opera浏览器
     */
    isBrowserOpera(): boolean;
    /**
     * 检测是否为Vivaldi浏览器
     * @returns 是否为Vivaldi浏览器
     */
    isBrowserVivaldi(): boolean;
    /**
     * 检测是否为Yandex浏览器
     * @returns 是否为Yandex浏览器
     */
    isBrowserYandex(): boolean;
    /**
     * 检测是否为Arora浏览器
     * @returns 是否为Arora浏览器
     */
    isBrowserArora(): boolean;
    /**
     * 检测是否为Lunascape浏览器
     * @returns 是否为Lunascape浏览器
     */
    isBrowserLunascape(): boolean;
    /**
     * 检测是否为QupZilla浏览器
     * @returns 是否为QupZilla浏览器
     */
    isBrowserQupZilla(): boolean;
    /**
     * 检测是否为Coc Coc浏览器
     * @returns 是否为Coc Coc浏览器
     */
    isBrowserCocCoc(): boolean;
    /**
     * 检测是否为Kindle浏览器
     * @returns 是否为Kindle浏览器
     */
    isBrowserKindle(): boolean;
    /**
     * 检测是否为Iceweasel浏览器
     * @returns 是否为Iceweasel浏览器
     */
    isBrowserIceweasel(): boolean;
    /**
     * 检测是否为Konqueror浏览器
     * @returns 是否为Konqueror浏览器
     */
    isBrowserKonqueror(): boolean;
    /**
     * 检测是否为Iceape浏览器
     * @returns 是否为Iceape浏览器
     */
    isBrowserIceape(): boolean;
    /**
     * 检测是否为SeaMonkey浏览器
     * @returns 是否为SeaMonkey浏览器
     */
    isBrowserSeaMonkey(): boolean;
    /**
     * 检测是否为Epiphany浏览器
     * @returns 是否为Epiphany浏览器
     */
    isBrowserEpiphany(): boolean;
    /**
     * 检测是否为360浏览器
     * @returns 是否为360浏览器
     */
    isBrowser360(): boolean;
    /**
     * 检测是否为360极速浏览器
     * @returns 是否为360极速浏览器
     */
    isBrowser360EE(): boolean;
    /**
     * 检测是否为360安全浏览器
     * @returns 是否为360安全浏览器
     */
    isBrowser360SE(): boolean;
    /**
     * 检测是否为UC浏览器
     * @returns 是否为UC浏览器
     */
    isBrowserUC(): boolean;
    /**
     * 检测是否为QQ浏览器
     * @returns 是否为QQ浏览器
     */
    isBrowserQQBrowser(): boolean;
    /**
     * 检测是否为QQ内置浏览器
     * @returns 是否为QQ内置浏览器
     */
    isBrowserQQ(): boolean;
    /**
     * 检测是否为百度浏览器
     * @returns 是否为百度浏览器
     */
    isBrowserBaidu(): boolean;
    /**
     * 检测是否为傲游浏览器
     * @returns 是否为傲游浏览器
     */
    isBrowserMaxthon(): boolean;
    /**
     * 检测是否为搜狗浏览器
     * @returns 是否为搜狗浏览器
     */
    isBrowserSogou(): boolean;
    /**
     * 检测是否为猎豹浏览器
     * @returns 是否为猎豹浏览器
     */
    isBrowserLiebao(): boolean;
    /**
     * 检测是否为2345浏览器
     * @returns 是否为2345浏览器
     */
    isBrowser2345Explorer(): boolean;
    /**
     * 检测是否为115浏览器
     * @returns 是否为115浏览器
     */
    isBrowser115Browser(): boolean;
    /**
     * 检测是否为世界之窗浏览器
     * @returns 是否为世界之窗浏览器
     */
    isBrowserTheWorld(): boolean;
    /**
     * 检测是否为小米浏览器
     * @returns 是否为小米浏览器
     */
    isBrowserXiaoMi(): boolean;
    /**
     * 检测是否为夸克浏览器
     * @returns 是否为夸克浏览器
     */
    isBrowserQuark(): boolean;
    /**
     * 检测是否为旗鱼浏览器
     * @returns 是否为旗鱼浏览器
     */
    isBrowserQiyu(): boolean;
    /**
     * 检测是否为微信内置浏览器
     * @returns 是否为微信内置浏览器
     */
    isBrowserWechat(): boolean;
    /**
     * 检测是否为企业微信内置浏览器
     * @returns 是否为企业微信内置浏览器
     */
    isBrowserWechatWork(): boolean;
    /**
     * 检测是否为淘宝内置浏览器
     * @returns 是否为淘宝内置浏览器
     */
    isBrowserTaobao(): boolean;
    /**
     * 检测是否为支付宝内置浏览器
     * @returns 是否为支付宝内置浏览器
     */
    isBrowserAlipay(): boolean;
    /**
     * 检测是否为微博内置浏览器
     * @returns 是否为微博内置浏览器
     */
    isBrowserWeibo(): boolean;
    /**
     * 检测是否为豆瓣内置浏览器
     * @returns 是否为豆瓣内置浏览器
     */
    isBrowserDouban(): boolean;
    /**
     * 检测是否为苏宁内置浏览器
     * @returns 是否为苏宁内置浏览器
     */
    isBrowserSuning(): boolean;
    /**
     * 检测是否为爱奇艺内置浏览器
     * @returns 是否为爱奇艺内置浏览器
     */
    isBrowseriQiYi(): boolean;
    /**
     * 检测是否为钉钉内置浏览器
     * @returns 是否为钉钉内置浏览器
     */
    isBrowserDingTalk(): boolean;
    /**
     * 检测是否为华为浏览器
     * @returns 是否为华为浏览器
     */
    isBrowserHuawei(): boolean;
    /**
     * 检测是否为Vivo浏览器
     * @returns 是否为Vivo浏览器
     */
    isBrowserVivo(): boolean;
    /**
     * 检测是否为Firefox Nightly版本
     * @returns 是否为Firefox Nightly版本
     */
    isBrowserNightly(): boolean;
    /**
     * 检测是否为PC设备
     * @returns 是否为PC设备
     */
    isDevicePC(): boolean;
    /**
     * 检测是否为移动设备
     * @returns 是否为移动设备
     */
    isDeviceMobile(): boolean;
    /**
     * 检测是否为平板设备
     * @returns 是否为平板设备
     */
    isDeviceTablet(): boolean;
    /**
     * 检测是否为WebKit引擎
     * @returns 是否为WebKit引擎
     */
    isEngineWebKit(): boolean;
    /**
     * 检测是否为Trident引擎
     * @returns 是否为Trident引擎
     */
    isEngineTrident(): boolean;
    /**
     * 检测是否为Gecko引擎
     * @returns 是否为Gecko引擎
     */
    isEngineGecko(): boolean;
    /**
     * 检测是否为Presto引擎
     * @returns 是否为Presto引擎
     */
    isEnginePresto(): boolean;
    /**
     * 检测是否为KHTML引擎
     * @returns 是否为KHTML引擎
     */
    isEngineKHTML(): boolean;
    /**
     * 检测是否为Blink引擎
     * @returns 是否为Blink引擎
     */
    isEngineBlink(): boolean;
    /**
     * 检测是否为EdgeHTML引擎
     * @returns 是否为EdgeHTML引擎
     */
    isEngineEdgeHTML(): boolean;
    /**
     * 检测是否为Windows系统
     * @returns 是否为Windows系统
     */
    iSOSWindows(): boolean;
    /**
     * 检测是否为Linux系统
     * @returns 是否为Linux系统
     */
    iSOSLinux(): boolean;
    /**
     * 检测是否为macOS系统
     * @returns 是否为macOS系统
     */
    iSOSMaxOS(): boolean;
    /**
     * 检测是否为Android系统
     * @returns 是否为Android系统
     */
    iSOSAndroid(): boolean;
    /**
     * 检测是否为HarmonyOS系统
     * @returns 是否为HarmonyOS系统
     */
    iSOSHarmonyOS(): boolean;
    /**
     * 检测是否为Ubuntu系统
     * @returns 是否为Ubuntu系统
     */
    iSOSUbuntu(): boolean;
    /**
     * 检测是否为FreeBSD系统
     * @returns 是否为FreeBSD系统
     */
    iSOSFreeBSD(): boolean;
    /**
     * 检测是否为Debian系统
     * @returns 是否为Debian系统
     */
    iSOSDebian(): boolean;
    /**
     * 检测是否为iOS系统
     * @returns 是否为iOS系统
     */
    iSOSiOS(): boolean;
    /**
     * 检测是否为Windows Phone系统
     * @returns 是否为Windows Phone系统
     */
    iSOSWindowsPhone(): boolean;
    /**
     * 检测是否为BlackBerry系统
     * @returns 是否为BlackBerry系统
     */
    iSOSBlackBerry(): boolean;
    /**
     * 检测是否为MeeGo系统
     * @returns 是否为MeeGo系统
     */
    iSOSMeeGo(): boolean;
    /**
     * 检测是否为Symbian系统
     * @returns 是否为Symbian系统
     */
    iSOSSymbian(): boolean;
    /**
     * 检测是否为Chrome OS系统
     * @returns 是否为Chrome OS系统
     */
    iSOSChromeOS(): boolean;
    /**
     * 检测是否为WebOS系统
     * @returns 是否为WebOS系统
     */
    iSOSWebOS(): boolean;
}
declare const Browsersniff: BrowserSniff;
export default Browsersniff;
