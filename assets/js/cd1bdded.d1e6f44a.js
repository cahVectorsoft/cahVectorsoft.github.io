"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[8247],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,y=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return o?n.createElement(y,i(i({ref:t},d),{},{components:o})):n.createElement(y,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9495:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);const r=function(e){let{src:t,alt:o,boxShadow:r="2px 2px 5px var(--y-gray__7)",label:a="",size:i="auto",previewScale:s=.2}=e;const[c,p]=(0,n.useState)(!1),d=()=>{document.body.style.overflow=c?"visible":"hidden",p(!c)};return(0,n.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),n.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},n.createElement("img",{src:t,alt:o,style:{boxShadow:r,width:i,cursor:"pointer",objectFit:"contain",display:"block"},onClick:d}),a&&n.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},a),c&&n.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},n.createElement("img",{src:t,alt:o,style:{width:`calc(${i} * ${s})`,height:"auto",objectFit:"contain",display:"block"}}),n.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:d},"\xd7")))}},5410:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);const r=function(e){let{src:t,boxShadow:o="2px 2px 5px var(--y-gray__7)",label:r="",size:a="40%"}=e;return n.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},n.createElement("video",{autoPlay:!0,muted:"muted",loop:!0,playsInline:!0,controls:!0,style:{boxShadow:o,width:a,objectFit:"contain",display:"block"}},n.createElement("source",{src:t,type:"video/mp4"})),r&&n.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},r))}},3152:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(7294),r=o(5999),a=o(7863);function i(e){var t;let{children:o,target:i,group:s="components",section:c="",linkName:p,className:d}=e,l=o;null==o&&(l=null==p?i:p);const u=(null==(t=a[s])?void 0:t[i])??"/error";return n.createElement("span",{className:d},n.createElement("a",{href:(0,r.I)({id:"lang.identifier",message:""})+u+(""!=c?"#":"")+c.toLowerCase()},l))}},3489:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);function r(e){let{children:t}=e;const[o,r]=(0,n.useState)("https://");return n.createElement("div",{className:"domain-input"},n.createElement("input",{onChange:function(e){let t="https://";console.log("inputEvent",e),t=t+e.target.value+"/#/en-US/yeet/login",r(t)}}),n.createElement("a",{href:o},o))}},4747:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(3117),r=(o(7294),o(3905)),a=(o(3489),o(9495));o(5410),o(3152);const i={title:"Navigations",sidebar_position:4},s=void 0,c={unversionedId:"yeet/frontend/navigations/navigations",id:"yeet/frontend/navigations/navigations",title:"Navigations",description:"--\x3e",source:"@site/docs/yeet/frontend/navigations/navigations.mdx",sourceDirName:"yeet/frontend/navigations",slug:"/yeet/frontend/navigations/",permalink:"/yeet/frontend/navigations/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yeet/frontend/navigations/navigations.mdx",tags:[],version:"current",lastUpdatedBy:"Wegener",sidebarPosition:4,frontMatter:{title:"Navigations",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Clipboards",permalink:"/yeet/frontend/clipboards/"},next:{title:"Navigationtree",permalink:"/yeet/frontend/navigations/navigationtree/"}},p={},d=[{value:"Topbar",id:"topbar",level:2},{value:"Explorer",id:"explorer",level:2},{value:"Content area",id:"content-area",level:2},{value:"Detail Panel",id:"detail-panel",level:2}],l={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},'"Navigation"')," subsection, you can define the navigation for your project. To do this, you create a navigation structure based on\na ",(0,r.kt)("strong",{parentName:"p"},"navigation tree")," and display it as a menu in your project using a ",(0,r.kt)("strong",{parentName:"p"},"navigation component"),". We offer simple base navigations that can\nbe customized using additional components."),(0,r.kt)("p",null,"Navigation can be selected via the submenu under ",(0,r.kt)("strong",{parentName:"p"},'"Frontend"'),". Each project has its own navigation defined."),(0,r.kt)(a.Z,{src:"",alt:"Topbar",width:"100%",height:"auto",border:"none",boxShadow:"none",mdxType:"BasicImage"}),(0,r.kt)("h2",{id:"topbar"},"Topbar"),(0,r.kt)("p",null,"In the Clipboard editor, at the top, you will find the ",(0,r.kt)("strong",{parentName:"p"},"topbar"),". On the left side, there are options to ",(0,r.kt)("strong",{parentName:"p"},"change")," (1) the project name\n(double-clicking the project name opens an in-place edit), ",(0,r.kt)("strong",{parentName:"p"},"save the current state")," of your project (2), or ",(0,r.kt)("strong",{parentName:"p"},"save")," the project under a different name (3)."),(0,r.kt)("p",null,"On the right side, you can launch the preview (4) or start the project as a real web app (5)."),(0,r.kt)(a.Z,{src:"",alt:"Topbar",width:"100%",height:"auto",border:"none",boxShadow:"none",mdxType:"BasicImage"}),(0,r.kt)("h2",{id:"explorer"},"Explorer"),(0,r.kt)("p",null,"In the explorer, you can switch between the Navigation Tree and Masks modes using the tabs.\nDepending on the active tab, either the navigation structure editor or the mask editor will be displayed."),(0,r.kt)(a.Z,{src:"",alt:"Topbar",width:"100%",height:"auto",border:"none",boxShadow:"none",mdxType:"BasicImage"}),(0,r.kt)("h2",{id:"content-area"},"Content area"),(0,r.kt)("p",null,"Here, a preview corresponding to the current selection in the Explorer is displayed."),(0,r.kt)("h2",{id:"detail-panel"},"Detail Panel"),(0,r.kt)("p",null,"Here, properties can be adjusted for the current Explorer selection."),(0,r.kt)(a.Z,{src:"",alt:"Topbar",width:"100%",height:"auto",border:"none",boxShadow:"none",mdxType:"BasicImage"}))}u.isMDXComponent=!0},7863:e=>{e.exports=JSON.parse('{"components":{"":"/docs/Components","YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker"},"essentials":{"Flexbox":"/docs/Essentials/Flexbox/","Clipboard":"/docs/Essentials/Clipboard/","BoxModel":"/docs/Essentials/Boxmodel/","OData":"/docs/Essentials/OData/"},"advanced":{"Component-Basics":"/docs/Advanced/Component-Basics"},"themes":{"theme-scraper":"/docs/Yeet/Themes/ThemeScraper/","theme-editor":"/docs/Yeet/Themes/ThemeEditor/","theme-manager":"/docs/Yeet/Themes/ThemeManager/","themes":"/docs/Yeet/Themes/"},"events":{},"properties":{"Display":"/docs/Yeet/Properties/Display/","Meta":"/docs/Yeet/Properties/Meta/","Placement":"/docs/Yeet/Properties/Placement/","Size":"/docs/Yeet/Properties/Size/"},"property-types":{"Boolean-Property":"/docs/Advanced/Property-Types/booleanProperty/","Color-Property":"/docs/Advanced/Property-Types/colorProperty/","Column-Property":"/docs/Advanced/Property-Types/columnProperty","EventFunction-Property":"/docs/Advanced/Property-Types/eventFunctionProperty","Icon-Property":"/docs/Advanced/Property-Types/iconProperty/","List-Property":"/docs/Advanced/Property-Types/listProperty/","Number-Property":"/docs/Advanced/Property-Types/numberProperty/","OptionList-Property":"/docs/Advanced/Property-Types/optionListProperty","Range-Property":"docs/Advanced/Property-Types/rangeProperty","Shadow-Property":"/docs/Advanced/Property-Types/shadowProperty/","SourceLink-Property":"/docs/Advanced/Property-Types/sourceLinkProperty/","String-Property":"/docs/Advanced/Property-Types/stringProperty/","UnitNumber-Property":"/docs/Advanced/Property-Types/unitNumberProperty/","ValidatorList-Property":"/docs/Advanced/Property-Types/validatorListProperty"},"multi-properties":{"Alignment-Property":"/docs/Advanced/Multi-Properties/alignmentProperty","Border-Property":"/docs/Advanced/Multi-Properties/borderProperty","Element-Property":"/docs/Advanced/Multi-Properties/elementProperty","Font-Property":"/docs/Advanced/Multi-Properties/fontProperty","Sizing-Property":"/docs/Advanced/Multi-Properties/sizingProperty","Spacing-Property":"/docs/Advanced/Multi-Properties/spacingProperty"},"ui-designer":{"PB1n2":"/docs/Yeet/UI-Designer/Propertybar1n2","PB3":"/docs/Yeet/UI-Designer/Propertybar3","":"/docs/Yeet/UI-Designer"},"theme-manager":{"Theme-Editor":"/docs/Yeet/Theme-Manager/Theme-Editor/"},"Data":{"":"/docs/Yeet/Data/"},"User-Manager":{},"Settings":{},"Components":{"YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker","YPopup":"/docs/Components/YPopup","YQrCode":"/docs/Components/YQrCode"},"Navigations":{"Navigations":"/docs/Yeet/Frontend/Navigations/"}}')}}]);