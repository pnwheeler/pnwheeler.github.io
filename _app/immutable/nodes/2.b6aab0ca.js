import{s as y,a as j,e as b,E as v,d as c,c as S,i as _,y as C,o as k,A as M,f as P,g as I,h as T,j as E,B as G,C as N,D as R,z as w}from"../chunks/scheduler.1a83071e.js";import{S as z,i as L,a as f,t as d,c as O,f as q,h as A,g as D}from"../chunks/index.98f22588.js";import{f as Q,a as B}from"../chunks/index.6c0f9f0a.js";import{d as F}from"../chunks/stores.71faf325.js";let K=[{title:"Gif scrubber",slug:"gif-scrubber",subtitle:"video-as-gif component",date:"02-2024",tags:["Svelte","CSS","#web"]},{title:"Not iMessage",slug:"not-imessage",subtitle:"Toy iMessage emulator",date:"08-2023",tags:["CSS","Svelte","#web"]},{title:"Drug Generator",slug:"drug-generator",subtitle:"Character-level RNN",date:"04-2023",tags:["Python","TF/Keras","#agi"]},{title:"TRIMCROP",slug:"trim-crop",subtitle:"GUI for making video clips",date:"01-2023",tags:["ffmpeg","Qt6/QML","#desktop"]},{title:"Misc Graphics",slug:"misc-graphics",subtitle:"Image processing, rendering, etc.",date:"07-2022",tags:["C++","Python","#misc"]}];function U(){let s=1;return K.map(r=>({...r,id:s++,tags:r.tags.sort(Intl.Collator().compare)}))}const H=U(),J=()=>({projects:H.map(s=>({id:s.id,slug:s.slug,title:s.title,subtitle:s.subtitle,date:s.date,tags:s.tags}))}),x=Object.freeze(Object.defineProperty({__proto__:null,load:J},Symbol.toStringTag,{value:"Module"}));function h(s){let l,r,i,o;const a=s[5].default,e=M(a,s,s[4],null);return{c(){l=P("article"),e&&e.c(),this.h()},l(t){l=I(t,"ARTICLE",{class:!0});var n=T(l);e&&e.l(n),n.forEach(c),this.h()},h(){E(l,"class","flow project svelte-1qz04r6")},m(t,n){_(t,l,n),e&&e.m(l,null),o=!0},p(t,n){s=t,e&&e.p&&(!o||n&16)&&G(e,a,s,s[4],o?R(a,s[4],n,null):N(s[4]),null)},i(t){o||(f(e,t),t&&w(()=>{o&&(i&&i.end(1),r=q(l,Q,{y:s[1],duration:450,delay:350}),r.start())}),o=!0)},o(t){d(e,t),r&&r.invalidate(),t&&(i=A(l,B,{duration:300,delay:0})),o=!1},d(t){t&&c(l),e&&e.d(t),t&&i&&i.end()}}}function V(s){let l,r,i,o;document.title=l=s[2];let a=s[0]&&h(s);return{c(){r=j(),a&&a.c(),i=b()},l(e){v("svelte-1uo06u1",document.head).forEach(c),r=S(e),a&&a.l(e),i=b()},m(e,t){_(e,r,t),a&&a.m(e,t),_(e,i,t),o=!0},p(e,[t]){(!o||t&4)&&l!==(l=e[2])&&(document.title=l),e[0]?a?(a.p(e,t),t&1&&f(a,1)):(a=h(e),a.c(),f(a,1),a.m(i.parentNode,i)):a&&(D(),d(a,1,1,()=>{a=null}),O())},i(e){o||(f(a),o=!0)},o(e){d(a),o=!1},d(e){e&&(c(r),c(i)),a&&a.d(e)}}}function W(s,l,r){var p;let i,o;C(s,F,u=>r(6,o=u));let{$$slots:a={},$$scope:e}=l,{data:t}=l,n=!1;const m=t.projects.filter(u=>"/projects/"+u.slug==t.pathname);let g=8;return k(()=>{r(0,n=!0),o!=0&&r(1,g=0)}),s.$$set=u=>{"data"in u&&r(3,t=u.data),"$$scope"in u&&r(4,e=u.$$scope)},r(2,i=(p=m[0])!=null&&p.title?"Project - "+m[0].title:"Projects"),[n,g,i,t,e,a]}class ee extends z{constructor(l){super(),L(this,l,W,V,y,{data:3})}}export{ee as component,x as universal};
