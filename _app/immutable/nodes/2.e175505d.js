import{J as or,K as Er,S as ue,i as fe,s as pe,k as n,q as v,a as k,l as o,m as d,r as m,h as l,c as P,n as a,b as X,G as e,H as le,L as We,M as _e,p as be,N as ir,O as mr,P as Qe,y as oe,Q as Ze,z as me,R as ie,A as ce,g as F,d as Y,B as de,u as Lt,v as ct,f as dt,x as cr,e as ot,T as yr,U as Ir,V as br,W as $r,X as wr,o as kr}from"../chunks/index.6f553760.js";const Pr=!0,oa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Pr},Symbol.toStringTag,{value:"Module"}));function gr(w){const t=w-1;return t*t*t+1}function it(w,{delay:t=0,duration:r=400,easing:s=Er}={}){const h=+getComputedStyle(w).opacity;return{delay:t,duration:r,easing:s,css:i=>`opacity: ${i*h}`}}function Fe(w,{delay:t=0,duration:r=400,easing:s=gr,x:h=0,y:i=0,opacity:p=0}={}){const u=getComputedStyle(w),c=+u.opacity,f=u.transform==="none"?"":u.transform,g=c*(1-p),[T,$]=or(h),[S,A]=or(i);return{delay:t,duration:r,easing:s,css:(b,E)=>`
			transform: ${f} translate(${(1-b)*T}${$}, ${(1-b)*S}${A});
			opacity: ${c-g*E}`}}function dr(w,{delay:t=0,duration:r=400,easing:s=gr,axis:h="y"}={}){const i=getComputedStyle(w),p=+i.opacity,u=h==="y"?"height":"width",c=parseFloat(i[u]),f=h==="y"?["top","bottom"]:["left","right"],g=f.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`),T=parseFloat(i[`padding${g[0]}`]),$=parseFloat(i[`padding${g[1]}`]),S=parseFloat(i[`margin${g[0]}`]),A=parseFloat(i[`margin${g[1]}`]),b=parseFloat(i[`border${g[0]}Width`]),E=parseFloat(i[`border${g[1]}Width`]);return{delay:t,duration:r,easing:s,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*p};${u}: ${y*c}px;padding-${f[0]}: ${y*T}px;padding-${f[1]}: ${y*$}px;margin-${f[0]}: ${y*S}px;margin-${f[1]}: ${y*A}px;border-${f[0]}-width: ${y*b}px;border-${f[1]}-width: ${y*E}px;`}}function Sr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G;return{c(){t=n("div"),r=n("h1"),s=v("About"),h=k(),i=n("div"),p=n("p"),u=v("Hi! My name's "),c=n("span"),f=v("Patrick"),g=v("."),T=k(),$=n("p"),S=v("I like learning about graphics, games, and multimedia in general."),A=k(),b=n("p"),E=v("I graduated from UMBC with a degree in computer science and am currently looking for an entry level position."),this.h()},l(M){t=o(M,"DIV",{class:!0});var D=d(t);r=o(D,"H1",{class:!0});var V=d(r);s=m(V,"About"),V.forEach(l),h=P(D),i=o(D,"DIV",{});var C=d(i);p=o(C,"P",{});var I=d(p);u=m(I,"Hi! My name's "),c=o(I,"SPAN",{id:!0,class:!0});var _=d(c);f=m(_,"Patrick"),_.forEach(l),g=m(I,"."),I.forEach(l),T=P(C),$=o(C,"P",{});var N=d($);S=m(N,"I like learning about graphics, games, and multimedia in general."),N.forEach(l),A=P(C),b=o(C,"P",{});var R=d(b);E=m(R,"I graduated from UMBC with a degree in computer science and am currently looking for an entry level position."),R.forEach(l),C.forEach(l),D.forEach(l),this.h()},h(){a(r,"class","outlined-text"),a(c,"id","name"),a(c,"class","svelte-1ecfdjn"),a(t,"class","body-section")},m(M,D){X(M,t,D),e(t,r),e(r,s),e(t,h),e(t,i),e(i,p),e(p,u),e(p,c),e(c,f),e(p,g),e(i,T),e(i,$),e($,S),e(i,A),e(i,b),e(b,E),G=!0},p:le,i(M){G||(We(()=>{G&&(y||(y=_e(i,it,{duration:1e3},!0)),y.run(1))}),G=!0)},o(M){y||(y=_e(i,it,{duration:1e3},!1)),y.run(0),G=!1},d(M){M&&l(t),M&&y&&y.end()}}}class Nr extends ue{constructor(t){super(),fe(this,t,null,Sr,pe,{})}}function Mr(w){let t,r,s,h,i,p;return{c(){t=n("div"),r=n("h1"),s=v("Projects"),h=k(),i=n("p"),p=v("Here are some things I've made."),this.h()},l(u){t=o(u,"DIV",{class:!0});var c=d(t);r=o(c,"H1",{class:!0});var f=d(r);s=m(f,"Projects"),f.forEach(l),h=P(c),i=o(c,"P",{style:!0});var g=d(i);p=m(g,"Here are some things I've made."),g.forEach(l),c.forEach(l),this.h()},h(){a(r,"class","outlined-text"),be(i,"text-align","left"),be(i,"margin-bottom","1em"),a(t,"class","body-section")},m(u,c){X(u,t,c),e(t,r),e(r,s),e(t,h),e(t,i),e(i,p)},p:le,i:le,o:le,d(u){u&&l(t)}}}class Tr extends ue{constructor(t){super(),fe(this,t,null,Mr,pe,{})}}function Dr(w){let t,r,s,h,i,p,u,c,f,g,T;return{c(){t=n("button"),r=n("p"),s=v("WEB4 NFT CRYPTO AI"),h=k(),i=n("p"),p=v("THE AUGMENTED METAVERSE EXPERIENCE"),u=k(),c=n("p"),f=v("ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),this.h()},l($){t=o($,"BUTTON",{class:!0});var S=d(t);r=o(S,"P",{id:!0,class:!0});var A=d(r);s=m(A,"WEB4 NFT CRYPTO AI"),A.forEach(l),h=P(S),i=o(S,"P",{id:!0,class:!0});var b=d(i);p=m(b,"THE AUGMENTED METAVERSE EXPERIENCE"),b.forEach(l),u=P(S),c=o(S,"P",{id:!0,class:!0});var E=d(c);f=m(E,"ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),E.forEach(l),S.forEach(l),this.h()},h(){a(r,"id","top"),a(r,"class","svelte-121o3n2"),a(i,"id","mid"),a(i,"class","svelte-121o3n2"),a(c,"id","bot"),a(c,"class","svelte-121o3n2"),a(t,"class","svelte-121o3n2"),ir(t,"speaking",w[0])},m($,S){X($,t,S),e(t,r),e(r,s),e(t,h),e(t,i),e(i,p),e(t,u),e(t,c),e(c,f),g||(T=mr(t,"click",w[1]),g=!0)},p($,[S]){S&1&&ir(t,"speaking",$[0])},i:le,o:le,d($){$&&l(t),g=!1,T()}}}const Ar="WEB4 NFT CRYPTO AI:        THE AUGMENTED METAVERSE EXPERIENCE.         ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9. REMASTERED.";function Gr(w,t,r){let s=!1;const h=window.speechSynthesis;function i(){if(h.speaking){r(0,s=!1),h.cancel();return}const p=h.getVoices();let u=Math.random()*3,c=Math.floor(Math.random()*p.length);const f=new SpeechSynthesisUtterance(Ar);f.voice=p[c],f.pitch=u,f.lang="en-US",h.speak(f),r(0,s=!0),f.onend=g=>{r(0,s=!1)}}return[s,i,h]}class Rr extends ue{constructor(t){super(),fe(this,t,Gr,Dr,pe,{synth:2})}get synth(){return this.$$.ctx[2]}}function Cr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C,I,_,N,R,j,x,O,U,L,z,W,J,ne,Z,Ee,ye,K,te,q,he,H,ee,re,ae,Ie,we,ve,B,ke,Pe,Se,$e,Le,ut,ft,pt,Ce,je,ht,vt,mt,Ve,Ue,gt,_t,Et,Ne,Me,jt,yt,Te,Ut,It,Oe,xe,bt,De,Xe,$t,Ae,He,ze,wt,kt,Ke,Ge,Pt,Je,St,Nt,Mt,qe,Tt,et;return xe=new Rr({}),{c(){t=Qe("svg"),r=Qe("filter"),s=Qe("feConvolveMatrix"),h=k(),i=n("div"),p=n("img"),c=k(),f=n("div"),g=n("div"),T=n("span"),$=v("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),S=k(),A=n("span"),b=v("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),E=k(),y=n("span"),G=v("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),M=k(),D=n("span"),V=v("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),C=k(),I=n("div"),_=n("div"),N=n("div"),R=k(),j=n("div"),x=n("img"),U=k(),L=n("div"),z=n("hr"),W=k(),J=n("p"),ne=n("span"),Z=v("ISS:"),Ee=v(w[0]),ye=k(),K=n("p"),te=n("span"),q=v("LOC:"),he=v("MD, USA"),H=k(),ee=n("p"),re=n("span"),ae=v("EDU:"),Ie=v("B.S."),we=k(),ve=n("p"),B=n("span"),ke=v("AGE:"),Pe=v("13-54"),Se=k(),$e=n("p"),Le=n("span"),ut=v("EYE:"),ft=v("BRN"),pt=k(),Ce=n("p"),je=n("span"),ht=v("HAND:"),vt=v("RGT"),mt=k(),Ve=n("p"),Ue=n("span"),gt=v("MENTAL:"),_t=v("HEALTH!"),Et=k(),Ne=n("div"),Me=n("img"),yt=k(),Te=n("img"),It=k(),Oe=n("div"),oe(xe.$$.fragment),bt=k(),De=n("div"),Xe=n("hr"),$t=k(),Ae=n("ul"),He=n("li"),ze=n("span"),wt=v("good at DDR, moira main, dairy and egg allergy haver(hates cookies.)"),kt=k(),Ke=n("li"),Ge=n("span"),Pt=v("A real human person who wants to work, specifically, for "),Je=n("em"),St=v("YOU!"),Nt=v(" :)"),Mt=k(),qe=n("div"),Tt=v("NO_UNAUTH_SALE"),this.h()},l(se){t=Ze(se,"svg",{style:!0});var Be=d(t);r=Ze(Be,"filter",{id:!0});var Ot=d(r);s=Ze(Ot,"feConvolveMatrix",{kernelMatrix:!0}),d(s).forEach(l),Ot.forEach(l),Be.forEach(l),h=P(se),i=o(se,"DIV",{class:!0});var ge=d(i);p=o(ge,"IMG",{class:!0,src:!0,alt:!0}),c=P(ge),f=o(ge,"DIV",{class:!0});var Ht=d(f);g=o(Ht,"DIV",{class:!0});var Re=d(g);T=o(Re,"SPAN",{class:!0});var zt=d(T);$=m(zt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),zt.forEach(l),S=P(Re),A=o(Re,"SPAN",{class:!0});var Kt=d(A);b=m(Kt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Kt.forEach(l),E=P(Re),y=o(Re,"SPAN",{class:!0});var qt=d(y);G=m(qt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),qt.forEach(l),M=P(Re),D=o(Re,"SPAN",{class:!0});var Bt=d(D);V=m(Bt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Bt.forEach(l),Re.forEach(l),Ht.forEach(l),C=P(ge),I=o(ge,"DIV",{class:!0});var tt=d(I);_=o(tt,"DIV",{id:!0,class:!0});var rt=d(_);N=o(rt,"DIV",{id:!0,class:!0});var _r=d(N);_r.forEach(l),R=P(rt),j=o(rt,"DIV",{id:!0,class:!0});var Ft=d(j);x=o(Ft,"IMG",{id:!0,src:!0,alt:!0,class:!0}),Ft.forEach(l),rt.forEach(l),U=P(tt),L=o(tt,"DIV",{class:!0});var Q=d(L);z=o(Q,"HR",{class:!0}),W=P(Q),J=o(Q,"P",{class:!0});var Dt=d(J);ne=o(Dt,"SPAN",{class:!0});var Wt=d(ne);Z=m(Wt,"ISS:"),Wt.forEach(l),Ee=m(Dt,w[0]),Dt.forEach(l),ye=P(Q),K=o(Q,"P",{class:!0});var At=d(K);te=o(At,"SPAN",{class:!0});var Yt=d(te);q=m(Yt,"LOC:"),Yt.forEach(l),he=m(At,"MD, USA"),At.forEach(l),H=P(Q),ee=o(Q,"P",{class:!0});var Gt=d(ee);re=o(Gt,"SPAN",{class:!0});var Xt=d(re);ae=m(Xt,"EDU:"),Xt.forEach(l),Ie=m(Gt,"B.S."),Gt.forEach(l),we=P(Q),ve=o(Q,"P",{class:!0});var Rt=d(ve);B=o(Rt,"SPAN",{class:!0});var Jt=d(B);ke=m(Jt,"AGE:"),Jt.forEach(l),Pe=m(Rt,"13-54"),Rt.forEach(l),Se=P(Q),$e=o(Q,"P",{class:!0});var Ct=d($e);Le=o(Ct,"SPAN",{class:!0});var Qt=d(Le);ut=m(Qt,"EYE:"),Qt.forEach(l),ft=m(Ct,"BRN"),Ct.forEach(l),pt=P(Q),Ce=o(Q,"P",{class:!0});var Vt=d(Ce);je=o(Vt,"SPAN",{class:!0});var Zt=d(je);ht=m(Zt,"HAND:"),Zt.forEach(l),vt=m(Vt,"RGT"),Vt.forEach(l),mt=P(Q),Ve=o(Q,"P",{class:!0});var xt=d(Ve);Ue=o(xt,"SPAN",{class:!0});var er=d(Ue);gt=m(er,"MENTAL:"),er.forEach(l),_t=m(xt,"HEALTH!"),xt.forEach(l),Et=P(Q),Ne=o(Q,"DIV",{id:!0,class:!0});var at=d(Ne);Me=o(at,"IMG",{id:!0,src:!0,alt:!0,class:!0}),yt=P(at),Te=o(at,"IMG",{id:!0,src:!0,alt:!0,class:!0}),at.forEach(l),Q.forEach(l),tt.forEach(l),It=P(ge),Oe=o(ge,"DIV",{class:!0});var tr=d(Oe);me(xe.$$.fragment,tr),tr.forEach(l),bt=P(ge),De=o(ge,"DIV",{class:!0});var st=d(De);Xe=o(st,"HR",{id:!0,class:!0}),$t=P(st),Ae=o(st,"UL",{class:!0});var lt=d(Ae);He=o(lt,"LI",{class:!0});var rr=d(He);ze=o(rr,"SPAN",{class:!0});var ar=d(ze);wt=m(ar,"good at DDR, moira main, dairy and egg allergy haver(hates cookies.)"),ar.forEach(l),rr.forEach(l),kt=P(lt),Ke=o(lt,"LI",{class:!0});var sr=d(Ke);Ge=o(sr,"SPAN",{class:!0});var nt=d(Ge);Pt=m(nt,"A real human person who wants to work, specifically, for "),Je=o(nt,"EM",{});var lr=d(Je);St=m(lr,"YOU!"),lr.forEach(l),Nt=m(nt," :)"),nt.forEach(l),sr.forEach(l),lt.forEach(l),st.forEach(l),Mt=P(ge),qe=o(ge,"DIV",{class:!0});var nr=d(qe);Tt=m(nr,"NO_UNAUTH_SALE"),nr.forEach(l),ge.forEach(l),this.h()},h(){a(s,"kernelMatrix",`1 -1 1 \r
          1 -2 -8 \r
          1 20 -4`),a(r,"id","convolve"),be(t,"display","none"),a(p,"class","bg-card svelte-ngryod"),ie(p.src,u="/img/planet1.png")||a(p,"src",u),a(p,"alt","bg-img"),a(T,"class","svelte-ngryod"),a(A,"class","svelte-ngryod"),a(y,"class","svelte-ngryod"),a(D,"class","svelte-ngryod"),a(g,"class","marquee__inner svelte-ngryod"),a(f,"class","marquee svelte-ngryod"),a(N,"id","filter-div"),a(N,"class","svelte-ngryod"),a(x,"id","static"),ie(x.src,O="/img/bw_portrait.png")||a(x,"src",O),a(x,"alt","bw_portrait"),a(x,"class","svelte-ngryod"),a(j,"id","hover-target"),a(j,"class","svelte-ngryod"),a(_,"id","pfp"),a(_,"class","svelte-ngryod"),a(z,"class","svelte-ngryod"),a(ne,"class","svelte-ngryod"),a(J,"class","svelte-ngryod"),a(te,"class","svelte-ngryod"),a(K,"class","svelte-ngryod"),a(re,"class","svelte-ngryod"),a(ee,"class","svelte-ngryod"),a(B,"class","svelte-ngryod"),a(ve,"class","svelte-ngryod"),a(Le,"class","svelte-ngryod"),a($e,"class","svelte-ngryod"),a(je,"class","svelte-ngryod"),a(Ce,"class","svelte-ngryod"),a(Ue,"class","svelte-ngryod"),a(Ve,"class","svelte-ngryod"),a(Me,"id","spinner"),ie(Me.src,jt="/img/verified_1.png")||a(Me,"src",jt),a(Me,"alt","spinning verified"),a(Me,"class","svelte-ngryod"),a(Te,"id","badge"),ie(Te.src,Ut="/img/Greater_coat_of_arms.png")||a(Te,"src",Ut),a(Te,"alt","badge"),a(Te,"class","svelte-ngryod"),a(Ne,"id","badge_container"),a(Ne,"class","svelte-ngryod"),a(L,"class","stats svelte-ngryod"),a(I,"class","bio svelte-ngryod"),a(Oe,"class","tts-button svelte-ngryod"),a(Xe,"id","break"),a(Xe,"class","svelte-ngryod"),a(ze,"class","svelte-ngryod"),a(He,"class","svelte-ngryod"),a(Ge,"class","svelte-ngryod"),a(Ke,"class","svelte-ngryod"),a(Ae,"class","svelte-ngryod"),a(De,"class","facts svelte-ngryod"),a(qe,"class","barcode svelte-ngryod"),a(i,"class","card-wrapper svelte-ngryod")},m(se,Be){X(se,t,Be),e(t,r),e(r,s),X(se,h,Be),X(se,i,Be),e(i,p),e(i,c),e(i,f),e(f,g),e(g,T),e(T,$),e(g,S),e(g,A),e(A,b),e(g,E),e(g,y),e(y,G),e(g,M),e(g,D),e(D,V),e(i,C),e(i,I),e(I,_),e(_,N),e(_,R),e(_,j),e(j,x),e(I,U),e(I,L),e(L,z),e(L,W),e(L,J),e(J,ne),e(ne,Z),e(J,Ee),e(L,ye),e(L,K),e(K,te),e(te,q),e(K,he),e(L,H),e(L,ee),e(ee,re),e(re,ae),e(ee,Ie),e(L,we),e(L,ve),e(ve,B),e(B,ke),e(ve,Pe),e(L,Se),e(L,$e),e($e,Le),e(Le,ut),e($e,ft),e(L,pt),e(L,Ce),e(Ce,je),e(je,ht),e(Ce,vt),e(L,mt),e(L,Ve),e(Ve,Ue),e(Ue,gt),e(Ve,_t),e(L,Et),e(L,Ne),e(Ne,Me),e(Ne,yt),e(Ne,Te),e(i,It),e(i,Oe),ce(xe,Oe,null),e(i,bt),e(i,De),e(De,Xe),e(De,$t),e(De,Ae),e(Ae,He),e(He,ze),e(ze,wt),e(Ae,kt),e(Ae,Ke),e(Ke,Ge),e(Ge,Pt),e(Ge,Je),e(Je,St),e(Ge,Nt),e(i,Mt),e(i,qe),e(qe,Tt),et=!0},p:le,i(se){et||(F(xe.$$.fragment,se),et=!0)},o(se){Y(xe.$$.fragment,se),et=!1},d(se){se&&l(t),se&&l(h),se&&l(i),de(xe)}}}function Vr(w){let t=new Date;var r=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),h=String(t.getFullYear()).slice(-2);let i=s+"/"+r+"/"+h;return console.log(i),[i]}class xr extends ue{constructor(t){super(),fe(this,t,Vr,Cr,pe,{})}}function ur(w){let t,r,s,h,i,p;var u=w[4];function c(f){return{}}return u&&(s=cr(u,c())),{c(){t=n("div"),r=n("div"),s&&oe(s.$$.fragment),this.h()},l(f){t=o(f,"DIV",{class:!0});var g=d(t);r=o(g,"DIV",{});var T=d(r);s&&me(s.$$.fragment,T),T.forEach(l),g.forEach(l),this.h()},h(){a(t,"class","panel svelte-wfjjxz")},m(f,g){X(f,t,g),e(t,r),s&&ce(s,r,null),p=!0},p(f,g){if(g&16&&u!==(u=f[4])){if(s){ct();const T=s;Y(T.$$.fragment,1,0,()=>{de(T,1)}),dt()}u?(s=cr(u,c()),oe(s.$$.fragment),F(s.$$.fragment,1),ce(s,r,null)):s=null}},i(f){p||(s&&F(s.$$.fragment,f),We(()=>{p&&(h||(h=_e(r,it,{},!0)),h.run(1))}),We(()=>{p&&(i||(i=_e(t,dr,{duration:700},!0)),i.run(1))}),p=!0)},o(f){s&&Y(s.$$.fragment,f),h||(h=_e(r,it,{},!1)),h.run(0),i||(i=_e(t,dr,{duration:700},!1)),i.run(0),p=!1},d(f){f&&l(t),s&&de(s),f&&h&&h.end(),f&&i&&i.end()}}}function Lr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C,I=w[0]&&ur(w);return{c(){t=n("div"),r=n("button"),s=n("h3"),h=v(w[1]),i=k(),p=n("h4"),u=v(w[2]),c=k(),f=n("div"),g=n("h6"),T=v("["),$=v(w[3]),S=v("]"),A=k(),b=n("span"),E=Qe("svg"),y=Qe("path"),G=k(),M=n("article"),I&&I.c(),this.h()},l(_){t=o(_,"DIV",{class:!0,"aria-expanded":!0});var N=d(t);r=o(N,"BUTTON",{class:!0});var R=d(r);s=o(R,"H3",{});var j=d(s);h=m(j,w[1]),j.forEach(l),i=P(R),p=o(R,"H4",{class:!0});var x=d(p);u=m(x,w[2]),x.forEach(l),c=P(R),f=o(R,"DIV",{class:!0});var O=d(f);g=o(O,"H6",{class:!0});var U=d(g);T=m(U,"["),$=m(U,w[3]),S=m(U,"]"),U.forEach(l),A=P(O),b=o(O,"SPAN",{class:!0,"aria-expanded":!0});var L=d(b);E=Ze(L,"svg",{style:!0,width:!0,height:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,viewBox:!0,stroke:!0,class:!0});var z=d(E);y=Ze(z,"path",{d:!0}),d(y).forEach(l),z.forEach(l),L.forEach(l),O.forEach(l),R.forEach(l),G=P(N),M=o(N,"ARTICLE",{});var W=d(M);I&&I.l(W),W.forEach(l),N.forEach(l),this.h()},h(){a(p,"class","subtitle svelte-wfjjxz"),a(g,"class","date svelte-wfjjxz"),a(y,"d","M9 5l7 7-7 7"),a(E,"style","tran"),a(E,"width","20"),a(E,"height","20"),a(E,"fill","none"),a(E,"stroke-linecap","round"),a(E,"stroke-linejoin","round"),a(E,"stroke-width","3"),a(E,"viewBox","0 0 24 24"),a(E,"stroke","currentColor"),a(E,"class","svelte-wfjjxz"),a(b,"class","arrow_right svelte-wfjjxz"),a(b,"aria-expanded",w[0]),a(f,"class","right_hand svelte-wfjjxz"),a(r,"class","heading gradient svelte-wfjjxz"),a(t,"class","container svelte-wfjjxz"),a(t,"aria-expanded",w[0])},m(_,N){X(_,t,N),e(t,r),e(r,s),e(s,h),e(r,i),e(r,p),e(p,u),e(r,c),e(r,f),e(f,g),e(g,T),e(g,$),e(g,S),e(f,A),e(f,b),e(b,E),e(E,y),e(t,G),e(t,M),I&&I.m(M,null),D=!0,V||(C=mr(r,"click",w[5]),V=!0)},p(_,[N]){(!D||N&2)&&Lt(h,_[1]),(!D||N&4)&&Lt(u,_[2]),(!D||N&8)&&Lt($,_[3]),(!D||N&1)&&a(b,"aria-expanded",_[0]),_[0]?I?(I.p(_,N),N&1&&F(I,1)):(I=ur(_),I.c(),F(I,1),I.m(M,null)):I&&(ct(),Y(I,1,1,()=>{I=null}),dt()),(!D||N&1)&&a(t,"aria-expanded",_[0])},i(_){D||(F(I),D=!0)},o(_){Y(I),D=!1},d(_){_&&l(t),I&&I.d(),V=!1,C()}}}function jr(w,t,r){let{title:s=""}=t,{subtitle:h=""}=t,{date:i=""}=t,{component:p}=t,{open:u=!1}=t;function c(){r(0,u=!u)}return w.$$set=f=>{"title"in f&&r(1,s=f.title),"subtitle"in f&&r(2,h=f.subtitle),"date"in f&&r(3,i=f.date),"component"in f&&r(4,p=f.component),"open"in f&&r(0,u=f.open)},[u,s,h,i,p,c]}class Ur extends ue{constructor(t){super(),fe(this,t,jr,Lr,pe,{title:1,subtitle:2,date:3,component:4,open:0})}}function Or(w){let t,r,s,h,i,p,u;return{c(){t=n("div"),r=n("img"),h=k(),i=n("a"),p=v("view repo"),this.h()},l(c){t=o(c,"DIV",{class:!0});var f=d(t);r=o(f,"IMG",{src:!0,alt:!0,class:!0}),h=P(f),i=o(f,"A",{href:!0,target:!0,class:!0});var g=d(i);p=m(g,"view repo"),g.forEach(l),f.forEach(l),this.h()},h(){ie(r.src,s="/img/github-mark-white.png")||a(r,"src",s),a(r,"alt","github logo"),a(r,"class","svelte-1aiktrt"),a(i,"href",u=fr+w[0]),a(i,"target","_blank"),a(i,"class","svelte-1aiktrt"),a(t,"class","gh-link svelte-1aiktrt")},m(c,f){X(c,t,f),e(t,r),e(t,h),e(t,i),e(i,p)},p(c,[f]){f&1&&u!==(u=fr+c[0])&&a(i,"href",u)},i:le,o:le,d(c){c&&l(t)}}}const fr="https://github.com/pnwheeler/";function Hr(w,t,r){let{link:s=""}=t;return w.$$set=h=>{"link"in h&&r(0,s=h.link)},[s]}class Ye extends ue{constructor(t){super(),fe(this,t,Hr,Or,pe,{link:0})}}function zr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C,I,_,N,R,j,x,O,U,L,z,W,J,ne,Z,Ee,ye,K,te;return K=new Ye({props:{link:"drug-generator"}}),{c(){t=n("div"),r=n("div"),s=n("p"),h=v("I love drug names. They dont "),i=n("em"),p=v("mean"),u=v(" anything, but they "),c=n("em"),f=v("sound"),g=v(" like they almost could."),T=k(),$=n("img"),A=k(),b=n("p"),E=v("[Performing "),y=n("em"),G=v("market research"),M=v(".]"),D=k(),V=n("p"),C=v(`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). The names were one hot encoded, split into subsequences, batched up, and shuffled around.`),I=k(),_=n("p"),N=v("I ("),R=n("small"),j=v("somewhat arbitrarily"),x=v(`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),O=n("small"),U=v("again, somewhat arbitrarily"),L=v(`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),z=n("a"),W=v("names"),J=v(`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),ne=k(),Z=n("p"),Ee=v("Written in Python using pandas and TensorFlow."),ye=k(),oe(K.$$.fragment),this.h()},l(q){t=o(q,"DIV",{class:!0});var he=d(t);r=o(he,"DIV",{class:!0});var H=d(r);s=o(H,"P",{});var ee=d(s);h=m(ee,"I love drug names. They dont "),i=o(ee,"EM",{});var re=d(i);p=m(re,"mean"),re.forEach(l),u=m(ee," anything, but they "),c=o(ee,"EM",{});var ae=d(c);f=m(ae,"sound"),ae.forEach(l),g=m(ee," like they almost could."),ee.forEach(l),T=P(H),$=o(H,"IMG",{src:!0,alt:!0}),A=P(H),b=o(H,"P",{class:!0,style:!0});var Ie=d(b);E=m(Ie,"[Performing "),y=o(Ie,"EM",{});var we=d(y);G=m(we,"market research"),we.forEach(l),M=m(Ie,".]"),Ie.forEach(l),D=P(H),V=o(H,"P",{});var ve=d(V);C=m(ve,`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). The names were one hot encoded, split into subsequences, batched up, and shuffled around.`),ve.forEach(l),I=P(H),_=o(H,"P",{});var B=d(_);N=m(B,"I ("),R=o(B,"SMALL",{});var ke=d(R);j=m(ke,"somewhat arbitrarily"),ke.forEach(l),x=m(B,`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),O=o(B,"SMALL",{});var Pe=d(O);U=m(Pe,"again, somewhat arbitrarily"),Pe.forEach(l),L=m(B,`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),z=o(B,"A",{href:!0,target:!0});var Se=d(z);W=m(Se,"names"),Se.forEach(l),J=m(B,`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),B.forEach(l),ne=P(H),Z=o(H,"P",{class:!0});var $e=d(Z);Ee=m($e,"Written in Python using pandas and TensorFlow."),$e.forEach(l),ye=P(H),me(K.$$.fragment,H),H.forEach(l),he.forEach(l),this.h()},h(){ie($.src,S="img/drug_namer.gif")||a($,"src",S),a($,"alt","generating drugs gif"),a(b,"class","caption"),be(b,"text-align","center"),a(z,"href","https://github.com/pnwheeler/drug-generator/blob/main/fake_drugs.txt"),a(z,"target","_blank"),a(Z,"class","made-with"),a(r,"class","desc"),a(t,"class","desc-wrapper")},m(q,he){X(q,t,he),e(t,r),e(r,s),e(s,h),e(s,i),e(i,p),e(s,u),e(s,c),e(c,f),e(s,g),e(r,T),e(r,$),e(r,A),e(r,b),e(b,E),e(b,y),e(y,G),e(b,M),e(r,D),e(r,V),e(V,C),e(r,I),e(r,_),e(_,N),e(_,R),e(R,j),e(_,x),e(_,O),e(O,U),e(_,L),e(_,z),e(z,W),e(_,J),e(r,ne),e(r,Z),e(Z,Ee),e(r,ye),ce(K,r,null),te=!0},p:le,i(q){te||(F(K.$$.fragment,q),te=!0)},o(q){Y(K.$$.fragment,q),te=!1},d(q){q&&l(t),de(K)}}}class Kr extends ue{constructor(t){super(),fe(this,t,null,zr,pe,{})}}function qr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C,I,_;return I=new Ye({props:{link:"TRIMCROP"}}),{c(){t=n("div"),r=n("div"),s=n("img"),i=k(),p=n("div"),u=n("p"),c=v(`Sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software. Gave me a good excuse to play around with Qt.`),f=k(),g=n("p"),T=v("Created the interface (which is basically a media player + some overlays) with QML, and used C++ to plug it up to ffmpeg."),$=k(),S=n("p"),A=v("It's a bit janky, but I still find myself using it a decent amount."),b=k(),E=n("div"),y=n("p"),G=v("[Demoing on a video I took of Jojo having a bad dream >.<]"),M=k(),D=n("p"),V=v("Written with Qt6 & ffmpeg."),C=k(),oe(I.$$.fragment),this.h()},l(N){t=o(N,"DIV",{class:!0});var R=d(t);r=o(R,"DIV",{class:!0});var j=d(r);s=o(j,"IMG",{src:!0,alt:!0,class:!0}),i=P(j),p=o(j,"DIV",{class:!0});var x=d(p);u=o(x,"P",{});var O=d(u);c=m(O,`Sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software. Gave me a good excuse to play around with Qt.`),O.forEach(l),f=P(x),g=o(x,"P",{});var U=d(g);T=m(U,"Created the interface (which is basically a media player + some overlays) with QML, and used C++ to plug it up to ffmpeg."),U.forEach(l),$=P(x),S=o(x,"P",{});var L=d(S);A=m(L,"It's a bit janky, but I still find myself using it a decent amount."),L.forEach(l),x.forEach(l),j.forEach(l),b=P(R),E=o(R,"DIV",{class:!0,style:!0});var z=d(E);y=o(z,"P",{class:!0,style:!0});var W=d(y);G=m(W,"[Demoing on a video I took of Jojo having a bad dream >.<]"),W.forEach(l),M=P(z),D=o(z,"P",{class:!0});var J=d(D);V=m(J,"Written with Qt6 & ffmpeg."),J.forEach(l),C=P(z),me(I.$$.fragment,z),z.forEach(l),R.forEach(l),this.h()},h(){ie(s.src,h="/img/trimcrop.gif")||a(s,"src",h),a(s,"alt","crop interface"),a(s,"class","svelte-18min5d"),a(p,"class","txt svelte-18min5d"),a(r,"class","trimcrop svelte-18min5d"),a(y,"class","caption"),be(y,"width","100%"),a(D,"class","made-with"),a(E,"class","desc"),be(E,"width","100%"),a(t,"class","desc-wrapper")},m(N,R){X(N,t,R),e(t,r),e(r,s),e(r,i),e(r,p),e(p,u),e(u,c),e(p,f),e(p,g),e(g,T),e(p,$),e(p,S),e(S,A),e(t,b),e(t,E),e(E,y),e(y,G),e(E,M),e(E,D),e(D,V),e(E,C),ce(I,E,null),_=!0},p:le,i(N){_||(F(I.$$.fragment,N),_=!0)},o(N){Y(I.$$.fragment,N),_=!1},d(N){N&&l(t),de(I)}}}class Br extends ue{constructor(t){super(),fe(this,t,null,qr,pe,{})}}function Fr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C,I;return C=new Ye({props:{link:"stabilizer"}}),{c(){t=n("div"),r=n("img"),h=k(),i=n("p"),p=v("[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),u=k(),c=n("div"),f=n("p"),g=v(`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),T=n("a"),$=v("this"),S=v(`. \r
        `),A=n("p"),b=v(`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),E=n("small"),y=v("In the name of consistent formatting, fake link to 404."),G=k(),M=n("p"),D=v("Written in Python using OpenCV."),V=k(),oe(C.$$.fragment),this.h()},l(_){t=o(_,"DIV",{class:!0});var N=d(t);r=o(N,"IMG",{style:!0,src:!0,alt:!0}),h=P(N),i=o(N,"P",{class:!0});var R=d(i);p=m(R,"[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),R.forEach(l),u=P(N),c=o(N,"DIV",{class:!0});var j=d(c);f=o(j,"P",{});var x=d(f);g=m(x,`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),T=o(x,"A",{href:!0,target:!0});var O=d(T);$=m(O,"this"),O.forEach(l),S=m(x,`. \r
        `),x.forEach(l),A=o(j,"P",{});var U=d(A);b=m(U,`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),E=o(U,"SMALL",{});var L=d(E);y=m(L,"In the name of consistent formatting, fake link to 404."),L.forEach(l),U.forEach(l),G=P(j),M=o(j,"P",{class:!0});var z=d(M);D=m(z,"Written in Python using OpenCV."),z.forEach(l),V=P(j),me(C.$$.fragment,j),j.forEach(l),N.forEach(l),this.h()},h(){be(r,"width","50%"),ie(r.src,s="/img/stabilizer.gif")||a(r,"src",s),a(r,"alt","before_after_composite"),a(i,"class","caption"),a(T,"href","https://www.storyzapp.com/"),a(T,"target","_blank"),a(M,"class","made-with"),a(c,"class","desc"),a(t,"class","desc-wrapper")},m(_,N){X(_,t,N),e(t,r),e(t,h),e(t,i),e(i,p),e(t,u),e(t,c),e(c,f),e(f,g),e(f,T),e(T,$),e(f,S),e(c,A),e(A,b),e(A,E),e(E,y),e(c,G),e(c,M),e(M,D),e(c,V),ce(C,c,null),I=!0},p:le,i(_){I||(F(C.$$.fragment,_),I=!0)},o(_){Y(C.$$.fragment,_),I=!1},d(_){_&&l(t),de(C)}}}class Wr extends ue{constructor(t){super(),fe(this,t,null,Fr,pe,{})}}function Yr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C,I;return C=new Ye({props:{link:"MiscGraphics/tree/main/Rendering"}}),{c(){t=n("div"),r=n("div"),s=n("img"),i=k(),p=n("img"),c=k(),f=n("p"),g=v("[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),T=k(),$=n("div"),S=n("p"),A=v(`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),b=k(),E=n("p"),y=v("Written in C++ "),G=n("span"),M=v("—"),D=v(" Uses Eigen.h for a few matrix ops."),V=k(),oe(C.$$.fragment),this.h()},l(_){t=o(_,"DIV",{class:!0});var N=d(t);r=o(N,"DIV",{style:!0});var R=d(r);s=o(R,"IMG",{style:!0,src:!0,alt:!0}),i=P(R),p=o(R,"IMG",{style:!0,src:!0,alt:!0}),R.forEach(l),c=P(N),f=o(N,"P",{class:!0});var j=d(f);g=m(j,"[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),j.forEach(l),T=P(N),$=o(N,"DIV",{class:!0});var x=d($);S=o(x,"P",{});var O=d(S);A=m(O,`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),O.forEach(l),b=P(x),E=o(x,"P",{class:!0});var U=d(E);y=m(U,"Written in C++ "),G=o(U,"SPAN",{});var L=d(G);M=m(L,"—"),L.forEach(l),D=m(U," Uses Eigen.h for a few matrix ops."),U.forEach(l),V=P(x),me(C.$$.fragment,x),x.forEach(l),N.forEach(l),this.h()},h(){be(s,"width","45%"),ie(s.src,h="/img/ray.png")||a(s,"src",h),a(s,"alt","ray traced balls"),be(p,"width","45%"),ie(p.src,u="/img/raster.png")||a(p,"src",u),a(p,"alt","rasterizer output Utah teapot"),be(r,"display","flex"),be(r,"justify-content","space-evenly"),a(f,"class","caption"),a(E,"class","made-with"),a($,"class","desc"),a(t,"class","desc-wrapper")},m(_,N){X(_,t,N),e(t,r),e(r,s),e(r,i),e(r,p),e(t,c),e(t,f),e(f,g),e(t,T),e(t,$),e($,S),e(S,A),e($,b),e($,E),e(E,y),e(E,G),e(G,M),e(E,D),e($,V),ce(C,$,null),I=!0},p:le,i(_){I||(F(C.$$.fragment,_),I=!0)},o(_){Y(C.$$.fragment,_),I=!1},d(_){_&&l(t),de(C)}}}class Xr extends ue{constructor(t){super(),fe(this,t,null,Yr,pe,{})}}function Jr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C;return V=new Ye({props:{link:"seam-carving"}}),{c(){t=n("div"),r=n("img"),h=k(),i=n("p"),p=v("[Gif of output at each step: seam colored red]"),u=k(),c=n("div"),f=n("p"),g=v("This was another project for the computer graphics course."),T=k(),$=n("p"),S=v(`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),A=k(),b=n("p"),E=v("Written in C++ "),y=n("span"),G=v("—"),M=v(" uses CImg.h for the masking tool."),D=k(),oe(V.$$.fragment),this.h()},l(I){t=o(I,"DIV",{class:!0});var _=d(t);r=o(_,"IMG",{src:!0,alt:!0}),h=P(_),i=o(_,"P",{class:!0});var N=d(i);p=m(N,"[Gif of output at each step: seam colored red]"),N.forEach(l),u=P(_),c=o(_,"DIV",{class:!0});var R=d(c);f=o(R,"P",{});var j=d(f);g=m(j,"This was another project for the computer graphics course."),j.forEach(l),T=P(R),$=o(R,"P",{});var x=d($);S=m(x,`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),x.forEach(l),A=P(R),b=o(R,"P",{class:!0});var O=d(b);E=m(O,"Written in C++ "),y=o(O,"SPAN",{});var U=d(y);G=m(U,"—"),U.forEach(l),M=m(O," uses CImg.h for the masking tool."),O.forEach(l),D=P(R),me(V.$$.fragment,R),R.forEach(l),_.forEach(l),this.h()},h(){ie(r.src,s="/img/seam_carve.gif")||a(r,"src",s),a(r,"alt","crop interface"),a(i,"class","caption"),a(b,"class","made-with"),a(c,"class","desc"),a(t,"class","desc-wrapper")},m(I,_){X(I,t,_),e(t,r),e(t,h),e(t,i),e(i,p),e(t,u),e(t,c),e(c,f),e(f,g),e(c,T),e(c,$),e($,S),e(c,A),e(c,b),e(b,E),e(b,y),e(y,G),e(b,M),e(c,D),ce(V,c,null),C=!0},p:le,i(I){C||(F(V.$$.fragment,I),C=!0)},o(I){Y(V.$$.fragment,I),C=!1},d(I){I&&l(t),de(V)}}}class Qr extends ue{constructor(t){super(),fe(this,t,null,Jr,pe,{})}}function Zr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G,M,D,V,C,I,_,N,R,j,x,O,U,L,z,W,J,ne,Z,Ee,ye,K,te;return K=new Ye({props:{link:"howard_cycling"}}),{c(){t=n("div"),r=n("div"),s=n("p"),h=v("Had the opportunity to make the website for a new chapter of a mountain biking league."),i=k(),p=n("div"),u=n("img"),f=k(),g=n("img"),$=k(),S=n("img"),b=k(),E=n("p"),y=v(`[Demoing some components. \r
            `),G=n("strong"),M=v("Top-left"),D=v(`: coach card, \r
            `),V=n("strong"),C=v("top-right"),I=v(`: mobile layout, \r
            `),_=n("strong"),N=v("bottom"),R=v(": FAQ panel]."),j=k(),x=n("p"),O=v("Making the "),U=n("a"),L=v("assets"),z=v(` and playing around with \r
            transitions was super fun. Learned a ton about new (`),W=n("em"),J=v("to me"),ne=v(`) CSS features, "mobile-first" design, variable fonts, etc.\r
        `),Z=n("p"),Ee=v("Made with SvelteKit & deployed on netlify."),ye=k(),oe(K.$$.fragment),this.h()},l(q){t=o(q,"DIV",{class:!0});var he=d(t);r=o(he,"DIV",{class:!0});var H=d(r);s=o(H,"P",{});var ee=d(s);h=m(ee,"Had the opportunity to make the website for a new chapter of a mountain biking league."),ee.forEach(l),i=P(H),p=o(H,"DIV",{class:!0});var re=d(p);u=o(re,"IMG",{id:!0,src:!0,alt:!0,class:!0}),f=P(re),g=o(re,"IMG",{id:!0,src:!0,alt:!0,class:!0}),$=P(re),S=o(re,"IMG",{id:!0,src:!0,alt:!0,class:!0}),re.forEach(l),b=P(H),E=o(H,"P",{class:!0});var ae=d(E);y=m(ae,`[Demoing some components. \r
            `),G=o(ae,"STRONG",{class:!0});var Ie=d(G);M=m(Ie,"Top-left"),Ie.forEach(l),D=m(ae,`: coach card, \r
            `),V=o(ae,"STRONG",{class:!0});var we=d(V);C=m(we,"top-right"),we.forEach(l),I=m(ae,`: mobile layout, \r
            `),_=o(ae,"STRONG",{class:!0});var ve=d(_);N=m(ve,"bottom"),ve.forEach(l),R=m(ae,": FAQ panel]."),ae.forEach(l),j=P(H),x=o(H,"P",{});var B=d(x);O=m(B,"Making the "),U=o(B,"A",{href:!0,target:!0});var ke=d(U);L=m(ke,"assets"),ke.forEach(l),z=m(B,` and playing around with \r
            transitions was super fun. Learned a ton about new (`),W=o(B,"EM",{});var Pe=d(W);J=m(Pe,"to me"),Pe.forEach(l),ne=m(B,`) CSS features, "mobile-first" design, variable fonts, etc.\r
        `),B.forEach(l),Z=o(H,"P",{class:!0});var Se=d(Z);Ee=m(Se,"Made with SvelteKit & deployed on netlify."),Se.forEach(l),ye=P(H),me(K.$$.fragment,H),H.forEach(l),he.forEach(l),this.h()},h(){a(u,"id","coach"),ie(u.src,c="/img/coach-optimize.gif")||a(u,"src",c),a(u,"alt","card demo"),a(u,"class","svelte-lqppal"),a(g,"id","mobile"),ie(g.src,T="/img/mobile-optimize.gif")||a(g,"src",T),a(g,"alt","mobile demo"),a(g,"class","svelte-lqppal"),a(S,"id","faq"),ie(S.src,A="/img/faq-optimize.gif")||a(S,"src",A),a(S,"alt","faq demo"),a(S,"class","svelte-lqppal"),a(p,"class","gif-grid svelte-lqppal"),a(G,"class","svelte-lqppal"),a(V,"class","svelte-lqppal"),a(_,"class","svelte-lqppal"),a(E,"class","caption svelte-lqppal"),a(U,"href","https://codepen.io/patwheeler/pen/JjeyOMZ"),a(U,"target","_blank"),a(Z,"class","made-with"),a(r,"class","desc"),a(t,"class","desc-wrapper")},m(q,he){X(q,t,he),e(t,r),e(r,s),e(s,h),e(r,i),e(r,p),e(p,u),e(p,f),e(p,g),e(p,$),e(p,S),e(r,b),e(r,E),e(E,y),e(E,G),e(G,M),e(E,D),e(E,V),e(V,C),e(E,I),e(E,_),e(_,N),e(E,R),e(r,j),e(r,x),e(x,O),e(x,U),e(U,L),e(x,z),e(x,W),e(W,J),e(x,ne),e(r,Z),e(Z,Ee),e(r,ye),ce(K,r,null),te=!0},p:le,i(q){te||(F(K.$$.fragment,q),te=!0)},o(q){Y(K.$$.fragment,q),te=!1},d(q){q&&l(t),de(K)}}}class ea extends ue{constructor(t){super(),fe(this,t,null,Zr,pe,{})}}function pr(w,t,r){const s=w.slice();return s[1]=t[r],s}function hr(w,t){let r,s,h;const i=[t[1]];let p={};for(let u=0;u<i.length;u+=1)p=Ir(p,i[u]);return s=new Ur({props:p}),{key:w,first:null,c(){r=n("div"),oe(s.$$.fragment),this.h()},l(u){r=o(u,"DIV",{});var c=d(r);me(s.$$.fragment,c),c.forEach(l),this.h()},h(){this.first=r},m(u,c){X(u,r,c),ce(s,r,null),h=!0},p(u,c){t=u;const f=c&1?br(i,[$r(t[1])]):{};s.$set(f)},i(u){h||(F(s.$$.fragment,u),h=!0)},o(u){Y(s.$$.fragment,u),h=!1},d(u){u&&l(r),de(s)}}}function ta(w){let t=[],r=new Map,s,h,i=w[0];const p=u=>u[1];for(let u=0;u<i.length;u+=1){let c=pr(w,i,u),f=p(c);r.set(f,t[u]=hr(f,c))}return{c(){for(let u=0;u<t.length;u+=1)t[u].c();s=ot()},l(u){for(let c=0;c<t.length;c+=1)t[c].l(u);s=ot()},m(u,c){for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(u,c);X(u,s,c),h=!0},p(u,[c]){c&1&&(i=u[0],ct(),t=yr(t,c,p,1,u,i,r,s.parentNode,wr,hr,s,pr),dt())},i(u){if(!h){for(let c=0;c<i.length;c+=1)F(t[c]);h=!0}},o(u){for(let c=0;c<t.length;c+=1)Y(t[c]);h=!1},d(u){for(let c=0;c<t.length;c+=1)t[c].d(u);u&&l(s)}}}function ra(w){return[[{title:"Howard Cycling",subtitle:"Static site for a biking club",date:"Jul 2023",component:ea},{title:"Drug generator",subtitle:"Character-level RNN",date:"Apr 2023",component:Kr},{title:"TRIMCROP",subtitle:"Basic video clipper for desktop",date:"Jan 2023",component:Br},{title:"Gif stabilization",subtitle:"Program to steady camera movement",date:"Jul 2022",component:Wr},{title:"Seam Carving",subtitle:"Content-aware image resizing",date:"Jul 2021",component:Qr},{title:"Static Renderers",subtitle:"Raytracer and rasterizer",date:"Jun 2021",component:Xr}]]}class aa extends ue{constructor(t){super(),fe(this,t,ra,ta,pe,{})}}function vr(w){let t,r,s,h,i,p,u,c,f,g,T,$,S,A,b,E,y,G;return h=new Nr({}),u=new xr({}),$=new Tr({}),E=new aa({}),{c(){t=n("div"),r=n("div"),s=n("div"),oe(h.$$.fragment),i=k(),p=n("div"),oe(u.$$.fragment),f=k(),g=n("div"),T=n("div"),oe($.$$.fragment),A=k(),b=n("div"),oe(E.$$.fragment),this.h()},l(M){t=o(M,"DIV",{id:!0,class:!0});var D=d(t);r=o(D,"DIV",{id:!0,class:!0});var V=d(r);s=o(V,"DIV",{id:!0,class:!0});var C=d(s);me(h.$$.fragment,C),C.forEach(l),i=P(V),p=o(V,"DIV",{id:!0,class:!0});var I=d(p);me(u.$$.fragment,I),I.forEach(l),V.forEach(l),f=P(D),g=o(D,"DIV",{id:!0,class:!0});var _=d(g);T=o(_,"DIV",{id:!0,class:!0});var N=d(T);me($.$$.fragment,N),N.forEach(l),A=P(_),b=o(_,"DIV",{id:!0,class:!0});var R=d(b);me(E.$$.fragment,R),R.forEach(l),_.forEach(l),D.forEach(l),this.h()},h(){a(s,"id","about-text"),a(s,"class","svelte-18dtzke"),a(p,"id","about-card"),a(p,"class","svelte-18dtzke"),a(r,"id","about-section"),a(r,"class","svelte-18dtzke"),a(T,"id","projects-text"),a(T,"class","svelte-18dtzke"),a(b,"id","projects-content"),a(b,"class","svelte-18dtzke"),a(g,"id","project-section"),a(g,"class","svelte-18dtzke"),a(t,"id","content-area"),a(t,"class","svelte-18dtzke")},m(M,D){X(M,t,D),e(t,r),e(r,s),ce(h,s,null),e(r,i),e(r,p),ce(u,p,null),e(t,f),e(t,g),e(g,T),ce($,T,null),e(g,A),e(g,b),ce(E,b,null),G=!0},i(M){G||(F(h.$$.fragment,M),F(u.$$.fragment,M),We(()=>{G&&(c||(c=_e(p,Fe,{x:500,duration:1200,delay:400},!0)),c.run(1))}),F($.$$.fragment,M),We(()=>{G&&(S||(S=_e(T,Fe,{x:-300,duration:1e3,delay:1e3},!0)),S.run(1))}),F(E.$$.fragment,M),We(()=>{G&&(y||(y=_e(b,Fe,{y:500,duration:1200,delay:1e3},!0)),y.run(1))}),G=!0)},o(M){Y(h.$$.fragment,M),Y(u.$$.fragment,M),c||(c=_e(p,Fe,{x:500,duration:1200,delay:400},!1)),c.run(0),Y($.$$.fragment,M),S||(S=_e(T,Fe,{x:-300,duration:1e3,delay:1e3},!1)),S.run(0),Y(E.$$.fragment,M),y||(y=_e(b,Fe,{y:500,duration:1200,delay:1e3},!1)),y.run(0),G=!1},d(M){M&&l(t),de(h),de(u),M&&c&&c.end(),de($),M&&S&&S.end(),de(E),M&&y&&y.end()}}}function sa(w){let t,r,s=w[0]&&vr();return{c(){s&&s.c(),t=ot()},l(h){s&&s.l(h),t=ot()},m(h,i){s&&s.m(h,i),X(h,t,i),r=!0},p(h,[i]){h[0]?s?i&1&&F(s,1):(s=vr(),s.c(),F(s,1),s.m(t.parentNode,t)):s&&(ct(),Y(s,1,1,()=>{s=null}),dt())},i(h){r||(F(s),r=!0)},o(h){Y(s),r=!1},d(h){s&&s.d(h),h&&l(t)}}}function la(w,t,r){let s=!1;return kr(()=>r(0,s=!0)),[s]}class ia extends ue{constructor(t){super(),fe(this,t,la,sa,pe,{})}}export{ia as component,oa as universal};