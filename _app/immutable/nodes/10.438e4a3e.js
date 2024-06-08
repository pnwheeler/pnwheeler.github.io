import{s as xe,K as ge,f as r,a as c,g as m,h as q,c as u,d as n,G as _,j as I,i as o,u as b,l as O,m as B,v as ye}from"../chunks/scheduler.8d84c197.js";import{S as Ce,i as be,b as Z,d as ee,m as te,a as ne,t as ie,e as oe}from"../chunks/index.5e028736.js";import{g as _e,a as $e}from"../chunks/spread.8a54911c.js";import{G as me}from"../chunks/Gif.cb2d118f.js";function we(v){let t;return{c(){t=O("Sliding the trim range")},l(l){t=B(l,"Sliding the trim range")},m(l,a){o(l,t,a)},d(l){l&&n(t)}}}function Ie(v){let t;return{c(){t=O("Adjusting the crop area")},l(l){t=B(l,"Adjusting the crop area")},m(l,a){o(l,t,a)},d(l){l&&n(t)}}}function Te(v){let t,l,a,p,h,T,d,P="Example demo using the tools on a video I took of Jonas sleeping.",y;const H=[v[0]];let $={$$slots:{caption:[we]},$$scope:{ctx:v}};for(let s=0;s<H.length;s+=1)$=ge($,H[s]);a=new me({props:$});const U=[v[1]];let j={$$slots:{caption:[Ie]},$$scope:{ctx:v}};for(let s=0;s<U.length;s+=1)j=ge(j,U[s]);return h=new me({props:j}),{c(){t=r("figure"),l=r("div"),Z(a.$$.fragment),p=c(),Z(h.$$.fragment),T=c(),d=r("figcaption"),d.textContent=P,this.h()},l(s){t=m(s,"FIGURE",{class:!0,role:!0});var f=q(t);l=m(f,"DIV",{class:!0});var g=q(l);ee(a.$$.fragment,g),p=u(g),ee(h.$$.fragment,g),g.forEach(n),T=u(f),d=m(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),_(d)!=="svelte-1sfjz9u"&&(d.textContent=P),f.forEach(n),this.h()},h(){I(l,"class","gifs svelte-1tteg9g"),I(d,"class","caption"),I(t,"class","max-w svelte-1tteg9g"),I(t,"role","group")},m(s,f){o(s,t,f),b(t,l),te(a,l,null),b(l,p),te(h,l,null),b(t,T),b(t,d),y=!0},p(s,[f]){const g=f&1?_e(H,[$e(s[0])]):{};f&4&&(g.$$scope={dirty:f,ctx:s}),a.$set(g);const x=f&2?_e(U,[$e(s[1])]):{};f&4&&(x.$$scope={dirty:f,ctx:s}),h.$set(x)},i(s){y||(ne(a.$$.fragment,s),ne(h.$$.fragment,s),y=!0)},o(s){ie(a.$$.fragment,s),ie(h.$$.fragment,s),y=!1},d(s){s&&n(t),oe(a),oe(h)}}}function He(v){return[{src:"/media/projects/TrimCrop/trim.mp4",radius_type:"combo left",dim:30,controlsBg:"#0008"},{src:"/media/projects/TrimCrop/crop.mp4",radius_type:"combo right",dim:30,controlsBg:"#0008"}]}class je extends Ce{constructor(t){super(),be(this,t,He,Te,xe,{})}}function ke(v){let t,l,a="Jojo's Bizarre Dream";return{c(){t=O("Bonus from demo: "),l=r("em"),l.textContent=a},l(p){t=B(p,"Bonus from demo: "),l=m(p,"EM",{"data-svelte-h":!0}),_(l)!=="svelte-114rb6o"&&(l.textContent=a)},m(p,h){o(p,t,h),o(p,l,h)},p:ye,d(p){p&&(n(t),n(l))}}}function Me(v){let t,l="<span>TRIMCROP</span>",a,p,h=`A Windows app I made to export basic video edits on my PC without needing to open a full-blown editor. There are tons
	of other (<em>better</em>) tools, but I&#39;d been wanting to learn about desktop development for a while and decided to
	give it a shot.`,T,d,P,y,H,$,U="Overview",j,s,f=`As the <em>very creative</em> name implies, it does two things: trim and crop—since the app isn’t responsible
	the actual transcoding, it works more like a proxy than anything else.`,g,x,pe=`On save, it invokes <code data-type="ext">QProcess()</code> to call <code data-type="ext">ffmpeg</code>, passing values configured by the widgets on the front-end as
	arguments to their corresponding command options.`,z,Q,S,L,fe="GUI",F,E,ce=`The timeline slider and crop tools are custom components made with Qt Quick, the UI module for QML. They’re connected\r
	to a slightly modified version of the MediaPlayer element which, together, provides the bulk of the functionality.`,J,R,ue=`The edges of the area selector are individually adjustable and the region can be moved around, but it doesn’t have
	aspect ratio locking, resolution targeting, or corner resizing—I think that’d require a different, <em>cleaner</em> approach altogether.`,V,K,N,A,de=`In a lot of ways it’s overly complicated and underwhelming, but that hasn&#39;t stopped <em>me</em> from using it to make all the
	<a href="/projects/gif-scrubber">&#39;gifs&#39; for this website</a>!`,W,k,M,X,C,le,D,he=".exe",se,G,ae,re,Y;return d=new je({}),M=new me({props:{src:"/media/projects/TrimCrop/jojo_dream.mp4",$$slots:{caption:[ke]},$$scope:{ctx:v}}}),{c(){t=r("h1"),t.innerHTML=l,a=c(),p=r("p"),p.innerHTML=h,T=c(),Z(d.$$.fragment),P=c(),y=r("hr"),H=c(),$=r("h3"),$.textContent=U,j=c(),s=r("p"),s.innerHTML=f,g=c(),x=r("p"),x.innerHTML=pe,z=c(),Q=r("hr"),S=c(),L=r("h3"),L.textContent=fe,F=c(),E=r("p"),E.textContent=ce,J=c(),R=r("p"),R.innerHTML=ue,V=c(),K=r("hr"),N=c(),A=r("p"),A.innerHTML=de,W=c(),k=r("div"),Z(M.$$.fragment),X=c(),C=r("p"),le=O(`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to completely\r
	overhaul the UI and add more settings to improve the overall usability. In the meantime, I made a bad icon and put the `),D=r("code"),D.textContent=he,se=O(`\r
	on my `),G=r("a"),ae=O("github"),re=O("."),this.h()},l(e){t=m(e,"H1",{"data-svelte-h":!0}),_(t)!=="svelte-wcrgqd"&&(t.innerHTML=l),a=u(e),p=m(e,"P",{"data-svelte-h":!0}),_(p)!=="svelte-zanm8e"&&(p.innerHTML=h),T=u(e),ee(d.$$.fragment,e),P=u(e),y=m(e,"HR",{}),H=u(e),$=m(e,"H3",{"data-svelte-h":!0}),_($)!=="svelte-1diyj43"&&($.textContent=U),j=u(e),s=m(e,"P",{"data-svelte-h":!0}),_(s)!=="svelte-ym7fl1"&&(s.innerHTML=f),g=u(e),x=m(e,"P",{"data-svelte-h":!0}),_(x)!=="svelte-1txy72n"&&(x.innerHTML=pe),z=u(e),Q=m(e,"HR",{}),S=u(e),L=m(e,"H3",{"data-svelte-h":!0}),_(L)!=="svelte-135c93j"&&(L.textContent=fe),F=u(e),E=m(e,"P",{"data-svelte-h":!0}),_(E)!=="svelte-1ln7xf5"&&(E.textContent=ce),J=u(e),R=m(e,"P",{"data-svelte-h":!0}),_(R)!=="svelte-fq9auh"&&(R.innerHTML=ue),V=u(e),K=m(e,"HR",{}),N=u(e),A=m(e,"P",{"data-svelte-h":!0}),_(A)!=="svelte-ocfc7k"&&(A.innerHTML=de),W=u(e),k=m(e,"DIV",{id:!0,class:!0});var i=q(k);ee(M.$$.fragment,i),i.forEach(n),X=u(e),C=m(e,"P",{});var w=q(C);le=B(w,`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to completely\r
	overhaul the UI and add more settings to improve the overall usability. In the meantime, I made a bad icon and put the `),D=m(w,"CODE",{"data-type":!0,"data-svelte-h":!0}),_(D)!=="svelte-4m11m"&&(D.textContent=he),se=B(w,`\r
	on my `),G=m(w,"A",{href:!0,target:!0});var ve=q(G);ae=B(ve,"github"),ve.forEach(n),re=B(w,"."),w.forEach(n),this.h()},h(){I(k,"id","jojo"),I(k,"class","max-w svelte-16vu4r3"),I(D,"data-type","ext"),I(G,"href",Pe),I(G,"target","_blank")},m(e,i){o(e,t,i),o(e,a,i),o(e,p,i),o(e,T,i),te(d,e,i),o(e,P,i),o(e,y,i),o(e,H,i),o(e,$,i),o(e,j,i),o(e,s,i),o(e,g,i),o(e,x,i),o(e,z,i),o(e,Q,i),o(e,S,i),o(e,L,i),o(e,F,i),o(e,E,i),o(e,J,i),o(e,R,i),o(e,V,i),o(e,K,i),o(e,N,i),o(e,A,i),o(e,W,i),o(e,k,i),te(M,k,null),o(e,X,i),o(e,C,i),b(C,le),b(C,D),b(C,se),b(C,G),b(G,ae),b(C,re),Y=!0},p(e,[i]){const w={};i&1&&(w.$$scope={dirty:i,ctx:e}),M.$set(w)},i(e){Y||(ne(d.$$.fragment,e),ne(M.$$.fragment,e),Y=!0)},o(e){ie(d.$$.fragment,e),ie(M.$$.fragment,e),Y=!1},d(e){e&&(n(t),n(a),n(p),n(T),n(P),n(y),n(H),n($),n(j),n(s),n(g),n(x),n(z),n(Q),n(S),n(L),n(F),n(E),n(J),n(R),n(V),n(K),n(N),n(A),n(W),n(k),n(X),n(C)),oe(d,e),oe(M)}}}const Pe="https://github.com/pnwheeler/TRIMCROP?tab=readme-ov-file";class De extends Ce{constructor(t){super(),be(this,t,null,Me,xe,{})}}export{De as component};