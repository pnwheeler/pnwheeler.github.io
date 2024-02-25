import{s as et,J as K,f as d,a as C,g as _,h as D,c as b,d as n,F as M,j as w,i as o,u as j,l as P,m as H,v as nt}from"../chunks/scheduler.897fc3d6.js";import{S as st,i as at,b as G,d as Q,m as U,a as X,t as F,e as J}from"../chunks/index.f7b4bdff.js";import{g as Z,a as tt}from"../chunks/spread.8a54911c.js";import{G as N}from"../chunks/Gif.a4ed1882.js";function ot(g){let e;return{c(){e=P("trim.mp4")},l(s){e=H(s,"trim.mp4")},m(s,p){o(s,e,p)},d(s){s&&n(e)}}}function lt(g){let e;return{c(){e=P("crop.mp4")},l(s){e=H(s,"crop.mp4")},m(s,p){o(s,e,p)},d(s){s&&n(e)}}}function it(g){let e,s,p,c,i,h,m,r="Using the tool to do a little <em>trim-crop</em> on a video I took of Jonas sleeping",f;const R=[g[0]];let y={$$slots:{caption:[ot]},$$scope:{ctx:g}};for(let a=0;a<R.length;a+=1)y=K(y,R[a]);p=new N({props:y});const v=[g[1]];let B={$$slots:{caption:[lt]},$$scope:{ctx:g}};for(let a=0;a<v.length;a+=1)B=K(B,v[a]);return i=new N({props:B}),{c(){e=d("figure"),s=d("div"),G(p.$$.fragment),c=C(),G(i.$$.fragment),h=C(),m=d("figcaption"),m.innerHTML=r,this.h()},l(a){e=_(a,"FIGURE",{class:!0,role:!0});var u=D(e);s=_(u,"DIV",{class:!0});var $=D(s);Q(p.$$.fragment,$),c=b($),Q(i.$$.fragment,$),$.forEach(n),h=b(u),m=_(u,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),M(m)!=="svelte-15efb07"&&(m.innerHTML=r),u.forEach(n),this.h()},h(){w(s,"class","gifs svelte-1t4xsau"),w(m,"class","caption"),w(e,"class","max-w svelte-1t4xsau"),w(e,"role","group")},m(a,u){o(a,e,u),j(e,s),U(p,s,null),j(s,c),U(i,s,null),j(e,h),j(e,m),f=!0},p(a,[u]){const $=u&1?Z(R,[tt(a[0])]):{};u&4&&($.$$scope={dirty:u,ctx:a}),p.$set($);const x=u&2?Z(v,[tt(a[1])]):{};u&4&&(x.$$scope={dirty:u,ctx:a}),i.$set(x)},i(a){f||(X(p.$$.fragment,a),X(i.$$.fragment,a),f=!0)},o(a){F(p.$$.fragment,a),F(i.$$.fragment,a),f=!1},d(a){a&&n(e),J(p),J(i)}}}function rt(g){return[{src:"/media/projects/TrimCrop/trim.mp4",radius_type:"default",dim:30,controlsBg:"#0006"},{src:"/media/projects/TrimCrop/crop.mp4",radius_type:"default",dim:30,controlsBg:"#0006"}]}class pt extends st{constructor(e){super(),at(this,e,rt,it,et,{})}}function mt(g){let e,s,p="Jojo's Bizarre Dream",c,i,h="gangnam style",m;return{c(){e=P("Bonus: "),s=d("em"),s.textContent=p,c=P(` (he\r
			`),i=d("a"),i.textContent=h,m=P("?)"),this.h()},l(r){e=H(r,"Bonus: "),s=_(r,"EM",{"data-svelte-h":!0}),M(s)!=="svelte-114rb6o"&&(s.textContent=p),c=H(r,` (he\r
			`),i=_(r,"A",{href:!0,target:!0,"data-svelte-h":!0}),M(i)!=="svelte-1u16ywf"&&(i.textContent=h),m=H(r,"?)"),this.h()},h(){w(i,"href","https://youtu.be/_LWpXRXl12I?si=Yi9VQ2w4XMX6gP5y&t=99"),w(i,"target","_blank")},m(r,f){o(r,e,f),o(r,s,f),o(r,c,f),o(r,i,f),o(r,m,f)},p:nt,d(r){r&&(n(e),n(s),n(c),n(i),n(m))}}}function ft(g){let e,s="TRIMCROP",p,c,i=`I made this as a way to make little clips on my PC without opening a full-blown editor or resorting to downloading
	extra software packed with features I didn&#39;t plan on using. As the <em>super</em> creative name may imply, it does two
	things: <span class="underline">trim</span> and <span class="underline">crop</span>.`,h,m,r,f,R=`It basically works as a proxy to ffmpeg, allowing me to visualize edits before exporting the tool&#39;s values to a
	preconfigured command(<em>i.e.</em> crop coordinates, timestamps are set on the interface).`,y,v,B=`I used Qt Quick (the UI module for QML) to make the region of interest selector and timeline range components and slapped\r
	them on top of a base MediaPlayer.`,a,u,$,x,W=`It&#39;s a bit convoluted and janky, but that hasn&#39;t stopped <em>me</em> from using it (like...to make most of the
	<a href="/projects/gif-scrubber">&quot;gifs&quot;</a> for my website<span class="smile">☻</span>). I&#39;d like to overhaul the UI,
	add a setting to fix the aspect ratio, and make a couple of other adjustments that now seem useful.`,q,I,T,z,k,O,L,V,S,A;return m=new pt({}),T=new N({props:{src:"/media/projects/TrimCrop/jojo_dream.mp4",$$slots:{caption:[mt]},$$scope:{ctx:g}}}),{c(){e=d("h1"),e.textContent=s,p=C(),c=d("p"),c.innerHTML=i,h=C(),G(m.$$.fragment),r=C(),f=d("p"),f.innerHTML=R,y=C(),v=d("p"),v.textContent=B,a=C(),u=d("hr"),$=C(),x=d("p"),x.innerHTML=W,q=C(),I=d("div"),G(T.$$.fragment),z=C(),k=d("p"),O=P("I made a really bad logo and put it on my "),L=d("a"),V=P("github"),S=P("."),this.h()},l(t){e=_(t,"H1",{"data-svelte-h":!0}),M(e)!=="svelte-16vwtvq"&&(e.textContent=s),p=b(t),c=_(t,"P",{"data-svelte-h":!0}),M(c)!=="svelte-1fo66lo"&&(c.innerHTML=i),h=b(t),Q(m.$$.fragment,t),r=b(t),f=_(t,"P",{"data-svelte-h":!0}),M(f)!=="svelte-yz2u04"&&(f.innerHTML=R),y=b(t),v=_(t,"P",{"data-svelte-h":!0}),M(v)!=="svelte-1ldbwxc"&&(v.textContent=B),a=b(t),u=_(t,"HR",{}),$=b(t),x=_(t,"P",{"data-svelte-h":!0}),M(x)!=="svelte-1xkaza4"&&(x.innerHTML=W),q=b(t),I=_(t,"DIV",{id:!0,class:!0});var l=D(I);Q(T.$$.fragment,l),l.forEach(n),z=b(t),k=_(t,"P",{});var E=D(k);O=H(E,"I made a really bad logo and put it on my "),L=_(E,"A",{href:!0,target:!0});var Y=D(L);V=H(Y,"github"),Y.forEach(n),S=H(E,"."),E.forEach(n),this.h()},h(){w(I,"id","jojo"),w(I,"class","max-w svelte-16vu4r3"),w(L,"href",ut),w(L,"target","_blank")},m(t,l){o(t,e,l),o(t,p,l),o(t,c,l),o(t,h,l),U(m,t,l),o(t,r,l),o(t,f,l),o(t,y,l),o(t,v,l),o(t,a,l),o(t,u,l),o(t,$,l),o(t,x,l),o(t,q,l),o(t,I,l),U(T,I,null),o(t,z,l),o(t,k,l),j(k,O),j(k,L),j(L,V),j(k,S),A=!0},p(t,[l]){const E={};l&1&&(E.$$scope={dirty:l,ctx:t}),T.$set(E)},i(t){A||(X(m.$$.fragment,t),X(T.$$.fragment,t),A=!0)},o(t){F(m.$$.fragment,t),F(T.$$.fragment,t),A=!1},d(t){t&&(n(e),n(p),n(c),n(h),n(r),n(f),n(y),n(v),n(a),n(u),n($),n(x),n(q),n(I),n(z),n(k)),J(m,t),J(T)}}}const ut="https://github.com/pnwheeler/TRIMCROP?tab=readme-ov-file";class $t extends st{constructor(e){super(),at(this,e,null,ft,et,{})}}export{$t as component};
