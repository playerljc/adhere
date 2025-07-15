import Browser from './browser';
import type { BrowserInfo, IBrowserSniff } from './types';

/**
 * 浏览器嗅探器单例实例
 */
let browserInstance: BrowserInfo | undefined;

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
class BrowserSniff implements IBrowserSniff {
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
  getInstance(): BrowserInfo {
    if (!browserInstance) {
      browserInstance = new Browser();
    }
    return browserInstance as BrowserInfo;
  }

  /**
   * 获取浏览器名称
   * @returns 浏览器名称
   */
  browser(): string {
    return this.getInstance().browser;
  }

  /**
   * 获取设备类型
   * @returns 设备类型 (PC/Mobile/Tablet)
   */
  device(): string {
    return this.getInstance().device;
  }

  /**
   * 获取渲染引擎
   * @returns 渲染引擎名称
   */
  engine(): string {
    return this.getInstance().engine;
  }

  /**
   * 获取语言设置
   * @returns 语言代码 (如: zh_CN, en_US)
   */
  language(): string {
    return this.getInstance().language;
  }

  /**
   * 获取操作系统
   * @returns 操作系统名称
   */
  os(): string {
    return this.getInstance().os;
  }

  /**
   * 获取操作系统版本
   * @returns 操作系统版本号
   */
  osVersion(): string {
    return this.getInstance().osVersion;
  }

  /**
   * 获取浏览器版本
   * @returns 浏览器版本号
   */
  version(): string {
    return this.getInstance().version;
  }

  // ==================== 浏览器检测方法 ====================

  /**
   * 检测是否为Safari浏览器
   * @returns 是否为Safari浏览器
   */
  isBrowserSafari(): boolean {
    return this.browser().toLowerCase().includes('safari');
  }

  /**
   * 检测是否为Chrome浏览器
   * @returns 是否为Chrome浏览器
   */
  isBrowserChrome(): boolean {
    return this.browser().toLowerCase().includes('chrome');
  }

  /**
   * 检测是否为IE浏览器
   * @returns 是否为IE浏览器
   */
  isBrowserIE(): boolean {
    return this.browser().toLowerCase().includes('ie');
  }

  /**
   * 检测是否为Edge浏览器
   * @returns 是否为Edge浏览器
   */
  isBrowserEdge(): boolean {
    return this.browser().toLowerCase().includes('edge');
  }

  /**
   * 检测是否为Firefox浏览器
   * @returns 是否为Firefox浏览器
   */
  isBrowserFirefox(): boolean {
    return this.browser().toLowerCase().includes('firefox');
  }

  /**
   * 检测是否为Firefox Focus浏览器
   * @returns 是否为Firefox Focus浏览器
   */
  isBrowserFirefoxFocus(): boolean {
    return this.browser().toLowerCase().includes('firefox focus');
  }

  /**
   * 检测是否为Chromium浏览器
   * @returns 是否为Chromium浏览器
   */
  isBrowserChromium(): boolean {
    return this.browser().toLowerCase().includes('chromium');
  }

  /**
   * 检测是否为Opera浏览器
   * @returns 是否为Opera浏览器
   */
  isBrowserOpera(): boolean {
    return this.browser().toLowerCase().includes('opera');
  }

  /**
   * 检测是否为Vivaldi浏览器
   * @returns 是否为Vivaldi浏览器
   */
  isBrowserVivaldi(): boolean {
    return this.browser().toLowerCase().includes('vivaldi');
  }

  /**
   * 检测是否为Yandex浏览器
   * @returns 是否为Yandex浏览器
   */
  isBrowserYandex(): boolean {
    return this.browser().toLowerCase().includes('yandex');
  }

  /**
   * 检测是否为Arora浏览器
   * @returns 是否为Arora浏览器
   */
  isBrowserArora(): boolean {
    return this.browser().toLowerCase().includes('arora');
  }

  /**
   * 检测是否为Lunascape浏览器
   * @returns 是否为Lunascape浏览器
   */
  isBrowserLunascape(): boolean {
    return this.browser().toLowerCase().includes('lunascape');
  }

  /**
   * 检测是否为QupZilla浏览器
   * @returns 是否为QupZilla浏览器
   */
  isBrowserQupZilla(): boolean {
    return this.browser().toLowerCase().includes('qupzilla');
  }

  /**
   * 检测是否为Coc Coc浏览器
   * @returns 是否为Coc Coc浏览器
   */
  isBrowserCocCoc(): boolean {
    return this.browser().toLowerCase().includes('coc coc');
  }

  /**
   * 检测是否为Kindle浏览器
   * @returns 是否为Kindle浏览器
   */
  isBrowserKindle(): boolean {
    return this.browser().toLowerCase().includes('kindle');
  }

  /**
   * 检测是否为Iceweasel浏览器
   * @returns 是否为Iceweasel浏览器
   */
  isBrowserIceweasel(): boolean {
    return this.browser().toLowerCase().includes('iceweasel');
  }

  /**
   * 检测是否为Konqueror浏览器
   * @returns 是否为Konqueror浏览器
   */
  isBrowserKonqueror(): boolean {
    return this.browser().toLowerCase().includes('konqueror');
  }

  /**
   * 检测是否为Iceape浏览器
   * @returns 是否为Iceape浏览器
   */
  isBrowserIceape(): boolean {
    return this.browser().toLowerCase().includes('iceape');
  }

  /**
   * 检测是否为SeaMonkey浏览器
   * @returns 是否为SeaMonkey浏览器
   */
  isBrowserSeaMonkey(): boolean {
    return this.browser().toLowerCase().includes('seamonkey');
  }

  /**
   * 检测是否为Epiphany浏览器
   * @returns 是否为Epiphany浏览器
   */
  isBrowserEpiphany(): boolean {
    return this.browser().toLowerCase().includes('epiphany');
  }

  /**
   * 检测是否为360浏览器
   * @returns 是否为360浏览器
   */
  isBrowser360(): boolean {
    return this.browser().toLowerCase().includes('360');
  }

  /**
   * 检测是否为360极速浏览器
   * @returns 是否为360极速浏览器
   */
  isBrowser360EE(): boolean {
    return this.browser().toLowerCase().includes('360ee');
  }

  /**
   * 检测是否为360安全浏览器
   * @returns 是否为360安全浏览器
   */
  isBrowser360SE(): boolean {
    return this.browser().toLowerCase().includes('360se');
  }

  /**
   * 检测是否为UC浏览器
   * @returns 是否为UC浏览器
   */
  isBrowserUC(): boolean {
    return this.browser().toLowerCase().includes('uc');
  }

  /**
   * 检测是否为QQ浏览器
   * @returns 是否为QQ浏览器
   */
  isBrowserQQBrowser(): boolean {
    return this.browser().toLowerCase().includes('qqbrowser');
  }

  /**
   * 检测是否为QQ内置浏览器
   * @returns 是否为QQ内置浏览器
   */
  isBrowserQQ(): boolean {
    return this.browser().toLowerCase().includes('qq');
  }

  /**
   * 检测是否为百度浏览器
   * @returns 是否为百度浏览器
   */
  isBrowserBaidu(): boolean {
    return this.browser().toLowerCase().includes('baidu');
  }

  /**
   * 检测是否为傲游浏览器
   * @returns 是否为傲游浏览器
   */
  isBrowserMaxthon(): boolean {
    return this.browser().toLowerCase().includes('maxthon');
  }

  /**
   * 检测是否为搜狗浏览器
   * @returns 是否为搜狗浏览器
   */
  isBrowserSogou(): boolean {
    return this.browser().toLowerCase().includes('sogou');
  }

  /**
   * 检测是否为猎豹浏览器
   * @returns 是否为猎豹浏览器
   */
  isBrowserLiebao(): boolean {
    return this.browser().toLowerCase().includes('liebao');
  }

  /**
   * 检测是否为2345浏览器
   * @returns 是否为2345浏览器
   */
  isBrowser2345Explorer(): boolean {
    return this.browser().toLowerCase().includes('2345explorer');
  }

  /**
   * 检测是否为115浏览器
   * @returns 是否为115浏览器
   */
  isBrowser115Browser(): boolean {
    return this.browser().toLowerCase().includes('115browser');
  }

  /**
   * 检测是否为世界之窗浏览器
   * @returns 是否为世界之窗浏览器
   */
  isBrowserTheWorld(): boolean {
    return this.browser().toLowerCase().includes('theworld');
  }

  /**
   * 检测是否为小米浏览器
   * @returns 是否为小米浏览器
   */
  isBrowserXiaoMi(): boolean {
    return this.browser().toLowerCase().includes('xiaomi');
  }

  /**
   * 检测是否为夸克浏览器
   * @returns 是否为夸克浏览器
   */
  isBrowserQuark(): boolean {
    return this.browser().toLowerCase().includes('quark');
  }

  /**
   * 检测是否为旗鱼浏览器
   * @returns 是否为旗鱼浏览器
   */
  isBrowserQiyu(): boolean {
    return this.browser().toLowerCase().includes('qiyu');
  }

  /**
   * 检测是否为微信内置浏览器
   * @returns 是否为微信内置浏览器
   */
  isBrowserWechat(): boolean {
    return this.browser().toLowerCase().includes('wechat');
  }

  /**
   * 检测是否为企业微信内置浏览器
   * @returns 是否为企业微信内置浏览器
   */
  isBrowserWechatWork(): boolean {
    return this.browser().toLowerCase().includes('wechatwork');
  }

  /**
   * 检测是否为淘宝内置浏览器
   * @returns 是否为淘宝内置浏览器
   */
  isBrowserTaobao(): boolean {
    return this.browser().toLowerCase().includes('taobao');
  }

  /**
   * 检测是否为支付宝内置浏览器
   * @returns 是否为支付宝内置浏览器
   */
  isBrowserAlipay(): boolean {
    return this.browser().toLowerCase().includes('alipay');
  }

  /**
   * 检测是否为微博内置浏览器
   * @returns 是否为微博内置浏览器
   */
  isBrowserWeibo(): boolean {
    return this.browser().toLowerCase().includes('weibo');
  }

  /**
   * 检测是否为豆瓣内置浏览器
   * @returns 是否为豆瓣内置浏览器
   */
  isBrowserDouban(): boolean {
    return this.browser().toLowerCase().includes('douban');
  }

  /**
   * 检测是否为苏宁内置浏览器
   * @returns 是否为苏宁内置浏览器
   */
  isBrowserSuning(): boolean {
    return this.browser().toLowerCase().includes('suning');
  }

  /**
   * 检测是否为爱奇艺内置浏览器
   * @returns 是否为爱奇艺内置浏览器
   */
  isBrowseriQiYi(): boolean {
    return this.browser().toLowerCase().includes('iqiyi');
  }

  /**
   * 检测是否为钉钉内置浏览器
   * @returns 是否为钉钉内置浏览器
   */
  isBrowserDingTalk(): boolean {
    return this.browser().toLowerCase().includes('dingtalk');
  }

  /**
   * 检测是否为华为浏览器
   * @returns 是否为华为浏览器
   */
  isBrowserHuawei(): boolean {
    return this.browser().toLowerCase().includes('huawei');
  }

  /**
   * 检测是否为Vivo浏览器
   * @returns 是否为Vivo浏览器
   */
  isBrowserVivo(): boolean {
    return this.browser().toLowerCase().includes('vivo');
  }

  /**
   * 检测是否为Firefox Nightly版本
   * @returns 是否为Firefox Nightly版本
   */
  isBrowserNightly(): boolean {
    return this.browser().toLowerCase().includes('nightly');
  }

  // ==================== 设备检测方法 ====================

  /**
   * 检测是否为PC设备
   * @returns 是否为PC设备
   */
  isDevicePC(): boolean {
    return this.device().toLowerCase().includes('pc');
  }

  /**
   * 检测是否为移动设备
   * @returns 是否为移动设备
   */
  isDeviceMobile(): boolean {
    return this.device().toLowerCase().includes('mobile');
  }

  /**
   * 检测是否为平板设备
   * @returns 是否为平板设备
   */
  isDeviceTablet(): boolean {
    return this.device().toLowerCase().includes('tablet');
  }

  // ==================== 引擎检测方法 ====================

  /**
   * 检测是否为WebKit引擎
   * @returns 是否为WebKit引擎
   */
  isEngineWebKit(): boolean {
    return this.engine().toLowerCase().includes('webkit');
  }

  /**
   * 检测是否为Trident引擎
   * @returns 是否为Trident引擎
   */
  isEngineTrident(): boolean {
    return this.engine().toLowerCase().includes('trident');
  }

  /**
   * 检测是否为Gecko引擎
   * @returns 是否为Gecko引擎
   */
  isEngineGecko(): boolean {
    return this.engine().toLowerCase().includes('gecko');
  }

  /**
   * 检测是否为Presto引擎
   * @returns 是否为Presto引擎
   */
  isEnginePresto(): boolean {
    return this.engine().toLowerCase().includes('presto');
  }

  /**
   * 检测是否为KHTML引擎
   * @returns 是否为KHTML引擎
   */
  isEngineKHTML(): boolean {
    return this.engine().toLowerCase().includes('khtml');
  }

  /**
   * 检测是否为Blink引擎
   * @returns 是否为Blink引擎
   */
  isEngineBlink(): boolean {
    return this.engine().toLowerCase().includes('blink');
  }

  /**
   * 检测是否为EdgeHTML引擎
   * @returns 是否为EdgeHTML引擎
   */
  isEngineEdgeHTML(): boolean {
    return this.engine().toLowerCase().includes('edgehtml');
  }

  // ==================== 操作系统检测方法 ====================

  /**
   * 检测是否为Windows系统
   * @returns 是否为Windows系统
   */
  iSOSWindows(): boolean {
    return this.os().toLowerCase().includes('windows');
  }

  /**
   * 检测是否为Linux系统
   * @returns 是否为Linux系统
   */
  iSOSLinux(): boolean {
    return this.os().toLowerCase().includes('linux');
  }

  /**
   * 检测是否为macOS系统
   * @returns 是否为macOS系统
   */
  iSOSMaxOS(): boolean {
    return this.os().toLowerCase().includes('mac os');
  }

  /**
   * 检测是否为Android系统
   * @returns 是否为Android系统
   */
  iSOSAndroid(): boolean {
    return this.os().toLowerCase().includes('android');
  }

  /**
   * 检测是否为HarmonyOS系统
   * @returns 是否为HarmonyOS系统
   */
  iSOSHarmonyOS(): boolean {
    return this.os().toLowerCase().includes('harmonyos');
  }

  /**
   * 检测是否为Ubuntu系统
   * @returns 是否为Ubuntu系统
   */
  iSOSUbuntu(): boolean {
    return this.os().toLowerCase().includes('ubuntu');
  }

  /**
   * 检测是否为FreeBSD系统
   * @returns 是否为FreeBSD系统
   */
  iSOSFreeBSD(): boolean {
    return this.os().toLowerCase().includes('freebsd');
  }

  /**
   * 检测是否为Debian系统
   * @returns 是否为Debian系统
   */
  iSOSDebian(): boolean {
    return this.os().toLowerCase().includes('debian');
  }

  /**
   * 检测是否为iOS系统
   * @returns 是否为iOS系统
   */
  iSOSiOS(): boolean {
    return this.os().toLowerCase().includes('ios');
  }

  /**
   * 检测是否为Windows Phone系统
   * @returns 是否为Windows Phone系统
   */
  iSOSWindowsPhone(): boolean {
    return this.os().toLowerCase().includes('windows phone');
  }

  /**
   * 检测是否为BlackBerry系统
   * @returns 是否为BlackBerry系统
   */
  iSOSBlackBerry(): boolean {
    return this.os().toLowerCase().includes('blackberry');
  }

  /**
   * 检测是否为MeeGo系统
   * @returns 是否为MeeGo系统
   */
  iSOSMeeGo(): boolean {
    return this.os().toLowerCase().includes('meego');
  }

  /**
   * 检测是否为Symbian系统
   * @returns 是否为Symbian系统
   */
  iSOSSymbian(): boolean {
    return this.os().toLowerCase().includes('symbian');
  }

  /**
   * 检测是否为Chrome OS系统
   * @returns 是否为Chrome OS系统
   */
  iSOSChromeOS(): boolean {
    return this.os().toLowerCase().includes('chrome os');
  }

  /**
   * 检测是否为WebOS系统
   * @returns 是否为WebOS系统
   */
  iSOSWebOS(): boolean {
    return this.os().toLowerCase().includes('webos');
  }
}

// 创建并导出单例实例
const Browsersniff = new BrowserSniff();

export default Browsersniff;
