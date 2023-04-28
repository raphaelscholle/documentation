"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1534],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,h=u["".concat(d,".").concat(m)]||u[m]||s[m]||n;return o?a.createElement(h,i(i({ref:t},p),{},{components:o})):a.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},585:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=o(7462),r=(o(7294),o(3905));const n={sidebar_label:"Audio and Video",sidebar_position:70},i="Audio",l={unversionedId:"rock5/radxa_os/av",id:"rock5/radxa_os/av",title:"Audio",description:"The Radxa ROCK 5A product provides 2 audio output options, including the 3.5mm headphone jack and HDMI interface.",source:"@site/docs/rock5/radxa_os/av.md",sourceDirName:"rock5/radxa_os",slug:"/rock5/radxa_os/av",permalink:"/rock5/radxa_os/av",draft:!1,editUrl:"https://github.com/radxa-docs/documentation/edit/main/docs/rock5/radxa_os/av.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_label:"Audio and Video",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Remote Login",permalink:"/rock5/radxa_os/remote_login"},next:{title:"Social Media Apps",permalink:"/rock5/radxa_os/social"}},d={},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audio"},"Audio"),(0,r.kt)("p",null,"The Radxa ROCK 5A product provides 2 audio output options, including the 3.5mm headphone jack and HDMI interface.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you use headphones to listen to music, please plug your headphones into the 3.5mm headphone jack. Open the sound icon in the lower right corner of the desktop and switch to the headphone driver.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Additionally, through the HDMI interface, users can directly transmit audio and video signals to the connected display or TV without the need for additional audio cables. The HDMI interface also supports high-quality digital audio transmission, providing similar audio quality to the digital audio interface. Similarly, to switch to HDMI output, you only need to select HDMI/Display port in the audio output mode."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ROCK5A_Audio",src:o(854).Z,width:"442",height:"490"})),(0,r.kt)("h1",{id:"video"},"Video"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dragon Player is the default media player included in the Debian system, If Dragon Player is not installed in the system, you can execute the following command to install it.  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get update  \nsudo apt-get install dragonplayer  \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter your password if prompted, and then wait for the installation to complete.",(0,r.kt)("br",{parentName:"li"}),"Once Dragon Player is installed, you can use the following command to open a video:  ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"dragon /path/to/video/file\n"))),(0,r.kt)("li",{parentName:"ul"},'Replace "/path/to/video/file" with the actual path and filename of the video you want to play. For example, if your video is located in the "Videos" folder in your home directory and is called "myvideo.mp4", the command would look like this:  ')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dragon ~/Videos/myvideo.mp4\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Of course, you can also directly double-click the video file icon to play it.  ")),(0,r.kt)("p",null,"As for the video formats supported by Dragon Player, it can decode any format that is supported by the FFmpeg library. This includes popular video formats such as MP4, AVI, MKV, WMV, FLV, MOV, and more."))}s.isMDXComponent=!0},854:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/rock5a_audio-3ae48c861b5a1be6db1f3a16c27447bc.webp"}}]);