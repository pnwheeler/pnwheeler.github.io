import{s as Z,f as c,a as L,g as C,h as R,c as W,d as k,j as b,k as f,r as _,i as z,u as g,T as F,F as V,v as G,P as y,l as M,m as O,n as Q,U as x}from"./scheduler.bbcb3fe0.js";import{S as p,i as $}from"./index.303e8b5d.js";function J(l){let e,t;return{c(){e=c("span"),t=M(l[7])},l(a){e=C(a,"SPAN",{});var h=R(e);t=O(h,l[7]),h.forEach(k)},m(a,h){z(a,e,h),g(e,t)},p(a,h){h&128&&Q(t,a[7])},d(a){a&&k(e)}}}function K(l){let e,t;return{c(){e=c("span"),t=M(l[0]),this.h()},l(a){e=C(a,"SPAN",{style:!0});var h=R(e);t=O(h,l[0]),h.forEach(k),this.h()},h(){f(e,"--num-size",l[10]),f(e,"--num-color",l[11])},m(a,h){z(a,e,h),g(e,t)},p(a,h){h&1&&Q(t,a[0]),h&1024&&f(e,"--num-size",a[10]),h&2048&&f(e,"--num-color",a[11])},d(a){a&&k(e)}}}function ee(l){let e,t,a,h,m,d,r,w,o=l[4]&&J(l),s=l[5]&&K(l);return{c(){e=c("label"),o&&o.c(),t=L(),a=c("div"),h=L(),m=c("input"),d=L(),s&&s.c(),this.h()},l(u){e=C(u,"LABEL",{for:!0,style:!0,class:!0});var n=R(e);o&&o.l(n),t=W(n),a=C(n,"DIV",{id:!0,class:!0,style:!0});var S=R(a);S.forEach(k),h=W(n),m=C(n,"INPUT",{type:!0,id:!0,name:!0,min:!0,max:!0,step:!0,style:!0,class:!0}),d=W(n),s&&s.l(n),n.forEach(k),this.h()},h(){b(a,"id","bg-track"),b(a,"class","pseudo-border svelte-6v729d"),f(a,"--track-pre",l[14]),f(a,"--track-post",l[15]),f(a,"--percent",l[22]+"%"),_(a,"trackRound",l[12]),b(m,"type","range"),b(m,"id",l[7]),b(m,"name",l[7]),b(m,"min",l[1]),b(m,"max",l[2]),b(m,"step",l[3]),f(m,"--offset",l[23]+"px"),f(m,"--thumb-color",l[20]),f(m,"--color-border",l[21]),b(m,"class","svelte-6v729d"),b(e,"for",l[7]),f(e,"--color-bg",l[8]),f(e,"--track-h",l[13]+"px"),f(e,"--thumb-h",l[18]+"px"),f(e,"--thumb-w",l[17]+"px"),f(e,"--pad-inline",l[24]+"px"),f(e,"--padding",l[9]+"px"),f(e,"--outline-w",l[16]+"px"),f(e,"--thumb-radius",l[19]+"px"),b(e,"class","svelte-6v729d"),_(e,"showNumber",l[5]),_(e,"showLabel",l[4]),_(e,"insetShadow",l[6])},m(u,n){z(u,e,n),o&&o.m(e,null),g(e,t),g(e,a),g(e,h),g(e,m),F(m,l[0]),g(e,d),s&&s.m(e,null),r||(w=[V(m,"change",l[25]),V(m,"input",l[25])],r=!0)},p(u,[n]){u[4]?o?o.p(u,n):(o=J(u),o.c(),o.m(e,t)):o&&(o.d(1),o=null),n&16384&&f(a,"--track-pre",u[14]),n&32768&&f(a,"--track-post",u[15]),n&4194304&&f(a,"--percent",u[22]+"%"),n&4096&&_(a,"trackRound",u[12]),n&128&&b(m,"id",u[7]),n&128&&b(m,"name",u[7]),n&2&&b(m,"min",u[1]),n&4&&b(m,"max",u[2]),n&8&&b(m,"step",u[3]),n&8388608&&f(m,"--offset",u[23]+"px"),n&1048576&&f(m,"--thumb-color",u[20]),n&2097152&&f(m,"--color-border",u[21]),n&1&&F(m,u[0]),u[5]?s?s.p(u,n):(s=K(u),s.c(),s.m(e,null)):s&&(s.d(1),s=null),n&128&&b(e,"for",u[7]),n&256&&f(e,"--color-bg",u[8]),n&8192&&f(e,"--track-h",u[13]+"px"),n&262144&&f(e,"--thumb-h",u[18]+"px"),n&131072&&f(e,"--thumb-w",u[17]+"px"),n&512&&f(e,"--padding",u[9]+"px"),n&65536&&f(e,"--outline-w",u[16]+"px"),n&524288&&f(e,"--thumb-radius",u[19]+"px"),n&32&&_(e,"showNumber",u[5]),n&16&&_(e,"showLabel",u[4]),n&64&&_(e,"insetShadow",u[6])},i:G,o:G,d(u){u&&k(e),o&&o.d(),s&&s.d(),r=!1,y(w)}}}function le(l,e,t){let a,h,{min:m=0}=e,{max:d=100}=e,{value:r=(d-m)/2}=e,{step:w="any"}=e,{showLabel:o=!1}=e,{showNumber:s=!1}=e,{insetShadow:u=!0}=e,{labelName:n="percent"}=e,{bgColor:S="#1f1f1f"}=e,{padding:P=9}=e,{numSize:B="1em"}=e,{numColor:E=""}=e,{trackRound:A=!1}=e,{trackHeight:I=6}=e,{trackPre:T="#494949"}=e,{trackPost:U="#101010"}=e,{outlineWidth:H=2}=e,{thumbWidth:N=14}=e,{thumbHeight:j=28}=e,{thumbRadius:q=2}=e,{thumbColor:v="var(--slate-blue-dim)"}=e,{thumbColorBorder:D="color-mix(in srgb, var(--thumb-color), black 20%)"}=e,X=(N-H)*.5+1+P;function Y(){r=x(this.value),t(0,r)}return l.$$set=i=>{"min"in i&&t(1,m=i.min),"max"in i&&t(2,d=i.max),"value"in i&&t(0,r=i.value),"step"in i&&t(3,w=i.step),"showLabel"in i&&t(4,o=i.showLabel),"showNumber"in i&&t(5,s=i.showNumber),"insetShadow"in i&&t(6,u=i.insetShadow),"labelName"in i&&t(7,n=i.labelName),"bgColor"in i&&t(8,S=i.bgColor),"padding"in i&&t(9,P=i.padding),"numSize"in i&&t(10,B=i.numSize),"numColor"in i&&t(11,E=i.numColor),"trackRound"in i&&t(12,A=i.trackRound),"trackHeight"in i&&t(13,I=i.trackHeight),"trackPre"in i&&t(14,T=i.trackPre),"trackPost"in i&&t(15,U=i.trackPost),"outlineWidth"in i&&t(16,H=i.outlineWidth),"thumbWidth"in i&&t(17,N=i.thumbWidth),"thumbHeight"in i&&t(18,j=i.thumbHeight),"thumbRadius"in i&&t(19,q=i.thumbRadius),"thumbColor"in i&&t(20,v=i.thumbColor),"thumbColorBorder"in i&&t(21,D=i.thumbColorBorder)},l.$$.update=()=>{l.$$.dirty&5&&t(22,a=100*(r/d)),l.$$.dirty&4325376&&t(23,h=N*.01*(a-50))},[r,m,d,w,o,s,u,n,S,P,B,E,A,I,T,U,H,N,j,q,v,D,a,h,X,Y]}class ne extends p{constructor(e){super(),$(this,e,le,ee,Z,{min:1,max:2,value:0,step:3,showLabel:4,showNumber:5,insetShadow:6,labelName:7,bgColor:8,padding:9,numSize:10,numColor:11,trackRound:12,trackHeight:13,trackPre:14,trackPost:15,outlineWidth:16,thumbWidth:17,thumbHeight:18,thumbRadius:19,thumbColor:20,thumbColorBorder:21})}}export{ne as R};