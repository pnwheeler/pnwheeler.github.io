import{s as ne,K as Y,f as m,a as $,g as d,h as S,c as y,d as a,G as A,j as z,z as le,k as ae,i as r,u as C,H as oe,l as U,m as J}from"../chunks/scheduler.8d84c197.js";import{S as ie,i as re,b as D,d as O,m as V,a as q,t as B,e as F}from"../chunks/index.5e028736.js";import{G as te}from"../chunks/Gif.81bb5509.js";import{g as Z,a as ee}from"../chunks/spread.8a54911c.js";import{I as ce}from"../chunks/Img.27b22fe7.js";function pe(h){let s,i,l,u,o,c,g,_,G,E,p,R=`A screenshot and some close-ups showing the keyboard and input/message\r
		areas.`,k;const b=[h[1]];let N={};for(let t=0;t<b.length;t+=1)N=Y(N,b[t]);l=new ce({props:N});const H=[h[2]];let w={};for(let t=0;t<H.length;t+=1)w=Y(w,H[t]);c=new te({props:w});const v=[h[3]];let I={};for(let t=0;t<v.length;t+=1)I=Y(I,v[t]);return _=new te({props:I}),{c(){s=m("figure"),i=m("div"),D(l.$$.fragment),u=$(),o=m("div"),D(c.$$.fragment),g=$(),D(_.$$.fragment),E=$(),p=m("figcaption"),p.textContent=R,this.h()},l(t){s=d(t,"FIGURE",{class:!0,role:!0});var f=S(s);i=d(f,"DIV",{class:!0,style:!0});var x=S(i);O(l.$$.fragment,x),u=y(x),o=d(x,"DIV",{class:!0});var M=S(o);O(c.$$.fragment,M),g=y(M),O(_.$$.fragment,M),M.forEach(a),x.forEach(a),E=y(f),p=d(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),A(p)!=="svelte-nxp1lz"&&(p.textContent=R),f.forEach(a),this.h()},h(){z(o,"class","gifs svelte-7i3heo"),le(()=>h[4].call(o)),z(i,"class","container radius svelte-7i3heo"),ae(i,"--h",Math.round(h[0])+"px"),z(p,"class","caption"),z(s,"class","max-w svelte-7i3heo"),z(s,"role","group")},m(t,f){r(t,s,f),C(s,i),V(l,i,null),C(i,u),C(i,o),V(c,o,null),C(o,g),V(_,o,null),G=oe(o,h[4].bind(o)),C(s,E),C(s,p),k=!0},p(t,[f]){const x=f&2?Z(b,[ee(t[1])]):{};l.$set(x);const M=f&4?Z(H,[ee(t[2])]):{};c.$set(M);const j=f&8?Z(v,[ee(t[3])]):{};_.$set(j),(!k||f&1)&&ae(i,"--h",Math.round(t[0])+"px")},i(t){k||(q(l.$$.fragment,t),q(c.$$.fragment,t),q(_.$$.fragment,t),k=!0)},o(t){B(l.$$.fragment,t),B(c.$$.fragment,t),B(_.$$.fragment,t),k=!1},d(t){t&&a(s),F(l),F(c),F(_),G()}}}function fe(h,s,i){let l=0;const u={src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08}},o={src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr"},c={src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"};function g(){l=this.clientHeight,i(0,l)}return[l,u,o,c,g]}class me extends ie{constructor(s){super(),re(this,s,fe,pe,ne,{})}}function de(h){let s;return{c(){s=U("Bouncy button animation")},l(i){s=J(i,"Bouncy button animation")},m(i,l){r(i,s,l)},d(i){i&&a(s)}}}function ue(h){let s,i="<span>Not iMessage</span>",l,u,o=`A toy iMessage 'emulator' (or style clone) I made to get more comfortable on the front-end. It doesn't have any\r
	utility, but it was a nice way to try different CSS techniques and experiment with animations.`,c,g,_,G,E,p,R=`I made all the icons/shapes directly in markup using a combination of <code data-type="html">div</code> soup,
	<code data-type="html">svg</code>, <code>clip-path</code>, and <code>box-shadow</code>.`,k,b,N=`Most of the animations were done by activating <code>@keyframes</code> rules with conditional
	classes—I tried to stick to transitioning <code>opacity</code> and
	<code>transform</code> after learning that, unlike most properties, they&#39;re hardware accelerated and super performant.`,H,w,v,I,t,f=`I used a <code class="svelte">svelte/store</code> to synchronize the keyboard state with
	the current letter, and added some randomized timeouts to make the &#39;active typing&#39; effect feel less robotic.`,x,M,j,L,Q,P,W,X,K;return g=new me({}),v=new te({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[de]},$$scope:{ctx:h}}}),{c(){s=m("h1"),s.innerHTML=i,l=$(),u=m("p"),u.textContent=o,c=$(),D(g.$$.fragment),_=$(),G=m("hr"),E=$(),p=m("p"),p.innerHTML=R,k=$(),b=m("p"),b.innerHTML=N,H=$(),w=m("div"),D(v.$$.fragment),I=$(),t=m("p"),t.innerHTML=f,x=$(),M=m("hr"),j=$(),L=m("p"),Q=U("Everything is delicately stitched together in a poorly organized "),P=m("a"),W=U("Svelte MEGA REPL"),X=U(`\r
	filled with absolute units. Open at your own risk!`),this.h()},l(e){s=d(e,"H1",{"data-svelte-h":!0}),A(s)!=="svelte-e4vfw6"&&(s.innerHTML=i),l=y(e),u=d(e,"P",{"data-svelte-h":!0}),A(u)!=="svelte-1382m2a"&&(u.textContent=o),c=y(e),O(g.$$.fragment,e),_=y(e),G=d(e,"HR",{}),E=y(e),p=d(e,"P",{"data-svelte-h":!0}),A(p)!=="svelte-n10u52"&&(p.innerHTML=R),k=y(e),b=d(e,"P",{"data-svelte-h":!0}),A(b)!=="svelte-1i9bxfs"&&(b.innerHTML=N),H=y(e),w=d(e,"DIV",{class:!0});var n=S(w);O(v.$$.fragment,n),n.forEach(a),I=y(e),t=d(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-1tuxgsg"&&(t.innerHTML=f),x=y(e),M=d(e,"HR",{}),j=y(e),L=d(e,"P",{});var T=S(L);Q=J(T,"Everything is delicately stitched together in a poorly organized "),P=d(T,"A",{href:!0,target:!0});var se=S(P);W=J(se,"Svelte MEGA REPL"),se.forEach(a),X=J(T,`\r
	filled with absolute units. Open at your own risk!`),T.forEach(a),this.h()},h(){z(w,"class","max-w svelte-16vu4r3"),z(P,"href",ge),z(P,"target","_blank")},m(e,n){r(e,s,n),r(e,l,n),r(e,u,n),r(e,c,n),V(g,e,n),r(e,_,n),r(e,G,n),r(e,E,n),r(e,p,n),r(e,k,n),r(e,b,n),r(e,H,n),r(e,w,n),V(v,w,null),r(e,I,n),r(e,t,n),r(e,x,n),r(e,M,n),r(e,j,n),r(e,L,n),C(L,Q),C(L,P),C(P,W),C(L,X),K=!0},p(e,[n]){const T={};n&1&&(T.$$scope={dirty:n,ctx:e}),v.$set(T)},i(e){K||(q(g.$$.fragment,e),q(v.$$.fragment,e),K=!0)},o(e){B(g.$$.fragment,e),B(v.$$.fragment,e),K=!1},d(e){e&&(a(s),a(l),a(u),a(c),a(_),a(G),a(E),a(p),a(k),a(b),a(H),a(w),a(I),a(t),a(x),a(M),a(j),a(L)),F(g,e),F(v)}}}const ge="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0";class be extends ie{constructor(s){super(),re(this,s,null,ue,ne,{})}}export{be as component};
