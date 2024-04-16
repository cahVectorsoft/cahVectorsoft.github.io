"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[675],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=p(o),m=r,u=y["".concat(c,".").concat(m)]||y[m]||l[m]||s;return o?n.createElement(u,a(a({ref:t},d),{},{components:o})):n.createElement(u,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},9495:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);const r=function(e){let{src:t,alt:o,boxShadow:r="2px 2px 5px var(--y-gray__7)",label:s="",size:a="auto",previewScale:i=.2}=e;const[c,p]=(0,n.useState)(!1),d=()=>{document.body.style.overflow=c?"visible":"hidden",p(!c)};return(0,n.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),n.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},n.createElement("img",{src:t,alt:o,style:{boxShadow:r,width:a,cursor:"pointer",objectFit:"contain",display:"block"},onClick:d}),s&&n.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},s),c&&n.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},n.createElement("img",{src:t,alt:o,style:{width:`calc(${a} * ${i})`,height:"auto",objectFit:"contain",display:"block"}}),n.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:d},"\xd7")))}},3152:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294),r=o(5999),s=o(7863);function a(e){var t;let{children:o,target:a,group:i="components",section:c="",linkName:p,className:d}=e,l=o;null==o&&(l=null==p?a:p);const y=(null==(t=s[i])?void 0:t[a])??"/error";return n.createElement("span",{className:d},n.createElement("a",{href:(0,r.I)({id:"lang.identifier",message:""})+y+(""!=c?"#":"")+c.toLowerCase()},l))}},3489:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);function r(e){let{children:t}=e;const[o,r]=(0,n.useState)("https://");return n.createElement("div",{className:"domain-input"},n.createElement("input",{onChange:function(e){let t="https://";console.log("inputEvent",e),t=t+e.target.value+"/#/en-US/yeet/login",r(t)}}),n.createElement("a",{href:o},o))}},2500:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=o(3117),r=(o(7294),o(3905)),s=o(3489),a=o(9495);o(3152);const i={title:"yeet Platform",sidebar_position:2},c=void 0,p={unversionedId:"getting-started/yeet/yeet",id:"getting-started/yeet/yeet",title:"yeet Platform",description:"Getting Started with yeet",source:"@site/docs/getting-started/yeet/yeet.mdx",sourceDirName:"getting-started/yeet",slug:"/getting-started/yeet/",permalink:"/getting-started/yeet/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/yeet/yeet.mdx",tags:[],version:"current",lastUpdatedBy:"Wegener",sidebarPosition:2,frontMatter:{title:"yeet Platform",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/getting-started/installation/"},next:{title:"UI Components",permalink:"/category/ui-components"}},d={},l=[{value:"Getting Started with yeet",id:"getting-started-with-yeet",level:2},{value:"Login",id:"login",level:2}],y={toc:l};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started-with-yeet"},"Getting Started with yeet"),(0,r.kt)("p",null,"To get started with yeet, a yeetCore must first be installed on a server/local machine. If this has not been done yet, please refer to the following page."),(0,r.kt)("h2",{id:"login"},"Login"),(0,r.kt)("p",null,"Zum \xfcberpr\xfcfen ob deine yeetCore installation erfolgreich war, kannst du deine Domain ins Input eintragen und dann den erstellten Link besuchen."),(0,r.kt)(s.Z,{mdxType:"LoginLinkCreator"}),(0,r.kt)("p",null,"Ist die Loginseite erfolgreich im Browser ge\xf6ffnet k\xf6nnen wir mit unserem ersten yeet-Projekt starten.\nDazu w\xe4hlen wir die von dir eingstelle Datenbank aus und loggen uns mit folgenden Daten in yeet ein."),(0,r.kt)(a.Z,{src:"",alt:"ExampleyeetLogin",width:"50%",height:"auto",border:"none",boxShadow:"none",mdxType:"BasicImage"}),(0,r.kt)("p",null,"Wir starten im ",(0,r.kt)("strong",{parentName:"p"},"Cockpit")," und k\xf6nnen nun entscheiden mit welchem Bereich unserer WebApp wir starten wollen."))}m.isMDXComponent=!0},7863:e=>{e.exports=JSON.parse('{"components":{"":"/docs/Components","YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker"},"essentials":{"Flexbox":"/docs/Essentials/Flexbox/","Clipboard":"/docs/Essentials/Clipboard/","BoxModel":"/docs/Essentials/Boxmodel/","OData":"/docs/Essentials/OData/"},"advanced":{"Component-Basics":"/docs/Advanced/Component-Basics"},"themes":{"theme-scraper":"/docs/Yeet/Themes/ThemeScraper/","theme-editor":"/docs/Yeet/Themes/ThemeEditor/","theme-manager":"/docs/Yeet/Themes/ThemeManager/","themes":"/docs/Yeet/Themes/"},"events":{},"properties":{"Display":"/docs/Yeet/Properties/Display/","Meta":"/docs/Yeet/Properties/Meta/","Placement":"/docs/Yeet/Properties/Placement/","Size":"/docs/Yeet/Properties/Size/"},"property-types":{"Boolean-Property":"/docs/Advanced/Property-Types/booleanProperty/","Color-Property":"/docs/Advanced/Property-Types/colorProperty/","Column-Property":"/docs/Advanced/Property-Types/columnProperty","EventFunction-Property":"/docs/Advanced/Property-Types/eventFunctionProperty","Icon-Property":"/docs/Advanced/Property-Types/iconProperty/","List-Property":"/docs/Advanced/Property-Types/listProperty/","Number-Property":"/docs/Advanced/Property-Types/numberProperty/","OptionList-Property":"/docs/Advanced/Property-Types/optionListProperty","Range-Property":"docs/Advanced/Property-Types/rangeProperty","Shadow-Property":"/docs/Advanced/Property-Types/shadowProperty/","SourceLink-Property":"/docs/Advanced/Property-Types/sourceLinkProperty/","String-Property":"/docs/Advanced/Property-Types/stringProperty/","UnitNumber-Property":"/docs/Advanced/Property-Types/unitNumberProperty/","ValidatorList-Property":"/docs/Advanced/Property-Types/validatorListProperty"},"multi-properties":{"Alignment-Property":"/docs/Advanced/Multi-Properties/alignmentProperty","Border-Property":"/docs/Advanced/Multi-Properties/borderProperty","Element-Property":"/docs/Advanced/Multi-Properties/elementProperty","Font-Property":"/docs/Advanced/Multi-Properties/fontProperty","Sizing-Property":"/docs/Advanced/Multi-Properties/sizingProperty","Spacing-Property":"/docs/Advanced/Multi-Properties/spacingProperty"},"ui-designer":{"PB1n2":"/docs/Yeet/UI-Designer/Propertybar1n2","PB3":"/docs/Yeet/UI-Designer/Propertybar3","":"/docs/Yeet/UI-Designer"},"theme-manager":{"Theme-Editor":"/docs/Yeet/Theme-Manager/Theme-Editor/"},"Data":{"":"/docs/Yeet/Data/"},"User-Manager":{},"Settings":{},"Components":{"YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker","YPopup":"/docs/Components/YPopup","YQrCode":"/docs/Components/YQrCode"},"Navigations":{"Navigations":"/docs/Yeet/Frontend/Navigations/"}}')}}]);