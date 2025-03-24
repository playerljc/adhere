function Compose(l){return(o,i)=>new Promise(r=>{let e=-1,t=Array.from({length:l.length}).fill(void 0),n=()=>{if(!(e+1>=l.length))return e++,t[e]=l[e](o,()=>n()),t[e];Promise.all(t.filter(e=>e instanceof Promise)).then(()=>{if(i){var e=i();if(e&&e.then)return void e.then(()=>{r()})}r()})};n()})}export default Compose;
//# sourceMappingURL=index.js.map
