import{s as be,K as xe,f as r,a as c,g as s,h as G,c as u,d as n,y as g,j as y,i as o,u as x,l as L,m as P,v as Ie}from"../chunks/scheduler.2560b719.js";import{S as Te,i as ye,b as ee,d as te,m as ne,a as ie,t as oe,e as ae}from"../chunks/index.5fbfc906.js";import{g as Ce,a as we}from"../chunks/spread.8a54911c.js";import{G as fe}from"../chunks/Gif.87ce2048.js";function ke(v){let t;return{c(){t=L("Sliding the trim range")},l(a){t=P(a,"Sliding the trim range")},m(a,p){o(a,t,p)},d(a){a&&n(t)}}}function He(v){let t;return{c(){t=L("Adjusting the crop area")},l(a){t=P(a,"Adjusting the crop area")},m(a,p){o(a,t,p)},d(a){a&&n(t)}}}function Me(v){let t,a,p,m,h,I,d,R="Demo using [TRIMCROP] to export a clip I took of Jonas sleeping.",T;const k=[v[0]];let C={$$slots:{caption:[ke]},$$scope:{ctx:v}};for(let l=0;l<k.length;l+=1)C=xe(C,k[l]);p=new fe({props:C});const Q=[v[1]];let H={$$slots:{caption:[He]},$$scope:{ctx:v}};for(let l=0;l<Q.length;l+=1)H=xe(H,Q[l]);return h=new fe({props:H}),{c(){t=r("figure"),a=r("div"),ee(p.$$.fragment),m=c(),ee(h.$$.fragment),I=c(),d=r("figcaption"),d.textContent=R,this.h()},l(l){t=s(l,"FIGURE",{class:!0,role:!0});var f=G(t);a=s(f,"DIV",{class:!0});var _=G(a);te(p.$$.fragment,_),m=u(_),te(h.$$.fragment,_),_.forEach(n),I=u(f),d=s(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),g(d)!=="svelte-1f3mw2n"&&(d.textContent=R),f.forEach(n),this.h()},h(){y(a,"class","gifs svelte-1tteg9g"),y(d,"class","caption"),y(t,"class","max-w svelte-1tteg9g"),y(t,"role","group")},m(l,f){o(l,t,f),x(t,a),ne(p,a,null),x(a,m),ne(h,a,null),x(t,I),x(t,d),T=!0},p(l,[f]){const _=f&1?Ce(k,[we(l[0])]):{};f&4&&(_.$$scope={dirty:f,ctx:l}),p.$set(_);const b=f&2?Ce(Q,[we(l[1])]):{};f&4&&(b.$$scope={dirty:f,ctx:l}),h.$set(b)},i(l){T||(ie(p.$$.fragment,l),ie(h.$$.fragment,l),T=!0)},o(l){oe(p.$$.fragment,l),oe(h.$$.fragment,l),T=!1},d(l){l&&n(t),ae(p),ae(h)}}}function je(v){return[{src:"/media/projects/TrimCrop/trim.mp4",radius_type:"combo left",dim:30,controlsBg:"#0008"},{src:"/media/projects/TrimCrop/crop.mp4",radius_type:"combo right",dim:30,controlsBg:"#0008"}]}class Le extends Te{constructor(t){super(),ye(this,t,je,Me,be,{})}}function Pe(v){let t,a,p="Jojo's Bizarre Dream";return{c(){t=L("Output from demo: "),a=r("em"),a.textContent=p},l(m){t=P(m,"Output from demo: "),a=s(m,"EM",{"data-svelte-h":!0}),g(a)!=="svelte-114rb6o"&&(a.textContent=p)},m(m,h){o(m,t,h),o(m,a,h)},p:Ie,d(m){m&&(n(t),n(a))}}}function Re(v){let t,a="<span>TRIMCROP</span>",p,m,h=`A Qt app I made to export video clips on my PC when opening a full-blown editor feels like extreme overkill. There&#39;s a ton of
	other (<em>better, free</em>) software for doing something similar, but I&#39;d been wanting to learn about desktop development and wanted to give it a shot.`,I,d,R,T,k,C,Q="How it works",H,l,f=`As the <em class="txt-glow">very_creative</em> name might imply, I made it to do two things: trim and
	crop—since it isn&#39;t responsible for the actual transcoding, the app works more like a proxy than anything else.`,_,b,ce=`On save, it invokes <code data-type="ext">QProcess()</code> and makes a call to <code data-type="ext">ffmpeg</code>,
	passing values configured using the interface to the corresponding <code data-before="-">ss</code> and <code data-before="-">vf</code> command
	options.`,S,B,F,E,ue="Utilities",J,O,de=`The timeline range and crop tools are components I made with
	Qt Quick, QML&#39;s UI module. They’re bound to a slightly modified version of the <code>MediaPlayer</code> element which,
	together, provides most of the functionality.`,V,D,he=`The edges of the area selector are individually adjustable and the region can be moved around, but it doesn’t have
	aspect ratio locking, resolution targeting, or corner resizing—I think that’d require a different, <em>cleaner</em> approach altogether.`,K,N,W,z,ge=`In a lot of ways it’s overly complicated and underwhelming, but that hasn&#39;t stopped <em>me</em> from using it to make
	a bunch of <a href="/projects/gif-scrubber">&#39;<em>gifs</em>&#39; for this website</a>!`,X,M,j,Y,$,le,U,ve="_now_apparent_",re,A,_e=".exe",se,q,pe,me,Z;return d=new Le({}),j=new fe({props:{src:"/media/projects/TrimCrop/jojo_dream.mp4",$$slots:{caption:[Pe]},$$scope:{ctx:v}}}),{c(){t=r("h1"),t.innerHTML=a,p=c(),m=r("p"),m.innerHTML=h,I=c(),ee(d.$$.fragment),R=c(),T=r("hr"),k=c(),C=r("h3"),C.textContent=Q,H=c(),l=r("p"),l.innerHTML=f,_=c(),b=r("p"),b.innerHTML=ce,S=c(),B=r("hr"),F=c(),E=r("h3"),E.textContent=ue,J=c(),O=r("p"),O.innerHTML=de,V=c(),D=r("p"),D.innerHTML=he,K=c(),N=r("hr"),W=c(),z=r("p"),z.innerHTML=ge,X=c(),M=r("div"),ee(j.$$.fragment),Y=c(),$=r("p"),le=L(`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to\r
	overhaul the UI and rework a few of the `),U=r("em"),U.textContent=ve,re=L(` limitations/general jank. I made an ugly\r
	icon and put the `),A=r("code"),A.textContent=_e,se=L(" on "),q=r("a"),pe=L("github"),me=L("."),this.h()},l(e){t=s(e,"H1",{"data-svelte-h":!0}),g(t)!=="svelte-wcrgqd"&&(t.innerHTML=a),p=u(e),m=s(e,"P",{"data-svelte-h":!0}),g(m)!=="svelte-se3xbv"&&(m.innerHTML=h),I=u(e),te(d.$$.fragment,e),R=u(e),T=s(e,"HR",{}),k=u(e),C=s(e,"H3",{"data-svelte-h":!0}),g(C)!=="svelte-1nvhcxh"&&(C.textContent=Q),H=u(e),l=s(e,"P",{"data-svelte-h":!0}),g(l)!=="svelte-xz4bj8"&&(l.innerHTML=f),_=u(e),b=s(e,"P",{"data-svelte-h":!0}),g(b)!=="svelte-1wyfr1x"&&(b.innerHTML=ce),S=u(e),B=s(e,"HR",{}),F=u(e),E=s(e,"H3",{"data-svelte-h":!0}),g(E)!=="svelte-10arzpe"&&(E.textContent=ue),J=u(e),O=s(e,"P",{"data-svelte-h":!0}),g(O)!=="svelte-myplha"&&(O.innerHTML=de),V=u(e),D=s(e,"P",{"data-svelte-h":!0}),g(D)!=="svelte-1d2eh50"&&(D.innerHTML=he),K=u(e),N=s(e,"HR",{}),W=u(e),z=s(e,"P",{"data-svelte-h":!0}),g(z)!=="svelte-1qz8cfd"&&(z.innerHTML=ge),X=u(e),M=s(e,"DIV",{id:!0,class:!0});var i=G(M);te(j.$$.fragment,i),i.forEach(n),Y=u(e),$=s(e,"P",{});var w=G($);le=P(w,`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to\r
	overhaul the UI and rework a few of the `),U=s(w,"EM",{"data-svelte-h":!0}),g(U)!=="svelte-e5mivs"&&(U.textContent=ve),re=P(w,` limitations/general jank. I made an ugly\r
	icon and put the `),A=s(w,"CODE",{"data-type":!0,"data-svelte-h":!0}),g(A)!=="svelte-2oo2q3"&&(A.textContent=_e),se=P(w," on "),q=s(w,"A",{href:!0,target:!0});var $e=G(q);pe=P($e,"github"),$e.forEach(n),me=P(w,"."),w.forEach(n),this.h()},h(){y(M,"id","jojo"),y(M,"class","max-w svelte-1452wzi"),y(A,"data-type","ext"),y(q,"href",Ee),y(q,"target","_blank")},m(e,i){o(e,t,i),o(e,p,i),o(e,m,i),o(e,I,i),ne(d,e,i),o(e,R,i),o(e,T,i),o(e,k,i),o(e,C,i),o(e,H,i),o(e,l,i),o(e,_,i),o(e,b,i),o(e,S,i),o(e,B,i),o(e,F,i),o(e,E,i),o(e,J,i),o(e,O,i),o(e,V,i),o(e,D,i),o(e,K,i),o(e,N,i),o(e,W,i),o(e,z,i),o(e,X,i),o(e,M,i),ne(j,M,null),o(e,Y,i),o(e,$,i),x($,le),x($,U),x($,re),x($,A),x($,se),x($,q),x(q,pe),x($,me),Z=!0},p(e,[i]){const w={};i&1&&(w.$$scope={dirty:i,ctx:e}),j.$set(w)},i(e){Z||(ie(d.$$.fragment,e),ie(j.$$.fragment,e),Z=!0)},o(e){oe(d.$$.fragment,e),oe(j.$$.fragment,e),Z=!1},d(e){e&&(n(t),n(p),n(m),n(I),n(R),n(T),n(k),n(C),n(H),n(l),n(_),n(b),n(S),n(B),n(F),n(E),n(J),n(O),n(V),n(D),n(K),n(N),n(W),n(z),n(X),n(M),n(Y),n($)),ae(d,e),ae(j)}}}const Ee="https://github.com/pnwheeler/TRIMCROP?tab=readme-ov-file";class qe extends Te{constructor(t){super(),ye(this,t,null,Re,be,{})}}export{qe as component};
