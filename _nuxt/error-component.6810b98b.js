import{d as o,_ as c,o as f,c as g,n as E,g as k,u as r}from"./entry.d1c88e91.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(t){var n;(t.error.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const s=Number(t.error.statusCode||500),a=s===404,u=(n=t.error.statusMessage)!=null?n:a?"Page Not Found":"Internal Server Error",i=t.error.message||t.error.toString(),d=void 0,l=o(()=>c(()=>import("./error-404.9eeaf683.js"),["error-404.9eeaf683.js","error-404.18ced855.css","entry.d1c88e91.js","entry.0d7d8a9b.css"],import.meta.url).then(e=>e.default||e)),m=o(()=>c(()=>import("./error-500.a7f7b5c7.js"),["error-500.a7f7b5c7.js","error-500.e60962de.css","entry.d1c88e91.js","entry.0d7d8a9b.css"],import.meta.url).then(e=>e.default||e)),p=a?l:m;return(e,_)=>(f(),g(r(p),E(k({statusCode:r(s),statusMessage:r(u),description:r(i),stack:r(d)})),null,16))}},x=P;export{x as default};
