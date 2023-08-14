import{T as y,c as d,w as r,o,a,u as s,Z as k,e as i,s as h,t as p,g as e,y as $,D as w,b as v,d as u,q as x,i as j,F as N}from"./app.eda14a62.js";import{j as A,r as B,u as C,w as O,x as S}from"./BaseIcon.d8c52459.js";import{_ as V,a as D,b as T}from"./SectionTitleLineWithButton.4ecbbeb2.js";import{_ as m,a as b}from"./CardBox.a03b3bd4.js";import{_ as q}from"./BaseButtons.b261a93e.js";import{_ as E}from"./NotificationBar.b81f3540.js";import{_ as F,a as M}from"./Sort.e75e9549.js";import"./main.e2c00908.js";import"./index.ceb60faa.js";import"./screen_size.c61b8353.js";import"./BaseLevel.4628db95.js";const R={class:"py-2 flex"},I={class:"flex pl-4"},K={key:0},L={"data-label":"Name"},P={key:0,class:"before:hidden lg:w-1 whitespace-nowrap"},U={class:"py-4"},oe={__name:"Index",props:{roles:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},setup(t){const f=y({search:t.filters.search}),_=y({});function g(l){confirm("Are you sure you want to delete?")&&_.delete(route("role.destroy",l))}return(l,c)=>(o(),d(V,null,{default:r(()=>[a(s(k),{title:"Roles"}),a(T,null,{default:r(()=>[a(D,{icon:s(A),title:"Roles",main:""},{default:r(()=>[t.can.delete?(o(),d(m,{key:0,"route-name":l.route("role.create"),icon:s(B),label:"Add",color:"info","rounded-full":"",small:""},null,8,["route-name","icon"])):i("",!0)]),_:1},8,["icon"]),l.$page.props.flash.message?(o(),d(E,{key:0,color:"success",icon:s(C)},{default:r(()=>[h(p(l.$page.props.flash.message),1)]),_:1},8,["icon"])):i("",!0),a(b,{class:"mb-6","has-table":""},{default:r(()=>[e("form",{onSubmit:c[1]||(c[1]=v(n=>s(f).get(l.route("role.index")),["prevent"]))},[e("div",R,[e("div",I,[$(e("input",{type:"search","onUpdate:modelValue":c[0]||(c[0]=n=>s(f).search=n),class:"rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"Search"},null,512),[[w,s(f).search]]),a(m,{label:"Search",type:"submit",color:"info",class:"ml-4 inline-flex items-center px-4 py-2"})])])],32)]),_:1}),a(b,{class:"mb-6","has-table":""},{default:r(()=>[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[a(F,{label:"Name",attribute:"name"})]),t.can.edit||t.can.delete?(o(),u("th",K,"Actions")):i("",!0)])]),e("tbody",null,[(o(!0),u(N,null,x(t.roles.data,n=>(o(),u("tr",{key:n.id},[e("td",L,[a(s(j),{href:l.route("role.show",n.id),class:"no-underline hover:underline text-cyan-600 dark:text-cyan-400"},{default:r(()=>[h(p(n.name),1)]),_:2},1032,["href"])]),t.can.edit||t.can.delete?(o(),u("td",P,[a(q,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[t.can.edit?(o(),d(m,{key:0,"route-name":l.route("role.edit",n.id),color:"info",icon:s(O),small:""},null,8,["route-name","icon"])):i("",!0),t.can.delete?(o(),d(m,{key:1,color:"danger",icon:s(S),small:"",onClick:z=>g(n.id)},null,8,["icon","onClick"])):i("",!0)]),_:2},1024)])):i("",!0)]))),128))])]),e("div",U,[a(M,{data:t.roles},null,8,["data"])])]),_:1})]),_:1})]),_:1}))}};export{oe as default};