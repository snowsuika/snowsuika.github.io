import{_}from"./DZ6VbQLJ.js";import m from"./AXblQgEq.js";import{_ as p}from"./BNIyP0Rq.js";import{f,o as s,i as u,w as x,b as a,a as t,t as o,c,F as h,r as g}from"./MImH6pqM.js";const b={class:"p-3 w-full"},w={class:"text-xl font-semibold tracking-widest"},v={class:"text-xs text-neutral-400 flex space-x-3 border-b border-dashed border-gray-300 py-2"},k={class:"flex items-center"},y={class:"flex items-center flex-wrap"},B={class:"flex"},C={class:"text-sm text-neutral-500 text-ellipsis line-clamp-3 my-3 tracking-widest"},I=t("button",{class:"text-neutral-500 text-xs float-right"}," Read More ..",-1),E=f({__name:"PostCard",props:{path:{default:"/"},title:{default:"no-title"},date:{default:"no-date"},description:{default:"no-description"},image:{default:"/posts-cover/no-cover.png"},tags:{default:()=>[]}},setup(l){const e=l;return(N,F)=>{const i=_,n=m,d=p;return s(),u(d,{to:e.path,class:"bg-white border rounded-md md:flex block mb-3 transform transition duration-300 hover:scale-[1.01] hover:shadow-md"},{default:x(()=>[a(i,{src:e.image,class:"md:w-1/3 w-full p-2 max-h-[200px] object-cover md:min-w-[330px]"},null,8,["src"]),t("div",b,[t("h2",w,o(e.title),1),t("div",v,[t("div",k,[a(n,{name:"IconCalendar",color:"gray"}),t("p",null,o(e.date),1)]),t("div",y,[a(n,{name:"IconTag",color:"gray"}),t("ul",B,[(s(!0),c(h,null,g(e==null?void 0:e.tags,r=>(s(),c("li",{class:"ml-1 after:content-[','] after:ml-1 last:after:content-none last:after:ml-0",key:r},o(r),1))),128))])])]),t("p",C,o(e.description),1),I])]),_:1},8,["to"])}}});export{E as _};
