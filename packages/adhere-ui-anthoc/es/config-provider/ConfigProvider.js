import _ConfigProvider from"antd/es/config-provider";import ar from"dayjs/locale/ar";import pt from"dayjs/locale/pt";import zhCN from"dayjs/locale/zh-cn";import{produce}from"immer";import{createFactory}from"../util";var en={name:"en",formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A",l:"M/D/YYYY",ll:"MMM D, YYYY",lll:"MMM D, YYYY h:mm A",llll:"ddd, MMM D, YYYY h:mm A"}},dayjsLocalesMap=[ar,en,pt,zhCN].reduce(function(o,e){return o.set(e.name,e),o},new Map),ConfigProviderHOC=createFactory(_ConfigProvider,{},function(o){var e=null!=(e=null==(e=null==o?void 0:o.locale)?void 0:e.locale)?e:"zh-cn",l=dayjsLocalesMap.get(e);return console.log("localeKey",e),console.log("locale",l),produce(o,function(o){var e;null!=(e=null==(e=null==o?void 0:o.locale)?void 0:e.DatePicker)&&e.lang&&(o.locale.DatePicker.lang.fieldDateTimeFormat="".concat(l.formats.L," ").concat(l.formats.LTS),o.locale.DatePicker.lang.fieldDateFormat=l.formats.L)})});ConfigProviderHOC.displayName="ConfigProvider";export default ConfigProviderHOC;
//# sourceMappingURL=ConfigProvider.js.map
