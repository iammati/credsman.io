import{u as $}from"./index-11e47354.js";import{_ as R}from"./ActionMessage-f90ba305.js";import{_ as K}from"./FormSection-f5d94f8a.js";import{_ as Z}from"./PrimaryButton-856c5b54.js";import{S as Q}from"./SectionBorder-4662bffb.js";import{r as L,o as i,d as u,a,m as B,b as p,u as y,e as b,w as d,f as _,t as V,n as T,F as x,aM as j,aJ as G,c as I,g as H,j as W,q as M,bj as F}from"./app-5639a22b.js";import{_ as X}from"./InputLabel-13f27d74.js";import{_ as Y}from"./TextInput-7c087f50.js";import{C as ee,L as te}from"./index-382ddcb3.js";import{_ as N}from"./SecondaryButton-21dcd17b.js";import{_ as q}from"./DangerButton-8328712b.js";import{_ as E}from"./ConfirmationModal-949a00d8.js";import{n as S}from"./Notify-836ad8f0.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-79a51aef.js";import"./Modal-e24b0208.js";class ae{constructor(e,o=500){return new Promise((h,r)=>{e.style.removeProperty("display");let g=window.getComputedStyle(e).display;g==="none"&&(g="block"),e.style.display=g;let l=e.offsetHeight;e.style.overflow="hidden",["height","paddingTop","paddingBottom","marginTop","marginBottom"].forEach(n=>e.style[n]=0),e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=o+"ms",e.style.height=l+"px",["padding-top","padding-bottom","margin-top","margin-bottom"].forEach(n=>e.style.removeProperty(n)),window.setTimeout(()=>["height","overflow","transition-duration","transition-property"].forEach(n=>e.style.removeProperty(n)),o),h(!1)})}}class oe{constructor(e,o=500,h){return new Promise((r,g)=>{e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=o+"ms",e.offsetHeight,e.style.overflow="hidden",["height","paddingTop","paddingBottom","marginTop","marginBottom"].forEach(l=>e.style[l]=0),window.setTimeout(()=>{e.style.display="none",["height","padding-top","padding-bottom","margin-bottom","overflow","transition-duration","transition-property"].forEach(l=>e.style.removeProperty(l)),r(!1)},o)})}}class se{constructor(e,o=500){return window.getComputedStyle(e).display==="none"?new ae(e,o):new oe(e,o)}}class le{constructor(e){let o=0,h=0;if(e===void 0)return{top:h,left:o};for(;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)o+=e.offsetLeft-e.scrollLeft,h+=e.offsetTop-e.scrollTop,e=e.offsetParent;return{top:h,left:o}}}const ne=t=>(j("data-v-58e1429a"),t=t(),G(),t),re={class:"accordion"},de={class:"flex items-center p-3"},ie={class:"slot w-full"},ce={class:"w-full flex justify-end items-center gap-2"},ue={class:"arrow-icon icon-hover"},pe={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash3",viewBox:"0 0 16 16"},ve=ne(()=>a("path",{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"},null,-1)),fe=[ve],ye={class:"body hidden"},he={class:"px-3"},me={__name:"Accordion",props:{vaultId:Number,data:Object,readOnly:Boolean},setup(t){const e=l=>{const n=l.currentTarget.nextSibling,v=l.currentTarget.querySelector(".arrow-icon svg");new se(n).finally(()=>{new le(n).top!==0?v.style.transform="rotate(180deg)":v.style.transform=""})},o=L(null),h=$(),r=(l,n)=>{l.stopImmediatePropagation()&&l.preventDefault(),o.value=n},g=()=>{h.delete(route("vaults.datas.groups.destroy",{dataId:o.value.id}),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{S("info",`Deleted group „${o.value.group_name}“`),o.value=null}})};return(l,n)=>(i(),u(x,null,[a("div",re,[a("div",{onClick:e,class:"head"},[a("div",de,[a("div",ie,[B(l.$slots,"head",{},void 0,!0)]),a("div",ce,[a("div",ue,[p(y(ee),{class:"w-5 h-5"})]),t.readOnly?b("",!0):(i(),u("div",{key:0,onClick:n[0]||(n[0]=v=>r(v,t.data)),class:"delete icon-hover"},[t.readOnly?b("",!0):(i(),u("svg",pe,fe))]))])])]),a("div",ye,[a("div",he,[B(l.$slots,"body",{},void 0,!0)])])]),p(E,{show:o.value!=null,onClose:n[2]||(n[2]=v=>o.value=null)},{title:d(()=>[_(" Delete Group – „"+V(t.data.group_name)+"“ ",1)]),content:d(()=>[_(" Are you sure you would like to delete this group? ")]),footer:d(()=>[p(N,{onClick:n[1]||(n[1]=v=>o.value=null)},{default:d(()=>[_(" Cancel ")]),_:1}),p(q,{class:T(["ml-3",{"opacity-25":y(h).processing}]),disabled:y(h).processing,onClick:g},{default:d(()=>[_(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}},_e=U(me,[["__scopeId","data-v-58e1429a"]]);const C=t=>(j("data-v-d5b65bdb"),t=t(),G(),t),ge={key:2,class:"flex justify-end mt-4 mb-4"},we={key:3,class:"my-8 block"},be={id:"data-blocks"},ke=["data-id"],Se=["value"],xe={key:1},$e=["data-value"],Ce={key:0,class:"grid grid-cols-2 gap-4 readonly flex items-center",style:{gap:"8px"}},Oe=["onClick"],De=["onClick"],Ve=["value"],Ne={class:"key flex"},Te=["value"],Ae=C(()=>a("span",{class:"icon"}," = ",-1)),Be={class:"button"},Ie=C(()=>a("span",null," Encrypt ",-1)),He={class:"close"},Me=["onClick"],Fe=C(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash3",viewBox:"0 0 16 16"},[a("path",{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"})],-1)),Pe=[Fe],Ze=C(()=>a("hr",{class:"mt-2"},null,-1)),Le=["onSubmit"],je={key:0,class:"flex mt-3"},Ge={class:"key flex"},qe=["onUpdate:modelValue"],Ee=C(()=>a("span",{class:"icon"}," = ",-1)),Ue={class:"value flex"},Je=["onUpdate:modelValue"],ze={key:0,class:"flex justify-end w-full"},Re={__name:"VaultData",props:{vault:Object,readOnly:Boolean},setup(t){const e=t,o=m=>{const s=m.currentTarget.parentNode.parentNode,k=s.querySelector(".value input"),f=k.value;axios.post(route("vaults.datas.encrypt"),{value:f}).then(w=>{const{data:D}=w;k.value="Value encrypted",s.dataset.state="decrypted",s.dataset.value=D})},h=m=>{const c=m.currentTarget,s=c.parentNode.parentNode,k=s.dataset.value;if(s.dataset.state==="encrypted")return!1;axios.post(route("vaults.datas.decrypt"),{value:k}).then(f=>{const{data:w}=f;c.value=w,s.dataset.state="encrypted",s.dataset.value=w})},r=$({dataId:Number,key:[],value:[]}),g=m=>{const[c,s]=[r.key[m],r.value[m]];r.key=c,r.value=s,r.dataId=m,r.post(route("vaults.datas.groups.fields.create"),{preserveScroll:!0,preserveState:!0,onSuccess:()=>r.reset()&&console.log(r)})},l=$({vault:e.vault,name:""}),n=()=>{if(l.name.length===0)return S("error","Group name cannot be empty!");l.post(route("vaults.datas.groups.create"),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{S("success",`Created new group „${l.name}“`),l.reset("name")}})},v=L(null),O=$(),J=(m,c)=>{v.value={dataId:m,key:c}},z=()=>{O.delete(route("vaults.datas.groups.fields.destroy",{data:v.value}),{preserveScroll:!0,preserveState:!0,onSuccess:()=>v.value=null})},A=async(m,c=!1)=>{if(c)return S("info","Requested to decrypt..."),await axios.post(route("vaults.datas.decrypt"),{value:m}).then(async s=>{const{data:k}=s;return await navigator.clipboard.writeText(k),S("success","Saved decrypted value into clipboard")});await navigator.clipboard.writeText(m),S("info",`Copied <i>${m}</i> to clipboard`)};return(m,c)=>(i(),u(x,null,[t.readOnly?b("",!0):(i(),I(X,{key:0,for:"group-name",value:"Group Name"})),t.readOnly?b("",!0):(i(),I(Y,{key:1,modelValue:y(l).name,"onUpdate:modelValue":c[0]||(c[0]=s=>y(l).name=s),id:"group-name",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"])),t.readOnly?b("",!0):(i(),u("div",ge,[p(Z,{onClick:n},{default:d(()=>[_(" Add group ")]),_:1})])),t.readOnly?b("",!0):(i(),u("hr",we)),a("div",be,[(i(!0),u(x,null,H(t.vault.datas,(s,k)=>(i(),u("div",{key:k,class:"data mt-4 shadow-md border rounded-lg","data-id":s.id},[p(_e,{vaultId:t.vault.id,data:s,readOnly:t.readOnly},{head:d(()=>[t.readOnly?(i(),u("p",xe,[a("b",null,V(s.group_name),1)])):(i(),u("input",{key:0,type:"text",value:s.group_name,class:"group-name py-0 pl-0 font-bold w-max",onClick:c[1]||(c[1]=f=>{f.stopImmediatePropagation()})},null,8,Se))]),body:d(()=>[(i(!0),u(x,null,H(JSON.parse(s.fields),(f,w)=>(i(),u("div",{key:w,class:"field state flex mb-2","data-state":"decrypted","data-value":f},[t.readOnly?(i(),u("div",Ce,[a("p",{onClick:D=>A(w),class:"cursor-pointer"},V(w),9,Oe),a("a",{class:"block",onClick:D=>A(f,!0)},[a("input",{type:"password",value:f,class:"p-0 cursor-pointer",disabled:""},null,8,Ve)],8,De)])):(i(),u(x,{key:1},[a("div",Ne,[a("input",{type:"text",value:w,class:"key pl-0"},null,8,Te),Ae]),a("div",{class:"value"},[a("input",{onClick:h,type:"text",value:"Value encrypted"})]),a("div",Be,[p(N,{onClick:o},{default:d(()=>[p(y(te),{class:"w-5 h-5 mr-2"}),Ie]),_:1})]),a("div",He,[a("div",{onClick:D=>J(s.id,w),class:"icon-hover"},Pe,8,Me)])],64))],8,$e))),128)),Ze,a("form",{onSubmit:W(f=>g(s.id),["prevent"])},[t.readOnly?b("",!0):(i(),u("div",je,[a("div",Ge,[M(a("input",{"onUpdate:modelValue":f=>y(r).key[s.id]=f,type:"text",class:"key pl-0",placeholder:"Label"},null,8,qe),[[F,y(r).key[s.id]]]),Ee]),a("div",Ue,[M(a("input",{"onUpdate:modelValue":f=>y(r).value[s.id]=f,type:"text",placeholder:"Value"},null,8,Je),[[F,y(r).value[s.id]]])]),t.readOnly?b("",!0):(i(),u("div",ze,[p(N,{onClick:f=>g(s.id),class:"my-5"},{default:d(()=>[_(" Add field ")]),_:2},1032,["onClick"])]))]))],40,Le)]),_:2},1032,["vaultId","data","readOnly"])],8,ke))),128))]),p(E,{show:v.value!=null,onClose:c[3]||(c[3]=s=>v.value=null)},{title:d(()=>[_(" Delete Field – „"+V(v.value.key)+"“ ",1)]),content:d(()=>[_(" Are you sure you would like to delete this field? ")]),footer:d(()=>[p(N,{onClick:c[2]||(c[2]=s=>v.value=null)},{default:d(()=>[_(" Cancel ")]),_:1}),p(q,{class:T(["ml-3",{"opacity-25":y(O).processing}]),disabled:y(O).processing,onClick:z},{default:d(()=>[_(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}},P=U(Re,[["__scopeId","data-v-d5b65bdb"]]),Ke={key:0},Qe={key:1},We={class:"col-span-6"},ft={__name:"VaultDataManager",props:{vault:Object,readOnly:Boolean},setup(t){const e=t,o=$({logo:null,name:"",url:"",datas:null}),h=()=>{o.processing=!0;const r=[];e.vault;const g=document.querySelectorAll("#data-blocks > .data[data-id]");for(const l of g){const n={};for(const v of l.querySelectorAll(".field"))n[v.querySelector(".key input").value]=v.dataset.value;r.push({id:l.dataset.id,group_name:l.querySelector(".group-name").value,fields:JSON.stringify(n)})}axios.post(route("vaults.datas.update"),{datas:r}).then(()=>{o.processing=!1,S("success","Vault Data Manager – saved.")}).catch(l=>{o.processing=!1,o.error=l.response.data,S("error","Vault Data Manager – failed!","An error occurred while saving this vault's data!")})};return(r,g)=>t.readOnly?(i(),u("div",Ke,[p(P,{vault:t.vault,readOnly:t.readOnly},null,8,["vault","readOnly"])])):t.vault?(i(),u("div",Qe,[p(Q),p(K,null,{title:d(()=>[_(" Vault Data Manager ")]),description:d(()=>[_(" Here you can add vault-related data like credentials for a specific area of this vault. ")]),form:d(()=>[a("div",We,[p(P,{vault:t.vault,readOnly:t.readOnly},null,8,["vault","readOnly"])])]),actions:d(()=>[p(R,{on:y(o).recentlySuccessful,class:"mr-3"},{default:d(()=>[_(" Saved. ")]),_:1},8,["on"]),p(Z,{class:T({"opacity-25":y(o).processing}),disabled:y(o).processing,onClick:h},{default:d(()=>[_(" Save ")]),_:1},8,["class","disabled"])]),_:1})])):b("",!0)}};export{ft as default};