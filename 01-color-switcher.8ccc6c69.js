const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(()=>{timerId=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.disabled=!0}),1e3)})),e.addEventListener("click",(()=>{clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8ccc6c69.js.map