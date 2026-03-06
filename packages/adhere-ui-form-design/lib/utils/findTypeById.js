function findTypeById(e){var d=e.id,i=e.designValue;if(i){if(i.id===d)return i.type;if(i.props.children)for(var r=0;r<i.props.children.length;r++){var n=findTypeById({id:d,designValue:i.props.children[r]});if(void 0!==n)return n}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.findTypeById=findTypeById;
//# sourceMappingURL=findTypeById.js.map
