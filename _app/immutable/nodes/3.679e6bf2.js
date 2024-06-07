import{s as z,f,a as $,g as _,h as w,d as p,c as C,j as d,i as E,u as i,F as J,v as R,x as K,l as T,m as M,k as S,r as D,E as Q,G as N}from"../chunks/scheduler.8d84c197.js";import{S as G,i as W,b as X,d as Y,m as Z,a as ee,t as te,e as se}from"../chunks/index.5e028736.js";import{e as F}from"../chunks/each.e59479a4.js";function U(c,e,n){const r=c.slice();return r[5]=e[n],r[7]=n,r}function V(c){let e,n=c[2][c[7]]+"",r;return{c(){e=f("span"),r=T(n),this.h()},l(t){e=_(t,"SPAN",{class:!0,style:!0});var o=w(e);r=M(o,n),o.forEach(p),this.h()},h(){d(e,"class","text-content svelte-jose4q"),S(e,"--i",c[7]+1),S(e,"--r",c[1](-4,4)),S(e,"--t",c[1](-2,2)+"px"),D(e,"paused",c[0])},m(t,o){E(t,e,o),i(e,r)},p(t,o){o&1&&D(e,"paused",t[0])},d(t){t&&p(e)}}}function ae(c){let e,n,r,t,o,g,m=F(Array(c[2].length)),s=[];for(let l=0;l<m.length;l+=1)s[l]=V(U(c,m,l));return{c(){e=f("button"),n=f("div"),r=$(),t=f("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=_(l,"BUTTON",{id:!0,class:!0});var h=w(e);n=_(h,"DIV",{id:!0,class:!0}),w(n).forEach(p),r=C(h),t=_(h,"DIV",{class:!0});var a=w(t);for(let y=0;y<s.length;y+=1)s[y].l(a);a.forEach(p),h.forEach(p),this.h()},h(){d(n,"id","pattern"),d(n,"class","svelte-jose4q"),d(t,"class","word svelte-jose4q"),d(e,"id","intro"),d(e,"class","full-width svelte-jose4q")},m(l,h){E(l,e,h),i(e,n),i(e,r),i(e,t);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);o||(g=J(e,"click",c[3]),o=!0)},p(l,[h]){if(h&7){m=F(Array(l[2].length));let a;for(a=0;a<m.length;a+=1){const y=U(l,m,a);s[a]?s[a].p(y,h):(s[a]=V(y),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=m.length}},i:R,o:R,d(l){l&&p(e),K(s,l),o=!1,g()}}}function le(c,e,n){const r=(s,l)=>s.split(l).map(h=>h+l),t=(s,l)=>Math.floor(Math.random()*(l-s)+s);let o=r("hello",""),g=!1;return[g,t,o,()=>{n(0,g=!g)}]}class ne extends G{constructor(e){super(),W(this,e,le,ae,z,{})}}function oe(c){let e,n,r,t,o,g=`Hey, my name's Patrick. I studied computer science at UMBC and am actively looking for a full-time, entry-level
		position.`,m,s,l=`When I&#39;m not preoccupied with <em>trying-to-get-job</em>™, I like to learn about pretty much anything that involves
		visual media: <span>games</span>, <span>graphics</span> and <em>more recently</em>, <span>animation</span>.`,h,a,y="I wrote about a couple of projects and made some widgets &amp; <em>other stuff</em>.",P,j,q,b,A,k,L,O,H;return n=new ne({}),{c(){e=$(),X(n.$$.fragment),r=$(),t=f("section"),o=f("p"),o.textContent=g,m=$(),s=f("p"),s.innerHTML=l,h=$(),a=f("p"),a.innerHTML=y,P=$(),j=f("hr"),q=$(),b=f("footer"),A=T("Check out my "),k=f("a"),L=T("readme"),O=T(" for font attribution!"),this.h()},l(u){Q("svelte-1anpopb",document.head).forEach(p),e=C(u),Y(n.$$.fragment,u),r=C(u),t=_(u,"SECTION",{id:!0,class:!0});var v=w(t);o=_(v,"P",{"data-svelte-h":!0}),N(o)!=="svelte-j9umeg"&&(o.textContent=g),m=C(v),s=_(v,"P",{"data-svelte-h":!0}),N(s)!=="svelte-1bz2eji"&&(s.innerHTML=l),h=C(v),a=_(v,"P",{"data-svelte-h":!0}),N(a)!=="svelte-1agregp"&&(a.innerHTML=y),P=C(v),j=_(v,"HR",{class:!0}),q=C(v),b=_(v,"FOOTER",{class:!0});var I=w(b);A=M(I,"Check out my "),k=_(I,"A",{href:!0,target:!0});var B=w(k);L=M(B,"readme"),B.forEach(p),O=M(I," for font attribution!"),I.forEach(p),v.forEach(p),this.h()},h(){document.title="Home",d(j,"class","svelte-rd3ntu"),d(k,"href",re),d(k,"target","_blank"),d(b,"class","svelte-rd3ntu"),d(t,"id","about"),d(t,"class","prose flow max-w svelte-rd3ntu")},m(u,x){E(u,e,x),Z(n,u,x),E(u,r,x),E(u,t,x),i(t,o),i(t,m),i(t,s),i(t,h),i(t,a),i(t,P),i(t,j),i(t,q),i(t,b),i(b,A),i(b,k),i(k,L),i(b,O),H=!0},p:R,i(u){H||(ee(n.$$.fragment,u),H=!0)},o(u){te(n.$$.fragment,u),H=!1},d(u){u&&(p(e),p(r),p(t)),se(n,u)}}}const re="https://github.com/pnwheeler/pnwheeler.github.io?tab=readme-ov-file#pnwheelergithubio";class he extends G{constructor(e){super(),W(this,e,null,oe,z,{})}}export{he as component};
