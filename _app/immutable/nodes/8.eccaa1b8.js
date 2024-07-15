import{s as ue,K as Z,f as u,a as C,g as $,h as F,c as x,d as i,G as O,j as _,i as d,u as n,l as D,m as N,v as Ke,p as Je,k as Be,T as Qe}from"../chunks/scheduler.6d6d93c7.js";import{S as $e,i as he,b as L,d as y,m as z,a as P,t as j,e as R,j as Xe}from"../chunks/index.15fe4709.js";import{T as be}from"../chunks/Tags.1c4aa0a2.js";import{g as ee,a as B}from"../chunks/spread.8a54911c.js";import{I as ge}from"../chunks/Img.656864ab.js";import{G as Fe}from"../chunks/Gif.7ebaa9d9.js";import{R as Ze}from"../chunks/RangeSlider.931194e2.js";function et(c){let e;return{c(){e=D("Rasterized teapot")},l(t){e=N(t,"Rasterized teapot")},m(t,r){d(t,e,r)},d(t){t&&i(e)}}}function tt(c){let e;return{c(){e=D("Ray traced teapot")},l(t){e=N(t,"Ray traced teapot")},m(t,r){d(t,e,r)},d(t){t&&i(e)}}}function st(c){let e,t,r,p,o,v,m,S="Utah teapot scene exported from the different pipelines.",g;const k=[c[0]];let E={$$slots:{caption:[et]},$$scope:{ctx:c}};for(let f=0;f<k.length;f+=1)E=Z(E,k[f]);r=new ge({props:E});const b=[c[1]];let H={$$slots:{caption:[tt]},$$scope:{ctx:c}};for(let f=0;f<b.length;f+=1)H=Z(H,b[f]);return o=new ge({props:H}),{c(){e=u("figure"),t=u("div"),L(r.$$.fragment),p=C(),L(o.$$.fragment),v=C(),m=u("figcaption"),m.textContent=S,this.h()},l(f){e=$(f,"FIGURE",{class:!0,role:!0});var w=F(e);t=$(w,"DIV",{class:!0});var G=F(t);y(r.$$.fragment,G),p=x(G),y(o.$$.fragment,G),G.forEach(i),v=x(w),m=$(w,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(m)!=="svelte-r4gfbf"&&(m.textContent=S),w.forEach(i),this.h()},h(){_(t,"class","radius-group svelte-x2wci8"),_(m,"class","caption"),_(e,"class","max-w"),_(e,"role","group")},m(f,w){d(f,e,w),n(e,t),z(r,t,null),n(t,p),z(o,t,null),n(e,v),n(e,m),g=!0},p(f,[w]){const G=w&1?ee(k,[B(f[0])]):{};w&4&&(G.$$scope={dirty:w,ctx:f}),r.$set(G);const A=w&2?ee(b,[B(f[1])]):{};w&4&&(A.$$scope={dirty:w,ctx:f}),o.$set(A)},i(f){g||(P(r.$$.fragment,f),P(o.$$.fragment,f),g=!0)},o(f){j(r.$$.fragment,f),j(o.$$.fragment,f),g=!1},d(f){f&&i(e),R(r),R(o)}}}function rt(c){return[{src:"/media/projects/MiscGraphics/static_renders/teapot_raster.avif",alt:"rasterized teapot",radius_type:"combo left",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}},{src:"/media/projects/MiscGraphics/static_renders/teapot_ray.avif",alt:"ray traced teapot",radius_type:"combo right",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}}]}class at extends $e{constructor(e){super(),he(this,e,rt,st,ue,{})}}function nt(c){let e,t,r,p,o,v,m,S,g,k="Wikimedia Commons";return{c(){e=D(`Visualizing the seams: red marked for removal at each step.\r
				`),t=u("span"),r=u("a"),p=D("Photo"),o=D(` by\r
				DAVID ILIFF, `),v=u("a"),m=D("CC BY 2.5"),S=D(`, via\r
				`),g=u("em"),g.textContent=k,this.h()},l(E){e=N(E,`Visualizing the seams: red marked for removal at each step.\r
				`),t=$(E,"SPAN",{class:!0});var b=F(t);r=$(b,"A",{href:!0,target:!0});var H=F(r);p=N(H,"Photo"),H.forEach(i),o=N(b,` by\r
				DAVID ILIFF, `),v=$(b,"A",{href:!0,target:!0});var f=F(v);m=N(f,"CC BY 2.5"),f.forEach(i),S=N(b,`, via\r
				`),g=$(b,"EM",{"data-svelte-h":!0}),O(g)!=="svelte-18tcd74"&&(g.textContent=k),b.forEach(i),this.h()},h(){_(r,"href",ot),_(r,"target",Ue),_(v,"href","https://creativecommons.org/licenses/by/2.5"),_(v,"target",Ue),_(t,"class","dimmed")},m(E,b){d(E,e,b),d(E,t,b),n(t,r),n(r,p),n(t,o),n(t,v),n(v,m),n(t,S),n(t,g)},p:Ke,d(E){E&&(i(e),i(t))}}}function it(c){let e,t,r;return t=new Fe({props:{src:"/media/projects/MiscGraphics/seam_carve/panorama.mp4",cap_center:!1,$$slots:{caption:[nt]},$$scope:{ctx:c}}}),{c(){e=u("div"),L(t.$$.fragment),this.h()},l(p){e=$(p,"DIV",{class:!0});var o=F(e);y(t.$$.fragment,o),o.forEach(i),this.h()},h(){_(e,"class","max-w svelte-19hiodr")},m(p,o){d(p,e,o),z(t,e,null),r=!0},p(p,[o]){const v={};o&1&&(v.$$scope={dirty:o,ctx:p}),t.$set(v)},i(p){r||(P(t.$$.fragment,p),r=!0)},o(p){j(t.$$.fragment,p),r=!1},d(p){p&&i(e),R(t)}}}const ot="https://commons.wikimedia.org/wiki/File:Melbourne_Docklands_-_Yarras_Edge_-_marina_panorama.jpg",Ue="_blank";class lt extends $e{constructor(e){super(),he(this,e,null,it,ue,{})}}function ct(c){let e;return{c(){e=D("original")},l(t){e=N(t,"original")},m(t,r){d(t,e,r)},d(t){t&&i(e)}}}function ft(c){let e;return{c(){e=D("horizontal sort")},l(t){e=N(t,"horizontal sort")},m(t,r){d(t,e,r)},d(t){t&&i(e)}}}function pt(c){let e;return{c(){e=D("vertical sort")},l(t){e=N(t,"vertical sort")},m(t,r){d(t,e,r)},d(t){t&&i(e)}}}function mt(c){let e,t,r,p,o,v,m,S,g,k="Pixel sorted picture I took of some moss—cool way to reinterpret depth.",E;const b=[c[0],c[1]];let H={$$slots:{caption:[ct]},$$scope:{ctx:c}};for(let l=0;l<b.length;l+=1)H=Z(H,b[l]);r=new ge({props:H});const f=[c[0],c[2]];let w={$$slots:{caption:[ft]},$$scope:{ctx:c}};for(let l=0;l<f.length;l+=1)w=Z(w,f[l]);o=new ge({props:w});const G=[c[0],c[3]];let A={$$slots:{caption:[pt]},$$scope:{ctx:c}};for(let l=0;l<G.length;l+=1)A=Z(A,G[l]);return m=new ge({props:A}),{c(){e=u("figure"),t=u("div"),L(r.$$.fragment),p=C(),L(o.$$.fragment),v=C(),L(m.$$.fragment),S=C(),g=u("figcaption"),g.textContent=k,this.h()},l(l){e=$(l,"FIGURE",{class:!0,role:!0});var h=F(e);t=$(h,"DIV",{class:!0});var a=F(t);y(r.$$.fragment,a),p=x(a),y(o.$$.fragment,a),v=x(a),y(m.$$.fragment,a),a.forEach(i),S=x(h),g=$(h,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-11qfnwo"&&(g.textContent=k),h.forEach(i),this.h()},h(){_(t,"class","radius-group"),_(g,"class","caption"),_(e,"class","max-w svelte-93vq34"),_(e,"role","group")},m(l,h){d(l,e,h),n(e,t),z(r,t,null),n(t,p),z(o,t,null),n(t,v),z(m,t,null),n(e,S),n(e,g),E=!0},p(l,[h]){const a=h&3?ee(b,[h&1&&B(l[0]),h&2&&B(l[1])]):{};h&16&&(a.$$scope={dirty:h,ctx:l}),r.$set(a);const M=h&5?ee(f,[h&1&&B(l[0]),h&4&&B(l[2])]):{};h&16&&(M.$$scope={dirty:h,ctx:l}),o.$set(M);const T=h&9?ee(G,[h&1&&B(l[0]),h&8&&B(l[3])]):{};h&16&&(T.$$scope={dirty:h,ctx:l}),m.$set(T)},i(l){E||(P(r.$$.fragment,l),P(o.$$.fragment,l),P(m.$$.fragment,l),E=!0)},o(l){j(r.$$.fragment,l),j(o.$$.fragment,l),j(m.$$.fragment,l),E=!1},d(l){l&&i(e),R(r),R(o),R(m)}}}function gt(c){return[{from:{x:0,y:0,s:2},to:{x:0,y:0,s:2.3}},{src:"/media/projects/MiscGraphics/pixel_sort/moss.avif",alt:"Original picture of moss"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_h.avif",alt:"After horizontal pixel sort"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_v.avif",alt:"After vertical pixel sort"}]}class ut extends $e{constructor(e){super(),he(this,e,gt,mt,ue,{})}}function $t(c){let e,t,r,p,o,v,m,S,g,k,E='<span id="before">Before</span> and <span id="after" class="svelte-1cashin">after</span> running the script',b;const H=[c[1],{src:We}];let f={};for(let a=0;a<H.length;a+=1)f=Z(f,H[a]);r=new Fe({props:f});const w=[c[1],{src:Ye},{outline_off:!0}];let G={};for(let a=0;a<w.length;a+=1)G=Z(G,w[a]);o=new Fe({props:G});const A=[c[2]];function l(a){c[3](a)}let h={};for(let a=0;a<A.length;a+=1)h=Z(h,A[a]);return c[0]!==void 0&&(h.value=c[0]),m=new Ze({props:h}),Je.push(()=>Xe(m,"value",l)),{c(){e=u("figure"),t=u("div"),L(r.$$.fragment),p=C(),L(o.$$.fragment),v=C(),L(m.$$.fragment),g=C(),k=u("figcaption"),k.innerHTML=E,this.h()},l(a){e=$(a,"FIGURE",{class:!0,role:!0,style:!0});var M=F(e);t=$(M,"DIV",{class:!0});var T=F(t);y(r.$$.fragment,T),p=x(T),y(o.$$.fragment,T),T.forEach(i),v=x(M),y(m.$$.fragment,M),g=x(M),k=$(M,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),O(k)!=="svelte-racunt"&&(k.innerHTML=E),M.forEach(i),this.h()},h(){_(t,"class","radius figblock box-shadow svelte-1cashin"),_(k,"class","caption svelte-1cashin"),_(e,"class","max-w svelte-1cashin"),_(e,"role","group"),Be(e,"--percent",c[0]+"%")},m(a,M){d(a,e,M),n(e,t),z(r,t,null),n(t,p),z(o,t,null),n(e,v),z(m,e,null),n(e,g),n(e,k),b=!0},p(a,[M]){const T=M&2?ee(H,[M&2&&B(a[1]),M&0&&{src:We}]):{};r.$set(T);const U=M&2?ee(w,[M&2&&B(a[1]),M&0&&{src:Ye},w[2]]):{};o.$set(U);const me=M&4?ee(A,[B(a[2])]):{};!S&&M&1&&(S=!0,me.value=a[0],Qe(()=>S=!1)),m.$set(me),(!b||M&1)&&Be(e,"--percent",a[0]+"%")},i(a){b||(P(r.$$.fragment,a),P(o.$$.fragment,a),P(m.$$.fragment,a),b=!0)},o(a){j(r.$$.fragment,a),j(o.$$.fragment,a),j(m.$$.fragment,a),b=!1},d(a){a&&i(e),R(r),R(o),R(m)}}}const We="/media/projects/ImageStabilzation/church_after.mp4",Ye="/media/projects/ImageStabilzation/church_before.mp4";function ht(c,e,t){const r={controls:!1,card:!1,box_shadow:!1,background:"none"},p={thumbColor:"var(--slate-blue-dim)",trackPost:"#494949",step:"1"};let o=50;function v(m){o=m,t(0,o)}return[o,r,p,v]}class _t extends $e{constructor(e){super(),he(this,e,ht,$t,ue,{})}}function dt(c){let e,t="<span>Misc Graphics</span>",r,p,o=`A couple of miscellaneous graphics-related projects I wasn't sure how to organize but wanted to put somewhere. Another\r
	excuse to add more pics.`,v,m,S,g,k,E='<span class="svelte-tei0r3">Software renderers</span>',b,H,f,w,G=`Ray tracer and rasterizer made for an <em>Intro to Graphics</em> course. They share a parser for reading (static)
		<code data-type="ext">NFF</code>
		scene descriptions, exporting to <code data-type="ext">ppm</code>, and some logic for matrix ops/geometry
		processing. Forget some of the specifics, but I look forward to revisiting these!`,A,l,h,a,M,T,U,me='<span class="svelte-tei0r3">Image Stabilization</span>',ke,te,Me,le,Ae=`Wrote this to try automating the process of aligning pictures I took without a tripod. The idea was to go
		through the sequence and, with respect to a set of feature coordinates (identified using <em>ORB descriptors</em>
		and a
		<em>BF matcher</em>), apply transforms to minimize the distance between them.`,Te,se,_e,de,ve,V,Y,Oe='<span class="svelte-tei0r3">Seam carving</span>',Ee,re,He,W,Se,ae,Ge,Le,ce,De="Intro to Graphics",ye,ze,ne,we,Ce,xe,q,K,Ne='<span class="svelte-tei0r3">Pixel sort</span>',Pe,ie,je,fe,Ve=`A program I made to play around with an effect that sorts pixel colors along segmented intervals. I added a couple\r
		of parameters to modify threshold behavior and change the sort direction.`,Re,oe,Ie;return H=new be({props:{tags:["#project","C++","Eigen.h"]}}),l=new at({}),te=new be({props:{tags:["#script","OpenCV","Python"]}}),se=new _t({}),re=new be({props:{tags:["#project","C++","CImg.h"]}}),ne=new lt({}),ie=new be({props:{tags:["#cli","C++","CImg.h"]}}),oe=new ut({}),{c(){e=u("h1"),e.innerHTML=t,r=C(),p=u("p"),p.textContent=o,v=C(),m=u("hr"),S=C(),g=u("section"),k=u("h2"),k.innerHTML=E,b=C(),L(H.$$.fragment),f=C(),w=u("p"),w.innerHTML=G,A=C(),L(l.$$.fragment),h=C(),a=u("hr"),M=C(),T=u("section"),U=u("h2"),U.innerHTML=me,ke=C(),L(te.$$.fragment),Me=C(),le=u("p"),le.innerHTML=Ae,Te=C(),L(se.$$.fragment),_e=C(),de=u("hr"),ve=C(),V=u("section"),Y=u("h2"),Y.innerHTML=Oe,Ee=C(),L(re.$$.fragment),He=C(),W=u("p"),Se=D("My implementation of the content-aware "),ae=u("a"),Ge=D("seam carving"),Le=D(` algorithm (also made for\r
		the\r
		`),ce=u("em"),ce.textContent=De,ye=D(` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),ze=C(),L(ne.$$.fragment),we=C(),Ce=u("hr"),xe=C(),q=u("section"),K=u("h2"),K.innerHTML=Ne,Pe=C(),L(ie.$$.fragment),je=C(),fe=u("p"),fe.textContent=Ve,Re=C(),L(oe.$$.fragment),this.h()},l(s){e=$(s,"H1",{"data-svelte-h":!0}),O(e)!=="svelte-2kftm8"&&(e.innerHTML=t),r=x(s),p=$(s,"P",{"data-svelte-h":!0}),O(p)!=="svelte-1ipomk0"&&(p.textContent=o),v=x(s),m=$(s,"HR",{}),S=x(s),g=$(s,"SECTION",{class:!0});var I=F(g);k=$(I,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(k)!=="svelte-v95j1u"&&(k.innerHTML=E),b=x(I),y(H.$$.fragment,I),f=x(I),w=$(I,"P",{"data-svelte-h":!0}),O(w)!=="svelte-14dsrlx"&&(w.innerHTML=G),A=x(I),y(l.$$.fragment,I),I.forEach(i),h=x(s),a=$(s,"HR",{}),M=x(s),T=$(s,"SECTION",{class:!0});var J=F(T);U=$(J,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(U)!=="svelte-5zotrs"&&(U.innerHTML=me),ke=x(J),y(te.$$.fragment,J),Me=x(J),le=$(J,"P",{"data-svelte-h":!0}),O(le)!=="svelte-1r59tlg"&&(le.innerHTML=Ae),Te=x(J),y(se.$$.fragment,J),J.forEach(i),_e=x(s),de=$(s,"HR",{}),ve=x(s),V=$(s,"SECTION",{class:!0});var Q=F(V);Y=$(Q,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(Y)!=="svelte-cddpjq"&&(Y.innerHTML=Oe),Ee=x(Q),y(re.$$.fragment,Q),He=x(Q),W=$(Q,"P",{});var pe=F(W);Se=N(pe,"My implementation of the content-aware "),ae=$(pe,"A",{href:!0,target:!0});var qe=F(ae);Ge=N(qe,"seam carving"),qe.forEach(i),Le=N(pe,` algorithm (also made for\r
		the\r
		`),ce=$(pe,"EM",{"data-svelte-h":!0}),O(ce)!=="svelte-15k3n4a"&&(ce.textContent=De),ye=N(pe,` course). I preprocessed the images with a LoG filter and used a relative luminance function\r
		as the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),pe.forEach(i),ze=x(Q),y(ne.$$.fragment,Q),Q.forEach(i),we=x(s),Ce=$(s,"HR",{}),xe=x(s),q=$(s,"SECTION",{class:!0});var X=F(q);K=$(X,"H2",{id:!0,class:!0,"data-svelte-h":!0}),O(K)!=="svelte-wsue7q"&&(K.innerHTML=Ne),Pe=x(X),y(ie.$$.fragment,X),je=x(X),fe=$(X,"P",{"data-svelte-h":!0}),O(fe)!=="svelte-12dgdvn"&&(fe.textContent=Ve),Re=x(X),y(oe.$$.fragment,X),X.forEach(i),this.h()},h(){_(k,"id","software-renderers"),_(k,"class","svelte-tei0r3"),_(g,"class","flow"),_(U,"id","image-stabilization"),_(U,"class","svelte-tei0r3"),_(T,"class","flow"),_(Y,"id","seam-carving"),_(Y,"class","svelte-tei0r3"),_(ae,"href",vt),_(ae,"target",wt),_(V,"class","flow"),_(K,"id","pixel-sorting"),_(K,"class","svelte-tei0r3"),_(q,"class","flow")},m(s,I){d(s,e,I),d(s,r,I),d(s,p,I),d(s,v,I),d(s,m,I),d(s,S,I),d(s,g,I),n(g,k),n(g,b),z(H,g,null),n(g,f),n(g,w),n(g,A),z(l,g,null),d(s,h,I),d(s,a,I),d(s,M,I),d(s,T,I),n(T,U),n(T,ke),z(te,T,null),n(T,Me),n(T,le),n(T,Te),z(se,T,null),d(s,_e,I),d(s,de,I),d(s,ve,I),d(s,V,I),n(V,Y),n(V,Ee),z(re,V,null),n(V,He),n(V,W),n(W,Se),n(W,ae),n(ae,Ge),n(W,Le),n(W,ce),n(W,ye),n(V,ze),z(ne,V,null),d(s,we,I),d(s,Ce,I),d(s,xe,I),d(s,q,I),n(q,K),n(q,Pe),z(ie,q,null),n(q,je),n(q,fe),n(q,Re),z(oe,q,null),Ie=!0},p:Ke,i(s){Ie||(P(H.$$.fragment,s),P(l.$$.fragment,s),P(te.$$.fragment,s),P(se.$$.fragment,s),P(re.$$.fragment,s),P(ne.$$.fragment,s),P(ie.$$.fragment,s),P(oe.$$.fragment,s),Ie=!0)},o(s){j(H.$$.fragment,s),j(l.$$.fragment,s),j(te.$$.fragment,s),j(se.$$.fragment,s),j(re.$$.fragment,s),j(ne.$$.fragment,s),j(ie.$$.fragment,s),j(oe.$$.fragment,s),Ie=!1},d(s){s&&(i(e),i(r),i(p),i(v),i(m),i(S),i(g),i(h),i(a),i(M),i(T),i(_e),i(de),i(ve),i(V),i(we),i(Ce),i(xe),i(q)),R(H),R(l),R(te),R(se),R(re),R(ne),R(ie),R(oe)}}}const vt="https://en.wikipedia.org/wiki/Seam_carving",wt="_blank";class Et extends $e{constructor(e){super(),he(this,e,null,dt,ue,{})}}export{Et as component};