import{s as le,f as C,g as R,h as I,d as k,j as c,k as w,r as E,i as V,u as D,v as Z,o as ne,p as re,a as Q,c as x,X as we,Y as Ee,A as pe,B as Ie,C as Pe,D as Se,Z as ze,P as J,I as j,J as Y,z as Ce,F as X,_ as Re,O as De}from"./scheduler.4a5ee1cf.js";import{S as oe,i as ue,g as $,t as F,c as ee,a as M,b as Be,d as Xe,m as Me,e as Oe}from"./index.6e82b4ad.js";function Te(s){let t,e;return{c(){t=C("div"),e=C("canvas"),this.h()},l(i){t=R(i,"DIV",{class:!0});var l=I(t);e=R(l,"CANVAS",{width:!0,height:!0,style:!0,class:!0}),I(e).forEach(k),l.forEach(k),this.h()},h(){c(e,"width",s[1]),c(e,"height",s[1]),w(e,"--s",1/s[0]),c(e,"class","svelte-w7kjcd"),E(e,"seeking",s[2]),c(t,"class","svelte-w7kjcd")},m(i,l){V(i,t,l),D(t,e),s[7](e)},p(i,[l]){l&2&&c(e,"width",i[1]),l&2&&c(e,"height",i[1]),l&1&&w(e,"--s",1/i[0]),l&4&&E(e,"seeking",i[2])},i:Z,o:Z,d(i){i&&k(t),s[7](null)}}}function Ve(s,t,e){let i;const l=Math.PI*2;let{percent:a=0}=t,{size:d}=t,{seeking:_}=t,{scaleFactor:r=1}=t,h,u;const y=d/8,p=d/2,g=(d-y*1.1)/2,f=y*.7,b=d*.25,P=y*.9,v={offsetX:p-b-1.3*y,offsetY:-.5*P,outlineW:y*.05};ne(()=>{e(0,r=window.devicePixelRatio*2),e(3,h.width=Math.floor(d*r),h),e(3,h.height=Math.floor(d*r),h),e(5,u=h.getContext("2d")),u.scale(r,r),u.rotate(Math.PI/2*3),u.translate(-d,0)});const G=o=>{u.save(),u.beginPath(),u.translate(p,p),u.rotate(o),u.roundRect(v.offsetX,v.offsetY,b,P,P),u.fill(),e(5,u.lineWidth=v.outlineW,u),u.stroke(),u.restore()},O=(o,m,T,U,S)=>{u.clearRect(0,0,d,d),u.beginPath(),u.arc(p,p,g,0,l,!0),e(5,u.strokeStyle=T,u),e(5,u.lineWidth=U,u),u.stroke(),u.beginPath(),u.arc(p,p,g,0,S,!1),e(5,u.strokeStyle=m,u),e(5,u.lineCap="round",u),e(5,u.lineWidth=f,u),u.stroke(),o&&(e(5,u.fillStyle=m,u),e(5,u.strokeStyle=m,u),G(S))};function z(o){re[o?"unshift":"push"](()=>{h=o,e(3,h)})}return s.$$set=o=>{"percent"in o&&e(4,a=o.percent),"size"in o&&e(1,d=o.size),"seeking"in o&&e(2,_=o.seeking),"scaleFactor"in o&&e(0,r=o.scaleFactor)},s.$$.update=()=>{s.$$.dirty&16&&e(6,i=a*l),s.$$.dirty&100&&u&&O(_,"#fffa","#fff3",y,i)},[r,d,_,h,a,u,i,z]}class We extends oe{constructor(t){super(),ue(this,t,Ve,Te,le,{percent:4,size:1,seeking:2,scaleFactor:0})}}const Ae=(s,t,e)=>s<t?t:s>e?e:s;const Fe=s=>({}),te=s=>({});function Ge(s){let t,e,i,l,a,d;return{c(){t=C("div"),e=C("video"),i=C("source"),this.h()},l(_){t=R(_,"DIV",{class:!0});var r=I(t);e=R(r,"VIDEO",{style:!0,class:!0});var h=I(e);i=R(h,"SOURCE",{src:!0,type:!0}),h.forEach(k),r.forEach(k),this.h()},h(){J(i.src,l=s[0])||c(i,"src",l),c(i,"type",a="video/"+s[2]+"; "+s[3]),e.autoplay=!0,e.loop=!0,e.playsInline=!0,e.muted=!0,w(e,"--width",s[6]),w(e,"--height",s[7]),c(e,"class","svelte-d6uyb0"),E(e,"dim",s[13]),c(t,"class",d="pseudo-border "+s[9]+" svelte-d6uyb0"),E(t,"outline_off",s[16])},m(_,r){V(_,t,r),D(t,e),D(e,i)},p(_,r){r[0]&1&&!J(i.src,l=_[0])&&c(i,"src",l),r[0]&12&&a!==(a="video/"+_[2]+"; "+_[3])&&c(i,"type",a),r[0]&64&&w(e,"--width",_[6]),r[0]&128&&w(e,"--height",_[7]),r[0]&8192&&E(e,"dim",_[13]),r[0]&512&&d!==(d="pseudo-border "+_[9]+" svelte-d6uyb0")&&c(t,"class",d),r[0]&66048&&E(t,"outline_off",_[16])},i:Z,o:Z,d(_){_&&k(t)}}}function Ue(s){let t,e,i,l,a=`${s[12]}px`,d,_,r,h,u,y,p=!0,g,f,b,P,v=s[22]&&se(s);function G(o,m){return o[21]?je:Ne}let O=G(s),z=O(s);return{c(){t=C("button"),e=C("div"),v&&v.c(),i=Q(),l=j("svg"),z.c(),d=Q(),_=C("div"),r=C("video"),h=C("source"),this.h()},l(o){t=R(o,"BUTTON",{class:!0});var m=I(t);e=R(m,"DIV",{class:!0});var T=I(e);v&&v.l(T),i=x(T),l=Y(T,"svg",{viewBox:!0,id:!0,class:!0});var U=I(l);z.l(U),U.forEach(k),T.forEach(k),m.forEach(k),d=x(o),_=R(o,"DIV",{class:!0});var S=I(_);r=R(S,"VIDEO",{style:!0,class:!0});var B=I(r);h=R(B,"SOURCE",{src:!0,type:!0}),B.forEach(k),S.forEach(k),this.h()},h(){c(l,"viewBox","0 0 10 10"),c(l,"id","logos"),c(l,"class","svelte-d6uyb0"),E(l,"seeking",s[23]),c(e,"class","ui-elements pseudo-border svelte-d6uyb0"),c(t,"class","controls svelte-d6uyb0"),w(t,"--size",a),w(t,"--controls-bg",s[11]),J(h.src,u=s[0])||c(h,"src",u),c(h,"type",y="video/"+s[2]+"; "+s[3]),r.autoplay=s[1],r.loop=!0,r.playsInline=!0,r.muted=!0,w(r,"--width",s[6]),w(r,"--height",s[7]),c(r,"class","svelte-d6uyb0"),s[19]===void 0&&Ce(()=>s[35].call(r)),E(r,"dim",s[13]),c(_,"class",g="pseudo-border "+s[9]+" svelte-d6uyb0"),E(_,"outline_off",s[16])},m(o,m){V(o,t,m),D(t,e),v&&v.m(e,null),D(e,i),D(e,l),z.m(l,null),V(o,d,m),V(o,_,m),D(_,r),D(r,h),s[34](r),f=!0,b||(P=[X(t,"click",s[33]),X(r,"pointerenter",s[27]),X(r,"pointerleave",s[28]),X(r,"pointerdown",s[25]),X(r,"pointermove",s[24]),X(r,"pointerup",s[26]),X(r,"touchstart",Re(s[32])),X(r,"durationchange",s[35]),X(r,"play",s[36]),X(r,"pause",s[36])],b=!0)},p(o,m){o[22]?v?(v.p(o,m),m[0]&4194304&&M(v,1)):(v=se(o),v.c(),M(v,1),v.m(e,i)):v&&($(),F(v,1,1,()=>{v=null}),ee()),O!==(O=G(o))&&(z.d(1),z=O(o),z&&(z.c(),z.m(l,null))),(!f||m[0]&8388608)&&E(l,"seeking",o[23]),m[0]&4096&&a!==(a=`${o[12]}px`)&&w(t,"--size",a),m[0]&2048&&w(t,"--controls-bg",o[11]),(!f||m[0]&1&&!J(h.src,u=o[0]))&&c(h,"src",u),(!f||m[0]&12&&y!==(y="video/"+o[2]+"; "+o[3]))&&c(h,"type",y),(!f||m[0]&2)&&(r.autoplay=o[1]),(!f||m[0]&64)&&w(r,"--width",o[6]),(!f||m[0]&128)&&w(r,"--height",o[7]),m[0]&2097152&&p!==(p=o[21])&&r[p?"pause":"play"](),(!f||m[0]&8192)&&E(r,"dim",o[13]),(!f||m[0]&512&&g!==(g="pseudo-border "+o[9]+" svelte-d6uyb0"))&&c(_,"class",g),(!f||m[0]&66048)&&E(_,"outline_off",o[16])},i(o){f||(M(v),f=!0)},o(o){F(v),f=!1},d(o){o&&(k(t),k(d),k(_)),v&&v.d(),z.d(),s[34](null),b=!1,De(P)}}}function se(s){let t,e;return t=new We({props:{size:s[12],percent:s[20],seeking:s[23]}}),{c(){Be(t.$$.fragment)},l(i){Xe(t.$$.fragment,i)},m(i,l){Me(t,i,l),e=!0},p(i,l){const a={};l[0]&4096&&(a.size=i[12]),l[0]&1048576&&(a.percent=i[20]),l[0]&8388608&&(a.seeking=i[23]),t.$set(a)},i(i){e||(M(t.$$.fragment,i),e=!0)},o(i){F(t.$$.fragment,i),e=!1},d(i){Oe(t,i)}}}function Ne(s){let t,e,i;return{c(){t=j("g"),e=j("rect"),i=j("rect"),this.h()},l(l){t=Y(l,"g",{id:!0,class:!0});var a=I(t);e=Y(a,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),I(e).forEach(k),i=Y(a,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0}),I(i).forEach(k),a.forEach(k),this.h()},h(){c(e,"x","2.5"),c(e,"y","2"),c(e,"width","2"),c(e,"height","6"),c(e,"rx","0.5"),c(i,"x","5.5"),c(i,"y","2"),c(i,"width","2"),c(i,"height","6"),c(i,"rx","0.5"),c(t,"id","pause"),c(t,"class","svelte-d6uyb0")},m(l,a){V(l,t,a),D(t,e),D(t,i)},d(l){l&&k(t)}}}function je(s){let t,e;return{c(){t=j("g"),e=j("path"),this.h()},l(i){t=Y(i,"g",{id:!0,class:!0});var l=I(t);e=Y(l,"path",{d:!0}),I(e).forEach(k),l.forEach(k),this.h()},h(){c(e,"d","M 3.5 2.25 v 5.5L 7.25 5 Z"),c(t,"id","play"),c(t,"class","svelte-d6uyb0")},m(i,l){V(i,t,l),D(t,e)},d(i){i&&k(t)}}}function ie(s){let t,e;const i=s[31].caption,l=pe(i,s,s[30],te);return{c(){t=C("figcaption"),l&&l.c(),this.h()},l(a){t=R(a,"FIGCAPTION",{class:!0});var d=I(t);l&&l.l(d),d.forEach(k),this.h()},h(){c(t,"class","caption svelte-d6uyb0"),E(t,"cap_center",s[5])},m(a,d){V(a,t,d),l&&l.m(t,null),e=!0},p(a,d){l&&l.p&&(!e||d[0]&1073741824)&&Ie(l,i,a,a[30],e?Se(i,a[30],d,Fe):Pe(a[30]),te),(!e||d[0]&32)&&E(t,"cap_center",a[5])},i(a){e||(M(l,a),e=!0)},o(a){F(l,a),e=!1},d(a){a&&k(t),l&&l.d(a)}}}function Ye(s){let t,e,i,l,a=`${100-s[13]}%`,d,_=`${s[14]}rem`,r=`${s[15]}rem`,h;const u=[Ue,Ge],y=[];function p(f,b){return f[4]?0:1}i=p(s),l=y[i]=u[i](s);let g=s[29].caption&&ie(s);return{c(){t=C("figure"),e=C("div"),l.c(),d=Q(),g&&g.c(),this.h()},l(f){t=R(f,"FIGURE",{class:!0});var b=I(t);e=R(b,"DIV",{class:!0});var P=I(e);l.l(P),P.forEach(k),d=x(b),g&&g.l(b),b.forEach(k),this.h()},h(){c(e,"class","wrapper radius svelte-d6uyb0"),w(e,"--dim",a),c(t,"class","radius svelte-d6uyb0"),E(t,"card",s[8]),E(t,"inset_shadow",s[17]),w(t,"--bg",s[10]),w(t,"--pad",_),w(t,"--inner-radius",r)},m(f,b){V(f,t,b),D(t,e),y[i].m(e,null),D(t,d),g&&g.m(t,null),h=!0},p(f,b){let P=i;i=p(f),i===P?y[i].p(f,b):($(),F(y[P],1,1,()=>{y[P]=null}),ee(),l=y[i],l?l.p(f,b):(l=y[i]=u[i](f),l.c()),M(l,1),l.m(e,null)),b[0]&8192&&a!==(a=`${100-f[13]}%`)&&w(e,"--dim",a),f[29].caption?g?(g.p(f,b),b[0]&536870912&&M(g,1)):(g=ie(f),g.c(),M(g,1),g.m(t,null)):g&&($(),F(g,1,1,()=>{g=null}),ee()),(!h||b[0]&256)&&E(t,"card",f[8]),(!h||b[0]&131072)&&E(t,"inset_shadow",f[17]),b[0]&1024&&w(t,"--bg",f[10]),b[0]&16384&&_!==(_=`${f[14]}rem`)&&w(t,"--pad",_),b[0]&32768&&r!==(r=`${f[15]}rem`)&&w(t,"--inner-radius",r)},i(f){h||(M(l),M(g),h=!0)},o(f){F(l),F(g),h=!1},d(f){f&&k(t),y[i].d(),g&&g.d()}}}function qe(s,t,e){let{$$slots:i={},$$scope:l}=t;const a=we(i),d=window.matchMedia("(prefers-reduced-motion: reduce)").matches==!0;let{src:_=""}=t,{ext:r=_.split(".")[1]}=t,{codecs:h=""}=t,{autoplay:u=!0}=t,{controls:y=!0}=t,{cap_center:p=!0}=t,{width:g="100%"}=t,{height:f="auto"}=t,{card:b=!1}=t,{radius_type:P="all"}=t,{background:v=""}=t,{controlsBg:G="#0002"}=t,{controlsSize:O=28}=t,{dim:z=0}=t,{pad:o=0}=t,{inner_radius:m=.25}=t,{outline_off:T=!1}=t,{inset_shadow:U=!1}=t,S,B,q,W,H=!1,L=!1;const N={paused_before:!1,initialPosition:0,initialProgress:0,width:0};let A;ne(()=>{A=void 0,d&&e(1,u=!1),u||(e(21,W=!0),e(0,_=_+"#t=0.01"))}),Ee(()=>{A&&(clearInterval(A),A=void 0)});const ae=n=>{if(!B||n.type!=="touchmove"&&!(n.buttons&1))return;n.target.setPointerCapture(n.pointerId);const K=n.type==="touchmove"?n.touches[0].clientX:n.clientX,{width:ye}=S.getBoundingClientRect();e(20,q=Ae(N.initialProgress+(K-N.initialPosition)/ye,.01,.99)),e(18,S.currentTime=B*q,S)},ce=n=>{S.pause();const K=n.type==="touchmove"?n.touches[0].clientX:n.clientX;e(23,L=!0),N.paused_before=!!W,N.initialPosition=K,N.initialProgress=S.currentTime/B},fe=n=>{e(23,L=!1),N.paused_before||S.play()},_e=n=>{e(22,H=!0),(!L||!W)&&(A=setInterval(he,10))},de=n=>{e(22,H=!1),A&&clearInterval(A),A=void 0};function he(){e(20,q=S.currentTime/B)}function ge(n){ze.call(this,s,n)}const me=()=>e(21,W=!W);function be(n){re[n?"unshift":"push"](()=>{S=n,e(18,S)})}function ve(){B=this.duration,e(19,B)}function ke(){W=this.paused,e(21,W)}return s.$$set=n=>{"src"in n&&e(0,_=n.src),"ext"in n&&e(2,r=n.ext),"codecs"in n&&e(3,h=n.codecs),"autoplay"in n&&e(1,u=n.autoplay),"controls"in n&&e(4,y=n.controls),"cap_center"in n&&e(5,p=n.cap_center),"width"in n&&e(6,g=n.width),"height"in n&&e(7,f=n.height),"card"in n&&e(8,b=n.card),"radius_type"in n&&e(9,P=n.radius_type),"background"in n&&e(10,v=n.background),"controlsBg"in n&&e(11,G=n.controlsBg),"controlsSize"in n&&e(12,O=n.controlsSize),"dim"in n&&e(13,z=n.dim),"pad"in n&&e(14,o=n.pad),"inner_radius"in n&&e(15,m=n.inner_radius),"outline_off"in n&&e(16,T=n.outline_off),"inset_shadow"in n&&e(17,U=n.inset_shadow),"$$scope"in n&&e(30,l=n.$$scope)},[_,u,r,h,y,p,g,f,b,P,v,G,O,z,o,m,T,U,S,B,q,W,H,L,ae,ce,fe,_e,de,a,l,i,ge,me,be,ve,ke]}class Je extends oe{constructor(t){super(),ue(this,t,qe,Ye,le,{src:0,ext:2,codecs:3,autoplay:1,controls:4,cap_center:5,width:6,height:7,card:8,radius_type:9,background:10,controlsBg:11,controlsSize:12,dim:13,pad:14,inner_radius:15,outline_off:16,inset_shadow:17},null,[-1,-1])}}export{Je as G};