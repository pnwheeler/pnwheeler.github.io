import{s as S,f as _,l as d,a as x,g as f,h as g,m as h,d as u,c as y,i as m,u as v,n as $,v as E,y as q}from"../chunks/scheduler.1df3c48e.js";import{S as C,i as H}from"../chunks/index.1225a4fa.js";import{d as P}from"../chunks/singletons.ed35b8d1.js";const j=()=>{const s=P;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return j().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=d(r),n=x(),i=_("p"),l=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=f(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return q(s,k,n=>r(0,o=n)),[o]}let F=class extends C{constructor(t){super(),H(this,t,z,w,S,{})}};export{F as component};
