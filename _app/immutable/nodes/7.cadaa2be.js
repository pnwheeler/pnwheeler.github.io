import{s as Ne,f as o,a as u,g as p,h as j,c as d,d as t,G as x,j as y,i as r,u as i,l as C,m as k,K as Ie,p as ot,S as pt,v as ft}from"../chunks/scheduler.8d84c197.js";import{S as Qe,i as Ue,b as N,d as Q,m as U,a as V,t as K,e as J,j as mt}from"../chunks/index.5e028736.js";import{G as it,R as Oe}from"../chunks/Gif.a1b3e23e.js";import{g as Pe,a as Ee}from"../chunks/spread.8a54911c.js";import{R as ut}from"../chunks/RangeSlider.00a7ad4c.js";function dt(_){let a;return{c(){a=C("Blender donut")},l(l){a=k(l,"Blender donut")},m(l,f){r(l,a,f)},d(l){l&&t(a)}}}function ct(_){let a;return{c(){a=C("Quick ttk on boss")},l(l){a=k(l,"Quick ttk on boss")},m(l,f){r(l,a,f)},d(l){l&&t(a)}}}function ht(_){let a,l,f,$,v,T,m,L=`Demo gifs: Tutorial Donut and gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,b;return f=new it({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 24vh)",radius_type:"combo left",$$slots:{caption:[dt]},$$scope:{ctx:_}}}),v=new it({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 24vh)",t:"#t=1",autoplay:!1,controlsBg:"#0006",radius_type:"combo right",$$slots:{caption:[ct]},$$scope:{ctx:_}}}),{c(){a=o("figure"),l=o("div"),N(f.$$.fragment),$=u(),N(v.$$.fragment),T=u(),m=o("figcaption"),m.innerHTML=L,this.h()},l(h){a=p(h,"FIGURE",{class:!0,role:!0});var g=j(a);l=p(g,"DIV",{class:!0});var w=j(l);Q(f.$$.fragment,w),$=d(w),Q(v.$$.fragment,w),w.forEach(t),T=d(g),m=p(g,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),x(m)!=="svelte-1s14123"&&(m.innerHTML=L),g.forEach(t),this.h()},h(){y(l,"class","svelte-o0m8eb"),y(m,"class","caption"),y(a,"class","max-w svelte-o0m8eb"),y(a,"role","group")},m(h,g){r(h,a,g),i(a,l),U(f,l,null),i(l,$),U(v,l,null),i(a,T),i(a,m),b=!0},p(h,[g]){const w={};g&1&&(w.$$scope={dirty:g,ctx:h}),f.$set(w);const D={};g&1&&(D.$$scope={dirty:g,ctx:h}),v.$set(D)},i(h){b||(V(f.$$.fragment,h),V(v.$$.fragment,h),b=!0)},o(h){K(f.$$.fragment,h),K(v.$$.fragment,h),b=!1},d(h){h&&t(a),J(f),J(v)}}}class gt extends Qe{constructor(a){super(),Ue(this,a,null,ht,Ne,{})}}new TextEncoder;function vt(_){let a,l,f,$,v,T,m,L,b,h,g,w,D=`Simulating DPR=3 to compare the quality of different render scales. From left: default (<em>20px</em>), by 1×DPR
		(<em>60px</em>), and by 2×DPR (<em>120px</em>).`,E;const W=[{size:20},{percent:_[0]},_[2]];let q={};for(let n=0;n<W.length;n+=1)q=Ie(q,W[n]);f=new Oe({props:q});const H=[{size:60},{percent:_[0]},_[2]];let X={};for(let n=0;n<H.length;n+=1)X=Ie(X,H[n]);v=new Oe({props:X});const R=[{size:120},{percent:_[0]},_[2]];let pe={};for(let n=0;n<R.length;n+=1)pe=Ie(pe,R[n]);m=new Oe({props:pe});const Y=[_[1]];function S(n){_[3](n)}let z={};for(let n=0;n<Y.length;n+=1)z=Ie(z,Y[n]);return _[0]!==void 0&&(z.value=_[0]),b=new ut({props:z}),ot.push(()=>mt(b,"value",S)),{c(){a=o("figure"),l=o("div"),N(f.$$.fragment),$=u(),N(v.$$.fragment),T=u(),N(m.$$.fragment),L=u(),N(b.$$.fragment),g=u(),w=o("figcaption"),w.innerHTML=D,this.h()},l(n){a=p(n,"FIGURE",{class:!0,role:!0});var c=j(a);l=p(c,"DIV",{class:!0});var P=j(l);Q(f.$$.fragment,P),$=d(P),Q(v.$$.fragment,P),T=d(P),Q(m.$$.fragment,P),P.forEach(t),L=d(c),Q(b.$$.fragment,c),g=d(c),w=p(c,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),x(w)!=="svelte-1ferslh"&&(w.innerHTML=D),c.forEach(t),this.h()},h(){y(l,"class","radius examples svelte-1ytyct5"),y(w,"class","caption"),y(a,"class","max-w svelte-1ytyct5"),y(a,"role","group")},m(n,c){r(n,a,c),i(a,l),U(f,l,null),i(l,$),U(v,l,null),i(l,T),U(m,l,null),i(a,L),U(b,a,null),i(a,g),i(a,w),E=!0},p(n,[c]){const P=c&5?Pe(W,[W[0],c&1&&{percent:n[0]},c&4&&Ee(n[2])]):{};f.$set(P);const fe=c&5?Pe(H,[H[0],c&1&&{percent:n[0]},c&4&&Ee(n[2])]):{};v.$set(fe);const F=c&5?Pe(R,[R[0],c&1&&{percent:n[0]},c&4&&Ee(n[2])]):{};m.$set(F);const de=c&2?Pe(Y,[Ee(n[1])]):{};!h&&c&1&&(h=!0,de.value=n[0],pt(()=>h=!1)),b.$set(de)},i(n){E||(V(f.$$.fragment,n),V(v.$$.fragment,n),V(m.$$.fragment,n),V(b.$$.fragment,n),E=!0)},o(n){K(f.$$.fragment,n),K(v.$$.fragment,n),K(m.$$.fragment,n),K(b.$$.fragment,n),E=!1},d(n){n&&t(a),J(f),J(v),J(m),J(b)}}}function _t(_,a,l){const f={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--color-caption)"};let $=25;const v={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"transparent",colorFill:"#686766",colorStroke:"#8e8d8a44"};function T(m){$=m,l(0,$)}return[$,f,v,T]}class $t extends Qe{constructor(a){super(),Ue(this,a,_t,vt,Ne,{})}}function bt(_){let a,l="<span>Gif Scrubber</span>",f,$,v=`An inline video player component that acts as a drop-in alternative to <code data-type="ext">.gif</code>. I made it in the
	process of updating my website to have a more flexiblity, take advantage of thirty years worth of codec developments, and avoid all the conversion-related headaches that come from actual gifs.`,T,m,L,b,h,g,w="Scrubbing",D,E,W=`To keep everything mobile friendly and consistent across browsers, I decided to implement custom controls: an\r
	always-visible button on the corner toggles play state and, when the container is grabbed, pointer events kick in to\r
	manage the timeline.`,q,H,X,R,pe="s.t.",Y,S,z,n,c,P,fe,F,de="Progress indicator",ce,M,Me,Z,Ve="canvas",Le,ee,Ke="svg",Re,te,De,Ge,he,ae,ge,ne,Je=`I ended up scaling the dimensions up by an extra factor of two (<em>i.e.</em> the rightmost canvas) to make it
	<em>super</em> crisp—<em>super</em> unnecessary! It <em>was</em> slightly sharper and there <em>wasn&#39;t</em> any noticeable
	impact on performance (only a single canvas is active/time), so I went with it.`,ve,_e,$e,se,We="Extra Considerations",be,re,Xe='Compared to the <em>_actual_</em> format, using the <code data-type="html">video</code> element as a replacement comes with a couple of tradeoffs:',xe,A,Ye="<li>can&#39;t <em>hold-to-save</em> on mobile</li> <li>they aren&#39;t visible in reader mode (or, at least not for me)</li> <li>compatibility isn&#39;t guaranteed—playback support depends on browser features and hardware capabilities</li>",ye,le,Ze=`To make a long story short, I address the last point by running a pre-build Python script to crawl my assets and
	generate <code data-type="ext">.webm</code> fallbacks where none exist. The magic <code data-type="ext">ffmpeg</code> command I use 
	looks like this:`,we,O,et=`<code class="svelte-1w1glo8"><span>ffmpeg</span> -i [input].mp4 -movflags +faststart -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output].webm</code>
`,Ce,ke,He,I,je,me,tt="e.g.",Se,ie,Fe,qe,oe,at=".h265",ze,ue,nt="etc.",Ae,Te;return m=new gt({}),ae=new $t({}),{c(){a=o("h1"),a.innerHTML=l,f=u(),$=o("p"),$.innerHTML=v,T=u(),N(m.$$.fragment),L=u(),b=o("hr"),h=u(),g=o("h3"),g.textContent=w,D=u(),E=o("p"),E.textContent=W,q=u(),H=o("p"),X=C("It's set up "),R=o("em"),R.textContent=pe,Y=C(` moving a distance across the figure’s width is proportional to seeking that fraction of its\r
	video's duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),S=o("a"),z=C("draggable objects"),n=C("—extremely helpful!"),c=u(),P=o("hr"),fe=u(),F=o("h3"),F.textContent=de,ce=u(),M=o("p"),Me=C("Porting the original version of this graphic to "),Z=o("code"),Z.textContent=Ve,Le=C(` solved an issue I had with janky\r
	`),ee=o("code"),ee.textContent=Ke,Re=C(` transforms, but introduced another that gave it a low-quality, aliased look\r
	on my phone. Thankfully, browsers provide a fix for high dpi screens courtesy the\r
	`),te=o("a"),De=C("device pixel ratio (DPR)"),Ge=C(", which I query and use as a resolution multiplier."),he=u(),N(ae.$$.fragment),ge=u(),ne=o("p"),ne.innerHTML=Je,ve=u(),_e=o("hr"),$e=u(),se=o("h3"),se.textContent=We,be=u(),re=o("p"),re.innerHTML=Xe,xe=u(),A=o("ol"),A.innerHTML=Ye,ye=u(),le=o("p"),le.innerHTML=Ze,we=u(),O=o("pre"),O.innerHTML=et,Ce=u(),ke=o("hr"),He=u(),I=o("p"),je=C("Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),me=o("em"),me.textContent=tt,Se=u(),ie=o("a"),Fe=C("safari media fragment hack"),qe=C(", no "),oe=o("code"),oe.textContent=at,ze=C(` in\r
	FireFox, `),ue=o("em"),ue.textContent=nt,Ae=C("), but I’m happy with how it turned out!"),this.h()},l(e){a=p(e,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-16mbdpp"&&(a.innerHTML=l),f=d(e),$=p(e,"P",{"data-svelte-h":!0}),x($)!=="svelte-4akdog"&&($.innerHTML=v),T=d(e),Q(m.$$.fragment,e),L=d(e),b=p(e,"HR",{}),h=d(e),g=p(e,"H3",{"data-svelte-h":!0}),x(g)!=="svelte-1c67i5l"&&(g.textContent=w),D=d(e),E=p(e,"P",{"data-svelte-h":!0}),x(E)!=="svelte-19t10t7"&&(E.textContent=W),q=d(e),H=p(e,"P",{});var s=j(H);X=k(s,"It's set up "),R=p(s,"EM",{"data-svelte-h":!0}),x(R)!=="svelte-hspnzd"&&(R.textContent=pe),Y=k(s,` moving a distance across the figure’s width is proportional to seeking that fraction of its\r
	video's duration. Huge s/o to Red Blob Games for their in-depth article about\r
	`),S=p(s,"A",{href:!0,target:!0});var st=j(S);z=k(st,"draggable objects"),st.forEach(t),n=k(s,"—extremely helpful!"),s.forEach(t),c=d(e),P=p(e,"HR",{}),fe=d(e),F=p(e,"H3",{"data-svelte-h":!0}),x(F)!=="svelte-lxue3i"&&(F.textContent=de),ce=d(e),M=p(e,"P",{});var B=j(M);Me=k(B,"Porting the original version of this graphic to "),Z=p(B,"CODE",{"data-type":!0,"data-svelte-h":!0}),x(Z)!=="svelte-jhma2z"&&(Z.textContent=Ve),Le=k(B,` solved an issue I had with janky\r
	`),ee=p(B,"CODE",{"data-type":!0,"data-svelte-h":!0}),x(ee)!=="svelte-mflvan"&&(ee.textContent=Ke),Re=k(B,` transforms, but introduced another that gave it a low-quality, aliased look\r
	on my phone. Thankfully, browsers provide a fix for high dpi screens courtesy the\r
	`),te=p(B,"A",{href:!0,target:!0});var rt=j(te);De=k(rt,"device pixel ratio (DPR)"),rt.forEach(t),Ge=k(B,", which I query and use as a resolution multiplier."),B.forEach(t),he=d(e),Q(ae.$$.fragment,e),ge=d(e),ne=p(e,"P",{"data-svelte-h":!0}),x(ne)!=="svelte-1vxpaju"&&(ne.innerHTML=Je),ve=d(e),_e=p(e,"HR",{}),$e=d(e),se=p(e,"H3",{"data-svelte-h":!0}),x(se)!=="svelte-9ln22n"&&(se.textContent=We),be=d(e),re=p(e,"P",{"data-svelte-h":!0}),x(re)!=="svelte-1yjr4cw"&&(re.innerHTML=Xe),xe=d(e),A=p(e,"OL",{role:!0,"data-svelte-h":!0}),x(A)!=="svelte-2fz7w8"&&(A.innerHTML=Ye),ye=d(e),le=p(e,"P",{"data-svelte-h":!0}),x(le)!=="svelte-1iuoq8y"&&(le.innerHTML=Ze),we=d(e),O=p(e,"PRE",{class:!0,"data-svelte-h":!0}),x(O)!=="svelte-1wwy5vq"&&(O.innerHTML=et),Ce=d(e),ke=p(e,"HR",{}),He=d(e),I=p(e,"P",{});var G=j(I);je=k(G,"Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),me=p(G,"EM",{"data-svelte-h":!0}),x(me)!=="svelte-2dbwd4"&&(me.textContent=tt),Se=d(G),ie=p(G,"A",{href:!0,target:!0});var lt=j(ie);Fe=k(lt,"safari media fragment hack"),lt.forEach(t),qe=k(G,", no "),oe=p(G,"CODE",{"data-type":!0,"data-svelte-h":!0}),x(oe)!=="svelte-1lul1jc"&&(oe.textContent=at),ze=k(G,` in\r
	FireFox, `),ue=p(G,"EM",{"data-svelte-h":!0}),x(ue)!=="svelte-ynskcq"&&(ue.textContent=nt),Ae=k(G,"), but I’m happy with how it turned out!"),G.forEach(t),this.h()},h(){y(S,"href",xt),y(S,"target",Be),y(Z,"data-type","html"),y(ee,"data-type","html"),y(te,"href",yt),y(te,"target",Be),y(A,"role","list"),y(O,"class","codeblock overflow-scrollbar max-w svelte-1w1glo8"),y(ie,"href",wt),y(ie,"target",Be),y(oe,"data-type","ext")},m(e,s){r(e,a,s),r(e,f,s),r(e,$,s),r(e,T,s),U(m,e,s),r(e,L,s),r(e,b,s),r(e,h,s),r(e,g,s),r(e,D,s),r(e,E,s),r(e,q,s),r(e,H,s),i(H,X),i(H,R),i(H,Y),i(H,S),i(S,z),i(H,n),r(e,c,s),r(e,P,s),r(e,fe,s),r(e,F,s),r(e,ce,s),r(e,M,s),i(M,Me),i(M,Z),i(M,Le),i(M,ee),i(M,Re),i(M,te),i(te,De),i(M,Ge),r(e,he,s),U(ae,e,s),r(e,ge,s),r(e,ne,s),r(e,ve,s),r(e,_e,s),r(e,$e,s),r(e,se,s),r(e,be,s),r(e,re,s),r(e,xe,s),r(e,A,s),r(e,ye,s),r(e,le,s),r(e,we,s),r(e,O,s),r(e,Ce,s),r(e,ke,s),r(e,He,s),r(e,I,s),i(I,je),i(I,me),i(I,Se),i(I,ie),i(ie,Fe),i(I,qe),i(I,oe),i(I,ze),i(I,ue),i(I,Ae),Te=!0},p:ft,i(e){Te||(V(m.$$.fragment,e),V(ae.$$.fragment,e),Te=!0)},o(e){K(m.$$.fragment,e),K(ae.$$.fragment,e),Te=!1},d(e){e&&(t(a),t(f),t($),t(T),t(L),t(b),t(h),t(g),t(D),t(E),t(q),t(H),t(c),t(P),t(fe),t(F),t(ce),t(M),t(he),t(ge),t(ne),t(ve),t(_e),t($e),t(se),t(be),t(re),t(xe),t(A),t(ye),t(le),t(we),t(O),t(Ce),t(ke),t(He),t(I)),J(m,e),J(ae,e)}}}const Be="_blank",xt="https://www.redblobgames.com/making-of/draggable/",yt="https://cloudinary.com/glossary/device-pixel-ratio",wt="https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/";class Pt extends Qe{constructor(a){super(),Ue(this,a,null,bt,Ne,{})}}export{Pt as component};
