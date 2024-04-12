import{s as J,f as p,a as y,g as _,h as k,d as f,c as C,j as v,i as P,u as r,F as X,v as F,x as Y,l as H,m as T,k as B,r as V,E as Z,G as A}from"../chunks/scheduler.005f6bd5.js";import{S as K,i as Q,b as ee,d as te,m as se,a as ae,t as le,e as ne}from"../chunks/index.e39f31b9.js";import{e as G}from"../chunks/each.e59479a4.js";function W(c,e,n){const i=c.slice();return i[5]=e[n],i[7]=n,i}function z(c){let e,n=c[2][c[7]]+"",i;return{c(){e=p("span"),i=H(n),this.h()},l(t){e=_(t,"SPAN",{class:!0,style:!0});var o=k(e);i=T(o,n),o.forEach(f),this.h()},h(){v(e,"class","text-content svelte-2feqd3"),B(e,"--i",c[7]+1),B(e,"--r",c[1](-4,4)+"deg"),B(e,"--t",c[1](-3,3)+"px"),V(e,"paused",c[0])},m(t,o){P(t,e,o),r(e,i)},p(t,o){o&1&&V(e,"paused",t[0])},d(t){t&&f(e)}}}function oe(c){let e,n,i,t,o,g,m=G(Array(c[2].length)),s=[];for(let l=0;l<m.length;l+=1)s[l]=z(W(c,m,l));return{c(){e=p("button"),n=p("div"),i=y(),t=p("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=_(l,"BUTTON",{id:!0,class:!0});var u=k(e);n=_(u,"DIV",{id:!0,class:!0}),k(n).forEach(f),i=C(u),t=_(u,"DIV",{class:!0});var a=k(t);for(let b=0;b<s.length;b+=1)s[b].l(a);a.forEach(f),u.forEach(f),this.h()},h(){v(n,"id","pattern"),v(n,"class","svelte-2feqd3"),v(t,"class","word svelte-2feqd3"),v(e,"id","intro"),v(e,"class","full-width svelte-2feqd3")},m(l,u){P(l,e,u),r(e,n),r(e,i),r(e,t);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);o||(g=X(e,"click",c[3]),o=!0)},p(l,[u]){if(u&7){m=G(Array(l[2].length));let a;for(a=0;a<m.length;a+=1){const b=W(l,m,a);s[a]?s[a].p(b,u):(s[a]=z(b),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=m.length}},i:F,o:F,d(l){l&&f(e),Y(s,l),o=!1,g()}}}function re(c,e,n){const i=(s,l)=>s.split(l).map(u=>u+l),t=(s,l)=>Math.floor(Math.random()*(l-s)+s);let o=i("hello",""),g=!1;return[g,t,o,()=>{n(0,g=!g)}]}class ie extends K{constructor(e){super(),Q(this,e,re,oe,J,{})}}function ce(c){let e,n,i,t,o,g="Hey! My name's Patrick.",m,s,l="I studied computer science at UMBC and am actively looking for an entry-level position.",u,a,b=`When I&#39;m not busy<s>begging AST gods for mercy</s>, I like to learn about <span>graphics</span>,
		<span>games</span>, and digital <span>media</span> in general.`,q,$,L="I wrote about a couple of projects and made a bunch of components.",R,S,j,x,D,E,O,N,I;return n=new ie({}),{c(){e=y(),ee(n.$$.fragment),i=y(),t=p("section"),o=p("p"),o.textContent=g,m=y(),s=p("p"),s.textContent=l,u=y(),a=p("p"),a.innerHTML=b,q=y(),$=p("p"),$.textContent=L,R=y(),S=p("hr"),j=y(),x=p("footer"),D=H("Please see the "),E=p("a"),O=H("README"),N=H(" for font/other attribution!"),this.h()},l(h){Z("svelte-1anpopb",document.head).forEach(f),e=C(h),te(n.$$.fragment,h),i=C(h),t=_(h,"SECTION",{id:!0,class:!0});var d=k(t);o=_(d,"P",{"data-svelte-h":!0}),A(o)!=="svelte-tua0yi"&&(o.textContent=g),m=C(d),s=_(d,"P",{"data-svelte-h":!0}),A(s)!=="svelte-11rt10b"&&(s.textContent=l),u=C(d),a=_(d,"P",{"data-svelte-h":!0}),A(a)!=="svelte-bi0c35"&&(a.innerHTML=b),q=C(d),$=_(d,"P",{"data-svelte-h":!0}),A($)!=="svelte-8eidkp"&&($.textContent=L),R=C(d),S=_(d,"HR",{}),j=C(d),x=_(d,"FOOTER",{class:!0});var M=k(x);D=T(M,"Please see the "),E=_(M,"A",{href:!0,target:!0});var U=k(E);O=T(U,"README"),U.forEach(f),N=T(M," for font/other attribution!"),M.forEach(f),d.forEach(f),this.h()},h(){document.title="Home",v(E,"href",he),v(E,"target","_blank"),v(x,"class","svelte-xmxjta"),v(t,"id","about"),v(t,"class","flow max-w svelte-xmxjta")},m(h,w){P(h,e,w),se(n,h,w),P(h,i,w),P(h,t,w),r(t,o),r(t,m),r(t,s),r(t,u),r(t,a),r(t,q),r(t,$),r(t,R),r(t,S),r(t,j),r(t,x),r(x,D),r(x,E),r(E,O),r(x,N),I=!0},p:F,i(h){I||(ae(n.$$.fragment,h),I=!0)},o(h){le(n.$$.fragment,h),I=!1},d(h){h&&(f(e),f(i),f(t)),ne(n,h)}}}const he="https://github.com/pnwheeler/pnwheeler.github.io?tab=readme-ov-file#pnwheelergithubio";class pe extends K{constructor(e){super(),Q(this,e,null,ce,J,{})}}export{pe as component};