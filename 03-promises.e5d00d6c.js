function e(e,t){return new Promise(((o,i)=>{const n=Math.random()>.3;setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}const t=document.querySelector(".form");document.querySelector("#createBtn");t.addEventListener("submit",(t=>{const{step:o,delay:i,amount:n}=t.target.elements,s=parseInt(i.value),r=parseInt(o.value),a=parseInt(n.value);for(let t=0;t<a;t++)e(t,s+t*r).then((({position:e,delay:t})=>{Notiflix.Notify.Success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{Notiflix.Notify.Failure(`❌ Rejected promise ${e} in ${t}ms`)}));t.target.reset()}));
//# sourceMappingURL=03-promises.e5d00d6c.js.map