import{s as ce,f as p,a as E,g as h,h as b,d as f,c as k,j as m,r as R,i as A,u as l,F as pe,v as ne,x as he,o as me,l as $,m as C,k as Y,E as _e,G as Z,n as ee}from"../chunks/scheduler.15fae3ce.js";import{S as de,i as ue,b as ve,d as ge,m as ye,a as be,t as we,e as Ie}from"../chunks/index.884423c8.js";import{e as le}from"../chunks/each.e59479a4.js";import{i as oe}from"../chunks/utils.849c5a30.js";async function Ee({fetch:i}){const t="https://api.github.com/repos/pnwheeler/pnwheeler.github.io/branches/master",a={day:"",month:"",year:""},e=await(await i(t)).json();if(e){console.log(e);const r=e.commit.commit.author.date;let v=new Date(Date.parse(r));a.year=new Intl.DateTimeFormat("en",{year:"numeric"}).format(v),a.day=new Intl.DateTimeFormat("en",{day:"numeric"}).format(v),a.month=new Intl.DateTimeFormat("en",{month:"short"}).format(v)}return{dateInfo:a}}const Me=Object.freeze(Object.defineProperty({__proto__:null,load:Ee},Symbol.toStringTag,{value:"Module"}));function re(i,t,a){const c=i.slice();return c[5]=t[a],c[7]=a,c}function ie(i){let t,a=i[2][i[7]]+"",c;return{c(){t=p("span"),c=$(a),this.h()},l(e){t=h(e,"SPAN",{class:!0,style:!0});var r=b(t);c=C(r,a),r.forEach(f),this.h()},h(){m(t,"class","text-content svelte-g2ai0p"),Y(t,"--i",i[7]+1),Y(t,"--r",oe(-4,4)),Y(t,"--t",oe(-2,2)+"px"),R(t,"paused",i[0])},m(e,r){A(e,t,r),l(t,c)},p(e,r){r&1&&R(t,"paused",e[0])},d(e){e&&f(t)}}}function ke(i){let t,a,c,e,r,v,_=le(Array(i[2].length)),n=[];for(let o=0;o<_.length;o+=1)n[o]=ie(re(i,_,o));return{c(){t=p("button"),a=p("div"),c=E(),e=p("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=h(o,"BUTTON",{id:!0,class:!0});var u=b(t);a=h(u,"DIV",{id:!0,class:!0}),b(a).forEach(f),c=k(u),e=h(u,"DIV",{class:!0,"data-after":!0});var s=b(e);for(let g=0;g<n.length;g+=1)n[g].l(s);s.forEach(f),u.forEach(f),this.h()},h(){m(a,"id","pattern"),m(a,"class","svelte-g2ai0p"),R(a,"ready",i[1]),m(e,"class","word svelte-g2ai0p"),m(e,"data-after",fe),m(t,"id","intro"),m(t,"class","full-width svelte-g2ai0p")},m(o,u){A(o,t,u),l(t,a),l(t,c),l(t,e);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(e,null);r||(v=pe(t,"click",i[3]),r=!0)},p(o,[u]){if(u&2&&R(a,"ready",o[1]),u&5){_=le(Array(o[2].length));let s;for(s=0;s<_.length;s+=1){const g=re(o,_,s);n[s]?n[s].p(g,u):(n[s]=ie(g),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=_.length}},i:ne,o:ne,d(o){o&&f(t),he(n,o),r=!1,v()}}}let fe="hello";function $e(i,t,a){let e=((n,o)=>n.split(o).map(u=>u+o))(fe,""),r=!1;const v=()=>{a(0,r=!r)};let _=!1;return me(()=>{a(1,_=!0)}),[r,_,e,v]}class Ce extends de{constructor(t){super(),ue(this,t,$e,ke,ce,{})}}function Pe(i){let t,a,c,e,r,v=`Hey, my name's Patrick. I studied computer science at UMBC and am actively looking for a full-time, entry-level
		position.`,_,n,o=`When I&#39;m not busy <em>trying-to-get-job</em>™, I like learning about anything that
		involves visual media: like <span>games</span>, <span>graphics</span> and (<em>more recently</em>) the <span>web and UI</span>.`,u,s,g,x,te="other stuff",B,P,L,V,q,G,W,D,T,J,w,M=i[0].dateInfo.day+"",F,K,O=i[0].dateInfo.month+"",N,Q,U=i[0].dateInfo.year+"",z,j;return a=new Ce({}),{c(){t=E(),ve(a.$$.fragment),c=E(),e=p("section"),r=p("p"),r.textContent=v,_=E(),n=p("p"),n.innerHTML=o,u=E(),s=p("p"),g=$("I wrote about a couple of projects and made some widgets & "),x=p("em"),x.textContent=te,B=$(", Please see the "),P=p("a"),L=$("readme"),V=$(" for font attribution/credits!"),q=E(),G=p("hr"),W=E(),D=p("footer"),T=p("p"),J=$("Updated on "),w=p("span"),F=$(M),K=E(),N=$(O),Q=E(),z=$(U),this.h()},l(d){_e("svelte-1anpopb",document.head).forEach(f),t=k(d),ge(a.$$.fragment,d),c=k(d),e=h(d,"SECTION",{id:!0,class:!0});var y=b(e);r=h(y,"P",{"data-svelte-h":!0}),Z(r)!=="svelte-j9umeg"&&(r.textContent=v),_=k(y),n=h(y,"P",{class:!0,"data-svelte-h":!0}),Z(n)!=="svelte-cch6oz"&&(n.innerHTML=o),u=k(y),s=h(y,"P",{});var H=b(s);g=C(H,"I wrote about a couple of projects and made some widgets & "),x=h(H,"EM",{"data-svelte-h":!0}),Z(x)!=="svelte-3z23om"&&(x.textContent=te),B=C(H,", Please see the "),P=h(H,"A",{href:!0,target:!0});var ae=b(P);L=C(ae,"readme"),ae.forEach(f),V=C(H," for font attribution/credits!"),H.forEach(f),q=k(y),G=h(y,"HR",{}),W=k(y),D=h(y,"FOOTER",{class:!0});var se=b(D);T=h(se,"P",{class:!0});var X=b(T);J=C(X,"Updated on "),w=h(X,"SPAN",{});var S=b(w);F=C(S,M),K=k(S),N=C(S,O),Q=k(S),z=C(S,U),S.forEach(f),X.forEach(f),se.forEach(f),y.forEach(f),this.h()},h(){document.title="Home",m(n,"class","side-note svelte-46rivc"),m(P,"href",Te),m(P,"target","_blank"),m(T,"class","build-date svelte-46rivc"),m(D,"class","svelte-46rivc"),m(e,"id","about"),m(e,"class","flow max-w svelte-46rivc")},m(d,I){A(d,t,I),ye(a,d,I),A(d,c,I),A(d,e,I),l(e,r),l(e,_),l(e,n),l(e,u),l(e,s),l(s,g),l(s,x),l(s,B),l(s,P),l(P,L),l(s,V),l(e,q),l(e,G),l(e,W),l(e,D),l(D,T),l(T,J),l(T,w),l(w,F),l(w,K),l(w,N),l(w,Q),l(w,z),j=!0},p(d,[I]){(!j||I&1)&&M!==(M=d[0].dateInfo.day+"")&&ee(F,M),(!j||I&1)&&O!==(O=d[0].dateInfo.month+"")&&ee(N,O),(!j||I&1)&&U!==(U=d[0].dateInfo.year+"")&&ee(z,U)},i(d){j||(be(a.$$.fragment,d),j=!0)},o(d){we(a.$$.fragment,d),j=!1},d(d){d&&(f(t),f(c),f(e)),Ie(a,d)}}}const Te="https://github.com/pnwheeler/pnwheeler.github.io?tab=readme-ov-file#pnwheelergithubio";function je(i,t,a){let{data:c}=t;return i.$$set=e=>{"data"in e&&a(0,c=e.data)},[c]}class Oe extends de{constructor(t){super(),ue(this,t,je,Pe,ce,{data:0})}}export{Oe as component,Me as universal};
