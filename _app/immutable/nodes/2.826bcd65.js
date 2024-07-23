import{s as j,a as v,e as h,F as S,d as u,c as C,i as d,z as k,o as M,A as P,f as D,g as I,h as E,j as G,B as N,C as R,D as T,E as w}from"../chunks/scheduler.69e1f75a.js";import{S as O,i as q,a as f,t as m,c as z,f as A,h as L,g as B}from"../chunks/index.2af4a920.js";import{a as F,f as Q}from"../chunks/index.fcc3cfe7.js";import{d as U}from"../chunks/stores.f056bcdc.js";import{d as _}from"../chunks/stores.1ec5d1d2.js";let V=[{title:"Gif scrubber",slug:"gif-scrubber",subtitle:"Video-as-gif component",date:"02-2024",tags:["Svelte","CSS","#web"]},{title:"Not iMessage",slug:"not-imessage",subtitle:"Toy iMessage emulator",date:"08-2023",tags:["CSS","Svelte","#web"]},{title:"Drug Generator",slug:"drug-generator",subtitle:"Character-level RNN",date:"04-2023",tags:["Python","tf.keras","#ipynb"]},{title:"TRIMCROP",slug:"trim-crop",subtitle:"GUI for exporting video clips",date:"01-2023",tags:["ffmpeg","Qt6","#desktop"]},{title:"Misc Graphics",slug:"misc-graphics",subtitle:"Image processing, rendering, etc.",date:"07-2022",tags:["C++","Python","#misc"]}];function H(){let s=1;return V.map(r=>({...r,id:s++,tags:r.tags.sort(Intl.Collator().compare)}))}const J=H(),K=()=>({projects:J.map(s=>({id:s.id,slug:s.slug,title:s.title,subtitle:s.subtitle,date:s.date,tags:s.tags}))}),te=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function y(s){let l,r,i,o;const a=s[5].default,e=P(a,s,s[4],null);return{c(){l=D("article"),e&&e.c(),this.h()},l(t){l=I(t,"ARTICLE",{class:!0});var n=E(l);e&&e.l(n),n.forEach(u),this.h()},h(){G(l,"class","flow project prose svelte-eqhv4c")},m(t,n){d(t,l,n),e&&e.m(l,null),o=!0},p(t,n){s=t,e&&e.p&&(!o||n&16)&&N(e,a,s,s[4],o?T(a,s[4],n,null):R(s[4]),null)},i(t){o||(f(e,t),t&&w(()=>{o&&(i&&i.end(1),r=A(l,F,{y:s[1],duration:450,delay:350}),r.start())}),o=!0)},o(t){m(e,t),r&&r.invalidate(),t&&(i=L(l,Q,{duration:300,delay:0})),o=!1},d(t){t&&u(l),e&&e.d(t),t&&i&&i.end()}}}function W(s){let l,r,i,o;document.title=l=s[2];let a=s[0]&&y(s);return{c(){r=v(),a&&a.c(),i=h()},l(e){S("svelte-1uo06u1",document.head).forEach(u),r=C(e),a&&a.l(e),i=h()},m(e,t){d(e,r,t),a&&a.m(e,t),d(e,i,t),o=!0},p(e,[t]){(!o||t&4)&&l!==(l=e[2])&&(document.title=l),e[0]?a?(a.p(e,t),t&1&&f(a,1)):(a=y(e),a.c(),f(a,1),a.m(i.parentNode,i)):a&&(B(),m(a,1,1,()=>{a=null}),z())},i(e){o||(f(a),o=!0)},o(e){m(a),o=!1},d(e){e&&(u(r),u(i)),a&&a.d(e)}}}function X(s,l,r){var b;let i,o;k(s,U,c=>r(6,o=c));let{$$slots:a={},$$scope:e}=l,{data:t}=l,n=!1;const p=t.projects.filter(c=>"/projects/"+c.slug==t.pathname);let g=8;return M(()=>{o!=0?(r(1,g=0),o>0?_.setDirection("left"):_.setDirection("right")):_.setDirection("center"),r(0,n=!0)}),s.$$set=c=>{"data"in c&&r(3,t=c.data),"$$scope"in c&&r(4,e=c.$$scope)},r(2,i=(b=p[0])!=null&&b.title?"Project - "+p[0].title:"Projects"),[n,g,i,t,e,a]}class se extends O{constructor(l){super(),q(this,l,X,W,j,{data:3})}}export{se as component,te as universal};
