"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[9337],{3905:(e,t,o)=>{o.d(t,{Zo:()=>A,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},A=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,A=a(e,["components","mdxType","originalType","parentName"]),g=c(o),d=r,u=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return o?n.createElement(u,s(s({ref:t},A),{},{components:o})):n.createElement(u,s({ref:t},A))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},9495:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);const r=function(e){let{src:t,alt:o,boxShadow:r="2px 2px 5px var(--y-gray__7)",label:i="",size:s="auto",previewScale:a=.2}=e;const[l,c]=(0,n.useState)(!1),A=()=>{document.body.style.overflow=l?"visible":"hidden",c(!l)};return(0,n.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),n.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},n.createElement("img",{src:t,alt:o,style:{boxShadow:r,width:s,cursor:"pointer",objectFit:"contain",display:"block"},onClick:A}),i&&n.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},i),l&&n.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},n.createElement("img",{src:t,alt:o,style:{width:`calc(${s} * ${a})`,height:"auto",objectFit:"contain",display:"block"}}),n.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:A},"\xd7")))}},48:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294);const r=function(e){let{images:t,boxShadow:o="2px 2px 5px var(--y-gray__7)",label:r="",size:i="auto",previewScale:s=.2}=e;const[a,l]=(0,n.useState)(!1),[c,A]=(0,n.useState)(null),p={fontStyle:"italic",marginTop:"8px"},g=function(e){void 0===e&&(e=null);document.body.style.overflow=a?"visible":"hidden",l(!a),A(e)};return(0,n.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),n.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",margin:"25px"}},t.map(((e,t)=>n.createElement("div",{key:t},n.createElement("img",{src:e.src,alt:e.alt,style:{boxShadow:o,width:i,cursor:"pointer",objectFit:"contain",display:"block",margin:"5px 0"},onClick:()=>g(e)}),r&&n.createElement("div",{style:p},r)))),a&&c&&n.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},n.createElement("img",{src:c.src,alt:c.alt,style:{width:`calc(${i} * ${s})`,height:"auto",objectFit:"contain",display:"block"}}),n.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:()=>g()},"\xd7")))}},810:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>A,metadata:()=>g,toc:()=>u});var n=o(3117),r=(o(7294),o(3905)),i=(o(9495),o(48));const s=o.p+"assets/images/access-control_login-yeet-ec854818454502f791932e16e98e69bc.png",a=o.p+"assets/images/access-control_login-yeet-admin-0e0c80661fdce0edaad121bd4e9486d1.png",l=o.p+"assets/images/access-control_login-app-7e81aa3c1e006af2e79c00d30e3c423b.png",c=o.p+"assets/images/access-control_login-app-admin-8fcf250d868075a0a866346b7824088f.png",A={title:"Access Control",sidebar_position:6},p=void 0,g={unversionedId:"yeet/access-control/access-control",id:"yeet/access-control/access-control",title:"Access Control",description:"--\x3e",source:"@site/docs/yeet/access-control/access-control.mdx",sourceDirName:"yeet/access-control",slug:"/yeet/access-control/",permalink:"/yeet/access-control/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yeet/access-control/access-control.mdx",tags:[],version:"current",lastUpdatedBy:"Carl Ahrens",sidebarPosition:6,frontMatter:{title:"Access Control",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CSV Export",permalink:"/yeet/data/csv-export/"},next:{title:"Roles",permalink:"/yeet/access-control/roles/"}},d={},u=[{value:"Managing Users and Roles",id:"managing-users-and-roles",level:2},{value:"Two Types of Sign-In",id:"two-types-of-sign-in",level:2},{value:"Users",id:"users",level:2},{value:"Roles",id:"roles",level:2}],m={toc:u};function y(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Access Control is divided into two main functionalities: managing users and roles within your application, and managing access for developers within the yeet platform. This dual functionality ensures both operational security for your application and organizational control for your development team."),(0,r.kt)("h2",{id:"managing-users-and-roles"},"Managing Users and Roles"),(0,r.kt)("p",null,"Access Control enables you to create and manage roles, defining the scope of permissions for various users within your application. These roles range from admin positions with comprehensive access to more restricted roles for end-users, ensuring a clear structure of permissions and access. By assigning users to specific roles, you tailor their experience and access rights within the application, enhancing both security and user experience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create and Manage Roles"),(0,r.kt)("br",{parentName:"li"}),"Define roles with specific permissions tailored to the needs of your application and team."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assign Users to Roles"),(0,r.kt)("br",{parentName:"li"}),"Allocate roles to application users and developers, streamlining access control based on their responsibilities.")),(0,r.kt)("h2",{id:"two-types-of-sign-in"},"Two Types of Sign-In"),(0,r.kt)("p",null,"Access Control supports two different types of sign-in methods to cater to both users of your application and developers on the yeet platform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application User Sign-In"),(0,r.kt)("br",{parentName:"li"}),"This sign-in method is designed for users of your application. It allows them to access and interact with the app according to the permissions set by their assigned role. This is crucial for operational security and user experience, ensuring users can only access what they are authorized to.")),(0,r.kt)(i.Z,{images:[{src:l,alt:"accessControlLoginApp"},{src:c,alt:"accessControlLoginAppAdmin"}],border:"none",size:"80%",mdxType:"MultiImage"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer Sign-In"),(0,r.kt)("br",{parentName:"li"}),"This method is reserved for developers working within the yeet platform. It provides access to development tools, resources, and the ability to manage the application's backend, including user and role management. Developer sign-in ensures that only authorized personnel can make changes to the application, protecting the integrity of your project.")),(0,r.kt)(i.Z,{images:[{src:s,alt:"accessControlLogin"},{src:a,alt:"accessControlLoginAdmin"}],border:"none",size:"80%",mdxType:"MultiImage"}),(0,r.kt)("h2",{id:"users"},"Users"),(0,r.kt)("p",null,"The Users section allows for the creation and management of user accounts within your application. Here, you can add new users, edit existing user details, and assign roles to each user. Assigning roles is a vital part of user management, as it determines the access level and permissions each user has within your application. Detailed explanations and instructions for managing users can be found on the dedicated Users page of our documentation."),(0,r.kt)(i.Z,{images:[{src:"data:image/png;base64,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",alt:"accessControlUser"}],border:"none",size:"80%",mdxType:"MultiImage"}),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"In the Roles section, you have the ability to define and customize roles, which are essentially collections of permissions. Roles enable you to specify default rights for a certain type of access and to configure specific rights for particular types of data or functions. By defining roles, you can easily control what actions users can perform, which parts of the application they can access, and what data they can view or modify. Each role can be tailored to fit the needs of different user groups within your application, from administrators with full access to specific roles with limited permissions aimed at standard users or external collaborators. For more detailed information on creating and managing roles, along with setting up rights and permissions, please refer to the dedicated Roles page in our documentation.\nIntegrating Users and Roles"),(0,r.kt)(i.Z,{images:[{src:"data:image/png;base64,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",alt:"accessControlRole"}],border:"none",size:"80%",mdxType:"MultiImage"}))}y.isMDXComponent=!0}}]);