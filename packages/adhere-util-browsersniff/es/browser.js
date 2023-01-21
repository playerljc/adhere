"use strict";!function(e,r){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return r(e)}):"object"==typeof exports?module.exports=r(e):e.Browser=r(e)}("undefined"!=typeof self?self:this,function(e){function t(e,r){var n,i=l.mimeTypes;for(n in i)if(i[n][e]==r)return!0;return!1}var f=e||{},l=void 0!==e.navigator?e.navigator:{};return function(e){var r,n,i=e||l.userAgent||{},o=this,a={Trident:-1<i.indexOf("Trident")||-1<i.indexOf("NET CLR"),Presto:-1<i.indexOf("Presto"),WebKit:-1<i.indexOf("AppleWebKit"),Gecko:-1<i.indexOf("Gecko/"),KHTML:-1<i.indexOf("KHTML/"),Safari:-1<i.indexOf("Safari"),Chrome:-1<i.indexOf("Chrome")||-1<i.indexOf("CriOS"),IE:-1<i.indexOf("MSIE")||-1<i.indexOf("Trident"),Edge:-1<i.indexOf("Edge")||-1<i.indexOf("Edg/"),Firefox:-1<i.indexOf("Firefox")||-1<i.indexOf("FxiOS"),"Firefox Focus":-1<i.indexOf("Focus"),Chromium:-1<i.indexOf("Chromium"),Opera:-1<i.indexOf("Opera")||-1<i.indexOf("OPR"),Vivaldi:-1<i.indexOf("Vivaldi"),Yandex:-1<i.indexOf("YaBrowser"),Arora:-1<i.indexOf("Arora"),Lunascape:-1<i.indexOf("Lunascape"),QupZilla:-1<i.indexOf("QupZilla"),"Coc Coc":-1<i.indexOf("coc_coc_browser"),Kindle:-1<i.indexOf("Kindle")||-1<i.indexOf("Silk/"),Iceweasel:-1<i.indexOf("Iceweasel"),Konqueror:-1<i.indexOf("Konqueror"),Iceape:-1<i.indexOf("Iceape"),SeaMonkey:-1<i.indexOf("SeaMonkey"),Epiphany:-1<i.indexOf("Epiphany"),360:-1<i.indexOf("QihooBrowser")||-1<i.indexOf("QHBrowser"),"360EE":-1<i.indexOf("360EE"),"360SE":-1<i.indexOf("360SE"),UC:-1<i.indexOf("UCBrowser")||-1<i.indexOf(" UBrowser")||-1<i.indexOf("UCWEB"),QQBrowser:-1<i.indexOf("QQBrowser"),QQ:-1<i.indexOf("QQ/"),Baidu:-1<i.indexOf("Baidu")||-1<i.indexOf("BIDUBrowser")||-1<i.indexOf("baidubrowser")||-1<i.indexOf("baiduboxapp")||-1<i.indexOf("BaiduHD"),Maxthon:-1<i.indexOf("Maxthon"),Sogou:-1<i.indexOf("MetaSr")||-1<i.indexOf("Sogou"),Liebao:-1<i.indexOf("LBBROWSER")||-1<i.indexOf("LieBaoFast"),"2345Explorer":-1<i.indexOf("2345Explorer")||-1<i.indexOf("Mb2345Browser")||-1<i.indexOf("2345chrome"),"115Browser":-1<i.indexOf("115Browser"),TheWorld:-1<i.indexOf("TheWorld"),XiaoMi:-1<i.indexOf("MiuiBrowser"),Quark:-1<i.indexOf("Quark"),Qiyu:-1<i.indexOf("Qiyu"),Wechat:-1<i.indexOf("MicroMessenger"),WechatWork:-1<i.indexOf("wxwork/"),Taobao:-1<i.indexOf("AliApp(TB"),Alipay:-1<i.indexOf("AliApp(AP"),Weibo:-1<i.indexOf("Weibo"),Douban:-1<i.indexOf("com.douban.frodo"),Suning:-1<i.indexOf("SNEBUY-APP"),iQiYi:-1<i.indexOf("IqiyiApp"),DingTalk:-1<i.indexOf("DingTalk"),Huawei:-1<i.indexOf("HuaweiBrowser")||-1<i.indexOf("HUAWEI/")||-1<i.indexOf("HONOR"),Vivo:-1<i.indexOf("VivoBrowser"),Windows:-1<i.indexOf("Windows"),Linux:-1<i.indexOf("Linux")||-1<i.indexOf("X11"),"Mac OS":-1<i.indexOf("Macintosh"),Android:-1<i.indexOf("Android")||-1<i.indexOf("Adr"),HarmonyOS:-1<i.indexOf("HarmonyOS"),Ubuntu:-1<i.indexOf("Ubuntu"),FreeBSD:-1<i.indexOf("FreeBSD"),Debian:-1<i.indexOf("Debian"),"Windows Phone":-1<i.indexOf("IEMobile")||-1<i.indexOf("Windows Phone"),BlackBerry:-1<i.indexOf("BlackBerry")||-1<i.indexOf("RIM"),MeeGo:-1<i.indexOf("MeeGo"),Symbian:-1<i.indexOf("Symbian"),iOS:-1<i.indexOf("like Mac OS X"),"Chrome OS":-1<i.indexOf("CrOS"),WebOS:-1<i.indexOf("hpwOS"),Mobile:-1<i.indexOf("Mobi")||-1<i.indexOf("iPh")||-1<i.indexOf("480"),Tablet:-1<i.indexOf("Tablet")||-1<i.indexOf("Pad")||-1<i.indexOf("Nexus 7")},e=!1,d=(f.chrome&&(r=i.replace(/^.*Chrome\/([\d]+).*$/,"$1"),f.chrome.adblock2345||f.chrome.common2345?a["2345Explorer"]=!0:t("type","application/360softmgrplugin")||t("type","application/mozilla-npqihooquicklogin")||36<r&&f.showModalDialog?e=!0:45<r&&!(e=t("type","application/vnd.chromium.remoting-viewer"))&&69<=r&&(e=t("type","application/hwepass2001.installepass2001")||t("type","application/asx"))),a.Mobile?a.Mobile=!(-1<i.indexOf("iPad")):e&&(t("type","application/gameplugin")||l&&void 0!==l.connection&&void 0===l.connection.saveData?a["360SE"]=!0:a["360EE"]=!0),a.Baidu&&a.Opera?a.Baidu=!1:a.iOS&&(a.Safari=!0),{engine:["WebKit","Trident","Gecko","Presto","KHTML"],browser:["Safari","Chrome","Edge","IE","Firefox","Firefox Focus","Chromium","Opera","Vivaldi","Yandex","Arora","Lunascape","QupZilla","Coc Coc","Kindle","Iceweasel","Konqueror","Iceape","SeaMonkey","Epiphany","XiaoMi","Vivo","360","360SE","360EE","UC","QQBrowser","QQ","Huawei","Baidu","Maxthon","Sogou","Liebao","2345Explorer","115Browser","TheWorld","Quark","Qiyu","Wechat","WechatWork","Taobao","Alipay","Weibo","Douban","Suning","iQiYi","DingTalk"],os:["Windows","Linux","Mac OS","Android","HarmonyOS","Ubuntu","FreeBSD","Debian","iOS","Windows Phone","BlackBerry","MeeGo","Symbian","Chrome OS","WebOS"],device:["Mobile","Tablet"]});for(n in o.device="PC",o.language=((r=(l.browserLanguage||l.language).split("-"))[1]&&(r[1]=r[1].toUpperCase()),r.join("_")),d)for(var c=0;c<d[n].length;c++){var u=d[n][c];a[u]&&(o[n]=u)}e={Windows:function(){var e=i.replace(/^Mozilla\/\d.0 \(Windows NT ([\d.]+)[;)].*$/,"$1");return{10:"10",6.4:"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP","5.0":"2000"}[e]||e},Android:function(){return i.replace(/^.*Android ([\d.]+);.*$/,"$1")},HarmonyOS:function(){return{10:"2"}[i.replace(/^Mozilla.*Android ([\d.]+)[;)].*$/,"$1")]||""},iOS:function(){return i.replace(/^.*OS ([\d_]+) like.*$/,"$1").replace(/_/g,".")},Debian:function(){return i.replace(/^.*Debian\/([\d.]+).*$/,"$1")},"Windows Phone":function(){return i.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/,"$2")},"Mac OS":function(){return i.replace(/^.*Mac OS X ([\d_]+).*$/,"$1").replace(/_/g,".")},WebOS:function(){return i.replace(/^.*hpwOS\/([\d.]+);.*$/,"$1")}},o.osVersion="",e[o.os]&&(o.osVersion=e[o.os](),o.osVersion==i&&(o.osVersion="")),e={Safari:function(){return i.replace(/^.*Version\/([\d.]+).*$/,"$1")},Chrome:function(){return i.replace(/^.*Chrome\/([\d.]+).*$/,"$1").replace(/^.*CriOS\/([\d.]+).*$/,"$1")},IE:function(){return i.replace(/^.*MSIE ([\d.]+).*$/,"$1").replace(/^.*rv:([\d.]+).*$/,"$1")},Edge:function(){return i.replace(/^.*Edge\/([\d.]+).*$/,"$1").replace(/^.*Edg\/([\d.]+).*$/,"$1")},Firefox:function(){return i.replace(/^.*Firefox\/([\d.]+).*$/,"$1").replace(/^.*FxiOS\/([\d.]+).*$/,"$1")},"Firefox Focus":function(){return i.replace(/^.*Focus\/([\d.]+).*$/,"$1")},Chromium:function(){return i.replace(/^.*Chromium\/([\d.]+).*$/,"$1")},Opera:function(){return i.replace(/^.*Opera\/([\d.]+).*$/,"$1").replace(/^.*OPR\/([\d.]+).*$/,"$1")},Vivaldi:function(){return i.replace(/^.*Vivaldi\/([\d.]+).*$/,"$1")},Yandex:function(){return i.replace(/^.*YaBrowser\/([\d.]+).*$/,"$1")},Arora:function(){return i.replace(/^.*Arora\/([\d.]+).*$/,"$1")},Lunascape:function(){return i.replace(/^.*Lunascape[\/\s]([\d.]+).*$/,"$1")},QupZilla:function(){return i.replace(/^.*QupZilla[\/\s]([\d.]+).*$/,"$1")},"Coc Coc":function(){return i.replace(/^.*coc_coc_browser\/([\d.]+).*$/,"$1")},Kindle:function(){return i.replace(/^.*Version\/([\d.]+).*$/,"$1")},Iceweasel:function(){return i.replace(/^.*Iceweasel\/([\d.]+).*$/,"$1")},Konqueror:function(){return i.replace(/^.*Konqueror\/([\d.]+).*$/,"$1")},Iceape:function(){return i.replace(/^.*Iceape\/([\d.]+).*$/,"$1")},SeaMonkey:function(){return i.replace(/^.*SeaMonkey\/([\d.]+).*$/,"$1")},Epiphany:function(){return i.replace(/^.*Epiphany\/([\d.]+).*$/,"$1")},360:function(){return i.replace(/^.*QihooBrowser\/([\d.]+).*$/,"$1")},"360SE":function(){return{86:"13.0",78:"12.0",69:"11.0",63:"10.0",55:"9.1",45:"8.1",42:"8.0",31:"7.0",21:"6.3"}[i.replace(/^.*Chrome\/([\d]+).*$/,"$1")]||""},"360EE":function(){return{86:"13.0",78:"12.0",69:"11.0",63:"9.5",55:"9.0",50:"8.7",30:"7.5"}[i.replace(/^.*Chrome\/([\d]+).*$/,"$1")]||""},Maxthon:function(){return i.replace(/^.*Maxthon\/([\d.]+).*$/,"$1")},QQBrowser:function(){return i.replace(/^.*QQBrowser\/([\d.]+).*$/,"$1")},QQ:function(){return i.replace(/^.*QQ\/([\d.]+).*$/,"$1")},Baidu:function(){return i.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/,"$1").replace(/^.*baiduboxapp\/([\d.]+).*$/,"$1")},UC:function(){return i.replace(/^.*UC?Browser\/([\d.]+).*$/,"$1")},Sogou:function(){return i.replace(/^.*SE ([\d.X]+).*$/,"$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/,"$1")},Liebao:function(){var e="",r=(-1<i.indexOf("LieBaoFast")&&(e=i.replace(/^.*LieBaoFast\/([\d.]+).*$/,"$1")),i.replace(/^.*Chrome\/([\d]+).*$/,"$1"));return e||{57:"6.5",49:"6.0",46:"5.9",42:"5.3",39:"5.2",34:"5.0",29:"4.5",21:"4.0"}[r]||""},"2345Explorer":function(){return{69:"10.0",55:"9.9"}[navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/,"$1")]||i.replace(/^.*2345Explorer\/([\d.]+).*$/,"$1").replace(/^.*Mb2345Browser\/([\d.]+).*$/,"$1")},"115Browser":function(){return i.replace(/^.*115Browser\/([\d.]+).*$/,"$1")},TheWorld:function(){return i.replace(/^.*TheWorld ([\d.]+).*$/,"$1")},XiaoMi:function(){return i.replace(/^.*MiuiBrowser\/([\d.]+).*$/,"$1")},Vivo:function(){return i.replace(/^.*VivoBrowser\/([\d.]+).*$/,"$1")},Quark:function(){return i.replace(/^.*Quark\/([\d.]+).*$/,"$1")},Qiyu:function(){return i.replace(/^.*Qiyu\/([\d.]+).*$/,"$1")},Wechat:function(){return i.replace(/^.*MicroMessenger\/([\d.]+).*$/,"$1")},WechatWork:function(){return i.replace(/^.*wxwork\/([\d.]+).*$/,"$1")},Taobao:function(){return i.replace(/^.*AliApp\(TB\/([\d.]+).*$/,"$1")},Alipay:function(){return i.replace(/^.*AliApp\(AP\/([\d.]+).*$/,"$1")},Weibo:function(){return i.replace(/^.*weibo__([\d.]+).*$/,"$1")},Douban:function(){return i.replace(/^.*com.douban.frodo\/([\d.]+).*$/,"$1")},Suning:function(){return i.replace(/^.*SNEBUY-APP([\d.]+).*$/,"$1")},iQiYi:function(){return i.replace(/^.*IqiyiVersion\/([\d.]+).*$/,"$1")},DingTalk:function(){return i.replace(/^.*DingTalk\/([\d.]+).*$/,"$1")},Huawei:function(){return i.replace(/^.*Version\/([\d.]+).*$/,"$1").replace(/^.*HuaweiBrowser\/([\d.]+).*$/,"$1")}};o.version="",e[o.browser]&&(o.version=e[o.browser](),o.version==i&&(o.version="")),"Chrome"==o.browser&&i.match(/\S+Browser/)&&(o.browser=i.match(/\S+Browser/)[0],o.version=i.replace(/^.*Browser\/([\d.]+).*$/,"$1")),"Firefox"!=o.browser||!window.clientInformation&&window.u2f||(o.browser+=" Nightly"),"Edge"==o.browser?o.engine="75"<o.version?"Blink":"EdgeHTML":(a.Chrome&&"WebKit"==o.engine&&27<parseInt(e.Chrome())||"Opera"==o.browser&&12<parseInt(o.version)||"Yandex"==o.browser)&&(o.engine="Blink")}});
//# sourceMappingURL=browser.js.map
