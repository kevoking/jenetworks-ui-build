import{o as c,c as F,a as d,d as A,r as z,b as O,w as oe,h as B,F as I,p as ne,i as ae,u as be,e as ye,f as S,g as e,j as P,k as C,l as j,m as se,t as M,n as le,q as ie,T as ce,s as we,v as ke,x as ue}from"./index.8703e57c.js";import{t as W,c as Se,r as Pe,T as Ce,F as De,M as $e,o as s,P as K,b as Be,n as pe,m as X,p as ee,a as ve,R as U,e as Y,u as J,l as Q,d as V,f as N,L as T,g as H,h as Ee}from"./use-event-listener.4cb86b3c.js";function Ie(i,v){return c(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})])}function Me(i,v){return c(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}function je(i,v){return c(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})])}function Ae(i,v){return c(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})])}const fe="/assets/logo-lg.e04e3eac.jpeg";var Oe=(i=>(i[i.Open=0]="Open",i[i.Closed=1]="Closed",i))(Oe||{});let he=Symbol("PopoverContext");function Z(i){let v=ae(he,null);if(v===null){let y=new Error(`<${i} /> is missing a parent <${te.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(y,Z),y}return v}let me=Symbol("PopoverGroupContext");function ge(){return ae(me,null)}let xe=Symbol("PopoverPanelContext");function ze(){return ae(xe,null)}let te=A({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(i,{slots:v,attrs:y,expose:E}){var n;let o=`headlessui-popover-button-${W()}`,_=`headlessui-popover-panel-${W()}`,h=z(null);E({el:h,$el:h});let b=z(1),m=z(null),g=z(null),D=z(null),t=z(null),x=O(()=>Y(h)),$=O(()=>{if(!s(m)||!s(t))return!1;for(let r of document.querySelectorAll("body > *"))if(Number(r==null?void 0:r.contains(s(m)))^Number(r==null?void 0:r.contains(s(t))))return!0;return!1}),w={popoverState:b,buttonId:o,panelId:_,panel:t,button:m,isPortalled:$,beforePanelSentinel:g,afterPanelSentinel:D,togglePopover(){b.value=J(b.value,{[0]:1,[1]:0})},closePopover(){b.value!==1&&(b.value=1)},close(r){w.closePopover();let f=(()=>r?r instanceof HTMLElement?r:r.value instanceof HTMLElement?s(r):s(w.button):s(w.button))();f==null||f.focus()}};ne(he,w),Se(O(()=>J(b.value,{[0]:Q.Open,[1]:Q.Closed})));let p={buttonId:o,panelId:_,close(){w.closePopover()}},a=ge(),l=a==null?void 0:a.registerPopover;function k(){var r,f,u,L;return(L=a==null?void 0:a.isFocusWithinPopoverGroup())!=null?L:((r=x.value)==null?void 0:r.activeElement)&&(((f=s(m))==null?void 0:f.contains(x.value.activeElement))||((u=s(t))==null?void 0:u.contains(x.value.activeElement)))}return oe(()=>l==null?void 0:l(p)),Pe((n=x.value)==null?void 0:n.defaultView,"focus",r=>{var f,u;b.value===0&&(k()||!m||!t||(f=s(w.beforePanelSentinel))!=null&&f.contains(r.target)||(u=s(w.afterPanelSentinel))!=null&&u.contains(r.target)||w.closePopover())},!0),Ce([m,t],(r,f)=>{var u;w.closePopover(),De(f,$e.Loose)||(r.preventDefault(),(u=s(m))==null||u.focus())},O(()=>b.value===0)),()=>{let r={open:b.value===0,close:w.close};return K({theirProps:i,ourProps:{ref:h},slot:r,slots:v,attrs:y,name:"Popover"})}}}),R=A({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(i,{attrs:v,slots:y,expose:E}){let n=Z("PopoverButton"),o=O(()=>Y(n.button));E({el:n.button,$el:n.button});let _=ge(),h=_==null?void 0:_.closeOthers,b=ze(),m=b===null?!1:b===n.panelId,g=z(null),D=`headlessui-focus-sentinel-${W()}`;m||oe(()=>{n.button.value=g.value});let t=Be(O(()=>({as:i.as,type:v.type})),g);function x(a){var l,k,r,f,u;if(m){if(n.popoverState.value===1)return;switch(a.key){case V.Space:case V.Enter:a.preventDefault(),(k=(l=a.target).click)==null||k.call(l),n.closePopover(),(r=s(n.button))==null||r.focus();break}}else switch(a.key){case V.Space:case V.Enter:a.preventDefault(),a.stopPropagation(),n.popoverState.value===1&&(h==null||h(n.buttonId)),n.togglePopover();break;case V.Escape:if(n.popoverState.value!==0)return h==null?void 0:h(n.buttonId);if(!s(n.button)||((f=o.value)==null?void 0:f.activeElement)&&!((u=s(n.button))!=null&&u.contains(o.value.activeElement)))return;a.preventDefault(),a.stopPropagation(),n.closePopover();break}}function $(a){m||a.key===V.Space&&a.preventDefault()}function w(a){var l,k;i.disabled||(m?(n.closePopover(),(l=s(n.button))==null||l.focus()):(a.preventDefault(),a.stopPropagation(),n.popoverState.value===1&&(h==null||h(n.buttonId)),n.togglePopover(),(k=s(n.button))==null||k.focus()))}function p(a){a.preventDefault(),a.stopPropagation()}return()=>{let a=n.popoverState.value===0,l={open:a},k=m?{ref:g,type:t.value,onKeydown:x,onClick:w}:{ref:g,id:n.buttonId,type:t.value,"aria-expanded":i.disabled?void 0:n.popoverState.value===0,"aria-controls":s(n.panel)?n.panelId:void 0,disabled:i.disabled?!0:void 0,onKeydown:x,onKeyup:$,onClick:w,onMousedown:p},r=pe();function f(){let u=s(n.panel);if(!u)return;function L(){J(r.value,{[H.Forwards]:()=>N(u,T.First),[H.Backwards]:()=>N(u,T.Last)})}L()}return B(I,[K({ourProps:k,theirProps:{...v,...i},slot:l,attrs:v,slots:y,name:"PopoverButton"}),a&&!m&&n.isPortalled.value&&B(X,{id:D,features:ee.Focusable,as:"button",type:"button",onFocus:f})])}}});A({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(i,{attrs:v,slots:y}){let E=Z("PopoverOverlay"),n=`headlessui-popover-overlay-${W()}`,o=ve(),_=O(()=>o!==null?o.value===Q.Open:E.popoverState.value===0);function h(){E.closePopover()}return()=>{let b={open:E.popoverState.value===0};return K({ourProps:{id:n,"aria-hidden":!0,onClick:h},theirProps:i,slot:b,attrs:v,slots:y,features:U.RenderStrategy|U.Static,visible:_.value,name:"PopoverOverlay"})}}});let de=A({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(i,{attrs:v,slots:y,expose:E}){let{focus:n}=i,o=Z("PopoverPanel"),_=O(()=>Y(o.panel)),h=`headlessui-focus-sentinel-before-${W()}`,b=`headlessui-focus-sentinel-after-${W()}`;E({el:o.panel,$el:o.panel}),ne(xe,o.panelId),oe(()=>{var p,a;if(!n||o.popoverState.value!==0||!o.panel)return;let l=(p=_.value)==null?void 0:p.activeElement;(a=s(o.panel))!=null&&a.contains(l)||N(s(o.panel),T.First)});let m=ve(),g=O(()=>m!==null?m.value===Q.Open:o.popoverState.value===0);function D(p){var a,l;switch(p.key){case V.Escape:if(o.popoverState.value!==0||!s(o.panel)||_.value&&!((a=s(o.panel))!=null&&a.contains(_.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover(),(l=s(o.button))==null||l.focus();break}}function t(p){var a,l,k,r,f;let u=p.relatedTarget;!u||!s(o.panel)||(a=s(o.panel))!=null&&a.contains(u)||(o.closePopover(),(((k=(l=s(o.beforePanelSentinel))==null?void 0:l.contains)==null?void 0:k.call(l,u))||((f=(r=s(o.afterPanelSentinel))==null?void 0:r.contains)==null?void 0:f.call(r,u)))&&u.focus({preventScroll:!0}))}let x=pe();function $(){let p=s(o.panel);if(!p)return;function a(){J(x.value,{[H.Forwards]:()=>{N(p,T.Next)},[H.Backwards]:()=>{var l;(l=s(o.button))==null||l.focus({preventScroll:!0})}})}a()}function w(){let p=s(o.panel);if(!p)return;function a(){J(x.value,{[H.Forwards]:()=>{var l,k;let r=s(o.button),f=s(o.panel);if(!r)return;let u=Ee(),L=u.indexOf(r),_e=u.slice(0,L+1),G=[...u.slice(L+1),..._e];for(let q of G.slice())if(((k=(l=q==null?void 0:q.id)==null?void 0:l.startsWith)==null?void 0:k.call(l,"headlessui-focus-sentinel-"))||(f==null?void 0:f.contains(q))){let re=G.indexOf(q);re!==-1&&G.splice(re,1)}N(G,T.First,!1)},[H.Backwards]:()=>N(p,T.Previous)})}a()}return()=>{let p={open:o.popoverState.value===0,close:o.close},a={ref:o.panel,id:o.panelId,onKeydown:D,onFocusout:n&&o.popoverState.value===0?t:void 0,tabIndex:-1};return K({ourProps:a,theirProps:{...v,...i},attrs:v,slot:p,slots:{...y,default:(...l)=>{var k;return[B(I,[g.value&&o.isPortalled.value&&B(X,{id:h,ref:o.beforePanelSentinel,features:ee.Focusable,as:"button",type:"button",onFocus:$}),(k=y.default)==null?void 0:k.call(y,...l),g.value&&o.isPortalled.value&&B(X,{id:b,ref:o.afterPanelSentinel,features:ee.Focusable,as:"button",type:"button",onFocus:w})])]}},features:U.RenderStrategy|U.Static,visible:g.value,name:"PopoverPanel"})}}});A({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(i,{attrs:v,slots:y,expose:E}){let n=z(null),o=z([]),_=O(()=>Y(n));E({el:n,$el:n});function h(D){let t=o.value.indexOf(D);t!==-1&&o.value.splice(t,1)}function b(D){return o.value.push(D),()=>{h(D)}}function m(){var D;let t=_.value;if(!t)return!1;let x=t.activeElement;return(D=s(n))!=null&&D.contains(x)?!0:o.value.some($=>{var w,p;return((w=t.getElementById($.buttonId))==null?void 0:w.contains(x))||((p=t.getElementById($.panelId))==null?void 0:p.contains(x))})}function g(D){for(let t of o.value)t.buttonId!==D&&t.close()}return ne(me,{registerPopover:b,unregisterPopover:h,isFocusWithinPopoverGroup:m,closeOthers:g}),()=>K({ourProps:{ref:n},theirProps:i,slot:{},attrs:v,slots:y,name:"PopoverGroup"})}});const Fe={class:"bg-gray-300"},Le={class:"relative overflow-hidden"},Ve={class:"sticky top-0 z-10"},Ne={class:"bg-black py-2 text-sm border-b border-gray-800"},Te={class:"max-w-7xl mx-auto px-2"},He={class:"flex flex-col lg:flex-row justify-between items-center space-x-4"},We={class:"hidden space-x-1 md:flex divide-x divide-gray-800"},Re={class:"flex flex-row justify-end items-center space-x-2"},Je=se(" Admin "),Ke=se(" My Account "),Ge={class:"absolute top-1 px-1 rounded-full bg-white text-gray-900 text-xs"},qe={class:"bg-white py-1 text-sm px-2 xl:px-12"},Ue={class:"max-w-7xl mx-auto"},Qe={class:"flex flex-row justify-between items-center space-x-4"},Ye={class:""},Ze=e("span",{class:"sr-only"},"JenetWorks",-1),Xe=e("img",{class:"w-auto h-24 lg:h-36",src:fe,alt:"JenetWorks"},null,-1),et={class:"space-y-1"},tt={class:"flex flex-row justify-start items-center space-x-2 text-gray-700"},ot=e("div",null,[e("div",{class:"flex flex-col orange-text"},[e("span",null,"info@jenetworks.co.ke")])],-1),nt={class:"flex flex-row justify-start items-center space-x-2 text-gray-700"},at=e("div",null,[e("div",{class:"flex flex-col orange-text"},[e("span",null,"+254 757779099")])],-1),st={class:"bg-gray-900 border-b-2 border-gray-800 border-t border-t-gray-700 shadow-2xl shadow-black"},rt={class:"max-w-7xl mx-auto w-full flex items-center justify-between","aria-label":"Global"},lt={class:"flex items-center flex-1 w-full"},it={class:"flex items-center justify-between w-full md:w-auto"},ct={class:"-mr-2 flex items-center md:hidden"},ut=e("span",{class:"sr-only"},"Open main menu",-1),dt={class:"hidden w-full md:flex justify-evenly divide-x divide-gray-800 border-r border-l border-gray-700"},pt={class:"shadow-2xl shadow-black rounded-b-md ring-1 ring-black ring-opacity-5 overflow-hidden"},vt={class:"relative flex flex-col orange-bg"},ft={class:"text-base font-medium text-black"},ht={class:"rounded-lg shadow-md orange-bg ring-1 ring-black ring-opacity-5 overflow-hidden"},mt={class:"px-5 pt-4 flex items-center justify-between"},gt=e("div",null,null,-1),xt={class:"-mr-2"},_t=e("span",{class:"sr-only"},"Close menu",-1),bt={class:"pt-5 pb-6"},yt={class:"px-2 space-y-1"},wt={class:"text-gray-700"},kt={class:"text-base font-medium text-black"},St={style:{"min-height":"50vh"},class:"px-2 lg:px-24 xl:px-12"},Pt={class:"bg-black px-4 text-sm","aria-labelledby":"footer-heading"},Ct=e("h2",{id:"footer-heading",class:"sr-only"},"Footer",-1),Dt={class:"max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8"},$t={class:"xl:grid xl:grid-cols-3 xl:gap-8"},Bt={class:"space-y-8 xl:col-span-1"},Et=e("img",{class:"w-auto h-24 lg:h-36",src:fe,alt:"JenetWorks"},null,-1),It=e("p",{class:"orange-text text-base"},"Making the world a better place through constructing elegant hierarchies.",-1),Mt={class:"space-y-1"},jt={class:"text-gray-300"},At={class:"flex space-x-6"},Ot=["href"],zt={class:"sr-only"},Ft={class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 uppercase"},Lt={class:"md:grid md:grid-cols-2 md:gap-8"},Vt=e("h3",{class:"text-sm font-semibold orange-text tracking-wider uppercase"},"Solutions",-1),Nt={role:"list",class:"mt-4 space-y-4"},Tt=["href"],Ht={class:"mt-12 md:mt-0"},Wt=e("h3",{class:"text-sm font-semibold orange-text tracking-wider uppercase"},"Support",-1),Rt={role:"list",class:"mt-4 space-y-4"},Jt=["href"],Kt={class:"md:grid md:grid-cols-2 md:gap-8"},Gt=e("h3",{class:"text-sm font-semibold orange-text tracking-wider uppercase"},"Company",-1),qt={role:"list",class:"mt-4 space-y-4"},Ut=["href"],Qt={class:"mt-12 md:mt-0"},Yt=e("h3",{class:"text-sm font-semibold orange-text tracking-wider uppercase"},"Legal",-1),Zt={role:"list",class:"mt-4 space-y-4"},Xt=["href"],eo=e("div",{class:"mt-12 border-t border-gray-800 py-8"},[e("p",{class:"text-base text-xs orange-text xl:text-center"},"\xA9 2020 JenetWorks, Inc. All rights reserved.")],-1),no={__name:"AppLayout",setup(i){const v=be(),y=ye(),E=[{icon:"pi-map-marker",contact:"104 RIVERSIDE DRIVE, WESTLANDS NAIROBI, KENYA."},{icon:"pi-phone",contact:"254757779099"},{icon:"pi-envelope",contact:"info@jenetworks.co.ke"}],n=[{name:"Home",href:"/"},{name:"About Us",href:"/about"},{name:"Blog",href:"#"},{name:"Contact Us",href:"#"}],o=[{name:"Hybrid Cloud",href:"#",items:[{name:"JE Networks Hybrid Cloud",href:"/product/hybrid-cloud"}]},{name:"Dedicated Servers",href:"#",items:[{name:"Dedicated Servers Kenya",href:"/product/dedicated-server"}]},{name:"VPS",href:"#",items:[{name:"VPS Kenya",href:"/product/vps"}]},{name:"Corporate Hosting",href:"#",items:[{name:"Shared Hosting",href:"/product/shared-hosting"}]},{name:"Business Solution",href:"#",items:[{name:"Proffessional Email hosting",href:"/product/email-hosting"},{name:"Domain Management",href:"/product/domains"},{name:"Microsoft 365",href:"/product/ms-365"}]},{name:"Data Center",href:"#",items:[{name:"JE Networks SDDC",href:"/product/sddc"},{name:"Co-Location Data Center",href:"/product/co-location"}]},{name:"Acronis",href:"#",items:[{name:"Acronis Cloud Data Back Up",href:"/product/acronis"}]},{name:"Disaster Recovery",href:"#",items:[{name:"Jenetworks DRaaS Solutions",href:"/product/draas"}]},{name:"Security",href:"#",items:[{name:"Network Security",href:"/product/network-security"},{name:"SD-WAN Solution",href:"/product/sd-wan"},{name:"Cyber Security",href:"/product/cyber-security"},{name:"Web Application Firewall",href:"/product/web-app-firewall"},{name:"Database Security",href:"/product/database-security"},{name:"IP Telephony",href:"/product/ip-telephony"},{name:"Access Control Solutions",href:"/product/access-control"},{name:"CCTV Solutions",href:"/product/cctv-solutions"},{name:"ICT Outsource Services",href:"/product/ict-outsource"},{name:"Convene E-Board",href:"/product/convene-eboard"}]},{name:"Corporate Profile",href:"#",items:[{name:"About us",href:"/about"}]}],_={solutions:[{name:"VPS",href:"/product/vps"},{name:"Dedicated Servers",href:"/product/dedicated-server"},{name:"Hybrid Cloud",href:"/product/hybrid-cloud"},{name:"SDDC Data Centers",href:"/product/sddc"},{name:"Co-Location Data Centers",href:"/product/co-location"}],businessSolutions:[{name:"Shared Hosting",href:"/product/shared-hosting"},{name:"Domain Management",href:"/product/domains"},{name:"Email Hosting",href:"/product/email-hosting"}],support:[{name:"Frequently Asked Questions",href:"#"}],company:[{name:"About",href:"/about"},{name:"Partners",href:"#"}],legal:[{name:"Privacy",href:"#"},{name:"Terms",href:"#"}],social:[{name:"Facebook",href:"#",icon:A({render:()=>B("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[B("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})])})},{name:"Instagram",href:"#",icon:A({render:()=>B("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[B("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})])})},{name:"Twitter",href:"#",icon:A({render:()=>B("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[B("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})])})},{name:"GitHub",href:"#",icon:A({render:()=>B("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[B("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})])})},{name:"Dribbble",href:"#",icon:A({render:()=>B("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[B("path",{"fill-rule":"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z","clip-rule":"evenodd"})])})}]};function h(){return y.logout()}return(b,m)=>{const g=ue("router-link"),D=ue("router-view");return c(),S("div",Fe,[e("div",Le,[e("div",Ve,[d(C(te),{as:"header",class:"relative"},{default:P(()=>[e("div",Ne,[e("div",Te,[e("div",He,[e("div",We,[(c(),S(I,null,j(n,t=>d(g,{key:t.name,to:t.href,class:"px-4 text-base font-medium text-gray-400 hover:text-gray-200"},{default:P(()=>[se(M(t.name),1)]),_:2},1032,["to"])),64))]),e("div",Re,[C(y).isLoggedIn?(c(),S("a",{key:0,href:"#",onClick:h,class:"inline-flex items-center px-2 py-1 border-transparent text-base font-medium text-gray-600 hover:text-gray-300"}," Logout ")):le("",!0),C(y).isLoggedIn?(c(),F(g,{key:1,to:"/console",class:"inline-flex items-center px-2 py-1 border-transparent text-base font-medium text-gray-600 hover:text-gray-300"},{default:P(()=>[Je]),_:1})):le("",!0),d(g,{to:"/my-account",class:"inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white orange-bg hover:orange-bg"},{default:P(()=>[Ke]),_:1}),d(g,{to:"/cart",class:"inline-flex items-center px-2 py-2 border orange-border orange-bg text-base font-medium rounded-full"},{default:P(()=>[d(C(Ae),{class:"h-4 w-4 text-white"}),e("div",null,[e("span",Ge,M(C(v).shoppingCart?C(v).shoppingCart.length:0),1)])]),_:1})])])])]),e("div",qe,[e("div",Ue,[e("div",Qe,[e("div",Ye,[d(g,{to:"/"},{default:P(()=>[Ze,Xe]),_:1})]),e("div",et,[e("div",tt,[e("div",null,[d(C(Ie),{class:"flex-shrink-0 w-6 h-6 orange-text"})]),ot]),e("div",nt,[e("div",null,[d(C(je),{class:"flex-shrink-0 w-6 h-6 orange-text"})]),at])])])])]),e("div",st,[e("nav",rt,[e("div",lt,[e("div",it,[e("div",ct,[d(C(R),{class:"bg-black rounded-md p-2 inline-flex items-center justify-center orange-text hover:bg-black focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"},{default:P(()=>[ut,d(C(Me),{class:"h-6 w-6","aria-hidden":"true"})]),_:1})])]),e("div",dt,[(c(),S(I,null,j(o,t=>e("div",{key:t.name,class:"flex justify-center items-center w-full"},[d(C(te),{class:"relative w-full"},{default:P(({open:x})=>[d(C(R),{class:ie([x?"text-black orange-bg":"text-gray-300","w-full mx-auto flex justify-center items-center group rounded-none px-2 py-3.5 text-sm font-medium text-gray-400 hover:text-gray-200 hover:orange-bg"])},{default:P(()=>[e("span",null,M(t.name),1)]),_:2},1032,["class"]),d(ce,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:P(()=>[d(C(de),{class:"absolute z-10 mt-0 w-screen max-w-xs sm:px-0"},{default:P(()=>[e("div",pt,[e("div",vt,[(c(!0),S(I,null,j(t.items,$=>(c(),F(g,{key:$.name,to:$.href,class:"p-2 block transition ease-in-out duration-150"},{default:P(()=>[d(C(R),null,{default:P(()=>[e("span",ft,M($.name),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])])]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))])])])]),d(ce,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:P(()=>[d(C(de),{focus:"",class:"absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"},{default:P(()=>[e("div",ht,[e("div",mt,[gt,e("div",xt,[d(C(R),{class:"bg-white rounded-md p-2 inline-flex items-center justify-center orange-text hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"},{default:P(()=>[_t,d(C(we),{class:"h-6 w-6","aria-hidden":"true"})]),_:1})])]),e("div",bt,[e("div",yt,[(c(),S(I,null,j(o,(t,x)=>e("span",{key:x,class:"block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"},[e("span",wt,M(t.name),1),(c(!0),S(I,null,j(t.items,$=>(c(),F(g,{key:$.name,to:$.href,class:"p-2 block transition ease-in-out duration-150"},{default:P(()=>[d(C(R),null,{default:P(()=>[e("span",kt,M($.name),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])),64))])])])]),_:1})]),_:1})]),_:1})]),e("main",St,[d(D,{style:{"min-height":"50vh"},class:"max-w-7xl mx-auto w-full bg-gray-200"})]),e("footer",Pt,[Ct,e("div",Dt,[e("div",$t,[e("div",Bt,[Et,It,e("div",Mt,[(c(),S(I,null,j(E,(t,x)=>e("div",{key:x,class:"flex flex-row flex-nowrap space-x-4 justify-start items-center"},[e("i",{class:ie("orange-text pi "+t.icon)},null,2),e("span",jt,M(t.contact),1)])),64))]),e("div",At,[(c(!0),S(I,null,j(_.social,t=>(c(),S("a",{key:t.name,href:t.href,class:"orange-text hover:text-gray-500"},[e("span",zt,M(t.name),1),(c(),F(ke(t.icon),{class:"h-6 w-6","aria-hidden":"true"}))],8,Ot))),128))])]),e("div",Ft,[e("div",Lt,[e("div",null,[Vt,e("ul",Nt,[(c(!0),S(I,null,j(_.solutions,t=>(c(),S("li",{key:t.name},[e("a",{href:t.href,class:"text-base text-xs text-gray-500 hover:text-gray-200"},M(t.name),9,Tt)]))),128))])]),e("div",Ht,[Wt,e("ul",Rt,[(c(!0),S(I,null,j(_.support,t=>(c(),S("li",{key:t.name},[e("a",{href:t.href,class:"text-base text-xs text-gray-500 hover:text-gray-200"},M(t.name),9,Jt)]))),128))])])]),e("div",Kt,[e("div",null,[Gt,e("ul",qt,[(c(!0),S(I,null,j(_.company,t=>(c(),S("li",{key:t.name},[e("a",{href:t.href,class:"text-base text-xs text-gray-500 hover:text-gray-200"},M(t.name),9,Ut)]))),128))])]),e("div",Qt,[Yt,e("ul",Zt,[(c(!0),S(I,null,j(_.legal,t=>(c(),S("li",{key:t.name},[e("a",{href:t.href,class:"text-base text-xs text-gray-500 hover:text-gray-200"},M(t.name),9,Xt)]))),128))])])])])]),eo])])])])}}};export{no as default};
