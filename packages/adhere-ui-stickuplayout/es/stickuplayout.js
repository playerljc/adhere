import classNames from"classnames";import React,{forwardRef,memo,useImperativeHandle,useLayoutEffect,useRef}from"react";import StickupLayoutItem from"./Item";var selectorPrefix="adhere-ui-stickup-layout",InternalStickupLayout=memo(forwardRef(function(e,r){var t=e.className,n=e.style,u=e.fixedClassName,c=e.fixedStyle,l=e.innerClassName,o=e.innerStyle,i=e.onChange,e=e.children,a=useRef(null),s=useRef(null),f=useRef(null),d=useRef(!1),m=useRef([]),p=useRef(),v=useRef(null),y=useRef();function h(){return"updateInterval"in screen?screen.updateInterval:16.7}function w(){for(var e,r,t=f.current.scrollTop,n=0,u=m.current.length-1;n<=u&&n<=m.current.length-1&&u<=m.current.length-1;){var c,l=m.current[c=u+n>>1];if(t>=l.start&&t<l.end){r=l;break}t<l.start?u=c-1:n=1+c}!r||v.current&&(null==(e=v.current)?void 0:e.index)===r.index||(v.current=r,s.current.innerHTML=r.dom.outerHTML,i&&i(r.index))}function x(){d.current=!1,m.current=[],p.current=null==(r=a.current)?void 0:r.querySelectorAll(".".concat(selectorPrefix,"-item-header"));var e,r,t=0;m.current=[],v.current=null;for(var n=0,u=p.current.length;n<u;n++){var c=p.current[n],l=t,o=void 0,o=n!==u-1?p.current[n+1].offsetTop-c.offsetHeight:f.current.scrollHeight;if(m.current.push({start:l,end:o,dom:c,index:n}),(t=o)>f.current.scrollHeight-f.current.offsetHeight)break}w(),null!=(e=null==(r=f.current)?void 0:r.removeEventListener)&&e.call(r,"scroll",L),null!=(r=null==(e=f.current)?void 0:e.addEventListener)&&r.call(e,"scroll",L)}function k(t,e){var n,u,c;void 0===t&&(t=0),void 0===e&&(e=300),d.current||("undefined"==typeof window||y.current||(y.current=document.createElement("div"),y.current.className="".concat(selectorPrefix,"-mask"),window.document.body.appendChild(y.current)),d.current=!0,y.current.style.display="block",n=f.current.scrollTop,u=n,c=f.current.scrollHeight/(e/h()+(e%h()!=0?1:0)),"undefined"!=typeof window&&window.requestAnimationFrame(function e(){function r(){d.current=!1,y.current.style.display="none"}n<t?t<u+c?u=t:u+=c:u-c<t?u=t:u-=c,f.current.scrollTop=u,n<t?t<=u?r():"undefined"!=typeof window&&window.requestAnimationFrame(e):u<=t?r():"undefined"!=typeof window&&window.requestAnimationFrame(e)}))}function g(e,r){e=e.start+p.current[e.index].offsetHeight;0===(r=void 0===r?300:r)?f.current.scrollTop=e:k(e,r)}function L(){w()}return useImperativeHandle(r,function(){return{refresh:x,scrollToByIndex:function(e,r){void 0===r&&(r=300);for(var t,n=0;n<m.current.length;n++)if(m.current[n].index===e){t=m.current[n];break}g(t=t||m.current[m.current.length-1],r)},scrollToByHeaderEl:function(e,r){void 0===r&&(r=300);for(var t,n=0;n<m.current.length;n++)if(m.current[n].dom===e){t=m.current[n],0;break}g(t=t||m.current[m.current.length-1],r)}}}),useLayoutEffect(function(){return x(),function(){var e;y.current&&null!=(e=null==(e=y.current)?void 0:e.parentElement)&&e.removeChild(y.current)}},[]),React.createElement("div",{className:classNames(selectorPrefix,null!=t?t:""),style:null!=n?n:{},ref:a},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-fixed"),null!=u?u:""),style:null!=c?c:{},ref:s}),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner"),null!=l?l:""),style:null!=o?o:{},ref:f},e))})),StickupLayout=InternalStickupLayout;StickupLayout.displayName="StickupLayout",StickupLayout.Item=StickupLayoutItem;export default StickupLayout;
//# sourceMappingURL=StickUpLayout.js.map
