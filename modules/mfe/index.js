(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e.mfe={}))})(this,function(e){"use strict";const t={load(p){p.forEach(({name:h,target:y,url:l})=>{const a=document.querySelector(y),u=document.createElement("base"),n=document.createElement("link"),o=document.createElement("script");fetch(l).then(c=>c.text()).then(c=>{const d=[],r=new DOMParser().parseFromString(c,"text/html");u.href=l,r.head.appendChild(u);const m=r.querySelector("link[data-mfe]"),f=r.querySelector("script[data-mfe]"),S=r.body.querySelector(h);if(a.innerHTML=S.outerHTML,m&&(n.rel="stylesheet",n.href=m.href,document.head.appendChild(n),d.push(new Promise((s,i)=>{n.onload=s,n.onerror=i}))),f){const s=f.src;o.src=s,document.head.appendChild(o),d.push(new Promise((i,b)=>{o.onload=i,o.onerror=b}))}Promise.allSettled(d).then(s=>a.dataset.mfeloaded=!0).catch(console.error)})})}};e.default=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});