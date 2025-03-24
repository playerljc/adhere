import React from"react";import{v1}from"uuid";export default{keyMap(e=[],p){return(e||[]).map((e,r)=>{e=p.call(this,e,r);return e.key?e:React.cloneElement(e,{...e.props,key:v1()},e.props.children)})},fillKey(e=[]){return(e||[]).map(e=>e.key?e:React.cloneElement(e,{...e.props,key:v1()},e.props.children))}};
//# sourceMappingURL=index.js.map
