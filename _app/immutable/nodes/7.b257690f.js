import{s as Fe,f as o,a as y,g as c,h as T,c as w,d as l,G as k,j as x,i,u as p,l as H,m as M,K as $e,p as mt,T as ht,v as ot,x as gt,o as vt,N as ct,n as _t}from"../chunks/scheduler.6d6d93c7.js";import{S as Se,i as ze,b as U,d as V,m as Q,a as K,t as J,e as W,j as bt}from"../chunks/index.15fe4709.js";import{g as xe,a as ye}from"../chunks/spread.8a54911c.js";import{G as pt,R as We}from"../chunks/Gif.7ebaa9d9.js";import{R as $t}from"../chunks/RangeSlider.931194e2.js";import{e as ft}from"../chunks/each.e59479a4.js";function xt(_){let t;return{c(){t=H("Blender donut")},l(s){t=M(s,"Blender donut")},m(s,f){i(s,t,f)},d(s){s&&l(t)}}}function yt(_){let t;return{c(){t=H("Quick ttk on boss")},l(s){t=M(s,"Quick ttk on boss")},m(s,f){i(s,t,f)},d(s){s&&l(t)}}}function wt(_){let t,s,f,g,m,b,v,h=`Demo gifs: Tutorial Donut and gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,u;return f=new pt({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 24vh)",radius_type:"combo left",$$slots:{caption:[xt]},$$scope:{ctx:_}}}),m=new pt({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 24vh)",t:"#t=1",autoplay:!1,controlsBg:"#0006",radius_type:"combo right",$$slots:{caption:[yt]},$$scope:{ctx:_}}}),{c(){t=o("figure"),s=o("div"),U(f.$$.fragment),g=y(),U(m.$$.fragment),b=y(),v=o("figcaption"),v.innerHTML=h,this.h()},l(d){t=c(d,"FIGURE",{class:!0,role:!0});var a=T(t);s=c(a,"DIV",{class:!0});var C=T(s);V(f.$$.fragment,C),g=w(C),V(m.$$.fragment,C),C.forEach(l),b=w(a),v=c(a,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-1s14123"&&(v.innerHTML=h),a.forEach(l),this.h()},h(){x(s,"class","radius-group svelte-6cxl5a"),x(v,"class","caption"),x(t,"class","max-w svelte-6cxl5a"),x(t,"role","group")},m(d,a){i(d,t,a),p(t,s),Q(f,s,null),p(s,g),Q(m,s,null),p(t,b),p(t,v),u=!0},p(d,[a]){const C={};a&1&&(C.$$scope={dirty:a,ctx:d}),f.$set(C);const I={};a&1&&(I.$$scope={dirty:a,ctx:d}),m.$set(I)},i(d){u||(K(f.$$.fragment,d),K(m.$$.fragment,d),u=!0)},o(d){J(f.$$.fragment,d),J(m.$$.fragment,d),u=!1},d(d){d&&l(t),W(f),W(m)}}}class Ct extends Se{constructor(t){super(),ze(this,t,null,wt,Fe,{})}}function kt(_){let t,s,f,g,m,b="Default (20px)",v,h,u,d,a="1×DPR (60px)",C,I,E,S,ne="2×DPR (120px)",P,L,z,he,F,A='Comparing the canvas quality at different render scales <span class="dimmed">(<em>magnified to emphasize crust</em>)</span>.',X;const Y=[{size:20},{percent:_[0]},_[2]];let Z={};for(let r=0;r<Y.length;r+=1)Z=$e(Z,Y[r]);g=new We({props:Z});const N=[{size:60},{percent:_[0]},_[2]];let ee={};for(let r=0;r<N.length;r+=1)ee=$e(ee,N[r]);u=new We({props:ee});const j=[{size:120},{percent:_[0]},_[2]];let ge={};for(let r=0;r<j.length;r+=1)ge=$e(ge,j[r]);E=new We({props:ge});const te=[_[1]];function q(r){_[3](r)}let re={};for(let r=0;r<te.length;r+=1)re=$e(re,te[r]);return _[0]!==void 0&&(re.value=_[0]),L=new $t({props:re}),mt.push(()=>bt(L,"value",q)),{c(){t=o("figure"),s=o("div"),f=o("figure"),U(g.$$.fragment),m=o("figcaption"),m.textContent=b,v=y(),h=o("figure"),U(u.$$.fragment),d=o("figcaption"),d.textContent=a,C=y(),I=o("figure"),U(E.$$.fragment),S=o("figcaption"),S.textContent=ne,P=y(),U(L.$$.fragment),he=y(),F=o("figcaption"),F.innerHTML=A,this.h()},l(r){t=c(r,"FIGURE",{class:!0,role:!0});var $=T(t);s=c($,"DIV",{class:!0});var D=T(s);f=c(D,"FIGURE",{class:!0});var R=T(f);V(g.$$.fragment,R),m=c(R,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(m)!=="svelte-z9i5lc"&&(m.textContent=b),R.forEach(l),v=w(D),h=c(D,"FIGURE",{class:!0});var le=T(h);V(u.$$.fragment,le),d=c(le,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(d)!=="svelte-frrpe1"&&(d.textContent=a),le.forEach(l),C=w(D),I=c(D,"FIGURE",{class:!0});var O=T(I);V(E.$$.fragment,O),S=c(O,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(S)!=="svelte-nddsfz"&&(S.textContent=ne),O.forEach(l),D.forEach(l),P=w($),V(L.$$.fragment,$),he=w($),F=c($,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(F)!=="svelte-1i7h7ud"&&(F.innerHTML=A),$.forEach(l),this.h()},h(){x(m,"class","svelte-rlfx2a"),x(f,"class","svelte-rlfx2a"),x(d,"class","svelte-rlfx2a"),x(h,"class","svelte-rlfx2a"),x(S,"class","svelte-rlfx2a"),x(I,"class","svelte-rlfx2a"),x(s,"class","radius-group figblock box-shadow svelte-rlfx2a"),x(F,"class","caption svelte-rlfx2a"),x(t,"class","max-w svelte-rlfx2a"),x(t,"role","group")},m(r,$){i(r,t,$),p(t,s),p(s,f),Q(g,f,null),p(f,m),p(s,v),p(s,h),Q(u,h,null),p(h,d),p(s,C),p(s,I),Q(E,I,null),p(I,S),p(t,P),Q(L,t,null),p(t,he),p(t,F),X=!0},p(r,[$]){const D=$&5?xe(Y,[Y[0],$&1&&{percent:r[0]},$&4&&ye(r[2])]):{};g.$set(D);const R=$&5?xe(N,[N[0],$&1&&{percent:r[0]},$&4&&ye(r[2])]):{};u.$set(R);const le=$&5?xe(j,[j[0],$&1&&{percent:r[0]},$&4&&ye(r[2])]):{};E.$set(le);const O=$&2?xe(te,[ye(r[1])]):{};!z&&$&1&&(z=!0,O.value=r[0],ht(()=>z=!1)),L.$set(O)},i(r){X||(K(g.$$.fragment,r),K(u.$$.fragment,r),K(E.$$.fragment,r),K(L.$$.fragment,r),X=!0)},o(r){J(g.$$.fragment,r),J(u.$$.fragment,r),J(E.$$.fragment,r),J(L.$$.fragment,r),X=!1},d(r){r&&l(t),W(g),W(u),W(E),W(L)}}}function It(_,t,s){const f={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--tx--1)"};let g=75;const m={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"none",colorFill:"#686766",colorStroke:"#8e8d8a44"};function b(v){g=v,s(0,g)}return[g,f,m,b]}class Tt extends Se{constructor(t){super(),ze(this,t,It,kt,Fe,{})}}function ut(_,t,s){const f=_.slice();return f[5]=t[s],f}function dt(_){let t,s=_[5].value+"",f,g;return{c(){t=o("span"),f=H(s),this.h()},l(m){t=c(m,"SPAN",{class:!0});var b=T(t);f=M(b,s),b.forEach(l),this.h()},h(){x(t,"class",g=ct(_[5].type)+" svelte-1tjm2cw")},m(m,b){i(m,t,b),p(t,f)},p(m,b){b&1&&s!==(s=m[5].value+"")&&_t(f,s),b&1&&g!==(g=ct(m[5].type)+" svelte-1tjm2cw")&&x(t,"class",g)},d(m){m&&l(t)}}}function Et(_){let t,s,f='<svg viewBox="-5 0 50 20" width="55px" height="24px" aria-hidden="true" class="svelte-1tjm2cw"><circle r="5" cx="5" cy="10" fill="var(--slate-blue-dim)"></circle><circle r="5" cx="20" cy="10" fill="var(--slate-blue)"></circle><circle r="5" cx="35" cy="10" fill="var(--slate)"></circle></svg>',g,m,b,v=ft(_[1](_[0])),h=[];for(let u=0;u<v.length;u+=1)h[u]=dt(ut(_,v,u));return{c(){t=o("div"),s=o("div"),s.innerHTML=f,g=y(),m=o("pre"),b=o("code");for(let u=0;u<h.length;u+=1)h[u].c();this.h()},l(u){t=c(u,"DIV",{class:!0});var d=T(t);s=c(d,"DIV",{class:!0,"data-svelte-h":!0}),k(s)!=="svelte-n5svtm"&&(s.innerHTML=f),g=w(d),m=c(d,"PRE",{class:!0});var a=T(m);b=c(a,"CODE",{class:!0});var C=T(b);for(let I=0;I<h.length;I+=1)h[I].l(C);C.forEach(l),a.forEach(l),d.forEach(l),this.h()},h(){x(s,"class","title svelte-1tjm2cw"),x(b,"class","svelte-1tjm2cw"),x(m,"class","codeblock overflow-scrollbar svelte-1tjm2cw"),x(t,"class","max-w pseudo-border svelte-1tjm2cw")},m(u,d){i(u,t,d),p(t,s),p(t,g),p(t,m),p(m,b);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(b,null)},p(u,[d]){if(d&3){v=ft(u[1](u[0]));let a;for(a=0;a<v.length;a+=1){const C=ut(u,v,a);h[a]?h[a].p(C,d):(h[a]=dt(C),h[a].c(),h[a].m(b,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=v.length}},i:ot,o:ot,d(u){u&&l(t),gt(h,u)}}}function Ht(_,t,s){let{content:f=""}=t,g=[];const m=v=>v.split(/(\s+)/),b=v=>{let h=v.slice(0),u=h.shift();console.log(u),console.log("full cmd "+h);let d=[];return d.push({value:u,type:"program"}),h.forEach(a=>{let C={value:a,type:"space"};switch(!0){case a[0]==" ":break;case a[0]=="-":console.log(a+" is an option"),C.type="option";break;case a[0]=="[":console.log(a+" is a file"),C.type="file";break;case(a[0]>="0"&&a[0]<="9"):console.log(a+" is a number"),C.type="number";break;default:console.log(a+" is uncategorized"),C.type="default";break}d.push(C)}),d};return vt(()=>{s(0,g=m(f))}),_.$$set=v=>{"content"in v&&s(2,f=v.content)},[g,b,f]}class Mt extends Se{constructor(t){super(),ze(this,t,Ht,Et,Fe,{content:2})}}function Pt(_){let t,s="<span>Gif Scrubber</span>",f,g,m=`An inline video player that acts as a drop-in alternative to <code data-type="ext">GIFs</code>. It’s a pretty
	common pattern for ‘modernizing’ the old format, but I put a good chunk of time into getting it working how I wanted and added a couple progressive enhancements.`,b,v,h,u,d,a,C="Controls",I,E,S=`To keep everything minimal and mobile-friendly, I decided to make custom controls. A fixed button toggles play state and, when the container is grabbed, pointer\r
	events kick in to manage the timeline.`,ne,P,L,z,he="s.t.",F,A,X,Y,Z,N,ee,j,ge="Progress indicator",te,q,re=`The graphic is <s class="svelte-ma2udv">shamelessly ripped from</s> <em class="txt-glow">inspired by</em> the countdown timer from iOS—it&#39;s compact and
	conveys pretty much exactly what it&#39;s doing (loop + time). I originally used an <code data-type="html">svg</code> but, following <em>several</em> failed remakes, I wasn&#39;t able to figure out the cause of janky transforms.`,r,$,D,R,le="canvas",O,ie,Ae,Oe,we,oe,Ce,ce,Ye=`I ended up doubling the dimensions (<em>i.e.</em> the rightmost canvas) to make it
	<em>super</em> crisp—<em>super</em> unnecessary! It <em>was</em> slightly sharper and there <em>wasn&#39;t</em> any noticeable
	impact on performance (only a single canvas is active/time), so I went with it.`,ke,Ie,Te,pe,Ze="Media Support",Ee,fe,et=`The quality/compression benefits are a no brainer, but using video to replace <em>_real_</em> gifs comes with couple
	of tradeoffs:`,He,se,tt="<li>can&#39;t <em>hold-to-save</em> on mobile</li> <li>they aren&#39;t visible in reader mode</li> <li>playback support depends on browser + hardware features</li>",Me,ue,lt=`To make a long story short, I address the last point by running a pre-build Python script to crawl my directory and
	generate <code data-type="ext">.webm</code> fallbacks where none exist. The <em class="txt-glow">magic</em> <code data-type="ext">ffmpeg</code> command
	I use to (hopefully) enforece compatibility looks like this:`,Pe,ae,Ge,Le,Re,G,Be,ve,st="e.g.",Ne,de,qe,Ue,me,at=".h265",Ve,_e,nt="etc.",Qe,je;v=new Ct({}),oe=new Tt({});const Ke=[_[0]];let Je={};for(let e=0;e<Ke.length;e+=1)Je=$e(Je,Ke[e]);return ae=new Mt({props:Je}),{c(){t=o("h1"),t.innerHTML=s,f=y(),g=o("p"),g.innerHTML=m,b=y(),U(v.$$.fragment),h=y(),u=o("hr"),d=y(),a=o("h3"),a.textContent=C,I=y(),E=o("p"),E.textContent=S,ne=y(),P=o("p"),L=H("It's set up "),z=o("em"),z.textContent=he,F=H(` moving a distance across the figure’s width is proportional to seeking that fraction\r
	of its video's duration. So to Red Blob Games for their in-depth article about\r
	`),A=o("a"),X=H("draggable objects"),Y=H(" and events—extremely helpful!"),Z=y(),N=o("hr"),ee=y(),j=o("h3"),j.textContent=ge,te=y(),q=o("p"),q.innerHTML=re,r=y(),$=o("p"),D=H("Switching over to a "),R=o("code"),R.textContent=le,O=H(` fixed that issue, but introduced another that gave it a\r
	blocky, aliased look on my phone. Thankfully, I learned browsers provide a fix for high dpi screens courtesy\r
	the `),ie=o("a"),Ae=H("device pixel ratio (DPR)"),Oe=H(", which can be queried and used as a resolution multiplier:"),we=y(),U(oe.$$.fragment),Ce=y(),ce=o("p"),ce.innerHTML=Ye,ke=y(),Ie=o("hr"),Te=y(),pe=o("h3"),pe.textContent=Ze,Ee=y(),fe=o("p"),fe.innerHTML=et,He=y(),se=o("ol"),se.innerHTML=tt,Me=y(),ue=o("p"),ue.innerHTML=lt,Pe=y(),U(ae.$$.fragment),Ge=y(),Le=o("hr"),Re=y(),G=o("p"),Be=H("Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),ve=o("em"),ve.textContent=st,Ne=y(),de=o("a"),qe=H("safari media fragment hack"),Ue=H(", no "),me=o("code"),me.textContent=at,Ve=H(` in\r
	FireFox, `),_e=o("em"),_e.textContent=nt,Qe=H("), but I'm pretty happy with how it turned out :)"),this.h()},l(e){t=c(e,"H1",{"data-svelte-h":!0}),k(t)!=="svelte-16mbdpp"&&(t.innerHTML=s),f=w(e),g=c(e,"P",{"data-svelte-h":!0}),k(g)!=="svelte-13nes2b"&&(g.innerHTML=m),b=w(e),V(v.$$.fragment,e),h=w(e),u=c(e,"HR",{}),d=w(e),a=c(e,"H3",{"data-svelte-h":!0}),k(a)!=="svelte-pu7e26"&&(a.textContent=C),I=w(e),E=c(e,"P",{"data-svelte-h":!0}),k(E)!=="svelte-1csm726"&&(E.textContent=S),ne=w(e),P=c(e,"P",{});var n=T(P);L=M(n,"It's set up "),z=c(n,"EM",{"data-svelte-h":!0}),k(z)!=="svelte-hspnzd"&&(z.textContent=he),F=M(n,` moving a distance across the figure’s width is proportional to seeking that fraction\r
	of its video's duration. So to Red Blob Games for their in-depth article about\r
	`),A=c(n,"A",{href:!0,target:!0});var De=T(A);X=M(De,"draggable objects"),De.forEach(l),Y=M(n," and events—extremely helpful!"),n.forEach(l),Z=w(e),N=c(e,"HR",{}),ee=w(e),j=c(e,"H3",{"data-svelte-h":!0}),k(j)!=="svelte-lxue3i"&&(j.textContent=ge),te=w(e),q=c(e,"P",{"data-svelte-h":!0}),k(q)!=="svelte-g9lbk3"&&(q.innerHTML=re),r=w(e),$=c(e,"P",{});var be=T($);D=M(be,"Switching over to a "),R=c(be,"CODE",{"data-type":!0,"data-svelte-h":!0}),k(R)!=="svelte-jhma2z"&&(R.textContent=le),O=M(be,` fixed that issue, but introduced another that gave it a\r
	blocky, aliased look on my phone. Thankfully, I learned browsers provide a fix for high dpi screens courtesy\r
	the `),ie=c(be,"A",{href:!0,target:!0});var rt=T(ie);Ae=M(rt,"device pixel ratio (DPR)"),rt.forEach(l),Oe=M(be,", which can be queried and used as a resolution multiplier:"),be.forEach(l),we=w(e),V(oe.$$.fragment,e),Ce=w(e),ce=c(e,"P",{"data-svelte-h":!0}),k(ce)!=="svelte-10d4d2w"&&(ce.innerHTML=Ye),ke=w(e),Ie=c(e,"HR",{}),Te=w(e),pe=c(e,"H3",{"data-svelte-h":!0}),k(pe)!=="svelte-ejqcuf"&&(pe.textContent=Ze),Ee=w(e),fe=c(e,"P",{"data-svelte-h":!0}),k(fe)!=="svelte-1tltzol"&&(fe.innerHTML=et),He=w(e),se=c(e,"OL",{role:!0,"data-svelte-h":!0}),k(se)!=="svelte-31bwzl"&&(se.innerHTML=tt),Me=w(e),ue=c(e,"P",{"data-svelte-h":!0}),k(ue)!=="svelte-imgbmr"&&(ue.innerHTML=lt),Pe=w(e),V(ae.$$.fragment,e),Ge=w(e),Le=c(e,"HR",{}),Re=w(e),G=c(e,"P",{});var B=T(G);Be=M(B,"Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),ve=c(B,"EM",{"data-svelte-h":!0}),k(ve)!=="svelte-2dbwd4"&&(ve.textContent=st),Ne=w(B),de=c(B,"A",{href:!0,target:!0});var it=T(de);qe=M(it,"safari media fragment hack"),it.forEach(l),Ue=M(B,", no "),me=c(B,"CODE",{"data-type":!0,"data-svelte-h":!0}),k(me)!=="svelte-1lul1jc"&&(me.textContent=at),Ve=M(B,` in\r
	FireFox, `),_e=c(B,"EM",{"data-svelte-h":!0}),k(_e)!=="svelte-ynskcq"&&(_e.textContent=nt),Qe=M(B,"), but I'm pretty happy with how it turned out :)"),B.forEach(l),this.h()},h(){x(A,"href",Gt),x(A,"target",Xe),x(R,"data-type","html"),x(ie,"href",Lt),x(ie,"target",Xe),x(se,"role","list"),x(de,"href",Rt),x(de,"target",Xe),x(me,"data-type","ext")},m(e,n){i(e,t,n),i(e,f,n),i(e,g,n),i(e,b,n),Q(v,e,n),i(e,h,n),i(e,u,n),i(e,d,n),i(e,a,n),i(e,I,n),i(e,E,n),i(e,ne,n),i(e,P,n),p(P,L),p(P,z),p(P,F),p(P,A),p(A,X),p(P,Y),i(e,Z,n),i(e,N,n),i(e,ee,n),i(e,j,n),i(e,te,n),i(e,q,n),i(e,r,n),i(e,$,n),p($,D),p($,R),p($,O),p($,ie),p(ie,Ae),p($,Oe),i(e,we,n),Q(oe,e,n),i(e,Ce,n),i(e,ce,n),i(e,ke,n),i(e,Ie,n),i(e,Te,n),i(e,pe,n),i(e,Ee,n),i(e,fe,n),i(e,He,n),i(e,se,n),i(e,Me,n),i(e,ue,n),i(e,Pe,n),Q(ae,e,n),i(e,Ge,n),i(e,Le,n),i(e,Re,n),i(e,G,n),p(G,Be),p(G,ve),p(G,Ne),p(G,de),p(de,qe),p(G,Ue),p(G,me),p(G,Ve),p(G,_e),p(G,Qe),je=!0},p(e,[n]){const De=n&1?xe(Ke,[ye(e[0])]):{};ae.$set(De)},i(e){je||(K(v.$$.fragment,e),K(oe.$$.fragment,e),K(ae.$$.fragment,e),je=!0)},o(e){J(v.$$.fragment,e),J(oe.$$.fragment,e),J(ae.$$.fragment,e),je=!1},d(e){e&&(l(t),l(f),l(g),l(b),l(h),l(u),l(d),l(a),l(I),l(E),l(ne),l(P),l(Z),l(N),l(ee),l(j),l(te),l(q),l(r),l($),l(we),l(Ce),l(ce),l(ke),l(Ie),l(Te),l(pe),l(Ee),l(fe),l(He),l(se),l(Me),l(ue),l(Pe),l(Ge),l(Le),l(Re),l(G)),W(v,e),W(oe,e),W(ae,e)}}}const Xe="_blank",Gt="https://www.redblobgames.com/making-of/draggable/",Lt="https://cloudinary.com/glossary/device-pixel-ratio",Rt="https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/";function jt(_){return[{content:"ffmpeg -i [input.mp4] -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output.webm]"}]}class Bt extends Se{constructor(t){super(),ze(this,t,jt,Pt,Fe,{})}}export{Bt as component};
