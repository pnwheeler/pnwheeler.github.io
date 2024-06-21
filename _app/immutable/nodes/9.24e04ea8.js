import{s as ye,K as pe,f as o,a as g,g as c,h as F,c as h,d as s,G as z,j as _,z as we,k as ve,i,u as v,H as Ce,l as q,m as D}from"../chunks/scheduler.8d84c197.js";import{S as be,i as xe,b as K,d as U,m as J,a as Q,t as X,e as Y}from"../chunks/index.5e028736.js";import{G as ue}from"../chunks/Gif.4ac7adc5.js";import{g as fe,a as me}from"../chunks/spread.8a54911c.js";import{I as Me}from"../chunks/Img.27b22fe7.js";function ke(w){let n,l,r,$,p,m,y,b,G,E,u,W="A screenshot and some animations from the keyboard input and message thread areas.",H;const C=[w[1]];let O={};for(let t=0;t<C.length;t+=1)O=pe(O,C[t]);r=new Me({props:O});const I=[w[2]];let S={};for(let t=0;t<I.length;t+=1)S=pe(S,I[t]);m=new ue({props:S});const A=[w[3]];let M={};for(let t=0;t<A.length;t+=1)M=pe(M,A[t]);return b=new ue({props:M}),{c(){n=o("figure"),l=o("div"),K(r.$$.fragment),$=g(),p=o("div"),K(m.$$.fragment),y=g(),K(b.$$.fragment),E=g(),u=o("figcaption"),u.textContent=W,this.h()},l(t){n=c(t,"FIGURE",{class:!0,role:!0});var f=F(n);l=c(f,"DIV",{class:!0,style:!0});var d=F(l);U(r.$$.fragment,d),$=h(d),p=c(d,"DIV",{class:!0});var j=F(p);U(m.$$.fragment,j),y=h(j),U(b.$$.fragment,j),j.forEach(s),d.forEach(s),E=h(f),u=c(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),z(u)!=="svelte-ix7ai3"&&(u.textContent=W),f.forEach(s),this.h()},h(){_(p,"class","gifs svelte-tsg0ug"),we(()=>w[4].call(p)),_(l,"class","container radius svelte-tsg0ug"),ve(l,"--h",Math.round(w[0])+"px"),_(u,"class","caption"),_(n,"class","max-w svelte-tsg0ug"),_(n,"role","group")},m(t,f){i(t,n,f),v(n,l),J(r,l,null),v(l,$),v(l,p),J(m,p,null),v(p,y),J(b,p,null),G=Ce(p,w[4].bind(p)),v(n,E),v(n,u),H=!0},p(t,[f]){const d=f&2?fe(C,[me(t[1])]):{};r.$set(d);const j=f&4?fe(I,[me(t[2])]):{};m.$set(j);const V=f&8?fe(A,[me(t[3])]):{};b.$set(V),(!H||f&1)&&ve(l,"--h",Math.round(t[0])+"px")},i(t){H||(Q(r.$$.fragment,t),Q(m.$$.fragment,t),Q(b.$$.fragment,t),H=!0)},o(t){X(r.$$.fragment,t),X(m.$$.fragment,t),X(b.$$.fragment,t),H=!1},d(t){t&&s(n),Y(r),Y(m),Y(b),G()}}}function He(w,n,l){let r=0;const $={src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08}},p={src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr"},m={src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"};function y(){r=this.clientHeight,l(0,r)}return[r,$,p,m,y]}class je extends be{constructor(n){super(),xe(this,n,He,ke,ye,{})}}function ze(w){let n;return{c(){n=q("Bouncy button shows direction of queued text")},l(l){n=D(l,"Bouncy button shows direction of queued text")},m(l,r){i(l,n,r)},d(l){l&&s(n)}}}function Ee(w){let n,l="<span>Not iMessage</span>",r,$,p=`A web-based iMessage 'emulator' I made to try out some Svelte features and get more comfortable with the front-end. It\r
	doesn't really serve a purpose outside of being a practice exercise, but it was a fun way to experiment with different\r
	CSS techniques.`,m,y,b,G,E,u,W="Shapes + Icons",H,C,O=`For reasons unrelated to <em>&#39;being practical&#39;</em>, everything was written directly in the markup. Aside from the shapes
	specific to the keycap and message bubbles, which use <code>clip-path</code>, it’s primarily
	<code data-type="html">div</code>
	soup and <code>box-shadow</code>. (The row of purple &#39;app&#39; icons make tasteful use of the viewer&#39;s
	<em>imagination</em>.)`,I,S,A,M,t="Animations",f,d,j=`Most of the animations were done by toggling conditional classes to play an iteration of their associated <code>@keyframes</code>
	rules. I tried keeping value transitions on the <code>opacity</code> and
	<code>transform</code> properties for performance—paired with <code>::pseudo-elements</code>, it&#39;s a 
	suprisingly powerful combination.`,V,P,L,Z,T,de=`I used a <code class="svelte">svelte/store</code> to synchronize the keyboard state with the current letter, and added
	in some randomized timeouts to make the &#39;active typing&#39; effect feel a little less robotic.`,ee,te,se,x,ne,B,ge="flexible",ie,N,le,re,R,oe,ce,ae;return y=new je({}),L=new ue({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[ze]},$$scope:{ctx:w}}}),{c(){n=o("h1"),n.innerHTML=l,r=g(),$=o("p"),$.textContent=p,m=g(),K(y.$$.fragment),b=g(),G=o("hr"),E=g(),u=o("h3"),u.textContent=W,H=g(),C=o("p"),C.innerHTML=O,I=g(),S=o("hr"),A=g(),M=o("h3"),M.textContent=t,f=g(),d=o("p"),d.innerHTML=j,V=g(),P=o("div"),K(L.$$.fragment),Z=g(),T=o("p"),T.innerHTML=de,ee=g(),te=o("hr"),se=g(),x=o("p"),ne=q("Working through this made me realize how "),B=o("em"),B.textContent=ge,ie=q(` CSS is—with enough effort, you can do\r
	`),N=o("a"),le=q("practically anything"),re=q(`... All the pieces were slopped together in a poorly organized\r
	`),R=o("a"),oe=q("Svelte MEGA REPL"),ce=q(` filled with absolute positioning and magic numbers. Open at your own\r
	risk!`),this.h()},l(e){n=c(e,"H1",{"data-svelte-h":!0}),z(n)!=="svelte-e4vfw6"&&(n.innerHTML=l),r=h(e),$=c(e,"P",{class:!0,"data-svelte-h":!0}),z($)!=="svelte-q2zpc5"&&($.textContent=p),m=h(e),U(y.$$.fragment,e),b=h(e),G=c(e,"HR",{}),E=h(e),u=c(e,"H3",{"data-svelte-h":!0}),z(u)!=="svelte-gxzwt1"&&(u.textContent=W),H=h(e),C=c(e,"P",{class:!0,"data-svelte-h":!0}),z(C)!=="svelte-1jrgxdm"&&(C.innerHTML=O),I=h(e),S=c(e,"HR",{}),A=h(e),M=c(e,"H3",{"data-svelte-h":!0}),z(M)!=="svelte-14tcfuv"&&(M.textContent=t),f=h(e),d=c(e,"P",{class:!0,"data-svelte-h":!0}),z(d)!=="svelte-bbt87p"&&(d.innerHTML=j),V=h(e),P=c(e,"DIV",{class:!0});var a=F(P);U(L.$$.fragment,a),a.forEach(s),Z=h(e),T=c(e,"P",{class:!0,"data-svelte-h":!0}),z(T)!=="svelte-1cow1si"&&(T.innerHTML=de),ee=h(e),te=c(e,"HR",{}),se=h(e),x=c(e,"P",{class:!0});var k=F(x);ne=D(k,"Working through this made me realize how "),B=c(k,"EM",{"data-svelte-h":!0}),z(B)!=="svelte-41r3z5"&&(B.textContent=ge),ie=D(k,` CSS is—with enough effort, you can do\r
	`),N=c(k,"A",{href:!0,target:!0});var he=F(N);le=D(he,"practically anything"),he.forEach(s),re=D(k,`... All the pieces were slopped together in a poorly organized\r
	`),R=c(k,"A",{href:!0,target:!0});var _e=F(R);oe=D(_e,"Svelte MEGA REPL"),_e.forEach(s),ce=D(k,` filled with absolute positioning and magic numbers. Open at your own\r
	risk!`),k.forEach(s),this.h()},h(){_($,"class","svelte-1ljsxay"),_(C,"class","svelte-1ljsxay"),_(d,"class","svelte-1ljsxay"),_(P,"class","max-w svelte-1ljsxay"),_(T,"class","svelte-1ljsxay"),_(N,"href",Se),_(N,"target",$e),_(R,"href",Ie),_(R,"target",$e),_(x,"class","svelte-1ljsxay")},m(e,a){i(e,n,a),i(e,r,a),i(e,$,a),i(e,m,a),J(y,e,a),i(e,b,a),i(e,G,a),i(e,E,a),i(e,u,a),i(e,H,a),i(e,C,a),i(e,I,a),i(e,S,a),i(e,A,a),i(e,M,a),i(e,f,a),i(e,d,a),i(e,V,a),i(e,P,a),J(L,P,null),i(e,Z,a),i(e,T,a),i(e,ee,a),i(e,te,a),i(e,se,a),i(e,x,a),v(x,ne),v(x,B),v(x,ie),v(x,N),v(N,le),v(x,re),v(x,R),v(R,oe),v(x,ce),ae=!0},p(e,[a]){const k={};a&1&&(k.$$scope={dirty:a,ctx:e}),L.$set(k)},i(e){ae||(Q(y.$$.fragment,e),Q(L.$$.fragment,e),ae=!0)},o(e){X(y.$$.fragment,e),X(L.$$.fragment,e),ae=!1},d(e){e&&(s(n),s(r),s($),s(m),s(b),s(G),s(E),s(u),s(H),s(C),s(I),s(S),s(A),s(M),s(f),s(d),s(V),s(P),s(Z),s(T),s(ee),s(te),s(se),s(x)),Y(y,e),Y(L)}}}const Ie="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0",Se="https://a.singlediv.com/",$e="_blank";class Ne extends be{constructor(n){super(),xe(this,n,null,Ee,ye,{})}}export{Ne as component};
