import{J as tr,K as mr,S as te,i as re,s as se,e as Ae,b as q,g as O,v as qe,d as z,f as Fe,h as n,o as Dt,k as o,q as _,a as T,l as c,m as p,r as g,c as M,n as a,G as e,L as me,M as B,p as ve,N as rr,O as hr,H as fe,y as Q,z as ie,P as ce,A as Z,B as ee,Q as sr,R as ar,u as At,x as lr,T as _r,U as gr,V as Er,W as yr,X as br}from"../chunks/index.b961010b.js";const Ir=!0,as=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ir},Symbol.toStringTag,{value:"Module"}));function vr(k){const t=k-1;return t*t*t+1}function We(k,{delay:t=0,duration:s=400,easing:r=mr}={}){const l=+getComputedStyle(k).opacity;return{delay:t,duration:s,easing:r,css:f=>`opacity: ${f*l}`}}function ue(k,{delay:t=0,duration:s=400,easing:r=vr,x:l=0,y:f=0,opacity:h=0}={}){const d=getComputedStyle(k),u=+d.opacity,i=d.transform==="none"?"":d.transform,v=u*(1-h),[w,I]=tr(l),[N,$]=tr(f);return{delay:t,duration:s,easing:r,css:(P,E)=>`
			transform: ${i} translate(${(1-P)*w}${I}, ${(1-P)*N}${$});
			opacity: ${u-v*E}`}}function nr(k,{delay:t=0,duration:s=400,easing:r=vr,axis:l="y"}={}){const f=getComputedStyle(k),h=+f.opacity,d=l==="y"?"height":"width",u=parseFloat(f[d]),i=l==="y"?["top","bottom"]:["left","right"],v=i.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),w=parseFloat(f[`padding${v[0]}`]),I=parseFloat(f[`padding${v[1]}`]),N=parseFloat(f[`margin${v[0]}`]),$=parseFloat(f[`margin${v[1]}`]),P=parseFloat(f[`border${v[0]}Width`]),E=parseFloat(f[`border${v[1]}Width`]);return{delay:t,duration:s,easing:r,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*h};${d}: ${S*u}px;padding-${i[0]}: ${S*w}px;padding-${i[1]}: ${S*I}px;margin-${i[0]}: ${S*N}px;margin-${i[1]}: ${S*$}px;border-${i[0]}-width: ${S*P}px;border-${i[1]}-width: ${S*E}px;`}}function ir(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R;return{c(){t=o("div"),s=o("h1"),r=_("About"),f=T(),h=o("hr"),u=T(),i=o("div"),v=o("p"),w=_("Hi! My name's "),I=o("span"),N=_("Patrick"),$=_("."),P=T(),E=o("p"),S=_("I graduated from UMBC with a degree in computer science and am currently looking for an entry level position."),A=T(),C=o("p"),V=_("I like learning about graphics, games, and multimedia in general."),this.h()},l(y){t=c(y,"DIV",{class:!0});var m=p(t);s=c(m,"H1",{});var b=p(s);r=g(b,"About"),b.forEach(n),f=M(m),h=c(m,"HR",{class:!0}),u=M(m),i=c(m,"DIV",{});var G=p(i);v=c(G,"P",{});var x=p(v);w=g(x,"Hi! My name's "),I=c(x,"SPAN",{id:!0,class:!0});var L=p(I);N=g(L,"Patrick"),L.forEach(n),$=g(x,"."),x.forEach(n),P=M(G),E=c(G,"P",{});var U=p(E);S=g(U,"I graduated from UMBC with a degree in computer science and am currently looking for an entry level position."),U.forEach(n),A=M(G),C=c(G,"P",{});var H=p(C);V=g(H,"I like learning about graphics, games, and multimedia in general."),H.forEach(n),G.forEach(n),m.forEach(n),this.h()},h(){a(h,"class","body-hr"),a(I,"id","name"),a(I,"class","svelte-orqhqr"),a(t,"class","body-section")},m(y,m){q(y,t,m),e(t,s),e(s,r),e(t,f),e(t,h),e(t,u),e(t,i),e(i,v),e(v,w),e(v,I),e(I,N),e(v,$),e(i,P),e(i,E),e(E,S),e(i,A),e(i,C),e(C,V),R=!0},i(y){R||(me(()=>{R&&(l||(l=B(s,ue,{x:-300,duration:1700,delay:300},!0)),l.run(1))}),me(()=>{R&&(d||(d=B(h,ue,{x:200,duration:1e3,delay:1e3},!0)),d.run(1))}),me(()=>{R&&(D||(D=B(i,We,{duration:1700},!0)),D.run(1))}),R=!0)},o(y){l||(l=B(s,ue,{x:-300,duration:1700,delay:300},!1)),l.run(0),d||(d=B(h,ue,{x:200,duration:1e3,delay:1e3},!1)),d.run(0),D||(D=B(i,We,{duration:1700},!1)),D.run(0),R=!1},d(y){y&&n(t),y&&l&&l.end(),y&&d&&d.end(),y&&D&&D.end()}}}function $r(k){let t,s,r=k[0]&&ir();return{c(){r&&r.c(),t=Ae()},l(l){r&&r.l(l),t=Ae()},m(l,f){r&&r.m(l,f),q(l,t,f),s=!0},p(l,[f]){l[0]?r?f&1&&O(r,1):(r=ir(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(qe(),z(r,1,1,()=>{r=null}),Fe())},i(l){s||(O(r),s=!0)},o(l){z(r),s=!1},d(l){r&&r.d(l),l&&n(t)}}}function kr(k,t,s){let{ready:r=!1}=t;return Dt(()=>s(0,r=!0)),k.$$set=l=>{"ready"in l&&s(0,r=l.ready)},[r]}class wr extends te{constructor(t){super(),re(this,t,kr,$r,se,{ready:0})}}function or(k){let t,s,r,l,f,h,d,u,i,v,w,I;return{c(){t=o("div"),s=o("h1"),r=_("Projects"),f=T(),h=o("hr"),u=T(),i=o("p"),v=_("Here are some things I've made."),this.h()},l(N){t=c(N,"DIV",{class:!0});var $=p(t);s=c($,"H1",{});var P=p(s);r=g(P,"Projects"),P.forEach(n),f=M($),h=c($,"HR",{class:!0}),u=M($),i=c($,"P",{style:!0});var E=p(i);v=g(E,"Here are some things I've made."),E.forEach(n),$.forEach(n),this.h()},h(){a(h,"class","body-hr"),ve(i,"text-align","left"),ve(i,"margin-bottom","1em"),a(t,"class","body-section")},m(N,$){q(N,t,$),e(t,s),e(s,r),e(t,f),e(t,h),e(t,u),e(t,i),e(i,v),I=!0},i(N){I||(me(()=>{I&&(l||(l=B(s,ue,{x:300,duration:1700,delay:2e3},!0)),l.run(1))}),me(()=>{I&&(d||(d=B(h,ue,{x:-200,duration:1e3,delay:2700},!0)),d.run(1))}),me(()=>{I&&(w||(w=B(i,We,{delay:1700,duration:1700},!0)),w.run(1))}),I=!0)},o(N){l||(l=B(s,ue,{x:300,duration:1700,delay:2e3},!1)),l.run(0),d||(d=B(h,ue,{x:-200,duration:1e3,delay:2700},!1)),d.run(0),w||(w=B(i,We,{delay:1700,duration:1700},!1)),w.run(0),I=!1},d(N){N&&n(t),N&&l&&l.end(),N&&d&&d.end(),N&&w&&w.end()}}}function Pr(k){let t,s,r=k[0]&&or();return{c(){r&&r.c(),t=Ae()},l(l){r&&r.l(l),t=Ae()},m(l,f){r&&r.m(l,f),q(l,t,f),s=!0},p(l,[f]){l[0]?r?f&1&&O(r,1):(r=or(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(qe(),z(r,1,1,()=>{r=null}),Fe())},i(l){s||(O(r),s=!0)},o(l){z(r),s=!1},d(l){r&&r.d(l),l&&n(t)}}}function Nr(k,t,s){let{ready:r=!1}=t;return Dt(()=>s(0,r=!0)),k.$$set=l=>{"ready"in l&&s(0,r=l.ready)},[r]}class Sr extends te{constructor(t){super(),re(this,t,Nr,Pr,se,{ready:0})}}function Tr(k){let t,s,r,l,f,h,d,u,i,v,w,I;return{c(){t=o("button"),s=o("p"),r=_("WEB4 NFT CRYPTO AI"),l=T(),f=o("p"),h=_("THE AUGMENTED METAVERSE EXPERIENCE"),d=T(),u=o("p"),i=_("ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),this.h()},l(N){t=c(N,"BUTTON",{class:!0});var $=p(t);s=c($,"P",{id:!0,class:!0});var P=p(s);r=g(P,"WEB4 NFT CRYPTO AI"),P.forEach(n),l=M($),f=c($,"P",{id:!0,class:!0});var E=p(f);h=g(E,"THE AUGMENTED METAVERSE EXPERIENCE"),E.forEach(n),d=M($),u=c($,"P",{id:!0,class:!0});var S=p(u);i=g(S,"ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),S.forEach(n),$.forEach(n),this.h()},h(){a(s,"id","top"),a(s,"class","svelte-x52ds"),a(f,"id","mid"),a(f,"class","svelte-x52ds"),a(u,"id","bot"),a(u,"class","svelte-x52ds"),a(t,"class",v=rr(k[0]?"speaking":"")+" svelte-x52ds")},m(N,$){q(N,t,$),e(t,s),e(s,r),e(t,l),e(t,f),e(f,h),e(t,d),e(t,u),e(u,i),w||(I=hr(t,"click",k[1]),w=!0)},p(N,[$]){$&1&&v!==(v=rr(N[0]?"speaking":"")+" svelte-x52ds")&&a(t,"class",v)},i:fe,o:fe,d(N){N&&n(t),w=!1,I()}}}const Mr="WEB4 NFT CRYPTO AI:        THE AUGMENTED METAVERSE EXPERIENCE.         ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9. REMASTERED.";function Ar(k,t,s){let r=!1;const l=window.speechSynthesis;function f(){if(l.speaking){s(0,r=!1),l.cancel();return}const h=l.getVoices();let d=Math.random()*3,u=Math.floor(Math.random()*h.length);const i=new SpeechSynthesisUtterance(Mr);i.voice=h[u],i.pitch=d,i.lang="en-US",l.speak(i),s(0,r=!0),i.onend=v=>{s(0,r=!1)}}return[r,f,l]}class Dr extends te{constructor(t){super(),re(this,t,Ar,Tr,se,{synth:2})}get synth(){return this.$$.ctx[2]}}function Gr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R,y,m,b,G,x,L,U,H,W,j,X,ae,De,_e,Ge,de,Y,Ie,le,$e,K,ne,Le,xe,ke,pe,ge,oe,Ue,He,he,Ee,lt,nt,it,Re,Oe,ot,ct,ut,ye,we,Gt,dt,Pe,Rt,ft,je,Ce,pt,Ne,Ye,ht,Se,ze,Ve,vt,Je,mt,_t,Ke,Te,gt,Qe,Et,yt,bt,Be,It,Ze;return Ce=new Dr({}),{c(){t=o("div"),s=o("img"),l=T(),f=o("div"),h=o("div"),d=o("span"),u=_("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),i=T(),v=o("span"),w=_("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),I=T(),N=o("span"),$=_("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),P=T(),E=o("span"),S=_("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),A=T(),C=o("div"),V=o("div"),D=o("div"),R=o("img"),m=T(),b=o("div"),G=o("hr"),x=T(),L=o("p"),U=o("span"),H=_("ISS:"),W=_(" 06/11/23"),j=T(),X=o("p"),ae=o("span"),De=_("LOC:"),_e=_(" MD, USA"),Ge=T(),de=o("p"),Y=o("span"),Ie=_("EDU:"),le=_(" B.S."),$e=T(),K=o("p"),ne=o("span"),Le=_("AGE:"),xe=_(" 13-54"),ke=T(),pe=o("p"),ge=o("span"),oe=_("EYE:"),Ue=_(" BRN"),He=T(),he=o("p"),Ee=o("span"),lt=_("HAND:"),nt=_(" RGT"),it=T(),Re=o("p"),Oe=o("span"),ot=_("MENTAL:"),ct=_(" HEALTH!"),ut=T(),ye=o("div"),we=o("img"),dt=T(),Pe=o("img"),ft=T(),je=o("div"),Q(Ce.$$.fragment),pt=T(),Ne=o("div"),Ye=o("hr"),ht=T(),Se=o("ul"),ze=o("li"),Ve=o("span"),vt=_("Won't accept your cookies — stop mocking people with dairy and egg allergies. "),Je=o("small"),mt=_("/srs"),_t=T(),Ke=o("li"),Te=o("span"),gt=_("A real human person who wants to work, specifically, for "),Qe=o("em"),Et=_("YOU!"),yt=_(" :)"),bt=T(),Be=o("div"),It=_("NO_UNAUTH_SALE"),this.h()},l(be){t=c(be,"DIV",{class:!0});var J=p(t);s=c(J,"IMG",{class:!0,src:!0,alt:!0}),l=M(J),f=c(J,"DIV",{class:!0});var Ct=p(f);h=c(Ct,"DIV",{class:!0});var Me=p(h);d=c(Me,"SPAN",{class:!0});var Vt=p(d);u=g(Vt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Vt.forEach(n),i=M(Me),v=c(Me,"SPAN",{class:!0});var Lt=p(v);w=g(Lt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Lt.forEach(n),I=M(Me),N=c(Me,"SPAN",{class:!0});var xt=p(N);$=g(xt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),xt.forEach(n),P=M(Me),E=c(Me,"SPAN",{class:!0});var Ut=p(E);S=g(Ut,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Ut.forEach(n),Me.forEach(n),Ct.forEach(n),A=M(J),C=c(J,"DIV",{class:!0});var et=p(C);V=c(et,"DIV",{id:!0,class:!0});var Ht=p(V);D=c(Ht,"DIV",{id:!0,class:!0});var Ot=p(D);R=c(Ot,"IMG",{id:!0,src:!0,alt:!0,class:!0}),Ot.forEach(n),Ht.forEach(n),m=M(et),b=c(et,"DIV",{class:!0});var F=p(b);G=c(F,"HR",{class:!0}),x=M(F),L=c(F,"P",{class:!0});var $t=p(L);U=c($t,"SPAN",{class:!0});var jt=p(U);H=g(jt,"ISS:"),jt.forEach(n),W=g($t," 06/11/23"),$t.forEach(n),j=M(F),X=c(F,"P",{class:!0});var kt=p(X);ae=c(kt,"SPAN",{class:!0});var zt=p(ae);De=g(zt,"LOC:"),zt.forEach(n),_e=g(kt," MD, USA"),kt.forEach(n),Ge=M(F),de=c(F,"P",{class:!0});var wt=p(de);Y=c(wt,"SPAN",{class:!0});var Kt=p(Y);Ie=g(Kt,"EDU:"),Kt.forEach(n),le=g(wt," B.S."),wt.forEach(n),$e=M(F),K=c(F,"P",{class:!0});var Pt=p(K);ne=c(Pt,"SPAN",{class:!0});var Bt=p(ne);Le=g(Bt,"AGE:"),Bt.forEach(n),xe=g(Pt," 13-54"),Pt.forEach(n),ke=M(F),pe=c(F,"P",{class:!0});var Nt=p(pe);ge=c(Nt,"SPAN",{class:!0});var Wt=p(ge);oe=g(Wt,"EYE:"),Wt.forEach(n),Ue=g(Nt," BRN"),Nt.forEach(n),He=M(F),he=c(F,"P",{class:!0});var St=p(he);Ee=c(St,"SPAN",{class:!0});var qt=p(Ee);lt=g(qt,"HAND:"),qt.forEach(n),nt=g(St," RGT"),St.forEach(n),it=M(F),Re=c(F,"P",{class:!0});var Tt=p(Re);Oe=c(Tt,"SPAN",{class:!0});var Ft=p(Oe);ot=g(Ft,"MENTAL:"),Ft.forEach(n),ct=g(Tt," HEALTH!"),Tt.forEach(n),ut=M(F),ye=c(F,"DIV",{id:!0,class:!0});var tt=p(ye);we=c(tt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),dt=M(tt),Pe=c(tt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),tt.forEach(n),F.forEach(n),et.forEach(n),ft=M(J),je=c(J,"DIV",{class:!0});var Xt=p(je);ie(Ce.$$.fragment,Xt),Xt.forEach(n),pt=M(J),Ne=c(J,"DIV",{class:!0});var rt=p(Ne);Ye=c(rt,"HR",{id:!0,class:!0}),ht=M(rt),Se=c(rt,"UL",{class:!0});var st=p(Se);ze=c(st,"LI",{class:!0});var Yt=p(ze);Ve=c(Yt,"SPAN",{class:!0});var Mt=p(Ve);vt=g(Mt,"Won't accept your cookies — stop mocking people with dairy and egg allergies. "),Je=c(Mt,"SMALL",{});var Jt=p(Je);mt=g(Jt,"/srs"),Jt.forEach(n),Mt.forEach(n),Yt.forEach(n),_t=M(st),Ke=c(st,"LI",{class:!0});var Qt=p(Ke);Te=c(Qt,"SPAN",{class:!0});var at=p(Te);gt=g(at,"A real human person who wants to work, specifically, for "),Qe=c(at,"EM",{});var Zt=p(Qe);Et=g(Zt,"YOU!"),Zt.forEach(n),yt=g(at," :)"),at.forEach(n),Qt.forEach(n),st.forEach(n),rt.forEach(n),bt=M(J),Be=c(J,"DIV",{class:!0});var er=p(Be);It=g(er,"NO_UNAUTH_SALE"),er.forEach(n),J.forEach(n),this.h()},h(){a(s,"class","bg-card svelte-163usu6"),ce(s.src,r="/img/planet1.png")||a(s,"src",r),a(s,"alt","bg-img"),a(d,"class","svelte-163usu6"),a(v,"class","svelte-163usu6"),a(N,"class","svelte-163usu6"),a(E,"class","svelte-163usu6"),a(h,"class","marquee__inner svelte-163usu6"),a(f,"class","marquee svelte-163usu6"),a(R,"id","static"),ce(R.src,y="/img/bw_portrait.png")||a(R,"src",y),a(R,"alt","bw_portrait"),a(R,"class","svelte-163usu6"),a(D,"id","hover-target"),a(D,"class","svelte-163usu6"),a(V,"id","pfp"),a(V,"class","svelte-163usu6"),a(G,"class","svelte-163usu6"),a(U,"class","svelte-163usu6"),a(L,"class","svelte-163usu6"),a(ae,"class","svelte-163usu6"),a(X,"class","svelte-163usu6"),a(Y,"class","svelte-163usu6"),a(de,"class","svelte-163usu6"),a(ne,"class","svelte-163usu6"),a(K,"class","svelte-163usu6"),a(ge,"class","svelte-163usu6"),a(pe,"class","svelte-163usu6"),a(Ee,"class","svelte-163usu6"),a(he,"class","svelte-163usu6"),a(Oe,"class","svelte-163usu6"),a(Re,"class","svelte-163usu6"),a(we,"id","spinner"),ce(we.src,Gt="/img/verified_1.png")||a(we,"src",Gt),a(we,"alt","spinning verified"),a(we,"class","svelte-163usu6"),a(Pe,"id","badge"),ce(Pe.src,Rt="/img/Greater_coat_of_arms.png")||a(Pe,"src",Rt),a(Pe,"alt","badge"),a(Pe,"class","svelte-163usu6"),a(ye,"id","badge_container"),a(ye,"class","svelte-163usu6"),a(b,"class","stats svelte-163usu6"),a(C,"class","bio svelte-163usu6"),a(je,"class","tts-button svelte-163usu6"),a(Ye,"id","break"),a(Ye,"class","svelte-163usu6"),a(Ve,"class","svelte-163usu6"),a(ze,"class","svelte-163usu6"),a(Te,"class","svelte-163usu6"),a(Ke,"class","svelte-163usu6"),a(Se,"class","svelte-163usu6"),a(Ne,"class","facts svelte-163usu6"),a(Be,"class","barcode svelte-163usu6"),a(t,"class","card-wrapper svelte-163usu6")},m(be,J){q(be,t,J),e(t,s),e(t,l),e(t,f),e(f,h),e(h,d),e(d,u),e(h,i),e(h,v),e(v,w),e(h,I),e(h,N),e(N,$),e(h,P),e(h,E),e(E,S),e(t,A),e(t,C),e(C,V),e(V,D),e(D,R),e(C,m),e(C,b),e(b,G),e(b,x),e(b,L),e(L,U),e(U,H),e(L,W),e(b,j),e(b,X),e(X,ae),e(ae,De),e(X,_e),e(b,Ge),e(b,de),e(de,Y),e(Y,Ie),e(de,le),e(b,$e),e(b,K),e(K,ne),e(ne,Le),e(K,xe),e(b,ke),e(b,pe),e(pe,ge),e(ge,oe),e(pe,Ue),e(b,He),e(b,he),e(he,Ee),e(Ee,lt),e(he,nt),e(b,it),e(b,Re),e(Re,Oe),e(Oe,ot),e(Re,ct),e(b,ut),e(b,ye),e(ye,we),e(ye,dt),e(ye,Pe),e(t,ft),e(t,je),Z(Ce,je,null),e(t,pt),e(t,Ne),e(Ne,Ye),e(Ne,ht),e(Ne,Se),e(Se,ze),e(ze,Ve),e(Ve,vt),e(Ve,Je),e(Je,mt),e(Se,_t),e(Se,Ke),e(Ke,Te),e(Te,gt),e(Te,Qe),e(Qe,Et),e(Te,yt),e(t,bt),e(t,Be),e(Be,It),Ze=!0},p:fe,i(be){Ze||(O(Ce.$$.fragment,be),Ze=!0)},o(be){z(Ce.$$.fragment,be),Ze=!1},d(be){be&&n(t),ee(Ce)}}}class Rr extends te{constructor(t){super(),re(this,t,null,Gr,se,{})}}function cr(k){let t,s,r,l,f,h;var d=k[4];function u(i){return{}}return d&&(r=lr(d,u())),{c(){t=o("div"),s=o("div"),r&&Q(r.$$.fragment),this.h()},l(i){t=c(i,"DIV",{class:!0});var v=p(t);s=c(v,"DIV",{});var w=p(s);r&&ie(r.$$.fragment,w),w.forEach(n),v.forEach(n),this.h()},h(){a(t,"class","panel svelte-iu2iev")},m(i,v){q(i,t,v),e(t,s),r&&Z(r,s,null),h=!0},p(i,v){if(v&16&&d!==(d=i[4])){if(r){qe();const w=r;z(w.$$.fragment,1,0,()=>{ee(w,1)}),Fe()}d?(r=lr(d,u()),Q(r.$$.fragment),O(r.$$.fragment,1),Z(r,s,null)):r=null}},i(i){h||(r&&O(r.$$.fragment,i),me(()=>{h&&(l||(l=B(s,We,{},!0)),l.run(1))}),me(()=>{h&&(f||(f=B(t,nr,{duration:700},!0)),f.run(1))}),h=!0)},o(i){r&&z(r.$$.fragment,i),l||(l=B(s,We,{},!1)),l.run(0),f||(f=B(t,nr,{duration:700},!1)),f.run(0),h=!1},d(i){i&&n(t),r&&ee(r),i&&l&&l.end(),i&&f&&f.end()}}}function Cr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R,y=k[0]&&cr(k);return{c(){t=o("div"),s=o("button"),r=o("h3"),l=_(k[1]),f=T(),h=o("h4"),d=_(k[2]),u=T(),i=o("div"),v=o("h6"),w=_("["),I=_(k[3]),N=_("]"),$=T(),P=o("span"),E=sr("svg"),S=sr("path"),A=T(),C=o("article"),y&&y.c(),this.h()},l(m){t=c(m,"DIV",{class:!0,"aria-expanded":!0});var b=p(t);s=c(b,"BUTTON",{class:!0});var G=p(s);r=c(G,"H3",{});var x=p(r);l=g(x,k[1]),x.forEach(n),f=M(G),h=c(G,"H4",{class:!0});var L=p(h);d=g(L,k[2]),L.forEach(n),u=M(G),i=c(G,"DIV",{class:!0});var U=p(i);v=c(U,"H6",{class:!0});var H=p(v);w=g(H,"["),I=g(H,k[3]),N=g(H,"]"),H.forEach(n),$=M(U),P=c(U,"SPAN",{class:!0,"aria-expanded":!0});var W=p(P);E=ar(W,"svg",{style:!0,width:!0,height:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,viewBox:!0,stroke:!0,class:!0});var j=p(E);S=ar(j,"path",{d:!0}),p(S).forEach(n),j.forEach(n),W.forEach(n),U.forEach(n),G.forEach(n),A=M(b),C=c(b,"ARTICLE",{});var X=p(C);y&&y.l(X),X.forEach(n),b.forEach(n),this.h()},h(){a(h,"class","subtitle svelte-iu2iev"),a(v,"class","date svelte-iu2iev"),a(S,"d","M9 5l7 7-7 7"),a(E,"style","tran"),a(E,"width","20"),a(E,"height","20"),a(E,"fill","none"),a(E,"stroke-linecap","round"),a(E,"stroke-linejoin","round"),a(E,"stroke-width","3"),a(E,"viewBox","0 0 24 24"),a(E,"stroke","currentColor"),a(E,"class","svelte-iu2iev"),a(P,"class","arrow_right svelte-iu2iev"),a(P,"aria-expanded",k[0]),a(i,"class","right_hand svelte-iu2iev"),a(s,"class","heading svelte-iu2iev"),a(t,"class","container svelte-iu2iev"),a(t,"aria-expanded",k[0])},m(m,b){q(m,t,b),e(t,s),e(s,r),e(r,l),e(s,f),e(s,h),e(h,d),e(s,u),e(s,i),e(i,v),e(v,w),e(v,I),e(v,N),e(i,$),e(i,P),e(P,E),e(E,S),e(t,A),e(t,C),y&&y.m(C,null),V=!0,D||(R=hr(s,"click",k[5]),D=!0)},p(m,[b]){(!V||b&2)&&At(l,m[1]),(!V||b&4)&&At(d,m[2]),(!V||b&8)&&At(I,m[3]),(!V||b&1)&&a(P,"aria-expanded",m[0]),m[0]?y?(y.p(m,b),b&1&&O(y,1)):(y=cr(m),y.c(),O(y,1),y.m(C,null)):y&&(qe(),z(y,1,1,()=>{y=null}),Fe()),(!V||b&1)&&a(t,"aria-expanded",m[0])},i(m){V||(O(y),V=!0)},o(m){z(y),V=!1},d(m){m&&n(t),y&&y.d(),D=!1,R()}}}function Vr(k,t,s){let{title:r=""}=t,{subtitle:l=""}=t,{date:f=""}=t,{component:h}=t,{open:d=!1}=t;function u(){s(0,d=!d)}return k.$$set=i=>{"title"in i&&s(1,r=i.title),"subtitle"in i&&s(2,l=i.subtitle),"date"in i&&s(3,f=i.date),"component"in i&&s(4,h=i.component),"open"in i&&s(0,d=i.open)},[d,r,l,f,h,u]}class Lr extends te{constructor(t){super(),re(this,t,Vr,Cr,se,{title:1,subtitle:2,date:3,component:4,open:0})}}function xr(k){let t,s,r,l,f,h,d;return{c(){t=o("div"),s=o("img"),l=T(),f=o("a"),h=_("view repo"),this.h()},l(u){t=c(u,"DIV",{class:!0});var i=p(t);s=c(i,"IMG",{src:!0,alt:!0,class:!0}),l=M(i),f=c(i,"A",{href:!0,target:!0,class:!0});var v=p(f);h=g(v,"view repo"),v.forEach(n),i.forEach(n),this.h()},h(){ce(s.src,r="/img/github-mark-white.png")||a(s,"src",r),a(s,"alt","github logo"),a(s,"class","svelte-tl638r"),a(f,"href",d=ur+k[0]),a(f,"target","_blank"),a(f,"class","svelte-tl638r"),a(t,"class","gh-link svelte-tl638r")},m(u,i){q(u,t,i),e(t,s),e(t,l),e(t,f),e(f,h)},p(u,[i]){i&1&&d!==(d=ur+u[0])&&a(f,"href",d)},i:fe,o:fe,d(u){u&&n(t)}}}const ur="https://github.com/pnwheeler/";function Ur(k,t,s){let{link:r=""}=t;return k.$$set=l=>{"link"in l&&s(0,r=l.link)},[r]}class Xe extends te{constructor(t){super(),re(this,t,Ur,xr,se,{link:0})}}function Hr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R,y,m,b,G,x,L,U,H,W,j,X,ae,De,_e,Ge,de,Y,Ie;return Y=new Xe({props:{link:"drug-generator"}}),{c(){t=o("div"),s=o("div"),r=o("p"),l=_("I love drug names. They dont "),f=o("em"),h=_("mean"),d=_(" anything, but they "),u=o("em"),i=_("sound"),v=_(" like they almost could."),w=T(),I=o("img"),$=T(),P=o("p"),E=_("[Performing "),S=o("em"),A=_("market research"),C=_(".]"),V=T(),D=o("p"),R=_(`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). The names were one hot encoded, split into subsequences, batched up, and shuffled around.`),y=T(),m=o("p"),b=_("I ("),G=o("small"),x=_("somewhat arbitrarily"),L=_(`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),U=o("small"),H=_("again, somewhat arbitrarily"),W=_(`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),j=o("a"),X=_("names"),ae=_(`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),De=T(),_e=o("p"),Ge=_("Written in Python using pandas and TensorFlow."),de=T(),Q(Y.$$.fragment),this.h()},l(le){t=c(le,"DIV",{class:!0});var $e=p(t);s=c($e,"DIV",{class:!0});var K=p(s);r=c(K,"P",{});var ne=p(r);l=g(ne,"I love drug names. They dont "),f=c(ne,"EM",{});var Le=p(f);h=g(Le,"mean"),Le.forEach(n),d=g(ne," anything, but they "),u=c(ne,"EM",{});var xe=p(u);i=g(xe,"sound"),xe.forEach(n),v=g(ne," like they almost could."),ne.forEach(n),w=M(K),I=c(K,"IMG",{src:!0,alt:!0}),$=M(K),P=c(K,"P",{class:!0,style:!0});var ke=p(P);E=g(ke,"[Performing "),S=c(ke,"EM",{});var pe=p(S);A=g(pe,"market research"),pe.forEach(n),C=g(ke,".]"),ke.forEach(n),V=M(K),D=c(K,"P",{});var ge=p(D);R=g(ge,`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). The names were one hot encoded, split into subsequences, batched up, and shuffled around.`),ge.forEach(n),y=M(K),m=c(K,"P",{});var oe=p(m);b=g(oe,"I ("),G=c(oe,"SMALL",{});var Ue=p(G);x=g(Ue,"somewhat arbitrarily"),Ue.forEach(n),L=g(oe,`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),U=c(oe,"SMALL",{});var He=p(U);H=g(He,"again, somewhat arbitrarily"),He.forEach(n),W=g(oe,`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),j=c(oe,"A",{href:!0,target:!0});var he=p(j);X=g(he,"names"),he.forEach(n),ae=g(oe,`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),oe.forEach(n),De=M(K),_e=c(K,"P",{});var Ee=p(_e);Ge=g(Ee,"Written in Python using pandas and TensorFlow."),Ee.forEach(n),de=M(K),ie(Y.$$.fragment,K),K.forEach(n),$e.forEach(n),this.h()},h(){ce(I.src,N="img/drug_namer.gif")||a(I,"src",N),a(I,"alt","generating drugs gif"),a(P,"class","caption"),ve(P,"text-align","center"),a(j,"href","https://github.com/pnwheeler/drug-generator/blob/main/fake_drugs.txt"),a(j,"target","_blank"),a(s,"class","desc"),a(t,"class","desc-wrapper")},m(le,$e){q(le,t,$e),e(t,s),e(s,r),e(r,l),e(r,f),e(f,h),e(r,d),e(r,u),e(u,i),e(r,v),e(s,w),e(s,I),e(s,$),e(s,P),e(P,E),e(P,S),e(S,A),e(P,C),e(s,V),e(s,D),e(D,R),e(s,y),e(s,m),e(m,b),e(m,G),e(G,x),e(m,L),e(m,U),e(U,H),e(m,W),e(m,j),e(j,X),e(m,ae),e(s,De),e(s,_e),e(_e,Ge),e(s,de),Z(Y,s,null),Ie=!0},p:fe,i(le){Ie||(O(Y.$$.fragment,le),Ie=!0)},o(le){z(Y.$$.fragment,le),Ie=!1},d(le){le&&n(t),ee(Y)}}}class Or extends te{constructor(t){super(),re(this,t,null,Hr,se,{})}}function jr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R,y,m;return y=new Xe({props:{link:"TRIMCROP"}}),{c(){t=o("div"),s=o("div"),r=o("img"),f=T(),h=o("div"),d=o("p"),u=_(`Sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software. Gave me a good excuse to play around with the Qt ecosystem.`),i=T(),v=o("p"),w=_("Created the interface (which is basically a media player + some overlays) with QML, and used C++ to plug it up to ffmpeg."),I=T(),N=o("p"),$=_("The border on the cropper is a bit janky, but I still find myself using it a decent amount."),P=T(),E=o("div"),S=o("p"),A=_("[Demoing on a video I took of Jojo having a bad dream >.<]"),C=T(),V=o("p"),D=_("Written with Qt6 & ffmpeg."),R=T(),Q(y.$$.fragment),this.h()},l(b){t=c(b,"DIV",{class:!0});var G=p(t);s=c(G,"DIV",{class:!0});var x=p(s);r=c(x,"IMG",{src:!0,alt:!0,class:!0}),f=M(x),h=c(x,"DIV",{class:!0});var L=p(h);d=c(L,"P",{});var U=p(d);u=g(U,`Sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software. Gave me a good excuse to play around with the Qt ecosystem.`),U.forEach(n),i=M(L),v=c(L,"P",{});var H=p(v);w=g(H,"Created the interface (which is basically a media player + some overlays) with QML, and used C++ to plug it up to ffmpeg."),H.forEach(n),I=M(L),N=c(L,"P",{});var W=p(N);$=g(W,"The border on the cropper is a bit janky, but I still find myself using it a decent amount."),W.forEach(n),L.forEach(n),x.forEach(n),P=M(G),E=c(G,"DIV",{class:!0,style:!0});var j=p(E);S=c(j,"P",{class:!0,style:!0});var X=p(S);A=g(X,"[Demoing on a video I took of Jojo having a bad dream >.<]"),X.forEach(n),C=M(j),V=c(j,"P",{});var ae=p(V);D=g(ae,"Written with Qt6 & ffmpeg."),ae.forEach(n),R=M(j),ie(y.$$.fragment,j),j.forEach(n),G.forEach(n),this.h()},h(){ce(r.src,l="/img/trimcrop.gif")||a(r,"src",l),a(r,"alt","crop interface"),a(r,"class","svelte-1lawn3q"),a(h,"class","txt svelte-1lawn3q"),a(s,"class","trimcrop svelte-1lawn3q"),a(S,"class","caption"),ve(S,"width","100%"),a(E,"class","desc"),ve(E,"width","100%"),a(t,"class","desc-wrapper")},m(b,G){q(b,t,G),e(t,s),e(s,r),e(s,f),e(s,h),e(h,d),e(d,u),e(h,i),e(h,v),e(v,w),e(h,I),e(h,N),e(N,$),e(t,P),e(t,E),e(E,S),e(S,A),e(E,C),e(E,V),e(V,D),e(E,R),Z(y,E,null),m=!0},p:fe,i(b){m||(O(y.$$.fragment,b),m=!0)},o(b){z(y.$$.fragment,b),m=!1},d(b){b&&n(t),ee(y)}}}class zr extends te{constructor(t){super(),re(this,t,null,jr,se,{})}}function Kr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R,y;return R=new Xe({props:{link:"stabilizer"}}),{c(){t=o("div"),s=o("img"),l=T(),f=o("p"),h=_("[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),d=T(),u=o("div"),i=o("p"),v=_(`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),w=o("a"),I=_("this"),N=_(`. \r
        `),$=o("p"),P=_(`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),E=o("small"),S=_("In the name of consistent formatting, fake link to 404."),A=T(),C=o("p"),V=_("Written in Python using OpenCV."),D=T(),Q(R.$$.fragment),this.h()},l(m){t=c(m,"DIV",{class:!0});var b=p(t);s=c(b,"IMG",{style:!0,src:!0,alt:!0}),l=M(b),f=c(b,"P",{class:!0});var G=p(f);h=g(G,"[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),G.forEach(n),d=M(b),u=c(b,"DIV",{class:!0});var x=p(u);i=c(x,"P",{});var L=p(i);v=g(L,`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),w=c(L,"A",{href:!0,target:!0});var U=p(w);I=g(U,"this"),U.forEach(n),N=g(L,`. \r
        `),L.forEach(n),$=c(x,"P",{});var H=p($);P=g(H,`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),E=c(H,"SMALL",{});var W=p(E);S=g(W,"In the name of consistent formatting, fake link to 404."),W.forEach(n),H.forEach(n),A=M(x),C=c(x,"P",{});var j=p(C);V=g(j,"Written in Python using OpenCV."),j.forEach(n),D=M(x),ie(R.$$.fragment,x),x.forEach(n),b.forEach(n),this.h()},h(){ve(s,"width","50%"),ce(s.src,r="/img/stabilizer.gif")||a(s,"src",r),a(s,"alt","before_after_composite"),a(f,"class","caption"),a(w,"href","https://www.storyzapp.com/"),a(w,"target","_blank"),a(u,"class","desc"),a(t,"class","desc-wrapper")},m(m,b){q(m,t,b),e(t,s),e(t,l),e(t,f),e(f,h),e(t,d),e(t,u),e(u,i),e(i,v),e(i,w),e(w,I),e(i,N),e(u,$),e($,P),e($,E),e(E,S),e(u,A),e(u,C),e(C,V),e(u,D),Z(R,u,null),y=!0},p:fe,i(m){y||(O(R.$$.fragment,m),y=!0)},o(m){z(R.$$.fragment,m),y=!1},d(m){m&&n(t),ee(R)}}}class Br extends te{constructor(t){super(),re(this,t,null,Kr,se,{})}}function Wr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R,y;return R=new Xe({props:{link:"MiscGraphics/tree/main/Rendering"}}),{c(){t=o("div"),s=o("div"),r=o("img"),f=T(),h=o("img"),u=T(),i=o("p"),v=_("[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),w=T(),I=o("div"),N=o("p"),$=_(`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),P=T(),E=o("p"),S=_("Written in C++ "),A=o("span"),C=_("—"),V=_(" Uses Eigen.h for a few matrix ops."),D=T(),Q(R.$$.fragment),this.h()},l(m){t=c(m,"DIV",{class:!0});var b=p(t);s=c(b,"DIV",{style:!0});var G=p(s);r=c(G,"IMG",{style:!0,src:!0,alt:!0}),f=M(G),h=c(G,"IMG",{style:!0,src:!0,alt:!0}),G.forEach(n),u=M(b),i=c(b,"P",{class:!0});var x=p(i);v=g(x,"[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),x.forEach(n),w=M(b),I=c(b,"DIV",{class:!0});var L=p(I);N=c(L,"P",{});var U=p(N);$=g(U,`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),U.forEach(n),P=M(L),E=c(L,"P",{});var H=p(E);S=g(H,"Written in C++ "),A=c(H,"SPAN",{});var W=p(A);C=g(W,"—"),W.forEach(n),V=g(H," Uses Eigen.h for a few matrix ops."),H.forEach(n),D=M(L),ie(R.$$.fragment,L),L.forEach(n),b.forEach(n),this.h()},h(){ve(r,"width","45%"),ce(r.src,l="/img/ray.png")||a(r,"src",l),a(r,"alt","ray traced balls"),ve(h,"width","45%"),ce(h.src,d="/img/raster.png")||a(h,"src",d),a(h,"alt","rasterizer output Utah teapot"),ve(s,"display","flex"),ve(s,"justify-content","space-evenly"),a(i,"class","caption"),a(I,"class","desc"),a(t,"class","desc-wrapper")},m(m,b){q(m,t,b),e(t,s),e(s,r),e(s,f),e(s,h),e(t,u),e(t,i),e(i,v),e(t,w),e(t,I),e(I,N),e(N,$),e(I,P),e(I,E),e(E,S),e(E,A),e(A,C),e(E,V),e(I,D),Z(R,I,null),y=!0},p:fe,i(m){y||(O(R.$$.fragment,m),y=!0)},o(m){z(R.$$.fragment,m),y=!1},d(m){m&&n(t),ee(R)}}}class qr extends te{constructor(t){super(),re(this,t,null,Wr,se,{})}}function Fr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R;return D=new Xe({props:{link:"seam-carving"}}),{c(){t=o("div"),s=o("img"),l=T(),f=o("p"),h=_("[Gif of output at each step: seam colored red]"),d=T(),u=o("div"),i=o("p"),v=_("This was another project for the computer graphics course."),w=T(),I=o("p"),N=_(`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),$=T(),P=o("p"),E=_("Written in C++ "),S=o("span"),A=_("—"),C=_(" uses CImg.h for the masking tool."),V=T(),Q(D.$$.fragment),this.h()},l(y){t=c(y,"DIV",{class:!0});var m=p(t);s=c(m,"IMG",{src:!0,alt:!0}),l=M(m),f=c(m,"P",{class:!0});var b=p(f);h=g(b,"[Gif of output at each step: seam colored red]"),b.forEach(n),d=M(m),u=c(m,"DIV",{class:!0});var G=p(u);i=c(G,"P",{});var x=p(i);v=g(x,"This was another project for the computer graphics course."),x.forEach(n),w=M(G),I=c(G,"P",{});var L=p(I);N=g(L,`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),L.forEach(n),$=M(G),P=c(G,"P",{});var U=p(P);E=g(U,"Written in C++ "),S=c(U,"SPAN",{});var H=p(S);A=g(H,"—"),H.forEach(n),C=g(U," uses CImg.h for the masking tool."),U.forEach(n),V=M(G),ie(D.$$.fragment,G),G.forEach(n),m.forEach(n),this.h()},h(){ce(s.src,r="/img/seam_carve.gif")||a(s,"src",r),a(s,"alt","crop interface"),a(f,"class","caption"),a(u,"class","desc"),a(t,"class","desc-wrapper")},m(y,m){q(y,t,m),e(t,s),e(t,l),e(t,f),e(f,h),e(t,d),e(t,u),e(u,i),e(i,v),e(u,w),e(u,I),e(I,N),e(u,$),e(u,P),e(P,E),e(P,S),e(S,A),e(P,C),e(u,V),Z(D,u,null),R=!0},p:fe,i(y){R||(O(D.$$.fragment,y),R=!0)},o(y){z(D.$$.fragment,y),R=!1},d(y){y&&n(t),ee(D)}}}class Xr extends te{constructor(t){super(),re(this,t,null,Fr,se,{})}}function Yr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S,A,C,V,D,R;return D=new Xe({props:{link:"howard_cycling"}}),{c(){t=o("div"),s=o("img"),l=T(),f=o("p"),h=_("[Clicking buttons and switching tabs]."),d=T(),u=o("div"),i=o("p"),v=_("An info site for a local mountain biking club (to-be)."),w=T(),I=o("p"),N=_("Had a blast making all the "),$=o("a"),P=_("assets"),E=_(` \r
            and learned a lot about CSS, variable fonts, and mobile-first layouts.`),S=T(),A=o("p"),C=_("Made with SvelteKit & deployed on netlify."),V=T(),Q(D.$$.fragment),this.h()},l(y){t=c(y,"DIV",{class:!0});var m=p(t);s=c(m,"IMG",{src:!0,alt:!0}),l=M(m),f=c(m,"P",{class:!0});var b=p(f);h=g(b,"[Clicking buttons and switching tabs]."),b.forEach(n),d=M(m),u=c(m,"DIV",{class:!0});var G=p(u);i=c(G,"P",{});var x=p(i);v=g(x,"An info site for a local mountain biking club (to-be)."),x.forEach(n),w=M(G),I=c(G,"P",{});var L=p(I);N=g(L,"Had a blast making all the "),$=c(L,"A",{href:!0,target:!0});var U=p($);P=g(U,"assets"),U.forEach(n),E=g(L,` \r
            and learned a lot about CSS, variable fonts, and mobile-first layouts.`),L.forEach(n),S=M(G),A=c(G,"P",{});var H=p(A);C=g(H,"Made with SvelteKit & deployed on netlify."),H.forEach(n),V=M(G),ie(D.$$.fragment,G),G.forEach(n),m.forEach(n),this.h()},h(){ce(s.src,r="/img/howard_cycling_desktop.gif")||a(s,"src",r),a(s,"alt","demo of website"),a(f,"class","caption"),a($,"href","https://codepen.io/patwheeler/pen/JjeyOMZ"),a($,"target","_blank"),a(u,"class","desc"),a(t,"class","desc-wrapper")},m(y,m){q(y,t,m),e(t,s),e(t,l),e(t,f),e(f,h),e(t,d),e(t,u),e(u,i),e(i,v),e(u,w),e(u,I),e(I,N),e(I,$),e($,P),e(I,E),e(u,S),e(u,A),e(A,C),e(u,V),Z(D,u,null),R=!0},p:fe,i(y){R||(O(D.$$.fragment,y),R=!0)},o(y){z(D.$$.fragment,y),R=!1},d(y){y&&n(t),ee(D)}}}class Jr extends te{constructor(t){super(),re(this,t,null,Yr,se,{})}}function dr(k,t,s){const r=k.slice();return r[1]=t[s],r}function fr(k,t){let s,r,l;const f=[t[1]];let h={};for(let d=0;d<f.length;d+=1)h=gr(h,f[d]);return r=new Lr({props:h}),{key:k,first:null,c(){s=o("div"),Q(r.$$.fragment),this.h()},l(d){s=c(d,"DIV",{});var u=p(s);ie(r.$$.fragment,u),u.forEach(n),this.h()},h(){this.first=s},m(d,u){q(d,s,u),Z(r,s,null),l=!0},p(d,u){t=d;const i=u&1?Er(f,[yr(t[1])]):{};r.$set(i)},i(d){l||(O(r.$$.fragment,d),l=!0)},o(d){z(r.$$.fragment,d),l=!1},d(d){d&&n(s),ee(r)}}}function Qr(k){let t=[],s=new Map,r,l,f=k[0];const h=d=>d[1];for(let d=0;d<f.length;d+=1){let u=dr(k,f,d),i=h(u);s.set(i,t[d]=fr(i,u))}return{c(){for(let d=0;d<t.length;d+=1)t[d].c();r=Ae()},l(d){for(let u=0;u<t.length;u+=1)t[u].l(d);r=Ae()},m(d,u){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(d,u);q(d,r,u),l=!0},p(d,[u]){u&1&&(f=d[0],qe(),t=_r(t,u,h,1,d,f,s,r.parentNode,br,fr,r,dr),Fe())},i(d){if(!l){for(let u=0;u<f.length;u+=1)O(t[u]);l=!0}},o(d){for(let u=0;u<t.length;u+=1)z(t[u]);l=!1},d(d){for(let u=0;u<t.length;u+=1)t[u].d(d);d&&n(r)}}}function Zr(k){return[[{title:"Static site",subtitle:"Website for a mountain biking club",date:"Jul 2023",component:Jr},{title:"Drug generator",subtitle:"Character-level RNN",date:"Apr 2023",component:Or},{title:"TRIMCROP",subtitle:"Trim and crop video",date:"Jan 2023",component:zr},{title:"Gif stabilization",subtitle:"Program to stabilize gifs",date:"Jul 2022",component:Br},{title:"Seam Carving",subtitle:"Content-aware image resizing",date:"Jul 2021",component:Xr},{title:"Static Renderers",subtitle:"Raytracer and rasterizer",date:"Jun 2021",component:qr}]]}class es extends te{constructor(t){super(),re(this,t,Zr,Qr,se,{})}}function pr(k){let t,s,r,l,f,h,d,u,i,v,w,I,N,$,P,E,S;return l=new wr({}),d=new Rr({}),I=new Sr({}),P=new es({}),{c(){t=o("div"),s=o("div"),r=o("div"),Q(l.$$.fragment),f=T(),h=o("div"),Q(d.$$.fragment),i=T(),v=o("div"),w=o("div"),Q(I.$$.fragment),N=T(),$=o("div"),Q(P.$$.fragment),this.h()},l(A){t=c(A,"DIV",{id:!0,class:!0});var C=p(t);s=c(C,"DIV",{id:!0,class:!0});var V=p(s);r=c(V,"DIV",{id:!0,class:!0});var D=p(r);ie(l.$$.fragment,D),D.forEach(n),f=M(V),h=c(V,"DIV",{id:!0,class:!0});var R=p(h);ie(d.$$.fragment,R),R.forEach(n),V.forEach(n),i=M(C),v=c(C,"DIV",{id:!0,class:!0});var y=p(v);w=c(y,"DIV",{id:!0,class:!0});var m=p(w);ie(I.$$.fragment,m),m.forEach(n),N=M(y),$=c(y,"DIV",{id:!0,class:!0});var b=p($);ie(P.$$.fragment,b),b.forEach(n),y.forEach(n),C.forEach(n),this.h()},h(){a(r,"id","about-text"),a(r,"class","svelte-18dtzke"),a(h,"id","about-card"),a(h,"class","svelte-18dtzke"),a(s,"id","about-section"),a(s,"class","svelte-18dtzke"),a(w,"id","projects-text"),a(w,"class","svelte-18dtzke"),a($,"id","projects-content"),a($,"class","svelte-18dtzke"),a(v,"id","project-section"),a(v,"class","svelte-18dtzke"),a(t,"id","content-area"),a(t,"class","svelte-18dtzke")},m(A,C){q(A,t,C),e(t,s),e(s,r),Z(l,r,null),e(s,f),e(s,h),Z(d,h,null),e(t,i),e(t,v),e(v,w),Z(I,w,null),e(v,N),e(v,$),Z(P,$,null),S=!0},i(A){S||(O(l.$$.fragment,A),O(d.$$.fragment,A),me(()=>{S&&(u||(u=B(h,ue,{y:-500,duration:2e3,delay:1500},!0)),u.run(1))}),O(I.$$.fragment,A),O(P.$$.fragment,A),me(()=>{S&&(E||(E=B($,ue,{y:500,duration:1500,delay:2400},!0)),E.run(1))}),S=!0)},o(A){z(l.$$.fragment,A),z(d.$$.fragment,A),u||(u=B(h,ue,{y:-500,duration:2e3,delay:1500},!1)),u.run(0),z(I.$$.fragment,A),z(P.$$.fragment,A),E||(E=B($,ue,{y:500,duration:1500,delay:2400},!1)),E.run(0),S=!1},d(A){A&&n(t),ee(l),ee(d),A&&u&&u.end(),ee(I),ee(P),A&&E&&E.end()}}}function ts(k){let t,s,r=k[0]&&pr();return{c(){r&&r.c(),t=Ae()},l(l){r&&r.l(l),t=Ae()},m(l,f){r&&r.m(l,f),q(l,t,f),s=!0},p(l,[f]){l[0]?r?f&1&&O(r,1):(r=pr(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(qe(),z(r,1,1,()=>{r=null}),Fe())},i(l){s||(O(r),s=!0)},o(l){z(r),s=!1},d(l){r&&r.d(l),l&&n(t)}}}function rs(k,t,s){let r=!1;return Dt(()=>s(0,r=!0)),[r]}class ls extends te{constructor(t){super(),re(this,t,rs,ts,se,{})}}export{ls as component,as as universal};