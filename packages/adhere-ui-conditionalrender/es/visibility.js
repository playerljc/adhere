import React from"react";import{deal}from"./Util";var ConditionalRenderVisibility=function(i){var e=i.children,t=i.noMatch,i=i.conditional;return React.createElement(React.Fragment,null,deal({element:e,conditional:i,prop:"visibility",value:i?"visible":"hidden"}),deal({element:t,conditional:i,prop:"visibility",value:i?"hidden":"visible"}))};export default ConditionalRenderVisibility;
//# sourceMappingURL=Visibility.js.map
