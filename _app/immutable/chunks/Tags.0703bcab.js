import{s as W,f as b,g as v,h as y,d as f,j as h,k as _,i as k,v as d,x as w,l as S,m as T,u as E,n as j}from"./scheduler.67356eb3.js";import{e as u}from"./each.e59479a4.js";import{S as q,i as A}from"./index.258dbbc1.js";function g(n,e,s){const i=n.slice();return i[5]=e[s],i}function m(n){let e,s=n[5]+"",i,r;return{c(){e=b("span"),i=S(s),this.h()},l(l){e=v(l,"SPAN",{class:!0,"data-type":!0});var t=y(e);i=T(t,s),t.forEach(f),this.h()},h(){h(e,"class","tag pseudo-border vfont svelte-17yni25"),h(e,"data-type",r=n[5])},m(l,t){k(l,e,t),E(e,i)},p(l,t){t&1&&s!==(s=l[5]+"")&&j(i,s),t&1&&r!==(r=l[5])&&h(e,"data-type",r)},d(l){l&&f(e)}}}function C(n){let e,s=`${n[2]}em`,i=`${n[1]}em`,r=u(n[0]),l=[];for(let t=0;t<r.length;t+=1)l[t]=m(g(n,r,t));return{c(){e=b("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var o=y(e);for(let a=0;a<l.length;a+=1)l[a].l(o);o.forEach(f),this.h()},h(){h(e,"class","tags svelte-17yni25"),_(e,"--color",n[3]),_(e,"--bg",n[4]),_(e,"--border-w",s),_(e,"--radius",i)},m(t,o){k(t,e,o);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(t,[o]){if(o&1){r=u(t[0]);let a;for(a=0;a<r.length;a+=1){const c=g(t,r,a);l[a]?l[a].p(c,o):(l[a]=m(c),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=r.length}o&8&&_(e,"--color",t[3]),o&16&&_(e,"--bg",t[4]),o&4&&s!==(s=`${t[2]}em`)&&_(e,"--border-w",s),o&2&&i!==(i=`${t[1]}em`)&&_(e,"--radius",i)},i:d,o:d,d(t){t&&f(e),w(l,t)}}}function D(n,e,s){let{tags:i}=e,{radius:r=4}=e,{borderWidth:l=0}=e,{color:t="black"}=e,{bg:o="var(--slate-blue-dim)"}=e;return n.$$set=a=>{"tags"in a&&s(0,i=a.tags),"radius"in a&&s(1,r=a.radius),"borderWidth"in a&&s(2,l=a.borderWidth),"color"in a&&s(3,t=a.color),"bg"in a&&s(4,o=a.bg)},[i,r,l,t,o]}class V extends q{constructor(e){super(),A(this,e,D,C,W,{tags:0,radius:1,borderWidth:2,color:3,bg:4})}}export{V as T};
