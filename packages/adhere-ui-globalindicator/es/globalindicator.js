import Resource from"@baifendian/adhere-util-resource";var selectorPrefix="adhere-ui-globalindicator",MAX_ZINDEX=Resource.Dict.value.ResourceNormalMaxZIndex.value,handlers=new Set;export default{show:function(e,l,n){void 0===e&&(e=document.body),void 0===l&&(l=""),void 0===n&&(n=MAX_ZINDEX);var i=document.createElement("div"),n=(i.innerHTML='\n      <div class="'.concat(selectorPrefix,'" style="z-index: ').concat(n||MAX_ZINDEX,'">\n       <span class="').concat(selectorPrefix,'-dot"><i></i><i></i><i></i><i></i></span>\n       <div class="').concat(selectorPrefix,'-text">').concat(l,"</div>\n      </div>"),i.firstElementChild);return e===document.body&&(n.style.position="fixed"),e.appendChild(n),handlers.add(n),n},hide:function(e){var l,n;if(e)try{null!=(n=null==(l=null==e?void 0:e.parentElement)?void 0:l.removeChild)&&n.call(l,e),handlers.delete(e)}catch(e){}},hideAll:function(){Array.from(handlers.values()).forEach(function(e){var l,n;try{null!=(n=null==(l=null==e?void 0:e.parentElement)?void 0:l.removeChild)&&n.call(l,e)}catch(e){}}),handlers.clear()}};
//# sourceMappingURL=globalindicator.js.map
