"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[4869],{2443:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);function r(e){let{variable:t}=e;return n.createElement("span",null,t)}},8567:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294),r=o(3754);function a(e){let{category:t,group:o,property:a,value:s}=e;return n.createElement("div",{className:"blueprint-element"},n.createElement("span",{className:"blueprint-element__category"},t),n.createElement(r.Z,{className:"blueprint-element__arrow"},"arrow_forward_ios"),n.createElement("span",{className:"blueprint-element__group"},o),n.createElement(r.Z,{className:"blueprint-element__arrow"},"arrow_forward_ios"),n.createElement("span",{className:"blueprint-element__property"},a),n.createElement("span",{className:"blueprint-element__value"},s))}},4653:(e,t,o)=>{o(7294)},3152:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(7294),r=o(5999),a=o(7863);function s(e){let{children:t,target:o,group:s="components",section:i="",linkName:l}=e,p=t;return null==t&&(p=null==l?o:l),n.createElement("span",null,n.createElement("a",{href:(0,r.I)({id:"lang.identifier",message:""})+a[s][o]+(""!=i?"#":"")+i.toLowerCase()},p))}},3100:(e,t,o)=>{o.d(t,{Z:()=>C});var n=o(7294),r=o(6337),a=o(9595),s=o(5999),i=o(4866),l=o(5162);function p(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}const d={n:"normal",h:"hover",a:"active",f:"focus",e:"error",r:"readonly",d:"disabled"};function c(e){let t="";if(null!=e)switch(e){case"String":t="../../Main Concepts/Property-Types/stringProperty/";break;case"Number":t="../../Main Concepts/Property-Types/numberProperty/";break;case"Boolean":t="../../Main Concepts/Property-Types/booleanProperty/";break;case"List":t="../../Main Concepts/Property-Types/listProperty/";break;case"UnitNumber":t="../../Main Concepts/Property-Types/unitNumberProperty/"}return t}function m(e){let{children:t,name:o,component:r,type:a,status:s="",editable:i,injectable:l,linkBase:m=!1}=e;return n.createElement("div",{className:"property-element"},n.createElement("div",{className:"property-element__header"},n.createElement("div",{className:"header__name-type"},n.createElement("div",{className:"name-type__name"},"Name: ",m?n.createElement("a",{href:"../../Main Concepts/Component-Basics#"+o.toLowerCase()},o):n.createElement("span",null,o)),n.createElement("div",{className:"name-type__type"},i?null:n.createElement("div",{className:"type__editable"},n.createElement("a",null,"Not Editable")),l?n.createElement("div",{className:"type__injectable"},n.createElement("a",null,"Injectable")):null,n.createElement("div",{className:"type__property"},n.createElement("a",{href:c(a)},a+" Property")))),n.createElement("div",{className:"header__token"},"--"+p(r)+"__"+p(o),function(e,t,o){let r=[];if(null!=e)for(let a=0;a<e.length;a++)r.push(n.createElement("div",{className:"property-element__status",key:"status__"+a},"--"+p(o)+"__"+p(t)+"__"+d[e[a]]));return r}(s,o,r))),n.createElement("div",{className:"property-element__description"},t))}var h=o(7863),u=o(6486),b=o.n(u);const g=[">CAMELCOMP<",">KEBABCOMP<",">COMP<",">LINK<"],y={generic:["meta","display","size","placement"],style:["background","border","shadow","opacity"]};function P(e,t,o,d){let c=b().cloneDeep(o),u=b().cloneDeep(t);console.log("base:",o),console.log("comp:",t),b().merge(c,u);let P=[],C=[];return Object.entries(c).forEach((t=>{let[i,c]=t,u=i;"component"===i&&(u=e.substring(1));let b=[];Object.entries(c).forEach((t=>{let[l,c]=t,u=[];Object.entries(c).forEach((t=>{let[c,b]=t,y="";b.description?y=b.description:d&&d[i]&&d[i][l]&&d[i][l][c]&&(y=d[i][l][c]),g.some((e=>y.includes(e)))&&(y=y.replace(">CAMELCOMP<",e),y=y.replace(">KEBABCOMP<",p(e).substring(1)),y=y.replace(">COMP<",e.substring(1)),y=y.replace(/>LINK<(.+?):(.+?)\.(.+?)#(.+?)!/g,(function(e,t,o,n,r){return`<a href="..\..\${(0,s.I)({id:"lang.identifier",message:""})+h[o][n]+("-"!=r?"#"+r.toLowerCase():"")}">${t}</a>`})));let P=!1;o&&o[i]&&o[i][l]&&o[i][l][c]&&(P=!0),u.push(n.createElement(m,{name:c,component:e,type:b.type,status:b.status,editable:b.editable,injectable:b.injectible,key:"property-element__"+c,linkBase:P},n.createElement(r.D,{allowDangerousHtml:!0,rehypePlugins:[a.Z],children:y})))}));let P="";y&&y[i]&&y[i].includes(l)&&"YBase"!=e&&(P=(0,s.I)({id:"lang.identifier",message:""})+"/docs/Main%20Concepts/Component-Basics/"),P+="#"+i.toLowerCase()+"--"+l.toLowerCase(),b.push(n.createElement("details",{className:"body__expansion",key:"expansion-container__"+l},n.createElement("summary",{className:"expansion__name"},l.toUpperCase(),n.createElement("a",{href:P,className:"name__read-more"},"read more")),u))})),C.push(n.createElement(l.Z,{className:"category-tabs__body",value:u,label:u[0].toUpperCase()+u.substring(1),key:"tab-container__"+u},b))})),P.push(n.createElement(i.Z,{className:"category-tabs",key:"tabs__"+e},C)),P}function C(e){let{component:t,componentProperties:o,baseProperties:r,descriptions:a=null}=e;return n.createElement("div",{className:"property-display"},P(t,o,r,a))}},2910:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(3117),r=(o(7294),o(3905));o(4866),o(5162),o(3100),o(3152),o(2443),o(8567),o(4653);const a={},s=void 0,i={unversionedId:"Main Concepts/Boxmodel/Boxmodel",id:"Main Concepts/Boxmodel/Boxmodel",title:"Boxmodel",description:"Boxmodel",source:"@site/docs/Main Concepts/Boxmodel/Boxmodel.mdx",sourceDirName:"Main Concepts/Boxmodel",slug:"/Main Concepts/Boxmodel/",permalink:"/docs/Main Concepts/Boxmodel/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Main Concepts/Boxmodel/Boxmodel.mdx",tags:[],version:"current",lastUpdatedBy:"AHL",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unit Number Property",permalink:"/docs/Main Concepts/Property-Types/unitNumberProperty/"},next:{title:"Component-Basics",permalink:"/docs/Main Concepts/Component-Basics/"}},l={},p=[{value:"Boxmodel",id:"boxmodel",level:2},{value:"Analogy / Example",id:"analogy--example",level:2},{value:"Content",id:"content",level:3},{value:"Margin",id:"margin",level:3},{value:"Padding",id:"padding",level:3},{value:"Border",id:"border",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"boxmodel"},"Boxmodel"),(0,r.kt)("p",null,"In order to fully utilize the margin- / padding- (and border-) properties you need to understand the CSS-BoxModel.\nThe box model describes the structure of a component.\nIt consists of 4 key parts: Content, Padding, Border and Margin."),(0,r.kt)("h2",{id:"analogy--example"},"Analogy / Example"),(0,r.kt)("p",null,"If you think of your component as a car, the margin / padding and border correspond to the following attributes:"),(0,r.kt)("p",null,"Border: The physical borders of your car, drawing the line between what is th car and what isn't, i.e your doors or windows."),(0,r.kt)("p",null,"Margin: The safety disatnce, the minimum distance which has to be maintained between each component at all times."),(0,r.kt)("p",null,"Padding: The distance between the driver (content) and your doors or windows (border)."),(0,r.kt)("h3",{id:"content"},"Content"),(0,r.kt)("p",null,"The content of the component includes but is not limited to: text, images, other media and other components."),(0,r.kt)("h1",{id:"placeholder-remove-before-publish"},"PLACEHOLDER REMOVE BEFORE PUBLISH"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BoxModel",src:o(9425).Z,width:"970",height:"770"})),(0,r.kt)("h3",{id:"margin"},"Margin"),(0,r.kt)("p",null,"The margin is the minimum distance between the component border and the next component border."),(0,r.kt)("p",null,"The margin can either be set individually or for each direction (top, bottom, left, right) by adding the corresponding suffix (i.e. margin-bottom instead of margin)."),(0,r.kt)("h1",{id:"placeholder-remove-before-publish-1"},"PLACEHOLDER REMOVE BEFORE PUBLISH"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Margin",src:o(3725).Z,width:"475",height:"118"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Margins stack i.e having two components both with a margin of 30 px results in a distance of 60 px between the components.")),(0,r.kt)("h3",{id:"padding"},"Padding"),(0,r.kt)("p",null,"The padding defines the distance between component border and component content."),(0,r.kt)("p",null,"The padding can either be set individually or for each direction (top, bottom, left, right) by adding the corresponding suffix (i.e. padding-bottom instead of padding)."),(0,r.kt)("h1",{id:"placeholder-remove-before-publish-2"},"PLACEHOLDEr REMOVE BEFORE PUBLISH"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Padding",src:o(2577).Z,width:"1074",height:"900"})),(0,r.kt)("h3",{id:"border"},"Border"),(0,r.kt)("p",null,"The border defines the style of the component border. The property consists of 4 subproperties."),(0,r.kt)("p",null,"Border-style, border-width, border-color and border-radius."),(0,r.kt)("p",null,"All border-properties, except radius, can either be set individually or for each direction (top, bottom, left, right) by adding the corresponding suffix (i.e. border-bottom-style instead of border-style)."),(0,r.kt)("h1",{id:"placeholder-remove-before-publish-3"},"PLACEHOLDEr REMOVE BEFORE PUBLISH"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Border",src:o(7516).Z,width:"970",height:"900"})))}c.isMDXComponent=!0},7516:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/css_border_placehholder-6ce07d2bd127b161bf14549ba131f2e6.png"},9425:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/css_boxmode_placeholder-bc49963d09ea4fe07ab55c4db6c75f65.png"},3725:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2577:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/css_padding_placeholder-a6928c0ba0b61135884035384b543f00.png"},7863:e=>{e.exports=JSON.parse('{"components":{"":"/docs/Components","YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker"},"main-concepts":{"Flexbox":"/docs/Main Concepts/Flexbox/","Clipboard":"/docs/Main Concepts/Clipboard/","BoxModel":"/docs/Main Concepts/Boxmodel/","Component-Basics":"/docs/Main Concepts/Component-Basics"},"events":{},"properties":{"Display":"/docs/Yeet/Properties/Display/","Meta":"/docs/Yeet/Properties/Meta/","Placement":"/docs/Yeet/Properties/Placement/","Size":"/docs/Yeet/Properties/Size/"},"property-types":{"String-Property":"/docs/Main Concepts/Property-Types/stringProperty/","Number-Property":"/docs/Main Concepts/Property-Types/numberProperty/","Boolean-Property":"/docs/Main Concepts/Property-Types/booleanProperty/","UnitNumber-Property":"/docs/Main Concepts/Property-Types/unitNumberProperty/","SourceLink-Property":"/docs/Main Concepts/Property-Types/sourceLinkProperty/","Shadow-Property":"/docs/Main Concepts/Property-Types/shadowProperty/","List-Property":"/docs/Main Concepts/Property-Types/listProperty/","Icon-Property":"/docs/Main Concepts/Property-Types/iconProperty/","Color-Property":"/docs/Main Concepts/Property-Types/colorProperty/"},"ui-designer":{"PB1n2":"/docs/Yeet/UI-Designer/Propertybar1n2","PB3":"/docs/Yeet/UI-Designer/Propertybar3","":"/docs/Yeet/UI-Designer"},"theme-manager":{"Theme-Editor":"/docs/Yeet/Theme-Manager/Theme-Editor/"},"Entity-Manager":{},"User-Manager":{},"Settings":{},"Components":{"YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker","YPopup":"/docs/Components/YPopup"}}')}}]);