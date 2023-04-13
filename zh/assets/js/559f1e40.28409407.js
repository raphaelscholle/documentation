"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[653],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=d(a),u=s,h=f["".concat(l,".").concat(u)]||f[u]||p[u]||i;return a?r.createElement(h,n(n({ref:t},c),{},{components:a})):r.createElement(h,n({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,n=new Array(i);n[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var d=2;d<i;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7905:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(7462),s=(a(7294),a(3905));const i={sidebar_label:"OS Installation",sidebar_position:30},n="Chossing an installation media",o={unversionedId:"rock5/rock5a/getting_started/install_os",id:"rock5/rock5a/getting_started/install_os",title:"Chossing an installation media",description:"eMMC",source:"@site/docs/rock5/rock5a/getting_started/install_os.md",sourceDirName:"rock5/rock5a/getting_started",slug:"/rock5/rock5a/getting_started/install_os",permalink:"/zh/rock5/rock5a/getting_started/install_os",draft:!1,editUrl:"https://github.com/radxa-docs/documentation/edit/main/docs/rock5/rock5a/getting_started/install_os.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_label:"OS Installation",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Before start",permalink:"/zh/rock5/rock5a/getting_started/before_start"},next:{title:"Install OS to an SDCard",permalink:"/zh/rock5/rock5a/getting_started/sdcard_install"}},l={},d=[{value:"eMMC",id:"emmc",level:2},{value:"NVMe SSD",id:"nvme-ssd",level:2},{value:"Micro SD Card",id:"micro-sd-card",level:2},{value:"Differences among the three",id:"differences-among-the-three",level:2},{value:"Different interfaces and protocols",id:"different-interfaces-and-protocols",level:3},{value:"Different Read/Write Speeds and Response Speeds",id:"different-readwrite-speeds-and-response-speeds",level:3},{value:"Different lifespan and reliability",id:"different-lifespan-and-reliability",level:3},{value:"Different prices and cost-effectiveness",id:"different-prices-and-cost-effectiveness",level:3},{value:"Different applicable scenarios",id:"different-applicable-scenarios",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"chossing-an-installation-media"},"Chossing an installation media"),(0,s.kt)("h2",{id:"emmc"},"eMMC"),(0,s.kt)("p",null,"eMMC is a built-in storage chip typically used in mobile devices and embedded systems. It integrates flash memory and a controller and has a relatively small capacity, usually ranging from 4GB to 128GB. eMMC has slower read/write speeds compared to SSD and is suitable for storing small applications, media, files and other data. The eMMC chip is often directly soldered onto the device motherboard, unlike SD cards or Micro SD cards, which can be inserted and replaced.",(0,s.kt)("br",{parentName:"p"}),"\n","Radxa offers ",(0,s.kt)("strong",{parentName:"p"},"removable")," eMMC modules."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"eMMC Module",src:a(5387).Z,width:"950",height:"550"}),"\n",(0,s.kt)("img",{alt:"eMMC and SSD Comparison",src:a(5137).Z,width:"1237",height:"553"})),(0,s.kt)("h2",{id:"nvme-ssd"},"NVMe SSD"),(0,s.kt)("p",null,"SSD is a solid-state drive that uses flash memory chips as its storage medium. Compared to traditional mechanical hard drives, it has faster read/write speeds, higher durability, and does not fail due to mechanical wear. SSDs typically range in capacity from 128GB to 2TB and can be used in personal computers, servers, workstations, and other fields."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"NVME SSD",src:a(1790).Z,width:"560",height:"250"})),(0,s.kt)("h2",{id:"micro-sd-card"},"Micro SD Card"),(0,s.kt)("p",null,"Micro SD is a small flash memory storage card typically used to expand the storage space of devices such as smartphones, tablets, and digital cameras. Micro SD cards come in a range of capacities from a few hundred megabytes to several tens of gigabytes, with relatively slow read/write speeds. However, they are compact, portable, and can easily transfer data between different devices. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Micro SD Card",src:a(1243).Z,width:"750",height:"400"})),(0,s.kt)("h2",{id:"differences-among-the-three"},"Differences among the three"),(0,s.kt)("p",null,"In addition to the basic features mentioned above, these three types of storage devices have other important differences, such as:"),(0,s.kt)("h3",{id:"different-interfaces-and-protocols"},"Different interfaces and protocols"),(0,s.kt)("p",null,"eMMC and Micro SD Card use the eMMC and SD interfaces respectively, while SSDs typically use interfaces such as SATA, PCIe. The transmission protocols used by each interface also differ, which affects the speed and performance of the storage device."),(0,s.kt)("h3",{id:"different-readwrite-speeds-and-response-speeds"},"Different Read/Write Speeds and Response Speeds"),(0,s.kt)("p",null,"eMMC typically has slower read/write speeds, usually between 100-400MB/s, due to its limited built-in controller and interface bandwidth. Because of the slower read/write speeds of eMMC, its response speed is correspondingly slower, requiring some loading time."),(0,s.kt)("p",null,"SSD typically has faster read/write speeds, usually between several hundred MB/s to several GB/s, due to its larger built-in controller and interface bandwidth. Because of the faster read/write speeds of SSD, its response speed is also very fast, enabling quick startup, loading, and other operations."),(0,s.kt)("p",null,"The read/write speed of Micro SD is the slowest, usually between 20~100MB/s. Due to the small size of Micro SD, its controller and interface bandwidth are limited, which also leads to its slower read and write speed and response time."),(0,s.kt)("h3",{id:"different-lifespan-and-reliability"},"Different lifespan and reliability"),(0,s.kt)("p",null,"Due to the different storage technologies used, these three types of storage devices also have different lifespans and reliabilities. eMMC has a relatively short lifespan, while SSDs have a longer lifespan. The reliability of Micro SD is also limited, making it unsuitable for long-term storage of important data."),(0,s.kt)("h3",{id:"different-prices-and-cost-effectiveness"},"Different prices and cost-effectiveness"),(0,s.kt)("p",null,"These three types of storage devices also have different prices and cost-effectiveness. eMMC is relatively cheap, but its performance and capacity are limited. SSDs are usually more expensive than eMMC and Micro SD, but have higher performance and larger capacity. Micro SD is relatively low-priced, but is not suitable for storing large amounts of data for long periods of time, and its read and write speeds are relatively slow, making it unsuitable for high-speed data transfer and frequent read and write operations."),(0,s.kt)("h3",{id:"different-applicable-scenarios"},"Different applicable scenarios"),(0,s.kt)("p",null,"eMMC is typically used in mobile devices and embedded systems, such as smartphones, tablets, and industrial control equipment. SSDs are usually used in devices that require high-performance and large-capacity storage, such as personal computers, servers, and workstations. Micro SD is suitable for devices that require lightweight and portable storage expansion, such as digital cameras, portable music players, and smartphones."),(0,s.kt)("p",null,"In summary, eMMC, SSD, and Micro SD have their own applicable scenarios and advantages and disadvantages, and the choice should be based on specific needs and application scenarios."))}p.isMDXComponent=!0},5387:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/emmc_related_01-67967efab84255f9fd6d8ed0b725e3d2.webp"},5137:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/emmc_ssd_comparison-eb9cc1efc24fb93e1d552fa71e35dedb.png"},1243:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/micro-sd-01-bfb21a613e78cb59bba30b463d7d132b.jpg"},1790:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/nvme-ssd-01-6d66ef42dcfdb282f13e071247681c2b.jpg"}}]);