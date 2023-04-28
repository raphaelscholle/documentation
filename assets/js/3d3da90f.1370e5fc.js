"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"LED Setup",sidebar_position:10},i="LED Setup",l={unversionedId:"rock5/configuration/led",id:"rock5/configuration/led",title:"LED Setup",description:"Generally, there are two LEDs on the SBC, one for blue light and another for green light.",source:"@site/docs/rock5/configuration/led.md",sourceDirName:"rock5/configuration",slug:"/rock5/configuration/led",permalink:"/rock5/configuration/led",draft:!1,editUrl:"https://github.com/radxa-docs/documentation/edit/main/docs/rock5/configuration/led.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"LED Setup",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Headless Setup",permalink:"/rock5/configuration/headless"},next:{title:"rsetup Tool Introduction",permalink:"/rock5/configuration/rsetup-tool"}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"led-setup"},"LED Setup"),(0,o.kt)("p",null,"Generally, there are two LEDs on the SBC, one for blue light and another for green light.\nBoth of the light status of them can be modified on ",(0,o.kt)("a",{parentName:"p",href:"../configuration/rsetup-tool#gpio-leds"},"GPIO LEDs"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"GPIO LEDs",src:n(9477).Z,width:"1280",height:"746"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"user-led1")," is the green light, ",(0,o.kt)("inlineCode",{parentName:"p"},"user-led2")," is the blue light.The content of '","[ ]","' at the end shows the current light statu."),(0,o.kt)("p",null,"The following steps help us to change light statu:"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"up")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"down")," arrow keys to move the highlighted selection to which LED you want to edit the statu;  "),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Space")," key to confirm your choose, a '","*","' would appeare on the '","[ ]","' at the start.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"GPIO LEDs_Select",src:n(1662).Z,width:"1299",height:"760"}),(0,o.kt)("br",{parentName:"li"}),"3.Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab")," key to <Ok",">"," button and then press ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter")," to enter the status menu.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"LED_status_menu",src:n(4359).Z,width:"1281",height:"742"}),(0,o.kt)("br",{parentName:"li"}),"4.Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"up")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"down")," arrow keys to select which you like and press ",(0,o.kt)("inlineCode",{parentName:"li"},"Space")," to confirm, a '","*","' would appeare on the '( )' like step 2.",(0,o.kt)("br",{parentName:"li"}),"5.Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab")," key to <Ok",">"," button and then press ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter")," to save your choose and aplly it.",(0,o.kt)("br",{parentName:"li"}),"6.Your LED statu would change after step 5 at once."))))}u.isMDXComponent=!0},9477:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GPIO_LEDs-1d518a66c4d518789891461f649d364a.png"},1662:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GPIO_LEDs_Select-36127d3adfc1bea00ff13c152207ead6.png"},4359:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/LED_status_menu-3003da44351f978f02aa179e2d9b681e.png"}}]);