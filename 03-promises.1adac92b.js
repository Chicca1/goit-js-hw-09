var form=document.querySelector(".form");function handleSubmit(e){e.preventDefault();for(var o=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]'),r=Number(o.value),u=Number(t.value),c=Number(n.value),a=1;a<=c;a++){createPromise(a,r+(a-1)*u).then((function(e){var o=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}form.reset()}form.addEventListener("submit",handleSubmit);
//# sourceMappingURL=03-promises.1adac92b.js.map
