import{J as hr,K as xr,S as ne,i as ie,s as oe,e as $e,b as W,g as U,v as Fe,d as j,f as Xe,h as i,o as zt,k as o,q as m,a as x,l as c,m as d,r as _,c as S,n as l,G as e,L as ge,M as B,p as Me,N as Pr,H as be,y as ae,z as fe,O as Ee,A as se,B as le,P as vr,Q as mr,u as jt,x as _r,R as Sr,T as Tr,U as Mr,V as Dr}from"../chunks/index.48588b9e.js";const Ar=!0,pa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ar},Symbol.toStringTag,{value:"Module"}));function Nr(E){const t=E-1;return t*t*t+1}function lt(E,{delay:t=0,duration:a=400,easing:r=xr}={}){const s=+getComputedStyle(E).opacity;return{delay:t,duration:a,easing:r,css:u=>`opacity: ${u*s}`}}function pe(E,{delay:t=0,duration:a=400,easing:r=Nr,x:s=0,y:u=0,opacity:n=0}={}){const h=getComputedStyle(E),p=+h.opacity,f=h.transform==="none"?"":h.transform,v=p*(1-n),[N,$]=hr(s),[T,y]=hr(u);return{delay:t,duration:a,easing:r,css:(P,w)=>`
			transform: ${f} translate(${(1-P)*N}${$}, ${(1-P)*T}${y});
			opacity: ${p-v*w}`}}function _t(E,{delay:t=0,duration:a=400,easing:r=Nr,axis:s="y"}={}){const u=getComputedStyle(E),n=+u.opacity,h=s==="y"?"height":"width",p=parseFloat(u[h]),f=s==="y"?["top","bottom"]:["left","right"],v=f.map(M=>`${M[0].toUpperCase()}${M.slice(1)}`),N=parseFloat(u[`padding${v[0]}`]),$=parseFloat(u[`padding${v[1]}`]),T=parseFloat(u[`margin${v[0]}`]),y=parseFloat(u[`margin${v[1]}`]),P=parseFloat(u[`border${v[0]}Width`]),w=parseFloat(u[`border${v[1]}Width`]);return{delay:t,duration:a,easing:r,css:M=>`overflow: hidden;opacity: ${Math.min(M*20,1)*n};${h}: ${M*p}px;padding-${f[0]}: ${M*N}px;padding-${f[1]}: ${M*$}px;margin-${f[0]}: ${M*T}px;margin-${f[1]}: ${M*y}px;border-${f[0]}-width: ${M*P}px;border-${f[1]}-width: ${M*w}px;`}}function Er(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I;return{c(){t=o("div"),a=o("h1"),r=m("About"),u=x(),n=o("hr"),p=x(),f=o("div"),v=o("p"),N=m("Hi! My name's "),$=o("span"),T=m("Patrick"),y=m("."),P=x(),w=o("p"),M=m("I graduated from UMBC with a degree in computer science and am currently looking for an entry level position!"),D=x(),A=o("p"),G=m("I like learning about graphics, games, and multimedia in general."),this.h()},l(g){t=c(g,"DIV",{class:!0});var k=d(t);a=c(k,"H1",{});var b=d(a);r=_(b,"About"),b.forEach(i),u=S(k),n=c(k,"HR",{class:!0}),p=S(k),f=c(k,"DIV",{});var V=d(f);v=c(V,"P",{});var L=d(v);N=_(L,"Hi! My name's "),$=c(L,"SPAN",{id:!0,class:!0});var C=d($);T=_(C,"Patrick"),C.forEach(i),y=_(L,"."),L.forEach(i),P=S(V),w=c(V,"P",{});var O=d(w);M=_(O,"I graduated from UMBC with a degree in computer science and am currently looking for an entry level position!"),O.forEach(i),D=S(V),A=c(V,"P",{});var H=d(A);G=_(H,"I like learning about graphics, games, and multimedia in general."),H.forEach(i),V.forEach(i),k.forEach(i),this.h()},h(){l(n,"class","body-hr"),l($,"id","name"),l($,"class","svelte-1resjz3"),l(t,"class","body-section")},m(g,k){W(g,t,k),e(t,a),e(a,r),e(t,u),e(t,n),e(t,p),e(t,f),e(f,v),e(v,N),e(v,$),e($,T),e(v,y),e(f,P),e(f,w),e(w,M),e(f,D),e(f,A),e(A,G),I=!0},i(g){I||(ge(()=>{I&&(s||(s=B(a,pe,{x:-300,duration:1700,delay:300},!0)),s.run(1))}),ge(()=>{I&&(h||(h=B(n,pe,{x:200,duration:1e3,delay:1e3},!0)),h.run(1))}),ge(()=>{I&&(R||(R=B(f,lt,{duration:1700},!0)),R.run(1))}),I=!0)},o(g){s||(s=B(a,pe,{x:-300,duration:1700,delay:300},!1)),s.run(0),h||(h=B(n,pe,{x:200,duration:1e3,delay:1e3},!1)),h.run(0),R||(R=B(f,lt,{duration:1700},!1)),R.run(0),I=!1},d(g){g&&i(t),g&&s&&s.end(),g&&h&&h.end(),g&&R&&R.end()}}}function Rr(E){let t,a,r=E[0]&&Er();return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[0]?r?u&1&&U(r,1):(r=Er(),r.c(),U(r,1),r.m(t.parentNode,t)):r&&(Fe(),j(r,1,1,()=>{r=null}),Xe())},i(s){a||(U(r),a=!0)},o(s){j(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Gr(E,t,a){let{ready:r=!1}=t;return zt(()=>a(0,r=!0)),E.$$set=s=>{"ready"in s&&a(0,r=s.ready)},[r]}class Vr extends ne{constructor(t){super(),ie(this,t,Gr,Rr,oe,{ready:0})}}function gr(E){let t,a,r,s,u,n,h,p,f,v,N,$;return{c(){t=o("div"),a=o("h1"),r=m("Projects"),u=x(),n=o("hr"),p=x(),f=o("p"),v=m("Here are some things I've made."),this.h()},l(T){t=c(T,"DIV",{class:!0});var y=d(t);a=c(y,"H1",{});var P=d(a);r=_(P,"Projects"),P.forEach(i),u=S(y),n=c(y,"HR",{class:!0}),p=S(y),f=c(y,"P",{style:!0});var w=d(f);v=_(w,"Here are some things I've made."),w.forEach(i),y.forEach(i),this.h()},h(){l(n,"class","body-hr"),Me(f,"text-align","left"),Me(f,"margin-bottom","1em"),l(t,"class","body-section")},m(T,y){W(T,t,y),e(t,a),e(a,r),e(t,u),e(t,n),e(t,p),e(t,f),e(f,v),$=!0},i(T){$||(ge(()=>{$&&(s||(s=B(a,pe,{x:300,duration:1700,delay:2e3},!0)),s.run(1))}),ge(()=>{$&&(h||(h=B(n,pe,{x:-200,duration:1e3,delay:2700},!0)),h.run(1))}),ge(()=>{$&&(N||(N=B(f,lt,{delay:1700,duration:1700},!0)),N.run(1))}),$=!0)},o(T){s||(s=B(a,pe,{x:300,duration:1700,delay:2e3},!1)),s.run(0),h||(h=B(n,pe,{x:-200,duration:1e3,delay:2700},!1)),h.run(0),N||(N=B(f,lt,{delay:1700,duration:1700},!1)),N.run(0),$=!1},d(T){T&&i(t),T&&s&&s.end(),T&&h&&h.end(),T&&N&&N.end()}}}function Cr(E){let t,a,r=E[0]&&gr();return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[0]?r?u&1&&U(r,1):(r=gr(),r.c(),U(r,1),r.m(t.parentNode,t)):r&&(Fe(),j(r,1,1,()=>{r=null}),Xe())},i(s){a||(U(r),a=!0)},o(s){j(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Lr(E,t,a){let{ready:r=!1}=t;return zt(()=>a(0,r=!0)),E.$$set=s=>{"ready"in s&&a(0,r=s.ready)},[r]}class Ur extends ne{constructor(t){super(),ie(this,t,Lr,Cr,oe,{ready:0})}}function Or(E){let t,a,r;return{c(){t=o("button"),this.h()},l(s){t=c(s,"BUTTON",{class:!0}),d(t).forEach(i),this.h()},h(){l(t,"class","button_area svelte-11836uu")},m(s,u){W(s,t,u),a||(r=Pr(t,"click",E[0]),a=!0)},p:be,i:be,o:be,d(s){s&&i(t),a=!1,r()}}}function Hr(E,t,a){let{words:r=""}=t;const s=window.speechSynthesis;function u(){if(s.speaking){s.cancel();return}const n=s.getVoices();let h=Math.random()*3,p=Math.floor(Math.random()*n.length);const f=new SpeechSynthesisUtterance(r);f.voice=n[p],f.pitch=h,f.rate=1+Math.random(),f.lang="en-US",s.speak(f)}return E.$$set=n=>{"words"in n&&a(1,r=n.words)},[u,r,s]}class jr extends ne{constructor(t){super(),ie(this,t,Hr,Or,oe,{words:1,synth:2})}get synth(){return this.$$.ctx[2]}}function zr(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I,g,k,b,V,L,C,O,H,q,K,z,ee,we,Le,Ue,te,ye,Oe,he,He,ve,Ie,Pe,je,ze,Y,me,re,De,F,J,Ne,Ye,Q,Je,ke,xe,Qe,Ze,ce,de,_e,nt,et,Ae,Bt,Et,ue,Be,gt,Ke,bt,yt,qe,It,kt,We,$t,wt,Re,it,Pt,Ge,tt,rt,Nt,xt,at,Se,St,ot,Tt,Mt,ct,Dt,At,st,Rt,ft;return Be=new jr({props:{words:Br}}),{c(){t=o("div"),a=o("img"),s=x(),u=o("div"),n=o("div"),h=o("span"),p=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),f=x(),v=o("span"),N=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),$=x(),T=o("span"),y=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),P=x(),w=o("span"),M=m("SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),D=x(),A=o("div"),G=o("div"),R=o("div"),I=o("img"),k=x(),b=o("div"),V=o("hr"),L=x(),C=o("p"),O=o("span"),H=m("ISS:"),q=m(" 06/11/23"),K=x(),z=o("p"),ee=o("span"),we=m("LOC:"),Le=m(" MD, USA"),Ue=x(),te=o("p"),ye=o("span"),Oe=m("EDU:"),he=m(" B.S."),He=x(),ve=o("p"),Ie=o("span"),Pe=m("AGE:"),je=m(" 13-54"),ze=x(),Y=o("p"),me=o("span"),re=m("EYE:"),De=m(" BRN"),F=x(),J=o("p"),Ne=o("span"),Ye=m("HAND:"),Q=m(" RGT"),Je=x(),ke=o("p"),xe=o("span"),Qe=m("MENTAL:"),Ze=m(" HEALTH!"),ce=x(),de=o("div"),_e=o("img"),et=x(),Ae=o("img"),Et=x(),ue=o("div"),ae(Be.$$.fragment),gt=x(),Ke=o("p"),bt=m("WEB3 NFT CRYPTO AI"),yt=x(),qe=o("p"),It=m("THE AUGMENTED METAVERSE EXPERIENCE"),kt=x(),We=o("p"),$t=m("ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),wt=x(),Re=o("div"),it=o("hr"),Pt=x(),Ge=o("ul"),tt=o("li"),rt=o("span"),Nt=m("Can kickflip, Moira main, dairy allergy haver, bookmark hoarder"),xt=x(),at=o("li"),Se=o("span"),St=m('Really impressive leetcode skills: "\\/\\/0vv! 5() 1m|'),ot=o("sup"),Tt=m("o"),Mt=m('r3ss1v3", '),ct=o("em"),Dt=m("QED."),At=x(),st=o("div"),Rt=m("NO_UNAUTH_SALE"),this.h()},l(Te){t=c(Te,"DIV",{class:!0});var Z=d(t);a=c(Z,"IMG",{id:!0,src:!0,alt:!0,class:!0}),s=S(Z),u=c(Z,"DIV",{class:!0});var Kt=d(u);n=c(Kt,"DIV",{class:!0});var Ve=d(n);h=c(Ve,"SPAN",{class:!0});var qt=d(h);p=_(qt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),qt.forEach(i),f=S(Ve),v=c(Ve,"SPAN",{class:!0});var Wt=d(v);N=_(Wt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Wt.forEach(i),$=S(Ve),T=c(Ve,"SPAN",{class:!0});var Ft=d(T);y=_(Ft,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Ft.forEach(i),P=S(Ve),w=c(Ve,"SPAN",{class:!0});var Xt=d(w);M=_(Xt,"SEEKING EMPLOYMENT   SEEKING LAUGHTER   SEEKING EXPERIENCE   "),Xt.forEach(i),Ve.forEach(i),Kt.forEach(i),D=S(Z),A=c(Z,"DIV",{class:!0});var pt=d(A);G=c(pt,"DIV",{id:!0,class:!0});var Yt=d(G);R=c(Yt,"DIV",{id:!0,class:!0});var Jt=d(R);I=c(Jt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),Jt.forEach(i),Yt.forEach(i),k=S(pt),b=c(pt,"DIV",{class:!0});var X=d(b);V=c(X,"HR",{class:!0}),L=S(X),C=c(X,"P",{class:!0});var Gt=d(C);O=c(Gt,"SPAN",{class:!0});var Qt=d(O);H=_(Qt,"ISS:"),Qt.forEach(i),q=_(Gt," 06/11/23"),Gt.forEach(i),K=S(X),z=c(X,"P",{class:!0});var Vt=d(z);ee=c(Vt,"SPAN",{class:!0});var Zt=d(ee);we=_(Zt,"LOC:"),Zt.forEach(i),Le=_(Vt," MD, USA"),Vt.forEach(i),Ue=S(X),te=c(X,"P",{class:!0});var Ct=d(te);ye=c(Ct,"SPAN",{class:!0});var er=d(ye);Oe=_(er,"EDU:"),er.forEach(i),he=_(Ct," B.S."),Ct.forEach(i),He=S(X),ve=c(X,"P",{class:!0});var Lt=d(ve);Ie=c(Lt,"SPAN",{class:!0});var tr=d(Ie);Pe=_(tr,"AGE:"),tr.forEach(i),je=_(Lt," 13-54"),Lt.forEach(i),ze=S(X),Y=c(X,"P",{class:!0});var Ut=d(Y);me=c(Ut,"SPAN",{class:!0});var rr=d(me);re=_(rr,"EYE:"),rr.forEach(i),De=_(Ut," BRN"),Ut.forEach(i),F=S(X),J=c(X,"P",{class:!0});var Ot=d(J);Ne=c(Ot,"SPAN",{class:!0});var ar=d(Ne);Ye=_(ar,"HAND:"),ar.forEach(i),Q=_(Ot," RGT"),Ot.forEach(i),Je=S(X),ke=c(X,"P",{class:!0});var Ht=d(ke);xe=c(Ht,"SPAN",{class:!0});var sr=d(xe);Qe=_(sr,"MENTAL:"),sr.forEach(i),Ze=_(Ht," HEALTH!"),Ht.forEach(i),ce=S(X),de=c(X,"DIV",{id:!0,class:!0});var ht=d(de);_e=c(ht,"IMG",{id:!0,src:!0,alt:!0,class:!0}),et=S(ht),Ae=c(ht,"IMG",{id:!0,src:!0,alt:!0,class:!0}),ht.forEach(i),X.forEach(i),pt.forEach(i),Et=S(Z),ue=c(Z,"DIV",{class:!0});var Ce=d(ue);fe(Be.$$.fragment,Ce),gt=S(Ce),Ke=c(Ce,"P",{id:!0,class:!0});var lr=d(Ke);bt=_(lr,"WEB3 NFT CRYPTO AI"),lr.forEach(i),yt=S(Ce),qe=c(Ce,"P",{id:!0,class:!0});var nr=d(qe);It=_(nr,"THE AUGMENTED METAVERSE EXPERIENCE"),nr.forEach(i),kt=S(Ce),We=c(Ce,"P",{id:!0,class:!0});var ir=d(We);$t=_(ir,"ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9"),ir.forEach(i),Ce.forEach(i),wt=S(Z),Re=c(Z,"DIV",{class:!0});var vt=d(Re);it=c(vt,"HR",{id:!0,class:!0}),Pt=S(vt),Ge=c(vt,"UL",{class:!0});var mt=d(Ge);tt=c(mt,"LI",{class:!0});var or=d(tt);rt=c(or,"SPAN",{class:!0});var cr=d(rt);Nt=_(cr,"Can kickflip, Moira main, dairy allergy haver, bookmark hoarder"),cr.forEach(i),or.forEach(i),xt=S(mt),at=c(mt,"LI",{class:!0});var dr=d(at);Se=c(dr,"SPAN",{class:!0});var dt=d(Se);St=_(dt,'Really impressive leetcode skills: "\\/\\/0vv! 5() 1m|'),ot=c(dt,"SUP",{});var ur=d(ot);Tt=_(ur,"o"),ur.forEach(i),Mt=_(dt,'r3ss1v3", '),ct=c(dt,"EM",{});var fr=d(ct);Dt=_(fr,"QED."),fr.forEach(i),dt.forEach(i),dr.forEach(i),mt.forEach(i),vt.forEach(i),At=S(Z),st=c(Z,"DIV",{class:!0});var pr=d(st);Rt=_(pr,"NO_UNAUTH_SALE"),pr.forEach(i),Z.forEach(i),this.h()},h(){l(a,"id","bg-card"),Ee(a.src,r="/img/tech_globe.png")||l(a,"src",r),l(a,"alt","bg-img"),l(a,"class","svelte-17b3nxi"),l(h,"class","svelte-17b3nxi"),l(v,"class","svelte-17b3nxi"),l(T,"class","svelte-17b3nxi"),l(w,"class","svelte-17b3nxi"),l(n,"class","marquee__inner svelte-17b3nxi"),l(u,"class","marquee svelte-17b3nxi"),l(I,"id","static"),Ee(I.src,g="/img/bw_portrait.png")||l(I,"src",g),l(I,"alt","bw_portrait"),l(I,"class","svelte-17b3nxi"),l(R,"id","hover-target"),l(R,"class","svelte-17b3nxi"),l(G,"id","pfp"),l(G,"class","svelte-17b3nxi"),l(V,"class","svelte-17b3nxi"),l(O,"class","svelte-17b3nxi"),l(C,"class","svelte-17b3nxi"),l(ee,"class","svelte-17b3nxi"),l(z,"class","svelte-17b3nxi"),l(ye,"class","svelte-17b3nxi"),l(te,"class","svelte-17b3nxi"),l(Ie,"class","svelte-17b3nxi"),l(ve,"class","svelte-17b3nxi"),l(me,"class","svelte-17b3nxi"),l(Y,"class","svelte-17b3nxi"),l(Ne,"class","svelte-17b3nxi"),l(J,"class","svelte-17b3nxi"),l(xe,"class","svelte-17b3nxi"),l(ke,"class","svelte-17b3nxi"),l(_e,"id","spinner"),Ee(_e.src,nt="/img/verified_1.png")||l(_e,"src",nt),l(_e,"alt","spinning verified"),l(_e,"class","svelte-17b3nxi"),l(Ae,"id","badge"),Ee(Ae.src,Bt="/img/Greater_coat_of_arms.png")||l(Ae,"src",Bt),l(Ae,"alt","badge"),l(Ae,"class","svelte-17b3nxi"),l(de,"id","badge_container"),l(de,"class","svelte-17b3nxi"),l(b,"class","stats svelte-17b3nxi"),l(A,"class","bio svelte-17b3nxi"),l(Ke,"id","top"),l(Ke,"class","svelte-17b3nxi"),l(qe,"id","mid"),l(qe,"class","svelte-17b3nxi"),l(We,"id","bot"),l(We,"class","svelte-17b3nxi"),l(ue,"class","investment svelte-17b3nxi"),l(it,"id","break"),l(it,"class","svelte-17b3nxi"),l(rt,"class","svelte-17b3nxi"),l(tt,"class","svelte-17b3nxi"),l(Se,"class","svelte-17b3nxi"),l(at,"class","svelte-17b3nxi"),l(Ge,"class","svelte-17b3nxi"),l(Re,"class","facts svelte-17b3nxi"),l(st,"class","barcode svelte-17b3nxi"),l(t,"class","card-wrapper svelte-17b3nxi")},m(Te,Z){W(Te,t,Z),e(t,a),e(t,s),e(t,u),e(u,n),e(n,h),e(h,p),e(n,f),e(n,v),e(v,N),e(n,$),e(n,T),e(T,y),e(n,P),e(n,w),e(w,M),e(t,D),e(t,A),e(A,G),e(G,R),e(R,I),e(A,k),e(A,b),e(b,V),e(b,L),e(b,C),e(C,O),e(O,H),e(C,q),e(b,K),e(b,z),e(z,ee),e(ee,we),e(z,Le),e(b,Ue),e(b,te),e(te,ye),e(ye,Oe),e(te,he),e(b,He),e(b,ve),e(ve,Ie),e(Ie,Pe),e(ve,je),e(b,ze),e(b,Y),e(Y,me),e(me,re),e(Y,De),e(b,F),e(b,J),e(J,Ne),e(Ne,Ye),e(J,Q),e(b,Je),e(b,ke),e(ke,xe),e(xe,Qe),e(ke,Ze),e(b,ce),e(b,de),e(de,_e),e(de,et),e(de,Ae),e(t,Et),e(t,ue),se(Be,ue,null),e(ue,gt),e(ue,Ke),e(Ke,bt),e(ue,yt),e(ue,qe),e(qe,It),e(ue,kt),e(ue,We),e(We,$t),e(t,wt),e(t,Re),e(Re,it),e(Re,Pt),e(Re,Ge),e(Ge,tt),e(tt,rt),e(rt,Nt),e(Ge,xt),e(Ge,at),e(at,Se),e(Se,St),e(Se,ot),e(ot,Tt),e(Se,Mt),e(Se,ct),e(ct,Dt),e(t,At),e(t,st),e(st,Rt),ft=!0},p:be,i(Te){ft||(U(Be.$$.fragment,Te),ft=!0)},o(Te){j(Be.$$.fragment,Te),ft=!1},d(Te){Te&&i(t),le(Be)}}}const Br="WEB3 NFT CRYPTO AI:        THE AUGMENTED METAVERSE EXPERIENCE.         ENHANCED FOUNDER'S EDITION RETRO DELUXE VOL.2 REV.B-9. REMASTERED.";class Kr extends ne{constructor(t){super(),ie(this,t,null,zr,oe,{})}}function br(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I=E[0]&&yr(E);return{c(){t=o("div"),a=o("button"),r=o("h3"),s=m(E[1]),u=x(),n=o("h4"),h=m(E[2]),p=x(),f=o("div"),v=o("h6"),N=m(E[3]),$=x(),T=o("span"),y=vr("svg"),P=vr("path"),w=x(),M=o("article"),I&&I.c(),this.h()},l(g){t=c(g,"DIV",{class:!0,"aria-expanded":!0});var k=d(t);a=c(k,"BUTTON",{class:!0});var b=d(a);r=c(b,"H3",{});var V=d(r);s=_(V,E[1]),V.forEach(i),u=S(b),n=c(b,"H4",{class:!0});var L=d(n);h=_(L,E[2]),L.forEach(i),p=S(b),f=c(b,"DIV",{class:!0});var C=d(f);v=c(C,"H6",{class:!0});var O=d(v);N=_(O,E[3]),O.forEach(i),$=S(C),T=c(C,"SPAN",{class:!0,"aria-expanded":!0});var H=d(T);y=mr(H,"svg",{style:!0,width:!0,height:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,viewBox:!0,stroke:!0,class:!0});var q=d(y);P=mr(q,"path",{d:!0}),d(P).forEach(i),q.forEach(i),H.forEach(i),C.forEach(i),b.forEach(i),w=S(k),M=c(k,"ARTICLE",{});var K=d(M);I&&I.l(K),K.forEach(i),k.forEach(i),this.h()},h(){l(n,"class","subtitle svelte-1e5np46"),l(v,"class","date svelte-1e5np46"),l(P,"d","M9 5l7 7-7 7"),l(y,"style","tran"),l(y,"width","20"),l(y,"height","20"),l(y,"fill","none"),l(y,"stroke-linecap","round"),l(y,"stroke-linejoin","round"),l(y,"stroke-width","3"),l(y,"viewBox","0 0 24 24"),l(y,"stroke","currentColor"),l(y,"class","svelte-1e5np46"),l(T,"class","arrow_right svelte-1e5np46"),l(T,"aria-expanded",E[0]),l(f,"class","right_hand svelte-1e5np46"),l(a,"class","heading svelte-1e5np46"),l(t,"class","container svelte-1e5np46"),l(t,"aria-expanded",E[0])},m(g,k){W(g,t,k),e(t,a),e(a,r),e(r,s),e(a,u),e(a,n),e(n,h),e(a,p),e(a,f),e(f,v),e(v,N),e(f,$),e(f,T),e(T,y),e(y,P),e(t,w),e(t,M),I&&I.m(M,null),A=!0,G||(R=Pr(a,"click",E[6]),G=!0)},p(g,k){(!A||k&2)&&jt(s,g[1]),(!A||k&4)&&jt(h,g[2]),(!A||k&8)&&jt(N,g[3]),(!A||k&1)&&l(T,"aria-expanded",g[0]),g[0]?I?(I.p(g,k),k&1&&U(I,1)):(I=yr(g),I.c(),U(I,1),I.m(M,null)):I&&(Fe(),j(I,1,1,()=>{I=null}),Xe()),(!A||k&1)&&l(t,"aria-expanded",g[0])},i(g){A||(U(I),ge(()=>{A&&(D||(D=B(t,_t,{duration:400},!0)),D.run(1))}),A=!0)},o(g){j(I),D||(D=B(t,_t,{duration:400},!1)),D.run(0),A=!1},d(g){g&&i(t),I&&I.d(),g&&D&&D.end(),G=!1,R()}}}function yr(E){let t,a,r,s,u,n;var h=E[4];function p(f){return{}}return h&&(r=_r(h,p())),{c(){t=o("div"),a=o("div"),r&&ae(r.$$.fragment),this.h()},l(f){t=c(f,"DIV",{class:!0});var v=d(t);a=c(v,"DIV",{});var N=d(a);r&&fe(r.$$.fragment,N),N.forEach(i),v.forEach(i),this.h()},h(){l(t,"class","panel svelte-1e5np46")},m(f,v){W(f,t,v),e(t,a),r&&se(r,a,null),n=!0},p(f,v){if(v&16&&h!==(h=f[4])){if(r){Fe();const N=r;j(N.$$.fragment,1,0,()=>{le(N,1)}),Xe()}h?(r=_r(h,p()),ae(r.$$.fragment),U(r.$$.fragment,1),se(r,a,null)):r=null}},i(f){n||(r&&U(r.$$.fragment,f),ge(()=>{n&&(s||(s=B(a,lt,{},!0)),s.run(1))}),ge(()=>{n&&(u||(u=B(t,_t,{duration:800},!0)),u.run(1))}),n=!0)},o(f){r&&j(r.$$.fragment,f),s||(s=B(a,lt,{},!1)),s.run(0),u||(u=B(t,_t,{duration:800},!1)),u.run(0),n=!1},d(f){f&&i(t),r&&le(r),f&&s&&s.end(),f&&u&&u.end()}}}function qr(E){let t,a,r=E[5]&&br(E);return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[5]?r?(r.p(s,u),u&32&&U(r,1)):(r=br(s),r.c(),U(r,1),r.m(t.parentNode,t)):r&&(Fe(),j(r,1,1,()=>{r=null}),Xe())},i(s){a||(U(r),a=!0)},o(s){j(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function Wr(E,t,a){let{title:r=""}=t,{subtitle:s=""}=t,{date:u=""}=t,{component:n}=t,{visible:h=!0}=t,{paneOpened:p=!1}=t;function f(){a(0,p=!p)}return E.$$set=v=>{"title"in v&&a(1,r=v.title),"subtitle"in v&&a(2,s=v.subtitle),"date"in v&&a(3,u=v.date),"component"in v&&a(4,n=v.component),"visible"in v&&a(5,h=v.visible),"paneOpened"in v&&a(0,p=v.paneOpened)},[p,r,s,u,n,h,f]}class Fr extends ne{constructor(t){super(),ie(this,t,Wr,qr,oe,{title:1,subtitle:2,date:3,component:4,visible:5,paneOpened:0})}}function Xr(E){let t,a,r,s,u,n,h;return{c(){t=o("div"),a=o("img"),s=x(),u=o("a"),n=m("view repo"),this.h()},l(p){t=c(p,"DIV",{class:!0});var f=d(t);a=c(f,"IMG",{src:!0,alt:!0,class:!0}),s=S(f),u=c(f,"A",{href:!0,target:!0,class:!0});var v=d(u);n=_(v,"view repo"),v.forEach(i),f.forEach(i),this.h()},h(){Ee(a.src,r="/img/github-mark-white.png")||l(a,"src",r),l(a,"alt","github logo"),l(a,"class","svelte-tl638r"),l(u,"href",h=Ir+E[0]),l(u,"target","_blank"),l(u,"class","svelte-tl638r"),l(t,"class","gh-link svelte-tl638r")},m(p,f){W(p,t,f),e(t,a),e(t,s),e(t,u),e(u,n)},p(p,[f]){f&1&&h!==(h=Ir+p[0])&&l(u,"href",h)},i:be,o:be,d(p){p&&i(t)}}}const Ir="https://github.com/pnwheeler/";function Yr(E,t,a){let{link:r=""}=t;return E.$$set=s=>{"link"in s&&a(0,r=s.link)},[r]}class ut extends ne{constructor(t){super(),ie(this,t,Yr,Xr,oe,{link:0})}}function Jr(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I,g,k,b,V,L,C,O,H,q,K,z,ee,we,Le,Ue,te,ye,Oe,he,He,ve,Ie,Pe,je,ze,Y,me;return Y=new ut({props:{link:"drug-generator"}}),{c(){t=o("div"),a=o("div"),r=o("p"),s=m("I love drug names. They dont "),u=o("em"),n=m("mean"),h=m(" anything, but they "),p=o("em"),f=m("sound"),v=m(" like they almost could."),N=x(),$=o("img"),y=x(),P=o("p"),w=m("[Performing "),M=o("em"),D=m("market research"),A=m(". I would take "),G=o("em"),R=m("cetrasone"),I=m(", "),g=o("em"),k=m("kysovell"),b=m(", and "),V=o("em"),L=m("omgaless"),C=m(" three times/day with every meal]"),O=x(),H=o("p"),q=m(`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). To prepare the data for training, the names were one hot encoded, split into subsequences, batched up, and shuffled around.`),K=x(),z=o("p"),ee=m("I ("),we=o("small"),Le=m("somewhat arbitrarily"),Ue=m(`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),te=o("small"),ye=m("again, somewhat arbitrarily"),Oe=m(`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),he=o("a"),He=m("names"),ve=m(`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),Ie=x(),Pe=o("p"),je=m("Written in Python using pandas and TensorFlow."),ze=x(),ae(Y.$$.fragment),this.h()},l(re){t=c(re,"DIV",{class:!0});var De=d(t);a=c(De,"DIV",{class:!0});var F=d(a);r=c(F,"P",{});var J=d(r);s=_(J,"I love drug names. They dont "),u=c(J,"EM",{});var Ne=d(u);n=_(Ne,"mean"),Ne.forEach(i),h=_(J," anything, but they "),p=c(J,"EM",{});var Ye=d(p);f=_(Ye,"sound"),Ye.forEach(i),v=_(J," like they almost could."),J.forEach(i),N=S(F),$=c(F,"IMG",{src:!0,alt:!0}),y=S(F),P=c(F,"P",{class:!0});var Q=d(P);w=_(Q,"[Performing "),M=c(Q,"EM",{});var Je=d(M);D=_(Je,"market research"),Je.forEach(i),A=_(Q,". I would take "),G=c(Q,"EM",{});var ke=d(G);R=_(ke,"cetrasone"),ke.forEach(i),I=_(Q,", "),g=c(Q,"EM",{});var xe=d(g);k=_(xe,"kysovell"),xe.forEach(i),b=_(Q,", and "),V=c(Q,"EM",{});var Qe=d(V);L=_(Qe,"omgaless"),Qe.forEach(i),C=_(Q," three times/day with every meal]"),Q.forEach(i),O=S(F),H=c(F,"P",{});var Ze=d(H);q=_(Ze,`The model is an LSTM trained on the proprietary names of currently marketed drugs\r
            (courtesy openFDA). To prepare the data for training, the names were one hot encoded, split into subsequences, batched up, and shuffled around.`),Ze.forEach(i),K=S(F),z=c(F,"P",{});var ce=d(z);ee=_(ce,"I ("),we=c(ce,"SMALL",{});var de=d(we);Le=_(de,"somewhat arbitrarily"),de.forEach(i),Ue=_(ce,`) used a 64 unit LSTM + a Dense layer and had it run for \r
            (`),te=c(ce,"SMALL",{});var _e=d(te);ye=_(_e,"again, somewhat arbitrarily"),_e.forEach(i),Oe=_(ce,`) 8 epochs. It took ~2 minutes on my CPU. To generate the \r
            `),he=c(ce,"A",{href:!0,target:!0});var nt=d(he);He=_(nt,"names"),nt.forEach(i),ve=_(ce,`, \r
            I subclassed the model, have it randomly select a character from its top-k(3) distribution at each step, \r
            and let it feed itself until reaching a '\\n' character. Magic!`),ce.forEach(i),Ie=S(F),Pe=c(F,"P",{});var et=d(Pe);je=_(et,"Written in Python using pandas and TensorFlow."),et.forEach(i),ze=S(F),fe(Y.$$.fragment,F),F.forEach(i),De.forEach(i),this.h()},h(){Ee($.src,T="img/drug_namer.gif")||l($,"src",T),l($,"alt","generating drugs gif"),l(P,"class","caption"),l(he,"href","https://github.com/pnwheeler/drug-generator/blob/main/fake_drugs.txt"),l(he,"target","_blank"),l(a,"class","desc"),l(t,"class","desc-wrapper")},m(re,De){W(re,t,De),e(t,a),e(a,r),e(r,s),e(r,u),e(u,n),e(r,h),e(r,p),e(p,f),e(r,v),e(a,N),e(a,$),e(a,y),e(a,P),e(P,w),e(P,M),e(M,D),e(P,A),e(P,G),e(G,R),e(P,I),e(P,g),e(g,k),e(P,b),e(P,V),e(V,L),e(P,C),e(a,O),e(a,H),e(H,q),e(a,K),e(a,z),e(z,ee),e(z,we),e(we,Le),e(z,Ue),e(z,te),e(te,ye),e(z,Oe),e(z,he),e(he,He),e(z,ve),e(a,Ie),e(a,Pe),e(Pe,je),e(a,ze),se(Y,a,null),me=!0},p:be,i(re){me||(U(Y.$$.fragment,re),me=!0)},o(re){j(Y.$$.fragment,re),me=!1},d(re){re&&i(t),le(Y)}}}class Qr extends ne{constructor(t){super(),ie(this,t,null,Jr,oe,{})}}function Zr(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I,g,k;return g=new ut({props:{link:"TRIMCROP"}}),{c(){t=o("div"),a=o("div"),r=o("img"),u=x(),n=o("div"),h=o("p"),p=m(`Made this because sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software.`),f=x(),v=o("p"),N=m("Used QML and JS to create the interface (which is basically a media player + a few overlays) and C++ to plug it up to ffmpeg."),$=x(),T=o("p"),y=m("The border on the crop tool is a bit janky, but I find myself using it a decent amount."),P=x(),w=o("div"),M=o("p"),D=m("[Demoing on a video I took of Jojo having a bad dream >.<]"),A=x(),G=o("p"),R=m("Written with Qt6 & ffmpeg."),I=x(),ae(g.$$.fragment),this.h()},l(b){t=c(b,"DIV",{class:!0});var V=d(t);a=c(V,"DIV",{class:!0});var L=d(a);r=c(L,"IMG",{src:!0,alt:!0,class:!0}),u=S(L),n=c(L,"DIV",{class:!0});var C=d(n);h=c(C,"P",{});var O=d(h);p=_(O,`Made this because sometimes I want a quick way to trim and crop videos on my PC without\r
                opening full-on editing software.`),O.forEach(i),f=S(C),v=c(C,"P",{});var H=d(v);N=_(H,"Used QML and JS to create the interface (which is basically a media player + a few overlays) and C++ to plug it up to ffmpeg."),H.forEach(i),$=S(C),T=c(C,"P",{});var q=d(T);y=_(q,"The border on the crop tool is a bit janky, but I find myself using it a decent amount."),q.forEach(i),C.forEach(i),L.forEach(i),P=S(V),w=c(V,"DIV",{class:!0,style:!0});var K=d(w);M=c(K,"P",{class:!0,style:!0});var z=d(M);D=_(z,"[Demoing on a video I took of Jojo having a bad dream >.<]"),z.forEach(i),A=S(K),G=c(K,"P",{});var ee=d(G);R=_(ee,"Written with Qt6 & ffmpeg."),ee.forEach(i),I=S(K),fe(g.$$.fragment,K),K.forEach(i),V.forEach(i),this.h()},h(){Ee(r.src,s="/img/trimcrop.gif")||l(r,"src",s),l(r,"alt","crop interface"),l(r,"class","svelte-1lawn3q"),l(n,"class","txt svelte-1lawn3q"),l(a,"class","trimcrop svelte-1lawn3q"),l(M,"class","caption"),Me(M,"width","100%"),l(w,"class","desc"),Me(w,"width","100%"),l(t,"class","desc-wrapper")},m(b,V){W(b,t,V),e(t,a),e(a,r),e(a,u),e(a,n),e(n,h),e(h,p),e(n,f),e(n,v),e(v,N),e(n,$),e(n,T),e(T,y),e(t,P),e(t,w),e(w,M),e(M,D),e(w,A),e(w,G),e(G,R),e(w,I),se(g,w,null),k=!0},p:be,i(b){k||(U(g.$$.fragment,b),k=!0)},o(b){j(g.$$.fragment,b),k=!1},d(b){b&&i(t),le(g)}}}class ea extends ne{constructor(t){super(),ie(this,t,null,Zr,oe,{})}}function ta(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I,g;return I=new ut({props:{link:"stabilizer"}}),{c(){t=o("div"),a=o("img"),s=x(),u=o("p"),n=m("[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),h=x(),p=o("div"),f=o("p"),v=m(`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),N=o("a"),$=m("this"),T=m(`. \r
        `),y=o("p"),P=m(`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),w=o("small"),M=m("In the name of consistent formatting, fake link to 404."),D=x(),A=o("p"),G=m("Written in Python using OpenCV."),R=x(),ae(I.$$.fragment),this.h()},l(k){t=c(k,"DIV",{class:!0});var b=d(t);a=c(b,"IMG",{style:!0,src:!0,alt:!0}),s=S(b),u=c(b,"P",{class:!0});var V=d(u);n=_(V,"[Composite of the sequence prior to running the script(top and bottom), overlayed with a strip of its output(center)]."),V.forEach(i),h=S(b),p=c(b,"DIV",{class:!0});var L=d(p);f=c(L,"P",{});var C=d(f);v=_(C,`Wanted to automate the process of aligning a sequence of pictures I took without a tripod. \r
            The goal was to prep the shots for a moving-picture type effect kinda like `),N=c(C,"A",{href:!0,target:!0});var O=d(N);$=_(O,"this"),O.forEach(i),T=_(C,`. \r
        `),C.forEach(i),y=c(L,"P",{});var H=d(y);P=_(H,`I applied some preprocessing to normalize colors & sharpen edges, looped over the sequence to \r
            identify and track feature points, and applied transform matricies(and a little crop) to compensate for \r
            displacement. Unfortunately, I lost the sc :( `),w=c(H,"SMALL",{});var q=d(w);M=_(q,"In the name of consistent formatting, fake link to 404."),q.forEach(i),H.forEach(i),D=S(L),A=c(L,"P",{});var K=d(A);G=_(K,"Written in Python using OpenCV."),K.forEach(i),R=S(L),fe(I.$$.fragment,L),L.forEach(i),b.forEach(i),this.h()},h(){Me(a,"width","50%"),Ee(a.src,r="/img/stabilizer.gif")||l(a,"src",r),l(a,"alt","before_after_composite"),l(u,"class","caption"),l(N,"href","https://www.storyzapp.com/"),l(N,"target","_blank"),l(p,"class","desc"),l(t,"class","desc-wrapper")},m(k,b){W(k,t,b),e(t,a),e(t,s),e(t,u),e(u,n),e(t,h),e(t,p),e(p,f),e(f,v),e(f,N),e(N,$),e(f,T),e(p,y),e(y,P),e(y,w),e(w,M),e(p,D),e(p,A),e(A,G),e(p,R),se(I,p,null),g=!0},p:be,i(k){g||(U(I.$$.fragment,k),g=!0)},o(k){j(I.$$.fragment,k),g=!1},d(k){k&&i(t),le(I)}}}class ra extends ne{constructor(t){super(),ie(this,t,null,ta,oe,{})}}function aa(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I,g;return I=new ut({props:{link:"MiscGraphics/tree/main/Rendering"}}),{c(){t=o("div"),a=o("div"),r=o("img"),u=x(),n=o("img"),p=x(),f=o("p"),v=m("[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),N=x(),$=o("div"),T=o("p"),y=m(`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),P=x(),w=o("p"),M=m("Written in C++ "),D=o("span"),A=m("—"),G=m(" Uses Eigen.h for a few matrix ops."),R=x(),ae(I.$$.fragment),this.h()},l(k){t=c(k,"DIV",{class:!0});var b=d(t);a=c(b,"DIV",{style:!0});var V=d(a);r=c(V,"IMG",{style:!0,src:!0,alt:!0}),u=S(V),n=c(V,"IMG",{style:!0,src:!0,alt:!0}),V.forEach(i),p=S(b),f=c(b,"P",{class:!0});var L=d(f);v=_(L,"[Left: ray tracer render of fractal balls, Right: rasterizer render of Utah teapot]"),L.forEach(i),N=S(b),$=c(b,"DIV",{class:!0});var C=d($);T=c(C,"P",{});var O=d(T);y=_(O,`Renderers made for a computer graphics course. I'd like to re-do these one day, \r
            implement shadows for the rasterizer, optimize the ray tracer a bit, and maybe get some real time stuff going.`),O.forEach(i),P=S(C),w=c(C,"P",{});var H=d(w);M=_(H,"Written in C++ "),D=c(H,"SPAN",{});var q=d(D);A=_(q,"—"),q.forEach(i),G=_(H," Uses Eigen.h for a few matrix ops."),H.forEach(i),R=S(C),fe(I.$$.fragment,C),C.forEach(i),b.forEach(i),this.h()},h(){Me(r,"width","45%"),Ee(r.src,s="/img/ray.png")||l(r,"src",s),l(r,"alt","ray traced balls"),Me(n,"width","45%"),Ee(n.src,h="/img/raster.png")||l(n,"src",h),l(n,"alt","rasterizer output Utah teapot"),Me(a,"display","flex"),Me(a,"justify-content","space-evenly"),l(f,"class","caption"),l($,"class","desc"),l(t,"class","desc-wrapper")},m(k,b){W(k,t,b),e(t,a),e(a,r),e(a,u),e(a,n),e(t,p),e(t,f),e(f,v),e(t,N),e(t,$),e($,T),e(T,y),e($,P),e($,w),e(w,M),e(w,D),e(D,A),e(w,G),e($,R),se(I,$,null),g=!0},p:be,i(k){g||(U(I.$$.fragment,k),g=!0)},o(k){j(I.$$.fragment,k),g=!1},d(k){k&&i(t),le(I)}}}class sa extends ne{constructor(t){super(),ie(this,t,null,aa,oe,{})}}function la(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M,D,A,G,R,I;return R=new ut({props:{link:"seam-carving"}}),{c(){t=o("div"),a=o("img"),s=x(),u=o("p"),n=m("[Gif of output at each step: red seam is removed]"),h=x(),p=o("div"),f=o("p"),v=m("This was another project for the computer graphics course."),N=x(),$=o("p"),T=m(`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),y=x(),P=o("p"),w=m("Written in C++ "),M=o("span"),D=m("—"),A=m(" uses CImg.h for the masking tool."),G=x(),ae(R.$$.fragment),this.h()},l(g){t=c(g,"DIV",{class:!0});var k=d(t);a=c(k,"IMG",{src:!0,alt:!0}),s=S(k),u=c(k,"P",{class:!0});var b=d(u);n=_(b,"[Gif of output at each step: red seam is removed]"),b.forEach(i),h=S(k),p=c(k,"DIV",{class:!0});var V=d(p);f=c(V,"P",{});var L=d(f);v=_(L,"This was another project for the computer graphics course."),L.forEach(i),N=S(V),$=c(V,"P",{});var C=d($);T=_(C,`I came back to this post-semester and added the LoG convolution to improve seam chains and\r
        added a masking tool for custom targeting.`),C.forEach(i),y=S(V),P=c(V,"P",{});var O=d(P);w=_(O,"Written in C++ "),M=c(O,"SPAN",{});var H=d(M);D=_(H,"—"),H.forEach(i),A=_(O," uses CImg.h for the masking tool."),O.forEach(i),G=S(V),fe(R.$$.fragment,V),V.forEach(i),k.forEach(i),this.h()},h(){Ee(a.src,r="/img/seam_carve.gif")||l(a,"src",r),l(a,"alt","crop interface"),l(u,"class","caption"),l(p,"class","desc"),l(t,"class","desc-wrapper")},m(g,k){W(g,t,k),e(t,a),e(t,s),e(t,u),e(u,n),e(t,h),e(t,p),e(p,f),e(f,v),e(p,N),e(p,$),e($,T),e(p,y),e(p,P),e(P,w),e(P,M),e(M,D),e(P,A),e(p,G),se(R,p,null),I=!0},p:be,i(g){I||(U(R.$$.fragment,g),I=!0)},o(g){j(R.$$.fragment,g),I=!1},d(g){g&&i(t),le(R)}}}class na extends ne{constructor(t){super(),ie(this,t,null,la,oe,{})}}function kr(E,t,a){const r=E.slice();return r[1]=t[a],r}function $r(E){let t,a,r;const s=[E[1]];let u={};for(let n=0;n<s.length;n+=1)u=Tr(u,s[n]);return a=new Fr({props:u}),{c(){t=o("div"),ae(a.$$.fragment)},l(n){t=c(n,"DIV",{});var h=d(t);fe(a.$$.fragment,h),h.forEach(i)},m(n,h){W(n,t,h),se(a,t,null),r=!0},p(n,h){const p=h&1?Mr(s,[Dr(n[1])]):{};a.$set(p)},i(n){r||(U(a.$$.fragment,n),r=!0)},o(n){j(a.$$.fragment,n),r=!1},d(n){n&&i(t),le(a)}}}function ia(E){let t,a,r=E[0],s=[];for(let n=0;n<r.length;n+=1)s[n]=$r(kr(E,r,n));const u=n=>j(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();t=$e()},l(n){for(let h=0;h<s.length;h+=1)s[h].l(n);t=$e()},m(n,h){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(n,h);W(n,t,h),a=!0},p(n,[h]){if(h&1){r=n[0];let p;for(p=0;p<r.length;p+=1){const f=kr(n,r,p);s[p]?(s[p].p(f,h),U(s[p],1)):(s[p]=$r(f),s[p].c(),U(s[p],1),s[p].m(t.parentNode,t))}for(Fe(),p=r.length;p<s.length;p+=1)u(p);Xe()}},i(n){if(!a){for(let h=0;h<r.length;h+=1)U(s[h]);a=!0}},o(n){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)j(s[h]);a=!1},d(n){Sr(s,n),n&&i(t)}}}function oa(E){return[[{title:"Drug generator",subtitle:"Character-level RNN",date:"Apr 2023",component:Qr},{title:"TRIMCROP",subtitle:"Trim and crop video",date:"Jan 2023",component:ea},{title:"Gif stabilization",subtitle:"Program to stabilize gifs",date:"Jul 2022",component:ra},{title:"Seam Carving",subtitle:"Content-aware image resizing",date:"Jul 2021",component:na},{title:"Static Renderers",subtitle:"Raytracer and rasterizer",date:"Jun 2021",component:sa}]]}class ca extends ne{constructor(t){super(),ie(this,t,oa,ia,oe,{})}}function wr(E){let t,a,r,s,u,n,h,p,f,v,N,$,T,y,P,w,M;return s=new Vr({}),h=new Kr({}),$=new Ur({}),P=new ca({}),{c(){t=o("div"),a=o("div"),r=o("div"),ae(s.$$.fragment),u=x(),n=o("div"),ae(h.$$.fragment),f=x(),v=o("div"),N=o("div"),ae($.$$.fragment),T=x(),y=o("div"),ae(P.$$.fragment),this.h()},l(D){t=c(D,"DIV",{id:!0,class:!0});var A=d(t);a=c(A,"DIV",{id:!0,class:!0});var G=d(a);r=c(G,"DIV",{id:!0,class:!0});var R=d(r);fe(s.$$.fragment,R),R.forEach(i),u=S(G),n=c(G,"DIV",{id:!0,class:!0});var I=d(n);fe(h.$$.fragment,I),I.forEach(i),G.forEach(i),f=S(A),v=c(A,"DIV",{id:!0,class:!0});var g=d(v);N=c(g,"DIV",{id:!0,class:!0});var k=d(N);fe($.$$.fragment,k),k.forEach(i),T=S(g),y=c(g,"DIV",{id:!0,class:!0});var b=d(y);fe(P.$$.fragment,b),b.forEach(i),g.forEach(i),A.forEach(i),this.h()},h(){l(r,"id","about-text"),l(r,"class","svelte-18dtzke"),l(n,"id","about-card"),l(n,"class","svelte-18dtzke"),l(a,"id","about-section"),l(a,"class","svelte-18dtzke"),l(N,"id","projects-text"),l(N,"class","svelte-18dtzke"),l(y,"id","projects-content"),l(y,"class","svelte-18dtzke"),l(v,"id","project-section"),l(v,"class","svelte-18dtzke"),l(t,"id","content-area"),l(t,"class","svelte-18dtzke")},m(D,A){W(D,t,A),e(t,a),e(a,r),se(s,r,null),e(a,u),e(a,n),se(h,n,null),e(t,f),e(t,v),e(v,N),se($,N,null),e(v,T),e(v,y),se(P,y,null),M=!0},i(D){M||(U(s.$$.fragment,D),U(h.$$.fragment,D),ge(()=>{M&&(p||(p=B(n,pe,{y:-500,duration:2e3,delay:1500},!0)),p.run(1))}),U($.$$.fragment,D),U(P.$$.fragment,D),ge(()=>{M&&(w||(w=B(y,pe,{y:500,duration:1500,delay:2400},!0)),w.run(1))}),M=!0)},o(D){j(s.$$.fragment,D),j(h.$$.fragment,D),p||(p=B(n,pe,{y:-500,duration:2e3,delay:1500},!1)),p.run(0),j($.$$.fragment,D),j(P.$$.fragment,D),w||(w=B(y,pe,{y:500,duration:1500,delay:2400},!1)),w.run(0),M=!1},d(D){D&&i(t),le(s),le(h),D&&p&&p.end(),le($),le(P),D&&w&&w.end()}}}function da(E){let t,a,r=E[0]&&wr();return{c(){r&&r.c(),t=$e()},l(s){r&&r.l(s),t=$e()},m(s,u){r&&r.m(s,u),W(s,t,u),a=!0},p(s,[u]){s[0]?r?u&1&&U(r,1):(r=wr(),r.c(),U(r,1),r.m(t.parentNode,t)):r&&(Fe(),j(r,1,1,()=>{r=null}),Xe())},i(s){a||(U(r),a=!0)},o(s){j(r),a=!1},d(s){r&&r.d(s),s&&i(t)}}}function ua(E,t,a){let r=!1;return zt(()=>a(0,r=!0)),[r]}class ha extends ne{constructor(t){super(),ie(this,t,ua,da,oe,{})}}export{ha as component,pa as universal};
