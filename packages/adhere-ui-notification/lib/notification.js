"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),react_dom_1=__importDefault(require("react-dom")),uuid_1=__importDefault(require("uuid")),selectorPrefix="adhere-ui-notification",Notification=function(){function e(e,t){this.config={style:"material",type:"top"},this.notifications={},this.key=!1,this.container=e,this.config=Object.assign(this.config,t),this.createInnerContainer(),this.init(),this.initEvents()}return e.prototype.createInnerContainer=function(){var e=this.container.querySelector("."+selectorPrefix);e&&e.parentElement.removeChild(e),this.innerContainer=document.createElement("div"),this.innerContainer.className=selectorPrefix,this.notificationContainer=document.createElement("ul"),this.innerContainer.appendChild(this.notificationContainer),this.container.appendChild(this.innerContainer)},e.prototype.init=function(){var e=this.config;this.innerContainer.classList.remove([selectorPrefix].concat(["top"===e.type?"bottom":"top",e.style]).join("-")),this.innerContainer.classList.add([selectorPrefix].concat([e.type,e.style]).join("-"))},e.prototype.initEvents=function(){var t=this;this.notificationContainer.addEventListener("click",function(e){e.target.classList.contains("closeBtn")&&t.closeNotification.call(t,e.target.parentNode.dataset.id)})},e.prototype.closeNotification=function(e){var t,i=this;i.key||(i.key=!0,t=i.notifications[e],i.trigger("onCloseBefore",t),t.addEventListener("transitionend",function e(){t.removeEventListener("transitionend",e),i.notificationContainer.removeChild(t),i.key=!1,i.trigger("onCloseAfter",t)}),t.style.overflow="hidden",t.querySelector(".info").style.opacity="0",t.style.height="0")},e.prototype.buildCustom=function(e){var t=e.closed,i=e.children;console.log("IShowConfig",e);var n=uuid_1.default(),e=document.createElement("li");e.dataset.id=n;return react_dom_1.default.render(react_1.default.createElement(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:"info"},i),t?react_1.default.createElement("span",{className:"closeBtn"}):null)},null),e),this.build(n,e)},e.prototype.buildStandard=function(e){var t=e.headerLabel,i=void 0===t?"":t,t=e.headerIcon,n=void 0===t?"":t,t=e.title,a=void 0===t?"":t,t=e.text,r=void 0===t?"":t,t=e.icon,o=void 0===t?"":t,t=e.closed,c=void 0===t||t,t=e.datetime,l=void 0===t?"":t;console.log("IShowStandardConfig",e);t=uuid_1.default(),e=document.createElement("li");e.dataset.id=t;return react_dom_1.default.render(react_1.default.createElement(function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:"info"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-header"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-header-icon"},n?react_1.default.createElement("img",{src:n,alt:""}):null),react_1.default.createElement("div",{className:selectorPrefix+"-standard-header-label"},i||"")),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-media-l"},o?react_1.default.createElement("img",{src:o,alt:""}):null),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-row"},react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-row-title"},a||""),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-row-text"},r||"")),react_1.default.createElement("div",{className:selectorPrefix+"-standard-content-media-r"},l||""))),c?react_1.default.createElement("span",{className:"closeBtn"}):null)},null),e),this.build(t,e)},e.prototype.build=function(e,t){var i=this;this.notifications[e]=t,this.notificationContainer.appendChild(t),i.trigger("onCreate",t),t.style.height="auto";var n=t.clientHeight;return"material"===i.config.style?n<40&&(n=40):"ios"===i.config.style&&n<70&&(n=70),t.style.height="0",setTimeout(function(){t.style.height=n+"px",t.querySelector(".info").style.opacity="1",i.trigger("onShow",t)},100),e},e.prototype.trigger=function(e,t){this.config[e]&&this.config[e](t)},e.prototype.show=function(e){return this.buildCustom(e)},e.prototype.showStandard=function(e){return this.buildStandard(e)},e.prototype.close=function(e){this.closeNotification(e)},e}();exports.default={build:function(e,t){return new Notification(e,t)}};
//# sourceMappingURL=notification.js.map
