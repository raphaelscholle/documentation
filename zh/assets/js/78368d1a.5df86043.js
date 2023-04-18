"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),h=n,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||i;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_label:"Install OS to an eMMC Module",sidebar_position:33},o="Install OS to an eMMC Module",l={unversionedId:"rock5/rock5a/getting_started/emmc_install",id:"rock5/rock5a/getting_started/emmc_install",title:"Install OS to an eMMC Module",description:"Prepare",source:"@site/docs/rock5/rock5a/getting_started/emmc_install.md",sourceDirName:"rock5/rock5a/getting_started",slug:"/rock5/rock5a/getting_started/emmc_install",permalink:"/zh/rock5/rock5a/getting_started/emmc_install",draft:!1,editUrl:"https://github.com/radxa-docs/documentation/edit/main/docs/rock5/rock5a/getting_started/emmc_install.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_label:"Install OS to an eMMC Module",sidebar_position:33},sidebar:"tutorialSidebar",previous:{title:"Install OS to an Micro SD Card",permalink:"/zh/rock5/rock5a/getting_started/sdcard_install"},next:{title:"Install OS to M.2 NVMe SSD",permalink:"/zh/rock5/rock5a/getting_started/m2_install"}},c={},s=[{value:"Prepare",id:"prepare",level:2},{value:"Installation",id:"installation",level:2}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install-os-to-an-emmc-module"},"Install OS to an eMMC Module"),(0,n.kt)("h2",{id:"prepare"},"Prepare"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prepare an eMMC module and a ",(0,n.kt)("a",{parentName:"li",href:"../../../accessories/emmc_reader"},"Radxa eMMC Reader"),".",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{alt:"Radxa eMMC",src:a(5387).Z,width:"950",height:"550"})),(0,n.kt)("li",{parentName:"ul"},"Download the official Ubuntu/Debian system image from ",(0,n.kt)("a",{parentName:"li",href:"/zh/rock5/rock5a/downloads/official_images"},"Downloads"),"."),(0,n.kt)("li",{parentName:"ul"},"Download the flash tool etcher from ",(0,n.kt)("a",{parentName:"li",href:"https://www.balena.io/etcher#download-etcher"},"downloads"),".",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{alt:"ROCK5A via Ethcher",src:a(5937).Z,width:"1641",height:"824"}))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Insert the eMMC module into the Rock Pi eMMC USB reader, then insert the Rock Pi eMMC USB reader into the USB port of the computer.\n",(0,n.kt)("strong",{parentName:"p"},"Note: Please align the A1 port with the A2 port and insert the B1 port with the B2 port when inserting the eMMC module into the Radxa eMMC Reader")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ROCK5A eMMC Install 01",src:a(1718).Z,width:"520",height:"280"}),"\n",(0,n.kt)("img",{alt:"ROCK5A eMMC Install 02",src:a(2423).Z,width:"520",height:"280"})))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open etcher and prepare to flash OS image to Micro SD card. In the etcher window, click flash from file to select the OS image you juet downloaded."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"ROCK5A eMMC via Etcher 01",src:a(5795).Z,width:"700",height:"447"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the etcher window, click Select target(Drive)."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"ROCK5A eMMC via Etcher 02",src:a(4109).Z,width:"797",height:"518"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the etcher window, click Flash and wait for flashing image process."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"ROCK5A eMMC via Etcher 03",src:a(4107).Z,width:"803",height:"522"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the etcher window, it means success when it shows flash compete."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"ROCK5A eMMC via Etcher 04",src:a(9030).Z,width:"722",height:"468"})))))}d.isMDXComponent=!0},1718:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/emmc-install1-14825db77a2760f5f6ebeb0e48ff1d41.png"},2423:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/emmc-install2-448aac3c549450bbc58657e77282db69.png"},5387:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/emmc_related_01-67967efab84255f9fd6d8ed0b725e3d2.webp"},5795:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rock5a-etcher-1-2a403680298628e50ed37ad56ee430f7.png"},4109:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rock5a-etcher-2-6f83a5335433201bb9a5cc81edc7ffb2.png"},4107:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rock5a-etcher-3-f3e533403adf7e351ab682394a75aaf8.png"},9030:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rock5a-etcher-4-ca58e447a39bdf50d59f47c2b2b7f0f8.png"},5937:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rock5a-etcher-1a621b4ae4322fa2d758858928a93f0d.png"}}]);