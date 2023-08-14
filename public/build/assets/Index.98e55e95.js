import{T as p,c as d,w as l,o,a,u as s,Z as k,e as r,s as y,t as h,g as e,y as $,D as w,b as v,d as u,q as x,i as j,F as N}from"./app.eda14a62.js";import{j as A,r as B,u as C,w as O,x as S}from"./BaseIcon.d8c52459.js";import{_ as V,a as D,b as T}from"./SectionTitleLineWithButton.4ecbbeb2.js";import{_ as m,a as b}from"./CardBox.a03b3bd4.js";import{_ as P}from"./BaseButtons.b261a93e.js";import{_ as q}from"./NotificationBar.b81f3540.js";import{_ as E,a as F}from"./Sort.e75e9549.js";import"./main.e2c00908.js";import"./index.ceb60faa.js";import"./screen_size.c61b8353.js";import"./BaseLevel.4628db95.js";const M={class:"py-2 flex"},I={class:"flex pl-4"},K={key:0},L={"data-label":"Name"},U={key:0,class:"before:hidden lg:w-1 whitespace-nowrap"},Z={class:"py-4"},oe={__name:"Index",props:{permissions:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},setup(t){const f=p({search:t.filters.search}),_=p({});function g(n){confirm("Are you sure you want to delete?")&&_.delete(route("permission.destroy",n))}return(n,c)=>(o(),d(V,null,{default:l(()=>[a(s(k),{title:"Permissions"}),a(T,null,{default:l(()=>[a(D,{icon:s(A),title:"Permissions",main:""},{default:l(()=>[t.can.delete?(o(),d(m,{key:0,"route-name":n.route("permission.create"),icon:s(B),label:"Add",color:"info","rounded-full":"",small:""},null,8,["route-name","icon"])):r("",!0)]),_:1},8,["icon"]),n.$page.props.flash.message?(o(),d(q,{key:0,color:"success",icon:s(C)},{default:l(()=>[y(h(n.$page.props.flash.message),1)]),_:1},8,["icon"])):r("",!0),a(b,{class:"mb-6","has-table":""},{default:l(()=>[e("form",{onSubmit:c[1]||(c[1]=v(i=>s(f).get(n.route("permission.index")),["prevent"]))},[e("div",M,[e("div",I,[$(e("input",{type:"search","onUpdate:modelValue":c[0]||(c[0]=i=>s(f).search=i),class:"rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"Search"},null,512),[[w,s(f).search]]),a(m,{label:"Search",type:"submit",color:"info",class:"ml-4 inline-flex items-center px-4 py-2"})])])],32)]),_:1}),a(b,{class:"mb-6","has-table":""},{default:l(()=>[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[a(E,{label:"Name",attribute:"name"})]),t.can.edit||t.can.delete?(o(),u("th",K,"Actions")):r("",!0)])]),e("tbody",null,[(o(!0),u(N,null,x(t.permissions.data,i=>(o(),u("tr",{key:i.id},[e("td",L,[a(s(j),{href:n.route("permission.show",i.id),class:"no-underline hover:underline text-cyan-600 dark:text-cyan-400"},{default:l(()=>[y(h(i.name),1)]),_:2},1032,["href"])]),t.can.edit||t.can.delete?(o(),u("td",U,[a(P,{type:"justify-start lg:justify-end","no-wrap":""},{default:l(()=>[t.can.edit?(o(),d(m,{key:0,"route-name":n.route("permission.edit",i.id),color:"info",icon:s(O),small:""},null,8,["route-name","icon"])):r("",!0),t.can.delete?(o(),d(m,{key:1,color:"danger",icon:s(S),small:"",onClick:G=>g(i.id)},null,8,["icon","onClick"])):r("",!0)]),_:2},1024)])):r("",!0)]))),128))])]),e("div",Z,[a(F,{data:t.permissions},null,8,["data"])])]),_:1})]),_:1})]),_:1}))}};export{oe as default};
