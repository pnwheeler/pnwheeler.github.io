import{J as rr,K as gr,S as ne,i as ie,s as oe,e as Ie,b as q,g as O,v as ze,d as z,f as Be,h as i,o as Rt,k as o,q as m,a as S,l as c,m as u,r as g,c as T,n as l,G as e,L as _e,M as B,p as Me,N as ar,O as vr,H as ke,y as ae,z as ue,P as ge,A as se,B as le,Q as sr,R as lr,u as At,x as nr,T as _r,U as Er,V as yr,W as br}from"../chunks/index.b084e3b7.js";const Ir=!0,ra=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ir},Symbol.toStringTag,{value:"Module"}));function mr(y){const t=y-1;return t*t*t+1}function tt(y,{delay:t=0,duration:a=400,easing:r=gr}={}){const s=+getComputedStyle(y).opacity;return{delay:t,duration:a,easing:r,css:d=>`opacity: ${d*s}`}}function fe(y,{delay:t=0,duration:a=400,easing:r=mr,x:s=0,y:d=0,opacity:n=0}={}){const p=getComputedStyle(y),f=+p.opacity,h=p.transform==="none"?"":p.transform,v=f*(1-n),[w,I]=rr(s),[N,$]=rr(d);return{delay:t,duration:a,easing:r,css:(k,_)=>`
			transform: ${h} translate(${(1-k)*w}${I}, ${(1-k)*N}${$});
			opacity: ${f-v*_}`}}function pt(y,{delay:t=0,duration:a=400,easing:r=mr,axis:s="y"}={}){const d=getComputedStyle(y),n=+d.opacity,p=s==="y"?"height":"width",f=parseFloat(d[p]),h=s==="y"?["top","bottom"]:["left","right"],v=h.map(P=>`${P[0].toUpperCase()}${P.slice(1)}`),w=parseFloat(d[`padding${v[0]}`]),I=parseFloat(d[`padding${v[1]}`]),N=parseFloat(d[`margin${v[0]}`]),$=parseFloat(d[`margin${v[1]}`]),k=parseFloat(d[`border${v[0]}Width`]),_=parseFloat(d[`border${v[1]}Width`]);return{delay:t,duration:a,easing:r,css:P=>`overflow: hidden;opacity: ${Math.min(P*20,1)*n};${p}: ${P*f}px;padding-${h[0]}: ${P*w}px;padding-${h[1]}: ${P*I}px;margin-${h[0]}: ${P*N}px;margin-${h[1]}: ${P*$}px;border-${h[0]}-width: ${P*k}px;border-${h[1]}-width: ${P*_}px;`}}function ir(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R;return{c(){t=o("div"),a=o("h1"),r=m("about"),d=S(),n=o("hr"),f=S(),h=o("div"),v=o("p"),w=m("Hi! My name's "),I=o("span"),N=m("Patrick"),$=m("."),k=S(),_=o("p"),P=m("I graduated from UMBC with a degree in computer science and am currently looking for an entry level position!"),G=S(),V=o("p"),C=m("I like learning about graphics, games, and multimedia in general."),this.h()},l(D){t=c(D,"DIV",{class:!0});var b=u(t);a=c(b,"H1",{});var E=u(a);r=g(E,"about"),E.forEach(i),d=T(b),n=c(b,"HR",{class:!0}),f=T(b),h=c(b,"DIV",{});var M=u(h);v=c(M,"P",{});var U=u(v);w=g(U,"Hi! My name's "),I=c(U,"SPAN",{id:!0,class:!0});var L=u(I);N=g(L,"Patrick"),L.forEach(i),$=g(U,"."),U.forEach(i),k=T(M),_=c(M,"P",{});var H=u(_);P=g(H,"I graduated from UMBC with a degree in computer science and am currently looking for an entry level position!"),H.forEach(i),G=T(M),V=c(M,"P",{});var x=u(V);C=g(x,"I like learning about graphics, games, and multimedia in general."),x.forEach(i),M.forEach(i),b.forEach(i),this.h()},h(){l(n,"class","body-hr"),l(I,"id","name"),l(I,"class","svelte-1bskec0"),l(t,"class","body-section")},m(D,b){q(D,t,b),e(t,a),e(a,r),e(t,d),e(t,n),e(t,f),e(t,h),e(h,v),e(v,w),e(v,I),e(I,N),e(v,$),e(h,k),e(h,_),e(_,P),e(h,G),e(h,V),e(V,C),R=!0},i(D){R||(_e(()=>{R&&(s||(s=B(a,fe,{x:-300,duration:1700,delay:300},!0)),s.run(1))}),_e(()=>{R&&(p||(p=B(n,fe,{x:200,duration:1e3,delay:1e3},!0)),p.run(1))}),_e(()=>{R&&(A||(A=B(h,tt,{duration:1700},!0)),A.run(1))}),R=!0)},o(D){s||(s=B(a,fe,{x:-300,duration:1700,delay:300},!1)),s.run(0),p||(p=B(n,fe,{x:200,duration:1e3,delay:1e3},!1)),p.run(0),A||(A=B(h,tt,{duration:1700},!1)),A.run(0),R=!1},d(D){D&&i(t),D&&s&&s.end(),D&&p&&p.end(),D&&A&&A.end()}}}function kr(y){let t,a,r=y[0]&&ir();return{c(){r&&r.c(),t=Ie()},l(s){r&&r.l(s),t=Ie()},m(s,d){r&&r.m(s,d),q(s,t,d),a=!0},p(s,[d]){s[0]?r?d&1&&O(r,1):(r=ir(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(ze(),z(r,1,1,()=>{r=null}),Be())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function $r(y,t,a){let{ready:r=!1}=t;return Rt(()=>a(0,r=!0)),y.$$set=s=>{"ready"in s&&a(0,r=s.ready)},[r]}class wr extends ne{constructor(t){super(),ie(this,t,$r,kr,oe,{ready:0})}}function or(y){let t,a,r,s,d,n,p,f,h,v,w,I;return{c(){t=o("div"),a=o("h1"),r=m("projects"),d=S(),n=o("hr"),f=S(),h=o("p"),v=m("Here are some things I've made."),this.h()},l(N){t=c(N,"DIV",{class:!0});var $=u(t);a=c($,"H1",{});var k=u(a);r=g(k,"projects"),k.forEach(i),d=T($),n=c($,"HR",{class:!0}),f=T($),h=c($,"P",{style:!0});var _=u(h);v=g(_,"Here are some things I've made."),_.forEach(i),$.forEach(i),this.h()},h(){l(n,"class","body-hr"),Me(h,"text-align","left"),Me(h,"margin-bottom","1em"),l(t,"class","body-section")},m(N,$){q(N,t,$),e(t,a),e(a,r),e(t,d),e(t,n),e(t,f),e(t,h),e(h,v),I=!0},i(N){I||(_e(()=>{I&&(s||(s=B(a,fe,{x:300,duration:1700,delay:2e3},!0)),s.run(1))}),_e(()=>{I&&(p||(p=B(n,fe,{x:-200,duration:1e3,delay:2700},!0)),p.run(1))}),_e(()=>{I&&(w||(w=B(h,tt,{delay:1700,duration:1700},!0)),w.run(1))}),I=!0)},o(N){s||(s=B(a,fe,{x:300,duration:1700,delay:2e3},!1)),s.run(0),p||(p=B(n,fe,{x:-200,duration:1e3,delay:2700},!1)),p.run(0),w||(w=B(h,tt,{delay:1700,duration:1700},!1)),w.run(0),I=!1},d(N){N&&i(t),N&&s&&s.end(),N&&p&&p.end(),N&&w&&w.end()}}}function Nr(y){let t,a,r=y[0]&&or();return{c(){r&&r.c(),t=Ie()},l(s){r&&r.l(s),t=Ie()},m(s,d){r&&r.m(s,d),q(s,t,d),a=!0},p(s,[d]){s[0]?r?d&1&&O(r,1):(r=or(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(ze(),z(r,1,1,()=>{r=null}),Be())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Pr(y,t,a){let{ready:r=!1}=t;return Rt(()=>a(0,r=!0)),y.$$set=s=>{"ready"in s&&a(0,r=s.ready)},[r]}class Sr extends ne{constructor(t){super(),ie(this,t,Pr,Nr,oe,{ready:0})}}function Tr(y){let t,a,r,s,d,n,p,f,h,v,w,I;return{c(){t=o("button"),a=o("p"),r=m("WEB3 NFT CRYPTO AI"),s=S(),d=o("p"),n=m("THE AUGMENTED METAVERSE EXPERIENCE"),p=S(),f=o("p"),h=m("ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),this.h()},l(N){t=c(N,"BUTTON",{class:!0});var $=u(t);a=c($,"P",{id:!0,class:!0});var k=u(a);r=g(k,"WEB3 NFT CRYPTO AI"),k.forEach(i),s=T($),d=c($,"P",{id:!0,class:!0});var _=u(d);n=g(_,"THE AUGMENTED METAVERSE EXPERIENCE"),_.forEach(i),p=T($),f=c($,"P",{id:!0,class:!0});var P=u(f);h=g(P,"ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),P.forEach(i),$.forEach(i),this.h()},h(){l(a,"id","top"),l(a,"class","svelte-aaklg"),l(d,"id","mid"),l(d,"class","svelte-aaklg"),l(f,"id","bot"),l(f,"class","svelte-aaklg"),l(t,"class",v=ar(y[0]?"speaking":"")+" svelte-aaklg")},m(N,$){q(N,t,$),e(t,a),e(a,r),e(t,s),e(t,d),e(d,n),e(t,p),e(t,f),e(f,h),w||(I=vr(t,"click",y[1]),w=!0)},p(N,[$]){$&1&&v!==(v=ar(N[0]?"speaking":"")+" svelte-aaklg")&&l(t,"class",v)},i:ke,o:ke,d(N){N&&i(t),w=!1,I()}}}function Mr(y,t,a){let{words:r=""}=t;const s=window.speechSynthesis;let d=!1;function n(){if(s.speaking){a(0,d=!1),s.cancel();return}const p=s.getVoices();let f=Math.random()*3,h=Math.floor(Math.random()*p.length);const v=new SpeechSynthesisUtterance(r);v.voice=p[h],v.pitch=f,v.lang="en-US",s.speak(v),a(0,d=!0),v.onend=w=>{a(0,d=!1)}}return y.$$set=p=>{"words"in p&&a(2,r=p.words)},[d,n,r,s]}class Dr extends ne{constructor(t){super(),ie(this,t,Mr,Tr,oe,{words:2,synth:3})}get synth(){return this.$$.ctx[3]}}function Ar(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R,D,b,E,M,U,L,H,x,K,W,j,Y,$e,Ce,Le,te,Ee,Ue,pe,xe,he,ye,we,Oe,He,J,ve,re,De,F,Q,Ne,Ke,Z,We,be,Pe,qe,Fe,ce,de,me,rt,Xe,Ae,Gt,ht,Ye,je,vt,Re,at,mt,Ge,Je,Qe,gt,_t,Ze,Se,Et,st,yt,bt,lt,It,kt,et,$t,ot;return je=new Dr({props:{words:Rr}}),{c(){t=o("div"),a=o("img"),s=S(),d=o("div"),n=o("div"),p=o("span"),f=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),h=S(),v=o("span"),w=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),I=S(),N=o("span"),$=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),k=S(),_=o("span"),P=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),G=S(),V=o("div"),C=o("div"),A=o("div"),R=o("img"),b=S(),E=o("div"),M=o("hr"),U=S(),L=o("p"),H=o("span"),x=m("ISS:"),K=m(" 06/11/23"),W=S(),j=o("p"),Y=o("span"),$e=m("LOC:"),Ce=m(" MD, USA"),Le=S(),te=o("p"),Ee=o("span"),Ue=m("EDU:"),pe=m(" B.S."),xe=S(),he=o("p"),ye=o("span"),we=m("AGE:"),Oe=m(" 13-54"),He=S(),J=o("p"),ve=o("span"),re=m("EYE:"),De=m(" BRN"),F=S(),Q=o("p"),Ne=o("span"),Ke=m("HAND:"),Z=m(" RGT"),We=S(),be=o("p"),Pe=o("span"),qe=m("MENTAL:"),Fe=m(" HEALTH!"),ce=S(),de=o("div"),me=o("img"),Xe=S(),Ae=o("img"),ht=S(),Ye=o("div"),ae(je.$$.fragment),vt=S(),Re=o("div"),at=o("hr"),mt=S(),Ge=o("ul"),Je=o("li"),Qe=o("span"),gt=m("Can kickflip, Moira main, dairy allergy haver, bookmark hoarder"),_t=S(),Ze=o("li"),Se=o("span"),Et=m('Really impressive leetcode skills: "\\/\\/0vv! 5() 1m|'),st=o("sup"),yt=m("o"),bt=m('r3ss1v3", '),lt=o("em"),It=m("QED."),kt=S(),et=o("div"),$t=m("NO_UNAUTH_SALE"),this.h()},l(Te){t=c(Te,"DIV",{class:!0});var ee=u(t);a=c(ee,"IMG",{id:!0,src:!0,alt:!0,class:!0}),s=T(ee),d=c(ee,"DIV",{class:!0});var Vt=u(d);n=c(Vt,"DIV",{class:!0});var Ve=u(n);p=c(Ve,"SPAN",{class:!0});var Ct=u(p);f=g(Ct,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Ct.forEach(i),h=T(Ve),v=c(Ve,"SPAN",{class:!0});var Lt=u(v);w=g(Lt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Lt.forEach(i),I=T(Ve),N=c(Ve,"SPAN",{class:!0});var Ut=u(N);$=g(Ut,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Ut.forEach(i),k=T(Ve),_=c(Ve,"SPAN",{class:!0});var xt=u(_);P=g(xt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),xt.forEach(i),Ve.forEach(i),Vt.forEach(i),G=T(ee),V=c(ee,"DIV",{class:!0});var ct=u(V);C=c(ct,"DIV",{id:!0,class:!0});var Ot=u(C);A=c(Ot,"DIV",{id:!0,class:!0});var Ht=u(A);R=c(Ht,"IMG",{id:!0,src:!0,alt:!0,class:!0}),Ht.forEach(i),Ot.forEach(i),b=T(ct),E=c(ct,"DIV",{class:!0});var X=u(E);M=c(X,"HR",{class:!0}),U=T(X),L=c(X,"P",{class:!0});var wt=u(L);H=c(wt,"SPAN",{class:!0});var jt=u(H);x=g(jt,"ISS:"),jt.forEach(i),K=g(wt," 06/11/23"),wt.forEach(i),W=T(X),j=c(X,"P",{class:!0});var Nt=u(j);Y=c(Nt,"SPAN",{class:!0});var zt=u(Y);$e=g(zt,"LOC:"),zt.forEach(i),Ce=g(Nt," MD, USA"),Nt.forEach(i),Le=T(X),te=c(X,"P",{class:!0});var Pt=u(te);Ee=c(Pt,"SPAN",{class:!0});var Bt=u(Ee);Ue=g(Bt,"EDU:"),Bt.forEach(i),pe=g(Pt," B.S."),Pt.forEach(i),xe=T(X),he=c(X,"P",{class:!0});var St=u(he);ye=c(St,"SPAN",{class:!0});var Kt=u(ye);we=g(Kt,"AGE:"),Kt.forEach(i),Oe=g(St," 13-54"),St.forEach(i),He=T(X),J=c(X,"P",{class:!0});var Tt=u(J);ve=c(Tt,"SPAN",{class:!0});var Wt=u(ve);re=g(Wt,"EYE:"),Wt.forEach(i),De=g(Tt," BRN"),Tt.forEach(i),F=T(X),Q=c(X,"P",{class:!0});var Mt=u(Q);Ne=c(Mt,"SPAN",{class:!0});var qt=u(Ne);Ke=g(qt,"HAND:"),qt.forEach(i),Z=g(Mt," RGT"),Mt.forEach(i),We=T(X),be=c(X,"P",{class:!0});var Dt=u(be);Pe=c(Dt,"SPAN",{class:!0});var Ft=u(Pe);qe=g(Ft,"MENTAL:"),Ft.forEach(i),Fe=g(Dt," HEALTH!"),Dt.forEach(i),ce=T(X),de=c(X,"DIV",{id:!0,class:!0});var dt=u(de);me=c(dt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),Xe=T(dt),Ae=c(dt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),dt.forEach(i),X.forEach(i),ct.forEach(i),ht=T(ee),Ye=c(ee,"DIV",{class:!0});var Xt=u(Ye);ue(je.$$.fragment,Xt),Xt.forEach(i),vt=T(ee),Re=c(ee,"DIV",{class:!0});var ut=u(Re);at=c(ut,"HR",{id:!0,class:!0}),mt=T(ut),Ge=c(ut,"UL",{class:!0});var ft=u(Ge);Je=c(ft,"LI",{class:!0});var Yt=u(Je);Qe=c(Yt,"SPAN",{class:!0});var Jt=u(Qe);gt=g(Jt,"Can kickflip, Moira main, dairy allergy haver, bookmark hoarder"),Jt.forEach(i),Yt.forEach(i),_t=T(ft),Ze=c(ft,"LI",{class:!0});var Qt=u(Ze);Se=c(Qt,"SPAN",{class:!0});var nt=u(Se);Et=g(nt,'Really impressive leetcode skills: "\\/\\/0vv! 5() 1m|'),st=c(nt,"SUP",{});var Zt=u(st);yt=g(Zt,"o"),Zt.forEach(i),bt=g(nt,'r3ss1v3", '),lt=c(nt,"EM",{});var er=u(lt);It=g(er,"QED."),er.forEach(i),nt.forEach(i),Qt.forEach(i),ft.forEach(i),ut.forEach(i),kt=T(ee),et=c(ee,"DIV",{class:!0});var tr=u(et);$t=g(tr,"NO_UNAUTH_SALE"),tr.forEach(i),ee.forEach(i),this.h()},h(){l(a,"id","bg-card"),ge(a.src,r="/img/tech_globe.png")||l(a,"src",r),l(a,"alt","bg-img"),l(a,"class","svelte-1r9g2rd"),l(p,"class","svelte-1r9g2rd"),l(v,"class","svelte-1r9g2rd"),l(N,"class","svelte-1r9g2rd"),l(_,"class","svelte-1r9g2rd"),l(n,"class","marquee__inner svelte-1r9g2rd"),l(d,"class","marquee svelte-1r9g2rd"),l(R,"id","static"),ge(R.src,D="/img/bw_portrait.png")||l(R,"src",D),l(R,"alt","bw_portrait"),l(R,"class","svelte-1r9g2rd"),l(A,"id","hover-target"),l(A,"class","svelte-1r9g2rd"),l(C,"id","pfp"),l(C,"class","svelte-1r9g2rd"),l(M,"class","svelte-1r9g2rd"),l(H,"class","svelte-1r9g2rd"),l(L,"class","svelte-1r9g2rd"),l(Y,"class","svelte-1r9g2rd"),l(j,"class","svelte-1r9g2rd"),l(Ee,"class","svelte-1r9g2rd"),l(te,"class","svelte-1r9g2rd"),l(ye,"class","svelte-1r9g2rd"),l(he,"class","svelte-1r9g2rd"),l(ve,"class","svelte-1r9g2rd"),l(J,"class","svelte-1r9g2rd"),l(Ne,"class","svelte-1r9g2rd"),l(Q,"class","svelte-1r9g2rd"),l(Pe,"class","svelte-1r9g2rd"),l(be,"class","svelte-1r9g2rd"),l(me,"id","spinner"),ge(me.src,rt="/img/verified_1.png")||l(me,"src",rt),l(me,"alt","spinning verified"),l(me,"class","svelte-1r9g2rd"),l(Ae,"id","badge"),ge(Ae.src,Gt="/img/Greater_coat_of_arms.png")||l(Ae,"src",Gt),l(Ae,"alt","badge"),l(Ae,"class","svelte-1r9g2rd"),l(de,"id","badge_container"),l(de,"class","svelte-1r9g2rd"),l(E,"class","stats svelte-1r9g2rd"),l(V,"class","bio svelte-1r9g2rd"),l(Ye,"class","tts-button svelte-1r9g2rd"),l(at,"id","break"),l(at,"class","svelte-1r9g2rd"),l(Qe,"class","svelte-1r9g2rd"),l(Je,"class","svelte-1r9g2rd"),l(Se,"class","svelte-1r9g2rd"),l(Ze,"class","svelte-1r9g2rd"),l(Ge,"class","svelte-1r9g2rd"),l(Re,"class","facts svelte-1r9g2rd"),l(et,"class","barcode svelte-1r9g2rd"),l(t,"class","card-wrapper svelte-1r9g2rd")},m(Te,ee){q(Te,t,ee),e(t,a),e(t,s),e(t,d),e(d,n),e(n,p),e(p,f),e(n,h),e(n,v),e(v,w),e(n,I),e(n,N),e(N,$),e(n,k),e(n,_),e(_,P),e(t,G),e(t,V),e(V,C),e(C,A),e(A,R),e(V,b),e(V,E),e(E,M),e(E,U),e(E,L),e(L,H),e(H,x),e(L,K),e(E,W),e(E,j),e(j,Y),e(Y,$e),e(j,Ce),e(E,Le),e(E,te),e(te,Ee),e(Ee,Ue),e(te,pe),e(E,xe),e(E,he),e(he,ye),e(ye,we),e(he,Oe),e(E,He),e(E,J),e(J,ve),e(ve,re),e(J,De),e(E,F),e(E,Q),e(Q,Ne),e(Ne,Ke),e(Q,Z),e(E,We),e(E,be),e(be,Pe),e(Pe,qe),e(be,Fe),e(E,ce),e(E,de),e(de,me),e(de,Xe),e(de,Ae),e(t,ht),e(t,Ye),se(je,Ye,null),e(t,vt),e(t,Re),e(Re,at),e(Re,mt),e(Re,Ge),e(Ge,Je),e(Je,Qe),e(Qe,gt),e(Ge,_t),e(Ge,Ze),e(Ze,Se),e(Se,Et),e(Se,st),e(st,yt),e(Se,bt),e(Se,lt),e(lt,It),e(t,kt),e(t,et),e(et,$t),ot=!0},p:ke,i(Te){ot||(O(je.$$.fragment,Te),ot=!0)},o(Te){z(je.$$.fragment,Te),ot=!1},d(Te){Te&&i(t),le(je)}}}const Rr="WEB3 NFT CRYPTO AI:        THE AUGMENTED METAVERSE EXPERIENCE.         ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9. REMASTERED.";class Gr extends ne{constructor(t){super(),ie(this,t,null,Ar,oe,{})}}function cr(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R,D,b=y[0]&&dr(y);return{c(){t=o("div"),a=o("button"),r=o("h3"),s=m(y[1]),d=S(),n=o("h4"),p=m(y[2]),f=S(),h=o("div"),v=o("h6"),w=m("["),I=m(y[3]),N=m("]"),$=S(),k=o("span"),_=sr("svg"),P=sr("path"),G=S(),V=o("article"),b&&b.c(),this.h()},l(E){t=c(E,"DIV",{class:!0,"aria-expanded":!0});var M=u(t);a=c(M,"BUTTON",{class:!0});var U=u(a);r=c(U,"H3",{});var L=u(r);s=g(L,y[1]),L.forEach(i),d=T(U),n=c(U,"H4",{class:!0});var H=u(n);p=g(H,y[2]),H.forEach(i),f=T(U),h=c(U,"DIV",{class:!0});var x=u(h);v=c(x,"H6",{class:!0});var K=u(v);w=g(K,"["),I=g(K,y[3]),N=g(K,"]"),K.forEach(i),$=T(x),k=c(x,"SPAN",{class:!0,"aria-expanded":!0});var W=u(k);_=lr(W,"svg",{style:!0,width:!0,height:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,viewBox:!0,stroke:!0,class:!0});var j=u(_);P=lr(j,"path",{d:!0}),u(P).forEach(i),j.forEach(i),W.forEach(i),x.forEach(i),U.forEach(i),G=T(M),V=c(M,"ARTICLE",{});var Y=u(V);b&&b.l(Y),Y.forEach(i),M.forEach(i),this.h()},h(){l(n,"class","subtitle svelte-iu2iev"),l(v,"class","date svelte-iu2iev"),l(P,"d","M9 5l7 7-7 7"),l(_,"style","tran"),l(_,"width","20"),l(_,"height","20"),l(_,"fill","none"),l(_,"stroke-linecap","round"),l(_,"stroke-linejoin","round"),l(_,"stroke-width","3"),l(_,"viewBox","0 0 24 24"),l(_,"stroke","currentColor"),l(_,"class","svelte-iu2iev"),l(k,"class","arrow_right svelte-iu2iev"),l(k,"aria-expanded",y[0]),l(h,"class","right_hand svelte-iu2iev"),l(a,"class","heading svelte-iu2iev"),l(t,"class","container svelte-iu2iev"),l(t,"aria-expanded",y[0])},m(E,M){q(E,t,M),e(t,a),e(a,r),e(r,s),e(a,d),e(a,n),e(n,p),e(a,f),e(a,h),e(h,v),e(v,w),e(v,I),e(v,N),e(h,$),e(h,k),e(k,_),e(_,P),e(t,G),e(t,V),b&&b.m(V,null),A=!0,R||(D=vr(a,"click",y[6]),R=!0)},p(E,M){(!A||M&2)&&At(s,E[1]),(!A||M&4)&&At(p,E[2]),(!A||M&8)&&At(I,E[3]),(!A||M&1)&&l(k,"aria-expanded",E[0]),E[0]?b?(b.p(E,M),M&1&&O(b,1)):(b=dr(E),b.c(),O(b,1),b.m(V,null)):b&&(ze(),z(b,1,1,()=>{b=null}),Be()),(!A||M&1)&&l(t,"aria-expanded",E[0])},i(E){A||(O(b),_e(()=>{A&&(C||(C=B(t,pt,{duration:400},!0)),C.run(1))}),A=!0)},o(E){z(b),C||(C=B(t,pt,{duration:400},!1)),C.run(0),A=!1},d(E){E&&i(t),b&&b.d(),E&&C&&C.end(),R=!1,D()}}}function dr(y){let t,a,r,s,d,n;var p=y[4];function f(h){return{}}return p&&(r=nr(p,f())),{c(){t=o("div"),a=o("div"),r&&ae(r.$$.fragment),this.h()},l(h){t=c(h,"DIV",{class:!0});var v=u(t);a=c(v,"DIV",{});var w=u(a);r&&ue(r.$$.fragment,w),w.forEach(i),v.forEach(i),this.h()},h(){l(t,"class","panel svelte-iu2iev")},m(h,v){q(h,t,v),e(t,a),r&&se(r,a,null),n=!0},p(h,v){if(v&16&&p!==(p=h[4])){if(r){ze();const w=r;z(w.$$.fragment,1,0,()=>{le(w,1)}),Be()}p?(r=nr(p,f()),ae(r.$$.fragment),O(r.$$.fragment,1),se(r,a,null)):r=null}},i(h){n||(r&&O(r.$$.fragment,h),_e(()=>{n&&(s||(s=B(a,tt,{},!0)),s.run(1))}),_e(()=>{n&&(d||(d=B(t,pt,{duration:800},!0)),d.run(1))}),n=!0)},o(h){r&&z(r.$$.fragment,h),s||(s=B(a,tt,{},!1)),s.run(0),d||(d=B(t,pt,{duration:800},!1)),d.run(0),n=!1},d(h){h&&i(t),r&&le(r),h&&s&&s.end(),h&&d&&d.end()}}}function Vr(y){let t,a,r=y[5]&&cr(y);return{c(){r&&r.c(),t=Ie()},l(s){r&&r.l(s),t=Ie()},m(s,d){r&&r.m(s,d),q(s,t,d),a=!0},p(s,[d]){s[5]?r?(r.p(s,d),d&32&&O(r,1)):(r=cr(s),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(ze(),z(r,1,1,()=>{r=null}),Be())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Cr(y,t,a){let{title:r=""}=t,{subtitle:s=""}=t,{date:d=""}=t,{component:n}=t,{visible:p=!0}=t,{paneOpened:f=!1}=t;function h(){a(0,f=!f)}return y.$$set=v=>{"title"in v&&a(1,r=v.title),"subtitle"in v&&a(2,s=v.subtitle),"date"in v&&a(3,d=v.date),"component"in v&&a(4,n=v.component),"visible"in v&&a(5,p=v.visible),"paneOpened"in v&&a(0,f=v.paneOpened)},[f,r,s,d,n,p,h]}class Lr extends ne{constructor(t){super(),ie(this,t,Cr,Vr,oe,{title:1,subtitle:2,date:3,component:4,visible:5,paneOpened:0})}}function Ur(y){let t,a,r,s,d,n,p;return{c(){t=o("div"),a=o("img"),s=S(),d=o("a"),n=m("view repo"),this.h()},l(f){t=c(f,"DIV",{class:!0});var h=u(t);a=c(h,"IMG",{src:!0,alt:!0,class:!0}),s=T(h),d=c(h,"A",{href:!0,target:!0,class:!0});var v=u(d);n=g(v,"view repo"),v.forEach(i),h.forEach(i),this.h()},h(){ge(a.src,r="/img/github-mark-white.png")||l(a,"src",r),l(a,"alt","github logo"),l(a,"class","svelte-tl638r"),l(d,"href",p=ur+y[0]),l(d,"target","_blank"),l(d,"class","svelte-tl638r"),l(t,"class","gh-link svelte-tl638r")},m(f,h){q(f,t,h),e(t,a),e(t,s),e(t,d),e(d,n)},p(f,[h]){h&1&&p!==(p=ur+f[0])&&l(d,"href",p)},i:ke,o:ke,d(f){f&&i(t)}}}const ur="https://github.com/pnwheeler/";function xr(y,t,a){let{link:r=""}=t;return y.$$set=s=>{"link"in s&&a(0,r=s.link)},[r]}class it extends ne{constructor(t){super(),ie(this,t,xr,Ur,oe,{link:0})}}function Or(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R,D,b,E,M,U,L,H,x,K,W,j,Y,$e,Ce,Le,te,Ee,Ue,pe,xe,he,ye,we,Oe,He,J,ve;return J=new it({props:{link:"drug-generator"}}),{c(){t=o("div"),a=o("div"),r=o("p"),s=m("I love drug names. They dont "),d=o("em"),n=m("mean"),p=m(" anything, but they "),f=o("em"),h=m("sound"),v=m(" like they almost could."),w=S(),I=o("img"),$=S(),k=o("p"),_=m("[Performing "),P=o("em"),G=m("market research"),V=m(". I would take "),C=o("em"),A=m("cetrasone"),R=m(", "),D=o("em"),b=m("kysovell"),E=m(", and "),M=o("em"),U=m("omgaless"),L=m(" three times/day with every meal]"),H=S(),x=o("p"),K=m(`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). To prepare the data for training, the names were one hot encoded, split into subsequences, batched up, and shuffled around.`),W=S(),j=o("p"),Y=m("I ("),$e=o("small"),Ce=m("somewhat arbitrarily"),Le=m(`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),te=o("small"),Ee=m("again, somewhat arbitrarily"),Ue=m(`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),pe=o("a"),xe=m("names"),he=m(`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),ye=S(),we=o("p"),Oe=m("Written in Python using pandas and TensorFlow."),He=S(),ae(J.$$.fragment),this.h()},l(re){t=c(re,"DIV",{class:!0});var De=u(t);a=c(De,"DIV",{class:!0});var F=u(a);r=c(F,"P",{});var Q=u(r);s=g(Q,"I love drug names. They dont "),d=c(Q,"EM",{});var Ne=u(d);n=g(Ne,"mean"),Ne.forEach(i),p=g(Q," anything, but they "),f=c(Q,"EM",{});var Ke=u(f);h=g(Ke,"sound"),Ke.forEach(i),v=g(Q," like they almost could."),Q.forEach(i),w=T(F),I=c(F,"IMG",{src:!0,alt:!0}),$=T(F),k=c(F,"P",{class:!0});var Z=u(k);_=g(Z,"[Performing "),P=c(Z,"EM",{});var We=u(P);G=g(We,"market research"),We.forEach(i),V=g(Z,". I would take "),C=c(Z,"EM",{});var be=u(C);A=g(be,"cetrasone"),be.forEach(i),R=g(Z,", "),D=c(Z,"EM",{});var Pe=u(D);b=g(Pe,"kysovell"),Pe.forEach(i),E=g(Z,", and "),M=c(Z,"EM",{});var qe=u(M);U=g(qe,"omgaless"),qe.forEach(i),L=g(Z," three times/day with every meal]"),Z.forEach(i),H=T(F),x=c(F,"P",{});var Fe=u(x);K=g(Fe,`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). To prepare the data for training, the names were one hot encoded, split into subsequences, batched up, and shuffled around.`),Fe.forEach(i),W=T(F),j=c(F,"P",{});var ce=u(j);Y=g(ce,"I ("),$e=c(ce,"SMALL",{});var de=u($e);Ce=g(de,"somewhat arbitrarily"),de.forEach(i),Le=g(ce,`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),te=c(ce,"SMALL",{});var me=u(te);Ee=g(me,"again, somewhat arbitrarily"),me.forEach(i),Ue=g(ce,`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),pe=c(ce,"A",{href:!0,target:!0});var rt=u(pe);xe=g(rt,"names"),rt.forEach(i),he=g(ce,`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),ce.forEach(i),ye=T(F),we=c(F,"P",{});var Xe=u(we);Oe=g(Xe,"Written in Python using pandas and TensorFlow."),Xe.forEach(i),He=T(F),ue(J.$$.fragment,F),F.forEach(i),De.forEach(i),this.h()},h(){ge(I.src,N="img/drug_namer.gif")||l(I,"src",N),l(I,"alt","generating drugs gif"),l(k,"class","caption"),l(pe,"href","https://github.com/pnwheeler/drug-generator/blob/main/fake_drugs.txt"),l(pe,"target","_blank"),l(a,"class","desc"),l(t,"class","desc-wrapper")},m(re,De){q(re,t,De),e(t,a),e(a,r),e(r,s),e(r,d),e(d,n),e(r,p),e(r,f),e(f,h),e(r,v),e(a,w),e(a,I),e(a,$),e(a,k),e(k,_),e(k,P),e(P,G),e(k,V),e(k,C),e(C,A),e(k,R),e(k,D),e(D,b),e(k,E),e(k,M),e(M,U),e(k,L),e(a,H),e(a,x),e(x,K),e(a,W),e(a,j),e(j,Y),e(j,$e),e($e,Ce),e(j,Le),e(j,te),e(te,Ee),e(j,Ue),e(j,pe),e(pe,xe),e(j,he),e(a,ye),e(a,we),e(we,Oe),e(a,He),se(J,a,null),ve=!0},p:ke,i(re){ve||(O(J.$$.fragment,re),ve=!0)},o(re){z(J.$$.fragment,re),ve=!1},d(re){re&&i(t),le(J)}}}class Hr extends ne{constructor(t){super(),ie(this,t,null,Or,oe,{})}}function jr(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R,D,b;return D=new it({props:{link:"TRIMCROP"}}),{c(){t=o("div"),a=o("div"),r=o("img"),d=S(),n=o("div"),p=o("p"),f=m(`Made this because sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software.`),h=S(),v=o("p"),w=m("Used QML and JS to create the interface (which is basically a media player + a few overlays) and C++ to plug it up to ffmpeg."),I=S(),N=o("p"),$=m("The border on the crop tool is a bit janky, but I find myself using it a decent amount."),k=S(),_=o("div"),P=o("p"),G=m("[Demoing on a video I took of Jojo having a bad dream >.<]"),V=S(),C=o("p"),A=m("Written with Qt6 & ffmpeg."),R=S(),ae(D.$$.fragment),this.h()},l(E){t=c(E,"DIV",{class:!0});var M=u(t);a=c(M,"DIV",{class:!0});var U=u(a);r=c(U,"IMG",{src:!0,alt:!0,class:!0}),d=T(U),n=c(U,"DIV",{class:!0});var L=u(n);p=c(L,"P",{});var H=u(p);f=g(H,`Made this because sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software.`),H.forEach(i),h=T(L),v=c(L,"P",{});var x=u(v);w=g(x,"Used QML and JS to create the interface (which is basically a media player + a few overlays) and C++ to plug it up to ffmpeg."),x.forEach(i),I=T(L),N=c(L,"P",{});var K=u(N);$=g(K,"The border on the crop tool is a bit janky, but I find myself using it a decent amount."),K.forEach(i),L.forEach(i),U.forEach(i),k=T(M),_=c(M,"DIV",{class:!0,style:!0});var W=u(_);P=c(W,"P",{class:!0,style:!0});var j=u(P);G=g(j,"[Demoing on a video I took of Jojo having a bad dream >.<]"),j.forEach(i),V=T(W),C=c(W,"P",{});var Y=u(C);A=g(Y,"Written with Qt6 & ffmpeg."),Y.forEach(i),R=T(W),ue(D.$$.fragment,W),W.forEach(i),M.forEach(i),this.h()},h(){ge(r.src,s="/img/trimcrop.gif")||l(r,"src",s),l(r,"alt","crop interface"),l(r,"class","svelte-1lawn3q"),l(n,"class","txt svelte-1lawn3q"),l(a,"class","trimcrop svelte-1lawn3q"),l(P,"class","caption"),Me(P,"width","100%"),l(_,"class","desc"),Me(_,"width","100%"),l(t,"class","desc-wrapper")},m(E,M){q(E,t,M),e(t,a),e(a,r),e(a,d),e(a,n),e(n,p),e(p,f),e(n,h),e(n,v),e(v,w),e(n,I),e(n,N),e(N,$),e(t,k),e(t,_),e(_,P),e(P,G),e(_,V),e(_,C),e(C,A),e(_,R),se(D,_,null),b=!0},p:ke,i(E){b||(O(D.$$.fragment,E),b=!0)},o(E){z(D.$$.fragment,E),b=!1},d(E){E&&i(t),le(D)}}}class zr extends ne{constructor(t){super(),ie(this,t,null,jr,oe,{})}}function Br(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R,D;return R=new it({props:{link:"stabilizer"}}),{c(){t=o("div"),a=o("img"),s=S(),d=o("p"),n=m("[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),p=S(),f=o("div"),h=o("p"),v=m(`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),w=o("a"),I=m("this"),N=m(`. \r
        `),$=o("p"),k=m(`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),_=o("small"),P=m("In the name of consistent formatting, fake link to 404."),G=S(),V=o("p"),C=m("Written in Python using OpenCV."),A=S(),ae(R.$$.fragment),this.h()},l(b){t=c(b,"DIV",{class:!0});var E=u(t);a=c(E,"IMG",{style:!0,src:!0,alt:!0}),s=T(E),d=c(E,"P",{class:!0});var M=u(d);n=g(M,"[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),M.forEach(i),p=T(E),f=c(E,"DIV",{class:!0});var U=u(f);h=c(U,"P",{});var L=u(h);v=g(L,`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),w=c(L,"A",{href:!0,target:!0});var H=u(w);I=g(H,"this"),H.forEach(i),N=g(L,`. \r
        `),L.forEach(i),$=c(U,"P",{});var x=u($);k=g(x,`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),_=c(x,"SMALL",{});var K=u(_);P=g(K,"In the name of consistent formatting, fake link to 404."),K.forEach(i),x.forEach(i),G=T(U),V=c(U,"P",{});var W=u(V);C=g(W,"Written in Python using OpenCV."),W.forEach(i),A=T(U),ue(R.$$.fragment,U),U.forEach(i),E.forEach(i),this.h()},h(){Me(a,"width","50%"),ge(a.src,r="/img/stabilizer.gif")||l(a,"src",r),l(a,"alt","before_after_composite"),l(d,"class","caption"),l(w,"href","https://www.storyzapp.com/"),l(w,"target","_blank"),l(f,"class","desc"),l(t,"class","desc-wrapper")},m(b,E){q(b,t,E),e(t,a),e(t,s),e(t,d),e(d,n),e(t,p),e(t,f),e(f,h),e(h,v),e(h,w),e(w,I),e(h,N),e(f,$),e($,k),e($,_),e(_,P),e(f,G),e(f,V),e(V,C),e(f,A),se(R,f,null),D=!0},p:ke,i(b){D||(O(R.$$.fragment,b),D=!0)},o(b){z(R.$$.fragment,b),D=!1},d(b){b&&i(t),le(R)}}}class Kr extends ne{constructor(t){super(),ie(this,t,null,Br,oe,{})}}function Wr(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R,D;return R=new it({props:{link:"MiscGraphics/tree/main/Rendering"}}),{c(){t=o("div"),a=o("div"),r=o("img"),d=S(),n=o("img"),f=S(),h=o("p"),v=m("[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),w=S(),I=o("div"),N=o("p"),$=m(`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),k=S(),_=o("p"),P=m("Written in C++ "),G=o("span"),V=m("—"),C=m(" Uses Eigen.h for a few matrix ops."),A=S(),ae(R.$$.fragment),this.h()},l(b){t=c(b,"DIV",{class:!0});var E=u(t);a=c(E,"DIV",{style:!0});var M=u(a);r=c(M,"IMG",{style:!0,src:!0,alt:!0}),d=T(M),n=c(M,"IMG",{style:!0,src:!0,alt:!0}),M.forEach(i),f=T(E),h=c(E,"P",{class:!0});var U=u(h);v=g(U,"[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),U.forEach(i),w=T(E),I=c(E,"DIV",{class:!0});var L=u(I);N=c(L,"P",{});var H=u(N);$=g(H,`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),H.forEach(i),k=T(L),_=c(L,"P",{});var x=u(_);P=g(x,"Written in C++ "),G=c(x,"SPAN",{});var K=u(G);V=g(K,"—"),K.forEach(i),C=g(x," Uses Eigen.h for a few matrix ops."),x.forEach(i),A=T(L),ue(R.$$.fragment,L),L.forEach(i),E.forEach(i),this.h()},h(){Me(r,"width","45%"),ge(r.src,s="/img/ray.png")||l(r,"src",s),l(r,"alt","ray traced balls"),Me(n,"width","45%"),ge(n.src,p="/img/raster.png")||l(n,"src",p),l(n,"alt","rasterizer output Utah teapot"),Me(a,"display","flex"),Me(a,"justify-content","space-evenly"),l(h,"class","caption"),l(I,"class","desc"),l(t,"class","desc-wrapper")},m(b,E){q(b,t,E),e(t,a),e(a,r),e(a,d),e(a,n),e(t,f),e(t,h),e(h,v),e(t,w),e(t,I),e(I,N),e(N,$),e(I,k),e(I,_),e(_,P),e(_,G),e(G,V),e(_,C),e(I,A),se(R,I,null),D=!0},p:ke,i(b){D||(O(R.$$.fragment,b),D=!0)},o(b){z(R.$$.fragment,b),D=!1},d(b){b&&i(t),le(R)}}}class qr extends ne{constructor(t){super(),ie(this,t,null,Wr,oe,{})}}function Fr(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P,G,V,C,A,R;return A=new it({props:{link:"seam-carving"}}),{c(){t=o("div"),a=o("img"),s=S(),d=o("p"),n=m("[Gif of output at each step: red seam is removed]"),p=S(),f=o("div"),h=o("p"),v=m("This was another project for the computer graphics course."),w=S(),I=o("p"),N=m(`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),$=S(),k=o("p"),_=m("Written in C++ "),P=o("span"),G=m("—"),V=m(" uses CImg.h for the masking tool."),C=S(),ae(A.$$.fragment),this.h()},l(D){t=c(D,"DIV",{class:!0});var b=u(t);a=c(b,"IMG",{src:!0,alt:!0}),s=T(b),d=c(b,"P",{class:!0});var E=u(d);n=g(E,"[Gif of output at each step: red seam is removed]"),E.forEach(i),p=T(b),f=c(b,"DIV",{class:!0});var M=u(f);h=c(M,"P",{});var U=u(h);v=g(U,"This was another project for the computer graphics course."),U.forEach(i),w=T(M),I=c(M,"P",{});var L=u(I);N=g(L,`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),L.forEach(i),$=T(M),k=c(M,"P",{});var H=u(k);_=g(H,"Written in C++ "),P=c(H,"SPAN",{});var x=u(P);G=g(x,"—"),x.forEach(i),V=g(H," uses CImg.h for the masking tool."),H.forEach(i),C=T(M),ue(A.$$.fragment,M),M.forEach(i),b.forEach(i),this.h()},h(){ge(a.src,r="/img/seam_carve.gif")||l(a,"src",r),l(a,"alt","crop interface"),l(d,"class","caption"),l(f,"class","desc"),l(t,"class","desc-wrapper")},m(D,b){q(D,t,b),e(t,a),e(t,s),e(t,d),e(d,n),e(t,p),e(t,f),e(f,h),e(h,v),e(f,w),e(f,I),e(I,N),e(f,$),e(f,k),e(k,_),e(k,P),e(P,G),e(k,V),e(f,C),se(A,f,null),R=!0},p:ke,i(D){R||(O(A.$$.fragment,D),R=!0)},o(D){z(A.$$.fragment,D),R=!1},d(D){D&&i(t),le(A)}}}class Xr extends ne{constructor(t){super(),ie(this,t,null,Fr,oe,{})}}function fr(y,t,a){const r=y.slice();return r[1]=t[a],r}function pr(y){let t,a,r;const s=[y[1]];let d={};for(let n=0;n<s.length;n+=1)d=Er(d,s[n]);return a=new Lr({props:d}),{c(){t=o("div"),ae(a.$$.fragment)},l(n){t=c(n,"DIV",{});var p=u(t);ue(a.$$.fragment,p),p.forEach(i)},m(n,p){q(n,t,p),se(a,t,null),r=!0},p(n,p){const f=p&1?yr(s,[br(n[1])]):{};a.$set(f)},i(n){r||(O(a.$$.fragment,n),r=!0)},o(n){z(a.$$.fragment,n),r=!1},d(n){n&&i(t),le(a)}}}function Yr(y){let t,a,r=y[0],s=[];for(let n=0;n<r.length;n+=1)s[n]=pr(fr(y,r,n));const d=n=>z(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();t=Ie()},l(n){for(let p=0;p<s.length;p+=1)s[p].l(n);t=Ie()},m(n,p){for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(n,p);q(n,t,p),a=!0},p(n,[p]){if(p&1){r=n[0];let f;for(f=0;f<r.length;f+=1){const h=fr(n,r,f);s[f]?(s[f].p(h,p),O(s[f],1)):(s[f]=pr(h),s[f].c(),O(s[f],1),s[f].m(t.parentNode,t))}for(ze(),f=r.length;f<s.length;f+=1)d(f);Be()}},i(n){if(!a){for(let p=0;p<r.length;p+=1)O(s[p]);a=!0}},o(n){s=s.filter(Boolean);for(let p=0;p<s.length;p+=1)z(s[p]);a=!1},d(n){_r(s,n),n&&i(t)}}}function Jr(y){return[[{title:"Drug generator",subtitle:"Character-level RNN",date:"Apr 2023",component:Hr},{title:"TRIMCROP",subtitle:"Trim and crop video",date:"Jan 2023",component:zr},{title:"Gif stabilization",subtitle:"Program to stabilize gifs",date:"Jul 2022",component:Kr},{title:"Seam Carving",subtitle:"Content-aware image resizing",date:"Jul 2021",component:Xr},{title:"Static Renderers",subtitle:"Raytracer and rasterizer",date:"Jun 2021",component:qr}]]}class Qr extends ne{constructor(t){super(),ie(this,t,Jr,Yr,oe,{})}}function hr(y){let t,a,r,s,d,n,p,f,h,v,w,I,N,$,k,_,P;return s=new wr({}),p=new Gr({}),I=new Sr({}),k=new Qr({}),{c(){t=o("div"),a=o("div"),r=o("div"),ae(s.$$.fragment),d=S(),n=o("div"),ae(p.$$.fragment),h=S(),v=o("div"),w=o("div"),ae(I.$$.fragment),N=S(),$=o("div"),ae(k.$$.fragment),this.h()},l(G){t=c(G,"DIV",{id:!0,class:!0});var V=u(t);a=c(V,"DIV",{id:!0,class:!0});var C=u(a);r=c(C,"DIV",{id:!0,class:!0});var A=u(r);ue(s.$$.fragment,A),A.forEach(i),d=T(C),n=c(C,"DIV",{id:!0,class:!0});var R=u(n);ue(p.$$.fragment,R),R.forEach(i),C.forEach(i),h=T(V),v=c(V,"DIV",{id:!0,class:!0});var D=u(v);w=c(D,"DIV",{id:!0,class:!0});var b=u(w);ue(I.$$.fragment,b),b.forEach(i),N=T(D),$=c(D,"DIV",{id:!0,class:!0});var E=u($);ue(k.$$.fragment,E),E.forEach(i),D.forEach(i),V.forEach(i),this.h()},h(){l(r,"id","about-text"),l(r,"class","svelte-18dtzke"),l(n,"id","about-card"),l(n,"class","svelte-18dtzke"),l(a,"id","about-section"),l(a,"class","svelte-18dtzke"),l(w,"id","projects-text"),l(w,"class","svelte-18dtzke"),l($,"id","projects-content"),l($,"class","svelte-18dtzke"),l(v,"id","project-section"),l(v,"class","svelte-18dtzke"),l(t,"id","content-area"),l(t,"class","svelte-18dtzke")},m(G,V){q(G,t,V),e(t,a),e(a,r),se(s,r,null),e(a,d),e(a,n),se(p,n,null),e(t,h),e(t,v),e(v,w),se(I,w,null),e(v,N),e(v,$),se(k,$,null),P=!0},i(G){P||(O(s.$$.fragment,G),O(p.$$.fragment,G),_e(()=>{P&&(f||(f=B(n,fe,{y:-500,duration:2e3,delay:1500},!0)),f.run(1))}),O(I.$$.fragment,G),O(k.$$.fragment,G),_e(()=>{P&&(_||(_=B($,fe,{y:500,duration:1500,delay:2400},!0)),_.run(1))}),P=!0)},o(G){z(s.$$.fragment,G),z(p.$$.fragment,G),f||(f=B(n,fe,{y:-500,duration:2e3,delay:1500},!1)),f.run(0),z(I.$$.fragment,G),z(k.$$.fragment,G),_||(_=B($,fe,{y:500,duration:1500,delay:2400},!1)),_.run(0),P=!1},d(G){G&&i(t),le(s),le(p),G&&f&&f.end(),le(I),le(k),G&&_&&_.end()}}}function Zr(y){let t,a,r=y[0]&&hr();return{c(){r&&r.c(),t=Ie()},l(s){r&&r.l(s),t=Ie()},m(s,d){r&&r.m(s,d),q(s,t,d),a=!0},p(s,[d]){s[0]?r?d&1&&O(r,1):(r=hr(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(ze(),z(r,1,1,()=>{r=null}),Be())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function ea(y,t,a){let r=!1;return Rt(()=>a(0,r=!0)),[r]}class aa extends ne{constructor(t){super(),ie(this,t,ea,Zr,oe,{})}}export{aa as component,ra as universal};