import{s as ue,K as Z,f as u,a as b,g as $,h as A,c as C,d as o,G as O,j as d,i as _,u as n,l as V,m as D,v as Ke,p as Je,k as Be,S as Qe,o as Xe}from"../chunks/scheduler.8d84c197.js";import{S as $e,i as he,b as S,d as j,m as L,a as G,t as P,e as R,j as Ze}from"../chunks/index.5e028736.js";import{g as ee,a as B}from"../chunks/spread.8a54911c.js";import{I as ge}from"../chunks/Img.27b22fe7.js";import{G as Ae}from"../chunks/Gif.cb2d118f.js";/* empty css                                                            */import{T as xe}from"../chunks/Tags.d63f4cd6.js";import{R as et}from"../chunks/RangeSlider.00a7ad4c.js";function tt(c){let e;return{c(){e=V("Rasterized teapot")},l(t){e=D(t,"Rasterized teapot")},m(t,r){_(t,e,r)},d(t){t&&o(e)}}}function st(c){let e;return{c(){e=V("Ray traced teapot")},l(t){e=D(t,"Ray traced teapot")},m(t,r){_(t,e,r)},d(t){t&&o(e)}}}function rt(c){let e,t,r,m,i,v,p,y="Utah teapot scene exported from the different pipelines.",g;const z=[c[0]];let k={$$slots:{caption:[tt]},$$scope:{ctx:c}};for(let f=0;f<z.length;f+=1)k=Z(k,z[f]);r=new ge({props:k});const x=[c[1]];let T={$$slots:{caption:[st]},$$scope:{ctx:c}};for(let f=0;f<x.length;f+=1)T=Z(T,x[f]);return i=new ge({props:T}),{c(){e=u("figure"),t=u("div"),S(r.$$.fragment),m=b(),S(i.$$.fragment),v=b(),p=u("figcaption"),p.textContent=y,this.h()},l(f){e=$(f,"FIGURE",{class:!0,role:!0});var w=A(e);t=$(w,"DIV",{class:!0});var H=A(t);j(r.$$.fragment,H),m=C(H),j(i.$$.fragment,H),H.forEach(o),v=C(w),p=$(w,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(p)!=="svelte-r4gfbf"&&(p.textContent=y),w.forEach(o),this.h()},h(){d(t,"class","svelte-x2wci8"),d(p,"class","caption"),d(e,"class","max-w"),d(e,"role","group")},m(f,w){_(f,e,w),n(e,t),L(r,t,null),n(t,m),L(i,t,null),n(e,v),n(e,p),g=!0},p(f,[w]){const H=w&1?ee(z,[B(f[0])]):{};w&4&&(H.$$scope={dirty:w,ctx:f}),r.$set(H);const F=w&2?ee(x,[B(f[1])]):{};w&4&&(F.$$scope={dirty:w,ctx:f}),i.$set(F)},i(f){g||(G(r.$$.fragment,f),G(i.$$.fragment,f),g=!0)},o(f){P(r.$$.fragment,f),P(i.$$.fragment,f),g=!1},d(f){f&&o(e),R(r),R(i)}}}function at(c){return[{src:"/media/projects/MiscGraphics/static_renders/teapot_raster.avif",alt:"rasterized teapot",radius_type:"combo left",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}},{src:"/media/projects/MiscGraphics/static_renders/teapot_ray.avif",alt:"ray traced teapot",radius_type:"combo right",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}}]}class nt extends $e{constructor(e){super(),he(this,e,at,rt,ue,{})}}function ot(c){let e,t,r,m,i,v,p,y,g,z="Wikimedia Commons";return{c(){e=V(`Visualizing the seams: red marked for removal at each step.\r
				`),t=u("span"),r=u("a"),m=V("Photo"),i=V(` by\r
				DAVID ILIFF, `),v=u("a"),p=V("CC BY 2.5"),y=V(`, via\r
				`),g=u("em"),g.textContent=z,this.h()},l(k){e=D(k,`Visualizing the seams: red marked for removal at each step.\r
				`),t=$(k,"SPAN",{class:!0});var x=A(t);r=$(x,"A",{href:!0,target:!0});var T=A(r);m=D(T,"Photo"),T.forEach(o),i=D(x,` by\r
				DAVID ILIFF, `),v=$(x,"A",{href:!0,target:!0});var f=A(v);p=D(f,"CC BY 2.5"),f.forEach(o),y=D(x,`, via\r
				`),g=$(x,"EM",{"data-svelte-h":!0}),O(g)!=="svelte-18tcd74"&&(g.textContent=z),x.forEach(o),this.h()},h(){d(r,"href",lt),d(r,"target",Ue),d(v,"href","https://creativecommons.org/licenses/by/2.5"),d(v,"target",Ue),d(t,"class","source svelte-1omhu71")},m(k,x){_(k,e,x),_(k,t,x),n(t,r),n(r,m),n(t,i),n(t,v),n(v,p),n(t,y),n(t,g)},p:Ke,d(k){k&&(o(e),o(t))}}}function it(c){let e,t,r;return t=new Ae({props:{src:"/media/projects/MiscGraphics/seam_carve/panorama.mp4",cap_center:!1,$$slots:{caption:[ot]},$$scope:{ctx:c}}}),{c(){e=u("div"),S(t.$$.fragment),this.h()},l(m){e=$(m,"DIV",{class:!0});var i=A(e);j(t.$$.fragment,i),i.forEach(o),this.h()},h(){d(e,"class","max-w svelte-1omhu71")},m(m,i){_(m,e,i),L(t,e,null),r=!0},p(m,[i]){const v={};i&8&&(v.$$scope={dirty:i,ctx:m}),t.$set(v)},i(m){r||(G(t.$$.fragment,m),r=!0)},o(m){P(t.$$.fragment,m),r=!1},d(m){m&&o(e),R(t)}}}const lt="https://commons.wikimedia.org/wiki/File:Melbourne_Docklands_-_Yarras_Edge_-_marina_panorama.jpg",Ue="_blank";function ct(c){return[]}class ft extends $e{constructor(e){super(),he(this,e,ct,it,ue,{})}}function mt(c){let e;return{c(){e=V("original")},l(t){e=D(t,"original")},m(t,r){_(t,e,r)},d(t){t&&o(e)}}}function pt(c){let e;return{c(){e=V("horizontal sort")},l(t){e=D(t,"horizontal sort")},m(t,r){_(t,e,r)},d(t){t&&o(e)}}}function gt(c){let e;return{c(){e=V("vertical sort")},l(t){e=D(t,"vertical sort")},m(t,r){_(t,e,r)},d(t){t&&o(e)}}}function ut(c){let e,t,r,m,i,v,p,y,g,z="Pixel sorting on a picture I took of some moss—cool way to reinterpret depth.",k;const x=[c[0],c[1]];let T={$$slots:{caption:[mt]},$$scope:{ctx:c}};for(let l=0;l<x.length;l+=1)T=Z(T,x[l]);r=new ge({props:T});const f=[c[0],c[2]];let w={$$slots:{caption:[pt]},$$scope:{ctx:c}};for(let l=0;l<f.length;l+=1)w=Z(w,f[l]);i=new ge({props:w});const H=[c[0],c[3]];let F={$$slots:{caption:[gt]},$$scope:{ctx:c}};for(let l=0;l<H.length;l+=1)F=Z(F,H[l]);return p=new ge({props:F}),{c(){e=u("figure"),t=u("div"),S(r.$$.fragment),m=b(),S(i.$$.fragment),v=b(),S(p.$$.fragment),y=b(),g=u("figcaption"),g.textContent=z,this.h()},l(l){e=$(l,"FIGURE",{class:!0,role:!0});var h=A(e);t=$(h,"DIV",{class:!0});var a=A(t);j(r.$$.fragment,a),m=C(a),j(i.$$.fragment,a),v=C(a),j(p.$$.fragment,a),a.forEach(o),y=C(h),g=$(h,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-1qjs6a5"&&(g.textContent=z),h.forEach(o),this.h()},h(){d(t,"class","radius"),d(g,"class","caption"),d(e,"class","max-w  svelte-smqqrp"),d(e,"role","group")},m(l,h){_(l,e,h),n(e,t),L(r,t,null),n(t,m),L(i,t,null),n(t,v),L(p,t,null),n(e,y),n(e,g),k=!0},p(l,[h]){const a=h&3?ee(x,[h&1&&B(l[0]),h&2&&B(l[1])]):{};h&16&&(a.$$scope={dirty:h,ctx:l}),r.$set(a);const E=h&5?ee(f,[h&1&&B(l[0]),h&4&&B(l[2])]):{};h&16&&(E.$$scope={dirty:h,ctx:l}),i.$set(E);const M=h&9?ee(H,[h&1&&B(l[0]),h&8&&B(l[3])]):{};h&16&&(M.$$scope={dirty:h,ctx:l}),p.$set(M)},i(l){k||(G(r.$$.fragment,l),G(i.$$.fragment,l),G(p.$$.fragment,l),k=!0)},o(l){P(r.$$.fragment,l),P(i.$$.fragment,l),P(p.$$.fragment,l),k=!1},d(l){l&&o(e),R(r),R(i),R(p)}}}function $t(c){return[{from:{x:0,y:0,s:2.4},to:{x:0,y:0,s:2.5}},{src:"/media/projects/MiscGraphics/pixel_sort/moss.avif",alt:"Original picture of moss",radius_type:"combo left"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_h.avif",alt:"After horizontal pixel sort",radius_type:"default"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_v.avif",alt:"After vertical pixel sort",radius_type:"combo right"}]}class ht extends $e{constructor(e){super(),he(this,e,$t,ut,ue,{})}}function dt(c){let e,t,r,m,i,v,p,y,g,z,k='<span id="before">Before</span> and <span id="after" class="svelte-ovjz41">after</span> running the script',x;const T=[c[1],{src:We}];let f={};for(let a=0;a<T.length;a+=1)f=Z(f,T[a]);r=new Ae({props:f});const w=[c[1],{src:Ye},{outline_off:!0}];let H={};for(let a=0;a<w.length;a+=1)H=Z(H,w[a]);i=new Ae({props:H});const F=[c[2]];function l(a){c[3](a)}let h={};for(let a=0;a<F.length;a+=1)h=Z(h,F[a]);return c[0]!==void 0&&(h.value=c[0]),p=new et({props:h}),Je.push(()=>Ze(p,"value",l)),{c(){e=u("figure"),t=u("div"),S(r.$$.fragment),m=b(),S(i.$$.fragment),v=b(),S(p.$$.fragment),g=b(),z=u("figcaption"),z.innerHTML=k,this.h()},l(a){e=$(a,"FIGURE",{class:!0,role:!0,style:!0});var E=A(e);t=$(E,"DIV",{class:!0});var M=A(t);j(r.$$.fragment,M),m=C(M),j(i.$$.fragment,M),M.forEach(o),v=C(E),j(p.$$.fragment,E),g=C(E),z=$(E,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(z)!=="svelte-racunt"&&(z.innerHTML=k),E.forEach(o),this.h()},h(){d(t,"class","before-after svelte-ovjz41"),d(z,"class","caption svelte-ovjz41"),d(e,"class","demo max-w svelte-ovjz41"),d(e,"role","group"),Be(e,"--percent",c[0]+"%")},m(a,E){_(a,e,E),n(e,t),L(r,t,null),n(t,m),L(i,t,null),n(e,v),L(p,e,null),n(e,g),n(e,z),x=!0},p(a,[E]){const M=E&2?ee(T,[E&2&&B(a[1]),E&0&&{src:We}]):{};r.$set(M);const U=E&2?ee(w,[E&2&&B(a[1]),E&0&&{src:Ye},w[2]]):{};i.$set(U);const pe=E&4?ee(F,[B(a[2])]):{};!y&&E&1&&(y=!0,pe.value=a[0],Qe(()=>y=!1)),p.$set(pe),(!x||E&1)&&Be(e,"--percent",a[0]+"%")},i(a){x||(G(r.$$.fragment,a),G(i.$$.fragment,a),G(p.$$.fragment,a),x=!0)},o(a){P(r.$$.fragment,a),P(i.$$.fragment,a),P(p.$$.fragment,a),x=!1},d(a){a&&o(e),R(r),R(i),R(p)}}}const We="/media/projects/ImageStabilzation/church_after.mp4",Ye="/media/projects/ImageStabilzation/church_before.mp4";function _t(c,e,t){const r={controls:!1,pad:.5,background:"var(--grey-0)",inset_shadow:!0},m={thumbColor:"var(--slate-blue-dim)",trackPost:"#494949"};let i=50;function v(p){i=p,t(0,i)}return[i,r,m,v]}class vt extends $e{constructor(e){super(),he(this,e,_t,dt,ue,{})}}function wt(c){let e,t="<span>Misc Graphics</span>",r,m,i="A couple of miscellaneous graphics-related projects I wasn't sure how to organize but wanted to put somewhere. Another excuse to add more pics :)",v,p,y,g,z,k='<span class="svelte-dle5zb">Software renderers</span>',x,T,f,w,H=`Ray tracer and rasterizer made for an <em>Intro to Graphics</em> course. They share a parser for reading (static)
		<code data-type="ext">NFF</code>
		scene descriptions, exporting to <code data-type="ext">ppm</code>, and some logic for matrix ops/geometry
		processing. Looking forward to revisiting these later!`,F,l,h,a,E,M,U,pe='<span class="svelte-dle5zb">Image Stabilization</span>',ze,te,Ee,le,Fe=`Wrote this script to try automating the process of aligning pictures I took without a tripod. The idea was to go through the
		sequence and, with respect to a set of feature coordinates (identified using <em>ORB descriptors</em> and a
		<em>BF matcher</em>), apply transforms to minimize the distance between them.`,Me,se,de,_e,ve,N,Y,Oe='<span class="svelte-dle5zb">Seam carving</span>',ke,re,Te,W,ye,ae,He,Se,ce,Ve="Intro to Graphics",je,Le,ne,we,be,Ce,q,K,De='<span class="svelte-dle5zb">Pixel sort</span>',Ge,oe,Pe,fe,Ne=`A program I made to play around with an effect that sorts pixel colors along segmented intervals. I added a couple\r
		of parameters to modify threshold behavior and change the sort direction.`,Re,ie,Ie;return T=new xe({props:{tags:["#project","C++","Eigen.h"]}}),l=new nt({}),te=new xe({props:{tags:["#script","OpenCV","Python"]}}),se=new vt({}),re=new xe({props:{tags:["#project","C++","CImg.h"]}}),ne=new ft({}),oe=new xe({props:{tags:["#cli","C++","CImg.h"]}}),ie=new ht({}),{c(){e=u("h1"),e.innerHTML=t,r=b(),m=u("p"),m.textContent=i,v=b(),p=u("hr"),y=b(),g=u("section"),z=u("h2"),z.innerHTML=k,x=b(),S(T.$$.fragment),f=b(),w=u("p"),w.innerHTML=H,F=b(),S(l.$$.fragment),h=b(),a=u("hr"),E=b(),M=u("section"),U=u("h2"),U.innerHTML=pe,ze=b(),S(te.$$.fragment),Ee=b(),le=u("p"),le.innerHTML=Fe,Me=b(),S(se.$$.fragment),de=b(),_e=u("hr"),ve=b(),N=u("section"),Y=u("h2"),Y.innerHTML=Oe,ke=b(),S(re.$$.fragment),Te=b(),W=u("p"),ye=V("My implementation of the content-aware "),ae=u("a"),He=V("seam carving"),Se=V(` algorithm (also made for\r
		the\r
		`),ce=u("em"),ce.textContent=Ve,je=V(` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),Le=b(),S(ne.$$.fragment),we=b(),be=u("hr"),Ce=b(),q=u("section"),K=u("h2"),K.innerHTML=De,Ge=b(),S(oe.$$.fragment),Pe=b(),fe=u("p"),fe.textContent=Ne,Re=b(),S(ie.$$.fragment),this.h()},l(s){e=$(s,"H1",{"data-svelte-h":!0}),O(e)!=="svelte-2kftm8"&&(e.innerHTML=t),r=C(s),m=$(s,"P",{"data-svelte-h":!0}),O(m)!=="svelte-1fg96me"&&(m.textContent=i),v=C(s),p=$(s,"HR",{}),y=C(s),g=$(s,"SECTION",{class:!0});var I=A(g);z=$(I,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(z)!=="svelte-v95j1u"&&(z.innerHTML=k),x=C(I),j(T.$$.fragment,I),f=C(I),w=$(I,"P",{"data-svelte-h":!0}),O(w)!=="svelte-ym4rb"&&(w.innerHTML=H),F=C(I),j(l.$$.fragment,I),I.forEach(o),h=C(s),a=$(s,"HR",{}),E=C(s),M=$(s,"SECTION",{class:!0});var J=A(M);U=$(J,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(U)!=="svelte-5zotrs"&&(U.innerHTML=pe),ze=C(J),j(te.$$.fragment,J),Ee=C(J),le=$(J,"P",{"data-svelte-h":!0}),O(le)!=="svelte-uswmm7"&&(le.innerHTML=Fe),Me=C(J),j(se.$$.fragment,J),J.forEach(o),de=C(s),_e=$(s,"HR",{}),ve=C(s),N=$(s,"SECTION",{class:!0});var Q=A(N);Y=$(Q,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(Y)!=="svelte-cddpjq"&&(Y.innerHTML=Oe),ke=C(Q),j(re.$$.fragment,Q),Te=C(Q),W=$(Q,"P",{});var me=A(W);ye=D(me,"My implementation of the content-aware "),ae=$(me,"A",{href:!0,target:!0});var qe=A(ae);He=D(qe,"seam carving"),qe.forEach(o),Se=D(me,` algorithm (also made for\r
		the\r
		`),ce=$(me,"EM",{"data-svelte-h":!0}),O(ce)!=="svelte-15k3n4a"&&(ce.textContent=Ve),je=D(me,` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),me.forEach(o),Le=C(Q),j(ne.$$.fragment,Q),Q.forEach(o),we=C(s),be=$(s,"HR",{}),Ce=C(s),q=$(s,"SECTION",{class:!0});var X=A(q);K=$(X,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(K)!=="svelte-wsue7q"&&(K.innerHTML=De),Ge=C(X),j(oe.$$.fragment,X),Pe=C(X),fe=$(X,"P",{"data-svelte-h":!0}),O(fe)!=="svelte-12dgdvn"&&(fe.textContent=Ne),Re=C(X),j(ie.$$.fragment,X),X.forEach(o),this.h()},h(){d(z,"id","software-renderers"),d(z,"class","svelte-dle5zb"),d(g,"class","flow"),d(U,"id","image-stabilization"),d(U,"class","svelte-dle5zb"),d(M,"class","flow"),d(Y,"id","seam-carving"),d(Y,"class","svelte-dle5zb"),d(ae,"href",bt),d(ae,"target",Ct),d(N,"class","flow"),d(K,"id","pixel-sorting"),d(K,"class","svelte-dle5zb"),d(q,"class","flow")},m(s,I){_(s,e,I),_(s,r,I),_(s,m,I),_(s,v,I),_(s,p,I),_(s,y,I),_(s,g,I),n(g,z),n(g,x),L(T,g,null),n(g,f),n(g,w),n(g,F),L(l,g,null),_(s,h,I),_(s,a,I),_(s,E,I),_(s,M,I),n(M,U),n(M,ze),L(te,M,null),n(M,Ee),n(M,le),n(M,Me),L(se,M,null),_(s,de,I),_(s,_e,I),_(s,ve,I),_(s,N,I),n(N,Y),n(N,ke),L(re,N,null),n(N,Te),n(N,W),n(W,ye),n(W,ae),n(ae,He),n(W,Se),n(W,ce),n(W,je),n(N,Le),L(ne,N,null),_(s,we,I),_(s,be,I),_(s,Ce,I),_(s,q,I),n(q,K),n(q,Ge),L(oe,q,null),n(q,Pe),n(q,fe),n(q,Re),L(ie,q,null),Ie=!0},p:Ke,i(s){Ie||(G(T.$$.fragment,s),G(l.$$.fragment,s),G(te.$$.fragment,s),G(se.$$.fragment,s),G(re.$$.fragment,s),G(ne.$$.fragment,s),G(oe.$$.fragment,s),G(ie.$$.fragment,s),Ie=!0)},o(s){P(T.$$.fragment,s),P(l.$$.fragment,s),P(te.$$.fragment,s),P(se.$$.fragment,s),P(re.$$.fragment,s),P(ne.$$.fragment,s),P(oe.$$.fragment,s),P(ie.$$.fragment,s),Ie=!1},d(s){s&&(o(e),o(r),o(m),o(v),o(p),o(y),o(g),o(h),o(a),o(E),o(M),o(de),o(_e),o(ve),o(N),o(we),o(be),o(Ce),o(q)),R(T),R(l),R(te),R(se),R(re),R(ne),R(oe),R(ie)}}}const bt="https://en.wikipedia.org/wiki/Seam_carving",Ct="_blank";function It(c){return Xe(()=>{if(typeof window<"u"&&window.location.hash){const e=document.getElementById(window.location.hash.substring(1));e&&window.setTimeout(()=>e.scrollIntoView(),100)}}),[]}class St extends $e{constructor(e){super(),he(this,e,It,wt,ue,{})}}export{St as component};
