function createPromise(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".form");document.querySelector("#createBtn").addEventListener("click",(function(){for(var e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]'),o=parseInt(e.value),i=parseInt(t.value),a=parseInt(n.value),c=0;c<a;c++)createPromise(c,o+c*i).then((function(e){var t=e.position,n=e.delay;Notiflix.Notify.Success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;Notiflix.Notify.Failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}));e.value="",t.value="",n.value=""}))}));
//# sourceMappingURL=03-promises.ccf7604e.js.map
