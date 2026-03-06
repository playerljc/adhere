function findTypeById(i){var d=i.id,e=i.designValue;if(e){if(e.id===d)return e.type;if(e.props.children)for(var r=0;r<e.props.children.length;r++){var n=findTypeById({id:d,designValue:e.props.children[r]});if(void 0!==n)return n}}}export{findTypeById};
//# sourceMappingURL=findTypeById.js.map
