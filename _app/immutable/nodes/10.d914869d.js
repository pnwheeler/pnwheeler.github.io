import{s as xe,K as ve,f as a,a as c,g as m,h as q,c as u,d as n,G as _,j as I,i as o,u as b,l as O,m as B,v as we}from"../chunks/scheduler.8d84c197.js";import{S as Ce,i as be,b as Z,d as ee,m as te,a as ne,t as ie,e as oe}from"../chunks/index.5e028736.js";import{g as _e,a as $e}from"../chunks/spread.8a54911c.js";import{G as me}from"../chunks/Gif.cb2d118f.js";function ye(g){let t;return{c(){t=O("Sliding the trim range")},l(l){t=B(l,"Sliding the trim range")},m(l,s){o(l,t,s)},d(l){l&&n(t)}}}function Ie(g){let t;return{c(){t=O("Adjusting the crop area")},l(l){t=B(l,"Adjusting the crop area")},m(l,s){o(l,t,s)},d(l){l&&n(t)}}}function Te(g){let t,l,s,p,h,T,d,P="Demo showing the features used on a video I took of Jonas sleeping.",w;const k=[g[0]];let $={$$slots:{caption:[ye]},$$scope:{ctx:g}};for(let r=0;r<k.length;r+=1)$=ve($,k[r]);s=new me({props:$});const U=[g[1]];let H={$$slots:{caption:[Ie]},$$scope:{ctx:g}};for(let r=0;r<U.length;r+=1)H=ve(H,U[r]);return h=new me({props:H}),{c(){t=a("figure"),l=a("div"),Z(s.$$.fragment),p=c(),Z(h.$$.fragment),T=c(),d=a("figcaption"),d.textContent=P,this.h()},l(r){t=m(r,"FIGURE",{class:!0,role:!0});var f=q(t);l=m(f,"DIV",{class:!0});var v=q(l);ee(s.$$.fragment,v),p=u(v),ee(h.$$.fragment,v),v.forEach(n),T=u(f),d=m(f,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),_(d)!=="svelte-pr1d74"&&(d.textContent=P),f.forEach(n),this.h()},h(){I(l,"class","gifs svelte-1tteg9g"),I(d,"class","caption"),I(t,"class","max-w svelte-1tteg9g"),I(t,"role","group")},m(r,f){o(r,t,f),b(t,l),te(s,l,null),b(l,p),te(h,l,null),b(t,T),b(t,d),w=!0},p(r,[f]){const v=f&1?_e(k,[$e(r[0])]):{};f&4&&(v.$$scope={dirty:f,ctx:r}),s.$set(v);const x=f&2?_e(U,[$e(r[1])]):{};f&4&&(x.$$scope={dirty:f,ctx:r}),h.$set(x)},i(r){w||(ne(s.$$.fragment,r),ne(h.$$.fragment,r),w=!0)},o(r){ie(s.$$.fragment,r),ie(h.$$.fragment,r),w=!1},d(r){r&&n(t),oe(s),oe(h)}}}function ke(g){return[{src:"/media/projects/TrimCrop/trim.mp4",radius_type:"combo left",dim:30,controlsBg:"#0008"},{src:"/media/projects/TrimCrop/crop.mp4",radius_type:"combo right",dim:30,controlsBg:"#0008"}]}class He extends Ce{constructor(t){super(),be(this,t,ke,Te,xe,{})}}function Me(g){let t,l,s="Jojo's Bizarre Dream";return{c(){t=O("Bonus from demo: "),l=a("em"),l.textContent=s},l(p){t=B(p,"Bonus from demo: "),l=m(p,"EM",{"data-svelte-h":!0}),_(l)!=="svelte-114rb6o"&&(l.textContent=s)},m(p,h){o(p,t,h),o(p,l,h)},p:we,d(p){p&&(n(t),n(l))}}}function je(g){let t,l="<span>TRIMCROP</span>",s,p,h=`A Windows app I made to export basic video edits on my PC without needing to open a full-blown editor. There are tons
	of other (<em>better</em>) tools, but I&#39;d been wanting to learn about desktop development for a while and decided to
	give it a shot.`,T,d,P,w,k,$,U="Overview",H,r,f=`As the <em>really creative</em> name might imply, it does two things: trim and crop—since the app isn’t responsible
	the actual transcoding, it works more like a proxy interface than anything else.`,v,x,pe=`On save, it invokes <code data-type="ext">QProcess()</code> to call <code data-type="ext">ffmpeg</code>, passing values configured by the widgets on the front-end as
	arguments to their corresponding command options.`,F,Q,S,L,fe="GUI",V,E,ce=`The timeline slider and crop tools are custom components made with Qt Quick, the UI module for QML. They’re connected\r
	to a slightly modified version of the MediaPlayer element which, together, provides the bulk of the functionality.`,z,R,ue=`The edges of the area selector are individually adjustable and the region can be moved around, but it doesn’t have
	aspect ratio locking, resolution targeting, or corner resizing—I think that’d require a different, <em>cleaner</em> approach altogether.`,J,K,N,D,de=`In a lot of ways it’s overly complicated and underwhelming, but that hasn&#39;t stopped <em>me</em> from using it to make all the
	<a href="/projects/gif-scrubber">&#39;gifs&#39; for this website</a>!`,W,M,j,X,C,le,A,he=".exe",re,G,se,ae,Y;return d=new He({}),j=new me({props:{src:"/media/projects/TrimCrop/jojo_dream.mp4",$$slots:{caption:[Me]},$$scope:{ctx:g}}}),{c(){t=a("h1"),t.innerHTML=l,s=c(),p=a("p"),p.innerHTML=h,T=c(),Z(d.$$.fragment),P=c(),w=a("hr"),k=c(),$=a("h3"),$.textContent=U,H=c(),r=a("p"),r.innerHTML=f,v=c(),x=a("p"),x.innerHTML=pe,F=c(),Q=a("hr"),S=c(),L=a("h3"),L.textContent=fe,V=c(),E=a("p"),E.textContent=ce,z=c(),R=a("p"),R.innerHTML=ue,J=c(),K=a("hr"),N=c(),D=a("p"),D.innerHTML=de,W=c(),M=a("div"),Z(j.$$.fragment),X=c(),C=a("p"),le=O(`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to completely\r
	overhaul the UI and add more settings to improve the overall usability. In the meantime, I made a bad icon and put the `),A=a("code"),A.textContent=he,re=O(`\r
	on my `),G=a("a"),se=O("github"),ae=O(". 100%Virus Free!"),this.h()},l(e){t=m(e,"H1",{"data-svelte-h":!0}),_(t)!=="svelte-wcrgqd"&&(t.innerHTML=l),s=u(e),p=m(e,"P",{"data-svelte-h":!0}),_(p)!=="svelte-zanm8e"&&(p.innerHTML=h),T=u(e),ee(d.$$.fragment,e),P=u(e),w=m(e,"HR",{}),k=u(e),$=m(e,"H3",{"data-svelte-h":!0}),_($)!=="svelte-1diyj43"&&($.textContent=U),H=u(e),r=m(e,"P",{"data-svelte-h":!0}),_(r)!=="svelte-1k382hw"&&(r.innerHTML=f),v=u(e),x=m(e,"P",{"data-svelte-h":!0}),_(x)!=="svelte-1txy72n"&&(x.innerHTML=pe),F=u(e),Q=m(e,"HR",{}),S=u(e),L=m(e,"H3",{"data-svelte-h":!0}),_(L)!=="svelte-135c93j"&&(L.textContent=fe),V=u(e),E=m(e,"P",{"data-svelte-h":!0}),_(E)!=="svelte-1ln7xf5"&&(E.textContent=ce),z=u(e),R=m(e,"P",{"data-svelte-h":!0}),_(R)!=="svelte-fq9auh"&&(R.innerHTML=ue),J=u(e),K=m(e,"HR",{}),N=u(e),D=m(e,"P",{"data-svelte-h":!0}),_(D)!=="svelte-ocfc7k"&&(D.innerHTML=de),W=u(e),M=m(e,"DIV",{id:!0,class:!0});var i=q(M);ee(j.$$.fragment,i),i.forEach(n),X=u(e),C=m(e,"P",{});var y=q(C);le=B(y,`I’ve learned a lot in the period between making this and the time of writing; in the future, I’d like to completely\r
	overhaul the UI and add more settings to improve the overall usability. In the meantime, I made a bad icon and put the `),A=m(y,"CODE",{"data-type":!0,"data-svelte-h":!0}),_(A)!=="svelte-4m11m"&&(A.textContent=he),re=B(y,`\r
	on my `),G=m(y,"A",{href:!0,target:!0});var ge=q(G);se=B(ge,"github"),ge.forEach(n),ae=B(y,". 100%Virus Free!"),y.forEach(n),this.h()},h(){I(M,"id","jojo"),I(M,"class","max-w svelte-16vu4r3"),I(A,"data-type","ext"),I(G,"href",Pe),I(G,"target","_blank")},m(e,i){o(e,t,i),o(e,s,i),o(e,p,i),o(e,T,i),te(d,e,i),o(e,P,i),o(e,w,i),o(e,k,i),o(e,$,i),o(e,H,i),o(e,r,i),o(e,v,i),o(e,x,i),o(e,F,i),o(e,Q,i),o(e,S,i),o(e,L,i),o(e,V,i),o(e,E,i),o(e,z,i),o(e,R,i),o(e,J,i),o(e,K,i),o(e,N,i),o(e,D,i),o(e,W,i),o(e,M,i),te(j,M,null),o(e,X,i),o(e,C,i),b(C,le),b(C,A),b(C,re),b(C,G),b(G,se),b(C,ae),Y=!0},p(e,[i]){const y={};i&1&&(y.$$scope={dirty:i,ctx:e}),j.$set(y)},i(e){Y||(ne(d.$$.fragment,e),ne(j.$$.fragment,e),Y=!0)},o(e){ie(d.$$.fragment,e),ie(j.$$.fragment,e),Y=!1},d(e){e&&(n(t),n(s),n(p),n(T),n(P),n(w),n(k),n($),n(H),n(r),n(v),n(x),n(F),n(Q),n(S),n(L),n(V),n(E),n(z),n(R),n(J),n(K),n(N),n(D),n(W),n(M),n(X),n(C)),oe(d,e),oe(j)}}}const Pe="https://github.com/pnwheeler/TRIMCROP?tab=readme-ov-file";class Ae extends Ce{constructor(t){super(),be(this,t,null,je,xe,{})}}export{Ae as component};
