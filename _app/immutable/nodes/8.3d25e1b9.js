import{s as ue,L as Z,f as u,a as b,g as $,h as F,c as C,d as o,G as O,j as d,i as v,u as n,l as V,m as D,v as Je,p as Ke,k as Be,S as Qe,o as Xe}from"../chunks/scheduler.7ea44816.js";import{S as $e,i as he,b as y,d as L,m as G,a as P,t as j,e as R,j as Ze}from"../chunks/index.0f0b2a21.js";import{g as ee,a as B}from"../chunks/spread.8a54911c.js";import{I as ge}from"../chunks/Img.f0675a57.js";import{G as Fe}from"../chunks/Gif.bfdeb659.js";/* empty css                                                            */import{T as xe}from"../chunks/Tags.17da3598.js";import{R as et}from"../chunks/RangeSlider.8612c7e6.js";function tt(c){let e;return{c(){e=V("Rasterized teapot")},l(t){e=D(t,"Rasterized teapot")},m(t,r){v(t,e,r)},d(t){t&&o(e)}}}function st(c){let e;return{c(){e=V("Ray traced teapot")},l(t){e=D(t,"Ray traced teapot")},m(t,r){v(t,e,r)},d(t){t&&o(e)}}}function rt(c){let e,t,r,p,i,w,m,H="Utah teapot scene exported from the different pipelines.",g;const k=[c[0]];let T={$$slots:{caption:[tt]},$$scope:{ctx:c}};for(let f=0;f<k.length;f+=1)T=Z(T,k[f]);r=new ge({props:T});const x=[c[1]];let z={$$slots:{caption:[st]},$$scope:{ctx:c}};for(let f=0;f<x.length;f+=1)z=Z(z,x[f]);return i=new ge({props:z}),{c(){e=u("figure"),t=u("div"),y(r.$$.fragment),p=b(),y(i.$$.fragment),w=b(),m=u("figcaption"),m.textContent=H,this.h()},l(f){e=$(f,"FIGURE",{class:!0,role:!0});var _=F(e);t=$(_,"DIV",{class:!0});var S=F(t);L(r.$$.fragment,S),p=C(S),L(i.$$.fragment,S),S.forEach(o),w=C(_),m=$(_,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(m)!=="svelte-r4gfbf"&&(m.textContent=H),_.forEach(o),this.h()},h(){d(t,"class","radius-group svelte-x2wci8"),d(m,"class","caption"),d(e,"class","max-w"),d(e,"role","group")},m(f,_){v(f,e,_),n(e,t),G(r,t,null),n(t,p),G(i,t,null),n(e,w),n(e,m),g=!0},p(f,[_]){const S=_&1?ee(k,[B(f[0])]):{};_&4&&(S.$$scope={dirty:_,ctx:f}),r.$set(S);const A=_&2?ee(x,[B(f[1])]):{};_&4&&(A.$$scope={dirty:_,ctx:f}),i.$set(A)},i(f){g||(P(r.$$.fragment,f),P(i.$$.fragment,f),g=!0)},o(f){j(r.$$.fragment,f),j(i.$$.fragment,f),g=!1},d(f){f&&o(e),R(r),R(i)}}}function at(c){return[{src:"/media/projects/MiscGraphics/static_renders/teapot_raster.avif",alt:"rasterized teapot",radius_type:"combo left",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}},{src:"/media/projects/MiscGraphics/static_renders/teapot_ray.avif",alt:"ray traced teapot",radius_type:"combo right",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}}]}class nt extends $e{constructor(e){super(),he(this,e,at,rt,ue,{})}}function ot(c){let e,t,r,p,i,w,m,H,g,k="Wikimedia Commons";return{c(){e=V(`Visualizing the seams: red marked for removal at each step.\r
				`),t=u("span"),r=u("a"),p=V("Photo"),i=V(` by\r
				DAVID ILIFF, `),w=u("a"),m=V("CC BY 2.5"),H=V(`, via\r
				`),g=u("em"),g.textContent=k,this.h()},l(T){e=D(T,`Visualizing the seams: red marked for removal at each step.\r
				`),t=$(T,"SPAN",{class:!0});var x=F(t);r=$(x,"A",{href:!0,target:!0});var z=F(r);p=D(z,"Photo"),z.forEach(o),i=D(x,` by\r
				DAVID ILIFF, `),w=$(x,"A",{href:!0,target:!0});var f=F(w);m=D(f,"CC BY 2.5"),f.forEach(o),H=D(x,`, via\r
				`),g=$(x,"EM",{"data-svelte-h":!0}),O(g)!=="svelte-18tcd74"&&(g.textContent=k),x.forEach(o),this.h()},h(){d(r,"href",lt),d(r,"target",Ue),d(w,"href","https://creativecommons.org/licenses/by/2.5"),d(w,"target",Ue),d(t,"class","dimmed")},m(T,x){v(T,e,x),v(T,t,x),n(t,r),n(r,p),n(t,i),n(t,w),n(w,m),n(t,H),n(t,g)},p:Je,d(T){T&&(o(e),o(t))}}}function it(c){let e,t,r;return t=new Fe({props:{src:"/media/projects/MiscGraphics/seam_carve/panorama.mp4",cap_center:!1,$$slots:{caption:[ot]},$$scope:{ctx:c}}}),{c(){e=u("div"),y(t.$$.fragment),this.h()},l(p){e=$(p,"DIV",{class:!0});var i=F(e);L(t.$$.fragment,i),i.forEach(o),this.h()},h(){d(e,"class","max-w svelte-19hiodr")},m(p,i){v(p,e,i),G(t,e,null),r=!0},p(p,[i]){const w={};i&8&&(w.$$scope={dirty:i,ctx:p}),t.$set(w)},i(p){r||(P(t.$$.fragment,p),r=!0)},o(p){j(t.$$.fragment,p),r=!1},d(p){p&&o(e),R(t)}}}const lt="https://commons.wikimedia.org/wiki/File:Melbourne_Docklands_-_Yarras_Edge_-_marina_panorama.jpg",Ue="_blank";function ct(c){return[]}class ft extends $e{constructor(e){super(),he(this,e,ct,it,ue,{})}}function pt(c){let e;return{c(){e=V("original")},l(t){e=D(t,"original")},m(t,r){v(t,e,r)},d(t){t&&o(e)}}}function mt(c){let e;return{c(){e=V("horizontal sort")},l(t){e=D(t,"horizontal sort")},m(t,r){v(t,e,r)},d(t){t&&o(e)}}}function gt(c){let e;return{c(){e=V("vertical sort")},l(t){e=D(t,"vertical sort")},m(t,r){v(t,e,r)},d(t){t&&o(e)}}}function ut(c){let e,t,r,p,i,w,m,H,g,k="Pixel sorted picture I took of some moss—cool way to reinterpret depth.",T;const x=[c[0],c[1]];let z={$$slots:{caption:[pt]},$$scope:{ctx:c}};for(let l=0;l<x.length;l+=1)z=Z(z,x[l]);r=new ge({props:z});const f=[c[0],c[2]];let _={$$slots:{caption:[mt]},$$scope:{ctx:c}};for(let l=0;l<f.length;l+=1)_=Z(_,f[l]);i=new ge({props:_});const S=[c[0],c[3]];let A={$$slots:{caption:[gt]},$$scope:{ctx:c}};for(let l=0;l<S.length;l+=1)A=Z(A,S[l]);return m=new ge({props:A}),{c(){e=u("figure"),t=u("div"),y(r.$$.fragment),p=b(),y(i.$$.fragment),w=b(),y(m.$$.fragment),H=b(),g=u("figcaption"),g.textContent=k,this.h()},l(l){e=$(l,"FIGURE",{class:!0,role:!0});var h=F(e);t=$(h,"DIV",{class:!0});var a=F(t);L(r.$$.fragment,a),p=C(a),L(i.$$.fragment,a),w=C(a),L(m.$$.fragment,a),a.forEach(o),H=C(h),g=$(h,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-11qfnwo"&&(g.textContent=k),h.forEach(o),this.h()},h(){d(t,"class","radius-group"),d(g,"class","caption"),d(e,"class","max-w svelte-y1kkht"),d(e,"role","group")},m(l,h){v(l,e,h),n(e,t),G(r,t,null),n(t,p),G(i,t,null),n(t,w),G(m,t,null),n(e,H),n(e,g),T=!0},p(l,[h]){const a=h&3?ee(x,[h&1&&B(l[0]),h&2&&B(l[1])]):{};h&16&&(a.$$scope={dirty:h,ctx:l}),r.$set(a);const E=h&5?ee(f,[h&1&&B(l[0]),h&4&&B(l[2])]):{};h&16&&(E.$$scope={dirty:h,ctx:l}),i.$set(E);const M=h&9?ee(S,[h&1&&B(l[0]),h&8&&B(l[3])]):{};h&16&&(M.$$scope={dirty:h,ctx:l}),m.$set(M)},i(l){T||(P(r.$$.fragment,l),P(i.$$.fragment,l),P(m.$$.fragment,l),T=!0)},o(l){j(r.$$.fragment,l),j(i.$$.fragment,l),j(m.$$.fragment,l),T=!1},d(l){l&&o(e),R(r),R(i),R(m)}}}function $t(c){return[{from:{x:0,y:0,s:2.35},to:{x:0,y:0,s:2.6}},{src:"/media/projects/MiscGraphics/pixel_sort/moss.avif",alt:"Original picture of moss"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_h.avif",alt:"After horizontal pixel sort"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_v.avif",alt:"After vertical pixel sort"}]}class ht extends $e{constructor(e){super(),he(this,e,$t,ut,ue,{})}}function dt(c){let e,t,r,p,i,w,m,H,g,k,T='<span id="before">Before</span> and <span id="after" class="svelte-g3h7r5">after</span> running the script',x;const z=[c[1],{src:We}];let f={};for(let a=0;a<z.length;a+=1)f=Z(f,z[a]);r=new Fe({props:f});const _=[c[1],{src:Ye},{outline_off:!0},{inset_shadow:!1}];let S={};for(let a=0;a<_.length;a+=1)S=Z(S,_[a]);i=new Fe({props:S});const A=[c[2]];function l(a){c[3](a)}let h={};for(let a=0;a<A.length;a+=1)h=Z(h,A[a]);return c[0]!==void 0&&(h.value=c[0]),m=new et({props:h}),Ke.push(()=>Ze(m,"value",l)),{c(){e=u("figure"),t=u("div"),y(r.$$.fragment),p=b(),y(i.$$.fragment),w=b(),y(m.$$.fragment),g=b(),k=u("figcaption"),k.innerHTML=T,this.h()},l(a){e=$(a,"FIGURE",{class:!0,role:!0,style:!0});var E=F(e);t=$(E,"DIV",{class:!0});var M=F(t);L(r.$$.fragment,M),p=C(M),L(i.$$.fragment,M),M.forEach(o),w=C(E),L(m.$$.fragment,E),g=C(E),k=$(E,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(k)!=="svelte-racunt"&&(k.innerHTML=T),E.forEach(o),this.h()},h(){d(t,"class","radius figblock svelte-g3h7r5"),d(k,"class","caption svelte-g3h7r5"),d(e,"class","max-w svelte-g3h7r5"),d(e,"role","group"),Be(e,"--percent",c[0]+"%")},m(a,E){v(a,e,E),n(e,t),G(r,t,null),n(t,p),G(i,t,null),n(e,w),G(m,e,null),n(e,g),n(e,k),x=!0},p(a,[E]){const M=E&2?ee(z,[E&2&&B(a[1]),E&0&&{src:We}]):{};r.$set(M);const U=E&2?ee(_,[E&2&&B(a[1]),E&0&&{src:Ye},_[2],_[3]]):{};i.$set(U);const me=E&4?ee(A,[B(a[2])]):{};!H&&E&1&&(H=!0,me.value=a[0],Qe(()=>H=!1)),m.$set(me),(!x||E&1)&&Be(e,"--percent",a[0]+"%")},i(a){x||(P(r.$$.fragment,a),P(i.$$.fragment,a),P(m.$$.fragment,a),x=!0)},o(a){j(r.$$.fragment,a),j(i.$$.fragment,a),j(m.$$.fragment,a),x=!1},d(a){a&&o(e),R(r),R(i),R(m)}}}const We="/media/projects/ImageStabilzation/church_after.mp4",Ye="/media/projects/ImageStabilzation/church_before.mp4";function _t(c,e,t){const r={controls:!1,background:"none",inset_shadow:!1},p={thumbColor:"var(--slate-blue-dim)",trackPost:"#494949"};let i=50;function w(m){i=m,t(0,i)}return[i,r,p,w]}class vt extends $e{constructor(e){super(),he(this,e,_t,dt,ue,{})}}function wt(c){let e,t="<span>Misc Graphics</span>",r,p,i=`A couple of miscellaneous graphics-related projects I wasn't sure how to organize but wanted to put somewhere. Another\r
	excuse to add more pics :)`,w,m,H,g,k,T='<span class="svelte-dle5zb">Software renderers</span>',x,z,f,_,S=`Ray tracer and rasterizer made for an <em>Intro to Graphics</em> course. They share a parser for reading (static)
		<code data-type="ext">NFF</code>
		scene descriptions, exporting to <code data-type="ext">ppm</code>, and some logic for matrix ops/geometry
		processing. Forget some of the specifics, but I look forward to revisiting these!`,A,l,h,a,E,M,U,me='<span class="svelte-dle5zb">Image Stabilization</span>',ke,te,Ee,le,Ae=`Wrote this to try automating the process of aligning pictures I took without a tripod. The idea was to go
		through the sequence and, with respect to a set of feature coordinates (identified using <em>ORB descriptors</em>
		and a
		<em>BF matcher</em>), apply transforms to minimize the distance between them.`,Me,se,de,_e,ve,N,Y,Oe='<span class="svelte-dle5zb">Seam carving</span>',Te,re,ze,W,He,ae,Se,ye,ce,Ve="Intro to Graphics",Le,Ge,ne,we,be,Ce,q,J,De='<span class="svelte-dle5zb">Pixel sort</span>',Pe,oe,je,fe,Ne=`A program I made to play around with an effect that sorts pixel colors along segmented intervals. I added a couple\r
		of parameters to modify threshold behavior and change the sort direction.`,Re,ie,Ie;return z=new xe({props:{tags:["#project","C++","Eigen.h"]}}),l=new nt({}),te=new xe({props:{tags:["#script","OpenCV","Python"]}}),se=new vt({}),re=new xe({props:{tags:["#project","C++","CImg.h"]}}),ne=new ft({}),oe=new xe({props:{tags:["#cli","C++","CImg.h"]}}),ie=new ht({}),{c(){e=u("h1"),e.innerHTML=t,r=b(),p=u("p"),p.textContent=i,w=b(),m=u("hr"),H=b(),g=u("section"),k=u("h2"),k.innerHTML=T,x=b(),y(z.$$.fragment),f=b(),_=u("p"),_.innerHTML=S,A=b(),y(l.$$.fragment),h=b(),a=u("hr"),E=b(),M=u("section"),U=u("h2"),U.innerHTML=me,ke=b(),y(te.$$.fragment),Ee=b(),le=u("p"),le.innerHTML=Ae,Me=b(),y(se.$$.fragment),de=b(),_e=u("hr"),ve=b(),N=u("section"),Y=u("h2"),Y.innerHTML=Oe,Te=b(),y(re.$$.fragment),ze=b(),W=u("p"),He=V("My implementation of the content-aware "),ae=u("a"),Se=V("seam carving"),ye=V(` algorithm (also made for\r
		the\r
		`),ce=u("em"),ce.textContent=Ve,Le=V(` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),Ge=b(),y(ne.$$.fragment),we=b(),be=u("hr"),Ce=b(),q=u("section"),J=u("h2"),J.innerHTML=De,Pe=b(),y(oe.$$.fragment),je=b(),fe=u("p"),fe.textContent=Ne,Re=b(),y(ie.$$.fragment),this.h()},l(s){e=$(s,"H1",{"data-svelte-h":!0}),O(e)!=="svelte-2kftm8"&&(e.innerHTML=t),r=C(s),p=$(s,"P",{"data-svelte-h":!0}),O(p)!=="svelte-pqiav5"&&(p.textContent=i),w=C(s),m=$(s,"HR",{}),H=C(s),g=$(s,"SECTION",{class:!0});var I=F(g);k=$(I,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(k)!=="svelte-v95j1u"&&(k.innerHTML=T),x=C(I),L(z.$$.fragment,I),f=C(I),_=$(I,"P",{"data-svelte-h":!0}),O(_)!=="svelte-14dsrlx"&&(_.innerHTML=S),A=C(I),L(l.$$.fragment,I),I.forEach(o),h=C(s),a=$(s,"HR",{}),E=C(s),M=$(s,"SECTION",{class:!0});var K=F(M);U=$(K,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(U)!=="svelte-5zotrs"&&(U.innerHTML=me),ke=C(K),L(te.$$.fragment,K),Ee=C(K),le=$(K,"P",{"data-svelte-h":!0}),O(le)!=="svelte-1r59tlg"&&(le.innerHTML=Ae),Me=C(K),L(se.$$.fragment,K),K.forEach(o),de=C(s),_e=$(s,"HR",{}),ve=C(s),N=$(s,"SECTION",{class:!0});var Q=F(N);Y=$(Q,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(Y)!=="svelte-cddpjq"&&(Y.innerHTML=Oe),Te=C(Q),L(re.$$.fragment,Q),ze=C(Q),W=$(Q,"P",{});var pe=F(W);He=D(pe,"My implementation of the content-aware "),ae=$(pe,"A",{href:!0,target:!0});var qe=F(ae);Se=D(qe,"seam carving"),qe.forEach(o),ye=D(pe,` algorithm (also made for\r
		the\r
		`),ce=$(pe,"EM",{"data-svelte-h":!0}),O(ce)!=="svelte-15k3n4a"&&(ce.textContent=Ve),Le=D(pe,` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),pe.forEach(o),Ge=C(Q),L(ne.$$.fragment,Q),Q.forEach(o),we=C(s),be=$(s,"HR",{}),Ce=C(s),q=$(s,"SECTION",{class:!0});var X=F(q);J=$(X,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(J)!=="svelte-wsue7q"&&(J.innerHTML=De),Pe=C(X),L(oe.$$.fragment,X),je=C(X),fe=$(X,"P",{"data-svelte-h":!0}),O(fe)!=="svelte-12dgdvn"&&(fe.textContent=Ne),Re=C(X),L(ie.$$.fragment,X),X.forEach(o),this.h()},h(){d(k,"id","software-renderers"),d(k,"class","svelte-dle5zb"),d(g,"class","flow"),d(U,"id","image-stabilization"),d(U,"class","svelte-dle5zb"),d(M,"class","flow"),d(Y,"id","seam-carving"),d(Y,"class","svelte-dle5zb"),d(ae,"href",bt),d(ae,"target",Ct),d(N,"class","flow"),d(J,"id","pixel-sorting"),d(J,"class","svelte-dle5zb"),d(q,"class","flow")},m(s,I){v(s,e,I),v(s,r,I),v(s,p,I),v(s,w,I),v(s,m,I),v(s,H,I),v(s,g,I),n(g,k),n(g,x),G(z,g,null),n(g,f),n(g,_),n(g,A),G(l,g,null),v(s,h,I),v(s,a,I),v(s,E,I),v(s,M,I),n(M,U),n(M,ke),G(te,M,null),n(M,Ee),n(M,le),n(M,Me),G(se,M,null),v(s,de,I),v(s,_e,I),v(s,ve,I),v(s,N,I),n(N,Y),n(N,Te),G(re,N,null),n(N,ze),n(N,W),n(W,He),n(W,ae),n(ae,Se),n(W,ye),n(W,ce),n(W,Le),n(N,Ge),G(ne,N,null),v(s,we,I),v(s,be,I),v(s,Ce,I),v(s,q,I),n(q,J),n(q,Pe),G(oe,q,null),n(q,je),n(q,fe),n(q,Re),G(ie,q,null),Ie=!0},p:Je,i(s){Ie||(P(z.$$.fragment,s),P(l.$$.fragment,s),P(te.$$.fragment,s),P(se.$$.fragment,s),P(re.$$.fragment,s),P(ne.$$.fragment,s),P(oe.$$.fragment,s),P(ie.$$.fragment,s),Ie=!0)},o(s){j(z.$$.fragment,s),j(l.$$.fragment,s),j(te.$$.fragment,s),j(se.$$.fragment,s),j(re.$$.fragment,s),j(ne.$$.fragment,s),j(oe.$$.fragment,s),j(ie.$$.fragment,s),Ie=!1},d(s){s&&(o(e),o(r),o(p),o(w),o(m),o(H),o(g),o(h),o(a),o(E),o(M),o(de),o(_e),o(ve),o(N),o(we),o(be),o(Ce),o(q)),R(z),R(l),R(te),R(se),R(re),R(ne),R(oe),R(ie)}}}const bt="https://en.wikipedia.org/wiki/Seam_carving",Ct="_blank";function It(c){return Xe(()=>{if(typeof window<"u"&&window.location.hash){const e=document.getElementById(window.location.hash.substring(1));e&&window.setTimeout(()=>e.scrollIntoView(),100)}}),[]}class yt extends $e{constructor(e){super(),he(this,e,It,wt,ue,{})}}export{yt as component};