import{s as De,f as c,a as w,g as p,h as H,c as y,d as s,y as k,j as x,i,u as f,l as T,m as E,K as $e,p as dt,X as mt,v as it,x as ht,o as gt,n as vt}from"../chunks/scheduler.2560b719.js";import{S as Se,i as Fe,b as U,d as V,m as Q,a as K,t as X,e as J,j as _t}from"../chunks/index.5fbfc906.js";import{g as xe,a as we}from"../chunks/spread.8a54911c.js";import{G as ct,R as Je}from"../chunks/Gif.87ce2048.js";import{R as bt}from"../chunks/RangeSlider.edfdb40e.js";import{e as pt}from"../chunks/each.e59479a4.js";function $t(_){let t;return{c(){t=T("Donut")},l(a){t=E(a,"Donut")},m(a,o){i(a,t,o)},d(a){a&&s(t)}}}function xt(_){let t;return{c(){t=T("Quick ttk on boss")},l(a){t=E(a,"Quick ttk on boss")},m(a,o){i(a,t,o)},d(a){a&&s(t)}}}function wt(_){let t,a,o,g,d,b,v,h=`Demo gifs: Tutorial Donut and an important gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,m;return o=new ct({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 45vw)",radius_type:"combo left",$$slots:{caption:[$t]},$$scope:{ctx:_}}}),d=new ct({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 45vw)",t:"#t=1",autoplay:!1,controlsBg:"#0006",radius_type:"combo right",$$slots:{caption:[xt]},$$scope:{ctx:_}}}),{c(){t=c("figure"),a=c("div"),U(o.$$.fragment),g=w(),U(d.$$.fragment),b=w(),v=c("figcaption"),v.innerHTML=h,this.h()},l(u){t=p(u,"FIGURE",{class:!0,role:!0});var r=H(t);a=p(r,"DIV",{class:!0});var C=H(a);V(o.$$.fragment,C),g=y(C),V(d.$$.fragment,C),C.forEach(s),b=y(r),v=p(r,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-asnsp2"&&(v.innerHTML=h),r.forEach(s),this.h()},h(){x(a,"class","radius-group svelte-7mq0vx"),x(v,"class","caption"),x(t,"class","max-w svelte-7mq0vx"),x(t,"role","group")},m(u,r){i(u,t,r),f(t,a),Q(o,a,null),f(a,g),Q(d,a,null),f(t,b),f(t,v),m=!0},p(u,[r]){const C={};r&1&&(C.$$scope={dirty:r,ctx:u}),o.$set(C);const I={};r&1&&(I.$$scope={dirty:r,ctx:u}),d.$set(I)},i(u){m||(K(o.$$.fragment,u),K(d.$$.fragment,u),m=!0)},o(u){X(o.$$.fragment,u),X(d.$$.fragment,u),m=!1},d(u){u&&s(t),J(o),J(d)}}}class yt extends Se{constructor(t){super(),Fe(this,t,null,wt,De,{})}}function Ct(_){let t,a,o,g,d,b="Default (20px)",v,h,m,u,r="1×DPR (60px)",C,I,P,S,re="2×DPR (120px)",M,j,F,he,D,z='Comparing the canvas quality of different render scales (<span class="dimmed"><em>zoomed to emphasize crust</em></span>).',W;const Y=[{size:20},{percent:_[0]},_[2]];let Z={};for(let l=0;l<Y.length;l+=1)Z=$e(Z,Y[l]);g=new Je({props:Z});const N=[{size:60},{percent:_[0]},_[2]];let ee={};for(let l=0;l<N.length;l+=1)ee=$e(ee,N[l]);m=new Je({props:ee});const R=[{size:120},{percent:_[0]},_[2]];let ge={};for(let l=0;l<R.length;l+=1)ge=$e(ge,R[l]);P=new Je({props:ge});const te=[_[1]];function B(l){_[3](l)}let le={};for(let l=0;l<te.length;l+=1)le=$e(le,te[l]);return _[0]!==void 0&&(le.value=_[0]),j=new bt({props:le}),dt.push(()=>_t(j,"value",B)),{c(){t=c("figure"),a=c("div"),o=c("figure"),U(g.$$.fragment),d=c("figcaption"),d.textContent=b,v=w(),h=c("figure"),U(m.$$.fragment),u=c("figcaption"),u.textContent=r,C=w(),I=c("figure"),U(P.$$.fragment),S=c("figcaption"),S.textContent=re,M=w(),U(j.$$.fragment),he=w(),D=c("figcaption"),D.innerHTML=z,this.h()},l(l){t=p(l,"FIGURE",{class:!0,role:!0});var $=H(t);a=p($,"DIV",{class:!0});var q=H(a);o=p(q,"FIGURE",{class:!0});var L=H(o);V(g.$$.fragment,L),d=p(L,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(d)!=="svelte-z9i5lc"&&(d.textContent=b),L.forEach(s),v=y(q),h=p(q,"FIGURE",{class:!0});var se=H(h);V(m.$$.fragment,se),u=p(se,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(u)!=="svelte-frrpe1"&&(u.textContent=r),se.forEach(s),C=y(q),I=p(q,"FIGURE",{class:!0});var A=H(I);V(P.$$.fragment,A),S=p(A,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(S)!=="svelte-nddsfz"&&(S.textContent=re),A.forEach(s),q.forEach(s),M=y($),V(j.$$.fragment,$),he=y($),D=p($,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(D)!=="svelte-1cnyblz"&&(D.innerHTML=z),$.forEach(s),this.h()},h(){x(d,"class","svelte-1q16f6e"),x(o,"class","svelte-1q16f6e"),x(u,"class","svelte-1q16f6e"),x(h,"class","svelte-1q16f6e"),x(S,"class","svelte-1q16f6e"),x(I,"class","svelte-1q16f6e"),x(a,"class","radius-group figblock box-shadow svelte-1q16f6e"),x(D,"class","caption svelte-1q16f6e"),x(t,"class","max-w svelte-1q16f6e"),x(t,"role","group")},m(l,$){i(l,t,$),f(t,a),f(a,o),Q(g,o,null),f(o,d),f(a,v),f(a,h),Q(m,h,null),f(h,u),f(a,C),f(a,I),Q(P,I,null),f(I,S),f(t,M),Q(j,t,null),f(t,he),f(t,D),W=!0},p(l,[$]){const q=$&5?xe(Y,[Y[0],$&1&&{percent:l[0]},$&4&&we(l[2])]):{};g.$set(q);const L=$&5?xe(N,[N[0],$&1&&{percent:l[0]},$&4&&we(l[2])]):{};m.$set(L);const se=$&5?xe(R,[R[0],$&1&&{percent:l[0]},$&4&&we(l[2])]):{};P.$set(se);const A=$&2?xe(te,[we(l[1])]):{};!F&&$&1&&(F=!0,A.value=l[0],mt(()=>F=!1)),j.$set(A)},i(l){W||(K(g.$$.fragment,l),K(m.$$.fragment,l),K(P.$$.fragment,l),K(j.$$.fragment,l),W=!0)},o(l){X(g.$$.fragment,l),X(m.$$.fragment,l),X(P.$$.fragment,l),X(j.$$.fragment,l),W=!1},d(l){l&&s(t),J(g),J(m),J(P),J(j)}}}function kt(_,t,a){const o={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--tx--1)"};let g=75;const d={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"none",colorFill:"#686766",colorStroke:"#8e8d8a44"};function b(v){g=v,a(0,g)}return[g,o,d,b]}class It extends Se{constructor(t){super(),Fe(this,t,kt,Ct,De,{})}}function ft(_,t,a){const o=_.slice();return o[5]=t[a],o}function ut(_){let t,a=_[5].value+"",o,g;return{c(){t=c("span"),o=T(a),this.h()},l(d){t=p(d,"SPAN",{class:!0});var b=H(t);o=E(b,a),b.forEach(s),this.h()},h(){x(t,"class",g=_[5].type+" color svelte-1c9hjpo")},m(d,b){i(d,t,b),f(t,o)},p(d,b){b&1&&a!==(a=d[5].value+"")&&vt(o,a),b&1&&g!==(g=d[5].type+" color svelte-1c9hjpo")&&x(t,"class",g)},d(d){d&&s(t)}}}function Tt(_){let t,a,o='<svg viewBox="-5 0 50 20" width="55px" height="24px" aria-hidden="true" class="svelte-1c9hjpo"><circle r="5" cx="5" cy="10" fill="var(--slate-blue-dim)"></circle><circle r="5" cx="20" cy="10" fill="var(--slate-blue)"></circle><circle r="5" cx="35" cy="10" fill="var(--slate)"></circle></svg>',g,d,b,v=pt(_[1](_[0])),h=[];for(let m=0;m<v.length;m+=1)h[m]=ut(ft(_,v,m));return{c(){t=c("div"),a=c("div"),a.innerHTML=o,g=w(),d=c("pre"),b=c("code");for(let m=0;m<h.length;m+=1)h[m].c();this.h()},l(m){t=p(m,"DIV",{class:!0});var u=H(t);a=p(u,"DIV",{class:!0,"data-svelte-h":!0}),k(a)!=="svelte-1dq62u1"&&(a.innerHTML=o),g=y(u),d=p(u,"PRE",{tabindex:!0,class:!0});var r=H(d);b=p(r,"CODE",{class:!0});var C=H(b);for(let I=0;I<h.length;I+=1)h[I].l(C);C.forEach(s),r.forEach(s),u.forEach(s),this.h()},h(){x(a,"class","title combo top svelte-1c9hjpo"),x(b,"class","svelte-1c9hjpo"),x(d,"tabindex","0"),x(d,"class","combo bottom overflow-scrollbar svelte-1c9hjpo"),x(t,"class","max-w pseudo-border radius svelte-1c9hjpo")},m(m,u){i(m,t,u),f(t,a),f(t,g),f(t,d),f(d,b);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(b,null)},p(m,[u]){if(u&3){v=pt(m[1](m[0]));let r;for(r=0;r<v.length;r+=1){const C=ft(m,v,r);h[r]?h[r].p(C,u):(h[r]=ut(C),h[r].c(),h[r].m(b,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=v.length}},i:it,o:it,d(m){m&&s(t),ht(h,m)}}}const Et=/\S+\s*/g;function Ht(_,t,a){let{content:o=""}=t,g=[];const d=v=>{const h=v.match(Et);if(h)return h},b=v=>{let h=v.slice(0),m=h.shift(),u=[];return u.push({value:m,type:"program"}),h.forEach(r=>{let C={value:r,type:"space"};switch(!0){case r[0]=="-":C.type="option";break;case r[0]=="[":C.type="file";break;case(r[0]>="0"&&r[0]<="9"):C.type="number";break;default:C.type="default";break}u.push(C)}),u};return gt(()=>{a(2,o=o.trim()),a(0,g=d(o))}),_.$$set=v=>{"content"in v&&a(2,o=v.content)},[g,b,o]}class Pt extends Se{constructor(t){super(),Fe(this,t,Ht,Tt,De,{content:2})}}function Mt(_){let t,a="<span>Gif Scrubber</span>",o,g,d=`A custom video player that acts as a drop-in alternative to <code data-type="ext">GIFs</code>. It’s a pretty common
	pattern for ‘modernizing’ websites, but I put a lot of effort into making it mobile-friendly and consistent across
	browsers—I figured if there&#39;s one thing I&#39;d like to include about updating my website, it&#39;s this!`,b,v,h,m,u,r,C="Custom Controls",I,P,S=`To keep things , I made custom controls: a button on the corner toggles play state and, when the container is grabbed,\r
	pointer events kick in to manage the timeline!`,re,M,j,F,he="s.t.",D,z,W,Y,Z,N,ee,R,ge="Progress indicator",te,B,le=`The graphic was <s>shamelessly ripped from</s> <em class="txt-glow">inspired by</em> the countdown timer from iOS—it&#39;s
	compact and conveys exactly what it&#39;s doing (loop + time) better than anything I could&#39;ve come up with myself.`,l,$,q,L,se="canvas",A,oe,ze,Ae,ye,ie,Ce,ce,Ye=`To make it <em>super</em> crisp, I doubled the dimensions (e.g. the rightmost canvas)—<em>super</em> unnecessary! It
	<em>was</em> slightly sharper and there <em>wasn&#39;t</em> any noticeable impact on performance (only a single canvas is active/time),
	so I went with it.`,ke,Ie,Te,pe,Ze="Codec Support",Ee,fe,et=`The quality and compression benefits videos bring are really nice, but replacing the <em>_real_</em> format comes
	with a couple of tradeoffs:`,He,ae,tt="<li>can&#39;t <em>hold-to-save</em> on mobile (on iOS, at least)</li> <li>they aren&#39;t visible in reader mode</li> <li>playback depends on browser + hardware support</li>",Pe,ue,st=`After realizing my site was completely broken on Firefox, I wrote a Python script to crawl my media directory and
	generate <code data-type="ext">.webm</code> fallbacks where none exist (The &#39;reference&#39; version being <code data-type="ext">hevc</code> <code data-type="ext">.mp4</code>). The magic
	<code data-type="ext">ffmpeg</code> command I use looks like this:`,Me,ne,Ge,je,Le,G,Oe,ve,at="e.g.",Ne,de,Be,Ue,me,nt=".h265",Ve,_e,rt="etc.",Qe,Re;v=new yt({}),ie=new It({});const Ke=[_[0]];let Xe={};for(let e=0;e<Ke.length;e+=1)Xe=$e(Xe,Ke[e]);return ne=new Pt({props:Xe}),{c(){t=c("h1"),t.innerHTML=a,o=w(),g=c("p"),g.innerHTML=d,b=w(),U(v.$$.fragment),h=w(),m=c("hr"),u=w(),r=c("h3"),r.textContent=C,I=w(),P=c("p"),P.textContent=S,re=w(),M=c("p"),j=T("It's set up "),F=c("em"),F.textContent=he,D=T(` moving a distance across the figure’s width is proportional to scrubbing that fraction of\r
	its video's duration (I clamp the seekable range to just after the video starts and before it ends to avoid any weird\r
	stuff). S/o to Red Blob Games for their in-depth article about\r
	`),z=c("a"),W=T("draggable objects"),Y=T("—extremely helpful!"),Z=w(),N=c("hr"),ee=w(),R=c("h3"),R.textContent=ge,te=w(),B=c("p"),B.innerHTML=le,l=w(),$=c("p"),q=T("It was my first time making anything with a "),L=c("code"),L.textContent=se,A=T(`, so I didn't realize that, without any adjustments, it'd look blocky and\r
	aliased. Thankfully, I learned browsers provide a fix for high dpi screens courtesy the\r
	`),oe=c("a"),ze=T("device pixel ratio (DPR)"),Ae=T(", which can be queried and used as a resolution multiplier:"),ye=w(),U(ie.$$.fragment),Ce=w(),ce=c("p"),ce.innerHTML=Ye,ke=w(),Ie=c("hr"),Te=w(),pe=c("h3"),pe.textContent=Ze,Ee=w(),fe=c("p"),fe.innerHTML=et,He=w(),ae=c("ol"),ae.innerHTML=tt,Pe=w(),ue=c("p"),ue.innerHTML=st,Me=w(),U(ne.$$.fragment),Ge=w(),je=c("hr"),Le=w(),G=c("p"),Oe=T(`Getting to a point where the behavior felt predictable and consistent across the platforms I could test on took a lot\r
	more effort than I thought it'd be(`),ve=c("em"),ve.textContent=at,Ne=T(` Safari\r
	`),de=c("a"),Be=T("media fragment hack"),Ue=T(`\r
	to load a frame, no `),me=c("code"),me.textContent=nt,Ve=T(" support in FireFox, "),_e=c("em"),_e.textContent=rt,Qe=T(`), but\r
	I'm pretty happy with how it turned out.`),this.h()},l(e){t=p(e,"H1",{"data-svelte-h":!0}),k(t)!=="svelte-16mbdpp"&&(t.innerHTML=a),o=y(e),g=p(e,"P",{"data-svelte-h":!0}),k(g)!=="svelte-sfqe5w"&&(g.innerHTML=d),b=y(e),V(v.$$.fragment,e),h=y(e),m=p(e,"HR",{}),u=y(e),r=p(e,"H3",{"data-svelte-h":!0}),k(r)!=="svelte-pwonan"&&(r.textContent=C),I=y(e),P=p(e,"P",{"data-svelte-h":!0}),k(P)!=="svelte-1hmfbx4"&&(P.textContent=S),re=y(e),M=p(e,"P",{});var n=H(M);j=E(n,"It's set up "),F=p(n,"EM",{"data-svelte-h":!0}),k(F)!=="svelte-hspnzd"&&(F.textContent=he),D=E(n,` moving a distance across the figure’s width is proportional to scrubbing that fraction of\r
	its video's duration (I clamp the seekable range to just after the video starts and before it ends to avoid any weird\r
	stuff). S/o to Red Blob Games for their in-depth article about\r
	`),z=p(n,"A",{href:!0,target:!0});var qe=H(z);W=E(qe,"draggable objects"),qe.forEach(s),Y=E(n,"—extremely helpful!"),n.forEach(s),Z=y(e),N=p(e,"HR",{}),ee=y(e),R=p(e,"H3",{"data-svelte-h":!0}),k(R)!=="svelte-lxue3i"&&(R.textContent=ge),te=y(e),B=p(e,"P",{"data-svelte-h":!0}),k(B)!=="svelte-t0jxhb"&&(B.innerHTML=le),l=y(e),$=p(e,"P",{});var be=H($);q=E(be,"It was my first time making anything with a "),L=p(be,"CODE",{"data-type":!0,"data-svelte-h":!0}),k(L)!=="svelte-jhma2z"&&(L.textContent=se),A=E(be,`, so I didn't realize that, without any adjustments, it'd look blocky and\r
	aliased. Thankfully, I learned browsers provide a fix for high dpi screens courtesy the\r
	`),oe=p(be,"A",{href:!0,target:!0});var lt=H(oe);ze=E(lt,"device pixel ratio (DPR)"),lt.forEach(s),Ae=E(be,", which can be queried and used as a resolution multiplier:"),be.forEach(s),ye=y(e),V(ie.$$.fragment,e),Ce=y(e),ce=p(e,"P",{"data-svelte-h":!0}),k(ce)!=="svelte-vwnvw5"&&(ce.innerHTML=Ye),ke=y(e),Ie=p(e,"HR",{}),Te=y(e),pe=p(e,"H3",{"data-svelte-h":!0}),k(pe)!=="svelte-o3pm85"&&(pe.textContent=Ze),Ee=y(e),fe=p(e,"P",{"data-svelte-h":!0}),k(fe)!=="svelte-1f0fba3"&&(fe.innerHTML=et),He=y(e),ae=p(e,"OL",{role:!0,"data-svelte-h":!0}),k(ae)!=="svelte-1nqwsyn"&&(ae.innerHTML=tt),Pe=y(e),ue=p(e,"P",{"data-svelte-h":!0}),k(ue)!=="svelte-f1a3hm"&&(ue.innerHTML=st),Me=y(e),V(ne.$$.fragment,e),Ge=y(e),je=p(e,"HR",{}),Le=y(e),G=p(e,"P",{});var O=H(G);Oe=E(O,`Getting to a point where the behavior felt predictable and consistent across the platforms I could test on took a lot\r
	more effort than I thought it'd be(`),ve=p(O,"EM",{"data-svelte-h":!0}),k(ve)!=="svelte-2dbwd4"&&(ve.textContent=at),Ne=E(O,` Safari\r
	`),de=p(O,"A",{href:!0,target:!0});var ot=H(de);Be=E(ot,"media fragment hack"),ot.forEach(s),Ue=E(O,`\r
	to load a frame, no `),me=p(O,"CODE",{"data-type":!0,"data-svelte-h":!0}),k(me)!=="svelte-1lul1jc"&&(me.textContent=nt),Ve=E(O," support in FireFox, "),_e=p(O,"EM",{"data-svelte-h":!0}),k(_e)!=="svelte-ynskcq"&&(_e.textContent=rt),Qe=E(O,`), but\r
	I'm pretty happy with how it turned out.`),O.forEach(s),this.h()},h(){x(z,"href",Gt),x(z,"target",We),x(L,"data-type","html"),x(oe,"href",jt),x(oe,"target",We),x(ae,"role","list"),x(de,"href",Lt),x(de,"target",We),x(me,"data-type","ext")},m(e,n){i(e,t,n),i(e,o,n),i(e,g,n),i(e,b,n),Q(v,e,n),i(e,h,n),i(e,m,n),i(e,u,n),i(e,r,n),i(e,I,n),i(e,P,n),i(e,re,n),i(e,M,n),f(M,j),f(M,F),f(M,D),f(M,z),f(z,W),f(M,Y),i(e,Z,n),i(e,N,n),i(e,ee,n),i(e,R,n),i(e,te,n),i(e,B,n),i(e,l,n),i(e,$,n),f($,q),f($,L),f($,A),f($,oe),f(oe,ze),f($,Ae),i(e,ye,n),Q(ie,e,n),i(e,Ce,n),i(e,ce,n),i(e,ke,n),i(e,Ie,n),i(e,Te,n),i(e,pe,n),i(e,Ee,n),i(e,fe,n),i(e,He,n),i(e,ae,n),i(e,Pe,n),i(e,ue,n),i(e,Me,n),Q(ne,e,n),i(e,Ge,n),i(e,je,n),i(e,Le,n),i(e,G,n),f(G,Oe),f(G,ve),f(G,Ne),f(G,de),f(de,Be),f(G,Ue),f(G,me),f(G,Ve),f(G,_e),f(G,Qe),Re=!0},p(e,[n]){const qe=n&1?xe(Ke,[we(e[0])]):{};ne.$set(qe)},i(e){Re||(K(v.$$.fragment,e),K(ie.$$.fragment,e),K(ne.$$.fragment,e),Re=!0)},o(e){X(v.$$.fragment,e),X(ie.$$.fragment,e),X(ne.$$.fragment,e),Re=!1},d(e){e&&(s(t),s(o),s(g),s(b),s(h),s(m),s(u),s(r),s(I),s(P),s(re),s(M),s(Z),s(N),s(ee),s(R),s(te),s(B),s(l),s($),s(ye),s(Ce),s(ce),s(ke),s(Ie),s(Te),s(pe),s(Ee),s(fe),s(He),s(ae),s(Pe),s(ue),s(Me),s(Ge),s(je),s(Le),s(G)),J(v,e),J(ie,e),J(ne,e)}}}const We="_blank",Gt="https://www.redblobgames.com/making-of/draggable/",jt="https://cloudinary.com/glossary/device-pixel-ratio",Lt="https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/";function Rt(_){return[{content:"ffmpeg -i [input.mp4] -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output.webm]"}]}class Ot extends Se{constructor(t){super(),Fe(this,t,Rt,Mt,De,{})}}export{Ot as component};
