import{s as y,a as j,e as b,E as S,d as c,c as v,i as _,y as C,o as k,A as M,f as P,g as T,h as E,j as G,B as I,C as N,D as O,z as R}from"../chunks/scheduler.1df3c48e.js";import{S as w,i as L,a as f,t as d,c as z,f as A,h as D,g as Q}from"../chunks/index.1225a4fa.js";import{f as q,d as B,c as F}from"../chunks/stores.6f2f6858.js";const K=[{title:"Gif scrubber",slug:"gif-scrubber",subtitle:"mp4-as-gif component",date:"02-2024",tags:["Svelte","CSS","#web"]},{title:"Not iMessage",slug:"not-imessage",subtitle:"Toy iOS style emulator",date:"08-2023",tags:["CSS","Svelte","#web"]},{title:"Drug Generator",slug:"drug-generator",subtitle:"Character-level RNN",date:"04-2023",tags:["Python","TF/Keras","#agi"]},{title:"TRIMCROP",slug:"trim-crop",subtitle:"GUI for small video edits",date:"01-2023",tags:["Qt6/QML","ffmpeg","#desktop"]},{title:"Misc Graphics",slug:"misc-graphics",subtitle:"Image processing, rendering, etc.",date:"07-2022",tags:["C++","Python","#misc"]}],U=()=>({projects:K.map(a=>({slug:a.slug,title:a.title,subtitle:a.subtitle,tags:a.tags,date:a.date}))}),Y=Object.freeze(Object.defineProperty({__proto__:null,load:U},Symbol.toStringTag,{value:"Module"}));function h(a){let l,o,i,r;const s=a[5].default,e=M(s,a,a[4],null);return{c(){l=P("article"),e&&e.c(),this.h()},l(t){l=T(t,"ARTICLE",{class:!0});var n=E(l);e&&e.l(n),n.forEach(c),this.h()},h(){G(l,"class","flow project svelte-ysxd27")},m(t,n){_(t,l,n),e&&e.m(l,null),r=!0},p(t,n){a=t,e&&e.p&&(!r||n&16)&&I(e,s,a,a[4],r?O(s,a[4],n,null):N(a[4]),null)},i(t){r||(f(e,t),t&&R(()=>{r&&(i&&i.end(1),o=A(l,q,{y:a[1],duration:450,delay:400}),o.start())}),r=!0)},o(t){d(e,t),o&&o.invalidate(),t&&(i=D(l,F,{duration:300,delay:0})),r=!1},d(t){t&&c(l),e&&e.d(t),t&&i&&i.end()}}}function H(a){let l,o,i,r;document.title=l=a[2];let s=a[0]&&h(a);return{c(){o=j(),s&&s.c(),i=b()},l(e){S("svelte-1uo06u1",document.head).forEach(c),o=v(e),s&&s.l(e),i=b()},m(e,t){_(e,o,t),s&&s.m(e,t),_(e,i,t),r=!0},p(e,[t]){(!r||t&4)&&l!==(l=e[2])&&(document.title=l),e[0]?s?(s.p(e,t),t&1&&f(s,1)):(s=h(e),s.c(),f(s,1),s.m(i.parentNode,i)):s&&(Q(),d(s,1,1,()=>{s=null}),z())},i(e){r||(f(s),r=!0)},o(e){d(s),r=!1},d(e){e&&(c(o),c(i)),s&&s.d(e)}}}function J(a,l,o){var p;let i,r;C(a,B,u=>o(6,r=u));let{$$slots:s={},$$scope:e}=l,{data:t}=l,n=!1;const m=t.projects.filter(u=>"/projects/"+u.slug==t.pathname);let g=8;return k(()=>{o(0,n=!0),r!=0&&o(1,g=0)}),a.$$set=u=>{"data"in u&&o(3,t=u.data),"$$scope"in u&&o(4,e=u.$$scope)},o(2,i=(p=m[0])!=null&&p.title?"Project - "+m[0].title:"Projects"),[n,g,i,t,e,s]}class Z extends w{constructor(l){super(),L(this,l,J,H,y,{data:3})}}export{Z as component,Y as universal};
