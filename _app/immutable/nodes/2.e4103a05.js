import{J as hr,K as xr,S as ne,i as ie,s as oe,e as $e,b as W,g as O,v as Fe,d as z,f as Xe,h as i,o as zt,k as o,q as m,a as $,l as c,m as d,r as _,c as w,n as l,G as e,L as Ee,M as B,p as Me,N as Pr,H as be,y as ae,z as fe,O as ge,A as se,B as le,P as vr,Q as mr,u as jt,x as _r,R as Sr,T as Tr,U as Mr,V as Dr}from"../chunks/index.48588b9e.js";const Ar=!0,pa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ar},Symbol.toStringTag,{value:"Module"}));function Nr(b){const t=b-1;return t*t*t+1}function lt(b,{delay:t=0,duration:a=400,easing:r=xr}={}){const s=+getComputedStyle(b).opacity;return{delay:t,duration:a,easing:r,css:u=>`opacity: ${u*s}`}}function pe(b,{delay:t=0,duration:a=400,easing:r=Nr,x:s=0,y:u=0,opacity:n=0}={}){const h=getComputedStyle(b),p=+h.opacity,f=h.transform==="none"?"":h.transform,v=p*(1-n),[P,I]=hr(s),[S,x]=hr(u);return{delay:t,duration:a,easing:r,css:(k,E)=>`
			transform: ${f} translate(${(1-k)*P}${I}, ${(1-k)*S}${x});
			opacity: ${p-v*E}`}}function _t(b,{delay:t=0,duration:a=400,easing:r=Nr,axis:s="y"}={}){const u=getComputedStyle(b),n=+u.opacity,h=s==="y"?"height":"width",p=parseFloat(u[h]),f=s==="y"?["top","bottom"]:["left","right"],v=f.map(N=>`${N[0].toUpperCase()}${N.slice(1)}`),P=parseFloat(u[`padding${v[0]}`]),I=parseFloat(u[`padding${v[1]}`]),S=parseFloat(u[`margin${v[0]}`]),x=parseFloat(u[`margin${v[1]}`]),k=parseFloat(u[`border${v[0]}Width`]),E=parseFloat(u[`border${v[1]}Width`]);return{delay:t,duration:a,easing:r,css:N=>`overflow: hidden;opacity: ${Math.min(N*20,1)*n};${h}: ${N*p}px;padding-${f[0]}: ${N*P}px;padding-${f[1]}: ${N*I}px;margin-${f[0]}: ${N*S}px;margin-${f[1]}: ${N*x}px;border-${f[0]}-width: ${N*k}px;border-${f[1]}-width: ${N*E}px;`}}function gr(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A;return{c(){t=o("div"),a=o("h1"),r=m("About"),u=$(),n=o("hr"),p=$(),f=o("div"),v=o("p"),P=m("Hi! My name's "),I=o("span"),S=m("Patrick"),x=m("."),k=$(),E=o("p"),N=m("I graduated from UMBC with a degree in computer science and am currently looking for an entry level position!"),R=$(),G=o("p"),V=m("I like learning about graphics, games, and multimedia in general."),this.h()},l(M){t=c(M,"DIV",{class:!0});var y=d(t);a=c(y,"H1",{});var g=d(a);r=_(g,"About"),g.forEach(i),u=w(y),n=c(y,"HR",{class:!0}),p=w(y),f=c(y,"DIV",{});var T=d(f);v=c(T,"P",{});var L=d(v);P=_(L,"Hi! My name's "),I=c(L,"SPAN",{id:!0,class:!0});var C=d(I);S=_(C,"Patrick"),C.forEach(i),x=_(L,"."),L.forEach(i),k=w(T),E=c(T,"P",{});var H=d(E);N=_(H,"I graduated from UMBC with a degree in computer science and am currently looking for an entry level position!"),H.forEach(i),R=w(T),G=c(T,"P",{});var U=d(G);V=_(U,"I like learning about graphics, games, and multimedia in general."),U.forEach(i),T.forEach(i),y.forEach(i),this.h()},h(){l(n,"class","body-hr"),l(I,"id","name"),l(I,"class","svelte-1resjz3"),l(t,"class","body-section")},m(M,y){W(M,t,y),e(t,a),e(a,r),e(t,u),e(t,n),e(t,p),e(t,f),e(f,v),e(v,P),e(v,I),e(I,S),e(v,x),e(f,k),e(f,E),e(E,N),e(f,R),e(f,G),e(G,V),A=!0},i(M){A||(Ee(()=>{A&&(s||(s=B(a,pe,{x:-300,duration:1700,delay:300},!0)),s.run(1))}),Ee(()=>{A&&(h||(h=B(n,pe,{x:200,duration:1e3,delay:1e3},!0)),h.run(1))}),Ee(()=>{A&&(D||(D=B(f,lt,{duration:1700},!0)),D.run(1))}),A=!0)},o(M){s||(s=B(a,pe,{x:-300,duration:1700,delay:300},!1)),s.run(0),h||(h=B(n,pe,{x:200,duration:1e3,delay:1e3},!1)),h.run(0),D||(D=B(f,lt,{duration:1700},!1)),D.run(0),A=!1},d(M){M&&i(t),M&&s&&s.end(),M&&h&&h.end(),M&&D&&D.end()}}}function Rr(b){let t,a,r=b[0]&&gr();return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[0]?r?u&1&&O(r,1):(r=gr(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(Fe(),z(r,1,1,()=>{r=null}),Xe())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Gr(b,t,a){let{ready:r=!1}=t;return zt(()=>a(0,r=!0)),b.$$set=s=>{"ready"in s&&a(0,r=s.ready)},[r]}class Vr extends ne{constructor(t){super(),ie(this,t,Gr,Rr,oe,{ready:0})}}function Er(b){let t,a,r,s,u,n,h,p,f,v,P,I;return{c(){t=o("div"),a=o("h1"),r=m("Projects"),u=$(),n=o("hr"),p=$(),f=o("p"),v=m("Here are some things I've made."),this.h()},l(S){t=c(S,"DIV",{class:!0});var x=d(t);a=c(x,"H1",{});var k=d(a);r=_(k,"Projects"),k.forEach(i),u=w(x),n=c(x,"HR",{class:!0}),p=w(x),f=c(x,"P",{style:!0});var E=d(f);v=_(E,"Here are some things I've made."),E.forEach(i),x.forEach(i),this.h()},h(){l(n,"class","body-hr"),Me(f,"text-align","left"),Me(f,"margin-bottom","1em"),l(t,"class","body-section")},m(S,x){W(S,t,x),e(t,a),e(a,r),e(t,u),e(t,n),e(t,p),e(t,f),e(f,v),I=!0},i(S){I||(Ee(()=>{I&&(s||(s=B(a,pe,{x:300,duration:1700,delay:2e3},!0)),s.run(1))}),Ee(()=>{I&&(h||(h=B(n,pe,{x:-200,duration:1e3,delay:2700},!0)),h.run(1))}),Ee(()=>{I&&(P||(P=B(f,lt,{delay:1700,duration:1700},!0)),P.run(1))}),I=!0)},o(S){s||(s=B(a,pe,{x:300,duration:1700,delay:2e3},!1)),s.run(0),h||(h=B(n,pe,{x:-200,duration:1e3,delay:2700},!1)),h.run(0),P||(P=B(f,lt,{delay:1700,duration:1700},!1)),P.run(0),I=!1},d(S){S&&i(t),S&&s&&s.end(),S&&h&&h.end(),S&&P&&P.end()}}}function Cr(b){let t,a,r=b[0]&&Er();return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[0]?r?u&1&&O(r,1):(r=Er(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(Fe(),z(r,1,1,()=>{r=null}),Xe())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Lr(b,t,a){let{ready:r=!1}=t;return zt(()=>a(0,r=!0)),b.$$set=s=>{"ready"in s&&a(0,r=s.ready)},[r]}class Ur extends ne{constructor(t){super(),ie(this,t,Lr,Cr,oe,{ready:0})}}function Or(b){let t,a,r;return{c(){t=o("button"),this.h()},l(s){t=c(s,"BUTTON",{class:!0}),d(t).forEach(i),this.h()},h(){l(t,"class","button_area svelte-11836uu")},m(s,u){W(s,t,u),a||(r=Pr(t,"click",b[0]),a=!0)},p:be,i:be,o:be,d(s){s&&i(t),a=!1,r()}}}function Hr(b,t,a){let{words:r=""}=t;const s=window.speechSynthesis;function u(){if(s.speaking){s.cancel();return}const n=s.getVoices();let h=Math.random()*3,p=Math.floor(Math.random()*n.length);const f=new SpeechSynthesisUtterance(r);f.voice=n[p],f.pitch=h,f.rate=1+Math.random(),f.lang="en-US",s.speak(f)}return b.$$set=n=>{"words"in n&&a(1,r=n.words)},[u,r,s]}class jr extends ne{constructor(t){super(),ie(this,t,Hr,Or,oe,{words:1,synth:2})}get synth(){return this.$$.ctx[2]}}function zr(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A,M,y,g,T,L,C,H,U,K,q,j,Y,we,Le,Ue,te,ye,Oe,he,He,ve,Ie,Pe,je,ze,J,me,re,De,F,Q,Ne,Ye,Z,Je,ke,xe,Qe,Ze,ce,de,_e,nt,et,Ae,Bt,gt,ue,Be,Et,Ke,bt,yt,qe,It,kt,We,$t,wt,Re,it,Pt,Ge,tt,rt,Nt,xt,at,Se,St,ot,Tt,Mt,ct,Dt,At,st,Rt,ft;return Be=new jr({props:{words:Br}}),{c(){t=o("div"),a=o("img"),s=$(),u=o("div"),n=o("div"),h=o("span"),p=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),f=$(),v=o("span"),P=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),I=$(),S=o("span"),x=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),k=$(),E=o("span"),N=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),R=$(),G=o("div"),V=o("div"),D=o("div"),A=o("img"),y=$(),g=o("div"),T=o("hr"),L=$(),C=o("p"),H=o("span"),U=m("ISS:"),K=m(" 06/11/23"),q=$(),j=o("p"),Y=o("span"),we=m("LOC:"),Le=m(" MD, USA"),Ue=$(),te=o("p"),ye=o("span"),Oe=m("EDU:"),he=m(" B.S."),He=$(),ve=o("p"),Ie=o("span"),Pe=m("AGE:"),je=m(" 13-54"),ze=$(),J=o("p"),me=o("span"),re=m("EYE:"),De=m(" BRN"),F=$(),Q=o("p"),Ne=o("span"),Ye=m("HAND:"),Z=m(" RGT"),Je=$(),ke=o("p"),xe=o("span"),Qe=m("MENTAL:"),Ze=m(" HEALTH!"),ce=$(),de=o("div"),_e=o("img"),et=$(),Ae=o("img"),gt=$(),ue=o("div"),ae(Be.$$.fragment),Et=$(),Ke=o("p"),bt=m("WEB3 NFT CRYPTO AI"),yt=$(),qe=o("p"),It=m("THE AUGMENTED METAVERSE EXPERIENCE"),kt=$(),We=o("p"),$t=m("ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),wt=$(),Re=o("div"),it=o("hr"),Pt=$(),Ge=o("ul"),tt=o("li"),rt=o("span"),Nt=m("Can kickflip, Moira main, dairy allergy haver, bookmark hoarder"),xt=$(),at=o("li"),Se=o("span"),St=m('Really impressive leetcode skills: "\\/\\/0vv! 5() 1m|'),ot=o("sup"),Tt=m("o"),Mt=m('r3ss1v3", '),ct=o("em"),Dt=m("QED."),At=$(),st=o("div"),Rt=m("NO_UNAUTH_SALE"),this.h()},l(Te){t=c(Te,"DIV",{class:!0});var ee=d(t);a=c(ee,"IMG",{id:!0,src:!0,alt:!0,class:!0}),s=w(ee),u=c(ee,"DIV",{class:!0});var Kt=d(u);n=c(Kt,"DIV",{class:!0});var Ve=d(n);h=c(Ve,"SPAN",{class:!0});var qt=d(h);p=_(qt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),qt.forEach(i),f=w(Ve),v=c(Ve,"SPAN",{class:!0});var Wt=d(v);P=_(Wt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Wt.forEach(i),I=w(Ve),S=c(Ve,"SPAN",{class:!0});var Ft=d(S);x=_(Ft,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Ft.forEach(i),k=w(Ve),E=c(Ve,"SPAN",{class:!0});var Xt=d(E);N=_(Xt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Xt.forEach(i),Ve.forEach(i),Kt.forEach(i),R=w(ee),G=c(ee,"DIV",{class:!0});var pt=d(G);V=c(pt,"DIV",{id:!0,class:!0});var Yt=d(V);D=c(Yt,"DIV",{id:!0,class:!0});var Jt=d(D);A=c(Jt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),Jt.forEach(i),Yt.forEach(i),y=w(pt),g=c(pt,"DIV",{class:!0});var X=d(g);T=c(X,"HR",{class:!0}),L=w(X),C=c(X,"P",{class:!0});var Gt=d(C);H=c(Gt,"SPAN",{class:!0});var Qt=d(H);U=_(Qt,"ISS:"),Qt.forEach(i),K=_(Gt," 06/11/23"),Gt.forEach(i),q=w(X),j=c(X,"P",{class:!0});var Vt=d(j);Y=c(Vt,"SPAN",{class:!0});var Zt=d(Y);we=_(Zt,"LOC:"),Zt.forEach(i),Le=_(Vt," MD, USA"),Vt.forEach(i),Ue=w(X),te=c(X,"P",{class:!0});var Ct=d(te);ye=c(Ct,"SPAN",{class:!0});var er=d(ye);Oe=_(er,"EDU:"),er.forEach(i),he=_(Ct," B.S."),Ct.forEach(i),He=w(X),ve=c(X,"P",{class:!0});var Lt=d(ve);Ie=c(Lt,"SPAN",{class:!0});var tr=d(Ie);Pe=_(tr,"AGE:"),tr.forEach(i),je=_(Lt," 13-54"),Lt.forEach(i),ze=w(X),J=c(X,"P",{class:!0});var Ut=d(J);me=c(Ut,"SPAN",{class:!0});var rr=d(me);re=_(rr,"EYE:"),rr.forEach(i),De=_(Ut," BRN"),Ut.forEach(i),F=w(X),Q=c(X,"P",{class:!0});var Ot=d(Q);Ne=c(Ot,"SPAN",{class:!0});var ar=d(Ne);Ye=_(ar,"HAND:"),ar.forEach(i),Z=_(Ot," RGT"),Ot.forEach(i),Je=w(X),ke=c(X,"P",{class:!0});var Ht=d(ke);xe=c(Ht,"SPAN",{class:!0});var sr=d(xe);Qe=_(sr,"MENTAL:"),sr.forEach(i),Ze=_(Ht," HEALTH!"),Ht.forEach(i),ce=w(X),de=c(X,"DIV",{id:!0,class:!0});var ht=d(de);_e=c(ht,"IMG",{id:!0,src:!0,alt:!0,class:!0}),et=w(ht),Ae=c(ht,"IMG",{id:!0,src:!0,alt:!0,class:!0}),ht.forEach(i),X.forEach(i),pt.forEach(i),gt=w(ee),ue=c(ee,"DIV",{class:!0});var Ce=d(ue);fe(Be.$$.fragment,Ce),Et=w(Ce),Ke=c(Ce,"P",{id:!0,class:!0});var lr=d(Ke);bt=_(lr,"WEB3 NFT CRYPTO AI"),lr.forEach(i),yt=w(Ce),qe=c(Ce,"P",{id:!0,class:!0});var nr=d(qe);It=_(nr,"THE AUGMENTED METAVERSE EXPERIENCE"),nr.forEach(i),kt=w(Ce),We=c(Ce,"P",{id:!0,class:!0});var ir=d(We);$t=_(ir,"ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),ir.forEach(i),Ce.forEach(i),wt=w(ee),Re=c(ee,"DIV",{class:!0});var vt=d(Re);it=c(vt,"HR",{id:!0,class:!0}),Pt=w(vt),Ge=c(vt,"UL",{class:!0});var mt=d(Ge);tt=c(mt,"LI",{class:!0});var or=d(tt);rt=c(or,"SPAN",{class:!0});var cr=d(rt);Nt=_(cr,"Can kickflip, Moira main, dairy allergy haver, bookmark hoarder"),cr.forEach(i),or.forEach(i),xt=w(mt),at=c(mt,"LI",{class:!0});var dr=d(at);Se=c(dr,"SPAN",{class:!0});var dt=d(Se);St=_(dt,'Really impressive leetcode skills: "\\/\\/0vv! 5() 1m|'),ot=c(dt,"SUP",{});var ur=d(ot);Tt=_(ur,"o"),ur.forEach(i),Mt=_(dt,'r3ss1v3", '),ct=c(dt,"EM",{});var fr=d(ct);Dt=_(fr,"QED."),fr.forEach(i),dt.forEach(i),dr.forEach(i),mt.forEach(i),vt.forEach(i),At=w(ee),st=c(ee,"DIV",{class:!0});var pr=d(st);Rt=_(pr,"NO_UNAUTH_SALE"),pr.forEach(i),ee.forEach(i),this.h()},h(){l(a,"id","bg-card"),ge(a.src,r="/img/tech_globe.png")||l(a,"src",r),l(a,"alt","bg-img"),l(a,"class","svelte-17b3nxi"),l(h,"class","svelte-17b3nxi"),l(v,"class","svelte-17b3nxi"),l(S,"class","svelte-17b3nxi"),l(E,"class","svelte-17b3nxi"),l(n,"class","marquee__inner svelte-17b3nxi"),l(u,"class","marquee svelte-17b3nxi"),l(A,"id","static"),ge(A.src,M="/img/bw_portrait.png")||l(A,"src",M),l(A,"alt","bw_portrait"),l(A,"class","svelte-17b3nxi"),l(D,"id","hover-target"),l(D,"class","svelte-17b3nxi"),l(V,"id","pfp"),l(V,"class","svelte-17b3nxi"),l(T,"class","svelte-17b3nxi"),l(H,"class","svelte-17b3nxi"),l(C,"class","svelte-17b3nxi"),l(Y,"class","svelte-17b3nxi"),l(j,"class","svelte-17b3nxi"),l(ye,"class","svelte-17b3nxi"),l(te,"class","svelte-17b3nxi"),l(Ie,"class","svelte-17b3nxi"),l(ve,"class","svelte-17b3nxi"),l(me,"class","svelte-17b3nxi"),l(J,"class","svelte-17b3nxi"),l(Ne,"class","svelte-17b3nxi"),l(Q,"class","svelte-17b3nxi"),l(xe,"class","svelte-17b3nxi"),l(ke,"class","svelte-17b3nxi"),l(_e,"id","spinner"),ge(_e.src,nt="/img/verified_1.png")||l(_e,"src",nt),l(_e,"alt","spinning verified"),l(_e,"class","svelte-17b3nxi"),l(Ae,"id","badge"),ge(Ae.src,Bt="/img/Greater_coat_of_arms.png")||l(Ae,"src",Bt),l(Ae,"alt","badge"),l(Ae,"class","svelte-17b3nxi"),l(de,"id","badge_container"),l(de,"class","svelte-17b3nxi"),l(g,"class","stats svelte-17b3nxi"),l(G,"class","bio svelte-17b3nxi"),l(Ke,"id","top"),l(Ke,"class","svelte-17b3nxi"),l(qe,"id","mid"),l(qe,"class","svelte-17b3nxi"),l(We,"id","bot"),l(We,"class","svelte-17b3nxi"),l(ue,"class","investment svelte-17b3nxi"),l(it,"id","break"),l(it,"class","svelte-17b3nxi"),l(rt,"class","svelte-17b3nxi"),l(tt,"class","svelte-17b3nxi"),l(Se,"class","svelte-17b3nxi"),l(at,"class","svelte-17b3nxi"),l(Ge,"class","svelte-17b3nxi"),l(Re,"class","facts svelte-17b3nxi"),l(st,"class","barcode svelte-17b3nxi"),l(t,"class","card-wrapper svelte-17b3nxi")},m(Te,ee){W(Te,t,ee),e(t,a),e(t,s),e(t,u),e(u,n),e(n,h),e(h,p),e(n,f),e(n,v),e(v,P),e(n,I),e(n,S),e(S,x),e(n,k),e(n,E),e(E,N),e(t,R),e(t,G),e(G,V),e(V,D),e(D,A),e(G,y),e(G,g),e(g,T),e(g,L),e(g,C),e(C,H),e(H,U),e(C,K),e(g,q),e(g,j),e(j,Y),e(Y,we),e(j,Le),e(g,Ue),e(g,te),e(te,ye),e(ye,Oe),e(te,he),e(g,He),e(g,ve),e(ve,Ie),e(Ie,Pe),e(ve,je),e(g,ze),e(g,J),e(J,me),e(me,re),e(J,De),e(g,F),e(g,Q),e(Q,Ne),e(Ne,Ye),e(Q,Z),e(g,Je),e(g,ke),e(ke,xe),e(xe,Qe),e(ke,Ze),e(g,ce),e(g,de),e(de,_e),e(de,et),e(de,Ae),e(t,gt),e(t,ue),se(Be,ue,null),e(ue,Et),e(ue,Ke),e(Ke,bt),e(ue,yt),e(ue,qe),e(qe,It),e(ue,kt),e(ue,We),e(We,$t),e(t,wt),e(t,Re),e(Re,it),e(Re,Pt),e(Re,Ge),e(Ge,tt),e(tt,rt),e(rt,Nt),e(Ge,xt),e(Ge,at),e(at,Se),e(Se,St),e(Se,ot),e(ot,Tt),e(Se,Mt),e(Se,ct),e(ct,Dt),e(t,At),e(t,st),e(st,Rt),ft=!0},p:be,i(Te){ft||(O(Be.$$.fragment,Te),ft=!0)},o(Te){z(Be.$$.fragment,Te),ft=!1},d(Te){Te&&i(t),le(Be)}}}const Br="WEB3 NFT CRYPTO AI:        THE AUGMENTED METAVERSE EXPERIENCE.         ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9. REMASTERED.";class Kr extends ne{constructor(t){super(),ie(this,t,null,zr,oe,{})}}function br(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A,M,y=b[0]&&yr(b);return{c(){t=o("div"),a=o("button"),r=o("h3"),s=m(b[1]),u=$(),n=o("h4"),h=m(b[2]),p=$(),f=o("div"),v=o("h6"),P=m("["),I=m(b[3]),S=m("]"),x=$(),k=o("span"),E=vr("svg"),N=vr("path"),R=$(),G=o("article"),y&&y.c(),this.h()},l(g){t=c(g,"DIV",{class:!0,"aria-expanded":!0});var T=d(t);a=c(T,"BUTTON",{class:!0});var L=d(a);r=c(L,"H3",{});var C=d(r);s=_(C,b[1]),C.forEach(i),u=w(L),n=c(L,"H4",{class:!0});var H=d(n);h=_(H,b[2]),H.forEach(i),p=w(L),f=c(L,"DIV",{class:!0});var U=d(f);v=c(U,"H6",{class:!0});var K=d(v);P=_(K,"["),I=_(K,b[3]),S=_(K,"]"),K.forEach(i),x=w(U),k=c(U,"SPAN",{class:!0,"aria-expanded":!0});var q=d(k);E=mr(q,"svg",{style:!0,width:!0,height:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,viewBox:!0,stroke:!0,class:!0});var j=d(E);N=mr(j,"path",{d:!0}),d(N).forEach(i),j.forEach(i),q.forEach(i),U.forEach(i),L.forEach(i),R=w(T),G=c(T,"ARTICLE",{});var Y=d(G);y&&y.l(Y),Y.forEach(i),T.forEach(i),this.h()},h(){l(n,"class","subtitle svelte-i7geun"),l(v,"class","date svelte-i7geun"),l(N,"d","M9 5l7 7-7 7"),l(E,"style","tran"),l(E,"width","20"),l(E,"height","20"),l(E,"fill","none"),l(E,"stroke-linecap","round"),l(E,"stroke-linejoin","round"),l(E,"stroke-width","3"),l(E,"viewBox","0 0 24 24"),l(E,"stroke","currentColor"),l(E,"class","svelte-i7geun"),l(k,"class","arrow_right svelte-i7geun"),l(k,"aria-expanded",b[0]),l(f,"class","right_hand svelte-i7geun"),l(a,"class","heading svelte-i7geun"),l(t,"class","container svelte-i7geun"),l(t,"aria-expanded",b[0])},m(g,T){W(g,t,T),e(t,a),e(a,r),e(r,s),e(a,u),e(a,n),e(n,h),e(a,p),e(a,f),e(f,v),e(v,P),e(v,I),e(v,S),e(f,x),e(f,k),e(k,E),e(E,N),e(t,R),e(t,G),y&&y.m(G,null),D=!0,A||(M=Pr(a,"click",b[6]),A=!0)},p(g,T){(!D||T&2)&&jt(s,g[1]),(!D||T&4)&&jt(h,g[2]),(!D||T&8)&&jt(I,g[3]),(!D||T&1)&&l(k,"aria-expanded",g[0]),g[0]?y?(y.p(g,T),T&1&&O(y,1)):(y=yr(g),y.c(),O(y,1),y.m(G,null)):y&&(Fe(),z(y,1,1,()=>{y=null}),Xe()),(!D||T&1)&&l(t,"aria-expanded",g[0])},i(g){D||(O(y),Ee(()=>{D&&(V||(V=B(t,_t,{duration:400},!0)),V.run(1))}),D=!0)},o(g){z(y),V||(V=B(t,_t,{duration:400},!1)),V.run(0),D=!1},d(g){g&&i(t),y&&y.d(),g&&V&&V.end(),A=!1,M()}}}function yr(b){let t,a,r,s,u,n;var h=b[4];function p(f){return{}}return h&&(r=_r(h,p())),{c(){t=o("div"),a=o("div"),r&&ae(r.$$.fragment),this.h()},l(f){t=c(f,"DIV",{class:!0});var v=d(t);a=c(v,"DIV",{});var P=d(a);r&&fe(r.$$.fragment,P),P.forEach(i),v.forEach(i),this.h()},h(){l(t,"class","panel svelte-i7geun")},m(f,v){W(f,t,v),e(t,a),r&&se(r,a,null),n=!0},p(f,v){if(v&16&&h!==(h=f[4])){if(r){Fe();const P=r;z(P.$$.fragment,1,0,()=>{le(P,1)}),Xe()}h?(r=_r(h,p()),ae(r.$$.fragment),O(r.$$.fragment,1),se(r,a,null)):r=null}},i(f){n||(r&&O(r.$$.fragment,f),Ee(()=>{n&&(s||(s=B(a,lt,{},!0)),s.run(1))}),Ee(()=>{n&&(u||(u=B(t,_t,{duration:800},!0)),u.run(1))}),n=!0)},o(f){r&&z(r.$$.fragment,f),s||(s=B(a,lt,{},!1)),s.run(0),u||(u=B(t,_t,{duration:800},!1)),u.run(0),n=!1},d(f){f&&i(t),r&&le(r),f&&s&&s.end(),f&&u&&u.end()}}}function qr(b){let t,a,r=b[5]&&br(b);return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[5]?r?(r.p(s,u),u&32&&O(r,1)):(r=br(s),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(Fe(),z(r,1,1,()=>{r=null}),Xe())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Wr(b,t,a){let{title:r=""}=t,{subtitle:s=""}=t,{date:u=""}=t,{component:n}=t,{visible:h=!0}=t,{paneOpened:p=!1}=t;function f(){a(0,p=!p)}return b.$$set=v=>{"title"in v&&a(1,r=v.title),"subtitle"in v&&a(2,s=v.subtitle),"date"in v&&a(3,u=v.date),"component"in v&&a(4,n=v.component),"visible"in v&&a(5,h=v.visible),"paneOpened"in v&&a(0,p=v.paneOpened)},[p,r,s,u,n,h,f]}class Fr extends ne{constructor(t){super(),ie(this,t,Wr,qr,oe,{title:1,subtitle:2,date:3,component:4,visible:5,paneOpened:0})}}function Xr(b){let t,a,r,s,u,n,h;return{c(){t=o("div"),a=o("img"),s=$(),u=o("a"),n=m("view repo"),this.h()},l(p){t=c(p,"DIV",{class:!0});var f=d(t);a=c(f,"IMG",{src:!0,alt:!0,class:!0}),s=w(f),u=c(f,"A",{href:!0,target:!0,class:!0});var v=d(u);n=_(v,"view repo"),v.forEach(i),f.forEach(i),this.h()},h(){ge(a.src,r="/img/github-mark-white.png")||l(a,"src",r),l(a,"alt","github logo"),l(a,"class","svelte-tl638r"),l(u,"href",h=Ir+b[0]),l(u,"target","_blank"),l(u,"class","svelte-tl638r"),l(t,"class","gh-link svelte-tl638r")},m(p,f){W(p,t,f),e(t,a),e(t,s),e(t,u),e(u,n)},p(p,[f]){f&1&&h!==(h=Ir+p[0])&&l(u,"href",h)},i:be,o:be,d(p){p&&i(t)}}}const Ir="https://github.com/pnwheeler/";function Yr(b,t,a){let{link:r=""}=t;return b.$$set=s=>{"link"in s&&a(0,r=s.link)},[r]}class ut extends ne{constructor(t){super(),ie(this,t,Yr,Xr,oe,{link:0})}}function Jr(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A,M,y,g,T,L,C,H,U,K,q,j,Y,we,Le,Ue,te,ye,Oe,he,He,ve,Ie,Pe,je,ze,J,me;return J=new ut({props:{link:"drug-generator"}}),{c(){t=o("div"),a=o("div"),r=o("p"),s=m("I love drug names. They dont "),u=o("em"),n=m("mean"),h=m(" anything, but they "),p=o("em"),f=m("sound"),v=m(" like they almost could."),P=$(),I=o("img"),x=$(),k=o("p"),E=m("[Performing "),N=o("em"),R=m("market research"),G=m(". I would take "),V=o("em"),D=m("cetrasone"),A=m(", "),M=o("em"),y=m("kysovell"),g=m(", and "),T=o("em"),L=m("omgaless"),C=m(" three times/day with every meal]"),H=$(),U=o("p"),K=m(`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). To prepare the data for training, the names were one hot encoded, split into subsequences, batched up, and shuffled around.`),q=$(),j=o("p"),Y=m("I ("),we=o("small"),Le=m("somewhat arbitrarily"),Ue=m(`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),te=o("small"),ye=m("again, somewhat arbitrarily"),Oe=m(`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),he=o("a"),He=m("names"),ve=m(`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),Ie=$(),Pe=o("p"),je=m("Written in Python using pandas and TensorFlow."),ze=$(),ae(J.$$.fragment),this.h()},l(re){t=c(re,"DIV",{class:!0});var De=d(t);a=c(De,"DIV",{class:!0});var F=d(a);r=c(F,"P",{});var Q=d(r);s=_(Q,"I love drug names. They dont "),u=c(Q,"EM",{});var Ne=d(u);n=_(Ne,"mean"),Ne.forEach(i),h=_(Q," anything, but they "),p=c(Q,"EM",{});var Ye=d(p);f=_(Ye,"sound"),Ye.forEach(i),v=_(Q," like they almost could."),Q.forEach(i),P=w(F),I=c(F,"IMG",{src:!0,alt:!0}),x=w(F),k=c(F,"P",{class:!0});var Z=d(k);E=_(Z,"[Performing "),N=c(Z,"EM",{});var Je=d(N);R=_(Je,"market research"),Je.forEach(i),G=_(Z,". I would take "),V=c(Z,"EM",{});var ke=d(V);D=_(ke,"cetrasone"),ke.forEach(i),A=_(Z,", "),M=c(Z,"EM",{});var xe=d(M);y=_(xe,"kysovell"),xe.forEach(i),g=_(Z,", and "),T=c(Z,"EM",{});var Qe=d(T);L=_(Qe,"omgaless"),Qe.forEach(i),C=_(Z," three times/day with every meal]"),Z.forEach(i),H=w(F),U=c(F,"P",{});var Ze=d(U);K=_(Ze,`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). To prepare the data for training, the names were one hot encoded, split into subsequences, batched up, and shuffled around.`),Ze.forEach(i),q=w(F),j=c(F,"P",{});var ce=d(j);Y=_(ce,"I ("),we=c(ce,"SMALL",{});var de=d(we);Le=_(de,"somewhat arbitrarily"),de.forEach(i),Ue=_(ce,`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),te=c(ce,"SMALL",{});var _e=d(te);ye=_(_e,"again, somewhat arbitrarily"),_e.forEach(i),Oe=_(ce,`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),he=c(ce,"A",{href:!0,target:!0});var nt=d(he);He=_(nt,"names"),nt.forEach(i),ve=_(ce,`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),ce.forEach(i),Ie=w(F),Pe=c(F,"P",{});var et=d(Pe);je=_(et,"Written in Python using pandas and TensorFlow."),et.forEach(i),ze=w(F),fe(J.$$.fragment,F),F.forEach(i),De.forEach(i),this.h()},h(){ge(I.src,S="img/drug_namer.gif")||l(I,"src",S),l(I,"alt","generating drugs gif"),l(k,"class","caption"),l(he,"href","https://github.com/pnwheeler/drug-generator/blob/main/fake_drugs.txt"),l(he,"target","_blank"),l(a,"class","desc"),l(t,"class","desc-wrapper")},m(re,De){W(re,t,De),e(t,a),e(a,r),e(r,s),e(r,u),e(u,n),e(r,h),e(r,p),e(p,f),e(r,v),e(a,P),e(a,I),e(a,x),e(a,k),e(k,E),e(k,N),e(N,R),e(k,G),e(k,V),e(V,D),e(k,A),e(k,M),e(M,y),e(k,g),e(k,T),e(T,L),e(k,C),e(a,H),e(a,U),e(U,K),e(a,q),e(a,j),e(j,Y),e(j,we),e(we,Le),e(j,Ue),e(j,te),e(te,ye),e(j,Oe),e(j,he),e(he,He),e(j,ve),e(a,Ie),e(a,Pe),e(Pe,je),e(a,ze),se(J,a,null),me=!0},p:be,i(re){me||(O(J.$$.fragment,re),me=!0)},o(re){z(J.$$.fragment,re),me=!1},d(re){re&&i(t),le(J)}}}class Qr extends ne{constructor(t){super(),ie(this,t,null,Jr,oe,{})}}function Zr(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A,M,y;return M=new ut({props:{link:"TRIMCROP"}}),{c(){t=o("div"),a=o("div"),r=o("img"),u=$(),n=o("div"),h=o("p"),p=m(`Made this because sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software.`),f=$(),v=o("p"),P=m("Used QML and JS to create the interface (which is basically a media player + a few overlays) and C++ to plug it up to ffmpeg."),I=$(),S=o("p"),x=m("The border on the crop tool is a bit janky, but I find myself using it a decent amount."),k=$(),E=o("div"),N=o("p"),R=m("[Demoing on a video I took of Jojo having a bad dream >.<]"),G=$(),V=o("p"),D=m("Written with Qt6 & ffmpeg."),A=$(),ae(M.$$.fragment),this.h()},l(g){t=c(g,"DIV",{class:!0});var T=d(t);a=c(T,"DIV",{class:!0});var L=d(a);r=c(L,"IMG",{src:!0,alt:!0,class:!0}),u=w(L),n=c(L,"DIV",{class:!0});var C=d(n);h=c(C,"P",{});var H=d(h);p=_(H,`Made this because sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software.`),H.forEach(i),f=w(C),v=c(C,"P",{});var U=d(v);P=_(U,"Used QML and JS to create the interface (which is basically a media player + a few overlays) and C++ to plug it up to ffmpeg."),U.forEach(i),I=w(C),S=c(C,"P",{});var K=d(S);x=_(K,"The border on the crop tool is a bit janky, but I find myself using it a decent amount."),K.forEach(i),C.forEach(i),L.forEach(i),k=w(T),E=c(T,"DIV",{class:!0,style:!0});var q=d(E);N=c(q,"P",{class:!0,style:!0});var j=d(N);R=_(j,"[Demoing on a video I took of Jojo having a bad dream >.<]"),j.forEach(i),G=w(q),V=c(q,"P",{});var Y=d(V);D=_(Y,"Written with Qt6 & ffmpeg."),Y.forEach(i),A=w(q),fe(M.$$.fragment,q),q.forEach(i),T.forEach(i),this.h()},h(){ge(r.src,s="/img/trimcrop.gif")||l(r,"src",s),l(r,"alt","crop interface"),l(r,"class","svelte-1lawn3q"),l(n,"class","txt svelte-1lawn3q"),l(a,"class","trimcrop svelte-1lawn3q"),l(N,"class","caption"),Me(N,"width","100%"),l(E,"class","desc"),Me(E,"width","100%"),l(t,"class","desc-wrapper")},m(g,T){W(g,t,T),e(t,a),e(a,r),e(a,u),e(a,n),e(n,h),e(h,p),e(n,f),e(n,v),e(v,P),e(n,I),e(n,S),e(S,x),e(t,k),e(t,E),e(E,N),e(N,R),e(E,G),e(E,V),e(V,D),e(E,A),se(M,E,null),y=!0},p:be,i(g){y||(O(M.$$.fragment,g),y=!0)},o(g){z(M.$$.fragment,g),y=!1},d(g){g&&i(t),le(M)}}}class ea extends ne{constructor(t){super(),ie(this,t,null,Zr,oe,{})}}function ta(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A,M;return A=new ut({props:{link:"stabilizer"}}),{c(){t=o("div"),a=o("img"),s=$(),u=o("p"),n=m("[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),h=$(),p=o("div"),f=o("p"),v=m(`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),P=o("a"),I=m("this"),S=m(`. \r
        `),x=o("p"),k=m(`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),E=o("small"),N=m("In the name of consistent formatting, fake link to 404."),R=$(),G=o("p"),V=m("Written in Python using OpenCV."),D=$(),ae(A.$$.fragment),this.h()},l(y){t=c(y,"DIV",{class:!0});var g=d(t);a=c(g,"IMG",{style:!0,src:!0,alt:!0}),s=w(g),u=c(g,"P",{class:!0});var T=d(u);n=_(T,"[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),T.forEach(i),h=w(g),p=c(g,"DIV",{class:!0});var L=d(p);f=c(L,"P",{});var C=d(f);v=_(C,`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),P=c(C,"A",{href:!0,target:!0});var H=d(P);I=_(H,"this"),H.forEach(i),S=_(C,`. \r
        `),C.forEach(i),x=c(L,"P",{});var U=d(x);k=_(U,`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),E=c(U,"SMALL",{});var K=d(E);N=_(K,"In the name of consistent formatting, fake link to 404."),K.forEach(i),U.forEach(i),R=w(L),G=c(L,"P",{});var q=d(G);V=_(q,"Written in Python using OpenCV."),q.forEach(i),D=w(L),fe(A.$$.fragment,L),L.forEach(i),g.forEach(i),this.h()},h(){Me(a,"width","50%"),ge(a.src,r="/img/stabilizer.gif")||l(a,"src",r),l(a,"alt","before_after_composite"),l(u,"class","caption"),l(P,"href","https://www.storyzapp.com/"),l(P,"target","_blank"),l(p,"class","desc"),l(t,"class","desc-wrapper")},m(y,g){W(y,t,g),e(t,a),e(t,s),e(t,u),e(u,n),e(t,h),e(t,p),e(p,f),e(f,v),e(f,P),e(P,I),e(f,S),e(p,x),e(x,k),e(x,E),e(E,N),e(p,R),e(p,G),e(G,V),e(p,D),se(A,p,null),M=!0},p:be,i(y){M||(O(A.$$.fragment,y),M=!0)},o(y){z(A.$$.fragment,y),M=!1},d(y){y&&i(t),le(A)}}}class ra extends ne{constructor(t){super(),ie(this,t,null,ta,oe,{})}}function aa(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A,M;return A=new ut({props:{link:"MiscGraphics/tree/main/Rendering"}}),{c(){t=o("div"),a=o("div"),r=o("img"),u=$(),n=o("img"),p=$(),f=o("p"),v=m("[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),P=$(),I=o("div"),S=o("p"),x=m(`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),k=$(),E=o("p"),N=m("Written in C++ "),R=o("span"),G=m("—"),V=m(" Uses Eigen.h for a few matrix ops."),D=$(),ae(A.$$.fragment),this.h()},l(y){t=c(y,"DIV",{class:!0});var g=d(t);a=c(g,"DIV",{style:!0});var T=d(a);r=c(T,"IMG",{style:!0,src:!0,alt:!0}),u=w(T),n=c(T,"IMG",{style:!0,src:!0,alt:!0}),T.forEach(i),p=w(g),f=c(g,"P",{class:!0});var L=d(f);v=_(L,"[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),L.forEach(i),P=w(g),I=c(g,"DIV",{class:!0});var C=d(I);S=c(C,"P",{});var H=d(S);x=_(H,`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),H.forEach(i),k=w(C),E=c(C,"P",{});var U=d(E);N=_(U,"Written in C++ "),R=c(U,"SPAN",{});var K=d(R);G=_(K,"—"),K.forEach(i),V=_(U," Uses Eigen.h for a few matrix ops."),U.forEach(i),D=w(C),fe(A.$$.fragment,C),C.forEach(i),g.forEach(i),this.h()},h(){Me(r,"width","45%"),ge(r.src,s="/img/ray.png")||l(r,"src",s),l(r,"alt","ray traced balls"),Me(n,"width","45%"),ge(n.src,h="/img/raster.png")||l(n,"src",h),l(n,"alt","rasterizer output Utah teapot"),Me(a,"display","flex"),Me(a,"justify-content","space-evenly"),l(f,"class","caption"),l(I,"class","desc"),l(t,"class","desc-wrapper")},m(y,g){W(y,t,g),e(t,a),e(a,r),e(a,u),e(a,n),e(t,p),e(t,f),e(f,v),e(t,P),e(t,I),e(I,S),e(S,x),e(I,k),e(I,E),e(E,N),e(E,R),e(R,G),e(E,V),e(I,D),se(A,I,null),M=!0},p:be,i(y){M||(O(A.$$.fragment,y),M=!0)},o(y){z(A.$$.fragment,y),M=!1},d(y){y&&i(t),le(A)}}}class sa extends ne{constructor(t){super(),ie(this,t,null,aa,oe,{})}}function la(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N,R,G,V,D,A;return D=new ut({props:{link:"seam-carving"}}),{c(){t=o("div"),a=o("img"),s=$(),u=o("p"),n=m("[Gif of output at each step: red seam is removed]"),h=$(),p=o("div"),f=o("p"),v=m("This was another project for the computer graphics course."),P=$(),I=o("p"),S=m(`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),x=$(),k=o("p"),E=m("Written in C++ "),N=o("span"),R=m("—"),G=m(" uses CImg.h for the masking tool."),V=$(),ae(D.$$.fragment),this.h()},l(M){t=c(M,"DIV",{class:!0});var y=d(t);a=c(y,"IMG",{src:!0,alt:!0}),s=w(y),u=c(y,"P",{class:!0});var g=d(u);n=_(g,"[Gif of output at each step: red seam is removed]"),g.forEach(i),h=w(y),p=c(y,"DIV",{class:!0});var T=d(p);f=c(T,"P",{});var L=d(f);v=_(L,"This was another project for the computer graphics course."),L.forEach(i),P=w(T),I=c(T,"P",{});var C=d(I);S=_(C,`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),C.forEach(i),x=w(T),k=c(T,"P",{});var H=d(k);E=_(H,"Written in C++ "),N=c(H,"SPAN",{});var U=d(N);R=_(U,"—"),U.forEach(i),G=_(H," uses CImg.h for the masking tool."),H.forEach(i),V=w(T),fe(D.$$.fragment,T),T.forEach(i),y.forEach(i),this.h()},h(){ge(a.src,r="/img/seam_carve.gif")||l(a,"src",r),l(a,"alt","crop interface"),l(u,"class","caption"),l(p,"class","desc"),l(t,"class","desc-wrapper")},m(M,y){W(M,t,y),e(t,a),e(t,s),e(t,u),e(u,n),e(t,h),e(t,p),e(p,f),e(f,v),e(p,P),e(p,I),e(I,S),e(p,x),e(p,k),e(k,E),e(k,N),e(N,R),e(k,G),e(p,V),se(D,p,null),A=!0},p:be,i(M){A||(O(D.$$.fragment,M),A=!0)},o(M){z(D.$$.fragment,M),A=!1},d(M){M&&i(t),le(D)}}}class na extends ne{constructor(t){super(),ie(this,t,null,la,oe,{})}}function kr(b,t,a){const r=b.slice();return r[1]=t[a],r}function $r(b){let t,a,r;const s=[b[1]];let u={};for(let n=0;n<s.length;n+=1)u=Tr(u,s[n]);return a=new Fr({props:u}),{c(){t=o("div"),ae(a.$$.fragment)},l(n){t=c(n,"DIV",{});var h=d(t);fe(a.$$.fragment,h),h.forEach(i)},m(n,h){W(n,t,h),se(a,t,null),r=!0},p(n,h){const p=h&1?Mr(s,[Dr(n[1])]):{};a.$set(p)},i(n){r||(O(a.$$.fragment,n),r=!0)},o(n){z(a.$$.fragment,n),r=!1},d(n){n&&i(t),le(a)}}}function ia(b){let t,a,r=b[0],s=[];for(let n=0;n<r.length;n+=1)s[n]=$r(kr(b,r,n));const u=n=>z(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();t=$e()},l(n){for(let h=0;h<s.length;h+=1)s[h].l(n);t=$e()},m(n,h){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(n,h);W(n,t,h),a=!0},p(n,[h]){if(h&1){r=n[0];let p;for(p=0;p<r.length;p+=1){const f=kr(n,r,p);s[p]?(s[p].p(f,h),O(s[p],1)):(s[p]=$r(f),s[p].c(),O(s[p],1),s[p].m(t.parentNode,t))}for(Fe(),p=r.length;p<s.length;p+=1)u(p);Xe()}},i(n){if(!a){for(let h=0;h<r.length;h+=1)O(s[h]);a=!0}},o(n){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)z(s[h]);a=!1},d(n){Sr(s,n),n&&i(t)}}}function oa(b){return[[{title:"Drug generator",subtitle:"Character-level RNN",date:"Apr 2023",component:Qr},{title:"TRIMCROP",subtitle:"Trim and crop video",date:"Jan 2023",component:ea},{title:"Gif stabilization",subtitle:"Program to stabilize gifs",date:"Jul 2022",component:ra},{title:"Seam Carving",subtitle:"Content-aware image resizing",date:"Jul 2021",component:na},{title:"Static Renderers",subtitle:"Raytracer and rasterizer",date:"Jun 2021",component:sa}]]}class ca extends ne{constructor(t){super(),ie(this,t,oa,ia,oe,{})}}function wr(b){let t,a,r,s,u,n,h,p,f,v,P,I,S,x,k,E,N;return s=new Vr({}),h=new Kr({}),I=new Ur({}),k=new ca({}),{c(){t=o("div"),a=o("div"),r=o("div"),ae(s.$$.fragment),u=$(),n=o("div"),ae(h.$$.fragment),f=$(),v=o("div"),P=o("div"),ae(I.$$.fragment),S=$(),x=o("div"),ae(k.$$.fragment),this.h()},l(R){t=c(R,"DIV",{id:!0,class:!0});var G=d(t);a=c(G,"DIV",{id:!0,class:!0});var V=d(a);r=c(V,"DIV",{id:!0,class:!0});var D=d(r);fe(s.$$.fragment,D),D.forEach(i),u=w(V),n=c(V,"DIV",{id:!0,class:!0});var A=d(n);fe(h.$$.fragment,A),A.forEach(i),V.forEach(i),f=w(G),v=c(G,"DIV",{id:!0,class:!0});var M=d(v);P=c(M,"DIV",{id:!0,class:!0});var y=d(P);fe(I.$$.fragment,y),y.forEach(i),S=w(M),x=c(M,"DIV",{id:!0,class:!0});var g=d(x);fe(k.$$.fragment,g),g.forEach(i),M.forEach(i),G.forEach(i),this.h()},h(){l(r,"id","about-text"),l(r,"class","svelte-18dtzke"),l(n,"id","about-card"),l(n,"class","svelte-18dtzke"),l(a,"id","about-section"),l(a,"class","svelte-18dtzke"),l(P,"id","projects-text"),l(P,"class","svelte-18dtzke"),l(x,"id","projects-content"),l(x,"class","svelte-18dtzke"),l(v,"id","project-section"),l(v,"class","svelte-18dtzke"),l(t,"id","content-area"),l(t,"class","svelte-18dtzke")},m(R,G){W(R,t,G),e(t,a),e(a,r),se(s,r,null),e(a,u),e(a,n),se(h,n,null),e(t,f),e(t,v),e(v,P),se(I,P,null),e(v,S),e(v,x),se(k,x,null),N=!0},i(R){N||(O(s.$$.fragment,R),O(h.$$.fragment,R),Ee(()=>{N&&(p||(p=B(n,pe,{y:-500,duration:2e3,delay:1500},!0)),p.run(1))}),O(I.$$.fragment,R),O(k.$$.fragment,R),Ee(()=>{N&&(E||(E=B(x,pe,{y:500,duration:1500,delay:2400},!0)),E.run(1))}),N=!0)},o(R){z(s.$$.fragment,R),z(h.$$.fragment,R),p||(p=B(n,pe,{y:-500,duration:2e3,delay:1500},!1)),p.run(0),z(I.$$.fragment,R),z(k.$$.fragment,R),E||(E=B(x,pe,{y:500,duration:1500,delay:2400},!1)),E.run(0),N=!1},d(R){R&&i(t),le(s),le(h),R&&p&&p.end(),le(I),le(k),R&&E&&E.end()}}}function da(b){let t,a,r=b[0]&&wr();return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[0]?r?u&1&&O(r,1):(r=wr(),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(Fe(),z(r,1,1,()=>{r=null}),Xe())},i(s){a||(O(r),a=!0)},o(s){z(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function ua(b,t,a){let r=!1;return zt(()=>a(0,r=!0)),[r]}class ha extends ne{constructor(t){super(),ie(this,t,ua,da,oe,{})}}export{ha as component,pa as universal};