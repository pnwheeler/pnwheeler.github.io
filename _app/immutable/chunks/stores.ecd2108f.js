import{S as i,Q as g}from"./scheduler.897fc3d6.js";import{d as S,w as p}from"./index.2bca8ac4.js";function w(t){const r=t-1;return r*r*r+1}function V(t,{delay:r=0,duration:a=400,easing:n=g}={}){const s=+getComputedStyle(t).opacity;return{delay:r,duration:a,easing:n,css:e=>`opacity: ${e*s}`}}function _(t,{delay:r=0,duration:a=400,easing:n=w,x:s=0,y:e=0,opacity:f=0}={}){const o=getComputedStyle(t),c=+o.opacity,m=o.transform==="none"?"":o.transform,y=c*(1-f),[b,d]=i(s),[l,v]=i(e);return{delay:r,duration:a,easing:n,css:(u,$)=>`
			transform: ${m} translate(${(1-u)*b}${d}, ${(1-u)*l}${v});
			opacity: ${c-y*$}`}}function x(){const t={prev:0,curr:0},{subscribe:r,set:a,update:n}=p(t);return{subscribe:r,setNewTab:s=>n(e=>(e.prev=e.curr,e.curr=s,e)),reset:()=>a({prev:0,curr:0})}}const T=x(),O=S(T,t=>t.curr-t.prev);function C(){const{subscribe:t,update:r}=p(0);return{subscribe:t,setTemperature:a=>r(n=>a)}}const Q=C();export{Q as a,V as b,w as c,O as d,_ as f,T as t};
