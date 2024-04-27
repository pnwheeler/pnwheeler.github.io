import{s as ue,K as Z,f as u,a as C,g as $,h as A,c as b,d as o,G as O,j as _,i as d,u as n,l as V,m as D,v as Ke,p as Je,k as Be,S as Qe,o as Xe}from"../chunks/scheduler.8d84c197.js";import{S as $e,i as he,b as z,d as S,m as L,a as G,t as P,e as R,j as Ze}from"../chunks/index.5e028736.js";import{g as ee,a as B}from"../chunks/spread.8a54911c.js";import{I as ge}from"../chunks/Img.27b22fe7.js";import{G as Ae}from"../chunks/Gif.c638eff4.js";/* empty css                                                            */import{T as xe}from"../chunks/Tags.d63f4cd6.js";import{R as et}from"../chunks/RangeSlider.00a7ad4c.js";function tt(c){let e;return{c(){e=V("Rasterized teapot")},l(t){e=D(t,"Rasterized teapot")},m(t,a){d(t,e,a)},d(t){t&&o(e)}}}function st(c){let e;return{c(){e=V("Ray traced teapot")},l(t){e=D(t,"Ray traced teapot")},m(t,a){d(t,e,a)},d(t){t&&o(e)}}}function at(c){let e,t,a,m,i,v,p,T="Utah teapot scene exported from the different pipelines.",g;const j=[c[0]];let E={$$slots:{caption:[tt]},$$scope:{ctx:c}};for(let f=0;f<j.length;f+=1)E=Z(E,j[f]);a=new ge({props:E});const x=[c[1]];let y={$$slots:{caption:[st]},$$scope:{ctx:c}};for(let f=0;f<x.length;f+=1)y=Z(y,x[f]);return i=new ge({props:y}),{c(){e=u("figure"),t=u("div"),z(a.$$.fragment),m=C(),z(i.$$.fragment),v=C(),p=u("figcaption"),p.textContent=T,this.h()},l(f){e=$(f,"FIGURE",{class:!0,role:!0});var w=A(e);t=$(w,"DIV",{class:!0});var H=A(t);S(a.$$.fragment,H),m=b(H),S(i.$$.fragment,H),H.forEach(o),v=b(w),p=$(w,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(p)!=="svelte-r4gfbf"&&(p.textContent=T),w.forEach(o),this.h()},h(){_(t,"class","svelte-x2wci8"),_(p,"class","caption"),_(e,"class","max-w"),_(e,"role","group")},m(f,w){d(f,e,w),n(e,t),L(a,t,null),n(t,m),L(i,t,null),n(e,v),n(e,p),g=!0},p(f,[w]){const H=w&1?ee(j,[B(f[0])]):{};w&4&&(H.$$scope={dirty:w,ctx:f}),a.$set(H);const F=w&2?ee(x,[B(f[1])]):{};w&4&&(F.$$scope={dirty:w,ctx:f}),i.$set(F)},i(f){g||(G(a.$$.fragment,f),G(i.$$.fragment,f),g=!0)},o(f){P(a.$$.fragment,f),P(i.$$.fragment,f),g=!1},d(f){f&&o(e),R(a),R(i)}}}function rt(c){return[{src:"/media/projects/MiscGraphics/static_renders/teapot_raster.avif",alt:"rasterized teapot",radius_type:"combo left",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}},{src:"/media/projects/MiscGraphics/static_renders/teapot_ray.avif",alt:"ray traced teapot",radius_type:"combo right",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}}]}class nt extends $e{constructor(e){super(),he(this,e,rt,at,ue,{})}}function ot(c){let e,t,a,m,i,v,p,T,g,j="Wikimedia Commons";return{c(){e=V(`Visualizing the seams: red marked for removal at each step.\r
				`),t=u("span"),a=u("a"),m=V("Photo"),i=V(` by\r
				DAVID ILIFF, `),v=u("a"),p=V("CC BY 2.5"),T=V(`, via\r
				`),g=u("em"),g.textContent=j,this.h()},l(E){e=D(E,`Visualizing the seams: red marked for removal at each step.\r
				`),t=$(E,"SPAN",{class:!0});var x=A(t);a=$(x,"A",{href:!0,target:!0});var y=A(a);m=D(y,"Photo"),y.forEach(o),i=D(x,` by\r
				DAVID ILIFF, `),v=$(x,"A",{href:!0,target:!0});var f=A(v);p=D(f,"CC BY 2.5"),f.forEach(o),T=D(x,`, via\r
				`),g=$(x,"EM",{"data-svelte-h":!0}),O(g)!=="svelte-18tcd74"&&(g.textContent=j),x.forEach(o),this.h()},h(){_(a,"href",lt),_(a,"target",Ue),_(v,"href","https://creativecommons.org/licenses/by/2.5"),_(v,"target",Ue),_(t,"class","source svelte-1omhu71")},m(E,x){d(E,e,x),d(E,t,x),n(t,a),n(a,m),n(t,i),n(t,v),n(v,p),n(t,T),n(t,g)},p:Ke,d(E){E&&(o(e),o(t))}}}function it(c){let e,t,a;return t=new Ae({props:{src:"/media/projects/MiscGraphics/seam_carve/panorama.mp4",cap_center:!1,$$slots:{caption:[ot]},$$scope:{ctx:c}}}),{c(){e=u("div"),z(t.$$.fragment),this.h()},l(m){e=$(m,"DIV",{class:!0});var i=A(e);S(t.$$.fragment,i),i.forEach(o),this.h()},h(){_(e,"class","max-w svelte-1omhu71")},m(m,i){d(m,e,i),L(t,e,null),a=!0},p(m,[i]){const v={};i&8&&(v.$$scope={dirty:i,ctx:m}),t.$set(v)},i(m){a||(G(t.$$.fragment,m),a=!0)},o(m){P(t.$$.fragment,m),a=!1},d(m){m&&o(e),R(t)}}}const lt="https://commons.wikimedia.org/wiki/File:Melbourne_Docklands_-_Yarras_Edge_-_marina_panorama.jpg",Ue="_blank";function ct(c){return[]}class ft extends $e{constructor(e){super(),he(this,e,ct,it,ue,{})}}function mt(c){let e;return{c(){e=V("original")},l(t){e=D(t,"original")},m(t,a){d(t,e,a)},d(t){t&&o(e)}}}function pt(c){let e;return{c(){e=V("horizontal sort")},l(t){e=D(t,"horizontal sort")},m(t,a){d(t,e,a)},d(t){t&&o(e)}}}function gt(c){let e;return{c(){e=V("vertical sort")},l(t){e=D(t,"vertical sort")},m(t,a){d(t,e,a)},d(t){t&&o(e)}}}function ut(c){let e,t,a,m,i,v,p,T,g,j="Pixel sorting on a picture I took of some moss—cool way to reinterpret depth.",E;const x=[c[0],c[1]];let y={$$slots:{caption:[mt]},$$scope:{ctx:c}};for(let l=0;l<x.length;l+=1)y=Z(y,x[l]);a=new ge({props:y});const f=[c[0],c[2]];let w={$$slots:{caption:[pt]},$$scope:{ctx:c}};for(let l=0;l<f.length;l+=1)w=Z(w,f[l]);i=new ge({props:w});const H=[c[0],c[3]];let F={$$slots:{caption:[gt]},$$scope:{ctx:c}};for(let l=0;l<H.length;l+=1)F=Z(F,H[l]);return p=new ge({props:F}),{c(){e=u("figure"),t=u("div"),z(a.$$.fragment),m=C(),z(i.$$.fragment),v=C(),z(p.$$.fragment),T=C(),g=u("figcaption"),g.textContent=j,this.h()},l(l){e=$(l,"FIGURE",{class:!0,role:!0});var h=A(e);t=$(h,"DIV",{class:!0});var r=A(t);S(a.$$.fragment,r),m=b(r),S(i.$$.fragment,r),v=b(r),S(p.$$.fragment,r),r.forEach(o),T=b(h),g=$(h,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-1qjs6a5"&&(g.textContent=j),h.forEach(o),this.h()},h(){_(t,"class","radius"),_(g,"class","caption"),_(e,"class","max-w  svelte-smqqrp"),_(e,"role","group")},m(l,h){d(l,e,h),n(e,t),L(a,t,null),n(t,m),L(i,t,null),n(t,v),L(p,t,null),n(e,T),n(e,g),E=!0},p(l,[h]){const r=h&3?ee(x,[h&1&&B(l[0]),h&2&&B(l[1])]):{};h&16&&(r.$$scope={dirty:h,ctx:l}),a.$set(r);const M=h&5?ee(f,[h&1&&B(l[0]),h&4&&B(l[2])]):{};h&16&&(M.$$scope={dirty:h,ctx:l}),i.$set(M);const k=h&9?ee(H,[h&1&&B(l[0]),h&8&&B(l[3])]):{};h&16&&(k.$$scope={dirty:h,ctx:l}),p.$set(k)},i(l){E||(G(a.$$.fragment,l),G(i.$$.fragment,l),G(p.$$.fragment,l),E=!0)},o(l){P(a.$$.fragment,l),P(i.$$.fragment,l),P(p.$$.fragment,l),E=!1},d(l){l&&o(e),R(a),R(i),R(p)}}}function $t(c){return[{from:{x:0,y:0,s:2.4},to:{x:0,y:0,s:2.5}},{src:"/media/projects/MiscGraphics/pixel_sort/moss.avif",alt:"Original picture of moss",radius_type:"combo left"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_h.avif",alt:"After horizontal pixel sort",radius_type:"default"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_v.avif",alt:"After vertical pixel sort",radius_type:"combo right"}]}class ht extends $e{constructor(e){super(),he(this,e,$t,ut,ue,{})}}function _t(c){let e,t,a,m,i,v,p,T,g,j,E='<span id="before">Before</span> and <span id="after" class="svelte-ovjz41">after</span> running the script',x;const y=[c[1],{src:We}];let f={};for(let r=0;r<y.length;r+=1)f=Z(f,y[r]);a=new Ae({props:f});const w=[c[1],{src:Ye},{outline_off:!0}];let H={};for(let r=0;r<w.length;r+=1)H=Z(H,w[r]);i=new Ae({props:H});const F=[c[2]];function l(r){c[3](r)}let h={};for(let r=0;r<F.length;r+=1)h=Z(h,F[r]);return c[0]!==void 0&&(h.value=c[0]),p=new et({props:h}),Je.push(()=>Ze(p,"value",l)),{c(){e=u("figure"),t=u("div"),z(a.$$.fragment),m=C(),z(i.$$.fragment),v=C(),z(p.$$.fragment),g=C(),j=u("figcaption"),j.innerHTML=E,this.h()},l(r){e=$(r,"FIGURE",{class:!0,role:!0,style:!0});var M=A(e);t=$(M,"DIV",{class:!0});var k=A(t);S(a.$$.fragment,k),m=b(k),S(i.$$.fragment,k),k.forEach(o),v=b(M),S(p.$$.fragment,M),g=b(M),j=$(M,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(j)!=="svelte-racunt"&&(j.innerHTML=E),M.forEach(o),this.h()},h(){_(t,"class","before-after svelte-ovjz41"),_(j,"class","caption svelte-ovjz41"),_(e,"class","demo max-w svelte-ovjz41"),_(e,"role","group"),Be(e,"--percent",c[0]+"%")},m(r,M){d(r,e,M),n(e,t),L(a,t,null),n(t,m),L(i,t,null),n(e,v),L(p,e,null),n(e,g),n(e,j),x=!0},p(r,[M]){const k=M&2?ee(y,[M&2&&B(r[1]),M&0&&{src:We}]):{};a.$set(k);const U=M&2?ee(w,[M&2&&B(r[1]),M&0&&{src:Ye},w[2]]):{};i.$set(U);const pe=M&4?ee(F,[B(r[2])]):{};!T&&M&1&&(T=!0,pe.value=r[0],Qe(()=>T=!1)),p.$set(pe),(!x||M&1)&&Be(e,"--percent",r[0]+"%")},i(r){x||(G(a.$$.fragment,r),G(i.$$.fragment,r),G(p.$$.fragment,r),x=!0)},o(r){P(a.$$.fragment,r),P(i.$$.fragment,r),P(p.$$.fragment,r),x=!1},d(r){r&&o(e),R(a),R(i),R(p)}}}const We="/media/projects/ImageStabilzation/church_after.mp4",Ye="/media/projects/ImageStabilzation/church_before.mp4";function dt(c,e,t){const a={controls:!1,pad:.5,background:"var(--grey-0)",inset_shadow:!0},m={thumbColor:"var(--slate-blue-dim)",trackPost:"#494949"};let i=50;function v(p){i=p,t(0,i)}return[i,a,m,v]}class vt extends $e{constructor(e){super(),he(this,e,dt,_t,ue,{})}}function wt(c){let e,t="<span>Misc Graphics</span>",a,m,i=`A couple of graphics related projects I wasn't sure how to organize but wanted to save. (Also, good excuse to add more\r
	pictures/demos)`,v,p,T,g,j,E='<span class="svelte-gcjnga">Software renderers</span>',x,y,f,w,H=`Ray tracer and rasterizer made for an <em>Intro to Graphics</em> course. They share a parser for reading (static)
		<code data-type="ext">NFF</code>
		scene descriptions, exporting to <code data-type="ext">ppm</code>, and some logic for matrix ops/geometry processing.
		Really want to revisit these and maybe try making something real-time.`,F,l,h,r,M,k,U,pe='<span class="svelte-gcjnga">Image Stabilization</span>',je,te,Me,le,Fe=`Made this to try automating the process of aligning pictures I took without a tripod. The idea was to go
		through the sequence and, with respect to a set of feature coordinates (identified using <em>ORB descriptors</em> and
		a <em>BF matcher</em>), apply transforms to minimize the distance between them.`,ke,se,_e,de,ve,N,Y,Oe='<span class="svelte-gcjnga">Seam carving</span>',Ee,ae,ye,W,Te,re,He,ze,ce,Ve="Intro to Graphics",Se,Le,ne,we,Ce,be,q,K,De='<span class="svelte-gcjnga">Pixel sort</span>',Ge,oe,Pe,fe,Ne=`A program I made to play around with an effect that sorts pixel colors along segmented intervals. I added a couple\r
		of parameters to modify threshold behavior and change the sort direction.`,Re,ie,Ie;return y=new xe({props:{tags:["#project","C++","Eigen.h"]}}),l=new nt({}),te=new xe({props:{tags:["#script","OpenCV","Python"]}}),se=new vt({}),ae=new xe({props:{tags:["#project","C++","CImg.h"]}}),ne=new ft({}),oe=new xe({props:{tags:["#cli","C++","CImg.h"]}}),ie=new ht({}),{c(){e=u("h1"),e.innerHTML=t,a=C(),m=u("p"),m.textContent=i,v=C(),p=u("hr"),T=C(),g=u("section"),j=u("h2"),j.innerHTML=E,x=C(),z(y.$$.fragment),f=C(),w=u("p"),w.innerHTML=H,F=C(),z(l.$$.fragment),h=C(),r=u("hr"),M=C(),k=u("section"),U=u("h2"),U.innerHTML=pe,je=C(),z(te.$$.fragment),Me=C(),le=u("p"),le.innerHTML=Fe,ke=C(),z(se.$$.fragment),_e=C(),de=u("hr"),ve=C(),N=u("section"),Y=u("h2"),Y.innerHTML=Oe,Ee=C(),z(ae.$$.fragment),ye=C(),W=u("p"),Te=V("My implementation of the content-aware "),re=u("a"),He=V("seam carving"),ze=V(` algorithm (also made for\r
		the\r
		`),ce=u("em"),ce.textContent=Ve,Se=V(` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),Le=C(),z(ne.$$.fragment),we=C(),Ce=u("hr"),be=C(),q=u("section"),K=u("h2"),K.innerHTML=De,Ge=C(),z(oe.$$.fragment),Pe=C(),fe=u("p"),fe.textContent=Ne,Re=C(),z(ie.$$.fragment),this.h()},l(s){e=$(s,"H1",{"data-svelte-h":!0}),O(e)!=="svelte-2kftm8"&&(e.innerHTML=t),a=b(s),m=$(s,"P",{"data-svelte-h":!0}),O(m)!=="svelte-1k99sft"&&(m.textContent=i),v=b(s),p=$(s,"HR",{}),T=b(s),g=$(s,"SECTION",{class:!0});var I=A(g);j=$(I,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(j)!=="svelte-v95j1u"&&(j.innerHTML=E),x=b(I),S(y.$$.fragment,I),f=b(I),w=$(I,"P",{"data-svelte-h":!0}),O(w)!=="svelte-5ze1g4"&&(w.innerHTML=H),F=b(I),S(l.$$.fragment,I),I.forEach(o),h=b(s),r=$(s,"HR",{}),M=b(s),k=$(s,"SECTION",{class:!0});var J=A(k);U=$(J,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(U)!=="svelte-5zotrs"&&(U.innerHTML=pe),je=b(J),S(te.$$.fragment,J),Me=b(J),le=$(J,"P",{"data-svelte-h":!0}),O(le)!=="svelte-ospbgg"&&(le.innerHTML=Fe),ke=b(J),S(se.$$.fragment,J),J.forEach(o),_e=b(s),de=$(s,"HR",{}),ve=b(s),N=$(s,"SECTION",{class:!0});var Q=A(N);Y=$(Q,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(Y)!=="svelte-cddpjq"&&(Y.innerHTML=Oe),Ee=b(Q),S(ae.$$.fragment,Q),ye=b(Q),W=$(Q,"P",{});var me=A(W);Te=D(me,"My implementation of the content-aware "),re=$(me,"A",{href:!0,target:!0});var qe=A(re);He=D(qe,"seam carving"),qe.forEach(o),ze=D(me,` algorithm (also made for\r
		the\r
		`),ce=$(me,"EM",{"data-svelte-h":!0}),O(ce)!=="svelte-15k3n4a"&&(ce.textContent=Ve),Se=D(me,` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),me.forEach(o),Le=b(Q),S(ne.$$.fragment,Q),Q.forEach(o),we=b(s),Ce=$(s,"HR",{}),be=b(s),q=$(s,"SECTION",{class:!0});var X=A(q);K=$(X,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(K)!=="svelte-wsue7q"&&(K.innerHTML=De),Ge=b(X),S(oe.$$.fragment,X),Pe=b(X),fe=$(X,"P",{"data-svelte-h":!0}),O(fe)!=="svelte-12dgdvn"&&(fe.textContent=Ne),Re=b(X),S(ie.$$.fragment,X),X.forEach(o),this.h()},h(){_(j,"id","software-renderers"),_(j,"class","svelte-gcjnga"),_(g,"class","flow"),_(U,"id","image-stabilization"),_(U,"class","svelte-gcjnga"),_(k,"class","flow"),_(Y,"id","seam-carving"),_(Y,"class","svelte-gcjnga"),_(re,"href",Ct),_(re,"target",bt),_(N,"class","flow"),_(K,"id","pixel-sorting"),_(K,"class","svelte-gcjnga"),_(q,"class","flow")},m(s,I){d(s,e,I),d(s,a,I),d(s,m,I),d(s,v,I),d(s,p,I),d(s,T,I),d(s,g,I),n(g,j),n(g,x),L(y,g,null),n(g,f),n(g,w),n(g,F),L(l,g,null),d(s,h,I),d(s,r,I),d(s,M,I),d(s,k,I),n(k,U),n(k,je),L(te,k,null),n(k,Me),n(k,le),n(k,ke),L(se,k,null),d(s,_e,I),d(s,de,I),d(s,ve,I),d(s,N,I),n(N,Y),n(N,Ee),L(ae,N,null),n(N,ye),n(N,W),n(W,Te),n(W,re),n(re,He),n(W,ze),n(W,ce),n(W,Se),n(N,Le),L(ne,N,null),d(s,we,I),d(s,Ce,I),d(s,be,I),d(s,q,I),n(q,K),n(q,Ge),L(oe,q,null),n(q,Pe),n(q,fe),n(q,Re),L(ie,q,null),Ie=!0},p:Ke,i(s){Ie||(G(y.$$.fragment,s),G(l.$$.fragment,s),G(te.$$.fragment,s),G(se.$$.fragment,s),G(ae.$$.fragment,s),G(ne.$$.fragment,s),G(oe.$$.fragment,s),G(ie.$$.fragment,s),Ie=!0)},o(s){P(y.$$.fragment,s),P(l.$$.fragment,s),P(te.$$.fragment,s),P(se.$$.fragment,s),P(ae.$$.fragment,s),P(ne.$$.fragment,s),P(oe.$$.fragment,s),P(ie.$$.fragment,s),Ie=!1},d(s){s&&(o(e),o(a),o(m),o(v),o(p),o(T),o(g),o(h),o(r),o(M),o(k),o(_e),o(de),o(ve),o(N),o(we),o(Ce),o(be),o(q)),R(y),R(l),R(te),R(se),R(ae),R(ne),R(oe),R(ie)}}}const Ct="https://en.wikipedia.org/wiki/Seam_carving",bt="_blank";function It(c){return Xe(()=>{if(typeof window<"u"&&window.location.hash){const e=document.getElementById(window.location.hash.substring(1));e&&window.setTimeout(()=>e.scrollIntoView(),100)}}),[]}class zt extends $e{constructor(e){super(),he(this,e,It,wt,ue,{})}}export{zt as component};
