import{o as g,c as R,a as $,d as I,r as M,b as O,w as ee,h as P,F as B,p as te,i as oe,u as he,e as me,f as w,g as e,j as L,k as E,l as F,t as j,m as ae,T as ge,n as _e,q as xe,s as be,v as se}from"./index.983a0849.js";import{t as G,c as ye,r as we,T as Pe,F as ke,M as Se,o as s,P as J,b as Ce,n as re,m as X,p as Y,a as ie,R as q,e as Z,u as W,l as U,d as z,f as T,L as V,g as N,h as $e,_ as Be}from"./use-event-listener.a2172ee6.js";function Ie(i,p){return g(),R("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}function Oe(i,p){return g(),R("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})])}const Ee="/assets/white-logo.8766ea8b.png";var Me=(i=>(i[i.Open=0]="Open",i[i.Closed=1]="Closed",i))(Me||{});let ce=Symbol("PopoverContext");function Q(i){let p=oe(ce,null);if(p===null){let b=new Error(`<${i} /> is missing a parent <${ve.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(b,Q),b}return p}let ue=Symbol("PopoverGroupContext");function de(){return oe(ue,null)}let pe=Symbol("PopoverPanelContext");function Ae(){return oe(pe,null)}let ve=I({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(i,{slots:p,attrs:b,expose:k}){var o;let t=`headlessui-popover-button-${G()}`,S=`headlessui-popover-panel-${G()}`,m=M(null);k({el:m,$el:m});let h=M(1),v=M(null),n=M(null),y=M(null),d=M(null),C=O(()=>Z(m)),A=O(()=>{if(!s(v)||!s(d))return!1;for(let l of document.querySelectorAll("body > *"))if(Number(l==null?void 0:l.contains(s(v)))^Number(l==null?void 0:l.contains(s(d))))return!0;return!1}),_={popoverState:h,buttonId:t,panelId:S,panel:d,button:v,isPortalled:A,beforePanelSentinel:n,afterPanelSentinel:y,togglePopover(){h.value=W(h.value,{[0]:1,[1]:0})},closePopover(){h.value!==1&&(h.value=1)},close(l){_.closePopover();let f=(()=>l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?s(l):s(_.button):s(_.button))();f==null||f.focus()}};te(ce,_),ye(O(()=>W(h.value,{[0]:U.Open,[1]:U.Closed})));let u={buttonId:t,panelId:S,close(){_.closePopover()}},a=de(),r=a==null?void 0:a.registerPopover;function x(){var l,f,c,D;return(D=a==null?void 0:a.isFocusWithinPopoverGroup())!=null?D:((l=C.value)==null?void 0:l.activeElement)&&(((f=s(v))==null?void 0:f.contains(C.value.activeElement))||((c=s(d))==null?void 0:c.contains(C.value.activeElement)))}return ee(()=>r==null?void 0:r(u)),we((o=C.value)==null?void 0:o.defaultView,"focus",l=>{var f,c;h.value===0&&(x()||!v||!d||(f=s(_.beforePanelSentinel))!=null&&f.contains(l.target)||(c=s(_.afterPanelSentinel))!=null&&c.contains(l.target)||_.closePopover())},!0),Pe([v,d],(l,f)=>{var c;_.closePopover(),ke(f,Se.Loose)||(l.preventDefault(),(c=s(v))==null||c.focus())},O(()=>h.value===0)),()=>{let l={open:h.value===0,close:_.close};return J({theirProps:i,ourProps:{ref:m},slot:l,slots:p,attrs:b,name:"Popover"})}}}),le=I({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(i,{attrs:p,slots:b,expose:k}){let o=Q("PopoverButton"),t=O(()=>Z(o.button));k({el:o.button,$el:o.button});let S=de(),m=S==null?void 0:S.closeOthers,h=Ae(),v=h===null?!1:h===o.panelId,n=M(null),y=`headlessui-focus-sentinel-${G()}`;v||ee(()=>{o.button.value=n.value});let d=Ce(O(()=>({as:i.as,type:p.type})),n);function C(a){var r,x,l,f,c;if(v){if(o.popoverState.value===1)return;switch(a.key){case z.Space:case z.Enter:a.preventDefault(),(x=(r=a.target).click)==null||x.call(r),o.closePopover(),(l=s(o.button))==null||l.focus();break}}else switch(a.key){case z.Space:case z.Enter:a.preventDefault(),a.stopPropagation(),o.popoverState.value===1&&(m==null||m(o.buttonId)),o.togglePopover();break;case z.Escape:if(o.popoverState.value!==0)return m==null?void 0:m(o.buttonId);if(!s(o.button)||((f=t.value)==null?void 0:f.activeElement)&&!((c=s(o.button))!=null&&c.contains(t.value.activeElement)))return;a.preventDefault(),a.stopPropagation(),o.closePopover();break}}function A(a){v||a.key===z.Space&&a.preventDefault()}function _(a){var r,x;i.disabled||(v?(o.closePopover(),(r=s(o.button))==null||r.focus()):(a.preventDefault(),a.stopPropagation(),o.popoverState.value===1&&(m==null||m(o.buttonId)),o.togglePopover(),(x=s(o.button))==null||x.focus()))}function u(a){a.preventDefault(),a.stopPropagation()}return()=>{let a=o.popoverState.value===0,r={open:a},x=v?{ref:n,type:d.value,onKeydown:C,onClick:_}:{ref:n,id:o.buttonId,type:d.value,"aria-expanded":i.disabled?void 0:o.popoverState.value===0,"aria-controls":s(o.panel)?o.panelId:void 0,disabled:i.disabled?!0:void 0,onKeydown:C,onKeyup:A,onClick:_,onMousedown:u},l=re();function f(){let c=s(o.panel);if(!c)return;function D(){W(l.value,{[N.Forwards]:()=>T(c,V.First),[N.Backwards]:()=>T(c,V.Last)})}D()}return P(B,[J({ourProps:x,theirProps:{...p,...i},slot:r,attrs:p,slots:b,name:"PopoverButton"}),a&&!v&&o.isPortalled.value&&P(X,{id:y,features:Y.Focusable,as:"button",type:"button",onFocus:f})])}}});I({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(i,{attrs:p,slots:b}){let k=Q("PopoverOverlay"),o=`headlessui-popover-overlay-${G()}`,t=ie(),S=O(()=>t!==null?t.value===U.Open:k.popoverState.value===0);function m(){k.closePopover()}return()=>{let h={open:k.popoverState.value===0};return J({ourProps:{id:o,"aria-hidden":!0,onClick:m},theirProps:i,slot:h,attrs:p,slots:b,features:q.RenderStrategy|q.Static,visible:S.value,name:"PopoverOverlay"})}}});let Fe=I({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(i,{attrs:p,slots:b,expose:k}){let{focus:o}=i,t=Q("PopoverPanel"),S=O(()=>Z(t.panel)),m=`headlessui-focus-sentinel-before-${G()}`,h=`headlessui-focus-sentinel-after-${G()}`;k({el:t.panel,$el:t.panel}),te(pe,t.panelId),ee(()=>{var u,a;if(!o||t.popoverState.value!==0||!t.panel)return;let r=(u=S.value)==null?void 0:u.activeElement;(a=s(t.panel))!=null&&a.contains(r)||T(s(t.panel),V.First)});let v=ie(),n=O(()=>v!==null?v.value===U.Open:t.popoverState.value===0);function y(u){var a,r;switch(u.key){case z.Escape:if(t.popoverState.value!==0||!s(t.panel)||S.value&&!((a=s(t.panel))!=null&&a.contains(S.value.activeElement)))return;u.preventDefault(),u.stopPropagation(),t.closePopover(),(r=s(t.button))==null||r.focus();break}}function d(u){var a,r,x,l,f;let c=u.relatedTarget;!c||!s(t.panel)||(a=s(t.panel))!=null&&a.contains(c)||(t.closePopover(),(((x=(r=s(t.beforePanelSentinel))==null?void 0:r.contains)==null?void 0:x.call(r,c))||((f=(l=s(t.afterPanelSentinel))==null?void 0:l.contains)==null?void 0:f.call(l,c)))&&c.focus({preventScroll:!0}))}let C=re();function A(){let u=s(t.panel);if(!u)return;function a(){W(C.value,{[N.Forwards]:()=>{T(u,V.Next)},[N.Backwards]:()=>{var r;(r=s(t.button))==null||r.focus({preventScroll:!0})}})}a()}function _(){let u=s(t.panel);if(!u)return;function a(){W(C.value,{[N.Forwards]:()=>{var r,x;let l=s(t.button),f=s(t.panel);if(!l)return;let c=$e(),D=c.indexOf(l),fe=c.slice(0,D+1),H=[...c.slice(D+1),...fe];for(let K of H.slice())if(((x=(r=K==null?void 0:K.id)==null?void 0:r.startsWith)==null?void 0:x.call(r,"headlessui-focus-sentinel-"))||(f==null?void 0:f.contains(K))){let ne=H.indexOf(K);ne!==-1&&H.splice(ne,1)}T(H,V.First,!1)},[N.Backwards]:()=>T(u,V.Previous)})}a()}return()=>{let u={open:t.popoverState.value===0,close:t.close},a={ref:t.panel,id:t.panelId,onKeydown:y,onFocusout:o&&t.popoverState.value===0?d:void 0,tabIndex:-1};return J({ourProps:a,theirProps:{...p,...i},attrs:p,slot:u,slots:{...b,default:(...r)=>{var x;return[P(B,[n.value&&t.isPortalled.value&&P(X,{id:m,ref:t.beforePanelSentinel,features:Y.Focusable,as:"button",type:"button",onFocus:A}),(x=b.default)==null?void 0:x.call(b,...r),n.value&&t.isPortalled.value&&P(X,{id:h,ref:t.afterPanelSentinel,features:Y.Focusable,as:"button",type:"button",onFocus:_})])]}},features:q.RenderStrategy|q.Static,visible:n.value,name:"PopoverPanel"})}}});I({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(i,{attrs:p,slots:b,expose:k}){let o=M(null),t=M([]),S=O(()=>Z(o));k({el:o,$el:o});function m(y){let d=t.value.indexOf(y);d!==-1&&t.value.splice(d,1)}function h(y){return t.value.push(y),()=>{m(y)}}function v(){var y;let d=S.value;if(!d)return!1;let C=d.activeElement;return(y=s(o))!=null&&y.contains(C)?!0:t.value.some(A=>{var _,u;return((_=d.getElementById(A.buttonId))==null?void 0:_.contains(C))||((u=d.getElementById(A.panelId))==null?void 0:u.contains(C))})}function n(y){for(let d of t.value)d.buttonId!==y&&d.close()}return te(ue,{registerPopover:h,unregisterPopover:m,isFocusWithinPopoverGroup:v,closeOthers:n}),()=>J({ourProps:{ref:o},theirProps:i,slot:{},attrs:p,slots:b,name:"PopoverGroup"})}});const je={class:"bg-white"},De={class:"relative overflow-hidden"},ze={class:"sticky top-0 z-10"},Le={class:"bg-gray-900 py-2 text-sm border-b border-gray-800"},Te={class:"max-w-7xl mx-auto"},Ve={class:"flex flex-row justify-between items-center space-x-4"},Ne={class:"hidden space-x-1 md:flex divide-x divide-gray-800"},Ge=["href"],We={class:"flex flex-row justify-end items-center space-x-2"},Je=be(" Admin "),He=e("a",{href:"my-account",class:"inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-700"}," My Account ",-1),Ke={class:"bg-gray-900 py-2 text-sm"},Re={class:"max-w-7xl mx-auto"},qe={class:"flex flex-row justify-between items-center space-x-4"},Ue=e("div",{class:"px-4"},[e("a",{href:"/"},[e("span",{class:"sr-only"},"JenetWorks"),e("img",{class:"w-auto h-10 lg:h-20",src:Be,alt:"JenetWorks"})])],-1),Ze={class:"flex flex-row justify-start items-center space-x-2 text-gray-100"},Qe=e("div",null,[e("div",{class:"flex flex-col text-orange-400"},[e("span",{class:"font-bold"},"24/7"),e("span",null,"+254 757779099")])],-1),Xe={class:"bg-gray-800 border-b-2 border-b-white border-t border-t-gray-700 shadow-2xl shadow-black"},Ye={class:"relative max-w-7xl mx-auto flex items-center justify-between","aria-label":"Global"},et={class:"flex items-center flex-1"},tt={class:"flex items-center justify-between w-full md:w-auto"},ot={class:"-mr-2 flex items-center md:hidden"},nt=e("span",{class:"sr-only"},"Open main menu",-1),at={class:"hidden md:flex divide-x divide-gray-700 border-r border-l border-gray-700"},st=["href"],lt={class:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"},rt={class:"px-5 pt-4 flex items-center justify-between"},it=e("div",null,[e("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg",alt:""})],-1),ct={class:"-mr-2"},ut=e("span",{class:"sr-only"},"Close menu",-1),dt={class:"pt-5 pb-6"},pt={class:"px-2 space-y-1"},vt=["href"],ft=e("div",{class:"mt-6 px-5"},[e("a",{href:"#",class:"block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"},"My Account")],-1),ht={style:{"min-height":"50vh"}},mt={class:"bg-gray-900 mt-12","aria-labelledby":"footer-heading"},gt=e("h2",{id:"footer-heading",class:"sr-only"},"Footer",-1),_t={class:"max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8"},xt={class:"xl:grid xl:grid-cols-3 xl:gap-8"},bt={class:"space-y-8 xl:col-span-1"},yt=e("img",{class:"h-10",src:Ee,alt:"JenetWorks"},null,-1),wt=e("p",{class:"text-gray-500 text-base"},"Making the world a better place through constructing elegant hierarchies.",-1),Pt={class:"flex space-x-6"},kt=["href"],St={class:"sr-only"},Ct={class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},$t={class:"md:grid md:grid-cols-2 md:gap-8"},Bt=e("h3",{class:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},"Solutions",-1),It={role:"list",class:"mt-4 space-y-4"},Ot=["href"],Et={class:"mt-12 md:mt-0"},Mt=e("h3",{class:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},"Support",-1),At={role:"list",class:"mt-4 space-y-4"},Ft=["href"],jt={class:"md:grid md:grid-cols-2 md:gap-8"},Dt=e("h3",{class:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},"Company",-1),zt={role:"list",class:"mt-4 space-y-4"},Lt=["href"],Tt={class:"mt-12 md:mt-0"},Vt=e("h3",{class:"text-sm font-semibold text-gray-400 tracking-wider uppercase"},"Legal",-1),Nt={role:"list",class:"mt-4 space-y-4"},Gt=["href"],Wt=e("div",{class:"mt-12 border-t border-gray-500 py-8"},[e("p",{class:"text-base text-gray-400 xl:text-center"},"\xA9 2020 JenetWorks, Inc. All rights reserved.")],-1),Kt={__name:"AppLayout",setup(i){he();const p=me(),b=[{name:"Home",href:"/"},{name:"About Us",href:"#"},{name:"Blog",href:"#"},{name:"Contact Us",href:"#"}],k=[{name:"Cloud",href:"#"},{name:"Dedicated Servers",href:"#"},{name:"VPS",href:"#"},{name:"Corporate Hosting",href:"#"},{name:"Business Solution",href:"#"},{name:"Corporate Profile",href:"#"},{name:"Data Center",href:"#"}],o={solutions:[{name:"Marketing",href:"#"},{name:"Analytics",href:"#"},{name:"Commerce",href:"#"},{name:"Insights",href:"#"}],support:[{name:"Pricing",href:"#"},{name:"Documentation",href:"#"},{name:"Guides",href:"#"},{name:"API Status",href:"#"}],company:[{name:"About",href:"#"},{name:"Blog",href:"#"},{name:"Jobs",href:"#"},{name:"Press",href:"#"},{name:"Partners",href:"#"}],legal:[{name:"Claim",href:"#"},{name:"Privacy",href:"#"},{name:"Terms",href:"#"}],social:[{name:"Facebook",href:"#",icon:I({render:()=>P("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[P("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})])})},{name:"Instagram",href:"#",icon:I({render:()=>P("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[P("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})])})},{name:"Twitter",href:"#",icon:I({render:()=>P("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[P("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})])})},{name:"GitHub",href:"#",icon:I({render:()=>P("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[P("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})])})},{name:"Dribbble",href:"#",icon:I({render:()=>P("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[P("path",{"fill-rule":"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z","clip-rule":"evenodd"})])})}]};function t(){return p.logout()}return(S,m)=>{const h=se("router-link"),v=se("router-view");return g(),w("div",je,[e("div",De,[e("div",ze,[$(E(ve),{as:"header",class:"relative"},{default:L(()=>[e("div",Le,[e("div",Te,[e("div",Ve,[e("div",Ne,[(g(),w(B,null,F(b,n=>e("a",{key:n.name,href:n.href,class:"px-4 text-base font-medium text-gray-600 hover:text-gray-400"},j(n.name),9,Ge)),64))]),e("div",We,[E(p).isLoggedIn?(g(),w("a",{key:0,href:"#",onClick:t,class:"inline-flex items-center px-2 py-1 border-transparent text-base font-medium text-orange-400 hover:text-orange-700"}," Logout ")):ae("",!0),E(p).isLoggedIn?(g(),R(h,{key:1,to:"console",target:"_blank",class:"inline-flex items-center px-2 py-1 border-transparent text-base font-medium text-orange-400 hover:text-orange-700"},{default:L(()=>[Je]),_:1})):ae("",!0),He])])])]),e("div",Ke,[e("div",Re,[e("div",qe,[Ue,e("div",Ze,[e("div",null,[$(E(Oe),{class:"flex-shrink-0 w-10 h-10 text-orange-400 border-2 border-orange-400 rounded-full px-2 py-1"})]),Qe])])])]),e("div",Xe,[e("nav",Ye,[e("div",et,[e("div",tt,[e("div",ot,[$(E(le),{class:"bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"},{default:L(()=>[nt,$(E(Ie),{class:"h-6 w-6","aria-hidden":"true"})]),_:1})])]),e("div",at,[(g(),w(B,null,F(k,n=>e("a",{key:n.name,href:n.href,class:"px-2 py-2 text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-900"},j(n.name),9,st)),64))])])])]),$(ge,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:L(()=>[$(E(Fe),{focus:"",class:"absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"},{default:L(()=>[e("div",lt,[e("div",rt,[it,e("div",ct,[$(E(le),{class:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"},{default:L(()=>[ut,$(E(_e),{class:"h-6 w-6","aria-hidden":"true"})]),_:1})])]),e("div",dt,[e("div",pt,[(g(),w(B,null,F(k,n=>e("a",{key:n.name,href:n.href,class:"block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"},j(n.name),9,vt)),64))]),ft])])]),_:1})]),_:1})]),_:1})]),e("main",ht,[$(v)]),e("footer",mt,[gt,e("div",_t,[e("div",xt,[e("div",bt,[yt,wt,e("div",Pt,[(g(!0),w(B,null,F(o.social,n=>(g(),w("a",{key:n.name,href:n.href,class:"text-gray-400 hover:text-gray-500"},[e("span",St,j(n.name),1),(g(),R(xe(n.icon),{class:"h-6 w-6","aria-hidden":"true"}))],8,kt))),128))])]),e("div",Ct,[e("div",$t,[e("div",null,[Bt,e("ul",It,[(g(!0),w(B,null,F(o.solutions,n=>(g(),w("li",{key:n.name},[e("a",{href:n.href,class:"text-base text-gray-500 hover:text-gray-300"},j(n.name),9,Ot)]))),128))])]),e("div",Et,[Mt,e("ul",At,[(g(!0),w(B,null,F(o.support,n=>(g(),w("li",{key:n.name},[e("a",{href:n.href,class:"text-base text-gray-500 hover:text-gray-300"},j(n.name),9,Ft)]))),128))])])]),e("div",jt,[e("div",null,[Dt,e("ul",zt,[(g(!0),w(B,null,F(o.company,n=>(g(),w("li",{key:n.name},[e("a",{href:n.href,class:"text-base text-gray-500 hover:text-gray-300"},j(n.name),9,Lt)]))),128))])]),e("div",Tt,[Vt,e("ul",Nt,[(g(!0),w(B,null,F(o.legal,n=>(g(),w("li",{key:n.name},[e("a",{href:n.href,class:"text-base text-gray-500 hover:text-gray-300"},j(n.name),9,Gt)]))),128))])])])])]),Wt])])])])}}};export{Kt as default};
