import{s as Ae,f as i,a as d,g as o,h as j,c,d as t,G as w,j as y,i as s,u as p,l as C,m as k,K as He,p as st,S as lt,v as it}from"../chunks/scheduler.8d84c197.js";import{S as Oe,i as Be,b as O,d as B,m as N,a as Q,t as U,e as V,j as ot}from"../chunks/index.5e028736.js";import{G as rt,R as Se}from"../chunks/Gif.cb2d118f.js";import{g as Te,a as Ie}from"../chunks/spread.8a54911c.js";import{R as pt}from"../chunks/RangeSlider.00a7ad4c.js";function mt(_){let a;return{c(){a=C("Blender donut")},l(l){a=k(l,"Blender donut")},m(l,m){s(l,a,m)},d(l){l&&t(a)}}}function ft(_){let a;return{c(){a=C("Quick ttk on boss")},l(l){a=k(l,"Quick ttk on boss")},m(l,m){s(l,a,m)},d(l){l&&t(a)}}}function ut(_){let a,l,m,b,v,H,u,R=`Demo gifs: Tutorial Donut and gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,$;return m=new rt({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 24vh)",radius_type:"combo left",$$slots:{caption:[mt]},$$scope:{ctx:_}}}),v=new rt({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 24vh)",t:"#t=1",autoplay:!1,controlsBg:"#0006",radius_type:"combo right",$$slots:{caption:[ft]},$$scope:{ctx:_}}}),{c(){a=i("figure"),l=i("div"),O(m.$$.fragment),b=d(),O(v.$$.fragment),H=d(),u=i("figcaption"),u.innerHTML=R,this.h()},l(h){a=o(h,"FIGURE",{class:!0,role:!0});var g=j(a);l=o(g,"DIV",{class:!0});var x=j(l);B(m.$$.fragment,x),b=c(x),B(v.$$.fragment,x),x.forEach(t),H=c(g),u=o(g,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),w(u)!=="svelte-1s14123"&&(u.innerHTML=R),g.forEach(t),this.h()},h(){y(l,"class","svelte-o0m8eb"),y(u,"class","caption"),y(a,"class","max-w svelte-o0m8eb"),y(a,"role","group")},m(h,g){s(h,a,g),p(a,l),N(m,l,null),p(l,b),N(v,l,null),p(a,H),p(a,u),$=!0},p(h,[g]){const x={};g&1&&(x.$$scope={dirty:g,ctx:h}),m.$set(x);const D={};g&1&&(D.$$scope={dirty:g,ctx:h}),v.$set(D)},i(h){$||(Q(m.$$.fragment,h),Q(v.$$.fragment,h),$=!0)},o(h){U(m.$$.fragment,h),U(v.$$.fragment,h),$=!1},d(h){h&&t(a),V(m),V(v)}}}class dt extends Oe{constructor(a){super(),Be(this,a,null,ut,Ae,{})}}function ct(_){let a,l,m,b,v,H,u,R,$,h,g,x,D=`Simulating DPR=3 to compare canvas detail at different render scales. From left: default (<em>20px</em>), by 1×DPR
		(<em>60px</em>), and by 2×DPR (<em>120px</em>).`,P;const J=[{size:20},{percent:_[0]},_[2]];let F={};for(let n=0;n<J.length;n+=1)F=He(F,J[n]);m=new Se({props:F});const M=[{size:60},{percent:_[0]},_[2]];let K={};for(let n=0;n<M.length;n+=1)K=He(K,M[n]);v=new Se({props:K});const L=[{size:120},{percent:_[0]},_[2]];let W={};for(let n=0;n<L.length;n+=1)W=He(W,L[n]);u=new Se({props:W});const X=[_[1]];function oe(n){_[3](n)}let z={};for(let n=0;n<X.length;n+=1)z=He(z,X[n]);return _[0]!==void 0&&(z.value=_[0]),$=new pt({props:z}),st.push(()=>ot($,"value",oe)),{c(){a=i("figure"),l=i("div"),O(m.$$.fragment),b=d(),O(v.$$.fragment),H=d(),O(u.$$.fragment),R=d(),O($.$$.fragment),g=d(),x=i("figcaption"),x.innerHTML=D,this.h()},l(n){a=o(n,"FIGURE",{class:!0,role:!0});var f=j(a);l=o(f,"DIV",{class:!0});var E=j(l);B(m.$$.fragment,E),b=c(E),B(v.$$.fragment,E),H=c(E),B(u.$$.fragment,E),E.forEach(t),R=c(f),B($.$$.fragment,f),g=c(f),x=o(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),w(x)!=="svelte-1g7ousm"&&(x.innerHTML=D),f.forEach(t),this.h()},h(){y(l,"class","radius examples svelte-15ez60t"),y(x,"class","caption"),y(a,"class","max-w svelte-15ez60t"),y(a,"role","group")},m(n,f){s(n,a,f),p(a,l),N(m,l,null),p(l,b),N(v,l,null),p(l,H),N(u,l,null),p(a,R),N($,a,null),p(a,g),p(a,x),P=!0},p(n,[f]){const E=f&5?Te(J,[J[0],f&1&&{percent:n[0]},f&4&&Ie(n[2])]):{};m.$set(E);const pe=f&5?Te(M,[M[0],f&1&&{percent:n[0]},f&4&&Ie(n[2])]):{};v.$set(pe);const T=f&5?Te(L,[L[0],f&1&&{percent:n[0]},f&4&&Ie(n[2])]):{};u.$set(T);const me=f&2?Te(X,[Ie(n[1])]):{};!h&&f&1&&(h=!0,me.value=n[0],lt(()=>h=!1)),$.$set(me)},i(n){P||(Q(m.$$.fragment,n),Q(v.$$.fragment,n),Q(u.$$.fragment,n),Q($.$$.fragment,n),P=!0)},o(n){U(m.$$.fragment,n),U(v.$$.fragment,n),U(u.$$.fragment,n),U($.$$.fragment,n),P=!1},d(n){n&&t(a),V(m),V(v),V(u),V($)}}}function ht(_,a,l){const m={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--color-caption)"};let b=25;const v={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"none"};function H(u){b=u,l(0,b)}return[b,m,v,H]}class gt extends Oe{constructor(a){super(),Be(this,a,ht,ct,Ae,{})}}function vt(_){let a,l="<span>Gif Scrubber</span>",m,b,v=`An inline video player I made to act as a drop-in alternative to <code data-type="ext">.gif</code>. Along with letting
	me avoid all the conversion-related headaches, the component makes media handling more flexible and has the added benefit of
	thirty years’ worth of codec improvements.`,H,u,R,$,h,g,x="Media Controls",D,P,J=`To make it look consistent across browsers, I implemented custom controls: an always-visible button on the corner\r
	toggles play state and, when the container is grabbed, pointer events kick in to manage timeline scrubbing.`,F,M,K,L,W,X,oe,z,n,f,E="Progress indicator",pe,T,me,Y,Ne="svg",Me,Z,Qe="canvas",Pe,ee,Le,Re,de,te,ce,ae,Ue=`Just to try, I scaled the dimensions up by another factor of two (<em>i.e.</em> the rightmost canvas) to make it
	<em>super</em> crisp—<em>super</em> unnecessary! It <em>was</em> slightly sharper and there <em>wasn&#39;t</em> any noticeable
	impact on performance (only a single canvas is active at a time), so I went with it.`,he,ge,ve,ne,Ve="Format Considerations",_e,re,Je=`While testing, I realized that using a <code data-type="html">video</code> element in place of the <em>_real_</em>
	format comes with a couple of drawbacks:`,be,S,Ke="<li>you can’t <em>hold-to-save</em> them on mobile</li> <li>they won&#39;t be visible in reader mode</li> <li>compatibility isn&#39;t guaranteed—playback support depends on browser features and hardware capabilities</li>",$e,se,We=`To make a long story short, I work around the last point by running a pre-build Python script I wrote to traverse my
	media directory and generate <code data-type="ext">.webm</code> fallbacks. My magic
	<code data-type="ext">ffmpeg</code> command looks like this:`,ye,q,Xe=`<code class="svelte-1k68zg8"><span>ffmpeg</span> -i [input].mp4 -movflags +faststart -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output].webm</code>
`,xe,we,Ce,I,Ee,fe,Ye="e.g.",De,le,Ge,je,ie,Ze=".h265",ze,ue,et="etc.",Fe,ke;return u=new dt({}),te=new gt({}),{c(){a=i("h1"),a.innerHTML=l,m=d(),b=i("p"),b.innerHTML=v,H=d(),O(u.$$.fragment),R=d(),$=i("hr"),h=d(),g=i("h3"),g.textContent=x,D=d(),P=i("p"),P.textContent=J,F=d(),M=i("p"),K=C(`It’s set up so moving a distance across the figure’s width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),L=i("a"),W=C("draggable objects"),X=C("—extremely helpful reference!"),oe=d(),z=i("hr"),n=d(),f=i("h3"),f.textContent=E,pe=d(),T=i("p"),me=C("The original "),Y=i("code"),Y.textContent=Ne,Me=C(` was plagued by rotation jank, so I wound up porting the graphic to\r
	`),Z=i("code"),Z.textContent=Qe,Pe=C(`; that fixed the transform issue, but made everything appear\r
	low-quality and aliased on my phone. Thankfully, the browser provides a fix for high dpi screens courtesy the\r
	`),ee=i("a"),Le=C("device pixel ratio (DPR)"),Re=C(", which can be queried and used as a resolution multiplier."),de=d(),O(te.$$.fragment),ce=d(),ae=i("p"),ae.innerHTML=Ue,he=d(),ge=i("hr"),ve=d(),ne=i("h3"),ne.textContent=Ve,_e=d(),re=i("p"),re.innerHTML=Je,be=d(),S=i("ol"),S.innerHTML=Ke,$e=d(),se=i("p"),se.innerHTML=We,ye=d(),q=i("pre"),q.innerHTML=Xe,xe=d(),we=i("hr"),Ce=d(),I=i("p"),Ee=C("Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),fe=i("em"),fe.textContent=Ye,De=d(),le=i("a"),Ge=C("safari media fragment hack"),je=C(", no "),ie=i("code"),ie.textContent=Ze,ze=C(` in\r
	FireFox, `),ue=i("em"),ue.textContent=et,Fe=C("), but I’m happy with how it turned out and learned a lot in the process!"),this.h()},l(e){a=o(e,"H1",{"data-svelte-h":!0}),w(a)!=="svelte-16mbdpp"&&(a.innerHTML=l),m=c(e),b=o(e,"P",{"data-svelte-h":!0}),w(b)!=="svelte-u96pyy"&&(b.innerHTML=v),H=c(e),B(u.$$.fragment,e),R=c(e),$=o(e,"HR",{}),h=c(e),g=o(e,"H3",{"data-svelte-h":!0}),w(g)!=="svelte-1jcj2iy"&&(g.textContent=x),D=c(e),P=o(e,"P",{"data-svelte-h":!0}),w(P)!=="svelte-d441bo"&&(P.textContent=J),F=c(e),M=o(e,"P",{});var r=j(M);K=k(r,`It’s set up so moving a distance across the figure’s width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),L=o(r,"A",{href:!0,target:!0});var tt=j(L);W=k(tt,"draggable objects"),tt.forEach(t),X=k(r,"—extremely helpful reference!"),r.forEach(t),oe=c(e),z=o(e,"HR",{}),n=c(e),f=o(e,"H3",{"data-svelte-h":!0}),w(f)!=="svelte-lxue3i"&&(f.textContent=E),pe=c(e),T=o(e,"P",{});var A=j(T);me=k(A,"The original "),Y=o(A,"CODE",{"data-type":!0,"data-svelte-h":!0}),w(Y)!=="svelte-mflvan"&&(Y.textContent=Ne),Me=k(A,` was plagued by rotation jank, so I wound up porting the graphic to\r
	`),Z=o(A,"CODE",{"data-type":!0,"data-svelte-h":!0}),w(Z)!=="svelte-jhma2z"&&(Z.textContent=Qe),Pe=k(A,`; that fixed the transform issue, but made everything appear\r
	low-quality and aliased on my phone. Thankfully, the browser provides a fix for high dpi screens courtesy the\r
	`),ee=o(A,"A",{href:!0,target:!0});var at=j(ee);Le=k(at,"device pixel ratio (DPR)"),at.forEach(t),Re=k(A,", which can be queried and used as a resolution multiplier."),A.forEach(t),de=c(e),B(te.$$.fragment,e),ce=c(e),ae=o(e,"P",{"data-svelte-h":!0}),w(ae)!=="svelte-1ptxl27"&&(ae.innerHTML=Ue),he=c(e),ge=o(e,"HR",{}),ve=c(e),ne=o(e,"H3",{"data-svelte-h":!0}),w(ne)!=="svelte-zo8yxa"&&(ne.textContent=Ve),_e=c(e),re=o(e,"P",{"data-svelte-h":!0}),w(re)!=="svelte-yuusfi"&&(re.innerHTML=Je),be=c(e),S=o(e,"OL",{role:!0,"data-svelte-h":!0}),w(S)!=="svelte-ab5rd2"&&(S.innerHTML=Ke),$e=c(e),se=o(e,"P",{"data-svelte-h":!0}),w(se)!=="svelte-s4dsai"&&(se.innerHTML=We),ye=c(e),q=o(e,"PRE",{class:!0,"data-svelte-h":!0}),w(q)!=="svelte-1wwy5vq"&&(q.innerHTML=Xe),xe=c(e),we=o(e,"HR",{}),Ce=c(e),I=o(e,"P",{});var G=j(I);Ee=k(G,"Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),fe=o(G,"EM",{"data-svelte-h":!0}),w(fe)!=="svelte-2dbwd4"&&(fe.textContent=Ye),De=c(G),le=o(G,"A",{href:!0,target:!0});var nt=j(le);Ge=k(nt,"safari media fragment hack"),nt.forEach(t),je=k(G,", no "),ie=o(G,"CODE",{"data-type":!0,"data-svelte-h":!0}),w(ie)!=="svelte-1lul1jc"&&(ie.textContent=Ze),ze=k(G,` in\r
	FireFox, `),ue=o(G,"EM",{"data-svelte-h":!0}),w(ue)!=="svelte-ynskcq"&&(ue.textContent=et),Fe=k(G,"), but I’m happy with how it turned out and learned a lot in the process!"),G.forEach(t),this.h()},h(){y(L,"href",_t),y(L,"target",qe),y(Y,"data-type","html"),y(Z,"data-type","html"),y(ee,"href",bt),y(ee,"target",qe),y(S,"role","list"),y(q,"class","codeblock overflow-scrollbar max-w svelte-1k68zg8"),y(le,"href",$t),y(le,"target",qe),y(ie,"data-type","ext")},m(e,r){s(e,a,r),s(e,m,r),s(e,b,r),s(e,H,r),N(u,e,r),s(e,R,r),s(e,$,r),s(e,h,r),s(e,g,r),s(e,D,r),s(e,P,r),s(e,F,r),s(e,M,r),p(M,K),p(M,L),p(L,W),p(M,X),s(e,oe,r),s(e,z,r),s(e,n,r),s(e,f,r),s(e,pe,r),s(e,T,r),p(T,me),p(T,Y),p(T,Me),p(T,Z),p(T,Pe),p(T,ee),p(ee,Le),p(T,Re),s(e,de,r),N(te,e,r),s(e,ce,r),s(e,ae,r),s(e,he,r),s(e,ge,r),s(e,ve,r),s(e,ne,r),s(e,_e,r),s(e,re,r),s(e,be,r),s(e,S,r),s(e,$e,r),s(e,se,r),s(e,ye,r),s(e,q,r),s(e,xe,r),s(e,we,r),s(e,Ce,r),s(e,I,r),p(I,Ee),p(I,fe),p(I,De),p(I,le),p(le,Ge),p(I,je),p(I,ie),p(I,ze),p(I,ue),p(I,Fe),ke=!0},p:it,i(e){ke||(Q(u.$$.fragment,e),Q(te.$$.fragment,e),ke=!0)},o(e){U(u.$$.fragment,e),U(te.$$.fragment,e),ke=!1},d(e){e&&(t(a),t(m),t(b),t(H),t(R),t($),t(h),t(g),t(D),t(P),t(F),t(M),t(oe),t(z),t(n),t(f),t(pe),t(T),t(de),t(ce),t(ae),t(he),t(ge),t(ve),t(ne),t(_e),t(re),t(be),t(S),t($e),t(se),t(ye),t(q),t(xe),t(we),t(Ce),t(I)),V(u,e),V(te,e)}}}const qe="_blank",_t="https://www.redblobgames.com/making-of/draggable/",bt="https://cloudinary.com/glossary/device-pixel-ratio",$t="https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/";class Ht extends Oe{constructor(a){super(),Be(this,a,null,vt,Ae,{})}}export{Ht as component};