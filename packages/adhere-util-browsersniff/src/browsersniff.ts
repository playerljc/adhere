import Browser from './browser';

let browserIns = null;

type browser = {
  browser: string;
  device: string;
  engine: string;
  language: string;
  os: string;
  osVersion: string;
  version: string;
};

/**
 * {
 *  browser: "Chrome"
    device: "PC"
    engine: "Blink"
    language: "zh_CN"
    os: "Windows"
    osVersion: "10.0"
    version: "94.0.4606.81"
 */
export default {
  getInstance(): browser {
    if (!browserIns) {
      browserIns = new Browser();
    }

    return browserIns as unknown as browser;
  },
  browser() {
    return this.getInstance().browser;
  },
  device() {
    return this.getInstance().device;
  },
  engine() {
    return this.getInstance().engine;
  },
  language() {
    return this.getInstance().language;
  },
  os() {
    return this.getInstance().os;
  },
  osVersion() {
    return this.getInstance().osVersion;
  },
  version() {
    return this.getInstance().version;
  },

  isBrowserSafari(): boolean {
    return this.browser().toLowerCase().indexOf('safari') !== -1;
  },
  isBrowserChrome(): boolean {
    return this.browser().toLowerCase().indexOf('chrome') !== -1;
  },
  isBrowserIE(): boolean {
    return this.browser().toLowerCase().indexOf('ie') !== -1;
  },
  isBrowserEdge(): boolean {
    return this.browser().toLowerCase().indexOf('edge') !== -1;
  },
  isBrowserFirefox(): boolean {
    return this.browser().toLowerCase().indexOf('firefox') !== -1;
  },
  isBrowserFirefoxFocus(): boolean {
    return this.browser().toLowerCase().indexOf('firefox focus') !== -1;
  },
  isBrowserChromium(): boolean {
    return this.browser().toLowerCase().indexOf('chromium') !== -1;
  },
  isBrowserOpera(): boolean {
    return this.browser().toLowerCase().indexOf('opera') !== -1;
  },
  isBrowserVivaldi(): boolean {
    return this.browser().toLowerCase().indexOf('vivaldi') !== -1;
  },
  isBrowserYandex(): boolean {
    return this.browser().toLowerCase().indexOf('yandex') !== -1;
  },
  isBrowserArora(): boolean {
    return this.browser().toLowerCase().indexOf('arora') !== -1;
  },
  isBrowserLunascape(): boolean {
    return this.browser().toLowerCase().indexOf('lunascape') !== -1;
  },
  isBrowserQupZilla(): boolean {
    return this.browser().toLowerCase().indexOf('qupzilla') !== -1;
  },
  isBrowserCocCoc(): boolean {
    return this.browser().toLowerCase().indexOf('coc coc') !== -1;
  },
  isBrowserKindle(): boolean {
    return this.browser().toLowerCase().indexOf('kindle') !== -1;
  },
  isBrowserIceweasel(): boolean {
    return this.browser().toLowerCase().indexOf('iceweasel') !== -1;
  },
  isBrowserKonqueror(): boolean {
    return this.browser().toLowerCase().indexOf('konqueror') !== -1;
  },
  isBrowserIceape(): boolean {
    return this.browser().toLowerCase().indexOf('iceape') !== -1;
  },
  isBrowserSeaMonkey(): boolean {
    return this.browser().toLowerCase().indexOf('seamonkey') !== -1;
  },
  isBrowserEpiphany(): boolean {
    return this.browser().toLowerCase().indexOf('epiphany') !== -1;
  },
  isBrowser360(): boolean {
    return this.browser().toLowerCase().indexOf('360') !== -1;
  },
  isBrowser360EE(): boolean {
    return this.browser().toLowerCase().indexOf('360ee') !== -1;
  },
  isBrowser360SE(): boolean {
    return this.browser().toLowerCase().indexOf('360se') !== -1;
  },
  isBrowserUC(): boolean {
    return this.browser().toLowerCase().indexOf('uc') !== -1;
  },
  isBrowserQQBrowser(): boolean {
    return this.browser().toLowerCase().indexOf('qqbrowser') !== -1;
  },
  isBrowserQQ(): boolean {
    return this.browser().toLowerCase().indexOf('qq') !== -1;
  },
  isBrowserBaidu(): boolean {
    return this.browser().toLowerCase().indexOf('baidu') !== -1;
  },
  isBrowserMaxthon(): boolean {
    return this.browser().toLowerCase().indexOf('maxthon') !== -1;
  },
  isBrowserSogou(): boolean {
    return this.browser().toLowerCase().indexOf('sogou') !== -1;
  },
  isBrowserLiebao(): boolean {
    return this.browser().toLowerCase().indexOf('liebao') !== -1;
  },
  isBrowser2345Explorer(): boolean {
    return this.browser().toLowerCase().indexOf('2345explorer') !== -1;
  },
  isBrowser115Browser(): boolean {
    return this.browser().toLowerCase().indexOf('115browser') !== -1;
  },
  isBrowserTheWorld(): boolean {
    return this.browser().toLowerCase().indexOf('theworld') !== -1;
  },
  isBrowserXiaoMi(): boolean {
    return this.browser().toLowerCase().indexOf('xiaomi') !== -1;
  },
  isBrowserQuark(): boolean {
    return this.browser().toLowerCase().indexOf('quark') !== -1;
  },
  isBrowserQiyu(): boolean {
    return this.browser().toLowerCase().indexOf('qiyu') !== -1;
  },
  isBrowserWechat(): boolean {
    return this.browser().toLowerCase().indexOf('wechat') !== -1;
  },
  isBrowserWechatWork(): boolean {
    return this.browser().toLowerCase().indexOf('wechatwork') !== -1;
  },
  isBrowserTaobao(): boolean {
    return this.browser().toLowerCase().indexOf('taobao') !== -1;
  },
  isBrowserAlipay(): boolean {
    return this.browser().toLowerCase().indexOf('alipay') !== -1;
  },
  isBrowserWeibo(): boolean {
    return this.browser().toLowerCase().indexOf('weibo') !== -1;
  },
  isBrowserDouban(): boolean {
    return this.browser().toLowerCase().indexOf('douban') !== -1;
  },
  isBrowserSuning(): boolean {
    return this.browser().toLowerCase().indexOf('suning') !== -1;
  },
  isBrowseriQiYi(): boolean {
    return this.browser().toLowerCase().indexOf('iqiyi') !== -1;
  },
  isBrowserDingTalk(): boolean {
    return this.browser().toLowerCase().indexOf('dingtalk') !== -1;
  },
  isBrowserHuawei(): boolean {
    return this.browser().toLowerCase().indexOf('huawei') !== -1;
  },
  isBrowserVivo(): boolean {
    return this.browser().toLowerCase().indexOf('vivo') !== -1;
  },
  isBrowserNightly(): boolean {
    return this.browser().toLowerCase().indexOf('nightly') !== -1;
  },

  isDevicePC(): boolean {
    return this.device().toLowerCase().indexOf('pc') !== -1;
  },
  isDeviceMobile(): boolean {
    return this.device().toLowerCase().indexOf('mobile') !== -1;
  },
  isDeviceTablet(): boolean {
    return this.device().toLowerCase().indexOf('tablet') !== -1;
  },

  isEngineWebKit(): boolean {
    return this.engine().toLowerCase().indexOf('webkit') !== -1;
  },
  isEngineTrident(): boolean {
    return this.engine().toLowerCase().indexOf('trident') !== -1;
  },
  isEngineGecko(): boolean {
    return this.engine().toLowerCase().indexOf('gecko') !== -1;
  },
  isEnginePresto(): boolean {
    return this.engine().toLowerCase().indexOf('presto') !== -1;
  },
  isEngineKHTML(): boolean {
    return this.engine().toLowerCase().indexOf('khtml') !== -1;
  },
  isEngineBlink(): boolean {
    return this.engine().toLowerCase().indexOf('blink') !== -1;
  },
  isEngineEdgeHTML(): boolean {
    return this.engine().toLowerCase().indexOf('edgehtml') !== -1;
  },

  iSOSWindows(): boolean {
    return this.os().toLowerCase().indexOf('windows') !== -1;
  },
  iSOSLinux(): boolean {
    return this.os().toLowerCase().indexOf('linux') !== -1;
  },
  iSOSMaxOS(): boolean {
    return this.os().toLowerCase().indexOf('mac os') !== -1;
  },
  iSOSAndroid(): boolean {
    return this.os().toLowerCase().indexOf('android') !== -1;
  },
  iSOSHarmonyOS(): boolean {
    return this.os().toLowerCase().indexOf('harmonyos') !== -1;
  },
  iSOSUbuntu(): boolean {
    return this.os().toLowerCase().indexOf('ubuntu') !== -1;
  },
  iSOSFreeBSD(): boolean {
    return this.os().toLowerCase().indexOf('freebsd') !== -1;
  },
  iSOSDebian(): boolean {
    return this.os().toLowerCase().indexOf('debian') !== -1;
  },
  iSOSiOS(): boolean {
    return this.os().toLowerCase().indexOf('ios') !== -1;
  },
  iSOSWindowsPhone(): boolean {
    return this.os().toLowerCase().indexOf('windows phone') !== -1;
  },
  iSOSBlackBerry(): boolean {
    return this.os().toLowerCase().indexOf('blackberry') !== -1;
  },
  iSOSMeeGo(): boolean {
    return this.os().toLowerCase().indexOf('meego') !== -1;
  },
  iSOSSymbian(): boolean {
    return this.os().toLowerCase().indexOf('symbian') !== -1;
  },
  iSOSChromeOS(): boolean {
    return this.os().toLowerCase().indexOf('chrome os') !== -1;
  },
  iSOSWebOS(): boolean {
    return this.os().toLowerCase().indexOf('webos') !== -1;
  },
};
