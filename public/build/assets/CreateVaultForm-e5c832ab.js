import{u as h}from"./index-49e9ee47.js";import{_ as k}from"./FormSection-62f6e62c.js";import{_ as p}from"./InputError-70c83abf.js";import{_ as g}from"./InputLabel-a1605672.js";import{_ as C}from"./PrimaryButton-486c1c3d.js";import{_ as V}from"./TextInput-fe0b755b.js";import{d as $}from"./DefaultLogo-98b9d963.js";import{n as S}from"./Notify-39132b21.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{c as F,w as m,o as c,f as d,a as s,b as o,d as i,u as t,e as y,t as z,F as b,n as I,aM as N,aJ as H}from"./app-f1a5ea95.js";import"./SectionTitle-126a7ea7.js";const L=a=>(N("data-v-d23439de"),a=a(),H(),a),M={class:"col-span-6 sm:col-span-4"},U=["src","alt"],D={id:"logo-wrapper"},j=L(()=>s("label",{for:"logo",id:"logo-label",class:"mt-1"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("path",{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"})]),s("p",{class:"mt-5",style:{"font-size":"1rem"}},[s("span",{class:"underline font-bold text-gray-800"},"Click to upload"),s("span",{class:"text-gray-600"}," or drag and drop ")]),s("p",{class:"mt-1 text-gray-600",style:{"font-size":"14px"}}," Maximum file size is 5 MB. ")],-1)),E={key:0,class:"mt-5 w-full bg-gray-200 rounded-full"},T=["width"],J={class:"col-span-6 sm:col-span-4"},O={class:"col-span-6 sm:col-span-4"},q={__name:"CreateVaultForm",props:{vault:Object},setup(a){var f,v,_;const r=a,e=h({logo:(f=r.vault)==null?void 0:f.logo,name:(v=r.vault)==null?void 0:v.name,url:(_=r.vault)==null?void 0:_.url}),w=()=>{let l="store";r.vault&&(l="update"),e.post(route(`vaults.${l}`,{vault:r.vault}),{forceFormData:!0,errorBag:`${l}Vault`,preserveScroll:!0,preserveState:!0,onSuccess:()=>{l==="update"&&S("success","Vault updated","This vault has been successfully updated!")}})},x=l=>{e.logo=l.target.files[0]};return(l,u)=>(c(),F(k,{onSubmitted:w},{title:m(()=>[d(" Vault Details ")]),description:m(()=>[d(" Create a new vault to collaborate with others on credentials. ")]),form:m(()=>[s("div",M,[o(g,{for:"logo",value:"Vault Logo"}),a.vault?(c(),i("img",{key:0,src:a.vault.logo?`/storage/${a.vault.logo}`:t($)(r),alt:a.vault.logo?`${a.vault.logo}`:"Vault Logo",id:"preview",class:"object-cover rounded-full mt-2"},null,8,U)):y("",!0),s("div",D,[j,t(e).progress?(c(),i("div",E,[s("div",{class:"bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",width:t(e).progress.percentage},z(t(e).progress.percentage)+"% ",9,T)])):y("",!0),s("input",{onInput:u[0]||(u[0]=n=>x(n)),type:"file",name:"logo",id:"logo",class:"w-full mt-1"},null,32)]),o(p,{message:t(e).errors.logo,class:"mt-2"},null,8,["message"])]),s("div",J,[o(g,{for:"name",value:"Vault Name"}),o(V,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":u[1]||(u[1]=n=>t(e).name=n),type:"text",class:"block w-full mt-1"},null,8,["modelValue"]),o(p,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),s("div",O,[o(g,{for:"url",value:"Vault Url"}),o(V,{id:"url",modelValue:t(e).url,"onUpdate:modelValue":u[2]||(u[2]=n=>t(e).url=n),type:"url",class:"block w-full mt-1"},null,8,["modelValue"]),o(p,{message:t(e).errors.url,class:"mt-2"},null,8,["message"])])]),actions:m(()=>[o(C,{class:I({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:m(()=>[a.vault?(c(),i(b,{key:0},[d(" Update ")],64)):(c(),i(b,{key:1},[d(" Create ")],64))]),_:1},8,["class","disabled"])]),_:1}))}},te=B(q,[["__scopeId","data-v-d23439de"]]);export{te as default};