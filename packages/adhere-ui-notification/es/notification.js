import React from"react";import ReactDOM from"react-dom";import{v1}from"uuid";var selectorPrefix="adhere-ui-notification",Notification=function(){function e(e,t){this.config={style:"material",type:"top"},this.notifications={},this.key=!1,this.container=e,this.config=Object.assign(this.config,t),this.createInnerContainer(),this.init(),this.initEvents()}return e.prototype.createInnerContainer=function(){var e,t=this.container.querySelector("."+selectorPrefix);t&&null!==(e=null==t?void 0:t.parentElement)&&void 0!==e&&e.removeChild(t),this.innerContainer=document.createElement("div"),this.innerContainer.className=selectorPrefix,this.notificationContainer=document.createElement("ul"),this.innerContainer.appendChild(this.notificationContainer),this.container.appendChild(this.innerContainer)},e.prototype.init=function(){var e,t=this.config;null!==(e=this.innerContainer)&&void 0!==e&&e.classList.remove([selectorPrefix].concat(["top"===t.type?"bottom":"top",t.style]).join("-")),null!==(e=this.innerContainer)&&void 0!==e&&e.classList.add([selectorPrefix].concat([t.type,t.style]).join("-"))},e.prototype.initEvents=function(){var e,t=this;null!==(e=this.notificationContainer)&&void 0!==e&&e.addEventListener("click",function(e){e.target.classList.contains("closeBtn")&&t.closeNotification.call(t,e.target.parentNode.dataset.id)})},e.prototype.closeNotification=function(e){var n,i=this;i.key||(i.key=!0,n=i.notifications[e],i.trigger("onCloseBefore",n),n.addEventListener("transitionend",function e(){var t;n.removeEventListener("transitionend",e),null!==(t=null==i?void 0:i.notificationContainer)&&void 0!==t&&t.removeChild(n),i.key=!1,i.trigger("onCloseAfter",n)}),n.style.overflow="hidden",n.querySelector(".info").style.opacity="0",n.style.height="0")},e.prototype.buildCustom=function(e){var t=e.closed,n=e.children,i=v1(),e=document.createElement("li");e.dataset.id=i;return ReactDOM.render(React.createElement(function(){return React.createElement(React.Fragment,null,React.createElement("div",{className:"info"},n),t?React.createElement("span",{className:"closeBtn"}):null)},null),e),this.build(i,e)},e.prototype.buildStandard=function(e){var t=e.headerLabel,n=void 0===t?"":t,t=e.headerIcon,i=void 0===t?"":t,t=e.title,o=void 0===t?"":t,t=e.text,a=void 0===t?"":t,t=e.icon,r=void 0===t?"":t,t=e.closed,c=void 0===t||t,t=e.datetime,l=void 0===t?"":t,e=v1(),t=document.createElement("li");t.dataset.id=e;return ReactDOM.render(React.createElement(function(){return React.createElement(React.Fragment,null,React.createElement("div",{className:"info"},React.createElement("div",{className:selectorPrefix+"-standard-header"},React.createElement("div",{className:selectorPrefix+"-standard-header-icon"},i?React.createElement("img",{src:i,alt:""}):null),React.createElement("div",{className:selectorPrefix+"-standard-header-label"},n||"")),React.createElement("div",{className:selectorPrefix+"-standard-content"},React.createElement("div",{className:selectorPrefix+"-standard-content-media-l"},r?React.createElement("img",{src:r,alt:""}):null),React.createElement("div",{className:selectorPrefix+"-standard-content-row"},React.createElement("div",{className:selectorPrefix+"-standard-content-row-title"},o||""),React.createElement("div",{className:selectorPrefix+"-standard-content-row-text"},a||"")),React.createElement("div",{className:selectorPrefix+"-standard-content-media-r"},l||""))),c?React.createElement("span",{className:"closeBtn"}):null)},null),t),this.build(e,t)},e.prototype.build=function(e,t){var n=this;this.notifications[e]=t,this.notificationContainer.appendChild(t),n.trigger("onCreate",t),t.style.height="auto";var i=t.clientHeight;return"material"===n.config.style?i<40&&(i=40):"ios"===n.config.style&&i<70&&(i=70),t.style.height="0",setTimeout(function(){t.style.height=i+"px",t.querySelector(".info").style.opacity="1",n.trigger("onShow",t)},100),e},e.prototype.trigger=function(e,t){this.config[e]&&this.config[e](t)},e.prototype.show=function(e){return this.buildCustom(e)},e.prototype.showStandard=function(e){return this.buildStandard(e)},e.prototype.close=function(e){this.closeNotification(e)},e}();export default{build:function(e,t){return new Notification(e,t)}};
//# sourceMappingURL=notification.js.map
