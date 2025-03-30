export default function(n){return function(e,t){switch(t.type){case"add":return t.addKw&&e.every(function(e){return e.kw!==t.addKw})&&(e.length===n&&e.pop(),e.unshift({id:"".concat((new Date).getTime()),kw:t.addKw})),e;case"remove":return t.removeId&&e.splice(e.findIndex(function(e){return e.id===t.removeId}),1),e;case"list":return t.list}}}
//# sourceMappingURL=SearchHistoryReducer.js.map
