import{P as g,d,b as t,u as s,w as m,F as w,o as n,bz as h,t as x,e as c,a,c as k,f as u,s as y,n as V,j as v}from"./app-5639a22b.js";import{A as $}from"./AuthenticationCard-7df94300.js";import{_ as B}from"./AuthenticationCardLogo-70fbb353.js";import{_ as C}from"./Checkbox-f7c70102.js";import{_ as f}from"./InputError-d448928e.js";import{_ as p}from"./InputLabel-13f27d74.js";import{_ as F}from"./PrimaryButton-856c5b54.js";import{_}from"./TextInput-7c087f50.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-11e47354.js";import"./ApplicationLogo-8cb848bb.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},L={class:"flex items-center"},R=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},J={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=g({email:"",password:"",remember:!1}),b=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(w,null,[t(s(h),{title:"Log in"}),t($,null,{logo:m(()=>[t(B)]),default:m(()=>[l.status?(n(),d("div",N,x(l.status),1)):c("",!0),a("form",{onSubmit:v(b,["prevent"])},[a("div",null,[t(p,{for:"email",value:"Email"}),t(_,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),t(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",S,[t(p,{for:"password",value:"Password"}),t(_,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",q,[a("label",L,[t(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),a("div",U,[l.canResetPassword?(n(),k(s(y),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),t(F,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{J as default};