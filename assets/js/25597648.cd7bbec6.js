"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[2624],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(o),u=n,y=m["".concat(c,".").concat(u)]||m[u]||l[u]||s;return o?r.createElement(y,a(a({ref:t},d),{},{components:o})):r.createElement(y,a({ref:t},d))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9495:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const n=function(e){let{src:t,alt:o,boxShadow:n="2px 2px 5px var(--y-gray__7)",label:s="",size:a="auto",previewScale:i=.2}=e;const[c,p]=(0,r.useState)(!1),d=()=>{document.body.style.overflow=c?"visible":"hidden",p(!c)};return(0,r.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),r.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},r.createElement("img",{src:t,alt:o,style:{boxShadow:n,width:a,cursor:"pointer",objectFit:"contain",display:"block"},onClick:d}),s&&r.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},s),c&&r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},r.createElement("img",{src:t,alt:o,style:{width:`calc(${a} * ${i})`,height:"auto",objectFit:"contain",display:"block"}}),r.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:d},"\xd7")))}},3152:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(7294),n=o(5999),s=o(7863);function a(e){var t;let{children:o,target:a,group:i="components",section:c="",linkName:p,className:d}=e,l=o;null==o&&(l=null==p?a:p);const m=(null==(t=s[i])?void 0:t[a])??"/error";return r.createElement("span",{className:d},r.createElement("a",{href:(0,n.I)({id:"lang.identifier",message:""})+m+(""!=c?"#":"")+c.toLowerCase()},l))}},8526:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var r=o(3117),n=(o(7294),o(3905)),s=o(9495),a=o(3152);const i=o.p+"assets/images/themes_scraper-7cf46d8914b232604c02cd2222346aa4.png",c=o.p+"assets/images/themes_scraper-core-tokens-808586a3ab32f35371abf5aa9c5ece56.png",p=o.p+"assets/images/themes_scraper-paletts-da2a3f70036ea8eb7303f6da0f779157.png",d={title:"Theme Scraper",sidebar_position:3},l="Theme Scraper",m={unversionedId:"yeet/themes/theme-scraper/theme-scraper",id:"yeet/themes/theme-scraper/theme-scraper",title:"Theme Scraper",description:"Description",source:"@site/docs/yeet/themes/theme-scraper/theme-scraper.mdx",sourceDirName:"yeet/themes/theme-scraper",slug:"/yeet/themes/theme-scraper/",permalink:"/yeet/themes/theme-scraper/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yeet/themes/theme-scraper/theme-scraper.mdx",tags:[],version:"current",lastUpdatedBy:"Wegener",sidebarPosition:3,frontMatter:{title:"Theme Scraper",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Theme Editor",permalink:"/yeet/themes/theme-editor/"},next:{title:"Projects",permalink:"/yeet/projects/"}},u={},y=[{value:"Description",id:"description",level:2},{value:"Functionality",id:"functionality",level:2}],h={toc:y};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"theme-scraper"},"Theme Scraper"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The so-called Theme Scraper serves as a utility tool to quickly and easily adopt the ",(0,n.kt)("em",{parentName:"p"},"corporate design")," of one's company website, extracting the relevant colors and images."),(0,n.kt)("h2",{id:"functionality"},"Functionality"),(0,n.kt)("p",null,"To do this, the tool simply requires a valid ",(0,n.kt)("strong",{parentName:"p"},"URL")," or an ",(0,n.kt)("strong",{parentName:"p"},"image")," to be provided, and the scraper analyzes what is presented to it."),(0,n.kt)(s.Z,{src:i,alt:"ThemesScraper",border:"none",size:"50%",previewScale:"0.6",mdxType:"BasicImage"}),(0,n.kt)(s.Z,{src:p,alt:"ThemesScraperCorePaletts",border:"none",size:"50%",previewScale:"0.6",mdxType:"BasicImage"}),(0,n.kt)("p",null,"The outcome is the creation of a palette and the distribution of color references across the ",(0,n.kt)(a.Z,{target:"theme-editor",group:"themes",section:"CoreTokens",linkName:"CoreTokens",mdxType:"HotLink"}),"."),(0,n.kt)(s.Z,{src:c,alt:"ThemesScraperCoreTokens",border:"none",size:"50%",previewScale:"0.6",mdxType:"BasicImage"}),(0,n.kt)("p",null,"However, before the results are adopted, influence can be exerted on the outcome, and possible adjustments can be made."),(0,n.kt)("p",null,"Only when satisfaction with the distribution is achieved can the result be adopted and incorporated into the current ",(0,n.kt)(a.Z,{target:"themes",group:"themes",section:"SubTheme",linkName:"SubTheme",mdxType:"HotLink"}),"."),(0,n.kt)("p",null,"It's important to understand the system's two-tier nature. The process begins with the adoption of a palette creation. Once this is done, certain CoreTokens can additionally be overwritten."),(0,n.kt)("p",null,"This affects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"background")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"surface")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"primary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"secondary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"neutral")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"text"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This also implies that tokens for the statuses ",(0,n.kt)("strong",{parentName:"p"},"success"),", ",(0,n.kt)("strong",{parentName:"p"},"error"),", ",(0,n.kt)("strong",{parentName:"p"},"info"),", and ",(0,n.kt)("strong",{parentName:"p"},"warning")," are not overwritten.")))}g.isMDXComponent=!0},7863:e=>{e.exports=JSON.parse('{"components":{"":"/docs/Components","YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker"},"essentials":{"Flexbox":"/docs/Essentials/Flexbox/","Clipboard":"/docs/Essentials/Clipboard/","BoxModel":"/docs/Essentials/Boxmodel/","OData":"/docs/Essentials/OData/"},"advanced":{"Component-Basics":"/docs/Advanced/Component-Basics"},"themes":{"theme-scraper":"/docs/Yeet/Themes/ThemeScraper/","theme-editor":"/docs/Yeet/Themes/ThemeEditor/","theme-manager":"/docs/Yeet/Themes/ThemeManager/","themes":"/docs/Yeet/Themes/"},"events":{},"properties":{"Display":"/docs/Yeet/Properties/Display/","Meta":"/docs/Yeet/Properties/Meta/","Placement":"/docs/Yeet/Properties/Placement/","Size":"/docs/Yeet/Properties/Size/"},"property-types":{"Boolean-Property":"/docs/Advanced/Property-Types/booleanProperty/","Color-Property":"/docs/Advanced/Property-Types/colorProperty/","Column-Property":"/docs/Advanced/Property-Types/columnProperty","EventFunction-Property":"/docs/Advanced/Property-Types/eventFunctionProperty","Icon-Property":"/docs/Advanced/Property-Types/iconProperty/","List-Property":"/docs/Advanced/Property-Types/listProperty/","Number-Property":"/docs/Advanced/Property-Types/numberProperty/","OptionList-Property":"/docs/Advanced/Property-Types/optionListProperty","Range-Property":"docs/Advanced/Property-Types/rangeProperty","Shadow-Property":"/docs/Advanced/Property-Types/shadowProperty/","SourceLink-Property":"/docs/Advanced/Property-Types/sourceLinkProperty/","String-Property":"/docs/Advanced/Property-Types/stringProperty/","UnitNumber-Property":"/docs/Advanced/Property-Types/unitNumberProperty/","ValidatorList-Property":"/docs/Advanced/Property-Types/validatorListProperty"},"multi-properties":{"Alignment-Property":"/docs/Advanced/Multi-Properties/alignmentProperty","Border-Property":"/docs/Advanced/Multi-Properties/borderProperty","Element-Property":"/docs/Advanced/Multi-Properties/elementProperty","Font-Property":"/docs/Advanced/Multi-Properties/fontProperty","Sizing-Property":"/docs/Advanced/Multi-Properties/sizingProperty","Spacing-Property":"/docs/Advanced/Multi-Properties/spacingProperty"},"ui-designer":{"PB1n2":"/docs/Yeet/UI-Designer/Propertybar1n2","PB3":"/docs/Yeet/UI-Designer/Propertybar3","":"/docs/Yeet/UI-Designer"},"theme-manager":{"Theme-Editor":"/docs/Yeet/Theme-Manager/Theme-Editor/"},"Data":{"":"/docs/Yeet/Data/"},"User-Manager":{},"Settings":{},"Components":{"YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker","YPopup":"/docs/Components/YPopup","YQrCode":"/docs/Components/YQrCode"},"Navigations":{"Navigations":"/docs/Yeet/Frontend/Navigations/"}}')}}]);