import{_ as p}from"./AppLayout.18038227.js";import c from"./DeleteUserForm.fb1c54fa.js";import l from"./LogoutOtherBrowserSessionsForm.55b9b7ba.js";import{S as s}from"./SectionBorder.47135ffb.js";import f from"./TwoFactorAuthenticationForm.277d89a3.js";import u from"./UpdatePasswordForm.91f52ecc.js";import d from"./UpdateProfileInformationForm.1645fefe.js";import{o as e,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app.68441ca1.js";import"./ApplicationLogo.f35ef69f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.0fe4ca5e.js";import"./SectionTitle.798709f1.js";import"./DangerButton.c2d18ed9.js";import"./DialogModal.8e7c35ae.js";import"./TextInput.447c125f.js";import"./SecondaryButton.9fbec221.js";import"./ActionMessage.d3ecdd14.js";import"./PrimaryButton.e03a6ac6.js";import"./InputLabel.e438ae10.js";import"./FormSection.dc8b26e8.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};