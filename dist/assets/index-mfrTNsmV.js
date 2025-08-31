(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Wf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function $x(){if(s_)return To;s_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var o_;function tS(){return o_||(o_=1,Wf.exports=$x()),Wf.exports}var ae=tS(),qf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function eS(){if(l_)return oe;l_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function y(U,et,vt){this.props=U,this.context=et,this.refs=R,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,et){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,et,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function B(U,et,vt){this.props=U,this.context=et,this.refs=R,this.updater=vt||M}var O=B.prototype=new _;O.constructor=B,b(O,y.prototype),O.isPureReactComponent=!0;var C=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function G(U,et,vt,st,dt,Q){return vt=Q.ref,{$$typeof:o,type:U,key:et,ref:vt!==void 0?vt:null,props:Q}}function K(U,et){return G(U.type,et,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function w(U){var et={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return et[vt]})}var z=/\/+/g;function ht(U,et){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):et.toString(36)}function Y(){}function at(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(Y,Y):(U.status="pending",U.then(function(et){U.status==="pending"&&(U.status="fulfilled",U.value=et)},function(et){U.status==="pending"&&(U.status="rejected",U.reason=et)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ct(U,et,vt,st,dt){var Q=typeof U;(Q==="undefined"||Q==="boolean")&&(U=null);var ut=!1;if(U===null)ut=!0;else switch(Q){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(U.$$typeof){case o:case t:ut=!0;break;case g:return ut=U._init,ct(ut(U._payload),et,vt,st,dt)}}if(ut)return dt=dt(U),ut=st===""?"."+ht(U,0):st,C(dt)?(vt="",ut!=null&&(vt=ut.replace(z,"$&/")+"/"),ct(dt,et,vt,"",function(Bt){return Bt})):dt!=null&&(D(dt)&&(dt=K(dt,vt+(dt.key==null||U&&U.key===dt.key?"":(""+dt.key).replace(z,"$&/")+"/")+ut)),et.push(dt)),1;ut=0;var Mt=st===""?".":st+":";if(C(U))for(var Ct=0;Ct<U.length;Ct++)st=U[Ct],Q=Mt+ht(st,Ct),ut+=ct(st,et,vt,Q,dt);else if(Ct=x(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(st=U.next()).done;)st=st.value,Q=Mt+ht(st,Ct++),ut+=ct(st,et,vt,Q,dt);else if(Q==="object"){if(typeof U.then=="function")return ct(at(U),et,vt,st,dt);throw et=String(U),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ut}function N(U,et,vt){if(U==null)return U;var st=[],dt=0;return ct(U,st,"","",function(Q){return et.call(vt,Q,dt++)}),st}function q(U){if(U._status===-1){var et=U._result;et=et(),et.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=et)}if(U._status===1)return U._result.default;throw U._result}var X=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function _t(){}return oe.Children={map:N,forEach:function(U,et,vt){N(U,function(){et.apply(this,arguments)},vt)},count:function(U){var et=0;return N(U,function(){et++}),et},toArray:function(U){return N(U,function(et){return et})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=B,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,et,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var st=b({},U.props),dt=U.key,Q=void 0;if(et!=null)for(ut in et.ref!==void 0&&(Q=void 0),et.key!==void 0&&(dt=""+et.key),et)!H.call(et,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&et.ref===void 0||(st[ut]=et[ut]);var ut=arguments.length-2;if(ut===1)st.children=vt;else if(1<ut){for(var Mt=Array(ut),Ct=0;Ct<ut;Ct++)Mt[Ct]=arguments[Ct+2];st.children=Mt}return G(U.type,dt,void 0,void 0,Q,st)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,et,vt){var st,dt={},Q=null;if(et!=null)for(st in et.key!==void 0&&(Q=""+et.key),et)H.call(et,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(dt[st]=et[st]);var ut=arguments.length-2;if(ut===1)dt.children=vt;else if(1<ut){for(var Mt=Array(ut),Ct=0;Ct<ut;Ct++)Mt[Ct]=arguments[Ct+2];dt.children=Mt}if(U&&U.defaultProps)for(st in ut=U.defaultProps,ut)dt[st]===void 0&&(dt[st]=ut[st]);return G(U,Q,void 0,void 0,null,dt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=D,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:q}},oe.memo=function(U,et){return{$$typeof:p,type:U,compare:et===void 0?null:et}},oe.startTransition=function(U){var et=I.T,vt={};I.T=vt;try{var st=U(),dt=I.S;dt!==null&&dt(vt,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(_t,X)}catch(Q){X(Q)}finally{I.T=et}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(U){return I.H.use(U)},oe.useActionState=function(U,et,vt){return I.H.useActionState(U,et,vt)},oe.useCallback=function(U,et){return I.H.useCallback(U,et)},oe.useContext=function(U){return I.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,et){return I.H.useDeferredValue(U,et)},oe.useEffect=function(U,et,vt){var st=I.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return st.useEffect(U,et)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(U,et,vt){return I.H.useImperativeHandle(U,et,vt)},oe.useInsertionEffect=function(U,et){return I.H.useInsertionEffect(U,et)},oe.useLayoutEffect=function(U,et){return I.H.useLayoutEffect(U,et)},oe.useMemo=function(U,et){return I.H.useMemo(U,et)},oe.useOptimistic=function(U,et){return I.H.useOptimistic(U,et)},oe.useReducer=function(U,et,vt){return I.H.useReducer(U,et,vt)},oe.useRef=function(U){return I.H.useRef(U)},oe.useState=function(U){return I.H.useState(U)},oe.useSyncExternalStore=function(U,et,vt){return I.H.useSyncExternalStore(U,et,vt)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.1.0",oe}var c_;function yd(){return c_||(c_=1,qf.exports=eS()),qf.exports}var Vn=yd(),Yf={exports:{}},bo={},jf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function nS(){return u_||(u_=1,function(o){function t(N,q){var X=N.length;N.push(q);t:for(;0<X;){var _t=X-1>>>1,U=N[_t];if(0<l(U,q))N[_t]=q,N[X]=U,X=_t;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var q=N[0],X=N.pop();if(X!==q){N[0]=X;t:for(var _t=0,U=N.length,et=U>>>1;_t<et;){var vt=2*(_t+1)-1,st=N[vt],dt=vt+1,Q=N[dt];if(0>l(st,X))dt<U&&0>l(Q,st)?(N[_t]=Q,N[dt]=X,_t=dt):(N[_t]=st,N[vt]=X,_t=vt);else if(dt<U&&0>l(Q,X))N[_t]=Q,N[dt]=X,_t=dt;else break t}}return q}function l(N,q){var X=N.sortIndex-q.sortIndex;return X!==0?X:N.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function C(N){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=N)r(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function I(N){if(R=!1,C(N),!b)if(i(m)!==null)b=!0,H||(H=!0,ht());else{var q=i(p);q!==null&&ct(I,q.startTime-N)}}var H=!1,G=-1,K=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<K)}function z(){if(y=!1,H){var N=o.unstable_now();D=N;var q=!0;try{t:{b=!1,R&&(R=!1,B(G),G=-1),M=!0;var X=x;try{e:{for(C(N),v=i(m);v!==null&&!(v.expirationTime>N&&w());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,x=v.priorityLevel;var U=_t(v.expirationTime<=N);if(N=o.unstable_now(),typeof U=="function"){v.callback=U,C(N),q=!0;break e}v===i(m)&&r(m),C(N)}else r(m);v=i(m)}if(v!==null)q=!0;else{var et=i(p);et!==null&&ct(I,et.startTime-N),q=!1}}break t}finally{v=null,x=X,M=!1}q=void 0}}finally{q?ht():H=!1}}}var ht;if(typeof O=="function")ht=function(){O(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,at=Y.port2;Y.port1.onmessage=z,ht=function(){at.postMessage(null)}}else ht=function(){_(z,0)};function ct(N,q){G=_(function(){N(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(N){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var X=x;x=q;try{return N()}finally{x=X}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=x;x=N;try{return q()}finally{x=X}},o.unstable_scheduleCallback=function(N,q,X){var _t=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_t+X:_t):X=_t,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=X+U,N={id:g++,callback:q,priorityLevel:N,startTime:X,expirationTime:U,sortIndex:-1},X>_t?(N.sortIndex=X,t(p,N),i(m)===null&&N===i(p)&&(R?(B(G),G=-1):R=!0,ct(I,X-_t))):(N.sortIndex=U,t(m,N),b||M||(b=!0,H||(H=!0,ht()))),N},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(N){var q=x;return function(){var X=x;x=q;try{return N.apply(this,arguments)}finally{x=X}}}}(Zf)),Zf}var f_;function iS(){return f_||(f_=1,jf.exports=nS()),jf.exports}var Kf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function aS(){if(h_)return An;h_=1;var o=yd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.0",An}var d_;function rS(){if(d_)return Kf.exports;d_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Kf.exports=aS(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function sS(){if(p_)return bo;p_=1;var o=iS(),t=yd(),i=rS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function ht(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case O:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var ct=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},_t=[],U=-1;function et(e){return{current:e}}function vt(e){0>U||(e.current=_t[U],_t[U]=null,U--)}function st(e,n){U++,_t[U]=e.current,e.current=n}var dt=et(null),Q=et(null),ut=et(null),Mt=et(null);function Ct(e,n){switch(st(ut,n),st(Q,e),st(dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Og(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Og(n),e=Pg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(dt),st(dt,e)}function Bt(){vt(dt),vt(Q),vt(ut)}function ee(e){e.memoizedState!==null&&st(Mt,e);var n=dt.current,a=Pg(n,e.type);n!==a&&(st(Q,e),st(dt,a))}function Ge(e){Q.current===e&&(vt(dt),vt(Q)),Mt.current===e&&(vt(Mt),xo._currentValue=X)}var me=Object.prototype.hasOwnProperty,F=o.unstable_scheduleCallback,we=o.unstable_cancelCallback,Kt=o.unstable_shouldYield,Me=o.unstable_requestPaint,Ft=o.unstable_now,Ve=o.unstable_getCurrentPriorityLevel,Ht=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,je=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,nt=o.unstable_setDisableYieldValue,pt=null,yt=null;function ft(e){if(typeof E=="function"&&nt(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(pt,e)}catch{}}var Pt=Math.clz32?Math.clz32:qt,Rt=Math.log,Xt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var Et=256,Lt=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=jt(s):(S&=T,S!==0?c=jt(S):a||(a=T&~e,a!==0&&(c=jt(a))))):(T=s&~f,T!==0?c=jt(T):S!==0?c=jt(S):a||(a=s&~e,a!==0&&(c=jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var mt=31-Pt(a),xt=1<<mt;T[mt]=0,P[mt]=-1;var it=tt[mt];if(it!==null)for(tt[mt]=null,mt=0;mt<it.length;mt++){var rt=it[mt];rt!==null&&(rt.lane&=-536870913)}a&=~xt}s!==0&&St(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function St(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:t_(e.type))}function di(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+ln,Qe="__reactProps$"+ln,Ei="__reactContainer$"+ln,Sr="__reactEvents$"+ln,Xo="__reactListeners$"+ln,yr="__reactHandles$"+ln,Ds="__reactResources$"+ln,Ti="__reactMarker$"+ln;function Mr(e){delete e[cn],delete e[Qe],delete e[Sr],delete e[Xo],delete e[yr]}function Bi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Fg(e);e!==null;){if(a=e[cn])return a;e=Fg(e)}return n}e=a,a=e.parentNode}return null}function oa(e){if(e=e[cn]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Va(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function la(e){var n=e[Ds];return n||(n=e[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function an(e){e[Ti]=!0}var Wo=new Set,qo={};function A(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(qo[e]=n,e=0;e<n.length;e++)Wo.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Z={};function bt(e){return me.call(Z,e)?!0:me.call(lt,e)?!1:ot.test(e)?Z[e]=!0:(lt[e]=!0,!1)}function Ut(e,n,a){if(bt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Qt,$t;function Wt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+$t}var ce=!1;function Te(e,n){if(!e||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(rt){var it=rt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(rt){it=rt}e.call(xt.prototype)}}else{try{throw Error()}catch(rt){it=rt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var P=S.split(`
`),tt=T.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===tt.length)for(s=P.length-1,c=tt.length-1;1<=s&&0<=c&&P[s]!==tt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==tt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==tt[c]){var mt=`
`+P[s].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=s&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function We(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Wt("Activity");default:return""}}function Le(e){try{var n="";do n+=We(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=Zt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=Xe(e))}function En(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Zt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function pn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,a,s,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ue(n)):e.value!==""+ue(n)&&(e.value=""+ue(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,S,ue(n)):a!=null?Tn(e,S,ue(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ue(T):e.removeAttribute("name")}function Un(e,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Tn(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Je(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+ue(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ue(a):""}function Er(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var K0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||K0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Od(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Od(e,f,n[f])}function kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return J0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Xc=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tr=null,br=null;function zd(e){var n=oa(e);if(n&&(e=n.stateNode)){var a=e[Qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Qe]||null;if(!c)throw Error(r(90));Fe(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&En(s)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Je(e,!!a.multiple,n,!1)}}}var qc=!1;function Bd(e,n,a){if(qc)return e(n,a);qc=!0;try{var s=e(n);return s}finally{if(qc=!1,(Tr!==null||br!==null)&&(Ll(),Tr&&(n=Tr,e=br,br=Tr=null,zd(n),e)))for(n=0;n<e.length;n++)zd(e[n])}}function Us(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Qe]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Ii)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Yc=!1}var ca=null,jc=null,jo=null;function Id(){if(jo)return jo;var e,n=jc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return jo=c.slice(e,1<s?1-s:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Fd(){return!1}function In(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Fd,this.isPropagationStopped=Fd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=In(ka),Ns=g({},ka,{view:0,detail:0}),$0=In(Ns),Zc,Kc,Os,Jo=g({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Os&&(Os&&e.type==="mousemove"?(Zc=e.screenX-Os.screenX,Kc=e.screenY-Os.screenY):Kc=Zc=0,Os=e),Zc)},movementY:function(e){return"movementY"in e?e.movementY:Kc}}),Hd=In(Jo),tv=g({},Jo,{dataTransfer:0}),ev=In(tv),nv=g({},Ns,{relatedTarget:0}),Qc=In(nv),iv=g({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),av=In(iv),rv=g({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sv=In(rv),ov=g({},ka,{data:0}),Gd=In(ov),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=uv[e])?!!n[e]:!1}function Jc(){return fv}var hv=g({},Ns,{key:function(e){if(e.key){var n=lv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dv=In(hv),pv=g({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=In(pv),mv=g({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),gv=In(mv),_v=g({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=In(_v),xv=g({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=In(xv),yv=g({},ka,{newState:0,oldState:0}),Mv=In(yv),Ev=[9,13,27,32],$c=Ii&&"CompositionEvent"in window,Ps=null;Ii&&"documentMode"in document&&(Ps=document.documentMode);var Tv=Ii&&"TextEvent"in window&&!Ps,kd=Ii&&(!$c||Ps&&8<Ps&&11>=Ps),Xd=" ",Wd=!1;function qd(e,n){switch(e){case"keyup":return Ev.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function bv(e,n){switch(e){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(Wd=!0,Xd);case"textInput":return e=n.data,e===Xd&&Wd?null:e;default:return null}}function Av(e,n){if(Ar)return e==="compositionend"||!$c&&qd(e,n)?(e=Id(),jo=jc=ca=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rv[e.type]:n==="textarea"}function Zd(e,n,a,s){Tr?br?br.push(s):br=[s]:Tr=s,n=Il(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var zs=null,Bs=null;function wv(e){Cg(e,0)}function $o(e){var n=Va(e);if(En(n))return e}function Kd(e,n){if(e==="change")return n}var Qd=!1;if(Ii){var tu;if(Ii){var eu="oninput"in document;if(!eu){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),eu=typeof Jd.oninput=="function"}tu=eu}else tu=!1;Qd=tu&&(!document.documentMode||9<document.documentMode)}function $d(){zs&&(zs.detachEvent("onpropertychange",tp),Bs=zs=null)}function tp(e){if(e.propertyName==="value"&&$o(Bs)){var n=[];Zd(n,Bs,e,Wc(e)),Bd(wv,n)}}function Cv(e,n,a){e==="focusin"?($d(),zs=n,Bs=a,zs.attachEvent("onpropertychange",tp)):e==="focusout"&&$d()}function Dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Bs)}function Uv(e,n){if(e==="click")return $o(n)}function Lv(e,n){if(e==="input"||e==="change")return $o(n)}function Nv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Nv;function Is(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!me.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function np(e,n){var a=ep(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ep(a)}}function ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ov=Ii&&"documentMode"in document&&11>=document.documentMode,Rr=null,iu=null,Fs=null,au=!1;function rp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Rr==null||Rr!==pi(s)||(s=Rr,"selectionStart"in s&&nu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Fs&&Is(Fs,s)||(Fs=s,s=Il(iu,"onSelect"),0<s.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Rr)))}function Xa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var wr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},ru={},sp={};Ii&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Wa(e){if(ru[e])return ru[e];if(!wr[e])return e;var n=wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return ru[e]=n[a];return e}var op=Wa("animationend"),lp=Wa("animationiteration"),cp=Wa("animationstart"),Pv=Wa("transitionrun"),zv=Wa("transitionstart"),Bv=Wa("transitioncancel"),up=Wa("transitionend"),fp=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function mi(e,n){fp.set(e,n),A(n,[e])}var hp=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=hp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Le(n)},hp.set(e,n),n)}return{value:e,source:n,stack:Le(n)}}var ni=[],Cr=0,ou=0;function tl(){for(var e=Cr,n=ou=Cr=0;n<e;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&dp(a,c,f)}}function el(e,n,a,s){ni[Cr++]=e,ni[Cr++]=n,ni[Cr++]=a,ni[Cr++]=s,ou|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function lu(e,n,a,s){return el(e,n,a,s),nl(e)}function Dr(e,n){return el(e,null,null,n),nl(e)}function dp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function nl(e){if(50<uo)throw uo=0,mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ur={};function Iv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,s){return new Iv(e,n,a,s)}function cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function pp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function il(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")cu(e)&&(S=1);else if(typeof e=="string")S=Hx(e,a,dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Xn(31,a,n,c),e.elementType=D,e.lanes=f,e;case b:return qa(a.children,c,f,n);case R:S=8,c|=24;break;case y:return e=Xn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case I:return e=Xn(13,a,n,c),e.elementType=I,e.lanes=f,e;case H:return e=Xn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:S=10;break t;case B:S=9;break t;case C:S=11;break t;case G:S=14;break t;case K:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Xn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function qa(e,n,a,s){return e=Xn(7,e,s,n),e.lanes=a,e}function uu(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function fu(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lr=[],Nr=0,al=null,rl=0,ii=[],ai=0,Ya=null,Hi=1,Gi="";function ja(e,n){Lr[Nr++]=rl,Lr[Nr++]=al,al=e,rl=n}function mp(e,n,a){ii[ai++]=Hi,ii[ai++]=Gi,ii[ai++]=Ya,Ya=e;var s=Hi;e=Gi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Hi=1<<32-Pt(n)+c|a<<c|s,Gi=f+e}else Hi=1<<f|a<<c|s,Gi=e}function hu(e){e.return!==null&&(ja(e,1),mp(e,1,0))}function du(e){for(;e===al;)al=Lr[--Nr],Lr[Nr]=null,rl=Lr[--Nr],Lr[Nr]=null;for(;e===Ya;)Ya=ii[--ai],ii[ai]=null,Gi=ii[--ai],ii[ai]=null,Hi=ii[--ai],ii[ai]=null}var Ln=null,$e=null,Re=!1,Za=null,bi=!1,pu=Error(r(519));function Ka(e){var n=Error(r(418,""));throw Vs(ei(n,e)),pu}function gp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[cn]=e,n[Qe]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)ve(ho[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Un(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Er(n,s.value,s.defaultValue,s.children),ge(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ng(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Fl),n=!0):n=!1,n||Ka(e)}function _p(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Ln=Ln.return}}function Hs(e){if(e!==Ln)return!1;if(!Re)return _p(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Uf(e.type,e.memoizedProps)),a=!a),a&&$e&&Ka(e),_p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){$e=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}$e=null}}else n===27?(n=$e,ba(e.type)?(e=Pf,Pf=null,$e=e):$e=n):$e=Ln?_i(e.stateNode.nextSibling):null;return!0}function Gs(){$e=Ln=null,Re=!1}function vp(){var e=Za;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),Za=null),e}function Vs(e){Za===null?Za=[e]:Za.push(e)}var mu=et(null),Qa=null,Vi=null;function ua(e,n,a){st(mu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=mu.current,vt(mu)}function gu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function _u(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),gu(f.return,a,e),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),gu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function ks(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;kn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===Mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&_u(n,e,a,s),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Qa=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return xp(Qa,e)}function ol(e,n){return Qa===null&&Ja(e),xp(e,n)}function xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(r(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var Fv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Hv=o.unstable_scheduleCallback,Gv=o.unstable_NormalPriority,un={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new Fv,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&Hv(Gv,function(){e.controller.abort()})}var Ws=null,xu=0,Or=0,Pr=null;function Vv(e,n){if(Ws===null){var a=Ws=[];xu=0,Or=Mf(),Pr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xu++,n.then(Sp,Sp),n}function Sp(){if(--xu===0&&Ws!==null){Pr!==null&&(Pr.status="fulfilled");var e=Ws;Ws=null,Or=0,Pr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function kv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var yp=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vv(e,n),yp!==null&&yp(e,n)};var $a=et(null);function Su(){var e=$a.current;return e!==null?e:ke.pooledCache}function ll(e,n){n===null?st($a,$a.current):st($a,n.pool)}function Mp(){var e=Su();return e===null?null:{parent:un._currentValue,pool:e}}var qs=Error(r(460)),Ep=Error(r(474)),cl=Error(r(542)),yu={then:function(){}};function Tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ul(){}function bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ul,ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rp(e),e;default:if(typeof n.status=="string")n.then(ul,ul);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rp(e),e}throw Ys=n,qs}}var Ys=null;function Ap(){if(Ys===null)throw Error(r(459));var e=Ys;return Ys=null,e}function Rp(e){if(e===qs||e===cl)throw Error(r(483))}var fa=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=nl(e),dp(e,null,a),n}return el(e,s,n,a),nl(e)}function js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Vt(e,a)}}function Tu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function Zs(){if(bu){var e=Pr;if(e!==null)throw e}}function Ks(e,n,a,s){bu=!1;var c=e.updateQueue;fa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,tt=P.next;P.next=null,S===null?f=tt:S.next=tt,S=P;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,T=mt.lastBaseUpdate,T!==S&&(T===null?mt.firstBaseUpdate=tt:T.next=tt,mt.lastBaseUpdate=P))}if(f!==null){var xt=c.baseState;S=0,mt=tt=P=null,T=f;do{var it=T.lane&-536870913,rt=it!==T.lane;if(rt?(ye&it)===it:(s&it)===it){it!==0&&it===Or&&(bu=!0),mt!==null&&(mt=mt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,Jt=T;it=n;var Pe=a;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){xt=ne.call(Pe,xt,it);break t}xt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,it=typeof ne=="function"?ne.call(Pe,xt,it):ne,it==null)break t;xt=g({},xt,it);break t;case 2:fa=!0}}it=T.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},mt===null?(tt=mt=rt,P=xt):mt=mt.next=rt,S|=it;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);mt===null&&(P=xt),c.baseState=P,c.firstBaseUpdate=tt,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),ya|=S,e.lanes=S,e.memoizedState=xt}}function wp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Cp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wp(a[e],n)}var zr=et(null),fl=et(0);function Dp(e,n){e=Ki,st(fl,e),st(zr,n),Ki=e|n.baseLanes}function Au(){st(fl,Ki),st(zr,zr.current)}function Ru(){Ki=fl.current,vt(zr),vt(fl)}var pa=0,de=null,Ne=null,rn=null,hl=!1,Br=!1,tr=!1,dl=0,Qs=0,Ir=null,Xv=0;function en(){throw Error(r(321))}function wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Cu(e,n,a,s,c,f){return pa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?dm:pm,tr=!1,f=a(s,c),tr=!1,Br&&(f=Lp(n,a,s,c)),Up(e),f}function Up(e){N.H=xl;var n=Ne!==null&&Ne.next!==null;if(pa=0,rn=Ne=de=null,hl=!1,Qs=0,Ir=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&sl(e)&&(mn=!0))}function Lp(e,n,a,s){de=e;var c=0;do{if(Br&&(Ir=null),Qs=0,Br=!1,25<=c)throw Error(r(301));if(c+=1,rn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Qv,f=n(a,s)}while(Br);return f}function Wv(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Js(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),n}function Du(){var e=dl!==0;return dl=0,e}function Uu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Lu(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}pa=0,rn=Ne=de=null,Br=!1,Qs=dl=0,Ir=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?de.memoizedState=rn=e:rn=rn.next=e,rn}function sn(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=rn===null?de.memoizedState:rn.next;if(n!==null)rn=n,Ne=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},rn===null?de.memoizedState=rn=e:rn=rn.next=e}return rn}function Nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Js(e){var n=Qs;return Qs+=1,Ir===null&&(Ir=[]),e=bp(Ir,e,n),n=de,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?dm:pm),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Js(e);if(e.$$typeof===O)return bn(e)}throw Error(r(438,String(e)))}function Ou(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=w;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=sn();return Pu(n,Ne,e)}function Pu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,P=null,tt=n,mt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(ye&xt)===xt:(pa&xt)===xt){var it=tt.revertLane;if(it===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Or&&(mt=!0);else if((pa&it)===it){tt=tt.next,it===Or&&(mt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(T=P=xt,S=f):P=P.next=xt,de.lanes|=it,ya|=it;xt=tt.action,tr&&a(f,xt),f=tt.hasEagerState?tt.eagerState:a(f,xt)}else it={lane:xt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(T=P=it,S=f):P=P.next=it,de.lanes|=xt,ya|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(P===null?S=f:P.next=T,!kn(f,e.memoizedState)&&(mn=!0,mt&&(a=Pr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function zu(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);kn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Np(e,n,a){var s=de,c=sn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!kn((Ne||c).memoizedState,a);S&&(c.memoizedState=a,mn=!0),c=c.queue;var T=zp.bind(null,s,c,e);if($s(2048,8,T,[e]),c.getSnapshot!==n||S||rn!==null&&rn.memoizedState.tag&1){if(s.flags|=2048,Fr(9,gl(),Pp.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(pa&124)!==0||Op(s,n,a)}return a}function Op(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Nu(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Pp(e,n,a,s){n.value=a,n.getSnapshot=s,Bp(n)&&Ip(e)}function zp(e,n,a){return a(function(){Bp(n)&&Ip(e)})}function Bp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Ip(e){var n=Dr(e,2);n!==null&&Zn(n,e,2)}function Bu(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),tr){ft(!0);try{a()}finally{ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Fp(e,n,a,s){return e.baseState=a,Pu(e,Ne,typeof s=="function"?s:Xi)}function qv(e,n,a,s,c){if(vl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=N.T,S={};N.T=S;try{var T=a(c,s),P=N.S;P!==null&&P(S,T),Gp(e,n,T)}catch(tt){Iu(e,n,tt)}finally{N.T=f}}else try{f=a(c,s),Gp(e,n,f)}catch(tt){Iu(e,n,tt)}}function Gp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Vp(e,n,s)},function(s){return Iu(e,n,s)}):Vp(e,n,a)}function Vp(e,n,a){n.status="fulfilled",n.value=a,kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Hp(e,a)))}function Iu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==s)}e.action=null}function kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xp(e,n){return n}function Wp(e,n){if(Re){var a=ke.formState;if(a!==null){t:{var s=de;if(Re){if($e){e:{for(var c=$e,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){$e=_i(c.nextSibling),s=c.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:n},a.queue=s,a=um.bind(null,de,s),s.dispatch=a,s=Bu(!1),f=ku.bind(null,de,!1,s.queue),s=Fn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=qv.bind(null,de,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function qp(e){var n=sn();return Yp(n,Ne,e)}function Yp(e,n,a){if(n=Pu(e,n,Xp)[0],e=ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Js(n)}catch(S){throw S===qs?cl:S}else s=n;n=sn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Fr(9,gl(),Yv.bind(null,c,a),null)),[s,f,e]}function Yv(e,n){e.action=n}function jp(e){var n=sn(),a=Ne;if(a!==null)return Yp(n,a,e);sn(),n=n.memoizedState,a=sn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Fr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Nu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function gl(){return{destroy:void 0,resource:void 0}}function Zp(){return sn().memoizedState}function _l(e,n,a,s){var c=Fn();s=s===void 0?null:s,de.flags|=e,c.memoizedState=Fr(1|n,gl(),a,s)}function $s(e,n,a,s){var c=sn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ne!==null&&s!==null&&wu(s,Ne.memoizedState.deps)?c.memoizedState=Fr(n,f,a,s):(de.flags|=e,c.memoizedState=Fr(1|n,f,a,s))}function Kp(e,n){_l(8390656,8,e,n)}function Qp(e,n){$s(2048,8,e,n)}function Jp(e,n){return $s(4,2,e,n)}function $p(e,n){return $s(4,4,e,n)}function tm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function em(e,n,a){a=a!=null?a.concat([e]):null,$s(4,4,tm.bind(null,n,e),a)}function Fu(){}function nm(e,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&wu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function im(e,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&wu(n,s[1]))return s[0];if(s=e(),tr){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[s,n],s}function Hu(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=sg(),de.lanes|=e,ya|=e,a)}function am(e,n,a,s){return kn(a,n)?a:zr.current!==null?(e=Hu(e,a,s),kn(e,n)||(mn=!0),e):(pa&42)===0?(mn=!0,e.memoizedState=a):(e=sg(),de.lanes|=e,ya|=e,n)}function rm(e,n,a,s,c){var f=q.p;q.p=f!==0&&8>f?f:8;var S=N.T,T={};N.T=T,ku(e,!1,n,a);try{var P=c(),tt=N.S;if(tt!==null&&tt(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var mt=kv(P,s);to(e,n,mt,jn(e))}else to(e,n,s,jn(e))}catch(xt){to(e,n,{then:function(){},status:"rejected",reason:xt},jn())}finally{q.p=f,N.T=S}}function jv(){}function Gu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=sm(e).queue;rm(e,c,n,X,a===null?jv:function(){return om(e),a(s)})}function sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function om(e){var n=sm(e).next.queue;to(e,n,{},jn())}function Vu(){return bn(xo)}function lm(){return sn().memoizedState}function cm(){return sn().memoizedState}function Zv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=ha(a);var s=da(n,e,a);s!==null&&(Zn(s,n,a),js(s,n,a)),n={cache:vu()},e.payload=n;return}n=n.return}}function Kv(e,n,a){var s=jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?fm(n,a):(a=lu(e,n,a,s),a!==null&&(Zn(a,e,s),hm(a,n,s)))}function um(e,n,a){var s=jn();to(e,n,a,s)}function to(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))fm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,S))return el(e,n,c,0),ke===null&&tl(),!1}catch{}finally{}if(a=lu(e,n,c,s),a!==null)return Zn(a,e,s),hm(a,n,s),!0}return!1}function ku(e,n,a,s){if(s={lane:2,revertLane:Mf(),action:s,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(n)throw Error(r(479))}else n=lu(e,a,s,2),n!==null&&Zn(n,e,2)}function vl(e){var n=e.alternate;return e===de||n!==null&&n===de}function fm(e,n){Br=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function hm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Vt(e,a)}}var xl={readContext:bn,use:pl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},dm={readContext:bn,use:pl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:Kp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,tm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var s=e();if(tr){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Fn();if(a!==void 0){var c=a(n);if(tr){ft(!0);try{a(n)}finally{ft(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Kv.bind(null,de,e),[s.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Bu(e);var n=e.queue,a=um.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(e,n){var a=Fn();return Hu(a,e,n)},useTransition:function(){var e=Bu(!1);return e=rm.bind(null,de,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=de,c=Fn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(ye&124)!==0||Op(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Kp(zp.bind(null,s,f,e),[e]),s.flags|=2048,Fr(9,gl(),Pp.bind(null,s,f,a,n),null),a},useId:function(){var e=Fn(),n=ke.identifierPrefix;if(Re){var a=Gi,s=Hi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Xv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ou,useCacheRefresh:function(){return Fn().memoizedState=Zv.bind(null,de)}},pm={readContext:bn,use:pl,useCallback:nm,useContext:bn,useEffect:Qp,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:ml,useRef:Zp,useState:function(){return ml(Xi)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=sn();return am(a,Ne.memoizedState,e,n)},useTransition:function(){var e=ml(Xi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Vu,useFormState:qp,useActionState:qp,useOptimistic:function(e,n){var a=sn();return Fp(a,Ne,e,n)},useMemoCache:Ou,useCacheRefresh:cm},Qv={readContext:bn,use:pl,useCallback:nm,useContext:bn,useEffect:Qp,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:zu,useRef:Zp,useState:function(){return zu(Xi)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=sn();return Ne===null?Hu(a,e,n):am(a,Ne.memoizedState,e,n)},useTransition:function(){var e=zu(Xi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Vu,useFormState:jp,useActionState:jp,useOptimistic:function(e,n){var a=sn();return Ne!==null?Fp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:cm},Hr=null,eo=0;function Sl(e){var n=eo;return eo+=1,Hr===null&&(Hr=[]),bp(Hr,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function mm(e){var n=e._init;return n(e._payload)}function gm(e){function n(j,V){if(e){var $=j.deletions;$===null?(j.deletions=[V],j.flags|=16):$.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function s(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=Fi(j,V),j.index=0,j.sibling=null,j}function f(j,V,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<V?(j.flags|=67108866,V):$):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,V,$,gt){return V===null||V.tag!==6?(V=uu($,j.mode,gt),V.return=j,V):(V=c(V,$),V.return=j,V)}function P(j,V,$,gt){var Gt=$.type;return Gt===b?mt(j,V,$.props.children,gt,$.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===K&&mm(Gt)===V.type)?(V=c(V,$.props),no(V,$),V.return=j,V):(V=il($.type,$.key,$.props,null,j.mode,gt),no(V,$),V.return=j,V)}function tt(j,V,$,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=fu($,j.mode,gt),V.return=j,V):(V=c(V,$.children||[]),V.return=j,V)}function mt(j,V,$,gt,Gt){return V===null||V.tag!==7?(V=qa($,j.mode,gt,Gt),V.return=j,V):(V=c(V,$),V.return=j,V)}function xt(j,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=uu(""+V,j.mode,$),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return $=il(V.type,V.key,V.props,null,j.mode,$),no($,V),$.return=j,$;case M:return V=fu(V,j.mode,$),V.return=j,V;case K:var gt=V._init;return V=gt(V._payload),xt(j,V,$)}if(ct(V)||ht(V))return V=qa(V,j.mode,$,null),V.return=j,V;if(typeof V.then=="function")return xt(j,Sl(V),$);if(V.$$typeof===O)return xt(j,ol(j,V),$);yl(j,V)}return null}function it(j,V,$,gt){var Gt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Gt!==null?null:T(j,V,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Gt?P(j,V,$,gt):null;case M:return $.key===Gt?tt(j,V,$,gt):null;case K:return Gt=$._init,$=Gt($._payload),it(j,V,$,gt)}if(ct($)||ht($))return Gt!==null?null:mt(j,V,$,gt,null);if(typeof $.then=="function")return it(j,V,Sl($),gt);if($.$$typeof===O)return it(j,V,ol(j,$),gt);yl(j,$)}return null}function rt(j,V,$,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get($)||null,T(V,j,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case x:return j=j.get(gt.key===null?$:gt.key)||null,P(V,j,gt,Gt);case M:return j=j.get(gt.key===null?$:gt.key)||null,tt(V,j,gt,Gt);case K:var pe=gt._init;return gt=pe(gt._payload),rt(j,V,$,gt,Gt)}if(ct(gt)||ht(gt))return j=j.get($)||null,mt(V,j,gt,Gt,null);if(typeof gt.then=="function")return rt(j,V,$,Sl(gt),Gt);if(gt.$$typeof===O)return rt(j,V,$,ol(V,gt),Gt);yl(V,gt)}return null}function ne(j,V,$,gt){for(var Gt=null,pe=null,Yt=V,te=V=0,_n=null;Yt!==null&&te<$.length;te++){Yt.index>te?(_n=Yt,Yt=null):_n=Yt.sibling;var be=it(j,Yt,$[te],gt);if(be===null){Yt===null&&(Yt=_n);break}e&&Yt&&be.alternate===null&&n(j,Yt),V=f(be,V,te),pe===null?Gt=be:pe.sibling=be,pe=be,Yt=_n}if(te===$.length)return a(j,Yt),Re&&ja(j,te),Gt;if(Yt===null){for(;te<$.length;te++)Yt=xt(j,$[te],gt),Yt!==null&&(V=f(Yt,V,te),pe===null?Gt=Yt:pe.sibling=Yt,pe=Yt);return Re&&ja(j,te),Gt}for(Yt=s(Yt);te<$.length;te++)_n=rt(Yt,j,te,$[te],gt),_n!==null&&(e&&_n.alternate!==null&&Yt.delete(_n.key===null?te:_n.key),V=f(_n,V,te),pe===null?Gt=_n:pe.sibling=_n,pe=_n);return e&&Yt.forEach(function(Da){return n(j,Da)}),Re&&ja(j,te),Gt}function Jt(j,V,$,gt){if($==null)throw Error(r(151));for(var Gt=null,pe=null,Yt=V,te=V=0,_n=null,be=$.next();Yt!==null&&!be.done;te++,be=$.next()){Yt.index>te?(_n=Yt,Yt=null):_n=Yt.sibling;var Da=it(j,Yt,be.value,gt);if(Da===null){Yt===null&&(Yt=_n);break}e&&Yt&&Da.alternate===null&&n(j,Yt),V=f(Da,V,te),pe===null?Gt=Da:pe.sibling=Da,pe=Da,Yt=_n}if(be.done)return a(j,Yt),Re&&ja(j,te),Gt;if(Yt===null){for(;!be.done;te++,be=$.next())be=xt(j,be.value,gt),be!==null&&(V=f(be,V,te),pe===null?Gt=be:pe.sibling=be,pe=be);return Re&&ja(j,te),Gt}for(Yt=s(Yt);!be.done;te++,be=$.next())be=rt(Yt,j,te,be.value,gt),be!==null&&(e&&be.alternate!==null&&Yt.delete(be.key===null?te:be.key),V=f(be,V,te),pe===null?Gt=be:pe.sibling=be,pe=be);return e&&Yt.forEach(function(Jx){return n(j,Jx)}),Re&&ja(j,te),Gt}function Pe(j,V,$,gt){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Gt=$.key;V!==null;){if(V.key===Gt){if(Gt=$.type,Gt===b){if(V.tag===7){a(j,V.sibling),gt=c(V,$.props.children),gt.return=j,j=gt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===K&&mm(Gt)===V.type){a(j,V.sibling),gt=c(V,$.props),no(gt,$),gt.return=j,j=gt;break t}a(j,V);break}else n(j,V);V=V.sibling}$.type===b?(gt=qa($.props.children,j.mode,gt,$.key),gt.return=j,j=gt):(gt=il($.type,$.key,$.props,null,j.mode,gt),no(gt,$),gt.return=j,j=gt)}return S(j);case M:t:{for(Gt=$.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(j,V.sibling),gt=c(V,$.children||[]),gt.return=j,j=gt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}gt=fu($,j.mode,gt),gt.return=j,j=gt}return S(j);case K:return Gt=$._init,$=Gt($._payload),Pe(j,V,$,gt)}if(ct($))return ne(j,V,$,gt);if(ht($)){if(Gt=ht($),typeof Gt!="function")throw Error(r(150));return $=Gt.call($),Jt(j,V,$,gt)}if(typeof $.then=="function")return Pe(j,V,Sl($),gt);if($.$$typeof===O)return Pe(j,V,ol(j,$),gt);yl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(j,V.sibling),gt=c(V,$),gt.return=j,j=gt):(a(j,V),gt=uu($,j.mode,gt),gt.return=j,j=gt),S(j)):a(j,V)}return function(j,V,$,gt){try{eo=0;var Gt=Pe(j,V,$,gt);return Hr=null,Gt}catch(Yt){if(Yt===qs||Yt===cl)throw Yt;var pe=Xn(29,Yt,null,j.mode);return pe.lanes=gt,pe.return=j,pe}finally{}}}var Gr=gm(!0),_m=gm(!1),ri=et(null),Ai=null;function ma(e){var n=e.alternate;st(fn,fn.current&1),st(ri,e),Ai===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(Ai=e)}function vm(e){if(e.tag===22){if(st(fn,fn.current),st(ri,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else ga()}function ga(){st(fn,fn.current),st(ri,ri.current)}function Wi(e){vt(ri),Ai===e&&(Ai=null),vt(fn)}var fn=et(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Of(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Xu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=jn(),c=ha(s);c.payload=n,a!=null&&(c.callback=a),n=da(e,c,s),n!==null&&(Zn(n,e,s),js(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=jn(),c=ha(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(e,c,s),n!==null&&(Zn(n,e,s),js(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(e,s,a),n!==null&&(Zn(n,e,a),js(n,e,a))}};function xm(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Is(a,s)||!Is(c,f):!0}function Sm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Wu.enqueueReplaceState(n,n.state,null)}function er(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ym(e){El(e)}function Mm(e){console.error(e)}function Em(e){El(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function bm(e){return e=ha(e),e.tag=3,e}function Am(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Tm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Tm(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Jv(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ks(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ai===null?_f():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),xf(e,s,c)),!1;case 22:return a.flags|=65536,s===yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),xf(e,s,c)),!1}throw Error(r(435,a.tag))}return xf(e,s,c),_f(),!1}if(Re)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==pu&&(e=Error(r(422),{cause:s}),Vs(ei(e,a)))):(s!==pu&&(n=Error(r(423),{cause:s}),Vs(ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ei(s,a),c=qu(e.stateNode,s,c),Tu(e,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),co===null?co=[f]:co.push(f),tn!==4&&(tn=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=qu(a.stateNode,s,e),Tu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bm(c),Am(c,e,a,s),Tu(a,c),!1}a=a.return}while(a!==null);return!1}var Rm=Error(r(461)),mn=!1;function Sn(e,n,a,s){n.child=e===null?_m(n,null,a,s):Gr(n,e.child,a,s)}function wm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return Ja(n),s=Cu(e,n,a,S,f,c),T=Du(),e!==null&&!mn?(Uu(e,n,c),qi(e,n,c)):(Re&&T&&hu(n),n.flags|=1,Sn(e,n,s,c),n.child)}function Cm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(e,n,f,s,c)):(e=il(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!tf(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(S,s)&&e.ref===n.ref)return qi(e,n,c)}return n.flags|=1,e=Fi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Dm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Is(f,s)&&e.ref===n.ref)if(mn=!1,n.pendingProps=s=f,tf(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,qi(e,n,c)}return Yu(e,n,a,s,c)}function Um(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Lm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Dp(n,f):Au(),vm(n);else return n.lanes=n.childLanes=536870912,Lm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ll(n,f.cachePool),Dp(n,f),ga(),n.memoizedState=null):(e!==null&&ll(n,null),Au(),ga());return Sn(e,n,c,a),n.child}function Lm(e,n,a,s){var c=Su();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ll(n,null),Au(),vm(n),e!==null&&ks(e,n,s,!0),null}function bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Yu(e,n,a,s,c){return Ja(n),a=Cu(e,n,a,s,void 0,c),s=Du(),e!==null&&!mn?(Uu(e,n,c),qi(e,n,c)):(Re&&s&&hu(n),n.flags|=1,Sn(e,n,a,c),n.child)}function Nm(e,n,a,s,c,f){return Ja(n),n.updateQueue=null,a=Lp(n,s,a,c),Up(e),s=Du(),e!==null&&!mn?(Uu(e,n,f),qi(e,n,f)):(Re&&s&&hu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Om(e,n,a,s,c){if(Ja(n),n.stateNode===null){var f=Ur,S=a.contextType;typeof S=="object"&&S!==null&&(f=bn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Mu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?bn(S):Ur,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Xu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Wu.enqueueReplaceState(f,f.state,null),Ks(n,s,f,c),Zs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=er(a,T);f.props=P;var tt=f.context,mt=a.contextType;S=Ur,typeof mt=="object"&&mt!==null&&(S=bn(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==S)&&Sm(n,f,s,S),fa=!1;var it=n.memoizedState;f.state=it,Ks(n,s,f,c),Zs(),tt=n.memoizedState,T||it!==tt||fa?(typeof xt=="function"&&(Xu(n,a,xt,s),tt=n.memoizedState),(P=fa||xm(n,a,P,s,it,tt,S))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=S,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Eu(e,n),S=n.memoizedProps,mt=er(a,S),f.props=mt,xt=n.pendingProps,it=f.context,tt=a.contextType,P=Ur,typeof tt=="object"&&tt!==null&&(P=bn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xt||it!==P)&&Sm(n,f,s,P),fa=!1,it=n.memoizedState,f.state=it,Ks(n,s,f,c),Zs();var rt=n.memoizedState;S!==xt||it!==rt||fa||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof T=="function"&&(Xu(n,a,T,s),rt=n.memoizedState),(mt=fa||xm(n,a,mt,s,it,rt,P)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=P,s=mt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,bl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Gr(n,e.child,null,c),n.child=Gr(n,null,a,c)):Sn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=qi(e,n,c),e}function Pm(e,n,a,s){return Gs(),n.flags|=256,Sn(e,n,a,s),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(e){return{baseLanes:e,cachePool:Mp()}}function Ku(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function zm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?ma(n):ga(),Re){var T=$e,P;if(P=T){t:{for(P=T,T=bi;P.nodeType!==8;){if(!T){T=null;break t}if(P=_i(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ya!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Ln=n,$e=null,P=!0):P=!1}P||Ka(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Of(T)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return T=s.children,s=s.fallback,c?(ga(),c=n.mode,T=Al({mode:"hidden",children:T},c),s=qa(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=Zu(a),c.childLanes=Ku(e,S,a),n.memoizedState=ju,s):(ma(n),Qu(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Ju(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),c=s.fallback,T=n.mode,s=Al({mode:"visible",children:s.children},T),c=qa(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Gr(n,e.child,null,a),s=n.child,s.memoizedState=Zu(a),s.childLanes=Ku(e,S,a),n.memoizedState=ju,n=c);else if(ma(n),Of(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var tt=S.dgst;S=tt,s=Error(r(419)),s.stack="",s.digest=S,Vs({value:s,source:null,stack:null}),n=Ju(e,n,a)}else if(mn||ks(e,n,a,!1),S=(a&e.childLanes)!==0,mn||S){if(S=ke,S!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Dr(e,s),Zn(S,e,s),Rm;T.data==="$?"||_f(),n=Ju(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,$e=_i(T.nextSibling),Ln=n,Re=!0,Za=null,bi=!1,e!==null&&(ii[ai++]=Hi,ii[ai++]=Gi,ii[ai++]=Ya,Hi=e.id,Gi=e.overflow,Ya=n),n=Qu(n,s.children),n.flags|=4096);return n}return c?(ga(),c=s.fallback,T=n.mode,P=e.child,tt=P.sibling,s=Fi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,tt!==null?c=Fi(tt,c):(c=qa(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=e.child.memoizedState,T===null?T=Zu(a):(P=T.cachePool,P!==null?(tt=un._currentValue,P=P.parent!==tt?{parent:tt,pool:tt}:P):P=Mp(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=Ku(e,S,a),n.memoizedState=ju,s):(ma(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Qu(e,n){return n=Al({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Al(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ju(e,n,a){return Gr(n,e.child,null,a),e=Qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),gu(e.return,n,a)}function $u(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Im(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Sn(e,n,s.children,a),s=fn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bm(e,a,n);else if(e.tag===19)Bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(st(fn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),$u(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}$u(n,!0,a,null,f);break;case"together":$u(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function tf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function $v(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ua(n,un,e.memoizedState.cache),Gs();break;case 27:case 5:ee(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(e,n,a):(ma(n),e=qi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ks(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Im(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),st(fn,fn.current),s)break;return null;case 22:case 23:return n.lanes=0,Um(e,n,a);case 24:ua(n,un,e.memoizedState.cache)}return qi(e,n,a)}function Fm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!tf(e,a)&&(n.flags&128)===0)return mn=!1,$v(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Re&&(n.flags&1048576)!==0&&mp(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")cu(s)?(e=er(s,e),n.tag=1,n=Om(null,n,s,e,a)):(n.tag=0,n=Yu(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===C){n.tag=11,n=wm(null,n,s,e,a);break t}else if(c===G){n.tag=14,n=Cm(null,n,s,e,a);break t}}throw n=at(s)||s,Error(r(306,n,""))}}return n;case 0:return Yu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=er(s,n.pendingProps),Om(e,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Eu(e,n),Ks(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ua(n,un,s),s!==f.cache&&_u(n,[un],a,!0),Zs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pm(e,n,s,a);break t}else if(s!==c){c=ei(Error(r(424)),n),Vs(c),n=Pm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=_i(e.firstChild),Ln=n,Re=!0,Za=null,bi=!0,a=_m(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gs(),s===c){n=qi(e,n,a);break t}Sn(e,n,s,a)}n=n.child}return n;case 26:return bl(e,n),e===null?(a=kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,s=Hl(ut.current).createElement(a),s[cn]=n,s[Qe]=e,Mn(s,a,e),an(s),n.stateNode=s):n.memoizedState=kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&Re&&(s=n.stateNode=Hg(n.type,n.pendingProps,ut.current),Ln=n,bi=!0,c=$e,ba(n.type)?(Pf=c,$e=_i(s.firstChild)):$e=c),Sn(e,n,n.pendingProps.children,a),bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=s=$e)&&(s=Rx(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,Ln=n,$e=_i(s.firstChild),bi=!1,c=!0):c=!1),c||Ka(n)),ee(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,Uf(c,f)?s=null:S!==null&&Uf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(e,n,Wv,null,null,a),xo._currentValue=c),bl(e,n),Sn(e,n,s,a),n.child;case 6:return e===null&&Re&&((e=a=$e)&&(a=wx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Ln=n,$e=null,e=!0):e=!1),e||Ka(n)),null;case 13:return zm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Gr(n,null,s,a):Sn(e,n,s,a),n.child;case 11:return wm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),Sn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Ja(n),c=bn(c),s=s(c),n.flags|=1,Sn(e,n,s,a),n.child;case 14:return Cm(e,n,n.type,n.pendingProps,a);case 15:return Dm(e,n,n.type,n.pendingProps,a);case 19:return Im(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Al(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Um(e,n,a);case 24:return Ja(n),s=bn(un),e===null?(c=Su(),c===null&&(c=ke,f=vu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Mu(n),ua(n,un,c)):((e.lanes&a)!==0&&(Eu(e,n),Ks(n,null,null,a),Zs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,un,s)):(s=f.cache,ua(n,un,s),s!==c.cache&&_u(n,[un],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function Hm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(n)){if(n=ri.current,n!==null&&((ye&4194048)===ye?Ai!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ai))throw Ys=yu,Ep;e.flags|=8192}}function Rl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,Wr|=n)}function io(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function tx(e,n,a){var s=n.pendingProps;switch(du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ki(un),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vp())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ke(n),Hm(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ke(n),Hm(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==s&&Yi(n),Ke(n),n.flags&=-16777217),null;case 27:Ge(n),a=ut.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=dt.current,Hs(n)?gp(n):(e=Hg(c,s,a),n.stateNode=e,Yi(n))}return Ke(n),null;case 5:if(Ge(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(e=dt.current,Hs(n))gp(n);else{switch(c=Hl(ut.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[cn]=n,e[Qe]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ut.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ng(e.nodeValue,a)),e||Ka(n)}else e=Hl(e).createTextNode(s),e[cn]=n,n.stateNode=e}return Ke(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Hs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[cn]=n}else Gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=vp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Ke(n),null;case 4:return Bt(),e===null&&Af(n.stateNode.containerInfo),Ke(n),null;case 10:return ki(n.type),Ke(n),null;case 19:if(vt(fn),c=n.memoizedState,c===null)return Ke(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)io(c,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,io(c,!1),e=f.updateQueue,n.updateQueue=e,Rl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)pp(a,e),a=a.sibling;return st(fn,fn.current&1|2),n.child}e=e.sibling}c.tail!==null&&Ft()>Dl&&(n.flags|=128,s=!0,io(c,!1),n.lanes=4194304)}else{if(!s)if(e=Ml(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Rl(n,e),io(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return Ke(n),null}else 2*Ft()-c.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,s=!0,io(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ft(),n.sibling=null,e=fn.current,st(fn,s?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Wi(n),Ru(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&vt($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(un),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ex(e,n){switch(du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(un),Bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(fn),null;case 4:return Bt(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),Ru(),e!==null&&vt($a),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(un),null;case 25:return null;default:return null}}function Gm(e,n){switch(du(n),n.tag){case 3:ki(un),Bt();break;case 26:case 27:case 5:Ge(n);break;case 4:Bt();break;case 13:Wi(n);break;case 19:vt(fn);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),Ru(),e!==null&&vt($a);break;case 24:ki(un)}}function ao(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){He(n,n.return,T)}}function _a(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var P=a,tt=T;try{tt()}catch(mt){He(c,P,mt)}}}s=s.next}while(s!==f)}}catch(mt){He(n,n.return,mt)}}function Vm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cp(n,a)}catch(s){He(e,e.return,s)}}}function km(e,n,a){a.props=er(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){He(e,n,s)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){He(e,n,c)}}function Ri(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function Xm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function ef(e,n,a){try{var s=e.stateNode;Mx(s,e.type,a,n),s[Qe]=n}catch(c){He(e,e.return,c)}}function Wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function af(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fl));else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(af(e,n,a),e=e.sibling;e!==null;)af(e,n,a),e=e.sibling}function wl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wl(e,n,a),e=e.sibling;e!==null;)wl(e,n,a),e=e.sibling}function qm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[cn]=e,n[Qe]=a}catch(f){He(e,e.return,f)}}var ji=!1,nn=!1,rf=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,gn=null;function nx(e,n){if(e=e.containerInfo,Cf=ql,e=ap(e),nu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,P=-1,tt=0,mt=0,xt=e,it=null;e:for(;;){for(var rt;xt!==a||c!==0&&xt.nodeType!==3||(T=S+c),xt!==f||s!==0&&xt.nodeType!==3||(P=S+s),xt.nodeType===3&&(S+=xt.nodeValue.length),(rt=xt.firstChild)!==null;)it=xt,xt=rt;for(;;){if(xt===e)break e;if(it===a&&++tt===c&&(T=S),it===f&&++mt===s&&(P=S),(rt=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=rt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:e,selectionRange:a},ql=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=er(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){He(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Nf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function jm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),s&4&&ao(5,a);break;case 1:if(va(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}s&64&&Vm(a),s&512&&ro(a,a.return);break;case 3:if(va(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&s&4&&qm(a);case 26:case 5:va(e,a),n===null&&s&4&&Xm(a),s&512&&ro(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),s&4&&Qm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fx.bind(null,a),Cx(e,a))));break;case 22:if(s=a.memoizedState!==null||ji,!s){n=n!==null&&n.memoizedState!==null||nn,c=ji;var f=nn;ji=s,(nn=n)&&!f?xa(e,a,(a.subtreeFlags&8772)!==0):va(e,a),ji=c,nn=f}break;case 30:break;default:va(e,a)}}function Zm(e){var n=e.alternate;n!==null&&(e.alternate=null,Zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Mr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Hn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)Km(e,n,a),a=a.sibling}function Km(e,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:nn||Ri(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ri(a,n);var s=qe,c=Hn;ba(a.type)&&(qe=a.stateNode,Hn=!1),Zi(e,n,a),mo(a.stateNode),qe=s,Hn=c;break;case 5:nn||Ri(a,n);case 6:if(s=qe,c=Hn,qe=null,Zi(e,n,a),qe=s,Hn=c,qe!==null)if(Hn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:qe!==null&&(Hn?(e=qe,Ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Eo(e)):Ig(qe,a.stateNode));break;case 4:s=qe,c=Hn,qe=a.stateNode.containerInfo,Hn=!0,Zi(e,n,a),qe=s,Hn=c;break;case 0:case 11:case 14:case 15:nn||_a(2,a,n),nn||_a(4,a,n),Zi(e,n,a);break;case 1:nn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&km(a,n,s)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:nn=(s=nn)||a.memoizedState!==null,Zi(e,n,a),nn=s;break;default:Zi(e,n,a)}}function Qm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(a){He(n,n.return,a)}}function ix(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ym),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ym),n;default:throw Error(r(435,e.tag))}}function sf(e,n){var a=ix(e);n.forEach(function(s){var c=hx.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(ba(T.type)){qe=T.stateNode,Hn=!1;break t}break;case 5:qe=T.stateNode,Hn=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Hn=!0;break t}T=T.return}if(qe===null)throw Error(r(160));Km(f,S,c),qe=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Jm(n,e),n=n.sibling}var gi=null;function Jm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),s&4&&(_a(3,e,e.return),ao(3,e),_a(5,e,e.return));break;case 1:Wn(n,e),qn(e),s&512&&(nn||a===null||Ri(a,a.return)),s&64&&ji&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(Wn(n,e),qn(e),s&512&&(nn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ti]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[cn]=e,an(f),s=f;break t;case"link":var S=qg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=qg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[cn]=e,an(f),s=f}e.stateNode=s}else Yg(c,e.type,e.stateNode);else e.stateNode=Wg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Yg(c,e.type,e.stateNode):Wg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),s&512&&(nn||a===null||Ri(a,a.return)),a!==null&&s&4&&ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),s&512&&(nn||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Bn(c,"")}catch(rt){He(e,e.return,rt)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,ef(e,c,a!==null?a.memoizedProps:c)),s&1024&&(rf=!0);break;case 6:if(Wn(n,e),qn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(rt){He(e,e.return,rt)}}break;case 3:if(kl=null,c=gi,gi=Gl(n.containerInfo),Wn(n,e),gi=c,qn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(n.containerInfo)}catch(rt){He(e,e.return,rt)}rf&&(rf=!1,$m(e));break;case 4:s=gi,gi=Gl(e.stateNode.containerInfo),Wn(n,e),qn(e),gi=s;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hf=Ft()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,sf(e,s)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,tt=ji,mt=nn;if(ji=tt||c,nn=mt||P,Wn(n,e),nn=mt,ji=tt,qn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||ji||nn||nr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=P.stateNode;var xt=P.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(rt){He(P,P.return,rt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(rt){He(P,P.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,sf(e,a))));break;case 19:Wn(n,e),qn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,sf(e,s)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=nf(e);wl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Bn(S,""),a.flags&=-33);var T=nf(e);wl(e,T,S);break;case 3:case 4:var P=a.stateNode.containerInfo,tt=nf(e);af(e,tt,P);break;default:throw Error(r(161))}}catch(mt){He(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $m(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;$m(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(e,n.alternate,n),n=n.sibling}function nr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),nr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),nr(n);break;case 27:mo(n.stateNode);case 26:case 5:Ri(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}e=e.sibling}}function xa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),ao(4,f);break;case 1:if(xa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){He(s,s.return,tt)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)wp(P[c],T)}catch(tt){He(s,s.return,tt)}}a&&S&64&&Vm(f),ro(f,f.return);break;case 27:qm(f);case 26:case 5:xa(c,f,a),a&&s===null&&S&4&&Xm(f),ro(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Qm(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),ro(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function of(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e))}function wi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tg(e,n,a,s),n=n.sibling}function tg(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,s),c&2048&&ao(9,n);break;case 1:wi(e,n,a,s);break;case 3:wi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e)));break;case 12:if(c&2048){wi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else wi(e,n,a,s);break;case 13:wi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,s):so(e,n):f._visibility&2?wi(e,n,a,s):(f._visibility|=2,Vr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&of(S,n);break;case 24:wi(e,n,a,s),c&2048&&lf(n.alternate,n);break;default:wi(e,n,a,s)}}function Vr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,P=s,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Vr(f,S,T,P,c),ao(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?Vr(f,S,T,P,c):so(f,S):(mt._visibility|=2,Vr(f,S,T,P,c)),c&&tt&2048&&of(S.alternate,S);break;case 24:Vr(f,S,T,P,c),c&&tt&2048&&lf(S.alternate,S);break;default:Vr(f,S,T,P,c)}n=n.sibling}}function so(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:so(a,s),c&2048&&of(s.alternate,s);break;case 24:so(a,s),c&2048&&lf(s.alternate,s);break;default:so(a,s)}n=n.sibling}}var oo=8192;function kr(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 26:kr(e),e.flags&oo&&e.memoizedState!==null&&Vx(gi,e.memoizedState,e.memoizedProps);break;case 5:kr(e);break;case 3:case 4:var n=gi;gi=Gl(e.stateNode.containerInfo),kr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,kr(e),oo=n):kr(e));break;default:kr(e)}}function ng(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ag(s,e)}ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&_a(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):lo(e);break;default:lo(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ag(s,e)}ng(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function ag(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(Zm(s),s===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var ax={getCacheForType:function(e){var n=bn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},rx=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,_e=null,ye=0,Ue=0,Yn=null,Sa=!1,Xr=!1,cf=!1,Ki=0,tn=0,ya=0,ir=0,uf=0,si=0,Wr=0,co=null,Gn=null,ff=!1,hf=0,Dl=1/0,Ul=null,Ma=null,yn=0,Ea=null,qr=null,Yr=0,df=0,pf=null,rg=null,uo=0,mf=null;function jn(){if((De&2)!==0&&ye!==0)return ye&-ye;if(N.T!==null){var e=Or;return e!==0?e:Mf()}return Ee()}function sg(){si===0&&(si=(ye&536870912)===0||Re?k():536870912);var e=ri.current;return e!==null&&(e.flags|=32),si}function Zn(e,n,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(jr(e,0),Ta(e,ye,si,!1)),zt(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(ir|=a),tn===4&&Ta(e,ye,si,!1)),Ci(e))}function og(e,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),c=s?lx(e,n):vf(e,n,!0),f=s;do{if(c===0){Xr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!sx(a)){c=vf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=co;var P=T.current.memoizedState.isDehydrated;if(P&&(jr(T,S).flags|=256),S=vf(T,S,!1),S!==2){if(cf&&!P){T.errorRecoveryDisabledLanes|=f,ir|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){jr(e,0),Ta(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,si,!Sa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=hf+300-Ft(),10<c)){if(Ta(s,n,si,!Sa),kt(s,0,!0)!==0)break t;s.timeoutHandle=zg(lg.bind(null,s,a,Gn,Ul,ff,n,si,ir,Wr,Sa,f,2,-0,0),c);break t}lg(s,a,Gn,Ul,ff,n,si,ir,Wr,Sa,f,0,-0,0)}}break}while(!0);Ci(e)}function lg(e,n,a,s,c,f,S,T,P,tt,mt,xt,it,rt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:Gx},eg(n),xt=kx(),xt!==null)){e.cancelPendingCommit=xt(mg.bind(null,e,n,f,a,s,c,S,T,P,mt,1,it,rt)),Ta(e,f,S,!tt);return}mg(e,n,f,a,s,c,S,T,P)}function sx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~uf,n&=~ir,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&St(e,a,n)}function Ll(){return(De&6)===0?(fo(0),!1):!0}function gf(){if(_e!==null){if(Ue===0)var e=_e.return;else e=_e,Vi=Qa=null,Lu(e),Hr=null,eo=0,e=_e;for(;e!==null;)Gm(e.alternate,e),e=e.return;_e=null}}function jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Tx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),gf(),ke=e,_e=a=Fi(e.current,null),ye=n,Ue=0,Yn=null,Sa=!1,Xr=Dt(e,n),cf=!1,Wr=si=uf=ir=ya=tn=0,Gn=co=null,ff=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=e[c],s&=~f}return Ki=n,tl(),a}function cg(e,n){de=null,N.H=xl,n===qs||n===cl?(n=Ap(),Ue=3):n===Ep?(n=Ap(),Ue=4):Ue=n===Rm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,_e===null&&(tn=1,Tl(e,ei(n,e.current)))}function ug(){var e=N.H;return N.H=xl,e===null?xl:e}function fg(){var e=N.A;return N.A=ax,e}function _f(){tn=4,Sa||(ye&4194048)!==ye&&ri.current!==null||(Xr=!0),(ya&134217727)===0&&(ir&134217727)===0||ke===null||Ta(ke,ye,si,!1)}function vf(e,n,a){var s=De;De|=2;var c=ug(),f=fg();(ke!==e||ye!==n)&&(Ul=null,jr(e,n)),n=!1;var S=tn;t:do try{if(Ue!==0&&_e!==null){var T=_e,P=Yn;switch(Ue){case 8:gf(),S=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var tt=Ue;if(Ue=0,Yn=null,Zr(e,T,P,tt),a&&Xr){S=0;break t}break;default:tt=Ue,Ue=0,Yn=null,Zr(e,T,P,tt)}}ox(),S=tn;break}catch(mt){cg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Vi=Qa=null,De=s,N.H=c,N.A=f,_e===null&&(ke=null,ye=0,tl()),S}function ox(){for(;_e!==null;)hg(_e)}function lx(e,n){var a=De;De|=2;var s=ug(),c=fg();ke!==e||ye!==n?(Ul=null,Dl=Ft()+500,jr(e,n)):Xr=Dt(e,n);t:do try{if(Ue!==0&&_e!==null){n=_e;var f=Yn;e:switch(Ue){case 1:Ue=0,Yn=null,Zr(e,n,f,1);break;case 2:case 9:if(Tp(f)){Ue=0,Yn=null,dg(n);break}n=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),Ci(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Tp(f)?(Ue=0,Yn=null,dg(n)):(Ue=0,Yn=null,Zr(e,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(!S||jg(S)){Ue=0,Yn=null;var P=T.sibling;if(P!==null)_e=P;else{var tt=T.return;tt!==null?(_e=tt,Nl(tt)):_e=null}break e}}Ue=0,Yn=null,Zr(e,n,f,5);break;case 6:Ue=0,Yn=null,Zr(e,n,f,6);break;case 8:gf(),tn=6;break t;default:throw Error(r(462))}}cx();break}catch(mt){cg(e,mt)}while(!0);return Vi=Qa=null,N.H=s,N.A=c,De=a,_e!==null?0:(ke=null,ye=0,tl(),tn)}function cx(){for(;_e!==null&&!Kt();)hg(_e)}function hg(e){var n=Fm(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Nl(e):_e=n}function dg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Lu(n);default:Gm(a,n),n=_e=pp(n,Ki),n=Fm(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Nl(e):_e=n}function Zr(e,n,a,s){Vi=Qa=null,Lu(n),Hr=null,eo=0;var c=n.return;try{if(Jv(e,c,n,a,ye)){tn=1,Tl(e,ei(a,e.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;tn=1,Tl(e,ei(a,e.current)),_e=null;return}n.flags&32768?(Re||s===1?e=!0:Xr||(ye&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=ri.current,s!==null&&s.tag===13&&(s.flags|=16384))),pg(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){pg(n,Sa);return}e=n.return;var a=tx(n.alternate,n,Ki);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);tn===0&&(tn=5)}function pg(e,n){do{var a=ex(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);tn=6,_e=null}function mg(e,n,a,s,c,f,S,T,P){e.cancelPendingCommit=null;do Ol();while(yn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ou,Tt(e,a,f,S,T,P),e===ke&&(_e=ke=null,ye=0),qr=n,Ea=e,Yr=a,df=f,pf=c,rg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dx(je,function(){return Sg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,c=q.p,q.p=2,S=De,De|=4;try{nx(e,n,a)}finally{De=S,q.p=c,N.T=s}}yn=1,gg(),_g(),vg()}}function gg(){if(yn===1){yn=0;var e=Ea,n=qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=q.p;q.p=2;var c=De;De|=4;try{Jm(n,e);var f=Df,S=ap(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&ip(T.ownerDocument.documentElement,T)){if(P!==null&&nu(T)){var tt=P.start,mt=P.end;if(mt===void 0&&(mt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(mt,T.value.length);else{var xt=T.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var rt=it.getSelection(),ne=T.textContent.length,Jt=Math.min(P.start,ne),Pe=P.end===void 0?Jt:Math.min(P.end,ne);!rt.extend&&Jt>Pe&&(S=Pe,Pe=Jt,Jt=S);var j=np(T,Jt),V=np(T,Pe);if(j&&V&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var $=xt.createRange();$.setStart(j.node,j.offset),rt.removeAllRanges(),Jt>Pe?(rt.addRange($),rt.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),rt.addRange($))}}}}for(xt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&xt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var gt=xt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}ql=!!Cf,Df=Cf=null}finally{De=c,q.p=s,N.T=a}}e.current=n,yn=2}}function _g(){if(yn===2){yn=0;var e=Ea,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=q.p;q.p=2;var c=De;De|=4;try{jm(e,n.alternate,n)}finally{De=c,q.p=s,N.T=a}}yn=3}}function vg(){if(yn===4||yn===3){yn=0,Me();var e=Ea,n=qr,a=Yr,s=rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,qr=Ea=null,xg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ma=null),Ce(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(pt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,c=q.p,q.p=2,N.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{N.T=n,q.p=c}}(Yr&3)!==0&&Ol(),Ci(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===mf?uo++:(uo=0,mf=e):uo=0,fo(0)}}function xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xs(n)))}function Ol(e){return gg(),_g(),vg(),Sg()}function Sg(){if(yn!==5)return!1;var e=Ea,n=df;df=0;var a=Ce(Yr),s=N.T,c=q.p;try{q.p=32>a?32:a,N.T=null,a=pf,pf=null;var f=Ea,S=Yr;if(yn=0,qr=Ea=null,Yr=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,ig(f.current),tg(f,f.current,S,a),De=T,fo(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(pt,f)}catch{}return!0}finally{q.p=c,N.T=s,xg(e,n)}}function yg(e,n,a){n=ei(a,n),n=qu(e.stateNode,n,2),e=da(e,n,2),e!==null&&(zt(e,2),Ci(e))}function He(e,n,a){if(e.tag===3)yg(e,e,a);else for(;n!==null;){if(n.tag===3){yg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){e=ei(a,e),a=bm(2),s=da(n,a,2),s!==null&&(Am(a,s,n,e),zt(s,2),Ci(s));break}}n=n.return}}function xf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new rx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(cf=!0,c.add(a),e=ux.bind(null,e,n,a),n.then(e,e))}function ux(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>Ft()-hf?(De&2)===0&&jr(e,0):uf|=a,Wr===ye&&(Wr=0)),Ci(e)}function Mg(e,n){n===0&&(n=At()),e=Dr(e,n),e!==null&&(zt(e,n),Ci(e))}function fx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(e,a)}function hx(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Mg(e,a)}function dx(e,n){return F(e,n)}var Pl=null,Kr=null,Sf=!1,zl=!1,yf=!1,ar=0;function Ci(e){e!==Kr&&e.next===null&&(Kr===null?Pl=Kr=e:Kr=Kr.next=e),zl=!0,Sf||(Sf=!0,mx())}function fo(e,n){if(!yf&&zl){yf=!0;do for(var a=!1,s=Pl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ag(s,f))}else f=ye,f=kt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Dt(s,f)||(a=!0,Ag(s,f));s=s.next}while(a);yf=!1}}function px(){Eg()}function Eg(){zl=Sf=!1;var e=0;ar!==0&&(Ex()&&(e=ar),ar=0);for(var n=Ft(),a=null,s=Pl;s!==null;){var c=s.next,f=Tg(s,n);f===0?(s.next=null,a===null?Pl=c:a.next=c,c===null&&(Kr=a)):(a=s,(e!==0||(f&3)!==0)&&(zl=!0)),s=c}fo(e)}function Tg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,P=c[S];P===-1?((T&a)===0||(T&s)!==0)&&(c[S]=re(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=ke,a=ye,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&we(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&we(s),Ce(a)){case 2:case 8:a=se;break;case 32:a=je;break;case 268435456:a=L;break;default:a=je}return s=bg.bind(null,e),a=F(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&we(s),e.callbackPriority=2,e.callbackNode=null,2}function bg(e,n){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ol()&&e.callbackNode!==a)return null;var s=ye;return s=kt(e,e===ke?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(og(e,s,n),Tg(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?bg.bind(null,e):null)}function Ag(e,n){if(Ol())return null;og(e,n,!0)}function mx(){bx(function(){(De&6)!==0?F(Ht,px):Eg()})}function Mf(){return ar===0&&(ar=k()),ar}function Rg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function wg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Rg((c[Qe]||null).action),S=s.submitter;S&&(n=(n=S[Qe]||null)?Rg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Qo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ar!==0){var P=S?wg(c,S):new FormData(c);Gu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=S?wg(c,S):new FormData(c),Gu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Ef=0;Ef<su.length;Ef++){var Tf=su[Ef],_x=Tf.toLowerCase(),vx=Tf[0].toUpperCase()+Tf.slice(1);mi(_x,"on"+vx)}mi(op,"onAnimationEnd"),mi(lp,"onAnimationIteration"),mi(cp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Pv,"onTransitionRun"),mi(zv,"onTransitionStart"),mi(Bv,"onTransitionCancel"),mi(up,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function Cg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],P=T.instance,tt=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(mt){El(mt)}c.currentTarget=null,f=P}else for(S=0;S<s.length;S++){if(T=s[S],P=T.instance,tt=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(mt){El(mt)}c.currentTarget=null,f=P}}}}function ve(e,n){var a=n[Sr];a===void 0&&(a=n[Sr]=new Set);var s=e+"__bubble";a.has(s)||(Dg(n,e,2,!1),a.add(s))}function bf(e,n,a){var s=0;n&&(s|=4),Dg(a,e,s,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Af(e){if(!e[Bl]){e[Bl]=!0,Wo.forEach(function(a){a!=="selectionchange"&&(xx.has(a)||bf(a,!1,e),bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,bf("selectionchange",!1,n))}}function Dg(e,n,a,s){switch(t_(n)){case 2:var c=qx;break;case 8:c=Yx;break;default:c=Hf}a=c.bind(null,n,a,e),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Rf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Bi(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Bd(function(){var tt=f,mt=Wc(a),xt=[];t:{var it=fp.get(e);if(it!==void 0){var rt=Qo,ne=e;switch(e){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":rt=dv;break;case"focusin":ne="focus",rt=Qc;break;case"focusout":ne="blur",rt=Qc;break;case"beforeblur":case"afterblur":rt=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=gv;break;case op:case lp:case cp:rt=av;break;case up:rt=vv;break;case"scroll":case"scrollend":rt=$0;break;case"wheel":rt=Sv;break;case"copy":case"cut":case"paste":rt=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Vd;break;case"toggle":case"beforetoggle":rt=Mv}var Jt=(n&4)!==0,Pe=!Jt&&(e==="scroll"||e==="scrollend"),j=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var V=tt,$;V!==null;){var gt=V;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||j===null||(gt=Us(V,j),gt!=null&&Jt.push(po(V,gt,$))),Pe)break;V=V.return}0<Jt.length&&(it=new rt(it,ne,null,a,mt),xt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&a!==Xc&&(ne=a.relatedTarget||a.fromElement)&&(Bi(ne)||ne[Ei]))break t;if((rt||it)&&(it=mt.window===mt?mt:(it=mt.ownerDocument)?it.defaultView||it.parentWindow:window,rt?(ne=a.relatedTarget||a.toElement,rt=tt,ne=ne?Bi(ne):null,ne!==null&&(Pe=u(ne),Jt=ne.tag,ne!==Pe||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(rt=null,ne=tt),rt!==ne)){if(Jt=Hd,gt="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Vd,gt="onPointerLeave",j="onPointerEnter",V="pointer"),Pe=rt==null?it:Va(rt),$=ne==null?it:Va(ne),it=new Jt(gt,V+"leave",rt,a,mt),it.target=Pe,it.relatedTarget=$,gt=null,Bi(mt)===tt&&(Jt=new Jt(j,V+"enter",ne,a,mt),Jt.target=$,Jt.relatedTarget=Pe,gt=Jt),Pe=gt,rt&&ne)e:{for(Jt=rt,j=ne,V=0,$=Jt;$;$=Qr($))V++;for($=0,gt=j;gt;gt=Qr(gt))$++;for(;0<V-$;)Jt=Qr(Jt),V--;for(;0<$-V;)j=Qr(j),$--;for(;V--;){if(Jt===j||j!==null&&Jt===j.alternate)break e;Jt=Qr(Jt),j=Qr(j)}Jt=null}else Jt=null;rt!==null&&Ug(xt,it,rt,Jt,!1),ne!==null&&Pe!==null&&Ug(xt,Pe,ne,Jt,!0)}}t:{if(it=tt?Va(tt):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var Gt=Kd;else if(jd(it))if(Qd)Gt=Lv;else{Gt=Dv;var pe=Cv}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&kc(tt.elementType)&&(Gt=Kd):Gt=Uv;if(Gt&&(Gt=Gt(e,tt))){Zd(xt,Gt,a,mt);break t}pe&&pe(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&Tn(it,"number",it.value)}switch(pe=tt?Va(tt):window,e){case"focusin":(jd(pe)||pe.contentEditable==="true")&&(Rr=pe,iu=tt,Fs=null);break;case"focusout":Fs=iu=Rr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,rp(xt,a,mt);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":rp(xt,a,mt)}var Yt;if($c)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Ar?qd(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(kd&&a.locale!=="ko"&&(Ar||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ar&&(Yt=Id()):(ca=mt,jc="value"in ca?ca.value:ca.textContent,Ar=!0)),pe=Il(tt,te),0<pe.length&&(te=new Gd(te,e,null,a,mt),xt.push({event:te,listeners:pe}),Yt?te.data=Yt:(Yt=Yd(a),Yt!==null&&(te.data=Yt)))),(Yt=Tv?bv(e,a):Av(e,a))&&(te=Il(tt,"onBeforeInput"),0<te.length&&(pe=new Gd("onBeforeInput","beforeinput",null,a,mt),xt.push({event:pe,listeners:te}),pe.data=Yt)),gx(xt,e,tt,a,mt)}Cg(xt,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Il(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Us(e,a),c!=null&&s.unshift(po(e,c,f)),c=Us(e,n),c!=null&&s.push(po(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ug(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,P=T.alternate,tt=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||tt===null||(P=tt,c?(tt=Us(a,f),tt!=null&&S.unshift(po(a,tt,P))):c||(tt=Us(a,f),tt!=null&&S.push(po(a,tt,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Sx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function Lg(e){return(typeof e=="string"?e:""+e).replace(Sx,`
`).replace(yx,"")}function Ng(e,n){return n=Lg(n),Lg(e)===n}function Fl(){}function Oe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Bn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Bn(e,""+s);break;case"className":It(e,"class",s);break;case"tabIndex":It(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,s);break;case"style":Pd(e,s,f);break;case"data":if(n!=="object"){It(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Yo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Yo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Fl);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ut(e,"popover",s);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ut(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Q0.get(a)||a,Ut(e,a,s))}}function wf(e,n,a,s,c,f){switch(a){case"style":Pd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Bn(e,s):(typeof s=="number"||typeof s=="bigint")&&Bn(e,""+s);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Qe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ut(e,a,s)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),s&&Oe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=S=c=null,P=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":S=mt;break;case"checked":P=mt;break;case"defaultChecked":tt=mt;break;case"value":f=mt;break;case"defaultValue":T=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Oe(e,n,s,mt,a,null)}}Un(e,f,T,P,tt,S,c,!1),ge(e);return;case"select":ve("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Oe(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?Je(e,!!s,n,!1):a!=null&&Je(e,!!s,a,!0);return;case"textarea":ve("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(e,n,S,T,a,null)}Er(e,s,c,f),ge(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(e,n,P,s,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(s=0;s<ho.length;s++)ve(ho[s],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,tt,s,a,null)}return;default:if(kc(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&wf(e,n,mt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Oe(e,n,T,s,a,null))}function Mx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,P=null,tt=null,mt=null;for(rt in a){var xt=a[rt];if(a.hasOwnProperty(rt)&&xt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=xt;default:s.hasOwnProperty(rt)||Oe(e,n,rt,null,s,xt)}}for(var it in s){var rt=s[it];if(xt=a[it],s.hasOwnProperty(it)&&(rt!=null||xt!=null))switch(it){case"type":f=rt;break;case"name":c=rt;break;case"checked":tt=rt;break;case"defaultChecked":mt=rt;break;case"value":S=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==xt&&Oe(e,n,it,rt,s,xt)}}Fe(e,S,T,P,tt,mt,f,c);return;case"select":rt=S=T=it=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:s.hasOwnProperty(f)||Oe(e,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==P&&Oe(e,n,c,f,s,P)}n=T,a=S,s=rt,it!=null?Je(e,!!a,it,!1):!!s!=!!a&&(n!=null?Je(e,!!a,n,!0):Je(e,!!a,a?[]:"",!1));return;case"textarea":rt=it=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(e,n,S,c,s,f)}xn(e,it,rt);return;case"option":for(var ne in a)if(it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Oe(e,n,ne,null,s,it)}for(P in s)if(it=s[P],rt=a[P],s.hasOwnProperty(P)&&it!==rt&&(it!=null||rt!=null))switch(P){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,P,it,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!s.hasOwnProperty(Jt)&&Oe(e,n,Jt,null,s,it);for(tt in s)if(it=s[tt],rt=a[tt],s.hasOwnProperty(tt)&&it!==rt&&(it!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Oe(e,n,tt,it,s,rt)}return;default:if(kc(n)){for(var Pe in a)it=a[Pe],a.hasOwnProperty(Pe)&&it!==void 0&&!s.hasOwnProperty(Pe)&&wf(e,n,Pe,void 0,s,it);for(mt in s)it=s[mt],rt=a[mt],!s.hasOwnProperty(mt)||it===rt||it===void 0&&rt===void 0||wf(e,n,mt,it,s,rt);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!s.hasOwnProperty(j)&&Oe(e,n,j,null,s,it);for(xt in s)it=s[xt],rt=a[xt],!s.hasOwnProperty(xt)||it===rt||it==null&&rt==null||Oe(e,n,xt,it,s,rt)}var Cf=null,Df=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Og(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Uf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function Ex(){var e=window.event;return e&&e.type==="popstate"?e===Lf?!1:(Lf=e,!0):(Lf=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(e){return Bg.resolve(null).then(e).catch(Ax)}:zg;function Ax(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Ig(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&mo(S.documentElement),a&2&&mo(S.body),a&4)for(a=S.head,mo(a),S=a.firstChild;S;){var T=S.nextSibling,P=S.nodeName;S[Ti]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){e.removeChild(f),Eo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);Eo(n)}function Nf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nf(a),Mr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Rx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ti])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Pf=null;function Fg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Hg(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Mr(e)}var oi=new Map,Gg=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=q.d;q.d={f:Dx,r:Ux,D:Lx,C:Nx,L:Ox,m:Px,X:Bx,S:zx,M:Ix};function Dx(){var e=Qi.f(),n=Ll();return e||n}function Ux(e){var n=oa(e);n!==null&&n.tag===5&&n.type==="form"?om(n):Qi.r(e)}var Jr=typeof document>"u"?null:document;function Vg(e,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Gg.has(c)||(Gg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",e),an(n),s.head.appendChild(n)))}}function Lx(e){Qi.D(e),Vg("dns-prefetch",e,null)}function Nx(e,n){Qi.C(e,n),Vg("preconnect",e,n)}function Ox(e,n,a){Qi.L(e,n,a);var s=Jr;if(s&&e&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(e)+'"]';var f=c;switch(n){case"style":f=$r(e);break;case"script":f=ts(e)}oi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),Mn(n,"link",e),an(n),s.head.appendChild(n)))}}function Px(e,n){Qi.m(e,n);var a=Jr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(s)+'"][href="'+pn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(e)}if(!oi.has(f)&&(e=g({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),Mn(s,"link",e),an(s),a.head.appendChild(s)}}}function zx(e,n,a){Qi.S(e,n,a);var s=Jr;if(s&&e){var c=la(s).hoistableStyles,f=$r(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(go(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&zf(e,a);var P=S=s.createElement("link");an(P),Mn(P,"link",e),P._p=new Promise(function(tt,mt){P.onload=tt,P.onerror=mt}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Vl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function Bx(e,n){Qi.X(e,n);var a=Jr;if(a&&e){var s=la(a).hoistableScripts,c=ts(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=g({src:e,async:!0},n),(n=oi.get(c))&&Bf(e,n),f=a.createElement("script"),an(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ix(e,n){Qi.M(e,n);var a=Jr;if(a&&e){var s=la(a).hoistableScripts,c=ts(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Bf(e,n),f=a.createElement("script"),an(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function kg(e,n,a,s){var c=(c=ut.current)?Gl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=la(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$r(a.href);var f=la(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(go(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||Fx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=la(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function $r(e){return'href="'+pn(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function Xg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Fx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),an(n),e.head.appendChild(n))}function ts(e){return'[src="'+pn(e)+'"]'}function _o(e){return"script[async]"+e}function Wg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(s)return n.instance=s,an(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),an(s),Mn(s,"style",c),Vl(s,a.precedence,e),n.instance=s;case"stylesheet":c=$r(a.href);var f=e.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,an(f),f;s=Xg(a),(c=oi.get(c))&&zf(s,c),f=(e.ownerDocument||e).createElement("link"),an(f);var S=f;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Mn(f,"link",s),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=ts(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,an(c),c):(s=a,(c=oi.get(f))&&(s=g({},a),Bf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),an(c),Mn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vl(s,a.precedence,e));return n.instance}function Vl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function qg(e,n,a){if(kl===null){var s=new Map,c=kl=new Map;c.set(a,s)}else c=kl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ti]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Yg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Hx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function Gx(){}function Vx(e,n,a){if(vo===null)throw Error(r(475));var s=vo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=$r(a.href),f=e.querySelector(go(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Xl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,an(f);return}f=e.ownerDocument||e,a=Xg(a),(c=oi.get(c))&&zf(a,c),f=f.createElement("link"),an(f);var S=f;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Xl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function kx(){if(vo===null)throw Error(r(475));var e=vo;return e.stylesheets&&e.count===0&&If(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&If(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Xl(){if(this.count--,this.count===0){if(this.stylesheets)If(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function If(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(Xx,e),Wl=null,Xl.call(e))}function Xx(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var s=a.get(null);else{a=new Map,Wl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:O,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Wx(e,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Zg(e,n,a,s,c,f,S,T,P,tt,mt,xt){return e=new Wx(e,n,a,S,T,P,tt,xt),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=vu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Mu(f),e}function Kg(e){return e?(e=Ur,e):Ur}function Qg(e,n,a,s,c,f){c=Kg(c),s.context===null?s.context=c:s.pendingContext=c,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(e,s,n),a!==null&&(Zn(a,e,n),js(a,e,n))}function Jg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ff(e,n){Jg(e,n),(e=e.alternate)&&Jg(e,n)}function $g(e){if(e.tag===13){var n=Dr(e,67108864);n!==null&&Zn(n,e,67108864),Ff(e,67108864)}}var ql=!0;function qx(e,n,a,s){var c=N.T;N.T=null;var f=q.p;try{q.p=2,Hf(e,n,a,s)}finally{q.p=f,N.T=c}}function Yx(e,n,a,s){var c=N.T;N.T=null;var f=q.p;try{q.p=8,Hf(e,n,a,s)}finally{q.p=f,N.T=c}}function Hf(e,n,a,s){if(ql){var c=Gf(s);if(c===null)Rf(e,n,s,Yl,a),e_(e,s);else if(Zx(c,e,n,a,s))s.stopPropagation();else if(e_(e,s),n&4&&-1<jx.indexOf(e)){for(;c!==null;){var f=oa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=jt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-Pt(S);T.entanglements[1]|=P,S&=~P}Ci(f),(De&6)===0&&(Dl=Ft()+500,fo(0))}}break;case 13:T=Dr(f,2),T!==null&&Zn(T,f,2),Ll(),Ff(f,2)}if(f=Gf(s),f===null&&Rf(e,n,s,Yl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Rf(e,n,s,null,a)}}function Gf(e){return e=Wc(e),Vf(e)}var Yl=null;function Vf(e){if(Yl=null,e=Bi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function t_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case Ht:return 2;case se:return 8;case je:case Ze:return 32;case L:return 268435456;default:return 32}default:return 32}}var kf=!1,Aa=null,Ra=null,wa=null,So=new Map,yo=new Map,Ca=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=oa(n),n!==null&&$g(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Zx(e,n,a,s,c){switch(n){case"focusin":return Aa=Mo(Aa,e,n,a,s,c),!0;case"dragenter":return Ra=Mo(Ra,e,n,a,s,c),!0;case"mouseover":return wa=Mo(wa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,Mo(So.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Mo(yo.get(f)||null,e,n,a,s,c)),!0}return!1}function n_(e){var n=Bi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,di(e.priority,function(){if(a.tag===13){var s=jn();s=ie(s);var c=Dr(a,s);c!==null&&Zn(c,a,s),Ff(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Gf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Xc=s,a.target.dispatchEvent(s),Xc=null}else return n=oa(a),n!==null&&$g(n),e.blockedOn=a,!1;n.shift()}return!0}function i_(e,n,a){jl(e)&&a.delete(n)}function Kx(){kf=!1,Aa!==null&&jl(Aa)&&(Aa=null),Ra!==null&&jl(Ra)&&(Ra=null),wa!==null&&jl(wa)&&(wa=null),So.forEach(i_),yo.forEach(i_)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,kf||(kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Kx)))}var Kl=null;function a_(e){Kl!==e&&(Kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Vf(s||a)===null)continue;break}var f=oa(a);f!==null&&(e.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Eo(e){function n(P){return Zl(P,e)}Aa!==null&&Zl(Aa,e),Ra!==null&&Zl(Ra,e),wa!==null&&Zl(wa,e),So.forEach(n),yo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Qe]||null;if(typeof f=="function")S||a_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Qe]||null)T=S.formAction;else if(Vf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),a_(a)}}}function Xf(e){this._internalRoot=e}Ql.prototype.render=Xf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();Qg(a,s,e,n,null,null)},Ql.prototype.unmount=Xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qg(e.current,2,null,e,null,null),Ll(),n[Ei]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&n_(e)}};var r_=t.version;if(r_!=="19.1.0")throw Error(r(527,r_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Qx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{pt=Jl.inject(Qx),yt=Jl}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=ym,f=Mm,S=Em,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Zg(e,1,!1,null,null,a,s,c,f,S,T,null),e[Ei]=n.current,Af(e),new Xf(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=ym,S=Mm,T=Em,P=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=Zg(e,1,!0,n,a??null,s,c,f,S,T,P,tt),n.context=Kg(null),a=n.current,s=jn(),s=ie(s),c=ha(s),c.callback=null,da(a,c,s),a=s,n.current.lanes=a,zt(n,a),Ci(n),e[Ei]=n.current,Af(e),new Ql(n)},bo.version="19.1.0",bo}var m_;function oS(){if(m_)return Yf.exports;m_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Yf.exports=sS(),Yf.exports}var lS=oS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="179",cS=0,g_=1,uS=2,g0=1,fS=2,ia=3,Ga=0,Pn=1,Ui=2,Ia=0,Ss=1,Uh=2,__=3,v_=4,hS=5,dr=100,dS=101,pS=102,mS=103,gS=104,_S=200,vS=201,xS=202,SS=203,Lh=204,Nh=205,yS=206,MS=207,ES=208,TS=209,bS=210,AS=211,RS=212,wS=213,CS=214,Oh=0,Ph=1,zh=2,Es=3,Bh=4,Ih=5,Fh=6,Hh=7,Ed=0,DS=1,US=2,Fa=0,_0=1,LS=2,NS=3,OS=4,PS=5,zS=6,BS=7,v0=300,Ts=301,bs=302,Gh=303,Vh=304,Fc=306,kh=1e3,mr=1001,Xh=1002,Mi=1003,IS=1004,$l=1005,Ni=1006,Qf=1007,gr=1008,Pi=1009,x0=1010,S0=1011,zo=1012,Td=1013,_r=1014,aa=1015,Ho=1016,bd=1017,Ad=1018,Bo=1020,y0=35902,M0=1021,E0=1022,yi=1023,Io=1026,Fo=1027,T0=1028,Rd=1029,b0=1030,wd=1031,Cd=1033,Rc=33776,wc=33777,Cc=33778,Dc=33779,Wh=35840,qh=35841,Yh=35842,jh=35843,Zh=36196,Kh=37492,Qh=37496,Jh=37808,$h=37809,td=37810,ed=37811,nd=37812,id=37813,ad=37814,rd=37815,sd=37816,od=37817,ld=37818,cd=37819,ud=37820,fd=37821,Uc=36492,hd=36494,dd=36495,A0=36283,pd=36284,md=36285,gd=36286,FS=3200,HS=3201,R0=0,GS=1,Ba="",ci="srgb",As="srgb-linear",Nc="linear",ze="srgb",es=7680,x_=519,VS=512,kS=513,XS=514,w0=515,WS=516,qS=517,YS=518,jS=519,_d=35044,S_="300 es",Oi=2e3,Oc=2001;class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=Math.PI/180,vd=180/Math.PI;function Ha(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xe(o,t,i){return Math.max(t,Math.min(i,o))}function ZS(o,t){return(o%t+t)%t}function $f(o,t,i){return(1-i)*o+i*t}function Li(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Be(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=R;return}if(v!==R||m!==x||p!==M||g!==b){let y=1-d;const _=m*x+p*M+g*b+v*R,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const I=Math.sqrt(O),H=Math.atan2(I,_*B);y=Math.sin(y*H)/I,d=Math.sin(d*H)/I}const C=d*B;if(m=m*y+x*C,p=p*y+M*C,g=g*y+b*C,v=v*y+R*C,y===1-d){const I=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=I,p*=I,g*=I,v*=I}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+g*v+m*M-p*x,t[i+1]=m*b+g*x+p*v-d*M,t[i+2]=p*b+g*M+d*x-m*v,t[i+3]=g*b-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"YXZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"ZXY":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"ZYX":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"YZX":this._x=x*g*v+p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v-x*M*b;break;case"XZY":this._x=x*g*v-p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return th.copy(this).projectOnVector(t),this.sub(th)}reflect(t){return this.sub(th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new J,y_=new Go;class le{constructor(t,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],b=r[8],R=l[0],y=l[3],_=l[6],B=l[1],O=l[4],C=l[7],I=l[2],H=l[5],G=l[8];return u[0]=h*R+d*B+m*I,u[3]=h*y+d*O+m*H,u[6]=h*_+d*C+m*G,u[1]=p*R+g*B+v*I,u[4]=p*y+g*O+v*H,u[7]=p*_+g*C+v*G,u[2]=x*R+M*B+b*I,u[5]=x*y+M*O+b*H,u[8]=x*_+M*C+b*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,b=i*v+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*p-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(eh.makeScale(t,i)),this}rotate(t){return this.premultiply(eh.makeRotation(-t)),this}translate(t,i){return this.premultiply(eh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new le;function C0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=Pc("canvas");return o.style.display="block",o}const M_={};function ys(o){o in M_||(M_[o]=!0,console.warn(o))}function QS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const E_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JS(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?Nc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:t,whitePoint:r,transfer:Nc,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Ae=JS();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ns;class $S{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ns===void 0&&(ns=Pc("canvas")),ns.width=t.width,ns.height=t.height;const l=ns.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ns}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ra(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ty=0;class Dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Ha(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(nh(l[h].image)):u.push(nh(l[h]))}else u=nh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$S.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ey=0;const ih=new J;class zn extends ws{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=mr,l=mr,u=Ni,h=gr,d=yi,m=Pi,p=zn.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Ha(),this.name="",this.source=new Dd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==v0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kh:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kh:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=v0;zn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,i=0,r=0,l=1){Ie.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,C=(M+1)/2,I=(_+1)/2,H=(g+x)/4,G=(v+R)/4,K=(b+y)/4;return O>C&&O>I?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=H/r,u=G/r):C>I?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=H/l,u=K/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=G/u,l=K/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(v-R)/B,this.z=(x-g)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ny extends ws{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ie(0,0,t,i),this.scissorTest=!1,this.viewport=new Ie(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new zn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Dd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends ny{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class D0 extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iy extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),ec.subVectors(this.max,Ao),is.subVectors(t.a,Ao),as.subVectors(t.b,Ao),rs.subVectors(t.c,Ao),Ua.subVectors(as,is),La.subVectors(rs,as),rr.subVectors(is,rs);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-rr.z,rr.y,Ua.z,0,-Ua.x,La.z,0,-La.x,rr.z,0,-rr.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-rr.y,rr.x,0];return!ah(i,is,as,rs,ec)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,is,as,rs,ec))?!1:(nc.crossVectors(Ua,La),i=[nc.x,nc.y,nc.z],ah(i,is,as,rs,ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new J,new J,new J,new J,new J,new J,new J,new J],vi=new J,tc=new Vo,is=new J,as=new J,rs=new J,Ua=new J,La=new J,rr=new J,Ao=new J,ec=new J,nc=new J,sr=new J;function ah(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){sr.fromArray(o,u);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),m=t.dot(sr),p=i.dot(sr),g=r.dot(sr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const ay=new Vo,Ro=new J,rh=new J;class Hc{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ay.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(rh)),this.expandByPoint(Ro.copy(t.center).sub(rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new J,sh=new J,ic=new J,Na=new J,oh=new J,ac=new J,lh=new J;class U0{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){sh.copy(t).add(i).multiplyScalar(.5),ic.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(sh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(ic),d=Na.dot(this.direction),m=-Na.dot(ic),p=Na.lengthSq(),g=Math.abs(1-h*h);let v,x,M,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const R=1/g;v*=R,x*=R,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(sh).addScaledVector(ic,x),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,u){oh.subVectors(i,t),ac.subVectors(r,t),lh.crossVectors(oh,ac);let h=this.direction.dot(lh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,t);const m=d*this.direction.dot(ac.crossVectors(Na,ac));if(m<0)return null;const p=d*this.direction.dot(oh.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(lh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,u,h,d,m,p,g,v,x,M,b,R,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,v,x,M,b,R,y)}set(t,i,r,l,u,h,d,m,p,g,v,x,M,b,R,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ss.setFromMatrixColumn(t,0).length(),u=1/ss.setFromMatrixColumn(t,1).length(),h=1/ss.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,b=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,b=d*g,R=d*v;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=b*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+b,i[10]=x-R*v}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ry,t,sy)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Oa.crossVectors(r,Kn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Oa.crossVectors(r,Kn)),Oa.normalize(),rc.crossVectors(Kn,Oa),l[0]=Oa.x,l[4]=rc.x,l[8]=Kn.x,l[1]=Oa.y,l[5]=rc.y,l[9]=Kn.y,l[2]=Oa.z,l[6]=rc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],b=r[2],R=r[6],y=r[10],_=r[14],B=r[3],O=r[7],C=r[11],I=r[15],H=l[0],G=l[4],K=l[8],D=l[12],w=l[1],z=l[5],ht=l[9],Y=l[13],at=l[2],ct=l[6],N=l[10],q=l[14],X=l[3],_t=l[7],U=l[11],et=l[15];return u[0]=h*H+d*w+m*at+p*X,u[4]=h*G+d*z+m*ct+p*_t,u[8]=h*K+d*ht+m*N+p*U,u[12]=h*D+d*Y+m*q+p*et,u[1]=g*H+v*w+x*at+M*X,u[5]=g*G+v*z+x*ct+M*_t,u[9]=g*K+v*ht+x*N+M*U,u[13]=g*D+v*Y+x*q+M*et,u[2]=b*H+R*w+y*at+_*X,u[6]=b*G+R*z+y*ct+_*_t,u[10]=b*K+R*ht+y*N+_*U,u[14]=b*D+R*Y+y*q+_*et,u[3]=B*H+O*w+C*at+I*X,u[7]=B*G+O*z+C*ct+I*_t,u[11]=B*K+O*ht+C*N+I*U,u[15]=B*D+O*Y+C*q+I*et,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],b=t[3],R=t[7],y=t[11],_=t[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+R*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],b=t[12],R=t[13],y=t[14],_=t[15],B=v*y*p-R*x*p+R*m*M-d*y*M-v*m*_+d*x*_,O=b*x*p-g*y*p-b*m*M+h*y*M+g*m*_-h*x*_,C=g*R*p-b*v*p+b*d*M-h*R*M-g*d*_+h*v*_,I=b*v*m-g*R*m-b*d*x+h*R*x+g*d*y-h*v*y,H=i*B+r*O+l*C+u*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return t[0]=B*G,t[1]=(R*x*u-v*y*u-R*l*M+r*y*M+v*l*_-r*x*_)*G,t[2]=(d*y*u-R*m*u+R*l*p-r*y*p-d*l*_+r*m*_)*G,t[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*G,t[4]=O*G,t[5]=(g*y*u-b*x*u+b*l*M-i*y*M-g*l*_+i*x*_)*G,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*G,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*G,t[8]=C*G,t[9]=(b*v*u-g*R*u-b*r*M+i*R*M+g*r*_-i*v*_)*G,t[10]=(h*R*u-b*d*u+b*r*p-i*R*p-h*r*_+i*d*_)*G,t[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*M-i*d*M)*G,t[12]=I*G,t[13]=(g*R*l-b*v*l+b*r*x-i*R*x-g*r*y+i*v*y)*G,t[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*y-i*d*y)*G,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*G,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,b=u*v,R=h*g,y=h*v,_=d*v,B=m*p,O=m*g,C=m*v,I=r.x,H=r.y,G=r.z;return l[0]=(1-(R+_))*I,l[1]=(M+C)*I,l[2]=(b-O)*I,l[3]=0,l[4]=(M-C)*H,l[5]=(1-(x+_))*H,l[6]=(y+B)*H,l[7]=0,l[8]=(b+O)*G,l[9]=(y-B)*G,l[10]=(1-(x+R))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ss.set(l[0],l[1],l[2]).length();const h=ss.set(l[4],l[5],l[6]).length(),d=ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/u,g=1/h,v=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,i.setFromRotationMatrix(xi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=Oi,m=!1){const p=this.elements,g=2*u/(i-t),v=2*u/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let b,R;if(m)b=u/(h-u),R=h*u/(h-u);else if(d===Oi)b=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Oc)b=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=Oi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,R;if(m)b=1/(h-u),R=h/(h-u);else if(d===Oi)b=-2/(h-u),R=-(h+u)/(h-u);else if(d===Oc)b=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ss=new J,xi=new Ye,ry=new J(0,0,0),sy=new J(1,1,1),Oa=new J,rc=new J,Kn=new J,b_=new Ye,A_=new Go;class zi{constructor(t=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return b_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class L0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oy=0;const R_=new J,os=new Go,ta=new Ye,sc=new J,wo=new J,ly=new J,cy=new Go,w_=new J(1,0,0),C_=new J(0,1,0),D_=new J(0,0,1),U_={type:"added"},uy={type:"removed"},ls={type:"childadded",child:null},ch={type:"childremoved",child:null};class Cn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new J,i=new zi,r=new Go,l=new J(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new le}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return os.setFromAxisAngle(t,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,i){return os.setFromAxisAngle(t,i),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?sc.copy(t):sc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(wo,sc,this.up):ta.lookAt(sc,wo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),os.setFromRotationMatrix(ta),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(uy),ch.child=t,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,ly),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,cy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new J(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new J,ea=new J,uh=new J,na=new J,cs=new J,us=new J,L_=new J,fh=new J,hh=new J,dh=new J,ph=new Ie,mh=new Ie,gh=new Ie;class ui{constructor(t=new J,i=new J,r=new J){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Si.subVectors(l,i),ea.subVectors(r,i),uh.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(ea),m=Si.dot(uh),p=ea.dot(ea),g=ea.dot(uh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(t,i),mh.fromBufferAttribute(t,r),gh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ph,u.x),h.addScaledVector(mh,u.y),h.addScaledVector(gh,u.z),h}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),ea.subVectors(t,i),Si.cross(ea).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),Si.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return ui.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;cs.subVectors(l,r),us.subVectors(u,r),fh.subVectors(t,r);const m=cs.dot(fh),p=us.dot(fh);if(m<=0&&p<=0)return i.copy(r);hh.subVectors(t,l);const g=cs.dot(hh),v=us.dot(hh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(cs,h);dh.subVectors(t,u);const M=cs.dot(dh),b=us.dot(dh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(us,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return L_.subVectors(u,l),d=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(L_,d);const _=1/(y+R+x);return h=R*_,d=x*_,i.copy(r).addScaledVector(cs,h).addScaledVector(us,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const N0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},oc={h:0,s:0,l:0};function _h(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Se{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=ZS(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=_h(h,u,t+1/3),this.g=_h(h,u,t),this.b=_h(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=N0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ae.workingToColorSpace(wn.copy(this),t),Math.round(xe(wn.r*255,0,255))*65536+Math.round(xe(wn.g*255,0,255))*256+Math.round(xe(wn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ci){Ae.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(oc);const r=$f(Pa.h,oc.h,i),l=$f(Pa.s,oc.s,i),u=$f(Pa.l,oc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Se;Se.NAMES=N0;let fy=0;class xr extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Ss,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Nh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zc extends xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new J,lc=new he;let hy=0;class $n{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=_d,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(t),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Li(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Be(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Li(i,this.array)),i}setX(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Li(i,this.array)),i}setY(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Li(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Li(i,this.array)),i}setW(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array),u=Be(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_d&&(t.usage=this.usage),t}}class O0 extends $n{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class P0 extends $n{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ti extends $n{constructor(t,i,r){super(new Float32Array(t),i,r)}}let dy=0;const li=new Ye,vh=new Cn,fs=new J,Qn=new Vo,Co=new Vo,vn=new J;class hi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(C0(t)?P0:O0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return vh.lookAt(t),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ti(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Qn.min,Co.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Co.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Co.min),Qn.expandByPoint(Co.max))}Qn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(fs.fromBufferAttribute(t,p),vn.add(fs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new J,m[K]=new J;const p=new J,g=new J,v=new J,x=new he,M=new he,b=new he,R=new J,y=new J;function _(K,D,w){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,K),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,w),g.sub(p),v.sub(p),M.sub(x),b.sub(x);const z=1/(M.x*b.y-b.x*M.y);isFinite(z)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(z),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(z),d[K].add(R),d[D].add(R),d[w].add(R),m[K].add(y),m[D].add(y),m[w].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let K=0,D=B.length;K<D;++K){const w=B[K],z=w.start,ht=w.count;for(let Y=z,at=z+ht;Y<at;Y+=3)_(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const O=new J,C=new J,I=new J,H=new J;function G(K){I.fromBufferAttribute(l,K),H.copy(I);const D=d[K];O.copy(D),O.sub(I.multiplyScalar(I.dot(D))).normalize(),C.crossVectors(H,D);const z=C.dot(m[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,z)}for(let K=0,D=B.length;K<D;++K){const w=B[K],z=w.start,ht=w.count;for(let Y=z,at=z+ht;Y<at;Y+=3)G(t.getX(Y+0)),G(t.getX(Y+1)),G(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $n(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,g=new J,v=new J;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)x[b++]=p[M++]}return new $n(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new hi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new Ye,or=new U0,cc=new Hc,O_=new J,uc=new J,fc=new J,hc=new J,xh=new J,dc=new J,P_=new J,pc=new J;class fi extends Cn{constructor(t=new hi,i=new zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(xh.fromBufferAttribute(v,t),h?dc.addScaledVector(xh,g):dc.addScaledVector(xh.sub(i),g))}i.add(dc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(u),or.copy(t.ray).recast(t.near),!(cc.containsPoint(or.origin)===!1&&(or.intersectSphere(cc,O_)===null||or.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(N_.copy(u).invert(),or.copy(t.ray).applyMatrix4(N_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=B,I=O;C<I;C+=3){const H=d.getX(C),G=d.getX(C+1),K=d.getX(C+2);l=mc(this,_,t,r,p,g,v,H,G,K),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const B=d.getX(y),O=d.getX(y+1),C=d.getX(y+2);l=mc(this,h,t,r,p,g,v,B,O,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=B,I=O;C<I;C+=3){const H=C,G=C+1,K=C+2;l=mc(this,_,t,r,p,g,v,H,G,K),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const B=y,O=y+1,C=y+2;l=mc(this,h,t,r,p,g,v,B,O,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function py(o,t,i,r,l,u,h,d){let m;if(t.side===Pn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Ga,d),m===null)return null;pc.copy(d),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,uc),o.getVertexPosition(m,fc),o.getVertexPosition(p,hc);const g=py(o,t,i,r,uc,fc,hc,P_);if(g){const v=new J;ui.getBarycoord(P_,uc,fc,hc,v),l&&(g.uv=ui.getInterpolatedAttribute(l,d,m,p,v,new he)),u&&(g.uv1=ui.getInterpolatedAttribute(u,d,m,p,v,new he)),h&&(g.normal=ui.getInterpolatedAttribute(h,d,m,p,v,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new J,materialIndex:0};ui.getNormal(uc,fc,hc,x.normal),g.face=x,g.barycoord=v}return g}class ko extends hi{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ti(p,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(v,2));function b(R,y,_,B,O,C,I,H,G,K,D){const w=C/G,z=I/K,ht=C/2,Y=I/2,at=H/2,ct=G+1,N=K+1;let q=0,X=0;const _t=new J;for(let U=0;U<N;U++){const et=U*z-Y;for(let vt=0;vt<ct;vt++){const st=vt*w-ht;_t[R]=st*B,_t[y]=et*O,_t[_]=at,p.push(_t.x,_t.y,_t.z),_t[R]=0,_t[y]=0,_t[_]=H>0?1:-1,g.push(_t.x,_t.y,_t.z),v.push(vt/G),v.push(1-U/K),q+=1}}for(let U=0;U<K;U++)for(let et=0;et<G;et++){const vt=x+et+ct*U,st=x+et+ct*(U+1),dt=x+(et+1)+ct*(U+1),Q=x+(et+1)+ct*U;m.push(vt,st,Q),m.push(st,dt,Q),X+=6}d.addGroup(M,X,D),M+=X,x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)t[l]=r[l]}return t}function my(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function z0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const gy={clone:Rs,merge:On};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=my(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class B0 extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new J,z_=new he,B_=new he;class Jn extends B0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vd*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,z_,B_),i.subVectors(B_,z_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ds=1;class xy extends Cn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(hs,ds,t,i);l.layers=this.layers,this.add(l);const u=new Jn(hs,ds,t,i);u.layers=this.layers,this.add(u);const h=new Jn(hs,ds,t,i);h.layers=this.layers,this.add(h);const d=new Jn(hs,ds,t,i);d.layers=this.layers,this.add(d);const m=new Jn(hs,ds,t,i);m.layers=this.layers,this.add(m);const p=new Jn(hs,ds,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Oc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class I0 extends zn{constructor(t=[],i=Ts,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sy extends vr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new I0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),u=new sa({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new fi(l,u),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=Ni),new xy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class gc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class My extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ey{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=_d,this.updateRanges=[],this.version=0,this.uuid=Ha()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ha()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ha()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new J;class Bc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix4(t),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.applyNormalMatrix(t),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.transformDirection(t),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Li(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Be(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Li(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Li(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Li(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Li(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array),u=Be(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new $n(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Bc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class F0 extends xr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ps;const Do=new J,ms=new J,gs=new J,_s=new he,Uo=new he,H0=new Ye,_c=new J,Lo=new J,vc=new J,I_=new he,yh=new he,F_=new he;class Ty extends Cn{constructor(t=new F0){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new hi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Ey(i,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Bc(r,3,0,!1)),ps.setAttribute("uv",new Bc(r,2,3,!1))}this.geometry=ps,this.material=t,this.center=new he(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),H0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const h=this.center;xc(_c.set(-.5,-.5,0),gs,h,ms,l,u),xc(Lo.set(.5,-.5,0),gs,h,ms,l,u),xc(vc.set(.5,.5,0),gs,h,ms,l,u),I_.set(0,0),yh.set(1,0),F_.set(1,1);let d=t.ray.intersectTriangle(_c,Lo,vc,!1,Do);if(d===null&&(xc(Lo.set(-.5,.5,0),gs,h,ms,l,u),yh.set(0,1),d=t.ray.intersectTriangle(_c,vc,Lo,!1,Do),d===null))return;const m=t.ray.origin.distanceTo(Do);m<t.near||m>t.far||i.push({distance:m,point:Do.clone(),uv:ui.getInterpolation(Do,_c,Lo,vc,I_,yh,F_,new he),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xc(o,t,i,r,l,u){_s.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Uo.x=u*_s.x-l*_s.y,Uo.y=l*_s.x+u*_s.y):Uo.copy(_s),o.copy(t),o.x+=Uo.x,o.y+=Uo.y,o.applyMatrix4(H0)}const Mh=new J,by=new J,Ay=new le;class fr{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Mh.subVectors(r,i).cross(by.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Mh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Ay.getNormalMatrix(t),l=this.coplanarPoint(Mh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Hc,Ry=new he(.5,.5),Sc=new J;class Ud{constructor(t=new fr,i=new fr,r=new fr,l=new fr,u=new fr,h=new fr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Oi,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],M=u[7],b=u[8],R=u[9],y=u[10],_=u[11],B=u[12],O=u[13],C=u[14],I=u[15];if(l[0].setComponents(p-h,M-g,_-b,I-B).normalize(),l[1].setComponents(p+h,M+g,_+b,I+B).normalize(),l[2].setComponents(p+d,M+v,_+R,I+O).normalize(),l[3].setComponents(p-d,M-v,_-R,I-O).normalize(),r)l[4].setComponents(m,x,y,C).normalize(),l[5].setComponents(p-m,M-x,_-y,I-C).normalize();else if(l[4].setComponents(p-m,M-x,_-y,I-C).normalize(),i===Oi)l[5].setComponents(p+m,M+x,_+y,I+C).normalize();else if(i===Oc)l[5].setComponents(m,x,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){lr.center.set(0,0,0);const i=Ry.distanceTo(t.center);return lr.radius=.7071067811865476+i,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Sc.x=l.normal.x>0?t.max.x:t.min.x,Sc.y=l.normal.y>0?t.max.y:t.min.y,Sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class G0 extends xr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const H_=new Ye,xd=new U0,yc=new Hc,Mc=new J;class wy extends Cn{constructor(t=new hi,i=new G0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(l),yc.radius+=u,t.ray.intersectsSphere(yc)===!1)return;H_.copy(l).invert(),xd.copy(t.ray).applyMatrix4(H_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=x,R=M;b<R;b++){const y=p.getX(b);Mc.fromBufferAttribute(v,y),G_(Mc,y,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=x,R=M;b<R;b++)Mc.fromBufferAttribute(v,b),G_(Mc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function G_(o,t,i,r,l,u,h){const d=xd.distanceSqToPoint(o);if(d<i){const m=new J;xd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class No extends zn{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class V0 extends zn{constructor(t,i,r=_r,l,u,h,d=Mi,m=Mi,p,g=Io,v=1){if(g!==Io&&g!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Gc extends hi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<g;_++){const B=_*x-h;for(let O=0;O<p;O++){const C=O*v-u;b.push(C,-B,0),R.push(0,0,1),y.push(O/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const O=B+p*_,C=B+p*(_+1),I=B+1+p*(_+1),H=B+1+p*_;M.push(O,C,H),M.push(C,I,H)}this.setIndex(M),this.setAttribute("position",new ti(b,3)),this.setAttribute("normal",new ti(R,3)),this.setAttribute("uv",new ti(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ld extends hi{constructor(t=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,M=new J,b=new he;for(let R=0;R<=l;R++){for(let y=0;y<=r;y++){const _=u+y/r*h;M.x=v*Math.cos(_),M.y=v*Math.sin(_),m.push(M.x,M.y,M.z),p.push(0,0,1),b.x=(M.x/i+1)/2,b.y=(M.y/i+1)/2,g.push(b.x,b.y)}v+=x}for(let R=0;R<l;R++){const y=R*(r+1);for(let _=0;_<r;_++){const B=_+y,O=B,C=B+r+1,I=B+r+2,H=B+1;d.push(O,C,H),d.push(C,I,H)}}this.setIndex(d),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(p,3)),this.setAttribute("uv",new ti(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ld(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ic extends hi{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new J,x=new J,M=[],b=[],R=[],y=[];for(let _=0;_<=r;_++){const B=[],O=_/r;let C=0;_===0&&h===0?C=.5/i:_===r&&m===Math.PI&&(C=-.5/i);for(let I=0;I<=i;I++){const H=I/i;v.x=-t*Math.cos(l+H*u)*Math.sin(h+O*d),v.y=t*Math.cos(h+O*d),v.z=t*Math.sin(l+H*u)*Math.sin(h+O*d),b.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),y.push(H+C,1-O),B.push(p++)}g.push(B)}for(let _=0;_<r;_++)for(let B=0;B<i;B++){const O=g[_][B+1],C=g[_][B],I=g[_+1][B],H=g[_+1][B+1];(_!==0||h>0)&&M.push(O,C,H),(_!==r-1||m<Math.PI)&&M.push(C,I,H)}this.setIndex(M),this.setAttribute("position",new ti(b,3)),this.setAttribute("normal",new ti(R,3)),this.setAttribute("uv",new ti(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ec extends xr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=R0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cy extends xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dy extends xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class k0 extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Eh=new Ye,V_=new J,k_=new J;class Uy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ud,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;V_.setFromMatrixPosition(t.matrixWorld),i.position.copy(V_),k_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(k_),i.updateMatrixWorld(),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const X_=new Ye,Oo=new J,Th=new J;class Ly extends Uy{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Oo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Oo),Th.copy(r.position),Th.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Th),r.updateMatrixWorld(),l.makeTranslation(-Oo.x,-Oo.y,-Oo.z),X_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X_,r.coordinateSystem,r.reversedDepth)}}class Ny extends k0{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Ly}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Oy extends B0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Py extends k0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class zy extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function W_(o,t,i,r){const l=By(r);switch(i){case M0:return o*t;case T0:return o*t/l.components*l.byteLength;case Rd:return o*t/l.components*l.byteLength;case b0:return o*t*2/l.components*l.byteLength;case wd:return o*t*2/l.components*l.byteLength;case E0:return o*t*3/l.components*l.byteLength;case yi:return o*t*4/l.components*l.byteLength;case Cd:return o*t*4/l.components*l.byteLength;case Rc:case wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Cc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qh:case jh:return Math.max(o,16)*Math.max(t,8)/4;case Wh:case Yh:return Math.max(o,8)*Math.max(t,8)/2;case Zh:case Kh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case td:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ed:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case nd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case id:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ad:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case rd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case sd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case od:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ld:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case cd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ud:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case fd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Uc:case hd:case dd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case A0:case pd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case md:case gd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function By(o){switch(o){case Pi:case x0:return{byteLength:1,components:1};case zo:case S0:case Ho:return{byteLength:2,components:1};case bd:case Ad:return{byteLength:2,components:4};case _r:case Td:case aa:return{byteLength:4,components:1};case y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X0(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Iy(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
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
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yy=`#ifdef USE_BATCHING
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
#endif`,jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
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
#endif`,$y=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
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
#endif`,BM=`struct PhysicalMaterial {
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
}`,IM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
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
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
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
}`,WE=`#if DEPTH_PACKING == 3200
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
}`,qE=`#define DISTANCE
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
}`,YE=`#define DISTANCE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,tT=`#define LAMBERT
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
}`,eT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,rT=`#define NORMAL
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
}`,sT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Fy,alphahash_pars_fragment:Hy,alphamap_fragment:Gy,alphamap_pars_fragment:Vy,alphatest_fragment:ky,alphatest_pars_fragment:Xy,aomap_fragment:Wy,aomap_pars_fragment:qy,batching_pars_vertex:Yy,batching_vertex:jy,begin_vertex:Zy,beginnormal_vertex:Ky,bsdfs:Qy,iridescence_fragment:Jy,bumpmap_pars_fragment:$y,clipping_planes_fragment:tM,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:aM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:lM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:dM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:_M,envmap_common_pars_fragment:vM,envmap_pars_fragment:xM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:UM,envmap_vertex:yM,fog_vertex:MM,fog_pars_vertex:EM,fog_fragment:TM,fog_pars_fragment:bM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:wM,lights_lambert_pars_fragment:CM,lights_pars_begin:DM,lights_toon_fragment:LM,lights_toon_pars_fragment:NM,lights_phong_fragment:OM,lights_phong_pars_fragment:PM,lights_physical_fragment:zM,lights_physical_pars_fragment:BM,lights_fragment_begin:IM,lights_fragment_maps:FM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:XM,map_fragment:WM,map_pars_fragment:qM,map_particle_fragment:YM,map_particle_pars_fragment:jM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:KM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:$M,morphtarget_pars_vertex:tE,morphtarget_vertex:eE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:aE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:SE,shadowmap_pars_vertex:yE,shadowmap_vertex:ME,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:bE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:wE,specularmap_pars_fragment:CE,tonemapping_fragment:DE,tonemapping_pars_fragment:UE,transmission_fragment:LE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:PE,uv_vertex:zE,worldpos_vertex:BE,background_vert:IE,background_frag:FE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:kE,depth_vert:XE,depth_frag:WE,distanceRGBA_vert:qE,distanceRGBA_frag:YE,equirect_vert:jE,equirect_frag:ZE,linedashed_vert:KE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:$E,meshlambert_vert:tT,meshlambert_frag:eT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:rT,meshphong_vert:sT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Ot={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Di={basic:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Se(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:On([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:On([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Se(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:On([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:On([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:On([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:On([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:On([Ot.common,Ot.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:On([Ot.lights,Ot.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Di.physical={uniforms:On([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Tc={r:0,b:0,g:0},cr=new zi,vT=new Ye;function xT(o,t,i,r,l,u,h){const d=new Se(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function b(O){let C=O.isScene===!0?O.background:null;return C&&C.isTexture&&(C=(O.backgroundBlurriness>0?i:t).get(C)),C}function R(O){let C=!1;const I=b(O);I===null?_(d,m):I&&I.isColor&&(_(I,1),C=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,C){const I=b(C);I&&(I.isCubeTexture||I.mapping===Fc)?(g===void 0&&(g=new fi(new ko(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Rs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,G,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),cr.copy(C.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(cr)),g.material.toneMapped=Ae.getTransfer(I.colorSpace)!==ze,(v!==I||x!==I.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=I,x=I.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new fi(new Gc(2,2),new sa({name:"BackgroundMaterial",uniforms:Rs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(I.colorSpace)!==ze,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=I,x=I.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,C){O.getRGB(Tc,z0(o)),r.buffers.color.setClear(Tc.r,Tc.g,Tc.b,C,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,C=1){d.set(O),m=C,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:R,addToRenderList:y,dispose:B}}function ST(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(w,z,ht,Y,at){let ct=!1;const N=v(Y,ht,z);u!==N&&(u=N,p(u.object)),ct=M(w,Y,ht,at),ct&&b(w,Y,ht,at),at!==null&&t.update(at,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,C(w,z,ht,Y),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function v(w,z,ht){const Y=ht.wireframe===!0;let at=r[w.id];at===void 0&&(at={},r[w.id]=at);let ct=at[z.id];ct===void 0&&(ct={},at[z.id]=ct);let N=ct[Y];return N===void 0&&(N=x(m()),ct[Y]=N),N}function x(w){const z=[],ht=[],Y=[];for(let at=0;at<i;at++)z[at]=0,ht[at]=0,Y[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ht,attributeDivisors:Y,object:w,attributes:{},index:null}}function M(w,z,ht,Y){const at=u.attributes,ct=z.attributes;let N=0;const q=ht.getAttributes();for(const X in q)if(q[X].location>=0){const U=at[X];let et=ct[X];if(et===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(et=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(et=w.instanceColor)),U===void 0||U.attribute!==et||et&&U.data!==et.data)return!0;N++}return u.attributesNum!==N||u.index!==Y}function b(w,z,ht,Y){const at={},ct=z.attributes;let N=0;const q=ht.getAttributes();for(const X in q)if(q[X].location>=0){let U=ct[X];U===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const et={};et.attribute=U,U&&U.data&&(et.data=U.data),at[X]=et,N++}u.attributes=at,u.attributesNum=N,u.index=Y}function R(){const w=u.newAttributes;for(let z=0,ht=w.length;z<ht;z++)w[z]=0}function y(w){_(w,0)}function _(w,z){const ht=u.newAttributes,Y=u.enabledAttributes,at=u.attributeDivisors;ht[w]=1,Y[w]===0&&(o.enableVertexAttribArray(w),Y[w]=1),at[w]!==z&&(o.vertexAttribDivisor(w,z),at[w]=z)}function B(){const w=u.newAttributes,z=u.enabledAttributes;for(let ht=0,Y=z.length;ht<Y;ht++)z[ht]!==w[ht]&&(o.disableVertexAttribArray(ht),z[ht]=0)}function O(w,z,ht,Y,at,ct,N){N===!0?o.vertexAttribIPointer(w,z,ht,at,ct):o.vertexAttribPointer(w,z,ht,Y,at,ct)}function C(w,z,ht,Y){R();const at=Y.attributes,ct=ht.getAttributes(),N=z.defaultAttributeValues;for(const q in ct){const X=ct[q];if(X.location>=0){let _t=at[q];if(_t===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const U=_t.normalized,et=_t.itemSize,vt=t.get(_t);if(vt===void 0)continue;const st=vt.buffer,dt=vt.type,Q=vt.bytesPerElement,ut=dt===o.INT||dt===o.UNSIGNED_INT||_t.gpuType===Td;if(_t.isInterleavedBufferAttribute){const Mt=_t.data,Ct=Mt.stride,Bt=_t.offset;if(Mt.isInstancedInterleavedBuffer){for(let ee=0;ee<X.locationSize;ee++)_(X.location+ee,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ee=0;ee<X.locationSize;ee++)y(X.location+ee);o.bindBuffer(o.ARRAY_BUFFER,st);for(let ee=0;ee<X.locationSize;ee++)O(X.location+ee,et/X.locationSize,dt,U,Ct*Q,(Bt+et/X.locationSize*ee)*Q,ut)}else{if(_t.isInstancedBufferAttribute){for(let Mt=0;Mt<X.locationSize;Mt++)_(X.location+Mt,_t.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Mt=0;Mt<X.locationSize;Mt++)y(X.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,st);for(let Mt=0;Mt<X.locationSize;Mt++)O(X.location+Mt,et/X.locationSize,dt,U,et*Q,et/X.locationSize*Mt*Q,ut)}}else if(N!==void 0){const U=N[q];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(X.location,U);break;case 3:o.vertexAttrib3fv(X.location,U);break;case 4:o.vertexAttrib4fv(X.location,U);break;default:o.vertexAttrib1fv(X.location,U)}}}}B()}function I(){K();for(const w in r){const z=r[w];for(const ht in z){const Y=z[ht];for(const at in Y)g(Y[at].object),delete Y[at];delete z[ht]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const z=r[w.id];for(const ht in z){const Y=z[ht];for(const at in Y)g(Y[at].object),delete Y[at];delete z[ht]}delete r[w.id]}function G(w){for(const z in r){const ht=r[z];if(ht[w.id]===void 0)continue;const Y=ht[w.id];for(const at in Y)g(Y[at].object),delete Y[at];delete ht[w.id]}}function K(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:G,initAttributes:R,enableAttribute:y,disableUnusedAttributes:B}}function yT(o,t,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R]*x[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function MT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==yi&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const K=G===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==Pi&&r.convert(G)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==aa&&!K)}function m(G){if(G==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:C,vertexTextures:I,maxSamples:H}}function ET(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new fr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const B=u?0:r,O=B*4;let C=_.clippingState||null;m.value=C,C=g(b,x,O,M);for(let I=0;I!==O;++I)C[I]=i[I];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,C=M;O!==R;++O,C+=4)h.copy(v[O]).applyMatrix4(B,d),h.normal.toArray(y,C),y[C+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function TT(o){let t=new WeakMap;function i(h,d){return d===Gh?h.mapping=Ts:d===Vh&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Sy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const xs=4,q_=[.125,.215,.35,.446,.526,.582],pr=20,bh=new Oy,Y_=new Se;let Ah=null,Rh=0,wh=0,Ch=!1;const hr=(1+Math.sqrt(5))/2,vs=1/hr,j_=[new J(-hr,vs,0),new J(hr,vs,0),new J(-vs,0,hr),new J(vs,0,hr),new J(0,hr,-vs),new J(0,hr,vs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],bT=new J;class Z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=bT}=u;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Rh,wh),this._renderer.xr.enabled=Ch,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Ho,format:yi,colorSpace:As,depthBuffer:!1},l=K_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(u)),this._blurMaterial=RT(u,t,i)}return l}_compileMaterial(t){const i=new fi(this._lodPlanes[0],t);this._renderer.compile(i,bh)}_sceneToCubeUV(t,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(Y_),v.toneMapping=Fa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new zc({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),y=new fi(new ko,R);let _=!1;const B=t.background;B?B.isColor&&(R.color.copy(B),t.background=null,_=!0):(R.color.copy(Y_),_=!0);for(let O=0;O<6;O++){const C=O%3;C===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):C===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const I=this._cubeSize;bc(l,C*I,O>2?I:0,I,I),v.setRenderTarget(l),_&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=B}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new fi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;bc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,bh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=j_[(l-u-1)%j_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new fi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*pr-1),R=u/b,y=isFinite(u)?1+Math.floor(g*R):pr;y>pr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${pr}`);const _=[];let B=0;for(let G=0;G<pr;++G){const K=G/R,D=Math.exp(-K*K/2);_.push(D),G===0?B+=D:G<y&&(B+=2*D)}for(let G=0;G<_.length;G++)_[G]=_[G]/B;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=b,x.mipInt.value=O-r;const C=this._sizeLods[l],I=3*C*(l>O-xs?l-O+xs:0),H=4*(this._cubeSize-C);bc(i,I,H,3*C,2*C),m.setRenderTarget(i),m.render(v,bh)}}function AT(o){const t=[],i=[],r=[];let l=o;const u=o-xs+1+q_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-xs?m=q_[h-o+xs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,R=3,y=2,_=1,B=new Float32Array(R*b*M),O=new Float32Array(y*b*M),C=new Float32Array(_*b*M);for(let H=0;H<M;H++){const G=H%3*2/3-1,K=H>2?0:-1,D=[G,K,0,G+2/3,K,0,G+2/3,K+1,0,G,K,0,G+2/3,K+1,0,G,K+1,0];B.set(D,R*b*H),O.set(x,y*b*H);const w=[H,H,H,H,H,H];C.set(w,_*b*H)}const I=new hi;I.setAttribute("position",new $n(B,R)),I.setAttribute("uv",new $n(O,y)),I.setAttribute("faceIndex",new $n(C,_)),t.push(I),l>xs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function K_(o,t,i){const r=new vr(o,t,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function RT(o,t,i){const r=new Float32Array(pr),l=new J(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Q_(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function J_(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function wT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Gh||m===Vh,g=m===Ts||m===bs;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Z_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Z_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function CT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function DT(o,t,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,b=v.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let O=0,C=B.length;O<C;O+=3){const I=B[O+0],H=B[O+1],G=B[O+2];x.push(I,H,H,G,G,I)}}else if(b!==void 0){const B=b.array;R=b.version;for(let O=0,C=B.length/3-1;O<C;O+=3){const I=O+0,H=O+1,G=O+2;x.push(I,H,H,G,G,I)}}else return;const y=new(C0(x)?P0:O0)(x,1);y.version=R;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function UT(o,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,x*h,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,r,1)}function v(x,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,R,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B]*R[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function LT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function NT(o,t,i){const r=new WeakMap,l=new Ie;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let I=d.attributes.position.count*C,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const G=new Float32Array(I*H*4*v),K=new D0(G,I,H,v);K.type=aa,K.needsUpdate=!0;const D=C*4;for(let z=0;z<v;z++){const ht=_[z],Y=B[z],at=O[z],ct=I*H*4*z;for(let N=0;N<ht.count;N++){const q=N*D;b===!0&&(l.fromBufferAttribute(ht,N),G[ct+q+0]=l.x,G[ct+q+1]=l.y,G[ct+q+2]=l.z,G[ct+q+3]=0),R===!0&&(l.fromBufferAttribute(Y,N),G[ct+q+4]=l.x,G[ct+q+5]=l.y,G[ct+q+6]=l.z,G[ct+q+7]=0),y===!0&&(l.fromBufferAttribute(at,N),G[ct+q+8]=l.x,G[ct+q+9]=l.y,G[ct+q+10]=l.z,G[ct+q+11]=at.itemSize===4?l.w:1)}}x={count:v,texture:K,size:new he(I,H)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function OT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const W0=new zn,$_=new V0(1,1),q0=new D0,Y0=new iy,j0=new I0,t0=[],e0=[],n0=new Float32Array(16),i0=new Float32Array(9),a0=new Float32Array(4);function Cs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=t0[l];if(u===void 0&&(u=new Float32Array(l),t0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Vc(o,t){let i=e0[t];i===void 0&&(i=new Int32Array(t),e0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function PT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function BT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function FT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;a0.set(r),o.uniformMatrix2fv(this.addr,!1,a0),dn(i,r)}}function HT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;i0.set(r),o.uniformMatrix3fv(this.addr,!1,i0),dn(i,r)}}function GT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;n0.set(r),o.uniformMatrix4fv(this.addr,!1,n0),dn(i,r)}}function VT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function WT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function qT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function jT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function ZT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function KT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?($_.compareFunction=w0,u=$_):u=W0,i.setTexture2D(t||u,l)}function QT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Y0,l)}function JT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||j0,l)}function $T(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||q0,l)}function tb(o){switch(o){case 5126:return PT;case 35664:return zT;case 35665:return BT;case 35666:return IT;case 35674:return FT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return kT;case 35668:case 35672:return XT;case 35669:case 35673:return WT;case 5125:return qT;case 36294:return YT;case 36295:return jT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}function eb(o,t){o.uniform1fv(this.addr,t)}function nb(o,t){const i=Cs(t,this.size,2);o.uniform2fv(this.addr,i)}function ib(o,t){const i=Cs(t,this.size,3);o.uniform3fv(this.addr,i)}function ab(o,t){const i=Cs(t,this.size,4);o.uniform4fv(this.addr,i)}function rb(o,t){const i=Cs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sb(o,t){const i=Cs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ob(o,t){const i=Cs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function lb(o,t){o.uniform1iv(this.addr,t)}function cb(o,t){o.uniform2iv(this.addr,t)}function ub(o,t){o.uniform3iv(this.addr,t)}function fb(o,t){o.uniform4iv(this.addr,t)}function hb(o,t){o.uniform1uiv(this.addr,t)}function db(o,t){o.uniform2uiv(this.addr,t)}function pb(o,t){o.uniform3uiv(this.addr,t)}function mb(o,t){o.uniform4uiv(this.addr,t)}function gb(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||W0,u[h])}function _b(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Y0,u[h])}function vb(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||j0,u[h])}function xb(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||q0,u[h])}function Sb(o){switch(o){case 5126:return eb;case 35664:return nb;case 35665:return ib;case 35666:return ab;case 35674:return rb;case 35675:return sb;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return fb;case 5125:return hb;case 36294:return db;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}class yb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=tb(i.type)}}class Mb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Sb(i.type)}}class Eb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function r0(o,t){o.seq.push(t),o.map[t.id]=t}function Tb(o,t,i){const r=o.name,l=r.length;for(Dh.lastIndex=0;;){const u=Dh.exec(r),h=Dh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){r0(i,p===void 0?new yb(d,o,t):new Mb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Eb(d),r0(i,v)),i=v}}}class Lc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);Tb(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function s0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const bb=37297;let Ab=0;function Rb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const o0=new le;function wb(o){Ae._getMatrix(o0,Ae.workingColorSpace,o);const t=`mat3( ${o0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Nc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function l0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Rb(o.getShaderSource(t),d)}else return u}function Cb(o,t){const i=wb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Db(o,t){let i;switch(t){case _0:i="Linear";break;case LS:i="Reinhard";break;case NS:i="Cineon";break;case OS:i="ACESFilmic";break;case zS:i="AgX";break;case BS:i="Neutral";break;case PS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new J;function Ub(){Ae.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Nb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Ob(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Po(o){return o!==""}function c0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function u0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(o){return o.replace(Pb,Bb)}const zb=new Map;function Bb(o,t){let i=fe[t];if(i===void 0){const r=zb.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Sd(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(o){return o.replace(Ib,Fb)}function Fb(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function h0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===g0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===fS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function Gb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case bs:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function kb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ed:t="ENVMAP_BLENDING_MULTIPLY";break;case DS:t="ENVMAP_BLENDING_MIX";break;case US:t="ENVMAP_BLENDING_ADD";break}return t}function Xb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Wb(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Hb(i),p=Gb(i),g=Vb(i),v=kb(i),x=Xb(i),M=Lb(i),b=Nb(u),R=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Po).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Po).join(`
`),_.length>0&&(_+=`
`)):(y=[h0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),_=[h0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Fa?Db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Cb("linearToOutputTexel",i.outputColorSpace),Ub(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),h=Sd(h),h=c0(h,i),h=u0(h,i),d=Sd(d),d=c0(d,i),d=u0(d,i),h=f0(h),d=f0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+y+h,C=B+_+d,I=s0(l,l.VERTEX_SHADER,O),H=s0(l,l.FRAGMENT_SHADER,C);l.attachShader(R,I),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function G(z){if(o.debug.checkShaderErrors){const ht=l.getProgramInfoLog(R)||"",Y=l.getShaderInfoLog(I)||"",at=l.getShaderInfoLog(H)||"",ct=ht.trim(),N=Y.trim(),q=at.trim();let X=!0,_t=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,I,H);else{const U=l0(l,I,"vertex"),et=l0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ct+`
`+U+`
`+et)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(N===""||q==="")&&(_t=!1);_t&&(z.diagnostics={runnable:X,programLog:ct,vertexShader:{log:N,prefix:y},fragmentShader:{log:q,prefix:_}})}l.deleteShader(I),l.deleteShader(H),K=new Lc(l,R),D=Ob(l,R)}let K;this.getUniforms=function(){return K===void 0&&G(this),K};let D;this.getAttributes=function(){return D===void 0&&G(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,bb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ab++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=H,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new jb(t),i.set(t,r)),r}}class jb{constructor(t){this.id=qb++,this.code=t,this.usedTimes=0}}function Zb(o,t,i,r,l,u,h){const d=new L0,m=new Yb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,w,z,ht,Y){const at=ht.fog,ct=Y.geometry,N=D.isMeshStandardMaterial?ht.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||N),X=q&&q.mapping===Fc?q.image.height:null,_t=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,et=U!==void 0?U.length:0;let vt=0;ct.morphAttributes.position!==void 0&&(vt=1),ct.morphAttributes.normal!==void 0&&(vt=2),ct.morphAttributes.color!==void 0&&(vt=3);let st,dt,Q,ut;if(_t){const Ee=Di[_t];st=Ee.vertexShader,dt=Ee.fragmentShader}else st=D.vertexShader,dt=D.fragmentShader,m.update(D),Q=m.getVertexShaderID(D),ut=m.getFragmentShaderID(D);const Mt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Bt=Y.isInstancedMesh===!0,ee=Y.isBatchedMesh===!0,Ge=!!D.map,me=!!D.matcap,F=!!q,we=!!D.aoMap,Kt=!!D.lightMap,Me=!!D.bumpMap,Ft=!!D.normalMap,Ve=!!D.displacementMap,Ht=!!D.emissiveMap,se=!!D.metalnessMap,je=!!D.roughnessMap,Ze=D.anisotropy>0,L=D.clearcoat>0,E=D.dispersion>0,nt=D.iridescence>0,pt=D.sheen>0,yt=D.transmission>0,ft=Ze&&!!D.anisotropyMap,Pt=L&&!!D.clearcoatMap,Rt=L&&!!D.clearcoatNormalMap,Xt=L&&!!D.clearcoatRoughnessMap,qt=nt&&!!D.iridescenceMap,Et=nt&&!!D.iridescenceThicknessMap,Lt=pt&&!!D.sheenColorMap,jt=pt&&!!D.sheenRoughnessMap,kt=!!D.specularMap,Dt=!!D.specularColorMap,re=!!D.specularIntensityMap,k=yt&&!!D.transmissionMap,At=yt&&!!D.thicknessMap,wt=!!D.gradientMap,zt=!!D.alphaMap,Tt=D.alphaTest>0,St=!!D.alphaHash,Vt=!!D.extensions;let ie=Fa;D.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ce={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:st,fragmentShader:dt,defines:D.defines,customVertexShaderID:Q,customFragmentShaderID:ut,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:ee,batchingColor:ee&&Y._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&Y.instanceColor!==null,instancingMorph:Bt&&Y.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:As,alphaToCoverage:!!D.alphaToCoverage,map:Ge,matcap:me,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:X,aoMap:we,lightMap:Kt,bumpMap:Me,normalMap:Ft,displacementMap:x&&Ve,emissiveMap:Ht,normalMapObjectSpace:Ft&&D.normalMapType===GS,normalMapTangentSpace:Ft&&D.normalMapType===R0,metalnessMap:se,roughnessMap:je,anisotropy:Ze,anisotropyMap:ft,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:nt,iridescenceMap:qt,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:Lt,sheenRoughnessMap:jt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:re,transmission:yt,transmissionMap:k,thicknessMap:At,gradientMap:wt,opaque:D.transparent===!1&&D.blending===Ss&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:Tt,alphaHash:St,combine:D.combine,mapUv:Ge&&R(D.map.channel),aoMapUv:we&&R(D.aoMap.channel),lightMapUv:Kt&&R(D.lightMap.channel),bumpMapUv:Me&&R(D.bumpMap.channel),normalMapUv:Ft&&R(D.normalMap.channel),displacementMapUv:Ve&&R(D.displacementMap.channel),emissiveMapUv:Ht&&R(D.emissiveMap.channel),metalnessMapUv:se&&R(D.metalnessMap.channel),roughnessMapUv:je&&R(D.roughnessMap.channel),anisotropyMapUv:ft&&R(D.anisotropyMap.channel),clearcoatMapUv:Pt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:jt&&R(D.sheenRoughnessMap.channel),specularMapUv:kt&&R(D.specularMap.channel),specularColorMapUv:Dt&&R(D.specularColorMap.channel),specularIntensityMapUv:re&&R(D.specularIntensityMap.channel),transmissionMapUv:k&&R(D.transmissionMap.channel),thicknessMapUv:At&&R(D.thicknessMap.channel),alphaMapUv:zt&&R(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Ft||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ct.attributes.uv&&(Ge||zt),fog:!!at,useFog:D.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ct,skinning:Y.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ge&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===ze,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===ze,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ui,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Vt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&D.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const z in D.defines)w.push(z),w.push(D.defines[z]);return D.isRawShaderMaterial===!1&&(B(w,D),O(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function B(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function O(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=b[D.type];let z;if(w){const ht=Di[w];z=gy.clone(ht.uniforms)}else z=D.uniforms;return z}function I(D,w){let z;for(let ht=0,Y=g.length;ht<Y;ht++){const at=g[ht];if(at.cacheKey===w){z=at,++z.usedTimes;break}}return z===void 0&&(z=new Wb(o,w,D,u),g.push(z)),z}function H(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function G(D){m.remove(D)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:I,releaseProgram:H,releaseShaderCache:G,programs:g,dispose:K}}function Kb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Qb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function d0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function p0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,b,R,y){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:R,group:y},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=y),t++,_}function d(v,x,M,b,R,y){const _=h(v,x,M,b,R,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,b,R,y){const _=h(v,x,M,b,R,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Qb),r.length>1&&r.sort(x||d0),l.length>1&&l.sort(x||d0)}function g(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Jb(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new p0,o.set(r,[h])):l>=u.length?(h=new p0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function $b(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Se};break;case"SpotLight":i={position:new J,direction:new J,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function tA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let eA=0;function nA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function iA(o){const t=new $b,i=tA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,u=new Ye,h=new Ye;function d(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,B=0,O=0,C=0,I=0,H=0,G=0;p.sort(nA);for(let D=0,w=p.length;D<w;D++){const z=p[D],ht=z.color,Y=z.intensity,at=z.distance,ct=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=ht.r*Y,v+=ht.g*Y,x+=ht.b*Y;else if(z.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(z.sh.coefficients[N],Y);G++}else if(z.isDirectionalLight){const N=t.get(z);if(N.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,X=i.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=ct,r.directionalShadowMatrix[M]=z.shadow.matrix,B++}r.directional[M]=N,M++}else if(z.isSpotLight){const N=t.get(z);N.position.setFromMatrixPosition(z.matrixWorld),N.color.copy(ht).multiplyScalar(Y),N.distance=at,N.coneCos=Math.cos(z.angle),N.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),N.decay=z.decay,r.spot[R]=N;const q=z.shadow;if(z.map&&(r.spotLightMap[I]=z.map,I++,q.updateMatrices(z),z.castShadow&&H++),r.spotLightMatrix[R]=q.matrix,z.castShadow){const X=i.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[R]=X,r.spotShadowMap[R]=ct,C++}R++}else if(z.isRectAreaLight){const N=t.get(z);N.color.copy(ht).multiplyScalar(Y),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=N,y++}else if(z.isPointLight){const N=t.get(z);if(N.color.copy(z.color).multiplyScalar(z.intensity),N.distance=z.distance,N.decay=z.decay,z.castShadow){const q=z.shadow,X=i.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[b]=X,r.pointShadowMap[b]=ct,r.pointShadowMatrix[b]=z.shadow.matrix,O++}r.point[b]=N,b++}else if(z.isHemisphereLight){const N=t.get(z);N.skyColor.copy(z.color).multiplyScalar(Y),N.groundColor.copy(z.groundColor).multiplyScalar(Y),r.hemi[_]=N,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==M||K.pointLength!==b||K.spotLength!==R||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==B||K.numPointShadows!==O||K.numSpotShadows!==C||K.numSpotMaps!==I||K.numLightProbes!==G)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=C+I-H,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=G,K.directionalLength=M,K.pointLength=b,K.spotLength=R,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=B,K.numPointShadows=O,K.numSpotShadows=C,K.numSpotMaps=I,K.numLightProbes=G,r.version=eA++)}function m(p,g){let v=0,x=0,M=0,b=0,R=0;const y=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const O=p[_];if(O.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(O.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),C.halfWidth.set(O.width*.5,0,0),C.halfHeight.set(0,O.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(O.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function m0(o){const t=new iA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function aA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new m0(o),t.set(l,[d])):u>=h.length?(d=new m0(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
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
}`;function oA(o,t,i){let r=new Ud;const l=new he,u=new he,h=new Ie,d=new Cy({depthPacking:HS}),m=new Dy,p={},g=i.maxTextureSize,v={[Ga]:Pn,[Pn]:Ga,[Ui]:Ui},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new hi;b.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fi(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let _=this.type;this.render=function(H,G,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),ht=o.state;ht.setBlending(Ia),ht.buffers.depth.getReversed()?ht.buffers.color.setClear(0,0,0,0):ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const Y=_!==ia&&this.type===ia,at=_===ia&&this.type!==ia;for(let ct=0,N=H.length;ct<N;ct++){const q=H[ct],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const _t=X.getFrameExtents();if(l.multiply(_t),u.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/_t.x),l.x=u.x*_t.x,X.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/_t.y),l.y=u.y*_t.y,X.mapSize.y=u.y)),X.map===null||Y===!0||at===!0){const et=this.type!==ia?{minFilter:Mi,magFilter:Mi}:{};X.map!==null&&X.map.dispose(),X.map=new vr(l.x,l.y,et),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const U=X.getViewportCount();for(let et=0;et<U;et++){const vt=X.getViewport(et);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),ht.viewport(h),X.updateMatrices(q,et),r=X.getFrustum(),C(G,K,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===ia&&B(X,K),X.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,z)};function B(H,G){const K=t.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new vr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(G,null,K,x,R,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(G,null,K,M,R,null)}function O(H,G,K,D){let w=null;const z=K.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)w=z;else if(w=K.isPointLight===!0?m:d,o.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const ht=w.uuid,Y=G.uuid;let at=p[ht];at===void 0&&(at={},p[ht]=at);let ct=at[Y];ct===void 0&&(ct=w.clone(),at[Y]=ct,G.addEventListener("dispose",I)),w=ct}if(w.visible=G.visible,w.wireframe=G.wireframe,D===ia?w.side=G.shadowSide!==null?G.shadowSide:G.side:w.side=G.shadowSide!==null?G.shadowSide:v[G.side],w.alphaMap=G.alphaMap,w.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,w.map=G.map,w.clipShadows=G.clipShadows,w.clippingPlanes=G.clippingPlanes,w.clipIntersection=G.clipIntersection,w.displacementMap=G.displacementMap,w.displacementScale=G.displacementScale,w.displacementBias=G.displacementBias,w.wireframeLinewidth=G.wireframeLinewidth,w.linewidth=G.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ht=o.properties.get(w);ht.light=K}return w}function C(H,G,K,D,w){if(H.visible===!1)return;if(H.layers.test(G.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===ia)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,H.matrixWorld);const Y=t.update(H),at=H.material;if(Array.isArray(at)){const ct=Y.groups;for(let N=0,q=ct.length;N<q;N++){const X=ct[N],_t=at[X.materialIndex];if(_t&&_t.visible){const U=O(H,_t,D,w);H.onBeforeShadow(o,H,G,K,Y,U,X),o.renderBufferDirect(K,null,Y,U,H,X),H.onAfterShadow(o,H,G,K,Y,U,X)}}}else if(at.visible){const ct=O(H,at,D,w);H.onBeforeShadow(o,H,G,K,Y,ct,null),o.renderBufferDirect(K,null,Y,ct,H,null),H.onAfterShadow(o,H,G,K,Y,ct,null)}}const ht=H.children;for(let Y=0,at=ht.length;Y<at;Y++)C(ht[Y],G,K,D,w)}function I(H){H.target.removeEventListener("dispose",I);for(const K in p){const D=p[K],w=H.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const lA={[Oh]:Ph,[zh]:Fh,[Bh]:Hh,[Es]:Ih,[Ph]:Oh,[Fh]:zh,[Hh]:Bh,[Ih]:Es};function cA(o,t){function i(){let k=!1;const At=new Ie;let wt=null;const zt=new Ie(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!k&&(o.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,St,Vt,ie,Ce){Ce===!0&&(Tt*=ie,St*=ie,Vt*=ie),At.set(Tt,St,Vt,ie),zt.equals(At)===!1&&(o.clearColor(Tt,St,Vt,ie),zt.copy(At))},reset:function(){k=!1,wt=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,At=!1,wt=null,zt=null,Tt=null;return{setReversed:function(St){if(At!==St){const Vt=t.get("EXT_clip_control");St?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),At=St;const ie=Tt;Tt=null,this.setClear(ie)}},getReversed:function(){return At},setTest:function(St){St?Mt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(St){wt!==St&&!k&&(o.depthMask(St),wt=St)},setFunc:function(St){if(At&&(St=lA[St]),zt!==St){switch(St){case Oh:o.depthFunc(o.NEVER);break;case Ph:o.depthFunc(o.ALWAYS);break;case zh:o.depthFunc(o.LESS);break;case Es:o.depthFunc(o.LEQUAL);break;case Bh:o.depthFunc(o.EQUAL);break;case Ih:o.depthFunc(o.GEQUAL);break;case Fh:o.depthFunc(o.GREATER);break;case Hh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=St}},setLocked:function(St){k=St},setClear:function(St){Tt!==St&&(At&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){k=!1,wt=null,zt=null,Tt=null,At=!1}}}function l(){let k=!1,At=null,wt=null,zt=null,Tt=null,St=null,Vt=null,ie=null,Ce=null;return{setTest:function(Ee){k||(Ee?Mt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!k&&(o.stencilMask(Ee),At=Ee)},setFunc:function(Ee,di,ln){(wt!==Ee||zt!==di||Tt!==ln)&&(o.stencilFunc(Ee,di,ln),wt=Ee,zt=di,Tt=ln)},setOp:function(Ee,di,ln){(St!==Ee||Vt!==di||ie!==ln)&&(o.stencilOp(Ee,di,ln),St=Ee,Vt=di,ie=ln)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Ce!==Ee&&(o.clearStencil(Ee),Ce=Ee)},reset:function(){k=!1,At=null,wt=null,zt=null,Tt=null,St=null,Vt=null,ie=null,Ce=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,B=null,O=null,C=null,I=null,H=null,G=new Se(0,0,0),K=0,D=!1,w=null,z=null,ht=null,Y=null,at=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=q>=2);let _t=null,U={};const et=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),st=new Ie().fromArray(et),dt=new Ie().fromArray(vt);function Q(k,At,wt,zt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(k,St),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<wt;Vt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(At+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const ut={};ut[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),ut[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ut[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(Es),Me(!1),Ft(g_),Mt(o.CULL_FACE),we(Ia);function Mt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Ct(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function Bt(k,At){return v[k]!==At?(o.bindFramebuffer(k,At),v[k]=At,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(k,At){let wt=M,zt=!1;if(k){wt=x.get(At),wt===void 0&&(wt=[],x.set(At,wt));const Tt=k.textures;if(wt.length!==Tt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Vt=Tt.length;St<Vt;St++)wt[St]=o.COLOR_ATTACHMENT0+St;wt.length=Tt.length,zt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(wt)}function Ge(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const me={[dr]:o.FUNC_ADD,[dS]:o.FUNC_SUBTRACT,[pS]:o.FUNC_REVERSE_SUBTRACT};me[mS]=o.MIN,me[gS]=o.MAX;const F={[_S]:o.ZERO,[vS]:o.ONE,[xS]:o.SRC_COLOR,[Lh]:o.SRC_ALPHA,[bS]:o.SRC_ALPHA_SATURATE,[ES]:o.DST_COLOR,[yS]:o.DST_ALPHA,[SS]:o.ONE_MINUS_SRC_COLOR,[Nh]:o.ONE_MINUS_SRC_ALPHA,[TS]:o.ONE_MINUS_DST_COLOR,[MS]:o.ONE_MINUS_DST_ALPHA,[AS]:o.CONSTANT_COLOR,[RS]:o.ONE_MINUS_CONSTANT_COLOR,[wS]:o.CONSTANT_ALPHA,[CS]:o.ONE_MINUS_CONSTANT_ALPHA};function we(k,At,wt,zt,Tt,St,Vt,ie,Ce,Ee){if(k===Ia){R===!0&&(Ct(o.BLEND),R=!1);return}if(R===!1&&(Mt(o.BLEND),R=!0),k!==hS){if(k!==y||Ee!==D){if((_!==dr||C!==dr)&&(o.blendEquation(o.FUNC_ADD),_=dr,C=dr),Ee)switch(k){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uh:o.blendFunc(o.ONE,o.ONE);break;case __:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case v_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Uh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case __:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,O=null,I=null,H=null,G.set(0,0,0),K=0,y=k,D=Ee}return}Tt=Tt||At,St=St||wt,Vt=Vt||zt,(At!==_||Tt!==C)&&(o.blendEquationSeparate(me[At],me[Tt]),_=At,C=Tt),(wt!==B||zt!==O||St!==I||Vt!==H)&&(o.blendFuncSeparate(F[wt],F[zt],F[St],F[Vt]),B=wt,O=zt,I=St,H=Vt),(ie.equals(G)===!1||Ce!==K)&&(o.blendColor(ie.r,ie.g,ie.b,Ce),G.copy(ie),K=Ce),y=k,D=!1}function Kt(k,At){k.side===Ui?Ct(o.CULL_FACE):Mt(o.CULL_FACE);let wt=k.side===Pn;At&&(wt=!wt),Me(wt),k.blending===Ss&&k.transparent===!1?we(Ia):we(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Me(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function Ft(k){k!==cS?(Mt(o.CULL_FACE),k!==z&&(k===g_?o.cullFace(o.BACK):k===uS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),z=k}function Ve(k){k!==ht&&(N&&o.lineWidth(k),ht=k)}function Ht(k,At,wt){k?(Mt(o.POLYGON_OFFSET_FILL),(Y!==At||at!==wt)&&(o.polygonOffset(At,wt),Y=At,at=wt)):Ct(o.POLYGON_OFFSET_FILL)}function se(k){k?Mt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function je(k){k===void 0&&(k=o.TEXTURE0+ct-1),_t!==k&&(o.activeTexture(k),_t=k)}function Ze(k,At,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+ct-1:wt=_t);let zt=U[wt];zt===void 0&&(zt={type:void 0,texture:void 0},U[wt]=zt),(zt.type!==k||zt.texture!==At)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(k,At||ut[k]),zt.type=k,zt.texture=At)}function L(){const k=U[_t];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(k){st.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),st.copy(k))}function jt(k){dt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),dt.copy(k))}function kt(k,At){let wt=p.get(At);wt===void 0&&(wt=new WeakMap,p.set(At,wt));let zt=wt.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(At,k.name),wt.set(k,zt))}function Dt(k,At){const zt=p.get(At).get(k);m.get(At)!==zt&&(o.uniformBlockBinding(At,zt,k.__bindingPointIndex),m.set(At,zt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},_t=null,U={},v={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,B=null,O=null,C=null,I=null,H=null,G=new Se(0,0,0),K=0,D=!1,w=null,z=null,ht=null,Y=null,at=null,st.set(0,0,o.canvas.width,o.canvas.height),dt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:Ct,bindFramebuffer:Bt,drawBuffers:ee,useProgram:Ge,setBlending:we,setMaterial:Kt,setFlipSided:Me,setCullFace:Ft,setLineWidth:Ve,setPolygonOffset:Ht,setScissorTest:se,activeTexture:je,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:nt,texImage2D:qt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Pt,scissor:Lt,viewport:jt,reset:re}}function uA(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Pc("canvas")}function R(L,E,nt){let pt=1;const yt=Ze(L);if((yt.width>nt||yt.height>nt)&&(pt=nt/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(pt*yt.width),Pt=Math.floor(pt*yt.height);v===void 0&&(v=b(ft,Pt));const Rt=E?b(ft,Pt):v;return Rt.width=ft,Rt.height=Pt,Rt.getContext("2d").drawImage(L,0,0,ft,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Pt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,E,nt,pt,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=E;if(E===o.RED&&(nt===o.FLOAT&&(ft=o.R32F),nt===o.HALF_FLOAT&&(ft=o.R16F),nt===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.R8UI),nt===o.UNSIGNED_SHORT&&(ft=o.R16UI),nt===o.UNSIGNED_INT&&(ft=o.R32UI),nt===o.BYTE&&(ft=o.R8I),nt===o.SHORT&&(ft=o.R16I),nt===o.INT&&(ft=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(ft=o.RG32F),nt===o.HALF_FLOAT&&(ft=o.RG16F),nt===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),nt===o.UNSIGNED_INT&&(ft=o.RG32UI),nt===o.BYTE&&(ft=o.RG8I),nt===o.SHORT&&(ft=o.RG16I),nt===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),nt===o.UNSIGNED_INT&&(ft=o.RGB32UI),nt===o.BYTE&&(ft=o.RGB8I),nt===o.SHORT&&(ft=o.RGB16I),nt===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),nt===o.BYTE&&(ft=o.RGBA8I),nt===o.SHORT&&(ft=o.RGBA16I),nt===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),E===o.RGBA){const Pt=yt?Nc:Ae.getTransfer(pt);nt===o.FLOAT&&(ft=o.RGBA32F),nt===o.HALF_FLOAT&&(ft=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ft=Pt===ze?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(L,E){let nt;return L?E===null||E===_r||E===Bo?nt=o.DEPTH24_STENCIL8:E===aa?nt=o.DEPTH32F_STENCIL8:E===zo&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_r||E===Bo?nt=o.DEPTH_COMPONENT24:E===aa?nt=o.DEPTH_COMPONENT32F:E===zo&&(nt=o.DEPTH_COMPONENT16),nt}function I(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mi&&L.minFilter!==Ni?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function H(L){const E=L.target;E.removeEventListener("dispose",H),K(E),E.isVideoTexture&&g.delete(E)}function G(L){const E=L.target;E.removeEventListener("dispose",G),w(E)}function K(L){const E=r.get(L);if(E.__webglInit===void 0)return;const nt=L.source,pt=x.get(nt);if(pt){const yt=pt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(L),Object.keys(pt).length===0&&x.delete(nt)}r.remove(L)}function D(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const nt=L.source,pt=x.get(nt);delete pt[E.__cacheKey],h.memory.textures--}function w(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let yt=0;yt<E.__webglFramebuffer[pt].length;yt++)o.deleteFramebuffer(E.__webglFramebuffer[pt][yt]);else o.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[pt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=L.textures;for(let pt=0,yt=nt.length;pt<yt;pt++){const ft=r.get(nt[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(nt[pt])}r.remove(L)}let z=0;function ht(){z=0}function Y(){const L=z;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),z+=1,L}function at(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ct(L,E){const nt=r.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&nt.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(nt,L,E);return}}else L.isExternalTexture&&(nt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function N(L,E){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){ut(nt,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function q(L,E){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){ut(nt,L,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function X(L,E){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Mt(nt,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const _t={[kh]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[Xh]:o.MIRRORED_REPEAT},U={[Mi]:o.NEAREST,[IS]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[Qf]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},et={[VS]:o.NEVER,[jS]:o.ALWAYS,[kS]:o.LESS,[w0]:o.LEQUAL,[XS]:o.EQUAL,[YS]:o.GEQUAL,[WS]:o.GREATER,[qS]:o.NOTEQUAL};function vt(L,E){if(E.type===aa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ni||E.magFilter===Qf||E.magFilter===$l||E.magFilter===gr||E.minFilter===Ni||E.minFilter===Qf||E.minFilter===$l||E.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,_t[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,_t[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,_t[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mi||E.minFilter!==$l&&E.minFilter!==gr||E.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function st(L,E){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",H));const pt=E.source;let yt=x.get(pt);yt===void 0&&(yt={},x.set(pt,yt));const ft=at(E);if(ft!==L.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),yt[ft].usedTimes++;const Pt=yt[L.__cacheKey];Pt!==void 0&&(yt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(E)),L.__cacheKey=ft,L.__webglTexture=yt[ft].texture}return nt}function dt(L,E,nt){return Math.floor(Math.floor(L/nt)/E)}function Q(L,E,nt,pt){const ft=L.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,nt,pt,E.data);else{ft.sort((Et,Lt)=>Et.start-Lt.start);let Pt=0;for(let Et=1;Et<ft.length;Et++){const Lt=ft[Pt],jt=ft[Et],kt=Lt.start+Lt.count,Dt=dt(jt.start,E.width,4),re=dt(Lt.start,E.width,4);jt.start<=kt+1&&Dt===re&&dt(jt.start+jt.count-1,E.width,4)===Dt?Lt.count=Math.max(Lt.count,jt.start+jt.count-Lt.start):(++Pt,ft[Pt]=jt)}ft.length=Pt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Lt=ft.length;Et<Lt;Et++){const jt=ft[Et],kt=Math.floor(jt.start/4),Dt=Math.ceil(jt.count/4),re=kt%E.width,k=Math.floor(kt/E.width),At=Dt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,re,k,At,wt,nt,pt,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function ut(L,E,nt){let pt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=o.TEXTURE_3D);const yt=st(L,E),ft=E.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+nt);const Pt=r.get(ft);if(ft.version!==Pt.__version||yt===!0){i.activeTexture(o.TEXTURE0+nt);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Xt=E.colorSpace===Ba?null:Ae.getPrimaries(E.colorSpace),qt=E.colorSpace===Ba||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Et=R(E.image,!1,l.maxTextureSize);Et=je(E,Et);const Lt=u.convert(E.format,E.colorSpace),jt=u.convert(E.type);let kt=O(E.internalFormat,Lt,jt,E.colorSpace,E.isVideoTexture);vt(pt,E);let Dt;const re=E.mipmaps,k=E.isVideoTexture!==!0,At=Pt.__version===void 0||yt===!0,wt=ft.dataReady,zt=I(E,Et);if(E.isDepthTexture)kt=C(E.format===Fo,E.type),At&&(k?i.texStorage2D(o.TEXTURE_2D,1,kt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,kt,Et.width,Et.height,0,Lt,jt,null));else if(E.isDataTexture)if(re.length>0){k&&At&&i.texStorage2D(o.TEXTURE_2D,zt,kt,re[0].width,re[0].height);for(let Tt=0,St=re.length;Tt<St;Tt++)Dt=re[Tt],k?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Lt,jt,Dt.data);E.generateMipmaps=!1}else k?(At&&i.texStorage2D(o.TEXTURE_2D,zt,kt,Et.width,Et.height),wt&&Q(E,Et,Lt,jt)):i.texImage2D(o.TEXTURE_2D,0,kt,Et.width,Et.height,0,Lt,jt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,kt,re[0].width,re[0].height,Et.depth);for(let Tt=0,St=re.length;Tt<St;Tt++)if(Dt=re[Tt],E.format!==yi)if(Lt!==null)if(k){if(wt)if(E.layerUpdates.size>0){const Vt=W_(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const Ce=Dt.data.subarray(ie*Vt/Dt.data.BYTES_PER_ELEMENT,(ie+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ie,Dt.width,Dt.height,1,Lt,Ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,kt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,jt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,kt,Dt.width,Dt.height,Et.depth,0,Lt,jt,Dt.data)}else{k&&At&&i.texStorage2D(o.TEXTURE_2D,zt,kt,re[0].width,re[0].height);for(let Tt=0,St=re.length;Tt<St;Tt++)Dt=re[Tt],E.format!==yi?Lt!==null?k?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Lt,jt,Dt.data)}else if(E.isDataArrayTexture)if(k){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,kt,Et.width,Et.height,Et.depth),wt)if(E.layerUpdates.size>0){const Tt=W_(Et.width,Et.height,E.format,E.type);for(const St of E.layerUpdates){const Vt=Et.data.subarray(St*Tt/Et.data.BYTES_PER_ELEMENT,(St+1)*Tt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,Lt,jt,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Lt,jt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Et.width,Et.height,Et.depth,0,Lt,jt,Et.data);else if(E.isData3DTexture)k?(At&&i.texStorage3D(o.TEXTURE_3D,zt,kt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Lt,jt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,kt,Et.width,Et.height,Et.depth,0,Lt,jt,Et.data);else if(E.isFramebufferTexture){if(At)if(k)i.texStorage2D(o.TEXTURE_2D,zt,kt,Et.width,Et.height);else{let Tt=Et.width,St=Et.height;for(let Vt=0;Vt<zt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,kt,Tt,St,0,Lt,jt,null),Tt>>=1,St>>=1}}else if(re.length>0){if(k&&At){const Tt=Ze(re[0]);i.texStorage2D(o.TEXTURE_2D,zt,kt,Tt.width,Tt.height)}for(let Tt=0,St=re.length;Tt<St;Tt++)Dt=re[Tt],k?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt,jt,Dt):i.texImage2D(o.TEXTURE_2D,Tt,kt,Lt,jt,Dt);E.generateMipmaps=!1}else if(k){if(At){const Tt=Ze(Et);i.texStorage2D(o.TEXTURE_2D,zt,kt,Tt.width,Tt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,jt,Et)}else i.texImage2D(o.TEXTURE_2D,0,kt,Lt,jt,Et);y(E)&&_(pt),Pt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Mt(L,E,nt){if(E.image.length!==6)return;const pt=st(L,E),yt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const ft=r.get(yt);if(yt.version!==ft.__version||pt===!0){i.activeTexture(o.TEXTURE0+nt);const Pt=Ae.getPrimaries(Ae.workingColorSpace),Rt=E.colorSpace===Ba?null:Ae.getPrimaries(E.colorSpace),Xt=E.colorSpace===Ba||Pt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let St=0;St<6;St++)!qt&&!Et?Lt[St]=R(E.image[St],!0,l.maxCubemapSize):Lt[St]=Et?E.image[St].image:E.image[St],Lt[St]=je(E,Lt[St]);const jt=Lt[0],kt=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),re=O(E.internalFormat,kt,Dt,E.colorSpace),k=E.isVideoTexture!==!0,At=ft.__version===void 0||pt===!0,wt=yt.dataReady;let zt=I(E,jt);vt(o.TEXTURE_CUBE_MAP,E);let Tt;if(qt){k&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,re,jt.width,jt.height);for(let St=0;St<6;St++){Tt=Lt[St].mipmaps;for(let Vt=0;Vt<Tt.length;Vt++){const ie=Tt[Vt];E.format!==yi?kt!==null?k?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ie.width,ie.height,kt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ie.width,ie.height,kt,Dt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,re,ie.width,ie.height,0,kt,Dt,ie.data)}}}else{if(Tt=E.mipmaps,k&&At){Tt.length>0&&zt++;const St=Ze(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,re,St.width,St.height)}for(let St=0;St<6;St++)if(Et){k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Lt[St].width,Lt[St].height,kt,Dt,Lt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,Lt[St].width,Lt[St].height,0,kt,Dt,Lt[St].data);for(let Vt=0;Vt<Tt.length;Vt++){const Ce=Tt[Vt].image[St].image;k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,Ce.width,Ce.height,kt,Dt,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,re,Ce.width,Ce.height,0,kt,Dt,Ce.data)}}else{k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,kt,Dt,Lt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,kt,Dt,Lt[St]);for(let Vt=0;Vt<Tt.length;Vt++){const ie=Tt[Vt];k?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,kt,Dt,ie.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,re,kt,Dt,ie.image[St])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ft.__version=yt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ct(L,E,nt,pt,yt,ft){const Pt=u.convert(nt.format,nt.colorSpace),Rt=u.convert(nt.type),Xt=O(nt.internalFormat,Pt,Rt,nt.colorSpace),qt=r.get(E),Et=r.get(nt);if(Et.__renderTarget=E,!qt.__hasExternalTextures){const Lt=Math.max(1,E.width>>ft),jt=Math.max(1,E.height>>ft);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ft,Xt,Lt,jt,E.depth,0,Pt,Rt,null):i.texImage2D(yt,ft,Xt,Lt,jt,0,Pt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,yt,Et.__webglTexture,0,Ve(E)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,yt,Et.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(L,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const pt=E.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ft=C(E.stencilBuffer,yt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ve(E);Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ft,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const pt=E.textures;for(let yt=0;yt<pt.length;yt++){const ft=pt[yt],Pt=u.convert(ft.format,ft.colorSpace),Rt=u.convert(ft.type),Xt=O(ft.internalFormat,Pt,Rt,ft.colorSpace),qt=Ve(E);nt&&Ht(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Xt,E.width,E.height):Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ee(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(E.depthTexture);pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct(E.depthTexture,0);const yt=pt.__webglTexture,ft=Ve(E);if(E.depthTexture.format===Io)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(E.depthTexture.format===Fo)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ge(L){const E=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=pt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?ee(E.__webglFramebuffer[0],L):ee(E.__webglFramebuffer,L)}else if(nt){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=o.createRenderbuffer(),Bt(E.__webglDepthbuffer[pt],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Bt(E.__webglDepthbuffer,L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function me(L,E,nt){const pt=r.get(L);E!==void 0&&Ct(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Ge(L)}function F(L){const E=L.texture,nt=r.get(L),pt=r.get(E);L.addEventListener("dispose",G);const yt=L.textures,ft=L.isWebGLCubeRenderTarget===!0,Pt=yt.length>1;if(Pt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=E.version,h.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)nt.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Rt=0,Xt=yt.length;Rt<Xt;Rt++){const qt=r.get(yt[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Ht(L)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<yt.length;Rt++){const Xt=yt[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const qt=u.convert(Xt.format,Xt.colorSpace),Et=u.convert(Xt.type),Lt=O(Xt.internalFormat,qt,Et,Xt.colorSpace,L.isXRRenderTarget===!0),jt=Ve(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Lt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ct(nt.__webglFramebuffer[Rt][Xt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Ct(nt.__webglFramebuffer[Rt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Rt=0,Xt=yt.length;Rt<Xt;Rt++){const qt=yt[Rt],Et=r.get(qt);let Lt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Et.__webglTexture),vt(Lt,qt),Ct(nt.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+Rt,Lt,0),y(qt)&&_(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,pt.__webglTexture),vt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ct(nt.__webglFramebuffer[Xt],L,E,o.COLOR_ATTACHMENT0,Rt,Xt);else Ct(nt.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&_(Rt),i.unbindTexture()}L.depthBuffer&&Ge(L)}function we(L){const E=L.textures;for(let nt=0,pt=E.length;nt<pt;nt++){const yt=E[nt];if(y(yt)){const ft=B(L),Pt=r.get(yt).__webglTexture;i.bindTexture(ft,Pt),_(ft),i.unbindTexture()}}}const Kt=[],Me=[];function Ft(L){if(L.samples>0){if(Ht(L)===!1){const E=L.textures,nt=L.width,pt=L.height;let yt=o.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),Rt=E.length>1;if(Rt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Et=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,yt,o.NEAREST),m===!0&&(Kt.length=0,Me.length=0,Kt.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Kt.push(ft),Me.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Et=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ve(L){return Math.min(l.maxSamples,L.samples)}function Ht(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function je(L,E){const nt=L.colorSpace,pt=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==As&&nt!==Ba&&(Ae.getTransfer(nt)===ze?(pt!==yi||yt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),E}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=ht,this.setTexture2D=ct,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=me,this.setupRenderTarget=F,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function fA(o,t){function i(r,l=Ba){let u;const h=Ae.getTransfer(l);if(r===Pi)return o.UNSIGNED_BYTE;if(r===bd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ad)return o.UNSIGNED_SHORT_5_5_5_1;if(r===y0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===x0)return o.BYTE;if(r===S0)return o.SHORT;if(r===zo)return o.UNSIGNED_SHORT;if(r===Td)return o.INT;if(r===_r)return o.UNSIGNED_INT;if(r===aa)return o.FLOAT;if(r===Ho)return o.HALF_FLOAT;if(r===M0)return o.ALPHA;if(r===E0)return o.RGB;if(r===yi)return o.RGBA;if(r===Io)return o.DEPTH_COMPONENT;if(r===Fo)return o.DEPTH_STENCIL;if(r===T0)return o.RED;if(r===Rd)return o.RED_INTEGER;if(r===b0)return o.RG;if(r===wd)return o.RG_INTEGER;if(r===Cd)return o.RGBA_INTEGER;if(r===Rc||r===wc||r===Cc||r===Dc)if(h===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===qh||r===Yh||r===jh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Wh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh||r===Kh||r===Qh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Zh||r===Kh)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$h)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===td)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===id)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ad)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ld)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ud)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===hd||r===dd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Uc)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===A0||r===pd||r===md||r===gd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===pd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class Z0 extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const hA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dA=`
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

}`;class pA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Z0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new sa({vertexShader:hA,fragmentShader:dA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new Gc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mA extends ws{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,b=null;const R=new pA,y={},_=i.getContextAttributes();let B=null,O=null;const C=[],I=[],H=new he;let G=null;const K=new Jn;K.viewport=new Ie;const D=new Jn;D.viewport=new Ie;const w=[K,D],z=new zy;let ht=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ut=C[Q];return ut===void 0&&(ut=new Sh,C[Q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Q){let ut=C[Q];return ut===void 0&&(ut=new Sh,C[Q]=ut),ut.getGripSpace()},this.getHand=function(Q){let ut=C[Q];return ut===void 0&&(ut=new Sh,C[Q]=ut),ut.getHandSpace()};function at(Q){const ut=I.indexOf(Q.inputSource);if(ut===-1)return;const Mt=C[ut];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ct(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",N);for(let Q=0;Q<C.length;Q++){const ut=I[Q];ut!==null&&(I[Q]=null,C[Q].disconnect(ut))}ht=null,Y=null,R.reset();for(const Q in y)delete y[Q];t.setRenderTarget(B),M=null,x=null,v=null,l=null,O=null,dt.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ct=null,Bt=null;_.depth&&(Bt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=_.stencil?Fo:Io,Ct=_.stencil?Bo:_r);const ee={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:u};x=v.createProjectionLayer(ee),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new vr(x.textureWidth,x.textureHeight,{format:yi,type:Pi,depthTexture:new V0(x.textureWidth,x.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new vr(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),dt.setContext(l),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function N(Q){for(let ut=0;ut<Q.removed.length;ut++){const Mt=Q.removed[ut],Ct=I.indexOf(Mt);Ct>=0&&(I[Ct]=null,C[Ct].disconnect(Mt))}for(let ut=0;ut<Q.added.length;ut++){const Mt=Q.added[ut];let Ct=I.indexOf(Mt);if(Ct===-1){for(let ee=0;ee<C.length;ee++)if(ee>=I.length){I.push(Mt),Ct=ee;break}else if(I[ee]===null){I[ee]=Mt,Ct=ee;break}if(Ct===-1)break}const Bt=C[Ct];Bt&&Bt.connect(Mt)}}const q=new J,X=new J;function _t(Q,ut,Mt){q.setFromMatrixPosition(ut.matrixWorld),X.setFromMatrixPosition(Mt.matrixWorld);const Ct=q.distanceTo(X),Bt=ut.projectionMatrix.elements,ee=Mt.projectionMatrix.elements,Ge=Bt[14]/(Bt[10]-1),me=Bt[14]/(Bt[10]+1),F=(Bt[9]+1)/Bt[5],we=(Bt[9]-1)/Bt[5],Kt=(Bt[8]-1)/Bt[0],Me=(ee[8]+1)/ee[0],Ft=Ge*Kt,Ve=Ge*Me,Ht=Ct/(-Kt+Me),se=Ht*-Kt;if(ut.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(Ht),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Bt[10]===-1)Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const je=Ge+Ht,Ze=me+Ht,L=Ft-se,E=Ve+(Ct-se),nt=F*me/Ze*je,pt=we*me/Ze*je;Q.projectionMatrix.makePerspective(L,E,nt,pt,je,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function U(Q,ut){ut===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ut.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ut=Q.near,Mt=Q.far;R.texture!==null&&(R.depthNear>0&&(ut=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),z.near=D.near=K.near=ut,z.far=D.far=K.far=Mt,(ht!==z.near||Y!==z.far)&&(l.updateRenderState({depthNear:z.near,depthFar:z.far}),ht=z.near,Y=z.far),z.layers.mask=Q.layers.mask|6,K.layers.mask=z.layers.mask&3,D.layers.mask=z.layers.mask&5;const Ct=Q.parent,Bt=z.cameras;U(z,Ct);for(let ee=0;ee<Bt.length;ee++)U(Bt[ee],Ct);Bt.length===2?_t(z,K,D):z.projectionMatrix.copy(K.projectionMatrix),et(Q,z,Ct)};function et(Q,ut,Mt){Mt===null?Q.matrix.copy(ut.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ut.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(z)},this.getCameraTexture=function(Q){return y[Q]};let vt=null;function st(Q,ut){if(g=ut.getViewerPose(p||h),b=ut,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let Ct=!1;Mt.length!==z.cameras.length&&(z.cameras.length=0,Ct=!0);for(let me=0;me<Mt.length;me++){const F=Mt[me];let we=null;if(M!==null)we=M.getViewport(F);else{const Me=v.getViewSubImage(x,F);we=Me.viewport,me===0&&(t.setRenderTargetTextures(O,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(O))}let Kt=w[me];Kt===void 0&&(Kt=new Jn,Kt.layers.enable(me),Kt.viewport=new Ie,w[me]=Kt),Kt.matrix.fromArray(F.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(F.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(we.x,we.y,we.width,we.height),me===0&&(z.matrix.copy(Kt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ct===!0&&z.cameras.push(Kt)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const me=v.getDepthInformation(Mt[0]);me&&me.isValid&&me.texture&&R.init(me,l.renderState)}if(Bt&&Bt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let me=0;me<Mt.length;me++){const F=Mt[me].camera;if(F){let we=y[F];we||(we=new Z0,y[F]=we);const Kt=v.getCameraImage(F);we.sourceTexture=Kt}}}for(let Mt=0;Mt<C.length;Mt++){const Ct=I[Mt],Bt=C[Mt];Ct!==null&&Bt!==void 0&&Bt.update(Ct,ut,p||h)}vt&&vt(Q,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),b=null}const dt=new X0;dt.setAnimationLoop(st),this.setAnimationLoop=function(Q){vt=Q},this.dispose=function(){}}}const ur=new zi,gA=new Ye;function _A(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,z0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,O,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,C)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Pn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Pn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=t.get(_),O=B.envMap,C=B.envMapRotation;O&&(y.envMap.value=O,ur.copy(C),ur.x*=-1,ur.y*=-1,ur.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),y.envMapRotation.value.setFromMatrix4(gA.makeRotationFromEuler(ur)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const B=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vA(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const C=O.program;r.uniformBlockBinding(B,C)}function p(B,O){let C=l[B.id];C===void 0&&(b(B),C=g(B),l[B.id]=C,B.addEventListener("dispose",y));const I=O.program;r.updateUBOMapping(B,I);const H=t.render.frame;u[B.id]!==H&&(x(B),u[B.id]=H)}function g(B){const O=v();B.__bindingPointIndex=O;const C=o.createBuffer(),I=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,I,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,C),C}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const O=l[B.id],C=B.uniforms,I=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,G=C.length;H<G;H++){const K=Array.isArray(C[H])?C[H]:[C[H]];for(let D=0,w=K.length;D<w;D++){const z=K[D];if(M(z,H,D,I)===!0){const ht=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let at=0;for(let ct=0;ct<Y.length;ct++){const N=Y[ct],q=R(N);typeof N=="number"||typeof N=="boolean"?(z.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,ht+at,z.__data)):N.isMatrix3?(z.__data[0]=N.elements[0],z.__data[1]=N.elements[1],z.__data[2]=N.elements[2],z.__data[3]=0,z.__data[4]=N.elements[3],z.__data[5]=N.elements[4],z.__data[6]=N.elements[5],z.__data[7]=0,z.__data[8]=N.elements[6],z.__data[9]=N.elements[7],z.__data[10]=N.elements[8],z.__data[11]=0):(N.toArray(z.__data,at),at+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ht,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,O,C,I){const H=B.value,G=O+"_"+C;if(I[G]===void 0)return typeof H=="number"||typeof H=="boolean"?I[G]=H:I[G]=H.clone(),!0;{const K=I[G];if(typeof H=="number"||typeof H=="boolean"){if(K!==H)return I[G]=H,!0}else if(K.equals(H)===!1)return K.copy(H),!0}return!1}function b(B){const O=B.uniforms;let C=0;const I=16;for(let G=0,K=O.length;G<K;G++){const D=Array.isArray(O[G])?O[G]:[O[G]];for(let w=0,z=D.length;w<z;w++){const ht=D[w],Y=Array.isArray(ht.value)?ht.value:[ht.value];for(let at=0,ct=Y.length;at<ct;at++){const N=Y[at],q=R(N),X=C%I,_t=X%q.boundary,U=X+_t;C+=_t,U!==0&&I-U<q.storage&&(C+=I-U),ht.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=C,C+=q.storage}}}const H=C%I;return H>0&&(C+=I-H),B.__size=C,B.__cache={},this}function R(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function y(B){const O=B.target;O.removeEventListener("dispose",y);const C=h.indexOf(O.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class xA{constructor(t={}){const{canvas:i=KS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=ci;let H=0,G=0,K=null,D=-1,w=null;const z=new Ie,ht=new Ie;let Y=null;const at=new Se(0);let ct=0,N=i.width,q=i.height,X=1,_t=null,U=null;const et=new Ie(0,0,N,q),vt=new Ie(0,0,N,q);let st=!1;const dt=new Ud;let Q=!1,ut=!1;const Mt=new Ye,Ct=new J,Bt=new Ie,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function me(){return K===null?X:1}let F=r;function we(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Md}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),F===null){const W="webgl2";if(F=we(W,A),F===null)throw we(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Kt,Me,Ft,Ve,Ht,se,je,Ze,L,E,nt,pt,yt,ft,Pt,Rt,Xt,qt,Et,Lt,jt,kt,Dt,re;function k(){Kt=new CT(F),Kt.init(),kt=new fA(F,Kt),Me=new MT(F,Kt,t,kt),Ft=new cA(F,Kt),Me.reversedDepthBuffer&&x&&Ft.buffers.depth.setReversed(!0),Ve=new LT(F),Ht=new Kb,se=new uA(F,Kt,Ft,Ht,Me,kt,Ve),je=new TT(C),Ze=new wT(C),L=new Iy(F),Dt=new ST(F,L),E=new DT(F,L,Ve,Dt),nt=new OT(F,E,L,Ve),Et=new NT(F,Me,se),Rt=new ET(Ht),pt=new Zb(C,je,Ze,Kt,Me,Dt,Rt),yt=new _A(C,Ht),ft=new Jb,Pt=new aA(Kt),qt=new xT(C,je,Ze,Ft,nt,M,m),Xt=new oA(C,nt,Me),re=new vA(F,Ve,Me,Ft),Lt=new yT(F,Kt,Ve),jt=new UT(F,Kt,Ve),Ve.programs=pt.programs,C.capabilities=Me,C.extensions=Kt,C.properties=Ht,C.renderLists=ft,C.shadowMap=Xt,C.state=Ft,C.info=Ve}k();const At=new mA(C,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(N,q,!1))},this.getSize=function(A){return A.set(N,q)},this.setSize=function(A,W,ot=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,q=W,i.width=Math.floor(A*X),i.height=Math.floor(W*X),ot===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(N*X,q*X).floor()},this.setDrawingBufferSize=function(A,W,ot){N=A,q=W,X=ot,i.width=Math.floor(A*ot),i.height=Math.floor(W*ot),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,W,ot,lt){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,W,ot,lt),Ft.viewport(z.copy(et).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,ot,lt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,ot,lt),Ft.scissor(ht.copy(vt).multiplyScalar(X).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){Ft.setScissorTest(st=A)},this.setOpaqueSort=function(A){_t=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ot=!0){let lt=0;if(A){let Z=!1;if(K!==null){const bt=K.texture.format;Z=bt===Cd||bt===wd||bt===Rd}if(Z){const bt=K.texture.type,Ut=bt===Pi||bt===_r||bt===zo||bt===Bo||bt===bd||bt===Ad,It=qt.getClearColor(),Nt=qt.getClearAlpha(),Qt=It.r,$t=It.g,Wt=It.b;Ut?(b[0]=Qt,b[1]=$t,b[2]=Wt,b[3]=Nt,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=Qt,R[1]=$t,R[2]=Wt,R[3]=Nt,F.clearBufferiv(F.COLOR,0,R))}else lt|=F.COLOR_BUFFER_BIT}W&&(lt|=F.DEPTH_BUFFER_BIT),ot&&(lt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),qt.dispose(),ft.dispose(),Pt.dispose(),Ht.dispose(),je.dispose(),Ze.dispose(),nt.dispose(),Dt.dispose(),re.dispose(),pt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ln),At.removeEventListener("sessionend",cn),Qe.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ve.autoReset,W=Xt.enabled,ot=Xt.autoUpdate,lt=Xt.needsUpdate,Z=Xt.type;k(),Ve.autoReset=A,Xt.enabled=W,Xt.autoUpdate=ot,Xt.needsUpdate=lt,Xt.type=Z}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const W=A.target;W.removeEventListener("dispose",St),Vt(W)}function Vt(A){ie(A),Ht.remove(A)}function ie(A){const W=Ht.get(A).programs;W!==void 0&&(W.forEach(function(ot){pt.releaseProgram(ot)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ot,lt,Z,bt){W===null&&(W=ee);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,It=oa(A,W,ot,lt,Z);Ft.setMaterial(lt,Ut);let Nt=ot.index,Qt=1;if(lt.wireframe===!0){if(Nt=E.getWireframeAttribute(ot),Nt===void 0)return;Qt=2}const $t=ot.drawRange,Wt=ot.attributes.position;let ce=$t.start*Qt,Te=($t.start+$t.count)*Qt;bt!==null&&(ce=Math.max(ce,bt.start*Qt),Te=Math.min(Te,(bt.start+bt.count)*Qt)),Nt!==null?(ce=Math.max(ce,0),Te=Math.min(Te,Nt.count)):Wt!=null&&(ce=Math.max(ce,0),Te=Math.min(Te,Wt.count));const We=Te-ce;if(We<0||We===1/0)return;Dt.setup(Z,lt,It,ot,Nt);let Le,ue=Lt;if(Nt!==null&&(Le=L.get(Nt),ue=jt,ue.setIndex(Le)),Z.isMesh)lt.wireframe===!0?(Ft.setLineWidth(lt.wireframeLinewidth*me()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(Z.isLine){let Zt=lt.linewidth;Zt===void 0&&(Zt=1),Ft.setLineWidth(Zt*me()),Z.isLineSegments?ue.setMode(F.LINES):Z.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else Z.isPoints?ue.setMode(F.POINTS):Z.isSprite&&ue.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))ue.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Zt=Z._multiDrawStarts,Xe=Z._multiDrawCounts,ge=Z._multiDrawCount,En=Nt?L.get(Nt).bytesPerElement:1,pi=Ht.get(lt).currentProgram.getUniforms();for(let Dn=0;Dn<ge;Dn++)pi.setValue(F,"_gl_DrawID",Dn),ue.render(Zt[Dn]/En,Xe[Dn])}else if(Z.isInstancedMesh)ue.renderInstances(ce,We,Z.count);else if(ot.isInstancedBufferGeometry){const Zt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xe=Math.min(ot.instanceCount,Zt);ue.renderInstances(ce,We,Xe)}else ue.render(ce,We)};function Ce(A,W,ot){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,Ti(A,W,ot),A.side=Ga,A.needsUpdate=!0,Ti(A,W,ot),A.side=Ui):Ti(A,W,ot)}this.compile=function(A,W,ot=null){ot===null&&(ot=A),_=Pt.get(ot),_.init(W),O.push(_),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),A!==ot&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const lt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const It=bt[Ut];Ce(It,ot,Z),lt.add(It)}else Ce(bt,ot,Z),lt.add(bt)}),_=O.pop(),lt},this.compileAsync=function(A,W,ot=null){const lt=this.compile(A,W,ot);return new Promise(Z=>{function bt(){if(lt.forEach(function(Ut){Ht.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){Z(A);return}setTimeout(bt,10)}Kt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ee=null;function di(A){Ee&&Ee(A)}function ln(){Qe.stop()}function cn(){Qe.start()}const Qe=new X0;Qe.setAnimationLoop(di),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){Ee=A,At.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},At.addEventListener("sessionstart",ln),At.addEventListener("sessionend",cn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(W),W=At.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,K),_=Pt.get(A,O.length),_.init(W),O.push(_),Mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),dt.setFromProjectionMatrix(Mt,Oi,W.reversedDepth),ut=this.localClippingEnabled,Q=Rt.init(this.clippingPlanes,ut),y=ft.get(A,B.length),y.init(),B.push(y),At.enabled===!0&&At.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Ei(bt,W,-1/0,C.sortObjects)}Ei(A,W,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(_t,U),Ge=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ge&&qt.addToRenderList(y,A),this.info.render.frame++,Q===!0&&Rt.beginShadows();const ot=_.state.shadowsArray;Xt.render(ot,A,W),Q===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Z=y.transmissive;if(_.setupLights(),W.isArrayCamera){const bt=W.cameras;if(Z.length>0)for(let Ut=0,It=bt.length;Ut<It;Ut++){const Nt=bt[Ut];Xo(lt,Z,A,Nt)}Ge&&qt.render(A);for(let Ut=0,It=bt.length;Ut<It;Ut++){const Nt=bt[Ut];Sr(y,A,Nt,Nt.viewport)}}else Z.length>0&&Xo(lt,Z,A,W),Ge&&qt.render(A),Sr(y,A,W);K!==null&&G===0&&(se.updateMultisampleRenderTarget(K),se.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(C,A,W),Dt.resetDefaultState(),D=-1,w=null,O.pop(),O.length>0?(_=O[O.length-1],Q===!0&&Rt.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Ei(A,W,ot,lt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||dt.intersectsSprite(A)){lt&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Ut=nt.update(A),It=A.material;It.visible&&y.push(A,Ut,It,ot,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||dt.intersectsObject(A))){const Ut=nt.update(A),It=A.material;if(lt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Bt.copy(Ut.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(It)){const Nt=Ut.groups;for(let Qt=0,$t=Nt.length;Qt<$t;Qt++){const Wt=Nt[Qt],ce=It[Wt.materialIndex];ce&&ce.visible&&y.push(A,Ut,ce,ot,Bt.z,Wt)}}else It.visible&&y.push(A,Ut,It,ot,Bt.z,null)}}const bt=A.children;for(let Ut=0,It=bt.length;Ut<It;Ut++)Ei(bt[Ut],W,ot,lt)}function Sr(A,W,ot,lt){const Z=A.opaque,bt=A.transmissive,Ut=A.transparent;_.setupLightsView(ot),Q===!0&&Rt.setGlobalState(C.clippingPlanes,ot),lt&&Ft.viewport(z.copy(lt)),Z.length>0&&yr(Z,W,ot),bt.length>0&&yr(bt,W,ot),Ut.length>0&&yr(Ut,W,ot),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Xo(A,W,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new vr(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Ho:Pi,minFilter:gr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=_.state.transmissionRenderTarget[lt.id],Ut=lt.viewport||z;bt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const It=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(at),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),Ge&&qt.render(ot);const $t=C.toneMapping;C.toneMapping=Fa;const Wt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),Q===!0&&Rt.setGlobalState(C.clippingPlanes,lt),yr(A,ot,lt),se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Te=0,We=W.length;Te<We;Te++){const Le=W[Te],ue=Le.object,Zt=Le.geometry,Xe=Le.material,ge=Le.group;if(Xe.side===Ui&&ue.layers.test(lt.layers)){const En=Xe.side;Xe.side=Pn,Xe.needsUpdate=!0,Ds(ue,ot,lt,Zt,Xe,ge),Xe.side=En,Xe.needsUpdate=!0,ce=!0}}ce===!0&&(se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt))}C.setRenderTarget(It,Nt,Qt),C.setClearColor(at,ct),Wt!==void 0&&(lt.viewport=Wt),C.toneMapping=$t}function yr(A,W,ot){const lt=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,bt=A.length;Z<bt;Z++){const Ut=A[Z],It=Ut.object,Nt=Ut.geometry,Qt=Ut.group;let $t=Ut.material;$t.allowOverride===!0&&lt!==null&&($t=lt),It.layers.test(ot.layers)&&Ds(It,W,ot,Nt,$t,Qt)}}function Ds(A,W,ot,lt,Z,bt){A.onBeforeRender(C,W,ot,lt,Z,bt),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,W,ot,lt,A,bt),Z.transparent===!0&&Z.side===Ui&&Z.forceSinglePass===!1?(Z.side=Pn,Z.needsUpdate=!0,C.renderBufferDirect(ot,W,lt,Z,A,bt),Z.side=Ga,Z.needsUpdate=!0,C.renderBufferDirect(ot,W,lt,Z,A,bt),Z.side=Ui):C.renderBufferDirect(ot,W,lt,Z,A,bt),A.onAfterRender(C,W,ot,lt,Z,bt)}function Ti(A,W,ot){W.isScene!==!0&&(W=ee);const lt=Ht.get(A),Z=_.state.lights,bt=_.state.shadowsArray,Ut=Z.state.version,It=pt.getParameters(A,Z.state,bt,W,ot),Nt=pt.getProgramCacheKey(It);let Qt=lt.programs;lt.environment=A.isMeshStandardMaterial?W.environment:null,lt.fog=W.fog,lt.envMap=(A.isMeshStandardMaterial?Ze:je).get(A.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",St),Qt=new Map,lt.programs=Qt);let $t=Qt.get(Nt);if($t!==void 0){if(lt.currentProgram===$t&&lt.lightsStateVersion===Ut)return Bi(A,It),$t}else It.uniforms=pt.getUniforms(A),A.onBeforeCompile(It,C),$t=pt.acquireProgram(It,Nt),Qt.set(Nt,$t),lt.uniforms=It.uniforms;const Wt=lt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),Bi(A,It),lt.needsLights=la(A),lt.lightsStateVersion=Ut,lt.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),lt.currentProgram=$t,lt.uniformsList=null,$t}function Mr(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Lc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Bi(A,W){const ot=Ht.get(A);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function oa(A,W,ot,lt,Z){W.isScene!==!0&&(W=ee),se.resetTextureUnits();const bt=W.fog,Ut=lt.isMeshStandardMaterial?W.environment:null,It=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:As,Nt=(lt.isMeshStandardMaterial?Ze:je).get(lt.envMap||Ut),Qt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Wt=!!ot.morphAttributes.position,ce=!!ot.morphAttributes.normal,Te=!!ot.morphAttributes.color;let We=Fa;lt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(We=C.toneMapping);const Le=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ue=Le!==void 0?Le.length:0,Zt=Ht.get(lt),Xe=_.state.lights;if(Q===!0&&(ut===!0||A!==w)){const Je=A===w&&lt.id===D;Rt.setState(lt,A,Je)}let ge=!1;lt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Xe.state.version||Zt.outputColorSpace!==It||Z.isBatchedMesh&&Zt.batching===!1||!Z.isBatchedMesh&&Zt.batching===!0||Z.isBatchedMesh&&Zt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Zt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Zt.instancing===!1||!Z.isInstancedMesh&&Zt.instancing===!0||Z.isSkinnedMesh&&Zt.skinning===!1||!Z.isSkinnedMesh&&Zt.skinning===!0||Z.isInstancedMesh&&Zt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Zt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Zt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Zt.instancingMorph===!1&&Z.morphTexture!==null||Zt.envMap!==Nt||lt.fog===!0&&Zt.fog!==bt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Rt.numPlanes||Zt.numIntersection!==Rt.numIntersection)||Zt.vertexAlphas!==Qt||Zt.vertexTangents!==$t||Zt.morphTargets!==Wt||Zt.morphNormals!==ce||Zt.morphColors!==Te||Zt.toneMapping!==We||Zt.morphTargetsCount!==ue)&&(ge=!0):(ge=!0,Zt.__version=lt.version);let En=Zt.currentProgram;ge===!0&&(En=Ti(lt,W,Z));let pi=!1,Dn=!1,pn=!1;const Fe=En.getUniforms(),Un=Zt.uniforms;if(Ft.useProgram(En.program)&&(pi=!0,Dn=!0,pn=!0),lt.id!==D&&(D=lt.id,Dn=!0),pi||w!==A){Ft.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(F,"projectionMatrix",A.projectionMatrix),Fe.setValue(F,"viewMatrix",A.matrixWorldInverse);const xn=Fe.map.cameraPosition;xn!==void 0&&xn.setValue(F,Ct.setFromMatrixPosition(A.matrixWorld)),Me.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Dn=!0,pn=!0)}if(Z.isSkinnedMesh){Fe.setOptional(F,Z,"bindMatrix"),Fe.setOptional(F,Z,"bindMatrixInverse");const Je=Z.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Fe.setValue(F,"boneTexture",Je.boneTexture,se))}Z.isBatchedMesh&&(Fe.setOptional(F,Z,"batchingTexture"),Fe.setValue(F,"batchingTexture",Z._matricesTexture,se),Fe.setOptional(F,Z,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",Z._indirectTexture,se),Fe.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",Z._colorsTexture,se));const Tn=ot.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Et.update(Z,ot,En),(Dn||Zt.receiveShadow!==Z.receiveShadow)&&(Zt.receiveShadow=Z.receiveShadow,Fe.setValue(F,"receiveShadow",Z.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Un.envMap.value=Nt,Un.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&W.environment!==null&&(Un.envMapIntensity.value=W.environmentIntensity),Dn&&(Fe.setValue(F,"toneMappingExposure",C.toneMappingExposure),Zt.needsLights&&Va(Un,pn),bt&&lt.fog===!0&&yt.refreshFogUniforms(Un,bt),yt.refreshMaterialUniforms(Un,lt,X,q,_.state.transmissionRenderTarget[A.id]),Lc.upload(F,Mr(Zt),Un,se)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Lc.upload(F,Mr(Zt),Un,se),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Fe.setValue(F,"center",Z.center),Fe.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Fe.setValue(F,"normalMatrix",Z.normalMatrix),Fe.setValue(F,"modelMatrix",Z.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Je=lt.uniformsGroups;for(let xn=0,Er=Je.length;xn<Er;xn++){const Bn=Je[xn];re.update(Bn,En),re.bind(Bn,En)}}return En}function Va(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function la(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,W,ot){const lt=Ht.get(A);lt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=W,Ht.get(A.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ot=Ht.get(A);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0};const an=F.createFramebuffer();this.setRenderTarget=function(A,W=0,ot=0){K=A,H=W,G=ot;let lt=!0,Z=null,bt=!1,Ut=!1;if(A){const Nt=Ht.get(A);if(Nt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(F.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Nt.__hasExternalTextures)se.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&Ht.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const $t=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[W])?Z=$t[W][ot]:Z=$t[W],bt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?Z=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Z=$t[ot]:Z=$t,z.copy(A.viewport),ht.copy(A.scissor),Y=A.scissorTest}else z.copy(et).multiplyScalar(X).floor(),ht.copy(vt).multiplyScalar(X).floor(),Y=st;if(ot!==0&&(Z=an),Ft.bindFramebuffer(F.FRAMEBUFFER,Z)&&lt&&Ft.drawBuffers(A,Z),Ft.viewport(z),Ft.scissor(ht),Ft.setScissorTest(Y),bt){const Nt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,ot)}else if(Ut){const Nt=W;for(let Qt=0;Qt<A.textures.length;Qt++){const $t=Ht.get(A.textures[Qt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,ot,Nt)}}else if(A!==null&&ot!==0){const Nt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,ot)}D=-1},this.readRenderTargetPixels=function(A,W,ot,lt,Z,bt,Ut,It=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Ft.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const Qt=A.textures[It],$t=Qt.format,Wt=Qt.type;if(!Me.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-lt&&ot>=0&&ot<=A.height-Z&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+It),F.readPixels(W,ot,lt,Z,kt.convert($t),kt.convert(Wt),bt))}finally{const Qt=K!==null?Ht.get(K).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,W,ot,lt,Z,bt,Ut,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(W>=0&&W<=A.width-lt&&ot>=0&&ot<=A.height-Z){Ft.bindFramebuffer(F.FRAMEBUFFER,Nt);const Qt=A.textures[It],$t=Qt.format,Wt=Qt.type;if(!Me.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+It),F.readPixels(W,ot,lt,Z,kt.convert($t),kt.convert(Wt),0);const Te=K!==null?Ht.get(K).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,Te);const We=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await QS(F,We,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(ce),F.deleteSync(We),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ot=0){const lt=Math.pow(2,-ot),Z=Math.floor(A.image.width*lt),bt=Math.floor(A.image.height*lt),Ut=W!==null?W.x:0,It=W!==null?W.y:0;se.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,ot,0,0,Ut,It,Z,bt),Ft.unbindTexture()};const Wo=F.createFramebuffer(),qo=F.createFramebuffer();this.copyTextureToTexture=function(A,W,ot=null,lt=null,Z=0,bt=null){bt===null&&(Z!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Ut,It,Nt,Qt,$t,Wt,ce,Te,We;const Le=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(ot!==null)Ut=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,Qt=ot.min.x,$t=ot.min.y,Wt=ot.isBox3?ot.min.z:0;else{const Tn=Math.pow(2,-Z);Ut=Math.floor(Le.width*Tn),It=Math.floor(Le.height*Tn),A.isDataArrayTexture?Nt=Le.depth:A.isData3DTexture?Nt=Math.floor(Le.depth*Tn):Nt=1,Qt=0,$t=0,Wt=0}lt!==null?(ce=lt.x,Te=lt.y,We=lt.z):(ce=0,Te=0,We=0);const ue=kt.convert(W.format),Zt=kt.convert(W.type);let Xe;W.isData3DTexture?(se.setTexture3D(W,0),Xe=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Xe=F.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Xe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=F.getParameter(F.UNPACK_ROW_LENGTH),En=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pi=F.getParameter(F.UNPACK_SKIP_PIXELS),Dn=F.getParameter(F.UNPACK_SKIP_ROWS),pn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Fe=A.isDataArrayTexture||A.isData3DTexture,Un=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Tn=Ht.get(A),Je=Ht.get(W),xn=Ht.get(Tn.__renderTarget),Er=Ht.get(Je.__renderTarget);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Bn=0;Bn<Nt;Bn++)Fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,Z,Wt+Bn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,bt,We+Bn)),F.blitFramebuffer(Qt,$t,Ut,It,ce,Te,Ut,It,F.DEPTH_BUFFER_BIT,F.NEAREST);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Ht.has(A)){const Tn=Ht.get(A),Je=Ht.get(W);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,Wo),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,qo);for(let xn=0;xn<Nt;xn++)Fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tn.__webglTexture,Z,Wt+xn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tn.__webglTexture,Z),Un?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,bt,We+xn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,bt),Z!==0?F.blitFramebuffer(Qt,$t,Ut,It,ce,Te,Ut,It,F.COLOR_BUFFER_BIT,F.NEAREST):Un?F.copyTexSubImage3D(Xe,bt,ce,Te,We+xn,Qt,$t,Ut,It):F.copyTexSubImage2D(Xe,bt,ce,Te,Qt,$t,Ut,It);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Xe,bt,ce,Te,We,Ut,It,Nt,ue,Zt,Le.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,bt,ce,Te,We,Ut,It,Nt,ue,Le.data):F.texSubImage3D(Xe,bt,ce,Te,We,Ut,It,Nt,ue,Zt,Le):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,bt,ce,Te,Ut,It,ue,Zt,Le.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,bt,ce,Te,Le.width,Le.height,ue,Le.data):F.texSubImage2D(F.TEXTURE_2D,bt,ce,Te,Ut,It,ue,Zt,Le);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,En),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pn),bt===0&&W.generateMipmaps&&F.generateMipmap(Xe),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ot=null,lt=null,Z=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ot,lt,Z)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){H=0,G=0,K=null,Ft.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const SA=Vn.forwardRef(({onLocationChange:o},t)=>{const i=Vn.useRef(null),r=Vn.useRef(null),l=Vn.useRef(null),u=Vn.useRef(null),h=Vn.useRef({}),d=Vn.useRef(null),m=Vn.useRef({isMouseDown:!1,mouseX:0,mouseY:0,phi:0,theta:Math.PI/2,distance:50,targetDistance:50,minDistance:4,maxDistance:500,focusedPlanet:"Solar System",surfaceMode:!1}),p={Sun:{distance:0,size:12,color:16739072,rotationSpeed:.001,surfaceDistance:20,emissive:16729344,emissiveIntensity:.5},Mercury:{distance:15,size:1.5,color:9205843,rotationSpeed:.008,surfaceDistance:3},Venus:{distance:22,size:2,color:16762441,rotationSpeed:.006,surfaceDistance:4},Earth:{distance:30,size:2.2,color:7050198,rotationSpeed:.005,surfaceDistance:4.5,hasAtmosphere:!0,hasOceans:!0,hasContinents:!0},Mars:{distance:40,size:1.8,color:13458524,rotationSpeed:.005,surfaceDistance:3.5,hasDesert:!0},Jupiter:{distance:70,size:6,color:13808780,rotationSpeed:.002,surfaceDistance:12,hasStripes:!0},Saturn:{distance:90,size:5.5,color:16438693,rotationSpeed:.002,surfaceDistance:11,hasRings:!0},Uranus:{distance:130,size:3.5,color:5230823,rotationSpeed:.003,surfaceDistance:7},Neptune:{distance:160,size:3.2,color:4286945,rotationSpeed:.003,surfaceDistance:6.5}};return Vn.useEffect(()=>{if(!i.current)return;const g=new My;g.background=new Se(17),r.current=g;const v=new hi,x=1e4,M=new Float32Array(x*3),b=new Float32Array(x*3);for(let Y=0;Y<x;Y++){M[Y*3]=(Math.random()-.5)*2e3,M[Y*3+1]=(Math.random()-.5)*2e3,M[Y*3+2]=(Math.random()-.5)*2e3;const at=Math.random();at<.7?(b[Y*3]=1,b[Y*3+1]=1,b[Y*3+2]=1):at<.85?(b[Y*3]=.7,b[Y*3+1]=.8,b[Y*3+2]=1):(b[Y*3]=1,b[Y*3+1]=.7,b[Y*3+2]=.4)}v.setAttribute("position",new $n(M,3)),v.setAttribute("color",new $n(b,3));const R=new G0({size:2,vertexColors:!0,transparent:!0,opacity:.8}),y=new wy(v,R);g.add(y);const _=new Jn(75,window.innerWidth/window.innerHeight,.1,1e4);_.position.set(50,20,50),_.lookAt(0,0,0),u.current=_;const B=new xA({antialias:!0,alpha:!0,failIfMajorPerformanceCaveat:!1});B.setSize(window.innerWidth,window.innerHeight),B.shadowMap.enabled=!1,B.toneMapping=_0,B.toneMappingExposure=1,l.current=B,i.current.appendChild(B.domElement);const O=new Py(4210752,.3);g.add(O);const C=new Ny(16777215,1.5,0);C.position.set(0,0,0),g.add(C),Object.entries(p).forEach(([Y,at])=>{const ct=new Ic(at.size,32,32);let N;if(Y==="Sun"){const st=document.createElement("canvas");st.width=512,st.height=256;const dt=st.getContext("2d"),Q=dt.createRadialGradient(256,128,0,256,128,256);Q.addColorStop(0,"#FFFF00"),Q.addColorStop(.3,"#FF8C00"),Q.addColorStop(.7,"#FF4500"),Q.addColorStop(1,"#FF6B00"),dt.fillStyle=Q,dt.fillRect(0,0,st.width,st.height);for(let Mt=0;Mt<50;Mt++){const Ct=Math.random()*st.width,Bt=Math.random()*st.height,ee=Math.random()*20+5;dt.fillStyle=Math.random()>.5?"#FFFF88":"#FF6600",dt.beginPath(),dt.arc(Ct,Bt,ee,0,Math.PI*2),dt.fill()}const ut=new No(st);N=new zc({map:ut,color:at.color,emissive:at.emissive,emissiveIntensity:at.emissiveIntensity})}else if(Y==="Earth"){const st=document.createElement("canvas");st.width=512,st.height=256;const dt=st.getContext("2d");dt.fillStyle="#1e40af",dt.fillRect(0,0,st.width,st.height);for(let ut=0;ut<60;ut++){const Mt=Math.random()*st.width,Ct=Math.random()*st.height,Bt=Math.random()*35+20;dt.fillStyle=Math.random()>.6?"#228b22":"#8b4513",dt.beginPath(),dt.arc(Mt,Ct,Bt,0,Math.PI*2),dt.fill()}dt.fillStyle="rgba(255, 255, 255, 0.4)";for(let ut=0;ut<40;ut++){const Mt=Math.random()*st.width,Ct=Math.random()*st.height,Bt=Math.random()*25+15;dt.beginPath(),dt.arc(Mt,Ct,Bt,0,Math.PI*2),dt.fill()}dt.fillStyle="rgba(255, 255, 255, 0.8)",dt.fillRect(0,0,st.width,15),dt.fillRect(0,st.height-15,st.width,15);const Q=new No(st);N=new Ec({map:Q,color:at.color,shininess:10})}else if(Y==="Mars"){const st=document.createElement("canvas");st.width=512,st.height=256;const dt=st.getContext("2d");dt.fillStyle="#cd5c5c",dt.fillRect(0,0,st.width,st.height);for(let ut=0;ut<40;ut++){const Mt=Math.random()*st.width,Ct=Math.random()*st.height,Bt=Math.random()*25+15;dt.fillStyle="#8b3a3a",dt.beginPath(),dt.arc(Mt,Ct,Bt,0,Math.PI*2),dt.fill()}dt.fillStyle="#ffffff",dt.fillRect(0,0,st.width,20),dt.fillRect(0,st.height-20,st.width,20);const Q=new No(st);N=new Ec({map:Q,color:at.color,shininess:5})}else if(Y==="Jupiter"){const st=document.createElement("canvas");st.width=512,st.height=256;const dt=st.getContext("2d");dt.fillStyle="#d8ca9d",dt.fillRect(0,0,st.width,st.height);for(let ut=0;ut<st.height;ut+=20)dt.fillStyle=ut%40===0?"#c4a484":"#e6d4b7",dt.fillRect(0,ut,st.width,10);dt.fillStyle="#cc6666",dt.beginPath(),dt.ellipse(st.width*.3,st.height*.6,30,20,0,0,Math.PI*2),dt.fill();const Q=new No(st);N=new Ec({map:Q,color:at.color,shininess:5})}else N=new Ec({color:at.color,shininess:5});const q=new fi(ct,N);if(Y!=="Sun"&&(q.position.x=at.distance),g.add(q),h.current[Y]=q,at.hasRings){const st=new Ld(at.size*1.2,at.size*2,32),dt=new zc({color:12887172,side:Ui,transparent:!0,opacity:.7}),Q=new fi(st,dt);Q.rotation.x=Math.PI/2,Q.position.copy(q.position),g.add(Q),h.current[Y+"_rings"]=Q}if(at.hasAtmosphere){const st=new Ic(at.size*1.1,32,32),dt=new sa({uniforms:{c:{value:.3},p:{value:3}},vertexShader:`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform float c;
            uniform float p;
            varying vec3 vNormal;
            void main() {
              float intensity = pow(c - dot(vNormal, vec3(0.0, 0.0, 1.0)), p);
              gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
            }
          `,side:Pn,blending:Uh,transparent:!0}),Q=new fi(st,dt);Q.position.copy(q.position),g.add(Q),h.current[Y+"_atmosphere"]=Q}const X=document.createElement("canvas");X.width=256,X.height=64;const _t=X.getContext("2d");_t.clearRect(0,0,X.width,X.height),_t.strokeStyle="black",_t.lineWidth=3,_t.font="bold 20px Arial",_t.textAlign="center",_t.strokeText(Y,X.width/2,X.height/2+7),_t.fillStyle="white",_t.fillText(Y,X.width/2,X.height/2+7);const U=new No(X),et=new F0({map:U,transparent:!0}),vt=new Ty(et);vt.scale.set(8,2,1),vt.position.copy(q.position),vt.position.y+=at.size+3,g.add(vt),h.current[Y+"_label"]=vt});const I=Y=>{m.current.isMouseDown=!0,m.current.mouseX=Y.clientX,m.current.mouseY=Y.clientY},H=()=>{m.current.isMouseDown=!1},G=Y=>{if(!m.current.isMouseDown)return;const at=Y.clientX-m.current.mouseX,ct=Y.clientY-m.current.mouseY;m.current.phi-=at*.01,m.current.theta+=ct*.01,m.current.theta=Math.max(.1,Math.min(Math.PI-.1,m.current.theta)),m.current.mouseX=Y.clientX,m.current.mouseY=Y.clientY,D()},K=Y=>{Y.preventDefault();const at=1+Y.deltaY*.001;m.current.targetDistance*=at,m.current.targetDistance=Math.max(m.current.minDistance,Math.min(m.current.maxDistance,m.current.targetDistance))},D=()=>{const Y=m.current;let at=new J(0,0,0);Y.focusedPlanet!=="Solar System"&&h.current[Y.focusedPlanet]&&(at=h.current[Y.focusedPlanet].position.clone());const ct=at.x+Y.distance*Math.sin(Y.theta)*Math.cos(Y.phi),N=at.y+Y.distance*Math.cos(Y.theta),q=at.z+Y.distance*Math.sin(Y.theta)*Math.sin(Y.phi);_.position.set(ct,N,q),_.lookAt(at)},w=()=>{d.current=requestAnimationFrame(w);const Y=m.current.targetDistance-m.current.distance;Math.abs(Y)>.01&&(m.current.distance+=Y*.1,D()),Object.entries(p).forEach(([ct,N])=>{h.current[ct]&&(h.current[ct].rotation.y+=N.rotationSpeed),h.current[ct+"_rings"]&&(h.current[ct+"_rings"].rotation.z+=N.rotationSpeed*.5)});const at=Date.now()*1e-4;Object.entries(p).forEach(([ct,N])=>{if(ct!=="Sun"&&h.current[ct]){const q=at/(N.distance*.1),X=Math.cos(q)*N.distance,_t=Math.sin(q)*N.distance;h.current[ct].position.set(X,0,_t),h.current[ct+"_rings"]&&h.current[ct+"_rings"].position.set(X,0,_t),h.current[ct+"_atmosphere"]&&h.current[ct+"_atmosphere"].position.set(X,0,_t),h.current[ct+"_label"]&&h.current[ct+"_label"].position.set(X,N.size+3,_t)}}),B.render(g,_)};w();const z=B.domElement;z.addEventListener("mousedown",I),z.addEventListener("mouseup",H),z.addEventListener("mousemove",G),z.addEventListener("wheel",K,{passive:!1});const ht=()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),B.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ht),()=>{window.removeEventListener("resize",ht),z.removeEventListener("mousedown",I),z.removeEventListener("mouseup",H),z.removeEventListener("mousemove",G),z.removeEventListener("wheel",K),d.current&&cancelAnimationFrame(d.current),i.current&&B.domElement&&i.current.removeChild(B.domElement),B.dispose()}},[]),Vn.useImperativeHandle(t,()=>({focusOnPlanet:(g,v="orbit")=>{const x=m.current,M=p[g];g==="Solar System"?(x.focusedPlanet="Solar System",x.targetDistance=100,x.minDistance=20,x.maxDistance=500,x.surfaceMode=!1,o==null||o("Solar System")):M&&(x.focusedPlanet=g,x.surfaceMode=v==="surface",v==="surface"?(x.targetDistance=M.surfaceDistance,x.minDistance=M.surfaceDistance*.8,x.maxDistance=M.surfaceDistance*3,o==null||o(`${g} Surface`)):(x.targetDistance=M.size*8,x.minDistance=M.size*3,x.maxDistance=M.size*20,o==null||o(`${g} Orbit`)))},getCurrentPlanet:()=>m.current.focusedPlanet,isSurfaceMode:()=>m.current.surfaceMode})),ae.jsx("div",{ref:i,className:"w-full h-screen"})});function yA(){const[o,t]=Vn.useState("Solar System"),[i,r]=Vn.useState("orbit"),l=Vn.useRef(null),u=p=>{t(p)},h=p=>{l.current&&l.current.focusOnPlanet(p,i)},d=p=>{if(r(p),l.current){const g=l.current.getCurrentPlanet();g&&g!=="Solar System"&&l.current.focusOnPlanet(g,p)}},m=[{name:"Solar System",icon:"🌌",color:"bg-purple-600"},{name:"Sun",icon:"☀️",color:"bg-yellow-500"},{name:"Mercury",icon:"☿️",color:"bg-gray-500"},{name:"Venus",icon:"♀️",color:"bg-orange-400"},{name:"Earth",icon:"🌍",color:"bg-blue-500"},{name:"Mars",icon:"♂️",color:"bg-red-500"},{name:"Jupiter",icon:"♃",color:"bg-yellow-600"},{name:"Saturn",icon:"♄",color:"bg-yellow-300"},{name:"Uranus",icon:"♅",color:"bg-cyan-400"},{name:"Neptune",icon:"♆",color:"bg-blue-600"}];return ae.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[ae.jsx(SA,{ref:l,onLocationChange:u}),ae.jsxs("div",{className:"absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-sm",children:[ae.jsx("h3",{className:"text-lg font-bold mb-3",children:"🚀 Universe Navigation"}),ae.jsxs("div",{className:"mb-4",children:[ae.jsx("p",{className:"text-sm text-gray-300 mb-2",children:"View Mode:"}),ae.jsxs("div",{className:"flex gap-2",children:[ae.jsx("button",{onClick:()=>d("orbit"),className:`px-3 py-1 rounded text-xs font-medium transition-colors ${i==="orbit"?"bg-blue-600 text-white":"bg-gray-600 hover:bg-gray-500 text-gray-200"}`,children:"🛰️ Orbit"}),ae.jsx("button",{onClick:()=>d("surface"),className:`px-3 py-1 rounded text-xs font-medium transition-colors ${i==="surface"?"bg-green-600 text-white":"bg-gray-600 hover:bg-gray-500 text-gray-200"}`,children:"🏔️ Surface"})]})]}),ae.jsx("div",{className:"space-y-2 max-h-64 overflow-y-auto",children:m.map(p=>ae.jsxs("button",{onClick:()=>h(p.name),className:`w-full px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2 ${o.includes(p.name)?`${p.color} text-white`:"bg-gray-700 hover:bg-gray-600 text-gray-200"}`,children:[ae.jsx("span",{className:"text-lg",children:p.icon}),ae.jsx("span",{children:p.name})]},p.name))}),ae.jsxs("div",{className:"mt-3 text-xs text-gray-400",children:[ae.jsx("p",{children:ae.jsx("strong",{children:"Controls:"})}),ae.jsx("p",{children:"• Mouse drag: Rotate view 360°"}),ae.jsx("p",{children:"• Mouse wheel: Zoom in/out"}),ae.jsx("p",{children:"• Select planet + view mode"})]})]}),ae.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md",children:[ae.jsx("h2",{className:"text-lg font-bold mb-2",children:"🌌 Interactive Universe Simulation"}),ae.jsx("p",{className:"text-sm text-gray-300 mb-2",children:"Explore our complete solar system with realistic planet colors, orbital motion, and surface exploration capabilities for every celestial body."}),ae.jsxs("div",{className:"text-xs text-gray-400 space-y-1",children:[ae.jsx("p",{children:ae.jsx("strong",{children:"Features:"})}),ae.jsxs("p",{children:["• ",ae.jsx("strong",{children:"All Planets:"})," Complete solar system with Sun and 8 planets"]}),ae.jsxs("p",{children:["• ",ae.jsx("strong",{children:"Realistic Colors:"})," NASA-accurate planet appearances"]}),ae.jsxs("p",{children:["• ",ae.jsx("strong",{children:"Orbital Motion:"})," Planets orbit the Sun with realistic motion"]}),ae.jsxs("p",{children:["• ",ae.jsx("strong",{children:"Surface Exploration:"})," Get close to any planet's surface"]}),ae.jsxs("p",{children:["• ",ae.jsx("strong",{children:"360° Controls:"})," Full freedom to explore from any angle"]}),ae.jsxs("p",{children:["• ",ae.jsx("strong",{children:"Special Features:"})," Saturn's rings, Earth's atmosphere"]})]}),ae.jsxs("div",{className:"mt-2 text-xs text-yellow-400",children:[ae.jsxs("p",{children:["Current location: ",ae.jsx("strong",{children:o})]}),ae.jsxs("p",{children:["View mode: ",ae.jsx("strong",{children:i==="orbit"?"Orbit View":"Surface Exploration"})]})]})]})]})}lS.createRoot(document.getElementById("root")).render(ae.jsx(Vn.StrictMode,{children:ae.jsx(yA,{})}));
