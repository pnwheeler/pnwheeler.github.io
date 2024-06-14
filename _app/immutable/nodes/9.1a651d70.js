import{s as $e,K as pe,f as o,a as h,g as c,h as D,c as g,d as s,G as I,j as _,z as xe,k as ve,i as l,u as v,H as Ce,l as q,m as O}from"../chunks/scheduler.8d84c197.js";import{S as we,i as be,b as K,d as U,m as J,a as Q,t as X,e as Y}from"../chunks/index.5e028736.js";import{G as me}from"../chunks/Gif.a1b3e23e.js";import{g as fe,a as ue}from"../chunks/spread.8a54911c.js";import{I as Me}from"../chunks/Img.27b22fe7.js";function ke(x){let n,i,r,y,p,u,$,w,G,E,m,W="Overview screenshot and some animations from the keyboard input and message thread areas.",H;const C=[x[1]];let F={};for(let t=0;t<C.length;t+=1)F=pe(F,C[t]);r=new Me({props:F});const z=[x[2]];let S={};for(let t=0;t<z.length;t+=1)S=pe(S,z[t]);u=new me({props:S});const A=[x[3]];let M={};for(let t=0;t<A.length;t+=1)M=pe(M,A[t]);return w=new me({props:M}),{c(){n=o("figure"),i=o("div"),K(r.$$.fragment),y=h(),p=o("div"),K(u.$$.fragment),$=h(),K(w.$$.fragment),E=h(),m=o("figcaption"),m.textContent=W,this.h()},l(t){n=c(t,"FIGURE",{class:!0,role:!0});var f=D(n);i=c(f,"DIV",{class:!0,style:!0});var d=D(i);U(r.$$.fragment,d),y=g(d),p=c(d,"DIV",{class:!0});var j=D(p);U(u.$$.fragment,j),$=g(j),U(w.$$.fragment,j),j.forEach(s),d.forEach(s),E=g(f),m=c(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),I(m)!=="svelte-twnh7j"&&(m.textContent=W),f.forEach(s),this.h()},h(){_(p,"class","gifs svelte-tsg0ug"),xe(()=>x[4].call(p)),_(i,"class","container radius svelte-tsg0ug"),ve(i,"--h",Math.round(x[0])+"px"),_(m,"class","caption"),_(n,"class","max-w svelte-tsg0ug"),_(n,"role","group")},m(t,f){l(t,n,f),v(n,i),J(r,i,null),v(i,y),v(i,p),J(u,p,null),v(p,$),J(w,p,null),G=Ce(p,x[4].bind(p)),v(n,E),v(n,m),H=!0},p(t,[f]){const d=f&2?fe(C,[ue(t[1])]):{};r.$set(d);const j=f&4?fe(z,[ue(t[2])]):{};u.$set(j);const V=f&8?fe(A,[ue(t[3])]):{};w.$set(V),(!H||f&1)&&ve(i,"--h",Math.round(t[0])+"px")},i(t){H||(Q(r.$$.fragment,t),Q(u.$$.fragment,t),Q(w.$$.fragment,t),H=!0)},o(t){X(r.$$.fragment,t),X(u.$$.fragment,t),X(w.$$.fragment,t),H=!1},d(t){t&&s(n),Y(r),Y(u),Y(w),G()}}}function He(x,n,i){let r=0;const y={src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08}},p={src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr"},u={src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"};function $(){r=this.clientHeight,i(0,r)}return[r,y,p,u,$]}class je extends we{constructor(n){super(),be(this,n,He,ke,$e,{})}}function Ie(x){let n;return{c(){n=q("Bouncy button shows direction of queued text")},l(i){n=O(i,"Bouncy button shows direction of queued text")},m(i,r){l(i,n,r)},d(i){i&&s(n)}}}function Ee(x){let n,i="<span>Not iMessage</span>",r,y,p=`A web-based iMessage 'emulator' I made to try out some Svelte features and get more comfortable with web development.\r
	It doesn't really serve a purpose outside of being a practice exercise, but it was a fun way to experiment with\r
	different techniques and learn all about CSS.`,u,$,w,G,E,m,W="Shapes + Icons",H,C,F=`For reasons unrelated to <em>&#39;being practical&#39;</em>, I wrote everything directly in the markup. Aside from the cutouts specific
	to the keycap and message bubble shapes, made using <code>clip-path</code>,
	it’s primarily <code data-type="html">div</code> soup and <code>box-shadow</code>. (The row of purple &#39;app&#39; icons rely on the 
	tasteful use of a viewer&#39;s <em>imagination</em>.)`,z,S,A,M,t="Animations",f,d,j=`Most of the animations were done by playing an iteration of a <code>@keyframes</code>
	rule associated with conditional classes. I tried keeping value transitions to the <code>opacity</code> and
	<code>transform</code> properties for performance which, when paired with <code>::pseudo-elements</code>, is
	suprisingly flexible.`,V,P,L,Z,T,de=`I used a <code class="svelte">svelte/store</code> to synchronize the keyboard state with
	the current letter, and added in some randomized timeouts to make the &#39;active typing&#39; effect feel a little less robotic.`,ee,te,se,b,ne,B,he="powerful",le,N,ie,re,R,oe,ce,ae;return $=new je({}),L=new me({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[Ie]},$$scope:{ctx:x}}}),{c(){n=o("h1"),n.innerHTML=i,r=h(),y=o("p"),y.textContent=p,u=h(),K($.$$.fragment),w=h(),G=o("hr"),E=h(),m=o("h3"),m.textContent=W,H=h(),C=o("p"),C.innerHTML=F,z=h(),S=o("hr"),A=h(),M=o("h3"),M.textContent=t,f=h(),d=o("p"),d.innerHTML=j,V=h(),P=o("div"),K(L.$$.fragment),Z=h(),T=o("p"),T.innerHTML=de,ee=h(),te=o("hr"),se=h(),b=o("p"),ne=q("Working through this made me realize how "),B=o("em"),B.textContent=he,le=q(` CSS is—with enough effort, you can do\r
	`),N=o("a"),ie=q("practically anything"),re=q(`... All the pieces were slopped together in a poorly organized\r
	`),R=o("a"),oe=q("Svelte MEGA REPL"),ce=q(` filled with absolute positioning and magic numbers. Open at your own\r
	risk!`),this.h()},l(e){n=c(e,"H1",{"data-svelte-h":!0}),I(n)!=="svelte-e4vfw6"&&(n.innerHTML=i),r=g(e),y=c(e,"P",{class:!0,"data-svelte-h":!0}),I(y)!=="svelte-2dfu87"&&(y.textContent=p),u=g(e),U($.$$.fragment,e),w=g(e),G=c(e,"HR",{}),E=g(e),m=c(e,"H3",{"data-svelte-h":!0}),I(m)!=="svelte-gxzwt1"&&(m.textContent=W),H=g(e),C=c(e,"P",{class:!0,"data-svelte-h":!0}),I(C)!=="svelte-ksczjo"&&(C.innerHTML=F),z=g(e),S=c(e,"HR",{}),A=g(e),M=c(e,"H3",{"data-svelte-h":!0}),I(M)!=="svelte-14tcfuv"&&(M.textContent=t),f=g(e),d=c(e,"P",{class:!0,"data-svelte-h":!0}),I(d)!=="svelte-1wmox6p"&&(d.innerHTML=j),V=g(e),P=c(e,"DIV",{class:!0});var a=D(P);U(L.$$.fragment,a),a.forEach(s),Z=g(e),T=c(e,"P",{class:!0,"data-svelte-h":!0}),I(T)!=="svelte-1xe9u1k"&&(T.innerHTML=de),ee=g(e),te=c(e,"HR",{}),se=g(e),b=c(e,"P",{class:!0});var k=D(b);ne=O(k,"Working through this made me realize how "),B=c(k,"EM",{"data-svelte-h":!0}),I(B)!=="svelte-kwj9hi"&&(B.textContent=he),le=O(k,` CSS is—with enough effort, you can do\r
	`),N=c(k,"A",{href:!0,target:!0});var ge=D(N);ie=O(ge,"practically anything"),ge.forEach(s),re=O(k,`... All the pieces were slopped together in a poorly organized\r
	`),R=c(k,"A",{href:!0,target:!0});var _e=D(R);oe=O(_e,"Svelte MEGA REPL"),_e.forEach(s),ce=O(k,` filled with absolute positioning and magic numbers. Open at your own\r
	risk!`),k.forEach(s),this.h()},h(){_(y,"class","svelte-1ljsxay"),_(C,"class","svelte-1ljsxay"),_(d,"class","svelte-1ljsxay"),_(P,"class","max-w svelte-1ljsxay"),_(T,"class","svelte-1ljsxay"),_(N,"href",Se),_(N,"target",ye),_(R,"href",ze),_(R,"target",ye),_(b,"class","svelte-1ljsxay")},m(e,a){l(e,n,a),l(e,r,a),l(e,y,a),l(e,u,a),J($,e,a),l(e,w,a),l(e,G,a),l(e,E,a),l(e,m,a),l(e,H,a),l(e,C,a),l(e,z,a),l(e,S,a),l(e,A,a),l(e,M,a),l(e,f,a),l(e,d,a),l(e,V,a),l(e,P,a),J(L,P,null),l(e,Z,a),l(e,T,a),l(e,ee,a),l(e,te,a),l(e,se,a),l(e,b,a),v(b,ne),v(b,B),v(b,le),v(b,N),v(N,ie),v(b,re),v(b,R),v(R,oe),v(b,ce),ae=!0},p(e,[a]){const k={};a&1&&(k.$$scope={dirty:a,ctx:e}),L.$set(k)},i(e){ae||(Q($.$$.fragment,e),Q(L.$$.fragment,e),ae=!0)},o(e){X($.$$.fragment,e),X(L.$$.fragment,e),ae=!1},d(e){e&&(s(n),s(r),s(y),s(u),s(w),s(G),s(E),s(m),s(H),s(C),s(z),s(S),s(A),s(M),s(f),s(d),s(V),s(P),s(Z),s(T),s(ee),s(te),s(se),s(b)),Y($,e),Y(L)}}}const ze="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0",Se="https://a.singlediv.com/",ye="_blank";class Ne extends we{constructor(n){super(),be(this,n,null,Ee,$e,{})}}export{Ne as component};
