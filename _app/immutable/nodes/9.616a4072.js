import{s as ne,I as Y,f as p,a as $,g as d,h as S,c as y,d as a,G as j,j as L,z as re,k as ae,i as l,u as C,H as oe,l as J,m as K}from"../chunks/scheduler.56474a9b.js";import{S as ie,i as le,b as D,d as O,m as V,a as q,t as B,e as F}from"../chunks/index.0a7d040b.js";import{G as te}from"../chunks/Gif.13149db5.js";import{g as Z,a as ee}from"../chunks/spread.8a54911c.js";import{I as ce}from"../chunks/Img.d50c30a6.js";function fe(h){let s,i,r,u,o,c,g,_,z,H,f,R=`A screenshot and some close-ups showing the keyboard and input/message\r
		areas.`,k;const b=[h[1]];let N={};for(let t=0;t<b.length;t+=1)N=Y(N,b[t]);r=new ce({props:N});const I=[h[2]];let w={};for(let t=0;t<I.length;t+=1)w=Y(w,I[t]);c=new te({props:w});const v=[h[3]];let E={};for(let t=0;t<v.length;t+=1)E=Y(E,v[t]);return _=new te({props:E}),{c(){s=p("figure"),i=p("div"),D(r.$$.fragment),u=$(),o=p("div"),D(c.$$.fragment),g=$(),D(_.$$.fragment),H=$(),f=p("figcaption"),f.textContent=R,this.h()},l(t){s=d(t,"FIGURE",{class:!0,role:!0});var m=S(s);i=d(m,"DIV",{class:!0,style:!0});var M=S(i);O(r.$$.fragment,M),u=y(M),o=d(M,"DIV",{class:!0});var x=S(o);O(c.$$.fragment,x),g=y(x),O(_.$$.fragment,x),x.forEach(a),M.forEach(a),H=y(m),f=d(m,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),j(f)!=="svelte-nxp1lz"&&(f.textContent=R),m.forEach(a),this.h()},h(){L(o,"class","gifs svelte-7i3heo"),re(()=>h[4].call(o)),L(i,"class","container radius svelte-7i3heo"),ae(i,"--h",Math.round(h[0])+"px"),L(f,"class","caption"),L(s,"class","max-w svelte-7i3heo"),L(s,"role","group")},m(t,m){l(t,s,m),C(s,i),V(r,i,null),C(i,u),C(i,o),V(c,o,null),C(o,g),V(_,o,null),z=oe(o,h[4].bind(o)),C(s,H),C(s,f),k=!0},p(t,[m]){const M=m&2?Z(b,[ee(t[1])]):{};r.$set(M);const x=m&4?Z(I,[ee(t[2])]):{};c.$set(x);const A=m&8?Z(v,[ee(t[3])]):{};_.$set(A),(!k||m&1)&&ae(i,"--h",Math.round(t[0])+"px")},i(t){k||(q(r.$$.fragment,t),q(c.$$.fragment,t),q(_.$$.fragment,t),k=!0)},o(t){B(r.$$.fragment,t),B(c.$$.fragment,t),B(_.$$.fragment,t),k=!1},d(t){t&&a(s),F(r),F(c),F(_),z()}}}function me(h,s,i){let r=0;const u={src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08}},o={src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr"},c={src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"};function g(){r=this.clientHeight,i(0,r)}return[r,u,o,c,g]}class pe extends ie{constructor(s){super(),le(this,s,me,fe,ne,{})}}function de(h){let s;return{c(){s=J("Bouncy button animation")},l(i){s=K(i,"Bouncy button animation")},m(i,r){l(i,s,r)},d(i){i&&a(s)}}}function ue(h){let s,i="<span>Not iMessage</span>",r,u,o=`A toy iMessage 'emulator' (or style clone) I made to get more comfortable on the front-end. It doesn't have any\r
	utility, but it was a nice way to try different CSS techniques and experiment with animations.`,c,g,_,z,H,f,R=`All the icons and shapes were made in-code using a combination of <code data-type="html">div</code> soup,
	<code data-type="html">svg</code>, <code>clip-path</code>, and <code>box-shadow</code>.`,k,b,N=`Most of the animations were done by activating <code>@keyframes</code> rules with conditional
	classes—I tried to stick to transitioning <code>opacity</code> and
	<code>transform</code> after learning that, unlike most properties, they&#39;re hardware accelerated.`,I,w,v,E,t,m=`I used a <code class="svelte">svelte/store</code> to synchronize the keyboard state with
	the current letter, and added some randomized timeouts to make the &#39;active typing&#39; effect feel less robotic.`,M,x,A,T,Q,G,W,X,U;return g=new pe({}),v=new te({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[de]},$$scope:{ctx:h}}}),{c(){s=p("h1"),s.innerHTML=i,r=$(),u=p("p"),u.textContent=o,c=$(),D(g.$$.fragment),_=$(),z=p("hr"),H=$(),f=p("p"),f.innerHTML=R,k=$(),b=p("p"),b.innerHTML=N,I=$(),w=p("div"),D(v.$$.fragment),E=$(),t=p("p"),t.innerHTML=m,M=$(),x=p("hr"),A=$(),T=p("p"),Q=J("This is all delicately stitched together in a poorly organized "),G=p("a"),W=J("Svelte MEGA REPL"),X=J(`\r
	filled with absolute units and magic numbers. Open at your own risk!`),this.h()},l(e){s=d(e,"H1",{"data-svelte-h":!0}),j(s)!=="svelte-e4vfw6"&&(s.innerHTML=i),r=y(e),u=d(e,"P",{"data-svelte-h":!0}),j(u)!=="svelte-1382m2a"&&(u.textContent=o),c=y(e),O(g.$$.fragment,e),_=y(e),z=d(e,"HR",{}),H=y(e),f=d(e,"P",{"data-svelte-h":!0}),j(f)!=="svelte-vluewg"&&(f.innerHTML=R),k=y(e),b=d(e,"P",{"data-svelte-h":!0}),j(b)!=="svelte-1fhl4fc"&&(b.innerHTML=N),I=y(e),w=d(e,"DIV",{class:!0});var n=S(w);O(v.$$.fragment,n),n.forEach(a),E=y(e),t=d(e,"P",{"data-svelte-h":!0}),j(t)!=="svelte-1tuxgsg"&&(t.innerHTML=m),M=y(e),x=d(e,"HR",{}),A=y(e),T=d(e,"P",{});var P=S(T);Q=K(P,"This is all delicately stitched together in a poorly organized "),G=d(P,"A",{href:!0,target:!0});var se=S(G);W=K(se,"Svelte MEGA REPL"),se.forEach(a),X=K(P,`\r
	filled with absolute units and magic numbers. Open at your own risk!`),P.forEach(a),this.h()},h(){L(w,"class","max-w svelte-16vu4r3"),L(G,"href",ge),L(G,"target","_blank")},m(e,n){l(e,s,n),l(e,r,n),l(e,u,n),l(e,c,n),V(g,e,n),l(e,_,n),l(e,z,n),l(e,H,n),l(e,f,n),l(e,k,n),l(e,b,n),l(e,I,n),l(e,w,n),V(v,w,null),l(e,E,n),l(e,t,n),l(e,M,n),l(e,x,n),l(e,A,n),l(e,T,n),C(T,Q),C(T,G),C(G,W),C(T,X),U=!0},p(e,[n]){const P={};n&1&&(P.$$scope={dirty:n,ctx:e}),v.$set(P)},i(e){U||(q(g.$$.fragment,e),q(v.$$.fragment,e),U=!0)},o(e){B(g.$$.fragment,e),B(v.$$.fragment,e),U=!1},d(e){e&&(a(s),a(r),a(u),a(c),a(_),a(z),a(H),a(f),a(k),a(b),a(I),a(w),a(E),a(t),a(M),a(x),a(A),a(T)),F(g,e),F(v)}}}const ge="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0";class be extends ie{constructor(s){super(),le(this,s,null,ue,ne,{})}}export{be as component};