import{s as O,f as b,a as R,g as v,h as C,d,c as T,P as S,j as h,r as k,k as _,i as M,u as E,W as U,A as V,B as W,C as z,D as H}from"./scheduler.6d6d93c7.js";import{S as J,i as K,a as I,g as L,t as G,c as Q}from"./index.15fe4709.js";const X=l=>({}),j=l=>({});function B(l){let t,e;const u=l[17].caption,o=V(u,l,l[16],j);return{c(){t=b("figcaption"),o&&o.c(),this.h()},l(f){t=v(f,"FIGCAPTION",{class:!0});var c=C(t);o&&o.l(c),c.forEach(d),this.h()},h(){h(t,"class","caption")},m(f,c){M(f,t,c),o&&o.m(t,null),e=!0},p(f,c){o&&o.p&&(!e||c&65536)&&W(o,u,f,f[16],e?H(u,f[16],c,X):z(f[16]),j)},i(f){e||(I(o,f),e=!0)},o(f){G(o,f),e=!1},d(f){f&&d(t),o&&o.d(f)}}}function Y(l){let t,e,u,o,f,c=`${100-l[7]}%`,m,r,n=l[15].caption&&B(l);return{c(){t=b("figure"),e=b("div"),u=b("img"),m=R(),n&&n.c(),this.h()},l(i){t=v(i,"FIGURE",{class:!0});var a=C(t);e=v(a,"DIV",{class:!0});var g=C(e);u=v(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(d),m=T(a),n&&n.l(a),a.forEach(d),this.h()},h(){S(u.src,o=l[0])||h(u,"src",o),h(u,"alt",l[1]),h(u,"class","svelte-1vbqs9i"),k(u,"filter",l[14]),h(e,"class",f="pseudo-border "+l[2]+" svelte-1vbqs9i"),_(e,"--dim",c),_(e,"--contrast",l[8]),_(e,"--outline-color",l[10]),_(e,"--blend",l[9]),_(e,"--fit",l[13]),_(e,"--width",l[11]),_(e,"--height",l[12]),_(e,"--from",`translate(${l[4].x}%, ${l[4].y}%) scale(${l[4].s})`),_(e,"--to",`translate(${l[5].x}%, ${l[5].y}%) scale(${l[5].s})`),_(e,"--timing",`${l[6]}`),h(t,"class","svelte-1vbqs9i"),k(t,"hover",l[3])},m(i,a){M(i,t,a),E(t,e),E(e,u),E(t,m),n&&n.m(t,null),r=!0},p(i,[a]){(!r||a&1&&!S(u.src,o=i[0]))&&h(u,"src",o),(!r||a&2)&&h(u,"alt",i[1]),(!r||a&4&&f!==(f="pseudo-border "+i[2]+" svelte-1vbqs9i"))&&h(e,"class",f),a&128&&c!==(c=`${100-i[7]}%`)&&_(e,"--dim",c),a&256&&_(e,"--contrast",i[8]),a&1024&&_(e,"--outline-color",i[10]),a&512&&_(e,"--blend",i[9]),a&8192&&_(e,"--fit",i[13]),a&2048&&_(e,"--width",i[11]),a&4096&&_(e,"--height",i[12]),a&16&&_(e,"--from",`translate(${i[4].x}%, ${i[4].y}%) scale(${i[4].s})`),a&32&&_(e,"--to",`translate(${i[5].x}%, ${i[5].y}%) scale(${i[5].s})`),a&64&&_(e,"--timing",`${i[6]}`),i[15].caption?n?(n.p(i,a),a&32768&&I(n,1)):(n=B(i),n.c(),I(n,1),n.m(t,null)):n&&(L(),G(n,1,1,()=>{n=null}),Q()),(!r||a&8)&&k(t,"hover",i[3])},i(i){r||(I(n),r=!0)},o(i){G(n),r=!1},d(i){i&&d(t),n&&n.d()}}}function Z(l,t,e){let{$$slots:u={},$$scope:o}=t;const f=U(u);let{src:c=""}=t,{alt:m=c}=t,{radius_type:r="all"}=t,{hover:n=!0}=t,{from:i={x:0,y:0,s:1.05}}=t,{to:a={x:0,y:0,s:1}}=t,{timing:g="0.3s ease"}=t,{dim:q=0}=t,{contrast:w=1}=t,N=q!=0||w!=1,{blend:y=""}=t,{outline_color:A=""}=t,{width:D="100%"}=t,{height:F="auto"}=t,{fit:P="cover"}=t;return l.$$set=s=>{"src"in s&&e(0,c=s.src),"alt"in s&&e(1,m=s.alt),"radius_type"in s&&e(2,r=s.radius_type),"hover"in s&&e(3,n=s.hover),"from"in s&&e(4,i=s.from),"to"in s&&e(5,a=s.to),"timing"in s&&e(6,g=s.timing),"dim"in s&&e(7,q=s.dim),"contrast"in s&&e(8,w=s.contrast),"blend"in s&&e(9,y=s.blend),"outline_color"in s&&e(10,A=s.outline_color),"width"in s&&e(11,D=s.width),"height"in s&&e(12,F=s.height),"fit"in s&&e(13,P=s.fit),"$$scope"in s&&e(16,o=s.$$scope)},[c,m,r,n,i,a,g,q,w,y,A,D,F,P,N,f,o,u]}class $ extends J{constructor(t){super(),K(this,t,Z,Y,O,{src:0,alt:1,radius_type:2,hover:3,from:4,to:5,timing:6,dim:7,contrast:8,blend:9,outline_color:10,width:11,height:12,fit:13})}}export{$ as I};
