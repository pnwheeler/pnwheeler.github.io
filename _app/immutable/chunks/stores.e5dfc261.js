import{d as n,w as s}from"./index.dd68086b.js";function o(){const e={prev:0,curr:0},{subscribe:r,set:t,update:c}=s(e);return{subscribe:r,setNewTab:u=>c(a=>(a.prev=a.curr,a.curr=u,a)),reset:()=>t({prev:0,curr:0})}}const p=o(),d=n(p,e=>e.curr-e.prev);function b(){const{subscribe:e,update:r}=s(!1);return{subscribe:e,setFallback:t=>r(c=>t)}}const f=b();function i(){const{subscribe:e,update:r}=s(0);return{subscribe:e,setTemperature:t=>r(c=>t)}}const m=i();export{m as a,d,p as t,f as u};
