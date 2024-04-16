"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[268],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>y});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(o),y=n,u=m["".concat(d,".").concat(y)]||m[y]||c[y]||i;return o?r.createElement(u,a(a({ref:t},l),{},{components:o})):r.createElement(u,a({ref:t},l))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9495:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const n=function(e){let{src:t,alt:o,boxShadow:n="2px 2px 5px var(--y-gray__7)",label:i="",size:a="auto",previewScale:s=.2}=e;const[d,p]=(0,r.useState)(!1),l=()=>{document.body.style.overflow=d?"visible":"hidden",p(!d)};return(0,r.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),r.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},r.createElement("img",{src:t,alt:o,style:{boxShadow:n,width:a,cursor:"pointer",objectFit:"contain",display:"block"},onClick:l}),i&&r.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},i),d&&r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},r.createElement("img",{src:t,alt:o,style:{width:`calc(${a} * ${s})`,height:"auto",objectFit:"contain",display:"block"}}),r.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:l},"\xd7")))}},3152:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(7294),n=o(5999),i=o(7863);function a(e){var t;let{children:o,target:a,group:s="components",section:d="",linkName:p,className:l}=e,c=o;null==o&&(c=null==p?a:p);const m=(null==(t=i[s])?void 0:t[a])??"/error";return r.createElement("span",{className:l},r.createElement("a",{href:(0,n.I)({id:"lang.identifier",message:""})+m+(""!=d?"#":"")+d.toLowerCase()},c))}},9791:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var r=o(3117),n=(o(7294),o(3905)),i=o(3152),a=o(9495);const s=o.p+"assets/images/border_pb2-picker-f27381d6d9e121c635d1f98fead2fcaf.png",d=o.p+"assets/images/border_pb3-picker-519a324209b301520b316667ce461ca5.png",p=o.p+"assets/images/border_pb3-picker-dialog-374aa25e9c7535b7ad67251edabc9291.png",l={title:"Border",description:"All about Border related Properties",sidebar_position:3},c=void 0,m={unversionedId:"advanced/multi-properties/border-property/border-property",id:"advanced/multi-properties/border-property/border-property",title:"Border",description:"All about Border related Properties",source:"@site/docs/advanced/multi-properties/border-property/border-property.mdx",sourceDirName:"advanced/multi-properties/border-property",slug:"/advanced/multi-properties/border-property/",permalink:"/advanced/multi-properties/border-property/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/multi-properties/border-property/border-property.mdx",tags:[],version:"current",lastUpdatedBy:"Felix",sidebarPosition:3,frontMatter:{title:"Border",description:"All about Border related Properties",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Spacing",permalink:"/advanced/multi-properties/spacing-property/"},next:{title:"Alignment",permalink:"/advanced/multi-properties/alignment-property/"}},y={},u=[{value:"Description",id:"description",level:2},{value:"Border Color",id:"border-color",level:2},{value:"border-top-color",id:"border-top-color",level:5},{value:"border-right-color",id:"border-right-color",level:5},{value:"border-bottom-color",id:"border-bottom-color",level:5},{value:"border-left-color",id:"border-left-color",level:5},{value:"Border Style",id:"border-style",level:2},{value:"border-top-style",id:"border-top-style",level:5},{value:"border-right-style",id:"border-right-style",level:5},{value:"border-bottom-style",id:"border-bottom-style",level:5},{value:"border-left-style",id:"border-left-style",level:5},{value:"Border Width",id:"border-width",level:2},{value:"border-top-width",id:"border-top-width",level:5},{value:"border-right-width",id:"border-right-width",level:5},{value:"border-bottom-width",id:"border-bottom-width",level:5},{value:"border-left-width",id:"border-left-width",level:5},{value:"Border Radius",id:"border-radius",level:2},{value:"border-radius",id:"border-radius-1",level:5},{value:"Occurences",id:"occurences",level:2},{value:"Toolbar",id:"toolbar",level:3},{value:"Detail Panel",id:"detail-panel",level:3}],b={toc:u};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The border group can be found either in ",(0,n.kt)(i.Z,{target:"PB1n2",group:"ui-designer",linkName:"Toolbar",mdxType:"HotLink"})," (e.g. ",(0,n.kt)(i.Z,{target:"PB1n2",group:"ui-designer",linkName:"Border Picker",section:"Border",mdxType:"HotLink"}),") or ",(0,n.kt)(i.Z,{target:"PB3",group:"ui-designer",linkName:"Detail Panel",mdxType:"HotLink"}),".\nIt groups any border related property."),(0,n.kt)("h2",{id:"border-color"},"Border Color"),(0,n.kt)("h5",{id:"border-top-color"},"border-top-color"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"Color-Property",group:"property-types",linkName:"ColorProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The color of the top border. This can be set as a color from a palette or a custom hex color."),(0,n.kt)("h5",{id:"border-right-color"},"border-right-color"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"Color-Property",group:"property-types",linkName:"ColorProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The color of the right border. This can be set as a color from a palette or a custom hex color."),(0,n.kt)("h5",{id:"border-bottom-color"},"border-bottom-color"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"Color-Property",group:"property-types",linkName:"ColorProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The color of the bottom border. This can be set as a color from a palette or a custom hex color."),(0,n.kt)("h5",{id:"border-left-color"},"border-left-color"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"Color-Property",group:"property-types",linkName:"ColorProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The color of the left border. This can be set as a color from a palette or a custom hex color."),(0,n.kt)("h2",{id:"border-style"},"Border Style"),(0,n.kt)("h5",{id:"border-top-style"},"border-top-style"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"List-Property",group:"property-types",linkName:"ListProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The style of the top border. This can be set to:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"solid")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dashed")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dotted")," ",(0,n.kt)("inlineCode",{parentName:"p"},"none")),(0,n.kt)("h5",{id:"border-right-style"},"border-right-style"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"List-Property",group:"property-types",linkName:"ListProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The style of the right border. This can be set to:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"solid")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dashed")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dotted")," ",(0,n.kt)("inlineCode",{parentName:"p"},"none")),(0,n.kt)("h5",{id:"border-bottom-style"},"border-bottom-style"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"List-Property",group:"property-types",linkName:"ListProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The style of the bottom border. This can be set to:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"solid")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dashed")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dotted")," ",(0,n.kt)("inlineCode",{parentName:"p"},"none")),(0,n.kt)("h5",{id:"border-left-style"},"border-left-style"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"List-Property",group:"property-types",linkName:"ListProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The style of the left border. This can be set to:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"solid")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dashed")," ",(0,n.kt)("inlineCode",{parentName:"p"},"dotted")," ",(0,n.kt)("inlineCode",{parentName:"p"},"none")),(0,n.kt)("h2",{id:"border-width"},"Border Width"),(0,n.kt)("h5",{id:"border-top-width"},"border-top-width"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"UnitNumber-Property",group:"property-types",linkName:"UnitNumberProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The width of the top border in ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/css_units.php"},(0,n.kt)("inlineCode",{parentName:"a"},"px")),"."),(0,n.kt)("h5",{id:"border-right-width"},"border-right-width"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"UnitNumber-Property",group:"property-types",linkName:"UnitNumberProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The width of the right border in ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/css_units.php"},(0,n.kt)("inlineCode",{parentName:"a"},"px")),"."),(0,n.kt)("h5",{id:"border-bottom-width"},"border-bottom-width"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"UnitNumber-Property",group:"property-types",linkName:"UnitNumberProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The width of the bottom border in ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/css_units.php"},(0,n.kt)("inlineCode",{parentName:"a"},"px")),"."),(0,n.kt)("h5",{id:"border-left-width"},"border-left-width"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"UnitNumber-Property",group:"property-types",linkName:"UnitNumberProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The width of the left border in ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/css_units.php"},(0,n.kt)("inlineCode",{parentName:"a"},"px")),"."),(0,n.kt)("h2",{id:"border-radius"},"Border Radius"),(0,n.kt)("h5",{id:"border-radius-1"},"border-radius"),(0,n.kt)("p",{className:"meta-information"},(0,n.kt)(i.Z,{target:"UnitNumber-Property",group:"property-types",linkName:"UnitNumberProperty",mdxType:"HotLink"})),(0,n.kt)("p",null,"The border radius defines radius of the corners of all the borders. This can be set in ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/css_units.php"},(0,n.kt)("inlineCode",{parentName:"a"},"%")," or ",(0,n.kt)("inlineCode",{parentName:"a"},"px")),"."),(0,n.kt)("p",null,"Setting the border radius in percentage can help if you, for example, want to create a circle. In this case you could set each border radius to 50 % while setting width and height of the component to the same value."),(0,n.kt)("h2",{id:"occurences"},"Occurences"),(0,n.kt)("h3",{id:"toolbar"},"Toolbar"),(0,n.kt)("p",null,"Here you can adjust common border related properties related to an state. It basically depicts a simplified version of the related picker inside ",(0,n.kt)(i.Z,{target:"PB3",group:"ui-designer",linkName:"Detail Panel",mdxType:"HotLink"}),"."),(0,n.kt)(a.Z,{src:s,alt:"BorderPb2Picker",boxShadow:"none",mdxType:"BasicImage"}),(0,n.kt)("p",null,"Besides adjusting the common styling, choosing the color is special. A ",(0,n.kt)(i.Z,{target:"PB2",group:"ui-designer",section:"color-picker",linkName:"Color Picker",mdxType:"HotLink"})," is included in the process and allows choosing colors based on the active SubTheme or from basic colors."),(0,n.kt)("h3",{id:"detail-panel"},"Detail Panel"),(0,n.kt)("p",null,"Inside the Detail Panel a picker for adjusting any border related properties can be found, which extends the possibilites of it's relative in Toolbar."),(0,n.kt)(a.Z,{src:d,alt:"BorderPb3Picker",mdxType:"BasicImage"}),(0,n.kt)("p",null,"In comparison to it's relative picker inside Toolbar, this picker differs. Here, the border must be toggled to be changeable. This allows to easily turn off the border, if no border is needed.",(0,n.kt)("br",{parentName:"p"}),"\n","The depiction on the left side of the picker symbolizes the component itself. By clicking on the edges, you can select and deselect the border for hiding single borders."),(0,n.kt)("p",null,"The big difference in this picker is that you can adjust every border individually to fit your expectations and style guide. This means, that the top border can differ from it's equivalent on the bottom. To achieve similar results, you can toggle a dialog on the right side of the picker, by clicking on the three dots."),(0,n.kt)(a.Z,{src:p,alt:"BorderPb3PickerDialog",mdxType:"BasicImage"}),(0,n.kt)("p",null,"Inside the dialog you can adjust any styling related property for every single border indivually and achieve a result of your liking. In comparison to the color picker inside the Borderbar you can also choose custom colors."))}h.isMDXComponent=!0},7863:e=>{e.exports=JSON.parse('{"components":{"":"/docs/Components","YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker"},"essentials":{"Flexbox":"/docs/Essentials/Flexbox/","Clipboard":"/docs/Essentials/Clipboard/","BoxModel":"/docs/Essentials/Boxmodel/","OData":"/docs/Essentials/OData/"},"advanced":{"Component-Basics":"/docs/Advanced/Component-Basics"},"themes":{"theme-scraper":"/docs/Yeet/Themes/ThemeScraper/","theme-editor":"/docs/Yeet/Themes/ThemeEditor/","theme-manager":"/docs/Yeet/Themes/ThemeManager/","themes":"/docs/Yeet/Themes/"},"events":{},"properties":{"Display":"/docs/Yeet/Properties/Display/","Meta":"/docs/Yeet/Properties/Meta/","Placement":"/docs/Yeet/Properties/Placement/","Size":"/docs/Yeet/Properties/Size/"},"property-types":{"Boolean-Property":"/docs/Advanced/Property-Types/booleanProperty/","Color-Property":"/docs/Advanced/Property-Types/colorProperty/","Column-Property":"/docs/Advanced/Property-Types/columnProperty","EventFunction-Property":"/docs/Advanced/Property-Types/eventFunctionProperty","Icon-Property":"/docs/Advanced/Property-Types/iconProperty/","List-Property":"/docs/Advanced/Property-Types/listProperty/","Number-Property":"/docs/Advanced/Property-Types/numberProperty/","OptionList-Property":"/docs/Advanced/Property-Types/optionListProperty","Range-Property":"docs/Advanced/Property-Types/rangeProperty","Shadow-Property":"/docs/Advanced/Property-Types/shadowProperty/","SourceLink-Property":"/docs/Advanced/Property-Types/sourceLinkProperty/","String-Property":"/docs/Advanced/Property-Types/stringProperty/","UnitNumber-Property":"/docs/Advanced/Property-Types/unitNumberProperty/","ValidatorList-Property":"/docs/Advanced/Property-Types/validatorListProperty"},"multi-properties":{"Alignment-Property":"/docs/Advanced/Multi-Properties/alignmentProperty","Border-Property":"/docs/Advanced/Multi-Properties/borderProperty","Element-Property":"/docs/Advanced/Multi-Properties/elementProperty","Font-Property":"/docs/Advanced/Multi-Properties/fontProperty","Sizing-Property":"/docs/Advanced/Multi-Properties/sizingProperty","Spacing-Property":"/docs/Advanced/Multi-Properties/spacingProperty"},"ui-designer":{"PB1n2":"/docs/Yeet/UI-Designer/Propertybar1n2","PB3":"/docs/Yeet/UI-Designer/Propertybar3","":"/docs/Yeet/UI-Designer"},"theme-manager":{"Theme-Editor":"/docs/Yeet/Theme-Manager/Theme-Editor/"},"Data":{"":"/docs/Yeet/Data/"},"User-Manager":{},"Settings":{},"Components":{"YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker","YPopup":"/docs/Components/YPopup","YQrCode":"/docs/Components/YQrCode"},"Navigations":{"Navigations":"/docs/Yeet/Frontend/Navigations/"}}')}}]);