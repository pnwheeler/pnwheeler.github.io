import{s as _t,K as dt,f as m,a as v,g as p,h as Q,c as $,d as n,G as I,j as C,i as r,u as f,l as w,m as x,v as wt}from"../chunks/scheduler.8d84c197.js";import{S as vt,i as $t,b as N,d as W,m as X,a as Y,t as Z,e as tt}from"../chunks/index.5e028736.js";import{g as gt,a as ht}from"../chunks/spread.8a54911c.js";import{G as it}from"../chunks/Gif.81bb5509.js";function xt(h){let e;return{c(){e=w("Sliding the trim range")},l(a){e=x(a,"Sliding the trim range")},m(a,i){r(a,e,i)},d(a){a&&n(e)}}}function bt(h){let e;return{c(){e=w("Adjusting the crop area")},l(a){e=x(a,"Adjusting the crop area")},m(a,i){r(a,e,i)},d(a){a&&n(e)}}}function Ct(h){let e,a,i,l,g,k,u,E="Demo showing the tool used on a video I took of Jonas sleeping.",_;const R=[h[0]];let T={$$slots:{caption:[xt]},$$scope:{ctx:h}};for(let o=0;o<R.length;o+=1)T=dt(T,R[o]);i=new it({props:T});const y=[h[1]];let M={$$slots:{caption:[bt]},$$scope:{ctx:h}};for(let o=0;o<y.length;o+=1)M=dt(M,y[o]);return g=new it({props:M}),{c(){e=m("figure"),a=m("div"),N(i.$$.fragment),l=v(),N(g.$$.fragment),k=v(),u=m("figcaption"),u.textContent=E,this.h()},l(o){e=p(o,"FIGURE",{class:!0,role:!0});var c=Q(e);a=p(c,"DIV",{class:!0});var d=Q(a);W(i.$$.fragment,d),l=$(d),W(g.$$.fragment,d),d.forEach(n),k=$(c),u=p(c,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-k1sxvv"&&(u.textContent=E),c.forEach(n),this.h()},h(){C(a,"class","gifs svelte-1tteg9g"),C(u,"class","caption"),C(e,"class","max-w svelte-1tteg9g"),C(e,"role","group")},m(o,c){r(o,e,c),f(e,a),X(i,a,null),f(a,l),X(g,a,null),f(e,k),f(e,u),_=!0},p(o,[c]){const d=c&1?gt(R,[ht(o[0])]):{};c&4&&(d.$$scope={dirty:c,ctx:o}),i.$set(d);const q=c&2?gt(y,[ht(o[1])]):{};c&4&&(q.$$scope={dirty:c,ctx:o}),g.$set(q)},i(o){_||(Y(i.$$.fragment,o),Y(g.$$.fragment,o),_=!0)},o(o){Z(i.$$.fragment,o),Z(g.$$.fragment,o),_=!1},d(o){o&&n(e),tt(i),tt(g)}}}function It(h){return[{src:"/media/projects/TrimCrop/trim.mp4",radius_type:"combo left",dim:30,controlsBg:"#0008"},{src:"/media/projects/TrimCrop/crop.mp4",radius_type:"combo right",dim:30,controlsBg:"#0008"}]}class kt extends vt{constructor(e){super(),$t(this,e,It,Ct,_t,{})}}function Tt(h){let e,a,i="Jojo's Bizarre Dream";return{c(){e=w("Output from demo: "),a=m("em"),a.textContent=i},l(l){e=x(l,"Output from demo: "),a=p(l,"EM",{"data-svelte-h":!0}),I(a)!=="svelte-114rb6o"&&(a.textContent=i)},m(l,g){r(l,e,g),r(l,a,g)},p:wt,d(l){l&&(n(e),n(a))}}}function yt(h){let e,a="<span>TRIMCROP</span>",i,l,g=`A Qt app I made to apply basic video tweaks on my PC <em>without</em> needing to open a full-blown editor. As the
	<em>extremely creative</em> name might imply, it does two things: trim and crop.`,k,u,E,_,R=`There are tons of other (<em>better</em>) tools, but I&#39;d wanted to learn about desktop development for a while and
	decided to give it a shot.`,T,y,M,o,c,d,q,et,D,lt="for some reason",ot,U,H,mt=`It basically works as a proxy to ffmpeg: the window acts as a staging area to preview edits before calling a\r
	preconfigured command to handle the actual transcoding (passing timestamp and crop coordinate values as arguments).`,B,F,J,L,pt=`It&#39;s convoluted and janky, but that hasn&#39;t stopped <em>me</em> from using it (like...to make most of the
	<a href="/projects/gif-scrubber">&quot;gifs&quot;</a> for my website). When I have time, I&#39;d like to overhaul the UI, add a setting
	to lock aspect ratio, and make some other changes to improve the overall usability.`,V,j,P,z,b,at,G,ct=".exe",nt,A,st,rt,K;return u=new kt({}),P=new it({props:{src:"/media/projects/TrimCrop/jojo_dream.mp4",$$slots:{caption:[Tt]},$$scope:{ctx:h}}}),{c(){e=m("h1"),e.innerHTML=a,i=v(),l=m("p"),l.innerHTML=g,k=v(),N(u.$$.fragment),E=v(),_=m("p"),_.innerHTML=R,T=v(),y=m("hr"),M=v(),o=m("p"),c=w(`The area selector and range slider are custom components made with Qt Quick (the UI module for QML). After putting them on\r
	top of a base MediaPlayer widget (and adding `),d=m("a"),q=w("custom window decoration"),et=w(`,\r
	`),D=m("em"),D.textContent=lt,ot=w("), I was pretty much done with the front-end."),U=v(),H=m("p"),H.textContent=mt,B=v(),F=m("hr"),J=v(),L=m("p"),L.innerHTML=pt,V=v(),j=m("div"),N(P.$$.fragment),z=v(),b=m("p"),at=w("I made a bad logo (Inkscape expert) and put the "),G=m("em"),G.textContent=ct,nt=w(" on my "),A=m("a"),st=w("github"),rt=w("."),this.h()},l(t){e=p(t,"H1",{"data-svelte-h":!0}),I(e)!=="svelte-wcrgqd"&&(e.innerHTML=a),i=$(t),l=p(t,"P",{"data-svelte-h":!0}),I(l)!=="svelte-72lwut"&&(l.innerHTML=g),k=$(t),W(u.$$.fragment,t),E=$(t),_=p(t,"P",{"data-svelte-h":!0}),I(_)!=="svelte-k5sx8t"&&(_.innerHTML=R),T=$(t),y=p(t,"HR",{}),M=$(t),o=p(t,"P",{});var s=Q(o);c=x(s,`The area selector and range slider are custom components made with Qt Quick (the UI module for QML). After putting them on\r
	top of a base MediaPlayer widget (and adding `),d=p(s,"A",{href:!0,target:!0});var S=Q(d);q=x(S,"custom window decoration"),S.forEach(n),et=x(s,`,\r
	`),D=p(s,"EM",{"data-svelte-h":!0}),I(D)!=="svelte-wcmhxj"&&(D.textContent=lt),ot=x(s,"), I was pretty much done with the front-end."),s.forEach(n),U=$(t),H=p(t,"P",{"data-svelte-h":!0}),I(H)!=="svelte-kq1nkg"&&(H.textContent=mt),B=$(t),F=p(t,"HR",{}),J=$(t),L=p(t,"P",{"data-svelte-h":!0}),I(L)!=="svelte-34psix"&&(L.innerHTML=pt),V=$(t),j=p(t,"DIV",{id:!0,class:!0});var ft=Q(j);W(P.$$.fragment,ft),ft.forEach(n),z=$(t),b=p(t,"P",{});var O=Q(b);at=x(O,"I made a bad logo (Inkscape expert) and put the "),G=p(O,"EM",{"data-svelte-h":!0}),I(G)!=="svelte-1rti2iw"&&(G.textContent=ct),nt=x(O," on my "),A=p(O,"A",{href:!0,target:!0});var ut=Q(A);st=x(ut,"github"),ut.forEach(n),rt=x(O,"."),O.forEach(n),this.h()},h(){C(d,"href",jt),C(d,"target","_blank"),C(j,"id","jojo"),C(j,"class","max-w svelte-16vu4r3"),C(A,"href",Mt),C(A,"target","_blank")},m(t,s){r(t,e,s),r(t,i,s),r(t,l,s),r(t,k,s),X(u,t,s),r(t,E,s),r(t,_,s),r(t,T,s),r(t,y,s),r(t,M,s),r(t,o,s),f(o,c),f(o,d),f(d,q),f(o,et),f(o,D),f(o,ot),r(t,U,s),r(t,H,s),r(t,B,s),r(t,F,s),r(t,J,s),r(t,L,s),r(t,V,s),r(t,j,s),X(P,j,null),r(t,z,s),r(t,b,s),f(b,at),f(b,G),f(b,nt),f(b,A),f(A,st),f(b,rt),K=!0},p(t,[s]){const S={};s&1&&(S.$$scope={dirty:s,ctx:t}),P.$set(S)},i(t){K||(Y(u.$$.fragment,t),Y(P.$$.fragment,t),K=!0)},o(t){Z(u.$$.fragment,t),Z(P.$$.fragment,t),K=!1},d(t){t&&(n(e),n(i),n(l),n(k),n(E),n(_),n(T),n(y),n(M),n(o),n(U),n(H),n(B),n(F),n(J),n(L),n(V),n(j),n(z),n(b)),tt(u,t),tt(P)}}}const Mt="https://github.com/pnwheeler/TRIMCROP?tab=readme-ov-file",jt="https://www.qt.io/blog/custom-window-decorations";class At extends vt{constructor(e){super(),$t(this,e,null,yt,_t,{})}}export{At as component};