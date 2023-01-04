import Browser from"./browser";var browserIns;export default{getInstance:function(){return browserIns||(console.log("Browser",Browser),browserIns=new Browser),browserIns},browser:function(){return this.getInstance().browser},device:function(){return this.getInstance().device},engine:function(){return this.getInstance().engine},language:function(){return this.getInstance().language},os:function(){return this.getInstance().os},osVersion:function(){return this.getInstance().osVersion},version:function(){return this.getInstance().version},isBrowserSafari:function(){return-1!==this.browser().toLowerCase().indexOf("safari")},isBrowserChrome:function(){return-1!==this.browser().toLowerCase().indexOf("chrome")},isBrowserIE:function(){return-1!==this.browser().toLowerCase().indexOf("ie")},isBrowserEdge:function(){return-1!==this.browser().toLowerCase().indexOf("edge")},isBrowserFirefox:function(){return-1!==this.browser().toLowerCase().indexOf("firefox")},isBrowserFirefoxFocus:function(){return-1!==this.browser().toLowerCase().indexOf("firefox focus")},isBrowserChromium:function(){return-1!==this.browser().toLowerCase().indexOf("chromium")},isBrowserOpera:function(){return-1!==this.browser().toLowerCase().indexOf("opera")},isBrowserVivaldi:function(){return-1!==this.browser().toLowerCase().indexOf("vivaldi")},isBrowserYandex:function(){return-1!==this.browser().toLowerCase().indexOf("yandex")},isBrowserArora:function(){return-1!==this.browser().toLowerCase().indexOf("arora")},isBrowserLunascape:function(){return-1!==this.browser().toLowerCase().indexOf("lunascape")},isBrowserQupZilla:function(){return-1!==this.browser().toLowerCase().indexOf("qupzilla")},isBrowserCocCoc:function(){return-1!==this.browser().toLowerCase().indexOf("coc coc")},isBrowserKindle:function(){return-1!==this.browser().toLowerCase().indexOf("kindle")},isBrowserIceweasel:function(){return-1!==this.browser().toLowerCase().indexOf("iceweasel")},isBrowserKonqueror:function(){return-1!==this.browser().toLowerCase().indexOf("konqueror")},isBrowserIceape:function(){return-1!==this.browser().toLowerCase().indexOf("iceape")},isBrowserSeaMonkey:function(){return-1!==this.browser().toLowerCase().indexOf("seamonkey")},isBrowserEpiphany:function(){return-1!==this.browser().toLowerCase().indexOf("epiphany")},isBrowser360:function(){return-1!==this.browser().toLowerCase().indexOf("360")},isBrowser360EE:function(){return-1!==this.browser().toLowerCase().indexOf("360ee")},isBrowser360SE:function(){return-1!==this.browser().toLowerCase().indexOf("360se")},isBrowserUC:function(){return-1!==this.browser().toLowerCase().indexOf("uc")},isBrowserQQBrowser:function(){return-1!==this.browser().toLowerCase().indexOf("qqbrowser")},isBrowserQQ:function(){return-1!==this.browser().toLowerCase().indexOf("qq")},isBrowserBaidu:function(){return-1!==this.browser().toLowerCase().indexOf("baidu")},isBrowserMaxthon:function(){return-1!==this.browser().toLowerCase().indexOf("maxthon")},isBrowserSogou:function(){return-1!==this.browser().toLowerCase().indexOf("sogou")},isBrowserLiebao:function(){return-1!==this.browser().toLowerCase().indexOf("liebao")},isBrowser2345Explorer:function(){return-1!==this.browser().toLowerCase().indexOf("2345explorer")},isBrowser115Browser:function(){return-1!==this.browser().toLowerCase().indexOf("115browser")},isBrowserTheWorld:function(){return-1!==this.browser().toLowerCase().indexOf("theworld")},isBrowserXiaoMi:function(){return-1!==this.browser().toLowerCase().indexOf("xiaomi")},isBrowserQuark:function(){return-1!==this.browser().toLowerCase().indexOf("quark")},isBrowserQiyu:function(){return-1!==this.browser().toLowerCase().indexOf("qiyu")},isBrowserWechat:function(){return-1!==this.browser().toLowerCase().indexOf("wechat")},isBrowserWechatWork:function(){return-1!==this.browser().toLowerCase().indexOf("wechatwork")},isBrowserTaobao:function(){return-1!==this.browser().toLowerCase().indexOf("taobao")},isBrowserAlipay:function(){return-1!==this.browser().toLowerCase().indexOf("alipay")},isBrowserWeibo:function(){return-1!==this.browser().toLowerCase().indexOf("weibo")},isBrowserDouban:function(){return-1!==this.browser().toLowerCase().indexOf("douban")},isBrowserSuning:function(){return-1!==this.browser().toLowerCase().indexOf("suning")},isBrowseriQiYi:function(){return-1!==this.browser().toLowerCase().indexOf("iqiyi")},isBrowserDingTalk:function(){return-1!==this.browser().toLowerCase().indexOf("dingtalk")},isBrowserHuawei:function(){return-1!==this.browser().toLowerCase().indexOf("huawei")},isBrowserVivo:function(){return-1!==this.browser().toLowerCase().indexOf("vivo")},isBrowserNightly:function(){return-1!==this.browser().toLowerCase().indexOf("nightly")},isDevicePC:function(){return-1!==this.device().toLowerCase().indexOf("pc")},isDeviceMobile:function(){return-1!==this.device().toLowerCase().indexOf("mobile")},isDeviceTablet:function(){return-1!==this.device().toLowerCase().indexOf("tablet")},isEngineWebKit:function(){return-1!==this.engine().toLowerCase().indexOf("webkit")},isEngineTrident:function(){return-1!==this.engine().toLowerCase().indexOf("trident")},isEngineGecko:function(){return-1!==this.engine().toLowerCase().indexOf("gecko")},isEnginePresto:function(){return-1!==this.engine().toLowerCase().indexOf("presto")},isEngineKHTML:function(){return-1!==this.engine().toLowerCase().indexOf("khtml")},isEngineBlink:function(){return-1!==this.engine().toLowerCase().indexOf("blink")},isEngineEdgeHTML:function(){return-1!==this.engine().toLowerCase().indexOf("edgehtml")},iSOSWindows:function(){return-1!==this.os().toLowerCase().indexOf("windows")},iSOSLinux:function(){return-1!==this.os().toLowerCase().indexOf("linux")},iSOSMaxOS:function(){return-1!==this.os().toLowerCase().indexOf("mac os")},iSOSAndroid:function(){return-1!==this.os().toLowerCase().indexOf("android")},iSOSHarmonyOS:function(){return-1!==this.os().toLowerCase().indexOf("harmonyos")},iSOSUbuntu:function(){return-1!==this.os().toLowerCase().indexOf("ubuntu")},iSOSFreeBSD:function(){return-1!==this.os().toLowerCase().indexOf("freebsd")},iSOSDebian:function(){return-1!==this.os().toLowerCase().indexOf("debian")},iSOSiOS:function(){return-1!==this.os().toLowerCase().indexOf("ios")},iSOSWindowsPhone:function(){return-1!==this.os().toLowerCase().indexOf("windows phone")},iSOSBlackBerry:function(){return-1!==this.os().toLowerCase().indexOf("blackberry")},iSOSMeeGo:function(){return-1!==this.os().toLowerCase().indexOf("meego")},iSOSSymbian:function(){return-1!==this.os().toLowerCase().indexOf("symbian")},iSOSChromeOS:function(){return-1!==this.os().toLowerCase().indexOf("chrome os")},iSOSWebOS:function(){return-1!==this.os().toLowerCase().indexOf("webos")}};
//# sourceMappingURL=browsersniff.js.map
