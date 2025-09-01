(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var _d={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function hS(){if(q0)return Xo;q0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var Y0;function pS(){return Y0||(Y0=1,_d.exports=hS()),_d.exports}var it=pS(),vd={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function mS(){if(j0)return pe;j0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(N,J,vt){this.props=N,this.context=J,this.refs=A,this.updater=vt||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(N,J,vt){this.props=N,this.context=J,this.refs=A,this.updater=vt||S}var U=D.prototype=new g;U.constructor=D,E(U,y.prototype),U.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function k(N,J,vt,mt,bt,nt){return vt=nt.ref,{$$typeof:s,type:N,key:J,ref:vt!==void 0?vt:null,props:nt}}function I(N,J){return k(N.type,J,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function L(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(vt){return J[vt]})}var H=/\/+/g;function at(N,J){return typeof N=="object"&&N!==null&&N.key!=null?L(""+N.key):J.toString(36)}function et(){}function ft(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(et,et):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ut(N,J,vt,mt,bt){var nt=typeof N;(nt==="undefined"||nt==="boolean")&&(N=null);var ht=!1;if(N===null)ht=!0;else switch(nt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(N.$$typeof){case s:case t:ht=!0;break;case _:return ht=N._init,ut(ht(N._payload),J,vt,mt,bt)}}if(ht)return bt=bt(N),ht=mt===""?"."+at(N,0):mt,w(bt)?(vt="",ht!=null&&(vt=ht.replace(H,"$&/")+"/"),ut(bt,J,vt,"",function(Gt){return Gt})):bt!=null&&(C(bt)&&(bt=I(bt,vt+(bt.key==null||N&&N.key===bt.key?"":(""+bt.key).replace(H,"$&/")+"/")+ht)),J.push(bt)),1;ht=0;var gt=mt===""?".":mt+":";if(w(N))for(var Ut=0;Ut<N.length;Ut++)mt=N[Ut],nt=gt+at(mt,Ut),ht+=ut(mt,J,vt,nt,bt);else if(Ut=x(N),typeof Ut=="function")for(N=Ut.call(N),Ut=0;!(mt=N.next()).done;)mt=mt.value,nt=gt+at(mt,Ut++),ht+=ut(mt,J,vt,nt,bt);else if(nt==="object"){if(typeof N.then=="function")return ut(ft(N),J,vt,mt,bt);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ht}function P(N,J,vt){if(N==null)return N;var mt=[],bt=0;return ut(N,mt,"","",function(nt){return J.call(vt,nt,bt++)}),mt}function W(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(vt){(N._status===0||N._status===-1)&&(N._status=1,N._result=vt)},function(vt){(N._status===0||N._status===-1)&&(N._status=2,N._result=vt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var G=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function yt(){}return pe.Children={map:P,forEach:function(N,J,vt){P(N,function(){J.apply(this,arguments)},vt)},count:function(N){var J=0;return P(N,function(){J++}),J},toArray:function(N){return P(N,function(J){return J})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pe.Component=y,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=D,pe.StrictMode=r,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,pe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},pe.cache=function(N){return function(){return N.apply(null,arguments)}},pe.cloneElement=function(N,J,vt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var mt=E({},N.props),bt=N.key,nt=void 0;if(J!=null)for(ht in J.ref!==void 0&&(nt=void 0),J.key!==void 0&&(bt=""+J.key),J)!F.call(J,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&J.ref===void 0||(mt[ht]=J[ht]);var ht=arguments.length-2;if(ht===1)mt.children=vt;else if(1<ht){for(var gt=Array(ht),Ut=0;Ut<ht;Ut++)gt[Ut]=arguments[Ut+2];mt.children=gt}return k(N.type,bt,void 0,void 0,nt,mt)},pe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},pe.createElement=function(N,J,vt){var mt,bt={},nt=null;if(J!=null)for(mt in J.key!==void 0&&(nt=""+J.key),J)F.call(J,mt)&&mt!=="key"&&mt!=="__self"&&mt!=="__source"&&(bt[mt]=J[mt]);var ht=arguments.length-2;if(ht===1)bt.children=vt;else if(1<ht){for(var gt=Array(ht),Ut=0;Ut<ht;Ut++)gt[Ut]=arguments[Ut+2];bt.children=gt}if(N&&N.defaultProps)for(mt in ht=N.defaultProps,ht)bt[mt]===void 0&&(bt[mt]=ht[mt]);return k(N,nt,void 0,void 0,null,bt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(N){return{$$typeof:h,render:N}},pe.isValidElement=C,pe.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:W}},pe.memo=function(N,J){return{$$typeof:p,type:N,compare:J===void 0?null:J}},pe.startTransition=function(N){var J=O.T,vt={};O.T=vt;try{var mt=N(),bt=O.S;bt!==null&&bt(vt,mt),typeof mt=="object"&&mt!==null&&typeof mt.then=="function"&&mt.then(yt,G)}catch(nt){G(nt)}finally{O.T=J}},pe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},pe.use=function(N){return O.H.use(N)},pe.useActionState=function(N,J,vt){return O.H.useActionState(N,J,vt)},pe.useCallback=function(N,J){return O.H.useCallback(N,J)},pe.useContext=function(N){return O.H.useContext(N)},pe.useDebugValue=function(){},pe.useDeferredValue=function(N,J){return O.H.useDeferredValue(N,J)},pe.useEffect=function(N,J,vt){var mt=O.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return mt.useEffect(N,J)},pe.useId=function(){return O.H.useId()},pe.useImperativeHandle=function(N,J,vt){return O.H.useImperativeHandle(N,J,vt)},pe.useInsertionEffect=function(N,J){return O.H.useInsertionEffect(N,J)},pe.useLayoutEffect=function(N,J){return O.H.useLayoutEffect(N,J)},pe.useMemo=function(N,J){return O.H.useMemo(N,J)},pe.useOptimistic=function(N,J){return O.H.useOptimistic(N,J)},pe.useReducer=function(N,J,vt){return O.H.useReducer(N,J,vt)},pe.useRef=function(N){return O.H.useRef(N)},pe.useState=function(N){return O.H.useState(N)},pe.useSyncExternalStore=function(N,J,vt){return O.H.useSyncExternalStore(N,J,vt)},pe.useTransition=function(){return O.H.useTransition()},pe.version="19.1.0",pe}var Z0;function $h(){return Z0||(Z0=1,vd.exports=mS()),vd.exports}var se=$h(),xd={exports:{}},Wo={},yd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function gS(){return K0||(K0=1,function(s){function t(P,W){var G=P.length;P.push(W);t:for(;0<G;){var yt=G-1>>>1,N=P[yt];if(0<l(N,W))P[yt]=W,P[G]=N,G=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],G=P.pop();if(G!==W){P[0]=G;t:for(var yt=0,N=P.length,J=N>>>1;yt<J;){var vt=2*(yt+1)-1,mt=P[vt],bt=vt+1,nt=P[bt];if(0>l(mt,G))bt<N&&0>l(nt,mt)?(P[yt]=nt,P[bt]=G,yt=bt):(P[yt]=mt,P[vt]=G,yt=vt);else if(bt<N&&0>l(nt,G))P[yt]=nt,P[bt]=G,yt=bt;else break t}}return W}function l(P,W){var G=P.sortIndex-W.sortIndex;return G!==0?G:P.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,x=3,S=!1,E=!1,A=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=P)r(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function O(P){if(A=!1,w(P),!E)if(i(m)!==null)E=!0,F||(F=!0,at());else{var W=i(p);W!==null&&ut(O,W.startTime-P)}}var F=!1,k=-1,I=5,C=-1;function L(){return y?!0:!(s.unstable_now()-C<I)}function H(){if(y=!1,F){var P=s.unstable_now();C=P;var W=!0;try{t:{E=!1,A&&(A=!1,D(k),k=-1),S=!0;var G=x;try{e:{for(w(P),v=i(m);v!==null&&!(v.expirationTime>P&&L());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var N=yt(v.expirationTime<=P);if(P=s.unstable_now(),typeof N=="function"){v.callback=N,w(P),W=!0;break e}v===i(m)&&r(m),w(P)}else r(m);v=i(m)}if(v!==null)W=!0;else{var J=i(p);J!==null&&ut(O,J.startTime-P),W=!1}}break t}finally{v=null,x=G,S=!1}W=void 0}}finally{W?at():F=!1}}}var at;if(typeof U=="function")at=function(){U(H)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ft=et.port2;et.port1.onmessage=H,at=function(){ft.postMessage(null)}}else at=function(){g(H,0)};function ut(P,W){k=g(function(){P(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var G=x;x=W;try{return P()}finally{x=G}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=x;x=P;try{return W()}finally{x=G}},s.unstable_scheduleCallback=function(P,W,G){var yt=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?yt+G:yt):G=yt,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=G+N,P={id:_++,callback:W,priorityLevel:P,startTime:G,expirationTime:N,sortIndex:-1},G>yt?(P.sortIndex=G,t(p,P),i(m)===null&&P===i(p)&&(A?(D(k),k=-1):A=!0,ut(O,G-yt))):(P.sortIndex=N,t(m,P),E||S||(E=!0,F||(F=!0,at()))),P},s.unstable_shouldYield=L,s.unstable_wrapCallback=function(P){var W=x;return function(){var G=x;x=W;try{return P.apply(this,arguments)}finally{x=G}}}}(Sd)),Sd}var Q0;function _S(){return Q0||(Q0=1,yd.exports=gS()),yd.exports}var Md={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function vS(){if(J0)return Nn;J0=1;var s=$h();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Nn.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.0",Nn}var $0;function xS(){if($0)return Md.exports;$0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Md.exports=vS(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function yS(){if(t_)return Wo;t_=1;var s=_S(),t=$h(),i=xS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=d;break}if(T===o){M=!0,o=u,a=d;break}T=T.sibling}if(!M){for(T=d.child;T;){if(T===a){M=!0,a=d,o=u;break}if(T===o){M=!0,o=d,a=u;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case D:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case I:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},yt=[],N=-1;function J(e){return{current:e}}function vt(e){0>N||(e.current=yt[N],yt[N]=null,N--)}function mt(e,n){N++,yt[N]=e.current,e.current=n}var bt=J(null),nt=J(null),ht=J(null),gt=J(null);function Ut(e,n){switch(mt(ht,n),mt(nt,e),mt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?y0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=y0(n),e=S0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(bt),mt(bt,e)}function Gt(){vt(bt),vt(nt),vt(ht)}function ee(e){e.memoizedState!==null&&mt(gt,e);var n=bt.current,a=S0(n,e.type);n!==a&&(mt(nt,e),mt(bt,a))}function De(e){nt.current===e&&(vt(bt),vt(nt)),gt.current===e&&(vt(gt),Fo._currentValue=G)}var Et=Object.prototype.hasOwnProperty,B=s.unstable_scheduleCallback,ae=s.unstable_cancelCallback,kt=s.unstable_shouldYield,Qt=s.unstable_requestPaint,Lt=s.unstable_now,Me=s.unstable_getCurrentPriorityLevel,It=s.unstable_ImmediatePriority,ne=s.unstable_UserBlockingPriority,Pe=s.unstable_NormalPriority,we=s.unstable_LowPriority,z=s.unstable_IdlePriority,b=s.log,Q=s.unstable_setDisableYieldValue,dt=null,xt=null;function ct(e){if(typeof b=="function"&&Q(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(dt,e)}catch{}}var Ft=Math.clz32?Math.clz32:Jt,Ct=Math.log,Zt=Math.LN2;function Jt(e){return e>>>=0,e===0?32:31-(Ct(e)/Zt|0)|0}var Tt=256,Pt=4194304;function te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=te(o):(M&=T,M!==0?u=te(M):a||(a=T&~e,a!==0&&(u=te(a))))):(T=o&~d,T!==0?u=te(T):M!==0?u=te(M):a||(a=o&~e,a!==0&&(u=te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Nt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Rt(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ht(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,V=e.expirationTimes,tt=e.hiddenUpdates;for(a=M&~a;0<a;){var pt=31-Ft(a),St=1<<pt;T[pt]=0,V[pt]=-1;var rt=tt[pt];if(rt!==null)for(tt[pt]=null,pt=0;pt<rt.length;pt++){var st=rt[pt];st!==null&&(st.lane&=-536870913)}a&=~St}o!==0&&Mt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Mt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Yt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Be(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ue(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:H0(e.type))}function vi(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var hn=Math.random().toString(36).slice(2),pn="__reactFiber$"+hn,nn="__reactProps$"+hn,Di="__reactContainer$"+hn,Pr="__reactEvents$"+hn,gl="__reactListeners$"+hn,zr="__reactHandles$"+hn,Ks="__reactResources$"+hn,Ui="__reactMarker$"+hn;function Br(e){delete e[pn],delete e[nn],delete e[Pr],delete e[gl],delete e[zr]}function ki(e){var n=e[pn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Di]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=T0(e);e!==null;){if(a=e[pn])return a;e=T0(e)}return n}e=a,a=e.parentNode}return null}function ma(e){if(e=e[pn]||e[Di]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function $a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ga(e){var n=e[Ks];return n||(n=e[Ks]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Ui]=!0}var _l=new Set,vl={};function R(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(vl[e]=n,e=0;e<n.length;e++)_l.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Z={};function wt(e){return Et.call(Z,e)?!0:Et.call(lt,e)?!1:ot.test(e)?Z[e]=!0:(lt[e]=!0,!1)}function Ot(e,n,a){if(wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Vt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var re,le;function Kt(e){if(re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);re=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+re+e+le}var ge=!1;function Le(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(st){var rt=st}Reflect.construct(e,[],St)}else{try{St.call()}catch(st){rt=st}e.call(St.prototype)}}else{try{throw Error()}catch(st){rt=st}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(st){if(st&&rt&&typeof st.stack=="string")return[st.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],T=d[1];if(M&&T){var V=M.split(`
`),tt=T.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===tt.length)for(o=V.length-1,u=tt.length-1;1<=o&&0<=u&&V[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==tt[u]){var pt=`
`+V[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function $e(e){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Kt("Activity");default:return""}}function He(e){try{var n="";do n+=$e(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=ie(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function be(e){e._valueTracker||(e._valueTracker=Ke(e))}function Dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ie(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function yn(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(e,n,a,o,u,d,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Un(e,M,_e(n)):a!=null?Un(e,M,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+_e(T):e.removeAttribute("name")}function Fn(e,n,a,o,u,d,M,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Un(e,n,a){n==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function An(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Ir(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ut(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Yn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ux=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ux.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Sp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&yp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&yp(e,d,n[d])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fr=null,Hr=null;function Mp(e){var n=ma(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ye(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[nn]||null;if(!u)throw Error(r(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Dn(o)}break t;case"textarea":An(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var vu=!1;function Ep(e,n,a){if(vu)return e(n,a);vu=!0;try{var o=e(n);return o}finally{if(vu=!1,(Fr!==null||Hr!==null)&&(ac(),Fr&&(n=Fr,e=Hr,Hr=Fr=null,Mp(n),e)))for(n=0;n<e.length;n++)Mp(e[n])}}function Qs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Xi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{xu=!1}var _a=null,yu=null,yl=null;function bp(){if(yl)return yl;var e,n=yu,a=n.length,o,u="value"in _a?_a.value:_a.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return yl=u.slice(e,1<o?1-o:void 0)}function Sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function Tp(){return!1}function jn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ml:Tp,this.isPropagationStopped=Tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=jn(tr),$s=_({},tr,{view:0,detail:0}),hx=jn($s),Su,Mu,to,bl=_({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(Su=e.screenX-to.screenX,Mu=e.screenY-to.screenY):Mu=Su=0,to=e),Su)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Ap=jn(bl),px=_({},bl,{dataTransfer:0}),mx=jn(px),gx=_({},$s,{relatedTarget:0}),Eu=jn(gx),_x=_({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=jn(_x),xx=_({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yx=jn(xx),Sx=_({},tr,{data:0}),wp=jn(Sx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bx[e])?!!n[e]:!1}function bu(){return Tx}var Ax=_({},$s,{key:function(e){if(e.key){var n=Mx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wx=jn(Ax),Rx=_({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=jn(Rx),Cx=_({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Dx=jn(Cx),Ux=_({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=jn(Ux),Nx=_({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=jn(Nx),Px=_({},tr,{newState:0,oldState:0}),zx=jn(Px),Bx=[9,13,27,32],Tu=Xi&&"CompositionEvent"in window,eo=null;Xi&&"documentMode"in document&&(eo=document.documentMode);var Ix=Xi&&"TextEvent"in window&&!eo,Cp=Xi&&(!Tu||eo&&8<eo&&11>=eo),Dp=" ",Up=!1;function Lp(e,n){switch(e){case"keyup":return Bx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function Fx(e,n){switch(e){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return e=n.data,e===Dp&&Up?null:e;default:return null}}function Hx(e,n){if(Gr)return e==="compositionend"||!Tu&&Lp(e,n)?(e=bp(),yl=yu=_a=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gx[e.type]:n==="textarea"}function Pp(e,n,a,o){Fr?Hr?Hr.push(o):Hr=[o]:Fr=o,n=uc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var no=null,io=null;function Vx(e){m0(e,0)}function Tl(e){var n=$a(e);if(Dn(n))return e}function zp(e,n){if(e==="change")return n}var Bp=!1;if(Xi){var Au;if(Xi){var wu="oninput"in document;if(!wu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),wu=typeof Ip.oninput=="function"}Au=wu}else Au=!1;Bp=Au&&(!document.documentMode||9<document.documentMode)}function Fp(){no&&(no.detachEvent("onpropertychange",Hp),io=no=null)}function Hp(e){if(e.propertyName==="value"&&Tl(io)){var n=[];Pp(n,io,e,_u(e)),Ep(Vx,n)}}function kx(e,n,a){e==="focusin"?(Fp(),no=n,io=a,no.attachEvent("onpropertychange",Hp)):e==="focusout"&&Fp()}function Xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(io)}function Wx(e,n){if(e==="click")return Tl(n)}function qx(e,n){if(e==="input"||e==="change")return Tl(n)}function Yx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Yx;function ao(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Et.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,n){var a=Gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xi(e.document)}return n}function Ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var jx=Xi&&"documentMode"in document&&11>=document.documentMode,Vr=null,Cu=null,ro=null,Du=!1;function Wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||Vr==null||Vr!==xi(o)||(o=Vr,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=uc(Cu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Vr)))}function er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var kr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Uu={},qp={};Xi&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function nr(e){if(Uu[e])return Uu[e];if(!kr[e])return e;var n=kr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Uu[e]=n[a];return e}var Yp=nr("animationend"),jp=nr("animationiteration"),Zp=nr("animationstart"),Zx=nr("transitionrun"),Kx=nr("transitionstart"),Qx=nr("transitioncancel"),Kp=nr("transitionend"),Qp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function yi(e,n){Qp.set(e,n),R(n,[e])}var Jp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:He(n)},Jp.set(e,n),n)}return{value:e,source:n,stack:He(n)}}var ci=[],Xr=0,Nu=0;function Al(){for(var e=Xr,n=Nu=Xr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&$p(a,u,d)}}function wl(e,n,a,o){ci[Xr++]=e,ci[Xr++]=n,ci[Xr++]=a,ci[Xr++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return wl(e,n,a,o),Rl(e)}function Wr(e,n){return wl(e,null,null,n),Rl(e)}function $p(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rl(e){if(50<Uo)throw Uo=0,Gf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function Jx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new Jx(e,n,a,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Pu(e)&&(M=1);else if(typeof e=="string")M=tS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=ti(31,a,n,u),e.elementType=C,e.lanes=d,e;case E:return ir(a.children,u,d,n);case A:M=8,u|=24;break;case y:return e=ti(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case O:return e=ti(13,a,n,u),e.elementType=O,e.lanes=d,e;case F:return e=ti(19,a,n,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case U:M=10;break t;case D:M=9;break t;case w:M=11;break t;case k:M=14;break t;case I:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ti(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function ir(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function Bu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Yr=[],jr=0,Dl=null,Ul=0,ui=[],fi=0,ar=null,qi=1,Yi="";function rr(e,n){Yr[jr++]=Ul,Yr[jr++]=Dl,Dl=e,Ul=n}function em(e,n,a){ui[fi++]=qi,ui[fi++]=Yi,ui[fi++]=ar,ar=e;var o=qi;e=Yi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var d=32-Ft(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,qi=1<<32-Ft(n)+u|a<<u|o,Yi=d+e}else qi=1<<d|a<<u|o,Yi=e}function Iu(e){e.return!==null&&(rr(e,1),em(e,1,0))}function Fu(e){for(;e===Dl;)Dl=Yr[--jr],Yr[jr]=null,Ul=Yr[--jr],Yr[jr]=null;for(;e===ar;)ar=ui[--fi],ui[fi]=null,Yi=ui[--fi],ui[fi]=null,qi=ui[--fi],ui[fi]=null}var Hn=null,rn=null,ze=!1,sr=null,Li=!1,Hu=Error(r(519));function or(e){var n=Error(r(418,""));throw lo(li(n,e)),Hu}function nm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[pn]=e,n[nn]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)Ae(No[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),be(n);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Ir(n,o.value,o.defaultValue,o.children),be(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||x0(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=fc),n=!0):n=!1,n||or(e)}function im(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Hn=Hn.return}}function so(e){if(e!==Hn)return!1;if(!ze)return im(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||id(e.type,e.memoizedProps)),a=!a),a&&rn&&or(e),im(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){rn=Mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}rn=null}}else n===27?(n=rn,Na(e.type)?(e=od,od=null,rn=e):rn=n):rn=Hn?Mi(e.stateNode.nextSibling):null;return!0}function oo(){rn=Hn=null,ze=!1}function am(){var e=sr;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),sr=null),e}function lo(e){sr===null?sr=[e]:sr.push(e)}var Gu=J(null),lr=null,ji=null;function va(e,n,a){mt(Gu,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=Gu.current,vt(Gu)}function Vu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function ku(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=u;for(var V=0;V<n.length;V++)if(T.context===n[V]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Vu(d.return,a,e),o||(M=null);break t}d=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Vu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function co(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=u.type;$n(u.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(u===gt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&ku(n,e,a,o),n.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return rm(lr,e)}function Nl(e,n){return lr===null&&cr(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var $x=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ty=s.unstable_scheduleCallback,ey=s.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new $x,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&ty(ey,function(){e.controller.abort()})}var fo=null,Wu=0,Zr=0,Kr=null;function ny(e,n){if(fo===null){var a=fo=[];Wu=0,Zr=jf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(sm,sm),n}function sm(){if(--Wu===0&&fo!==null){Kr!==null&&(Kr.status="fulfilled");var e=fo;fo=null,Zr=0,Kr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function iy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ny(e,n),om!==null&&om(e,n)};var ur=J(null);function qu(){var e=ur.current;return e!==null?e:Ze.pooledCache}function Ol(e,n){n===null?mt(ur,ur.current):mt(ur,n.pool)}function lm(){var e=qu();return e===null?null:{parent:mn._currentValue,pool:e}}var ho=Error(r(460)),cm=Error(r(474)),Pl=Error(r(542)),Yu={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zl(){}function fm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(zl,zl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e;default:if(typeof n.status=="string")n.then(zl,zl);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e}throw po=n,ho}}var po=null;function dm(){if(po===null)throw Error(r(459));var e=po;return po=null,e}function hm(e){if(e===ho||e===Pl)throw Error(r(483))}var xa=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(e),$p(e,null,a),n}return wl(e,o,n,a),Rl(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}function Ku(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Qu=!1;function go(){if(Qu){var e=Kr;if(e!==null)throw e}}function _o(e,n,a,o){Qu=!1;var u=e.updateQueue;xa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var V=T,tt=V.next;V.next=null,M===null?d=tt:M.next=tt,M=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,T=pt.lastBaseUpdate,T!==M&&(T===null?pt.firstBaseUpdate=tt:T.next=tt,pt.lastBaseUpdate=V))}if(d!==null){var St=u.baseState;M=0,pt=tt=V=null,T=d;do{var rt=T.lane&-536870913,st=rt!==T.lane;if(st?(Ce&rt)===rt:(o&rt)===rt){rt!==0&&rt===Zr&&(Qu=!0),pt!==null&&(pt=pt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ue=e,oe=T;rt=n;var ke=a;switch(oe.tag){case 1:if(ue=oe.payload,typeof ue=="function"){St=ue.call(ke,St,rt);break t}St=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=oe.payload,rt=typeof ue=="function"?ue.call(ke,St,rt):ue,rt==null)break t;St=_({},St,rt);break t;case 2:xa=!0}}rt=T.callback,rt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[rt]:st.push(rt))}else st={lane:rt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pt===null?(tt=pt=st,V=St):pt=pt.next=st,M|=rt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;st=T,T=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);pt===null&&(V=St),u.baseState=V,u.firstBaseUpdate=tt,u.lastBaseUpdate=pt,d===null&&(u.shared.lanes=0),Ca|=M,e.lanes=M,e.memoizedState=St}}function pm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pm(a[e],n)}var Qr=J(null),Bl=J(0);function gm(e,n){e=na,mt(Bl,e),mt(Qr,n),na=e|n.baseLanes}function Ju(){mt(Bl,na),mt(Qr,Qr.current)}function $u(){na=Bl.current,vt(Qr),vt(Bl)}var Ma=0,ye=null,Ge=null,un=null,Il=!1,Jr=!1,fr=!1,Fl=0,vo=0,$r=null,ay=0;function on(){throw Error(r(321))}function tf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function ef(e,n,a,o,u,d){return Ma=d,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?$m:tg,fr=!1,d=a(o,u),fr=!1,Jr&&(d=vm(n,a,o,u)),_m(e),d}function _m(e){P.H=Wl;var n=Ge!==null&&Ge.next!==null;if(Ma=0,un=Ge=ye=null,Il=!1,vo=0,$r=null,n)throw Error(r(300));e===null||Sn||(e=e.dependencies,e!==null&&Ll(e)&&(Sn=!0))}function vm(e,n,a,o){ye=e;var u=0;do{if(Jr&&($r=null),vo=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=fy,d=n(a,o)}while(Jr);return d}function ry(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ye.flags|=1024),n}function nf(){var e=Fl!==0;return Fl=0,e}function af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function rf(e){if(Il){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Il=!1}Ma=0,un=Ge=ye=null,Jr=!1,vo=Fl=0,$r=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ye.memoizedState=un=e:un=un.next=e,un}function fn(){if(Ge===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?ye.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?ye.memoizedState=un=e:un=un.next=e}return un}function sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=vo;return vo+=1,$r===null&&($r=[]),e=fm($r,e,n),n=ye,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?$m:tg),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===U)return Ln(e)}throw Error(r(438,String(e)))}function of(e){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sf(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=L;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function Gl(e){var n=fn();return lf(n,Ge,e)}function lf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var T=M=null,V=null,tt=n,pt=!1;do{var St=tt.lane&-536870913;if(St!==tt.lane?(Ce&St)===St:(Ma&St)===St){var rt=tt.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),St===Zr&&(pt=!0);else if((Ma&rt)===rt){tt=tt.next,rt===Zr&&(pt=!0);continue}else St={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},V===null?(T=V=St,M=d):V=V.next=St,ye.lanes|=rt,Ca|=rt;St=tt.action,fr&&a(d,St),d=tt.hasEagerState?tt.eagerState:a(d,St)}else rt={lane:St,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},V===null?(T=V=rt,M=d):V=V.next=rt,ye.lanes|=St,Ca|=St;tt=tt.next}while(tt!==null&&tt!==n);if(V===null?M=d:V.next=T,!$n(d,e.memoizedState)&&(Sn=!0,pt&&(a=Kr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function cf(e){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);$n(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function xm(e,n,a){var o=ye,u=fn(),d=ze;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!$n((Ge||u).memoizedState,a);M&&(u.memoizedState=a,Sn=!0),u=u.queue;var T=Mm.bind(null,o,u,e);if(yo(2048,8,T,[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ts(9,Vl(),Sm.bind(null,o,u,a,n),null),Ze===null)throw Error(r(349));d||(Ma&124)!==0||ym(o,n,a)}return a}function ym(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=sf(),ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sm(e,n,a,o){n.value=a,n.getSnapshot=o,Em(n)&&bm(e)}function Mm(e,n,a){return a(function(){Em(n)&&bm(e)})}function Em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function bm(e){var n=Wr(e,2);n!==null&&ri(n,e,2)}function uf(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),fr){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function Tm(e,n,a,o){return e.baseState=a,lf(e,Ge,typeof o=="function"?o:Ki)}function sy(e,n,a,o,u){if(Xl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Am(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Am(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=P.T,M={};P.T=M;try{var T=a(u,o),V=P.S;V!==null&&V(M,T),wm(e,n,T)}catch(tt){ff(e,n,tt)}finally{P.T=d}}else try{d=a(u,o),wm(e,n,d)}catch(tt){ff(e,n,tt)}}function wm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Rm(e,n,o)},function(o){return ff(e,n,o)}):Rm(e,n,a)}function Rm(e,n,a){n.status="fulfilled",n.value=a,Cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Am(e,a)))}function ff(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Cm(n),n=n.next;while(n!==o)}e.action=null}function Cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dm(e,n){return n}function Um(e,n){if(ze){var a=Ze.formState;if(a!==null){t:{var o=ye;if(ze){if(rn){e:{for(var u=rn,d=Li;u.nodeType!==8;){if(!d){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){rn=Mi(u.nextSibling),o=u.data==="F!";break t}}or(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dm,lastRenderedState:n},a.queue=o,a=Km.bind(null,ye,o),o.dispatch=a,o=uf(!1),d=gf.bind(null,ye,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=sy.bind(null,ye,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Lm(e){var n=fn();return Nm(n,Ge,e)}function Nm(e,n,a){if(n=lf(e,n,Dm)[0],e=Gl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(M){throw M===ho?Pl:M}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,ts(9,Vl(),oy.bind(null,u,a),null)),[o,d,e]}function oy(e,n){e.action=n}function Om(e){var n=fn(),a=Ge;if(a!==null)return Nm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ts(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ye.updateQueue,n===null&&(n=sf(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Vl(){return{destroy:void 0,resource:void 0}}function Pm(){return fn().memoizedState}function kl(e,n,a,o){var u=Zn();o=o===void 0?null:o,ye.flags|=e,u.memoizedState=ts(1|n,Vl(),a,o)}function yo(e,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ge!==null&&o!==null&&tf(o,Ge.memoizedState.deps)?u.memoizedState=ts(n,d,a,o):(ye.flags|=e,u.memoizedState=ts(1|n,d,a,o))}function zm(e,n){kl(8390656,8,e,n)}function Bm(e,n){yo(2048,8,e,n)}function Im(e,n){return yo(4,2,e,n)}function Fm(e,n){return yo(4,4,e,n)}function Hm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gm(e,n,a){a=a!=null?a.concat([e]):null,yo(4,4,Hm.bind(null,n,e),a)}function df(){}function Vm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function km(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=e(),fr){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function hf(e,n,a){return a===void 0||(Ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=qg(),ye.lanes|=e,Ca|=e,a)}function Xm(e,n,a,o){return $n(a,n)?a:Qr.current!==null?(e=hf(e,a,o),$n(e,n)||(Sn=!0),e):(Ma&42)===0?(Sn=!0,e.memoizedState=a):(e=qg(),ye.lanes|=e,Ca|=e,n)}function Wm(e,n,a,o,u){var d=W.p;W.p=d!==0&&8>d?d:8;var M=P.T,T={};P.T=T,gf(e,!1,n,a);try{var V=u(),tt=P.S;if(tt!==null&&tt(T,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=iy(V,o);So(e,n,pt,ai(e))}else So(e,n,o,ai(e))}catch(St){So(e,n,{then:function(){},status:"rejected",reason:St},ai())}finally{W.p=d,P.T=M}}function ly(){}function pf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=qm(e).queue;Wm(e,u,n,G,a===null?ly:function(){return Ym(e),a(o)})}function qm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ym(e){var n=qm(e).next.queue;So(e,n,{},ai())}function mf(){return Ln(Fo)}function jm(){return fn().memoizedState}function Zm(){return fn().memoizedState}function cy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=ya(a);var o=Sa(n,e,a);o!==null&&(ri(o,n,a),mo(o,n,a)),n={cache:Xu()},e.payload=n;return}n=n.return}}function uy(e,n,a){var o=ai();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(e)?Qm(n,a):(a=Ou(e,n,a,o),a!==null&&(ri(a,e,o),Jm(a,n,o)))}function Km(e,n,a){var o=ai();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))Qm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,T=d(M,a);if(u.hasEagerState=!0,u.eagerState=T,$n(T,M))return wl(e,n,u,0),Ze===null&&Al(),!1}catch{}finally{}if(a=Ou(e,n,u,o),a!==null)return ri(a,e,o),Jm(a,n,o),!0}return!1}function gf(e,n,a,o){if(o={lane:2,revertLane:jf(),action:o,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(n)throw Error(r(479))}else n=Ou(e,a,o,2),n!==null&&ri(n,e,2)}function Xl(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function Qm(e,n){Jr=Il=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}var Wl={readContext:Ln,use:Hl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},$m={readContext:Ln,use:Hl,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:zm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,Hm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(fr){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(fr){ct(!0);try{a(n)}finally{ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=uy.bind(null,ye,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=uf(e);var n=e.queue,a=Km.bind(null,ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:df,useDeferredValue:function(e,n){var a=Zn();return hf(a,e,n)},useTransition:function(){var e=uf(!1);return e=Wm.bind(null,ye,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ye,u=Zn();if(ze){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Ce&124)!==0||ym(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,zm(Mm.bind(null,o,d,e),[e]),o.flags|=2048,ts(9,Vl(),Sm.bind(null,o,d,a,n),null),a},useId:function(){var e=Zn(),n=Ze.identifierPrefix;if(ze){var a=Yi,o=qi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ay++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:mf,useFormState:Um,useActionState:Um,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:of,useCacheRefresh:function(){return Zn().memoizedState=cy.bind(null,ye)}},tg={readContext:Ln,use:Hl,useCallback:Vm,useContext:Ln,useEffect:Bm,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:Fm,useMemo:km,useReducer:Gl,useRef:Pm,useState:function(){return Gl(Ki)},useDebugValue:df,useDeferredValue:function(e,n){var a=fn();return Xm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Gl(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:xm,useId:jm,useHostTransitionStatus:mf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,n){var a=fn();return Tm(a,Ge,e,n)},useMemoCache:of,useCacheRefresh:Zm},fy={readContext:Ln,use:Hl,useCallback:Vm,useContext:Ln,useEffect:Bm,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:Fm,useMemo:km,useReducer:cf,useRef:Pm,useState:function(){return cf(Ki)},useDebugValue:df,useDeferredValue:function(e,n){var a=fn();return Ge===null?hf(a,e,n):Xm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=cf(Ki)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:xm,useId:jm,useHostTransitionStatus:mf,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=fn();return Ge!==null?Tm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:Zm},es=null,Mo=0;function ql(e){var n=Mo;return Mo+=1,es===null&&(es=[]),fm(es,e,n)}function Eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Yl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function eg(e){var n=e._init;return n(e._payload)}function ng(e){function n(j,X){if(e){var $=j.deletions;$===null?(j.deletions=[X],j.flags|=16):$.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Wi(j,X),j.index=0,j.sibling=null,j}function d(j,X,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<X?(j.flags|=67108866,X):$):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,X,$,_t){return X===null||X.tag!==6?(X=zu($,j.mode,_t),X.return=j,X):(X=u(X,$),X.return=j,X)}function V(j,X,$,_t){var Xt=$.type;return Xt===E?pt(j,X,$.props.children,_t,$.key):X!==null&&(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===I&&eg(Xt)===X.type)?(X=u(X,$.props),Eo(X,$),X.return=j,X):(X=Cl($.type,$.key,$.props,null,j.mode,_t),Eo(X,$),X.return=j,X)}function tt(j,X,$,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Bu($,j.mode,_t),X.return=j,X):(X=u(X,$.children||[]),X.return=j,X)}function pt(j,X,$,_t,Xt){return X===null||X.tag!==7?(X=ir($,j.mode,_t,Xt),X.return=j,X):(X=u(X,$),X.return=j,X)}function St(j,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=zu(""+X,j.mode,$),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return $=Cl(X.type,X.key,X.props,null,j.mode,$),Eo($,X),$.return=j,$;case S:return X=Bu(X,j.mode,$),X.return=j,X;case I:var _t=X._init;return X=_t(X._payload),St(j,X,$)}if(ut(X)||at(X))return X=ir(X,j.mode,$,null),X.return=j,X;if(typeof X.then=="function")return St(j,ql(X),$);if(X.$$typeof===U)return St(j,Nl(j,X),$);Yl(j,X)}return null}function rt(j,X,$,_t){var Xt=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Xt!==null?null:T(j,X,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Xt?V(j,X,$,_t):null;case S:return $.key===Xt?tt(j,X,$,_t):null;case I:return Xt=$._init,$=Xt($._payload),rt(j,X,$,_t)}if(ut($)||at($))return Xt!==null?null:pt(j,X,$,_t,null);if(typeof $.then=="function")return rt(j,X,ql($),_t);if($.$$typeof===U)return rt(j,X,Nl(j,$),_t);Yl(j,$)}return null}function st(j,X,$,_t,Xt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get($)||null,T(X,j,""+_t,Xt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return j=j.get(_t.key===null?$:_t.key)||null,V(X,j,_t,Xt);case S:return j=j.get(_t.key===null?$:_t.key)||null,tt(X,j,_t,Xt);case I:var Ee=_t._init;return _t=Ee(_t._payload),st(j,X,$,_t,Xt)}if(ut(_t)||at(_t))return j=j.get($)||null,pt(X,j,_t,Xt,null);if(typeof _t.then=="function")return st(j,X,$,ql(_t),Xt);if(_t.$$typeof===U)return st(j,X,$,Nl(X,_t),Xt);Yl(X,_t)}return null}function ue(j,X,$,_t){for(var Xt=null,Ee=null,$t=X,ce=X=0,En=null;$t!==null&&ce<$.length;ce++){$t.index>ce?(En=$t,$t=null):En=$t.sibling;var Ne=rt(j,$t,$[ce],_t);if(Ne===null){$t===null&&($t=En);break}e&&$t&&Ne.alternate===null&&n(j,$t),X=d(Ne,X,ce),Ee===null?Xt=Ne:Ee.sibling=Ne,Ee=Ne,$t=En}if(ce===$.length)return a(j,$t),ze&&rr(j,ce),Xt;if($t===null){for(;ce<$.length;ce++)$t=St(j,$[ce],_t),$t!==null&&(X=d($t,X,ce),Ee===null?Xt=$t:Ee.sibling=$t,Ee=$t);return ze&&rr(j,ce),Xt}for($t=o($t);ce<$.length;ce++)En=st($t,j,ce,$[ce],_t),En!==null&&(e&&En.alternate!==null&&$t.delete(En.key===null?ce:En.key),X=d(En,X,ce),Ee===null?Xt=En:Ee.sibling=En,Ee=En);return e&&$t.forEach(function(Ia){return n(j,Ia)}),ze&&rr(j,ce),Xt}function oe(j,X,$,_t){if($==null)throw Error(r(151));for(var Xt=null,Ee=null,$t=X,ce=X=0,En=null,Ne=$.next();$t!==null&&!Ne.done;ce++,Ne=$.next()){$t.index>ce?(En=$t,$t=null):En=$t.sibling;var Ia=rt(j,$t,Ne.value,_t);if(Ia===null){$t===null&&($t=En);break}e&&$t&&Ia.alternate===null&&n(j,$t),X=d(Ia,X,ce),Ee===null?Xt=Ia:Ee.sibling=Ia,Ee=Ia,$t=En}if(Ne.done)return a(j,$t),ze&&rr(j,ce),Xt;if($t===null){for(;!Ne.done;ce++,Ne=$.next())Ne=St(j,Ne.value,_t),Ne!==null&&(X=d(Ne,X,ce),Ee===null?Xt=Ne:Ee.sibling=Ne,Ee=Ne);return ze&&rr(j,ce),Xt}for($t=o($t);!Ne.done;ce++,Ne=$.next())Ne=st($t,j,ce,Ne.value,_t),Ne!==null&&(e&&Ne.alternate!==null&&$t.delete(Ne.key===null?ce:Ne.key),X=d(Ne,X,ce),Ee===null?Xt=Ne:Ee.sibling=Ne,Ee=Ne);return e&&$t.forEach(function(dS){return n(j,dS)}),ze&&rr(j,ce),Xt}function ke(j,X,$,_t){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Xt=$.key;X!==null;){if(X.key===Xt){if(Xt=$.type,Xt===E){if(X.tag===7){a(j,X.sibling),_t=u(X,$.props.children),_t.return=j,j=_t;break t}}else if(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===I&&eg(Xt)===X.type){a(j,X.sibling),_t=u(X,$.props),Eo(_t,$),_t.return=j,j=_t;break t}a(j,X);break}else n(j,X);X=X.sibling}$.type===E?(_t=ir($.props.children,j.mode,_t,$.key),_t.return=j,j=_t):(_t=Cl($.type,$.key,$.props,null,j.mode,_t),Eo(_t,$),_t.return=j,j=_t)}return M(j);case S:t:{for(Xt=$.key;X!==null;){if(X.key===Xt)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(j,X.sibling),_t=u(X,$.children||[]),_t.return=j,j=_t;break t}else{a(j,X);break}else n(j,X);X=X.sibling}_t=Bu($,j.mode,_t),_t.return=j,j=_t}return M(j);case I:return Xt=$._init,$=Xt($._payload),ke(j,X,$,_t)}if(ut($))return ue(j,X,$,_t);if(at($)){if(Xt=at($),typeof Xt!="function")throw Error(r(150));return $=Xt.call($),oe(j,X,$,_t)}if(typeof $.then=="function")return ke(j,X,ql($),_t);if($.$$typeof===U)return ke(j,X,Nl(j,$),_t);Yl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(j,X.sibling),_t=u(X,$),_t.return=j,j=_t):(a(j,X),_t=zu($,j.mode,_t),_t.return=j,j=_t),M(j)):a(j,X)}return function(j,X,$,_t){try{Mo=0;var Xt=ke(j,X,$,_t);return es=null,Xt}catch($t){if($t===ho||$t===Pl)throw $t;var Ee=ti(29,$t,null,j.mode);return Ee.lanes=_t,Ee.return=j,Ee}finally{}}}var ns=ng(!0),ig=ng(!1),di=J(null),Ni=null;function Ea(e){var n=e.alternate;mt(gn,gn.current&1),mt(di,e),Ni===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(Ni=e)}function ag(e){if(e.tag===22){if(mt(gn,gn.current),mt(di,e),Ni===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ni=e)}}else ba()}function ba(){mt(gn,gn.current),mt(di,di.current)}function Qi(e){vt(di),Ni===e&&(Ni=null),vt(gn)}var gn=J(0);function jl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||sd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function _f(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=ya(o);u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(ri(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(ri(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=ya(a);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,a),n!==null&&(ri(n,e,a),mo(n,e,a))}};function rg(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,d):!0}function sg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&vf.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function og(e){Zl(e)}function lg(e){console.error(e)}function cg(e){Zl(e)}function Kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xf(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(e,n)},a}function fg(e){return e=ya(e),e.tag=3,e}function dg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){ug(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){ug(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function dy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&co(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 13:return Ni===null?kf():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(e,o,u)),!1;case 22:return a.flags|=65536,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(e,o,u)),!1}throw Error(r(435,a.tag))}return Wf(e,o,u),kf(),!1}if(ze)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(e=Error(r(422),{cause:o}),lo(li(e,a)))):(o!==Hu&&(n=Error(r(423),{cause:o}),lo(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=xf(e.stateNode,o,u),Ku(e,u),sn!==4&&(sn=2)),!1;var d=Error(r(520),{cause:o});if(d=li(d,a),Do===null?Do=[d]:Do.push(d),sn!==4&&(sn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=xf(a.stateNode,o,e),Ku(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Da===null||!Da.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=fg(u),dg(u,e,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var hg=Error(r(461)),Sn=!1;function wn(e,n,a,o){n.child=e===null?ig(n,null,a,o):ns(n,e.child,a,o)}function pg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return cr(n),o=ef(e,n,a,M,d,u),T=nf(),e!==null&&!Sn?(af(e,n,u),Ji(e,n,u)):(ze&&T&&Iu(n),n.flags|=1,wn(e,n,o,u),n.child)}function mg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,gg(e,n,d,o,u)):(e=Cl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!wf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(M,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=Wi(d,o),e.ref=n.ref,e.return=n,n.child=e}function gg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(ao(d,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,wf(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return yf(e,n,a,o,u)}function _g(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return vg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(n,d!==null?d.cachePool:null),d!==null?gm(n,d):Ju(),ag(n);else return n.lanes=n.childLanes=536870912,vg(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ol(n,d.cachePool),gm(n,d),ba(),n.memoizedState=null):(e!==null&&Ol(n,null),Ju(),ba());return wn(e,n,u,a),n.child}function vg(e,n,a,o){var u=qu();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ol(n,null),Ju(),ag(n),e!==null&&co(e,n,o,!0),null}function Ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yf(e,n,a,o,u){return cr(n),a=ef(e,n,a,o,void 0,u),o=nf(),e!==null&&!Sn?(af(e,n,u),Ji(e,n,u)):(ze&&o&&Iu(n),n.flags|=1,wn(e,n,a,u),n.child)}function xg(e,n,a,o,u,d){return cr(n),n.updateQueue=null,a=vm(n,o,a,u),_m(e),o=nf(),e!==null&&!Sn?(af(e,n,d),Ji(e,n,d)):(ze&&o&&Iu(n),n.flags|=1,wn(e,n,a,d),n.child)}function yg(e,n,a,o,u){if(cr(n),n.stateNode===null){var d=qr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Ln(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ju(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Ln(M):qr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(_f(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&vf.enqueueReplaceState(d,d.state,null),_o(n,o,d,u),go(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var T=n.memoizedProps,V=dr(a,T);d.props=V;var tt=d.context,pt=a.contextType;M=qr,typeof pt=="object"&&pt!==null&&(M=Ln(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||tt!==M)&&sg(n,d,o,M),xa=!1;var rt=n.memoizedState;d.state=rt,_o(n,o,d,u),go(),tt=n.memoizedState,T||rt!==tt||xa?(typeof St=="function"&&(_f(n,a,St,o),tt=n.memoizedState),(V=xa||rg(n,a,V,o,rt,tt,M))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),d.props=o,d.state=tt,d.context=M,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(e,n),M=n.memoizedProps,pt=dr(a,M),d.props=pt,St=n.pendingProps,rt=d.context,tt=a.contextType,V=qr,typeof tt=="object"&&tt!==null&&(V=Ln(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==St||rt!==V)&&sg(n,d,o,V),xa=!1,rt=n.memoizedState,d.state=rt,_o(n,o,d,u),go();var st=n.memoizedState;M!==St||rt!==st||xa||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof T=="function"&&(_f(n,a,T,o),st=n.memoizedState),(pt=xa||rg(n,a,pt,o,rt,st,V)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(tt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,st,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,st,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=V,o=pt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ql(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ns(n,e.child,null,u),n.child=ns(n,null,a,u)):wn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Ji(e,n,u),e}function Sg(e,n,a,o){return oo(),n.flags|=256,wn(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:lm()}}function Ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function Mg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?Ea(n):ba(),ze){var T=rn,V;if(V=T){t:{for(V=T,T=Li;V.nodeType!==8;){if(!T){T=null;break t}if(V=Mi(V.nextSibling),V===null){T=null;break t}}T=V}T!==null?(n.memoizedState={dehydrated:T,treeContext:ar!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},V=ti(18,null,null,0),V.stateNode=T,V.return=n,n.child=V,Hn=n,rn=null,V=!0):V=!1}V||or(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return sd(T)?n.lanes=32:n.lanes=536870912,null;Qi(n)}return T=o.children,o=o.fallback,u?(ba(),u=n.mode,T=Jl({mode:"hidden",children:T},u),o=ir(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=Mf(a),u.childLanes=Ef(e,M,a),n.memoizedState=Sf,o):(Ea(n),bf(n,T))}if(V=e.memoizedState,V!==null&&(T=V.dehydrated,T!==null)){if(d)n.flags&256?(Ea(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(ba(),n.child=e.child,n.flags|=128,n=null):(ba(),u=o.fallback,T=n.mode,o=Jl({mode:"visible",children:o.children},T),u=ir(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ns(n,e.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(e,M,a),n.memoizedState=Sf,n=u);else if(Ea(n),sd(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var tt=M.dgst;M=tt,o=Error(r(419)),o.stack="",o.digest=M,lo({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(Sn||co(e,n,a,!1),M=(a&e.childLanes)!==0,Sn||M){if(M=Ze,M!==null&&(o=a&-a,o=(o&42)!==0?1:fe(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==V.retryLane))throw V.retryLane=o,Wr(e,o),ri(M,e,o),hg;T.data==="$?"||kf(),n=Tf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,rn=Mi(T.nextSibling),Hn=n,ze=!0,sr=null,Li=!1,e!==null&&(ui[fi++]=qi,ui[fi++]=Yi,ui[fi++]=ar,qi=e.id,Yi=e.overflow,ar=n),n=bf(n,o.children),n.flags|=4096);return n}return u?(ba(),u=o.fallback,T=n.mode,V=e.child,tt=V.sibling,o=Wi(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,tt!==null?u=Wi(tt,u):(u=ir(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=Mf(a):(V=T.cachePool,V!==null?(tt=mn._currentValue,V=V.parent!==tt?{parent:tt,pool:tt}:V):V=lm(),T={baseLanes:T.baseLanes|a,cachePool:V}),u.memoizedState=T,u.childLanes=Ef(e,M,a),n.memoizedState=Sf,o):(Ea(n),a=e.child,e=a.sibling,a=Wi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function bf(e,n){return n=Jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Jl(e,n){return e=ti(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Tf(e,n,a){return ns(n,e.child,null,a),e=bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Vu(e.return,n,a)}function Af(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function bg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(wn(e,n,o.children,a),o=gn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eg(e,a,n);else if(e.tag===19)Eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(mt(gn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&jl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&jl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,d);break;case"together":Af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(co(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function hy(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),va(n,mn,e.memoizedState.cache),oo();break;case 27:case 5:ee(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mg(e,n,a):(Ea(n),e=Ji(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(co(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return bg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(gn,gn.current),o)break;return null;case 22:case 23:return n.lanes=0,_g(e,n,a);case 24:va(n,mn,e.memoizedState.cache)}return Ji(e,n,a)}function Tg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!wf(e,a)&&(n.flags&128)===0)return Sn=!1,hy(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,ze&&(n.flags&1048576)!==0&&em(n,Ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Pu(o)?(e=dr(o,e),n.tag=1,n=yg(null,n,o,e,a)):(n.tag=0,n=yf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=pg(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=mg(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(r(306,n,""))}}return n;case 0:return yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=dr(o,n.pendingProps),yg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(e,n),_o(n,o,null,a);var M=n.memoizedState;if(o=M.cache,va(n,mn,o),o!==d.cache&&ku(n,[mn],a,!0),go(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Sg(e,n,o,a);break t}else if(o!==u){u=li(Error(r(424)),n),lo(u),n=Sg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rn=Mi(e.firstChild),Hn=n,ze=!0,sr=null,Li=!0,a=ig(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(oo(),o===u){n=Ji(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Ql(e,n),e===null?(a=C0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=dc(ht.current).createElement(a),o[pn]=n,o[nn]=e,Cn(o,a,e),cn(o),n.stateNode=o):n.memoizedState=C0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&ze&&(o=n.stateNode=A0(n.type,n.pendingProps,ht.current),Hn=n,Li=!0,u=rn,Na(n.type)?(od=u,rn=Mi(o.firstChild)):rn=u),wn(e,n,n.pendingProps.children,a),Ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=rn)&&(o=Gy(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Hn=n,rn=Mi(o.firstChild),Li=!1,u=!0):u=!1),u||or(n)),ee(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,id(u,d)?o=null:M!==null&&id(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(e,n,ry,null,null,a),Fo._currentValue=u),Ql(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=rn)&&(a=Vy(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Hn=n,rn=null,e=!0):e=!1),e||or(n)),null;case 13:return Mg(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ns(n,null,o,a):wn(e,n,o,a),n.child;case 11:return pg(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,va(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=Ln(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return mg(e,n,n.type,n.pendingProps,a);case 15:return gg(e,n,n.type,n.pendingProps,a);case 19:return bg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Wi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return _g(e,n,a);case 24:return cr(n),o=Ln(mn),e===null?(u=qu(),u===null&&(u=Ze,d=Xu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ju(n),va(n,mn,u)):((e.lanes&a)!==0&&(Zu(e,n),_o(n,null,null,a),go()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,mn,o)):(o=d.cache,va(n,mn,o),o!==u.cache&&ku(n,[mn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function Ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!O0(n)){if(n=di.current,n!==null&&((Ce&4194048)===Ce?Ni!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||n!==Ni))throw po=Yu,cm;e.flags|=8192}}function $l(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,ss|=n)}function bo(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function py(e,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(mn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(so(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,am())),en(n),null;case 26:return a=n.memoizedState,e===null?($i(n),a!==null?(en(n),Ag(n,a)):(en(n),n.flags&=-16777217)):a?a!==e.memoizedState?($i(n),en(n),Ag(n,a)):(en(n),n.flags&=-16777217):(e.memoizedProps!==o&&$i(n),en(n),n.flags&=-16777217),null;case 27:De(n),a=ht.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}e=bt.current,so(n)?nm(n):(e=A0(u,o,a),n.stateNode=e,$i(n))}return en(n),null;case 5:if(De(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(e=bt.current,so(n))nm(n);else{switch(u=dc(ht.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[pn]=n,e[nn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Cn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$i(n)}}return en(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ht.current,so(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Hn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[pn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||x0(e.nodeValue,a)),e||or(n)}else e=dc(e).createTextNode(o),e[pn]=n,n.stateNode=e}return en(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=so(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[pn]=n}else oo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=am(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qi(n),n):(Qi(n),null)}if(Qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),en(n),null;case 4:return Gt(),e===null&&Jf(n.stateNode.containerInfo),en(n),null;case 10:return Zi(n.type),en(n),null;case 19:if(vt(gn),u=n.memoizedState,u===null)return en(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)bo(u,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=jl(e),d!==null){for(n.flags|=128,bo(u,!1),e=d.updateQueue,n.updateQueue=e,$l(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)tm(a,e),a=a.sibling;return mt(gn,gn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Lt()>nc&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304)}else{if(!o)if(e=jl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,$l(n,e),bo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!ze)return en(n),null}else 2*Lt()-u.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Lt(),n.sibling=null,e=gn.current,mt(gn,o?e&1|2:e&1),n):(en(n),null);case 22:case 23:return Qi(n),$u(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(mn),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function my(e,n){switch(Fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(mn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return De(n),null;case 13:if(Qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));oo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(gn),null;case 4:return Gt(),null;case 10:return Zi(n.type),null;case 22:case 23:return Qi(n),$u(),e!==null&&vt(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(mn),null;case 25:return null;default:return null}}function wg(e,n){switch(Fu(n),n.tag){case 3:Zi(mn),Gt();break;case 26:case 27:case 5:De(n);break;case 4:Gt();break;case 13:Qi(n);break;case 19:vt(gn);break;case 10:Zi(n.type);break;case 22:case 23:Qi(n),$u(),e!==null&&vt(ur);break;case 24:Zi(mn)}}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){je(n,n.return,T)}}function Ta(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var V=a,tt=T;try{tt()}catch(pt){je(u,V,pt)}}}o=o.next}while(o!==d)}}catch(pt){je(n,n.return,pt)}}function Rg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{mm(n,a)}catch(o){je(e,e.return,o)}}}function Cg(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){je(e,n,o)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){je(e,n,u)}}function Oi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){je(e,n,u)}else a.current=null}function Dg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){je(e,e.return,u)}}function Rf(e,n,a){try{var o=e.stateNode;zy(o,e.type,a,n),o[nn]=n}catch(u){je(e,e.return,u)}}function Ug(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fc));else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function tc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,n,a),e=e.sibling;e!==null;)tc(e,n,a),e=e.sibling}function Lg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[pn]=e,n[nn]=a}catch(d){je(e,e.return,d)}}var ta=!1,ln=!1,Uf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function gy(e,n){if(e=e.containerInfo,ed=vc,e=Xp(e),Ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,T=-1,V=-1,tt=0,pt=0,St=e,rt=null;e:for(;;){for(var st;St!==a||u!==0&&St.nodeType!==3||(T=M+u),St!==d||o!==0&&St.nodeType!==3||(V=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(st=St.firstChild)!==null;)rt=St,St=st;for(;;){if(St===e)break e;if(rt===a&&++tt===u&&(T=M),rt===d&&++pt===o&&(V=M),(st=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=st}a=T===-1||V===-1?null:{start:T,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:e,selectionRange:a},vc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ue=dr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ue,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){je(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)rd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function Og(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a),o&4&&To(5,a);break;case 1:if(Aa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){je(a,a.return,M)}else{var u=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){je(a,a.return,M)}}o&64&&Rg(a),o&512&&Ao(a,a.return);break;case 3:if(Aa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mm(e,n)}catch(M){je(a,a.return,M)}}break;case 27:n===null&&o&4&&Lg(a);case 26:case 5:Aa(e,a),n===null&&o&4&&Dg(a),o&512&&Ao(a,a.return);break;case 12:Aa(e,a);break;case 13:Aa(e,a),o&4&&Bg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ty.bind(null,a),ky(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||ln,u=ta;var d=ln;ta=o,(ln=n)&&!d?wa(e,a,(a.subtreeFlags&8772)!==0):Aa(e,a),ta=u,ln=d}break;case 30:break;default:Aa(e,a)}}function Pg(e){var n=e.alternate;n!==null&&(e.alternate=null,Pg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Br(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Kn=!1;function ea(e,n,a){for(a=a.child;a!==null;)zg(e,n,a),a=a.sibling}function zg(e,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:ln||Oi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Oi(a,n);var o=tn,u=Kn;Na(a.type)&&(tn=a.stateNode,Kn=!1),ea(e,n,a),Po(a.stateNode),tn=o,Kn=u;break;case 5:ln||Oi(a,n);case 6:if(o=tn,u=Kn,tn=null,ea(e,n,a),tn=o,Kn=u,tn!==null)if(Kn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(d){je(a,n,d)}else try{tn.removeChild(a.stateNode)}catch(d){je(a,n,d)}break;case 18:tn!==null&&(Kn?(e=tn,b0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ko(e)):b0(tn,a.stateNode));break;case 4:o=tn,u=Kn,tn=a.stateNode.containerInfo,Kn=!0,ea(e,n,a),tn=o,Kn=u;break;case 0:case 11:case 14:case 15:ln||Ta(2,a,n),ln||Ta(4,a,n),ea(e,n,a);break;case 1:ln||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Cg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,ea(e,n,a),ln=o;break;default:ea(e,n,a)}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ko(e)}catch(a){je(n,n.return,a)}}function _y(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ng),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ng),n;default:throw Error(r(435,e.tag))}}function Lf(e,n){var a=_y(e);n.forEach(function(o){var u=Ay.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Na(T.type)){tn=T.stateNode,Kn=!1;break t}break;case 5:tn=T.stateNode,Kn=!1;break t;case 3:case 4:tn=T.stateNode.containerInfo,Kn=!0;break t}T=T.return}if(tn===null)throw Error(r(160));zg(d,M,u),tn=null,Kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ig(n,e),n=n.sibling}var Si=null;function Ig(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(n,e),ni(e),o&4&&(Ta(3,e,e.return),To(3,e),Ta(5,e,e.return));break;case 1:ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Si;if(ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ui]||d[pn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[pn]=e,cn(d),o=d;break t;case"link":var M=L0("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(d=M[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=L0("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(d=M[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[pn]=e,cn(d),o=d}e.stateNode=o}else N0(u,e.type,e.stateNode);else e.stateNode=U0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?N0(u,e.type,e.stateNode):U0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),a!==null&&o&4&&Rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,e),ni(e),o&512&&(ln||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{Yn(u,"")}catch(st){je(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Rf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(ei(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){je(e,e.return,st)}}break;case 3:if(mc=null,u=Si,Si=hc(n.containerInfo),ei(n,e),Si=u,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(n.containerInfo)}catch(st){je(e,e.return,st)}Uf&&(Uf=!1,Fg(e));break;case 4:o=Si,Si=hc(e.stateNode.containerInfo),ei(n,e),ni(e),Si=o;break;case 12:ei(n,e),ni(e);break;case 13:ei(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(If=Lt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lf(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,tt=ta,pt=ln;if(ta=tt||u,ln=pt||V,ei(n,e),ln=pt,ta=tt,ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||ta||ln||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=V.stateNode;var St=V.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;T.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(st){je(V,V.return,st)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(st){je(V,V.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Lf(e,a))));break;case 19:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lf(e,o)));break;case 30:break;case 21:break;default:ei(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ug(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Cf(e);tc(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Yn(M,""),a.flags&=-33);var T=Cf(e);tc(e,T,M);break;case 3:case 4:var V=a.stateNode.containerInfo,tt=Cf(e);Df(e,tt,V);break;default:throw Error(r(161))}}catch(pt){je(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cg(n,n.return,a),hr(n);break;case 27:Po(n.stateNode);case 26:case 5:Oi(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function wa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:wa(u,d,a),To(4,d);break;case 1:if(wa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){je(o,o.return,tt)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)pm(V[u],T)}catch(tt){je(o,o.return,tt)}}a&&M&64&&Rg(d),Ao(d,d.return);break;case 27:Lg(d);case 26:case 5:wa(u,d,a),a&&o===null&&M&4&&Dg(d),Ao(d,d.return);break;case 12:wa(u,d,a);break;case 13:wa(u,d,a),a&&M&4&&Bg(u,d);break;case 22:d.memoizedState===null&&wa(u,d,a),Ao(d,d.return);break;case 30:break;default:wa(u,d,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function Pi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hg(e,n,a,o),n=n.sibling}function Hg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n,a,o),u&2048&&To(9,n);break;case 1:Pi(e,n,a,o);break;case 3:Pi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(u&2048){Pi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,T=d.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){je(n,n.return,V)}}else Pi(e,n,a,o);break;case 13:Pi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(e,n,a,o):wo(e,n):d._visibility&2?Pi(e,n,a,o):(d._visibility|=2,is(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Nf(M,n);break;case 24:Pi(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:Pi(e,n,a,o)}}function is(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,T=a,V=o,tt=M.flags;switch(M.tag){case 0:case 11:case 15:is(d,M,T,V,u),To(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&2?is(d,M,T,V,u):wo(d,M):(pt._visibility|=2,is(d,M,T,V,u)),u&&tt&2048&&Nf(M.alternate,M);break;case 24:is(d,M,T,V,u),u&&tt&2048&&Of(M.alternate,M);break;default:is(d,M,T,V,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Nf(o.alternate,o);break;case 24:wo(a,o),u&2048&&Of(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Ro=8192;function as(e){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)Gg(e),e=e.sibling}function Gg(e){switch(e.tag){case 26:as(e),e.flags&Ro&&e.memoizedState!==null&&nS(Si,e.memoizedState,e.memoizedProps);break;case 5:as(e);break;case 3:case 4:var n=Si;Si=hc(e.stateNode.containerInfo),as(e),Si=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ro,Ro=16777216,as(e),Ro=n):as(e));break;default:as(e)}}function Vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Xg(o,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kg(e),e=e.sibling}function kg(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ec(e)):Co(e);break;default:Co(e)}}function ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Xg(o,e)}Vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}e=e.sibling}}function Xg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(Pg(o),o===a){Mn=null;break t}if(u!==null){u.return=d,Mn=u;break t}Mn=d}}}var vy={getCacheForType:function(e){var n=Ln(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},xy=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ze=null,Te=null,Ce=0,Fe=0,ii=null,Ra=!1,rs=!1,Pf=!1,na=0,sn=0,Ca=0,pr=0,zf=0,hi=0,ss=0,Do=null,Qn=null,Bf=!1,If=0,nc=1/0,ic=null,Da=null,Rn=0,Ua=null,os=null,ls=0,Ff=0,Hf=null,Wg=null,Uo=0,Gf=null;function ai(){if((Ie&2)!==0&&Ce!==0)return Ce&-Ce;if(P.T!==null){var e=Zr;return e!==0?e:jf()}return Ue()}function qg(){hi===0&&(hi=(Ce&536870912)===0||ze?q():536870912);var e=di.current;return e!==null&&(e.flags|=32),hi}function ri(e,n,a){(e===Ze&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(cs(e,0),La(e,Ce,hi,!1)),Ht(e,a),((Ie&2)===0||e!==Ze)&&(e===Ze&&((Ie&2)===0&&(pr|=a),sn===4&&La(e,Ce,hi,!1)),zi(e))}function Yg(e,n,a){if((Ie&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Nt(e,n),u=o?My(e,n):Xf(e,n,!0),d=o;do{if(u===0){rs&&!o&&La(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!yy(a)){u=Xf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;u=Do;var V=T.current.memoizedState.isDehydrated;if(V&&(cs(T,M).flags|=256),M=Xf(T,M,!1),M!==2){if(Pf&&!V){T.errorRecoveryDisabledLanes|=d,pr|=d,u=4;break t}d=Qn,Qn=u,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){cs(e,0),La(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,hi,!Ra);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=If+300-Lt(),10<u)){if(La(o,n,hi,!Ra),jt(o,0,!0)!==0)break t;o.timeoutHandle=M0(jg.bind(null,o,a,Qn,ic,Bf,n,hi,pr,ss,Ra,d,2,-0,0),u);break t}jg(o,a,Qn,ic,Bf,n,hi,pr,ss,Ra,d,0,-0,0)}}break}while(!0);zi(e)}function jg(e,n,a,o,u,d,M,T,V,tt,pt,St,rt,st){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(Io={stylesheets:null,count:0,unsuspend:eS},Gg(n),St=iS(),St!==null)){e.cancelPendingCommit=St(e0.bind(null,e,n,d,a,o,u,M,T,V,pt,1,rt,st)),La(e,d,M,!tt);return}e0(e,n,d,a,o,u,M,T,V)}function yy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,o){n&=~zf,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Ft(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Mt(e,a,n)}function ac(){return(Ie&6)===0?(Lo(0),!1):!0}function Vf(){if(Te!==null){if(Fe===0)var e=Te.return;else e=Te,ji=lr=null,rf(e),es=null,Mo=0,e=Te;for(;e!==null;)wg(e.alternate,e),e=e.return;Te=null}}function cs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vf(),Ze=e,Te=a=Wi(e.current,null),Ce=n,Fe=0,ii=null,Ra=!1,rs=Nt(e,n),Pf=!1,ss=hi=zf=pr=Ca=sn=0,Qn=Do=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),d=1<<u;n|=e[u],o&=~d}return na=n,Al(),a}function Zg(e,n){ye=null,P.H=Wl,n===ho||n===Pl?(n=dm(),Fe=3):n===cm?(n=dm(),Fe=4):Fe=n===hg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Te===null&&(sn=1,Kl(e,li(n,e.current)))}function Kg(){var e=P.H;return P.H=Wl,e===null?Wl:e}function Qg(){var e=P.A;return P.A=vy,e}function kf(){sn=4,Ra||(Ce&4194048)!==Ce&&di.current!==null||(rs=!0),(Ca&134217727)===0&&(pr&134217727)===0||Ze===null||La(Ze,Ce,hi,!1)}function Xf(e,n,a){var o=Ie;Ie|=2;var u=Kg(),d=Qg();(Ze!==e||Ce!==n)&&(ic=null,cs(e,n)),n=!1;var M=sn;t:do try{if(Fe!==0&&Te!==null){var T=Te,V=ii;switch(Fe){case 8:Vf(),M=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var tt=Fe;if(Fe=0,ii=null,us(e,T,V,tt),a&&rs){M=0;break t}break;default:tt=Fe,Fe=0,ii=null,us(e,T,V,tt)}}Sy(),M=sn;break}catch(pt){Zg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ji=lr=null,Ie=o,P.H=u,P.A=d,Te===null&&(Ze=null,Ce=0,Al()),M}function Sy(){for(;Te!==null;)Jg(Te)}function My(e,n){var a=Ie;Ie|=2;var o=Kg(),u=Qg();Ze!==e||Ce!==n?(ic=null,nc=Lt()+500,cs(e,n)):rs=Nt(e,n);t:do try{if(Fe!==0&&Te!==null){n=Te;var d=ii;e:switch(Fe){case 1:Fe=0,ii=null,us(e,n,d,1);break;case 2:case 9:if(um(d)){Fe=0,ii=null,$g(n);break}n=function(){Fe!==2&&Fe!==9||Ze!==e||(Fe=7),zi(e)},d.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:um(d)?(Fe=0,ii=null,$g(n)):(Fe=0,ii=null,us(e,n,d,7));break;case 5:var M=null;switch(Te.tag){case 26:M=Te.memoizedState;case 5:case 27:var T=Te;if(!M||O0(M)){Fe=0,ii=null;var V=T.sibling;if(V!==null)Te=V;else{var tt=T.return;tt!==null?(Te=tt,rc(tt)):Te=null}break e}}Fe=0,ii=null,us(e,n,d,5);break;case 6:Fe=0,ii=null,us(e,n,d,6);break;case 8:Vf(),sn=6;break t;default:throw Error(r(462))}}Ey();break}catch(pt){Zg(e,pt)}while(!0);return ji=lr=null,P.H=o,P.A=u,Ie=a,Te!==null?0:(Ze=null,Ce=0,Al(),sn)}function Ey(){for(;Te!==null&&!kt();)Jg(Te)}function Jg(e){var n=Tg(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?rc(e):Te=n}function $g(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:rf(n);default:wg(a,n),n=Te=tm(n,na),n=Tg(a,n,na)}e.memoizedProps=e.pendingProps,n===null?rc(e):Te=n}function us(e,n,a,o){ji=lr=null,rf(n),es=null,Mo=0;var u=n.return;try{if(dy(e,u,n,a,Ce)){sn=1,Kl(e,li(a,e.current)),Te=null;return}}catch(d){if(u!==null)throw Te=u,d;sn=1,Kl(e,li(a,e.current)),Te=null;return}n.flags&32768?(ze||o===1?e=!0:rs||(Ce&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),t0(n,e)):rc(n)}function rc(e){var n=e;do{if((n.flags&32768)!==0){t0(n,Ra);return}e=n.return;var a=py(n.alternate,n,na);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);sn===0&&(sn=5)}function t0(e,n){do{var a=my(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);sn=6,Te=null}function e0(e,n,a,o,u,d,M,T,V){e.cancelPendingCommit=null;do sc();while(Rn!==0);if((Ie&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Nu,At(e,a,d,M,T,V),e===Ze&&(Te=Ze=null,Ce=0),os=n,Ua=e,ls=a,Ff=d,Hf=u,Wg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wy(Pe,function(){return s0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=W.p,W.p=2,M=Ie,Ie|=4;try{gy(e,n,a)}finally{Ie=M,W.p=u,P.T=o}}Rn=1,n0(),i0(),a0()}}function n0(){if(Rn===1){Rn=0;var e=Ua,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Ie;Ie|=4;try{Ig(n,e);var d=nd,M=Xp(e.containerInfo),T=d.focusedElem,V=d.selectionRange;if(M!==T&&T&&T.ownerDocument&&kp(T.ownerDocument.documentElement,T)){if(V!==null&&Ru(T)){var tt=V.start,pt=V.end;if(pt===void 0&&(pt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(pt,T.value.length);else{var St=T.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var st=rt.getSelection(),ue=T.textContent.length,oe=Math.min(V.start,ue),ke=V.end===void 0?oe:Math.min(V.end,ue);!st.extend&&oe>ke&&(M=ke,ke=oe,oe=M);var j=Vp(T,oe),X=Vp(T,ke);if(j&&X&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var $=St.createRange();$.setStart(j.node,j.offset),st.removeAllRanges(),oe>ke?(st.addRange($),st.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),st.addRange($))}}}}for(St=[],st=T;st=st.parentNode;)st.nodeType===1&&St.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<St.length;T++){var _t=St[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}vc=!!ed,nd=ed=null}finally{Ie=u,W.p=o,P.T=a}}e.current=n,Rn=2}}function i0(){if(Rn===2){Rn=0;var e=Ua,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Ie;Ie|=4;try{Og(e,n.alternate,n)}finally{Ie=u,W.p=o,P.T=a}}Rn=3}}function a0(){if(Rn===4||Rn===3){Rn=0,Qt();var e=Ua,n=os,a=ls,o=Wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,os=Ua=null,r0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),Be(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=W.p,W.p=2,P.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];d(T.value,{componentStack:T.stack})}}finally{P.T=n,W.p=u}}(ls&3)!==0&&sc(),zi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Gf?Uo++:(Uo=0,Gf=e):Uo=0,Lo(0)}}function r0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function sc(e){return n0(),i0(),a0(),s0()}function s0(){if(Rn!==5)return!1;var e=Ua,n=Ff;Ff=0;var a=Be(ls),o=P.T,u=W.p;try{W.p=32>a?32:a,P.T=null,a=Hf,Hf=null;var d=Ua,M=ls;if(Rn=0,os=Ua=null,ls=0,(Ie&6)!==0)throw Error(r(331));var T=Ie;if(Ie|=4,kg(d.current),Hg(d,d.current,M,a),Ie=T,Lo(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{W.p=u,P.T=o,r0(e,n)}}function o0(e,n,a){n=li(a,n),n=xf(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Ht(e,2),zi(e))}function je(e,n,a){if(e.tag===3)o0(e,e,a);else for(;n!==null;){if(n.tag===3){o0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=li(a,e),a=fg(2),o=Sa(n,a,2),o!==null&&(dg(a,o,n,e),Ht(o,2),zi(o));break}}n=n.return}}function Wf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new xy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),e=by.bind(null,e,n,a),n.then(e,e))}function by(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Ce&a)===a&&(sn===4||sn===3&&(Ce&62914560)===Ce&&300>Lt()-If?(Ie&2)===0&&cs(e,0):zf|=a,ss===Ce&&(ss=0)),zi(e)}function l0(e,n){n===0&&(n=Rt()),e=Wr(e,n),e!==null&&(Ht(e,n),zi(e))}function Ty(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),l0(e,a)}function Ay(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),l0(e,a)}function wy(e,n){return B(e,n)}var oc=null,fs=null,qf=!1,lc=!1,Yf=!1,mr=0;function zi(e){e!==fs&&e.next===null&&(fs===null?oc=fs=e:fs=fs.next=e),lc=!0,qf||(qf=!0,Cy())}function Lo(e,n){if(!Yf&&lc){Yf=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=u&~(M&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,d0(o,d))}else d=Ce,d=jt(o,o===Ze?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Nt(o,d)||(a=!0,d0(o,d));o=o.next}while(a);Yf=!1}}function Ry(){c0()}function c0(){lc=qf=!1;var e=0;mr!==0&&(By()&&(e=mr),mr=0);for(var n=Lt(),a=null,o=oc;o!==null;){var u=o.next,d=u0(o,n);d===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(fs=a)):(a=o,(e!==0||(d&3)!==0)&&(lc=!0)),o=u}Lo(e)}function u0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Ft(d),T=1<<M,V=u[M];V===-1?((T&a)===0||(T&o)!==0)&&(u[M]=de(T,n)):V<=n&&(e.expiredLanes|=T),d&=~T}if(n=Ze,a=Ce,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ae(o),Be(a)){case 2:case 8:a=ne;break;case 32:a=Pe;break;case 268435456:a=z;break;default:a=Pe}return o=f0.bind(null,e),a=B(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ae(o),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sc()&&e.callbackNode!==a)return null;var o=Ce;return o=jt(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Yg(e,o,n),u0(e,Lt()),e.callbackNode!=null&&e.callbackNode===a?f0.bind(null,e):null)}function d0(e,n){if(sc())return null;Yg(e,n,!0)}function Cy(){Fy(function(){(Ie&6)!==0?B(It,Ry):c0()})}function jf(){return mr===0&&(mr=q()),mr}function h0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function p0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Dy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=h0((u[nn]||null).action),M=o.submitter;M&&(n=(n=M[nn]||null)?h0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var T=new El("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var V=M?p0(u,M):new FormData(u);pf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(T.preventDefault(),V=M?p0(u,M):new FormData(u),pf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Zf=0;Zf<Lu.length;Zf++){var Kf=Lu[Zf],Uy=Kf.toLowerCase(),Ly=Kf[0].toUpperCase()+Kf.slice(1);yi(Uy,"on"+Ly)}yi(Yp,"onAnimationEnd"),yi(jp,"onAnimationIteration"),yi(Zp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Zx,"onTransitionRun"),yi(Kx,"onTransitionStart"),yi(Qx,"onTransitionCancel"),yi(Kp,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function m0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],V=T.instance,tt=T.currentTarget;if(T=T.listener,V!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=tt;try{d(u)}catch(pt){Zl(pt)}u.currentTarget=null,d=V}else for(M=0;M<o.length;M++){if(T=o[M],V=T.instance,tt=T.currentTarget,T=T.listener,V!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=tt;try{d(u)}catch(pt){Zl(pt)}u.currentTarget=null,d=V}}}}function Ae(e,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var o=e+"__bubble";a.has(o)||(g0(n,e,2,!1),a.add(o))}function Qf(e,n,a){var o=0;n&&(o|=4),g0(a,e,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[cc]){e[cc]=!0,_l.forEach(function(a){a!=="selectionchange"&&(Ny.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cc]||(n[cc]=!0,Qf("selectionchange",!1,n))}}function g0(e,n,a,o){switch(H0(n)){case 2:var u=sS;break;case 8:u=oS;break;default:u=dd}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function $f(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=ki(T),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){o=d=M;continue t}T=T.parentNode}}o=o.return}Ep(function(){var tt=d,pt=_u(a),St=[];t:{var rt=Qp.get(e);if(rt!==void 0){var st=El,ue=e;switch(e){case"keypress":if(Sl(a)===0)break t;case"keydown":case"keyup":st=wx;break;case"focusin":ue="focus",st=Eu;break;case"focusout":ue="blur",st=Eu;break;case"beforeblur":case"afterblur":st=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Dx;break;case Yp:case jp:case Zp:st=vx;break;case Kp:st=Lx;break;case"scroll":case"scrollend":st=hx;break;case"wheel":st=Ox;break;case"copy":case"cut":case"paste":st=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Rp;break;case"toggle":case"beforetoggle":st=zx}var oe=(n&4)!==0,ke=!oe&&(e==="scroll"||e==="scrollend"),j=oe?rt!==null?rt+"Capture":null:rt;oe=[];for(var X=tt,$;X!==null;){var _t=X;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||j===null||(_t=Qs(X,j),_t!=null&&oe.push(Oo(X,_t,$))),ke)break;X=X.return}0<oe.length&&(rt=new st(rt,ue,null,a,pt),St.push({event:rt,listeners:oe}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",rt&&a!==gu&&(ue=a.relatedTarget||a.fromElement)&&(ki(ue)||ue[Di]))break t;if((st||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,st?(ue=a.relatedTarget||a.toElement,st=tt,ue=ue?ki(ue):null,ue!==null&&(ke=c(ue),oe=ue.tag,ue!==ke||oe!==5&&oe!==27&&oe!==6)&&(ue=null)):(st=null,ue=tt),st!==ue)){if(oe=Ap,_t="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Rp,_t="onPointerLeave",j="onPointerEnter",X="pointer"),ke=st==null?rt:$a(st),$=ue==null?rt:$a(ue),rt=new oe(_t,X+"leave",st,a,pt),rt.target=ke,rt.relatedTarget=$,_t=null,ki(pt)===tt&&(oe=new oe(j,X+"enter",ue,a,pt),oe.target=$,oe.relatedTarget=ke,_t=oe),ke=_t,st&&ue)e:{for(oe=st,j=ue,X=0,$=oe;$;$=ds($))X++;for($=0,_t=j;_t;_t=ds(_t))$++;for(;0<X-$;)oe=ds(oe),X--;for(;0<$-X;)j=ds(j),$--;for(;X--;){if(oe===j||j!==null&&oe===j.alternate)break e;oe=ds(oe),j=ds(j)}oe=null}else oe=null;st!==null&&_0(St,rt,st,oe,!1),ue!==null&&ke!==null&&_0(St,ke,ue,oe,!0)}}t:{if(rt=tt?$a(tt):window,st=rt.nodeName&&rt.nodeName.toLowerCase(),st==="select"||st==="input"&&rt.type==="file")var Xt=zp;else if(Op(rt))if(Bp)Xt=qx;else{Xt=Xx;var Ee=kx}else st=rt.nodeName,!st||st.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?tt&&mu(tt.elementType)&&(Xt=zp):Xt=Wx;if(Xt&&(Xt=Xt(e,tt))){Pp(St,Xt,a,pt);break t}Ee&&Ee(e,rt,tt),e==="focusout"&&tt&&rt.type==="number"&&tt.memoizedProps.value!=null&&Un(rt,"number",rt.value)}switch(Ee=tt?$a(tt):window,e){case"focusin":(Op(Ee)||Ee.contentEditable==="true")&&(Vr=Ee,Cu=tt,ro=null);break;case"focusout":ro=Cu=Vr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Wp(St,a,pt);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":Wp(St,a,pt)}var $t;if(Tu)t:{switch(e){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else Gr?Lp(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Cp&&a.locale!=="ko"&&(Gr||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Gr&&($t=bp()):(_a=pt,yu="value"in _a?_a.value:_a.textContent,Gr=!0)),Ee=uc(tt,ce),0<Ee.length&&(ce=new wp(ce,e,null,a,pt),St.push({event:ce,listeners:Ee}),$t?ce.data=$t:($t=Np(a),$t!==null&&(ce.data=$t)))),($t=Ix?Fx(e,a):Hx(e,a))&&(ce=uc(tt,"onBeforeInput"),0<ce.length&&(Ee=new wp("onBeforeInput","beforeinput",null,a,pt),St.push({event:Ee,listeners:ce}),Ee.data=$t)),Dy(St,e,tt,a,pt)}m0(St,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Qs(e,a),u!=null&&o.unshift(Oo(e,u,d)),u=Qs(e,n),u!=null&&o.push(Oo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function ds(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var T=a,V=T.alternate,tt=T.stateNode;if(T=T.tag,V!==null&&V===o)break;T!==5&&T!==26&&T!==27||tt===null||(V=tt,u?(tt=Qs(a,d),tt!=null&&M.unshift(Oo(a,tt,V))):u||(tt=Qs(a,d),tt!=null&&M.push(Oo(a,tt,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Oy=/\r\n?/g,Py=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(Py,"")}function x0(e,n){return n=v0(n),v0(e)===n}function fc(){}function Ve(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yn(e,""+o);break;case"className":Vt(e,"class",o);break;case"tabIndex":Vt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(e,a,o);break;case"style":Sp(e,o,d);break;case"data":if(n!=="object"){Vt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=fc);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=xl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),Ot(e,"popover",o);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ot(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fx.get(a)||a,Ot(e,a,o))}}function td(e,n,a,o,u,d){switch(a){case"style":Sp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Yn(e,o):(typeof o=="number"||typeof o=="bigint")&&Yn(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=fc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[nn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ot(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,d,M,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Ae("invalid",e);var T=d=M=u=null,V=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":M=pt;break;case"checked":V=pt;break;case"defaultChecked":tt=pt;break;case"value":d=pt;break;case"defaultValue":T=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Ve(e,n,o,pt,a,null)}}Fn(e,d,T,V,tt,M,u,!1),be(e);return;case"select":Ae("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Ve(e,n,u,T,a,null)}n=d,a=M,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(e,n,M,T,a,null)}Ir(e,o,u,d),be(e);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,V,o,a,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<No.length;o++)Ae(No[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,tt,o,a,null)}return;default:if(mu(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&td(e,n,pt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ve(e,n,T,o,a,null))}function zy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,T=null,V=null,tt=null,pt=null;for(st in a){var St=a[st];if(a.hasOwnProperty(st)&&St!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":V=St;default:o.hasOwnProperty(st)||Ve(e,n,st,null,o,St)}}for(var rt in o){var st=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(st!=null||St!=null))switch(rt){case"type":d=st;break;case"name":u=st;break;case"checked":tt=st;break;case"defaultChecked":pt=st;break;case"value":M=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==St&&Ve(e,n,rt,st,o,St)}}Ye(e,M,T,V,tt,pt,d,u);return;case"select":st=M=T=rt=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":st=V;default:o.hasOwnProperty(d)||Ve(e,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":rt=d;break;case"defaultValue":T=d;break;case"multiple":M=d;default:d!==V&&Ve(e,n,u,d,o,V)}n=T,a=M,o=st,rt!=null?an(e,!!a,rt,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":st=rt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(e,n,T,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":rt=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ve(e,n,M,u,o,d)}An(e,rt,st);return;case"option":for(var ue in a)if(rt=a[ue],a.hasOwnProperty(ue)&&rt!=null&&!o.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ve(e,n,ue,null,o,rt)}for(V in o)if(rt=o[V],st=a[V],o.hasOwnProperty(V)&&rt!==st&&(rt!=null||st!=null))switch(V){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ve(e,n,V,rt,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)rt=a[oe],a.hasOwnProperty(oe)&&rt!=null&&!o.hasOwnProperty(oe)&&Ve(e,n,oe,null,o,rt);for(tt in o)if(rt=o[tt],st=a[tt],o.hasOwnProperty(tt)&&rt!==st&&(rt!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Ve(e,n,tt,rt,o,st)}return;default:if(mu(n)){for(var ke in a)rt=a[ke],a.hasOwnProperty(ke)&&rt!==void 0&&!o.hasOwnProperty(ke)&&td(e,n,ke,void 0,o,rt);for(pt in o)rt=o[pt],st=a[pt],!o.hasOwnProperty(pt)||rt===st||rt===void 0&&st===void 0||td(e,n,pt,rt,o,st);return}}for(var j in a)rt=a[j],a.hasOwnProperty(j)&&rt!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,rt);for(St in o)rt=o[St],st=a[St],!o.hasOwnProperty(St)||rt===st||rt==null&&st==null||Ve(e,n,St,rt,o,st)}var ed=null,nd=null;function dc(e){return e.nodeType===9?e:e.ownerDocument}function y0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function id(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function By(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(Hy)}:M0;function Hy(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function b0(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Po(M.documentElement),a&2&&Po(M.body),a&4)for(a=M.head,Po(a),M=a.firstChild;M;){var T=M.nextSibling,V=M.nodeName;M[Ui]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){e.removeChild(d),ko(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);ko(n)}function rd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),Br(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Gy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function Vy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ky(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var od=null;function T0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function A0(e,n,a){switch(n=dc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Br(e)}var pi=new Map,w0=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=W.d;W.d={f:Xy,r:Wy,D:qy,C:Yy,L:jy,m:Zy,X:Qy,S:Ky,M:Jy};function Xy(){var e=ia.f(),n=ac();return e||n}function Wy(e){var n=ma(e);n!==null&&n.tag===5&&n.type==="form"?Ym(n):ia.r(e)}var hs=typeof document>"u"?null:document;function R0(e,n,a){var o=hs;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),w0.has(u)||(w0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),cn(n),o.head.appendChild(n)))}}function qy(e){ia.D(e),R0("dns-prefetch",e,null)}function Yy(e,n){ia.C(e,n),R0("preconnect",e,n)}function jy(e,n,a){ia.L(e,n,a);var o=hs;if(o&&e&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yn(a.imageSizes)+'"]')):u+='[href="'+yn(e)+'"]';var d=u;switch(n){case"style":d=ps(e);break;case"script":d=ms(e)}pi.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(d))||n==="script"&&o.querySelector(Bo(d))||(n=o.createElement("link"),Cn(n,"link",e),cn(n),o.head.appendChild(n)))}}function Zy(e,n){ia.m(e,n);var a=hs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ms(e)}if(!pi.has(d)&&(e=_({rel:"modulepreload",href:e},n),pi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(d)))return}o=a.createElement("link"),Cn(o,"link",e),cn(o),a.head.appendChild(o)}}}function Ky(e,n,a){ia.S(e,n,a);var o=hs;if(o&&e){var u=ga(o).hoistableStyles,d=ps(e);n=n||"default";var M=u.get(d);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(zo(d)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(d))&&ld(e,a);var V=M=o.createElement("link");cn(V),Cn(V,"link",e),V._p=new Promise(function(tt,pt){V.onload=tt,V.onerror=pt}),V.addEventListener("load",function(){T.loading|=1}),V.addEventListener("error",function(){T.loading|=2}),T.loading|=4,pc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(d,M)}}}function Qy(e,n){ia.X(e,n);var a=hs;if(a&&e){var o=ga(a).hoistableScripts,u=ms(e),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(e=_({src:e,async:!0},n),(n=pi.get(u))&&cd(e,n),d=a.createElement("script"),cn(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Jy(e,n){ia.M(e,n);var a=hs;if(a&&e){var o=ga(a).hoistableScripts,u=ms(e),d=o.get(u);d||(d=a.querySelector(Bo(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&cd(e,n),d=a.createElement("script"),cn(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function C0(e,n,a,o){var u=(u=ht.current)?hc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var d=ga(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(zo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),d||$y(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+yn(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function D0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function $y(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),cn(n),e.head.appendChild(n))}function ms(e){return'[src="'+yn(e)+'"]'}function Bo(e){return"script[async]"+e}function U0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,cn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),cn(o),Cn(o,"style",u),pc(o,a.precedence,e),n.instance=o;case"stylesheet":u=ps(a.href);var d=e.querySelector(zo(u));if(d)return n.state.loading|=4,n.instance=d,cn(d),d;o=D0(a),(u=pi.get(u))&&ld(o,u),d=(e.ownerDocument||e).createElement("link"),cn(d);var M=d;return M._p=new Promise(function(T,V){M.onload=T,M.onerror=V}),Cn(d,"link",o),n.state.loading|=4,pc(d,a.precedence,e),n.instance=d;case"script":return d=ms(a.src),(u=e.querySelector(Bo(d)))?(n.instance=u,cn(u),u):(o=a,(u=pi.get(d))&&(o=_({},a),cd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),cn(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,e));return n.instance}function pc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ld(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mc=null;function L0(e,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Ui]||d[pn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(d):o.set(M,[d])}}return o}function N0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function tS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function O0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Io=null;function eS(){}function nS(e,n,a){if(Io===null)throw Error(r(475));var o=Io;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ps(a.href),d=e.querySelector(zo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=gc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,cn(d);return}d=e.ownerDocument||e,a=D0(a),(u=pi.get(u))&&ld(a,u),d=d.createElement("link"),cn(d);var M=d;M._p=new Promise(function(T,V){M.onload=T,M.onerror=V}),Cn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=gc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function iS(){if(Io===null)throw Error(r(475));var e=Io;return e.stylesheets&&e.count===0&&ud(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&ud(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)ud(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _c=null;function ud(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_c=new Map,n.forEach(aS,e),_c=null,gc.call(e))}function aS(e,n){if(!(n.state.loading&4)){var a=_c.get(e);if(a)var o=a.get(null);else{a=new Map,_c.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:U,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function rS(e,n,a,o,u,d,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function P0(e,n,a,o,u,d,M,T,V,tt,pt,St){return e=new rS(e,n,a,M,T,V,tt,St),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),e.current=d,d.stateNode=e,n=Xu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ju(d),e}function z0(e){return e?(e=qr,e):qr}function B0(e,n,a,o,u,d){u=z0(u),o.context===null?o.context=u:o.pendingContext=u,o=ya(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Sa(e,o,n),a!==null&&(ri(a,e,n),mo(a,e,n))}function I0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function fd(e,n){I0(e,n),(e=e.alternate)&&I0(e,n)}function F0(e){if(e.tag===13){var n=Wr(e,67108864);n!==null&&ri(n,e,67108864),fd(e,67108864)}}var vc=!0;function sS(e,n,a,o){var u=P.T;P.T=null;var d=W.p;try{W.p=2,dd(e,n,a,o)}finally{W.p=d,P.T=u}}function oS(e,n,a,o){var u=P.T;P.T=null;var d=W.p;try{W.p=8,dd(e,n,a,o)}finally{W.p=d,P.T=u}}function dd(e,n,a,o){if(vc){var u=hd(o);if(u===null)$f(e,n,o,xc,a),G0(e,o);else if(cS(u,e,n,a,o))o.stopPropagation();else if(G0(e,o),n&4&&-1<lS.indexOf(e)){for(;u!==null;){var d=ma(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=te(d.pendingLanes);if(M!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var V=1<<31-Ft(M);T.entanglements[1]|=V,M&=~V}zi(d),(Ie&6)===0&&(nc=Lt()+500,Lo(0))}}break;case 13:T=Wr(d,2),T!==null&&ri(T,d,2),ac(),fd(d,2)}if(d=hd(o),d===null&&$f(e,n,o,xc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(e,n,o,null,a)}}function hd(e){return e=_u(e),pd(e)}var xc=null;function pd(e){if(xc=null,e=ki(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xc=e,null}function H0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Me()){case It:return 2;case ne:return 8;case Pe:case we:return 32;case z:return 268435456;default:return 32}default:return 32}}var md=!1,Oa=null,Pa=null,za=null,Ho=new Map,Go=new Map,Ba=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G0(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ma(n),n!==null&&F0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function cS(e,n,a,o,u){switch(n){case"focusin":return Oa=Vo(Oa,e,n,a,o,u),!0;case"dragenter":return Pa=Vo(Pa,e,n,a,o,u),!0;case"mouseover":return za=Vo(za,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Ho.set(d,Vo(Ho.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Go.set(d,Vo(Go.get(d)||null,e,n,a,o,u)),!0}return!1}function V0(e){var n=ki(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,vi(e.priority,function(){if(a.tag===13){var o=ai();o=fe(o);var u=Wr(a,o);u!==null&&ri(u,a,o),fd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=hd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=ma(a),n!==null&&F0(n),e.blockedOn=a,!1;n.shift()}return!0}function k0(e,n,a){yc(e)&&a.delete(n)}function uS(){md=!1,Oa!==null&&yc(Oa)&&(Oa=null),Pa!==null&&yc(Pa)&&(Pa=null),za!==null&&yc(za)&&(za=null),Ho.forEach(k0),Go.forEach(k0)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,md||(md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,uS)))}var Mc=null;function X0(e){Mc!==e&&(Mc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(pd(o||a)===null)continue;break}var d=ma(a);d!==null&&(e.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ko(e){function n(V){return Sc(V,e)}Oa!==null&&Sc(Oa,e),Pa!==null&&Sc(Pa,e),za!==null&&Sc(za,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)V0(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[nn]||null;if(typeof d=="function")M||X0(a);else if(M){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[nn]||null)T=M.formAction;else if(pd(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),X0(a)}}}function gd(e){this._internalRoot=e}Ec.prototype.render=gd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();B0(a,o,e,n,null,null)},Ec.prototype.unmount=gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;B0(e.current,2,null,e,null,null),ac(),n[Di]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&V0(e)}};var W0=t.version;if(W0!=="19.1.0")throw Error(r(527,W0,"19.1.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var fS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{dt=bc.inject(fS),xt=bc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=og,d=lg,M=cg,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=P0(e,1,!1,null,null,a,o,u,d,M,T,null),e[Di]=n.current,Jf(e),new gd(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=og,M=lg,T=cg,V=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=P0(e,1,!0,n,a??null,o,u,d,M,T,V,tt),n.context=z0(null),a=n.current,o=ai(),o=fe(o),u=ya(o),u.callback=null,Sa(a,u,o),a=o,n.current.lanes=a,Ht(n,a),zi(n),e[Di]=n.current,Jf(e),new Ec(n)},Wo.version="19.1.0",Wo}var e_;function SS(){if(e_)return xd.exports;e_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),xd.exports=yS(),xd.exports}var MS=SS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="179",ES=0,n_=1,bS=2,gv=1,ep=2,ua=3,pa=0,Xn=1,Ai=2,ja=0,Bs=1,i_=2,a_=3,r_=4,TS=5,Tr=100,AS=101,wS=102,RS=103,CS=104,DS=200,US=201,LS=202,NS=203,sh=204,oh=205,OS=206,PS=207,zS=208,BS=209,IS=210,FS=211,HS=212,GS=213,VS=214,lh=0,ch=1,uh=2,Hs=3,fh=4,dh=5,hh=6,ph=7,uu=0,kS=1,XS=2,Za=0,WS=1,qS=2,YS=3,_v=4,jS=5,ZS=6,KS=7,vv=300,Gs=301,Vs=302,mh=303,gh=304,fu=306,_h=1e3,wr=1001,vh=1002,Ri=1003,QS=1004,Tc=1005,Fi=1006,Ed=1007,Rr=1008,Gi=1009,xv=1010,yv=1011,il=1012,np=1013,Ur=1014,da=1015,fl=1016,ip=1017,ap=1018,al=1020,Sv=35902,Mv=1021,Ev=1022,wi=1023,rl=1026,sl=1027,bv=1028,rp=1029,Tv=1030,sp=1031,op=1033,$c=33776,tu=33777,eu=33778,nu=33779,xh=35840,yh=35841,Sh=35842,Mh=35843,Eh=36196,bh=37492,Th=37496,Ah=37808,wh=37809,Rh=37810,Ch=37811,Dh=37812,Uh=37813,Lh=37814,Nh=37815,Oh=37816,Ph=37817,zh=37818,Bh=37819,Ih=37820,Fh=37821,iu=36492,Hh=36494,Gh=36495,Av=36283,Vh=36284,kh=36285,Xh=36286,JS=3200,$S=3201,lp=0,tM=1,Ya="",gi="srgb",ks="srgb-linear",su="linear",Xe="srgb",gs=7680,s_=519,eM=512,nM=513,iM=514,wv=515,aM=516,rM=517,sM=518,oM=519,Wh=35044,o_="300 es",Hi=2e3,ou=2001;class qs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=Math.PI/180,qh=180/Math.PI;function Ka(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Re(s,t,i){return Math.max(t,Math.min(i,s))}function lM(s,t){return(s%t+t)%t}function Td(s,t,i){return(1-i)*s+i*t}function Ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(v!==A||m!==x||p!==S||_!==E){let y=1-h;const g=m*x+p*S+_*E+v*A,D=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const O=Math.sqrt(U),F=Math.atan2(O,g*D);y=Math.sin(y*F)/O,h=Math.sin(h*F)/O}const w=h*D;if(m=m*y+x*w,p=p*y+S*w,_=_*y+E*w,v=v*y+A*w,y===1-h){const O=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=O,p*=O,_*=O,v*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+_*v+m*S-p*x,t[i+1]=m*E+_*x+p*v-h*S,t[i+2]=p*E+_*S+h*x-m*v,t[i+3]=_*E-h*v-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),v=h(c/2),x=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*_*v+p*S*E,this._y=p*S*v-x*_*E,this._z=p*_*E+x*S*v,this._w=p*_*v-x*S*E;break;case"YXZ":this._x=x*_*v+p*S*E,this._y=p*S*v-x*_*E,this._z=p*_*E-x*S*v,this._w=p*_*v+x*S*E;break;case"ZXY":this._x=x*_*v-p*S*E,this._y=p*S*v+x*_*E,this._z=p*_*E+x*S*v,this._w=p*_*v-x*S*E;break;case"ZYX":this._x=x*_*v-p*S*E,this._y=p*S*v+x*_*E,this._z=p*_*E-x*S*v,this._w=p*_*v+x*S*E;break;case"YZX":this._x=x*_*v+p*S*E,this._y=p*S*v+x*_*E,this._z=p*_*E-x*S*v,this._w=p*_*v-x*S*E;break;case"XZY":this._x=x*_*v-p*S*E,this._y=p*S*v-x*_*E,this._z=p*_*E+x*S*v,this._w=p*_*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+h+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-r*p,this._z=c*_+f*p+r*m-l*h,this._w=f*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(l_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(l_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),_=2*(h*i-c*l),v=2*(c*r-f*i);return this.x=i+m*p+f*v-h*_,this.y=r+m*_+h*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new K,l_=new dl;class me{constructor(t,i,r,l,c,f,h,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p)}set(t,i,r,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],S=r[5],E=r[8],A=l[0],y=l[3],g=l[6],D=l[1],U=l[4],w=l[7],O=l[2],F=l[5],k=l[8];return c[0]=f*A+h*D+m*O,c[3]=f*y+h*U+m*F,c[6]=f*g+h*w+m*k,c[1]=p*A+_*D+v*O,c[4]=p*y+_*U+v*F,c[7]=p*g+_*w+v*k,c[2]=x*A+S*D+E*O,c[5]=x*y+S*U+E*F,c[8]=x*g+S*w+E*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-r*c*_+r*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=_*f-h*p,x=h*m-_*c,S=p*c-f*m,E=i*v+r*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*p-_*r)*A,t[2]=(h*r-l*f)*A,t[3]=x*A,t[4]=(_*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=S*A,t[7]=(r*m-p*i)*A,t[8]=(f*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(wd.makeScale(t,i)),this}rotate(t){return this.premultiply(wd.makeRotation(-t)),this}translate(t,i){return this.premultiply(wd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new me;function Rv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cM(){const s=ol("canvas");return s.style.display="block",s}const c_={};function Is(s){s in c_||(c_[s]=!0,console.warn(s))}function uM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const u_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const s={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?su:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Is("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Is("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ks]:{primaries:t,whitePoint:r,transfer:su,toXYZ:u_,fromXYZ:f_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:u_,fromXYZ:f_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Oe=fM();function ha(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _s;class dM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{_s===void 0&&(_s=ol("canvas")),_s.width=t.width,_s.height=t.height;const l=_s.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=_s}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ol("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ha(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hM=0;class cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Rd(l[f].image)):c.push(Rd(l[f]))}else c=Rd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pM=0;const Cd=new K;class zn extends qs{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=wr,l=wr,c=Fi,f=Rr,h=wi,m=Gi,p=zn.DEFAULT_ANISOTROPY,_=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Ka(),this.name="",this.source=new cp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _h:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case vh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _h:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case vh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=vv;zn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,i=0,r=0,l=1){qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],S=m[5],E=m[9],A=m[2],y=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(S+1)/2,O=(g+1)/2,F=(_+x)/4,k=(v+A)/4,I=(E+y)/4;return U>w&&U>O?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=F/r,c=k/r):w>O?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=F/l,c=I/l):O<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),r=k/c,l=I/c),this.set(r,l,c,i),this}let D=Math.sqrt((y-E)*(y-E)+(v-A)*(v-A)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(v-A)/D,this.z=(x-_)/D,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this.w=Re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this.w=Re(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends qs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new qe(0,0,t,i),this.scissorTest=!1,this.viewport=new qe(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends mM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Cv extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ac.copy(r.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),wc.subVectors(this.max,qo),vs.subVectors(t.a,qo),xs.subVectors(t.b,qo),ys.subVectors(t.c,qo),Fa.subVectors(xs,vs),Ha.subVectors(ys,xs),gr.subVectors(vs,ys);let i=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-gr.z,gr.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,gr.z,0,-gr.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-gr.y,gr.x,0];return!Dd(i,vs,xs,ys,wc)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,vs,xs,ys,wc))?!1:(Rc.crossVectors(Fa,Ha),i=[Rc.x,Rc.y,Rc.z],Dd(i,vs,xs,ys,wc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new K,new K,new K,new K,new K,new K,new K,new K],Ei=new K,Ac=new hl,vs=new K,xs=new K,ys=new K,Fa=new K,Ha=new K,gr=new K,qo=new K,wc=new K,Rc=new K,_r=new K;function Dd(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){_r.fromArray(s,c);const h=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=t.dot(_r),p=i.dot(_r),_=r.dot(_r);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const _M=new hl,Yo=new K,Ud=new K;class du{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):_M.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Yo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Ud)),this.expandByPoint(Yo.copy(t.center).sub(Ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new K,Ld=new K,Cc=new K,Ga=new K,Nd=new K,Dc=new K,Od=new K;class up{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ld.copy(t).add(i).multiplyScalar(.5),Cc.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(Ld);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Cc),h=Ga.dot(this.direction),m=-Ga.dot(Cc),p=Ga.lengthSq(),_=Math.abs(1-f*f);let v,x,S,E;if(_>0)if(v=f*m-h,x=f*h-m,E=c*_,v>=0)if(x>=-E)if(x<=E){const A=1/_;v*=A,x*=A,S=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(v=Math.max(0,-(f*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ld).addScaledVector(Cc,x),S}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const r=ra.dot(this.direction),l=ra.dot(ra)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,r,l,c){Nd.subVectors(i,t),Dc.subVectors(r,t),Od.crossVectors(Nd,Dc);let f=this.direction.dot(Od),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(Dc.crossVectors(Ga,Dc));if(m<0)return null;const p=h*this.direction.dot(Nd.cross(Ga));if(p<0||m+p>f)return null;const _=-h*Ga.dot(Od);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,r,l,c,f,h,m,p,_,v,x,S,E,A,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p,_,v,x,S,E,A,y)}set(t,i,r,l,c,f,h,m,p,_,v,x,S,E,A,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=h,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=E,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Ss.setFromMatrixColumn(t,0).length(),c=1/Ss.setFromMatrixColumn(t,1).length(),f=1/Ss.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=f*_,S=f*v,E=h*_,A=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=x-A*p,i[9]=-h*m,i[2]=A-x*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*_,S=m*v,E=p*_,A=p*v;i[0]=x+A*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-E,i[6]=A+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*_,S=m*v,E=p*_,A=p*v;i[0]=x-A*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*_,i[9]=A-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*_,S=f*v,E=h*_,A=h*v;i[0]=m*_,i[4]=E*p-S,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*p,E=h*m,A=h*p;i[0]=m*_,i[4]=A-x*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+E,i[10]=x-A*v}else if(t.order==="XZY"){const x=f*m,S=f*p,E=h*m,A=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+A,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*_,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vM,t,xM)}lookAt(t,i,r){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Va.crossVectors(r,si),Va.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Va.crossVectors(r,si)),Va.normalize(),Uc.crossVectors(si,Va),l[0]=Va.x,l[4]=Uc.x,l[8]=si.x,l[1]=Va.y,l[5]=Uc.y,l[9]=si.y,l[2]=Va.z,l[6]=Uc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],S=r[13],E=r[2],A=r[6],y=r[10],g=r[14],D=r[3],U=r[7],w=r[11],O=r[15],F=l[0],k=l[4],I=l[8],C=l[12],L=l[1],H=l[5],at=l[9],et=l[13],ft=l[2],ut=l[6],P=l[10],W=l[14],G=l[3],yt=l[7],N=l[11],J=l[15];return c[0]=f*F+h*L+m*ft+p*G,c[4]=f*k+h*H+m*ut+p*yt,c[8]=f*I+h*at+m*P+p*N,c[12]=f*C+h*et+m*W+p*J,c[1]=_*F+v*L+x*ft+S*G,c[5]=_*k+v*H+x*ut+S*yt,c[9]=_*I+v*at+x*P+S*N,c[13]=_*C+v*et+x*W+S*J,c[2]=E*F+A*L+y*ft+g*G,c[6]=E*k+A*H+y*ut+g*yt,c[10]=E*I+A*at+y*P+g*N,c[14]=E*C+A*et+y*W+g*J,c[3]=D*F+U*L+w*ft+O*G,c[7]=D*k+U*H+w*ut+O*yt,c[11]=D*I+U*at+w*P+O*N,c[15]=D*C+U*et+w*W+O*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],S=t[14],E=t[3],A=t[7],y=t[11],g=t[15];return E*(+c*m*v-l*p*v-c*h*x+r*p*x+l*h*S-r*m*S)+A*(+i*m*S-i*p*x+c*f*x-l*f*S+l*p*_-c*m*_)+y*(+i*p*v-i*h*S-c*f*v+r*f*S+c*h*_-r*p*_)+g*(-l*h*_-i*m*v+i*h*x+l*f*v-r*f*x+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],S=t[11],E=t[12],A=t[13],y=t[14],g=t[15],D=v*y*p-A*x*p+A*m*S-h*y*S-v*m*g+h*x*g,U=E*x*p-_*y*p-E*m*S+f*y*S+_*m*g-f*x*g,w=_*A*p-E*v*p+E*h*S-f*A*S-_*h*g+f*v*g,O=E*v*m-_*A*m-E*h*x+f*A*x+_*h*y-f*v*y,F=i*D+r*U+l*w+c*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return t[0]=D*k,t[1]=(A*x*c-v*y*c-A*l*S+r*y*S+v*l*g-r*x*g)*k,t[2]=(h*y*c-A*m*c+A*l*p-r*y*p-h*l*g+r*m*g)*k,t[3]=(v*m*c-h*x*c-v*l*p+r*x*p+h*l*S-r*m*S)*k,t[4]=U*k,t[5]=(_*y*c-E*x*c+E*l*S-i*y*S-_*l*g+i*x*g)*k,t[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*g-i*m*g)*k,t[7]=(f*x*c-_*m*c+_*l*p-i*x*p-f*l*S+i*m*S)*k,t[8]=w*k,t[9]=(E*v*c-_*A*c-E*r*S+i*A*S+_*r*g-i*v*g)*k,t[10]=(f*A*c-E*h*c+E*r*p-i*A*p-f*r*g+i*h*g)*k,t[11]=(_*h*c-f*v*c-_*r*p+i*v*p+f*r*S-i*h*S)*k,t[12]=O*k,t[13]=(_*A*l-E*v*l+E*r*x-i*A*x-_*r*y+i*v*y)*k,t[14]=(E*h*l-f*A*l-E*r*m+i*A*m+f*r*y-i*h*y)*k,t[15]=(f*v*l-_*h*l+_*r*m-i*v*m-f*r*x+i*h*x)*k,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,v=h+h,x=c*p,S=c*_,E=c*v,A=f*_,y=f*v,g=h*v,D=m*p,U=m*_,w=m*v,O=r.x,F=r.y,k=r.z;return l[0]=(1-(A+g))*O,l[1]=(S+w)*O,l[2]=(E-U)*O,l[3]=0,l[4]=(S-w)*F,l[5]=(1-(x+g))*F,l[6]=(y+D)*F,l[7]=0,l[8]=(E+U)*k,l[9]=(y-D)*k,l[10]=(1-(x+A))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Ss.set(l[0],l[1],l[2]).length();const f=Ss.set(l[4],l[5],l[6]).length(),h=Ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/c,_=1/f,v=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(r-l),x=(i+t)/(i-t),S=(r+l)/(r-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===Hi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===ou)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=Hi,m=!1){const p=this.elements,_=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===Hi)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===ou)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ss=new K,bi=new Je,vM=new K(0,0,0),xM=new K(1,1,1),Va=new K,Uc=new K,si=new K,d_=new Je,h_=new dl;class Ci{constructor(t=0,i=0,r=0,l=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return d_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return h_.setFromEuler(this),this.setFromQuaternion(h_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yM=0;const p_=new K,Ms=new dl,sa=new Je,Lc=new K,jo=new K,SM=new K,MM=new dl,m_=new K(1,0,0),g_=new K(0,1,0),__=new K(0,0,1),v_={type:"added"},EM={type:"removed"},Es={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Tn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new K,i=new Ci,r=new dl,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new me}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(m_,t)}rotateY(t){return this.rotateOnAxis(g_,t)}rotateZ(t){return this.rotateOnAxis(__,t)}translateOnAxis(t,i){return p_.copy(t).applyQuaternion(this.quaternion),this.position.add(p_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(m_,t)}translateY(t){return this.translateOnAxis(g_,t)}translateZ(t){return this.translateOnAxis(__,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Lc.copy(t):Lc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(jo,Lc,this.up):sa.lookAt(Lc,jo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(sa),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(v_),Es.child=t,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(EM),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(v_),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,SM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,MM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),x=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new K(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new K,oa=new K,zd=new K,la=new K,bs=new K,Ts=new K,x_=new K,Bd=new K,Id=new K,Fd=new K,Hd=new qe,Gd=new qe,Vd=new qe;class _i{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ti.subVectors(l,i),oa.subVectors(r,i),zd.subVectors(t,i);const f=Ti.dot(Ti),h=Ti.dot(oa),m=Ti.dot(zd),p=oa.dot(oa),_=oa.dot(zd),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(p*m-h*_)*x,E=(f*_-h*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,r,l,c,f,h,m){return this.getBarycoord(t,i,r,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(f,la.y),m.addScaledVector(h,la.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(t,i),Gd.fromBufferAttribute(t,r),Vd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Hd,c.x),f.addScaledVector(Gd,c.y),f.addScaledVector(Vd,c.z),f}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),oa.subVectors(t,i),Ti.cross(oa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;bs.subVectors(l,r),Ts.subVectors(c,r),Bd.subVectors(t,r);const m=bs.dot(Bd),p=Ts.dot(Bd);if(m<=0&&p<=0)return i.copy(r);Id.subVectors(t,l);const _=bs.dot(Id),v=Ts.dot(Id);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(bs,f);Fd.subVectors(t,c);const S=bs.dot(Fd),E=Ts.dot(Fd);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ts,h);const y=_*E-S*v;if(y<=0&&v-_>=0&&S-E>=0)return x_.subVectors(c,l),h=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(x_,h);const g=1/(y+A+x);return f=A*g,h=x*g,i.copy(r).addScaledVector(bs,f).addScaledVector(Ts,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function kd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Oe.workingColorSpace){if(t=lM(t,1),i=Re(i,0,1),r=Re(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=kd(f,c,t+1/3),this.g=kd(f,c,t),this.b=kd(f,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const r=Dv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Oe.workingToColorSpace(Pn.copy(this),t),Math.round(Re(Pn.r*255,0,255))*65536+Math.round(Re(Pn.g*255,0,255))*256+Math.round(Re(Pn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=gi){Oe.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(Nc);const r=Td(ka.h,Nc.h,i),l=Td(ka.s,Nc.s,i),c=Td(ka.l,Nc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new xe;xe.NAMES=Dv;let bM=0;class Ja extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Bs,this.side=pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==pa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sh&&(r.blendSrc=this.blendSrc),this.blendDst!==oh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cr extends Ja{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new K,Oc=new he;let TM=0;class Bn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Wh,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(t),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}}class Uv extends Bn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Lv extends Bn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Wn extends Bn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let AM=0;const mi=new Je,Xd=new Tn,As=new K,oi=new hl,Zo=new hl,bn=new K;class qn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rv(t)?Lv:Uv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Xd.lookAt(t),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Zo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(oi.min,Zo.min),oi.expandByPoint(bn),bn.addVectors(oi.max,Zo.max),oi.expandByPoint(bn)):(oi.expandByPoint(Zo.min),oi.expandByPoint(Zo.max))}oi.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)bn.fromBufferAttribute(h,p),m&&(As.fromBufferAttribute(t,p),bn.add(As)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let I=0;I<r.count;I++)h[I]=new K,m[I]=new K;const p=new K,_=new K,v=new K,x=new he,S=new he,E=new he,A=new K,y=new K;function g(I,C,L){p.fromBufferAttribute(r,I),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,L),x.fromBufferAttribute(c,I),S.fromBufferAttribute(c,C),E.fromBufferAttribute(c,L),_.sub(p),v.sub(p),S.sub(x),E.sub(x);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(H),h[I].add(A),h[C].add(A),h[L].add(A),m[I].add(y),m[C].add(y),m[L].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let I=0,C=D.length;I<C;++I){const L=D[I],H=L.start,at=L.count;for(let et=H,ft=H+at;et<ft;et+=3)g(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const U=new K,w=new K,O=new K,F=new K;function k(I){O.fromBufferAttribute(l,I),F.copy(O);const C=h[I];U.copy(C),U.sub(O.multiplyScalar(O.dot(C))).normalize(),w.crossVectors(F,C);const H=w.dot(m[I])<0?-1:1;f.setXYZW(I,U.x,U.y,U.z,H)}for(let I=0,C=D.length;I<C;++I){const L=D[I],H=L.start,at=L.count;for(let et=H,ft=H+at;et<ft;et+=3)k(t.getX(et+0)),k(t.getX(et+1)),k(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new K,c=new K,f=new K,h=new K,m=new K,p=new K,_=new K,v=new K;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),A=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,v=h.normalized,x=new p.constructor(m.length*_);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*_;for(let g=0;g<_;g++)x[E++]=p[S++]}return new Bn(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const x=p[_],S=t(x,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y_=new Je,vr=new up,Pc=new du,S_=new K,zc=new K,Bc=new K,Ic=new K,Wd=new K,Fc=new K,M_=new K,Hc=new K;class Qe extends Tn{constructor(t=new qn,i=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Fc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Wd.fromBufferAttribute(v,t),f?Fc.addScaledVector(Wd,_):Fc.addScaledVector(Wd.sub(i),_))}i.add(Fc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(c),vr.copy(t.ray).recast(t.near),!(Pc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Pc,S_)===null||vr.origin.distanceToSquared(S_)>(t.far-t.near)**2))&&(y_.copy(c).invert(),vr.copy(t.ray).applyMatrix4(y_),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],g=f[y.materialIndex],D=Math.max(y.start,S.start),U=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,O=U;w<O;w+=3){const F=h.getX(w),k=h.getX(w+1),I=h.getX(w+2);l=Gc(this,g,t,r,p,_,v,F,k,I),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const D=h.getX(y),U=h.getX(y+1),w=h.getX(y+2);l=Gc(this,f,t,r,p,_,v,D,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],g=f[y.materialIndex],D=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,O=U;w<O;w+=3){const F=w,k=w+1,I=w+2;l=Gc(this,g,t,r,p,_,v,F,k,I),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const D=y,U=y+1,w=y+2;l=Gc(this,f,t,r,p,_,v,D,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function wM(s,t,i,r,l,c,f,h){let m;if(t.side===Xn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,t.side===pa,h),m===null)return null;Hc.copy(h),Hc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:s}}function Gc(s,t,i,r,l,c,f,h,m,p){s.getVertexPosition(h,zc),s.getVertexPosition(m,Bc),s.getVertexPosition(p,Ic);const _=wM(s,t,i,r,zc,Bc,Ic,M_);if(_){const v=new K;_i.getBarycoord(M_,zc,Bc,Ic,v),l&&(_.uv=_i.getInterpolatedAttribute(l,h,m,p,v,new he)),c&&(_.uv1=_i.getInterpolatedAttribute(c,h,m,p,v,new he)),f&&(_.normal=_i.getInterpolatedAttribute(f,h,m,p,v,new K),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new K,materialIndex:0};_i.getNormal(zc,Bc,Ic,x.normal),_.face=x,_.barycoord=v}return _}class pl extends qn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(v,2));function E(A,y,g,D,U,w,O,F,k,I,C){const L=w/k,H=O/I,at=w/2,et=O/2,ft=F/2,ut=k+1,P=I+1;let W=0,G=0;const yt=new K;for(let N=0;N<P;N++){const J=N*H-et;for(let vt=0;vt<ut;vt++){const mt=vt*L-at;yt[A]=mt*D,yt[y]=J*U,yt[g]=ft,p.push(yt.x,yt.y,yt.z),yt[A]=0,yt[y]=0,yt[g]=F>0?1:-1,_.push(yt.x,yt.y,yt.z),v.push(vt/k),v.push(1-N/I),W+=1}}for(let N=0;N<I;N++)for(let J=0;J<k;J++){const vt=x+J+ut*N,mt=x+J+ut*(N+1),bt=x+(J+1)+ut*(N+1),nt=x+(J+1)+ut*N;m.push(vt,mt,nt),m.push(mt,bt,nt),G+=6}h.addGroup(S,G,C),S+=G,x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Vn(s){const t={};for(let i=0;i<s.length;i++){const r=Xs(s[i]);for(const l in r)t[l]=r[l]}return t}function RM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Nv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const CM={clone:Xs,merge:Vn};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Ja{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=RM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}let Ov=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Xa=new K,E_=new he,b_=new he;class kn extends Ov{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,E_,b_),i.subVectors(b_,E_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Rs=1;class LM extends Tn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new kn(ws,Rs,t,i);l.layers=this.layers,this.add(l);const c=new kn(ws,Rs,t,i);c.layers=this.layers,this.add(c);const f=new kn(ws,Rs,t,i);f.layers=this.layers,this.add(f);const h=new kn(ws,Rs,t,i);h.layers=this.layers,this.add(h);const m=new kn(ws,Rs,t,i);m.layers=this.layers,this.add(m);const p=new kn(ws,Rs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(v,x,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Pv extends zn{constructor(t=[],i=Gs,r,l,c,f,h,m,p,_){super(t,i,r,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class NM extends Lr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Pv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ja});c.uniforms.tEquirect.value=i;const f=new Qe(l,c),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Fi),new LM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class el extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new el,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new el,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new el,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,r),g=this._getHandJoint(p,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new el;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class dp extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class PM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=Ka()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new K;class lu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Bn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hp extends Ja{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Cs;const Ko=new K,Ds=new K,Us=new K,Ls=new he,Qo=new he,zv=new Je,Vc=new K,Jo=new K,kc=new K,T_=new he,Yd=new he,A_=new he;class Bv extends Tn{constructor(t=new hp){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new qn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new PM(i,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new lu(r,3,0,!1)),Cs.setAttribute("uv",new lu(r,2,3,!1))}this.geometry=Cs,this.material=t,this.center=new he(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),zv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Xc(Vc.set(-.5,-.5,0),Us,f,Ds,l,c),Xc(Jo.set(.5,-.5,0),Us,f,Ds,l,c),Xc(kc.set(.5,.5,0),Us,f,Ds,l,c),T_.set(0,0),Yd.set(1,0),A_.set(1,1);let h=t.ray.intersectTriangle(Vc,Jo,kc,!1,Ko);if(h===null&&(Xc(Jo.set(-.5,.5,0),Us,f,Ds,l,c),Yd.set(0,1),h=t.ray.intersectTriangle(Vc,kc,Jo,!1,Ko),h===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||i.push({distance:m,point:Ko.clone(),uv:_i.getInterpolation(Ko,Vc,Jo,kc,T_,Yd,A_,new he),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xc(s,t,i,r,l,c){Ls.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Qo.x=c*Ls.x-l*Ls.y,Qo.y=l*Ls.x+c*Ls.y):Qo.copy(Ls),s.copy(t),s.x+=Qo.x,s.y+=Qo.y,s.applyMatrix4(zv)}const jd=new K,zM=new K,BM=new me;class Er{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=jd.subVectors(r,i).cross(zM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(jd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||BM.getNormalMatrix(t),l=this.coplanarPoint(jd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new du,IM=new he(.5,.5),Wc=new K;class pp{constructor(t=new Er,i=new Er,r=new Er,l=new Er,c=new Er,f=new Er){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Hi,r=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],x=c[6],S=c[7],E=c[8],A=c[9],y=c[10],g=c[11],D=c[12],U=c[13],w=c[14],O=c[15];if(l[0].setComponents(p-f,S-_,g-E,O-D).normalize(),l[1].setComponents(p+f,S+_,g+E,O+D).normalize(),l[2].setComponents(p+h,S+v,g+A,O+U).normalize(),l[3].setComponents(p-h,S-v,g-A,O-U).normalize(),r)l[4].setComponents(m,x,y,w).normalize(),l[5].setComponents(p-m,S-x,g-y,O-w).normalize();else if(l[4].setComponents(p-m,S-x,g-y,O-w).normalize(),i===Hi)l[5].setComponents(p+m,S+x,g+y,O+w).normalize();else if(i===ou)l[5].setComponents(m,x,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);const i=IM.distanceTo(t.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Wc.x=l.normal.x>0?t.max.x:t.min.x,Wc.y=l.normal.y>0?t.max.y:t.min.y,Wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ll extends Ja{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const w_=new Je,Yh=new up,qc=new du,Yc=new K;class cu extends Tn{constructor(t=new qn,i=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qc.copy(r.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;w_.copy(l).invert(),Yh.copy(t.ray).applyMatrix4(w_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=x,A=S;E<A;E++){const y=p.getX(E);Yc.fromBufferAttribute(v,y),R_(Yc,y,m,l,t,i,this)}}else{const x=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=x,A=S;E<A;E++)Yc.fromBufferAttribute(v,E),R_(Yc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function R_(s,t,i,r,l,c,f){const h=Yh.distanceSqToPoint(s);if(h<i){const m=new K;Yh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class au extends zn{constructor(t,i,r,l,c,f,h,m,p){super(t,i,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Iv extends zn{constructor(t,i,r=Ur,l,c,f,h=Ri,m=Ri,p,_=rl,v=1){if(_!==rl&&_!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,f,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ws extends qn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,v=t/h,x=i/m,S=[],E=[],A=[],y=[];for(let g=0;g<_;g++){const D=g*x-f;for(let U=0;U<p;U++){const w=U*v-c;E.push(w,-D,0),A.push(0,0,1),y.push(U/h),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let D=0;D<h;D++){const U=D+p*g,w=D+p*(g+1),O=D+1+p*(g+1),F=D+1+p*g;S.push(U,w,F),S.push(w,O,F)}this.setIndex(S),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class hu extends qn{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let v=t;const x=(i-t)/l,S=new K,E=new he;for(let A=0;A<=l;A++){for(let y=0;y<=r;y++){const g=c+y/r*f;S.x=v*Math.cos(g),S.y=v*Math.sin(g),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,_.push(E.x,E.y)}v+=x}for(let A=0;A<l;A++){const y=A*(r+1);for(let g=0;g<r;g++){const D=g+y,U=D,w=D+r+1,O=D+r+2,F=D+1;h.push(U,w,F),h.push(w,O,F)}}this.setIndex(h),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(p,3)),this.setAttribute("uv",new Wn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Jn extends qn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const _=[],v=new K,x=new K,S=[],E=[],A=[],y=[];for(let g=0;g<=r;g++){const D=[],U=g/r;let w=0;g===0&&f===0?w=.5/i:g===r&&m===Math.PI&&(w=-.5/i);for(let O=0;O<=i;O++){const F=O/i;v.x=-t*Math.cos(l+F*c)*Math.sin(f+U*h),v.y=t*Math.cos(f+U*h),v.z=t*Math.sin(l+F*c)*Math.sin(f+U*h),E.push(v.x,v.y,v.z),x.copy(v).normalize(),A.push(x.x,x.y,x.z),y.push(F+w,1-U),D.push(p++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<i;D++){const U=_[g][D+1],w=_[g][D],O=_[g+1][D],F=_[g+1][D+1];(g!==0||f>0)&&S.push(U,w,F),(g!==r-1||m<Math.PI)&&S.push(w,O,F)}this.setIndex(S),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class C_ extends Ja{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fa extends Ja{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class FM extends Ja{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HM extends Ja{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class GM{constructor(t,i,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=p.length;v<x;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const VM=new GM;class mp{constructor(t){this.manager=t!==void 0?t:VM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}mp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ns=new WeakMap;class kM extends mp{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Zd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let v=Ns.get(f);v===void 0&&(v=[],Ns.set(f,v)),v.push({onLoad:i,onError:l})}return f}const h=ol("img");function m(){_(),i&&i(this);const v=Ns.get(this)||[];for(let x=0;x<v.length;x++){const S=v[x];S.onLoad&&S.onLoad(this)}Ns.delete(this),c.manager.itemEnd(t)}function p(v){_(),l&&l(v),Zd.remove(`image:${t}`);const x=Ns.get(this)||[];for(let S=0;S<x.length;S++){const E=x[S];E.onError&&E.onError(v)}Ns.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Zd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class XM extends mp{constructor(t){super(t)}load(t,i,r,l){const c=new zn,f=new kM(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class gp extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Kd=new Je,D_=new K,U_=new K;class Fv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;D_.setFromMatrixPosition(t.matrixWorld),i.position.copy(D_),U_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(U_),i.updateMatrixWorld(),Kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Kd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const L_=new Je,$o=new K,Qd=new K;class WM extends Fv{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),$o.setFromMatrixPosition(t.matrixWorld),r.position.copy($o),Qd.copy(r.position),Qd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Qd),r.updateMatrixWorld(),l.makeTranslation(-$o.x,-$o.y,-$o.z),L_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L_,r.coordinateSystem,r.reversedDepth)}}class qM extends gp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new WM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hv extends Ov{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class YM extends Fv{constructor(){super(new Hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jM extends gp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new YM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gv extends gp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZM extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const N_=new Je;class O_{constructor(t,i,r=0,l=1/0){this.ray=new up(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return N_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(N_),this}intersectObject(t,i=!0,r=[]){return jh(t,this,r,i),r.sort(P_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)jh(t[l],this,r,i);return r.sort(P_),r}}function P_(s,t){return s.distance-t.distance}function jh(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)jh(c[f],t,i,!0)}}function z_(s,t,i,r){const l=KM(r);switch(i){case Mv:return s*t;case bv:return s*t/l.components*l.byteLength;case rp:return s*t/l.components*l.byteLength;case Tv:return s*t*2/l.components*l.byteLength;case sp:return s*t*2/l.components*l.byteLength;case Ev:return s*t*3/l.components*l.byteLength;case wi:return s*t*4/l.components*l.byteLength;case op:return s*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yh:case Mh:return Math.max(s,16)*Math.max(t,8)/4;case xh:case Sh:return Math.max(s,8)*Math.max(t,8)/2;case Eh:case bh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Th:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case iu:case Hh:case Gh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Av:case Vh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kh:case Xh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function KM(s){switch(s){case Gi:case xv:return{byteLength:1,components:1};case il:case yv:case fl:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case Ur:case np:case da:return{byteLength:4,components:1};case Sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vv(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function QM(s){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const _=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],A=v[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,v[x]=A)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const A=v[S];s.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
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
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
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
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fE=`#ifdef USE_IRIDESCENCE
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
#endif`,dE=`#ifdef USE_BUMPMAP
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,SE=`#define PI 3.141592653589793
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
} // validated`,ME=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EE=`vec3 transformedNormal = objectNormal;
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
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FE=`#ifdef USE_GRADIENTMAP
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
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kE=`uniform bool receiveShadow;
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
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
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
#endif`,KE=`struct PhysicalMaterial {
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
}`,QE=`
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
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
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ob=`#if defined( USE_POINTS_UV )
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
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
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
#endif`,pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zb=`float getShadowMask() {
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
}`,Bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,rT=`#define DISTANCE
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
}`,sT=`#define DISTANCE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
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
}`,uT=`uniform vec3 diffuse;
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
}`,fT=`#include <common>
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
}`,dT=`uniform vec3 diffuse;
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
}`,hT=`#define LAMBERT
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define MATCAP
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
}`,gT=`#define MATCAP
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
}`,_T=`#define NORMAL
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
}`,vT=`#define NORMAL
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
}`,xT=`#define PHONG
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
}`,yT=`#define PHONG
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
}`,ST=`#define STANDARD
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
}`,MT=`#define STANDARD
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
}`,ET=`#define TOON
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
}`,bT=`#define TOON
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
}`,TT=`uniform float size;
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
}`,AT=`uniform vec3 diffuse;
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
}`,wT=`#include <common>
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
}`,RT=`uniform vec3 color;
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
}`,CT=`uniform float rotation;
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
}`,DT=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:JM,alphahash_pars_fragment:$M,alphamap_fragment:tE,alphamap_pars_fragment:eE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:aE,aomap_pars_fragment:rE,batching_pars_vertex:sE,batching_vertex:oE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:fE,bumpmap_pars_fragment:dE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:_E,color_pars_fragment:vE,color_pars_vertex:xE,color_vertex:yE,common:SE,cube_uv_reflection_fragment:ME,defaultnormal_vertex:EE,displacementmap_pars_vertex:bE,displacementmap_vertex:TE,emissivemap_fragment:AE,emissivemap_pars_fragment:wE,colorspace_fragment:RE,colorspace_pars_fragment:CE,envmap_fragment:DE,envmap_common_pars_fragment:UE,envmap_pars_fragment:LE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:XE,envmap_vertex:OE,fog_vertex:PE,fog_pars_vertex:zE,fog_fragment:BE,fog_pars_fragment:IE,gradientmap_pars_fragment:FE,lightmap_pars_fragment:HE,lights_lambert_fragment:GE,lights_lambert_pars_fragment:VE,lights_pars_begin:kE,lights_toon_fragment:WE,lights_toon_pars_fragment:qE,lights_phong_fragment:YE,lights_phong_pars_fragment:jE,lights_physical_fragment:ZE,lights_physical_pars_fragment:KE,lights_fragment_begin:QE,lights_fragment_maps:JE,lights_fragment_end:$E,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:ab,map_pars_fragment:rb,map_particle_fragment:sb,map_particle_pars_fragment:ob,metalnessmap_fragment:lb,metalnessmap_pars_fragment:cb,morphinstance_vertex:ub,morphcolor_vertex:fb,morphnormal_vertex:db,morphtarget_pars_vertex:hb,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:vb,normal_vertex:xb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:bb,opaque_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:wb,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:Db,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Ob,shadowmap_vertex:Pb,shadowmask_pars_fragment:zb,skinbase_vertex:Bb,skinning_pars_vertex:Ib,skinning_vertex:Fb,skinnormal_vertex:Hb,specularmap_fragment:Gb,specularmap_pars_fragment:Vb,tonemapping_fragment:kb,tonemapping_pars_fragment:Xb,transmission_fragment:Wb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:jb,uv_vertex:Zb,worldpos_vertex:Kb,background_vert:Qb,background_frag:Jb,backgroundCube_vert:$b,backgroundCube_frag:tT,cube_vert:eT,cube_frag:nT,depth_vert:iT,depth_frag:aT,distanceRGBA_vert:rT,distanceRGBA_frag:sT,equirect_vert:oT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:fT,meshbasic_frag:dT,meshlambert_vert:hT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:_T,meshnormal_frag:vT,meshphong_vert:xT,meshphong_frag:yT,meshphysical_vert:ST,meshphysical_frag:MT,meshtoon_vert:ET,meshtoon_frag:bT,points_vert:TT,points_frag:AT,shadow_vert:wT,shadow_frag:RT,sprite_vert:CT,sprite_frag:DT},Bt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Bi={basic:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Vn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Vn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Vn([Bt.points,Bt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Vn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Vn([Bt.common,Bt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Vn([Bt.sprite,Bt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Vn([Bt.common,Bt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Vn([Bt.lights,Bt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Bi.physical={uniforms:Vn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const jc={r:0,b:0,g:0},yr=new Ci,UT=new Je;function LT(s,t,i,r,l,c,f){const h=new xe(0);let m=c===!0?0:1,p,_,v=null,x=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function A(U){let w=!1;const O=E(U);O===null?g(h,m):O&&O.isColor&&(g(O,1),w=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,w){const O=E(w);O&&(O.isCubeTexture||O.mapping===fu)?(_===void 0&&(_=new Qe(new pl(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Xs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,k,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),yr.copy(w.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(yr)),_.material.toneMapped=Oe.getTransfer(O.colorSpace)!==Xe,(v!==O||x!==O.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=O,x=O.version,S=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Qe(new Ws(2,2),new Qa({name:"BackgroundMaterial",uniforms:Xs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(O.colorSpace)!==Xe,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=O,x=O.version,S=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,w){U.getRGB(jc,Nv(s)),r.buffers.color.setClear(jc.r,jc.g,jc.b,w,f)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),m=w,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(h,m)},render:A,addToRenderList:y,dispose:D}}function NT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(L,H,at,et,ft){let ut=!1;const P=v(et,at,H);c!==P&&(c=P,p(c.object)),ut=S(L,et,at,ft),ut&&E(L,et,at,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,w(L,H,at,et),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(L){return s.bindVertexArray(L)}function _(L){return s.deleteVertexArray(L)}function v(L,H,at){const et=at.wireframe===!0;let ft=r[L.id];ft===void 0&&(ft={},r[L.id]=ft);let ut=ft[H.id];ut===void 0&&(ut={},ft[H.id]=ut);let P=ut[et];return P===void 0&&(P=x(m()),ut[et]=P),P}function x(L){const H=[],at=[],et=[];for(let ft=0;ft<i;ft++)H[ft]=0,at[ft]=0,et[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:at,attributeDivisors:et,object:L,attributes:{},index:null}}function S(L,H,at,et){const ft=c.attributes,ut=H.attributes;let P=0;const W=at.getAttributes();for(const G in W)if(W[G].location>=0){const N=ft[G];let J=ut[G];if(J===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;P++}return c.attributesNum!==P||c.index!==et}function E(L,H,at,et){const ft={},ut=H.attributes;let P=0;const W=at.getAttributes();for(const G in W)if(W[G].location>=0){let N=ut[G];N===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(N=L.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),ft[G]=J,P++}c.attributes=ft,c.attributesNum=P,c.index=et}function A(){const L=c.newAttributes;for(let H=0,at=L.length;H<at;H++)L[H]=0}function y(L){g(L,0)}function g(L,H){const at=c.newAttributes,et=c.enabledAttributes,ft=c.attributeDivisors;at[L]=1,et[L]===0&&(s.enableVertexAttribArray(L),et[L]=1),ft[L]!==H&&(s.vertexAttribDivisor(L,H),ft[L]=H)}function D(){const L=c.newAttributes,H=c.enabledAttributes;for(let at=0,et=H.length;at<et;at++)H[at]!==L[at]&&(s.disableVertexAttribArray(at),H[at]=0)}function U(L,H,at,et,ft,ut,P){P===!0?s.vertexAttribIPointer(L,H,at,ft,ut):s.vertexAttribPointer(L,H,at,et,ft,ut)}function w(L,H,at,et){A();const ft=et.attributes,ut=at.getAttributes(),P=H.defaultAttributeValues;for(const W in ut){const G=ut[W];if(G.location>=0){let yt=ft[W];if(yt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(yt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(yt=L.instanceColor)),yt!==void 0){const N=yt.normalized,J=yt.itemSize,vt=t.get(yt);if(vt===void 0)continue;const mt=vt.buffer,bt=vt.type,nt=vt.bytesPerElement,ht=bt===s.INT||bt===s.UNSIGNED_INT||yt.gpuType===np;if(yt.isInterleavedBufferAttribute){const gt=yt.data,Ut=gt.stride,Gt=yt.offset;if(gt.isInstancedInterleavedBuffer){for(let ee=0;ee<G.locationSize;ee++)g(G.location+ee,gt.meshPerAttribute);L.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ee=0;ee<G.locationSize;ee++)y(G.location+ee);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let ee=0;ee<G.locationSize;ee++)U(G.location+ee,J/G.locationSize,bt,N,Ut*nt,(Gt+J/G.locationSize*ee)*nt,ht)}else{if(yt.isInstancedBufferAttribute){for(let gt=0;gt<G.locationSize;gt++)g(G.location+gt,yt.meshPerAttribute);L.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let gt=0;gt<G.locationSize;gt++)y(G.location+gt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let gt=0;gt<G.locationSize;gt++)U(G.location+gt,J/G.locationSize,bt,N,J*nt,J/G.locationSize*gt*nt,ht)}}else if(P!==void 0){const N=P[W];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(G.location,N);break;case 3:s.vertexAttrib3fv(G.location,N);break;case 4:s.vertexAttrib4fv(G.location,N);break;default:s.vertexAttrib1fv(G.location,N)}}}}D()}function O(){I();for(const L in r){const H=r[L];for(const at in H){const et=H[at];for(const ft in et)_(et[ft].object),delete et[ft];delete H[at]}delete r[L]}}function F(L){if(r[L.id]===void 0)return;const H=r[L.id];for(const at in H){const et=H[at];for(const ft in et)_(et[ft].object),delete et[ft];delete H[at]}delete r[L.id]}function k(L){for(const H in r){const at=r[H];if(at[L.id]===void 0)continue;const et=at[L.id];for(const ft in et)_(et[ft].object),delete et[ft];delete at[L.id]}}function I(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:C,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function OT(s,t,i){let r;function l(p){r=p}function c(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,v){v!==0&&(s.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function h(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let S=0;for(let E=0;E<v;E++)S+=_[E];i.update(S,r,1)}function m(p,_,v,x){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=_[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function PT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==wi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const I=k===fl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==Gi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==da&&!I)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:O,maxSamples:F}}function zT(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Er,h=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||l;return l=x,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!l||E===null||E.length===0||c&&!y)c?_(null):p();else{const D=c?0:r,U=D*4;let w=g.clippingState||null;m.value=w,w=_(E,x,U,S);for(let O=0;O!==U;++O)w[O]=i[O];g.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,x,S,E){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const g=S+A*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,w=S;U!==A;++U,w+=4)f.copy(v[U]).applyMatrix4(D,h),f.normal.toArray(y,w),y[w+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function BT(s){let t=new WeakMap;function i(f,h){return h===mh?f.mapping=Gs:h===gh&&(f.mapping=Vs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===mh||h===gh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new NM(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const zs=4,B_=[.125,.215,.35,.446,.526,.582],Ar=20,Jd=new Hv,I_=new xe;let $d=null,th=0,eh=0,nh=!1;const br=(1+Math.sqrt(5))/2,Os=1/br,F_=[new K(-br,Os,0),new K(br,Os,0),new K(-Os,0,br),new K(Os,0,br),new K(0,br,-Os),new K(0,br,Os),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],IT=new K;class H_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=IT}=c;$d=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($d,th,eh),this._renderer.xr.enabled=nh,t.scissorTest=!1,Zc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$d=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:fl,format:wi,colorSpace:ks,depthBuffer:!1},l=G_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(c)),this._blurMaterial=HT(c,t,i)}return l}_compileMaterial(t){const i=new Qe(this._lodPlanes[0],t);this._renderer.compile(i,Jd)}_sceneToCubeUV(t,i,r,l,c){const m=new kn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(I_),v.toneMapping=Za,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new Cr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),y=new Qe(new pl,A);let g=!1;const D=t.background;D?D.isColor&&(A.color.copy(D),t.background=null,g=!0):(A.color.copy(I_),g=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const O=this._cubeSize;Zc(l,w*O,U>2?O:0,O,O),v.setRenderTarget(l),g&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=S,v.autoClear=x,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Gs||t.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Qe(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Zc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Jd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=F_[(l-c-1)%F_.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Qe(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ar-1),A=c/E,y=isFinite(c)?1+Math.floor(_*A):Ar;y>Ar&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const g=[];let D=0;for(let k=0;k<Ar;++k){const I=k/A,C=Math.exp(-I*I/2);g.push(C),k===0?D+=C:k<y&&(D+=2*C)}for(let k=0;k<g.length;k++)g[k]=g[k]/D;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-r;const w=this._sizeLods[l],O=3*w*(l>U-zs?l-U+zs:0),F=4*(this._cubeSize-w);Zc(i,O,F,3*w,2*w),m.setRenderTarget(i),m.render(v,Jd)}}function FT(s){const t=[],i=[],r=[];let l=s;const c=s-zs+1+B_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-zs?m=B_[f-s+zs-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,A=3,y=2,g=1,D=new Float32Array(A*E*S),U=new Float32Array(y*E*S),w=new Float32Array(g*E*S);for(let F=0;F<S;F++){const k=F%3*2/3-1,I=F>2?0:-1,C=[k,I,0,k+2/3,I,0,k+2/3,I+1,0,k,I,0,k+2/3,I+1,0,k,I+1,0];D.set(C,A*E*F),U.set(x,y*E*F);const L=[F,F,F,F,F,F];w.set(L,g*E*F)}const O=new qn;O.setAttribute("position",new Bn(D,A)),O.setAttribute("uv",new Bn(U,y)),O.setAttribute("faceIndex",new Bn(w,g)),t.push(O),l>zs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function G_(s,t,i){const r=new Lr(s,t,i);return r.texture.mapping=fu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function HT(s,t,i){const r=new Float32Array(Ar),l=new K(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_p(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function V_(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function k_(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function _p(){return`

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
	`}function GT(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===mh||m===gh,_=m===Gs||m===Vs;if(p||_){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new H_(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new H_(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function VT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Is("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function kT(s,t,i,r){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)t.update(x[S],s.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,E=v.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let U=0,w=D.length;U<w;U+=3){const O=D[U+0],F=D[U+1],k=D[U+2];x.push(O,F,F,k,k,O)}}else if(E!==void 0){const D=E.array;A=E.version;for(let U=0,w=D.length/3-1;U<w;U+=3){const O=U+0,F=U+1,k=U+2;x.push(O,F,F,k,k,O)}}else return;const y=new(Rv(x)?Lv:Uv)(x,1);y.version=A;const g=c.get(v);g&&t.remove(g),c.set(v,y)}function _(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function XT(s,t,i){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,S){s.drawElements(r,S,c,x*f),i.update(S,r,1)}function p(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,x*f,E),i.update(S,r,E))}function _(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];i.update(y,r,1)}function v(x,S,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/f,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,A,0,E);let g=0;for(let D=0;D<E;D++)g+=S[D]*A[D];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function WT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function qT(s,t,i){const r=new WeakMap,l=new qe;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let L=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",L)};var S=L;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),y===!0&&(w=3);let O=h.attributes.position.count*w,F=1;O>t.maxTextureSize&&(F=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const k=new Float32Array(O*F*4*v),I=new Cv(k,O,F,v);I.type=da,I.needsUpdate=!0;const C=w*4;for(let H=0;H<v;H++){const at=g[H],et=D[H],ft=U[H],ut=O*F*4*H;for(let P=0;P<at.count;P++){const W=P*C;E===!0&&(l.fromBufferAttribute(at,P),k[ut+W+0]=l.x,k[ut+W+1]=l.y,k[ut+W+2]=l.z,k[ut+W+3]=0),A===!0&&(l.fromBufferAttribute(et,P),k[ut+W+4]=l.x,k[ut+W+5]=l.y,k[ut+W+6]=l.z,k[ut+W+7]=0),y===!0&&(l.fromBufferAttribute(ft,P),k[ut+W+8]=l.x,k[ut+W+9]=l.y,k[ut+W+10]=l.z,k[ut+W+11]=ft.itemSize===4?l.w:1)}}x={count:v,texture:I,size:new he(O,F)},r.set(h,x),h.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function YT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const kv=new zn,X_=new Iv(1,1),Xv=new Cv,Wv=new gM,qv=new Pv,W_=[],q_=[],Y_=new Float32Array(16),j_=new Float32Array(9),Z_=new Float32Array(4);function Ys(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=W_[l];if(c===void 0&&(c=new Float32Array(l),W_[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function xn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function pu(s,t){let i=q_[t];i===void 0&&(i=new Int32Array(t),q_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function jT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function ZT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),xn(i,t)}}function KT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),xn(i,t)}}function QT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),xn(i,t)}}function JT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;Z_.set(r),s.uniformMatrix2fv(this.addr,!1,Z_),xn(i,r)}}function $T(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;j_.set(r),s.uniformMatrix3fv(this.addr,!1,j_),xn(i,r)}}function t1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;Y_.set(r),s.uniformMatrix4fv(this.addr,!1,Y_),xn(i,r)}}function e1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function n1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),xn(i,t)}}function i1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),xn(i,t)}}function a1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),xn(i,t)}}function r1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function s1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),xn(i,t)}}function o1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),xn(i,t)}}function l1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),xn(i,t)}}function c1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(X_.compareFunction=wv,c=X_):c=kv,i.setTexture2D(t||c,l)}function u1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Wv,l)}function f1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||qv,l)}function d1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Xv,l)}function h1(s){switch(s){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return t1;case 5124:case 35670:return e1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return a1;case 5125:return r1;case 36294:return s1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}function p1(s,t){s.uniform1fv(this.addr,t)}function m1(s,t){const i=Ys(t,this.size,2);s.uniform2fv(this.addr,i)}function g1(s,t){const i=Ys(t,this.size,3);s.uniform3fv(this.addr,i)}function _1(s,t){const i=Ys(t,this.size,4);s.uniform4fv(this.addr,i)}function v1(s,t){const i=Ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function x1(s,t){const i=Ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function y1(s,t){const i=Ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function S1(s,t){s.uniform1iv(this.addr,t)}function M1(s,t){s.uniform2iv(this.addr,t)}function E1(s,t){s.uniform3iv(this.addr,t)}function b1(s,t){s.uniform4iv(this.addr,t)}function T1(s,t){s.uniform1uiv(this.addr,t)}function A1(s,t){s.uniform2uiv(this.addr,t)}function w1(s,t){s.uniform3uiv(this.addr,t)}function R1(s,t){s.uniform4uiv(this.addr,t)}function C1(s,t,i){const r=this.cache,l=t.length,c=pu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||kv,c[f])}function D1(s,t,i){const r=this.cache,l=t.length,c=pu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Wv,c[f])}function U1(s,t,i){const r=this.cache,l=t.length,c=pu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||qv,c[f])}function L1(s,t,i){const r=this.cache,l=t.length,c=pu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Xv,c[f])}function N1(s){switch(s){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return _1;case 35674:return v1;case 35675:return x1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return b1;case 5125:return T1;case 36294:return A1;case 36295:return w1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return L1}}class O1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=h1(i.type)}}class P1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=N1(i.type)}}class z1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function K_(s,t){s.seq.push(t),s.map[t.id]=t}function B1(s,t,i){const r=s.name,l=r.length;for(ih.lastIndex=0;;){const c=ih.exec(r),f=ih.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){K_(i,p===void 0?new O1(h,s,t):new P1(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new z1(h),K_(i,v)),i=v}}}class ru{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);B1(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Q_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const I1=37297;let F1=0;function H1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const J_=new me;function G1(s){Oe._getMatrix(J_,Oe.workingColorSpace,s);const t=`mat3( ${J_.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(s)){case su:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+H1(s.getShaderSource(t),h)}else return c}function V1(s,t){const i=G1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function k1(s,t){let i;switch(t){case WS:i="Linear";break;case qS:i="Reinhard";break;case YS:i="Cineon";break;case _v:i="ACESFilmic";break;case ZS:i="AgX";break;case KS:i="Neutral";break;case jS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new K;function X1(){Oe.getLuminanceCoefficients(Kc);const s=Kc.x.toFixed(4),t=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function q1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Y1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function nl(s){return s!==""}function tv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ev(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(s){return s.replace(j1,K1)}const Z1=new Map;function K1(s,t){let i=ve[t];if(i===void 0){const r=Z1.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Zh(i)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(s){return s.replace(Q1,J1)}function J1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function iv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function $1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ep?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function tA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case fu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function nA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case kS:t="ENVMAP_BLENDING_MIX";break;case XS:t="ENVMAP_BLENDING_ADD";break}return t}function iA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function aA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=$1(i),p=tA(i),_=eA(i),v=nA(i),x=iA(i),S=W1(i),E=q1(c),A=l.createProgram();let y,g,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),g.length>0&&(g+=`
`)):(y=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),g=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?ve.tonemapping_pars_fragment:"",i.toneMapping!==Za?k1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,V1("linearToOutputTexel",i.outputColorSpace),X1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),f=Zh(f),f=tv(f,i),f=ev(f,i),h=Zh(h),h=tv(h,i),h=ev(h,i),f=nv(f),h=nv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=D+y+f,w=D+g+h,O=Q_(l,l.VERTEX_SHADER,U),F=Q_(l,l.FRAGMENT_SHADER,w);l.attachShader(A,O),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function k(H){if(s.debug.checkShaderErrors){const at=l.getProgramInfoLog(A)||"",et=l.getShaderInfoLog(O)||"",ft=l.getShaderInfoLog(F)||"",ut=at.trim(),P=et.trim(),W=ft.trim();let G=!0,yt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,O,F);else{const N=$_(l,O,"vertex"),J=$_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+N+`
`+J)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(P===""||W==="")&&(yt=!1);yt&&(H.diagnostics={runnable:G,programLog:ut,vertexShader:{log:P,prefix:y},fragmentShader:{log:W,prefix:g}})}l.deleteShader(O),l.deleteShader(F),I=new ru(l,A),C=Y1(l,A)}let I;this.getUniforms=function(){return I===void 0&&k(this),I};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(A,I1)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=F1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=F,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new oA(t),i.set(t,r)),r}}class oA{constructor(t){this.id=rA++,this.code=t,this.usedTimes=0}}function lA(s,t,i,r,l,c,f){const h=new fp,m=new sA,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,L,H,at,et){const ft=at.fog,ut=et.geometry,P=C.isMeshStandardMaterial?at.environment:null,W=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),G=W&&W.mapping===fu?W.image.height:null,yt=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const N=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,J=N!==void 0?N.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let mt,bt,nt,ht;if(yt){const Ue=Bi[yt];mt=Ue.vertexShader,bt=Ue.fragmentShader}else mt=C.vertexShader,bt=C.fragmentShader,m.update(C),nt=m.getVertexShaderID(C),ht=m.getFragmentShaderID(C);const gt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),Gt=et.isInstancedMesh===!0,ee=et.isBatchedMesh===!0,De=!!C.map,Et=!!C.matcap,B=!!W,ae=!!C.aoMap,kt=!!C.lightMap,Qt=!!C.bumpMap,Lt=!!C.normalMap,Me=!!C.displacementMap,It=!!C.emissiveMap,ne=!!C.metalnessMap,Pe=!!C.roughnessMap,we=C.anisotropy>0,z=C.clearcoat>0,b=C.dispersion>0,Q=C.iridescence>0,dt=C.sheen>0,xt=C.transmission>0,ct=we&&!!C.anisotropyMap,Ft=z&&!!C.clearcoatMap,Ct=z&&!!C.clearcoatNormalMap,Zt=z&&!!C.clearcoatRoughnessMap,Jt=Q&&!!C.iridescenceMap,Tt=Q&&!!C.iridescenceThicknessMap,Pt=dt&&!!C.sheenColorMap,te=dt&&!!C.sheenRoughnessMap,jt=!!C.specularMap,Nt=!!C.specularColorMap,de=!!C.specularIntensityMap,q=xt&&!!C.transmissionMap,Rt=xt&&!!C.thicknessMap,Dt=!!C.gradientMap,Ht=!!C.alphaMap,At=C.alphaTest>0,Mt=!!C.alphaHash,Yt=!!C.extensions;let fe=Za;C.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(fe=s.toneMapping);const Be={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:mt,fragmentShader:bt,defines:C.defines,customVertexShaderID:nt,customFragmentShaderID:ht,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:ee,batchingColor:ee&&et._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&et.instanceColor!==null,instancingMorph:Gt&&et.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ks,alphaToCoverage:!!C.alphaToCoverage,map:De,matcap:Et,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:G,aoMap:ae,lightMap:kt,bumpMap:Qt,normalMap:Lt,displacementMap:x&&Me,emissiveMap:It,normalMapObjectSpace:Lt&&C.normalMapType===tM,normalMapTangentSpace:Lt&&C.normalMapType===lp,metalnessMap:ne,roughnessMap:Pe,anisotropy:we,anisotropyMap:ct,clearcoat:z,clearcoatMap:Ft,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:b,iridescence:Q,iridescenceMap:Jt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Pt,sheenRoughnessMap:te,specularMap:jt,specularColorMap:Nt,specularIntensityMap:de,transmission:xt,transmissionMap:q,thicknessMap:Rt,gradientMap:Dt,opaque:C.transparent===!1&&C.blending===Bs&&C.alphaToCoverage===!1,alphaMap:Ht,alphaTest:At,alphaHash:Mt,combine:C.combine,mapUv:De&&A(C.map.channel),aoMapUv:ae&&A(C.aoMap.channel),lightMapUv:kt&&A(C.lightMap.channel),bumpMapUv:Qt&&A(C.bumpMap.channel),normalMapUv:Lt&&A(C.normalMap.channel),displacementMapUv:Me&&A(C.displacementMap.channel),emissiveMapUv:It&&A(C.emissiveMap.channel),metalnessMapUv:ne&&A(C.metalnessMap.channel),roughnessMapUv:Pe&&A(C.roughnessMap.channel),anisotropyMapUv:ct&&A(C.anisotropyMap.channel),clearcoatMapUv:Ft&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:te&&A(C.sheenRoughnessMap.channel),specularMapUv:jt&&A(C.specularMap.channel),specularColorMapUv:Nt&&A(C.specularColorMap.channel),specularIntensityMapUv:de&&A(C.specularIntensityMap.channel),transmissionMapUv:q&&A(C.transmissionMap.channel),thicknessMapUv:Rt&&A(C.thicknessMap.channel),alphaMapUv:Ht&&A(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Lt||we),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ut.attributes.uv&&(De||Ht),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:et.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:De&&C.map.isVideoTexture===!0&&Oe.getTransfer(C.map.colorSpace)===Xe,decodeVideoTextureEmissive:It&&C.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(C.emissiveMap.colorSpace)===Xe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ai,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Yt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&C.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function g(C){const L=[];if(C.shaderID?L.push(C.shaderID):(L.push(C.customVertexShaderID),L.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)L.push(H),L.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(D(L,C),U(L,C),L.push(s.outputColorSpace)),L.push(C.customProgramCacheKey),L.join()}function D(C,L){C.push(L.precision),C.push(L.outputColorSpace),C.push(L.envMapMode),C.push(L.envMapCubeUVHeight),C.push(L.mapUv),C.push(L.alphaMapUv),C.push(L.lightMapUv),C.push(L.aoMapUv),C.push(L.bumpMapUv),C.push(L.normalMapUv),C.push(L.displacementMapUv),C.push(L.emissiveMapUv),C.push(L.metalnessMapUv),C.push(L.roughnessMapUv),C.push(L.anisotropyMapUv),C.push(L.clearcoatMapUv),C.push(L.clearcoatNormalMapUv),C.push(L.clearcoatRoughnessMapUv),C.push(L.iridescenceMapUv),C.push(L.iridescenceThicknessMapUv),C.push(L.sheenColorMapUv),C.push(L.sheenRoughnessMapUv),C.push(L.specularMapUv),C.push(L.specularColorMapUv),C.push(L.specularIntensityMapUv),C.push(L.transmissionMapUv),C.push(L.thicknessMapUv),C.push(L.combine),C.push(L.fogExp2),C.push(L.sizeAttenuation),C.push(L.morphTargetsCount),C.push(L.morphAttributeCount),C.push(L.numDirLights),C.push(L.numPointLights),C.push(L.numSpotLights),C.push(L.numSpotLightMaps),C.push(L.numHemiLights),C.push(L.numRectAreaLights),C.push(L.numDirLightShadows),C.push(L.numPointLightShadows),C.push(L.numSpotLightShadows),C.push(L.numSpotLightShadowsWithMaps),C.push(L.numLightProbes),C.push(L.shadowMapType),C.push(L.toneMapping),C.push(L.numClippingPlanes),C.push(L.numClipIntersection),C.push(L.depthPacking)}function U(C,L){h.disableAll(),L.supportsVertexTextures&&h.enable(0),L.instancing&&h.enable(1),L.instancingColor&&h.enable(2),L.instancingMorph&&h.enable(3),L.matcap&&h.enable(4),L.envMap&&h.enable(5),L.normalMapObjectSpace&&h.enable(6),L.normalMapTangentSpace&&h.enable(7),L.clearcoat&&h.enable(8),L.iridescence&&h.enable(9),L.alphaTest&&h.enable(10),L.vertexColors&&h.enable(11),L.vertexAlphas&&h.enable(12),L.vertexUv1s&&h.enable(13),L.vertexUv2s&&h.enable(14),L.vertexUv3s&&h.enable(15),L.vertexTangents&&h.enable(16),L.anisotropy&&h.enable(17),L.alphaHash&&h.enable(18),L.batching&&h.enable(19),L.dispersion&&h.enable(20),L.batchingColor&&h.enable(21),L.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),C.push(h.mask)}function w(C){const L=E[C.type];let H;if(L){const at=Bi[L];H=CM.clone(at.uniforms)}else H=C.uniforms;return H}function O(C,L){let H;for(let at=0,et=_.length;at<et;at++){const ft=_[at];if(ft.cacheKey===L){H=ft,++H.usedTimes;break}}return H===void 0&&(H=new aA(s,L,C,c),_.push(H)),H}function F(C){if(--C.usedTimes===0){const L=_.indexOf(C);_[L]=_[_.length-1],_.pop(),C.destroy()}}function k(C){m.remove(C)}function I(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:O,releaseProgram:F,releaseShaderCache:k,programs:_,dispose:I}}function cA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function uA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function av(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(v,x,S,E,A,y){let g=s[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:A,group:y},s[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=A,g.group=y),t++,g}function h(v,x,S,E,A,y){const g=f(v,x,S,E,A,y);S.transmission>0?r.push(g):S.transparent===!0?l.push(g):i.push(g)}function m(v,x,S,E,A,y){const g=f(v,x,S,E,A,y);S.transmission>0?r.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||uA),r.length>1&&r.sort(x||av),l.length>1&&l.sort(x||av)}function _(){for(let v=t,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function fA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new rv,s.set(r,[f])):l>=c.length?(f=new rv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function dA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new xe};break;case"SpotLight":i={position:new K,direction:new K,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function hA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let pA=0;function mA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gA(s){const t=new dA,i=hA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new Je,f=new Je;function h(p){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,E=0,A=0,y=0,g=0,D=0,U=0,w=0,O=0,F=0,k=0;p.sort(mA);for(let C=0,L=p.length;C<L;C++){const H=p[C],at=H.color,et=H.intensity,ft=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=at.r*et,v+=at.g*et,x+=at.b*et;else if(H.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],et);k++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const W=H.shadow,G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.directionalShadow[S]=G,r.directionalShadowMap[S]=ut,r.directionalShadowMatrix[S]=H.shadow.matrix,D++}r.directional[S]=P,S++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(at).multiplyScalar(et),P.distance=ft,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[A]=P;const W=H.shadow;if(H.map&&(r.spotLightMap[O]=H.map,O++,W.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[A]=W.matrix,H.castShadow){const G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.spotShadow[A]=G,r.spotShadowMap[A]=ut,w++}A++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(at).multiplyScalar(et),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=P,y++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const W=H.shadow,G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,r.pointShadow[E]=G,r.pointShadowMap[E]=ut,r.pointShadowMatrix[E]=H.shadow.matrix,U++}r.point[E]=P,E++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(et),P.groundColor.copy(H.groundColor).multiplyScalar(et),r.hemi[g]=P,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==S||I.pointLength!==E||I.spotLength!==A||I.rectAreaLength!==y||I.hemiLength!==g||I.numDirectionalShadows!==D||I.numPointShadows!==U||I.numSpotShadows!==w||I.numSpotMaps!==O||I.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+O-F,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,I.directionalLength=S,I.pointLength=E,I.spotLength=A,I.rectAreaLength=y,I.hemiLength=g,I.numDirectionalShadows=D,I.numPointShadows=U,I.numSpotShadows=w,I.numSpotMaps=O,I.numLightProbes=k,r.version=pA++)}function m(p,_){let v=0,x=0,S=0,E=0,A=0;const y=_.matrixWorldInverse;for(let g=0,D=p.length;g<D;g++){const U=p[g];if(U.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(U.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(y),A++}}}return{setup:h,setupView:m,state:r}}function sv(s){const t=new gA(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function _A(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new sv(s),t.set(l,[h])):c>=f.length?(h=new sv(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
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
}`;function yA(s,t,i){let r=new pp;const l=new he,c=new he,f=new qe,h=new FM({depthPacking:$S}),m=new HM,p={},_=i.maxTextureSize,v={[pa]:Xn,[Xn]:pa,[Ai]:Ai},x=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:vA,fragmentShader:xA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qe(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gv;let g=this.type;this.render=function(F,k,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const C=s.getRenderTarget(),L=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),at=s.state;at.setBlending(ja),at.buffers.depth.getReversed()?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const et=g!==ua&&this.type===ua,ft=g===ua&&this.type!==ua;for(let ut=0,P=F.length;ut<P;ut++){const W=F[ut],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const yt=G.getFrameExtents();if(l.multiply(yt),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/yt.x),l.x=c.x*yt.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/yt.y),l.y=c.y*yt.y,G.mapSize.y=c.y)),G.map===null||et===!0||ft===!0){const J=this.type!==ua?{minFilter:Ri,magFilter:Ri}:{};G.map!==null&&G.map.dispose(),G.map=new Lr(l.x,l.y,J),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const N=G.getViewportCount();for(let J=0;J<N;J++){const vt=G.getViewport(J);f.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),at.viewport(f),G.updateMatrices(W,J),r=G.getFrustum(),w(k,I,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===ua&&D(G,I),G.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(C,L,H)};function D(F,k){const I=t.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Lr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,I,x,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,I,S,A,null)}function U(F,k,I,C){let L=null;const H=I.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)L=H;else if(L=I.isPointLight===!0?m:h,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const at=L.uuid,et=k.uuid;let ft=p[at];ft===void 0&&(ft={},p[at]=ft);let ut=ft[et];ut===void 0&&(ut=L.clone(),ft[et]=ut,k.addEventListener("dispose",O)),L=ut}if(L.visible=k.visible,L.wireframe=k.wireframe,C===ua?L.side=k.shadowSide!==null?k.shadowSide:k.side:L.side=k.shadowSide!==null?k.shadowSide:v[k.side],L.alphaMap=k.alphaMap,L.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,L.map=k.map,L.clipShadows=k.clipShadows,L.clippingPlanes=k.clippingPlanes,L.clipIntersection=k.clipIntersection,L.displacementMap=k.displacementMap,L.displacementScale=k.displacementScale,L.displacementBias=k.displacementBias,L.wireframeLinewidth=k.wireframeLinewidth,L.linewidth=k.linewidth,I.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const at=s.properties.get(L);at.light=I}return L}function w(F,k,I,C,L){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&L===ua)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,F.matrixWorld);const et=t.update(F),ft=F.material;if(Array.isArray(ft)){const ut=et.groups;for(let P=0,W=ut.length;P<W;P++){const G=ut[P],yt=ft[G.materialIndex];if(yt&&yt.visible){const N=U(F,yt,C,L);F.onBeforeShadow(s,F,k,I,et,N,G),s.renderBufferDirect(I,null,et,N,F,G),F.onAfterShadow(s,F,k,I,et,N,G)}}}else if(ft.visible){const ut=U(F,ft,C,L);F.onBeforeShadow(s,F,k,I,et,ut,null),s.renderBufferDirect(I,null,et,ut,F,null),F.onAfterShadow(s,F,k,I,et,ut,null)}}const at=F.children;for(let et=0,ft=at.length;et<ft;et++)w(at[et],k,I,C,L)}function O(F){F.target.removeEventListener("dispose",O);for(const I in p){const C=p[I],L=F.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}const SA={[lh]:ch,[uh]:hh,[fh]:ph,[Hs]:dh,[ch]:lh,[hh]:uh,[ph]:fh,[dh]:Hs};function MA(s,t){function i(){let q=!1;const Rt=new qe;let Dt=null;const Ht=new qe(0,0,0,0);return{setMask:function(At){Dt!==At&&!q&&(s.colorMask(At,At,At,At),Dt=At)},setLocked:function(At){q=At},setClear:function(At,Mt,Yt,fe,Be){Be===!0&&(At*=fe,Mt*=fe,Yt*=fe),Rt.set(At,Mt,Yt,fe),Ht.equals(Rt)===!1&&(s.clearColor(At,Mt,Yt,fe),Ht.copy(Rt))},reset:function(){q=!1,Dt=null,Ht.set(-1,0,0,0)}}}function r(){let q=!1,Rt=!1,Dt=null,Ht=null,At=null;return{setReversed:function(Mt){if(Rt!==Mt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Mt;const fe=At;At=null,this.setClear(fe)}},getReversed:function(){return Rt},setTest:function(Mt){Mt?gt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Mt){Dt!==Mt&&!q&&(s.depthMask(Mt),Dt=Mt)},setFunc:function(Mt){if(Rt&&(Mt=SA[Mt]),Ht!==Mt){switch(Mt){case lh:s.depthFunc(s.NEVER);break;case ch:s.depthFunc(s.ALWAYS);break;case uh:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case fh:s.depthFunc(s.EQUAL);break;case dh:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case ph:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ht=Mt}},setLocked:function(Mt){q=Mt},setClear:function(Mt){At!==Mt&&(Rt&&(Mt=1-Mt),s.clearDepth(Mt),At=Mt)},reset:function(){q=!1,Dt=null,Ht=null,At=null,Rt=!1}}}function l(){let q=!1,Rt=null,Dt=null,Ht=null,At=null,Mt=null,Yt=null,fe=null,Be=null;return{setTest:function(Ue){q||(Ue?gt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(Ue){Rt!==Ue&&!q&&(s.stencilMask(Ue),Rt=Ue)},setFunc:function(Ue,vi,hn){(Dt!==Ue||Ht!==vi||At!==hn)&&(s.stencilFunc(Ue,vi,hn),Dt=Ue,Ht=vi,At=hn)},setOp:function(Ue,vi,hn){(Mt!==Ue||Yt!==vi||fe!==hn)&&(s.stencilOp(Ue,vi,hn),Mt=Ue,Yt=vi,fe=hn)},setLocked:function(Ue){q=Ue},setClear:function(Ue){Be!==Ue&&(s.clearStencil(Ue),Be=Ue)},reset:function(){q=!1,Rt=null,Dt=null,Ht=null,At=null,Mt=null,Yt=null,fe=null,Be=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,S=[],E=null,A=!1,y=null,g=null,D=null,U=null,w=null,O=null,F=null,k=new xe(0,0,0),I=0,C=!1,L=null,H=null,at=null,et=null,ft=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=W>=2);let yt=null,N={};const J=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),mt=new qe().fromArray(J),bt=new qe().fromArray(vt);function nt(q,Rt,Dt,Ht){const At=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(q,Mt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Dt;Yt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Ht,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Rt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Mt}const ht={};ht[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),gt(s.DEPTH_TEST),f.setFunc(Hs),Qt(!1),Lt(n_),gt(s.CULL_FACE),ae(ja);function gt(q){_[q]!==!0&&(s.enable(q),_[q]=!0)}function Ut(q){_[q]!==!1&&(s.disable(q),_[q]=!1)}function Gt(q,Rt){return v[q]!==Rt?(s.bindFramebuffer(q,Rt),v[q]=Rt,q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Rt),q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ee(q,Rt){let Dt=S,Ht=!1;if(q){Dt=x.get(Rt),Dt===void 0&&(Dt=[],x.set(Rt,Dt));const At=q.textures;if(Dt.length!==At.length||Dt[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Yt=At.length;Mt<Yt;Mt++)Dt[Mt]=s.COLOR_ATTACHMENT0+Mt;Dt.length=At.length,Ht=!0}}else Dt[0]!==s.BACK&&(Dt[0]=s.BACK,Ht=!0);Ht&&s.drawBuffers(Dt)}function De(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const Et={[Tr]:s.FUNC_ADD,[AS]:s.FUNC_SUBTRACT,[wS]:s.FUNC_REVERSE_SUBTRACT};Et[RS]=s.MIN,Et[CS]=s.MAX;const B={[DS]:s.ZERO,[US]:s.ONE,[LS]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[IS]:s.SRC_ALPHA_SATURATE,[zS]:s.DST_COLOR,[OS]:s.DST_ALPHA,[NS]:s.ONE_MINUS_SRC_COLOR,[oh]:s.ONE_MINUS_SRC_ALPHA,[BS]:s.ONE_MINUS_DST_COLOR,[PS]:s.ONE_MINUS_DST_ALPHA,[FS]:s.CONSTANT_COLOR,[HS]:s.ONE_MINUS_CONSTANT_COLOR,[GS]:s.CONSTANT_ALPHA,[VS]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(q,Rt,Dt,Ht,At,Mt,Yt,fe,Be,Ue){if(q===ja){A===!0&&(Ut(s.BLEND),A=!1);return}if(A===!1&&(gt(s.BLEND),A=!0),q!==TS){if(q!==y||Ue!==C){if((g!==Tr||w!==Tr)&&(s.blendEquation(s.FUNC_ADD),g=Tr,w=Tr),Ue)switch(q){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i_:s.blendFunc(s.ONE,s.ONE);break;case a_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case r_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case a_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}D=null,U=null,O=null,F=null,k.set(0,0,0),I=0,y=q,C=Ue}return}At=At||Rt,Mt=Mt||Dt,Yt=Yt||Ht,(Rt!==g||At!==w)&&(s.blendEquationSeparate(Et[Rt],Et[At]),g=Rt,w=At),(Dt!==D||Ht!==U||Mt!==O||Yt!==F)&&(s.blendFuncSeparate(B[Dt],B[Ht],B[Mt],B[Yt]),D=Dt,U=Ht,O=Mt,F=Yt),(fe.equals(k)===!1||Be!==I)&&(s.blendColor(fe.r,fe.g,fe.b,Be),k.copy(fe),I=Be),y=q,C=!1}function kt(q,Rt){q.side===Ai?Ut(s.CULL_FACE):gt(s.CULL_FACE);let Dt=q.side===Xn;Rt&&(Dt=!Dt),Qt(Dt),q.blending===Bs&&q.transparent===!1?ae(ja):ae(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ht=q.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),It(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(q){L!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),L=q)}function Lt(q){q!==ES?(gt(s.CULL_FACE),q!==H&&(q===n_?s.cullFace(s.BACK):q===bS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),H=q}function Me(q){q!==at&&(P&&s.lineWidth(q),at=q)}function It(q,Rt,Dt){q?(gt(s.POLYGON_OFFSET_FILL),(et!==Rt||ft!==Dt)&&(s.polygonOffset(Rt,Dt),et=Rt,ft=Dt)):Ut(s.POLYGON_OFFSET_FILL)}function ne(q){q?gt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function Pe(q){q===void 0&&(q=s.TEXTURE0+ut-1),yt!==q&&(s.activeTexture(q),yt=q)}function we(q,Rt,Dt){Dt===void 0&&(yt===null?Dt=s.TEXTURE0+ut-1:Dt=yt);let Ht=N[Dt];Ht===void 0&&(Ht={type:void 0,texture:void 0},N[Dt]=Ht),(Ht.type!==q||Ht.texture!==Rt)&&(yt!==Dt&&(s.activeTexture(Dt),yt=Dt),s.bindTexture(q,Rt||ht[q]),Ht.type=q,Ht.texture=Rt)}function z(){const q=N[yt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Jt(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pt(q){mt.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),mt.copy(q))}function te(q){bt.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),bt.copy(q))}function jt(q,Rt){let Dt=p.get(Rt);Dt===void 0&&(Dt=new WeakMap,p.set(Rt,Dt));let Ht=Dt.get(q);Ht===void 0&&(Ht=s.getUniformBlockIndex(Rt,q.name),Dt.set(q,Ht))}function Nt(q,Rt){const Ht=p.get(Rt).get(q);m.get(Rt)!==Ht&&(s.uniformBlockBinding(Rt,Ht,q.__bindingPointIndex),m.set(Rt,Ht))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},yt=null,N={},v={},x=new WeakMap,S=[],E=null,A=!1,y=null,g=null,D=null,U=null,w=null,O=null,F=null,k=new xe(0,0,0),I=0,C=!1,L=null,H=null,at=null,et=null,ft=null,mt.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:gt,disable:Ut,bindFramebuffer:Gt,drawBuffers:ee,useProgram:De,setBlending:ae,setMaterial:kt,setFlipSided:Qt,setCullFace:Lt,setLineWidth:Me,setPolygonOffset:It,setScissorTest:ne,activeTexture:Pe,bindTexture:we,unbindTexture:z,compressedTexImage2D:b,compressedTexImage3D:Q,texImage2D:Jt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Nt,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Ft,scissor:Pt,viewport:te,reset:de}}function EA(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,b){return S?new OffscreenCanvas(z,b):ol("canvas")}function A(z,b,Q){let dt=1;const xt=we(z);if((xt.width>Q||xt.height>Q)&&(dt=Q/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ct=Math.floor(dt*xt.width),Ft=Math.floor(dt*xt.height);v===void 0&&(v=E(ct,Ft));const Ct=b?E(ct,Ft):v;return Ct.width=ct,Ct.height=Ft,Ct.getContext("2d").drawImage(z,0,0,ct,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+Ft+")."),Ct}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function y(z){return z.generateMipmaps}function g(z){s.generateMipmap(z)}function D(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(z,b,Q,dt,xt=!1){if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ct=b;if(b===s.RED&&(Q===s.FLOAT&&(ct=s.R32F),Q===s.HALF_FLOAT&&(ct=s.R16F),Q===s.UNSIGNED_BYTE&&(ct=s.R8)),b===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.R8UI),Q===s.UNSIGNED_SHORT&&(ct=s.R16UI),Q===s.UNSIGNED_INT&&(ct=s.R32UI),Q===s.BYTE&&(ct=s.R8I),Q===s.SHORT&&(ct=s.R16I),Q===s.INT&&(ct=s.R32I)),b===s.RG&&(Q===s.FLOAT&&(ct=s.RG32F),Q===s.HALF_FLOAT&&(ct=s.RG16F),Q===s.UNSIGNED_BYTE&&(ct=s.RG8)),b===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RG16UI),Q===s.UNSIGNED_INT&&(ct=s.RG32UI),Q===s.BYTE&&(ct=s.RG8I),Q===s.SHORT&&(ct=s.RG16I),Q===s.INT&&(ct=s.RG32I)),b===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),Q===s.UNSIGNED_INT&&(ct=s.RGB32UI),Q===s.BYTE&&(ct=s.RGB8I),Q===s.SHORT&&(ct=s.RGB16I),Q===s.INT&&(ct=s.RGB32I)),b===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ct=s.RGBA32UI),Q===s.BYTE&&(ct=s.RGBA8I),Q===s.SHORT&&(ct=s.RGBA16I),Q===s.INT&&(ct=s.RGBA32I)),b===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),b===s.RGBA){const Ft=xt?su:Oe.getTransfer(dt);Q===s.FLOAT&&(ct=s.RGBA32F),Q===s.HALF_FLOAT&&(ct=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ct=Ft===Xe?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(z,b){let Q;return z?b===null||b===Ur||b===al?Q=s.DEPTH24_STENCIL8:b===da?Q=s.DEPTH32F_STENCIL8:b===il&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ur||b===al?Q=s.DEPTH_COMPONENT24:b===da?Q=s.DEPTH_COMPONENT32F:b===il&&(Q=s.DEPTH_COMPONENT16),Q}function O(z,b){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ri&&z.minFilter!==Fi?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function F(z){const b=z.target;b.removeEventListener("dispose",F),I(b),b.isVideoTexture&&_.delete(b)}function k(z){const b=z.target;b.removeEventListener("dispose",k),L(b)}function I(z){const b=r.get(z);if(b.__webglInit===void 0)return;const Q=z.source,dt=x.get(Q);if(dt){const xt=dt[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(z),Object.keys(dt).length===0&&x.delete(Q)}r.remove(z)}function C(z){const b=r.get(z);s.deleteTexture(b.__webglTexture);const Q=z.source,dt=x.get(Q);delete dt[b.__cacheKey],f.memory.textures--}function L(z){const b=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let xt=0;xt<b.__webglFramebuffer[dt].length;xt++)s.deleteFramebuffer(b.__webglFramebuffer[dt][xt]);else s.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)s.deleteFramebuffer(b.__webglFramebuffer[dt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=z.textures;for(let dt=0,xt=Q.length;dt<xt;dt++){const ct=r.get(Q[dt]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),f.memory.textures--),r.remove(Q[dt])}r.remove(z)}let H=0;function at(){H=0}function et(){const z=H;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),H+=1,z}function ft(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function ut(z,b){const Q=r.get(z);if(z.isVideoTexture&&ne(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Q.__version!==z.version){const dt=z.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(Q,z,b);return}}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+b)}function P(z,b){const Q=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){ht(Q,z,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+b)}function W(z,b){const Q=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){ht(Q,z,b);return}i.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+b)}function G(z,b){const Q=r.get(z);if(z.version>0&&Q.__version!==z.version){gt(Q,z,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+b)}const yt={[_h]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[vh]:s.MIRRORED_REPEAT},N={[Ri]:s.NEAREST,[QS]:s.NEAREST_MIPMAP_NEAREST,[Tc]:s.NEAREST_MIPMAP_LINEAR,[Fi]:s.LINEAR,[Ed]:s.LINEAR_MIPMAP_NEAREST,[Rr]:s.LINEAR_MIPMAP_LINEAR},J={[eM]:s.NEVER,[oM]:s.ALWAYS,[nM]:s.LESS,[wv]:s.LEQUAL,[iM]:s.EQUAL,[sM]:s.GEQUAL,[aM]:s.GREATER,[rM]:s.NOTEQUAL};function vt(z,b){if(b.type===da&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fi||b.magFilter===Ed||b.magFilter===Tc||b.magFilter===Rr||b.minFilter===Fi||b.minFilter===Ed||b.minFilter===Tc||b.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,yt[b.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,yt[b.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,yt[b.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ri||b.minFilter!==Tc&&b.minFilter!==Rr||b.type===da&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function mt(z,b){let Q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",F));const dt=b.source;let xt=x.get(dt);xt===void 0&&(xt={},x.set(dt,xt));const ct=ft(b);if(ct!==z.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),xt[ct].usedTimes++;const Ft=xt[z.__cacheKey];Ft!==void 0&&(xt[z.__cacheKey].usedTimes--,Ft.usedTimes===0&&C(b)),z.__cacheKey=ct,z.__webglTexture=xt[ct].texture}return Q}function bt(z,b,Q){return Math.floor(Math.floor(z/Q)/b)}function nt(z,b,Q,dt){const ct=z.updateRanges;if(ct.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Q,dt,b.data);else{ct.sort((Tt,Pt)=>Tt.start-Pt.start);let Ft=0;for(let Tt=1;Tt<ct.length;Tt++){const Pt=ct[Ft],te=ct[Tt],jt=Pt.start+Pt.count,Nt=bt(te.start,b.width,4),de=bt(Pt.start,b.width,4);te.start<=jt+1&&Nt===de&&bt(te.start+te.count-1,b.width,4)===Nt?Pt.count=Math.max(Pt.count,te.start+te.count-Pt.start):(++Ft,ct[Ft]=te)}ct.length=Ft+1;const Ct=s.getParameter(s.UNPACK_ROW_LENGTH),Zt=s.getParameter(s.UNPACK_SKIP_PIXELS),Jt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,Pt=ct.length;Tt<Pt;Tt++){const te=ct[Tt],jt=Math.floor(te.start/4),Nt=Math.ceil(te.count/4),de=jt%b.width,q=Math.floor(jt/b.width),Rt=Nt,Dt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,de),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,de,q,Rt,Dt,Q,dt,b.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ct),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Jt)}}function ht(z,b,Q){let dt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=s.TEXTURE_3D);const xt=mt(z,b),ct=b.source;i.bindTexture(dt,z.__webglTexture,s.TEXTURE0+Q);const Ft=r.get(ct);if(ct.version!==Ft.__version||xt===!0){i.activeTexture(s.TEXTURE0+Q);const Ct=Oe.getPrimaries(Oe.workingColorSpace),Zt=b.colorSpace===Ya?null:Oe.getPrimaries(b.colorSpace),Jt=b.colorSpace===Ya||Ct===Zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Tt=A(b.image,!1,l.maxTextureSize);Tt=Pe(b,Tt);const Pt=c.convert(b.format,b.colorSpace),te=c.convert(b.type);let jt=U(b.internalFormat,Pt,te,b.colorSpace,b.isVideoTexture);vt(dt,b);let Nt;const de=b.mipmaps,q=b.isVideoTexture!==!0,Rt=Ft.__version===void 0||xt===!0,Dt=ct.dataReady,Ht=O(b,Tt);if(b.isDepthTexture)jt=w(b.format===sl,b.type),Rt&&(q?i.texStorage2D(s.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Pt,te,null));else if(b.isDataTexture)if(de.length>0){q&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ht,jt,de[0].width,de[0].height);for(let At=0,Mt=de.length;At<Mt;At++)Nt=de[At],q?Dt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Nt.width,Nt.height,Pt,te,Nt.data):i.texImage2D(s.TEXTURE_2D,At,jt,Nt.width,Nt.height,0,Pt,te,Nt.data);b.generateMipmaps=!1}else q?(Rt&&i.texStorage2D(s.TEXTURE_2D,Ht,jt,Tt.width,Tt.height),Dt&&nt(b,Tt,Pt,te)):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Pt,te,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,jt,de[0].width,de[0].height,Tt.depth);for(let At=0,Mt=de.length;At<Mt;At++)if(Nt=de[At],b.format!==wi)if(Pt!==null)if(q){if(Dt)if(b.layerUpdates.size>0){const Yt=z_(Nt.width,Nt.height,b.format,b.type);for(const fe of b.layerUpdates){const Be=Nt.data.subarray(fe*Yt/Nt.data.BYTES_PER_ELEMENT,(fe+1)*Yt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,fe,Nt.width,Nt.height,1,Pt,Be)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Nt.width,Nt.height,Tt.depth,Pt,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,jt,Nt.width,Nt.height,Tt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Dt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Nt.width,Nt.height,Tt.depth,Pt,te,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,At,jt,Nt.width,Nt.height,Tt.depth,0,Pt,te,Nt.data)}else{q&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ht,jt,de[0].width,de[0].height);for(let At=0,Mt=de.length;At<Mt;At++)Nt=de[At],b.format!==wi?Pt!==null?q?Dt&&i.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,Nt.width,Nt.height,Pt,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,At,jt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Dt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Nt.width,Nt.height,Pt,te,Nt.data):i.texImage2D(s.TEXTURE_2D,At,jt,Nt.width,Nt.height,0,Pt,te,Nt.data)}else if(b.isDataArrayTexture)if(q){if(Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,jt,Tt.width,Tt.height,Tt.depth),Dt)if(b.layerUpdates.size>0){const At=z_(Tt.width,Tt.height,b.format,b.type);for(const Mt of b.layerUpdates){const Yt=Tt.data.subarray(Mt*At/Tt.data.BYTES_PER_ELEMENT,(Mt+1)*At/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,Tt.width,Tt.height,1,Pt,te,Yt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,te,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Pt,te,Tt.data);else if(b.isData3DTexture)q?(Rt&&i.texStorage3D(s.TEXTURE_3D,Ht,jt,Tt.width,Tt.height,Tt.depth),Dt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,te,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Pt,te,Tt.data);else if(b.isFramebufferTexture){if(Rt)if(q)i.texStorage2D(s.TEXTURE_2D,Ht,jt,Tt.width,Tt.height);else{let At=Tt.width,Mt=Tt.height;for(let Yt=0;Yt<Ht;Yt++)i.texImage2D(s.TEXTURE_2D,Yt,jt,At,Mt,0,Pt,te,null),At>>=1,Mt>>=1}}else if(de.length>0){if(q&&Rt){const At=we(de[0]);i.texStorage2D(s.TEXTURE_2D,Ht,jt,At.width,At.height)}for(let At=0,Mt=de.length;At<Mt;At++)Nt=de[At],q?Dt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Pt,te,Nt):i.texImage2D(s.TEXTURE_2D,At,jt,Pt,te,Nt);b.generateMipmaps=!1}else if(q){if(Rt){const At=we(Tt);i.texStorage2D(s.TEXTURE_2D,Ht,jt,At.width,At.height)}Dt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,te,Tt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Pt,te,Tt);y(b)&&g(dt),Ft.__version=ct.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function gt(z,b,Q){if(b.image.length!==6)return;const dt=mt(z,b),xt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+Q);const ct=r.get(xt);if(xt.version!==ct.__version||dt===!0){i.activeTexture(s.TEXTURE0+Q);const Ft=Oe.getPrimaries(Oe.workingColorSpace),Ct=b.colorSpace===Ya?null:Oe.getPrimaries(b.colorSpace),Zt=b.colorSpace===Ya||Ft===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let Mt=0;Mt<6;Mt++)!Jt&&!Tt?Pt[Mt]=A(b.image[Mt],!0,l.maxCubemapSize):Pt[Mt]=Tt?b.image[Mt].image:b.image[Mt],Pt[Mt]=Pe(b,Pt[Mt]);const te=Pt[0],jt=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type),de=U(b.internalFormat,jt,Nt,b.colorSpace),q=b.isVideoTexture!==!0,Rt=ct.__version===void 0||dt===!0,Dt=xt.dataReady;let Ht=O(b,te);vt(s.TEXTURE_CUBE_MAP,b);let At;if(Jt){q&&Rt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,de,te.width,te.height);for(let Mt=0;Mt<6;Mt++){At=Pt[Mt].mipmaps;for(let Yt=0;Yt<At.length;Yt++){const fe=At[Yt];b.format!==wi?jt!==null?q?Dt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,fe.width,fe.height,jt,fe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,fe.width,fe.height,jt,Nt,fe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,de,fe.width,fe.height,0,jt,Nt,fe.data)}}}else{if(At=b.mipmaps,q&&Rt){At.length>0&&Ht++;const Mt=we(Pt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,de,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Tt){q?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Pt[Mt].width,Pt[Mt].height,jt,Nt,Pt[Mt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,de,Pt[Mt].width,Pt[Mt].height,0,jt,Nt,Pt[Mt].data);for(let Yt=0;Yt<At.length;Yt++){const Be=At[Yt].image[Mt].image;q?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,Be.width,Be.height,jt,Nt,Be.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,de,Be.width,Be.height,0,jt,Nt,Be.data)}}else{q?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,jt,Nt,Pt[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,de,jt,Nt,Pt[Mt]);for(let Yt=0;Yt<At.length;Yt++){const fe=At[Yt];q?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,jt,Nt,fe.image[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,de,jt,Nt,fe.image[Mt])}}}y(b)&&g(s.TEXTURE_CUBE_MAP),ct.__version=xt.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function Ut(z,b,Q,dt,xt,ct){const Ft=c.convert(Q.format,Q.colorSpace),Ct=c.convert(Q.type),Zt=U(Q.internalFormat,Ft,Ct,Q.colorSpace),Jt=r.get(b),Tt=r.get(Q);if(Tt.__renderTarget=b,!Jt.__hasExternalTextures){const Pt=Math.max(1,b.width>>ct),te=Math.max(1,b.height>>ct);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?i.texImage3D(xt,ct,Zt,Pt,te,b.depth,0,Ft,Ct,null):i.texImage2D(xt,ct,Zt,Pt,te,0,Ft,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),It(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,xt,Tt.__webglTexture,0,Me(b)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,xt,Tt.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(z,b,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,z),b.depthBuffer){const dt=b.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ct=w(b.stencilBuffer,xt),Ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=Me(b);It(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,ct,b.width,b.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,z)}else{const dt=b.textures;for(let xt=0;xt<dt.length;xt++){const ct=dt[xt],Ft=c.convert(ct.format,ct.colorSpace),Ct=c.convert(ct.type),Zt=U(ct.internalFormat,Ft,Ct,ct.colorSpace),Jt=Me(b);Q&&It(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Zt,b.width,b.height):It(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,Zt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Zt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(z,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const xt=dt.__webglTexture,ct=Me(b);if(b.depthTexture.format===rl)It(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0);else if(b.depthTexture.format===sl)It(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function De(z){const b=r.get(z),Q=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=dt}if(z.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const dt=z.texture.mipmaps;dt&&dt.length>0?ee(b.__webglFramebuffer[0],z):ee(b.__webglFramebuffer,z)}else if(Q){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=s.createRenderbuffer(),Gt(b.__webglDepthbuffer[dt],z,!1);else{const xt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ct)}}else{const dt=z.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Gt(b.__webglDepthbuffer,z,!1);else{const xt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(z,b,Q){const dt=r.get(z);b!==void 0&&Ut(dt.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&De(z)}function B(z){const b=z.texture,Q=r.get(z),dt=r.get(b);z.addEventListener("dispose",k);const xt=z.textures,ct=z.isWebGLCubeRenderTarget===!0,Ft=xt.length>1;if(Ft||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=b.version,f.memory.textures++),ct){Q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<b.mipmaps.length;Zt++)Q.__webglFramebuffer[Ct][Zt]=s.createFramebuffer()}else Q.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)Q.__webglFramebuffer[Ct]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const Jt=r.get(xt[Ct]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),f.memory.textures++)}if(z.samples>0&&It(z)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Zt=xt[Ct];Q.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct]);const Jt=c.convert(Zt.format,Zt.colorSpace),Tt=c.convert(Zt.type),Pt=U(Zt.internalFormat,Jt,Tt,Zt.colorSpace,z.isXRRenderTarget===!0),te=Me(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Pt,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Gt(Q.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),vt(s.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Ut(Q.__webglFramebuffer[Ct][Zt],z,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else Ut(Q.__webglFramebuffer[Ct],z,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(b)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const Jt=xt[Ct],Tt=r.get(Jt);let Pt=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Pt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pt,Tt.__webglTexture),vt(Pt,Jt),Ut(Q.__webglFramebuffer,z,Jt,s.COLOR_ATTACHMENT0+Ct,Pt,0),y(Jt)&&g(Pt)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ct=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),vt(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)Ut(Q.__webglFramebuffer[Zt],z,b,s.COLOR_ATTACHMENT0,Ct,Zt);else Ut(Q.__webglFramebuffer,z,b,s.COLOR_ATTACHMENT0,Ct,0);y(b)&&g(Ct),i.unbindTexture()}z.depthBuffer&&De(z)}function ae(z){const b=z.textures;for(let Q=0,dt=b.length;Q<dt;Q++){const xt=b[Q];if(y(xt)){const ct=D(z),Ft=r.get(xt).__webglTexture;i.bindTexture(ct,Ft),g(ct),i.unbindTexture()}}}const kt=[],Qt=[];function Lt(z){if(z.samples>0){if(It(z)===!1){const b=z.textures,Q=z.width,dt=z.height;let xt=s.COLOR_BUFFER_BIT;const ct=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=r.get(z),Ct=b.length>1;if(Ct)for(let Jt=0;Jt<b.length;Jt++)i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Zt=z.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Jt=0;Jt<b.length;Jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Jt]);const Tt=r.get(b[Jt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,Q,dt,0,0,Q,dt,xt,s.NEAREST),m===!0&&(kt.length=0,Qt.length=0,kt.push(s.COLOR_ATTACHMENT0+Jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(kt.push(ct),Qt.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Jt=0;Jt<b.length;Jt++){i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Jt]);const Tt=r.get(b[Jt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const b=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Me(z){return Math.min(l.maxSamples,z.samples)}function It(z){const b=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(z){const b=f.render.frame;_.get(z)!==b&&(_.set(z,b),z.update())}function Pe(z,b){const Q=z.colorSpace,dt=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Q!==ks&&Q!==Ya&&(Oe.getTransfer(Q)===Xe?(dt!==wi||xt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}function we(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=at,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Et,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=It}function bA(s,t){function i(r,l=Ya){let c;const f=Oe.getTransfer(l);if(r===Gi)return s.UNSIGNED_BYTE;if(r===ip)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ap)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xv)return s.BYTE;if(r===yv)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===np)return s.INT;if(r===Ur)return s.UNSIGNED_INT;if(r===da)return s.FLOAT;if(r===fl)return s.HALF_FLOAT;if(r===Mv)return s.ALPHA;if(r===Ev)return s.RGB;if(r===wi)return s.RGBA;if(r===rl)return s.DEPTH_COMPONENT;if(r===sl)return s.DEPTH_STENCIL;if(r===bv)return s.RED;if(r===rp)return s.RED_INTEGER;if(r===Tv)return s.RG;if(r===sp)return s.RG_INTEGER;if(r===op)return s.RGBA_INTEGER;if(r===$c||r===tu||r===eu||r===nu)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===yh||r===Sh||r===Mh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh||r===bh||r===Th)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Eh||r===bh)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Th)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ah||r===wh||r===Rh||r===Ch||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Bh||r===Ih||r===Fh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ah)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ph)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ih)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===iu||r===Hh||r===Gh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===iu)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Av||r===Vh||r===kh||r===Xh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===iu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class Yv extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AA=`
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

}`;class wA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Yv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Qa({vertexShader:TA,fragmentShader:AA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qe(new Ws(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends qs{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,x=null,S=null,E=null;const A=new wA,y={},g=i.getContextAttributes();let D=null,U=null;const w=[],O=[],F=new he;let k=null;const I=new kn;I.viewport=new qe;const C=new kn;C.viewport=new qe;const L=[I,C],H=new ZM;let at=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=w[nt];return ht===void 0&&(ht=new qd,w[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=w[nt];return ht===void 0&&(ht=new qd,w[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=w[nt];return ht===void 0&&(ht=new qd,w[nt]=ht),ht.getHandSpace()};function ft(nt){const ht=O.indexOf(nt.inputSource);if(ht===-1)return;const gt=w[ht];gt!==void 0&&(gt.update(nt.inputSource,nt.frame,p||f),gt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function ut(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",P);for(let nt=0;nt<w.length;nt++){const ht=O[nt];ht!==null&&(O[nt]=null,w[nt].disconnect(ht))}at=null,et=null,A.reset();for(const nt in y)delete y[nt];t.setRenderTarget(D),S=null,x=null,v=null,l=null,U=null,bt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ut=null,Gt=null;g.depth&&(Gt=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=g.stencil?sl:rl,Ut=g.stencil?al:Ur);const ee={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:c};x=v.createProjectionLayer(ee),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Lr(x.textureWidth,x.textureHeight,{format:wi,type:Gi,depthTexture:new Iv(x.textureWidth,x.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Lr(S.framebufferWidth,S.framebufferHeight,{format:wi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),bt.setContext(l),bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function P(nt){for(let ht=0;ht<nt.removed.length;ht++){const gt=nt.removed[ht],Ut=O.indexOf(gt);Ut>=0&&(O[Ut]=null,w[Ut].disconnect(gt))}for(let ht=0;ht<nt.added.length;ht++){const gt=nt.added[ht];let Ut=O.indexOf(gt);if(Ut===-1){for(let ee=0;ee<w.length;ee++)if(ee>=O.length){O.push(gt),Ut=ee;break}else if(O[ee]===null){O[ee]=gt,Ut=ee;break}if(Ut===-1)break}const Gt=w[Ut];Gt&&Gt.connect(gt)}}const W=new K,G=new K;function yt(nt,ht,gt){W.setFromMatrixPosition(ht.matrixWorld),G.setFromMatrixPosition(gt.matrixWorld);const Ut=W.distanceTo(G),Gt=ht.projectionMatrix.elements,ee=gt.projectionMatrix.elements,De=Gt[14]/(Gt[10]-1),Et=Gt[14]/(Gt[10]+1),B=(Gt[9]+1)/Gt[5],ae=(Gt[9]-1)/Gt[5],kt=(Gt[8]-1)/Gt[0],Qt=(ee[8]+1)/ee[0],Lt=De*kt,Me=De*Qt,It=Ut/(-kt+Qt),ne=It*-kt;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ne),nt.translateZ(It),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Gt[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Pe=De+It,we=Et+It,z=Lt-ne,b=Me+(Ut-ne),Q=B*Et/we*Pe,dt=ae*Et/we*Pe;nt.projectionMatrix.makePerspective(z,b,Q,dt,Pe,we),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function N(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ht=nt.near,gt=nt.far;A.texture!==null&&(A.depthNear>0&&(ht=A.depthNear),A.depthFar>0&&(gt=A.depthFar)),H.near=C.near=I.near=ht,H.far=C.far=I.far=gt,(at!==H.near||et!==H.far)&&(l.updateRenderState({depthNear:H.near,depthFar:H.far}),at=H.near,et=H.far),H.layers.mask=nt.layers.mask|6,I.layers.mask=H.layers.mask&3,C.layers.mask=H.layers.mask&5;const Ut=nt.parent,Gt=H.cameras;N(H,Ut);for(let ee=0;ee<Gt.length;ee++)N(Gt[ee],Ut);Gt.length===2?yt(H,I,C):H.projectionMatrix.copy(I.projectionMatrix),J(nt,H,Ut)};function J(nt,ht,gt){gt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(gt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=qh*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(H)},this.getCameraTexture=function(nt){return y[nt]};let vt=null;function mt(nt,ht){if(_=ht.getViewerPose(p||f),E=ht,_!==null){const gt=_.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Ut=!1;gt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let Et=0;Et<gt.length;Et++){const B=gt[Et];let ae=null;if(S!==null)ae=S.getViewport(B);else{const Qt=v.getViewSubImage(x,B);ae=Qt.viewport,Et===0&&(t.setRenderTargetTextures(U,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(U))}let kt=L[Et];kt===void 0&&(kt=new kn,kt.layers.enable(Et),kt.viewport=new qe,L[Et]=kt),kt.matrix.fromArray(B.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(B.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ae.x,ae.y,ae.width,ae.height),Et===0&&(H.matrix.copy(kt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(kt)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Et=v.getDepthInformation(gt[0]);Et&&Et.isValid&&Et.texture&&A.init(Et,l.renderState)}if(Gt&&Gt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let Et=0;Et<gt.length;Et++){const B=gt[Et].camera;if(B){let ae=y[B];ae||(ae=new Yv,y[B]=ae);const kt=v.getCameraImage(B);ae.sourceTexture=kt}}}for(let gt=0;gt<w.length;gt++){const Ut=O[gt],Gt=w[gt];Ut!==null&&Gt!==void 0&&Gt.update(Ut,ht,p||f)}vt&&vt(nt,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),E=null}const bt=new Vv;bt.setAnimationLoop(mt),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const Sr=new Ci,CA=new Je;function DA(s,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Nv(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,D,U,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,w)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),A(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&h(y,g)):g.isPointsMaterial?m(y,g,D,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Xn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Xn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=t.get(g),U=D.envMap,w=D.envMapRotation;U&&(y.envMap.value=U,Sr.copy(w),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),y.envMapRotation.value.setFromMatrix4(CA.makeRotationFromEuler(Sr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function h(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,D,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const D=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function UA(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const w=U.program;r.uniformBlockBinding(D,w)}function p(D,U){let w=l[D.id];w===void 0&&(E(D),w=_(D),l[D.id]=w,D.addEventListener("dispose",y));const O=U.program;r.updateUBOMapping(D,O);const F=t.render.frame;c[D.id]!==F&&(x(D),c[D.id]=F)}function _(D){const U=v();D.__bindingPointIndex=U;const w=s.createBuffer(),O=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,O,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function v(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const U=l[D.id],w=D.uniforms,O=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let F=0,k=w.length;F<k;F++){const I=Array.isArray(w[F])?w[F]:[w[F]];for(let C=0,L=I.length;C<L;C++){const H=I[C];if(S(H,F,C,O)===!0){const at=H.__offset,et=Array.isArray(H.value)?H.value:[H.value];let ft=0;for(let ut=0;ut<et.length;ut++){const P=et[ut],W=A(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,at+ft,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,ft),ft+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,at,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,U,w,O){const F=D.value,k=U+"_"+w;if(O[k]===void 0)return typeof F=="number"||typeof F=="boolean"?O[k]=F:O[k]=F.clone(),!0;{const I=O[k];if(typeof F=="number"||typeof F=="boolean"){if(I!==F)return O[k]=F,!0}else if(I.equals(F)===!1)return I.copy(F),!0}return!1}function E(D){const U=D.uniforms;let w=0;const O=16;for(let k=0,I=U.length;k<I;k++){const C=Array.isArray(U[k])?U[k]:[U[k]];for(let L=0,H=C.length;L<H;L++){const at=C[L],et=Array.isArray(at.value)?at.value:[at.value];for(let ft=0,ut=et.length;ft<ut;ft++){const P=et[ft],W=A(P),G=w%O,yt=G%W.boundary,N=G+yt;w+=yt,N!==0&&O-N<W.storage&&(w+=O-N),at.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=w,w+=W.storage}}}const F=w%O;return F>0&&(w+=O-F),D.__size=w,D.__cache={},this}function A(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),U}function y(D){const U=D.target;U.removeEventListener("dispose",y);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const D in l)s.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:g}}class vp{constructor(t={}){const{canvas:i=cM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const D=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=gi;let F=0,k=0,I=null,C=-1,L=null;const H=new qe,at=new qe;let et=null;const ft=new xe(0);let ut=0,P=i.width,W=i.height,G=1,yt=null,N=null;const J=new qe(0,0,P,W),vt=new qe(0,0,P,W);let mt=!1;const bt=new pp;let nt=!1,ht=!1;const gt=new Je,Ut=new K,Gt=new qe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Et(){return I===null?G:1}let B=r;function ae(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",At,!1),B===null){const Y="webgl2";if(B=ae(Y,R),B===null)throw ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let kt,Qt,Lt,Me,It,ne,Pe,we,z,b,Q,dt,xt,ct,Ft,Ct,Zt,Jt,Tt,Pt,te,jt,Nt,de;function q(){kt=new VT(B),kt.init(),jt=new bA(B,kt),Qt=new PT(B,kt,t,jt),Lt=new MA(B,kt),Qt.reversedDepthBuffer&&x&&Lt.buffers.depth.setReversed(!0),Me=new WT(B),It=new cA,ne=new EA(B,kt,Lt,It,Qt,jt,Me),Pe=new BT(w),we=new GT(w),z=new QM(B),Nt=new NT(B,z),b=new kT(B,z,Me,Nt),Q=new YT(B,b,z,Me),Tt=new qT(B,Qt,ne),Ct=new zT(It),dt=new lA(w,Pe,we,kt,Qt,Nt,Ct),xt=new DA(w,It),ct=new fA,Ft=new _A(kt),Jt=new LT(w,Pe,we,Lt,Q,S,m),Zt=new yA(w,Q,Qt),de=new UA(B,Me,Qt,Lt),Pt=new OT(B,kt,Me),te=new XT(B,kt,Me),Me.programs=dt.programs,w.capabilities=Qt,w.extensions=kt,w.properties=It,w.renderLists=ct,w.shadowMap=Zt,w.state=Lt,w.info=Me}q();const Rt=new RA(w,B);this.xr=Rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(P,W,!1))},this.getSize=function(R){return R.set(P,W)},this.setSize=function(R,Y,ot=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,W=Y,i.width=Math.floor(R*G),i.height=Math.floor(Y*G),ot===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*G,W*G).floor()},this.setDrawingBufferSize=function(R,Y,ot){P=R,W=Y,G=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Y*ot),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,Y,ot,lt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,ot,lt),Lt.viewport(H.copy(J).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,Y,ot,lt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,Y,ot,lt),Lt.scissor(at.copy(vt).multiplyScalar(G).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(R){Lt.setScissorTest(mt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ot=!0){let lt=0;if(R){let Z=!1;if(I!==null){const wt=I.texture.format;Z=wt===op||wt===sp||wt===rp}if(Z){const wt=I.texture.type,Ot=wt===Gi||wt===Ur||wt===il||wt===al||wt===ip||wt===ap,Vt=Jt.getClearColor(),zt=Jt.getClearAlpha(),re=Vt.r,le=Vt.g,Kt=Vt.b;Ot?(E[0]=re,E[1]=le,E[2]=Kt,E[3]=zt,B.clearBufferuiv(B.COLOR,0,E)):(A[0]=re,A[1]=le,A[2]=Kt,A[3]=zt,B.clearBufferiv(B.COLOR,0,A))}else lt|=B.COLOR_BUFFER_BIT}Y&&(lt|=B.DEPTH_BUFFER_BIT),ot&&(lt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Jt.dispose(),ct.dispose(),Ft.dispose(),It.dispose(),Pe.dispose(),we.dispose(),Q.dispose(),Nt.dispose(),de.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",hn),Rt.removeEventListener("sessionend",pn),nn.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=Me.autoReset,Y=Zt.enabled,ot=Zt.autoUpdate,lt=Zt.needsUpdate,Z=Zt.type;q(),Me.autoReset=R,Zt.enabled=Y,Zt.autoUpdate=ot,Zt.needsUpdate=lt,Zt.type=Z}function At(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const Y=R.target;Y.removeEventListener("dispose",Mt),Yt(Y)}function Yt(R){fe(R),It.remove(R)}function fe(R){const Y=It.get(R).programs;Y!==void 0&&(Y.forEach(function(ot){dt.releaseProgram(ot)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ot,lt,Z,wt){Y===null&&(Y=ee);const Ot=Z.isMesh&&Z.matrixWorld.determinant()<0,Vt=ma(R,Y,ot,lt,Z);Lt.setMaterial(lt,Ot);let zt=ot.index,re=1;if(lt.wireframe===!0){if(zt=b.getWireframeAttribute(ot),zt===void 0)return;re=2}const le=ot.drawRange,Kt=ot.attributes.position;let ge=le.start*re,Le=(le.start+le.count)*re;wt!==null&&(ge=Math.max(ge,wt.start*re),Le=Math.min(Le,(wt.start+wt.count)*re)),zt!==null?(ge=Math.max(ge,0),Le=Math.min(Le,zt.count)):Kt!=null&&(ge=Math.max(ge,0),Le=Math.min(Le,Kt.count));const $e=Le-ge;if($e<0||$e===1/0)return;Nt.setup(Z,lt,Vt,ot,zt);let He,_e=Pt;if(zt!==null&&(He=z.get(zt),_e=te,_e.setIndex(He)),Z.isMesh)lt.wireframe===!0?(Lt.setLineWidth(lt.wireframeLinewidth*Et()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(Z.isLine){let ie=lt.linewidth;ie===void 0&&(ie=1),Lt.setLineWidth(ie*Et()),Z.isLineSegments?_e.setMode(B.LINES):Z.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else Z.isPoints?_e.setMode(B.POINTS):Z.isSprite&&_e.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ie=Z._multiDrawStarts,Ke=Z._multiDrawCounts,be=Z._multiDrawCount,Dn=zt?z.get(zt).bytesPerElement:1,xi=It.get(lt).currentProgram.getUniforms();for(let In=0;In<be;In++)xi.setValue(B,"_gl_DrawID",In),_e.render(ie[In]/Dn,Ke[In])}else if(Z.isInstancedMesh)_e.renderInstances(ge,$e,Z.count);else if(ot.isInstancedBufferGeometry){const ie=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ke=Math.min(ot.instanceCount,ie);_e.renderInstances(ge,$e,Ke)}else _e.render(ge,$e)};function Be(R,Y,ot){R.transparent===!0&&R.side===Ai&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ui(R,Y,ot),R.side=pa,R.needsUpdate=!0,Ui(R,Y,ot),R.side=Ai):Ui(R,Y,ot)}this.compile=function(R,Y,ot=null){ot===null&&(ot=R),g=Ft.get(ot),g.init(Y),U.push(g),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),R!==ot&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const lt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Ot=0;Ot<wt.length;Ot++){const Vt=wt[Ot];Be(Vt,ot,Z),lt.add(Vt)}else Be(wt,ot,Z),lt.add(wt)}),g=U.pop(),lt},this.compileAsync=function(R,Y,ot=null){const lt=this.compile(R,Y,ot);return new Promise(Z=>{function wt(){if(lt.forEach(function(Ot){It.get(Ot).currentProgram.isReady()&&lt.delete(Ot)}),lt.size===0){Z(R);return}setTimeout(wt,10)}kt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ue=null;function vi(R){Ue&&Ue(R)}function hn(){nn.stop()}function pn(){nn.start()}const nn=new Vv;nn.setAnimationLoop(vi),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(R){Ue=R,Rt.setAnimationLoop(R),R===null?nn.stop():nn.start()},Rt.addEventListener("sessionstart",hn),Rt.addEventListener("sessionend",pn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,I),g=Ft.get(R,U.length),g.init(Y),U.push(g),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),bt.setFromProjectionMatrix(gt,Hi,Y.reversedDepth),ht=this.localClippingEnabled,nt=Ct.init(this.clippingPlanes,ht),y=ct.get(R,D.length),y.init(),D.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const wt=w.xr.getDepthSensingMesh();wt!==null&&Di(wt,Y,-1/0,w.sortObjects)}Di(R,Y,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(yt,N),De=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,De&&Jt.addToRenderList(y,R),this.info.render.frame++,nt===!0&&Ct.beginShadows();const ot=g.state.shadowsArray;Zt.render(ot,R,Y),nt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Z=y.transmissive;if(g.setupLights(),Y.isArrayCamera){const wt=Y.cameras;if(Z.length>0)for(let Ot=0,Vt=wt.length;Ot<Vt;Ot++){const zt=wt[Ot];gl(lt,Z,R,zt)}De&&Jt.render(R);for(let Ot=0,Vt=wt.length;Ot<Vt;Ot++){const zt=wt[Ot];Pr(y,R,zt,zt.viewport)}}else Z.length>0&&gl(lt,Z,R,Y),De&&Jt.render(R),Pr(y,R,Y);I!==null&&k===0&&(ne.updateMultisampleRenderTarget(I),ne.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(w,R,Y),Nt.resetDefaultState(),C=-1,L=null,U.pop(),U.length>0?(g=U[U.length-1],nt===!0&&Ct.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Di(R,Y,ot,lt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||bt.intersectsSprite(R)){lt&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(gt);const Ot=Q.update(R),Vt=R.material;Vt.visible&&y.push(R,Ot,Vt,ot,Gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||bt.intersectsObject(R))){const Ot=Q.update(R),Vt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Gt.copy(Ot.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(gt)),Array.isArray(Vt)){const zt=Ot.groups;for(let re=0,le=zt.length;re<le;re++){const Kt=zt[re],ge=Vt[Kt.materialIndex];ge&&ge.visible&&y.push(R,Ot,ge,ot,Gt.z,Kt)}}else Vt.visible&&y.push(R,Ot,Vt,ot,Gt.z,null)}}const wt=R.children;for(let Ot=0,Vt=wt.length;Ot<Vt;Ot++)Di(wt[Ot],Y,ot,lt)}function Pr(R,Y,ot,lt){const Z=R.opaque,wt=R.transmissive,Ot=R.transparent;g.setupLightsView(ot),nt===!0&&Ct.setGlobalState(w.clippingPlanes,ot),lt&&Lt.viewport(H.copy(lt)),Z.length>0&&zr(Z,Y,ot),wt.length>0&&zr(wt,Y,ot),Ot.length>0&&zr(Ot,Y,ot),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function gl(R,Y,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[lt.id]===void 0&&(g.state.transmissionRenderTarget[lt.id]=new Lr(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?fl:Gi,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const wt=g.state.transmissionRenderTarget[lt.id],Ot=lt.viewport||H;wt.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);const Vt=w.getRenderTarget(),zt=w.getActiveCubeFace(),re=w.getActiveMipmapLevel();w.setRenderTarget(wt),w.getClearColor(ft),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),De&&Jt.render(ot);const le=w.toneMapping;w.toneMapping=Za;const Kt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),g.setupLightsView(lt),nt===!0&&Ct.setGlobalState(w.clippingPlanes,lt),zr(R,ot,lt),ne.updateMultisampleRenderTarget(wt),ne.updateRenderTargetMipmap(wt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Le=0,$e=Y.length;Le<$e;Le++){const He=Y[Le],_e=He.object,ie=He.geometry,Ke=He.material,be=He.group;if(Ke.side===Ai&&_e.layers.test(lt.layers)){const Dn=Ke.side;Ke.side=Xn,Ke.needsUpdate=!0,Ks(_e,ot,lt,ie,Ke,be),Ke.side=Dn,Ke.needsUpdate=!0,ge=!0}}ge===!0&&(ne.updateMultisampleRenderTarget(wt),ne.updateRenderTargetMipmap(wt))}w.setRenderTarget(Vt,zt,re),w.setClearColor(ft,ut),Kt!==void 0&&(lt.viewport=Kt),w.toneMapping=le}function zr(R,Y,ot){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,wt=R.length;Z<wt;Z++){const Ot=R[Z],Vt=Ot.object,zt=Ot.geometry,re=Ot.group;let le=Ot.material;le.allowOverride===!0&&lt!==null&&(le=lt),Vt.layers.test(ot.layers)&&Ks(Vt,Y,ot,zt,le,re)}}function Ks(R,Y,ot,lt,Z,wt){R.onBeforeRender(w,Y,ot,lt,Z,wt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,Y,ot,lt,R,wt),Z.transparent===!0&&Z.side===Ai&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,w.renderBufferDirect(ot,Y,lt,Z,R,wt),Z.side=pa,Z.needsUpdate=!0,w.renderBufferDirect(ot,Y,lt,Z,R,wt),Z.side=Ai):w.renderBufferDirect(ot,Y,lt,Z,R,wt),R.onAfterRender(w,Y,ot,lt,Z,wt)}function Ui(R,Y,ot){Y.isScene!==!0&&(Y=ee);const lt=It.get(R),Z=g.state.lights,wt=g.state.shadowsArray,Ot=Z.state.version,Vt=dt.getParameters(R,Z.state,wt,Y,ot),zt=dt.getProgramCacheKey(Vt);let re=lt.programs;lt.environment=R.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(R.isMeshStandardMaterial?we:Pe).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",Mt),re=new Map,lt.programs=re);let le=re.get(zt);if(le!==void 0){if(lt.currentProgram===le&&lt.lightsStateVersion===Ot)return ki(R,Vt),le}else Vt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Vt,w),le=dt.acquireProgram(Vt,zt),re.set(zt,le),lt.uniforms=Vt.uniforms;const Kt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=Ct.uniform),ki(R,Vt),lt.needsLights=ga(R),lt.lightsStateVersion=Ot,lt.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.directionalShadowMap.value=Z.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotShadowMap.value=Z.state.spotShadowMap,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMap.value=Z.state.pointShadowMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),lt.currentProgram=le,lt.uniformsList=null,le}function Br(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ru.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ki(R,Y){const ot=It.get(R);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function ma(R,Y,ot,lt,Z){Y.isScene!==!0&&(Y=ee),ne.resetTextureUnits();const wt=Y.fog,Ot=lt.isMeshStandardMaterial?Y.environment:null,Vt=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ks,zt=(lt.isMeshStandardMaterial?we:Pe).get(lt.envMap||Ot),re=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,le=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Kt=!!ot.morphAttributes.position,ge=!!ot.morphAttributes.normal,Le=!!ot.morphAttributes.color;let $e=Za;lt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&($e=w.toneMapping);const He=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,_e=He!==void 0?He.length:0,ie=It.get(lt),Ke=g.state.lights;if(nt===!0&&(ht===!0||R!==L)){const an=R===L&&lt.id===C;Ct.setState(lt,R,an)}let be=!1;lt.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Ke.state.version||ie.outputColorSpace!==Vt||Z.isBatchedMesh&&ie.batching===!1||!Z.isBatchedMesh&&ie.batching===!0||Z.isBatchedMesh&&ie.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ie.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ie.instancing===!1||!Z.isInstancedMesh&&ie.instancing===!0||Z.isSkinnedMesh&&ie.skinning===!1||!Z.isSkinnedMesh&&ie.skinning===!0||Z.isInstancedMesh&&ie.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ie.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ie.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ie.instancingMorph===!1&&Z.morphTexture!==null||ie.envMap!==zt||lt.fog===!0&&ie.fog!==wt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Ct.numPlanes||ie.numIntersection!==Ct.numIntersection)||ie.vertexAlphas!==re||ie.vertexTangents!==le||ie.morphTargets!==Kt||ie.morphNormals!==ge||ie.morphColors!==Le||ie.toneMapping!==$e||ie.morphTargetsCount!==_e)&&(be=!0):(be=!0,ie.__version=lt.version);let Dn=ie.currentProgram;be===!0&&(Dn=Ui(lt,Y,Z));let xi=!1,In=!1,yn=!1;const Ye=Dn.getUniforms(),Fn=ie.uniforms;if(Lt.useProgram(Dn.program)&&(xi=!0,In=!0,yn=!0),lt.id!==C&&(C=lt.id,In=!0),xi||L!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ye.setValue(B,"projectionMatrix",R.projectionMatrix),Ye.setValue(B,"viewMatrix",R.matrixWorldInverse);const An=Ye.map.cameraPosition;An!==void 0&&An.setValue(B,Ut.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&Ye.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ye.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,In=!0,yn=!0)}if(Z.isSkinnedMesh){Ye.setOptional(B,Z,"bindMatrix"),Ye.setOptional(B,Z,"bindMatrixInverse");const an=Z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ye.setValue(B,"boneTexture",an.boneTexture,ne))}Z.isBatchedMesh&&(Ye.setOptional(B,Z,"batchingTexture"),Ye.setValue(B,"batchingTexture",Z._matricesTexture,ne),Ye.setOptional(B,Z,"batchingIdTexture"),Ye.setValue(B,"batchingIdTexture",Z._indirectTexture,ne),Ye.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ye.setValue(B,"batchingColorTexture",Z._colorsTexture,ne));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Tt.update(Z,ot,Dn),(In||ie.receiveShadow!==Z.receiveShadow)&&(ie.receiveShadow=Z.receiveShadow,Ye.setValue(B,"receiveShadow",Z.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Fn.envMap.value=zt,Fn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(Fn.envMapIntensity.value=Y.environmentIntensity),In&&(Ye.setValue(B,"toneMappingExposure",w.toneMappingExposure),ie.needsLights&&$a(Fn,yn),wt&&lt.fog===!0&&xt.refreshFogUniforms(Fn,wt),xt.refreshMaterialUniforms(Fn,lt,G,W,g.state.transmissionRenderTarget[R.id]),ru.upload(B,Br(ie),Fn,ne)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ru.upload(B,Br(ie),Fn,ne),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ye.setValue(B,"center",Z.center),Ye.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Ye.setValue(B,"normalMatrix",Z.normalMatrix),Ye.setValue(B,"modelMatrix",Z.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const an=lt.uniformsGroups;for(let An=0,Ir=an.length;An<Ir;An++){const Yn=an[An];de.update(Yn,Dn),de.bind(Yn,Dn)}}return Dn}function $a(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ga(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,Y,ot){const lt=It.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),It.get(R.texture).__webglTexture=Y,It.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ot=It.get(R);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const cn=B.createFramebuffer();this.setRenderTarget=function(R,Y=0,ot=0){I=R,F=Y,k=ot;let lt=!0,Z=null,wt=!1,Ot=!1;if(R){const zt=It.get(R);if(zt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(B.FRAMEBUFFER,null),lt=!1;else if(zt.__webglFramebuffer===void 0)ne.setupRenderTarget(R);else if(zt.__hasExternalTextures)ne.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Kt=R.depthTexture;if(zt.__boundDepthTexture!==Kt){if(Kt!==null&&It.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(R)}}const re=R.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ot=!0);const le=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[Y])?Z=le[Y][ot]:Z=le[Y],wt=!0):R.samples>0&&ne.useMultisampledRTT(R)===!1?Z=It.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?Z=le[ot]:Z=le,H.copy(R.viewport),at.copy(R.scissor),et=R.scissorTest}else H.copy(J).multiplyScalar(G).floor(),at.copy(vt).multiplyScalar(G).floor(),et=mt;if(ot!==0&&(Z=cn),Lt.bindFramebuffer(B.FRAMEBUFFER,Z)&&lt&&Lt.drawBuffers(R,Z),Lt.viewport(H),Lt.scissor(at),Lt.setScissorTest(et),wt){const zt=It.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,ot)}else if(Ot){const zt=Y;for(let re=0;re<R.textures.length;re++){const le=It.get(R.textures[re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+re,le.__webglTexture,ot,zt)}}else if(R!==null&&ot!==0){const zt=It.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zt.__webglTexture,ot)}C=-1},this.readRenderTargetPixels=function(R,Y,ot,lt,Z,wt,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Lt.bindFramebuffer(B.FRAMEBUFFER,zt);try{const re=R.textures[Vt],le=re.format,Kt=re.type;if(!Qt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-lt&&ot>=0&&ot<=R.height-Z&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Vt),B.readPixels(Y,ot,lt,Z,jt.convert(le),jt.convert(Kt),wt))}finally{const re=I!==null?It.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(B.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ot,lt,Z,wt,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(Y>=0&&Y<=R.width-lt&&ot>=0&&ot<=R.height-Z){Lt.bindFramebuffer(B.FRAMEBUFFER,zt);const re=R.textures[Vt],le=re.format,Kt=re.type;if(!Qt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.bufferData(B.PIXEL_PACK_BUFFER,wt.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Vt),B.readPixels(Y,ot,lt,Z,jt.convert(le),jt.convert(Kt),0);const Le=I!==null?It.get(I).__webglFramebuffer:null;Lt.bindFramebuffer(B.FRAMEBUFFER,Le);const $e=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await uM(B,$e,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,wt),B.deleteBuffer(ge),B.deleteSync($e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ot=0){const lt=Math.pow(2,-ot),Z=Math.floor(R.image.width*lt),wt=Math.floor(R.image.height*lt),Ot=Y!==null?Y.x:0,Vt=Y!==null?Y.y:0;ne.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,Ot,Vt,Z,wt),Lt.unbindTexture()};const _l=B.createFramebuffer(),vl=B.createFramebuffer();this.copyTextureToTexture=function(R,Y,ot=null,lt=null,Z=0,wt=null){wt===null&&(Z!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=Z,Z=0):wt=0);let Ot,Vt,zt,re,le,Kt,ge,Le,$e;const He=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(ot!==null)Ot=ot.max.x-ot.min.x,Vt=ot.max.y-ot.min.y,zt=ot.isBox3?ot.max.z-ot.min.z:1,re=ot.min.x,le=ot.min.y,Kt=ot.isBox3?ot.min.z:0;else{const Un=Math.pow(2,-Z);Ot=Math.floor(He.width*Un),Vt=Math.floor(He.height*Un),R.isDataArrayTexture?zt=He.depth:R.isData3DTexture?zt=Math.floor(He.depth*Un):zt=1,re=0,le=0,Kt=0}lt!==null?(ge=lt.x,Le=lt.y,$e=lt.z):(ge=0,Le=0,$e=0);const _e=jt.convert(Y.format),ie=jt.convert(Y.type);let Ke;Y.isData3DTexture?(ne.setTexture3D(Y,0),Ke=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ne.setTexture2DArray(Y,0),Ke=B.TEXTURE_2D_ARRAY):(ne.setTexture2D(Y,0),Ke=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const be=B.getParameter(B.UNPACK_ROW_LENGTH),Dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xi=B.getParameter(B.UNPACK_SKIP_PIXELS),In=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,He.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,He.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,re),B.pixelStorei(B.UNPACK_SKIP_ROWS,le),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Kt);const Ye=R.isDataArrayTexture||R.isData3DTexture,Fn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Un=It.get(R),an=It.get(Y),An=It.get(Un.__renderTarget),Ir=It.get(an.__renderTarget);Lt.bindFramebuffer(B.READ_FRAMEBUFFER,An.__webglFramebuffer),Lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Yn=0;Yn<zt;Yn++)Ye&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(R).__webglTexture,Z,Kt+Yn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(Y).__webglTexture,wt,$e+Yn)),B.blitFramebuffer(re,le,Ot,Vt,ge,Le,Ot,Vt,B.DEPTH_BUFFER_BIT,B.NEAREST);Lt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||It.has(R)){const Un=It.get(R),an=It.get(Y);Lt.bindFramebuffer(B.READ_FRAMEBUFFER,_l),Lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,vl);for(let An=0;An<zt;An++)Ye?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Un.__webglTexture,Z,Kt+An):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Un.__webglTexture,Z),Fn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,wt,$e+An):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,wt),Z!==0?B.blitFramebuffer(re,le,Ot,Vt,ge,Le,Ot,Vt,B.COLOR_BUFFER_BIT,B.NEAREST):Fn?B.copyTexSubImage3D(Ke,wt,ge,Le,$e+An,re,le,Ot,Vt):B.copyTexSubImage2D(Ke,wt,ge,Le,re,le,Ot,Vt);Lt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ke,wt,ge,Le,$e,Ot,Vt,zt,_e,ie,He.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Ke,wt,ge,Le,$e,Ot,Vt,zt,_e,He.data):B.texSubImage3D(Ke,wt,ge,Le,$e,Ot,Vt,zt,_e,ie,He):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,wt,ge,Le,Ot,Vt,_e,ie,He.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,wt,ge,Le,He.width,He.height,_e,He.data):B.texSubImage2D(B.TEXTURE_2D,wt,ge,Le,Ot,Vt,_e,ie,He);B.pixelStorei(B.UNPACK_ROW_LENGTH,be),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xi),B.pixelStorei(B.UNPACK_SKIP_ROWS,In),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),wt===0&&Y.generateMipmaps&&B.generateMipmap(Ke),Lt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ot=null,lt=null,Z=0){return Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ot,lt,Z)},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&ne.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ne.setTextureCube(R,0):R.isData3DTexture?ne.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ne.setTexture2DArray(R,0):ne.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){F=0,k=0,I=null,Lt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const LA={radius_km:6371,distance_from_sun_au:1,orbital_period_earth_days:365,rotation_period_hours:23.93},NA={radius_km:1737.4,distance_from_earth_km:384400,orbital_period_earth_days:27.3,rotation_period_earth_days:27.3},OA={radius_km:3389.5,distance_from_sun_au:1.52,orbital_period_earth_days:687,rotation_period_hours:24.62},PA={radius_km:6051.8,distance_from_sun_au:.72,orbital_period_earth_days:225,rotation_period_earth_days:243},zA={radius_km:2439.7,distance_from_sun_au:.39,orbital_period_earth_days:88,rotation_period_earth_days:58.67},BA={radius_km:69911,distance_from_sun_au:5.2,orbital_period_earth_days:4333,rotation_period_hours:9.92},IA={radius_km:58232,distance_from_sun_au:9.5,orbital_period_earth_days:10759,rotation_period_hours:10.55},FA={radius_km:25362,distance_from_sun_au:19.8,orbital_period_earth_days:30687,rotation_period_hours:17.23},HA={radius_km:24622,distance_from_sun_au:30,orbital_period_earth_days:60190,rotation_period_hours:16.1},GA={Earth:LA,Moon:NA,Mars:OA,Venus:PA,Mercury:zA,Jupiter:BA,Saturn:IA,Uranus:FA,Neptune:HA},jv=se.forwardRef(({onLocationChange:s},t)=>{const i=se.useRef(null),r=se.useRef(null),l=se.useRef(null),c=se.useRef(null),f=se.useRef({}),h=se.useRef(null);se.useImperativeHandle(t,()=>({focusOnPlanet:p=>{typeof window<"u"&&window.focusOnPlanetRef&&window.focusOnPlanetRef(p)}}),[]),se.useEffect(()=>{if(!i.current)return;const p=new dp;p.background=new xe(8),r.current=p;const _=new qn,v=2e4,x=new Float32Array(v*3),S=new Float32Array(v*3);for(let Et=0;Et<v;Et++){x[Et*3]=(Math.random()-.5)*2500,x[Et*3+1]=(Math.random()-.5)*2500,x[Et*3+2]=(Math.random()-.5)*2500;const B=Math.random();B<.6?(S[Et*3]=1,S[Et*3+1]=1,S[Et*3+2]=1):B<.8?(S[Et*3]=.6,S[Et*3+1]=.8,S[Et*3+2]=1):B<.95?(S[Et*3]=1,S[Et*3+1]=1,S[Et*3+2]=.7):(S[Et*3]=1,S[Et*3+1]=.6,S[Et*3+2]=.4)}_.setAttribute("position",new Bn(x,3)),_.setAttribute("color",new Bn(S,3));const E=new ll({size:2,vertexColors:!0,transparent:!0,opacity:.8}),A=new cu(_,E);p.add(A);const y=A,g=new kn(75,window.innerWidth/window.innerHeight,.1,3e3);g.position.set(0,50,150),c.current=g;const D=new vp({antialias:!0});D.setSize(window.innerWidth,window.innerHeight),D.shadowMap.enabled=!0,D.shadowMap.type=ep,i.current.appendChild(D.domElement),l.current=D;const U=new Gv(4210752,1.5);p.add(U);const w=new qM(16777215,3,1e3);w.position.set(0,0,0),w.castShadow=!0,w.shadow.mapSize.width=2048,w.shadow.mapSize.height=2048,p.add(w);const O=new XM,F=new Jn(8,64,64),k=O.load("/assets/textures/sun_texture.jpg"),I=new fa({map:k,emissive:16755200,emissiveIntensity:.3}),C=new Qe(F,I);p.add(C),f.current.Sun={mesh:C,radius:8,distance:0,angle:0};const L=50,H=.5,at={Mercury:{color:13413e3,texture:"/assets/textures/mercury_texture.jpg",emissive:3351057,emissiveIntensity:.3},Venus:{color:16768375,texture:"/assets/textures/venus_texture.png",emissive:5588002,emissiveIntensity:.4},Earth:{color:2267647,texture:"/assets/textures/earth_texture.jpg",emissive:13158,emissiveIntensity:.3},Mars:{color:16742263,texture:"/assets/textures/mars_texture.jpg",emissive:4460817,emissiveIntensity:.3},Jupiter:{color:16764057,texture:"/assets/textures/jupiter_texture.jpg",emissive:4469538,emissiveIntensity:.4},Saturn:{color:16768426,texture:"/assets/textures/saturn_texture.jpg",emissive:4469538,emissiveIntensity:.4},Uranus:{color:7855615,texture:"/assets/textures/uranus_texture.png",emissive:2245717,emissiveIntensity:.3},Neptune:{color:6719743,texture:"/assets/textures/neptune_texture.jpg",emissive:1122884,emissiveIntensity:.3}};Object.entries(GA).forEach(([Et,B])=>{if(Et==="Moon")return;const ae=Math.max(B.radius_km*H*.001,.2),kt=B.distance_from_sun_au*L,Qt=at[Et],Lt=new Jn(ae,64,64);let Me;const It=O.load(Qt.texture);Me=new C_({map:It,color:Qt.color,emissive:Qt.emissive,emissiveIntensity:Qt.emissiveIntensity*1.5,shininess:60,transparent:!1,opacity:1,side:pa});const ne=new Qe(Lt,Me);if(ne.position.x=kt,ne.castShadow=!0,ne.receiveShadow=!0,p.add(ne),Et==="Saturn"){const dt=new hu(ae*1.2,ae*2.2,64),xt=new C_({color:16777215,side:Ai,transparent:!0,opacity:.9,emissive:4473924,emissiveIntensity:.2,shininess:50}),ct=new Qe(dt,xt);ct.rotation.x=Math.PI/2,ct.castShadow=!0,ct.receiveShadow=!0,ne.add(ct)}f.current[Et]={mesh:ne,data:B,distance:kt,angle:0,radius:ae,moons:[]};const Pe=document.createElement("canvas"),we=Pe.getContext("2d");Pe.width=512,Pe.height=128,we.fillStyle="rgba(255, 255, 255, 0.9)",we.font="bold 32px Arial",we.textAlign="center",we.textBaseline="middle",we.shadowColor="rgba(0, 0, 0, 0.8)",we.shadowBlur=4,we.shadowOffsetX=2,we.shadowOffsetY=2,we.fillText(Et,256,64);const z=new au(Pe),b=new hp({map:z,transparent:!0,alphaTest:.1}),Q=new Bv(b);Q.position.copy(ne.position),Q.position.y+=ae*4,Q.scale.set(ae*12,ae*3,1),p.add(Q),f.current[Et].label=Q}),m(p,f.current,O);let et=!1,ft=0,ut=0,P=0,W=0,G=150,yt=!1,N=5;const J=Et=>{Et.preventDefault(),et=!0,yt=!1,ft=Et.clientX,ut=Et.clientY},vt=Et=>{if(!et)return;Et.preventDefault();const B=Et.clientX-ft,ae=Et.clientY-ut;(Math.abs(B)>N||Math.abs(ae)>N)&&(yt=!0),yt&&(P+=B*.005,W+=ae*.005,W=Math.max(-Math.PI/2,Math.min(Math.PI/2,W)),ft=Et.clientX,ut=Et.clientY)},mt=Et=>{Et.preventDefault(),!yt&&et&&bt(Et),et=!1,yt=!1},bt=Et=>{const B=D.domElement.getBoundingClientRect(),ae=new he;ae.x=(Et.clientX-B.left)/B.width*2-1,ae.y=-((Et.clientY-B.top)/B.height)*2+1;const kt=new O_;kt.setFromCamera(ae,g);const Qt=Object.values(f.current).map(Me=>Me.mesh).filter(Boolean),Lt=kt.intersectObjects(Qt);if(Lt.length>0){const Me=Lt[0].object;for(const[It,ne]of Object.entries(f.current))if(ne.mesh===Me){ee(It),s&&s(It);break}}},nt=Et=>{if(Et.preventDefault(),G+=Et.deltaY*.1,G=Math.max(20,Math.min(800,G)),Et.deltaY<0&&G<30){const B=new O_,ae=new he(0,0);B.setFromCamera(ae,g);const kt=Object.values(f.current).map(Lt=>Lt.mesh).filter(Boolean),Qt=B.intersectObjects(kt);if(Qt.length>0){const Lt=Qt[0].object;for(const[Me,It]of Object.entries(f.current))if(It.mesh===Lt&&Me!=="Sun"){window.triggerSurfaceView&&window.triggerSurfaceView(Me);break}}}},ht=Et=>{Et.touches.length===1&&(Et.preventDefault(),et=!0,ft=Et.touches[0].clientX,ut=Et.touches[0].clientY)},gt=Et=>{if(!et||Et.touches.length!==1)return;Et.preventDefault();const B=Et.touches[0].clientX-ft,ae=Et.touches[0].clientY-ut;P+=B*.005,W+=ae*.005,W=Math.max(-Math.PI/2,Math.min(Math.PI/2,W)),ft=Et.touches[0].clientX,ut=Et.touches[0].clientY},Ut=Et=>{Et.preventDefault(),et=!1};D.domElement.addEventListener("mousedown",J),D.domElement.addEventListener("mousemove",vt),D.domElement.addEventListener("mouseup",mt),D.domElement.addEventListener("wheel",nt),D.domElement.addEventListener("touchstart",ht),D.domElement.addEventListener("touchmove",gt),D.domElement.addEventListener("touchend",Ut);const Gt=()=>{h.current=requestAnimationFrame(Gt),g.position.x=Math.cos(P)*Math.cos(W)*G,g.position.y=Math.sin(W)*G,g.position.z=Math.sin(P)*Math.cos(W)*G,g.lookAt(0,0,0),y.rotation.x+=1e-4,y.rotation.y+=2e-4,Object.entries(f.current).forEach(([Et,B])=>{if(Et==="Sun"){B.mesh.rotation.y+=.005;return}const ae=.005/Math.sqrt(B.data.distance_from_sun_au);B.angle+=ae,B.mesh.position.x=Math.cos(B.angle)*B.distance,B.mesh.position.z=Math.sin(B.angle)*B.distance,B.label&&(B.label.position.copy(B.mesh.position),B.label.position.y+=B.radius*4);const kt=Et==="Venus"?-.005:.02;B.mesh.rotation.y+=kt,B.moons&&B.moons.forEach(Qt=>{Qt.angle+=Qt.speed;const Lt=B.mesh.position;Qt.mesh.position.x=Lt.x+Math.cos(Qt.angle)*Qt.distance,Qt.mesh.position.z=Lt.z+Math.sin(Qt.angle)*Qt.distance,Qt.mesh.position.y=Lt.y+Math.sin(Qt.angle*.3)*Qt.distance*.05,Qt.mesh.rotation.y+=.01})}),D.render(p,g)};Gt();const ee=Et=>{const B=f.current[Et];if(B&&B.mesh){const ae=B.mesh,kt=Et==="Sun"?50:20,Qt=ae.position.clone(),Lt=kt,Me=Math.atan2(Qt.z,Qt.x),It=0,ne=P,Pe=W,we=G,z=Date.now(),b=2e3,Q=()=>{const dt=Date.now()-z,xt=Math.min(dt/b,1),ct=1-Math.pow(1-xt,3);P=ne+(Me-ne)*ct,W=Pe+(It-Pe)*ct,G=we+(Lt-we)*ct,xt<1&&requestAnimationFrame(Q)};Q()}};window.focusOnPlanetRef=ee;const De=()=>{g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",De),()=>{window.removeEventListener("resize",De),D.domElement.removeEventListener("mousedown",J),D.domElement.removeEventListener("mousemove",vt),D.domElement.removeEventListener("mouseup",mt),D.domElement.removeEventListener("wheel",nt),D.domElement.removeEventListener("touchstart",ht),D.domElement.removeEventListener("touchmove",gt),D.domElement.removeEventListener("touchend",Ut),typeof window<"u"&&delete window.focusOnPlanetRef,h.current&&cancelAnimationFrame(h.current),i.current&&D.domElement&&i.current.removeChild(D.domElement),D.dispose()}},[]);function m(p,_,v){if(_.Earth){const E=new Jn(.15,32,32),A=v.load("/assets/textures/moon_texture.jpg"),y=new fa({map:A,emissive:1118481,emissiveIntensity:.05}),g=new Qe(E,y);g.castShadow=!0,g.receiveShadow=!0,p.add(g),_.Earth.moons.push({mesh:g,distance:3,angle:0,speed:.02,name:"Moon"})}if(_.Mars){const E=new Jn(.05,16,16),A=new fa({color:6908265}),y=new Qe(E,A);y.castShadow=!0,p.add(y),_.Mars.moons.push({mesh:y,distance:1.5,angle:0,speed:.05,name:"Phobos"});const g=.03,D=2.2,U=new Jn(g,16,16),w=new fa({color:5592405}),O=new Qe(U,w);O.castShadow=!0,p.add(O),_.Mars.moons.push({mesh:O,distance:D,angle:Math.PI,speed:.03,name:"Deimos"})}_.Jupiter&&[{name:"Io",radius:.08,distance:4,speed:.04,color:16777113},{name:"Europa",radius:.07,distance:5,speed:.03,color:11184895},{name:"Ganymede",radius:.09,distance:6.5,speed:.025,color:8947848},{name:"Callisto",radius:.08,distance:8,speed:.02,color:4473924}].forEach((S,E)=>{const A=new Jn(S.radius,16,16),y=new fa({color:S.color}),g=new Qe(A,y);g.castShadow=!0,p.add(g),_.Jupiter.moons.push({mesh:g,distance:S.distance,angle:E*Math.PI/2,speed:S.speed,name:S.name})}),_.Saturn&&[{name:"Titan",radius:.12,distance:8,speed:.015,color:13408614},{name:"Enceladus",radius:.04,distance:5,speed:.03,color:16777215}].forEach((S,E)=>{const A=new Jn(S.radius,16,16),y=new fa({color:S.color}),g=new Qe(A,y);g.castShadow=!0,p.add(g),_.Saturn.moons.push({mesh:g,distance:S.distance,angle:E*Math.PI,speed:S.speed,name:S.name})})}return it.jsx("div",{ref:i,className:"w-full h-full"})});jv.displayName="EnhancedRealisticUniverseScene";function ov(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}function VA(...s){return t=>{let i=!1;const r=s.map(l=>{const c=ov(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():ov(s[l],null)}}}}function kA(...s){return se.useCallback(VA(...s),s)}function XA(s){const t=qA(s),i=se.forwardRef((r,l)=>{const{children:c,...f}=r,h=se.Children.toArray(c),m=h.find(jA);if(m){const p=m.props.children,_=h.map(v=>v===m?se.Children.count(p)>1?se.Children.only(null):se.isValidElement(p)?p.props.children:null:v);return it.jsx(t,{...f,ref:l,children:se.isValidElement(p)?se.cloneElement(p,void 0,_):null})}return it.jsx(t,{...f,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var WA=XA("Slot");function qA(s){const t=se.forwardRef((i,r)=>{const{children:l,...c}=i,f=se.isValidElement(l)?KA(l):void 0,h=kA(f,r);if(se.isValidElement(l)){const m=ZA(c,l.props);return l.type!==se.Fragment&&(m.ref=h),se.cloneElement(l,m)}return se.Children.count(l)>1?se.Children.only(null):null});return t.displayName=`${s}.SlotClone`,t}var YA=Symbol("radix.slottable");function jA(s){return se.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===YA}function ZA(s,t){const i={...t};for(const r in t){const l=s[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...h)=>{const m=c(...h);return l(...h),m}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function KA(s){var r,l;let t=(r=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?s.ref:(t=(l=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function Zv(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=Zv(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function Kv(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=Zv(s))&&(r&&(r+=" "),r+=t);return r}const lv=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,cv=Kv,QA=(s,t)=>i=>{var r;if((t==null?void 0:t.variants)==null)return cv(s,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,f=Object.keys(l).map(p=>{const _=i==null?void 0:i[p],v=c==null?void 0:c[p];if(_===null)return null;const x=lv(_)||lv(v);return l[p][x]}),h=i&&Object.entries(i).reduce((p,_)=>{let[v,x]=_;return x===void 0||(p[v]=x),p},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,_)=>{let{class:v,className:x,...S}=_;return Object.entries(S).every(E=>{let[A,y]=E;return Array.isArray(y)?y.includes({...c,...h}[A]):{...c,...h}[A]===y})?[...p,v,x]:p},[]);return cv(s,f,m,i==null?void 0:i.class,i==null?void 0:i.className)},xp="-",JA=s=>{const t=tw(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:f=>{const h=f.split(xp);return h[0]===""&&h.length!==1&&h.shift(),Qv(h,t)||$A(f)},getConflictingClassGroupIds:(f,h)=>{const m=i[f]||[];return h&&r[f]?[...m,...r[f]]:m}}},Qv=(s,t)=>{var f;if(s.length===0)return t.classGroupId;const i=s[0],r=t.nextPart.get(i),l=r?Qv(s.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const c=s.join(xp);return(f=t.validators.find(({validator:h})=>h(c)))==null?void 0:f.classGroupId},uv=/^\[(.+)\]$/,$A=s=>{if(uv.test(s)){const t=uv.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},tw=s=>{const{theme:t,classGroups:i}=s,r={nextPart:new Map,validators:[]};for(const l in i)Kh(i[l],r,l,t);return r},Kh=(s,t,i,r)=>{s.forEach(l=>{if(typeof l=="string"){const c=l===""?t:fv(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(ew(l)){Kh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,f])=>{Kh(f,fv(t,c),i,r)})})},fv=(s,t)=>{let i=s;return t.split(xp).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},ew=s=>s.isThemeGetter,nw=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(c,f)=>{i.set(c,f),t++,t>s&&(t=0,r=i,i=new Map)};return{get(c){let f=i.get(c);if(f!==void 0)return f;if((f=r.get(c))!==void 0)return l(c,f),f},set(c,f){i.has(c)?i.set(c,f):l(c,f)}}},Qh="!",Jh=":",iw=Jh.length,aw=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const c=[];let f=0,h=0,m=0,p;for(let E=0;E<l.length;E++){let A=l[E];if(f===0&&h===0){if(A===Jh){c.push(l.slice(m,E)),m=E+iw;continue}if(A==="/"){p=E;continue}}A==="["?f++:A==="]"?f--:A==="("?h++:A===")"&&h--}const _=c.length===0?l:l.substring(m),v=rw(_),x=v!==_,S=p&&p>m?p-m:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:S}};if(t){const l=t+Jh,c=r;r=f=>f.startsWith(l)?c(f.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},rw=s=>s.endsWith(Qh)?s.substring(0,s.length-1):s.startsWith(Qh)?s.substring(1):s,sw=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let c=[];return r.forEach(f=>{f[0]==="["||t[f]?(l.push(...c.sort(),f),c=[]):c.push(f)}),l.push(...c.sort()),l}},ow=s=>({cache:nw(s.cacheSize),parseClassName:aw(s),sortModifiers:sw(s),...JA(s)}),lw=/\s+/,cw=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,f=[],h=s.trim().split(lw);let m="";for(let p=h.length-1;p>=0;p-=1){const _=h[p],{isExternal:v,modifiers:x,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:A}=i(_);if(v){m=_+(m.length>0?" "+m:m);continue}let y=!!A,g=r(y?E.substring(0,A):E);if(!g){if(!y){m=_+(m.length>0?" "+m:m);continue}if(g=r(E),!g){m=_+(m.length>0?" "+m:m);continue}y=!1}const D=c(x).join(":"),U=S?D+Qh:D,w=U+g;if(f.includes(w))continue;f.push(w);const O=l(g,y);for(let F=0;F<O.length;++F){const k=O[F];f.push(U+k)}m=_+(m.length>0?" "+m:m)}return m};function uw(){let s=0,t,i,r="";for(;s<arguments.length;)(t=arguments[s++])&&(i=Jv(t))&&(r&&(r+=" "),r+=i);return r}const Jv=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=Jv(s[r]))&&(i&&(i+=" "),i+=t);return i};function fw(s,...t){let i,r,l,c=f;function f(m){const p=t.reduce((_,v)=>v(_),s());return i=ow(p),r=i.cache.get,l=i.cache.set,c=h,h(m)}function h(m){const p=r(m);if(p)return p;const _=cw(m,i);return l(m,_),_}return function(){return c(uw.apply(null,arguments))}}const _n=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},$v=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,tx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,dw=/^\d+\/\d+$/,hw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,mw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,gw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_w=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ps=s=>dw.test(s),Se=s=>!!s&&!Number.isNaN(Number(s)),Wa=s=>!!s&&Number.isInteger(Number(s)),ah=s=>s.endsWith("%")&&Se(s.slice(0,-1)),ca=s=>hw.test(s),vw=()=>!0,xw=s=>pw.test(s)&&!mw.test(s),ex=()=>!1,yw=s=>gw.test(s),Sw=s=>_w.test(s),Mw=s=>!Wt(s)&&!qt(s),Ew=s=>js(s,ax,ex),Wt=s=>$v.test(s),Mr=s=>js(s,rx,xw),rh=s=>js(s,Rw,Se),dv=s=>js(s,nx,ex),bw=s=>js(s,ix,Sw),Qc=s=>js(s,sx,yw),qt=s=>tx.test(s),tl=s=>Zs(s,rx),Tw=s=>Zs(s,Cw),hv=s=>Zs(s,nx),Aw=s=>Zs(s,ax),ww=s=>Zs(s,ix),Jc=s=>Zs(s,sx,!0),js=(s,t,i)=>{const r=$v.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},Zs=(s,t,i=!1)=>{const r=tx.exec(s);return r?r[1]?t(r[1]):i:!1},nx=s=>s==="position"||s==="percentage",ix=s=>s==="image"||s==="url",ax=s=>s==="length"||s==="size"||s==="bg-size",rx=s=>s==="length",Rw=s=>s==="number",Cw=s=>s==="family-name",sx=s=>s==="shadow",Dw=()=>{const s=_n("color"),t=_n("font"),i=_n("text"),r=_n("font-weight"),l=_n("tracking"),c=_n("leading"),f=_n("breakpoint"),h=_n("container"),m=_n("spacing"),p=_n("radius"),_=_n("shadow"),v=_n("inset-shadow"),x=_n("text-shadow"),S=_n("drop-shadow"),E=_n("blur"),A=_n("perspective"),y=_n("aspect"),g=_n("ease"),D=_n("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],O=()=>[...w(),qt,Wt],F=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],I=()=>[qt,Wt,m],C=()=>[Ps,"full","auto",...I()],L=()=>[Wa,"none","subgrid",qt,Wt],H=()=>["auto",{span:["full",Wa,qt,Wt]},Wa,qt,Wt],at=()=>[Wa,"auto",qt,Wt],et=()=>["auto","min","max","fr",qt,Wt],ft=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ut=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...I()],W=()=>[Ps,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],G=()=>[s,qt,Wt],yt=()=>[...w(),hv,dv,{position:[qt,Wt]}],N=()=>["no-repeat",{repeat:["","x","y","space","round"]}],J=()=>["auto","cover","contain",Aw,Ew,{size:[qt,Wt]}],vt=()=>[ah,tl,Mr],mt=()=>["","none","full",p,qt,Wt],bt=()=>["",Se,tl,Mr],nt=()=>["solid","dashed","dotted","double"],ht=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],gt=()=>[Se,ah,hv,dv],Ut=()=>["","none",E,qt,Wt],Gt=()=>["none",Se,qt,Wt],ee=()=>["none",Se,qt,Wt],De=()=>[Se,qt,Wt],Et=()=>[Ps,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ca],breakpoint:[ca],color:[vw],container:[ca],"drop-shadow":[ca],ease:["in","out","in-out"],font:[Mw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ca],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ca],shadow:[ca],spacing:["px",Se],text:[ca],"text-shadow":[ca],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ps,Wt,qt,y]}],container:["container"],columns:[{columns:[Se,Wt,qt,h]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:O()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[Wa,"auto",qt,Wt]}],basis:[{basis:[Ps,"full","auto",h,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Se,Ps,"auto","initial","none",Wt]}],grow:[{grow:["",Se,qt,Wt]}],shrink:[{shrink:["",Se,qt,Wt]}],order:[{order:[Wa,"first","last","none",qt,Wt]}],"grid-cols":[{"grid-cols":L()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":at()}],"col-end":[{"col-end":at()}],"grid-rows":[{"grid-rows":L()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":at()}],"row-end":[{"row-end":at()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":et()}],"auto-rows":[{"auto-rows":et()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...ft(),"normal"]}],"justify-items":[{"justify-items":[...ut(),"normal"]}],"justify-self":[{"justify-self":["auto",...ut()]}],"align-content":[{content:["normal",...ft()]}],"align-items":[{items:[...ut(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ut(),{baseline:["","last"]}]}],"place-content":[{"place-content":ft()}],"place-items":[{"place-items":[...ut(),"baseline"]}],"place-self":[{"place-self":["auto",...ut()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],w:[{w:[h,"screen",...W()]}],"min-w":[{"min-w":[h,"screen","none",...W()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...W()]}],h:[{h:["screen","lh",...W()]}],"min-h":[{"min-h":["screen","lh","none",...W()]}],"max-h":[{"max-h":["screen","lh",...W()]}],"font-size":[{text:["base",i,tl,Mr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,qt,rh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ah,Wt]}],"font-family":[{font:[Tw,Wt,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,qt,Wt]}],"line-clamp":[{"line-clamp":[Se,"none",qt,rh]}],leading:[{leading:[c,...I()]}],"list-image":[{"list-image":["none",qt,Wt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qt,Wt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:G()}],"text-color":[{text:G()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...nt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Se,"from-font","auto",qt,Mr]}],"text-decoration-color":[{decoration:G()}],"underline-offset":[{"underline-offset":[Se,"auto",qt,Wt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qt,Wt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qt,Wt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:yt()}],"bg-repeat":[{bg:N()}],"bg-size":[{bg:J()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Wa,qt,Wt],radial:["",qt,Wt],conic:[Wa,qt,Wt]},ww,bw]}],"bg-color":[{bg:G()}],"gradient-from-pos":[{from:vt()}],"gradient-via-pos":[{via:vt()}],"gradient-to-pos":[{to:vt()}],"gradient-from":[{from:G()}],"gradient-via":[{via:G()}],"gradient-to":[{to:G()}],rounded:[{rounded:mt()}],"rounded-s":[{"rounded-s":mt()}],"rounded-e":[{"rounded-e":mt()}],"rounded-t":[{"rounded-t":mt()}],"rounded-r":[{"rounded-r":mt()}],"rounded-b":[{"rounded-b":mt()}],"rounded-l":[{"rounded-l":mt()}],"rounded-ss":[{"rounded-ss":mt()}],"rounded-se":[{"rounded-se":mt()}],"rounded-ee":[{"rounded-ee":mt()}],"rounded-es":[{"rounded-es":mt()}],"rounded-tl":[{"rounded-tl":mt()}],"rounded-tr":[{"rounded-tr":mt()}],"rounded-br":[{"rounded-br":mt()}],"rounded-bl":[{"rounded-bl":mt()}],"border-w":[{border:bt()}],"border-w-x":[{"border-x":bt()}],"border-w-y":[{"border-y":bt()}],"border-w-s":[{"border-s":bt()}],"border-w-e":[{"border-e":bt()}],"border-w-t":[{"border-t":bt()}],"border-w-r":[{"border-r":bt()}],"border-w-b":[{"border-b":bt()}],"border-w-l":[{"border-l":bt()}],"divide-x":[{"divide-x":bt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":bt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...nt(),"hidden","none"]}],"divide-style":[{divide:[...nt(),"hidden","none"]}],"border-color":[{border:G()}],"border-color-x":[{"border-x":G()}],"border-color-y":[{"border-y":G()}],"border-color-s":[{"border-s":G()}],"border-color-e":[{"border-e":G()}],"border-color-t":[{"border-t":G()}],"border-color-r":[{"border-r":G()}],"border-color-b":[{"border-b":G()}],"border-color-l":[{"border-l":G()}],"divide-color":[{divide:G()}],"outline-style":[{outline:[...nt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Se,qt,Wt]}],"outline-w":[{outline:["",Se,tl,Mr]}],"outline-color":[{outline:G()}],shadow:[{shadow:["","none",_,Jc,Qc]}],"shadow-color":[{shadow:G()}],"inset-shadow":[{"inset-shadow":["none",v,Jc,Qc]}],"inset-shadow-color":[{"inset-shadow":G()}],"ring-w":[{ring:bt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:G()}],"ring-offset-w":[{"ring-offset":[Se,Mr]}],"ring-offset-color":[{"ring-offset":G()}],"inset-ring-w":[{"inset-ring":bt()}],"inset-ring-color":[{"inset-ring":G()}],"text-shadow":[{"text-shadow":["none",x,Jc,Qc]}],"text-shadow-color":[{"text-shadow":G()}],opacity:[{opacity:[Se,qt,Wt]}],"mix-blend":[{"mix-blend":[...ht(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ht()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Se]}],"mask-image-linear-from-pos":[{"mask-linear-from":gt()}],"mask-image-linear-to-pos":[{"mask-linear-to":gt()}],"mask-image-linear-from-color":[{"mask-linear-from":G()}],"mask-image-linear-to-color":[{"mask-linear-to":G()}],"mask-image-t-from-pos":[{"mask-t-from":gt()}],"mask-image-t-to-pos":[{"mask-t-to":gt()}],"mask-image-t-from-color":[{"mask-t-from":G()}],"mask-image-t-to-color":[{"mask-t-to":G()}],"mask-image-r-from-pos":[{"mask-r-from":gt()}],"mask-image-r-to-pos":[{"mask-r-to":gt()}],"mask-image-r-from-color":[{"mask-r-from":G()}],"mask-image-r-to-color":[{"mask-r-to":G()}],"mask-image-b-from-pos":[{"mask-b-from":gt()}],"mask-image-b-to-pos":[{"mask-b-to":gt()}],"mask-image-b-from-color":[{"mask-b-from":G()}],"mask-image-b-to-color":[{"mask-b-to":G()}],"mask-image-l-from-pos":[{"mask-l-from":gt()}],"mask-image-l-to-pos":[{"mask-l-to":gt()}],"mask-image-l-from-color":[{"mask-l-from":G()}],"mask-image-l-to-color":[{"mask-l-to":G()}],"mask-image-x-from-pos":[{"mask-x-from":gt()}],"mask-image-x-to-pos":[{"mask-x-to":gt()}],"mask-image-x-from-color":[{"mask-x-from":G()}],"mask-image-x-to-color":[{"mask-x-to":G()}],"mask-image-y-from-pos":[{"mask-y-from":gt()}],"mask-image-y-to-pos":[{"mask-y-to":gt()}],"mask-image-y-from-color":[{"mask-y-from":G()}],"mask-image-y-to-color":[{"mask-y-to":G()}],"mask-image-radial":[{"mask-radial":[qt,Wt]}],"mask-image-radial-from-pos":[{"mask-radial-from":gt()}],"mask-image-radial-to-pos":[{"mask-radial-to":gt()}],"mask-image-radial-from-color":[{"mask-radial-from":G()}],"mask-image-radial-to-color":[{"mask-radial-to":G()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[Se]}],"mask-image-conic-from-pos":[{"mask-conic-from":gt()}],"mask-image-conic-to-pos":[{"mask-conic-to":gt()}],"mask-image-conic-from-color":[{"mask-conic-from":G()}],"mask-image-conic-to-color":[{"mask-conic-to":G()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:yt()}],"mask-repeat":[{mask:N()}],"mask-size":[{mask:J()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qt,Wt]}],filter:[{filter:["","none",qt,Wt]}],blur:[{blur:Ut()}],brightness:[{brightness:[Se,qt,Wt]}],contrast:[{contrast:[Se,qt,Wt]}],"drop-shadow":[{"drop-shadow":["","none",S,Jc,Qc]}],"drop-shadow-color":[{"drop-shadow":G()}],grayscale:[{grayscale:["",Se,qt,Wt]}],"hue-rotate":[{"hue-rotate":[Se,qt,Wt]}],invert:[{invert:["",Se,qt,Wt]}],saturate:[{saturate:[Se,qt,Wt]}],sepia:[{sepia:["",Se,qt,Wt]}],"backdrop-filter":[{"backdrop-filter":["","none",qt,Wt]}],"backdrop-blur":[{"backdrop-blur":Ut()}],"backdrop-brightness":[{"backdrop-brightness":[Se,qt,Wt]}],"backdrop-contrast":[{"backdrop-contrast":[Se,qt,Wt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Se,qt,Wt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Se,qt,Wt]}],"backdrop-invert":[{"backdrop-invert":["",Se,qt,Wt]}],"backdrop-opacity":[{"backdrop-opacity":[Se,qt,Wt]}],"backdrop-saturate":[{"backdrop-saturate":[Se,qt,Wt]}],"backdrop-sepia":[{"backdrop-sepia":["",Se,qt,Wt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qt,Wt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Se,"initial",qt,Wt]}],ease:[{ease:["linear","initial",g,qt,Wt]}],delay:[{delay:[Se,qt,Wt]}],animate:[{animate:["none",D,qt,Wt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,qt,Wt]}],"perspective-origin":[{"perspective-origin":O()}],rotate:[{rotate:Gt()}],"rotate-x":[{"rotate-x":Gt()}],"rotate-y":[{"rotate-y":Gt()}],"rotate-z":[{"rotate-z":Gt()}],scale:[{scale:ee()}],"scale-x":[{"scale-x":ee()}],"scale-y":[{"scale-y":ee()}],"scale-z":[{"scale-z":ee()}],"scale-3d":["scale-3d"],skew:[{skew:De()}],"skew-x":[{"skew-x":De()}],"skew-y":[{"skew-y":De()}],transform:[{transform:[qt,Wt,"","none","gpu","cpu"]}],"transform-origin":[{origin:O()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Et()}],"translate-x":[{"translate-x":Et()}],"translate-y":[{"translate-y":Et()}],"translate-z":[{"translate-z":Et()}],"translate-none":["translate-none"],accent:[{accent:G()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:G()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qt,Wt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qt,Wt]}],fill:[{fill:["none",...G()]}],"stroke-w":[{stroke:[Se,tl,Mr,rh]}],stroke:[{stroke:["none",...G()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Uw=fw(Dw);function ml(...s){return Uw(Kv(s))}const Lw=QA("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Dr({className:s,variant:t,size:i,asChild:r=!1,...l}){const c=r?WA:"button";return it.jsx(c,{"data-slot":"button",className:ml(Lw({variant:t,size:i,className:s})),...l})}function Nr({className:s,...t}){return it.jsx("div",{"data-slot":"card",className:ml("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...t})}function cl({className:s,...t}){return it.jsx("div",{"data-slot":"card-header",className:ml("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...t})}function ul({className:s,...t}){return it.jsx("div",{"data-slot":"card-title",className:ml("leading-none font-semibold",s),...t})}function Or({className:s,...t}){return it.jsx("div",{"data-slot":"card-content",className:ml("px-6",s),...t})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ow=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),pv=s=>{const t=Ow(s);return t.charAt(0).toUpperCase()+t.slice(1)},ox=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),Pw=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=se.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>se.createElement("svg",{ref:m,...zw,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:ox("lucide",l),...!c&&!Pw(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,_])=>se.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=(s,t)=>{const i=se.forwardRef(({className:r,...l},c)=>se.createElement(Bw,{ref:c,iconNode:t,className:ox(`lucide-${Nw(pv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=pv(s),i};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lx=Vi("arrow-left",Iw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Hw=Vi("camera",Fw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Vw=Vi("globe",Gw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Xw=Vi("house",kw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],mv=Vi("info",Ww);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],Yw=Vi("mountain",qw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Zw=Vi("rocket",jw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],cx=Vi("rotate-ccw",Kw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Jw=Vi("sparkles",Qw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],qa=Vi("zap",$w),tR=({onNavigateTo:s,onViewSurface:t,onViewGalaxy:i,currentLocation:r})=>{const l=[{name:"Earth",icon:Vw,color:"text-blue-500",hasSurface:!0},{name:"Moon",icon:qa,color:"text-gray-400",hasSurface:!0},{name:"Mars",icon:Zw,color:"text-red-500",hasSurface:!0},{name:"Venus",icon:qa,color:"text-yellow-500",hasSurface:!0},{name:"Mercury",icon:qa,color:"text-orange-500",hasSurface:!0},{name:"Jupiter",icon:qa,color:"text-orange-300",hasSurface:!0},{name:"Saturn",icon:qa,color:"text-yellow-300",hasSurface:!0},{name:"Uranus",icon:qa,color:"text-cyan-400",hasSurface:!0},{name:"Neptune",icon:qa,color:"text-blue-600",hasSurface:!0},{name:"Sun",icon:qa,color:"text-yellow-400",hasSurface:!1}];return it.jsxs(Nr,{className:"absolute top-4 right-4 w-72 bg-black/80 text-white border-gray-600",children:[it.jsx(cl,{className:"pb-2",children:it.jsxs(ul,{className:"text-lg flex items-center gap-2",children:[it.jsx(Xw,{className:"w-5 h-5"}),"Navigation & Surface Explorer"]})}),it.jsxs(Or,{className:"space-y-2",children:[it.jsxs("div",{className:"text-sm text-gray-300 mb-3",children:["Current: ",it.jsx("span",{className:"text-white font-semibold",children:r})]}),it.jsxs("div",{className:"space-y-2",children:[l.map(c=>{const f=c.icon;return it.jsxs("div",{className:"flex gap-1",children:[it.jsxs(Dr,{variant:"outline",size:"sm",className:"flex-1 justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(c.name),children:[it.jsx(f,{className:`w-4 h-4 ${c.color}`}),c.name]}),c.hasSurface&&it.jsx(Dr,{variant:"outline",size:"sm",className:"px-2 bg-blue-800/50 border-blue-600 hover:bg-blue-700/50 text-white",onClick:()=>t(c.name),title:`View ${c.name} surface`,children:it.jsx(Yw,{className:"w-4 h-4"})})]},c.name)}),it.jsx("div",{className:"pt-2 border-t border-gray-600",children:it.jsxs(Dr,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-purple-800/50 border-purple-600 hover:bg-purple-700/50 text-white",onClick:i,children:[it.jsx(Jw,{className:"w-4 h-4 text-purple-400"}),"Milky Way Galaxy View"]})})]}),it.jsxs("div",{className:"text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded",children:[it.jsx("p",{children:it.jsx("strong",{children:"Controls:"})}),it.jsxs("p",{children:["• ",it.jsx("strong",{children:"Planet buttons:"})," Navigate to planet"]}),it.jsxs("p",{children:["• ",it.jsx("strong",{children:"🏔️ Surface buttons:"})," Explore planet surface"]}),it.jsxs("p",{children:["• ",it.jsx("strong",{children:"🌌 Galaxy button:"})," View Milky Way galaxy"]}),it.jsxs("p",{children:["• ",it.jsx("strong",{children:"Mouse:"})," Rotate view"]}),it.jsxs("p",{children:["• ",it.jsx("strong",{children:"Scroll:"})," Zoom in/out"]})]}),it.jsxs("div",{className:"text-xs text-blue-400 mt-2 p-2 bg-blue-900/20 rounded border border-blue-800",children:[it.jsx("p",{children:it.jsx("strong",{children:"🌍 Multi-Scale Explorer:"})}),it.jsx("p",{children:"Journey from planetary surfaces to the galactic scale - experience the universe from microscopic to cosmic perspectives with realistic NASA-based visuals."})]})]})]})},eR=({planetName:s,onBack:t})=>{const i=se.useRef(null),r=se.useRef(null),l=se.useRef(null),c=se.useRef(null),f=se.useRef(null),[h,m]=se.useState(!0),p={Earth:{skyColor:8900331,groundColor:3329330,terrainHeight:.3,features:["mountains","valleys","water"],atmosphere:!0,description:"Earth's surface features diverse landscapes including mountains, valleys, oceans, and vegetation."},Mars:{skyColor:16747625,groundColor:16737095,terrainHeight:.5,features:["craters","canyons","dust"],atmosphere:!1,description:"Mars surface is characterized by bright red iron oxide dust, massive canyons, and ancient impact craters."},Venus:{skyColor:16757575,groundColor:16766720,terrainHeight:.4,features:["volcanoes","lava_plains","thick_atmosphere"],atmosphere:!0,description:"Venus surface shows extensive volcanic activity with bright golden lava plains and thick sulfuric acid clouds."},Mercury:{skyColor:0,groundColor:13808780,terrainHeight:.6,features:["craters","cliffs","no_atmosphere"],atmosphere:!1,description:"Mercury's surface is heavily cratered with steep cliffs and extreme temperature variations."},Moon:{skyColor:0,groundColor:15066597,terrainHeight:.4,features:["craters","maria","regolith"],atmosphere:!1,description:"The Moon's surface features ancient impact craters, dark volcanic plains (maria), and bright fine regolith."},Jupiter:{skyColor:16770229,groundColor:16770229,terrainHeight:.2,features:["gas_clouds","storms","no_solid_surface"],atmosphere:!0,description:"Jupiter has no solid surface - only swirling bright gas clouds and massive storm systems."},Saturn:{skyColor:16775388,groundColor:15787660,terrainHeight:.2,features:["gas_clouds","rings_view","no_solid_surface"],atmosphere:!0,description:"Saturn's gaseous atmosphere shows beautiful bright cloud bands with spectacular ring views."},Uranus:{skyColor:8900331,groundColor:8900331,terrainHeight:.2,features:["ice_clouds","methane_atmosphere","no_solid_surface"],atmosphere:!0,description:"Uranus features a bright methane-rich atmosphere creating its distinctive blue-green color."},Neptune:{skyColor:6591981,groundColor:6591981,terrainHeight:.2,features:["ice_clouds","storms","no_solid_surface"],atmosphere:!0,description:"Neptune's dynamic atmosphere shows bright blue storm spots and high-speed winds."}};se.useEffect(()=>{if(!i.current||!s)return;const A=p[s]||p.Earth,y=new dp;y.background=new xe(A.skyColor),r.current=y;const g=new kn(75,window.innerWidth/window.innerHeight,.1,1e3);g.position.set(0,2,5),c.current=g;const D=new vp({antialias:!0,alpha:!0});D.setSize(window.innerWidth,window.innerHeight),D.shadowMap.enabled=!0,D.shadowMap.type=ep,l.current=D,i.current.appendChild(D.domElement);const U=new Gv(4210752,.4);y.add(U);const w=new jM(16777215,.8);w.position.set(10,10,5),w.castShadow=!0,w.shadow.mapSize.width=2048,w.shadow.mapSize.height=2048,y.add(w),_(y,A),A.atmosphere&&x(y,A);let O=0,F=0,k=0,I=0;const C=et=>{O=(et.clientX-window.innerWidth/2)*.001,F=(et.clientY-window.innerHeight/2)*.001},L=et=>{g.position.z+=et.deltaY*.01,g.position.z=Math.max(1,Math.min(20,g.position.z))};document.addEventListener("mousemove",C),document.addEventListener("wheel",L);const H=()=>{f.current=requestAnimationFrame(H),k+=(O-k)*.05,I+=(F-I)*.05,g.position.x+=(k*5-g.position.x)*.05,g.position.y+=(2-I*2-g.position.y)*.05,g.lookAt(0,0,0),D.render(y,g)};H(),m(!1);const at=()=>{g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",at),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("wheel",L),window.removeEventListener("resize",at),f.current&&cancelAnimationFrame(f.current),i.current&&D.domElement&&i.current.removeChild(D.domElement),D.dispose()}},[s]);const _=(A,y)=>{const g=new Ws(50,50,128,128),D=g.attributes.position.array;for(let O=0;O<D.length;O+=3){const F=D[O],k=D[O+2];let I=0;if(y.features.includes("mountains")&&(I+=Math.sin(F*.1)*Math.cos(k*.1)*y.terrainHeight),y.features.includes("craters")){const C=Math.sqrt(F*F+k*k);C<5&&(I-=(5-C)*.2)}y.features.includes("valleys")&&(I+=Math.sin(F*.05)*y.terrainHeight*.5),I+=(Math.random()-.5)*.1,D[O+1]=I}g.attributes.position.needsUpdate=!0,g.computeVertexNormals();const U=new fa({color:y.groundColor,wireframe:!1}),w=new Qe(g,U);w.rotation.x=-Math.PI/2,w.receiveShadow=!0,A.add(w),v(A,y)},v=(A,y)=>{for(let g=0;g<20;g++){const D=new Jn(Math.random()*.3+.1,8,6),U=new fa({color:new xe(y.groundColor).multiplyScalar(.7)}),w=new Qe(D,U);w.position.x=(Math.random()-.5)*40,w.position.z=(Math.random()-.5)*40,w.position.y=Math.random()*.5,w.castShadow=!0,A.add(w)}if(y.features.includes("water")){const g=new Ws(10,10),D=new fa({color:27028,transparent:!0,opacity:.8}),U=new Qe(g,D);U.rotation.x=-Math.PI/2,U.position.y=.1,U.position.x=15,A.add(U)}if(y.features.includes("dust")){const g=new qn,D=1e3,U=new Float32Array(D*3);for(let F=0;F<D;F++)U[F*3]=(Math.random()-.5)*100,U[F*3+1]=Math.random()*10,U[F*3+2]=(Math.random()-.5)*100;g.setAttribute("position",new Bn(U,3));const w=new ll({color:y.groundColor,size:.1,transparent:!0,opacity:.6}),O=new cu(g,w);A.add(O)}},x=(A,y)=>{const g=new Jn(30,32,32),D=new Cr({color:y.skyColor,transparent:!0,opacity:.1,side:Xn}),U=new Qe(g,D);A.add(U)},S=()=>{c.current&&c.current.position.set(0,2,5)},E=p[s]||p.Earth;return it.jsxs("div",{className:"relative w-full h-screen",children:[h&&it.jsx("div",{className:"absolute inset-0 bg-black/80 flex items-center justify-center z-50",children:it.jsxs("div",{className:"text-white text-xl",children:["Loading ",s," surface..."]})}),it.jsx("div",{ref:i,className:"w-full h-full"}),it.jsxs(Nr,{className:"absolute top-4 left-4 w-80 bg-black/80 text-white border-gray-600",children:[it.jsx(cl,{className:"pb-2",children:it.jsxs(ul,{className:"text-lg flex items-center gap-2",children:[it.jsx(Hw,{className:"w-5 h-5"}),s," Surface View"]})}),it.jsxs(Or,{className:"space-y-3",children:[it.jsx("p",{className:"text-sm text-gray-300",children:E.description}),it.jsxs("div",{className:"text-xs text-gray-400",children:[it.jsxs("p",{children:[it.jsx("strong",{children:"Features:"})," ",E.features.join(", ")]}),it.jsxs("p",{children:[it.jsx("strong",{children:"Atmosphere:"})," ",E.atmosphere?"Present":"None"]})]})]})]}),it.jsx(Nr,{className:"absolute bottom-4 right-4 bg-black/80 text-white border-gray-600",children:it.jsxs(Or,{className:"p-4",children:[it.jsxs("div",{className:"flex gap-2",children:[it.jsxs(Dr,{variant:"outline",size:"sm",className:"bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:t,children:[it.jsx(lx,{className:"w-4 h-4 mr-2"}),"Back to Space"]}),it.jsxs(Dr,{variant:"outline",size:"sm",className:"bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:S,children:[it.jsx(cx,{className:"w-4 h-4 mr-2"}),"Reset View"]})]}),it.jsx("div",{className:"text-xs text-gray-400 mt-2",children:it.jsx("p",{children:"Mouse: Look around • Scroll: Zoom"})})]})})]})},nR=({onBackToSolar:s})=>{const t=se.useRef(null),i=se.useRef(null),r=se.useRef(null),l=se.useRef(null),c=se.useRef(null),f=se.useRef(null),[h,m]=se.useState(!0);se.useEffect(()=>{if(!t.current)return;const g=new dp;g.background=new xe(8),i.current=g;const D=new kn(45,window.innerWidth/window.innerHeight,.1,2e5);D.position.set(0,15e3,4e4),l.current=D;const U=new vp({antialias:!0,alpha:!0});U.setSize(window.innerWidth,window.innerHeight),U.toneMapping=_v,U.toneMappingExposure=1.2,r.current=U,t.current.appendChild(U.domElement),p(g),_(g);let w=0,O=0,F=0,k=0,I=!1,C=4e4;const L=P=>{if(I){const W=P.clientX-w,G=P.clientY-O;F+=W*.005,k+=G*.005,k=Math.max(-Math.PI/2,Math.min(Math.PI/2,k)),w=P.clientX,O=P.clientY}},H=P=>{I=!0,w=P.clientX,O=P.clientY},at=()=>{I=!1},et=P=>{C+=P.deltaY*10,C=Math.max(5e3,Math.min(1e5,C))};document.addEventListener("mousemove",L),document.addEventListener("mousedown",H),document.addEventListener("mouseup",at),document.addEventListener("wheel",et);const ft=()=>{c.current=requestAnimationFrame(ft),f.current&&(f.current.rotation.y+=2e-4),D.position.x=Math.cos(F)*Math.cos(k)*C,D.position.z=Math.sin(F)*Math.cos(k)*C,D.position.y=Math.sin(k)*C,D.lookAt(0,0,0),U.render(g,D)};ft(),m(!1);const ut=()=>{D.aspect=window.innerWidth/window.innerHeight,D.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ut),()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mousedown",H),document.removeEventListener("mouseup",at),document.removeEventListener("wheel",et),window.removeEventListener("resize",ut),c.current&&cancelAnimationFrame(c.current),t.current&&U.domElement&&t.current.removeChild(U.domElement),U.dispose()}},[]);const p=g=>{const D=new qn,U=15e3,w=new Float32Array(U*3),O=new Float32Array(U*3);for(let I=0;I<U;I++){const C=8e4+Math.random()*1e5,L=Math.random()*Math.PI*2,H=Math.random()*Math.PI;w[I*3]=C*Math.sin(H)*Math.cos(L),w[I*3+1]=C*Math.cos(H),w[I*3+2]=C*Math.sin(H)*Math.sin(L),Math.random()<.7?(O[I*3]=.9+Math.random()*.1,O[I*3+1]=.9+Math.random()*.1,O[I*3+2]=1):(O[I*3]=1,O[I*3+1]=.8+Math.random()*.2,O[I*3+2]=.6+Math.random()*.2)}D.setAttribute("position",new Bn(w,3)),D.setAttribute("color",new Bn(O,3));const F=new ll({size:2,vertexColors:!0,transparent:!0,opacity:.8}),k=new cu(D,F);g.add(k)},_=g=>{const D=new el;f.current=D;const U=new Jn(2500,64,32);U.scale(1.5,.8,1.5);const w=v(),O=new Cr({map:w,transparent:!0,opacity:.9}),F=new Qe(U,O);D.add(F),x(D),E(D),A(D),g.add(D)},v=()=>{const g=document.createElement("canvas");g.width=512,g.height=512;const D=g.getContext("2d"),U=D.createRadialGradient(256,256,0,256,256,256);return U.addColorStop(0,"#ffee88"),U.addColorStop(.3,"#ffcc44"),U.addColorStop(.6,"#ff8844"),U.addColorStop(1,"transparent"),D.fillStyle=U,D.fillRect(0,0,512,512),new au(g)},x=g=>{const D=new hu(3e3,25e3,128),U=S(),w=new Cr({map:U,transparent:!0,opacity:.4,side:Ai}),O=new Qe(D,w);O.rotation.x=Math.PI/2,g.add(O)},S=()=>{const g=document.createElement("canvas");g.width=1024,g.height=1024;const D=g.getContext("2d"),U=512,w=512;D.fillStyle="#001122",D.fillRect(0,0,1024,1024);for(let O=0;O<Math.PI*8;O+=.01){const F=O*30;if(F>500)break;const k=U+Math.cos(O)*F,I=w+Math.sin(O)*F,C=Math.max(0,1-F/500);D.fillStyle=`rgba(100, 150, 255, ${C*.3})`,D.beginPath(),D.arc(k,I,3,0,Math.PI*2),D.fill()}return new au(g)},E=g=>{for(let D=0;D<2;D++){const U=new qn,w=[],O=[],F=8e3;for(let C=0;C<F;C++){const L=C/F*Math.PI*6,H=D*Math.PI,at=3e3+L*800;if(at>25e3)break;const et=L*.3+H,ft=Math.cos(et)*at,ut=Math.sin(et)*at,P=800+at*.02,W=(Math.random()-.5)*P,G=et+Math.PI/2,yt=ft+Math.cos(G)*W,N=ut+Math.sin(G)*W,J=(Math.random()-.5)*200;w.push(yt,J,N);const vt=Math.sqrt(yt*yt+N*N),mt=Math.max(.3,1-vt/25e3),bt=.6+Math.random()*.4;O.push(bt*mt,bt*mt*.8,mt)}U.setAttribute("position",new Wn(w,3)),U.setAttribute("color",new Wn(O,3));const k=new ll({size:15,vertexColors:!0,transparent:!0,opacity:.8}),I=new cu(U,k);g.add(I)}},A=g=>{const U=Math.PI*.4,w=Math.cos(U)*13e3,O=Math.sin(U)*13e3,F=new Jn(80,16,16),k=new Cr({color:16776960,emissive:4473856}),I=new Qe(F,k);I.position.set(w,0,O),g.add(I);const C=new Jn(120,16,16),L=new Cr({color:16776960,transparent:!0,opacity:.3}),H=new Qe(C,L);H.position.set(w,0,O),g.add(H);const at=document.createElement("canvas"),et=at.getContext("2d");at.width=512,at.height=128,et.fillStyle="rgba(0, 0, 0, 0.7)",et.fillRect(0,0,at.width,at.height),et.fillStyle="yellow",et.font="bold 32px Arial",et.textAlign="center",et.fillText("Our Solar System",256,64),et.font="20px Arial",et.fillText("(Orion Arm)",256,96);const ft=new au(at),ut=new hp({map:ft,transparent:!0}),P=new Bv(ut);P.position.set(w,800,O),P.scale.set(1500,400,1),g.add(P)},y=()=>{l.current&&l.current.position.set(0,15e3,4e4)};return it.jsxs("div",{className:"relative w-full h-screen",children:[h&&it.jsx("div",{className:"absolute inset-0 bg-black/80 flex items-center justify-center z-50",children:it.jsx("div",{className:"text-white text-xl",children:"Loading Milky Way Galaxy..."})}),it.jsx("div",{ref:t,className:"w-full h-full"}),it.jsxs(Nr,{className:"absolute top-4 left-4 w-80 bg-black/80 text-white border-gray-600",children:[it.jsx(cl,{className:"pb-2",children:it.jsx(ul,{className:"text-lg",children:"Milky Way Galaxy"})}),it.jsxs(Or,{className:"space-y-3",children:[it.jsx("p",{className:"text-sm text-gray-300",children:"Our galaxy is a barred spiral galaxy with a bright central bulge and two major spiral arms. Our solar system is located in a minor arm called the Orion Arm."}),it.jsxs("div",{className:"text-xs text-gray-400",children:[it.jsxs("p",{children:[it.jsx("strong",{children:"Type:"})," Barred spiral galaxy"]}),it.jsxs("p",{children:[it.jsx("strong",{children:"Diameter:"})," ~100,000 light-years"]}),it.jsxs("p",{children:[it.jsx("strong",{children:"Stars:"})," 200-400 billion"]}),it.jsxs("p",{children:[it.jsx("strong",{children:"Age:"})," ~13.6 billion years"]}),it.jsxs("p",{children:[it.jsx("strong",{children:"Our Location:"})," Orion Arm, 26,000 ly from center"]})]})]})]}),it.jsx(Nr,{className:"absolute bottom-4 right-4 bg-black/80 text-white border-gray-600",children:it.jsxs(Or,{className:"p-4",children:[it.jsxs("div",{className:"flex gap-2 mb-2",children:[it.jsxs(Dr,{variant:"outline",size:"sm",className:"bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:s,children:[it.jsx(lx,{className:"w-4 h-4 mr-2"}),"Back to Solar System"]}),it.jsxs(Dr,{variant:"outline",size:"sm",className:"bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:y,children:[it.jsx(cx,{className:"w-4 h-4 mr-2"}),"Reset View"]})]}),it.jsx("div",{className:"text-xs text-gray-400",children:it.jsx("p",{children:"Drag: Rotate view • Scroll: Zoom in/out"})})]})})]})},iR=({selectedPlanet:s,viewMode:t})=>{const i={Earth:{diameter:"12,742 km",mass:"5.97 × 10²⁴ kg",distance:"149.6 million km",day:"24 hours",year:"365.25 days",moons:"1 (Moon)",atmosphere:"N₂ (78%), O₂ (21%)",temperature:"-89°C to 58°C"},Mars:{diameter:"6,779 km",mass:"6.39 × 10²³ kg",distance:"227.9 million km",day:"24.6 hours",year:"687 days",moons:"2 (Phobos, Deimos)",atmosphere:"CO₂ (95%), N₂ (3%)",temperature:"-87°C to -5°C"},Venus:{diameter:"12,104 km",mass:"4.87 × 10²⁴ kg",distance:"108.2 million km",day:"243 days",year:"225 days",moons:"0",atmosphere:"CO₂ (96%), N₂ (3%)",temperature:"462°C (surface)"},Mercury:{diameter:"4,879 km",mass:"3.30 × 10²³ kg",distance:"57.9 million km",day:"59 days",year:"88 days",moons:"0",atmosphere:"Very thin",temperature:"-173°C to 427°C"},Jupiter:{diameter:"139,820 km",mass:"1.90 × 10²⁷ kg",distance:"778.5 million km",day:"9.9 hours",year:"12 years",moons:"95+ (Io, Europa, Ganymede, Callisto)",atmosphere:"H₂ (89%), He (10%)",temperature:"-108°C (cloud tops)"},Saturn:{diameter:"116,460 km",mass:"5.68 × 10²⁶ kg",distance:"1.43 billion km",day:"10.7 hours",year:"29 years",moons:"146+ (Titan, Enceladus)",atmosphere:"H₂ (96%), He (3%)",temperature:"-139°C (cloud tops)"},Uranus:{diameter:"50,724 km",mass:"8.68 × 10²⁵ kg",distance:"2.87 billion km",day:"17.2 hours",year:"84 years",moons:"27+ (Miranda, Ariel)",atmosphere:"H₂ (83%), He (15%), CH₄ (2%)",temperature:"-197°C"},Neptune:{diameter:"49,244 km",mass:"1.02 × 10²⁶ kg",distance:"4.50 billion km",day:"16.1 hours",year:"165 years",moons:"16+ (Triton)",atmosphere:"H₂ (80%), He (19%), CH₄ (1%)",temperature:"-201°C"},Sun:{diameter:"1.39 million km",mass:"1.99 × 10³⁰ kg",distance:"0 km (center)",day:"25 days (equator)",year:"N/A",moons:"8 planets",atmosphere:"H (73%), He (25%)",temperature:"5,778K (surface)"},Moon:{diameter:"3,474 km",mass:"7.35 × 10²² kg",distance:"384,400 km (from Earth)",day:"27.3 days",year:"27.3 days",moons:"0",atmosphere:"Very thin",temperature:"-233°C to 123°C"}},r={type:"Barred Spiral Galaxy",diameter:"~100,000 light-years",stars:"200-400 billion",age:"~13.6 billion years",mass:"~1.5 × 10¹² solar masses"};if(t==="galactic")return it.jsxs(Nr,{className:"absolute top-4 left-4 w-64 bg-black/80 text-white border-gray-600",children:[it.jsx(cl,{className:"pb-2",children:it.jsxs(ul,{className:"text-sm flex items-center gap-2",children:[it.jsx(mv,{className:"w-4 h-4"}),"Galaxy Stats"]})}),it.jsx(Or,{className:"space-y-2",children:it.jsxs("div",{className:"text-xs space-y-1",children:[it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Type:"}),it.jsx("span",{children:r.type})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Diameter:"}),it.jsx("span",{children:r.diameter})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Stars:"}),it.jsx("span",{children:r.stars})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Age:"}),it.jsx("span",{children:r.age})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Mass:"}),it.jsx("span",{children:r.mass})]})]})})]});if(!s||!i[s])return null;const l=i[s];return it.jsxs(Nr,{className:"absolute top-4 left-4 w-64 bg-black/80 text-white border-gray-600",children:[it.jsx(cl,{className:"pb-2",children:it.jsxs(ul,{className:"text-sm flex items-center gap-2",children:[it.jsx(mv,{className:"w-4 h-4"}),s," Stats"]})}),it.jsx(Or,{className:"space-y-2",children:it.jsxs("div",{className:"text-xs space-y-1",children:[it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Diameter:"}),it.jsx("span",{children:l.diameter})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Mass:"}),it.jsx("span",{children:l.mass})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Distance:"}),it.jsx("span",{children:l.distance})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Day:"}),it.jsx("span",{children:l.day})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Year:"}),it.jsx("span",{children:l.year})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Moons:"}),it.jsx("span",{children:l.moons})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Atmosphere:"}),it.jsx("span",{className:"text-right",children:l.atmosphere})]}),it.jsxs("div",{className:"flex justify-between",children:[it.jsx("span",{className:"text-gray-400",children:"Temperature:"}),it.jsx("span",{className:"text-right",children:l.temperature})]})]})})]})};function aR(){const[s,t]=se.useState("Solar System"),[i,r]=se.useState("space"),[l,c]=se.useState(null),[f,h]=se.useState(null),m=se.useRef(null),p=E=>{t(E),h(E),window.focusOnPlanetRef&&window.focusOnPlanetRef(E)},_=E=>{t(E)},v=E=>{c(E),r("surface"),t(`${E} Surface`)},x=()=>{r("galactic"),t("Milky Way Galaxy")},S=()=>{r("space"),c(null),t("Solar System")};return se.useEffect(()=>(window.triggerSurfaceView=E=>{v(E)},()=>{delete window.triggerSurfaceView}),[]),it.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[i==="space"?it.jsxs(it.Fragment,{children:[it.jsx(jv,{ref:m,onLocationChange:_}),it.jsx(tR,{onNavigateTo:p,onViewSurface:v,onViewGalaxy:x,currentLocation:s})]}):i==="surface"?it.jsx(eR,{planetName:l,onBack:S}):it.jsx(nR,{onBackToSolar:S}),it.jsx(iR,{selectedPlanet:f,viewMode:i})]})}MS.createRoot(document.getElementById("root")).render(it.jsx(se.StrictMode,{children:it.jsx(aR,{})}));
