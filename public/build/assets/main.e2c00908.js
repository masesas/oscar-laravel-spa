import{J as a}from"./app.eda14a62.js";import{a as s}from"./index.ceb60faa.js";const m=a("main",{state:()=>({userName:null,userEmail:null,userAvatar:null,isFieldFocusRegistered:!1,clients:[],history:[]}),actions:{setUser(e){e.name&&(this.userName=e.name),e.email&&(this.userEmail=e.email),e.avatar&&(this.userAvatar=e.avatar)},fetch(e){s.get(`data-sources/${e}.json`).then(t=>{t.data&&t.data.data&&(this[e]=t.data.data)}).catch(t=>{alert(t.message)})}}});export{m as u};