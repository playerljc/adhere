import ar from"dayjs/locale/ar";import pt from"dayjs/locale/pt";import zhCN from"dayjs/locale/zh-cn";var en={name:"en",formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A",l:"M/D/YYYY",ll:"MMM D, YYYY",lll:"MMM D, YYYY h:mm A",llll:"ddd, MMM D, YYYY h:mm A"}},dayjsLocalesMap=[ar,en,pt,zhCN].reduce(function(l,a){return l.set(a.name,a),l},new Map);export default function(l,a){var e,l=null!=(l=null==(l=null==l?void 0:l.locale)?void 0:l.locale)?l:"zh-cn",l=dayjsLocalesMap.get(l);null!=(e=null==(e=null==a?void 0:a.locale)?void 0:e.DatePicker)&&e.lang&&(a.locale.DatePicker.lang.fieldDateTimeFormat||(a.locale.DatePicker.lang.fieldDateTimeFormat="".concat(l.formats.L," ").concat(l.formats.LTS)),a.locale.DatePicker.lang.fieldDateFormat||(a.locale.DatePicker.lang.fieldDateFormat=l.formats.L))}
//# sourceMappingURL=DatePicker.js.map
