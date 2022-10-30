import{_ as v}from"./AppLayout.b80517fc.js";import"./ApplicationLogo.04f755a7.js";/* empty css                                                                */import{_ as m}from"./PrimaryButton.97111ce2.js";import{o as s,c as r,w as a,a as t,t as c,g as i,L as u,d as o,F as f,h as g,b as d,f as x}from"./app.e643e729.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"item flex w-full rounded-3xl shadow-lg border p-6 gap-4"},y={class:"flex items-center"},b=["src"],k={class:"flex items-center"},V={class:"text-gray-400"},$={__name:"Vault",props:{vault:Object,last:Boolean},setup(e){return(l,_)=>(s(),r(i(u),{href:l.route("vaults.show",{vault:e.vault})},{default:a(()=>[t("div",w,[t("div",y,[t("img",{src:`/storage/${e.vault.logo}`,alt:"{{ vault.logo }}"},null,8,b)]),t("div",k,[t("div",null,[t("p",null,c(e.vault.url),1),t("p",V,c(e.vault.name),1)])])])]),_:1},8,["href"]))}},B=p($,[["__scopeId","data-v-433bc55b"]]),C=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Vaults ",-1),L={class:"py-12"},N={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},j={class:"bg-white overflow-hidden shadow-xl rounded-lg"},z={class:"p-6 bg-white border-b border-gray-200 relative"},F={class:"md:grid md:grid-cols-2 md:gap-6"},M={key:0},A={key:1,class:"flex items-center"},D=t("div",{class:"flex gap-2 text-gray-500"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})]),t("p",null," You haven't create any Vault yet... ")],-1),E=[D],H={class:"text-end"},G={__name:"Vaults",props:{vaults:Array},setup(e){return(l,_)=>(s(),r(v,{title:"Vaults"},{header:a(()=>[C]),default:a(()=>[t("div",L,[t("div",N,[t("div",j,[t("div",z,[t("div",F,[e.vaults.length>0?(s(),o("div",M,[(s(!0),o(f,null,g(e.vaults,(n,h)=>(s(),r(B,{key:n,vault:n,last:h===e.vaults.length},null,8,["vault","last"]))),128))])):(s(),o("div",A,E)),t("div",H,[d(i(u),{href:l.route("vaults.create")},{default:a(()=>[d(m,null,{default:a(()=>[x(" Create new vault ")]),_:1})]),_:1},8,["href"])])])])])])])]),_:1}))}};export{G as default};