import{s as $e,K as de,f as o,a as h,g as c,h as V,c as g,d as s,G as S,j as _,z as xe,k as ve,i as l,u as v,H as ke,l as R,m as D}from"../chunks/scheduler.8d84c197.js";import{S as we,i as be,b as K,d as J,m as Q,a as W,t as X,e as Y}from"../chunks/index.5e028736.js";import{G as me}from"../chunks/Gif.a997007a.js";import{g as pe,a as fe}from"../chunks/spread.8a54911c.js";import{I as Ce}from"../chunks/Img.76ba46da.js";function Me(x){let n,r,i,y,d,f,$,w,A,T,m,U="A screenshot and some animations from the keyboard input and message thread areas.",H;const k=[x[1]];let B={};for(let t=0;t<k.length;t+=1)B=de(B,k[t]);i=new Ce({props:B});const j=[x[2]];let E={};for(let t=0;t<j.length;t+=1)E=de(E,j[t]);f=new me({props:E});const L=[x[3]];let C={};for(let t=0;t<L.length;t+=1)C=de(C,L[t]);return w=new me({props:C}),{c(){n=o("figure"),r=o("div"),K(i.$$.fragment),y=h(),d=o("div"),K(f.$$.fragment),$=h(),K(w.$$.fragment),T=h(),m=o("figcaption"),m.textContent=U,this.h()},l(t){n=c(t,"FIGURE",{class:!0,role:!0});var p=V(n);r=c(p,"DIV",{class:!0,style:!0});var u=V(r);J(i.$$.fragment,u),y=g(u),d=c(u,"DIV",{class:!0});var I=V(d);J(f.$$.fragment,I),$=g(I),J(w.$$.fragment,I),I.forEach(s),u.forEach(s),T=g(p),m=c(p,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),S(m)!=="svelte-ix7ai3"&&(m.textContent=U),p.forEach(s),this.h()},h(){_(d,"class","gifs svelte-tsg0ug"),xe(()=>x[4].call(d)),_(r,"class","container radius svelte-tsg0ug"),ve(r,"--h",Math.round(x[0])+"px"),_(m,"class","caption"),_(n,"class","max-w svelte-tsg0ug"),_(n,"role","group")},m(t,p){l(t,n,p),v(n,r),Q(i,r,null),v(r,y),v(r,d),Q(f,d,null),v(d,$),Q(w,d,null),A=ke(d,x[4].bind(d)),v(n,T),v(n,m),H=!0},p(t,[p]){const u=p&2?pe(k,[fe(t[1])]):{};i.$set(u);const I=p&4?pe(j,[fe(t[2])]):{};f.$set(I);const F=p&8?pe(L,[fe(t[3])]):{};w.$set(F),(!H||p&1)&&ve(r,"--h",Math.round(t[0])+"px")},i(t){H||(W(i.$$.fragment,t),W(f.$$.fragment,t),W(w.$$.fragment,t),H=!0)},o(t){X(i.$$.fragment,t),X(f.$$.fragment,t),X(w.$$.fragment,t),H=!1},d(t){t&&s(n),Y(i),Y(f),Y(w),A()}}}function He(x,n,r){let i=0;const y={src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08}},d={src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr"},f={src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"};function $(){i=this.clientHeight,r(0,i)}return[i,y,d,f,$]}class Ie extends we{constructor(n){super(),be(this,n,He,Me,$e,{})}}function Se(x){let n;return{c(){n=R("Bouncy button shows direction of queued text")},l(r){n=D(r,"Bouncy button shows direction of queued text")},m(r,i){l(r,n,i)},d(r){r&&s(n)}}}function Te(x){let n,r="<span>Not iMessage</span>",i,y,d=`A web-based iMessage &#39;emulator&#39; I made to try out some Svelte features and get more familiar with the front-end. It doesn&#39;t
	really <em>do</em> anything, but working through it gave me a fun way to learn different CSS tricks without worring about design choices.`,f,$,w,A,T,m,U="Svelte Rocks",H,k,B=`It basically just loops through a preset array of &#39;texts&#39;, which are added to the DOM + auto scrolled using Svelte&#39;s built-in <code>transition</code> and
	<code>before/afterUpdate</code> directives. I used a <code class="svelte">svelte/store</code> to synchronize component states and, somewhere in there, I also inserted random delays to make the &#39;typing&#39;
	effect feel a less robotic.`,j,E,L,C,t="CSS (...Also Rocks!)",p,u,I=`Thanks to conditional classes, most of the other animations were done directly in CSS <code>@keyframes</code>
	rules. To maintain performance, I tried keeping value transitions on the <code>opacity</code> and
	<code>transform</code> properties—combined with <code>::pseudo-elements</code>, it&#39;s a surprisingly flexible.`,F,G,q,Z,z,ue=`The active keycap and message bubble shapes were made using an inlined <code data-type="html">svg</code> reference in
	<code>clip-path</code>, but everything else was styled with
	<code>box-shadow</code> and <code data-type="html">div</code> soup. (<span class="dimmed">The row of &#39;app&#39; icons make tasteful use
	of the viewer&#39;s <em>imagination</em>.</span>)`,ee,te,se,b,ne,O,he="powerful",le,P,re,ie,N,oe,ce,ae;return $=new Ie({}),q=new me({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[Se]},$$scope:{ctx:x}}}),{c(){n=o("h1"),n.innerHTML=r,i=h(),y=o("p"),y.innerHTML=d,f=h(),K($.$$.fragment),w=h(),A=o("hr"),T=h(),m=o("h3"),m.textContent=U,H=h(),k=o("p"),k.innerHTML=B,j=h(),E=o("hr"),L=h(),C=o("h3"),C.textContent=t,p=h(),u=o("p"),u.innerHTML=I,F=h(),G=o("div"),K(q.$$.fragment),Z=h(),z=o("p"),z.innerHTML=ue,ee=h(),te=o("hr"),se=h(),b=o("p"),ne=R("I never realized how "),O=o("em"),O.textContent=he,le=R(` CSS is—with enough effort, you can do\r
	`),P=o("a"),re=R("practically anything"),ie=R(`. Temani and yoksel's css and svg resources were really helpful--I learned a ton. All the pieces were slopped together in a poorly organized\r
	`),N=o("a"),oe=R("Svelte MEGA REPL"),ce=R("—open at your own risk!"),this.h()},l(e){n=c(e,"H1",{"data-svelte-h":!0}),S(n)!=="svelte-e4vfw6"&&(n.innerHTML=r),i=g(e),y=c(e,"P",{class:!0,"data-svelte-h":!0}),S(y)!=="svelte-12px2il"&&(y.innerHTML=d),f=g(e),J($.$$.fragment,e),w=g(e),A=c(e,"HR",{}),T=g(e),m=c(e,"H3",{"data-svelte-h":!0}),S(m)!=="svelte-1tux9jt"&&(m.textContent=U),H=g(e),k=c(e,"P",{class:!0,"data-svelte-h":!0}),S(k)!=="svelte-1i2w95n"&&(k.innerHTML=B),j=g(e),E=c(e,"HR",{}),L=g(e),C=c(e,"H3",{"data-svelte-h":!0}),S(C)!=="svelte-1dbzq8s"&&(C.textContent=t),p=g(e),u=c(e,"P",{class:!0,"data-svelte-h":!0}),S(u)!=="svelte-12vqiej"&&(u.innerHTML=I),F=g(e),G=c(e,"DIV",{class:!0});var a=V(G);J(q.$$.fragment,a),a.forEach(s),Z=g(e),z=c(e,"P",{class:!0,"data-svelte-h":!0}),S(z)!=="svelte-y5dsk4"&&(z.innerHTML=ue),ee=g(e),te=c(e,"HR",{}),se=g(e),b=c(e,"P",{class:!0});var M=V(b);ne=D(M,"I never realized how "),O=c(M,"EM",{"data-svelte-h":!0}),S(O)!=="svelte-kwj9hi"&&(O.textContent=he),le=D(M,` CSS is—with enough effort, you can do\r
	`),P=c(M,"A",{href:!0,target:!0});var ge=V(P);re=D(ge,"practically anything"),ge.forEach(s),ie=D(M,`. Temani and yoksel's css and svg resources were really helpful--I learned a ton. All the pieces were slopped together in a poorly organized\r
	`),N=c(M,"A",{href:!0,target:!0});var _e=V(N);oe=D(_e,"Svelte MEGA REPL"),_e.forEach(s),ce=D(M,"—open at your own risk!"),M.forEach(s),this.h()},h(){_(y,"class","svelte-1joqmah"),_(k,"class","svelte-1joqmah"),_(u,"class","svelte-1joqmah"),_(G,"class","max-w svelte-1joqmah"),_(z,"class","svelte-1joqmah"),_(P,"href",Ee),_(P,"target",ye),_(N,"href",je),_(N,"target",ye),_(b,"class","svelte-1joqmah")},m(e,a){l(e,n,a),l(e,i,a),l(e,y,a),l(e,f,a),Q($,e,a),l(e,w,a),l(e,A,a),l(e,T,a),l(e,m,a),l(e,H,a),l(e,k,a),l(e,j,a),l(e,E,a),l(e,L,a),l(e,C,a),l(e,p,a),l(e,u,a),l(e,F,a),l(e,G,a),Q(q,G,null),l(e,Z,a),l(e,z,a),l(e,ee,a),l(e,te,a),l(e,se,a),l(e,b,a),v(b,ne),v(b,O),v(b,le),v(b,P),v(P,re),v(b,ie),v(b,N),v(N,oe),v(b,ce),ae=!0},p(e,[a]){const M={};a&1&&(M.$$scope={dirty:a,ctx:e}),q.$set(M)},i(e){ae||(W($.$$.fragment,e),W(q.$$.fragment,e),ae=!0)},o(e){X($.$$.fragment,e),X(q.$$.fragment,e),ae=!1},d(e){e&&(s(n),s(i),s(y),s(f),s(w),s(A),s(T),s(m),s(H),s(k),s(j),s(E),s(L),s(C),s(p),s(u),s(F),s(G),s(Z),s(z),s(ee),s(te),s(se),s(b)),Y($,e),Y(q)}}}const je="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0",Ee="https://a.singlediv.com/",ye="_blank";class Pe extends we{constructor(n){super(),be(this,n,null,Te,$e,{})}}export{Pe as component};
