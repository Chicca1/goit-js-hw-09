document.addEventListener("DOMContentLoaded",(function(){function e(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),a=parseInt(n.value),u=parseInt(o.value);!function(t,n,o){for(var i=1;i<=t;i++)e(i,n).then((function(e){var t=e.position,n=e.delay;Notiflix.Notify.Success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;Notiflix.Notify.Failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n+=o}(parseInt(i.value),a,u)}))}));
//# sourceMappingURL=03-promises.0a054238.js.map