(function(e,o){typeof exports=="object"&&typeof module!="undefined"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(e=typeof globalThis!="undefined"?globalThis:e||self,o(e.assets={}))})(this,function(e){"use strict";var m=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var l=(e,o)=>{var i={};for(var t in e)u.call(e,t)&&o.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&m)for(var t of m(e))o.indexOf(t)<0&&p.call(e,t)&&(i[t]=e[t]);return i};const o=({url:s})=>new Promise((d,c)=>{const n=document.createElement("link");n.rel="stylesheet",n.href=s,n.onload=d,n.onerror=c,document.head.appendChild(n)}),i=({url:s,async:d=!0})=>new Promise((c,n)=>{const r=document.createElement("script");r.src=s,r.async=d,r.onload=c,r.onerror=n,document.head.appendChild(r)}),t=c=>{var n=c,{url:s}=n,d=l(n,["url"]);return fetch(s,d).then(r=>({response:r,html:r.text()}))};e.importCss=o,e.importHtml=t,e.importJS=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});