import{_ as w}from"./Dgt50E7s.js";import C from"./C7gSzwL8.js";import{f as k,u as N,g as v,n as B,o as e,c as a,a as l,t as i,h as d,F as f,r as g,j as V,b as y,w as x,d as D}from"./EPCG04oJ.js";import{u as F,q as Y}from"./BWGfAMvX.js";import"./DWzCaneX.js";import"./BsYmvPZw.js";import"./nsGxwT8s.js";const j={class:"py-5 px-4"},q={class:"text-2xl font-semibold py-5"},A={key:0},E={class:"text-3xl font-medium"},L={class:"pl-4 mt-2"},R={class:"mb-2"},T={class:"text-gray-500 pr-4"},M=k({__name:"[tag]",async setup($){let o,m;const{params:p}=N(),{data:b}=([o,m]=v(()=>F("tag-page",()=>Y("/blogs").where({tags:{$contains:p.tag}}).sort({_id:-1}).find())),o=await o,m(),o),h=B(()=>(b.value||[]).reduce((r,s)=>{const _=new Date(s.date).getFullYear(),c={date:s.date,title:s.title,_path:s._path},n=r.find(t=>t.year===_);return n?n.data.push(c):r.push({year:_,data:[c]}),r},[]));return(r,s)=>{var n;const _=w,c=C;return e(),a("div",j,[l("h1",q,"Tag: "+i(d(p).tag),1),((n=d(h))==null?void 0:n.length)!==0?(e(),a("ul",A,[(e(!0),a(f,null,g(d(h),t=>(e(),a("li",{class:"mb-8",key:t.year},[y(c,{value:t},{default:x(()=>[l("h2",E,i(t.year),1),l("ul",L,[(e(!0),a(f,null,g(t.data,u=>(e(),a("li",R,[l("span",T,i(u.date),1),y(_,{to:u._path,class:"underline underline-offset-2"},{default:x(()=>[D(i(u.title),1)]),_:2},1032,["to"])]))),256))])]),_:2},1032,["value"])]))),128))])):V("",!0)])}}});export{M as default};
