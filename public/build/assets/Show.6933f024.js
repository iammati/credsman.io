import{_ as i}from"./AppLayout.692b83d5.js";import o from"./DeleteTeamForm.0b487f85.js";import{S as r}from"./SectionBorder.14046a3a.js";import l from"./TeamMemberManager.02699a7a.js";import n from"./UpdateTeamNameForm.6e5ce4d2.js";import{o as a,c,w as s,a as m,b as t,d as p,F as d,e as f}from"./app.807d0b9b.js";import"./ApplicationLogo.6bbe8099.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.da5bc1c8.js";import"./SectionTitle.6d3e5068.js";import"./ConfirmationModal.1b368df8.js";import"./DangerButton.49f41c5a.js";import"./SecondaryButton.3b0b64ff.js";import"./ActionMessage.c9d1459e.js";import"./DialogModal.1f68db1b.js";import"./FormSection.dc3b444a.js";import"./InputError.37d1a923.js";import"./InputLabel.d100a771.js";import"./PrimaryButton.b41e84fe.js";import"./TextInput.df2b2c4b.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},q={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{q as default};