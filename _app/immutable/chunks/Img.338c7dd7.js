import{s as N,f as v,a as O,g as b,h as G,d,c as R,P as j,j as h,r as E,k as _,i as D,u as C,W as T,z as U,A as V,B as W,C as H}from"./scheduler.15fae3ce.js";import{S as J,i as K,a as I,g as L,t as q,c as Q}from"./index.884423c8.js";const X=i=>({}),z=i=>({});function B(i){let t,e;const u=i[17].caption,o=U(u,i,i[16],z);return{c(){t=v("figcaption"),o&&o.c(),this.h()},l(f){t=b(f,"FIGCAPTION",{class:!0});var c=G(t);o&&o.l(c),c.forEach(d),this.h()},h(){h(t,"class","caption")},m(f,c){D(f,t,c),o&&o.m(t,null),e=!0},p(f,c){o&&o.p&&(!e||c&65536)&&V(o,u,f,f[16],e?H(u,f[16],c,X):W(f[16]),z)},i(f){e||(I(o,f),e=!0)},o(f){q(o,f),e=!1},d(f){f&&d(t),o&&o.d(f)}}}function Y(i){let t,e,u,o,f,c=`${100-i[7]}%`,m,r,n=i[15].caption&&B(i);return{c(){t=v("figure"),e=v("div"),u=v("img"),m=O(),n&&n.c(),this.h()},l(l){t=b(l,"FIGURE",{class:!0});var a=G(t);e=b(a,"DIV",{class:!0});var g=G(e);u=b(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(d),m=R(a),n&&n.l(a),a.forEach(d),this.h()},h(){j(u.src,o=i[0])||h(u,"src",o),h(u,"alt",i[1]),h(u,"class","svelte-18vle10"),E(u,"filter",i[14]),h(e,"class",f="pseudo-border "+i[2]+" svelte-18vle10"),_(e,"--dim",c),_(e,"--contrast",i[8]),_(e,"--outline-color",i[10]),_(e,"--blend",i[9]),_(e,"--fit",i[13]),_(e,"--width",i[11]),_(e,"--height",i[12]),_(e,"--from",`translate(${i[4].x}%, ${i[4].y}%) scale(${i[4].s})`),_(e,"--to",`translate(${i[5].x}%, ${i[5].y}%) scale(${i[5].s})`),_(e,"--timing",`${i[6]}`),h(t,"class","svelte-18vle10"),E(t,"hover",i[3])},m(l,a){D(l,t,a),C(t,e),C(e,u),C(t,m),n&&n.m(t,null),r=!0},p(l,[a]){(!r||a&1&&!j(u.src,o=l[0]))&&h(u,"src",o),(!r||a&2)&&h(u,"alt",l[1]),(!r||a&4&&f!==(f="pseudo-border "+l[2]+" svelte-18vle10"))&&h(e,"class",f),a&128&&c!==(c=`${100-l[7]}%`)&&_(e,"--dim",c),a&256&&_(e,"--contrast",l[8]),a&1024&&_(e,"--outline-color",l[10]),a&512&&_(e,"--blend",l[9]),a&8192&&_(e,"--fit",l[13]),a&2048&&_(e,"--width",l[11]),a&4096&&_(e,"--height",l[12]),a&16&&_(e,"--from",`translate(${l[4].x}%, ${l[4].y}%) scale(${l[4].s})`),a&32&&_(e,"--to",`translate(${l[5].x}%, ${l[5].y}%) scale(${l[5].s})`),a&64&&_(e,"--timing",`${l[6]}`),l[15].caption?n?(n.p(l,a),a&32768&&I(n,1)):(n=B(l),n.c(),I(n,1),n.m(t,null)):n&&(L(),q(n,1,1,()=>{n=null}),Q()),(!r||a&8)&&E(t,"hover",l[3])},i(l){r||(I(n),r=!0)},o(l){q(n),r=!1},d(l){l&&d(t),n&&n.d()}}}function Z(i,t,e){let{$$slots:u={},$$scope:o}=t;const f=T(u);let{src:c=""}=t,{alt:m=c}=t,{radius_type:r="all"}=t,{hover:n=!0}=t,{from:l={x:0,y:0,s:1.05}}=t,{to:a={x:0,y:0,s:1}}=t,{timing:g="0.3s ease"}=t,{dim:w=0}=t,{contrast:k=1}=t,M=w!=0||k!=1,{blend:y=""}=t,{outline_color:A=""}=t,{width:F="100%"}=t,{height:P="auto"}=t,{fit:S="cover"}=t;return i.$$set=s=>{"src"in s&&e(0,c=s.src),"alt"in s&&e(1,m=s.alt),"radius_type"in s&&e(2,r=s.radius_type),"hover"in s&&e(3,n=s.hover),"from"in s&&e(4,l=s.from),"to"in s&&e(5,a=s.to),"timing"in s&&e(6,g=s.timing),"dim"in s&&e(7,w=s.dim),"contrast"in s&&e(8,k=s.contrast),"blend"in s&&e(9,y=s.blend),"outline_color"in s&&e(10,A=s.outline_color),"width"in s&&e(11,F=s.width),"height"in s&&e(12,P=s.height),"fit"in s&&e(13,S=s.fit),"$$scope"in s&&e(16,o=s.$$scope)},[c,m,r,n,l,a,g,w,k,y,A,F,P,S,M,f,o,u]}class $ extends J{constructor(t){super(),K(this,t,Z,Y,N,{src:0,alt:1,radius_type:2,hover:3,from:4,to:5,timing:6,dim:7,contrast:8,blend:9,outline_color:10,width:11,height:12,fit:13})}}export{$ as I};
