"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[4696],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(i),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return i?r.createElement(h,o(o({ref:t},p),{},{components:i})):r.createElement(h,o({ref:t},p))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},9495:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(7294);const n=function(e){let{src:t,alt:i,boxShadow:n="2px 2px 5px var(--y-gray__7)",label:a="",size:o="auto",previewScale:s=.2}=e;const[l,c]=(0,r.useState)(!1),p=()=>{document.body.style.overflow=l?"visible":"hidden",c(!l)};return(0,r.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),r.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},r.createElement("img",{src:t,alt:i,style:{boxShadow:n,width:o,cursor:"pointer",objectFit:"contain",display:"block"},onClick:p}),a&&r.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},a),l&&r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},r.createElement("img",{src:t,alt:i,style:{width:`calc(${o} * ${s})`,height:"auto",objectFit:"contain",display:"block"}}),r.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:p},"\xd7")))}},6005:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>A,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var r=i(3117),n=(i(7294),i(3905)),a=i(9495);i.p;const o=i.p+"assets/images/csv-import_do-not-forget-03e464b811806dcb903625d6fb4ac9be.png",s=i.p+"assets/images/csv-import_log-338ce3be4dd0510cbd745d3318d9f56d.png",l=i.p+"assets/images/csv-import_mapping-fcb001eb15eb03c03068166d7660199d.png",c=i.p+"assets/images/csv-import_preview-settings-54d7d17225321cdd01abe5532d359157.png",p=i.p+"assets/images/csv-import_locked-30257696eb9c022605f43e6293e94ba2.png",d={title:"CSV Import",sidebar_position:3},m=void 0,u={unversionedId:"yeet/data/csv-import/csv-import",id:"yeet/data/csv-import/csv-import",title:"CSV Import",description:"--\x3e",source:"@site/docs/yeet/data/csv-import/csv-import.mdx",sourceDirName:"yeet/data/csv-import",slug:"/yeet/data/csv-import/",permalink:"/yeet/data/csv-import/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yeet/data/csv-import/csv-import.mdx",tags:[],version:"current",lastUpdatedBy:"Miqueas",sidebarPosition:3,frontMatter:{title:"CSV Import",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data Elements",permalink:"/yeet/data/data-elements/"},next:{title:"CSV Export",permalink:"/yeet/data/csv-export/"}},h={},g=[{value:"Entity Selection and File Upload",id:"entity-selection-and-file-upload",level:2},{value:"Preview and Settings",id:"preview-and-settings",level:2},{value:"Import Log and Controls",id:"import-log-and-controls",level:2},{value:"Column Mapping: Bridging Data with Entities",id:"column-mapping-bridging-data-with-entities",level:2},{value:"Lock and Claim System: Managing Concurrent Imports",id:"lock-and-claim-system-managing-concurrent-imports",level:2}],y={toc:g};function A(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'The CSV Import feature is a pivotal tool within our platform, designed to streamline the process of integrating external data into your application. By selecting the "CSV Import" function, you embark on a straightforward journey to populate your entities with data from CSV files, enhancing your application\'s data richness and functionality.'),(0,n.kt)("h2",{id:"entity-selection-and-file-upload"},"Entity Selection and File Upload"),(0,n.kt)("p",null,"The journey begins in the left sidebar, where you are required to select the target entity for your data import. This step ensures that the data you import aligns with the structure of the chosen entity, facilitating a smooth integration process."),(0,n.kt)(a.Z,{src:"data:image/png;base64,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",alt:"EntitySelect",mdxType:"BasicImage"}),(0,n.kt)("p",null,'Upon selecting an entity, the central area presents you with a file selection picker, allowing you to upload a CSV file. It\'s important to note that the system only accepts files with a ".csv" extension, ensuring compatibility and preventing errors during the import process.'),(0,n.kt)(a.Z,{src:"data:image/png;base64,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",alt:"Upload",mdxType:"BasicImage"}),(0,n.kt)("h2",{id:"preview-and-settings"},"Preview and Settings"),(0,n.kt)("p",null,"Following the file upload, a \"preview\" section appears next to the file picker in the content area. This preview, displaying up to 5 lines from your CSV file, offers a glimpse into how the imported data will appear within the table structure of your application. It's a crucial step for verifying the data's organization and ensuring it meets your expectations before finalizing the import."),(0,n.kt)(a.Z,{src:c,alt:"PreviewSettings",mdxType:"BasicImage"}),(0,n.kt)("p",null,"Above the preview, you'll find a settings area where you can customize how the system interprets your CSV file. These settings include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Encoding Format"),(0,n.kt)("br",{parentName:"li"}),"Choose between UTF-8 or ASCII encoding to match the format of your CSV file, ensuring correct interpretation of the data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Header Row Identification"),(0,n.kt)("br",{parentName:"li"}),"Allows you to specify if the first row of your CSV file serves as a header, which will not be imported as data but used to identify column names."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Row Separator Character"),(0,n.kt)("br",{parentName:"li"}),"Define the character used to separate rows in your CSV file, such as commas or semicolons. This setting ensures that the preview and subsequent import accurately reflect the structure of your data.")),(0,n.kt)("h2",{id:"import-log-and-controls"},"Import Log and Controls"),(0,n.kt)("p",null,"The content area's lower section hosts a log, dynamically updating you with messages about the import process, including success notifications, errors, and warnings. This log also displays the import's progress in percentages and indicates if the import is locked, completed, or requires release."),(0,n.kt)(a.Z,{src:s,alt:"Log",mdxType:"BasicImage"}),(0,n.kt)("p",null,"To manage the import process, the content header above the preview area houses crucial controls. These include:"),(0,n.kt)(a.Z,{src:"data:image/png;base64,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",alt:"Send",mdxType:"BasicImage"}),(0,n.kt)(a.Z,{src:"data:image/png;base64,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",alt:"ResolveUndo",mdxType:"BasicImage"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Send to Database"),(0,n.kt)("br",{parentName:"li"}),"Initiates the import process when no current import is underway."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rollback"),(0,n.kt)("br",{parentName:"li"}),"Available if an import has either completed or is in progress, allowing you to revert the import actions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Resolve"),(0,n.kt)("br",{parentName:"li"}),"Appears alongside Rollback, enabling you to address any issues encountered during the import and proceed with finalizing the data integration.")),(0,n.kt)("h2",{id:"column-mapping-bridging-data-with-entities"},"Column Mapping: Bridging Data with Entities"),(0,n.kt)("p",null,"After uploading your CSV file and adjusting settings to suit your data structure, the next critical step involves mapping the CSV columns to the corresponding fields of the selected entity. This process is facilitated by the Column Mapper, located directly below the file upload picker in the content area."),(0,n.kt)(a.Z,{src:l,alt:"Mapping",mdxType:"BasicImage"}),(0,n.kt)("p",null,"The Column Mapper is your tool for specifying which column from the CSV file corresponds to which field in the entity. This step is vital as it ensures that the imported data aligns correctly with the entity's structure. Notably, the system allows you to map a single CSV column to multiple entity fields if required, providing flexibility in how data is integrated into your application. Before proceeding with the database import, it's mandatory to define these mappings to ensure data integrity and accuracy."),(0,n.kt)("h2",{id:"lock-and-claim-system-managing-concurrent-imports"},"Lock and Claim System: Managing Concurrent Imports"),(0,n.kt)("p",null,"A unique aspect of the CSV Import feature is its lock and claim system, designed to maintain order and prevent conflicts during the import process. In essence, this system ensures that only one import operation can occur at any given time across the entire application instance. When a user initiates an import, the feature is locked, rendering it inaccessible to other users until the operation is either rolled back, resolved, or explicitly released by the initiating user."),(0,n.kt)(a.Z,{src:o,alt:"DoNotForget",mdxType:"BasicImage"}),(0,n.kt)("p",null,"This lock mechanism is particularly crucial in scenarios where the importing process is interrupted\u2014such as a browser closure or an unexpected exit from the platform. Upon returning, the user who initiated the import will encounter a warning message prompting them to reclaim the import process. This action can only be performed by the original user or an authorized user, such as an administrator, highlighting the importance of proper access controls and user permissions in managing data imports."),(0,n.kt)(a.Z,{src:p,alt:"Locked",mdxType:"BasicImage"}),(0,n.kt)("p",null,"Through these steps, the CSV Import feature empowers you to efficiently populate your entities with external data, enhancing your application's data management capabilities and overall utility."))}A.isMDXComponent=!0}}]);