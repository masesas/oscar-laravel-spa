import{c as n,w as a,o as r,a as e,u as s,Z as c,g as t,t as l}from"./app.eda14a62.js";import{j as m,a as d}from"./BaseIcon.d8c52459.js";import{_,a as u,b as p}from"./SectionTitleLineWithButton.4ecbbeb2.js";import{_ as f,a as b}from"./CardBox.a03b3bd4.js";import"./main.e2c00908.js";import"./index.ceb60faa.js";import"./screen_size.c61b8353.js";import"./BaseLevel.4628db95.js";const h=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Name ",-1),w={"data-label":"Name"},k=t("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Created ",-1),x={"data-label":"Created"},A={__name:"Show",props:{permission:{type:Object,default:()=>({})}},setup(o){return(i,g)=>(r(),n(_,null,{default:a(()=>[e(s(c),{title:"View permission"}),e(p,null,{default:a(()=>[e(u,{icon:s(m),title:"View permission",main:""},{default:a(()=>[e(f,{"route-name":i.route("permission.index"),icon:s(d),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),e(b,{class:"mb-6"},{default:a(()=>[t("table",null,[t("tbody",null,[t("tr",null,[h,t("td",w,l(o.permission.name),1)]),t("tr",null,[k,t("td",x,l(new Date(o.permission.created_at).toLocaleString()),1)])])])]),_:1})]),_:1})]),_:1}))}};export{A as default};