import{_ as i}from"./AppLayout.581da779.js";import o from"./DeleteTeamForm.a90cba9b.js";import{S as r}from"./SectionBorder.814af01f.js";import l from"./TeamMemberManager.019d985f.js";import n from"./UpdateTeamNameForm.3f5d902a.js";import{o as a,c,w as s,a as m,b as t,d as p,F as d,e as f}from"./app.94c89ff0.js";import"./ApplicationLogo.201fb194.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.a672d27c.js";import"./SectionTitle.6b1e5250.js";import"./ConfirmationModal.c15c0c84.js";import"./DangerButton.fac1b490.js";import"./SecondaryButton.0f57d940.js";import"./ActionMessage.4508bb41.js";import"./DialogModal.c5113e1a.js";import"./FormSection.5f39b0e6.js";import"./InputError.784ef562.js";import"./InputLabel.ef83ebdd.js";import"./PrimaryButton.b5d9aadf.js";import"./TextInput.f7dea3f9.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},q={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{q as default};
