"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,w=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(w,i(i({ref:t},d),{},{components:n})):r.createElement(w,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Network Setting",sidebar_position:20},i="Set Ethernet",s={unversionedId:"rock5/radxa_os/network",id:"rock5/radxa_os/network",title:"Set Ethernet",description:"ROCK 5A offers a 10/100/1000Mbit RJ45 connector for wired networking. With additional PoE module/HAT, ROCK 5A can be powered by ethernet cable via RJ45 port by a PoE capable switch/router.",source:"@site/docs/rock5/radxa_os/network.md",sourceDirName:"rock5/radxa_os",slug:"/rock5/radxa_os/network",permalink:"/rock5/radxa_os/network",draft:!1,editUrl:"https://github.com/radxa-docs/documentation/edit/main/docs/rock5/radxa_os/network.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Network Setting",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Basic Setting",permalink:"/rock5/radxa_os/basic_setting"},next:{title:"Auto Login",permalink:"/rock5/radxa_os/autologin"}},c={},l=[{value:"Static IP settings",id:"static-ip-settings",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-ethernet"},"Set Ethernet"),(0,o.kt)("p",null,"ROCK 5A offers a 10/100/1000Mbit RJ45 connector for wired networking. With additional PoE module/HAT, ROCK 5A can be powered by ethernet cable via RJ45 port by a PoE capable switch/router.   "),(0,o.kt)("p",null,"When you use wired Internet, please plug the network cable into the RJ45 connector. There will be a network connection icon in the lower right corner of the desktop, select the network you want to connect to and enter the password to connect to the Internet.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rock5a/rock5a_wifi",src:n(2720).Z,width:"445",height:"487"})," "),(0,o.kt)("h1",{id:"set-wlan"},"Set WLAN"),(0,o.kt)("p",null,"If you need to connect to the Internet wirelessly, you need to install a wireless module. Radxa recommends you to use Radxa Wireless Module A8.\nThe following is the tutorial of ROCK 5A wireless Internet access:  "),(0,o.kt)("p",null,"\u2022 Click the WiFi icon in the lower right corner of the desktop, select the WiFi you want to connect to and enter the password."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rock5a/rock5a_wifi",src:n(6915).Z,width:"448",height:"493"}),"  "),(0,o.kt)("p",null,"\u2022 In the KDE Wallet Service interface, please select \u201cClassic, blowfish encryted file\u201d and click Finish."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rock5a/rock5a_wifi",src:n(3894).Z,width:"498",height:"389"}),"  "),(0,o.kt)("p",null,'\u2022 As shown in the figure below, just click "OK" without entering a password.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rock5a/rock5a_wifi",src:n(9216).Z,width:"310",height:"361"}),"  "),(0,o.kt)("p",null,"\u2022 Click YES.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rock5a/rock5a_wifi",src:n(8809).Z,width:"500",height:"370"}),"  "),(0,o.kt)("p",null,"\u2022 If the WiFi connection is successful, network management will show that your wifi name is activated. If you want to turn off wifi, click the box pointed by the arrow to cancel the wifi connection.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rock5a/rock5a_wifi",src:n(5522).Z,width:"478",height:"631"}),"  "),(0,o.kt)("h2",{id:"static-ip-settings"},"Static IP settings"),(0,o.kt)("p",null,"Networks typically use dynamic IP addresses to better manage IP address allocation on the network. Dynamic IP addresses are automatically assigned through DHCP (Dynamic Host Configuration Protocol), which means that each device is assigned a unique IP address when it connects to the network. This approach makes it easier to manage the network and avoids the possibility of IP address conflicts between devices.  "),(0,o.kt)("p",null,"If you want to set a static IP address, you will need to manually assign a fixed IP address for the device.  "),(0,o.kt)("p",null,"As shown in the following operations:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"system setting >> connections >> wire-ed Ethernet or Wi-Fi >> IPv4 >> select Manual >> Add >> enter address, netmask, gatewat >> Apply  \n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rock5a/rock5a_wifi",src:n(2205).Z,width:"1063",height:"726"})))}p.isMDXComponent=!0},2720:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rock5a_ethernet-03c5e4828238fd9d1138df763e624b56.webp"},2205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rock5a_static_ip-4a39da9b21af399f91336d1471a8559c.webp"},6915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rock5a_wifi_1-ba39fe36b4b242d28fa1f6e7d2b574ce.webp"},3894:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rock5a_wifi_2-b74c32ca84ae589d0222d257edca811c.webp"},9216:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rock5a_wifi_3-92ceb4595cd1f73909a6ff26e025b63b.webp"},8809:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rock5a_wifi_4-557531dc0d6ad591b5db4905a92d551f.webp"},5522:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rock5a_wifi_5-0c4d99b1d395adb1620dcf9503b52fa0.webp"}}]);