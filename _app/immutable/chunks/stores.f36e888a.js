import{d as n,w as s}from"./index.0b78b3a7.js";function o(){const e={prev:0,curr:0},{subscribe:r,set:a,update:c}=s(e);return{subscribe:r,setNewTab:u=>c(t=>(t.prev=t.curr,t.curr=u,t)),reset:()=>a({prev:0,curr:0})}}const p=o(),v=n(p,e=>e.curr-e.prev);function b(){const{subscribe:e,update:r}=s(0);return{subscribe:e,setTemperature:a=>r(c=>a)}}const d=b();function f(){const{subscribe:e,set:r}=s(!1);return{subscribe:e,on:()=>r(!0),off:()=>r(!1)}}const m=f();export{d as a,v as d,p as t,m as u};
