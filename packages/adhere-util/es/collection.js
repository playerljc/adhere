export default{processAsyncQueue(e){let u=0,s=e??[];return function r(){return new Promise((n,c)=>{if(u>=s.length)n();else{let t=s[u++];t?t.run.apply(t?.context??t.run,t?.argv??[]).then(e=>{t?.success?.(e),r().then(()=>{n()}).catch(e=>{c(e)})}).catch(e=>{t?.fail?.(e),c(e)}):c()}})}()}};
//# sourceMappingURL=collection.js.map
