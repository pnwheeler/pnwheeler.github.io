import{s as j,a as S,e as h,E as v,d as c,c as C,i as d,y as M,o as k,A as P,f as D,g as I,h as T,j as E,B as G,C as N,D as R,z as w}from"../chunks/scheduler.8d84c197.js";import{S as L,i as O,a as f,t as m,c as z,f as A,h as Q,g as q}from"../chunks/index.5e028736.js";import{f as B,a as F}from"../chunks/index.cda2116a.js";import{d as K}from"../chunks/stores.0eb9cb15.js";import{d as _}from"../chunks/stores.60560602.js";let U=[{title:"Gif scrubber",slug:"gif-scrubber",subtitle:"Video-as-gif component",date:"02-2024",tags:["Svelte","CSS","#web"]},{title:"Not iMessage",slug:"not-imessage",subtitle:"Toy iMessage emulator",date:"08-2023",tags:["CSS","Svelte","#web"]},{title:"Drug Generator",slug:"drug-generator",subtitle:"Character-level RNN",date:"04-2023",tags:["Python","TF/Keras","#jupyter"]},{title:"TRIMCROP",slug:"trim-crop",subtitle:"GUI for exporting video clips",date:"01-2023",tags:["ffmpeg","Qt6/QML","#desktop"]},{title:"Misc Graphics",slug:"misc-graphics",subtitle:"Image processing, rendering, etc.",date:"07-2022",tags:["C++","Python","#misc"]}];function V(){let s=1;return U.map(r=>({...r,id:s++,tags:r.tags.sort(Intl.Collator().compare)}))}const H=V(),J=()=>({projects:H.map(s=>({id:s.id,slug:s.slug,title:s.title,subtitle:s.subtitle,date:s.date,tags:s.tags}))}),te=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));function y(s){let l,r,i,o;const a=s[5].default,e=P(a,s,s[4],null);return{c(){l=D("article"),e&&e.c(),this.h()},l(t){l=I(t,"ARTICLE",{class:!0});var n=T(l);e&&e.l(n),n.forEach(c),this.h()},h(){E(l,"class","flow project svelte-1dfb6up")},m(t,n){d(t,l,n),e&&e.m(l,null),o=!0},p(t,n){s=t,e&&e.p&&(!o||n&16)&&G(e,a,s,s[4],o?R(a,s[4],n,null):N(s[4]),null)},i(t){o||(f(e,t),t&&w(()=>{o&&(i&&i.end(1),r=A(l,B,{y:s[1],duration:450,delay:350}),r.start())}),o=!0)},o(t){m(e,t),r&&r.invalidate(),t&&(i=Q(l,F,{duration:300,delay:0})),o=!1},d(t){t&&c(l),e&&e.d(t),t&&i&&i.end()}}}function W(s){let l,r,i,o;document.title=l=s[2];let a=s[0]&&y(s);return{c(){r=S(),a&&a.c(),i=h()},l(e){v("svelte-1uo06u1",document.head).forEach(c),r=C(e),a&&a.l(e),i=h()},m(e,t){d(e,r,t),a&&a.m(e,t),d(e,i,t),o=!0},p(e,[t]){(!o||t&4)&&l!==(l=e[2])&&(document.title=l),e[0]?a?(a.p(e,t),t&1&&f(a,1)):(a=y(e),a.c(),f(a,1),a.m(i.parentNode,i)):a&&(q(),m(a,1,1,()=>{a=null}),z())},i(e){o||(f(a),o=!0)},o(e){m(a),o=!1},d(e){e&&(c(r),c(i)),a&&a.d(e)}}}function X(s,l,r){var b;let i,o;M(s,K,u=>r(6,o=u));let{$$slots:a={},$$scope:e}=l,{data:t}=l,n=!1;const p=t.projects.filter(u=>"/projects/"+u.slug==t.pathname);let g=8;return k(()=>{o!=0?(r(1,g=0),o>0?_.setDirection("left"):_.setDirection("right")):_.setDirection("center"),r(0,n=!0)}),s.$$set=u=>{"data"in u&&r(3,t=u.data),"$$scope"in u&&r(4,e=u.$$scope)},r(2,i=(b=p[0])!=null&&b.title?"Project - "+p[0].title:"Projects"),[n,g,i,t,e,a]}class se extends L{constructor(l){super(),O(this,l,X,W,j,{data:3})}}export{se as component,te as universal};
