var W=Object.defineProperty;var O=(t,e,n)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(O(t,typeof e!="symbol"?e+"":e,n),n);function F(){}const at=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function ut(){return Object.create(null)}function J(t){t.forEach(I)}function ft(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function _t(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ht(t){return Object.keys(t).length===0}function K(t,...e){if(t==null){for(const i of e)i(void 0);return F}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mt(t,e,n){t.$$.on_destroy.push(K(e,n))}function pt(t,e,n,i){if(t){const s=L(t,e,n,i);return t[0](s)}}function L(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function yt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function bt(t,e,n,i,s,c){if(s){const r=L(e,n,i,c);t.p(r,s)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function xt(t){const e={};for(const n in t)e[n]=!0;return e}function wt(t){return t??""}function Et(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let g=!1;function vt(){g=!0}function Nt(){g=!1}function Q(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:Q(1,s,R=>e[n[R]].claim_order,a))-1;i[l]=n[u]+1;const k=u+1;n[k]=l,s=Math.max(k,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[l],u)}}function S(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Tt(t){const e=x("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return S(t.head||t,e),e.sheet}function Y(t,e){if(g){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){g&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function kt(){return A(" ")}function Mt(){return A("")}function M(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t){return t.dataset.svelteH}function Lt(t){return t===""?null:+t}function St(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,s=!1){P(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function q(t,e,n,i){return z(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function jt(t,e,n){return q(t,e,n,x)}function Pt(t,e,n){return q(t,e,n,j)}function tt(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function zt(t){return tt(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function qt(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new D(e);P(t);const s=t.splice(n,i-n+1);y(s[0]),y(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(e,c)}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Rt(t,e){t.value=e??""}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let p;function et(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function Ot(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=x("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=et();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=M(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=M(i.contentWindow,"resize",e),e()}),S(t,i),()=>{(s||c&&i.contentWindow)&&c(),y(i)}}function Ft(t,e,n){t.classList.toggle(e,!!n)}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Gt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class it{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=x(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class D extends it{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function It(t,e){return new t(e)}let b;function E(t){b=t}function w(){if(!b)throw new Error("Function called outside component initialization");return b}function Jt(t){w().$$.on_mount.push(t)}function Kt(t){w().$$.after_update.push(t)}function Qt(t){w().$$.on_destroy.push(t)}function Ut(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=nt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Vt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],H=[];let _=[];const N=[],B=Promise.resolve();let T=!1;function st(){T||(T=!0,B.then(ct))}function Xt(){return st(),B}function rt(t){_.push(t)}function Yt(t){N.push(t)}const v=new Set;let d=0;function ct(){if(d!==0)return;const t=b;do{try{for(;d<h.length;){const e=h[d];d++,E(e),lt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(E(null),h.length=0,d=0;H.length;)H.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];v.has(n)||(v.add(n),n())}_.length=0}while(h.length);for(;N.length;)N.pop()();T=!1,v.clear(),E(t)}function lt(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}function Zt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{V as $,pt as A,bt as B,gt as C,yt as D,Gt as E,M as F,Ht as G,Ot as H,j as I,Pt as J,G as K,D as L,qt as M,wt as N,J as O,_t as P,Et as Q,at as R,K as S,ft as T,Yt as U,Rt as V,Lt as W,xt as X,Qt as Y,Vt as Z,Ct as _,kt as a,Tt as a0,nt as a1,ut as a2,ct as a3,ht as a4,Zt as a5,b as a6,E as a7,I as a8,h as a9,st as aa,vt as ab,Nt as ac,Kt as b,zt as c,y as d,Mt as e,x as f,jt as g,St as h,$ as i,Dt as j,Wt as k,A as l,tt as m,Bt as n,Jt as o,H as p,It as q,Ft as r,dt as s,Xt as t,Y as u,F as v,Ut as w,At as x,mt as y,rt as z};
