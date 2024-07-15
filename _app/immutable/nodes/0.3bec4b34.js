import{s as S,f as v,l as te,g as y,h as k,m as ae,d,j as p,r as N,i as T,u as E,n as le,v as L,w as se,o as W,p as X,a as j,c as C,k as g,x as ne,b as re,e as z,y as ie,z as G,A as oe,B as fe,C as ce,D as ue}from"../chunks/scheduler.6d6d93c7.js";import{S as M,i as B,a as b,g as I,c as V,t as w,b as J,d as K,m as Q,e as Y,f as Z,h as _e}from"../chunks/index.15fe4709.js";import{b as he,f as de,a as x}from"../chunks/index.476a6e1c.js";import{t as D,u as me,a as pe,d as be}from"../chunks/stores.8130cd92.js";import{g as ge,a as ve}from"../chunks/utils.f0ccaf0a.js";import{e as O}from"../chunks/each.e59479a4.js";const ye=({url:l})=>{const{pathname:e}=l;return{pathname:e}},ke=!0,Fe=Object.freeze(Object.defineProperty({__proto__:null,load:ye,prerender:ke},Symbol.toStringTag,{value:"Module"}));function we(l){let e,a,t;return{c(){e=v("li"),a=v("a"),t=te(l[2]),this.h()},l(s){e=y(s,"LI",{class:!0});var r=k(e);a=y(r,"A",{href:!0,class:!0});var c=k(a);t=ae(c,l[2]),c.forEach(d),r.forEach(d),this.h()},h(){p(a,"href",l[1]),p(a,"class","svelte-s8afo5"),p(e,"class","svelte-s8afo5"),N(e,"active",l[0])},m(s,r){T(s,e,r),E(e,a),E(a,t),l[5](e)},p(s,[r]){r&4&&le(t,s[2]),r&2&&p(a,"href",s[1]),r&1&&N(e,"active",s[0])},i:L,o:L,d(s){s&&d(e),l[5](null)}}}function Ee(l,e,a){const t=se();let{active:s=!1}=e,{id:r}=e,{href:c}=e,{title:o}=e,u=0,n=0,_;function i(){t("activeChanged",{width:u,left:n,path:c,id:r})}W(()=>{u=_.clientWidth,n=_.offsetLeft,s&&i()});function h(f){X[f?"unshift":"push"](()=>{_=f,a(3,_)})}return l.$$set=f=>{"active"in f&&a(0,s=f.active),"id"in f&&a(4,r=f.id),"href"in f&&a(1,c=f.href),"title"in f&&a(2,o=f.title)},l.$$.update=()=>{l.$$.dirty&1&&s&&i()},[s,c,o,_,r,h]}class Te extends M{constructor(e){super(),B(this,e,Ee,we,S,{active:0,id:4,href:1,title:2})}}const A=[{id:0,title:"home",href:"/"},{id:1,title:"projects",href:"/projects"},{id:2,title:"misc",href:"/other"}];function F(l,e,a){const t=l.slice();t[10]=e[a];const s=t[0]==t[10].href;return t[11]=s,t}function P(l){let e;return{c(){e=v("div"),this.h()},l(a){e=y(a,"DIV",{class:!0,style:!0});var t=k(e);t.forEach(d),this.h()},h(){p(e,"class","nested pseudo-border svelte-1d87rl4"),g(e,"--w",l[2]+"px"),g(e,"--l",l[3]+"px")},m(a,t){T(a,e,t)},p(a,t){t&4&&g(e,"--w",a[2]+"px"),t&8&&g(e,"--l",a[3]+"px")},d(a){a&&d(e)}}}function U(l){let e,a;return e=new Te({props:{active:l[11],id:l[10].id,href:l[10].href,title:l[10].title}}),e.$on("activeChanged",l[7]),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){Q(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.active=t[11]),e.$set(r)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}function Ae(l){let e,a,t,s,r,c,o=l[6]&&P(l),u=O(A),n=[];for(let i=0;i<u.length;i+=1)n[i]=U(F(l,u,i));const _=i=>w(n[i],1,1,()=>{n[i]=null});return{c(){e=v("nav"),o&&o.c(),a=j(),t=v("ul");for(let i=0;i<n.length;i+=1)n[i].c();s=j(),r=v("div"),this.h()},l(i){e=y(i,"NAV",{class:!0});var h=k(e);o&&o.l(h),a=C(h),t=y(h,"UL",{class:!0});var f=k(t);for(let m=0;m<n.length;m+=1)n[m].l(f);s=C(f),r=y(f,"DIV",{id:!0,style:!0,class:!0}),k(r).forEach(d),f.forEach(d),h.forEach(d),this.h()},h(){p(r,"id","bgtab"),g(r,"--w",l[2]+"px"),g(r,"--l",l[3]+"px"),g(r,"--br",(l[4]==0||l[4]==A.length-1?.5:2)+"rem"),p(r,"class","svelte-1d87rl4"),N(r,"notTopLevel",l[1]),p(t,"class","svelte-1d87rl4"),p(e,"class","nav pseudo-border isolate svelte-1d87rl4")},m(i,h){T(i,e,h),o&&o.m(e,null),E(e,a),E(e,t);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(t,null);E(t,s),E(t,r),l[8](r),c=!0},p(i,[h]){if(i[6]?o?o.p(i,h):(o=P(i),o.c(),o.m(e,a)):o&&(o.d(1),o=null),h&129){u=O(A);let f;for(f=0;f<u.length;f+=1){const m=F(i,u,f);n[f]?(n[f].p(m,h),b(n[f],1)):(n[f]=U(m),n[f].c(),b(n[f],1),n[f].m(t,s))}for(I(),f=u.length;f<n.length;f+=1)_(f);V()}(!c||h&4)&&g(r,"--w",i[2]+"px"),(!c||h&8)&&g(r,"--l",i[3]+"px"),(!c||h&16)&&g(r,"--br",(i[4]==0||i[4]==A.length-1?.5:2)+"rem"),(!c||h&2)&&N(r,"notTopLevel",i[1])},i(i){if(!c){for(let h=0;h<u.length;h+=1)b(n[h]);c=!0}},o(i){n=n.filter(Boolean);for(let h=0;h<n.length;h+=1)w(n[h]);c=!1},d(i){i&&d(e),o&&o.d(),ne(n,i),l[8](null)}}}function Ne(l,e,a){let t,{pathname:s}=e,r=0,c=0,o=0,u="",n,_=!1;function i(f){let m=f.detail;a(2,r=1.05*m.width);let $=m.width*.025;a(3,c=m.left-$),a(4,o=m.id),D.setNewTab(o),u=m.path;const ee=[{width:`${r}px`},{transform:`translate(${c}px, 0)`}];n.animate(ee,{duration:325,fill:"forwards",easing:"cubic-bezier(0.34, 1.56, 0.69, .9)"})}re(()=>{s!=u?(D.setNewTab(1),a(1,_=!0)):(D.setNewTab(o),a(1,_=!1))});function h(f){X[f?"unshift":"push"](()=>{n=f,a(5,n)})}return l.$$set=f=>{"pathname"in f&&a(0,s=f.pathname)},l.$$.update=()=>{l.$$.dirty&3&&a(6,t=s.includes("/projects")&&_)},[s,_,r,c,o,n,t,i,h]}class Se extends M{constructor(e){super(),B(this,e,Ne,Ae,S,{pathname:0})}}function q(l){let e,a,t,s,r=l[3],c,o;t=new Se({props:{pathname:l[3]}});let u=H(l);return{c(){e=v("div"),a=v("header"),J(t.$$.fragment),s=j(),u.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var _=k(e);a=y(_,"HEADER",{class:!0});var i=k(a);K(t.$$.fragment,i),i.forEach(d),s=C(_),u.l(_),_.forEach(d),this.h()},h(){p(a,"class","nav-bar svelte-1blfl4o"),p(e,"class","page svelte-1blfl4o")},m(n,_){T(n,e,_),E(e,a),Q(t,a,null),E(e,s),u.m(e,null),o=!0},p(n,_){const i={};_&8&&(i.pathname=n[3]),t.$set(i),_&8&&S(r,r=n[3])?(I(),w(u,1,1,L),V(),u=H(n),u.c(),b(u,1),u.m(e,null)):u.p(n,_)},i(n){o||(b(t.$$.fragment,n),b(u),n&&(c||G(()=>{c=Z(e,x,{duration:250}),c.start()})),o=!0)},o(n){w(t.$$.fragment,n),w(u),o=!1},d(n){n&&d(e),Y(t),u.d(n)}}}function H(l){let e,a,t,s;const r=l[7].default,c=oe(r,l,l[6],null);return{c(){e=v("main"),c&&c.c(),this.h()},l(o){e=y(o,"MAIN",{class:!0});var u=k(e);c&&c.l(u),u.forEach(d),this.h()},h(){p(e,"class","flow svelte-1blfl4o")},m(o,u){T(o,e,u),c&&c.m(e,null),s=!0},p(o,u){l=o,c&&c.p&&(!s||u&64)&&fe(c,r,l,l[6],s?ue(r,l[6],u,null):ce(l[6]),null)},i(o){s||(b(c,o),o&&G(()=>{s&&(t&&t.end(1),a=Z(e,de,{x:l[2],duration:l[1],delay:je,easing:he}),a.start())}),s=!0)},o(o){w(c,o),a&&a.invalidate(),o&&(t=_e(e,x,{duration:250,delay:0})),s=!1},d(o){o&&d(e),c&&c.d(o),o&&t&&t.end()}}}function De(l){let e,a,t=l[0]&&q(l);return{c(){t&&t.c(),e=z()},l(s){t&&t.l(s),e=z()},m(s,r){t&&t.m(s,r),T(s,e,r),a=!0},p(s,[r]){s[0]?t?(t.p(s,r),r&1&&b(t,1)):(t=q(s),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(I(),w(t,1,1,()=>{t=null}),V())},i(s){a||(b(t),a=!0)},o(s){w(t),a=!1},d(s){s&&d(e),t&&t.d(s)}}}const Le=18,R=550,je=300;function Ce(l,e,a){let t,s,r,c;ie(l,be,i=>a(5,c=i));let{$$slots:o={},$$scope:u}=e,{data:n}=e,_=!1;return W(async()=>{a(0,_=!0),me.setFallback(await ge()),pe.setTemperature(await ve())}),l.$$set=i=>{"data"in i&&a(4,n=i.data),"$$scope"in i&&a(6,u=i.$$scope)},l.$$.update=()=>{l.$$.dirty&16&&a(3,t=n.pathname),l.$$.dirty&32&&a(2,s=Le*c),l.$$.dirty&32&&a(1,r=R+R*Math.abs(1-Math.abs(c))*.15)},[_,r,s,t,n,c,u,o]}class Pe extends M{constructor(e){super(),B(this,e,Ce,De,S,{data:4})}}export{Pe as component,Fe as universal};