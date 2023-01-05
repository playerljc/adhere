import React from"react";import{deal}from"./util";var ConditionalRenderShow=function(e){var n=e.children,o=e.noMatch,e=e.conditional;return React.createElement(React.Fragment,null,deal({element:n,conditional:e,prop:"display",value:e?"":"none"}),deal({element:o,conditional:e,prop:"display",value:e?"none":""}))};export default ConditionalRenderShow;
//# sourceMappingURL=show.js.map
