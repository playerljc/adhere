import classNames from"classnames";import debounce from"lodash.debounce";import React,{forwardRef,memo,useImperativeHandle,useLayoutEffect,useRef}from"react";import{ResizeObserver}from"@juggle/resize-observer";import StickupLayoutItem from"./Item";var selectorPrefix="adhere-ui-stickup-layout",InternalStickupLayout=memo(forwardRef(function(e,r){var n=e.className,t=e.style,u=e.fixedClassName,c=e.fixedStyle,l=e.innerClassName,o=e.innerStyle,i=e.onChange,e=e.children,a=useRef({}),s=useRef(null),f=useRef(null),d=useRef(null),m=useRef(!1),v=useRef([]),p=useRef(),y=useRef(null),h=useRef();function w(){return"updateInterval"in screen?screen.updateInterval:16.7}function R(){for(var e,r,n=d.current.scrollTop,t=0,u=v.current.length-1;t<=u&&t<=v.current.length-1&&u<=v.current.length-1;){var c,l=v.current[c=u+t>>1];if(n>=l.start&&n<l.end){r=l;break}n<l.start?u=c-1:t=1+c}!r||y.current&&(null==(e=y.current)?void 0:e.index)===r.index||(y.current=r,f.current.innerHTML=r.dom.outerHTML,i&&i(r.index))}function g(){m.current=!1,v.current=[],p.current=null==(r=s.current)?void 0:r.querySelectorAll(".".concat(selectorPrefix,"-item-header"));var e,r,n=0;v.current=[],y.current=null;for(var t=0,u=p.current.length;t<u;t++){var c=p.current[t],l=n,o=void 0,o=t!==u-1?p.current[t+1].offsetTop-c.offsetHeight:d.current.scrollHeight;if(v.current.push({start:l,end:o,dom:c,index:t}),(n=o)>d.current.scrollHeight-d.current.offsetHeight)break}R(),null!=(e=null==(r=d.current)?void 0:r.removeEventListener)&&e.call(r,"scroll",L),null!=(r=null==(e=d.current)?void 0:e.addEventListener)&&r.call(e,"scroll",L)}function x(n,e){var t,u,c;void 0===n&&(n=0),void 0===e&&(e=300),m.current||("undefined"==typeof window||h.current||(h.current=document.createElement("div"),h.current.className="".concat(selectorPrefix,"-mask"),window.document.body.appendChild(h.current)),m.current=!0,h.current.style.display="block",t=d.current.scrollTop,u=t,c=d.current.scrollHeight/(e/w()+(e%w()!=0?1:0)),"undefined"!=typeof window&&window.requestAnimationFrame(function e(){function r(){m.current=!1,h.current.style.display="none"}t<n?n<u+c?u=n:u+=c:u-c<n?u=n:u-=c,d.current.scrollTop=u,t<n?n<=u?r():"undefined"!=typeof window&&window.requestAnimationFrame(e):u<=n?r():"undefined"!=typeof window&&window.requestAnimationFrame(e)}))}function k(e,r){e=e.start+p.current[e.index].offsetHeight;0===(r=void 0===r?300:r)?d.current.scrollTop=e:x(e,r)}function L(){R()}return useImperativeHandle(r,function(){return{refresh:g,scrollToByIndex:function(e,r){void 0===r&&(r=300);for(var n,t=0;t<v.current.length;t++)if(v.current[t].index===e){n=v.current[t];break}k(n=n||v.current[v.current.length-1],r)},scrollToByHeaderEl:function(e,r){void 0===r&&(r=300);for(var n,t=0;t<v.current.length;t++)if(v.current[t].dom===e){n=v.current[t],0;break}k(n=n||v.current[v.current.length-1],r)}}}),useLayoutEffect(function(){return g(),function(){var e;h.current&&null!=(e=null==(e=h.current)?void 0:e.parentElement)&&e.removeChild(h.current)}},[]),useLayoutEffect(function(){var e=debounce(function(){g()},300);return a.current=new ResizeObserver(e),a.current.observe(s.current),function(){var e;null!=(e=null==a?void 0:a.current)&&e.disconnect(),h.current&&null!=(e=null==(e=h.current)?void 0:e.parentElement)&&e.removeChild(h.current)}},[]),React.createElement("div",{className:classNames(selectorPrefix,null!=n?n:""),style:null!=t?t:{},ref:s},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-fixed"),null!=u?u:""),style:null!=c?c:{},ref:f}),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner"),null!=l?l:""),style:null!=o?o:{},ref:d},e))})),StickupLayout=InternalStickupLayout;StickupLayout.displayName="StickupLayout",StickupLayout.Item=StickupLayoutItem;export default StickupLayout;
//# sourceMappingURL=StickUpLayout.js.map
