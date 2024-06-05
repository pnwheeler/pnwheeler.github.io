import{s as Ge,f as i,a as m,g as o,h as E,c as d,d as t,G as y,j as k,i as n,u as f,l as H,m as I,K as ye,p as We,S as Xe,v as Ye}from"../chunks/scheduler.8d84c197.js";import{S as je,i as ze,b as F,d as B,m as O,a as N,t as Q,e as U,j as Ze}from"../chunks/index.5e028736.js";import{G as Ke,R as De}from"../chunks/Gif.cb2d118f.js";import{g as xe,a as Ce}from"../chunks/spread.8a54911c.js";import{R as et}from"../chunks/RangeSlider.00a7ad4c.js";function tt(_){let a;return{c(){a=H("Blender donut")},l(l){a=I(l,"Blender donut")},m(l,p){n(l,a,p)},d(l){l&&t(a)}}}function at(_){let a;return{c(){a=H("Quick ttk on boss")},l(l){a=I(l,"Quick ttk on boss")},m(l,p){n(l,a,p)},d(l){l&&t(a)}}}function st(_){let a,l,p,$,v,x,c,R=`Demo gifs: Tutorial Donut and gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,b;return p=new Ke({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 24vh)",radius_type:"combo left",$$slots:{caption:[tt]},$$scope:{ctx:_}}}),v=new Ke({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 24vh)",t:"#t=1",autoplay:!1,controlsBg:"#0006",radius_type:"combo right",$$slots:{caption:[at]},$$scope:{ctx:_}}}),{c(){a=i("figure"),l=i("div"),F(p.$$.fragment),$=m(),F(v.$$.fragment),x=m(),c=i("figcaption"),c.innerHTML=R,this.h()},l(h){a=o(h,"FIGURE",{class:!0,role:!0});var g=E(a);l=o(g,"DIV",{class:!0});var w=E(l);B(p.$$.fragment,w),$=d(w),B(v.$$.fragment,w),w.forEach(t),x=d(g),c=o(g,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),y(c)!=="svelte-1s14123"&&(c.innerHTML=R),g.forEach(t),this.h()},h(){k(l,"class","svelte-o0m8eb"),k(c,"class","caption"),k(a,"class","max-w svelte-o0m8eb"),k(a,"role","group")},m(h,g){n(h,a,g),f(a,l),O(p,l,null),f(l,$),O(v,l,null),f(a,x),f(a,c),b=!0},p(h,[g]){const w={};g&1&&(w.$$scope={dirty:g,ctx:h}),p.$set(w);const D={};g&1&&(D.$$scope={dirty:g,ctx:h}),v.$set(D)},i(h){b||(N(p.$$.fragment,h),N(v.$$.fragment,h),b=!0)},o(h){Q(p.$$.fragment,h),Q(v.$$.fragment,h),b=!1},d(h){h&&t(a),U(p),U(v)}}}class rt extends je{constructor(a){super(),ze(this,a,null,st,Ge,{})}}function nt(_){let a,l,p,$,v,x,c,R,b,h,g,w,D=`Simulating DPR=3 to compare canvas quality at increasing render scales. From left: default (<em>20px</em>), by 1×DPR
		(<em>60px</em>), and by 2×DPR (<em>120px</em>).`,P;const V=[{size:20},{percent:_[0]},_[2]];let j={};for(let s=0;s<V.length;s+=1)j=ye(j,V[s]);p=new De({props:j});const T=[{size:60},{percent:_[0]},_[2]];let J={};for(let s=0;s<T.length;s+=1)J=ye(J,T[s]);v=new De({props:J});const M=[{size:120},{percent:_[0]},_[2]];let K={};for(let s=0;s<M.length;s+=1)K=ye(K,M[s]);c=new De({props:K});const W=[_[1]];function le(s){_[3](s)}let G={};for(let s=0;s<W.length;s+=1)G=ye(G,W[s]);return _[0]!==void 0&&(G.value=_[0]),b=new et({props:G}),We.push(()=>Ze(b,"value",le)),{c(){a=i("figure"),l=i("div"),F(p.$$.fragment),$=m(),F(v.$$.fragment),x=m(),F(c.$$.fragment),R=m(),F(b.$$.fragment),g=m(),w=i("figcaption"),w.innerHTML=D,this.h()},l(s){a=o(s,"FIGURE",{class:!0,role:!0});var u=E(a);l=o(u,"DIV",{class:!0});var L=E(l);B(p.$$.fragment,L),$=d(L),B(v.$$.fragment,L),x=d(L),B(c.$$.fragment,L),L.forEach(t),R=d(u),B(b.$$.fragment,u),g=d(u),w=o(u,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),y(w)!=="svelte-zhrkhc"&&(w.innerHTML=D),u.forEach(t),this.h()},h(){k(l,"class","radius examples svelte-15ez60t"),k(w,"class","caption"),k(a,"class","max-w svelte-15ez60t"),k(a,"role","group")},m(s,u){n(s,a,u),f(a,l),O(p,l,null),f(l,$),O(v,l,null),f(l,x),O(c,l,null),f(a,R),O(b,a,null),f(a,g),f(a,w),P=!0},p(s,[u]){const L=u&5?xe(V,[V[0],u&1&&{percent:s[0]},u&4&&Ce(s[2])]):{};p.$set(L);const ie=u&5?xe(T,[T[0],u&1&&{percent:s[0]},u&4&&Ce(s[2])]):{};v.$set(ie);const C=u&5?xe(M,[M[0],u&1&&{percent:s[0]},u&4&&Ce(s[2])]):{};c.$set(C);const oe=u&2?xe(W,[Ce(s[1])]):{};!h&&u&1&&(h=!0,oe.value=s[0],Xe(()=>h=!1)),b.$set(oe)},i(s){P||(N(p.$$.fragment,s),N(v.$$.fragment,s),N(c.$$.fragment,s),N(b.$$.fragment,s),P=!0)},o(s){Q(p.$$.fragment,s),Q(v.$$.fragment,s),Q(c.$$.fragment,s),Q(b.$$.fragment,s),P=!1},d(s){s&&t(a),U(p),U(v),U(c),U(b)}}}function lt(_,a,l){const p={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--color-caption)"};let $=25;const v={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"none"};function x(c){$=c,l(0,$)}return[$,p,v,x]}class it extends je{constructor(a){super(),ze(this,a,lt,nt,Ge,{})}}function ot(_){let a,l="<span>Gif Scrubber</span>",p,$,v=`An inline video player made to act as a drop-in alternative to gif. Along with avoiding all the conversion-related\r
	headaches, the component makes media handling more flexible and has the added benefit of thirty years’ worth of codec\r
	improvements.`,x,c,R,b,h,g,w="Media Controls",D,P,V=`To make the behavior browser agnostic, it uses custom controls: I stuck an always-visible button on the corner for\r
	toggling play state and, when the container is grabbed, pointer events kick in to manage timeline scrubbing.`,j,T,J,M,K,W,le,G,s,u,L="Progress indicator",ie,C,oe,X,Se="svg",Te,Y,Ae="canvas",He,Z,Ie,Pe,pe,ee,ue,te,qe=`Just to try, I scaled the dimensions up by another factor of two (<em>i.e.</em> the rightmost canvas) to make it
	<em>super</em>
	crisp—<em>super</em>
	unnecessary! It <em>was</em> slightly sharper and there <em>wasn&#39;t</em> any noticeable impact on performance (only a single
	canvas is active at a time), so I went with it.`,ce,fe,me,ae,Fe="Format Considerations",de,se,Be=`While testing, I realized that replacing <code data-type="ext">.gifs</code> with the
	<code data-type="html">video</code> element comes with a couple of nontrivial (to me, at least) drawbacks:`,he,z,Oe="<li>you can’t <em>press-and-hold</em> to save on mobile</li> <li>they won&#39;t be visible in reader mode</li> <li>playback isn&#39;t guaranteed—it depends on a support matrix of browser features and hardware capabilities</li>",ge,re,Ne=`To make a long story short, I took care of the last point in a pre-build step by writing a Python script to traverse
	my media directory and generate <code data-type="ext">.webm</code> fallbacks. My magic ffmpeg command looks like this:`,ve,S,Qe=`<code class="svelte-1kecyt1"><span>ffmpeg</span> -i [input] -movflags +faststart -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output]</code>
`,_e,$e,be,A,Me,ne,Re,Le,we;return c=new rt({}),ee=new it({}),{c(){a=i("h1"),a.innerHTML=l,p=m(),$=i("p"),$.textContent=v,x=m(),F(c.$$.fragment),R=m(),b=i("hr"),h=m(),g=i("h3"),g.textContent=w,D=m(),P=i("p"),P.textContent=V,j=m(),T=i("p"),J=H(`It’s set up so moving a distance across the figure’s width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),M=i("a"),K=H("draggable objects"),W=H("—extremely helpful reference!"),le=m(),G=i("hr"),s=m(),u=i("h3"),u.textContent=L,ie=m(),C=i("p"),oe=H("The original "),X=i("code"),X.textContent=Se,Te=H(` was plagued by rotation jank, so I wound up porting the graphic to\r
	`),Y=i("code"),Y.textContent=Ae,He=H(`. That cleared up the transform issues, but introduced a new one that made it look\r
	blocky and aliased on high dpi screens. Thankfully, the browser provides a fix courtesy the\r
	`),Z=i("a"),Ie=H("device pixel ratio (DPR)"),Pe=H(", which can be queried and used as a resolution multiplier."),pe=m(),F(ee.$$.fragment),ue=m(),te=i("p"),te.innerHTML=qe,ce=m(),fe=i("hr"),me=m(),ae=i("h3"),ae.textContent=Fe,de=m(),se=i("p"),se.innerHTML=Be,he=m(),z=i("ol"),z.innerHTML=Oe,ge=m(),re=i("p"),re.innerHTML=Ne,ve=m(),S=i("pre"),S.innerHTML=Qe,_e=m(),$e=i("hr"),be=m(),A=i("p"),Me=H("Making everything work consistently across browsers and devices was a lot more complicated than I expected (e.g. "),ne=i("a"),Re=H("safari media fragment hack"),Le=H(", positioning quirks, etc.), but I’m happy with how it turned out and learned a lot in the process."),this.h()},l(e){a=o(e,"H1",{"data-svelte-h":!0}),y(a)!=="svelte-16mbdpp"&&(a.innerHTML=l),p=d(e),$=o(e,"P",{"data-svelte-h":!0}),y($)!=="svelte-12pe6pw"&&($.textContent=v),x=d(e),B(c.$$.fragment,e),R=d(e),b=o(e,"HR",{}),h=d(e),g=o(e,"H3",{"data-svelte-h":!0}),y(g)!=="svelte-1jcj2iy"&&(g.textContent=w),D=d(e),P=o(e,"P",{"data-svelte-h":!0}),y(P)!=="svelte-1um3w45"&&(P.textContent=V),j=d(e),T=o(e,"P",{});var r=E(T);J=I(r,`It’s set up so moving a distance across the figure’s width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),M=o(r,"A",{href:!0,target:!0});var Ue=E(M);K=I(Ue,"draggable objects"),Ue.forEach(t),W=I(r,"—extremely helpful reference!"),r.forEach(t),le=d(e),G=o(e,"HR",{}),s=d(e),u=o(e,"H3",{"data-svelte-h":!0}),y(u)!=="svelte-lxue3i"&&(u.textContent=L),ie=d(e),C=o(e,"P",{});var q=E(C);oe=I(q,"The original "),X=o(q,"CODE",{"data-type":!0,"data-svelte-h":!0}),y(X)!=="svelte-mflvan"&&(X.textContent=Se),Te=I(q,` was plagued by rotation jank, so I wound up porting the graphic to\r
	`),Y=o(q,"CODE",{"data-type":!0,"data-svelte-h":!0}),y(Y)!=="svelte-jhma2z"&&(Y.textContent=Ae),He=I(q,`. That cleared up the transform issues, but introduced a new one that made it look\r
	blocky and aliased on high dpi screens. Thankfully, the browser provides a fix courtesy the\r
	`),Z=o(q,"A",{href:!0,target:!0});var Ve=E(Z);Ie=I(Ve,"device pixel ratio (DPR)"),Ve.forEach(t),Pe=I(q,", which can be queried and used as a resolution multiplier."),q.forEach(t),pe=d(e),B(ee.$$.fragment,e),ue=d(e),te=o(e,"P",{"data-svelte-h":!0}),y(te)!=="svelte-14gkn7f"&&(te.innerHTML=qe),ce=d(e),fe=o(e,"HR",{}),me=d(e),ae=o(e,"H3",{"data-svelte-h":!0}),y(ae)!=="svelte-zo8yxa"&&(ae.textContent=Fe),de=d(e),se=o(e,"P",{"data-svelte-h":!0}),y(se)!=="svelte-ffz6fm"&&(se.innerHTML=Be),he=d(e),z=o(e,"OL",{role:!0,"data-svelte-h":!0}),y(z)!=="svelte-7379ec"&&(z.innerHTML=Oe),ge=d(e),re=o(e,"P",{"data-svelte-h":!0}),y(re)!=="svelte-park15"&&(re.innerHTML=Ne),ve=d(e),S=o(e,"PRE",{class:!0,"data-svelte-h":!0}),y(S)!=="svelte-al91pe"&&(S.innerHTML=Qe),_e=d(e),$e=o(e,"HR",{}),be=d(e),A=o(e,"P",{});var ke=E(A);Me=I(ke,"Making everything work consistently across browsers and devices was a lot more complicated than I expected (e.g. "),ne=o(ke,"A",{href:!0,target:!0});var Je=E(ne);Re=I(Je,"safari media fragment hack"),Je.forEach(t),Le=I(ke,", positioning quirks, etc.), but I’m happy with how it turned out and learned a lot in the process."),ke.forEach(t),this.h()},h(){k(M,"href",pt),k(M,"target",Ee),k(X,"data-type","html"),k(Y,"data-type","html"),k(Z,"href",ut),k(Z,"target",Ee),k(z,"role","list"),k(S,"class","codeblock overflow-scrollbar svelte-1kecyt1"),k(ne,"href",ct),k(ne,"target",Ee)},m(e,r){n(e,a,r),n(e,p,r),n(e,$,r),n(e,x,r),O(c,e,r),n(e,R,r),n(e,b,r),n(e,h,r),n(e,g,r),n(e,D,r),n(e,P,r),n(e,j,r),n(e,T,r),f(T,J),f(T,M),f(M,K),f(T,W),n(e,le,r),n(e,G,r),n(e,s,r),n(e,u,r),n(e,ie,r),n(e,C,r),f(C,oe),f(C,X),f(C,Te),f(C,Y),f(C,He),f(C,Z),f(Z,Ie),f(C,Pe),n(e,pe,r),O(ee,e,r),n(e,ue,r),n(e,te,r),n(e,ce,r),n(e,fe,r),n(e,me,r),n(e,ae,r),n(e,de,r),n(e,se,r),n(e,he,r),n(e,z,r),n(e,ge,r),n(e,re,r),n(e,ve,r),n(e,S,r),n(e,_e,r),n(e,$e,r),n(e,be,r),n(e,A,r),f(A,Me),f(A,ne),f(ne,Re),f(A,Le),we=!0},p:Ye,i(e){we||(N(c.$$.fragment,e),N(ee.$$.fragment,e),we=!0)},o(e){Q(c.$$.fragment,e),Q(ee.$$.fragment,e),we=!1},d(e){e&&(t(a),t(p),t($),t(x),t(R),t(b),t(h),t(g),t(D),t(P),t(j),t(T),t(le),t(G),t(s),t(u),t(ie),t(C),t(pe),t(ue),t(te),t(ce),t(fe),t(me),t(ae),t(de),t(se),t(he),t(z),t(ge),t(re),t(ve),t(S),t(_e),t($e),t(be),t(A)),U(c,e),U(ee,e)}}}const Ee="_blank",pt="https://www.redblobgames.com/making-of/draggable/",ut="https://cloudinary.com/glossary/device-pixel-ratio",ct="https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/";class vt extends je{constructor(a){super(),ze(this,a,null,ot,Ge,{})}}export{vt as component};
