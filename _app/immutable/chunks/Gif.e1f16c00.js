import{s as le,f as C,g as R,h as I,d as k,j as f,k as y,r as E,i as V,u as D,v as j,o as ne,p as oe,a as Q,c as x,X as ye,Y as Ee,A as pe,B as Ie,C as Pe,D as Se,Z as ze,P as J,I as Y,J as q,z as Ce,F as X,_ as Re,O as De}from"./scheduler.005f6bd5.js";import{S as re,i as ae,g as $,t as F,c as ee,a as M,b as Be,d as Xe,m as Me,e as Oe}from"./index.e39f31b9.js";function Te(s){let t,e;return{c(){t=C("div"),e=C("canvas"),this.h()},l(i){t=R(i,"DIV",{class:!0});var l=I(t);e=R(l,"CANVAS",{width:!0,height:!0,style:!0,class:!0}),I(e).forEach(k),l.forEach(k),this.h()},h(){f(e,"width",s[1]),f(e,"height",s[1]),y(e,"--s",1/s[0]),f(e,"class","svelte-1gwyywp"),E(e,"seeking",s[2]),f(t,"class","svelte-1gwyywp")},m(i,l){V(i,t,l),D(t,e),s[7](e)},p(i,[l]){l&2&&f(e,"width",i[1]),l&2&&f(e,"height",i[1]),l&1&&y(e,"--s",1/i[0]),l&4&&E(e,"seeking",i[2])},i:j,o:j,d(i){i&&k(t),s[7](null)}}}function Ve(s,t,e){let i;const l=Math.PI*2;let{percent:u=0}=t,{size:h}=t,{seeking:_}=t,{scaleFactor:o=1}=t,d,a;const w=h/8,p=h/2,g=(h-w*1.1)/2,c=w*.7,m=h*.25,P=w*.9,v={offsetX:p-m-1.3*w,offsetY:-.5*P,outlineW:w*.05};ne(()=>{e(0,o=window.devicePixelRatio*2),e(3,d.width=Math.floor(h*o),d),e(3,d.height=Math.floor(h*o),d),e(5,a=d.getContext("2d")),a.scale(o,o),a.rotate(Math.PI/2*3),a.translate(-h,0)});const G=r=>{a.save(),a.beginPath(),a.translate(p,p),a.rotate(r),a.roundRect(v.offsetX,v.offsetY,m,P,P),a.fill(),e(5,a.lineWidth=v.outlineW,a),a.stroke(),a.restore()},O=(r,b,T,U,S)=>{a.clearRect(0,0,h,h),a.beginPath(),a.arc(p,p,g,0,l,!0),e(5,a.strokeStyle=T,a),e(5,a.lineWidth=U,a),a.stroke(),a.beginPath(),a.arc(p,p,g,0,S,!1),e(5,a.strokeStyle=b,a),e(5,a.lineCap="round",a),e(5,a.lineWidth=c,a),a.stroke(),r&&(e(5,a.fillStyle=b,a),e(5,a.strokeStyle=b,a),G(S))};function z(r){oe[r?"unshift":"push"](()=>{d=r,e(3,d)})}return s.$$set=r=>{"percent"in r&&e(4,u=r.percent),"size"in r&&e(1,h=r.size),"seeking"in r&&e(2,_=r.seeking),"scaleFactor"in r&&e(0,o=r.scaleFactor)},s.$$.update=()=>{s.$$.dirty&16&&e(6,i=u*l),s.$$.dirty&100&&a&&O(_,"#fffa","#fff4",w,i)},[o,h,_,d,u,a,i,z]}class We extends re{constructor(t){super(),ae(this,t,Ve,Te,le,{percent:4,size:1,seeking:2,scaleFactor:0})}}const Ae=(s,t,e)=>s<t?t:s>e?e:s;const Fe=s=>({}),te=s=>({});function Ge(s){let t,e,i,l,u,h;return{c(){t=C("div"),e=C("video"),i=C("source"),this.h()},l(_){t=R(_,"DIV",{class:!0});var o=I(t);e=R(o,"VIDEO",{style:!0,class:!0});var d=I(e);i=R(d,"SOURCE",{src:!0,type:!0}),d.forEach(k),o.forEach(k),this.h()},h(){J(i.src,l=s[0])||f(i,"src",l),f(i,"type",u="video/"+s[2]+"; "+s[3]),e.autoplay=!0,e.loop=!0,e.playsInline=!0,e.muted=!0,y(e,"--width",s[6]),y(e,"--height",s[7]),f(e,"class","svelte-1h3b8xb"),E(e,"dim",s[13]),f(t,"class",h="pseudo-border "+s[9]+" svelte-1h3b8xb"),E(t,"outline_off",s[16])},m(_,o){V(_,t,o),D(t,e),D(e,i)},p(_,o){o[0]&1&&!J(i.src,l=_[0])&&f(i,"src",l),o[0]&12&&u!==(u="video/"+_[2]+"; "+_[3])&&f(i,"type",u),o[0]&64&&y(e,"--width",_[6]),o[0]&128&&y(e,"--height",_[7]),o[0]&8192&&E(e,"dim",_[13]),o[0]&512&&h!==(h="pseudo-border "+_[9]+" svelte-1h3b8xb")&&f(t,"class",h),o[0]&66048&&E(t,"outline_off",_[16])},i:j,o:j,d(_){_&&k(t)}}}function Ue(s){let t,e,i,l,u=`${s[12]}px`,h,_,o,d,a,w,p=!0,g,c,m,P,v=s[22]&&se(s);function G(r,b){return r[21]?Ye:Ne}let O=G(s),z=O(s);return{c(){t=C("button"),e=C("div"),v&&v.c(),i=Q(),l=Y("svg"),z.c(),h=Q(),_=C("div"),o=C("video"),d=C("source"),this.h()},l(r){t=R(r,"BUTTON",{class:!0});var b=I(t);e=R(b,"DIV",{class:!0});var T=I(e);v&&v.l(T),i=x(T),l=q(T,"svg",{viewBox:!0,id:!0,class:!0});var U=I(l);z.l(U),U.forEach(k),T.forEach(k),b.forEach(k),h=x(r),_=R(r,"DIV",{class:!0});var S=I(_);o=R(S,"VIDEO",{style:!0,class:!0});var B=I(o);d=R(B,"SOURCE",{src:!0,type:!0}),B.forEach(k),S.forEach(k),this.h()},h(){f(l,"viewBox","0 0 10 10"),f(l,"id","logos"),f(l,"class","svelte-1h3b8xb"),E(l,"seeking",s[23]),E(l,"hovered",s[22]),f(e,"class","ui-elements pseudo-border svelte-1h3b8xb"),f(t,"class","controls svelte-1h3b8xb"),y(t,"--size",u),y(t,"--controls-bg",s[11]),J(d.src,a=s[0])||f(d,"src",a),f(d,"type",w="video/"+s[2]+"; "+s[3]),o.autoplay=s[1],o.loop=!0,o.playsInline=!0,o.muted=!0,y(o,"--width",s[6]),y(o,"--height",s[7]),f(o,"class","svelte-1h3b8xb"),s[19]===void 0&&Ce(()=>s[35].call(o)),E(o,"dim",s[13]),f(_,"class",g="pseudo-border "+s[9]+" svelte-1h3b8xb"),E(_,"outline_off",s[16])},m(r,b){V(r,t,b),D(t,e),v&&v.m(e,null),D(e,i),D(e,l),z.m(l,null),V(r,h,b),V(r,_,b),D(_,o),D(o,d),s[34](o),c=!0,m||(P=[X(t,"click",s[33]),X(o,"pointerenter",s[27]),X(o,"pointerleave",s[28]),X(o,"pointerdown",s[25]),X(o,"pointermove",s[24]),X(o,"pointerup",s[26]),X(o,"touchstart",Re(s[32])),X(o,"durationchange",s[35]),X(o,"play",s[36]),X(o,"pause",s[36])],m=!0)},p(r,b){r[22]?v?(v.p(r,b),b[0]&4194304&&M(v,1)):(v=se(r),v.c(),M(v,1),v.m(e,i)):v&&($(),F(v,1,1,()=>{v=null}),ee()),O!==(O=G(r))&&(z.d(1),z=O(r),z&&(z.c(),z.m(l,null))),(!c||b[0]&8388608)&&E(l,"seeking",r[23]),(!c||b[0]&4194304)&&E(l,"hovered",r[22]),b[0]&4096&&u!==(u=`${r[12]}px`)&&y(t,"--size",u),b[0]&2048&&y(t,"--controls-bg",r[11]),(!c||b[0]&1&&!J(d.src,a=r[0]))&&f(d,"src",a),(!c||b[0]&12&&w!==(w="video/"+r[2]+"; "+r[3]))&&f(d,"type",w),(!c||b[0]&2)&&(o.autoplay=r[1]),(!c||b[0]&64)&&y(o,"--width",r[6]),(!c||b[0]&128)&&y(o,"--height",r[7]),b[0]&2097152&&p!==(p=r[21])&&o[p?"pause":"play"](),(!c||b[0]&8192)&&E(o,"dim",r[13]),(!c||b[0]&512&&g!==(g="pseudo-border "+r[9]+" svelte-1h3b8xb"))&&f(_,"class",g),(!c||b[0]&66048)&&E(_,"outline_off",r[16])},i(r){c||(M(v),c=!0)},o(r){F(v),c=!1},d(r){r&&(k(t),k(h),k(_)),v&&v.d(),z.d(),s[34](null),m=!1,De(P)}}}function se(s){let t,e;return t=new We({props:{size:s[12],percent:s[20],seeking:s[23]}}),{c(){Be(t.$$.fragment)},l(i){Xe(t.$$.fragment,i)},m(i,l){Me(t,i,l),e=!0},p(i,l){const u={};l[0]&4096&&(u.size=i[12]),l[0]&1048576&&(u.percent=i[20]),l[0]&8388608&&(u.seeking=i[23]),t.$set(u)},i(i){e||(M(t.$$.fragment,i),e=!0)},o(i){F(t.$$.fragment,i),e=!1},d(i){Oe(t,i)}}}function Ne(s){let t,e,i;return{c(){t=Y("g"),e=Y("rect"),i=Y("rect"),this.h()},l(l){t=q(l,"g",{id:!0,class:!0});var u=I(t);e=q(u,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),I(e).forEach(k),i=q(u,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),I(i).forEach(k),u.forEach(k),this.h()},h(){f(e,"x","2.5"),f(e,"y","2"),f(e,"width","2"),f(e,"height","6"),f(e,"rx","0.5"),f(i,"x","5.5"),f(i,"y","2"),f(i,"width","2"),f(i,"height","6"),f(i,"rx","0.5"),f(t,"id","pause"),f(t,"class","svelte-1h3b8xb")},m(l,u){V(l,t,u),D(t,e),D(t,i)},d(l){l&&k(t)}}}function Ye(s){let t,e;return{c(){t=Y("g"),e=Y("path"),this.h()},l(i){t=q(i,"g",{id:!0,class:!0});var l=I(t);e=q(l,"path",{d:!0}),I(e).forEach(k),l.forEach(k),this.h()},h(){f(e,"d","M 3.5 2.5 v 5L 7.5 5 Z"),f(t,"id","play"),f(t,"class","svelte-1h3b8xb")},m(i,l){V(i,t,l),D(t,e)},d(i){i&&k(t)}}}function ie(s){let t,e;const i=s[31].caption,l=pe(i,s,s[30],te);return{c(){t=C("figcaption"),l&&l.c(),this.h()},l(u){t=R(u,"FIGCAPTION",{class:!0});var h=I(t);l&&l.l(h),h.forEach(k),this.h()},h(){f(t,"class","caption svelte-1h3b8xb"),E(t,"cap_center",s[5])},m(u,h){V(u,t,h),l&&l.m(t,null),e=!0},p(u,h){l&&l.p&&(!e||h[0]&1073741824)&&Ie(l,i,u,u[30],e?Se(i,u[30],h,Fe):Pe(u[30]),te),(!e||h[0]&32)&&E(t,"cap_center",u[5])},i(u){e||(M(l,u),e=!0)},o(u){F(l,u),e=!1},d(u){u&&k(t),l&&l.d(u)}}}function qe(s){let t,e,i,l,u=`${100-s[13]}%`,h,_=`${s[14]}rem`,o=`${s[15]}rem`,d;const a=[Ue,Ge],w=[];function p(c,m){return c[4]?0:1}i=p(s),l=w[i]=a[i](s);let g=s[29].caption&&ie(s);return{c(){t=C("figure"),e=C("div"),l.c(),h=Q(),g&&g.c(),this.h()},l(c){t=R(c,"FIGURE",{class:!0});var m=I(t);e=R(m,"DIV",{class:!0});var P=I(e);l.l(P),P.forEach(k),h=x(m),g&&g.l(m),m.forEach(k),this.h()},h(){f(e,"class","wrapper radius svelte-1h3b8xb"),y(e,"--dim",u),f(t,"class","radius svelte-1h3b8xb"),E(t,"card",s[8]),E(t,"inset_shadow",s[17]),E(t,"hovered",s[22]),y(t,"--bg",s[10]),y(t,"--pad",_),y(t,"--inner-radius",o)},m(c,m){V(c,t,m),D(t,e),w[i].m(e,null),D(t,h),g&&g.m(t,null),d=!0},p(c,m){let P=i;i=p(c),i===P?w[i].p(c,m):($(),F(w[P],1,1,()=>{w[P]=null}),ee(),l=w[i],l?l.p(c,m):(l=w[i]=a[i](c),l.c()),M(l,1),l.m(e,null)),m[0]&8192&&u!==(u=`${100-c[13]}%`)&&y(e,"--dim",u),c[29].caption?g?(g.p(c,m),m[0]&536870912&&M(g,1)):(g=ie(c),g.c(),M(g,1),g.m(t,null)):g&&($(),F(g,1,1,()=>{g=null}),ee()),(!d||m[0]&256)&&E(t,"card",c[8]),(!d||m[0]&131072)&&E(t,"inset_shadow",c[17]),(!d||m[0]&4194304)&&E(t,"hovered",c[22]),m[0]&1024&&y(t,"--bg",c[10]),m[0]&16384&&_!==(_=`${c[14]}rem`)&&y(t,"--pad",_),m[0]&32768&&o!==(o=`${c[15]}rem`)&&y(t,"--inner-radius",o)},i(c){d||(M(l),M(g),d=!0)},o(c){F(l),F(g),d=!1},d(c){c&&k(t),w[i].d(),g&&g.d()}}}function Le(s,t,e){let{$$slots:i={},$$scope:l}=t;const u=ye(i),h=window.matchMedia("(prefers-reduced-motion: reduce)").matches==!0;let{src:_=""}=t,{ext:o=_.split(".")[1]}=t,{codecs:d=""}=t,{autoplay:a=!0}=t,{controls:w=!0}=t,{cap_center:p=!0}=t,{width:g="100%"}=t,{height:c="auto"}=t,{card:m=!1}=t,{radius_type:P="all"}=t,{background:v=""}=t,{controlsBg:G="#0002"}=t,{controlsSize:O=32}=t,{dim:z=0}=t,{pad:r=0}=t,{inner_radius:b=.25}=t,{outline_off:T=!1}=t,{inset_shadow:U=!1}=t,S,B,L,W,H=!1,Z=!1;const N={paused_before:!1,initialPosition:0,initialProgress:0,width:0};let A;ne(()=>{A=void 0,h&&e(1,a=!1),a||(e(21,W=!0),e(0,_=_+"#t=0.01"))}),Ee(()=>{A&&(clearInterval(A),A=void 0)});const ue=n=>{if(!B||n.type!=="touchmove"&&!(n.buttons&1))return;n.target.setPointerCapture(n.pointerId);const K=n.type==="touchmove"?n.touches[0].clientX:n.clientX,{width:we}=S.getBoundingClientRect();e(20,L=Ae(N.initialProgress+(K-N.initialPosition)/we,.01,.99)),e(18,S.currentTime=B*L,S)},ce=n=>{S.pause();const K=n.type==="touchmove"?n.touches[0].clientX:n.clientX;e(23,Z=!0),N.paused_before=!!W,N.initialPosition=K,N.initialProgress=S.currentTime/B},fe=n=>{e(23,Z=!1),N.paused_before||S.play()},_e=n=>{e(22,H=!0),(!Z||!W)&&(A=setInterval(de,10))},he=n=>{e(22,H=!1),A&&clearInterval(A),A=void 0};function de(){e(20,L=S.currentTime/B)}function ge(n){ze.call(this,s,n)}const be=()=>e(21,W=!W);function me(n){oe[n?"unshift":"push"](()=>{S=n,e(18,S)})}function ve(){B=this.duration,e(19,B)}function ke(){W=this.paused,e(21,W)}return s.$$set=n=>{"src"in n&&e(0,_=n.src),"ext"in n&&e(2,o=n.ext),"codecs"in n&&e(3,d=n.codecs),"autoplay"in n&&e(1,a=n.autoplay),"controls"in n&&e(4,w=n.controls),"cap_center"in n&&e(5,p=n.cap_center),"width"in n&&e(6,g=n.width),"height"in n&&e(7,c=n.height),"card"in n&&e(8,m=n.card),"radius_type"in n&&e(9,P=n.radius_type),"background"in n&&e(10,v=n.background),"controlsBg"in n&&e(11,G=n.controlsBg),"controlsSize"in n&&e(12,O=n.controlsSize),"dim"in n&&e(13,z=n.dim),"pad"in n&&e(14,r=n.pad),"inner_radius"in n&&e(15,b=n.inner_radius),"outline_off"in n&&e(16,T=n.outline_off),"inset_shadow"in n&&e(17,U=n.inset_shadow),"$$scope"in n&&e(30,l=n.$$scope)},[_,a,o,d,w,p,g,c,m,P,v,G,O,z,r,b,T,U,S,B,L,W,H,Z,ue,ce,fe,_e,he,u,l,i,ge,be,me,ve,ke]}class Je extends re{constructor(t){super(),ae(this,t,Le,qe,le,{src:0,ext:2,codecs:3,autoplay:1,controls:4,cap_center:5,width:6,height:7,card:8,radius_type:9,background:10,controlsBg:11,controlsSize:12,dim:13,pad:14,inner_radius:15,outline_off:16,inset_shadow:17},null,[-1,-1])}}export{Je as G};
