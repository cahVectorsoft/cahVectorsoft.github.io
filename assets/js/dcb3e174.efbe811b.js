"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[5183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(y,o(o({ref:t},c),{},{components:n})):i.createElement(y,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9495:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294);const a=function(e){let{src:t,alt:n,boxShadow:a="2px 2px 5px var(--y-gray__7)",label:r="",size:o="auto",previewScale:l=.2}=e;const[s,p]=(0,i.useState)(!1),c=()=>{document.body.style.overflow=s?"visible":"hidden",p(!s)};return(0,i.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),i.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},i.createElement("img",{src:t,alt:n,style:{boxShadow:a,width:o,cursor:"pointer",objectFit:"contain",display:"block"},onClick:c}),r&&i.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},r),s&&i.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},i.createElement("img",{src:t,alt:n,style:{width:`calc(${o} * ${l})`,height:"auto",objectFit:"contain",display:"block"}}),i.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:c},"\xd7")))}},5410:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294);const a=function(e){let{src:t,boxShadow:n="2px 2px 5px var(--y-gray__7)",label:a="",size:r="40%"}=e;return i.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},i.createElement("video",{autoPlay:!0,muted:"muted",loop:!0,playsInline:!0,controls:!0,style:{boxShadow:n,width:r,objectFit:"contain",display:"block"}},i.createElement("source",{src:t,type:"video/mp4"})),a&&i.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},a))}},7297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(3117),a=(n(7294),n(3905)),r=n(9495),o=n(5410);const l={title:"Layout System",description:"A description of layouting inside the frontend",sidebar_position:2},s=void 0,p={unversionedId:"essentials/layout-system/layout-system",id:"essentials/layout-system/layout-system",title:"Layout System",description:"A description of layouting inside the frontend",source:"@site/docs/essentials/layout-system/layout-system.mdx",sourceDirName:"essentials/layout-system",slug:"/essentials/layout-system/",permalink:"/essentials/layout-system/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/essentials/layout-system/layout-system.mdx",tags:[],version:"current",lastUpdatedBy:"Yannic",sidebarPosition:2,frontMatter:{title:"Layout System",description:"A description of layouting inside the frontend",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Spacing",permalink:"/essentials/boxmodel/"},next:{title:"SourceLinks",permalink:"/essentials/source-links/"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Flex sizing in yeet",id:"flex-sizing-in-yeet",level:2},{value:"Main- and Cross-Axis-Alignment",id:"main--and-cross-axis-alignment",level:2},{value:"Flex-wrap",id:"flex-wrap",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Layout example",id:"layout-example",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The yeet layout system is based upon the Flexbox-System, but provides a miriyad of simplifications.\nThe main difference can be found in the way as to determine the size of objects.\nHowever the following still holds true:"),(0,a.kt)("p",null,"Items are arranged in Rows or Columns."),(0,a.kt)(r.Z,{alt:"Columns Rows",mdxType:"BasicImage"}),(0,a.kt)("p",null,"Items flex (expand) to fill additional space or shrink to fit into smaller spaces."),(0,a.kt)("p",null,"Every component in yeet is a flex item, additionally the yComponents yPage, yContainer and yPopup always serve as a flex container."),(0,a.kt)("h2",{id:"flex-sizing-in-yeet"},"Flex sizing in yeet"),(0,a.kt)("p",null,"The flex property value ",(0,a.kt)("inlineCode",{parentName:"p"},"(0,1,2,...)")," determines the size of the flex item within a flex-container, by putting it in relation to all its siblings.\nExample: There are 2 flex items within a container, their flex values being ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," respectively => the spacing ratio is ",(0,a.kt)("inlineCode",{parentName:"p"},"1:2"),"\n=> The first item will occupy ",(0,a.kt)("em",{parentName:"p"},"33%"),", the second item ",(0,a.kt)("em",{parentName:"p"},"66%")," of the available space. Additionally you can set it ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),", in this case the item is sized according to its width and height properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container.\nUsing the value ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," in conjunction with auto results in the component determining its size though its content once during the inital render."),(0,a.kt)(r.Z,{alt:"Flex Sizing",mdxType:"BasicImage"}),(0,a.kt)("p",null,"The css properties min-width/-height and max-width/-height can be used in conjunction\nwith the aforementioned flex property. Meaning the dynamic expanding and shrinking\nof a component is hard constrained within these two bounds."),(0,a.kt)(o.Z,{alt:"Min-Max Example",mdxType:"BasicVideo"}),(0,a.kt)("p",null,"This combination is the basis for providing a responsive multiplatform web application\n","[SEE LAYOUT EXAMPLE]","."),(0,a.kt)("h2",{id:"main--and-cross-axis-alignment"},"Main- and Cross-Axis-Alignment"),(0,a.kt)("p",null,"A main axis has to be defined in the flex-container through the flex direction property defaulting to column, the cross axis is always perpendicular to the main axis, in this case row."),(0,a.kt)("p",null,"Additionally each axis has an axis start and axis end part. The definition follows the standard western reading flow. Start being left/top while end is right/bottom, depending on the main axis.\nThis can be leveraged in either the justify-content(1) (main axis) or align-items(2) (cross axis) properties."),(0,a.kt)(r.Z,{alt:"PB1 Alignment screenshot reference point[1]",mdxType:"BasicImage"}),(0,a.kt)("p",null,"The following values are most commonly used in either property:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," flex-start"),(0,a.kt)("br",{parentName:"li"}),"(3) layout items from start to end"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," flex-end"),(0,a.kt)("br",{parentName:"li"}),"(4) layout items from end to start"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," center"),(0,a.kt)("br",{parentName:"li"}),"(5) layout items from the middle on outwards to either side"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," space-around"),(0,a.kt)("br",{parentName:"li"}),"(6) evenly distribute all items starting from the center, while giving each item the same amount of space around them, additionaly leaving some extra space between the outermost item and border of the parent container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," space-between"),(0,a.kt)("br",{parentName:"li"}),"(7) exact same as space-around, except removing the space between outermost item and parent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," space-evenly"),(0,a.kt)("br",{parentName:"li"}),"(8) items are distributed so that the spacing between any two items is equal.")),(0,a.kt)(r.Z,{alt:"Flex Sizing",mdxType:"BasicImage"}),(0,a.kt)("h2",{id:"flex-wrap"},"Flex-wrap"),(0,a.kt)("p",null,"The flex-wrap property specifies whether the flexible items should wrap or not."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," nowrap"),(0,a.kt)("br",{parentName:"li"}),"Default value. Specifies that the flexible items will not wrap"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," wrap"),(0,a.kt)("br",{parentName:"li"}),"Specifies that the flexible items will wrap if necessary")),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Flex containers can be nested. In this case the child container acts both as a flex item (size, alignment, order rules apply to this item)\nas well as a container (providing a seperate set of size, alignment and order rules for its children)"),(0,a.kt)("h2",{id:"layout-example"},"Layout example"),(0,a.kt)(r.Z,{alt:"Simple example layout",mdxType:"BasicImage"}),"@note Simple 2 sided registration form.",(0,a.kt)("p",null,"In order to create the above layout you'd follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add two yContainers into an other yContainer."),(0,a.kt)("li",{parentName:"ol"},"Change the flex direction of the sub-containers into ",(0,a.kt)("inlineCode",{parentName:"li"},"column")," and their justify-content value to ",(0,a.kt)("inlineCode",{parentName:"li"},"space-evenly"),"."),(0,a.kt)("li",{parentName:"ol"},"In the lefthand container: add a yInput for each required input field and change the label of each accordingly."),(0,a.kt)("li",{parentName:"ol"},"in the righthand container: add a yInput for each optional input field, as well as a yCheckbox for the newsletter registration.")))}u.isMDXComponent=!0}}]);