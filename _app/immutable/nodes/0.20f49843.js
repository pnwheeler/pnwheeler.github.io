import{s as S,f as v,l as te,g as y,h as k,m as ae,d,j as p,r as I,i as T,u as E,n as se,v as D,w as le,o as W,p as X,a as N,c as j,k as g,x as ne,b as re,e as P,y as ie,z as G,A as oe,B as fe,C as ce,D as ue}from"../chunks/scheduler.6d6d93c7.js";import{S as C,i as M,a as b,g as z,c as B,t as w,b as J,d as K,m as Q,e as Y,f as Z,h as _e}from"../chunks/index.15fe4709.js";import{b as he,f as de,a as x}from"../chunks/index.476a6e1c.js";import{t as L,u as me,a as pe,d as be}from"../chunks/stores.8130cd92.js";import{g as ge,a as ve}from"../chunks/utils.f0ccaf0a.js";import{e as V}from"../chunks/each.e59479a4.js";const ye=({url:s})=>{const{pathname:e}=s;return{pathname:e}},ke=!0,Oe=Object.freeze(Object.defineProperty({__proto__:null,load:ye,prerender:ke},Symbol.toStringTag,{value:"Module"}));function we(s){let e,a,t;return{c(){e=v("li"),a=v("a"),t=te(s[2]),this.h()},l(l){e=y(l,"LI",{class:!0});var r=k(e);a=y(r,"A",{href:!0,class:!0});var c=k(a);t=ae(c,s[2]),c.forEach(d),r.forEach(d),this.h()},h(){p(a,"href",s[1]),p(a,"class","svelte-10y2zdn"),p(e,"class","svelte-10y2zdn"),I(e,"active",s[0])},m(l,r){T(l,e,r),E(e,a),E(a,t),s[5](e)},p(l,[r]){r&4&&se(t,l[2]),r&2&&p(a,"href",l[1]),r&1&&I(e,"active",l[0])},i:D,o:D,d(l){l&&d(e),s[5](null)}}}function Ee(s,e,a){const t=le();let{active:l=!1}=e,{id:r}=e,{href:c}=e,{title:o}=e,u=0,n=0,_;function i(){t("activeChanged",{width:u,left:n,path:c,id:r})}W(()=>{u=_.clientWidth,n=_.offsetLeft,l&&i()});function h(f){X[f?"unshift":"push"](()=>{_=f,a(3,_)})}return s.$$set=f=>{"active"in f&&a(0,l=f.active),"id"in f&&a(4,r=f.id),"href"in f&&a(1,c=f.href),"title"in f&&a(2,o=f.title)},s.$$.update=()=>{s.$$.dirty&1&&l&&i()},[l,c,o,_,r,h]}class Te extends C{constructor(e){super(),M(this,e,Ee,we,S,{active:0,id:4,href:1,title:2})}}const A=[{id:0,title:"home",href:"/"},{id:1,title:"projects",href:"/projects"},{id:2,title:"misc",href:"/other"}];function O(s,e,a){const t=s.slice();t[10]=e[a];const l=t[0]==t[10].href;return t[11]=l,t}function F(s){let e;return{c(){e=v("div"),this.h()},l(a){e=y(a,"DIV",{class:!0,style:!0});var t=k(e);t.forEach(d),this.h()},h(){p(e,"class","nested pseudo-border svelte-8a397w"),g(e,"--w",s[2]+"px"),g(e,"--l",s[3]+"px")},m(a,t){T(a,e,t)},p(a,t){t&4&&g(e,"--w",a[2]+"px"),t&8&&g(e,"--l",a[3]+"px")},d(a){a&&d(e)}}}function U(s){let e,a;return e=new Te({props:{active:s[11],id:s[10].id,href:s[10].href,title:s[10].title}}),e.$on("activeChanged",s[7]),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){Q(e,t,l),a=!0},p(t,l){const r={};l&1&&(r.active=t[11]),e.$set(r)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){Y(e,t)}}}function Ae(s){let e,a,t,l,r,c,o=s[6]&&F(s),u=V(A),n=[];for(let i=0;i<u.length;i+=1)n[i]=U(O(s,u,i));const _=i=>w(n[i],1,1,()=>{n[i]=null});return{c(){e=v("nav"),o&&o.c(),a=N(),t=v("ul");for(let i=0;i<n.length;i+=1)n[i].c();l=N(),r=v("div"),this.h()},l(i){e=y(i,"NAV",{class:!0});var h=k(e);o&&o.l(h),a=j(h),t=y(h,"UL",{class:!0});var f=k(t);for(let m=0;m<n.length;m+=1)n[m].l(f);l=j(f),r=y(f,"DIV",{id:!0,style:!0,class:!0}),k(r).forEach(d),f.forEach(d),h.forEach(d),this.h()},h(){p(r,"id","bgtab"),g(r,"--w",s[2]+"px"),g(r,"--l",s[3]+"px"),g(r,"--br",(s[4]==0||s[4]==A.length-1?.5:2)+"rem"),p(r,"class","svelte-8a397w"),I(r,"notInPath",s[1]),p(t,"class","svelte-8a397w"),p(e,"class","nav pseudo-border isolate svelte-8a397w")},m(i,h){T(i,e,h),o&&o.m(e,null),E(e,a),E(e,t);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(t,null);E(t,l),E(t,r),s[8](r),c=!0},p(i,[h]){if(i[6]?o?o.p(i,h):(o=F(i),o.c(),o.m(e,a)):o&&(o.d(1),o=null),h&129){u=V(A);let f;for(f=0;f<u.length;f+=1){const m=O(i,u,f);n[f]?(n[f].p(m,h),b(n[f],1)):(n[f]=U(m),n[f].c(),b(n[f],1),n[f].m(t,l))}for(z(),f=u.length;f<n.length;f+=1)_(f);B()}(!c||h&4)&&g(r,"--w",i[2]+"px"),(!c||h&8)&&g(r,"--l",i[3]+"px"),(!c||h&16)&&g(r,"--br",(i[4]==0||i[4]==A.length-1?.5:2)+"rem"),(!c||h&2)&&I(r,"notInPath",i[1])},i(i){if(!c){for(let h=0;h<u.length;h+=1)b(n[h]);c=!0}},o(i){n=n.filter(Boolean);for(let h=0;h<n.length;h+=1)w(n[h]);c=!1},d(i){i&&d(e),o&&o.d(),ne(n,i),s[8](null)}}}function Ie(s,e,a){let t,{pathname:l}=e,r=0,c=0,o=0,u="",n,_=!1;function i(f){let m=f.detail;a(2,r=1.05*m.width);let $=m.width*.025;a(3,c=m.left-$),a(4,o=m.id),L.setNewTab(o),u=m.path;const ee=[{width:`${r}px`},{transform:`translate(${c}px, 0)`}];n.animate(ee,{duration:325,fill:"forwards",easing:"cubic-bezier(0.34, 1.56, 0.69, .9)"})}re(()=>{l!=u?a(1,_=!0):(L.setNewTab(o),a(1,_=!1))});function h(f){X[f?"unshift":"push"](()=>{n=f,a(5,n)})}return s.$$set=f=>{"pathname"in f&&a(0,l=f.pathname)},s.$$.update=()=>{s.$$.dirty&3&&a(6,t=l.includes("/projects")&&_)},[l,_,r,c,o,n,t,i,h]}class Se extends C{constructor(e){super(),M(this,e,Ie,Ae,S,{pathname:0})}}function q(s){let e,a,t,l,r=s[3],c,o;t=new Se({props:{pathname:s[3]}});let u=H(s);return{c(){e=v("div"),a=v("header"),J(t.$$.fragment),l=N(),u.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var _=k(e);a=y(_,"HEADER",{class:!0});var i=k(a);K(t.$$.fragment,i),i.forEach(d),l=j(_),u.l(_),_.forEach(d),this.h()},h(){p(a,"class","nav-bar svelte-12d8lik"),p(e,"class","page svelte-12d8lik")},m(n,_){T(n,e,_),E(e,a),Q(t,a,null),E(e,l),u.m(e,null),o=!0},p(n,_){const i={};_&8&&(i.pathname=n[3]),t.$set(i),_&8&&S(r,r=n[3])?(z(),w(u,1,1,D),B(),u=H(n),u.c(),b(u,1),u.m(e,null)):u.p(n,_)},i(n){o||(b(t.$$.fragment,n),b(u),n&&(c||G(()=>{c=Z(e,x,{duration:250}),c.start()})),o=!0)},o(n){w(t.$$.fragment,n),w(u),o=!1},d(n){n&&d(e),Y(t),u.d(n)}}}function H(s){let e,a,t,l;const r=s[7].default,c=oe(r,s,s[6],null);return{c(){e=v("main"),c&&c.c(),this.h()},l(o){e=y(o,"MAIN",{class:!0});var u=k(e);c&&c.l(u),u.forEach(d),this.h()},h(){p(e,"class","flow svelte-12d8lik")},m(o,u){T(o,e,u),c&&c.m(e,null),l=!0},p(o,u){s=o,c&&c.p&&(!l||u&64)&&fe(c,r,s,s[6],l?ue(r,s[6],u,null):ce(s[6]),null)},i(o){l||(b(c,o),o&&G(()=>{l&&(t&&t.end(1),a=Z(e,de,{x:s[2],duration:s[1],delay:je,easing:he}),a.start())}),l=!0)},o(o){w(c,o),a&&a.invalidate(),o&&(t=_e(e,x,{duration:250,delay:0})),l=!1},d(o){o&&d(e),c&&c.d(o),o&&t&&t.end()}}}function De(s){let e,a,t=s[0]&&q(s);return{c(){t&&t.c(),e=P()},l(l){t&&t.l(l),e=P()},m(l,r){t&&t.m(l,r),T(l,e,r),a=!0},p(l,[r]){l[0]?t?(t.p(l,r),r&1&&b(t,1)):(t=q(l),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),w(t,1,1,()=>{t=null}),B())},i(l){a||(b(t),a=!0)},o(l){w(t),a=!1},d(l){l&&d(e),t&&t.d(l)}}}const Ne=18,R=550,je=300;function Ce(s,e,a){let t,l,r,c;ie(s,be,i=>a(5,c=i));let{$$slots:o={},$$scope:u}=e,{data:n}=e,_=!1;return W(async()=>{a(0,_=!0),me.setFallback(await ge()),pe.setTemperature(await ve())}),s.$$set=i=>{"data"in i&&a(4,n=i.data),"$$scope"in i&&a(6,u=i.$$scope)},s.$$.update=()=>{s.$$.dirty&16&&a(3,t=n.pathname),s.$$.dirty&32&&a(2,l=Ne*c),s.$$.dirty&32&&a(1,r=R+R*Math.abs(1-Math.abs(c))*.15)},[_,r,l,t,n,c,u,o]}class Fe extends C{constructor(e){super(),M(this,e,Ce,De,S,{data:4})}}export{Fe as component,Oe as universal};
