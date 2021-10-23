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
    return this.browser() === 'Safari';
  },
  isBrowserChrome(): boolean {
    return this.browser() === 'Chrome';
  },
  isBrowserIE(): boolean {
    return this.browser() === 'IE';
  },
  isBrowserEdge(): boolean {
    return this.browser() === 'Edge';
  },
  isBrowserFirefox(): boolean {
    return this.browser() === 'Firefox';
  },
  isBrowserFirefoxFocus(): boolean {
    return this.browser() === 'Firefox Focus';
  },
  isBrowserChromium(): boolean {
    return this.browser() === 'Chromium';
  },
  isBrowserOpera(): boolean {
    return this.browser() === 'Opera';
  },
  isBrowserVivaldi(): boolean {
    return this.browser() === 'Vivaldi';
  },
  isBrowserYandex(): boolean {
    return this.browser() === 'Yandex';
  },
  isBrowserArora(): boolean {
    return this.browser() === 'Arora';
  },
  isBrowserLunascape(): boolean {
    return this.browser() === 'Lunascape';
  },
  isBrowserQupZilla(): boolean {
    return this.browser() === 'QupZilla';
  },
  isBrowserCocCoc(): boolean {
    return this.browser() === 'Coc Coc';
  },
  isBrowserKindle(): boolean {
    return this.browser() === 'Kindle';
  },
  isBrowserIceweasel(): boolean {
    return this.browser() === 'Iceweasel';
  },
  isBrowserKonqueror(): boolean {
    return this.browser() === 'Konqueror';
  },
  isBrowserIceape(): boolean {
    return this.browser() === 'Iceape';
  },
  isBrowserSeaMonkey(): boolean {
    return this.browser() === 'SeaMonkey';
  },
  isBrowserEpiphany(): boolean {
    return this.browser() === 'Epiphany';
  },
  isBrowser360(): boolean {
    return this.browser() === '360';
  },
  isBrowser360EE(): boolean {
    return this.browser() === '360EE';
  },
  isBrowser360SE(): boolean {
    return this.browser() === '360SE';
  },
  isBrowserUC(): boolean {
    return this.browser() === 'UC';
  },
  isBrowserQQBrowser(): boolean {
    return this.browser() === 'QQBrowser';
  },
  isBrowserQQ(): boolean {
    return this.browser() === 'QQ';
  },
  isBrowserBaidu(): boolean {
    return this.browser() === 'Baidu';
  },
  isBrowserMaxthon(): boolean {
    return this.browser() === 'Maxthon';
  },
  isBrowserSogou(): boolean {
    return this.browser() === 'Sogou';
  },
  isBrowserLiebao(): boolean {
    return this.browser() === 'Liebao';
  },
  isBrowser2345Explorer(): boolean {
    return this.browser() === '2345Explorer';
  },
  isBrowser115Browser(): boolean {
    return this.browser() === '115Browser';
  },
  isBrowserTheWorld(): boolean {
    return this.browser() === 'TheWorld';
  },
  isBrowserXiaoMi(): boolean {
    return this.browser() === 'XiaoMi';
  },
  isBrowserQuark(): boolean {
    return this.browser() === 'Quark';
  },
  isBrowserQiyu(): boolean {
    return this.browser() === 'Qiyu';
  },
  isBrowserWechat(): boolean {
    return this.browser() === 'Wechat';
  },
  isBrowserWechatWork(): boolean {
    return this.browser() === 'WechatWork';
  },
  isBrowserTaobao(): boolean {
    return this.browser() === 'Taobao';
  },
  isBrowserAlipay(): boolean {
    return this.browser() === 'Alipay';
  },
  isBrowserWeibo(): boolean {
    return this.browser() === 'Weibo';
  },
  isBrowserDouban(): boolean {
    return this.browser() === 'Douban';
  },
  isBrowserSuning(): boolean {
    return this.browser() === 'Suning';
  },
  isBrowseriQiYi(): boolean {
    return this.browser() === 'iQiYi';
  },
  isBrowserDingTalk(): boolean {
    return this.browser() === 'DingTalk';
  },
  isBrowserHuawei(): boolean {
    return this.browser() === 'Huawei';
  },
  isBrowserVivo(): boolean {
    return this.browser() === 'Vivo';
  },
  isBrowserNightly(): boolean {
    return this.browser() === 'Nightly';
  },

  isDevicePC(): boolean {
    return this.device() === 'PC';
  },
  isDeviceMobile(): boolean {
    return this.device() === 'Mobile';
  },
  isDeviceTablet(): boolean {
    return this.device() === 'Tablet';
  },

  isEngineWebKit(): boolean {
    return this.engine() === 'WebKit';
  },
  isEngineTrident(): boolean {
    return this.engine() === 'Trident';
  },
  isEngineGecko(): boolean {
    return this.engine() === 'Gecko';
  },
  isEnginePresto(): boolean {
    return this.engine() === 'Presto';
  },
  isEngineKHTML(): boolean {
    return this.engine() === 'KHTML';
  },
  isEngineBlink(): boolean {
    return this.engine() === 'Blink';
  },
  isEngineEdgeHTML(): boolean {
    return this.engine() === 'EdgeHTML';
  },

  iSOSWindows(): boolean {
    return this.os() === 'Windows';
  },
  iSOSLinux(): boolean {
    return this.os() === 'Linux';
  },
  iSOSMaxOS(): boolean {
    return this.os() === 'Mac OS';
  },
  iSOSAndroid(): boolean {
    return this.os() === 'Android';
  },
  iSOSHarmonyOS(): boolean {
    return this.os() === 'HarmonyOS';
  },
  iSOSUbuntu(): boolean {
    return this.os() === 'Ubuntu';
  },
  iSOSFreeBSD(): boolean {
    return this.os() === 'FreeBSD';
  },
  iSOSDebian(): boolean {
    return this.os() === 'Debian';
  },
  iSOSiOS(): boolean {
    return this.os() === 'iOS';
  },
  iSOSWindowsPhone(): boolean {
    return this.os() === 'Windows Phone';
  },
  iSOSBlackBerry(): boolean {
    return this.os() === 'BlackBerry';
  },
  iSOSMeeGo(): boolean {
    return this.os() === 'MeeGo';
  },
  iSOSSymbian(): boolean {
    return this.os() === 'Symbian';
  },
  iSOSChromeOS(): boolean {
    return this.os() === 'Chrome OS';
  },
  iSOSWebOS(): boolean {
    return this.os() === 'WebOS';
  },
};
