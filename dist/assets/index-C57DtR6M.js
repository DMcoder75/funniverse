(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var fd={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function rS(){if(V0)return Ho;V0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var k0;function sS(){return k0||(k0=1,fd.exports=rS()),fd.exports}var Vt=sS(),dd={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function oS(){if(X0)return he;X0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=x&&C[x]||C["@@iterator"],typeof C=="function"?C:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function v(C,K,ht){this.props=C,this.context=K,this.refs=b,this.updater=ht||S}v.prototype.isReactComponent={},v.prototype.setState=function(C,K){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,K,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=v.prototype;function O(C,K,ht){this.props=C,this.context=K,this.refs=b,this.updater=ht||S}var U=O.prototype=new _;U.constructor=O,E(U,v.prototype),U.isPureReactComponent=!0;var w=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function V(C,K,ht,gt,Et,$){return ht=$.ref,{$$typeof:s,type:C,key:K,ref:ht!==void 0?ht:null,props:$}}function F(C,K){return V(C.type,K,void 0,void 0,void 0,C.props)}function D(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function N(C){var K={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ht){return K[ht]})}var H=/\/+/g;function at(C,K){return typeof C=="object"&&C!==null&&C.key!=null?N(""+C.key):K.toString(36)}function st(){}function ct(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(st,st):(C.status="pending",C.then(function(K){C.status==="pending"&&(C.status="fulfilled",C.value=K)},function(K){C.status==="pending"&&(C.status="rejected",C.reason=K)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function it(C,K,ht,gt,Et){var $=typeof C;($==="undefined"||$==="boolean")&&(C=null);var ft=!1;if(C===null)ft=!0;else switch($){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(C.$$typeof){case s:case t:ft=!0;break;case g:return ft=C._init,it(ft(C._payload),K,ht,gt,Et)}}if(ft)return Et=Et(C),ft=gt===""?"."+at(C,0):gt,w(Et)?(ht="",ft!=null&&(ht=ft.replace(H,"$&/")+"/"),it(Et,K,ht,"",function(Bt){return Bt})):Et!=null&&(D(Et)&&(Et=F(Et,ht+(Et.key==null||C&&C.key===Et.key?"":(""+Et.key).replace(H,"$&/")+"/")+ft)),K.push(Et)),1;ft=0;var pt=gt===""?".":gt+":";if(w(C))for(var xt=0;xt<C.length;xt++)gt=C[xt],$=pt+at(gt,xt),ft+=it(gt,K,ht,$,Et);else if(xt=y(C),typeof xt=="function")for(C=xt.call(C),xt=0;!(gt=C.next()).done;)gt=gt.value,$=pt+at(gt,xt++),ft+=it(gt,K,ht,$,Et);else if($==="object"){if(typeof C.then=="function")return it(ct(C),K,ht,gt,Et);throw K=String(C),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ft}function P(C,K,ht){if(C==null)return C;var gt=[],Et=0;return it(C,gt,"","",function($){return K.call(ht,$,Et++)}),gt}function W(C){if(C._status===-1){var K=C._result;K=K(),K.then(function(ht){(C._status===0||C._status===-1)&&(C._status=1,C._result=ht)},function(ht){(C._status===0||C._status===-1)&&(C._status=2,C._result=ht)}),C._status===-1&&(C._status=0,C._result=K)}if(C._status===1)return C._result.default;throw C._result}var G=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function vt(){}return he.Children={map:P,forEach:function(C,K,ht){P(C,function(){K.apply(this,arguments)},ht)},count:function(C){var K=0;return P(C,function(){K++}),K},toArray:function(C){return P(C,function(K){return K})||[]},only:function(C){if(!D(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},he.Component=v,he.Fragment=i,he.Profiler=l,he.PureComponent=O,he.StrictMode=r,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,he.__COMPILER_RUNTIME={__proto__:null,c:function(C){return L.H.useMemoCache(C)}},he.cache=function(C){return function(){return C.apply(null,arguments)}},he.cloneElement=function(C,K,ht){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var gt=E({},C.props),Et=C.key,$=void 0;if(K!=null)for(ft in K.ref!==void 0&&($=void 0),K.key!==void 0&&(Et=""+K.key),K)!I.call(K,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&K.ref===void 0||(gt[ft]=K[ft]);var ft=arguments.length-2;if(ft===1)gt.children=ht;else if(1<ft){for(var pt=Array(ft),xt=0;xt<ft;xt++)pt[xt]=arguments[xt+2];gt.children=pt}return V(C.type,Et,void 0,void 0,$,gt)},he.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},he.createElement=function(C,K,ht){var gt,Et={},$=null;if(K!=null)for(gt in K.key!==void 0&&($=""+K.key),K)I.call(K,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(Et[gt]=K[gt]);var ft=arguments.length-2;if(ft===1)Et.children=ht;else if(1<ft){for(var pt=Array(ft),xt=0;xt<ft;xt++)pt[xt]=arguments[xt+2];Et.children=pt}if(C&&C.defaultProps)for(gt in ft=C.defaultProps,ft)Et[gt]===void 0&&(Et[gt]=ft[gt]);return V(C,$,void 0,void 0,null,Et)},he.createRef=function(){return{current:null}},he.forwardRef=function(C){return{$$typeof:h,render:C}},he.isValidElement=D,he.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:W}},he.memo=function(C,K){return{$$typeof:p,type:C,compare:K===void 0?null:K}},he.startTransition=function(C){var K=L.T,ht={};L.T=ht;try{var gt=C(),Et=L.S;Et!==null&&Et(ht,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(vt,G)}catch($){G($)}finally{L.T=K}},he.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},he.use=function(C){return L.H.use(C)},he.useActionState=function(C,K,ht){return L.H.useActionState(C,K,ht)},he.useCallback=function(C,K){return L.H.useCallback(C,K)},he.useContext=function(C){return L.H.useContext(C)},he.useDebugValue=function(){},he.useDeferredValue=function(C,K){return L.H.useDeferredValue(C,K)},he.useEffect=function(C,K,ht){var gt=L.H;if(typeof ht=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(C,K)},he.useId=function(){return L.H.useId()},he.useImperativeHandle=function(C,K,ht){return L.H.useImperativeHandle(C,K,ht)},he.useInsertionEffect=function(C,K){return L.H.useInsertionEffect(C,K)},he.useLayoutEffect=function(C,K){return L.H.useLayoutEffect(C,K)},he.useMemo=function(C,K){return L.H.useMemo(C,K)},he.useOptimistic=function(C,K){return L.H.useOptimistic(C,K)},he.useReducer=function(C,K,ht){return L.H.useReducer(C,K,ht)},he.useRef=function(C){return L.H.useRef(C)},he.useState=function(C){return L.H.useState(C)},he.useSyncExternalStore=function(C,K,ht){return L.H.useSyncExternalStore(C,K,ht)},he.useTransition=function(){return L.H.useTransition()},he.version="19.1.0",he}var W0;function jh(){return W0||(W0=1,dd.exports=oS()),dd.exports}var ne=jh(),hd={exports:{}},Go={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function lS(){return q0||(q0=1,function(s){function t(P,W){var G=P.length;P.push(W);t:for(;0<G;){var vt=G-1>>>1,C=P[vt];if(0<l(C,W))P[vt]=W,P[G]=C,G=vt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],G=P.pop();if(G!==W){P[0]=G;t:for(var vt=0,C=P.length,K=C>>>1;vt<K;){var ht=2*(vt+1)-1,gt=P[ht],Et=ht+1,$=P[Et];if(0>l(gt,G))Et<C&&0>l($,gt)?(P[vt]=$,P[Et]=G,vt=Et):(P[vt]=gt,P[ht]=G,vt=ht);else if(Et<C&&0>l($,G))P[vt]=$,P[Et]=G,vt=Et;else break t}}return W}function l(P,W){var G=P.sortIndex-W.sortIndex;return G!==0?G:P.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,x=null,y=3,S=!1,E=!1,b=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=P)r(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function L(P){if(b=!1,w(P),!E)if(i(m)!==null)E=!0,I||(I=!0,at());else{var W=i(p);W!==null&&it(L,W.startTime-P)}}var I=!1,V=-1,F=5,D=-1;function N(){return v?!0:!(s.unstable_now()-D<F)}function H(){if(v=!1,I){var P=s.unstable_now();D=P;var W=!0;try{t:{E=!1,b&&(b=!1,O(V),V=-1),S=!0;var G=y;try{e:{for(w(P),x=i(m);x!==null&&!(x.expirationTime>P&&N());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,y=x.priorityLevel;var C=vt(x.expirationTime<=P);if(P=s.unstable_now(),typeof C=="function"){x.callback=C,w(P),W=!0;break e}x===i(m)&&r(m),w(P)}else r(m);x=i(m)}if(x!==null)W=!0;else{var K=i(p);K!==null&&it(L,K.startTime-P),W=!1}}break t}finally{x=null,y=G,S=!1}W=void 0}}finally{W?at():I=!1}}}var at;if(typeof U=="function")at=function(){U(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ct=st.port2;st.port1.onmessage=H,at=function(){ct.postMessage(null)}}else at=function(){_(H,0)};function it(P,W){V=_(function(){P(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(P){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var G=y;y=W;try{return P()}finally{y=G}},s.unstable_requestPaint=function(){v=!0},s.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=y;y=P;try{return W()}finally{y=G}},s.unstable_scheduleCallback=function(P,W,G){var vt=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?vt+G:vt):G=vt,P){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=G+C,P={id:g++,callback:W,priorityLevel:P,startTime:G,expirationTime:C,sortIndex:-1},G>vt?(P.sortIndex=G,t(p,P),i(m)===null&&P===i(p)&&(b?(O(V),V=-1):b=!0,it(L,G-vt))):(P.sortIndex=C,t(m,P),E||S||(E=!0,I||(I=!0,at()))),P},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(P){var W=y;return function(){var G=y;y=W;try{return P.apply(this,arguments)}finally{y=G}}}}(md)),md}var Y0;function cS(){return Y0||(Y0=1,pd.exports=lS()),pd.exports}var gd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function uS(){if(j0)return On;j0=1;var s=jh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},On.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.1.0",On}var Z0;function fS(){if(Z0)return gd.exports;Z0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),gd.exports=uS(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function dS(){if(K0)return Go;K0=1;var s=cS(),t=jh(),i=fS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=d;break}if(A===o){M=!0,o=u,a=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===a){M=!0,a=d,o=u;break}if(A===o){M=!0,o=d,a=u;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case L:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case F:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var it=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},vt=[],C=-1;function K(e){return{current:e}}function ht(e){0>C||(e.current=vt[C],vt[C]=null,C--)}function gt(e,n){C++,vt[C]=e.current,e.current=n}var Et=K(null),$=K(null),ft=K(null),pt=K(null);function xt(e,n){switch(gt(ft,n),gt($,e),gt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?g0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=g0(n),e=_0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ht(Et),gt(Et,e)}function Bt(){ht(Et),ht($),ht(ft)}function Zt(e){e.memoizedState!==null&&gt(pt,e);var n=Et.current,a=_0(n,e.type);n!==a&&(gt($,e),gt(Et,a))}function Ce(e){$.current===e&&(ht(Et),ht($)),pt.current===e&&(ht(pt),Po._currentValue=G)}var bt=Object.prototype.hasOwnProperty,B=s.unstable_scheduleCallback,ie=s.unstable_cancelCallback,Ht=s.unstable_shouldYield,de=s.unstable_requestPaint,Ct=s.unstable_now,Ee=s.unstable_getCurrentPriorityLevel,It=s.unstable_ImmediatePriority,re=s.unstable_UserBlockingPriority,Fe=s.unstable_NormalPriority,De=s.unstable_LowPriority,z=s.unstable_IdlePriority,T=s.log,tt=s.unstable_setDisableYieldValue,dt=null,yt=null;function ut(e){if(typeof T=="function"&&tt(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(dt,e)}catch{}}var Ft=Math.clz32?Math.clz32:Jt,Dt=Math.log,Kt=Math.LN2;function Jt(e){return e>>>=0,e===0?32:31-(Dt(e)/Kt|0)|0}var Tt=256,Ot=4194304;function te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=te(o):(M&=A,M!==0?u=te(M):a||(a=A&~e,a!==0&&(u=te(a))))):(A=o&~d,A!==0?u=te(A):M!==0?u=te(M):a||(a=o&~e,a!==0&&(u=te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Rt(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Ut(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,k=e.expirationTimes,et=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-Ft(a),St=1<<mt;A[mt]=0,k[mt]=-1;var nt=et[mt];if(nt!==null)for(et[mt]=null,mt=0;mt<nt.length;mt++){var rt=nt[mt];rt!==null&&(rt.lane&=-536870913)}a&=~St}o!==0&&Mt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Mt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Yt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ue(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ue(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:z0(e.type))}function vi(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,en="__reactProps$"+pn,Ci="__reactContainer$"+pn,Ur="__reactEvents$"+pn,fl="__reactListeners$"+pn,Lr="__reactHandles$"+pn,qs="__reactResources$"+pn,Di="__reactMarker$"+pn;function Nr(e){delete e[mn],delete e[en],delete e[Ur],delete e[fl],delete e[Lr]}function ki(e){var n=e[mn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ci]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=S0(e);e!==null;){if(a=e[mn])return a;e=S0(e)}return n}e=a,a=e.parentNode}return null}function pa(e){if(e=e[mn]||e[Ci]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ma(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Di]=!0}var dl=new Set,hl={};function R(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(hl[e]=n,e=0;e<n.length;e++)dl.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Z={};function wt(e){return bt.call(Z,e)?!0:bt.call(lt,e)?!1:ot.test(e)?Z[e]=!0:(lt[e]=!0,!1)}function Nt(e,n,a){if(wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var ae,oe;function Qt(e){if(ae===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+oe}var ge=!1;function Le(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(rt){var nt=rt}Reflect.construct(e,[],St)}else{try{St.call()}catch(rt){nt=rt}e.call(St.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var k=M.split(`
`),et=A.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===et.length)for(o=k.length-1,u=et.length-1;1<=o&&0<=u&&k[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==et[u]){var mt=`
`+k[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Je(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Qt("Activity");default:return""}}function He(e){try{var n="";do n+=Je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=ee(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function be(e){e._valueTracker||(e._valueTracker=Ke(e))}function Un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ee(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hn=/[\n"\\]/g;function Sn(e){return e.replace(Hn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(e,n,a,o,u,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,M,_e(n)):a!=null?Ln(e,M,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Gn(e,n,a,o,u,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Ln(e,n,a){n==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function wn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Or(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(it(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function qn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var nx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||nx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _p(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&gp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&gp(e,d,n[d])}function cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var uu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function vp(e){var n=pa(e);if(n&&(e=n.stateNode)){var a=e[en]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ye(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[en]||null;if(!u)throw Error(r(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Un(o)}break t;case"textarea":wn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var du=!1;function xp(e,n,a){if(du)return e(n,a);du=!0;try{var o=e(n);return o}finally{if(du=!1,(Pr!==null||zr!==null)&&($l(),Pr&&(n=Pr,e=zr,zr=Pr=null,vp(n),e)))for(n=0;n<e.length;n++)vp(e[n])}}function Ys(e,n){var a=e.stateNode;if(a===null)return null;var o=a[en]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Xi)try{var js={};Object.defineProperty(js,"passive",{get:function(){hu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{hu=!1}var ga=null,pu=null,ml=null;function yp(){if(ml)return ml;var e,n=pu,a=n.length,o,u="value"in ga?ga.value:ga.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return ml=u.slice(e,1<o?1-o:void 0)}function gl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Sp(){return!1}function Yn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_l:Sp,this.isPropagationStopped=Sp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Yn($a),Zs=g({},$a,{view:0,detail:0}),rx=Yn(Zs),mu,gu,Ks,xl=g({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ks&&(Ks&&e.type==="mousemove"?(mu=e.screenX-Ks.screenX,gu=e.screenY-Ks.screenY):gu=mu=0,Ks=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),Mp=Yn(xl),sx=g({},xl,{dataTransfer:0}),ox=Yn(sx),lx=g({},Zs,{relatedTarget:0}),_u=Yn(lx),cx=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Yn(cx),fx=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dx=Yn(fx),hx=g({},$a,{data:0}),Ep=Yn(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gx[e])?!!n[e]:!1}function vu(){return _x}var vx=g({},Zs,{key:function(e){if(e.key){var n=px[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xx=Yn(vx),yx=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Yn(yx),Sx=g({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Mx=Yn(Sx),Ex=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=Yn(Ex),Tx=g({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Yn(Tx),wx=g({},$a,{newState:0,oldState:0}),Rx=Yn(wx),Cx=[9,13,27,32],xu=Xi&&"CompositionEvent"in window,Qs=null;Xi&&"documentMode"in document&&(Qs=document.documentMode);var Dx=Xi&&"TextEvent"in window&&!Qs,Tp=Xi&&(!xu||Qs&&8<Qs&&11>=Qs),Ap=" ",wp=!1;function Rp(e,n){switch(e){case"keyup":return Cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Ux(e,n){switch(e){case"compositionend":return Cp(n);case"keypress":return n.which!==32?null:(wp=!0,Ap);case"textInput":return e=n.data,e===Ap&&wp?null:e;default:return null}}function Lx(e,n){if(Br)return e==="compositionend"||!xu&&Rp(e,n)?(e=yp(),ml=pu=ga=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tp&&n.locale!=="ko"?null:n.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nx[e.type]:n==="textarea"}function Up(e,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=rc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Js=null,$s=null;function Ox(e){f0(e,0)}function yl(e){var n=Ja(e);if(Un(n))return e}function Lp(e,n){if(e==="change")return n}var Np=!1;if(Xi){var yu;if(Xi){var Su="oninput"in document;if(!Su){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Su=typeof Op.oninput=="function"}yu=Su}else yu=!1;Np=yu&&(!document.documentMode||9<document.documentMode)}function Pp(){Js&&(Js.detachEvent("onpropertychange",zp),$s=Js=null)}function zp(e){if(e.propertyName==="value"&&yl($s)){var n=[];Up(n,$s,e,fu(e)),xp(Ox,n)}}function Px(e,n,a){e==="focusin"?(Pp(),Js=n,$s=a,Js.attachEvent("onpropertychange",zp)):e==="focusout"&&Pp()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl($s)}function Bx(e,n){if(e==="click")return yl(n)}function Ix(e,n){if(e==="input"||e==="change")return yl(n)}function Fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:Fx;function to(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!bt.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,n){var a=Bp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bp(a)}}function Fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xi(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Hx=Xi&&"documentMode"in document&&11>=document.documentMode,Ir=null,Eu=null,eo=null,bu=!1;function Gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Ir==null||Ir!==xi(o)||(o=Ir,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&to(eo,o)||(eo=o,o=rc(Eu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ir)))}function tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},Tu={},Vp={};Xi&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function er(e){if(Tu[e])return Tu[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vp)return Tu[e]=n[a];return e}var kp=er("animationend"),Xp=er("animationiteration"),Wp=er("animationstart"),Gx=er("transitionrun"),Vx=er("transitionstart"),kx=er("transitioncancel"),qp=er("transitionend"),Yp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function yi(e,n){Yp.set(e,n),R(n,[e])}var jp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:He(n)},jp.set(e,n),n)}return{value:e,source:n,stack:He(n)}}var ci=[],Hr=0,wu=0;function Sl(){for(var e=Hr,n=wu=Hr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Zp(a,u,d)}}function Ml(e,n,a,o){ci[Hr++]=e,ci[Hr++]=n,ci[Hr++]=a,ci[Hr++]=o,wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ru(e,n,a,o){return Ml(e,n,a,o),El(e)}function Gr(e,n){return Ml(e,null,null,n),El(e)}function Zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(e){if(50<wo)throw wo=0,Pf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function Xx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new Xx(e,n,a,o)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Cu(e)&&(M=1);else if(typeof e=="string")M=qy(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=$n(31,a,n,u),e.elementType=D,e.lanes=d,e;case E:return nr(a.children,u,d,n);case b:M=8,u|=24;break;case v:return e=$n(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case L:return e=$n(13,a,n,u),e.elementType=L,e.lanes=d,e;case I:return e=$n(19,a,n,u),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case U:M=10;break t;case O:M=9;break t;case w:M=11;break t;case V:M=14;break t;case F:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function nr(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Du(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Uu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var kr=[],Xr=0,Tl=null,Al=0,ui=[],fi=0,ir=null,qi=1,Yi="";function ar(e,n){kr[Xr++]=Al,kr[Xr++]=Tl,Tl=e,Al=n}function Qp(e,n,a){ui[fi++]=qi,ui[fi++]=Yi,ui[fi++]=ir,ir=e;var o=qi;e=Yi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var d=32-Ft(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,qi=1<<32-Ft(n)+u|a<<u|o,Yi=d+e}else qi=1<<d|a<<u|o,Yi=e}function Lu(e){e.return!==null&&(ar(e,1),Qp(e,1,0))}function Nu(e){for(;e===Tl;)Tl=kr[--Xr],kr[Xr]=null,Al=kr[--Xr],kr[Xr]=null;for(;e===ir;)ir=ui[--fi],ui[fi]=null,Yi=ui[--fi],ui[fi]=null,qi=ui[--fi],ui[fi]=null}var Vn=null,an=null,Pe=!1,rr=null,Ui=!1,Ou=Error(r(519));function sr(e){var n=Error(r(418,""));throw ao(li(n,e)),Ou}function Jp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[mn]=e,n[en]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Ae(Co[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),be(n);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Or(n,o.value,o.defaultValue,o.children),be(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||m0(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=sc),n=!0):n=!1,n||sr(e)}function $p(e){for(Vn=e.return;Vn;)switch(Vn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vn=Vn.return}}function no(e){if(e!==Vn)return!1;if(!Pe)return $p(e),Pe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&an&&sr(e),$p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){an=Mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}an=null}}else n===27?(n=an,La(e.type)?(e=ed,ed=null,an=e):an=n):an=Vn?Mi(e.stateNode.nextSibling):null;return!0}function io(){an=Vn=null,Pe=!1}function tm(){var e=rr;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),rr=null),e}function ao(e){rr===null?rr=[e]:rr.push(e)}var Pu=K(null),or=null,ji=null;function _a(e,n,a){gt(Pu,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=Pu.current,ht(Pu)}function zu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var k=0;k<n.length;k++)if(A.context===n[k]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),zu(d.return,a,e),o||(M=null);break t}d=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),zu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function ro(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===pt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}u=u.return}e!==null&&Bu(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return em(or,e)}function Rl(e,n){return or===null&&lr(e),em(e,n)}function em(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var Wx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qx=s.unstable_scheduleCallback,Yx=s.unstable_NormalPriority,gn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Wx,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&qx(Yx,function(){e.controller.abort()})}var oo=null,Fu=0,Wr=0,qr=null;function jx(e,n){if(oo===null){var a=oo=[];Fu=0,Wr=Vf(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(nm,nm),n}function nm(){if(--Fu===0&&oo!==null){qr!==null&&(qr.status="fulfilled");var e=oo;oo=null,Wr=0,qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Zx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var im=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&jx(e,n),im!==null&&im(e,n)};var cr=K(null);function Hu(){var e=cr.current;return e!==null?e:Ze.pooledCache}function Cl(e,n){n===null?gt(cr,cr.current):gt(cr,n.pool)}function am(){var e=Hu();return e===null?null:{parent:gn._currentValue,pool:e}}var lo=Error(r(460)),rm=Error(r(474)),Dl=Error(r(542)),Gu={then:function(){}};function sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ul(){}function om(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ul,Ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cm(e),e;default:if(typeof n.status=="string")n.then(Ul,Ul);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cm(e),e}throw co=n,lo}}var co=null;function lm(){if(co===null)throw Error(r(459));var e=co;return co=null,e}function cm(e){if(e===lo||e===Dl)throw Error(r(483))}var va=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),Zp(e,null,a),n}return Ml(e,o,n,a),El(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}function Xu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Wu=!1;function fo(){if(Wu){var e=qr;if(e!==null)throw e}}function ho(e,n,a,o){Wu=!1;var u=e.updateQueue;va=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var k=A,et=k.next;k.next=null,M===null?d=et:M.next=et,M=k;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==M&&(A===null?mt.firstBaseUpdate=et:A.next=et,mt.lastBaseUpdate=k))}if(d!==null){var St=u.baseState;M=0,mt=et=k=null,A=d;do{var nt=A.lane&-536870913,rt=nt!==A.lane;if(rt?(Re&nt)===nt:(o&nt)===nt){nt!==0&&nt===Wr&&(Wu=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,se=A;nt=n;var ke=a;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){St=ce.call(ke,St,nt);break t}St=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,nt=typeof ce=="function"?ce.call(ke,St,nt):ce,nt==null)break t;St=g({},St,nt);break t;case 2:va=!0}}nt=A.callback,nt!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(et=mt=rt,k=St):mt=mt.next=rt,M|=nt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);mt===null&&(k=St),u.baseState=k,u.firstBaseUpdate=et,u.lastBaseUpdate=mt,d===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=St}}function um(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)um(a[e],n)}var Yr=K(null),Ll=K(0);function dm(e,n){e=na,gt(Ll,e),gt(Yr,n),na=e|n.baseLanes}function qu(){gt(Ll,na),gt(Yr,Yr.current)}function Yu(){na=Ll.current,ht(Yr),ht(Ll)}var Sa=0,ye=null,Ge=null,un=null,Nl=!1,jr=!1,ur=!1,Ol=0,po=0,Zr=null,Kx=0;function on(){throw Error(r(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Zu(e,n,a,o,u,d){return Sa=d,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Zm:Km,ur=!1,d=a(o,u),ur=!1,jr&&(d=pm(n,a,o,u)),hm(e),d}function hm(e){P.H=Hl;var n=Ge!==null&&Ge.next!==null;if(Sa=0,un=Ge=ye=null,Nl=!1,po=0,Zr=null,n)throw Error(r(300));e===null||Mn||(e=e.dependencies,e!==null&&wl(e)&&(Mn=!0))}function pm(e,n,a,o){ye=e;var u=0;do{if(jr&&(Zr=null),po=0,jr=!1,25<=u)throw Error(r(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=iy,d=n(a,o)}while(jr);return d}function Qx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ye.flags|=1024),n}function Ku(){var e=Ol!==0;return Ol=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ju(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}Sa=0,un=Ge=ye=null,jr=!1,po=Ol=0,Zr=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ye.memoizedState=un=e:un=un.next=e,un}function fn(){if(Ge===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?ye.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?ye.memoizedState=un=e:un=un.next=e}return un}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,Zr===null&&(Zr=[]),e=om(Zr,e,n),n=ye,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Zm:Km),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===U)return Nn(e)}throw Error(r(438,String(e)))}function tf(e){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$u(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=N;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=fn();return ef(n,Ge,e)}function ef(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=M=null,k=null,et=n,mt=!1;do{var St=et.lane&-536870913;if(St!==et.lane?(Re&St)===St:(Sa&St)===St){var nt=et.revertLane;if(nt===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),St===Wr&&(mt=!0);else if((Sa&nt)===nt){et=et.next,nt===Wr&&(mt=!0);continue}else St={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(A=k=St,M=d):k=k.next=St,ye.lanes|=nt,Ra|=nt;St=et.action,ur&&a(d,St),d=et.hasEagerState?et.eagerState:a(d,St)}else nt={lane:St,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(A=k=nt,M=d):k=k.next=nt,ye.lanes|=St,Ra|=St;et=et.next}while(et!==null&&et!==n);if(k===null?M=d:k.next=A,!Jn(d,e.memoizedState)&&(Mn=!0,mt&&(a=qr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nf(e){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Jn(d,n.memoizedState)||(Mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function mm(e,n,a){var o=ye,u=fn(),d=Pe;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Jn((Ge||u).memoizedState,a);M&&(u.memoizedState=a,Mn=!0),u=u.queue;var A=vm.bind(null,o,u,e);if(go(2048,8,A,[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Bl(),_m.bind(null,o,u,a,n),null),Ze===null)throw Error(r(349));d||(Sa&124)!==0||gm(o,n,a)}return a}function gm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=$u(),ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _m(e,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&ym(e)}function vm(e,n,a){return a(function(){xm(n)&&ym(e)})}function xm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function ym(e){var n=Gr(e,2);n!==null&&ai(n,e,2)}function af(e){var n=jn();if(typeof e=="function"){var a=e;if(e=a(),ur){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function Sm(e,n,a,o){return e.baseState=a,ef(e,Ge,typeof o=="function"?o:Ki)}function Jx(e,n,a,o,u){if(Fl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Mm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Mm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=P.T,M={};P.T=M;try{var A=a(u,o),k=P.S;k!==null&&k(M,A),Em(e,n,A)}catch(et){rf(e,n,et)}finally{P.T=d}}else try{d=a(u,o),Em(e,n,d)}catch(et){rf(e,n,et)}}function Em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(e,n,o)},function(o){return rf(e,n,o)}):bm(e,n,a)}function bm(e,n,a){n.status="fulfilled",n.value=a,Tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mm(e,a)))}function rf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==o)}e.action=null}function Tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Am(e,n){return n}function wm(e,n){if(Pe){var a=Ze.formState;if(a!==null){t:{var o=ye;if(Pe){if(an){e:{for(var u=an,d=Ui;u.nodeType!==8;){if(!d){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){an=Mi(u.nextSibling),o=u.data==="F!";break t}}sr(o)}o=!1}o&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=o,a=qm.bind(null,ye,o),o.dispatch=a,o=af(!1),d=uf.bind(null,ye,!1,o.queue),o=jn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Jx.bind(null,ye,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Rm(e){var n=fn();return Cm(n,Ge,e)}function Cm(e,n,a){if(n=ef(e,n,Am)[0],e=zl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(M){throw M===lo?Dl:M}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,Kr(9,Bl(),$x.bind(null,u,a),null)),[o,d,e]}function $x(e,n){e.action=n}function Dm(e){var n=fn(),a=Ge;if(a!==null)return Cm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Kr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ye.updateQueue,n===null&&(n=$u(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bl(){return{destroy:void 0,resource:void 0}}function Um(){return fn().memoizedState}function Il(e,n,a,o){var u=jn();o=o===void 0?null:o,ye.flags|=e,u.memoizedState=Kr(1|n,Bl(),a,o)}function go(e,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ge!==null&&o!==null&&ju(o,Ge.memoizedState.deps)?u.memoizedState=Kr(n,d,a,o):(ye.flags|=e,u.memoizedState=Kr(1|n,d,a,o))}function Lm(e,n){Il(8390656,8,e,n)}function Nm(e,n){go(2048,8,e,n)}function Om(e,n){return go(4,2,e,n)}function Pm(e,n){return go(4,4,e,n)}function zm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bm(e,n,a){a=a!=null?a.concat([e]):null,go(4,4,zm.bind(null,n,e),a)}function sf(){}function Im(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Fm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=e(),ur){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o}function of(e,n,a){return a===void 0||(Sa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Vg(),ye.lanes|=e,Ra|=e,a)}function Hm(e,n,a,o){return Jn(a,n)?a:Yr.current!==null?(e=of(e,a,o),Jn(e,n)||(Mn=!0),e):(Sa&42)===0?(Mn=!0,e.memoizedState=a):(e=Vg(),ye.lanes|=e,Ra|=e,n)}function Gm(e,n,a,o,u){var d=W.p;W.p=d!==0&&8>d?d:8;var M=P.T,A={};P.T=A,uf(e,!1,n,a);try{var k=u(),et=P.S;if(et!==null&&et(A,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var mt=Zx(k,o);_o(e,n,mt,ii(e))}else _o(e,n,o,ii(e))}catch(St){_o(e,n,{then:function(){},status:"rejected",reason:St},ii())}finally{W.p=d,P.T=M}}function ty(){}function lf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Vm(e).queue;Gm(e,u,n,G,a===null?ty:function(){return km(e),a(o)})}function Vm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function km(e){var n=Vm(e).next.queue;_o(e,n,{},ii())}function cf(){return Nn(Po)}function Xm(){return fn().memoizedState}function Wm(){return fn().memoizedState}function ey(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=xa(a);var o=ya(n,e,a);o!==null&&(ai(o,n,a),uo(o,n,a)),n={cache:Iu()},e.payload=n;return}n=n.return}}function ny(e,n,a){var o=ii();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?Ym(n,a):(a=Ru(e,n,a,o),a!==null&&(ai(a,e,o),jm(a,n,o)))}function qm(e,n,a){var o=ii();_o(e,n,a,o)}function _o(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))Ym(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,A=d(M,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,M))return Ml(e,n,u,0),Ze===null&&Sl(),!1}catch{}finally{}if(a=Ru(e,n,u,o),a!==null)return ai(a,e,o),jm(a,n,o),!0}return!1}function uf(e,n,a,o){if(o={lane:2,revertLane:Vf(),action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(r(479))}else n=Ru(e,a,o,2),n!==null&&ai(n,e,2)}function Fl(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function Ym(e,n){jr=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}var Hl={readContext:Nn,use:Pl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},Zm={readContext:Nn,use:Pl,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:Lm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,zm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=jn();n=n===void 0?null:n;var o=e();if(ur){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=jn();if(a!==void 0){var u=a(n);if(ur){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ny.bind(null,ye,e),[o.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=af(e);var n=e.queue,a=qm.bind(null,ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,n){var a=jn();return of(a,e,n)},useTransition:function(){var e=af(!1);return e=Gm.bind(null,ye,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ye,u=jn();if(Pe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Re&124)!==0||gm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Lm(vm.bind(null,o,d,e),[e]),o.flags|=2048,Kr(9,Bl(),_m.bind(null,o,d,a,n),null),a},useId:function(){var e=jn(),n=Ze.identifierPrefix;if(Pe){var a=Yi,o=qi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Kx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:wm,useActionState:wm,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:tf,useCacheRefresh:function(){return jn().memoizedState=ey.bind(null,ye)}},Km={readContext:Nn,use:Pl,useCallback:Im,useContext:Nn,useEffect:Nm,useImperativeHandle:Bm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Fm,useReducer:zl,useRef:Um,useState:function(){return zl(Ki)},useDebugValue:sf,useDeferredValue:function(e,n){var a=fn();return Hm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=zl(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:mm,useId:Xm,useHostTransitionStatus:cf,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,n){var a=fn();return Sm(a,Ge,e,n)},useMemoCache:tf,useCacheRefresh:Wm},iy={readContext:Nn,use:Pl,useCallback:Im,useContext:Nn,useEffect:Nm,useImperativeHandle:Bm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Fm,useReducer:nf,useRef:Um,useState:function(){return nf(Ki)},useDebugValue:sf,useDeferredValue:function(e,n){var a=fn();return Ge===null?of(a,e,n):Hm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=nf(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:mm,useId:Xm,useHostTransitionStatus:cf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,n){var a=fn();return Ge!==null?Sm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:Wm},Qr=null,vo=0;function Gl(e){var n=vo;return vo+=1,Qr===null&&(Qr=[]),om(Qr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qm(e){var n=e._init;return n(e._payload)}function Jm(e){function n(j,X){if(e){var J=j.deletions;J===null?(j.deletions=[X],j.flags|=16):J.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Wi(j,X),j.index=0,j.sibling=null,j}function d(j,X,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<X?(j.flags|=67108866,X):J):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,J,_t){return X===null||X.tag!==6?(X=Du(J,j.mode,_t),X.return=j,X):(X=u(X,J),X.return=j,X)}function k(j,X,J,_t){var Xt=J.type;return Xt===E?mt(j,X,J.props.children,_t,J.key):X!==null&&(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===F&&Qm(Xt)===X.type)?(X=u(X,J.props),xo(X,J),X.return=j,X):(X=bl(J.type,J.key,J.props,null,j.mode,_t),xo(X,J),X.return=j,X)}function et(j,X,J,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Uu(J,j.mode,_t),X.return=j,X):(X=u(X,J.children||[]),X.return=j,X)}function mt(j,X,J,_t,Xt){return X===null||X.tag!==7?(X=nr(J,j.mode,_t,Xt),X.return=j,X):(X=u(X,J),X.return=j,X)}function St(j,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Du(""+X,j.mode,J),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return J=bl(X.type,X.key,X.props,null,j.mode,J),xo(J,X),J.return=j,J;case S:return X=Uu(X,j.mode,J),X.return=j,X;case F:var _t=X._init;return X=_t(X._payload),St(j,X,J)}if(it(X)||at(X))return X=nr(X,j.mode,J,null),X.return=j,X;if(typeof X.then=="function")return St(j,Gl(X),J);if(X.$$typeof===U)return St(j,Rl(j,X),J);Vl(j,X)}return null}function nt(j,X,J,_t){var Xt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Xt!==null?null:A(j,X,""+J,_t);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Xt?k(j,X,J,_t):null;case S:return J.key===Xt?et(j,X,J,_t):null;case F:return Xt=J._init,J=Xt(J._payload),nt(j,X,J,_t)}if(it(J)||at(J))return Xt!==null?null:mt(j,X,J,_t,null);if(typeof J.then=="function")return nt(j,X,Gl(J),_t);if(J.$$typeof===U)return nt(j,X,Rl(j,J),_t);Vl(j,J)}return null}function rt(j,X,J,_t,Xt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get(J)||null,A(X,j,""+_t,Xt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return j=j.get(_t.key===null?J:_t.key)||null,k(X,j,_t,Xt);case S:return j=j.get(_t.key===null?J:_t.key)||null,et(X,j,_t,Xt);case F:var Me=_t._init;return _t=Me(_t._payload),rt(j,X,J,_t,Xt)}if(it(_t)||at(_t))return j=j.get(J)||null,mt(X,j,_t,Xt,null);if(typeof _t.then=="function")return rt(j,X,J,Gl(_t),Xt);if(_t.$$typeof===U)return rt(j,X,J,Rl(X,_t),Xt);Vl(X,_t)}return null}function ce(j,X,J,_t){for(var Xt=null,Me=null,$t=X,le=X=0,bn=null;$t!==null&&le<J.length;le++){$t.index>le?(bn=$t,$t=null):bn=$t.sibling;var Ne=nt(j,$t,J[le],_t);if(Ne===null){$t===null&&($t=bn);break}e&&$t&&Ne.alternate===null&&n(j,$t),X=d(Ne,X,le),Me===null?Xt=Ne:Me.sibling=Ne,Me=Ne,$t=bn}if(le===J.length)return a(j,$t),Pe&&ar(j,le),Xt;if($t===null){for(;le<J.length;le++)$t=St(j,J[le],_t),$t!==null&&(X=d($t,X,le),Me===null?Xt=$t:Me.sibling=$t,Me=$t);return Pe&&ar(j,le),Xt}for($t=o($t);le<J.length;le++)bn=rt($t,j,le,J[le],_t),bn!==null&&(e&&bn.alternate!==null&&$t.delete(bn.key===null?le:bn.key),X=d(bn,X,le),Me===null?Xt=bn:Me.sibling=bn,Me=bn);return e&&$t.forEach(function(Ba){return n(j,Ba)}),Pe&&ar(j,le),Xt}function se(j,X,J,_t){if(J==null)throw Error(r(151));for(var Xt=null,Me=null,$t=X,le=X=0,bn=null,Ne=J.next();$t!==null&&!Ne.done;le++,Ne=J.next()){$t.index>le?(bn=$t,$t=null):bn=$t.sibling;var Ba=nt(j,$t,Ne.value,_t);if(Ba===null){$t===null&&($t=bn);break}e&&$t&&Ba.alternate===null&&n(j,$t),X=d(Ba,X,le),Me===null?Xt=Ba:Me.sibling=Ba,Me=Ba,$t=bn}if(Ne.done)return a(j,$t),Pe&&ar(j,le),Xt;if($t===null){for(;!Ne.done;le++,Ne=J.next())Ne=St(j,Ne.value,_t),Ne!==null&&(X=d(Ne,X,le),Me===null?Xt=Ne:Me.sibling=Ne,Me=Ne);return Pe&&ar(j,le),Xt}for($t=o($t);!Ne.done;le++,Ne=J.next())Ne=rt($t,j,le,Ne.value,_t),Ne!==null&&(e&&Ne.alternate!==null&&$t.delete(Ne.key===null?le:Ne.key),X=d(Ne,X,le),Me===null?Xt=Ne:Me.sibling=Ne,Me=Ne);return e&&$t.forEach(function(aS){return n(j,aS)}),Pe&&ar(j,le),Xt}function ke(j,X,J,_t){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var Xt=J.key;X!==null;){if(X.key===Xt){if(Xt=J.type,Xt===E){if(X.tag===7){a(j,X.sibling),_t=u(X,J.props.children),_t.return=j,j=_t;break t}}else if(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===F&&Qm(Xt)===X.type){a(j,X.sibling),_t=u(X,J.props),xo(_t,J),_t.return=j,j=_t;break t}a(j,X);break}else n(j,X);X=X.sibling}J.type===E?(_t=nr(J.props.children,j.mode,_t,J.key),_t.return=j,j=_t):(_t=bl(J.type,J.key,J.props,null,j.mode,_t),xo(_t,J),_t.return=j,j=_t)}return M(j);case S:t:{for(Xt=J.key;X!==null;){if(X.key===Xt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(j,X.sibling),_t=u(X,J.children||[]),_t.return=j,j=_t;break t}else{a(j,X);break}else n(j,X);X=X.sibling}_t=Uu(J,j.mode,_t),_t.return=j,j=_t}return M(j);case F:return Xt=J._init,J=Xt(J._payload),ke(j,X,J,_t)}if(it(J))return ce(j,X,J,_t);if(at(J)){if(Xt=at(J),typeof Xt!="function")throw Error(r(150));return J=Xt.call(J),se(j,X,J,_t)}if(typeof J.then=="function")return ke(j,X,Gl(J),_t);if(J.$$typeof===U)return ke(j,X,Rl(j,J),_t);Vl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(j,X.sibling),_t=u(X,J),_t.return=j,j=_t):(a(j,X),_t=Du(J,j.mode,_t),_t.return=j,j=_t),M(j)):a(j,X)}return function(j,X,J,_t){try{vo=0;var Xt=ke(j,X,J,_t);return Qr=null,Xt}catch($t){if($t===lo||$t===Dl)throw $t;var Me=$n(29,$t,null,j.mode);return Me.lanes=_t,Me.return=j,Me}finally{}}}var Jr=Jm(!0),$m=Jm(!1),di=K(null),Li=null;function Ma(e){var n=e.alternate;gt(_n,_n.current&1),gt(di,e),Li===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(Li=e)}function tg(e){if(e.tag===22){if(gt(_n,_n.current),gt(di,e),Li===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Li=e)}}else Ea()}function Ea(){gt(_n,_n.current),gt(di,di.current)}function Qi(e){ht(di),Li===e&&(Li=null),ht(_n)}var _n=K(0);function kl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ff(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(ai(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(ai(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(ai(n,e,a),uo(n,e,a))}};function eg(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,d):!0}function ng(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function fr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ig(e){Xl(e)}function ag(e){console.error(e)}function rg(e){Xl(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function sg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function og(e){return e=xa(e),e.tag=3,e}function lg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){sg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){sg(n,a,o),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ay(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ro(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 13:return Li===null?Bf():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(e,o,u)),!1;case 22:return a.flags|=65536,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(e,o,u)),!1}throw Error(r(435,a.tag))}return Ff(e,o,u),Bf(),!1}if(Pe)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(e=Error(r(422),{cause:o}),ao(li(e,a)))):(o!==Ou&&(n=Error(r(423),{cause:o}),ao(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=hf(e.stateNode,o,u),Xu(e,u),rn!==4&&(rn=2)),!1;var d=Error(r(520),{cause:o});if(d=li(d,a),Ao===null?Ao=[d]:Ao.push(d),rn!==4&&(rn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=hf(a.stateNode,o,e),Xu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=og(u),lg(u,e,a,o),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var cg=Error(r(461)),Mn=!1;function Rn(e,n,a,o){n.child=e===null?$m(n,null,a,o):Jr(n,e.child,a,o)}function ug(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return lr(n),o=Zu(e,n,a,M,d,u),A=Ku(),e!==null&&!Mn?(Qu(e,n,u),Ji(e,n,u)):(Pe&&A&&Lu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function fg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Cu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,dg(e,n,d,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Sf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(M,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=Wi(d,o),e.ref=n.ref,e.return=n,n.child=e}function dg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(to(d,o)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=o=d,Sf(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return pf(e,n,a,o,u)}function hg(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return pg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,d!==null?d.cachePool:null),d!==null?dm(n,d):qu(),tg(n);else return n.lanes=n.childLanes=536870912,pg(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Cl(n,d.cachePool),dm(n,d),Ea(),n.memoizedState=null):(e!==null&&Cl(n,null),qu(),Ea());return Rn(e,n,u,a),n.child}function pg(e,n,a,o){var u=Hu();return u=u===null?null:{parent:gn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Cl(n,null),qu(),tg(n),e!==null&&ro(e,n,o,!0),null}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function pf(e,n,a,o,u){return lr(n),a=Zu(e,n,a,o,void 0,u),o=Ku(),e!==null&&!Mn?(Qu(e,n,u),Ji(e,n,u)):(Pe&&o&&Lu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function mg(e,n,a,o,u,d){return lr(n),n.updateQueue=null,a=pm(n,o,a,u),hm(e),o=Ku(),e!==null&&!Mn?(Qu(e,n,d),Ji(e,n,d)):(Pe&&o&&Lu(n),n.flags|=1,Rn(e,n,a,d),n.child)}function gg(e,n,a,o,u){if(lr(n),n.stateNode===null){var d=Vr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Nn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=df,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Vu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Nn(M):Vr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ff(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&df.enqueueReplaceState(d,d.state,null),ho(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,k=fr(a,A);d.props=k;var et=d.context,mt=a.contextType;M=Vr,typeof mt=="object"&&mt!==null&&(M=Nn(mt));var St=a.getDerivedStateFromProps;mt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||et!==M)&&ng(n,d,o,M),va=!1;var nt=n.memoizedState;d.state=nt,ho(n,o,d,u),fo(),et=n.memoizedState,A||nt!==et||va?(typeof St=="function"&&(ff(n,a,St,o),et=n.memoizedState),(k=va||eg(n,a,k,o,nt,et,M))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),d.props=o,d.state=et,d.context=M,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ku(e,n),M=n.memoizedProps,mt=fr(a,M),d.props=mt,St=n.pendingProps,nt=d.context,et=a.contextType,k=Vr,typeof et=="object"&&et!==null&&(k=Nn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==St||nt!==k)&&ng(n,d,o,k),va=!1,nt=n.memoizedState,d.state=nt,ho(n,o,d,u),fo();var rt=n.memoizedState;M!==St||nt!==rt||va||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof A=="function"&&(ff(n,a,A,o),rt=n.memoizedState),(mt=va||eg(n,a,mt,o,nt,rt,k)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,rt,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,rt,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),d.props=o,d.state=rt,d.context=k,o=mt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Jr(n,e.child,null,u),n.child=Jr(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Ji(e,n,u),e}function _g(e,n,a,o){return io(),n.flags|=256,Rn(e,n,a,o),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:am()}}function _f(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function vg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pe){if(u?Ma(n):Ea(),Pe){var A=an,k;if(k=A){t:{for(k=A,A=Ui;k.nodeType!==8;){if(!A){A=null;break t}if(k=Mi(k.nextSibling),k===null){A=null;break t}}A=k}A!==null?(n.memoizedState={dehydrated:A,treeContext:ir!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},k=$n(18,null,null,0),k.stateNode=A,k.return=n,n.child=k,Vn=n,an=null,k=!0):k=!1}k||sr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return td(A)?n.lanes=32:n.lanes=536870912,null;Qi(n)}return A=o.children,o=o.fallback,u?(Ea(),u=n.mode,A=Yl({mode:"hidden",children:A},u),o=nr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=gf(a),u.childLanes=_f(e,M,a),n.memoizedState=mf,o):(Ma(n),vf(n,A))}if(k=e.memoizedState,k!==null&&(A=k.dehydrated,A!==null)){if(d)n.flags&256?(Ma(n),n.flags&=-257,n=xf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),u=o.fallback,A=n.mode,o=Yl({mode:"visible",children:o.children},A),u=nr(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Jr(n,e.child,null,a),o=n.child,o.memoizedState=gf(a),o.childLanes=_f(e,M,a),n.memoizedState=mf,n=u);else if(Ma(n),td(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var et=M.dgst;M=et,o=Error(r(419)),o.stack="",o.digest=M,ao({value:o,source:null,stack:null}),n=xf(e,n,a)}else if(Mn||ro(e,n,a,!1),M=(a&e.childLanes)!==0,Mn||M){if(M=Ze,M!==null&&(o=a&-a,o=(o&42)!==0?1:ue(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,Gr(e,o),ai(M,e,o),cg;A.data==="$?"||Bf(),n=xf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,an=Mi(A.nextSibling),Vn=n,Pe=!0,rr=null,Ui=!1,e!==null&&(ui[fi++]=qi,ui[fi++]=Yi,ui[fi++]=ir,qi=e.id,Yi=e.overflow,ir=n),n=vf(n,o.children),n.flags|=4096);return n}return u?(Ea(),u=o.fallback,A=n.mode,k=e.child,et=k.sibling,o=Wi(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,et!==null?u=Wi(et,u):(u=nr(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=gf(a):(k=A.cachePool,k!==null?(et=gn._currentValue,k=k.parent!==et?{parent:et,pool:et}:k):k=am(),A={baseLanes:A.baseLanes|a,cachePool:k}),u.memoizedState=A,u.childLanes=_f(e,M,a),n.memoizedState=mf,o):(Ma(n),a=e.child,e=a.sibling,a=Wi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function vf(e,n){return n=Yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Yl(e,n){return e=$n(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,n,a){return Jr(n,e.child,null,a),e=vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function xg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),zu(e.return,n,a)}function yf(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function yg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Rn(e,n,o.children,a),o=_n.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xg(e,a,n);else if(e.tag===19)xg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(gt(_n,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&kl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yf(n,!0,a,null,d);break;case"together":yf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ro(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function ry(e,n,a){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),_a(n,gn,e.memoizedState.cache),io();break;case 27:case 5:Zt(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vg(e,n,a):(Ma(n),e=Ji(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ro(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return yg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(_n,_n.current),o)break;return null;case 22:case 23:return n.lanes=0,hg(e,n,a);case 24:_a(n,gn,e.memoizedState.cache)}return Ji(e,n,a)}function Sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!Sf(e,a)&&(n.flags&128)===0)return Mn=!1,ry(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,Pe&&(n.flags&1048576)!==0&&Qp(n,Al,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Cu(o)?(e=fr(o,e),n.tag=1,n=gg(null,n,o,e,a)):(n.tag=0,n=pf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=ug(null,n,o,e,a);break t}else if(u===V){n.tag=14,n=fg(null,n,o,e,a);break t}}throw n=ct(o)||o,Error(r(306,n,""))}}return n;case 0:return pf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),gg(e,n,o,u,a);case 3:t:{if(xt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ku(e,n),ho(n,o,null,a);var M=n.memoizedState;if(o=M.cache,_a(n,gn,o),o!==d.cache&&Bu(n,[gn],a,!0),fo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=_g(e,n,o,a);break t}else if(o!==u){u=li(Error(r(424)),n),ao(u),n=_g(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(an=Mi(e.firstChild),Vn=n,Pe=!0,rr=null,Ui=!0,a=$m(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(io(),o===u){n=Ji(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=T0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,e=n.pendingProps,o=oc(ft.current).createElement(a),o[mn]=n,o[en]=e,Dn(o,a,e),cn(o),n.stateNode=o):n.memoizedState=T0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Pe&&(o=n.stateNode=M0(n.type,n.pendingProps,ft.current),Vn=n,Ui=!0,u=an,La(n.type)?(ed=u,an=Mi(o.firstChild)):an=u),Rn(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pe&&((u=o=an)&&(o=Ny(o,n.type,n.pendingProps,Ui),o!==null?(n.stateNode=o,Vn=n,an=Mi(o.firstChild),Ui=!1,u=!0):u=!1),u||sr(n)),Zt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,Qf(u,d)?o=null:M!==null&&Qf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,Qx,null,null,a),Po._currentValue=u),ql(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Pe&&((e=a=an)&&(a=Oy(a,n.pendingProps,Ui),a!==null?(n.stateNode=a,Vn=n,an=null,e=!0):e=!1),e||sr(n)),null;case 13:return vg(e,n,a);case 4:return xt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Jr(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return ug(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=Nn(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return fg(e,n,n.type,n.pendingProps,a);case 15:return dg(e,n,n.type,n.pendingProps,a);case 19:return yg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Yl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Wi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return hg(e,n,a);case 24:return lr(n),o=Nn(gn),e===null?(u=Hu(),u===null&&(u=Ze,d=Iu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Vu(n),_a(n,gn,u)):((e.lanes&a)!==0&&(ku(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,gn,o)):(o=d.cache,_a(n,gn,o),o!==u.cache&&Bu(n,[gn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function Mg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!D0(n)){if(n=di.current,n!==null&&((Re&4194048)===Re?Li!==null:(Re&62914560)!==Re&&(Re&536870912)===0||n!==Li))throw co=Gu,rm;e.flags|=8192}}function jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,ns|=n)}function yo(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function sy(e,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(gn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(no(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tm())),tn(n),null;case 26:return a=n.memoizedState,e===null?($i(n),a!==null?(tn(n),Mg(n,a)):(tn(n),n.flags&=-16777217)):a?a!==e.memoizedState?($i(n),tn(n),Mg(n,a)):(tn(n),n.flags&=-16777217):(e.memoizedProps!==o&&$i(n),tn(n),n.flags&=-16777217),null;case 27:Ce(n),a=ft.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}e=Et.current,no(n)?Jp(n):(e=M0(u,o,a),n.stateNode=e,$i(n))}return tn(n),null;case 5:if(Ce(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(e=Et.current,no(n))Jp(n);else{switch(u=oc(ft.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[mn]=n,e[en]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Dn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$i(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ft.current,no(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Vn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[mn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||m0(e.nodeValue,a)),e||sr(n)}else e=oc(e).createTextNode(o),e[mn]=n,n.stateNode=e}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=no(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[mn]=n}else io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=tm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qi(n),n):(Qi(n),null)}if(Qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),tn(n),null;case 4:return Bt(),e===null&&qf(n.stateNode.containerInfo),tn(n),null;case 10:return Zi(n.type),tn(n),null;case 19:if(ht(_n),u=n.memoizedState,u===null)return tn(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)yo(u,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=kl(e),d!==null){for(n.flags|=128,yo(u,!1),e=d.updateQueue,n.updateQueue=e,jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Kp(a,e),a=a.sibling;return gt(_n,_n.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ct()>Ql&&(n.flags|=128,o=!0,yo(u,!1),n.lanes=4194304)}else{if(!o)if(e=kl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,jl(n,e),yo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Pe)return tn(n),null}else 2*Ct()-u.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,o=!0,yo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ct(),n.sibling=null,e=_n.current,gt(_n,o?e&1|2:e&1),n):(tn(n),null);case 22:case 23:return Qi(n),Yu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ht(cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(gn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function oy(e,n){switch(Nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(gn),Bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ce(n),null;case 13:if(Qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));io()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ht(_n),null;case 4:return Bt(),null;case 10:return Zi(n.type),null;case 22:case 23:return Qi(n),Yu(),e!==null&&ht(cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(gn),null;case 25:return null;default:return null}}function Eg(e,n){switch(Nu(n),n.tag){case 3:Zi(gn),Bt();break;case 26:case 27:case 5:Ce(n);break;case 4:Bt();break;case 13:Qi(n);break;case 19:ht(_n);break;case 10:Zi(n.type);break;case 22:case 23:Qi(n),Yu(),e!==null&&ht(cr);break;case 24:Zi(gn)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){je(n,n.return,A)}}function ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var k=a,et=A;try{et()}catch(mt){je(u,k,mt)}}}o=o.next}while(o!==d)}}catch(mt){je(n,n.return,mt)}}function bg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fm(n,a)}catch(o){je(e,e.return,o)}}}function Tg(e,n,a){a.props=fr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){je(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){je(e,n,u)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){je(e,n,u)}else a.current=null}function Ag(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){je(e,e.return,u)}}function Mf(e,n,a){try{var o=e.stateNode;Ry(o,e.type,a,n),o[en]=n}catch(u){je(e,e.return,u)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sc));else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bf(e,n,a),e=e.sibling;e!==null;)bf(e,n,a),e=e.sibling}function Zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zl(e,n,a),e=e.sibling;e!==null;)Zl(e,n,a),e=e.sibling}function Rg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[mn]=e,n[en]=a}catch(d){je(e,e.return,d)}}var ta=!1,ln=!1,Tf=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,En=null;function ly(e,n){if(e=e.containerInfo,Zf=hc,e=Hp(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,A=-1,k=-1,et=0,mt=0,St=e,nt=null;e:for(;;){for(var rt;St!==a||u!==0&&St.nodeType!==3||(A=M+u),St!==d||o!==0&&St.nodeType!==3||(k=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(rt=St.firstChild)!==null;)nt=St,St=rt;for(;;){if(St===e)break e;if(nt===a&&++et===u&&(A=M),nt===d&&++mt===o&&(k=M),(rt=St.nextSibling)!==null)break;St=nt,nt=St.parentNode}St=rt}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},hc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ce=fr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){je(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Dg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&So(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){je(a,a.return,M)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){je(a,a.return,M)}}o&64&&bg(a),o&512&&Mo(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(e,n)}catch(M){je(a,a.return,M)}}break;case 27:n===null&&o&4&&Rg(a);case 26:case 5:Ta(e,a),n===null&&o&4&&Ag(a),o&512&&Mo(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&Ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_y.bind(null,a),Py(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||ln,u=ta;var d=ln;ta=o,(ln=n)&&!d?Aa(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),ta=u,ln=d}break;case 30:break;default:Ta(e,a)}}function Ug(e){var n=e.alternate;n!==null&&(e.alternate=null,Ug(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Nr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Zn=!1;function ea(e,n,a){for(a=a.child;a!==null;)Lg(e,n,a),a=a.sibling}function Lg(e,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:ln||Ni(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ni(a,n);var o=$e,u=Zn;La(a.type)&&($e=a.stateNode,Zn=!1),ea(e,n,a),Uo(a.stateNode),$e=o,Zn=u;break;case 5:ln||Ni(a,n);case 6:if(o=$e,u=Zn,$e=null,ea(e,n,a),$e=o,Zn=u,$e!==null)if(Zn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(d){je(a,n,d)}else try{$e.removeChild(a.stateNode)}catch(d){je(a,n,d)}break;case 18:$e!==null&&(Zn?(e=$e,y0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fo(e)):y0($e,a.stateNode));break;case 4:o=$e,u=Zn,$e=a.stateNode.containerInfo,Zn=!0,ea(e,n,a),$e=o,Zn=u;break;case 0:case 11:case 14:case 15:ln||ba(2,a,n),ln||ba(4,a,n),ea(e,n,a);break;case 1:ln||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Tg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,ea(e,n,a),ln=o;break;default:ea(e,n,a)}}function Ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fo(e)}catch(a){je(n,n.return,a)}}function cy(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cg),n;default:throw Error(r(435,e.tag))}}function Af(e,n){var a=cy(e);n.forEach(function(o){var u=vy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(La(A.type)){$e=A.stateNode,Zn=!1;break t}break;case 5:$e=A.stateNode,Zn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Zn=!0;break t}A=A.return}if($e===null)throw Error(r(160));Lg(d,M,u),$e=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Og(n,e),n=n.sibling}var Si=null;function Og(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),o&4&&(ba(3,e,e.return),So(3,e),ba(5,e,e.return));break;case 1:ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Si;if(ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Di]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[mn]=e,cn(d),o=d;break t;case"link":var M=R0("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=R0("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=e,cn(d),o=d}e.stateNode=o}else C0(u,e.type,e.stateNode);else e.stateNode=w0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?C0(u,e.type,e.stateNode):w0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),a!==null&&o&4&&Mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{qn(u,"")}catch(rt){je(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Mf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(ti(n,e),ei(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){je(e,e.return,rt)}}break;case 3:if(uc=null,u=Si,Si=lc(n.containerInfo),ti(n,e),Si=u,ei(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Fo(n.containerInfo)}catch(rt){je(e,e.return,rt)}Tf&&(Tf=!1,Pg(e));break;case 4:o=Si,Si=lc(e.stateNode.containerInfo),ti(n,e),ei(e),Si=o;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lf=Ct()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,et=ta,mt=ln;if(ta=et||u,ln=mt||k,ti(n,e),ln=mt,ta=et,ei(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ta||ln||dr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=k.stateNode;var St=k.memoizedProps.style,nt=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(rt){je(k,k.return,rt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(rt){je(k,k.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Af(e,a))));break;case 19:ti(n,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 30:break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(wg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Ef(e);Zl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(qn(M,""),a.flags&=-33);var A=Ef(e);Zl(e,A,M);break;case 3:case 4:var k=a.stateNode.containerInfo,et=Ef(e);bf(e,et,k);break;default:throw Error(r(161))}}catch(mt){je(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dg(e,n.alternate,n),n=n.sibling}function dr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),dr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Tg(n,n.return,a),dr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Ni(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}e=e.sibling}}function Aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Aa(u,d,a),So(4,d);break;case 1:if(Aa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){je(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)um(k[u],A)}catch(et){je(o,o.return,et)}}a&&M&64&&bg(d),Mo(d,d.return);break;case 27:Rg(d);case 26:case 5:Aa(u,d,a),a&&o===null&&M&4&&Ag(d),Mo(d,d.return);break;case 12:Aa(u,d,a);break;case 13:Aa(u,d,a),a&&M&4&&Ng(u,d);break;case 22:d.memoizedState===null&&Aa(u,d,a),Mo(d,d.return);break;case 30:break;default:Aa(u,d,a)}n=n.sibling}}function wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Oi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zg(e,n,a,o),n=n.sibling}function zg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n,a,o),u&2048&&So(9,n);break;case 1:Oi(e,n,a,o);break;case 3:Oi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){Oi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){je(n,n.return,k)}}else Oi(e,n,a,o);break;case 13:Oi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Oi(e,n,a,o):Eo(e,n):d._visibility&2?Oi(e,n,a,o):(d._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&wf(M,n);break;case 24:Oi(e,n,a,o),u&2048&&Rf(n.alternate,n);break;default:Oi(e,n,a,o)}}function $r(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,A=a,k=o,et=M.flags;switch(M.tag){case 0:case 11:case 15:$r(d,M,A,k,u),So(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?$r(d,M,A,k,u):Eo(d,M):(mt._visibility|=2,$r(d,M,A,k,u)),u&&et&2048&&wf(M.alternate,M);break;case 24:$r(d,M,A,k,u),u&&et&2048&&Rf(M.alternate,M);break;default:$r(d,M,A,k,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&wf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Rf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function ts(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Bg(e),e=e.sibling}function Bg(e){switch(e.tag){case 26:ts(e),e.flags&bo&&e.memoizedState!==null&&jy(Si,e.memoizedState,e.memoizedProps);break;case 5:ts(e);break;case 3:case 4:var n=Si;Si=lc(e.stateNode.containerInfo),ts(e),Si=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bo,bo=16777216,ts(e),bo=n):ts(e));break;default:ts(e)}}function Ig(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Hg(o,e)}Ig(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fg(e),e=e.sibling}function Fg(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&ba(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):To(e);break;default:To(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Hg(o,e)}Ig(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function Hg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,d=o.return;if(Ug(o),o===a){En=null;break t}if(u!==null){u.return=d,En=u;break t}En=d}}}var uy={getCacheForType:function(e){var n=Nn(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},fy=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,Te=null,Re=0,Ie=0,ni=null,wa=!1,es=!1,Cf=!1,na=0,rn=0,Ra=0,hr=0,Df=0,hi=0,ns=0,Ao=null,Kn=null,Uf=!1,Lf=0,Ql=1/0,Jl=null,Ca=null,Cn=0,Da=null,is=null,as=0,Nf=0,Of=null,Gg=null,wo=0,Pf=null;function ii(){if((Be&2)!==0&&Re!==0)return Re&-Re;if(P.T!==null){var e=Wr;return e!==0?e:Vf()}return Ue()}function Vg(){hi===0&&(hi=(Re&536870912)===0||Pe?q():536870912);var e=di.current;return e!==null&&(e.flags|=32),hi}function ai(e,n,a){(e===Ze&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Ua(e,Re,hi,!1)),Gt(e,a),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(hr|=a),rn===4&&Ua(e,Re,hi,!1)),Pi(e))}function kg(e,n,a){if((Be&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?py(e,n):If(e,n,!0),d=o;do{if(u===0){es&&!o&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!dy(a)){u=If(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=Ao;var k=A.current.memoizedState.isDehydrated;if(k&&(rs(A,M).flags|=256),M=If(A,M,!1),M!==2){if(Cf&&!k){A.errorRecoveryDisabledLanes|=d,hr|=d,u=4;break t}d=Kn,Kn=u,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){rs(e,0),Ua(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,hi,!wa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Lf+300-Ct(),10<u)){if(Ua(o,n,hi,!wa),jt(o,0,!0)!==0)break t;o.timeoutHandle=v0(Xg.bind(null,o,a,Kn,Jl,Uf,n,hi,hr,ns,wa,d,2,-0,0),u);break t}Xg(o,a,Kn,Jl,Uf,n,hi,hr,ns,wa,d,0,-0,0)}}break}while(!0);Pi(e)}function Xg(e,n,a,o,u,d,M,A,k,et,mt,St,nt,rt){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(Oo={stylesheets:null,count:0,unsuspend:Yy},Bg(n),St=Zy(),St!==null)){e.cancelPendingCommit=St(Qg.bind(null,e,n,d,a,o,u,M,A,k,mt,1,nt,rt)),Ua(e,d,M,!et);return}Qg(e,n,d,a,o,u,M,A,k)}function dy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,o){n&=~Df,n&=~hr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Ft(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Mt(e,a,n)}function $l(){return(Be&6)===0?(Ro(0),!1):!0}function zf(){if(Te!==null){if(Ie===0)var e=Te.return;else e=Te,ji=or=null,Ju(e),Qr=null,vo=0,e=Te;for(;e!==null;)Eg(e.alternate,e),e=e.return;Te=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Dy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zf(),Ze=e,Te=a=Wi(e.current,null),Re=n,Ie=0,ni=null,wa=!1,es=Lt(e,n),Cf=!1,ns=hi=Df=hr=Ra=rn=0,Kn=Ao=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),d=1<<u;n|=e[u],o&=~d}return na=n,Sl(),a}function Wg(e,n){ye=null,P.H=Hl,n===lo||n===Dl?(n=lm(),Ie=3):n===rm?(n=lm(),Ie=4):Ie=n===cg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Te===null&&(rn=1,Wl(e,li(n,e.current)))}function qg(){var e=P.H;return P.H=Hl,e===null?Hl:e}function Yg(){var e=P.A;return P.A=uy,e}function Bf(){rn=4,wa||(Re&4194048)!==Re&&di.current!==null||(es=!0),(Ra&134217727)===0&&(hr&134217727)===0||Ze===null||Ua(Ze,Re,hi,!1)}function If(e,n,a){var o=Be;Be|=2;var u=qg(),d=Yg();(Ze!==e||Re!==n)&&(Jl=null,rs(e,n)),n=!1;var M=rn;t:do try{if(Ie!==0&&Te!==null){var A=Te,k=ni;switch(Ie){case 8:zf(),M=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var et=Ie;if(Ie=0,ni=null,ss(e,A,k,et),a&&es){M=0;break t}break;default:et=Ie,Ie=0,ni=null,ss(e,A,k,et)}}hy(),M=rn;break}catch(mt){Wg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ji=or=null,Be=o,P.H=u,P.A=d,Te===null&&(Ze=null,Re=0,Sl()),M}function hy(){for(;Te!==null;)jg(Te)}function py(e,n){var a=Be;Be|=2;var o=qg(),u=Yg();Ze!==e||Re!==n?(Jl=null,Ql=Ct()+500,rs(e,n)):es=Lt(e,n);t:do try{if(Ie!==0&&Te!==null){n=Te;var d=ni;e:switch(Ie){case 1:Ie=0,ni=null,ss(e,n,d,1);break;case 2:case 9:if(sm(d)){Ie=0,ni=null,Zg(n);break}n=function(){Ie!==2&&Ie!==9||Ze!==e||(Ie=7),Pi(e)},d.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:sm(d)?(Ie=0,ni=null,Zg(n)):(Ie=0,ni=null,ss(e,n,d,7));break;case 5:var M=null;switch(Te.tag){case 26:M=Te.memoizedState;case 5:case 27:var A=Te;if(!M||D0(M)){Ie=0,ni=null;var k=A.sibling;if(k!==null)Te=k;else{var et=A.return;et!==null?(Te=et,tc(et)):Te=null}break e}}Ie=0,ni=null,ss(e,n,d,5);break;case 6:Ie=0,ni=null,ss(e,n,d,6);break;case 8:zf(),rn=6;break t;default:throw Error(r(462))}}my();break}catch(mt){Wg(e,mt)}while(!0);return ji=or=null,P.H=o,P.A=u,Be=a,Te!==null?0:(Ze=null,Re=0,Sl(),rn)}function my(){for(;Te!==null&&!Ht();)jg(Te)}function jg(e){var n=Sg(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?tc(e):Te=n}function Zg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=mg(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=mg(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Ju(n);default:Eg(a,n),n=Te=Kp(n,na),n=Sg(a,n,na)}e.memoizedProps=e.pendingProps,n===null?tc(e):Te=n}function ss(e,n,a,o){ji=or=null,Ju(n),Qr=null,vo=0;var u=n.return;try{if(ay(e,u,n,a,Re)){rn=1,Wl(e,li(a,e.current)),Te=null;return}}catch(d){if(u!==null)throw Te=u,d;rn=1,Wl(e,li(a,e.current)),Te=null;return}n.flags&32768?(Pe||o===1?e=!0:es||(Re&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kg(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){Kg(n,wa);return}e=n.return;var a=sy(n.alternate,n,na);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);rn===0&&(rn=5)}function Kg(e,n){do{var a=oy(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);rn=6,Te=null}function Qg(e,n,a,o,u,d,M,A,k){e.cancelPendingCommit=null;do ec();while(Cn!==0);if((Be&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=wu,At(e,a,d,M,A,k),e===Ze&&(Te=Ze=null,Re=0),is=n,Da=e,as=a,Nf=d,Of=u,Gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xy(Fe,function(){return n0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=W.p,W.p=2,M=Be,Be|=4;try{ly(e,n,a)}finally{Be=M,W.p=u,P.T=o}}Cn=1,Jg(),$g(),t0()}}function Jg(){if(Cn===1){Cn=0;var e=Da,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Be;Be|=4;try{Og(n,e);var d=Kf,M=Hp(e.containerInfo),A=d.focusedElem,k=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&Fp(A.ownerDocument.documentElement,A)){if(k!==null&&Mu(A)){var et=k.start,mt=k.end;if(mt===void 0&&(mt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(mt,A.value.length);else{var St=A.ownerDocument||document,nt=St&&St.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),ce=A.textContent.length,se=Math.min(k.start,ce),ke=k.end===void 0?se:Math.min(k.end,ce);!rt.extend&&se>ke&&(M=ke,ke=se,se=M);var j=Ip(A,se),X=Ip(A,ke);if(j&&X&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var J=St.createRange();J.setStart(j.node,j.offset),rt.removeAllRanges(),se>ke?(rt.addRange(J),rt.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),rt.addRange(J))}}}}for(St=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&St.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var _t=St[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}hc=!!Zf,Kf=Zf=null}finally{Be=u,W.p=o,P.T=a}}e.current=n,Cn=2}}function $g(){if(Cn===2){Cn=0;var e=Da,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Be;Be|=4;try{Dg(e,n.alternate,n)}finally{Be=u,W.p=o,P.T=a}}Cn=3}}function t0(){if(Cn===4||Cn===3){Cn=0,de();var e=Da,n=is,a=as,o=Gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,is=Da=null,e0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ca=null),ze(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=W.p,W.p=2,P.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];d(A.value,{componentStack:A.stack})}}finally{P.T=n,W.p=u}}(as&3)!==0&&ec(),Pi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Pf?wo++:(wo=0,Pf=e):wo=0,Ro(0)}}function e0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function ec(e){return Jg(),$g(),t0(),n0()}function n0(){if(Cn!==5)return!1;var e=Da,n=Nf;Nf=0;var a=ze(as),o=P.T,u=W.p;try{W.p=32>a?32:a,P.T=null,a=Of,Of=null;var d=Da,M=as;if(Cn=0,is=Da=null,as=0,(Be&6)!==0)throw Error(r(331));var A=Be;if(Be|=4,Fg(d.current),zg(d,d.current,M,a),Be=A,Ro(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{W.p=u,P.T=o,e0(e,n)}}function i0(e,n,a){n=li(a,n),n=hf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Gt(e,2),Pi(e))}function je(e,n,a){if(e.tag===3)i0(e,e,a);else for(;n!==null;){if(n.tag===3){i0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=li(a,e),a=og(2),o=ya(n,a,2),o!==null&&(lg(a,o,n,e),Gt(o,2),Pi(o));break}}n=n.return}}function Ff(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new fy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),e=gy.bind(null,e,n,a),n.then(e,e))}function gy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Re&a)===a&&(rn===4||rn===3&&(Re&62914560)===Re&&300>Ct()-Lf?(Be&2)===0&&rs(e,0):Df|=a,ns===Re&&(ns=0)),Pi(e)}function a0(e,n){n===0&&(n=Rt()),e=Gr(e,n),e!==null&&(Gt(e,n),Pi(e))}function _y(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),a0(e,a)}function vy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),a0(e,a)}function xy(e,n){return B(e,n)}var nc=null,os=null,Hf=!1,ic=!1,Gf=!1,pr=0;function Pi(e){e!==os&&e.next===null&&(os===null?nc=os=e:os=os.next=e),ic=!0,Hf||(Hf=!0,Sy())}function Ro(e,n){if(!Gf&&ic){Gf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=u&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,l0(o,d))}else d=Re,d=jt(o,o===Ze?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Lt(o,d)||(a=!0,l0(o,d));o=o.next}while(a);Gf=!1}}function yy(){r0()}function r0(){ic=Hf=!1;var e=0;pr!==0&&(Cy()&&(e=pr),pr=0);for(var n=Ct(),a=null,o=nc;o!==null;){var u=o.next,d=s0(o,n);d===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(os=a)):(a=o,(e!==0||(d&3)!==0)&&(ic=!0)),o=u}Ro(e)}function s0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Ft(d),A=1<<M,k=u[M];k===-1?((A&a)===0||(A&o)!==0)&&(u[M]=fe(A,n)):k<=n&&(e.expiredLanes|=A),d&=~A}if(n=Ze,a=Re,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ie(o),ze(a)){case 2:case 8:a=re;break;case 32:a=Fe;break;case 268435456:a=z;break;default:a=Fe}return o=o0.bind(null,e),a=B(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function o0(e,n){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=Re;return o=jt(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(kg(e,o,n),s0(e,Ct()),e.callbackNode!=null&&e.callbackNode===a?o0.bind(null,e):null)}function l0(e,n){if(ec())return null;kg(e,n,!0)}function Sy(){Uy(function(){(Be&6)!==0?B(It,yy):r0()})}function Vf(){return pr===0&&(pr=q()),pr}function c0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function u0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function My(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=c0((u[en]||null).action),M=o.submitter;M&&(n=(n=M[en]||null)?c0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var A=new vl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var k=M?u0(u,M):new FormData(u);lf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(A.preventDefault(),k=M?u0(u,M):new FormData(u),lf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var kf=0;kf<Au.length;kf++){var Xf=Au[kf],Ey=Xf.toLowerCase(),by=Xf[0].toUpperCase()+Xf.slice(1);yi(Ey,"on"+by)}yi(kp,"onAnimationEnd"),yi(Xp,"onAnimationIteration"),yi(Wp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Gx,"onTransitionRun"),yi(Vx,"onTransitionStart"),yi(kx,"onTransitionCancel"),yi(qp,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function f0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],k=A.instance,et=A.currentTarget;if(A=A.listener,k!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(mt){Xl(mt)}u.currentTarget=null,d=k}else for(M=0;M<o.length;M++){if(A=o[M],k=A.instance,et=A.currentTarget,A=A.listener,k!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(mt){Xl(mt)}u.currentTarget=null,d=k}}}}function Ae(e,n){var a=n[Ur];a===void 0&&(a=n[Ur]=new Set);var o=e+"__bubble";a.has(o)||(d0(n,e,2,!1),a.add(o))}function Wf(e,n,a){var o=0;n&&(o|=4),d0(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[ac]){e[ac]=!0,dl.forEach(function(a){a!=="selectionchange"&&(Ty.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,Wf("selectionchange",!1,n))}}function d0(e,n,a,o){switch(z0(n)){case 2:var u=Jy;break;case 8:u=$y;break;default:u=sd}a=u.bind(null,n,a,e),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Yf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=ki(A),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){o=d=M;continue t}A=A.parentNode}}o=o.return}xp(function(){var et=d,mt=fu(a),St=[];t:{var nt=Yp.get(e);if(nt!==void 0){var rt=vl,ce=e;switch(e){case"keypress":if(gl(a)===0)break t;case"keydown":case"keyup":rt=xx;break;case"focusin":ce="focus",rt=_u;break;case"focusout":ce="blur",rt=_u;break;case"beforeblur":case"afterblur":rt=_u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Mx;break;case kp:case Xp:case Wp:rt=ux;break;case qp:rt=bx;break;case"scroll":case"scrollend":rt=rx;break;case"wheel":rt=Ax;break;case"copy":case"cut":case"paste":rt=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=bp;break;case"toggle":case"beforetoggle":rt=Rx}var se=(n&4)!==0,ke=!se&&(e==="scroll"||e==="scrollend"),j=se?nt!==null?nt+"Capture":null:nt;se=[];for(var X=et,J;X!==null;){var _t=X;if(J=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||J===null||j===null||(_t=Ys(X,j),_t!=null&&se.push(Do(X,_t,J))),ke)break;X=X.return}0<se.length&&(nt=new rt(nt,ce,null,a,mt),St.push({event:nt,listeners:se}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",nt&&a!==uu&&(ce=a.relatedTarget||a.fromElement)&&(ki(ce)||ce[Ci]))break t;if((rt||nt)&&(nt=mt.window===mt?mt:(nt=mt.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(ce=a.relatedTarget||a.toElement,rt=et,ce=ce?ki(ce):null,ce!==null&&(ke=c(ce),se=ce.tag,ce!==ke||se!==5&&se!==27&&se!==6)&&(ce=null)):(rt=null,ce=et),rt!==ce)){if(se=Mp,_t="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(se=bp,_t="onPointerLeave",j="onPointerEnter",X="pointer"),ke=rt==null?nt:Ja(rt),J=ce==null?nt:Ja(ce),nt=new se(_t,X+"leave",rt,a,mt),nt.target=ke,nt.relatedTarget=J,_t=null,ki(mt)===et&&(se=new se(j,X+"enter",ce,a,mt),se.target=J,se.relatedTarget=ke,_t=se),ke=_t,rt&&ce)e:{for(se=rt,j=ce,X=0,J=se;J;J=ls(J))X++;for(J=0,_t=j;_t;_t=ls(_t))J++;for(;0<X-J;)se=ls(se),X--;for(;0<J-X;)j=ls(j),J--;for(;X--;){if(se===j||j!==null&&se===j.alternate)break e;se=ls(se),j=ls(j)}se=null}else se=null;rt!==null&&h0(St,nt,rt,se,!1),ce!==null&&ke!==null&&h0(St,ke,ce,se,!0)}}t:{if(nt=et?Ja(et):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var Xt=Lp;else if(Dp(nt))if(Np)Xt=Ix;else{Xt=zx;var Me=Px}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?et&&cu(et.elementType)&&(Xt=Lp):Xt=Bx;if(Xt&&(Xt=Xt(e,et))){Up(St,Xt,a,mt);break t}Me&&Me(e,nt,et),e==="focusout"&&et&&nt.type==="number"&&et.memoizedProps.value!=null&&Ln(nt,"number",nt.value)}switch(Me=et?Ja(et):window,e){case"focusin":(Dp(Me)||Me.contentEditable==="true")&&(Ir=Me,Eu=et,eo=null);break;case"focusout":eo=Eu=Ir=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Gp(St,a,mt);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":Gp(St,a,mt)}var $t;if(xu)t:{switch(e){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else Br?Rp(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Tp&&a.locale!=="ko"&&(Br||le!=="onCompositionStart"?le==="onCompositionEnd"&&Br&&($t=yp()):(ga=mt,pu="value"in ga?ga.value:ga.textContent,Br=!0)),Me=rc(et,le),0<Me.length&&(le=new Ep(le,e,null,a,mt),St.push({event:le,listeners:Me}),$t?le.data=$t:($t=Cp(a),$t!==null&&(le.data=$t)))),($t=Dx?Ux(e,a):Lx(e,a))&&(le=rc(et,"onBeforeInput"),0<le.length&&(Me=new Ep("onBeforeInput","beforeinput",null,a,mt),St.push({event:Me,listeners:le}),Me.data=$t)),My(St,e,et,a,mt)}f0(St,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ys(e,a),u!=null&&o.unshift(Do(e,u,d)),u=Ys(e,n),u!=null&&o.push(Do(e,u,d))),e.tag===3)return o;e=e.return}return[]}function ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function h0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var A=a,k=A.alternate,et=A.stateNode;if(A=A.tag,k!==null&&k===o)break;A!==5&&A!==26&&A!==27||et===null||(k=et,u?(et=Ys(a,d),et!=null&&M.unshift(Do(a,et,k))):u||(et=Ys(a,d),et!=null&&M.push(Do(a,et,k)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Ay=/\r\n?/g,wy=/\u0000|\uFFFD/g;function p0(e){return(typeof e=="string"?e:""+e).replace(Ay,`
`).replace(wy,"")}function m0(e,n){return n=p0(n),p0(e)===n}function sc(){}function Ve(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||qn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&qn(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":_p(e,o,d);break;case"data":if(n!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=sc);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=pl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),Nt(e,"popover",o);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Nt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ix.get(a)||a,Nt(e,a,o))}}function jf(e,n,a,o,u,d){switch(a){case"style":_p(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?qn(e,o):(typeof o=="number"||typeof o=="bigint")&&qn(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[en]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Nt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,d,M,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Ae("invalid",e);var A=d=M=u=null,k=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":k=mt;break;case"defaultChecked":et=mt;break;case"value":d=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Ve(e,n,o,mt,a,null)}}Gn(e,d,A,k,et,M,u,!1),be(e);return;case"select":Ae("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Ve(e,n,u,A,a,null)}n=d,a=M,e.multiple=!!o,n!=null?nn(e,!!o,n,!1):a!=null&&nn(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ve(e,n,M,A,a,null)}Or(e,o,u,d),be(e);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,k,o,a,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)Ae(Co[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,et,o,a,null)}return;default:if(cu(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&jf(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ve(e,n,A,o,a,null))}function Ry(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,A=null,k=null,et=null,mt=null;for(rt in a){var St=a[rt];if(a.hasOwnProperty(rt)&&St!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":k=St;default:o.hasOwnProperty(rt)||Ve(e,n,rt,null,o,St)}}for(var nt in o){var rt=o[nt];if(St=a[nt],o.hasOwnProperty(nt)&&(rt!=null||St!=null))switch(nt){case"type":d=rt;break;case"name":u=rt;break;case"checked":et=rt;break;case"defaultChecked":mt=rt;break;case"value":M=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==St&&Ve(e,n,nt,rt,o,St)}}Ye(e,M,A,k,et,mt,d,u);return;case"select":rt=M=A=nt=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":rt=k;default:o.hasOwnProperty(d)||Ve(e,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":nt=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==k&&Ve(e,n,u,d,o,k)}n=A,a=M,o=rt,nt!=null?nn(e,!!a,nt,!1):!!o!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,n,A,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":nt=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ve(e,n,M,u,o,d)}wn(e,nt,rt);return;case"option":for(var ce in a)if(nt=a[ce],a.hasOwnProperty(ce)&&nt!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ve(e,n,ce,null,o,nt)}for(k in o)if(nt=o[k],rt=a[k],o.hasOwnProperty(k)&&nt!==rt&&(nt!=null||rt!=null))switch(k){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ve(e,n,k,nt,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)nt=a[se],a.hasOwnProperty(se)&&nt!=null&&!o.hasOwnProperty(se)&&Ve(e,n,se,null,o,nt);for(et in o)if(nt=o[et],rt=a[et],o.hasOwnProperty(et)&&nt!==rt&&(nt!=null||rt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ve(e,n,et,nt,o,rt)}return;default:if(cu(n)){for(var ke in a)nt=a[ke],a.hasOwnProperty(ke)&&nt!==void 0&&!o.hasOwnProperty(ke)&&jf(e,n,ke,void 0,o,nt);for(mt in o)nt=o[mt],rt=a[mt],!o.hasOwnProperty(mt)||nt===rt||nt===void 0&&rt===void 0||jf(e,n,mt,nt,o,rt);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,nt);for(St in o)nt=o[St],rt=a[St],!o.hasOwnProperty(St)||nt===rt||nt==null&&rt==null||Ve(e,n,St,nt,o,rt)}var Zf=null,Kf=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function g0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function Cy(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var v0=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(e){return x0.resolve(null).then(e).catch(Ly)}:v0;function Ly(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function y0(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Uo(M.documentElement),a&2&&Uo(M.body),a&4)for(a=M.head,Uo(a),M=a.firstChild;M;){var A=M.nextSibling,k=M.nodeName;M[Di]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(d),Fo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Fo(n)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),Nr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ny(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Di])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function Oy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Py(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var ed=null;function S0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function M0(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Nr(e)}var pi=new Map,E0=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=W.d;W.d={f:zy,r:By,D:Iy,C:Fy,L:Hy,m:Gy,X:ky,S:Vy,M:Xy};function zy(){var e=ia.f(),n=$l();return e||n}function By(e){var n=pa(e);n!==null&&n.tag===5&&n.type==="form"?km(n):ia.r(e)}var cs=typeof document>"u"?null:document;function b0(e,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),E0.has(u)||(E0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),cn(n),o.head.appendChild(n)))}}function Iy(e){ia.D(e),b0("dns-prefetch",e,null)}function Fy(e,n){ia.C(e,n),b0("preconnect",e,n)}function Hy(e,n,a){ia.L(e,n,a);var o=cs;if(o&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var d=u;switch(n){case"style":d=us(e);break;case"script":d=fs(e)}pi.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Dn(n,"link",e),cn(n),o.head.appendChild(n)))}}function Gy(e,n){ia.m(e,n);var a=cs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(e)}if(!pi.has(d)&&(e=g({rel:"modulepreload",href:e},n),pi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Dn(o,"link",e),cn(o),a.head.appendChild(o)}}}function Vy(e,n,a){ia.S(e,n,a);var o=cs;if(o&&e){var u=ma(o).hoistableStyles,d=us(e);n=n||"default";var M=u.get(d);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Lo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(d))&&nd(e,a);var k=M=o.createElement("link");cn(k),Dn(k,"link",e),k._p=new Promise(function(et,mt){k.onload=et,k.onerror=mt}),k.addEventListener("load",function(){A.loading|=1}),k.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(d,M)}}}function ky(e,n){ia.X(e,n);var a=cs;if(a&&e){var o=ma(a).hoistableScripts,u=fs(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=g({src:e,async:!0},n),(n=pi.get(u))&&id(e,n),d=a.createElement("script"),cn(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Xy(e,n){ia.M(e,n);var a=cs;if(a&&e){var o=ma(a).hoistableScripts,u=fs(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&id(e,n),d=a.createElement("script"),cn(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function T0(e,n,a,o){var u=(u=ft.current)?lc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var d=ma(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Lo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),d||Wy(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Sn(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function A0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Wy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),cn(n),e.head.appendChild(n))}function fs(e){return'[src="'+Sn(e)+'"]'}function No(e){return"script[async]"+e}function w0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,cn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),cn(o),Dn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=us(a.href);var d=e.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,cn(d),d;o=A0(a),(u=pi.get(u))&&nd(o,u),d=(e.ownerDocument||e).createElement("link"),cn(d);var M=d;return M._p=new Promise(function(A,k){M.onload=A,M.onerror=k}),Dn(d,"link",o),n.state.loading|=4,cc(d,a.precedence,e),n.instance=d;case"script":return d=fs(a.src),(u=e.querySelector(No(d)))?(n.instance=u,cn(u),u):(o=a,(u=pi.get(d))&&(o=g({},a),id(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),cn(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function R0(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Di]||d[mn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(d):o.set(M,[d])}}return o}function C0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function qy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function D0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Oo=null;function Yy(){}function jy(e,n,a){if(Oo===null)throw Error(r(475));var o=Oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=us(a.href),d=e.querySelector(Lo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=fc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,cn(d);return}d=e.ownerDocument||e,a=A0(a),(u=pi.get(u))&&nd(a,u),d=d.createElement("link"),cn(d);var M=d;M._p=new Promise(function(A,k){M.onload=A,M.onerror=k}),Dn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=fc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Zy(){if(Oo===null)throw Error(r(475));var e=Oo;return e.stylesheets&&e.count===0&&ad(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&ad(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function ad(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(Ky,e),dc=null,fc.call(e))}function Ky(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:U,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Qy(e,n,a,o,u,d,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function U0(e,n,a,o,u,d,M,A,k,et,mt,St){return e=new Qy(e,n,a,M,A,k,et,St),n=1,d===!0&&(n|=24),d=$n(3,null,null,n),e.current=d,d.stateNode=e,n=Iu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Vu(d),e}function L0(e){return e?(e=Vr,e):Vr}function N0(e,n,a,o,u,d){u=L0(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ya(e,o,n),a!==null&&(ai(a,e,n),uo(a,e,n))}function O0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rd(e,n){O0(e,n),(e=e.alternate)&&O0(e,n)}function P0(e){if(e.tag===13){var n=Gr(e,67108864);n!==null&&ai(n,e,67108864),rd(e,67108864)}}var hc=!0;function Jy(e,n,a,o){var u=P.T;P.T=null;var d=W.p;try{W.p=2,sd(e,n,a,o)}finally{W.p=d,P.T=u}}function $y(e,n,a,o){var u=P.T;P.T=null;var d=W.p;try{W.p=8,sd(e,n,a,o)}finally{W.p=d,P.T=u}}function sd(e,n,a,o){if(hc){var u=od(o);if(u===null)Yf(e,n,o,pc,a),B0(e,o);else if(eS(u,e,n,a,o))o.stopPropagation();else if(B0(e,o),n&4&&-1<tS.indexOf(e)){for(;u!==null;){var d=pa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=te(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var k=1<<31-Ft(M);A.entanglements[1]|=k,M&=~k}Pi(d),(Be&6)===0&&(Ql=Ct()+500,Ro(0))}}break;case 13:A=Gr(d,2),A!==null&&ai(A,d,2),$l(),rd(d,2)}if(d=od(o),d===null&&Yf(e,n,o,pc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Yf(e,n,o,null,a)}}function od(e){return e=fu(e),ld(e)}var pc=null;function ld(e){if(pc=null,e=ki(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case It:return 2;case re:return 8;case Fe:case De:return 32;case z:return 268435456;default:return 32}default:return 32}}var cd=!1,Na=null,Oa=null,Pa=null,zo=new Map,Bo=new Map,za=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B0(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=pa(n),n!==null&&P0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function eS(e,n,a,o,u){switch(n){case"focusin":return Na=Io(Na,e,n,a,o,u),!0;case"dragenter":return Oa=Io(Oa,e,n,a,o,u),!0;case"mouseover":return Pa=Io(Pa,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return zo.set(d,Io(zo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Bo.set(d,Io(Bo.get(d)||null,e,n,a,o,u)),!0}return!1}function I0(e){var n=ki(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,vi(e.priority,function(){if(a.tag===13){var o=ii();o=ue(o);var u=Gr(a,o);u!==null&&ai(u,a,o),rd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=od(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=pa(a),n!==null&&P0(n),e.blockedOn=a,!1;n.shift()}return!0}function F0(e,n,a){mc(e)&&a.delete(n)}function nS(){cd=!1,Na!==null&&mc(Na)&&(Na=null),Oa!==null&&mc(Oa)&&(Oa=null),Pa!==null&&mc(Pa)&&(Pa=null),zo.forEach(F0),Bo.forEach(F0)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,cd||(cd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,nS)))}var _c=null;function H0(e){_c!==e&&(_c=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ld(o||a)===null)continue;break}var d=pa(a);d!==null&&(e.splice(n,3),n-=3,lf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Fo(e){function n(k){return gc(k,e)}Na!==null&&gc(Na,e),Oa!==null&&gc(Oa,e),Pa!==null&&gc(Pa,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)I0(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[en]||null;if(typeof d=="function")M||H0(a);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[en]||null)A=M.formAction;else if(ld(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),H0(a)}}}function ud(e){this._internalRoot=e}vc.prototype.render=ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();N0(a,o,e,n,null,null)},vc.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;N0(e.current,2,null,e,null,null),$l(),n[Ci]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&I0(e)}};var G0=t.version;if(G0!=="19.1.0")throw Error(r(527,G0,"19.1.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var iS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{dt=xc.inject(iS),yt=xc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=ig,d=ag,M=rg,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=U0(e,1,!1,null,null,a,o,u,d,M,A,null),e[Ci]=n.current,qf(e),new ud(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=ig,M=ag,A=rg,k=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),n=U0(e,1,!0,n,a??null,o,u,d,M,A,k,et),n.context=L0(null),a=n.current,o=ii(),o=ue(o),u=xa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,Gt(n,a),Pi(n),e[Ci]=n.current,qf(e),new vc(n)},Go.version="19.1.0",Go}var Q0;function hS(){if(Q0)return hd.exports;Q0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),hd.exports=dS(),hd.exports}var pS=hS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="179",mS=0,J0=1,gS=2,lv=1,au=2,ua=3,Ka=0,Bn=1,Ai=2,Ya=0,Ns=1,th=2,$0=3,t_=4,_S=5,br=100,vS=101,xS=102,yS=103,SS=104,MS=200,ES=201,bS=202,TS=203,eh=204,nh=205,AS=206,wS=207,RS=208,CS=209,DS=210,US=211,LS=212,NS=213,OS=214,ih=0,ah=1,rh=2,Bs=3,sh=4,oh=5,lh=6,ch=7,Kh=0,PS=1,zS=2,ja=0,BS=1,IS=2,FS=3,HS=4,GS=5,VS=6,kS=7,cv=300,Is=301,Fs=302,uh=303,fh=304,ru=306,dh=1e3,Ar=1001,hh=1002,Ri=1003,XS=1004,yc=1005,Fi=1006,_d=1007,wr=1008,Gi=1009,uv=1010,fv=1011,el=1012,Qh=1013,Rr=1014,fa=1015,sl=1016,Jh=1017,$h=1018,nl=1020,dv=35902,hv=1021,pv=1022,wi=1023,il=1026,al=1027,mv=1028,tp=1029,gv=1030,ep=1031,np=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,ph=35840,mh=35841,gh=35842,_h=35843,vh=36196,xh=37492,yh=37496,Sh=37808,Mh=37809,Eh=37810,bh=37811,Th=37812,Ah=37813,wh=37814,Rh=37815,Ch=37816,Dh=37817,Uh=37818,Lh=37819,Nh=37820,Oh=37821,$c=36492,Ph=36494,zh=36495,_v=36283,Bh=36284,Ih=36285,Fh=36286,WS=3200,qS=3201,vv=0,YS=1,qa="",gi="srgb",Hs="srgb-linear",eu="linear",Xe="srgb",ds=7680,e_=519,jS=512,ZS=513,KS=514,xv=515,QS=516,JS=517,$S=518,tM=519,Hh=35044,n_="300 es",Hi=2e3,nu=2001;class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,Gh=180/Math.PI;function Za(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function we(s,t,i){return Math.max(t,Math.min(i,s))}function eM(s,t){return(s%t+t)%t}function xd(s,t,i){return(1-i)*s+i*t}function Ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class me{constructor(t=0,i=0){me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ol{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const y=c[f+0],S=c[f+1],E=c[f+2],b=c[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(h===1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(x!==b||m!==y||p!==S||g!==E){let v=1-h;const _=m*y+p*S+g*E+x*b,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const L=Math.sqrt(U),I=Math.atan2(L,_*O);v=Math.sin(v*I)/L,h=Math.sin(h*I)/L}const w=h*O;if(m=m*v+y*w,p=p*v+S*w,g=g*v+E*w,x=x*v+b*w,v===1-h){const L=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=L,p*=L,g*=L,x*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*x+m*S-p*y,t[i+1]=m*E+g*y+p*x-h*S,t[i+2]=p*E+g*S+h*y-m*x,t[i+3]=g*E-h*x-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*g*x+p*S*E,this._y=p*S*x-y*g*E,this._z=p*g*E+y*S*x,this._w=p*g*x-y*S*E;break;case"YXZ":this._x=y*g*x+p*S*E,this._y=p*S*x-y*g*E,this._z=p*g*E-y*S*x,this._w=p*g*x+y*S*E;break;case"ZXY":this._x=y*g*x-p*S*E,this._y=p*S*x+y*g*E,this._z=p*g*E+y*S*x,this._w=p*g*x-y*S*E;break;case"ZYX":this._x=y*g*x-p*S*E,this._y=p*S*x+y*g*E,this._z=p*g*E-y*S*x,this._w=p*g*x+y*S*E;break;case"YZX":this._x=y*g*x+p*S*E,this._y=p*S*x+y*g*E,this._z=p*g*E-y*S*x,this._w=p*g*x-y*S*E;break;case"XZY":this._x=y*g*x-p*S*E,this._y=p*S*x-y*g*E,this._z=p*g*E+y*S*x,this._w=p*g*x+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=r+h+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>h&&r>x){const S=2*Math.sqrt(1+r-h-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-r-x);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=f*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(i_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(i_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),g=2*(h*i-c*l),x=2*(c*r-f*i);return this.x=i+m*p+f*x-h*g,this.y=r+m*g+h*p-c*x,this.z=l+m*x+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new Q,i_=new ol;class pe{constructor(t,i,r,l,c,f,h,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p)}set(t,i,r,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],y=r[2],S=r[5],E=r[8],b=l[0],v=l[3],_=l[6],O=l[1],U=l[4],w=l[7],L=l[2],I=l[5],V=l[8];return c[0]=f*b+h*O+m*L,c[3]=f*v+h*U+m*I,c[6]=f*_+h*w+m*V,c[1]=p*b+g*O+x*L,c[4]=p*v+g*U+x*I,c[7]=p*_+g*w+x*V,c[2]=y*b+S*O+E*L,c[5]=y*v+S*U+E*I,c[8]=y*_+S*w+E*V,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-r*c*g+r*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=g*f-h*p,y=h*m-g*c,S=p*c-f*m,E=i*x+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=x*b,t[1]=(l*p-g*r)*b,t[2]=(h*r-l*f)*b,t[3]=y*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-h*i)*b,t[6]=S*b,t[7]=(r*m-p*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Sd.makeScale(t,i)),this}rotate(t){return this.premultiply(Sd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Sd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new pe;function yv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nM(){const s=rl("canvas");return s.style.display="block",s}const a_={};function Os(s){s in a_||(a_[s]=!0,console.warn(s))}function iM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const r_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?eu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:t,whitePoint:r,transfer:eu,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Oe=aM();function da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class rM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=rl("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=rl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=da(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(da(i[r]/255)*255):i[r]=da(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sM=0;class ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Md(l[f].image)):c.push(Md(l[f]))}else c=Md(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;const Ed=new Q;class In extends Vs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Ar,l=Ar,c=Fi,f=wr,h=wi,m=Gi,p=In.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Za(),this.name="",this.source=new ip(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dh:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dh:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=cv;In.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,i=0,r=0,l=1){qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],y=m[1],S=m[5],E=m[9],b=m[2],v=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-b)<.01&&Math.abs(E-v)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+b)<.1&&Math.abs(E+v)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(S+1)/2,L=(_+1)/2,I=(g+y)/4,V=(x+b)/4,F=(E+v)/4;return U>w&&U>L?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=I/r,c=V/r):w>L?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=I/l,c=F/l):L<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),r=V/c,l=F/c),this.set(r,l,c,i),this}let O=Math.sqrt((v-E)*(v-E)+(x-b)*(x-b)+(y-g)*(y-g));return Math.abs(O)<.001&&(O=1),this.x=(v-E)/O,this.y=(x-b)/O,this.z=(y-g)/O,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this.w=we(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this.w=we(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Vs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new qe(0,0,t,i),this.scissorTest=!1,this.viewport=new qe(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new In(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends lM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Sv extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),Mc.subVectors(this.max,Vo),ps.subVectors(t.a,Vo),ms.subVectors(t.b,Vo),gs.subVectors(t.c,Vo),Ia.subVectors(ms,ps),Fa.subVectors(gs,ms),mr.subVectors(ps,gs);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-mr.y,mr.x,0];return!bd(i,ps,ms,gs,Mc)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,ps,ms,gs,Mc))?!1:(Ec.crossVectors(Ia,Fa),i=[Ec.x,Ec.y,Ec.z],bd(i,ps,ms,gs,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ei=new Q,Sc=new ll,ps=new Q,ms=new Q,gs=new Q,Ia=new Q,Fa=new Q,mr=new Q,Vo=new Q,Mc=new Q,Ec=new Q,gr=new Q;function bd(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){gr.fromArray(s,c);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=t.dot(gr),p=i.dot(gr),g=r.dot(gr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const uM=new ll,ko=new Q,Td=new Q;class su{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):uM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Td)),this.expandByPoint(ko.copy(t.center).sub(Td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new Q,Ad=new Q,bc=new Q,Ha=new Q,wd=new Q,Tc=new Q,Rd=new Q;class ap{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ad.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(Ad);const c=t.distanceTo(i)*.5,f=-this.direction.dot(bc),h=Ha.dot(this.direction),m=-Ha.dot(bc),p=Ha.lengthSq(),g=Math.abs(1-f*f);let x,y,S,E;if(g>0)if(x=f*m-h,y=f*h-m,E=c*g,x>=0)if(y>=-E)if(y<=E){const b=1/g;x*=b,y*=b,S=x*(x+f*y+2*h)+y*(f*x+y+2*m)+p}else y=c,x=Math.max(0,-(f*y+h)),S=-x*x+y*(y+2*m)+p;else y=-c,x=Math.max(0,-(f*y+h)),S=-x*x+y*(y+2*m)+p;else y<=-E?(x=Math.max(0,-(-f*c+h)),y=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p):y<=E?(x=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(x=Math.max(0,-(f*c+h)),y=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p);else y=f>0?-c:c,x=Math.max(0,-(f*y+h)),S=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ad).addScaledVector(bc,y),S}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const r=ra.dot(this.direction),l=ra.dot(ra)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(h=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,r,l,c){wd.subVectors(i,t),Tc.subVectors(r,t),Rd.crossVectors(wd,Tc);let f=this.direction.dot(Rd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ha.subVectors(this.origin,t);const m=h*this.direction.dot(Tc.crossVectors(Ha,Tc));if(m<0)return null;const p=h*this.direction.dot(wd.cross(Ha));if(p<0||m+p>f)return null;const g=-h*Ha.dot(Rd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,c,f,h,m,p,g,x,y,S,E,b,v){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p,g,x,y,S,E,b,v)}set(t,i,r,l,c,f,h,m,p,g,x,y,S,E,b,v){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=y,_[3]=S,_[7]=E,_[11]=b,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),f=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const y=f*g,S=f*x,E=h*g,b=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=y-b*p,i[9]=-h*m,i[2]=b-y*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const y=m*g,S=m*x,E=p*g,b=p*x;i[0]=y+b*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*x,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=b+y*h,i[10]=f*m}else if(t.order==="ZXY"){const y=m*g,S=m*x,E=p*g,b=p*x;i[0]=y-b*h,i[4]=-f*x,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=b-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const y=f*g,S=f*x,E=h*g,b=h*x;i[0]=m*g,i[4]=E*p-S,i[8]=y*p+b,i[1]=m*x,i[5]=b*p+y,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const y=f*m,S=f*p,E=h*m,b=h*p;i[0]=m*g,i[4]=b-y*x,i[8]=E*x+S,i[1]=x,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=S*x+E,i[10]=y-b*x}else if(t.order==="XZY"){const y=f*m,S=f*p,E=h*m,b=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+b,i[5]=f*g,i[9]=S*x-E,i[2]=E*x-S,i[6]=h*g,i[10]=b*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fM,t,dM)}lookAt(t,i,r){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ga.crossVectors(r,ri),Ga.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ga.crossVectors(r,ri)),Ga.normalize(),Ac.crossVectors(ri,Ga),l[0]=Ga.x,l[4]=Ac.x,l[8]=ri.x,l[1]=Ga.y,l[5]=Ac.y,l[9]=ri.y,l[2]=Ga.z,l[6]=Ac.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],y=r[9],S=r[13],E=r[2],b=r[6],v=r[10],_=r[14],O=r[3],U=r[7],w=r[11],L=r[15],I=l[0],V=l[4],F=l[8],D=l[12],N=l[1],H=l[5],at=l[9],st=l[13],ct=l[2],it=l[6],P=l[10],W=l[14],G=l[3],vt=l[7],C=l[11],K=l[15];return c[0]=f*I+h*N+m*ct+p*G,c[4]=f*V+h*H+m*it+p*vt,c[8]=f*F+h*at+m*P+p*C,c[12]=f*D+h*st+m*W+p*K,c[1]=g*I+x*N+y*ct+S*G,c[5]=g*V+x*H+y*it+S*vt,c[9]=g*F+x*at+y*P+S*C,c[13]=g*D+x*st+y*W+S*K,c[2]=E*I+b*N+v*ct+_*G,c[6]=E*V+b*H+v*it+_*vt,c[10]=E*F+b*at+v*P+_*C,c[14]=E*D+b*st+v*W+_*K,c[3]=O*I+U*N+w*ct+L*G,c[7]=O*V+U*H+w*it+L*vt,c[11]=O*F+U*at+w*P+L*C,c[15]=O*D+U*st+w*W+L*K,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],x=t[6],y=t[10],S=t[14],E=t[3],b=t[7],v=t[11],_=t[15];return E*(+c*m*x-l*p*x-c*h*y+r*p*y+l*h*S-r*m*S)+b*(+i*m*S-i*p*y+c*f*y-l*f*S+l*p*g-c*m*g)+v*(+i*p*x-i*h*S-c*f*x+r*f*S+c*h*g-r*p*g)+_*(-l*h*g-i*m*x+i*h*y+l*f*x-r*f*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=t[9],y=t[10],S=t[11],E=t[12],b=t[13],v=t[14],_=t[15],O=x*v*p-b*y*p+b*m*S-h*v*S-x*m*_+h*y*_,U=E*y*p-g*v*p-E*m*S+f*v*S+g*m*_-f*y*_,w=g*b*p-E*x*p+E*h*S-f*b*S-g*h*_+f*x*_,L=E*x*m-g*b*m-E*h*y+f*b*y+g*h*v-f*x*v,I=i*O+r*U+l*w+c*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/I;return t[0]=O*V,t[1]=(b*y*c-x*v*c-b*l*S+r*v*S+x*l*_-r*y*_)*V,t[2]=(h*v*c-b*m*c+b*l*p-r*v*p-h*l*_+r*m*_)*V,t[3]=(x*m*c-h*y*c-x*l*p+r*y*p+h*l*S-r*m*S)*V,t[4]=U*V,t[5]=(g*v*c-E*y*c+E*l*S-i*v*S-g*l*_+i*y*_)*V,t[6]=(E*m*c-f*v*c-E*l*p+i*v*p+f*l*_-i*m*_)*V,t[7]=(f*y*c-g*m*c+g*l*p-i*y*p-f*l*S+i*m*S)*V,t[8]=w*V,t[9]=(E*x*c-g*b*c-E*r*S+i*b*S+g*r*_-i*x*_)*V,t[10]=(f*b*c-E*h*c+E*r*p-i*b*p-f*r*_+i*h*_)*V,t[11]=(g*h*c-f*x*c-g*r*p+i*x*p+f*r*S-i*h*S)*V,t[12]=L*V,t[13]=(g*b*l-E*x*l+E*r*y-i*b*y-g*r*v+i*x*v)*V,t[14]=(E*h*l-f*b*l-E*r*m+i*b*m+f*r*v-i*h*v)*V,t[15]=(f*x*l-g*h*l+g*r*m-i*x*m-f*r*y+i*h*y)*V,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,x=h+h,y=c*p,S=c*g,E=c*x,b=f*g,v=f*x,_=h*x,O=m*p,U=m*g,w=m*x,L=r.x,I=r.y,V=r.z;return l[0]=(1-(b+_))*L,l[1]=(S+w)*L,l[2]=(E-U)*L,l[3]=0,l[4]=(S-w)*I,l[5]=(1-(y+_))*I,l[6]=(v+O)*I,l[7]=0,l[8]=(E+U)*V,l[9]=(v-O)*V,l[10]=(1-(y+b))*V,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/c,g=1/f,x=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=x,bi.elements[9]*=x,bi.elements[10]*=x,i.setFromRotationMatrix(bi),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,g=2*c/(i-t),x=2*c/(r-l),y=(i+t)/(i-t),S=(r+l)/(r-l);let E,b;if(m)E=c/(f-c),b=f*c/(f-c);else if(h===Hi)E=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===nu)E=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,g=2/(i-t),x=2/(r-l),y=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,b;if(m)E=1/(f-c),b=f/(f-c);else if(h===Hi)E=-2/(f-c),b=-(f+c)/(f-c);else if(h===nu)E=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new Q,bi=new Qe,fM=new Q(0,0,0),dM=new Q(1,1,1),Ga=new Q,Ac=new Q,ri=new Q,o_=new Qe,l_=new ol;class Vi{constructor(t=0,i=0,r=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-we(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-we(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(we(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return o_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return l_.setFromEuler(this),this.setFromQuaternion(l_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const c_=new Q,vs=new ol,sa=new Qe,wc=new Q,Xo=new Q,pM=new Q,mM=new ol,u_=new Q(1,0,0),f_=new Q(0,1,0),d_=new Q(0,0,1),h_={type:"added"},gM={type:"removed"},xs={type:"childadded",child:null},Cd={type:"childremoved",child:null};class An extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new Q,i=new Vi,r=new ol,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(u_,t)}rotateY(t){return this.rotateOnAxis(f_,t)}rotateZ(t){return this.rotateOnAxis(d_,t)}translateOnAxis(t,i){return c_.copy(t).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(u_,t)}translateY(t){return this.translateOnAxis(f_,t)}translateZ(t){return this.translateOnAxis(d_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?wc.copy(t):wc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Xo,wc,this.up):sa.lookAt(wc,Xo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(sa),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gM),Cd.child=t,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),x=f(t.shapes),y=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new Q,oa=new Q,Dd=new Q,la=new Q,ys=new Q,Ss=new Q,p_=new Q,Ud=new Q,Ld=new Q,Nd=new Q,Od=new qe,Pd=new qe,zd=new qe;class _i{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ti.subVectors(l,i),oa.subVectors(r,i),Dd.subVectors(t,i);const f=Ti.dot(Ti),h=Ti.dot(oa),m=Ti.dot(Dd),p=oa.dot(oa),g=oa.dot(Dd),x=f*p-h*h;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(p*m-h*g)*y,E=(f*g-h*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,r,l,c,f,h,m){return this.getBarycoord(t,i,r,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(f,la.y),m.addScaledVector(h,la.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Od.setScalar(0),Pd.setScalar(0),zd.setScalar(0),Od.fromBufferAttribute(t,i),Pd.fromBufferAttribute(t,r),zd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Od,c.x),f.addScaledVector(Pd,c.y),f.addScaledVector(zd,c.z),f}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),oa.subVectors(t,i),Ti.cross(oa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;ys.subVectors(l,r),Ss.subVectors(c,r),Ud.subVectors(t,r);const m=ys.dot(Ud),p=Ss.dot(Ud);if(m<=0&&p<=0)return i.copy(r);Ld.subVectors(t,l);const g=ys.dot(Ld),x=Ss.dot(Ld);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ys,f);Nd.subVectors(t,c);const S=ys.dot(Nd),E=Ss.dot(Nd);if(E>=0&&S<=E)return i.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ss,h);const v=g*E-S*x;if(v<=0&&x-g>=0&&S-E>=0)return p_.subVectors(c,l),h=(x-g)/(x-g+(S-E)),i.copy(l).addScaledVector(p_,h);const _=1/(v+b+y);return f=b*_,h=y*_,i.copy(r).addScaledVector(ys,f).addScaledVector(Ss,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Bd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Oe.workingColorSpace){if(t=eM(t,1),i=we(i,0,1),r=we(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Bd(f,c,t+1/3),this.g=Bd(f,c,t),this.b=Bd(f,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const r=Mv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Oe.workingToColorSpace(zn.copy(this),t),Math.round(we(zn.r*255,0,255))*65536+Math.round(we(zn.g*255,0,255))*256+Math.round(we(zn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const x=f-h;switch(p=g<=.5?x/(f+h):x/(2-f-h),f){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=gi){Oe.workingToColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(Rc);const r=xd(Va.h,Rc.h,i),l=xd(Va.s,Rc.s,i),c=xd(Va.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new xe;xe.NAMES=Mv;let _M=0;class Dr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Ns,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==eh&&(r.blendSrc=this.blendSrc),this.blendDst!==nh&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $o extends Dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new Q,Cc=new me;let vM=0;class hn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Hh,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hh&&(t.usage=this.usage),t}}class Ev extends hn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class bv extends hn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class oi extends hn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let xM=0;const mi=new Qe,Id=new An,Ms=new Q,si=new ll,Wo=new ll,Tn=new Q;class Fn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yv(t)?bv:Ev)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Id.lookAt(t),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(si.min,Wo.min),si.expandByPoint(Tn),Tn.addVectors(si.max,Wo.max),si.expandByPoint(Tn)):(si.expandByPoint(Wo.min),si.expandByPoint(Wo.max))}si.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),m&&(Ms.fromBufferAttribute(t,p),Tn.add(Ms)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let F=0;F<r.count;F++)h[F]=new Q,m[F]=new Q;const p=new Q,g=new Q,x=new Q,y=new me,S=new me,E=new me,b=new Q,v=new Q;function _(F,D,N){p.fromBufferAttribute(r,F),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,N),y.fromBufferAttribute(c,F),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,N),g.sub(p),x.sub(p),S.sub(y),E.sub(y);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(H),v.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),h[F].add(b),h[D].add(b),h[N].add(b),m[F].add(v),m[D].add(v),m[N].add(v))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let F=0,D=O.length;F<D;++F){const N=O[F],H=N.start,at=N.count;for(let st=H,ct=H+at;st<ct;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const U=new Q,w=new Q,L=new Q,I=new Q;function V(F){L.fromBufferAttribute(l,F),I.copy(L);const D=h[F];U.copy(D),U.sub(L.multiplyScalar(L.dot(D))).normalize(),w.crossVectors(I,D);const H=w.dot(m[F])<0?-1:1;f.setXYZW(F,U.x,U.y,U.z,H)}for(let F=0,D=O.length;F<D;++F){const N=O[F],H=N.start,at=N.count;for(let st=H,ct=H+at;st<ct;st+=3)V(t.getX(st+0)),V(t.getX(st+1)),V(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new Q,c=new Q,f=new Q,h=new Q,m=new Q,p=new Q,g=new Q,x=new Q;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),b=t.getX(y+1),v=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,v),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,v),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,x=h.normalized,y=new p.constructor(m.length*g);let S=0,E=0;for(let b=0,v=m.length;b<v;b++){h.isInterleavedBufferAttribute?S=m[b]*h.data.stride+h.offset:S=m[b]*g;for(let _=0;_<g;_++)y[E++]=p[S++]}return new hn(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const y=p[g],S=t(y,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let y=0,S=x.length;y<S;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m_=new Qe,_r=new ap,Dc=new su,g_=new Q,Uc=new Q,Lc=new Q,Nc=new Q,Fd=new Q,Oc=new Q,__=new Q,Pc=new Q;class sn extends An{constructor(t=new Fn,i=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(Fd.fromBufferAttribute(x,t),f?Oc.addScaledVector(Fd,g):Oc.addScaledVector(Fd.sub(i),g))}i.add(Oc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(c),_r.copy(t.ray).recast(t.near),!(Dc.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Dc,g_)===null||_r.origin.distanceToSquared(g_)>(t.far-t.near)**2))&&(m_.copy(c).invert(),_r.copy(t.ray).applyMatrix4(m_),!(r.boundingBox!==null&&_r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,_r)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const v=y[E],_=f[v.materialIndex],O=Math.max(v.start,S.start),U=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let w=O,L=U;w<L;w+=3){const I=h.getX(w),V=h.getX(w+1),F=h.getX(w+2);l=zc(this,_,t,r,p,g,x,I,V,F),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let v=E,_=b;v<_;v+=3){const O=h.getX(v),U=h.getX(v+1),w=h.getX(v+2);l=zc(this,f,t,r,p,g,x,O,U,w),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const v=y[E],_=f[v.materialIndex],O=Math.max(v.start,S.start),U=Math.min(m.count,Math.min(v.start+v.count,S.start+S.count));for(let w=O,L=U;w<L;w+=3){const I=w,V=w+1,F=w+2;l=zc(this,_,t,r,p,g,x,I,V,F),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let v=E,_=b;v<_;v+=3){const O=v,U=v+1,w=v+2;l=zc(this,f,t,r,p,g,x,O,U,w),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function yM(s,t,i,r,l,c,f,h){let m;if(t.side===Bn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,t.side===Ka,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:s}}function zc(s,t,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Uc),s.getVertexPosition(m,Lc),s.getVertexPosition(p,Nc);const g=yM(s,t,i,r,Uc,Lc,Nc,__);if(g){const x=new Q;_i.getBarycoord(__,Uc,Lc,Nc,x),l&&(g.uv=_i.getInterpolatedAttribute(l,h,m,p,x,new me)),c&&(g.uv1=_i.getInterpolatedAttribute(c,h,m,p,x,new me)),f&&(g.normal=_i.getInterpolatedAttribute(f,h,m,p,x,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new Q,materialIndex:0};_i.getNormal(Uc,Lc,Nc,y.normal),g.face=y,g.barycoord=x}return g}class cl extends Fn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],x=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(p,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(x,2));function E(b,v,_,O,U,w,L,I,V,F,D){const N=w/V,H=L/F,at=w/2,st=L/2,ct=I/2,it=V+1,P=F+1;let W=0,G=0;const vt=new Q;for(let C=0;C<P;C++){const K=C*H-st;for(let ht=0;ht<it;ht++){const gt=ht*N-at;vt[b]=gt*O,vt[v]=K*U,vt[_]=ct,p.push(vt.x,vt.y,vt.z),vt[b]=0,vt[v]=0,vt[_]=I>0?1:-1,g.push(vt.x,vt.y,vt.z),x.push(ht/V),x.push(1-C/F),W+=1}}for(let C=0;C<F;C++)for(let K=0;K<V;K++){const ht=y+K+it*C,gt=y+K+it*(C+1),Et=y+(K+1)+it*(C+1),$=y+(K+1)+it*C;m.push(ht,gt,$),m.push(gt,Et,$),G+=6}h.addGroup(S,G,D),S+=G,y+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Xn(s){const t={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)t[l]=r[l]}return t}function SM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Tv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const MM={clone:Gs,merge:Xn};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Av extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new Q,v_=new me,x_=new me;class Wn extends Av{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,v_,x_),i.subVectors(x_,v_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(vd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class TM extends An{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wn(Es,bs,t,i);l.layers=this.layers,this.add(l);const c=new Wn(Es,bs,t,i);c.layers=this.layers,this.add(c);const f=new Wn(Es,bs,t,i);f.layers=this.layers,this.add(f);const h=new Wn(Es,bs,t,i);h.layers=this.layers,this.add(h);const m=new Wn(Es,bs,t,i);m.layers=this.layers,this.add(m);const p=new Wn(Es,bs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class wv extends In{constructor(t=[],i=Is,r,l,c,f,h,m,p,g){super(t,i,r,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AM extends Cr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new cl(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ya});c.uniforms.tEquirect.value=i;const f=new sn(l,c),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=Fi),new TM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Qo extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const v=i.getJointPose(b,r),_=this._getHandJoint(p,b);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Qo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class sp extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class RM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Hh,this.updateRanges=[],this.version=0,this.uuid=Za()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new Q;class iu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix4(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.applyNormalMatrix(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.transformDirection(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new hn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new iu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class op extends Dr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const qo=new Q,As=new Q,ws=new Q,Rs=new me,Yo=new me,Rv=new Qe,Bc=new Q,jo=new Q,Ic=new Q,y_=new me,Gd=new me,S_=new me;class Cv extends An{constructor(t=new op){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new RM(i,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new iu(r,3,0,!1)),Ts.setAttribute("uv",new iu(r,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new me(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Rv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-ws.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Fc(Bc.set(-.5,-.5,0),ws,f,As,l,c),Fc(jo.set(.5,-.5,0),ws,f,As,l,c),Fc(Ic.set(.5,.5,0),ws,f,As,l,c),y_.set(0,0),Gd.set(1,0),S_.set(1,1);let h=t.ray.intersectTriangle(Bc,jo,Ic,!1,qo);if(h===null&&(Fc(jo.set(-.5,.5,0),ws,f,As,l,c),Gd.set(0,1),h=t.ray.intersectTriangle(Bc,Ic,jo,!1,qo),h===null))return;const m=t.ray.origin.distanceTo(qo);m<t.near||m>t.far||i.push({distance:m,point:qo.clone(),uv:_i.getInterpolation(qo,Bc,jo,Ic,y_,Gd,S_,new me),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fc(s,t,i,r,l,c){Rs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Yo.x=c*Rs.x-l*Rs.y,Yo.y=l*Rs.x+c*Rs.y):Yo.copy(Rs),s.copy(t),s.x+=Yo.x,s.y+=Yo.y,s.applyMatrix4(Rv)}const Vd=new Q,CM=new Q,DM=new pe;class Mr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Vd.subVectors(r,i).cross(CM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Vd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||DM.getNormalMatrix(t),l=this.coplanarPoint(Vd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new su,UM=new me(.5,.5),Hc=new Q;class lp{constructor(t=new Mr,i=new Mr,r=new Mr,l=new Mr,c=new Mr,f=new Mr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Hi,r=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],y=c[6],S=c[7],E=c[8],b=c[9],v=c[10],_=c[11],O=c[12],U=c[13],w=c[14],L=c[15];if(l[0].setComponents(p-f,S-g,_-E,L-O).normalize(),l[1].setComponents(p+f,S+g,_+E,L+O).normalize(),l[2].setComponents(p+h,S+x,_+b,L+U).normalize(),l[3].setComponents(p-h,S-x,_-b,L-U).normalize(),r)l[4].setComponents(m,y,v,w).normalize(),l[5].setComponents(p-m,S-y,_-v,L-w).normalize();else if(l[4].setComponents(p-m,S-y,_-v,L-w).normalize(),i===Hi)l[5].setComponents(p+m,S+y,_+v,L+w).normalize();else if(i===nu)l[5].setComponents(m,y,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){vr.center.set(0,0,0);const i=UM.distanceTo(t.center);return vr.radius=.7071067811865476+i,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Hc.x=l.normal.x>0?t.max.x:t.min.x,Hc.y=l.normal.y>0?t.max.y:t.min.y,Hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zs extends Dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const M_=new Qe,Vh=new ap,Gc=new su,Vc=new Q;class tl extends An{constructor(t=new Fn,i=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;M_.copy(l).invert(),Vh.copy(t.ray).applyMatrix4(M_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,x=r.attributes.position;if(p!==null){const y=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=y,b=S;E<b;E++){const v=p.getX(E);Vc.fromBufferAttribute(x,v),E_(Vc,v,m,l,t,i,this)}}else{const y=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let E=y,b=S;E<b;E++)Vc.fromBufferAttribute(x,E),E_(Vc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function E_(s,t,i,r,l,c,f){const h=Vh.distanceSqToPoint(s);if(h<i){const m=new Q;Vh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Dv extends In{constructor(t,i,r,l,c,f,h,m,p){super(t,i,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uv extends In{constructor(t,i,r=Rr,l,c,f,h=Ri,m=Ri,p,g=il,x=1){if(g!==il&&g!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:x};super(y,l,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ip(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ou extends Fn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=t/h,y=i/m,S=[],E=[],b=[],v=[];for(let _=0;_<g;_++){const O=_*y-f;for(let U=0;U<p;U++){const w=U*x-c;E.push(w,-O,0),b.push(0,0,1),v.push(U/h),v.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<h;O++){const U=O+p*_,w=O+p*(_+1),L=O+1+p*(_+1),I=O+1+p*_;S.push(U,w,I),S.push(w,L,I)}this.setIndex(S),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(b,3)),this.setAttribute("uv",new oi(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}}class cp extends Fn{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let x=t;const y=(i-t)/l,S=new Q,E=new me;for(let b=0;b<=l;b++){for(let v=0;v<=r;v++){const _=c+v/r*f;S.x=x*Math.cos(_),S.y=x*Math.sin(_),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,g.push(E.x,E.y)}x+=y}for(let b=0;b<l;b++){const v=b*(r+1);for(let _=0;_<r;_++){const O=_+v,U=O,w=O+r+1,L=O+r+2,I=O+1;h.push(U,w,I),h.push(w,L,I)}}this.setIndex(h),this.setAttribute("position",new oi(m,3)),this.setAttribute("normal",new oi(p,3)),this.setAttribute("uv",new oi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qn extends Fn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const g=[],x=new Q,y=new Q,S=[],E=[],b=[],v=[];for(let _=0;_<=r;_++){const O=[],U=_/r;let w=0;_===0&&f===0?w=.5/i:_===r&&m===Math.PI&&(w=-.5/i);for(let L=0;L<=i;L++){const I=L/i;x.x=-t*Math.cos(l+I*c)*Math.sin(f+U*h),x.y=t*Math.cos(f+U*h),x.z=t*Math.sin(l+I*c)*Math.sin(f+U*h),E.push(x.x,x.y,x.z),y.copy(x).normalize(),b.push(y.x,y.y,y.z),v.push(I+w,1-U),O.push(p++)}g.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const U=g[_][O+1],w=g[_][O],L=g[_+1][O],I=g[_+1][O+1];(_!==0||f>0)&&S.push(U,w,I),(_!==r-1||m<Math.PI)&&S.push(w,L,I)}this.setIndex(S),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(b,3)),this.setAttribute("uv",new oi(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zi extends Dr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vv,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LM extends Dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NM extends Dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class OM{constructor(t,i,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,y=p.length;x<y;x+=2){const S=p[x],E=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const PM=new OM;class up{constructor(t){this.manager=t!==void 0?t:PM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}up.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cs=new WeakMap;class zM extends up{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=kd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let x=Cs.get(f);x===void 0&&(x=[],Cs.set(f,x)),x.push({onLoad:i,onError:l})}return f}const h=rl("img");function m(){g(),i&&i(this);const x=Cs.get(this)||[];for(let y=0;y<x.length;y++){const S=x[y];S.onLoad&&S.onLoad(this)}Cs.delete(this),c.manager.itemEnd(t)}function p(x){g(),l&&l(x),kd.remove(`image:${t}`);const y=Cs.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(x)}Cs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),kd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class Lv extends up{constructor(t){super(t)}load(t,i,r,l){const c=new In,f=new zM(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class fp extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Xd=new Qe,b_=new Q,T_=new Q;class Nv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;b_.setFromMatrixPosition(t.matrixWorld),i.position.copy(b_),T_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(T_),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const A_=new Qe,Zo=new Q,Wd=new Q;class BM extends Nv{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Zo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Zo),Wd.copy(r.position),Wd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Wd),r.updateMatrixWorld(),l.makeTranslation(-Zo.x,-Zo.y,-Zo.z),A_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A_,r.coordinateSystem,r.reversedDepth)}}class Ov extends fp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pv extends Av{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IM extends Nv{constructor(){super(new Pv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FM extends fp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new IM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dp extends fp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class HM extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const w_=new Qe;class GM{constructor(t,i,r=0,l=1/0){this.ray=new ap(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return w_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w_),this}intersectObject(t,i=!0,r=[]){return kh(t,this,r,i),r.sort(R_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)kh(t[l],this,r,i);return r.sort(R_),r}}function R_(s,t){return s.distance-t.distance}function kh(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)kh(c[f],t,i,!0)}}function C_(s,t,i,r){const l=VM(r);switch(i){case hv:return s*t;case mv:return s*t/l.components*l.byteLength;case tp:return s*t/l.components*l.byteLength;case gv:return s*t*2/l.components*l.byteLength;case ep:return s*t*2/l.components*l.byteLength;case pv:return s*t*3/l.components*l.byteLength;case wi:return s*t*4/l.components*l.byteLength;case np:return s*t*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mh:case _h:return Math.max(s,16)*Math.max(t,8)/4;case ph:case gh:return Math.max(s,8)*Math.max(t,8)/2;case vh:case xh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $c:case Ph:case zh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _v:case Bh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ih:case Fh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VM(s){switch(s){case Gi:case uv:return{byteLength:1,components:1};case el:case fv:case sl:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case Rr:case Qh:case fa:return{byteLength:4,components:1};case dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zv(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function kM(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<x.length;S++){const E=x[y],b=x[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,x[y]=b)}x.length=y+1;for(let S=0,E=x.length;S<E;S++){const b=x[S];s.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ib=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:XM,alphahash_pars_fragment:WM,alphamap_fragment:qM,alphamap_pars_fragment:YM,alphatest_fragment:jM,alphatest_pars_fragment:ZM,aomap_fragment:KM,aomap_pars_fragment:QM,batching_pars_vertex:JM,batching_vertex:$M,begin_vertex:tE,beginnormal_vertex:eE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:sE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:dE,common:hE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:xE,colorspace_fragment:yE,colorspace_pars_fragment:SE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:bE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:zE,envmap_vertex:AE,fog_vertex:wE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:DE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:LE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:BE,lights_toon_pars_fragment:IE,lights_phong_fragment:FE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:kE,lights_fragment_maps:XE,lights_fragment_end:WE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:ZE,map_fragment:KE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:$E,metalnessmap_fragment:tb,metalnessmap_pars_fragment:eb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:_b,packing:vb,premultiplied_alpha_fragment:xb,project_vertex:yb,dithering_fragment:Sb,dithering_pars_fragment:Mb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:wb,shadowmask_pars_fragment:Rb,skinbase_vertex:Cb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Lb,specularmap_fragment:Nb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:zb,transmission_fragment:Bb,transmission_pars_fragment:Ib,uv_pars_fragment:Fb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:Xb,backgroundCube_vert:Wb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:jb,depth_vert:Zb,depth_frag:Kb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:$b,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:rT,meshlambert_frag:sT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:dT,meshphysical_vert:hT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:xT,shadow_frag:yT,sprite_vert:ST,sprite_frag:MT},zt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bi={basic:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Xn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Xn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Xn([zt.points,zt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Xn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Xn([zt.common,zt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Xn([zt.sprite,zt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Xn([zt.common,zt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Xn([zt.lights,zt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Bi.physical={uniforms:Xn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const kc={r:0,b:0,g:0},xr=new Vi,ET=new Qe;function bT(s,t,i,r,l,c,f){const h=new xe(0);let m=c===!0?0:1,p,g,x=null,y=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function b(U){let w=!1;const L=E(U);L===null?_(h,m):L&&L.isColor&&(_(L,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(U,w){const L=E(w);L&&(L.isCubeTexture||L.mapping===ru)?(g===void 0&&(g=new sn(new cl(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Gs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,V,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(w.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(xr)),g.material.toneMapped=Oe.getTransfer(L.colorSpace)!==Xe,(x!==L||y!==L.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=L,y=L.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new sn(new ou(2,2),new Qa({name:"BackgroundMaterial",uniforms:Gs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(L.colorSpace)!==Xe,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||y!==L.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=L,y=L.version,S=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,w){U.getRGB(kc,Tv(s)),r.buffers.color.setClear(kc.r,kc.g,kc.b,w,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),m=w,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:b,addToRenderList:v,dispose:O}}function TT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function h(N,H,at,st,ct){let it=!1;const P=x(st,at,H);c!==P&&(c=P,p(c.object)),it=S(N,st,at,ct),it&&E(N,st,at,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(it||f)&&(f=!1,w(N,H,at,st),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return s.createVertexArray()}function p(N){return s.bindVertexArray(N)}function g(N){return s.deleteVertexArray(N)}function x(N,H,at){const st=at.wireframe===!0;let ct=r[N.id];ct===void 0&&(ct={},r[N.id]=ct);let it=ct[H.id];it===void 0&&(it={},ct[H.id]=it);let P=it[st];return P===void 0&&(P=y(m()),it[st]=P),P}function y(N){const H=[],at=[],st=[];for(let ct=0;ct<i;ct++)H[ct]=0,at[ct]=0,st[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:at,attributeDivisors:st,object:N,attributes:{},index:null}}function S(N,H,at,st){const ct=c.attributes,it=H.attributes;let P=0;const W=at.getAttributes();for(const G in W)if(W[G].location>=0){const C=ct[G];let K=it[G];if(K===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),C===void 0||C.attribute!==K||K&&C.data!==K.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function E(N,H,at,st){const ct={},it=H.attributes;let P=0;const W=at.getAttributes();for(const G in W)if(W[G].location>=0){let C=it[G];C===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(C=N.instanceColor));const K={};K.attribute=C,C&&C.data&&(K.data=C.data),ct[G]=K,P++}c.attributes=ct,c.attributesNum=P,c.index=st}function b(){const N=c.newAttributes;for(let H=0,at=N.length;H<at;H++)N[H]=0}function v(N){_(N,0)}function _(N,H){const at=c.newAttributes,st=c.enabledAttributes,ct=c.attributeDivisors;at[N]=1,st[N]===0&&(s.enableVertexAttribArray(N),st[N]=1),ct[N]!==H&&(s.vertexAttribDivisor(N,H),ct[N]=H)}function O(){const N=c.newAttributes,H=c.enabledAttributes;for(let at=0,st=H.length;at<st;at++)H[at]!==N[at]&&(s.disableVertexAttribArray(at),H[at]=0)}function U(N,H,at,st,ct,it,P){P===!0?s.vertexAttribIPointer(N,H,at,ct,it):s.vertexAttribPointer(N,H,at,st,ct,it)}function w(N,H,at,st){b();const ct=st.attributes,it=at.getAttributes(),P=H.defaultAttributeValues;for(const W in it){const G=it[W];if(G.location>=0){let vt=ct[W];if(vt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(vt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(vt=N.instanceColor)),vt!==void 0){const C=vt.normalized,K=vt.itemSize,ht=t.get(vt);if(ht===void 0)continue;const gt=ht.buffer,Et=ht.type,$=ht.bytesPerElement,ft=Et===s.INT||Et===s.UNSIGNED_INT||vt.gpuType===Qh;if(vt.isInterleavedBufferAttribute){const pt=vt.data,xt=pt.stride,Bt=vt.offset;if(pt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<G.locationSize;Zt++)_(G.location+Zt,pt.meshPerAttribute);N.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Zt=0;Zt<G.locationSize;Zt++)v(G.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Zt=0;Zt<G.locationSize;Zt++)U(G.location+Zt,K/G.locationSize,Et,C,xt*$,(Bt+K/G.locationSize*Zt)*$,ft)}else{if(vt.isInstancedBufferAttribute){for(let pt=0;pt<G.locationSize;pt++)_(G.location+pt,vt.meshPerAttribute);N.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let pt=0;pt<G.locationSize;pt++)v(G.location+pt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let pt=0;pt<G.locationSize;pt++)U(G.location+pt,K/G.locationSize,Et,C,K*$,K/G.locationSize*pt*$,ft)}}else if(P!==void 0){const C=P[W];if(C!==void 0)switch(C.length){case 2:s.vertexAttrib2fv(G.location,C);break;case 3:s.vertexAttrib3fv(G.location,C);break;case 4:s.vertexAttrib4fv(G.location,C);break;default:s.vertexAttrib1fv(G.location,C)}}}}O()}function L(){F();for(const N in r){const H=r[N];for(const at in H){const st=H[at];for(const ct in st)g(st[ct].object),delete st[ct];delete H[at]}delete r[N]}}function I(N){if(r[N.id]===void 0)return;const H=r[N.id];for(const at in H){const st=H[at];for(const ct in st)g(st[ct].object),delete st[ct];delete H[at]}delete r[N.id]}function V(N){for(const H in r){const at=r[H];if(at[N.id]===void 0)continue;const st=at[N.id];for(const ct in st)g(st[ct].object),delete st[ct];delete at[N.id]}}function F(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:D,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:V,initAttributes:b,enableAttribute:v,disableUnusedAttributes:O}}function AT(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];i.update(S,r,1)}function m(p,g,x,y){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,x);let E=0;for(let b=0;b<x;b++)E+=g[b]*y[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function wT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(V){return!(V!==wi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){const F=V===sl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==Gi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==fa&&!F)}function m(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:L,maxSamples:I}}function RT(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Mr,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||l;return l=y,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,S){const E=x.clippingPlanes,b=x.clipIntersection,v=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||c&&!v)c?g(null):p();else{const O=c?0:r,U=O*4;let w=_.clippingState||null;m.value=w,w=g(E,y,U,S);for(let L=0;L!==U;++L)w[L]=i[L];_.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,S,E){const b=x!==null?x.length:0;let v=null;if(b!==0){if(v=m.value,E!==!0||v===null){const _=S+b*4,O=y.matrixWorldInverse;h.getNormalMatrix(O),(v===null||v.length<_)&&(v=new Float32Array(_));for(let U=0,w=S;U!==b;++U,w+=4)f.copy(x[U]).applyMatrix4(O,h),f.normal.toArray(v,w),v[w+3]=f.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,v}}function CT(s){let t=new WeakMap;function i(f,h){return h===uh?f.mapping=Is:h===fh&&(f.mapping=Fs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===uh||h===fh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new AM(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ls=4,D_=[.125,.215,.35,.446,.526,.582],Tr=20,qd=new Pv,U_=new xe;let Yd=null,jd=0,Zd=0,Kd=!1;const Er=(1+Math.sqrt(5))/2,Ds=1/Er,L_=[new Q(-Er,Ds,0),new Q(Er,Ds,0),new Q(-Ds,0,Er),new Q(Ds,0,Er),new Q(0,Er,-Ds),new Q(0,Er,Ds),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],DT=new Q;class N_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=DT}=c;Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yd,jd,Zd),this._renderer.xr.enabled=Kd,t.scissorTest=!1,Xc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:sl,format:wi,colorSpace:Hs,depthBuffer:!1},l=O_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(c)),this._blurMaterial=LT(c,t,i)}return l}_compileMaterial(t){const i=new sn(this._lodPlanes[0],t);this._renderer.compile(i,qd)}_sceneToCubeUV(t,i,r,l,c){const m=new Wn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(U_),x.toneMapping=ja,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const b=new $o({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),v=new sn(new cl,b);let _=!1;const O=t.background;O?O.isColor&&(b.color.copy(O),t.background=null,_=!0):(b.color.copy(U_),_=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const L=this._cubeSize;Xc(l,w*L,U>2?L:0,L,L),x.setRenderTarget(l),_&&x.render(v,m),x.render(t,m)}v.geometry.dispose(),v.material.dispose(),x.toneMapping=S,x.autoClear=y,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new sn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Xc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,qd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=L_[(l-c-1)%L_.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new sn(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),b=c/E,v=isFinite(c)?1+Math.floor(g*b):Tr;v>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Tr}`);const _=[];let O=0;for(let V=0;V<Tr;++V){const F=V/b,D=Math.exp(-F*F/2);_.push(D),V===0?O+=D:V<v&&(O+=2*D)}for(let V=0;V<_.length;V++)_[V]=_[V]/O;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=_,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-r;const w=this._sizeLods[l],L=3*w*(l>U-Ls?l-U+Ls:0),I=4*(this._cubeSize-w);Xc(i,L,I,3*w,2*w),m.setRenderTarget(i),m.render(x,qd)}}function UT(s){const t=[],i=[],r=[];let l=s;const c=s-Ls+1+D_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-Ls?m=D_[f-s+Ls-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,b=3,v=2,_=1,O=new Float32Array(b*E*S),U=new Float32Array(v*E*S),w=new Float32Array(_*E*S);for(let I=0;I<S;I++){const V=I%3*2/3-1,F=I>2?0:-1,D=[V,F,0,V+2/3,F,0,V+2/3,F+1,0,V,F,0,V+2/3,F+1,0,V,F+1,0];O.set(D,b*E*I),U.set(y,v*E*I);const N=[I,I,I,I,I,I];w.set(N,_*E*I)}const L=new Fn;L.setAttribute("position",new hn(O,b)),L.setAttribute("uv",new hn(U,v)),L.setAttribute("faceIndex",new hn(w,_)),t.push(L),l>Ls&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function O_(s,t,i){const r=new Cr(s,t,i);return r.texture.mapping=ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function LT(s,t,i){const r=new Float32Array(Tr),l=new Q(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function P_(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function z_(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function hp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NT(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===uh||m===fh,g=m===Is||m===Fs;if(p||g){let x=t.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new N_(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new N_(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function OT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function PT(s,t,i,r){const l={},c=new WeakMap;function f(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const S in y)t.update(y[S],s.ARRAY_BUFFER)}function p(x){const y=[],S=x.index,E=x.attributes.position;let b=0;if(S!==null){const O=S.array;b=S.version;for(let U=0,w=O.length;U<w;U+=3){const L=O[U+0],I=O[U+1],V=O[U+2];y.push(L,I,I,V,V,L)}}else if(E!==void 0){const O=E.array;b=E.version;for(let U=0,w=O.length/3-1;U<w;U+=3){const L=U+0,I=U+1,V=U+2;y.push(L,I,I,V,V,L)}}else return;const v=new(yv(y)?bv:Ev)(y,1);v.version=b;const _=c.get(x);_&&t.remove(_),c.set(x,v)}function g(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function zT(s,t,i){let r;function l(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,S){s.drawElements(r,S,c,y*f),i.update(S,r,1)}function p(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,y*f,E),i.update(S,r,E))}function g(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let v=0;for(let _=0;_<E;_++)v+=S[_];i.update(v,r,1)}function x(y,S,E,b){if(E===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<y.length;_++)p(y[_]/f,S[_],b[_]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,b,0,E);let _=0;for(let O=0;O<E;O++)_+=S[O]*b[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function BT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function IT(s,t,i){const r=new WeakMap,l=new qe;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let N=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var S=N;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),v===!0&&(w=3);let L=h.attributes.position.count*w,I=1;L>t.maxTextureSize&&(I=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const V=new Float32Array(L*I*4*x),F=new Sv(V,L,I,x);F.type=fa,F.needsUpdate=!0;const D=w*4;for(let H=0;H<x;H++){const at=_[H],st=O[H],ct=U[H],it=L*I*4*H;for(let P=0;P<at.count;P++){const W=P*D;E===!0&&(l.fromBufferAttribute(at,P),V[it+W+0]=l.x,V[it+W+1]=l.y,V[it+W+2]=l.z,V[it+W+3]=0),b===!0&&(l.fromBufferAttribute(st,P),V[it+W+4]=l.x,V[it+W+5]=l.y,V[it+W+6]=l.z,V[it+W+7]=0),v===!0&&(l.fromBufferAttribute(ct,P),V[it+W+8]=l.x,V[it+W+9]=l.y,V[it+W+10]=l.z,V[it+W+11]=ct.itemSize===4?l.w:1)}}y={count:x,texture:F,size:new me(L,I)},r.set(h,y),h.addEventListener("dispose",N)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const b=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function FT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Bv=new In,B_=new Uv(1,1),Iv=new Sv,Fv=new cM,Hv=new wv,I_=[],F_=[],H_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function ks(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=I_[l];if(c===void 0&&(c=new Float32Array(l),I_[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function xn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function lu(s,t){let i=F_[t];i===void 0&&(i=new Int32Array(t),F_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function HT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function GT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function VT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function kT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function XT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;V_.set(r),s.uniformMatrix2fv(this.addr,!1,V_),yn(i,r)}}function WT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;G_.set(r),s.uniformMatrix3fv(this.addr,!1,G_),yn(i,r)}}function qT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;H_.set(r),s.uniformMatrix4fv(this.addr,!1,H_),yn(i,r)}}function YT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function jT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function ZT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function KT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function QT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function JT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function $T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function t1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function e1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(B_.compareFunction=xv,c=B_):c=Bv,i.setTexture2D(t||c,l)}function n1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Fv,l)}function i1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Hv,l)}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Iv,l)}function r1(s){switch(s){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return jT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}function s1(s,t){s.uniform1fv(this.addr,t)}function o1(s,t){const i=ks(t,this.size,2);s.uniform2fv(this.addr,i)}function l1(s,t){const i=ks(t,this.size,3);s.uniform3fv(this.addr,i)}function c1(s,t){const i=ks(t,this.size,4);s.uniform4fv(this.addr,i)}function u1(s,t){const i=ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function f1(s,t){const i=ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function d1(s,t){const i=ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function h1(s,t){s.uniform1iv(this.addr,t)}function p1(s,t){s.uniform2iv(this.addr,t)}function m1(s,t){s.uniform3iv(this.addr,t)}function g1(s,t){s.uniform4iv(this.addr,t)}function _1(s,t){s.uniform1uiv(this.addr,t)}function v1(s,t){s.uniform2uiv(this.addr,t)}function x1(s,t){s.uniform3uiv(this.addr,t)}function y1(s,t){s.uniform4uiv(this.addr,t)}function S1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Bv,c[f])}function M1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Fv,c[f])}function E1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Hv,c[f])}function b1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Iv,c[f])}function T1(s){switch(s){case 5126:return s1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return f1;case 35676:return d1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return _1;case 36294:return v1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return b1}}class A1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=r1(i.type)}}class w1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T1(i.type)}}class R1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Qd=/(\w+)(\])?(\[|\.)?/g;function k_(s,t){s.seq.push(t),s.map[t.id]=t}function C1(s,t,i){const r=s.name,l=r.length;for(Qd.lastIndex=0;;){const c=Qd.exec(r),f=Qd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){k_(i,p===void 0?new A1(h,s,t):new w1(h,s,t));break}else{let x=i.map[h];x===void 0&&(x=new R1(h),k_(i,x)),i=x}}}class tu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);C1(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function X_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const D1=37297;let U1=0;function L1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const W_=new pe;function N1(s){Oe._getMatrix(W_,Oe.workingColorSpace,s);const t=`mat3( ${W_.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(s)){case eu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function q_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+L1(s.getShaderSource(t),h)}else return c}function O1(s,t){const i=N1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function P1(s,t){let i;switch(t){case BS:i="Linear";break;case IS:i="Reinhard";break;case FS:i="Cineon";break;case HS:i="ACESFilmic";break;case VS:i="AgX";break;case kS:i="Neutral";break;case GS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new Q;function z1(){Oe.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function I1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function F1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function Jo(s){return s!==""}function Y_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function j_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(s){return s.replace(H1,V1)}const G1=new Map;function V1(s,t){let i=ve[t];if(i===void 0){const r=G1.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Xh(i)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(s){return s.replace(k1,X1)}function X1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function K_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function W1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===au?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function q1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Fs:t="ENVMAP_TYPE_CUBE";break;case ru:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function j1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kh:t="ENVMAP_BLENDING_MULTIPLY";break;case PS:t="ENVMAP_BLENDING_MIX";break;case zS:t="ENVMAP_BLENDING_ADD";break}return t}function Z1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function K1(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=W1(i),p=q1(i),g=Y1(i),x=j1(i),y=Z1(i),S=B1(i),E=I1(c),b=l.createProgram();let v,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),_.length>0&&(_+=`
`)):(v=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),_=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ve.tonemapping_pars_fragment:"",i.toneMapping!==ja?P1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,O1("linearToOutputTexel",i.outputColorSpace),z1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=Xh(f),f=Y_(f,i),f=j_(f,i),h=Xh(h),h=Y_(h,i),h=j_(h,i),f=Z_(f),h=Z_(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",i.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+v+f,w=O+_+h,L=X_(l,l.VERTEX_SHADER,U),I=X_(l,l.FRAGMENT_SHADER,w);l.attachShader(b,L),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function V(H){if(s.debug.checkShaderErrors){const at=l.getProgramInfoLog(b)||"",st=l.getShaderInfoLog(L)||"",ct=l.getShaderInfoLog(I)||"",it=at.trim(),P=st.trim(),W=ct.trim();let G=!0,vt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,L,I);else{const C=q_(l,L,"vertex"),K=q_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+it+`
`+C+`
`+K)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(P===""||W==="")&&(vt=!1);vt&&(H.diagnostics={runnable:G,programLog:it,vertexShader:{log:P,prefix:v},fragmentShader:{log:W,prefix:_}})}l.deleteShader(L),l.deleteShader(I),F=new tu(l,b),D=F1(l,b)}let F;this.getUniforms=function(){return F===void 0&&V(this),F};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(b,D1)),N},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=I,this}let Q1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new $1(t),i.set(t,r)),r}}class $1{constructor(t){this.id=Q1++,this.code=t,this.usedTimes=0}}function tA(s,t,i,r,l,c,f){const h=new rp,m=new J1,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function v(D,N,H,at,st){const ct=at.fog,it=st.geometry,P=D.isMeshStandardMaterial?at.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),G=W&&W.mapping===ru?W.image.height:null,vt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const C=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,K=C!==void 0?C.length:0;let ht=0;it.morphAttributes.position!==void 0&&(ht=1),it.morphAttributes.normal!==void 0&&(ht=2),it.morphAttributes.color!==void 0&&(ht=3);let gt,Et,$,ft;if(vt){const Ue=Bi[vt];gt=Ue.vertexShader,Et=Ue.fragmentShader}else gt=D.vertexShader,Et=D.fragmentShader,m.update(D),$=m.getVertexShaderID(D),ft=m.getFragmentShaderID(D);const pt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Bt=st.isInstancedMesh===!0,Zt=st.isBatchedMesh===!0,Ce=!!D.map,bt=!!D.matcap,B=!!W,ie=!!D.aoMap,Ht=!!D.lightMap,de=!!D.bumpMap,Ct=!!D.normalMap,Ee=!!D.displacementMap,It=!!D.emissiveMap,re=!!D.metalnessMap,Fe=!!D.roughnessMap,De=D.anisotropy>0,z=D.clearcoat>0,T=D.dispersion>0,tt=D.iridescence>0,dt=D.sheen>0,yt=D.transmission>0,ut=De&&!!D.anisotropyMap,Ft=z&&!!D.clearcoatMap,Dt=z&&!!D.clearcoatNormalMap,Kt=z&&!!D.clearcoatRoughnessMap,Jt=tt&&!!D.iridescenceMap,Tt=tt&&!!D.iridescenceThicknessMap,Ot=dt&&!!D.sheenColorMap,te=dt&&!!D.sheenRoughnessMap,jt=!!D.specularMap,Lt=!!D.specularColorMap,fe=!!D.specularIntensityMap,q=yt&&!!D.transmissionMap,Rt=yt&&!!D.thicknessMap,Ut=!!D.gradientMap,Gt=!!D.alphaMap,At=D.alphaTest>0,Mt=!!D.alphaHash,Yt=!!D.extensions;let ue=ja;D.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const ze={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:gt,fragmentShader:Et,defines:D.defines,customVertexShaderID:$,customFragmentShaderID:ft,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Zt,batchingColor:Zt&&st._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&st.instanceColor!==null,instancingMorph:Bt&&st.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Hs,alphaToCoverage:!!D.alphaToCoverage,map:Ce,matcap:bt,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:G,aoMap:ie,lightMap:Ht,bumpMap:de,normalMap:Ct,displacementMap:y&&Ee,emissiveMap:It,normalMapObjectSpace:Ct&&D.normalMapType===YS,normalMapTangentSpace:Ct&&D.normalMapType===vv,metalnessMap:re,roughnessMap:Fe,anisotropy:De,anisotropyMap:ut,clearcoat:z,clearcoatMap:Ft,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:tt,iridescenceMap:Jt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Ot,sheenRoughnessMap:te,specularMap:jt,specularColorMap:Lt,specularIntensityMap:fe,transmission:yt,transmissionMap:q,thicknessMap:Rt,gradientMap:Ut,opaque:D.transparent===!1&&D.blending===Ns&&D.alphaToCoverage===!1,alphaMap:Gt,alphaTest:At,alphaHash:Mt,combine:D.combine,mapUv:Ce&&b(D.map.channel),aoMapUv:ie&&b(D.aoMap.channel),lightMapUv:Ht&&b(D.lightMap.channel),bumpMapUv:de&&b(D.bumpMap.channel),normalMapUv:Ct&&b(D.normalMap.channel),displacementMapUv:Ee&&b(D.displacementMap.channel),emissiveMapUv:It&&b(D.emissiveMap.channel),metalnessMapUv:re&&b(D.metalnessMap.channel),roughnessMapUv:Fe&&b(D.roughnessMap.channel),anisotropyMapUv:ut&&b(D.anisotropyMap.channel),clearcoatMapUv:Ft&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:te&&b(D.sheenRoughnessMap.channel),specularMapUv:jt&&b(D.specularMap.channel),specularColorMapUv:Lt&&b(D.specularColorMap.channel),specularIntensityMapUv:fe&&b(D.specularIntensityMap.channel),transmissionMapUv:q&&b(D.transmissionMap.channel),thicknessMapUv:Rt&&b(D.thicknessMap.channel),alphaMapUv:Gt&&b(D.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Ct||De),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!it.attributes.uv&&(Ce||Gt),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:xt,skinning:st.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ht,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ce&&D.map.isVideoTexture===!0&&Oe.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:It&&D.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ai,flipSided:D.side===Bn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function _(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)N.push(H),N.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(O(N,D),U(N,D),N.push(s.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function O(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function U(D,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),N.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const N=E[D.type];let H;if(N){const at=Bi[N];H=MM.clone(at.uniforms)}else H=D.uniforms;return H}function L(D,N){let H;for(let at=0,st=g.length;at<st;at++){const ct=g[at];if(ct.cacheKey===N){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new K1(s,N,D,c),g.push(H)),H}function I(D){if(--D.usedTimes===0){const N=g.indexOf(D);g[N]=g[g.length-1],g.pop(),D.destroy()}}function V(D){m.remove(D)}function F(){m.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:w,acquireProgram:L,releaseProgram:I,releaseShaderCache:V,programs:g,dispose:F}}function eA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function nA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Q_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function J_(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(x,y,S,E,b,v){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:y,material:S,groupOrder:E,renderOrder:x.renderOrder,z:b,group:v},s[t]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=b,_.group=v),t++,_}function h(x,y,S,E,b,v){const _=f(x,y,S,E,b,v);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(x,y,S,E,b,v){const _=f(x,y,S,E,b,v);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,y){i.length>1&&i.sort(x||nA),r.length>1&&r.sort(y||Q_),l.length>1&&l.sort(y||Q_)}function g(){for(let x=t,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function iA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new J_,s.set(r,[f])):l>=c.length?(f=new J_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function aA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new xe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function rA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let sA=0;function oA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lA(s){const t=new aA,i=rA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,c=new Qe,f=new Qe;function h(p){let g=0,x=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,b=0,v=0,_=0,O=0,U=0,w=0,L=0,I=0,V=0;p.sort(oA);for(let D=0,N=p.length;D<N;D++){const H=p[D],at=H.color,st=H.intensity,ct=H.distance,it=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=at.r*st,x+=at.g*st,y+=at.b*st;else if(H.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],st);V++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const W=H.shadow,G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.directionalShadow[S]=G,r.directionalShadowMap[S]=it,r.directionalShadowMatrix[S]=H.shadow.matrix,O++}r.directional[S]=P,S++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(at).multiplyScalar(st),P.distance=ct,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[b]=P;const W=H.shadow;if(H.map&&(r.spotLightMap[L]=H.map,L++,W.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[b]=W.matrix,H.castShadow){const G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.spotShadow[b]=G,r.spotShadowMap[b]=it,w++}b++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(at).multiplyScalar(st),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[v]=P,v++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const W=H.shadow,G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,r.pointShadow[E]=G,r.pointShadowMap[E]=it,r.pointShadowMatrix[E]=H.shadow.matrix,U++}r.point[E]=P,E++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(st),P.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[_]=P,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=y;const F=r.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==b||F.rectAreaLength!==v||F.hemiLength!==_||F.numDirectionalShadows!==O||F.numPointShadows!==U||F.numSpotShadows!==w||F.numSpotMaps!==L||F.numLightProbes!==V)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=v,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+L-I,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=V,F.directionalLength=S,F.pointLength=E,F.spotLength=b,F.rectAreaLength=v,F.hemiLength=_,F.numDirectionalShadows=O,F.numPointShadows=U,F.numSpotShadows=w,F.numSpotMaps=L,F.numLightProbes=V,r.version=sA++)}function m(p,g){let x=0,y=0,S=0,E=0,b=0;const v=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const U=p[_];if(U.isDirectionalLight){const w=r.directional[x];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(v),x++}else if(U.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(v),S++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(v),f.identity(),c.copy(U.matrixWorld),c.premultiply(v),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(v),y++}else if(U.isHemisphereLight){const w=r.hemi[b];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(v),b++}}}return{setup:h,setupView:m,state:r}}function $_(s){const t=new lA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function cA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new $_(s),t.set(l,[h])):c>=f.length?(h=new $_(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dA(s,t,i){let r=new lp;const l=new me,c=new me,f=new qe,h=new LM({depthPacking:qS}),m=new NM,p={},g=i.maxTextureSize,x={[Ka]:Bn,[Bn]:Ka,[Ai]:Ai},y=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:uA,fragmentShader:fA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Fn;E.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new sn(E,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let _=this.type;this.render=function(I,V,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const D=s.getRenderTarget(),N=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),at=s.state;at.setBlending(Ya),at.buffers.depth.getReversed()?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const st=_!==ua&&this.type===ua,ct=_===ua&&this.type!==ua;for(let it=0,P=I.length;it<P;it++){const W=I[it],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const vt=G.getFrameExtents();if(l.multiply(vt),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/vt.x),l.x=c.x*vt.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/vt.y),l.y=c.y*vt.y,G.mapSize.y=c.y)),G.map===null||st===!0||ct===!0){const K=this.type!==ua?{minFilter:Ri,magFilter:Ri}:{};G.map!==null&&G.map.dispose(),G.map=new Cr(l.x,l.y,K),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const C=G.getViewportCount();for(let K=0;K<C;K++){const ht=G.getViewport(K);f.set(c.x*ht.x,c.y*ht.y,c.x*ht.z,c.y*ht.w),at.viewport(f),G.updateMatrices(W,K),r=G.getFrustum(),w(V,F,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===ua&&O(G,F),G.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(D,N,H)};function O(I,V){const F=t.update(b);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Cr(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(V,null,F,y,b,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(V,null,F,S,b,null)}function U(I,V,F,D){let N=null;const H=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)N=H;else if(N=F.isPointLight===!0?m:h,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const at=N.uuid,st=V.uuid;let ct=p[at];ct===void 0&&(ct={},p[at]=ct);let it=ct[st];it===void 0&&(it=N.clone(),ct[st]=it,V.addEventListener("dispose",L)),N=it}if(N.visible=V.visible,N.wireframe=V.wireframe,D===ua?N.side=V.shadowSide!==null?V.shadowSide:V.side:N.side=V.shadowSide!==null?V.shadowSide:x[V.side],N.alphaMap=V.alphaMap,N.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,N.map=V.map,N.clipShadows=V.clipShadows,N.clippingPlanes=V.clippingPlanes,N.clipIntersection=V.clipIntersection,N.displacementMap=V.displacementMap,N.displacementScale=V.displacementScale,N.displacementBias=V.displacementBias,N.wireframeLinewidth=V.wireframeLinewidth,N.linewidth=V.linewidth,F.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const at=s.properties.get(N);at.light=F}return N}function w(I,V,F,D,N){if(I.visible===!1)return;if(I.layers.test(V.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===ua)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const st=t.update(I),ct=I.material;if(Array.isArray(ct)){const it=st.groups;for(let P=0,W=it.length;P<W;P++){const G=it[P],vt=ct[G.materialIndex];if(vt&&vt.visible){const C=U(I,vt,D,N);I.onBeforeShadow(s,I,V,F,st,C,G),s.renderBufferDirect(F,null,st,C,I,G),I.onAfterShadow(s,I,V,F,st,C,G)}}}else if(ct.visible){const it=U(I,ct,D,N);I.onBeforeShadow(s,I,V,F,st,it,null),s.renderBufferDirect(F,null,st,it,I,null),I.onAfterShadow(s,I,V,F,st,it,null)}}const at=I.children;for(let st=0,ct=at.length;st<ct;st++)w(at[st],V,F,D,N)}function L(I){I.target.removeEventListener("dispose",L);for(const F in p){const D=p[F],N=I.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const hA={[ih]:ah,[rh]:lh,[sh]:ch,[Bs]:oh,[ah]:ih,[lh]:rh,[ch]:sh,[oh]:Bs};function pA(s,t){function i(){let q=!1;const Rt=new qe;let Ut=null;const Gt=new qe(0,0,0,0);return{setMask:function(At){Ut!==At&&!q&&(s.colorMask(At,At,At,At),Ut=At)},setLocked:function(At){q=At},setClear:function(At,Mt,Yt,ue,ze){ze===!0&&(At*=ue,Mt*=ue,Yt*=ue),Rt.set(At,Mt,Yt,ue),Gt.equals(Rt)===!1&&(s.clearColor(At,Mt,Yt,ue),Gt.copy(Rt))},reset:function(){q=!1,Ut=null,Gt.set(-1,0,0,0)}}}function r(){let q=!1,Rt=!1,Ut=null,Gt=null,At=null;return{setReversed:function(Mt){if(Rt!==Mt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Mt;const ue=At;At=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(Mt){Mt?pt(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(Mt){Ut!==Mt&&!q&&(s.depthMask(Mt),Ut=Mt)},setFunc:function(Mt){if(Rt&&(Mt=hA[Mt]),Gt!==Mt){switch(Mt){case ih:s.depthFunc(s.NEVER);break;case ah:s.depthFunc(s.ALWAYS);break;case rh:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case sh:s.depthFunc(s.EQUAL);break;case oh:s.depthFunc(s.GEQUAL);break;case lh:s.depthFunc(s.GREATER);break;case ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Gt=Mt}},setLocked:function(Mt){q=Mt},setClear:function(Mt){At!==Mt&&(Rt&&(Mt=1-Mt),s.clearDepth(Mt),At=Mt)},reset:function(){q=!1,Ut=null,Gt=null,At=null,Rt=!1}}}function l(){let q=!1,Rt=null,Ut=null,Gt=null,At=null,Mt=null,Yt=null,ue=null,ze=null;return{setTest:function(Ue){q||(Ue?pt(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(Ue){Rt!==Ue&&!q&&(s.stencilMask(Ue),Rt=Ue)},setFunc:function(Ue,vi,pn){(Ut!==Ue||Gt!==vi||At!==pn)&&(s.stencilFunc(Ue,vi,pn),Ut=Ue,Gt=vi,At=pn)},setOp:function(Ue,vi,pn){(Mt!==Ue||Yt!==vi||ue!==pn)&&(s.stencilOp(Ue,vi,pn),Mt=Ue,Yt=vi,ue=pn)},setLocked:function(Ue){q=Ue},setClear:function(Ue){ze!==Ue&&(s.clearStencil(Ue),ze=Ue)},reset:function(){q=!1,Rt=null,Ut=null,Gt=null,At=null,Mt=null,Yt=null,ue=null,ze=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,S=[],E=null,b=!1,v=null,_=null,O=null,U=null,w=null,L=null,I=null,V=new xe(0,0,0),F=0,D=!1,N=null,H=null,at=null,st=null,ct=null;const it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=W>=2);let vt=null,C={};const K=s.getParameter(s.SCISSOR_BOX),ht=s.getParameter(s.VIEWPORT),gt=new qe().fromArray(K),Et=new qe().fromArray(ht);function $(q,Rt,Ut,Gt){const At=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(q,Mt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Ut;Yt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Gt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Rt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Mt}const ft={};ft[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),pt(s.DEPTH_TEST),f.setFunc(Bs),de(!1),Ct(J0),pt(s.CULL_FACE),ie(Ya);function pt(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function xt(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function Bt(q,Rt){return x[q]!==Rt?(s.bindFramebuffer(q,Rt),x[q]=Rt,q===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Rt),q===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(q,Rt){let Ut=S,Gt=!1;if(q){Ut=y.get(Rt),Ut===void 0&&(Ut=[],y.set(Rt,Ut));const At=q.textures;if(Ut.length!==At.length||Ut[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Yt=At.length;Mt<Yt;Mt++)Ut[Mt]=s.COLOR_ATTACHMENT0+Mt;Ut.length=At.length,Gt=!0}}else Ut[0]!==s.BACK&&(Ut[0]=s.BACK,Gt=!0);Gt&&s.drawBuffers(Ut)}function Ce(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const bt={[br]:s.FUNC_ADD,[vS]:s.FUNC_SUBTRACT,[xS]:s.FUNC_REVERSE_SUBTRACT};bt[yS]=s.MIN,bt[SS]=s.MAX;const B={[MS]:s.ZERO,[ES]:s.ONE,[bS]:s.SRC_COLOR,[eh]:s.SRC_ALPHA,[DS]:s.SRC_ALPHA_SATURATE,[RS]:s.DST_COLOR,[AS]:s.DST_ALPHA,[TS]:s.ONE_MINUS_SRC_COLOR,[nh]:s.ONE_MINUS_SRC_ALPHA,[CS]:s.ONE_MINUS_DST_COLOR,[wS]:s.ONE_MINUS_DST_ALPHA,[US]:s.CONSTANT_COLOR,[LS]:s.ONE_MINUS_CONSTANT_COLOR,[NS]:s.CONSTANT_ALPHA,[OS]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(q,Rt,Ut,Gt,At,Mt,Yt,ue,ze,Ue){if(q===Ya){b===!0&&(xt(s.BLEND),b=!1);return}if(b===!1&&(pt(s.BLEND),b=!0),q!==_S){if(q!==v||Ue!==D){if((_!==br||w!==br)&&(s.blendEquation(s.FUNC_ADD),_=br,w=br),Ue)switch(q){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case th:s.blendFunc(s.ONE,s.ONE);break;case $0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case t_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case th:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}O=null,U=null,L=null,I=null,V.set(0,0,0),F=0,v=q,D=Ue}return}At=At||Rt,Mt=Mt||Ut,Yt=Yt||Gt,(Rt!==_||At!==w)&&(s.blendEquationSeparate(bt[Rt],bt[At]),_=Rt,w=At),(Ut!==O||Gt!==U||Mt!==L||Yt!==I)&&(s.blendFuncSeparate(B[Ut],B[Gt],B[Mt],B[Yt]),O=Ut,U=Gt,L=Mt,I=Yt),(ue.equals(V)===!1||ze!==F)&&(s.blendColor(ue.r,ue.g,ue.b,ze),V.copy(ue),F=ze),v=q,D=!1}function Ht(q,Rt){q.side===Ai?xt(s.CULL_FACE):pt(s.CULL_FACE);let Ut=q.side===Bn;Rt&&(Ut=!Ut),de(Ut),q.blending===Ns&&q.transparent===!1?ie(Ya):ie(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Gt=q.stencilWrite;h.setTest(Gt),Gt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),It(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(q){N!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),N=q)}function Ct(q){q!==mS?(pt(s.CULL_FACE),q!==H&&(q===J0?s.cullFace(s.BACK):q===gS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),H=q}function Ee(q){q!==at&&(P&&s.lineWidth(q),at=q)}function It(q,Rt,Ut){q?(pt(s.POLYGON_OFFSET_FILL),(st!==Rt||ct!==Ut)&&(s.polygonOffset(Rt,Ut),st=Rt,ct=Ut)):xt(s.POLYGON_OFFSET_FILL)}function re(q){q?pt(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function Fe(q){q===void 0&&(q=s.TEXTURE0+it-1),vt!==q&&(s.activeTexture(q),vt=q)}function De(q,Rt,Ut){Ut===void 0&&(vt===null?Ut=s.TEXTURE0+it-1:Ut=vt);let Gt=C[Ut];Gt===void 0&&(Gt={type:void 0,texture:void 0},C[Ut]=Gt),(Gt.type!==q||Gt.texture!==Rt)&&(vt!==Ut&&(s.activeTexture(Ut),vt=Ut),s.bindTexture(q,Rt||ft[q]),Gt.type=q,Gt.texture=Rt)}function z(){const q=C[vt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function yt(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Jt(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(q){gt.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),gt.copy(q))}function te(q){Et.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Et.copy(q))}function jt(q,Rt){let Ut=p.get(Rt);Ut===void 0&&(Ut=new WeakMap,p.set(Rt,Ut));let Gt=Ut.get(q);Gt===void 0&&(Gt=s.getUniformBlockIndex(Rt,q.name),Ut.set(q,Gt))}function Lt(q,Rt){const Gt=p.get(Rt).get(q);m.get(Rt)!==Gt&&(s.uniformBlockBinding(Rt,Gt,q.__bindingPointIndex),m.set(Rt,Gt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},vt=null,C={},x={},y=new WeakMap,S=[],E=null,b=!1,v=null,_=null,O=null,U=null,w=null,L=null,I=null,V=new xe(0,0,0),F=0,D=!1,N=null,H=null,at=null,st=null,ct=null,gt.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:pt,disable:xt,bindFramebuffer:Bt,drawBuffers:Zt,useProgram:Ce,setBlending:ie,setMaterial:Ht,setFlipSided:de,setCullFace:Ct,setLineWidth:Ee,setPolygonOffset:It,setScissorTest:re,activeTexture:Fe,bindTexture:De,unbindTexture:z,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Jt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Lt,texStorage2D:Dt,texStorage3D:Kt,texSubImage2D:dt,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ft,scissor:Ot,viewport:te,reset:fe}}function mA(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new me,g=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,T){return S?new OffscreenCanvas(z,T):rl("canvas")}function b(z,T,tt){let dt=1;const yt=De(z);if((yt.width>tt||yt.height>tt)&&(dt=tt/Math.max(yt.width,yt.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ut=Math.floor(dt*yt.width),Ft=Math.floor(dt*yt.height);x===void 0&&(x=E(ut,Ft));const Dt=T?E(ut,Ft):x;return Dt.width=ut,Dt.height=Ft,Dt.getContext("2d").drawImage(z,0,0,ut,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ut+"x"+Ft+")."),Dt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),z;return z}function v(z){return z.generateMipmaps}function _(z){s.generateMipmap(z)}function O(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(z,T,tt,dt,yt=!1){if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ut=T;if(T===s.RED&&(tt===s.FLOAT&&(ut=s.R32F),tt===s.HALF_FLOAT&&(ut=s.R16F),tt===s.UNSIGNED_BYTE&&(ut=s.R8)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.R8UI),tt===s.UNSIGNED_SHORT&&(ut=s.R16UI),tt===s.UNSIGNED_INT&&(ut=s.R32UI),tt===s.BYTE&&(ut=s.R8I),tt===s.SHORT&&(ut=s.R16I),tt===s.INT&&(ut=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(ut=s.RG32F),tt===s.HALF_FLOAT&&(ut=s.RG16F),tt===s.UNSIGNED_BYTE&&(ut=s.RG8)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RG16UI),tt===s.UNSIGNED_INT&&(ut=s.RG32UI),tt===s.BYTE&&(ut=s.RG8I),tt===s.SHORT&&(ut=s.RG16I),tt===s.INT&&(ut=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),tt===s.UNSIGNED_INT&&(ut=s.RGB32UI),tt===s.BYTE&&(ut=s.RGB8I),tt===s.SHORT&&(ut=s.RGB16I),tt===s.INT&&(ut=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ut=s.RGBA32UI),tt===s.BYTE&&(ut=s.RGBA8I),tt===s.SHORT&&(ut=s.RGBA16I),tt===s.INT&&(ut=s.RGBA32I)),T===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),T===s.RGBA){const Ft=yt?eu:Oe.getTransfer(dt);tt===s.FLOAT&&(ut=s.RGBA32F),tt===s.HALF_FLOAT&&(ut=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ut=Ft===Xe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function w(z,T){let tt;return z?T===null||T===Rr||T===nl?tt=s.DEPTH24_STENCIL8:T===fa?tt=s.DEPTH32F_STENCIL8:T===el&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rr||T===nl?tt=s.DEPTH_COMPONENT24:T===fa?tt=s.DEPTH_COMPONENT32F:T===el&&(tt=s.DEPTH_COMPONENT16),tt}function L(z,T){return v(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ri&&z.minFilter!==Fi?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function I(z){const T=z.target;T.removeEventListener("dispose",I),F(T),T.isVideoTexture&&g.delete(T)}function V(z){const T=z.target;T.removeEventListener("dispose",V),N(T)}function F(z){const T=r.get(z);if(T.__webglInit===void 0)return;const tt=z.source,dt=y.get(tt);if(dt){const yt=dt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(z),Object.keys(dt).length===0&&y.delete(tt)}r.remove(z)}function D(z){const T=r.get(z);s.deleteTexture(T.__webglTexture);const tt=z.source,dt=y.get(tt);delete dt[T.__cacheKey],f.memory.textures--}function N(z){const T=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let yt=0;yt<T.__webglFramebuffer[dt].length;yt++)s.deleteFramebuffer(T.__webglFramebuffer[dt][yt]);else s.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[dt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=z.textures;for(let dt=0,yt=tt.length;dt<yt;dt++){const ut=r.get(tt[dt]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),f.memory.textures--),r.remove(tt[dt])}r.remove(z)}let H=0;function at(){H=0}function st(){const z=H;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),H+=1,z}function ct(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function it(z,T){const tt=r.get(z);if(z.isVideoTexture&&re(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&tt.__version!==z.version){const dt=z.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(tt,z,T);return}}else z.isExternalTexture&&(tt.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function P(z,T){const tt=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){ft(tt,z,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function W(z,T){const tt=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){ft(tt,z,T);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function G(z,T){const tt=r.get(z);if(z.version>0&&tt.__version!==z.version){pt(tt,z,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const vt={[dh]:s.REPEAT,[Ar]:s.CLAMP_TO_EDGE,[hh]:s.MIRRORED_REPEAT},C={[Ri]:s.NEAREST,[XS]:s.NEAREST_MIPMAP_NEAREST,[yc]:s.NEAREST_MIPMAP_LINEAR,[Fi]:s.LINEAR,[_d]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},K={[jS]:s.NEVER,[tM]:s.ALWAYS,[ZS]:s.LESS,[xv]:s.LEQUAL,[KS]:s.EQUAL,[$S]:s.GEQUAL,[QS]:s.GREATER,[JS]:s.NOTEQUAL};function ht(z,T){if(T.type===fa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Fi||T.magFilter===_d||T.magFilter===yc||T.magFilter===wr||T.minFilter===Fi||T.minFilter===_d||T.minFilter===yc||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,vt[T.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,vt[T.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,vt[T.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,C[T.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,C[T.minFilter]),T.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==yc&&T.minFilter!==wr||T.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function gt(z,T){let tt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",I));const dt=T.source;let yt=y.get(dt);yt===void 0&&(yt={},y.set(dt,yt));const ut=ct(T);if(ut!==z.__cacheKey){yt[ut]===void 0&&(yt[ut]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),yt[ut].usedTimes++;const Ft=yt[z.__cacheKey];Ft!==void 0&&(yt[z.__cacheKey].usedTimes--,Ft.usedTimes===0&&D(T)),z.__cacheKey=ut,z.__webglTexture=yt[ut].texture}return tt}function Et(z,T,tt){return Math.floor(Math.floor(z/tt)/T)}function $(z,T,tt,dt){const ut=z.updateRanges;if(ut.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,tt,dt,T.data);else{ut.sort((Tt,Ot)=>Tt.start-Ot.start);let Ft=0;for(let Tt=1;Tt<ut.length;Tt++){const Ot=ut[Ft],te=ut[Tt],jt=Ot.start+Ot.count,Lt=Et(te.start,T.width,4),fe=Et(Ot.start,T.width,4);te.start<=jt+1&&Lt===fe&&Et(te.start+te.count-1,T.width,4)===Lt?Ot.count=Math.max(Ot.count,te.start+te.count-Ot.start):(++Ft,ut[Ft]=te)}ut.length=Ft+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Kt=s.getParameter(s.UNPACK_SKIP_PIXELS),Jt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Ot=ut.length;Tt<Ot;Tt++){const te=ut[Tt],jt=Math.floor(te.start/4),Lt=Math.ceil(te.count/4),fe=jt%T.width,q=Math.floor(jt/T.width),Rt=Lt,Ut=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,fe,q,Rt,Ut,tt,dt,T.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Jt)}}function ft(z,T,tt){let dt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=s.TEXTURE_3D);const yt=gt(z,T),ut=T.source;i.bindTexture(dt,z.__webglTexture,s.TEXTURE0+tt);const Ft=r.get(ut);if(ut.version!==Ft.__version||yt===!0){i.activeTexture(s.TEXTURE0+tt);const Dt=Oe.getPrimaries(Oe.workingColorSpace),Kt=T.colorSpace===qa?null:Oe.getPrimaries(T.colorSpace),Jt=T.colorSpace===qa||Dt===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Tt=b(T.image,!1,l.maxTextureSize);Tt=Fe(T,Tt);const Ot=c.convert(T.format,T.colorSpace),te=c.convert(T.type);let jt=U(T.internalFormat,Ot,te,T.colorSpace,T.isVideoTexture);ht(dt,T);let Lt;const fe=T.mipmaps,q=T.isVideoTexture!==!0,Rt=Ft.__version===void 0||yt===!0,Ut=ut.dataReady,Gt=L(T,Tt);if(T.isDepthTexture)jt=w(T.format===al,T.type),Rt&&(q?i.texStorage2D(s.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ot,te,null));else if(T.isDataTexture)if(fe.length>0){q&&Rt&&i.texStorage2D(s.TEXTURE_2D,Gt,jt,fe[0].width,fe[0].height);for(let At=0,Mt=fe.length;At<Mt;At++)Lt=fe[At],q?Ut&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ot,te,Lt.data):i.texImage2D(s.TEXTURE_2D,At,jt,Lt.width,Lt.height,0,Ot,te,Lt.data);T.generateMipmaps=!1}else q?(Rt&&i.texStorage2D(s.TEXTURE_2D,Gt,jt,Tt.width,Tt.height),Ut&&$(T,Tt,Ot,te)):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ot,te,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,jt,fe[0].width,fe[0].height,Tt.depth);for(let At=0,Mt=fe.length;At<Mt;At++)if(Lt=fe[At],T.format!==wi)if(Ot!==null)if(q){if(Ut)if(T.layerUpdates.size>0){const Yt=C_(Lt.width,Lt.height,T.format,T.type);for(const ue of T.layerUpdates){const ze=Lt.data.subarray(ue*Yt/Lt.data.BYTES_PER_ELEMENT,(ue+1)*Yt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,ue,Lt.width,Lt.height,1,Ot,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,Tt.depth,Ot,Lt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,jt,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ut&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,Tt.depth,Ot,te,Lt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,At,jt,Lt.width,Lt.height,Tt.depth,0,Ot,te,Lt.data)}else{q&&Rt&&i.texStorage2D(s.TEXTURE_2D,Gt,jt,fe[0].width,fe[0].height);for(let At=0,Mt=fe.length;At<Mt;At++)Lt=fe[At],T.format!==wi?Ot!==null?q?Ut&&i.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ot,Lt.data):i.compressedTexImage2D(s.TEXTURE_2D,At,jt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ut&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ot,te,Lt.data):i.texImage2D(s.TEXTURE_2D,At,jt,Lt.width,Lt.height,0,Ot,te,Lt.data)}else if(T.isDataArrayTexture)if(q){if(Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,jt,Tt.width,Tt.height,Tt.depth),Ut)if(T.layerUpdates.size>0){const At=C_(Tt.width,Tt.height,T.format,T.type);for(const Mt of T.layerUpdates){const Yt=Tt.data.subarray(Mt*At/Tt.data.BYTES_PER_ELEMENT,(Mt+1)*At/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,Tt.width,Tt.height,1,Ot,te,Yt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,te,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Ot,te,Tt.data);else if(T.isData3DTexture)q?(Rt&&i.texStorage3D(s.TEXTURE_3D,Gt,jt,Tt.width,Tt.height,Tt.depth),Ut&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,te,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Ot,te,Tt.data);else if(T.isFramebufferTexture){if(Rt)if(q)i.texStorage2D(s.TEXTURE_2D,Gt,jt,Tt.width,Tt.height);else{let At=Tt.width,Mt=Tt.height;for(let Yt=0;Yt<Gt;Yt++)i.texImage2D(s.TEXTURE_2D,Yt,jt,At,Mt,0,Ot,te,null),At>>=1,Mt>>=1}}else if(fe.length>0){if(q&&Rt){const At=De(fe[0]);i.texStorage2D(s.TEXTURE_2D,Gt,jt,At.width,At.height)}for(let At=0,Mt=fe.length;At<Mt;At++)Lt=fe[At],q?Ut&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Ot,te,Lt):i.texImage2D(s.TEXTURE_2D,At,jt,Ot,te,Lt);T.generateMipmaps=!1}else if(q){if(Rt){const At=De(Tt);i.texStorage2D(s.TEXTURE_2D,Gt,jt,At.width,At.height)}Ut&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,te,Tt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Ot,te,Tt);v(T)&&_(dt),Ft.__version=ut.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function pt(z,T,tt){if(T.image.length!==6)return;const dt=gt(z,T),yt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+tt);const ut=r.get(yt);if(yt.version!==ut.__version||dt===!0){i.activeTexture(s.TEXTURE0+tt);const Ft=Oe.getPrimaries(Oe.workingColorSpace),Dt=T.colorSpace===qa?null:Oe.getPrimaries(T.colorSpace),Kt=T.colorSpace===qa||Ft===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let Mt=0;Mt<6;Mt++)!Jt&&!Tt?Ot[Mt]=b(T.image[Mt],!0,l.maxCubemapSize):Ot[Mt]=Tt?T.image[Mt].image:T.image[Mt],Ot[Mt]=Fe(T,Ot[Mt]);const te=Ot[0],jt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),fe=U(T.internalFormat,jt,Lt,T.colorSpace),q=T.isVideoTexture!==!0,Rt=ut.__version===void 0||dt===!0,Ut=yt.dataReady;let Gt=L(T,te);ht(s.TEXTURE_CUBE_MAP,T);let At;if(Jt){q&&Rt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,fe,te.width,te.height);for(let Mt=0;Mt<6;Mt++){At=Ot[Mt].mipmaps;for(let Yt=0;Yt<At.length;Yt++){const ue=At[Yt];T.format!==wi?jt!==null?q?Ut&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,ue.width,ue.height,jt,ue.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,ue.width,ue.height,jt,Lt,ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,fe,ue.width,ue.height,0,jt,Lt,ue.data)}}}else{if(At=T.mipmaps,q&&Rt){At.length>0&&Gt++;const Mt=De(Ot[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,fe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Tt){q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ot[Mt].width,Ot[Mt].height,jt,Lt,Ot[Mt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,Ot[Mt].width,Ot[Mt].height,0,jt,Lt,Ot[Mt].data);for(let Yt=0;Yt<At.length;Yt++){const ze=At[Yt].image[Mt].image;q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,ze.width,ze.height,jt,Lt,ze.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,fe,ze.width,ze.height,0,jt,Lt,ze.data)}}else{q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,jt,Lt,Ot[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,jt,Lt,Ot[Mt]);for(let Yt=0;Yt<At.length;Yt++){const ue=At[Yt];q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,jt,Lt,ue.image[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,fe,jt,Lt,ue.image[Mt])}}}v(T)&&_(s.TEXTURE_CUBE_MAP),ut.__version=yt.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function xt(z,T,tt,dt,yt,ut){const Ft=c.convert(tt.format,tt.colorSpace),Dt=c.convert(tt.type),Kt=U(tt.internalFormat,Ft,Dt,tt.colorSpace),Jt=r.get(T),Tt=r.get(tt);if(Tt.__renderTarget=T,!Jt.__hasExternalTextures){const Ot=Math.max(1,T.width>>ut),te=Math.max(1,T.height>>ut);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,ut,Kt,Ot,te,T.depth,0,Ft,Dt,null):i.texImage2D(yt,ut,Kt,Ot,te,0,Ft,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),It(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,yt,Tt.__webglTexture,0,Ee(T)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,yt,Tt.__webglTexture,ut),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(z,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,z),T.depthBuffer){const dt=T.depthTexture,yt=dt&&dt.isDepthTexture?dt.type:null,ut=w(T.stencilBuffer,yt),Ft=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Ee(T);It(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ut,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ut,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,z)}else{const dt=T.textures;for(let yt=0;yt<dt.length;yt++){const ut=dt[yt],Ft=c.convert(ut.format,ut.colorSpace),Dt=c.convert(ut.type),Kt=U(ut.internalFormat,Ft,Dt,ut.colorSpace),Jt=Ee(T);tt&&It(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Kt,T.width,T.height):It(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,Kt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(z,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),it(T.depthTexture,0);const yt=dt.__webglTexture,ut=Ee(T);if(T.depthTexture.format===il)It(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0);else if(T.depthTexture.format===al)It(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ce(z){const T=r.get(z),tt=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",yt)};dt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=dt}if(z.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=z.texture.mipmaps;dt&&dt.length>0?Zt(T.__webglFramebuffer[0],z):Zt(T.__webglFramebuffer,z)}else if(tt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=s.createRenderbuffer(),Bt(T.__webglDepthbuffer[dt],z,!1);else{const yt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ut)}}else{const dt=z.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Bt(T.__webglDepthbuffer,z,!1);else{const yt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ut)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(z,T,tt){const dt=r.get(z);T!==void 0&&xt(dt.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Ce(z)}function B(z){const T=z.texture,tt=r.get(z),dt=r.get(T);z.addEventListener("dispose",V);const yt=z.textures,ut=z.isWebGLCubeRenderTarget===!0,Ft=yt.length>1;if(Ft||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=T.version,f.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)tt.__webglFramebuffer[Dt][Kt]=s.createFramebuffer()}else tt.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let Dt=0,Kt=yt.length;Dt<Kt;Dt++){const Jt=r.get(yt[Dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),f.memory.textures++)}if(z.samples>0&&It(z)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Kt=yt[Dt];tt.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const Jt=c.convert(Kt.format,Kt.colorSpace),Tt=c.convert(Kt.type),Ot=U(Kt.internalFormat,Jt,Tt,Kt.colorSpace,z.isXRRenderTarget===!0),te=Ee(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Ot,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(tt.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),ht(s.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)xt(tt.__webglFramebuffer[Dt][Kt],z,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Kt);else xt(tt.__webglFramebuffer[Dt],z,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);v(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Dt=0,Kt=yt.length;Dt<Kt;Dt++){const Jt=yt[Dt],Tt=r.get(Jt);let Ot=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ot=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ot,Tt.__webglTexture),ht(Ot,Jt),xt(tt.__webglFramebuffer,z,Jt,s.COLOR_ATTACHMENT0+Dt,Ot,0),v(Jt)&&_(Ot)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Dt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,dt.__webglTexture),ht(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)xt(tt.__webglFramebuffer[Kt],z,T,s.COLOR_ATTACHMENT0,Dt,Kt);else xt(tt.__webglFramebuffer,z,T,s.COLOR_ATTACHMENT0,Dt,0);v(T)&&_(Dt),i.unbindTexture()}z.depthBuffer&&Ce(z)}function ie(z){const T=z.textures;for(let tt=0,dt=T.length;tt<dt;tt++){const yt=T[tt];if(v(yt)){const ut=O(z),Ft=r.get(yt).__webglTexture;i.bindTexture(ut,Ft),_(ut),i.unbindTexture()}}}const Ht=[],de=[];function Ct(z){if(z.samples>0){if(It(z)===!1){const T=z.textures,tt=z.width,dt=z.height;let yt=s.COLOR_BUFFER_BIT;const ut=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=r.get(z),Dt=T.length>1;if(Dt)for(let Jt=0;Jt<T.length;Jt++)i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Kt=z.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Jt]);const Tt=r.get(T[Jt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,tt,dt,0,0,tt,dt,yt,s.NEAREST),m===!0&&(Ht.length=0,de.length=0,Ht.push(s.COLOR_ATTACHMENT0+Jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ht.push(ut),de.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,de)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Jt=0;Jt<T.length;Jt++){i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Jt]);const Tt=r.get(T[Jt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const T=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ee(z){return Math.min(l.maxSamples,z.samples)}function It(z){const T=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(z){const T=f.render.frame;g.get(z)!==T&&(g.set(z,T),z.update())}function Fe(z,T){const tt=z.colorSpace,dt=z.format,yt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||tt!==Hs&&tt!==qa&&(Oe.getTransfer(tt)===Xe?(dt!==wi||yt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function De(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=at,this.setTexture2D=it,this.setTexture2DArray=P,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=bt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=It}function gA(s,t){function i(r,l=qa){let c;const f=Oe.getTransfer(l);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Jh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===uv)return s.BYTE;if(r===fv)return s.SHORT;if(r===el)return s.UNSIGNED_SHORT;if(r===Qh)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===fa)return s.FLOAT;if(r===sl)return s.HALF_FLOAT;if(r===hv)return s.ALPHA;if(r===pv)return s.RGB;if(r===wi)return s.RGBA;if(r===il)return s.DEPTH_COMPONENT;if(r===al)return s.DEPTH_STENCIL;if(r===mv)return s.RED;if(r===tp)return s.RED_INTEGER;if(r===gv)return s.RG;if(r===ep)return s.RG_INTEGER;if(r===np)return s.RGBA_INTEGER;if(r===Zc||r===Kc||r===Qc||r===Jc)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ph||r===mh||r===gh||r===_h)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ph)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vh||r===xh||r===yh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===vh||r===xh)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===yh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===wh||r===Rh||r===Ch||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Sh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Th)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ah)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$c||r===Ph||r===zh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===$c)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ph)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_v||r===Bh||r===Ih||r===Fh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===$c)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ih)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===nl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class Gv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Gv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Qa({vertexShader:_A,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sn(new ou(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yA extends Vs{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,x=null,y=null,S=null,E=null;const b=new xA,v={},_=i.getContextAttributes();let O=null,U=null;const w=[],L=[],I=new me;let V=null;const F=new Wn;F.viewport=new qe;const D=new Wn;D.viewport=new qe;const N=[F,D],H=new HM;let at=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ft=w[$];return ft===void 0&&(ft=new Hd,w[$]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function($){let ft=w[$];return ft===void 0&&(ft=new Hd,w[$]=ft),ft.getGripSpace()},this.getHand=function($){let ft=w[$];return ft===void 0&&(ft=new Hd,w[$]=ft),ft.getHandSpace()};function ct($){const ft=L.indexOf($.inputSource);if(ft===-1)return;const pt=w[ft];pt!==void 0&&(pt.update($.inputSource,$.frame,p||f),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function it(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",it),l.removeEventListener("inputsourceschange",P);for(let $=0;$<w.length;$++){const ft=L[$];ft!==null&&(L[$]=null,w[$].disconnect(ft))}at=null,st=null,b.reset();for(const $ in v)delete v[$];t.setRenderTarget(O),S=null,y=null,x=null,l=null,U=null,Et.stop(),r.isPresenting=!1,t.setPixelRatio(V),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",it),l.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&(x=new XRWebGLBinding(l,i)),x!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,xt=null,Bt=null;_.depth&&(Bt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pt=_.stencil?al:il,xt=_.stencil?nl:Rr);const Zt={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:c};y=x.createProjectionLayer(Zt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),U=new Cr(y.textureWidth,y.textureHeight,{format:wi,type:Gi,depthTexture:new Uv(y.textureWidth,y.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const pt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,pt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Cr(S.framebufferWidth,S.framebufferHeight,{format:wi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Et.setContext(l),Et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function P($){for(let ft=0;ft<$.removed.length;ft++){const pt=$.removed[ft],xt=L.indexOf(pt);xt>=0&&(L[xt]=null,w[xt].disconnect(pt))}for(let ft=0;ft<$.added.length;ft++){const pt=$.added[ft];let xt=L.indexOf(pt);if(xt===-1){for(let Zt=0;Zt<w.length;Zt++)if(Zt>=L.length){L.push(pt),xt=Zt;break}else if(L[Zt]===null){L[Zt]=pt,xt=Zt;break}if(xt===-1)break}const Bt=w[xt];Bt&&Bt.connect(pt)}}const W=new Q,G=new Q;function vt($,ft,pt){W.setFromMatrixPosition(ft.matrixWorld),G.setFromMatrixPosition(pt.matrixWorld);const xt=W.distanceTo(G),Bt=ft.projectionMatrix.elements,Zt=pt.projectionMatrix.elements,Ce=Bt[14]/(Bt[10]-1),bt=Bt[14]/(Bt[10]+1),B=(Bt[9]+1)/Bt[5],ie=(Bt[9]-1)/Bt[5],Ht=(Bt[8]-1)/Bt[0],de=(Zt[8]+1)/Zt[0],Ct=Ce*Ht,Ee=Ce*de,It=xt/(-Ht+de),re=It*-Ht;if(ft.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(re),$.translateZ(It),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Bt[10]===-1)$.projectionMatrix.copy(ft.projectionMatrix),$.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Fe=Ce+It,De=bt+It,z=Ct-re,T=Ee+(xt-re),tt=B*bt/De*Fe,dt=ie*bt/De*Fe;$.projectionMatrix.makePerspective(z,T,tt,dt,Fe,De),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function C($,ft){ft===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ft.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ft=$.near,pt=$.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(pt=b.depthFar)),H.near=D.near=F.near=ft,H.far=D.far=F.far=pt,(at!==H.near||st!==H.far)&&(l.updateRenderState({depthNear:H.near,depthFar:H.far}),at=H.near,st=H.far),H.layers.mask=$.layers.mask|6,F.layers.mask=H.layers.mask&3,D.layers.mask=H.layers.mask&5;const xt=$.parent,Bt=H.cameras;C(H,xt);for(let Zt=0;Zt<Bt.length;Zt++)C(Bt[Zt],xt);Bt.length===2?vt(H,F,D):H.projectionMatrix.copy(F.projectionMatrix),K($,H,xt)};function K($,ft,pt){pt===null?$.matrix.copy(ft.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ft.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ft.projectionMatrix),$.projectionMatrixInverse.copy(ft.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function($){m=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(H)},this.getCameraTexture=function($){return v[$]};let ht=null;function gt($,ft){if(g=ft.getViewerPose(p||f),E=ft,g!==null){const pt=g.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let xt=!1;pt.length!==H.cameras.length&&(H.cameras.length=0,xt=!0);for(let bt=0;bt<pt.length;bt++){const B=pt[bt];let ie=null;if(S!==null)ie=S.getViewport(B);else{const de=x.getViewSubImage(y,B);ie=de.viewport,bt===0&&(t.setRenderTargetTextures(U,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(U))}let Ht=N[bt];Ht===void 0&&(Ht=new Wn,Ht.layers.enable(bt),Ht.viewport=new qe,N[bt]=Ht),Ht.matrix.fromArray(B.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(B.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ie.x,ie.y,ie.width,ie.height),bt===0&&(H.matrix.copy(Ht.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),xt===!0&&H.cameras.push(Ht)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const bt=x.getDepthInformation(pt[0]);bt&&bt.isValid&&bt.texture&&b.init(bt,l.renderState)}if(Bt&&Bt.includes("camera-access")&&(t.state.unbindTexture(),x))for(let bt=0;bt<pt.length;bt++){const B=pt[bt].camera;if(B){let ie=v[B];ie||(ie=new Gv,v[B]=ie);const Ht=x.getCameraImage(B);ie.sourceTexture=Ht}}}for(let pt=0;pt<w.length;pt++){const xt=L[pt],Bt=w[pt];xt!==null&&Bt!==void 0&&Bt.update(xt,ft,p||f)}ht&&ht($,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Et=new zv;Et.setAnimationLoop(gt),this.setAnimationLoop=function($){ht=$},this.dispose=function(){}}}const yr=new Vi,SA=new Qe;function MA(s,t){function i(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Tv(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function l(v,_,O,U,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(v,_):_.isMeshToonMaterial?(c(v,_),x(v,_)):_.isMeshPhongMaterial?(c(v,_),g(v,_)):_.isMeshStandardMaterial?(c(v,_),y(v,_),_.isMeshPhysicalMaterial&&S(v,_,w)):_.isMeshMatcapMaterial?(c(v,_),E(v,_)):_.isMeshDepthMaterial?c(v,_):_.isMeshDistanceMaterial?(c(v,_),b(v,_)):_.isMeshNormalMaterial?c(v,_):_.isLineBasicMaterial?(f(v,_),_.isLineDashedMaterial&&h(v,_)):_.isPointsMaterial?m(v,_,O,U):_.isSpriteMaterial?p(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,i(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Bn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,i(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Bn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,i(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,i(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const O=t.get(_),U=O.envMap,w=O.envMapRotation;U&&(v.envMap.value=U,yr.copy(w),yr.x*=-1,yr.y*=-1,yr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),v.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(yr)),v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,v.aoMapTransform))}function f(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform))}function h(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function m(v,_,O,U){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*O,v.scale.value=U*.5,_.map&&(v.map.value=_.map,i(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function p(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,i(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,i(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function y(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function S(v,_,O){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=O.texture,v.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,_){_.matcap&&(v.matcap.value=_.matcap)}function b(v,_){const O=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(O.matrixWorld),v.nearDistance.value=O.shadow.camera.near,v.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function EA(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const w=U.program;r.uniformBlockBinding(O,w)}function p(O,U){let w=l[O.id];w===void 0&&(E(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",v));const L=U.program;r.updateUBOMapping(O,L);const I=t.render.frame;c[O.id]!==I&&(y(O),c[O.id]=I)}function g(O){const U=x();O.__bindingPointIndex=U;const w=s.createBuffer(),L=O.__size,I=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,L,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function x(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const U=l[O.id],w=O.uniforms,L=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let I=0,V=w.length;I<V;I++){const F=Array.isArray(w[I])?w[I]:[w[I]];for(let D=0,N=F.length;D<N;D++){const H=F[D];if(S(H,I,D,L)===!0){const at=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let it=0;it<st.length;it++){const P=st[it],W=b(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,at+ct,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,ct),ct+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,at,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,U,w,L){const I=O.value,V=U+"_"+w;if(L[V]===void 0)return typeof I=="number"||typeof I=="boolean"?L[V]=I:L[V]=I.clone(),!0;{const F=L[V];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return L[V]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function E(O){const U=O.uniforms;let w=0;const L=16;for(let V=0,F=U.length;V<F;V++){const D=Array.isArray(U[V])?U[V]:[U[V]];for(let N=0,H=D.length;N<H;N++){const at=D[N],st=Array.isArray(at.value)?at.value:[at.value];for(let ct=0,it=st.length;ct<it;ct++){const P=st[ct],W=b(P),G=w%L,vt=G%W.boundary,C=G+vt;w+=vt,C!==0&&L-C<W.storage&&(w+=L-C),at.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=w,w+=W.storage}}}const I=w%L;return I>0&&(w+=L-I),O.__size=w,O.__cache={},this}function b(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function v(O){const U=O.target;U.removeEventListener("dispose",v);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class pp{constructor(t={}){const{canvas:i=nM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),b=new Int32Array(4);let v=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1;this._outputColorSpace=gi;let I=0,V=0,F=null,D=-1,N=null;const H=new qe,at=new qe;let st=null;const ct=new xe(0);let it=0,P=i.width,W=i.height,G=1,vt=null,C=null;const K=new qe(0,0,P,W),ht=new qe(0,0,P,W);let gt=!1;const Et=new lp;let $=!1,ft=!1;const pt=new Qe,xt=new Q,Bt=new qe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function bt(){return F===null?G:1}let B=r;function ie(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zh}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",At,!1),B===null){const Y="webgl2";if(B=ie(Y,R),B===null)throw ie(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ht,de,Ct,Ee,It,re,Fe,De,z,T,tt,dt,yt,ut,Ft,Dt,Kt,Jt,Tt,Ot,te,jt,Lt,fe;function q(){Ht=new OT(B),Ht.init(),jt=new gA(B,Ht),de=new wT(B,Ht,t,jt),Ct=new pA(B,Ht),de.reversedDepthBuffer&&y&&Ct.buffers.depth.setReversed(!0),Ee=new BT(B),It=new eA,re=new mA(B,Ht,Ct,It,de,jt,Ee),Fe=new CT(w),De=new NT(w),z=new kM(B),Lt=new TT(B,z),T=new PT(B,z,Ee,Lt),tt=new FT(B,T,z,Ee),Tt=new IT(B,de,re),Dt=new RT(It),dt=new tA(w,Fe,De,Ht,de,Lt,Dt),yt=new MA(w,It),ut=new iA,Ft=new cA(Ht),Jt=new bT(w,Fe,De,Ct,tt,S,m),Kt=new dA(w,tt,de),fe=new EA(B,Ee,de,Ct),Ot=new AT(B,Ht,Ee),te=new zT(B,Ht,Ee),Ee.programs=dt.programs,w.capabilities=de,w.extensions=Ht,w.properties=It,w.renderLists=ut,w.shadowMap=Kt,w.state=Ct,w.info=Ee}q();const Rt=new yA(w,B);this.xr=Rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(P,W,!1))},this.getSize=function(R){return R.set(P,W)},this.setSize=function(R,Y,ot=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,W=Y,i.width=Math.floor(R*G),i.height=Math.floor(Y*G),ot===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*G,W*G).floor()},this.setDrawingBufferSize=function(R,Y,ot){P=R,W=Y,G=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Y*ot),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,Y,ot,lt){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,Y,ot,lt),Ct.viewport(H.copy(K).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Y,ot,lt){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Y,ot,lt),Ct.scissor(at.copy(ht).multiplyScalar(G).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){Ct.setScissorTest(gt=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){C=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ot=!0){let lt=0;if(R){let Z=!1;if(F!==null){const wt=F.texture.format;Z=wt===np||wt===ep||wt===tp}if(Z){const wt=F.texture.type,Nt=wt===Gi||wt===Rr||wt===el||wt===nl||wt===Jh||wt===$h,kt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),ae=kt.r,oe=kt.g,Qt=kt.b;Nt?(E[0]=ae,E[1]=oe,E[2]=Qt,E[3]=Pt,B.clearBufferuiv(B.COLOR,0,E)):(b[0]=ae,b[1]=oe,b[2]=Qt,b[3]=Pt,B.clearBufferiv(B.COLOR,0,b))}else lt|=B.COLOR_BUFFER_BIT}Y&&(lt|=B.DEPTH_BUFFER_BIT),ot&&(lt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Jt.dispose(),ut.dispose(),Ft.dispose(),It.dispose(),Fe.dispose(),De.dispose(),tt.dispose(),Lt.dispose(),fe.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",pn),Rt.removeEventListener("sessionend",mn),en.stop()};function Ut(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=Ee.autoReset,Y=Kt.enabled,ot=Kt.autoUpdate,lt=Kt.needsUpdate,Z=Kt.type;q(),Ee.autoReset=R,Kt.enabled=Y,Kt.autoUpdate=ot,Kt.needsUpdate=lt,Kt.type=Z}function At(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const Y=R.target;Y.removeEventListener("dispose",Mt),Yt(Y)}function Yt(R){ue(R),It.remove(R)}function ue(R){const Y=It.get(R).programs;Y!==void 0&&(Y.forEach(function(ot){dt.releaseProgram(ot)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ot,lt,Z,wt){Y===null&&(Y=Zt);const Nt=Z.isMesh&&Z.matrixWorld.determinant()<0,kt=pa(R,Y,ot,lt,Z);Ct.setMaterial(lt,Nt);let Pt=ot.index,ae=1;if(lt.wireframe===!0){if(Pt=T.getWireframeAttribute(ot),Pt===void 0)return;ae=2}const oe=ot.drawRange,Qt=ot.attributes.position;let ge=oe.start*ae,Le=(oe.start+oe.count)*ae;wt!==null&&(ge=Math.max(ge,wt.start*ae),Le=Math.min(Le,(wt.start+wt.count)*ae)),Pt!==null?(ge=Math.max(ge,0),Le=Math.min(Le,Pt.count)):Qt!=null&&(ge=Math.max(ge,0),Le=Math.min(Le,Qt.count));const Je=Le-ge;if(Je<0||Je===1/0)return;Lt.setup(Z,lt,kt,ot,Pt);let He,_e=Ot;if(Pt!==null&&(He=z.get(Pt),_e=te,_e.setIndex(He)),Z.isMesh)lt.wireframe===!0?(Ct.setLineWidth(lt.wireframeLinewidth*bt()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(Z.isLine){let ee=lt.linewidth;ee===void 0&&(ee=1),Ct.setLineWidth(ee*bt()),Z.isLineSegments?_e.setMode(B.LINES):Z.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else Z.isPoints?_e.setMode(B.POINTS):Z.isSprite&&_e.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ee=Z._multiDrawStarts,Ke=Z._multiDrawCounts,be=Z._multiDrawCount,Un=Pt?z.get(Pt).bytesPerElement:1,xi=It.get(lt).currentProgram.getUniforms();for(let Hn=0;Hn<be;Hn++)xi.setValue(B,"_gl_DrawID",Hn),_e.render(ee[Hn]/Un,Ke[Hn])}else if(Z.isInstancedMesh)_e.renderInstances(ge,Je,Z.count);else if(ot.isInstancedBufferGeometry){const ee=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ke=Math.min(ot.instanceCount,ee);_e.renderInstances(ge,Je,Ke)}else _e.render(ge,Je)};function ze(R,Y,ot){R.transparent===!0&&R.side===Ai&&R.forceSinglePass===!1?(R.side=Bn,R.needsUpdate=!0,Di(R,Y,ot),R.side=Ka,R.needsUpdate=!0,Di(R,Y,ot),R.side=Ai):Di(R,Y,ot)}this.compile=function(R,Y,ot=null){ot===null&&(ot=R),_=Ft.get(ot),_.init(Y),U.push(_),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==ot&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const lt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Nt=0;Nt<wt.length;Nt++){const kt=wt[Nt];ze(kt,ot,Z),lt.add(kt)}else ze(wt,ot,Z),lt.add(wt)}),_=U.pop(),lt},this.compileAsync=function(R,Y,ot=null){const lt=this.compile(R,Y,ot);return new Promise(Z=>{function wt(){if(lt.forEach(function(Nt){It.get(Nt).currentProgram.isReady()&&lt.delete(Nt)}),lt.size===0){Z(R);return}setTimeout(wt,10)}Ht.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ue=null;function vi(R){Ue&&Ue(R)}function pn(){en.stop()}function mn(){en.start()}const en=new zv;en.setAnimationLoop(vi),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(R){Ue=R,Rt.setAnimationLoop(R),R===null?en.stop():en.start()},Rt.addEventListener("sessionstart",pn),Rt.addEventListener("sessionend",mn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,F),_=Ft.get(R,U.length),_.init(Y),U.push(_),pt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Et.setFromProjectionMatrix(pt,Hi,Y.reversedDepth),ft=this.localClippingEnabled,$=Dt.init(this.clippingPlanes,ft),v=ut.get(R,O.length),v.init(),O.push(v),Rt.enabled===!0&&Rt.isPresenting===!0){const wt=w.xr.getDepthSensingMesh();wt!==null&&Ci(wt,Y,-1/0,w.sortObjects)}Ci(R,Y,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(vt,C),Ce=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Ce&&Jt.addToRenderList(v,R),this.info.render.frame++,$===!0&&Dt.beginShadows();const ot=_.state.shadowsArray;Kt.render(ot,R,Y),$===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=v.opaque,Z=v.transmissive;if(_.setupLights(),Y.isArrayCamera){const wt=Y.cameras;if(Z.length>0)for(let Nt=0,kt=wt.length;Nt<kt;Nt++){const Pt=wt[Nt];fl(lt,Z,R,Pt)}Ce&&Jt.render(R);for(let Nt=0,kt=wt.length;Nt<kt;Nt++){const Pt=wt[Nt];Ur(v,R,Pt,Pt.viewport)}}else Z.length>0&&fl(lt,Z,R,Y),Ce&&Jt.render(R),Ur(v,R,Y);F!==null&&V===0&&(re.updateMultisampleRenderTarget(F),re.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(w,R,Y),Lt.resetDefaultState(),D=-1,N=null,U.pop(),U.length>0?(_=U[U.length-1],$===!0&&Dt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?v=O[O.length-1]:v=null};function Ci(R,Y,ot,lt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Et.intersectsSprite(R)){lt&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const Nt=tt.update(R),kt=R.material;kt.visible&&v.push(R,Nt,kt,ot,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Et.intersectsObject(R))){const Nt=tt.update(R),kt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Bt.copy(Nt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(kt)){const Pt=Nt.groups;for(let ae=0,oe=Pt.length;ae<oe;ae++){const Qt=Pt[ae],ge=kt[Qt.materialIndex];ge&&ge.visible&&v.push(R,Nt,ge,ot,Bt.z,Qt)}}else kt.visible&&v.push(R,Nt,kt,ot,Bt.z,null)}}const wt=R.children;for(let Nt=0,kt=wt.length;Nt<kt;Nt++)Ci(wt[Nt],Y,ot,lt)}function Ur(R,Y,ot,lt){const Z=R.opaque,wt=R.transmissive,Nt=R.transparent;_.setupLightsView(ot),$===!0&&Dt.setGlobalState(w.clippingPlanes,ot),lt&&Ct.viewport(H.copy(lt)),Z.length>0&&Lr(Z,Y,ot),wt.length>0&&Lr(wt,Y,ot),Nt.length>0&&Lr(Nt,Y,ot),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function fl(R,Y,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Cr(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?sl:Gi,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const wt=_.state.transmissionRenderTarget[lt.id],Nt=lt.viewport||H;wt.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);const kt=w.getRenderTarget(),Pt=w.getActiveCubeFace(),ae=w.getActiveMipmapLevel();w.setRenderTarget(wt),w.getClearColor(ct),it=w.getClearAlpha(),it<1&&w.setClearColor(16777215,.5),w.clear(),Ce&&Jt.render(ot);const oe=w.toneMapping;w.toneMapping=ja;const Qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),$===!0&&Dt.setGlobalState(w.clippingPlanes,lt),Lr(R,ot,lt),re.updateMultisampleRenderTarget(wt),re.updateRenderTargetMipmap(wt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Le=0,Je=Y.length;Le<Je;Le++){const He=Y[Le],_e=He.object,ee=He.geometry,Ke=He.material,be=He.group;if(Ke.side===Ai&&_e.layers.test(lt.layers)){const Un=Ke.side;Ke.side=Bn,Ke.needsUpdate=!0,qs(_e,ot,lt,ee,Ke,be),Ke.side=Un,Ke.needsUpdate=!0,ge=!0}}ge===!0&&(re.updateMultisampleRenderTarget(wt),re.updateRenderTargetMipmap(wt))}w.setRenderTarget(kt,Pt,ae),w.setClearColor(ct,it),Qt!==void 0&&(lt.viewport=Qt),w.toneMapping=oe}function Lr(R,Y,ot){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,wt=R.length;Z<wt;Z++){const Nt=R[Z],kt=Nt.object,Pt=Nt.geometry,ae=Nt.group;let oe=Nt.material;oe.allowOverride===!0&&lt!==null&&(oe=lt),kt.layers.test(ot.layers)&&qs(kt,Y,ot,Pt,oe,ae)}}function qs(R,Y,ot,lt,Z,wt){R.onBeforeRender(w,Y,ot,lt,Z,wt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,Y,ot,lt,R,wt),Z.transparent===!0&&Z.side===Ai&&Z.forceSinglePass===!1?(Z.side=Bn,Z.needsUpdate=!0,w.renderBufferDirect(ot,Y,lt,Z,R,wt),Z.side=Ka,Z.needsUpdate=!0,w.renderBufferDirect(ot,Y,lt,Z,R,wt),Z.side=Ai):w.renderBufferDirect(ot,Y,lt,Z,R,wt),R.onAfterRender(w,Y,ot,lt,Z,wt)}function Di(R,Y,ot){Y.isScene!==!0&&(Y=Zt);const lt=It.get(R),Z=_.state.lights,wt=_.state.shadowsArray,Nt=Z.state.version,kt=dt.getParameters(R,Z.state,wt,Y,ot),Pt=dt.getProgramCacheKey(kt);let ae=lt.programs;lt.environment=R.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(R.isMeshStandardMaterial?De:Fe).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ae===void 0&&(R.addEventListener("dispose",Mt),ae=new Map,lt.programs=ae);let oe=ae.get(Pt);if(oe!==void 0){if(lt.currentProgram===oe&&lt.lightsStateVersion===Nt)return ki(R,kt),oe}else kt.uniforms=dt.getUniforms(R),R.onBeforeCompile(kt,w),oe=dt.acquireProgram(kt,Pt),ae.set(Pt,oe),lt.uniforms=kt.uniforms;const Qt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Dt.uniform),ki(R,kt),lt.needsLights=ma(R),lt.lightsStateVersion=Nt,lt.needsLights&&(Qt.ambientLightColor.value=Z.state.ambient,Qt.lightProbe.value=Z.state.probe,Qt.directionalLights.value=Z.state.directional,Qt.directionalLightShadows.value=Z.state.directionalShadow,Qt.spotLights.value=Z.state.spot,Qt.spotLightShadows.value=Z.state.spotShadow,Qt.rectAreaLights.value=Z.state.rectArea,Qt.ltc_1.value=Z.state.rectAreaLTC1,Qt.ltc_2.value=Z.state.rectAreaLTC2,Qt.pointLights.value=Z.state.point,Qt.pointLightShadows.value=Z.state.pointShadow,Qt.hemisphereLights.value=Z.state.hemi,Qt.directionalShadowMap.value=Z.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qt.spotShadowMap.value=Z.state.spotShadowMap,Qt.spotLightMatrix.value=Z.state.spotLightMatrix,Qt.spotLightMap.value=Z.state.spotLightMap,Qt.pointShadowMap.value=Z.state.pointShadowMap,Qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),lt.currentProgram=oe,lt.uniformsList=null,oe}function Nr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=tu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ki(R,Y){const ot=It.get(R);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function pa(R,Y,ot,lt,Z){Y.isScene!==!0&&(Y=Zt),re.resetTextureUnits();const wt=Y.fog,Nt=lt.isMeshStandardMaterial?Y.environment:null,kt=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Hs,Pt=(lt.isMeshStandardMaterial?De:Fe).get(lt.envMap||Nt),ae=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,oe=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Qt=!!ot.morphAttributes.position,ge=!!ot.morphAttributes.normal,Le=!!ot.morphAttributes.color;let Je=ja;lt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=w.toneMapping);const He=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,_e=He!==void 0?He.length:0,ee=It.get(lt),Ke=_.state.lights;if($===!0&&(ft===!0||R!==N)){const nn=R===N&&lt.id===D;Dt.setState(lt,R,nn)}let be=!1;lt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ke.state.version||ee.outputColorSpace!==kt||Z.isBatchedMesh&&ee.batching===!1||!Z.isBatchedMesh&&ee.batching===!0||Z.isBatchedMesh&&ee.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ee.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ee.instancing===!1||!Z.isInstancedMesh&&ee.instancing===!0||Z.isSkinnedMesh&&ee.skinning===!1||!Z.isSkinnedMesh&&ee.skinning===!0||Z.isInstancedMesh&&ee.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ee.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ee.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ee.instancingMorph===!1&&Z.morphTexture!==null||ee.envMap!==Pt||lt.fog===!0&&ee.fog!==wt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Dt.numPlanes||ee.numIntersection!==Dt.numIntersection)||ee.vertexAlphas!==ae||ee.vertexTangents!==oe||ee.morphTargets!==Qt||ee.morphNormals!==ge||ee.morphColors!==Le||ee.toneMapping!==Je||ee.morphTargetsCount!==_e)&&(be=!0):(be=!0,ee.__version=lt.version);let Un=ee.currentProgram;be===!0&&(Un=Di(lt,Y,Z));let xi=!1,Hn=!1,Sn=!1;const Ye=Un.getUniforms(),Gn=ee.uniforms;if(Ct.useProgram(Un.program)&&(xi=!0,Hn=!0,Sn=!0),lt.id!==D&&(D=lt.id,Hn=!0),xi||N!==R){Ct.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ye.setValue(B,"projectionMatrix",R.projectionMatrix),Ye.setValue(B,"viewMatrix",R.matrixWorldInverse);const wn=Ye.map.cameraPosition;wn!==void 0&&wn.setValue(B,xt.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Ye.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ye.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),N!==R&&(N=R,Hn=!0,Sn=!0)}if(Z.isSkinnedMesh){Ye.setOptional(B,Z,"bindMatrix"),Ye.setOptional(B,Z,"bindMatrixInverse");const nn=Z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ye.setValue(B,"boneTexture",nn.boneTexture,re))}Z.isBatchedMesh&&(Ye.setOptional(B,Z,"batchingTexture"),Ye.setValue(B,"batchingTexture",Z._matricesTexture,re),Ye.setOptional(B,Z,"batchingIdTexture"),Ye.setValue(B,"batchingIdTexture",Z._indirectTexture,re),Ye.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ye.setValue(B,"batchingColorTexture",Z._colorsTexture,re));const Ln=ot.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Tt.update(Z,ot,Un),(Hn||ee.receiveShadow!==Z.receiveShadow)&&(ee.receiveShadow=Z.receiveShadow,Ye.setValue(B,"receiveShadow",Z.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Gn.envMap.value=Pt,Gn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(Gn.envMapIntensity.value=Y.environmentIntensity),Hn&&(Ye.setValue(B,"toneMappingExposure",w.toneMappingExposure),ee.needsLights&&Ja(Gn,Sn),wt&&lt.fog===!0&&yt.refreshFogUniforms(Gn,wt),yt.refreshMaterialUniforms(Gn,lt,G,W,_.state.transmissionRenderTarget[R.id]),tu.upload(B,Nr(ee),Gn,re)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(tu.upload(B,Nr(ee),Gn,re),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ye.setValue(B,"center",Z.center),Ye.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Ye.setValue(B,"normalMatrix",Z.normalMatrix),Ye.setValue(B,"modelMatrix",Z.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const nn=lt.uniformsGroups;for(let wn=0,Or=nn.length;wn<Or;wn++){const qn=nn[wn];fe.update(qn,Un),fe.bind(qn,Un)}}return Un}function Ja(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ma(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,Y,ot){const lt=It.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),It.get(R.texture).__webglTexture=Y,It.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ot=It.get(R);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const cn=B.createFramebuffer();this.setRenderTarget=function(R,Y=0,ot=0){F=R,I=Y,V=ot;let lt=!0,Z=null,wt=!1,Nt=!1;if(R){const Pt=It.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(B.FRAMEBUFFER,null),lt=!1;else if(Pt.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Pt.__hasExternalTextures)re.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Pt.__boundDepthTexture!==Qt){if(Qt!==null&&It.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Nt=!0);const oe=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[Y])?Z=oe[Y][ot]:Z=oe[Y],wt=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Z=It.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?Z=oe[ot]:Z=oe,H.copy(R.viewport),at.copy(R.scissor),st=R.scissorTest}else H.copy(K).multiplyScalar(G).floor(),at.copy(ht).multiplyScalar(G).floor(),st=gt;if(ot!==0&&(Z=cn),Ct.bindFramebuffer(B.FRAMEBUFFER,Z)&&lt&&Ct.drawBuffers(R,Z),Ct.viewport(H),Ct.scissor(at),Ct.setScissorTest(st),wt){const Pt=It.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,ot)}else if(Nt){const Pt=Y;for(let ae=0;ae<R.textures.length;ae++){const oe=It.get(R.textures[ae]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ae,oe.__webglTexture,ot,Pt)}}else if(R!==null&&ot!==0){const Pt=It.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,ot)}D=-1},this.readRenderTargetPixels=function(R,Y,ot,lt,Z,wt,Nt,kt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){Ct.bindFramebuffer(B.FRAMEBUFFER,Pt);try{const ae=R.textures[kt],oe=ae.format,Qt=ae.type;if(!de.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-lt&&ot>=0&&ot<=R.height-Z&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(Y,ot,lt,Z,jt.convert(oe),jt.convert(Qt),wt))}finally{const ae=F!==null?It.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(B.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ot,lt,Z,wt,Nt,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(Y>=0&&Y<=R.width-lt&&ot>=0&&ot<=R.height-Z){Ct.bindFramebuffer(B.FRAMEBUFFER,Pt);const ae=R.textures[kt],oe=ae.format,Qt=ae.type;if(!de.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.bufferData(B.PIXEL_PACK_BUFFER,wt.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(Y,ot,lt,Z,jt.convert(oe),jt.convert(Qt),0);const Le=F!==null?It.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(B.FRAMEBUFFER,Le);const Je=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await iM(B,Je,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,wt),B.deleteBuffer(ge),B.deleteSync(Je),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ot=0){const lt=Math.pow(2,-ot),Z=Math.floor(R.image.width*lt),wt=Math.floor(R.image.height*lt),Nt=Y!==null?Y.x:0,kt=Y!==null?Y.y:0;re.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,Nt,kt,Z,wt),Ct.unbindTexture()};const dl=B.createFramebuffer(),hl=B.createFramebuffer();this.copyTextureToTexture=function(R,Y,ot=null,lt=null,Z=0,wt=null){wt===null&&(Z!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=Z,Z=0):wt=0);let Nt,kt,Pt,ae,oe,Qt,ge,Le,Je;const He=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(ot!==null)Nt=ot.max.x-ot.min.x,kt=ot.max.y-ot.min.y,Pt=ot.isBox3?ot.max.z-ot.min.z:1,ae=ot.min.x,oe=ot.min.y,Qt=ot.isBox3?ot.min.z:0;else{const Ln=Math.pow(2,-Z);Nt=Math.floor(He.width*Ln),kt=Math.floor(He.height*Ln),R.isDataArrayTexture?Pt=He.depth:R.isData3DTexture?Pt=Math.floor(He.depth*Ln):Pt=1,ae=0,oe=0,Qt=0}lt!==null?(ge=lt.x,Le=lt.y,Je=lt.z):(ge=0,Le=0,Je=0);const _e=jt.convert(Y.format),ee=jt.convert(Y.type);let Ke;Y.isData3DTexture?(re.setTexture3D(Y,0),Ke=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(re.setTexture2DArray(Y,0),Ke=B.TEXTURE_2D_ARRAY):(re.setTexture2D(Y,0),Ke=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const be=B.getParameter(B.UNPACK_ROW_LENGTH),Un=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xi=B.getParameter(B.UNPACK_SKIP_PIXELS),Hn=B.getParameter(B.UNPACK_SKIP_ROWS),Sn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,He.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,He.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ae),B.pixelStorei(B.UNPACK_SKIP_ROWS,oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt);const Ye=R.isDataArrayTexture||R.isData3DTexture,Gn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Ln=It.get(R),nn=It.get(Y),wn=It.get(Ln.__renderTarget),Or=It.get(nn.__renderTarget);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let qn=0;qn<Pt;qn++)Ye&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(R).__webglTexture,Z,Qt+qn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(Y).__webglTexture,wt,Je+qn)),B.blitFramebuffer(ae,oe,Nt,kt,ge,Le,Nt,kt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||It.has(R)){const Ln=It.get(R),nn=It.get(Y);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,dl),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,hl);for(let wn=0;wn<Pt;wn++)Ye?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ln.__webglTexture,Z,Qt+wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ln.__webglTexture,Z),Gn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nn.__webglTexture,wt,Je+wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nn.__webglTexture,wt),Z!==0?B.blitFramebuffer(ae,oe,Nt,kt,ge,Le,Nt,kt,B.COLOR_BUFFER_BIT,B.NEAREST):Gn?B.copyTexSubImage3D(Ke,wt,ge,Le,Je+wn,ae,oe,Nt,kt):B.copyTexSubImage2D(Ke,wt,ge,Le,ae,oe,Nt,kt);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Gn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ke,wt,ge,Le,Je,Nt,kt,Pt,_e,ee,He.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Ke,wt,ge,Le,Je,Nt,kt,Pt,_e,He.data):B.texSubImage3D(Ke,wt,ge,Le,Je,Nt,kt,Pt,_e,ee,He):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,wt,ge,Le,Nt,kt,_e,ee,He.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,wt,ge,Le,He.width,He.height,_e,He.data):B.texSubImage2D(B.TEXTURE_2D,wt,ge,Le,Nt,kt,_e,ee,He);B.pixelStorei(B.UNPACK_ROW_LENGTH,be),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Un),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Hn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Sn),wt===0&&Y.generateMipmaps&&B.generateMipmap(Ke),Ct.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ot=null,lt=null,Z=0){return Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ot,lt,Z)},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){I=0,V=0,F=null,Ct.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const bA={radius_km:6371,distance_from_sun_au:1,orbital_period_earth_days:365,rotation_period_hours:23.93},TA={radius_km:1737.4,distance_from_earth_km:384400,orbital_period_earth_days:27.3,rotation_period_earth_days:27.3},AA={radius_km:3389.5,distance_from_sun_au:1.52,orbital_period_earth_days:687,rotation_period_hours:24.62},wA={radius_km:6051.8,distance_from_sun_au:.72,orbital_period_earth_days:225,rotation_period_earth_days:243},RA={radius_km:2439.7,distance_from_sun_au:.39,orbital_period_earth_days:88,rotation_period_earth_days:58.67},CA={radius_km:69911,distance_from_sun_au:5.2,orbital_period_earth_days:4333,rotation_period_hours:9.92},DA={radius_km:58232,distance_from_sun_au:9.5,orbital_period_earth_days:10759,rotation_period_hours:10.55},UA={radius_km:25362,distance_from_sun_au:19.8,orbital_period_earth_days:30687,rotation_period_hours:17.23},LA={radius_km:24622,distance_from_sun_au:30,orbital_period_earth_days:60190,rotation_period_hours:16.1},NA={Earth:bA,Moon:TA,Mars:AA,Venus:wA,Mercury:RA,Jupiter:CA,Saturn:DA,Uranus:UA,Neptune:LA},Vv=ne.forwardRef(({onLocationChange:s},t)=>{const i=ne.useRef(null),r=ne.useRef(null),l=ne.useRef(null),c=ne.useRef(null),f=ne.useRef({}),h=ne.useRef(null),m=ne.useRef(0),p=ne.useRef(0),g=ne.useRef(150);ne.useImperativeHandle(t,()=>({focusOnPlanet:y=>{console.log("focusOnPlanet called for:",y),console.log("Available planets:",Object.keys(f.current));const S=f.current[y];if(S&&S.mesh){console.log("Planet found:",y),console.log("Planet mesh position:",S.mesh.position),console.log("Planet data:",S.data),s&&s(y);const E=S.mesh.position.clone();console.log("Planet position:",E);let b,v,_;if(y==="Sun")b=0,v=.3,_=120;else{const U=E.x,w=E.z,L=Math.sqrt(U*U+w*w),I=Math.atan2(w,U);console.log("Planet actual position data:",{name:y,actualX:U,actualZ:w,actualDistance:L,actualAngle:I,storedDistance:S.distance,storedAngle:S.angle}),b=I+Math.PI/3,v=.2,_=Math.max(L*.4,40),console.log("Calculated target angles:",{targetTheta:b,targetPhi:v,targetDistance:_})}const O=c.current;if(O){console.log("Camera found, starting animation");const U=Math.sqrt(O.position.x*O.position.x+O.position.y*O.position.y+O.position.z*O.position.z),w=Math.atan2(O.position.z,O.position.x),L=Math.asin(O.position.y/U);console.log("Current camera state:",{currentTheta:w,currentPhi:L,currentDistance:U}),(()=>{const V=Date.now(),F=2e3,D=m.current,N=p.current,H=g.current;console.log("Starting animation from:",{startTheta:D,startPhi:N,startDistance:H},"to:",{targetTheta:b,targetPhi:v,targetDistance:_});const at=()=>{const st=Date.now()-V,ct=Math.min(st/F,1),it=1-Math.pow(1-ct,3);m.current=D+(b-D)*it,p.current=N+(v-N)*it,g.current=H+(_-H)*it,console.log("Animation progress:",ct,"Current values:",{targetX:m.current,targetY:p.current,cameraDistance:g.current}),ct<1?requestAnimationFrame(at):(m.current=b,p.current=v,g.current=_,console.log("Animation complete, final values:",{targetX:m.current,targetY:p.current,cameraDistance:g.current}))};at()})()}else console.log("Camera not found in cameraRef.current")}else console.log("Planet not found:",y,"Available planets:",Object.keys(f.current))}}),[s]),ne.useEffect(()=>{if(!i.current)return;const y=new sp;y.background=new xe(8),r.current=y;const S=new Fn,E=2e4,b=new Float32Array(E*3),v=new Float32Array(E*3);for(let bt=0;bt<E;bt++){b[bt*3]=(Math.random()-.5)*2500,b[bt*3+1]=(Math.random()-.5)*2500,b[bt*3+2]=(Math.random()-.5)*2500;const B=Math.random();B<.6?(v[bt*3]=1,v[bt*3+1]=1,v[bt*3+2]=1):B<.8?(v[bt*3]=.6,v[bt*3+1]=.8,v[bt*3+2]=1):B<.95?(v[bt*3]=1,v[bt*3+1]=1,v[bt*3+2]=.7):(v[bt*3]=1,v[bt*3+1]=.6,v[bt*3+2]=.4)}S.setAttribute("position",new hn(b,3)),S.setAttribute("color",new hn(v,3));const _=new zs({size:2,vertexColors:!0,transparent:!0,opacity:.8}),O=new tl(S,_);y.add(O);const U=O,w=new Wn(60,window.innerWidth/window.innerHeight,.1,5e3);w.position.set(0,50,150),c.current=w;const L=new pp({antialias:!0});L.setSize(window.innerWidth,window.innerHeight),L.shadowMap.enabled=!0,L.shadowMap.type=au,i.current.appendChild(L.domElement),l.current=L;const I=new dp(4210752,1.5);y.add(I);const V=new Ov(16777215,2,1e3);V.position.set(0,0,0),V.castShadow=!0,V.shadow.mapSize.width=2048,V.shadow.mapSize.height=2048,y.add(V);const F=new Lv,D=new Qn(8,64,64),N=F.load("/assets/textures/sun_texture.jpg"),H=new zi({map:N,emissive:16755200,emissiveIntensity:.3}),at=new sn(D,H);y.add(at),f.current.Sun={mesh:at,radius:8,distance:0,angle:0};const st=50,ct=.5,it={Mercury:{color:12559728,texture:"/assets/textures/mercury_texture.jpg",emissive:3351057},Venus:{color:16767334,texture:"/assets/textures/venus_texture.png",emissive:5588019},Earth:{color:2267613,texture:"/assets/textures/earth_texture.jpg",emissive:13141},Mars:{color:15628151,texture:"/assets/textures/mars_texture.jpg",emissive:4469555},Jupiter:{color:15649962,texture:"/assets/textures/jupiter_texture.jpg",emissive:4469538},Saturn:{color:16772812,texture:"/assets/textures/saturn_texture.jpg",emissive:4469538},Uranus:{color:6741503,texture:"/assets/textures/uranus_texture.png",emissive:13124},Neptune:{color:6719743,texture:"/assets/textures/neptune_texture.jpg",emissive:8772}};Object.entries(NA).forEach(([bt,B])=>{if(bt==="Moon")return;const ie=Math.max(B.radius_km*ct*.001,.2),Ht=B.distance_from_sun_au*st,de=it[bt],Ct=new Qn(ie,64,64);let Ee;const It=F.load(de.texture);Ee=new zi({map:It,color:de.color,emissive:de.emissive,emissiveIntensity:.8,transparent:!1,opacity:1});const re=new sn(Ct,Ee);if(re.position.x=Ht,re.castShadow=!0,re.receiveShadow=!0,y.add(re),bt==="Saturn"){const dt=new cp(ie*1.2,ie*2.2,64),yt=new zi({color:12632256,side:Ai,transparent:!0,opacity:.7,alphaTest:.1}),ut=new sn(dt,yt);ut.rotation.x=Math.PI/2,ut.castShadow=!0,ut.receiveShadow=!0,re.add(ut)}f.current[bt]={mesh:re,data:B,distance:Ht,angle:0,radius:ie,moons:[]};const Fe=document.createElement("canvas"),De=Fe.getContext("2d");Fe.width=512,Fe.height=128,De.fillStyle="rgba(255, 255, 255, 0.9)",De.font="bold 32px Arial",De.textAlign="center",De.textBaseline="middle",De.shadowColor="rgba(0, 0, 0, 0.8)",De.shadowBlur=4,De.shadowOffsetX=2,De.shadowOffsetY=2,De.fillText(bt,256,64);const z=new Dv(Fe),T=new op({map:z,transparent:!0,alphaTest:.1}),tt=new Cv(T);tt.position.copy(re.position),tt.position.y+=ie*4,tt.scale.set(ie*12,ie*3,1),y.add(tt),f.current[bt].label=tt}),x(y,f.current,F);let P=!1,W=0,G=0;m.current,p.current;let vt=g.current,C=!1,K=5;const ht=bt=>{bt.preventDefault(),P=!0,C=!1,W=bt.clientX,G=bt.clientY},gt=bt=>{if(!P)return;bt.preventDefault();const B=c.current;if(B&&B.userData.focusMode)return;const ie=bt.clientX-W,Ht=bt.clientY-G;(Math.abs(ie)>K||Math.abs(Ht)>K)&&(C=!0),C&&(m.current+=ie*.005,p.current+=Ht*.005,p.current=Math.max(-Math.PI/2,Math.min(Math.PI/2,p.current)),W=bt.clientX,G=bt.clientY)},Et=bt=>{bt.preventDefault(),!C&&P&&$(bt),P=!1,C=!1},$=bt=>{const B=L.domElement.getBoundingClientRect(),ie=new me;ie.x=(bt.clientX-B.left)/B.width*2-1,ie.y=-((bt.clientY-B.top)/B.height)*2+1;const Ht=new GM;Ht.setFromCamera(ie,w);const de=Object.values(f.current).map(Ee=>Ee.mesh).filter(Boolean),Ct=Ht.intersectObjects(de);if(Ct.length>0){const Ee=Ct[0].object;for(const[It,re]of Object.entries(f.current))if(re.mesh===Ee){focusOnPlanet(It),s&&s(It);break}}},ft=bt=>{bt.preventDefault();const B=.05;g.current+=bt.deltaY*B,g.current=Math.max(10,Math.min(1e3,g.current));const ie=c.current;if(ie){const Ht=new Q;ie.getWorldDirection(Ht);const Ct=new Q(0,0,0).clone().sub(Ht.multiplyScalar(vt));ie.userData.focusMode||ie.position.copy(Ct)}},pt=bt=>{bt.touches.length===1&&(bt.preventDefault(),P=!0,W=bt.touches[0].clientX,G=bt.touches[0].clientY)},xt=bt=>{if(!P||bt.touches.length!==1)return;bt.preventDefault();const B=c.current;if(B&&B.userData.focusMode)return;const ie=bt.touches[0].clientX-W,Ht=bt.touches[0].clientY-G;m.current+=ie*.005,p.current+=Ht*.005,p.current=Math.max(-Math.PI/2,Math.min(Math.PI/2,p.current)),W=bt.touches[0].clientX,G=bt.touches[0].clientY},Bt=bt=>{bt.preventDefault(),P=!1};L.domElement.addEventListener("mousedown",ht),L.domElement.addEventListener("mousemove",gt),L.domElement.addEventListener("mouseup",Et),L.domElement.addEventListener("wheel",ft),L.domElement.addEventListener("touchstart",pt),L.domElement.addEventListener("touchmove",xt),L.domElement.addEventListener("touchend",Bt);const Zt=()=>{h.current=requestAnimationFrame(Zt),Math.random()<.001&&console.log("Animation loop ref values:",{targetX:m.current,targetY:p.current,cameraDistance:g.current}),w.userData.focusMode?w.userData.focusMode&&console.log("Animation loop: Focus mode active, skipping camera update"):(w.position.x=Math.cos(m.current)*Math.cos(p.current)*g.current,w.position.y=Math.sin(p.current)*g.current,w.position.z=Math.sin(m.current)*Math.cos(p.current)*g.current,w.lookAt(0,0,0)),U.rotation.x+=1e-4,U.rotation.y+=2e-4,Object.entries(f.current).forEach(([bt,B])=>{if(bt==="Sun"){B.mesh.rotation.y+=.005;return}const Ht=.002/Math.pow(B.data.distance_from_sun_au,1.5);B.angle+=Ht,B.mesh.position.x=Math.cos(B.angle)*B.distance,B.mesh.position.z=Math.sin(B.angle)*B.distance,B.label&&(B.label.position.copy(B.mesh.position),B.label.position.y+=B.radius*4);const de=bt==="Venus"?-.005:.02;B.mesh.rotation.y+=de,B.moons&&B.moons.forEach(Ct=>{Ct.angle+=Ct.speed;const Ee=B.mesh.position;Ct.mesh.position.x=Ee.x+Math.cos(Ct.angle)*Ct.distance,Ct.mesh.position.z=Ee.z+Math.sin(Ct.angle)*Ct.distance,Ct.mesh.position.y=Ee.y+Math.sin(Ct.angle*.3)*Ct.distance*.05,Ct.mesh.rotation.y+=.01})}),L.render(y,w)};Zt();const Ce=()=>{w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),L.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ce),()=>{window.removeEventListener("resize",Ce),L.domElement.removeEventListener("mousedown",ht),L.domElement.removeEventListener("mousemove",gt),L.domElement.removeEventListener("mouseup",Et),L.domElement.removeEventListener("wheel",ft),L.domElement.removeEventListener("touchstart",pt),L.domElement.removeEventListener("touchmove",xt),L.domElement.removeEventListener("touchend",Bt),h.current&&cancelAnimationFrame(h.current),i.current&&L.domElement&&i.current.removeChild(L.domElement),L.dispose()}},[]);function x(y,S,E){if(S.Earth){const _=new Qn(.15,32,32),O=E.load("/assets/textures/moon_texture.jpg"),U=new zi({map:O,emissive:1118481,emissiveIntensity:.05}),w=new sn(_,U);w.castShadow=!0,w.receiveShadow=!0,y.add(w),S.Earth.moons.push({mesh:w,distance:3,angle:0,speed:.02,name:"Moon"})}if(S.Mars){const _=new Qn(.05,16,16),O=new zi({color:6908265}),U=new sn(_,O);U.castShadow=!0,y.add(U),S.Mars.moons.push({mesh:U,distance:1.5,angle:0,speed:.05,name:"Phobos"});const w=.03,L=2.2,I=new Qn(w,16,16),V=new zi({color:5592405}),F=new sn(I,V);F.castShadow=!0,y.add(F),S.Mars.moons.push({mesh:F,distance:L,angle:Math.PI,speed:.03,name:"Deimos"})}S.Jupiter&&[{name:"Io",radius:.08,distance:4,speed:.04,color:16777113},{name:"Europa",radius:.07,distance:5,speed:.03,color:11184895},{name:"Ganymede",radius:.09,distance:6.5,speed:.025,color:8947848},{name:"Callisto",radius:.08,distance:8,speed:.02,color:4473924}].forEach((v,_)=>{const O=new Qn(v.radius,16,16),U=new zi({color:v.color}),w=new sn(O,U);w.castShadow=!0,y.add(w),S.Jupiter.moons.push({mesh:w,distance:v.distance,angle:_*Math.PI/2,speed:v.speed,name:v.name})}),S.Saturn&&[{name:"Titan",radius:.12,distance:8,speed:.015,color:13408614},{name:"Enceladus",radius:.04,distance:5,speed:.03,color:16777215}].forEach((v,_)=>{const O=new Qn(v.radius,16,16),U=new zi({color:v.color}),w=new sn(O,U);w.castShadow=!0,y.add(w),S.Saturn.moons.push({mesh:w,distance:v.distance,angle:_*Math.PI,speed:v.speed,name:v.name})})}return Vt.jsx("div",{ref:i,className:"w-full h-full"})});Vv.displayName="EnhancedRealisticUniverseScene";const OA=({onLocationChange:s})=>{const t=ne.useRef(null),i=ne.useRef(null),r=ne.useRef(null),l=ne.useRef(null),c=ne.useRef(null),f=ne.useRef(null),[h,m]=ne.useState(!1);return ne.useEffect(()=>{if(!t.current)return;const p=new sp;p.background=new xe(8),i.current=p;const g=new Fn,x=1e4,y=new Float32Array(x*3);for(let xt=0;xt<x;xt++)y[xt*3]=(Math.random()-.5)*2e3,y[xt*3+1]=(Math.random()-.5)*2e3,y[xt*3+2]=(Math.random()-.5)*2e3;g.setAttribute("position",new hn(y,3));const S=new zs({color:16777215,size:1,transparent:!0,opacity:.8}),E=new tl(g,S);p.add(E);const b=new Wn(75,window.innerWidth/window.innerHeight,.1,1e4);b.position.set(0,0,200),l.current=b;const v=new pp({antialias:!0});v.setSize(window.innerWidth,window.innerHeight),v.shadowMap.enabled=!0,v.shadowMap.type=au,t.current.appendChild(v.domElement),r.current=v;const _=new dp(4210752,.4);p.add(_);const O=new FM(16777215,1);O.position.set(100,50,100),O.castShadow=!0,O.shadow.mapSize.width=2048,O.shadow.mapSize.height=2048,p.add(O);const U=new Lv,w=new Qn(50,128,128),L=U.load("/assets/textures/earth_texture.jpg",()=>{m(!0)}),I=new zi({map:L,transparent:!1}),V=new sn(w,I);V.castShadow=!0,V.receiveShadow=!0,p.add(V),c.current=V;const F=new Qn(52,64,64),D=new zi({color:8900331,transparent:!0,opacity:.2,side:Bn}),N=new sn(F,D);p.add(N);let H=!1,at=0,st=0,ct=0,it=0,P=200,W=!1,G=5;const vt=xt=>{xt.preventDefault(),H=!0,W=!1,at=xt.clientX,st=xt.clientY},C=xt=>{if(!H)return;xt.preventDefault();const Bt=xt.clientX-at,Zt=xt.clientY-st;(Math.abs(Bt)>G||Math.abs(Zt)>G)&&(W=!0),W&&(ct+=Bt*.005,it+=Zt*.005,it=Math.max(-Math.PI/2,Math.min(Math.PI/2,it)),at=xt.clientX,st=xt.clientY)},K=xt=>{xt.preventDefault(),H=!1,W=!1},ht=xt=>{xt.preventDefault(),P+=xt.deltaY*.1,P=Math.max(55,Math.min(500,P)),P>300?s&&s("Space View"):P>150?s&&s("High Altitude"):P>80?s&&s("Low Earth Orbit"):s&&s("Surface View")},gt=xt=>{xt.touches.length===1&&(xt.preventDefault(),H=!0,at=xt.touches[0].clientX,st=xt.touches[0].clientY)},Et=xt=>{if(!H||xt.touches.length!==1)return;xt.preventDefault();const Bt=xt.touches[0].clientX-at,Zt=xt.touches[0].clientY-st;ct+=Bt*.005,it+=Zt*.005,it=Math.max(-Math.PI/2,Math.min(Math.PI/2,it)),at=xt.touches[0].clientX,st=xt.touches[0].clientY},$=xt=>{xt.preventDefault(),H=!1};v.domElement.addEventListener("mousedown",vt),v.domElement.addEventListener("mousemove",C),v.domElement.addEventListener("mouseup",K),v.domElement.addEventListener("wheel",ht),v.domElement.addEventListener("touchstart",gt),v.domElement.addEventListener("touchmove",Et),v.domElement.addEventListener("touchend",$);const ft=()=>{f.current=requestAnimationFrame(ft),b.position.x=Math.cos(ct)*Math.cos(it)*P,b.position.y=Math.sin(it)*P,b.position.z=Math.sin(ct)*Math.cos(it)*P,b.lookAt(0,0,0),V&&(V.rotation.y+=.001,N.rotation.y+=.001),E.rotation.x+=1e-4,E.rotation.y+=2e-4,v.render(p,b)};ft();const pt=()=>{b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",pt),()=>{window.removeEventListener("resize",pt),v.domElement.removeEventListener("mousedown",vt),v.domElement.removeEventListener("mousemove",C),v.domElement.removeEventListener("mouseup",K),v.domElement.removeEventListener("wheel",ht),v.domElement.removeEventListener("touchstart",gt),v.domElement.removeEventListener("touchmove",Et),v.domElement.removeEventListener("touchend",$),f.current&&cancelAnimationFrame(f.current),t.current&&v.domElement&&t.current.removeChild(v.domElement),v.dispose()}},[s]),Vt.jsxs("div",{className:"relative w-full h-full",children:[Vt.jsx("div",{ref:t,className:"w-full h-full"}),!h&&Vt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80",children:Vt.jsx("div",{className:"text-white text-lg",children:"Loading Earth..."})})]})},PA=({onLocationChange:s})=>{const t=ne.useRef(null),i=ne.useRef(null),r=ne.useRef(null),l=ne.useRef(null),c=ne.useRef(null),f=ne.useRef(null),[h,m]=ne.useState(!1);ne.useEffect(()=>{if(!t.current)return;const E=new sp;E.background=new xe(5),i.current=E;const b=new Wn(75,window.innerWidth/window.innerHeight,.1,5e4);b.position.set(0,2e3,8e3),l.current=b;const v=new pp({antialias:!0});v.setSize(window.innerWidth,window.innerHeight),v.shadowMap.enabled=!0,v.shadowMap.type=au,t.current.appendChild(v.domElement),r.current=v;const _=new dp(4210752,.3);E.add(_);const O=new Ov(16755268,2,5e3);O.position.set(0,0,0),E.add(O),p(E),y(E),S(E);let U=!1,w=0,L=0,I=0,V=0,F=8e3,D=!1,N=5;const H=C=>{C.preventDefault(),U=!0,D=!1,w=C.clientX,L=C.clientY},at=C=>{if(!U)return;C.preventDefault();const K=C.clientX-w,ht=C.clientY-L;(Math.abs(K)>N||Math.abs(ht)>N)&&(D=!0),D&&(I+=K*.005,V+=ht*.005,w=C.clientX,L=C.clientY)},st=C=>{C.preventDefault(),U=!1,D=!1},ct=C=>{C.preventDefault(),F+=C.deltaY*2,F=Math.max(500,Math.min(2e4,F)),F>15e3?s&&s("Intergalactic Space"):F>8e3?s&&s("Galaxy Overview"):F>3e3?s&&s("Spiral Arms"):F>1e3?s&&s("Galactic Disk"):s&&s("Galactic Core")},it=C=>{C.touches.length===1&&(C.preventDefault(),U=!0,w=C.touches[0].clientX,L=C.touches[0].clientY)},P=C=>{if(!U||C.touches.length!==1)return;C.preventDefault();const K=C.touches[0].clientX-w,ht=C.touches[0].clientY-L;I+=K*.005,V+=ht*.005,w=C.touches[0].clientX,L=C.touches[0].clientY},W=C=>{C.preventDefault(),U=!1};v.domElement.addEventListener("mousedown",H),v.domElement.addEventListener("mousemove",at),v.domElement.addEventListener("mouseup",st),v.domElement.addEventListener("wheel",ct),v.domElement.addEventListener("touchstart",it),v.domElement.addEventListener("touchmove",P),v.domElement.addEventListener("touchend",W);const G=()=>{f.current=requestAnimationFrame(G),b.position.x=Math.cos(I)*Math.cos(V)*F,b.position.y=Math.sin(V)*F,b.position.z=Math.sin(I)*Math.cos(V)*F,b.lookAt(0,0,0),c.current&&(c.current.rotation.y+=5e-4),v.render(E,b)};G(),m(!0);const vt=()=>{b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",vt),()=>{window.removeEventListener("resize",vt),v.domElement.removeEventListener("mousedown",H),v.domElement.removeEventListener("mousemove",at),v.domElement.removeEventListener("mouseup",st),v.domElement.removeEventListener("wheel",ct),v.domElement.removeEventListener("touchstart",it),v.domElement.removeEventListener("touchmove",P),v.domElement.removeEventListener("touchend",W),f.current&&cancelAnimationFrame(f.current),t.current&&v.domElement&&t.current.removeChild(v.domElement),v.dispose()}},[s]);function p(E){const b=new Qo;c.current=b;const v={count:15e4,size:.015,radius:6e3,branches:2,spin:1.2,randomness:.3,randomnessPower:2.5,insideColor:"#ffaa44",outsideColor:"#1b3984",barLength:1500},_=new Fn,O=new Float32Array(v.count*3),U=new Float32Array(v.count*3),w=new xe(v.insideColor),L=new xe(v.outsideColor);for(let ct=0;ct<v.count;ct++){const it=ct*3,P=Math.pow(Math.random(),.7)*v.radius,W=P*v.spin*8e-4,G=ct%v.branches/v.branches*Math.PI*2;let vt,C;if(P<v.barLength&&Math.random()<.3){const ft=Math.PI*.25,pt=Math.random()*v.barLength;vt=Math.cos(ft)*pt,C=Math.sin(ft)*pt}else vt=Math.cos(G+W)*P,C=Math.sin(G+W)*P;const K=Math.pow(Math.random(),v.randomnessPower)*(Math.random()<.5?1:-1)*v.randomness*P,ht=Math.pow(Math.random(),v.randomnessPower)*(Math.random()<.5?1:-1)*v.randomness*P*.05,gt=Math.pow(Math.random(),v.randomnessPower)*(Math.random()<.5?1:-1)*v.randomness*P;O[it]=vt+K,O[it+1]=ht,O[it+2]=C+gt;const Et=w.clone(),$=Math.min(P/v.radius,1);Et.lerp(L,$),Math.random()<.1?Et.lerp(new xe("#ffffff"),.5):Math.random()<.05&&Et.lerp(new xe("#ff4444"),.7),U[it]=Et.r,U[it+1]=Et.g,U[it+2]=Et.b}_.setAttribute("position",new hn(O,3)),_.setAttribute("color",new hn(U,3));const I=new zs({size:v.size,sizeAttenuation:!0,depthWrite:!1,blending:th,vertexColors:!0,transparent:!0,opacity:.8}),V=new tl(_,I);b.add(V);const F=new Qn(80,32,32),D=new $o({color:16768324,transparent:!0,opacity:.9}),N=new sn(F,D);b.add(N);const H=new Qn(8e3,32,32),at=new $o({color:2245802,transparent:!0,opacity:.02,side:Bn}),st=new sn(H,at);b.add(st),g(b),x(E),E.add(b)}function g(E){const b=new Fn,v=2e4,_=new Float32Array(v*3),O=new Float32Array(v*3);for(let L=0;L<v;L++){const I=L*3,V=Math.random()*4e3+500,F=Math.random()*Math.PI*2;_[I]=Math.cos(F)*V,_[I+1]=(Math.random()-.5)*50,_[I+2]=Math.sin(F)*V,O[I]=.1,O[I+1]=.05,O[I+2]=.02}b.setAttribute("position",new hn(_,3)),b.setAttribute("color",new hn(O,3));const U=new zs({size:.02,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.6}),w=new tl(b,U);E.add(w)}function x(E,b){[{name:"Sagittarius A* (Galactic Core)",position:[0,0,0],color:"#ffdd44"},{name:"Perseus Arm",position:[3e3,0,2e3],color:"#88aaff"},{name:"Scutum-Centaurus Arm",position:[-2500,0,3e3],color:"#88aaff"},{name:"Norma Arm",position:[1500,0,-3500],color:"#88aaff"},{name:"Sagittarius Arm",position:[-3500,0,-1500],color:"#88aaff"},{name:"Orion Spur (Our Location)",position:[1200,0,2800],color:"#ffaa44"},{name:"Galactic Halo",position:[0,4e3,0],color:"#aaccff"},{name:"Central Bar",position:[800,0,800],color:"#ffcc66"},{name:"Outer Rim",position:[5e3,0,0],color:"#6688aa"}].forEach(_=>{const O=document.createElement("canvas"),U=O.getContext("2d");O.width=512,O.height=128,U.fillStyle="rgba(0, 0, 0, 0.7)",U.fillRect(0,0,O.width,O.height),U.fillStyle=_.color,U.font="bold 24px Arial",U.textAlign="center",U.textBaseline="middle",U.shadowColor=_.color,U.shadowBlur=10,U.fillText(_.name,256,64);const w=new Dv(O),L=new op({map:w,transparent:!0,opacity:.8}),I=new Cv(L);I.position.set(_.position[0],_.position[1],_.position[2]),I.scale.set(800,200,1),I.userData={isLabel:!0},E.add(I)})}function y(E){const b=new Fn,v=5e4,_=new Float32Array(v*3),O=new Float32Array(v*3);for(let L=0;L<v;L++){_[L*3]=(Math.random()-.5)*4e4,_[L*3+1]=(Math.random()-.5)*4e4,_[L*3+2]=(Math.random()-.5)*4e4;const I=Math.random();I<.7?(O[L*3]=.8+Math.random()*.2,O[L*3+1]=.8+Math.random()*.2,O[L*3+2]=1):I<.9?(O[L*3]=1,O[L*3+1]=1,O[L*3+2]=.6+Math.random()*.4):(O[L*3]=1,O[L*3+1]=.4+Math.random()*.4,O[L*3+2]=.2+Math.random()*.3)}b.setAttribute("position",new hn(_,3)),b.setAttribute("color",new hn(O,3));const U=new zs({size:1,vertexColors:!0,transparent:!0,opacity:.6}),w=new tl(b,U);E.add(w)}function S(E){for(let v=0;v<20;v++){const _=new Qn(200+Math.random()*300,16,16),O=[16724838,3368703,6750003,16755251,11154431],U=O[Math.floor(Math.random()*O.length)],w=new $o({color:U,transparent:!0,opacity:.1+Math.random()*.2,side:Ai}),L=new sn(_,w),I=Math.random()*Math.PI*2,V=1e3+Math.random()*4e3;L.position.x=Math.cos(I)*V,L.position.y=(Math.random()-.5)*500,L.position.z=Math.sin(I)*V,E.add(L)}}return Vt.jsxs("div",{className:"relative w-full h-full",children:[Vt.jsx("div",{ref:t,className:"w-full h-full"}),!h&&Vt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80",children:Vt.jsx("div",{className:"text-white text-lg",children:"Loading Galaxy..."})})]})};function tv(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}function zA(...s){return t=>{let i=!1;const r=s.map(l=>{const c=tv(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():tv(s[l],null)}}}}function BA(...s){return ne.useCallback(zA(...s),s)}function IA(s){const t=HA(s),i=ne.forwardRef((r,l)=>{const{children:c,...f}=r,h=ne.Children.toArray(c),m=h.find(VA);if(m){const p=m.props.children,g=h.map(x=>x===m?ne.Children.count(p)>1?ne.Children.only(null):ne.isValidElement(p)?p.props.children:null:x);return Vt.jsx(t,{...f,ref:l,children:ne.isValidElement(p)?ne.cloneElement(p,void 0,g):null})}return Vt.jsx(t,{...f,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var FA=IA("Slot");function HA(s){const t=ne.forwardRef((i,r)=>{const{children:l,...c}=i,f=ne.isValidElement(l)?XA(l):void 0,h=BA(f,r);if(ne.isValidElement(l)){const m=kA(c,l.props);return l.type!==ne.Fragment&&(m.ref=h),ne.cloneElement(l,m)}return ne.Children.count(l)>1?ne.Children.only(null):null});return t.displayName=`${s}.SlotClone`,t}var GA=Symbol("radix.slottable");function VA(s){return ne.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===GA}function kA(s,t){const i={...t};for(const r in t){const l=s[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...h)=>{const m=c(...h);return l(...h),m}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function XA(s){var r,l;let t=(r=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?s.ref:(t=(l=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function kv(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=kv(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function Xv(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=kv(s))&&(r&&(r+=" "),r+=t);return r}const ev=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,nv=Xv,WA=(s,t)=>i=>{var r;if((t==null?void 0:t.variants)==null)return nv(s,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,f=Object.keys(l).map(p=>{const g=i==null?void 0:i[p],x=c==null?void 0:c[p];if(g===null)return null;const y=ev(g)||ev(x);return l[p][y]}),h=i&&Object.entries(i).reduce((p,g)=>{let[x,y]=g;return y===void 0||(p[x]=y),p},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,g)=>{let{class:x,className:y,...S}=g;return Object.entries(S).every(E=>{let[b,v]=E;return Array.isArray(v)?v.includes({...c,...h}[b]):{...c,...h}[b]===v})?[...p,x,y]:p},[]);return nv(s,f,m,i==null?void 0:i.class,i==null?void 0:i.className)},mp="-",qA=s=>{const t=jA(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:f=>{const h=f.split(mp);return h[0]===""&&h.length!==1&&h.shift(),Wv(h,t)||YA(f)},getConflictingClassGroupIds:(f,h)=>{const m=i[f]||[];return h&&r[f]?[...m,...r[f]]:m}}},Wv=(s,t)=>{var f;if(s.length===0)return t.classGroupId;const i=s[0],r=t.nextPart.get(i),l=r?Wv(s.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const c=s.join(mp);return(f=t.validators.find(({validator:h})=>h(c)))==null?void 0:f.classGroupId},iv=/^\[(.+)\]$/,YA=s=>{if(iv.test(s)){const t=iv.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},jA=s=>{const{theme:t,classGroups:i}=s,r={nextPart:new Map,validators:[]};for(const l in i)Wh(i[l],r,l,t);return r},Wh=(s,t,i,r)=>{s.forEach(l=>{if(typeof l=="string"){const c=l===""?t:av(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(ZA(l)){Wh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,f])=>{Wh(f,av(t,c),i,r)})})},av=(s,t)=>{let i=s;return t.split(mp).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},ZA=s=>s.isThemeGetter,KA=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(c,f)=>{i.set(c,f),t++,t>s&&(t=0,r=i,i=new Map)};return{get(c){let f=i.get(c);if(f!==void 0)return f;if((f=r.get(c))!==void 0)return l(c,f),f},set(c,f){i.has(c)?i.set(c,f):l(c,f)}}},qh="!",Yh=":",QA=Yh.length,JA=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const c=[];let f=0,h=0,m=0,p;for(let E=0;E<l.length;E++){let b=l[E];if(f===0&&h===0){if(b===Yh){c.push(l.slice(m,E)),m=E+QA;continue}if(b==="/"){p=E;continue}}b==="["?f++:b==="]"?f--:b==="("?h++:b===")"&&h--}const g=c.length===0?l:l.substring(m),x=$A(g),y=x!==g,S=p&&p>m?p-m:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:S}};if(t){const l=t+Yh,c=r;r=f=>f.startsWith(l)?c(f.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},$A=s=>s.endsWith(qh)?s.substring(0,s.length-1):s.startsWith(qh)?s.substring(1):s,tw=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let c=[];return r.forEach(f=>{f[0]==="["||t[f]?(l.push(...c.sort(),f),c=[]):c.push(f)}),l.push(...c.sort()),l}},ew=s=>({cache:KA(s.cacheSize),parseClassName:JA(s),sortModifiers:tw(s),...qA(s)}),nw=/\s+/,iw=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,f=[],h=s.trim().split(nw);let m="";for(let p=h.length-1;p>=0;p-=1){const g=h[p],{isExternal:x,modifiers:y,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:b}=i(g);if(x){m=g+(m.length>0?" "+m:m);continue}let v=!!b,_=r(v?E.substring(0,b):E);if(!_){if(!v){m=g+(m.length>0?" "+m:m);continue}if(_=r(E),!_){m=g+(m.length>0?" "+m:m);continue}v=!1}const O=c(y).join(":"),U=S?O+qh:O,w=U+_;if(f.includes(w))continue;f.push(w);const L=l(_,v);for(let I=0;I<L.length;++I){const V=L[I];f.push(U+V)}m=g+(m.length>0?" "+m:m)}return m};function aw(){let s=0,t,i,r="";for(;s<arguments.length;)(t=arguments[s++])&&(i=qv(t))&&(r&&(r+=" "),r+=i);return r}const qv=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=qv(s[r]))&&(i&&(i+=" "),i+=t);return i};function rw(s,...t){let i,r,l,c=f;function f(m){const p=t.reduce((g,x)=>x(g),s());return i=ew(p),r=i.cache.get,l=i.cache.set,c=h,h(m)}function h(m){const p=r(m);if(p)return p;const g=iw(m,i);return l(m,g),g}return function(){return c(aw.apply(null,arguments))}}const vn=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},Yv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,jv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,sw=/^\d+\/\d+$/,ow=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,lw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,cw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,uw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,fw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Us=s=>sw.test(s),Se=s=>!!s&&!Number.isNaN(Number(s)),Xa=s=>!!s&&Number.isInteger(Number(s)),Jd=s=>s.endsWith("%")&&Se(s.slice(0,-1)),ca=s=>ow.test(s),dw=()=>!0,hw=s=>lw.test(s)&&!cw.test(s),Zv=()=>!1,pw=s=>uw.test(s),mw=s=>fw.test(s),gw=s=>!Wt(s)&&!qt(s),_w=s=>Xs(s,Jv,Zv),Wt=s=>Yv.test(s),Sr=s=>Xs(s,$v,hw),$d=s=>Xs(s,Mw,Se),rv=s=>Xs(s,Kv,Zv),vw=s=>Xs(s,Qv,mw),qc=s=>Xs(s,tx,pw),qt=s=>jv.test(s),Ko=s=>Ws(s,$v),xw=s=>Ws(s,Ew),sv=s=>Ws(s,Kv),yw=s=>Ws(s,Jv),Sw=s=>Ws(s,Qv),Yc=s=>Ws(s,tx,!0),Xs=(s,t,i)=>{const r=Yv.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},Ws=(s,t,i=!1)=>{const r=jv.exec(s);return r?r[1]?t(r[1]):i:!1},Kv=s=>s==="position"||s==="percentage",Qv=s=>s==="image"||s==="url",Jv=s=>s==="length"||s==="size"||s==="bg-size",$v=s=>s==="length",Mw=s=>s==="number",Ew=s=>s==="family-name",tx=s=>s==="shadow",bw=()=>{const s=vn("color"),t=vn("font"),i=vn("text"),r=vn("font-weight"),l=vn("tracking"),c=vn("leading"),f=vn("breakpoint"),h=vn("container"),m=vn("spacing"),p=vn("radius"),g=vn("shadow"),x=vn("inset-shadow"),y=vn("text-shadow"),S=vn("drop-shadow"),E=vn("blur"),b=vn("perspective"),v=vn("aspect"),_=vn("ease"),O=vn("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],L=()=>[...w(),qt,Wt],I=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto","contain","none"],F=()=>[qt,Wt,m],D=()=>[Us,"full","auto",...F()],N=()=>[Xa,"none","subgrid",qt,Wt],H=()=>["auto",{span:["full",Xa,qt,Wt]},Xa,qt,Wt],at=()=>[Xa,"auto",qt,Wt],st=()=>["auto","min","max","fr",qt,Wt],ct=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],it=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...F()],W=()=>[Us,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],G=()=>[s,qt,Wt],vt=()=>[...w(),sv,rv,{position:[qt,Wt]}],C=()=>["no-repeat",{repeat:["","x","y","space","round"]}],K=()=>["auto","cover","contain",yw,_w,{size:[qt,Wt]}],ht=()=>[Jd,Ko,Sr],gt=()=>["","none","full",p,qt,Wt],Et=()=>["",Se,Ko,Sr],$=()=>["solid","dashed","dotted","double"],ft=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pt=()=>[Se,Jd,sv,rv],xt=()=>["","none",E,qt,Wt],Bt=()=>["none",Se,qt,Wt],Zt=()=>["none",Se,qt,Wt],Ce=()=>[Se,qt,Wt],bt=()=>[Us,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ca],breakpoint:[ca],color:[dw],container:[ca],"drop-shadow":[ca],ease:["in","out","in-out"],font:[gw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ca],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ca],shadow:[ca],spacing:["px",Se],text:[ca],"text-shadow":[ca],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Us,Wt,qt,v]}],container:["container"],columns:[{columns:[Se,Wt,qt,h]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:L()}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{start:D()}],end:[{end:D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[Xa,"auto",qt,Wt]}],basis:[{basis:[Us,"full","auto",h,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Se,Us,"auto","initial","none",Wt]}],grow:[{grow:["",Se,qt,Wt]}],shrink:[{shrink:["",Se,qt,Wt]}],order:[{order:[Xa,"first","last","none",qt,Wt]}],"grid-cols":[{"grid-cols":N()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":at()}],"col-end":[{"col-end":at()}],"grid-rows":[{"grid-rows":N()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":at()}],"row-end":[{"row-end":at()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":st()}],"auto-rows":[{"auto-rows":st()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...ct(),"normal"]}],"justify-items":[{"justify-items":[...it(),"normal"]}],"justify-self":[{"justify-self":["auto",...it()]}],"align-content":[{content:["normal",...ct()]}],"align-items":[{items:[...it(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...it(),{baseline:["","last"]}]}],"place-content":[{"place-content":ct()}],"place-items":[{"place-items":[...it(),"baseline"]}],"place-self":[{"place-self":["auto",...it()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],w:[{w:[h,"screen",...W()]}],"min-w":[{"min-w":[h,"screen","none",...W()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...W()]}],h:[{h:["screen","lh",...W()]}],"min-h":[{"min-h":["screen","lh","none",...W()]}],"max-h":[{"max-h":["screen","lh",...W()]}],"font-size":[{text:["base",i,Ko,Sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,qt,$d]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Jd,Wt]}],"font-family":[{font:[xw,Wt,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,qt,Wt]}],"line-clamp":[{"line-clamp":[Se,"none",qt,$d]}],leading:[{leading:[c,...F()]}],"list-image":[{"list-image":["none",qt,Wt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qt,Wt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:G()}],"text-color":[{text:G()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:[Se,"from-font","auto",qt,Sr]}],"text-decoration-color":[{decoration:G()}],"underline-offset":[{"underline-offset":[Se,"auto",qt,Wt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qt,Wt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qt,Wt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:vt()}],"bg-repeat":[{bg:C()}],"bg-size":[{bg:K()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Xa,qt,Wt],radial:["",qt,Wt],conic:[Xa,qt,Wt]},Sw,vw]}],"bg-color":[{bg:G()}],"gradient-from-pos":[{from:ht()}],"gradient-via-pos":[{via:ht()}],"gradient-to-pos":[{to:ht()}],"gradient-from":[{from:G()}],"gradient-via":[{via:G()}],"gradient-to":[{to:G()}],rounded:[{rounded:gt()}],"rounded-s":[{"rounded-s":gt()}],"rounded-e":[{"rounded-e":gt()}],"rounded-t":[{"rounded-t":gt()}],"rounded-r":[{"rounded-r":gt()}],"rounded-b":[{"rounded-b":gt()}],"rounded-l":[{"rounded-l":gt()}],"rounded-ss":[{"rounded-ss":gt()}],"rounded-se":[{"rounded-se":gt()}],"rounded-ee":[{"rounded-ee":gt()}],"rounded-es":[{"rounded-es":gt()}],"rounded-tl":[{"rounded-tl":gt()}],"rounded-tr":[{"rounded-tr":gt()}],"rounded-br":[{"rounded-br":gt()}],"rounded-bl":[{"rounded-bl":gt()}],"border-w":[{border:Et()}],"border-w-x":[{"border-x":Et()}],"border-w-y":[{"border-y":Et()}],"border-w-s":[{"border-s":Et()}],"border-w-e":[{"border-e":Et()}],"border-w-t":[{"border-t":Et()}],"border-w-r":[{"border-r":Et()}],"border-w-b":[{"border-b":Et()}],"border-w-l":[{"border-l":Et()}],"divide-x":[{"divide-x":Et()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Et()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...$(),"hidden","none"]}],"divide-style":[{divide:[...$(),"hidden","none"]}],"border-color":[{border:G()}],"border-color-x":[{"border-x":G()}],"border-color-y":[{"border-y":G()}],"border-color-s":[{"border-s":G()}],"border-color-e":[{"border-e":G()}],"border-color-t":[{"border-t":G()}],"border-color-r":[{"border-r":G()}],"border-color-b":[{"border-b":G()}],"border-color-l":[{"border-l":G()}],"divide-color":[{divide:G()}],"outline-style":[{outline:[...$(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Se,qt,Wt]}],"outline-w":[{outline:["",Se,Ko,Sr]}],"outline-color":[{outline:G()}],shadow:[{shadow:["","none",g,Yc,qc]}],"shadow-color":[{shadow:G()}],"inset-shadow":[{"inset-shadow":["none",x,Yc,qc]}],"inset-shadow-color":[{"inset-shadow":G()}],"ring-w":[{ring:Et()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:G()}],"ring-offset-w":[{"ring-offset":[Se,Sr]}],"ring-offset-color":[{"ring-offset":G()}],"inset-ring-w":[{"inset-ring":Et()}],"inset-ring-color":[{"inset-ring":G()}],"text-shadow":[{"text-shadow":["none",y,Yc,qc]}],"text-shadow-color":[{"text-shadow":G()}],opacity:[{opacity:[Se,qt,Wt]}],"mix-blend":[{"mix-blend":[...ft(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ft()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Se]}],"mask-image-linear-from-pos":[{"mask-linear-from":pt()}],"mask-image-linear-to-pos":[{"mask-linear-to":pt()}],"mask-image-linear-from-color":[{"mask-linear-from":G()}],"mask-image-linear-to-color":[{"mask-linear-to":G()}],"mask-image-t-from-pos":[{"mask-t-from":pt()}],"mask-image-t-to-pos":[{"mask-t-to":pt()}],"mask-image-t-from-color":[{"mask-t-from":G()}],"mask-image-t-to-color":[{"mask-t-to":G()}],"mask-image-r-from-pos":[{"mask-r-from":pt()}],"mask-image-r-to-pos":[{"mask-r-to":pt()}],"mask-image-r-from-color":[{"mask-r-from":G()}],"mask-image-r-to-color":[{"mask-r-to":G()}],"mask-image-b-from-pos":[{"mask-b-from":pt()}],"mask-image-b-to-pos":[{"mask-b-to":pt()}],"mask-image-b-from-color":[{"mask-b-from":G()}],"mask-image-b-to-color":[{"mask-b-to":G()}],"mask-image-l-from-pos":[{"mask-l-from":pt()}],"mask-image-l-to-pos":[{"mask-l-to":pt()}],"mask-image-l-from-color":[{"mask-l-from":G()}],"mask-image-l-to-color":[{"mask-l-to":G()}],"mask-image-x-from-pos":[{"mask-x-from":pt()}],"mask-image-x-to-pos":[{"mask-x-to":pt()}],"mask-image-x-from-color":[{"mask-x-from":G()}],"mask-image-x-to-color":[{"mask-x-to":G()}],"mask-image-y-from-pos":[{"mask-y-from":pt()}],"mask-image-y-to-pos":[{"mask-y-to":pt()}],"mask-image-y-from-color":[{"mask-y-from":G()}],"mask-image-y-to-color":[{"mask-y-to":G()}],"mask-image-radial":[{"mask-radial":[qt,Wt]}],"mask-image-radial-from-pos":[{"mask-radial-from":pt()}],"mask-image-radial-to-pos":[{"mask-radial-to":pt()}],"mask-image-radial-from-color":[{"mask-radial-from":G()}],"mask-image-radial-to-color":[{"mask-radial-to":G()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[Se]}],"mask-image-conic-from-pos":[{"mask-conic-from":pt()}],"mask-image-conic-to-pos":[{"mask-conic-to":pt()}],"mask-image-conic-from-color":[{"mask-conic-from":G()}],"mask-image-conic-to-color":[{"mask-conic-to":G()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:vt()}],"mask-repeat":[{mask:C()}],"mask-size":[{mask:K()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qt,Wt]}],filter:[{filter:["","none",qt,Wt]}],blur:[{blur:xt()}],brightness:[{brightness:[Se,qt,Wt]}],contrast:[{contrast:[Se,qt,Wt]}],"drop-shadow":[{"drop-shadow":["","none",S,Yc,qc]}],"drop-shadow-color":[{"drop-shadow":G()}],grayscale:[{grayscale:["",Se,qt,Wt]}],"hue-rotate":[{"hue-rotate":[Se,qt,Wt]}],invert:[{invert:["",Se,qt,Wt]}],saturate:[{saturate:[Se,qt,Wt]}],sepia:[{sepia:["",Se,qt,Wt]}],"backdrop-filter":[{"backdrop-filter":["","none",qt,Wt]}],"backdrop-blur":[{"backdrop-blur":xt()}],"backdrop-brightness":[{"backdrop-brightness":[Se,qt,Wt]}],"backdrop-contrast":[{"backdrop-contrast":[Se,qt,Wt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Se,qt,Wt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Se,qt,Wt]}],"backdrop-invert":[{"backdrop-invert":["",Se,qt,Wt]}],"backdrop-opacity":[{"backdrop-opacity":[Se,qt,Wt]}],"backdrop-saturate":[{"backdrop-saturate":[Se,qt,Wt]}],"backdrop-sepia":[{"backdrop-sepia":["",Se,qt,Wt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qt,Wt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Se,"initial",qt,Wt]}],ease:[{ease:["linear","initial",_,qt,Wt]}],delay:[{delay:[Se,qt,Wt]}],animate:[{animate:["none",O,qt,Wt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,qt,Wt]}],"perspective-origin":[{"perspective-origin":L()}],rotate:[{rotate:Bt()}],"rotate-x":[{"rotate-x":Bt()}],"rotate-y":[{"rotate-y":Bt()}],"rotate-z":[{"rotate-z":Bt()}],scale:[{scale:Zt()}],"scale-x":[{"scale-x":Zt()}],"scale-y":[{"scale-y":Zt()}],"scale-z":[{"scale-z":Zt()}],"scale-3d":["scale-3d"],skew:[{skew:Ce()}],"skew-x":[{"skew-x":Ce()}],"skew-y":[{"skew-y":Ce()}],transform:[{transform:[qt,Wt,"","none","gpu","cpu"]}],"transform-origin":[{origin:L()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:bt()}],"translate-x":[{"translate-x":bt()}],"translate-y":[{"translate-y":bt()}],"translate-z":[{"translate-z":bt()}],"translate-none":["translate-none"],accent:[{accent:G()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:G()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qt,Wt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qt,Wt]}],fill:[{fill:["none",...G()]}],"stroke-w":[{stroke:[Se,Ko,Sr,$d]}],stroke:[{stroke:["none",...G()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Tw=rw(bw);function ul(...s){return Tw(Xv(s))}const Aw=WA("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function jc({className:s,variant:t,size:i,asChild:r=!1,...l}){const c=r?FA:"button";return Vt.jsx(c,{"data-slot":"button",className:ul(Aw({variant:t,size:i,className:s})),...l})}function ww({className:s,...t}){return Vt.jsx("div",{"data-slot":"card",className:ul("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...t})}function Rw({className:s,...t}){return Vt.jsx("div",{"data-slot":"card-header",className:ul("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...t})}function Cw({className:s,...t}){return Vt.jsx("div",{"data-slot":"card-title",className:ul("leading-none font-semibold",s),...t})}function Dw({className:s,...t}){return Vt.jsx("div",{"data-slot":"card-content",className:ul("px-6",s),...t})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lw=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),ov=s=>{const t=Lw(s);return t.charAt(0).toUpperCase()+t.slice(1)},ex=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),Nw=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ow={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=ne.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>ne.createElement("svg",{ref:m,...Ow,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:ex("lucide",l),...!c&&!Nw(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,g])=>ne.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=(s,t)=>{const i=ne.forwardRef(({className:r,...l},c)=>ne.createElement(Pw,{ref:c,iconNode:t,className:ex(`lucide-${Uw(ov(s))}`,`lucide-${s}`,r),...l}));return i.displayName=ov(s),i};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Bw=ha("arrow-left",zw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fw=ha("chevron-down",Iw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Gw=ha("earth",Hw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],kw=ha("globe",Vw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Ww=ha("house",Xw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Yw=ha("info",qw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Zw=ha("rocket",jw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Qw=ha("star",Kw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Wa=ha("zap",Jw),$w=({onNavigateTo:s,currentLocation:t,viewMode:i,onBackToUniverse:r})=>{const l=[{name:"Earth",icon:kw,color:"text-blue-500"},{name:"Moon",icon:Wa,color:"text-gray-400"},{name:"Mars",icon:Zw,color:"text-red-500"},{name:"Venus",icon:Wa,color:"text-yellow-500"},{name:"Mercury",icon:Wa,color:"text-orange-500"},{name:"Jupiter",icon:Wa,color:"text-orange-300"},{name:"Saturn",icon:Wa,color:"text-yellow-300"},{name:"Uranus",icon:Wa,color:"text-cyan-400"},{name:"Neptune",icon:Wa,color:"text-blue-600"},{name:"Sun",icon:Wa,color:"text-yellow-400"}];return Vt.jsxs(ww,{className:"absolute top-4 right-4 w-64 bg-black/80 text-white border-gray-600",children:[Vt.jsx(Rw,{className:"pb-2",children:Vt.jsxs(Cw,{className:"text-lg flex items-center gap-2",children:[Vt.jsx(Ww,{className:"w-5 h-5"}),"Navigation"]})}),Vt.jsxs(Dw,{className:"space-y-2",children:[Vt.jsxs("div",{className:"text-sm text-gray-300 mb-3",children:["Current: ",Vt.jsx("span",{className:"text-white font-semibold",children:t})]}),i==="earth"||i==="galaxy"?Vt.jsxs("div",{className:"space-y-2",children:[Vt.jsxs(jc,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:r,children:[Vt.jsx(Bw,{className:"w-4 h-4"}),"Back to Universe"]}),Vt.jsxs("div",{className:"text-xs text-gray-400 p-2 bg-gray-800/30 rounded",children:[Vt.jsx("p",{children:Vt.jsxs("strong",{children:[i==="earth"?"Earth View":"Galaxy View"," Controls:"]})}),Vt.jsx("p",{children:"• Mouse: Rotate view"}),Vt.jsx("p",{children:"• Scroll: Zoom in/out"}),i==="earth"&&Vt.jsx("p",{children:"• Zoom from space to surface"}),i==="galaxy"&&Vt.jsx("p",{children:"• Explore galactic structures"})]})]}):Vt.jsxs("div",{className:"space-y-2",children:[Vt.jsxs(jc,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-blue-800/50 border-blue-600 hover:bg-blue-700/50 text-white",onClick:()=>s("Earth View"),children:[Vt.jsx(Gw,{className:"w-4 h-4 text-blue-400"}),"Immersive Earth View"]}),Vt.jsxs(jc,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-purple-800/50 border-purple-600 hover:bg-purple-700/50 text-white",onClick:()=>s("Galaxy View"),children:[Vt.jsx(Qw,{className:"w-4 h-4 text-purple-400"}),"Enhanced Galaxy View"]}),Vt.jsx("div",{className:"grid grid-cols-2 gap-2",children:l.map(c=>{const f=c.icon;return Vt.jsxs(jc,{variant:"outline",size:"sm",className:"justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(c.name),children:[Vt.jsx(f,{className:`w-4 h-4 ${c.color}`}),c.name]},c.name)})}),Vt.jsxs("div",{className:"text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded",children:[Vt.jsx("p",{children:Vt.jsx("strong",{children:"Controls:"})}),Vt.jsx("p",{children:"• Mouse: Rotate view"}),Vt.jsx("p",{children:"• Scroll: Zoom in/out"}),Vt.jsx("p",{children:"• Buttons: Quick travel"})]})]})]})]})},tR=({viewMode:s,currentLocation:t})=>{const[i,r]=ne.useState(!1),c=(()=>{switch(s){case"universe":return{title:"Solar System",data:{"Current Focus":t,Scale:"~40 AU diameter",Objects:"8 planets + moons",Simulation:"Real-time orbital mechanics",Textures:"NASA-based imagery"}};case"earth":return{title:"Earth View",data:{"Current Altitude":t,Radius:"6,371 km","Surface Area":"510.1 million km²",Atmosphere:"Realistic lighting","Zoom Range":"Space to surface"}};case"galaxy":return{title:"Milky Way Galaxy",data:{"Current View":t,Diameter:"~100,000 light-years",Stars:"100,000+ simulated",Structure:"4-armed spiral","Core Type":"Supermassive black hole"}};default:return{title:"Unknown",data:{}}}})();return Vt.jsx("div",{className:"absolute bottom-4 left-4 z-50",children:i?Vt.jsxs("div",{className:"bg-black/80 text-white p-3 rounded-lg border border-gray-600 min-w-64 max-w-80",children:[Vt.jsxs("div",{className:"flex items-center justify-between mb-2",children:[Vt.jsx("h3",{className:"text-sm font-semibold text-yellow-400",children:c.title}),Vt.jsx("button",{onClick:()=>r(!1),className:"text-gray-400 hover:text-white transition-colors",title:"Collapse",children:Vt.jsx(Fw,{className:"w-4 h-4"})})]}),Vt.jsx("div",{className:"space-y-1",children:Object.entries(c.data).map(([f,h])=>Vt.jsxs("div",{className:"flex justify-between text-xs",children:[Vt.jsxs("span",{className:"text-gray-300 font-medium",children:[f,":"]}),Vt.jsx("span",{className:"text-white ml-2 text-right",children:h})]},f))})]}):Vt.jsx("button",{onClick:()=>r(!0),className:"w-8 h-8 bg-black/80 hover:bg-black/90 text-white rounded-full border border-gray-600 flex items-center justify-center transition-all duration-200 hover:scale-110",title:"Show view information",children:Vt.jsx(Yw,{className:"w-4 h-4"})})})};function eR(){const[s,t]=ne.useState("Solar System"),[i,r]=ne.useState("universe"),l=ne.useRef(null),c=m=>{m==="Earth View"?(r("earth"),t("Space View")):m==="Galaxy View"?(r("galaxy"),t("Galaxy Overview")):(r("universe"),t(m),l.current&&l.current.focusOnPlanet(m))},f=m=>{t(m)},h=()=>{r("universe"),t("Solar System")};return Vt.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[i==="universe"?Vt.jsx(Vv,{ref:l,onLocationChange:f}):i==="earth"?Vt.jsx(OA,{onLocationChange:f}):Vt.jsx(PA,{onLocationChange:f}),Vt.jsx($w,{onNavigateTo:c,currentLocation:s,viewMode:i,onBackToUniverse:h}),Vt.jsx(tR,{viewMode:i,currentLocation:s})]})}pS.createRoot(document.getElementById("root")).render(Vt.jsx(ne.StrictMode,{children:Vt.jsx(eR,{})}));
