import{s as S,f as k,l as ne,g as y,h as w,m as re,d,j as p,r as A,i as T,u as E,n as ie,v as C,w as oe,o as W,p as X,a as I,c as q,k as g,x as fe,b as ce,e as L,y as ue,z as G,A as J,B as K,C as Q,D as Y}from"../chunks/scheduler.15fae3ce.js";import{S as B,i as V,a as m,g as j,c as D,t as v,b as Z,d as $,m as x,e as ee,f as te,h as _e}from"../chunks/index.884423c8.js";import{f as ae,b as he,a as de}from"../chunks/index.97b59dd0.js";import{t as M,u as me,a as pe,d as be}from"../chunks/stores.0ea024a5.js";import{g as ve,a as ge}from"../chunks/utils.849c5a30.js";import{e as z}from"../chunks/each.e59479a4.js";const ke=({url:s})=>{const{pathname:e}=s;return{pathname:e}},ye=!0,Pe=Object.freeze(Object.defineProperty({__proto__:null,load:ke,prerender:ye},Symbol.toStringTag,{value:"Module"}));function we(s){let e,a,t;return{c(){e=k("li"),a=k("a"),t=ne(s[2]),this.h()},l(l){e=y(l,"LI",{class:!0});var n=w(e);a=y(n,"A",{href:!0,class:!0});var i=w(a);t=re(i,s[2]),i.forEach(d),n.forEach(d),this.h()},h(){p(a,"href",s[1]),p(a,"class","svelte-s8afo5"),p(e,"class","svelte-s8afo5"),A(e,"active",s[0])},m(l,n){T(l,e,n),E(e,a),E(a,t),s[5](e)},p(l,[n]){n&4&&ie(t,l[2]),n&2&&p(a,"href",l[1]),n&1&&A(e,"active",l[0])},i:C,o:C,d(l){l&&d(e),s[5](null)}}}function Ee(s,e,a){const t=oe();let{active:l=!1}=e,{id:n}=e,{href:i}=e,{title:f}=e,c=0,r=0,_;function u(){t("activeChanged",{width:c,left:r,path:i,id:n})}W(()=>{c=_.clientWidth,r=_.offsetLeft,l&&u()});function h(o){X[o?"unshift":"push"](()=>{_=o,a(3,_)})}return s.$$set=o=>{"active"in o&&a(0,l=o.active),"id"in o&&a(4,n=o.id),"href"in o&&a(1,i=o.href),"title"in o&&a(2,f=o.title)},s.$$.update=()=>{s.$$.dirty&1&&l&&u()},[l,i,f,_,n,h]}class Te extends B{constructor(e){super(),V(this,e,Ee,we,S,{active:0,id:4,href:1,title:2})}}const N=[{id:0,title:"home",href:"/"},{id:1,title:"projects",href:"/projects"},{id:2,title:"misc",href:"/other"}];function O(s,e,a){const t=s.slice();t[10]=e[a];const l=t[0]==t[10].href;return t[11]=l,t}function F(s){let e;return{c(){e=k("div"),this.h()},l(a){e=y(a,"DIV",{class:!0,style:!0});var t=w(e);t.forEach(d),this.h()},h(){p(e,"class","nested pseudo-border svelte-1t99bqo"),g(e,"--w",s[2]+"px"),g(e,"--l",s[3]+"px")},m(a,t){T(a,e,t)},p(a,t){t&4&&g(e,"--w",a[2]+"px"),t&8&&g(e,"--l",a[3]+"px")},d(a){a&&d(e)}}}function P(s){let e,a;return e=new Te({props:{active:s[11],id:s[10].id,href:s[10].href,title:s[10].title}}),e.$on("activeChanged",s[7]),{c(){Z(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,l){x(e,t,l),a=!0},p(t,l){const n={};l&1&&(n.active=t[11]),e.$set(n)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function Ne(s){let e,a,t,l,n,i,f=s[6]&&F(s),c=z(N),r=[];for(let u=0;u<c.length;u+=1)r[u]=P(O(s,c,u));const _=u=>v(r[u],1,1,()=>{r[u]=null});return{c(){e=k("nav"),f&&f.c(),a=I(),t=k("ul");for(let u=0;u<r.length;u+=1)r[u].c();l=I(),n=k("div"),this.h()},l(u){e=y(u,"NAV",{class:!0});var h=w(e);f&&f.l(h),a=q(h),t=y(h,"UL",{class:!0});var o=w(t);for(let b=0;b<r.length;b+=1)r[b].l(o);l=q(o),n=y(o,"DIV",{id:!0,style:!0,class:!0}),w(n).forEach(d),o.forEach(d),h.forEach(d),this.h()},h(){p(n,"id","bgtab"),g(n,"--w",s[2]+"px"),g(n,"--l",s[3]+"px"),g(n,"--br",(s[4]==0||s[4]==N.length-1?.5:2)+"rem"),p(n,"class","svelte-1t99bqo"),A(n,"notTopLevel",s[1]),p(t,"class","svelte-1t99bqo"),p(e,"class","nav pseudo-border isolate svelte-1t99bqo")},m(u,h){T(u,e,h),f&&f.m(e,null),E(e,a),E(e,t);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);E(t,l),E(t,n),s[8](n),i=!0},p(u,[h]){if(u[6]?f?f.p(u,h):(f=F(u),f.c(),f.m(e,a)):f&&(f.d(1),f=null),h&129){c=z(N);let o;for(o=0;o<c.length;o+=1){const b=O(u,c,o);r[o]?(r[o].p(b,h),m(r[o],1)):(r[o]=P(b),r[o].c(),m(r[o],1),r[o].m(t,l))}for(j(),o=c.length;o<r.length;o+=1)_(o);D()}(!i||h&4)&&g(n,"--w",u[2]+"px"),(!i||h&8)&&g(n,"--l",u[3]+"px"),(!i||h&16)&&g(n,"--br",(u[4]==0||u[4]==N.length-1?.5:2)+"rem"),(!i||h&2)&&A(n,"notTopLevel",u[1])},i(u){if(!i){for(let h=0;h<c.length;h+=1)m(r[h]);i=!0}},o(u){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)v(r[h]);i=!1},d(u){u&&d(e),f&&f.d(),fe(r,u),s[8](null)}}}function Ae(s,e,a){let t,{pathname:l}=e,n=0,i=0,f=0,c="",r,_=!1;function u(o){let b=o.detail;a(2,n=1.05*b.width);let le=b.width*.025;a(3,i=b.left-le),a(4,f=b.id),M.setNewTab(f),c=b.path;const se=[{width:`${n}px`},{transform:`translate(${i}px, 0)`}];r.animate(se,{duration:350,fill:"forwards",easing:"cubic-bezier(0.34, 1.56, 0.69, .9)"})}ce(()=>{l!=c?(M.setNewTab(1),a(1,_=!0)):(M.setNewTab(f),a(1,_=!1))});function h(o){X[o?"unshift":"push"](()=>{r=o,a(5,r)})}return s.$$set=o=>{"pathname"in o&&a(0,l=o.pathname)},s.$$.update=()=>{s.$$.dirty&3&&a(6,t=l.includes("/projects")&&_)},[l,_,n,i,f,r,t,u,h]}class Le extends B{constructor(e){super(),V(this,e,Ae,Ne,S,{pathname:0})}}function U(s){let e,a,t,l;const n=[je,Se],i=[];function f(c,r){return c[4]?0:1}return e=f(s),a=i[e]=n[e](s),{c(){a.c(),t=L()},l(c){a.l(c),t=L()},m(c,r){i[e].m(c,r),T(c,t,r),l=!0},p(c,r){let _=e;e=f(c),e===_?i[e].p(c,r):(j(),v(i[_],1,1,()=>{i[_]=null}),D(),a=i[e],a?a.p(c,r):(a=i[e]=n[e](c),a.c()),m(a,1),a.m(t.parentNode,t))},i(c){l||(m(a),l=!0)},o(c){v(a),l=!1},d(c){c&&d(t),i[e].d(c)}}}function Se(s){let e,a;const t=s[8].default,l=G(t,s,s[7],null);return{c(){e=k("main"),l&&l.c(),this.h()},l(n){e=y(n,"MAIN",{class:!0});var i=w(e);l&&l.l(i),i.forEach(d),this.h()},h(){p(e,"class","svelte-9bw2cn")},m(n,i){T(n,e,i),l&&l.m(e,null),a=!0},p(n,i){l&&l.p&&(!a||i&128)&&J(l,t,n,n[7],a?Q(t,n[7],i,null):K(n[7]),null)},i(n){a||(m(l,n),a=!0)},o(n){v(l,n),a=!1},d(n){n&&d(e),l&&l.d(n)}}}function je(s){let e,a,t,l,n=s[0],i,f;t=new Le({props:{pathname:s[0]}});let c=H(s);return{c(){e=k("div"),a=k("header"),Z(t.$$.fragment),l=I(),c.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var _=w(e);a=y(_,"HEADER",{class:!0});var u=w(a);$(t.$$.fragment,u),u.forEach(d),l=q(_),c.l(_),_.forEach(d),this.h()},h(){p(a,"class","nav-bar svelte-9bw2cn"),p(e,"class","page svelte-9bw2cn")},m(r,_){T(r,e,_),E(e,a),x(t,a,null),E(e,l),c.m(e,null),f=!0},p(r,_){const u={};_&1&&(u.pathname=r[0]),t.$set(u),_&1&&S(n,n=r[0])?(j(),v(c,1,1,C),D(),c=H(r),c.c(),m(c,1),c.m(e,null)):c.p(r,_)},i(r){f||(m(t.$$.fragment,r),m(c),r&&(i||Y(()=>{i=te(e,ae,{duration:250}),i.start()})),f=!0)},o(r){v(t.$$.fragment,r),v(c),f=!1},d(r){r&&d(e),ee(t),c.d(r)}}}function H(s){let e,a,t,l;const n=s[8].default,i=G(n,s,s[7],null);return{c(){e=k("main"),i&&i.c(),this.h()},l(f){e=y(f,"MAIN",{class:!0});var c=w(e);i&&i.l(c),c.forEach(d),this.h()},h(){p(e,"class","mainLayout flow svelte-9bw2cn")},m(f,c){T(f,e,c),i&&i.m(e,null),l=!0},p(f,c){s=f,i&&i.p&&(!l||c&128)&&J(i,n,s,s[7],l?Q(n,s[7],c,null):K(s[7]),null)},i(f){l||(m(i,f),f&&Y(()=>{l&&(t&&t.end(1),a=te(e,de,{x:s[3],duration:s[2],delay:Ce,easing:he}),a.start())}),l=!0)},o(f){v(i,f),a&&a.invalidate(),f&&(t=_e(e,ae,{duration:250,delay:0})),l=!1},d(f){f&&d(e),i&&i.d(f),f&&t&&t.end()}}}function De(s){let e,a,t=s[1]&&U(s);return{c(){t&&t.c(),e=L()},l(l){t&&t.l(l),e=L()},m(l,n){t&&t.m(l,n),T(l,e,n),a=!0},p(l,[n]){l[1]?t?(t.p(l,n),n&2&&m(t,1)):(t=U(l),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(j(),v(t,1,1,()=>{t=null}),D())},i(l){a||(m(t),a=!0)},o(l){v(t),a=!1},d(l){l&&d(e),t&&t.d(l)}}}const Me=18,R=550,Ce=300;function Ie(s,e,a){let t,l,n,i,f;ue(s,be,o=>a(6,f=o));let{$$slots:c={},$$scope:r}=e,{data:_}=e,u=!1;W(async()=>{a(1,u=!0),me.setFallback(await ve()),pe.setTemperature(await ge())});const h=o=>!!(o=="/"||o.includes("/projects")||o.includes("/other"));return s.$$set=o=>{"data"in o&&a(5,_=o.data),"$$scope"in o&&a(7,r=o.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&a(0,t=_.pathname),s.$$.dirty&1&&a(4,l=h(t)),s.$$.dirty&64&&a(3,n=Me*f),s.$$.dirty&64&&a(2,i=R+R*Math.abs(1-Math.abs(f))*.15)},[t,u,i,n,l,_,f,r,c]}class Ue extends B{constructor(e){super(),V(this,e,Ie,De,S,{data:5})}}export{Ue as component,Pe as universal};
