import{u as g}from"./entry.bd5fb27e.js";import{G as h,a6 as c,H as m,h as p,u as y}from"./runtime-core.esm-bundler.9c14be38.js";import"./query.6a3ed619.js";import"./_plugin-vue_export-helper.c27b6911.js";const U=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:u}=y(),{between:s,default:l}=c(),i=m(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:s,parent:u}},render({use:e,unwrap:u,fallbackSlot:s,between:l,tags:i,parent:n}){var f;try{let o=e;if(typeof e=="string"&&(o=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!o)return s?s():p("div");if(!u)return[o()];const{flatUnwrap:d}=g(),a=d(o(),i);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{U as default};
