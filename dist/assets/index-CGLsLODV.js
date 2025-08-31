(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rd={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function Gy(){if(A_)return Bo;A_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=t,Bo.jsx=i,Bo.jsxs=i,Bo}var R_;function Vy(){return R_||(R_=1,rd.exports=Gy()),rd.exports}var se=Vy(),sd={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function ky(){if(w_)return ue;w_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(U,Q,_t){this.props=U,this.context=Q,this.refs=A,this.updater=_t||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function F(U,Q,_t){this.props=U,this.context=Q,this.refs=A,this.updater=_t||y}var N=F.prototype=new _;N.constructor=F,E(N,S.prototype),N.isPureReactComponent=!0;var w=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function k(U,Q,_t,gt,Mt,et){return _t=et.ref,{$$typeof:s,type:U,key:Q,ref:_t!==void 0?_t:null,props:et}}function H(U,Q){return k(U.type,Q,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function D(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_t){return Q[_t]})}var I=/\/+/g;function tt(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?D(""+U.key):Q.toString(36)}function it(){}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(it,it):(U.status="pending",U.then(function(Q){U.status==="pending"&&(U.status="fulfilled",U.value=Q)},function(Q){U.status==="pending"&&(U.status="rejected",U.reason=Q)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,Q,_t,gt,Mt){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(et){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case s:case t:dt=!0;break;case g:return dt=U._init,lt(dt(U._payload),Q,_t,gt,Mt)}}if(dt)return Mt=Mt(U),dt=gt===""?"."+tt(U,0):gt,w(Mt)?(_t="",dt!=null&&(_t=dt.replace(I,"$&/")+"/"),lt(Mt,Q,_t,"",function(kt){return kt})):Mt!=null&&(C(Mt)&&(Mt=H(Mt,_t+(Mt.key==null||U&&U.key===Mt.key?"":(""+Mt.key).replace(I,"$&/")+"/")+dt)),Q.push(Mt)),1;dt=0;var pt=gt===""?".":gt+":";if(w(U))for(var Dt=0;Dt<U.length;Dt++)gt=U[Dt],et=pt+tt(gt,Dt),dt+=lt(gt,Q,_t,et,Mt);else if(Dt=x(U),typeof Dt=="function")for(U=Dt.call(U),Dt=0;!(gt=U.next()).done;)gt=gt.value,et=pt+tt(gt,Dt++),dt+=lt(gt,Q,_t,et,Mt);else if(et==="object"){if(typeof U.then=="function")return lt(ct(U),Q,_t,gt,Mt);throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return dt}function O(U,Q,_t){if(U==null)return U;var gt=[],Mt=0;return lt(U,gt,"","",function(et){return Q.call(_t,et,Mt++)}),gt}function q(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(_t){(U._status===0||U._status===-1)&&(U._status=1,U._result=_t)},function(_t){(U._status===0||U._status===-1)&&(U._status=2,U._result=_t)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var B=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return ue.Children={map:O,forEach:function(U,Q,_t){O(U,function(){Q.apply(this,arguments)},_t)},count:function(U){var Q=0;return O(U,function(){Q++}),Q},toArray:function(U){return O(U,function(Q){return Q})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ue.Component=S,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=F,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ue.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ue.cache=function(U){return function(){return U.apply(null,arguments)}},ue.cloneElement=function(U,Q,_t){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var gt=E({},U.props),Mt=U.key,et=void 0;if(Q!=null)for(dt in Q.ref!==void 0&&(et=void 0),Q.key!==void 0&&(Mt=""+Q.key),Q)!V.call(Q,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&Q.ref===void 0||(gt[dt]=Q[dt]);var dt=arguments.length-2;if(dt===1)gt.children=_t;else if(1<dt){for(var pt=Array(dt),Dt=0;Dt<dt;Dt++)pt[Dt]=arguments[Dt+2];gt.children=pt}return k(U.type,Mt,void 0,void 0,et,gt)},ue.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ue.createElement=function(U,Q,_t){var gt,Mt={},et=null;if(Q!=null)for(gt in Q.key!==void 0&&(et=""+Q.key),Q)V.call(Q,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(Mt[gt]=Q[gt]);var dt=arguments.length-2;if(dt===1)Mt.children=_t;else if(1<dt){for(var pt=Array(dt),Dt=0;Dt<dt;Dt++)pt[Dt]=arguments[Dt+2];Mt.children=pt}if(U&&U.defaultProps)for(gt in dt=U.defaultProps,dt)Mt[gt]===void 0&&(Mt[gt]=dt[gt]);return k(U,et,void 0,void 0,null,Mt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(U){return{$$typeof:h,render:U}},ue.isValidElement=C,ue.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:q}},ue.memo=function(U,Q){return{$$typeof:p,type:U,compare:Q===void 0?null:Q}},ue.startTransition=function(U){var Q=z.T,_t={};z.T=_t;try{var gt=U(),Mt=z.S;Mt!==null&&Mt(_t,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(yt,B)}catch(et){B(et)}finally{z.T=Q}},ue.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ue.use=function(U){return z.H.use(U)},ue.useActionState=function(U,Q,_t){return z.H.useActionState(U,Q,_t)},ue.useCallback=function(U,Q){return z.H.useCallback(U,Q)},ue.useContext=function(U){return z.H.useContext(U)},ue.useDebugValue=function(){},ue.useDeferredValue=function(U,Q){return z.H.useDeferredValue(U,Q)},ue.useEffect=function(U,Q,_t){var gt=z.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(U,Q)},ue.useId=function(){return z.H.useId()},ue.useImperativeHandle=function(U,Q,_t){return z.H.useImperativeHandle(U,Q,_t)},ue.useInsertionEffect=function(U,Q){return z.H.useInsertionEffect(U,Q)},ue.useLayoutEffect=function(U,Q){return z.H.useLayoutEffect(U,Q)},ue.useMemo=function(U,Q){return z.H.useMemo(U,Q)},ue.useOptimistic=function(U,Q){return z.H.useOptimistic(U,Q)},ue.useReducer=function(U,Q,_t){return z.H.useReducer(U,Q,_t)},ue.useRef=function(U){return z.H.useRef(U)},ue.useState=function(U){return z.H.useState(U)},ue.useSyncExternalStore=function(U,Q,_t){return z.H.useSyncExternalStore(U,Q,_t)},ue.useTransition=function(){return z.H.useTransition()},ue.version="19.1.0",ue}var C_;function Fh(){return C_||(C_=1,sd.exports=ky()),sd.exports}var Me=Fh(),od={exports:{}},Io={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Xy(){return D_||(D_=1,function(s){function t(O,q){var B=O.length;O.push(q);t:for(;0<B;){var yt=B-1>>>1,U=O[yt];if(0<l(U,q))O[yt]=q,O[B]=U,B=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var q=O[0],B=O.pop();if(B!==q){O[0]=B;t:for(var yt=0,U=O.length,Q=U>>>1;yt<Q;){var _t=2*(yt+1)-1,gt=O[_t],Mt=_t+1,et=O[Mt];if(0>l(gt,B))Mt<U&&0>l(et,gt)?(O[yt]=et,O[Mt]=B,yt=Mt):(O[yt]=gt,O[_t]=B,yt=_t);else if(Mt<U&&0>l(et,B))O[yt]=et,O[Mt]=B,yt=Mt;else break t}}return q}function l(O,q){var B=O.sortIndex-q.sortIndex;return B!==0?B:O.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,x=3,y=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=O)r(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function z(O){if(A=!1,w(O),!E)if(i(m)!==null)E=!0,V||(V=!0,tt());else{var q=i(p);q!==null&&lt(z,q.startTime-O)}}var V=!1,k=-1,H=5,C=-1;function D(){return S?!0:!(s.unstable_now()-C<H)}function I(){if(S=!1,V){var O=s.unstable_now();C=O;var q=!0;try{t:{E=!1,A&&(A=!1,F(k),k=-1),y=!0;var B=x;try{e:{for(w(O),v=i(m);v!==null&&!(v.expirationTime>O&&D());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=O);if(O=s.unstable_now(),typeof U=="function"){v.callback=U,w(O),q=!0;break e}v===i(m)&&r(m),w(O)}else r(m);v=i(m)}if(v!==null)q=!0;else{var Q=i(p);Q!==null&&lt(z,Q.startTime-O),q=!1}}break t}finally{v=null,x=B,y=!1}q=void 0}}finally{q?tt():V=!1}}}var tt;if(typeof N=="function")tt=function(){N(I)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ct=it.port2;it.port1.onmessage=I,tt=function(){ct.postMessage(null)}}else tt=function(){_(I,0)};function lt(O,q){k=_(function(){O(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var B=x;x=q;try{return O()}finally{x=B}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=x;x=O;try{return q()}finally{x=B}},s.unstable_scheduleCallback=function(O,q,B){var yt=s.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?yt+B:yt):B=yt,O){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=B+U,O={id:g++,callback:q,priorityLevel:O,startTime:B,expirationTime:U,sortIndex:-1},B>yt?(O.sortIndex=B,t(p,O),i(m)===null&&O===i(p)&&(A?(F(k),k=-1):A=!0,lt(z,B-yt))):(O.sortIndex=U,t(m,O),E||y||(E=!0,V||(V=!0,tt()))),O},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(O){var q=x;return function(){var B=x;x=q;try{return O.apply(this,arguments)}finally{x=B}}}}(cd)),cd}var U_;function Wy(){return U_||(U_=1,ld.exports=Xy()),ld.exports}var ud={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function qy(){if(L_)return Ln;L_=1;var s=Fh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var N_;function Yy(){if(N_)return ud.exports;N_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ud.exports=qy(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function jy(){if(O_)return Io;O_=1;var s=Wy(),t=Fh(),i=Yy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),e;if(f===o)return h(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=f;break}if(T===o){M=!0,o=u,a=f;break}T=T.sibling}if(!M){for(T=f.child;T;){if(T===a){M=!0,a=f,o=u;break}if(T===o){M=!0,o=f,a=u;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case z:return"Suspense";case V:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var lt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function Q(e){return{current:e}}function _t(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function gt(e,n){U++,yt[U]=e.current,e.current=n}var Mt=Q(null),et=Q(null),dt=Q(null),pt=Q(null);function Dt(e,n){switch(gt(dt,n),gt(et,e),gt(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?t_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=t_(n),e=e_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(Mt),gt(Mt,e)}function kt(){_t(Mt),_t(et),_t(dt)}function te(e){e.memoizedState!==null&&gt(pt,e);var n=Mt.current,a=e_(n,e.type);n!==a&&(gt(et,e),gt(Mt,a))}function Le(e){et.current===e&&(_t(Mt),_t(et)),pt.current===e&&(_t(pt),Lo._currentValue=B)}var le=Object.prototype.hasOwnProperty,G=s.unstable_scheduleCallback,Ne=s.unstable_cancelCallback,Jt=s.unstable_shouldYield,Ae=s.unstable_requestPaint,It=s.unstable_now,qe=s.unstable_getCurrentPriorityLevel,Ft=s.unstable_ImmediatePriority,ce=s.unstable_UserBlockingPriority,Je=s.unstable_NormalPriority,$e=s.unstable_LowPriority,L=s.unstable_IdlePriority,b=s.log,nt=s.unstable_setDisableYieldValue,ft=null,St=null;function ut(e){if(typeof b=="function"&&nt(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:jt,Rt=Math.log,qt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Rt(e)/qt|0)|0}var Et=256,Lt=4194304;function Kt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Kt(o):(M&=T,M!==0?u=Kt(M):a||(a=T&~e,a!==0&&(u=Kt(a))))):(T=o&~f,T!==0?u=Kt(T):M!==0?u=Kt(M):a||(a=o&~e,a!==0&&(u=Kt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=M&~a;0<a;){var ht=31-Pt(a),vt=1<<ht;T[ht]=0,P[ht]=-1;var at=$[ht];if(at!==null)for($[ht]=null,ht=0;ht<at.length;ht++){var rt=at[ht];rt!==null&&(rt.lane&=-536870913)}a&=~vt}o!==0&&xt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Xt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:y_(e.type))}function _i(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var dn=Math.random().toString(36).slice(2),hn="__reactFiber$"+dn,en="__reactProps$"+dn,wi="__reactContainer$"+dn,Dr="__reactEvents$"+dn,al="__reactListeners$"+dn,Ur="__reactHandles$"+dn,ks="__reactResources$"+dn,Ci="__reactMarker$"+dn;function Lr(e){delete e[hn],delete e[en],delete e[Dr],delete e[al],delete e[Ur]}function Vi(e){var n=e[hn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[wi]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=r_(e);e!==null;){if(a=e[hn])return a;e=r_(e)}return n}e=a,a=e.parentNode}return null}function ha(e){if(e=e[hn]||e[wi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function pa(e){var n=e[ks];return n||(n=e[ks]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(e){e[Ci]=!0}var rl=new Set,sl={};function R(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(sl[e]=n,e=0;e<n.length;e++)rl.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},Z={};function Tt(e){return le.call(Z,e)?!0:le.call(ot,e)?!1:st.test(e)?Z[e]=!0:(ot[e]=!0,!1)}function Ut(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Bt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var $t,ne;function Yt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ne}var de=!1;function we(e,n){if(!e||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(rt){var at=rt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(rt){at=rt}e.call(vt.prototype)}}else{try{throw Error()}catch(rt){at=rt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(rt){if(rt&&at&&typeof rt.stack=="string")return[rt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],T=f[1];if(M&&T){var P=M.split(`
`),$=T.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===$.length)for(o=P.length-1,u=$.length-1;1<=o&&0<=u&&P[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==$[u]){var ht=`
`+P[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{de=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Ze(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Yt("Activity");default:return""}}function Be(e){try{var n="";do n+=Ze(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(e){var n=Qt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=je(e))}function Cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function yn(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(e,n,a,o,u,f,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Dn(e,M,he(n)):a!=null?Dn(e,M,he(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+he(T):e.removeAttribute("name")}function Bn(e,n,a,o,u,f,M,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Dn(e,n,a){n==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Tn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Nr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Iv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Iv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ep(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&tp(e,f,n[f])}function iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return Hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var au=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Pr=null;function np(e){var n=ha(e);if(n&&(e=n.stateNode)){var a=e[en]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[en]||null;if(!u)throw Error(r(90));Xe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Cn(o)}break t;case"textarea":Tn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var su=!1;function ip(e,n,a){if(su)return e(n,a);su=!0;try{var o=e(n);return o}finally{if(su=!1,(Or!==null||Pr!==null)&&(ql(),Or&&(n=Or,e=Pr,Pr=Or=null,np(n),e)))for(n=0;n<e.length;n++)np(e[n])}}function Xs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[en]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(ki)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{ou=!1}var ma=null,lu=null,ll=null;function ap(){if(ll)return ll;var e,n=lu,a=n.length,o,u="value"in ma?ma.value:ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return ll=u.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function rp(){return!1}function kn(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:rp,this.isPropagationStopped=rp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=kn(Ja),qs=g({},Ja,{view:0,detail:0}),Gv=kn(qs),cu,uu,Ys,dl=g({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ys&&(Ys&&e.type==="mousemove"?(cu=e.screenX-Ys.screenX,uu=e.screenY-Ys.screenY):uu=cu=0,Ys=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),sp=kn(dl),Vv=g({},dl,{dataTransfer:0}),kv=kn(Vv),Xv=g({},qs,{relatedTarget:0}),fu=kn(Xv),Wv=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=kn(Wv),Yv=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jv=kn(Yv),Zv=g({},Ja,{data:0}),op=kn(Zv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jv[e])?!!n[e]:!1}function du(){return $v}var tx=g({},qs,{key:function(e){if(e.key){var n=Kv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=kn(tx),nx=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=kn(nx),ix=g({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),ax=kn(ix),rx=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=kn(rx),ox=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=kn(ox),cx=g({},Ja,{newState:0,oldState:0}),ux=kn(cx),fx=[9,13,27,32],hu=ki&&"CompositionEvent"in window,js=null;ki&&"documentMode"in document&&(js=document.documentMode);var dx=ki&&"TextEvent"in window&&!js,cp=ki&&(!hu||js&&8<js&&11>=js),up=" ",fp=!1;function dp(e,n){switch(e){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function hx(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(fp=!0,up);case"textInput":return e=n.data,e===up&&fp?null:e;default:return null}}function px(e,n){if(zr)return e==="compositionend"||!hu&&dp(e,n)?(e=ap(),ll=lu=ma=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cp&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mx[e.type]:n==="textarea"}function mp(e,n,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=Jl(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zs=null,Ks=null;function gx(e){Zg(e,0)}function hl(e){var n=Qa(e);if(Cn(n))return e}function gp(e,n){if(e==="change")return n}var _p=!1;if(ki){var pu;if(ki){var mu="oninput"in document;if(!mu){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),mu=typeof vp.oninput=="function"}pu=mu}else pu=!1;_p=pu&&(!document.documentMode||9<document.documentMode)}function xp(){Zs&&(Zs.detachEvent("onpropertychange",yp),Ks=Zs=null)}function yp(e){if(e.propertyName==="value"&&hl(Ks)){var n=[];mp(n,Ks,e,ru(e)),ip(gx,n)}}function _x(e,n,a){e==="focusin"?(xp(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",yp)):e==="focusout"&&xp()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Ks)}function xx(e,n){if(e==="click")return hl(n)}function yx(e,n){if(e==="input"||e==="change")return hl(n)}function Sx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Sx;function Qs(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!le.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function Sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,n){var a=Sp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sp(a)}}function Ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vi(e.document)}return n}function gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Mx=ki&&"documentMode"in document&&11>=document.documentMode,Br=null,_u=null,Js=null,vu=!1;function Tp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||Br==null||Br!==vi(o)||(o=Br,"selectionStart"in o&&gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=Jl(_u,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Br)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},xu={},Ap={};ki&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function tr(e){if(xu[e])return xu[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ap)return xu[e]=n[a];return e}var Rp=tr("animationend"),wp=tr("animationiteration"),Cp=tr("animationstart"),Ex=tr("transitionrun"),bx=tr("transitionstart"),Tx=tr("transitioncancel"),Dp=tr("transitionend"),Up=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function xi(e,n){Up.set(e,n),R(n,[e])}var Lp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Be(n)},Lp.set(e,n),n)}return{value:e,source:n,stack:Be(n)}}var oi=[],Fr=0,Su=0;function pl(){for(var e=Fr,n=Su=Fr=0;n<e;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Np(a,u,f)}}function ml(e,n,a,o){oi[Fr++]=e,oi[Fr++]=n,oi[Fr++]=a,oi[Fr++]=o,Su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mu(e,n,a,o){return ml(e,n,a,o),gl(e)}function Hr(e,n){return ml(e,null,null,n),gl(e)}function Np(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function gl(e){if(50<bo)throw bo=0,Cf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={};function Ax(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new Ax(e,n,a,o)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Op(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")Eu(e)&&(M=1);else if(typeof e=="string")M=wy(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Zn(31,a,n,u),e.elementType=C,e.lanes=f,e;case E:return er(a.children,u,f,n);case A:M=8,u|=24;break;case S:return e=Zn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case z:return e=Zn(13,a,n,u),e.elementType=z,e.lanes=f,e;case V:return e=Zn(19,a,n,u),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:M=10;break t;case F:M=9;break t;case w:M=11;break t;case k:M=14;break t;case H:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Zn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function er(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function bu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Tu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vr=[],kr=0,vl=null,xl=0,li=[],ci=0,nr=null,Wi=1,qi="";function ir(e,n){Vr[kr++]=xl,Vr[kr++]=vl,vl=e,xl=n}function Pp(e,n,a){li[ci++]=Wi,li[ci++]=qi,li[ci++]=nr,nr=e;var o=Wi;e=qi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Wi=1<<32-Pt(n)+u|a<<u|o,qi=f+e}else Wi=1<<f|a<<u|o,qi=e}function Au(e){e.return!==null&&(ir(e,1),Pp(e,1,0))}function Ru(e){for(;e===vl;)vl=Vr[--kr],Vr[kr]=null,xl=Vr[--kr],Vr[kr]=null;for(;e===nr;)nr=li[--ci],li[ci]=null,qi=li[--ci],li[ci]=null,Wi=li[--ci],li[ci]=null}var In=null,an=null,Ue=!1,ar=null,Di=!1,wu=Error(r(519));function rr(e){var n=Error(r(418,""));throw eo(si(n,e)),wu}function zp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[hn]=e,n[en]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)Se(Ao[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),xe(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Nr(n,o.value,o.defaultValue,o.children),xe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$g(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=$l),n=!0):n=!1,n||rr(e)}function Bp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:In=In.return}}function $s(e){if(e!==In)return!1;if(!Ue)return Bp(e),Ue=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&an&&rr(e),Bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){an=Si(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}an=null}}else n===27?(n=an,Ua(e.type)?(e=Zf,Zf=null,an=e):an=n):an=In?Si(e.stateNode.nextSibling):null;return!0}function to(){an=In=null,Ue=!1}function Ip(){var e=ar;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),ar=null),e}function eo(e){ar===null?ar=[e]:ar.push(e)}var Cu=Q(null),sr=null,Yi=null;function ga(e,n,a){gt(Cu,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=Cu.current,_t(Cu)}function Du(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Uu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Du(f.return,a,e),o||(M=null);break t}f=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Du(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function no(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=u.type;jn(u.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(u===pt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Uu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){sr=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Fp(sr,e)}function Sl(e,n){return sr===null&&or(e),Fp(e,n)}function Fp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(e===null)throw Error(r(308));Yi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yi=Yi.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wx=s.unstable_scheduleCallback,Cx=s.unstable_NormalPriority,pn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Rx,data:new Map,refCount:0}}function io(e){e.refCount--,e.refCount===0&&wx(Cx,function(){e.controller.abort()})}var ao=null,Nu=0,Xr=0,Wr=null;function Dx(e,n){if(ao===null){var a=ao=[];Nu=0,Xr=zf(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Nu++,n.then(Hp,Hp),n}function Hp(){if(--Nu===0&&ao!==null){Wr!==null&&(Wr.status="fulfilled");var e=ao;ao=null,Xr=0,Wr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ux(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(e,n),Gp!==null&&Gp(e,n)};var lr=Q(null);function Ou(){var e=lr.current;return e!==null?e:Ye.pooledCache}function Ml(e,n){n===null?gt(lr,lr.current):gt(lr,n.pool)}function Vp(){var e=Ou();return e===null?null:{parent:pn._currentValue,pool:e}}var ro=Error(r(460)),kp=Error(r(474)),El=Error(r(542)),Pu={then:function(){}};function Xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bl(){}function Wp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(bl,bl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yp(e),e;default:if(typeof n.status=="string")n.then(bl,bl);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yp(e),e}throw so=n,ro}}var so=null;function qp(){if(so===null)throw Error(r(459));var e=so;return so=null,e}function Yp(e){if(e===ro||e===El)throw Error(r(483))}var _a=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(e),Np(e,null,a),n}return ml(e,o,n,a),gl(e)}function oo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xt(e,a)}}function Iu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function lo(){if(Fu){var e=Wr;if(e!==null)throw e}}function co(e,n,a,o){Fu=!1;var u=e.updateQueue;_a=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,$=P.next;P.next=null,M===null?f=$:M.next=$,M=P;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==M&&(T===null?ht.firstBaseUpdate=$:T.next=$,ht.lastBaseUpdate=P))}if(f!==null){var vt=u.baseState;M=0,ht=$=P=null,T=f;do{var at=T.lane&-536870913,rt=at!==T.lane;if(rt?(be&at)===at:(o&at)===at){at!==0&&at===Xr&&(Fu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ae=e,ee=T;at=n;var He=a;switch(ee.tag){case 1:if(ae=ee.payload,typeof ae=="function"){vt=ae.call(He,vt,at);break t}vt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ee.payload,at=typeof ae=="function"?ae.call(He,vt,at):ae,at==null)break t;vt=g({},vt,at);break t;case 2:_a=!0}}at=T.callback,at!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[at]:rt.push(at))}else rt={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?($=ht=rt,P=vt):ht=ht.next=rt,M|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ht===null&&(P=vt),u.baseState=P,u.firstBaseUpdate=$,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=vt}}function jp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jp(a[e],n)}var qr=Q(null),Tl=Q(0);function Kp(e,n){e=ea,gt(Tl,e),gt(qr,n),ea=e|n.baseLanes}function Hu(){gt(Tl,ea),gt(qr,qr.current)}function Gu(){ea=Tl.current,_t(qr),_t(Tl)}var ya=0,ge=null,Ie=null,cn=null,Al=!1,Yr=!1,cr=!1,Rl=0,uo=0,jr=null,Lx=0;function sn(){throw Error(r(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function ku(e,n,a,o,u,f){return ya=f,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Nm:Om,cr=!1,f=a(o,u),cr=!1,Yr&&(f=Jp(n,a,o,u)),Qp(e),f}function Qp(e){O.H=Nl;var n=Ie!==null&&Ie.next!==null;if(ya=0,cn=Ie=ge=null,Al=!1,uo=0,jr=null,n)throw Error(r(300));e===null||Sn||(e=e.dependencies,e!==null&&yl(e)&&(Sn=!0))}function Jp(e,n,a,o){ge=e;var u=0;do{if(Yr&&(jr=null),uo=0,Yr=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Fx,f=n(a,o)}while(Yr);return f}function Nx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?fo(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ge.flags|=1024),n}function Xu(){var e=Rl!==0;return Rl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}ya=0,cn=Ie=ge=null,Yr=!1,uo=Rl=0,jr=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ge.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Ie===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=cn===null?ge.memoizedState:cn.next;if(n!==null)cn=n,Ie=e;else{if(e===null)throw ge.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?ge.memoizedState=cn=e:cn=cn.next=e}return cn}function Yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var n=uo;return uo+=1,jr===null&&(jr=[]),e=Wp(jr,e,n),n=ge,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Nm:Om),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===N)return Un(e)}throw Error(r(438,String(e)))}function ju(e){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yu(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Zi(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=un();return Zu(n,Ie,e)}function Zu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=M=null,P=null,$=n,ht=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(be&vt)===vt:(ya&vt)===vt){var at=$.revertLane;if(at===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Xr&&(ht=!0);else if((ya&at)===at){$=$.next,at===Xr&&(ht=!0);continue}else vt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=vt,M=f):P=P.next=vt,ge.lanes|=at,Ra|=at;vt=$.action,cr&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else at={lane:vt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=at,M=f):P=P.next=at,ge.lanes|=vt,Ra|=vt;$=$.next}while($!==null&&$!==n);if(P===null?M=f:P.next=T,!jn(f,e.memoizedState)&&(Sn=!0,ht&&(a=Wr,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=P,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ku(e){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);jn(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function $p(e,n,a){var o=ge,u=un(),f=Ue;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!jn((Ie||u).memoizedState,a);M&&(u.memoizedState=a,Sn=!0),u=u.queue;var T=nm.bind(null,o,u,e);if(ho(2048,8,T,[e]),u.getSnapshot!==n||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Zr(9,Dl(),em.bind(null,o,u,a,n),null),Ye===null)throw Error(r(349));f||(ya&124)!==0||tm(o,n,a)}return a}function tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=Yu(),ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function em(e,n,a,o){n.value=a,n.getSnapshot=o,im(n)&&am(e)}function nm(e,n,a){return a(function(){im(n)&&am(e)})}function im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function am(e){var n=Hr(e,2);n!==null&&ti(n,e,2)}function Qu(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),cr){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},n}function rm(e,n,a,o){return e.baseState=a,Zu(e,Ie,typeof o=="function"?o:Zi)}function Ox(e,n,a,o,u){if(Ll(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,M={};O.T=M;try{var T=a(u,o),P=O.S;P!==null&&P(M,T),om(e,n,T)}catch($){Ju(e,n,$)}finally{O.T=f}}else try{f=a(u,o),om(e,n,f)}catch($){Ju(e,n,$)}}function om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){lm(e,n,o)},function(o){return Ju(e,n,o)}):lm(e,n,a)}function lm(e,n,a){n.status="fulfilled",n.value=a,cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,sm(e,a)))}function Ju(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==o)}e.action=null}function cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function um(e,n){return n}function fm(e,n){if(Ue){var a=Ye.formState;if(a!==null){t:{var o=ge;if(Ue){if(an){e:{for(var u=an,f=Di;u.nodeType!==8;){if(!f){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){an=Si(u.nextSibling),o=u.data==="F!";break t}}rr(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=o,a=Dm.bind(null,ge,o),o.dispatch=a,o=Qu(!1),f=af.bind(null,ge,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ox.bind(null,ge,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dm(e){var n=un();return hm(n,Ie,e)}function hm(e,n,a){if(n=Zu(e,n,um)[0],e=Cl(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(M){throw M===ro?El:M}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Zr(9,Dl(),Px.bind(null,u,a),null)),[o,f,e]}function Px(e,n){e.action=n}function pm(e){var n=un(),a=Ie;if(a!==null)return hm(n,a,e);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Zr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ge.updateQueue,n===null&&(n=Yu(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Dl(){return{destroy:void 0,resource:void 0}}function mm(){return un().memoizedState}function Ul(e,n,a,o){var u=Xn();o=o===void 0?null:o,ge.flags|=e,u.memoizedState=Zr(1|n,Dl(),a,o)}function ho(e,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&Vu(o,Ie.memoizedState.deps)?u.memoizedState=Zr(n,f,a,o):(ge.flags|=e,u.memoizedState=Zr(1|n,f,a,o))}function gm(e,n){Ul(8390656,8,e,n)}function _m(e,n){ho(2048,8,e,n)}function vm(e,n){return ho(4,2,e,n)}function xm(e,n){return ho(4,4,e,n)}function ym(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sm(e,n,a){a=a!=null?a.concat([e]):null,ho(4,4,ym.bind(null,n,e),a)}function $u(){}function Mm(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Em(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=e(),cr){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o}function tf(e,n,a){return a===void 0||(ya&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Ag(),ge.lanes|=e,Ra|=e,a)}function bm(e,n,a,o){return jn(a,n)?a:qr.current!==null?(e=tf(e,a,o),jn(e,n)||(Sn=!0),e):(ya&42)===0?(Sn=!0,e.memoizedState=a):(e=Ag(),ge.lanes|=e,Ra|=e,n)}function Tm(e,n,a,o,u){var f=q.p;q.p=f!==0&&8>f?f:8;var M=O.T,T={};O.T=T,af(e,!1,n,a);try{var P=u(),$=O.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=Ux(P,o);po(e,n,ht,$n(e))}else po(e,n,o,$n(e))}catch(vt){po(e,n,{then:function(){},status:"rejected",reason:vt},$n())}finally{q.p=f,O.T=M}}function zx(){}function ef(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Am(e).queue;Tm(e,u,n,B,a===null?zx:function(){return Rm(e),a(o)})}function Am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rm(e){var n=Am(e).next.queue;po(e,n,{},$n())}function nf(){return Un(Lo)}function wm(){return un().memoizedState}function Cm(){return un().memoizedState}function Bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=va(a);var o=xa(n,e,a);o!==null&&(ti(o,n,a),oo(o,n,a)),n={cache:Lu()},e.payload=n;return}n=n.return}}function Ix(e,n,a){var o=$n();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Um(n,a):(a=Mu(e,n,a,o),a!==null&&(ti(a,e,o),Lm(a,n,o)))}function Dm(e,n,a){var o=$n();po(e,n,a,o)}function po(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Um(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,T=f(M,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,M))return ml(e,n,u,0),Ye===null&&pl(),!1}catch{}finally{}if(a=Mu(e,n,u,o),a!==null)return ti(a,e,o),Lm(a,n,o),!0}return!1}function af(e,n,a,o){if(o={lane:2,revertLane:zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(n)throw Error(r(479))}else n=Mu(e,a,o,2),n!==null&&ti(n,e,2)}function Ll(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function Um(e,n){Yr=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xt(e,a)}}var Nl={readContext:Un,use:wl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Nm={readContext:Un,use:wl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,ym.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var o=e();if(cr){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(cr){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ix.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=Dm.bind(null,ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=Xn();return tf(a,e,n)},useTransition:function(){var e=Qu(!1);return e=Tm.bind(null,ge,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ge,u=Xn();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(be&124)!==0||tm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gm(nm.bind(null,o,f,e),[e]),o.flags|=2048,Zr(9,Dl(),em.bind(null,o,f,a,n),null),a},useId:function(){var e=Xn(),n=Ye.identifierPrefix;if(Ue){var a=qi,o=Wi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Lx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:fm,useActionState:fm,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:ju,useCacheRefresh:function(){return Xn().memoizedState=Bx.bind(null,ge)}},Om={readContext:Un,use:wl,useCallback:Mm,useContext:Un,useEffect:_m,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Cl,useRef:mm,useState:function(){return Cl(Zi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=un();return bm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Cl(Zi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:$p,useId:wm,useHostTransitionStatus:nf,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=un();return rm(a,Ie,e,n)},useMemoCache:ju,useCacheRefresh:Cm},Fx={readContext:Un,use:wl,useCallback:Mm,useContext:Un,useEffect:_m,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Ku,useRef:mm,useState:function(){return Ku(Zi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=un();return Ie===null?tf(a,e,n):bm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ku(Zi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:$p,useId:wm,useHostTransitionStatus:nf,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=un();return Ie!==null?rm(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Cm},Kr=null,mo=0;function Ol(e){var n=mo;return mo+=1,Kr===null&&(Kr=[]),Wp(Kr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Pl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Pm(e){var n=e._init;return n(e._payload)}function zm(e){function n(j,X){if(e){var J=j.deletions;J===null?(j.deletions=[X],j.flags|=16):J.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Xi(j,X),j.index=0,j.sibling=null,j}function f(j,X,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<X?(j.flags|=67108866,X):J):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,X,J,mt){return X===null||X.tag!==6?(X=bu(J,j.mode,mt),X.return=j,X):(X=u(X,J),X.return=j,X)}function P(j,X,J,mt){var Ht=J.type;return Ht===E?ht(j,X,J.props.children,mt,J.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&Pm(Ht)===X.type)?(X=u(X,J.props),go(X,J),X.return=j,X):(X=_l(J.type,J.key,J.props,null,j.mode,mt),go(X,J),X.return=j,X)}function $(j,X,J,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Tu(J,j.mode,mt),X.return=j,X):(X=u(X,J.children||[]),X.return=j,X)}function ht(j,X,J,mt,Ht){return X===null||X.tag!==7?(X=er(J,j.mode,mt,Ht),X.return=j,X):(X=u(X,J),X.return=j,X)}function vt(j,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=bu(""+X,j.mode,J),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return J=_l(X.type,X.key,X.props,null,j.mode,J),go(J,X),J.return=j,J;case y:return X=Tu(X,j.mode,J),X.return=j,X;case H:var mt=X._init;return X=mt(X._payload),vt(j,X,J)}if(lt(X)||tt(X))return X=er(X,j.mode,J,null),X.return=j,X;if(typeof X.then=="function")return vt(j,Ol(X),J);if(X.$$typeof===N)return vt(j,Sl(j,X),J);Pl(j,X)}return null}function at(j,X,J,mt){var Ht=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(j,X,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return J.key===Ht?P(j,X,J,mt):null;case y:return J.key===Ht?$(j,X,J,mt):null;case H:return Ht=J._init,J=Ht(J._payload),at(j,X,J,mt)}if(lt(J)||tt(J))return Ht!==null?null:ht(j,X,J,mt,null);if(typeof J.then=="function")return at(j,X,Ol(J),mt);if(J.$$typeof===N)return at(j,X,Sl(j,J),mt);Pl(j,J)}return null}function rt(j,X,J,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(J)||null,T(X,j,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return j=j.get(mt.key===null?J:mt.key)||null,P(X,j,mt,Ht);case y:return j=j.get(mt.key===null?J:mt.key)||null,$(X,j,mt,Ht);case H:var ve=mt._init;return mt=ve(mt._payload),rt(j,X,J,mt,Ht)}if(lt(mt)||tt(mt))return j=j.get(J)||null,ht(X,j,mt,Ht,null);if(typeof mt.then=="function")return rt(j,X,J,Ol(mt),Ht);if(mt.$$typeof===N)return rt(j,X,J,Sl(X,mt),Ht);Pl(X,mt)}return null}function ae(j,X,J,mt){for(var Ht=null,ve=null,Zt=X,ie=X=0,En=null;Zt!==null&&ie<J.length;ie++){Zt.index>ie?(En=Zt,Zt=null):En=Zt.sibling;var Ce=at(j,Zt,J[ie],mt);if(Ce===null){Zt===null&&(Zt=En);break}e&&Zt&&Ce.alternate===null&&n(j,Zt),X=f(Ce,X,ie),ve===null?Ht=Ce:ve.sibling=Ce,ve=Ce,Zt=En}if(ie===J.length)return a(j,Zt),Ue&&ir(j,ie),Ht;if(Zt===null){for(;ie<J.length;ie++)Zt=vt(j,J[ie],mt),Zt!==null&&(X=f(Zt,X,ie),ve===null?Ht=Zt:ve.sibling=Zt,ve=Zt);return Ue&&ir(j,ie),Ht}for(Zt=o(Zt);ie<J.length;ie++)En=rt(Zt,j,ie,J[ie],mt),En!==null&&(e&&En.alternate!==null&&Zt.delete(En.key===null?ie:En.key),X=f(En,X,ie),ve===null?Ht=En:ve.sibling=En,ve=En);return e&&Zt.forEach(function(za){return n(j,za)}),Ue&&ir(j,ie),Ht}function ee(j,X,J,mt){if(J==null)throw Error(r(151));for(var Ht=null,ve=null,Zt=X,ie=X=0,En=null,Ce=J.next();Zt!==null&&!Ce.done;ie++,Ce=J.next()){Zt.index>ie?(En=Zt,Zt=null):En=Zt.sibling;var za=at(j,Zt,Ce.value,mt);if(za===null){Zt===null&&(Zt=En);break}e&&Zt&&za.alternate===null&&n(j,Zt),X=f(za,X,ie),ve===null?Ht=za:ve.sibling=za,ve=za,Zt=En}if(Ce.done)return a(j,Zt),Ue&&ir(j,ie),Ht;if(Zt===null){for(;!Ce.done;ie++,Ce=J.next())Ce=vt(j,Ce.value,mt),Ce!==null&&(X=f(Ce,X,ie),ve===null?Ht=Ce:ve.sibling=Ce,ve=Ce);return Ue&&ir(j,ie),Ht}for(Zt=o(Zt);!Ce.done;ie++,Ce=J.next())Ce=rt(Zt,j,ie,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Zt.delete(Ce.key===null?ie:Ce.key),X=f(Ce,X,ie),ve===null?Ht=Ce:ve.sibling=Ce,ve=Ce);return e&&Zt.forEach(function(Hy){return n(j,Hy)}),Ue&&ir(j,ie),Ht}function He(j,X,J,mt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case x:t:{for(var Ht=J.key;X!==null;){if(X.key===Ht){if(Ht=J.type,Ht===E){if(X.tag===7){a(j,X.sibling),mt=u(X,J.props.children),mt.return=j,j=mt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===H&&Pm(Ht)===X.type){a(j,X.sibling),mt=u(X,J.props),go(mt,J),mt.return=j,j=mt;break t}a(j,X);break}else n(j,X);X=X.sibling}J.type===E?(mt=er(J.props.children,j.mode,mt,J.key),mt.return=j,j=mt):(mt=_l(J.type,J.key,J.props,null,j.mode,mt),go(mt,J),mt.return=j,j=mt)}return M(j);case y:t:{for(Ht=J.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(j,X.sibling),mt=u(X,J.children||[]),mt.return=j,j=mt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}mt=Tu(J,j.mode,mt),mt.return=j,j=mt}return M(j);case H:return Ht=J._init,J=Ht(J._payload),He(j,X,J,mt)}if(lt(J))return ae(j,X,J,mt);if(tt(J)){if(Ht=tt(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),ee(j,X,J,mt)}if(typeof J.then=="function")return He(j,X,Ol(J),mt);if(J.$$typeof===N)return He(j,X,Sl(j,J),mt);Pl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(j,X.sibling),mt=u(X,J),mt.return=j,j=mt):(a(j,X),mt=bu(J,j.mode,mt),mt.return=j,j=mt),M(j)):a(j,X)}return function(j,X,J,mt){try{mo=0;var Ht=He(j,X,J,mt);return Kr=null,Ht}catch(Zt){if(Zt===ro||Zt===El)throw Zt;var ve=Zn(29,Zt,null,j.mode);return ve.lanes=mt,ve.return=j,ve}finally{}}}var Qr=zm(!0),Bm=zm(!1),ui=Q(null),Ui=null;function Sa(e){var n=e.alternate;gt(mn,mn.current&1),gt(ui,e),Ui===null&&(n===null||qr.current!==null||n.memoizedState!==null)&&(Ui=e)}function Im(e){if(e.tag===22){if(gt(mn,mn.current),gt(ui,e),Ui===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ui=e)}}else Ma()}function Ma(){gt(mn,mn.current),gt(ui,ui.current)}function Ki(e){_t(ui),Ui===e&&(Ui=null),_t(mn)}var mn=Q(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(ti(n,e,o),oo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(ti(n,e,o),oo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(ti(n,e,a),oo(n,e,a))}};function Fm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(u,f):!0}function Hm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&sf.enqueueReplaceState(n,n.state,null)}function ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gm(e){Bl(e)}function Vm(e){console.error(e)}function km(e){Bl(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Xm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function Wm(e){return e=va(e),e.tag=3,e}function qm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Xm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Xm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Hx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&no(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 13:return Ui===null?Uf():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(e,o,u)),!1;case 22:return a.flags|=65536,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(e,o,u)),!1}throw Error(r(435,a.tag))}return Nf(e,o,u),Uf(),!1}if(Ue)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==wu&&(e=Error(r(422),{cause:o}),eo(si(e,a)))):(o!==wu&&(n=Error(r(423),{cause:o}),eo(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=of(e.stateNode,o,u),Iu(e,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:o});if(f=si(f,a),Eo===null?Eo=[f]:Eo.push(f),rn!==4&&(rn=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=of(a.stateNode,o,e),Iu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Wm(u),qm(u,e,a,o),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var Ym=Error(r(461)),Sn=!1;function An(e,n,a,o){n.child=e===null?Bm(n,null,a,o):Qr(n,e.child,a,o)}function jm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return or(n),o=ku(e,n,a,M,f,u),T=Xu(),e!==null&&!Sn?(Wu(e,n,u),Qi(e,n,u)):(Ue&&T&&Au(n),n.flags|=1,An(e,n,o,u),n.child)}function Zm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Km(e,n,f,o,u)):(e=_l(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!mf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(M,o)&&e.ref===n.ref)return Qi(e,n,u)}return n.flags|=1,e=Xi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Km(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Qs(f,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=f,mf(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,Qi(e,n,u)}return lf(e,n,a,o,u)}function Qm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Jm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,f!==null?f.cachePool:null),f!==null?Kp(n,f):Hu(),Im(n);else return n.lanes=n.childLanes=536870912,Jm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Ml(n,f.cachePool),Kp(n,f),Ma(),n.memoizedState=null):(e!==null&&Ml(n,null),Hu(),Ma());return An(e,n,u,a),n.child}function Jm(e,n,a,o){var u=Ou();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ml(n,null),Hu(),Im(n),e!==null&&no(e,n,o,!0),null}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lf(e,n,a,o,u){return or(n),a=ku(e,n,a,o,void 0,u),o=Xu(),e!==null&&!Sn?(Wu(e,n,u),Qi(e,n,u)):(Ue&&o&&Au(n),n.flags|=1,An(e,n,a,u),n.child)}function $m(e,n,a,o,u,f){return or(n),n.updateQueue=null,a=Jp(n,o,a,u),Qp(e),o=Xu(),e!==null&&!Sn?(Wu(e,n,f),Qi(e,n,f)):(Ue&&o&&Au(n),n.flags|=1,An(e,n,a,f),n.child)}function tg(e,n,a,o,u){if(or(n),n.stateNode===null){var f=Gr,M=a.contextType;typeof M=="object"&&M!==null&&(f=Un(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},zu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Un(M):Gr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(rf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&sf.enqueueReplaceState(f,f.state,null),co(n,o,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=ur(a,T);f.props=P;var $=f.context,ht=a.contextType;M=Gr,typeof ht=="object"&&ht!==null&&(M=Un(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==M)&&Hm(n,f,o,M),_a=!1;var at=n.memoizedState;f.state=at,co(n,o,f,u),lo(),$=n.memoizedState,T||at!==$||_a?(typeof vt=="function"&&(rf(n,a,vt,o),$=n.memoizedState),(P=_a||Fm(n,a,P,o,at,$,M))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=M,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Bu(e,n),M=n.memoizedProps,ht=ur(a,M),f.props=ht,vt=n.pendingProps,at=f.context,$=a.contextType,P=Gr,typeof $=="object"&&$!==null&&(P=Un($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==vt||at!==P)&&Hm(n,f,o,P),_a=!1,at=n.memoizedState,f.state=at,co(n,o,f,u),lo();var rt=n.memoizedState;M!==vt||at!==rt||_a||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof T=="function"&&(rf(n,a,T,o),rt=n.memoizedState),(ht=_a||Fm(n,a,ht,o,at,rt,P)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=P,o=ht):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Fl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Qr(n,e.child,null,u),n.child=Qr(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Qi(e,n,u),e}function eg(e,n,a,o){return to(),n.flags|=256,An(e,n,a,o),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:Vp()}}function ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function ng(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(u?Sa(n):Ma(),Ue){var T=an,P;if(P=T){t:{for(P=T,T=Di;P.nodeType!==8;){if(!T){T=null;break t}if(P=Si(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:nr!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},P=Zn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,In=n,an=null,P=!0):P=!1}P||rr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return jf(T)?n.lanes=32:n.lanes=536870912,null;Ki(n)}return T=o.children,o=o.fallback,u?(Ma(),u=n.mode,T=Hl({mode:"hidden",children:T},u),o=er(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=uf(a),u.childLanes=ff(e,M,a),n.memoizedState=cf,o):(Sa(n),df(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=hf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),u=o.fallback,T=n.mode,o=Hl({mode:"visible",children:o.children},T),u=er(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Qr(n,e.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=ff(e,M,a),n.memoizedState=cf,n=u);else if(Sa(n),jf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var $=M.dgst;M=$,o=Error(r(419)),o.stack="",o.digest=M,eo({value:o,source:null,stack:null}),n=hf(e,n,a)}else if(Sn||no(e,n,a,!1),M=(a&e.childLanes)!==0,Sn||M){if(M=Ye,M!==null&&(o=a&-a,o=(o&42)!==0?1:re(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Hr(e,o),ti(M,e,o),Ym;T.data==="$?"||Uf(),n=hf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,an=Si(T.nextSibling),In=n,Ue=!0,ar=null,Di=!1,e!==null&&(li[ci++]=Wi,li[ci++]=qi,li[ci++]=nr,Wi=e.id,qi=e.overflow,nr=n),n=df(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,T=n.mode,P=e.child,$=P.sibling,o=Xi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?u=Xi($,u):(u=er(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=uf(a):(P=T.cachePool,P!==null?($=pn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Vp(),T={baseLanes:T.baseLanes|a,cachePool:P}),u.memoizedState=T,u.childLanes=ff(e,M,a),n.memoizedState=cf,o):(Sa(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function df(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function hf(e,n,a){return Qr(n,e.child,null,a),e=df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ig(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Du(e.return,n,a)}function pf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function ag(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(An(e,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ig(e,a,n);else if(e.tag===19)ig(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(gt(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}pf(n,!0,a,null,f);break;case"together":pf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(no(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Gx(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),ga(n,pn,e.memoizedState.cache),to();break;case 27:case 5:te(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ng(e,n,a):(Sa(n),e=Qi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(no(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ag(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,Qm(e,n,a);case 24:ga(n,pn,e.memoizedState.cache)}return Qi(e,n,a)}function rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!mf(e,a)&&(n.flags&128)===0)return Sn=!1,Gx(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,Ue&&(n.flags&1048576)!==0&&Pp(n,xl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Eu(o)?(e=ur(o,e),n.tag=1,n=tg(null,n,o,e,a)):(n.tag=0,n=lf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=jm(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=Zm(null,n,o,e,a);break t}}throw n=ct(o)||o,Error(r(306,n,""))}}return n;case 0:return lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ur(o,n.pendingProps),tg(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(e,n),co(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ga(n,pn,o),o!==f.cache&&Uu(n,[pn],a,!0),lo(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=eg(e,n,o,a);break t}else if(o!==u){u=si(Error(r(424)),n),eo(u),n=eg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(an=Si(e.firstChild),In=n,Ue=!0,ar=null,Di=!0,a=Bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(to(),o===u){n=Qi(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=c_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,e=n.pendingProps,o=tc(dt.current).createElement(a),o[hn]=n,o[en]=e,wn(o,a,e),ln(o),n.stateNode=o):n.memoizedState=c_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&Ue&&(o=n.stateNode=s_(n.type,n.pendingProps,dt.current),In=n,Di=!0,u=an,Ua(n.type)?(Zf=u,an=Si(o.firstChild)):an=u),An(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((u=o=an)&&(o=my(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,In=n,an=Si(o.firstChild),Di=!1,u=!0):u=!1),u||rr(n)),te(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Wf(u,f)?o=null:M!==null&&Wf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(e,n,Nx,null,null,a),Lo._currentValue=u),Fl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ue&&((e=a=an)&&(a=gy(a,n.pendingProps,Di),a!==null?(n.stateNode=a,In=n,an=null,e=!0):e=!1),e||rr(n)),null;case 13:return ng(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Qr(n,null,o,a):An(e,n,o,a),n.child;case 11:return jm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,or(n),u=Un(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return Zm(e,n,n.type,n.pendingProps,a);case 15:return Km(e,n,n.type,n.pendingProps,a);case 19:return ag(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Hl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Xi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Qm(e,n,a);case 24:return or(n),o=Un(pn),e===null?(u=Ou(),u===null&&(u=Ye,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},zu(n),ga(n,pn,u)):((e.lanes&a)!==0&&(Bu(e,n),co(n,null,null,a),lo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,pn,o)):(o=f.cache,ga(n,pn,o),o!==u.cache&&Uu(n,[pn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(e){e.flags|=4}function sg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!p_(n)){if(n=ui.current,n!==null&&((be&4194048)===be?Ui!==null:(be&62914560)!==be&&(be&536870912)===0||n!==Ui))throw so=Pu,kp;e.flags|=8192}}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,es|=n)}function _o(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Vx(e,n,a){var o=n.pendingProps;switch(Ru(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(pn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ip())),tn(n),null;case 26:return a=n.memoizedState,e===null?(Ji(n),a!==null?(tn(n),sg(n,a)):(tn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ji(n),tn(n),sg(n,a)):(tn(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ji(n),tn(n),n.flags&=-16777217),null;case 27:Le(n),a=dt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}e=Mt.current,$s(n)?zp(n):(e=s_(u,o,a),n.stateNode=e,Ji(n))}return tn(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(e=Mt.current,$s(n))zp(n);else{switch(u=tc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[hn]=n,e[en]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(wn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ji(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,$s(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[hn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$g(e.nodeValue,a)),e||rr(n)}else e=tc(e).createTextNode(o),e[hn]=n,n.stateNode=e}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[hn]=n}else to(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ki(n),n):(Ki(n),null)}if(Ki(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),tn(n),null;case 4:return kt(),e===null&&Hf(n.stateNode.containerInfo),tn(n),null;case 10:return ji(n.type),tn(n),null;case 19:if(_t(mn),u=n.memoizedState,u===null)return tn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)_o(u,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=zl(e),f!==null){for(n.flags|=128,_o(u,!1),e=f.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Op(a,e),a=a.sibling;return gt(mn,mn.current&1|2),n.child}e=e.sibling}u.tail!==null&&It()>Xl&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304)}else{if(!o)if(e=zl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),_o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ue)return tn(n),null}else 2*It()-u.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=It(),n.sibling=null,e=mn.current,gt(mn,o?e&1|2:e&1),n):(tn(n),null);case 22:case 23:return Ki(n),Gu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&_t(lr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(pn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function kx(e,n){switch(Ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(pn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Ki(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));to()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _t(mn),null;case 4:return kt(),null;case 10:return ji(n.type),null;case 22:case 23:return Ki(n),Gu(),e!==null&&_t(lr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(pn),null;case 25:return null;default:return null}}function og(e,n){switch(Ru(n),n.tag){case 3:ji(pn),kt();break;case 26:case 27:case 5:Le(n);break;case 4:kt();break;case 13:Ki(n);break;case 19:_t(mn);break;case 10:ji(n.type);break;case 22:case 23:Ki(n),Gu(),e!==null&&_t(lr);break;case 24:ji(pn)}}function vo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){We(n,n.return,T)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var P=a,$=T;try{$()}catch(ht){We(u,P,ht)}}}o=o.next}while(o!==f)}}catch(ht){We(n,n.return,ht)}}function lg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Zp(n,a)}catch(o){We(e,e.return,o)}}}function cg(e,n,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){We(e,n,o)}}function xo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){We(e,n,u)}}function Li(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){We(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(e,n,u)}else a.current=null}function ug(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){We(e,e.return,u)}}function gf(e,n,a){try{var o=e.stateNode;uy(o,e.type,a,n),o[en]=n}catch(u){We(e,e.return,u)}}function fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$l));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(vf(e,n,a),e=e.sibling;e!==null;)vf(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[hn]=e,n[en]=a}catch(f){We(e,e.return,f)}}var $i=!1,on=!1,xf=!1,hg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Xx(e,n){if(e=e.containerInfo,kf=sc,e=bp(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,T=-1,P=-1,$=0,ht=0,vt=e,at=null;e:for(;;){for(var rt;vt!==a||u!==0&&vt.nodeType!==3||(T=M+u),vt!==f||o!==0&&vt.nodeType!==3||(P=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(rt=vt.firstChild)!==null;)at=vt,vt=rt;for(;;){if(vt===e)break e;if(at===a&&++$===u&&(T=M),at===f&&++ht===o&&(P=M),(rt=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=rt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:e,selectionRange:a},sc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ae=ur(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ae,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){We(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function pg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),o&4&&vo(5,a);break;case 1:if(ba(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){We(a,a.return,M)}else{var u=ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){We(a,a.return,M)}}o&64&&lg(a),o&512&&xo(a,a.return);break;case 3:if(ba(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zp(e,n)}catch(M){We(a,a.return,M)}}break;case 27:n===null&&o&4&&dg(a);case 26:case 5:ba(e,a),n===null&&o&4&&ug(a),o&512&&xo(a,a.return);break;case 12:ba(e,a);break;case 13:ba(e,a),o&4&&_g(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$x.bind(null,a),_y(e,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||on,u=$i;var f=on;$i=o,(on=n)&&!f?Ta(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),$i=u,on=f}break;case 30:break;default:ba(e,a)}}function mg(e){var n=e.alternate;n!==null&&(e.alternate=null,mg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Lr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Wn=!1;function ta(e,n,a){for(a=a.child;a!==null;)gg(e,n,a),a=a.sibling}function gg(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:on||Li(a,n),ta(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Li(a,n);var o=Ke,u=Wn;Ua(a.type)&&(Ke=a.stateNode,Wn=!1),ta(e,n,a),wo(a.stateNode),Ke=o,Wn=u;break;case 5:on||Li(a,n);case 6:if(o=Ke,u=Wn,Ke=null,ta(e,n,a),Ke=o,Wn=u,Ke!==null)if(Wn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){We(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){We(a,n,f)}break;case 18:Ke!==null&&(Wn?(e=Ke,a_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zo(e)):a_(Ke,a.stateNode));break;case 4:o=Ke,u=Wn,Ke=a.stateNode.containerInfo,Wn=!0,ta(e,n,a),Ke=o,Wn=u;break;case 0:case 11:case 14:case 15:on||Ea(2,a,n),on||Ea(4,a,n),ta(e,n,a);break;case 1:on||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&cg(a,n,o)),ta(e,n,a);break;case 21:ta(e,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,ta(e,n,a),on=o;break;default:ta(e,n,a)}}function _g(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zo(e)}catch(a){We(n,n.return,a)}}function Wx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new hg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new hg),n;default:throw Error(r(435,e.tag))}}function yf(e,n){var a=Wx(e);n.forEach(function(o){var u=ty.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Ua(T.type)){Ke=T.stateNode,Wn=!1;break t}break;case 5:Ke=T.stateNode,Wn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,Wn=!0;break t}T=T.return}if(Ke===null)throw Error(r(160));gg(f,M,u),Ke=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)vg(n,e),n=n.sibling}var yi=null;function vg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Qn(e),o&4&&(Ea(3,e,e.return),vo(3,e),Ea(5,e,e.return));break;case 1:Kn(n,e),Qn(e),o&512&&(on||a===null||Li(a,a.return)),o&64&&$i&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=yi;if(Kn(n,e),Qn(e),o&512&&(on||a===null||Li(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ci]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[hn]=e,ln(f),o=f;break t;case"link":var M=d_("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(f=M[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=d_("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(f=M[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[hn]=e,ln(f),o=f}e.stateNode=o}else h_(u,e.type,e.stateNode);else e.stateNode=f_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?h_(u,e.type,e.stateNode):f_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Qn(e),o&512&&(on||a===null||Li(a,a.return)),a!==null&&o&4&&gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Qn(e),o&512&&(on||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(rt){We(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,gf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(Kn(n,e),Qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){We(e,e.return,rt)}}break;case 3:if(ic=null,u=yi,yi=ec(n.containerInfo),Kn(n,e),yi=u,Qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(n.containerInfo)}catch(rt){We(e,e.return,rt)}xf&&(xf=!1,xg(e));break;case 4:o=yi,yi=ec(e.stateNode.containerInfo),Kn(n,e),Qn(e),yi=o;break;case 12:Kn(n,e),Qn(e);break;case 13:Kn(n,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Af=It()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yf(e,o)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=$i,ht=on;if($i=$||u,on=ht||P,Kn(n,e),on=ht,$i=$,Qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||$i||on||fr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=P.stateNode;var vt=P.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(rt){We(P,P.return,rt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(rt){We(P,P.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,yf(e,a))));break;case 19:Kn(n,e),Qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yf(e,o)));break;case 30:break;case 21:break;default:Kn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(fg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(e);Vl(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Vn(M,""),a.flags&=-33);var T=_f(e);Vl(e,T,M);break;case 3:case 4:var P=a.stateNode.containerInfo,$=_f(e);vf(e,$,P);break;default:throw Error(r(161))}}catch(ht){We(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ba(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pg(e,n.alternate,n),n=n.sibling}function fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cg(n,n.return,a),fr(n);break;case 27:wo(n.stateNode);case 26:case 5:Li(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}e=e.sibling}}function Ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(u,f,a),vo(4,f);break;case 1:if(Ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){We(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)jp(P[u],T)}catch($){We(o,o.return,$)}}a&&M&64&&lg(f),xo(f,f.return);break;case 27:dg(f);case 26:case 5:Ta(u,f,a),a&&o===null&&M&4&&ug(f),xo(f,f.return);break;case 12:Ta(u,f,a);break;case 13:Ta(u,f,a),a&&M&4&&_g(u,f);break;case 22:f.memoizedState===null&&Ta(u,f,a),xo(f,f.return);break;case 30:break;default:Ta(u,f,a)}n=n.sibling}}function Sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&io(a))}function Mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yg(e,n,a,o),n=n.sibling}function yg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&vo(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,T=f.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){We(n,n.return,P)}}else Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(e,n,a,o):yo(e,n):f._visibility&2?Ni(e,n,a,o):(f._visibility|=2,Jr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Sf(M,n);break;case 24:Ni(e,n,a,o),u&2048&&Mf(n.alternate,n);break;default:Ni(e,n,a,o)}}function Jr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,T=a,P=o,$=M.flags;switch(M.tag){case 0:case 11:case 15:Jr(f,M,T,P,u),vo(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?Jr(f,M,T,P,u):yo(f,M):(ht._visibility|=2,Jr(f,M,T,P,u)),u&&$&2048&&Sf(M.alternate,M);break;case 24:Jr(f,M,T,P,u),u&&$&2048&&Mf(M.alternate,M);break;default:Jr(f,M,T,P,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&Sf(o.alternate,o);break;case 24:yo(a,o),u&2048&&Mf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var So=8192;function $r(e){if(e.subtreeFlags&So)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 26:$r(e),e.flags&So&&e.memoizedState!==null&&Dy(yi,e.memoizedState,e.memoizedProps);break;case 5:$r(e);break;case 3:case 4:var n=yi;yi=ec(e.stateNode.containerInfo),$r(e),yi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=So,So=16777216,$r(e),So=n):$r(e));break;default:$r(e)}}function Mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,bg(o,e)}Mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):Mo(e);break;default:Mo(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,bg(o,e)}Mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function bg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(mg(o),o===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var qx={getCacheForType:function(e){var n=Un(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Yx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,ye=null,be=0,ze=0,Jn=null,Aa=!1,ts=!1,Ef=!1,ea=0,rn=0,Ra=0,dr=0,bf=0,fi=0,es=0,Eo=null,qn=null,Tf=!1,Af=0,Xl=1/0,Wl=null,wa=null,Rn=0,Ca=null,ns=null,is=0,Rf=0,wf=null,Tg=null,bo=0,Cf=null;function $n(){if((Pe&2)!==0&&be!==0)return be&-be;if(O.T!==null){var e=Xr;return e!==0?e:zf()}return Re()}function Ag(){fi===0&&(fi=(be&536870912)===0||Ue?W():536870912);var e=ui.current;return e!==null&&(e.flags|=32),fi}function ti(e,n,a){(e===Ye&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(as(e,0),Da(e,be,fi,!1)),zt(e,a),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(dr|=a),rn===4&&Da(e,be,fi,!1)),Oi(e))}function Rg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?Kx(e,n):Lf(e,n,!0),f=o;do{if(u===0){ts&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!jx(a)){u=Lf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;u=Eo;var P=T.current.memoizedState.isDehydrated;if(P&&(as(T,M).flags|=256),M=Lf(T,M,!1),M!==2){if(Ef&&!P){T.errorRecoveryDisabledLanes|=f,dr|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){as(e,0),Da(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,fi,!Aa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Af+300-It(),10<u)){if(Da(o,n,fi,!Aa),Wt(o,0,!0)!==0)break t;o.timeoutHandle=n_(wg.bind(null,o,a,qn,Wl,Tf,n,fi,dr,es,Aa,f,2,-0,0),u);break t}wg(o,a,qn,Wl,Tf,n,fi,dr,es,Aa,f,0,-0,0)}}break}while(!0);Oi(e)}function wg(e,n,a,o,u,f,M,T,P,$,ht,vt,at,rt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Uo={stylesheets:null,count:0,unsuspend:Cy},Sg(n),vt=Uy(),vt!==null)){e.cancelPendingCommit=vt(Pg.bind(null,e,n,f,a,o,u,M,T,P,ht,1,at,rt)),Da(e,f,M,!$);return}Pg(e,n,f,a,o,u,M,T,P)}function jx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~bf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&xt(e,a,n)}function ql(){return(Pe&6)===0?(To(0),!1):!0}function Df(){if(ye!==null){if(ze===0)var e=ye.return;else e=ye,Yi=sr=null,qu(e),Kr=null,mo=0,e=ye;for(;e!==null;)og(e.alternate,e),e=e.return;ye=null}}function as(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Df(),Ye=e,ye=a=Xi(e.current,null),be=n,ze=0,Jn=null,Aa=!1,ts=Ct(e,n),Ef=!1,es=fi=bf=dr=Ra=rn=0,qn=Eo=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return ea=n,pl(),a}function Cg(e,n){ge=null,O.H=Nl,n===ro||n===El?(n=qp(),ze=3):n===kp?(n=qp(),ze=4):ze=n===Ym?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ye===null&&(rn=1,Il(e,si(n,e.current)))}function Dg(){var e=O.H;return O.H=Nl,e===null?Nl:e}function Ug(){var e=O.A;return O.A=qx,e}function Uf(){rn=4,Aa||(be&4194048)!==be&&ui.current!==null||(ts=!0),(Ra&134217727)===0&&(dr&134217727)===0||Ye===null||Da(Ye,be,fi,!1)}function Lf(e,n,a){var o=Pe;Pe|=2;var u=Dg(),f=Ug();(Ye!==e||be!==n)&&(Wl=null,as(e,n)),n=!1;var M=rn;t:do try{if(ze!==0&&ye!==null){var T=ye,P=Jn;switch(ze){case 8:Df(),M=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var $=ze;if(ze=0,Jn=null,rs(e,T,P,$),a&&ts){M=0;break t}break;default:$=ze,ze=0,Jn=null,rs(e,T,P,$)}}Zx(),M=rn;break}catch(ht){Cg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Yi=sr=null,Pe=o,O.H=u,O.A=f,ye===null&&(Ye=null,be=0,pl()),M}function Zx(){for(;ye!==null;)Lg(ye)}function Kx(e,n){var a=Pe;Pe|=2;var o=Dg(),u=Ug();Ye!==e||be!==n?(Wl=null,Xl=It()+500,as(e,n)):ts=Ct(e,n);t:do try{if(ze!==0&&ye!==null){n=ye;var f=Jn;e:switch(ze){case 1:ze=0,Jn=null,rs(e,n,f,1);break;case 2:case 9:if(Xp(f)){ze=0,Jn=null,Ng(n);break}n=function(){ze!==2&&ze!==9||Ye!==e||(ze=7),Oi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Xp(f)?(ze=0,Jn=null,Ng(n)):(ze=0,Jn=null,rs(e,n,f,7));break;case 5:var M=null;switch(ye.tag){case 26:M=ye.memoizedState;case 5:case 27:var T=ye;if(!M||p_(M)){ze=0,Jn=null;var P=T.sibling;if(P!==null)ye=P;else{var $=T.return;$!==null?(ye=$,Yl($)):ye=null}break e}}ze=0,Jn=null,rs(e,n,f,5);break;case 6:ze=0,Jn=null,rs(e,n,f,6);break;case 8:Df(),rn=6;break t;default:throw Error(r(462))}}Qx();break}catch(ht){Cg(e,ht)}while(!0);return Yi=sr=null,O.H=o,O.A=u,Pe=a,ye!==null?0:(Ye=null,be=0,pl(),rn)}function Qx(){for(;ye!==null&&!Jt();)Lg(ye)}function Lg(e){var n=rg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Yl(e):ye=n}function Ng(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=$m(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=$m(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:qu(n);default:og(a,n),n=ye=Op(n,ea),n=rg(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Yl(e):ye=n}function rs(e,n,a,o){Yi=sr=null,qu(n),Kr=null,mo=0;var u=n.return;try{if(Hx(e,u,n,a,be)){rn=1,Il(e,si(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;rn=1,Il(e,si(a,e.current)),ye=null;return}n.flags&32768?(Ue||o===1?e=!0:ts||(be&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){Og(n,Aa);return}e=n.return;var a=Vx(n.alternate,n,ea);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);rn===0&&(rn=5)}function Og(e,n){do{var a=kx(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);rn=6,ye=null}function Pg(e,n,a,o,u,f,M,T,P){e.cancelPendingCommit=null;do jl();while(Rn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Su,bt(e,a,f,M,T,P),e===Ye&&(ye=Ye=null,be=0),ns=n,Ca=e,is=a,Rf=f,wf=u,Tg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ey(Je,function(){return Hg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=q.p,q.p=2,M=Pe,Pe|=4;try{Xx(e,n,a)}finally{Pe=M,q.p=u,O.T=o}}Rn=1,zg(),Bg(),Ig()}}function zg(){if(Rn===1){Rn=0;var e=Ca,n=ns,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=q.p;q.p=2;var u=Pe;Pe|=4;try{vg(n,e);var f=Xf,M=bp(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(M!==T&&T&&T.ownerDocument&&Ep(T.ownerDocument.documentElement,T)){if(P!==null&&gu(T)){var $=P.start,ht=P.end;if(ht===void 0&&(ht=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ht,T.value.length);else{var vt=T.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var rt=at.getSelection(),ae=T.textContent.length,ee=Math.min(P.start,ae),He=P.end===void 0?ee:Math.min(P.end,ae);!rt.extend&&ee>He&&(M=He,He=ee,ee=M);var j=Mp(T,ee),X=Mp(T,He);if(j&&X&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var J=vt.createRange();J.setStart(j.node,j.offset),rt.removeAllRanges(),ee>He?(rt.addRange(J),rt.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),rt.addRange(J))}}}}for(vt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&vt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var mt=vt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}sc=!!kf,Xf=kf=null}finally{Pe=u,q.p=o,O.T=a}}e.current=n,Rn=2}}function Bg(){if(Rn===2){Rn=0;var e=Ca,n=ns,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=q.p;q.p=2;var u=Pe;Pe|=4;try{pg(e,n.alternate,n)}finally{Pe=u,q.p=o,O.T=a}}Rn=3}}function Ig(){if(Rn===4||Rn===3){Rn=0,Ae();var e=Ca,n=ns,a=is,o=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,ns=Ca=null,Fg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),Oe(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=q.p,q.p=2,O.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];f(T.value,{componentStack:T.stack})}}finally{O.T=n,q.p=u}}(is&3)!==0&&jl(),Oi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Cf?bo++:(bo=0,Cf=e):bo=0,To(0)}}function Fg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,io(n)))}function jl(e){return zg(),Bg(),Ig(),Hg()}function Hg(){if(Rn!==5)return!1;var e=Ca,n=Rf;Rf=0;var a=Oe(is),o=O.T,u=q.p;try{q.p=32>a?32:a,O.T=null,a=wf,wf=null;var f=Ca,M=is;if(Rn=0,ns=Ca=null,is=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,Eg(f.current),yg(f,f.current,M,a),Pe=T,To(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{q.p=u,O.T=o,Fg(e,n)}}function Gg(e,n,a){n=si(a,n),n=of(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(zt(e,2),Oi(e))}function We(e,n,a){if(e.tag===3)Gg(e,e,a);else for(;n!==null;){if(n.tag===3){Gg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=si(a,e),a=Wm(2),o=xa(n,a,2),o!==null&&(qm(a,o,n,e),zt(o,2),Oi(o));break}}n=n.return}}function Nf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Yx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ef=!0,u.add(a),e=Jx.bind(null,e,n,a),n.then(e,e))}function Jx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(be&a)===a&&(rn===4||rn===3&&(be&62914560)===be&&300>It()-Af?(Pe&2)===0&&as(e,0):bf|=a,es===be&&(es=0)),Oi(e)}function Vg(e,n){n===0&&(n=At()),e=Hr(e,n),e!==null&&(zt(e,n),Oi(e))}function $x(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Vg(e,a)}function ty(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Vg(e,a)}function ey(e,n){return G(e,n)}var Zl=null,ss=null,Of=!1,Kl=!1,Pf=!1,hr=0;function Oi(e){e!==ss&&e.next===null&&(ss===null?Zl=ss=e:ss=ss.next=e),Kl=!0,Of||(Of=!0,iy())}function To(e,n){if(!Pf&&Kl){Pf=!0;do for(var a=!1,o=Zl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(M&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,qg(o,f))}else f=be,f=Wt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,qg(o,f));o=o.next}while(a);Pf=!1}}function ny(){kg()}function kg(){Kl=Of=!1;var e=0;hr!==0&&(fy()&&(e=hr),hr=0);for(var n=It(),a=null,o=Zl;o!==null;){var u=o.next,f=Xg(o,n);f===0?(o.next=null,a===null?Zl=u:a.next=u,u===null&&(ss=a)):(a=o,(e!==0||(f&3)!==0)&&(Kl=!0)),o=u}To(e)}function Xg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Pt(f),T=1<<M,P=u[M];P===-1?((T&a)===0||(T&o)!==0)&&(u[M]=oe(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ye,a=be,a=Wt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),Oe(a)){case 2:case 8:a=ce;break;case 32:a=Je;break;case 268435456:a=L;break;default:a=Je}return o=Wg.bind(null,e),a=G(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function Wg(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var o=be;return o=Wt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Rg(e,o,n),Xg(e,It()),e.callbackNode!=null&&e.callbackNode===a?Wg.bind(null,e):null)}function qg(e,n){if(jl())return null;Rg(e,n,!0)}function iy(){hy(function(){(Pe&6)!==0?G(Ft,ny):kg()})}function zf(){return hr===0&&(hr=W()),hr}function Yg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function jg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ay(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Yg((u[en]||null).action),M=o.submitter;M&&(n=(n=M[en]||null)?Yg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var T=new fl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var P=M?jg(u,M):new FormData(u);ef(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=M?jg(u,M):new FormData(u),ef(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var Bf=0;Bf<yu.length;Bf++){var If=yu[Bf],ry=If.toLowerCase(),sy=If[0].toUpperCase()+If.slice(1);xi(ry,"on"+sy)}xi(Rp,"onAnimationEnd"),xi(wp,"onAnimationIteration"),xi(Cp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Ex,"onTransitionRun"),xi(bx,"onTransitionStart"),xi(Tx,"onTransitionCancel"),xi(Dp,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function Zg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ht){Bl(ht)}u.currentTarget=null,f=P}else for(M=0;M<o.length;M++){if(T=o[M],P=T.instance,$=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ht){Bl(ht)}u.currentTarget=null,f=P}}}}function Se(e,n){var a=n[Dr];a===void 0&&(a=n[Dr]=new Set);var o=e+"__bubble";a.has(o)||(Kg(n,e,2,!1),a.add(o))}function Ff(e,n,a){var o=0;n&&(o|=4),Kg(a,e,o,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[Ql]){e[Ql]=!0,rl.forEach(function(a){a!=="selectionchange"&&(oy.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Ff("selectionchange",!1,n))}}function Kg(e,n,a,o){switch(y_(n)){case 2:var u=Oy;break;case 8:u=Py;break;default:u=td}a=u.bind(null,n,a,e),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=Vi(T),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=f=M;continue t}T=T.parentNode}}o=o.return}ip(function(){var $=f,ht=ru(a),vt=[];t:{var at=Up.get(e);if(at!==void 0){var rt=fl,ae=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":rt=ex;break;case"focusin":ae="focus",rt=fu;break;case"focusout":ae="blur",rt=fu;break;case"beforeblur":case"afterblur":rt=fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=ax;break;case Rp:case wp:case Cp:rt=qv;break;case Dp:rt=sx;break;case"scroll":case"scrollend":rt=Gv;break;case"wheel":rt=lx;break;case"copy":case"cut":case"paste":rt=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=lp;break;case"toggle":case"beforetoggle":rt=ux}var ee=(n&4)!==0,He=!ee&&(e==="scroll"||e==="scrollend"),j=ee?at!==null?at+"Capture":null:at;ee=[];for(var X=$,J;X!==null;){var mt=X;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||j===null||(mt=Xs(X,j),mt!=null&&ee.push(Ro(X,mt,J))),He)break;X=X.return}0<ee.length&&(at=new rt(at,ae,null,a,ht),vt.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",at&&a!==au&&(ae=a.relatedTarget||a.fromElement)&&(Vi(ae)||ae[wi]))break t;if((rt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,rt?(ae=a.relatedTarget||a.toElement,rt=$,ae=ae?Vi(ae):null,ae!==null&&(He=c(ae),ee=ae.tag,ae!==He||ee!==5&&ee!==27&&ee!==6)&&(ae=null)):(rt=null,ae=$),rt!==ae)){if(ee=sp,mt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=lp,mt="onPointerLeave",j="onPointerEnter",X="pointer"),He=rt==null?at:Qa(rt),J=ae==null?at:Qa(ae),at=new ee(mt,X+"leave",rt,a,ht),at.target=He,at.relatedTarget=J,mt=null,Vi(ht)===$&&(ee=new ee(j,X+"enter",ae,a,ht),ee.target=J,ee.relatedTarget=He,mt=ee),He=mt,rt&&ae)e:{for(ee=rt,j=ae,X=0,J=ee;J;J=os(J))X++;for(J=0,mt=j;mt;mt=os(mt))J++;for(;0<X-J;)ee=os(ee),X--;for(;0<J-X;)j=os(j),J--;for(;X--;){if(ee===j||j!==null&&ee===j.alternate)break e;ee=os(ee),j=os(j)}ee=null}else ee=null;rt!==null&&Qg(vt,at,rt,ee,!1),ae!==null&&He!==null&&Qg(vt,He,ae,ee,!0)}}t:{if(at=$?Qa($):window,rt=at.nodeName&&at.nodeName.toLowerCase(),rt==="select"||rt==="input"&&at.type==="file")var Ht=gp;else if(pp(at))if(_p)Ht=yx;else{Ht=vx;var ve=_x}else rt=at.nodeName,!rt||rt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&iu($.elementType)&&(Ht=gp):Ht=xx;if(Ht&&(Ht=Ht(e,$))){mp(vt,Ht,a,ht);break t}ve&&ve(e,at,$),e==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Dn(at,"number",at.value)}switch(ve=$?Qa($):window,e){case"focusin":(pp(ve)||ve.contentEditable==="true")&&(Br=ve,_u=$,Js=null);break;case"focusout":Js=_u=Br=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Tp(vt,a,ht);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":Tp(vt,a,ht)}var Zt;if(hu)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else zr?dp(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(cp&&a.locale!=="ko"&&(zr||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&zr&&(Zt=ap()):(ma=ht,lu="value"in ma?ma.value:ma.textContent,zr=!0)),ve=Jl($,ie),0<ve.length&&(ie=new op(ie,e,null,a,ht),vt.push({event:ie,listeners:ve}),Zt?ie.data=Zt:(Zt=hp(a),Zt!==null&&(ie.data=Zt)))),(Zt=dx?hx(e,a):px(e,a))&&(ie=Jl($,"onBeforeInput"),0<ie.length&&(ve=new op("onBeforeInput","beforeinput",null,a,ht),vt.push({event:ve,listeners:ie}),ve.data=Zt)),ay(vt,e,$,a,ht)}Zg(vt,n)})}function Ro(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xs(e,a),u!=null&&o.unshift(Ro(e,u,f)),u=Xs(e,n),u!=null&&o.push(Ro(e,u,f))),e.tag===3)return o;e=e.return}return[]}function os(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qg(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var T=a,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||$===null||(P=$,u?($=Xs(a,f),$!=null&&M.unshift(Ro(a,$,P))):u||($=Xs(a,f),$!=null&&M.push(Ro(a,$,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function Jg(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(cy,"")}function $g(e,n){return n=Jg(n),Jg(e)===n}function $l(){}function Fe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":Bt(e,"class",o);break;case"tabIndex":Bt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(e,a,o);break;case"style":ep(e,o,f);break;case"data":if(n!=="object"){Bt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",u.name,u,null),Fe(e,n,"formEncType",u.formEncType,u,null),Fe(e,n,"formMethod",u.formMethod,u,null),Fe(e,n,"formTarget",u.formTarget,u,null)):(Fe(e,n,"encType",u.encType,u,null),Fe(e,n,"method",u.method,u,null),Fe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$l);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fv.get(a)||a,Ut(e,a,o))}}function Vf(e,n,a,o,u,f){switch(a){case"style":ep(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[en]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,f,M,a,null)}}u&&Fe(e,n,"srcSet",a.srcSet,a,null),o&&Fe(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var T=f=M=u=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":M=ht;break;case"checked":P=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Fe(e,n,o,ht,a,null)}}Bn(e,f,T,P,$,M,u,!1),xe(e);return;case"select":Se("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Fe(e,n,u,T,a,null)}n=f,a=M,e.multiple=!!o,n!=null?nn(e,!!o,n,!1):a!=null&&nn(e,!!o,a,!0);return;case"textarea":Se("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Fe(e,n,M,T,a,null)}Nr(e,o,u,f),xe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,n,P,o,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Ao.length;o++)Se(Ao[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(e,n,$,o,a,null)}return;default:if(iu(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Vf(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Fe(e,n,T,o,a,null))}function uy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,T=null,P=null,$=null,ht=null;for(rt in a){var vt=a[rt];if(a.hasOwnProperty(rt)&&vt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(rt)||Fe(e,n,rt,null,o,vt)}}for(var at in o){var rt=o[at];if(vt=a[at],o.hasOwnProperty(at)&&(rt!=null||vt!=null))switch(at){case"type":f=rt;break;case"name":u=rt;break;case"checked":$=rt;break;case"defaultChecked":ht=rt;break;case"value":M=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==vt&&Fe(e,n,at,rt,o,vt)}}Xe(e,M,T,P,$,ht,f,u);return;case"select":rt=M=T=at=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:o.hasOwnProperty(f)||Fe(e,n,f,null,o,P)}for(u in o)if(f=o[u],P=a[u],o.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":at=f;break;case"defaultValue":T=f;break;case"multiple":M=f;default:f!==P&&Fe(e,n,u,f,o,P)}n=T,a=M,o=rt,at!=null?nn(e,!!a,at,!1):!!o!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":rt=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(e,n,T,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":at=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Fe(e,n,M,u,o,f)}Tn(e,at,rt);return;case"option":for(var ae in a)if(at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Fe(e,n,ae,null,o,at)}for(P in o)if(at=o[P],rt=a[P],o.hasOwnProperty(P)&&at!==rt&&(at!=null||rt!=null))switch(P){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(e,n,P,at,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!o.hasOwnProperty(ee)&&Fe(e,n,ee,null,o,at);for($ in o)if(at=o[$],rt=a[$],o.hasOwnProperty($)&&at!==rt&&(at!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Fe(e,n,$,at,o,rt)}return;default:if(iu(n)){for(var He in a)at=a[He],a.hasOwnProperty(He)&&at!==void 0&&!o.hasOwnProperty(He)&&Vf(e,n,He,void 0,o,at);for(ht in o)at=o[ht],rt=a[ht],!o.hasOwnProperty(ht)||at===rt||at===void 0&&rt===void 0||Vf(e,n,ht,at,o,rt);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&Fe(e,n,j,null,o,at);for(vt in o)at=o[vt],rt=a[vt],!o.hasOwnProperty(vt)||at===rt||at==null&&rt==null||Fe(e,n,vt,at,o,rt)}var kf=null,Xf=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function t_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function fy(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,hy=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(e){return i_.resolve(null).then(e).catch(py)}:n_;function py(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function a_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&wo(M.documentElement),a&2&&wo(M.body),a&4)for(a=M.head,wo(a),M=a.firstChild;M;){var T=M.nextSibling,P=M.nodeName;M[Ci]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){e.removeChild(f),zo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);zo(n)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function my(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function gy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function _y(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Zf=null;function r_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function s_(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Lr(e)}var di=new Map,o_=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=q.d;q.d={f:vy,r:xy,D:yy,C:Sy,L:My,m:Ey,X:Ty,S:by,M:Ay};function vy(){var e=na.f(),n=ql();return e||n}function xy(e){var n=ha(e);n!==null&&n.tag===5&&n.type==="form"?Rm(n):na.r(e)}var ls=typeof document>"u"?null:document;function l_(e,n,a){var o=ls;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),o_.has(u)||(o_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),ln(n),o.head.appendChild(n)))}}function yy(e){na.D(e),l_("dns-prefetch",e,null)}function Sy(e,n){na.C(e,n),l_("preconnect",e,n)}function My(e,n,a){na.L(e,n,a);var o=ls;if(o&&e&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yn(a.imageSizes)+'"]')):u+='[href="'+yn(e)+'"]';var f=u;switch(n){case"style":f=cs(e);break;case"script":f=us(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),wn(n,"link",e),ln(n),o.head.appendChild(n)))}}function Ey(e,n){na.m(e,n);var a=ls;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}o=a.createElement("link"),wn(o,"link",e),ln(o),a.head.appendChild(o)}}}function by(e,n,a){na.S(e,n,a);var o=ls;if(o&&e){var u=pa(o).hoistableStyles,f=cs(e);n=n||"default";var M=u.get(f);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(Co(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Kf(e,a);var P=M=o.createElement("link");ln(P),wn(P,"link",e),P._p=new Promise(function($,ht){P.onload=$,P.onerror=ht}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,nc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(f,M)}}}function Ty(e,n){na.X(e,n);var a=ls;if(a&&e){var o=pa(a).hoistableScripts,u=us(e),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(e=g({src:e,async:!0},n),(n=di.get(u))&&Qf(e,n),f=a.createElement("script"),ln(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ay(e,n){na.M(e,n);var a=ls;if(a&&e){var o=pa(a).hoistableScripts,u=us(e),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&Qf(e,n),f=a.createElement("script"),ln(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function c_(e,n,a,o){var u=(u=dt.current)?ec(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=pa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cs(a.href);var f=pa(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Co(e)))&&!f._p&&(M.instance=f,M.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||Ry(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=pa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function cs(e){return'href="'+yn(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function u_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ry(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),ln(n),e.head.appendChild(n))}function us(e){return'[src="'+yn(e)+'"]'}function Do(e){return"script[async]"+e}function f_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,ln(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ln(o),wn(o,"style",u),nc(o,a.precedence,e),n.instance=o;case"stylesheet":u=cs(a.href);var f=e.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,ln(f),f;o=u_(a),(u=di.get(u))&&Kf(o,u),f=(e.ownerDocument||e).createElement("link"),ln(f);var M=f;return M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),wn(f,"link",o),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=us(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,ln(u),u):(o=a,(u=di.get(f))&&(o=g({},a),Qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ln(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,e));return n.instance}function nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function d_(e,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ci]||f[hn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(f):o.set(M,[f])}}return o}function h_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function wy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function p_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Uo=null;function Cy(){}function Dy(e,n,a){if(Uo===null)throw Error(r(475));var o=Uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=cs(a.href),f=e.querySelector(Co(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ac.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,ln(f);return}f=e.ownerDocument||e,a=u_(a),(u=di.get(u))&&Kf(a,u),f=f.createElement("link"),ln(f);var M=f;M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),wn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ac.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Uy(){if(Uo===null)throw Error(r(475));var e=Uo;return e.stylesheets&&e.count===0&&Jf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Jf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ac(){if(this.count--,this.count===0){if(this.stylesheets)Jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function Jf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(Ly,e),rc=null,ac.call(e))}function Ly(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var o=a.get(null);else{a=new Map,rc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:N,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Ny(e,n,a,o,u,f,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function m_(e,n,a,o,u,f,M,T,P,$,ht,vt){return e=new Ny(e,n,a,M,T,P,$,vt),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Lu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},zu(f),e}function g_(e){return e?(e=Gr,e):Gr}function __(e,n,a,o,u,f){u=g_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(e,o,n),a!==null&&(ti(a,e,n),oo(a,e,n))}function v_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $f(e,n){v_(e,n),(e=e.alternate)&&v_(e,n)}function x_(e){if(e.tag===13){var n=Hr(e,67108864);n!==null&&ti(n,e,67108864),$f(e,67108864)}}var sc=!0;function Oy(e,n,a,o){var u=O.T;O.T=null;var f=q.p;try{q.p=2,td(e,n,a,o)}finally{q.p=f,O.T=u}}function Py(e,n,a,o){var u=O.T;O.T=null;var f=q.p;try{q.p=8,td(e,n,a,o)}finally{q.p=f,O.T=u}}function td(e,n,a,o){if(sc){var u=ed(o);if(u===null)Gf(e,n,o,oc,a),S_(e,o);else if(By(u,e,n,a,o))o.stopPropagation();else if(S_(e,o),n&4&&-1<zy.indexOf(e)){for(;u!==null;){var f=ha(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Kt(f.pendingLanes);if(M!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var P=1<<31-Pt(M);T.entanglements[1]|=P,M&=~P}Oi(f),(Pe&6)===0&&(Xl=It()+500,To(0))}}break;case 13:T=Hr(f,2),T!==null&&ti(T,f,2),ql(),$f(f,2)}if(f=ed(o),f===null&&Gf(e,n,o,oc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Gf(e,n,o,null,a)}}function ed(e){return e=ru(e),nd(e)}var oc=null;function nd(e){if(oc=null,e=Vi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case Ft:return 2;case ce:return 8;case Je:case $e:return 32;case L:return 268435456;default:return 32}default:return 32}}var id=!1,La=null,Na=null,Oa=null,No=new Map,Oo=new Map,Pa=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ha(n),n!==null&&x_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function By(e,n,a,o,u){switch(n){case"focusin":return La=Po(La,e,n,a,o,u),!0;case"dragenter":return Na=Po(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Po(Oa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Po(No.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,e,n,a,o,u)),!0}return!1}function M_(e){var n=Vi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,_i(e.priority,function(){if(a.tag===13){var o=$n();o=re(o);var u=Hr(a,o);u!==null&&ti(u,a,o),$f(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ed(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);au=o,a.target.dispatchEvent(o),au=null}else return n=ha(a),n!==null&&x_(n),e.blockedOn=a,!1;n.shift()}return!0}function E_(e,n,a){lc(e)&&a.delete(n)}function Iy(){id=!1,La!==null&&lc(La)&&(La=null),Na!==null&&lc(Na)&&(Na=null),Oa!==null&&lc(Oa)&&(Oa=null),No.forEach(E_),Oo.forEach(E_)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,id||(id=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Iy)))}var uc=null;function b_(e){uc!==e&&(uc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(nd(o||a)===null)continue;break}var f=ha(a);f!==null&&(e.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zo(e){function n(P){return cc(P,e)}La!==null&&cc(La,e),Na!==null&&cc(Na,e),Oa!==null&&cc(Oa,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)M_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[en]||null;if(typeof f=="function")M||b_(a);else if(M){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[en]||null)T=M.formAction;else if(nd(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),b_(a)}}}function ad(e){this._internalRoot=e}fc.prototype.render=ad.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();__(a,o,e,n,null,null)},fc.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;__(e.current,2,null,e,null,null),ql(),n[wi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Re();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&M_(e)}};var T_=t.version;if(T_!=="19.1.0")throw Error(r(527,T_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Fy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ft=dc.inject(Fy),St=dc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Gm,f=Vm,M=km,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=m_(e,1,!1,null,null,a,o,u,f,M,T,null),e[wi]=n.current,Hf(e),new ad(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Gm,M=Vm,T=km,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=m_(e,1,!0,n,a??null,o,u,f,M,T,P,$),n.context=g_(null),a=n.current,o=$n(),o=re(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,zt(n,a),Oi(n),e[wi]=n.current,Hf(e),new fc(n)},Io.version="19.1.0",Io}var P_;function Zy(){if(P_)return od.exports;P_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),od.exports=jy(),od.exports}var Ky=Zy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hh="179",Qy=0,z_=1,Jy=2,W0=1,$y=2,ua=3,Za=0,Yn=1,zi=2,qa=0,Us=1,B_=2,I_=3,F_=4,tS=5,Er=100,eS=101,nS=102,iS=103,aS=104,rS=200,sS=201,oS=202,lS=203,Yd=204,jd=205,cS=206,uS=207,fS=208,dS=209,hS=210,pS=211,mS=212,gS=213,_S=214,Zd=0,Kd=1,Qd=2,Os=3,Jd=4,$d=5,th=6,eh=7,Gh=0,vS=1,xS=2,Ya=0,yS=1,SS=2,MS=3,q0=4,ES=5,bS=6,TS=7,Y0=300,Ps=301,zs=302,nh=303,ih=304,Jc=306,ah=1e3,Tr=1001,rh=1002,Ri=1003,AS=1004,hc=1005,Ii=1006,fd=1007,Ar=1008,Hi=1009,j0=1010,Z0=1011,Zo=1012,Vh=1013,Rr=1014,fa=1015,$o=1016,kh=1017,Xh=1018,Ko=1020,K0=35902,Q0=1021,J0=1022,Ai=1023,Qo=1026,Jo=1027,$0=1028,Wh=1029,tv=1030,qh=1031,Yh=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,sh=35840,oh=35841,lh=35842,ch=35843,uh=36196,fh=37492,dh=37496,hh=37808,ph=37809,mh=37810,gh=37811,_h=37812,vh=37813,xh=37814,yh=37815,Sh=37816,Mh=37817,Eh=37818,bh=37819,Th=37820,Ah=37821,qc=36492,Rh=36494,wh=36495,ev=36283,Ch=36284,Dh=36285,Uh=36286,RS=3200,wS=3201,nv=0,CS=1,Wa="",pi="srgb",Bs="srgb-linear",jc="linear",Ge="srgb",fs=7680,H_=519,DS=512,US=513,LS=514,iv=515,NS=516,OS=517,PS=518,zS=519,Lh=35044,G_="300 es",Fi=2e3,Zc=2001;class Fs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Nh=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Ee(s,t,i){return Math.max(t,Math.min(i,s))}function BS(s,t){return(s%t+t)%t}function hd(s,t,i){return(1-i)*s+i*t}function Bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class me{constructor(t=0,i=0){me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[d+0],y=c[d+1],E=c[d+2],A=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(v!==A||m!==x||p!==y||g!==E){let S=1-h;const _=m*x+p*y+g*E+v*A,F=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const z=Math.sqrt(N),V=Math.atan2(z,_*F);S=Math.sin(S*V)/z,h=Math.sin(h*V)/z}const w=h*F;if(m=m*S+x*w,p=p*S+y*w,g=g*S+E*w,v=v*S+A*w,S===1-h){const z=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=z,p*=z,g*=z,v*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[d],x=c[d+1],y=c[d+2],E=c[d+3];return t[i]=h*E+g*v+m*y-p*x,t[i+1]=m*E+g*x+p*v-h*y,t[i+2]=p*E+g*y+h*x-m*v,t[i+3]=g*E-h*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(c/2),x=m(r/2),y=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"YZX":this._x=x*g*v+p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v-x*y*E;break;case"XZY":this._x=x*g*v-p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-r*p,this._z=c*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(V_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-c*l),v=2*(c*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-c*v,this.z=l+m*v+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return pd.copy(this).projectOnVector(t),this.sub(pd)}reflect(t){return this.sub(pd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new K,V_=new tl;class fe{constructor(t,i,r,l,c,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],E=r[8],A=l[0],S=l[3],_=l[6],F=l[1],N=l[4],w=l[7],z=l[2],V=l[5],k=l[8];return c[0]=d*A+h*F+m*z,c[3]=d*S+h*N+m*V,c[6]=d*_+h*w+m*k,c[1]=p*A+g*F+v*z,c[4]=p*S+g*N+v*V,c[7]=p*_+g*w+v*k,c[2]=x*A+y*F+E*z,c[5]=x*S+y*N+E*V,c[8]=x*_+y*w+E*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*c*g+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*d-h*p,x=h*m-g*c,y=p*c-d*m,E=i*v+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*p-g*r)*A,t[2]=(h*r-l*d)*A,t[3]=x*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=y*A,t[7]=(r*m-p*i)*A,t[8]=(d*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(md.makeScale(t,i)),this}rotate(t){return this.premultiply(md.makeRotation(-t)),this}translate(t,i){return this.premultiply(md.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const md=new fe;function av(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function IS(){const s=Kc("canvas");return s.style.display="block",s}const k_={};function Ls(s){s in k_||(k_[s]=!0,console.warn(s))}function FS(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const X_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HS(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ge&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?jc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bs]:{primaries:t,whitePoint:r,transfer:jc,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const De=HS();function da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ds;class GS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ds===void 0&&(ds=Kc("canvas")),ds.width=t.width,ds.height=t.height;const l=ds.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Kc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=da(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(da(i[r]/255)*255):i[r]=da(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VS=0;class jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=ja(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(gd(l[d].image)):c.push(gd(l[d]))}else c=gd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?GS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;const _d=new K;class Gn extends Fs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=Tr,l=Tr,c=Ii,d=Ar,h=Ai,m=Hi,p=Gn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=ja(),this.name="",this.source=new jh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Y0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ah:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ah:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Y0;Gn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,r=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(y+1)/2,z=(_+1)/2,V=(g+x)/4,k=(v+A)/4,H=(E+S)/4;return N>w&&N>z?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=V/r,c=k/r):w>z?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=V/l,c=H/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=k/c,l=H/c),this.set(r,l,c,i),this}let F=Math.sqrt((S-E)*(S-E)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(S-E)/F,this.y=(v-A)/F,this.z=(x-g)/F,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends Fs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Gn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new jh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends XS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class rv extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WS extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Mi):Mi.fromBufferAttribute(c,d),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),mc.subVectors(this.max,Fo),hs.subVectors(t.a,Fo),ps.subVectors(t.b,Fo),ms.subVectors(t.c,Fo),Ba.subVectors(ps,hs),Ia.subVectors(ms,ps),pr.subVectors(hs,ms);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-pr.z,pr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,pr.z,0,-pr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-pr.y,pr.x,0];return!vd(i,hs,ps,ms,mc)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,hs,ps,ms,mc))?!1:(gc.crossVectors(Ba,Ia),i=[gc.x,gc.y,gc.z],vd(i,hs,ps,ms,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new K,new K,new K,new K,new K,new K,new K,new K],Mi=new K,pc=new el,hs=new K,ps=new K,ms=new K,Ba=new K,Ia=new K,pr=new K,Fo=new K,mc=new K,gc=new K,mr=new K;function vd(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){mr.fromArray(s,c);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=t.dot(mr),p=i.dot(mr),g=r.dot(mr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const qS=new el,Ho=new K,xd=new K;class $c{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):qS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(xd)),this.expandByPoint(Ho.copy(t.center).sub(xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new K,yd=new K,_c=new K,Fa=new K,Sd=new K,vc=new K,Md=new K;class sv{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){yd.copy(t).add(i).multiplyScalar(.5),_c.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(yd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(_c),h=Fa.dot(this.direction),m=-Fa.dot(_c),p=Fa.lengthSq(),g=Math.abs(1-d*d);let v,x,y,E;if(g>0)if(v=d*m-h,x=d*h-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const A=1/g;v*=A,x*=A,y=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=c,v=Math.max(0,-(d*x+h)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(d*x+h)),y=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-d*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(d*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=d>0?-c:c,v=Math.max(0,-(d*x+h)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(yd).addScaledVector(_c,x),y}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,r,l,c){Sd.subVectors(i,t),vc.subVectors(r,t),Md.crossVectors(Sd,vc);let d=this.direction.dot(Md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Fa.subVectors(this.origin,t);const m=h*this.direction.dot(vc.crossVectors(Fa,vc));if(m<0)return null;const p=h*this.direction.dot(Sd.cross(Fa));if(p<0||m+p>d)return null;const g=-h*Fa.dot(Md);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,c,d,h,m,p,g,v,x,y,E,A,S){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,g,v,x,y,E,A,S)}set(t,i,r,l,c,d,h,m,p,g,v,x,y,E,A,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/gs.setFromMatrixColumn(t,0).length(),c=1/gs.setFromMatrixColumn(t,1).length(),d=1/gs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=d*g,y=d*v,E=h*g,A=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=x-A*p,i[9]=-h*m,i[2]=A-x*p,i[6]=E+y*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,y=m*v,E=p*g,A=p*v;i[0]=x+A*h,i[4]=E*h-y,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=y*h-E,i[6]=A+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,y=m*v,E=p*g,A=p*v;i[0]=x-A*h,i[4]=-d*v,i[8]=E+y*h,i[1]=y+E*h,i[5]=d*g,i[9]=A-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,y=d*v,E=h*g,A=h*v;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,y=d*p,E=h*m,A=h*p;i[0]=m*g,i[4]=A-x*v,i[8]=E*v+y,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*v+E,i[10]=x-A*v}else if(t.order==="XZY"){const x=d*m,y=d*p,E=h*m,A=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+A,i[5]=d*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=h*g,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(YS,t,jS)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ha.crossVectors(r,ei),Ha.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ha.crossVectors(r,ei)),Ha.normalize(),xc.crossVectors(ei,Ha),l[0]=Ha.x,l[4]=xc.x,l[8]=ei.x,l[1]=Ha.y,l[5]=xc.y,l[9]=ei.y,l[2]=Ha.z,l[6]=xc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],E=r[2],A=r[6],S=r[10],_=r[14],F=r[3],N=r[7],w=r[11],z=r[15],V=l[0],k=l[4],H=l[8],C=l[12],D=l[1],I=l[5],tt=l[9],it=l[13],ct=l[2],lt=l[6],O=l[10],q=l[14],B=l[3],yt=l[7],U=l[11],Q=l[15];return c[0]=d*V+h*D+m*ct+p*B,c[4]=d*k+h*I+m*lt+p*yt,c[8]=d*H+h*tt+m*O+p*U,c[12]=d*C+h*it+m*q+p*Q,c[1]=g*V+v*D+x*ct+y*B,c[5]=g*k+v*I+x*lt+y*yt,c[9]=g*H+v*tt+x*O+y*U,c[13]=g*C+v*it+x*q+y*Q,c[2]=E*V+A*D+S*ct+_*B,c[6]=E*k+A*I+S*lt+_*yt,c[10]=E*H+A*tt+S*O+_*U,c[14]=E*C+A*it+S*q+_*Q,c[3]=F*V+N*D+w*ct+z*B,c[7]=F*k+N*I+w*lt+z*yt,c[11]=F*H+N*tt+w*O+z*U,c[15]=F*C+N*it+w*q+z*Q,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],y=t[14],E=t[3],A=t[7],S=t[11],_=t[15];return E*(+c*m*v-l*p*v-c*h*x+r*p*x+l*h*y-r*m*y)+A*(+i*m*y-i*p*x+c*d*x-l*d*y+l*p*g-c*m*g)+S*(+i*p*v-i*h*y-c*d*v+r*d*y+c*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*d*v-r*d*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],y=t[11],E=t[12],A=t[13],S=t[14],_=t[15],F=v*S*p-A*x*p+A*m*y-h*S*y-v*m*_+h*x*_,N=E*x*p-g*S*p-E*m*y+d*S*y+g*m*_-d*x*_,w=g*A*p-E*v*p+E*h*y-d*A*y-g*h*_+d*v*_,z=E*v*m-g*A*m-E*h*x+d*A*x+g*h*S-d*v*S,V=i*F+r*N+l*w+c*z;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/V;return t[0]=F*k,t[1]=(A*x*c-v*S*c-A*l*y+r*S*y+v*l*_-r*x*_)*k,t[2]=(h*S*c-A*m*c+A*l*p-r*S*p-h*l*_+r*m*_)*k,t[3]=(v*m*c-h*x*c-v*l*p+r*x*p+h*l*y-r*m*y)*k,t[4]=N*k,t[5]=(g*S*c-E*x*c+E*l*y-i*S*y-g*l*_+i*x*_)*k,t[6]=(E*m*c-d*S*c-E*l*p+i*S*p+d*l*_-i*m*_)*k,t[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*y+i*m*y)*k,t[8]=w*k,t[9]=(E*v*c-g*A*c-E*r*y+i*A*y+g*r*_-i*v*_)*k,t[10]=(d*A*c-E*h*c+E*r*p-i*A*p-d*r*_+i*h*_)*k,t[11]=(g*h*c-d*v*c-g*r*p+i*v*p+d*r*y-i*h*y)*k,t[12]=z*k,t[13]=(g*A*l-E*v*l+E*r*x-i*A*x-g*r*S+i*v*S)*k,t[14]=(E*h*l-d*A*l-E*r*m+i*A*m+d*r*S-i*h*S)*k,t[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*x+i*h*x)*k,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,v=h+h,x=c*p,y=c*g,E=c*v,A=d*g,S=d*v,_=h*v,F=m*p,N=m*g,w=m*v,z=r.x,V=r.y,k=r.z;return l[0]=(1-(A+_))*z,l[1]=(y+w)*z,l[2]=(E-N)*z,l[3]=0,l[4]=(y-w)*V,l[5]=(1-(x+_))*V,l[6]=(S+F)*V,l[7]=0,l[8]=(E+N)*k,l[9]=(S-F)*k,l[10]=(1-(x+A))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=gs.set(l[0],l[1],l[2]).length();const d=gs.set(l[4],l[5],l[6]).length(),h=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,g=1/d,v=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Fi,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===Fi)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Zc)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Fi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===Fi)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===Zc)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const gs=new K,Ei=new Qe,YS=new K(0,0,0),jS=new K(1,1,1),Ha=new K,xc=new K,ei=new K,q_=new Qe,Y_=new tl;class Gi{constructor(t=0,i=0,r=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZS=0;const j_=new K,_s=new tl,ra=new Qe,yc=new K,Go=new K,KS=new K,QS=new tl,Z_=new K(1,0,0),K_=new K(0,1,0),Q_=new K(0,0,1),J_={type:"added"},JS={type:"removed"},vs={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Pn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const t=new K,i=new Gi,r=new tl,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new fe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Z_,t)}rotateY(t){return this.rotateOnAxis(K_,t)}rotateZ(t){return this.rotateOnAxis(Q_,t)}translateOnAxis(t,i){return j_.copy(t).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z_,t)}translateY(t){return this.translateOnAxis(K_,t)}translateZ(t){return this.translateOnAxis(Q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?yc.copy(t):yc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Go,yc,this.up):ra.lookAt(yc,Go,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(ra),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JS),Ed.child=t,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,KS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,QS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),v=d(t.shapes),x=d(t.skeletons),y=d(t.animations),E=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new K(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new K,sa=new K,bd=new K,oa=new K,xs=new K,ys=new K,$_=new K,Td=new K,Ad=new K,Rd=new K,wd=new ke,Cd=new ke,Dd=new ke;class mi{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){bi.subVectors(l,i),sa.subVectors(r,i),bd.subVectors(t,i);const d=bi.dot(bi),h=bi.dot(sa),m=bi.dot(bd),p=sa.dot(sa),g=sa.dot(bd),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-h*g)*x,E=(d*g-h*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(d,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return wd.setScalar(0),Cd.setScalar(0),Dd.setScalar(0),wd.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,r),Dd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(wd,c.x),d.addScaledVector(Cd,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(t,i,r,l){return bi.subVectors(r,i),sa.subVectors(t,i),bi.cross(sa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),bi.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;xs.subVectors(l,r),ys.subVectors(c,r),Td.subVectors(t,r);const m=xs.dot(Td),p=ys.dot(Td);if(m<=0&&p<=0)return i.copy(r);Ad.subVectors(t,l);const g=xs.dot(Ad),v=ys.dot(Ad);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(xs,d);Rd.subVectors(t,c);const y=xs.dot(Rd),E=ys.dot(Rd);if(E>=0&&y<=E)return i.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(ys,h);const S=g*E-y*v;if(S<=0&&v-g>=0&&y-E>=0)return $_.subVectors(c,l),h=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector($_,h);const _=1/(S+A+x);return d=A*_,h=x*_,i.copy(r).addScaledVector(xs,d).addScaledVector(ys,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ud(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Te{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=BS(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ud(d,c,t+1/3),this.g=Ud(d,c,t),this.b=Ud(d,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=lv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return De.workingToColorSpace(On.copy(this),t),Math.round(Ee(On.r*255,0,255))*65536+Math.round(Ee(On.g*255,0,255))*256+Math.round(Ee(On.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=pi){De.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(Sc);const r=hd(Ga.h,Sc.h,i),l=hd(Ga.s,Sc.s,i),c=hd(Ga.l,Sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Te;Te.NAMES=lv;let $S=0;class Cr extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Us,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=jd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==Za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yd&&(r.blendSrc=this.blendSrc),this.blendDst!==jd&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zh extends Cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new K,Mc=new me;let tM=0;class ai{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Lh,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lh&&(t.usage=this.usage),t}}class cv extends ai{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class uv extends ai{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ri extends ai{constructor(t,i,r){super(new Float32Array(t),i,r)}}let eM=0;const hi=new Qe,Ld=new Pn,Ss=new K,ni=new el,Vo=new el,bn=new K;class gi extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(av(t)?uv:cv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return Ld.lookAt(t),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ri(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ni.min,Vo.min),ni.expandByPoint(bn),bn.addVectors(ni.max,Vo.max),ni.expandByPoint(bn)):(ni.expandByPoint(Vo.min),ni.expandByPoint(Vo.max))}ni.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),m&&(Ss.fromBufferAttribute(t,p),bn.add(Ss)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let H=0;H<r.count;H++)h[H]=new K,m[H]=new K;const p=new K,g=new K,v=new K,x=new me,y=new me,E=new me,A=new K,S=new K;function _(H,C,D){p.fromBufferAttribute(r,H),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),x.fromBufferAttribute(c,H),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),g.sub(p),v.sub(p),y.sub(x),E.sub(x);const I=1/(y.x*E.y-E.x*y.y);isFinite(I)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(I),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(I),h[H].add(A),h[C].add(A),h[D].add(A),m[H].add(S),m[C].add(S),m[D].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let H=0,C=F.length;H<C;++H){const D=F[H],I=D.start,tt=D.count;for(let it=I,ct=I+tt;it<ct;it+=3)_(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const N=new K,w=new K,z=new K,V=new K;function k(H){z.fromBufferAttribute(l,H),V.copy(z);const C=h[H];N.copy(C),N.sub(z.multiplyScalar(z.dot(C))).normalize(),w.crossVectors(V,C);const I=w.dot(m[H])<0?-1:1;d.setXYZW(H,N.x,N.y,N.z,I)}for(let H=0,C=F.length;H<C;++H){const D=F[H],I=D.start,tt=D.count;for(let it=I,ct=I+tt;it<ct;it+=3)k(t.getX(it+0)),k(t.getX(it+1)),k(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new K,c=new K,d=new K,h=new K,m=new K,p=new K,g=new K,v=new K;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),A=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,S),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*g;for(let _=0;_<g;_++)x[E++]=p[y++]}return new ai(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new gi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=t(x,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t0=new Qe,gr=new sv,Ec=new $c,e0=new K,bc=new K,Tc=new K,Ac=new K,Nd=new K,Rc=new K,n0=new K,wc=new K;class _n extends Pn{constructor(t=new gi,i=new Zh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(Nd.fromBufferAttribute(v,t),d?Rc.addScaledVector(Nd,g):Rc.addScaledVector(Nd.sub(i),g))}i.add(Rc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(c),gr.copy(t.ray).recast(t.near),!(Ec.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ec,e0)===null||gr.origin.distanceToSquared(e0)>(t.far-t.near)**2))&&(t0.copy(c).invert(),gr.copy(t.ray).applyMatrix4(t0),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=d[S.materialIndex],F=Math.max(S.start,y.start),N=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=F,z=N;w<z;w+=3){const V=h.getX(w),k=h.getX(w+1),H=h.getX(w+2);l=Cc(this,_,t,r,p,g,v,V,k,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const F=h.getX(S),N=h.getX(S+1),w=h.getX(S+2);l=Cc(this,d,t,r,p,g,v,F,N,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=d[S.materialIndex],F=Math.max(S.start,y.start),N=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let w=F,z=N;w<z;w+=3){const V=w,k=w+1,H=w+2;l=Cc(this,_,t,r,p,g,v,V,k,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const F=S,N=S+1,w=S+2;l=Cc(this,d,t,r,p,g,v,F,N,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function nM(s,t,i,r,l,c,d,h){let m;if(t.side===Yn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===Za,h),m===null)return null;wc.copy(h),wc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(wc);return p<i.near||p>i.far?null:{distance:p,point:wc.clone(),object:s}}function Cc(s,t,i,r,l,c,d,h,m,p){s.getVertexPosition(h,bc),s.getVertexPosition(m,Tc),s.getVertexPosition(p,Ac);const g=nM(s,t,i,r,bc,Tc,Ac,n0);if(g){const v=new K;mi.getBarycoord(n0,bc,Tc,Ac,v),l&&(g.uv=mi.getInterpolatedAttribute(l,h,m,p,v,new me)),c&&(g.uv1=mi.getInterpolatedAttribute(c,h,m,p,v,new me)),d&&(g.normal=mi.getInterpolatedAttribute(d,h,m,p,v,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new K,materialIndex:0};mi.getNormal(bc,Tc,Ac,x.normal),g.face=x,g.barycoord=v}return g}class nl extends gi{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,t,d,c,0),E("z","y","x",1,-1,r,i,-t,d,c,1),E("x","z","y",1,1,t,r,i,l,d,2),E("x","z","y",1,-1,t,r,-i,l,d,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ri(p,3)),this.setAttribute("normal",new ri(g,3)),this.setAttribute("uv",new ri(v,2));function E(A,S,_,F,N,w,z,V,k,H,C){const D=w/k,I=z/H,tt=w/2,it=z/2,ct=V/2,lt=k+1,O=H+1;let q=0,B=0;const yt=new K;for(let U=0;U<O;U++){const Q=U*I-it;for(let _t=0;_t<lt;_t++){const gt=_t*D-tt;yt[A]=gt*F,yt[S]=Q*N,yt[_]=ct,p.push(yt.x,yt.y,yt.z),yt[A]=0,yt[S]=0,yt[_]=V>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(_t/k),v.push(1-U/H),q+=1}}for(let U=0;U<H;U++)for(let Q=0;Q<k;Q++){const _t=x+Q+lt*U,gt=x+Q+lt*(U+1),Mt=x+(Q+1)+lt*(U+1),et=x+(Q+1)+lt*U;m.push(_t,gt,et),m.push(gt,Mt,et),B+=6}h.addGroup(y,B,C),y+=B,x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)t[l]=r[l]}return t}function iM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function fv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const aM={clone:Is,merge:Hn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ka extends Cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=iM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class dv extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new K,i0=new me,a0=new me;class ii extends dv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Nh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,i0,a0),i.subVectors(a0,i0)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Es=1;class oM extends Pn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ms,Es,t,i);l.layers=this.layers,this.add(l);const c=new ii(Ms,Es,t,i);c.layers=this.layers,this.add(c);const d=new ii(Ms,Es,t,i);d.layers=this.layers,this.add(d);const h=new ii(Ms,Es,t,i);h.layers=this.layers,this.add(h);const m=new ii(Ms,Es,t,i);m.layers=this.layers,this.add(m);const p=new ii(Ms,Es,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class hv extends Gn{constructor(t=[],i=Ps,r,l,c,d,h,m,p,g){super(t,i,r,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lM extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new hv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),c=new Ka({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:qa});c.uniforms.tEquirect.value=i;const d=new _n(l,c),h=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Ii),new oM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Dc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cM={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(cM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Dc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class uM extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class fM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Lh,this.updateRanges=[],this.version=0,this.uuid=ja()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new K;class Qc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Bi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Bi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Bi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Bi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new ai(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pv extends Cr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bs;const ko=new K,Ts=new K,As=new K,Rs=new me,Xo=new me,mv=new Qe,Uc=new K,Wo=new K,Lc=new K,r0=new me,Pd=new me,s0=new me;class dM extends Pn{constructor(t=new pv){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new gi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new fM(i,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Qc(r,3,0,!1)),bs.setAttribute("uv",new Qc(r,2,3,!1))}this.geometry=bs,this.material=t,this.center=new me(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),mv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Nc(Uc.set(-.5,-.5,0),As,d,Ts,l,c),Nc(Wo.set(.5,-.5,0),As,d,Ts,l,c),Nc(Lc.set(.5,.5,0),As,d,Ts,l,c),r0.set(0,0),Pd.set(1,0),s0.set(1,1);let h=t.ray.intersectTriangle(Uc,Wo,Lc,!1,ko);if(h===null&&(Nc(Wo.set(-.5,.5,0),As,d,Ts,l,c),Pd.set(0,1),h=t.ray.intersectTriangle(Uc,Lc,Wo,!1,ko),h===null))return;const m=t.ray.origin.distanceTo(ko);m<t.near||m>t.far||i.push({distance:m,point:ko.clone(),uv:mi.getInterpolation(ko,Uc,Wo,Lc,r0,Pd,s0,new me),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nc(s,t,i,r,l,c){Rs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Xo.x=c*Rs.x-l*Rs.y,Xo.y=l*Rs.x+c*Rs.y):Xo.copy(Rs),s.copy(t),s.x+=Xo.x,s.y+=Xo.y,s.applyMatrix4(mv)}const zd=new K,hM=new K,pM=new fe;class Sr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=zd.subVectors(r,i).cross(hM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(zd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||pM.getNormalMatrix(t),l=this.coplanarPoint(zd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new $c,mM=new me(.5,.5),Oc=new K;class Kh{constructor(t=new Sr,i=new Sr,r=new Sr,l=new Sr,c=new Sr,d=new Sr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Fi,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],y=c[7],E=c[8],A=c[9],S=c[10],_=c[11],F=c[12],N=c[13],w=c[14],z=c[15];if(l[0].setComponents(p-d,y-g,_-E,z-F).normalize(),l[1].setComponents(p+d,y+g,_+E,z+F).normalize(),l[2].setComponents(p+h,y+v,_+A,z+N).normalize(),l[3].setComponents(p-h,y-v,_-A,z-N).normalize(),r)l[4].setComponents(m,x,S,w).normalize(),l[5].setComponents(p-m,y-x,_-S,z-w).normalize();else if(l[4].setComponents(p-m,y-x,_-S,z-w).normalize(),i===Fi)l[5].setComponents(p+m,y+x,_+S,z+w).normalize();else if(i===Zc)l[5].setComponents(m,x,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=mM.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gv extends Cr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const o0=new Qe,Oh=new sv,Pc=new $c,zc=new K;class gM extends Pn{constructor(t=new gi,i=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;o0.copy(l).invert(),Oh.copy(t.ray).applyMatrix4(o0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let E=x,A=y;E<A;E++){const S=p.getX(E);zc.fromBufferAttribute(v,S),l0(zc,S,m,l,t,i,this)}}else{const x=Math.max(0,d.start),y=Math.min(v.count,d.start+d.count);for(let E=x,A=y;E<A;E++)zc.fromBufferAttribute(v,E),l0(zc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function l0(s,t,i,r,l,c,d){const h=Oh.distanceSqToPoint(s);if(h<i){const m=new K;Oh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class _M extends Gn{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _v extends Gn{constructor(t,i,r=Rr,l,c,d,h=Ri,m=Ri,p,g=Qo,v=1){if(g!==Qo&&g!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tu extends gi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=i/m,y=[],E=[],A=[],S=[];for(let _=0;_<g;_++){const F=_*x-d;for(let N=0;N<p;N++){const w=N*v-c;E.push(w,-F,0),A.push(0,0,1),S.push(N/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<h;F++){const N=F+p*_,w=F+p*(_+1),z=F+1+p*(_+1),V=F+1+p*_;y.push(N,w,V),y.push(w,z,V)}this.setIndex(y),this.setAttribute("position",new ri(E,3)),this.setAttribute("normal",new ri(A,3)),this.setAttribute("uv",new ri(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qh extends gi{constructor(t=.5,i=1,r=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,y=new K,E=new me;for(let A=0;A<=l;A++){for(let S=0;S<=r;S++){const _=c+S/r*d;y.x=v*Math.cos(_),y.y=v*Math.sin(_),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,g.push(E.x,E.y)}v+=x}for(let A=0;A<l;A++){const S=A*(r+1);for(let _=0;_<r;_++){const F=_+S,N=F,w=F+r+1,z=F+r+2,V=F+1;h.push(N,w,V),h.push(w,z,V)}}this.setIndex(h),this.setAttribute("position",new ri(m,3)),this.setAttribute("normal",new ri(p,3)),this.setAttribute("uv",new ri(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ti extends gi{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const g=[],v=new K,x=new K,y=[],E=[],A=[],S=[];for(let _=0;_<=r;_++){const F=[],N=_/r;let w=0;_===0&&d===0?w=.5/i:_===r&&m===Math.PI&&(w=-.5/i);for(let z=0;z<=i;z++){const V=z/i;v.x=-t*Math.cos(l+V*c)*Math.sin(d+N*h),v.y=t*Math.cos(d+N*h),v.z=t*Math.sin(l+V*c)*Math.sin(d+N*h),E.push(v.x,v.y,v.z),x.copy(v).normalize(),A.push(x.x,x.y,x.z),S.push(V+w,1-N),F.push(p++)}g.push(F)}for(let _=0;_<r;_++)for(let F=0;F<i;F++){const N=g[_][F+1],w=g[_][F],z=g[_+1][F],V=g[_+1][F+1];(_!==0||d>0)&&y.push(N,w,V),(_!==r-1||m<Math.PI)&&y.push(w,z,V)}this.setIndex(y),this.setAttribute("position",new ri(E,3)),this.setAttribute("normal",new ri(A,3)),this.setAttribute("uv",new ri(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class la extends Cr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vM extends Cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xM extends Cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vv extends Pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Bd=new Qe,c0=new K,u0=new K;class yM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kh,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;c0.setFromMatrixPosition(t.matrixWorld),i.position.copy(c0),u0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(u0),i.updateMatrixWorld(),Bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Bd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const f0=new Qe,qo=new K,Id=new K;class SM extends yM{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),qo.setFromMatrixPosition(t.matrixWorld),r.position.copy(qo),Id.copy(r.position),Id.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Id),r.updateMatrixWorld(),l.makeTranslation(-qo.x,-qo.y,-qo.z),f0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(f0,r.coordinateSystem,r.reversedDepth)}}class MM extends vv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new SM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class EM extends dv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bM extends vv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class TM extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function d0(s,t,i,r){const l=AM(r);switch(i){case Q0:return s*t;case $0:return s*t/l.components*l.byteLength;case Wh:return s*t/l.components*l.byteLength;case tv:return s*t*2/l.components*l.byteLength;case qh:return s*t*2/l.components*l.byteLength;case J0:return s*t*3/l.components*l.byteLength;case Ai:return s*t*4/l.components*l.byteLength;case Yh:return s*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oh:case ch:return Math.max(s,16)*Math.max(t,8)/4;case sh:case lh:return Math.max(s,8)*Math.max(t,8)/2;case uh:case fh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qc:case Rh:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ev:case Ch:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AM(s){switch(s){case Hi:case j0:return{byteLength:1,components:1};case Zo:case Z0:case $o:return{byteLength:2,components:1};case kh:case Xh:return{byteLength:2,components:4};case Rr:case Vh:case fa:return{byteLength:4,components:1};case K0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function RM(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],A=v[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,v[x]=A)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const A=v[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
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
#endif`,PM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GM=`#ifdef USE_IRIDESCENCE
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
#endif`,VM=`#ifdef USE_BUMPMAP
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QM=`#define PI 3.141592653589793
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
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$M=`vec3 transformedNormal = objectNormal;
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
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",rE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
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
}`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xE=`uniform bool receiveShadow;
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
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
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
#endif`,AE=`struct PhysicalMaterial {
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
}`,RE=`
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
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
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
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
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,db=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wb=`uniform sampler2D t2D;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Ob=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,zb=`#define DISTANCE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#include <common>
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
}`,Vb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,Xb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,jb=`#define NORMAL
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
}`,Zb=`#define PHONG
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
}`,Kb=`#define PHONG
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,tT=`#define TOON
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
}`,eT=`uniform float size;
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,aT=`uniform vec3 color;
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
}`,rT=`uniform float rotation;
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
}`,sT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:wM,alphahash_pars_fragment:CM,alphamap_fragment:DM,alphamap_pars_fragment:UM,alphatest_fragment:LM,alphatest_pars_fragment:NM,aomap_fragment:OM,aomap_pars_fragment:PM,batching_pars_vertex:zM,batching_vertex:BM,begin_vertex:IM,beginnormal_vertex:FM,bsdfs:HM,iridescence_fragment:GM,bumpmap_pars_fragment:VM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:jM,color_pars_vertex:ZM,color_vertex:KM,common:QM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:$M,displacementmap_pars_vertex:tE,displacementmap_vertex:eE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:aE,colorspace_pars_fragment:rE,envmap_fragment:sE,envmap_common_pars_fragment:oE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:yE,envmap_vertex:uE,fog_vertex:fE,fog_pars_vertex:dE,fog_fragment:hE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:_E,lights_lambert_pars_fragment:vE,lights_pars_begin:xE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:bE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:RE,lights_fragment_maps:wE,lights_fragment_end:CE,logdepthbuf_fragment:DE,logdepthbuf_pars_fragment:UE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:NE,map_fragment:OE,map_pars_fragment:PE,map_particle_fragment:zE,map_particle_pars_fragment:BE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:FE,morphinstance_vertex:HE,morphcolor_vertex:GE,morphnormal_vertex:VE,morphtarget_pars_vertex:kE,morphtarget_vertex:XE,normal_fragment_begin:WE,normal_fragment_maps:qE,normal_pars_fragment:YE,normal_pars_vertex:jE,normal_vertex:ZE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:tb,opaque_fragment:eb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:ab,dithering_fragment:rb,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:lb,shadowmap_pars_fragment:cb,shadowmap_pars_vertex:ub,shadowmap_vertex:fb,shadowmask_pars_fragment:db,skinbase_vertex:hb,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:gb,specularmap_fragment:_b,specularmap_pars_fragment:vb,tonemapping_fragment:xb,tonemapping_pars_fragment:yb,transmission_fragment:Sb,transmission_pars_fragment:Mb,uv_pars_fragment:Eb,uv_pars_vertex:bb,uv_vertex:Tb,worldpos_vertex:Ab,background_vert:Rb,background_frag:wb,backgroundCube_vert:Cb,backgroundCube_frag:Db,cube_vert:Ub,cube_frag:Lb,depth_vert:Nb,depth_frag:Ob,distanceRGBA_vert:Pb,distanceRGBA_frag:zb,equirect_vert:Bb,equirect_frag:Ib,linedashed_vert:Fb,linedashed_frag:Hb,meshbasic_vert:Gb,meshbasic_frag:Vb,meshlambert_vert:kb,meshlambert_frag:Xb,meshmatcap_vert:Wb,meshmatcap_frag:qb,meshnormal_vert:Yb,meshnormal_frag:jb,meshphong_vert:Zb,meshphong_frag:Kb,meshphysical_vert:Qb,meshphysical_frag:Jb,meshtoon_vert:$b,meshtoon_frag:tT,points_vert:eT,points_frag:nT,shadow_vert:iT,shadow_frag:aT,sprite_vert:rT,sprite_frag:sT},Ot={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Pi={basic:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Hn([Ot.lights,Ot.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Pi.physical={uniforms:Hn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Bc={r:0,b:0,g:0},vr=new Gi,oT=new Qe;function lT(s,t,i,r,l,c,d){const h=new Te(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function E(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:t).get(w)),w}function A(N){let w=!1;const z=E(N);z===null?_(h,m):z&&z.isColor&&(_(z,1),w=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,w){const z=E(w);z&&(z.isCubeTexture||z.mapping===Jc)?(g===void 0&&(g=new _n(new nl(1,1,1),new Ka({name:"BackgroundCubeMaterial",uniforms:Is(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,k,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(w.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(oT.makeRotationFromEuler(vr)),g.material.toneMapped=De.getTransfer(z.colorSpace)!==Ge,(v!==z||x!==z.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=z,x=z.version,y=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new _n(new tu(2,2),new Ka({name:"BackgroundMaterial",uniforms:Is(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=De.getTransfer(z.colorSpace)!==Ge,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||x!==z.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,v=z,x=z.version,y=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,w){N.getRGB(Bc,fv(s)),r.buffers.color.setClear(Bc.r,Bc.g,Bc.b,w,d)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,w=1){h.set(N),m=w,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(h,m)},render:A,addToRenderList:S,dispose:F}}function cT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(D,I,tt,it,ct){let lt=!1;const O=v(it,tt,I);c!==O&&(c=O,p(c.object)),lt=y(D,it,tt,ct),lt&&E(D,it,tt,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(lt||d)&&(d=!1,w(D,I,tt,it),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function v(D,I,tt){const it=tt.wireframe===!0;let ct=r[D.id];ct===void 0&&(ct={},r[D.id]=ct);let lt=ct[I.id];lt===void 0&&(lt={},ct[I.id]=lt);let O=lt[it];return O===void 0&&(O=x(m()),lt[it]=O),O}function x(D){const I=[],tt=[],it=[];for(let ct=0;ct<i;ct++)I[ct]=0,tt[ct]=0,it[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:tt,attributeDivisors:it,object:D,attributes:{},index:null}}function y(D,I,tt,it){const ct=c.attributes,lt=I.attributes;let O=0;const q=tt.getAttributes();for(const B in q)if(q[B].location>=0){const U=ct[B];let Q=lt[B];if(Q===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),U===void 0||U.attribute!==Q||Q&&U.data!==Q.data)return!0;O++}return c.attributesNum!==O||c.index!==it}function E(D,I,tt,it){const ct={},lt=I.attributes;let O=0;const q=tt.getAttributes();for(const B in q)if(q[B].location>=0){let U=lt[B];U===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(U=D.instanceColor));const Q={};Q.attribute=U,U&&U.data&&(Q.data=U.data),ct[B]=Q,O++}c.attributes=ct,c.attributesNum=O,c.index=it}function A(){const D=c.newAttributes;for(let I=0,tt=D.length;I<tt;I++)D[I]=0}function S(D){_(D,0)}function _(D,I){const tt=c.newAttributes,it=c.enabledAttributes,ct=c.attributeDivisors;tt[D]=1,it[D]===0&&(s.enableVertexAttribArray(D),it[D]=1),ct[D]!==I&&(s.vertexAttribDivisor(D,I),ct[D]=I)}function F(){const D=c.newAttributes,I=c.enabledAttributes;for(let tt=0,it=I.length;tt<it;tt++)I[tt]!==D[tt]&&(s.disableVertexAttribArray(tt),I[tt]=0)}function N(D,I,tt,it,ct,lt,O){O===!0?s.vertexAttribIPointer(D,I,tt,ct,lt):s.vertexAttribPointer(D,I,tt,it,ct,lt)}function w(D,I,tt,it){A();const ct=it.attributes,lt=tt.getAttributes(),O=I.defaultAttributeValues;for(const q in lt){const B=lt[q];if(B.location>=0){let yt=ct[q];if(yt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const U=yt.normalized,Q=yt.itemSize,_t=t.get(yt);if(_t===void 0)continue;const gt=_t.buffer,Mt=_t.type,et=_t.bytesPerElement,dt=Mt===s.INT||Mt===s.UNSIGNED_INT||yt.gpuType===Vh;if(yt.isInterleavedBufferAttribute){const pt=yt.data,Dt=pt.stride,kt=yt.offset;if(pt.isInstancedInterleavedBuffer){for(let te=0;te<B.locationSize;te++)_(B.location+te,pt.meshPerAttribute);D.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let te=0;te<B.locationSize;te++)S(B.location+te);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let te=0;te<B.locationSize;te++)N(B.location+te,Q/B.locationSize,Mt,U,Dt*et,(kt+Q/B.locationSize*te)*et,dt)}else{if(yt.isInstancedBufferAttribute){for(let pt=0;pt<B.locationSize;pt++)_(B.location+pt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let pt=0;pt<B.locationSize;pt++)S(B.location+pt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let pt=0;pt<B.locationSize;pt++)N(B.location+pt,Q/B.locationSize,Mt,U,Q*et,Q/B.locationSize*pt*et,dt)}}else if(O!==void 0){const U=O[q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(B.location,U);break;case 3:s.vertexAttrib3fv(B.location,U);break;case 4:s.vertexAttrib4fv(B.location,U);break;default:s.vertexAttrib1fv(B.location,U)}}}}F()}function z(){H();for(const D in r){const I=r[D];for(const tt in I){const it=I[tt];for(const ct in it)g(it[ct].object),delete it[ct];delete I[tt]}delete r[D]}}function V(D){if(r[D.id]===void 0)return;const I=r[D.id];for(const tt in I){const it=I[tt];for(const ct in it)g(it[ct].object),delete it[ct];delete I[tt]}delete r[D.id]}function k(D){for(const I in r){const tt=r[I];if(tt[D.id]===void 0)continue;const it=tt[D.id];for(const ct in it)g(it[ct].object),delete it[ct];delete tt[D.id]}}function H(){C(),d=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:V,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:S,disableUnusedAttributes:F}}function uT(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)d(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function fT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(k){return!(k!==Ai&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const H=k===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==Hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==fa&&!H)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:z,maxSamples:V}}function dT(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Sr,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const F=c?0:r,N=F*4;let w=_.clippingState||null;m.value=w,w=g(E,x,N,y);for(let z=0;z!==N;++z)w[z]=i[z];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,y,E){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=y+A*4,F=x.matrixWorldInverse;h.getNormalMatrix(F),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,w=y;N!==A;++N,w+=4)d.copy(v[N]).applyMatrix4(F,h),d.normal.toArray(S,w),S[w+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function hT(s){let t=new WeakMap;function i(d,h){return h===nh?d.mapping=Ps:h===ih&&(d.mapping=zs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===nh||h===ih)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new lM(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ds=4,h0=[.125,.215,.35,.446,.526,.582],br=20,Fd=new EM,p0=new Te;let Hd=null,Gd=0,Vd=0,kd=!1;const Mr=(1+Math.sqrt(5))/2,ws=1/Mr,m0=[new K(-Mr,ws,0),new K(Mr,ws,0),new K(-ws,0,Mr),new K(ws,0,Mr),new K(0,Mr,-ws),new K(0,Mr,ws),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],pT=new K;class g0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=pT}=c;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hd,Gd,Vd),this._renderer.xr.enabled=kd,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ps||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:$o,format:Ai,colorSpace:Bs,depthBuffer:!1},l=_0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mT(c)),this._blurMaterial=gT(c,t,i)}return l}_compileMaterial(t){const i=new _n(this._lodPlanes[0],t);this._renderer.compile(i,Fd)}_sceneToCubeUV(t,i,r,l,c){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(p0),v.toneMapping=Ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new Zh({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),S=new _n(new nl,A);let _=!1;const F=t.background;F?F.isColor&&(A.color.copy(F),t.background=null,_=!0):(A.color.copy(p0),_=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):w===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const z=this._cubeSize;Ic(l,w*z,N>2?z:0,z,z),v.setRenderTarget(l),_&&v.render(S,m),v.render(t,m)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ps||t.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new _n(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ic(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Fd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=m0[(l-c-1)%m0.length];this._blur(t,c-1,c,d,h)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new _n(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*br-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):br;S>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${br}`);const _=[];let F=0;for(let k=0;k<br;++k){const H=k/A,C=Math.exp(-H*H/2);_.push(C),k===0?F+=C:k<S&&(F+=2*C)}for(let k=0;k<_.length;k++)_[k]=_[k]/F;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const w=this._sizeLods[l],z=3*w*(l>N-Ds?l-N+Ds:0),V=4*(this._cubeSize-w);Ic(i,z,V,3*w,2*w),m.setRenderTarget(i),m.render(v,Fd)}}function mT(s){const t=[],i=[],r=[];let l=s;const c=s-Ds+1+h0.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-Ds?m=h0[d-s+Ds-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,A=3,S=2,_=1,F=new Float32Array(A*E*y),N=new Float32Array(S*E*y),w=new Float32Array(_*E*y);for(let V=0;V<y;V++){const k=V%3*2/3-1,H=V>2?0:-1,C=[k,H,0,k+2/3,H,0,k+2/3,H+1,0,k,H,0,k+2/3,H+1,0,k,H+1,0];F.set(C,A*E*V),N.set(x,S*E*V);const D=[V,V,V,V,V,V];w.set(D,_*E*V)}const z=new gi;z.setAttribute("position",new ai(F,A)),z.setAttribute("uv",new ai(N,S)),z.setAttribute("faceIndex",new ai(w,_)),t.push(z),l>Ds&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function _0(s,t,i){const r=new wr(s,t,i);return r.texture.mapping=Jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ic(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function gT(s,t,i){const r=new Float32Array(br),l=new K(0,1,0);return new Ka({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function v0(){return new Ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function x0(){return new Ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function _T(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===nh||m===ih,g=m===Ps||m===zs;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new g0(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new g0(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function vT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ls("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function xT(s,t,i,r){const l={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",d),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],s.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,E=v.attributes.position;let A=0;if(y!==null){const F=y.array;A=y.version;for(let N=0,w=F.length;N<w;N+=3){const z=F[N+0],V=F[N+1],k=F[N+2];x.push(z,V,V,k,k,z)}}else if(E!==void 0){const F=E.array;A=E.version;for(let N=0,w=F.length/3-1;N<w;N+=3){const z=N+0,V=N+1,k=N+2;x.push(z,V,V,k,k,z)}}else return;const S=new(av(x)?uv:cv)(x,1);S.version=A;const _=c.get(v);_&&t.remove(_),c.set(v,S)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function yT(s,t,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,y){s.drawElements(r,y,c,x*d),i.update(y,r,1)}function p(x,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,x*d,E),i.update(y,r,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];i.update(S,r,1)}function v(x,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/d,y[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,A,0,E);let _=0;for(let F=0;F<E;F++)_+=y[F]*A[F];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function ST(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function MT(s,t,i){const r=new WeakMap,l=new ke;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let D=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var y=D;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),S===!0&&(w=3);let z=h.attributes.position.count*w,V=1;z>t.maxTextureSize&&(V=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const k=new Float32Array(z*V*4*v),H=new rv(k,z,V,v);H.type=fa,H.needsUpdate=!0;const C=w*4;for(let I=0;I<v;I++){const tt=_[I],it=F[I],ct=N[I],lt=z*V*4*I;for(let O=0;O<tt.count;O++){const q=O*C;E===!0&&(l.fromBufferAttribute(tt,O),k[lt+q+0]=l.x,k[lt+q+1]=l.y,k[lt+q+2]=l.z,k[lt+q+3]=0),A===!0&&(l.fromBufferAttribute(it,O),k[lt+q+4]=l.x,k[lt+q+5]=l.y,k[lt+q+6]=l.z,k[lt+q+7]=0),S===!0&&(l.fromBufferAttribute(ct,O),k[lt+q+8]=l.x,k[lt+q+9]=l.y,k[lt+q+10]=l.z,k[lt+q+11]=ct.itemSize===4?l.w:1)}}x={count:v,texture:H,size:new me(z,V)},r.set(h,x),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function ET(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const yv=new Gn,y0=new _v(1,1),Sv=new rv,Mv=new WS,Ev=new hv,S0=[],M0=[],E0=new Float32Array(16),b0=new Float32Array(9),T0=new Float32Array(4);function Hs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=S0[l];if(c===void 0&&(c=new Float32Array(l),S0[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function xn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function eu(s,t){let i=M0[t];i===void 0&&(i=new Int32Array(t),M0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function bT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function TT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),xn(i,t)}}function AT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),xn(i,t)}}function RT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),xn(i,t)}}function wT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;T0.set(r),s.uniformMatrix2fv(this.addr,!1,T0),xn(i,r)}}function CT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;b0.set(r),s.uniformMatrix3fv(this.addr,!1,b0),xn(i,r)}}function DT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;E0.set(r),s.uniformMatrix4fv(this.addr,!1,E0),xn(i,r)}}function UT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function LT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),xn(i,t)}}function NT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),xn(i,t)}}function OT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),xn(i,t)}}function PT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function zT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),xn(i,t)}}function BT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),xn(i,t)}}function IT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),xn(i,t)}}function FT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(y0.compareFunction=iv,c=y0):c=yv,i.setTexture2D(t||c,l)}function HT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Mv,l)}function GT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Ev,l)}function VT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Sv,l)}function kT(s){switch(s){case 5126:return bT;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return wT;case 35675:return CT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return BT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}function XT(s,t){s.uniform1fv(this.addr,t)}function WT(s,t){const i=Hs(t,this.size,2);s.uniform2fv(this.addr,i)}function qT(s,t){const i=Hs(t,this.size,3);s.uniform3fv(this.addr,i)}function YT(s,t){const i=Hs(t,this.size,4);s.uniform4fv(this.addr,i)}function jT(s,t){const i=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ZT(s,t){const i=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function KT(s,t){const i=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function QT(s,t){s.uniform1iv(this.addr,t)}function JT(s,t){s.uniform2iv(this.addr,t)}function $T(s,t){s.uniform3iv(this.addr,t)}function tA(s,t){s.uniform4iv(this.addr,t)}function eA(s,t){s.uniform1uiv(this.addr,t)}function nA(s,t){s.uniform2uiv(this.addr,t)}function iA(s,t){s.uniform3uiv(this.addr,t)}function aA(s,t){s.uniform4uiv(this.addr,t)}function rA(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||yv,c[d])}function sA(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Mv,c[d])}function oA(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Ev,c[d])}function lA(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Sv,c[d])}function cA(s){switch(s){case 5126:return XT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=kT(i.type)}}class fA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cA(i.type)}}class dA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function A0(s,t){s.seq.push(t),s.map[t.id]=t}function hA(s,t,i){const r=s.name,l=r.length;for(Xd.lastIndex=0;;){const c=Xd.exec(r),d=Xd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){A0(i,p===void 0?new uA(h,s,t):new fA(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new dA(h),A0(i,v)),i=v}}}class Yc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);hA(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function R0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const pA=37297;let mA=0;function gA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const w0=new fe;function _A(s){De._getMatrix(w0,De.workingColorSpace,s);const t=`mat3( ${w0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case jc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function C0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+gA(s.getShaderSource(t),h)}else return c}function vA(s,t){const i=_A(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function xA(s,t){let i;switch(t){case yS:i="Linear";break;case SS:i="Reinhard";break;case MS:i="Cineon";break;case q0:i="ACESFilmic";break;case bS:i="AgX";break;case TS:i="Neutral";break;case ES:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new K;function yA(){De.getLuminanceCoefficients(Fc);const s=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function MA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function EA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function jo(s){return s!==""}function D0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function U0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(bA,AA)}const TA=new Map;function AA(s,t){let i=pe[t];if(i===void 0){const r=TA.get(t);if(r!==void 0)i=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ph(i)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(s){return s.replace(RA,wA)}function wA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function N0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function CA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===W0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$y?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function DA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case zs:t="ENVMAP_TYPE_CUBE";break;case Jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function UA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function LA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case vS:t="ENVMAP_BLENDING_MIX";break;case xS:t="ENVMAP_BLENDING_ADD";break}return t}function NA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function OA(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=CA(i),p=DA(i),g=UA(i),v=LA(i),x=NA(i),y=SA(i),E=MA(c),A=l.createProgram();let S,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(S=[N0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[N0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ya?xA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,vA("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),d=Ph(d),d=D0(d,i),d=U0(d,i),h=Ph(h),h=D0(h,i),h=U0(h,i),d=L0(d),h=L0(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=F+S+d,w=F+_+h,z=R0(l,l.VERTEX_SHADER,N),V=R0(l,l.FRAGMENT_SHADER,w);l.attachShader(A,z),l.attachShader(A,V),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function k(I){if(s.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",it=l.getShaderInfoLog(z)||"",ct=l.getShaderInfoLog(V)||"",lt=tt.trim(),O=it.trim(),q=ct.trim();let B=!0,yt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,z,V);else{const U=C0(l,z,"vertex"),Q=C0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+lt+`
`+U+`
`+Q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(O===""||q==="")&&(yt=!1);yt&&(I.diagnostics={runnable:B,programLog:lt,vertexShader:{log:O,prefix:S},fragmentShader:{log:q,prefix:_}})}l.deleteShader(z),l.deleteShader(V),H=new Yc(l,A),C=EA(l,A)}let H;this.getUniforms=function(){return H===void 0&&k(this),H};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,pA)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=V,this}let PA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new BA(t),i.set(t,r)),r}}class BA{constructor(t){this.id=PA++,this.code=t,this.usedTimes=0}}function IA(s,t,i,r,l,c,d){const h=new ov,m=new zA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,D,I,tt,it){const ct=tt.fog,lt=it.geometry,O=C.isMeshStandardMaterial?tt.environment:null,q=(C.isMeshStandardMaterial?i:t).get(C.envMap||O),B=q&&q.mapping===Jc?q.image.height:null,yt=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Q=U!==void 0?U.length:0;let _t=0;lt.morphAttributes.position!==void 0&&(_t=1),lt.morphAttributes.normal!==void 0&&(_t=2),lt.morphAttributes.color!==void 0&&(_t=3);let gt,Mt,et,dt;if(yt){const Re=Pi[yt];gt=Re.vertexShader,Mt=Re.fragmentShader}else gt=C.vertexShader,Mt=C.fragmentShader,m.update(C),et=m.getVertexShaderID(C),dt=m.getFragmentShaderID(C);const pt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),kt=it.isInstancedMesh===!0,te=it.isBatchedMesh===!0,Le=!!C.map,le=!!C.matcap,G=!!q,Ne=!!C.aoMap,Jt=!!C.lightMap,Ae=!!C.bumpMap,It=!!C.normalMap,qe=!!C.displacementMap,Ft=!!C.emissiveMap,ce=!!C.metalnessMap,Je=!!C.roughnessMap,$e=C.anisotropy>0,L=C.clearcoat>0,b=C.dispersion>0,nt=C.iridescence>0,ft=C.sheen>0,St=C.transmission>0,ut=$e&&!!C.anisotropyMap,Pt=L&&!!C.clearcoatMap,Rt=L&&!!C.clearcoatNormalMap,qt=L&&!!C.clearcoatRoughnessMap,jt=nt&&!!C.iridescenceMap,Et=nt&&!!C.iridescenceThicknessMap,Lt=ft&&!!C.sheenColorMap,Kt=ft&&!!C.sheenRoughnessMap,Wt=!!C.specularMap,Ct=!!C.specularColorMap,oe=!!C.specularIntensityMap,W=St&&!!C.transmissionMap,At=St&&!!C.thicknessMap,wt=!!C.gradientMap,zt=!!C.alphaMap,bt=C.alphaTest>0,xt=!!C.alphaHash,Xt=!!C.extensions;let re=Ya;C.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(re=s.toneMapping);const Oe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:Mt,defines:C.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:te,batchingColor:te&&it._colorsTexture!==null,instancing:kt,instancingColor:kt&&it.instanceColor!==null,instancingMorph:kt&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Bs,alphaToCoverage:!!C.alphaToCoverage,map:Le,matcap:le,envMap:G,envMapMode:G&&q.mapping,envMapCubeUVHeight:B,aoMap:Ne,lightMap:Jt,bumpMap:Ae,normalMap:It,displacementMap:x&&qe,emissiveMap:Ft,normalMapObjectSpace:It&&C.normalMapType===CS,normalMapTangentSpace:It&&C.normalMapType===nv,metalnessMap:ce,roughnessMap:Je,anisotropy:$e,anisotropyMap:ut,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:qt,dispersion:b,iridescence:nt,iridescenceMap:jt,iridescenceThicknessMap:Et,sheen:ft,sheenColorMap:Lt,sheenRoughnessMap:Kt,specularMap:Wt,specularColorMap:Ct,specularIntensityMap:oe,transmission:St,transmissionMap:W,thicknessMap:At,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Us&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:xt,combine:C.combine,mapUv:Le&&A(C.map.channel),aoMapUv:Ne&&A(C.aoMap.channel),lightMapUv:Jt&&A(C.lightMap.channel),bumpMapUv:Ae&&A(C.bumpMap.channel),normalMapUv:It&&A(C.normalMap.channel),displacementMapUv:qe&&A(C.displacementMap.channel),emissiveMapUv:Ft&&A(C.emissiveMap.channel),metalnessMapUv:ce&&A(C.metalnessMap.channel),roughnessMapUv:Je&&A(C.roughnessMap.channel),anisotropyMapUv:ut&&A(C.anisotropyMap.channel),clearcoatMapUv:Pt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&A(C.sheenRoughnessMap.channel),specularMapUv:Wt&&A(C.specularMap.channel),specularColorMapUv:Ct&&A(C.specularColorMap.channel),specularIntensityMapUv:oe&&A(C.specularIntensityMap.channel),transmissionMapUv:W&&A(C.transmissionMap.channel),thicknessMapUv:At&&A(C.thicknessMap.channel),alphaMapUv:zt&&A(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(It||$e),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!lt.attributes.uv&&(Le||zt),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:it.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:_t,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:Le&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===zi,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&C.extensions.multiDraw===!0||te)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)D.push(I),D.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(F(D,C),N(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function F(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function N(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function w(C){const D=E[C.type];let I;if(D){const tt=Pi[D];I=aM.clone(tt.uniforms)}else I=C.uniforms;return I}function z(C,D){let I;for(let tt=0,it=g.length;tt<it;tt++){const ct=g[tt];if(ct.cacheKey===D){I=ct,++I.usedTimes;break}}return I===void 0&&(I=new OA(s,D,C,c),g.push(I)),I}function V(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function k(C){m.remove(C)}function H(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:w,acquireProgram:z,releaseProgram:V,releaseShaderCache:k,programs:g,dispose:H}}function FA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function HA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function O0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function P0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(v,x,y,E,A,S){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:A,group:S},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=A,_.group=S),t++,_}function h(v,x,y,E,A,S){const _=d(v,x,y,E,A,S);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,E,A,S){const _=d(v,x,y,E,A,S);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||HA),r.length>1&&r.sort(x||O0),l.length>1&&l.sort(x||O0)}function g(){for(let v=t,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function GA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new P0,s.set(r,[d])):l>=c.length?(d=new P0,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function VA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Te};break;case"SpotLight":i={position:new K,direction:new K,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function kA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let XA=0;function WA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qA(s){const t=new VA,i=kA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new Qe,d=new Qe;function h(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,E=0,A=0,S=0,_=0,F=0,N=0,w=0,z=0,V=0,k=0;p.sort(WA);for(let C=0,D=p.length;C<D;C++){const I=p[C],tt=I.color,it=I.intensity,ct=I.distance,lt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=tt.r*it,v+=tt.g*it,x+=tt.b*it;else if(I.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],it);k++}else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,B=i.get(I);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=I.shadow.matrix,F++}r.directional[y]=O,y++}else if(I.isSpotLight){const O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(tt).multiplyScalar(it),O.distance=ct,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,r.spot[A]=O;const q=I.shadow;if(I.map&&(r.spotLightMap[z]=I.map,z++,q.updateMatrices(I),I.castShadow&&V++),r.spotLightMatrix[A]=q.matrix,I.castShadow){const B=i.get(I);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,r.spotShadow[A]=B,r.spotShadowMap[A]=lt,w++}A++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(tt).multiplyScalar(it),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=O,S++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const q=I.shadow,B=i.get(I);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=I.shadow.matrix,N++}r.point[E]=O,E++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(it),O.groundColor.copy(I.groundColor).multiplyScalar(it),r.hemi[_]=O,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==y||H.pointLength!==E||H.spotLength!==A||H.rectAreaLength!==S||H.hemiLength!==_||H.numDirectionalShadows!==F||H.numPointShadows!==N||H.numSpotShadows!==w||H.numSpotMaps!==z||H.numLightProbes!==k)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+z-V,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=k,H.directionalLength=y,H.pointLength=E,H.spotLength=A,H.rectAreaLength=S,H.hemiLength=_,H.numDirectionalShadows=F,H.numPointShadows=N,H.numSpotShadows=w,H.numSpotMaps=z,H.numLightProbes=k,r.version=XA++)}function m(p,g){let v=0,x=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const N=p[_];if(N.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),v++}else if(N.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),d.identity(),c.copy(N.matrixWorld),c.premultiply(S),d.extractRotation(c),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(S),x++}else if(N.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:r}}function z0(s){const t=new qA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function YA(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new z0(s),t.set(l,[h])):c>=d.length?(h=new z0(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
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
}`;function KA(s,t,i){let r=new Kh;const l=new me,c=new me,d=new ke,h=new vM({depthPacking:wS}),m=new xM,p={},g=i.maxTextureSize,v={[Za]:Yn,[Yn]:Za,[zi]:zi},x=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:jA,fragmentShader:ZA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _n(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let _=this.type;this.render=function(V,k,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const C=s.getRenderTarget(),D=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),tt=s.state;tt.setBlending(qa),tt.buffers.depth.getReversed()?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const it=_!==ua&&this.type===ua,ct=_===ua&&this.type!==ua;for(let lt=0,O=V.length;lt<O;lt++){const q=V[lt],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const yt=B.getFrameExtents();if(l.multiply(yt),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,B.mapSize.y=c.y)),B.map===null||it===!0||ct===!0){const Q=this.type!==ua?{minFilter:Ri,magFilter:Ri}:{};B.map!==null&&B.map.dispose(),B.map=new wr(l.x,l.y,Q),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const U=B.getViewportCount();for(let Q=0;Q<U;Q++){const _t=B.getViewport(Q);d.set(c.x*_t.x,c.y*_t.y,c.x*_t.z,c.y*_t.w),tt.viewport(d),B.updateMatrices(q,Q),r=B.getFrustum(),w(k,H,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===ua&&F(B,H),B.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(C,D,I)};function F(V,k){const H=t.update(A);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new wr(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(k,null,H,x,A,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(k,null,H,y,A,null)}function N(V,k,H,C){let D=null;const I=H.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(I!==void 0)D=I;else if(D=H.isPointLight===!0?m:h,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const tt=D.uuid,it=k.uuid;let ct=p[tt];ct===void 0&&(ct={},p[tt]=ct);let lt=ct[it];lt===void 0&&(lt=D.clone(),ct[it]=lt,k.addEventListener("dispose",z)),D=lt}if(D.visible=k.visible,D.wireframe=k.wireframe,C===ua?D.side=k.shadowSide!==null?k.shadowSide:k.side:D.side=k.shadowSide!==null?k.shadowSide:v[k.side],D.alphaMap=k.alphaMap,D.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,D.map=k.map,D.clipShadows=k.clipShadows,D.clippingPlanes=k.clippingPlanes,D.clipIntersection=k.clipIntersection,D.displacementMap=k.displacementMap,D.displacementScale=k.displacementScale,D.displacementBias=k.displacementBias,D.wireframeLinewidth=k.wireframeLinewidth,D.linewidth=k.linewidth,H.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const tt=s.properties.get(D);tt.light=H}return D}function w(V,k,H,C,D){if(V.visible===!1)return;if(V.layers.test(k.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&D===ua)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,V.matrixWorld);const it=t.update(V),ct=V.material;if(Array.isArray(ct)){const lt=it.groups;for(let O=0,q=lt.length;O<q;O++){const B=lt[O],yt=ct[B.materialIndex];if(yt&&yt.visible){const U=N(V,yt,C,D);V.onBeforeShadow(s,V,k,H,it,U,B),s.renderBufferDirect(H,null,it,U,V,B),V.onAfterShadow(s,V,k,H,it,U,B)}}}else if(ct.visible){const lt=N(V,ct,C,D);V.onBeforeShadow(s,V,k,H,it,lt,null),s.renderBufferDirect(H,null,it,lt,V,null),V.onAfterShadow(s,V,k,H,it,lt,null)}}const tt=V.children;for(let it=0,ct=tt.length;it<ct;it++)w(tt[it],k,H,C,D)}function z(V){V.target.removeEventListener("dispose",z);for(const H in p){const C=p[H],D=V.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const QA={[Zd]:Kd,[Qd]:th,[Jd]:eh,[Os]:$d,[Kd]:Zd,[th]:Qd,[eh]:Jd,[$d]:Os};function JA(s,t){function i(){let W=!1;const At=new ke;let wt=null;const zt=new ke(0,0,0,0);return{setMask:function(bt){wt!==bt&&!W&&(s.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,xt,Xt,re,Oe){Oe===!0&&(bt*=re,xt*=re,Xt*=re),At.set(bt,xt,Xt,re),zt.equals(At)===!1&&(s.clearColor(bt,xt,Xt,re),zt.copy(At))},reset:function(){W=!1,wt=null,zt.set(-1,0,0,0)}}}function r(){let W=!1,At=!1,wt=null,zt=null,bt=null;return{setReversed:function(xt){if(At!==xt){const Xt=t.get("EXT_clip_control");xt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),At=xt;const re=bt;bt=null,this.setClear(re)}},getReversed:function(){return At},setTest:function(xt){xt?pt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(xt){wt!==xt&&!W&&(s.depthMask(xt),wt=xt)},setFunc:function(xt){if(At&&(xt=QA[xt]),zt!==xt){switch(xt){case Zd:s.depthFunc(s.NEVER);break;case Kd:s.depthFunc(s.ALWAYS);break;case Qd:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case Jd:s.depthFunc(s.EQUAL);break;case $d:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){bt!==xt&&(At&&(xt=1-xt),s.clearDepth(xt),bt=xt)},reset:function(){W=!1,wt=null,zt=null,bt=null,At=!1}}}function l(){let W=!1,At=null,wt=null,zt=null,bt=null,xt=null,Xt=null,re=null,Oe=null;return{setTest:function(Re){W||(Re?pt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Re){At!==Re&&!W&&(s.stencilMask(Re),At=Re)},setFunc:function(Re,_i,dn){(wt!==Re||zt!==_i||bt!==dn)&&(s.stencilFunc(Re,_i,dn),wt=Re,zt=_i,bt=dn)},setOp:function(Re,_i,dn){(xt!==Re||Xt!==_i||re!==dn)&&(s.stencilOp(Re,_i,dn),xt=Re,Xt=_i,re=dn)},setLocked:function(Re){W=Re},setClear:function(Re){Oe!==Re&&(s.clearStencil(Re),Oe=Re)},reset:function(){W=!1,At=null,wt=null,zt=null,bt=null,xt=null,Xt=null,re=null,Oe=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,A=!1,S=null,_=null,F=null,N=null,w=null,z=null,V=null,k=new Te(0,0,0),H=0,C=!1,D=null,I=null,tt=null,it=null,ct=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=q>=2);let yt=null,U={};const Q=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),gt=new ke().fromArray(Q),Mt=new ke().fromArray(_t);function et(W,At,wt,zt){const bt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(W,xt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<wt;Xt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(At+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return xt}const dt={};dt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),pt(s.DEPTH_TEST),d.setFunc(Os),Ae(!1),It(z_),pt(s.CULL_FACE),Ne(qa);function pt(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function Dt(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function kt(W,At){return v[W]!==At?(s.bindFramebuffer(W,At),v[W]=At,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=At),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=At),!0):!1}function te(W,At){let wt=y,zt=!1;if(W){wt=x.get(At),wt===void 0&&(wt=[],x.set(At,wt));const bt=W.textures;if(wt.length!==bt.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Xt=bt.length;xt<Xt;xt++)wt[xt]=s.COLOR_ATTACHMENT0+xt;wt.length=bt.length,zt=!0}}else wt[0]!==s.BACK&&(wt[0]=s.BACK,zt=!0);zt&&s.drawBuffers(wt)}function Le(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const le={[Er]:s.FUNC_ADD,[eS]:s.FUNC_SUBTRACT,[nS]:s.FUNC_REVERSE_SUBTRACT};le[iS]=s.MIN,le[aS]=s.MAX;const G={[rS]:s.ZERO,[sS]:s.ONE,[oS]:s.SRC_COLOR,[Yd]:s.SRC_ALPHA,[hS]:s.SRC_ALPHA_SATURATE,[fS]:s.DST_COLOR,[cS]:s.DST_ALPHA,[lS]:s.ONE_MINUS_SRC_COLOR,[jd]:s.ONE_MINUS_SRC_ALPHA,[dS]:s.ONE_MINUS_DST_COLOR,[uS]:s.ONE_MINUS_DST_ALPHA,[pS]:s.CONSTANT_COLOR,[mS]:s.ONE_MINUS_CONSTANT_COLOR,[gS]:s.CONSTANT_ALPHA,[_S]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(W,At,wt,zt,bt,xt,Xt,re,Oe,Re){if(W===qa){A===!0&&(Dt(s.BLEND),A=!1);return}if(A===!1&&(pt(s.BLEND),A=!0),W!==tS){if(W!==S||Re!==C){if((_!==Er||w!==Er)&&(s.blendEquation(s.FUNC_ADD),_=Er,w=Er),Re)switch(W){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B_:s.blendFunc(s.ONE,s.ONE);break;case I_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case F_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case I_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}F=null,N=null,z=null,V=null,k.set(0,0,0),H=0,S=W,C=Re}return}bt=bt||At,xt=xt||wt,Xt=Xt||zt,(At!==_||bt!==w)&&(s.blendEquationSeparate(le[At],le[bt]),_=At,w=bt),(wt!==F||zt!==N||xt!==z||Xt!==V)&&(s.blendFuncSeparate(G[wt],G[zt],G[xt],G[Xt]),F=wt,N=zt,z=xt,V=Xt),(re.equals(k)===!1||Oe!==H)&&(s.blendColor(re.r,re.g,re.b,Oe),k.copy(re),H=Oe),S=W,C=!1}function Jt(W,At){W.side===zi?Dt(s.CULL_FACE):pt(s.CULL_FACE);let wt=W.side===Yn;At&&(wt=!wt),Ae(wt),W.blending===Us&&W.transparent===!1?Ne(qa):Ne(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const zt=W.stencilWrite;h.setTest(zt),zt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ft(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function It(W){W!==Qy?(pt(s.CULL_FACE),W!==I&&(W===z_?s.cullFace(s.BACK):W===Jy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),I=W}function qe(W){W!==tt&&(O&&s.lineWidth(W),tt=W)}function Ft(W,At,wt){W?(pt(s.POLYGON_OFFSET_FILL),(it!==At||ct!==wt)&&(s.polygonOffset(At,wt),it=At,ct=wt)):Dt(s.POLYGON_OFFSET_FILL)}function ce(W){W?pt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function Je(W){W===void 0&&(W=s.TEXTURE0+lt-1),yt!==W&&(s.activeTexture(W),yt=W)}function $e(W,At,wt){wt===void 0&&(yt===null?wt=s.TEXTURE0+lt-1:wt=yt);let zt=U[wt];zt===void 0&&(zt={type:void 0,texture:void 0},U[wt]=zt),(zt.type!==W||zt.texture!==At)&&(yt!==wt&&(s.activeTexture(wt),yt=wt),s.bindTexture(W,At||dt[W]),zt.type=W,zt.texture=At)}function L(){const W=U[yt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){gt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Kt(W){Mt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Mt.copy(W))}function Wt(W,At){let wt=p.get(At);wt===void 0&&(wt=new WeakMap,p.set(At,wt));let zt=wt.get(W);zt===void 0&&(zt=s.getUniformBlockIndex(At,W.name),wt.set(W,zt))}function Ct(W,At){const zt=p.get(At).get(W);m.get(At)!==zt&&(s.uniformBlockBinding(At,zt,W.__bindingPointIndex),m.set(At,zt))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,U={},v={},x=new WeakMap,y=[],E=null,A=!1,S=null,_=null,F=null,N=null,w=null,z=null,V=null,k=new Te(0,0,0),H=0,C=!1,D=null,I=null,tt=null,it=null,ct=null,gt.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:pt,disable:Dt,bindFramebuffer:kt,drawBuffers:te,useProgram:Le,setBlending:Ne,setMaterial:Jt,setFlipSided:Ae,setCullFace:It,setLineWidth:qe,setPolygonOffset:Ft,setScissorTest:ce,activeTexture:Je,bindTexture:$e,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:jt,texImage3D:Et,updateUBOMapping:Wt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:qt,texSubImage2D:ft,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Pt,scissor:Lt,viewport:Kt,reset:oe}}function $A(s,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new me,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):Kc("canvas")}function A(L,b,nt){let ft=1;const St=$e(L);if((St.width>nt||St.height>nt)&&(ft=nt/Math.max(St.width,St.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(ft*St.width),Pt=Math.floor(ft*St.height);v===void 0&&(v=E(ut,Pt));const Rt=b?E(ut,Pt):v;return Rt.width=ut,Rt.height=Pt,Rt.getContext("2d").drawImage(L,0,0,ut,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Pt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,b,nt,ft,St=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=b;if(b===s.RED&&(nt===s.FLOAT&&(ut=s.R32F),nt===s.HALF_FLOAT&&(ut=s.R16F),nt===s.UNSIGNED_BYTE&&(ut=s.R8)),b===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ut=s.R8UI),nt===s.UNSIGNED_SHORT&&(ut=s.R16UI),nt===s.UNSIGNED_INT&&(ut=s.R32UI),nt===s.BYTE&&(ut=s.R8I),nt===s.SHORT&&(ut=s.R16I),nt===s.INT&&(ut=s.R32I)),b===s.RG&&(nt===s.FLOAT&&(ut=s.RG32F),nt===s.HALF_FLOAT&&(ut=s.RG16F),nt===s.UNSIGNED_BYTE&&(ut=s.RG8)),b===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ut=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ut=s.RG16UI),nt===s.UNSIGNED_INT&&(ut=s.RG32UI),nt===s.BYTE&&(ut=s.RG8I),nt===s.SHORT&&(ut=s.RG16I),nt===s.INT&&(ut=s.RG32I)),b===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),nt===s.UNSIGNED_INT&&(ut=s.RGB32UI),nt===s.BYTE&&(ut=s.RGB8I),nt===s.SHORT&&(ut=s.RGB16I),nt===s.INT&&(ut=s.RGB32I)),b===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ut=s.RGBA32UI),nt===s.BYTE&&(ut=s.RGBA8I),nt===s.SHORT&&(ut=s.RGBA16I),nt===s.INT&&(ut=s.RGBA32I)),b===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),b===s.RGBA){const Pt=St?jc:De.getTransfer(ft);nt===s.FLOAT&&(ut=s.RGBA32F),nt===s.HALF_FLOAT&&(ut=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ut=Pt===Ge?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function w(L,b){let nt;return L?b===null||b===Rr||b===Ko?nt=s.DEPTH24_STENCIL8:b===fa?nt=s.DEPTH32F_STENCIL8:b===Zo&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rr||b===Ko?nt=s.DEPTH_COMPONENT24:b===fa?nt=s.DEPTH_COMPONENT32F:b===Zo&&(nt=s.DEPTH_COMPONENT16),nt}function z(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ri&&L.minFilter!==Ii?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function V(L){const b=L.target;b.removeEventListener("dispose",V),H(b),b.isVideoTexture&&g.delete(b)}function k(L){const b=L.target;b.removeEventListener("dispose",k),D(b)}function H(L){const b=r.get(L);if(b.__webglInit===void 0)return;const nt=L.source,ft=x.get(nt);if(ft){const St=ft[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&C(L),Object.keys(ft).length===0&&x.delete(nt)}r.remove(L)}function C(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const nt=L.source,ft=x.get(nt);delete ft[b.__cacheKey],d.memory.textures--}function D(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let St=0;St<b.__webglFramebuffer[ft].length;St++)s.deleteFramebuffer(b.__webglFramebuffer[ft][St]);else s.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)s.deleteFramebuffer(b.__webglFramebuffer[ft]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=L.textures;for(let ft=0,St=nt.length;ft<St;ft++){const ut=r.get(nt[ft]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),d.memory.textures--),r.remove(nt[ft])}r.remove(L)}let I=0;function tt(){I=0}function it(){const L=I;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function ct(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function lt(L,b){const nt=r.get(L);if(L.isVideoTexture&&ce(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&nt.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(nt,L,b);return}}else L.isExternalTexture&&(nt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+b)}function O(L,b){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){dt(nt,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+b)}function q(L,b){const nt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){dt(nt,L,b);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+b)}function B(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){pt(nt,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+b)}const yt={[ah]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[rh]:s.MIRRORED_REPEAT},U={[Ri]:s.NEAREST,[AS]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[fd]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},Q={[DS]:s.NEVER,[zS]:s.ALWAYS,[US]:s.LESS,[iv]:s.LEQUAL,[LS]:s.EQUAL,[PS]:s.GEQUAL,[NS]:s.GREATER,[OS]:s.NOTEQUAL};function _t(L,b){if(b.type===fa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ii||b.magFilter===fd||b.magFilter===hc||b.magFilter===Ar||b.minFilter===Ii||b.minFilter===fd||b.minFilter===hc||b.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,yt[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,yt[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,yt[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ri||b.minFilter!==hc&&b.minFilter!==Ar||b.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function gt(L,b){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",V));const ft=b.source;let St=x.get(ft);St===void 0&&(St={},x.set(ft,St));const ut=ct(b);if(ut!==L.__cacheKey){St[ut]===void 0&&(St[ut]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),St[ut].usedTimes++;const Pt=St[L.__cacheKey];Pt!==void 0&&(St[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&C(b)),L.__cacheKey=ut,L.__webglTexture=St[ut].texture}return nt}function Mt(L,b,nt){return Math.floor(Math.floor(L/nt)/b)}function et(L,b,nt,ft){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,nt,ft,b.data);else{ut.sort((Et,Lt)=>Et.start-Lt.start);let Pt=0;for(let Et=1;Et<ut.length;Et++){const Lt=ut[Pt],Kt=ut[Et],Wt=Lt.start+Lt.count,Ct=Mt(Kt.start,b.width,4),oe=Mt(Lt.start,b.width,4);Kt.start<=Wt+1&&Ct===oe&&Mt(Kt.start+Kt.count-1,b.width,4)===Ct?Lt.count=Math.max(Lt.count,Kt.start+Kt.count-Lt.start):(++Pt,ut[Pt]=Kt)}ut.length=Pt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),qt=s.getParameter(s.UNPACK_SKIP_PIXELS),jt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Et=0,Lt=ut.length;Et<Lt;Et++){const Kt=ut[Et],Wt=Math.floor(Kt.start/4),Ct=Math.ceil(Kt.count/4),oe=Wt%b.width,W=Math.floor(Wt/b.width),At=Ct,wt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,oe,W,At,wt,nt,ft,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,jt)}}function dt(L,b,nt){let ft=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=s.TEXTURE_3D);const St=gt(L,b),ut=b.source;i.bindTexture(ft,L.__webglTexture,s.TEXTURE0+nt);const Pt=r.get(ut);if(ut.version!==Pt.__version||St===!0){i.activeTexture(s.TEXTURE0+nt);const Rt=De.getPrimaries(De.workingColorSpace),qt=b.colorSpace===Wa?null:De.getPrimaries(b.colorSpace),jt=b.colorSpace===Wa||Rt===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Et=A(b.image,!1,l.maxTextureSize);Et=Je(b,Et);const Lt=c.convert(b.format,b.colorSpace),Kt=c.convert(b.type);let Wt=N(b.internalFormat,Lt,Kt,b.colorSpace,b.isVideoTexture);_t(ft,b);let Ct;const oe=b.mipmaps,W=b.isVideoTexture!==!0,At=Pt.__version===void 0||St===!0,wt=ut.dataReady,zt=z(b,Et);if(b.isDepthTexture)Wt=w(b.format===Jo,b.type),At&&(W?i.texStorage2D(s.TEXTURE_2D,1,Wt,Et.width,Et.height):i.texImage2D(s.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Lt,Kt,null));else if(b.isDataTexture)if(oe.length>0){W&&At&&i.texStorage2D(s.TEXTURE_2D,zt,Wt,oe[0].width,oe[0].height);for(let bt=0,xt=oe.length;bt<xt;bt++)Ct=oe[bt],W?wt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):i.texImage2D(s.TEXTURE_2D,bt,Wt,Ct.width,Ct.height,0,Lt,Kt,Ct.data);b.generateMipmaps=!1}else W?(At&&i.texStorage2D(s.TEXTURE_2D,zt,Wt,Et.width,Et.height),wt&&et(b,Et,Lt,Kt)):i.texImage2D(s.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Lt,Kt,Et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Wt,oe[0].width,oe[0].height,Et.depth);for(let bt=0,xt=oe.length;bt<xt;bt++)if(Ct=oe[bt],b.format!==Ai)if(Lt!==null)if(W){if(wt)if(b.layerUpdates.size>0){const Xt=d0(Ct.width,Ct.height,b.format,b.type);for(const re of b.layerUpdates){const Oe=Ct.data.subarray(re*Xt/Ct.data.BYTES_PER_ELEMENT,(re+1)*Xt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,re,Ct.width,Ct.height,1,Lt,Oe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Et.depth,Lt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,Wt,Ct.width,Ct.height,Et.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?wt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Et.depth,Lt,Kt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,Wt,Ct.width,Ct.height,Et.depth,0,Lt,Kt,Ct.data)}else{W&&At&&i.texStorage2D(s.TEXTURE_2D,zt,Wt,oe[0].width,oe[0].height);for(let bt=0,xt=oe.length;bt<xt;bt++)Ct=oe[bt],b.format!==Ai?Lt!==null?W?wt&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Lt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,Wt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?wt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):i.texImage2D(s.TEXTURE_2D,bt,Wt,Ct.width,Ct.height,0,Lt,Kt,Ct.data)}else if(b.isDataArrayTexture)if(W){if(At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Wt,Et.width,Et.height,Et.depth),wt)if(b.layerUpdates.size>0){const bt=d0(Et.width,Et.height,b.format,b.type);for(const xt of b.layerUpdates){const Xt=Et.data.subarray(xt*bt/Et.data.BYTES_PER_ELEMENT,(xt+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,Lt,Kt,Xt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Kt,Et.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,Et.width,Et.height,Et.depth,0,Lt,Kt,Et.data);else if(b.isData3DTexture)W?(At&&i.texStorage3D(s.TEXTURE_3D,zt,Wt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Kt,Et.data)):i.texImage3D(s.TEXTURE_3D,0,Wt,Et.width,Et.height,Et.depth,0,Lt,Kt,Et.data);else if(b.isFramebufferTexture){if(At)if(W)i.texStorage2D(s.TEXTURE_2D,zt,Wt,Et.width,Et.height);else{let bt=Et.width,xt=Et.height;for(let Xt=0;Xt<zt;Xt++)i.texImage2D(s.TEXTURE_2D,Xt,Wt,bt,xt,0,Lt,Kt,null),bt>>=1,xt>>=1}}else if(oe.length>0){if(W&&At){const bt=$e(oe[0]);i.texStorage2D(s.TEXTURE_2D,zt,Wt,bt.width,bt.height)}for(let bt=0,xt=oe.length;bt<xt;bt++)Ct=oe[bt],W?wt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Lt,Kt,Ct):i.texImage2D(s.TEXTURE_2D,bt,Wt,Lt,Kt,Ct);b.generateMipmaps=!1}else if(W){if(At){const bt=$e(Et);i.texStorage2D(s.TEXTURE_2D,zt,Wt,bt.width,bt.height)}wt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,Kt,Et)}else i.texImage2D(s.TEXTURE_2D,0,Wt,Lt,Kt,Et);S(b)&&_(ft),Pt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pt(L,b,nt){if(b.image.length!==6)return;const ft=gt(L,b),St=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+nt);const ut=r.get(St);if(St.version!==ut.__version||ft===!0){i.activeTexture(s.TEXTURE0+nt);const Pt=De.getPrimaries(De.workingColorSpace),Rt=b.colorSpace===Wa?null:De.getPrimaries(b.colorSpace),qt=b.colorSpace===Wa||Pt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const jt=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!jt&&!Et?Lt[xt]=A(b.image[xt],!0,l.maxCubemapSize):Lt[xt]=Et?b.image[xt].image:b.image[xt],Lt[xt]=Je(b,Lt[xt]);const Kt=Lt[0],Wt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),oe=N(b.internalFormat,Wt,Ct,b.colorSpace),W=b.isVideoTexture!==!0,At=ut.__version===void 0||ft===!0,wt=St.dataReady;let zt=z(b,Kt);_t(s.TEXTURE_CUBE_MAP,b);let bt;if(jt){W&&At&&i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,oe,Kt.width,Kt.height);for(let xt=0;xt<6;xt++){bt=Lt[xt].mipmaps;for(let Xt=0;Xt<bt.length;Xt++){const re=bt[Xt];b.format!==Ai?Wt!==null?W?wt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,0,0,re.width,re.height,Wt,re.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,0,0,re.width,re.height,Wt,Ct,re.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,oe,re.width,re.height,0,Wt,Ct,re.data)}}}else{if(bt=b.mipmaps,W&&At){bt.length>0&&zt++;const xt=$e(Lt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,oe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){W?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,Wt,Ct,Lt[xt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,Lt[xt].width,Lt[xt].height,0,Wt,Ct,Lt[xt].data);for(let Xt=0;Xt<bt.length;Xt++){const Oe=bt[Xt].image[xt].image;W?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,0,0,Oe.width,Oe.height,Wt,Ct,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,oe,Oe.width,Oe.height,0,Wt,Ct,Oe.data)}}else{W?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Wt,Ct,Lt[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,Wt,Ct,Lt[xt]);for(let Xt=0;Xt<bt.length;Xt++){const re=bt[Xt];W?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,0,0,Wt,Ct,re.image[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,oe,Wt,Ct,re.image[xt])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),ut.__version=St.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Dt(L,b,nt,ft,St,ut){const Pt=c.convert(nt.format,nt.colorSpace),Rt=c.convert(nt.type),qt=N(nt.internalFormat,Pt,Rt,nt.colorSpace),jt=r.get(b),Et=r.get(nt);if(Et.__renderTarget=b,!jt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ut),Kt=Math.max(1,b.height>>ut);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,qt,Lt,Kt,b.depth,0,Pt,Rt,null):i.texImage2D(St,ut,qt,Lt,Kt,0,Pt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ft(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,St,Et.__webglTexture,0,qe(b)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,St,Et.__webglTexture,ut),i.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(L,b,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const ft=b.depthTexture,St=ft&&ft.isDepthTexture?ft.type:null,ut=w(b.stencilBuffer,St),Pt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=qe(b);Ft(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ut,b.width,b.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ut,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ut,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,L)}else{const ft=b.textures;for(let St=0;St<ft.length;St++){const ut=ft[St],Pt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),qt=N(ut.internalFormat,Pt,Rt,ut.colorSpace),jt=qe(b);nt&&Ft(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,qt,b.width,b.height):Ft(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,qt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,qt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function te(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);const St=ft.__webglTexture,ut=qe(b);if(b.depthTexture.format===Qo)Ft(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(b.depthTexture.format===Jo)Ft(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Le(L){const b=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",St)};ft.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=ft}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?te(b.__webglFramebuffer[0],L):te(b.__webglFramebuffer,L)}else if(nt){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=s.createRenderbuffer(),kt(b.__webglDepthbuffer[ft],L,!1);else{const St=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ut)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),kt(b.__webglDepthbuffer,L,!1);else{const St=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ut)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function le(L,b,nt){const ft=r.get(L);b!==void 0&&Dt(ft.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&Le(L)}function G(L){const b=L.texture,nt=r.get(L),ft=r.get(b);L.addEventListener("dispose",k);const St=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Pt=St.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=b.version,d.memory.textures++),ut){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let qt=0;qt<b.mipmaps.length;qt++)nt.__webglFramebuffer[Rt][qt]=s.createFramebuffer()}else nt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let Rt=0,qt=St.length;Rt<qt;Rt++){const jt=r.get(St[Rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&Ft(L)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const qt=St[Rt];nt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const jt=c.convert(qt.format,qt.colorSpace),Et=c.convert(qt.type),Lt=N(qt.internalFormat,jt,Et,qt.colorSpace,L.isXRRenderTarget===!0),Kt=qe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Lt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),_t(s.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Dt(nt.__webglFramebuffer[Rt][qt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,qt);else Dt(nt.__webglFramebuffer[Rt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Rt=0,qt=St.length;Rt<qt;Rt++){const jt=St[Rt],Et=r.get(jt);let Lt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Et.__webglTexture),_t(Lt,jt),Dt(nt.__webglFramebuffer,L,jt,s.COLOR_ATTACHMENT0+Rt,Lt,0),S(jt)&&_(Lt)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ft.__webglTexture),_t(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Dt(nt.__webglFramebuffer[qt],L,b,s.COLOR_ATTACHMENT0,Rt,qt);else Dt(nt.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Rt,0);S(b)&&_(Rt),i.unbindTexture()}L.depthBuffer&&Le(L)}function Ne(L){const b=L.textures;for(let nt=0,ft=b.length;nt<ft;nt++){const St=b[nt];if(S(St)){const ut=F(L),Pt=r.get(St).__webglTexture;i.bindTexture(ut,Pt),_(ut),i.unbindTexture()}}}const Jt=[],Ae=[];function It(L){if(L.samples>0){if(Ft(L)===!1){const b=L.textures,nt=L.width,ft=L.height;let St=s.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(L),Rt=b.length>1;if(Rt)for(let jt=0;jt<b.length;jt++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const qt=L.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let jt=0;jt<b.length;jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[jt]);const Et=r.get(b[jt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,nt,ft,0,0,nt,ft,St,s.NEAREST),m===!0&&(Jt.length=0,Ae.length=0,Jt.push(s.COLOR_ATTACHMENT0+jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Jt.push(ut),Ae.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let jt=0;jt<b.length;jt++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[jt]);const Et=r.get(b[jt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+jt,s.TEXTURE_2D,Et,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function qe(L){return Math.min(l.maxSamples,L.samples)}function Ft(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(L){const b=d.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Je(L,b){const nt=L.colorSpace,ft=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==Bs&&nt!==Wa&&(De.getTransfer(nt)===Ge?(ft!==Ai||St!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=tt,this.setTexture2D=lt,this.setTexture2DArray=O,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=le,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ft}function t1(s,t){function i(r,l=Wa){let c;const d=De.getTransfer(l);if(r===Hi)return s.UNSIGNED_BYTE;if(r===kh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===K0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===j0)return s.BYTE;if(r===Z0)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===Vh)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===fa)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===Q0)return s.ALPHA;if(r===J0)return s.RGB;if(r===Ai)return s.RGBA;if(r===Qo)return s.DEPTH_COMPONENT;if(r===Jo)return s.DEPTH_STENCIL;if(r===$0)return s.RED;if(r===Wh)return s.RED_INTEGER;if(r===tv)return s.RG;if(r===qh)return s.RG_INTEGER;if(r===Yh)return s.RGBA_INTEGER;if(r===Vc||r===kc||r===Xc||r===Wc)if(d===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sh||r===oh||r===lh||r===ch)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ch)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uh||r===fh||r===dh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===uh||r===fh)return d===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===dh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===yh||r===Sh||r===Mh||r===Eh||r===bh||r===Th||r===Ah)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===hh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ph)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_h)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bh)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ah)return d===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qc||r===Rh||r===wh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===qc)return d===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ev||r===Ch||r===Dh||r===Uh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===qc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class bv extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new bv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ka({vertexShader:e1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _n(new tu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a1 extends Fs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,E=null;const A=new i1,S={},_=i.getContextAttributes();let F=null,N=null;const w=[],z=[],V=new me;let k=null;const H=new ii;H.viewport=new ke;const C=new ii;C.viewport=new ke;const D=[H,C],I=new TM;let tt=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=w[et];return dt===void 0&&(dt=new Od,w[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=w[et];return dt===void 0&&(dt=new Od,w[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=w[et];return dt===void 0&&(dt=new Od,w[et]=dt),dt.getHandSpace()};function ct(et){const dt=z.indexOf(et.inputSource);if(dt===-1)return;const pt=w[dt];pt!==void 0&&(pt.update(et.inputSource,et.frame,p||d),pt.dispatchEvent({type:et.type,data:et.inputSource}))}function lt(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",O);for(let et=0;et<w.length;et++){const dt=z[et];dt!==null&&(z[et]=null,w[et].disconnect(dt))}tt=null,it=null,A.reset();for(const et in S)delete S[et];t.setRenderTarget(F),y=null,x=null,v=null,l=null,N=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,kt=null;_.depth&&(kt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pt=_.stencil?Jo:Qo,Dt=_.stencil?Ko:Rr);const te={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};x=v.createProjectionLayer(te),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new wr(x.textureWidth,x.textureHeight,{format:Ai,type:Hi,depthTexture:new _v(x.textureWidth,x.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const pt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,pt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new wr(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function O(et){for(let dt=0;dt<et.removed.length;dt++){const pt=et.removed[dt],Dt=z.indexOf(pt);Dt>=0&&(z[Dt]=null,w[Dt].disconnect(pt))}for(let dt=0;dt<et.added.length;dt++){const pt=et.added[dt];let Dt=z.indexOf(pt);if(Dt===-1){for(let te=0;te<w.length;te++)if(te>=z.length){z.push(pt),Dt=te;break}else if(z[te]===null){z[te]=pt,Dt=te;break}if(Dt===-1)break}const kt=w[Dt];kt&&kt.connect(pt)}}const q=new K,B=new K;function yt(et,dt,pt){q.setFromMatrixPosition(dt.matrixWorld),B.setFromMatrixPosition(pt.matrixWorld);const Dt=q.distanceTo(B),kt=dt.projectionMatrix.elements,te=pt.projectionMatrix.elements,Le=kt[14]/(kt[10]-1),le=kt[14]/(kt[10]+1),G=(kt[9]+1)/kt[5],Ne=(kt[9]-1)/kt[5],Jt=(kt[8]-1)/kt[0],Ae=(te[8]+1)/te[0],It=Le*Jt,qe=Le*Ae,Ft=Dt/(-Jt+Ae),ce=Ft*-Jt;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ce),et.translateZ(Ft),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),kt[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Je=Le+Ft,$e=le+Ft,L=It-ce,b=qe+(Dt-ce),nt=G*le/$e*Je,ft=Ne*le/$e*Je;et.projectionMatrix.makePerspective(L,b,nt,ft,Je,$e),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let dt=et.near,pt=et.far;A.texture!==null&&(A.depthNear>0&&(dt=A.depthNear),A.depthFar>0&&(pt=A.depthFar)),I.near=C.near=H.near=dt,I.far=C.far=H.far=pt,(tt!==I.near||it!==I.far)&&(l.updateRenderState({depthNear:I.near,depthFar:I.far}),tt=I.near,it=I.far),I.layers.mask=et.layers.mask|6,H.layers.mask=I.layers.mask&3,C.layers.mask=I.layers.mask&5;const Dt=et.parent,kt=I.cameras;U(I,Dt);for(let te=0;te<kt.length;te++)U(kt[te],Dt);kt.length===2?yt(I,H,C):I.projectionMatrix.copy(H.projectionMatrix),Q(et,I,Dt)};function Q(et,dt,pt){pt===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(pt.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Nh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(I)},this.getCameraTexture=function(et){return S[et]};let _t=null;function gt(et,dt){if(g=dt.getViewerPose(p||d),E=dt,g!==null){const pt=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Dt=!1;pt.length!==I.cameras.length&&(I.cameras.length=0,Dt=!0);for(let le=0;le<pt.length;le++){const G=pt[le];let Ne=null;if(y!==null)Ne=y.getViewport(G);else{const Ae=v.getViewSubImage(x,G);Ne=Ae.viewport,le===0&&(t.setRenderTargetTextures(N,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(N))}let Jt=D[le];Jt===void 0&&(Jt=new ii,Jt.layers.enable(le),Jt.viewport=new ke,D[le]=Jt),Jt.matrix.fromArray(G.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(G.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),le===0&&(I.matrix.copy(Jt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Dt===!0&&I.cameras.push(Jt)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const le=v.getDepthInformation(pt[0]);le&&le.isValid&&le.texture&&A.init(le,l.renderState)}if(kt&&kt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let le=0;le<pt.length;le++){const G=pt[le].camera;if(G){let Ne=S[G];Ne||(Ne=new bv,S[G]=Ne);const Jt=v.getCameraImage(G);Ne.sourceTexture=Jt}}}for(let pt=0;pt<w.length;pt++){const Dt=z[pt],kt=w[pt];Dt!==null&&kt!==void 0&&kt.update(Dt,dt,p||d)}_t&&_t(et,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Mt=new xv;Mt.setAnimationLoop(gt),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const xr=new Gi,r1=new Qe;function s1(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,fv(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,F,N,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,w)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,F,N):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Yn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Yn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const F=t.get(_),N=F.envMap,w=F.envMapRotation;N&&(S.envMap.value=N,xr.copy(w),xr.x*=-1,xr.y*=-1,xr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),S.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(xr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,F,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*F,S.scale.value=N*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,F){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const F=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function o1(s,t,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const w=N.program;r.uniformBlockBinding(F,w)}function p(F,N){let w=l[F.id];w===void 0&&(E(F),w=g(F),l[F.id]=w,F.addEventListener("dispose",S));const z=N.program;r.updateUBOMapping(F,z);const V=t.render.frame;c[F.id]!==V&&(x(F),c[F.id]=V)}function g(F){const N=v();F.__bindingPointIndex=N;const w=s.createBuffer(),z=F.__size,V=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,z,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,w),w}function v(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const N=l[F.id],w=F.uniforms,z=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let V=0,k=w.length;V<k;V++){const H=Array.isArray(w[V])?w[V]:[w[V]];for(let C=0,D=H.length;C<D;C++){const I=H[C];if(y(I,V,C,z)===!0){const tt=I.__offset,it=Array.isArray(I.value)?I.value:[I.value];let ct=0;for(let lt=0;lt<it.length;lt++){const O=it[lt],q=A(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,tt+ct,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,ct),ct+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,tt,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(F,N,w,z){const V=F.value,k=N+"_"+w;if(z[k]===void 0)return typeof V=="number"||typeof V=="boolean"?z[k]=V:z[k]=V.clone(),!0;{const H=z[k];if(typeof V=="number"||typeof V=="boolean"){if(H!==V)return z[k]=V,!0}else if(H.equals(V)===!1)return H.copy(V),!0}return!1}function E(F){const N=F.uniforms;let w=0;const z=16;for(let k=0,H=N.length;k<H;k++){const C=Array.isArray(N[k])?N[k]:[N[k]];for(let D=0,I=C.length;D<I;D++){const tt=C[D],it=Array.isArray(tt.value)?tt.value:[tt.value];for(let ct=0,lt=it.length;ct<lt;ct++){const O=it[ct],q=A(O),B=w%z,yt=B%q.boundary,U=B+yt;w+=yt,U!==0&&z-U<q.storage&&(w+=z-U),tt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=w,w+=q.storage}}}const V=w%z;return V>0&&(w+=z-V),F.__size=w,F.__cache={},this}function A(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function S(F){const N=F.target;N.removeEventListener("dispose",S);const w=d.indexOf(N.__bindingPointIndex);d.splice(w,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const F in l)s.deleteBuffer(l[F]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}class l1{constructor(t={}){const{canvas:i=IS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const F=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let z=!1;this._outputColorSpace=pi;let V=0,k=0,H=null,C=-1,D=null;const I=new ke,tt=new ke;let it=null;const ct=new Te(0);let lt=0,O=i.width,q=i.height,B=1,yt=null,U=null;const Q=new ke(0,0,O,q),_t=new ke(0,0,O,q);let gt=!1;const Mt=new Kh;let et=!1,dt=!1;const pt=new Qe,Dt=new K,kt=new ke,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function le(){return H===null?B:1}let G=r;function Ne(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hh}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),G===null){const Y="webgl2";if(G=Ne(Y,R),G===null)throw Ne(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Jt,Ae,It,qe,Ft,ce,Je,$e,L,b,nt,ft,St,ut,Pt,Rt,qt,jt,Et,Lt,Kt,Wt,Ct,oe;function W(){Jt=new vT(G),Jt.init(),Wt=new t1(G,Jt),Ae=new fT(G,Jt,t,Wt),It=new JA(G,Jt),Ae.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),qe=new ST(G),Ft=new FA,ce=new $A(G,Jt,It,Ft,Ae,Wt,qe),Je=new hT(w),$e=new _T(w),L=new RM(G),Ct=new cT(G,L),b=new xT(G,L,qe,Ct),nt=new ET(G,b,L,qe),Et=new MT(G,Ae,ce),Rt=new dT(Ft),ft=new IA(w,Je,$e,Jt,Ae,Ct,Rt),St=new s1(w,Ft),ut=new GA,Pt=new YA(Jt),jt=new lT(w,Je,$e,It,nt,y,m),qt=new KA(w,nt,Ae),oe=new o1(G,qe,Ae,It),Lt=new uT(G,Jt,qe),Kt=new yT(G,Jt,qe),qe.programs=ft.programs,w.capabilities=Ae,w.extensions=Jt,w.properties=Ft,w.renderLists=ut,w.shadowMap=qt,w.state=It,w.info=qe}W();const At=new a1(w,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(O,q,!1))},this.getSize=function(R){return R.set(O,q)},this.setSize=function(R,Y,st=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,q=Y,i.width=Math.floor(R*B),i.height=Math.floor(Y*B),st===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(O*B,q*B).floor()},this.setDrawingBufferSize=function(R,Y,st){O=R,q=Y,B=st,i.width=Math.floor(R*st),i.height=Math.floor(Y*st),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,Y,st,ot){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,Y,st,ot),It.viewport(I.copy(Q).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,Y,st,ot){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,Y,st,ot),It.scissor(tt.copy(_t).multiplyScalar(B).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){It.setScissorTest(gt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,st=!0){let ot=0;if(R){let Z=!1;if(H!==null){const Tt=H.texture.format;Z=Tt===Yh||Tt===qh||Tt===Wh}if(Z){const Tt=H.texture.type,Ut=Tt===Hi||Tt===Rr||Tt===Zo||Tt===Ko||Tt===kh||Tt===Xh,Bt=jt.getClearColor(),Nt=jt.getClearAlpha(),$t=Bt.r,ne=Bt.g,Yt=Bt.b;Ut?(E[0]=$t,E[1]=ne,E[2]=Yt,E[3]=Nt,G.clearBufferuiv(G.COLOR,0,E)):(A[0]=$t,A[1]=ne,A[2]=Yt,A[3]=Nt,G.clearBufferiv(G.COLOR,0,A))}else ot|=G.COLOR_BUFFER_BIT}Y&&(ot|=G.DEPTH_BUFFER_BIT),st&&(ot|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),jt.dispose(),ut.dispose(),Pt.dispose(),Ft.dispose(),Je.dispose(),$e.dispose(),nt.dispose(),Ct.dispose(),oe.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",dn),At.removeEventListener("sessionend",hn),en.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=qe.autoReset,Y=qt.enabled,st=qt.autoUpdate,ot=qt.needsUpdate,Z=qt.type;W(),qe.autoReset=R,qt.enabled=Y,qt.autoUpdate=st,qt.needsUpdate=ot,qt.type=Z}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const Y=R.target;Y.removeEventListener("dispose",xt),Xt(Y)}function Xt(R){re(R),Ft.remove(R)}function re(R){const Y=Ft.get(R).programs;Y!==void 0&&(Y.forEach(function(st){ft.releaseProgram(st)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,st,ot,Z,Tt){Y===null&&(Y=te);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Bt=ha(R,Y,st,ot,Z);It.setMaterial(ot,Ut);let Nt=st.index,$t=1;if(ot.wireframe===!0){if(Nt=b.getWireframeAttribute(st),Nt===void 0)return;$t=2}const ne=st.drawRange,Yt=st.attributes.position;let de=ne.start*$t,we=(ne.start+ne.count)*$t;Tt!==null&&(de=Math.max(de,Tt.start*$t),we=Math.min(we,(Tt.start+Tt.count)*$t)),Nt!==null?(de=Math.max(de,0),we=Math.min(we,Nt.count)):Yt!=null&&(de=Math.max(de,0),we=Math.min(we,Yt.count));const Ze=we-de;if(Ze<0||Ze===1/0)return;Ct.setup(Z,ot,Bt,st,Nt);let Be,he=Lt;if(Nt!==null&&(Be=L.get(Nt),he=Kt,he.setIndex(Be)),Z.isMesh)ot.wireframe===!0?(It.setLineWidth(ot.wireframeLinewidth*le()),he.setMode(G.LINES)):he.setMode(G.TRIANGLES);else if(Z.isLine){let Qt=ot.linewidth;Qt===void 0&&(Qt=1),It.setLineWidth(Qt*le()),Z.isLineSegments?he.setMode(G.LINES):Z.isLineLoop?he.setMode(G.LINE_LOOP):he.setMode(G.LINE_STRIP)}else Z.isPoints?he.setMode(G.POINTS):Z.isSprite&&he.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))he.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,je=Z._multiDrawCounts,xe=Z._multiDrawCount,Cn=Nt?L.get(Nt).bytesPerElement:1,vi=Ft.get(ot).currentProgram.getUniforms();for(let zn=0;zn<xe;zn++)vi.setValue(G,"_gl_DrawID",zn),he.render(Qt[zn]/Cn,je[zn])}else if(Z.isInstancedMesh)he.renderInstances(de,Ze,Z.count);else if(st.isInstancedBufferGeometry){const Qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,je=Math.min(st.instanceCount,Qt);he.renderInstances(de,Ze,je)}else he.render(de,Ze)};function Oe(R,Y,st){R.transparent===!0&&R.side===zi&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Ci(R,Y,st),R.side=Za,R.needsUpdate=!0,Ci(R,Y,st),R.side=zi):Ci(R,Y,st)}this.compile=function(R,Y,st=null){st===null&&(st=R),_=Pt.get(st),_.init(Y),N.push(_),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const ot=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Bt=Tt[Ut];Oe(Bt,st,Z),ot.add(Bt)}else Oe(Tt,st,Z),ot.add(Tt)}),_=N.pop(),ot},this.compileAsync=function(R,Y,st=null){const ot=this.compile(R,Y,st);return new Promise(Z=>{function Tt(){if(ot.forEach(function(Ut){Ft.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){Z(R);return}setTimeout(Tt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Re=null;function _i(R){Re&&Re(R)}function dn(){en.stop()}function hn(){en.start()}const en=new xv;en.setAnimationLoop(_i),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(R){Re=R,At.setAnimationLoop(R),R===null?en.stop():en.start()},At.addEventListener("sessionstart",dn),At.addEventListener("sessionend",hn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,H),_=Pt.get(R,N.length),_.init(Y),N.push(_),pt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Mt.setFromProjectionMatrix(pt,Fi,Y.reversedDepth),dt=this.localClippingEnabled,et=Rt.init(this.clippingPlanes,dt),S=ut.get(R,F.length),S.init(),F.push(S),At.enabled===!0&&At.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&wi(Tt,Y,-1/0,w.sortObjects)}wi(R,Y,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(yt,U),Le=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Le&&jt.addToRenderList(S,R),this.info.render.frame++,et===!0&&Rt.beginShadows();const st=_.state.shadowsArray;qt.render(st,R,Y),et===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,Z=S.transmissive;if(_.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(Z.length>0)for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Nt=Tt[Ut];al(ot,Z,R,Nt)}Le&&jt.render(R);for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Nt=Tt[Ut];Dr(S,R,Nt,Nt.viewport)}}else Z.length>0&&al(ot,Z,R,Y),Le&&jt.render(R),Dr(S,R,Y);H!==null&&k===0&&(ce.updateMultisampleRenderTarget(H),ce.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(w,R,Y),Ct.resetDefaultState(),C=-1,D=null,N.pop(),N.length>0?(_=N[N.length-1],et===!0&&Rt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function wi(R,Y,st,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Mt.intersectsSprite(R)){ot&&kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const Ut=nt.update(R),Bt=R.material;Bt.visible&&S.push(R,Ut,Bt,st,kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Mt.intersectsObject(R))){const Ut=nt.update(R),Bt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),kt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),kt.copy(Ut.boundingSphere.center)),kt.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Bt)){const Nt=Ut.groups;for(let $t=0,ne=Nt.length;$t<ne;$t++){const Yt=Nt[$t],de=Bt[Yt.materialIndex];de&&de.visible&&S.push(R,Ut,de,st,kt.z,Yt)}}else Bt.visible&&S.push(R,Ut,Bt,st,kt.z,null)}}const Tt=R.children;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++)wi(Tt[Ut],Y,st,ot)}function Dr(R,Y,st,ot){const Z=R.opaque,Tt=R.transmissive,Ut=R.transparent;_.setupLightsView(st),et===!0&&Rt.setGlobalState(w.clippingPlanes,st),ot&&It.viewport(I.copy(ot)),Z.length>0&&Ur(Z,Y,st),Tt.length>0&&Ur(Tt,Y,st),Ut.length>0&&Ur(Ut,Y,st),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function al(R,Y,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new wr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?$o:Hi,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||I;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Bt=w.getRenderTarget(),Nt=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(ct),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Le&&jt.render(st);const ne=w.toneMapping;w.toneMapping=Ya;const Yt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),et===!0&&Rt.setGlobalState(w.clippingPlanes,ot),Ur(R,st,ot),ce.updateMultisampleRenderTarget(Tt),ce.updateRenderTargetMipmap(Tt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let we=0,Ze=Y.length;we<Ze;we++){const Be=Y[we],he=Be.object,Qt=Be.geometry,je=Be.material,xe=Be.group;if(je.side===zi&&he.layers.test(ot.layers)){const Cn=je.side;je.side=Yn,je.needsUpdate=!0,ks(he,st,ot,Qt,je,xe),je.side=Cn,je.needsUpdate=!0,de=!0}}de===!0&&(ce.updateMultisampleRenderTarget(Tt),ce.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Bt,Nt,$t),w.setClearColor(ct,lt),Yt!==void 0&&(ot.viewport=Yt),w.toneMapping=ne}function Ur(R,Y,st){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Tt=R.length;Z<Tt;Z++){const Ut=R[Z],Bt=Ut.object,Nt=Ut.geometry,$t=Ut.group;let ne=Ut.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),Bt.layers.test(st.layers)&&ks(Bt,Y,st,Nt,ne,$t)}}function ks(R,Y,st,ot,Z,Tt){R.onBeforeRender(w,Y,st,ot,Z,Tt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,Y,st,ot,R,Tt),Z.transparent===!0&&Z.side===zi&&Z.forceSinglePass===!1?(Z.side=Yn,Z.needsUpdate=!0,w.renderBufferDirect(st,Y,ot,Z,R,Tt),Z.side=Za,Z.needsUpdate=!0,w.renderBufferDirect(st,Y,ot,Z,R,Tt),Z.side=zi):w.renderBufferDirect(st,Y,ot,Z,R,Tt),R.onAfterRender(w,Y,st,ot,Z,Tt)}function Ci(R,Y,st){Y.isScene!==!0&&(Y=te);const ot=Ft.get(R),Z=_.state.lights,Tt=_.state.shadowsArray,Ut=Z.state.version,Bt=ft.getParameters(R,Z.state,Tt,Y,st),Nt=ft.getProgramCacheKey(Bt);let $t=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?$e:Je).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",xt),$t=new Map,ot.programs=$t);let ne=$t.get(Nt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Ut)return Vi(R,Bt),ne}else Bt.uniforms=ft.getUniforms(R),R.onBeforeCompile(Bt,w),ne=ft.acquireProgram(Bt,Nt),$t.set(Nt,ne),ot.uniforms=Bt.uniforms;const Yt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=Rt.uniform),Vi(R,Bt),ot.needsLights=pa(R),ot.lightsStateVersion=Ut,ot.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.directionalShadowMap.value=Z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotShadowMap.value=Z.state.spotShadowMap,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMap.value=Z.state.pointShadowMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function Lr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Yc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Vi(R,Y){const st=Ft.get(R);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function ha(R,Y,st,ot,Z){Y.isScene!==!0&&(Y=te),ce.resetTextureUnits();const Tt=Y.fog,Ut=ot.isMeshStandardMaterial?Y.environment:null,Bt=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Bs,Nt=(ot.isMeshStandardMaterial?$e:Je).get(ot.envMap||Ut),$t=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ne=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Yt=!!st.morphAttributes.position,de=!!st.morphAttributes.normal,we=!!st.morphAttributes.color;let Ze=Ya;ot.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ze=w.toneMapping);const Be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,he=Be!==void 0?Be.length:0,Qt=Ft.get(ot),je=_.state.lights;if(et===!0&&(dt===!0||R!==D)){const nn=R===D&&ot.id===C;Rt.setState(ot,R,nn)}let xe=!1;ot.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==je.state.version||Qt.outputColorSpace!==Bt||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Nt||ot.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==$t||Qt.vertexTangents!==ne||Qt.morphTargets!==Yt||Qt.morphNormals!==de||Qt.morphColors!==we||Qt.toneMapping!==Ze||Qt.morphTargetsCount!==he)&&(xe=!0):(xe=!0,Qt.__version=ot.version);let Cn=Qt.currentProgram;xe===!0&&(Cn=Ci(ot,Y,Z));let vi=!1,zn=!1,yn=!1;const Xe=Cn.getUniforms(),Bn=Qt.uniforms;if(It.useProgram(Cn.program)&&(vi=!0,zn=!0,yn=!0),ot.id!==C&&(C=ot.id,zn=!0),vi||D!==R){It.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xe.setValue(G,"projectionMatrix",R.projectionMatrix),Xe.setValue(G,"viewMatrix",R.matrixWorldInverse);const Tn=Xe.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,Dt.setFromMatrixPosition(R.matrixWorld)),Ae.logarithmicDepthBuffer&&Xe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Xe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,zn=!0,yn=!0)}if(Z.isSkinnedMesh){Xe.setOptional(G,Z,"bindMatrix"),Xe.setOptional(G,Z,"bindMatrixInverse");const nn=Z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Xe.setValue(G,"boneTexture",nn.boneTexture,ce))}Z.isBatchedMesh&&(Xe.setOptional(G,Z,"batchingTexture"),Xe.setValue(G,"batchingTexture",Z._matricesTexture,ce),Xe.setOptional(G,Z,"batchingIdTexture"),Xe.setValue(G,"batchingIdTexture",Z._indirectTexture,ce),Xe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Xe.setValue(G,"batchingColorTexture",Z._colorsTexture,ce));const Dn=st.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Et.update(Z,st,Cn),(zn||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Xe.setValue(G,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Bn.envMap.value=Nt,Bn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Bn.envMapIntensity.value=Y.environmentIntensity),zn&&(Xe.setValue(G,"toneMappingExposure",w.toneMappingExposure),Qt.needsLights&&Qa(Bn,yn),Tt&&ot.fog===!0&&St.refreshFogUniforms(Bn,Tt),St.refreshMaterialUniforms(Bn,ot,B,q,_.state.transmissionRenderTarget[R.id]),Yc.upload(G,Lr(Qt),Bn,ce)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Yc.upload(G,Lr(Qt),Bn,ce),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Xe.setValue(G,"center",Z.center),Xe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Xe.setValue(G,"normalMatrix",Z.normalMatrix),Xe.setValue(G,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let Tn=0,Nr=nn.length;Tn<Nr;Tn++){const Vn=nn[Tn];oe.update(Vn,Cn),oe.bind(Vn,Cn)}}return Cn}function Qa(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function pa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,Y,st){const ot=Ft.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=Y,Ft.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const st=Ft.get(R);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const ln=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,st=0){H=R,V=Y,k=st;let ot=!0,Z=null,Tt=!1,Ut=!1;if(R){const Nt=Ft.get(R);if(Nt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(G.FRAMEBUFFER,null),ot=!1;else if(Nt.__webglFramebuffer===void 0)ce.setupRenderTarget(R);else if(Nt.__hasExternalTextures)ce.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Yt=R.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Ft.has(Yt)&&(R.width!==Yt.image.width||R.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const ne=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?Z=ne[Y][st]:Z=ne[Y],Tt=!0):R.samples>0&&ce.useMultisampledRTT(R)===!1?Z=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Z=ne[st]:Z=ne,I.copy(R.viewport),tt.copy(R.scissor),it=R.scissorTest}else I.copy(Q).multiplyScalar(B).floor(),tt.copy(_t).multiplyScalar(B).floor(),it=gt;if(st!==0&&(Z=ln),It.bindFramebuffer(G.FRAMEBUFFER,Z)&&ot&&It.drawBuffers(R,Z),It.viewport(I),It.scissor(tt),It.setScissorTest(it),Tt){const Nt=Ft.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,st)}else if(Ut){const Nt=Y;for(let $t=0;$t<R.textures.length;$t++){const ne=Ft.get(R.textures[$t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+$t,ne.__webglTexture,st,Nt)}}else if(R!==null&&st!==0){const Nt=Ft.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,st)}C=-1},this.readRenderTargetPixels=function(R,Y,st,ot,Z,Tt,Ut,Bt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){It.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const $t=R.textures[Bt],ne=$t.format,Yt=$t.type;if(!Ae.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&st>=0&&st<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Bt),G.readPixels(Y,st,ot,Z,Wt.convert(ne),Wt.convert(Yt),Tt))}finally{const $t=H!==null?Ft.get(H).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,Y,st,ot,Z,Tt,Ut,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(Y>=0&&Y<=R.width-ot&&st>=0&&st<=R.height-Z){It.bindFramebuffer(G.FRAMEBUFFER,Nt);const $t=R.textures[Bt],ne=$t.format,Yt=$t.type;if(!Ae.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Bt),G.readPixels(Y,st,ot,Z,Wt.convert(ne),Wt.convert(Yt),0);const we=H!==null?Ft.get(H).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,we);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await FS(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(de),G.deleteSync(Ze),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,st=0){const ot=Math.pow(2,-st),Z=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Ut=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;ce.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ut,Bt,Z,Tt),It.unbindTexture()};const rl=G.createFramebuffer(),sl=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,st=null,ot=null,Z=0,Tt=null){Tt===null&&(Z!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Ut,Bt,Nt,$t,ne,Yt,de,we,Ze;const Be=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(st!==null)Ut=st.max.x-st.min.x,Bt=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ne=st.min.y,Yt=st.isBox3?st.min.z:0;else{const Dn=Math.pow(2,-Z);Ut=Math.floor(Be.width*Dn),Bt=Math.floor(Be.height*Dn),R.isDataArrayTexture?Nt=Be.depth:R.isData3DTexture?Nt=Math.floor(Be.depth*Dn):Nt=1,$t=0,ne=0,Yt=0}ot!==null?(de=ot.x,we=ot.y,Ze=ot.z):(de=0,we=0,Ze=0);const he=Wt.convert(Y.format),Qt=Wt.convert(Y.type);let je;Y.isData3DTexture?(ce.setTexture3D(Y,0),je=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ce.setTexture2DArray(Y,0),je=G.TEXTURE_2D_ARRAY):(ce.setTexture2D(Y,0),je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const xe=G.getParameter(G.UNPACK_ROW_LENGTH),Cn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),vi=G.getParameter(G.UNPACK_SKIP_PIXELS),zn=G.getParameter(G.UNPACK_SKIP_ROWS),yn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Be.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Be.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$t),G.pixelStorei(G.UNPACK_SKIP_ROWS,ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yt);const Xe=R.isDataArrayTexture||R.isData3DTexture,Bn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Dn=Ft.get(R),nn=Ft.get(Y),Tn=Ft.get(Dn.__renderTarget),Nr=Ft.get(nn.__renderTarget);It.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Vn=0;Vn<Nt;Vn++)Xe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Z,Yt+Vn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(Y).__webglTexture,Tt,Ze+Vn)),G.blitFramebuffer($t,ne,Ut,Bt,de,we,Ut,Bt,G.DEPTH_BUFFER_BIT,G.NEAREST);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ft.has(R)){const Dn=Ft.get(R),nn=Ft.get(Y);It.bindFramebuffer(G.READ_FRAMEBUFFER,rl),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,sl);for(let Tn=0;Tn<Nt;Tn++)Xe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dn.__webglTexture,Z,Yt+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dn.__webglTexture,Z),Bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,nn.__webglTexture,Tt,Ze+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,nn.__webglTexture,Tt),Z!==0?G.blitFramebuffer($t,ne,Ut,Bt,de,we,Ut,Bt,G.COLOR_BUFFER_BIT,G.NEAREST):Bn?G.copyTexSubImage3D(je,Tt,de,we,Ze+Tn,$t,ne,Ut,Bt):G.copyTexSubImage2D(je,Tt,de,we,$t,ne,Ut,Bt);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(je,Tt,de,we,Ze,Ut,Bt,Nt,he,Qt,Be.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(je,Tt,de,we,Ze,Ut,Bt,Nt,he,Be.data):G.texSubImage3D(je,Tt,de,we,Ze,Ut,Bt,Nt,he,Qt,Be):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,de,we,Ut,Bt,he,Qt,Be.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,de,we,Be.width,Be.height,he,Be.data):G.texSubImage2D(G.TEXTURE_2D,Tt,de,we,Ut,Bt,he,Qt,Be);G.pixelStorei(G.UNPACK_ROW_LENGTH,xe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Cn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,zn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,yn),Tt===0&&Y.generateMipmaps&&G.generateMipmap(je),It.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,st=null,ot=null,Z=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,st,ot,Z)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&ce.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ce.setTextureCube(R,0):R.isData3DTexture?ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ce.setTexture2DArray(R,0):ce.setTexture2D(R,0),It.unbindTexture()},this.resetState=function(){V=0,k=0,H=null,It.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const c1=({camera:s,renderer:t,planets:i,onLocationChange:r})=>{const l=Me.useRef({isMouseDown:!1,mouseX:0,mouseY:0,targetX:0,targetY:0,distance:50,targetDistance:50,focusTarget:null,isAnimating:!1});return Me.useEffect(()=>{if(!s||!t)return;const c=l.current;s.position.set(0,0,c.distance),s.lookAt(0,0,0);const d=y=>{c.isMouseDown=!0,c.mouseX=y.clientX,c.mouseY=y.clientY},h=()=>{c.isMouseDown=!1},m=y=>{if(!c.isMouseDown||c.isAnimating)return;const E=y.clientX-c.mouseX,A=y.clientY-c.mouseY;c.targetX+=E*.01,c.targetY+=A*.01,c.targetY=Math.max(-Math.PI/2,Math.min(Math.PI/2,c.targetY)),c.mouseX=y.clientX,c.mouseY=y.clientY,g()},p=y=>{if(y.preventDefault(),c.isAnimating)return;const E=1+y.deltaY*.001;c.targetDistance*=E;let A=5,S=200;if(c.focusTarget){const _=i[c.focusTarget];_&&(A=_.radius*2.5,S=_.radius*50)}c.targetDistance=Math.max(A,Math.min(S,c.targetDistance))},g=()=>{if(c.focusTarget&&i[c.focusTarget]){const E=i[c.focusTarget].mesh.position.clone(),A=E.x+c.distance*Math.cos(c.targetY)*Math.cos(c.targetX),S=E.y+c.distance*Math.sin(c.targetY),_=E.z+c.distance*Math.cos(c.targetY)*Math.sin(c.targetX);s.position.set(A,S,_),s.lookAt(E)}else{const y=c.distance*Math.cos(c.targetY)*Math.cos(c.targetX),E=c.distance*Math.sin(c.targetY),A=c.distance*Math.cos(c.targetY)*Math.sin(c.targetX);s.position.set(y,E,A),s.lookAt(0,0,0)}},v=()=>{const y=c.targetDistance-c.distance;Math.abs(y)>.1&&(c.distance+=y*.1,g()),requestAnimationFrame(v)};v();const x=t.domElement;return x.addEventListener("mousedown",d),x.addEventListener("mouseup",h),x.addEventListener("mousemove",m),x.addEventListener("wheel",p,{passive:!1}),()=>{x.removeEventListener("mousedown",d),x.removeEventListener("mouseup",h),x.removeEventListener("mousemove",m),x.removeEventListener("wheel",p)}},[s,t,i]),Me.useEffect(()=>{s&&t&&(window.focusOnPlanet=c=>{const d=l.current;if(c==="Sun"||c==="Solar System"){d.focusTarget=null,d.targetDistance=50,d.targetX=0,d.targetY=0,d.isAnimating=!0;const h=s.position.clone(),m=new K(0,0,50),p=Date.now(),g=2e3,v=()=>{const x=Date.now()-p,y=Math.min(x/g,1),E=1-Math.pow(1-y,3);s.position.lerpVectors(h,m,E),s.lookAt(0,0,0),y<1?requestAnimationFrame(v):(d.isAnimating=!1,d.distance=50)};v(),r==null||r(c)}else if(i[c]){d.focusTarget=c;const h=i[c];d.targetDistance=h.radius*5,d.isAnimating=!0;const m=s.position.clone(),p=h.mesh.position.clone(),g=new K(0,0,d.targetDistance);p.clone().add(g);const v=Date.now(),x=2e3,y=()=>{const E=Date.now()-v,A=Math.min(E/x,1),S=1-Math.pow(1-A,3),_=h.mesh.position.clone(),F=_.clone().add(g);s.position.lerpVectors(m,F,S),s.lookAt(_),A<1?requestAnimationFrame(y):(d.isAnimating=!1,d.distance=d.targetDistance)};y(),r==null||r(c)}})},[s,t,i,r]),null},u1={radius_km:6371,distance_from_sun_au:1,orbital_period_earth_days:365,rotation_period_hours:23.93},f1={radius_km:1737.4,distance_from_earth_km:384400,orbital_period_earth_days:27.3,rotation_period_earth_days:27.3},d1={radius_km:3389.5,distance_from_sun_au:1.52,orbital_period_earth_days:687,rotation_period_hours:24.62},h1={radius_km:6051.8,distance_from_sun_au:.72,orbital_period_earth_days:225,rotation_period_earth_days:243},p1={radius_km:2439.7,distance_from_sun_au:.39,orbital_period_earth_days:88,rotation_period_earth_days:58.67},m1={radius_km:69911,distance_from_sun_au:5.2,orbital_period_earth_days:4333,rotation_period_hours:9.92},g1={radius_km:58232,distance_from_sun_au:9.5,orbital_period_earth_days:10759,rotation_period_hours:10.55},_1={radius_km:25362,distance_from_sun_au:19.8,orbital_period_earth_days:30687,rotation_period_hours:17.23},v1={radius_km:24622,distance_from_sun_au:30,orbital_period_earth_days:60190,rotation_period_hours:16.1},x1={Earth:u1,Moon:f1,Mars:d1,Venus:h1,Mercury:p1,Jupiter:m1,Saturn:g1,Uranus:_1,Neptune:v1},y1=Me.forwardRef(({onLocationChange:s},t)=>{const i=Me.useRef(null),r=Me.useRef(null),l=Me.useRef(null),c=Me.useRef(null),d=Me.useRef({}),h=Me.useRef(null);Me.useEffect(()=>{if(!i.current)return;const p=new uM;p.background=new Te(8),r.current=p;const g=new gi,v=15e3,x=new Float32Array(v*3),y=new Float32Array(v*3);for(let tt=0;tt<v;tt++){x[tt*3]=(Math.random()-.5)*2e3,x[tt*3+1]=(Math.random()-.5)*2e3,x[tt*3+2]=(Math.random()-.5)*2e3;const it=Math.random();it<.7?(y[tt*3]=1,y[tt*3+1]=1,y[tt*3+2]=1):it<.85?(y[tt*3]=.7,y[tt*3+1]=.8,y[tt*3+2]=1):(y[tt*3]=1,y[tt*3+1]=.7,y[tt*3+2]=.5)}g.setAttribute("position",new ai(x,3)),g.setAttribute("color",new ai(y,3));const E=new gv({size:.8,vertexColors:!0,transparent:!0,opacity:.8}),A=new gM(g,E);p.add(A);const S=new ii(75,window.innerWidth/window.innerHeight,.1,1e4);c.current=S;const _=new l1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1});_.setSize(window.innerWidth,window.innerHeight),_.shadowMap.enabled=!1,_.toneMapping=q0,_.toneMappingExposure=1.2,l.current=_,i.current.appendChild(_.domElement);const F=new bM(4210752,.1);p.add(F);const N=new MM(16775388,3,0);N.position.set(0,0,0),p.add(N);const w=new Ti(8,64,64),z=new Zh({color:16775388}),V=new _n(w,z);p.add(V),d.current.Sun={mesh:V,radius:8,distance:0,angle:0};const k=50,H=.5,C={Mercury:{color:9205843,emissive:0},Venus:{color:16762441,emissive:3351040},Earth:{color:7050198,emissive:4386},Mars:{color:13458524,emissive:2228224},Jupiter:{color:13808780,emissive:2232576},Saturn:{color:16438693,emissive:2232576},Uranus:{color:5230823,emissive:4386},Neptune:{color:4944093,emissive:34}};Object.entries(x1).forEach(([tt,it])=>{if(tt==="Moon")return;const ct=Math.max(it.radius_km*H*.001,.2),lt=it.distance_from_sun_au*k,O=C[tt],q=new Ti(ct,32,32),B=new la({color:O.color});tt==="Earth"&&B.color.setHex(4286945),tt==="Jupiter"&&B.color.setHex(13808780);const yt=new _n(q,B);if(yt.position.x=lt,p.add(yt),tt==="Saturn"){const et=new Qh(ct*1.2,ct*2.2,32),dt=new la({color:12632256,side:zi,transparent:!0,opacity:.6}),pt=new _n(et,dt);pt.rotation.x=Math.PI/2,yt.add(pt)}d.current[tt]={mesh:yt,data:it,distance:lt,angle:0,radius:ct,moons:[]};const U=document.createElement("canvas"),Q=U.getContext("2d");U.width=256,U.height=64,Q.fillStyle="white",Q.font="bold 24px Arial",Q.textAlign="center",Q.fillText(tt,128,32);const _t=new _M(U),gt=new pv({map:_t}),Mt=new dM(gt);Mt.position.copy(yt.position),Mt.position.y+=ct*3,Mt.scale.set(ct*8,ct*2,1),p.add(Mt),d.current[tt].label=Mt}),m(p,d.current);const D=()=>{h.current=requestAnimationFrame(D),Object.entries(d.current).forEach(([tt,it])=>{if(tt==="Sun")return;const ct=.005/Math.sqrt(it.data.distance_from_sun_au);it.angle+=ct,it.mesh.position.x=Math.cos(it.angle)*it.distance,it.mesh.position.z=Math.sin(it.angle)*it.distance,it.label&&(it.label.position.copy(it.mesh.position),it.label.position.y+=it.radius*3),it.mesh.rotation.y+=.02,it.moons&&it.moons.forEach((lt,O)=>{lt.angle+=lt.speed;const q=it.mesh.position;lt.mesh.position.x=q.x+Math.cos(lt.angle)*lt.distance,lt.mesh.position.z=q.z+Math.sin(lt.angle)*lt.distance,lt.mesh.position.y=q.y+Math.sin(lt.angle*.5)*lt.distance*.1})}),_.render(p,S)};D();const I=()=>{S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I),h.current&&cancelAnimationFrame(h.current),i.current&&_.domElement&&i.current.removeChild(_.domElement),_.dispose()}},[]);function m(p,g){if(g.Earth){const y=new Ti(.15,32,32),E=new la({color:12632256}),A=new _n(y,E);p.add(A),g.Earth.moons.push({mesh:A,distance:3,angle:0,speed:.02,name:"Moon"})}if(g.Mars){const y=new Ti(.05,16,16),E=new la({color:6908265}),A=new _n(y,E);p.add(A);const S=.03,_=2.2,F=new Ti(S,16,16),N=new la({color:6908265}),w=new _n(F,N);p.add(w),g.Mars.moons.push({mesh:A,distance:1.5,angle:0,speed:.05,name:"Phobos"},{mesh:w,distance:_,angle:Math.PI,speed:.03,name:"Deimos"})}if(g.Jupiter&&[{name:"Io",radius:.12,distance:4,color:16777113,speed:.08},{name:"Europa",radius:.1,distance:5,color:15135743,speed:.06},{name:"Ganymede",radius:.15,distance:6.5,color:10506797,speed:.04},{name:"Callisto",radius:.13,distance:8,color:3100495,speed:.03}].forEach((x,y)=>{const E=new Ti(x.radius,24,24),A=new la({color:x.color}),S=new _n(E,A);p.add(S),g.Jupiter.moons.push({mesh:S,distance:x.distance,angle:y*Math.PI/2,speed:x.speed,name:x.name})}),g.Saturn&&[{name:"Titan",radius:.14,distance:7,color:13468991,speed:.025},{name:"Enceladus",radius:.08,distance:4.5,color:16777215,speed:.04}].forEach((x,y)=>{const E=new Ti(x.radius,24,24),A=new la({color:x.color}),S=new _n(E,A);p.add(S),g.Saturn.moons.push({mesh:S,distance:x.distance,angle:y*Math.PI,speed:x.speed,name:x.name})}),g.Uranus&&[{name:"Miranda",radius:.06,distance:3.5,color:6908265,speed:.06},{name:"Ariel",radius:.08,distance:4.5,color:13882323,speed:.04}].forEach((x,y)=>{const E=new Ti(x.radius,20,20),A=new la({color:x.color}),S=new _n(E,A);p.add(S),g.Uranus.moons.push({mesh:S,distance:x.distance,angle:y*Math.PI,speed:x.speed,name:x.name})}),g.Neptune){const y=new Ti(.11,24,24),E=new la({color:16770273}),A=new _n(y,E);p.add(A),g.Neptune.moons.push({mesh:A,distance:5,angle:0,speed:.03,name:"Triton"})}}return Me.useImperativeHandle(t,()=>({focusOnPlanet:p=>{window.focusOnPlanet&&window.focusOnPlanet(p)}})),se.jsx("div",{ref:i,className:"w-full h-screen",children:se.jsx(c1,{camera:c.current,renderer:l.current,planets:d.current,onLocationChange:s})})});function B0(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}function S1(...s){return t=>{let i=!1;const r=s.map(l=>{const c=B0(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():B0(s[l],null)}}}}function M1(...s){return Me.useCallback(S1(...s),s)}function E1(s){const t=T1(s),i=Me.forwardRef((r,l)=>{const{children:c,...d}=r,h=Me.Children.toArray(c),m=h.find(R1);if(m){const p=m.props.children,g=h.map(v=>v===m?Me.Children.count(p)>1?Me.Children.only(null):Me.isValidElement(p)?p.props.children:null:v);return se.jsx(t,{...d,ref:l,children:Me.isValidElement(p)?Me.cloneElement(p,void 0,g):null})}return se.jsx(t,{...d,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var b1=E1("Slot");function T1(s){const t=Me.forwardRef((i,r)=>{const{children:l,...c}=i,d=Me.isValidElement(l)?C1(l):void 0,h=M1(d,r);if(Me.isValidElement(l)){const m=w1(c,l.props);return l.type!==Me.Fragment&&(m.ref=h),Me.cloneElement(l,m)}return Me.Children.count(l)>1?Me.Children.only(null):null});return t.displayName=`${s}.SlotClone`,t}var A1=Symbol("radix.slottable");function R1(s){return Me.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===A1}function w1(s,t){const i={...t};for(const r in t){const l=s[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...h)=>{const m=c(...h);return l(...h),m}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function C1(s){var r,l;let t=(r=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?s.ref:(t=(l=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function Tv(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=Tv(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function Av(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=Tv(s))&&(r&&(r+=" "),r+=t);return r}const I0=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,F0=Av,D1=(s,t)=>i=>{var r;if((t==null?void 0:t.variants)==null)return F0(s,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,d=Object.keys(l).map(p=>{const g=i==null?void 0:i[p],v=c==null?void 0:c[p];if(g===null)return null;const x=I0(g)||I0(v);return l[p][x]}),h=i&&Object.entries(i).reduce((p,g)=>{let[v,x]=g;return x===void 0||(p[v]=x),p},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,g)=>{let{class:v,className:x,...y}=g;return Object.entries(y).every(E=>{let[A,S]=E;return Array.isArray(S)?S.includes({...c,...h}[A]):{...c,...h}[A]===S})?[...p,v,x]:p},[]);return F0(s,d,m,i==null?void 0:i.class,i==null?void 0:i.className)},$h="-",U1=s=>{const t=N1(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:d=>{const h=d.split($h);return h[0]===""&&h.length!==1&&h.shift(),Rv(h,t)||L1(d)},getConflictingClassGroupIds:(d,h)=>{const m=i[d]||[];return h&&r[d]?[...m,...r[d]]:m}}},Rv=(s,t)=>{var d;if(s.length===0)return t.classGroupId;const i=s[0],r=t.nextPart.get(i),l=r?Rv(s.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const c=s.join($h);return(d=t.validators.find(({validator:h})=>h(c)))==null?void 0:d.classGroupId},H0=/^\[(.+)\]$/,L1=s=>{if(H0.test(s)){const t=H0.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},N1=s=>{const{theme:t,classGroups:i}=s,r={nextPart:new Map,validators:[]};for(const l in i)zh(i[l],r,l,t);return r},zh=(s,t,i,r)=>{s.forEach(l=>{if(typeof l=="string"){const c=l===""?t:G0(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(O1(l)){zh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,d])=>{zh(d,G0(t,c),i,r)})})},G0=(s,t)=>{let i=s;return t.split($h).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},O1=s=>s.isThemeGetter,P1=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(c,d)=>{i.set(c,d),t++,t>s&&(t=0,r=i,i=new Map)};return{get(c){let d=i.get(c);if(d!==void 0)return d;if((d=r.get(c))!==void 0)return l(c,d),d},set(c,d){i.has(c)?i.set(c,d):l(c,d)}}},Bh="!",Ih=":",z1=Ih.length,B1=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const c=[];let d=0,h=0,m=0,p;for(let E=0;E<l.length;E++){let A=l[E];if(d===0&&h===0){if(A===Ih){c.push(l.slice(m,E)),m=E+z1;continue}if(A==="/"){p=E;continue}}A==="["?d++:A==="]"?d--:A==="("?h++:A===")"&&h--}const g=c.length===0?l:l.substring(m),v=I1(g),x=v!==g,y=p&&p>m?p-m:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:y}};if(t){const l=t+Ih,c=r;r=d=>d.startsWith(l)?c(d.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},I1=s=>s.endsWith(Bh)?s.substring(0,s.length-1):s.startsWith(Bh)?s.substring(1):s,F1=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let c=[];return r.forEach(d=>{d[0]==="["||t[d]?(l.push(...c.sort(),d),c=[]):c.push(d)}),l.push(...c.sort()),l}},H1=s=>({cache:P1(s.cacheSize),parseClassName:B1(s),sortModifiers:F1(s),...U1(s)}),G1=/\s+/,V1=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,d=[],h=s.trim().split(G1);let m="";for(let p=h.length-1;p>=0;p-=1){const g=h[p],{isExternal:v,modifiers:x,hasImportantModifier:y,baseClassName:E,maybePostfixModifierPosition:A}=i(g);if(v){m=g+(m.length>0?" "+m:m);continue}let S=!!A,_=r(S?E.substring(0,A):E);if(!_){if(!S){m=g+(m.length>0?" "+m:m);continue}if(_=r(E),!_){m=g+(m.length>0?" "+m:m);continue}S=!1}const F=c(x).join(":"),N=y?F+Bh:F,w=N+_;if(d.includes(w))continue;d.push(w);const z=l(_,S);for(let V=0;V<z.length;++V){const k=z[V];d.push(N+k)}m=g+(m.length>0?" "+m:m)}return m};function k1(){let s=0,t,i,r="";for(;s<arguments.length;)(t=arguments[s++])&&(i=wv(t))&&(r&&(r+=" "),r+=i);return r}const wv=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=wv(s[r]))&&(i&&(i+=" "),i+=t);return i};function X1(s,...t){let i,r,l,c=d;function d(m){const p=t.reduce((g,v)=>v(g),s());return i=H1(p),r=i.cache.get,l=i.cache.set,c=h,h(m)}function h(m){const p=r(m);if(p)return p;const g=V1(m,i);return l(m,g),g}return function(){return c(k1.apply(null,arguments))}}const gn=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},Cv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Dv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,W1=/^\d+\/\d+$/,q1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Y1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Z1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,K1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Cs=s=>W1.test(s),_e=s=>!!s&&!Number.isNaN(Number(s)),ka=s=>!!s&&Number.isInteger(Number(s)),Wd=s=>s.endsWith("%")&&_e(s.slice(0,-1)),ca=s=>q1.test(s),Q1=()=>!0,J1=s=>Y1.test(s)&&!j1.test(s),Uv=()=>!1,$1=s=>Z1.test(s),tR=s=>K1.test(s),eR=s=>!Gt(s)&&!Vt(s),nR=s=>Gs(s,Ov,Uv),Gt=s=>Cv.test(s),yr=s=>Gs(s,Pv,J1),qd=s=>Gs(s,oR,_e),V0=s=>Gs(s,Lv,Uv),iR=s=>Gs(s,Nv,tR),Hc=s=>Gs(s,zv,$1),Vt=s=>Dv.test(s),Yo=s=>Vs(s,Pv),aR=s=>Vs(s,lR),k0=s=>Vs(s,Lv),rR=s=>Vs(s,Ov),sR=s=>Vs(s,Nv),Gc=s=>Vs(s,zv,!0),Gs=(s,t,i)=>{const r=Cv.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},Vs=(s,t,i=!1)=>{const r=Dv.exec(s);return r?r[1]?t(r[1]):i:!1},Lv=s=>s==="position"||s==="percentage",Nv=s=>s==="image"||s==="url",Ov=s=>s==="length"||s==="size"||s==="bg-size",Pv=s=>s==="length",oR=s=>s==="number",lR=s=>s==="family-name",zv=s=>s==="shadow",cR=()=>{const s=gn("color"),t=gn("font"),i=gn("text"),r=gn("font-weight"),l=gn("tracking"),c=gn("leading"),d=gn("breakpoint"),h=gn("container"),m=gn("spacing"),p=gn("radius"),g=gn("shadow"),v=gn("inset-shadow"),x=gn("text-shadow"),y=gn("drop-shadow"),E=gn("blur"),A=gn("perspective"),S=gn("aspect"),_=gn("ease"),F=gn("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],z=()=>[...w(),Vt,Gt],V=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],H=()=>[Vt,Gt,m],C=()=>[Cs,"full","auto",...H()],D=()=>[ka,"none","subgrid",Vt,Gt],I=()=>["auto",{span:["full",ka,Vt,Gt]},ka,Vt,Gt],tt=()=>[ka,"auto",Vt,Gt],it=()=>["auto","min","max","fr",Vt,Gt],ct=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],lt=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...H()],q=()=>[Cs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...H()],B=()=>[s,Vt,Gt],yt=()=>[...w(),k0,V0,{position:[Vt,Gt]}],U=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Q=()=>["auto","cover","contain",rR,nR,{size:[Vt,Gt]}],_t=()=>[Wd,Yo,yr],gt=()=>["","none","full",p,Vt,Gt],Mt=()=>["",_e,Yo,yr],et=()=>["solid","dashed","dotted","double"],dt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pt=()=>[_e,Wd,k0,V0],Dt=()=>["","none",E,Vt,Gt],kt=()=>["none",_e,Vt,Gt],te=()=>["none",_e,Vt,Gt],Le=()=>[_e,Vt,Gt],le=()=>[Cs,"full",...H()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ca],breakpoint:[ca],color:[Q1],container:[ca],"drop-shadow":[ca],ease:["in","out","in-out"],font:[eR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ca],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ca],shadow:[ca],spacing:["px",_e],text:[ca],"text-shadow":[ca],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Cs,Gt,Vt,S]}],container:["container"],columns:[{columns:[_e,Gt,Vt,h]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:z()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[ka,"auto",Vt,Gt]}],basis:[{basis:[Cs,"full","auto",h,...H()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_e,Cs,"auto","initial","none",Gt]}],grow:[{grow:["",_e,Vt,Gt]}],shrink:[{shrink:["",_e,Vt,Gt]}],order:[{order:[ka,"first","last","none",Vt,Gt]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:I()}],"col-start":[{"col-start":tt()}],"col-end":[{"col-end":tt()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:I()}],"row-start":[{"row-start":tt()}],"row-end":[{"row-end":tt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":it()}],"auto-rows":[{"auto-rows":it()}],gap:[{gap:H()}],"gap-x":[{"gap-x":H()}],"gap-y":[{"gap-y":H()}],"justify-content":[{justify:[...ct(),"normal"]}],"justify-items":[{"justify-items":[...lt(),"normal"]}],"justify-self":[{"justify-self":["auto",...lt()]}],"align-content":[{content:["normal",...ct()]}],"align-items":[{items:[...lt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...lt(),{baseline:["","last"]}]}],"place-content":[{"place-content":ct()}],"place-items":[{"place-items":[...lt(),"baseline"]}],"place-self":[{"place-self":["auto",...lt()]}],p:[{p:H()}],px:[{px:H()}],py:[{py:H()}],ps:[{ps:H()}],pe:[{pe:H()}],pt:[{pt:H()}],pr:[{pr:H()}],pb:[{pb:H()}],pl:[{pl:H()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":H()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":H()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],w:[{w:[h,"screen",...q()]}],"min-w":[{"min-w":[h,"screen","none",...q()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",i,Yo,yr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Vt,qd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Wd,Gt]}],"font-family":[{font:[aR,Gt,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,Vt,Gt]}],"line-clamp":[{"line-clamp":[_e,"none",Vt,qd]}],leading:[{leading:[c,...H()]}],"list-image":[{"list-image":["none",Vt,Gt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Vt,Gt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...et(),"wavy"]}],"text-decoration-thickness":[{decoration:[_e,"from-font","auto",Vt,yr]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[_e,"auto",Vt,Gt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Vt,Gt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Vt,Gt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:yt()}],"bg-repeat":[{bg:U()}],"bg-size":[{bg:Q()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ka,Vt,Gt],radial:["",Vt,Gt],conic:[ka,Vt,Gt]},sR,iR]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:_t()}],"gradient-via-pos":[{via:_t()}],"gradient-to-pos":[{to:_t()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:gt()}],"rounded-s":[{"rounded-s":gt()}],"rounded-e":[{"rounded-e":gt()}],"rounded-t":[{"rounded-t":gt()}],"rounded-r":[{"rounded-r":gt()}],"rounded-b":[{"rounded-b":gt()}],"rounded-l":[{"rounded-l":gt()}],"rounded-ss":[{"rounded-ss":gt()}],"rounded-se":[{"rounded-se":gt()}],"rounded-ee":[{"rounded-ee":gt()}],"rounded-es":[{"rounded-es":gt()}],"rounded-tl":[{"rounded-tl":gt()}],"rounded-tr":[{"rounded-tr":gt()}],"rounded-br":[{"rounded-br":gt()}],"rounded-bl":[{"rounded-bl":gt()}],"border-w":[{border:Mt()}],"border-w-x":[{"border-x":Mt()}],"border-w-y":[{"border-y":Mt()}],"border-w-s":[{"border-s":Mt()}],"border-w-e":[{"border-e":Mt()}],"border-w-t":[{"border-t":Mt()}],"border-w-r":[{"border-r":Mt()}],"border-w-b":[{"border-b":Mt()}],"border-w-l":[{"border-l":Mt()}],"divide-x":[{"divide-x":Mt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Mt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...et(),"hidden","none"]}],"divide-style":[{divide:[...et(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...et(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_e,Vt,Gt]}],"outline-w":[{outline:["",_e,Yo,yr]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",g,Gc,Hc]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",v,Gc,Hc]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:Mt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[_e,yr]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":Mt()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",x,Gc,Hc]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[_e,Vt,Gt]}],"mix-blend":[{"mix-blend":[...dt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":dt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[_e]}],"mask-image-linear-from-pos":[{"mask-linear-from":pt()}],"mask-image-linear-to-pos":[{"mask-linear-to":pt()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":pt()}],"mask-image-t-to-pos":[{"mask-t-to":pt()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":pt()}],"mask-image-r-to-pos":[{"mask-r-to":pt()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":pt()}],"mask-image-b-to-pos":[{"mask-b-to":pt()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":pt()}],"mask-image-l-to-pos":[{"mask-l-to":pt()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":pt()}],"mask-image-x-to-pos":[{"mask-x-to":pt()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":pt()}],"mask-image-y-to-pos":[{"mask-y-to":pt()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[Vt,Gt]}],"mask-image-radial-from-pos":[{"mask-radial-from":pt()}],"mask-image-radial-to-pos":[{"mask-radial-to":pt()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[_e]}],"mask-image-conic-from-pos":[{"mask-conic-from":pt()}],"mask-image-conic-to-pos":[{"mask-conic-to":pt()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:yt()}],"mask-repeat":[{mask:U()}],"mask-size":[{mask:Q()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Vt,Gt]}],filter:[{filter:["","none",Vt,Gt]}],blur:[{blur:Dt()}],brightness:[{brightness:[_e,Vt,Gt]}],contrast:[{contrast:[_e,Vt,Gt]}],"drop-shadow":[{"drop-shadow":["","none",y,Gc,Hc]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",_e,Vt,Gt]}],"hue-rotate":[{"hue-rotate":[_e,Vt,Gt]}],invert:[{invert:["",_e,Vt,Gt]}],saturate:[{saturate:[_e,Vt,Gt]}],sepia:[{sepia:["",_e,Vt,Gt]}],"backdrop-filter":[{"backdrop-filter":["","none",Vt,Gt]}],"backdrop-blur":[{"backdrop-blur":Dt()}],"backdrop-brightness":[{"backdrop-brightness":[_e,Vt,Gt]}],"backdrop-contrast":[{"backdrop-contrast":[_e,Vt,Gt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_e,Vt,Gt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_e,Vt,Gt]}],"backdrop-invert":[{"backdrop-invert":["",_e,Vt,Gt]}],"backdrop-opacity":[{"backdrop-opacity":[_e,Vt,Gt]}],"backdrop-saturate":[{"backdrop-saturate":[_e,Vt,Gt]}],"backdrop-sepia":[{"backdrop-sepia":["",_e,Vt,Gt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":H()}],"border-spacing-x":[{"border-spacing-x":H()}],"border-spacing-y":[{"border-spacing-y":H()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Vt,Gt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_e,"initial",Vt,Gt]}],ease:[{ease:["linear","initial",_,Vt,Gt]}],delay:[{delay:[_e,Vt,Gt]}],animate:[{animate:["none",F,Vt,Gt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,Vt,Gt]}],"perspective-origin":[{"perspective-origin":z()}],rotate:[{rotate:kt()}],"rotate-x":[{"rotate-x":kt()}],"rotate-y":[{"rotate-y":kt()}],"rotate-z":[{"rotate-z":kt()}],scale:[{scale:te()}],"scale-x":[{"scale-x":te()}],"scale-y":[{"scale-y":te()}],"scale-z":[{"scale-z":te()}],"scale-3d":["scale-3d"],skew:[{skew:Le()}],"skew-x":[{"skew-x":Le()}],"skew-y":[{"skew-y":Le()}],transform:[{transform:[Vt,Gt,"","none","gpu","cpu"]}],"transform-origin":[{origin:z()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:le()}],"translate-x":[{"translate-x":le()}],"translate-y":[{"translate-y":le()}],"translate-z":[{"translate-z":le()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Vt,Gt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Vt,Gt]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[_e,Yo,yr,qd]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},uR=X1(cR);function il(...s){return uR(Av(s))}const fR=D1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function dR({className:s,variant:t,size:i,asChild:r=!1,...l}){const c=r?b1:"button";return se.jsx(c,{"data-slot":"button",className:il(fR({variant:t,size:i,className:s})),...l})}function hR({className:s,...t}){return se.jsx("div",{"data-slot":"card",className:il("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...t})}function pR({className:s,...t}){return se.jsx("div",{"data-slot":"card-header",className:il("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...t})}function mR({className:s,...t}){return se.jsx("div",{"data-slot":"card-title",className:il("leading-none font-semibold",s),...t})}function gR({className:s,...t}){return se.jsx("div",{"data-slot":"card-content",className:il("px-6",s),...t})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vR=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),X0=s=>{const t=vR(s);return t.charAt(0).toUpperCase()+t.slice(1)},Bv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),xR=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=Me.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>Me.createElement("svg",{ref:m,...yR,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:Bv("lucide",l),...!c&&!xR(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,g])=>Me.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=(s,t)=>{const i=Me.forwardRef(({className:r,...l},c)=>Me.createElement(SR,{ref:c,iconNode:t,className:Bv(`lucide-${_R(X0(s))}`,`lucide-${s}`,r),...l}));return i.displayName=X0(s),i};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ER=nu("globe",MR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],TR=nu("house",bR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],RR=nu("rocket",AR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xa=nu("zap",wR),CR=({onNavigateTo:s,currentLocation:t})=>{const i=[{name:"Earth",icon:ER,color:"text-blue-500"},{name:"Moon",icon:Xa,color:"text-gray-400"},{name:"Mars",icon:RR,color:"text-red-500"},{name:"Venus",icon:Xa,color:"text-yellow-500"},{name:"Mercury",icon:Xa,color:"text-orange-500"},{name:"Jupiter",icon:Xa,color:"text-orange-300"},{name:"Saturn",icon:Xa,color:"text-yellow-300"},{name:"Uranus",icon:Xa,color:"text-cyan-400"},{name:"Neptune",icon:Xa,color:"text-blue-600"},{name:"Sun",icon:Xa,color:"text-yellow-400"}];return se.jsxs(hR,{className:"absolute top-4 right-4 w-64 bg-black/80 text-white border-gray-600",children:[se.jsx(pR,{className:"pb-2",children:se.jsxs(mR,{className:"text-lg flex items-center gap-2",children:[se.jsx(TR,{className:"w-5 h-5"}),"Navigation"]})}),se.jsxs(gR,{className:"space-y-2",children:[se.jsxs("div",{className:"text-sm text-gray-300 mb-3",children:["Current: ",se.jsx("span",{className:"text-white font-semibold",children:t})]}),se.jsx("div",{className:"grid grid-cols-2 gap-2",children:i.map(r=>{const l=r.icon;return se.jsxs(dR,{variant:"outline",size:"sm",className:"justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(r.name),children:[se.jsx(l,{className:`w-4 h-4 ${r.color}`}),r.name]},r.name)})}),se.jsxs("div",{className:"text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded",children:[se.jsx("p",{children:se.jsx("strong",{children:"Controls:"})}),se.jsx("p",{children:"• Mouse: Rotate view"}),se.jsx("p",{children:"• Scroll: Zoom in/out"}),se.jsx("p",{children:"• Buttons: Quick travel"})]})]})]})};function DR(){const[s,t]=Me.useState("Solar System"),i=Me.useRef(null),r=c=>{t(c),i.current&&i.current.focusOnPlanet(c)},l=c=>{t(c)};return se.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[se.jsx(y1,{ref:i,onLocationChange:l}),se.jsx(CR,{onNavigateTo:r,currentLocation:s}),se.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md",children:[se.jsx("h2",{className:"text-lg font-bold mb-2",children:"Realistic Universe Simulation"}),se.jsx("p",{className:"text-sm text-gray-300 mb-2",children:"Explore our solar system with realistic planet colors and major moons based on NASA observations."}),se.jsxs("div",{className:"text-xs text-gray-400 space-y-1",children:[se.jsx("p",{children:se.jsx("strong",{children:"Features:"})}),se.jsxs("p",{children:["• ",se.jsx("strong",{children:"Realistic Colors:"})," NASA-accurate planet appearances"]}),se.jsxs("p",{children:["• ",se.jsx("strong",{children:"Major Moons:"})," Earth's Moon, Mars' Phobos & Deimos, Jupiter's Galilean moons, and more"]}),se.jsxs("p",{children:["• ",se.jsx("strong",{children:"Enhanced Graphics:"})," Improved lighting and star field"]}),se.jsxs("p",{children:["• ",se.jsx("strong",{children:"Interactive Controls:"})," Focus and zoom on any celestial body"]})]}),se.jsx("div",{className:"mt-2 text-xs text-yellow-400",children:se.jsxs("p",{children:["Current focus: ",se.jsx("strong",{children:s})]})})]})]})}Ky.createRoot(document.getElementById("root")).render(se.jsx(Me.StrictMode,{children:se.jsx(DR,{})}));
