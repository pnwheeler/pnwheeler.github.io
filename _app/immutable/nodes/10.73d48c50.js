import{s as He,K as Ie,f as l,a as c,g as r,h as G,c as d,d as t,y as v,j as C,i,u,l as k,m as y,v as Le}from"../chunks/scheduler.67356eb3.js";import{S as je,i as Pe,b as ie,d as se,m as ae,a as le,t as re,e as me}from"../chunks/index.258dbbc1.js";import{g as Te,a as Me}from"../chunks/spread.8a54911c.js";import{G as he}from"../chunks/Gif.896aad20.js";function Ee(_){let n;return{c(){n=k("Sliding the trim range")},l(s){n=y(s,"Sliding the trim range")},m(s,p){i(s,n,p)},d(s){s&&t(n)}}}function Re(_){let n;return{c(){n=k("Adjusting the crop area")},l(s){n=y(s,"Adjusting the crop area")},m(s,p){i(s,n,p)},d(s){s&&t(n)}}}function Ae(_){let n,s,p,f,h,x,g,B="Demo using [TRIMCROP] to export a clip I took of Jonas sleeping.",I;const T=[_[0]];let b={$$slots:{caption:[Ee]},$$scope:{ctx:_}};for(let a=0;a<T.length;a+=1)b=Ie(b,T[a]);p=new he({props:b});const M=[_[1]];let H={$$slots:{caption:[Re]},$$scope:{ctx:_}};for(let a=0;a<M.length;a+=1)H=Ie(H,M[a]);return h=new he({props:H}),{c(){n=l("figure"),s=l("div"),ie(p.$$.fragment),f=c(),ie(h.$$.fragment),x=c(),g=l("figcaption"),g.textContent=B,this.h()},l(a){n=r(a,"FIGURE",{class:!0,role:!0});var m=G(n);s=r(m,"DIV",{class:!0});var w=G(s);se(p.$$.fragment,w),f=d(w),se(h.$$.fragment,w),w.forEach(t),x=d(m),g=r(m,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),v(g)!=="svelte-1f3mw2n"&&(g.textContent=B),m.forEach(t),this.h()},h(){C(s,"class","gifs svelte-1tteg9g"),C(g,"class","caption"),C(n,"class","max-w svelte-1tteg9g"),C(n,"role","group")},m(a,m){i(a,n,m),u(n,s),ae(p,s,null),u(s,f),ae(h,s,null),u(n,x),u(n,g),I=!0},p(a,[m]){const w=m&1?Te(T,[Me(a[0])]):{};m&4&&(w.$$scope={dirty:m,ctx:a}),p.$set(w);const E=m&2?Te(M,[Me(a[1])]):{};m&4&&(E.$$scope={dirty:m,ctx:a}),h.$set(E)},i(a){I||(le(p.$$.fragment,a),le(h.$$.fragment,a),I=!0)},o(a){re(p.$$.fragment,a),re(h.$$.fragment,a),I=!1},d(a){a&&t(n),me(p),me(h)}}}function Oe(_){return[{src:"/media/projects/TrimCrop/trim.mp4",radius_type:"combo left",dim:30,controlsBg:"#0008"},{src:"/media/projects/TrimCrop/crop.mp4",radius_type:"combo right",dim:30,controlsBg:"#0008"}]}class qe extends je{constructor(n){super(),Pe(this,n,Oe,Ae,He,{})}}function De(_){let n,s,p="Jojo's Bizarre Dream";return{c(){n=k("Output from demo: "),s=l("em"),s.textContent=p},l(f){n=y(f,"Output from demo: "),s=r(f,"EM",{"data-svelte-h":!0}),v(s)!=="svelte-114rb6o"&&(s.textContent=p)},m(f,h){i(f,n,h),i(f,s,h)},p:Le,d(f){f&&(t(n),t(s))}}}function Qe(_){let n,s="<span>TRIMCROP</span>",p,f,h,x,g,B="better, free",I,T,b,M,H,a,m,w="How it works",E,R,ge=`As the <em class="txt-glow">very_creative</em> name might imply, I made it to do two things: trim and
	crop—since it isn&#39;t responsible for the actual transcoding, the app works more like a proxy than anything else.`,J,A,ve=`On save, it invokes <code data-type="ext">QProcess()</code> and makes a call to <code data-type="ext">ffmpeg</code>,
	passing values configured on the front-end to corresponding <code data-before="-">ss</code> and <code data-before="-">vf</code> command line
	options.`,V,K,N,O,_e="Utility tools",W,q,$e=`Most of the functionality comes from custom timeline range and crop components I made with
	Qt Quick, QML&#39;s UI module. They’re bound to a slightly modified version of QML&#39;s <code>MediaPlayer</code> element which serves as the primary display area.`,X,D,xe=`The edges of the area selector are individually adjustable and the region can be moved around, but it doesn’t have
	aspect ratio locking, resolution targeting, or corner resizing—I think that’d require a different, <em>cleaner</em> approach altogether.`,Y,Z,ee,Q,be=`In a lot of ways it’s overly complicated and underwhelming, but that hasn&#39;t stopped <em>me</em> from using it to make
	a bunch of <a href="/projects/gif-scrubber">&#39;<em>gifs</em>&#39; for my website</a>!`,te,j,P,ne,$,pe,S,Ce="_now_apparent_",fe,U,we=".exe",ce,z,de,ue,oe;return b=new qe({}),P=new he({props:{src:"/media/projects/TrimCrop/jojo_dream.mp4",$$slots:{caption:[De]},$$scope:{ctx:_}}}),{c(){n=l("h1"),n.innerHTML=s,p=c(),f=l("p"),h=k(`A Qt app I made to export video clips on my PC when opening a full-blown editor feels like extreme overkill. There's a ton of\r
	other (`),x=l("a"),g=l("em"),g.textContent=B,I=k(") software for doing something similar, but I'd been wanting to learn about desktop development and wanted to give it a shot."),T=c(),ie(b.$$.fragment),M=c(),H=l("hr"),a=c(),m=l("h3"),m.textContent=w,E=c(),R=l("p"),R.innerHTML=ge,J=c(),A=l("p"),A.innerHTML=ve,V=c(),K=l("hr"),N=c(),O=l("h3"),O.textContent=_e,W=c(),q=l("p"),q.innerHTML=$e,X=c(),D=l("p"),D.innerHTML=xe,Y=c(),Z=l("hr"),ee=c(),Q=l("p"),Q.innerHTML=be,te=c(),j=l("div"),ie(P.$$.fragment),ne=c(),$=l("p"),pe=k(`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to\r
	completely overhaul the UI and rework a few of the `),S=l("em"),S.textContent=Ce,fe=k(" limitations and jank. I don't suggest using it, but the source code and "),U=l("code"),U.textContent=we,ce=k(" are on "),z=l("a"),de=k("github"),ue=k("."),this.h()},l(e){n=r(e,"H1",{"data-svelte-h":!0}),v(n)!=="svelte-wcrgqd"&&(n.innerHTML=s),p=d(e),f=r(e,"P",{});var o=G(f);h=y(o,`A Qt app I made to export video clips on my PC when opening a full-blown editor feels like extreme overkill. There's a ton of\r
	other (`),x=r(o,"A",{href:!0,target:!0});var F=G(x);g=r(F,"EM",{"data-svelte-h":!0}),v(g)!=="svelte-1y5qteu"&&(g.textContent=B),F.forEach(t),I=y(o,") software for doing something similar, but I'd been wanting to learn about desktop development and wanted to give it a shot."),o.forEach(t),T=d(e),se(b.$$.fragment,e),M=d(e),H=r(e,"HR",{}),a=d(e),m=r(e,"H3",{"data-svelte-h":!0}),v(m)!=="svelte-1nvhcxh"&&(m.textContent=w),E=d(e),R=r(e,"P",{"data-svelte-h":!0}),v(R)!=="svelte-xz4bj8"&&(R.innerHTML=ge),J=d(e),A=r(e,"P",{"data-svelte-h":!0}),v(A)!=="svelte-o55af5"&&(A.innerHTML=ve),V=d(e),K=r(e,"HR",{}),N=d(e),O=r(e,"H3",{"data-svelte-h":!0}),v(O)!=="svelte-bv5x07"&&(O.textContent=_e),W=d(e),q=r(e,"P",{"data-svelte-h":!0}),v(q)!=="svelte-ksbo7k"&&(q.innerHTML=$e),X=d(e),D=r(e,"P",{"data-svelte-h":!0}),v(D)!=="svelte-1d2eh50"&&(D.innerHTML=xe),Y=d(e),Z=r(e,"HR",{}),ee=d(e),Q=r(e,"P",{"data-svelte-h":!0}),v(Q)!=="svelte-q8q6kj"&&(Q.innerHTML=be),te=d(e),j=r(e,"DIV",{id:!0,class:!0});var ke=G(j);se(P.$$.fragment,ke),ke.forEach(t),ne=d(e),$=r(e,"P",{});var L=G($);pe=y(L,`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to\r
	completely overhaul the UI and rework a few of the `),S=r(L,"EM",{"data-svelte-h":!0}),v(S)!=="svelte-e5mivs"&&(S.textContent=Ce),fe=y(L," limitations and jank. I don't suggest using it, but the source code and "),U=r(L,"CODE",{"data-type":!0,"data-svelte-h":!0}),v(U)!=="svelte-2oo2q3"&&(U.textContent=we),ce=y(L," are on "),z=r(L,"A",{href:!0,target:!0});var ye=G(z);de=y(ye,"github"),ye.forEach(t),ue=y(L,"."),L.forEach(t),this.h()},h(){C(x,"href",ze),C(x,"target","_blank"),C(j,"id","jojo"),C(j,"class","max-w svelte-1452wzi"),C(U,"data-type","ext"),C(z,"href",Ue),C(z,"target","_blank")},m(e,o){i(e,n,o),i(e,p,o),i(e,f,o),u(f,h),u(f,x),u(x,g),u(f,I),i(e,T,o),ae(b,e,o),i(e,M,o),i(e,H,o),i(e,a,o),i(e,m,o),i(e,E,o),i(e,R,o),i(e,J,o),i(e,A,o),i(e,V,o),i(e,K,o),i(e,N,o),i(e,O,o),i(e,W,o),i(e,q,o),i(e,X,o),i(e,D,o),i(e,Y,o),i(e,Z,o),i(e,ee,o),i(e,Q,o),i(e,te,o),i(e,j,o),ae(P,j,null),i(e,ne,o),i(e,$,o),u($,pe),u($,S),u($,fe),u($,U),u($,ce),u($,z),u(z,de),u($,ue),oe=!0},p(e,[o]){const F={};o&1&&(F.$$scope={dirty:o,ctx:e}),P.$set(F)},i(e){oe||(le(b.$$.fragment,e),le(P.$$.fragment,e),oe=!0)},o(e){re(b.$$.fragment,e),re(P.$$.fragment,e),oe=!1},d(e){e&&(t(n),t(p),t(f),t(T),t(M),t(H),t(a),t(m),t(E),t(R),t(J),t(A),t(V),t(K),t(N),t(O),t(W),t(q),t(X),t(D),t(Y),t(Z),t(ee),t(Q),t(te),t(j),t(ne),t($)),me(b,e),me(P)}}}const Ue="https://github.com/pnwheeler/TRIMCROP?tab=readme-ov-file",ze="https://github.com/mifi/lossless-cut";class Je extends je{constructor(n){super(),Pe(this,n,null,Qe,He,{})}}export{Je as component};
