import{f as i,o as s,d as c,y,E as V,g as d,t as b,n as m,F as f,q as g,c as v}from"./app.eda14a62.js";const h=["type","name","value"],k=d("span",{class:"check"},null,-1),x={class:"pl-2"},S={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const l=e,t=i({get:()=>l.modelValue,set:a=>{r("update:modelValue",a)}}),n=i(()=>l.type==="radio"?"radio":"checkbox");return(a,u)=>(s(),c("label",{class:m([e.type,"mr-6 mb-3 last:mr-0"])},[y(d("input",{"onUpdate:modelValue":u[0]||(u[0]=o=>t.value=o),type:n.value,name:e.name,value:e.inputValue},null,8,h),[[V,t.value]]),k,d("span",x,b(e.label),1)],2))}},C={__name:"FormCheckRadioGroup",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},componentClass:{type:String,default:null},isColumn:Boolean,modelValue:{type:[Array,String,Number,Boolean],default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const l=e,t=i({get:()=>l.modelValue,set:n=>{r("update:modelValue",n)}});return(n,a)=>(s(),c("div",{class:m(["flex justify-start flex-wrap -mb-3",{"flex-col":e.isColumn}])},[(s(!0),c(f,null,g(e.options,(u,o)=>(s(),v(S,{key:o,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=p=>t.value=p),type:e.type,name:e.name,"input-value":o,label:u,class:m(e.componentClass)},null,8,["modelValue","type","name","input-value","label","class"]))),128))],2))}};export{C as _};
