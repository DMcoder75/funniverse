(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var fd={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function sS(){if(k0)return Ho;k0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var X0;function oS(){return X0||(X0=1,fd.exports=sS()),fd.exports}var It=oS(),dd={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function lS(){if(W0)return he;W0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function v(O,K,at){this.props=O,this.context=K,this.refs=w,this.updater=at||S}v.prototype.isReactComponent={},v.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=v.prototype;function U(O,K,at){this.props=O,this.context=K,this.refs=w,this.updater=at||S}var L=U.prototype=new g;L.constructor=U,E(L,v.prototype),L.isPureReactComponent=!0;var b=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function B(O,K,at,ht,Et,$){return at=$.ref,{$$typeof:s,type:O,key:K,ref:at!==void 0?at:null,props:$}}function F(O,K){return B(O.type,K,void 0,void 0,void 0,O.props)}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function D(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(at){return K[at]})}var G=/\/+/g;function nt(O,K){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):K.toString(36)}function rt(){}function ut(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(rt,rt):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ot(O,K,at,ht,Et){var $=typeof O;($==="undefined"||$==="boolean")&&(O=null);var dt=!1;if(O===null)dt=!0;else switch($){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(O.$$typeof){case s:case t:dt=!0;break;case _:return dt=O._init,ot(dt(O._payload),K,at,ht,Et)}}if(dt)return Et=Et(O),dt=ht===""?"."+nt(O,0):ht,b(Et)?(at="",dt!=null&&(at=dt.replace(G,"$&/")+"/"),ot(Et,K,at,"",function(Bt){return Bt})):Et!=null&&(C(Et)&&(Et=F(Et,at+(Et.key==null||O&&O.key===Et.key?"":(""+Et.key).replace(G,"$&/")+"/")+dt)),K.push(Et)),1;dt=0;var mt=ht===""?".":ht+":";if(b(O))for(var _t=0;_t<O.length;_t++)ht=O[_t],$=mt+nt(ht,_t),dt+=ot(ht,K,at,$,Et);else if(_t=y(O),typeof _t=="function")for(O=_t.call(O),_t=0;!(ht=O.next()).done;)ht=ht.value,$=mt+nt(ht,_t++),dt+=ot(ht,K,at,$,Et);else if($==="object"){if(typeof O.then=="function")return ot(ut(O),K,at,ht,Et);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return dt}function P(O,K,at){if(O==null)return O;var ht=[],Et=0;return ot(O,ht,"","",function($){return K.call(at,$,Et++)}),ht}function W(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(at){(O._status===0||O._status===-1)&&(O._status=1,O._result=at)},function(at){(O._status===0||O._status===-1)&&(O._status=2,O._result=at)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var H=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function xt(){}return he.Children={map:P,forEach:function(O,K,at){P(O,function(){K.apply(this,arguments)},at)},count:function(O){var K=0;return P(O,function(){K++}),K},toArray:function(O){return P(O,function(K){return K})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},he.Component=v,he.Fragment=i,he.Profiler=l,he.PureComponent=U,he.StrictMode=r,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,he.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},he.cache=function(O){return function(){return O.apply(null,arguments)}},he.cloneElement=function(O,K,at){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ht=E({},O.props),Et=O.key,$=void 0;if(K!=null)for(dt in K.ref!==void 0&&($=void 0),K.key!==void 0&&(Et=""+K.key),K)!V.call(K,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&K.ref===void 0||(ht[dt]=K[dt]);var dt=arguments.length-2;if(dt===1)ht.children=at;else if(1<dt){for(var mt=Array(dt),_t=0;_t<dt;_t++)mt[_t]=arguments[_t+2];ht.children=mt}return B(O.type,Et,void 0,void 0,$,ht)},he.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},he.createElement=function(O,K,at){var ht,Et={},$=null;if(K!=null)for(ht in K.key!==void 0&&($=""+K.key),K)V.call(K,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(Et[ht]=K[ht]);var dt=arguments.length-2;if(dt===1)Et.children=at;else if(1<dt){for(var mt=Array(dt),_t=0;_t<dt;_t++)mt[_t]=arguments[_t+2];Et.children=mt}if(O&&O.defaultProps)for(ht in dt=O.defaultProps,dt)Et[ht]===void 0&&(Et[ht]=dt[ht]);return B(O,$,void 0,void 0,null,Et)},he.createRef=function(){return{current:null}},he.forwardRef=function(O){return{$$typeof:h,render:O}},he.isValidElement=C,he.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:W}},he.memo=function(O,K){return{$$typeof:p,type:O,compare:K===void 0?null:K}},he.startTransition=function(O){var K=N.T,at={};N.T=at;try{var ht=O(),Et=N.S;Et!==null&&Et(at,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(xt,H)}catch($){H($)}finally{N.T=K}},he.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},he.use=function(O){return N.H.use(O)},he.useActionState=function(O,K,at){return N.H.useActionState(O,K,at)},he.useCallback=function(O,K){return N.H.useCallback(O,K)},he.useContext=function(O){return N.H.useContext(O)},he.useDebugValue=function(){},he.useDeferredValue=function(O,K){return N.H.useDeferredValue(O,K)},he.useEffect=function(O,K,at){var ht=N.H;if(typeof at=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ht.useEffect(O,K)},he.useId=function(){return N.H.useId()},he.useImperativeHandle=function(O,K,at){return N.H.useImperativeHandle(O,K,at)},he.useInsertionEffect=function(O,K){return N.H.useInsertionEffect(O,K)},he.useLayoutEffect=function(O,K){return N.H.useLayoutEffect(O,K)},he.useMemo=function(O,K){return N.H.useMemo(O,K)},he.useOptimistic=function(O,K){return N.H.useOptimistic(O,K)},he.useReducer=function(O,K,at){return N.H.useReducer(O,K,at)},he.useRef=function(O){return N.H.useRef(O)},he.useState=function(O){return N.H.useState(O)},he.useSyncExternalStore=function(O,K,at){return N.H.useSyncExternalStore(O,K,at)},he.useTransition=function(){return N.H.useTransition()},he.version="19.1.0",he}var q0;function Zh(){return q0||(q0=1,dd.exports=lS()),dd.exports}var te=Zh(),hd={exports:{}},Go={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function cS(){return Y0||(Y0=1,function(s){function t(P,W){var H=P.length;P.push(W);t:for(;0<H;){var xt=H-1>>>1,O=P[xt];if(0<l(O,W))P[xt]=W,P[H]=O,H=xt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var W=P[0],H=P.pop();if(H!==W){P[0]=H;t:for(var xt=0,O=P.length,K=O>>>1;xt<K;){var at=2*(xt+1)-1,ht=P[at],Et=at+1,$=P[Et];if(0>l(ht,H))Et<O&&0>l($,ht)?(P[xt]=$,P[Et]=H,xt=Et):(P[xt]=ht,P[at]=H,xt=at);else if(Et<O&&0>l($,H))P[xt]=$,P[Et]=H,xt=Et;else break t}}return W}function l(P,W){var H=P.sortIndex-W.sortIndex;return H!==0?H:P.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,x=null,y=3,S=!1,E=!1,w=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function b(P){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=P)r(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function N(P){if(w=!1,b(P),!E)if(i(m)!==null)E=!0,V||(V=!0,nt());else{var W=i(p);W!==null&&ot(N,W.startTime-P)}}var V=!1,B=-1,F=5,C=-1;function D(){return v?!0:!(s.unstable_now()-C<F)}function G(){if(v=!1,V){var P=s.unstable_now();C=P;var W=!0;try{t:{E=!1,w&&(w=!1,U(B),B=-1),S=!0;var H=y;try{e:{for(b(P),x=i(m);x!==null&&!(x.expirationTime>P&&D());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,y=x.priorityLevel;var O=xt(x.expirationTime<=P);if(P=s.unstable_now(),typeof O=="function"){x.callback=O,b(P),W=!0;break e}x===i(m)&&r(m),b(P)}else r(m);x=i(m)}if(x!==null)W=!0;else{var K=i(p);K!==null&&ot(N,K.startTime-P),W=!1}}break t}finally{x=null,y=H,S=!1}W=void 0}}finally{W?nt():V=!1}}}var nt;if(typeof L=="function")nt=function(){L(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ut=rt.port2;rt.port1.onmessage=G,nt=function(){ut.postMessage(null)}}else nt=function(){g(G,0)};function ot(P,W){B=g(function(){P(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(P){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var H=y;y=W;try{return P()}finally{y=H}},s.unstable_requestPaint=function(){v=!0},s.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=y;y=P;try{return W()}finally{y=H}},s.unstable_scheduleCallback=function(P,W,H){var xt=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?xt+H:xt):H=xt,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,P={id:_++,callback:W,priorityLevel:P,startTime:H,expirationTime:O,sortIndex:-1},H>xt?(P.sortIndex=H,t(p,P),i(m)===null&&P===i(p)&&(w?(U(B),B=-1):w=!0,ot(N,H-xt))):(P.sortIndex=O,t(m,P),E||S||(E=!0,V||(V=!0,nt()))),P},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(P){var W=y;return function(){var H=y;y=W;try{return P.apply(this,arguments)}finally{y=H}}}}(md)),md}var j0;function uS(){return j0||(j0=1,pd.exports=cS()),pd.exports}var gd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function fS(){if(Z0)return On;Z0=1;var s=Zh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},On.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.1.0",On}var K0;function dS(){if(K0)return gd.exports;K0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),gd.exports=fS(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function hS(){if(Q0)return Go;Q0=1;var s=uS(),t=Zh(),i=dS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=d;break}if(A===o){M=!0,o=u,a=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===a){M=!0,a=d,o=u;break}if(A===o){M=!0,o=d,a=u;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case v:return"Profiler";case w:return"StrictMode";case N:return"Suspense";case V:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case b:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case F:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var ot=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},xt=[],O=-1;function K(e){return{current:e}}function at(e){0>O||(e.current=xt[O],xt[O]=null,O--)}function ht(e,n){O++,xt[O]=e.current,e.current=n}var Et=K(null),$=K(null),dt=K(null),mt=K(null);function _t(e,n){switch(ht(dt,n),ht($,e),ht(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_0(n),e=v0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Et),ht(Et,e)}function Bt(){at(Et),at($),at(dt)}function Zt(e){e.memoizedState!==null&&ht(mt,e);var n=Et.current,a=v0(n,e.type);n!==a&&(ht($,e),ht(Et,a))}function Ce(e){$.current===e&&(at(Et),at($)),mt.current===e&&(at(mt),Po._currentValue=H)}var bt=Object.prototype.hasOwnProperty,I=s.unstable_scheduleCallback,ie=s.unstable_cancelCallback,Gt=s.unstable_shouldYield,de=s.unstable_requestPaint,Ct=s.unstable_now,Ee=s.unstable_getCurrentPriorityLevel,Ft=s.unstable_ImmediatePriority,re=s.unstable_UserBlockingPriority,Fe=s.unstable_NormalPriority,De=s.unstable_LowPriority,z=s.unstable_IdlePriority,T=s.log,tt=s.unstable_setDisableYieldValue,pt=null,yt=null;function ft(e){if(typeof T=="function"&&tt(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(pt,e)}catch{}}var Ht=Math.clz32?Math.clz32:Jt,Dt=Math.log,Kt=Math.LN2;function Jt(e){return e>>>=0,e===0?32:31-(Dt(e)/Kt|0)|0}var Tt=256,Ot=4194304;function ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=ee(o):(M&=A,M!==0?u=ee(M):a||(a=A&~e,a!==0&&(u=ee(a))))):(A=o&~d,A!==0?u=ee(A):M!==0?u=ee(M):a||(a=o&~e,a!==0&&(u=ee(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Rt(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Ut(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,k=e.expirationTimes,et=e.hiddenUpdates;for(a=M&~a;0<a;){var gt=31-Ht(a),St=1<<gt;A[gt]=0,k[gt]=-1;var it=et[gt];if(it!==null)for(et[gt]=null,gt=0;gt<it.length;gt++){var st=it[gt];st!==null&&(st.lane&=-536870913)}a&=~St}o!==0&&Mt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Mt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Yt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ue(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ue(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:B0(e.type))}function xi(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,en="__reactProps$"+pn,Di="__reactContainer$"+pn,Ur="__reactEvents$"+pn,dl="__reactListeners$"+pn,Lr="__reactHandles$"+pn,qs="__reactResources$"+pn,Ui="__reactMarker$"+pn;function Nr(e){delete e[mn],delete e[en],delete e[Ur],delete e[dl],delete e[Lr]}function Xi(e){var n=e[mn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Di]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=M0(e);e!==null;){if(a=e[mn])return a;e=M0(e)}return n}e=a,a=e.parentNode}return null}function pa(e){if(e=e[mn]||e[Di]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ma(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Ui]=!0}var hl=new Set,pl={};function R(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(pl[e]=n,e=0;e<n.length;e++)hl.add(n[e])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},Z={};function wt(e){return bt.call(Z,e)?!0:bt.call(ct,e)?!1:lt.test(e)?Z[e]=!0:(ct[e]=!0,!1)}function Nt(e,n,a){if(wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var ae,oe;function Qt(e){if(ae===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+oe}var ge=!1;function Le(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(st){var it=st}Reflect.construct(e,[],St)}else{try{St.call()}catch(st){it=st}e.call(St.prototype)}}else{try{throw Error()}catch(st){it=st}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(st){if(st&&it&&typeof st.stack=="string")return[st.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var k=M.split(`
`),et=A.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===et.length)for(o=k.length-1,u=et.length-1;1<=o&&0<=u&&k[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==et[u]){var gt=`
`+k[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Je(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Qt("Activity");default:return""}}function He(e){try{var n="";do n+=Je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=ne(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function be(e){e._valueTracker||(e._valueTracker=Ke(e))}function Un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hn=/[\n"\\]/g;function Sn(e){return e.replace(Hn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(e,n,a,o,u,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,M,_e(n)):a!=null?Ln(e,M,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Gn(e,n,a,o,u,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Ln(e,n,a){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function wn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Or(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ot(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function qn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ix=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ix.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&_p(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&_p(e,d,n[d])}function cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ax=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return rx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var uu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function xp(e){var n=pa(e);if(n&&(e=n.stateNode)){var a=e[en]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ye(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[en]||null;if(!u)throw Error(r(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Un(o)}break t;case"textarea":wn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var du=!1;function yp(e,n,a){if(du)return e(n,a);du=!0;try{var o=e(n);return o}finally{if(du=!1,(Pr!==null||zr!==null)&&(tc(),Pr&&(n=Pr,e=zr,zr=Pr=null,xp(n),e)))for(n=0;n<e.length;n++)xp(e[n])}}function Ys(e,n){var a=e.stateNode;if(a===null)return null;var o=a[en]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Wi)try{var js={};Object.defineProperty(js,"passive",{get:function(){hu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{hu=!1}var ga=null,pu=null,gl=null;function Sp(){if(gl)return gl;var e,n=pu,a=n.length,o,u="value"in ga?ga.value:ga.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function Mp(){return!1}function Yn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:Mp,this.isPropagationStopped=Mp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Yn($a),Zs=_({},$a,{view:0,detail:0}),sx=Yn(Zs),mu,gu,Ks,yl=_({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ks&&(Ks&&e.type==="mousemove"?(mu=e.screenX-Ks.screenX,gu=e.screenY-Ks.screenY):gu=mu=0,Ks=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),Ep=Yn(yl),ox=_({},yl,{dataTransfer:0}),lx=Yn(ox),cx=_({},Zs,{relatedTarget:0}),_u=Yn(cx),ux=_({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Yn(ux),dx=_({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hx=Yn(dx),px=_({},$a,{data:0}),bp=Yn(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_x[e])?!!n[e]:!1}function vu(){return vx}var xx=_({},Zs,{key:function(e){if(e.key){var n=mx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yx=Yn(xx),Sx=_({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Yn(Sx),Mx=_({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Ex=Yn(Mx),bx=_({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Yn(bx),Ax=_({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wx=Yn(Ax),Rx=_({},$a,{newState:0,oldState:0}),Cx=Yn(Rx),Dx=[9,13,27,32],xu=Wi&&"CompositionEvent"in window,Qs=null;Wi&&"documentMode"in document&&(Qs=document.documentMode);var Ux=Wi&&"TextEvent"in window&&!Qs,Ap=Wi&&(!xu||Qs&&8<Qs&&11>=Qs),wp=" ",Rp=!1;function Cp(e,n){switch(e){case"keyup":return Dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Lx(e,n){switch(e){case"compositionend":return Dp(n);case"keypress":return n.which!==32?null:(Rp=!0,wp);case"textInput":return e=n.data,e===wp&&Rp?null:e;default:return null}}function Nx(e,n){if(Br)return e==="compositionend"||!xu&&Cp(e,n)?(e=Sp(),gl=pu=ga=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ap&&n.locale!=="ko"?null:n.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ox[e.type]:n==="textarea"}function Lp(e,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=sc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Js=null,$s=null;function Px(e){d0(e,0)}function Sl(e){var n=Ja(e);if(Un(n))return e}function Np(e,n){if(e==="change")return n}var Op=!1;if(Wi){var yu;if(Wi){var Su="oninput"in document;if(!Su){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Su=typeof Pp.oninput=="function"}yu=Su}else yu=!1;Op=yu&&(!document.documentMode||9<document.documentMode)}function zp(){Js&&(Js.detachEvent("onpropertychange",Bp),$s=Js=null)}function Bp(e){if(e.propertyName==="value"&&Sl($s)){var n=[];Lp(n,$s,e,fu(e)),yp(Px,n)}}function zx(e,n,a){e==="focusin"?(zp(),Js=n,$s=a,Js.attachEvent("onpropertychange",Bp)):e==="focusout"&&zp()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl($s)}function Ix(e,n){if(e==="click")return Sl(n)}function Fx(e,n){if(e==="input"||e==="change")return Sl(n)}function Hx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:Hx;function to(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!bt.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,n){var a=Ip(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ip(a)}}function Hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yi(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gx=Wi&&"documentMode"in document&&11>=document.documentMode,Ir=null,Eu=null,eo=null,bu=!1;function Vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Ir==null||Ir!==yi(o)||(o=Ir,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&to(eo,o)||(eo=o,o=sc(Eu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ir)))}function tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},Tu={},kp={};Wi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function er(e){if(Tu[e])return Tu[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return Tu[e]=n[a];return e}var Xp=er("animationend"),Wp=er("animationiteration"),qp=er("animationstart"),Vx=er("transitionrun"),kx=er("transitionstart"),Xx=er("transitioncancel"),Yp=er("transitionend"),jp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Si(e,n){jp.set(e,n),R(n,[e])}var Zp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=Zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:He(n)},Zp.set(e,n),n)}return{value:e,source:n,stack:He(n)}}var ui=[],Hr=0,wu=0;function Ml(){for(var e=Hr,n=wu=Hr=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Kp(a,u,d)}}function El(e,n,a,o){ui[Hr++]=e,ui[Hr++]=n,ui[Hr++]=a,ui[Hr++]=o,wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ru(e,n,a,o){return El(e,n,a,o),bl(e)}function Gr(e,n){return El(e,null,null,n),bl(e)}function Kp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ht(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function bl(e){if(50<wo)throw wo=0,Pf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function Wx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new Wx(e,n,a,o)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Cu(e)&&(M=1);else if(typeof e=="string")M=Yy(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=$n(31,a,n,u),e.elementType=C,e.lanes=d,e;case E:return nr(a.children,u,d,n);case w:M=8,u|=24;break;case v:return e=$n(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case N:return e=$n(13,a,n,u),e.elementType=N,e.lanes=d,e;case V:return e=$n(19,a,n,u),e.elementType=V,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case L:M=10;break t;case U:M=9;break t;case b:M=11;break t;case B:M=14;break t;case F:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function nr(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Du(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Uu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var kr=[],Xr=0,Al=null,wl=0,fi=[],di=0,ir=null,Yi=1,ji="";function ar(e,n){kr[Xr++]=wl,kr[Xr++]=Al,Al=e,wl=n}function Jp(e,n,a){fi[di++]=Yi,fi[di++]=ji,fi[di++]=ir,ir=e;var o=Yi;e=ji;var u=32-Ht(o)-1;o&=~(1<<u),a+=1;var d=32-Ht(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Yi=1<<32-Ht(n)+u|a<<u|o,ji=d+e}else Yi=1<<d|a<<u|o,ji=e}function Lu(e){e.return!==null&&(ar(e,1),Jp(e,1,0))}function Nu(e){for(;e===Al;)Al=kr[--Xr],kr[Xr]=null,wl=kr[--Xr],kr[Xr]=null;for(;e===ir;)ir=fi[--di],fi[di]=null,ji=fi[--di],fi[di]=null,Yi=fi[--di],fi[di]=null}var Vn=null,an=null,Pe=!1,rr=null,Li=!1,Ou=Error(r(519));function sr(e){var n=Error(r(418,""));throw ao(ci(n,e)),Ou}function $p(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[mn]=e,n[en]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Ae(Co[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),be(n);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Or(n,o.value,o.defaultValue,o.children),be(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||g0(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=oc),n=!0):n=!1,n||sr(e)}function tm(e){for(Vn=e.return;Vn;)switch(Vn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Vn=Vn.return}}function no(e){if(e!==Vn)return!1;if(!Pe)return tm(e),Pe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&an&&sr(e),tm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){an=Ei(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}an=null}}else n===27?(n=an,La(e.type)?(e=ed,ed=null,an=e):an=n):an=Vn?Ei(e.stateNode.nextSibling):null;return!0}function io(){an=Vn=null,Pe=!1}function em(){var e=rr;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),rr=null),e}function ao(e){rr===null?rr=[e]:rr.push(e)}var Pu=K(null),or=null,Zi=null;function _a(e,n,a){ht(Pu,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Pu.current,at(Pu)}function zu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var k=0;k<n.length;k++)if(A.context===n[k]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),zu(d.return,a,e),o||(M=null);break t}d=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),zu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function ro(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===mt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}u=u.return}e!==null&&Bu(n,e,a,o),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return nm(or,e)}function Cl(e,n){return or===null&&lr(e),nm(e,n)}function nm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Yx=s.unstable_scheduleCallback,jx=s.unstable_NormalPriority,gn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new qx,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&Yx(jx,function(){e.controller.abort()})}var oo=null,Fu=0,Wr=0,qr=null;function Zx(e,n){if(oo===null){var a=oo=[];Fu=0,Wr=Vf(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(im,im),n}function im(){if(--Fu===0&&oo!==null){qr!==null&&(qr.status="fulfilled");var e=oo;oo=null,Wr=0,qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Kx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var am=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zx(e,n),am!==null&&am(e,n)};var cr=K(null);function Hu(){var e=cr.current;return e!==null?e:Ze.pooledCache}function Dl(e,n){n===null?ht(cr,cr.current):ht(cr,n.pool)}function rm(){var e=Hu();return e===null?null:{parent:gn._currentValue,pool:e}}var lo=Error(r(460)),sm=Error(r(474)),Ul=Error(r(542)),Gu={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ll(){}function lm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ll,Ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e;default:if(typeof n.status=="string")n.then(Ll,Ll);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e}throw co=n,lo}}var co=null;function cm(){if(co===null)throw Error(r(459));var e=co;return co=null,e}function um(e){if(e===lo||e===Ul)throw Error(r(483))}var va=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(e),Kp(e,null,a),n}return El(e,o,n,a),bl(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}function Xu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Wu=!1;function fo(){if(Wu){var e=qr;if(e!==null)throw e}}function ho(e,n,a,o){Wu=!1;var u=e.updateQueue;va=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var k=A,et=k.next;k.next=null,M===null?d=et:M.next=et,M=k;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==M&&(A===null?gt.firstBaseUpdate=et:A.next=et,gt.lastBaseUpdate=k))}if(d!==null){var St=u.baseState;M=0,gt=et=k=null,A=d;do{var it=A.lane&-536870913,st=it!==A.lane;if(st?(Re&it)===it:(o&it)===it){it!==0&&it===Wr&&(Wu=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,se=A;it=n;var ke=a;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){St=ce.call(ke,St,it);break t}St=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,it=typeof ce=="function"?ce.call(ke,St,it):ce,it==null)break t;St=_({},St,it);break t;case 2:va=!0}}it=A.callback,it!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[it]:st.push(it))}else st={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(et=gt=st,k=St):gt=gt.next=st,M|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);gt===null&&(k=St),u.baseState=k,u.firstBaseUpdate=et,u.lastBaseUpdate=gt,d===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=St}}function fm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function dm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fm(a[e],n)}var Yr=K(null),Nl=K(0);function hm(e,n){e=ia,ht(Nl,e),ht(Yr,n),ia=e|n.baseLanes}function qu(){ht(Nl,ia),ht(Yr,Yr.current)}function Yu(){ia=Nl.current,at(Yr),at(Nl)}var Sa=0,ye=null,Ge=null,un=null,Ol=!1,jr=!1,ur=!1,Pl=0,po=0,Zr=null,Qx=0;function on(){throw Error(r(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Zu(e,n,a,o,u,d){return Sa=d,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Km:Qm,ur=!1,d=a(o,u),ur=!1,jr&&(d=mm(n,a,o,u)),pm(e),d}function pm(e){P.H=Gl;var n=Ge!==null&&Ge.next!==null;if(Sa=0,un=Ge=ye=null,Ol=!1,po=0,Zr=null,n)throw Error(r(300));e===null||Mn||(e=e.dependencies,e!==null&&Rl(e)&&(Mn=!0))}function mm(e,n,a,o){ye=e;var u=0;do{if(jr&&(Zr=null),po=0,jr=!1,25<=u)throw Error(r(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=ay,d=n(a,o)}while(jr);return d}function Jx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ye.flags|=1024),n}function Ku(){var e=Pl!==0;return Pl=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ju(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}Sa=0,un=Ge=ye=null,jr=!1,po=Pl=0,Zr=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ye.memoizedState=un=e:un=un.next=e,un}function fn(){if(Ge===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?ye.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?ye.memoizedState=un=e:un=un.next=e}return un}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,Zr===null&&(Zr=[]),e=lm(Zr,e,n),n=ye,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Km:Qm),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===L)return Nn(e)}throw Error(r(438,String(e)))}function tf(e){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ye.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$u(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=fn();return ef(n,Ge,e)}function ef(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=M=null,k=null,et=n,gt=!1;do{var St=et.lane&-536870913;if(St!==et.lane?(Re&St)===St:(Sa&St)===St){var it=et.revertLane;if(it===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),St===Wr&&(gt=!0);else if((Sa&it)===it){et=et.next,it===Wr&&(gt=!0);continue}else St={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(A=k=St,M=d):k=k.next=St,ye.lanes|=it,Ra|=it;St=et.action,ur&&a(d,St),d=et.hasEagerState?et.eagerState:a(d,St)}else it={lane:St,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(A=k=it,M=d):k=k.next=it,ye.lanes|=St,Ra|=St;et=et.next}while(et!==null&&et!==n);if(k===null?M=d:k.next=A,!Jn(d,e.memoizedState)&&(Mn=!0,gt&&(a=qr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nf(e){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Jn(d,n.memoizedState)||(Mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function gm(e,n,a){var o=ye,u=fn(),d=Pe;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Jn((Ge||u).memoizedState,a);M&&(u.memoizedState=a,Mn=!0),u=u.queue;var A=xm.bind(null,o,u,e);if(go(2048,8,A,[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Il(),vm.bind(null,o,u,a,n),null),Ze===null)throw Error(r(349));d||(Sa&124)!==0||_m(o,n,a)}return a}function _m(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=$u(),ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vm(e,n,a,o){n.value=a,n.getSnapshot=o,ym(n)&&Sm(e)}function xm(e,n,a){return a(function(){ym(n)&&Sm(e)})}function ym(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Sm(e){var n=Gr(e,2);n!==null&&ai(n,e,2)}function af(e){var n=jn();if(typeof e=="function"){var a=e;if(e=a(),ur){ft(!0);try{a()}finally{ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function Mm(e,n,a,o){return e.baseState=a,ef(e,Ge,typeof o=="function"?o:Qi)}function $x(e,n,a,o,u){if(Hl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Em(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Em(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=P.T,M={};P.T=M;try{var A=a(u,o),k=P.S;k!==null&&k(M,A),bm(e,n,A)}catch(et){rf(e,n,et)}finally{P.T=d}}else try{d=a(u,o),bm(e,n,d)}catch(et){rf(e,n,et)}}function bm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(e,n,o)},function(o){return rf(e,n,o)}):Tm(e,n,a)}function Tm(e,n,a){n.status="fulfilled",n.value=a,Am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Em(e,a)))}function rf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}e.action=null}function Am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wm(e,n){return n}function Rm(e,n){if(Pe){var a=Ze.formState;if(a!==null){t:{var o=ye;if(Pe){if(an){e:{for(var u=an,d=Li;u.nodeType!==8;){if(!d){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){an=Ei(u.nextSibling),o=u.data==="F!";break t}}sr(o)}o=!1}o&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wm,lastRenderedState:n},a.queue=o,a=Ym.bind(null,ye,o),o.dispatch=a,o=af(!1),d=uf.bind(null,ye,!1,o.queue),o=jn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$x.bind(null,ye,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Cm(e){var n=fn();return Dm(n,Ge,e)}function Dm(e,n,a){if(n=ef(e,n,wm)[0],e=Bl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(M){throw M===lo?Ul:M}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,Kr(9,Il(),ty.bind(null,u,a),null)),[o,d,e]}function ty(e,n){e.action=n}function Um(e){var n=fn(),a=Ge;if(a!==null)return Dm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Kr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ye.updateQueue,n===null&&(n=$u(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Il(){return{destroy:void 0,resource:void 0}}function Lm(){return fn().memoizedState}function Fl(e,n,a,o){var u=jn();o=o===void 0?null:o,ye.flags|=e,u.memoizedState=Kr(1|n,Il(),a,o)}function go(e,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ge!==null&&o!==null&&ju(o,Ge.memoizedState.deps)?u.memoizedState=Kr(n,d,a,o):(ye.flags|=e,u.memoizedState=Kr(1|n,d,a,o))}function Nm(e,n){Fl(8390656,8,e,n)}function Om(e,n){go(2048,8,e,n)}function Pm(e,n){return go(4,2,e,n)}function zm(e,n){return go(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Im(e,n,a){a=a!=null?a.concat([e]):null,go(4,4,Bm.bind(null,n,e),a)}function sf(){}function Fm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Hm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=e(),ur){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o}function of(e,n,a){return a===void 0||(Sa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=kg(),ye.lanes|=e,Ra|=e,a)}function Gm(e,n,a,o){return Jn(a,n)?a:Yr.current!==null?(e=of(e,a,o),Jn(e,n)||(Mn=!0),e):(Sa&42)===0?(Mn=!0,e.memoizedState=a):(e=kg(),ye.lanes|=e,Ra|=e,n)}function Vm(e,n,a,o,u){var d=W.p;W.p=d!==0&&8>d?d:8;var M=P.T,A={};P.T=A,uf(e,!1,n,a);try{var k=u(),et=P.S;if(et!==null&&et(A,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var gt=Kx(k,o);_o(e,n,gt,ii(e))}else _o(e,n,o,ii(e))}catch(St){_o(e,n,{then:function(){},status:"rejected",reason:St},ii())}finally{W.p=d,P.T=M}}function ey(){}function lf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=km(e).queue;Vm(e,u,n,H,a===null?ey:function(){return Xm(e),a(o)})}function km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xm(e){var n=km(e).next.queue;_o(e,n,{},ii())}function cf(){return Nn(Po)}function Wm(){return fn().memoizedState}function qm(){return fn().memoizedState}function ny(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=xa(a);var o=ya(n,e,a);o!==null&&(ai(o,n,a),uo(o,n,a)),n={cache:Iu()},e.payload=n;return}n=n.return}}function iy(e,n,a){var o=ii();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?jm(n,a):(a=Ru(e,n,a,o),a!==null&&(ai(a,e,o),Zm(a,n,o)))}function Ym(e,n,a){var o=ii();_o(e,n,a,o)}function _o(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))jm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,A=d(M,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,M))return El(e,n,u,0),Ze===null&&Ml(),!1}catch{}finally{}if(a=Ru(e,n,u,o),a!==null)return ai(a,e,o),Zm(a,n,o),!0}return!1}function uf(e,n,a,o){if(o={lane:2,revertLane:Vf(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(r(479))}else n=Ru(e,a,o,2),n!==null&&ai(n,e,2)}function Hl(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function jm(e,n){jr=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Yt(e,a)}}var Gl={readContext:Nn,use:zl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},Km={readContext:Nn,use:zl,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:Nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fl(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fl(4194308,4,e,n)},useInsertionEffect:function(e,n){Fl(4,2,e,n)},useMemo:function(e,n){var a=jn();n=n===void 0?null:n;var o=e();if(ur){ft(!0);try{e()}finally{ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=jn();if(a!==void 0){var u=a(n);if(ur){ft(!0);try{a(n)}finally{ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=iy.bind(null,ye,e),[o.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=af(e);var n=e.queue,a=Ym.bind(null,ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,n){var a=jn();return of(a,e,n)},useTransition:function(){var e=af(!1);return e=Vm.bind(null,ye,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ye,u=jn();if(Pe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Re&124)!==0||_m(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Nm(xm.bind(null,o,d,e),[e]),o.flags|=2048,Kr(9,Il(),vm.bind(null,o,d,a,n),null),a},useId:function(){var e=jn(),n=Ze.identifierPrefix;if(Pe){var a=ji,o=Yi;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Qx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:Rm,useActionState:Rm,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:tf,useCacheRefresh:function(){return jn().memoizedState=ny.bind(null,ye)}},Qm={readContext:Nn,use:zl,useCallback:Fm,useContext:Nn,useEffect:Om,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:Bl,useRef:Lm,useState:function(){return Bl(Qi)},useDebugValue:sf,useDeferredValue:function(e,n){var a=fn();return Gm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Bl(Qi)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:cf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,n){var a=fn();return Mm(a,Ge,e,n)},useMemoCache:tf,useCacheRefresh:qm},ay={readContext:Nn,use:zl,useCallback:Fm,useContext:Nn,useEffect:Om,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:nf,useRef:Lm,useState:function(){return nf(Qi)},useDebugValue:sf,useDeferredValue:function(e,n){var a=fn();return Ge===null?of(a,e,n):Gm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=nf(Qi)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:cf,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=fn();return Ge!==null?Mm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:qm},Qr=null,vo=0;function Vl(e){var n=vo;return vo+=1,Qr===null&&(Qr=[]),lm(Qr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jm(e){var n=e._init;return n(e._payload)}function $m(e){function n(j,X){if(e){var J=j.deletions;J===null?(j.deletions=[X],j.flags|=16):J.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=qi(j,X),j.index=0,j.sibling=null,j}function d(j,X,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<X?(j.flags|=67108866,X):J):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,J,vt){return X===null||X.tag!==6?(X=Du(J,j.mode,vt),X.return=j,X):(X=u(X,J),X.return=j,X)}function k(j,X,J,vt){var Xt=J.type;return Xt===E?gt(j,X,J.props.children,vt,J.key):X!==null&&(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===F&&Jm(Xt)===X.type)?(X=u(X,J.props),xo(X,J),X.return=j,X):(X=Tl(J.type,J.key,J.props,null,j.mode,vt),xo(X,J),X.return=j,X)}function et(j,X,J,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Uu(J,j.mode,vt),X.return=j,X):(X=u(X,J.children||[]),X.return=j,X)}function gt(j,X,J,vt,Xt){return X===null||X.tag!==7?(X=nr(J,j.mode,vt,Xt),X.return=j,X):(X=u(X,J),X.return=j,X)}function St(j,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Du(""+X,j.mode,J),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return J=Tl(X.type,X.key,X.props,null,j.mode,J),xo(J,X),J.return=j,J;case S:return X=Uu(X,j.mode,J),X.return=j,X;case F:var vt=X._init;return X=vt(X._payload),St(j,X,J)}if(ot(X)||nt(X))return X=nr(X,j.mode,J,null),X.return=j,X;if(typeof X.then=="function")return St(j,Vl(X),J);if(X.$$typeof===L)return St(j,Cl(j,X),J);kl(j,X)}return null}function it(j,X,J,vt){var Xt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Xt!==null?null:A(j,X,""+J,vt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Xt?k(j,X,J,vt):null;case S:return J.key===Xt?et(j,X,J,vt):null;case F:return Xt=J._init,J=Xt(J._payload),it(j,X,J,vt)}if(ot(J)||nt(J))return Xt!==null?null:gt(j,X,J,vt,null);if(typeof J.then=="function")return it(j,X,Vl(J),vt);if(J.$$typeof===L)return it(j,X,Cl(j,J),vt);kl(j,J)}return null}function st(j,X,J,vt,Xt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get(J)||null,A(X,j,""+vt,Xt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return j=j.get(vt.key===null?J:vt.key)||null,k(X,j,vt,Xt);case S:return j=j.get(vt.key===null?J:vt.key)||null,et(X,j,vt,Xt);case F:var Me=vt._init;return vt=Me(vt._payload),st(j,X,J,vt,Xt)}if(ot(vt)||nt(vt))return j=j.get(J)||null,gt(X,j,vt,Xt,null);if(typeof vt.then=="function")return st(j,X,J,Vl(vt),Xt);if(vt.$$typeof===L)return st(j,X,J,Cl(X,vt),Xt);kl(X,vt)}return null}function ce(j,X,J,vt){for(var Xt=null,Me=null,$t=X,le=X=0,bn=null;$t!==null&&le<J.length;le++){$t.index>le?(bn=$t,$t=null):bn=$t.sibling;var Ne=it(j,$t,J[le],vt);if(Ne===null){$t===null&&($t=bn);break}e&&$t&&Ne.alternate===null&&n(j,$t),X=d(Ne,X,le),Me===null?Xt=Ne:Me.sibling=Ne,Me=Ne,$t=bn}if(le===J.length)return a(j,$t),Pe&&ar(j,le),Xt;if($t===null){for(;le<J.length;le++)$t=St(j,J[le],vt),$t!==null&&(X=d($t,X,le),Me===null?Xt=$t:Me.sibling=$t,Me=$t);return Pe&&ar(j,le),Xt}for($t=o($t);le<J.length;le++)bn=st($t,j,le,J[le],vt),bn!==null&&(e&&bn.alternate!==null&&$t.delete(bn.key===null?le:bn.key),X=d(bn,X,le),Me===null?Xt=bn:Me.sibling=bn,Me=bn);return e&&$t.forEach(function(Ba){return n(j,Ba)}),Pe&&ar(j,le),Xt}function se(j,X,J,vt){if(J==null)throw Error(r(151));for(var Xt=null,Me=null,$t=X,le=X=0,bn=null,Ne=J.next();$t!==null&&!Ne.done;le++,Ne=J.next()){$t.index>le?(bn=$t,$t=null):bn=$t.sibling;var Ba=it(j,$t,Ne.value,vt);if(Ba===null){$t===null&&($t=bn);break}e&&$t&&Ba.alternate===null&&n(j,$t),X=d(Ba,X,le),Me===null?Xt=Ba:Me.sibling=Ba,Me=Ba,$t=bn}if(Ne.done)return a(j,$t),Pe&&ar(j,le),Xt;if($t===null){for(;!Ne.done;le++,Ne=J.next())Ne=St(j,Ne.value,vt),Ne!==null&&(X=d(Ne,X,le),Me===null?Xt=Ne:Me.sibling=Ne,Me=Ne);return Pe&&ar(j,le),Xt}for($t=o($t);!Ne.done;le++,Ne=J.next())Ne=st($t,j,le,Ne.value,vt),Ne!==null&&(e&&Ne.alternate!==null&&$t.delete(Ne.key===null?le:Ne.key),X=d(Ne,X,le),Me===null?Xt=Ne:Me.sibling=Ne,Me=Ne);return e&&$t.forEach(function(rS){return n(j,rS)}),Pe&&ar(j,le),Xt}function ke(j,X,J,vt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var Xt=J.key;X!==null;){if(X.key===Xt){if(Xt=J.type,Xt===E){if(X.tag===7){a(j,X.sibling),vt=u(X,J.props.children),vt.return=j,j=vt;break t}}else if(X.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===F&&Jm(Xt)===X.type){a(j,X.sibling),vt=u(X,J.props),xo(vt,J),vt.return=j,j=vt;break t}a(j,X);break}else n(j,X);X=X.sibling}J.type===E?(vt=nr(J.props.children,j.mode,vt,J.key),vt.return=j,j=vt):(vt=Tl(J.type,J.key,J.props,null,j.mode,vt),xo(vt,J),vt.return=j,j=vt)}return M(j);case S:t:{for(Xt=J.key;X!==null;){if(X.key===Xt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(j,X.sibling),vt=u(X,J.children||[]),vt.return=j,j=vt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}vt=Uu(J,j.mode,vt),vt.return=j,j=vt}return M(j);case F:return Xt=J._init,J=Xt(J._payload),ke(j,X,J,vt)}if(ot(J))return ce(j,X,J,vt);if(nt(J)){if(Xt=nt(J),typeof Xt!="function")throw Error(r(150));return J=Xt.call(J),se(j,X,J,vt)}if(typeof J.then=="function")return ke(j,X,Vl(J),vt);if(J.$$typeof===L)return ke(j,X,Cl(j,J),vt);kl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(j,X.sibling),vt=u(X,J),vt.return=j,j=vt):(a(j,X),vt=Du(J,j.mode,vt),vt.return=j,j=vt),M(j)):a(j,X)}return function(j,X,J,vt){try{vo=0;var Xt=ke(j,X,J,vt);return Qr=null,Xt}catch($t){if($t===lo||$t===Ul)throw $t;var Me=$n(29,$t,null,j.mode);return Me.lanes=vt,Me.return=j,Me}finally{}}}var Jr=$m(!0),tg=$m(!1),hi=K(null),Ni=null;function Ma(e){var n=e.alternate;ht(_n,_n.current&1),ht(hi,e),Ni===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(Ni=e)}function eg(e){if(e.tag===22){if(ht(_n,_n.current),ht(hi,e),Ni===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ni=e)}}else Ea()}function Ea(){ht(_n,_n.current),ht(hi,hi.current)}function Ji(e){at(hi),Ni===e&&(Ni=null),at(_n)}var _n=K(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ff(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(ai(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(ai(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(ai(n,e,a),uo(n,e,a))}};function ng(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,d):!0}function ig(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function fr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ag(e){Wl(e)}function rg(e){console.error(e)}function sg(e){Wl(e)}function ql(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function og(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,n)},a}function lg(e){return e=xa(e),e.tag=3,e}function cg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){og(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){og(n,a,o),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ry(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ro(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 13:return Ni===null?Bf():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(e,o,u)),!1;case 22:return a.flags|=65536,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(e,o,u)),!1}throw Error(r(435,a.tag))}return Ff(e,o,u),Bf(),!1}if(Pe)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(e=Error(r(422),{cause:o}),ao(ci(e,a)))):(o!==Ou&&(n=Error(r(423),{cause:o}),ao(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=hf(e.stateNode,o,u),Xu(e,u),rn!==4&&(rn=2)),!1;var d=Error(r(520),{cause:o});if(d=ci(d,a),Ao===null?Ao=[d]:Ao.push(d),rn!==4&&(rn=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=hf(a.stateNode,o,e),Xu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lg(u),cg(u,e,a,o),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var ug=Error(r(461)),Mn=!1;function Rn(e,n,a,o){n.child=e===null?tg(n,null,a,o):Jr(n,e.child,a,o)}function fg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return lr(n),o=Zu(e,n,a,M,d,u),A=Ku(),e!==null&&!Mn?(Qu(e,n,u),$i(e,n,u)):(Pe&&A&&Lu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function dg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Cu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,hg(e,n,d,o,u)):(e=Tl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Sf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(M,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=qi(d,o),e.ref=n.ref,e.return=n,n.child=e}function hg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(to(d,o)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=o=d,Sf(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,$i(e,n,u)}return pf(e,n,a,o,u)}function pg(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return mg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,d!==null?d.cachePool:null),d!==null?hm(n,d):qu(),eg(n);else return n.lanes=n.childLanes=536870912,mg(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Dl(n,d.cachePool),hm(n,d),Ea(),n.memoizedState=null):(e!==null&&Dl(n,null),qu(),Ea());return Rn(e,n,u,a),n.child}function mg(e,n,a,o){var u=Hu();return u=u===null?null:{parent:gn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Dl(n,null),qu(),eg(n),e!==null&&ro(e,n,o,!0),null}function Yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function pf(e,n,a,o,u){return lr(n),a=Zu(e,n,a,o,void 0,u),o=Ku(),e!==null&&!Mn?(Qu(e,n,u),$i(e,n,u)):(Pe&&o&&Lu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function gg(e,n,a,o,u,d){return lr(n),n.updateQueue=null,a=mm(n,o,a,u),pm(e),o=Ku(),e!==null&&!Mn?(Qu(e,n,d),$i(e,n,d)):(Pe&&o&&Lu(n),n.flags|=1,Rn(e,n,a,d),n.child)}function _g(e,n,a,o,u){if(lr(n),n.stateNode===null){var d=Vr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Nn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=df,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Vu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Nn(M):Vr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ff(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&df.enqueueReplaceState(d,d.state,null),ho(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,k=fr(a,A);d.props=k;var et=d.context,gt=a.contextType;M=Vr,typeof gt=="object"&&gt!==null&&(M=Nn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||et!==M)&&ig(n,d,o,M),va=!1;var it=n.memoizedState;d.state=it,ho(n,o,d,u),fo(),et=n.memoizedState,A||it!==et||va?(typeof St=="function"&&(ff(n,a,St,o),et=n.memoizedState),(k=va||ng(n,a,k,o,it,et,M))?(gt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),d.props=o,d.state=et,d.context=M,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ku(e,n),M=n.memoizedProps,gt=fr(a,M),d.props=gt,St=n.pendingProps,it=d.context,et=a.contextType,k=Vr,typeof et=="object"&&et!==null&&(k=Nn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==St||it!==k)&&ig(n,d,o,k),va=!1,it=n.memoizedState,d.state=it,ho(n,o,d,u),fo();var st=n.memoizedState;M!==St||it!==st||va||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof A=="function"&&(ff(n,a,A,o),st=n.memoizedState),(gt=va||ng(n,a,gt,o,it,st,k)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,st,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,st,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=k,o=gt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Yl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Jr(n,e.child,null,u),n.child=Jr(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=$i(e,n,u),e}function vg(e,n,a,o){return io(),n.flags|=256,Rn(e,n,a,o),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:rm()}}function _f(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function xg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pe){if(u?Ma(n):Ea(),Pe){var A=an,k;if(k=A){t:{for(k=A,A=Li;k.nodeType!==8;){if(!A){A=null;break t}if(k=Ei(k.nextSibling),k===null){A=null;break t}}A=k}A!==null?(n.memoizedState={dehydrated:A,treeContext:ir!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},k=$n(18,null,null,0),k.stateNode=A,k.return=n,n.child=k,Vn=n,an=null,k=!0):k=!1}k||sr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return td(A)?n.lanes=32:n.lanes=536870912,null;Ji(n)}return A=o.children,o=o.fallback,u?(Ea(),u=n.mode,A=jl({mode:"hidden",children:A},u),o=nr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=gf(a),u.childLanes=_f(e,M,a),n.memoizedState=mf,o):(Ma(n),vf(n,A))}if(k=e.memoizedState,k!==null&&(A=k.dehydrated,A!==null)){if(d)n.flags&256?(Ma(n),n.flags&=-257,n=xf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),u=o.fallback,A=n.mode,o=jl({mode:"visible",children:o.children},A),u=nr(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Jr(n,e.child,null,a),o=n.child,o.memoizedState=gf(a),o.childLanes=_f(e,M,a),n.memoizedState=mf,n=u);else if(Ma(n),td(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var et=M.dgst;M=et,o=Error(r(419)),o.stack="",o.digest=M,ao({value:o,source:null,stack:null}),n=xf(e,n,a)}else if(Mn||ro(e,n,a,!1),M=(a&e.childLanes)!==0,Mn||M){if(M=Ze,M!==null&&(o=a&-a,o=(o&42)!==0?1:ue(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,Gr(e,o),ai(M,e,o),ug;A.data==="$?"||Bf(),n=xf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,an=Ei(A.nextSibling),Vn=n,Pe=!0,rr=null,Li=!1,e!==null&&(fi[di++]=Yi,fi[di++]=ji,fi[di++]=ir,Yi=e.id,ji=e.overflow,ir=n),n=vf(n,o.children),n.flags|=4096);return n}return u?(Ea(),u=o.fallback,A=n.mode,k=e.child,et=k.sibling,o=qi(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,et!==null?u=qi(et,u):(u=nr(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=gf(a):(k=A.cachePool,k!==null?(et=gn._currentValue,k=k.parent!==et?{parent:et,pool:et}:k):k=rm(),A={baseLanes:A.baseLanes|a,cachePool:k}),u.memoizedState=A,u.childLanes=_f(e,M,a),n.memoizedState=mf,o):(Ma(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function vf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=$n(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,n,a){return Jr(n,e.child,null,a),e=vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function yg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),zu(e.return,n,a)}function yf(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Sg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Rn(e,n,o.children,a),o=_n.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yg(e,a,n);else if(e.tag===19)yg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(ht(_n,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yf(n,!0,a,null,d);break;case"together":yf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ro(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function sy(e,n,a){switch(n.tag){case 3:_t(n,n.stateNode.containerInfo),_a(n,gn,e.memoizedState.cache),io();break;case 27:case 5:Zt(n);break;case 4:_t(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xg(e,n,a):(Ma(n),e=$i(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ro(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Sg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(_n,_n.current),o)break;return null;case 22:case 23:return n.lanes=0,pg(e,n,a);case 24:_a(n,gn,e.memoizedState.cache)}return $i(e,n,a)}function Mg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!Sf(e,a)&&(n.flags&128)===0)return Mn=!1,sy(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,Pe&&(n.flags&1048576)!==0&&Jp(n,wl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Cu(o)?(e=fr(o,e),n.tag=1,n=_g(null,n,o,e,a)):(n.tag=0,n=pf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===b){n.tag=11,n=fg(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=dg(null,n,o,e,a);break t}}throw n=ut(o)||o,Error(r(306,n,""))}}return n;case 0:return pf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),_g(e,n,o,u,a);case 3:t:{if(_t(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ku(e,n),ho(n,o,null,a);var M=n.memoizedState;if(o=M.cache,_a(n,gn,o),o!==d.cache&&Bu(n,[gn],a,!0),fo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=vg(e,n,o,a);break t}else if(o!==u){u=ci(Error(r(424)),n),ao(u),n=vg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(an=Ei(e.firstChild),Vn=n,Pe=!0,rr=null,Li=!0,a=tg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(io(),o===u){n=$i(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return Yl(e,n),e===null?(a=A0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,e=n.pendingProps,o=lc(dt.current).createElement(a),o[mn]=n,o[en]=e,Dn(o,a,e),cn(o),n.stateNode=o):n.memoizedState=A0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Pe&&(o=n.stateNode=E0(n.type,n.pendingProps,dt.current),Vn=n,Li=!0,u=an,La(n.type)?(ed=u,an=Ei(o.firstChild)):an=u),Rn(e,n,n.pendingProps.children,a),Yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pe&&((u=o=an)&&(o=Oy(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Vn=n,an=Ei(o.firstChild),Li=!1,u=!0):u=!1),u||sr(n)),Zt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,Qf(u,d)?o=null:M!==null&&Qf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,Jx,null,null,a),Po._currentValue=u),Yl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Pe&&((e=a=an)&&(a=Py(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Vn=n,an=null,e=!0):e=!1),e||sr(n)),null;case 13:return xg(e,n,a);case 4:return _t(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Jr(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=Nn(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return dg(e,n,n.type,n.pendingProps,a);case 15:return hg(e,n,n.type,n.pendingProps,a);case 19:return Sg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=qi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return pg(e,n,a);case 24:return lr(n),o=Nn(gn),e===null?(u=Hu(),u===null&&(u=Ze,d=Iu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Vu(n),_a(n,gn,u)):((e.lanes&a)!==0&&(ku(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,gn,o)):(o=d.cache,_a(n,gn,o),o!==u.cache&&Bu(n,[gn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(e){e.flags|=4}function Eg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U0(n)){if(n=hi.current,n!==null&&((Re&4194048)===Re?Ni!==null:(Re&62914560)!==Re&&(Re&536870912)===0||n!==Ni))throw co=Gu,sm;e.flags|=8192}}function Zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,ns|=n)}function yo(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function oy(e,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(gn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(no(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,em())),tn(n),null;case 26:return a=n.memoizedState,e===null?(ta(n),a!==null?(tn(n),Eg(n,a)):(tn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ta(n),tn(n),Eg(n,a)):(tn(n),n.flags&=-16777217):(e.memoizedProps!==o&&ta(n),tn(n),n.flags&=-16777217),null;case 27:Ce(n),a=dt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}e=Et.current,no(n)?$p(n):(e=E0(u,o,a),n.stateNode=e,ta(n))}return tn(n),null;case 5:if(Ce(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(e=Et.current,no(n))$p(n);else{switch(u=lc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[mn]=n,e[en]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Dn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ta(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,no(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Vn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[mn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||g0(e.nodeValue,a)),e||sr(n)}else e=lc(e).createTextNode(o),e[mn]=n,n.stateNode=e}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=no(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[mn]=n}else io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=em(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ji(n),n):(Ji(n),null)}if(Ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),tn(n),null;case 4:return Bt(),e===null&&qf(n.stateNode.containerInfo),tn(n),null;case 10:return Ki(n.type),tn(n),null;case 19:if(at(_n),u=n.memoizedState,u===null)return tn(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)yo(u,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Xl(e),d!==null){for(n.flags|=128,yo(u,!1),e=d.updateQueue,n.updateQueue=e,Zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qp(a,e),a=a.sibling;return ht(_n,_n.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ct()>Jl&&(n.flags|=128,o=!0,yo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Xl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Zl(n,e),yo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Pe)return tn(n),null}else 2*Ct()-u.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,o=!0,yo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ct(),n.sibling=null,e=_n.current,ht(_n,o?e&1|2:e&1),n):(tn(n),null);case 22:case 23:return Ji(n),Yu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&at(cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(gn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ly(e,n){switch(Nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(gn),Bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ce(n),null;case 13:if(Ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));io()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(_n),null;case 4:return Bt(),null;case 10:return Ki(n.type),null;case 22:case 23:return Ji(n),Yu(),e!==null&&at(cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(gn),null;case 25:return null;default:return null}}function bg(e,n){switch(Nu(n),n.tag){case 3:Ki(gn),Bt();break;case 26:case 27:case 5:Ce(n);break;case 4:Bt();break;case 13:Ji(n);break;case 19:at(_n);break;case 10:Ki(n.type);break;case 22:case 23:Ji(n),Yu(),e!==null&&at(cr);break;case 24:Ki(gn)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){je(n,n.return,A)}}function ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var k=a,et=A;try{et()}catch(gt){je(u,k,gt)}}}o=o.next}while(o!==d)}}catch(gt){je(n,n.return,gt)}}function Tg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{dm(n,a)}catch(o){je(e,e.return,o)}}}function Ag(e,n,a){a.props=fr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){je(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){je(e,n,u)}}function Oi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){je(e,n,u)}else a.current=null}function wg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){je(e,e.return,u)}}function Mf(e,n,a){try{var o=e.stateNode;Cy(o,e.type,a,n),o[en]=n}catch(u){je(e,e.return,u)}}function Rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oc));else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bf(e,n,a),e=e.sibling;e!==null;)bf(e,n,a),e=e.sibling}function Kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Kl(e,n,a),e=e.sibling;e!==null;)Kl(e,n,a),e=e.sibling}function Cg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[mn]=e,n[en]=a}catch(d){je(e,e.return,d)}}var ea=!1,ln=!1,Tf=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,En=null;function cy(e,n){if(e=e.containerInfo,Zf=pc,e=Gp(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,A=-1,k=-1,et=0,gt=0,St=e,it=null;e:for(;;){for(var st;St!==a||u!==0&&St.nodeType!==3||(A=M+u),St!==d||o!==0&&St.nodeType!==3||(k=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(st=St.firstChild)!==null;)it=St,St=st;for(;;){if(St===e)break e;if(it===a&&++et===u&&(A=M),it===d&&++gt===o&&(k=M),(st=St.nextSibling)!==null)break;St=it,it=St.parentNode}St=st}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},pc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ce=fr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){je(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Ug(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&So(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){je(a,a.return,M)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){je(a,a.return,M)}}o&64&&Tg(a),o&512&&Mo(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dm(e,n)}catch(M){je(a,a.return,M)}}break;case 27:n===null&&o&4&&Cg(a);case 26:case 5:Ta(e,a),n===null&&o&4&&wg(a),o&512&&Mo(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&Og(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vy.bind(null,a),zy(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||ln,u=ea;var d=ln;ea=o,(ln=n)&&!d?Aa(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),ea=u,ln=d}break;case 30:break;default:Ta(e,a)}}function Lg(e){var n=e.alternate;n!==null&&(e.alternate=null,Lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Nr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Zn=!1;function na(e,n,a){for(a=a.child;a!==null;)Ng(e,n,a),a=a.sibling}function Ng(e,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:ln||Oi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Oi(a,n);var o=$e,u=Zn;La(a.type)&&($e=a.stateNode,Zn=!1),na(e,n,a),Uo(a.stateNode),$e=o,Zn=u;break;case 5:ln||Oi(a,n);case 6:if(o=$e,u=Zn,$e=null,na(e,n,a),$e=o,Zn=u,$e!==null)if(Zn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(d){je(a,n,d)}else try{$e.removeChild(a.stateNode)}catch(d){je(a,n,d)}break;case 18:$e!==null&&(Zn?(e=$e,S0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fo(e)):S0($e,a.stateNode));break;case 4:o=$e,u=Zn,$e=a.stateNode.containerInfo,Zn=!0,na(e,n,a),$e=o,Zn=u;break;case 0:case 11:case 14:case 15:ln||ba(2,a,n),ln||ba(4,a,n),na(e,n,a);break;case 1:ln||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ag(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,na(e,n,a),ln=o;break;default:na(e,n,a)}}function Og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fo(e)}catch(a){je(n,n.return,a)}}function uy(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dg),n;default:throw Error(r(435,e.tag))}}function Af(e,n){var a=uy(e);n.forEach(function(o){var u=xy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(La(A.type)){$e=A.stateNode,Zn=!1;break t}break;case 5:$e=A.stateNode,Zn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Zn=!0;break t}A=A.return}if($e===null)throw Error(r(160));Ng(d,M,u),$e=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Pg(n,e),n=n.sibling}var Mi=null;function Pg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),o&4&&(ba(3,e,e.return),So(3,e),ba(5,e,e.return));break;case 1:ti(n,e),ei(e),o&512&&(ln||a===null||Oi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(ti(n,e),ei(e),o&512&&(ln||a===null||Oi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ui]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[mn]=e,cn(d),o=d;break t;case"link":var M=C0("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=C0("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=e,cn(d),o=d}e.stateNode=o}else D0(u,e.type,e.stateNode);else e.stateNode=R0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?D0(u,e.type,e.stateNode):R0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ti(n,e),ei(e),o&512&&(ln||a===null||Oi(a,a.return)),a!==null&&o&4&&Mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ti(n,e),ei(e),o&512&&(ln||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{qn(u,"")}catch(st){je(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Mf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(ti(n,e),ei(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){je(e,e.return,st)}}break;case 3:if(fc=null,u=Mi,Mi=cc(n.containerInfo),ti(n,e),Mi=u,ei(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Fo(n.containerInfo)}catch(st){je(e,e.return,st)}Tf&&(Tf=!1,zg(e));break;case 4:o=Mi,Mi=cc(e.stateNode.containerInfo),ti(n,e),ei(e),Mi=o;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lf=Ct()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,et=ea,gt=ln;if(ea=et||u,ln=gt||k,ti(n,e),ln=gt,ea=et,ei(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ea||ln||dr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=k.stateNode;var St=k.memoizedProps.style,it=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(st){je(k,k.return,st)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(st){je(k,k.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Af(e,a))));break;case 19:ti(n,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Af(e,o)));break;case 30:break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Rg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Ef(e);Kl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(qn(M,""),a.flags&=-33);var A=Ef(e);Kl(e,A,M);break;case 3:case 4:var k=a.stateNode.containerInfo,et=Ef(e);bf(e,et,k);break;default:throw Error(r(161))}}catch(gt){je(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ug(e,n.alternate,n),n=n.sibling}function dr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),dr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ag(n,n.return,a),dr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Oi(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}e=e.sibling}}function Aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Aa(u,d,a),So(4,d);break;case 1:if(Aa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){je(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)fm(k[u],A)}catch(et){je(o,o.return,et)}}a&&M&64&&Tg(d),Mo(d,d.return);break;case 27:Cg(d);case 26:case 5:Aa(u,d,a),a&&o===null&&M&4&&wg(d),Mo(d,d.return);break;case 12:Aa(u,d,a);break;case 13:Aa(u,d,a),a&&M&4&&Og(u,d);break;case 22:d.memoizedState===null&&Aa(u,d,a),Mo(d,d.return);break;case 30:break;default:Aa(u,d,a)}n=n.sibling}}function wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Pi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(e,n,a,o),n=n.sibling}function Bg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n,a,o),u&2048&&So(9,n);break;case 1:Pi(e,n,a,o);break;case 3:Pi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){Pi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){je(n,n.return,k)}}else Pi(e,n,a,o);break;case 13:Pi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(e,n,a,o):Eo(e,n):d._visibility&2?Pi(e,n,a,o):(d._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&wf(M,n);break;case 24:Pi(e,n,a,o),u&2048&&Rf(n.alternate,n);break;default:Pi(e,n,a,o)}}function $r(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,A=a,k=o,et=M.flags;switch(M.tag){case 0:case 11:case 15:$r(d,M,A,k,u),So(8,M);break;case 23:break;case 22:var gt=M.stateNode;M.memoizedState!==null?gt._visibility&2?$r(d,M,A,k,u):Eo(d,M):(gt._visibility|=2,$r(d,M,A,k,u)),u&&et&2048&&wf(M.alternate,M);break;case 24:$r(d,M,A,k,u),u&&et&2048&&Rf(M.alternate,M);break;default:$r(d,M,A,k,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&wf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Rf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function ts(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 26:ts(e),e.flags&bo&&e.memoizedState!==null&&Zy(Mi,e.memoizedState,e.memoizedProps);break;case 5:ts(e);break;case 3:case 4:var n=Mi;Mi=cc(e.stateNode.containerInfo),ts(e),Mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bo,bo=16777216,ts(e),bo=n):ts(e));break;default:ts(e)}}function Fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Gg(o,e)}Fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&ba(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):To(e);break;default:To(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Gg(o,e)}Fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function Gg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,d=o.return;if(Lg(o),o===a){En=null;break t}if(u!==null){u.return=d,En=u;break t}En=d}}}var fy={getCacheForType:function(e){var n=Nn(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},dy=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,Te=null,Re=0,Ie=0,ni=null,wa=!1,es=!1,Cf=!1,ia=0,rn=0,Ra=0,hr=0,Df=0,pi=0,ns=0,Ao=null,Kn=null,Uf=!1,Lf=0,Jl=1/0,$l=null,Ca=null,Cn=0,Da=null,is=null,as=0,Nf=0,Of=null,Vg=null,wo=0,Pf=null;function ii(){if((Be&2)!==0&&Re!==0)return Re&-Re;if(P.T!==null){var e=Wr;return e!==0?e:Vf()}return Ue()}function kg(){pi===0&&(pi=(Re&536870912)===0||Pe?q():536870912);var e=hi.current;return e!==null&&(e.flags|=32),pi}function ai(e,n,a){(e===Ze&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Ua(e,Re,pi,!1)),Vt(e,a),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(hr|=a),rn===4&&Ua(e,Re,pi,!1)),zi(e))}function Xg(e,n,a){if((Be&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?my(e,n):If(e,n,!0),d=o;do{if(u===0){es&&!o&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!hy(a)){u=If(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=Ao;var k=A.current.memoizedState.isDehydrated;if(k&&(rs(A,M).flags|=256),M=If(A,M,!1),M!==2){if(Cf&&!k){A.errorRecoveryDisabledLanes|=d,hr|=d,u=4;break t}d=Kn,Kn=u,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){rs(e,0),Ua(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,pi,!wa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Lf+300-Ct(),10<u)){if(Ua(o,n,pi,!wa),jt(o,0,!0)!==0)break t;o.timeoutHandle=x0(Wg.bind(null,o,a,Kn,$l,Uf,n,pi,hr,ns,wa,d,2,-0,0),u);break t}Wg(o,a,Kn,$l,Uf,n,pi,hr,ns,wa,d,0,-0,0)}}break}while(!0);zi(e)}function Wg(e,n,a,o,u,d,M,A,k,et,gt,St,it,st){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(Oo={stylesheets:null,count:0,unsuspend:jy},Ig(n),St=Ky(),St!==null)){e.cancelPendingCommit=St(Jg.bind(null,e,n,d,a,o,u,M,A,k,gt,1,it,st)),Ua(e,d,M,!et);return}Jg(e,n,d,a,o,u,M,A,k)}function hy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,o){n&=~Df,n&=~hr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Ht(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Mt(e,a,n)}function tc(){return(Be&6)===0?(Ro(0),!1):!0}function zf(){if(Te!==null){if(Ie===0)var e=Te.return;else e=Te,Zi=or=null,Ju(e),Qr=null,vo=0,e=Te;for(;e!==null;)bg(e.alternate,e),e=e.return;Te=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Uy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zf(),Ze=e,Te=a=qi(e.current,null),Re=n,Ie=0,ni=null,wa=!1,es=Lt(e,n),Cf=!1,ns=pi=Df=hr=Ra=rn=0,Kn=Ao=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ht(o),d=1<<u;n|=e[u],o&=~d}return ia=n,Ml(),a}function qg(e,n){ye=null,P.H=Gl,n===lo||n===Ul?(n=cm(),Ie=3):n===sm?(n=cm(),Ie=4):Ie=n===ug?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Te===null&&(rn=1,ql(e,ci(n,e.current)))}function Yg(){var e=P.H;return P.H=Gl,e===null?Gl:e}function jg(){var e=P.A;return P.A=fy,e}function Bf(){rn=4,wa||(Re&4194048)!==Re&&hi.current!==null||(es=!0),(Ra&134217727)===0&&(hr&134217727)===0||Ze===null||Ua(Ze,Re,pi,!1)}function If(e,n,a){var o=Be;Be|=2;var u=Yg(),d=jg();(Ze!==e||Re!==n)&&($l=null,rs(e,n)),n=!1;var M=rn;t:do try{if(Ie!==0&&Te!==null){var A=Te,k=ni;switch(Ie){case 8:zf(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var et=Ie;if(Ie=0,ni=null,ss(e,A,k,et),a&&es){M=0;break t}break;default:et=Ie,Ie=0,ni=null,ss(e,A,k,et)}}py(),M=rn;break}catch(gt){qg(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Zi=or=null,Be=o,P.H=u,P.A=d,Te===null&&(Ze=null,Re=0,Ml()),M}function py(){for(;Te!==null;)Zg(Te)}function my(e,n){var a=Be;Be|=2;var o=Yg(),u=jg();Ze!==e||Re!==n?($l=null,Jl=Ct()+500,rs(e,n)):es=Lt(e,n);t:do try{if(Ie!==0&&Te!==null){n=Te;var d=ni;e:switch(Ie){case 1:Ie=0,ni=null,ss(e,n,d,1);break;case 2:case 9:if(om(d)){Ie=0,ni=null,Kg(n);break}n=function(){Ie!==2&&Ie!==9||Ze!==e||(Ie=7),zi(e)},d.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:om(d)?(Ie=0,ni=null,Kg(n)):(Ie=0,ni=null,ss(e,n,d,7));break;case 5:var M=null;switch(Te.tag){case 26:M=Te.memoizedState;case 5:case 27:var A=Te;if(!M||U0(M)){Ie=0,ni=null;var k=A.sibling;if(k!==null)Te=k;else{var et=A.return;et!==null?(Te=et,ec(et)):Te=null}break e}}Ie=0,ni=null,ss(e,n,d,5);break;case 6:Ie=0,ni=null,ss(e,n,d,6);break;case 8:zf(),rn=6;break t;default:throw Error(r(462))}}gy();break}catch(gt){qg(e,gt)}while(!0);return Zi=or=null,P.H=o,P.A=u,Be=a,Te!==null?0:(Ze=null,Re=0,Ml(),rn)}function gy(){for(;Te!==null&&!Gt();)Zg(Te)}function Zg(e){var n=Mg(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?ec(e):Te=n}function Kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Ju(n);default:bg(a,n),n=Te=Qp(n,ia),n=Mg(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?ec(e):Te=n}function ss(e,n,a,o){Zi=or=null,Ju(n),Qr=null,vo=0;var u=n.return;try{if(ry(e,u,n,a,Re)){rn=1,ql(e,ci(a,e.current)),Te=null;return}}catch(d){if(u!==null)throw Te=u,d;rn=1,ql(e,ci(a,e.current)),Te=null;return}n.flags&32768?(Pe||o===1?e=!0:es||(Re&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){Qg(n,wa);return}e=n.return;var a=oy(n.alternate,n,ia);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);rn===0&&(rn=5)}function Qg(e,n){do{var a=ly(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);rn=6,Te=null}function Jg(e,n,a,o,u,d,M,A,k){e.cancelPendingCommit=null;do nc();while(Cn!==0);if((Be&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=wu,At(e,a,d,M,A,k),e===Ze&&(Te=Ze=null,Re=0),is=n,Da=e,as=a,Nf=d,Of=u,Vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(Fe,function(){return i0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=W.p,W.p=2,M=Be,Be|=4;try{cy(e,n,a)}finally{Be=M,W.p=u,P.T=o}}Cn=1,$g(),t0(),e0()}}function $g(){if(Cn===1){Cn=0;var e=Da,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Be;Be|=4;try{Pg(n,e);var d=Kf,M=Gp(e.containerInfo),A=d.focusedElem,k=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&Hp(A.ownerDocument.documentElement,A)){if(k!==null&&Mu(A)){var et=k.start,gt=k.end;if(gt===void 0&&(gt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(gt,A.value.length);else{var St=A.ownerDocument||document,it=St&&St.defaultView||window;if(it.getSelection){var st=it.getSelection(),ce=A.textContent.length,se=Math.min(k.start,ce),ke=k.end===void 0?se:Math.min(k.end,ce);!st.extend&&se>ke&&(M=ke,ke=se,se=M);var j=Fp(A,se),X=Fp(A,ke);if(j&&X&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var J=St.createRange();J.setStart(j.node,j.offset),st.removeAllRanges(),se>ke?(st.addRange(J),st.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),st.addRange(J))}}}}for(St=[],st=A;st=st.parentNode;)st.nodeType===1&&St.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}pc=!!Zf,Kf=Zf=null}finally{Be=u,W.p=o,P.T=a}}e.current=n,Cn=2}}function t0(){if(Cn===2){Cn=0;var e=Da,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=W.p;W.p=2;var u=Be;Be|=4;try{Ug(e,n.alternate,n)}finally{Be=u,W.p=o,P.T=a}}Cn=3}}function e0(){if(Cn===4||Cn===3){Cn=0,de();var e=Da,n=is,a=as,o=Vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,is=Da=null,n0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ca=null),ze(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(pt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=W.p,W.p=2,P.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];d(A.value,{componentStack:A.stack})}}finally{P.T=n,W.p=u}}(as&3)!==0&&nc(),zi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Pf?wo++:(wo=0,Pf=e):wo=0,Ro(0)}}function n0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function nc(e){return $g(),t0(),e0(),i0()}function i0(){if(Cn!==5)return!1;var e=Da,n=Nf;Nf=0;var a=ze(as),o=P.T,u=W.p;try{W.p=32>a?32:a,P.T=null,a=Of,Of=null;var d=Da,M=as;if(Cn=0,is=Da=null,as=0,(Be&6)!==0)throw Error(r(331));var A=Be;if(Be|=4,Hg(d.current),Bg(d,d.current,M,a),Be=A,Ro(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(pt,d)}catch{}return!0}finally{W.p=u,P.T=o,n0(e,n)}}function a0(e,n,a){n=ci(a,n),n=hf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Vt(e,2),zi(e))}function je(e,n,a){if(e.tag===3)a0(e,e,a);else for(;n!==null;){if(n.tag===3){a0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=ci(a,e),a=lg(2),o=ya(n,a,2),o!==null&&(cg(a,o,n,e),Vt(o,2),zi(o));break}}n=n.return}}function Ff(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new dy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),e=_y.bind(null,e,n,a),n.then(e,e))}function _y(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Re&a)===a&&(rn===4||rn===3&&(Re&62914560)===Re&&300>Ct()-Lf?(Be&2)===0&&rs(e,0):Df|=a,ns===Re&&(ns=0)),zi(e)}function r0(e,n){n===0&&(n=Rt()),e=Gr(e,n),e!==null&&(Vt(e,n),zi(e))}function vy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),r0(e,a)}function xy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),r0(e,a)}function yy(e,n){return I(e,n)}var ic=null,os=null,Hf=!1,ac=!1,Gf=!1,pr=0;function zi(e){e!==os&&e.next===null&&(os===null?ic=os=e:os=os.next=e),ac=!0,Hf||(Hf=!0,My())}function Ro(e,n){if(!Gf&&ac){Gf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ht(42|e)+1)-1,d&=u&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,c0(o,d))}else d=Re,d=jt(o,o===Ze?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Lt(o,d)||(a=!0,c0(o,d));o=o.next}while(a);Gf=!1}}function Sy(){s0()}function s0(){ac=Hf=!1;var e=0;pr!==0&&(Dy()&&(e=pr),pr=0);for(var n=Ct(),a=null,o=ic;o!==null;){var u=o.next,d=o0(o,n);d===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(os=a)):(a=o,(e!==0||(d&3)!==0)&&(ac=!0)),o=u}Ro(e)}function o0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Ht(d),A=1<<M,k=u[M];k===-1?((A&a)===0||(A&o)!==0)&&(u[M]=fe(A,n)):k<=n&&(e.expiredLanes|=A),d&=~A}if(n=Ze,a=Re,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ie(o),ze(a)){case 2:case 8:a=re;break;case 32:a=Fe;break;case 268435456:a=z;break;default:a=Fe}return o=l0.bind(null,e),a=I(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function l0(e,n){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=Re;return o=jt(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Xg(e,o,n),o0(e,Ct()),e.callbackNode!=null&&e.callbackNode===a?l0.bind(null,e):null)}function c0(e,n){if(nc())return null;Xg(e,n,!0)}function My(){Ly(function(){(Be&6)!==0?I(Ft,Sy):s0()})}function Vf(){return pr===0&&(pr=q()),pr}function u0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function f0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ey(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=u0((u[en]||null).action),M=o.submitter;M&&(n=(n=M[en]||null)?u0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var A=new xl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var k=M?f0(u,M):new FormData(u);lf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(A.preventDefault(),k=M?f0(u,M):new FormData(u),lf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var kf=0;kf<Au.length;kf++){var Xf=Au[kf],by=Xf.toLowerCase(),Ty=Xf[0].toUpperCase()+Xf.slice(1);Si(by,"on"+Ty)}Si(Xp,"onAnimationEnd"),Si(Wp,"onAnimationIteration"),Si(qp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Vx,"onTransitionRun"),Si(kx,"onTransitionStart"),Si(Xx,"onTransitionCancel"),Si(Yp,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function d0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],k=A.instance,et=A.currentTarget;if(A=A.listener,k!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(gt){Wl(gt)}u.currentTarget=null,d=k}else for(M=0;M<o.length;M++){if(A=o[M],k=A.instance,et=A.currentTarget,A=A.listener,k!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(gt){Wl(gt)}u.currentTarget=null,d=k}}}}function Ae(e,n){var a=n[Ur];a===void 0&&(a=n[Ur]=new Set);var o=e+"__bubble";a.has(o)||(h0(n,e,2,!1),a.add(o))}function Wf(e,n,a){var o=0;n&&(o|=4),h0(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[rc]){e[rc]=!0,hl.forEach(function(a){a!=="selectionchange"&&(Ay.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,Wf("selectionchange",!1,n))}}function h0(e,n,a,o){switch(B0(n)){case 2:var u=$y;break;case 8:u=tS;break;default:u=sd}a=u.bind(null,n,a,e),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Yf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Xi(A),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){o=d=M;continue t}A=A.parentNode}}o=o.return}yp(function(){var et=d,gt=fu(a),St=[];t:{var it=jp.get(e);if(it!==void 0){var st=xl,ce=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":st=yx;break;case"focusin":ce="focus",st=_u;break;case"focusout":ce="blur",st=_u;break;case"beforeblur":case"afterblur":st=_u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Ex;break;case Xp:case Wp:case qp:st=fx;break;case Yp:st=Tx;break;case"scroll":case"scrollend":st=sx;break;case"wheel":st=wx;break;case"copy":case"cut":case"paste":st=hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Tp;break;case"toggle":case"beforetoggle":st=Cx}var se=(n&4)!==0,ke=!se&&(e==="scroll"||e==="scrollend"),j=se?it!==null?it+"Capture":null:it;se=[];for(var X=et,J;X!==null;){var vt=X;if(J=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||J===null||j===null||(vt=Ys(X,j),vt!=null&&se.push(Do(X,vt,J))),ke)break;X=X.return}0<se.length&&(it=new st(it,ce,null,a,gt),St.push({event:it,listeners:se}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",it&&a!==uu&&(ce=a.relatedTarget||a.fromElement)&&(Xi(ce)||ce[Di]))break t;if((st||it)&&(it=gt.window===gt?gt:(it=gt.ownerDocument)?it.defaultView||it.parentWindow:window,st?(ce=a.relatedTarget||a.toElement,st=et,ce=ce?Xi(ce):null,ce!==null&&(ke=c(ce),se=ce.tag,ce!==ke||se!==5&&se!==27&&se!==6)&&(ce=null)):(st=null,ce=et),st!==ce)){if(se=Ep,vt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(se=Tp,vt="onPointerLeave",j="onPointerEnter",X="pointer"),ke=st==null?it:Ja(st),J=ce==null?it:Ja(ce),it=new se(vt,X+"leave",st,a,gt),it.target=ke,it.relatedTarget=J,vt=null,Xi(gt)===et&&(se=new se(j,X+"enter",ce,a,gt),se.target=J,se.relatedTarget=ke,vt=se),ke=vt,st&&ce)e:{for(se=st,j=ce,X=0,J=se;J;J=ls(J))X++;for(J=0,vt=j;vt;vt=ls(vt))J++;for(;0<X-J;)se=ls(se),X--;for(;0<J-X;)j=ls(j),J--;for(;X--;){if(se===j||j!==null&&se===j.alternate)break e;se=ls(se),j=ls(j)}se=null}else se=null;st!==null&&p0(St,it,st,se,!1),ce!==null&&ke!==null&&p0(St,ke,ce,se,!0)}}t:{if(it=et?Ja(et):window,st=it.nodeName&&it.nodeName.toLowerCase(),st==="select"||st==="input"&&it.type==="file")var Xt=Np;else if(Up(it))if(Op)Xt=Fx;else{Xt=Bx;var Me=zx}else st=it.nodeName,!st||st.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&cu(et.elementType)&&(Xt=Np):Xt=Ix;if(Xt&&(Xt=Xt(e,et))){Lp(St,Xt,a,gt);break t}Me&&Me(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&Ln(it,"number",it.value)}switch(Me=et?Ja(et):window,e){case"focusin":(Up(Me)||Me.contentEditable==="true")&&(Ir=Me,Eu=et,eo=null);break;case"focusout":eo=Eu=Ir=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Vp(St,a,gt);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":Vp(St,a,gt)}var $t;if(xu)t:{switch(e){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else Br?Cp(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Ap&&a.locale!=="ko"&&(Br||le!=="onCompositionStart"?le==="onCompositionEnd"&&Br&&($t=Sp()):(ga=gt,pu="value"in ga?ga.value:ga.textContent,Br=!0)),Me=sc(et,le),0<Me.length&&(le=new bp(le,e,null,a,gt),St.push({event:le,listeners:Me}),$t?le.data=$t:($t=Dp(a),$t!==null&&(le.data=$t)))),($t=Ux?Lx(e,a):Nx(e,a))&&(le=sc(et,"onBeforeInput"),0<le.length&&(Me=new bp("onBeforeInput","beforeinput",null,a,gt),St.push({event:Me,listeners:le}),Me.data=$t)),Ey(St,e,et,a,gt)}d0(St,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ys(e,a),u!=null&&o.unshift(Do(e,u,d)),u=Ys(e,n),u!=null&&o.push(Do(e,u,d))),e.tag===3)return o;e=e.return}return[]}function ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var A=a,k=A.alternate,et=A.stateNode;if(A=A.tag,k!==null&&k===o)break;A!==5&&A!==26&&A!==27||et===null||(k=et,u?(et=Ys(a,d),et!=null&&M.unshift(Do(a,et,k))):u||(et=Ys(a,d),et!=null&&M.push(Do(a,et,k)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var wy=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function m0(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(Ry,"")}function g0(e,n){return n=m0(n),m0(e)===n}function oc(){}function Ve(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||qn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&qn(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":vp(e,o,d);break;case"data":if(n!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oc);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),Nt(e,"popover",o);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Nt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ax.get(a)||a,Nt(e,a,o))}}function jf(e,n,a,o,u,d){switch(a){case"style":vp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?qn(e,o):(typeof o=="number"||typeof o=="bigint")&&qn(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[en]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Nt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,d,M,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Ae("invalid",e);var A=d=M=u=null,k=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":M=gt;break;case"checked":k=gt;break;case"defaultChecked":et=gt;break;case"value":d=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Ve(e,n,o,gt,a,null)}}Gn(e,d,A,k,et,M,u,!1),be(e);return;case"select":Ae("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Ve(e,n,u,A,a,null)}n=d,a=M,e.multiple=!!o,n!=null?nn(e,!!o,n,!1):a!=null&&nn(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ve(e,n,M,A,a,null)}Or(e,o,u,d),be(e);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,k,o,a,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)Ae(Co[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,et,o,a,null)}return;default:if(cu(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&jf(e,n,gt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ve(e,n,A,o,a,null))}function Cy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,A=null,k=null,et=null,gt=null;for(st in a){var St=a[st];if(a.hasOwnProperty(st)&&St!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":k=St;default:o.hasOwnProperty(st)||Ve(e,n,st,null,o,St)}}for(var it in o){var st=o[it];if(St=a[it],o.hasOwnProperty(it)&&(st!=null||St!=null))switch(it){case"type":d=st;break;case"name":u=st;break;case"checked":et=st;break;case"defaultChecked":gt=st;break;case"value":M=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==St&&Ve(e,n,it,st,o,St)}}Ye(e,M,A,k,et,gt,d,u);return;case"select":st=M=A=it=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":st=k;default:o.hasOwnProperty(d)||Ve(e,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":it=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==k&&Ve(e,n,u,d,o,k)}n=A,a=M,o=st,it!=null?nn(e,!!a,it,!1):!!o!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":st=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,n,A,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":it=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ve(e,n,M,u,o,d)}wn(e,it,st);return;case"option":for(var ce in a)if(it=a[ce],a.hasOwnProperty(ce)&&it!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ve(e,n,ce,null,o,it)}for(k in o)if(it=o[k],st=a[k],o.hasOwnProperty(k)&&it!==st&&(it!=null||st!=null))switch(k){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ve(e,n,k,it,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)it=a[se],a.hasOwnProperty(se)&&it!=null&&!o.hasOwnProperty(se)&&Ve(e,n,se,null,o,it);for(et in o)if(it=o[et],st=a[et],o.hasOwnProperty(et)&&it!==st&&(it!=null||st!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ve(e,n,et,it,o,st)}return;default:if(cu(n)){for(var ke in a)it=a[ke],a.hasOwnProperty(ke)&&it!==void 0&&!o.hasOwnProperty(ke)&&jf(e,n,ke,void 0,o,it);for(gt in o)it=o[gt],st=a[gt],!o.hasOwnProperty(gt)||it===st||it===void 0&&st===void 0||jf(e,n,gt,it,o,st);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,it);for(St in o)it=o[St],st=a[St],!o.hasOwnProperty(St)||it===st||it==null&&st==null||Ve(e,n,St,it,o,st)}var Zf=null,Kf=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function _0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function Dy(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var x0=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(e){return y0.resolve(null).then(e).catch(Ny)}:x0;function Ny(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function S0(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Uo(M.documentElement),a&2&&Uo(M.body),a&4)for(a=M.head,Uo(a),M=a.firstChild;M;){var A=M.nextSibling,k=M.nodeName;M[Ui]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(d),Fo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Fo(n)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),Nr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Oy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function Py(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var ed=null;function M0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function E0(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Nr(e)}var mi=new Map,b0=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=W.d;W.d={f:By,r:Iy,D:Fy,C:Hy,L:Gy,m:Vy,X:Xy,S:ky,M:Wy};function By(){var e=aa.f(),n=tc();return e||n}function Iy(e){var n=pa(e);n!==null&&n.tag===5&&n.type==="form"?Xm(n):aa.r(e)}var cs=typeof document>"u"?null:document;function T0(e,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),b0.has(u)||(b0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),cn(n),o.head.appendChild(n)))}}function Fy(e){aa.D(e),T0("dns-prefetch",e,null)}function Hy(e,n){aa.C(e,n),T0("preconnect",e,n)}function Gy(e,n,a){aa.L(e,n,a);var o=cs;if(o&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var d=u;switch(n){case"style":d=us(e);break;case"script":d=fs(e)}mi.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Dn(n,"link",e),cn(n),o.head.appendChild(n)))}}function Vy(e,n){aa.m(e,n);var a=cs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(e)}if(!mi.has(d)&&(e=_({rel:"modulepreload",href:e},n),mi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Dn(o,"link",e),cn(o),a.head.appendChild(o)}}}function ky(e,n,a){aa.S(e,n,a);var o=cs;if(o&&e){var u=ma(o).hoistableStyles,d=us(e);n=n||"default";var M=u.get(d);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Lo(d)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(d))&&nd(e,a);var k=M=o.createElement("link");cn(k),Dn(k,"link",e),k._p=new Promise(function(et,gt){k.onload=et,k.onerror=gt}),k.addEventListener("load",function(){A.loading|=1}),k.addEventListener("error",function(){A.loading|=2}),A.loading|=4,uc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(d,M)}}}function Xy(e,n){aa.X(e,n);var a=cs;if(a&&e){var o=ma(a).hoistableScripts,u=fs(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=_({src:e,async:!0},n),(n=mi.get(u))&&id(e,n),d=a.createElement("script"),cn(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Wy(e,n){aa.M(e,n);var a=cs;if(a&&e){var o=ma(a).hoistableScripts,u=fs(e),d=o.get(u);d||(d=a.querySelector(No(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&id(e,n),d=a.createElement("script"),cn(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function A0(e,n,a,o){var u=(u=dt.current)?cc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var d=ma(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Lo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),d||qy(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Sn(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function w0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function qy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),cn(n),e.head.appendChild(n))}function fs(e){return'[src="'+Sn(e)+'"]'}function No(e){return"script[async]"+e}function R0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,cn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),cn(o),Dn(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=us(a.href);var d=e.querySelector(Lo(u));if(d)return n.state.loading|=4,n.instance=d,cn(d),d;o=w0(a),(u=mi.get(u))&&nd(o,u),d=(e.ownerDocument||e).createElement("link"),cn(d);var M=d;return M._p=new Promise(function(A,k){M.onload=A,M.onerror=k}),Dn(d,"link",o),n.state.loading|=4,uc(d,a.precedence,e),n.instance=d;case"script":return d=fs(a.src),(u=e.querySelector(No(d)))?(n.instance=u,cn(u),u):(o=a,(u=mi.get(d))&&(o=_({},a),id(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),cn(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function C0(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Ui]||d[mn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(d):o.set(M,[d])}}return o}function D0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Yy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Oo=null;function jy(){}function Zy(e,n,a){if(Oo===null)throw Error(r(475));var o=Oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=us(a.href),d=e.querySelector(Lo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=dc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,cn(d);return}d=e.ownerDocument||e,a=w0(a),(u=mi.get(u))&&nd(a,u),d=d.createElement("link"),cn(d);var M=d;M._p=new Promise(function(A,k){M.onload=A,M.onerror=k}),Dn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=dc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ky(){if(Oo===null)throw Error(r(475));var e=Oo;return e.stylesheets&&e.count===0&&ad(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&ad(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function dc(){if(this.count--,this.count===0){if(this.stylesheets)ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function ad(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(Qy,e),hc=null,dc.call(e))}function Qy(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:L,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Jy(e,n,a,o,u,d,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function L0(e,n,a,o,u,d,M,A,k,et,gt,St){return e=new Jy(e,n,a,M,A,k,et,St),n=1,d===!0&&(n|=24),d=$n(3,null,null,n),e.current=d,d.stateNode=e,n=Iu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Vu(d),e}function N0(e){return e?(e=Vr,e):Vr}function O0(e,n,a,o,u,d){u=N0(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ya(e,o,n),a!==null&&(ai(a,e,n),uo(a,e,n))}function P0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rd(e,n){P0(e,n),(e=e.alternate)&&P0(e,n)}function z0(e){if(e.tag===13){var n=Gr(e,67108864);n!==null&&ai(n,e,67108864),rd(e,67108864)}}var pc=!0;function $y(e,n,a,o){var u=P.T;P.T=null;var d=W.p;try{W.p=2,sd(e,n,a,o)}finally{W.p=d,P.T=u}}function tS(e,n,a,o){var u=P.T;P.T=null;var d=W.p;try{W.p=8,sd(e,n,a,o)}finally{W.p=d,P.T=u}}function sd(e,n,a,o){if(pc){var u=od(o);if(u===null)Yf(e,n,o,mc,a),I0(e,o);else if(nS(u,e,n,a,o))o.stopPropagation();else if(I0(e,o),n&4&&-1<eS.indexOf(e)){for(;u!==null;){var d=pa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=ee(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var k=1<<31-Ht(M);A.entanglements[1]|=k,M&=~k}zi(d),(Be&6)===0&&(Jl=Ct()+500,Ro(0))}}break;case 13:A=Gr(d,2),A!==null&&ai(A,d,2),tc(),rd(d,2)}if(d=od(o),d===null&&Yf(e,n,o,mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Yf(e,n,o,null,a)}}function od(e){return e=fu(e),ld(e)}var mc=null;function ld(e){if(mc=null,e=Xi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function B0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case Ft:return 2;case re:return 8;case Fe:case De:return 32;case z:return 268435456;default:return 32}default:return 32}}var cd=!1,Na=null,Oa=null,Pa=null,zo=new Map,Bo=new Map,za=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=pa(n),n!==null&&z0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function nS(e,n,a,o,u){switch(n){case"focusin":return Na=Io(Na,e,n,a,o,u),!0;case"dragenter":return Oa=Io(Oa,e,n,a,o,u),!0;case"mouseover":return Pa=Io(Pa,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return zo.set(d,Io(zo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Bo.set(d,Io(Bo.get(d)||null,e,n,a,o,u)),!0}return!1}function F0(e){var n=Xi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,xi(e.priority,function(){if(a.tag===13){var o=ii();o=ue(o);var u=Gr(a,o);u!==null&&ai(u,a,o),rd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=od(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=pa(a),n!==null&&z0(n),e.blockedOn=a,!1;n.shift()}return!0}function H0(e,n,a){gc(e)&&a.delete(n)}function iS(){cd=!1,Na!==null&&gc(Na)&&(Na=null),Oa!==null&&gc(Oa)&&(Oa=null),Pa!==null&&gc(Pa)&&(Pa=null),zo.forEach(H0),Bo.forEach(H0)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,cd||(cd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,iS)))}var vc=null;function G0(e){vc!==e&&(vc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ld(o||a)===null)continue;break}var d=pa(a);d!==null&&(e.splice(n,3),n-=3,lf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Fo(e){function n(k){return _c(k,e)}Na!==null&&_c(Na,e),Oa!==null&&_c(Oa,e),Pa!==null&&_c(Pa,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)F0(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[en]||null;if(typeof d=="function")M||G0(a);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[en]||null)A=M.formAction;else if(ld(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),G0(a)}}}function ud(e){this._internalRoot=e}xc.prototype.render=ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();O0(a,o,e,n,null,null)},xc.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;O0(e.current,2,null,e,null,null),tc(),n[Di]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&F0(e)}};var V0=t.version;if(V0!=="19.1.0")throw Error(r(527,V0,"19.1.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var aS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{pt=yc.inject(aS),yt=yc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=ag,d=rg,M=sg,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=L0(e,1,!1,null,null,a,o,u,d,M,A,null),e[Di]=n.current,qf(e),new ud(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=ag,M=rg,A=sg,k=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),n=L0(e,1,!0,n,a??null,o,u,d,M,A,k,et),n.context=N0(null),a=n.current,o=ii(),o=ue(o),u=xa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,Vt(n,a),zi(n),e[Di]=n.current,qf(e),new xc(n)},Go.version="19.1.0",Go}var J0;function pS(){if(J0)return hd.exports;J0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),hd.exports=hS(),hd.exports}var mS=pS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="179",gS=0,$0=1,_S=2,cv=1,au=2,fa=3,Ka=0,Bn=1,wi=2,Ya=0,Ns=1,eh=2,t_=3,e_=4,vS=5,br=100,xS=101,yS=102,SS=103,MS=104,ES=200,bS=201,TS=202,AS=203,nh=204,ih=205,wS=206,RS=207,CS=208,DS=209,US=210,LS=211,NS=212,OS=213,PS=214,ah=0,rh=1,sh=2,Bs=3,oh=4,lh=5,ch=6,uh=7,Qh=0,zS=1,BS=2,ja=0,IS=1,FS=2,HS=3,GS=4,VS=5,kS=6,XS=7,uv=300,Is=301,Fs=302,fh=303,dh=304,ru=306,hh=1e3,Ar=1001,ph=1002,Ci=1003,WS=1004,Sc=1005,Hi=1006,_d=1007,wr=1008,Vi=1009,fv=1010,dv=1011,nl=1012,Jh=1013,Rr=1014,da=1015,ol=1016,$h=1017,tp=1018,il=1020,hv=35902,pv=1021,mv=1022,Ri=1023,al=1026,rl=1027,gv=1028,ep=1029,_v=1030,np=1031,ip=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,mh=35840,gh=35841,_h=35842,vh=35843,xh=36196,yh=37492,Sh=37496,Mh=37808,Eh=37809,bh=37810,Th=37811,Ah=37812,wh=37813,Rh=37814,Ch=37815,Dh=37816,Uh=37817,Lh=37818,Nh=37819,Oh=37820,Ph=37821,$c=36492,zh=36494,Bh=36495,vv=36283,Ih=36284,Fh=36285,Hh=36286,qS=3200,YS=3201,xv=0,jS=1,qa="",_i="srgb",Hs="srgb-linear",eu="linear",Xe="srgb",ds=7680,n_=519,ZS=512,KS=513,QS=514,yv=515,JS=516,$S=517,tM=518,eM=519,Gh=35044,i_="300 es",Gi=2e3,nu=2001;class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,Vh=180/Math.PI;function Za(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function we(s,t,i){return Math.max(t,Math.min(i,s))}function nM(s,t){return(s%t+t)%t}function xd(s,t,i){return(1-i)*s+i*t}function Fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class me{constructor(t=0,i=0){me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3];const y=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h===1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=w;return}if(x!==w||m!==y||p!==S||_!==E){let v=1-h;const g=m*y+p*S+_*E+x*w,U=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const N=Math.sqrt(L),V=Math.atan2(N,g*U);v=Math.sin(v*V)/N,h=Math.sin(h*V)/N}const b=h*U;if(m=m*v+y*b,p=p*v+S*b,_=_*v+E*b,x=x*v+w*b,v===1-h){const N=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=N,p*=N,_*=N,x*=N}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+_*x+m*S-p*y,t[i+1]=m*E+_*y+p*x-h*S,t[i+2]=p*E+_*S+h*y-m*x,t[i+3]=_*E-h*x-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),x=h(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*_*x+p*S*E,this._y=p*S*x-y*_*E,this._z=p*_*E+y*S*x,this._w=p*_*x-y*S*E;break;case"YXZ":this._x=y*_*x+p*S*E,this._y=p*S*x-y*_*E,this._z=p*_*E-y*S*x,this._w=p*_*x+y*S*E;break;case"ZXY":this._x=y*_*x-p*S*E,this._y=p*S*x+y*_*E,this._z=p*_*E+y*S*x,this._w=p*_*x-y*S*E;break;case"ZYX":this._x=y*_*x-p*S*E,this._y=p*S*x+y*_*E,this._z=p*_*E-y*S*x,this._w=p*_*x+y*S*E;break;case"YZX":this._x=y*_*x+p*S*E,this._y=p*S*x+y*_*E,this._z=p*_*E-y*S*x,this._w=p*_*x-y*S*E;break;case"XZY":this._x=y*_*x-p*S*E,this._y=p*S*x-y*_*E,this._z=p*_*E+y*S*x,this._w=p*_*x+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],y=r+h+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>h&&r>x){const S=2*Math.sqrt(1+r-h-x);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-r-x);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+x-r-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-r*p,this._z=c*_+f*p+r*m-l*h,this._w=f*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),x=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=f*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(a_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(a_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),_=2*(h*i-c*l),x=2*(c*r-f*i);return this.x=i+m*p+f*x-h*_,this.y=r+m*_+h*p-c*x,this.z=l+m*x+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new Q,a_=new ll;class pe{constructor(t,i,r,l,c,f,h,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p)}set(t,i,r,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],_=r[4],x=r[7],y=r[2],S=r[5],E=r[8],w=l[0],v=l[3],g=l[6],U=l[1],L=l[4],b=l[7],N=l[2],V=l[5],B=l[8];return c[0]=f*w+h*U+m*N,c[3]=f*v+h*L+m*V,c[6]=f*g+h*b+m*B,c[1]=p*w+_*U+x*N,c[4]=p*v+_*L+x*V,c[7]=p*g+_*b+x*B,c[2]=y*w+S*U+E*N,c[5]=y*v+S*L+E*V,c[8]=y*g+S*b+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-r*c*_+r*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*f-h*p,y=h*m-_*c,S=p*c-f*m,E=i*x+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(l*p-_*r)*w,t[2]=(h*r-l*f)*w,t[3]=y*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-h*i)*w,t[6]=S*w,t[7]=(r*m-p*i)*w,t[8]=(f*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Sd.makeScale(t,i)),this}rotate(t){return this.premultiply(Sd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Sd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new pe;function Sv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iM(){const s=sl("canvas");return s.style.display="block",s}const r_={};function Os(s){s in r_||(r_[s]=!0,console.warn(s))}function aM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const s_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?eu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:t,whitePoint:r,transfer:eu,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Oe=rM();function ha(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class sM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=sl("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=sl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ha(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oM=0;class ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Md(l[f].image)):c.push(Md(l[f]))}else c=Md(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lM=0;const Ed=new Q;class In extends Vs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Ar,l=Ar,c=Hi,f=wr,h=Ri,m=Vi,p=In.DEFAULT_ANISOTROPY,_=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Za(),this.name="",this.source=new ap(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hh:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hh:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=uv;In.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,i=0,r=0,l=1){qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],y=m[1],S=m[5],E=m[9],w=m[2],v=m[6],g=m[10];if(Math.abs(_-y)<.01&&Math.abs(x-w)<.01&&Math.abs(E-v)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+w)<.1&&Math.abs(E+v)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,b=(S+1)/2,N=(g+1)/2,V=(_+y)/4,B=(x+w)/4,F=(E+v)/4;return L>b&&L>N?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=V/r,c=B/r):b>N?b<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(b),r=V/l,c=F/l):N<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),r=B/c,l=F/c),this.set(r,l,c,i),this}let U=Math.sqrt((v-E)*(v-E)+(x-w)*(x-w)+(y-_)*(y-_));return Math.abs(U)<.001&&(U=1),this.x=(v-E)/U,this.y=(x-w)/U,this.z=(y-_)/U,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this.w=we(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this.w=we(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cM extends Vs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new qe(0,0,t,i),this.scissorTest=!1,this.viewport=new qe(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new In(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ap(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends cM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Mv extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),Ec.subVectors(this.max,Vo),ps.subVectors(t.a,Vo),ms.subVectors(t.b,Vo),gs.subVectors(t.c,Vo),Ia.subVectors(ms,ps),Fa.subVectors(gs,ms),mr.subVectors(ps,gs);let i=[0,-Ia.z,Ia.y,0,-Fa.z,Fa.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Fa.z,0,-Fa.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Fa.y,Fa.x,0,-mr.y,mr.x,0];return!bd(i,ps,ms,gs,Ec)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,ps,ms,gs,Ec))?!1:(bc.crossVectors(Ia,Fa),i=[bc.x,bc.y,bc.z],bd(i,ps,ms,gs,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ra=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],bi=new Q,Mc=new cl,ps=new Q,ms=new Q,gs=new Q,Ia=new Q,Fa=new Q,mr=new Q,Vo=new Q,Ec=new Q,bc=new Q,gr=new Q;function bd(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){gr.fromArray(s,c);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=t.dot(gr),p=i.dot(gr),_=r.dot(gr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const fM=new cl,ko=new Q,Td=new Q;class su{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):fM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Td)),this.expandByPoint(ko.copy(t.center).sub(Td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new Q,Ad=new Q,Tc=new Q,Ha=new Q,wd=new Q,Ac=new Q,Rd=new Q;class rp{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ad.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(Ad);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=Ha.dot(this.direction),m=-Ha.dot(Tc),p=Ha.lengthSq(),_=Math.abs(1-f*f);let x,y,S,E;if(_>0)if(x=f*m-h,y=f*h-m,E=c*_,x>=0)if(y>=-E)if(y<=E){const w=1/_;x*=w,y*=w,S=x*(x+f*y+2*h)+y*(f*x+y+2*m)+p}else y=c,x=Math.max(0,-(f*y+h)),S=-x*x+y*(y+2*m)+p;else y=-c,x=Math.max(0,-(f*y+h)),S=-x*x+y*(y+2*m)+p;else y<=-E?(x=Math.max(0,-(-f*c+h)),y=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p):y<=E?(x=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(x=Math.max(0,-(f*c+h)),y=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p);else y=f>0?-c:c,x=Math.max(0,-(f*y+h)),S=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ad).addScaledVector(Tc,y),S}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),_>=0?(c=(t.min.y-y.y)*_,f=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,f=(t.min.y-y.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(h=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,r,l,c){wd.subVectors(i,t),Ac.subVectors(r,t),Rd.crossVectors(wd,Ac);let f=this.direction.dot(Rd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ha.subVectors(this.origin,t);const m=h*this.direction.dot(Ac.crossVectors(Ha,Ac));if(m<0)return null;const p=h*this.direction.dot(wd.cross(Ha));if(p<0||m+p>f)return null;const _=-h*Ha.dot(Rd);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,c,f,h,m,p,_,x,y,S,E,w,v){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,m,p,_,x,y,S,E,w,v)}set(t,i,r,l,c,f,h,m,p,_,x,y,S,E,w,v){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=h,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=y,g[3]=S,g[7]=E,g[11]=w,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),f=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const y=f*_,S=f*x,E=h*_,w=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=y-w*p,i[9]=-h*m,i[2]=w-y*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const y=m*_,S=m*x,E=p*_,w=p*x;i[0]=y+w*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*x,i[5]=f*_,i[9]=-h,i[2]=S*h-E,i[6]=w+y*h,i[10]=f*m}else if(t.order==="ZXY"){const y=m*_,S=m*x,E=p*_,w=p*x;i[0]=y-w*h,i[4]=-f*x,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*_,i[9]=w-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const y=f*_,S=f*x,E=h*_,w=h*x;i[0]=m*_,i[4]=E*p-S,i[8]=y*p+w,i[1]=m*x,i[5]=w*p+y,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const y=f*m,S=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=w-y*x,i[8]=E*x+S,i[1]=x,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*x+E,i[10]=y-w*x}else if(t.order==="XZY"){const y=f*m,S=f*p,E=h*m,w=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=y*x+w,i[5]=f*_,i[9]=S*x-E,i[2]=E*x-S,i[6]=h*_,i[10]=w*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dM,t,hM)}lookAt(t,i,r){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ga.crossVectors(r,ri),Ga.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ga.crossVectors(r,ri)),Ga.normalize(),wc.crossVectors(ri,Ga),l[0]=Ga.x,l[4]=wc.x,l[8]=ri.x,l[1]=Ga.y,l[5]=wc.y,l[9]=ri.y,l[2]=Ga.z,l[6]=wc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],_=r[1],x=r[5],y=r[9],S=r[13],E=r[2],w=r[6],v=r[10],g=r[14],U=r[3],L=r[7],b=r[11],N=r[15],V=l[0],B=l[4],F=l[8],C=l[12],D=l[1],G=l[5],nt=l[9],rt=l[13],ut=l[2],ot=l[6],P=l[10],W=l[14],H=l[3],xt=l[7],O=l[11],K=l[15];return c[0]=f*V+h*D+m*ut+p*H,c[4]=f*B+h*G+m*ot+p*xt,c[8]=f*F+h*nt+m*P+p*O,c[12]=f*C+h*rt+m*W+p*K,c[1]=_*V+x*D+y*ut+S*H,c[5]=_*B+x*G+y*ot+S*xt,c[9]=_*F+x*nt+y*P+S*O,c[13]=_*C+x*rt+y*W+S*K,c[2]=E*V+w*D+v*ut+g*H,c[6]=E*B+w*G+v*ot+g*xt,c[10]=E*F+w*nt+v*P+g*O,c[14]=E*C+w*rt+v*W+g*K,c[3]=U*V+L*D+b*ut+N*H,c[7]=U*B+L*G+b*ot+N*xt,c[11]=U*F+L*nt+b*P+N*O,c[15]=U*C+L*rt+b*W+N*K,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],y=t[10],S=t[14],E=t[3],w=t[7],v=t[11],g=t[15];return E*(+c*m*x-l*p*x-c*h*y+r*p*y+l*h*S-r*m*S)+w*(+i*m*S-i*p*y+c*f*y-l*f*S+l*p*_-c*m*_)+v*(+i*p*x-i*h*S-c*f*x+r*f*S+c*h*_-r*p*_)+g*(-l*h*_-i*m*x+i*h*y+l*f*x-r*f*y+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],y=t[10],S=t[11],E=t[12],w=t[13],v=t[14],g=t[15],U=x*v*p-w*y*p+w*m*S-h*v*S-x*m*g+h*y*g,L=E*y*p-_*v*p-E*m*S+f*v*S+_*m*g-f*y*g,b=_*w*p-E*x*p+E*h*S-f*w*S-_*h*g+f*x*g,N=E*x*m-_*w*m-E*h*y+f*w*y+_*h*v-f*x*v,V=i*U+r*L+l*b+c*N;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/V;return t[0]=U*B,t[1]=(w*y*c-x*v*c-w*l*S+r*v*S+x*l*g-r*y*g)*B,t[2]=(h*v*c-w*m*c+w*l*p-r*v*p-h*l*g+r*m*g)*B,t[3]=(x*m*c-h*y*c-x*l*p+r*y*p+h*l*S-r*m*S)*B,t[4]=L*B,t[5]=(_*v*c-E*y*c+E*l*S-i*v*S-_*l*g+i*y*g)*B,t[6]=(E*m*c-f*v*c-E*l*p+i*v*p+f*l*g-i*m*g)*B,t[7]=(f*y*c-_*m*c+_*l*p-i*y*p-f*l*S+i*m*S)*B,t[8]=b*B,t[9]=(E*x*c-_*w*c-E*r*S+i*w*S+_*r*g-i*x*g)*B,t[10]=(f*w*c-E*h*c+E*r*p-i*w*p-f*r*g+i*h*g)*B,t[11]=(_*h*c-f*x*c-_*r*p+i*x*p+f*r*S-i*h*S)*B,t[12]=N*B,t[13]=(_*w*l-E*x*l+E*r*y-i*w*y-_*r*v+i*x*v)*B,t[14]=(E*h*l-f*w*l-E*r*m+i*w*m+f*r*v-i*h*v)*B,t[15]=(f*x*l-_*h*l+_*r*m-i*x*m-f*r*y+i*h*y)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,x=h+h,y=c*p,S=c*_,E=c*x,w=f*_,v=f*x,g=h*x,U=m*p,L=m*_,b=m*x,N=r.x,V=r.y,B=r.z;return l[0]=(1-(w+g))*N,l[1]=(S+b)*N,l[2]=(E-L)*N,l[3]=0,l[4]=(S-b)*V,l[5]=(1-(y+g))*V,l[6]=(v+U)*V,l[7]=0,l[8]=(E+L)*B,l[9]=(v-U)*B,l[10]=(1-(y+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ti.copy(this);const p=1/c,_=1/f,x=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=x,Ti.elements[9]*=x,Ti.elements[10]*=x,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(r-l),y=(i+t)/(i-t),S=(r+l)/(r-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===nu)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,_=2/(i-t),x=2/(r-l),y=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(h===Gi)E=-2/(f-c),w=-(f+c)/(f-c);else if(h===nu)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new Q,Ti=new Qe,dM=new Q(0,0,0),hM=new Q(1,1,1),Ga=new Q,wc=new Q,ri=new Q,l_=new Qe,c_=new ll;class ki{constructor(t=0,i=0,r=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-we(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(we(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return l_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(l_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return c_.setFromEuler(this),this.setFromQuaternion(c_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pM=0;const u_=new Q,vs=new ll,oa=new Qe,Rc=new Q,Xo=new Q,mM=new Q,gM=new ll,f_=new Q(1,0,0),d_=new Q(0,1,0),h_=new Q(0,0,1),p_={type:"added"},_M={type:"removed"},xs={type:"childadded",child:null},Cd={type:"childremoved",child:null};class An extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new Q,i=new ki,r=new ll,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(f_,t)}rotateY(t){return this.rotateOnAxis(d_,t)}rotateZ(t){return this.rotateOnAxis(h_,t)}translateOnAxis(t,i){return u_.copy(t).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(f_,t)}translateY(t){return this.translateOnAxis(d_,t)}translateZ(t){return this.translateOnAxis(h_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Rc.copy(t):Rc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Xo,Rc,this.up):oa.lookAt(Rc,Xo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(oa),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(p_),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_M),Cd.child=t,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(p_),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,mM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,gM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),x=f(t.shapes),y=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new Q,la=new Q,Dd=new Q,ca=new Q,ys=new Q,Ss=new Q,m_=new Q,Ud=new Q,Ld=new Q,Nd=new Q,Od=new qe,Pd=new qe,zd=new qe;class vi{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ai.subVectors(l,i),la.subVectors(r,i),Dd.subVectors(t,i);const f=Ai.dot(Ai),h=Ai.dot(la),m=Ai.dot(Dd),p=la.dot(la),_=la.dot(Dd),x=f*p-h*h;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(p*m-h*_)*y,E=(f*_-h*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,r,l,c,f,h,m){return this.getBarycoord(t,i,r,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(f,ca.y),m.addScaledVector(h,ca.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Od.setScalar(0),Pd.setScalar(0),zd.setScalar(0),Od.fromBufferAttribute(t,i),Pd.fromBufferAttribute(t,r),zd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Od,c.x),f.addScaledVector(Pd,c.y),f.addScaledVector(zd,c.z),f}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),la.subVectors(t,i),Ai.cross(la).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ai.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;ys.subVectors(l,r),Ss.subVectors(c,r),Ud.subVectors(t,r);const m=ys.dot(Ud),p=Ss.dot(Ud);if(m<=0&&p<=0)return i.copy(r);Ld.subVectors(t,l);const _=ys.dot(Ld),x=Ss.dot(Ld);if(_>=0&&x<=_)return i.copy(l);const y=m*x-_*p;if(y<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(ys,f);Nd.subVectors(t,c);const S=ys.dot(Nd),E=Ss.dot(Nd);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ss,h);const v=_*E-S*x;if(v<=0&&x-_>=0&&S-E>=0)return m_.subVectors(c,l),h=(x-_)/(x-_+(S-E)),i.copy(l).addScaledVector(m_,h);const g=1/(v+w+y);return f=w*g,h=y*g,i.copy(r).addScaledVector(ys,f).addScaledVector(Ss,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Bd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Oe.workingColorSpace){if(t=nM(t,1),i=we(i,0,1),r=we(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Bd(f,c,t+1/3),this.g=Bd(f,c,t),this.b=Bd(f,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const r=Ev[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Oe.workingToColorSpace(zn.copy(this),t),Math.round(we(zn.r*255,0,255))*65536+Math.round(we(zn.g*255,0,255))*256+Math.round(we(zn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const x=f-h;switch(p=_<=.5?x/(f+h):x/(2-f-h),f){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=_i){Oe.workingToColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(Cc);const r=xd(Va.h,Cc.h,i),l=xd(Va.s,Cc.s,i),c=xd(Va.l,Cc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new xe;xe.NAMES=Ev;let vM=0;class Dr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Ns,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nh&&(r.blendSrc=this.blendSrc),this.blendDst!==ih&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tl extends Dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new Q,Dc=new me;let xM=0;class hn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Gh,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fi(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fi(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fi(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}}class bv extends hn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Tv extends hn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class oi extends hn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let yM=0;const gi=new Qe,Id=new An,Ms=new Q,si=new cl,Wo=new cl,Tn=new Q;class Fn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sv(t)?Tv:bv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,r){return gi.makeTranslation(t,i,r),this.applyMatrix4(gi),this}scale(t,i,r){return gi.makeScale(t,i,r),this.applyMatrix4(gi),this}lookAt(t){return Id.lookAt(t),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(si.min,Wo.min),si.expandByPoint(Tn),Tn.addVectors(si.max,Wo.max),si.expandByPoint(Tn)):(si.expandByPoint(Wo.min),si.expandByPoint(Wo.max))}si.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Tn.fromBufferAttribute(h,p),m&&(Ms.fromBufferAttribute(t,p),Tn.add(Ms)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let F=0;F<r.count;F++)h[F]=new Q,m[F]=new Q;const p=new Q,_=new Q,x=new Q,y=new me,S=new me,E=new me,w=new Q,v=new Q;function g(F,C,D){p.fromBufferAttribute(r,F),_.fromBufferAttribute(r,C),x.fromBufferAttribute(r,D),y.fromBufferAttribute(c,F),S.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),_.sub(p),x.sub(p),S.sub(y),E.sub(y);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(G),v.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(G),h[F].add(w),h[C].add(w),h[D].add(w),m[F].add(v),m[C].add(v),m[D].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let F=0,C=U.length;F<C;++F){const D=U[F],G=D.start,nt=D.count;for(let rt=G,ut=G+nt;rt<ut;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new Q,b=new Q,N=new Q,V=new Q;function B(F){N.fromBufferAttribute(l,F),V.copy(N);const C=h[F];L.copy(C),L.sub(N.multiplyScalar(N.dot(C))).normalize(),b.crossVectors(V,C);const G=b.dot(m[F])<0?-1:1;f.setXYZW(F,L.x,L.y,L.z,G)}for(let F=0,C=U.length;F<C;++F){const D=U[F],G=D.start,nt=D.count;for(let rt=G,ut=G+nt;rt<ut;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new Q,c=new Q,f=new Q,h=new Q,m=new Q,p=new Q,_=new Q,x=new Q;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),w=t.getX(y+1),v=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,v),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,v),h.add(_),m.add(_),p.add(_),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,y=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,v=m.length;w<v;w++){h.isInterleavedBufferAttribute?S=m[w]*h.data.stride+h.offset:S=m[w]*_;for(let g=0;g<_;g++)y[E++]=p[S++]}return new hn(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,x=p.length;_<x;_++){const y=p[_],S=t(y,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,y=p.length;x<y;x++){const S=p[x];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new Qe,_r=new rp,Uc=new su,__=new Q,Lc=new Q,Nc=new Q,Oc=new Q,Fd=new Q,Pc=new Q,v_=new Q,zc=new Q;class sn extends An{constructor(t=new Fn,i=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],x=c[m];_!==0&&(Fd.fromBufferAttribute(x,t),f?Pc.addScaledVector(Fd,_):Pc.addScaledVector(Fd.sub(i),_))}i.add(Pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),_r.copy(t.ray).recast(t.near),!(Uc.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Uc,__)===null||_r.origin.distanceToSquared(__)>(t.far-t.near)**2))&&(g_.copy(c).invert(),_r.copy(t.ray).applyMatrix4(g_),!(r.boundingBox!==null&&_r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,_r)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const v=y[E],g=f[v.materialIndex],U=Math.max(v.start,S.start),L=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let b=U,N=L;b<N;b+=3){const V=h.getX(b),B=h.getX(b+1),F=h.getX(b+2);l=Bc(this,g,t,r,p,_,x,V,B,F),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let v=E,g=w;v<g;v+=3){const U=h.getX(v),L=h.getX(v+1),b=h.getX(v+2);l=Bc(this,f,t,r,p,_,x,U,L,b),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=y.length;E<w;E++){const v=y[E],g=f[v.materialIndex],U=Math.max(v.start,S.start),L=Math.min(m.count,Math.min(v.start+v.count,S.start+S.count));for(let b=U,N=L;b<N;b+=3){const V=b,B=b+1,F=b+2;l=Bc(this,g,t,r,p,_,x,V,B,F),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let v=E,g=w;v<g;v+=3){const U=v,L=v+1,b=v+2;l=Bc(this,f,t,r,p,_,x,U,L,b),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function SM(s,t,i,r,l,c,f,h){let m;if(t.side===Bn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,t.side===Ka,h),m===null)return null;zc.copy(h),zc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:s}}function Bc(s,t,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Lc),s.getVertexPosition(m,Nc),s.getVertexPosition(p,Oc);const _=SM(s,t,i,r,Lc,Nc,Oc,v_);if(_){const x=new Q;vi.getBarycoord(v_,Lc,Nc,Oc,x),l&&(_.uv=vi.getInterpolatedAttribute(l,h,m,p,x,new me)),c&&(_.uv1=vi.getInterpolatedAttribute(c,h,m,p,x,new me)),f&&(_.normal=vi.getInterpolatedAttribute(f,h,m,p,x,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new Q,materialIndex:0};vi.getNormal(Lc,Nc,Oc,y.normal),_.face=y,_.barycoord=x}return _}class ul extends Fn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],x=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(p,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(x,2));function E(w,v,g,U,L,b,N,V,B,F,C){const D=b/B,G=N/F,nt=b/2,rt=N/2,ut=V/2,ot=B+1,P=F+1;let W=0,H=0;const xt=new Q;for(let O=0;O<P;O++){const K=O*G-rt;for(let at=0;at<ot;at++){const ht=at*D-nt;xt[w]=ht*U,xt[v]=K*L,xt[g]=ut,p.push(xt.x,xt.y,xt.z),xt[w]=0,xt[v]=0,xt[g]=V>0?1:-1,_.push(xt.x,xt.y,xt.z),x.push(at/B),x.push(1-O/F),W+=1}}for(let O=0;O<F;O++)for(let K=0;K<B;K++){const at=y+K+ot*O,ht=y+K+ot*(O+1),Et=y+(K+1)+ot*(O+1),$=y+(K+1)+ot*O;m.push(at,ht,$),m.push(ht,Et,$),H+=6}h.addGroup(S,H,C),S+=H,y+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Xn(s){const t={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)t[l]=r[l]}return t}function MM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Av(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const EM={clone:Gs,merge:Xn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=MM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new Q,x_=new me,y_=new me;class Wn extends wv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Vh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,x_,y_),i.subVectors(y_,x_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(vd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class AM extends An{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wn(Es,bs,t,i);l.layers=this.layers,this.add(l);const c=new Wn(Es,bs,t,i);c.layers=this.layers,this.add(c);const f=new Wn(Es,bs,t,i);f.layers=this.layers,this.add(f);const h=new Wn(Es,bs,t,i);h.layers=this.layers,this.add(h);const m=new Wn(Es,bs,t,i);m.layers=this.layers,this.add(m);const p=new Wn(Es,bs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,y,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Rv extends In{constructor(t=[],i=Is,r,l,c,f,h,m,p,_){super(t,i,r,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wM extends Cr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Rv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ya});c.uniforms.tEquirect.value=i;const f=new sn(l,c),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=Hi),new AM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Jo extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const v=i.getJointPose(w,r),g=this._getHandJoint(p,w);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Jo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class op extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=Za()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new Q;class iu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix4(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.applyNormalMatrix(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.transformDirection(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Fi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Fi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Fi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Fi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new hn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new iu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lp extends Dr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const qo=new Q,As=new Q,ws=new Q,Rs=new me,Yo=new me,Cv=new Qe,Ic=new Q,jo=new Q,Fc=new Q,S_=new me,Gd=new me,M_=new me;class Dv extends An{constructor(t=new lp){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new CM(i,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new iu(r,3,0,!1)),Ts.setAttribute("uv",new iu(r,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new me(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Cv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-ws.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Hc(Ic.set(-.5,-.5,0),ws,f,As,l,c),Hc(jo.set(.5,-.5,0),ws,f,As,l,c),Hc(Fc.set(.5,.5,0),ws,f,As,l,c),S_.set(0,0),Gd.set(1,0),M_.set(1,1);let h=t.ray.intersectTriangle(Ic,jo,Fc,!1,qo);if(h===null&&(Hc(jo.set(-.5,.5,0),ws,f,As,l,c),Gd.set(0,1),h=t.ray.intersectTriangle(Ic,Fc,jo,!1,qo),h===null))return;const m=t.ray.origin.distanceTo(qo);m<t.near||m>t.far||i.push({distance:m,point:qo.clone(),uv:vi.getInterpolation(qo,Ic,jo,Fc,S_,Gd,M_,new me),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hc(s,t,i,r,l,c){Rs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Yo.x=c*Rs.x-l*Rs.y,Yo.y=l*Rs.x+c*Rs.y):Yo.copy(Rs),s.copy(t),s.x+=Yo.x,s.y+=Yo.y,s.applyMatrix4(Cv)}const Vd=new Q,DM=new Q,UM=new pe;class Mr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Vd.subVectors(r,i).cross(DM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Vd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||UM.getNormalMatrix(t),l=this.coplanarPoint(Vd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new su,LM=new me(.5,.5),Gc=new Q;class cp{constructor(t=new Mr,i=new Mr,r=new Mr,l=new Mr,c=new Mr,f=new Mr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Gi,r=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],x=c[5],y=c[6],S=c[7],E=c[8],w=c[9],v=c[10],g=c[11],U=c[12],L=c[13],b=c[14],N=c[15];if(l[0].setComponents(p-f,S-_,g-E,N-U).normalize(),l[1].setComponents(p+f,S+_,g+E,N+U).normalize(),l[2].setComponents(p+h,S+x,g+w,N+L).normalize(),l[3].setComponents(p-h,S-x,g-w,N-L).normalize(),r)l[4].setComponents(m,y,v,b).normalize(),l[5].setComponents(p-m,S-y,g-v,N-b).normalize();else if(l[4].setComponents(p-m,S-y,g-v,N-b).normalize(),i===Gi)l[5].setComponents(p+m,S+y,g+v,N+b).normalize();else if(i===nu)l[5].setComponents(m,y,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){vr.center.set(0,0,0);const i=LM.distanceTo(t.center);return vr.radius=.7071067811865476+i,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zs extends Dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const E_=new Qe,kh=new rp,Vc=new su,kc=new Q;class el extends An{constructor(t=new Fn,i=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;E_.copy(l).invert(),kh.copy(t.ray).applyMatrix4(E_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,x=r.attributes.position;if(p!==null){const y=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=y,w=S;E<w;E++){const v=p.getX(E);kc.fromBufferAttribute(x,v),b_(kc,v,m,l,t,i,this)}}else{const y=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let E=y,w=S;E<w;E++)kc.fromBufferAttribute(x,E),b_(kc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function b_(s,t,i,r,l,c,f){const h=kh.distanceSqToPoint(s);if(h<i){const m=new Q;kh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Uv extends In{constructor(t,i,r,l,c,f,h,m,p){super(t,i,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lv extends In{constructor(t,i,r=Rr,l,c,f,h=Ci,m=Ci,p,_=al,x=1){if(_!==al&&_!==rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:x};super(y,l,c,f,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ou extends Fn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,x=t/h,y=i/m,S=[],E=[],w=[],v=[];for(let g=0;g<_;g++){const U=g*y-f;for(let L=0;L<p;L++){const b=L*x-c;E.push(b,-U,0),w.push(0,0,1),v.push(L/h),v.push(1-g/m)}}for(let g=0;g<m;g++)for(let U=0;U<h;U++){const L=U+p*g,b=U+p*(g+1),N=U+1+p*(g+1),V=U+1+p*g;S.push(L,b,V),S.push(b,N,V)}this.setIndex(S),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(w,3)),this.setAttribute("uv",new oi(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}}class up extends Fn{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],_=[];let x=t;const y=(i-t)/l,S=new Q,E=new me;for(let w=0;w<=l;w++){for(let v=0;v<=r;v++){const g=c+v/r*f;S.x=x*Math.cos(g),S.y=x*Math.sin(g),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,_.push(E.x,E.y)}x+=y}for(let w=0;w<l;w++){const v=w*(r+1);for(let g=0;g<r;g++){const U=g+v,L=U,b=U+r+1,N=U+r+2,V=U+1;h.push(L,b,V),h.push(b,N,V)}}this.setIndex(h),this.setAttribute("position",new oi(m,3)),this.setAttribute("normal",new oi(p,3)),this.setAttribute("uv",new oi(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new up(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qn extends Fn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const _=[],x=new Q,y=new Q,S=[],E=[],w=[],v=[];for(let g=0;g<=r;g++){const U=[],L=g/r;let b=0;g===0&&f===0?b=.5/i:g===r&&m===Math.PI&&(b=-.5/i);for(let N=0;N<=i;N++){const V=N/i;x.x=-t*Math.cos(l+V*c)*Math.sin(f+L*h),x.y=t*Math.cos(f+L*h),x.z=t*Math.sin(l+V*c)*Math.sin(f+L*h),E.push(x.x,x.y,x.z),y.copy(x).normalize(),w.push(y.x,y.y,y.z),v.push(V+b,1-L),U.push(p++)}_.push(U)}for(let g=0;g<r;g++)for(let U=0;U<i;U++){const L=_[g][U+1],b=_[g][U],N=_[g+1][U],V=_[g+1][U+1];(g!==0||f>0)&&S.push(L,b,V),(g!==r-1||m<Math.PI)&&S.push(b,N,V)}this.setIndex(S),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(w,3)),this.setAttribute("uv",new oi(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bi extends Dr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xv,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class NM extends Dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends Dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class PM{constructor(t,i,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,x){return p.push(_,x),this},this.removeHandler=function(_){const x=p.indexOf(_);return x!==-1&&p.splice(x,2),this},this.getHandler=function(_){for(let x=0,y=p.length;x<y;x+=2){const S=p[x],E=p[x+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const zM=new PM;class fp{constructor(t){this.manager=t!==void 0?t:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}fp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cs=new WeakMap;class BM extends fp{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=kd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let x=Cs.get(f);x===void 0&&(x=[],Cs.set(f,x)),x.push({onLoad:i,onError:l})}return f}const h=sl("img");function m(){_(),i&&i(this);const x=Cs.get(this)||[];for(let y=0;y<x.length;y++){const S=x[y];S.onLoad&&S.onLoad(this)}Cs.delete(this),c.manager.itemEnd(t)}function p(x){_(),l&&l(x),kd.remove(`image:${t}`);const y=Cs.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(x)}Cs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),kd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class Nv extends fp{constructor(t){super(t)}load(t,i,r,l){const c=new In,f=new BM(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class dp extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Xd=new Qe,T_=new Q,A_=new Q;class Ov{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cp,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;T_.setFromMatrixPosition(t.matrixWorld),i.position.copy(T_),A_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const w_=new Qe,Zo=new Q,Wd=new Q;class IM extends Ov{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Zo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Zo),Wd.copy(r.position),Wd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Wd),r.updateMatrixWorld(),l.makeTranslation(-Zo.x,-Zo.y,-Zo.z),w_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(w_,r.coordinateSystem,r.reversedDepth)}}class Pv extends dp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new IM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zv extends wv{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class FM extends Ov{constructor(){super(new zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HM extends dp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new FM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hp extends dp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class GM extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const R_=new Qe;class VM{constructor(t,i,r=0,l=1/0){this.ray=new rp(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return R_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R_),this}intersectObject(t,i=!0,r=[]){return Xh(t,this,r,i),r.sort(C_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Xh(t[l],this,r,i);return r.sort(C_),r}}function C_(s,t){return s.distance-t.distance}function Xh(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)Xh(c[f],t,i,!0)}}function D_(s,t,i,r){const l=kM(r);switch(i){case pv:return s*t;case gv:return s*t/l.components*l.byteLength;case ep:return s*t/l.components*l.byteLength;case _v:return s*t*2/l.components*l.byteLength;case np:return s*t*2/l.components*l.byteLength;case mv:return s*t*3/l.components*l.byteLength;case Ri:return s*t*4/l.components*l.byteLength;case ip:return s*t*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gh:case vh:return Math.max(s,16)*Math.max(t,8)/4;case mh:case _h:return Math.max(s,8)*Math.max(t,8)/2;case xh:case yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $c:case zh:case Bh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vv:case Ih:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fh:case Hh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kM(s){switch(s){case Vi:case fv:return{byteLength:1,components:1};case nl:case dv:case ol:return{byteLength:2,components:1};case $h:case tp:return{byteLength:2,components:4};case Rr:case Jh:case da:return{byteLength:4,components:1};case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bv(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function XM(s){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const _=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,_);else{x.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<x.length;S++){const E=x[y],w=x[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++y,x[y]=w)}x.length=y+1;for(let S=0,E=x.length;S<E;S++){const w=x[S];s.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
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
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
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
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`#ifdef USE_BATCHING
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
#endif`,tE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gE=`vec3 transformedNormal = objectNormal;
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
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
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
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
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
#endif`,kE=`struct PhysicalMaterial {
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
}`,XE=`
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tb=`#if defined( USE_POINTS_UV )
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
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
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
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cb=`float getShadowMask() {
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
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
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
}`,Qb=`#if DEPTH_PACKING == 3200
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
}`,Jb=`#define DISTANCE
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
}`,$b=`#define DISTANCE
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,rT=`uniform vec3 diffuse;
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
}`,sT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define MATCAP
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
}`,cT=`#define MATCAP
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
}`,uT=`#define NORMAL
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
}`,fT=`#define NORMAL
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
}`,dT=`#define PHONG
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
}`,hT=`#define PHONG
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
}`,pT=`#define STANDARD
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
}`,mT=`#define STANDARD
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
}`,gT=`#define TOON
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
}`,_T=`#define TOON
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
}`,vT=`uniform float size;
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ST=`uniform vec3 color;
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
}`,MT=`uniform float rotation;
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
}`,ET=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:WM,alphahash_pars_fragment:qM,alphamap_fragment:YM,alphamap_pars_fragment:jM,alphatest_fragment:ZM,alphatest_pars_fragment:KM,aomap_fragment:QM,aomap_pars_fragment:JM,batching_pars_vertex:$M,batching_vertex:tE,begin_vertex:eE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:aE,bumpmap_pars_fragment:rE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:fE,color_pars_vertex:dE,color_vertex:hE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:_E,displacementmap_vertex:vE,emissivemap_fragment:xE,emissivemap_pars_fragment:yE,colorspace_fragment:SE,colorspace_pars_fragment:ME,envmap_fragment:EE,envmap_common_pars_fragment:bE,envmap_pars_fragment:TE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:BE,envmap_vertex:wE,fog_vertex:RE,fog_pars_vertex:CE,fog_fragment:DE,fog_pars_fragment:UE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:NE,lights_lambert_fragment:OE,lights_lambert_pars_fragment:PE,lights_pars_begin:zE,lights_toon_fragment:IE,lights_toon_pars_fragment:FE,lights_phong_fragment:HE,lights_phong_pars_fragment:GE,lights_physical_fragment:VE,lights_physical_pars_fragment:kE,lights_fragment_begin:XE,lights_fragment_maps:WE,lights_fragment_end:qE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:KE,map_fragment:QE,map_pars_fragment:JE,map_particle_fragment:$E,map_particle_pars_fragment:tb,metalnessmap_fragment:eb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:ab,morphnormal_vertex:rb,morphtarget_pars_vertex:sb,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:ub,normal_pars_vertex:fb,normal_vertex:db,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:vb,packing:xb,premultiplied_alpha_fragment:yb,project_vertex:Sb,dithering_fragment:Mb,dithering_pars_fragment:Eb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:wb,shadowmap_vertex:Rb,shadowmask_pars_fragment:Cb,skinbase_vertex:Db,skinning_pars_vertex:Ub,skinning_vertex:Lb,skinnormal_vertex:Nb,specularmap_fragment:Ob,specularmap_pars_fragment:Pb,tonemapping_fragment:zb,tonemapping_pars_fragment:Bb,transmission_fragment:Ib,transmission_pars_fragment:Fb,uv_pars_fragment:Hb,uv_pars_vertex:Gb,uv_vertex:Vb,worldpos_vertex:kb,background_vert:Xb,background_frag:Wb,backgroundCube_vert:qb,backgroundCube_frag:Yb,cube_vert:jb,cube_frag:Zb,depth_vert:Kb,depth_frag:Qb,distanceRGBA_vert:Jb,distanceRGBA_frag:$b,equirect_vert:tT,equirect_frag:eT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:aT,meshbasic_frag:rT,meshlambert_vert:sT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:uT,meshnormal_frag:fT,meshphong_vert:dT,meshphong_frag:hT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:_T,points_vert:vT,points_frag:xT,shadow_vert:yT,shadow_frag:ST,sprite_vert:MT,sprite_frag:ET},zt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ii={basic:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Xn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Xn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Xn([zt.points,zt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Xn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Xn([zt.common,zt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Xn([zt.sprite,zt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Xn([zt.common,zt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Xn([zt.lights,zt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ii.physical={uniforms:Xn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Xc={r:0,b:0,g:0},xr=new ki,bT=new Qe;function TT(s,t,i,r,l,c,f){const h=new xe(0);let m=c===!0?0:1,p,_,x=null,y=0,S=null;function E(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?i:t).get(b)),b}function w(L){let b=!1;const N=E(L);N===null?g(h,m):N&&N.isColor&&(g(N,1),b=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,f):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(L,b){const N=E(b);N&&(N.isCubeTexture||N.mapping===ru)?(_===void 0&&(_=new sn(new ul(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Gs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(V,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),xr.copy(b.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(bT.makeRotationFromEuler(xr)),_.material.toneMapped=Oe.getTransfer(N.colorSpace)!==Xe,(x!==N||y!==N.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=N,y=N.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new sn(new ou(2,2),new Qa({name:"BackgroundMaterial",uniforms:Gs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(N.colorSpace)!==Xe,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||y!==N.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=N,y=N.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,b){L.getRGB(Xc,Av(s)),r.buffers.color.setClear(Xc.r,Xc.g,Xc.b,b,f)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,b=1){h.set(L),m=b,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(h,m)},render:w,addToRenderList:v,dispose:U}}function AT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function h(D,G,nt,rt,ut){let ot=!1;const P=x(rt,nt,G);c!==P&&(c=P,p(c.object)),ot=S(D,rt,nt,ut),ot&&E(D,rt,nt,ut),ut!==null&&t.update(ut,s.ELEMENT_ARRAY_BUFFER),(ot||f)&&(f=!1,b(D,G,nt,rt),ut!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function _(D){return s.deleteVertexArray(D)}function x(D,G,nt){const rt=nt.wireframe===!0;let ut=r[D.id];ut===void 0&&(ut={},r[D.id]=ut);let ot=ut[G.id];ot===void 0&&(ot={},ut[G.id]=ot);let P=ot[rt];return P===void 0&&(P=y(m()),ot[rt]=P),P}function y(D){const G=[],nt=[],rt=[];for(let ut=0;ut<i;ut++)G[ut]=0,nt[ut]=0,rt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:rt,object:D,attributes:{},index:null}}function S(D,G,nt,rt){const ut=c.attributes,ot=G.attributes;let P=0;const W=nt.getAttributes();for(const H in W)if(W[H].location>=0){const O=ut[H];let K=ot[H];if(K===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;P++}return c.attributesNum!==P||c.index!==rt}function E(D,G,nt,rt){const ut={},ot=G.attributes;let P=0;const W=nt.getAttributes();for(const H in W)if(W[H].location>=0){let O=ot[H];O===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),ut[H]=K,P++}c.attributes=ut,c.attributesNum=P,c.index=rt}function w(){const D=c.newAttributes;for(let G=0,nt=D.length;G<nt;G++)D[G]=0}function v(D){g(D,0)}function g(D,G){const nt=c.newAttributes,rt=c.enabledAttributes,ut=c.attributeDivisors;nt[D]=1,rt[D]===0&&(s.enableVertexAttribArray(D),rt[D]=1),ut[D]!==G&&(s.vertexAttribDivisor(D,G),ut[D]=G)}function U(){const D=c.newAttributes,G=c.enabledAttributes;for(let nt=0,rt=G.length;nt<rt;nt++)G[nt]!==D[nt]&&(s.disableVertexAttribArray(nt),G[nt]=0)}function L(D,G,nt,rt,ut,ot,P){P===!0?s.vertexAttribIPointer(D,G,nt,ut,ot):s.vertexAttribPointer(D,G,nt,rt,ut,ot)}function b(D,G,nt,rt){w();const ut=rt.attributes,ot=nt.getAttributes(),P=G.defaultAttributeValues;for(const W in ot){const H=ot[W];if(H.location>=0){let xt=ut[W];if(xt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const O=xt.normalized,K=xt.itemSize,at=t.get(xt);if(at===void 0)continue;const ht=at.buffer,Et=at.type,$=at.bytesPerElement,dt=Et===s.INT||Et===s.UNSIGNED_INT||xt.gpuType===Jh;if(xt.isInterleavedBufferAttribute){const mt=xt.data,_t=mt.stride,Bt=xt.offset;if(mt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<H.locationSize;Zt++)g(H.location+Zt,mt.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Zt=0;Zt<H.locationSize;Zt++)v(H.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Zt=0;Zt<H.locationSize;Zt++)L(H.location+Zt,K/H.locationSize,Et,O,_t*$,(Bt+K/H.locationSize*Zt)*$,dt)}else{if(xt.isInstancedBufferAttribute){for(let mt=0;mt<H.locationSize;mt++)g(H.location+mt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let mt=0;mt<H.locationSize;mt++)v(H.location+mt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let mt=0;mt<H.locationSize;mt++)L(H.location+mt,K/H.locationSize,Et,O,K*$,K/H.locationSize*mt*$,dt)}}else if(P!==void 0){const O=P[W];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(H.location,O);break;case 3:s.vertexAttrib3fv(H.location,O);break;case 4:s.vertexAttrib4fv(H.location,O);break;default:s.vertexAttrib1fv(H.location,O)}}}}U()}function N(){F();for(const D in r){const G=r[D];for(const nt in G){const rt=G[nt];for(const ut in rt)_(rt[ut].object),delete rt[ut];delete G[nt]}delete r[D]}}function V(D){if(r[D.id]===void 0)return;const G=r[D.id];for(const nt in G){const rt=G[nt];for(const ut in rt)_(rt[ut].object),delete rt[ut];delete G[nt]}delete r[D.id]}function B(D){for(const G in r){const nt=r[G];if(nt[D.id]===void 0)continue;const rt=nt[D.id];for(const ut in rt)_(rt[ut].object),delete rt[ut];delete nt[D.id]}}function F(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:V,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:v,disableUnusedAttributes:U}}function wT(s,t,i){let r;function l(p){r=p}function c(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,x){x!==0&&(s.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];i.update(S,r,1)}function m(p,_,x,y){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,x);let E=0;for(let w=0;w<x;w++)E+=_[w]*y[w];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function RT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ri&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const F=B===ol&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Vi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==da&&!F)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:N,maxSamples:V}}function CT(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Mr,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||l;return l=y,r=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,S){const E=x.clippingPlanes,w=x.clipIntersection,v=x.clipShadows,g=s.get(x);if(!l||E===null||E.length===0||c&&!v)c?_(null):p();else{const U=c?0:r,L=U*4;let b=g.clippingState||null;m.value=b,b=_(E,y,L,S);for(let N=0;N!==L;++N)b[N]=i[N];g.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,y,S,E){const w=x!==null?x.length:0;let v=null;if(w!==0){if(v=m.value,E!==!0||v===null){const g=S+w*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(v===null||v.length<g)&&(v=new Float32Array(g));for(let L=0,b=S;L!==w;++L,b+=4)f.copy(x[L]).applyMatrix4(U,h),f.normal.toArray(v,b),v[b+3]=f.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,v}}function DT(s){let t=new WeakMap;function i(f,h){return h===fh?f.mapping=Is:h===dh&&(f.mapping=Fs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===fh||h===dh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new wM(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ls=4,U_=[.125,.215,.35,.446,.526,.582],Tr=20,qd=new zv,L_=new xe;let Yd=null,jd=0,Zd=0,Kd=!1;const Er=(1+Math.sqrt(5))/2,Ds=1/Er,N_=[new Q(-Er,Ds,0),new Q(Er,Ds,0),new Q(-Ds,0,Er),new Q(Ds,0,Er),new Q(0,Er,-Ds),new Q(0,Er,Ds),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],UT=new Q;class O_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=UT}=c;Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yd,jd,Zd),this._renderer.xr.enabled=Kd,t.scissorTest=!1,Wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:ol,format:Ri,colorSpace:Hs,depthBuffer:!1},l=P_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LT(c)),this._blurMaterial=NT(c,t,i)}return l}_compileMaterial(t){const i=new sn(this._lodPlanes[0],t);this._renderer.compile(i,qd)}_sceneToCubeUV(t,i,r,l,c){const m=new Wn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(L_),x.toneMapping=ja,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const w=new tl({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),v=new sn(new ul,w);let g=!1;const U=t.background;U?U.isColor&&(w.color.copy(U),t.background=null,g=!0):(w.color.copy(L_),g=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):b===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const N=this._cubeSize;Wc(l,b*N,L>2?N:0,N,N),x.setRenderTarget(l),g&&x.render(v,m),x.render(t,m)}v.geometry.dispose(),v.material.dispose(),x.toneMapping=S,x.autoClear=y,t.background=U}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new sn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Wc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,qd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=N_[(l-c-1)%N_.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new sn(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),w=c/E,v=isFinite(c)?1+Math.floor(_*w):Tr;v>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Tr}`);const g=[];let U=0;for(let B=0;B<Tr;++B){const F=B/w,C=Math.exp(-F*F/2);g.push(C),B===0?U+=C:B<v&&(U+=2*C)}for(let B=0;B<g.length;B++)g[B]=g[B]/U;y.envMap.value=t.texture,y.samples.value=v,y.weights.value=g,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-r;const b=this._sizeLods[l],N=3*b*(l>L-Ls?l-L+Ls:0),V=4*(this._cubeSize-b);Wc(i,N,V,3*b,2*b),m.setRenderTarget(i),m.render(x,qd)}}function LT(s){const t=[],i=[],r=[];let l=s;const c=s-Ls+1+U_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-Ls?m=U_[f-s+Ls-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),_=-p,x=1+p,y=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,w=3,v=2,g=1,U=new Float32Array(w*E*S),L=new Float32Array(v*E*S),b=new Float32Array(g*E*S);for(let V=0;V<S;V++){const B=V%3*2/3-1,F=V>2?0:-1,C=[B,F,0,B+2/3,F,0,B+2/3,F+1,0,B,F,0,B+2/3,F+1,0,B,F+1,0];U.set(C,w*E*V),L.set(y,v*E*V);const D=[V,V,V,V,V,V];b.set(D,g*E*V)}const N=new Fn;N.setAttribute("position",new hn(U,w)),N.setAttribute("uv",new hn(L,v)),N.setAttribute("faceIndex",new hn(b,g)),t.push(N),l>Ls&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function P_(s,t,i){const r=new Cr(s,t,i);return r.texture.mapping=ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Wc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function NT(s,t,i){const r=new Float32Array(Tr),l=new Q(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function z_(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function B_(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function pp(){return`

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
	`}function OT(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===fh||m===dh,_=m===Is||m===Fs;if(p||_){let x=t.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new O_(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new O_(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function PT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function zT(s,t,i,r){const l={},c=new WeakMap;function f(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const S in y)t.update(y[S],s.ARRAY_BUFFER)}function p(x){const y=[],S=x.index,E=x.attributes.position;let w=0;if(S!==null){const U=S.array;w=S.version;for(let L=0,b=U.length;L<b;L+=3){const N=U[L+0],V=U[L+1],B=U[L+2];y.push(N,V,V,B,B,N)}}else if(E!==void 0){const U=E.array;w=E.version;for(let L=0,b=U.length/3-1;L<b;L+=3){const N=L+0,V=L+1,B=L+2;y.push(N,V,V,B,B,N)}}else return;const v=new(Sv(y)?Tv:bv)(y,1);v.version=w;const g=c.get(x);g&&t.remove(g),c.set(x,v)}function _(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function BT(s,t,i){let r;function l(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,S){s.drawElements(r,S,c,y*f),i.update(S,r,1)}function p(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,y*f,E),i.update(S,r,E))}function _(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let v=0;for(let g=0;g<E;g++)v+=S[g];i.update(v,r,1)}function x(y,S,E,w){if(E===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<y.length;g++)p(y[g]/f,S[g],w[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,w,0,E);let g=0;for(let U=0;U<E;U++)g+=S[U]*w[U];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function IT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function FT(s,t,i){const r=new WeakMap,l=new qe;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let D=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var S=D;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let b=0;E===!0&&(b=1),w===!0&&(b=2),v===!0&&(b=3);let N=h.attributes.position.count*b,V=1;N>t.maxTextureSize&&(V=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const B=new Float32Array(N*V*4*x),F=new Mv(B,N,V,x);F.type=da,F.needsUpdate=!0;const C=b*4;for(let G=0;G<x;G++){const nt=g[G],rt=U[G],ut=L[G],ot=N*V*4*G;for(let P=0;P<nt.count;P++){const W=P*C;E===!0&&(l.fromBufferAttribute(nt,P),B[ot+W+0]=l.x,B[ot+W+1]=l.y,B[ot+W+2]=l.z,B[ot+W+3]=0),w===!0&&(l.fromBufferAttribute(rt,P),B[ot+W+4]=l.x,B[ot+W+5]=l.y,B[ot+W+6]=l.z,B[ot+W+7]=0),v===!0&&(l.fromBufferAttribute(ut,P),B[ot+W+8]=l.x,B[ot+W+9]=l.y,B[ot+W+10]=l.z,B[ot+W+11]=ut.itemSize===4?l.w:1)}}y={count:x,texture:F,size:new me(N,V)},r.set(h,y),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function HT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Iv=new In,I_=new Lv(1,1),Fv=new Mv,Hv=new uM,Gv=new Rv,F_=[],H_=[],G_=new Float32Array(16),V_=new Float32Array(9),k_=new Float32Array(4);function ks(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function xn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function lu(s,t){let i=H_[t];i===void 0&&(i=new Int32Array(t),H_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function GT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function VT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function kT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function XT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function WT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;k_.set(r),s.uniformMatrix2fv(this.addr,!1,k_),yn(i,r)}}function qT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;V_.set(r),s.uniformMatrix3fv(this.addr,!1,V_),yn(i,r)}}function YT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;G_.set(r),s.uniformMatrix4fv(this.addr,!1,G_),yn(i,r)}}function jT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function ZT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function KT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function QT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function JT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function $T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function t1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function e1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function n1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(I_.compareFunction=yv,c=I_):c=Iv,i.setTexture2D(t||c,l)}function i1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Hv,l)}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Gv,l)}function r1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Fv,l)}function s1(s){switch(s){case 5126:return GT;case 35664:return VT;case 35665:return kT;case 35666:return XT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return jT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return t1;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return r1}}function o1(s,t){s.uniform1fv(this.addr,t)}function l1(s,t){const i=ks(t,this.size,2);s.uniform2fv(this.addr,i)}function c1(s,t){const i=ks(t,this.size,3);s.uniform3fv(this.addr,i)}function u1(s,t){const i=ks(t,this.size,4);s.uniform4fv(this.addr,i)}function f1(s,t){const i=ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function d1(s,t){const i=ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function h1(s,t){const i=ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function p1(s,t){s.uniform1iv(this.addr,t)}function m1(s,t){s.uniform2iv(this.addr,t)}function g1(s,t){s.uniform3iv(this.addr,t)}function _1(s,t){s.uniform4iv(this.addr,t)}function v1(s,t){s.uniform1uiv(this.addr,t)}function x1(s,t){s.uniform2uiv(this.addr,t)}function y1(s,t){s.uniform3uiv(this.addr,t)}function S1(s,t){s.uniform4uiv(this.addr,t)}function M1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Iv,c[f])}function E1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Hv,c[f])}function b1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Gv,c[f])}function T1(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Fv,c[f])}function A1(s){switch(s){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return T1}}class w1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=s1(i.type)}}class R1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=A1(i.type)}}class C1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Qd=/(\w+)(\])?(\[|\.)?/g;function X_(s,t){s.seq.push(t),s.map[t.id]=t}function D1(s,t,i){const r=s.name,l=r.length;for(Qd.lastIndex=0;;){const c=Qd.exec(r),f=Qd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){X_(i,p===void 0?new w1(h,s,t):new R1(h,s,t));break}else{let x=i.map[h];x===void 0&&(x=new C1(h),X_(i,x)),i=x}}}class tu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);D1(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function W_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const U1=37297;let L1=0;function N1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const q_=new pe;function O1(s){Oe._getMatrix(q_,Oe.workingColorSpace,s);const t=`mat3( ${q_.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(s)){case eu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Y_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+N1(s.getShaderSource(t),h)}else return c}function P1(s,t){const i=O1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function z1(s,t){let i;switch(t){case IS:i="Linear";break;case FS:i="Reinhard";break;case HS:i="Cineon";break;case GS:i="ACESFilmic";break;case kS:i="AgX";break;case XS:i="Neutral";break;case VS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new Q;function B1(){Oe.getLuminanceCoefficients(qc);const s=qc.x.toFixed(4),t=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function F1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function H1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function $o(s){return s!==""}function j_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(G1,k1)}const V1=new Map;function k1(s,t){let i=ve[t];if(i===void 0){const r=V1.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Wh(i)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(s){return s.replace(X1,W1)}function W1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function q1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===au?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function Y1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Fs:t="ENVMAP_TYPE_CUBE";break;case ru:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Z1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qh:t="ENVMAP_BLENDING_MULTIPLY";break;case zS:t="ENVMAP_BLENDING_MIX";break;case BS:t="ENVMAP_BLENDING_ADD";break}return t}function K1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Q1(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=q1(i),p=Y1(i),_=j1(i),x=Z1(i),y=K1(i),S=I1(i),E=F1(c),w=l.createProgram();let v,g,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),g.length>0&&(g+=`
`)):(v=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),g=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ve.tonemapping_pars_fragment:"",i.toneMapping!==ja?z1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,P1("linearToOutputTexel",i.outputColorSpace),B1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=Wh(f),f=j_(f,i),f=Z_(f,i),h=Wh(h),h=j_(h,i),h=Z_(h,i),f=K_(f),h=K_(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",i.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=U+v+f,b=U+g+h,N=W_(l,l.VERTEX_SHADER,L),V=W_(l,l.FRAGMENT_SHADER,b);l.attachShader(w,N),l.attachShader(w,V),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(G){if(s.debug.checkShaderErrors){const nt=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(N)||"",ut=l.getShaderInfoLog(V)||"",ot=nt.trim(),P=rt.trim(),W=ut.trim();let H=!0,xt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,N,V);else{const O=Y_(l,N,"vertex"),K=Y_(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ot+`
`+O+`
`+K)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(P===""||W==="")&&(xt=!1);xt&&(G.diagnostics={runnable:H,programLog:ot,vertexShader:{log:P,prefix:v},fragmentShader:{log:W,prefix:g}})}l.deleteShader(N),l.deleteShader(V),F=new tu(l,w),C=H1(l,w)}let F;this.getUniforms=function(){return F===void 0&&B(this),F};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(w,U1)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=L1++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=V,this}let J1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new tA(t),i.set(t,r)),r}}class tA{constructor(t){this.id=J1++,this.code=t,this.usedTimes=0}}function eA(s,t,i,r,l,c,f){const h=new sp,m=new $1,p=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function v(C,D,G,nt,rt){const ut=nt.fog,ot=rt.geometry,P=C.isMeshStandardMaterial?nt.environment:null,W=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),H=W&&W.mapping===ru?W.image.height:null,xt=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const O=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,K=O!==void 0?O.length:0;let at=0;ot.morphAttributes.position!==void 0&&(at=1),ot.morphAttributes.normal!==void 0&&(at=2),ot.morphAttributes.color!==void 0&&(at=3);let ht,Et,$,dt;if(xt){const Ue=Ii[xt];ht=Ue.vertexShader,Et=Ue.fragmentShader}else ht=C.vertexShader,Et=C.fragmentShader,m.update(C),$=m.getVertexShaderID(C),dt=m.getFragmentShaderID(C);const mt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Bt=rt.isInstancedMesh===!0,Zt=rt.isBatchedMesh===!0,Ce=!!C.map,bt=!!C.matcap,I=!!W,ie=!!C.aoMap,Gt=!!C.lightMap,de=!!C.bumpMap,Ct=!!C.normalMap,Ee=!!C.displacementMap,Ft=!!C.emissiveMap,re=!!C.metalnessMap,Fe=!!C.roughnessMap,De=C.anisotropy>0,z=C.clearcoat>0,T=C.dispersion>0,tt=C.iridescence>0,pt=C.sheen>0,yt=C.transmission>0,ft=De&&!!C.anisotropyMap,Ht=z&&!!C.clearcoatMap,Dt=z&&!!C.clearcoatNormalMap,Kt=z&&!!C.clearcoatRoughnessMap,Jt=tt&&!!C.iridescenceMap,Tt=tt&&!!C.iridescenceThicknessMap,Ot=pt&&!!C.sheenColorMap,ee=pt&&!!C.sheenRoughnessMap,jt=!!C.specularMap,Lt=!!C.specularColorMap,fe=!!C.specularIntensityMap,q=yt&&!!C.transmissionMap,Rt=yt&&!!C.thicknessMap,Ut=!!C.gradientMap,Vt=!!C.alphaMap,At=C.alphaTest>0,Mt=!!C.alphaHash,Yt=!!C.extensions;let ue=ja;C.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const ze={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:ht,fragmentShader:Et,defines:C.defines,customVertexShaderID:$,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Zt,batchingColor:Zt&&rt._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&rt.instanceColor!==null,instancingMorph:Bt&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Hs,alphaToCoverage:!!C.alphaToCoverage,map:Ce,matcap:bt,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:H,aoMap:ie,lightMap:Gt,bumpMap:de,normalMap:Ct,displacementMap:y&&Ee,emissiveMap:Ft,normalMapObjectSpace:Ct&&C.normalMapType===jS,normalMapTangentSpace:Ct&&C.normalMapType===xv,metalnessMap:re,roughnessMap:Fe,anisotropy:De,anisotropyMap:ft,clearcoat:z,clearcoatMap:Ht,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:tt,iridescenceMap:Jt,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:Ot,sheenRoughnessMap:ee,specularMap:jt,specularColorMap:Lt,specularIntensityMap:fe,transmission:yt,transmissionMap:q,thicknessMap:Rt,gradientMap:Ut,opaque:C.transparent===!1&&C.blending===Ns&&C.alphaToCoverage===!1,alphaMap:Vt,alphaTest:At,alphaHash:Mt,combine:C.combine,mapUv:Ce&&w(C.map.channel),aoMapUv:ie&&w(C.aoMap.channel),lightMapUv:Gt&&w(C.lightMap.channel),bumpMapUv:de&&w(C.bumpMap.channel),normalMapUv:Ct&&w(C.normalMap.channel),displacementMapUv:Ee&&w(C.displacementMap.channel),emissiveMapUv:Ft&&w(C.emissiveMap.channel),metalnessMapUv:re&&w(C.metalnessMap.channel),roughnessMapUv:Fe&&w(C.roughnessMap.channel),anisotropyMapUv:ft&&w(C.anisotropyMap.channel),clearcoatMapUv:Ht&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ee&&w(C.sheenRoughnessMap.channel),specularMapUv:jt&&w(C.specularMap.channel),specularColorMapUv:Lt&&w(C.specularColorMap.channel),specularIntensityMapUv:fe&&w(C.specularIntensityMap.channel),transmissionMapUv:q&&w(C.transmissionMap.channel),thicknessMapUv:Rt&&w(C.thicknessMap.channel),alphaMapUv:Vt&&w(C.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Ct||De),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ot.attributes.uv&&(Ce||Vt),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_t,skinning:rt.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:at,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ce&&C.map.isVideoTexture===!0&&Oe.getTransfer(C.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(C.emissiveMap.colorSpace)===Xe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===wi,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Yt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&C.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function g(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)D.push(G),D.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(U(D,C),L(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function U(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function L(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function b(C){const D=E[C.type];let G;if(D){const nt=Ii[D];G=EM.clone(nt.uniforms)}else G=C.uniforms;return G}function N(C,D){let G;for(let nt=0,rt=_.length;nt<rt;nt++){const ut=_[nt];if(ut.cacheKey===D){G=ut,++G.usedTimes;break}}return G===void 0&&(G=new Q1(s,D,C,c),_.push(G)),G}function V(C){if(--C.usedTimes===0){const D=_.indexOf(C);_[D]=_[_.length-1],_.pop(),C.destroy()}}function B(C){m.remove(C)}function F(){m.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:N,releaseProgram:V,releaseShaderCache:B,programs:_,dispose:F}}function nA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function iA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function J_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $_(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(x,y,S,E,w,v){let g=s[t];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:E,renderOrder:x.renderOrder,z:w,group:v},s[t]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=w,g.group=v),t++,g}function h(x,y,S,E,w,v){const g=f(x,y,S,E,w,v);S.transmission>0?r.push(g):S.transparent===!0?l.push(g):i.push(g)}function m(x,y,S,E,w,v){const g=f(x,y,S,E,w,v);S.transmission>0?r.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,y){i.length>1&&i.sort(x||iA),r.length>1&&r.sort(y||J_),l.length>1&&l.sort(y||J_)}function _(){for(let x=t,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function aA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new $_,s.set(r,[f])):l>=c.length?(f=new $_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function rA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new xe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function sA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let oA=0;function lA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cA(s){const t=new rA,i=sA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,c=new Qe,f=new Qe;function h(p){let _=0,x=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,E=0,w=0,v=0,g=0,U=0,L=0,b=0,N=0,V=0,B=0;p.sort(lA);for(let C=0,D=p.length;C<D;C++){const G=p[C],nt=G.color,rt=G.intensity,ut=G.distance,ot=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=nt.r*rt,x+=nt.g*rt,y+=nt.b*rt;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],rt);B++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,H=i.get(G);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=ot,r.directionalShadowMatrix[S]=G.shadow.matrix,U++}r.directional[S]=P,S++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(nt).multiplyScalar(rt),P.distance=ut,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[w]=P;const W=G.shadow;if(G.map&&(r.spotLightMap[N]=G.map,N++,W.updateMatrices(G),G.castShadow&&V++),r.spotLightMatrix[w]=W.matrix,G.castShadow){const H=i.get(G);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,r.spotShadow[w]=H,r.spotShadowMap[w]=ot,b++}w++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(nt).multiplyScalar(rt),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[v]=P,v++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const W=G.shadow,H=i.get(G);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=ot,r.pointShadowMatrix[E]=G.shadow.matrix,L++}r.point[E]=P,E++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(rt),P.groundColor.copy(G.groundColor).multiplyScalar(rt),r.hemi[g]=P,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const F=r.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==w||F.rectAreaLength!==v||F.hemiLength!==g||F.numDirectionalShadows!==U||F.numPointShadows!==L||F.numSpotShadows!==b||F.numSpotMaps!==N||F.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=v,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+N-V,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=B,F.directionalLength=S,F.pointLength=E,F.spotLength=w,F.rectAreaLength=v,F.hemiLength=g,F.numDirectionalShadows=U,F.numPointShadows=L,F.numSpotShadows=b,F.numSpotMaps=N,F.numLightProbes=B,r.version=oA++)}function m(p,_){let x=0,y=0,S=0,E=0,w=0;const v=_.matrixWorldInverse;for(let g=0,U=p.length;g<U;g++){const L=p[g];if(L.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(v),x++}else if(L.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(v),S++}else if(L.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),f.identity(),c.copy(L.matrixWorld),c.premultiply(v),f.extractRotation(c),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const b=r.point[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),y++}else if(L.isHemisphereLight){const b=r.hemi[w];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(v),w++}}}return{setup:h,setupView:m,state:r}}function tv(s){const t=new cA(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function uA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new tv(s),t.set(l,[h])):c>=f.length?(h=new tv(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`;function hA(s,t,i){let r=new cp;const l=new me,c=new me,f=new qe,h=new NM({depthPacking:YS}),m=new OM,p={},_=i.maxTextureSize,x={[Ka]:Bn,[Bn]:Ka,[wi]:wi},y=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:fA,fragmentShader:dA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Fn;E.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new sn(E,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let g=this.type;this.render=function(V,B,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||V.length===0)return;const C=s.getRenderTarget(),D=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(Ya),nt.buffers.depth.getReversed()?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const rt=g!==fa&&this.type===fa,ut=g===fa&&this.type!==fa;for(let ot=0,P=V.length;ot<P;ot++){const W=V[ot],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const xt=H.getFrameExtents();if(l.multiply(xt),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/xt.x),l.x=c.x*xt.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/xt.y),l.y=c.y*xt.y,H.mapSize.y=c.y)),H.map===null||rt===!0||ut===!0){const K=this.type!==fa?{minFilter:Ci,magFilter:Ci}:{};H.map!==null&&H.map.dispose(),H.map=new Cr(l.x,l.y,K),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const O=H.getViewportCount();for(let K=0;K<O;K++){const at=H.getViewport(K);f.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),nt.viewport(f),H.updateMatrices(W,K),r=H.getFrustum(),b(B,F,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===fa&&U(H,F),H.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(C,D,G)};function U(V,B){const F=t.update(w);y.defines.VSM_SAMPLES!==V.blurSamples&&(y.defines.VSM_SAMPLES=V.blurSamples,S.defines.VSM_SAMPLES=V.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Cr(l.x,l.y)),y.uniforms.shadow_pass.value=V.map.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(B,null,F,y,w,null),S.uniforms.shadow_pass.value=V.mapPass.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(B,null,F,S,w,null)}function L(V,B,F,C){let D=null;const G=F.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)D=G;else if(D=F.isPointLight===!0?m:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const nt=D.uuid,rt=B.uuid;let ut=p[nt];ut===void 0&&(ut={},p[nt]=ut);let ot=ut[rt];ot===void 0&&(ot=D.clone(),ut[rt]=ot,B.addEventListener("dispose",N)),D=ot}if(D.visible=B.visible,D.wireframe=B.wireframe,C===fa?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:x[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,F.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const nt=s.properties.get(D);nt.light=F}return D}function b(V,B,F,C,D){if(V.visible===!1)return;if(V.layers.test(B.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&D===fa)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,V.matrixWorld);const rt=t.update(V),ut=V.material;if(Array.isArray(ut)){const ot=rt.groups;for(let P=0,W=ot.length;P<W;P++){const H=ot[P],xt=ut[H.materialIndex];if(xt&&xt.visible){const O=L(V,xt,C,D);V.onBeforeShadow(s,V,B,F,rt,O,H),s.renderBufferDirect(F,null,rt,O,V,H),V.onAfterShadow(s,V,B,F,rt,O,H)}}}else if(ut.visible){const ot=L(V,ut,C,D);V.onBeforeShadow(s,V,B,F,rt,ot,null),s.renderBufferDirect(F,null,rt,ot,V,null),V.onAfterShadow(s,V,B,F,rt,ot,null)}}const nt=V.children;for(let rt=0,ut=nt.length;rt<ut;rt++)b(nt[rt],B,F,C,D)}function N(V){V.target.removeEventListener("dispose",N);for(const F in p){const C=p[F],D=V.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const pA={[ah]:rh,[sh]:ch,[oh]:uh,[Bs]:lh,[rh]:ah,[ch]:sh,[uh]:oh,[lh]:Bs};function mA(s,t){function i(){let q=!1;const Rt=new qe;let Ut=null;const Vt=new qe(0,0,0,0);return{setMask:function(At){Ut!==At&&!q&&(s.colorMask(At,At,At,At),Ut=At)},setLocked:function(At){q=At},setClear:function(At,Mt,Yt,ue,ze){ze===!0&&(At*=ue,Mt*=ue,Yt*=ue),Rt.set(At,Mt,Yt,ue),Vt.equals(Rt)===!1&&(s.clearColor(At,Mt,Yt,ue),Vt.copy(Rt))},reset:function(){q=!1,Ut=null,Vt.set(-1,0,0,0)}}}function r(){let q=!1,Rt=!1,Ut=null,Vt=null,At=null;return{setReversed:function(Mt){if(Rt!==Mt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Mt;const ue=At;At=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(Mt){Mt?mt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(Mt){Ut!==Mt&&!q&&(s.depthMask(Mt),Ut=Mt)},setFunc:function(Mt){if(Rt&&(Mt=pA[Mt]),Vt!==Mt){switch(Mt){case ah:s.depthFunc(s.NEVER);break;case rh:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case oh:s.depthFunc(s.EQUAL);break;case lh:s.depthFunc(s.GEQUAL);break;case ch:s.depthFunc(s.GREATER);break;case uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Vt=Mt}},setLocked:function(Mt){q=Mt},setClear:function(Mt){At!==Mt&&(Rt&&(Mt=1-Mt),s.clearDepth(Mt),At=Mt)},reset:function(){q=!1,Ut=null,Vt=null,At=null,Rt=!1}}}function l(){let q=!1,Rt=null,Ut=null,Vt=null,At=null,Mt=null,Yt=null,ue=null,ze=null;return{setTest:function(Ue){q||(Ue?mt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(Ue){Rt!==Ue&&!q&&(s.stencilMask(Ue),Rt=Ue)},setFunc:function(Ue,xi,pn){(Ut!==Ue||Vt!==xi||At!==pn)&&(s.stencilFunc(Ue,xi,pn),Ut=Ue,Vt=xi,At=pn)},setOp:function(Ue,xi,pn){(Mt!==Ue||Yt!==xi||ue!==pn)&&(s.stencilOp(Ue,xi,pn),Mt=Ue,Yt=xi,ue=pn)},setLocked:function(Ue){q=Ue},setClear:function(Ue){ze!==Ue&&(s.clearStencil(Ue),ze=Ue)},reset:function(){q=!1,Rt=null,Ut=null,Vt=null,At=null,Mt=null,Yt=null,ue=null,ze=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},y=new WeakMap,S=[],E=null,w=!1,v=null,g=null,U=null,L=null,b=null,N=null,V=null,B=new xe(0,0,0),F=0,C=!1,D=null,G=null,nt=null,rt=null,ut=null;const ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),P=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),P=W>=2);let xt=null,O={};const K=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),ht=new qe().fromArray(K),Et=new qe().fromArray(at);function $(q,Rt,Ut,Vt){const At=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(q,Mt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Ut;Yt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Vt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Rt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Mt}const dt={};dt[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),mt(s.DEPTH_TEST),f.setFunc(Bs),de(!1),Ct($0),mt(s.CULL_FACE),ie(Ya);function mt(q){_[q]!==!0&&(s.enable(q),_[q]=!0)}function _t(q){_[q]!==!1&&(s.disable(q),_[q]=!1)}function Bt(q,Rt){return x[q]!==Rt?(s.bindFramebuffer(q,Rt),x[q]=Rt,q===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Rt),q===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(q,Rt){let Ut=S,Vt=!1;if(q){Ut=y.get(Rt),Ut===void 0&&(Ut=[],y.set(Rt,Ut));const At=q.textures;if(Ut.length!==At.length||Ut[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Yt=At.length;Mt<Yt;Mt++)Ut[Mt]=s.COLOR_ATTACHMENT0+Mt;Ut.length=At.length,Vt=!0}}else Ut[0]!==s.BACK&&(Ut[0]=s.BACK,Vt=!0);Vt&&s.drawBuffers(Ut)}function Ce(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const bt={[br]:s.FUNC_ADD,[xS]:s.FUNC_SUBTRACT,[yS]:s.FUNC_REVERSE_SUBTRACT};bt[SS]=s.MIN,bt[MS]=s.MAX;const I={[ES]:s.ZERO,[bS]:s.ONE,[TS]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[US]:s.SRC_ALPHA_SATURATE,[CS]:s.DST_COLOR,[wS]:s.DST_ALPHA,[AS]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[DS]:s.ONE_MINUS_DST_COLOR,[RS]:s.ONE_MINUS_DST_ALPHA,[LS]:s.CONSTANT_COLOR,[NS]:s.ONE_MINUS_CONSTANT_COLOR,[OS]:s.CONSTANT_ALPHA,[PS]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(q,Rt,Ut,Vt,At,Mt,Yt,ue,ze,Ue){if(q===Ya){w===!0&&(_t(s.BLEND),w=!1);return}if(w===!1&&(mt(s.BLEND),w=!0),q!==vS){if(q!==v||Ue!==C){if((g!==br||b!==br)&&(s.blendEquation(s.FUNC_ADD),g=br,b=br),Ue)switch(q){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eh:s.blendFunc(s.ONE,s.ONE);break;case t_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case e_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case t_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,L=null,N=null,V=null,B.set(0,0,0),F=0,v=q,C=Ue}return}At=At||Rt,Mt=Mt||Ut,Yt=Yt||Vt,(Rt!==g||At!==b)&&(s.blendEquationSeparate(bt[Rt],bt[At]),g=Rt,b=At),(Ut!==U||Vt!==L||Mt!==N||Yt!==V)&&(s.blendFuncSeparate(I[Ut],I[Vt],I[Mt],I[Yt]),U=Ut,L=Vt,N=Mt,V=Yt),(ue.equals(B)===!1||ze!==F)&&(s.blendColor(ue.r,ue.g,ue.b,ze),B.copy(ue),F=ze),v=q,C=!1}function Gt(q,Rt){q.side===wi?_t(s.CULL_FACE):mt(s.CULL_FACE);let Ut=q.side===Bn;Rt&&(Ut=!Ut),de(Ut),q.blending===Ns&&q.transparent===!1?ie(Ya):ie(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Vt=q.stencilWrite;h.setTest(Vt),Vt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ft(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(q){D!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),D=q)}function Ct(q){q!==gS?(mt(s.CULL_FACE),q!==G&&(q===$0?s.cullFace(s.BACK):q===_S?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),G=q}function Ee(q){q!==nt&&(P&&s.lineWidth(q),nt=q)}function Ft(q,Rt,Ut){q?(mt(s.POLYGON_OFFSET_FILL),(rt!==Rt||ut!==Ut)&&(s.polygonOffset(Rt,Ut),rt=Rt,ut=Ut)):_t(s.POLYGON_OFFSET_FILL)}function re(q){q?mt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Fe(q){q===void 0&&(q=s.TEXTURE0+ot-1),xt!==q&&(s.activeTexture(q),xt=q)}function De(q,Rt,Ut){Ut===void 0&&(xt===null?Ut=s.TEXTURE0+ot-1:Ut=xt);let Vt=O[Ut];Vt===void 0&&(Vt={type:void 0,texture:void 0},O[Ut]=Vt),(Vt.type!==q||Vt.texture!==Rt)&&(xt!==Ut&&(s.activeTexture(Ut),xt=Ut),s.bindTexture(q,Rt||dt[q]),Vt.type=q,Vt.texture=Rt)}function z(){const q=O[xt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function yt(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Jt(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Tt(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(q){ht.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ht.copy(q))}function ee(q){Et.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Et.copy(q))}function jt(q,Rt){let Ut=p.get(Rt);Ut===void 0&&(Ut=new WeakMap,p.set(Rt,Ut));let Vt=Ut.get(q);Vt===void 0&&(Vt=s.getUniformBlockIndex(Rt,q.name),Ut.set(q,Vt))}function Lt(q,Rt){const Vt=p.get(Rt).get(q);m.get(Rt)!==Vt&&(s.uniformBlockBinding(Rt,Vt,q.__bindingPointIndex),m.set(Rt,Vt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},xt=null,O={},x={},y=new WeakMap,S=[],E=null,w=!1,v=null,g=null,U=null,L=null,b=null,N=null,V=null,B=new xe(0,0,0),F=0,C=!1,D=null,G=null,nt=null,rt=null,ut=null,ht.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:mt,disable:_t,bindFramebuffer:Bt,drawBuffers:Zt,useProgram:Ce,setBlending:ie,setMaterial:Gt,setFlipSided:de,setCullFace:Ct,setLineWidth:Ee,setPolygonOffset:Ft,setScissorTest:re,activeTexture:Fe,bindTexture:De,unbindTexture:z,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Jt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Lt,texStorage2D:Dt,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Ht,scissor:Ot,viewport:ee,reset:fe}}function gA(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new me,_=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(z,T){return S?new OffscreenCanvas(z,T):sl("canvas")}function w(z,T,tt){let pt=1;const yt=De(z);if((yt.width>tt||yt.height>tt)&&(pt=tt/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(pt*yt.width),Ht=Math.floor(pt*yt.height);x===void 0&&(x=E(ft,Ht));const Dt=T?E(ft,Ht):x;return Dt.width=ft,Dt.height=Ht,Dt.getContext("2d").drawImage(z,0,0,ft,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Ht+")."),Dt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),z;return z}function v(z){return z.generateMipmaps}function g(z){s.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(z,T,tt,pt,yt=!1){if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=T;if(T===s.RED&&(tt===s.FLOAT&&(ft=s.R32F),tt===s.HALF_FLOAT&&(ft=s.R16F),tt===s.UNSIGNED_BYTE&&(ft=s.R8)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.R8UI),tt===s.UNSIGNED_SHORT&&(ft=s.R16UI),tt===s.UNSIGNED_INT&&(ft=s.R32UI),tt===s.BYTE&&(ft=s.R8I),tt===s.SHORT&&(ft=s.R16I),tt===s.INT&&(ft=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(ft=s.RG32F),tt===s.HALF_FLOAT&&(ft=s.RG16F),tt===s.UNSIGNED_BYTE&&(ft=s.RG8)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),tt===s.UNSIGNED_INT&&(ft=s.RG32UI),tt===s.BYTE&&(ft=s.RG8I),tt===s.SHORT&&(ft=s.RG16I),tt===s.INT&&(ft=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),tt===s.UNSIGNED_INT&&(ft=s.RGB32UI),tt===s.BYTE&&(ft=s.RGB8I),tt===s.SHORT&&(ft=s.RGB16I),tt===s.INT&&(ft=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),tt===s.BYTE&&(ft=s.RGBA8I),tt===s.SHORT&&(ft=s.RGBA16I),tt===s.INT&&(ft=s.RGBA32I)),T===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),T===s.RGBA){const Ht=yt?eu:Oe.getTransfer(pt);tt===s.FLOAT&&(ft=s.RGBA32F),tt===s.HALF_FLOAT&&(ft=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ft=Ht===Xe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function b(z,T){let tt;return z?T===null||T===Rr||T===il?tt=s.DEPTH24_STENCIL8:T===da?tt=s.DEPTH32F_STENCIL8:T===nl&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rr||T===il?tt=s.DEPTH_COMPONENT24:T===da?tt=s.DEPTH_COMPONENT32F:T===nl&&(tt=s.DEPTH_COMPONENT16),tt}function N(z,T){return v(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ci&&z.minFilter!==Hi?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function V(z){const T=z.target;T.removeEventListener("dispose",V),F(T),T.isVideoTexture&&_.delete(T)}function B(z){const T=z.target;T.removeEventListener("dispose",B),D(T)}function F(z){const T=r.get(z);if(T.__webglInit===void 0)return;const tt=z.source,pt=y.get(tt);if(pt){const yt=pt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&C(z),Object.keys(pt).length===0&&y.delete(tt)}r.remove(z)}function C(z){const T=r.get(z);s.deleteTexture(T.__webglTexture);const tt=z.source,pt=y.get(tt);delete pt[T.__cacheKey],f.memory.textures--}function D(z){const T=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let yt=0;yt<T.__webglFramebuffer[pt].length;yt++)s.deleteFramebuffer(T.__webglFramebuffer[pt][yt]);else s.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)s.deleteFramebuffer(T.__webglFramebuffer[pt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=z.textures;for(let pt=0,yt=tt.length;pt<yt;pt++){const ft=r.get(tt[pt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),f.memory.textures--),r.remove(tt[pt])}r.remove(z)}let G=0;function nt(){G=0}function rt(){const z=G;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),G+=1,z}function ut(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function ot(z,T){const tt=r.get(z);if(z.isVideoTexture&&re(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&tt.__version!==z.version){const pt=z.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(tt,z,T);return}}else z.isExternalTexture&&(tt.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function P(z,T){const tt=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){dt(tt,z,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function W(z,T){const tt=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){dt(tt,z,T);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function H(z,T){const tt=r.get(z);if(z.version>0&&tt.__version!==z.version){mt(tt,z,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const xt={[hh]:s.REPEAT,[Ar]:s.CLAMP_TO_EDGE,[ph]:s.MIRRORED_REPEAT},O={[Ci]:s.NEAREST,[WS]:s.NEAREST_MIPMAP_NEAREST,[Sc]:s.NEAREST_MIPMAP_LINEAR,[Hi]:s.LINEAR,[_d]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},K={[ZS]:s.NEVER,[eM]:s.ALWAYS,[KS]:s.LESS,[yv]:s.LEQUAL,[QS]:s.EQUAL,[tM]:s.GEQUAL,[JS]:s.GREATER,[$S]:s.NOTEQUAL};function at(z,T){if(T.type===da&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hi||T.magFilter===_d||T.magFilter===Sc||T.magFilter===wr||T.minFilter===Hi||T.minFilter===_d||T.minFilter===Sc||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,xt[T.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,xt[T.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,xt[T.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,O[T.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==Sc&&T.minFilter!==wr||T.type===da&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ht(z,T){let tt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",V));const pt=T.source;let yt=y.get(pt);yt===void 0&&(yt={},y.set(pt,yt));const ft=ut(T);if(ft!==z.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),yt[ft].usedTimes++;const Ht=yt[z.__cacheKey];Ht!==void 0&&(yt[z.__cacheKey].usedTimes--,Ht.usedTimes===0&&C(T)),z.__cacheKey=ft,z.__webglTexture=yt[ft].texture}return tt}function Et(z,T,tt){return Math.floor(Math.floor(z/tt)/T)}function $(z,T,tt,pt){const ft=z.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,tt,pt,T.data);else{ft.sort((Tt,Ot)=>Tt.start-Ot.start);let Ht=0;for(let Tt=1;Tt<ft.length;Tt++){const Ot=ft[Ht],ee=ft[Tt],jt=Ot.start+Ot.count,Lt=Et(ee.start,T.width,4),fe=Et(Ot.start,T.width,4);ee.start<=jt+1&&Lt===fe&&Et(ee.start+ee.count-1,T.width,4)===Lt?Ot.count=Math.max(Ot.count,ee.start+ee.count-Ot.start):(++Ht,ft[Ht]=ee)}ft.length=Ht+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Kt=s.getParameter(s.UNPACK_SKIP_PIXELS),Jt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Ot=ft.length;Tt<Ot;Tt++){const ee=ft[Tt],jt=Math.floor(ee.start/4),Lt=Math.ceil(ee.count/4),fe=jt%T.width,q=Math.floor(jt/T.width),Rt=Lt,Ut=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,fe,q,Rt,Ut,tt,pt,T.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Jt)}}function dt(z,T,tt){let pt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=s.TEXTURE_3D);const yt=ht(z,T),ft=T.source;i.bindTexture(pt,z.__webglTexture,s.TEXTURE0+tt);const Ht=r.get(ft);if(ft.version!==Ht.__version||yt===!0){i.activeTexture(s.TEXTURE0+tt);const Dt=Oe.getPrimaries(Oe.workingColorSpace),Kt=T.colorSpace===qa?null:Oe.getPrimaries(T.colorSpace),Jt=T.colorSpace===qa||Dt===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Tt=w(T.image,!1,l.maxTextureSize);Tt=Fe(T,Tt);const Ot=c.convert(T.format,T.colorSpace),ee=c.convert(T.type);let jt=L(T.internalFormat,Ot,ee,T.colorSpace,T.isVideoTexture);at(pt,T);let Lt;const fe=T.mipmaps,q=T.isVideoTexture!==!0,Rt=Ht.__version===void 0||yt===!0,Ut=ft.dataReady,Vt=N(T,Tt);if(T.isDepthTexture)jt=b(T.format===rl,T.type),Rt&&(q?i.texStorage2D(s.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ot,ee,null));else if(T.isDataTexture)if(fe.length>0){q&&Rt&&i.texStorage2D(s.TEXTURE_2D,Vt,jt,fe[0].width,fe[0].height);for(let At=0,Mt=fe.length;At<Mt;At++)Lt=fe[At],q?Ut&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ot,ee,Lt.data):i.texImage2D(s.TEXTURE_2D,At,jt,Lt.width,Lt.height,0,Ot,ee,Lt.data);T.generateMipmaps=!1}else q?(Rt&&i.texStorage2D(s.TEXTURE_2D,Vt,jt,Tt.width,Tt.height),Ut&&$(T,Tt,Ot,ee)):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ot,ee,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,jt,fe[0].width,fe[0].height,Tt.depth);for(let At=0,Mt=fe.length;At<Mt;At++)if(Lt=fe[At],T.format!==Ri)if(Ot!==null)if(q){if(Ut)if(T.layerUpdates.size>0){const Yt=D_(Lt.width,Lt.height,T.format,T.type);for(const ue of T.layerUpdates){const ze=Lt.data.subarray(ue*Yt/Lt.data.BYTES_PER_ELEMENT,(ue+1)*Yt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,ue,Lt.width,Lt.height,1,Ot,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,Tt.depth,Ot,Lt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,jt,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ut&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,Tt.depth,Ot,ee,Lt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,At,jt,Lt.width,Lt.height,Tt.depth,0,Ot,ee,Lt.data)}else{q&&Rt&&i.texStorage2D(s.TEXTURE_2D,Vt,jt,fe[0].width,fe[0].height);for(let At=0,Mt=fe.length;At<Mt;At++)Lt=fe[At],T.format!==Ri?Ot!==null?q?Ut&&i.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ot,Lt.data):i.compressedTexImage2D(s.TEXTURE_2D,At,jt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ut&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ot,ee,Lt.data):i.texImage2D(s.TEXTURE_2D,At,jt,Lt.width,Lt.height,0,Ot,ee,Lt.data)}else if(T.isDataArrayTexture)if(q){if(Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,jt,Tt.width,Tt.height,Tt.depth),Ut)if(T.layerUpdates.size>0){const At=D_(Tt.width,Tt.height,T.format,T.type);for(const Mt of T.layerUpdates){const Yt=Tt.data.subarray(Mt*At/Tt.data.BYTES_PER_ELEMENT,(Mt+1)*At/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,Tt.width,Tt.height,1,Ot,ee,Yt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,ee,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Ot,ee,Tt.data);else if(T.isData3DTexture)q?(Rt&&i.texStorage3D(s.TEXTURE_3D,Vt,jt,Tt.width,Tt.height,Tt.depth),Ut&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,ee,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Ot,ee,Tt.data);else if(T.isFramebufferTexture){if(Rt)if(q)i.texStorage2D(s.TEXTURE_2D,Vt,jt,Tt.width,Tt.height);else{let At=Tt.width,Mt=Tt.height;for(let Yt=0;Yt<Vt;Yt++)i.texImage2D(s.TEXTURE_2D,Yt,jt,At,Mt,0,Ot,ee,null),At>>=1,Mt>>=1}}else if(fe.length>0){if(q&&Rt){const At=De(fe[0]);i.texStorage2D(s.TEXTURE_2D,Vt,jt,At.width,At.height)}for(let At=0,Mt=fe.length;At<Mt;At++)Lt=fe[At],q?Ut&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Ot,ee,Lt):i.texImage2D(s.TEXTURE_2D,At,jt,Ot,ee,Lt);T.generateMipmaps=!1}else if(q){if(Rt){const At=De(Tt);i.texStorage2D(s.TEXTURE_2D,Vt,jt,At.width,At.height)}Ut&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,ee,Tt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Ot,ee,Tt);v(T)&&g(pt),Ht.__version=ft.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function mt(z,T,tt){if(T.image.length!==6)return;const pt=ht(z,T),yt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+tt);const ft=r.get(yt);if(yt.version!==ft.__version||pt===!0){i.activeTexture(s.TEXTURE0+tt);const Ht=Oe.getPrimaries(Oe.workingColorSpace),Dt=T.colorSpace===qa?null:Oe.getPrimaries(T.colorSpace),Kt=T.colorSpace===qa||Ht===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let Mt=0;Mt<6;Mt++)!Jt&&!Tt?Ot[Mt]=w(T.image[Mt],!0,l.maxCubemapSize):Ot[Mt]=Tt?T.image[Mt].image:T.image[Mt],Ot[Mt]=Fe(T,Ot[Mt]);const ee=Ot[0],jt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),fe=L(T.internalFormat,jt,Lt,T.colorSpace),q=T.isVideoTexture!==!0,Rt=ft.__version===void 0||pt===!0,Ut=yt.dataReady;let Vt=N(T,ee);at(s.TEXTURE_CUBE_MAP,T);let At;if(Jt){q&&Rt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Vt,fe,ee.width,ee.height);for(let Mt=0;Mt<6;Mt++){At=Ot[Mt].mipmaps;for(let Yt=0;Yt<At.length;Yt++){const ue=At[Yt];T.format!==Ri?jt!==null?q?Ut&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,ue.width,ue.height,jt,ue.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,ue.width,ue.height,jt,Lt,ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,fe,ue.width,ue.height,0,jt,Lt,ue.data)}}}else{if(At=T.mipmaps,q&&Rt){At.length>0&&Vt++;const Mt=De(Ot[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Vt,fe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Tt){q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ot[Mt].width,Ot[Mt].height,jt,Lt,Ot[Mt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,Ot[Mt].width,Ot[Mt].height,0,jt,Lt,Ot[Mt].data);for(let Yt=0;Yt<At.length;Yt++){const ze=At[Yt].image[Mt].image;q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,ze.width,ze.height,jt,Lt,ze.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,fe,ze.width,ze.height,0,jt,Lt,ze.data)}}else{q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,jt,Lt,Ot[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,jt,Lt,Ot[Mt]);for(let Yt=0;Yt<At.length;Yt++){const ue=At[Yt];q?Ut&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,jt,Lt,ue.image[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,fe,jt,Lt,ue.image[Mt])}}}v(T)&&g(s.TEXTURE_CUBE_MAP),ft.__version=yt.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function _t(z,T,tt,pt,yt,ft){const Ht=c.convert(tt.format,tt.colorSpace),Dt=c.convert(tt.type),Kt=L(tt.internalFormat,Ht,Dt,tt.colorSpace),Jt=r.get(T),Tt=r.get(tt);if(Tt.__renderTarget=T,!Jt.__hasExternalTextures){const Ot=Math.max(1,T.width>>ft),ee=Math.max(1,T.height>>ft);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,ft,Kt,Ot,ee,T.depth,0,Ht,Dt,null):i.texImage2D(yt,ft,Kt,Ot,ee,0,Ht,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),Ft(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,yt,Tt.__webglTexture,0,Ee(T)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,yt,Tt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(z,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,z),T.depthBuffer){const pt=T.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ft=b(T.stencilBuffer,yt),Ht=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Ee(T);Ft(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ft,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ft,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ht,s.RENDERBUFFER,z)}else{const pt=T.textures;for(let yt=0;yt<pt.length;yt++){const ft=pt[yt],Ht=c.convert(ft.format,ft.colorSpace),Dt=c.convert(ft.type),Kt=L(ft.internalFormat,Ht,Dt,ft.colorSpace),Jt=Ee(T);tt&&Ft(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Kt,T.width,T.height):Ft(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,Kt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(z,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ot(T.depthTexture,0);const yt=pt.__webglTexture,ft=Ee(T);if(T.depthTexture.format===al)Ft(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0);else if(T.depthTexture.format===rl)Ft(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ce(z){const T=r.get(z),tt=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const pt=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=pt}if(z.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=z.texture.mipmaps;pt&&pt.length>0?Zt(T.__webglFramebuffer[0],z):Zt(T.__webglFramebuffer,z)}else if(tt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=s.createRenderbuffer(),Bt(T.__webglDepthbuffer[pt],z,!1);else{const yt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ft)}}else{const pt=z.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Bt(T.__webglDepthbuffer,z,!1);else{const yt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(z,T,tt){const pt=r.get(z);T!==void 0&&_t(pt.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Ce(z)}function I(z){const T=z.texture,tt=r.get(z),pt=r.get(T);z.addEventListener("dispose",B);const yt=z.textures,ft=z.isWebGLCubeRenderTarget===!0,Ht=yt.length>1;if(Ht||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=T.version,f.memory.textures++),ft){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)tt.__webglFramebuffer[Dt][Kt]=s.createFramebuffer()}else tt.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Ht)for(let Dt=0,Kt=yt.length;Dt<Kt;Dt++){const Jt=r.get(yt[Dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),f.memory.textures++)}if(z.samples>0&&Ft(z)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Kt=yt[Dt];tt.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const Jt=c.convert(Kt.format,Kt.colorSpace),Tt=c.convert(Kt.type),Ot=L(Kt.internalFormat,Jt,Tt,Kt.colorSpace,z.isXRRenderTarget===!0),ee=Ee(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Ot,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(tt.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),at(s.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)_t(tt.__webglFramebuffer[Dt][Kt],z,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Kt);else _t(tt.__webglFramebuffer[Dt],z,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);v(T)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Dt=0,Kt=yt.length;Dt<Kt;Dt++){const Jt=yt[Dt],Tt=r.get(Jt);let Ot=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ot=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ot,Tt.__webglTexture),at(Ot,Jt),_t(tt.__webglFramebuffer,z,Jt,s.COLOR_ATTACHMENT0+Dt,Ot,0),v(Jt)&&g(Ot)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Dt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),at(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)_t(tt.__webglFramebuffer[Kt],z,T,s.COLOR_ATTACHMENT0,Dt,Kt);else _t(tt.__webglFramebuffer,z,T,s.COLOR_ATTACHMENT0,Dt,0);v(T)&&g(Dt),i.unbindTexture()}z.depthBuffer&&Ce(z)}function ie(z){const T=z.textures;for(let tt=0,pt=T.length;tt<pt;tt++){const yt=T[tt];if(v(yt)){const ft=U(z),Ht=r.get(yt).__webglTexture;i.bindTexture(ft,Ht),g(ft),i.unbindTexture()}}}const Gt=[],de=[];function Ct(z){if(z.samples>0){if(Ft(z)===!1){const T=z.textures,tt=z.width,pt=z.height;let yt=s.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=r.get(z),Dt=T.length>1;if(Dt)for(let Jt=0;Jt<T.length;Jt++)i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const Kt=z.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Jt]);const Tt=r.get(T[Jt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,yt,s.NEAREST),m===!0&&(Gt.length=0,de.length=0,Gt.push(s.COLOR_ATTACHMENT0+Jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Gt.push(ft),de.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,de)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Gt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Jt=0;Jt<T.length;Jt++){i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Jt]);const Tt=r.get(T[Jt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Jt,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const T=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ee(z){return Math.min(l.maxSamples,z.samples)}function Ft(z){const T=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(z){const T=f.render.frame;_.get(z)!==T&&(_.set(z,T),z.update())}function Fe(z,T){const tt=z.colorSpace,pt=z.format,yt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||tt!==Hs&&tt!==qa&&(Oe.getTransfer(tt)===Xe?(pt!==Ri||yt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function De(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=nt,this.setTexture2D=ot,this.setTexture2DArray=P,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=bt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ft}function _A(s,t){function i(r,l=qa){let c;const f=Oe.getTransfer(l);if(r===Vi)return s.UNSIGNED_BYTE;if(r===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fv)return s.BYTE;if(r===dv)return s.SHORT;if(r===nl)return s.UNSIGNED_SHORT;if(r===Jh)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===da)return s.FLOAT;if(r===ol)return s.HALF_FLOAT;if(r===pv)return s.ALPHA;if(r===mv)return s.RGB;if(r===Ri)return s.RGBA;if(r===al)return s.DEPTH_COMPONENT;if(r===rl)return s.DEPTH_STENCIL;if(r===gv)return s.RED;if(r===ep)return s.RED_INTEGER;if(r===_v)return s.RG;if(r===np)return s.RG_INTEGER;if(r===ip)return s.RGBA_INTEGER;if(r===Zc||r===Kc||r===Qc||r===Jc)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mh||r===gh||r===_h||r===vh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xh||r===yh||r===Sh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===xh||r===yh)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===wh||r===Rh||r===Ch||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Mh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ch)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$c||r===zh||r===Bh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===$c)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vv||r===Ih||r===Fh||r===Hh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===$c)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class Vv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xA=`
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

}`;class yA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Vv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Qa({vertexShader:vA,fragmentShader:xA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sn(new ou(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SA extends Vs{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,x=null,y=null,S=null,E=null;const w=new yA,v={},g=i.getContextAttributes();let U=null,L=null;const b=[],N=[],V=new me;let B=null;const F=new Wn;F.viewport=new qe;const C=new Wn;C.viewport=new qe;const D=[F,C],G=new GM;let nt=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let dt=b[$];return dt===void 0&&(dt=new Hd,b[$]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function($){let dt=b[$];return dt===void 0&&(dt=new Hd,b[$]=dt),dt.getGripSpace()},this.getHand=function($){let dt=b[$];return dt===void 0&&(dt=new Hd,b[$]=dt),dt.getHandSpace()};function ut($){const dt=N.indexOf($.inputSource);if(dt===-1)return;const mt=b[dt];mt!==void 0&&(mt.update($.inputSource,$.frame,p||f),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function ot(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",ot),l.removeEventListener("inputsourceschange",P);for(let $=0;$<b.length;$++){const dt=N[$];dt!==null&&(N[$]=null,b[$].disconnect(dt))}nt=null,rt=null,w.reset();for(const $ in v)delete v[$];t.setRenderTarget(U),S=null,y=null,x=null,l=null,L=null,Et.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",ot),l.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&(x=new XRWebGLBinding(l,i)),x!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,_t=null,Bt=null;g.depth&&(Bt=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mt=g.stencil?rl:al,_t=g.stencil?il:Rr);const Zt={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:c};y=x.createProjectionLayer(Zt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),L=new Cr(y.textureWidth,y.textureHeight,{format:Ri,type:Vi,depthTexture:new Lv(y.textureWidth,y.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Cr(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Et.setContext(l),Et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function P($){for(let dt=0;dt<$.removed.length;dt++){const mt=$.removed[dt],_t=N.indexOf(mt);_t>=0&&(N[_t]=null,b[_t].disconnect(mt))}for(let dt=0;dt<$.added.length;dt++){const mt=$.added[dt];let _t=N.indexOf(mt);if(_t===-1){for(let Zt=0;Zt<b.length;Zt++)if(Zt>=N.length){N.push(mt),_t=Zt;break}else if(N[Zt]===null){N[Zt]=mt,_t=Zt;break}if(_t===-1)break}const Bt=b[_t];Bt&&Bt.connect(mt)}}const W=new Q,H=new Q;function xt($,dt,mt){W.setFromMatrixPosition(dt.matrixWorld),H.setFromMatrixPosition(mt.matrixWorld);const _t=W.distanceTo(H),Bt=dt.projectionMatrix.elements,Zt=mt.projectionMatrix.elements,Ce=Bt[14]/(Bt[10]-1),bt=Bt[14]/(Bt[10]+1),I=(Bt[9]+1)/Bt[5],ie=(Bt[9]-1)/Bt[5],Gt=(Bt[8]-1)/Bt[0],de=(Zt[8]+1)/Zt[0],Ct=Ce*Gt,Ee=Ce*de,Ft=_t/(-Gt+de),re=Ft*-Gt;if(dt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(re),$.translateZ(Ft),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Bt[10]===-1)$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Fe=Ce+Ft,De=bt+Ft,z=Ct-re,T=Ee+(_t-re),tt=I*bt/De*Fe,pt=ie*bt/De*Fe;$.projectionMatrix.makePerspective(z,T,tt,pt,Fe,De),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function O($,dt){dt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(dt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let dt=$.near,mt=$.far;w.texture!==null&&(w.depthNear>0&&(dt=w.depthNear),w.depthFar>0&&(mt=w.depthFar)),G.near=C.near=F.near=dt,G.far=C.far=F.far=mt,(nt!==G.near||rt!==G.far)&&(l.updateRenderState({depthNear:G.near,depthFar:G.far}),nt=G.near,rt=G.far),G.layers.mask=$.layers.mask|6,F.layers.mask=G.layers.mask&3,C.layers.mask=G.layers.mask&5;const _t=$.parent,Bt=G.cameras;O(G,_t);for(let Zt=0;Zt<Bt.length;Zt++)O(Bt[Zt],_t);Bt.length===2?xt(G,F,C):G.projectionMatrix.copy(F.projectionMatrix),K($,G,_t)};function K($,dt,mt){mt===null?$.matrix.copy(dt.matrixWorld):($.matrix.copy(mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(dt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function($){m=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(G)},this.getCameraTexture=function($){return v[$]};let at=null;function ht($,dt){if(_=dt.getViewerPose(p||f),E=dt,_!==null){const mt=_.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let _t=!1;mt.length!==G.cameras.length&&(G.cameras.length=0,_t=!0);for(let bt=0;bt<mt.length;bt++){const I=mt[bt];let ie=null;if(S!==null)ie=S.getViewport(I);else{const de=x.getViewSubImage(y,I);ie=de.viewport,bt===0&&(t.setRenderTargetTextures(L,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(L))}let Gt=D[bt];Gt===void 0&&(Gt=new Wn,Gt.layers.enable(bt),Gt.viewport=new qe,D[bt]=Gt),Gt.matrix.fromArray(I.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(I.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ie.x,ie.y,ie.width,ie.height),bt===0&&(G.matrix.copy(Gt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),_t===!0&&G.cameras.push(Gt)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const bt=x.getDepthInformation(mt[0]);bt&&bt.isValid&&bt.texture&&w.init(bt,l.renderState)}if(Bt&&Bt.includes("camera-access")&&(t.state.unbindTexture(),x))for(let bt=0;bt<mt.length;bt++){const I=mt[bt].camera;if(I){let ie=v[I];ie||(ie=new Vv,v[I]=ie);const Gt=x.getCameraImage(I);ie.sourceTexture=Gt}}}for(let mt=0;mt<b.length;mt++){const _t=N[mt],Bt=b[mt];_t!==null&&Bt!==void 0&&Bt.update(_t,dt,p||f)}at&&at($,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Et=new Bv;Et.setAnimationLoop(ht),this.setAnimationLoop=function($){at=$},this.dispose=function(){}}}const yr=new ki,MA=new Qe;function EA(s,t){function i(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Av(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function l(v,g,U,L,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(v,g):g.isMeshToonMaterial?(c(v,g),x(v,g)):g.isMeshPhongMaterial?(c(v,g),_(v,g)):g.isMeshStandardMaterial?(c(v,g),y(v,g),g.isMeshPhysicalMaterial&&S(v,g,b)):g.isMeshMatcapMaterial?(c(v,g),E(v,g)):g.isMeshDepthMaterial?c(v,g):g.isMeshDistanceMaterial?(c(v,g),w(v,g)):g.isMeshNormalMaterial?c(v,g):g.isLineBasicMaterial?(f(v,g),g.isLineDashedMaterial&&h(v,g)):g.isPointsMaterial?m(v,g,U,L):g.isSpriteMaterial?p(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,i(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,i(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Bn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,i(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Bn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,i(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,i(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const U=t.get(g),L=U.envMap,b=U.envMapRotation;L&&(v.envMap.value=L,yr.copy(b),yr.x*=-1,yr.y*=-1,yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),v.envMapRotation.value.setFromMatrix4(MA.makeRotationFromEuler(yr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,v.aoMapTransform))}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,i(g.map,v.mapTransform))}function h(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function m(v,g,U,L){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*U,v.scale.value=L*.5,g.map&&(v.map.value=g.map,i(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,i(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,i(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function x(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function y(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,U){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,g){g.matcap&&(v.matcap.value=g.matcap)}function w(v,g){const U=t.get(g).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function bA(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const b=L.program;r.uniformBlockBinding(U,b)}function p(U,L){let b=l[U.id];b===void 0&&(E(U),b=_(U),l[U.id]=b,U.addEventListener("dispose",v));const N=L.program;r.updateUBOMapping(U,N);const V=t.render.frame;c[U.id]!==V&&(y(U),c[U.id]=V)}function _(U){const L=x();U.__bindingPointIndex=L;const b=s.createBuffer(),N=U.__size,V=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,N,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function x(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=l[U.id],b=U.uniforms,N=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let V=0,B=b.length;V<B;V++){const F=Array.isArray(b[V])?b[V]:[b[V]];for(let C=0,D=F.length;C<D;C++){const G=F[C];if(S(G,V,C,N)===!0){const nt=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let ot=0;ot<rt.length;ot++){const P=rt[ot],W=w(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,nt+ut,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,ut),ut+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,L,b,N){const V=U.value,B=L+"_"+b;if(N[B]===void 0)return typeof V=="number"||typeof V=="boolean"?N[B]=V:N[B]=V.clone(),!0;{const F=N[B];if(typeof V=="number"||typeof V=="boolean"){if(F!==V)return N[B]=V,!0}else if(F.equals(V)===!1)return F.copy(V),!0}return!1}function E(U){const L=U.uniforms;let b=0;const N=16;for(let B=0,F=L.length;B<F;B++){const C=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,G=C.length;D<G;D++){const nt=C[D],rt=Array.isArray(nt.value)?nt.value:[nt.value];for(let ut=0,ot=rt.length;ut<ot;ut++){const P=rt[ut],W=w(P),H=b%N,xt=H%W.boundary,O=H+xt;b+=xt,O!==0&&N-O<W.storage&&(b+=N-O),nt.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=b,b+=W.storage}}}const V=b%N;return V>0&&(b+=N-V),U.__size=b,U.__cache={},this}function w(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function v(U){const L=U.target;L.removeEventListener("dispose",v);const b=f.indexOf(L.__bindingPointIndex);f.splice(b,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const U in l)s.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:g}}class mp{constructor(t={}){const{canvas:i=iM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),w=new Int32Array(4);let v=null,g=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=_i;let V=0,B=0,F=null,C=-1,D=null;const G=new qe,nt=new qe;let rt=null;const ut=new xe(0);let ot=0,P=i.width,W=i.height,H=1,xt=null,O=null;const K=new qe(0,0,P,W),at=new qe(0,0,P,W);let ht=!1;const Et=new cp;let $=!1,dt=!1;const mt=new Qe,_t=new Q,Bt=new qe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function bt(){return F===null?H:1}let I=r;function ie(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kh}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",At,!1),I===null){const Y="webgl2";if(I=ie(Y,R),I===null)throw ie(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Gt,de,Ct,Ee,Ft,re,Fe,De,z,T,tt,pt,yt,ft,Ht,Dt,Kt,Jt,Tt,Ot,ee,jt,Lt,fe;function q(){Gt=new PT(I),Gt.init(),jt=new _A(I,Gt),de=new RT(I,Gt,t,jt),Ct=new mA(I,Gt),de.reversedDepthBuffer&&y&&Ct.buffers.depth.setReversed(!0),Ee=new IT(I),Ft=new nA,re=new gA(I,Gt,Ct,Ft,de,jt,Ee),Fe=new DT(b),De=new OT(b),z=new XM(I),Lt=new AT(I,z),T=new zT(I,z,Ee,Lt),tt=new HT(I,T,z,Ee),Tt=new FT(I,de,re),Dt=new CT(Ft),pt=new eA(b,Fe,De,Gt,de,Lt,Dt),yt=new EA(b,Ft),ft=new aA,Ht=new uA(Gt),Jt=new TT(b,Fe,De,Ct,tt,S,m),Kt=new hA(b,tt,de),fe=new bA(I,Ee,de,Ct),Ot=new wT(I,Gt,Ee),ee=new BT(I,Gt,Ee),Ee.programs=pt.programs,b.capabilities=de,b.extensions=Gt,b.properties=Ft,b.renderLists=ft,b.shadowMap=Kt,b.state=Ct,b.info=Ee}q();const Rt=new SA(b,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(P,W,!1))},this.getSize=function(R){return R.set(P,W)},this.setSize=function(R,Y,lt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,W=Y,i.width=Math.floor(R*H),i.height=Math.floor(Y*H),lt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*H,W*H).floor()},this.setDrawingBufferSize=function(R,Y,lt){P=R,W=Y,H=lt,i.width=Math.floor(R*lt),i.height=Math.floor(Y*lt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,Y,lt,ct){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,Y,lt,ct),Ct.viewport(G.copy(K).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(at)},this.setScissor=function(R,Y,lt,ct){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,Y,lt,ct),Ct.scissor(nt.copy(at).multiplyScalar(H).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){Ct.setScissorTest(ht=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,lt=!0){let ct=0;if(R){let Z=!1;if(F!==null){const wt=F.texture.format;Z=wt===ip||wt===np||wt===ep}if(Z){const wt=F.texture.type,Nt=wt===Vi||wt===Rr||wt===nl||wt===il||wt===$h||wt===tp,kt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),ae=kt.r,oe=kt.g,Qt=kt.b;Nt?(E[0]=ae,E[1]=oe,E[2]=Qt,E[3]=Pt,I.clearBufferuiv(I.COLOR,0,E)):(w[0]=ae,w[1]=oe,w[2]=Qt,w[3]=Pt,I.clearBufferiv(I.COLOR,0,w))}else ct|=I.COLOR_BUFFER_BIT}Y&&(ct|=I.DEPTH_BUFFER_BIT),lt&&(ct|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Jt.dispose(),ft.dispose(),Ht.dispose(),Ft.dispose(),Fe.dispose(),De.dispose(),tt.dispose(),Lt.dispose(),fe.dispose(),pt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",pn),Rt.removeEventListener("sessionend",mn),en.stop()};function Ut(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=Ee.autoReset,Y=Kt.enabled,lt=Kt.autoUpdate,ct=Kt.needsUpdate,Z=Kt.type;q(),Ee.autoReset=R,Kt.enabled=Y,Kt.autoUpdate=lt,Kt.needsUpdate=ct,Kt.type=Z}function At(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const Y=R.target;Y.removeEventListener("dispose",Mt),Yt(Y)}function Yt(R){ue(R),Ft.remove(R)}function ue(R){const Y=Ft.get(R).programs;Y!==void 0&&(Y.forEach(function(lt){pt.releaseProgram(lt)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,lt,ct,Z,wt){Y===null&&(Y=Zt);const Nt=Z.isMesh&&Z.matrixWorld.determinant()<0,kt=pa(R,Y,lt,ct,Z);Ct.setMaterial(ct,Nt);let Pt=lt.index,ae=1;if(ct.wireframe===!0){if(Pt=T.getWireframeAttribute(lt),Pt===void 0)return;ae=2}const oe=lt.drawRange,Qt=lt.attributes.position;let ge=oe.start*ae,Le=(oe.start+oe.count)*ae;wt!==null&&(ge=Math.max(ge,wt.start*ae),Le=Math.min(Le,(wt.start+wt.count)*ae)),Pt!==null?(ge=Math.max(ge,0),Le=Math.min(Le,Pt.count)):Qt!=null&&(ge=Math.max(ge,0),Le=Math.min(Le,Qt.count));const Je=Le-ge;if(Je<0||Je===1/0)return;Lt.setup(Z,ct,kt,lt,Pt);let He,_e=Ot;if(Pt!==null&&(He=z.get(Pt),_e=ee,_e.setIndex(He)),Z.isMesh)ct.wireframe===!0?(Ct.setLineWidth(ct.wireframeLinewidth*bt()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(Z.isLine){let ne=ct.linewidth;ne===void 0&&(ne=1),Ct.setLineWidth(ne*bt()),Z.isLineSegments?_e.setMode(I.LINES):Z.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else Z.isPoints?_e.setMode(I.POINTS):Z.isSprite&&_e.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ne=Z._multiDrawStarts,Ke=Z._multiDrawCounts,be=Z._multiDrawCount,Un=Pt?z.get(Pt).bytesPerElement:1,yi=Ft.get(ct).currentProgram.getUniforms();for(let Hn=0;Hn<be;Hn++)yi.setValue(I,"_gl_DrawID",Hn),_e.render(ne[Hn]/Un,Ke[Hn])}else if(Z.isInstancedMesh)_e.renderInstances(ge,Je,Z.count);else if(lt.isInstancedBufferGeometry){const ne=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ke=Math.min(lt.instanceCount,ne);_e.renderInstances(ge,Je,Ke)}else _e.render(ge,Je)};function ze(R,Y,lt){R.transparent===!0&&R.side===wi&&R.forceSinglePass===!1?(R.side=Bn,R.needsUpdate=!0,Ui(R,Y,lt),R.side=Ka,R.needsUpdate=!0,Ui(R,Y,lt),R.side=wi):Ui(R,Y,lt)}this.compile=function(R,Y,lt=null){lt===null&&(lt=R),g=Ht.get(lt),g.init(Y),L.push(g),lt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),R!==lt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const ct=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Nt=0;Nt<wt.length;Nt++){const kt=wt[Nt];ze(kt,lt,Z),ct.add(kt)}else ze(wt,lt,Z),ct.add(wt)}),g=L.pop(),ct},this.compileAsync=function(R,Y,lt=null){const ct=this.compile(R,Y,lt);return new Promise(Z=>{function wt(){if(ct.forEach(function(Nt){Ft.get(Nt).currentProgram.isReady()&&ct.delete(Nt)}),ct.size===0){Z(R);return}setTimeout(wt,10)}Gt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ue=null;function xi(R){Ue&&Ue(R)}function pn(){en.stop()}function mn(){en.start()}const en=new Bv;en.setAnimationLoop(xi),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(R){Ue=R,Rt.setAnimationLoop(R),R===null?en.stop():en.start()},Rt.addEventListener("sessionstart",pn),Rt.addEventListener("sessionend",mn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,Y,F),g=Ht.get(R,L.length),g.init(Y),L.push(g),mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Et.setFromProjectionMatrix(mt,Gi,Y.reversedDepth),dt=this.localClippingEnabled,$=Dt.init(this.clippingPlanes,dt),v=ft.get(R,U.length),v.init(),U.push(v),Rt.enabled===!0&&Rt.isPresenting===!0){const wt=b.xr.getDepthSensingMesh();wt!==null&&Di(wt,Y,-1/0,b.sortObjects)}Di(R,Y,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(xt,O),Ce=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Ce&&Jt.addToRenderList(v,R),this.info.render.frame++,$===!0&&Dt.beginShadows();const lt=g.state.shadowsArray;Kt.render(lt,R,Y),$===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=v.opaque,Z=v.transmissive;if(g.setupLights(),Y.isArrayCamera){const wt=Y.cameras;if(Z.length>0)for(let Nt=0,kt=wt.length;Nt<kt;Nt++){const Pt=wt[Nt];dl(ct,Z,R,Pt)}Ce&&Jt.render(R);for(let Nt=0,kt=wt.length;Nt<kt;Nt++){const Pt=wt[Nt];Ur(v,R,Pt,Pt.viewport)}}else Z.length>0&&dl(ct,Z,R,Y),Ce&&Jt.render(R),Ur(v,R,Y);F!==null&&B===0&&(re.updateMultisampleRenderTarget(F),re.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(b,R,Y),Lt.resetDefaultState(),C=-1,D=null,L.pop(),L.length>0?(g=L[L.length-1],$===!0&&Dt.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?v=U[U.length-1]:v=null};function Di(R,Y,lt,ct){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Et.intersectsSprite(R)){ct&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const Nt=tt.update(R),kt=R.material;kt.visible&&v.push(R,Nt,kt,lt,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Et.intersectsObject(R))){const Nt=tt.update(R),kt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Bt.copy(Nt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(kt)){const Pt=Nt.groups;for(let ae=0,oe=Pt.length;ae<oe;ae++){const Qt=Pt[ae],ge=kt[Qt.materialIndex];ge&&ge.visible&&v.push(R,Nt,ge,lt,Bt.z,Qt)}}else kt.visible&&v.push(R,Nt,kt,lt,Bt.z,null)}}const wt=R.children;for(let Nt=0,kt=wt.length;Nt<kt;Nt++)Di(wt[Nt],Y,lt,ct)}function Ur(R,Y,lt,ct){const Z=R.opaque,wt=R.transmissive,Nt=R.transparent;g.setupLightsView(lt),$===!0&&Dt.setGlobalState(b.clippingPlanes,lt),ct&&Ct.viewport(G.copy(ct)),Z.length>0&&Lr(Z,Y,lt),wt.length>0&&Lr(wt,Y,lt),Nt.length>0&&Lr(Nt,Y,lt),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function dl(R,Y,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ct.id]===void 0&&(g.state.transmissionRenderTarget[ct.id]=new Cr(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ol:Vi,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const wt=g.state.transmissionRenderTarget[ct.id],Nt=ct.viewport||G;wt.setSize(Nt.z*b.transmissionResolutionScale,Nt.w*b.transmissionResolutionScale);const kt=b.getRenderTarget(),Pt=b.getActiveCubeFace(),ae=b.getActiveMipmapLevel();b.setRenderTarget(wt),b.getClearColor(ut),ot=b.getClearAlpha(),ot<1&&b.setClearColor(16777215,.5),b.clear(),Ce&&Jt.render(lt);const oe=b.toneMapping;b.toneMapping=ja;const Qt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),g.setupLightsView(ct),$===!0&&Dt.setGlobalState(b.clippingPlanes,ct),Lr(R,lt,ct),re.updateMultisampleRenderTarget(wt),re.updateRenderTargetMipmap(wt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Le=0,Je=Y.length;Le<Je;Le++){const He=Y[Le],_e=He.object,ne=He.geometry,Ke=He.material,be=He.group;if(Ke.side===wi&&_e.layers.test(ct.layers)){const Un=Ke.side;Ke.side=Bn,Ke.needsUpdate=!0,qs(_e,lt,ct,ne,Ke,be),Ke.side=Un,Ke.needsUpdate=!0,ge=!0}}ge===!0&&(re.updateMultisampleRenderTarget(wt),re.updateRenderTargetMipmap(wt))}b.setRenderTarget(kt,Pt,ae),b.setClearColor(ut,ot),Qt!==void 0&&(ct.viewport=Qt),b.toneMapping=oe}function Lr(R,Y,lt){const ct=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,wt=R.length;Z<wt;Z++){const Nt=R[Z],kt=Nt.object,Pt=Nt.geometry,ae=Nt.group;let oe=Nt.material;oe.allowOverride===!0&&ct!==null&&(oe=ct),kt.layers.test(lt.layers)&&qs(kt,Y,lt,Pt,oe,ae)}}function qs(R,Y,lt,ct,Z,wt){R.onBeforeRender(b,Y,lt,ct,Z,wt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(b,Y,lt,ct,R,wt),Z.transparent===!0&&Z.side===wi&&Z.forceSinglePass===!1?(Z.side=Bn,Z.needsUpdate=!0,b.renderBufferDirect(lt,Y,ct,Z,R,wt),Z.side=Ka,Z.needsUpdate=!0,b.renderBufferDirect(lt,Y,ct,Z,R,wt),Z.side=wi):b.renderBufferDirect(lt,Y,ct,Z,R,wt),R.onAfterRender(b,Y,lt,ct,Z,wt)}function Ui(R,Y,lt){Y.isScene!==!0&&(Y=Zt);const ct=Ft.get(R),Z=g.state.lights,wt=g.state.shadowsArray,Nt=Z.state.version,kt=pt.getParameters(R,Z.state,wt,Y,lt),Pt=pt.getProgramCacheKey(kt);let ae=ct.programs;ct.environment=R.isMeshStandardMaterial?Y.environment:null,ct.fog=Y.fog,ct.envMap=(R.isMeshStandardMaterial?De:Fe).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ae===void 0&&(R.addEventListener("dispose",Mt),ae=new Map,ct.programs=ae);let oe=ae.get(Pt);if(oe!==void 0){if(ct.currentProgram===oe&&ct.lightsStateVersion===Nt)return Xi(R,kt),oe}else kt.uniforms=pt.getUniforms(R),R.onBeforeCompile(kt,b),oe=pt.acquireProgram(kt,Pt),ae.set(Pt,oe),ct.uniforms=kt.uniforms;const Qt=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Dt.uniform),Xi(R,kt),ct.needsLights=ma(R),ct.lightsStateVersion=Nt,ct.needsLights&&(Qt.ambientLightColor.value=Z.state.ambient,Qt.lightProbe.value=Z.state.probe,Qt.directionalLights.value=Z.state.directional,Qt.directionalLightShadows.value=Z.state.directionalShadow,Qt.spotLights.value=Z.state.spot,Qt.spotLightShadows.value=Z.state.spotShadow,Qt.rectAreaLights.value=Z.state.rectArea,Qt.ltc_1.value=Z.state.rectAreaLTC1,Qt.ltc_2.value=Z.state.rectAreaLTC2,Qt.pointLights.value=Z.state.point,Qt.pointLightShadows.value=Z.state.pointShadow,Qt.hemisphereLights.value=Z.state.hemi,Qt.directionalShadowMap.value=Z.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qt.spotShadowMap.value=Z.state.spotShadowMap,Qt.spotLightMatrix.value=Z.state.spotLightMatrix,Qt.spotLightMap.value=Z.state.spotLightMap,Qt.pointShadowMap.value=Z.state.pointShadowMap,Qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ct.currentProgram=oe,ct.uniformsList=null,oe}function Nr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=tu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Xi(R,Y){const lt=Ft.get(R);lt.outputColorSpace=Y.outputColorSpace,lt.batching=Y.batching,lt.batchingColor=Y.batchingColor,lt.instancing=Y.instancing,lt.instancingColor=Y.instancingColor,lt.instancingMorph=Y.instancingMorph,lt.skinning=Y.skinning,lt.morphTargets=Y.morphTargets,lt.morphNormals=Y.morphNormals,lt.morphColors=Y.morphColors,lt.morphTargetsCount=Y.morphTargetsCount,lt.numClippingPlanes=Y.numClippingPlanes,lt.numIntersection=Y.numClipIntersection,lt.vertexAlphas=Y.vertexAlphas,lt.vertexTangents=Y.vertexTangents,lt.toneMapping=Y.toneMapping}function pa(R,Y,lt,ct,Z){Y.isScene!==!0&&(Y=Zt),re.resetTextureUnits();const wt=Y.fog,Nt=ct.isMeshStandardMaterial?Y.environment:null,kt=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Hs,Pt=(ct.isMeshStandardMaterial?De:Fe).get(ct.envMap||Nt),ae=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Qt=!!lt.morphAttributes.position,ge=!!lt.morphAttributes.normal,Le=!!lt.morphAttributes.color;let Je=ja;ct.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=b.toneMapping);const He=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,_e=He!==void 0?He.length:0,ne=Ft.get(ct),Ke=g.state.lights;if($===!0&&(dt===!0||R!==D)){const nn=R===D&&ct.id===C;Dt.setState(ct,R,nn)}let be=!1;ct.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ke.state.version||ne.outputColorSpace!==kt||Z.isBatchedMesh&&ne.batching===!1||!Z.isBatchedMesh&&ne.batching===!0||Z.isBatchedMesh&&ne.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ne.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ne.instancing===!1||!Z.isInstancedMesh&&ne.instancing===!0||Z.isSkinnedMesh&&ne.skinning===!1||!Z.isSkinnedMesh&&ne.skinning===!0||Z.isInstancedMesh&&ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ne.instancingMorph===!1&&Z.morphTexture!==null||ne.envMap!==Pt||ct.fog===!0&&ne.fog!==wt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Dt.numPlanes||ne.numIntersection!==Dt.numIntersection)||ne.vertexAlphas!==ae||ne.vertexTangents!==oe||ne.morphTargets!==Qt||ne.morphNormals!==ge||ne.morphColors!==Le||ne.toneMapping!==Je||ne.morphTargetsCount!==_e)&&(be=!0):(be=!0,ne.__version=ct.version);let Un=ne.currentProgram;be===!0&&(Un=Ui(ct,Y,Z));let yi=!1,Hn=!1,Sn=!1;const Ye=Un.getUniforms(),Gn=ne.uniforms;if(Ct.useProgram(Un.program)&&(yi=!0,Hn=!0,Sn=!0),ct.id!==C&&(C=ct.id,Hn=!0),yi||D!==R){Ct.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ye.setValue(I,"projectionMatrix",R.projectionMatrix),Ye.setValue(I,"viewMatrix",R.matrixWorldInverse);const wn=Ye.map.cameraPosition;wn!==void 0&&wn.setValue(I,_t.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Ye.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ye.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Hn=!0,Sn=!0)}if(Z.isSkinnedMesh){Ye.setOptional(I,Z,"bindMatrix"),Ye.setOptional(I,Z,"bindMatrixInverse");const nn=Z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ye.setValue(I,"boneTexture",nn.boneTexture,re))}Z.isBatchedMesh&&(Ye.setOptional(I,Z,"batchingTexture"),Ye.setValue(I,"batchingTexture",Z._matricesTexture,re),Ye.setOptional(I,Z,"batchingIdTexture"),Ye.setValue(I,"batchingIdTexture",Z._indirectTexture,re),Ye.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ye.setValue(I,"batchingColorTexture",Z._colorsTexture,re));const Ln=lt.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Tt.update(Z,lt,Un),(Hn||ne.receiveShadow!==Z.receiveShadow)&&(ne.receiveShadow=Z.receiveShadow,Ye.setValue(I,"receiveShadow",Z.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Gn.envMap.value=Pt,Gn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Y.environment!==null&&(Gn.envMapIntensity.value=Y.environmentIntensity),Hn&&(Ye.setValue(I,"toneMappingExposure",b.toneMappingExposure),ne.needsLights&&Ja(Gn,Sn),wt&&ct.fog===!0&&yt.refreshFogUniforms(Gn,wt),yt.refreshMaterialUniforms(Gn,ct,H,W,g.state.transmissionRenderTarget[R.id]),tu.upload(I,Nr(ne),Gn,re)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(tu.upload(I,Nr(ne),Gn,re),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ye.setValue(I,"center",Z.center),Ye.setValue(I,"modelViewMatrix",Z.modelViewMatrix),Ye.setValue(I,"normalMatrix",Z.normalMatrix),Ye.setValue(I,"modelMatrix",Z.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const nn=ct.uniformsGroups;for(let wn=0,Or=nn.length;wn<Or;wn++){const qn=nn[wn];fe.update(qn,Un),fe.bind(qn,Un)}}return Un}function Ja(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ma(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,Y,lt){const ct=Ft.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=Y,Ft.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const lt=Ft.get(R);lt.__webglFramebuffer=Y,lt.__useDefaultFramebuffer=Y===void 0};const cn=I.createFramebuffer();this.setRenderTarget=function(R,Y=0,lt=0){F=R,V=Y,B=lt;let ct=!0,Z=null,wt=!1,Nt=!1;if(R){const Pt=Ft.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(I.FRAMEBUFFER,null),ct=!1;else if(Pt.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Pt.__hasExternalTextures)re.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Pt.__boundDepthTexture!==Qt){if(Qt!==null&&Ft.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Nt=!0);const oe=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[Y])?Z=oe[Y][lt]:Z=oe[Y],wt=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Z=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?Z=oe[lt]:Z=oe,G.copy(R.viewport),nt.copy(R.scissor),rt=R.scissorTest}else G.copy(K).multiplyScalar(H).floor(),nt.copy(at).multiplyScalar(H).floor(),rt=ht;if(lt!==0&&(Z=cn),Ct.bindFramebuffer(I.FRAMEBUFFER,Z)&&ct&&Ct.drawBuffers(R,Z),Ct.viewport(G),Ct.scissor(nt),Ct.setScissorTest(rt),wt){const Pt=Ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,lt)}else if(Nt){const Pt=Y;for(let ae=0;ae<R.textures.length;ae++){const oe=Ft.get(R.textures[ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ae,oe.__webglTexture,lt,Pt)}}else if(R!==null&&lt!==0){const Pt=Ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,lt)}C=-1},this.readRenderTargetPixels=function(R,Y,lt,ct,Z,wt,Nt,kt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){Ct.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const ae=R.textures[kt],oe=ae.format,Qt=ae.type;if(!de.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ct&&lt>=0&&lt<=R.height-Z&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+kt),I.readPixels(Y,lt,ct,Z,jt.convert(oe),jt.convert(Qt),wt))}finally{const ae=F!==null?Ft.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(R,Y,lt,ct,Z,wt,Nt,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(Y>=0&&Y<=R.width-ct&&lt>=0&&lt<=R.height-Z){Ct.bindFramebuffer(I.FRAMEBUFFER,Pt);const ae=R.textures[kt],oe=ae.format,Qt=ae.type;if(!de.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.bufferData(I.PIXEL_PACK_BUFFER,wt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+kt),I.readPixels(Y,lt,ct,Z,jt.convert(oe),jt.convert(Qt),0);const Le=F!==null?Ft.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,Le);const Je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await aM(I,Je,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,wt),I.deleteBuffer(ge),I.deleteSync(Je),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,lt=0){const ct=Math.pow(2,-lt),Z=Math.floor(R.image.width*ct),wt=Math.floor(R.image.height*ct),Nt=Y!==null?Y.x:0,kt=Y!==null?Y.y:0;re.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,lt,0,0,Nt,kt,Z,wt),Ct.unbindTexture()};const hl=I.createFramebuffer(),pl=I.createFramebuffer();this.copyTextureToTexture=function(R,Y,lt=null,ct=null,Z=0,wt=null){wt===null&&(Z!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=Z,Z=0):wt=0);let Nt,kt,Pt,ae,oe,Qt,ge,Le,Je;const He=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(lt!==null)Nt=lt.max.x-lt.min.x,kt=lt.max.y-lt.min.y,Pt=lt.isBox3?lt.max.z-lt.min.z:1,ae=lt.min.x,oe=lt.min.y,Qt=lt.isBox3?lt.min.z:0;else{const Ln=Math.pow(2,-Z);Nt=Math.floor(He.width*Ln),kt=Math.floor(He.height*Ln),R.isDataArrayTexture?Pt=He.depth:R.isData3DTexture?Pt=Math.floor(He.depth*Ln):Pt=1,ae=0,oe=0,Qt=0}ct!==null?(ge=ct.x,Le=ct.y,Je=ct.z):(ge=0,Le=0,Je=0);const _e=jt.convert(Y.format),ne=jt.convert(Y.type);let Ke;Y.isData3DTexture?(re.setTexture3D(Y,0),Ke=I.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(re.setTexture2DArray(Y,0),Ke=I.TEXTURE_2D_ARRAY):(re.setTexture2D(Y,0),Ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),Un=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yi=I.getParameter(I.UNPACK_SKIP_PIXELS),Hn=I.getParameter(I.UNPACK_SKIP_ROWS),Sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,He.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const Ye=R.isDataArrayTexture||R.isData3DTexture,Gn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Ln=Ft.get(R),nn=Ft.get(Y),wn=Ft.get(Ln.__renderTarget),Or=Ft.get(nn.__renderTarget);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let qn=0;qn<Pt;qn++)Ye&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Z,Qt+qn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(Y).__webglTexture,wt,Je+qn)),I.blitFramebuffer(ae,oe,Nt,kt,ge,Le,Nt,kt,I.DEPTH_BUFFER_BIT,I.NEAREST);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ft.has(R)){const Ln=Ft.get(R),nn=Ft.get(Y);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,hl),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,pl);for(let wn=0;wn<Pt;wn++)Ye?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,Z,Qt+wn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,Z),Gn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,wt,Je+wn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,wt),Z!==0?I.blitFramebuffer(ae,oe,Nt,kt,ge,Le,Nt,kt,I.COLOR_BUFFER_BIT,I.NEAREST):Gn?I.copyTexSubImage3D(Ke,wt,ge,Le,Je+wn,ae,oe,Nt,kt):I.copyTexSubImage2D(Ke,wt,ge,Le,ae,oe,Nt,kt);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Gn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Ke,wt,ge,Le,Je,Nt,kt,Pt,_e,ne,He.data):Y.isCompressedArrayTexture?I.compressedTexSubImage3D(Ke,wt,ge,Le,Je,Nt,kt,Pt,_e,He.data):I.texSubImage3D(Ke,wt,ge,Le,Je,Nt,kt,Pt,_e,ne,He):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,wt,ge,Le,Nt,kt,_e,ne,He.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,wt,ge,Le,He.width,He.height,_e,He.data):I.texSubImage2D(I.TEXTURE_2D,wt,ge,Le,Nt,kt,_e,ne,He);I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Un),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Hn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Sn),wt===0&&Y.generateMipmaps&&I.generateMipmap(Ke),Ct.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,lt=null,ct=null,Z=0){return Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,lt,ct,Z)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){V=0,B=0,F=null,Ct.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const TA={radius_km:6371,distance_from_sun_au:1,orbital_period_earth_days:365,rotation_period_hours:23.93},AA={radius_km:1737.4,distance_from_earth_km:384400,orbital_period_earth_days:27.3,rotation_period_earth_days:27.3},wA={radius_km:3389.5,distance_from_sun_au:1.52,orbital_period_earth_days:687,rotation_period_hours:24.62},RA={radius_km:6051.8,distance_from_sun_au:.72,orbital_period_earth_days:225,rotation_period_earth_days:243},CA={radius_km:2439.7,distance_from_sun_au:.39,orbital_period_earth_days:88,rotation_period_earth_days:58.67},DA={radius_km:69911,distance_from_sun_au:5.2,orbital_period_earth_days:4333,rotation_period_hours:9.92},UA={radius_km:58232,distance_from_sun_au:9.5,orbital_period_earth_days:10759,rotation_period_hours:10.55},LA={radius_km:25362,distance_from_sun_au:19.8,orbital_period_earth_days:30687,rotation_period_hours:17.23},NA={radius_km:24622,distance_from_sun_au:30,orbital_period_earth_days:60190,rotation_period_hours:16.1},OA={Earth:TA,Moon:AA,Mars:wA,Venus:RA,Mercury:CA,Jupiter:DA,Saturn:UA,Uranus:LA,Neptune:NA},kv=te.forwardRef(({onLocationChange:s},t)=>{const i=te.useRef(null),r=te.useRef(null),l=te.useRef(null),c=te.useRef(null),f=te.useRef({}),h=te.useRef(null),m=te.useRef(0),p=te.useRef(0),_=te.useRef(150);te.useImperativeHandle(t,()=>({focusOnPlanet:y=>{console.log("focusOnPlanet called for:",y),console.log("Available planets:",Object.keys(f.current));const S=f.current[y];if(S&&S.mesh){console.log("Planet found:",y),console.log("Planet mesh position:",S.mesh.position),console.log("Planet data:",S.data),s&&s(y);const E=S.mesh.position.clone();console.log("Planet position:",E);let w,v,g;if(y==="Sun")w=0,v=.3,g=120;else{const L=E.x,b=E.z,N=Math.sqrt(L*L+b*b),V=Math.atan2(b,L);console.log("Planet actual position data:",{name:y,actualX:L,actualZ:b,actualDistance:N,actualAngle:V,storedDistance:S.distance,storedAngle:S.angle}),w=V+Math.PI/3,v=.2,g=Math.max(N*.4,40),console.log("Calculated target angles:",{targetTheta:w,targetPhi:v,targetDistance:g})}const U=c.current;if(U){console.log("Camera found, starting animation");const L=Math.sqrt(U.position.x*U.position.x+U.position.y*U.position.y+U.position.z*U.position.z),b=Math.atan2(U.position.z,U.position.x),N=Math.asin(U.position.y/L);console.log("Current camera state:",{currentTheta:b,currentPhi:N,currentDistance:L}),(()=>{const B=Date.now(),F=2e3,C=m.current,D=p.current,G=_.current;console.log("Starting animation from:",{startTheta:C,startPhi:D,startDistance:G},"to:",{targetTheta:w,targetPhi:v,targetDistance:g});const nt=()=>{const rt=Date.now()-B,ut=Math.min(rt/F,1),ot=1-Math.pow(1-ut,3);m.current=C+(w-C)*ot,p.current=D+(v-D)*ot,_.current=G+(g-G)*ot,console.log("Animation progress:",ut,"Current values:",{targetX:m.current,targetY:p.current,cameraDistance:_.current}),ut<1?requestAnimationFrame(nt):(m.current=w,p.current=v,_.current=g,console.log("Animation complete, final values:",{targetX:m.current,targetY:p.current,cameraDistance:_.current}))};nt()})()}else console.log("Camera not found in cameraRef.current")}else console.log("Planet not found:",y,"Available planets:",Object.keys(f.current))}}),[s]),te.useEffect(()=>{if(!i.current)return;const y=new op;y.background=new xe(8),r.current=y;const S=new Fn,E=2e4,w=new Float32Array(E*3),v=new Float32Array(E*3);for(let bt=0;bt<E;bt++){w[bt*3]=(Math.random()-.5)*2500,w[bt*3+1]=(Math.random()-.5)*2500,w[bt*3+2]=(Math.random()-.5)*2500;const I=Math.random();I<.6?(v[bt*3]=1,v[bt*3+1]=1,v[bt*3+2]=1):I<.8?(v[bt*3]=.6,v[bt*3+1]=.8,v[bt*3+2]=1):I<.95?(v[bt*3]=1,v[bt*3+1]=1,v[bt*3+2]=.7):(v[bt*3]=1,v[bt*3+1]=.6,v[bt*3+2]=.4)}S.setAttribute("position",new hn(w,3)),S.setAttribute("color",new hn(v,3));const g=new zs({size:2,vertexColors:!0,transparent:!0,opacity:.8}),U=new el(S,g);y.add(U);const L=U,b=new Wn(60,window.innerWidth/window.innerHeight,.1,5e3);b.position.set(0,50,150),c.current=b;const N=new mp({antialias:!0});N.setSize(window.innerWidth,window.innerHeight),N.shadowMap.enabled=!0,N.shadowMap.type=au,i.current.appendChild(N.domElement),l.current=N;const V=new hp(4210752,1.5);y.add(V);const B=new Pv(16777215,2,1e3);B.position.set(0,0,0),B.castShadow=!0,B.shadow.mapSize.width=2048,B.shadow.mapSize.height=2048,y.add(B);const F=new Nv,C=new Qn(8,64,64),D=F.load("/assets/textures/sun_texture.jpg"),G=new Bi({map:D,emissive:16755200,emissiveIntensity:.3}),nt=new sn(C,G);y.add(nt),f.current.Sun={mesh:nt,radius:8,distance:0,angle:0};const rt=50,ut=.5,ot={Mercury:{color:12559728,texture:"/assets/textures/mercury_texture.jpg",emissive:3351057},Venus:{color:16767334,texture:"/assets/textures/venus_texture.png",emissive:5588019},Earth:{color:2267613,texture:"/assets/textures/earth_texture.jpg",emissive:13141},Mars:{color:15628151,texture:"/assets/textures/mars_texture.jpg",emissive:4469555},Jupiter:{color:15649962,texture:"/assets/textures/jupiter_texture.jpg",emissive:4469538},Saturn:{color:16772812,texture:"/assets/textures/saturn_texture.jpg",emissive:4469538},Uranus:{color:6741503,texture:"/assets/textures/uranus_texture.png",emissive:13124},Neptune:{color:6719743,texture:"/assets/textures/neptune_texture.jpg",emissive:8772}};Object.entries(OA).forEach(([bt,I])=>{if(bt==="Moon")return;const ie=Math.max(I.radius_km*ut*.001,.2),Gt=I.distance_from_sun_au*rt,de=ot[bt],Ct=new Qn(ie,64,64);let Ee;const Ft=F.load(de.texture);Ee=new Bi({map:Ft,color:de.color,emissive:de.emissive,emissiveIntensity:.8,transparent:!1,opacity:1});const re=new sn(Ct,Ee);if(re.position.x=Gt,re.castShadow=!0,re.receiveShadow=!0,y.add(re),bt==="Saturn"){const pt=new up(ie*1.2,ie*2.2,64),yt=new Bi({color:12632256,side:wi,transparent:!0,opacity:.7,alphaTest:.1}),ft=new sn(pt,yt);ft.rotation.x=Math.PI/2,ft.castShadow=!0,ft.receiveShadow=!0,re.add(ft)}f.current[bt]={mesh:re,data:I,distance:Gt,angle:0,radius:ie,moons:[]};const Fe=document.createElement("canvas"),De=Fe.getContext("2d");Fe.width=512,Fe.height=128,De.fillStyle="rgba(255, 255, 255, 0.9)",De.font="bold 32px Arial",De.textAlign="center",De.textBaseline="middle",De.shadowColor="rgba(0, 0, 0, 0.8)",De.shadowBlur=4,De.shadowOffsetX=2,De.shadowOffsetY=2,De.fillText(bt,256,64);const z=new Uv(Fe),T=new lp({map:z,transparent:!0,alphaTest:.1}),tt=new Dv(T);tt.position.copy(re.position),tt.position.y+=ie*4,tt.scale.set(ie*12,ie*3,1),y.add(tt),f.current[bt].label=tt}),x(y,f.current,F);let P=!1,W=0,H=0;m.current,p.current;let xt=_.current,O=!1,K=5;const at=bt=>{bt.preventDefault(),P=!0,O=!1,W=bt.clientX,H=bt.clientY},ht=bt=>{if(!P)return;bt.preventDefault();const I=c.current;if(I&&I.userData.focusMode)return;const ie=bt.clientX-W,Gt=bt.clientY-H;(Math.abs(ie)>K||Math.abs(Gt)>K)&&(O=!0),O&&(m.current+=ie*.005,p.current+=Gt*.005,p.current=Math.max(-Math.PI/2,Math.min(Math.PI/2,p.current)),W=bt.clientX,H=bt.clientY)},Et=bt=>{bt.preventDefault(),!O&&P&&$(bt),P=!1,O=!1},$=bt=>{const I=N.domElement.getBoundingClientRect(),ie=new me;ie.x=(bt.clientX-I.left)/I.width*2-1,ie.y=-((bt.clientY-I.top)/I.height)*2+1;const Gt=new VM;Gt.setFromCamera(ie,b);const de=Object.values(f.current).map(Ee=>Ee.mesh).filter(Boolean),Ct=Gt.intersectObjects(de);if(Ct.length>0){const Ee=Ct[0].object;for(const[Ft,re]of Object.entries(f.current))if(re.mesh===Ee){focusOnPlanet(Ft),s&&s(Ft);break}}},dt=bt=>{bt.preventDefault();const I=.05;_.current+=bt.deltaY*I,_.current=Math.max(10,Math.min(1e3,_.current));const ie=c.current;if(ie){const Gt=new Q;ie.getWorldDirection(Gt);const Ct=new Q(0,0,0).clone().sub(Gt.multiplyScalar(xt));ie.userData.focusMode||ie.position.copy(Ct)}},mt=bt=>{bt.touches.length===1&&(bt.preventDefault(),P=!0,W=bt.touches[0].clientX,H=bt.touches[0].clientY)},_t=bt=>{if(!P||bt.touches.length!==1)return;bt.preventDefault();const I=c.current;if(I&&I.userData.focusMode)return;const ie=bt.touches[0].clientX-W,Gt=bt.touches[0].clientY-H;m.current+=ie*.005,p.current+=Gt*.005,p.current=Math.max(-Math.PI/2,Math.min(Math.PI/2,p.current)),W=bt.touches[0].clientX,H=bt.touches[0].clientY},Bt=bt=>{bt.preventDefault(),P=!1};N.domElement.addEventListener("mousedown",at),N.domElement.addEventListener("mousemove",ht),N.domElement.addEventListener("mouseup",Et),N.domElement.addEventListener("wheel",dt),N.domElement.addEventListener("touchstart",mt),N.domElement.addEventListener("touchmove",_t),N.domElement.addEventListener("touchend",Bt);const Zt=()=>{h.current=requestAnimationFrame(Zt),Math.random()<.001&&console.log("Animation loop ref values:",{targetX:m.current,targetY:p.current,cameraDistance:_.current}),b.userData.focusMode?b.userData.focusMode&&console.log("Animation loop: Focus mode active, skipping camera update"):(b.position.x=Math.cos(m.current)*Math.cos(p.current)*_.current,b.position.y=Math.sin(p.current)*_.current,b.position.z=Math.sin(m.current)*Math.cos(p.current)*_.current,b.lookAt(0,0,0)),L.rotation.x+=1e-4,L.rotation.y+=2e-4,Object.entries(f.current).forEach(([bt,I])=>{if(bt==="Sun"){I.mesh.rotation.y+=.005;return}const Gt=.002/Math.pow(I.data.distance_from_sun_au,1.5);I.angle+=Gt,I.mesh.position.x=Math.cos(I.angle)*I.distance,I.mesh.position.z=Math.sin(I.angle)*I.distance,I.label&&(I.label.position.copy(I.mesh.position),I.label.position.y+=I.radius*4);const de=bt==="Venus"?-.005:.02;I.mesh.rotation.y+=de,I.moons&&I.moons.forEach(Ct=>{Ct.angle+=Ct.speed;const Ee=I.mesh.position;Ct.mesh.position.x=Ee.x+Math.cos(Ct.angle)*Ct.distance,Ct.mesh.position.z=Ee.z+Math.sin(Ct.angle)*Ct.distance,Ct.mesh.position.y=Ee.y+Math.sin(Ct.angle*.3)*Ct.distance*.05,Ct.mesh.rotation.y+=.01})}),N.render(y,b)};Zt();const Ce=()=>{b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ce),()=>{window.removeEventListener("resize",Ce),N.domElement.removeEventListener("mousedown",at),N.domElement.removeEventListener("mousemove",ht),N.domElement.removeEventListener("mouseup",Et),N.domElement.removeEventListener("wheel",dt),N.domElement.removeEventListener("touchstart",mt),N.domElement.removeEventListener("touchmove",_t),N.domElement.removeEventListener("touchend",Bt),h.current&&cancelAnimationFrame(h.current),i.current&&N.domElement&&i.current.removeChild(N.domElement),N.dispose()}},[]);function x(y,S,E){if(S.Earth){const g=new Qn(.15,32,32),U=E.load("/assets/textures/moon_texture.jpg"),L=new Bi({map:U,emissive:1118481,emissiveIntensity:.05}),b=new sn(g,L);b.castShadow=!0,b.receiveShadow=!0,y.add(b),S.Earth.moons.push({mesh:b,distance:3,angle:0,speed:.02,name:"Moon"})}if(S.Mars){const g=new Qn(.05,16,16),U=new Bi({color:6908265}),L=new sn(g,U);L.castShadow=!0,y.add(L),S.Mars.moons.push({mesh:L,distance:1.5,angle:0,speed:.05,name:"Phobos"});const b=.03,N=2.2,V=new Qn(b,16,16),B=new Bi({color:5592405}),F=new sn(V,B);F.castShadow=!0,y.add(F),S.Mars.moons.push({mesh:F,distance:N,angle:Math.PI,speed:.03,name:"Deimos"})}S.Jupiter&&[{name:"Io",radius:.08,distance:4,speed:.04,color:16777113},{name:"Europa",radius:.07,distance:5,speed:.03,color:11184895},{name:"Ganymede",radius:.09,distance:6.5,speed:.025,color:8947848},{name:"Callisto",radius:.08,distance:8,speed:.02,color:4473924}].forEach((v,g)=>{const U=new Qn(v.radius,16,16),L=new Bi({color:v.color}),b=new sn(U,L);b.castShadow=!0,y.add(b),S.Jupiter.moons.push({mesh:b,distance:v.distance,angle:g*Math.PI/2,speed:v.speed,name:v.name})}),S.Saturn&&[{name:"Titan",radius:.12,distance:8,speed:.015,color:13408614},{name:"Enceladus",radius:.04,distance:5,speed:.03,color:16777215}].forEach((v,g)=>{const U=new Qn(v.radius,16,16),L=new Bi({color:v.color}),b=new sn(U,L);b.castShadow=!0,y.add(b),S.Saturn.moons.push({mesh:b,distance:v.distance,angle:g*Math.PI,speed:v.speed,name:v.name})})}return It.jsx("div",{ref:i,className:"w-full h-full"})});kv.displayName="EnhancedRealisticUniverseScene";const PA=({onLocationChange:s})=>{const t=te.useRef(null),i=te.useRef(null),r=te.useRef(null),l=te.useRef(null),c=te.useRef(null),f=te.useRef(null),[h,m]=te.useState(!1);return te.useEffect(()=>{if(!t.current)return;const p=new op;p.background=new xe(8),i.current=p;const _=new Fn,x=1e4,y=new Float32Array(x*3);for(let _t=0;_t<x;_t++)y[_t*3]=(Math.random()-.5)*2e3,y[_t*3+1]=(Math.random()-.5)*2e3,y[_t*3+2]=(Math.random()-.5)*2e3;_.setAttribute("position",new hn(y,3));const S=new zs({color:16777215,size:1,transparent:!0,opacity:.8}),E=new el(_,S);p.add(E);const w=new Wn(75,window.innerWidth/window.innerHeight,.1,1e4);w.position.set(0,0,200),l.current=w;const v=new mp({antialias:!0});v.setSize(window.innerWidth,window.innerHeight),v.shadowMap.enabled=!0,v.shadowMap.type=au,t.current.appendChild(v.domElement),r.current=v;const g=new hp(4210752,.4);p.add(g);const U=new HM(16777215,1);U.position.set(100,50,100),U.castShadow=!0,U.shadow.mapSize.width=2048,U.shadow.mapSize.height=2048,p.add(U);const L=new Nv,b=new Qn(50,128,128),N=L.load("/assets/textures/earth_texture.jpg",()=>{m(!0)}),V=new Bi({map:N,transparent:!1}),B=new sn(b,V);B.castShadow=!0,B.receiveShadow=!0,p.add(B),c.current=B;const F=new Qn(52,64,64),C=new Bi({color:8900331,transparent:!0,opacity:.2,side:Bn}),D=new sn(F,C);p.add(D);let G=!1,nt=0,rt=0,ut=0,ot=0,P=200,W=!1,H=5;const xt=_t=>{_t.preventDefault(),G=!0,W=!1,nt=_t.clientX,rt=_t.clientY},O=_t=>{if(!G)return;_t.preventDefault();const Bt=_t.clientX-nt,Zt=_t.clientY-rt;(Math.abs(Bt)>H||Math.abs(Zt)>H)&&(W=!0),W&&(ut+=Bt*.005,ot+=Zt*.005,ot=Math.max(-Math.PI/2,Math.min(Math.PI/2,ot)),nt=_t.clientX,rt=_t.clientY)},K=_t=>{_t.preventDefault(),G=!1,W=!1},at=_t=>{_t.preventDefault(),P+=_t.deltaY*.1,P=Math.max(55,Math.min(500,P)),P>300?s&&s("Space View"):P>150?s&&s("High Altitude"):P>80?s&&s("Low Earth Orbit"):s&&s("Surface View")},ht=_t=>{_t.touches.length===1&&(_t.preventDefault(),G=!0,nt=_t.touches[0].clientX,rt=_t.touches[0].clientY)},Et=_t=>{if(!G||_t.touches.length!==1)return;_t.preventDefault();const Bt=_t.touches[0].clientX-nt,Zt=_t.touches[0].clientY-rt;ut+=Bt*.005,ot+=Zt*.005,ot=Math.max(-Math.PI/2,Math.min(Math.PI/2,ot)),nt=_t.touches[0].clientX,rt=_t.touches[0].clientY},$=_t=>{_t.preventDefault(),G=!1};v.domElement.addEventListener("mousedown",xt),v.domElement.addEventListener("mousemove",O),v.domElement.addEventListener("mouseup",K),v.domElement.addEventListener("wheel",at),v.domElement.addEventListener("touchstart",ht),v.domElement.addEventListener("touchmove",Et),v.domElement.addEventListener("touchend",$);const dt=()=>{f.current=requestAnimationFrame(dt),w.position.x=Math.cos(ut)*Math.cos(ot)*P,w.position.y=Math.sin(ot)*P,w.position.z=Math.sin(ut)*Math.cos(ot)*P,w.lookAt(0,0,0),B&&(B.rotation.y+=.001,D.rotation.y+=.001),E.rotation.x+=1e-4,E.rotation.y+=2e-4,v.render(p,w)};dt();const mt=()=>{w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",mt),()=>{window.removeEventListener("resize",mt),v.domElement.removeEventListener("mousedown",xt),v.domElement.removeEventListener("mousemove",O),v.domElement.removeEventListener("mouseup",K),v.domElement.removeEventListener("wheel",at),v.domElement.removeEventListener("touchstart",ht),v.domElement.removeEventListener("touchmove",Et),v.domElement.removeEventListener("touchend",$),f.current&&cancelAnimationFrame(f.current),t.current&&v.domElement&&t.current.removeChild(v.domElement),v.dispose()}},[s]),It.jsxs("div",{className:"relative w-full h-full",children:[It.jsx("div",{ref:t,className:"w-full h-full"}),!h&&It.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80",children:It.jsx("div",{className:"text-white text-lg",children:"Loading Earth..."})})]})},zA=te.forwardRef(({onLocationChange:s},t)=>{const i=te.useRef(null),r=te.useRef(null),l=te.useRef(null),c=te.useRef(null),f=te.useRef(null),h=te.useRef(null),[m,p]=te.useState(!1),_={"Galactic Center":{x:0,y:0,z:0,distance:500},"Perseus Arm":{x:-3e3,y:200,z:-1500,distance:2e3},"Sagittarius Arm":{x:2e3,y:-300,z:2500,distance:1800},"Orion Arm":{x:-1e3,y:100,z:1200,distance:1500},"Outer Rim":{x:0,y:500,z:5e3,distance:3e3},"Galactic Halo":{x:0,y:8e3,z:0,distance:6e3}};te.useImperativeHandle(t,()=>({navigateToGalaxyRegion:v=>{console.log("Navigating to galaxy region:",v);const g=_[v];if(g&&c.current){console.log("Galaxy region found:",v,g),s&&s(v);const U=c.current,L=U.position.clone(),b=new Q(g.x,g.y,g.z),N=b.clone().normalize(),V=b.clone().add(N.multiplyScalar(g.distance));console.log("Animating camera from:",L,"to:",V),(()=>{const F=Date.now(),C=3e3,D=()=>{const G=Date.now()-F,nt=Math.min(G/C,1),rt=1-Math.pow(1-nt,3);U.position.lerpVectors(L,V,rt),U.lookAt(b),nt<1?requestAnimationFrame(D):console.log("Galaxy navigation animation complete")};D()})()}else console.log("Galaxy region not found:",v,"Available regions:",Object.keys(_))}}),[s]),te.useEffect(()=>{if(!i.current)return;const v=new op;v.background=new xe(5),r.current=v;const g=new Wn(75,window.innerWidth/window.innerHeight,.1,5e4);g.position.set(0,2e3,8e3),c.current=g;const U=new mp({antialias:!0});U.setSize(window.innerWidth,window.innerHeight),U.shadowMap.enabled=!0,U.shadowMap.type=au,i.current.appendChild(U.domElement),l.current=U;const L=new hp(4210752,.3);v.add(L);const b=new Pv(16755268,2,5e3);b.position.set(0,0,0),v.add(b),x(v),E(v),w(v);let N=!1,V=0,B=0,F=0,C=0,D=8e3,G=!1,nt=5;const rt=at=>{at.preventDefault(),N=!0,G=!1,V=at.clientX,B=at.clientY},ut=at=>{if(!N)return;at.preventDefault();const ht=at.clientX-V,Et=at.clientY-B;(Math.abs(ht)>nt||Math.abs(Et)>nt)&&(G=!0),G&&(F+=ht*.005,C+=Et*.005,V=at.clientX,B=at.clientY)},ot=at=>{at.preventDefault(),N=!1,G=!1},P=at=>{at.preventDefault(),D+=at.deltaY*2,D=Math.max(500,Math.min(2e4,D)),D>15e3?s&&s("Intergalactic Space"):D>8e3?s&&s("Galaxy Overview"):D>3e3?s&&s("Spiral Arms"):D>1e3?s&&s("Galactic Disk"):s&&s("Galactic Core")},W=at=>{at.touches.length===1&&(at.preventDefault(),N=!0,V=at.touches[0].clientX,B=at.touches[0].clientY)},H=at=>{if(!N||at.touches.length!==1)return;at.preventDefault();const ht=at.touches[0].clientX-V,Et=at.touches[0].clientY-B;F+=ht*.005,C+=Et*.005,V=at.touches[0].clientX,B=at.touches[0].clientY},xt=at=>{at.preventDefault(),N=!1};U.domElement.addEventListener("mousedown",rt),U.domElement.addEventListener("mousemove",ut),U.domElement.addEventListener("mouseup",ot),U.domElement.addEventListener("wheel",P),U.domElement.addEventListener("touchstart",W),U.domElement.addEventListener("touchmove",H),U.domElement.addEventListener("touchend",xt);const O=()=>{h.current=requestAnimationFrame(O),g.position.x=Math.cos(F)*Math.cos(C)*D,g.position.y=Math.sin(C)*D,g.position.z=Math.sin(F)*Math.cos(C)*D,g.lookAt(0,0,0),f.current&&(f.current.rotation.y+=5e-4),U.render(v,g)};O(),p(!0);const K=()=>{g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",K),()=>{window.removeEventListener("resize",K),U.domElement.removeEventListener("mousedown",rt),U.domElement.removeEventListener("mousemove",ut),U.domElement.removeEventListener("mouseup",ot),U.domElement.removeEventListener("wheel",P),U.domElement.removeEventListener("touchstart",W),U.domElement.removeEventListener("touchmove",H),U.domElement.removeEventListener("touchend",xt),h.current&&cancelAnimationFrame(h.current),i.current&&U.domElement&&i.current.removeChild(U.domElement),U.dispose()}},[s]);function x(v){const g=new Jo;f.current=g;const U={count:15e4,size:.015,radius:6e3,branches:2,spin:1.2,randomness:.3,randomnessPower:2.5,insideColor:"#ffaa44",outsideColor:"#1b3984",barLength:1500},L=new Fn,b=new Float32Array(U.count*3),N=new Float32Array(U.count*3),V=new xe(U.insideColor),B=new xe(U.outsideColor);for(let P=0;P<U.count;P++){const W=P*3,H=Math.pow(Math.random(),.7)*U.radius,xt=H*U.spin*8e-4,O=P%U.branches/U.branches*Math.PI*2;let K,at;if(H<U.barLength&&Math.random()<.3){const _t=Math.PI*.25,Bt=Math.random()*U.barLength;K=Math.cos(_t)*Bt,at=Math.sin(_t)*Bt}else K=Math.cos(O+xt)*H,at=Math.sin(O+xt)*H;const ht=Math.pow(Math.random(),U.randomnessPower)*(Math.random()<.5?1:-1)*U.randomness*H,Et=Math.pow(Math.random(),U.randomnessPower)*(Math.random()<.5?1:-1)*U.randomness*H*.05,$=Math.pow(Math.random(),U.randomnessPower)*(Math.random()<.5?1:-1)*U.randomness*H;b[W]=K+ht,b[W+1]=Et,b[W+2]=at+$;const dt=V.clone(),mt=Math.min(H/U.radius,1);dt.lerp(B,mt),Math.random()<.1?dt.lerp(new xe("#ffffff"),.5):Math.random()<.05&&dt.lerp(new xe("#ff4444"),.7),N[W]=dt.r,N[W+1]=dt.g,N[W+2]=dt.b}L.setAttribute("position",new hn(b,3)),L.setAttribute("color",new hn(N,3));const F=new zs({size:U.size,sizeAttenuation:!0,depthWrite:!1,blending:eh,vertexColors:!0,transparent:!0,opacity:.8}),C=new el(L,F);g.add(C);const D=new Qn(80,32,32),G=new tl({color:16768324,transparent:!0,opacity:.9}),nt=new sn(D,G);g.add(nt);const rt=new Qn(8e3,32,32),ut=new tl({color:2245802,transparent:!0,opacity:.02,side:Bn}),ot=new sn(rt,ut);g.add(ot),y(g),S(v),v.add(g)}function y(v){const g=new Fn,U=2e4,L=new Float32Array(U*3),b=new Float32Array(U*3);for(let B=0;B<U;B++){const F=B*3,C=Math.random()*4e3+500,D=Math.random()*Math.PI*2;L[F]=Math.cos(D)*C,L[F+1]=(Math.random()-.5)*50,L[F+2]=Math.sin(D)*C,b[F]=.1,b[F+1]=.05,b[F+2]=.02}g.setAttribute("position",new hn(L,3)),g.setAttribute("color",new hn(b,3));const N=new zs({size:.02,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.6}),V=new el(g,N);v.add(V)}function S(v,g){[{name:"Sagittarius A* (Galactic Core)",position:[0,0,0],color:"#ffdd44"},{name:"Perseus Arm",position:[3e3,0,2e3],color:"#88aaff"},{name:"Scutum-Centaurus Arm",position:[-2500,0,3e3],color:"#88aaff"},{name:"Norma Arm",position:[1500,0,-3500],color:"#88aaff"},{name:"Sagittarius Arm",position:[-3500,0,-1500],color:"#88aaff"},{name:"Orion Spur (Our Location)",position:[1200,0,2800],color:"#ffaa44"},{name:"Galactic Halo",position:[0,4e3,0],color:"#aaccff"},{name:"Central Bar",position:[800,0,800],color:"#ffcc66"},{name:"Outer Rim",position:[5e3,0,0],color:"#6688aa"}].forEach(L=>{const b=document.createElement("canvas"),N=b.getContext("2d");b.width=512,b.height=128,N.fillStyle="rgba(0, 0, 0, 0.7)",N.fillRect(0,0,b.width,b.height),N.fillStyle=L.color,N.font="bold 24px Arial",N.textAlign="center",N.textBaseline="middle",N.shadowColor=L.color,N.shadowBlur=10,N.fillText(L.name,256,64);const V=new Uv(b),B=new lp({map:V,transparent:!0,opacity:.8}),F=new Dv(B);F.position.set(L.position[0],L.position[1],L.position[2]),F.scale.set(800,200,1),F.userData={isLabel:!0},v.add(F)})}function E(v){const g=new Fn,U=5e4,L=new Float32Array(U*3),b=new Float32Array(U*3);for(let B=0;B<U;B++){L[B*3]=(Math.random()-.5)*4e4,L[B*3+1]=(Math.random()-.5)*4e4,L[B*3+2]=(Math.random()-.5)*4e4;const F=Math.random();F<.7?(b[B*3]=.8+Math.random()*.2,b[B*3+1]=.8+Math.random()*.2,b[B*3+2]=1):F<.9?(b[B*3]=1,b[B*3+1]=1,b[B*3+2]=.6+Math.random()*.4):(b[B*3]=1,b[B*3+1]=.4+Math.random()*.4,b[B*3+2]=.2+Math.random()*.3)}g.setAttribute("position",new hn(L,3)),g.setAttribute("color",new hn(b,3));const N=new zs({size:1,vertexColors:!0,transparent:!0,opacity:.6}),V=new el(g,N);v.add(V)}function w(v){for(let U=0;U<20;U++){const L=new Qn(200+Math.random()*300,16,16),b=[16724838,3368703,6750003,16755251,11154431],N=b[Math.floor(Math.random()*b.length)],V=new tl({color:N,transparent:!0,opacity:.1+Math.random()*.2,side:wi}),B=new sn(L,V),F=Math.random()*Math.PI*2,C=1e3+Math.random()*4e3;B.position.x=Math.cos(F)*C,B.position.y=(Math.random()-.5)*500,B.position.z=Math.sin(F)*C,v.add(B)}}return It.jsxs("div",{className:"relative w-full h-full",children:[It.jsx("div",{ref:i,className:"w-full h-full"}),!m&&It.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80",children:It.jsx("div",{className:"text-white text-lg",children:"Loading Galaxy..."})})]})});function ev(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}function BA(...s){return t=>{let i=!1;const r=s.map(l=>{const c=ev(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():ev(s[l],null)}}}}function IA(...s){return te.useCallback(BA(...s),s)}function FA(s){const t=GA(s),i=te.forwardRef((r,l)=>{const{children:c,...f}=r,h=te.Children.toArray(c),m=h.find(kA);if(m){const p=m.props.children,_=h.map(x=>x===m?te.Children.count(p)>1?te.Children.only(null):te.isValidElement(p)?p.props.children:null:x);return It.jsx(t,{...f,ref:l,children:te.isValidElement(p)?te.cloneElement(p,void 0,_):null})}return It.jsx(t,{...f,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var HA=FA("Slot");function GA(s){const t=te.forwardRef((i,r)=>{const{children:l,...c}=i,f=te.isValidElement(l)?WA(l):void 0,h=IA(f,r);if(te.isValidElement(l)){const m=XA(c,l.props);return l.type!==te.Fragment&&(m.ref=h),te.cloneElement(l,m)}return te.Children.count(l)>1?te.Children.only(null):null});return t.displayName=`${s}.SlotClone`,t}var VA=Symbol("radix.slottable");function kA(s){return te.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===VA}function XA(s,t){const i={...t};for(const r in t){const l=s[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...h)=>{const m=c(...h);return l(...h),m}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function WA(s){var r,l;let t=(r=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?s.ref:(t=(l=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function Xv(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=Xv(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function Wv(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=Xv(s))&&(r&&(r+=" "),r+=t);return r}const nv=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,iv=Wv,qA=(s,t)=>i=>{var r;if((t==null?void 0:t.variants)==null)return iv(s,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,f=Object.keys(l).map(p=>{const _=i==null?void 0:i[p],x=c==null?void 0:c[p];if(_===null)return null;const y=nv(_)||nv(x);return l[p][y]}),h=i&&Object.entries(i).reduce((p,_)=>{let[x,y]=_;return y===void 0||(p[x]=y),p},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,_)=>{let{class:x,className:y,...S}=_;return Object.entries(S).every(E=>{let[w,v]=E;return Array.isArray(v)?v.includes({...c,...h}[w]):{...c,...h}[w]===v})?[...p,x,y]:p},[]);return iv(s,f,m,i==null?void 0:i.class,i==null?void 0:i.className)},gp="-",YA=s=>{const t=ZA(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:f=>{const h=f.split(gp);return h[0]===""&&h.length!==1&&h.shift(),qv(h,t)||jA(f)},getConflictingClassGroupIds:(f,h)=>{const m=i[f]||[];return h&&r[f]?[...m,...r[f]]:m}}},qv=(s,t)=>{var f;if(s.length===0)return t.classGroupId;const i=s[0],r=t.nextPart.get(i),l=r?qv(s.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const c=s.join(gp);return(f=t.validators.find(({validator:h})=>h(c)))==null?void 0:f.classGroupId},av=/^\[(.+)\]$/,jA=s=>{if(av.test(s)){const t=av.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},ZA=s=>{const{theme:t,classGroups:i}=s,r={nextPart:new Map,validators:[]};for(const l in i)qh(i[l],r,l,t);return r},qh=(s,t,i,r)=>{s.forEach(l=>{if(typeof l=="string"){const c=l===""?t:rv(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(KA(l)){qh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,f])=>{qh(f,rv(t,c),i,r)})})},rv=(s,t)=>{let i=s;return t.split(gp).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},KA=s=>s.isThemeGetter,QA=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(c,f)=>{i.set(c,f),t++,t>s&&(t=0,r=i,i=new Map)};return{get(c){let f=i.get(c);if(f!==void 0)return f;if((f=r.get(c))!==void 0)return l(c,f),f},set(c,f){i.has(c)?i.set(c,f):l(c,f)}}},Yh="!",jh=":",JA=jh.length,$A=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const c=[];let f=0,h=0,m=0,p;for(let E=0;E<l.length;E++){let w=l[E];if(f===0&&h===0){if(w===jh){c.push(l.slice(m,E)),m=E+JA;continue}if(w==="/"){p=E;continue}}w==="["?f++:w==="]"?f--:w==="("?h++:w===")"&&h--}const _=c.length===0?l:l.substring(m),x=tw(_),y=x!==_,S=p&&p>m?p-m:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:S}};if(t){const l=t+jh,c=r;r=f=>f.startsWith(l)?c(f.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},tw=s=>s.endsWith(Yh)?s.substring(0,s.length-1):s.startsWith(Yh)?s.substring(1):s,ew=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let c=[];return r.forEach(f=>{f[0]==="["||t[f]?(l.push(...c.sort(),f),c=[]):c.push(f)}),l.push(...c.sort()),l}},nw=s=>({cache:QA(s.cacheSize),parseClassName:$A(s),sortModifiers:ew(s),...YA(s)}),iw=/\s+/,aw=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,f=[],h=s.trim().split(iw);let m="";for(let p=h.length-1;p>=0;p-=1){const _=h[p],{isExternal:x,modifiers:y,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:w}=i(_);if(x){m=_+(m.length>0?" "+m:m);continue}let v=!!w,g=r(v?E.substring(0,w):E);if(!g){if(!v){m=_+(m.length>0?" "+m:m);continue}if(g=r(E),!g){m=_+(m.length>0?" "+m:m);continue}v=!1}const U=c(y).join(":"),L=S?U+Yh:U,b=L+g;if(f.includes(b))continue;f.push(b);const N=l(g,v);for(let V=0;V<N.length;++V){const B=N[V];f.push(L+B)}m=_+(m.length>0?" "+m:m)}return m};function rw(){let s=0,t,i,r="";for(;s<arguments.length;)(t=arguments[s++])&&(i=Yv(t))&&(r&&(r+=" "),r+=i);return r}const Yv=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=Yv(s[r]))&&(i&&(i+=" "),i+=t);return i};function sw(s,...t){let i,r,l,c=f;function f(m){const p=t.reduce((_,x)=>x(_),s());return i=nw(p),r=i.cache.get,l=i.cache.set,c=h,h(m)}function h(m){const p=r(m);if(p)return p;const _=aw(m,i);return l(m,_),_}return function(){return c(rw.apply(null,arguments))}}const vn=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},jv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Zv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ow=/^\d+\/\d+$/,lw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,cw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,uw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,fw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,dw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Us=s=>ow.test(s),Se=s=>!!s&&!Number.isNaN(Number(s)),Xa=s=>!!s&&Number.isInteger(Number(s)),Jd=s=>s.endsWith("%")&&Se(s.slice(0,-1)),ua=s=>lw.test(s),hw=()=>!0,pw=s=>cw.test(s)&&!uw.test(s),Kv=()=>!1,mw=s=>fw.test(s),gw=s=>dw.test(s),_w=s=>!Wt(s)&&!qt(s),vw=s=>Xs(s,$v,Kv),Wt=s=>jv.test(s),Sr=s=>Xs(s,tx,pw),$d=s=>Xs(s,Ew,Se),sv=s=>Xs(s,Qv,Kv),xw=s=>Xs(s,Jv,gw),Yc=s=>Xs(s,ex,mw),qt=s=>Zv.test(s),Ko=s=>Ws(s,tx),yw=s=>Ws(s,bw),ov=s=>Ws(s,Qv),Sw=s=>Ws(s,$v),Mw=s=>Ws(s,Jv),jc=s=>Ws(s,ex,!0),Xs=(s,t,i)=>{const r=jv.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},Ws=(s,t,i=!1)=>{const r=Zv.exec(s);return r?r[1]?t(r[1]):i:!1},Qv=s=>s==="position"||s==="percentage",Jv=s=>s==="image"||s==="url",$v=s=>s==="length"||s==="size"||s==="bg-size",tx=s=>s==="length",Ew=s=>s==="number",bw=s=>s==="family-name",ex=s=>s==="shadow",Tw=()=>{const s=vn("color"),t=vn("font"),i=vn("text"),r=vn("font-weight"),l=vn("tracking"),c=vn("leading"),f=vn("breakpoint"),h=vn("container"),m=vn("spacing"),p=vn("radius"),_=vn("shadow"),x=vn("inset-shadow"),y=vn("text-shadow"),S=vn("drop-shadow"),E=vn("blur"),w=vn("perspective"),v=vn("aspect"),g=vn("ease"),U=vn("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],N=()=>[...b(),qt,Wt],V=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto","contain","none"],F=()=>[qt,Wt,m],C=()=>[Us,"full","auto",...F()],D=()=>[Xa,"none","subgrid",qt,Wt],G=()=>["auto",{span:["full",Xa,qt,Wt]},Xa,qt,Wt],nt=()=>[Xa,"auto",qt,Wt],rt=()=>["auto","min","max","fr",qt,Wt],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ot=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...F()],W=()=>[Us,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],H=()=>[s,qt,Wt],xt=()=>[...b(),ov,sv,{position:[qt,Wt]}],O=()=>["no-repeat",{repeat:["","x","y","space","round"]}],K=()=>["auto","cover","contain",Sw,vw,{size:[qt,Wt]}],at=()=>[Jd,Ko,Sr],ht=()=>["","none","full",p,qt,Wt],Et=()=>["",Se,Ko,Sr],$=()=>["solid","dashed","dotted","double"],dt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],mt=()=>[Se,Jd,ov,sv],_t=()=>["","none",E,qt,Wt],Bt=()=>["none",Se,qt,Wt],Zt=()=>["none",Se,qt,Wt],Ce=()=>[Se,qt,Wt],bt=()=>[Us,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ua],breakpoint:[ua],color:[hw],container:[ua],"drop-shadow":[ua],ease:["in","out","in-out"],font:[_w],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ua],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ua],shadow:[ua],spacing:["px",Se],text:[ua],"text-shadow":[ua],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Us,Wt,qt,v]}],container:["container"],columns:[{columns:[Se,Wt,qt,h]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:N()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[Xa,"auto",qt,Wt]}],basis:[{basis:[Us,"full","auto",h,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Se,Us,"auto","initial","none",Wt]}],grow:[{grow:["",Se,qt,Wt]}],shrink:[{shrink:["",Se,qt,Wt]}],order:[{order:[Xa,"first","last","none",qt,Wt]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:G()}],"col-start":[{"col-start":nt()}],"col-end":[{"col-end":nt()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:G()}],"row-start":[{"row-start":nt()}],"row-end":[{"row-end":nt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":rt()}],"auto-rows":[{"auto-rows":rt()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...ot(),"normal"]}],"justify-self":[{"justify-self":["auto",...ot()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...ot(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ot(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...ot(),"baseline"]}],"place-self":[{"place-self":["auto",...ot()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],w:[{w:[h,"screen",...W()]}],"min-w":[{"min-w":[h,"screen","none",...W()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...W()]}],h:[{h:["screen","lh",...W()]}],"min-h":[{"min-h":["screen","lh","none",...W()]}],"max-h":[{"max-h":["screen","lh",...W()]}],"font-size":[{text:["base",i,Ko,Sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,qt,$d]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Jd,Wt]}],"font-family":[{font:[yw,Wt,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,qt,Wt]}],"line-clamp":[{"line-clamp":[Se,"none",qt,$d]}],leading:[{leading:[c,...F()]}],"list-image":[{"list-image":["none",qt,Wt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qt,Wt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:[Se,"from-font","auto",qt,Sr]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[Se,"auto",qt,Wt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qt,Wt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qt,Wt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:xt()}],"bg-repeat":[{bg:O()}],"bg-size":[{bg:K()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Xa,qt,Wt],radial:["",qt,Wt],conic:[Xa,qt,Wt]},Mw,xw]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:at()}],"gradient-via-pos":[{via:at()}],"gradient-to-pos":[{to:at()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:ht()}],"rounded-s":[{"rounded-s":ht()}],"rounded-e":[{"rounded-e":ht()}],"rounded-t":[{"rounded-t":ht()}],"rounded-r":[{"rounded-r":ht()}],"rounded-b":[{"rounded-b":ht()}],"rounded-l":[{"rounded-l":ht()}],"rounded-ss":[{"rounded-ss":ht()}],"rounded-se":[{"rounded-se":ht()}],"rounded-ee":[{"rounded-ee":ht()}],"rounded-es":[{"rounded-es":ht()}],"rounded-tl":[{"rounded-tl":ht()}],"rounded-tr":[{"rounded-tr":ht()}],"rounded-br":[{"rounded-br":ht()}],"rounded-bl":[{"rounded-bl":ht()}],"border-w":[{border:Et()}],"border-w-x":[{"border-x":Et()}],"border-w-y":[{"border-y":Et()}],"border-w-s":[{"border-s":Et()}],"border-w-e":[{"border-e":Et()}],"border-w-t":[{"border-t":Et()}],"border-w-r":[{"border-r":Et()}],"border-w-b":[{"border-b":Et()}],"border-w-l":[{"border-l":Et()}],"divide-x":[{"divide-x":Et()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Et()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...$(),"hidden","none"]}],"divide-style":[{divide:[...$(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...$(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Se,qt,Wt]}],"outline-w":[{outline:["",Se,Ko,Sr]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",_,jc,Yc]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",x,jc,Yc]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:Et()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[Se,Sr]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":Et()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",y,jc,Yc]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[Se,qt,Wt]}],"mix-blend":[{"mix-blend":[...dt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":dt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Se]}],"mask-image-linear-from-pos":[{"mask-linear-from":mt()}],"mask-image-linear-to-pos":[{"mask-linear-to":mt()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":mt()}],"mask-image-t-to-pos":[{"mask-t-to":mt()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":mt()}],"mask-image-r-to-pos":[{"mask-r-to":mt()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":mt()}],"mask-image-b-to-pos":[{"mask-b-to":mt()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":mt()}],"mask-image-l-to-pos":[{"mask-l-to":mt()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":mt()}],"mask-image-x-to-pos":[{"mask-x-to":mt()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":mt()}],"mask-image-y-to-pos":[{"mask-y-to":mt()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[qt,Wt]}],"mask-image-radial-from-pos":[{"mask-radial-from":mt()}],"mask-image-radial-to-pos":[{"mask-radial-to":mt()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[Se]}],"mask-image-conic-from-pos":[{"mask-conic-from":mt()}],"mask-image-conic-to-pos":[{"mask-conic-to":mt()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:xt()}],"mask-repeat":[{mask:O()}],"mask-size":[{mask:K()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qt,Wt]}],filter:[{filter:["","none",qt,Wt]}],blur:[{blur:_t()}],brightness:[{brightness:[Se,qt,Wt]}],contrast:[{contrast:[Se,qt,Wt]}],"drop-shadow":[{"drop-shadow":["","none",S,jc,Yc]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",Se,qt,Wt]}],"hue-rotate":[{"hue-rotate":[Se,qt,Wt]}],invert:[{invert:["",Se,qt,Wt]}],saturate:[{saturate:[Se,qt,Wt]}],sepia:[{sepia:["",Se,qt,Wt]}],"backdrop-filter":[{"backdrop-filter":["","none",qt,Wt]}],"backdrop-blur":[{"backdrop-blur":_t()}],"backdrop-brightness":[{"backdrop-brightness":[Se,qt,Wt]}],"backdrop-contrast":[{"backdrop-contrast":[Se,qt,Wt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Se,qt,Wt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Se,qt,Wt]}],"backdrop-invert":[{"backdrop-invert":["",Se,qt,Wt]}],"backdrop-opacity":[{"backdrop-opacity":[Se,qt,Wt]}],"backdrop-saturate":[{"backdrop-saturate":[Se,qt,Wt]}],"backdrop-sepia":[{"backdrop-sepia":["",Se,qt,Wt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qt,Wt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Se,"initial",qt,Wt]}],ease:[{ease:["linear","initial",g,qt,Wt]}],delay:[{delay:[Se,qt,Wt]}],animate:[{animate:["none",U,qt,Wt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,qt,Wt]}],"perspective-origin":[{"perspective-origin":N()}],rotate:[{rotate:Bt()}],"rotate-x":[{"rotate-x":Bt()}],"rotate-y":[{"rotate-y":Bt()}],"rotate-z":[{"rotate-z":Bt()}],scale:[{scale:Zt()}],"scale-x":[{"scale-x":Zt()}],"scale-y":[{"scale-y":Zt()}],"scale-z":[{"scale-z":Zt()}],"scale-3d":["scale-3d"],skew:[{skew:Ce()}],"skew-x":[{"skew-x":Ce()}],"skew-y":[{"skew-y":Ce()}],transform:[{transform:[qt,Wt,"","none","gpu","cpu"]}],"transform-origin":[{origin:N()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:bt()}],"translate-x":[{"translate-x":bt()}],"translate-y":[{"translate-y":bt()}],"translate-z":[{"translate-z":bt()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qt,Wt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qt,Wt]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[Se,Ko,Sr,$d]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Aw=sw(Tw);function fl(...s){return Aw(Wv(s))}const ww=qA("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Qo({className:s,variant:t,size:i,asChild:r=!1,...l}){const c=r?HA:"button";return It.jsx(c,{"data-slot":"button",className:fl(ww({variant:t,size:i,className:s})),...l})}function Rw({className:s,...t}){return It.jsx("div",{"data-slot":"card",className:fl("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...t})}function Cw({className:s,...t}){return It.jsx("div",{"data-slot":"card-header",className:fl("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...t})}function Dw({className:s,...t}){return It.jsx("div",{"data-slot":"card-title",className:fl("leading-none font-semibold",s),...t})}function Uw({className:s,...t}){return It.jsx("div",{"data-slot":"card-content",className:fl("px-6",s),...t})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nw=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),lv=s=>{const t=Nw(s);return t.charAt(0).toUpperCase()+t.slice(1)},nx=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),Ow=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=te.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},m)=>te.createElement("svg",{ref:m,...Pw,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:nx("lucide",l),...!c&&!Ow(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,_])=>te.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=(s,t)=>{const i=te.forwardRef(({className:r,...l},c)=>te.createElement(zw,{ref:c,iconNode:t,className:nx(`lucide-${Lw(lv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=lv(s),i};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Iw=li("arrow-left",Bw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hw=li("chevron-down",Fw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Vw=li("circle",Gw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],th=li("compass",kw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ww=li("earth",Xw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Yw=li("globe",qw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Zw=li("house",jw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Qw=li("info",Kw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],$w=li("rocket",Jw);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],eR=li("sparkles",tR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],iR=li("star",nR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],rR=li("target",aR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Wa=li("zap",sR),oR=({onNavigateTo:s,currentLocation:t,viewMode:i,onBackToUniverse:r})=>{const l=[{name:"Earth",icon:Yw,color:"text-blue-500"},{name:"Moon",icon:Wa,color:"text-gray-400"},{name:"Mars",icon:$w,color:"text-red-500"},{name:"Venus",icon:Wa,color:"text-yellow-500"},{name:"Mercury",icon:Wa,color:"text-orange-500"},{name:"Jupiter",icon:Wa,color:"text-orange-300"},{name:"Saturn",icon:Wa,color:"text-yellow-300"},{name:"Uranus",icon:Wa,color:"text-cyan-400"},{name:"Neptune",icon:Wa,color:"text-blue-600"},{name:"Sun",icon:Wa,color:"text-yellow-400"}],c=[{name:"Galactic Center",icon:rR,color:"text-yellow-500"},{name:"Perseus Arm",icon:th,color:"text-blue-400"},{name:"Sagittarius Arm",icon:th,color:"text-purple-400"},{name:"Orion Arm",icon:th,color:"text-green-400"},{name:"Outer Rim",icon:Vw,color:"text-cyan-400"},{name:"Galactic Halo",icon:eR,color:"text-pink-400"}];return It.jsxs(Rw,{className:"absolute top-4 right-4 w-64 bg-black/80 text-white border-gray-600",children:[It.jsx(Cw,{className:"pb-2",children:It.jsxs(Dw,{className:"text-lg flex items-center gap-2",children:[It.jsx(Zw,{className:"w-5 h-5"}),"Navigation"]})}),It.jsxs(Uw,{className:"space-y-2",children:[It.jsxs("div",{className:"text-sm text-gray-300 mb-3",children:["Current: ",It.jsx("span",{className:"text-white font-semibold",children:t})]}),i==="earth"||i==="galaxy"?It.jsxs("div",{className:"space-y-2",children:[It.jsxs(Qo,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:r,children:[It.jsx(Iw,{className:"w-4 h-4"}),"Back to Universe"]}),i==="galaxy"&&It.jsxs("div",{className:"space-y-2",children:[It.jsx("div",{className:"text-xs text-gray-300 font-semibold",children:"Galaxy Regions:"}),It.jsx("div",{className:"grid grid-cols-2 gap-2",children:c.map(f=>{const h=f.icon;return It.jsxs(Qo,{variant:"outline",size:"sm",className:"justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(f.name),children:[It.jsx(h,{className:`w-4 h-4 ${f.color}`}),It.jsx("span",{className:"text-xs",children:f.name})]},f.name)})})]}),It.jsxs("div",{className:"text-xs text-gray-400 p-2 bg-gray-800/30 rounded",children:[It.jsx("p",{children:It.jsxs("strong",{children:[i==="earth"?"Earth View":"Galaxy View"," Controls:"]})}),It.jsx("p",{children:"• Mouse: Rotate view"}),It.jsx("p",{children:"• Scroll: Zoom in/out"}),i==="earth"&&It.jsx("p",{children:"• Zoom from space to surface"}),i==="galaxy"&&It.jsx("p",{children:"• Explore galactic structures"}),i==="galaxy"&&It.jsx("p",{children:"• Buttons: Navigate to regions"})]})]}):It.jsxs("div",{className:"space-y-2",children:[It.jsxs(Qo,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-blue-800/50 border-blue-600 hover:bg-blue-700/50 text-white",onClick:()=>s("Earth View"),children:[It.jsx(Ww,{className:"w-4 h-4 text-blue-400"}),"Immersive Earth View"]}),It.jsxs(Qo,{variant:"outline",size:"sm",className:"w-full justify-start gap-2 bg-purple-800/50 border-purple-600 hover:bg-purple-700/50 text-white",onClick:()=>s("Galaxy View"),children:[It.jsx(iR,{className:"w-4 h-4 text-purple-400"}),"Enhanced Galaxy View"]}),It.jsx("div",{className:"grid grid-cols-2 gap-2",children:l.map(f=>{const h=f.icon;return It.jsxs(Qo,{variant:"outline",size:"sm",className:"justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(f.name),children:[It.jsx(h,{className:`w-4 h-4 ${f.color}`}),f.name]},f.name)})}),It.jsxs("div",{className:"text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded",children:[It.jsx("p",{children:It.jsx("strong",{children:"Controls:"})}),It.jsx("p",{children:"• Mouse: Rotate view"}),It.jsx("p",{children:"• Scroll: Zoom in/out"}),It.jsx("p",{children:"• Buttons: Quick travel"})]})]})]})]})},lR=({viewMode:s,currentLocation:t})=>{const[i,r]=te.useState(!1),c=(()=>{switch(s){case"universe":return{title:"Solar System",data:{"Current Focus":t,Scale:"~40 AU diameter",Objects:"8 planets + moons",Simulation:"Real-time orbital mechanics",Textures:"NASA-based imagery"}};case"earth":return{title:"Earth View",data:{"Current Altitude":t,Radius:"6,371 km","Surface Area":"510.1 million km²",Atmosphere:"Realistic lighting","Zoom Range":"Space to surface"}};case"galaxy":return{title:"Milky Way Galaxy",data:{"Current View":t,Diameter:"~100,000 light-years",Stars:"100,000+ simulated",Structure:"4-armed spiral","Core Type":"Supermassive black hole"}};default:return{title:"Unknown",data:{}}}})();return It.jsx("div",{className:"absolute bottom-4 left-4 z-50",children:i?It.jsxs("div",{className:"bg-black/80 text-white p-3 rounded-lg border border-gray-600 min-w-64 max-w-80",children:[It.jsxs("div",{className:"flex items-center justify-between mb-2",children:[It.jsx("h3",{className:"text-sm font-semibold text-yellow-400",children:c.title}),It.jsx("button",{onClick:()=>r(!1),className:"text-gray-400 hover:text-white transition-colors",title:"Collapse",children:It.jsx(Hw,{className:"w-4 h-4"})})]}),It.jsx("div",{className:"space-y-1",children:Object.entries(c.data).map(([f,h])=>It.jsxs("div",{className:"flex justify-between text-xs",children:[It.jsxs("span",{className:"text-gray-300 font-medium",children:[f,":"]}),It.jsx("span",{className:"text-white ml-2 text-right",children:h})]},f))})]}):It.jsx("button",{onClick:()=>r(!0),className:"w-8 h-8 bg-black/80 hover:bg-black/90 text-white rounded-full border border-gray-600 flex items-center justify-center transition-all duration-200 hover:scale-110",title:"Show view information",children:It.jsx(Qw,{className:"w-4 h-4"})})})};function cR(){const[s,t]=te.useState("Solar System"),[i,r]=te.useState("universe"),l=te.useRef(null),c=te.useRef(null),f=p=>{p==="Earth View"?(r("earth"),t("Space View")):p==="Galaxy View"?(r("galaxy"),t("Galaxy Overview")):i==="galaxy"?(t(p),c.current&&c.current.navigateToGalaxyRegion(p)):(r("universe"),t(p),l.current&&l.current.focusOnPlanet(p))},h=p=>{t(p)},m=()=>{r("universe"),t("Solar System")};return It.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[i==="universe"?It.jsx(kv,{ref:l,onLocationChange:h}):i==="earth"?It.jsx(PA,{onLocationChange:h}):It.jsx(zA,{ref:c,onLocationChange:h}),It.jsx(oR,{onNavigateTo:f,currentLocation:s,viewMode:i,onBackToUniverse:m}),It.jsx(lR,{viewMode:i,currentLocation:s})]})}mS.createRoot(document.getElementById("root")).render(It.jsx(te.StrictMode,{children:It.jsx(cR,{})}));
