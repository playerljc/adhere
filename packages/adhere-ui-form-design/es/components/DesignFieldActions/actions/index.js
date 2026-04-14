import Copy from"./copy";import Delete from"./delete";var ACTIONS=new Map([[Copy.key,function(e){return{key:Copy.key,label:Copy.label,el:Copy.render(e)}}],[Delete.key,function(e){return{key:Delete.key,label:Delete.label,el:Delete.render(e)}}]]);export{ACTIONS,Copy,Delete};
//# sourceMappingURL=index.js.map
