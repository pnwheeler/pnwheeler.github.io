import{s as j,a as S,e as h,E as v,d as u,c as C,i as d,y as M,o as k,A as P,f as D,g as I,h as T,j as E,B as G,C as N,D as R,z as w}from"../chunks/scheduler.8d84c197.js";import{S as L,i as O,a as f,t as m,c as z,f as A,h as Q,g as q}from"../chunks/index.5e028736.js";import{f as B,a as F}from"../chunks/index.cda2116a.js";import{d as K}from"../chunks/stores.09d83ec6.js";import{d as _}from"../chunks/stores.60560602.js";let U=[{title:"Gif scrubber",slug:"gif-scrubber",subtitle:"Video-as-gif component",date:"02-2024",tags:["Svelte","CSS","#web"]},{title:"Not iMessage",slug:"not-imessage",subtitle:"Toy iMessage emulator",date:"08-2023",tags:["CSS","Svelte","#web"]},{title:"Drug Generator",slug:"drug-generator",subtitle:"Character-level RNN",date:"04-2023",tags:["Python","TF/Keras","#jupyter"]},{title:"TRIMCROP",slug:"trim-crop",subtitle:"GUI for basic video edits",date:"01-2023",tags:["ffmpeg","Qt6/QML","#desktop"]},{title:"Misc Graphics",slug:"misc-graphics",subtitle:"Image processing, rendering, etc.",date:"07-2022",tags:["C++","Python","#misc"]}];function V(){let s=1;return U.map(r=>({...r,id:s++,tags:r.tags.sort(Intl.Collator().compare)}))}const H=V(),J=()=>({projects:H.map(s=>({id:s.id,slug:s.slug,title:s.title,subtitle:s.subtitle,date:s.date,tags:s.tags}))}),te=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));function y(s){let l,r,o,i;const a=s[5].default,e=P(a,s,s[4],null);return{c(){l=D("article"),e&&e.c(),this.h()},l(t){l=I(t,"ARTICLE",{class:!0});var n=T(l);e&&e.l(n),n.forEach(u),this.h()},h(){E(l,"class","flow project svelte-p3mii1")},m(t,n){d(t,l,n),e&&e.m(l,null),i=!0},p(t,n){s=t,e&&e.p&&(!i||n&16)&&G(e,a,s,s[4],i?R(a,s[4],n,null):N(s[4]),null)},i(t){i||(f(e,t),t&&w(()=>{i&&(o&&o.end(1),r=A(l,B,{y:s[1],duration:450,delay:350}),r.start())}),i=!0)},o(t){m(e,t),r&&r.invalidate(),t&&(o=Q(l,F,{duration:300,delay:0})),i=!1},d(t){t&&u(l),e&&e.d(t),t&&o&&o.end()}}}function W(s){let l,r,o,i;document.title=l=s[2];let a=s[0]&&y(s);return{c(){r=S(),a&&a.c(),o=h()},l(e){v("svelte-1uo06u1",document.head).forEach(u),r=C(e),a&&a.l(e),o=h()},m(e,t){d(e,r,t),a&&a.m(e,t),d(e,o,t),i=!0},p(e,[t]){(!i||t&4)&&l!==(l=e[2])&&(document.title=l),e[0]?a?(a.p(e,t),t&1&&f(a,1)):(a=y(e),a.c(),f(a,1),a.m(o.parentNode,o)):a&&(q(),m(a,1,1,()=>{a=null}),z())},i(e){i||(f(a),i=!0)},o(e){m(a),i=!1},d(e){e&&(u(r),u(o)),a&&a.d(e)}}}function X(s,l,r){var b;let o,i;M(s,K,c=>r(6,i=c));let{$$slots:a={},$$scope:e}=l,{data:t}=l,n=!1;const g=t.projects.filter(c=>"/projects/"+c.slug==t.pathname);let p=8;return k(()=>{i!=0?(r(1,p=0),i>0?_.setDirection("left"):_.setDirection("right")):_.setDirection("center"),r(0,n=!0)}),s.$$set=c=>{"data"in c&&r(3,t=c.data),"$$scope"in c&&r(4,e=c.$$scope)},r(2,o=(b=g[0])!=null&&b.title?"Project - "+g[0].title:"Projects"),[n,p,o,t,e,a]}class se extends L{constructor(l){super(),O(this,l,X,W,j,{data:3})}}export{se as component,te as universal};
