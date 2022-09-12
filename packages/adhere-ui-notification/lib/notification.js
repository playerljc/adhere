"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),react_dom_1=__importDefault(require("react-dom")),uuid_1=require("uuid"),selectorPrefix="adhere-ui-notification",Notification=function(){function e(e,t){this.config={style:"material",type:"top"},this.notifications={},this.key=!1,this.container=e,this.config=Object.assign(this.config,t),this.createInnerContainer(),this.init(),this.initEvents()}return e.prototype.createInnerContainer=function(){var e,t=this.container.querySelector("."+selectorPrefix);t&&null!==(e=null==t?void 0:t.parentElement)&&void 0!==e&&e.removeChild(t),this.innerContainer=document.createElement("div"),this.innerContainer.className=selectorPrefix,this.notificationContainer=document.createElement("ul"),this.innerContainer.appendChild(this.notificationContainer),this.container.appendChild(this.innerContainer)},e.prototype.init=function(){var e,t=this.config;null!==(e=this.innerContainer)&&void 0!==e&&e.classList.remove([selectorPrefix].concat(["top"===t.type?"bottom":"top",t.style]).join("-")),null!==(e=this.innerContainer)&&void 0!==e&&e.classList.add([selectorPrefix].concat([t.type,t.style]).join("-"))},e.prototype.initEvents=function(){var e,t=this;null!==(e=this.notificationContainer)&&void 0!==e&&e.addEventListener("click",function(e){e.target.classList.contains("closeBtn")&&t.closeNotification.call(t,e.target.parentNode.dataset.id)})},e.prototype.closeNotification=function(e){var i,n=this;n.key||(n.key=!0,i=n.notifications[e],n.trigger("onCloseBefore",i),i.addEventListener("transitionend",function e(){var t;i.removeEventListener("transitionend",e),null!==(t=null==n?void 0:n.notificationContainer)&&void 0!==t&&t.removeChild(i),n.key=!1,n.trigger("onCloseAfter",i)}),i.style.overflow="hidden",i.querySelector(".info").style.opacity="0",i.style.height="0")},e.prototype.buildCustom=function(e){var t=e.closed,i=e.children,n=uuid_1.v1(),e=document.createElement("li");e.dataset.id=n;return react_dom_1.default.render(react_1.default.createElement(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:"info"},i),t?react_1.default.createElement("span",{className:"closeBtn"}):null)},null),e),this.build(n,e)},e.prototype.buildStandard=function(e){var t=e.headerLabel,i=void 0===t?"":t,t=e.headerIcon,n=void 0===t?"":t,t=e.title,r=void 0===t?"":t,t=e.text,a=void 0===t?"":t,t=e.icon,o=void 0===t?"":t,t=e.closed,l=void 0===t||t,t=e.datetime,c=void 0===t?"":t,e=uuid_1.v1(),t=document.createElement("li");t.dataset.id=e;return react_dom_1.default.render(react_1.default.createElement(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:"info"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-header"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-header-icon"},n?react_1.default.createElement("img",{src:n,alt:""}):null),react_1.default.createElement("div",{className:selectorPrefix+"-standard-header-label"},i||"")),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-media-l"},o?react_1.default.createElement("img",{src:o,alt:""}):null),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-row"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-row-title"},r||""),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-row-text"},a||"")),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-media-r"},c||""))),l?react_1.default.createElement("span",{className:"closeBtn"}):null)},null),t),this.build(e,t)},e.prototype.build=function(e,t){var i=this;this.notifications[e]=t,this.notificationContainer.appendChild(t),i.trigger("onCreate",t),t.style.height="auto";var n=t.clientHeight;return"material"===i.config.style?n<40&&(n=40):"ios"===i.config.style&&n<70&&(n=70),t.style.height="0",setTimeout(function(){t.style.height=n+"px",t.querySelector(".info").style.opacity="1",i.trigger("onShow",t)},100),e},e.prototype.trigger=function(e,t){this.config[e]&&this.config[e](t)},e.prototype.show=function(e){return this.buildCustom(e)},e.prototype.showStandard=function(e){return this.buildStandard(e)},e.prototype.close=function(e){this.closeNotification(e)},e}();exports.default={build:function(e,t){return new Notification(e,t)}};
//# sourceMappingURL=notification.js.map
