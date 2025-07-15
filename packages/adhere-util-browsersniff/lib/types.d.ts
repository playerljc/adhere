/**
 * 浏览器信息接口
 */
export interface BrowserInfo {
    /** 浏览器名称 */
    browser: string;
    /** 设备类型 */
    device: string;
    /** 渲染引擎 */
    engine: string;
    /** 语言设置 */
    language: string;
    /** 操作系统 */
    os: string;
    /** 操作系统版本 */
    osVersion: string;
    /** 浏览器版本 */
    version: string;
}
/**
 * 浏览器类型枚举
 */
export declare enum BrowserType {
    SAFARI = "Safari",
    CHROME = "Chrome",
    IE = "IE",
    EDGE = "Edge",
    FIREFOX = "Firefox",
    FIREFOX_FOCUS = "Firefox Focus",
    CHROMIUM = "Chromium",
    OPERA = "Opera",
    VIVALDI = "Vivaldi",
    YANDEX = "Yandex",
    ARORA = "Arora",
    LUNASCAPE = "Lunascape",
    QUQZILLA = "QupZilla",
    COC_COC = "Coc Coc",
    KINDLE = "Kindle",
    ICEWEASEL = "Iceweasel",
    KONQUEROR = "Konqueror",
    ICEAPE = "Iceape",
    SEAMONKEY = "SeaMonkey",
    EPIPHANY = "Epiphany",
    BROWSER_360 = "360",
    BROWSER_360EE = "360EE",
    BROWSER_360SE = "360SE",
    UC = "UC",
    QQ_BROWSER = "QQBrowser",
    QQ = "QQ",
    BAIDU = "Baidu",
    MAXTHON = "Maxthon",
    SOGOU = "Sogou",
    LIEBAO = "Liebao",
    EXPLORER_2345 = "2345Explorer",
    BROWSER_115 = "115Browser",
    THE_WORLD = "TheWorld",
    XIAOMI = "XiaoMi",
    QUARK = "Quark",
    QIYU = "Qiyu",
    WECHAT = "Wechat",
    WECHAT_WORK = "WechatWork",
    TAOBAO = "Taobao",
    ALIPAY = "Alipay",
    WEIBO = "Weibo",
    DOUBAN = "Douban",
    SUNING = "Suning",
    IQIYI = "iQiYi",
    DINGTALK = "DingTalk",
    HUAWEI = "Huawei",
    VIVO = "Vivo",
    NIGHTLY = "Nightly"
}
/**
 * 设备类型枚举
 */
export declare enum DeviceType {
    PC = "PC",
    MOBILE = "Mobile",
    TABLET = "Tablet"
}
/**
 * 渲染引擎类型枚举
 */
export declare enum EngineType {
    WEBKIT = "WebKit",
    TRIDENT = "Trident",
    GECKO = "Gecko",
    PRESTO = "Presto",
    KHTML = "KHTML",
    BLINK = "Blink",
    EDGEHTML = "EdgeHTML"
}
/**
 * 操作系统类型枚举
 */
export declare enum OSType {
    WINDOWS = "Windows",
    LINUX = "Linux",
    MAC_OS = "Mac OS",
    ANDROID = "Android",
    HARMONYOS = "HarmonyOS",
    UBUNTU = "Ubuntu",
    FREEBSD = "FreeBSD",
    DEBIAN = "Debian",
    IOS = "iOS",
    WINDOWS_PHONE = "Windows Phone",
    BLACKBERRY = "BlackBerry",
    MEEGO = "MeeGo",
    SYMBIAN = "Symbian",
    CHROME_OS = "Chrome OS",
    WEBOS = "WebOS"
}
/**
 * 浏览器匹配结果接口
 */
export interface BrowserMatch {
    Trident: boolean;
    Presto: boolean;
    WebKit: boolean;
    Gecko: boolean;
    KHTML: boolean;
    Safari: boolean;
    Chrome: boolean;
    IE: boolean;
    Edge: boolean;
    Firefox: boolean;
    'Firefox Focus': boolean;
    Chromium: boolean;
    Opera: boolean;
    Vivaldi: boolean;
    Yandex: boolean;
    Arora: boolean;
    Lunascape: boolean;
    QupZilla: boolean;
    'Coc Coc': boolean;
    Kindle: boolean;
    Iceweasel: boolean;
    Konqueror: boolean;
    Iceape: boolean;
    SeaMonkey: boolean;
    Epiphany: boolean;
    360: boolean;
    '360EE': boolean;
    '360SE': boolean;
    UC: boolean;
    QQBrowser: boolean;
    QQ: boolean;
    Baidu: boolean;
    Maxthon: boolean;
    Sogou: boolean;
    Liebao: boolean;
    '2345Explorer': boolean;
    '115Browser': boolean;
    TheWorld: boolean;
    XiaoMi: boolean;
    Quark: boolean;
    Qiyu: boolean;
    Wechat: boolean;
    WechatWork: boolean;
    Taobao: boolean;
    Alipay: boolean;
    Weibo: boolean;
    Douban: boolean;
    Suning: boolean;
    iQiYi: boolean;
    DingTalk: boolean;
    Huawei: boolean;
    Vivo: boolean;
    Windows: boolean;
    Linux: boolean;
    'Mac OS': boolean;
    Android: boolean;
    HarmonyOS: boolean;
    Ubuntu: boolean;
    FreeBSD: boolean;
    Debian: boolean;
    'Windows Phone': boolean;
    BlackBerry: boolean;
    MeeGo: boolean;
    Symbian: boolean;
    iOS: boolean;
    'Chrome OS': boolean;
    WebOS: boolean;
    Mobile: boolean;
    Tablet: boolean;
}
/**
 * 浏览器嗅探器接口
 */
export interface IBrowserSniff {
    getInstance(): BrowserInfo;
    browser(): string;
    device(): string;
    engine(): string;
    language(): string;
    os(): string;
    osVersion(): string;
    version(): string;
    isBrowserSafari(): boolean;
    isBrowserChrome(): boolean;
    isBrowserIE(): boolean;
    isBrowserEdge(): boolean;
    isBrowserFirefox(): boolean;
    isBrowserFirefoxFocus(): boolean;
    isBrowserChromium(): boolean;
    isBrowserOpera(): boolean;
    isBrowserVivaldi(): boolean;
    isBrowserYandex(): boolean;
    isBrowserArora(): boolean;
    isBrowserLunascape(): boolean;
    isBrowserQupZilla(): boolean;
    isBrowserCocCoc(): boolean;
    isBrowserKindle(): boolean;
    isBrowserIceweasel(): boolean;
    isBrowserKonqueror(): boolean;
    isBrowserIceape(): boolean;
    isBrowserSeaMonkey(): boolean;
    isBrowserEpiphany(): boolean;
    isBrowser360(): boolean;
    isBrowser360EE(): boolean;
    isBrowser360SE(): boolean;
    isBrowserUC(): boolean;
    isBrowserQQBrowser(): boolean;
    isBrowserQQ(): boolean;
    isBrowserBaidu(): boolean;
    isBrowserMaxthon(): boolean;
    isBrowserSogou(): boolean;
    isBrowserLiebao(): boolean;
    isBrowser2345Explorer(): boolean;
    isBrowser115Browser(): boolean;
    isBrowserTheWorld(): boolean;
    isBrowserXiaoMi(): boolean;
    isBrowserQuark(): boolean;
    isBrowserQiyu(): boolean;
    isBrowserWechat(): boolean;
    isBrowserWechatWork(): boolean;
    isBrowserTaobao(): boolean;
    isBrowserAlipay(): boolean;
    isBrowserWeibo(): boolean;
    isBrowserDouban(): boolean;
    isBrowserSuning(): boolean;
    isBrowseriQiYi(): boolean;
    isBrowserDingTalk(): boolean;
    isBrowserHuawei(): boolean;
    isBrowserVivo(): boolean;
    isBrowserNightly(): boolean;
    isDevicePC(): boolean;
    isDeviceMobile(): boolean;
    isDeviceTablet(): boolean;
    isEngineWebKit(): boolean;
    isEngineTrident(): boolean;
    isEngineGecko(): boolean;
    isEnginePresto(): boolean;
    isEngineKHTML(): boolean;
    isEngineBlink(): boolean;
    isEngineEdgeHTML(): boolean;
    iSOSWindows(): boolean;
    iSOSLinux(): boolean;
    iSOSMaxOS(): boolean;
    iSOSAndroid(): boolean;
    iSOSHarmonyOS(): boolean;
    iSOSUbuntu(): boolean;
    iSOSFreeBSD(): boolean;
    iSOSDebian(): boolean;
    iSOSiOS(): boolean;
    iSOSWindowsPhone(): boolean;
    iSOSBlackBerry(): boolean;
    iSOSMeeGo(): boolean;
    iSOSSymbian(): boolean;
    iSOSChromeOS(): boolean;
    iSOSWebOS(): boolean;
}
