"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[5905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9495:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=function(e){let{src:t,alt:n,boxShadow:a="2px 2px 5px var(--y-gray__7)",label:i="",size:o="auto",previewScale:l=.2}=e;const[c,s]=(0,r.useState)(!1),p=()=>{document.body.style.overflow=c?"visible":"hidden",s(!c)};return(0,r.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),r.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},r.createElement("img",{src:t,alt:n,style:{boxShadow:a,width:o,cursor:"pointer",objectFit:"contain",display:"block"},onClick:p}),i&&r.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},i),c&&r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},r.createElement("img",{src:t,alt:n,style:{width:`calc(${o} * ${l})`,height:"auto",objectFit:"contain",display:"block"}}),r.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:p},"\xd7")))}},8984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(3117),a=(n(7294),n(3905)),i=n(9495);const o=n.p+"assets/images/cockpit_quickstarts-d36d5e86874df63fb05c6e72b40ea969.png",l={title:"Cockpit",description:"Here you find an explanation of the cockpit.",sidebar_position:1},c="Cockpit",s={unversionedId:"yeet/cockpit/cockpit",id:"yeet/cockpit/cockpit",title:"Cockpit",description:"Here you find an explanation of the cockpit.",source:"@site/docs/yeet/cockpit/cockpit.mdx",sourceDirName:"yeet/cockpit",slug:"/yeet/cockpit/",permalink:"/yeet/cockpit/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yeet/cockpit/cockpit.mdx",tags:[],version:"current",lastUpdatedBy:"Wegener",sidebarPosition:1,frontMatter:{title:"Cockpit",description:"Here you find an explanation of the cockpit.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"yeet Platform",permalink:"/category/yeet-platform"},next:{title:"Themes",permalink:"/yeet/themes/"}},p={},u=[{value:"Quickstart",id:"quickstart",level:2},{value:"Navigation",id:"navigation",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cockpit"},"Cockpit"),(0,a.kt)("p",null,"The cockpit serves as the entry point into the yeet application, provided the user has successfully authenticated."),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"The quick links offer the capability to create instances within three main modules of yeet:"),(0,a.kt)(i.Z,{src:o,alt:"CockpitQuickstarts",border:"none",size:"50%",previewScale:"0.6",mdxType:"BasicImage"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New project"),(0,a.kt)("br",{parentName:"li"}),"Creates a new frontend project and navigates to frontend > ui."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New entity"),(0,a.kt)("br",{parentName:"li"}),"Creates a new entity and navigates to data model."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New theme"),(0,a.kt)("br",{parentName:"li"}),"Creates a new theme and navigates to theme editor.")),(0,a.kt)("h2",{id:"navigation"},"Navigation"),(0,a.kt)("p",null,"On the left side is the navigation of yeet. Here, you'll find all the essential entry points and modules of the application from which you can start your development process.",(0,a.kt)("br",{parentName:"p"}),"\n","The navigation is dynamic and adjusts to your current position within yeet. This ensures that the navigation points relevant to you are always available, making navigating within yeet quick and easy."),(0,a.kt)("p",null,"From the cockpit you can navigate to all necessary ressources that yeet consists of. This includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Projects"),(0,a.kt)("br",{parentName:"li"}),"To navigate to an overview of all existing frontend projects."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Themes"),(0,a.kt)("br",{parentName:"li"}),"To create, read, update and delete all existing themes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Frontend"),(0,a.kt)("br",{parentName:"li"}),"A quicklink to reopen the last opened frontend project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data"),(0,a.kt)("br",{parentName:"li"}),"To administer entities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access Control"),(0,a.kt)("br",{parentName:"li"}),"To create, read, update and delete users roles which is only availlable when being on standalone.")))}m.isMDXComponent=!0}}]);