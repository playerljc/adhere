import CircularMenu from"./index";var menuContainer=null,contextMenu=null,mask=null,selectorPrefix="adhere-ui-context-circular-menu";function createMask(){(mask=document.createElement("div")).addEventListener("click",function(){var n,e;null!=(e=null==(n=null==menuContainer?void 0:menuContainer.parentElement)?void 0:n.removeChild)&&e.call(n,menuContainer),closeMask(),contextMenu=menuContainer=null}),mask.addEventListener("contextmenu",function(n){var e;n.preventDefault(),null!=(e=null==(n=null==menuContainer?void 0:menuContainer.parentElement)?void 0:n.removeChild)&&e.call(n,menuContainer),closeMask(),contextMenu=menuContainer=null}),mask.className=selectorPrefix,document.body.appendChild(mask)}function closeMask(){var n,e;null!=(e=null==(n=null==mask?void 0:mask.parentElement)?void 0:n.removeChild)&&e.call(n,mask),mask=null}export default{open:function(n,e){createMask(),menuContainer=document.createElement("div"),document.body.appendChild(menuContainer),null!=(n=null==(contextMenu=CircularMenu(menuContainer).config(n))?void 0:contextMenu.show)&&n.call(contextMenu,[e.x,e.y])},hide:function(){var n;contextMenu&&null!=(n=contextMenu.hide)&&n.call(contextMenu)},styles:function(n){var e;contextMenu&&null!=(e=contextMenu.styles)&&e.call(contextMenu,n)}};
//# sourceMappingURL=factory.js.map
