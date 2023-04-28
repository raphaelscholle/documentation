"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Display Setup",sidebar_position:10},o="Display Introduction",s={unversionedId:"rock5/configuration/display",id:"rock5/configuration/display",title:"Display Introduction",description:"When choosing a monitor, you need to be aware of that different products support different display resolutions, please check the information on your product for details.",source:"@site/docs/rock5/configuration/display.md",sourceDirName:"rock5/configuration",slug:"/rock5/configuration/display",permalink:"/zh/rock5/configuration/display",draft:!1,editUrl:"https://github.com/radxa-docs/documentation/edit/main/docs/rock5/configuration/display.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Display Setup",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Device Tree Configuration",permalink:"/zh/rock5/configuration/devicetree"},next:{title:"Headless Setup",permalink:"/zh/rock5/configuration/headless"}},p={},l=[{value:"Display Setup",id:"display-setup",level:2},{value:"System Settings-Display Settings",id:"system-settings-display-settings",level:3},{value:"Terminal Command Settings",id:"terminal-command-settings",level:3},{value:"Display Rotation",id:"display-rotation",level:4},{value:"Multiple Screen Settings",id:"multiple-screen-settings",level:4}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display-introduction"},"Display Introduction"),(0,a.kt)("p",null,"When choosing a monitor, you need to be aware of that different products support different display resolutions, please check the information on your ",(0,a.kt)("a",{parentName:"p",href:"../../productlist"},"product")," for details.\nHowever, if you want to build a ",(0,a.kt)("a",{parentName:"p",href:"../configuration/headless"},"headless platform"),", it'll not be a problem for you."),(0,a.kt)("p",null,"Take ",(0,a.kt)("a",{parentName:"p",href:"https://radxa.com/product/detailed?product_name=rock_5a"},"ROCK 5A")," for example, there are two micro HDMI and one mipi display interface. One micro HDMI supports up to 8K resolution as another suports up to 4K. Theoretically, you can use three screens at the same time.  "),(0,a.kt)("h2",{id:"display-setup"},"Display Setup"),(0,a.kt)("p",null,"This setting is just available when you operating on the monitor. You can change the display setting by following ways.  "),(0,a.kt)("h3",{id:"system-settings-display-settings"},"System Settings-Display Settings"),(0,a.kt)("p",null,"On KDE desktop, you would see the ",(0,a.kt)("inlineCode",{parentName:"p"},"System Settings")," after left clicking on the  ",(0,a.kt)("inlineCode",{parentName:"p"},"Appliction Launcher")," in the lower left corner.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"System settings",src:n(4885).Z,width:"480",height:"624"}),(0,a.kt)("br",{parentName:"p"}),"\n","Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"System Settings"),", find ",(0,a.kt)("inlineCode",{parentName:"p"},"Display and Monitor")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hardware")," option:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"System Settings",src:n(4497).Z,width:"1154",height:"859"}),(0,a.kt)("br",{parentName:"p"}),"\n","You can modify the following settings in it:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Display Settings",src:n(9403).Z,width:"1154",height:"859"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Note: If you are using multiple monitors, the same steps are effective.")),(0,a.kt)("h3",{id:"terminal-command-settings"},"Terminal Command Settings"),(0,a.kt)("p",null,"We also provide ",(0,a.kt)("inlineCode",{parentName:"p"},"xrandr")," for display settings.",(0,a.kt)("br",{parentName:"p"}),"\n","With the following command you can check the current display status:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"radxa@rock-5a:~$ xrandr\n")),(0,a.kt)("p",null,"There is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"radxa@rock-5a:~$ xrandr\nScreen 0: minimum 320 x 200, current 1920 x 1080, maximum 16384 x 16384\nHDMI-1 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 0mm x 0mm\n   1920x1080     60.00*+  60.00    50.00    59.94\n   1920x1080i    60.00    60.00    50.00    59.94\n   1600x900      60.00\n   1280x1024     75.02    60.02\n   1152x864      75.00\n   1280x720      60.00    60.00    50.00    59.94\n   1024x768      75.03    60.00\n   800x600       75.00    60.32\n   720x576       50.00\n   720x576i      50.00\n   720x480       60.00    60.00    59.94    59.94    59.94\n   720x480i      60.00    59.94\n   640x480       75.00    60.00    59.94    59.94\n   720x400       70.08\nDP-1 disconnected (normal left inverted right x axis y axis)\n")),(0,a.kt)("p",null,"You can check which monitor is connected and the corresponding resolution.  "),(0,a.kt)("h4",{id:"display-rotation"},"Display Rotation"),(0,a.kt)("p",null,"You can rotate your screen display by modifying the ",(0,a.kt)("a",{parentName:"p",href:"../configuration/display#system-settings-display-settings"},"Display Settings"),"-Orientation.",(0,a.kt)("br",{parentName:"p"}),"\n","Or you can also achieving by command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Single Screen:\n   xrandr -o left     # Rotate 90 degrees to the left\n   xrandr -o right    # Rotate 90 degrees to the right\n   xrandr -o inverted # Flip up and down, rotate 180 degrees\n   xrandr -o normal   # Back to the normal angle\n   xrandr -s 1024x768 # Set the resolution\n   xrandr -s 0        # Set the default resolution, which generally defaults to the highest resolution\n   xrandr -rate       # Set refresh rate\n")),(0,a.kt)("h4",{id:"multiple-screen-settings"},"Multiple Screen Settings"),(0,a.kt)("p",null,"ROCK 5A Supports up to three displays, two micro HDMI interfaces and one mipi interface, the ",(0,a.kt)("strong",{parentName:"p"},"mipi display")," should be enabled on overlay:",(0,a.kt)("br",{parentName:"p"}),"\n","You can get the supported mipi screen model on ",(0,a.kt)("a",{parentName:"p",href:"../configuration/devicetree#how-to-enable-an-overlay"},"overlays menu"),",\nbefore using the mipi screen, you need to enable the corresponding overlay and reboot.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        [ ] Enable Radxa Display 10HD \n        [ ] Enable Radxa Display 8HD\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Different product may support different screen."),"  "),(0,a.kt)("p",null,"There is a guide for using ",(0,a.kt)("a",{parentName:"p",href:"../rock5a/accessories_guides/LCD_8_HD"},"Radxa Display 8HD"),". "),(0,a.kt)("p",null,"In addition to Settings, the following commands enable you to modify in the display settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Dual Screen:\n   # HDMI-1 --screen 1   DP-1 --screen 2\n   xrandr --output HDMI-1 --primary # SetUp Home Screen\n   xrandr --output HDMI-1 --auto --output DP-1 --off # Display only HDMI\n   xrandr --output DSI-1 --off --output HDMI-1 --off # No display on either screen\n   xrandr --output HDMI-1 --same-as DP-1 --auto # Simultaneous display of the same content\n   xrandr --output HDMI-1 --right-of DP-1 --auto # DP-1 is the main display, the HDMI-1 is an extension and to the right of DP-1\n")),(0,a.kt)("p",null,"For more informations , please check ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X.Org_Server#Other_DDX_components"},"X.Org Server RandR"),"."))}d.isMDXComponent=!0},9403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/display_setting-73b3888523010bc2a2f23bdeb86869cc.png"},4885:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/start_sys_setting-99b3c31d1a96e57f60b2d7f468168f9f.png"},4497:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/system_setting-87223b03772080f78e0f3e67a3f37816.png"}}]);