import{s as y,a as S,e as b,y as C,d as c,c as j,i as _,z as v,o as I,B as P,f as k,g as M,h as O,j as z,C as E,D as G,E as N,A as R}from"../chunks/scheduler.897fc3d6.js";import{S as T,i as w,a as f,t as d,c as A,f as D,h as L,g as V}from"../chunks/index.f7b4bdff.js";import{f as q,d as B,b as F}from"../chunks/stores.1be25875.js";const K=[{title:"Gif scrubber",slug:"gif-scrubber",subtitle:"Video container for replacing gif",date:"02-2024",tags:["Svelte","CSS","#component"]},{title:"Not iMessage",slug:"not-imessage",subtitle:"iOS style clone to learn CSS",date:"08-2023",tags:["CSS","Svelte","#toy"]},{title:"Drug Generator",slug:"drug-generator",subtitle:"Character-level RNN",date:"04-2023",tags:["Python","TF/Keras","#agi"]},{title:"TRIMCROP",slug:"trim-crop",subtitle:"Small GUI wrapper around ffmpeg",date:"01-2023",tags:["Qt6","C++","#util"]},{title:"Image stabilization",slug:"image-stabilization",subtitle:"Script to automate frame alignment",date:"07-2022",tags:["Python","OpenCV","#util"]},{title:"Misc Graphics",slug:"misc-graphics",subtitle:"Image processing, rendering, etc.",date:"07-2021",tags:["C++","CImg","#misc"]}],Q=()=>({projects:K.map(s=>({slug:s.slug,title:s.title,subtitle:s.subtitle,tags:s.tags,date:s.date}))}),Y=Object.freeze(Object.defineProperty({__proto__:null,load:Q},Symbol.toStringTag,{value:"Module"}));function h(s){let l,i,o,r;const a=s[5].default,t=P(a,s,s[4],null);return{c(){l=k("article"),t&&t.c(),this.h()},l(e){l=M(e,"ARTICLE",{class:!0});var n=O(l);t&&t.l(n),n.forEach(c),this.h()},h(){z(l,"class","flow project svelte-x5m7lu")},m(e,n){_(e,l,n),t&&t.m(l,null),r=!0},p(e,n){s=e,t&&t.p&&(!r||n&16)&&E(t,a,s,s[4],r?N(a,s[4],n,null):G(s[4]),null)},i(e){r||(f(t,e),e&&R(()=>{r&&(o&&o.end(1),i=D(l,q,{y:s[1],duration:600,delay:300}),i.start())}),r=!0)},o(e){d(t,e),i&&i.invalidate(),e&&(o=L(l,F,{duration:250})),r=!1},d(e){e&&c(l),t&&t.d(e),e&&o&&o.end()}}}function U(s){let l,i,o,r;document.title=l=s[2];let a=s[0]&&h(s);return{c(){i=S(),a&&a.c(),o=b()},l(t){C("svelte-1uo06u1",document.head).forEach(c),i=j(t),a&&a.l(t),o=b()},m(t,e){_(t,i,e),a&&a.m(t,e),_(t,o,e),r=!0},p(t,[e]){(!r||e&4)&&l!==(l=t[2])&&(document.title=l),t[0]?a?(a.p(t,e),e&1&&f(a,1)):(a=h(t),a.c(),f(a,1),a.m(o.parentNode,o)):a&&(V(),d(a,1,1,()=>{a=null}),A())},i(t){r||(f(a),r=!0)},o(t){d(a),r=!1},d(t){t&&(c(i),c(o)),a&&a.d(t)}}}function H(s,l,i){var p;let o,r;v(s,B,u=>i(6,r=u));let{$$slots:a={},$$scope:t}=l,{data:e}=l,n=!1;const m=e.projects.filter(u=>"/projects/"+u.slug==e.pathname);let g=10;return I(()=>{i(0,n=!0),r!=0&&i(1,g=0)}),s.$$set=u=>{"data"in u&&i(3,e=u.data),"$$scope"in u&&i(4,t=u.$$scope)},i(2,o=(p=m[0])!=null&&p.title?"Project - "+m[0].title:"Projects"),[n,g,o,e,t,a]}class Z extends T{constructor(l){super(),w(this,l,H,U,y,{data:3})}}export{Z as component,Y as universal};