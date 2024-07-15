import{s as Se,f as c,a as x,g as p,h as T,c as C,d as s,G as k,j as y,i as o,u as f,l as H,m as M,K as $e,p as mt,T as ht,v as ot,x as vt,o as gt,N as ct,n as _t}from"../chunks/scheduler.6d6d93c7.js";import{S as Fe,i as ze,b as U,d as V,m as Q,a as K,t as J,e as W,j as bt}from"../chunks/index.15fe4709.js";import{g as ye,a as xe}from"../chunks/spread.8a54911c.js";import{G as pt,R as We}from"../chunks/Gif.e80792c9.js";import{R as $t}from"../chunks/RangeSlider.0ed6b0a4.js";import{e as ft}from"../chunks/each.e59479a4.js";function yt(_){let t;return{c(){t=H("Blender donut")},l(l){t=M(l,"Blender donut")},m(l,i){o(l,t,i)},d(l){l&&s(t)}}}function xt(_){let t;return{c(){t=H("Quick ttk on boss")},l(l){t=M(l,"Quick ttk on boss")},m(l,i){o(l,t,i)},d(l){l&&s(t)}}}function Ct(_){let t,l,i,v,d,b,g,h=`Demo gifs: Tutorial Donut and gamer clip from my best 
		run of <a href="https://store.steampowered.com/app/1676130/Deadlink/" target="_blank">deadlink</a>.`,m;return i=new pt({props:{src:"/media/projects/GifScrubber/blender_donut.mp4",height:"min(240px, 40vw)",radius_type:"combo left",$$slots:{caption:[yt]},$$scope:{ctx:_}}}),d=new pt({props:{src:"/media/projects/GifScrubber/deadlink.mp4",height:"min(240px, 40vw)",t:"#t=1",autoplay:!1,controlsBg:"#0006",radius_type:"combo right",$$slots:{caption:[xt]},$$scope:{ctx:_}}}),{c(){t=c("figure"),l=c("div"),U(i.$$.fragment),v=x(),U(d.$$.fragment),b=x(),g=c("figcaption"),g.innerHTML=h,this.h()},l(u){t=p(u,"FIGURE",{class:!0,role:!0});var n=T(t);l=p(n,"DIV",{class:!0});var w=T(l);V(i.$$.fragment,w),v=C(w),V(d.$$.fragment,w),w.forEach(s),b=C(n),g=p(n,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(g)!=="svelte-1s14123"&&(g.innerHTML=h),n.forEach(s),this.h()},h(){y(l,"class","radius-group svelte-ycbufb"),y(g,"class","caption"),y(t,"class","max-w svelte-ycbufb"),y(t,"role","group")},m(u,n){o(u,t,n),f(t,l),Q(i,l,null),f(l,v),Q(d,l,null),f(t,b),f(t,g),m=!0},p(u,[n]){const w={};n&1&&(w.$$scope={dirty:n,ctx:u}),i.$set(w);const I={};n&1&&(I.$$scope={dirty:n,ctx:u}),d.$set(I)},i(u){m||(K(i.$$.fragment,u),K(d.$$.fragment,u),m=!0)},o(u){J(i.$$.fragment,u),J(d.$$.fragment,u),m=!1},d(u){u&&s(t),W(i),W(d)}}}class wt extends Fe{constructor(t){super(),ze(this,t,null,Ct,Se,{})}}function kt(_){let t,l,i,v,d,b="Default (20px)",g,h,m,u,n="1×DPR (60px)",w,I,E,F,ne="2×DPR (120px)",P,R,z,he,S,A='Comparing the canvas quality at different render scales <span class="dimmed">(<em>magnified to emphasize crust</em>)</span>.',X;const Y=[{size:20},{percent:_[0]},_[2]];let Z={};for(let r=0;r<Y.length;r+=1)Z=$e(Z,Y[r]);v=new We({props:Z});const B=[{size:60},{percent:_[0]},_[2]];let ee={};for(let r=0;r<B.length;r+=1)ee=$e(ee,B[r]);m=new We({props:ee});const j=[{size:120},{percent:_[0]},_[2]];let ve={};for(let r=0;r<j.length;r+=1)ve=$e(ve,j[r]);E=new We({props:ve});const te=[_[1]];function N(r){_[3](r)}let re={};for(let r=0;r<te.length;r+=1)re=$e(re,te[r]);return _[0]!==void 0&&(re.value=_[0]),R=new $t({props:re}),mt.push(()=>bt(R,"value",N)),{c(){t=c("figure"),l=c("div"),i=c("figure"),U(v.$$.fragment),d=c("figcaption"),d.textContent=b,g=x(),h=c("figure"),U(m.$$.fragment),u=c("figcaption"),u.textContent=n,w=x(),I=c("figure"),U(E.$$.fragment),F=c("figcaption"),F.textContent=ne,P=x(),U(R.$$.fragment),he=x(),S=c("figcaption"),S.innerHTML=A,this.h()},l(r){t=p(r,"FIGURE",{class:!0,role:!0});var $=T(t);l=p($,"DIV",{class:!0});var D=T(l);i=p(D,"FIGURE",{class:!0});var G=T(i);V(v.$$.fragment,G),d=p(G,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(d)!=="svelte-z9i5lc"&&(d.textContent=b),G.forEach(s),g=C(D),h=p(D,"FIGURE",{class:!0});var se=T(h);V(m.$$.fragment,se),u=p(se,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(u)!=="svelte-frrpe1"&&(u.textContent=n),se.forEach(s),w=C(D),I=p(D,"FIGURE",{class:!0});var O=T(I);V(E.$$.fragment,O),F=p(O,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(F)!=="svelte-nddsfz"&&(F.textContent=ne),O.forEach(s),D.forEach(s),P=C($),V(R.$$.fragment,$),he=C($),S=p($,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),k(S)!=="svelte-1i7h7ud"&&(S.innerHTML=A),$.forEach(s),this.h()},h(){y(d,"class","svelte-1eoy1h6"),y(i,"class","svelte-1eoy1h6"),y(u,"class","svelte-1eoy1h6"),y(h,"class","svelte-1eoy1h6"),y(F,"class","svelte-1eoy1h6"),y(I,"class","svelte-1eoy1h6"),y(l,"class","radius-group figblock box-shadow svelte-1eoy1h6"),y(S,"class","caption svelte-1eoy1h6"),y(t,"class","max-w svelte-1eoy1h6"),y(t,"role","group")},m(r,$){o(r,t,$),f(t,l),f(l,i),Q(v,i,null),f(i,d),f(l,g),f(l,h),Q(m,h,null),f(h,u),f(l,w),f(l,I),Q(E,I,null),f(I,F),f(t,P),Q(R,t,null),f(t,he),f(t,S),X=!0},p(r,[$]){const D=$&5?ye(Y,[Y[0],$&1&&{percent:r[0]},$&4&&xe(r[2])]):{};v.$set(D);const G=$&5?ye(B,[B[0],$&1&&{percent:r[0]},$&4&&xe(r[2])]):{};m.$set(G);const se=$&5?ye(j,[j[0],$&1&&{percent:r[0]},$&4&&xe(r[2])]):{};E.$set(se);const O=$&2?ye(te,[xe(r[1])]):{};!z&&$&1&&(z=!0,O.value=r[0],ht(()=>z=!1)),R.$set(O)},i(r){X||(K(v.$$.fragment,r),K(m.$$.fragment,r),K(E.$$.fragment,r),K(R.$$.fragment,r),X=!0)},o(r){J(v.$$.fragment,r),J(m.$$.fragment,r),J(E.$$.fragment,r),J(R.$$.fragment,r),X=!1},d(r){r&&s(t),W(v),W(m),W(E),W(R)}}}function It(_,t,l){const i={thumbColor:"var(--slate-blue-dim)",showNumber:!0,numSize:"var(--step--1)",step:"1",numColor:"var(--tx--1)"};let v=75;const d={use_decimal:!1,use_DPR:!1,fillSpace:!0,seeking:!0,bgColor:"none",colorFill:"#686766",colorStroke:"#8e8d8a44"};function b(g){v=g,l(0,v)}return[v,i,d,b]}class Tt extends Fe{constructor(t){super(),ze(this,t,It,kt,Se,{})}}function ut(_,t,l){const i=_.slice();return i[5]=t[l],i}function dt(_){let t,l=_[5].value+"",i,v;return{c(){t=c("span"),i=H(l),this.h()},l(d){t=p(d,"SPAN",{class:!0});var b=T(t);i=M(b,l),b.forEach(s),this.h()},h(){y(t,"class",v=ct(_[5].type)+" svelte-1bf7jv")},m(d,b){o(d,t,b),f(t,i)},p(d,b){b&1&&l!==(l=d[5].value+"")&&_t(i,l),b&1&&v!==(v=ct(d[5].type)+" svelte-1bf7jv")&&y(t,"class",v)},d(d){d&&s(t)}}}function Et(_){let t,l,i='<svg viewBox="-5 0 50 20" width="55px" height="24px" aria-hidden="true" class="svelte-1bf7jv"><circle r="5" cx="5" cy="10" fill="var(--slate-blue-dim)"></circle><circle r="5" cx="20" cy="10" fill="var(--slate-blue)"></circle><circle r="5" cx="35" cy="10" fill="var(--slate)"></circle></svg>',v,d,b,g=ft(_[1](_[0])),h=[];for(let m=0;m<g.length;m+=1)h[m]=dt(ut(_,g,m));return{c(){t=c("div"),l=c("div"),l.innerHTML=i,v=x(),d=c("pre"),b=c("code");for(let m=0;m<h.length;m+=1)h[m].c();this.h()},l(m){t=p(m,"DIV",{class:!0});var u=T(t);l=p(u,"DIV",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-1dq62u1"&&(l.innerHTML=i),v=C(u),d=p(u,"PRE",{tabindex:!0,class:!0});var n=T(d);b=p(n,"CODE",{class:!0});var w=T(b);for(let I=0;I<h.length;I+=1)h[I].l(w);w.forEach(s),n.forEach(s),u.forEach(s),this.h()},h(){y(l,"class","title combo top svelte-1bf7jv"),y(b,"class","svelte-1bf7jv"),y(d,"tabindex","0"),y(d,"class","combo bottom codeblock overflow-scrollbar svelte-1bf7jv"),y(t,"class","max-w pseudo-border radius svelte-1bf7jv")},m(m,u){o(m,t,u),f(t,l),f(t,v),f(t,d),f(d,b);for(let n=0;n<h.length;n+=1)h[n]&&h[n].m(b,null)},p(m,[u]){if(u&3){g=ft(m[1](m[0]));let n;for(n=0;n<g.length;n+=1){const w=ut(m,g,n);h[n]?h[n].p(w,u):(h[n]=dt(w),h[n].c(),h[n].m(b,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=g.length}},i:ot,o:ot,d(m){m&&s(t),vt(h,m)}}}const Ht=/\S+\s*/g;function Mt(_,t,l){let{content:i=""}=t,v=[];const d=g=>{const h=g.match(Ht);if(h)return h},b=g=>{let h=g.slice(0),m=h.shift(),u=[];return u.push({value:m,type:"program"}),h.forEach(n=>{let w={value:n,type:"space"};switch(!0){case n[0]=="-":w.type="option";break;case n[0]=="[":w.type="file";break;case(n[0]>="0"&&n[0]<="9"):w.type="number";break;default:w.type="default";break}u.push(w)}),u};return gt(()=>{l(2,i=i.trim()),l(0,v=d(i))}),_.$$set=g=>{"content"in g&&l(2,i=g.content)},[v,b,i]}class Pt extends Fe{constructor(t){super(),ze(this,t,Mt,Et,Se,{content:2})}}function Gt(_){let t,l="<span>Gif Scrubber</span>",i,v,d=`An inline video player that acts as a drop-in alternative to <code data-type="ext">GIFs</code>. It’s a pretty common
	pattern for ‘modernizing’ the old format, but I put a good chunk of time into getting it working how I wanted and
	added a couple progressive enhancements.`,b,g,h,m,u,n,w="Controls",I,E,F=`To keep everything minimal and mobile-friendly, I decided to make custom controls. A fixed button toggles play state\r
	and, when the container is grabbed, pointer events kick in to manage the timeline.`,ne,P,R,z,he="s.t.",S,A,X,Y,Z,B,ee,j,ve="Progress indicator",te,N,re=`The graphic is <s>shamelessly ripped from</s> <em class="txt-glow">inspired by</em> the countdown timer from
	iOS—it&#39;s compact and conveys pretty much exactly what it&#39;s doing (loop + time). I originally used an
	<code data-type="html" class="svelte-1bm5ykx">svg</code>
	but, following <em>several</em> failed remakes, I wasn&#39;t able to figure out the cause of janky transforms.`,r,$,D,G,se="canvas",O,ie,Ae,Oe,Ce,oe,we,ce,Ye=`I ended up doubling the dimensions (<em>i.e.</em> the rightmost canvas) to make it
	<em>super</em> crisp—<em>super</em> unnecessary! It <em>was</em> slightly sharper and there <em>wasn&#39;t</em> any noticeable
	impact on performance (only a single canvas is active/time), so I went with it.`,ke,Ie,Te,pe,Ze="Media Support",Ee,fe,et=`The quality/compression benefits video brings are really nice, but using them to replace <em>_real_</em> gifs comes with
	couple of tradeoffs:`,He,le,tt="<li>can&#39;t <em>hold-to-save</em> on mobile</li> <li>they aren&#39;t visible in reader mode</li> <li>playback support depends on browser + hardware features</li>",Me,ue,st=`To make a long story short, I address the last point by running a pre-build Python script to crawl my directory and
	generate <code data-type="ext">.webm</code> fallbacks where none exist. The <em class="txt-glow">magic</em> <code data-type="ext">ffmpeg</code> command I use to make a (hopefully) more compatible version looks like this:`,Pe,ae,Ge,Le,Re,L,qe,ge,lt="e.g.",Be,de,Ne,Ue,me,at=".h265",Ve,_e,nt="etc.",Qe,je;g=new wt({}),oe=new Tt({});const Ke=[_[0]];let Je={};for(let e=0;e<Ke.length;e+=1)Je=$e(Je,Ke[e]);return ae=new Pt({props:Je}),{c(){t=c("h1"),t.innerHTML=l,i=x(),v=c("p"),v.innerHTML=d,b=x(),U(g.$$.fragment),h=x(),m=c("hr"),u=x(),n=c("h3"),n.textContent=w,I=x(),E=c("p"),E.textContent=F,ne=x(),P=c("p"),R=H("It's set up "),z=c("em"),z.textContent=he,S=H(` moving a distance across the figure’s width is proportional to seeking that fraction of its\r
	video's duration. So to Red Blob Games for their in-depth article about\r
	`),A=c("a"),X=H("draggable objects"),Y=H(" and events—extremely helpful!"),Z=x(),B=c("hr"),ee=x(),j=c("h3"),j.textContent=ve,te=x(),N=c("p"),N.innerHTML=re,r=x(),$=c("p"),D=H("Switching over to a "),G=c("code"),G.textContent=se,O=H(` fixed that issue, but introduced another that gave it a\r
	blocky, aliased look on my phone. Thankfully, I learned browsers provide a fix for high dpi screens courtesy the\r
	`),ie=c("a"),Ae=H("device pixel ratio (DPR)"),Oe=H(", which can be queried and used as a resolution multiplier:"),Ce=x(),U(oe.$$.fragment),we=x(),ce=c("p"),ce.innerHTML=Ye,ke=x(),Ie=c("hr"),Te=x(),pe=c("h3"),pe.textContent=Ze,Ee=x(),fe=c("p"),fe.innerHTML=et,He=x(),le=c("ol"),le.innerHTML=tt,Me=x(),ue=c("p"),ue.innerHTML=st,Pe=x(),U(ae.$$.fragment),Ge=x(),Le=c("hr"),Re=x(),L=c("p"),qe=H("Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),ge=c("em"),ge.textContent=lt,Be=x(),de=c("a"),Ne=H("safari media fragment hack"),Ue=H(", no "),me=c("code"),me.textContent=at,Ve=H(` in\r
	FireFox, `),_e=c("em"),_e.textContent=nt,Qe=H("), but I'm pretty happy with how it turned out :)"),this.h()},l(e){t=p(e,"H1",{"data-svelte-h":!0}),k(t)!=="svelte-16mbdpp"&&(t.innerHTML=l),i=C(e),v=p(e,"P",{"data-svelte-h":!0}),k(v)!=="svelte-ln5zvg"&&(v.innerHTML=d),b=C(e),V(g.$$.fragment,e),h=C(e),m=p(e,"HR",{}),u=C(e),n=p(e,"H3",{"data-svelte-h":!0}),k(n)!=="svelte-pu7e26"&&(n.textContent=w),I=C(e),E=p(e,"P",{"data-svelte-h":!0}),k(E)!=="svelte-q6b5yg"&&(E.textContent=F),ne=C(e),P=p(e,"P",{});var a=T(P);R=M(a,"It's set up "),z=p(a,"EM",{"data-svelte-h":!0}),k(z)!=="svelte-hspnzd"&&(z.textContent=he),S=M(a,` moving a distance across the figure’s width is proportional to seeking that fraction of its\r
	video's duration. So to Red Blob Games for their in-depth article about\r
	`),A=p(a,"A",{href:!0,target:!0});var De=T(A);X=M(De,"draggable objects"),De.forEach(s),Y=M(a," and events—extremely helpful!"),a.forEach(s),Z=C(e),B=p(e,"HR",{}),ee=C(e),j=p(e,"H3",{"data-svelte-h":!0}),k(j)!=="svelte-lxue3i"&&(j.textContent=ve),te=C(e),N=p(e,"P",{"data-svelte-h":!0}),k(N)!=="svelte-n8fp47"&&(N.innerHTML=re),r=C(e),$=p(e,"P",{});var be=T($);D=M(be,"Switching over to a "),G=p(be,"CODE",{"data-type":!0,class:!0,"data-svelte-h":!0}),k(G)!=="svelte-jhma2z"&&(G.textContent=se),O=M(be,` fixed that issue, but introduced another that gave it a\r
	blocky, aliased look on my phone. Thankfully, I learned browsers provide a fix for high dpi screens courtesy the\r
	`),ie=p(be,"A",{href:!0,target:!0});var rt=T(ie);Ae=M(rt,"device pixel ratio (DPR)"),rt.forEach(s),Oe=M(be,", which can be queried and used as a resolution multiplier:"),be.forEach(s),Ce=C(e),V(oe.$$.fragment,e),we=C(e),ce=p(e,"P",{"data-svelte-h":!0}),k(ce)!=="svelte-10d4d2w"&&(ce.innerHTML=Ye),ke=C(e),Ie=p(e,"HR",{}),Te=C(e),pe=p(e,"H3",{"data-svelte-h":!0}),k(pe)!=="svelte-ejqcuf"&&(pe.textContent=Ze),Ee=C(e),fe=p(e,"P",{"data-svelte-h":!0}),k(fe)!=="svelte-bn07u1"&&(fe.innerHTML=et),He=C(e),le=p(e,"OL",{role:!0,"data-svelte-h":!0}),k(le)!=="svelte-31bwzl"&&(le.innerHTML=tt),Me=C(e),ue=p(e,"P",{"data-svelte-h":!0}),k(ue)!=="svelte-1vtztio"&&(ue.innerHTML=st),Pe=C(e),V(ae.$$.fragment,e),Ge=C(e),Le=p(e,"HR",{}),Re=C(e),L=p(e,"P",{});var q=T(L);qe=M(q,"Getting to a point where the behavior felt predictable took a lot more effort than I expected ("),ge=p(q,"EM",{"data-svelte-h":!0}),k(ge)!=="svelte-2dbwd4"&&(ge.textContent=lt),Be=C(q),de=p(q,"A",{href:!0,target:!0});var it=T(de);Ne=M(it,"safari media fragment hack"),it.forEach(s),Ue=M(q,", no "),me=p(q,"CODE",{"data-type":!0,"data-svelte-h":!0}),k(me)!=="svelte-1lul1jc"&&(me.textContent=at),Ve=M(q,` in\r
	FireFox, `),_e=p(q,"EM",{"data-svelte-h":!0}),k(_e)!=="svelte-ynskcq"&&(_e.textContent=nt),Qe=M(q,"), but I'm pretty happy with how it turned out :)"),q.forEach(s),this.h()},h(){y(A,"href",Lt),y(A,"target",Xe),y(G,"data-type","html"),y(G,"class","svelte-1bm5ykx"),y(ie,"href",Rt),y(ie,"target",Xe),y(le,"role","list"),y(de,"href",jt),y(de,"target",Xe),y(me,"data-type","ext")},m(e,a){o(e,t,a),o(e,i,a),o(e,v,a),o(e,b,a),Q(g,e,a),o(e,h,a),o(e,m,a),o(e,u,a),o(e,n,a),o(e,I,a),o(e,E,a),o(e,ne,a),o(e,P,a),f(P,R),f(P,z),f(P,S),f(P,A),f(A,X),f(P,Y),o(e,Z,a),o(e,B,a),o(e,ee,a),o(e,j,a),o(e,te,a),o(e,N,a),o(e,r,a),o(e,$,a),f($,D),f($,G),f($,O),f($,ie),f(ie,Ae),f($,Oe),o(e,Ce,a),Q(oe,e,a),o(e,we,a),o(e,ce,a),o(e,ke,a),o(e,Ie,a),o(e,Te,a),o(e,pe,a),o(e,Ee,a),o(e,fe,a),o(e,He,a),o(e,le,a),o(e,Me,a),o(e,ue,a),o(e,Pe,a),Q(ae,e,a),o(e,Ge,a),o(e,Le,a),o(e,Re,a),o(e,L,a),f(L,qe),f(L,ge),f(L,Be),f(L,de),f(de,Ne),f(L,Ue),f(L,me),f(L,Ve),f(L,_e),f(L,Qe),je=!0},p(e,[a]){const De=a&1?ye(Ke,[xe(e[0])]):{};ae.$set(De)},i(e){je||(K(g.$$.fragment,e),K(oe.$$.fragment,e),K(ae.$$.fragment,e),je=!0)},o(e){J(g.$$.fragment,e),J(oe.$$.fragment,e),J(ae.$$.fragment,e),je=!1},d(e){e&&(s(t),s(i),s(v),s(b),s(h),s(m),s(u),s(n),s(I),s(E),s(ne),s(P),s(Z),s(B),s(ee),s(j),s(te),s(N),s(r),s($),s(Ce),s(we),s(ce),s(ke),s(Ie),s(Te),s(pe),s(Ee),s(fe),s(He),s(le),s(Me),s(ue),s(Pe),s(Ge),s(Le),s(Re),s(L)),W(g,e),W(oe,e),W(ae,e)}}}const Xe="_blank",Lt="https://www.redblobgames.com/making-of/draggable/",Rt="https://cloudinary.com/glossary/device-pixel-ratio",jt="https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/";function Dt(_){return[{content:"ffmpeg -i [input.mp4] -pix_fmt yuv420p -c:v libvpx-vp9 -threads 8 -crf 40 -g 32 -deadline good -an [output.webm]"}]}class Bt extends Fe{constructor(t){super(),ze(this,t,Dt,Gt,Se,{})}}export{Bt as component};