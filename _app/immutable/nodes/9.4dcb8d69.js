import{s as we,K as me,f as r,a as p,g as l,h as j,c as d,d as s,y as I,j as y,i as o,u as c,l as H,m as E}from"../chunks/scheduler.69e1f75a.js";import{S as Ce,i as ke,b as U,d as K,m as J,a as Q,t as W,e as X}from"../chunks/index.2af4a920.js";import{G as _e}from"../chunks/Gif.51d123e6.js";import{g as ue,a as he}from"../chunks/spread.8a54911c.js";import{I as Me}from"../chunks/Img.23ea5fd1.js";function Se(S){let n,i,f,b,x,h,w,g,T,$,M="A screenshot and some animations from the keyboard input and message thread areas.",R;const L=[S[0]];let C={};for(let t=0;t<L.length;t+=1)C=me(C,L[t]);f=new Me({props:C});const O=[S[1]];let A={};for(let t=0;t<O.length;t+=1)A=me(A,O[t]);h=new _e({props:A});const P=[S[2]];let G={};for(let t=0;t<P.length;t+=1)G=me(G,P[t]);return g=new _e({props:G}),{c(){n=r("figure"),i=r("div"),U(f.$$.fragment),b=p(),x=r("div"),U(h.$$.fragment),w=p(),U(g.$$.fragment),T=p(),$=r("figcaption"),$.textContent=M,this.h()},l(t){n=l(t,"FIGURE",{class:!0,role:!0});var _=j(n);i=l(_,"DIV",{class:!0});var k=j(i);K(f.$$.fragment,k),b=d(k),x=l(k,"DIV",{class:!0});var m=j(x);K(h.$$.fragment,m),w=d(m),K(g.$$.fragment,m),m.forEach(s),k.forEach(s),T=d(_),$=l(_,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),I($)!=="svelte-ix7ai3"&&($.textContent=M),_.forEach(s),this.h()},h(){y(x,"class","gifs svelte-36oe3n"),y(i,"class","container radius svelte-36oe3n"),y($,"class","caption"),y(n,"class","max-w svelte-36oe3n"),y(n,"role","group")},m(t,_){o(t,n,_),c(n,i),J(f,i,null),c(i,b),c(i,x),J(h,x,null),c(x,w),J(g,x,null),c(n,T),c(n,$),R=!0},p(t,[_]){const k=_&1?ue(L,[he(t[0])]):{};f.$set(k);const m=_&2?ue(O,[he(t[1])]):{};h.$set(m);const Y=_&4?ue(P,[he(t[2])]):{};g.$set(Y)},i(t){R||(Q(f.$$.fragment,t),Q(h.$$.fragment,t),Q(g.$$.fragment,t),R=!0)},o(t){W(f.$$.fragment,t),W(h.$$.fragment,t),W(g.$$.fragment,t),R=!1},d(t){t&&s(n),X(f),X(h),X(g)}}}function Ie(S){return[{src:"/media/projects/NotiMessage/notimsg.avif",alt:"nondescript bar shaped mobile device",radius_type:"combo left",to:{x:-1,y:0,s:1.12},from:{x:-1,y:0,s:1.08},fit:"fill"},{src:"/media/projects/NotiMessage/keyboard_typing.mp4",radius_type:"combo tr",autoplay:!1,t:"#t=1.6"},{src:"/media/projects/NotiMessage/message_closeup_slay.mp4",radius_type:"combo br"}]}class He extends Ce{constructor(n){super(),ke(this,n,Ie,Se,we,{})}}function Ee(S){let n;return{c(){n=H("Bouncy button showing direction of queued text")},l(i){n=E(i,"Bouncy button showing direction of queued text")},m(i,f){o(i,n,f)},d(i){i&&s(n)}}}function Te(S){let n,i="<span>Not iMessage</span>",f,b,x=`A fake iMessage &#39;emulator&#39; I made to try out some Svelte features and get more comfortable on the front-end. It
	doesn&#39;t really <em>do</em> anything, but working through it was a nice way to learn all about CSS and experiment with different
	techniques.`,h,w,g,T,$,M,R="Scripting + Svelte",L,C,O=`It basically loops over a preconfigured array of &#39;texts&#39;, which are added to the DOM &amp; auto scrolled with
	Svelte&#39;s built-in <code>transition</code> and <code>before/afterUpdate</code> directives. I added in some random
	timeouts to make the &#39;typing&#39; effect feel less robotic and use a <code>svelte/store</code> to synchronize component states.`,A,P,G,t,_="Styling + CSS",k,m,Y=`Thanks to conditional classes, I got most of the animations working directly in CSS via
	<code data-before="@">keyframes</code> rules. For performance (not that it&#39;s especially important here), I tried
	keeping value transitions on the <code>opacity</code> and <code>transform</code> properties—surprisingly
	flexible combo when paired with <code data-before="::">pseudo-elements</code>!`,Z,q,N,ee,V,ve=`The keycaps and the message bubbles were were made using the <code>clip-path</code> property, and pretty
	much all the other shapes and icons use a mix of <code data-type="html">div</code> soup,
	<code data-type="html">svg</code>, and <code>box-shadow</code>.`,te,se,ae,u,oe,B,ye="powerful",re,D,le,ie,z,ce,fe,F,pe,de,ne;return w=new He({}),N=new _e({props:{src:"/media/projects/NotiMessage/next_message_button.mp4",$$slots:{caption:[Ee]},$$scope:{ctx:S}}}),{c(){n=r("h1"),n.innerHTML=i,f=p(),b=r("p"),b.innerHTML=x,h=p(),U(w.$$.fragment),g=p(),T=r("hr"),$=p(),M=r("h3"),M.textContent=R,L=p(),C=r("p"),C.innerHTML=O,A=p(),P=r("hr"),G=p(),t=r("h3"),t.textContent=_,k=p(),m=r("p"),m.innerHTML=Y,Z=p(),q=r("div"),U(N.$$.fragment),ee=p(),V=r("p"),V.innerHTML=ve,te=p(),se=r("hr"),ae=p(),u=r("p"),oe=H("Before making this I never knew how "),B=r("em"),B.textContent=ye,re=H(` CSS was—with enough effort, you can do\r
	`),D=r("a"),le=H("practically anything"),ie=H(` (short of embedding\r
	`),z=r("a"),ce=H("custom shaders"),fe=H(`)! Very cool and tons to learn. All the pieces were slopped\r
	together in a poorly organized Svelte `),F=r("a"),pe=H("MEGA REPL"),de=H(" I'm currently too scared to open."),this.h()},l(e){n=l(e,"H1",{"data-svelte-h":!0}),I(n)!=="svelte-e4vfw6"&&(n.innerHTML=i),f=d(e),b=l(e,"P",{"data-svelte-h":!0}),I(b)!=="svelte-mvo4t9"&&(b.innerHTML=x),h=d(e),K(w.$$.fragment,e),g=d(e),T=l(e,"HR",{}),$=d(e),M=l(e,"H3",{"data-svelte-h":!0}),I(M)!=="svelte-be283n"&&(M.textContent=R),L=d(e),C=l(e,"P",{"data-svelte-h":!0}),I(C)!=="svelte-1bsnyxm"&&(C.innerHTML=O),A=d(e),P=l(e,"HR",{}),G=d(e),t=l(e,"H3",{"data-svelte-h":!0}),I(t)!=="svelte-1puheoq"&&(t.textContent=_),k=d(e),m=l(e,"P",{"data-svelte-h":!0}),I(m)!=="svelte-1wieo43"&&(m.innerHTML=Y),Z=d(e),q=l(e,"DIV",{class:!0});var a=j(q);K(N.$$.fragment,a),a.forEach(s),ee=d(e),V=l(e,"P",{"data-svelte-h":!0}),I(V)!=="svelte-ko2kd0"&&(V.innerHTML=ve),te=d(e),se=l(e,"HR",{}),ae=d(e),u=l(e,"P",{});var v=j(u);oe=E(v,"Before making this I never knew how "),B=l(v,"EM",{class:!0,"data-svelte-h":!0}),I(B)!=="svelte-1yxl8r7"&&(B.textContent=ye),re=E(v,` CSS was—with enough effort, you can do\r
	`),D=l(v,"A",{href:!0,target:!0});var $e=j(D);le=E($e,"practically anything"),$e.forEach(s),ie=E(v,` (short of embedding\r
	`),z=l(v,"A",{href:!0,target:!0});var be=j(z);ce=E(be,"custom shaders"),be.forEach(s),fe=E(v,`)! Very cool and tons to learn. All the pieces were slopped\r
	together in a poorly organized Svelte `),F=l(v,"A",{href:!0,target:!0});var xe=j(F);pe=E(xe,"MEGA REPL"),xe.forEach(s),de=E(v," I'm currently too scared to open."),v.forEach(s),this.h()},h(){y(q,"class","max-w svelte-1kh7ufl"),y(B,"class","txt-glow"),y(D,"href",Ae),y(D,"target",ge),y(z,"href",Pe),y(z,"target",ge),y(F,"href",Le),y(F,"target",ge)},m(e,a){o(e,n,a),o(e,f,a),o(e,b,a),o(e,h,a),J(w,e,a),o(e,g,a),o(e,T,a),o(e,$,a),o(e,M,a),o(e,L,a),o(e,C,a),o(e,A,a),o(e,P,a),o(e,G,a),o(e,t,a),o(e,k,a),o(e,m,a),o(e,Z,a),o(e,q,a),J(N,q,null),o(e,ee,a),o(e,V,a),o(e,te,a),o(e,se,a),o(e,ae,a),o(e,u,a),c(u,oe),c(u,B),c(u,re),c(u,D),c(D,le),c(u,ie),c(u,z),c(z,ce),c(u,fe),c(u,F),c(F,pe),c(u,de),ne=!0},p(e,[a]){const v={};a&1&&(v.$$scope={dirty:a,ctx:e}),N.$set(v)},i(e){ne||(Q(w.$$.fragment,e),Q(N.$$.fragment,e),ne=!0)},o(e){W(w.$$.fragment,e),W(N.$$.fragment,e),ne=!1},d(e){e&&(s(n),s(f),s(b),s(h),s(g),s(T),s($),s(M),s(L),s(C),s(A),s(P),s(G),s(t),s(k),s(m),s(Z),s(q),s(ee),s(V),s(te),s(se),s(ae),s(u)),X(w,e),X(N)}}}const Le="https://svelte.dev/repl/efbe1765f0bf44158853d7bf8afc6b54?version=4.2.0",Ae="https://a.singlediv.com/",Pe="https://vanseodesign.com/css/custom-filters-shader-basics/",ge="_blank";class Ve extends Ce{constructor(n){super(),ke(this,n,null,Te,we,{})}}export{Ve as component};
