"use strict";var maskEl,renderToWrapper,__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.Popup=void 0,__importDefault(require("react"))),client_1=__importDefault(require("react-dom/client")),uuid_1=require("uuid"),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),Trigger_1=__importDefault(require("./Trigger")),TriggerPrompt_1=__importDefault(require("./TriggerPrompt")),selectorPrefix="adhere-ui-popup",prePopup=null,popups=[],el=null,Popup=function(){function e(e){this.id="",this.config=null,this.isShow=!1,this.el=null,this.popupEl=null,this.root=null,this.popupHandlers=new WeakMap,this.isShow=!1,this.el=PopupFactory.getEl(),this.id=(0,uuid_1.v1)(),this.config=e,this.onInnerElTransitionend=this.onInnerElTransitionend.bind(this),this.render()}return e.prototype.createMask=function(){var e=this.config.zIndex;(maskEl=document.createElement("div")).className="".concat(selectorPrefix,"-mask"),maskEl.style.zIndex=String((e||11e3)-1500),this.el.appendChild(maskEl)},e.prototype.render=function(){var t=this,e=this.config,o=e.children,e=e.zIndex,r=(this.popupEl=document.createElement("div"),this.popupEl.addEventListener("transitionend",this.onInnerElTransitionend),this.popupEl.className=selectorPrefix,this.popupEl.style.zIndex=String(e||11e3),this.root=client_1.default.createRoot(this.popupEl),react_1.default.cloneElement(o,{ref:function(){t.el.appendChild(t.popupEl);var e=adhere_util_1.default.getTopDom(t.popupEl,"adhere-ui-config-provider");e&&(t.popupEl.style.cssText=null==(e=null==e?void 0:e.style)?void 0:e.cssText),t.trigger("onCreate")}}));this.root.render(null!=(e=null==renderToWrapper?void 0:renderToWrapper(function(){return r}))?e:r),this.popupHandlers.set(this.popupEl,this.root)},e.prototype.trigger=function(e){var t;return null==(t=this.config)||!t[e]||null==(e=null==(t=null==this?void 0:this.config)?void 0:t[e])?void 0:e.call(t)},e.prototype.update=function(e){var t=this,o=this.config.children,r=react_1.default.cloneElement(null!=e?e:o,{ref:function(){t.el.appendChild(t.popupEl);var e=adhere_util_1.default.getTopDom(t.popupEl,"adhere-ui-config-provider");e&&(t.popupEl.style.cssText=null==(e=null==e?void 0:e.style)?void 0:e.cssText),t.trigger("onUpdate")}});null!=(e=this.root)&&e.render(null!=(o=null==renderToWrapper?void 0:renderToWrapper(function(){return r}))?o:r)},e.prototype.show=function(){var e=this;return maskEl||this.createMask(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl&&maskEl.classList.add("modal-in"),e.popupEl&&e.popupEl.classList.add("modal-in")},100),!0},e.prototype.showClosePrePopup=function(){var e=this;return maskEl||this.createMask(),prePopup&&prePopup.close(),maskEl.style.display="block",this.popupEl.style.display="block",this.isShow=!0,this.trigger("onBeforeShow"),setTimeout(function(){maskEl&&maskEl.classList.add("modal-in"),e.popupEl&&e.popupEl.classList.add("modal-in")},100),!0},e.prototype.close=function(){var e=this,t=(maskEl||this.createMask(),this.isShow=!1,this.trigger("onBeforeClose"));return t&&"then"in t&&t.then instanceof Function?t.then(function(){try{e.popupEl&&e.popupEl.classList.remove("modal-in")}catch(e){throw e}maskEl&&maskEl.classList.remove("modal-in")}):(this.popupEl&&this.popupEl.classList.remove("modal-in"),maskEl&&maskEl.classList.remove("modal-in")),!0},e.prototype.destroy=function(){var e;return this.popupEl&&((e=this.popupHandlers.get(this.popupEl))&&e.unmount(),this.popupEl=null),this.trigger("onDestroy"),!0},e.prototype.isDestroy=function(){return!this.popupEl},e.prototype.getId=function(){return this.id},e.prototype.onInnerElTransitionend=function(){this.isShow?(prePopup=this).trigger("onAfterShow"):(prePopup=null,this.popupEl.style.display="none",maskEl.style.display="none",this.trigger("onAfterClose"))},e}(),PopupFactory=(exports.Popup=Popup,{setRenderToWrapper:function(e){renderToWrapper=e},create:function(e){e=new Popup(e);return popups.push(e),e},show:function(e){return!!e&&!(e.isDestroy()||e===prePopup||prePopup&&e.getId()===prePopup.getId())&&e.show()},showClosePrePopup:function(e){return!!e&&!(e.isDestroy()||e===prePopup||prePopup&&e.getId()===prePopup.getId())&&(prePopup&&prePopup.close(),e.show())},close:function(e){try{return e?!e.isDestroy()&&e.close():!1}catch(e){throw e}},closeAll:function(){var t=this,o=[];return popups.forEach(function(e){e=t.close(e);o.push(e)}),o.every(function(e){return e})},destroy:function(t){var e,o;return!!t&&!t.isDestroy()&&((e=t.destroy())&&-1!==(o=popups.findIndex(function(e){return e===t}))&&popups.splice(o,1),e)},getEl:function(){return el||document.body},setEl:function(e){el=e},Trigger:Trigger_1.default,TriggerPrompt:TriggerPrompt_1.default});exports.default=PopupFactory;
//# sourceMappingURL=Popup.js.map
