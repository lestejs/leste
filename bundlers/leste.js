var leste=(()=>{var y=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var A=(s,t)=>{for(var e in t)y(s,e,{get:t[e],enumerable:!0})},_=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of C(t))!S.call(s,o)&&o!==e&&y(s,o,{get:()=>t[o],enumerable:!(n=k(t,o))||n.enumerable});return s};var q=s=>_(y({},"__esModule",{value:!0}),s);var F={};A(F,{mount:()=>v,replicate:()=>a});function P(s,t){let e=new WeakMap;function n(c){return{set(i,p,h,m){let f=[...c,p],O=f.join("_");if(t.beforeSet){let j=t.beforeSet(i,f,h,O);if(j===void 0)return;h=j||h}return h&&typeof h=="object"&&(h=r(h,f)),i[p]=h,t.set&&t.set(i,f,h,O),!0},get(i,p){return t.get&&t.get(i,[...c,p]),i[p]},deleteProperty(i,p){if(Reflect.has(i,p)){o(i,p);let h=Reflect.deleteProperty(i,p);return h&&t.deleteProperty&&t.deleteProperty(i,[...c,p]),h}return!1},getPrototypeOf(i){return{target:i,instance:"Proxy"}}}}function o(c,i){e.has(c[i])&&(c[i]=e.get(c[i]),e.delete(c[i]));for(let p of Object.keys(c[i]))c[i][p]!=null&&typeof c[i][p]=="object"&&o(c[i],p)}function r(c,i){for(let h of Object.keys(c))c[h]&&typeof c[h]=="object"&&(c[h]=r(c[h],[...i,h]));let p=new Proxy(c,n(i));return e.set(p,c),p}return r(s,[])}var g=null;function D(s,t){return clearTimeout(g),new Promise(e=>{g=setTimeout(()=>{s&&s(),clearTimeout(g),e()},t||0)})}function a(s){return!s||s instanceof HTMLCollection||s instanceof NodeList||s instanceof Element?s:JSON.parse(JSON.stringify(s))}var L=["Error props type","Node with ingrate must bu empty"];function N(){for(let s in this.node.classes){let t=()=>{this.node.classes[s]()?this.nodeElement.classList.add(s):this.nodeElement.classList.remove(s)};this.refs.length=0,this.common.fl=!0,t(),this.nodeElement.reactive(this.refs,"classes",t)}}function J(s,t=300){let e;return(...n)=>{e||s.apply(this,n),clearTimeout(e),e=setTimeout(()=>{e=null},t)}}function R(s,t){typeof t=="function"&&(this.nodeElement[s]=e=>this.node[s].bind(this.context)(e,J))}function W(s,t){if(typeof t=="function"){let e=()=>{let n=t.bind(this.context)();typeof n=="object"?Object.assign(this.nodeElement[s],n):this.nodeElement[s]=n};this.refs.length=0,this.common.fl=!0,e(),this.nodeElement.reactive(this.refs,s,e)}else this.nodeElement[s]=t}function $(s,t){s in this.nodeElement&&(s.substr(0,2)==="on"?this.listeners(s,t):this.general(s,t))}var T={native:$,listeners:R,general:W};function E(s){let t=new this.Component(s||this.node.component,this.context,this.keyNode,this.nodeElement,this.common),e={},n=s?.proxies||this.node.component.proxies;if(n)for(let[o,r]of Object.entries(n))typeof r=="function"&&r.name?(this.refs.length=0,this.common.fl=!0,Object.assign(e,{[o]:r()}),this.nodeElement.reactive(this.refs,"component",()=>{let c=r();this.nodeElement.proxy[o]=c})):Object.assign(e,{[o]:r});return{component:t,proxies:e}}var d=class{constructor(t,e,n,o){this.nodeElement=t,this.props=e,this.append=o,this.data=n}async length(t){t>this.nodeElement.children.length&&await this.add(t),t<this.nodeElement.children.length&&this.remove(t)}async set(t){await this.remove(0),await this.add(t.length)}async add(t){let e=this.nodeElement.children.length;for(;t>e;)await this.append(e),e++}async remove(t){let e=this.nodeElement.children.length;for(;t<e;){if(e--,this.nodeElement.reactivity.component)for(let n in this.nodeElement.reactivity.component)n.split("_")[1]==e&&(this.nodeElement.reactivity.component[n].length=0);await this.nodeElement.children[e].unmount()}}};async function b(){if(this.nodeElement.innerHTML===""){let s=(n,o)=>{let r={};if(this.node.component.proxies)for(let[c,i]of Object.entries(this.node.component.proxies))typeof i=="function"&&i.name&&(this.refs.length=0,this.common.fl=!0,i.length?Object.assign(r,{[c]:i(n[o],o)}):Object.assign(r,{[c]:i()}),this.nodeElement.reactive(this.refs,"component",(p,h)=>{let m=h[1];if(m)console.log(this.nodeElement,this.refs),this.nodeElement.children[m].proxy[c]=i(n[m],m);else for(let f=0;f<this.nodeElement.children.length;f++)this.nodeElement.children[f].proxy[c]=i(n[f],f)}));return r};this.refs.length=0,this.common.fl=!0;let t=this.node.component.iterate;this.nodeElement.setAttribute("iterate","");let e=new this.Component(this.node.component,this.context,this.keyNode,this.nodeElement,this.common);if(typeof t!="number")if(Object.getPrototypeOf(this.node.component.iterate).instance==="Proxy"){let n=t.length,o=this.refs[0],r=o.split("_")[0],c=async p=>{await e.create(this.node.component.src,s(this.node.component.iterate,p),this.node.component.iterate[p],p)},i=new d(this.nodeElement,this.node.component.proxies,this.node.component.iterate,c);if(this.nodeElement.reactive([r],"component",(p,h,m)=>{this.node.component.iterate=m,i.set.bind(i)(m)}),this.nodeElement.reactive([o],"component",(p,h,m)=>i.length.bind(i)(m)),n)for await(let[p]of t.entries())await c(p)}else for await(let[n,o]of t.entries()){let r=s(t,n);await e.create(this.node.component.src,r,o,n)}}else this.nodeElement.textContent=this.common.errors[1],console.error(this.common.errors[1])}async function w(){this.refs.length=0,this.common.fl=!0;let s=this.node.component.induce();if(this.nodeElement.reactive(this.refs,"induce",async()=>{if(this.node.component.induce()){this.nodeElement.unmount&&this.nodeElement.unmount();let{component:t,proxies:e}=this.simple();await t.create(this.node.component.src,e)}else this.nodeElement.unmount&&this.nodeElement.unmount()}),s){let{component:t,proxies:e}=this.simple();await t.create(this.node.component.src,e)}}var u=class{constructor(t,e,n,o,r){this.common=r,this.component=t,this.context=e,this.keyNode=n,this.nodeElement=o,this.props={methods:{},proxies:{},params:{}}}propsMethods(){let t=this.component.methods;if(t)for(let[e,n]of Object.entries(t))typeof n=="function"&&Object.assign(this.props.methods,{[e]:(...o)=>n.bind(this.context)(...a(o))})}propsParams(t,e){let n=this.component.params;if(n)for(let[o,r]of Object.entries(n))typeof r=="function"&&r.name?Object.assign(this.props.params,{[o]:r(t,e)}):Object.assign(this.props.params,{[o]:r})}async load(t){return t instanceof Promise?(await t)?.default:await t}async create(t,e,n,o){try{if(this.propsMethods(),this.propsParams(n,o),e&&(this.props.proxies=e),t){let r=await this.load(t);await v(this.nodeElement,r,this.props)}}catch(r){console.error(r)}}};async function z(){if(this.nodeElement.integrate=async s=>{if(this.nodeElement.unmount&&!this.nodeElement.hasAttribute("integrate")){this.nodeElement.setAttribute("integrate","");let{component:t,proxies:e}=this.simple(s);await t.create(s.src,e)}},this.node.component.iterate)await this.iterate();else if(this.node.component.induce)await this.induce();else{let{component:s,proxies:t}=this.simple();await s.create(this.node.component.src,t)}}var H={Component:u,component:z,simple:E,iterate:b,induce:w};var l=class{constructor(t,e,n,o,r){this.node=t,this.keyNode=e,this.context=n,this.common=r,this.refs=r.refs,this.nodeElement=o,this.nodeElement.reactive=(c,i,p)=>{c.length&&(c.forEach(h=>{i in this.nodeElement.reactivity||(this.nodeElement.reactivity[i]={}),h in this.nodeElement.reactivity[i]||(this.nodeElement.reactivity[i][h]=[]),this.nodeElement.reactivity[i][h].push(p)}),this.common.fl=!1,c.length=0)}}};Object.assign(l.prototype,{classes:N});Object.assign(l.prototype,T);Object.assign(l.prototype,H);var M=l;var x=class{constructor(t){this.component=t,this.paramsData={},this.proxiesData=this.component.proxies?a(this.component.proxies):{},this.common={fl:!1,refs:[],errors:L},this.storesHadlers={},this.context={container:null,options:t,node:{},param:{},reactiveMap:{},method:{},proxy:{},setter:{},handler:{},source:t.sources,router:t.router,delay:D}}async created(t){this.context.container=t,this.component.created&&await this.component.created.bind(this.context)()}async mounted(){this.component.mounted&&await this.component.mounted.bind(this.context)()}async unmount(t){if(this.component.stores)for(let e of Object.values(this.component.stores))document.addEventListener(e.name,this.storesHadlers[e.name]);t.reactivity&&(t.reactivity.component={}),t.proxy={},t.method={},this.component.unmount&&await this.component.unmount.bind(this.context)()}stores(){if(this.component.stores)for(let t of Object.values(this.component.stores)){if(t.params)for(let o in t.params)o in this.component.props.params&&(this.context.param[o]={...t.params[o]});if(t.proxies)for(let o in t.proxies)o in this.component.props.proxies&&(this.component.proxies[o]=a(t.proxies[o]));if(t.methods)for(let o in t.methods)o in this.component.props.methods&&(this.context.method[o]=(...r)=>t.methods[o].bind(t)(...a(r)));let e=t.name,n=o=>{let{path:r,value:c}=o.detail;if(t.proxies&&r[0]in this.component.props.proxies){let i=this.context.proxy;if(r.length>0){for(let p=0;p<r.length-1;p++)i=i[r[p]];i[r[r.length-1]]=c}else i[r[0]]=c}};Object.assign(this.storesHadlers,{[e]:n}),document.addEventListener(e,n,!1)}}methods(t){if(t.method||(t.method={}),this.component.methods)for(let[e,n]of Object.entries(this.component.methods))this.context.method[e]=n.bind(this.context),t.method[e]=(...o)=>this.context.method[e](...a(o))}setters(){if(this.component.setters)for(let t in this.component.setters)this.context.setter[t]=e=>this.component.setters[t].bind(this.context)(e)}handlers(){if(this.component.handlers)for(let t in this.component.handlers)this.context.handler[t]=e=>this.component.handlers[t].bind(this.context)(e)}params(){if(this.component.params){this.paramsData=a(this.component.params);for(let t in this.paramsData)this.context.param[t]=this.paramsData[t]}}props(t,e){e.proxy||(e.proxy={});let n=this.context;if(this.component.props){if(t.proxies&&this.component.props.proxies)for(let o in this.component.props.proxies)o in t.proxies?(this.proxiesData[o]=t.proxies[o],Object.defineProperty(e.proxy,o,{set(r){n.proxy[o]=a(r)},get(){return n.proxy[o]}})):this.proxiesData[o]=null;if(t.methods&&this.component.props.methods)for(let o in t.methods)o in this.component.props.methods&&(this.context.method[o]=t.methods[o]);if(t.params&&this.component.props.params)for(let o in this.component.props.params)o in t.params?this.context.param[o]=a(t.params[o]):this.context.param[o]=null;this.validation()}}validation(){if(this.component.props.proxies)for(let[t,e]of Object.entries(this.component.props.proxies))(this.proxiesData[t]===void 0||this.proxiesData[t]===null)&&(this.proxiesData[t]=e.default),this.component.props.proxies[t].type&&!typeof this.proxiesData[t]===this.component.props.proxies[t].type&&console.error("Error props type");if(this.component.props.methods)for(let t in this.component.props.methods)typeof this.component.props.methods!="object"?console.error("Error props type"):this.component.props.methods[t].instance&&this.context.method[t]instanceof this.component.props.methods[t].instance&&console.error("Error props instance");if(this.component.props.params)for(let[t,e]of Object.entries(this.component.props.params))(this.context.param[t]===void 0||this.context.param[t]===null)&&(this.context.param[t]=e.default),this.component.props.params[t].type&&!typeof this.context.param[t]===this.component.props.params[t].type&&console.error("Error props type")}proxies(){let t=this;this.context.proxy=P(a(this.proxiesData),{beforeSet(e,n,o,r){return t.context.setter[r]?t.context.setter[r].bind(t.context)(o):o},async set(e,n,o,r){for(let c in t.context.node){let i=t.context.node[c];for(let p in i.reactivity){let h=i.reactivity[p][r];if(h?.length)for(let m of h)await m(e,n,o)}}return t.context.handler[r]?.bind(t.context)(o)},get(e,n){t.common.fl||(t.common.refs.length=0),t.common.refs.push(n.join("_"))},deleteProperty(e,n){console.log("delete",n.join("_"))}})}async nodes(t){if(this.component.nodes){let e=this.component.nodes.bind(this.context)();for await(let[n,o]of Object.entries(e)){let r=t.querySelector(`.${n}`)||t.classList.contains(n)&&t;if(r.reactivity={},Object.assign(this.context.node,{[n]:r}),o){let c=new M(o,n,this.context,r,this.common);for await(let[i,p]of Object.entries(o))c.native(i,p),i in c&&await c[i](n,p)}}}}};function B(s,t,e){let n=t.querySelector("[slot]");if(n)n.innerHTML=s.template;else if(t.insertAdjacentHTML("beforeEnd",s.template),t.hasAttribute("iterate"))return t.lastChild.unmount=async()=>{await e.unmount(t.lastChild),t.children[t.children.length-1].remove()},t.lastChild;return t.unmount||(t.unmount=async()=>{await e.unmount(t),t.innerHTML=""}),t}async function v(s,t,e={}){if(t){let n=new x(t),o=B(t,s,n);return await n.created(o),n.stores(),n.setters(),n.handlers(),n.params(),n.props(e,o),n.methods(o),n.proxies(),await n.nodes(o),await n.mounted(),{options:t,context:n.context}}}return q(F);})();
