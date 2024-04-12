import{s as ne,I as te,f as u,a as b,g as c,h as R,c as w,d as n,G as j,j as k,i,u as C,l as P,m as E,v as re}from"../chunks/scheduler.1df3c48e.js";import{S as oe,i as ie,b as z,d as B,m as Q,a as F,t as J,e as S}from"../chunks/index.1225a4fa.js";import{g as se,a as ae}from"../chunks/spread.8a54911c.js";import{G as X}from"../chunks/Gif.d216437d.js";function le(d){let t;return{c(){t=P("Adjusting the trim range")},l(s){t=E(s,"Adjusting the trim range")},m(s,r){i(s,t,r)},d(s){s&&n(t)}}}function me(d){let t;return{c(){t=P("Using the crop tool")},l(s){t=E(s,"Using the crop tool")},m(s,r){i(s,t,r)},d(s){s&&n(t)}}}function pe(d){let t,s,r,l,f,I,p,H="Demo showing <em>the two things</em> on a video I took of Jonas sleeping.",g;const q=[d[0]];let T={$$slots:{caption:[le]},$$scope:{ctx:d}};for(let a=0;a<q.length;a+=1)T=te(T,q[a]);r=new X({props:T});const _=[d[1]];let A={$$slots:{caption:[me]},$$scope:{ctx:d}};for(let a=0;a<_.length;a+=1)A=te(A,_[a]);return f=new X({props:A}),{c(){t=u("figure"),s=u("div"),z(r.$$.fragment),l=b(),z(f.$$.fragment),I=b(),p=u("figcaption"),p.innerHTML=H,this.h()},l(a){t=c(a,"FIGURE",{class:!0,role:!0});var m=R(t);s=c(m,"DIV",{class:!0});var h=R(s);B(r.$$.fragment,h),l=w(h),B(f.$$.fragment,h),h.forEach(n),I=w(m),p=c(m,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),j(p)!=="svelte-qir2bq"&&(p.innerHTML=H),m.forEach(n),this.h()},h(){k(s,"class","gifs svelte-1t4xsau"),k(p,"class","caption"),k(t,"class","max-w svelte-1t4xsau"),k(t,"role","group")},m(a,m){i(a,t,m),C(t,s),Q(r,s,null),C(s,l),Q(f,s,null),C(t,I),C(t,p),g=!0},p(a,[m]){const h=m&1?se(q,[ae(a[0])]):{};m&4&&(h.$$scope={dirty:m,ctx:a}),r.$set(h);const v=m&2?se(_,[ae(a[1])]):{};m&4&&(v.$$scope={dirty:m,ctx:a}),f.$set(v)},i(a){g||(F(r.$$.fragment,a),F(f.$$.fragment,a),g=!0)},o(a){J(r.$$.fragment,a),J(f.$$.fragment,a),g=!1},d(a){a&&n(t),S(r),S(f)}}}function fe(d){return[{src:"/media/projects/TrimCrop/trim.mp4",radius_type:"default",dim:30,controlsBg:"#0006"},{src:"/media/projects/TrimCrop/crop.mp4",radius_type:"default",dim:30,controlsBg:"#0006"}]}class ue extends oe{constructor(t){super(),ie(this,t,fe,pe,ne,{})}}function ce(d){let t,s,r="Jojo's Bizarre Dream";return{c(){t=P("Output from demo: "),s=u("em"),s.textContent=r},l(l){t=E(l,"Output from demo: "),s=c(l,"EM",{"data-svelte-h":!0}),j(s)!=="svelte-114rb6o"&&(s.textContent=r)},m(l,f){i(l,t,f),i(l,s,f)},p:re,d(l){l&&(n(t),n(s))}}}function de(d){let t,s="<span>TRIMCROP</span>",r,l,f=`A Windows app I made to export little clips on my PC <em>without</em> opening a full-blown editor. As the <em>super</em> creative name might imply, it does two things: trim and crop. There are loads of other
		<em>better</em> tools that do something similar, but I&#39;d been wanting to learn about desktop development for a while and
		decided to give it a shot.`,I,p,H,g,q=`It works like a proxy, providing a canvas to vizualize/preview
	edits before asking <em>ffmpeg</em> to transcode the video, passing timestamp and crop coordinate values as arguments along
	the way.`,T,_,A=`The region of interest selector and range sliders are custom components I made with Qt Quick (the UI module for\r
	QML). After slapping them on top of a base MediaPlayer widget (and making several questionable design choices), it was\r
	pretty much finished.`,a,m,h,v,Y=`It&#39;s all a bit convoluted and janky, but that hasn&#39;t stopped <em>me</em> from using it (like...to make most of the
	<a href="/projects/gif-scrubber">&quot;gifs&quot;</a> for my website). When I have time, I&#39;d like to overhaul the UI, add a setting
	to lock aspect ratio, and make some other changes to improve overall usability.`,G,y,M,O,$,V,D,Z=".exe",W,L,N,K,U;return p=new ue({}),M=new X({props:{src:"/media/projects/TrimCrop/jojo_dream.mp4",radius_type:"default",$$slots:{caption:[ce]},$$scope:{ctx:d}}}),{c(){t=u("h1"),t.innerHTML=s,r=b(),l=u("p"),l.innerHTML=f,I=b(),z(p.$$.fragment),H=b(),g=u("p"),g.innerHTML=q,T=b(),_=u("p"),_.textContent=A,a=b(),m=u("hr"),h=b(),v=u("p"),v.innerHTML=Y,G=b(),y=u("div"),z(M.$$.fragment),O=b(),$=u("p"),V=P("I made a really bad logo and put the "),D=u("em"),D.textContent=Z,W=P(" on my "),L=u("a"),N=P("github"),K=P("."),this.h()},l(e){t=c(e,"H1",{"data-svelte-h":!0}),j(t)!=="svelte-wcrgqd"&&(t.innerHTML=s),r=w(e),l=c(e,"P",{"data-svelte-h":!0}),j(l)!=="svelte-b7vs74"&&(l.innerHTML=f),I=w(e),B(p.$$.fragment,e),H=w(e),g=c(e,"P",{"data-svelte-h":!0}),j(g)!=="svelte-i3fvua"&&(g.innerHTML=q),T=w(e),_=c(e,"P",{"data-svelte-h":!0}),j(_)!=="svelte-1etfsww"&&(_.textContent=A),a=w(e),m=c(e,"HR",{}),h=w(e),v=c(e,"P",{"data-svelte-h":!0}),j(v)!=="svelte-1lwaebj"&&(v.innerHTML=Y),G=w(e),y=c(e,"DIV",{id:!0,class:!0});var o=R(y);B(M.$$.fragment,o),o.forEach(n),O=w(e),$=c(e,"P",{});var x=R($);V=E(x,"I made a really bad logo and put the "),D=c(x,"EM",{"data-svelte-h":!0}),j(D)!=="svelte-1rti2iw"&&(D.textContent=Z),W=E(x," on my "),L=c(x,"A",{href:!0,target:!0});var ee=R(L);N=E(ee,"github"),ee.forEach(n),K=E(x,"."),x.forEach(n),this.h()},h(){k(y,"id","jojo"),k(y,"class","max-w svelte-16vu4r3"),k(L,"href",ge),k(L,"target","_blank")},m(e,o){i(e,t,o),i(e,r,o),i(e,l,o),i(e,I,o),Q(p,e,o),i(e,H,o),i(e,g,o),i(e,T,o),i(e,_,o),i(e,a,o),i(e,m,o),i(e,h,o),i(e,v,o),i(e,G,o),i(e,y,o),Q(M,y,null),i(e,O,o),i(e,$,o),C($,V),C($,D),C($,W),C($,L),C(L,N),C($,K),U=!0},p(e,[o]){const x={};o&1&&(x.$$scope={dirty:o,ctx:e}),M.$set(x)},i(e){U||(F(p.$$.fragment,e),F(M.$$.fragment,e),U=!0)},o(e){J(p.$$.fragment,e),J(M.$$.fragment,e),U=!1},d(e){e&&(n(t),n(r),n(l),n(I),n(H),n(g),n(T),n(_),n(a),n(m),n(h),n(v),n(G),n(y),n(O),n($)),S(p,e),S(M)}}}const ge="https://github.com/pnwheeler/TRIMCROP?tab=readme-ov-file";class be extends oe{constructor(t){super(),ie(this,t,null,de,ne,{})}}export{be as component};