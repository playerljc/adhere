import ar from"dayjs/locale/ar";import pt from"dayjs/locale/pt";import zhCN from"dayjs/locale/zh-cn";var en={name:"en",formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A",l:"M/D/YYYY",ll:"MMM D, YYYY",lll:"MMM D, YYYY h:mm A",llll:"ddd, MMM D, YYYY h:mm A"}},dayjsLocalesMap=[ar,en,pt,zhCN].reduce(function(l,a){return l.set(a.name,a),l},new Map);export default function(l){var a,e=null!=(e=null==(e=null==l?void 0:l.locale)?void 0:e.locale)?e:"zh-cn",e=dayjsLocalesMap.get(e);null!=(a=null==(a=null==l?void 0:l.locale)?void 0:a.DatePicker)&&a.lang&&(l.locale.DatePicker.lang.fieldDateTimeFormat||(l.locale.DatePicker.lang.fieldDateTimeFormat="".concat(e.formats.L," ").concat(e.formats.LTS)),l.locale.DatePicker.lang.fieldDateFormat||(l.locale.DatePicker.lang.fieldDateFormat=e.formats.L))}
//# sourceMappingURL=DatePicker.js.map
