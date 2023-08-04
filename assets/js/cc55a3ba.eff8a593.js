"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Machineregistration reference",title:""},i="MachineRegistration reference",o={unversionedId:"machineregistration-reference",id:"version-1.2/machineregistration-reference",title:"",description:"The MachineRegistration resource is the responsible of defining a machine registration end point. Once created it generates a registration URL used by nodes to register so they are inventoried.",source:"@site/versioned_docs/version-1.2/machineregistration-reference.md",sourceDirName:".",slug:"/machineregistration-reference",permalink:"/machineregistration-reference",draft:!1,tags:[],version:"1.2",frontMatter:{sidebar_label:"Machineregistration reference",title:""},sidebar:"docs",previous:{title:"Cloud-config reference",permalink:"/cloud-config-reference"},next:{title:"MachineInventorySelectorTemplate reference",permalink:"/machineinventoryselectortemplate-reference"}},m={},s=[{value:"config.cloud-config",id:"configcloud-config",level:4},{value:"config.elemental.registration",id:"configelementalregistration",level:4},{value:"config.elemental.install",id:"configelementalinstall",level:4},{value:"machineName",id:"machinename",level:4},{value:"machineInventoryLabels",id:"machineinventorylabels",level:4},{value:"machineInventoryAnnotations",id:"machineinventoryannotations",level:4}],p=(d="Vars",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"machineregistration-reference"},"MachineRegistration reference"),(0,r.kt)("p",null,"The MachineRegistration resource is the responsible of defining a machine registration end point. Once created it generates a registration URL used by nodes to register so they are inventoried."),(0,r.kt)("p",null,"There are several keys that can be configured under a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," resource spec."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="MachineRegistration" showLineNumbers',title:'"MachineRegistration"',showLineNumbers:!0},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: name\n  machineInventoryLabels:\n    label: value\n  machineInventoryAnnotations:\n    annotation: value\n  config:\n    cloud-config:\n        ...\n    elemental:\n        registration:\n            ...\n        install:\n            ... \n")),(0,r.kt)("h4",{id:"configcloud-config"},"config.cloud-config"),(0,r.kt)("p",null,"Contains the cloud-configuration to be injected in the node. See the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-config-reference"},"Cloud Config Reference")," for full information."),(0,r.kt)("h4",{id:"configelementalregistration"},"config.elemental.registration"),(0,r.kt)("p",null,"Contains the configuration used for the connection and the initial registration to the ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"}),"."),(0,r.kt)("p",null,"Supports the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to connect to the ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ca-cert"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"CA to validate the certificate provided by the server at 'url' (required if the certificate is not signed by a public CA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no-smbios"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether SMBIOS data should be sent to the ",(0,r.kt)(p,{name:"elemental_operator_name",mdxType:"Vars"})," (see the ",(0,r.kt)("a",{parentName:"td",href:"/smbios"},"SMBIOS reference")," for more information)")))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The following values are for development purposes only."),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emulate-tpm"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"This will use software emulation of the TPM (required for hosts without TPM hardware)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emulated-tpm-seed"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Fixed seed to use with 'emulate-tpm'. Set to -1 to get a random seed. See ",(0,r.kt)("a",{parentName:"td",href:"/tpm"},"TPM")," for more information"))))),(0,r.kt)("h4",{id:"configelementalinstall"},"config.elemental.install"),(0,r.kt)("p",null,"Contains the installation configuration that would be applied via ",(0,r.kt)("inlineCode",{parentName:"p"},"operator-register")," when booted from an ISO and passed to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-cli/blob/main/docs/elemental_install.md"},(0,r.kt)("inlineCode",{parentName:"a"},"elemental-cli install"))),(0,r.kt)("p",null,"Supports the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"firmware"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"efi"),(0,r.kt)("td",{parentName:"tr",align:null},"Firmware to install ('efi' or 'bios')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"device"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Device to install the system to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no-format"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Don\u2019t format disks. It is implied that COS_STATE, COS_RECOVERY, COS_PERSISTENT, COS_OEM partitions are already existing on the target disk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config-urls"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud-init config files locations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iso"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Performs an installation from the ISO url instead of the running ISO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system-uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the system image source and its type (e.g. 'docker:registry.org/image:tag') instead of using the running ISO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable debug output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tty"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Add named tty to grub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"poweroff"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Shutdown the system after install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reboot"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Reboot the system after install")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eject-cd"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Try to eject the cd on reboot")))),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"In case of using both ",(0,r.kt)("inlineCode",{parentName:"p"},"iso")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"system-uri")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"iso")," value takes precedence")),(0,r.kt)("p",null,"The only required value for a successful installation is the ",(0,r.kt)("inlineCode",{parentName:"p"},"device")," key as we need a target disk to install to. The rest of the parameters are all optional."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    elemental:\n      install:\n        device: /dev/sda\n        debug: true\n        reboot: true\n        eject-cd: true\n        system-uri: registry.suse.com/rancher/elemental-teal/5.3:latest\n"))),(0,r.kt)("h4",{id:"machinename"},"machineName"),(0,r.kt)("p",null,"This refers to the name that will be set to the node and the kubernetes resources that require a hostname (rke2 deployed pods for example, they use the node hostname as part of the pod names)\n",(0,r.kt)("inlineCode",{parentName:"p"},"String")," type."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental:registration:no-smbios")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (default), machineName is interpolated with ",(0,r.kt)("a",{parentName:"p",href:"https://www.dmtf.org/standards/smbios"},"SMBIOS")," data which allows you to store hardware information.\nSee our ",(0,r.kt)("a",{parentName:"p",href:"/smbios"},"SMBIOS docs")," for more information.\nIf no ",(0,r.kt)("inlineCode",{parentName:"p"},"machineName")," is specified, a default one in the form ",(0,r.kt)("inlineCode",{parentName:"p"},"m-$UUID")," will be set.\nThe UUID will be retrieved from the SMBIOS data if available, otherwise a random UUID will be generated.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: hostname-test-4\n"))),(0,r.kt)("h4",{id:"machineinventorylabels"},"machineInventoryLabels"),(0,r.kt)("p",null,"Labels that will be set to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," that is created from this ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Key: value")," type. These labels will be used to establish a selection criteria in ",(0,r.kt)("a",{parentName:"p",href:"/machineinventoryselectortemplate-reference"},"MachineInventorySelectorTemplate"),".  "),(0,r.kt)("p",null,"Elemental Teal nodes will run ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," every 24 hours.",(0,r.kt)("br",{parentName:"p"}),"\n","It is possible to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"machineInventoryLabels")," so that all registered nodes will apply the new labels on the next successfull registration update.  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental:registration:no-smbios")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (default), Labels are interpolated with ",(0,r.kt)("a",{parentName:"p",href:"https://www.dmtf.org/standards/smbios"},"SMBIOS")," data. This allows to store hardware information in custom labels.\nSee our ",(0,r.kt)("a",{parentName:"p",href:"/smbios"},"SMBIOS docs")," for more information.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineInventoryLabels:\n    my.prefix.io/element: fire\n    my.prefix.io/cpus: 32\n    my.prefix.io/manufacturer: "${System Information/Manufacturer}"\n    my.prefix.io/productName: "${System Information/Product Name}"\n    my.prefix.io/serialNumber: "${System Information/Serial Number}"\n    my.prefix.io/machineUUID: "${System Information/UUID}"\n'))),(0,r.kt)("h4",{id:"machineinventoryannotations"},"machineInventoryAnnotations"),(0,r.kt)("p",null,"Annotations that will be set to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," that is created from this ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Key: value")," type"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineInventoryAnnotations:\n    owner: bob\n    version: 1.0.0\n"))))}g.isMDXComponent=!0}}]);