(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hd={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function gS(){if(W0)return ko;W0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var q0;function _S(){return q0||(q0=1,hd.exports=gS()),hd.exports}var mt=_S(),pd={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function vS(){if(Y0)return ge;Y0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(L,Z,dt){this.props=L,this.context=Z,this.refs=A,this.updater=dt||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function V(L,Z,dt){this.props=L,this.context=Z,this.refs=A,this.updater=dt||S}var P=V.prototype=new _;P.constructor=V,E(P,y.prototype),P.isPureReactComponent=!0;var D=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function U(L,Z,dt,gt,bt,$){return dt=$.ref,{$$typeof:s,type:L,key:Z,ref:dt!==void 0?dt:null,props:$}}function z(L,Z){return U(L.type,Z,void 0,void 0,void 0,L.props)}function w(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function R(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(dt){return Z[dt]})}var G=/\/+/g;function Y(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?R(""+L.key):Z.toString(36)}function tt(){}function rt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(tt,tt):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function at(L,Z,dt,gt,bt){var $=typeof L;($==="undefined"||$==="boolean")&&(L=null);var ut=!1;if(L===null)ut=!0;else switch($){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(L.$$typeof){case s:case t:ut=!0;break;case g:return ut=L._init,at(ut(L._payload),Z,dt,gt,bt)}}if(ut)return bt=bt(L),ut=gt===""?"."+Y(L,0):gt,D(bt)?(dt="",ut!=null&&(dt=ut.replace(G,"$&/")+"/"),at(bt,Z,dt,"",function(Tt){return Tt})):bt!=null&&(w(bt)&&(bt=z(bt,dt+(bt.key==null||L&&L.key===bt.key?"":(""+bt.key).replace(G,"$&/")+"/")+ut)),Z.push(bt)),1;ut=0;var ht=gt===""?".":gt+":";if(D(L))for(var xt=0;xt<L.length;xt++)gt=L[xt],$=ht+Y(gt,xt),ut+=at(gt,Z,dt,$,bt);else if(xt=x(L),typeof xt=="function")for(L=xt.call(L),xt=0;!(gt=L.next()).done;)gt=gt.value,$=ht+Y(gt,xt++),ut+=at(gt,Z,dt,$,bt);else if($==="object"){if(typeof L.then=="function")return at(rt(L),Z,dt,gt,bt);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ut}function O(L,Z,dt){if(L==null)return L;var gt=[],bt=0;return at(L,gt,"","",function($){return Z.call(dt,$,bt++)}),gt}function X(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(dt){(L._status===0||L._status===-1)&&(L._status=1,L._result=dt)},function(dt){(L._status===0||L._status===-1)&&(L._status=2,L._result=dt)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var I=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function pt(){}return ge.Children={map:O,forEach:function(L,Z,dt){O(L,function(){Z.apply(this,arguments)},dt)},count:function(L){var Z=0;return O(L,function(){Z++}),Z},toArray:function(L){return O(L,function(Z){return Z})||[]},only:function(L){if(!w(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ge.Component=y,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=V,ge.StrictMode=r,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ge.__COMPILER_RUNTIME={__proto__:null,c:function(L){return N.H.useMemoCache(L)}},ge.cache=function(L){return function(){return L.apply(null,arguments)}},ge.cloneElement=function(L,Z,dt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var gt=E({},L.props),bt=L.key,$=void 0;if(Z!=null)for(ut in Z.ref!==void 0&&($=void 0),Z.key!==void 0&&(bt=""+Z.key),Z)!F.call(Z,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&Z.ref===void 0||(gt[ut]=Z[ut]);var ut=arguments.length-2;if(ut===1)gt.children=dt;else if(1<ut){for(var ht=Array(ut),xt=0;xt<ut;xt++)ht[xt]=arguments[xt+2];gt.children=ht}return U(L.type,bt,void 0,void 0,$,gt)},ge.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ge.createElement=function(L,Z,dt){var gt,bt={},$=null;if(Z!=null)for(gt in Z.key!==void 0&&($=""+Z.key),Z)F.call(Z,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(bt[gt]=Z[gt]);var ut=arguments.length-2;if(ut===1)bt.children=dt;else if(1<ut){for(var ht=Array(ut),xt=0;xt<ut;xt++)ht[xt]=arguments[xt+2];bt.children=ht}if(L&&L.defaultProps)for(gt in ut=L.defaultProps,ut)bt[gt]===void 0&&(bt[gt]=ut[gt]);return U(L,$,void 0,void 0,null,bt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(L){return{$$typeof:h,render:L}},ge.isValidElement=w,ge.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:X}},ge.memo=function(L,Z){return{$$typeof:p,type:L,compare:Z===void 0?null:Z}},ge.startTransition=function(L){var Z=N.T,dt={};N.T=dt;try{var gt=L(),bt=N.S;bt!==null&&bt(dt,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(pt,I)}catch($){I($)}finally{N.T=Z}},ge.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ge.use=function(L){return N.H.use(L)},ge.useActionState=function(L,Z,dt){return N.H.useActionState(L,Z,dt)},ge.useCallback=function(L,Z){return N.H.useCallback(L,Z)},ge.useContext=function(L){return N.H.useContext(L)},ge.useDebugValue=function(){},ge.useDeferredValue=function(L,Z){return N.H.useDeferredValue(L,Z)},ge.useEffect=function(L,Z,dt){var gt=N.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(L,Z)},ge.useId=function(){return N.H.useId()},ge.useImperativeHandle=function(L,Z,dt){return N.H.useImperativeHandle(L,Z,dt)},ge.useInsertionEffect=function(L,Z){return N.H.useInsertionEffect(L,Z)},ge.useLayoutEffect=function(L,Z){return N.H.useLayoutEffect(L,Z)},ge.useMemo=function(L,Z){return N.H.useMemo(L,Z)},ge.useOptimistic=function(L,Z){return N.H.useOptimistic(L,Z)},ge.useReducer=function(L,Z,dt){return N.H.useReducer(L,Z,dt)},ge.useRef=function(L){return N.H.useRef(L)},ge.useState=function(L){return N.H.useState(L)},ge.useSyncExternalStore=function(L,Z,dt){return N.H.useSyncExternalStore(L,Z,dt)},ge.useTransition=function(){return N.H.useTransition()},ge.version="19.1.1",ge}var j0;function Kh(){return j0||(j0=1,pd.exports=vS()),pd.exports}var Jt=Kh(),md={exports:{}},Xo={},gd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function xS(){return Z0||(Z0=1,(function(s){function t(O,X){var I=O.length;O.push(X);t:for(;0<I;){var pt=I-1>>>1,L=O[pt];if(0<l(L,X))O[pt]=X,O[I]=L,I=pt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var X=O[0],I=O.pop();if(I!==X){O[0]=I;t:for(var pt=0,L=O.length,Z=L>>>1;pt<Z;){var dt=2*(pt+1)-1,gt=O[dt],bt=dt+1,$=O[bt];if(0>l(gt,I))bt<L&&0>l($,gt)?(O[pt]=$,O[bt]=I,pt=bt):(O[pt]=gt,O[dt]=I,pt=dt);else if(bt<L&&0>l($,I))O[pt]=$,O[bt]=I,pt=bt;else break t}}return X}function l(O,X){var I=O.sortIndex-X.sortIndex;return I!==0?I:O.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,S=!1,E=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=O)r(p),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(p)}}function N(O){if(A=!1,D(O),!E)if(i(m)!==null)E=!0,F||(F=!0,Y());else{var X=i(p);X!==null&&at(N,X.startTime-O)}}var F=!1,U=-1,z=5,w=-1;function R(){return y?!0:!(s.unstable_now()-w<z)}function G(){if(y=!1,F){var O=s.unstable_now();w=O;var X=!0;try{t:{E=!1,A&&(A=!1,V(U),U=-1),S=!0;var I=x;try{e:{for(D(O),v=i(m);v!==null&&!(v.expirationTime>O&&R());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,x=v.priorityLevel;var L=pt(v.expirationTime<=O);if(O=s.unstable_now(),typeof L=="function"){v.callback=L,D(O),X=!0;break e}v===i(m)&&r(m),D(O)}else r(m);v=i(m)}if(v!==null)X=!0;else{var Z=i(p);Z!==null&&at(N,Z.startTime-O),X=!1}}break t}finally{v=null,x=I,S=!1}X=void 0}}finally{X?Y():F=!1}}}var Y;if(typeof P=="function")Y=function(){P(G)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,rt=tt.port2;tt.port1.onmessage=G,Y=function(){rt.postMessage(null)}}else Y=function(){_(G,0)};function at(O,X){U=_(function(){O(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var I=x;x=X;try{return O()}finally{x=I}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=x;x=O;try{return X()}finally{x=I}},s.unstable_scheduleCallback=function(O,X,I){var pt=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?pt+I:pt):I=pt,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=I+L,O={id:g++,callback:X,priorityLevel:O,startTime:I,expirationTime:L,sortIndex:-1},I>pt?(O.sortIndex=I,t(p,O),i(m)===null&&O===i(p)&&(A?(V(U),U=-1):A=!0,at(N,I-pt))):(O.sortIndex=L,t(m,O),E||S||(E=!0,F||(F=!0,Y()))),O},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(O){var X=x;return function(){var I=x;x=X;try{return O.apply(this,arguments)}finally{x=I}}}})(_d)),_d}var K0;function yS(){return K0||(K0=1,gd.exports=xS()),gd.exports}var vd={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function SS(){if(Q0)return Bn;Q0=1;var s=Kh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Bn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Bn.requestFormReset=function(m){r.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.1.1",Bn}var J0;function MS(){if(J0)return vd.exports;J0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vd.exports=SS(),vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function ES(){if($0)return Xo;$0=1;var s=yS(),t=Kh(),i=MS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=d;break}if(T===o){M=!0,o=u,a=d;break}T=T.sibling}if(!M){for(T=d.child;T;){if(T===a){M=!0,a=d,o=u;break}if(T===o){M=!0,o=d,a=u;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),P=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case N:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case P:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:rt(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return rt(e(n))}catch{}}return null}var at=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},pt=[],L=-1;function Z(e){return{current:e}}function dt(e){0>L||(e.current=pt[L],pt[L]=null,L--)}function gt(e,n){L++,pt[L]=e.current,e.current=n}var bt=Z(null),$=Z(null),ut=Z(null),ht=Z(null);function xt(e,n){switch(gt(ut,n),gt($,e),gt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?x0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=x0(n),e=y0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(bt),gt(bt,e)}function Tt(){dt(bt),dt($),dt(ut)}function Gt(e){e.memoizedState!==null&&gt(ht,e);var n=bt.current,a=y0(n,e.type);n!==a&&(gt($,e),gt(bt,a))}function de(e){$.current===e&&(dt(bt),dt($)),ht.current===e&&(dt(ht),Io._currentValue=I)}var At=Object.prototype.hasOwnProperty,H=s.unstable_scheduleCallback,ne=s.unstable_cancelCallback,Ot=s.unstable_shouldYield,he=s.unstable_requestPaint,Ct=s.unstable_now,pe=s.unstable_getCurrentPriorityLevel,Ht=s.unstable_ImmediatePriority,re=s.unstable_UserBlockingPriority,Fe=s.unstable_NormalPriority,De=s.unstable_LowPriority,B=s.unstable_IdlePriority,b=s.log,nt=s.unstable_setDisableYieldValue,_t=null,St=null;function ft(e){if(typeof b=="function"&&nt(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(_t,e)}catch{}}var Vt=Math.clz32?Math.clz32:$t,Lt=Math.log,Kt=Math.LN2;function $t(e){return e>>>=0,e===0?32:31-(Lt(e)/Kt|0)|0}var wt=256,Bt=4194304;function ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=ee(o):(M&=T,M!==0?u=ee(M):a||(a=T&~e,a!==0&&(u=ee(a))))):(T=o&~d,T!==0?u=ee(T):M!==0?u=ee(M):a||(a=o&~e,a!==0&&(u=ee(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function me(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=wt;return wt<<=1,(wt&4194048)===0&&(wt=256),e}function Ut(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Nt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function kt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,k=e.expirationTimes,it=e.hiddenUpdates;for(a=M&~a;0<a;){var vt=31-Vt(a),Mt=1<<vt;T[vt]=0,k[vt]=-1;var st=it[vt];if(st!==null)for(it[vt]=null,vt=0;vt<st.length;vt++){var ot=st[vt];ot!==null&&(ot.lane&=-536870913)}a&=~Mt}o!==0&&Et(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Et(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function jt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ue(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ue(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:F0(e.type))}function xi(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,nn="__reactProps$"+pn,Di="__reactContainer$"+pn,Lr="__reactEvents$"+pn,hl="__reactListeners$"+pn,Nr="__reactHandles$"+pn,Zs="__reactResources$"+pn,Ui="__reactMarker$"+pn;function Or(e){delete e[mn],delete e[nn],delete e[Lr],delete e[hl],delete e[Nr]}function Xi(e){var n=e[mn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Di]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=b0(e);e!==null;){if(a=e[mn])return a;e=b0(e)}return n}e=a,a=e.parentNode}return null}function ma(e){if(e=e[mn]||e[Di]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function $a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ga(e){var n=e[Zs];return n||(n=e[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[Ui]=!0}var pl=new Set,ml={};function C(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(ml[e]=n,e=0;e<n.length;e++)pl.add(n[e])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},Q={};function Dt(e){return At.call(Q,e)?!0:At.call(ct,e)?!1:lt.test(e)?Q[e]=!0:(ct[e]=!0,!1)}function zt(e,n,a){if(Dt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function It(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var ae,oe;function Qt(e){if(ae===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+oe}var xe=!1;function Le(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ot){var st=ot}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ot){st=ot}e.call(Mt.prototype)}}else{try{throw Error()}catch(ot){st=ot}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ot){if(ot&&st&&typeof ot.stack=="string")return[ot.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],T=d[1];if(M&&T){var k=M.split(`
`),it=T.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===it.length)for(o=k.length-1,u=it.length-1;1<=o&&0<=u&&k[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==it[u]){var vt=`
`+k[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function $e(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Qt("Activity");default:return""}}function He(e){try{var n="";do n+=$e(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=ie(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Te(e){e._valueTracker||(e._valueTracker=Ke(e))}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ie(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vn=/[\n"\\]/g;function Sn(e){return e.replace(Vn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(e,n,a,o,u,d,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ye(n)):e.value!==""+ye(n)&&(e.value=""+ye(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Pn(e,M,ye(n)):a!=null?Pn(e,M,ye(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ye(T):e.removeAttribute("name")}function kn(e,n,a,o,u,d,M,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Pn(e,n,a){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Cn(e,n,a){if(n!=null&&(n=""+ye(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ye(a):""}function Pr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(at(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ye(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function jn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||hx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&xp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&xp(e,d,n[d])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var du=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Br=null;function Sp(e){var n=ma(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ye(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[nn]||null;if(!u)throw Error(r(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&On(o)}break t;case"textarea":Cn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var pu=!1;function Mp(e,n,a){if(pu)return e(n,a);pu=!0;try{var o=e(n);return o}finally{if(pu=!1,(zr!==null||Br!==null)&&(ec(),zr&&(n=zr,e=Br,Br=zr=null,Sp(n),e)))for(n=0;n<e.length;n++)Sp(e[n])}}function Ks(e,n){var a=e.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Wi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{mu=!1}var _a=null,gu=null,_l=null;function Ep(){if(_l)return _l;var e,n=gu,a=n.length,o,u="value"in _a?_a.value:_a.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return _l=u.slice(e,1<o?1-o:void 0)}function vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function bp(){return!1}function Zn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xl:bp,this.isPropagationStopped=bp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Zn(tr),Js=g({},tr,{view:0,detail:0}),gx=Zn(Js),_u,vu,$s,Sl=g({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$s&&($s&&e.type==="mousemove"?(_u=e.screenX-$s.screenX,vu=e.screenY-$s.screenY):vu=_u=0,$s=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Tp=Zn(Sl),_x=g({},Sl,{dataTransfer:0}),vx=Zn(_x),xx=g({},Js,{relatedTarget:0}),xu=Zn(xx),yx=g({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=Zn(yx),Mx=g({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=Zn(Mx),bx=g({},tr,{data:0}),Ap=Zn(bx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wx[e])?!!n[e]:!1}function yu(){return Rx}var Cx=g({},Js,{key:function(e){if(e.key){var n=Tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=Zn(Cx),Ux=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Zn(Ux),Lx=g({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),Nx=Zn(Lx),Ox=g({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=Zn(Ox),zx=g({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bx=Zn(zx),Ix=g({},tr,{newState:0,oldState:0}),Fx=Zn(Ix),Hx=[9,13,27,32],Su=Wi&&"CompositionEvent"in window,to=null;Wi&&"documentMode"in document&&(to=document.documentMode);var Gx=Wi&&"TextEvent"in window&&!to,Rp=Wi&&(!Su||to&&8<to&&11>=to),Cp=" ",Dp=!1;function Up(e,n){switch(e){case"keyup":return Hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function Vx(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Dp=!0,Cp);case"textInput":return e=n.data,e===Cp&&Dp?null:e;default:return null}}function kx(e,n){if(Ir)return e==="compositionend"||!Su&&Up(e,n)?(e=Ep(),_l=gu=_a=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xx[e.type]:n==="textarea"}function Op(e,n,a,o){zr?Br?Br.push(o):Br=[o]:zr=o,n=oc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,no=null;function Wx(e){p0(e,0)}function Ml(e){var n=$a(e);if(On(n))return e}function Pp(e,n){if(e==="change")return n}var zp=!1;if(Wi){var Mu;if(Wi){var Eu="oninput"in document;if(!Eu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Eu=typeof Bp.oninput=="function"}Mu=Eu}else Mu=!1;zp=Mu&&(!document.documentMode||9<document.documentMode)}function Ip(){eo&&(eo.detachEvent("onpropertychange",Fp),no=eo=null)}function Fp(e){if(e.propertyName==="value"&&Ml(no)){var n=[];Op(n,no,e,hu(e)),Mp(Wx,n)}}function qx(e,n,a){e==="focusin"?(Ip(),eo=n,no=a,eo.attachEvent("onpropertychange",Fp)):e==="focusout"&&Ip()}function Yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(no)}function jx(e,n){if(e==="click")return Ml(n)}function Zx(e,n){if(e==="input"||e==="change")return Ml(n)}function Kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Kx;function io(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!At.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,n){var a=Hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yi(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qx=Wi&&"documentMode"in document&&11>=document.documentMode,Fr=null,Tu=null,ao=null,Au=!1;function Xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Fr==null||Fr!==yi(o)||(o=Fr,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=oc(Tu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},wu={},Wp={};Wi&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function nr(e){if(wu[e])return wu[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return wu[e]=n[a];return e}var qp=nr("animationend"),Yp=nr("animationiteration"),jp=nr("animationstart"),Jx=nr("transitionrun"),$x=nr("transitionstart"),ty=nr("transitioncancel"),Zp=nr("transitionend"),Kp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Si(e,n){Kp.set(e,n),C(n,[e])}var Qp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=Qp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:He(n)},Qp.set(e,n),n)}return{value:e,source:n,stack:He(n)}}var ui=[],Gr=0,Cu=0;function El(){for(var e=Gr,n=Cu=Gr=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Jp(a,u,d)}}function bl(e,n,a,o){ui[Gr++]=e,ui[Gr++]=n,ui[Gr++]=a,ui[Gr++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,n,a,o){return bl(e,n,a,o),Tl(e)}function Vr(e,n){return bl(e,null,null,n),Tl(e)}function Jp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Vt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Tl(e){if(50<Do)throw Do=0,Bf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var kr={};function ey(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new ey(e,n,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Uu(e)&&(M=1);else if(typeof e=="string")M=iS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ti(31,a,n,u),e.elementType=w,e.lanes=d,e;case E:return ir(a.children,u,d,n);case A:M=8,u|=24;break;case y:return e=ti(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case N:return e=ti(13,a,n,u),e.elementType=N,e.lanes=d,e;case F:return e=ti(19,a,n,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case P:M=10;break t;case V:M=9;break t;case D:M=11;break t;case U:M=14;break t;case z:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ti(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function ir(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Lu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function Nu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Xr=[],Wr=0,wl=null,Rl=0,fi=[],di=0,ar=null,Yi=1,ji="";function rr(e,n){Xr[Wr++]=Rl,Xr[Wr++]=wl,wl=e,Rl=n}function tm(e,n,a){fi[di++]=Yi,fi[di++]=ji,fi[di++]=ar,ar=e;var o=Yi;e=ji;var u=32-Vt(o)-1;o&=~(1<<u),a+=1;var d=32-Vt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Yi=1<<32-Vt(n)+u|a<<u|o,ji=d+e}else Yi=1<<d|a<<u|o,ji=e}function Ou(e){e.return!==null&&(rr(e,1),tm(e,1,0))}function Pu(e){for(;e===wl;)wl=Xr[--Wr],Xr[Wr]=null,Rl=Xr[--Wr],Xr[Wr]=null;for(;e===ar;)ar=fi[--di],fi[di]=null,ji=fi[--di],fi[di]=null,Yi=fi[--di],fi[di]=null}var Xn=null,rn=null,Pe=!1,sr=null,Li=!1,zu=Error(r(519));function or(e){var n=Error(r(418,""));throw oo(ci(n,e)),zu}function em(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[mn]=e,n[nn]=o,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)we(Lo[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),kn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Te(n);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Pr(n,o.value,o.defaultValue,o.children),Te(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||v0(n.textContent,a)?(o.popover!=null&&(we("beforetoggle",n),we("toggle",n)),o.onScroll!=null&&we("scroll",n),o.onScrollEnd!=null&&we("scrollend",n),o.onClick!=null&&(n.onclick=lc),n=!0):n=!1,n||or(e)}function nm(e){for(Xn=e.return;Xn;)switch(Xn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Xn=Xn.return}}function ro(e){if(e!==Xn)return!1;if(!Pe)return nm(e),Pe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$f(e.type,e.memoizedProps)),a=!a),a&&rn&&or(e),nm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){rn=Ei(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}rn=null}}else n===27?(n=rn,Na(e.type)?(e=id,id=null,rn=e):rn=n):rn=Xn?Ei(e.stateNode.nextSibling):null;return!0}function so(){rn=Xn=null,Pe=!1}function im(){var e=sr;return e!==null&&(Jn===null?Jn=e:Jn.push.apply(Jn,e),sr=null),e}function oo(e){sr===null?sr=[e]:sr.push(e)}var Bu=Z(null),lr=null,Zi=null;function va(e,n,a){gt(Bu,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Bu.current,dt(Bu)}function Iu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Fu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=u;for(var k=0;k<n.length;k++)if(T.context===n[k]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Iu(d.return,a,e),o||(M=null);break t}d=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Iu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function lo(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=u.type;$n(u.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(u===ht.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Fu(n,e,a,o),n.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return am(lr,e)}function Dl(e,n){return lr===null&&cr(e),am(e,n)}function am(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var ny=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},iy=s.unstable_scheduleCallback,ay=s.unstable_NormalPriority,gn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new ny,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&iy(ay,function(){e.controller.abort()})}var uo=null,Gu=0,qr=0,Yr=null;function ry(e,n){if(uo===null){var a=uo=[];Gu=0,qr=Xf(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(rm,rm),n}function rm(){if(--Gu===0&&uo!==null){Yr!==null&&(Yr.status="fulfilled");var e=uo;uo=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var sm=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ry(e,n),sm!==null&&sm(e,n)};var ur=Z(null);function Vu(){var e=ur.current;return e!==null?e:Ze.pooledCache}function Ul(e,n){n===null?gt(ur,ur.current):gt(ur,n.pool)}function om(){var e=Vu();return e===null?null:{parent:gn._currentValue,pool:e}}var fo=Error(r(460)),lm=Error(r(474)),Ll=Error(r(542)),ku={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nl(){}function um(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Nl,Nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e;default:if(typeof n.status=="string")n.then(Nl,Nl);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e}throw ho=n,fo}}var ho=null;function fm(){if(ho===null)throw Error(r(459));var e=ho;return ho=null,e}function dm(e){if(e===fo||e===Ll)throw Error(r(483))}var xa=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(e),Jp(e,null,a),n}return bl(e,o,n,a),Tl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,jt(e,a)}}function qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yu=!1;function mo(){if(Yu){var e=Yr;if(e!==null)throw e}}function go(e,n,a,o){Yu=!1;var u=e.updateQueue;xa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var k=T,it=k.next;k.next=null,M===null?d=it:M.next=it,M=k;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,T=vt.lastBaseUpdate,T!==M&&(T===null?vt.firstBaseUpdate=it:T.next=it,vt.lastBaseUpdate=k))}if(d!==null){var Mt=u.baseState;M=0,vt=it=k=null,T=d;do{var st=T.lane&-536870913,ot=st!==T.lane;if(ot?(Ce&st)===st:(o&st)===st){st!==0&&st===qr&&(Yu=!0),vt!==null&&(vt=vt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ce=e,se=T;st=n;var ke=a;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){Mt=ce.call(ke,Mt,st);break t}Mt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,st=typeof ce=="function"?ce.call(ke,Mt,st):ce,st==null)break t;Mt=g({},Mt,st);break t;case 2:xa=!0}}st=T.callback,st!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[st]:ot.push(st))}else ot={lane:st,tag:T.tag,payload:T.payload,callback:T.callback,next:null},vt===null?(it=vt=ot,k=Mt):vt=vt.next=ot,M|=st;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);vt===null&&(k=Mt),u.baseState=k,u.firstBaseUpdate=it,u.lastBaseUpdate=vt,d===null&&(u.shared.lanes=0),Ca|=M,e.lanes=M,e.memoizedState=Mt}}function hm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function pm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hm(a[e],n)}var jr=Z(null),Ol=Z(0);function mm(e,n){e=ia,gt(Ol,e),gt(jr,n),ia=e|n.baseLanes}function ju(){gt(Ol,ia),gt(jr,jr.current)}function Zu(){ia=Ol.current,dt(jr),dt(Ol)}var Ma=0,Me=null,Ge=null,fn=null,Pl=!1,Zr=!1,fr=!1,zl=0,_o=0,Kr=null,oy=0;function on(){throw Error(r(321))}function Ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function Qu(e,n,a,o,u,d){return Ma=d,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Jm:$m,fr=!1,d=a(o,u),fr=!1,Zr&&(d=_m(n,a,o,u)),gm(e),d}function gm(e){O.H=Vl;var n=Ge!==null&&Ge.next!==null;if(Ma=0,fn=Ge=Me=null,Pl=!1,_o=0,Kr=null,n)throw Error(r(300));e===null||Mn||(e=e.dependencies,e!==null&&Cl(e)&&(Mn=!0))}function _m(e,n,a,o){Me=e;var u=0;do{if(Zr&&(Kr=null),_o=0,Zr=!1,25<=u)throw Error(r(301));if(u+=1,fn=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=py,d=n(a,o)}while(Zr);return d}function ly(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(Me.flags|=1024),n}function Ju(){var e=zl!==0;return zl=0,e}function $u(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function tf(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}Ma=0,fn=Ge=Me=null,Zr=!1,_o=zl=0,Kr=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Me.memoizedState=fn=e:fn=fn.next=e,fn}function dn(){if(Ge===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=fn===null?Me.memoizedState:fn.next;if(n!==null)fn=n,Ge=e;else{if(e===null)throw Me.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},fn===null?Me.memoizedState=fn=e:fn=fn.next=e}return fn}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,Kr===null&&(Kr=[]),e=um(Kr,e,n),n=Me,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Jm:$m),e}function Bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===P)return zn(e)}throw Error(r(438,String(e)))}function nf(e){var n=null,a=Me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ef(),Me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=dn();return af(n,Ge,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var T=M=null,k=null,it=n,vt=!1;do{var Mt=it.lane&-536870913;if(Mt!==it.lane?(Ce&Mt)===Mt:(Ma&Mt)===Mt){var st=it.revertLane;if(st===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Mt===qr&&(vt=!0);else if((Ma&st)===st){it=it.next,st===qr&&(vt=!0);continue}else Mt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},k===null?(T=k=Mt,M=d):k=k.next=Mt,Me.lanes|=st,Ca|=st;Mt=it.action,fr&&a(d,Mt),d=it.hasEagerState?it.eagerState:a(d,Mt)}else st={lane:Mt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},k===null?(T=k=st,M=d):k=k.next=st,Me.lanes|=Mt,Ca|=Mt;it=it.next}while(it!==null&&it!==n);if(k===null?M=d:k.next=T,!$n(d,e.memoizedState)&&(Mn=!0,vt&&(a=Yr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rf(e){var n=dn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);$n(d,n.memoizedState)||(Mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function vm(e,n,a){var o=Me,u=dn(),d=Pe;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!$n((Ge||u).memoizedState,a);M&&(u.memoizedState=a,Mn=!0),u=u.queue;var T=Sm.bind(null,o,u,e);if(xo(2048,8,T,[e]),u.getSnapshot!==n||M||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Qr(9,Fl(),ym.bind(null,o,u,a,n),null),Ze===null)throw Error(r(349));d||(Ma&124)!==0||xm(o,n,a)}return a}function xm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Me.updateQueue,n===null?(n=ef(),Me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ym(e,n,a,o){n.value=a,n.getSnapshot=o,Mm(n)&&Em(e)}function Sm(e,n,a){return a(function(){Mm(n)&&Em(e)})}function Mm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Em(e){var n=Vr(e,2);n!==null&&ri(n,e,2)}function sf(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),fr){ft(!0);try{a()}finally{ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function bm(e,n,a,o){return e.baseState=a,af(e,Ge,typeof o=="function"?o:Qi)}function cy(e,n,a,o,u){if(Gl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Tm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Tm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=O.T,M={};O.T=M;try{var T=a(u,o),k=O.S;k!==null&&k(M,T),Am(e,n,T)}catch(it){of(e,n,it)}finally{O.T=d}}else try{d=a(u,o),Am(e,n,d)}catch(it){of(e,n,it)}}function Am(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(e,n,o)},function(o){return of(e,n,o)}):wm(e,n,a)}function wm(e,n,a){n.status="fulfilled",n.value=a,Rm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Tm(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Rm(n),n=n.next;while(n!==o)}e.action=null}function Rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cm(e,n){return n}function Dm(e,n){if(Pe){var a=Ze.formState;if(a!==null){t:{var o=Me;if(Pe){if(rn){e:{for(var u=rn,d=Li;u.nodeType!==8;){if(!d){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){rn=Ei(u.nextSibling),o=u.data==="F!";break t}}or(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:n},a.queue=o,a=Zm.bind(null,Me,o),o.dispatch=a,o=sf(!1),d=df.bind(null,Me,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=cy.bind(null,Me,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Um(e){var n=dn();return Lm(n,Ge,e)}function Lm(e,n,a){if(n=af(e,n,Cm)[0],e=Il(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(M){throw M===fo?Ll:M}else o=n;n=dn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Me.flags|=2048,Qr(9,Fl(),uy.bind(null,u,a),null)),[o,d,e]}function uy(e,n){e.action=n}function Nm(e){var n=dn(),a=Ge;if(a!==null)return Lm(n,a,e);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Qr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Me.updateQueue,n===null&&(n=ef(),Me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Fl(){return{destroy:void 0,resource:void 0}}function Om(){return dn().memoizedState}function Hl(e,n,a,o){var u=Kn();o=o===void 0?null:o,Me.flags|=e,u.memoizedState=Qr(1|n,Fl(),a,o)}function xo(e,n,a,o){var u=dn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ge!==null&&o!==null&&Ku(o,Ge.memoizedState.deps)?u.memoizedState=Qr(n,d,a,o):(Me.flags|=e,u.memoizedState=Qr(1|n,d,a,o))}function Pm(e,n){Hl(8390656,8,e,n)}function zm(e,n){xo(2048,8,e,n)}function Bm(e,n){return xo(4,2,e,n)}function Im(e,n){return xo(4,4,e,n)}function Fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hm(e,n,a){a=a!=null?a.concat([e]):null,xo(4,4,Fm.bind(null,n,e),a)}function lf(){}function Gm(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ku(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Vm(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ku(n,o[1]))return o[0];if(o=e(),fr){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o}function cf(e,n,a){return a===void 0||(Ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Wg(),Me.lanes|=e,Ca|=e,a)}function km(e,n,a,o){return $n(a,n)?a:jr.current!==null?(e=cf(e,a,o),$n(e,n)||(Mn=!0),e):(Ma&42)===0?(Mn=!0,e.memoizedState=a):(e=Wg(),Me.lanes|=e,Ca|=e,n)}function Xm(e,n,a,o,u){var d=X.p;X.p=d!==0&&8>d?d:8;var M=O.T,T={};O.T=T,df(e,!1,n,a);try{var k=u(),it=O.S;if(it!==null&&it(T,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var vt=sy(k,o);yo(e,n,vt,ai(e))}else yo(e,n,o,ai(e))}catch(Mt){yo(e,n,{then:function(){},status:"rejected",reason:Mt},ai())}finally{X.p=d,O.T=M}}function fy(){}function uf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Wm(e).queue;Xm(e,u,n,I,a===null?fy:function(){return qm(e),a(o)})}function Wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qm(e){var n=Wm(e).next.queue;yo(e,n,{},ai())}function ff(){return zn(Io)}function Ym(){return dn().memoizedState}function jm(){return dn().memoizedState}function dy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=ya(a);var o=Sa(n,e,a);o!==null&&(ri(o,n,a),po(o,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function hy(e,n,a){var o=ai();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?Km(n,a):(a=Du(e,n,a,o),a!==null&&(ri(a,e,o),Qm(a,n,o)))}function Zm(e,n,a){var o=ai();yo(e,n,a,o)}function yo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))Km(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,T=d(M,a);if(u.hasEagerState=!0,u.eagerState=T,$n(T,M))return bl(e,n,u,0),Ze===null&&El(),!1}catch{}finally{}if(a=Du(e,n,u,o),a!==null)return ri(a,e,o),Qm(a,n,o),!0}return!1}function df(e,n,a,o){if(o={lane:2,revertLane:Xf(),action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(r(479))}else n=Du(e,a,o,2),n!==null&&ri(n,e,2)}function Gl(e){var n=e.alternate;return e===Me||n!==null&&n===Me}function Km(e,n){Zr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Qm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,jt(e,a)}}var Vl={readContext:zn,use:Bl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},Jm={readContext:zn,use:Bl,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:Pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,Fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var o=e();if(fr){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(fr){ft(!0);try{a(n)}finally{ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=hy.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=sf(e);var n=e.queue,a=Zm.bind(null,Me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(e,n){var a=Kn();return cf(a,e,n)},useTransition:function(){var e=sf(!1);return e=Xm.bind(null,Me,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Me,u=Kn();if(Pe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Ce&124)!==0||xm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Pm(Sm.bind(null,o,d,e),[e]),o.flags|=2048,Qr(9,Fl(),ym.bind(null,o,d,a,n),null),a},useId:function(){var e=Kn(),n=Ze.identifierPrefix;if(Pe){var a=ji,o=Yi;a=(o&~(1<<32-Vt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=oy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:ff,useFormState:Dm,useActionState:Dm,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,Me,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return Kn().memoizedState=dy.bind(null,Me)}},$m={readContext:zn,use:Bl,useCallback:Gm,useContext:zn,useEffect:zm,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Im,useMemo:Vm,useReducer:Il,useRef:Om,useState:function(){return Il(Qi)},useDebugValue:lf,useDeferredValue:function(e,n){var a=dn();return km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Il(Qi)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:ff,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=dn();return bm(a,Ge,e,n)},useMemoCache:nf,useCacheRefresh:jm},py={readContext:zn,use:Bl,useCallback:Gm,useContext:zn,useEffect:zm,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Im,useMemo:Vm,useReducer:rf,useRef:Om,useState:function(){return rf(Qi)},useDebugValue:lf,useDeferredValue:function(e,n){var a=dn();return Ge===null?cf(a,e,n):km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=rf(Qi)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:ff,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=dn();return Ge!==null?bm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:jm},Jr=null,So=0;function kl(e){var n=So;return So+=1,Jr===null&&(Jr=[]),um(Jr,e,n)}function Mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tg(e){var n=e._init;return n(e._payload)}function eg(e){function n(K,W){if(e){var et=K.deletions;et===null?(K.deletions=[W],K.flags|=16):et.push(W)}}function a(K,W){if(!e)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=qi(K,W),K.index=0,K.sibling=null,K}function d(K,W,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<W?(K.flags|=67108866,W):et):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function M(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function T(K,W,et,yt){return W===null||W.tag!==6?(W=Lu(et,K.mode,yt),W.return=K,W):(W=u(W,et),W.return=K,W)}function k(K,W,et,yt){var Wt=et.type;return Wt===E?vt(K,W,et.props.children,yt,et.key):W!==null&&(W.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===z&&tg(Wt)===W.type)?(W=u(W,et.props),Mo(W,et),W.return=K,W):(W=Al(et.type,et.key,et.props,null,K.mode,yt),Mo(W,et),W.return=K,W)}function it(K,W,et,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=Nu(et,K.mode,yt),W.return=K,W):(W=u(W,et.children||[]),W.return=K,W)}function vt(K,W,et,yt,Wt){return W===null||W.tag!==7?(W=ir(et,K.mode,yt,Wt),W.return=K,W):(W=u(W,et),W.return=K,W)}function Mt(K,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Lu(""+W,K.mode,et),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return et=Al(W.type,W.key,W.props,null,K.mode,et),Mo(et,W),et.return=K,et;case S:return W=Nu(W,K.mode,et),W.return=K,W;case z:var yt=W._init;return W=yt(W._payload),Mt(K,W,et)}if(at(W)||Y(W))return W=ir(W,K.mode,et,null),W.return=K,W;if(typeof W.then=="function")return Mt(K,kl(W),et);if(W.$$typeof===P)return Mt(K,Dl(K,W),et);Xl(K,W)}return null}function st(K,W,et,yt){var Wt=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Wt!==null?null:T(K,W,""+et,yt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===Wt?k(K,W,et,yt):null;case S:return et.key===Wt?it(K,W,et,yt):null;case z:return Wt=et._init,et=Wt(et._payload),st(K,W,et,yt)}if(at(et)||Y(et))return Wt!==null?null:vt(K,W,et,yt,null);if(typeof et.then=="function")return st(K,W,kl(et),yt);if(et.$$typeof===P)return st(K,W,Dl(K,et),yt);Xl(K,et)}return null}function ot(K,W,et,yt,Wt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return K=K.get(et)||null,T(W,K,""+yt,Wt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case x:return K=K.get(yt.key===null?et:yt.key)||null,k(W,K,yt,Wt);case S:return K=K.get(yt.key===null?et:yt.key)||null,it(W,K,yt,Wt);case z:var be=yt._init;return yt=be(yt._payload),ot(K,W,et,yt,Wt)}if(at(yt)||Y(yt))return K=K.get(et)||null,vt(W,K,yt,Wt,null);if(typeof yt.then=="function")return ot(K,W,et,kl(yt),Wt);if(yt.$$typeof===P)return ot(K,W,et,Dl(W,yt),Wt);Xl(W,yt)}return null}function ce(K,W,et,yt){for(var Wt=null,be=null,te=W,le=W=0,bn=null;te!==null&&le<et.length;le++){te.index>le?(bn=te,te=null):bn=te.sibling;var Ne=st(K,te,et[le],yt);if(Ne===null){te===null&&(te=bn);break}e&&te&&Ne.alternate===null&&n(K,te),W=d(Ne,W,le),be===null?Wt=Ne:be.sibling=Ne,be=Ne,te=bn}if(le===et.length)return a(K,te),Pe&&rr(K,le),Wt;if(te===null){for(;le<et.length;le++)te=Mt(K,et[le],yt),te!==null&&(W=d(te,W,le),be===null?Wt=te:be.sibling=te,be=te);return Pe&&rr(K,le),Wt}for(te=o(te);le<et.length;le++)bn=ot(te,K,le,et[le],yt),bn!==null&&(e&&bn.alternate!==null&&te.delete(bn.key===null?le:bn.key),W=d(bn,W,le),be===null?Wt=bn:be.sibling=bn,be=bn);return e&&te.forEach(function(Ia){return n(K,Ia)}),Pe&&rr(K,le),Wt}function se(K,W,et,yt){if(et==null)throw Error(r(151));for(var Wt=null,be=null,te=W,le=W=0,bn=null,Ne=et.next();te!==null&&!Ne.done;le++,Ne=et.next()){te.index>le?(bn=te,te=null):bn=te.sibling;var Ia=st(K,te,Ne.value,yt);if(Ia===null){te===null&&(te=bn);break}e&&te&&Ia.alternate===null&&n(K,te),W=d(Ia,W,le),be===null?Wt=Ia:be.sibling=Ia,be=Ia,te=bn}if(Ne.done)return a(K,te),Pe&&rr(K,le),Wt;if(te===null){for(;!Ne.done;le++,Ne=et.next())Ne=Mt(K,Ne.value,yt),Ne!==null&&(W=d(Ne,W,le),be===null?Wt=Ne:be.sibling=Ne,be=Ne);return Pe&&rr(K,le),Wt}for(te=o(te);!Ne.done;le++,Ne=et.next())Ne=ot(te,K,le,Ne.value,yt),Ne!==null&&(e&&Ne.alternate!==null&&te.delete(Ne.key===null?le:Ne.key),W=d(Ne,W,le),be===null?Wt=Ne:be.sibling=Ne,be=Ne);return e&&te.forEach(function(mS){return n(K,mS)}),Pe&&rr(K,le),Wt}function ke(K,W,et,yt){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var Wt=et.key;W!==null;){if(W.key===Wt){if(Wt=et.type,Wt===E){if(W.tag===7){a(K,W.sibling),yt=u(W,et.props.children),yt.return=K,K=yt;break t}}else if(W.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===z&&tg(Wt)===W.type){a(K,W.sibling),yt=u(W,et.props),Mo(yt,et),yt.return=K,K=yt;break t}a(K,W);break}else n(K,W);W=W.sibling}et.type===E?(yt=ir(et.props.children,K.mode,yt,et.key),yt.return=K,K=yt):(yt=Al(et.type,et.key,et.props,null,K.mode,yt),Mo(yt,et),yt.return=K,K=yt)}return M(K);case S:t:{for(Wt=et.key;W!==null;){if(W.key===Wt)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(K,W.sibling),yt=u(W,et.children||[]),yt.return=K,K=yt;break t}else{a(K,W);break}else n(K,W);W=W.sibling}yt=Nu(et,K.mode,yt),yt.return=K,K=yt}return M(K);case z:return Wt=et._init,et=Wt(et._payload),ke(K,W,et,yt)}if(at(et))return ce(K,W,et,yt);if(Y(et)){if(Wt=Y(et),typeof Wt!="function")throw Error(r(150));return et=Wt.call(et),se(K,W,et,yt)}if(typeof et.then=="function")return ke(K,W,kl(et),yt);if(et.$$typeof===P)return ke(K,W,Dl(K,et),yt);Xl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(K,W.sibling),yt=u(W,et),yt.return=K,K=yt):(a(K,W),yt=Lu(et,K.mode,yt),yt.return=K,K=yt),M(K)):a(K,W)}return function(K,W,et,yt){try{So=0;var Wt=ke(K,W,et,yt);return Jr=null,Wt}catch(te){if(te===fo||te===Ll)throw te;var be=ti(29,te,null,K.mode);return be.lanes=yt,be.return=K,be}finally{}}}var $r=eg(!0),ng=eg(!1),hi=Z(null),Ni=null;function Ea(e){var n=e.alternate;gt(_n,_n.current&1),gt(hi,e),Ni===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(Ni=e)}function ig(e){if(e.tag===22){if(gt(_n,_n.current),gt(hi,e),Ni===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ni=e)}}else ba()}function ba(){gt(_n,_n.current),gt(hi,hi.current)}function Ji(e){dt(hi),Ni===e&&(Ni=null),dt(_n)}var _n=Z(0);function Wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||nd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function hf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=ya(o);u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(ri(n,e,o),po(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(ri(n,e,o),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=ya(a);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,a),n!==null&&(ri(n,e,a),po(n,e,a))}};function ag(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,d):!0}function rg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&pf.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sg(e){ql(e)}function og(e){console.error(e)}function lg(e){ql(e)}function Yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(e,n)},a}function ug(e){return e=ya(e),e.tag=3,e}function fg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){cg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){cg(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function my(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lo(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 13:return Ni===null?Ff():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ku?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Gf(e,o,u)),!1;case 22:return a.flags|=65536,o===ku?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Gf(e,o,u)),!1}throw Error(r(435,a.tag))}return Gf(e,o,u),Ff(),!1}if(Pe)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(e=Error(r(422),{cause:o}),oo(ci(e,a)))):(o!==zu&&(n=Error(r(423),{cause:o}),oo(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=mf(e.stateNode,o,u),qu(e,u),sn!==4&&(sn=2)),!1;var d=Error(r(520),{cause:o});if(d=ci(d,a),Co===null?Co=[d]:Co.push(d),sn!==4&&(sn=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=mf(a.stateNode,o,e),qu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Da===null||!Da.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ug(u),fg(u,e,a,o),qu(a,u),!1}a=a.return}while(a!==null);return!1}var dg=Error(r(461)),Mn=!1;function Dn(e,n,a,o){n.child=e===null?ng(n,null,a,o):$r(n,e.child,a,o)}function hg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return cr(n),o=Qu(e,n,a,M,d,u),T=Ju(),e!==null&&!Mn?($u(e,n,u),$i(e,n,u)):(Pe&&T&&Ou(n),n.flags|=1,Dn(e,n,o,u),n.child)}function pg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Uu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,mg(e,n,d,o,u)):(e=Al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Ef(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(M,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=qi(d,o),e.ref=n.ref,e.return=n,n.child=e}function mg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(io(d,o)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=o=d,Ef(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,$i(e,n,u)}return gf(e,n,a,o,u)}function gg(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return _g(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,d!==null?d.cachePool:null),d!==null?mm(n,d):ju(),ig(n);else return n.lanes=n.childLanes=536870912,_g(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ul(n,d.cachePool),mm(n,d),ba(),n.memoizedState=null):(e!==null&&Ul(n,null),ju(),ba());return Dn(e,n,u,a),n.child}function _g(e,n,a,o){var u=Vu();return u=u===null?null:{parent:gn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ul(n,null),ju(),ig(n),e!==null&&lo(e,n,o,!0),null}function jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function gf(e,n,a,o,u){return cr(n),a=Qu(e,n,a,o,void 0,u),o=Ju(),e!==null&&!Mn?($u(e,n,u),$i(e,n,u)):(Pe&&o&&Ou(n),n.flags|=1,Dn(e,n,a,u),n.child)}function vg(e,n,a,o,u,d){return cr(n),n.updateQueue=null,a=_m(n,o,a,u),gm(e),o=Ju(),e!==null&&!Mn?($u(e,n,d),$i(e,n,d)):(Pe&&o&&Ou(n),n.flags|=1,Dn(e,n,a,d),n.child)}function xg(e,n,a,o,u){if(cr(n),n.stateNode===null){var d=kr,M=a.contextType;typeof M=="object"&&M!==null&&(d=zn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=pf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Xu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?zn(M):kr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(hf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&pf.enqueueReplaceState(d,d.state,null),go(n,o,d,u),mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var T=n.memoizedProps,k=dr(a,T);d.props=k;var it=d.context,vt=a.contextType;M=kr,typeof vt=="object"&&vt!==null&&(M=zn(vt));var Mt=a.getDerivedStateFromProps;vt=typeof Mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,vt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||it!==M)&&rg(n,d,o,M),xa=!1;var st=n.memoizedState;d.state=st,go(n,o,d,u),mo(),it=n.memoizedState,T||st!==it||xa?(typeof Mt=="function"&&(hf(n,a,Mt,o),it=n.memoizedState),(k=xa||ag(n,a,k,o,st,it,M))?(vt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=M,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Wu(e,n),M=n.memoizedProps,vt=dr(a,M),d.props=vt,Mt=n.pendingProps,st=d.context,it=a.contextType,k=kr,typeof it=="object"&&it!==null&&(k=zn(it)),T=a.getDerivedStateFromProps,(it=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Mt||st!==k)&&rg(n,d,o,k),xa=!1,st=n.memoizedState,d.state=st,go(n,o,d,u),mo();var ot=n.memoizedState;M!==Mt||st!==ot||xa||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof T=="function"&&(hf(n,a,T,o),ot=n.memoizedState),(vt=xa||ag(n,a,vt,o,st,ot,k)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ot,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ot,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),d.props=o,d.state=ot,d.context=k,o=vt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,jl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=$r(n,e.child,null,u),n.child=$r(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=$i(e,n,u),e}function yg(e,n,a,o){return so(),n.flags|=256,Dn(e,n,a,o),n.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:om()}}function xf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function Sg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pe){if(u?Ea(n):ba(),Pe){var T=rn,k;if(k=T){t:{for(k=T,T=Li;k.nodeType!==8;){if(!T){T=null;break t}if(k=Ei(k.nextSibling),k===null){T=null;break t}}T=k}T!==null?(n.memoizedState={dehydrated:T,treeContext:ar!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},k=ti(18,null,null,0),k.stateNode=T,k.return=n,n.child=k,Xn=n,rn=null,k=!0):k=!1}k||or(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return nd(T)?n.lanes=32:n.lanes=536870912,null;Ji(n)}return T=o.children,o=o.fallback,u?(ba(),u=n.mode,T=Zl({mode:"hidden",children:T},u),o=ir(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=vf(a),u.childLanes=xf(e,M,a),n.memoizedState=_f,o):(Ea(n),yf(n,T))}if(k=e.memoizedState,k!==null&&(T=k.dehydrated,T!==null)){if(d)n.flags&256?(Ea(n),n.flags&=-257,n=Sf(e,n,a)):n.memoizedState!==null?(ba(),n.child=e.child,n.flags|=128,n=null):(ba(),u=o.fallback,T=n.mode,o=Zl({mode:"visible",children:o.children},T),u=ir(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,$r(n,e.child,null,a),o=n.child,o.memoizedState=vf(a),o.childLanes=xf(e,M,a),n.memoizedState=_f,n=u);else if(Ea(n),nd(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var it=M.dgst;M=it,o=Error(r(419)),o.stack="",o.digest=M,oo({value:o,source:null,stack:null}),n=Sf(e,n,a)}else if(Mn||lo(e,n,a,!1),M=(a&e.childLanes)!==0,Mn||M){if(M=Ze,M!==null&&(o=a&-a,o=(o&42)!==0?1:ue(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,Vr(e,o),ri(M,e,o),dg;T.data==="$?"||Ff(),n=Sf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,rn=Ei(T.nextSibling),Xn=n,Pe=!0,sr=null,Li=!1,e!==null&&(fi[di++]=Yi,fi[di++]=ji,fi[di++]=ar,Yi=e.id,ji=e.overflow,ar=n),n=yf(n,o.children),n.flags|=4096);return n}return u?(ba(),u=o.fallback,T=n.mode,k=e.child,it=k.sibling,o=qi(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,it!==null?u=qi(it,u):(u=ir(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=vf(a):(k=T.cachePool,k!==null?(it=gn._currentValue,k=k.parent!==it?{parent:it,pool:it}:k):k=om(),T={baseLanes:T.baseLanes|a,cachePool:k}),u.memoizedState=T,u.childLanes=xf(e,M,a),n.memoizedState=_f,o):(Ea(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function yf(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=ti(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Sf(e,n,a){return $r(n,e.child,null,a),e=yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Iu(e.return,n,a)}function Mf(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Eg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Dn(e,n,o.children,a),o=_n.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,a,n);else if(e.tag===19)Mg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(gt(_n,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mf(n,!0,a,null,d);break;case"together":Mf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(lo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function gy(e,n,a){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),va(n,gn,e.memoizedState.cache),so();break;case 27:case 5:Gt(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sg(e,n,a):(Ea(n),e=$i(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Eg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(_n,_n.current),o)break;return null;case 22:case 23:return n.lanes=0,gg(e,n,a);case 24:va(n,gn,e.memoizedState.cache)}return $i(e,n,a)}function bg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!Ef(e,a)&&(n.flags&128)===0)return Mn=!1,gy(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,Pe&&(n.flags&1048576)!==0&&tm(n,Rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Uu(o)?(e=dr(o,e),n.tag=1,n=xg(null,n,o,e,a)):(n.tag=0,n=gf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=hg(null,n,o,e,a);break t}else if(u===U){n.tag=14,n=pg(null,n,o,e,a);break t}}throw n=rt(o)||o,Error(r(306,n,""))}}return n;case 0:return gf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=dr(o,n.pendingProps),xg(e,n,o,u,a);case 3:t:{if(xt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Wu(e,n),go(n,o,null,a);var M=n.memoizedState;if(o=M.cache,va(n,gn,o),o!==d.cache&&Fu(n,[gn],a,!0),mo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=yg(e,n,o,a);break t}else if(o!==u){u=ci(Error(r(424)),n),oo(u),n=yg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rn=Ei(e.firstChild),Xn=n,Pe=!0,sr=null,Li=!0,a=ng(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(so(),o===u){n=$i(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return jl(e,n),e===null?(a=R0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,e=n.pendingProps,o=cc(ut.current).createElement(a),o[mn]=n,o[nn]=e,Ln(o,a,e),un(o),n.stateNode=o):n.memoizedState=R0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&Pe&&(o=n.stateNode=T0(n.type,n.pendingProps,ut.current),Xn=n,Li=!0,u=rn,Na(n.type)?(id=u,rn=Ei(o.firstChild)):rn=u),Dn(e,n,n.pendingProps.children,a),jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pe&&((u=o=rn)&&(o=Xy(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Xn=n,rn=Ei(o.firstChild),Li=!1,u=!0):u=!1),u||or(n)),Gt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,$f(u,d)?o=null:M!==null&&$f(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Qu(e,n,ly,null,null,a),Io._currentValue=u),jl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Pe&&((e=a=rn)&&(a=Wy(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Xn=n,rn=null,e=!0):e=!1),e||or(n)),null;case 13:return Sg(e,n,a);case 4:return xt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=$r(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return hg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=zn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return pg(e,n,n.type,n.pendingProps,a);case 15:return mg(e,n,n.type,n.pendingProps,a);case 19:return Eg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=qi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return gg(e,n,a);case 24:return cr(n),o=zn(gn),e===null?(u=Vu(),u===null&&(u=Ze,d=Hu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Xu(n),va(n,gn,u)):((e.lanes&a)!==0&&(Wu(e,n),go(n,null,null,a),mo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,gn,o)):(o=d.cache,va(n,gn,o),o!==u.cache&&Fu(n,[gn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(e){e.flags|=4}function Tg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!N0(n)){if(n=hi.current,n!==null&&((Ce&4194048)===Ce?Ni!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||n!==Ni))throw ho=ku,lm;e.flags|=8192}}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,is|=n)}function Eo(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function _y(e,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(gn),Tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ro(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,im())),en(n),null;case 26:return a=n.memoizedState,e===null?(ta(n),a!==null?(en(n),Tg(n,a)):(en(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ta(n),en(n),Tg(n,a)):(en(n),n.flags&=-16777217):(e.memoizedProps!==o&&ta(n),en(n),n.flags&=-16777217),null;case 27:de(n),a=ut.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}e=bt.current,ro(n)?em(n):(e=T0(u,o,a),n.stateNode=e,ta(n))}return en(n),null;case 5:if(de(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(e=bt.current,ro(n))em(n);else{switch(u=cc(ut.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[mn]=n,e[nn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Ln(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ta(n)}}return en(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ut.current,ro(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Xn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[mn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||v0(e.nodeValue,a)),e||or(n)}else e=cc(e).createTextNode(o),e[mn]=n,n.stateNode=e}return en(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ro(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[mn]=n}else so(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=im(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ji(n),n):(Ji(n),null)}if(Ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),en(n),null;case 4:return Tt(),e===null&&jf(n.stateNode.containerInfo),en(n),null;case 10:return Ki(n.type),en(n),null;case 19:if(dt(_n),u=n.memoizedState,u===null)return en(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)Eo(u,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Wl(e),d!==null){for(n.flags|=128,Eo(u,!1),e=d.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$p(a,e),a=a.sibling;return gt(_n,_n.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ct()>$l&&(n.flags|=128,o=!0,Eo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Wl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Eo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Pe)return en(n),null}else 2*Ct()-u.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,o=!0,Eo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ct(),n.sibling=null,e=_n.current,gt(_n,o?e&1|2:e&1),n):(en(n),null);case 22:case 23:return Ji(n),Zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&dt(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(gn),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function vy(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(gn),Tt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 13:if(Ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));so()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return dt(_n),null;case 4:return Tt(),null;case 10:return Ki(n.type),null;case 22:case 23:return Ji(n),Zu(),e!==null&&dt(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(gn),null;case 25:return null;default:return null}}function Ag(e,n){switch(Pu(n),n.tag){case 3:Ki(gn),Tt();break;case 26:case 27:case 5:de(n);break;case 4:Tt();break;case 13:Ji(n);break;case 19:dt(_n);break;case 10:Ki(n.type);break;case 22:case 23:Ji(n),Zu(),e!==null&&dt(ur);break;case 24:Ki(gn)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){je(n,n.return,T)}}function Ta(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var k=a,it=T;try{it()}catch(vt){je(u,k,vt)}}}o=o.next}while(o!==d)}}catch(vt){je(n,n.return,vt)}}function wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pm(n,a)}catch(o){je(e,e.return,o)}}}function Rg(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){je(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){je(e,n,u)}}function Oi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){je(e,n,u)}else a.current=null}function Cg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){je(e,e.return,u)}}function bf(e,n,a){try{var o=e.stateNode;Fy(o,e.type,a,n),o[nn]=n}catch(u){je(e,e.return,u)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=lc));else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function Ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[mn]=e,n[nn]=a}catch(d){je(e,e.return,d)}}var ea=!1,ln=!1,wf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,En=null;function xy(e,n){if(e=e.containerInfo,Qf=mc,e=kp(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,T=-1,k=-1,it=0,vt=0,Mt=e,st=null;e:for(;;){for(var ot;Mt!==a||u!==0&&Mt.nodeType!==3||(T=M+u),Mt!==d||o!==0&&Mt.nodeType!==3||(k=M+o),Mt.nodeType===3&&(M+=Mt.nodeValue.length),(ot=Mt.firstChild)!==null;)st=Mt,Mt=ot;for(;;){if(Mt===e)break e;if(st===a&&++it===u&&(T=M),st===d&&++vt===o&&(k=M),(ot=Mt.nextSibling)!==null)break;Mt=st,st=Mt.parentNode}Mt=ot}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},mc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ce=dr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){je(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ed(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ed(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Ng(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a),o&4&&bo(5,a);break;case 1:if(Aa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){je(a,a.return,M)}else{var u=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){je(a,a.return,M)}}o&64&&wg(a),o&512&&To(a,a.return);break;case 3:if(Aa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(e,n)}catch(M){je(a,a.return,M)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:Aa(e,a),n===null&&o&4&&Cg(a),o&512&&To(a,a.return);break;case 12:Aa(e,a);break;case 13:Aa(e,a),o&4&&zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ry.bind(null,a),qy(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||ln,u=ea;var d=ln;ea=o,(ln=n)&&!d?wa(e,a,(a.subtreeFlags&8772)!==0):Aa(e,a),ea=u,ln=d}break;case 30:break;default:Aa(e,a)}}function Og(e){var n=e.alternate;n!==null&&(e.alternate=null,Og(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Or(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Qn=!1;function na(e,n,a){for(a=a.child;a!==null;)Pg(e,n,a),a=a.sibling}function Pg(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(_t,a)}catch{}switch(a.tag){case 26:ln||Oi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Oi(a,n);var o=tn,u=Qn;Na(a.type)&&(tn=a.stateNode,Qn=!1),na(e,n,a),Oo(a.stateNode),tn=o,Qn=u;break;case 5:ln||Oi(a,n);case 6:if(o=tn,u=Qn,tn=null,na(e,n,a),tn=o,Qn=u,tn!==null)if(Qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(d){je(a,n,d)}else try{tn.removeChild(a.stateNode)}catch(d){je(a,n,d)}break;case 18:tn!==null&&(Qn?(e=tn,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Vo(e)):E0(tn,a.stateNode));break;case 4:o=tn,u=Qn,tn=a.stateNode.containerInfo,Qn=!0,na(e,n,a),tn=o,Qn=u;break;case 0:case 11:case 14:case 15:ln||Ta(2,a,n),ln||Ta(4,a,n),na(e,n,a);break;case 1:ln||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Rg(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,na(e,n,a),ln=o;break;default:na(e,n,a)}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vo(e)}catch(a){je(n,n.return,a)}}function yy(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lg),n;default:throw Error(r(435,e.tag))}}function Rf(e,n){var a=yy(e);n.forEach(function(o){var u=Cy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Na(T.type)){tn=T.stateNode,Qn=!1;break t}break;case 5:tn=T.stateNode,Qn=!1;break t;case 3:case 4:tn=T.stateNode.containerInfo,Qn=!0;break t}T=T.return}if(tn===null)throw Error(r(160));Pg(d,M,u),tn=null,Qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Bg(n,e),n=n.sibling}var Mi=null;function Bg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(n,e),ni(e),o&4&&(Ta(3,e,e.return),bo(3,e),Ta(5,e,e.return));break;case 1:ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ui]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Ln(d,o,a),d[mn]=e,un(d),o=d;break t;case"link":var M=U0("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(d=M[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}d=u.createElement(o),Ln(d,o,a),u.head.appendChild(d);break;case"meta":if(M=U0("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(d=M[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}d=u.createElement(o),Ln(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=e,un(d),o=d}e.stateNode=o}else L0(u,e.type,e.stateNode);else e.stateNode=D0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?L0(u,e.type,e.stateNode):D0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),a!==null&&o&4&&bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{jn(u,"")}catch(ot){je(e,e.return,ot)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,bf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(wf=!0);break;case 6:if(ei(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ot){je(e,e.return,ot)}}break;case 3:if(dc=null,u=Mi,Mi=uc(n.containerInfo),ei(n,e),Mi=u,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Vo(n.containerInfo)}catch(ot){je(e,e.return,ot)}wf&&(wf=!1,Ig(e));break;case 4:o=Mi,Mi=uc(e.stateNode.containerInfo),ei(n,e),ni(e),Mi=o;break;case 12:ei(n,e),ni(e);break;case 13:ei(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Of=Ct()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rf(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,it=ea,vt=ln;if(ea=it||u,ln=vt||k,ei(n,e),ln=vt,ea=it,ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ea||ln||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=k.stateNode;var Mt=k.memoizedProps.style,st=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;T.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(ot){je(k,k.return,ot)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(ot){je(k,k.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Rf(e,a))));break;case 19:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Rf(e,o)));break;case 30:break;case 21:break;default:ei(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Tf(e);Ql(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(jn(M,""),a.flags&=-33);var T=Tf(e);Ql(e,T,M);break;case 3:case 4:var k=a.stateNode.containerInfo,it=Tf(e);Af(e,it,k);break;default:throw Error(r(161))}}catch(vt){je(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rg(n,n.return,a),hr(n);break;case 27:Oo(n.stateNode);case 26:case 5:Oi(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function wa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:wa(u,d,a),bo(4,d);break;case 1:if(wa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){je(o,o.return,it)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)hm(k[u],T)}catch(it){je(o,o.return,it)}}a&&M&64&&wg(d),To(d,d.return);break;case 27:Ug(d);case 26:case 5:wa(u,d,a),a&&o===null&&M&4&&Cg(d),To(d,d.return);break;case 12:wa(u,d,a);break;case 13:wa(u,d,a),a&&M&4&&zg(u,d);break;case 22:d.memoizedState===null&&wa(u,d,a),To(d,d.return);break;case 30:break;default:wa(u,d,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Pi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(e,n,a,o),n=n.sibling}function Fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n,a,o),u&2048&&bo(9,n);break;case 1:Pi(e,n,a,o);break;case 3:Pi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Pi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,T=d.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){je(n,n.return,k)}}else Pi(e,n,a,o);break;case 13:Pi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(e,n,a,o):Ao(e,n):d._visibility&2?Pi(e,n,a,o):(d._visibility|=2,ts(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Cf(M,n);break;case 24:Pi(e,n,a,o),u&2048&&Df(n.alternate,n);break;default:Pi(e,n,a,o)}}function ts(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,T=a,k=o,it=M.flags;switch(M.tag){case 0:case 11:case 15:ts(d,M,T,k,u),bo(8,M);break;case 23:break;case 22:var vt=M.stateNode;M.memoizedState!==null?vt._visibility&2?ts(d,M,T,k,u):Ao(d,M):(vt._visibility|=2,ts(d,M,T,k,u)),u&&it&2048&&Cf(M.alternate,M);break;case 24:ts(d,M,T,k,u),u&&it&2048&&Df(M.alternate,M);break;default:ts(d,M,T,k,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Cf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Df(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function es(e){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 26:es(e),e.flags&wo&&e.memoizedState!==null&&rS(Mi,e.memoizedState,e.memoizedProps);break;case 5:es(e);break;case 3:case 4:var n=Mi;Mi=uc(e.stateNode.containerInfo),es(e),Mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=wo,wo=16777216,es(e),wo=n):es(e));break;default:es(e)}}function Gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,kg(o,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jl(e)):Ro(e);break;default:Ro(e)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,kg(o,e)}Gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}e=e.sibling}}function kg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,d=o.return;if(Og(o),o===a){En=null;break t}if(u!==null){u.return=d,En=u;break t}En=d}}}var Sy={getCacheForType:function(e){var n=zn(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},My=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,Ae=null,Ce=0,Ie=0,ii=null,Ra=!1,ns=!1,Uf=!1,ia=0,sn=0,Ca=0,pr=0,Lf=0,pi=0,is=0,Co=null,Jn=null,Nf=!1,Of=0,$l=1/0,tc=null,Da=null,Un=0,Ua=null,as=null,rs=0,Pf=0,zf=null,Xg=null,Do=0,Bf=null;function ai(){if((Be&2)!==0&&Ce!==0)return Ce&-Ce;if(O.T!==null){var e=qr;return e!==0?e:Xf()}return Ue()}function Wg(){pi===0&&(pi=(Ce&536870912)===0||Pe?q():536870912);var e=hi.current;return e!==null&&(e.flags|=32),pi}function ri(e,n,a){(e===Ze&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ss(e,0),La(e,Ce,pi,!1)),kt(e,a),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(pr|=a),sn===4&&La(e,Ce,pi,!1)),zi(e))}function qg(e,n,a){if((Be&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Pt(e,n),u=o?Ty(e,n):Hf(e,n,!0),d=o;do{if(u===0){ns&&!o&&La(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Ey(a)){u=Hf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;u=Co;var k=T.current.memoizedState.isDehydrated;if(k&&(ss(T,M).flags|=256),M=Hf(T,M,!1),M!==2){if(Uf&&!k){T.errorRecoveryDisabledLanes|=d,pr|=d,u=4;break t}d=Jn,Jn=u,d!==null&&(Jn===null?Jn=d:Jn.push.apply(Jn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){ss(e,0),La(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,pi,!Ra);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Of+300-Ct(),10<u)){if(La(o,n,pi,!Ra),Zt(o,0,!0)!==0)break t;o.timeoutHandle=S0(Yg.bind(null,o,a,Jn,tc,Nf,n,pi,pr,is,Ra,d,2,-0,0),u);break t}Yg(o,a,Jn,tc,Nf,n,pi,pr,is,Ra,d,0,-0,0)}}break}while(!0);zi(e)}function Yg(e,n,a,o,u,d,M,T,k,it,vt,Mt,st,ot){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:aS},Hg(n),Mt=sS(),Mt!==null)){e.cancelPendingCommit=Mt(t0.bind(null,e,n,d,a,o,u,M,T,k,vt,1,st,ot)),La(e,d,M,!it);return}t0(e,n,d,a,o,u,M,T,k)}function Ey(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,o){n&=~Lf,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Vt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Et(e,a,n)}function ec(){return(Be&6)===0?(Uo(0),!1):!0}function If(){if(Ae!==null){if(Ie===0)var e=Ae.return;else e=Ae,Zi=lr=null,tf(e),Jr=null,So=0,e=Ae;for(;e!==null;)Ag(e.alternate,e),e=e.return;Ae=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),If(),Ze=e,Ae=a=qi(e.current,null),Ce=n,Ie=0,ii=null,Ra=!1,ns=Pt(e,n),Uf=!1,is=pi=Lf=pr=Ca=sn=0,Jn=Co=null,Nf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Vt(o),d=1<<u;n|=e[u],o&=~d}return ia=n,El(),a}function jg(e,n){Me=null,O.H=Vl,n===fo||n===Ll?(n=fm(),Ie=3):n===lm?(n=fm(),Ie=4):Ie=n===dg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Ae===null&&(sn=1,Yl(e,ci(n,e.current)))}function Zg(){var e=O.H;return O.H=Vl,e===null?Vl:e}function Kg(){var e=O.A;return O.A=Sy,e}function Ff(){sn=4,Ra||(Ce&4194048)!==Ce&&hi.current!==null||(ns=!0),(Ca&134217727)===0&&(pr&134217727)===0||Ze===null||La(Ze,Ce,pi,!1)}function Hf(e,n,a){var o=Be;Be|=2;var u=Zg(),d=Kg();(Ze!==e||Ce!==n)&&(tc=null,ss(e,n)),n=!1;var M=sn;t:do try{if(Ie!==0&&Ae!==null){var T=Ae,k=ii;switch(Ie){case 8:If(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var it=Ie;if(Ie=0,ii=null,os(e,T,k,it),a&&ns){M=0;break t}break;default:it=Ie,Ie=0,ii=null,os(e,T,k,it)}}by(),M=sn;break}catch(vt){jg(e,vt)}while(!0);return n&&e.shellSuspendCounter++,Zi=lr=null,Be=o,O.H=u,O.A=d,Ae===null&&(Ze=null,Ce=0,El()),M}function by(){for(;Ae!==null;)Qg(Ae)}function Ty(e,n){var a=Be;Be|=2;var o=Zg(),u=Kg();Ze!==e||Ce!==n?(tc=null,$l=Ct()+500,ss(e,n)):ns=Pt(e,n);t:do try{if(Ie!==0&&Ae!==null){n=Ae;var d=ii;e:switch(Ie){case 1:Ie=0,ii=null,os(e,n,d,1);break;case 2:case 9:if(cm(d)){Ie=0,ii=null,Jg(n);break}n=function(){Ie!==2&&Ie!==9||Ze!==e||(Ie=7),zi(e)},d.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:cm(d)?(Ie=0,ii=null,Jg(n)):(Ie=0,ii=null,os(e,n,d,7));break;case 5:var M=null;switch(Ae.tag){case 26:M=Ae.memoizedState;case 5:case 27:var T=Ae;if(!M||N0(M)){Ie=0,ii=null;var k=T.sibling;if(k!==null)Ae=k;else{var it=T.return;it!==null?(Ae=it,nc(it)):Ae=null}break e}}Ie=0,ii=null,os(e,n,d,5);break;case 6:Ie=0,ii=null,os(e,n,d,6);break;case 8:If(),sn=6;break t;default:throw Error(r(462))}}Ay();break}catch(vt){jg(e,vt)}while(!0);return Zi=lr=null,O.H=o,O.A=u,Be=a,Ae!==null?0:(Ze=null,Ce=0,El(),sn)}function Ay(){for(;Ae!==null&&!Ot();)Qg(Ae)}function Qg(e){var n=bg(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?nc(e):Ae=n}function Jg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:tf(n);default:Ag(a,n),n=Ae=$p(n,ia),n=bg(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?nc(e):Ae=n}function os(e,n,a,o){Zi=lr=null,tf(n),Jr=null,So=0;var u=n.return;try{if(my(e,u,n,a,Ce)){sn=1,Yl(e,ci(a,e.current)),Ae=null;return}}catch(d){if(u!==null)throw Ae=u,d;sn=1,Yl(e,ci(a,e.current)),Ae=null;return}n.flags&32768?(Pe||o===1?e=!0:ns||(Ce&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),$g(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){$g(n,Ra);return}e=n.return;var a=_y(n.alternate,n,ia);if(a!==null){Ae=a;return}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=e}while(n!==null);sn===0&&(sn=5)}function $g(e,n){do{var a=vy(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);sn=6,Ae=null}function t0(e,n,a,o,u,d,M,T,k){e.cancelPendingCommit=null;do ic();while(Un!==0);if((Be&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Cu,Rt(e,a,d,M,T,k),e===Ze&&(Ae=Ze=null,Ce=0),as=n,Ua=e,rs=a,Pf=d,zf=u,Xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dy(Fe,function(){return r0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=X.p,X.p=2,M=Be,Be|=4;try{xy(e,n,a)}finally{Be=M,X.p=u,O.T=o}}Un=1,e0(),n0(),i0()}}function e0(){if(Un===1){Un=0;var e=Ua,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=X.p;X.p=2;var u=Be;Be|=4;try{Bg(n,e);var d=Jf,M=kp(e.containerInfo),T=d.focusedElem,k=d.selectionRange;if(M!==T&&T&&T.ownerDocument&&Vp(T.ownerDocument.documentElement,T)){if(k!==null&&bu(T)){var it=k.start,vt=k.end;if(vt===void 0&&(vt=it),"selectionStart"in T)T.selectionStart=it,T.selectionEnd=Math.min(vt,T.value.length);else{var Mt=T.ownerDocument||document,st=Mt&&Mt.defaultView||window;if(st.getSelection){var ot=st.getSelection(),ce=T.textContent.length,se=Math.min(k.start,ce),ke=k.end===void 0?se:Math.min(k.end,ce);!ot.extend&&se>ke&&(M=ke,ke=se,se=M);var K=Gp(T,se),W=Gp(T,ke);if(K&&W&&(ot.rangeCount!==1||ot.anchorNode!==K.node||ot.anchorOffset!==K.offset||ot.focusNode!==W.node||ot.focusOffset!==W.offset)){var et=Mt.createRange();et.setStart(K.node,K.offset),ot.removeAllRanges(),se>ke?(ot.addRange(et),ot.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ot.addRange(et))}}}}for(Mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&Mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Mt.length;T++){var yt=Mt[T];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}mc=!!Qf,Jf=Qf=null}finally{Be=u,X.p=o,O.T=a}}e.current=n,Un=2}}function n0(){if(Un===2){Un=0;var e=Ua,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=X.p;X.p=2;var u=Be;Be|=4;try{Ng(e,n.alternate,n)}finally{Be=u,X.p=o,O.T=a}}Un=3}}function i0(){if(Un===4||Un===3){Un=0,he();var e=Ua,n=as,a=rs,o=Xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Un=5:(Un=0,as=Ua=null,a0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),ze(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(_t,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=X.p,X.p=2,O.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];d(T.value,{componentStack:T.stack})}}finally{O.T=n,X.p=u}}(rs&3)!==0&&ic(),zi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Bf?Do++:(Do=0,Bf=e):Do=0,Uo(0)}}function a0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function ic(e){return e0(),n0(),i0(),r0()}function r0(){if(Un!==5)return!1;var e=Ua,n=Pf;Pf=0;var a=ze(rs),o=O.T,u=X.p;try{X.p=32>a?32:a,O.T=null,a=zf,zf=null;var d=Ua,M=rs;if(Un=0,as=Ua=null,rs=0,(Be&6)!==0)throw Error(r(331));var T=Be;if(Be|=4,Vg(d.current),Fg(d,d.current,M,a),Be=T,Uo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(_t,d)}catch{}return!0}finally{X.p=u,O.T=o,a0(e,n)}}function s0(e,n,a){n=ci(a,n),n=mf(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(kt(e,2),zi(e))}function je(e,n,a){if(e.tag===3)s0(e,e,a);else for(;n!==null;){if(n.tag===3){s0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=ci(a,e),a=ug(2),o=Sa(n,a,2),o!==null&&(fg(a,o,n,e),kt(o,2),zi(o));break}}n=n.return}}function Gf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new My;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Uf=!0,u.add(a),e=wy.bind(null,e,n,a),n.then(e,e))}function wy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Ce&a)===a&&(sn===4||sn===3&&(Ce&62914560)===Ce&&300>Ct()-Of?(Be&2)===0&&ss(e,0):Lf|=a,is===Ce&&(is=0)),zi(e)}function o0(e,n){n===0&&(n=Ut()),e=Vr(e,n),e!==null&&(kt(e,n),zi(e))}function Ry(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),o0(e,a)}function Cy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),o0(e,a)}function Dy(e,n){return H(e,n)}var ac=null,ls=null,Vf=!1,rc=!1,kf=!1,mr=0;function zi(e){e!==ls&&e.next===null&&(ls===null?ac=ls=e:ls=ls.next=e),rc=!0,Vf||(Vf=!0,Ly())}function Uo(e,n){if(!kf&&rc){kf=!0;do for(var a=!1,o=ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Vt(42|e)+1)-1,d&=u&~(M&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,f0(o,d))}else d=Ce,d=Zt(o,o===Ze?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pt(o,d)||(a=!0,f0(o,d));o=o.next}while(a);kf=!1}}function Uy(){l0()}function l0(){rc=Vf=!1;var e=0;mr!==0&&(Hy()&&(e=mr),mr=0);for(var n=Ct(),a=null,o=ac;o!==null;){var u=o.next,d=c0(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(ls=a)):(a=o,(e!==0||(d&3)!==0)&&(rc=!0)),o=u}Uo(e)}function c0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Vt(d),T=1<<M,k=u[M];k===-1?((T&a)===0||(T&o)!==0)&&(u[M]=me(T,n)):k<=n&&(e.expiredLanes|=T),d&=~T}if(n=Ze,a=Ce,a=Zt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ne(o),ze(a)){case 2:case 8:a=re;break;case 32:a=Fe;break;case 268435456:a=B;break;default:a=Fe}return o=u0.bind(null,e),a=H(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ne(o),e.callbackPriority=2,e.callbackNode=null,2}function u0(e,n){if(Un!==0&&Un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var o=Ce;return o=Zt(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(qg(e,o,n),c0(e,Ct()),e.callbackNode!=null&&e.callbackNode===a?u0.bind(null,e):null)}function f0(e,n){if(ic())return null;qg(e,n,!0)}function Ly(){Vy(function(){(Be&6)!==0?H(Ht,Uy):l0()})}function Xf(){return mr===0&&(mr=q()),mr}function d0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function h0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ny(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=d0((u[nn]||null).action),M=o.submitter;M&&(n=(n=M[nn]||null)?d0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var T=new yl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var k=M?h0(u,M):new FormData(u);uf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(T.preventDefault(),k=M?h0(u,M):new FormData(u),uf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var Wf=0;Wf<Ru.length;Wf++){var qf=Ru[Wf],Oy=qf.toLowerCase(),Py=qf[0].toUpperCase()+qf.slice(1);Si(Oy,"on"+Py)}Si(qp,"onAnimationEnd"),Si(Yp,"onAnimationIteration"),Si(jp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Jx,"onTransitionRun"),Si($x,"onTransitionStart"),Si(ty,"onTransitionCancel"),Si(Zp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function p0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],k=T.instance,it=T.currentTarget;if(T=T.listener,k!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=it;try{d(u)}catch(vt){ql(vt)}u.currentTarget=null,d=k}else for(M=0;M<o.length;M++){if(T=o[M],k=T.instance,it=T.currentTarget,T=T.listener,k!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=it;try{d(u)}catch(vt){ql(vt)}u.currentTarget=null,d=k}}}}function we(e,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var o=e+"__bubble";a.has(o)||(m0(n,e,2,!1),a.add(o))}function Yf(e,n,a){var o=0;n&&(o|=4),m0(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function jf(e){if(!e[sc]){e[sc]=!0,pl.forEach(function(a){a!=="selectionchange"&&(zy.has(a)||Yf(a,!1,e),Yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,Yf("selectionchange",!1,n))}}function m0(e,n,a,o){switch(F0(n)){case 2:var u=cS;break;case 8:u=uS;break;default:u=ld}a=u.bind(null,n,a,e),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Zf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=Xi(T),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){o=d=M;continue t}T=T.parentNode}}o=o.return}Mp(function(){var it=d,vt=hu(a),Mt=[];t:{var st=Kp.get(e);if(st!==void 0){var ot=yl,ce=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":ot=Dx;break;case"focusin":ce="focus",ot=xu;break;case"focusout":ce="blur",ot=xu;break;case"beforeblur":case"afterblur":ot=xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Nx;break;case qp:case Yp:case jp:ot=Sx;break;case Zp:ot=Px;break;case"scroll":case"scrollend":ot=gx;break;case"wheel":ot=Bx;break;case"copy":case"cut":case"paste":ot=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=wp;break;case"toggle":case"beforetoggle":ot=Fx}var se=(n&4)!==0,ke=!se&&(e==="scroll"||e==="scrollend"),K=se?st!==null?st+"Capture":null:st;se=[];for(var W=it,et;W!==null;){var yt=W;if(et=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||et===null||K===null||(yt=Ks(W,K),yt!=null&&se.push(No(W,yt,et))),ke)break;W=W.return}0<se.length&&(st=new ot(st,ce,null,a,vt),Mt.push({event:st,listeners:se}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",st&&a!==du&&(ce=a.relatedTarget||a.fromElement)&&(Xi(ce)||ce[Di]))break t;if((ot||st)&&(st=vt.window===vt?vt:(st=vt.ownerDocument)?st.defaultView||st.parentWindow:window,ot?(ce=a.relatedTarget||a.toElement,ot=it,ce=ce?Xi(ce):null,ce!==null&&(ke=c(ce),se=ce.tag,ce!==ke||se!==5&&se!==27&&se!==6)&&(ce=null)):(ot=null,ce=it),ot!==ce)){if(se=Tp,yt="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(se=wp,yt="onPointerLeave",K="onPointerEnter",W="pointer"),ke=ot==null?st:$a(ot),et=ce==null?st:$a(ce),st=new se(yt,W+"leave",ot,a,vt),st.target=ke,st.relatedTarget=et,yt=null,Xi(vt)===it&&(se=new se(K,W+"enter",ce,a,vt),se.target=et,se.relatedTarget=ke,yt=se),ke=yt,ot&&ce)e:{for(se=ot,K=ce,W=0,et=se;et;et=cs(et))W++;for(et=0,yt=K;yt;yt=cs(yt))et++;for(;0<W-et;)se=cs(se),W--;for(;0<et-W;)K=cs(K),et--;for(;W--;){if(se===K||K!==null&&se===K.alternate)break e;se=cs(se),K=cs(K)}se=null}else se=null;ot!==null&&g0(Mt,st,ot,se,!1),ce!==null&&ke!==null&&g0(Mt,ke,ce,se,!0)}}t:{if(st=it?$a(it):window,ot=st.nodeName&&st.nodeName.toLowerCase(),ot==="select"||ot==="input"&&st.type==="file")var Wt=Pp;else if(Np(st))if(zp)Wt=Zx;else{Wt=Yx;var be=qx}else ot=st.nodeName,!ot||ot.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?it&&fu(it.elementType)&&(Wt=Pp):Wt=jx;if(Wt&&(Wt=Wt(e,it))){Op(Mt,Wt,a,vt);break t}be&&be(e,st,it),e==="focusout"&&it&&st.type==="number"&&it.memoizedProps.value!=null&&Pn(st,"number",st.value)}switch(be=it?$a(it):window,e){case"focusin":(Np(be)||be.contentEditable==="true")&&(Fr=be,Tu=it,ao=null);break;case"focusout":ao=Tu=Fr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Xp(Mt,a,vt);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":Xp(Mt,a,vt)}var te;if(Su)t:{switch(e){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else Ir?Up(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Rp&&a.locale!=="ko"&&(Ir||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ir&&(te=Ep()):(_a=vt,gu="value"in _a?_a.value:_a.textContent,Ir=!0)),be=oc(it,le),0<be.length&&(le=new Ap(le,e,null,a,vt),Mt.push({event:le,listeners:be}),te?le.data=te:(te=Lp(a),te!==null&&(le.data=te)))),(te=Gx?Vx(e,a):kx(e,a))&&(le=oc(it,"onBeforeInput"),0<le.length&&(be=new Ap("onBeforeInput","beforeinput",null,a,vt),Mt.push({event:be,listeners:le}),be.data=te)),Ny(Mt,e,it,a,vt)}p0(Mt,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ks(e,a),u!=null&&o.unshift(No(e,u,d)),u=Ks(e,n),u!=null&&o.push(No(e,u,d))),e.tag===3)return o;e=e.return}return[]}function cs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var T=a,k=T.alternate,it=T.stateNode;if(T=T.tag,k!==null&&k===o)break;T!==5&&T!==26&&T!==27||it===null||(k=it,u?(it=Ks(a,d),it!=null&&M.unshift(No(a,it,k))):u||(it=Ks(a,d),it!=null&&M.push(No(a,it,k)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var By=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function _0(e){return(typeof e=="string"?e:""+e).replace(By,`
`).replace(Iy,"")}function v0(e,n){return n=_0(n),_0(e)===n}function lc(){}function Ve(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||jn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&jn(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":yp(e,o,d);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=lc);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":we("beforetoggle",e),we("toggle",e),zt(e,"popover",o);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=px.get(a)||a,zt(e,a,o))}}function Kf(e,n,a,o,u,d){switch(a){case"style":yp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?jn(e,o):(typeof o=="number"||typeof o=="bigint")&&jn(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ml.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[nn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):zt(e,a,o)}}}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,d,M,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var T=d=M=u=null,k=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":M=vt;break;case"checked":k=vt;break;case"defaultChecked":it=vt;break;case"value":d=vt;break;case"defaultValue":T=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:Ve(e,n,o,vt,a,null)}}kn(e,d,T,k,it,M,u,!1),Te(e);return;case"select":we("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Ve(e,n,u,T,a,null)}n=d,a=M,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":we("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(e,n,M,T,a,null)}Pr(e,o,u,d),Te(e);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,k,o,a,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)we(Lo[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,it,o,a,null)}return;default:if(fu(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&Kf(e,n,vt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ve(e,n,T,o,a,null))}function Fy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,T=null,k=null,it=null,vt=null;for(ot in a){var Mt=a[ot];if(a.hasOwnProperty(ot)&&Mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":k=Mt;default:o.hasOwnProperty(ot)||Ve(e,n,ot,null,o,Mt)}}for(var st in o){var ot=o[st];if(Mt=a[st],o.hasOwnProperty(st)&&(ot!=null||Mt!=null))switch(st){case"type":d=ot;break;case"name":u=ot;break;case"checked":it=ot;break;case"defaultChecked":vt=ot;break;case"value":M=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==Mt&&Ve(e,n,st,ot,o,Mt)}}Ye(e,M,T,k,it,vt,d,u);return;case"select":ot=M=T=st=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ot=k;default:o.hasOwnProperty(d)||Ve(e,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":st=d;break;case"defaultValue":T=d;break;case"multiple":M=d;default:d!==k&&Ve(e,n,u,d,o,k)}n=T,a=M,o=ot,st!=null?an(e,!!a,st,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":ot=st=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(e,n,T,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":st=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ve(e,n,M,u,o,d)}Cn(e,st,ot);return;case"option":for(var ce in a)if(st=a[ce],a.hasOwnProperty(ce)&&st!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ve(e,n,ce,null,o,st)}for(k in o)if(st=o[k],ot=a[k],o.hasOwnProperty(k)&&st!==ot&&(st!=null||ot!=null))switch(k){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Ve(e,n,k,st,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)st=a[se],a.hasOwnProperty(se)&&st!=null&&!o.hasOwnProperty(se)&&Ve(e,n,se,null,o,st);for(it in o)if(st=o[it],ot=a[it],o.hasOwnProperty(it)&&st!==ot&&(st!=null||ot!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Ve(e,n,it,st,o,ot)}return;default:if(fu(n)){for(var ke in a)st=a[ke],a.hasOwnProperty(ke)&&st!==void 0&&!o.hasOwnProperty(ke)&&Kf(e,n,ke,void 0,o,st);for(vt in o)st=o[vt],ot=a[vt],!o.hasOwnProperty(vt)||st===ot||st===void 0&&ot===void 0||Kf(e,n,vt,st,o,ot);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&Ve(e,n,K,null,o,st);for(Mt in o)st=o[Mt],ot=a[Mt],!o.hasOwnProperty(Mt)||st===ot||st==null&&ot==null||Ve(e,n,Mt,st,o,ot)}var Qf=null,Jf=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function x0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $f(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function Hy(){var e=window.event;return e&&e.type==="popstate"?e===td?!1:(td=e,!0):(td=null,!1)}var S0=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(ky)}:S0;function ky(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function E0(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Oo(M.documentElement),a&2&&Oo(M.body),a&4)for(a=M.head,Oo(a),M=a.firstChild;M;){var T=M.nextSibling,k=M.nodeName;M[Ui]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){e.removeChild(d),Vo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Vo(n)}function ed(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ed(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function Wy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function nd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function qy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var id=null;function b0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function T0(e,n,a){switch(n=cc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Or(e)}var mi=new Map,A0=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=X.d;X.d={f:Yy,r:jy,D:Zy,C:Ky,L:Qy,m:Jy,X:tS,S:$y,M:eS};function Yy(){var e=aa.f(),n=ec();return e||n}function jy(e){var n=ma(e);n!==null&&n.tag===5&&n.type==="form"?qm(n):aa.r(e)}var us=typeof document>"u"?null:document;function w0(e,n,a){var o=us;if(o&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),A0.has(u)||(A0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",e),un(n),o.head.appendChild(n)))}}function Zy(e){aa.D(e),w0("dns-prefetch",e,null)}function Ky(e,n){aa.C(e,n),w0("preconnect",e,n)}function Qy(e,n,a){aa.L(e,n,a);var o=us;if(o&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var d=u;switch(n){case"style":d=fs(e);break;case"script":d=ds(e)}mi.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(d))||n==="script"&&o.querySelector(zo(d))||(n=o.createElement("link"),Ln(n,"link",e),un(n),o.head.appendChild(n)))}}function Jy(e,n){aa.m(e,n);var a=us;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ds(e)}if(!mi.has(d)&&(e=g({rel:"modulepreload",href:e},n),mi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(d)))return}o=a.createElement("link"),Ln(o,"link",e),un(o),a.head.appendChild(o)}}}function $y(e,n,a){aa.S(e,n,a);var o=us;if(o&&e){var u=ga(o).hoistableStyles,d=fs(e);n=n||"default";var M=u.get(d);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(Po(d)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(d))&&ad(e,a);var k=M=o.createElement("link");un(k),Ln(k,"link",e),k._p=new Promise(function(it,vt){k.onload=it,k.onerror=vt}),k.addEventListener("load",function(){T.loading|=1}),k.addEventListener("error",function(){T.loading|=2}),T.loading|=4,fc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(d,M)}}}function tS(e,n){aa.X(e,n);var a=us;if(a&&e){var o=ga(a).hoistableScripts,u=ds(e),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(e=g({src:e,async:!0},n),(n=mi.get(u))&&rd(e,n),d=a.createElement("script"),un(d),Ln(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function eS(e,n){aa.M(e,n);var a=us;if(a&&e){var o=ga(a).hoistableScripts,u=ds(e),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&rd(e,n),d=a.createElement("script"),un(d),Ln(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function R0(e,n,a,o){var u=(u=ut.current)?uc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fs(a.href),a=ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fs(a.href);var d=ga(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Po(e)))&&!d._p&&(M.instance=d,M.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),d||nS(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function fs(e){return'href="'+Sn(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function C0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function nS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),un(n),e.head.appendChild(n))}function ds(e){return'[src="'+Sn(e)+'"]'}function zo(e){return"script[async]"+e}function D0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,un(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),un(o),Ln(o,"style",u),fc(o,a.precedence,e),n.instance=o;case"stylesheet":u=fs(a.href);var d=e.querySelector(Po(u));if(d)return n.state.loading|=4,n.instance=d,un(d),d;o=C0(a),(u=mi.get(u))&&ad(o,u),d=(e.ownerDocument||e).createElement("link"),un(d);var M=d;return M._p=new Promise(function(T,k){M.onload=T,M.onerror=k}),Ln(d,"link",o),n.state.loading|=4,fc(d,a.precedence,e),n.instance=d;case"script":return d=ds(a.src),(u=e.querySelector(zo(d)))?(n.instance=u,un(u),u):(o=a,(u=mi.get(d))&&(o=g({},a),rd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),un(u),Ln(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,e));return n.instance}function fc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var dc=null;function U0(e,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Ui]||d[mn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(d):o.set(M,[d])}}return o}function L0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function N0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bo=null;function aS(){}function rS(e,n,a){if(Bo===null)throw Error(r(475));var o=Bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=fs(a.href),d=e.querySelector(Po(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=hc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,un(d);return}d=e.ownerDocument||e,a=C0(a),(u=mi.get(u))&&ad(a,u),d=d.createElement("link"),un(d);var M=d;M._p=new Promise(function(T,k){M.onload=T,M.onerror=k}),Ln(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=hc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function sS(){if(Bo===null)throw Error(r(475));var e=Bo;return e.stylesheets&&e.count===0&&sd(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&sd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function hc(){if(this.count--,this.count===0){if(this.stylesheets)sd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pc=null;function sd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pc=new Map,n.forEach(oS,e),pc=null,hc.call(e))}function oS(e,n){if(!(n.state.loading&4)){var a=pc.get(e);if(a)var o=a.get(null);else{a=new Map,pc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:P,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function lS(e,n,a,o,u,d,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function O0(e,n,a,o,u,d,M,T,k,it,vt,Mt){return e=new lS(e,n,a,M,T,k,it,Mt),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),e.current=d,d.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Xu(d),e}function P0(e){return e?(e=kr,e):kr}function z0(e,n,a,o,u,d){u=P0(u),o.context===null?o.context=u:o.pendingContext=u,o=ya(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Sa(e,o,n),a!==null&&(ri(a,e,n),po(a,e,n))}function B0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function od(e,n){B0(e,n),(e=e.alternate)&&B0(e,n)}function I0(e){if(e.tag===13){var n=Vr(e,67108864);n!==null&&ri(n,e,67108864),od(e,67108864)}}var mc=!0;function cS(e,n,a,o){var u=O.T;O.T=null;var d=X.p;try{X.p=2,ld(e,n,a,o)}finally{X.p=d,O.T=u}}function uS(e,n,a,o){var u=O.T;O.T=null;var d=X.p;try{X.p=8,ld(e,n,a,o)}finally{X.p=d,O.T=u}}function ld(e,n,a,o){if(mc){var u=cd(o);if(u===null)Zf(e,n,o,gc,a),H0(e,o);else if(dS(u,e,n,a,o))o.stopPropagation();else if(H0(e,o),n&4&&-1<fS.indexOf(e)){for(;u!==null;){var d=ma(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=ee(d.pendingLanes);if(M!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var k=1<<31-Vt(M);T.entanglements[1]|=k,M&=~k}zi(d),(Be&6)===0&&($l=Ct()+500,Uo(0))}}break;case 13:T=Vr(d,2),T!==null&&ri(T,d,2),ec(),od(d,2)}if(d=cd(o),d===null&&Zf(e,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Zf(e,n,o,null,a)}}function cd(e){return e=hu(e),ud(e)}var gc=null;function ud(e){if(gc=null,e=Xi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function F0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pe()){case Ht:return 2;case re:return 8;case Fe:case De:return 32;case B:return 268435456;default:return 32}default:return 32}}var fd=!1,Oa=null,Pa=null,za=null,Fo=new Map,Ho=new Map,Ba=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ma(n),n!==null&&I0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function dS(e,n,a,o,u){switch(n){case"focusin":return Oa=Go(Oa,e,n,a,o,u),!0;case"dragenter":return Pa=Go(Pa,e,n,a,o,u),!0;case"mouseover":return za=Go(za,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Fo.set(d,Go(Fo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,e,n,a,o,u)),!0}return!1}function G0(e){var n=Xi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,xi(e.priority,function(){if(a.tag===13){var o=ai();o=ue(o);var u=Vr(a,o);u!==null&&ri(u,a,o),od(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);du=o,a.target.dispatchEvent(o),du=null}else return n=ma(a),n!==null&&I0(n),e.blockedOn=a,!1;n.shift()}return!0}function V0(e,n,a){_c(e)&&a.delete(n)}function hS(){fd=!1,Oa!==null&&_c(Oa)&&(Oa=null),Pa!==null&&_c(Pa)&&(Pa=null),za!==null&&_c(za)&&(za=null),Fo.forEach(V0),Ho.forEach(V0)}function vc(e,n){e.blockedOn===n&&(e.blockedOn=null,fd||(fd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,hS)))}var xc=null;function k0(e){xc!==e&&(xc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ud(o||a)===null)continue;break}var d=ma(a);d!==null&&(e.splice(n,3),n-=3,uf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Vo(e){function n(k){return vc(k,e)}Oa!==null&&vc(Oa,e),Pa!==null&&vc(Pa,e),za!==null&&vc(za,e),Fo.forEach(n),Ho.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)G0(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[nn]||null;if(typeof d=="function")M||k0(a);else if(M){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[nn]||null)T=M.formAction;else if(ud(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),k0(a)}}}function dd(e){this._internalRoot=e}yc.prototype.render=dd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();z0(a,o,e,n,null,null)},yc.prototype.unmount=dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;z0(e.current,2,null,e,null,null),ec(),n[Di]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&G0(e)}};var X0=t.version;if(X0!=="19.1.1")throw Error(r(527,X0,"19.1.1"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var pS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{_t=Sc.inject(pS),St=Sc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=sg,d=og,M=lg,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=O0(e,1,!1,null,null,a,o,u,d,M,T,null),e[Di]=n.current,jf(e),new dd(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=sg,M=og,T=lg,k=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=O0(e,1,!0,n,a??null,o,u,d,M,T,k,it),n.context=P0(null),a=n.current,o=ai(),o=ue(o),u=ya(o),u.callback=null,Sa(a,u,o),a=o,n.current.lanes=a,kt(n,a),zi(n),e[Di]=n.current,jf(e),new yc(n)},Xo.version="19.1.1",Xo}var t_;function bS(){if(t_)return md.exports;t_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),md.exports=ES(),md.exports}var TS=bS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="179",AS=0,e_=1,wS=2,dv=1,su=2,fa=3,Qa=0,An=1,wi=2,ja=0,Ps=1,nh=2,n_=3,i_=4,RS=5,Tr=100,CS=101,DS=102,US=103,LS=104,NS=200,OS=201,PS=202,zS=203,ih=204,ah=205,BS=206,IS=207,FS=208,HS=209,GS=210,VS=211,kS=212,XS=213,WS=214,rh=0,sh=1,oh=2,Hs=3,lh=4,ch=5,uh=6,fh=7,Jh=0,qS=1,YS=2,Za=0,jS=1,ZS=2,KS=3,hv=4,QS=5,JS=6,$S=7,pv=300,Gs=301,Vs=302,dh=303,hh=304,ou=306,ph=1e3,wr=1001,mh=1002,Ci=1003,tM=1004,Mc=1005,Hi=1006,xd=1007,Rr=1008,Vi=1009,mv=1010,gv=1011,il=1012,$h=1013,Cr=1014,ha=1015,ll=1016,tp=1017,ep=1018,al=1020,_v=35902,vv=1021,xv=1022,Ri=1023,rl=1026,sl=1027,yv=1028,np=1029,Sv=1030,ip=1031,ap=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,gh=35840,_h=35841,vh=35842,xh=35843,yh=36196,Sh=37492,Mh=37496,Eh=37808,bh=37809,Th=37810,Ah=37811,wh=37812,Rh=37813,Ch=37814,Dh=37815,Uh=37816,Lh=37817,Nh=37818,Oh=37819,Ph=37820,zh=37821,tu=36492,Bh=36494,Ih=36495,Mv=36283,Fh=36284,Hh=36285,Gh=36286,eM=3200,nM=3201,Ev=0,iM=1,Ya="",_i="srgb",ks="srgb-linear",iu="linear",Xe="srgb",hs=7680,a_=519,aM=512,rM=513,sM=514,bv=515,oM=516,lM=517,cM=518,uM=519,Vh=35044,r_="300 es",Gi=2e3,au=2001;class Ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,kh=180/Math.PI;function Ka(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function Re(s,t,i){return Math.max(t,Math.min(i,s))}function fM(s,t){return(s%t+t)%t}function Sd(s,t,i){return(1-i)*s+i*t}function Fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(v!==A||m!==x||p!==S||g!==E){let y=1-h;const _=m*x+p*S+g*E+v*A,V=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const N=Math.sqrt(P),F=Math.atan2(N,_*V);y=Math.sin(y*F)/N,h=Math.sin(h*F)/N}const D=h*V;if(m=m*y+x*D,p=p*y+S*D,g=g*y+E*D,v=v*y+A*D,y===1-h){const N=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=N,p*=N,g*=N,v*=N}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*v+m*S-p*x,t[i+1]=m*E+g*x+p*v-h*S,t[i+2]=p*E+g*S+h*x-m*v,t[i+3]=g*E-h*v-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(c/2),x=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"YZX":this._x=x*g*v+p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v-x*S*E;break;case"XZY":this._x=x*g*v-p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(s_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(s_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),g=2*(h*i-c*l),v=2*(c*r-f*i);return this.x=i+m*p+f*v-h*g,this.y=r+m*g+h*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Md.copy(this).projectOnVector(t),this.sub(Md)}reflect(t){return this.sub(Md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new J,s_=new cl;class _e{constructor(t,i,r,l,c,f,h,m,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p)}set(t,i,r,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],E=r[8],A=l[0],y=l[3],_=l[6],V=l[1],P=l[4],D=l[7],N=l[2],F=l[5],U=l[8];return c[0]=f*A+h*V+m*N,c[3]=f*y+h*P+m*F,c[6]=f*_+h*D+m*U,c[1]=p*A+g*V+v*N,c[4]=p*y+g*P+v*F,c[7]=p*_+g*D+v*U,c[2]=x*A+S*V+E*N,c[5]=x*y+S*P+E*F,c[8]=x*_+S*D+E*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-r*c*g+r*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*f-h*p,x=h*m-g*c,S=p*c-f*m,E=i*v+r*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*p-g*r)*A,t[2]=(h*r-l*f)*A,t[3]=x*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=S*A,t[7]=(r*m-p*i)*A,t[8]=(f*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Ed.makeScale(t,i)),this}rotate(t){return this.premultiply(Ed.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ed.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new _e;function Tv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dM(){const s=ol("canvas");return s.style.display="block",s}const o_={};function zs(s){s in o_||(o_[s]=!0,console.warn(s))}function hM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const l_=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pM(){const s={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?iu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ks]:{primaries:t,whitePoint:r,transfer:iu,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Oe=pM();function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class mM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=ol("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ol("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=pa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gM=0;class rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(bd(l[f].image)):c.push(bd(l[f]))}else c=bd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function bd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;const Td=new J;class Hn extends Ws{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=wr,l=wr,c=Hi,f=Rr,h=Ri,m=Vi,p=Hn.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Ka(),this.name="",this.source=new rp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ph:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case mh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ph:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case mh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=pv;Hn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,i=0,r=0,l=1){qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],S=m[5],E=m[9],A=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,D=(S+1)/2,N=(_+1)/2,F=(g+x)/4,U=(v+A)/4,z=(E+y)/4;return P>D&&P>N?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=F/r,c=U/r):D>N?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=F/l,c=z/l):N<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),r=U/c,l=z/c),this.set(r,l,c,i),this}let V=Math.sqrt((y-E)*(y-E)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(V)<.001&&(V=1),this.x=(y-E)/V,this.y=(v-A)/V,this.z=(x-g)/V,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this.w=Re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this.w=Re(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vM extends Ws{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new qe(0,0,t,i),this.scissorTest=!1,this.viewport=new qe(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Hn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends vM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Av extends Hn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends Hn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ec.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ec.copy(r.boundingBox)),Ec.applyMatrix4(t.matrixWorld),this.union(Ec)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),bc.subVectors(this.max,Wo),ms.subVectors(t.a,Wo),gs.subVectors(t.b,Wo),_s.subVectors(t.c,Wo),Fa.subVectors(gs,ms),Ha.subVectors(_s,gs),gr.subVectors(ms,_s);let i=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-gr.z,gr.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,gr.z,0,-gr.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-gr.y,gr.x,0];return!Ad(i,ms,gs,_s,bc)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,ms,gs,_s,bc))?!1:(Tc.crossVectors(Fa,Ha),i=[Tc.x,Tc.y,Tc.z],Ad(i,ms,gs,_s,bc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ra=[new J,new J,new J,new J,new J,new J,new J,new J],bi=new J,Ec=new ul,ms=new J,gs=new J,_s=new J,Fa=new J,Ha=new J,gr=new J,Wo=new J,bc=new J,Tc=new J,_r=new J;function Ad(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){_r.fromArray(s,c);const h=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=t.dot(_r),p=i.dot(_r),g=r.dot(_r);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const yM=new ul,qo=new J,wd=new J;class lu{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):yM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(qo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(wd)),this.expandByPoint(qo.copy(t.center).sub(wd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new J,Rd=new J,Ac=new J,Ga=new J,Cd=new J,wc=new J,Dd=new J;class sp{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Rd.copy(t).add(i).multiplyScalar(.5),Ac.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(Rd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ac),h=Ga.dot(this.direction),m=-Ga.dot(Ac),p=Ga.lengthSq(),g=Math.abs(1-f*f);let v,x,S,E;if(g>0)if(v=f*m-h,x=f*h-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const A=1/g;v*=A,x*=A,S=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(v=Math.max(0,-(f*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Rd).addScaledVector(Ac,x),S}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,r,l,c){Cd.subVectors(i,t),wc.subVectors(r,t),Dd.crossVectors(Cd,wc);let f=this.direction.dot(Dd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(wc.crossVectors(Ga,wc));if(m<0)return null;const p=h*this.direction.dot(Cd.cross(Ga));if(p<0||m+p>f)return null;const g=-h*Ga.dot(Dd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,r,l,c,f,h,m,p,g,v,x,S,E,A,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p,g,v,x,S,E,A,y)}set(t,i,r,l,c,f,h,m,p,g,v,x,S,E,A,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),c=1/vs.setFromMatrixColumn(t,1).length(),f=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=f*g,S=f*v,E=h*g,A=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=x-A*p,i[9]=-h*m,i[2]=A-x*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,S=m*v,E=p*g,A=p*v;i[0]=x+A*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=A+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,S=m*v,E=p*g,A=p*v;i[0]=x-A*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=A-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,S=f*v,E=h*g,A=h*v;i[0]=m*g,i[4]=E*p-S,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*p,E=h*m,A=h*p;i[0]=m*g,i[4]=A-x*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=S*v+E,i[10]=x-A*v}else if(t.order==="XZY"){const x=f*m,S=f*p,E=h*m,A=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+A,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*g,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SM,t,MM)}lookAt(t,i,r){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Va.crossVectors(r,si),Va.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Va.crossVectors(r,si)),Va.normalize(),Rc.crossVectors(si,Va),l[0]=Va.x,l[4]=Rc.x,l[8]=si.x,l[1]=Va.y,l[5]=Rc.y,l[9]=si.y,l[2]=Va.z,l[6]=Rc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],E=r[2],A=r[6],y=r[10],_=r[14],V=r[3],P=r[7],D=r[11],N=r[15],F=l[0],U=l[4],z=l[8],w=l[12],R=l[1],G=l[5],Y=l[9],tt=l[13],rt=l[2],at=l[6],O=l[10],X=l[14],I=l[3],pt=l[7],L=l[11],Z=l[15];return c[0]=f*F+h*R+m*rt+p*I,c[4]=f*U+h*G+m*at+p*pt,c[8]=f*z+h*Y+m*O+p*L,c[12]=f*w+h*tt+m*X+p*Z,c[1]=g*F+v*R+x*rt+S*I,c[5]=g*U+v*G+x*at+S*pt,c[9]=g*z+v*Y+x*O+S*L,c[13]=g*w+v*tt+x*X+S*Z,c[2]=E*F+A*R+y*rt+_*I,c[6]=E*U+A*G+y*at+_*pt,c[10]=E*z+A*Y+y*O+_*L,c[14]=E*w+A*tt+y*X+_*Z,c[3]=V*F+P*R+D*rt+N*I,c[7]=V*U+P*G+D*at+N*pt,c[11]=V*z+P*Y+D*O+N*L,c[15]=V*w+P*tt+D*X+N*Z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],S=t[14],E=t[3],A=t[7],y=t[11],_=t[15];return E*(+c*m*v-l*p*v-c*h*x+r*p*x+l*h*S-r*m*S)+A*(+i*m*S-i*p*x+c*f*x-l*f*S+l*p*g-c*m*g)+y*(+i*p*v-i*h*S-c*f*v+r*f*S+c*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*f*v-r*f*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],S=t[11],E=t[12],A=t[13],y=t[14],_=t[15],V=v*y*p-A*x*p+A*m*S-h*y*S-v*m*_+h*x*_,P=E*x*p-g*y*p-E*m*S+f*y*S+g*m*_-f*x*_,D=g*A*p-E*v*p+E*h*S-f*A*S-g*h*_+f*v*_,N=E*v*m-g*A*m-E*h*x+f*A*x+g*h*y-f*v*y,F=i*V+r*P+l*D+c*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return t[0]=V*U,t[1]=(A*x*c-v*y*c-A*l*S+r*y*S+v*l*_-r*x*_)*U,t[2]=(h*y*c-A*m*c+A*l*p-r*y*p-h*l*_+r*m*_)*U,t[3]=(v*m*c-h*x*c-v*l*p+r*x*p+h*l*S-r*m*S)*U,t[4]=P*U,t[5]=(g*y*c-E*x*c+E*l*S-i*y*S-g*l*_+i*x*_)*U,t[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*_-i*m*_)*U,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*S+i*m*S)*U,t[8]=D*U,t[9]=(E*v*c-g*A*c-E*r*S+i*A*S+g*r*_-i*v*_)*U,t[10]=(f*A*c-E*h*c+E*r*p-i*A*p-f*r*_+i*h*_)*U,t[11]=(g*h*c-f*v*c-g*r*p+i*v*p+f*r*S-i*h*S)*U,t[12]=N*U,t[13]=(g*A*l-E*v*l+E*r*x-i*A*x-g*r*y+i*v*y)*U,t[14]=(E*h*l-f*A*l-E*r*m+i*A*m+f*r*y-i*h*y)*U,t[15]=(f*v*l-g*h*l+g*r*m-i*v*m-f*r*x+i*h*x)*U,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,v=h+h,x=c*p,S=c*g,E=c*v,A=f*g,y=f*v,_=h*v,V=m*p,P=m*g,D=m*v,N=r.x,F=r.y,U=r.z;return l[0]=(1-(A+_))*N,l[1]=(S+D)*N,l[2]=(E-P)*N,l[3]=0,l[4]=(S-D)*F,l[5]=(1-(x+_))*F,l[6]=(y+V)*F,l[7]=0,l[8]=(E+P)*U,l[9]=(y-V)*U,l[10]=(1-(x+A))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ti.copy(this);const p=1/c,g=1/f,v=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(r-l),x=(i+t)/(i-t),S=(r+l)/(r-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===au)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===Gi)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===au)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new J,Ti=new Je,SM=new J(0,0,0),MM=new J(1,1,1),Va=new J,Rc=new J,si=new J,u_=new Je,f_=new cl;class ki{constructor(t=0,i=0,r=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return u_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(u_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return f_.setFromEuler(this),this.setFromQuaternion(f_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let EM=0;const d_=new J,xs=new cl,oa=new Je,Cc=new J,Yo=new J,bM=new J,TM=new cl,h_=new J(1,0,0),p_=new J(0,1,0),m_=new J(0,0,1),g_={type:"added"},AM={type:"removed"},ys={type:"childadded",child:null},Ud={type:"childremoved",child:null};class wn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new J,i=new ki,r=new cl,l=new J(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new _e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(h_,t)}rotateY(t){return this.rotateOnAxis(p_,t)}rotateZ(t){return this.rotateOnAxis(m_,t)}translateOnAxis(t,i){return d_.copy(t).applyQuaternion(this.quaternion),this.position.add(d_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(h_,t)}translateY(t){return this.translateOnAxis(p_,t)}translateZ(t){return this.translateOnAxis(m_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Cc.copy(t):Cc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Yo,Cc,this.up):oa.lookAt(Cc,Yo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(oa),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g_),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AM),Ud.child=t,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g_),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,bM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,TM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),x=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new J(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new J,la=new J,Ld=new J,ca=new J,Ss=new J,Ms=new J,__=new J,Nd=new J,Od=new J,Pd=new J,zd=new qe,Bd=new qe,Id=new qe;class vi{constructor(t=new J,i=new J,r=new J){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ai.subVectors(l,i),la.subVectors(r,i),Ld.subVectors(t,i);const f=Ai.dot(Ai),h=Ai.dot(la),m=Ai.dot(Ld),p=la.dot(la),g=la.dot(Ld),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,r,l,c,f,h,m){return this.getBarycoord(t,i,r,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(f,ca.y),m.addScaledVector(h,ca.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return zd.setScalar(0),Bd.setScalar(0),Id.setScalar(0),zd.fromBufferAttribute(t,i),Bd.fromBufferAttribute(t,r),Id.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(zd,c.x),f.addScaledVector(Bd,c.y),f.addScaledVector(Id,c.z),f}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),la.subVectors(t,i),Ai.cross(la).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ai.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;Ss.subVectors(l,r),Ms.subVectors(c,r),Nd.subVectors(t,r);const m=Ss.dot(Nd),p=Ms.dot(Nd);if(m<=0&&p<=0)return i.copy(r);Od.subVectors(t,l);const g=Ss.dot(Od),v=Ms.dot(Od);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Ss,f);Pd.subVectors(t,c);const S=Ss.dot(Pd),E=Ms.dot(Pd);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ms,h);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return __.subVectors(c,l),h=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(__,h);const _=1/(y+A+x);return f=A*_,h=x*_,i.copy(r).addScaledVector(Ss,f).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Fd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class fe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Oe.workingColorSpace){if(t=fM(t,1),i=Re(i,0,1),r=Re(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Fd(f,c,t+1/3),this.g=Fd(f,c,t),this.b=Fd(f,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const r=wv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Oe.workingToColorSpace(Fn.copy(this),t),Math.round(Re(Fn.r*255,0,255))*65536+Math.round(Re(Fn.g*255,0,255))*256+Math.round(Re(Fn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(Fn.copy(this),i);const r=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=_i){Oe.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,r=Fn.g,l=Fn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(Dc);const r=Sd(ka.h,Dc.h,i),l=Sd(ka.s,Dc.s,i),c=Sd(ka.l,Dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new fe;fe.NAMES=wv;let wM=0;class Ur extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Ps,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=ah,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==Qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ih&&(r.blendSrc=this.blendSrc),this.blendDst!==ah&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qa extends Ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new J,Uc=new ve;let RM=0;class cn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Vh,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(t),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fi(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fi(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fi(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vh&&(t.usage=this.usage),t}}class Rv extends cn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Cv extends cn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class li extends cn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let CM=0;const gi=new Je,Hd=new wn,Es=new J,oi=new ul,jo=new ul,Tn=new J;class Gn extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tv(t)?Cv:Rv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new _e().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,r){return gi.makeTranslation(t,i,r),this.applyMatrix4(gi),this}scale(t,i,r){return gi.makeScale(t,i,r),this.applyMatrix4(gi),this}lookAt(t){return Hd.lookAt(t),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new li(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(oi.min,jo.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,jo.max),oi.expandByPoint(Tn)):(oi.expandByPoint(jo.min),oi.expandByPoint(jo.max))}oi.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),m&&(Es.fromBufferAttribute(t,p),Tn.add(Es)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let z=0;z<r.count;z++)h[z]=new J,m[z]=new J;const p=new J,g=new J,v=new J,x=new ve,S=new ve,E=new ve,A=new J,y=new J;function _(z,w,R){p.fromBufferAttribute(r,z),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),x.fromBufferAttribute(c,z),S.fromBufferAttribute(c,w),E.fromBufferAttribute(c,R),g.sub(p),v.sub(p),S.sub(x),E.sub(x);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(G),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),h[z].add(A),h[w].add(A),h[R].add(A),m[z].add(y),m[w].add(y),m[R].add(y))}let V=this.groups;V.length===0&&(V=[{start:0,count:t.count}]);for(let z=0,w=V.length;z<w;++z){const R=V[z],G=R.start,Y=R.count;for(let tt=G,rt=G+Y;tt<rt;tt+=3)_(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const P=new J,D=new J,N=new J,F=new J;function U(z){N.fromBufferAttribute(l,z),F.copy(N);const w=h[z];P.copy(w),P.sub(N.multiplyScalar(N.dot(w))).normalize(),D.crossVectors(F,w);const G=D.dot(m[z])<0?-1:1;f.setXYZW(z,P.x,P.y,P.z,G)}for(let z=0,w=V.length;z<w;++z){const R=V[z],G=R.start,Y=R.count;for(let tt=G,rt=G+Y;tt<rt;tt+=3)U(t.getX(tt+0)),U(t.getX(tt+1)),U(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new cn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new J,c=new J,f=new J,h=new J,m=new J,p=new J,g=new J,v=new J;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),A=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*g;for(let _=0;_<g;_++)x[E++]=p[S++]}return new cn(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Gn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=t(x,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new Je,vr=new sp,Lc=new lu,x_=new J,Nc=new J,Oc=new J,Pc=new J,Gd=new J,zc=new J,y_=new J,Bc=new J;class Qe extends wn{constructor(t=new Gn,i=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(Gd.fromBufferAttribute(v,t),f?zc.addScaledVector(Gd,g):zc.addScaledVector(Gd.sub(i),g))}i.add(zc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(c),vr.copy(t.ray).recast(t.near),!(Lc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Lc,x_)===null||vr.origin.distanceToSquared(x_)>(t.far-t.near)**2))&&(v_.copy(c).invert(),vr.copy(t.ray).applyMatrix4(v_),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],_=f[y.materialIndex],V=Math.max(y.start,S.start),P=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let D=V,N=P;D<N;D+=3){const F=h.getX(D),U=h.getX(D+1),z=h.getX(D+2);l=Ic(this,_,t,r,p,g,v,F,U,z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=E,_=A;y<_;y+=3){const V=h.getX(y),P=h.getX(y+1),D=h.getX(y+2);l=Ic(this,f,t,r,p,g,v,V,P,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],_=f[y.materialIndex],V=Math.max(y.start,S.start),P=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let D=V,N=P;D<N;D+=3){const F=D,U=D+1,z=D+2;l=Ic(this,_,t,r,p,g,v,F,U,z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,_=A;y<_;y+=3){const V=y,P=y+1,D=y+2;l=Ic(this,f,t,r,p,g,v,V,P,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function DM(s,t,i,r,l,c,f,h){let m;if(t.side===An?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,t.side===Qa,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:s}}function Ic(s,t,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Nc),s.getVertexPosition(m,Oc),s.getVertexPosition(p,Pc);const g=DM(s,t,i,r,Nc,Oc,Pc,y_);if(g){const v=new J;vi.getBarycoord(y_,Nc,Oc,Pc,v),l&&(g.uv=vi.getInterpolatedAttribute(l,h,m,p,v,new ve)),c&&(g.uv1=vi.getInterpolatedAttribute(c,h,m,p,v,new ve)),f&&(g.normal=vi.getInterpolatedAttribute(f,h,m,p,v,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new J,materialIndex:0};vi.getNormal(Nc,Oc,Pc,x.normal),g.face=x,g.barycoord=v}return g}class fl extends Gn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new li(p,3)),this.setAttribute("normal",new li(g,3)),this.setAttribute("uv",new li(v,2));function E(A,y,_,V,P,D,N,F,U,z,w){const R=D/U,G=N/z,Y=D/2,tt=N/2,rt=F/2,at=U+1,O=z+1;let X=0,I=0;const pt=new J;for(let L=0;L<O;L++){const Z=L*G-tt;for(let dt=0;dt<at;dt++){const gt=dt*R-Y;pt[A]=gt*V,pt[y]=Z*P,pt[_]=rt,p.push(pt.x,pt.y,pt.z),pt[A]=0,pt[y]=0,pt[_]=F>0?1:-1,g.push(pt.x,pt.y,pt.z),v.push(dt/U),v.push(1-L/z),X+=1}}for(let L=0;L<z;L++)for(let Z=0;Z<U;Z++){const dt=x+Z+at*L,gt=x+Z+at*(L+1),bt=x+(Z+1)+at*(L+1),$=x+(Z+1)+at*L;m.push(dt,gt,$),m.push(gt,bt,$),I+=6}h.addGroup(S,I,w),S+=I,x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function qn(s){const t={};for(let i=0;i<s.length;i++){const r=Xs(s[i]);for(const l in r)t[l]=r[l]}return t}function UM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Dv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const LM={clone:Xs,merge:qn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends Ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=UM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Uv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new J,S_=new ve,M_=new ve;class Yn extends Uv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,S_,M_),i.subVectors(M_,S_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(yd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Ts=1;class PM extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(bs,Ts,t,i);l.layers=this.layers,this.add(l);const c=new Yn(bs,Ts,t,i);c.layers=this.layers,this.add(c);const f=new Yn(bs,Ts,t,i);f.layers=this.layers,this.add(f);const h=new Yn(bs,Ts,t,i);h.layers=this.layers,this.add(h);const m=new Yn(bs,Ts,t,i);m.layers=this.layers,this.add(m);const p=new Yn(bs,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Lv extends Hn{constructor(t=[],i=Gs,r,l,c,f,h,m,p,g){super(t,i,r,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zM extends Dr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Lv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:ja});c.uniforms.tEquirect.value=i;const f=new Qe(l,c),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Hi),new PM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class tl extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,r),_=this._getHandJoint(p,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new tl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class lp extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=Ka()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new J;class ru{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyMatrix4(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.applyNormalMatrix(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Wn.fromBufferAttribute(this,i),Wn.transformDirection(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Fi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Fi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Fi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Fi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new cn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ru(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cp extends Ur{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let As;const Zo=new J,ws=new J,Rs=new J,Cs=new ve,Ko=new ve,Nv=new Je,Fc=new J,Qo=new J,Hc=new J,E_=new ve,kd=new ve,b_=new ve;class Ov extends wn{constructor(t=new cp){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Gn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new IM(i,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new ru(r,3,0,!1)),As.setAttribute("uv",new ru(r,2,3,!1))}this.geometry=As,this.material=t,this.center=new ve(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Nv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Rs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Gc(Fc.set(-.5,-.5,0),Rs,f,ws,l,c),Gc(Qo.set(.5,-.5,0),Rs,f,ws,l,c),Gc(Hc.set(.5,.5,0),Rs,f,ws,l,c),E_.set(0,0),kd.set(1,0),b_.set(1,1);let h=t.ray.intersectTriangle(Fc,Qo,Hc,!1,Zo);if(h===null&&(Gc(Qo.set(-.5,.5,0),Rs,f,ws,l,c),kd.set(0,1),h=t.ray.intersectTriangle(Fc,Hc,Qo,!1,Zo),h===null))return;const m=t.ray.origin.distanceTo(Zo);m<t.near||m>t.far||i.push({distance:m,point:Zo.clone(),uv:vi.getInterpolation(Zo,Fc,Qo,Hc,E_,kd,b_,new ve),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gc(s,t,i,r,l,c){Cs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Ko.x=c*Cs.x-l*Cs.y,Ko.y=l*Cs.x+c*Cs.y):Ko.copy(Cs),s.copy(t),s.x+=Ko.x,s.y+=Ko.y,s.applyMatrix4(Nv)}const Xd=new J,FM=new J,HM=new _e;class Er{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Xd.subVectors(r,i).cross(FM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Xd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||HM.getNormalMatrix(t),l=this.coplanarPoint(Xd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new lu,GM=new ve(.5,.5),Vc=new J;class up{constructor(t=new Er,i=new Er,r=new Er,l=new Er,c=new Er,f=new Er){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Gi,r=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],S=c[7],E=c[8],A=c[9],y=c[10],_=c[11],V=c[12],P=c[13],D=c[14],N=c[15];if(l[0].setComponents(p-f,S-g,_-E,N-V).normalize(),l[1].setComponents(p+f,S+g,_+E,N+V).normalize(),l[2].setComponents(p+h,S+v,_+A,N+P).normalize(),l[3].setComponents(p-h,S-v,_-A,N-P).normalize(),r)l[4].setComponents(m,x,y,D).normalize(),l[5].setComponents(p-m,S-x,_-y,N-D).normalize();else if(l[4].setComponents(p-m,S-x,_-y,N-D).normalize(),i===Gi)l[5].setComponents(p+m,S+x,_+y,N+D).normalize();else if(i===au)l[5].setComponents(m,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);const i=GM.distanceTo(t.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Is extends Ur{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const T_=new Je,Xh=new sp,kc=new lu,Xc=new J;class nl extends wn{constructor(t=new Gn,i=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;T_.copy(l).invert(),Xh.copy(t.ray).applyMatrix4(T_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=x,A=S;E<A;E++){const y=p.getX(E);Xc.fromBufferAttribute(v,y),A_(Xc,y,m,l,t,i,this)}}else{const x=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=x,A=S;E<A;E++)Xc.fromBufferAttribute(v,E),A_(Xc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function A_(s,t,i,r,l,c,f){const h=Xh.distanceSqToPoint(s);if(h<i){const m=new J;Xh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Pv extends Hn{constructor(t,i,r,l,c,f,h,m,p){super(t,i,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zv extends Hn{constructor(t,i,r=Cr,l,c,f,h=Ci,m=Ci,p,g=rl,v=1){if(g!==rl&&g!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cu extends Gn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=i/m,S=[],E=[],A=[],y=[];for(let _=0;_<g;_++){const V=_*x-f;for(let P=0;P<p;P++){const D=P*v-c;E.push(D,-V,0),A.push(0,0,1),y.push(P/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let V=0;V<h;V++){const P=V+p*_,D=V+p*(_+1),N=V+1+p*(_+1),F=V+1+p*_;S.push(P,D,F),S.push(D,N,F)}this.setIndex(S),this.setAttribute("position",new li(E,3)),this.setAttribute("normal",new li(A,3)),this.setAttribute("uv",new li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.width,t.height,t.widthSegments,t.heightSegments)}}class fp extends Gn{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,S=new J,E=new ve;for(let A=0;A<=l;A++){for(let y=0;y<=r;y++){const _=c+y/r*f;S.x=v*Math.cos(_),S.y=v*Math.sin(_),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,g.push(E.x,E.y)}v+=x}for(let A=0;A<l;A++){const y=A*(r+1);for(let _=0;_<r;_++){const V=_+y,P=V,D=V+r+1,N=V+r+2,F=V+1;h.push(P,D,F),h.push(D,N,F)}}this.setIndex(h),this.setAttribute("position",new li(m,3)),this.setAttribute("normal",new li(p,3)),this.setAttribute("uv",new li(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nn extends Gn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new J,x=new J,S=[],E=[],A=[],y=[];for(let _=0;_<=r;_++){const V=[],P=_/r;let D=0;_===0&&f===0?D=.5/i:_===r&&m===Math.PI&&(D=-.5/i);for(let N=0;N<=i;N++){const F=N/i;v.x=-t*Math.cos(l+F*c)*Math.sin(f+P*h),v.y=t*Math.cos(f+P*h),v.z=t*Math.sin(l+F*c)*Math.sin(f+P*h),E.push(v.x,v.y,v.z),x.copy(v).normalize(),A.push(x.x,x.y,x.z),y.push(F+D,1-P),V.push(p++)}g.push(V)}for(let _=0;_<r;_++)for(let V=0;V<i;V++){const P=g[_][V+1],D=g[_][V],N=g[_+1][V],F=g[_+1][V+1];(_!==0||f>0)&&S.push(P,D,F),(_!==r-1||m<Math.PI)&&S.push(D,N,F)}this.setIndex(S),this.setAttribute("position",new li(E,3)),this.setAttribute("normal",new li(A,3)),this.setAttribute("uv",new li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bi extends Ur{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ev,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class VM extends Ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kM extends Ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class XM{constructor(t,i,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const WM=new XM;class dp{constructor(t){this.manager=t!==void 0?t:WM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}dp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class qM extends dp{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Wd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let v=Ds.get(f);v===void 0&&(v=[],Ds.set(f,v)),v.push({onLoad:i,onError:l})}return f}const h=ol("img");function m(){g(),i&&i(this);const v=Ds.get(this)||[];for(let x=0;x<v.length;x++){const S=v[x];S.onLoad&&S.onLoad(this)}Ds.delete(this),c.manager.itemEnd(t)}function p(v){g(),l&&l(v),Wd.remove(`image:${t}`);const x=Ds.get(this)||[];for(let S=0;S<x.length;S++){const E=x[S];E.onError&&E.onError(v)}Ds.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Wd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class Bv extends dp{constructor(t){super(t)}load(t,i,r,l){const c=new Hn,f=new qM(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class hp extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const qd=new Je,w_=new J,R_=new J;class Iv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new up,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;w_.setFromMatrixPosition(t.matrixWorld),i.position.copy(w_),R_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(R_),i.updateMatrixWorld(),qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const C_=new Je,Jo=new J,Yd=new J;class YM extends Iv{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Jo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Jo),Yd.copy(r.position),Yd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Yd),r.updateMatrixWorld(),l.makeTranslation(-Jo.x,-Jo.y,-Jo.z),C_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(C_,r.coordinateSystem,r.reversedDepth)}}class eu extends hp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new YM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fv extends Uv{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jM extends Iv{constructor(){super(new Fv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZM extends hp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new jM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pp extends hp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class KM extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const D_=new Je;class QM{constructor(t,i,r=0,l=1/0){this.ray=new sp(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new op,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return D_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D_),this}intersectObject(t,i=!0,r=[]){return Wh(t,this,r,i),r.sort(U_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Wh(t[l],this,r,i);return r.sort(U_),r}}function U_(s,t){return s.distance-t.distance}function Wh(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)Wh(c[f],t,i,!0)}}function L_(s,t,i,r){const l=JM(r);switch(i){case vv:return s*t;case yv:return s*t/l.components*l.byteLength;case np:return s*t/l.components*l.byteLength;case Sv:return s*t*2/l.components*l.byteLength;case ip:return s*t*2/l.components*l.byteLength;case xv:return s*t*3/l.components*l.byteLength;case Ri:return s*t*4/l.components*l.byteLength;case ap:return s*t*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _h:case xh:return Math.max(s,16)*Math.max(t,8)/4;case gh:case vh:return Math.max(s,8)*Math.max(t,8)/2;case yh:case Sh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case tu:case Bh:case Ih:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mv:case Fh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Hh:case Gh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JM(s){switch(s){case Vi:case mv:return{byteLength:1,components:1};case il:case gv:case ll:return{byteLength:2,components:1};case tp:case ep:return{byteLength:2,components:4};case Cr:case $h:case ha:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function $M(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],A=v[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,v[x]=A)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const A=v[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
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
#endif`,nE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sE=`#ifdef USE_AOMAP
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
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
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
#endif`,cE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hE=`#ifdef USE_IRIDESCENCE
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
#endif`,pE=`#ifdef USE_BUMPMAP
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
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
#endif`,EE=`#define PI 3.141592653589793
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TE=`vec3 transformedNormal = objectNormal;
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
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
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
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
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
#endif`,JE=`struct PhysicalMaterial {
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
}`,$E=`
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cb=`#if defined( USE_POINTS_UV )
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
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
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
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
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
#endif`,Eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ib=`float getShadowMask() {
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
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vb=`#ifdef USE_SKINNING
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
#endif`,kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t1=`uniform sampler2D t2D;
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
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
}`,s1=`#if DEPTH_PACKING == 3200
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
}`,o1=`#define DISTANCE
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
}`,l1=`#define DISTANCE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
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
}`,d1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#define LAMBERT
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
}`,g1=`#define LAMBERT
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
}`,_1=`#define MATCAP
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
}`,v1=`#define MATCAP
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
}`,x1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,S1=`#define PHONG
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
}`,M1=`#define PHONG
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
}`,E1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,T1=`#define TOON
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
}`,A1=`#define TOON
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
}`,w1=`uniform float size;
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
}`,R1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,D1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,L1=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:tE,alphahash_pars_fragment:eE,alphamap_fragment:nE,alphamap_pars_fragment:iE,alphatest_fragment:aE,alphatest_pars_fragment:rE,aomap_fragment:sE,aomap_pars_fragment:oE,batching_pars_vertex:lE,batching_vertex:cE,begin_vertex:uE,beginnormal_vertex:fE,bsdfs:dE,iridescence_fragment:hE,bumpmap_pars_fragment:pE,clipping_planes_fragment:mE,clipping_planes_pars_fragment:gE,clipping_planes_pars_vertex:_E,clipping_planes_vertex:vE,color_fragment:xE,color_pars_fragment:yE,color_pars_vertex:SE,color_vertex:ME,common:EE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:TE,displacementmap_pars_vertex:AE,displacementmap_vertex:wE,emissivemap_fragment:RE,emissivemap_pars_fragment:CE,colorspace_fragment:DE,colorspace_pars_fragment:UE,envmap_fragment:LE,envmap_common_pars_fragment:NE,envmap_pars_fragment:OE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:qE,envmap_vertex:zE,fog_vertex:BE,fog_pars_vertex:IE,fog_fragment:FE,fog_pars_fragment:HE,gradientmap_pars_fragment:GE,lightmap_pars_fragment:VE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:XE,lights_pars_begin:WE,lights_toon_fragment:YE,lights_toon_pars_fragment:jE,lights_phong_fragment:ZE,lights_phong_pars_fragment:KE,lights_physical_fragment:QE,lights_physical_pars_fragment:JE,lights_fragment_begin:$E,lights_fragment_maps:tb,lights_fragment_end:eb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:ab,logdepthbuf_vertex:rb,map_fragment:sb,map_pars_fragment:ob,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:fb,morphinstance_vertex:db,morphcolor_vertex:hb,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:_b,normal_fragment_maps:vb,normal_pars_fragment:xb,normal_pars_vertex:yb,normal_vertex:Sb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:Eb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:Ab,opaque_fragment:wb,packing:Rb,premultiplied_alpha_fragment:Cb,project_vertex:Db,dithering_fragment:Ub,dithering_pars_fragment:Lb,roughnessmap_fragment:Nb,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:zb,shadowmap_vertex:Bb,shadowmask_pars_fragment:Ib,skinbase_vertex:Fb,skinning_pars_vertex:Hb,skinning_vertex:Gb,skinnormal_vertex:Vb,specularmap_fragment:kb,specularmap_pars_fragment:Xb,tonemapping_fragment:Wb,tonemapping_pars_fragment:qb,transmission_fragment:Yb,transmission_pars_fragment:jb,uv_pars_fragment:Zb,uv_pars_vertex:Kb,uv_vertex:Qb,worldpos_vertex:Jb,background_vert:$b,background_frag:t1,backgroundCube_vert:e1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:a1,depth_vert:r1,depth_frag:s1,distanceRGBA_vert:o1,distanceRGBA_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:d1,meshbasic_vert:h1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:y1,meshphong_vert:S1,meshphong_frag:M1,meshphysical_vert:E1,meshphysical_frag:b1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:w1,points_frag:R1,shadow_vert:C1,shadow_frag:D1,sprite_vert:U1,sprite_frag:L1},Ft={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ii={basic:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:qn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:qn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new fe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:qn([Ft.points,Ft.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:qn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:qn([Ft.common,Ft.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:qn([Ft.sprite,Ft.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:qn([Ft.common,Ft.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:qn([Ft.lights,Ft.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Ii.physical={uniforms:qn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Wc={r:0,b:0,g:0},yr=new ki,N1=new Je;function O1(s,t,i,r,l,c,f){const h=new fe(0);let m=c===!0?0:1,p,g,v=null,x=0,S=null;function E(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?i:t).get(D)),D}function A(P){let D=!1;const N=E(P);N===null?_(h,m):N&&N.isColor&&(_(N,1),D=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(P,D){const N=E(D);N&&(N.isCubeTexture||N.mapping===ou)?(g===void 0&&(g=new Qe(new fl(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Xs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),yr.copy(D.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(yr)),g.material.toneMapped=Oe.getTransfer(N.colorSpace)!==Xe,(v!==N||x!==N.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=N,x=N.version,S=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Qe(new cu(2,2),new Ja({name:"BackgroundMaterial",uniforms:Xs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(N.colorSpace)!==Xe,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=N,x=N.version,S=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,D){P.getRGB(Wc,Dv(s)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,D,f)}function V(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,D=1){h.set(P),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(h,m)},render:A,addToRenderList:y,dispose:V}}function P1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(R,G,Y,tt,rt){let at=!1;const O=v(tt,Y,G);c!==O&&(c=O,p(c.object)),at=S(R,tt,Y,rt),at&&E(R,tt,Y,rt),rt!==null&&t.update(rt,s.ELEMENT_ARRAY_BUFFER),(at||f)&&(f=!1,D(R,G,Y,tt),rt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,G,Y){const tt=Y.wireframe===!0;let rt=r[R.id];rt===void 0&&(rt={},r[R.id]=rt);let at=rt[G.id];at===void 0&&(at={},rt[G.id]=at);let O=at[tt];return O===void 0&&(O=x(m()),at[tt]=O),O}function x(R){const G=[],Y=[],tt=[];for(let rt=0;rt<i;rt++)G[rt]=0,Y[rt]=0,tt[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:tt,object:R,attributes:{},index:null}}function S(R,G,Y,tt){const rt=c.attributes,at=G.attributes;let O=0;const X=Y.getAttributes();for(const I in X)if(X[I].location>=0){const L=rt[I];let Z=at[I];if(Z===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),L===void 0||L.attribute!==Z||Z&&L.data!==Z.data)return!0;O++}return c.attributesNum!==O||c.index!==tt}function E(R,G,Y,tt){const rt={},at=G.attributes;let O=0;const X=Y.getAttributes();for(const I in X)if(X[I].location>=0){let L=at[I];L===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(L=R.instanceColor));const Z={};Z.attribute=L,L&&L.data&&(Z.data=L.data),rt[I]=Z,O++}c.attributes=rt,c.attributesNum=O,c.index=tt}function A(){const R=c.newAttributes;for(let G=0,Y=R.length;G<Y;G++)R[G]=0}function y(R){_(R,0)}function _(R,G){const Y=c.newAttributes,tt=c.enabledAttributes,rt=c.attributeDivisors;Y[R]=1,tt[R]===0&&(s.enableVertexAttribArray(R),tt[R]=1),rt[R]!==G&&(s.vertexAttribDivisor(R,G),rt[R]=G)}function V(){const R=c.newAttributes,G=c.enabledAttributes;for(let Y=0,tt=G.length;Y<tt;Y++)G[Y]!==R[Y]&&(s.disableVertexAttribArray(Y),G[Y]=0)}function P(R,G,Y,tt,rt,at,O){O===!0?s.vertexAttribIPointer(R,G,Y,rt,at):s.vertexAttribPointer(R,G,Y,tt,rt,at)}function D(R,G,Y,tt){A();const rt=tt.attributes,at=Y.getAttributes(),O=G.defaultAttributeValues;for(const X in at){const I=at[X];if(I.location>=0){let pt=rt[X];if(pt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor)),pt!==void 0){const L=pt.normalized,Z=pt.itemSize,dt=t.get(pt);if(dt===void 0)continue;const gt=dt.buffer,bt=dt.type,$=dt.bytesPerElement,ut=bt===s.INT||bt===s.UNSIGNED_INT||pt.gpuType===$h;if(pt.isInterleavedBufferAttribute){const ht=pt.data,xt=ht.stride,Tt=pt.offset;if(ht.isInstancedInterleavedBuffer){for(let Gt=0;Gt<I.locationSize;Gt++)_(I.location+Gt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Gt=0;Gt<I.locationSize;Gt++)y(I.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Gt=0;Gt<I.locationSize;Gt++)P(I.location+Gt,Z/I.locationSize,bt,L,xt*$,(Tt+Z/I.locationSize*Gt)*$,ut)}else{if(pt.isInstancedBufferAttribute){for(let ht=0;ht<I.locationSize;ht++)_(I.location+ht,pt.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ht=0;ht<I.locationSize;ht++)y(I.location+ht);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let ht=0;ht<I.locationSize;ht++)P(I.location+ht,Z/I.locationSize,bt,L,Z*$,Z/I.locationSize*ht*$,ut)}}else if(O!==void 0){const L=O[X];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(I.location,L);break;case 3:s.vertexAttrib3fv(I.location,L);break;case 4:s.vertexAttrib4fv(I.location,L);break;default:s.vertexAttrib1fv(I.location,L)}}}}V()}function N(){z();for(const R in r){const G=r[R];for(const Y in G){const tt=G[Y];for(const rt in tt)g(tt[rt].object),delete tt[rt];delete G[Y]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const Y in G){const tt=G[Y];for(const rt in tt)g(tt[rt].object),delete tt[rt];delete G[Y]}delete r[R.id]}function U(R){for(const G in r){const Y=r[G];if(Y[R.id]===void 0)continue;const tt=Y[R.id];for(const rt in tt)g(tt[rt].object),delete tt[rt];delete Y[R.id]}}function z(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:y,disableUnusedAttributes:V}}function z1(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,r,1)}function m(p,g,v,x){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function B1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(U){return!(U!==Ri&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const z=U===ll&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Vi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ha&&!z)}function m(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),V=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:V,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:N,maxSamples:F}}function I1(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Er,h=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||l;return l=x,r=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const V=c?0:r,P=V*4;let D=_.clippingState||null;m.value=D,D=g(E,x,P,S);for(let N=0;N!==P;++N)D[N]=i[N];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=V}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,S,E){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const _=S+A*4,V=x.matrixWorldInverse;h.getNormalMatrix(V),(y===null||y.length<_)&&(y=new Float32Array(_));for(let P=0,D=S;P!==A;++P,D+=4)f.copy(v[P]).applyMatrix4(V,h),f.normal.toArray(y,D),y[D+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function F1(s){let t=new WeakMap;function i(f,h){return h===dh?f.mapping=Gs:h===hh&&(f.mapping=Vs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===dh||h===hh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new zM(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Os=4,N_=[.125,.215,.35,.446,.526,.582],Ar=20,jd=new Fv,O_=new fe;let Zd=null,Kd=0,Qd=0,Jd=!1;const br=(1+Math.sqrt(5))/2,Us=1/br,P_=[new J(-br,Us,0),new J(br,Us,0),new J(-Us,0,br),new J(Us,0,br),new J(0,br,-Us),new J(0,br,Us),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],H1=new J;class z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=H1}=c;Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zd,Kd,Qd),this._renderer.xr.enabled=Jd,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:ll,format:Ri,colorSpace:ks,depthBuffer:!1},l=B_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G1(c)),this._blurMaterial=V1(c,t,i)}return l}_compileMaterial(t){const i=new Qe(this._lodPlanes[0],t);this._renderer.compile(i,jd)}_sceneToCubeUV(t,i,r,l,c){const m=new Yn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(O_),v.toneMapping=Za,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new qa({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),y=new Qe(new fl,A);let _=!1;const V=t.background;V?V.isColor&&(A.color.copy(V),t.background=null,_=!0):(A.color.copy(O_),_=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):D===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const N=this._cubeSize;qc(l,D*N,P>2?N:0,N,N),v.setRenderTarget(l),_&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=S,v.autoClear=x,t.background=V}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Gs||t.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Qe(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;qc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,jd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=P_[(l-c-1)%P_.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Qe(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ar-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):Ar;y>Ar&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const _=[];let V=0;for(let U=0;U<Ar;++U){const z=U/A,w=Math.exp(-z*z/2);_.push(w),U===0?V+=w:U<y&&(V+=2*w)}for(let U=0;U<_.length;U++)_[U]=_[U]/V;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:P}=this;x.dTheta.value=E,x.mipInt.value=P-r;const D=this._sizeLods[l],N=3*D*(l>P-Os?l-P+Os:0),F=4*(this._cubeSize-D);qc(i,N,F,3*D,2*D),m.setRenderTarget(i),m.render(v,jd)}}function G1(s){const t=[],i=[],r=[];let l=s;const c=s-Os+1+N_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-Os?m=N_[f-s+Os-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,A=3,y=2,_=1,V=new Float32Array(A*E*S),P=new Float32Array(y*E*S),D=new Float32Array(_*E*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,z=F>2?0:-1,w=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];V.set(w,A*E*F),P.set(x,y*E*F);const R=[F,F,F,F,F,F];D.set(R,_*E*F)}const N=new Gn;N.setAttribute("position",new cn(V,A)),N.setAttribute("uv",new cn(P,y)),N.setAttribute("faceIndex",new cn(D,_)),t.push(N),l>Os&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function B_(s,t,i){const r=new Dr(s,t,i);return r.texture.mapping=ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function V1(s,t,i){const r=new Float32Array(Ar),l=new J(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mp(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function I_(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function F_(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function mp(){return`

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
	`}function k1(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===dh||m===hh,g=m===Gs||m===Vs;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new z_(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new z_(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function X1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function W1(s,t,i,r){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)t.update(x[S],s.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,E=v.attributes.position;let A=0;if(S!==null){const V=S.array;A=S.version;for(let P=0,D=V.length;P<D;P+=3){const N=V[P+0],F=V[P+1],U=V[P+2];x.push(N,F,F,U,U,N)}}else if(E!==void 0){const V=E.array;A=E.version;for(let P=0,D=V.length/3-1;P<D;P+=3){const N=P+0,F=P+1,U=P+2;x.push(N,F,F,U,U,N)}}else return;const y=new(Tv(x)?Cv:Rv)(x,1);y.version=A;const _=c.get(v);_&&t.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function q1(s,t,i){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,S){s.drawElements(r,S,c,x*f),i.update(S,r,1)}function p(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,x*f,E),i.update(S,r,E))}function g(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];i.update(y,r,1)}function v(x,S,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/f,S[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,A,0,E);let _=0;for(let V=0;V<E;V++)_+=S[V]*A[V];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Y1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function j1(s,t,i){const r=new WeakMap,l=new qe;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let R=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],V=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let N=h.attributes.position.count*D,F=1;N>t.maxTextureSize&&(F=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const U=new Float32Array(N*F*4*v),z=new Av(U,N,F,v);z.type=ha,z.needsUpdate=!0;const w=D*4;for(let G=0;G<v;G++){const Y=_[G],tt=V[G],rt=P[G],at=N*F*4*G;for(let O=0;O<Y.count;O++){const X=O*w;E===!0&&(l.fromBufferAttribute(Y,O),U[at+X+0]=l.x,U[at+X+1]=l.y,U[at+X+2]=l.z,U[at+X+3]=0),A===!0&&(l.fromBufferAttribute(tt,O),U[at+X+4]=l.x,U[at+X+5]=l.y,U[at+X+6]=l.z,U[at+X+7]=0),y===!0&&(l.fromBufferAttribute(rt,O),U[at+X+8]=l.x,U[at+X+9]=l.y,U[at+X+10]=l.z,U[at+X+11]=rt.itemSize===4?l.w:1)}}x={count:v,texture:z,size:new ve(N,F)},r.set(h,x),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function Z1(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Gv=new Hn,H_=new zv(1,1),Vv=new Av,kv=new xM,Xv=new Lv,G_=[],V_=[],k_=new Float32Array(16),X_=new Float32Array(9),W_=new Float32Array(4);function qs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=G_[l];if(c===void 0&&(c=new Float32Array(l),G_[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function xn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function uu(s,t){let i=V_[t];i===void 0&&(i=new Int32Array(t),V_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function K1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function Q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function J1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function $1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function tT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;W_.set(r),s.uniformMatrix2fv(this.addr,!1,W_),yn(i,r)}}function eT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;X_.set(r),s.uniformMatrix3fv(this.addr,!1,X_),yn(i,r)}}function nT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;k_.set(r),s.uniformMatrix4fv(this.addr,!1,k_),yn(i,r)}}function iT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function aT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function rT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function sT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function oT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function lT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function cT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function uT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function fT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(H_.compareFunction=bv,c=H_):c=Gv,i.setTexture2D(t||c,l)}function dT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||kv,l)}function hT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Xv,l)}function pT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Vv,l)}function mT(s){switch(s){case 5126:return K1;case 35664:return Q1;case 35665:return J1;case 35666:return $1;case 35674:return tT;case 35675:return eT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(s,t){s.uniform1fv(this.addr,t)}function _T(s,t){const i=qs(t,this.size,2);s.uniform2fv(this.addr,i)}function vT(s,t){const i=qs(t,this.size,3);s.uniform3fv(this.addr,i)}function xT(s,t){const i=qs(t,this.size,4);s.uniform4fv(this.addr,i)}function yT(s,t){const i=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ST(s,t){const i=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function MT(s,t){const i=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function ET(s,t){s.uniform1iv(this.addr,t)}function bT(s,t){s.uniform2iv(this.addr,t)}function TT(s,t){s.uniform3iv(this.addr,t)}function AT(s,t){s.uniform4iv(this.addr,t)}function wT(s,t){s.uniform1uiv(this.addr,t)}function RT(s,t){s.uniform2uiv(this.addr,t)}function CT(s,t){s.uniform3uiv(this.addr,t)}function DT(s,t){s.uniform4uiv(this.addr,t)}function UT(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Gv,c[f])}function LT(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||kv,c[f])}function NT(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Xv,c[f])}function OT(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Vv,c[f])}function PT(s){switch(s){case 5126:return gT;case 35664:return _T;case 35665:return vT;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return bT;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return wT;case 36294:return RT;case 36295:return CT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return OT}}class zT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mT(i.type)}}class BT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function q_(s,t){s.seq.push(t),s.map[t.id]=t}function FT(s,t,i){const r=s.name,l=r.length;for($d.lastIndex=0;;){const c=$d.exec(r),f=$d.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){q_(i,p===void 0?new zT(h,s,t):new BT(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new IT(h),q_(i,v)),i=v}}}class nu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);FT(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Y_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const HT=37297;let GT=0;function VT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const j_=new _e;function kT(s){Oe._getMatrix(j_,Oe.workingColorSpace,s);const t=`mat3( ${j_.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(s)){case iu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Z_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+VT(s.getShaderSource(t),h)}else return c}function XT(s,t){const i=kT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function WT(s,t){let i;switch(t){case jS:i="Linear";break;case ZS:i="Reinhard";break;case KS:i="Cineon";break;case hv:i="ACESFilmic";break;case JS:i="AgX";break;case $S:i="Neutral";break;case QS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new J;function qT(){Oe.getLuminanceCoefficients(Yc);const s=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function jT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function ZT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function el(s){return s!==""}function K_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Q_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(s){return s.replace(KT,JT)}const QT=new Map;function JT(s,t){let i=Se[t];if(i===void 0){const r=QT.get(t);if(r!==void 0)i=Se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return qh(i)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J_(s){return s.replace($T,tA)}function tA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function $_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function eA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===su?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function nA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case ou:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function aA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case qS:t="ENVMAP_BLENDING_MIX";break;case YS:t="ENVMAP_BLENDING_ADD";break}return t}function rA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function sA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=eA(i),p=nA(i),g=iA(i),v=aA(i),x=rA(i),S=YT(i),E=jT(c),A=l.createProgram();let y,_,V=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(el).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(el).join(`
`),_.length>0&&(_+=`
`)):(y=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),_=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?Se.tonemapping_pars_fragment:"",i.toneMapping!==Za?WT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),f=qh(f),f=K_(f,i),f=Q_(f,i),h=qh(h),h=K_(h,i),h=Q_(h,i),f=J_(f),h=J_(h),i.isRawShaderMaterial!==!0&&(V=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=V+y+f,D=V+_+h,N=Y_(l,l.VERTEX_SHADER,P),F=Y_(l,l.FRAGMENT_SHADER,D);l.attachShader(A,N),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function U(G){if(s.debug.checkShaderErrors){const Y=l.getProgramInfoLog(A)||"",tt=l.getShaderInfoLog(N)||"",rt=l.getShaderInfoLog(F)||"",at=Y.trim(),O=tt.trim(),X=rt.trim();let I=!0,pt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,N,F);else{const L=Z_(l,N,"vertex"),Z=Z_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+at+`
`+L+`
`+Z)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(O===""||X==="")&&(pt=!1);pt&&(G.diagnostics={runnable:I,programLog:at,vertexShader:{log:O,prefix:y},fragmentShader:{log:X,prefix:_}})}l.deleteShader(N),l.deleteShader(F),z=new nu(l,A),w=ZT(l,A)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,HT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=F,this}let oA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new cA(t),i.set(t,r)),r}}class cA{constructor(t){this.id=oA++,this.code=t,this.usedTimes=0}}function uA(s,t,i,r,l,c,f){const h=new op,m=new lA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,G,Y,tt){const rt=Y.fog,at=tt.geometry,O=w.isMeshStandardMaterial?Y.environment:null,X=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),I=X&&X.mapping===ou?X.image.height:null,pt=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const L=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Z=L!==void 0?L.length:0;let dt=0;at.morphAttributes.position!==void 0&&(dt=1),at.morphAttributes.normal!==void 0&&(dt=2),at.morphAttributes.color!==void 0&&(dt=3);let gt,bt,$,ut;if(pt){const Ue=Ii[pt];gt=Ue.vertexShader,bt=Ue.fragmentShader}else gt=w.vertexShader,bt=w.fragmentShader,m.update(w),$=m.getVertexShaderID(w),ut=m.getFragmentShaderID(w);const ht=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Tt=tt.isInstancedMesh===!0,Gt=tt.isBatchedMesh===!0,de=!!w.map,At=!!w.matcap,H=!!X,ne=!!w.aoMap,Ot=!!w.lightMap,he=!!w.bumpMap,Ct=!!w.normalMap,pe=!!w.displacementMap,Ht=!!w.emissiveMap,re=!!w.metalnessMap,Fe=!!w.roughnessMap,De=w.anisotropy>0,B=w.clearcoat>0,b=w.dispersion>0,nt=w.iridescence>0,_t=w.sheen>0,St=w.transmission>0,ft=De&&!!w.anisotropyMap,Vt=B&&!!w.clearcoatMap,Lt=B&&!!w.clearcoatNormalMap,Kt=B&&!!w.clearcoatRoughnessMap,$t=nt&&!!w.iridescenceMap,wt=nt&&!!w.iridescenceThicknessMap,Bt=_t&&!!w.sheenColorMap,ee=_t&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,Pt=!!w.specularColorMap,me=!!w.specularIntensityMap,q=St&&!!w.transmissionMap,Ut=St&&!!w.thicknessMap,Nt=!!w.gradientMap,kt=!!w.alphaMap,Rt=w.alphaTest>0,Et=!!w.alphaHash,jt=!!w.extensions;let ue=Za;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ue=s.toneMapping);const ze={shaderID:pt,shaderType:w.type,shaderName:w.name,vertexShader:gt,fragmentShader:bt,defines:w.defines,customVertexShaderID:$,customFragmentShaderID:ut,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Gt,batchingColor:Gt&&tt._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&tt.instanceColor!==null,instancingMorph:Tt&&tt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ks,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:At,envMap:H,envMapMode:H&&X.mapping,envMapCubeUVHeight:I,aoMap:ne,lightMap:Ot,bumpMap:he,normalMap:Ct,displacementMap:x&&pe,emissiveMap:Ht,normalMapObjectSpace:Ct&&w.normalMapType===iM,normalMapTangentSpace:Ct&&w.normalMapType===Ev,metalnessMap:re,roughnessMap:Fe,anisotropy:De,anisotropyMap:ft,clearcoat:B,clearcoatMap:Vt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:nt,iridescenceMap:$t,iridescenceThicknessMap:wt,sheen:_t,sheenColorMap:Bt,sheenRoughnessMap:ee,specularMap:Zt,specularColorMap:Pt,specularIntensityMap:me,transmission:St,transmissionMap:q,thicknessMap:Ut,gradientMap:Nt,opaque:w.transparent===!1&&w.blending===Ps&&w.alphaToCoverage===!1,alphaMap:kt,alphaTest:Rt,alphaHash:Et,combine:w.combine,mapUv:de&&A(w.map.channel),aoMapUv:ne&&A(w.aoMap.channel),lightMapUv:Ot&&A(w.lightMap.channel),bumpMapUv:he&&A(w.bumpMap.channel),normalMapUv:Ct&&A(w.normalMap.channel),displacementMapUv:pe&&A(w.displacementMap.channel),emissiveMapUv:Ht&&A(w.emissiveMap.channel),metalnessMapUv:re&&A(w.metalnessMap.channel),roughnessMapUv:Fe&&A(w.roughnessMap.channel),anisotropyMapUv:ft&&A(w.anisotropyMap.channel),clearcoatMapUv:Vt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:ee&&A(w.sheenRoughnessMap.channel),specularMapUv:Zt&&A(w.specularMap.channel),specularColorMapUv:Pt&&A(w.specularColorMap.channel),specularIntensityMapUv:me&&A(w.specularIntensityMap.channel),transmissionMapUv:q&&A(w.transmissionMap.channel),thicknessMapUv:Ut&&A(w.thicknessMap.channel),alphaMapUv:kt&&A(w.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Ct||De),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!at.attributes.uv&&(de||kt),fog:!!rt,useFog:w.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:xt,skinning:tt.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:dt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Oe.getTransfer(w.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(w.emissiveMap.colorSpace)===Xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wi,flipSided:w.side===An,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:jt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&w.extensions.multiDraw===!0||Gt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)R.push(G),R.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(V(R,w),P(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function V(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function P(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const R=E[w.type];let G;if(R){const Y=Ii[R];G=LM.clone(Y.uniforms)}else G=w.uniforms;return G}function N(w,R){let G;for(let Y=0,tt=g.length;Y<tt;Y++){const rt=g[Y];if(rt.cacheKey===R){G=rt,++G.usedTimes;break}}return G===void 0&&(G=new sA(s,R,w,c),g.push(G)),G}function F(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function U(w){m.remove(w)}function z(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:N,releaseProgram:F,releaseShaderCache:U,programs:g,dispose:z}}function fA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function dA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function tv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ev(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(v,x,S,E,A,y){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:A,group:y},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=A,_.group=y),t++,_}function h(v,x,S,E,A,y){const _=f(v,x,S,E,A,y);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(v,x,S,E,A,y){const _=f(v,x,S,E,A,y);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||dA),r.length>1&&r.sort(x||tv),l.length>1&&l.sort(x||tv)}function g(){for(let v=t,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function hA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new ev,s.set(r,[f])):l>=c.length?(f=new ev,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function pA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new fe};break;case"SpotLight":i={position:new J,direction:new J,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new J,halfWidth:new J,halfHeight:new J};break}return s[t.id]=i,i}}}function mA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let gA=0;function _A(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vA(s){const t=new pA,i=mA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,c=new Je,f=new Je;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,E=0,A=0,y=0,_=0,V=0,P=0,D=0,N=0,F=0,U=0;p.sort(_A);for(let w=0,R=p.length;w<R;w++){const G=p[w],Y=G.color,tt=G.intensity,rt=G.distance,at=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Y.r*tt,v+=Y.g*tt,x+=Y.b*tt;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],tt);U++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const X=G.shadow,I=i.get(G);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,r.directionalShadow[S]=I,r.directionalShadowMap[S]=at,r.directionalShadowMatrix[S]=G.shadow.matrix,V++}r.directional[S]=O,S++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(Y).multiplyScalar(tt),O.distance=rt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[A]=O;const X=G.shadow;if(G.map&&(r.spotLightMap[N]=G.map,N++,X.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[A]=X.matrix,G.castShadow){const I=i.get(G);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,r.spotShadow[A]=I,r.spotShadowMap[A]=at,D++}A++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(Y).multiplyScalar(tt),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=O,y++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const X=G.shadow,I=i.get(G);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,I.shadowCameraNear=X.camera.near,I.shadowCameraFar=X.camera.far,r.pointShadow[E]=I,r.pointShadowMap[E]=at,r.pointShadowMatrix[E]=G.shadow.matrix,P++}r.point[E]=O,E++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(tt),O.groundColor.copy(G.groundColor).multiplyScalar(tt),r.hemi[_]=O,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==S||z.pointLength!==E||z.spotLength!==A||z.rectAreaLength!==y||z.hemiLength!==_||z.numDirectionalShadows!==V||z.numPointShadows!==P||z.numSpotShadows!==D||z.numSpotMaps!==N||z.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=V,r.directionalShadowMap.length=V,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=V,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+N-F,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,z.directionalLength=S,z.pointLength=E,z.spotLength=A,z.rectAreaLength=y,z.hemiLength=_,z.numDirectionalShadows=V,z.numPointShadows=P,z.numSpotShadows=D,z.numSpotMaps=N,z.numLightProbes=U,r.version=gA++)}function m(p,g){let v=0,x=0,S=0,E=0,A=0;const y=g.matrixWorldInverse;for(let _=0,V=p.length;_<V;_++){const P=p[_];if(P.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(P.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),f.identity(),c.copy(P.matrixWorld),c.premultiply(y),f.extractRotation(c),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:h,setupView:m,state:r}}function nv(s){const t=new vA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function xA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new nv(s),t.set(l,[h])):c>=f.length?(h=new nv(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
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
}`;function MA(s,t,i){let r=new up;const l=new ve,c=new ve,f=new qe,h=new VM({depthPacking:nM}),m=new kM,p={},g=i.maxTextureSize,v={[Qa]:An,[An]:Qa,[wi]:wi},x=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:yA,fragmentShader:SA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Gn;E.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qe(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let _=this.type;this.render=function(F,U,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const w=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(ja),Y.buffers.depth.getReversed()?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const tt=_!==fa&&this.type===fa,rt=_===fa&&this.type!==fa;for(let at=0,O=F.length;at<O;at++){const X=F[at],I=X.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const pt=I.getFrameExtents();if(l.multiply(pt),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/pt.x),l.x=c.x*pt.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/pt.y),l.y=c.y*pt.y,I.mapSize.y=c.y)),I.map===null||tt===!0||rt===!0){const Z=this.type!==fa?{minFilter:Ci,magFilter:Ci}:{};I.map!==null&&I.map.dispose(),I.map=new Dr(l.x,l.y,Z),I.map.texture.name=X.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const L=I.getViewportCount();for(let Z=0;Z<L;Z++){const dt=I.getViewport(Z);f.set(c.x*dt.x,c.y*dt.y,c.x*dt.z,c.y*dt.w),Y.viewport(f),I.updateMatrices(X,Z),r=I.getFrustum(),D(U,z,I.camera,X,this.type)}I.isPointLightShadow!==!0&&this.type===fa&&V(I,z),I.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(w,R,G)};function V(F,U){const z=t.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Dr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,z,x,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,z,S,A,null)}function P(F,U,z,w){let R=null;const G=z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)R=G;else if(R=z.isPointLight===!0?m:h,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Y=R.uuid,tt=U.uuid;let rt=p[Y];rt===void 0&&(rt={},p[Y]=rt);let at=rt[tt];at===void 0&&(at=R.clone(),rt[tt]=at,U.addEventListener("dispose",N)),R=at}if(R.visible=U.visible,R.wireframe=U.wireframe,w===fa?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:v[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=s.properties.get(R);Y.light=z}return R}function D(F,U,z,w,R){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===fa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,F.matrixWorld);const tt=t.update(F),rt=F.material;if(Array.isArray(rt)){const at=tt.groups;for(let O=0,X=at.length;O<X;O++){const I=at[O],pt=rt[I.materialIndex];if(pt&&pt.visible){const L=P(F,pt,w,R);F.onBeforeShadow(s,F,U,z,tt,L,I),s.renderBufferDirect(z,null,tt,L,F,I),F.onAfterShadow(s,F,U,z,tt,L,I)}}}else if(rt.visible){const at=P(F,rt,w,R);F.onBeforeShadow(s,F,U,z,tt,at,null),s.renderBufferDirect(z,null,tt,at,F,null),F.onAfterShadow(s,F,U,z,tt,at,null)}}const Y=F.children;for(let tt=0,rt=Y.length;tt<rt;tt++)D(Y[tt],U,z,w,R)}function N(F){F.target.removeEventListener("dispose",N);for(const z in p){const w=p[z],R=F.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const EA={[rh]:sh,[oh]:uh,[lh]:fh,[Hs]:ch,[sh]:rh,[uh]:oh,[fh]:lh,[ch]:Hs};function bA(s,t){function i(){let q=!1;const Ut=new qe;let Nt=null;const kt=new qe(0,0,0,0);return{setMask:function(Rt){Nt!==Rt&&!q&&(s.colorMask(Rt,Rt,Rt,Rt),Nt=Rt)},setLocked:function(Rt){q=Rt},setClear:function(Rt,Et,jt,ue,ze){ze===!0&&(Rt*=ue,Et*=ue,jt*=ue),Ut.set(Rt,Et,jt,ue),kt.equals(Ut)===!1&&(s.clearColor(Rt,Et,jt,ue),kt.copy(Ut))},reset:function(){q=!1,Nt=null,kt.set(-1,0,0,0)}}}function r(){let q=!1,Ut=!1,Nt=null,kt=null,Rt=null;return{setReversed:function(Et){if(Ut!==Et){const jt=t.get("EXT_clip_control");Et?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Ut=Et;const ue=Rt;Rt=null,this.setClear(ue)}},getReversed:function(){return Ut},setTest:function(Et){Et?ht(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(Et){Nt!==Et&&!q&&(s.depthMask(Et),Nt=Et)},setFunc:function(Et){if(Ut&&(Et=EA[Et]),kt!==Et){switch(Et){case rh:s.depthFunc(s.NEVER);break;case sh:s.depthFunc(s.ALWAYS);break;case oh:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case lh:s.depthFunc(s.EQUAL);break;case ch:s.depthFunc(s.GEQUAL);break;case uh:s.depthFunc(s.GREATER);break;case fh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}kt=Et}},setLocked:function(Et){q=Et},setClear:function(Et){Rt!==Et&&(Ut&&(Et=1-Et),s.clearDepth(Et),Rt=Et)},reset:function(){q=!1,Nt=null,kt=null,Rt=null,Ut=!1}}}function l(){let q=!1,Ut=null,Nt=null,kt=null,Rt=null,Et=null,jt=null,ue=null,ze=null;return{setTest:function(Ue){q||(Ue?ht(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(Ue){Ut!==Ue&&!q&&(s.stencilMask(Ue),Ut=Ue)},setFunc:function(Ue,xi,pn){(Nt!==Ue||kt!==xi||Rt!==pn)&&(s.stencilFunc(Ue,xi,pn),Nt=Ue,kt=xi,Rt=pn)},setOp:function(Ue,xi,pn){(Et!==Ue||jt!==xi||ue!==pn)&&(s.stencilOp(Ue,xi,pn),Et=Ue,jt=xi,ue=pn)},setLocked:function(Ue){q=Ue},setClear:function(Ue){ze!==Ue&&(s.clearStencil(Ue),ze=Ue)},reset:function(){q=!1,Ut=null,Nt=null,kt=null,Rt=null,Et=null,jt=null,ue=null,ze=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,A=!1,y=null,_=null,V=null,P=null,D=null,N=null,F=null,U=new fe(0,0,0),z=0,w=!1,R=null,G=null,Y=null,tt=null,rt=null;const at=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(I)[1]),O=X>=1):I.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),O=X>=2);let pt=null,L={};const Z=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),gt=new qe().fromArray(Z),bt=new qe().fromArray(dt);function $(q,Ut,Nt,kt){const Rt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(q,Et),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<Nt;jt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Ut+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Et}const ut={};ut[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(s.DEPTH_TEST),f.setFunc(Hs),he(!1),Ct(e_),ht(s.CULL_FACE),ne(ja);function ht(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function xt(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function Tt(q,Ut){return v[q]!==Ut?(s.bindFramebuffer(q,Ut),v[q]=Ut,q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ut),q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Gt(q,Ut){let Nt=S,kt=!1;if(q){Nt=x.get(Ut),Nt===void 0&&(Nt=[],x.set(Ut,Nt));const Rt=q.textures;if(Nt.length!==Rt.length||Nt[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,jt=Rt.length;Et<jt;Et++)Nt[Et]=s.COLOR_ATTACHMENT0+Et;Nt.length=Rt.length,kt=!0}}else Nt[0]!==s.BACK&&(Nt[0]=s.BACK,kt=!0);kt&&s.drawBuffers(Nt)}function de(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const At={[Tr]:s.FUNC_ADD,[CS]:s.FUNC_SUBTRACT,[DS]:s.FUNC_REVERSE_SUBTRACT};At[US]=s.MIN,At[LS]=s.MAX;const H={[NS]:s.ZERO,[OS]:s.ONE,[PS]:s.SRC_COLOR,[ih]:s.SRC_ALPHA,[GS]:s.SRC_ALPHA_SATURATE,[FS]:s.DST_COLOR,[BS]:s.DST_ALPHA,[zS]:s.ONE_MINUS_SRC_COLOR,[ah]:s.ONE_MINUS_SRC_ALPHA,[HS]:s.ONE_MINUS_DST_COLOR,[IS]:s.ONE_MINUS_DST_ALPHA,[VS]:s.CONSTANT_COLOR,[kS]:s.ONE_MINUS_CONSTANT_COLOR,[XS]:s.CONSTANT_ALPHA,[WS]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(q,Ut,Nt,kt,Rt,Et,jt,ue,ze,Ue){if(q===ja){A===!0&&(xt(s.BLEND),A=!1);return}if(A===!1&&(ht(s.BLEND),A=!0),q!==RS){if(q!==y||Ue!==w){if((_!==Tr||D!==Tr)&&(s.blendEquation(s.FUNC_ADD),_=Tr,D=Tr),Ue)switch(q){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nh:s.blendFunc(s.ONE,s.ONE);break;case n_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case i_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case n_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}V=null,P=null,N=null,F=null,U.set(0,0,0),z=0,y=q,w=Ue}return}Rt=Rt||Ut,Et=Et||Nt,jt=jt||kt,(Ut!==_||Rt!==D)&&(s.blendEquationSeparate(At[Ut],At[Rt]),_=Ut,D=Rt),(Nt!==V||kt!==P||Et!==N||jt!==F)&&(s.blendFuncSeparate(H[Nt],H[kt],H[Et],H[jt]),V=Nt,P=kt,N=Et,F=jt),(ue.equals(U)===!1||ze!==z)&&(s.blendColor(ue.r,ue.g,ue.b,ze),U.copy(ue),z=ze),y=q,w=!1}function Ot(q,Ut){q.side===wi?xt(s.CULL_FACE):ht(s.CULL_FACE);let Nt=q.side===An;Ut&&(Nt=!Nt),he(Nt),q.blending===Ps&&q.transparent===!1?ne(ja):ne(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const kt=q.stencilWrite;h.setTest(kt),kt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ht(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(q){R!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),R=q)}function Ct(q){q!==AS?(ht(s.CULL_FACE),q!==G&&(q===e_?s.cullFace(s.BACK):q===wS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),G=q}function pe(q){q!==Y&&(O&&s.lineWidth(q),Y=q)}function Ht(q,Ut,Nt){q?(ht(s.POLYGON_OFFSET_FILL),(tt!==Ut||rt!==Nt)&&(s.polygonOffset(Ut,Nt),tt=Ut,rt=Nt)):xt(s.POLYGON_OFFSET_FILL)}function re(q){q?ht(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function Fe(q){q===void 0&&(q=s.TEXTURE0+at-1),pt!==q&&(s.activeTexture(q),pt=q)}function De(q,Ut,Nt){Nt===void 0&&(pt===null?Nt=s.TEXTURE0+at-1:Nt=pt);let kt=L[Nt];kt===void 0&&(kt={type:void 0,texture:void 0},L[Nt]=kt),(kt.type!==q||kt.texture!==Ut)&&(pt!==Nt&&(s.activeTexture(Nt),pt=Nt),s.bindTexture(q,Ut||ut[q]),kt.type=q,kt.texture=Ut)}function B(){const q=L[pt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Vt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $t(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(q){gt.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),gt.copy(q))}function ee(q){bt.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),bt.copy(q))}function Zt(q,Ut){let Nt=p.get(Ut);Nt===void 0&&(Nt=new WeakMap,p.set(Ut,Nt));let kt=Nt.get(q);kt===void 0&&(kt=s.getUniformBlockIndex(Ut,q.name),Nt.set(q,kt))}function Pt(q,Ut){const kt=p.get(Ut).get(q);m.get(Ut)!==kt&&(s.uniformBlockBinding(Ut,kt,q.__bindingPointIndex),m.set(Ut,kt))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},pt=null,L={},v={},x=new WeakMap,S=[],E=null,A=!1,y=null,_=null,V=null,P=null,D=null,N=null,F=null,U=new fe(0,0,0),z=0,w=!1,R=null,G=null,Y=null,tt=null,rt=null,gt.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:xt,bindFramebuffer:Tt,drawBuffers:Gt,useProgram:de,setBlending:ne,setMaterial:Ot,setFlipSided:he,setCullFace:Ct,setLineWidth:pe,setPolygonOffset:Ht,setScissorTest:re,activeTexture:Fe,bindTexture:De,unbindTexture:B,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:$t,texImage3D:wt,updateUBOMapping:Zt,uniformBlockBinding:Pt,texStorage2D:Lt,texStorage3D:Kt,texSubImage2D:_t,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Vt,scissor:Bt,viewport:ee,reset:me}}function TA(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ve,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,b){return S?new OffscreenCanvas(B,b):ol("canvas")}function A(B,b,nt){let _t=1;const St=De(B);if((St.width>nt||St.height>nt)&&(_t=nt/Math.max(St.width,St.height)),_t<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ft=Math.floor(_t*St.width),Vt=Math.floor(_t*St.height);v===void 0&&(v=E(ft,Vt));const Lt=b?E(ft,Vt):v;return Lt.width=ft,Lt.height=Vt,Lt.getContext("2d").drawImage(B,0,0,ft,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Vt+")."),Lt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),B;return B}function y(B){return B.generateMipmaps}function _(B){s.generateMipmap(B)}function V(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(B,b,nt,_t,St=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ft=b;if(b===s.RED&&(nt===s.FLOAT&&(ft=s.R32F),nt===s.HALF_FLOAT&&(ft=s.R16F),nt===s.UNSIGNED_BYTE&&(ft=s.R8)),b===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.R8UI),nt===s.UNSIGNED_SHORT&&(ft=s.R16UI),nt===s.UNSIGNED_INT&&(ft=s.R32UI),nt===s.BYTE&&(ft=s.R8I),nt===s.SHORT&&(ft=s.R16I),nt===s.INT&&(ft=s.R32I)),b===s.RG&&(nt===s.FLOAT&&(ft=s.RG32F),nt===s.HALF_FLOAT&&(ft=s.RG16F),nt===s.UNSIGNED_BYTE&&(ft=s.RG8)),b===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),nt===s.UNSIGNED_INT&&(ft=s.RG32UI),nt===s.BYTE&&(ft=s.RG8I),nt===s.SHORT&&(ft=s.RG16I),nt===s.INT&&(ft=s.RG32I)),b===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),nt===s.UNSIGNED_INT&&(ft=s.RGB32UI),nt===s.BYTE&&(ft=s.RGB8I),nt===s.SHORT&&(ft=s.RGB16I),nt===s.INT&&(ft=s.RGB32I)),b===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),nt===s.BYTE&&(ft=s.RGBA8I),nt===s.SHORT&&(ft=s.RGBA16I),nt===s.INT&&(ft=s.RGBA32I)),b===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),b===s.RGBA){const Vt=St?iu:Oe.getTransfer(_t);nt===s.FLOAT&&(ft=s.RGBA32F),nt===s.HALF_FLOAT&&(ft=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ft=Vt===Xe?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(B,b){let nt;return B?b===null||b===Cr||b===al?nt=s.DEPTH24_STENCIL8:b===ha?nt=s.DEPTH32F_STENCIL8:b===il&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Cr||b===al?nt=s.DEPTH_COMPONENT24:b===ha?nt=s.DEPTH_COMPONENT32F:b===il&&(nt=s.DEPTH_COMPONENT16),nt}function N(B,b){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ci&&B.minFilter!==Hi?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function F(B){const b=B.target;b.removeEventListener("dispose",F),z(b),b.isVideoTexture&&g.delete(b)}function U(B){const b=B.target;b.removeEventListener("dispose",U),R(b)}function z(B){const b=r.get(B);if(b.__webglInit===void 0)return;const nt=B.source,_t=x.get(nt);if(_t){const St=_t[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(B),Object.keys(_t).length===0&&x.delete(nt)}r.remove(B)}function w(B){const b=r.get(B);s.deleteTexture(b.__webglTexture);const nt=B.source,_t=x.get(nt);delete _t[b.__cacheKey],f.memory.textures--}function R(B){const b=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let St=0;St<b.__webglFramebuffer[_t].length;St++)s.deleteFramebuffer(b.__webglFramebuffer[_t][St]);else s.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)s.deleteFramebuffer(b.__webglFramebuffer[_t]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=B.textures;for(let _t=0,St=nt.length;_t<St;_t++){const ft=r.get(nt[_t]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),f.memory.textures--),r.remove(nt[_t])}r.remove(B)}let G=0;function Y(){G=0}function tt(){const B=G;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),G+=1,B}function rt(B){const b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function at(B,b){const nt=r.get(B);if(B.isVideoTexture&&re(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&nt.__version!==B.version){const _t=B.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(nt,B,b);return}}else B.isExternalTexture&&(nt.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+b)}function O(B,b){const nt=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){ut(nt,B,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+b)}function X(B,b){const nt=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){ut(nt,B,b);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+b)}function I(B,b){const nt=r.get(B);if(B.version>0&&nt.__version!==B.version){ht(nt,B,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+b)}const pt={[ph]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[mh]:s.MIRRORED_REPEAT},L={[Ci]:s.NEAREST,[tM]:s.NEAREST_MIPMAP_NEAREST,[Mc]:s.NEAREST_MIPMAP_LINEAR,[Hi]:s.LINEAR,[xd]:s.LINEAR_MIPMAP_NEAREST,[Rr]:s.LINEAR_MIPMAP_LINEAR},Z={[aM]:s.NEVER,[uM]:s.ALWAYS,[rM]:s.LESS,[bv]:s.LEQUAL,[sM]:s.EQUAL,[cM]:s.GEQUAL,[oM]:s.GREATER,[lM]:s.NOTEQUAL};function dt(B,b){if(b.type===ha&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Hi||b.magFilter===xd||b.magFilter===Mc||b.magFilter===Rr||b.minFilter===Hi||b.minFilter===xd||b.minFilter===Mc||b.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,pt[b.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,pt[b.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,pt[b.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,L[b.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ci||b.minFilter!==Mc&&b.minFilter!==Rr||b.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function gt(B,b){let nt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",F));const _t=b.source;let St=x.get(_t);St===void 0&&(St={},x.set(_t,St));const ft=rt(b);if(ft!==B.__cacheKey){St[ft]===void 0&&(St[ft]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),St[ft].usedTimes++;const Vt=St[B.__cacheKey];Vt!==void 0&&(St[B.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(b)),B.__cacheKey=ft,B.__webglTexture=St[ft].texture}return nt}function bt(B,b,nt){return Math.floor(Math.floor(B/nt)/b)}function $(B,b,nt,_t){const ft=B.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,nt,_t,b.data);else{ft.sort((wt,Bt)=>wt.start-Bt.start);let Vt=0;for(let wt=1;wt<ft.length;wt++){const Bt=ft[Vt],ee=ft[wt],Zt=Bt.start+Bt.count,Pt=bt(ee.start,b.width,4),me=bt(Bt.start,b.width,4);ee.start<=Zt+1&&Pt===me&&bt(ee.start+ee.count-1,b.width,4)===Pt?Bt.count=Math.max(Bt.count,ee.start+ee.count-Bt.start):(++Vt,ft[Vt]=ee)}ft.length=Vt+1;const Lt=s.getParameter(s.UNPACK_ROW_LENGTH),Kt=s.getParameter(s.UNPACK_SKIP_PIXELS),$t=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let wt=0,Bt=ft.length;wt<Bt;wt++){const ee=ft[wt],Zt=Math.floor(ee.start/4),Pt=Math.ceil(ee.count/4),me=Zt%b.width,q=Math.floor(Zt/b.width),Ut=Pt,Nt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,me),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,me,q,Ut,Nt,nt,_t,b.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,$t)}}function ut(B,b,nt){let _t=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=s.TEXTURE_3D);const St=gt(B,b),ft=b.source;i.bindTexture(_t,B.__webglTexture,s.TEXTURE0+nt);const Vt=r.get(ft);if(ft.version!==Vt.__version||St===!0){i.activeTexture(s.TEXTURE0+nt);const Lt=Oe.getPrimaries(Oe.workingColorSpace),Kt=b.colorSpace===Ya?null:Oe.getPrimaries(b.colorSpace),$t=b.colorSpace===Ya||Lt===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let wt=A(b.image,!1,l.maxTextureSize);wt=Fe(b,wt);const Bt=c.convert(b.format,b.colorSpace),ee=c.convert(b.type);let Zt=P(b.internalFormat,Bt,ee,b.colorSpace,b.isVideoTexture);dt(_t,b);let Pt;const me=b.mipmaps,q=b.isVideoTexture!==!0,Ut=Vt.__version===void 0||St===!0,Nt=ft.dataReady,kt=N(b,wt);if(b.isDepthTexture)Zt=D(b.format===sl,b.type),Ut&&(q?i.texStorage2D(s.TEXTURE_2D,1,Zt,wt.width,wt.height):i.texImage2D(s.TEXTURE_2D,0,Zt,wt.width,wt.height,0,Bt,ee,null));else if(b.isDataTexture)if(me.length>0){q&&Ut&&i.texStorage2D(s.TEXTURE_2D,kt,Zt,me[0].width,me[0].height);for(let Rt=0,Et=me.length;Rt<Et;Rt++)Pt=me[Rt],q?Nt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Pt.width,Pt.height,Bt,ee,Pt.data):i.texImage2D(s.TEXTURE_2D,Rt,Zt,Pt.width,Pt.height,0,Bt,ee,Pt.data);b.generateMipmaps=!1}else q?(Ut&&i.texStorage2D(s.TEXTURE_2D,kt,Zt,wt.width,wt.height),Nt&&$(b,wt,Bt,ee)):i.texImage2D(s.TEXTURE_2D,0,Zt,wt.width,wt.height,0,Bt,ee,wt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,kt,Zt,me[0].width,me[0].height,wt.depth);for(let Rt=0,Et=me.length;Rt<Et;Rt++)if(Pt=me[Rt],b.format!==Ri)if(Bt!==null)if(q){if(Nt)if(b.layerUpdates.size>0){const jt=L_(Pt.width,Pt.height,b.format,b.type);for(const ue of b.layerUpdates){const ze=Pt.data.subarray(ue*jt/Pt.data.BYTES_PER_ELEMENT,(ue+1)*jt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,ue,Pt.width,Pt.height,1,Bt,ze)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Pt.width,Pt.height,wt.depth,Bt,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,Zt,Pt.width,Pt.height,wt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Nt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Pt.width,Pt.height,wt.depth,Bt,ee,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,Zt,Pt.width,Pt.height,wt.depth,0,Bt,ee,Pt.data)}else{q&&Ut&&i.texStorage2D(s.TEXTURE_2D,kt,Zt,me[0].width,me[0].height);for(let Rt=0,Et=me.length;Rt<Et;Rt++)Pt=me[Rt],b.format!==Ri?Bt!==null?q?Nt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Pt.width,Pt.height,Bt,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,Zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Nt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Pt.width,Pt.height,Bt,ee,Pt.data):i.texImage2D(s.TEXTURE_2D,Rt,Zt,Pt.width,Pt.height,0,Bt,ee,Pt.data)}else if(b.isDataArrayTexture)if(q){if(Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,kt,Zt,wt.width,wt.height,wt.depth),Nt)if(b.layerUpdates.size>0){const Rt=L_(wt.width,wt.height,b.format,b.type);for(const Et of b.layerUpdates){const jt=wt.data.subarray(Et*Rt/wt.data.BYTES_PER_ELEMENT,(Et+1)*Rt/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Et,wt.width,wt.height,1,Bt,ee,jt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Bt,ee,wt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Zt,wt.width,wt.height,wt.depth,0,Bt,ee,wt.data);else if(b.isData3DTexture)q?(Ut&&i.texStorage3D(s.TEXTURE_3D,kt,Zt,wt.width,wt.height,wt.depth),Nt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Bt,ee,wt.data)):i.texImage3D(s.TEXTURE_3D,0,Zt,wt.width,wt.height,wt.depth,0,Bt,ee,wt.data);else if(b.isFramebufferTexture){if(Ut)if(q)i.texStorage2D(s.TEXTURE_2D,kt,Zt,wt.width,wt.height);else{let Rt=wt.width,Et=wt.height;for(let jt=0;jt<kt;jt++)i.texImage2D(s.TEXTURE_2D,jt,Zt,Rt,Et,0,Bt,ee,null),Rt>>=1,Et>>=1}}else if(me.length>0){if(q&&Ut){const Rt=De(me[0]);i.texStorage2D(s.TEXTURE_2D,kt,Zt,Rt.width,Rt.height)}for(let Rt=0,Et=me.length;Rt<Et;Rt++)Pt=me[Rt],q?Nt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Bt,ee,Pt):i.texImage2D(s.TEXTURE_2D,Rt,Zt,Bt,ee,Pt);b.generateMipmaps=!1}else if(q){if(Ut){const Rt=De(wt);i.texStorage2D(s.TEXTURE_2D,kt,Zt,Rt.width,Rt.height)}Nt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,ee,wt)}else i.texImage2D(s.TEXTURE_2D,0,Zt,Bt,ee,wt);y(b)&&_(_t),Vt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function ht(B,b,nt){if(b.image.length!==6)return;const _t=gt(B,b),St=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+nt);const ft=r.get(St);if(St.version!==ft.__version||_t===!0){i.activeTexture(s.TEXTURE0+nt);const Vt=Oe.getPrimaries(Oe.workingColorSpace),Lt=b.colorSpace===Ya?null:Oe.getPrimaries(b.colorSpace),Kt=b.colorSpace===Ya||Vt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,wt=b.image[0]&&b.image[0].isDataTexture,Bt=[];for(let Et=0;Et<6;Et++)!$t&&!wt?Bt[Et]=A(b.image[Et],!0,l.maxCubemapSize):Bt[Et]=wt?b.image[Et].image:b.image[Et],Bt[Et]=Fe(b,Bt[Et]);const ee=Bt[0],Zt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),me=P(b.internalFormat,Zt,Pt,b.colorSpace),q=b.isVideoTexture!==!0,Ut=ft.__version===void 0||_t===!0,Nt=St.dataReady;let kt=N(b,ee);dt(s.TEXTURE_CUBE_MAP,b);let Rt;if($t){q&&Ut&&i.texStorage2D(s.TEXTURE_CUBE_MAP,kt,me,ee.width,ee.height);for(let Et=0;Et<6;Et++){Rt=Bt[Et].mipmaps;for(let jt=0;jt<Rt.length;jt++){const ue=Rt[jt];b.format!==Ri?Zt!==null?q?Nt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,ue.width,ue.height,Zt,ue.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,ue.width,ue.height,Zt,Pt,ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,me,ue.width,ue.height,0,Zt,Pt,ue.data)}}}else{if(Rt=b.mipmaps,q&&Ut){Rt.length>0&&kt++;const Et=De(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,kt,me,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(wt){q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Bt[Et].width,Bt[Et].height,Zt,Pt,Bt[Et].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,me,Bt[Et].width,Bt[Et].height,0,Zt,Pt,Bt[Et].data);for(let jt=0;jt<Rt.length;jt++){const ze=Rt[jt].image[Et].image;q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,ze.width,ze.height,Zt,Pt,ze.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,me,ze.width,ze.height,0,Zt,Pt,ze.data)}}else{q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Zt,Pt,Bt[Et]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,me,Zt,Pt,Bt[Et]);for(let jt=0;jt<Rt.length;jt++){const ue=Rt[jt];q?Nt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,Zt,Pt,ue.image[Et]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,me,Zt,Pt,ue.image[Et])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),ft.__version=St.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function xt(B,b,nt,_t,St,ft){const Vt=c.convert(nt.format,nt.colorSpace),Lt=c.convert(nt.type),Kt=P(nt.internalFormat,Vt,Lt,nt.colorSpace),$t=r.get(b),wt=r.get(nt);if(wt.__renderTarget=b,!$t.__hasExternalTextures){const Bt=Math.max(1,b.width>>ft),ee=Math.max(1,b.height>>ft);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,ft,Kt,Bt,ee,b.depth,0,Vt,Lt,null):i.texImage2D(St,ft,Kt,Bt,ee,0,Vt,Lt,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),Ht(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,St,wt.__webglTexture,0,pe(b)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,St,wt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(B,b,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,B),b.depthBuffer){const _t=b.depthTexture,St=_t&&_t.isDepthTexture?_t.type:null,ft=D(b.stencilBuffer,St),Vt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=pe(b);Ht(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,ft,b.width,b.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,B)}else{const _t=b.textures;for(let St=0;St<_t.length;St++){const ft=_t[St],Vt=c.convert(ft.format,ft.colorSpace),Lt=c.convert(ft.type),Kt=P(ft.internalFormat,Vt,Lt,ft.colorSpace),$t=pe(b);nt&&Ht(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Kt,b.width,b.height):Ht(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Kt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(B,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(b.depthTexture);_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at(b.depthTexture,0);const St=_t.__webglTexture,ft=pe(b);if(b.depthTexture.format===rl)Ht(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(b.depthTexture.format===sl)Ht(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function de(B){const b=r.get(B),nt=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){const _t=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",St)};_t.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=_t}if(B.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const _t=B.texture.mipmaps;_t&&_t.length>0?Gt(b.__webglFramebuffer[0],B):Gt(b.__webglFramebuffer,B)}else if(nt){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=s.createRenderbuffer(),Tt(b.__webglDepthbuffer[_t],B,!1);else{const St=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ft)}}else{const _t=B.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Tt(b.__webglDepthbuffer,B,!1);else{const St=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(B,b,nt){const _t=r.get(B);b!==void 0&&xt(_t.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&de(B)}function H(B){const b=B.texture,nt=r.get(B),_t=r.get(b);B.addEventListener("dispose",U);const St=B.textures,ft=B.isWebGLCubeRenderTarget===!0,Vt=St.length>1;if(Vt||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=b.version,f.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Lt]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)nt.__webglFramebuffer[Lt][Kt]=s.createFramebuffer()}else nt.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)nt.__webglFramebuffer[Lt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let Lt=0,Kt=St.length;Lt<Kt;Lt++){const $t=r.get(St[Lt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),f.memory.textures++)}if(B.samples>0&&Ht(B)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Kt=St[Lt];nt.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Lt]);const $t=c.convert(Kt.format,Kt.colorSpace),wt=c.convert(Kt.type),Bt=P(Kt.internalFormat,$t,wt,Kt.colorSpace,B.isXRRenderTarget===!0),ee=pe(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Bt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(nt.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),dt(s.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)xt(nt.__webglFramebuffer[Lt][Kt],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Kt);else xt(nt.__webglFramebuffer[Lt],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Lt=0,Kt=St.length;Lt<Kt;Lt++){const $t=St[Lt],wt=r.get($t);let Bt=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Bt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Bt,wt.__webglTexture),dt(Bt,$t),xt(nt.__webglFramebuffer,B,$t,s.COLOR_ATTACHMENT0+Lt,Bt,0),y($t)&&_(Bt)}i.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Lt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,_t.__webglTexture),dt(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)xt(nt.__webglFramebuffer[Kt],B,b,s.COLOR_ATTACHMENT0,Lt,Kt);else xt(nt.__webglFramebuffer,B,b,s.COLOR_ATTACHMENT0,Lt,0);y(b)&&_(Lt),i.unbindTexture()}B.depthBuffer&&de(B)}function ne(B){const b=B.textures;for(let nt=0,_t=b.length;nt<_t;nt++){const St=b[nt];if(y(St)){const ft=V(B),Vt=r.get(St).__webglTexture;i.bindTexture(ft,Vt),_(ft),i.unbindTexture()}}}const Ot=[],he=[];function Ct(B){if(B.samples>0){if(Ht(B)===!1){const b=B.textures,nt=B.width,_t=B.height;let St=s.COLOR_BUFFER_BIT;const ft=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=r.get(B),Lt=b.length>1;if(Lt)for(let $t=0;$t<b.length;$t++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Kt=B.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let $t=0;$t<b.length;$t++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[$t]);const wt=r.get(b[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,wt,0)}s.blitFramebuffer(0,0,nt,_t,0,0,nt,_t,St,s.NEAREST),m===!0&&(Ot.length=0,he.length=0,Ot.push(s.COLOR_ATTACHMENT0+$t),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ot.push(ft),he.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let $t=0;$t<b.length;$t++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[$t]);const wt=r.get(b[$t]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,wt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const b=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function pe(B){return Math.min(l.maxSamples,B.samples)}function Ht(B){const b=r.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function re(B){const b=f.render.frame;g.get(B)!==b&&(g.set(B,b),B.update())}function Fe(B,b){const nt=B.colorSpace,_t=B.format,St=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||nt!==ks&&nt!==Ya&&(Oe.getTransfer(nt)===Xe?(_t!==Ri||St!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function De(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=Y,this.setTexture2D=at,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=I,this.rebindTextures=At,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ht}function AA(s,t){function i(r,l=Ya){let c;const f=Oe.getTransfer(l);if(r===Vi)return s.UNSIGNED_BYTE;if(r===tp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ep)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return s.BYTE;if(r===gv)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===$h)return s.INT;if(r===Cr)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===ll)return s.HALF_FLOAT;if(r===vv)return s.ALPHA;if(r===xv)return s.RGB;if(r===Ri)return s.RGBA;if(r===rl)return s.DEPTH_COMPONENT;if(r===sl)return s.DEPTH_STENCIL;if(r===yv)return s.RED;if(r===np)return s.RED_INTEGER;if(r===Sv)return s.RG;if(r===ip)return s.RG_INTEGER;if(r===ap)return s.RGBA_INTEGER;if(r===Kc||r===Qc||r===Jc||r===$c)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gh||r===_h||r===vh||r===xh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh||r===Sh||r===Mh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yh||r===Sh)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Mh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Eh||r===bh||r===Th||r===Ah||r===wh||r===Rh||r===Ch||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Eh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Th)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ch)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ph)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tu||r===Bh||r===Ih)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===tu)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mv||r===Fh||r===Hh||r===Gh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===tu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class Wv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
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

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Wv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ja({vertexShader:wA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qe(new cu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DA extends Ws{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,S=null,E=null;const A=new CA,y={},_=i.getContextAttributes();let V=null,P=null;const D=[],N=[],F=new ve;let U=null;const z=new Yn;z.viewport=new qe;const w=new Yn;w.viewport=new qe;const R=[z,w],G=new KM;let Y=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ut=D[$];return ut===void 0&&(ut=new Vd,D[$]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function($){let ut=D[$];return ut===void 0&&(ut=new Vd,D[$]=ut),ut.getGripSpace()},this.getHand=function($){let ut=D[$];return ut===void 0&&(ut=new Vd,D[$]=ut),ut.getHandSpace()};function rt($){const ut=N.indexOf($.inputSource);if(ut===-1)return;const ht=D[ut];ht!==void 0&&(ht.update($.inputSource,$.frame,p||f),ht.dispatchEvent({type:$.type,data:$.inputSource}))}function at(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",at),l.removeEventListener("inputsourceschange",O);for(let $=0;$<D.length;$++){const ut=N[$];ut!==null&&(N[$]=null,D[$].disconnect(ut))}Y=null,tt=null,A.reset();for(const $ in y)delete y[$];t.setRenderTarget(V),S=null,x=null,v=null,l=null,P=null,bt.stop(),r.isPresenting=!1,t.setPixelRatio(U),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(V=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",at),l.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await i.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,xt=null,Tt=null;_.depth&&(Tt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ht=_.stencil?sl:rl,xt=_.stencil?al:Cr);const Gt={colorFormat:i.RGBA8,depthFormat:Tt,scaleFactor:c};x=v.createProjectionLayer(Gt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new Dr(x.textureWidth,x.textureHeight,{format:Ri,type:Vi,depthTexture:new zv(x.textureWidth,x.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ht={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,ht),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Dr(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),bt.setContext(l),bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function O($){for(let ut=0;ut<$.removed.length;ut++){const ht=$.removed[ut],xt=N.indexOf(ht);xt>=0&&(N[xt]=null,D[xt].disconnect(ht))}for(let ut=0;ut<$.added.length;ut++){const ht=$.added[ut];let xt=N.indexOf(ht);if(xt===-1){for(let Gt=0;Gt<D.length;Gt++)if(Gt>=N.length){N.push(ht),xt=Gt;break}else if(N[Gt]===null){N[Gt]=ht,xt=Gt;break}if(xt===-1)break}const Tt=D[xt];Tt&&Tt.connect(ht)}}const X=new J,I=new J;function pt($,ut,ht){X.setFromMatrixPosition(ut.matrixWorld),I.setFromMatrixPosition(ht.matrixWorld);const xt=X.distanceTo(I),Tt=ut.projectionMatrix.elements,Gt=ht.projectionMatrix.elements,de=Tt[14]/(Tt[10]-1),At=Tt[14]/(Tt[10]+1),H=(Tt[9]+1)/Tt[5],ne=(Tt[9]-1)/Tt[5],Ot=(Tt[8]-1)/Tt[0],he=(Gt[8]+1)/Gt[0],Ct=de*Ot,pe=de*he,Ht=xt/(-Ot+he),re=Ht*-Ot;if(ut.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(re),$.translateZ(Ht),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Fe=de+Ht,De=At+Ht,B=Ct-re,b=pe+(xt-re),nt=H*At/De*Fe,_t=ne*At/De*Fe;$.projectionMatrix.makePerspective(B,b,nt,_t,Fe,De),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function L($,ut){ut===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ut.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ut=$.near,ht=$.far;A.texture!==null&&(A.depthNear>0&&(ut=A.depthNear),A.depthFar>0&&(ht=A.depthFar)),G.near=w.near=z.near=ut,G.far=w.far=z.far=ht,(Y!==G.near||tt!==G.far)&&(l.updateRenderState({depthNear:G.near,depthFar:G.far}),Y=G.near,tt=G.far),G.layers.mask=$.layers.mask|6,z.layers.mask=G.layers.mask&3,w.layers.mask=G.layers.mask&5;const xt=$.parent,Tt=G.cameras;L(G,xt);for(let Gt=0;Gt<Tt.length;Gt++)L(Tt[Gt],xt);Tt.length===2?pt(G,z,w):G.projectionMatrix.copy(z.projectionMatrix),Z($,G,xt)};function Z($,ut,ht){ht===null?$.matrix.copy(ut.matrixWorld):($.matrix.copy(ht.matrixWorld),$.matrix.invert(),$.matrix.multiply(ut.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=kh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(G)},this.getCameraTexture=function($){return y[$]};let dt=null;function gt($,ut){if(g=ut.getViewerPose(p||f),E=ut,g!==null){const ht=g.views;S!==null&&(t.setRenderTargetFramebuffer(P,S.framebuffer),t.setRenderTarget(P));let xt=!1;ht.length!==G.cameras.length&&(G.cameras.length=0,xt=!0);for(let At=0;At<ht.length;At++){const H=ht[At];let ne=null;if(S!==null)ne=S.getViewport(H);else{const he=v.getViewSubImage(x,H);ne=he.viewport,At===0&&(t.setRenderTargetTextures(P,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(P))}let Ot=R[At];Ot===void 0&&(Ot=new Yn,Ot.layers.enable(At),Ot.viewport=new qe,R[At]=Ot),Ot.matrix.fromArray(H.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(H.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(ne.x,ne.y,ne.width,ne.height),At===0&&(G.matrix.copy(Ot.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),xt===!0&&G.cameras.push(Ot)}const Tt=l.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const At=v.getDepthInformation(ht[0]);At&&At.isValid&&At.texture&&A.init(At,l.renderState)}if(Tt&&Tt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let At=0;At<ht.length;At++){const H=ht[At].camera;if(H){let ne=y[H];ne||(ne=new Wv,y[H]=ne);const Ot=v.getCameraImage(H);ne.sourceTexture=Ot}}}for(let ht=0;ht<D.length;ht++){const xt=N[ht],Tt=D[ht];xt!==null&&Tt!==void 0&&Tt.update(xt,ut,p||f)}dt&&dt($,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),E=null}const bt=new Hv;bt.setAnimationLoop(gt),this.setAnimationLoop=function($){dt=$},this.dispose=function(){}}}const Sr=new ki,UA=new Je;function LA(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Dv(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,V,P,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,D)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),A(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,V,P):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===An&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===An&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const V=t.get(_),P=V.envMap,D=V.envMapRotation;P&&(y.envMap.value=P,Sr.copy(D),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),y.envMapRotation.value.setFromMatrix4(UA.makeRotationFromEuler(Sr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,V,P){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*V,y.scale.value=P*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,V){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=V.texture,y.transmissionSamplerSize.value.set(V.width,V.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const V=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(V.matrixWorld),y.nearDistance.value=V.shadow.camera.near,y.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function NA(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(V,P){const D=P.program;r.uniformBlockBinding(V,D)}function p(V,P){let D=l[V.id];D===void 0&&(E(V),D=g(V),l[V.id]=D,V.addEventListener("dispose",y));const N=P.program;r.updateUBOMapping(V,N);const F=t.render.frame;c[V.id]!==F&&(x(V),c[V.id]=F)}function g(V){const P=v();V.__bindingPointIndex=P;const D=s.createBuffer(),N=V.__size,F=V.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,N,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function v(){for(let V=0;V<h;V++)if(f.indexOf(V)===-1)return f.push(V),V;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(V){const P=l[V.id],D=V.uniforms,N=V.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,U=D.length;F<U;F++){const z=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,R=z.length;w<R;w++){const G=z[w];if(S(G,F,w,N)===!0){const Y=G.__offset,tt=Array.isArray(G.value)?G.value:[G.value];let rt=0;for(let at=0;at<tt.length;at++){const O=tt[at],X=A(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,Y+rt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,rt),rt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(V,P,D,N){const F=V.value,U=P+"_"+D;if(N[U]===void 0)return typeof F=="number"||typeof F=="boolean"?N[U]=F:N[U]=F.clone(),!0;{const z=N[U];if(typeof F=="number"||typeof F=="boolean"){if(z!==F)return N[U]=F,!0}else if(z.equals(F)===!1)return z.copy(F),!0}return!1}function E(V){const P=V.uniforms;let D=0;const N=16;for(let U=0,z=P.length;U<z;U++){const w=Array.isArray(P[U])?P[U]:[P[U]];for(let R=0,G=w.length;R<G;R++){const Y=w[R],tt=Array.isArray(Y.value)?Y.value:[Y.value];for(let rt=0,at=tt.length;rt<at;rt++){const O=tt[rt],X=A(O),I=D%N,pt=I%X.boundary,L=I+pt;D+=pt,L!==0&&N-L<X.storage&&(D+=N-L),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=X.storage}}}const F=D%N;return F>0&&(D+=N-F),V.__size=D,V.__cache={},this}function A(V){const P={boundary:0,storage:0};return typeof V=="number"||typeof V=="boolean"?(P.boundary=4,P.storage=4):V.isVector2?(P.boundary=8,P.storage=8):V.isVector3||V.isColor?(P.boundary=16,P.storage=12):V.isVector4?(P.boundary=16,P.storage=16):V.isMatrix3?(P.boundary=48,P.storage=48):V.isMatrix4?(P.boundary=64,P.storage=64):V.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",V),P}function y(V){const P=V.target;P.removeEventListener("dispose",y);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function _(){for(const V in l)s.deleteBuffer(l[V]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class gp{constructor(t={}){const{canvas:i=dM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const V=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let N=!1;this._outputColorSpace=_i;let F=0,U=0,z=null,w=-1,R=null;const G=new qe,Y=new qe;let tt=null;const rt=new fe(0);let at=0,O=i.width,X=i.height,I=1,pt=null,L=null;const Z=new qe(0,0,O,X),dt=new qe(0,0,O,X);let gt=!1;const bt=new up;let $=!1,ut=!1;const ht=new Je,xt=new J,Tt=new qe,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function At(){return z===null?I:1}let H=r;function ne(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qh}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),H===null){const j="webgl2";if(H=ne(j,C),H===null)throw ne(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ot,he,Ct,pe,Ht,re,Fe,De,B,b,nt,_t,St,ft,Vt,Lt,Kt,$t,wt,Bt,ee,Zt,Pt,me;function q(){Ot=new X1(H),Ot.init(),Zt=new AA(H,Ot),he=new B1(H,Ot,t,Zt),Ct=new bA(H,Ot),he.reversedDepthBuffer&&x&&Ct.buffers.depth.setReversed(!0),pe=new Y1(H),Ht=new fA,re=new TA(H,Ot,Ct,Ht,he,Zt,pe),Fe=new F1(D),De=new k1(D),B=new $M(H),Pt=new P1(H,B),b=new W1(H,B,pe,Pt),nt=new Z1(H,b,B,pe),wt=new j1(H,he,re),Lt=new I1(Ht),_t=new uA(D,Fe,De,Ot,he,Pt,Lt),St=new LA(D,Ht),ft=new hA,Vt=new xA(Ot),$t=new O1(D,Fe,De,Ct,nt,S,m),Kt=new MA(D,nt,he),me=new NA(H,pe,he,Ct),Bt=new z1(H,Ot,pe),ee=new q1(H,Ot,pe),pe.programs=_t.programs,D.capabilities=he,D.extensions=Ot,D.properties=Ht,D.renderLists=ft,D.shadowMap=Kt,D.state=Ct,D.info=pe}q();const Ut=new DA(D,H);this.xr=Ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(O,X,!1))},this.getSize=function(C){return C.set(O,X)},this.setSize=function(C,j,lt=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,X=j,i.width=Math.floor(C*I),i.height=Math.floor(j*I),lt===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(O*I,X*I).floor()},this.setDrawingBufferSize=function(C,j,lt){O=C,X=j,I=lt,i.width=Math.floor(C*lt),i.height=Math.floor(j*lt),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,j,lt,ct){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,j,lt,ct),Ct.viewport(G.copy(Z).multiplyScalar(I).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,j,lt,ct){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,j,lt,ct),Ct.scissor(Y.copy(dt).multiplyScalar(I).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(C){Ct.setScissorTest(gt=C)},this.setOpaqueSort=function(C){pt=C},this.setTransparentSort=function(C){L=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,lt=!0){let ct=0;if(C){let Q=!1;if(z!==null){const Dt=z.texture.format;Q=Dt===ap||Dt===ip||Dt===np}if(Q){const Dt=z.texture.type,zt=Dt===Vi||Dt===Cr||Dt===il||Dt===al||Dt===tp||Dt===ep,Xt=$t.getClearColor(),It=$t.getClearAlpha(),ae=Xt.r,oe=Xt.g,Qt=Xt.b;zt?(E[0]=ae,E[1]=oe,E[2]=Qt,E[3]=It,H.clearBufferuiv(H.COLOR,0,E)):(A[0]=ae,A[1]=oe,A[2]=Qt,A[3]=It,H.clearBufferiv(H.COLOR,0,A))}else ct|=H.COLOR_BUFFER_BIT}j&&(ct|=H.DEPTH_BUFFER_BIT),lt&&(ct|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),$t.dispose(),ft.dispose(),Vt.dispose(),Ht.dispose(),Fe.dispose(),De.dispose(),nt.dispose(),Pt.dispose(),me.dispose(),_t.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",pn),Ut.removeEventListener("sessionend",mn),nn.stop()};function Nt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=pe.autoReset,j=Kt.enabled,lt=Kt.autoUpdate,ct=Kt.needsUpdate,Q=Kt.type;q(),pe.autoReset=C,Kt.enabled=j,Kt.autoUpdate=lt,Kt.needsUpdate=ct,Kt.type=Q}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Et(C){const j=C.target;j.removeEventListener("dispose",Et),jt(j)}function jt(C){ue(C),Ht.remove(C)}function ue(C){const j=Ht.get(C).programs;j!==void 0&&(j.forEach(function(lt){_t.releaseProgram(lt)}),C.isShaderMaterial&&_t.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,lt,ct,Q,Dt){j===null&&(j=Gt);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,Xt=ma(C,j,lt,ct,Q);Ct.setMaterial(ct,zt);let It=lt.index,ae=1;if(ct.wireframe===!0){if(It=b.getWireframeAttribute(lt),It===void 0)return;ae=2}const oe=lt.drawRange,Qt=lt.attributes.position;let xe=oe.start*ae,Le=(oe.start+oe.count)*ae;Dt!==null&&(xe=Math.max(xe,Dt.start*ae),Le=Math.min(Le,(Dt.start+Dt.count)*ae)),It!==null?(xe=Math.max(xe,0),Le=Math.min(Le,It.count)):Qt!=null&&(xe=Math.max(xe,0),Le=Math.min(Le,Qt.count));const $e=Le-xe;if($e<0||$e===1/0)return;Pt.setup(Q,ct,Xt,lt,It);let He,ye=Bt;if(It!==null&&(He=B.get(It),ye=ee,ye.setIndex(He)),Q.isMesh)ct.wireframe===!0?(Ct.setLineWidth(ct.wireframeLinewidth*At()),ye.setMode(H.LINES)):ye.setMode(H.TRIANGLES);else if(Q.isLine){let ie=ct.linewidth;ie===void 0&&(ie=1),Ct.setLineWidth(ie*At()),Q.isLineSegments?ye.setMode(H.LINES):Q.isLineLoop?ye.setMode(H.LINE_LOOP):ye.setMode(H.LINE_STRIP)}else Q.isPoints?ye.setMode(H.POINTS):Q.isSprite&&ye.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ye.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ie=Q._multiDrawStarts,Ke=Q._multiDrawCounts,Te=Q._multiDrawCount,On=It?B.get(It).bytesPerElement:1,yi=Ht.get(ct).currentProgram.getUniforms();for(let Vn=0;Vn<Te;Vn++)yi.setValue(H,"_gl_DrawID",Vn),ye.render(ie[Vn]/On,Ke[Vn])}else if(Q.isInstancedMesh)ye.renderInstances(xe,$e,Q.count);else if(lt.isInstancedBufferGeometry){const ie=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ke=Math.min(lt.instanceCount,ie);ye.renderInstances(xe,$e,Ke)}else ye.render(xe,$e)};function ze(C,j,lt){C.transparent===!0&&C.side===wi&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,Ui(C,j,lt),C.side=Qa,C.needsUpdate=!0,Ui(C,j,lt),C.side=wi):Ui(C,j,lt)}this.compile=function(C,j,lt=null){lt===null&&(lt=C),_=Vt.get(lt),_.init(j),P.push(_),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),C!==lt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const ct=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Dt=Q.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Xt=Dt[zt];ze(Xt,lt,Q),ct.add(Xt)}else ze(Dt,lt,Q),ct.add(Dt)}),_=P.pop(),ct},this.compileAsync=function(C,j,lt=null){const ct=this.compile(C,j,lt);return new Promise(Q=>{function Dt(){if(ct.forEach(function(zt){Ht.get(zt).currentProgram.isReady()&&ct.delete(zt)}),ct.size===0){Q(C);return}setTimeout(Dt,10)}Ot.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ue=null;function xi(C){Ue&&Ue(C)}function pn(){nn.stop()}function mn(){nn.start()}const nn=new Hv;nn.setAnimationLoop(xi),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(C){Ue=C,Ut.setAnimationLoop(C),C===null?nn.stop():nn.start()},Ut.addEventListener("sessionstart",pn),Ut.addEventListener("sessionend",mn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(j),j=Ut.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,j,z),_=Vt.get(C,P.length),_.init(j),P.push(_),ht.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),bt.setFromProjectionMatrix(ht,Gi,j.reversedDepth),ut=this.localClippingEnabled,$=Lt.init(this.clippingPlanes,ut),y=ft.get(C,V.length),y.init(),V.push(y),Ut.enabled===!0&&Ut.isPresenting===!0){const Dt=D.xr.getDepthSensingMesh();Dt!==null&&Di(Dt,j,-1/0,D.sortObjects)}Di(C,j,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(pt,L),de=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,de&&$t.addToRenderList(y,C),this.info.render.frame++,$===!0&&Lt.beginShadows();const lt=_.state.shadowsArray;Kt.render(lt,C,j),$===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=y.opaque,Q=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Dt=j.cameras;if(Q.length>0)for(let zt=0,Xt=Dt.length;zt<Xt;zt++){const It=Dt[zt];hl(ct,Q,C,It)}de&&$t.render(C);for(let zt=0,Xt=Dt.length;zt<Xt;zt++){const It=Dt[zt];Lr(y,C,It,It.viewport)}}else Q.length>0&&hl(ct,Q,C,j),de&&$t.render(C),Lr(y,C,j);z!==null&&U===0&&(re.updateMultisampleRenderTarget(z),re.updateRenderTargetMipmap(z)),C.isScene===!0&&C.onAfterRender(D,C,j),Pt.resetDefaultState(),w=-1,R=null,P.pop(),P.length>0?(_=P[P.length-1],$===!0&&Lt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,V.pop(),V.length>0?y=V[V.length-1]:y=null};function Di(C,j,lt,ct){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||bt.intersectsSprite(C)){ct&&Tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const zt=nt.update(C),Xt=C.material;Xt.visible&&y.push(C,zt,Xt,lt,Tt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||bt.intersectsObject(C))){const zt=nt.update(C),Xt=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Tt.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Tt.copy(zt.boundingSphere.center)),Tt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(Xt)){const It=zt.groups;for(let ae=0,oe=It.length;ae<oe;ae++){const Qt=It[ae],xe=Xt[Qt.materialIndex];xe&&xe.visible&&y.push(C,zt,xe,lt,Tt.z,Qt)}}else Xt.visible&&y.push(C,zt,Xt,lt,Tt.z,null)}}const Dt=C.children;for(let zt=0,Xt=Dt.length;zt<Xt;zt++)Di(Dt[zt],j,lt,ct)}function Lr(C,j,lt,ct){const Q=C.opaque,Dt=C.transmissive,zt=C.transparent;_.setupLightsView(lt),$===!0&&Lt.setGlobalState(D.clippingPlanes,lt),ct&&Ct.viewport(G.copy(ct)),Q.length>0&&Nr(Q,j,lt),Dt.length>0&&Nr(Dt,j,lt),zt.length>0&&Nr(zt,j,lt),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function hl(C,j,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ct.id]===void 0&&(_.state.transmissionRenderTarget[ct.id]=new Dr(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?ll:Vi,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Dt=_.state.transmissionRenderTarget[ct.id],zt=ct.viewport||G;Dt.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Xt=D.getRenderTarget(),It=D.getActiveCubeFace(),ae=D.getActiveMipmapLevel();D.setRenderTarget(Dt),D.getClearColor(rt),at=D.getClearAlpha(),at<1&&D.setClearColor(16777215,.5),D.clear(),de&&$t.render(lt);const oe=D.toneMapping;D.toneMapping=Za;const Qt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),_.setupLightsView(ct),$===!0&&Lt.setGlobalState(D.clippingPlanes,ct),Nr(C,lt,ct),re.updateMultisampleRenderTarget(Dt),re.updateRenderTargetMipmap(Dt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Le=0,$e=j.length;Le<$e;Le++){const He=j[Le],ye=He.object,ie=He.geometry,Ke=He.material,Te=He.group;if(Ke.side===wi&&ye.layers.test(ct.layers)){const On=Ke.side;Ke.side=An,Ke.needsUpdate=!0,Zs(ye,lt,ct,ie,Ke,Te),Ke.side=On,Ke.needsUpdate=!0,xe=!0}}xe===!0&&(re.updateMultisampleRenderTarget(Dt),re.updateRenderTargetMipmap(Dt))}D.setRenderTarget(Xt,It,ae),D.setClearColor(rt,at),Qt!==void 0&&(ct.viewport=Qt),D.toneMapping=oe}function Nr(C,j,lt){const ct=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Dt=C.length;Q<Dt;Q++){const zt=C[Q],Xt=zt.object,It=zt.geometry,ae=zt.group;let oe=zt.material;oe.allowOverride===!0&&ct!==null&&(oe=ct),Xt.layers.test(lt.layers)&&Zs(Xt,j,lt,It,oe,ae)}}function Zs(C,j,lt,ct,Q,Dt){C.onBeforeRender(D,j,lt,ct,Q,Dt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(D,j,lt,ct,C,Dt),Q.transparent===!0&&Q.side===wi&&Q.forceSinglePass===!1?(Q.side=An,Q.needsUpdate=!0,D.renderBufferDirect(lt,j,ct,Q,C,Dt),Q.side=Qa,Q.needsUpdate=!0,D.renderBufferDirect(lt,j,ct,Q,C,Dt),Q.side=wi):D.renderBufferDirect(lt,j,ct,Q,C,Dt),C.onAfterRender(D,j,lt,ct,Q,Dt)}function Ui(C,j,lt){j.isScene!==!0&&(j=Gt);const ct=Ht.get(C),Q=_.state.lights,Dt=_.state.shadowsArray,zt=Q.state.version,Xt=_t.getParameters(C,Q.state,Dt,j,lt),It=_t.getProgramCacheKey(Xt);let ae=ct.programs;ct.environment=C.isMeshStandardMaterial?j.environment:null,ct.fog=j.fog,ct.envMap=(C.isMeshStandardMaterial?De:Fe).get(C.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ae===void 0&&(C.addEventListener("dispose",Et),ae=new Map,ct.programs=ae);let oe=ae.get(It);if(oe!==void 0){if(ct.currentProgram===oe&&ct.lightsStateVersion===zt)return Xi(C,Xt),oe}else Xt.uniforms=_t.getUniforms(C),C.onBeforeCompile(Xt,D),oe=_t.acquireProgram(Xt,It),ae.set(It,oe),ct.uniforms=Xt.uniforms;const Qt=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qt.clippingPlanes=Lt.uniform),Xi(C,Xt),ct.needsLights=ga(C),ct.lightsStateVersion=zt,ct.needsLights&&(Qt.ambientLightColor.value=Q.state.ambient,Qt.lightProbe.value=Q.state.probe,Qt.directionalLights.value=Q.state.directional,Qt.directionalLightShadows.value=Q.state.directionalShadow,Qt.spotLights.value=Q.state.spot,Qt.spotLightShadows.value=Q.state.spotShadow,Qt.rectAreaLights.value=Q.state.rectArea,Qt.ltc_1.value=Q.state.rectAreaLTC1,Qt.ltc_2.value=Q.state.rectAreaLTC2,Qt.pointLights.value=Q.state.point,Qt.pointLightShadows.value=Q.state.pointShadow,Qt.hemisphereLights.value=Q.state.hemi,Qt.directionalShadowMap.value=Q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qt.spotShadowMap.value=Q.state.spotShadowMap,Qt.spotLightMatrix.value=Q.state.spotLightMatrix,Qt.spotLightMap.value=Q.state.spotLightMap,Qt.pointShadowMap.value=Q.state.pointShadowMap,Qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=oe,ct.uniformsList=null,oe}function Or(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=nu.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Xi(C,j){const lt=Ht.get(C);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function ma(C,j,lt,ct,Q){j.isScene!==!0&&(j=Gt),re.resetTextureUnits();const Dt=j.fog,zt=ct.isMeshStandardMaterial?j.environment:null,Xt=z===null?D.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ks,It=(ct.isMeshStandardMaterial?De:Fe).get(ct.envMap||zt),ae=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Qt=!!lt.morphAttributes.position,xe=!!lt.morphAttributes.normal,Le=!!lt.morphAttributes.color;let $e=Za;ct.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&($e=D.toneMapping);const He=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ye=He!==void 0?He.length:0,ie=Ht.get(ct),Ke=_.state.lights;if($===!0&&(ut===!0||C!==R)){const an=C===R&&ct.id===w;Lt.setState(ct,C,an)}let Te=!1;ct.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Ke.state.version||ie.outputColorSpace!==Xt||Q.isBatchedMesh&&ie.batching===!1||!Q.isBatchedMesh&&ie.batching===!0||Q.isBatchedMesh&&ie.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ie.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ie.instancing===!1||!Q.isInstancedMesh&&ie.instancing===!0||Q.isSkinnedMesh&&ie.skinning===!1||!Q.isSkinnedMesh&&ie.skinning===!0||Q.isInstancedMesh&&ie.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ie.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ie.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ie.instancingMorph===!1&&Q.morphTexture!==null||ie.envMap!==It||ct.fog===!0&&ie.fog!==Dt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Lt.numPlanes||ie.numIntersection!==Lt.numIntersection)||ie.vertexAlphas!==ae||ie.vertexTangents!==oe||ie.morphTargets!==Qt||ie.morphNormals!==xe||ie.morphColors!==Le||ie.toneMapping!==$e||ie.morphTargetsCount!==ye)&&(Te=!0):(Te=!0,ie.__version=ct.version);let On=ie.currentProgram;Te===!0&&(On=Ui(ct,j,Q));let yi=!1,Vn=!1,Sn=!1;const Ye=On.getUniforms(),kn=ie.uniforms;if(Ct.useProgram(On.program)&&(yi=!0,Vn=!0,Sn=!0),ct.id!==w&&(w=ct.id,Vn=!0),yi||R!==C){Ct.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ye.setValue(H,"projectionMatrix",C.projectionMatrix),Ye.setValue(H,"viewMatrix",C.matrixWorldInverse);const Cn=Ye.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,xt.setFromMatrixPosition(C.matrixWorld)),he.logarithmicDepthBuffer&&Ye.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ye.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Vn=!0,Sn=!0)}if(Q.isSkinnedMesh){Ye.setOptional(H,Q,"bindMatrix"),Ye.setOptional(H,Q,"bindMatrixInverse");const an=Q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ye.setValue(H,"boneTexture",an.boneTexture,re))}Q.isBatchedMesh&&(Ye.setOptional(H,Q,"batchingTexture"),Ye.setValue(H,"batchingTexture",Q._matricesTexture,re),Ye.setOptional(H,Q,"batchingIdTexture"),Ye.setValue(H,"batchingIdTexture",Q._indirectTexture,re),Ye.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ye.setValue(H,"batchingColorTexture",Q._colorsTexture,re));const Pn=lt.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&wt.update(Q,lt,On),(Vn||ie.receiveShadow!==Q.receiveShadow)&&(ie.receiveShadow=Q.receiveShadow,Ye.setValue(H,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(kn.envMap.value=It,kn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&j.environment!==null&&(kn.envMapIntensity.value=j.environmentIntensity),Vn&&(Ye.setValue(H,"toneMappingExposure",D.toneMappingExposure),ie.needsLights&&$a(kn,Sn),Dt&&ct.fog===!0&&St.refreshFogUniforms(kn,Dt),St.refreshMaterialUniforms(kn,ct,I,X,_.state.transmissionRenderTarget[C.id]),nu.upload(H,Or(ie),kn,re)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(nu.upload(H,Or(ie),kn,re),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ye.setValue(H,"center",Q.center),Ye.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ye.setValue(H,"normalMatrix",Q.normalMatrix),Ye.setValue(H,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const an=ct.uniformsGroups;for(let Cn=0,Pr=an.length;Cn<Pr;Cn++){const jn=an[Cn];me.update(jn,On),me.bind(jn,On)}}return On}function $a(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ga(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,j,lt){const ct=Ht.get(C);ct.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Ht.get(C.texture).__webglTexture=j,Ht.get(C.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const lt=Ht.get(C);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const un=H.createFramebuffer();this.setRenderTarget=function(C,j=0,lt=0){z=C,F=j,U=lt;let ct=!0,Q=null,Dt=!1,zt=!1;if(C){const It=Ht.get(C);if(It.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(H.FRAMEBUFFER,null),ct=!1;else if(It.__webglFramebuffer===void 0)re.setupRenderTarget(C);else if(It.__hasExternalTextures)re.rebindTextures(C,Ht.get(C.texture).__webglTexture,Ht.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qt=C.depthTexture;if(It.__boundDepthTexture!==Qt){if(Qt!==null&&Ht.has(Qt)&&(C.width!==Qt.image.width||C.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(C)}}const ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(zt=!0);const oe=Ht.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(oe[j])?Q=oe[j][lt]:Q=oe[j],Dt=!0):C.samples>0&&re.useMultisampledRTT(C)===!1?Q=Ht.get(C).__webglMultisampledFramebuffer:Array.isArray(oe)?Q=oe[lt]:Q=oe,G.copy(C.viewport),Y.copy(C.scissor),tt=C.scissorTest}else G.copy(Z).multiplyScalar(I).floor(),Y.copy(dt).multiplyScalar(I).floor(),tt=gt;if(lt!==0&&(Q=un),Ct.bindFramebuffer(H.FRAMEBUFFER,Q)&&ct&&Ct.drawBuffers(C,Q),Ct.viewport(G),Ct.scissor(Y),Ct.setScissorTest(tt),Dt){const It=Ht.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,lt)}else if(zt){const It=j;for(let ae=0;ae<C.textures.length;ae++){const oe=Ht.get(C.textures[ae]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ae,oe.__webglTexture,lt,It)}}else if(C!==null&&lt!==0){const It=Ht.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,lt)}w=-1},this.readRenderTargetPixels=function(C,j,lt,ct,Q,Dt,zt,Xt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){Ct.bindFramebuffer(H.FRAMEBUFFER,It);try{const ae=C.textures[Xt],oe=ae.format,Qt=ae.type;if(!he.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ct&&lt>=0&&lt<=C.height-Q&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xt),H.readPixels(j,lt,ct,Q,Zt.convert(oe),Zt.convert(Qt),Dt))}finally{const ae=z!==null?Ht.get(z).__webglFramebuffer:null;Ct.bindFramebuffer(H.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(C,j,lt,ct,Q,Dt,zt,Xt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It)if(j>=0&&j<=C.width-ct&&lt>=0&&lt<=C.height-Q){Ct.bindFramebuffer(H.FRAMEBUFFER,It);const ae=C.textures[Xt],oe=ae.format,Qt=ae.type;if(!he.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.bufferData(H.PIXEL_PACK_BUFFER,Dt.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xt),H.readPixels(j,lt,ct,Q,Zt.convert(oe),Zt.convert(Qt),0);const Le=z!==null?Ht.get(z).__webglFramebuffer:null;Ct.bindFramebuffer(H.FRAMEBUFFER,Le);const $e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await hM(H,$e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Dt),H.deleteBuffer(xe),H.deleteSync($e),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,lt=0){const ct=Math.pow(2,-lt),Q=Math.floor(C.image.width*ct),Dt=Math.floor(C.image.height*ct),zt=j!==null?j.x:0,Xt=j!==null?j.y:0;re.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,zt,Xt,Q,Dt),Ct.unbindTexture()};const pl=H.createFramebuffer(),ml=H.createFramebuffer();this.copyTextureToTexture=function(C,j,lt=null,ct=null,Q=0,Dt=null){Dt===null&&(Q!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Q,Q=0):Dt=0);let zt,Xt,It,ae,oe,Qt,xe,Le,$e;const He=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(lt!==null)zt=lt.max.x-lt.min.x,Xt=lt.max.y-lt.min.y,It=lt.isBox3?lt.max.z-lt.min.z:1,ae=lt.min.x,oe=lt.min.y,Qt=lt.isBox3?lt.min.z:0;else{const Pn=Math.pow(2,-Q);zt=Math.floor(He.width*Pn),Xt=Math.floor(He.height*Pn),C.isDataArrayTexture?It=He.depth:C.isData3DTexture?It=Math.floor(He.depth*Pn):It=1,ae=0,oe=0,Qt=0}ct!==null?(xe=ct.x,Le=ct.y,$e=ct.z):(xe=0,Le=0,$e=0);const ye=Zt.convert(j.format),ie=Zt.convert(j.type);let Ke;j.isData3DTexture?(re.setTexture3D(j,0),Ke=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(re.setTexture2DArray(j,0),Ke=H.TEXTURE_2D_ARRAY):(re.setTexture2D(j,0),Ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=H.getParameter(H.UNPACK_ROW_LENGTH),On=H.getParameter(H.UNPACK_IMAGE_HEIGHT),yi=H.getParameter(H.UNPACK_SKIP_PIXELS),Vn=H.getParameter(H.UNPACK_SKIP_ROWS),Sn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,He.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,He.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ae),H.pixelStorei(H.UNPACK_SKIP_ROWS,oe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);const Ye=C.isDataArrayTexture||C.isData3DTexture,kn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Pn=Ht.get(C),an=Ht.get(j),Cn=Ht.get(Pn.__renderTarget),Pr=Ht.get(an.__renderTarget);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let jn=0;jn<It;jn++)Ye&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.get(C).__webglTexture,Q,Qt+jn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.get(j).__webglTexture,Dt,$e+jn)),H.blitFramebuffer(ae,oe,zt,Xt,xe,Le,zt,Xt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ht.has(C)){const Pn=Ht.get(C),an=Ht.get(j);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,pl),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,ml);for(let Cn=0;Cn<It;Cn++)Ye?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,Q,Qt+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,Q),kn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,an.__webglTexture,Dt,$e+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,an.__webglTexture,Dt),Q!==0?H.blitFramebuffer(ae,oe,zt,Xt,xe,Le,zt,Xt,H.COLOR_BUFFER_BIT,H.NEAREST):kn?H.copyTexSubImage3D(Ke,Dt,xe,Le,$e+Cn,ae,oe,zt,Xt):H.copyTexSubImage2D(Ke,Dt,xe,Le,ae,oe,zt,Xt);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else kn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Ke,Dt,xe,Le,$e,zt,Xt,It,ye,ie,He.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Ke,Dt,xe,Le,$e,zt,Xt,It,ye,He.data):H.texSubImage3D(Ke,Dt,xe,Le,$e,zt,Xt,It,ye,ie,He):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Dt,xe,Le,zt,Xt,ye,ie,He.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Dt,xe,Le,He.width,He.height,ye,He.data):H.texSubImage2D(H.TEXTURE_2D,Dt,xe,Le,zt,Xt,ye,ie,He);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,On),H.pixelStorei(H.UNPACK_SKIP_PIXELS,yi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Vn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Sn),Dt===0&&j.generateMipmaps&&H.generateMipmap(Ke),Ct.unbindTexture()},this.copyTextureToTexture3D=function(C,j,lt=null,ct=null,Q=0){return zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,lt,ct,Q)},this.initRenderTarget=function(C){Ht.get(C).__webglFramebuffer===void 0&&re.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?re.setTextureCube(C,0):C.isData3DTexture?re.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?re.setTexture2DArray(C,0):re.setTexture2D(C,0),Ct.unbindTexture()},this.resetState=function(){F=0,U=0,z=null,Ct.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const OA={radius_km:6371,distance_from_sun_au:1,orbital_period_earth_days:365,rotation_period_hours:23.93},PA={radius_km:1737.4,distance_from_earth_km:384400,orbital_period_earth_days:27.3,rotation_period_earth_days:27.3},zA={radius_km:3389.5,distance_from_sun_au:1.52,orbital_period_earth_days:687,rotation_period_hours:24.62},BA={radius_km:6051.8,distance_from_sun_au:.72,orbital_period_earth_days:225,rotation_period_earth_days:243},IA={radius_km:2439.7,distance_from_sun_au:.39,orbital_period_earth_days:88,rotation_period_earth_days:58.67},FA={radius_km:69911,distance_from_sun_au:5.2,orbital_period_earth_days:4333,rotation_period_hours:9.92},HA={radius_km:58232,distance_from_sun_au:9.5,orbital_period_earth_days:10759,rotation_period_hours:10.55},GA={radius_km:25362,distance_from_sun_au:19.8,orbital_period_earth_days:30687,rotation_period_hours:17.23},VA={radius_km:24622,distance_from_sun_au:30,orbital_period_earth_days:60190,rotation_period_hours:16.1},kA={Earth:OA,Moon:PA,Mars:zA,Venus:BA,Mercury:IA,Jupiter:FA,Saturn:HA,Uranus:GA,Neptune:VA},qv=Jt.forwardRef(({onLocationChange:s},t)=>{const i=Jt.useRef(null),r=Jt.useRef(null),l=Jt.useRef(null),c=Jt.useRef(null),f=Jt.useRef({}),h=Jt.useRef(null),m=Jt.useRef(0),p=Jt.useRef(0),g=Jt.useRef(150);Jt.useImperativeHandle(t,()=>({focusOnPlanet:x=>{console.log("focusOnPlanet called for:",x),console.log("Available planets:",Object.keys(f.current));const S=f.current[x];if(S&&S.mesh){console.log("Planet found:",x),console.log("Planet mesh position:",S.mesh.position),console.log("Planet data:",S.data),s&&s(x);const E=S.mesh.position.clone();console.log("Planet position:",E);let A,y,_;if(x==="Sun")A=0,y=.3,_=120;else{const P=E.x,D=E.z,N=Math.sqrt(P*P+D*D),F=Math.atan2(D,P);console.log("Planet actual position data:",{name:x,actualX:P,actualZ:D,actualDistance:N,actualAngle:F,storedDistance:S.distance,storedAngle:S.angle}),A=F+Math.PI/3,y=.2,_=Math.max(N*.4,40),console.log("Calculated target angles:",{targetTheta:A,targetPhi:y,targetDistance:_})}const V=c.current;if(V){console.log("Camera found, starting animation");const P=Math.sqrt(V.position.x*V.position.x+V.position.y*V.position.y+V.position.z*V.position.z),D=Math.atan2(V.position.z,V.position.x),N=Math.asin(V.position.y/P);console.log("Current camera state:",{currentTheta:D,currentPhi:N,currentDistance:P}),(()=>{const U=Date.now(),z=2e3,w=m.current,R=p.current,G=g.current;console.log("Starting animation from:",{startTheta:w,startPhi:R,startDistance:G},"to:",{targetTheta:A,targetPhi:y,targetDistance:_});const Y=()=>{const tt=Date.now()-U,rt=Math.min(tt/z,1),at=1-Math.pow(1-rt,3);m.current=w+(A-w)*at,p.current=R+(y-R)*at,g.current=G+(_-G)*at,console.log("Animation progress:",rt,"Current values:",{targetX:m.current,targetY:p.current,cameraDistance:g.current}),rt<1?requestAnimationFrame(Y):(m.current=A,p.current=y,g.current=_,console.log("Animation complete, final values:",{targetX:m.current,targetY:p.current,cameraDistance:g.current}))};Y()})()}else console.log("Camera not found in cameraRef.current")}else console.log("Planet not found:",x,"Available planets:",Object.keys(f.current))}}),[s]),Jt.useEffect(()=>{if(!i.current)return;const x=new lp;x.background=new fe(8),r.current=x;const S=new Gn,E=2e4,A=new Float32Array(E*3),y=new Float32Array(E*3);for(let At=0;At<E;At++){A[At*3]=(Math.random()-.5)*2500,A[At*3+1]=(Math.random()-.5)*2500,A[At*3+2]=(Math.random()-.5)*2500;const H=Math.random();H<.6?(y[At*3]=1,y[At*3+1]=1,y[At*3+2]=1):H<.8?(y[At*3]=.6,y[At*3+1]=.8,y[At*3+2]=1):H<.95?(y[At*3]=1,y[At*3+1]=1,y[At*3+2]=.7):(y[At*3]=1,y[At*3+1]=.6,y[At*3+2]=.4)}S.setAttribute("position",new cn(A,3)),S.setAttribute("color",new cn(y,3));const _=new Is({size:2,vertexColors:!0,transparent:!0,opacity:.8}),V=new nl(S,_);x.add(V);const P=V,D=new Yn(60,window.innerWidth/window.innerHeight,.1,5e3);D.position.set(0,50,150),c.current=D;const N=new gp({antialias:!0});N.setSize(window.innerWidth,window.innerHeight),N.shadowMap.enabled=!0,N.shadowMap.type=su,i.current.appendChild(N.domElement),l.current=N;const F=new pp(4210752,1.5);x.add(F);const U=new eu(16777215,2,1e3);U.position.set(0,0,0),U.castShadow=!0,U.shadow.mapSize.width=2048,U.shadow.mapSize.height=2048,x.add(U);const z=new Bv,w=new Nn(8,64,64),R=z.load("/assets/textures/sun_texture.jpg"),G=new Bi({map:R,emissive:16755200,emissiveIntensity:.3}),Y=new Qe(w,G);x.add(Y),f.current.Sun={mesh:Y,radius:8,distance:0,angle:0};const tt=50,rt=.5,at={Mercury:{color:12559728,texture:"/assets/textures/mercury_texture.jpg",emissive:3351057},Venus:{color:16767334,texture:"/assets/textures/venus_texture.png",emissive:5588019},Earth:{color:2267613,texture:"/assets/textures/earth_texture.jpg",emissive:13141},Mars:{color:15628151,texture:"/assets/textures/mars_texture.jpg",emissive:4469555},Jupiter:{color:15649962,texture:"/assets/textures/jupiter_texture.jpg",emissive:4469538},Saturn:{color:16772812,texture:"/assets/textures/saturn_texture.jpg",emissive:4469538},Uranus:{color:6741503,texture:"/assets/textures/uranus_texture.png",emissive:13124},Neptune:{color:6719743,texture:"/assets/textures/neptune_texture.jpg",emissive:8772}};Object.entries(kA).forEach(([At,H])=>{if(At==="Moon")return;const ne=Math.max(H.radius_km*rt*.001,.2),Ot=H.distance_from_sun_au*tt,he=at[At],Ct=new Nn(ne,64,64);let pe;const Ht=z.load(he.texture);pe=new Bi({map:Ht,color:he.color,emissive:he.emissive,emissiveIntensity:.8,transparent:!1,opacity:1});const re=new Qe(Ct,pe);if(re.position.x=Ot,re.castShadow=!0,re.receiveShadow=!0,x.add(re),At==="Saturn"){const _t=new fp(ne*1.2,ne*2.2,64),St=new Bi({color:12632256,side:wi,transparent:!0,opacity:.7,alphaTest:.1}),ft=new Qe(_t,St);ft.rotation.x=Math.PI/2,ft.castShadow=!0,ft.receiveShadow=!0,re.add(ft)}f.current[At]={mesh:re,data:H,distance:Ot,angle:0,radius:ne,moons:[]};const Fe=document.createElement("canvas"),De=Fe.getContext("2d");Fe.width=512,Fe.height=128,De.fillStyle="rgba(255, 255, 255, 0.9)",De.font="bold 32px Arial",De.textAlign="center",De.textBaseline="middle",De.shadowColor="rgba(0, 0, 0, 0.8)",De.shadowBlur=4,De.shadowOffsetX=2,De.shadowOffsetY=2,De.fillText(At,256,64);const B=new Pv(Fe),b=new cp({map:B,transparent:!0,alphaTest:.1}),nt=new Ov(b);nt.position.copy(re.position),nt.position.y+=ne*4,nt.scale.set(ne*12,ne*3,1),x.add(nt),f.current[At].label=nt}),v(x,f.current,z);let O=!1,X=0,I=0;m.current,p.current;let pt=g.current,L=!1,Z=5;const dt=At=>{At.preventDefault(),O=!0,L=!1,X=At.clientX,I=At.clientY},gt=At=>{if(!O)return;At.preventDefault();const H=c.current;if(H&&H.userData.focusMode)return;const ne=At.clientX-X,Ot=At.clientY-I;(Math.abs(ne)>Z||Math.abs(Ot)>Z)&&(L=!0),L&&(m.current+=ne*.005,p.current+=Ot*.005,p.current=Math.max(-Math.PI/2,Math.min(Math.PI/2,p.current)),X=At.clientX,I=At.clientY)},bt=At=>{At.preventDefault(),!L&&O&&$(At),O=!1,L=!1},$=At=>{const H=N.domElement.getBoundingClientRect(),ne=new ve;ne.x=(At.clientX-H.left)/H.width*2-1,ne.y=-((At.clientY-H.top)/H.height)*2+1;const Ot=new QM;Ot.setFromCamera(ne,D);const he=Object.values(f.current).map(pe=>pe.mesh).filter(Boolean),Ct=Ot.intersectObjects(he);if(Ct.length>0){const pe=Ct[0].object;for(const[Ht,re]of Object.entries(f.current))if(re.mesh===pe){focusOnPlanet(Ht),s&&s(Ht);break}}},ut=At=>{At.preventDefault();const H=.05;g.current+=At.deltaY*H,g.current=Math.max(10,Math.min(1e3,g.current));const ne=c.current;if(ne){const Ot=new J;ne.getWorldDirection(Ot);const Ct=new J(0,0,0).clone().sub(Ot.multiplyScalar(pt));ne.userData.focusMode||ne.position.copy(Ct)}},ht=At=>{At.touches.length===1&&(At.preventDefault(),O=!0,X=At.touches[0].clientX,I=At.touches[0].clientY)},xt=At=>{if(!O||At.touches.length!==1)return;At.preventDefault();const H=c.current;if(H&&H.userData.focusMode)return;const ne=At.touches[0].clientX-X,Ot=At.touches[0].clientY-I;m.current+=ne*.005,p.current+=Ot*.005,p.current=Math.max(-Math.PI/2,Math.min(Math.PI/2,p.current)),X=At.touches[0].clientX,I=At.touches[0].clientY},Tt=At=>{At.preventDefault(),O=!1};N.domElement.addEventListener("mousedown",dt),N.domElement.addEventListener("mousemove",gt),N.domElement.addEventListener("mouseup",bt),N.domElement.addEventListener("wheel",ut),N.domElement.addEventListener("touchstart",ht),N.domElement.addEventListener("touchmove",xt),N.domElement.addEventListener("touchend",Tt);const Gt=()=>{h.current=requestAnimationFrame(Gt),Math.random()<.001&&console.log("Animation loop ref values:",{targetX:m.current,targetY:p.current,cameraDistance:g.current}),D.userData.focusMode?D.userData.focusMode&&console.log("Animation loop: Focus mode active, skipping camera update"):(D.position.x=Math.cos(m.current)*Math.cos(p.current)*g.current,D.position.y=Math.sin(p.current)*g.current,D.position.z=Math.sin(m.current)*Math.cos(p.current)*g.current,D.lookAt(0,0,0)),P.rotation.x+=1e-4,P.rotation.y+=2e-4,Object.entries(f.current).forEach(([At,H])=>{if(At==="Sun"){H.mesh.rotation.y+=.005;return}const Ot=.002/Math.pow(H.data.distance_from_sun_au,1.5);H.angle+=Ot,H.mesh.position.x=Math.cos(H.angle)*H.distance,H.mesh.position.z=Math.sin(H.angle)*H.distance,H.label&&(H.label.position.copy(H.mesh.position),H.label.position.y+=H.radius*4);const he=At==="Venus"?-.005:.02;H.mesh.rotation.y+=he,H.moons&&H.moons.forEach(Ct=>{Ct.angle+=Ct.speed;const pe=H.mesh.position;Ct.mesh.position.x=pe.x+Math.cos(Ct.angle)*Ct.distance,Ct.mesh.position.z=pe.z+Math.sin(Ct.angle)*Ct.distance,Ct.mesh.position.y=pe.y+Math.sin(Ct.angle*.3)*Ct.distance*.05,Ct.mesh.rotation.y+=.01})}),N.render(x,D)};Gt();const de=()=>{D.aspect=window.innerWidth/window.innerHeight,D.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",de),()=>{window.removeEventListener("resize",de),N.domElement.removeEventListener("mousedown",dt),N.domElement.removeEventListener("mousemove",gt),N.domElement.removeEventListener("mouseup",bt),N.domElement.removeEventListener("wheel",ut),N.domElement.removeEventListener("touchstart",ht),N.domElement.removeEventListener("touchmove",xt),N.domElement.removeEventListener("touchend",Tt),h.current&&cancelAnimationFrame(h.current),i.current&&N.domElement&&i.current.removeChild(N.domElement),N.dispose()}},[]);function v(x,S,E){if(S.Earth){const _=new Nn(.15,32,32),V=E.load("/assets/textures/moon_texture.jpg"),P=new Bi({map:V,emissive:1118481,emissiveIntensity:.05}),D=new Qe(_,P);D.castShadow=!0,D.receiveShadow=!0,x.add(D),S.Earth.moons.push({mesh:D,distance:3,angle:0,speed:.02,name:"Moon"})}if(S.Mars){const _=new Nn(.05,16,16),V=new Bi({color:6908265}),P=new Qe(_,V);P.castShadow=!0,x.add(P),S.Mars.moons.push({mesh:P,distance:1.5,angle:0,speed:.05,name:"Phobos"});const D=.03,N=2.2,F=new Nn(D,16,16),U=new Bi({color:5592405}),z=new Qe(F,U);z.castShadow=!0,x.add(z),S.Mars.moons.push({mesh:z,distance:N,angle:Math.PI,speed:.03,name:"Deimos"})}S.Jupiter&&[{name:"Io",radius:.08,distance:4,speed:.04,color:16777113},{name:"Europa",radius:.07,distance:5,speed:.03,color:11184895},{name:"Ganymede",radius:.09,distance:6.5,speed:.025,color:8947848},{name:"Callisto",radius:.08,distance:8,speed:.02,color:4473924}].forEach((y,_)=>{const V=new Nn(y.radius,16,16),P=new Bi({color:y.color}),D=new Qe(V,P);D.castShadow=!0,x.add(D),S.Jupiter.moons.push({mesh:D,distance:y.distance,angle:_*Math.PI/2,speed:y.speed,name:y.name})}),S.Saturn&&[{name:"Titan",radius:.12,distance:8,speed:.015,color:13408614},{name:"Enceladus",radius:.04,distance:5,speed:.03,color:16777215}].forEach((y,_)=>{const V=new Nn(y.radius,16,16),P=new Bi({color:y.color}),D=new Qe(V,P);D.castShadow=!0,x.add(D),S.Saturn.moons.push({mesh:D,distance:y.distance,angle:_*Math.PI,speed:y.speed,name:y.name})})}return mt.jsx("div",{ref:i,className:"w-full h-full"})});qv.displayName="EnhancedRealisticUniverseScene";const XA=({onLocationChange:s})=>{const t=Jt.useRef(null),i=Jt.useRef(null),r=Jt.useRef(null),l=Jt.useRef(null),c=Jt.useRef(null),f=Jt.useRef(null),[h,m]=Jt.useState(!1);return Jt.useEffect(()=>{if(!t.current)return;const p=new lp;p.background=new fe(8),i.current=p;const g=new Gn,v=1e4,x=new Float32Array(v*3);for(let xt=0;xt<v;xt++)x[xt*3]=(Math.random()-.5)*2e3,x[xt*3+1]=(Math.random()-.5)*2e3,x[xt*3+2]=(Math.random()-.5)*2e3;g.setAttribute("position",new cn(x,3));const S=new Is({color:16777215,size:1,transparent:!0,opacity:.8}),E=new nl(g,S);p.add(E);const A=new Yn(75,window.innerWidth/window.innerHeight,.1,1e4);A.position.set(0,0,200),l.current=A;const y=new gp({antialias:!0});y.setSize(window.innerWidth,window.innerHeight),y.shadowMap.enabled=!0,y.shadowMap.type=su,t.current.appendChild(y.domElement),r.current=y;const _=new pp(4210752,.4);p.add(_);const V=new ZM(16777215,1);V.position.set(100,50,100),V.castShadow=!0,V.shadow.mapSize.width=2048,V.shadow.mapSize.height=2048,p.add(V);const P=new Bv,D=new Nn(50,128,128),N=P.load("/assets/textures/earth_texture.jpg",()=>{m(!0)}),F=new Bi({map:N,transparent:!1}),U=new Qe(D,F);U.castShadow=!0,U.receiveShadow=!0,p.add(U),c.current=U;const z=new Nn(52,64,64),w=new Bi({color:8900331,transparent:!0,opacity:.2,side:An}),R=new Qe(z,w);p.add(R);let G=!1,Y=0,tt=0,rt=0,at=0,O=200,X=!1,I=5;const pt=xt=>{xt.preventDefault(),G=!0,X=!1,Y=xt.clientX,tt=xt.clientY},L=xt=>{if(!G)return;xt.preventDefault();const Tt=xt.clientX-Y,Gt=xt.clientY-tt;(Math.abs(Tt)>I||Math.abs(Gt)>I)&&(X=!0),X&&(rt+=Tt*.005,at+=Gt*.005,at=Math.max(-Math.PI/2,Math.min(Math.PI/2,at)),Y=xt.clientX,tt=xt.clientY)},Z=xt=>{xt.preventDefault(),G=!1,X=!1},dt=xt=>{xt.preventDefault(),O+=xt.deltaY*.1,O=Math.max(55,Math.min(500,O)),O>300?s&&s("Space View"):O>150?s&&s("High Altitude"):O>80?s&&s("Low Earth Orbit"):s&&s("Surface View")},gt=xt=>{xt.touches.length===1&&(xt.preventDefault(),G=!0,Y=xt.touches[0].clientX,tt=xt.touches[0].clientY)},bt=xt=>{if(!G||xt.touches.length!==1)return;xt.preventDefault();const Tt=xt.touches[0].clientX-Y,Gt=xt.touches[0].clientY-tt;rt+=Tt*.005,at+=Gt*.005,at=Math.max(-Math.PI/2,Math.min(Math.PI/2,at)),Y=xt.touches[0].clientX,tt=xt.touches[0].clientY},$=xt=>{xt.preventDefault(),G=!1};y.domElement.addEventListener("mousedown",pt),y.domElement.addEventListener("mousemove",L),y.domElement.addEventListener("mouseup",Z),y.domElement.addEventListener("wheel",dt),y.domElement.addEventListener("touchstart",gt),y.domElement.addEventListener("touchmove",bt),y.domElement.addEventListener("touchend",$);const ut=()=>{f.current=requestAnimationFrame(ut),A.position.x=Math.cos(rt)*Math.cos(at)*O,A.position.y=Math.sin(at)*O,A.position.z=Math.sin(rt)*Math.cos(at)*O,A.lookAt(0,0,0),U&&(U.rotation.y+=.001,R.rotation.y+=.001),E.rotation.x+=1e-4,E.rotation.y+=2e-4,y.render(p,A)};ut();const ht=()=>{A.aspect=window.innerWidth/window.innerHeight,A.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ht),()=>{window.removeEventListener("resize",ht),y.domElement.removeEventListener("mousedown",pt),y.domElement.removeEventListener("mousemove",L),y.domElement.removeEventListener("mouseup",Z),y.domElement.removeEventListener("wheel",dt),y.domElement.removeEventListener("touchstart",gt),y.domElement.removeEventListener("touchmove",bt),y.domElement.removeEventListener("touchend",$),f.current&&cancelAnimationFrame(f.current),t.current&&y.domElement&&t.current.removeChild(y.domElement),y.dispose()}},[s]),mt.jsxs("div",{className:"relative w-full h-full",children:[mt.jsx("div",{ref:t,className:"w-full h-full"}),!h&&mt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80",children:mt.jsx("div",{className:"text-white text-lg",children:"Loading Earth..."})})]})},WA=Jt.forwardRef(({onLocationChange:s},t)=>{const i=Jt.useRef(null),r=Jt.useRef(null),l=Jt.useRef(null),c=Jt.useRef(null),f=Jt.useRef(null),h=Jt.useRef(null),[m,p]=Jt.useState(!1),[g,v]=Jt.useState(new J(0,0,0)),[x,S]=Jt.useState(!1),E={"Perseus Arm":{x:-4e3,y:200,z:-2e3,distance:2500,color:4491519},"Sagittarius Arm":{x:2500,y:-200,z:3e3,distance:2e3,color:8930559},"Orion Arm":{x:-1200,y:100,z:1500,distance:1800,color:16755268,isHome:!0},"Scutum-Centaurus Arm":{x:3500,y:150,z:-2500,distance:2200,color:4521864},"Galactic Center":{x:0,y:0,z:0,distance:800,color:16729156},"Central Bar":{x:800,y:0,z:800,distance:1200,color:16755268},"Nuclear Bulge":{x:0,y:200,z:0,distance:1e3,color:16768324},"Outer Rim":{x:0,y:300,z:6e3,distance:4e3,color:4500223},"Galactic Halo":{x:0,y:8e3,z:0,distance:8e3,color:16729258},"Orion Nebula":{x:-1100,y:50,z:1400,distance:1500,color:16737860},"Crab Nebula":{x:-2e3,y:100,z:-1500,distance:1800,color:16729190},"Andromeda Approach":{x:-8e3,y:2e3,z:8e3,distance:1e4,color:6702335},"Local Group":{x:0,y:5e3,z:0,distance:12e3,color:4521830}};Jt.useImperativeHandle(t,()=>({navigateToGalaxyRegion:N=>{console.log("Navigating to galaxy region:",N);const F=E[N];if(F&&c.current&&!x){console.log("Galaxy region found:",N,F),S(!0),s&&s(N);const U=c.current,z=U.position.clone(),w=new J(F.x,F.y,F.z);v(w);const R=z.length(),G=Math.max(F.distance,R*.7),Y=z.clone().normalize(),tt=w.clone().normalize(),at=Y.clone().lerp(tt,.4),O=w.clone().add(at.multiplyScalar(G));console.log("Smoothly moving camera from:",z,"to:",O),(()=>{const I=Date.now(),pt=2500,L=()=>{const Z=Date.now()-I,dt=Math.min(Z/pt,1),gt=1-Math.pow(1-dt,2.5);U.position.lerpVectors(z,O,gt);const bt=new J(0,0,0),$=w.clone(),ut=bt.lerp($,gt*.3);U.lookAt(ut),dt<1?requestAnimationFrame(L):(console.log("Galaxy navigation animation complete"),S(!1))};L()})()}else x?console.log("Navigation already in progress, ignoring request"):console.log("Galaxy region not found:",N,"Available regions:",Object.keys(E))}}),[s,x]),Jt.useEffect(()=>{if(!i.current)return;const N=new lp;N.background=new fe(8),r.current=N;const F=new Yn(75,window.innerWidth/window.innerHeight,.1,1e5);F.position.set(0,3e3,1e4),c.current=F;const U=new gp({antialias:!0,alpha:!0});U.setSize(window.innerWidth,window.innerHeight),U.shadowMap.enabled=!0,U.shadowMap.type=su,U.toneMapping=hv,U.toneMappingExposure=.8,i.current.appendChild(U.domElement),l.current=U;const z=new pp(4210816,.4);N.add(z);const w=new eu(16755268,3,8e3);w.position.set(0,0,0),w.castShadow=!0,N.add(w);const R=new eu(4491519,1.5,5e3);R.position.set(-3e3,100,-1500),N.add(R);const G=new eu(8930559,1.5,5e3);G.position.set(2e3,-100,2500),N.add(G),A(N),V(N),P(N),D(N);let Y=!1,tt=0,rt=0,at=0,O=0,X=1e4,I=!1,pt=5;const L=Tt=>{Tt.preventDefault(),Y=!0,I=!1,tt=Tt.clientX,rt=Tt.clientY},Z=Tt=>{if(!Y)return;Tt.preventDefault();const Gt=Tt.clientX-tt,de=Tt.clientY-rt;(Math.abs(Gt)>pt||Math.abs(de)>pt)&&(I=!0),I&&(at+=Gt*.008,O+=de*.008,tt=Tt.clientX,rt=Tt.clientY)},dt=Tt=>{Tt.preventDefault(),Y=!1,I=!1},gt=Tt=>{Tt.preventDefault(),X+=Tt.deltaY*3,X=Math.max(800,Math.min(5e4,X)),X>3e4?s&&s("Intergalactic Space"):X>15e3?s&&s("Galaxy Overview"):X>8e3?s&&s("Spiral Arms Region"):X>3e3?s&&s("Galactic Disk"):X>1500?s&&s("Inner Galaxy"):s&&s("Galactic Core")},bt=Tt=>{Tt.touches.length===1&&(Tt.preventDefault(),Y=!0,tt=Tt.touches[0].clientX,rt=Tt.touches[0].clientY)},$=Tt=>{if(!Y||Tt.touches.length!==1)return;Tt.preventDefault();const Gt=Tt.touches[0].clientX-tt,de=Tt.touches[0].clientY-rt;at+=Gt*.008,O+=de*.008,tt=Tt.touches[0].clientX,rt=Tt.touches[0].clientY},ut=Tt=>{Tt.preventDefault(),Y=!1};U.domElement.addEventListener("mousedown",L),U.domElement.addEventListener("mousemove",Z),U.domElement.addEventListener("mouseup",dt),U.domElement.addEventListener("wheel",gt),U.domElement.addEventListener("touchstart",bt),U.domElement.addEventListener("touchmove",$),U.domElement.addEventListener("touchend",ut);const ht=()=>{h.current=requestAnimationFrame(ht);const Tt=Math.cos(at)*Math.cos(O)*X,Gt=Math.sin(O)*X,de=Math.sin(at)*Math.cos(O)*X;F.position.x+=(Tt-F.position.x)*.05,F.position.y+=(Gt-F.position.y)*.05,F.position.z+=(de-F.position.z)*.05,F.lookAt(0,0,0),f.current&&(f.current.rotation.y+=8e-4,f.current.rotation.x=Math.sin(Date.now()*1e-4)*.02,f.current.rotation.z=Math.cos(Date.now()*15e-5)*.01),U.render(N,F)};ht(),p(!0);const xt=()=>{F.aspect=window.innerWidth/window.innerHeight,F.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",xt),()=>{window.removeEventListener("resize",xt),U.domElement.removeEventListener("mousedown",L),U.domElement.removeEventListener("mousemove",Z),U.domElement.removeEventListener("mouseup",dt),U.domElement.removeEventListener("wheel",gt),U.domElement.removeEventListener("touchstart",bt),U.domElement.removeEventListener("touchmove",$),U.domElement.removeEventListener("touchend",ut),h.current&&cancelAnimationFrame(h.current),i.current&&U.domElement&&i.current.removeChild(U.domElement),U.dispose()}},[s]);function A(N){const F=new tl;f.current=F;const U={count:2e5,size:.02,radius:8e3,branches:2,spin:1.5,randomness:.4,randomnessPower:3,insideColor:"#ffaa44",outsideColor:"#1b3984",barLength:2e3},z=new Gn,w=new Float32Array(U.count*3),R=new Float32Array(U.count*3),G=new Float32Array(U.count),Y=new fe(U.insideColor),tt=new fe(U.outsideColor);for(let $=0;$<U.count;$++){const ut=$*3,ht=Math.pow(Math.random(),.6)*U.radius,xt=ht*U.spin*.001,Tt=$%U.branches/U.branches*Math.PI*2;let Gt,de;if(ht<U.barLength&&Math.random()<.4){const pe=Math.PI*.3,Ht=Math.random()*U.barLength;Gt=Math.cos(pe)*Ht,de=Math.sin(pe)*Ht}else{const pe=Math.sin(ht*.002)*200;Gt=Math.cos(Tt+xt)*ht+pe,de=Math.sin(Tt+xt)*ht+pe}const At=Math.pow(Math.random(),U.randomnessPower)*(Math.random()<.5?1:-1)*U.randomness*ht,H=Math.pow(Math.random(),U.randomnessPower)*(Math.random()<.5?1:-1)*U.randomness*ht*.03,ne=Math.pow(Math.random(),U.randomnessPower)*(Math.random()<.5?1:-1)*U.randomness*ht;w[ut]=Gt+At,w[ut+1]=H,w[ut+2]=de+ne;const Ot=Y.clone(),he=Math.min(ht/U.radius,1);Ot.lerp(tt,he);const Ct=Math.random();Ct<.05?Ot.lerp(new fe("#ffffff"),.8):Ct<.15?Ot.lerp(new fe("#aabbff"),.6):Ct<.25?Ot.lerp(new fe("#ffffff"),.4):Ct<.35?Ot.lerp(new fe("#ffffaa"),.5):Ct<.55?Ot.lerp(new fe("#ffff88"),.6):Ct<.8?Ot.lerp(new fe("#ffaa44"),.7):Ot.lerp(new fe("#ff6644"),.8),R[ut]=Ot.r,R[ut+1]=Ot.g,R[ut+2]=Ot.b,G[$]=Math.random()*2+.5}z.setAttribute("position",new cn(w,3)),z.setAttribute("color",new cn(R,3)),z.setAttribute("size",new cn(G,1));const rt=new Is({size:U.size,sizeAttenuation:!0,depthWrite:!1,blending:nh,vertexColors:!0,transparent:!0,opacity:.9}),at=new nl(z,rt);F.add(at);const O=new Nn(120,64,64),X=new qa({color:16768324,transparent:!0,opacity:.95}),I=new Qe(O,X),pt=new Nn(200,32,32),L=new qa({color:16755268,transparent:!0,opacity:.3,side:An}),Z=new Qe(pt,L);F.add(I),F.add(Z);const dt=new Nn(12e3,64,64),gt=new qa({color:2245802,transparent:!0,opacity:.03,side:An}),bt=new Qe(dt,gt);F.add(bt),y(F),_(N),N.add(F)}function y(N){const F=new Gn,U=3e4,z=new Float32Array(U*3),w=new Float32Array(U*3);for(let Y=0;Y<U;Y++){const tt=Y*3,rt=Math.random()*6e3+800,at=Math.random()*Math.PI*2,O=Math.sin(at*2)*100;z[tt]=Math.cos(at)*rt+O,z[tt+1]=(Math.random()-.5)*80,z[tt+2]=Math.sin(at)*rt+O;const X=.05+Math.random()*.1;w[tt]=X,w[tt+1]=X*.8,w[tt+2]=X*.6}F.setAttribute("position",new cn(z,3)),F.setAttribute("color",new cn(w,3));const R=new Is({size:.03,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.8}),G=new nl(F,R);N.add(G)}function _(N,F){[{name:`Sagittarius A*
(Galactic Core)`,position:[0,0,0],color:"#ffdd44",size:1.2},{name:"Perseus Arm",position:[-4e3,200,-2e3],color:"#4488ff",size:1},{name:"Sagittarius Arm",position:[2500,-200,3e3],color:"#8844ff",size:1},{name:`Orion Arm
(Our Location)`,position:[-1200,100,1500],color:"#ffaa44",size:1.1},{name:"Scutum-Centaurus Arm",position:[3500,150,-2500],color:"#44ff88",size:1},{name:"Central Bar",position:[800,0,800],color:"#ffcc66",size:.9},{name:"Nuclear Bulge",position:[0,200,0],color:"#ffdd44",size:.8},{name:"Galactic Halo",position:[0,4e3,0],color:"#ff44aa",size:.7},{name:"Outer Rim",position:[0,300,6e3],color:"#44aaff",size:.8}].forEach(z=>{const w=document.createElement("canvas"),R=w.getContext("2d");w.width=512,w.height=256,R.clearRect(0,0,w.width,w.height),R.fillStyle="rgba(0, 0, 0, 0.7)",typeof R.roundRect!="function"?((I,pt,L,Z,dt)=>{R.beginPath(),R.moveTo(I+dt,pt),R.lineTo(I+L-dt,pt),R.quadraticCurveTo(I+L,pt,I+L,pt+dt),R.lineTo(I+L,pt+Z-dt),R.quadraticCurveTo(I+L,pt+Z,I+L-dt,pt+Z),R.lineTo(I+dt,pt+Z),R.quadraticCurveTo(I,pt+Z,I,pt+Z-dt),R.lineTo(I,pt+dt),R.quadraticCurveTo(I,pt,I+dt,pt),R.closePath()})(10,10,w.width-20,w.height-20,10):R.roundRect(10,10,w.width-20,w.height-20,10),R.fill(),R.fillStyle=z.color,R.font=`bold ${24*z.size}px Arial`,R.textAlign="center",R.textBaseline="middle",R.shadowColor=z.color,R.shadowBlur=10,R.shadowOffsetX=0,R.shadowOffsetY=0;const G=z.name.split(`
`),Y=30*z.size,tt=w.height/2-(G.length-1)*Y/2;G.forEach((X,I)=>{R.fillText(X,w.width/2,tt+I*Y)});const rt=new Pv(w);rt.needsUpdate=!0;const at=new cp({map:rt,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1}),O=new Ov(at);O.position.set(z.position[0],z.position[1],z.position[2]),O.scale.set(800*z.size,400*z.size,1),N.add(O)})}function V(N){const F=new Gn,U=15e3,z=new Float32Array(U*3),w=new Float32Array(U*3);for(let Y=0;Y<U;Y++){z[Y*3]=(Math.random()-.5)*8e4,z[Y*3+1]=(Math.random()-.5)*8e4,z[Y*3+2]=(Math.random()-.5)*8e4;const tt=Math.random();tt<.6?(w[Y*3]=.9+Math.random()*.1,w[Y*3+1]=.9+Math.random()*.1,w[Y*3+2]=1):tt<.85?(w[Y*3]=1,w[Y*3+1]=1,w[Y*3+2]=.7+Math.random()*.3):(w[Y*3]=1,w[Y*3+1]=.5+Math.random()*.3,w[Y*3+2]=.3+Math.random()*.2)}F.setAttribute("position",new cn(z,3)),F.setAttribute("color",new cn(w,3));const R=new Is({size:1.5,vertexColors:!0,transparent:!0,opacity:.8}),G=new nl(F,R);N.add(G)}function P(N){for(let U=0;U<35;U++){const z=new Nn(150+Math.random()*400,32,32),w=[16724838,3368703,6750003,16755251,11154431,16737843,3407718,6697983,16777011,16724991],R=w[Math.floor(Math.random()*w.length)],G=new qa({color:R,transparent:!0,opacity:.15+Math.random()*.25,side:wi}),Y=new Qe(z,G),tt=Math.random()*Math.PI*2,rt=1500+Math.random()*5e3;Y.position.x=Math.cos(tt)*rt,Y.position.y=(Math.random()-.5)*800,Y.position.z=Math.sin(tt)*rt,N.add(Y)}}function D(N){Object.entries(E).forEach(([F,U])=>{const z=new Nn(50,16,16),w=new qa({color:U.color,transparent:!0,opacity:U.isHome?.8:.6}),R=new Qe(z,w);if(R.position.set(U.x,U.y,U.z),U.isHome){const G=new Nn(80,16,16),Y=new qa({color:U.color,transparent:!0,opacity:.3,side:An}),tt=new Qe(G,Y);tt.position.set(U.x,U.y,U.z),N.add(tt)}N.add(R)})}return mt.jsxs("div",{className:"relative w-full h-full",children:[mt.jsx("div",{ref:i,className:"w-full h-full"}),!m&&mt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80",children:mt.jsx("div",{className:"text-white text-lg",children:"Loading Enhanced Galaxy..."})})]})});function iv(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}function qA(...s){return t=>{let i=!1;const r=s.map(l=>{const c=iv(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():iv(s[l],null)}}}}function YA(s){const t=ZA(s),i=Jt.forwardRef((r,l)=>{const{children:c,...f}=r,h=Jt.Children.toArray(c),m=h.find(QA);if(m){const p=m.props.children,g=h.map(v=>v===m?Jt.Children.count(p)>1?Jt.Children.only(null):Jt.isValidElement(p)?p.props.children:null:v);return mt.jsx(t,{...f,ref:l,children:Jt.isValidElement(p)?Jt.cloneElement(p,void 0,g):null})}return mt.jsx(t,{...f,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var jA=YA("Slot");function ZA(s){const t=Jt.forwardRef((i,r)=>{const{children:l,...c}=i;if(Jt.isValidElement(l)){const f=$A(l),h=JA(c,l.props);return l.type!==Jt.Fragment&&(h.ref=r?qA(r,f):f),Jt.cloneElement(l,h)}return Jt.Children.count(l)>1?Jt.Children.only(null):null});return t.displayName=`${s}.SlotClone`,t}var KA=Symbol("radix.slottable");function QA(s){return Jt.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===KA}function JA(s,t){const i={...t};for(const r in t){const l=s[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...h)=>{const m=c(...h);return l(...h),m}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function $A(s){var r,l;let t=(r=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?s.ref:(t=(l=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function Yv(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=Yv(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function jv(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=Yv(s))&&(r&&(r+=" "),r+=t);return r}const av=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,rv=jv,tw=(s,t)=>i=>{var r;if((t==null?void 0:t.variants)==null)return rv(s,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,f=Object.keys(l).map(p=>{const g=i==null?void 0:i[p],v=c==null?void 0:c[p];if(g===null)return null;const x=av(g)||av(v);return l[p][x]}),h=i&&Object.entries(i).reduce((p,g)=>{let[v,x]=g;return x===void 0||(p[v]=x),p},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,g)=>{let{class:v,className:x,...S}=g;return Object.entries(S).every(E=>{let[A,y]=E;return Array.isArray(y)?y.includes({...c,...h}[A]):{...c,...h}[A]===y})?[...p,v,x]:p},[]);return rv(s,f,m,i==null?void 0:i.class,i==null?void 0:i.className)},_p="-",ew=s=>{const t=iw(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:f=>{const h=f.split(_p);return h[0]===""&&h.length!==1&&h.shift(),Zv(h,t)||nw(f)},getConflictingClassGroupIds:(f,h)=>{const m=i[f]||[];return h&&r[f]?[...m,...r[f]]:m}}},Zv=(s,t)=>{var f;if(s.length===0)return t.classGroupId;const i=s[0],r=t.nextPart.get(i),l=r?Zv(s.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const c=s.join(_p);return(f=t.validators.find(({validator:h})=>h(c)))==null?void 0:f.classGroupId},sv=/^\[(.+)\]$/,nw=s=>{if(sv.test(s)){const t=sv.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},iw=s=>{const{theme:t,classGroups:i}=s,r={nextPart:new Map,validators:[]};for(const l in i)Yh(i[l],r,l,t);return r},Yh=(s,t,i,r)=>{s.forEach(l=>{if(typeof l=="string"){const c=l===""?t:ov(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(aw(l)){Yh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,f])=>{Yh(f,ov(t,c),i,r)})})},ov=(s,t)=>{let i=s;return t.split(_p).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},aw=s=>s.isThemeGetter,rw=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(c,f)=>{i.set(c,f),t++,t>s&&(t=0,r=i,i=new Map)};return{get(c){let f=i.get(c);if(f!==void 0)return f;if((f=r.get(c))!==void 0)return l(c,f),f},set(c,f){i.has(c)?i.set(c,f):l(c,f)}}},jh="!",Zh=":",sw=Zh.length,ow=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const c=[];let f=0,h=0,m=0,p;for(let E=0;E<l.length;E++){let A=l[E];if(f===0&&h===0){if(A===Zh){c.push(l.slice(m,E)),m=E+sw;continue}if(A==="/"){p=E;continue}}A==="["?f++:A==="]"?f--:A==="("?h++:A===")"&&h--}const g=c.length===0?l:l.substring(m),v=lw(g),x=v!==g,S=p&&p>m?p-m:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:S}};if(t){const l=t+Zh,c=r;r=f=>f.startsWith(l)?c(f.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},lw=s=>s.endsWith(jh)?s.substring(0,s.length-1):s.startsWith(jh)?s.substring(1):s,cw=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let c=[];return r.forEach(f=>{f[0]==="["||t[f]?(l.push(...c.sort(),f),c=[]):c.push(f)}),l.push(...c.sort()),l}},uw=s=>({cache:rw(s.cacheSize),parseClassName:ow(s),sortModifiers:cw(s),...ew(s)}),fw=/\s+/,dw=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,f=[],h=s.trim().split(fw);let m="";for(let p=h.length-1;p>=0;p-=1){const g=h[p],{isExternal:v,modifiers:x,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:A}=i(g);if(v){m=g+(m.length>0?" "+m:m);continue}let y=!!A,_=r(y?E.substring(0,A):E);if(!_){if(!y){m=g+(m.length>0?" "+m:m);continue}if(_=r(E),!_){m=g+(m.length>0?" "+m:m);continue}y=!1}const V=c(x).join(":"),P=S?V+jh:V,D=P+_;if(f.includes(D))continue;f.push(D);const N=l(_,y);for(let F=0;F<N.length;++F){const U=N[F];f.push(P+U)}m=g+(m.length>0?" "+m:m)}return m};function hw(){let s=0,t,i,r="";for(;s<arguments.length;)(t=arguments[s++])&&(i=Kv(t))&&(r&&(r+=" "),r+=i);return r}const Kv=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=Kv(s[r]))&&(i&&(i+=" "),i+=t);return i};function pw(s,...t){let i,r,l,c=f;function f(m){const p=t.reduce((g,v)=>v(g),s());return i=uw(p),r=i.cache.get,l=i.cache.set,c=h,h(m)}function h(m){const p=r(m);if(p)return p;const g=dw(m,i);return l(m,g),g}return function(){return c(hw.apply(null,arguments))}}const vn=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},Qv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Jv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,mw=/^\d+\/\d+$/,gw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_w=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,xw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,yw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ls=s=>mw.test(s),Ee=s=>!!s&&!Number.isNaN(Number(s)),Wa=s=>!!s&&Number.isInteger(Number(s)),th=s=>s.endsWith("%")&&Ee(s.slice(0,-1)),ua=s=>gw.test(s),Sw=()=>!0,Mw=s=>_w.test(s)&&!vw.test(s),$v=()=>!1,Ew=s=>xw.test(s),bw=s=>yw.test(s),Tw=s=>!qt(s)&&!Yt(s),Aw=s=>Ys(s,nx,$v),qt=s=>Qv.test(s),Mr=s=>Ys(s,ix,Mw),eh=s=>Ys(s,Uw,Ee),lv=s=>Ys(s,tx,$v),ww=s=>Ys(s,ex,bw),jc=s=>Ys(s,ax,Ew),Yt=s=>Jv.test(s),$o=s=>js(s,ix),Rw=s=>js(s,Lw),cv=s=>js(s,tx),Cw=s=>js(s,nx),Dw=s=>js(s,ex),Zc=s=>js(s,ax,!0),Ys=(s,t,i)=>{const r=Qv.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},js=(s,t,i=!1)=>{const r=Jv.exec(s);return r?r[1]?t(r[1]):i:!1},tx=s=>s==="position"||s==="percentage",ex=s=>s==="image"||s==="url",nx=s=>s==="length"||s==="size"||s==="bg-size",ix=s=>s==="length",Uw=s=>s==="number",Lw=s=>s==="family-name",ax=s=>s==="shadow",Nw=()=>{const s=vn("color"),t=vn("font"),i=vn("text"),r=vn("font-weight"),l=vn("tracking"),c=vn("leading"),f=vn("breakpoint"),h=vn("container"),m=vn("spacing"),p=vn("radius"),g=vn("shadow"),v=vn("inset-shadow"),x=vn("text-shadow"),S=vn("drop-shadow"),E=vn("blur"),A=vn("perspective"),y=vn("aspect"),_=vn("ease"),V=vn("animate"),P=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],N=()=>[...D(),Yt,qt],F=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],z=()=>[Yt,qt,m],w=()=>[Ls,"full","auto",...z()],R=()=>[Wa,"none","subgrid",Yt,qt],G=()=>["auto",{span:["full",Wa,Yt,qt]},Wa,Yt,qt],Y=()=>[Wa,"auto",Yt,qt],tt=()=>["auto","min","max","fr",Yt,qt],rt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],at=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...z()],X=()=>[Ls,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],I=()=>[s,Yt,qt],pt=()=>[...D(),cv,lv,{position:[Yt,qt]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Z=()=>["auto","cover","contain",Cw,Aw,{size:[Yt,qt]}],dt=()=>[th,$o,Mr],gt=()=>["","none","full",p,Yt,qt],bt=()=>["",Ee,$o,Mr],$=()=>["solid","dashed","dotted","double"],ut=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ht=()=>[Ee,th,cv,lv],xt=()=>["","none",E,Yt,qt],Tt=()=>["none",Ee,Yt,qt],Gt=()=>["none",Ee,Yt,qt],de=()=>[Ee,Yt,qt],At=()=>[Ls,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ua],breakpoint:[ua],color:[Sw],container:[ua],"drop-shadow":[ua],ease:["in","out","in-out"],font:[Tw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ua],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ua],shadow:[ua],spacing:["px",Ee],text:[ua],"text-shadow":[ua],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ls,qt,Yt,y]}],container:["container"],columns:[{columns:[Ee,qt,Yt,h]}],"break-after":[{"break-after":P()}],"break-before":[{"break-before":P()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:N()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{start:w()}],end:[{end:w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:["visible","invisible","collapse"],z:[{z:[Wa,"auto",Yt,qt]}],basis:[{basis:[Ls,"full","auto",h,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ee,Ls,"auto","initial","none",qt]}],grow:[{grow:["",Ee,Yt,qt]}],shrink:[{shrink:["",Ee,Yt,qt]}],order:[{order:[Wa,"first","last","none",Yt,qt]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:G()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:G()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":tt()}],"auto-rows":[{"auto-rows":tt()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...rt(),"normal"]}],"justify-items":[{"justify-items":[...at(),"normal"]}],"justify-self":[{"justify-self":["auto",...at()]}],"align-content":[{content:["normal",...rt()]}],"align-items":[{items:[...at(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...at(),{baseline:["","last"]}]}],"place-content":[{"place-content":rt()}],"place-items":[{"place-items":[...at(),"baseline"]}],"place-self":[{"place-self":["auto",...at()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:X()}],w:[{w:[h,"screen",...X()]}],"min-w":[{"min-w":[h,"screen","none",...X()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...X()]}],h:[{h:["screen","lh",...X()]}],"min-h":[{"min-h":["screen","lh","none",...X()]}],"max-h":[{"max-h":["screen","lh",...X()]}],"font-size":[{text:["base",i,$o,Mr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Yt,eh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",th,qt]}],"font-family":[{font:[Rw,qt,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,Yt,qt]}],"line-clamp":[{"line-clamp":[Ee,"none",Yt,eh]}],leading:[{leading:[c,...z()]}],"list-image":[{"list-image":["none",Yt,qt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Yt,qt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ee,"from-font","auto",Yt,Mr]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[Ee,"auto",Yt,qt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Yt,qt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Yt,qt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:pt()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:Z()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Wa,Yt,qt],radial:["",Yt,qt],conic:[Wa,Yt,qt]},Dw,ww]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:dt()}],"gradient-via-pos":[{via:dt()}],"gradient-to-pos":[{to:dt()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:gt()}],"rounded-s":[{"rounded-s":gt()}],"rounded-e":[{"rounded-e":gt()}],"rounded-t":[{"rounded-t":gt()}],"rounded-r":[{"rounded-r":gt()}],"rounded-b":[{"rounded-b":gt()}],"rounded-l":[{"rounded-l":gt()}],"rounded-ss":[{"rounded-ss":gt()}],"rounded-se":[{"rounded-se":gt()}],"rounded-ee":[{"rounded-ee":gt()}],"rounded-es":[{"rounded-es":gt()}],"rounded-tl":[{"rounded-tl":gt()}],"rounded-tr":[{"rounded-tr":gt()}],"rounded-br":[{"rounded-br":gt()}],"rounded-bl":[{"rounded-bl":gt()}],"border-w":[{border:bt()}],"border-w-x":[{"border-x":bt()}],"border-w-y":[{"border-y":bt()}],"border-w-s":[{"border-s":bt()}],"border-w-e":[{"border-e":bt()}],"border-w-t":[{"border-t":bt()}],"border-w-r":[{"border-r":bt()}],"border-w-b":[{"border-b":bt()}],"border-w-l":[{"border-l":bt()}],"divide-x":[{"divide-x":bt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":bt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...$(),"hidden","none"]}],"divide-style":[{divide:[...$(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...$(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ee,Yt,qt]}],"outline-w":[{outline:["",Ee,$o,Mr]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",g,Zc,jc]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",v,Zc,jc]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:bt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[Ee,Mr]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":bt()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",x,Zc,jc]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[Ee,Yt,qt]}],"mix-blend":[{"mix-blend":[...ut(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ut()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ee]}],"mask-image-linear-from-pos":[{"mask-linear-from":ht()}],"mask-image-linear-to-pos":[{"mask-linear-to":ht()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":ht()}],"mask-image-t-to-pos":[{"mask-t-to":ht()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":ht()}],"mask-image-r-to-pos":[{"mask-r-to":ht()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":ht()}],"mask-image-b-to-pos":[{"mask-b-to":ht()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":ht()}],"mask-image-l-to-pos":[{"mask-l-to":ht()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":ht()}],"mask-image-x-to-pos":[{"mask-x-to":ht()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":ht()}],"mask-image-y-to-pos":[{"mask-y-to":ht()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[Yt,qt]}],"mask-image-radial-from-pos":[{"mask-radial-from":ht()}],"mask-image-radial-to-pos":[{"mask-radial-to":ht()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":D()}],"mask-image-conic-pos":[{"mask-conic":[Ee]}],"mask-image-conic-from-pos":[{"mask-conic-from":ht()}],"mask-image-conic-to-pos":[{"mask-conic-to":ht()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:pt()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:Z()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Yt,qt]}],filter:[{filter:["","none",Yt,qt]}],blur:[{blur:xt()}],brightness:[{brightness:[Ee,Yt,qt]}],contrast:[{contrast:[Ee,Yt,qt]}],"drop-shadow":[{"drop-shadow":["","none",S,Zc,jc]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",Ee,Yt,qt]}],"hue-rotate":[{"hue-rotate":[Ee,Yt,qt]}],invert:[{invert:["",Ee,Yt,qt]}],saturate:[{saturate:[Ee,Yt,qt]}],sepia:[{sepia:["",Ee,Yt,qt]}],"backdrop-filter":[{"backdrop-filter":["","none",Yt,qt]}],"backdrop-blur":[{"backdrop-blur":xt()}],"backdrop-brightness":[{"backdrop-brightness":[Ee,Yt,qt]}],"backdrop-contrast":[{"backdrop-contrast":[Ee,Yt,qt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ee,Yt,qt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ee,Yt,qt]}],"backdrop-invert":[{"backdrop-invert":["",Ee,Yt,qt]}],"backdrop-opacity":[{"backdrop-opacity":[Ee,Yt,qt]}],"backdrop-saturate":[{"backdrop-saturate":[Ee,Yt,qt]}],"backdrop-sepia":[{"backdrop-sepia":["",Ee,Yt,qt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Yt,qt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ee,"initial",Yt,qt]}],ease:[{ease:["linear","initial",_,Yt,qt]}],delay:[{delay:[Ee,Yt,qt]}],animate:[{animate:["none",V,Yt,qt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,Yt,qt]}],"perspective-origin":[{"perspective-origin":N()}],rotate:[{rotate:Tt()}],"rotate-x":[{"rotate-x":Tt()}],"rotate-y":[{"rotate-y":Tt()}],"rotate-z":[{"rotate-z":Tt()}],scale:[{scale:Gt()}],"scale-x":[{"scale-x":Gt()}],"scale-y":[{"scale-y":Gt()}],"scale-z":[{"scale-z":Gt()}],"scale-3d":["scale-3d"],skew:[{skew:de()}],"skew-x":[{"skew-x":de()}],"skew-y":[{"skew-y":de()}],transform:[{transform:[Yt,qt,"","none","gpu","cpu"]}],"transform-origin":[{origin:N()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:At()}],"translate-x":[{"translate-x":At()}],"translate-y":[{"translate-y":At()}],"translate-z":[{"translate-z":At()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Yt,qt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Yt,qt]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[Ee,$o,Mr,eh]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Ow=pw(Nw);function dl(...s){return Ow(jv(s))}const Pw=tw("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Ns({className:s,variant:t,size:i,asChild:r=!1,...l}){const c=r?jA:"button";return mt.jsx(c,{"data-slot":"button",className:dl(Pw({variant:t,size:i,className:s})),...l})}function vp({className:s,...t}){return mt.jsx("div",{"data-slot":"card",className:dl("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...t})}function rx({className:s,...t}){return mt.jsx("div",{"data-slot":"card-header",className:dl("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...t})}function sx({className:s,...t}){return mt.jsx("div",{"data-slot":"card-title",className:dl("leading-none font-semibold",s),...t})}function ox({className:s,...t}){return mt.jsx("div",{"data-slot":"card-content",className:dl("px-6",s),...t})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bw=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),uv=s=>{const t=Bw(s);return t.charAt(0).toUpperCase()+t.slice(1)},lx=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),Iw=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=Jt.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>Jt.createElement("svg",{ref:m,...Fw,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:lx("lucide",l),...!c&&!Iw(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,g])=>Jt.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=(s,t)=>{const i=Jt.forwardRef(({className:r,...l},c)=>Jt.createElement(Hw,{ref:c,iconNode:t,className:lx(`lucide-${zw(uv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=uv(s),i};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Vw=Rn("arrow-left",Gw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xw=Rn("chevron-down",kw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],cx=Rn("circle",Ww);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fs=Rn("compass",qw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],jw=Rn("earth",Yw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Kw=Rn("globe",Zw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Jw=Rn("house",Qw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],t2=Rn("info",$w);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],n2=Rn("map-pin",e2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],fv=Rn("navigation",i2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]],r2=Rn("orbit",a2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],o2=Rn("rocket",s2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ux=Rn("sparkles",l2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],fx=Rn("star",c2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],f2=Rn("sun",u2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],dx=Rn("target",d2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],p2=Rn("telescope",h2);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],da=Rn("zap",m2),g2=({onNavigateTo:s,currentLocation:t,viewMode:i,onBackToUniverse:r})=>{const l=[{name:"Earth",icon:Kw,color:"text-blue-500"},{name:"Moon",icon:da,color:"text-gray-400"},{name:"Mars",icon:o2,color:"text-red-500"},{name:"Venus",icon:da,color:"text-yellow-500"},{name:"Mercury",icon:da,color:"text-orange-500"},{name:"Jupiter",icon:da,color:"text-orange-300"},{name:"Saturn",icon:da,color:"text-yellow-300"},{name:"Uranus",icon:da,color:"text-cyan-400"},{name:"Neptune",icon:da,color:"text-blue-600"},{name:"Sun",icon:da,color:"text-yellow-400"}],c=[{name:"Galactic Center",icon:dx,color:"text-yellow-500"},{name:"Perseus Arm",icon:Fs,color:"text-blue-400"},{name:"Sagittarius Arm",icon:Fs,color:"text-purple-400"},{name:"Orion Arm",icon:Fs,color:"text-green-400"},{name:"Outer Rim",icon:cx,color:"text-cyan-400"},{name:"Galactic Halo",icon:ux,color:"text-pink-400"}];return mt.jsxs(vp,{className:`absolute top-4 ${i==="galaxy"?"left-4":"right-4"} w-64 bg-black/80 text-white border-gray-600 z-10`,children:[mt.jsx(rx,{className:"pb-2",children:mt.jsxs(sx,{className:"text-lg flex items-center gap-2",children:[mt.jsx(Jw,{className:"w-5 h-5"}),"Navigation"]})}),mt.jsxs(ox,{className:"space-y-2",children:[mt.jsxs("div",{className:"text-sm text-gray-300 mb-3",children:["Current: ",mt.jsx("span",{className:"text-white font-semibold",children:t})]}),i==="earth"||i==="galaxy"?mt.jsxs("div",{className:"space-y-2",children:[mt.jsxs(Ns,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:r,children:[mt.jsx(Vw,{className:"w-4 h-4"}),"Back to Universe"]}),i==="galaxy"&&mt.jsxs("div",{className:"space-y-2",children:[mt.jsx("div",{className:"text-xs text-gray-300 font-semibold",children:"Galaxy Regions:"}),mt.jsx("div",{className:"grid grid-cols-2 gap-2",children:c.map(f=>{const h=f.icon;return mt.jsxs(Ns,{variant:"outline",size:"sm",className:"justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(f.name),children:[mt.jsx(h,{className:`w-4 h-4 ${f.color}`}),mt.jsx("span",{className:"text-xs",children:f.name})]},f.name)})})]}),mt.jsxs("div",{className:"text-xs text-gray-400 p-2 bg-gray-800/30 rounded",children:[mt.jsx("p",{children:mt.jsxs("strong",{children:[i==="earth"?"Earth View":"Galaxy View"," Controls:"]})}),mt.jsx("p",{children:"• Mouse: Rotate view"}),mt.jsx("p",{children:"• Scroll: Zoom in/out"}),i==="earth"&&mt.jsx("p",{children:"• Zoom from space to surface"}),i==="galaxy"&&mt.jsx("p",{children:"• Explore galactic structures"}),i==="galaxy"&&mt.jsx("p",{children:"• Buttons: Navigate to regions"})]})]}):mt.jsxs("div",{className:"space-y-2",children:[mt.jsxs(Ns,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-blue-800/50 border-blue-600 hover:bg-blue-700/50 text-white",onClick:()=>s("Earth View"),children:[mt.jsx(jw,{className:"w-4 h-4 text-blue-400"}),"Immersive Earth View"]}),mt.jsxs(Ns,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-purple-800/50 border-purple-600 hover:bg-purple-700/50 text-white",onClick:()=>s("Galaxy View"),children:[mt.jsx(fx,{className:"w-4 h-4 text-purple-400"}),"Enhanced Galaxy View"]}),mt.jsx("div",{className:"grid grid-cols-2 gap-2",children:l.map(f=>{const h=f.icon;return mt.jsxs(Ns,{variant:"outline",size:"sm",className:"justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(f.name),children:[mt.jsx(h,{className:`w-4 h-4 ${f.color}`}),f.name]},f.name)})}),mt.jsxs("div",{className:"text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded",children:[mt.jsx("p",{children:mt.jsx("strong",{children:"Controls:"})}),mt.jsx("p",{children:"• Mouse: Rotate view"}),mt.jsx("p",{children:"• Scroll: Zoom in/out"}),mt.jsx("p",{children:"• Buttons: Quick travel"})]})]})]})]})},_2=({onNavigateTo:s,currentLocation:t})=>{const i=[{category:"Major Spiral Arms",regions:[{name:"Perseus Arm",icon:Fs,color:"text-blue-400",description:"Major spiral arm containing many star-forming regions",distance:"6,500 ly from center"},{name:"Sagittarius Arm",icon:Fs,color:"text-purple-400",description:"Inner spiral arm with dense stellar populations",distance:"4,000 ly from center"},{name:"Orion Arm",icon:fx,color:"text-yellow-400",description:"Our local spiral arm - Solar System location",distance:"26,000 ly from center",isHome:!0},{name:"Scutum-Centaurus Arm",icon:Fs,color:"text-green-400",description:"Major spiral arm on the far side",distance:"3,000 ly from center"}]},{category:"Central Regions",regions:[{name:"Galactic Center",icon:dx,color:"text-red-500",description:"Sagittarius A* - Supermassive black hole",distance:"0 ly from center"},{name:"Central Bar",icon:fv,color:"text-orange-400",description:"Central stellar bar structure",distance:"1,500 ly from center"},{name:"Nuclear Bulge",icon:f2,color:"text-yellow-500",description:"Dense central stellar region",distance:"500 ly from center"}]},{category:"Outer Regions",regions:[{name:"Outer Rim",icon:cx,color:"text-cyan-400",description:"Sparse outer edge of the galaxy",distance:"50,000 ly from center"},{name:"Galactic Halo",icon:ux,color:"text-pink-400",description:"Dark matter halo surrounding galaxy",distance:"100,000 ly from center"}]},{category:"Notable Features",regions:[{name:"Orion Nebula",icon:p2,color:"text-purple-300",description:"Stellar nursery in Orion Arm",distance:"1,344 ly from Earth"},{name:"Crab Nebula",icon:da,color:"text-red-300",description:"Supernova remnant with pulsar",distance:"6,500 ly from Earth"},{name:"Andromeda Approach",icon:r2,color:"text-blue-300",description:"View towards approaching Andromeda Galaxy",distance:"2.5 million ly"},{name:"Local Group",icon:n2,color:"text-green-300",description:"Our galaxy cluster neighborhood",distance:"10 million ly diameter"}]}],r=l=>{const c="justify-start gap-2 text-left h-auto py-2 px-3 bg-gray-900/70 border-gray-600 hover:bg-gray-800/70 text-white transition-all duration-200";return l.isHome?`${c} border-yellow-500/50 bg-yellow-900/20 hover:bg-yellow-800/30`:t===l.name?`${c} border-blue-500/50 bg-blue-900/30 hover:bg-blue-800/40`:c};return mt.jsxs(vp,{className:"absolute top-4 right-4 w-80 max-h-[90vh] overflow-y-auto bg-black/85 text-white border-gray-600 backdrop-blur-sm z-20",children:[mt.jsxs(rx,{className:"pb-3",children:[mt.jsxs(sx,{className:"text-lg flex items-center gap-2",children:[mt.jsx(fv,{className:"w-5 h-5 text-blue-400"}),"Galaxy Navigation"]}),mt.jsxs("div",{className:"text-sm text-gray-300",children:["Current: ",mt.jsx("span",{className:"text-white font-semibold",children:t})]})]}),mt.jsxs(ox,{className:"space-y-4",children:[i.map(l=>mt.jsxs("div",{className:"space-y-2",children:[mt.jsx("div",{className:"text-xs font-semibold text-gray-300 uppercase tracking-wide border-b border-gray-700 pb-1",children:l.category}),mt.jsx("div",{className:"space-y-1",children:l.regions.map(c=>{const f=c.icon;return mt.jsx(Ns,{variant:"outline",size:"sm",className:r(c),onClick:()=>s(c.name),children:mt.jsxs("div",{className:"flex items-start gap-2 w-full",children:[mt.jsx(f,{className:`w-4 h-4 ${c.color} mt-0.5 flex-shrink-0`}),mt.jsxs("div",{className:"flex-1 min-w-0",children:[mt.jsx("div",{className:"font-medium text-sm",children:c.name}),mt.jsx("div",{className:"text-xs text-gray-400 line-clamp-2",children:c.description}),mt.jsx("div",{className:"text-xs text-gray-500 mt-1",children:c.distance})]})]})},c.name)})})]},l.category)),mt.jsxs("div",{className:"text-xs text-gray-400 p-3 bg-gray-800/30 rounded border border-gray-700",children:[mt.jsx("p",{children:mt.jsx("strong",{children:"Enhanced Galaxy Controls:"})}),mt.jsx("p",{children:"• Mouse: Rotate and explore"}),mt.jsx("p",{children:"• Scroll: Zoom in/out"}),mt.jsx("p",{children:"• Buttons: Navigate to regions"}),mt.jsxs("p",{children:["• ",mt.jsx("span",{className:"text-yellow-400",children:"★"})," Home: Our Solar System"]}),mt.jsxs("p",{children:["• ",mt.jsx("span",{className:"text-blue-400",children:"●"})," Current location"]})]})]})]})},v2=({currentLocation:s,isVisible:t})=>{const[i,r]=Jt.useState(0),[l,c]=Jt.useState(null),f={"Orion Arm":"/images/orion-arm.png","Galactic Center":"/images/galactic-center.png","Perseus Arm":"/images/perseus-arm.png","Sagittarius Arm":"/images/sagittarius-arm.png","Galactic Halo":"/images/galactic-halo.png","Orion Nebula":"/images/orion-nebula.png","Crab Nebula":"/images/crab-nebula.png","Andromeda Approach":"/images/andromeda-galaxy.png","Scutum-Centaurus Arm":"/images/stellar-nursery.png"},h={"Orion Arm":{title:"Orion Arm - Our Galactic Home",description:"Also known as the Orion Spur, this is our local spiral arm where the Solar System resides. It contains young, hot blue stars and active star-forming regions.",facts:["Contains our Solar System","About 10,000 light-years long","26,000 light-years from galactic center","Rich in stellar nurseries"]},"Galactic Center":{title:"Galactic Center - Sagittarius A*",description:"The supermassive black hole at the heart of our galaxy, surrounded by dense stellar populations and intense gravitational effects.",facts:["Contains Sagittarius A* black hole","4 million times mass of our Sun","Extremely dense stellar region","Source of powerful radio emissions"]},"Perseus Arm":{title:"Perseus Arm - Major Spiral Structure",description:"One of the major spiral arms of the Milky Way, containing massive star-forming regions and bright stellar associations.",facts:["Major spiral arm of the galaxy","Contains many star clusters","Rich in molecular clouds","About 6,500 light-years from center"]},"Sagittarius Arm":{title:"Sagittarius Arm - Inner Spiral",description:"An inner spiral arm with dense stellar populations and active star formation regions.",facts:["Inner spiral arm structure","Dense stellar populations","Active star formation","Contains bright nebulae"]},"Galactic Halo":{title:"Galactic Halo - Ancient Realm",description:"The sparse outer region containing ancient stars, globular clusters, and dark matter.",facts:["Contains oldest stars in galaxy","Sparse stellar density","Globular clusters scattered throughout","Dominated by dark matter"]},"Orion Nebula":{title:"Orion Nebula - Stellar Nursery",description:"One of the brightest nebulae visible to the naked eye, a stellar nursery where new stars are actively forming.",facts:["Closest star-forming region to Earth","1,344 light-years away","Contains the Trapezium Cluster","Visible to the naked eye"]},"Crab Nebula":{title:"Crab Nebula - Supernova Remnant",description:"The remnant of a supernova explosion observed by Chinese astronomers in 1054 AD, containing a rapidly spinning pulsar.",facts:["Supernova remnant from 1054 AD","Contains a pulsar spinning 30 times/second","Expanding at 1,500 km/s","Powerful source of radiation"]},"Andromeda Approach":{title:"Andromeda Galaxy - Our Neighbor",description:"The nearest major galaxy to the Milky Way, approaching us and destined to merge with our galaxy in about 4.5 billion years.",facts:["2.5 million light-years away","Approaching at 250,000 mph","Will merge with Milky Way","Contains 1 trillion stars"]},"Scutum-Centaurus Arm":{title:"Scutum-Centaurus Arm",description:"A major spiral arm on the far side of the galaxy, rich in star formation and stellar associations.",facts:["Major spiral arm structure","Far side of the galaxy","Rich in young stars","Active star formation regions"]}};Jt.useEffect(()=>{if(t&&f[s]){c(f[s]),r(0);const p=setTimeout(()=>{r(.3)},100);return()=>clearTimeout(p)}else{r(0);const p=setTimeout(()=>{c(null)},500);return()=>clearTimeout(p)}},[s,t]);const m=h[s];return!t||!l?null:mt.jsxs(mt.Fragment,{children:[mt.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 transition-opacity duration-500",style:{backgroundImage:`url(${l})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:i,filter:"blur(1px) brightness(0.4)"}}),m&&mt.jsx(vp,{className:"absolute bottom-4 left-4 w-96 bg-black/90 text-white border-gray-600 backdrop-blur-md",children:mt.jsxs("div",{className:"p-4 space-y-3",children:[mt.jsxs("div",{className:"flex items-center gap-3",children:[mt.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center",children:mt.jsx("span",{className:"text-lg font-bold",children:"★"})}),mt.jsxs("div",{children:[mt.jsx("h3",{className:"text-lg font-bold text-blue-300",children:m.title}),mt.jsx("p",{className:"text-sm text-gray-300",children:"Current Location"})]})]}),mt.jsx("p",{className:"text-sm text-gray-200 leading-relaxed",children:m.description}),mt.jsxs("div",{className:"space-y-2",children:[mt.jsx("h4",{className:"text-sm font-semibold text-yellow-300",children:"Key Facts:"}),mt.jsx("ul",{className:"space-y-1",children:m.facts.map((p,g)=>mt.jsxs("li",{className:"text-xs text-gray-300 flex items-start gap-2",children:[mt.jsx("span",{className:"text-yellow-400 mt-1",children:"•"}),mt.jsx("span",{children:p})]},g))})]}),mt.jsx("div",{className:"pt-2 border-t border-gray-700",children:mt.jsx("p",{className:"text-xs text-gray-400",children:"Use navigation controls to explore other regions of our galaxy"})})]})}),mt.jsxs("div",{className:"fixed inset-0 pointer-events-none z-10",children:[mt.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"}),mt.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(20)].map((p,g)=>mt.jsx("div",{className:"absolute w-1 h-1 bg-white rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${2+Math.random()*2}s`}},g))}),mt.jsx("div",{className:"absolute inset-0 opacity-20",children:mt.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"})})]})]})},x2=({viewMode:s,currentLocation:t})=>{const[i,r]=Jt.useState(!1),c=(()=>{switch(s){case"universe":return{title:"Solar System",data:{"Current Focus":t,Scale:"~40 AU diameter",Objects:"8 planets + moons",Simulation:"Real-time orbital mechanics",Textures:"NASA-based imagery"}};case"earth":return{title:"Earth View",data:{"Current Altitude":t,Radius:"6,371 km","Surface Area":"510.1 million km²",Atmosphere:"Realistic lighting","Zoom Range":"Space to surface"}};case"galaxy":return{title:"Milky Way Galaxy",data:{"Current View":t,Diameter:"~100,000 light-years",Stars:"100,000+ simulated",Structure:"4-armed spiral","Core Type":"Supermassive black hole"}};default:return{title:"Unknown",data:{}}}})();return mt.jsx("div",{className:"absolute bottom-4 left-4 z-50",children:i?mt.jsxs("div",{className:"bg-black/80 text-white p-3 rounded-lg border border-gray-600 min-w-64 max-w-80",children:[mt.jsxs("div",{className:"flex items-center justify-between mb-2",children:[mt.jsx("h3",{className:"text-sm font-semibold text-yellow-400",children:c.title}),mt.jsx("button",{onClick:()=>r(!1),className:"text-gray-400 hover:text-white transition-colors",title:"Collapse",children:mt.jsx(Xw,{className:"w-4 h-4"})})]}),mt.jsx("div",{className:"space-y-1",children:Object.entries(c.data).map(([f,h])=>mt.jsxs("div",{className:"flex justify-between text-xs",children:[mt.jsxs("span",{className:"text-gray-300 font-medium",children:[f,":"]}),mt.jsx("span",{className:"text-white ml-2 text-right",children:h})]},f))})]}):mt.jsx("button",{onClick:()=>r(!0),className:"w-8 h-8 bg-black/80 hover:bg-black/90 text-white rounded-full border border-gray-600 flex items-center justify-center transition-all duration-200 hover:scale-110",title:"Show view information",children:mt.jsx(t2,{className:"w-4 h-4"})})})};function y2(){const[s,t]=Jt.useState("Solar System"),[i,r]=Jt.useState("universe"),l=Jt.useRef(null),c=Jt.useRef(null),f=p=>{p==="Earth View"?(r("earth"),t("Space View")):p==="Galaxy View"?(r("galaxy"),t("Galaxy Overview")):i==="galaxy"?(t(p),c.current&&c.current.navigateToGalaxyRegion(p)):(r("universe"),t(p),l.current&&l.current.focusOnPlanet(p))},h=p=>{t(p)},m=()=>{r("universe"),t("Solar System")};return mt.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[i==="universe"?mt.jsx(qv,{ref:l,onLocationChange:h}):i==="earth"?mt.jsx(XA,{onLocationChange:h}):mt.jsx(WA,{ref:c,onLocationChange:h}),mt.jsx(g2,{onNavigateTo:f,currentLocation:s,viewMode:i,onBackToUniverse:m}),i==="galaxy"&&mt.jsx(_2,{onNavigateTo:f,currentLocation:s}),mt.jsx(v2,{currentLocation:s,isVisible:i==="galaxy"}),mt.jsx(x2,{viewMode:i,currentLocation:s})]})}TS.createRoot(document.getElementById("root")).render(mt.jsx(Jt.StrictMode,{children:mt.jsx(y2,{})}));
