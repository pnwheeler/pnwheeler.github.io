import{s as re,I as W,f as d,a as C,g as v,h as q,c as k,d as a,G as E,j as b,i as c,u as x,l as G,m as S,v as Le,p as Ee,k as He,S as Ge,o as Se}from"../chunks/scheduler.1a83071e.js";import{S as ae,i as ne,b as P,d as R,m as A,a as F,t as D,e as V,j as Pe}from"../chunks/index.98f22588.js";import{g as Y,a as B}from"../chunks/spread.8a54911c.js";import{I as se}from"../chunks/Img.2a88dc8a.js";import{G as xe}from"../chunks/Gif.287224e3.js";/* empty css                                                            *//* empty css                                                   */import{R as Re}from"../chunks/RangeSlider.fd60bf84.js";function Ae(p){let e;return{c(){e=G("Rasterized teapot")},l(s){e=S(s,"Rasterized teapot")},m(s,r){c(s,e,r)},d(s){s&&a(e)}}}function Fe(p){let e;return{c(){e=G("Ray traced teapot")},l(s){e=S(s,"Ray traced teapot")},m(s,r){c(s,e,r)},d(s){s&&a(e)}}}function De(p){let e,s,r,m,i,w,u,j="Utah teapots exported by my versions of the different pipelines.",_;const y=[p[0]];let M={$$slots:{caption:[Ae]},$$scope:{ctx:p}};for(let f=0;f<y.length;f+=1)M=W(M,y[f]);r=new se({props:M});const $=[p[1]];let z={$$slots:{caption:[Fe]},$$scope:{ctx:p}};for(let f=0;f<$.length;f+=1)z=W(z,$[f]);return i=new se({props:z}),{c(){e=d("figure"),s=d("div"),P(r.$$.fragment),m=C(),P(i.$$.fragment),w=C(),u=d("figcaption"),u.textContent=j,this.h()},l(f){e=v(f,"FIGURE",{class:!0,role:!0});var h=q(e);s=v(h,"DIV",{class:!0});var H=q(s);R(r.$$.fragment,H),m=k(H),R(i.$$.fragment,H),H.forEach(a),w=k(h),u=v(h,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),E(u)!=="svelte-ggxsoh"&&(u.textContent=j),h.forEach(a),this.h()},h(){b(s,"class","svelte-x2wci8"),b(u,"class","caption"),b(e,"class","max-w"),b(e,"role","group")},m(f,h){c(f,e,h),x(e,s),A(r,s,null),x(s,m),A(i,s,null),x(e,w),x(e,u),_=!0},p(f,[h]){const H=h&1?Y(y,[B(f[0])]):{};h&4&&(H.$$scope={dirty:h,ctx:f}),r.$set(H);const L=h&2?Y($,[B(f[1])]):{};h&4&&(L.$$scope={dirty:h,ctx:f}),i.$set(L)},i(f){_||(F(r.$$.fragment,f),F(i.$$.fragment,f),_=!0)},o(f){D(r.$$.fragment,f),D(i.$$.fragment,f),_=!1},d(f){f&&a(e),V(r),V(i)}}}function Ve(p){return[{src:"/media/projects/MiscGraphics/static_renders/teapot_raster.avif",alt:"rasterized teapot",radius_type:"combo left",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}},{src:"/media/projects/MiscGraphics/static_renders/teapot_ray.avif",alt:"ray traced teapot",radius_type:"combo right",to:{x:0,y:5,s:1.2},from:{x:0,y:5,s:1.15}}]}class qe extends ae{constructor(e){super(),ne(this,e,Ve,De,re,{})}}function Be(p){let e,s,r,m,i,w,u,j,_,y="Wikimedia Commons";return{c(){e=G(`Visualizing the seams: red marked for removal at each step.\r
				`),s=d("span"),r=d("a"),m=G("Photo"),i=G(` by\r
				DAVID ILIFF, `),w=d("a"),u=G("CC BY 2.5"),j=G(`, via\r
				`),_=d("em"),_.textContent=y,this.h()},l(M){e=S(M,`Visualizing the seams: red marked for removal at each step.\r
				`),s=v(M,"SPAN",{class:!0});var $=q(s);r=v($,"A",{href:!0,target:!0});var z=q(r);m=S(z,"Photo"),z.forEach(a),i=S($,` by\r
				DAVID ILIFF, `),w=v($,"A",{href:!0,target:!0});var f=q(w);u=S(f,"CC BY 2.5"),f.forEach(a),j=S($,`, via\r
				`),_=v($,"EM",{"data-svelte-h":!0}),E(_)!=="svelte-18tcd74"&&(_.textContent=y),$.forEach(a),this.h()},h(){b(r,"href",Oe),b(r,"target",je),b(w,"href","https://creativecommons.org/licenses/by/2.5"),b(w,"target",je),b(s,"class","source svelte-1omhu71")},m(M,$){c(M,e,$),c(M,s,$),x(s,r),x(r,m),x(s,i),x(s,w),x(w,u),x(s,j),x(s,_)},p:Le,d(M){M&&(a(e),a(s))}}}function Ne(p){let e,s,r;return s=new xe({props:{src:"/media/projects/MiscGraphics/seam_carve/panorama.mp4",cap_center:!1,$$slots:{caption:[Be]},$$scope:{ctx:p}}}),{c(){e=d("div"),P(s.$$.fragment),this.h()},l(m){e=v(m,"DIV",{class:!0});var i=q(e);R(s.$$.fragment,i),i.forEach(a),this.h()},h(){b(e,"class","max-w svelte-1omhu71")},m(m,i){c(m,e,i),A(s,e,null),r=!0},p(m,[i]){const w={};i&8&&(w.$$scope={dirty:i,ctx:m}),s.$set(w)},i(m){r||(F(s.$$.fragment,m),r=!0)},o(m){D(s.$$.fragment,m),r=!1},d(m){m&&a(e),V(s)}}}const Oe="https://commons.wikimedia.org/wiki/File:Melbourne_Docklands_-_Yarras_Edge_-_marina_panorama.jpg",je="_blank";function Ue(p){return[]}class We extends ae{constructor(e){super(),ne(this,e,Ue,Ne,re,{})}}function Ye(p){let e;return{c(){e=G("original")},l(s){e=S(s,"original")},m(s,r){c(s,e,r)},d(s){s&&a(e)}}}function Je(p){let e;return{c(){e=G("horizontal sort")},l(s){e=S(s,"horizontal sort")},m(s,r){c(s,e,r)},d(s){s&&a(e)}}}function Ke(p){let e;return{c(){e=G("vertical sort")},l(s){e=S(s,"vertical sort")},m(s,r){c(s,e,r)},d(s){s&&a(e)}}}function Qe(p){let e,s,r,m,i,w,u,j,_,y="Pixel sorting on a picture I took of some moss—cool way to reinterpret depth.",M;const $=[p[0],p[1]];let z={$$slots:{caption:[Ye]},$$scope:{ctx:p}};for(let o=0;o<$.length;o+=1)z=W(z,$[o]);r=new se({props:z});const f=[p[0],p[2]];let h={$$slots:{caption:[Je]},$$scope:{ctx:p}};for(let o=0;o<f.length;o+=1)h=W(h,f[o]);i=new se({props:h});const H=[p[0],p[3]];let L={$$slots:{caption:[Ke]},$$scope:{ctx:p}};for(let o=0;o<H.length;o+=1)L=W(L,H[o]);return u=new se({props:L}),{c(){e=d("figure"),s=d("div"),P(r.$$.fragment),m=C(),P(i.$$.fragment),w=C(),P(u.$$.fragment),j=C(),_=d("figcaption"),_.textContent=y,this.h()},l(o){e=v(o,"FIGURE",{class:!0,role:!0});var g=q(e);s=v(g,"DIV",{class:!0});var n=q(s);R(r.$$.fragment,n),m=k(n),R(i.$$.fragment,n),w=k(n),R(u.$$.fragment,n),n.forEach(a),j=k(g),_=v(g,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),E(_)!=="svelte-1qjs6a5"&&(_.textContent=y),g.forEach(a),this.h()},h(){b(s,"class","radius"),b(_,"class","caption"),b(e,"class","max-w  svelte-smqqrp"),b(e,"role","group")},m(o,g){c(o,e,g),x(e,s),A(r,s,null),x(s,m),A(i,s,null),x(s,w),A(u,s,null),x(e,j),x(e,_),M=!0},p(o,[g]){const n=g&3?Y($,[g&1&&B(o[0]),g&2&&B(o[1])]):{};g&16&&(n.$$scope={dirty:g,ctx:o}),r.$set(n);const I=g&5?Y(f,[g&1&&B(o[0]),g&4&&B(o[2])]):{};g&16&&(I.$$scope={dirty:g,ctx:o}),i.$set(I);const T=g&9?Y(H,[g&1&&B(o[0]),g&8&&B(o[3])]):{};g&16&&(T.$$scope={dirty:g,ctx:o}),u.$set(T)},i(o){M||(F(r.$$.fragment,o),F(i.$$.fragment,o),F(u.$$.fragment,o),M=!0)},o(o){D(r.$$.fragment,o),D(i.$$.fragment,o),D(u.$$.fragment,o),M=!1},d(o){o&&a(e),V(r),V(i),V(u)}}}function Xe(p){return[{from:{x:0,y:0,s:2.4},to:{x:0,y:0,s:2.5}},{src:"/media/projects/MiscGraphics/pixel_sort/moss.avif",alt:"Original picture of moss",radius_type:"combo left"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_h.avif",alt:"After horizontal pixel sort",radius_type:"default"},{src:"/media/projects/MiscGraphics/pixel_sort/moss_v.avif",alt:"After vertical pixel sort",radius_type:"combo right"}]}class Ze extends ae{constructor(e){super(),ne(this,e,Xe,Qe,re,{})}}function et(p){let e,s,r,m,i,w,u,j,_,y,M='<span id="before">Before</span> and <span id="after" class="svelte-ovjz41">after</span> running the script',$;const z=[p[1],{src:ze}];let f={};for(let n=0;n<z.length;n+=1)f=W(f,z[n]);r=new xe({props:f});const h=[p[1],{src:Te},{outline_off:!0}];let H={};for(let n=0;n<h.length;n+=1)H=W(H,h[n]);i=new xe({props:H});const L=[p[2]];function o(n){p[3](n)}let g={};for(let n=0;n<L.length;n+=1)g=W(g,L[n]);return p[0]!==void 0&&(g.value=p[0]),u=new Re({props:g}),Ee.push(()=>Pe(u,"value",o)),{c(){e=d("figure"),s=d("div"),P(r.$$.fragment),m=C(),P(i.$$.fragment),w=C(),P(u.$$.fragment),_=C(),y=d("figcaption"),y.innerHTML=M,this.h()},l(n){e=v(n,"FIGURE",{class:!0,role:!0,style:!0});var I=q(e);s=v(I,"DIV",{class:!0});var T=q(s);R(r.$$.fragment,T),m=k(T),R(i.$$.fragment,T),T.forEach(a),w=k(I),R(u.$$.fragment,I),_=k(I),y=v(I,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),E(y)!=="svelte-racunt"&&(y.innerHTML=M),I.forEach(a),this.h()},h(){b(s,"class","before-after svelte-ovjz41"),b(y,"class","caption svelte-ovjz41"),b(e,"class","demo max-w svelte-ovjz41"),b(e,"role","group"),He(e,"--percent",p[0]+"%")},m(n,I){c(n,e,I),x(e,s),A(r,s,null),x(s,m),A(i,s,null),x(e,w),A(u,e,null),x(e,_),x(e,y),$=!0},p(n,[I]){const T=I&2?Y(z,[I&2&&B(n[1]),I&0&&{src:ze}]):{};r.$set(T);const ie=I&2?Y(h,[I&2&&B(n[1]),I&0&&{src:Te},h[2]]):{};i.$set(ie);const J=I&4?Y(L,[B(n[2])]):{};!j&&I&1&&(j=!0,J.value=n[0],Ge(()=>j=!1)),u.$set(J),(!$||I&1)&&He(e,"--percent",n[0]+"%")},i(n){$||(F(r.$$.fragment,n),F(i.$$.fragment,n),F(u.$$.fragment,n),$=!0)},o(n){D(r.$$.fragment,n),D(i.$$.fragment,n),D(u.$$.fragment,n),$=!1},d(n){n&&a(e),V(r),V(i),V(u)}}}const ze="/media/projects/ImageStabilzation/church_after.mp4",Te="/media/projects/ImageStabilzation/church_before.mp4";function tt(p,e,s){const r={controls:!1,pad:.5,background:"var(--grey-0)",inset_shadow:!0},m={thumbColor:"var(--slate-blue-dim)",trackPost:"#494949"};let i=50;function w(u){i=u,s(0,i)}return[i,r,m,w]}class st extends ae{constructor(e){super(),ne(this,e,tt,et,re,{})}}function rt(p){let e,s="<span>Misc Graphics</span>",r,m,i=`A couple of graphics related projects I wasn't sure how to organize but wanted to save. (Also, an excuse\r
	to add more pictures/demos)`,w,u,j,_,y='<span class="svelte-1wupd21">Software renderers</span>',M,$,z='A ray tracer and rasterizer made for an <em>Intro to Graphics</em> course. They share a parser for reading <em>static</em> <code data-type="ext">.NFF</code> scenes, exporting to <code data-type="ext">ppm</code>, and reuse some logic for matrix ops/geometry processing. Want to try making something real-time.',f,h,H,L,o,g,n='<span class="svelte-1wupd21">Image stabilizer</span>',I,T,ie=`I wrote this script to try automating the process of aligning pictures I took without a tripod. The idea was to go through
	the sequence and, with respect to a set of feature coordinates (identified using <em>ORB descriptors</em> and a
	<em>BF matcher</em>), apply transforms to minimize the distance between them.`,J,K,oe,le,ce,O,Ie='<span class="svelte-1wupd21">Seam carving</span>',pe,N,de,Q,ve,we,te,Ce="Intro to Graphics",be,fe,X,me,ue,ge,U,ke='<span class="svelte-1wupd21">Pixel sort</span>',_e,Z,Me=`A cli program I made to play around with an effect that sorts pixel colors along segmented intervals. I\r
	added a couple of parameters to modify threshold behavior and change the sort direction.`,$e,ee,he;return h=new qe({}),K=new st({}),X=new We({}),ee=new Ze({}),{c(){e=d("h1"),e.innerHTML=s,r=C(),m=d("p"),m.textContent=i,w=C(),u=d("hr"),j=C(),_=d("h2"),_.innerHTML=y,M=C(),$=d("p"),$.innerHTML=z,f=C(),P(h.$$.fragment),H=C(),L=d("hr"),o=C(),g=d("h2"),g.innerHTML=n,I=C(),T=d("p"),T.innerHTML=ie,J=C(),P(K.$$.fragment),oe=C(),le=d("hr"),ce=C(),O=d("h2"),O.innerHTML=Ie,pe=C(),N=d("p"),de=G("My implementation of the content-aware "),Q=d("a"),ve=G("seam carving"),we=G(` algorithm (also made for the\r
	`),te=d("em"),te.textContent=Ce,be=G(` course). I preprocessed the images with a LoG filter and used a relative luminance function as\r
	the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),fe=C(),P(X.$$.fragment),me=C(),ue=d("hr"),ge=C(),U=d("h2"),U.innerHTML=ke,_e=C(),Z=d("p"),Z.textContent=Me,$e=C(),P(ee.$$.fragment),this.h()},l(t){e=v(t,"H1",{"data-svelte-h":!0}),E(e)!=="svelte-2kftm8"&&(e.innerHTML=s),r=k(t),m=v(t,"P",{"data-svelte-h":!0}),E(m)!=="svelte-2no871"&&(m.textContent=i),w=k(t),u=v(t,"HR",{}),j=k(t),_=v(t,"H2",{id:!0,class:!0,"data-svelte-h":!0}),E(_)!=="svelte-v95j1u"&&(_.innerHTML=y),M=k(t),$=v(t,"P",{"data-svelte-h":!0}),E($)!=="svelte-1h8yp6o"&&($.innerHTML=z),f=k(t),R(h.$$.fragment,t),H=k(t),L=v(t,"HR",{}),o=k(t),g=v(t,"H2",{id:!0,class:!0,"data-svelte-h":!0}),E(g)!=="svelte-1bdj4jm"&&(g.innerHTML=n),I=k(t),T=v(t,"P",{"data-svelte-h":!0}),E(T)!=="svelte-i6jk07"&&(T.innerHTML=ie),J=k(t),R(K.$$.fragment,t),oe=k(t),le=v(t,"HR",{}),ce=k(t),O=v(t,"H2",{id:!0,class:!0,"data-svelte-h":!0}),E(O)!=="svelte-cddpjq"&&(O.innerHTML=Ie),pe=k(t),N=v(t,"P",{});var l=q(N);de=S(l,"My implementation of the content-aware "),Q=v(l,"A",{href:!0,target:!0});var ye=q(Q);ve=S(ye,"seam carving"),ye.forEach(a),we=S(l,` algorithm (also made for the\r
	`),te=v(l,"EM",{"data-svelte-h":!0}),E(te)!=="svelte-15k3n4a"&&(te.textContent=Ce),be=S(l,` course). I preprocessed the images with a LoG filter and used a relative luminance function as\r
	the heuristic for pixel energy. Went back later and added a masking tool for better control over the output.`),l.forEach(a),fe=k(t),R(X.$$.fragment,t),me=k(t),ue=v(t,"HR",{}),ge=k(t),U=v(t,"H2",{id:!0,class:!0,"data-svelte-h":!0}),E(U)!=="svelte-wsue7q"&&(U.innerHTML=ke),_e=k(t),Z=v(t,"P",{"data-svelte-h":!0}),E(Z)!=="svelte-8xfsq6"&&(Z.textContent=Me),$e=k(t),R(ee.$$.fragment,t),this.h()},h(){b(_,"id","software-renderers"),b(_,"class","svelte-1wupd21"),b(g,"id","image-stabilization"),b(g,"class","svelte-1wupd21"),b(O,"id","seam-carving"),b(O,"class","svelte-1wupd21"),b(Q,"href",at),b(Q,"target",nt),b(U,"id","pixel-sorting"),b(U,"class","svelte-1wupd21")},m(t,l){c(t,e,l),c(t,r,l),c(t,m,l),c(t,w,l),c(t,u,l),c(t,j,l),c(t,_,l),c(t,M,l),c(t,$,l),c(t,f,l),A(h,t,l),c(t,H,l),c(t,L,l),c(t,o,l),c(t,g,l),c(t,I,l),c(t,T,l),c(t,J,l),A(K,t,l),c(t,oe,l),c(t,le,l),c(t,ce,l),c(t,O,l),c(t,pe,l),c(t,N,l),x(N,de),x(N,Q),x(Q,ve),x(N,we),x(N,te),x(N,be),c(t,fe,l),A(X,t,l),c(t,me,l),c(t,ue,l),c(t,ge,l),c(t,U,l),c(t,_e,l),c(t,Z,l),c(t,$e,l),A(ee,t,l),he=!0},p:Le,i(t){he||(F(h.$$.fragment,t),F(K.$$.fragment,t),F(X.$$.fragment,t),F(ee.$$.fragment,t),he=!0)},o(t){D(h.$$.fragment,t),D(K.$$.fragment,t),D(X.$$.fragment,t),D(ee.$$.fragment,t),he=!1},d(t){t&&(a(e),a(r),a(m),a(w),a(u),a(j),a(_),a(M),a($),a(f),a(H),a(L),a(o),a(g),a(I),a(T),a(J),a(oe),a(le),a(ce),a(O),a(pe),a(N),a(fe),a(me),a(ue),a(ge),a(U),a(_e),a(Z),a($e)),V(h,t),V(K,t),V(X,t),V(ee,t)}}}const at="https://en.wikipedia.org/wiki/Seam_carving",nt="_blank";function it(p){return Se(()=>{if(typeof window<"u"&&window.location.hash){const e=document.getElementById(window.location.hash.substring(1));e&&window.setTimeout(()=>e.scrollIntoView(),100)}}),[]}class _t extends ae{constructor(e){super(),ne(this,e,it,rt,re,{})}}export{_t as component};