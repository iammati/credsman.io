import{u,o as l,d as m,b as s,g as t,w as o,F as c,H as f,t as _,e as p,a,n as w,f as g,l as b}from"./app.94c89ff0.js";import{A as y}from"./AuthenticationCard.50db057d.js";import{_ as x}from"./AuthenticationCardLogo.36137aaa.js";import{_ as h}from"./InputError.784ef562.js";import{_ as k}from"./InputLabel.ef83ebdd.js";import{_ as V}from"./PrimaryButton.b5d9aadf.js";import{_ as v}from"./TextInput.f7dea3f9.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.201fb194.js";const F=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},J={__name:"ForgotPassword",props:{status:String},setup(r){const e=u({email:""}),n=()=>{e.post(route("password.email"))};return(S,i)=>(l(),m(c,null,[s(t(f),{title:"Forgot Password"}),s(y,null,{logo:o(()=>[s(x)]),default:o(()=>[F,r.status?(l(),m("div",N,_(r.status),1)):p("",!0),a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[s(k,{for:"email",value:"Email"}),s(v,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":i[0]||(i[0]=d=>t(e).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),s(h,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),a("div",C,[s(V,{class:w({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:o(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{J as default};