import{v as f,Z as w,O as m,s as q,_ as x}from"./scheduler.69e1f75a.js";const a=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=f){let n;const r=new Set;function u(t){if(q(e,t)&&(e=t,n)){const o=!a.length;for(const s of r)s[1](),a.push(s,e);if(o){for(let s=0;s<a.length;s+=2)a[s][0](a[s+1]);a.length=0}}}function l(t){u(t(e))}function b(t,o=f){const s=[t,o];return r.add(s),r.size===1&&(n=i(u,l)||f),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:u,update:l,subscribe:b}}function B(e,i,n){const r=!Array.isArray(e),u=r?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=i.length<2;return z(n,(b,t)=>{let o=!1;const s=[];let d=0,p=f;const _=()=>{if(d)return;p();const c=i(r?s[0]:s,b,t);l?b(c):p=x(c)?c:f},h=u.map((c,g)=>w(c,y=>{s[g]=y,d&=~(1<<g),o&&_()},()=>{d|=1<<g}));return o=!0,_(),function(){m(h),p(),o=!1}})}export{B as d,z as r,A as w};
