"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[1953],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),A=l(i),h=n,p=A["".concat(c,".").concat(h)]||A[h]||u[h]||a;return i?r.createElement(p,o(o({ref:t},d),{},{components:i})):r.createElement(p,o({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=A;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}A.displayName="MDXCreateElement"},9495:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(7294);const n=function(e){let{src:t,alt:i,boxShadow:n="2px 2px 5px var(--y-gray__7)",label:a="",size:o="auto",previewScale:s=.2}=e;const[c,l]=(0,r.useState)(!1),d=()=>{document.body.style.overflow=c?"visible":"hidden",l(!c)};return(0,r.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),r.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},r.createElement("img",{src:t,alt:i,style:{boxShadow:n,width:o,cursor:"pointer",objectFit:"contain",display:"block"},onClick:d}),a&&r.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},a),c&&r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},r.createElement("img",{src:t,alt:i,style:{width:`calc(${o} * ${s})`,height:"auto",objectFit:"contain",display:"block"}}),r.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:d},"\xd7")))}},4912:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>A,toc:()=>p});var r=i(3117),n=(i(7294),i(3905)),a=i(9495);const o=i.p+"assets/images/roles_default-rights-a40b81197dfb07a8558df6b781333336.png",s=i.p+"assets/images/roles_specific-rights-27f452a04b0ca765f3101dfaeca94eab.png",c=i.p+"assets/images/roles_specific-rights_picker-18ad74e038c19aa994f6086bb3edb95f.png",l=i.p+"assets/images/roles_meta-editor-2984bdc860a08d3158d8e55d8874587c.png",d={title:"Roles",sidebar_position:2},u=void 0,A={unversionedId:"yeet/access-control/roles/roles",id:"yeet/access-control/roles/roles",title:"Roles",description:"In our platform, roles play a crucial part in defining the access level and permissions for users within your application. The Roles section provides a comprehensive interface for managing these roles, from creation to customization of rights associated with each role.",source:"@site/docs/yeet/access-control/roles/roles.mdx",sourceDirName:"yeet/access-control/roles",slug:"/yeet/access-control/roles/",permalink:"/yeet/access-control/roles/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yeet/access-control/roles/roles.mdx",tags:[],version:"current",lastUpdatedBy:"Wegener",sidebarPosition:2,frontMatter:{title:"Roles",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Access Control",permalink:"/yeet/access-control/"},next:{title:"Users",permalink:"/yeet/access-control/users/"}},h={},p=[{value:"Sidebar and Role Creation",id:"sidebar-and-role-creation",level:2},{value:"Editing Role Properties",id:"editing-role-properties",level:2},{value:"Default Rights",id:"default-rights",level:2},{value:"Specific Rights",id:"specific-rights",level:2},{value:"Custom Rights Picker",id:"custom-rights-picker",level:3}],f={toc:p};function g(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In our platform, roles play a crucial part in defining the access level and permissions for users within your application. The Roles section provides a comprehensive interface for managing these roles, from creation to customization of rights associated with each role."),(0,n.kt)("h2",{id:"sidebar-and-role-creation"},"Sidebar and Role Creation"),(0,n.kt)("p",null,"On the left side of the Roles page, you will find a sidebar listing all the roles you have created. At the bottom of this sidebar, a button allows you to add a new role. Clicking this button prompts a dialog where you can specify a name for your new role. Once a role is selected from the sidebar, it becomes active, enabling you to edit its properties and rights within the content area of the page."),(0,n.kt)(a.Z,{src:"data:image/png;base64,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",alt:"rolesSidebar",mdxType:"BasicImage"}),(0,n.kt)("p",null,'An important feature to highlight within the role management interface is the filtering capability provided in the topbar. This feature allows you to filter rights based on the presetTypes such as "entity," "enum," "action," and any custom types you have defined. Utilizing this filter can significantly streamline the process of managing rights by enabling you to focus on the specific types of interest at any given time.'),(0,n.kt)("h2",{id:"editing-role-properties"},"Editing Role Properties"),(0,n.kt)("p",null,"When a role is activated, the content area provides options to edit both defaultRights and specificRights associated with that role. Additionally, a sidebar on the right side of the content area is available for editing meta information about the role, such as its name, icon, and icon color. All changes made in these sections are saved instantly, including modifications to rights and meta information."),(0,n.kt)(a.Z,{src:l,alt:"rolesMetaEditor",mdxType:"BasicImage"}),(0,n.kt)("h2",{id:"default-rights"},"Default Rights"),(0,n.kt)("p",null,'Default rights define standard permissions for a preset type like "entity," "enum," and "action." Each default right details the standard behavior for actions like reading, writing, and deleting.'),(0,n.kt)(a.Z,{src:o,alt:"rolesDefaultRights",mdxType:"BasicImage"}),(0,n.kt)("admonition",{title:"Security Notice: Access Permissions",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"A crucial aspect to be aware of is the platform's default behavior towards unspecified rights: they are initially set to true. This setting is vital for maintaining accessibility and functionality but requires careful adjustment to ensure it aligns with your intended access controls. It's essential to review and modify these settings as necessary to prevent unintended access, ensuring secure and effective role-based access control.")),(0,n.kt)("h2",{id:"specific-rights"},"Specific Rights"),(0,n.kt)("p",null,'Specific rights allow for fine-grained control over permissions for specific objects within your application. For preset types "entity" and "enum," the selection list is linked to the actual objects you\'ve created in the Data section, ensuring consistency across your application. The "action" category includes all server-side actions defined by you or pre-provided by the platform.'),(0,n.kt)(a.Z,{src:s,alt:"rolesSpecificRights",mdxType:"BasicImage"}),(0,n.kt)("p",null,"For custom types, you can specify the names for right objects yourself. It is essential to maintain consistency in naming these right objects across different roles manually."),(0,n.kt)("p",null,"If a specific right for an object that does not exist is queried, the platform will revert to the value specified in the default right for that type. Note that specific rights can only be created if the corresponding default right for the type is defined."),(0,n.kt)("h3",{id:"custom-rights-picker"},"Custom Rights Picker"),(0,n.kt)("p",null,"The picker for custom rights introduces states: true-inherited, false-inherited, true-not-inherited, and false-not-inherited. The inherited states are defined by the defaultRights. Clicking the checkbox in an inherited state changes it to false-not inherited, and another click changes it to true-not inherited. Clicking again retrieves the inherited status from the corresponding default right. A blue frame or checkmark indicates an inherited state, while green signifies not inherited."),(0,n.kt)(a.Z,{src:c,alt:"rolesSpecificRightsPicker",mdxType:"BasicImage"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"false-inherited"),(0,n.kt)("li",{parentName:"ol"},"true-inherited"),(0,n.kt)("li",{parentName:"ol"},"false-not-inherited"),(0,n.kt)("li",{parentName:"ol"},"true-not-inherited")))}g.isMDXComponent=!0}}]);