import{s as J,f as p,a as y,g as _,h as k,d,c as C,j as v,i as P,u as r,F as X,v as L,x as Y,l as j,m as A,k as F,r as q,E as Z,G as M}from"../chunks/scheduler.1a83071e.js";import{S as K,i as Q,b as ee,d as te,m as se,a as le,t as ne,e as ae}from"../chunks/index.98f22588.js";import{e as z}from"../chunks/each.e59479a4.js";function G(c,e,a){const i=c.slice();return i[5]=e[a],i[7]=a,i}function W(c){let e,a=c[2][c[7]]+"",i;return{c(){e=p("span"),i=j(a),this.h()},l(t){e=_(t,"SPAN",{class:!0,style:!0});var o=k(e);i=A(o,a),o.forEach(d),this.h()},h(){v(e,"class","text-content svelte-duxujt"),F(e,"--i",c[7]+1),F(e,"--r",c[1](-4,4)+"deg"),F(e,"--t",c[1](-2,2)+"px"),q(e,"paused",c[0])},m(t,o){P(t,e,o),r(e,i)},p(t,o){o&1&&q(e,"paused",t[0])},d(t){t&&d(e)}}}function oe(c){let e,a,i,t,o,g,m=z(Array(c[2].length)),s=[];for(let n=0;n<m.length;n+=1)s[n]=W(G(c,m,n));return{c(){e=p("button"),a=p("div"),i=y(),t=p("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=_(n,"BUTTON",{id:!0,class:!0});var h=k(e);a=_(h,"DIV",{id:!0,class:!0}),k(a).forEach(d),i=C(h),t=_(h,"DIV",{class:!0});var l=k(t);for(let b=0;b<s.length;b+=1)s[b].l(l);l.forEach(d),h.forEach(d),this.h()},h(){v(a,"id","pattern"),v(a,"class","svelte-duxujt"),v(t,"class","word svelte-duxujt"),v(e,"id","intro"),v(e,"class","full-width svelte-duxujt")},m(n,h){P(n,e,h),r(e,a),r(e,i),r(e,t);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(t,null);o||(g=X(e,"click",c[3]),o=!0)},p(n,[h]){if(h&7){m=z(Array(n[2].length));let l;for(l=0;l<m.length;l+=1){const b=G(n,m,l);s[l]?s[l].p(b,h):(s[l]=W(b),s[l].c(),s[l].m(t,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=m.length}},i:L,o:L,d(n){n&&d(e),Y(s,n),o=!1,g()}}}function re(c,e,a){const i=(s,n)=>s.split(n).map(h=>h+n),t=(s,n)=>Math.floor(Math.random()*(n-s)+s);let o=i("hello",""),g=!1;return[g,t,o,()=>{a(0,g=!g)}]}class ie extends K{constructor(e){super(),Q(this,e,re,oe,J,{})}}function ce(c){let e,a,i,t,o,g="Hey, my name's Patrick.",m,s,n="I studied computer science at UMBC and am actively looking for an entry-level position.",h,l,b=`When I&#39;m not busy<s>sending my resume off into the void</s>, I like to learn about <span>graphics</span>,
		<span>games</span>, and digital <span>media</span> in general.`,T,$,U="I wrote about a couple of projects and made some components.",R,D,O,x,S,E,N,B,I;return a=new ie({}),{c(){e=y(),ee(a.$$.fragment),i=y(),t=p("section"),o=p("p"),o.textContent=g,m=y(),s=p("p"),s.textContent=n,h=y(),l=p("p"),l.innerHTML=b,T=y(),$=p("p"),$.textContent=U,R=y(),D=p("hr"),O=y(),x=p("footer"),S=j("Please see the "),E=p("a"),N=j("README"),B=j(" for font/other attribution!"),this.h()},l(u){Z("svelte-1anpopb",document.head).forEach(d),e=C(u),te(a.$$.fragment,u),i=C(u),t=_(u,"SECTION",{id:!0,class:!0});var f=k(t);o=_(f,"P",{"data-svelte-h":!0}),M(o)!=="svelte-1kwwcgz"&&(o.textContent=g),m=C(f),s=_(f,"P",{"data-svelte-h":!0}),M(s)!=="svelte-11rt10b"&&(s.textContent=n),h=C(f),l=_(f,"P",{"data-svelte-h":!0}),M(l)!=="svelte-ekc05b"&&(l.innerHTML=b),T=C(f),$=_(f,"P",{"data-svelte-h":!0}),M($)!=="svelte-d3c6gb"&&($.textContent=U),R=C(f),D=_(f,"HR",{}),O=C(f),x=_(f,"FOOTER",{class:!0});var H=k(x);S=A(H,"Please see the "),E=_(H,"A",{href:!0,target:!0});var V=k(E);N=A(V,"README"),V.forEach(d),B=A(H," for font/other attribution!"),H.forEach(d),f.forEach(d),this.h()},h(){document.title="Home",v(E,"href",ue),v(E,"target","_blank"),v(x,"class","svelte-1i9v5t9"),v(t,"id","about"),v(t,"class","flow max-w svelte-1i9v5t9")},m(u,w){P(u,e,w),se(a,u,w),P(u,i,w),P(u,t,w),r(t,o),r(t,m),r(t,s),r(t,h),r(t,l),r(t,T),r(t,$),r(t,R),r(t,D),r(t,O),r(t,x),r(x,S),r(x,E),r(E,N),r(x,B),I=!0},p:L,i(u){I||(le(a.$$.fragment,u),I=!0)},o(u){ne(a.$$.fragment,u),I=!1},d(u){u&&(d(e),d(i),d(t)),ae(a,u)}}}const ue="https://github.com/pnwheeler/pnwheeler.github.io?tab=readme-ov-file#pnwheelergithubio";class pe extends K{constructor(e){super(),Q(this,e,null,ce,J,{})}}export{pe as component};
