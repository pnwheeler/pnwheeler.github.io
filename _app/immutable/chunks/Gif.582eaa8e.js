import{s as oe,f as C,g as D,h as P,d as w,j as u,r as y,k as z,i as A,u as B,v as H,o as re,p as ae,a as $,c as ee,y as Ee,V as Pe,W as Ie,A as Se,B as Re,C as Ce,D as De,X as Be,P as K,I as j,J,z as Ve,F as X,Y as We,O as Xe}from"./scheduler.8d84c197.js";import{S as ue,i as ce,g as te,t as p,c as se,a as M,b as Me,d as Oe,m as Te,e as Fe}from"./index.5e028736.js";import{c as Ae}from"./utils.27f8e387.js";import{u as Ge}from"./stores.09d83ec6.js";function Ue(s){let t,e;return{c(){t=C("div"),e=C("canvas"),this.h()},l(i){t=D(i,"DIV",{style:!0,class:!0});var l=P(t);e=D(l,"CANVAS",{width:!0,height:!0,class:!0}),P(e).forEach(w),l.forEach(w),this.h()},h(){u(e,"width",s[1]),u(e,"height",s[1]),u(e,"class","svelte-hfkcg"),y(e,"seeking",s[2]),y(e,"fillSpace",s[3]),z(t,"--s",1/s[0]),z(t,"--bg-color",s[4]),u(t,"class","svelte-hfkcg")},m(i,l){A(i,t,l),B(t,e),s[11](e)},p(i,[l]){l&2&&u(e,"width",i[1]),l&2&&u(e,"height",i[1]),l&4&&y(e,"seeking",i[2]),l&8&&y(e,"fillSpace",i[3]),l&1&&z(t,"--s",1/i[0]),l&16&&z(t,"--bg-color",i[4])},i:H,o:H,d(i){i&&w(t),s[11](null)}}}function pe(s,t,e){let i;const l=Math.PI*2;let{percent:a=0}=t,{size:_}=t,{seeking:h}=t,{scaleFactor:n=1}=t,b,r,{use_DPR:S=!0}=t,{use_decimal:g=!0}=t,{fillSpace:d=!1}=t,{bgColor:c="#0004"}=t;const E=_/8,R=_/2,k=(_-E*1.1)/2,N=E*.7,W=_*.25,I=E*.9,f={offsetX:R-W-1.3*E,offsetY:-.5*I,outlineW:E*.05};re(()=>{S?e(0,n=window.devicePixelRatio*2):e(0,n=1),e(5,b.width=Math.floor(_*n),b),e(5,b.height=Math.floor(_*n),b),e(9,r=b.getContext("2d")),r.scale(n,n),r.rotate(Math.PI/2*3),r.translate(-_,0)});const v=m=>{r.save(),r.beginPath(),r.translate(R,R),r.rotate(m),r.roundRect(f.offsetX,f.offsetY,W,I,I),r.fill(),e(9,r.lineWidth=f.outlineW,r),r.stroke(),r.restore()},O=(m,T,V,F,q)=>{r.clearRect(0,0,_,_),r.beginPath(),r.arc(R,R,k,0,l,!0),e(9,r.strokeStyle=V,r),e(9,r.lineWidth=F,r),r.stroke(),r.beginPath(),r.arc(R,R,k,0,q,!1),e(9,r.strokeStyle=T,r),e(9,r.lineCap="round",r),e(9,r.lineWidth=N,r),r.stroke(),m&&(e(9,r.fillStyle=T,r),e(9,r.strokeStyle=T,r),v(q))};function Y(m){ae[m?"unshift":"push"](()=>{b=m,e(5,b)})}return s.$$set=m=>{"percent"in m&&e(6,a=m.percent),"size"in m&&e(1,_=m.size),"seeking"in m&&e(2,h=m.seeking),"scaleFactor"in m&&e(0,n=m.scaleFactor),"use_DPR"in m&&e(7,S=m.use_DPR),"use_decimal"in m&&e(8,g=m.use_decimal),"fillSpace"in m&&e(3,d=m.fillSpace),"bgColor"in m&&e(4,c=m.bgColor)},s.$$.update=()=>{s.$$.dirty&320&&e(10,i=g?a*l:a/100*l),s.$$.dirty&1540&&r&&O(h,"#b8b7b5","#fff4",E,i)},[n,_,h,d,c,b,a,S,g,r,i,Y]}class Ne extends ue{constructor(t){super(),ce(this,t,pe,Ue,oe,{percent:6,size:1,seeking:2,scaleFactor:0,use_DPR:7,use_decimal:8,fillSpace:3,bgColor:4})}}const Ye=s=>({}),le=s=>({});function qe(s){let t,e,i,l,a,_;return{c(){t=C("div"),e=C("video"),i=C("source"),this.h()},l(h){t=D(h,"DIV",{class:!0});var n=P(t);e=D(n,"VIDEO",{style:!0,class:!0});var b=P(e);i=D(b,"SOURCE",{src:!0,type:!0}),b.forEach(w),n.forEach(w),this.h()},h(){K(i.src,l=s[0])||u(i,"src",l),u(i,"type",a="video/"+s[1]+"; "+s[2]),e.autoplay=!0,e.loop=!0,e.playsInline=!0,e.muted=!0,z(e,"--width",s[6]),z(e,"--height",s[7]),u(e,"class","svelte-byasvz"),y(e,"dim",s[13]),u(t,"class",_="pseudo-border "+s[9]+" svelte-byasvz"),y(t,"outline_off",s[16])},m(h,n){A(h,t,n),B(t,e),B(e,i)},p(h,n){n[0]&1&&!K(i.src,l=h[0])&&u(i,"src",l),n[0]&6&&a!==(a="video/"+h[1]+"; "+h[2])&&u(i,"type",a),n[0]&64&&z(e,"--width",h[6]),n[0]&128&&z(e,"--height",h[7]),n[0]&8192&&y(e,"dim",h[13]),n[0]&512&&_!==(_="pseudo-border "+h[9]+" svelte-byasvz")&&u(t,"class",_),n[0]&66048&&y(t,"outline_off",h[16])},i:H,o:H,d(h){h&&w(t)}}}function Le(s){let t,e,i,l,a=`${s[12]}px`,_,h,n,b,r,S,g=!0,d,c,E,R,k=s[22]&&ie(s);function N(f,v){return f[21]?Je:je}let W=N(s),I=W(s);return{c(){t=C("button"),e=C("div"),k&&k.c(),i=$(),l=j("svg"),I.c(),_=$(),h=C("div"),n=C("video"),b=C("source"),this.h()},l(f){t=D(f,"BUTTON",{class:!0});var v=P(t);e=D(v,"DIV",{class:!0});var O=P(e);k&&k.l(O),i=ee(O),l=J(O,"svg",{viewBox:!0,id:!0,width:!0,height:!0,class:!0});var Y=P(l);I.l(Y),Y.forEach(w),O.forEach(w),v.forEach(w),_=ee(f),h=D(f,"DIV",{class:!0});var m=P(h);n=D(m,"VIDEO",{style:!0,class:!0});var T=P(n);b=D(T,"SOURCE",{src:!0,type:!0}),T.forEach(w),m.forEach(w),this.h()},h(){u(l,"viewBox","0 0 100 100"),u(l,"id","logos"),u(l,"width","50"),u(l,"height","50"),u(l,"class","svelte-byasvz"),y(l,"seeking",s[23]),y(l,"hovered",s[22]),u(e,"class","ui-elements pseudo-border svelte-byasvz"),u(t,"class","controls svelte-byasvz"),z(t,"--size",a),z(t,"--controls-bg",s[11]),K(b.src,r=s[0])||u(b,"src",r),u(b,"type",S="video/"+s[1]+"; "+s[2]),n.autoplay=s[3],n.loop=!0,n.playsInline=!0,n.muted=!0,z(n,"--width",s[6]),z(n,"--height",s[7]),u(n,"class","svelte-byasvz"),s[19]===void 0&&Ve(()=>s[36].call(n)),y(n,"dim",s[13]),u(h,"class",d="pseudo-border "+s[9]+" svelte-byasvz"),y(h,"outline_off",s[16])},m(f,v){A(f,t,v),B(t,e),k&&k.m(e,null),B(e,i),B(e,l),I.m(l,null),A(f,_,v),A(f,h,v),B(h,n),B(n,b),s[35](n),c=!0,E||(R=[X(t,"click",s[34]),X(n,"pointerenter",s[27]),X(n,"pointerleave",s[28]),X(n,"pointerdown",s[25]),X(n,"pointermove",s[24]),X(n,"pointerup",s[26]),X(n,"touchstart",We(s[33])),X(n,"durationchange",s[36]),X(n,"play",s[37]),X(n,"pause",s[37])],E=!0)},p(f,v){f[22]?k?(k.p(f,v),v[0]&4194304&&M(k,1)):(k=ie(f),k.c(),M(k,1),k.m(e,i)):k&&(te(),p(k,1,1,()=>{k=null}),se()),W!==(W=N(f))&&(I.d(1),I=W(f),I&&(I.c(),I.m(l,null))),(!c||v[0]&8388608)&&y(l,"seeking",f[23]),(!c||v[0]&4194304)&&y(l,"hovered",f[22]),v[0]&4096&&a!==(a=`${f[12]}px`)&&z(t,"--size",a),v[0]&2048&&z(t,"--controls-bg",f[11]),(!c||v[0]&1&&!K(b.src,r=f[0]))&&u(b,"src",r),(!c||v[0]&6&&S!==(S="video/"+f[1]+"; "+f[2]))&&u(b,"type",S),(!c||v[0]&8)&&(n.autoplay=f[3]),(!c||v[0]&64)&&z(n,"--width",f[6]),(!c||v[0]&128)&&z(n,"--height",f[7]),v[0]&2097152&&g!==(g=f[21])&&n[g?"pause":"play"](),(!c||v[0]&8192)&&y(n,"dim",f[13]),(!c||v[0]&512&&d!==(d="pseudo-border "+f[9]+" svelte-byasvz"))&&u(h,"class",d),(!c||v[0]&66048)&&y(h,"outline_off",f[16])},i(f){c||(M(k),c=!0)},o(f){p(k),c=!1},d(f){f&&(w(t),w(_),w(h)),k&&k.d(),I.d(),s[35](null),E=!1,Xe(R)}}}function ie(s){let t,e;return t=new Ne({props:{size:s[12],percent:s[20],seeking:s[23]}}),{c(){Me(t.$$.fragment)},l(i){Oe(t.$$.fragment,i)},m(i,l){Te(t,i,l),e=!0},p(i,l){const a={};l[0]&4096&&(a.size=i[12]),l[0]&1048576&&(a.percent=i[20]),l[0]&8388608&&(a.seeking=i[23]),t.$set(a)},i(i){e||(M(t.$$.fragment,i),e=!0)},o(i){p(t.$$.fragment,i),e=!1},d(i){Fe(t,i)}}}function je(s){let t,e,i;return{c(){t=j("g"),e=j("rect"),i=j("rect"),this.h()},l(l){t=J(l,"g",{id:!0,class:!0});var a=P(t);e=J(a,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),P(e).forEach(w),i=J(a,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),P(i).forEach(w),a.forEach(w),this.h()},h(){u(e,"x","24"),u(e,"y","20"),u(e,"width","20"),u(e,"height","60"),u(e,"rx","5"),u(i,"x","56"),u(i,"y","20"),u(i,"width","20"),u(i,"height","60"),u(i,"rx","5"),u(t,"id","pause"),u(t,"class","svelte-byasvz")},m(l,a){A(l,t,a),B(t,e),B(t,i)},d(l){l&&w(t)}}}function Je(s){let t,e;return{c(){t=j("g"),e=j("path"),this.h()},l(i){t=J(i,"g",{id:!0,class:!0});var l=P(t);e=J(l,"path",{d:!0}),P(e).forEach(w),l.forEach(w),this.h()},h(){u(e,"d","M 34 25 v 50L 76 50 Z"),u(t,"id","play"),u(t,"class","svelte-byasvz")},m(i,l){A(i,t,l),B(t,e)},d(i){i&&w(t)}}}function ne(s){let t,e;const i=s[32].caption,l=Se(i,s,s[31],le);return{c(){t=C("figcaption"),l&&l.c(),this.h()},l(a){t=D(a,"FIGCAPTION",{class:!0});var _=P(t);l&&l.l(_),_.forEach(w),this.h()},h(){u(t,"class","caption svelte-byasvz"),y(t,"cap_center",s[5])},m(a,_){A(a,t,_),l&&l.m(t,null),e=!0},p(a,_){l&&l.p&&(!e||_[1]&1)&&Re(l,i,a,a[31],e?De(i,a[31],_,Ye):Ce(a[31]),le),(!e||_[0]&32)&&y(t,"cap_center",a[5])},i(a){e||(M(l,a),e=!0)},o(a){p(l,a),e=!1},d(a){a&&w(t),l&&l.d(a)}}}function Ze(s){let t,e,i,l,a=`${100-s[13]}%`,_,h=`${s[14]}rem`,n;const b=[Le,qe],r=[];function S(d,c){return d[4]?0:1}i=S(s),l=r[i]=b[i](s);let g=s[29].caption&&ne(s);return{c(){t=C("figure"),e=C("div"),l.c(),_=$(),g&&g.c(),this.h()},l(d){t=D(d,"FIGURE",{class:!0});var c=P(t);e=D(c,"DIV",{class:!0});var E=P(e);l.l(E),E.forEach(w),_=ee(c),g&&g.l(c),c.forEach(w),this.h()},h(){u(e,"class","wrapper radius svelte-byasvz"),z(e,"--dim",a),u(t,"class","svelte-byasvz"),y(t,"card",s[8]),y(t,"inset_shadow",s[17]),y(t,"hovered",s[22]),z(t,"--bg",s[10]),z(t,"--pad",h),z(t,"--inner-radius",s[15])},m(d,c){A(d,t,c),B(t,e),r[i].m(e,null),B(t,_),g&&g.m(t,null),n=!0},p(d,c){let E=i;i=S(d),i===E?r[i].p(d,c):(te(),p(r[E],1,1,()=>{r[E]=null}),se(),l=r[i],l?l.p(d,c):(l=r[i]=b[i](d),l.c()),M(l,1),l.m(e,null)),c[0]&8192&&a!==(a=`${100-d[13]}%`)&&z(e,"--dim",a),d[29].caption?g?(g.p(d,c),c[0]&536870912&&M(g,1)):(g=ne(d),g.c(),M(g,1),g.m(t,null)):g&&(te(),p(g,1,1,()=>{g=null}),se()),(!n||c[0]&256)&&y(t,"card",d[8]),(!n||c[0]&131072)&&y(t,"inset_shadow",d[17]),(!n||c[0]&4194304)&&y(t,"hovered",d[22]),c[0]&1024&&z(t,"--bg",d[10]),c[0]&16384&&h!==(h=`${d[14]}rem`)&&z(t,"--pad",h),c[0]&32768&&z(t,"--inner-radius",d[15])},i(d){n||(M(l),M(g),n=!0)},o(d){p(l),p(g),n=!1},d(d){d&&w(t),r[i].d(),g&&g.d()}}}function He(s,t,e){let i;Ee(s,Ge,o=>e(40,i=o));let{$$slots:l={},$$scope:a}=t;const _=Pe(l),h=window.matchMedia("(prefers-reduced-motion: reduce)").matches==!0;let{src:n=""}=t,{ext:b=n.split(".")[1]}=t,{codecs:r="hevc1"}=t,{t:S="#t=0.01"}=t,{autoplay:g=!0}=t,{controls:d=!0}=t,{cap_center:c=!0}=t,{width:E="100%"}=t,{height:R="auto"}=t,{card:k=!1}=t,{radius_type:N="all"}=t,{background:W="var(--grey-0)"}=t,{controlsBg:I="#0002"}=t,{controlsSize:f=32}=t,{dim:v=0}=t,{pad:O=0}=t,{inner_radius:Y="var(--space-3xs)"}=t,{outline_off:m=!1}=t,{inset_shadow:T=!1}=t,V,F,q,G,Q=!1,Z=!1;const L={paused_before:!1,initialPosition:0,initialProgress:0,width:0};let U;re(()=>{if(i==!0){let o=n.split(".")[0]+".webm";e(0,n=o),e(1,b="webm"),e(2,r="vp9")}U=void 0,h&&e(3,g=!1),g||(e(21,G=!0),e(0,n=n+S))}),Ie(()=>{U&&(clearInterval(U),U=void 0)});const fe=o=>{if(!F||o.type!=="touchmove"&&!(o.buttons&1))return;o.target.setPointerCapture(o.pointerId);const x=o.type==="touchmove"?o.touches[0].clientX:o.clientX,{width:ze}=V.getBoundingClientRect();e(20,q=Ae(L.initialProgress+(x-L.initialPosition)/ze,.01,.99)),e(18,V.currentTime=F*q,V)},_e=o=>{V.pause();const x=o.type==="touchmove"?o.touches[0].clientX:o.clientX;e(23,Z=!0),L.paused_before=!!G,L.initialPosition=x,L.initialProgress=V.currentTime/F},he=o=>{e(23,Z=!1),L.paused_before||V.play()},de=o=>{e(22,Q=!0),(!Z||!G)&&(U=setInterval(me,10))},ge=o=>{e(22,Q=!1),U&&clearInterval(U),U=void 0};function me(){e(20,q=V.currentTime/F)}function be(o){Be.call(this,s,o)}const ve=()=>e(21,G=!G);function ke(o){ae[o?"unshift":"push"](()=>{V=o,e(18,V)})}function we(){F=this.duration,e(19,F)}function ye(){G=this.paused,e(21,G)}return s.$$set=o=>{"src"in o&&e(0,n=o.src),"ext"in o&&e(1,b=o.ext),"codecs"in o&&e(2,r=o.codecs),"t"in o&&e(30,S=o.t),"autoplay"in o&&e(3,g=o.autoplay),"controls"in o&&e(4,d=o.controls),"cap_center"in o&&e(5,c=o.cap_center),"width"in o&&e(6,E=o.width),"height"in o&&e(7,R=o.height),"card"in o&&e(8,k=o.card),"radius_type"in o&&e(9,N=o.radius_type),"background"in o&&e(10,W=o.background),"controlsBg"in o&&e(11,I=o.controlsBg),"controlsSize"in o&&e(12,f=o.controlsSize),"dim"in o&&e(13,v=o.dim),"pad"in o&&e(14,O=o.pad),"inner_radius"in o&&e(15,Y=o.inner_radius),"outline_off"in o&&e(16,m=o.outline_off),"inset_shadow"in o&&e(17,T=o.inset_shadow),"$$scope"in o&&e(31,a=o.$$scope)},[n,b,r,g,d,c,E,R,k,N,W,I,f,v,O,Y,m,T,V,F,q,G,Q,Z,fe,_e,he,de,ge,_,S,a,l,be,ve,ke,we,ye]}class et extends ue{constructor(t){super(),ce(this,t,He,Ze,oe,{src:0,ext:1,codecs:2,t:30,autoplay:3,controls:4,cap_center:5,width:6,height:7,card:8,radius_type:9,background:10,controlsBg:11,controlsSize:12,dim:13,pad:14,inner_radius:15,outline_off:16,inset_shadow:17},null,[-1,-1])}}export{et as G,Ne as R};