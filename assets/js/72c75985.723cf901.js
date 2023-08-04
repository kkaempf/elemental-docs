"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[5713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(g,s(s({ref:t},m),{},{components:a})):n.createElement(g,s({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Upgrade",title:""},s="Troubleshooting upgrade",l={unversionedId:"troubleshooting-upgrade",id:"troubleshooting-upgrade",title:"",description:"Upgrade Flow",source:"@site/docs/troubleshooting-upgrade.md",sourceDirName:".",slug:"/troubleshooting-upgrade",permalink:"/next/troubleshooting-upgrade",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Upgrade",title:""},sidebar:"docs",previous:{title:"Restore",permalink:"/next/troubleshooting-restore"},next:{title:"Release Notes",permalink:"/next/release-notes"}},i={},p=[{value:"Rancher side",id:"rancher-side",level:2},{value:"Elemental Cluster side",id:"elemental-cluster-side",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting-upgrade"},"Troubleshooting upgrade"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Upgrade Flow",src:a(4558).Z,width:"883",height:"831"})),(0,r.kt)("p",null,"For a high level overview of the upgrade workflow, please refer to the image above.  "),(0,r.kt)("h2",{id:"rancher-side"},"Rancher side"),(0,r.kt)("p",null,"In this example we upgraded the cluster nodes with the following ManagedOSImage definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to or track the latest tag\n  osImage: "registry.suse.com/rancher/elemental-teal/5.4:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n')),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSImage")," is applied, the ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-operator")," will verify it and generate a related ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle"),".",(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle")," name will be prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"mos")," and then the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSImage")," name. In this case ",(0,r.kt)("inlineCode",{parentName:"p"},"mos-my-upgrade"),".  "),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle")," definition, you will find the details about the upgrade plan and the desired target.",(0,r.kt)("br",{parentName:"p"}),"\n","For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl -n fleet-default get bundle mos-my-upgrade -o yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: fleet.cattle.io/v1alpha1\nkind: Bundle\nmetadata:\n  creationTimestamp: "2023-06-16T09:01:47Z"\n  generation: 1\n  name: mos-my-upgrade\n  namespace: fleet-default\n  ownerReferences:\n  - apiVersion: elemental.cattle.io/v1beta1\n    controller: true\n    kind: ManagedOSImage\n    name: my-upgrade\n    uid: e468ed21-23bb-487a-a022-dbc7ef753720\n  resourceVersion: "1038645"\n  uid: 35e83fc4-28c8-4b10-8059-cae6cdff2cda\nspec:\n  resources:\n  - content: \'{"kind":"ClusterRole","apiVersion":"rbac.authorization.k8s.io/v1","metadata":{"name":"os-upgrader-my-upgrade","creationTimestamp":null},"rules":[{"verbs":["update","get","list","watch","patch"],"apiGroups":[""],"resources":["nodes"]},{"verbs":["list"],"apiGroups":[""],"resources":["pods"]}]}\'\n    name: ClusterRole--os-upgrader-my-upgrade-296a3abf3451.yaml\n  - content: \'{"kind":"ClusterRoleBinding","apiVersion":"rbac.authorization.k8s.io/v1","metadata":{"name":"os-upgrader-my-upgrade","creationTimestamp":null},"subjects":[{"kind":"ServiceAccount","name":"os-upgrader-my-upgrade","namespace":"cattle-system"}],"roleRef":{"apiGroup":"rbac.authorization.k8s.io","kind":"ClusterRole","name":"os-upgrader-my-upgrade"}}\'\n    name: ClusterRoleBinding--os-upgrader-my-upgrade-f63eaecde935.yaml\n  - content: \'{"kind":"ServiceAccount","apiVersion":"v1","metadata":{"name":"os-upgrader-my-upgrade","namespace":"cattle-system","creationTimestamp":null}}\'\n    name: ServiceAccount-cattle-system-os-upgrader-my-upgrade-ce93d-01096.yaml\n  - content: \'{"kind":"Secret","apiVersion":"v1","metadata":{"name":"os-upgrader-my-upgrade","namespace":"cattle-system","creationTimestamp":null},"data":{"cloud-config":""}}\'\n    name: Secret-cattle-system-os-upgrader-my-upgrade-a997ee6a67ef.yaml\n  - content: \'{"kind":"Plan","apiVersion":"upgrade.cattle.io/v1","metadata":{"name":"os-upgrader-my-upgrade","namespace":"cattle-system","creationTimestamp":null},"spec":{"concurrency":1,"nodeSelector":{},"serviceAccountName":"os-upgrader-my-upgrade","version":"latest","secrets":[{"name":"os-upgrader-my-upgrade","path":"/run/data"}],"tolerations":[{"operator":"Exists"}],"cordon":true,"upgrade":{"image":"registry.suse.com/rancher/elemental-teal/5.4","command":["/usr/sbin/suc-upgrade"]}},"status":{}}\'\n    name: Plan-cattle-system-os-upgrader-my-upgrade-273c2c09afca.yaml\n  targets:\n  - clusterName: my-cluster\n.\n.\n.\n'))),(0,r.kt)("h2",{id:"elemental-cluster-side"},"Elemental Cluster side"),(0,r.kt)("p",null,"Any Elemental Teal node correctly registered and part of the target cluster will fetch the bundle and start applying it.",(0,r.kt)("br",{parentName:"p"}),"\n","This operation is performed by the Rancher's ",(0,r.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," running on the Elemental Cluster.",(0,r.kt)("br",{parentName:"p"}),"\n","To monitor the correct operation of this controller, you can read its logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl -n cattle-system logs deployment/system-upgrade-controller\n")),(0,r.kt)("p",null,"If everything is correct, the ",(0,r.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," will create an upgrade job for each targeted machine.",(0,r.kt)("br",{parentName:"p"}),"\n","The job names will use the Plan name (",(0,r.kt)("inlineCode",{parentName:"p"},"os-upgrader-my-upgrade"),") and the target machine hostname (",(0,r.kt)("inlineCode",{parentName:"p"},"my-host"),") for easy discoverability.",(0,r.kt)("br",{parentName:"p"}),"\n","For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"apply-os-upgrader-my-upgrade-on-my-host-7a25e"),(0,r.kt)("br",{parentName:"p"}),"\n","You can monitor these jobs with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl -n cattle-system get jobs\n")),(0,r.kt)("p",null,"Each job will use a ",(0,r.kt)("inlineCode",{parentName:"p"},"privileged: true")," container with the Elemental Teal image specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedOSImage")," definition. This container will try to upgrade the system and perform a reboot.  "),(0,r.kt)("p",null,"If the job fails, you can check its status by examining the logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl -n cattle-system logs job.batch/apply-os-upgrader-my-upgrade-on-my-host-7a25e\n")),(0,r.kt)("admonition",{title:"Two stages job process",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that the upgrade process is performed in two stages.",(0,r.kt)("br",{parentName:"p"}),"\n","You will notice that the same job is ran twice and the first one ends with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Uknown")," Status and will not complete.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"This is to be expected"),", as Elemental Teal relies on the job to be ran again after the machine restarts, so that it can verify the new version was installed correctly.",(0,r.kt)("br",{parentName:"p"}),"\n","You will notice a second run of the job, this time completing correctly."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl -n cattle-system get jobs \nNAMESPACE       NAME                                            COMPLETIONS   DURATION   AGE\ncattle-system   apply-os-upgrader-my-upgrade-on-my-host-0b392   1/1           2m34s      6m23s\ncattle-system   apply-os-upgrader-my-upgrade-on-my-host-7a25e   0/1           6m23s      6m23s\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl -n cattle-system get pods \nNAME                                            READY   STATUS      RESTARTS      AGE\napply-os-upgrader-my-upgrade-on-my-host-zbkrh   0/1     Completed   0             9m40s\napply-os-upgrader-my-upgrade-on-my-host-zvrff   0/1     Unknown     0             12m\n"))))}c.isMDXComponent=!0},4558:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/troubleshooting-upgrade-d04ebc28593991d53a8c0e59bb2a666b.png"}}]);