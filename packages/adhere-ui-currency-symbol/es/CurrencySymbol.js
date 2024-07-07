var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{memo,useMemo}from"react";import CountUp from"react-countup";import codes from"./codes";import currenciesMap from"./currenciesMap";var selectorPrefix="adhere-ui-currency-symbol",InternalCurrencySymbol=memo(function(e){var n=e.className,r=e.style,s=e.symbolClassName,o=e.symbolStyle,t=e.amountClassName,c=e.amountStyle,l=e.amountInnerClassName,a=e.amount,u=e.code,m=e.bold,i=e.danger,y=e.symbolSize,f=e.isUseKilo,p=e.isUseAnimation,b=e.countUpProps,d=e.prefix,C=e.suffix,M=e.align,e=useMemo(function(){return null!=u?u:"CNY"},[u]),N=useMemo(function(){return null!=a?a:0},[a]),x=useMemo(function(){return null==m||m},[m]),S=useMemo(function(){return null!=i&&i},[i]),g=useMemo(function(){return null!=y?y:"middle"},[y]),P=useMemo(function(){return null==f||f},[f]),_=useMemo(function(){return null!=p&&p},[p]),h=useMemo(function(){return null!=M?M:"bottom"},[M]);return React.createElement("span",{className:classNames(selectorPrefix,n,"".concat(selectorPrefix,"-").concat(h),((n={})["".concat(selectorPrefix,"-bold")]=x,n["".concat(selectorPrefix,"-danger")]=S,n)),style:null!=r?r:{}},d,React.createElement("span",{className:classNames("".concat(selectorPrefix,"-symbol"),s,"".concat(selectorPrefix,"-symbol-").concat(g)),style:null!=o?o:{}},null==(h=currenciesMap.get(e))?void 0:h.symbol),React.createElement("span",{className:classNames("".concat(selectorPrefix,"-amount"),t),style:null!=c?c:{}},React.createElement(CountUp,__assign({className:l,duration:_?1:0,separator:P?",":""},null!=b?b:{},{end:N}))),C)}),CurrencySymbol=InternalCurrencySymbol;CurrencySymbol.displayName="CurrencySymbol",CurrencySymbol.currencies=codes,CurrencySymbol.currenciesMap=currenciesMap;export default CurrencySymbol;
//# sourceMappingURL=CurrencySymbol.js.map
