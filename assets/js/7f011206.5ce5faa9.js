"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"SeedImage reference",title:""},i="SeedImage reference",l={unversionedId:"seedimage-reference",id:"seedimage-reference",title:"",description:"A SeedImage resource allows to build an ISO that can be used to install Elemental onto a node.",source:"@site/docs/seedimage-reference.md",sourceDirName:".",slug:"/seedimage-reference",permalink:"/next/seedimage-reference",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"SeedImage reference",title:""},sidebar:"docs",previous:{title:"Cluster reference",permalink:"/next/cluster-reference"},next:{title:"Elemental Operator Helm Chart",permalink:"/next/elementaloperatorchart-reference"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seedimage-reference"},"SeedImage reference"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"SeedImage")," resource allows to build an ISO that can be used to install Elemental onto a node.",(0,a.kt)("br",{parentName:"p"}),"\n","It requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"baseImage"),", i.e., a URL to an Elemental installation ISO, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"registrationRef")," reference to a ",(0,a.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," resource, from which the registration part of the Elemental configuration is extracted and injected in the ISO to produce the final ",(0,a.kt)("em",{parentName:"p"},"seed image"),".",(0,a.kt)("br",{parentName:"p"}),"\n","It is also possible to inject ISO customizations in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-config")," field."),(0,a.kt)("p",null,"Once the seed image is ready, the download URL is shared in the ",(0,a.kt)("inlineCode",{parentName:"p"},".status.downloadURL")," field.\nIt stays available for download for ",(0,a.kt)("inlineCode",{parentName:"p"},"cleanupAfterMinutes")," minutes (default is ",(0,a.kt)("inlineCode",{parentName:"p"},"60"),", 1 hour), after which it is deleted.",(0,a.kt)("br",{parentName:"p"}),"\n","Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"retriggerBuild")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," retriggers the seed image build process while setting ",(0,a.kt)("inlineCode",{parentName:"p"},"cleanupAfterMinutes")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," keeps the seed image around till the ",(0,a.kt)("inlineCode",{parentName:"p"},"SeedImage")," resource is deleted."),(0,a.kt)("admonition",{title:"seed images may fill up local storage",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The seed images are kept on the node's local storage: pay attention to the number of ",(0,a.kt)("inlineCode",{parentName:"p"},"SeedImage")," resources you start concurrently and to the ones you may leave around with the auto-cleanup feature disabled (",(0,a.kt)("inlineCode",{parentName:"p"},"cleanupAfterMinutes")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),") as you may exhaust the storage on your cluster nodes.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SeedImage")," resource tracks the seed image build process through two status conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ready"),": tracks the creation of all the required child resources that perform the actual build process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SeedImageReady"),": tracks the status of the build process in the child resources.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  baseImage: ...\n  cloud-config: ...\n  registrationRef:\n    name: ...\n    namespace: ...\n  cleanupAfterMinutes: ...\n  retriggerBuild: ...\n"))))}u.isMDXComponent=!0}}]);