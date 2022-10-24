import{u as B,r as f,o as d,c as w,w as a,f as r,d as S,a as l,b as o,v as p,x as v,I as j,l as _,e as h,g as t,L as E,n as F,y as L}from"./app.807d0b9b.js";import{_ as A}from"./ActionMessage.c9d1459e.js";import{_ as R}from"./FormSection.dc3b444a.js";import{_ as g}from"./InputError.37d1a923.js";import{_ as k}from"./InputLabel.d100a771.js";import{_ as z}from"./PrimaryButton.b41e84fe.js";import{_ as V}from"./SecondaryButton.3b0b64ff.js";import{_ as C}from"./TextInput.df2b2c4b.js";import"./SectionTitle.6d3e5068.js";import"./_plugin-vue_export-helper.cdc0426e.js";const D={key:0,class:"col-span-6 sm:col-span-4"},T={class:"mt-2"},M=["src","alt"],O={class:"mt-2"},Y={class:"col-span-6 sm:col-span-4"},q={class:"col-span-6 sm:col-span-4"},G={key:0},H={class:"text-sm mt-2"},J={class:"mt-2 font-medium text-sm text-green-600"},le={__name:"UpdateProfileInformationForm",props:{user:Object},setup(m){const y=m,e=B({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),b=f(null),c=f(null),n=f(null),I=()=>{n.value&&(e.photo=n.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>P()})},$=()=>{b.value=!0},x=()=>{n.value.click()},N=()=>{const s=n.value.files[0];if(!s)return;const i=new FileReader;i.onload=u=>{c.value=u.target.result},i.readAsDataURL(s)},U=()=>{L.Inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{c.value=null,P()}})},P=()=>{var s;(s=n.value)!=null&&s.value&&(n.value.value=null)};return(s,i)=>(d(),w(R,{onSubmitted:I},{title:a(()=>[r(" Profile Information ")]),description:a(()=>[r(" Update your account's profile information and email address. ")]),form:a(()=>[s.$page.props.jetstream.managesProfilePhotos?(d(),S("div",D,[l("input",{ref_key:"photoInput",ref:n,type:"file",class:"hidden",onChange:N},null,544),o(k,{for:"photo",value:"Photo"}),p(l("div",T,[l("img",{src:m.user.profile_photo_url,alt:m.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,M)],512),[[v,!c.value]]),p(l("div",O,[l("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+c.value+"');")},null,4)],512),[[v,c.value]]),o(V,{class:"mt-2 mr-2",type:"button",onClick:_(x,["prevent"])},{default:a(()=>[r(" Select A New Photo ")]),_:1},8,["onClick"]),m.user.profile_photo_path?(d(),w(V,{key:0,type:"button",class:"mt-2",onClick:_(U,["prevent"])},{default:a(()=>[r(" Remove Photo ")]),_:1},8,["onClick"])):h("",!0),o(g,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])])):h("",!0),l("div",Y,[o(k,{for:"name",value:"Name"}),o(C,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":i[0]||(i[0]=u=>t(e).name=u),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),o(g,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),l("div",q,[o(k,{for:"email",value:"Email"}),o(C,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":i[1]||(i[1]=u=>t(e).email=u),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),o(g,{message:t(e).errors.email,class:"mt-2"},null,8,["message"]),s.$page.props.jetstream.hasEmailVerification&&m.user.email_verified_at===null?(d(),S("div",G,[l("p",H,[r(" Your email address is unverified. "),o(t(E),{href:s.route("verification.send"),method:"post",as:"button",class:"underline text-gray-600 hover:text-gray-900",onClick:_($,["prevent"])},{default:a(()=>[r(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),p(l("div",J," A new verification link has been sent to your email address. ",512),[[v,b.value]])])):h("",!0)])]),actions:a(()=>[o(A,{on:t(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[r(" Saved. ")]),_:1},8,["on"]),o(z,{class:F({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:a(()=>[r(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{le as default};
