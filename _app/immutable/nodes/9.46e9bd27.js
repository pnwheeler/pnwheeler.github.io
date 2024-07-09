import{s as ye,K as pe,f as o,a as h,g as c,h as D,c as g,d as s,G as I,j as _,z as xe,k as ve,i as l,u as v,H as Ce,l as R,m as B}from"../chunks/scheduler.6d6d93c7.js";import{S as be,i as we,b as K,d as J,m as Q,a as W,t as X,e as Y}from"../chunks/index.15fe4709.js";import{G as me}from"../chunks/Gif.a99e44ed.js";import{g as fe,a as de}from"../chunks/spread.8a54911c.js";import{I as Me}from"../chunks/Img.4709dfee.js";function ke(x){let n,i,r,$,p,d,y,b,A,j,m,U="A screenshot and some animations from the keyboard input and message thread areas.",S;const C=[x[1]];let V={};for(let t=0;t<C.length;t+=1)V=pe(V,C[t]);r=new Me({props:V});const T=[x[2]];let E={};for(let t=0;t<T.length;t+=1)E=pe(E,T[t]);d=new me({props:E});const L=[x[3]];let M={};for(let t=0;t<L.length;t+=1)M=pe(M,L[t]);return b=new me({props:M}),{c(){n=o("figure"),i=o("div"),K(r.$$.fragment),$=h(),p=o("div"),K(d.$$.fragment),y=h(),K(b.$$.fragment),j=h(),m=o("figcaption"),m.textContent=U,this.h()},l(t){n=c(t,"FIGURE",{class:!0,role:!0});var f=D(n);i=c(f,"DIV",{class:!0,style:!0});var u=D(i);J(r.$$.fragment,u),$=g(u),p=c(u,"DIV",{class:!0});var H=D(p);J(d.$$.fragment,H),y=g(H),J(b.$$.fragment,H),H.forEach(s),u.forEach(s),j=g(f),m=c(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),I(m)!=="svelte-ix7ai3"&&(m.textContent=U),f.forEach(s),this.h()},h(){_(p,"class","gifs svelte-tsg0ug"),xe(()=>x[4].call(p)),_(i,"class","container radius svelte-tsg0ug"),ve(i,"--h",Math.round(x[0])+"px"),_(m,"class","caption"),_(n,"class","max-w svelte-tsg0ug"),_(n,"role","group")},m(t,f){l(t,n,f),v(n,i),Q(r,i,null),v(i,$),v(i,p),Q(d,p,null),v(p,y),Q(b,p,null),A=Ce(p,x[4].bind(p)),v(n,j),v(n,m),S=!0},p(t,[f]){const u=f&2?fe(C,[de(t[1])]):{};r.$set(u);const H=f&4?fe(T,[de(t[2])]):{};d.$set(H);const F=f&8?fe(L,[de(t[3])]):{};b.$set(F),(!S||f&1)&&ve(i,"--h",Math.round(t[0])+"px")},i(t){S||(W(r.$$.fragment,t),W(d.$$.fragment,t),W(b.$$.fragment,t),S=!0)},o(t){X(r.$$.fragment,t),X(d.$$.fragment,t),X(b.$$.fragment,t),S=!1},d(t){t&&s(n),Y(r),Y(d),Y(b),A()}}}function Se(x,n,i){let r=0;const $={src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08}},p={src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr"},d={src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"};function y(){r=this.clientHeight,i(0,r)}return[r,$,p,d,y]}class He extends be{constructor(n){super(),we(this,n,Se,ke,ye,{})}}function Ie(x){let n;return{c(){n=R("Bouncy button shows direction of queued text")},l(i){n=B(i,"Bouncy button shows direction of queued text")},m(i,r){l(i,n,r)},d(i){i&&s(n)}}}function je(x){let n,i="<span>Not iMessage</span>",r,$,p=`A web-based iMessage &#39;emulator&#39; I made to try out some Svelte features and get more familiar with the front-end. It doesn&#39;t
	really <em>do</em> anything, but working through it was a nice way to try out different techniques and learn all about CSS.`,d,y,b,A,j,m,U="Svelte + scripting",S,C,V=`It basically just loops through a preset array of &#39;texts&#39;, which are added to the DOM + auto scrolled using Svelte&#39;s built-in <code>transition</code> and
	<code>before/afterUpdate</code> directives. I used a <code class="svelte">svelte/store</code> to synchronize component states and, somewhere in there, I also inserted random delays to make the &#39;typing&#39;
	effect feel a less robotic.`,T,E,L,M,t="CSS (Cool Styles Stuff)",f,u,H=`Thanks to conditional classes, most of the other animations were done directly in CSS <code>@keyframes</code>
	rules. To maintain performance, I tried keeping value transitions on the <code>opacity</code> and
	<code>transform</code> properties—paired with <code>::pseudo-elements</code>, it&#39;s a surprisingly flexible combination.`,F,G,z,Z,q,ue=`The active keycap and message bubble shapes were made using an inlined <code data-type="html">svg</code> reference in
	<code>clip-path</code>, but everything else was styled with
	<code>box-shadow</code> and <code data-type="html">div</code> soup.`,ee,te,se,w,ne,O,he="powerful",le,P,ie,re,N,oe,ce,ae;return y=new He({}),z=new me({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[Ie]},$$scope:{ctx:x}}}),{c(){n=o("h1"),n.innerHTML=i,r=h(),$=o("p"),$.innerHTML=p,d=h(),K(y.$$.fragment),b=h(),A=o("hr"),j=h(),m=o("h3"),m.textContent=U,S=h(),C=o("p"),C.innerHTML=V,T=h(),E=o("hr"),L=h(),M=o("h3"),M.textContent=t,f=h(),u=o("p"),u.innerHTML=H,F=h(),G=o("div"),K(z.$$.fragment),Z=h(),q=o("p"),q.innerHTML=ue,ee=h(),te=o("hr"),se=h(),w=o("p"),ne=R("Before making this, I never realized how "),O=o("em"),O.textContent=he,le=R(` CSS is—you can do\r
	`),P=o("a"),ie=R("practically anything"),re=R(`! All the pieces were slopped together in a poorly organized\r
	Svelte `),N=o("a"),oe=R("MEGA REPL"),ce=R("—open at your own risk! It's frightening..."),this.h()},l(e){n=c(e,"H1",{"data-svelte-h":!0}),I(n)!=="svelte-e4vfw6"&&(n.innerHTML=i),r=g(e),$=c(e,"P",{class:!0,"data-svelte-h":!0}),I($)!=="svelte-felnx9"&&($.innerHTML=p),d=g(e),J(y.$$.fragment,e),b=g(e),A=c(e,"HR",{}),j=g(e),m=c(e,"H3",{"data-svelte-h":!0}),I(m)!=="svelte-18nvm4b"&&(m.textContent=U),S=g(e),C=c(e,"P",{class:!0,"data-svelte-h":!0}),I(C)!=="svelte-1i2w95n"&&(C.innerHTML=V),T=g(e),E=c(e,"HR",{}),L=g(e),M=c(e,"H3",{"data-svelte-h":!0}),I(M)!=="svelte-1vvpxsd"&&(M.textContent=t),f=g(e),u=c(e,"P",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-1bgbb4k"&&(u.innerHTML=H),F=g(e),G=c(e,"DIV",{class:!0});var a=D(G);J(z.$$.fragment,a),a.forEach(s),Z=g(e),q=c(e,"P",{class:!0,"data-svelte-h":!0}),I(q)!=="svelte-11rzwzp"&&(q.innerHTML=ue),ee=g(e),te=c(e,"HR",{}),se=g(e),w=c(e,"P",{class:!0});var k=D(w);ne=B(k,"Before making this, I never realized how "),O=c(k,"EM",{"data-svelte-h":!0}),I(O)!=="svelte-kwj9hi"&&(O.textContent=he),le=B(k,` CSS is—you can do\r
	`),P=c(k,"A",{href:!0,target:!0});var ge=D(P);ie=B(ge,"practically anything"),ge.forEach(s),re=B(k,`! All the pieces were slopped together in a poorly organized\r
	Svelte `),N=c(k,"A",{href:!0,target:!0});var _e=D(N);oe=B(_e,"MEGA REPL"),_e.forEach(s),ce=B(k,"—open at your own risk! It's frightening..."),k.forEach(s),this.h()},h(){_($,"class","svelte-1joqmah"),_(C,"class","svelte-1joqmah"),_(u,"class","svelte-1joqmah"),_(G,"class","max-w svelte-1joqmah"),_(q,"class","svelte-1joqmah"),_(P,"href",Ee),_(P,"target",$e),_(N,"href",Te),_(N,"target",$e),_(w,"class","svelte-1joqmah")},m(e,a){l(e,n,a),l(e,r,a),l(e,$,a),l(e,d,a),Q(y,e,a),l(e,b,a),l(e,A,a),l(e,j,a),l(e,m,a),l(e,S,a),l(e,C,a),l(e,T,a),l(e,E,a),l(e,L,a),l(e,M,a),l(e,f,a),l(e,u,a),l(e,F,a),l(e,G,a),Q(z,G,null),l(e,Z,a),l(e,q,a),l(e,ee,a),l(e,te,a),l(e,se,a),l(e,w,a),v(w,ne),v(w,O),v(w,le),v(w,P),v(P,ie),v(w,re),v(w,N),v(N,oe),v(w,ce),ae=!0},p(e,[a]){const k={};a&1&&(k.$$scope={dirty:a,ctx:e}),z.$set(k)},i(e){ae||(W(y.$$.fragment,e),W(z.$$.fragment,e),ae=!0)},o(e){X(y.$$.fragment,e),X(z.$$.fragment,e),ae=!1},d(e){e&&(s(n),s(r),s($),s(d),s(b),s(A),s(j),s(m),s(S),s(C),s(T),s(E),s(L),s(M),s(f),s(u),s(F),s(G),s(Z),s(q),s(ee),s(te),s(se),s(w)),Y(y,e),Y(z)}}}const Te="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0",Ee="https://a.singlediv.com/",$e="_blank";class Pe extends be{constructor(n){super(),we(this,n,null,je,ye,{})}}export{Pe as component};