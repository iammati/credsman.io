import{u,o as c,d as i,b as e,w as a,e as f,f as t,a as _,F as p,t as g,c as v,g as s,n as h}from"./app.70c59801.js";import{_ as k}from"./ActionMessage.b597ea42.js";import{_ as y}from"./FormSection.ba48da61.js";import{_ as m}from"./PrimaryButton.9f1882bd.js";import{S}from"./SectionBorder.fb308e01.js";import{r as D}from"./PlusIcon.90986c6c.js";import"./SectionTitle.a0cdb28e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={key:0},b={class:"col-span-6 sm:col-span-4"},E={__name:"VaultDataManager",props:{vault:Object},setup(o){const d=()=>{alert("XD")},r=u({logo:null,name:"",url:""});return(B,x)=>o.vault?(c(),i("div",V,[e(S),e(y,{onSubmitted:d},{title:a(()=>[t(" Vault Data Manager ")]),description:a(()=>[t(" Here you can add vault-related data like credentials for a specific area of this vault. ")]),form:a(()=>{var l,n;return[_("div",b,[(l=o.vault.datas)!=null&&l.length?(c(),i(p,{key:0},[t(g((n=o.vault.datas)==null?void 0:n.length),1)],64)):(c(),v(m,{key:1},{default:a(()=>[e(s(D),{class:"h-4 w-4"})]),_:1}))])]}),actions:a(()=>[e(k,{on:s(r).recentlySuccessful,class:"mr-3"},{default:a(()=>[t(" Saved. ")]),_:1},8,["on"]),e(m,{class:h({"opacity-25":s(r).processing}),disabled:s(r).processing},{default:a(()=>[t(" Save ")]),_:1},8,["class","disabled"])]),_:1})])):f("",!0)}};export{E as default};
