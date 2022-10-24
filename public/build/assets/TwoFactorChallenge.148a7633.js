import{r as d,u as x,o as s,d as r,b as o,g as t,w as m,F as c,H as h,a as i,f as n,l as y,n as C,C as w}from"./app.807d0b9b.js";import{A as V}from"./AuthenticationCard.af4ea5fe.js";import{_ as $}from"./AuthenticationCardLogo.739a35be.js";import{_ as p}from"./InputError.37d1a923.js";import{_ as v}from"./InputLabel.d100a771.js";import{_ as F}from"./PrimaryButton.b41e84fe.js";import{_ as g}from"./TextInput.df2b2c4b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.6bbe8099.js";const I={class:"mb-4 text-sm text-gray-600"},T=["onSubmit"],U={key:0},B={key:1},N={class:"flex items-center justify-end mt-4"},A=["onClick"],G={__name:"TwoFactorChallenge",setup(H){const a=d(!1),e=x({code:"",recovery_code:""}),f=d(null),_=d(null),k=async()=>{a.value^=!0,await w(),a.value?(f.value.focus(),e.code=""):(_.value.focus(),e.recovery_code="")},b=()=>{e.post(route("two-factor.login"))};return(P,l)=>(s(),r(c,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o($)]),default:m(()=>[i("div",I,[a.value?(s(),r(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),r(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:y(b,["prevent"])},[a.value?(s(),r("div",B,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),r("div",U,[o(v,{for:"code",value:"Code"}),o(g,{id:"code",ref_key:"codeInput",ref:_,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",N,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(k,["prevent"])},[a.value?(s(),r(c,{key:1},[n(" Use an authentication code ")],64)):(s(),r(c,{key:0},[n(" Use a recovery code ")],64))],8,A),o(F,{class:C(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],40,T)]),_:1})],64))}};export{G as default};
