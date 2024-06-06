import{s as _e,K as oe,f as o,a as h,g as c,h as q,c as g,d as s,G as L,j as _,z as $e,k as he,i,u as b,H as be,l as O,m as V}from"../chunks/scheduler.8d84c197.js";import{S as ve,i as ye,b as W,d as K,m as U,a as J,t as Q,e as X}from"../chunks/index.5e028736.js";import{G as fe}from"../chunks/Gif.cb2d118f.js";import{g as ce,a as pe}from"../chunks/spread.8a54911c.js";import{I as we}from"../chunks/Img.27b22fe7.js";function xe(w){let n,l,r,v,p,m,y,$,G,j,d,B=`A screenshot and some animations made for the keyboard and input/message\r
		areas.`,M;const x=[w[1]];let F={};for(let t=0;t<x.length;t+=1)F=oe(F,x[t]);r=new we({props:F});const z=[w[2]];let S={};for(let t=0;t<z.length;t+=1)S=oe(S,z[t]);m=new fe({props:S});const E=[w[3]];let k={};for(let t=0;t<E.length;t+=1)k=oe(k,E[t]);return $=new fe({props:k}),{c(){n=o("figure"),l=o("div"),W(r.$$.fragment),v=h(),p=o("div"),W(m.$$.fragment),y=h(),W($.$$.fragment),j=h(),d=o("figcaption"),d.textContent=B,this.h()},l(t){n=c(t,"FIGURE",{class:!0,role:!0});var f=q(n);l=c(f,"DIV",{class:!0,style:!0});var u=q(l);K(r.$$.fragment,u),v=g(u),p=c(u,"DIV",{class:!0});var H=q(p);K(m.$$.fragment,H),y=g(H),K($.$$.fragment,H),H.forEach(s),u.forEach(s),j=g(f),d=c(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),L(d)!=="svelte-q8e0rk"&&(d.textContent=B),f.forEach(s),this.h()},h(){_(p,"class","gifs svelte-7i3heo"),$e(()=>w[4].call(p)),_(l,"class","container radius svelte-7i3heo"),he(l,"--h",Math.round(w[0])+"px"),_(d,"class","caption"),_(n,"class","max-w svelte-7i3heo"),_(n,"role","group")},m(t,f){i(t,n,f),b(n,l),U(r,l,null),b(l,v),b(l,p),U(m,p,null),b(p,y),U($,p,null),G=be(p,w[4].bind(p)),b(n,j),b(n,d),M=!0},p(t,[f]){const u=f&2?ce(x,[pe(t[1])]):{};r.$set(u);const H=f&4?ce(z,[pe(t[2])]):{};m.$set(H);const D=f&8?ce(E,[pe(t[3])]):{};$.$set(D),(!M||f&1)&&he(l,"--h",Math.round(t[0])+"px")},i(t){M||(J(r.$$.fragment,t),J(m.$$.fragment,t),J($.$$.fragment,t),M=!0)},o(t){Q(r.$$.fragment,t),Q(m.$$.fragment,t),Q($.$$.fragment,t),M=!1},d(t){t&&s(n),X(r),X(m),X($),G()}}}function ke(w,n,l){let r=0;const v={src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08}},p={src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr"},m={src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"};function y(){r=this.clientHeight,l(0,r)}return[r,v,p,m,y]}class Ce extends ve{constructor(n){super(),ye(this,n,ke,xe,_e,{})}}function Me(w){let n;return{c(){n=O("Bouncy button shows direction of queued text")},l(l){n=V(l,"Bouncy button shows direction of queued text")},m(l,r){i(l,n,r)},d(l){l&&s(n)}}}function He(w){let n,l="<span>Not iMessage</span>",r,v,p=`A toy, web-based iMessage 'emulator' I made to get more comfortable on the front-end. It doesn't really have purpose\r
	outside of being a practice exercise, but it was a fun way to experiment with different CSS techniques without getting\r
	burned out on design decisions.`,m,y,$,G,j,d,B="Shapes + Icons",M,x,F=`For reasons unrelated to <em>&#39;being practical&#39;</em>, everything was written directly in the markup. Aside from
	specific shapes made for the keycap and message bubble, which use <code>clip-path</code> to reference
	<code data-type="html">svg</code> paths, it’s primarily <code data-type="html">div</code> soup and
	<code>box-shadow</code>. (The row of purple &#39;app&#39; icons make tasteful use of the viewer&#39;s imagination.)`,z,S,E,k,t="Animations",f,u,H=`The majority of them work by toggling conditional classes to activate <code>@keyframes</code> rules defined in CSS.
	To maintain performance, I tried keeping any value transitions on the <code>opacity</code> and <code>transform</code>
	properties. Combined with <code>::pseudo-elements</code>, I’m still surprised at how well the combination works.`,D,P,T,Y,A,me=`For the &#39;active typing&#39; effect, I used a <code class="svelte">svelte/store</code> to synchronize the keyboard state with
	the current letter, and added in some randomized timeouts to make it feel a little less robotic.`,Z,ee,te,C,ae,N,ne,ie,R,le,re,se;return y=new Ce({}),T=new fe({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[Me]},$$scope:{ctx:w}}}),{c(){n=o("h1"),n.innerHTML=l,r=h(),v=o("p"),v.textContent=p,m=h(),W(y.$$.fragment),$=h(),G=o("hr"),j=h(),d=o("h3"),d.textContent=B,M=h(),x=o("p"),x.innerHTML=F,z=h(),S=o("hr"),E=h(),k=o("h3"),k.textContent=t,f=h(),u=o("p"),u.innerHTML=H,D=h(),P=o("div"),W(T.$$.fragment),Y=h(),A=o("p"),A.innerHTML=me,Z=h(),ee=o("hr"),te=h(),C=o("p"),ae=O(`Working through this made me realize how powerful CSS is—not that you'd necessarily want to, but with enough\r
	effort you can do `),N=o("a"),ne=O("practically anything"),ie=O(`... All the pieces were slopped together in\r
	a poorly organized `),R=o("a"),le=O("Svelte MEGA REPL"),re=O(` filled with absolute positioning and magic numbers.\r
	Open at your own risk!`),this.h()},l(e){n=c(e,"H1",{"data-svelte-h":!0}),L(n)!=="svelte-e4vfw6"&&(n.innerHTML=l),r=g(e),v=c(e,"P",{class:!0,"data-svelte-h":!0}),L(v)!=="svelte-1t79b6k"&&(v.textContent=p),m=g(e),K(y.$$.fragment,e),$=g(e),G=c(e,"HR",{}),j=g(e),d=c(e,"H3",{"data-svelte-h":!0}),L(d)!=="svelte-gxzwt1"&&(d.textContent=B),M=g(e),x=c(e,"P",{class:!0,"data-svelte-h":!0}),L(x)!=="svelte-7cchgn"&&(x.innerHTML=F),z=g(e),S=c(e,"HR",{}),E=g(e),k=c(e,"H3",{"data-svelte-h":!0}),L(k)!=="svelte-14tcfuv"&&(k.textContent=t),f=g(e),u=c(e,"P",{class:!0,"data-svelte-h":!0}),L(u)!=="svelte-cd7v9o"&&(u.innerHTML=H),D=g(e),P=c(e,"DIV",{class:!0});var a=q(P);K(T.$$.fragment,a),a.forEach(s),Y=g(e),A=c(e,"P",{class:!0,"data-svelte-h":!0}),L(A)!=="svelte-yzze9c"&&(A.innerHTML=me),Z=g(e),ee=c(e,"HR",{}),te=g(e),C=c(e,"P",{class:!0});var I=q(C);ae=V(I,`Working through this made me realize how powerful CSS is—not that you'd necessarily want to, but with enough\r
	effort you can do `),N=c(I,"A",{href:!0,target:!0});var de=q(N);ne=V(de,"practically anything"),de.forEach(s),ie=V(I,`... All the pieces were slopped together in\r
	a poorly organized `),R=c(I,"A",{href:!0,target:!0});var ue=q(R);le=V(ue,"Svelte MEGA REPL"),ue.forEach(s),re=V(I,` filled with absolute positioning and magic numbers.\r
	Open at your own risk!`),I.forEach(s),this.h()},h(){_(v,"class","svelte-1ljsxay"),_(x,"class","svelte-1ljsxay"),_(u,"class","svelte-1ljsxay"),_(P,"class","max-w svelte-1ljsxay"),_(A,"class","svelte-1ljsxay"),_(N,"href",je),_(N,"target",ge),_(R,"href",Ie),_(R,"target",ge),_(C,"class","svelte-1ljsxay")},m(e,a){i(e,n,a),i(e,r,a),i(e,v,a),i(e,m,a),U(y,e,a),i(e,$,a),i(e,G,a),i(e,j,a),i(e,d,a),i(e,M,a),i(e,x,a),i(e,z,a),i(e,S,a),i(e,E,a),i(e,k,a),i(e,f,a),i(e,u,a),i(e,D,a),i(e,P,a),U(T,P,null),i(e,Y,a),i(e,A,a),i(e,Z,a),i(e,ee,a),i(e,te,a),i(e,C,a),b(C,ae),b(C,N),b(N,ne),b(C,ie),b(C,R),b(R,le),b(C,re),se=!0},p(e,[a]){const I={};a&1&&(I.$$scope={dirty:a,ctx:e}),T.$set(I)},i(e){se||(J(y.$$.fragment,e),J(T.$$.fragment,e),se=!0)},o(e){Q(y.$$.fragment,e),Q(T.$$.fragment,e),se=!1},d(e){e&&(s(n),s(r),s(v),s(m),s($),s(G),s(j),s(d),s(M),s(x),s(z),s(S),s(E),s(k),s(f),s(u),s(D),s(P),s(Y),s(A),s(Z),s(ee),s(te),s(C)),X(y,e),X(T)}}}const Ie="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0",je="https://a.singlediv.com/",ge="_blank";class Le extends ve{constructor(n){super(),ye(this,n,null,He,_e,{})}}export{Le as component};
