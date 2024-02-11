(function(r,t){typeof exports=="object"&&typeof module!="undefined"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis!="undefined"?globalThis:r||self,t(r["form-validation"]={}))})(this,function(r){"use strict";var G=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var x=(r,t,o)=>t in r?G(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,k=(r,t)=>{for(var o in t||(t={}))Q.call(t,o)&&x(r,o,t[o]);if(w)for(var o of w(t))R.call(t,o)&&x(r,o,t[o]);return r},O=(r,t)=>H(r,J(t));const t="form-validation",o="[data-validation]",T="[data-mask]";function _({main:c,elm:l,state:s,on:i,emit:v,dependencies:F,trigger:I}){var D;const{validations:p,masks:S}=F,g=(D=l.querySelector("input,select,textarea"))==null?void 0:D.form;let m=M(l);c(e=>{i("input","input, textarea, select",q),i("input",T,$),i("focus",o,K),i("input",o,b("input")),i("change",o,b("change")),i("blur",o,b("blur")),g.addEventListener("reset",P),g.addEventListener("submit",z),N()});const N=()=>{if(!p)throw new Error("<form-validation> - No validations provided in dependencies");const e=A();s.set(n=>n.form.fields=e)},A=()=>{const e={};return m.forEach(n=>e[n]=""),e},b=e=>n=>{const a=n.target,d=a.name,u=y(a,g),E=a.dataset.validation.split(/\s/),h=[],L=s.get();E.forEach(f=>{if(f in p){const{ok:B,message:C}=p[f](u,a,g);B||h.push(C)}}),h.length?e==="input"?(m.add(a.name),s.set(f=>{f.form.isValid=!1,L.form.errors[d]&&h[0]!=L.form.errors[d]&&(f.form.errors[d]=h[0])})):(e==="blur"||e==="change")&&(m.add(a.name),s.set(f=>{f.form.errors[d]=h[0],f.form.isValid=!1})):(m.delete(a.name),s.set(f=>{delete f.form.errors[d],m.size||(f.form.isValid=!0)}))},q=e=>{const{name:n}=e.target,a=y(e.target,g);s.set(d=>d.form.fields[n]=a)},z=e=>{e.preventDefault(),I("blur",o);const a=s.get().form.errors;if(Object.keys(a).length)v(`${t}:error`,{errors:a});else{const u=j(e.target);v(`${t}:submit`,k({},u))}},$=e=>{let n=e.target.value;const{mask:a}=e.target.dataset;a.split(/s/).forEach(u=>{if(u&&u in S){const E=S[u];n=E(n,e.target,e.target.form)}}),s.set(u=>u.form.fields[e.target.name]=n||"")},K=e=>{s.set(n=>n.form.touched[e.target.name]=!0)},P=()=>{m=M(l),s.set({form:O(k({},V.form),{fields:A()})})}}const V={form:{errors:{},fields:{},touched:{},isValid:!1}},j=c=>{const l=new FormData(c),s={};for(let[i,v]of l)s[i]=v;return{formData:l,data:s}},y=(c,l)=>{const{name:s,type:i}=c;return i=="checkbox"?c.checked?c.value:"":l[s].value},M=c=>{const l=new Set,s=c.querySelectorAll(o);return Array.from(s).forEach(i=>l.add(i.name)),l};r.default=_,r.model=V,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
