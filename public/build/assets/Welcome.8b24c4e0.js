import{o as a,d as i,b as e,g as o,a as n,c as d,w as t,F as c,e as p,t as g,H as u,f as l,L as m}from"./app.807d0b9b.js";import{A as h}from"./ApplicationLogo.6bbe8099.js";import{_ as f}from"./PrimaryButton.b41e84fe.js";import{_ as x}from"./SecondaryButton.3b0b64ff.js";import"./_plugin-vue_export-helper.cdc0426e.js";const _={class:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"},y={key:0,class:"hidden fixed top-0 right-0 px-6 py-4 sm:block"},k={class:"max-w-6xl mx-auto sm:px-6 lg:px-8"},v={class:"flex justify-center pt-8 sm:justify-start sm:pt-0"},N={class:"mt-4 text-end text-sm text-gray-500 sm:text-right sm:ml-0"},j={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,appVersion:String,laravelVersion:String,phpVersion:String,appNameExtended:String},setup(s){return(r,V)=>(a(),i(c,null,[e(o(u),{title:"Welcome"}),n("div",_,[s.canLogin?(a(),i("div",y,[r.$page.props.user?(a(),d(o(m),{key:0,href:r.route("dashboard")},{default:t(()=>[e(f,null,{default:t(()=>[l(" Dashboard ")]),_:1})]),_:1},8,["href"])):(a(),i(c,{key:1},[e(o(m),{href:r.route("login")},{default:t(()=>[e(f,{class:"mr-3"},{default:t(()=>[l(" Log in ")]),_:1})]),_:1},8,["href"]),s.canRegister?(a(),d(o(m),{key:0,href:r.route("register")},{default:t(()=>[e(x,null,{default:t(()=>[l(" Register ")]),_:1})]),_:1},8,["href"])):p("",!0)],64))])):p("",!0),n("div",k,[n("div",v,[e(h,{style:{color:"#F0706A","font-size":"40px"},appNameExtended:s.appNameExtended},null,8,["appNameExtended"])]),n("div",N," Credsman.io v"+g(s.appVersion),1)])])],64))}};export{j as default};