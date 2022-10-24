import{u as h,o as c,c as w,w as n,f as i,a as s,b as a,t as V,g as t,d as p,e as k,F as $,n as C}from"./app.68441ca1.js";import{_ as x}from"./FormSection.dc8b26e8.js";import{a as _,_ as b}from"./TextInput.447c125f.js";import{_ as d}from"./InputLabel.e438ae10.js";import{_ as F}from"./PrimaryButton.e03a6ac6.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.798709f1.js";const N={class:"col-span-6"},U={class:"flex items-center mt-2"},D=["src","alt"],S={class:"ml-4 leading-tight"},j={class:"text-sm text-gray-700"},I={class:"col-span-6 sm:col-span-4"},O=["src"],z={class:"col-span-6 sm:col-span-4"},E={class:"col-span-6 sm:col-span-4"},L={__name:"CreateVaultForm",props:{vault:Object},setup(m){var f,g,v;const r=m,e=h({logo:(f=r.vault)==null?void 0:f.logo,name:(g=r.vault)==null?void 0:g.name,url:(v=r.vault)==null?void 0:v.url}),y=()=>{let l="store";r.vault&&(l="update"),e.post(route(`vaults.${l}`,{vault:r.vault}),{forceFormData:!0,errorBag:`${l}Vault`,preserveScroll:!0})};return(l,o)=>(c(),w(x,{onSubmitted:y},{title:n(()=>[i(" Vault Details ")]),description:n(()=>[i(" Create a new vault to collaborate with others on credentials. ")]),form:n(()=>[s("div",N,[a(d,{value:"Vault Owner"}),s("div",U,[s("img",{class:"object-cover w-12 h-12 rounded-full",src:l.$page.props.user.profile_photo_url,alt:l.$page.props.user.name},null,8,D),s("div",S,[s("div",null,V(l.$page.props.user.name),1),s("div",j,V(l.$page.props.user.email),1)])])]),s("div",I,[a(d,{for:"logo",value:"Vault Logo"}),s("input",{onInput:o[0]||(o[0]=u=>t(e).logo=u.target.files[0]),type:"file",name:"logo",id:"logo",class:"block w-full mt-1"},null,32),m.vault?(c(),p("img",{key:0,src:`/storage/${m.vault.logo}`,alt:"{{ vault.logo }}",class:"preview"},null,8,O)):k("",!0),a(_,{message:t(e).errors.logo,class:"mt-2"},null,8,["message"])]),s("div",z,[a(d,{for:"name",value:"Vault Name"}),a(b,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":o[1]||(o[1]=u=>t(e).name=u),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),a(_,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),s("div",E,[a(d,{for:"url",value:"Vault Url"}),a(b,{id:"url",modelValue:t(e).url,"onUpdate:modelValue":o[2]||(o[2]=u=>t(e).url=u),type:"text",class:"block w-full mt-1"},null,8,["modelValue"]),a(_,{message:t(e).errors.url,class:"mt-2"},null,8,["message"])])]),actions:n(()=>[a(F,{class:C({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:n(()=>[m.vault?(c(),p($,{key:0},[i(" Update ")],64)):(c(),p($,{key:1},[i(" Create ")],64))]),_:1},8,["class","disabled"])]),_:1}))}},M=B(L,[["__scopeId","data-v-86c865f4"]]);export{M as default};
