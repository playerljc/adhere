import { BrowserInfo, BrowserMatch } from './types';

/**
 * 浏览器信息解析类
 * 支持浏览器和Node.js环境
 * 基于 https://github.com/mumuy/browser
 */
export default class Browser implements BrowserInfo {
  /** 浏览器名称 */
  public browser: string = '';
  /** 设备类型 */
  public device: string = 'PC';
  /** 渲染引擎 */
  public engine: string = '';
  /** 语言设置 */
  public language: string = '';
  /** 操作系统 */
  public os: string = '';
  /** 操作系统版本 */
  public osVersion: string = '';
  /** 浏览器版本 */
  public version: string = '';

  /**
   * 创建浏览器信息解析实例
   * @param userAgent - 用户代理字符串，如果不提供则使用当前环境的navigator.userAgent
   */
  constructor(userAgent?: string) {
    this.parseBrowserInfo(userAgent);
  }

  /**
   * 解析浏览器信息
   * @param userAgent - 用户代理字符串
   */
  private parseBrowserInfo(userAgent?: string): void {
    const u = userAgent || this.getUserAgent();
    const match = this.createBrowserMatch(u);
    
    // 处理360浏览器的特殊逻辑
    let is360 = this.detect360Browser(u);
    
    // 修正匹配结果
    this.correctMatchResults(match, is360, u);
    
    // 设置基本信息
    this.setBasicInfo(match);
    
    // 设置系统版本信息
    this.setOSVersion(u);
    
    // 设置浏览器版本信息
    this.setBrowserVersion(u);
    
    // 最终修正
    this.finalCorrections(u);
  }

  /**
   * 获取用户代理字符串
   * @returns 用户代理字符串
   */
  private getUserAgent(): string {
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      return navigator.userAgent;
    }
    return '';
  }

  /**
   * 创建浏览器匹配对象
   * @param ua - 用户代理字符串
   * @returns 浏览器匹配结果
   */
  private createBrowserMatch(ua: string): BrowserMatch {
    return {
      // 引擎
      Trident: ua.indexOf('Trident') > -1 || ua.indexOf('NET CLR') > -1,
      Presto: ua.indexOf('Presto') > -1,
      WebKit: ua.indexOf('AppleWebKit') > -1,
      Gecko: ua.indexOf('Gecko/') > -1,
      KHTML: ua.indexOf('KHTML/') > -1,

      // 浏览器
      Safari: ua.indexOf('Safari') > -1,
      Chrome: ua.indexOf('Chrome') > -1 || ua.indexOf('CriOS') > -1,
      IE: ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1,
      Edge: ua.indexOf('Edge') > -1 || ua.indexOf('Edg/') > -1,
      Firefox: ua.indexOf('Firefox') > -1 || ua.indexOf('FxiOS') > -1,
      'Firefox Focus': ua.indexOf('Focus') > -1,
      Chromium: ua.indexOf('Chromium') > -1,
      Opera: ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1,
      Vivaldi: ua.indexOf('Vivaldi') > -1,
      Yandex: ua.indexOf('YaBrowser') > -1,
      Arora: ua.indexOf('Arora') > -1,
      Lunascape: ua.indexOf('Lunascape') > -1,
      QupZilla: ua.indexOf('QupZilla') > -1,
      'Coc Coc': ua.indexOf('coc_coc_browser') > -1,
      Kindle: ua.indexOf('Kindle') > -1 || ua.indexOf('Silk/') > -1,
      Iceweasel: ua.indexOf('Iceweasel') > -1,
      Konqueror: ua.indexOf('Konqueror') > -1,
      Iceape: ua.indexOf('Iceape') > -1,
      SeaMonkey: ua.indexOf('SeaMonkey') > -1,
      Epiphany: ua.indexOf('Epiphany') > -1,
      360: ua.indexOf('QihooBrowser') > -1 || ua.indexOf('QHBrowser') > -1,
      '360EE': ua.indexOf('360EE') > -1,
      '360SE': ua.indexOf('360SE') > -1,
      UC: ua.indexOf('UCBrowser') > -1 || ua.indexOf(' UBrowser') > -1 || ua.indexOf('UCWEB') > -1,
      QQBrowser: ua.indexOf('QQBrowser') > -1,
      QQ: ua.indexOf('QQ/') > -1,
      Baidu: ua.indexOf('Baidu') > -1 || ua.indexOf('BIDUBrowser') > -1 || ua.indexOf('baidubrowser') > -1 || ua.indexOf('baiduboxapp') > -1 || ua.indexOf('BaiduHD') > -1,
      Maxthon: ua.indexOf('Maxthon') > -1,
      Sogou: ua.indexOf('MetaSr') > -1 || ua.indexOf('Sogou') > -1,
      Liebao: ua.indexOf('LBBROWSER') > -1 || ua.indexOf('LieBaoFast') > -1,
      '2345Explorer': ua.indexOf('2345Explorer') > -1 || ua.indexOf('Mb2345Browser') > -1 || ua.indexOf('2345chrome') > -1,
      '115Browser': ua.indexOf('115Browser') > -1,
      TheWorld: ua.indexOf('TheWorld') > -1,
      XiaoMi: ua.indexOf('MiuiBrowser') > -1,
      Quark: ua.indexOf('Quark') > -1,
      Qiyu: ua.indexOf('Qiyu') > -1,
      Wechat: ua.indexOf('MicroMessenger') > -1,
      WechatWork: ua.indexOf('wxwork/') > -1,
      Taobao: ua.indexOf('AliApp(TB') > -1,
      Alipay: ua.indexOf('AliApp(AP') > -1,
      Weibo: ua.indexOf('Weibo') > -1,
      Douban: ua.indexOf('com.douban.frodo') > -1,
      Suning: ua.indexOf('SNEBUY-APP') > -1,
      iQiYi: ua.indexOf('IqiyiApp') > -1,
      DingTalk: ua.indexOf('DingTalk') > -1,
      Huawei: ua.indexOf('HuaweiBrowser') > -1 || ua.indexOf('HUAWEI/') > -1 || ua.indexOf('HONOR') > -1,
      Vivo: ua.indexOf('VivoBrowser') > -1,

      // 系统或平台
      Windows: ua.indexOf('Windows') > -1,
      Linux: ua.indexOf('Linux') > -1 || ua.indexOf('X11') > -1,
      'Mac OS': ua.indexOf('Macintosh') > -1,
      Android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
      HarmonyOS: ua.indexOf('HarmonyOS') > -1,
      Ubuntu: ua.indexOf('Ubuntu') > -1,
      FreeBSD: ua.indexOf('FreeBSD') > -1,
      Debian: ua.indexOf('Debian') > -1,
      'Windows Phone': ua.indexOf('IEMobile') > -1 || ua.indexOf('Windows Phone') > -1,
      BlackBerry: ua.indexOf('BlackBerry') > -1 || ua.indexOf('RIM') > -1,
      MeeGo: ua.indexOf('MeeGo') > -1,
      Symbian: ua.indexOf('Symbian') > -1,
      iOS: ua.indexOf('like Mac OS X') > -1,
      'Chrome OS': ua.indexOf('CrOS') > -1,
      WebOS: ua.indexOf('hpwOS') > -1,

      // 设备
      Mobile: ua.indexOf('Mobi') > -1 || ua.indexOf('iPh') > -1 || ua.indexOf('480') > -1,
      Tablet: ua.indexOf('Tablet') > -1 || ua.indexOf('Pad') > -1 || ua.indexOf('Nexus 7') > -1,
    };
  }

  /**
   * 检测360浏览器
   * @param ua - 用户代理字符串
   * @returns 是否为360浏览器
   */
  private detect360Browser(ua: string): boolean {
    if (typeof window !== 'undefined' && (window as any).chrome) {
      const chromeVersion = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      
      if ((window as any).chrome.adblock2345 || (window as any).chrome.common2345) {
        return false; // 这是2345浏览器，不是360
      }
      
      if (this.checkMimeType('type', 'application/360softmgrplugin') || 
          this.checkMimeType('type', 'application/mozilla-npqihooquicklogin')) {
        return true;
      }
      
      if (parseInt(chromeVersion) > 36 && (window as any).showModalDialog) {
        return true;
      }
      
      if (parseInt(chromeVersion) > 45) {
        const is360 = this.checkMimeType('type', 'application/vnd.chromium.remoting-viewer');
        if (!is360 && parseInt(chromeVersion) >= 69) {
          return this.checkMimeType('type', 'application/hwepass2001.installepass2001') ||
                 this.checkMimeType('type', 'application/asx');
        }
        return is360;
      }
    }
    return false;
  }

  /**
   * 检查MIME类型
   * @param option - 检查选项
   * @param value - 检查值
   * @returns 是否存在该MIME类型
   */
  private checkMimeType(option: string, value: string): boolean {
    if (typeof navigator !== 'undefined' && navigator.mimeTypes) {
      for (const mt in navigator.mimeTypes) {
        if (navigator.mimeTypes[mt][option as keyof MimeType] === value) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * 修正匹配结果
   * @param match - 浏览器匹配结果
   * @param is360 - 是否为360浏览器
   * @param ua - 用户代理字符串
   */
  private correctMatchResults(match: BrowserMatch, is360: boolean, ua: string): void {
    // 修正移动设备检测
    if (match.Mobile) {
      match.Mobile = ua.indexOf('iPad') === -1;
    }
    
    // 修正360浏览器
    if (is360) {
      if (this.checkMimeType('type', 'application/gameplugin')) {
        match['360SE'] = true;
      } else if (typeof navigator !== 'undefined' && 
                 (navigator as any).connection && 
                 typeof ((navigator as any).connection as any).saveData === 'undefined') {
        match['360SE'] = true;
      } else {
        match['360EE'] = true;
      }
    }
    
    // 修正百度浏览器和Opera的冲突
    if (match.Baidu && match.Opera) {
      match.Baidu = false;
    }
    
    // 修正iOS Safari
    if (match.iOS) {
      match.Safari = true;
    }
  }

  /**
   * 设置基本信息
   * @param match - 浏览器匹配结果
   */
  private setBasicInfo(match: BrowserMatch): void {
    const hash = {
      engine: ['WebKit', 'Trident', 'Gecko', 'Presto', 'KHTML'],
      browser: [
        'Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera',
        'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle',
        'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', 'XiaoMi', 'Vivo',
        '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Huawei', 'Baidu', 'Maxthon',
        'Sogou', 'Liebao', '2345Explorer', '115Browser', 'TheWorld', 'Quark', 'Qiyu',
        'Wechat', 'WechatWork', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning',
        'iQiYi', 'DingTalk'
      ],
      os: [
        'Windows', 'Linux', 'Mac OS', 'Android', 'HarmonyOS', 'Ubuntu', 'FreeBSD',
        'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian',
        'Chrome OS', 'WebOS'
      ],
      device: ['Mobile', 'Tablet']
    };

    // 设置语言
    this.language = this.getLanguage();
    
    // 设置基本信息
    for (const category in hash) {
      const categoryKey = category as keyof typeof hash;
      for (const value of hash[categoryKey]) {
        if (match[value as keyof BrowserMatch]) {
          (this as any)[categoryKey] = value;
        }
      }
    }
  }

  /**
   * 获取语言设置
   * @returns 语言代码
   */
  private getLanguage(): string {
    if (typeof navigator !== 'undefined') {
      const g = (navigator as any).browserLanguage || navigator.language || 'en-US';
      const arr = g.split('-');
      if (arr[1]) {
        arr[1] = arr[1].toUpperCase();
      }
      return arr.join('_');
    }
    return 'en_US';
  }

  /**
   * 设置操作系统版本
   * @param ua - 用户代理字符串
   */
  private setOSVersion(ua: string): void {
    const osVersionMap: Record<string, (ua: string) => string> = {
      Windows: (ua: string) => {
        const v = ua.replace(/^Mozilla\/\d.0 \(Windows NT ([\d.]+)[;)].*$/, '$1');
        const hash: Record<string, string> = {
          '10': '10',
          '6.4': '10',
          '6.3': '8.1',
          '6.2': '8',
          '6.1': '7',
          '6.0': 'Vista',
          '5.2': 'XP',
          '5.1': 'XP',
          '5.0': '2000'
        };
        return hash[v] || v;
      },
      Android: (ua: string) => ua.replace(/^.*Android ([\d.]+);.*$/, '$1'),
      HarmonyOS: (ua: string) => {
        const v = ua.replace(/^Mozilla.*Android ([\d.]+)[;)].*$/, '$1');
        const hash: Record<string, string> = { '10': '2' };
        return hash[v] || '';
      },
      iOS: (ua: string) => ua.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.'),
      Debian: (ua: string) => ua.replace(/^.*Debian\/([\d.]+).*$/, '$1'),
      'Windows Phone': (ua: string) => ua.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2'),
      'Mac OS': (ua: string) => ua.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.'),
      WebOS: (ua: string) => ua.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1')
    };

    if (osVersionMap[this.os]) {
      this.osVersion = osVersionMap[this.os](ua);
      if (this.osVersion === ua) {
        this.osVersion = '';
      }
    }
  }

  /**
   * 设置浏览器版本
   * @param ua - 用户代理字符串
   */
  private setBrowserVersion(ua: string): void {
    const versionMap: Record<string, (ua: string) => string> = {
      Safari: (ua: string) => ua.replace(/^.*Version\/([\d.]+).*$/, '$1'),
      Chrome: (ua: string) => ua.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1'),
      IE: (ua: string) => ua.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1'),
      Edge: (ua: string) => ua.replace(/^.*Edge\/([\d.]+).*$/, '$1').replace(/^.*Edg\/([\d.]+).*$/, '$1'),
      Firefox: (ua: string) => ua.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1'),
      'Firefox Focus': (ua: string) => ua.replace(/^.*Focus\/([\d.]+).*$/, '$1'),
      Chromium: (ua: string) => ua.replace(/^.*Chromium\/([\d.]+).*$/, '$1'),
      Opera: (ua: string) => ua.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1'),
      Vivaldi: (ua: string) => ua.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1'),
      Yandex: (ua: string) => ua.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1'),
      Arora: (ua: string) => ua.replace(/^.*Arora\/([\d.]+).*$/, '$1'),
      Lunascape: (ua: string) => ua.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1'),
      QupZilla: (ua: string) => ua.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1'),
      'Coc Coc': (ua: string) => ua.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1'),
      Kindle: (ua: string) => ua.replace(/^.*Version\/([\d.]+).*$/, '$1'),
      Iceweasel: (ua: string) => ua.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1'),
      Konqueror: (ua: string) => ua.replace(/^.*Konqueror\/([\d.]+).*$/, '$1'),
      Iceape: (ua: string) => ua.replace(/^.*Iceape\/([\d.]+).*$/, '$1'),
      SeaMonkey: (ua: string) => ua.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1'),
      Epiphany: (ua: string) => ua.replace(/^.*Epiphany\/([\d.]+).*$/, '$1'),
      360: (ua: string) => ua.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1'),
      '360SE': (ua: string) => {
        const hash: Record<string, string> = {
          '86': '13.0', '78': '12.0', '69': '11.0', '63': '10.0', '55': '9.1',
          '45': '8.1', '42': '8.0', '31': '7.0', '21': '6.3'
        };
        const chromeVersion = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
        return hash[chromeVersion] || '';
      },
      '360EE': (ua: string) => {
        const hash: Record<string, string> = {
          '86': '13.0', '78': '12.0', '69': '11.0', '63': '9.5', '55': '9.0',
          '50': '8.7', '30': '7.5'
        };
        const chromeVersion = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
        return hash[chromeVersion] || '';
      },
      Maxthon: (ua: string) => ua.replace(/^.*Maxthon\/([\d.]+).*$/, '$1'),
      QQBrowser: (ua: string) => ua.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1'),
      QQ: (ua: string) => ua.replace(/^.*QQ\/([\d.]+).*$/, '$1'),
      Baidu: (ua: string) => ua.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1').replace(/^.*baiduboxapp\/([\d.]+).*$/, '$1'),
      UC: (ua: string) => ua.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1'),
      Sogou: (ua: string) => ua.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1'),
      Liebao: (ua: string) => {
        let version = '';
        if (ua.indexOf('LieBaoFast') > -1) {
          version = ua.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
        }
        const hash: Record<string, string> = {
          '57': '6.5', '49': '6.0', '46': '5.9', '42': '5.3', '39': '5.2',
          '34': '5.0', '29': '4.5', '21': '4.0'
        };
        const chromeVersion = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
        return version || hash[chromeVersion] || '';
      },
      '2345Explorer': (ua: string) => {
        const hash: Record<string, string> = { '69': '10.0', '55': '9.9' };
        const chromeVersion = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
        return hash[chromeVersion] || ua.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1').replace(/^.*Mb2345Browser\/([\d.]+).*$/, '$1');
      },
      '115Browser': (ua: string) => ua.replace(/^.*115Browser\/([\d.]+).*$/, '$1'),
      TheWorld: (ua: string) => ua.replace(/^.*TheWorld ([\d.]+).*$/, '$1'),
      XiaoMi: (ua: string) => ua.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1'),
      Vivo: (ua: string) => ua.replace(/^.*VivoBrowser\/([\d.]+).*$/, '$1'),
      Quark: (ua: string) => ua.replace(/^.*Quark\/([\d.]+).*$/, '$1'),
      Qiyu: (ua: string) => ua.replace(/^.*Qiyu\/([\d.]+).*$/, '$1'),
      Wechat: (ua: string) => ua.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1'),
      WechatWork: (ua: string) => ua.replace(/^.*wxwork\/([\d.]+).*$/, '$1'),
      Taobao: (ua: string) => ua.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1'),
      Alipay: (ua: string) => ua.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1'),
      Weibo: (ua: string) => ua.replace(/^.*weibo__([\d.]+).*$/, '$1'),
      Douban: (ua: string) => ua.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1'),
      Suning: (ua: string) => ua.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1'),
      iQiYi: (ua: string) => ua.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1'),
      DingTalk: (ua: string) => ua.replace(/^.*DingTalk\/([\d.]+).*$/, '$1'),
      Huawei: (ua: string) => ua.replace(/^.*Version\/([\d.]+).*$/, '$1').replace(/^.*HuaweiBrowser\/([\d.]+).*$/, '$1')
    };

    if (versionMap[this.browser]) {
      this.version = versionMap[this.browser](ua);
      if (this.version === ua) {
        this.version = '';
      }
    }
  }

  /**
   * 最终修正
   * @param ua - 用户代理字符串
   */
  private finalCorrections(ua: string): void {
    // 修正Chrome浏览器名称
    if (this.browser === 'Chrome' && ua.match(/\S+Browser/)) {
      const match = ua.match(/\S+Browser/);
      if (match) {
        this.browser = match[0];
        this.version = ua.replace(/^.*Browser\/([\d.]+).*$/, '$1');
      }
    }
    
    // 修正Firefox Nightly
    if (this.browser === 'Firefox' && typeof window !== 'undefined' && 
        ((window as any).clientInformation || !(window as any).u2f)) {
      this.browser += ' Nightly';
    }
    
    // 修正引擎
    if (this.browser === 'Edge') {
      this.engine = parseFloat(this.version) > 75 ? 'Blink' : 'EdgeHTML';
    } else if (ua.indexOf('Chrome') > -1 && this.engine === 'WebKit' && 
               parseInt(ua.replace(/^.*Chrome\/([\d]+).*$/, '$1')) > 27) {
      this.engine = 'Blink';
    } else if (this.browser === 'Opera' && parseInt(this.version) > 12) {
      this.engine = 'Blink';
    } else if (this.browser === 'Yandex') {
      this.engine = 'Blink';
    }
  }
} 