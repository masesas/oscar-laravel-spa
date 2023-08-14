import{M as g,o as a,d,g as t,N as $,t as o,a as l,w as i,c as m,u as s,e as u,F as h,q as y,T as w,Z as _,s as N}from"./app.eda14a62.js";import{w as j,x as v,y as x,a as O,r as M,u as B}from"./BaseIcon.d8c52459.js";import{_ as I,a as L,b as C}from"./SectionTitleLineWithButton.4ecbbeb2.js";import{_ as c,a as A}from"./CardBox.a03b3bd4.js";import{_ as k}from"./BaseButtons.b261a93e.js";import{_ as E}from"./NotificationBar.b81f3540.js";import"./main.e2c00908.js";import"./index.ceb60faa.js";import"./screen_size.c61b8353.js";import"./BaseLevel.4628db95.js";const V={"data-label":"Name"},p={"data-label":"Description"},D={"data-label":"Enabled"},S={key:0,class:"before:hidden lg:w-1 whitespace-nowrap"},T={__name:"MenuItemList",props:{item:{type:Object,default:()=>({})},menu:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})},level:{type:Number,default:0}},setup(e){return(n,r)=>{const f=g("MenuItemList",!0);return a(),d(h,null,[(a(),d("tr",{key:e.item.id},[t("td",V,[t("div",{style:$({"margin-left":e.level*20+"px"})},o(e.item.name),5)]),t("td",p,o(e.item.description),1),t("td",D,o(e.item.enabled),1),e.can.edit||e.can.delete?(a(),d("td",S,[l(k,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[e.can.edit?(a(),m(c,{key:0,"route-name":n.route("menu.item.edit",{menu:e.menu.id,item:e.item.id}),color:"info",icon:s(j),small:""},null,8,["route-name","icon"])):u("",!0),e.can.delete?(a(),m(c,{key:1,color:"danger",icon:s(v),small:"",onClick:r[0]||(r[0]=b=>n.destroy(e.item.id))},null,8,["icon"])):u("",!0)]),_:1})])):u("",!0)])),(a(!0),d(h,null,y(e.item.children,b=>(a(),m(f,{item:b,menu:e.menu,can:e.can,level:e.level+1},null,8,["item","menu","can","level"]))),256))],64)}}},q={class:"border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm"},F=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Name ",-1),z={"data-label":"Name"},P=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Machine name ",-1),Z={"data-label":"Machine Name"},G=t("th",null," Name ",-1),H=t("th",null," Description ",-1),J=t("th",null," Enable ",-1),K={key:0},le={__name:"Index",props:{items:{type:Object,default:()=>({})},menu:{type:Object,default:()=>({})},can:{type:Object,default:()=>({})}},setup(e){return w({}),(n,r)=>(a(),m(I,null,{default:i(()=>[l(s(_),{title:"Menu Items"}),l(C,null,{default:i(()=>[l(L,{icon:s(x),title:"Menu Items",main:""},{default:i(()=>[l(k,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[l(c,{"route-name":n.route("menu.index"),icon:s(O),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"]),e.can.delete?(a(),m(c,{key:0,"route-name":n.route("menu.item.create",e.menu.id),icon:s(M),label:"Add",color:"info","rounded-full":"",small:""},null,8,["route-name","icon"])):u("",!0)]),_:1})]),_:1},8,["icon"]),n.$page.props.flash.message?(a(),m(E,{key:0,color:"success",icon:s(B)},{default:i(()=>[N(o(n.$page.props.flash.message),1)]),_:1},8,["icon"])):u("",!0),l(A,{class:"mb-6","has-table":""},{default:i(()=>[t("table",q,[t("tbody",null,[t("tr",null,[F,t("td",z,o(e.menu.name),1)]),t("tr",null,[P,t("td",Z,o(e.menu.machine_name),1)])])]),t("table",null,[t("thead",null,[t("tr",null,[G,H,J,e.can.edit||e.can.delete?(a(),d("th",K,"Actions")):u("",!0)])]),t("tbody",null,[(a(!0),d(h,null,y(e.items,f=>(a(),m(T,{item:f,menu:e.menu,can:e.can,level:0},null,8,["item","menu","can"]))),256))])])]),_:1})]),_:1})]),_:1}))}};export{le as default};
