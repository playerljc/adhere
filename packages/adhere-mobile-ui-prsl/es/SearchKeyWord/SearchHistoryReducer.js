export default t=>function(e,d){switch(d.type){case"add":return d.addKw&&e.every(e=>e.kw!==d.addKw)&&(e.length===t&&e.pop(),e.unshift({id:""+(new Date).getTime(),kw:d.addKw})),e;case"remove":return d.removeId&&e.splice(e.findIndex(e=>e.id===d.removeId),1),e;case"list":return d.list}};
//# sourceMappingURL=SearchHistoryReducer.js.map
