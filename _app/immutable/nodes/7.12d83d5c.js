import{s as $e,f as u,a as $,g as d,h as N,c as b,d as s,G as H,j as x,i as l,u as p,l as R,m as M,I as me,p as Me,S as De,v as Ge}from"../chunks/scheduler.bbcb3fe0.js";import{S as be,i as we,b as O,d as q,m as Q,a as U,t as V,e as W,j as Ee}from"../chunks/index.303e8b5d.js";import{G as Te,R as _e}from"../chunks/Gif.e03e068b.js";import{g as ue,a as de}from"../chunks/spread.8a54911c.js";import{R as Le}from"../chunks/RangeSlider.35207d22.js";function Se(h){let a;return{c(){a=R("Blender donut")},l(n){a=M(n,"Blender donut")},m(n,i){l(n,a,i)},d(n){n&&s(a)}}}function je(h){let a;return{c(){a=R("Quick ttk on boss")},l(n){a=M(n,"Quick ttk on boss")},m(n,i){l(n,a,i)},d(n){n&&s(a)}}}function ze(h){let a,n,i,v,g,C,o,P=`Demo gifs: Tutorial Donut and gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,_;return i=new Te({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 24vh)",autoplay:!1,$$slots:{caption:[Se]},$$scope:{ctx:h}}}),g=new Te({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 24vh)",controlsBg:"#0006",$$slots:{caption:[je]},$$scope:{ctx:h}}}),{c(){a=u("figure"),n=u("div"),O(i.$$.fragment),v=$(),O(g.$$.fragment),C=$(),o=u("figcaption"),o.innerHTML=P,this.h()},l(f){a=d(f,"FIGURE",{class:!0,role:!0});var c=N(a);n=d(c,"DIV",{class:!0});var w=N(n);q(i.$$.fragment,w),v=b(w),q(g.$$.fragment,w),w.forEach(s),C=b(c),o=d(c,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),H(o)!=="svelte-1s14123"&&(o.innerHTML=P),c.forEach(s),this.h()},h(){x(n,"class","svelte-o0m8eb"),x(o,"class","caption"),x(a,"class","max-w svelte-o0m8eb"),x(a,"role","group")},m(f,c){l(f,a,c),p(a,n),Q(i,n,null),p(n,v),Q(g,n,null),p(a,C),p(a,o),_=!0},p(f,[c]){const w={};c&1&&(w.$$scope={dirty:c,ctx:f}),i.$set(w);const D={};c&1&&(D.$$scope={dirty:c,ctx:f}),g.$set(D)},i(f){_||(U(i.$$.fragment,f),U(g.$$.fragment,f),_=!0)},o(f){V(i.$$.fragment,f),V(g.$$.fragment,f),_=!1},d(f){f&&s(a),W(i),W(g)}}}class Ae extends be{constructor(a){super(),we(this,a,null,ze,$e,{})}}function Be(h){let a,n,i,v,g,C,o,P,_,f,c,w,D=`Comparing canvas quality at different render scales (simulated DPR=3). From left: no scaling (20px), 1×DPR\r
		(60px), and 2×DPR (120px).`,k;const S=[{size:20},{percent:h[0]},h[2]];let T={};for(let t=0;t<S.length;t+=1)T=me(T,S[t]);i=new _e({props:T});const j=[{size:60},{percent:h[0]},h[2]];let J={};for(let t=0;t<j.length;t+=1)J=me(J,j[t]);g=new _e({props:J});const E=[{size:120},{percent:h[0]},h[2]];let z={};for(let t=0;t<E.length;t+=1)z=me(z,E[t]);o=new _e({props:z});const A=[h[1]];function y(t){h[3](t)}let B={};for(let t=0;t<A.length;t+=1)B=me(B,A[t]);return h[0]!==void 0&&(B.value=h[0]),_=new Le({props:B}),Me.push(()=>Ee(_,"value",y)),{c(){a=u("figure"),n=u("div"),O(i.$$.fragment),v=$(),O(g.$$.fragment),C=$(),O(o.$$.fragment),P=$(),O(_.$$.fragment),c=$(),w=u("figcaption"),w.textContent=D,this.h()},l(t){a=d(t,"FIGURE",{class:!0});var m=N(a);n=d(m,"DIV",{class:!0});var I=N(n);q(i.$$.fragment,I),v=b(I),q(g.$$.fragment,I),C=b(I),q(o.$$.fragment,I),I.forEach(s),P=b(m),q(_.$$.fragment,m),c=b(m),w=d(m,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),H(w)!=="svelte-kxdp0i"&&(w.textContent=D),m.forEach(s),this.h()},h(){x(n,"class","radius"),x(w,"class","caption"),x(a,"class","max-w svelte-w5ztb3")},m(t,m){l(t,a,m),p(a,n),Q(i,n,null),p(n,v),Q(g,n,null),p(n,C),Q(o,n,null),p(a,P),Q(_,a,null),p(a,c),p(a,w),k=!0},p(t,[m]){const I=m&5?ue(S,[S[0],m&1&&{percent:t[0]},m&4&&de(t[2])]):{};i.$set(I);const L=m&5?ue(j,[j[0],m&1&&{percent:t[0]},m&4&&de(t[2])]):{};g.$set(L);const se=m&5?ue(E,[E[0],m&1&&{percent:t[0]},m&4&&de(t[2])]):{};o.$set(se);const te=m&2?ue(A,[de(t[1])]):{};!f&&m&1&&(f=!0,te.value=t[0],De(()=>f=!1)),_.$set(te)},i(t){k||(U(i.$$.fragment,t),U(g.$$.fragment,t),U(o.$$.fragment,t),U(_.$$.fragment,t),k=!0)},o(t){V(i.$$.fragment,t),V(g.$$.fragment,t),V(o.$$.fragment,t),V(_.$$.fragment,t),k=!1},d(t){t&&s(a),W(i),W(g),W(o),W(_)}}}function Fe(h,a,n){const i={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--color-caption)"};let v=85;const g={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"none"};function C(o){v=o,n(0,v)}return[v,i,g,C]}class Ne extends be{constructor(a){super(),we(this,a,Fe,Be,$e,{})}}function Oe(h){let a,n="<span>Gif Scrubber</span>",i,v,g=`A custom inline video player with drag controls. I made this component in the process of updating my website to have a
	more flexible way to handle media and avoid the headache of trying to optimize <em>real</em> gifs.`,C,o,P,_,f,c,w=`To keep it minimal and mobile-friendly, I stuck an always-visible playback <code data-type="html">button</code> on the
	corner and use a couple of pointer events to manage timeline scrubbing.`,D,k,S,T,j,J,E,z,A,y,B,t,m="svg",I,L,se="canvas",te,ae,ye="many",ge,K,he,ve,ne,X,re,Y,Ce=`I used a factor of 2×DPR (<em>i.e.</em> the last one) to make it <em>super</em> crisp: <em>super</em>
	unnecessary! It <em>was</em> slightly sharper and didn&#39;t have a noticeable impact on performance, so I went with it.`,le,ie,oe,Z,xe=`Never realized that providing a single video source (<em>using any codec less than two decades old</em>) would be
	nearly impossible without breaking compatibility. I ended up writing a Python script to backfill every mp4 with WebM
	before building. Magic ffmpeg command:`,pe,F,ke=`<code class="svelte-syby6g"><span>ffmpeg</span> -i [input] -movflags +faststart -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output]</code>
`,fe,ee,Ie=`Getting it to work consistently across browsers/devices was a lot more involved(and hacky) than I hoped, but I'm happy\r
	with how it turned out.`,ce;return o=new Ae({}),X=new Ne({}),{c(){a=u("h1"),a.innerHTML=n,i=$(),v=u("p"),v.innerHTML=g,C=$(),O(o.$$.fragment),P=$(),_=u("hr"),f=$(),c=u("p"),c.innerHTML=w,D=$(),k=u("p"),S=R(`It's set up so moving a distance across the container's width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about `),T=u("a"),j=R("draggable objects"),J=R(", extremely helpful!"),E=$(),z=u("hr"),A=$(),y=u("p"),B=R("I originally planned on using an "),t=u("code"),t.textContent=m,I=R(` for the progress indicator, but scrapped it for a\r
	`),L=u("code"),L.textContent=se,te=R(" after "),ae=u("em"),ae.textContent=ye,ge=R(` failed attempts at fixing transform jank. To prevent\r
	pixelation on high-dpi screens, the base resolution is scaled up by the\r
	`),K=u("a"),he=R("device pixel ratio (DPR)"),ve=R(" before its area is brought back down with CSS."),ne=$(),O(X.$$.fragment),re=$(),Y=u("p"),Y.innerHTML=Ce,le=$(),ie=u("hr"),oe=$(),Z=u("p"),Z.innerHTML=xe,pe=$(),F=u("pre"),F.innerHTML=ke,fe=$(),ee=u("p"),ee.textContent=Ie,this.h()},l(e){a=d(e,"H1",{"data-svelte-h":!0}),H(a)!=="svelte-16mbdpp"&&(a.innerHTML=n),i=b(e),v=d(e,"P",{"data-svelte-h":!0}),H(v)!=="svelte-1msuz6r"&&(v.innerHTML=g),C=b(e),q(o.$$.fragment,e),P=b(e),_=d(e,"HR",{}),f=b(e),c=d(e,"P",{"data-svelte-h":!0}),H(c)!=="svelte-3bkcyd"&&(c.innerHTML=w),D=b(e),k=d(e,"P",{});var r=N(k);S=M(r,`It's set up so moving a distance across the container's width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about `),T=d(r,"A",{href:!0,target:!0});var He=N(T);j=M(He,"draggable objects"),He.forEach(s),J=M(r,", extremely helpful!"),r.forEach(s),E=b(e),z=d(e,"HR",{}),A=b(e),y=d(e,"P",{});var G=N(y);B=M(G,"I originally planned on using an "),t=d(G,"CODE",{"data-type":!0,"data-svelte-h":!0}),H(t)!=="svelte-mflvan"&&(t.textContent=m),I=M(G,` for the progress indicator, but scrapped it for a\r
	`),L=d(G,"CODE",{"data-type":!0,"data-svelte-h":!0}),H(L)!=="svelte-jhma2z"&&(L.textContent=se),te=M(G," after "),ae=d(G,"EM",{"data-svelte-h":!0}),H(ae)!=="svelte-q8yrbd"&&(ae.textContent=ye),ge=M(G,` failed attempts at fixing transform jank. To prevent\r
	pixelation on high-dpi screens, the base resolution is scaled up by the\r
	`),K=d(G,"A",{href:!0,target:!0});var Pe=N(K);he=M(Pe,"device pixel ratio (DPR)"),Pe.forEach(s),ve=M(G," before its area is brought back down with CSS."),G.forEach(s),ne=b(e),q(X.$$.fragment,e),re=b(e),Y=d(e,"P",{"data-svelte-h":!0}),H(Y)!=="svelte-17vxdi"&&(Y.innerHTML=Ce),le=b(e),ie=d(e,"HR",{}),oe=b(e),Z=d(e,"P",{"data-svelte-h":!0}),H(Z)!=="svelte-jhw2g8"&&(Z.innerHTML=xe),pe=b(e),F=d(e,"PRE",{class:!0,"data-svelte-h":!0}),H(F)!=="svelte-165br3l"&&(F.innerHTML=ke),fe=b(e),ee=d(e,"P",{"data-svelte-h":!0}),H(ee)!=="svelte-1kpmdto"&&(ee.textContent=Ie),this.h()},h(){x(T,"href",qe),x(T,"target",Re),x(t,"data-type","html"),x(L,"data-type","html"),x(K,"href",Qe),x(K,"target",Re),x(F,"class","codeblock overflowscrollbar svelte-syby6g")},m(e,r){l(e,a,r),l(e,i,r),l(e,v,r),l(e,C,r),Q(o,e,r),l(e,P,r),l(e,_,r),l(e,f,r),l(e,c,r),l(e,D,r),l(e,k,r),p(k,S),p(k,T),p(T,j),p(k,J),l(e,E,r),l(e,z,r),l(e,A,r),l(e,y,r),p(y,B),p(y,t),p(y,I),p(y,L),p(y,te),p(y,ae),p(y,ge),p(y,K),p(K,he),p(y,ve),l(e,ne,r),Q(X,e,r),l(e,re,r),l(e,Y,r),l(e,le,r),l(e,ie,r),l(e,oe,r),l(e,Z,r),l(e,pe,r),l(e,F,r),l(e,fe,r),l(e,ee,r),ce=!0},p:Ge,i(e){ce||(U(o.$$.fragment,e),U(X.$$.fragment,e),ce=!0)},o(e){V(o.$$.fragment,e),V(X.$$.fragment,e),ce=!1},d(e){e&&(s(a),s(i),s(v),s(C),s(P),s(_),s(f),s(c),s(D),s(k),s(E),s(z),s(A),s(y),s(ne),s(re),s(Y),s(le),s(ie),s(oe),s(Z),s(pe),s(F),s(fe),s(ee)),W(o,e),W(X,e)}}}const Re="_blank",qe="https://www.redblobgames.com/making-of/draggable/",Qe="https://cloudinary.com/glossary/device-pixel-ratio";class Xe extends be{constructor(a){super(),we(this,a,null,Oe,$e,{})}}export{Xe as component};
