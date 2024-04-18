import{s as D,f as v,l as x,g as y,h as k,m as $,d,j as p,r as A,i as I,u as E,n as ee,v as N,w as te,o as W,p as X,a as T,c as j,k as b,x as ae,b as le,e as L,y as se,z as ne,A as ie,B as re,C as oe,D as fe}from"../chunks/scheduler.bbcb3fe0.js";import{S as C,i as M,a as g,g as B,c as P,t as w,b as G,d as J,m as K,e as Q,f as ce,h as ue}from"../chunks/index.303e8b5d.js";import{b as he,f as _e,a as de}from"../chunks/index.3444d5de.js";import{t as V,u as me,d as pe}from"../chunks/stores.a7c21128.js";import{g as ge}from"../chunks/utils.95777769.js";import{e as z}from"../chunks/each.e59479a4.js";const be=({url:l})=>{const{pathname:e}=l;return{pathname:e}},ve=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,load:be,prerender:ve},Symbol.toStringTag,{value:"Module"}));function ye(l){let e,a,t;return{c(){e=v("li"),a=v("a"),t=x(l[2]),this.h()},l(s){e=y(s,"LI",{class:!0});var i=k(e);a=y(i,"A",{href:!0,class:!0});var f=k(a);t=$(f,l[2]),f.forEach(d),i.forEach(d),this.h()},h(){p(a,"href",l[1]),p(a,"class","svelte-2ed2u3"),p(e,"class","svelte-2ed2u3"),A(e,"active",l[0])},m(s,i){I(s,e,i),E(e,a),E(a,t),l[5](e)},p(s,[i]){i&4&&ee(t,s[2]),i&2&&p(a,"href",s[1]),i&1&&A(e,"active",s[0])},i:N,o:N,d(s){s&&d(e),l[5](null)}}}function ke(l,e,a){const t=te();let{active:s=!1}=e,{id:i}=e,{href:f}=e,{title:n}=e,u=0,r=0,_;function c(){t("activeChanged",{width:u,left:r,path:f,id:i})}W(()=>{u=_.clientWidth,r=_.offsetLeft,s&&c()});function h(o){X[o?"unshift":"push"](()=>{_=o,a(3,_)})}return l.$$set=o=>{"active"in o&&a(0,s=o.active),"id"in o&&a(4,i=o.id),"href"in o&&a(1,f=o.href),"title"in o&&a(2,n=o.title)},l.$$.update=()=>{l.$$.dirty&1&&s&&c()},[s,f,n,_,i,h]}class we extends C{constructor(e){super(),M(this,e,ke,ye,D,{active:0,id:4,href:1,title:2})}}const S=[{id:0,title:"home",href:"/"},{id:1,title:"projects",href:"/projects"},{id:2,title:"misc",href:"/other"}];function O(l,e,a){const t=l.slice();t[10]=e[a];const s=t[0]==t[10].href;return t[11]=s,t}function F(l){let e;return{c(){e=v("div"),this.h()},l(a){e=y(a,"DIV",{class:!0,style:!0});var t=k(e);t.forEach(d),this.h()},h(){p(e,"class","nested pseudo-border svelte-ty3gy3"),b(e,"--w",l[2]+"px"),b(e,"--l",l[3]+"px")},m(a,t){I(a,e,t)},p(a,t){t&4&&b(e,"--w",a[2]+"px"),t&8&&b(e,"--l",a[3]+"px")},d(a){a&&d(e)}}}function U(l){let e,a;return e=new we({props:{active:l[11],id:l[10].id,href:l[10].href,title:l[10].title}}),e.$on("activeChanged",l[7]),{c(){G(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,s){const i={};s&1&&(i.active=t[11]),e.$set(i)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){Q(e,t)}}}function Ee(l){let e,a,t,s,i,f,n=l[6]&&F(l),u=z(S),r=[];for(let c=0;c<u.length;c+=1)r[c]=U(O(l,u,c));const _=c=>w(r[c],1,1,()=>{r[c]=null});return{c(){e=v("nav"),n&&n.c(),a=T(),t=v("ul");for(let c=0;c<r.length;c+=1)r[c].c();s=T(),i=v("div"),this.h()},l(c){e=y(c,"NAV",{class:!0});var h=k(e);n&&n.l(h),a=j(h),t=y(h,"UL",{class:!0});var o=k(t);for(let m=0;m<r.length;m+=1)r[m].l(o);s=j(o),i=y(o,"DIV",{id:!0,style:!0,class:!0}),k(i).forEach(d),o.forEach(d),h.forEach(d),this.h()},h(){p(i,"id","bgtab"),b(i,"--w",l[2]+"px"),b(i,"--l",l[3]+"px"),b(i,"--br",(l[4]==0||l[4]==S.length-1?.5:2)+"rem"),p(i,"class","svelte-ty3gy3"),A(i,"notInPath",l[1]),p(t,"class","svelte-ty3gy3"),p(e,"class","nav pseudo-border svelte-ty3gy3")},m(c,h){I(c,e,h),n&&n.m(e,null),E(e,a),E(e,t);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);E(t,s),E(t,i),l[8](i),f=!0},p(c,[h]){if(c[6]?n?n.p(c,h):(n=F(c),n.c(),n.m(e,a)):n&&(n.d(1),n=null),h&129){u=z(S);let o;for(o=0;o<u.length;o+=1){const m=O(c,u,o);r[o]?(r[o].p(m,h),g(r[o],1)):(r[o]=U(m),r[o].c(),g(r[o],1),r[o].m(t,s))}for(B(),o=u.length;o<r.length;o+=1)_(o);P()}(!f||h&4)&&b(i,"--w",c[2]+"px"),(!f||h&8)&&b(i,"--l",c[3]+"px"),(!f||h&16)&&b(i,"--br",(c[4]==0||c[4]==S.length-1?.5:2)+"rem"),(!f||h&2)&&A(i,"notInPath",c[1])},i(c){if(!f){for(let h=0;h<u.length;h+=1)g(r[h]);f=!0}},o(c){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)w(r[h]);f=!1},d(c){c&&d(e),n&&n.d(),ae(r,c),l[8](null)}}}function Ae(l,e,a){let t,{pathname:s}=e,i=0,f=0,n=0,u="",r,_=!1;function c(o){let m=o.detail;a(2,i=1.05*m.width);let Y=m.width*.025;a(3,f=m.left-Y),a(4,n=m.id),V.setNewTab(n),u=m.path;const Z=[{width:`${i}px`},{transform:`translate(${f}px, 0)`}];r.animate(Z,{duration:325,fill:"forwards",easing:"cubic-bezier(0.34, 1.56, 0.69, .9)"})}le(()=>{s!=u?a(1,_=!0):(V.setNewTab(n),a(1,_=!1))});function h(o){X[o?"unshift":"push"](()=>{r=o,a(5,r)})}return l.$$set=o=>{"pathname"in o&&a(0,s=o.pathname)},l.$$.update=()=>{l.$$.dirty&3&&a(6,t=s.includes("/projects")&&_)},[s,_,i,f,n,r,t,c,h]}class Ie extends C{constructor(e){super(),M(this,e,Ae,Ee,D,{pathname:0})}}function q(l){let e,a,t,s,i=l[3],f;t=new Ie({props:{pathname:l[3]}});let n=H(l);return{c(){e=v("div"),a=v("header"),G(t.$$.fragment),s=T(),n.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var r=k(e);a=y(r,"HEADER",{class:!0});var _=k(a);J(t.$$.fragment,_),_.forEach(d),s=j(r),n.l(r),r.forEach(d),this.h()},h(){p(a,"class","nav-bar svelte-16i1f5d"),p(e,"class","page svelte-16i1f5d"),A(e,"ready",l[0])},m(u,r){I(u,e,r),E(e,a),K(t,a,null),E(e,s),n.m(e,null),f=!0},p(u,r){const _={};r&8&&(_.pathname=u[3]),t.$set(_),r&8&&D(i,i=u[3])?(B(),w(n,1,1,N),P(),n=H(u),n.c(),g(n,1),n.m(e,null)):n.p(u,r),(!f||r&1)&&A(e,"ready",u[0])},i(u){f||(g(t.$$.fragment,u),g(n),f=!0)},o(u){w(t.$$.fragment,u),w(n),f=!1},d(u){u&&d(e),Q(t),n.d(u)}}}function H(l){let e,a,t,s;const i=l[7].default,f=ne(i,l,l[6],null);return{c(){e=v("main"),f&&f.c(),this.h()},l(n){e=y(n,"MAIN",{class:!0});var u=k(e);f&&f.l(u),u.forEach(d),this.h()},h(){p(e,"class","flow svelte-16i1f5d")},m(n,u){I(n,e,u),f&&f.m(e,null),s=!0},p(n,u){l=n,f&&f.p&&(!s||u&64)&&ie(f,i,l,l[6],s?oe(i,l[6],u,null):re(l[6]),null)},i(n){s||(g(f,n),n&&fe(()=>{s&&(t&&t.end(1),a=ce(e,_e,{x:l[2],duration:l[1],delay:Ne,easing:he}),a.start())}),s=!0)},o(n){w(f,n),a&&a.invalidate(),n&&(t=ue(e,de,{duration:250,delay:0})),s=!1},d(n){n&&d(e),f&&f.d(n),n&&t&&t.end()}}}function Se(l){let e,a,t=l[0]&&q(l);return{c(){t&&t.c(),e=L()},l(s){t&&t.l(s),e=L()},m(s,i){t&&t.m(s,i),I(s,e,i),a=!0},p(s,[i]){s[0]?t?(t.p(s,i),i&1&&g(t,1)):(t=q(s),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(B(),w(t,1,1,()=>{t=null}),P())},i(s){a||(g(t),a=!0)},o(s){w(t),a=!1},d(s){s&&d(e),t&&t.d(s)}}}const De=18,R=550,Ne=300;function Te(l,e,a){let t,s,i,f;se(l,pe,c=>a(5,f=c));let{$$slots:n={},$$scope:u}=e,{data:r}=e,_=!1;return W(async()=>{me.setFallback(await ge()),a(0,_=!0)}),l.$$set=c=>{"data"in c&&a(4,r=c.data),"$$scope"in c&&a(6,u=c.$$scope)},l.$$.update=()=>{l.$$.dirty&16&&a(3,t=r.pathname),l.$$.dirty&32&&a(2,s=De*f),l.$$.dirty&32&&a(1,i=R+R*Math.abs(1-Math.abs(f))*.15)},[_,i,s,t,r,f,u,n]}class ze extends C{constructor(e){super(),M(this,e,Te,Se,D,{data:4})}}export{ze as component,Ve as universal};
