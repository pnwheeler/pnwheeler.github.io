import{s as z,f as m,a as k,g as _,h as x,d as f,c as w,j as p,i as C,u as i,F as J,v as q,x as K,l as M,m as j,k as N,r as D,E as Q,G as R}from"../chunks/scheduler.8d84c197.js";import{S as G,i as W,b as X,d as Y,m as Z,a as ee,t as te,e as se}from"../chunks/index.5e028736.js";import{e as F}from"../chunks/each.e59479a4.js";function U(c,e,n){const o=c.slice();return o[5]=e[n],o[7]=n,o}function V(c){let e,n=c[2][c[7]]+"",o;return{c(){e=m("span"),o=M(n),this.h()},l(t){e=_(t,"SPAN",{class:!0,style:!0});var r=x(e);o=j(r,n),r.forEach(f),this.h()},h(){p(e,"class","text-content svelte-1r7g0y9"),N(e,"--i",c[7]+1),N(e,"--r",c[1](-4,4)),N(e,"--t",c[1](-2,2)+"px"),D(e,"paused",c[0])},m(t,r){C(t,e,r),i(e,o)},p(t,r){r&1&&D(e,"paused",t[0])},d(t){t&&f(e)}}}function ae(c){let e,n,o,t,r,v,d=F(Array(c[2].length)),s=[];for(let l=0;l<d.length;l+=1)s[l]=V(U(c,d,l));return{c(){e=m("button"),n=m("div"),o=k(),t=m("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=_(l,"BUTTON",{id:!0,class:!0});var u=x(e);n=_(u,"DIV",{id:!0,class:!0}),x(n).forEach(f),o=w(u),t=_(u,"DIV",{class:!0});var a=x(t);for(let y=0;y<s.length;y+=1)s[y].l(a);a.forEach(f),u.forEach(f),this.h()},h(){p(n,"id","pattern"),p(n,"class","svelte-1r7g0y9"),p(t,"class","word svelte-1r7g0y9"),p(e,"id","intro"),p(e,"class","full-width svelte-1r7g0y9")},m(l,u){C(l,e,u),i(e,n),i(e,o),i(e,t);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);r||(v=J(e,"click",c[3]),r=!0)},p(l,[u]){if(u&7){d=F(Array(l[2].length));let a;for(a=0;a<d.length;a+=1){const y=U(l,d,a);s[a]?s[a].p(y,u):(s[a]=V(y),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=d.length}},i:q,o:q,d(l){l&&f(e),K(s,l),r=!1,v()}}}function le(c,e,n){const o=(s,l)=>s.split(l).map(u=>u+l),t=(s,l)=>Math.floor(Math.random()*(l-s)+s);let r=o("hello",""),v=!1;return[v,t,r,()=>{n(0,v=!v)}]}class ne extends G{constructor(e){super(),W(this,e,le,ae,z,{})}}function re(c){let e,n,o,t,r,v="Hey, my name's Patrick. I studied computer science at UMBC and am actively looking for an entry-level position...",d,s,l=`When I&#39;m not preoccupied with <em>trying-to-get-job</em>™, I like learning about <span>graphics</span>,
		<span>games</span>, and pretty much anything related to <span>media</span> in general.`,u,a,y="I wrote about a couple of projects and made some widgets &amp; <em>stuff</em>.",P,H,S,b,A,$,L,O,I;return n=new ne({}),{c(){e=k(),X(n.$$.fragment),o=k(),t=m("section"),r=m("p"),r.textContent=v,d=k(),s=m("p"),s.innerHTML=l,u=k(),a=m("p"),a.innerHTML=y,P=k(),H=m("hr"),S=k(),b=m("footer"),A=M("See "),$=m("a"),L=M("readme"),O=M(" for font attribution!"),this.h()},l(h){Q("svelte-1anpopb",document.head).forEach(f),e=w(h),Y(n.$$.fragment,h),o=w(h),t=_(h,"SECTION",{id:!0,class:!0});var g=x(t);r=_(g,"P",{"data-svelte-h":!0}),R(r)!=="svelte-1cm9qgj"&&(r.textContent=v),d=w(g),s=_(g,"P",{"data-svelte-h":!0}),R(s)!=="svelte-nzj9g7"&&(s.innerHTML=l),u=w(g),a=_(g,"P",{"data-svelte-h":!0}),R(a)!=="svelte-nn4y2j"&&(a.innerHTML=y),P=w(g),H=_(g,"HR",{class:!0}),S=w(g),b=_(g,"FOOTER",{class:!0});var T=x(b);A=j(T,"See "),$=_(T,"A",{href:!0,target:!0});var B=x($);L=j(B,"readme"),B.forEach(f),O=j(T," for font attribution!"),T.forEach(f),g.forEach(f),this.h()},h(){document.title="Home",p(H,"class","svelte-1542fgl"),p($,"href",oe),p($,"target","_blank"),p(b,"class","svelte-1542fgl"),p(t,"id","about"),p(t,"class","prose flow max-w svelte-1542fgl")},m(h,E){C(h,e,E),Z(n,h,E),C(h,o,E),C(h,t,E),i(t,r),i(t,d),i(t,s),i(t,u),i(t,a),i(t,P),i(t,H),i(t,S),i(t,b),i(b,A),i(b,$),i($,L),i(b,O),I=!0},p:q,i(h){I||(ee(n.$$.fragment,h),I=!0)},o(h){te(n.$$.fragment,h),I=!1},d(h){h&&(f(e),f(o),f(t)),se(n,h)}}}const oe="https://github.com/pnwheeler/pnwheeler.github.io?tab=readme-ov-file#pnwheelergithubio";class ue extends G{constructor(e){super(),W(this,e,null,re,z,{})}}export{ue as component};