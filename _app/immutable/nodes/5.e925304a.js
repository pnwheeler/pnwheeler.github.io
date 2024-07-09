import{s as $,K as ee,f as b,l as M,a as q,L as fe,g as E,h as w,m as V,d as p,c as D,M as ue,j as h,r as z,k as B,i as te,u as _,F as _e,n as G,o as ge,p as me,x as he,y as de}from"../chunks/scheduler.6d6d93c7.js";import{S as se,i as ae,b as le,d as ne,m as re,a as H,t as F,e as oe,c as pe,g as je}from"../chunks/index.15fe4709.js";import{e as Y}from"../chunks/each.e59479a4.js";import{g as ie,a as ce}from"../chunks/spread.8a54911c.js";import{T as ve}from"../chunks/Tags.5e34fb8c.js";import{d as ke}from"../chunks/stores.19d95db3.js";function be(l){let e,a,f,s,i,t,r,n,j,P,m,v,S,k,y,N,o,L,T,A,d,g,K,J;const O=[{tags:l[5]},l[11]];let X={};for(let c=0;c<O.length;c+=1)X=ee(X,O[c]);return d=new ve({props:X}),{c(){e=b("li"),a=b("span"),f=M("0"),s=M(l[6]),i=q(),t=b("div"),r=b("a"),n=M(l[1]),P=q(),m=b("span"),S=q(),k=b("span"),y=M(l[3]),N=q(),o=b("span"),L=new fe(!1),T=q(),A=b("div"),le(d.$$.fragment),this.h()},l(c){e=E(c,"LI",{class:!0,style:!0});var u=w(e);a=E(u,"SPAN",{class:!0});var I=w(a);f=V(I,"0"),s=V(I,l[6]),I.forEach(p),i=D(u),t=E(u,"DIV",{class:!0});var C=w(t);r=E(C,"A",{class:!0,href:!0});var Q=w(r);n=V(Q,l[1]),Q.forEach(p),P=D(C),m=E(C,"SPAN",{class:!0}),w(m).forEach(p),S=D(C),k=E(C,"SPAN",{class:!0});var R=w(k);y=V(R,l[3]),R.forEach(p),C.forEach(p),N=D(u),o=E(u,"SPAN",{class:!0});var U=w(o);L=ue(U,!1),U.forEach(p),T=D(u),A=E(u,"DIV",{class:!0});var W=w(A);ne(d.$$.fragment,W),W.forEach(p),u.forEach(p),this.h()},h(){h(a,"class","num vfont svelte-1rrgdsj"),h(r,"class","title-link svelte-1rrgdsj"),h(r,"href",j="/projects/"+l[2]),h(m,"class",v="sep "+l[0]+" svelte-1rrgdsj"),h(k,"class","date svelte-1rrgdsj"),h(t,"class","name-date svelte-1rrgdsj"),z(t,"overflow",l[10]),L.a=null,h(o,"class","summary svelte-1rrgdsj"),h(A,"class","tags svelte-1rrgdsj"),h(e,"class","project svelte-1rrgdsj"),B(e,"--i",l[6]),B(e,"--n",l[7]),z(e,"isClicked",l[9])},m(c,u){te(c,e,u),_(e,a),_(a,f),_(a,s),_(e,i),_(e,t),_(t,r),_(r,n),_(t,P),_(t,m),l[13](m),_(t,S),_(t,k),_(k,y),_(e,N),_(e,o),L.m(l[4],o),_(e,T),_(e,A),re(d,A,null),g=!0,K||(J=_e(r,"click",l[12]),K=!0)},p(c,[u]){(!g||u&64)&&G(s,c[6]),(!g||u&2)&&G(n,c[1]),(!g||u&4&&j!==(j="/projects/"+c[2]))&&h(r,"href",j),(!g||u&1&&v!==(v="sep "+c[0]+" svelte-1rrgdsj"))&&h(m,"class",v),(!g||u&8)&&G(y,c[3]),(!g||u&1024)&&z(t,"overflow",c[10]),(!g||u&16)&&L.p(c[4]);const I=u&2080?ie(O,[u&32&&{tags:c[5]},u&2048&&ce(c[11])]):{};d.$set(I),(!g||u&64)&&B(e,"--i",c[6]),(!g||u&128)&&B(e,"--n",c[7]),(!g||u&512)&&z(e,"isClicked",c[9])},i(c){g||(H(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){c&&p(e),l[13](null),oe(d),K=!1,J()}}}function Ee(l,e,a){let{direction:f}=e;const s={radius:4};let{title:i=""}=e,{slug:t=""}=e,{date:r=""}=e,{subtitle:n=""}=e,{tags:j=[""]}=e,{id:P}=e,{num_projects:m}=e,v,S=!1,k=!0;ge(async()=>{let o;const T=1600-600*((m-P)/m),A=-200+100*P;if(v&&f!="center"){const d={transform:"scaleX(1)",opacity:.5};o=v.animate([{opacity:0,offset:.1},{transform:d.transform,opacity:d.opacity}],{duration:T,easing:"cubic-bezier(0.77, 0, 0.175, 1)",fill:"forwards",delay:A}),o.onfinish=()=>{a(10,k=!1)}}else a(10,k=!1)});const y=()=>a(9,S=!0);function N(o){me[o?"unshift":"push"](()=>{v=o,a(8,v)})}return l.$$set=o=>{"direction"in o&&a(0,f=o.direction),"title"in o&&a(1,i=o.title),"slug"in o&&a(2,t=o.slug),"date"in o&&a(3,r=o.date),"subtitle"in o&&a(4,n=o.subtitle),"tags"in o&&a(5,j=o.tags),"id"in o&&a(6,P=o.id),"num_projects"in o&&a(7,m=o.num_projects)},[f,i,t,r,n,j,P,m,v,S,k,s,y,N]}class we extends se{constructor(e){super(),ae(this,e,Ee,be,$,{direction:0,title:1,slug:2,date:3,subtitle:4,tags:5,id:6,num_projects:7})}}function Z(l,e,a){const f=l.slice();return f[3]=e[a],f}function x(l){let e,a;const f=[{direction:l[1]},{num_projects:l[2]},l[3]];let s={};for(let i=0;i<f.length;i+=1)s=ee(s,f[i]);return e=new we({props:s}),{c(){le(e.$$.fragment)},l(i){ne(e.$$.fragment,i)},m(i,t){re(e,i,t),a=!0},p(i,t){const r=t&7?ie(f,[t&2&&{direction:i[1]},t&4&&{num_projects:i[2]},t&1&&ce(i[3])]):{};e.$set(r)},i(i){a||(H(e.$$.fragment,i),a=!0)},o(i){F(e.$$.fragment,i),a=!1},d(i){oe(e,i)}}}function Pe(l){let e,a,f=Y(l[0].projects),s=[];for(let t=0;t<f.length;t+=1)s[t]=x(Z(l,f,t));const i=t=>F(s[t],1,1,()=>{s[t]=null});return{c(){e=b("ol");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=E(t,"OL",{class:!0});var r=w(e);for(let n=0;n<s.length;n+=1)s[n].l(r);r.forEach(p),this.h()},h(){h(e,"class","projects max-w svelte-1rro4q1")},m(t,r){te(t,e,r);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null);a=!0},p(t,[r]){if(r&7){f=Y(t[0].projects);let n;for(n=0;n<f.length;n+=1){const j=Z(t,f,n);s[n]?(s[n].p(j,r),H(s[n],1)):(s[n]=x(j),s[n].c(),H(s[n],1),s[n].m(e,null))}for(je(),n=f.length;n<s.length;n+=1)i(n);pe()}},i(t){if(!a){for(let r=0;r<f.length;r+=1)H(s[r]);a=!0}},o(t){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)F(s[r]);a=!1},d(t){t&&p(e),he(s,t)}}}function Ae(l,e,a){let f;de(l,ke,t=>a(1,f=t));let{data:s}=e,i=s.projects.length;return l.$$set=t=>{"data"in t&&a(0,s=t.data)},[s,f,i]}class Ie extends se{constructor(e){super(),ae(this,e,Ae,Pe,$,{data:0})}}export{Ie as component};