import{u as l,r as d,o as c,d as u,b as o,g as a,w as r,F as p,H as f,a as e,n as _,f as w,l as b}from"./app.94c89ff0.js";import{A as g}from"./AuthenticationCard.50db057d.js";import{_ as h}from"./AuthenticationCardLogo.36137aaa.js";import{_ as x}from"./InputError.784ef562.js";import{_ as v}from"./InputLabel.ef83ebdd.js";import{_ as y}from"./PrimaryButton.b5d9aadf.js";import{_ as V}from"./TextInput.f7dea3f9.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.201fb194.js";const C=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(F){const s=l({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(c(),u(p,null,[o(a(f),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[C,e("form",{onSubmit:b(n,["prevent"])},[e("div",null,[o(v,{for:"password",value:"Password"}),o(V,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=m=>a(s).password=m),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",k,[o(y,{class:_(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{z as default};