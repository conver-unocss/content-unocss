import{w as i,b as a}from"./query.6a3ed619.js";import{G as n,H as c,M as o,N as h,A as u}from"./runtime-core.esm-bundler.9c14be38.js";const d=["src","alt","width","height"],g=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=c(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?i(e.src,a().app.baseURL):e.src});return(r,l)=>(o(),h("img",{src:u(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}});export{g as default};
