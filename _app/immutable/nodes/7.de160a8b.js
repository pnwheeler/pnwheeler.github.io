import{s as qe,f as i,a as u,g as o,h as j,c,d as t,G as y,j as w,i as s,u as p,l as C,m as k,K as Te,p as st,S as lt,v as it}from"../chunks/scheduler.8d84c197.js";import{S as Oe,i as Be,b as O,d as B,m as N,a as Q,t as U,e as V,j as ot}from"../chunks/index.5e028736.js";import{G as rt,R as Se}from"../chunks/Gif.cb2d118f.js";import{g as He,a as Ie}from"../chunks/spread.8a54911c.js";import{R as pt}from"../chunks/RangeSlider.00a7ad4c.js";function ft(_){let a;return{c(){a=C("Blender donut")},l(l){a=k(l,"Blender donut")},m(l,f){s(l,a,f)},d(l){l&&t(a)}}}function mt(_){let a;return{c(){a=C("Quick ttk on boss")},l(l){a=k(l,"Quick ttk on boss")},m(l,f){s(l,a,f)},d(l){l&&t(a)}}}function dt(_){let a,l,f,b,v,T,d,R=`Demo gifs: Tutorial Donut and gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,$;return f=new rt({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 24vh)",radius_type:"combo left",$$slots:{caption:[ft]},$$scope:{ctx:_}}}),v=new rt({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 24vh)",t:"#t=1",autoplay:!1,controlsBg:"#0006",radius_type:"combo right",$$slots:{caption:[mt]},$$scope:{ctx:_}}}),{c(){a=i("figure"),l=i("div"),O(f.$$.fragment),b=u(),O(v.$$.fragment),T=u(),d=i("figcaption"),d.innerHTML=R,this.h()},l(h){a=o(h,"FIGURE",{class:!0,role:!0});var g=j(a);l=o(g,"DIV",{class:!0});var x=j(l);B(f.$$.fragment,x),b=c(x),B(v.$$.fragment,x),x.forEach(t),T=c(g),d=o(g,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),y(d)!=="svelte-1s14123"&&(d.innerHTML=R),g.forEach(t),this.h()},h(){w(l,"class","svelte-o0m8eb"),w(d,"class","caption"),w(a,"class","max-w svelte-o0m8eb"),w(a,"role","group")},m(h,g){s(h,a,g),p(a,l),N(f,l,null),p(l,b),N(v,l,null),p(a,T),p(a,d),$=!0},p(h,[g]){const x={};g&1&&(x.$$scope={dirty:g,ctx:h}),f.$set(x);const D={};g&1&&(D.$$scope={dirty:g,ctx:h}),v.$set(D)},i(h){$||(Q(f.$$.fragment,h),Q(v.$$.fragment,h),$=!0)},o(h){U(f.$$.fragment,h),U(v.$$.fragment,h),$=!1},d(h){h&&t(a),V(f),V(v)}}}class ut extends Oe{constructor(a){super(),Be(this,a,null,dt,qe,{})}}function ct(_){let a,l,f,b,v,T,d,R,$,h,g,x,D=`Simulating DPR=3 to compare canvas detail at different render scales. From left: default (<em>20px</em>), by 1×DPR
		(<em>60px</em>), and by 2×DPR (<em>120px</em>).`,P;const J=[{size:20},{percent:_[0]},_[2]];let F={};for(let n=0;n<J.length;n+=1)F=Te(F,J[n]);f=new Se({props:F});const M=[{size:60},{percent:_[0]},_[2]];let K={};for(let n=0;n<M.length;n+=1)K=Te(K,M[n]);v=new Se({props:K});const L=[{size:120},{percent:_[0]},_[2]];let W={};for(let n=0;n<L.length;n+=1)W=Te(W,L[n]);d=new Se({props:W});const X=[_[1]];function oe(n){_[3](n)}let z={};for(let n=0;n<X.length;n+=1)z=Te(z,X[n]);return _[0]!==void 0&&(z.value=_[0]),$=new pt({props:z}),st.push(()=>ot($,"value",oe)),{c(){a=i("figure"),l=i("div"),O(f.$$.fragment),b=u(),O(v.$$.fragment),T=u(),O(d.$$.fragment),R=u(),O($.$$.fragment),g=u(),x=i("figcaption"),x.innerHTML=D,this.h()},l(n){a=o(n,"FIGURE",{class:!0,role:!0});var m=j(a);l=o(m,"DIV",{class:!0});var E=j(l);B(f.$$.fragment,E),b=c(E),B(v.$$.fragment,E),T=c(E),B(d.$$.fragment,E),E.forEach(t),R=c(m),B($.$$.fragment,m),g=c(m),x=o(m,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),y(x)!=="svelte-1g7ousm"&&(x.innerHTML=D),m.forEach(t),this.h()},h(){w(l,"class","radius examples svelte-15ez60t"),w(x,"class","caption"),w(a,"class","max-w svelte-15ez60t"),w(a,"role","group")},m(n,m){s(n,a,m),p(a,l),N(f,l,null),p(l,b),N(v,l,null),p(l,T),N(d,l,null),p(a,R),N($,a,null),p(a,g),p(a,x),P=!0},p(n,[m]){const E=m&5?He(J,[J[0],m&1&&{percent:n[0]},m&4&&Ie(n[2])]):{};f.$set(E);const pe=m&5?He(M,[M[0],m&1&&{percent:n[0]},m&4&&Ie(n[2])]):{};v.$set(pe);const H=m&5?He(L,[L[0],m&1&&{percent:n[0]},m&4&&Ie(n[2])]):{};d.$set(H);const fe=m&2?He(X,[Ie(n[1])]):{};!h&&m&1&&(h=!0,fe.value=n[0],lt(()=>h=!1)),$.$set(fe)},i(n){P||(Q(f.$$.fragment,n),Q(v.$$.fragment,n),Q(d.$$.fragment,n),Q($.$$.fragment,n),P=!0)},o(n){U(f.$$.fragment,n),U(v.$$.fragment,n),U(d.$$.fragment,n),U($.$$.fragment,n),P=!1},d(n){n&&t(a),V(f),V(v),V(d),V($)}}}function ht(_,a,l){const f={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--color-caption)"};let b=25;const v={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"none"};function T(d){b=d,l(0,b)}return[b,f,v,T]}class gt extends Oe{constructor(a){super(),Be(this,a,ht,ct,qe,{})}}function vt(_){let a,l="<span>Gif Scrubber</span>",f,b,v=`An inline video player I made to act as a drop-in alternative to <code data-type="ext">.gif</code>. Along with helping
	me avoid conversion-related headaches, the component makes media handling more flexible and has the added benefit of
	thirty years’ worth of codec improvements.`,T,d,R,$,h,g,x="Media Controls",D,P,J=`To make it look consistent across browsers, I implemented custom controls: an always-visible button on the corner\r
	toggles play state and, when the container is grabbed, pointer events kick in to manage timeline scrubbing.`,F,M,K,L,W,X,oe,z,n,m,E="Progress indicator",pe,H,fe,Y,Ne="svg",Me,Z,Qe="canvas",Pe,ee,Le,Re,ue,te,ce,ae,Ue=`Just to try, I scaled the dimensions up by another factor of two (<em>i.e.</em> the rightmost canvas) to make it
	<em>super</em>
	crisp—<em>super</em>
	unnecessary! It <em>was</em> slightly sharper and there <em>wasn&#39;t</em> any noticeable impact on performance (only a single
	canvas is active at a time), so I went with it.`,he,ge,ve,ne,Ve="Format Considerations",_e,re,Je=`While testing, I realized that replacing <code data-type="ext">.gif</code> with the
	<code data-type="html">video</code> element comes with a couple of nontrivial (to me, at least) drawbacks:`,be,S,Ke="<li>you can’t <em>press-and-hold</em> to save on mobile</li> <li>they won&#39;t be visible in reader mode</li> <li>playback isn&#39;t guaranteed—codec support depends on browser features and hardware capabilities</li>",$e,se,We=`To make a long story short, I work around the last point by running a pre-build Python script I wrote to traverse my
	media directory and generate <code data-type="ext">.webm</code> fallbacks. The magic ffmpeg command looks like this:`,we,A,Xe=`<code class="svelte-1kecyt1"><span>ffmpeg</span> -i [input].mp4 -movflags +faststart -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output].webm</code>
`,xe,ye,Ce,I,Ee,me,Ye="e.g.",De,le,Ge,je,ie,Ze=".h265",ze,de,et="etc.",Fe,ke;return d=new ut({}),te=new gt({}),{c(){a=i("h1"),a.innerHTML=l,f=u(),b=i("p"),b.innerHTML=v,T=u(),O(d.$$.fragment),R=u(),$=i("hr"),h=u(),g=i("h3"),g.textContent=x,D=u(),P=i("p"),P.textContent=J,F=u(),M=i("p"),K=C(`It’s set up so moving a distance across the figure’s width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),L=i("a"),W=C("draggable objects"),X=C("—extremely helpful reference!"),oe=u(),z=i("hr"),n=u(),m=i("h3"),m.textContent=E,pe=u(),H=i("p"),fe=C("The original "),Y=i("code"),Y.textContent=Ne,Me=C(` was plagued by rotation jank, so I wound up porting the graphic to\r
	`),Z=i("code"),Z.textContent=Qe,Pe=C(`. That fixed the transform issue, but introduced a new one that made it appear\r
	low-quality and aliased on my phone. Thankfully, the browser provides a fix for high dpi screens courtesy the\r
	`),ee=i("a"),Le=C("device pixel ratio (DPR)"),Re=C(", which can be queried and used as a resolution multiplier."),ue=u(),O(te.$$.fragment),ce=u(),ae=i("p"),ae.innerHTML=Ue,he=u(),ge=i("hr"),ve=u(),ne=i("h3"),ne.textContent=Ve,_e=u(),re=i("p"),re.innerHTML=Je,be=u(),S=i("ol"),S.innerHTML=Ke,$e=u(),se=i("p"),se.innerHTML=We,we=u(),A=i("pre"),A.innerHTML=Xe,xe=u(),ye=i("hr"),Ce=u(),I=i("p"),Ee=C("Getting to a point where the behavior felt predictable took a lot more effort than I expected("),me=i("em"),me.textContent=Ye,De=u(),le=i("a"),Ge=C("safari media fragment hack"),je=C(", no "),ie=i("code"),ie.textContent=Ze,ze=C(` in\r
	FireFox, `),de=i("em"),de.textContent=et,Fe=C("), but I’m happy with how it turned out and learned a lot in the process!"),this.h()},l(e){a=o(e,"H1",{"data-svelte-h":!0}),y(a)!=="svelte-16mbdpp"&&(a.innerHTML=l),f=c(e),b=o(e,"P",{"data-svelte-h":!0}),y(b)!=="svelte-8vu8mi"&&(b.innerHTML=v),T=c(e),B(d.$$.fragment,e),R=c(e),$=o(e,"HR",{}),h=c(e),g=o(e,"H3",{"data-svelte-h":!0}),y(g)!=="svelte-1jcj2iy"&&(g.textContent=x),D=c(e),P=o(e,"P",{"data-svelte-h":!0}),y(P)!=="svelte-d441bo"&&(P.textContent=J),F=c(e),M=o(e,"P",{});var r=j(M);K=k(r,`It’s set up so moving a distance across the figure’s width is proportional to seeking that fraction of the video's\r
	duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),L=o(r,"A",{href:!0,target:!0});var tt=j(L);W=k(tt,"draggable objects"),tt.forEach(t),X=k(r,"—extremely helpful reference!"),r.forEach(t),oe=c(e),z=o(e,"HR",{}),n=c(e),m=o(e,"H3",{"data-svelte-h":!0}),y(m)!=="svelte-lxue3i"&&(m.textContent=E),pe=c(e),H=o(e,"P",{});var q=j(H);fe=k(q,"The original "),Y=o(q,"CODE",{"data-type":!0,"data-svelte-h":!0}),y(Y)!=="svelte-mflvan"&&(Y.textContent=Ne),Me=k(q,` was plagued by rotation jank, so I wound up porting the graphic to\r
	`),Z=o(q,"CODE",{"data-type":!0,"data-svelte-h":!0}),y(Z)!=="svelte-jhma2z"&&(Z.textContent=Qe),Pe=k(q,`. That fixed the transform issue, but introduced a new one that made it appear\r
	low-quality and aliased on my phone. Thankfully, the browser provides a fix for high dpi screens courtesy the\r
	`),ee=o(q,"A",{href:!0,target:!0});var at=j(ee);Le=k(at,"device pixel ratio (DPR)"),at.forEach(t),Re=k(q,", which can be queried and used as a resolution multiplier."),q.forEach(t),ue=c(e),B(te.$$.fragment,e),ce=c(e),ae=o(e,"P",{"data-svelte-h":!0}),y(ae)!=="svelte-14gkn7f"&&(ae.innerHTML=Ue),he=c(e),ge=o(e,"HR",{}),ve=c(e),ne=o(e,"H3",{"data-svelte-h":!0}),y(ne)!=="svelte-zo8yxa"&&(ne.textContent=Ve),_e=c(e),re=o(e,"P",{"data-svelte-h":!0}),y(re)!=="svelte-pmho79"&&(re.innerHTML=Je),be=c(e),S=o(e,"OL",{role:!0,"data-svelte-h":!0}),y(S)!=="svelte-yo5wp2"&&(S.innerHTML=Ke),$e=c(e),se=o(e,"P",{"data-svelte-h":!0}),y(se)!=="svelte-zhfz34"&&(se.innerHTML=We),we=c(e),A=o(e,"PRE",{class:!0,"data-svelte-h":!0}),y(A)!=="svelte-1t6jss4"&&(A.innerHTML=Xe),xe=c(e),ye=o(e,"HR",{}),Ce=c(e),I=o(e,"P",{});var G=j(I);Ee=k(G,"Getting to a point where the behavior felt predictable took a lot more effort than I expected("),me=o(G,"EM",{"data-svelte-h":!0}),y(me)!=="svelte-2dbwd4"&&(me.textContent=Ye),De=c(G),le=o(G,"A",{href:!0,target:!0});var nt=j(le);Ge=k(nt,"safari media fragment hack"),nt.forEach(t),je=k(G,", no "),ie=o(G,"CODE",{"data-type":!0,"data-svelte-h":!0}),y(ie)!=="svelte-1lul1jc"&&(ie.textContent=Ze),ze=k(G,` in\r
	FireFox, `),de=o(G,"EM",{"data-svelte-h":!0}),y(de)!=="svelte-ynskcq"&&(de.textContent=et),Fe=k(G,"), but I’m happy with how it turned out and learned a lot in the process!"),G.forEach(t),this.h()},h(){w(L,"href",_t),w(L,"target",Ae),w(Y,"data-type","html"),w(Z,"data-type","html"),w(ee,"href",bt),w(ee,"target",Ae),w(S,"role","list"),w(A,"class","codeblock overflow-scrollbar svelte-1kecyt1"),w(le,"href",$t),w(le,"target",Ae),w(ie,"data-type","ext")},m(e,r){s(e,a,r),s(e,f,r),s(e,b,r),s(e,T,r),N(d,e,r),s(e,R,r),s(e,$,r),s(e,h,r),s(e,g,r),s(e,D,r),s(e,P,r),s(e,F,r),s(e,M,r),p(M,K),p(M,L),p(L,W),p(M,X),s(e,oe,r),s(e,z,r),s(e,n,r),s(e,m,r),s(e,pe,r),s(e,H,r),p(H,fe),p(H,Y),p(H,Me),p(H,Z),p(H,Pe),p(H,ee),p(ee,Le),p(H,Re),s(e,ue,r),N(te,e,r),s(e,ce,r),s(e,ae,r),s(e,he,r),s(e,ge,r),s(e,ve,r),s(e,ne,r),s(e,_e,r),s(e,re,r),s(e,be,r),s(e,S,r),s(e,$e,r),s(e,se,r),s(e,we,r),s(e,A,r),s(e,xe,r),s(e,ye,r),s(e,Ce,r),s(e,I,r),p(I,Ee),p(I,me),p(I,De),p(I,le),p(le,Ge),p(I,je),p(I,ie),p(I,ze),p(I,de),p(I,Fe),ke=!0},p:it,i(e){ke||(Q(d.$$.fragment,e),Q(te.$$.fragment,e),ke=!0)},o(e){U(d.$$.fragment,e),U(te.$$.fragment,e),ke=!1},d(e){e&&(t(a),t(f),t(b),t(T),t(R),t($),t(h),t(g),t(D),t(P),t(F),t(M),t(oe),t(z),t(n),t(m),t(pe),t(H),t(ue),t(ce),t(ae),t(he),t(ge),t(ve),t(ne),t(_e),t(re),t(be),t(S),t($e),t(se),t(we),t(A),t(xe),t(ye),t(Ce),t(I)),V(d,e),V(te,e)}}}const Ae="_blank",_t="https://www.redblobgames.com/making-of/draggable/",bt="https://cloudinary.com/glossary/device-pixel-ratio",$t="https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/";class Tt extends Oe{constructor(a){super(),Be(this,a,null,vt,qe,{})}}export{Tt as component};
