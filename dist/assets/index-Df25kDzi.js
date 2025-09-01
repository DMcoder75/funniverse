(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var sd={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function jy(){if(U_)return Io;U_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var L_;function Zy(){return L_||(L_=1,sd.exports=jy()),sd.exports}var ce=Zy(),od={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Ky(){if(N_)return de;N_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function M(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function z(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||y}var O=z.prototype=new _;O.constructor=z,E(O,M.prototype),O.isPureReactComponent=!0;var w=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function k(U,$,vt,gt,Et,et){return vt=et.ref,{$$typeof:s,type:U,key:$,ref:vt!==void 0?vt:null,props:et}}function G(U,$){return k(U.type,$,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function D(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var H=/\/+/g;function lt(U,$){return typeof U=="object"&&U!==null&&U.key!=null?D(""+U.key):$.toString(36)}function ot(){}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ot,ot):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ct(U,$,vt,gt,Et){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(et){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case s:case t:dt=!0;break;case g:return dt=U._init,ct(dt(U._payload),$,vt,gt,Et)}}if(dt)return Et=Et(U),dt=gt===""?"."+lt(U,0):gt,w(Et)?(vt="",dt!=null&&(vt=dt.replace(H,"$&/")+"/"),ct(Et,$,vt,"",function(Ht){return Ht})):Et!=null&&(C(Et)&&(Et=G(Et,vt+(Et.key==null||U&&U.key===Et.key?"":(""+Et.key).replace(H,"$&/")+"/")+dt)),$.push(Et)),1;dt=0;var pt=gt===""?".":gt+":";if(w(U))for(var Dt=0;Dt<U.length;Dt++)gt=U[Dt],et=pt+lt(gt,Dt),dt+=ct(gt,$,vt,et,Et);else if(Dt=x(U),typeof Dt=="function")for(U=Dt.call(U),Dt=0;!(gt=U.next()).done;)gt=gt.value,et=pt+lt(gt,Dt++),dt+=ct(gt,$,vt,et,Et);else if(et==="object"){if(typeof U.then=="function")return ct(ut(U),$,vt,gt,Et);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function P(U,$,vt){if(U==null)return U;var gt=[],Et=0;return ct(U,gt,"","",function(et){return $.call(vt,et,Et++)}),gt}function q(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var F=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return de.Children={map:P,forEach:function(U,$,vt){P(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},de.Component=M,de.Fragment=i,de.Profiler=l,de.PureComponent=z,de.StrictMode=r,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,de.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},de.cache=function(U){return function(){return U.apply(null,arguments)}},de.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var gt=E({},U.props),Et=U.key,et=void 0;if($!=null)for(dt in $.ref!==void 0&&(et=void 0),$.key!==void 0&&(Et=""+$.key),$)!V.call($,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&$.ref===void 0||(gt[dt]=$[dt]);var dt=arguments.length-2;if(dt===1)gt.children=vt;else if(1<dt){for(var pt=Array(dt),Dt=0;Dt<dt;Dt++)pt[Dt]=arguments[Dt+2];gt.children=pt}return k(U.type,Et,void 0,void 0,et,gt)},de.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},de.createElement=function(U,$,vt){var gt,Et={},et=null;if($!=null)for(gt in $.key!==void 0&&(et=""+$.key),$)V.call($,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(Et[gt]=$[gt]);var dt=arguments.length-2;if(dt===1)Et.children=vt;else if(1<dt){for(var pt=Array(dt),Dt=0;Dt<dt;Dt++)pt[Dt]=arguments[Dt+2];Et.children=pt}if(U&&U.defaultProps)for(gt in dt=U.defaultProps,dt)Et[gt]===void 0&&(Et[gt]=dt[gt]);return k(U,et,void 0,void 0,null,Et)},de.createRef=function(){return{current:null}},de.forwardRef=function(U){return{$$typeof:h,render:U}},de.isValidElement=C,de.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:q}},de.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},de.startTransition=function(U){var $=B.T,vt={};B.T=vt;try{var gt=U(),Et=B.S;Et!==null&&Et(vt,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(St,F)}catch(et){F(et)}finally{B.T=$}},de.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},de.use=function(U){return B.H.use(U)},de.useActionState=function(U,$,vt){return B.H.useActionState(U,$,vt)},de.useCallback=function(U,$){return B.H.useCallback(U,$)},de.useContext=function(U){return B.H.useContext(U)},de.useDebugValue=function(){},de.useDeferredValue=function(U,$){return B.H.useDeferredValue(U,$)},de.useEffect=function(U,$,vt){var gt=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(U,$)},de.useId=function(){return B.H.useId()},de.useImperativeHandle=function(U,$,vt){return B.H.useImperativeHandle(U,$,vt)},de.useInsertionEffect=function(U,$){return B.H.useInsertionEffect(U,$)},de.useLayoutEffect=function(U,$){return B.H.useLayoutEffect(U,$)},de.useMemo=function(U,$){return B.H.useMemo(U,$)},de.useOptimistic=function(U,$){return B.H.useOptimistic(U,$)},de.useReducer=function(U,$,vt){return B.H.useReducer(U,$,vt)},de.useRef=function(U){return B.H.useRef(U)},de.useState=function(U){return B.H.useState(U)},de.useSyncExternalStore=function(U,$,vt){return B.H.useSyncExternalStore(U,$,vt)},de.useTransition=function(){return B.H.useTransition()},de.version="19.1.0",de}var O_;function Vh(){return O_||(O_=1,od.exports=Ky()),od.exports}var Ue=Vh(),ld={exports:{}},Fo={},cd={exports:{}},ud={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function Qy(){return P_||(P_=1,function(s){function t(P,q){var F=P.length;P.push(q);t:for(;0<F;){var St=F-1>>>1,U=P[St];if(0<l(U,q))P[St]=q,P[F]=U,F=St;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var q=P[0],F=P.pop();if(F!==q){P[0]=F;t:for(var St=0,U=P.length,$=U>>>1;St<$;){var vt=2*(St+1)-1,gt=P[vt],Et=vt+1,et=P[Et];if(0>l(gt,F))Et<U&&0>l(et,gt)?(P[St]=et,P[Et]=F,St=Et):(P[St]=gt,P[vt]=F,St=vt);else if(Et<U&&0>l(et,F))P[St]=et,P[Et]=F,St=Et;else break t}}return q}function l(P,q){var F=P.sortIndex-q.sortIndex;return F!==0?F:P.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,x=3,y=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=P)r(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function B(P){if(R=!1,w(P),!E)if(i(m)!==null)E=!0,V||(V=!0,lt());else{var q=i(p);q!==null&&ct(B,q.startTime-P)}}var V=!1,k=-1,G=5,C=-1;function D(){return M?!0:!(s.unstable_now()-C<G)}function H(){if(M=!1,V){var P=s.unstable_now();C=P;var q=!0;try{t:{E=!1,R&&(R=!1,z(k),k=-1),y=!0;var F=x;try{e:{for(w(P),v=i(m);v!==null&&!(v.expirationTime>P&&D());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var U=St(v.expirationTime<=P);if(P=s.unstable_now(),typeof U=="function"){v.callback=U,w(P),q=!0;break e}v===i(m)&&r(m),w(P)}else r(m);v=i(m)}if(v!==null)q=!0;else{var $=i(p);$!==null&&ct(B,$.startTime-P),q=!1}}break t}finally{v=null,x=F,y=!1}q=void 0}}finally{q?lt():V=!1}}}var lt;if(typeof O=="function")lt=function(){O(H)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ut=ot.port2;ot.port1.onmessage=H,lt=function(){ut.postMessage(null)}}else lt=function(){_(H,0)};function ct(P,q){k=_(function(){P(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var F=x;x=q;try{return P()}finally{x=F}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=x;x=P;try{return q()}finally{x=F}},s.unstable_scheduleCallback=function(P,q,F){var St=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?St+F:St):F=St,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=F+U,P={id:g++,callback:q,priorityLevel:P,startTime:F,expirationTime:U,sortIndex:-1},F>St?(P.sortIndex=F,t(p,P),i(m)===null&&P===i(p)&&(R?(z(k),k=-1):R=!0,ct(B,F-St))):(P.sortIndex=U,t(m,P),E||y||(E=!0,V||(V=!0,lt()))),P},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(P){var q=x;return function(){var F=x;x=q;try{return P.apply(this,arguments)}finally{x=F}}}}(ud)),ud}var z_;function Jy(){return z_||(z_=1,cd.exports=Qy()),cd.exports}var fd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function $y(){if(B_)return Ln;B_=1;var s=Vh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var I_;function tS(){if(I_)return fd.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),fd.exports=$y(),fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function eS(){if(F_)return Fo;F_=1;var s=Jy(),t=Vh(),i=tS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),e;if(f===o)return h(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,o=f;break}if(T===o){S=!0,o=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=u;break}if(T===o){S=!0,o=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case V:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case O:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case G:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var ct=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},St=[],U=-1;function $(e){return{current:e}}function vt(e){0>U||(e.current=St[U],St[U]=null,U--)}function gt(e,n){U++,St[U]=e.current,e.current=n}var Et=$(null),et=$(null),dt=$(null),pt=$(null);function Dt(e,n){switch(gt(dt,n),gt(et,e),gt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=r_(n),e=s_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Et),gt(Et,e)}function Ht(){vt(Et),vt(et),vt(dt)}function $t(e){e.memoizedState!==null&&gt(pt,e);var n=Et.current,a=s_(n,e.type);n!==a&&(gt(et,e),gt(Et,a))}function Ce(e){et.current===e&&(vt(Et),vt(et)),pt.current===e&&(vt(pt),No._currentValue=F)}var Mt=Object.prototype.hasOwnProperty,N=s.unstable_scheduleCallback,ae=s.unstable_cancelCallback,Wt=s.unstable_shouldYield,te=s.unstable_requestPaint,Nt=s.unstable_now,Te=s.unstable_getCurrentPriorityLevel,Bt=s.unstable_ImmediatePriority,ee=s.unstable_UserBlockingPriority,Pe=s.unstable_NormalPriority,be=s.unstable_LowPriority,L=s.unstable_IdlePriority,b=s.log,Q=s.unstable_setDisableYieldValue,ft=null,_t=null;function st(e){if(typeof b=="function"&&Q(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ft,e)}catch{}}var It=Math.clz32?Math.clz32:Kt,wt=Math.log,jt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(wt(e)/jt|0)|0}var bt=256,Ot=4194304;function Jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Jt(o):(S&=T,S!==0?u=Jt(S):a||(a=T&~e,a!==0&&(u=Jt(a))))):(T=o&~f,T!==0?u=Jt(T):S!==0?u=Jt(S):a||(a=o&~e,a!==0&&(u=Jt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ut(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),e}function Rt(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ft(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var ht=31-It(a),xt=1<<ht;T[ht]=0,I[ht]=-1;var nt=tt[ht];if(nt!==null)for(tt[ht]=null,ht=0;ht<nt.length;ht++){var it=nt[ht];it!==null&&(it.lane&=-536870913)}a&=~xt}o!==0&&yt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function yt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function qt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ue(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Be(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function De(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:T_(e.type))}function _i(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var dn=Math.random().toString(36).slice(2),hn="__reactFiber$"+dn,en="__reactProps$"+dn,Ri="__reactContainer$"+dn,Dr="__reactEvents$"+dn,sl="__reactListeners$"+dn,Ur="__reactHandles$"+dn,Xs="__reactResources$"+dn,wi="__reactMarker$"+dn;function Lr(e){delete e[hn],delete e[en],delete e[Dr],delete e[sl],delete e[Ur]}function Gi(e){var n=e[hn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[hn])return a;e=u_(e)}return n}e=a,a=e.parentNode}return null}function da(e){if(e=e[hn]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ha(e){var n=e[Xs];return n||(n=e[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(e){e[wi]=!0}var ol=new Set,ll={};function A(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(ll[e]=n,e=0;e<n.length;e++)ol.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Z={};function At(e){return Mt.call(Z,e)?!0:Mt.call(rt,e)?!1:at.test(e)?Z[e]=!0:(rt[e]=!0,!1)}function Lt(e,n,a){if(At(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var ie,se;function Zt(e){if(ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||"",se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+se}var me=!1;function Le(e,n){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(it){var nt=it}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(it){nt=it}e.call(xt.prototype)}}else{try{throw Error()}catch(it){nt=it}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var I=S.split(`
`),tt=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===tt.length)for(o=I.length-1,u=tt.length-1;1<=o&&0<=u&&I[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==tt[u]){var ht=`
`+I[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function Je(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return Zt("Activity");default:return""}}function He(e){try{var n="";do n+=Je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=ne(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=Ke(e))}function Cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function xn(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(e,n,a,o,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ge(n)):e.value!==""+ge(n)&&(e.value=""+ge(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Dn(e,S,ge(n)):a!=null?Dn(e,S,ge(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ge(T):e.removeAttribute("name")}function In(e,n,a,o,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Dn(e,n,a){n==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+ge(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ge(a):""}function Nr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ge(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Wv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Wv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function sp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rp(e,f,n[f])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return Yv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ru=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Pr=null;function op(e){var n=da(e);if(n&&(e=n.stateNode)){var a=e[en]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ye(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[en]||null;if(!u)throw Error(r(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Cn(o)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var ou=!1;function lp(e,n,a){if(ou)return e(n,a);ou=!0;try{var o=e(n);return o}finally{if(ou=!1,(Or!==null||Pr!==null)&&(jl(),Or&&(n=Or,e=Pr,Pr=Or=null,op(n),e)))for(n=0;n<e.length;n++)op(e[n])}}function Ws(e,n){var a=e.stateNode;if(a===null)return null;var o=a[en]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Vi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){lu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{lu=!1}var pa=null,cu=null,ul=null;function cp(){if(ul)return ul;var e,n=cu,a=n.length,o,u="value"in pa?pa.value:pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return ul=u.slice(e,1<o?1-o:void 0)}function fl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function up(){return!1}function kn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:up,this.isPropagationStopped=up,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=kn(Ja),Ys=g({},Ja,{view:0,detail:0}),jv=kn(Ys),uu,fu,js,pl=g({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(uu=e.screenX-js.screenX,fu=e.screenY-js.screenY):fu=uu=0,js=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),fp=kn(pl),Zv=g({},pl,{dataTransfer:0}),Kv=kn(Zv),Qv=g({},Ys,{relatedTarget:0}),du=kn(Qv),Jv=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=kn(Jv),tx=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ex=kn(tx),nx=g({},Ja,{data:0}),dp=kn(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rx[e])?!!n[e]:!1}function hu(){return sx}var ox=g({},Ys,{key:function(e){if(e.key){var n=ix[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lx=kn(ox),cx=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=kn(cx),ux=g({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),fx=kn(ux),dx=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=kn(dx),px=g({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=kn(px),gx=g({},Ja,{newState:0,oldState:0}),_x=kn(gx),vx=[9,13,27,32],pu=Vi&&"CompositionEvent"in window,Zs=null;Vi&&"documentMode"in document&&(Zs=document.documentMode);var xx=Vi&&"TextEvent"in window&&!Zs,pp=Vi&&(!pu||Zs&&8<Zs&&11>=Zs),mp=" ",gp=!1;function _p(e,n){switch(e){case"keyup":return vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function yx(e,n){switch(e){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(gp=!0,mp);case"textInput":return e=n.data,e===mp&&gp?null:e;default:return null}}function Sx(e,n){if(zr)return e==="compositionend"||!pu&&_p(e,n)?(e=cp(),ul=cu=pa=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pp&&n.locale!=="ko"?null:n.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mx[e.type]:n==="textarea"}function yp(e,n,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=tc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ks=null,Qs=null;function Ex(e){t_(e,0)}function ml(e){var n=Qa(e);if(Cn(n))return e}function Sp(e,n){if(e==="change")return n}var Mp=!1;if(Vi){var mu;if(Vi){var gu="oninput"in document;if(!gu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),gu=typeof Ep.oninput=="function"}mu=gu}else mu=!1;Mp=mu&&(!document.documentMode||9<document.documentMode)}function bp(){Ks&&(Ks.detachEvent("onpropertychange",Tp),Qs=Ks=null)}function Tp(e){if(e.propertyName==="value"&&ml(Qs)){var n=[];yp(n,Qs,e,su(e)),lp(Ex,n)}}function bx(e,n,a){e==="focusin"?(bp(),Ks=n,Qs=a,Ks.attachEvent("onpropertychange",Tp)):e==="focusout"&&bp()}function Tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Qs)}function Ax(e,n){if(e==="click")return ml(n)}function Rx(e,n){if(e==="input"||e==="change")return ml(n)}function wx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:wx;function Js(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Mt.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function Ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rp(e,n){var a=Ap(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ap(a)}}function wp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vi(e.document)}return n}function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cx=Vi&&"documentMode"in document&&11>=document.documentMode,Br=null,vu=null,$s=null,xu=!1;function Dp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Br==null||Br!==vi(o)||(o=Br,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$s&&Js($s,o)||($s=o,o=tc(vu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Br)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},yu={},Up={};Vi&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function tr(e){if(yu[e])return yu[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Up)return yu[e]=n[a];return e}var Lp=tr("animationend"),Np=tr("animationiteration"),Op=tr("animationstart"),Dx=tr("transitionrun"),Ux=tr("transitionstart"),Lx=tr("transitioncancel"),Pp=tr("transitionend"),zp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function xi(e,n){zp.set(e,n),A(n,[e])}var Bp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Bp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:He(n)},Bp.set(e,n),n)}return{value:e,source:n,stack:He(n)}}var oi=[],Fr=0,Mu=0;function gl(){for(var e=Fr,n=Mu=Fr=0;n<e;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Ip(a,u,f)}}function _l(e,n,a,o){oi[Fr++]=e,oi[Fr++]=n,oi[Fr++]=a,oi[Fr++]=o,Mu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Eu(e,n,a,o){return _l(e,n,a,o),vl(e)}function Hr(e,n){return _l(e,null,null,n),vl(e)}function Ip(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<To)throw To=0,Df=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={};function Nx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,o){return new Nx(e,n,a,o)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")bu(e)&&(S=1);else if(typeof e=="string")S=Py(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Zn(31,a,n,u),e.elementType=C,e.lanes=f,e;case E:return er(a.children,u,f,n);case R:S=8,u|=24;break;case M:return e=Zn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case B:return e=Zn(13,a,n,u),e.elementType=B,e.lanes=f,e;case V:return e=Zn(19,a,n,u),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:S=10;break t;case z:S=9;break t;case w:S=11;break t;case k:S=14;break t;case G:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Zn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function er(e,n,a,o){return e=Zn(7,e,o,n),e.lanes=a,e}function Tu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Au(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vr=[],kr=0,yl=null,Sl=0,li=[],ci=0,nr=null,Xi=1,Wi="";function ir(e,n){Vr[kr++]=Sl,Vr[kr++]=yl,yl=e,Sl=n}function Hp(e,n,a){li[ci++]=Xi,li[ci++]=Wi,li[ci++]=nr,nr=e;var o=Xi;e=Wi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Xi=1<<32-It(n)+u|a<<u|o,Wi=f+e}else Xi=1<<f|a<<u|o,Wi=e}function Ru(e){e.return!==null&&(ir(e,1),Hp(e,1,0))}function wu(e){for(;e===yl;)yl=Vr[--kr],Vr[kr]=null,Sl=Vr[--kr],Vr[kr]=null;for(;e===nr;)nr=li[--ci],li[ci]=null,Wi=li[--ci],li[ci]=null,Xi=li[--ci],li[ci]=null}var Fn=null,an=null,ze=!1,ar=null,Ci=!1,Cu=Error(r(519));function rr(e){var n=Error(r(418,""));throw no(si(n,e)),Cu}function Gp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[hn]=e,n[en]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)Ee(Ro[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Se(n);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Nr(n,o.value,o.defaultValue,o.children),Se(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||a_(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=ec),n=!0):n=!1,n||rr(e)}function Vp(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Fn=Fn.return}}function to(e){if(e!==Fn)return!1;if(!ze)return Vp(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||qf(e.type,e.memoizedProps)),a=!a),a&&an&&rr(e),Vp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){an=Si(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}an=null}}else n===27?(n=an,Da(e.type)?(e=Kf,Kf=null,an=e):an=n):an=Fn?Si(e.stateNode.nextSibling):null;return!0}function eo(){an=Fn=null,ze=!1}function kp(){var e=ar;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),ar=null),e}function no(e){ar===null?ar=[e]:ar.push(e)}var Du=$(null),sr=null,qi=null;function ma(e,n,a){gt(Du,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=Du.current,vt(Du)}function Uu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Lu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Uu(f.return,a,e),o||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Uu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function io(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;jn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===pt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}u=u.return}e!==null&&Lu(n,e,a,o),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){sr=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Xp(sr,e)}function El(e,n){return sr===null&&or(e),Xp(e,n)}function Xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(r(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var Ox=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Px=s.unstable_scheduleCallback,zx=s.unstable_NormalPriority,pn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Ox,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&Px(zx,function(){e.controller.abort()})}var ro=null,Ou=0,Xr=0,Wr=null;function Bx(e,n){if(ro===null){var a=ro=[];Ou=0,Xr=Bf(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ou++,n.then(Wp,Wp),n}function Wp(){if(--Ou===0&&ro!==null){Wr!==null&&(Wr.status="fulfilled");var e=ro;ro=null,Xr=0,Wr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ix(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bx(e,n),qp!==null&&qp(e,n)};var lr=$(null);function Pu(){var e=lr.current;return e!==null?e:Ze.pooledCache}function bl(e,n){n===null?gt(lr,lr.current):gt(lr,n.pool)}function Yp(){var e=Pu();return e===null?null:{parent:pn._currentValue,pool:e}}var so=Error(r(460)),jp=Error(r(474)),Tl=Error(r(542)),zu={then:function(){}};function Zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Al(){}function Kp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Al,Al),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Jp(e),e;default:if(typeof n.status=="string")n.then(Al,Al);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Jp(e),e}throw oo=n,so}}var oo=null;function Qp(){if(oo===null)throw Error(r(459));var e=oo;return oo=null,e}function Jp(e){if(e===so||e===Tl)throw Error(r(483))}var ga=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Ip(e,null,a),n}return _l(e,o,n,a),vl(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,qt(e,a)}}function Fu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Hu=!1;function co(){if(Hu){var e=Wr;if(e!==null)throw e}}function uo(e,n,a,o){Hu=!1;var u=e.updateQueue;ga=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,tt=I.next;I.next=null,S===null?f=tt:S.next=tt,S=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==S&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=I))}if(f!==null){var xt=u.baseState;S=0,ht=tt=I=null,T=f;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(Re&nt)===nt:(o&nt)===nt){nt!==0&&nt===Xr&&(Hu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var le=e,re=T;nt=n;var ke=a;switch(re.tag){case 1:if(le=re.payload,typeof le=="function"){xt=le.call(ke,xt,nt);break t}xt=le;break t;case 3:le.flags=le.flags&-65537|128;case 0:if(le=re.payload,nt=typeof le=="function"?le.call(ke,xt,nt):le,nt==null)break t;xt=g({},xt,nt);break t;case 2:ga=!0}}nt=T.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=it,I=xt):ht=ht.next=it,S|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ht===null&&(I=xt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Aa|=S,e.lanes=S,e.memoizedState=xt}}function $p(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function tm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$p(a[e],n)}var qr=$(null),Rl=$(0);function em(e,n){e=ta,gt(Rl,e),gt(qr,n),ta=e|n.baseLanes}function Gu(){gt(Rl,ta),gt(qr,qr.current)}function Vu(){ta=Rl.current,vt(qr),vt(Rl)}var xa=0,ve=null,Ge=null,cn=null,wl=!1,Yr=!1,cr=!1,Cl=0,fo=0,jr=null,Fx=0;function sn(){throw Error(r(321))}function ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Xu(e,n,a,o,u,f){return xa=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Im:Fm,cr=!1,f=a(o,u),cr=!1,Yr&&(f=im(n,a,o,u)),nm(e),f}function nm(e){P.H=Pl;var n=Ge!==null&&Ge.next!==null;if(xa=0,cn=Ge=ve=null,wl=!1,fo=0,jr=null,n)throw Error(r(300));e===null||yn||(e=e.dependencies,e!==null&&Ml(e)&&(yn=!0))}function im(e,n,a,o){ve=e;var u=0;do{if(Yr&&(jr=null),fo=0,Yr=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=qx,f=n(a,o)}while(Yr);return f}function Hx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ve.flags|=1024),n}function Wu(){var e=Cl!==0;return Cl=0,e}function qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yu(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}xa=0,cn=Ge=ve=null,Yr=!1,fo=Cl=0,jr=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ve.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Ge===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=cn===null?ve.memoizedState:cn.next;if(n!==null)cn=n,Ge=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?ve.memoizedState=cn=e:cn=cn.next=e}return cn}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,jr===null&&(jr=[]),e=Kp(jr,e,n),n=ve,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Im:Fm),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===O)return Un(e)}throw Error(r(438,String(e)))}function Zu(e){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ju(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=un();return Ku(n,Ge,e)}function Ku(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,I=null,tt=n,ht=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Re&xt)===xt:(xa&xt)===xt){var nt=tt.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Xr&&(ht=!0);else if((xa&nt)===nt){tt=tt.next,nt===Xr&&(ht=!0);continue}else xt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=xt,S=f):I=I.next=xt,ve.lanes|=nt,Aa|=nt;xt=tt.action,cr&&a(f,xt),f=tt.hasEagerState?tt.eagerState:a(f,xt)}else nt={lane:xt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=nt,S=f):I=I.next=nt,ve.lanes|=xt,Aa|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?S=f:I.next=T,!jn(f,e.memoizedState)&&(yn=!0,ht&&(a=Wr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Qu(e){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);jn(f,n.memoizedState)||(yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function am(e,n,a){var o=ve,u=un(),f=ze;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!jn((Ge||u).memoizedState,a);S&&(u.memoizedState=a,yn=!0),u=u.queue;var T=om.bind(null,o,u,e);if(po(2048,8,T,[e]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Zr(9,Ll(),sm.bind(null,o,u,a,n),null),Ze===null)throw Error(r(349));f||(xa&124)!==0||rm(o,n,a)}return a}function rm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=ju(),ve.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sm(e,n,a,o){n.value=a,n.getSnapshot=o,lm(n)&&cm(e)}function om(e,n,a){return a(function(){lm(n)&&cm(e)})}function lm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function cm(e){var n=Hr(e,2);n!==null&&ti(n,e,2)}function Ju(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),cr){st(!0);try{a()}finally{st(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function um(e,n,a,o){return e.baseState=a,Ku(e,Ge,typeof o=="function"?o:ji)}function Gx(e,n,a,o,u){if(Ol(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var T=a(u,o),I=P.S;I!==null&&I(S,T),dm(e,n,T)}catch(tt){$u(e,n,tt)}finally{P.T=f}}else try{f=a(u,o),dm(e,n,f)}catch(tt){$u(e,n,tt)}}function dm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){hm(e,n,o)},function(o){return $u(e,n,o)}):hm(e,n,a)}function hm(e,n,a){n.status="fulfilled",n.value=a,pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fm(e,a)))}function $u(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,pm(n),n=n.next;while(n!==o)}e.action=null}function pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mm(e,n){return n}function gm(e,n){if(ze){var a=Ze.formState;if(a!==null){t:{var o=ve;if(ze){if(an){e:{for(var u=an,f=Ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){an=Si(u.nextSibling),o=u.data==="F!";break t}}rr(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mm,lastRenderedState:n},a.queue=o,a=Pm.bind(null,ve,o),o.dispatch=a,o=Ju(!1),f=rf.bind(null,ve,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Gx.bind(null,ve,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function _m(e){var n=un();return vm(n,Ge,e)}function vm(e,n,a){if(n=Ku(e,n,mm)[0],e=Ul(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(S){throw S===so?Tl:S}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Zr(9,Ll(),Vx.bind(null,u,a),null)),[o,f,e]}function Vx(e,n){e.action=n}function xm(e){var n=un(),a=Ge;if(a!==null)return vm(n,a,e);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Zr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ve.updateQueue,n===null&&(n=ju(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ll(){return{destroy:void 0,resource:void 0}}function ym(){return un().memoizedState}function Nl(e,n,a,o){var u=Xn();o=o===void 0?null:o,ve.flags|=e,u.memoizedState=Zr(1|n,Ll(),a,o)}function po(e,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&ku(o,Ge.memoizedState.deps)?u.memoizedState=Zr(n,f,a,o):(ve.flags|=e,u.memoizedState=Zr(1|n,f,a,o))}function Sm(e,n){Nl(8390656,8,e,n)}function Mm(e,n){po(2048,8,e,n)}function Em(e,n){return po(4,2,e,n)}function bm(e,n){return po(4,4,e,n)}function Tm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Am(e,n,a){a=a!=null?a.concat([e]):null,po(4,4,Tm.bind(null,n,e),a)}function tf(){}function Rm(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ku(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function wm(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ku(n,o[1]))return o[0];if(o=e(),cr){st(!0);try{e()}finally{st(!1)}}return a.memoizedState=[o,n],o}function ef(e,n,a){return a===void 0||(xa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Ug(),ve.lanes|=e,Aa|=e,a)}function Cm(e,n,a,o){return jn(a,n)?a:qr.current!==null?(e=ef(e,a,o),jn(e,n)||(yn=!0),e):(xa&42)===0?(yn=!0,e.memoizedState=a):(e=Ug(),ve.lanes|=e,Aa|=e,n)}function Dm(e,n,a,o,u){var f=q.p;q.p=f!==0&&8>f?f:8;var S=P.T,T={};P.T=T,rf(e,!1,n,a);try{var I=u(),tt=P.S;if(tt!==null&&tt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Ix(I,o);mo(e,n,ht,$n(e))}else mo(e,n,o,$n(e))}catch(xt){mo(e,n,{then:function(){},status:"rejected",reason:xt},$n())}finally{q.p=f,P.T=S}}function kx(){}function nf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Um(e).queue;Dm(e,u,n,F,a===null?kx:function(){return Lm(e),a(o)})}function Um(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:F},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lm(e){var n=Um(e).next.queue;mo(e,n,{},$n())}function af(){return Un(No)}function Nm(){return un().memoizedState}function Om(){return un().memoizedState}function Xx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=_a(a);var o=va(n,e,a);o!==null&&(ti(o,n,a),lo(o,n,a)),n={cache:Nu()},e.payload=n;return}n=n.return}}function Wx(e,n,a){var o=$n();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?zm(n,a):(a=Eu(e,n,a,o),a!==null&&(ti(a,e,o),Bm(a,n,o)))}function Pm(e,n,a){var o=$n();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))zm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,S))return _l(e,n,u,0),Ze===null&&gl(),!1}catch{}finally{}if(a=Eu(e,n,u,o),a!==null)return ti(a,e,o),Bm(a,n,o),!0}return!1}function rf(e,n,a,o){if(o={lane:2,revertLane:Bf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(r(479))}else n=Eu(e,a,o,2),n!==null&&ti(n,e,2)}function Ol(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function zm(e,n){Yr=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Bm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,qt(e,a)}}var Pl={readContext:Un,use:Dl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Im={readContext:Un,use:Dl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Sm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,Tm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var o=e();if(cr){st(!0);try{e()}finally{st(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(cr){st(!0);try{a(n)}finally{st(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Wx.bind(null,ve,e),[o.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ju(e);var n=e.queue,a=Pm.bind(null,ve,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(e,n){var a=Xn();return ef(a,e,n)},useTransition:function(){var e=Ju(!1);return e=Dm.bind(null,ve,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ve,u=Xn();if(ze){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Re&124)!==0||rm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Sm(om.bind(null,o,f,e),[e]),o.flags|=2048,Zr(9,Ll(),sm.bind(null,o,f,a,n),null),a},useId:function(){var e=Xn(),n=Ze.identifierPrefix;if(ze){var a=Wi,o=Xi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Fx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:af,useFormState:gm,useActionState:gm,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,ve,!0,a),a.dispatch=n,[e,n]},useMemoCache:Zu,useCacheRefresh:function(){return Xn().memoizedState=Xx.bind(null,ve)}},Fm={readContext:Un,use:Dl,useCallback:Rm,useContext:Un,useEffect:Mm,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:bm,useMemo:wm,useReducer:Ul,useRef:ym,useState:function(){return Ul(ji)},useDebugValue:tf,useDeferredValue:function(e,n){var a=un();return Cm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Ul(ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:af,useFormState:_m,useActionState:_m,useOptimistic:function(e,n){var a=un();return um(a,Ge,e,n)},useMemoCache:Zu,useCacheRefresh:Om},qx={readContext:Un,use:Dl,useCallback:Rm,useContext:Un,useEffect:Mm,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:bm,useMemo:wm,useReducer:Qu,useRef:ym,useState:function(){return Qu(ji)},useDebugValue:tf,useDeferredValue:function(e,n){var a=un();return Ge===null?ef(a,e,n):Cm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Qu(ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:af,useFormState:xm,useActionState:xm,useOptimistic:function(e,n){var a=un();return Ge!==null?um(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:Om},Kr=null,go=0;function zl(e){var n=go;return go+=1,Kr===null&&(Kr=[]),Kp(Kr,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hm(e){var n=e._init;return n(e._payload)}function Gm(e){function n(j,X){if(e){var J=j.deletions;J===null?(j.deletions=[X],j.flags|=16):J.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=ki(j,X),j.index=0,j.sibling=null,j}function f(j,X,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<X?(j.flags|=67108866,X):J):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,X,J,mt){return X===null||X.tag!==6?(X=Tu(J,j.mode,mt),X.return=j,X):(X=u(X,J),X.return=j,X)}function I(j,X,J,mt){var Vt=J.type;return Vt===E?ht(j,X,J.props.children,mt,J.key):X!==null&&(X.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===G&&Hm(Vt)===X.type)?(X=u(X,J.props),_o(X,J),X.return=j,X):(X=xl(J.type,J.key,J.props,null,j.mode,mt),_o(X,J),X.return=j,X)}function tt(j,X,J,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Au(J,j.mode,mt),X.return=j,X):(X=u(X,J.children||[]),X.return=j,X)}function ht(j,X,J,mt,Vt){return X===null||X.tag!==7?(X=er(J,j.mode,mt,Vt),X.return=j,X):(X=u(X,J),X.return=j,X)}function xt(j,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tu(""+X,j.mode,J),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return J=xl(X.type,X.key,X.props,null,j.mode,J),_o(J,X),J.return=j,J;case y:return X=Au(X,j.mode,J),X.return=j,X;case G:var mt=X._init;return X=mt(X._payload),xt(j,X,J)}if(ct(X)||lt(X))return X=er(X,j.mode,J,null),X.return=j,X;if(typeof X.then=="function")return xt(j,zl(X),J);if(X.$$typeof===O)return xt(j,El(j,X),J);Bl(j,X)}return null}function nt(j,X,J,mt){var Vt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Vt!==null?null:T(j,X,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return J.key===Vt?I(j,X,J,mt):null;case y:return J.key===Vt?tt(j,X,J,mt):null;case G:return Vt=J._init,J=Vt(J._payload),nt(j,X,J,mt)}if(ct(J)||lt(J))return Vt!==null?null:ht(j,X,J,mt,null);if(typeof J.then=="function")return nt(j,X,zl(J),mt);if(J.$$typeof===O)return nt(j,X,El(j,J),mt);Bl(j,J)}return null}function it(j,X,J,mt,Vt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(J)||null,T(X,j,""+mt,Vt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return j=j.get(mt.key===null?J:mt.key)||null,I(X,j,mt,Vt);case y:return j=j.get(mt.key===null?J:mt.key)||null,tt(X,j,mt,Vt);case G:var ye=mt._init;return mt=ye(mt._payload),it(j,X,J,mt,Vt)}if(ct(mt)||lt(mt))return j=j.get(J)||null,ht(X,j,mt,Vt,null);if(typeof mt.then=="function")return it(j,X,J,zl(mt),Vt);if(mt.$$typeof===O)return it(j,X,J,El(X,mt),Vt);Bl(X,mt)}return null}function le(j,X,J,mt){for(var Vt=null,ye=null,Qt=X,oe=X=0,Mn=null;Qt!==null&&oe<J.length;oe++){Qt.index>oe?(Mn=Qt,Qt=null):Mn=Qt.sibling;var Ne=nt(j,Qt,J[oe],mt);if(Ne===null){Qt===null&&(Qt=Mn);break}e&&Qt&&Ne.alternate===null&&n(j,Qt),X=f(Ne,X,oe),ye===null?Vt=Ne:ye.sibling=Ne,ye=Ne,Qt=Mn}if(oe===J.length)return a(j,Qt),ze&&ir(j,oe),Vt;if(Qt===null){for(;oe<J.length;oe++)Qt=xt(j,J[oe],mt),Qt!==null&&(X=f(Qt,X,oe),ye===null?Vt=Qt:ye.sibling=Qt,ye=Qt);return ze&&ir(j,oe),Vt}for(Qt=o(Qt);oe<J.length;oe++)Mn=it(Qt,j,oe,J[oe],mt),Mn!==null&&(e&&Mn.alternate!==null&&Qt.delete(Mn.key===null?oe:Mn.key),X=f(Mn,X,oe),ye===null?Vt=Mn:ye.sibling=Mn,ye=Mn);return e&&Qt.forEach(function(Pa){return n(j,Pa)}),ze&&ir(j,oe),Vt}function re(j,X,J,mt){if(J==null)throw Error(r(151));for(var Vt=null,ye=null,Qt=X,oe=X=0,Mn=null,Ne=J.next();Qt!==null&&!Ne.done;oe++,Ne=J.next()){Qt.index>oe?(Mn=Qt,Qt=null):Mn=Qt.sibling;var Pa=nt(j,Qt,Ne.value,mt);if(Pa===null){Qt===null&&(Qt=Mn);break}e&&Qt&&Pa.alternate===null&&n(j,Qt),X=f(Pa,X,oe),ye===null?Vt=Pa:ye.sibling=Pa,ye=Pa,Qt=Mn}if(Ne.done)return a(j,Qt),ze&&ir(j,oe),Vt;if(Qt===null){for(;!Ne.done;oe++,Ne=J.next())Ne=xt(j,Ne.value,mt),Ne!==null&&(X=f(Ne,X,oe),ye===null?Vt=Ne:ye.sibling=Ne,ye=Ne);return ze&&ir(j,oe),Vt}for(Qt=o(Qt);!Ne.done;oe++,Ne=J.next())Ne=it(Qt,j,oe,Ne.value,mt),Ne!==null&&(e&&Ne.alternate!==null&&Qt.delete(Ne.key===null?oe:Ne.key),X=f(Ne,X,oe),ye===null?Vt=Ne:ye.sibling=Ne,ye=Ne);return e&&Qt.forEach(function(Yy){return n(j,Yy)}),ze&&ir(j,oe),Vt}function ke(j,X,J,mt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case x:t:{for(var Vt=J.key;X!==null;){if(X.key===Vt){if(Vt=J.type,Vt===E){if(X.tag===7){a(j,X.sibling),mt=u(X,J.props.children),mt.return=j,j=mt;break t}}else if(X.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===G&&Hm(Vt)===X.type){a(j,X.sibling),mt=u(X,J.props),_o(mt,J),mt.return=j,j=mt;break t}a(j,X);break}else n(j,X);X=X.sibling}J.type===E?(mt=er(J.props.children,j.mode,mt,J.key),mt.return=j,j=mt):(mt=xl(J.type,J.key,J.props,null,j.mode,mt),_o(mt,J),mt.return=j,j=mt)}return S(j);case y:t:{for(Vt=J.key;X!==null;){if(X.key===Vt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(j,X.sibling),mt=u(X,J.children||[]),mt.return=j,j=mt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}mt=Au(J,j.mode,mt),mt.return=j,j=mt}return S(j);case G:return Vt=J._init,J=Vt(J._payload),ke(j,X,J,mt)}if(ct(J))return le(j,X,J,mt);if(lt(J)){if(Vt=lt(J),typeof Vt!="function")throw Error(r(150));return J=Vt.call(J),re(j,X,J,mt)}if(typeof J.then=="function")return ke(j,X,zl(J),mt);if(J.$$typeof===O)return ke(j,X,El(j,J),mt);Bl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(j,X.sibling),mt=u(X,J),mt.return=j,j=mt):(a(j,X),mt=Tu(J,j.mode,mt),mt.return=j,j=mt),S(j)):a(j,X)}return function(j,X,J,mt){try{go=0;var Vt=ke(j,X,J,mt);return Kr=null,Vt}catch(Qt){if(Qt===so||Qt===Tl)throw Qt;var ye=Zn(29,Qt,null,j.mode);return ye.lanes=mt,ye.return=j,ye}finally{}}}var Qr=Gm(!0),Vm=Gm(!1),ui=$(null),Di=null;function ya(e){var n=e.alternate;gt(mn,mn.current&1),gt(ui,e),Di===null&&(n===null||qr.current!==null||n.memoizedState!==null)&&(Di=e)}function km(e){if(e.tag===22){if(gt(mn,mn.current),gt(ui,e),Di===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Di=e)}}else Sa()}function Sa(){gt(mn,mn.current),gt(ui,ui.current)}function Zi(e){vt(ui),Di===e&&(Di=null),vt(mn)}var mn=$(0);function Il(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Zf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),u=_a(o);u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(ti(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),u=_a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(ti(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=va(e,o,a),n!==null&&(ti(n,e,a),lo(n,e,a))}};function Xm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Js(a,o)||!Js(u,f):!0}function Wm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&of.enqueueReplaceState(n,n.state,null)}function ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qm(e){Fl(e)}function Ym(e){console.error(e)}function jm(e){Fl(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Zm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function Km(e){return e=_a(e),e.tag=3,e}function Qm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Zm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Zm(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Yx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&io(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 13:return Di===null?Lf():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Of(e,o,u)),!1;case 22:return a.flags|=65536,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Of(e,o,u)),!1}throw Error(r(435,a.tag))}return Of(e,o,u),Lf(),!1}if(ze)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Cu&&(e=Error(r(422),{cause:o}),no(si(e,a)))):(o!==Cu&&(n=Error(r(423),{cause:o}),no(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=lf(e.stateNode,o,u),Fu(e,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:o});if(f=si(f,a),bo===null?bo=[f]:bo.push(f),rn!==4&&(rn=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=lf(a.stateNode,o,e),Fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Km(u),Qm(u,e,a,o),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var Jm=Error(r(461)),yn=!1;function Tn(e,n,a,o){n.child=e===null?Vm(n,null,a,o):Qr(n,e.child,a,o)}function $m(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return or(n),o=Xu(e,n,a,S,f,u),T=Wu(),e!==null&&!yn?(qu(e,n,u),Ki(e,n,u)):(ze&&T&&Ru(n),n.flags|=1,Tn(e,n,o,u),n.child)}function tg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,eg(e,n,f,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Js,a(S,o)&&e.ref===n.ref)return Ki(e,n,u)}return n.flags|=1,e=ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function eg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Js(f,o)&&e.ref===n.ref)if(yn=!1,n.pendingProps=o=f,gf(e,u))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,Ki(e,n,u)}return cf(e,n,a,o,u)}function ng(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return ig(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?em(n,f):Gu(),km(n);else return n.lanes=n.childLanes=536870912,ig(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(bl(n,f.cachePool),em(n,f),Sa(),n.memoizedState=null):(e!==null&&bl(n,null),Gu(),Sa());return Tn(e,n,u,a),n.child}function ig(e,n,a,o){var u=Pu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&bl(n,null),Gu(),km(n),e!==null&&io(e,n,o,!0),null}function Gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cf(e,n,a,o,u){return or(n),a=Xu(e,n,a,o,void 0,u),o=Wu(),e!==null&&!yn?(qu(e,n,u),Ki(e,n,u)):(ze&&o&&Ru(n),n.flags|=1,Tn(e,n,a,u),n.child)}function ag(e,n,a,o,u,f){return or(n),n.updateQueue=null,a=im(n,o,a,u),nm(e),o=Wu(),e!==null&&!yn?(qu(e,n,f),Ki(e,n,f)):(ze&&o&&Ru(n),n.flags|=1,Tn(e,n,a,f),n.child)}function rg(e,n,a,o,u){if(or(n),n.stateNode===null){var f=Gr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Un(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Bu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Un(S):Gr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(sf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&of.enqueueReplaceState(f,f.state,null),uo(n,o,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=ur(a,T);f.props=I;var tt=f.context,ht=a.contextType;S=Gr,typeof ht=="object"&&ht!==null&&(S=Un(ht));var xt=a.getDerivedStateFromProps;ht=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==S)&&Wm(n,f,o,S),ga=!1;var nt=n.memoizedState;f.state=nt,uo(n,o,f,u),co(),tt=n.memoizedState,T||nt!==tt||ga?(typeof xt=="function"&&(sf(n,a,xt,o),tt=n.memoizedState),(I=ga||Xm(n,a,I,o,nt,tt,S))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=S,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Iu(e,n),S=n.memoizedProps,ht=ur(a,S),f.props=ht,xt=n.pendingProps,nt=f.context,tt=a.contextType,I=Gr,typeof tt=="object"&&tt!==null&&(I=Un(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xt||nt!==I)&&Wm(n,f,o,I),ga=!1,nt=n.memoizedState,f.state=nt,uo(n,o,f,u),co();var it=n.memoizedState;S!==xt||nt!==it||ga||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof T=="function"&&(sf(n,a,T,o),it=n.memoizedState),(ht=ga||Xm(n,a,ht,o,nt,it,I)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=I,o=ht):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Qr(n,e.child,null,u),n.child=Qr(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ki(e,n,u),e}function sg(e,n,a,o){return eo(),n.flags|=256,Tn(e,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(e){return{baseLanes:e,cachePool:Yp()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function og(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?ya(n):Sa(),ze){var T=an,I;if(I=T){t:{for(I=T,T=Ci;I.nodeType!==8;){if(!T){T=null;break t}if(I=Si(I.nextSibling),I===null){T=null;break t}}T=I}T!==null?(n.memoizedState={dehydrated:T,treeContext:nr!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},I=Zn(18,null,null,0),I.stateNode=T,I.return=n,n.child=I,Fn=n,an=null,I=!0):I=!1}I||rr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Zf(T)?n.lanes=32:n.lanes=536870912,null;Zi(n)}return T=o.children,o=o.fallback,u?(Sa(),u=n.mode,T=Vl({mode:"hidden",children:T},u),o=er(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=ff(a),u.childLanes=df(e,S,a),n.memoizedState=uf,o):(ya(n),hf(n,T))}if(I=e.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=pf(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),u=o.fallback,T=n.mode,o=Vl({mode:"visible",children:o.children},T),u=er(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Qr(n,e.child,null,a),o=n.child,o.memoizedState=ff(a),o.childLanes=df(e,S,a),n.memoizedState=uf,n=u);else if(ya(n),Zf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(r(419)),o.stack="",o.digest=S,no({value:o,source:null,stack:null}),n=pf(e,n,a)}else if(yn||io(e,n,a,!1),S=(a&e.childLanes)!==0,yn||S){if(S=Ze,S!==null&&(o=a&-a,o=(o&42)!==0?1:ue(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Hr(e,o),ti(S,e,o),Jm;T.data==="$?"||Lf(),n=pf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,an=Si(T.nextSibling),Fn=n,ze=!0,ar=null,Ci=!1,e!==null&&(li[ci++]=Xi,li[ci++]=Wi,li[ci++]=nr,Xi=e.id,Wi=e.overflow,nr=n),n=hf(n,o.children),n.flags|=4096);return n}return u?(Sa(),u=o.fallback,T=n.mode,I=e.child,tt=I.sibling,o=ki(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?u=ki(tt,u):(u=er(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=ff(a):(I=T.cachePool,I!==null?(tt=pn._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=Yp(),T={baseLanes:T.baseLanes|a,cachePool:I}),u.memoizedState=T,u.childLanes=df(e,S,a),n.memoizedState=uf,o):(ya(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function hf(e,n){return n=Vl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function pf(e,n,a){return Qr(n,e.child,null,a),e=hf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Uu(e.return,n,a)}function mf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function cg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Tn(e,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lg(e,a,n);else if(e.tag===19)lg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(gt(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Il(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}mf(n,!0,a,null,f);break;case"together":mf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(io(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function jx(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),ma(n,pn,e.memoizedState.cache),eo();break;case 27:case 5:$t(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?og(e,n,a):(ya(n),e=Ki(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(io(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return cg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,ng(e,n,a);case 24:ma(n,pn,e.memoizedState.cache)}return Ki(e,n,a)}function ug(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!gf(e,a)&&(n.flags&128)===0)return yn=!1,jx(e,n,a);yn=(e.flags&131072)!==0}else yn=!1,ze&&(n.flags&1048576)!==0&&Hp(n,Sl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")bu(o)?(e=ur(o,e),n.tag=1,n=rg(null,n,o,e,a)):(n.tag=0,n=cf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=$m(null,n,o,e,a);break t}else if(u===k){n.tag=14,n=tg(null,n,o,e,a);break t}}throw n=ut(o)||o,Error(r(306,n,""))}}return n;case 0:return cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ur(o,n.pendingProps),rg(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(e,n),uo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ma(n,pn,o),o!==f.cache&&Lu(n,[pn],a,!0),co(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=sg(e,n,o,a);break t}else if(o!==u){u=si(Error(r(424)),n),no(u),n=sg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(an=Si(e.firstChild),Fn=n,ze=!0,ar=null,Ci=!0,a=Vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(eo(),o===u){n=Ki(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Gl(e,n),e===null?(a=p_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=nc(dt.current).createElement(a),o[hn]=n,o[en]=e,Rn(o,a,e),ln(o),n.stateNode=o):n.memoizedState=p_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return $t(n),e===null&&ze&&(o=n.stateNode=f_(n.type,n.pendingProps,dt.current),Fn=n,Ci=!0,u=an,Da(n.type)?(Kf=u,an=Si(o.firstChild)):an=u),Tn(e,n,n.pendingProps.children,a),Gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=an)&&(o=My(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,Fn=n,an=Si(o.firstChild),Ci=!1,u=!0):u=!1),u||rr(n)),$t(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,qf(u,f)?o=null:S!==null&&qf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(e,n,Hx,null,null,a),No._currentValue=u),Gl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=an)&&(a=Ey(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,Fn=n,an=null,e=!0):e=!1),e||rr(n)),null;case 13:return og(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Qr(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,or(n),u=Un(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return tg(e,n,n.type,n.pendingProps,a);case 15:return eg(e,n,n.type,n.pendingProps,a);case 19:return cg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Vl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ki(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return ng(e,n,a);case 24:return or(n),o=Un(pn),e===null?(u=Pu(),u===null&&(u=Ze,f=Nu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Bu(n),ma(n,pn,u)):((e.lanes&a)!==0&&(Iu(e,n),uo(n,null,null,a),co()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,pn,o)):(o=f.cache,ma(n,pn,o),o!==u.cache&&Lu(n,[pn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Qi(e){e.flags|=4}function fg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x_(n)){if(n=ui.current,n!==null&&((Re&4194048)===Re?Di!==null:(Re&62914560)!==Re&&(Re&536870912)===0||n!==Di))throw oo=zu,jp;e.flags|=8192}}function kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,es|=n)}function vo(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Zx(e,n,a){var o=n.pendingProps;switch(wu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(pn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(to(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kp())),tn(n),null;case 26:return a=n.memoizedState,e===null?(Qi(n),a!==null?(tn(n),fg(n,a)):(tn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Qi(n),tn(n),fg(n,a)):(tn(n),n.flags&=-16777217):(e.memoizedProps!==o&&Qi(n),tn(n),n.flags&=-16777217),null;case 27:Ce(n),a=dt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}e=Et.current,to(n)?Gp(n):(e=f_(u,o,a),n.stateNode=e,Qi(n))}return tn(n),null;case 5:if(Ce(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(e=Et.current,to(n))Gp(n);else{switch(u=nc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[hn]=n,e[en]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Rn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Qi(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,to(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[hn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||a_(e.nodeValue,a)),e||rr(n)}else e=nc(e).createTextNode(o),e[hn]=n,n.stateNode=e}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=to(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[hn]=n}else eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=kp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zi(n),n):(Zi(n),null)}if(Zi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),tn(n),null;case 4:return Ht(),e===null&&Gf(n.stateNode.containerInfo),tn(n),null;case 10:return Yi(n.type),tn(n),null;case 19:if(vt(mn),u=n.memoizedState,u===null)return tn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)vo(u,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Il(e),f!==null){for(n.flags|=128,vo(u,!1),e=f.updateQueue,n.updateQueue=e,kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Fp(a,e),a=a.sibling;return gt(mn,mn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Nt()>ql&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Il(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,kl(n,e),vo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!ze)return tn(n),null}else 2*Nt()-u.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Nt(),n.sibling=null,e=mn.current,gt(mn,o?e&1|2:e&1),n):(tn(n),null);case 22:case 23:return Zi(n),Vu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(lr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(pn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Kx(e,n){switch(wu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(pn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ce(n),null;case 13:if(Zi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));eo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(mn),null;case 4:return Ht(),null;case 10:return Yi(n.type),null;case 22:case 23:return Zi(n),Vu(),e!==null&&vt(lr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(pn),null;case 25:return null;default:return null}}function dg(e,n){switch(wu(n),n.tag){case 3:Yi(pn),Ht();break;case 26:case 27:case 5:Ce(n);break;case 4:Ht();break;case 13:Zi(n);break;case 19:vt(mn);break;case 10:Yi(n.type);break;case 22:case 23:Zi(n),Vu(),e!==null&&vt(lr);break;case 24:Yi(pn)}}function xo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(T){je(n,n.return,T)}}function Ma(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var I=a,tt=T;try{tt()}catch(ht){je(u,I,ht)}}}o=o.next}while(o!==f)}}catch(ht){je(n,n.return,ht)}}function hg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{tm(n,a)}catch(o){je(e,e.return,o)}}}function pg(e,n,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){je(e,n,o)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){je(e,n,u)}}function Ui(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){je(e,n,u)}else a.current=null}function mg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){je(e,e.return,u)}}function _f(e,n,a){try{var o=e.stateNode;_y(o,e.type,a,n),o[en]=n}catch(u){je(e,e.return,u)}}function gg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function vf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||gg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ec));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xf(e,n,a),e=e.sibling;e!==null;)xf(e,n,a),e=e.sibling}function Xl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xl(e,n,a),e=e.sibling;e!==null;)Xl(e,n,a),e=e.sibling}function _g(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[hn]=e,n[en]=a}catch(f){je(e,e.return,f)}}var Ji=!1,on=!1,yf=!1,vg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Qx(e,n){if(e=e.containerInfo,Xf=lc,e=Cp(e),_u(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,I=-1,tt=0,ht=0,xt=e,nt=null;e:for(;;){for(var it;xt!==a||u!==0&&xt.nodeType!==3||(T=S+u),xt!==f||o!==0&&xt.nodeType!==3||(I=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(it=xt.firstChild)!==null;)nt=xt,xt=it;for(;;){if(xt===e)break e;if(nt===a&&++tt===u&&(T=S),nt===f&&++ht===o&&(I=S),(it=xt.nextSibling)!==null)break;xt=nt,nt=xt.parentNode}xt=it}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:e,selectionRange:a},lc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var le=ur(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(le,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){je(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function xg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),o&4&&xo(5,a);break;case 1:if(Ea(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){je(a,a.return,S)}else{var u=ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){je(a,a.return,S)}}o&64&&hg(a),o&512&&yo(a,a.return);break;case 3:if(Ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(e,n)}catch(S){je(a,a.return,S)}}break;case 27:n===null&&o&4&&_g(a);case 26:case 5:Ea(e,a),n===null&&o&4&&mg(a),o&512&&yo(a,a.return);break;case 12:Ea(e,a);break;case 13:Ea(e,a),o&4&&Mg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sy.bind(null,a),by(e,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||on,u=Ji;var f=on;Ji=o,(on=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),Ji=u,on=f}break;case 30:break;default:Ea(e,a)}}function yg(e){var n=e.alternate;n!==null&&(e.alternate=null,yg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Lr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function $i(e,n,a){for(a=a.child;a!==null;)Sg(e,n,a),a=a.sibling}function Sg(e,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:on||Ui(a,n),$i(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ui(a,n);var o=$e,u=Wn;Da(a.type)&&($e=a.stateNode,Wn=!1),$i(e,n,a),Co(a.stateNode),$e=o,Wn=u;break;case 5:on||Ui(a,n);case 6:if(o=$e,u=Wn,$e=null,$i(e,n,a),$e=o,Wn=u,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){je(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){je(a,n,f)}break;case 18:$e!==null&&(Wn?(e=$e,c_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bo(e)):c_($e,a.stateNode));break;case 4:o=$e,u=Wn,$e=a.stateNode.containerInfo,Wn=!0,$i(e,n,a),$e=o,Wn=u;break;case 0:case 11:case 14:case 15:on||Ma(2,a,n),on||Ma(4,a,n),$i(e,n,a);break;case 1:on||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&pg(a,n,o)),$i(e,n,a);break;case 21:$i(e,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,$i(e,n,a),on=o;break;default:$i(e,n,a)}}function Mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bo(e)}catch(a){je(n,n.return,a)}}function Jx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new vg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new vg),n;default:throw Error(r(435,e.tag))}}function Sf(e,n){var a=Jx(e);n.forEach(function(o){var u=oy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Da(T.type)){$e=T.stateNode,Wn=!1;break t}break;case 5:$e=T.stateNode,Wn=!1;break t;case 3:case 4:$e=T.stateNode.containerInfo,Wn=!0;break t}T=T.return}if($e===null)throw Error(r(160));Sg(f,S,u),$e=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Eg(n,e),n=n.sibling}var yi=null;function Eg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Qn(e),o&4&&(Ma(3,e,e.return),xo(3,e),Ma(5,e,e.return));break;case 1:Kn(n,e),Qn(e),o&512&&(on||a===null||Ui(a,a.return)),o&64&&Ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=yi;if(Kn(n,e),Qn(e),o&512&&(on||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wi]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[hn]=e,ln(f),o=f;break t;case"link":var S=__("link","href",u).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=__("meta","content",u).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[hn]=e,ln(f),o=f}e.stateNode=o}else v_(u,e.type,e.stateNode);else e.stateNode=g_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?v_(u,e.type,e.stateNode):g_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&_f(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Qn(e),o&512&&(on||a===null||Ui(a,a.return)),a!==null&&o&4&&_f(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Qn(e),o&512&&(on||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(it){je(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,_f(e,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Kn(n,e),Qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){je(e,e.return,it)}}break;case 3:if(rc=null,u=yi,yi=ic(n.containerInfo),Kn(n,e),yi=u,Qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(n.containerInfo)}catch(it){je(e,e.return,it)}yf&&(yf=!1,bg(e));break;case 4:o=yi,yi=ic(e.stateNode.containerInfo),Kn(n,e),Qn(e),yi=o;break;case 12:Kn(n,e),Qn(e);break;case 13:Kn(n,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rf=Nt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Ji,ht=on;if(Ji=tt||u,on=ht||I,Kn(n,e),on=ht,Ji=tt,Qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ji||on||fr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var xt=I.memoizedProps.style,nt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){je(I,I.return,it)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(it){je(I,I.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Sf(e,a))));break;case 19:Kn(n,e),Qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 30:break;case 21:break;default:Kn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(gg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=vf(e);Xl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Vn(S,""),a.flags&=-33);var T=vf(e);Xl(e,T,S);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=vf(e);xf(e,tt,I);break;default:throw Error(r(161))}}catch(ht){je(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xg(e,n.alternate,n),n=n.sibling}function fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),fr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&pg(n,n.return,a),fr(n);break;case 27:Co(n.stateNode);case 26:case 5:Ui(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),xo(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){je(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)$p(I[u],T)}catch(tt){je(o,o.return,tt)}}a&&S&64&&hg(f),yo(f,f.return);break;case 27:_g(f);case 26:case 5:ba(u,f,a),a&&o===null&&S&4&&mg(f),yo(f,f.return);break;case 12:ba(u,f,a);break;case 13:ba(u,f,a),a&&S&4&&Mg(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),yo(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function Mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tg(e,n,a,o),n=n.sibling}function Tg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&xo(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){je(n,n.return,I)}}else Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Li(e,n,a,o):So(e,n):f._visibility&2?Li(e,n,a,o):(f._visibility|=2,Jr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Mf(S,n);break;case 24:Li(e,n,a,o),u&2048&&Ef(n.alternate,n);break;default:Li(e,n,a,o)}}function Jr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,I=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Jr(f,S,T,I,u),xo(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?Jr(f,S,T,I,u):So(f,S):(ht._visibility|=2,Jr(f,S,T,I,u)),u&&tt&2048&&Mf(S.alternate,S);break;case 24:Jr(f,S,T,I,u),u&&tt&2048&&Ef(S.alternate,S);break;default:Jr(f,S,T,I,u)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&Mf(o.alternate,o);break;case 24:So(a,o),u&2048&&Ef(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function $r(e){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)Ag(e),e=e.sibling}function Ag(e){switch(e.tag){case 26:$r(e),e.flags&Mo&&e.memoizedState!==null&&By(yi,e.memoizedState,e.memoizedProps);break;case 5:$r(e);break;case 3:case 4:var n=yi;yi=ic(e.stateNode.containerInfo),$r(e),yi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Mo,Mo=16777216,$r(e),Mo=n):$r(e));break;default:$r(e)}}function Rg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Cg(o,e)}Rg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Eo(e);break;default:Eo(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Cg(o,e)}Rg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function Cg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(yg(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var $x={getCacheForType:function(e){var n=Un(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},ty=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ze=null,Me=null,Re=0,Fe=0,Jn=null,Ta=!1,ts=!1,bf=!1,ta=0,rn=0,Aa=0,dr=0,Tf=0,fi=0,es=0,bo=null,qn=null,Af=!1,Rf=0,ql=1/0,Yl=null,Ra=null,An=0,wa=null,ns=null,is=0,wf=0,Cf=null,Dg=null,To=0,Df=null;function $n(){if((Ie&2)!==0&&Re!==0)return Re&-Re;if(P.T!==null){var e=Xr;return e!==0?e:Bf()}return De()}function Ug(){fi===0&&(fi=(Re&536870912)===0||ze?W():536870912);var e=ui.current;return e!==null&&(e.flags|=32),fi}function ti(e,n,a){(e===Ze&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(as(e,0),Ca(e,Re,fi,!1)),Ft(e,a),((Ie&2)===0||e!==Ze)&&(e===Ze&&((Ie&2)===0&&(dr|=a),rn===4&&Ca(e,Re,fi,!1)),Ni(e))}function Lg(e,n,a){if((Ie&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ut(e,n),u=o?iy(e,n):Nf(e,n,!0),f=o;do{if(u===0){ts&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ey(a)){u=Nf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=bo;var I=T.current.memoizedState.isDehydrated;if(I&&(as(T,S).flags|=256),S=Nf(T,S,!1),S!==2){if(bf&&!I){T.errorRecoveryDisabledLanes|=f,dr|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){as(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,fi,!Ta);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Rf+300-Nt(),10<u)){if(Ca(o,n,fi,!Ta),Yt(o,0,!0)!==0)break t;o.timeoutHandle=o_(Ng.bind(null,o,a,qn,Yl,Af,n,fi,dr,es,Ta,f,2,-0,0),u);break t}Ng(o,a,qn,Yl,Af,n,fi,dr,es,Ta,f,0,-0,0)}}break}while(!0);Ni(e)}function Ng(e,n,a,o,u,f,S,T,I,tt,ht,xt,nt,it){if(e.timeoutHandle=-1,xt=n.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(Lo={stylesheets:null,count:0,unsuspend:zy},Ag(n),xt=Iy(),xt!==null)){e.cancelPendingCommit=xt(Hg.bind(null,e,n,f,a,o,u,S,T,I,ht,1,nt,it)),Ca(e,f,S,!tt);return}Hg(e,n,f,a,o,u,S,T,I)}function ey(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~Tf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&yt(e,a,n)}function jl(){return(Ie&6)===0?(Ao(0),!1):!0}function Uf(){if(Me!==null){if(Fe===0)var e=Me.return;else e=Me,qi=sr=null,Yu(e),Kr=null,go=0,e=Me;for(;e!==null;)dg(e.alternate,e),e=e.return;Me=null}}function as(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Uf(),Ze=e,Me=a=ki(e.current,null),Re=n,Fe=0,Jn=null,Ta=!1,ts=Ut(e,n),bf=!1,es=fi=Tf=dr=Aa=rn=0,qn=bo=null,Af=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return ta=n,gl(),a}function Og(e,n){ve=null,P.H=Pl,n===so||n===Tl?(n=Qp(),Fe=3):n===jp?(n=Qp(),Fe=4):Fe=n===Jm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,Me===null&&(rn=1,Hl(e,si(n,e.current)))}function Pg(){var e=P.H;return P.H=Pl,e===null?Pl:e}function zg(){var e=P.A;return P.A=$x,e}function Lf(){rn=4,Ta||(Re&4194048)!==Re&&ui.current!==null||(ts=!0),(Aa&134217727)===0&&(dr&134217727)===0||Ze===null||Ca(Ze,Re,fi,!1)}function Nf(e,n,a){var o=Ie;Ie|=2;var u=Pg(),f=zg();(Ze!==e||Re!==n)&&(Yl=null,as(e,n)),n=!1;var S=rn;t:do try{if(Fe!==0&&Me!==null){var T=Me,I=Jn;switch(Fe){case 8:Uf(),S=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var tt=Fe;if(Fe=0,Jn=null,rs(e,T,I,tt),a&&ts){S=0;break t}break;default:tt=Fe,Fe=0,Jn=null,rs(e,T,I,tt)}}ny(),S=rn;break}catch(ht){Og(e,ht)}while(!0);return n&&e.shellSuspendCounter++,qi=sr=null,Ie=o,P.H=u,P.A=f,Me===null&&(Ze=null,Re=0,gl()),S}function ny(){for(;Me!==null;)Bg(Me)}function iy(e,n){var a=Ie;Ie|=2;var o=Pg(),u=zg();Ze!==e||Re!==n?(Yl=null,ql=Nt()+500,as(e,n)):ts=Ut(e,n);t:do try{if(Fe!==0&&Me!==null){n=Me;var f=Jn;e:switch(Fe){case 1:Fe=0,Jn=null,rs(e,n,f,1);break;case 2:case 9:if(Zp(f)){Fe=0,Jn=null,Ig(n);break}n=function(){Fe!==2&&Fe!==9||Ze!==e||(Fe=7),Ni(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Zp(f)?(Fe=0,Jn=null,Ig(n)):(Fe=0,Jn=null,rs(e,n,f,7));break;case 5:var S=null;switch(Me.tag){case 26:S=Me.memoizedState;case 5:case 27:var T=Me;if(!S||x_(S)){Fe=0,Jn=null;var I=T.sibling;if(I!==null)Me=I;else{var tt=T.return;tt!==null?(Me=tt,Zl(tt)):Me=null}break e}}Fe=0,Jn=null,rs(e,n,f,5);break;case 6:Fe=0,Jn=null,rs(e,n,f,6);break;case 8:Uf(),rn=6;break t;default:throw Error(r(462))}}ay();break}catch(ht){Og(e,ht)}while(!0);return qi=sr=null,P.H=o,P.A=u,Ie=a,Me!==null?0:(Ze=null,Re=0,gl(),rn)}function ay(){for(;Me!==null&&!Wt();)Bg(Me)}function Bg(e){var n=ug(e.alternate,e,ta);e.memoizedProps=e.pendingProps,n===null?Zl(e):Me=n}function Ig(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ag(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=ag(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Yu(n);default:dg(a,n),n=Me=Fp(n,ta),n=ug(a,n,ta)}e.memoizedProps=e.pendingProps,n===null?Zl(e):Me=n}function rs(e,n,a,o){qi=sr=null,Yu(n),Kr=null,go=0;var u=n.return;try{if(Yx(e,u,n,a,Re)){rn=1,Hl(e,si(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;rn=1,Hl(e,si(a,e.current)),Me=null;return}n.flags&32768?(ze||o===1?e=!0:ts||(Re&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),Fg(n,e)):Zl(n)}function Zl(e){var n=e;do{if((n.flags&32768)!==0){Fg(n,Ta);return}e=n.return;var a=Zx(n.alternate,n,ta);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);rn===0&&(rn=5)}function Fg(e,n){do{var a=Kx(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);rn=6,Me=null}function Hg(e,n,a,o,u,f,S,T,I){e.cancelPendingCommit=null;do Kl();while(An!==0);if((Ie&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Mu,Tt(e,a,f,S,T,I),e===Ze&&(Me=Ze=null,Re=0),ns=n,wa=e,is=a,wf=f,Cf=u,Dg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ly(Pe,function(){return Wg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=q.p,q.p=2,S=Ie,Ie|=4;try{Qx(e,n,a)}finally{Ie=S,q.p=u,P.T=o}}An=1,Gg(),Vg(),kg()}}function Gg(){if(An===1){An=0;var e=wa,n=ns,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=Ie;Ie|=4;try{Eg(n,e);var f=Wf,S=Cp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&wp(T.ownerDocument.documentElement,T)){if(I!==null&&_u(T)){var tt=I.start,ht=I.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var xt=T.ownerDocument||document,nt=xt&&xt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),le=T.textContent.length,re=Math.min(I.start,le),ke=I.end===void 0?re:Math.min(I.end,le);!it.extend&&re>ke&&(S=ke,ke=re,re=S);var j=Rp(T,re),X=Rp(T,ke);if(j&&X&&(it.rangeCount!==1||it.anchorNode!==j.node||it.anchorOffset!==j.offset||it.focusNode!==X.node||it.focusOffset!==X.offset)){var J=xt.createRange();J.setStart(j.node,j.offset),it.removeAllRanges(),re>ke?(it.addRange(J),it.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),it.addRange(J))}}}}for(xt=[],it=T;it=it.parentNode;)it.nodeType===1&&xt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var mt=xt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}lc=!!Xf,Wf=Xf=null}finally{Ie=u,q.p=o,P.T=a}}e.current=n,An=2}}function Vg(){if(An===2){An=0;var e=wa,n=ns,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=Ie;Ie|=4;try{xg(e,n.alternate,n)}finally{Ie=u,q.p=o,P.T=a}}An=3}}function kg(){if(An===4||An===3){An=0,te();var e=wa,n=ns,a=is,o=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,ns=wa=null,Xg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),Be(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=q.p,q.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{P.T=n,q.p=u}}(is&3)!==0&&Kl(),Ni(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Df?To++:(To=0,Df=e):To=0,Ao(0)}}function Xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function Kl(e){return Gg(),Vg(),kg(),Wg()}function Wg(){if(An!==5)return!1;var e=wa,n=wf;wf=0;var a=Be(is),o=P.T,u=q.p;try{q.p=32>a?32:a,P.T=null,a=Cf,Cf=null;var f=wa,S=is;if(An=0,ns=wa=null,is=0,(Ie&6)!==0)throw Error(r(331));var T=Ie;if(Ie|=4,wg(f.current),Tg(f,f.current,S,a),Ie=T,Ao(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{q.p=u,P.T=o,Xg(e,n)}}function qg(e,n,a){n=si(a,n),n=lf(e.stateNode,n,2),e=va(e,n,2),e!==null&&(Ft(e,2),Ni(e))}function je(e,n,a){if(e.tag===3)qg(e,e,a);else for(;n!==null;){if(n.tag===3){qg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=si(a,e),a=Km(2),o=va(n,a,2),o!==null&&(Qm(a,o,n,e),Ft(o,2),Ni(o));break}}n=n.return}}function Of(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ty;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bf=!0,u.add(a),e=ry.bind(null,e,n,a),n.then(e,e))}function ry(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Re&a)===a&&(rn===4||rn===3&&(Re&62914560)===Re&&300>Nt()-Rf?(Ie&2)===0&&as(e,0):Tf|=a,es===Re&&(es=0)),Ni(e)}function Yg(e,n){n===0&&(n=Rt()),e=Hr(e,n),e!==null&&(Ft(e,n),Ni(e))}function sy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(e,a)}function oy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Yg(e,a)}function ly(e,n){return N(e,n)}var Ql=null,ss=null,Pf=!1,Jl=!1,zf=!1,hr=0;function Ni(e){e!==ss&&e.next===null&&(ss===null?Ql=ss=e:ss=ss.next=e),Jl=!0,Pf||(Pf=!0,uy())}function Ao(e,n){if(!zf&&Jl){zf=!0;do for(var a=!1,o=Ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qg(o,f))}else f=Re,f=Yt(o,o===Ze?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ut(o,f)||(a=!0,Qg(o,f));o=o.next}while(a);zf=!1}}function cy(){jg()}function jg(){Jl=Pf=!1;var e=0;hr!==0&&(vy()&&(e=hr),hr=0);for(var n=Nt(),a=null,o=Ql;o!==null;){var u=o.next,f=Zg(o,n);f===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(ss=a)):(a=o,(e!==0||(f&3)!==0)&&(Jl=!0)),o=u}Ao(e)}function Zg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-It(f),T=1<<S,I=u[S];I===-1?((T&a)===0||(T&o)!==0)&&(u[S]=fe(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ze,a=Re,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ae(o),Be(a)){case 2:case 8:a=ee;break;case 32:a=Pe;break;case 268435456:a=L;break;default:a=Pe}return o=Kg.bind(null,e),a=N(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ae(o),e.callbackPriority=2,e.callbackNode=null,2}function Kg(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kl()&&e.callbackNode!==a)return null;var o=Re;return o=Yt(e,e===Ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Lg(e,o,n),Zg(e,Nt()),e.callbackNode!=null&&e.callbackNode===a?Kg.bind(null,e):null)}function Qg(e,n){if(Kl())return null;Lg(e,n,!0)}function uy(){yy(function(){(Ie&6)!==0?N(Bt,cy):jg()})}function Bf(){return hr===0&&(hr=W()),hr}function Jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function $g(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function fy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Jg((u[en]||null).action),S=o.submitter;S&&(n=(n=S[en]||null)?Jg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new hl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var I=S?$g(u,S):new FormData(u);nf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=S?$g(u,S):new FormData(u),nf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var If=0;If<Su.length;If++){var Ff=Su[If],dy=Ff.toLowerCase(),hy=Ff[0].toUpperCase()+Ff.slice(1);xi(dy,"on"+hy)}xi(Lp,"onAnimationEnd"),xi(Np,"onAnimationIteration"),xi(Op,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Dx,"onTransitionRun"),xi(Ux,"onTransitionStart"),xi(Lx,"onTransitionCancel"),xi(Pp,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function t_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],I=T.instance,tt=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){Fl(ht)}u.currentTarget=null,f=I}else for(S=0;S<o.length;S++){if(T=o[S],I=T.instance,tt=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){Fl(ht)}u.currentTarget=null,f=I}}}}function Ee(e,n){var a=n[Dr];a===void 0&&(a=n[Dr]=new Set);var o=e+"__bubble";a.has(o)||(e_(n,e,2,!1),a.add(o))}function Hf(e,n,a){var o=0;n&&(o|=4),e_(a,e,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Gf(e){if(!e[$l]){e[$l]=!0,ol.forEach(function(a){a!=="selectionchange"&&(py.has(a)||Hf(a,!1,e),Hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,Hf("selectionchange",!1,n))}}function e_(e,n,a,o){switch(T_(n)){case 2:var u=Gy;break;case 8:u=Vy;break;default:u=ed}a=u.bind(null,n,a,e),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Vf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Gi(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=f=S;continue t}T=T.parentNode}}o=o.return}lp(function(){var tt=f,ht=su(a),xt=[];t:{var nt=zp.get(e);if(nt!==void 0){var it=hl,le=e;switch(e){case"keypress":if(fl(a)===0)break t;case"keydown":case"keyup":it=lx;break;case"focusin":le="focus",it=du;break;case"focusout":le="blur",it=du;break;case"beforeblur":case"afterblur":it=du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=fx;break;case Lp:case Np:case Op:it=$v;break;case Pp:it=hx;break;case"scroll":case"scrollend":it=jv;break;case"wheel":it=mx;break;case"copy":case"cut":case"paste":it=ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=hp;break;case"toggle":case"beforetoggle":it=_x}var re=(n&4)!==0,ke=!re&&(e==="scroll"||e==="scrollend"),j=re?nt!==null?nt+"Capture":null:nt;re=[];for(var X=tt,J;X!==null;){var mt=X;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||j===null||(mt=Ws(X,j),mt!=null&&re.push(wo(X,mt,J))),ke)break;X=X.return}0<re.length&&(nt=new it(nt,le,null,a,ht),xt.push({event:nt,listeners:re}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==ru&&(le=a.relatedTarget||a.fromElement)&&(Gi(le)||le[Ri]))break t;if((it||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(le=a.relatedTarget||a.toElement,it=tt,le=le?Gi(le):null,le!==null&&(ke=c(le),re=le.tag,le!==ke||re!==5&&re!==27&&re!==6)&&(le=null)):(it=null,le=tt),it!==le)){if(re=fp,mt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(re=hp,mt="onPointerLeave",j="onPointerEnter",X="pointer"),ke=it==null?nt:Qa(it),J=le==null?nt:Qa(le),nt=new re(mt,X+"leave",it,a,ht),nt.target=ke,nt.relatedTarget=J,mt=null,Gi(ht)===tt&&(re=new re(j,X+"enter",le,a,ht),re.target=J,re.relatedTarget=ke,mt=re),ke=mt,it&&le)e:{for(re=it,j=le,X=0,J=re;J;J=os(J))X++;for(J=0,mt=j;mt;mt=os(mt))J++;for(;0<X-J;)re=os(re),X--;for(;0<J-X;)j=os(j),J--;for(;X--;){if(re===j||j!==null&&re===j.alternate)break e;re=os(re),j=os(j)}re=null}else re=null;it!==null&&n_(xt,nt,it,re,!1),le!==null&&ke!==null&&n_(xt,ke,le,re,!0)}}t:{if(nt=tt?Qa(tt):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Vt=Sp;else if(xp(nt))if(Mp)Vt=Rx;else{Vt=Tx;var ye=bx}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&au(tt.elementType)&&(Vt=Sp):Vt=Ax;if(Vt&&(Vt=Vt(e,tt))){yp(xt,Vt,a,ht);break t}ye&&ye(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Dn(nt,"number",nt.value)}switch(ye=tt?Qa(tt):window,e){case"focusin":(xp(ye)||ye.contentEditable==="true")&&(Br=ye,vu=tt,$s=null);break;case"focusout":$s=vu=Br=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Dp(xt,a,ht);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Dp(xt,a,ht)}var Qt;if(pu)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else zr?_p(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(pp&&a.locale!=="ko"&&(zr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&zr&&(Qt=cp()):(pa=ht,cu="value"in pa?pa.value:pa.textContent,zr=!0)),ye=tc(tt,oe),0<ye.length&&(oe=new dp(oe,e,null,a,ht),xt.push({event:oe,listeners:ye}),Qt?oe.data=Qt:(Qt=vp(a),Qt!==null&&(oe.data=Qt)))),(Qt=xx?yx(e,a):Sx(e,a))&&(oe=tc(tt,"onBeforeInput"),0<oe.length&&(ye=new dp("onBeforeInput","beforeinput",null,a,ht),xt.push({event:ye,listeners:oe}),ye.data=Qt)),fy(xt,e,tt,a,ht)}t_(xt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ws(e,a),u!=null&&o.unshift(wo(e,u,f)),u=Ws(e,n),u!=null&&o.push(wo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function os(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function n_(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,I=T.alternate,tt=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||tt===null||(I=tt,u?(tt=Ws(a,f),tt!=null&&S.unshift(wo(a,tt,I))):u||(tt=Ws(a,f),tt!=null&&S.push(wo(a,tt,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function i_(e){return(typeof e=="string"?e:""+e).replace(my,`
`).replace(gy,"")}function a_(e,n){return n=i_(n),i_(e)===n}function ec(){}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":Gt(e,"class",o);break;case"tabIndex":Gt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Gt(e,a,o);break;case"style":sp(e,o,f);break;case"data":if(n!=="object"){Gt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ec);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qv.get(a)||a,Lt(e,a,o))}}function kf(e,n,a,o,u,f){switch(a){case"style":sp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ll.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[en]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,f,S,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var T=f=S=u=null,I=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":S=ht;break;case"checked":I=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ve(e,n,o,ht,a,null)}}In(e,f,T,I,tt,S,u,!1),Se(e);return;case"select":Ee("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Ve(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!o,n!=null?nn(e,!!o,n,!1):a!=null&&nn(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(e,n,S,T,a,null)}Nr(e,o,u,f),Se(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,I,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Ee(Ro[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,tt,o,a,null)}return;default:if(au(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&kf(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ve(e,n,T,o,a,null))}function _y(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,I=null,tt=null,ht=null;for(it in a){var xt=a[it];if(a.hasOwnProperty(it)&&xt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":I=xt;default:o.hasOwnProperty(it)||Ve(e,n,it,null,o,xt)}}for(var nt in o){var it=o[nt];if(xt=a[nt],o.hasOwnProperty(nt)&&(it!=null||xt!=null))switch(nt){case"type":f=it;break;case"name":u=it;break;case"checked":tt=it;break;case"defaultChecked":ht=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==xt&&Ve(e,n,nt,it,o,xt)}}Ye(e,S,T,I,tt,ht,f,u);return;case"select":it=S=T=nt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":it=I;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==I&&Ve(e,n,u,f,o,I)}n=T,a=S,o=it,nt!=null?nn(e,!!a,nt,!1):!!o!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(e,n,T,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ve(e,n,S,u,o,f)}bn(e,nt,it);return;case"option":for(var le in a)if(nt=a[le],a.hasOwnProperty(le)&&nt!=null&&!o.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:Ve(e,n,le,null,o,nt)}for(I in o)if(nt=o[I],it=a[I],o.hasOwnProperty(I)&&nt!==it&&(nt!=null||it!=null))switch(I){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ve(e,n,I,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)nt=a[re],a.hasOwnProperty(re)&&nt!=null&&!o.hasOwnProperty(re)&&Ve(e,n,re,null,o,nt);for(tt in o)if(nt=o[tt],it=a[tt],o.hasOwnProperty(tt)&&nt!==it&&(nt!=null||it!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ve(e,n,tt,nt,o,it)}return;default:if(au(n)){for(var ke in a)nt=a[ke],a.hasOwnProperty(ke)&&nt!==void 0&&!o.hasOwnProperty(ke)&&kf(e,n,ke,void 0,o,nt);for(ht in o)nt=o[ht],it=a[ht],!o.hasOwnProperty(ht)||nt===it||nt===void 0&&it===void 0||kf(e,n,ht,nt,o,it);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,nt);for(xt in o)nt=o[xt],it=a[xt],!o.hasOwnProperty(xt)||nt===it||nt==null&&it==null||Ve(e,n,xt,nt,o,it)}var Xf=null,Wf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function vy(){var e=window.event;return e&&e.type==="popstate"?e===Yf?!1:(Yf=e,!0):(Yf=null,!1)}var o_=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,l_=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof l_<"u"?function(e){return l_.resolve(null).then(e).catch(Sy)}:o_;function Sy(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function c_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Co(S.documentElement),a&2&&Co(S.body),a&4)for(a=S.head,Co(a),S=a.firstChild;S;){var T=S.nextSibling,I=S.nodeName;S[wi]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){e.removeChild(f),Bo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Bo(n)}function jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function My(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function Ey(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function by(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Kf=null;function u_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function f_(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Lr(e)}var di=new Map,d_=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=q.d;q.d={f:Ty,r:Ay,D:Ry,C:wy,L:Cy,m:Dy,X:Ly,S:Uy,M:Ny};function Ty(){var e=ea.f(),n=jl();return e||n}function Ay(e){var n=da(e);n!==null&&n.tag===5&&n.type==="form"?Lm(n):ea.r(e)}var ls=typeof document>"u"?null:document;function h_(e,n,a){var o=ls;if(o&&typeof n=="string"&&n){var u=xn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),d_.has(u)||(d_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),ln(n),o.head.appendChild(n)))}}function Ry(e){ea.D(e),h_("dns-prefetch",e,null)}function wy(e,n){ea.C(e,n),h_("preconnect",e,n)}function Cy(e,n,a){ea.L(e,n,a);var o=ls;if(o&&e&&n){var u='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xn(a.imageSizes)+'"]')):u+='[href="'+xn(e)+'"]';var f=u;switch(n){case"style":f=cs(e);break;case"script":f=us(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),Rn(n,"link",e),ln(n),o.head.appendChild(n)))}}function Dy(e,n){ea.m(e,n);var a=ls;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xn(o)+'"][href="'+xn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),Rn(o,"link",e),ln(o),a.head.appendChild(o)}}}function Uy(e,n,a){ea.S(e,n,a);var o=ls;if(o&&e){var u=ha(o).hoistableStyles,f=cs(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(Do(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Qf(e,a);var I=S=o.createElement("link");ln(I),Rn(I,"link",e),I._p=new Promise(function(tt,ht){I.onload=tt,I.onerror=ht}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ac(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function Ly(e,n){ea.X(e,n);var a=ls;if(a&&e){var o=ha(a).hoistableScripts,u=us(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0},n),(n=di.get(u))&&Jf(e,n),f=a.createElement("script"),ln(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ny(e,n){ea.M(e,n);var a=ls;if(a&&e){var o=ha(a).hoistableScripts,u=us(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&Jf(e,n),f=a.createElement("script"),ln(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function p_(e,n,a,o){var u=(u=dt.current)?ic(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=ha(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cs(a.href);var f=ha(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Do(e)))&&!f._p&&(S.instance=f,S.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||Oy(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=ha(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function cs(e){return'href="'+xn(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Oy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),ln(n),e.head.appendChild(n))}function us(e){return'[src="'+xn(e)+'"]'}function Uo(e){return"script[async]"+e}function g_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xn(a.href)+'"]');if(o)return n.instance=o,ln(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ln(o),Rn(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=cs(a.href);var f=e.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,ln(f),f;o=m_(a),(u=di.get(u))&&Qf(o,u),f=(e.ownerDocument||e).createElement("link"),ln(f);var S=f;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Rn(f,"link",o),n.state.loading|=4,ac(f,a.precedence,e),n.instance=f;case"script":return f=us(a.src),(u=e.querySelector(Uo(f)))?(n.instance=u,ln(u),u):(o=a,(u=di.get(f))&&(o=g({},a),Jf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ln(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function __(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[wi]||f[hn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function v_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Py(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Lo=null;function zy(){}function By(e,n,a){if(Lo===null)throw Error(r(475));var o=Lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=cs(a.href),f=e.querySelector(Do(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=sc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,ln(f);return}f=e.ownerDocument||e,a=m_(a),(u=di.get(u))&&Qf(a,u),f=f.createElement("link"),ln(f);var S=f;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Rn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=sc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Iy(){if(Lo===null)throw Error(r(475));var e=Lo;return e.stylesheets&&e.count===0&&$f(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&$f(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function sc(){if(this.count--,this.count===0){if(this.stylesheets)$f(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function $f(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(Fy,e),oc=null,sc.call(e))}function Fy(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var No={$$typeof:O,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Hy(e,n,a,o,u,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function y_(e,n,a,o,u,f,S,T,I,tt,ht,xt){return e=new Hy(e,n,a,S,T,I,tt,xt),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Nu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Bu(f),e}function S_(e){return e?(e=Gr,e):Gr}function M_(e,n,a,o,u,f){u=S_(u),o.context===null?o.context=u:o.pendingContext=u,o=_a(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=va(e,o,n),a!==null&&(ti(a,e,n),lo(a,e,n))}function E_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function td(e,n){E_(e,n),(e=e.alternate)&&E_(e,n)}function b_(e){if(e.tag===13){var n=Hr(e,67108864);n!==null&&ti(n,e,67108864),td(e,67108864)}}var lc=!0;function Gy(e,n,a,o){var u=P.T;P.T=null;var f=q.p;try{q.p=2,ed(e,n,a,o)}finally{q.p=f,P.T=u}}function Vy(e,n,a,o){var u=P.T;P.T=null;var f=q.p;try{q.p=8,ed(e,n,a,o)}finally{q.p=f,P.T=u}}function ed(e,n,a,o){if(lc){var u=nd(o);if(u===null)Vf(e,n,o,cc,a),A_(e,o);else if(Xy(u,e,n,a,o))o.stopPropagation();else if(A_(e,o),n&4&&-1<ky.indexOf(e)){for(;u!==null;){var f=da(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Jt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-It(S);T.entanglements[1]|=I,S&=~I}Ni(f),(Ie&6)===0&&(ql=Nt()+500,Ao(0))}}break;case 13:T=Hr(f,2),T!==null&&ti(T,f,2),jl(),td(f,2)}if(f=nd(o),f===null&&Vf(e,n,o,cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Vf(e,n,o,null,a)}}function nd(e){return e=su(e),id(e)}var cc=null;function id(e){if(cc=null,e=Gi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function T_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Te()){case Bt:return 2;case ee:return 8;case Pe:case be:return 32;case L:return 268435456;default:return 32}default:return 32}}var ad=!1,Ua=null,La=null,Na=null,Oo=new Map,Po=new Map,Oa=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=da(n),n!==null&&b_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Xy(e,n,a,o,u){switch(n){case"focusin":return Ua=zo(Ua,e,n,a,o,u),!0;case"dragenter":return La=zo(La,e,n,a,o,u),!0;case"mouseover":return Na=zo(Na,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,zo(Oo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,zo(Po.get(f)||null,e,n,a,o,u)),!0}return!1}function R_(e){var n=Gi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,_i(e.priority,function(){if(a.tag===13){var o=$n();o=ue(o);var u=Hr(a,o);u!==null&&ti(u,a,o),td(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ru=o,a.target.dispatchEvent(o),ru=null}else return n=da(a),n!==null&&b_(n),e.blockedOn=a,!1;n.shift()}return!0}function w_(e,n,a){uc(e)&&a.delete(n)}function Wy(){ad=!1,Ua!==null&&uc(Ua)&&(Ua=null),La!==null&&uc(La)&&(La=null),Na!==null&&uc(Na)&&(Na=null),Oo.forEach(w_),Po.forEach(w_)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,ad||(ad=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Wy)))}var dc=null;function C_(e){dc!==e&&(dc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(id(o||a)===null)continue;break}var f=da(a);f!==null&&(e.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Bo(e){function n(I){return fc(I,e)}Ua!==null&&fc(Ua,e),La!==null&&fc(La,e),Na!==null&&fc(Na,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[en]||null;if(typeof f=="function")S||C_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[en]||null)T=S.formAction;else if(id(u)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),C_(a)}}}function rd(e){this._internalRoot=e}hc.prototype.render=rd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();M_(a,o,e,n,null,null)},hc.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;M_(e.current,2,null,e,null,null),jl(),n[Ri]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=De();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&R_(e)}};var D_=t.version;if(D_!=="19.1.0")throw Error(r(527,D_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var qy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ft=pc.inject(qy),_t=pc}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=qm,f=Ym,S=jm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=y_(e,1,!1,null,null,a,o,u,f,S,T,null),e[Ri]=n.current,Gf(e),new rd(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=qm,S=Ym,T=jm,I=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=y_(e,1,!0,n,a??null,o,u,f,S,T,I,tt),n.context=S_(null),a=n.current,o=$n(),o=ue(o),u=_a(o),u.callback=null,va(a,u,o),a=o,n.current.lanes=a,Ft(n,a),Ni(n),e[Ri]=n.current,Gf(e),new hc(n)},Fo.version="19.1.0",Fo}var H_;function nS(){if(H_)return ld.exports;H_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ld.exports=eS(),ld.exports}var iS=nS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="179",aS=0,G_=1,rS=2,J0=1,$0=2,la=3,Za=0,Yn=1,Pi=2,qa=0,Ls=1,V_=2,k_=3,X_=4,sS=5,Er=100,oS=101,lS=102,cS=103,uS=104,fS=200,dS=201,hS=202,pS=203,Zd=204,Kd=205,mS=206,gS=207,_S=208,vS=209,xS=210,yS=211,SS=212,MS=213,ES=214,Qd=0,Jd=1,$d=2,Ps=3,th=4,eh=5,nh=6,ih=7,Xh=0,bS=1,TS=2,Ya=0,AS=1,RS=2,wS=3,CS=4,DS=5,US=6,LS=7,tv=300,zs=301,Bs=302,ah=303,rh=304,$c=306,sh=1e3,Tr=1001,oh=1002,Ai=1003,NS=1004,mc=1005,Bi=1006,dd=1007,Ar=1008,Fi=1009,ev=1010,nv=1011,Ko=1012,Wh=1013,Rr=1014,ua=1015,el=1016,qh=1017,Yh=1018,Qo=1020,iv=35902,av=1021,rv=1022,Ti=1023,Jo=1026,$o=1027,sv=1028,jh=1029,ov=1030,Zh=1031,Kh=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,lh=35840,ch=35841,uh=35842,fh=35843,dh=36196,hh=37492,ph=37496,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,Eh=37816,bh=37817,Th=37818,Ah=37819,Rh=37820,wh=37821,jc=36492,Ch=36494,Dh=36495,lv=36283,Uh=36284,Lh=36285,Nh=36286,OS=3200,PS=3201,cv=0,zS=1,Wa="",pi="srgb",Is="srgb-linear",Kc="linear",Xe="srgb",fs=7680,W_=519,BS=512,IS=513,FS=514,uv=515,HS=516,GS=517,VS=518,kS=519,Oh=35044,q_="300 es",Ii=2e3,Qc=2001;class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,Ph=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Ae(s,t,i){return Math.max(t,Math.min(i,s))}function XS(s,t){return(s%t+t)%t}function pd(s,t,i){return(1-i)*s+i*t}function zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pe{constructor(t=0,i=0){pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[d+0],y=c[d+1],E=c[d+2],R=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=R;return}if(v!==R||m!==x||p!==y||g!==E){let M=1-h;const _=m*x+p*y+g*E+v*R,z=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const B=Math.sqrt(O),V=Math.atan2(B,_*z);M=Math.sin(M*V)/B,h=Math.sin(h*V)/B}const w=h*z;if(m=m*M+x*w,p=p*M+y*w,g=g*M+E*w,v=v*M+R*w,M===1-h){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[d],x=c[d+1],y=c[d+2],E=c[d+3];return t[i]=h*E+g*v+m*y-p*x,t[i+1]=m*E+g*x+p*v-h*y,t[i+2]=p*E+g*y+h*x-m*v,t[i+3]=g*E-h*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(c/2),x=m(r/2),y=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v+x*y*E;break;case"YZX":this._x=x*g*v+p*y*E,this._y=p*y*v+x*g*E,this._z=p*g*E-x*y*v,this._w=p*g*v-x*y*E;break;case"XZY":this._x=x*g*v-p*y*E,this._y=p*y*v-x*g*E,this._z=p*g*E+x*y*v,this._w=p*g*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-r*p,this._z=c*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-c*l),v=2*(c*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-c*v,this.z=l+m*v+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return md.copy(this).projectOnVector(t),this.sub(md)}reflect(t){return this.sub(md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new K,Y_=new nl;class he{constructor(t,i,r,l,c,d,h,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],y=r[5],E=r[8],R=l[0],M=l[3],_=l[6],z=l[1],O=l[4],w=l[7],B=l[2],V=l[5],k=l[8];return c[0]=d*R+h*z+m*B,c[3]=d*M+h*O+m*V,c[6]=d*_+h*w+m*k,c[1]=p*R+g*z+v*B,c[4]=p*M+g*O+v*V,c[7]=p*_+g*w+v*k,c[2]=x*R+y*z+E*B,c[5]=x*M+y*O+E*V,c[8]=x*_+y*w+E*k,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*c*g+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*d-h*p,x=h*m-g*c,y=p*c-d*m,E=i*v+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*p-g*r)*R,t[2]=(h*r-l*d)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-h*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(d*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(gd.makeScale(t,i)),this}rotate(t){return this.premultiply(gd.makeRotation(-t)),this}translate(t,i){return this.premultiply(gd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gd=new he;function fv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function WS(){const s=tl("canvas");return s.style.display="block",s}const j_={};function Ns(s){s in j_||(j_[s]=!0,console.warn(s))}function qS(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Z_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const s={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xe&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xe&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Kc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Is]:{primaries:t,whitePoint:r,transfer:Kc,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const Oe=YS();function fa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ds;class jS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ds===void 0&&(ds=tl("canvas")),ds.width=t.width,ds.height=t.height;const l=ds.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=fa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ZS=0;class Qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ja(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(_d(l[d].image)):c.push(_d(l[d]))}else c=_d(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function _d(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KS=0;const vd=new K;class Pn extends Hs{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=Tr,l=Tr,c=Bi,d=Ar,h=Ti,m=Fi,p=Pn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ja(),this.name="",this.source=new Qh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sh:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sh:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=tv;Pn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,i=0,r=0,l=1){qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],E=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,w=(y+1)/2,B=(_+1)/2,V=(g+x)/4,k=(v+R)/4,G=(E+M)/4;return O>w&&O>B?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=V/r,c=k/r):w>B?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=V/l,c=G/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=k/c,l=G/c),this.set(r,l,c,i),this}let z=Math.sqrt((M-E)*(M-E)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(v-R)/z,this.z=(x-g)/z,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends Hs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new qe(0,0,t,i),this.scissorTest=!1,this.viewport=new qe(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends QS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class dv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Mi):Mi.fromBufferAttribute(c,d),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),_c.subVectors(this.max,Ho),hs.subVectors(t.a,Ho),ps.subVectors(t.b,Ho),ms.subVectors(t.c,Ho),za.subVectors(ps,hs),Ba.subVectors(ms,ps),pr.subVectors(hs,ms);let i=[0,-za.z,za.y,0,-Ba.z,Ba.y,0,-pr.z,pr.y,za.z,0,-za.x,Ba.z,0,-Ba.x,pr.z,0,-pr.x,-za.y,za.x,0,-Ba.y,Ba.x,0,-pr.y,pr.x,0];return!xd(i,hs,ps,ms,_c)||(i=[1,0,0,0,1,0,0,0,1],!xd(i,hs,ps,ms,_c))?!1:(vc.crossVectors(za,Ba),i=[vc.x,vc.y,vc.z],xd(i,hs,ps,ms,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new K,new K,new K,new K,new K,new K,new K,new K],Mi=new K,gc=new il,hs=new K,ps=new K,ms=new K,za=new K,Ba=new K,pr=new K,Ho=new K,_c=new K,vc=new K,mr=new K;function xd(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){mr.fromArray(s,c);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=t.dot(mr),p=i.dot(mr),g=r.dot(mr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const $S=new il,Go=new K,yd=new K;class tu{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):$S.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(yd)),this.expandByPoint(Go.copy(t.center).sub(yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new K,Sd=new K,xc=new K,Ia=new K,Md=new K,yc=new K,Ed=new K;class Jh{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Sd.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(Sd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(xc),h=Ia.dot(this.direction),m=-Ia.dot(xc),p=Ia.lengthSq(),g=Math.abs(1-d*d);let v,x,y,E;if(g>0)if(v=d*m-h,x=d*h-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const R=1/g;v*=R,x*=R,y=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=c,v=Math.max(0,-(d*x+h)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(d*x+h)),y=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-d*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(d*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=d>0?-c:c,v=Math.max(0,-(d*x+h)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Sd).addScaledVector(xc,x),y}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,r,l,c){Md.subVectors(i,t),yc.subVectors(r,t),Ed.crossVectors(Md,yc);let d=this.direction.dot(Ed),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ia.subVectors(this.origin,t);const m=h*this.direction.dot(yc.crossVectors(Ia,yc));if(m<0)return null;const p=h*this.direction.dot(Md.cross(Ia));if(p<0||m+p>d)return null;const g=-h*Ia.dot(Ed);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,c,d,h,m,p,g,v,x,y,E,R,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,g,v,x,y,E,R,M)}set(t,i,r,l,c,d,h,m,p,g,v,x,y,E,R,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/gs.setFromMatrixColumn(t,0).length(),c=1/gs.setFromMatrixColumn(t,1).length(),d=1/gs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=d*g,y=d*v,E=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=x-R*p,i[9]=-h*m,i[2]=R-x*p,i[6]=E+y*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,y=m*v,E=p*g,R=p*v;i[0]=x+R*h,i[4]=E*h-y,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=y*h-E,i[6]=R+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,y=m*v,E=p*g,R=p*v;i[0]=x-R*h,i[4]=-d*v,i[8]=E+y*h,i[1]=y+E*h,i[5]=d*g,i[9]=R-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,y=d*v,E=h*g,R=h*v;i[0]=m*g,i[4]=E*p-y,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,y=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=R-x*v,i[8]=E*v+y,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*v+E,i[10]=x-R*v}else if(t.order==="XZY"){const x=d*m,y=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=d*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=h*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,eM)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Fa.crossVectors(r,ei),Fa.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Fa.crossVectors(r,ei)),Fa.normalize(),Sc.crossVectors(ei,Fa),l[0]=Fa.x,l[4]=Sc.x,l[8]=ei.x,l[1]=Fa.y,l[5]=Sc.y,l[9]=ei.y,l[2]=Fa.z,l[6]=Sc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],y=r[13],E=r[2],R=r[6],M=r[10],_=r[14],z=r[3],O=r[7],w=r[11],B=r[15],V=l[0],k=l[4],G=l[8],C=l[12],D=l[1],H=l[5],lt=l[9],ot=l[13],ut=l[2],ct=l[6],P=l[10],q=l[14],F=l[3],St=l[7],U=l[11],$=l[15];return c[0]=d*V+h*D+m*ut+p*F,c[4]=d*k+h*H+m*ct+p*St,c[8]=d*G+h*lt+m*P+p*U,c[12]=d*C+h*ot+m*q+p*$,c[1]=g*V+v*D+x*ut+y*F,c[5]=g*k+v*H+x*ct+y*St,c[9]=g*G+v*lt+x*P+y*U,c[13]=g*C+v*ot+x*q+y*$,c[2]=E*V+R*D+M*ut+_*F,c[6]=E*k+R*H+M*ct+_*St,c[10]=E*G+R*lt+M*P+_*U,c[14]=E*C+R*ot+M*q+_*$,c[3]=z*V+O*D+w*ut+B*F,c[7]=z*k+O*H+w*ct+B*St,c[11]=z*G+O*lt+w*P+B*U,c[15]=z*C+O*ot+w*q+B*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],y=t[14],E=t[3],R=t[7],M=t[11],_=t[15];return E*(+c*m*v-l*p*v-c*h*x+r*p*x+l*h*y-r*m*y)+R*(+i*m*y-i*p*x+c*d*x-l*d*y+l*p*g-c*m*g)+M*(+i*p*v-i*h*y-c*d*v+r*d*y+c*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*d*v-r*d*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],y=t[11],E=t[12],R=t[13],M=t[14],_=t[15],z=v*M*p-R*x*p+R*m*y-h*M*y-v*m*_+h*x*_,O=E*x*p-g*M*p-E*m*y+d*M*y+g*m*_-d*x*_,w=g*R*p-E*v*p+E*h*y-d*R*y-g*h*_+d*v*_,B=E*v*m-g*R*m-E*h*x+d*R*x+g*h*M-d*v*M,V=i*z+r*O+l*w+c*B;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/V;return t[0]=z*k,t[1]=(R*x*c-v*M*c-R*l*y+r*M*y+v*l*_-r*x*_)*k,t[2]=(h*M*c-R*m*c+R*l*p-r*M*p-h*l*_+r*m*_)*k,t[3]=(v*m*c-h*x*c-v*l*p+r*x*p+h*l*y-r*m*y)*k,t[4]=O*k,t[5]=(g*M*c-E*x*c+E*l*y-i*M*y-g*l*_+i*x*_)*k,t[6]=(E*m*c-d*M*c-E*l*p+i*M*p+d*l*_-i*m*_)*k,t[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*y+i*m*y)*k,t[8]=w*k,t[9]=(E*v*c-g*R*c-E*r*y+i*R*y+g*r*_-i*v*_)*k,t[10]=(d*R*c-E*h*c+E*r*p-i*R*p-d*r*_+i*h*_)*k,t[11]=(g*h*c-d*v*c-g*r*p+i*v*p+d*r*y-i*h*y)*k,t[12]=B*k,t[13]=(g*R*l-E*v*l+E*r*x-i*R*x-g*r*M+i*v*M)*k,t[14]=(E*h*l-d*R*l-E*r*m+i*R*m+d*r*M-i*h*M)*k,t[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*x+i*h*x)*k,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,v=h+h,x=c*p,y=c*g,E=c*v,R=d*g,M=d*v,_=h*v,z=m*p,O=m*g,w=m*v,B=r.x,V=r.y,k=r.z;return l[0]=(1-(R+_))*B,l[1]=(y+w)*B,l[2]=(E-O)*B,l[3]=0,l[4]=(y-w)*V,l[5]=(1-(x+_))*V,l[6]=(M+z)*V,l[7]=0,l[8]=(E+O)*k,l[9]=(M-z)*k,l[10]=(1-(x+R))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=gs.set(l[0],l[1],l[2]).length();const d=gs.set(l[4],l[5],l[6]).length(),h=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,g=1/d,v=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let E,R;if(m)E=c/(d-c),R=d*c/(d-c);else if(h===Ii)E=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(h===Qc)E=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,R;if(m)E=1/(d-c),R=d/(d-c);else if(h===Ii)E=-2/(d-c),R=-(d+c)/(d-c);else if(h===Qc)E=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const gs=new K,Ei=new Qe,tM=new K(0,0,0),eM=new K(1,1,1),Fa=new K,Sc=new K,ei=new K,Q_=new Qe,J_=new nl;class Hi{constructor(t=0,i=0,r=0,l=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Q_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return J_.setFromEuler(this),this.setFromQuaternion(J_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nM=0;const $_=new K,_s=new nl,aa=new Qe,Mc=new K,Vo=new K,iM=new K,aM=new nl,t0=new K(1,0,0),e0=new K(0,1,0),n0=new K(0,0,1),i0={type:"added"},rM={type:"removed"},vs={type:"childadded",child:null},bd={type:"childremoved",child:null};class zn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new K,i=new Hi,r=new nl,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new he}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(t0,t)}rotateY(t){return this.rotateOnAxis(e0,t)}rotateZ(t){return this.rotateOnAxis(n0,t)}translateOnAxis(t,i){return $_.copy(t).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t0,t)}translateY(t){return this.translateOnAxis(e0,t)}translateZ(t){return this.translateOnAxis(n0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Mc.copy(t):Mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Vo,Mc,this.up):aa.lookAt(Mc,Vo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(aa),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i0),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rM),bd.child=t,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i0),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,iM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,aM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),v=d(t.shapes),x=d(t.skeletons),y=d(t.animations),E=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new K(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new K,ra=new K,Td=new K,sa=new K,xs=new K,ys=new K,a0=new K,Ad=new K,Rd=new K,wd=new K,Cd=new qe,Dd=new qe,Ud=new qe;class mi{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){bi.subVectors(l,i),ra.subVectors(r,i),Td.subVectors(t,i);const d=bi.dot(bi),h=bi.dot(ra),m=bi.dot(Td),p=ra.dot(ra),g=ra.dot(Td),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-h*g)*x,E=(d*g-h*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(d,sa.y),m.addScaledVector(h,sa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Cd.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),Cd.fromBufferAttribute(t,i),Dd.fromBufferAttribute(t,r),Ud.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Cd,c.x),d.addScaledVector(Dd,c.y),d.addScaledVector(Ud,c.z),d}static isFrontFacing(t,i,r,l){return bi.subVectors(r,i),ra.subVectors(t,i),bi.cross(ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),bi.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;xs.subVectors(l,r),ys.subVectors(c,r),Ad.subVectors(t,r);const m=xs.dot(Ad),p=ys.dot(Ad);if(m<=0&&p<=0)return i.copy(r);Rd.subVectors(t,l);const g=xs.dot(Rd),v=ys.dot(Rd);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(xs,d);wd.subVectors(t,c);const y=xs.dot(wd),E=ys.dot(wd);if(E>=0&&y<=E)return i.copy(c);const R=y*p-m*E;if(R<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(ys,h);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return a0.subVectors(c,l),h=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(a0,h);const _=1/(M+R+x);return d=R*_,h=x*_,i.copy(r).addScaledVector(xs,d).addScaledVector(ys,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Ld(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Oe.workingColorSpace){if(t=XS(t,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ld(d,c,t+1/3),this.g=Ld(d,c,t),this.b=Ld(d,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=hv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Oe.workingToColorSpace(On.copy(this),t),Math.round(Ae(On.r*255,0,255))*65536+Math.round(Ae(On.g*255,0,255))*256+Math.round(Ae(On.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=pi){Oe.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(Ec);const r=pd(Ha.h,Ec.h,i),l=pd(Ha.s,Ec.s,i),c=pd(Ha.l,Ec.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new we;we.NAMES=hv;let sM=0;class Cr extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Ls,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==Za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Kd&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pv extends Cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new K,bc=new pe;let oM=0;class ai{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Oh,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=zi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zi(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zi(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zi(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}}class mv extends ai{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class gv extends ai{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ri extends ai{constructor(t,i,r){super(new Float32Array(t),i,r)}}let lM=0;const hi=new Qe,Nd=new zn,Ss=new K,ni=new il,ko=new il,En=new K;class gi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?gv:mv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new he().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return Nd.lookAt(t),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ri(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ni.min,ko.min),ni.expandByPoint(En),En.addVectors(ni.max,ko.max),ni.expandByPoint(En)):(ni.expandByPoint(ko.min),ni.expandByPoint(ko.max))}ni.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)En.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)En.fromBufferAttribute(h,p),m&&(Ss.fromBufferAttribute(t,p),En.add(Ss)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let G=0;G<r.count;G++)h[G]=new K,m[G]=new K;const p=new K,g=new K,v=new K,x=new pe,y=new pe,E=new pe,R=new K,M=new K;function _(G,C,D){p.fromBufferAttribute(r,G),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),x.fromBufferAttribute(c,G),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,D),g.sub(p),v.sub(p),y.sub(x),E.sub(x);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),h[G].add(R),h[C].add(R),h[D].add(R),m[G].add(M),m[C].add(M),m[D].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let G=0,C=z.length;G<C;++G){const D=z[G],H=D.start,lt=D.count;for(let ot=H,ut=H+lt;ot<ut;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const O=new K,w=new K,B=new K,V=new K;function k(G){B.fromBufferAttribute(l,G),V.copy(B);const C=h[G];O.copy(C),O.sub(B.multiplyScalar(B.dot(C))).normalize(),w.crossVectors(V,C);const H=w.dot(m[G])<0?-1:1;d.setXYZW(G,O.x,O.y,O.z,H)}for(let G=0,C=z.length;G<C;++G){const D=z[G],H=D.start,lt=D.count;for(let ot=H,ut=H+lt;ot<ut;ot+=3)k(t.getX(ot+0)),k(t.getX(ot+1)),k(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new K,c=new K,d=new K,h=new K,m=new K,p=new K,g=new K,v=new K;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),R=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,M),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*g;for(let _=0;_<g;_++)x[E++]=p[y++]}return new ai(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new gi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=t(x,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r0=new Qe,gr=new Jh,Tc=new tu,s0=new K,Ac=new K,Rc=new K,wc=new K,Od=new K,Cc=new K,o0=new K,Dc=new K;class wn extends zn{constructor(t=new gi,i=new pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Cc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(Od.fromBufferAttribute(v,t),d?Cc.addScaledVector(Od,g):Cc.addScaledVector(Od.sub(i),g))}i.add(Cc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(c),gr.copy(t.ray).recast(t.near),!(Tc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Tc,s0)===null||gr.origin.distanceToSquared(s0)>(t.far-t.near)**2))&&(r0.copy(c).invert(),gr.copy(t.ray).applyMatrix4(r0),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,R=x.length;E<R;E++){const M=x[E],_=d[M.materialIndex],z=Math.max(M.start,y.start),O=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let w=z,B=O;w<B;w+=3){const V=h.getX(w),k=h.getX(w+1),G=h.getX(w+2);l=Uc(this,_,t,r,p,g,v,V,k,G),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const z=h.getX(M),O=h.getX(M+1),w=h.getX(M+2);l=Uc(this,d,t,r,p,g,v,z,O,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,R=x.length;E<R;E++){const M=x[E],_=d[M.materialIndex],z=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=z,B=O;w<B;w+=3){const V=w,k=w+1,G=w+2;l=Uc(this,_,t,r,p,g,v,V,k,G),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const z=M,O=M+1,w=M+2;l=Uc(this,d,t,r,p,g,v,z,O,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function cM(s,t,i,r,l,c,d,h){let m;if(t.side===Yn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===Za,h),m===null)return null;Dc.copy(h),Dc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:s}}function Uc(s,t,i,r,l,c,d,h,m,p){s.getVertexPosition(h,Ac),s.getVertexPosition(m,Rc),s.getVertexPosition(p,wc);const g=cM(s,t,i,r,Ac,Rc,wc,o0);if(g){const v=new K;mi.getBarycoord(o0,Ac,Rc,wc,v),l&&(g.uv=mi.getInterpolatedAttribute(l,h,m,p,v,new pe)),c&&(g.uv1=mi.getInterpolatedAttribute(c,h,m,p,v,new pe)),d&&(g.normal=mi.getInterpolatedAttribute(d,h,m,p,v,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new K,materialIndex:0};mi.getNormal(Ac,Rc,wc,x.normal),g.face=x,g.barycoord=v}return g}class al extends gi{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,t,d,c,0),E("z","y","x",1,-1,r,i,-t,d,c,1),E("x","z","y",1,1,t,r,i,l,d,2),E("x","z","y",1,-1,t,r,-i,l,d,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ri(p,3)),this.setAttribute("normal",new ri(g,3)),this.setAttribute("uv",new ri(v,2));function E(R,M,_,z,O,w,B,V,k,G,C){const D=w/k,H=B/G,lt=w/2,ot=B/2,ut=V/2,ct=k+1,P=G+1;let q=0,F=0;const St=new K;for(let U=0;U<P;U++){const $=U*H-ot;for(let vt=0;vt<ct;vt++){const gt=vt*D-lt;St[R]=gt*z,St[M]=$*O,St[_]=ut,p.push(St.x,St.y,St.z),St[R]=0,St[M]=0,St[_]=V>0?1:-1,g.push(St.x,St.y,St.z),v.push(vt/k),v.push(1-U/G),q+=1}}for(let U=0;U<G;U++)for(let $=0;$<k;$++){const vt=x+$+ct*U,gt=x+$+ct*(U+1),Et=x+($+1)+ct*(U+1),et=x+($+1)+ct*U;m.push(vt,gt,et),m.push(gt,Et,et),F+=6}h.addGroup(y,F,C),y+=F,x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Gn(s){const t={};for(let i=0;i<s.length;i++){const r=Fs(s[i]);for(const l in r)t[l]=r[l]}return t}function uM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function _v(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const fM={clone:Fs,merge:Gn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ka extends Cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class vv extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new K,l0=new pe,c0=new pe;class ii extends vv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ph*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,l0,c0),i.subVectors(c0,l0)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(hd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Es=1;class pM extends zn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ms,Es,t,i);l.layers=this.layers,this.add(l);const c=new ii(Ms,Es,t,i);c.layers=this.layers,this.add(c);const d=new ii(Ms,Es,t,i);d.layers=this.layers,this.add(d);const h=new ii(Ms,Es,t,i);h.layers=this.layers,this.add(h);const m=new ii(Ms,Es,t,i);m.layers=this.layers,this.add(m);const p=new ii(Ms,Es,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class xv extends Pn{constructor(t=[],i=zs,r,l,c,d,h,m,p,g){super(t,i,r,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mM extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new al(5,5,5),c=new Ka({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:qa});c.uniforms.tEquirect.value=i;const d=new wn(l,c),h=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Bi),new pM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Lc extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gM={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Lc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class _M extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class vM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=ja()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new K;class Jc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=zi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=zi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=zi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=zi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=zi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new ai(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yv extends Cr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bs;const Xo=new K,Ts=new K,As=new K,Rs=new pe,Wo=new pe,Sv=new Qe,Nc=new K,qo=new K,Oc=new K,u0=new pe,zd=new pe,f0=new pe;class xM extends zn{constructor(t=new yv){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new gi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new vM(i,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Jc(r,3,0,!1)),bs.setAttribute("uv",new Jc(r,2,3,!1))}this.geometry=bs,this.material=t,this.center=new pe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),Sv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Pc(Nc.set(-.5,-.5,0),As,d,Ts,l,c),Pc(qo.set(.5,-.5,0),As,d,Ts,l,c),Pc(Oc.set(.5,.5,0),As,d,Ts,l,c),u0.set(0,0),zd.set(1,0),f0.set(1,1);let h=t.ray.intersectTriangle(Nc,qo,Oc,!1,Xo);if(h===null&&(Pc(qo.set(-.5,.5,0),As,d,Ts,l,c),zd.set(0,1),h=t.ray.intersectTriangle(Nc,Oc,qo,!1,Xo),h===null))return;const m=t.ray.origin.distanceTo(Xo);m<t.near||m>t.far||i.push({distance:m,point:Xo.clone(),uv:mi.getInterpolation(Xo,Nc,qo,Oc,u0,zd,f0,new pe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pc(s,t,i,r,l,c){Rs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Wo.x=c*Rs.x-l*Rs.y,Wo.y=l*Rs.x+c*Rs.y):Wo.copy(Rs),s.copy(t),s.x+=Wo.x,s.y+=Wo.y,s.applyMatrix4(Sv)}const Bd=new K,yM=new K,SM=new he;class Sr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Bd.subVectors(r,i).cross(yM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Bd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||SM.getNormalMatrix(t),l=this.coplanarPoint(Bd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new tu,MM=new pe(.5,.5),zc=new K;class tp{constructor(t=new Sr,i=new Sr,r=new Sr,l=new Sr,c=new Sr,d=new Sr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],y=c[7],E=c[8],R=c[9],M=c[10],_=c[11],z=c[12],O=c[13],w=c[14],B=c[15];if(l[0].setComponents(p-d,y-g,_-E,B-z).normalize(),l[1].setComponents(p+d,y+g,_+E,B+z).normalize(),l[2].setComponents(p+h,y+v,_+R,B+O).normalize(),l[3].setComponents(p-h,y-v,_-R,B-O).normalize(),r)l[4].setComponents(m,x,M,w).normalize(),l[5].setComponents(p-m,y-x,_-M,B-w).normalize();else if(l[4].setComponents(p-m,y-x,_-M,B-w).normalize(),i===Ii)l[5].setComponents(p+m,y+x,_+M,B+w).normalize();else if(i===Qc)l[5].setComponents(m,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=MM.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(zc.x=l.normal.x>0?t.max.x:t.min.x,zc.y=l.normal.y>0?t.max.y:t.min.y,zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mv extends Cr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const d0=new Qe,zh=new Jh,Bc=new tu,Ic=new K;class EM extends zn{constructor(t=new gi,i=new Mv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bc.copy(r.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;d0.copy(l).invert(),zh.copy(t.ray).applyMatrix4(d0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let E=x,R=y;E<R;E++){const M=p.getX(E);Ic.fromBufferAttribute(v,M),h0(Ic,M,m,l,t,i,this)}}else{const x=Math.max(0,d.start),y=Math.min(v.count,d.start+d.count);for(let E=x,R=y;E<R;E++)Ic.fromBufferAttribute(v,E),h0(Ic,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function h0(s,t,i,r,l,c,d){const h=zh.distanceSqToPoint(s);if(h<i){const m=new K;zh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class bM extends Pn{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ev extends Pn{constructor(t,i,r=Rr,l,c,d,h=Ai,m=Ai,p,g=Jo,v=1){if(g!==Jo&&g!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eu extends gi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=i/m,y=[],E=[],R=[],M=[];for(let _=0;_<g;_++){const z=_*x-d;for(let O=0;O<p;O++){const w=O*v-c;E.push(w,-z,0),R.push(0,0,1),M.push(O/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let z=0;z<h;z++){const O=z+p*_,w=z+p*(_+1),B=z+1+p*(_+1),V=z+1+p*_;y.push(O,w,V),y.push(w,B,V)}this.setIndex(y),this.setAttribute("position",new ri(E,3)),this.setAttribute("normal",new ri(R,3)),this.setAttribute("uv",new ri(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class ep extends gi{constructor(t=.5,i=1,r=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let v=t;const x=(i-t)/l,y=new K,E=new pe;for(let R=0;R<=l;R++){for(let M=0;M<=r;M++){const _=c+M/r*d;y.x=v*Math.cos(_),y.y=v*Math.sin(_),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,g.push(E.x,E.y)}v+=x}for(let R=0;R<l;R++){const M=R*(r+1);for(let _=0;_<r;_++){const z=_+M,O=z,w=z+r+1,B=z+r+2,V=z+1;h.push(O,w,V),h.push(w,B,V)}}this.setIndex(h),this.setAttribute("position",new ri(m,3)),this.setAttribute("normal",new ri(p,3)),this.setAttribute("uv",new ri(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ep(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ca extends gi{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const g=[],v=new K,x=new K,y=[],E=[],R=[],M=[];for(let _=0;_<=r;_++){const z=[],O=_/r;let w=0;_===0&&d===0?w=.5/i:_===r&&m===Math.PI&&(w=-.5/i);for(let B=0;B<=i;B++){const V=B/i;v.x=-t*Math.cos(l+V*c)*Math.sin(d+O*h),v.y=t*Math.cos(d+O*h),v.z=t*Math.sin(l+V*c)*Math.sin(d+O*h),E.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),M.push(V+w,1-O),z.push(p++)}g.push(z)}for(let _=0;_<r;_++)for(let z=0;z<i;z++){const O=g[_][z+1],w=g[_][z],B=g[_+1][z],V=g[_+1][z+1];(_!==0||d>0)&&y.push(O,w,V),(_!==r-1||m<Math.PI)&&y.push(w,B,V)}this.setIndex(y),this.setAttribute("position",new ri(E,3)),this.setAttribute("normal",new ri(R,3)),this.setAttribute("uv",new ri(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Va extends Cr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cv,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class TM extends Cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class AM extends Cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Id={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class RM{constructor(t,i,r){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,d,h),c=!0},this.itemEnd=function(g){d++,l.onProgress!==void 0&&l.onProgress(g,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const y=p[v],E=p[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const wM=new RM;class np{constructor(t){this.manager=t!==void 0?t:wM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}np.DEFAULT_MATERIAL_NAME="__DEFAULT";const ws=new WeakMap;class CM extends np{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,d=Id.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(d),c.manager.itemEnd(t)},0);else{let v=ws.get(d);v===void 0&&(v=[],ws.set(d,v)),v.push({onLoad:i,onError:l})}return d}const h=tl("img");function m(){g(),i&&i(this);const v=ws.get(this)||[];for(let x=0;x<v.length;x++){const y=v[x];y.onLoad&&y.onLoad(this)}ws.delete(this),c.manager.itemEnd(t)}function p(v){g(),l&&l(v),Id.remove(`image:${t}`);const x=ws.get(this)||[];for(let y=0;y<x.length;y++){const E=x[y];E.onError&&E.onError(v)}ws.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Id.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class DM extends np{constructor(t){super(t)}load(t,i,r,l){const c=new Pn,d=new CM(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class bv extends zn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Fd=new Qe,p0=new K,m0=new K;class UM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;p0.setFromMatrixPosition(t.matrixWorld),i.position.copy(p0),m0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(m0),i.updateMatrixWorld(),Fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const g0=new Qe,Yo=new K,Hd=new K;class LM extends UM{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Yo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Yo),Hd.copy(r.position),Hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Hd),r.updateMatrixWorld(),l.makeTranslation(-Yo.x,-Yo.y,-Yo.z),g0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(g0,r.coordinateSystem,r.reversedDepth)}}class NM extends bv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new LM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class OM extends vv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PM extends bv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class zM extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const _0=new Qe;class BM{constructor(t,i,r=0,l=1/0){this.ray=new Jh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new $h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return _0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_0),this}intersectObject(t,i=!0,r=[]){return Bh(t,this,r,i),r.sort(v0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Bh(t[l],this,r,i);return r.sort(v0),r}}function v0(s,t){return s.distance-t.distance}function Bh(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,h=c.length;d<h;d++)Bh(c[d],t,i,!0)}}function x0(s,t,i,r){const l=IM(r);switch(i){case av:return s*t;case sv:return s*t/l.components*l.byteLength;case jh:return s*t/l.components*l.byteLength;case ov:return s*t*2/l.components*l.byteLength;case Zh:return s*t*2/l.components*l.byteLength;case rv:return s*t*3/l.components*l.byteLength;case Ti:return s*t*4/l.components*l.byteLength;case Kh:return s*t*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:case fh:return Math.max(s,16)*Math.max(t,8)/4;case lh:case uh:return Math.max(s,8)*Math.max(t,8)/2;case dh:case hh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ph:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case bh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Th:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case jc:case Ch:case Dh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lv:case Uh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Lh:case Nh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IM(s){switch(s){case Fi:case ev:return{byteLength:1,components:1};case Ko:case nv:case el:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Rr:case Wh:case ua:return{byteLength:4,components:1};case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function FM(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],R=v[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const R=v[y];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
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
#endif`,VM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
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
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$M=`#ifdef USE_IRIDESCENCE
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
#endif`,tE=`#ifdef USE_BUMPMAP
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
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cE=`#define PI 3.141592653589793
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
} // validated`,uE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fE=`vec3 transformedNormal = objectNormal;
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
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gE="gl_FragColor = linearToOutputTexel( gl_FragColor );",_E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vE=`#ifdef USE_ENVMAP
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
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
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
}`,wE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UE=`uniform bool receiveShadow;
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
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,NE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BE=`PhysicalMaterial material;
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
#endif`,IE=`struct PhysicalMaterial {
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
}`,FE=`
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
#endif`,HE=`#if defined( RE_IndirectDiffuse )
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
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZE=`#if defined( USE_POINTS_UV )
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
#endif`,KE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lb=`#ifdef USE_NORMALMAP
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
#endif`,cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bb=`float getShadowMask() {
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
}`,Tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ab=`#ifdef USE_SKINNING
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
#endif`,Rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#ifdef USE_TRANSMISSION
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hb=`uniform sampler2D t2D;
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`#include <common>
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
}`,qb=`#if DEPTH_PACKING == 3200
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
}`,Yb=`#define DISTANCE
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
}`,jb=`#define DISTANCE
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`uniform float scale;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,$b=`#include <common>
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
}`,tT=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define MATCAP
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
}`,aT=`#define MATCAP
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
}`,rT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,oT=`#define PHONG
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
}`,lT=`#define PHONG
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
}`,cT=`#define STANDARD
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
}`,uT=`#define STANDARD
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
}`,fT=`#define TOON
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
}`,dT=`#define TOON
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
}`,pT=`uniform vec3 diffuse;
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
}`,mT=`#include <common>
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
}`,gT=`uniform vec3 color;
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
}`,_T=`uniform float rotation;
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
}`,vT=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:HM,alphahash_pars_fragment:GM,alphamap_fragment:VM,alphamap_pars_fragment:kM,alphatest_fragment:XM,alphatest_pars_fragment:WM,aomap_fragment:qM,aomap_pars_fragment:YM,batching_pars_vertex:jM,batching_vertex:ZM,begin_vertex:KM,beginnormal_vertex:QM,bsdfs:JM,iridescence_fragment:$M,bumpmap_pars_fragment:tE,clipping_planes_fragment:eE,clipping_planes_pars_fragment:nE,clipping_planes_pars_vertex:iE,clipping_planes_vertex:aE,color_fragment:rE,color_pars_fragment:sE,color_pars_vertex:oE,color_vertex:lE,common:cE,cube_uv_reflection_fragment:uE,defaultnormal_vertex:fE,displacementmap_pars_vertex:dE,displacementmap_vertex:hE,emissivemap_fragment:pE,emissivemap_pars_fragment:mE,colorspace_fragment:gE,colorspace_pars_fragment:_E,envmap_fragment:vE,envmap_common_pars_fragment:xE,envmap_pars_fragment:yE,envmap_pars_vertex:SE,envmap_physical_pars_fragment:LE,envmap_vertex:ME,fog_vertex:EE,fog_pars_vertex:bE,fog_fragment:TE,fog_pars_fragment:AE,gradientmap_pars_fragment:RE,lightmap_pars_fragment:wE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:DE,lights_pars_begin:UE,lights_toon_fragment:NE,lights_toon_pars_fragment:OE,lights_phong_fragment:PE,lights_phong_pars_fragment:zE,lights_physical_fragment:BE,lights_physical_pars_fragment:IE,lights_fragment_begin:FE,lights_fragment_maps:HE,lights_fragment_end:GE,logdepthbuf_fragment:VE,logdepthbuf_pars_fragment:kE,logdepthbuf_pars_vertex:XE,logdepthbuf_vertex:WE,map_fragment:qE,map_pars_fragment:YE,map_particle_fragment:jE,map_particle_pars_fragment:ZE,metalnessmap_fragment:KE,metalnessmap_pars_fragment:QE,morphinstance_vertex:JE,morphcolor_vertex:$E,morphnormal_vertex:tb,morphtarget_pars_vertex:eb,morphtarget_vertex:nb,normal_fragment_begin:ib,normal_fragment_maps:ab,normal_pars_fragment:rb,normal_pars_vertex:sb,normal_vertex:ob,normalmap_pars_fragment:lb,clearcoat_normal_fragment_begin:cb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:fb,iridescence_pars_fragment:db,opaque_fragment:hb,packing:pb,premultiplied_alpha_fragment:mb,project_vertex:gb,dithering_fragment:_b,dithering_pars_fragment:vb,roughnessmap_fragment:xb,roughnessmap_pars_fragment:yb,shadowmap_pars_fragment:Sb,shadowmap_pars_vertex:Mb,shadowmap_vertex:Eb,shadowmask_pars_fragment:bb,skinbase_vertex:Tb,skinning_pars_vertex:Ab,skinning_vertex:Rb,skinnormal_vertex:wb,specularmap_fragment:Cb,specularmap_pars_fragment:Db,tonemapping_fragment:Ub,tonemapping_pars_fragment:Lb,transmission_fragment:Nb,transmission_pars_fragment:Ob,uv_pars_fragment:Pb,uv_pars_vertex:zb,uv_vertex:Bb,worldpos_vertex:Ib,background_vert:Fb,background_frag:Hb,backgroundCube_vert:Gb,backgroundCube_frag:Vb,cube_vert:kb,cube_frag:Xb,depth_vert:Wb,depth_frag:qb,distanceRGBA_vert:Yb,distanceRGBA_frag:jb,equirect_vert:Zb,equirect_frag:Kb,linedashed_vert:Qb,linedashed_frag:Jb,meshbasic_vert:$b,meshbasic_frag:tT,meshlambert_vert:eT,meshlambert_frag:nT,meshmatcap_vert:iT,meshmatcap_frag:aT,meshnormal_vert:rT,meshnormal_frag:sT,meshphong_vert:oT,meshphong_frag:lT,meshphysical_vert:cT,meshphysical_frag:uT,meshtoon_vert:fT,meshtoon_frag:dT,points_vert:hT,points_frag:pT,shadow_vert:mT,shadow_frag:gT,sprite_vert:_T,sprite_frag:vT},zt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Oi={basic:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new we(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Gn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Gn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new we(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Gn([zt.points,zt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Gn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Gn([zt.common,zt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Gn([zt.sprite,zt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Gn([zt.common,zt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Gn([zt.lights,zt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Oi.physical={uniforms:Gn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Fc={r:0,b:0,g:0},vr=new Hi,xT=new Qe;function yT(s,t,i,r,l,c,d){const h=new we(0);let m=c===!0?0:1,p,g,v=null,x=0,y=null;function E(O){let w=O.isScene===!0?O.background:null;return w&&w.isTexture&&(w=(O.backgroundBlurriness>0?i:t).get(w)),w}function R(O){let w=!1;const B=E(O);B===null?_(h,m):B&&B.isColor&&(_(B,1),w=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(O,w){const B=E(w);B&&(B.isCubeTexture||B.mapping===$c)?(g===void 0&&(g=new wn(new al(1,1,1),new Ka({name:"BackgroundCubeMaterial",uniforms:Fs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,k,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(w.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(vr)),g.material.toneMapped=Oe.getTransfer(B.colorSpace)!==Xe,(v!==B||x!==B.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,y=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new wn(new eu(2,2),new Ka({name:"BackgroundMaterial",uniforms:Fs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(B.colorSpace)!==Xe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,y=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,w){O.getRGB(Fc,_v(s)),r.buffers.color.setClear(Fc.r,Fc.g,Fc.b,w,d)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,w=1){h.set(O),m=w,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:R,addToRenderList:M,dispose:z}}function ST(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(D,H,lt,ot,ut){let ct=!1;const P=v(ot,lt,H);c!==P&&(c=P,p(c.object)),ct=y(D,ot,lt,ut),ct&&E(D,ot,lt,ut),ut!==null&&t.update(ut,s.ELEMENT_ARRAY_BUFFER),(ct||d)&&(d=!1,w(D,H,lt,ot),ut!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function v(D,H,lt){const ot=lt.wireframe===!0;let ut=r[D.id];ut===void 0&&(ut={},r[D.id]=ut);let ct=ut[H.id];ct===void 0&&(ct={},ut[H.id]=ct);let P=ct[ot];return P===void 0&&(P=x(m()),ct[ot]=P),P}function x(D){const H=[],lt=[],ot=[];for(let ut=0;ut<i;ut++)H[ut]=0,lt[ut]=0,ot[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:lt,attributeDivisors:ot,object:D,attributes:{},index:null}}function y(D,H,lt,ot){const ut=c.attributes,ct=H.attributes;let P=0;const q=lt.getAttributes();for(const F in q)if(q[F].location>=0){const U=ut[F];let $=ct[F];if($===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return c.attributesNum!==P||c.index!==ot}function E(D,H,lt,ot){const ut={},ct=H.attributes;let P=0;const q=lt.getAttributes();for(const F in q)if(q[F].location>=0){let U=ct[F];U===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(U=D.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ut[F]=$,P++}c.attributes=ut,c.attributesNum=P,c.index=ot}function R(){const D=c.newAttributes;for(let H=0,lt=D.length;H<lt;H++)D[H]=0}function M(D){_(D,0)}function _(D,H){const lt=c.newAttributes,ot=c.enabledAttributes,ut=c.attributeDivisors;lt[D]=1,ot[D]===0&&(s.enableVertexAttribArray(D),ot[D]=1),ut[D]!==H&&(s.vertexAttribDivisor(D,H),ut[D]=H)}function z(){const D=c.newAttributes,H=c.enabledAttributes;for(let lt=0,ot=H.length;lt<ot;lt++)H[lt]!==D[lt]&&(s.disableVertexAttribArray(lt),H[lt]=0)}function O(D,H,lt,ot,ut,ct,P){P===!0?s.vertexAttribIPointer(D,H,lt,ut,ct):s.vertexAttribPointer(D,H,lt,ot,ut,ct)}function w(D,H,lt,ot){R();const ut=ot.attributes,ct=lt.getAttributes(),P=H.defaultAttributeValues;for(const q in ct){const F=ct[q];if(F.location>=0){let St=ut[q];if(St===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),St!==void 0){const U=St.normalized,$=St.itemSize,vt=t.get(St);if(vt===void 0)continue;const gt=vt.buffer,Et=vt.type,et=vt.bytesPerElement,dt=Et===s.INT||Et===s.UNSIGNED_INT||St.gpuType===Wh;if(St.isInterleavedBufferAttribute){const pt=St.data,Dt=pt.stride,Ht=St.offset;if(pt.isInstancedInterleavedBuffer){for(let $t=0;$t<F.locationSize;$t++)_(F.location+$t,pt.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let $t=0;$t<F.locationSize;$t++)M(F.location+$t);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let $t=0;$t<F.locationSize;$t++)O(F.location+$t,$/F.locationSize,Et,U,Dt*et,(Ht+$/F.locationSize*$t)*et,dt)}else{if(St.isInstancedBufferAttribute){for(let pt=0;pt<F.locationSize;pt++)_(F.location+pt,St.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let pt=0;pt<F.locationSize;pt++)M(F.location+pt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let pt=0;pt<F.locationSize;pt++)O(F.location+pt,$/F.locationSize,Et,U,$*et,$/F.locationSize*pt*et,dt)}}else if(P!==void 0){const U=P[q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(F.location,U);break;case 3:s.vertexAttrib3fv(F.location,U);break;case 4:s.vertexAttrib4fv(F.location,U);break;default:s.vertexAttrib1fv(F.location,U)}}}}z()}function B(){G();for(const D in r){const H=r[D];for(const lt in H){const ot=H[lt];for(const ut in ot)g(ot[ut].object),delete ot[ut];delete H[lt]}delete r[D]}}function V(D){if(r[D.id]===void 0)return;const H=r[D.id];for(const lt in H){const ot=H[lt];for(const ut in ot)g(ot[ut].object),delete ot[ut];delete H[lt]}delete r[D.id]}function k(D){for(const H in r){const lt=r[H];if(lt[D.id]===void 0)continue;const ot=lt[D.id];for(const ut in ot)g(ot[ut].object),delete ot[ut];delete lt[D.id]}}function G(){C(),d=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:V,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:M,disableUnusedAttributes:z}}function MT(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function m(p,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)d(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*x[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ET(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(k){return!(k!==Ti&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const G=k===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==Fi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ua&&!G)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:w,vertexTextures:B,maxSamples:V}}function bT(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Sr,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const z=c?0:r,O=z*4;let w=_.clippingState||null;m.value=w,w=g(E,x,O,y);for(let B=0;B!==O;++B)w[B]=i[B];_.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,y,E){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const _=y+R*4,z=x.matrixWorldInverse;h.getNormalMatrix(z),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,w=y;O!==R;++O,w+=4)d.copy(v[O]).applyMatrix4(z,h),d.normal.toArray(M,w),M[w+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function TT(s){let t=new WeakMap;function i(d,h){return h===ah?d.mapping=zs:h===rh&&(d.mapping=Bs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ah||h===rh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new mM(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Us=4,y0=[.125,.215,.35,.446,.526,.582],br=20,Gd=new OM,S0=new we;let Vd=null,kd=0,Xd=0,Wd=!1;const Mr=(1+Math.sqrt(5))/2,Cs=1/Mr,M0=[new K(-Mr,Cs,0),new K(Mr,Cs,0),new K(-Cs,0,Mr),new K(Cs,0,Mr),new K(0,Mr,-Cs),new K(0,Mr,Cs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],AT=new K;class E0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=AT}=c;Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vd,kd,Xd),this._renderer.xr.enabled=Wd,t.scissorTest=!1,Hc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:el,format:Ti,colorSpace:Is,depthBuffer:!1},l=b0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(c)),this._blurMaterial=wT(c,t,i)}return l}_compileMaterial(t){const i=new wn(this._lodPlanes[0],t);this._renderer.compile(i,Gd)}_sceneToCubeUV(t,i,r,l,c){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(S0),v.toneMapping=Ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new pv({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new wn(new al,R);let _=!1;const z=t.background;z?z.isColor&&(R.color.copy(z),t.background=null,_=!0):(R.color.copy(S0),_=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):w===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const B=this._cubeSize;Hc(l,w*B,O>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===zs||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new wn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Hc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Gd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=M0[(l-c-1)%M0.length];this._blur(t,c-1,c,d,h)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new wn(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*br-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):br;M>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${br}`);const _=[];let z=0;for(let k=0;k<br;++k){const G=k/R,C=Math.exp(-G*G/2);_.push(C),k===0?z+=C:k<M&&(z+=2*C)}for(let k=0;k<_.length;k++)_[k]=_[k]/z;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-r;const w=this._sizeLods[l],B=3*w*(l>O-Us?l-O+Us:0),V=4*(this._cubeSize-w);Hc(i,B,V,3*w,2*w),m.setRenderTarget(i),m.render(v,Gd)}}function RT(s){const t=[],i=[],r=[];let l=s;const c=s-Us+1+y0.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-Us?m=y0[d-s+Us-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,R=3,M=2,_=1,z=new Float32Array(R*E*y),O=new Float32Array(M*E*y),w=new Float32Array(_*E*y);for(let V=0;V<y;V++){const k=V%3*2/3-1,G=V>2?0:-1,C=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];z.set(C,R*E*V),O.set(x,M*E*V);const D=[V,V,V,V,V,V];w.set(D,_*E*V)}const B=new gi;B.setAttribute("position",new ai(z,R)),B.setAttribute("uv",new ai(O,M)),B.setAttribute("faceIndex",new ai(w,_)),t.push(B),l>Us&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function b0(s,t,i){const r=new wr(s,t,i);return r.texture.mapping=$c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function wT(s,t,i){const r=new Float32Array(br),l=new K(0,1,0);return new Ka({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ip(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function T0(){return new Ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ip(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function A0(){return new Ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function ip(){return`

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
	`}function CT(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===ah||m===rh,g=m===zs||m===Bs;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new E0(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new E0(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function DT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ns("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function UT(s,t,i,r){const l={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",d),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],s.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,E=v.attributes.position;let R=0;if(y!==null){const z=y.array;R=y.version;for(let O=0,w=z.length;O<w;O+=3){const B=z[O+0],V=z[O+1],k=z[O+2];x.push(B,V,V,k,k,B)}}else if(E!==void 0){const z=E.array;R=E.version;for(let O=0,w=z.length/3-1;O<w;O+=3){const B=O+0,V=O+1,k=O+2;x.push(B,V,V,k,k,B)}}else return;const M=new(fv(x)?gv:mv)(x,1);M.version=R;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function LT(s,t,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,y){s.drawElements(r,y,c,x*d),i.update(y,r,1)}function p(x,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,x*d,E),i.update(y,r,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];i.update(M,r,1)}function v(x,y,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/d,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,R,0,E);let _=0;for(let z=0;z<E;z++)_+=y[z]*R[z];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function NT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function OT(s,t,i){const r=new WeakMap,l=new qe;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let D=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var y=D;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),R===!0&&(w=2),M===!0&&(w=3);let B=h.attributes.position.count*w,V=1;B>t.maxTextureSize&&(V=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const k=new Float32Array(B*V*4*v),G=new dv(k,B,V,v);G.type=ua,G.needsUpdate=!0;const C=w*4;for(let H=0;H<v;H++){const lt=_[H],ot=z[H],ut=O[H],ct=B*V*4*H;for(let P=0;P<lt.count;P++){const q=P*C;E===!0&&(l.fromBufferAttribute(lt,P),k[ct+q+0]=l.x,k[ct+q+1]=l.y,k[ct+q+2]=l.z,k[ct+q+3]=0),R===!0&&(l.fromBufferAttribute(ot,P),k[ct+q+4]=l.x,k[ct+q+5]=l.y,k[ct+q+6]=l.z,k[ct+q+7]=0),M===!0&&(l.fromBufferAttribute(ut,P),k[ct+q+8]=l.x,k[ct+q+9]=l.y,k[ct+q+10]=l.z,k[ct+q+11]=ut.itemSize===4?l.w:1)}}x={count:v,texture:G,size:new pe(B,V)},r.set(h,x),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function PT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Av=new Pn,R0=new Ev(1,1),Rv=new dv,wv=new JS,Cv=new xv,w0=[],C0=[],D0=new Float32Array(16),U0=new Float32Array(9),L0=new Float32Array(4);function Gs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=w0[l];if(c===void 0&&(c=new Float32Array(l),w0[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function _n(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function vn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function nu(s,t){let i=C0[t];i===void 0&&(i=new Int32Array(t),C0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function zT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function BT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2fv(this.addr,t),vn(i,t)}}function IT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;s.uniform3fv(this.addr,t),vn(i,t)}}function FT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4fv(this.addr,t),vn(i,t)}}function HT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;L0.set(r),s.uniformMatrix2fv(this.addr,!1,L0),vn(i,r)}}function GT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;U0.set(r),s.uniformMatrix3fv(this.addr,!1,U0),vn(i,r)}}function VT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;D0.set(r),s.uniformMatrix4fv(this.addr,!1,D0),vn(i,r)}}function kT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function XT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2iv(this.addr,t),vn(i,t)}}function WT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3iv(this.addr,t),vn(i,t)}}function qT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4iv(this.addr,t),vn(i,t)}}function YT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function jT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2uiv(this.addr,t),vn(i,t)}}function ZT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3uiv(this.addr,t),vn(i,t)}}function KT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4uiv(this.addr,t),vn(i,t)}}function QT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(R0.compareFunction=uv,c=R0):c=Av,i.setTexture2D(t||c,l)}function JT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||wv,l)}function $T(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Cv,l)}function tA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Rv,l)}function eA(s){switch(s){case 5126:return zT;case 35664:return BT;case 35665:return IT;case 35666:return FT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return kT;case 35667:case 35671:return XT;case 35668:case 35672:return WT;case 35669:case 35673:return qT;case 5125:return YT;case 36294:return jT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return tA}}function nA(s,t){s.uniform1fv(this.addr,t)}function iA(s,t){const i=Gs(t,this.size,2);s.uniform2fv(this.addr,i)}function aA(s,t){const i=Gs(t,this.size,3);s.uniform3fv(this.addr,i)}function rA(s,t){const i=Gs(t,this.size,4);s.uniform4fv(this.addr,i)}function sA(s,t){const i=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function oA(s,t){const i=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function lA(s,t){const i=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function cA(s,t){s.uniform1iv(this.addr,t)}function uA(s,t){s.uniform2iv(this.addr,t)}function fA(s,t){s.uniform3iv(this.addr,t)}function dA(s,t){s.uniform4iv(this.addr,t)}function hA(s,t){s.uniform1uiv(this.addr,t)}function pA(s,t){s.uniform2uiv(this.addr,t)}function mA(s,t){s.uniform3uiv(this.addr,t)}function gA(s,t){s.uniform4uiv(this.addr,t)}function _A(s,t,i){const r=this.cache,l=t.length,c=nu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Av,c[d])}function vA(s,t,i){const r=this.cache,l=t.length,c=nu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||wv,c[d])}function xA(s,t,i){const r=this.cache,l=t.length,c=nu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Cv,c[d])}function yA(s,t,i){const r=this.cache,l=t.length,c=nu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Rv,c[d])}function SA(s){switch(s){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return yA}}class MA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=eA(i.type)}}class EA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=SA(i.type)}}class bA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function N0(s,t){s.seq.push(t),s.map[t.id]=t}function TA(s,t,i){const r=s.name,l=r.length;for(qd.lastIndex=0;;){const c=qd.exec(r),d=qd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){N0(i,p===void 0?new MA(h,s,t):new EA(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new bA(h),N0(i,v)),i=v}}}class Zc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);TA(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function O0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const AA=37297;let RA=0;function wA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const P0=new he;function CA(s){Oe._getMatrix(P0,Oe.workingColorSpace,s);const t=`mat3( ${P0.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(s)){case Kc:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function z0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+wA(s.getShaderSource(t),h)}else return c}function DA(s,t){const i=CA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function UA(s,t){let i;switch(t){case AS:i="Linear";break;case RS:i="Reinhard";break;case wS:i="Cineon";break;case CS:i="ACESFilmic";break;case US:i="AgX";break;case LS:i="Neutral";break;case DS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new K;function LA(){Oe.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function OA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function PA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Zo(s){return s!==""}function B0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function I0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(s){return s.replace(zA,IA)}const BA=new Map;function IA(s,t){let i=_e[t];if(i===void 0){const r=BA.get(t);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ih(i)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(s){return s.replace(FA,HA)}function HA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function H0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function GA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===J0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$0?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===la&&(t="SHADOWMAP_TYPE_VSM"),t}function VA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Bs:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function XA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xh:t="ENVMAP_BLENDING_MULTIPLY";break;case bS:t="ENVMAP_BLENDING_MIX";break;case TS:t="ENVMAP_BLENDING_ADD";break}return t}function WA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function qA(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=GA(i),p=VA(i),g=kA(i),v=XA(i),x=WA(i),y=NA(i),E=OA(c),R=l.createProgram();let M,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),_.length>0&&(_+=`
`)):(M=[H0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),_=[H0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?_e.tonemapping_pars_fragment:"",i.toneMapping!==Ya?UA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,DA("linearToOutputTexel",i.outputColorSpace),LA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),d=Ih(d),d=B0(d,i),d=I0(d,i),h=Ih(h),h=B0(h,i),h=I0(h,i),d=F0(d),h=F0(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=z+M+d,w=z+_+h,B=O0(l,l.VERTEX_SHADER,O),V=O0(l,l.FRAGMENT_SHADER,w);l.attachShader(R,B),l.attachShader(R,V),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function k(H){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(B)||"",ut=l.getShaderInfoLog(V)||"",ct=lt.trim(),P=ot.trim(),q=ut.trim();let F=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,B,V);else{const U=z0(l,B,"vertex"),$=z0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+U+`
`+$)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(P===""||q==="")&&(St=!1);St&&(H.diagnostics={runnable:F,programLog:ct,vertexShader:{log:P,prefix:M},fragmentShader:{log:q,prefix:_}})}l.deleteShader(B),l.deleteShader(V),G=new Zc(l,R),C=PA(l,R)}let G;this.getUniforms=function(){return G===void 0&&k(this),G};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(R,AA)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=V,this}let YA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new ZA(t),i.set(t,r)),r}}class ZA{constructor(t){this.id=YA++,this.code=t,this.usedTimes=0}}function KA(s,t,i,r,l,c,d){const h=new $h,m=new jA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,D,H,lt,ot){const ut=lt.fog,ct=ot.geometry,P=C.isMeshStandardMaterial?lt.environment:null,q=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),F=q&&q.mapping===$c?q.image.height:null,St=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ct.morphAttributes.position!==void 0&&(vt=1),ct.morphAttributes.normal!==void 0&&(vt=2),ct.morphAttributes.color!==void 0&&(vt=3);let gt,Et,et,dt;if(St){const De=Oi[St];gt=De.vertexShader,Et=De.fragmentShader}else gt=C.vertexShader,Et=C.fragmentShader,m.update(C),et=m.getVertexShaderID(C),dt=m.getFragmentShaderID(C);const pt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),Ht=ot.isInstancedMesh===!0,$t=ot.isBatchedMesh===!0,Ce=!!C.map,Mt=!!C.matcap,N=!!q,ae=!!C.aoMap,Wt=!!C.lightMap,te=!!C.bumpMap,Nt=!!C.normalMap,Te=!!C.displacementMap,Bt=!!C.emissiveMap,ee=!!C.metalnessMap,Pe=!!C.roughnessMap,be=C.anisotropy>0,L=C.clearcoat>0,b=C.dispersion>0,Q=C.iridescence>0,ft=C.sheen>0,_t=C.transmission>0,st=be&&!!C.anisotropyMap,It=L&&!!C.clearcoatMap,wt=L&&!!C.clearcoatNormalMap,jt=L&&!!C.clearcoatRoughnessMap,Kt=Q&&!!C.iridescenceMap,bt=Q&&!!C.iridescenceThicknessMap,Ot=ft&&!!C.sheenColorMap,Jt=ft&&!!C.sheenRoughnessMap,Yt=!!C.specularMap,Ut=!!C.specularColorMap,fe=!!C.specularIntensityMap,W=_t&&!!C.transmissionMap,Rt=_t&&!!C.thicknessMap,Ct=!!C.gradientMap,Ft=!!C.alphaMap,Tt=C.alphaTest>0,yt=!!C.alphaHash,qt=!!C.extensions;let ue=Ya;C.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Be={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:Et,defines:C.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:$t,batchingColor:$t&&ot._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&ot.instanceColor!==null,instancingMorph:Ht&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Is,alphaToCoverage:!!C.alphaToCoverage,map:Ce,matcap:Mt,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:F,aoMap:ae,lightMap:Wt,bumpMap:te,normalMap:Nt,displacementMap:x&&Te,emissiveMap:Bt,normalMapObjectSpace:Nt&&C.normalMapType===zS,normalMapTangentSpace:Nt&&C.normalMapType===cv,metalnessMap:ee,roughnessMap:Pe,anisotropy:be,anisotropyMap:st,clearcoat:L,clearcoatMap:It,clearcoatNormalMap:wt,clearcoatRoughnessMap:jt,dispersion:b,iridescence:Q,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:ft,sheenColorMap:Ot,sheenRoughnessMap:Jt,specularMap:Yt,specularColorMap:Ut,specularIntensityMap:fe,transmission:_t,transmissionMap:W,thicknessMap:Rt,gradientMap:Ct,opaque:C.transparent===!1&&C.blending===Ls&&C.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Tt,alphaHash:yt,combine:C.combine,mapUv:Ce&&R(C.map.channel),aoMapUv:ae&&R(C.aoMap.channel),lightMapUv:Wt&&R(C.lightMap.channel),bumpMapUv:te&&R(C.bumpMap.channel),normalMapUv:Nt&&R(C.normalMap.channel),displacementMapUv:Te&&R(C.displacementMap.channel),emissiveMapUv:Bt&&R(C.emissiveMap.channel),metalnessMapUv:ee&&R(C.metalnessMap.channel),roughnessMapUv:Pe&&R(C.roughnessMap.channel),anisotropyMapUv:st&&R(C.anisotropyMap.channel),clearcoatMapUv:It&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:wt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&R(C.sheenRoughnessMap.channel),specularMapUv:Yt&&R(C.specularMap.channel),specularColorMapUv:Ut&&R(C.specularColorMap.channel),specularIntensityMapUv:fe&&R(C.specularIntensityMap.channel),transmissionMapUv:W&&R(C.transmissionMap.channel),thicknessMapUv:Rt&&R(C.thicknessMap.channel),alphaMapUv:Ft&&R(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Nt||be),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ct.attributes.uv&&(Ce||Ft),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:ot.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ce&&C.map.isVideoTexture===!0&&Oe.getTransfer(C.map.colorSpace)===Xe,decodeVideoTextureEmissive:Bt&&C.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(C.emissiveMap.colorSpace)===Xe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Pi,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:qt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&C.extensions.multiDraw===!0||$t)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function _(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)D.push(H),D.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(z(D,C),O(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function z(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function O(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function w(C){const D=E[C.type];let H;if(D){const lt=Oi[D];H=fM.clone(lt.uniforms)}else H=C.uniforms;return H}function B(C,D){let H;for(let lt=0,ot=g.length;lt<ot;lt++){const ut=g[lt];if(ut.cacheKey===D){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new qA(s,D,C,c),g.push(H)),H}function V(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function k(C){m.remove(C)}function G(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:w,acquireProgram:B,releaseProgram:V,releaseShaderCache:k,programs:g,dispose:G}}function QA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function JA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function G0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function V0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(v,x,y,E,R,M){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:R,group:M},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=R,_.group=M),t++,_}function h(v,x,y,E,R,M){const _=d(v,x,y,E,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,E,R,M){const _=d(v,x,y,E,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||JA),r.length>1&&r.sort(x||G0),l.length>1&&l.sort(x||G0)}function g(){for(let v=t,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function $A(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new V0,s.set(r,[d])):l>=c.length?(d=new V0,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function t1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new we};break;case"SpotLight":i={position:new K,direction:new K,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function e1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let n1=0;function i1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function a1(s){const t=new t1,i=e1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new Qe,d=new Qe;function h(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,E=0,R=0,M=0,_=0,z=0,O=0,w=0,B=0,V=0,k=0;p.sort(i1);for(let C=0,D=p.length;C<D;C++){const H=p[C],lt=H.color,ot=H.intensity,ut=H.distance,ct=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=lt.r*ot,v+=lt.g*ot,x+=lt.b*ot;else if(H.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],ot);k++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,F=i.get(H);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,r.directionalShadow[y]=F,r.directionalShadowMap[y]=ct,r.directionalShadowMatrix[y]=H.shadow.matrix,z++}r.directional[y]=P,y++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(lt).multiplyScalar(ot),P.distance=ut,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[R]=P;const q=H.shadow;if(H.map&&(r.spotLightMap[B]=H.map,B++,q.updateMatrices(H),H.castShadow&&V++),r.spotLightMatrix[R]=q.matrix,H.castShadow){const F=i.get(H);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,r.spotShadow[R]=F,r.spotShadowMap[R]=ct,w++}R++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(lt).multiplyScalar(ot),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=P,M++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const q=H.shadow,F=i.get(H);F.shadowIntensity=q.intensity,F.shadowBias=q.bias,F.shadowNormalBias=q.normalBias,F.shadowRadius=q.radius,F.shadowMapSize=q.mapSize,F.shadowCameraNear=q.camera.near,F.shadowCameraFar=q.camera.far,r.pointShadow[E]=F,r.pointShadowMap[E]=ct,r.pointShadowMatrix[E]=H.shadow.matrix,O++}r.point[E]=P,E++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(ot),P.groundColor.copy(H.groundColor).multiplyScalar(ot),r.hemi[_]=P,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==y||G.pointLength!==E||G.spotLength!==R||G.rectAreaLength!==M||G.hemiLength!==_||G.numDirectionalShadows!==z||G.numPointShadows!==O||G.numSpotShadows!==w||G.numSpotMaps!==B||G.numLightProbes!==k)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=w+B-V,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=k,G.directionalLength=y,G.pointLength=E,G.spotLength=R,G.rectAreaLength=M,G.hemiLength=_,G.numDirectionalShadows=z,G.numPointShadows=O,G.numSpotShadows=w,G.numSpotMaps=B,G.numLightProbes=k,r.version=n1++)}function m(p,g){let v=0,x=0,y=0,E=0,R=0;const M=g.matrixWorldInverse;for(let _=0,z=p.length;_<z;_++){const O=p[_];if(O.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(O.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),d.identity(),c.copy(O.matrixWorld),c.premultiply(M),d.extractRotation(c),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),E++}else if(O.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:r}}function k0(s){const t=new a1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function r1(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new k0(s),t.set(l,[h])):c>=d.length?(h=new k0(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function l1(s,t,i){let r=new tp;const l=new pe,c=new pe,d=new qe,h=new TM({depthPacking:PS}),m=new AM,p={},g=i.maxTextureSize,v={[Za]:Yn,[Yn]:Za,[Pi]:Pi},x=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:s1,fragmentShader:o1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new wn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let _=this.type;this.render=function(V,k,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const C=s.getRenderTarget(),D=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(qa),lt.buffers.depth.getReversed()?lt.buffers.color.setClear(0,0,0,0):lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ot=_!==la&&this.type===la,ut=_===la&&this.type!==la;for(let ct=0,P=V.length;ct<P;ct++){const q=V[ct],F=q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const St=F.getFrameExtents();if(l.multiply(St),c.copy(F.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,F.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,F.mapSize.y=c.y)),F.map===null||ot===!0||ut===!0){const $=this.type!==la?{minFilter:Ai,magFilter:Ai}:{};F.map!==null&&F.map.dispose(),F.map=new wr(l.x,l.y,$),F.map.texture.name=q.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const U=F.getViewportCount();for(let $=0;$<U;$++){const vt=F.getViewport($);d.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),lt.viewport(d),F.updateMatrices(q,$),r=F.getFrustum(),w(k,G,F.camera,q,this.type)}F.isPointLightShadow!==!0&&this.type===la&&z(F,G),F.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(C,D,H)};function z(V,k){const G=t.update(R);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new wr(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(k,null,G,x,R,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(k,null,G,y,R,null)}function O(V,k,G,C){let D=null;const H=G.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)D=H;else if(D=G.isPointLight===!0?m:h,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const lt=D.uuid,ot=k.uuid;let ut=p[lt];ut===void 0&&(ut={},p[lt]=ut);let ct=ut[ot];ct===void 0&&(ct=D.clone(),ut[ot]=ct,k.addEventListener("dispose",B)),D=ct}if(D.visible=k.visible,D.wireframe=k.wireframe,C===la?D.side=k.shadowSide!==null?k.shadowSide:k.side:D.side=k.shadowSide!==null?k.shadowSide:v[k.side],D.alphaMap=k.alphaMap,D.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,D.map=k.map,D.clipShadows=k.clipShadows,D.clippingPlanes=k.clippingPlanes,D.clipIntersection=k.clipIntersection,D.displacementMap=k.displacementMap,D.displacementScale=k.displacementScale,D.displacementBias=k.displacementBias,D.wireframeLinewidth=k.wireframeLinewidth,D.linewidth=k.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const lt=s.properties.get(D);lt.light=G}return D}function w(V,k,G,C,D){if(V.visible===!1)return;if(V.layers.test(k.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&D===la)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,V.matrixWorld);const ot=t.update(V),ut=V.material;if(Array.isArray(ut)){const ct=ot.groups;for(let P=0,q=ct.length;P<q;P++){const F=ct[P],St=ut[F.materialIndex];if(St&&St.visible){const U=O(V,St,C,D);V.onBeforeShadow(s,V,k,G,ot,U,F),s.renderBufferDirect(G,null,ot,U,V,F),V.onAfterShadow(s,V,k,G,ot,U,F)}}}else if(ut.visible){const ct=O(V,ut,C,D);V.onBeforeShadow(s,V,k,G,ot,ct,null),s.renderBufferDirect(G,null,ot,ct,V,null),V.onAfterShadow(s,V,k,G,ot,ct,null)}}const lt=V.children;for(let ot=0,ut=lt.length;ot<ut;ot++)w(lt[ot],k,G,C,D)}function B(V){V.target.removeEventListener("dispose",B);for(const G in p){const C=p[G],D=V.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const c1={[Qd]:Jd,[$d]:nh,[th]:ih,[Ps]:eh,[Jd]:Qd,[nh]:$d,[ih]:th,[eh]:Ps};function u1(s,t){function i(){let W=!1;const Rt=new qe;let Ct=null;const Ft=new qe(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!W&&(s.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,yt,qt,ue,Be){Be===!0&&(Tt*=ue,yt*=ue,qt*=ue),Rt.set(Tt,yt,qt,ue),Ft.equals(Rt)===!1&&(s.clearColor(Tt,yt,qt,ue),Ft.copy(Rt))},reset:function(){W=!1,Ct=null,Ft.set(-1,0,0,0)}}}function r(){let W=!1,Rt=!1,Ct=null,Ft=null,Tt=null;return{setReversed:function(yt){if(Rt!==yt){const qt=t.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Rt=yt;const ue=Tt;Tt=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(yt){yt?pt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(yt){Ct!==yt&&!W&&(s.depthMask(yt),Ct=yt)},setFunc:function(yt){if(Rt&&(yt=c1[yt]),Ft!==yt){switch(yt){case Qd:s.depthFunc(s.NEVER);break;case Jd:s.depthFunc(s.ALWAYS);break;case $d:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case th:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case nh:s.depthFunc(s.GREATER);break;case ih:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ft=yt}},setLocked:function(yt){W=yt},setClear:function(yt){Tt!==yt&&(Rt&&(yt=1-yt),s.clearDepth(yt),Tt=yt)},reset:function(){W=!1,Ct=null,Ft=null,Tt=null,Rt=!1}}}function l(){let W=!1,Rt=null,Ct=null,Ft=null,Tt=null,yt=null,qt=null,ue=null,Be=null;return{setTest:function(De){W||(De?pt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(De){Rt!==De&&!W&&(s.stencilMask(De),Rt=De)},setFunc:function(De,_i,dn){(Ct!==De||Ft!==_i||Tt!==dn)&&(s.stencilFunc(De,_i,dn),Ct=De,Ft=_i,Tt=dn)},setOp:function(De,_i,dn){(yt!==De||qt!==_i||ue!==dn)&&(s.stencilOp(De,_i,dn),yt=De,qt=_i,ue=dn)},setLocked:function(De){W=De},setClear:function(De){Be!==De&&(s.clearStencil(De),Be=De)},reset:function(){W=!1,Rt=null,Ct=null,Ft=null,Tt=null,yt=null,qt=null,ue=null,Be=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,R=!1,M=null,_=null,z=null,O=null,w=null,B=null,V=null,k=new we(0,0,0),G=0,C=!1,D=null,H=null,lt=null,ot=null,ut=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=q>=2);let St=null,U={};const $=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),gt=new qe().fromArray($),Et=new qe().fromArray(vt);function et(W,Rt,Ct,Ft){const Tt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(W,yt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<Ct;qt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(Rt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return yt}const dt={};dt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),pt(s.DEPTH_TEST),d.setFunc(Ps),te(!1),Nt(G_),pt(s.CULL_FACE),ae(qa);function pt(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function Dt(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Ht(W,Rt){return v[W]!==Rt?(s.bindFramebuffer(W,Rt),v[W]=Rt,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Rt),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function $t(W,Rt){let Ct=y,Ft=!1;if(W){Ct=x.get(Rt),Ct===void 0&&(Ct=[],x.set(Rt,Ct));const Tt=W.textures;if(Ct.length!==Tt.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,qt=Tt.length;yt<qt;yt++)Ct[yt]=s.COLOR_ATTACHMENT0+yt;Ct.length=Tt.length,Ft=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Ft=!0);Ft&&s.drawBuffers(Ct)}function Ce(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const Mt={[Er]:s.FUNC_ADD,[oS]:s.FUNC_SUBTRACT,[lS]:s.FUNC_REVERSE_SUBTRACT};Mt[cS]=s.MIN,Mt[uS]=s.MAX;const N={[fS]:s.ZERO,[dS]:s.ONE,[hS]:s.SRC_COLOR,[Zd]:s.SRC_ALPHA,[xS]:s.SRC_ALPHA_SATURATE,[_S]:s.DST_COLOR,[mS]:s.DST_ALPHA,[pS]:s.ONE_MINUS_SRC_COLOR,[Kd]:s.ONE_MINUS_SRC_ALPHA,[vS]:s.ONE_MINUS_DST_COLOR,[gS]:s.ONE_MINUS_DST_ALPHA,[yS]:s.CONSTANT_COLOR,[SS]:s.ONE_MINUS_CONSTANT_COLOR,[MS]:s.CONSTANT_ALPHA,[ES]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(W,Rt,Ct,Ft,Tt,yt,qt,ue,Be,De){if(W===qa){R===!0&&(Dt(s.BLEND),R=!1);return}if(R===!1&&(pt(s.BLEND),R=!0),W!==sS){if(W!==M||De!==C){if((_!==Er||w!==Er)&&(s.blendEquation(s.FUNC_ADD),_=Er,w=Er),De)switch(W){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case V_:s.blendFunc(s.ONE,s.ONE);break;case k_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case X_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case V_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case k_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}z=null,O=null,B=null,V=null,k.set(0,0,0),G=0,M=W,C=De}return}Tt=Tt||Rt,yt=yt||Ct,qt=qt||Ft,(Rt!==_||Tt!==w)&&(s.blendEquationSeparate(Mt[Rt],Mt[Tt]),_=Rt,w=Tt),(Ct!==z||Ft!==O||yt!==B||qt!==V)&&(s.blendFuncSeparate(N[Ct],N[Ft],N[yt],N[qt]),z=Ct,O=Ft,B=yt,V=qt),(ue.equals(k)===!1||Be!==G)&&(s.blendColor(ue.r,ue.g,ue.b,Be),k.copy(ue),G=Be),M=W,C=!1}function Wt(W,Rt){W.side===Pi?Dt(s.CULL_FACE):pt(s.CULL_FACE);let Ct=W.side===Yn;Rt&&(Ct=!Ct),te(Ct),W.blending===Ls&&W.transparent===!1?ae(qa):ae(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Bt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(W){D!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),D=W)}function Nt(W){W!==aS?(pt(s.CULL_FACE),W!==H&&(W===G_?s.cullFace(s.BACK):W===rS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),H=W}function Te(W){W!==lt&&(P&&s.lineWidth(W),lt=W)}function Bt(W,Rt,Ct){W?(pt(s.POLYGON_OFFSET_FILL),(ot!==Rt||ut!==Ct)&&(s.polygonOffset(Rt,Ct),ot=Rt,ut=Ct)):Dt(s.POLYGON_OFFSET_FILL)}function ee(W){W?pt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function Pe(W){W===void 0&&(W=s.TEXTURE0+ct-1),St!==W&&(s.activeTexture(W),St=W)}function be(W,Rt,Ct){Ct===void 0&&(St===null?Ct=s.TEXTURE0+ct-1:Ct=St);let Ft=U[Ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},U[Ct]=Ft),(Ft.type!==W||Ft.texture!==Rt)&&(St!==Ct&&(s.activeTexture(Ct),St=Ct),s.bindTexture(W,Rt||dt[W]),Ft.type=W,Ft.texture=Rt)}function L(){const W=U[St];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(W){gt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Jt(W){Et.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Et.copy(W))}function Yt(W,Rt){let Ct=p.get(Rt);Ct===void 0&&(Ct=new WeakMap,p.set(Rt,Ct));let Ft=Ct.get(W);Ft===void 0&&(Ft=s.getUniformBlockIndex(Rt,W.name),Ct.set(W,Ft))}function Ut(W,Rt){const Ft=p.get(Rt).get(W);m.get(Rt)!==Ft&&(s.uniformBlockBinding(Rt,Ft,W.__bindingPointIndex),m.set(Rt,Ft))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},St=null,U={},v={},x=new WeakMap,y=[],E=null,R=!1,M=null,_=null,z=null,O=null,w=null,B=null,V=null,k=new we(0,0,0),G=0,C=!1,D=null,H=null,lt=null,ot=null,ut=null,gt.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:pt,disable:Dt,bindFramebuffer:Ht,drawBuffers:$t,useProgram:Ce,setBlending:ae,setMaterial:Wt,setFlipSided:te,setCullFace:Nt,setLineWidth:Te,setPolygonOffset:Bt,setScissorTest:ee,activeTexture:Pe,bindTexture:be,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:Q,texImage2D:Kt,texImage3D:bt,updateUBOMapping:Yt,uniformBlockBinding:Ut,texStorage2D:wt,texStorage3D:jt,texSubImage2D:ft,texSubImage3D:_t,compressedTexSubImage2D:st,compressedTexSubImage3D:It,scissor:Ot,viewport:Jt,reset:fe}}function f1(s,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):tl("canvas")}function R(L,b,Q){let ft=1;const _t=be(L);if((_t.width>Q||_t.height>Q)&&(ft=Q/Math.max(_t.width,_t.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const st=Math.floor(ft*_t.width),It=Math.floor(ft*_t.height);v===void 0&&(v=E(st,It));const wt=b?E(st,It):v;return wt.width=st,wt.height=It,wt.getContext("2d").drawImage(L,0,0,st,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+st+"x"+It+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(L,b,Q,ft,_t=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let st=b;if(b===s.RED&&(Q===s.FLOAT&&(st=s.R32F),Q===s.HALF_FLOAT&&(st=s.R16F),Q===s.UNSIGNED_BYTE&&(st=s.R8)),b===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.R8UI),Q===s.UNSIGNED_SHORT&&(st=s.R16UI),Q===s.UNSIGNED_INT&&(st=s.R32UI),Q===s.BYTE&&(st=s.R8I),Q===s.SHORT&&(st=s.R16I),Q===s.INT&&(st=s.R32I)),b===s.RG&&(Q===s.FLOAT&&(st=s.RG32F),Q===s.HALF_FLOAT&&(st=s.RG16F),Q===s.UNSIGNED_BYTE&&(st=s.RG8)),b===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.RG8UI),Q===s.UNSIGNED_SHORT&&(st=s.RG16UI),Q===s.UNSIGNED_INT&&(st=s.RG32UI),Q===s.BYTE&&(st=s.RG8I),Q===s.SHORT&&(st=s.RG16I),Q===s.INT&&(st=s.RG32I)),b===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(st=s.RGB16UI),Q===s.UNSIGNED_INT&&(st=s.RGB32UI),Q===s.BYTE&&(st=s.RGB8I),Q===s.SHORT&&(st=s.RGB16I),Q===s.INT&&(st=s.RGB32I)),b===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(st=s.RGBA16UI),Q===s.UNSIGNED_INT&&(st=s.RGBA32UI),Q===s.BYTE&&(st=s.RGBA8I),Q===s.SHORT&&(st=s.RGBA16I),Q===s.INT&&(st=s.RGBA32I)),b===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(st=s.RGB9_E5),b===s.RGBA){const It=_t?Kc:Oe.getTransfer(ft);Q===s.FLOAT&&(st=s.RGBA32F),Q===s.HALF_FLOAT&&(st=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(st=It===Xe?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function w(L,b){let Q;return L?b===null||b===Rr||b===Qo?Q=s.DEPTH24_STENCIL8:b===ua?Q=s.DEPTH32F_STENCIL8:b===Ko&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rr||b===Qo?Q=s.DEPTH_COMPONENT24:b===ua?Q=s.DEPTH_COMPONENT32F:b===Ko&&(Q=s.DEPTH_COMPONENT16),Q}function B(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ai&&L.minFilter!==Bi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function V(L){const b=L.target;b.removeEventListener("dispose",V),G(b),b.isVideoTexture&&g.delete(b)}function k(L){const b=L.target;b.removeEventListener("dispose",k),D(b)}function G(L){const b=r.get(L);if(b.__webglInit===void 0)return;const Q=L.source,ft=x.get(Q);if(ft){const _t=ft[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&C(L),Object.keys(ft).length===0&&x.delete(Q)}r.remove(L)}function C(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const Q=L.source,ft=x.get(Q);delete ft[b.__cacheKey],d.memory.textures--}function D(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let _t=0;_t<b.__webglFramebuffer[ft].length;_t++)s.deleteFramebuffer(b.__webglFramebuffer[ft][_t]);else s.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)s.deleteFramebuffer(b.__webglFramebuffer[ft]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=L.textures;for(let ft=0,_t=Q.length;ft<_t;ft++){const st=r.get(Q[ft]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),d.memory.textures--),r.remove(Q[ft])}r.remove(L)}let H=0;function lt(){H=0}function ot(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function ut(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ct(L,b){const Q=r.get(L);if(L.isVideoTexture&&ee(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(Q,L,b);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+b)}function P(L,b){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){dt(Q,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+b)}function q(L,b){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){dt(Q,L,b);return}i.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+b)}function F(L,b){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){pt(Q,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+b)}const St={[sh]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[oh]:s.MIRRORED_REPEAT},U={[Ai]:s.NEAREST,[NS]:s.NEAREST_MIPMAP_NEAREST,[mc]:s.NEAREST_MIPMAP_LINEAR,[Bi]:s.LINEAR,[dd]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},$={[BS]:s.NEVER,[kS]:s.ALWAYS,[IS]:s.LESS,[uv]:s.LEQUAL,[FS]:s.EQUAL,[VS]:s.GEQUAL,[HS]:s.GREATER,[GS]:s.NOTEQUAL};function vt(L,b){if(b.type===ua&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Bi||b.magFilter===dd||b.magFilter===mc||b.magFilter===Ar||b.minFilter===Bi||b.minFilter===dd||b.minFilter===mc||b.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,St[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,St[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,St[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ai||b.minFilter!==mc&&b.minFilter!==Ar||b.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function gt(L,b){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",V));const ft=b.source;let _t=x.get(ft);_t===void 0&&(_t={},x.set(ft,_t));const st=ut(b);if(st!==L.__cacheKey){_t[st]===void 0&&(_t[st]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),_t[st].usedTimes++;const It=_t[L.__cacheKey];It!==void 0&&(_t[L.__cacheKey].usedTimes--,It.usedTimes===0&&C(b)),L.__cacheKey=st,L.__webglTexture=_t[st].texture}return Q}function Et(L,b,Q){return Math.floor(Math.floor(L/Q)/b)}function et(L,b,Q,ft){const st=L.updateRanges;if(st.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Q,ft,b.data);else{st.sort((bt,Ot)=>bt.start-Ot.start);let It=0;for(let bt=1;bt<st.length;bt++){const Ot=st[It],Jt=st[bt],Yt=Ot.start+Ot.count,Ut=Et(Jt.start,b.width,4),fe=Et(Ot.start,b.width,4);Jt.start<=Yt+1&&Ut===fe&&Et(Jt.start+Jt.count-1,b.width,4)===Ut?Ot.count=Math.max(Ot.count,Jt.start+Jt.count-Ot.start):(++It,st[It]=Jt)}st.length=It+1;const wt=s.getParameter(s.UNPACK_ROW_LENGTH),jt=s.getParameter(s.UNPACK_SKIP_PIXELS),Kt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Ot=st.length;bt<Ot;bt++){const Jt=st[bt],Yt=Math.floor(Jt.start/4),Ut=Math.ceil(Jt.count/4),fe=Yt%b.width,W=Math.floor(Yt/b.width),Rt=Ut,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,fe,W,Rt,Ct,Q,ft,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,wt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,jt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Kt)}}function dt(L,b,Q){let ft=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=s.TEXTURE_3D);const _t=gt(L,b),st=b.source;i.bindTexture(ft,L.__webglTexture,s.TEXTURE0+Q);const It=r.get(st);if(st.version!==It.__version||_t===!0){i.activeTexture(s.TEXTURE0+Q);const wt=Oe.getPrimaries(Oe.workingColorSpace),jt=b.colorSpace===Wa?null:Oe.getPrimaries(b.colorSpace),Kt=b.colorSpace===Wa||wt===jt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=R(b.image,!1,l.maxTextureSize);bt=Pe(b,bt);const Ot=c.convert(b.format,b.colorSpace),Jt=c.convert(b.type);let Yt=O(b.internalFormat,Ot,Jt,b.colorSpace,b.isVideoTexture);vt(ft,b);let Ut;const fe=b.mipmaps,W=b.isVideoTexture!==!0,Rt=It.__version===void 0||_t===!0,Ct=st.dataReady,Ft=B(b,bt);if(b.isDepthTexture)Yt=w(b.format===$o,b.type),Rt&&(W?i.texStorage2D(s.TEXTURE_2D,1,Yt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Ot,Jt,null));else if(b.isDataTexture)if(fe.length>0){W&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Yt,fe[0].width,fe[0].height);for(let Tt=0,yt=fe.length;Tt<yt;Tt++)Ut=fe[Tt],W?Ct&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Ot,Jt,Ut.data):i.texImage2D(s.TEXTURE_2D,Tt,Yt,Ut.width,Ut.height,0,Ot,Jt,Ut.data);b.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Yt,bt.width,bt.height),Ct&&et(b,bt,Ot,Jt)):i.texImage2D(s.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Ot,Jt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Yt,fe[0].width,fe[0].height,bt.depth);for(let Tt=0,yt=fe.length;Tt<yt;Tt++)if(Ut=fe[Tt],b.format!==Ti)if(Ot!==null)if(W){if(Ct)if(b.layerUpdates.size>0){const qt=x0(Ut.width,Ut.height,b.format,b.type);for(const ue of b.layerUpdates){const Be=Ut.data.subarray(ue*qt/Ut.data.BYTES_PER_ELEMENT,(ue+1)*qt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,ue,Ut.width,Ut.height,1,Ot,Be)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,bt.depth,Ot,Ut.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,Yt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,bt.depth,Ot,Jt,Ut.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Tt,Yt,Ut.width,Ut.height,bt.depth,0,Ot,Jt,Ut.data)}else{W&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Yt,fe[0].width,fe[0].height);for(let Tt=0,yt=fe.length;Tt<yt;Tt++)Ut=fe[Tt],b.format!==Ti?Ot!==null?W?Ct&&i.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Ot,Ut.data):i.compressedTexImage2D(s.TEXTURE_2D,Tt,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Ot,Jt,Ut.data):i.texImage2D(s.TEXTURE_2D,Tt,Yt,Ut.width,Ut.height,0,Ot,Jt,Ut.data)}else if(b.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Yt,bt.width,bt.height,bt.depth),Ct)if(b.layerUpdates.size>0){const Tt=x0(bt.width,bt.height,b.format,b.type);for(const yt of b.layerUpdates){const qt=bt.data.subarray(yt*Tt/bt.data.BYTES_PER_ELEMENT,(yt+1)*Tt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,Ot,Jt,qt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,Jt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,bt.width,bt.height,bt.depth,0,Ot,Jt,bt.data);else if(b.isData3DTexture)W?(Rt&&i.texStorage3D(s.TEXTURE_3D,Ft,Yt,bt.width,bt.height,bt.depth),Ct&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,Jt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Yt,bt.width,bt.height,bt.depth,0,Ot,Jt,bt.data);else if(b.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(s.TEXTURE_2D,Ft,Yt,bt.width,bt.height);else{let Tt=bt.width,yt=bt.height;for(let qt=0;qt<Ft;qt++)i.texImage2D(s.TEXTURE_2D,qt,Yt,Tt,yt,0,Ot,Jt,null),Tt>>=1,yt>>=1}}else if(fe.length>0){if(W&&Rt){const Tt=be(fe[0]);i.texStorage2D(s.TEXTURE_2D,Ft,Yt,Tt.width,Tt.height)}for(let Tt=0,yt=fe.length;Tt<yt;Tt++)Ut=fe[Tt],W?Ct&&i.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ot,Jt,Ut):i.texImage2D(s.TEXTURE_2D,Tt,Yt,Ot,Jt,Ut);b.generateMipmaps=!1}else if(W){if(Rt){const Tt=be(bt);i.texStorage2D(s.TEXTURE_2D,Ft,Yt,Tt.width,Tt.height)}Ct&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,Jt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Yt,Ot,Jt,bt);M(b)&&_(ft),It.__version=st.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pt(L,b,Q){if(b.image.length!==6)return;const ft=gt(L,b),_t=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const st=r.get(_t);if(_t.version!==st.__version||ft===!0){i.activeTexture(s.TEXTURE0+Q);const It=Oe.getPrimaries(Oe.workingColorSpace),wt=b.colorSpace===Wa?null:Oe.getPrimaries(b.colorSpace),jt=b.colorSpace===Wa||It===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ot=[];for(let yt=0;yt<6;yt++)!Kt&&!bt?Ot[yt]=R(b.image[yt],!0,l.maxCubemapSize):Ot[yt]=bt?b.image[yt].image:b.image[yt],Ot[yt]=Pe(b,Ot[yt]);const Jt=Ot[0],Yt=c.convert(b.format,b.colorSpace),Ut=c.convert(b.type),fe=O(b.internalFormat,Yt,Ut,b.colorSpace),W=b.isVideoTexture!==!0,Rt=st.__version===void 0||ft===!0,Ct=_t.dataReady;let Ft=B(b,Jt);vt(s.TEXTURE_CUBE_MAP,b);let Tt;if(Kt){W&&Rt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,fe,Jt.width,Jt.height);for(let yt=0;yt<6;yt++){Tt=Ot[yt].mipmaps;for(let qt=0;qt<Tt.length;qt++){const ue=Tt[qt];b.format!==Ti?Yt!==null?W?Ct&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ue.width,ue.height,Yt,ue.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ue.width,ue.height,Yt,Ut,ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,fe,ue.width,ue.height,0,Yt,Ut,ue.data)}}}else{if(Tt=b.mipmaps,W&&Rt){Tt.length>0&&Ft++;const yt=be(Ot[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,fe,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){W?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ot[yt].width,Ot[yt].height,Yt,Ut,Ot[yt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,fe,Ot[yt].width,Ot[yt].height,0,Yt,Ut,Ot[yt].data);for(let qt=0;qt<Tt.length;qt++){const Be=Tt[qt].image[yt].image;W?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,Be.width,Be.height,Yt,Ut,Be.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,fe,Be.width,Be.height,0,Yt,Ut,Be.data)}}else{W?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Yt,Ut,Ot[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,fe,Yt,Ut,Ot[yt]);for(let qt=0;qt<Tt.length;qt++){const ue=Tt[qt];W?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,Yt,Ut,ue.image[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,fe,Yt,Ut,ue.image[yt])}}}M(b)&&_(s.TEXTURE_CUBE_MAP),st.__version=_t.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Dt(L,b,Q,ft,_t,st){const It=c.convert(Q.format,Q.colorSpace),wt=c.convert(Q.type),jt=O(Q.internalFormat,It,wt,Q.colorSpace),Kt=r.get(b),bt=r.get(Q);if(bt.__renderTarget=b,!Kt.__hasExternalTextures){const Ot=Math.max(1,b.width>>st),Jt=Math.max(1,b.height>>st);_t===s.TEXTURE_3D||_t===s.TEXTURE_2D_ARRAY?i.texImage3D(_t,st,jt,Ot,Jt,b.depth,0,It,wt,null):i.texImage2D(_t,st,jt,Ot,Jt,0,It,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Bt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,_t,bt.__webglTexture,0,Te(b)):(_t===s.TEXTURE_2D||_t>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,_t,bt.__webglTexture,st),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(L,b,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const ft=b.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,st=w(b.stencilBuffer,_t),It=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=Te(b);Bt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,st,b.width,b.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,st,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,st,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,L)}else{const ft=b.textures;for(let _t=0;_t<ft.length;_t++){const st=ft[_t],It=c.convert(st.format,st.colorSpace),wt=c.convert(st.type),jt=O(st.internalFormat,It,wt,st.colorSpace),Kt=Te(b);Q&&Bt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,jt,b.width,b.height):Bt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,jt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,jt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $t(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);const _t=ft.__webglTexture,st=Te(b);if(b.depthTexture.format===Jo)Bt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0);else if(b.depthTexture.format===$o)Bt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const b=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=ft}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?$t(b.__webglFramebuffer[0],L):$t(b.__webglFramebuffer,L)}else if(Q){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=s.createRenderbuffer(),Ht(b.__webglDepthbuffer[ft],L,!1);else{const _t=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,st)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ht(b.__webglDepthbuffer,L,!1);else{const _t=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,st)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(L,b,Q){const ft=r.get(L);b!==void 0&&Dt(ft.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ce(L)}function N(L){const b=L.texture,Q=r.get(L),ft=r.get(b);L.addEventListener("dispose",k);const _t=L.textures,st=L.isWebGLCubeRenderTarget===!0,It=_t.length>1;if(It||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=b.version,d.memory.textures++),st){Q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[wt]=[];for(let jt=0;jt<b.mipmaps.length;jt++)Q.__webglFramebuffer[wt][jt]=s.createFramebuffer()}else Q.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)Q.__webglFramebuffer[wt]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(It)for(let wt=0,jt=_t.length;wt<jt;wt++){const Kt=r.get(_t[wt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&Bt(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let wt=0;wt<_t.length;wt++){const jt=_t[wt];Q.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[wt]);const Kt=c.convert(jt.format,jt.colorSpace),bt=c.convert(jt.type),Ot=O(jt.internalFormat,Kt,bt,jt.colorSpace,L.isXRRenderTarget===!0),Jt=Te(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Ot,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Q.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(s.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)Dt(Q.__webglFramebuffer[wt][jt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,jt);else Dt(Q.__webglFramebuffer[wt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let wt=0,jt=_t.length;wt<jt;wt++){const Kt=_t[wt],bt=r.get(Kt);let Ot=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ot=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ot,bt.__webglTexture),vt(Ot,Kt),Dt(Q.__webglFramebuffer,L,Kt,s.COLOR_ATTACHMENT0+wt,Ot,0),M(Kt)&&_(Ot)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,ft.__webglTexture),vt(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)Dt(Q.__webglFramebuffer[jt],L,b,s.COLOR_ATTACHMENT0,wt,jt);else Dt(Q.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,wt,0);M(b)&&_(wt),i.unbindTexture()}L.depthBuffer&&Ce(L)}function ae(L){const b=L.textures;for(let Q=0,ft=b.length;Q<ft;Q++){const _t=b[Q];if(M(_t)){const st=z(L),It=r.get(_t).__webglTexture;i.bindTexture(st,It),_(st),i.unbindTexture()}}}const Wt=[],te=[];function Nt(L){if(L.samples>0){if(Bt(L)===!1){const b=L.textures,Q=L.width,ft=L.height;let _t=s.COLOR_BUFFER_BIT;const st=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=r.get(L),wt=b.length>1;if(wt)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const jt=L.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_t|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_t|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,Q,ft,0,0,Q,ft,_t,s.NEAREST),m===!0&&(Wt.length=0,te.length=0,Wt.push(s.COLOR_ATTACHMENT0+Kt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Wt.push(st),te.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Te(L){return Math.min(l.maxSamples,L.samples)}function Bt(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ee(L){const b=d.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Pe(L,b){const Q=L.colorSpace,ft=L.format,_t=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==Is&&Q!==Wa&&(Oe.getTransfer(Q)===Xe?(ft!==Ti||_t!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}function be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=lt,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=F,this.rebindTextures=Mt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Bt}function d1(s,t){function i(r,l=Wa){let c;const d=Oe.getTransfer(l);if(r===Fi)return s.UNSIGNED_BYTE;if(r===qh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===iv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ev)return s.BYTE;if(r===nv)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===Wh)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===ua)return s.FLOAT;if(r===el)return s.HALF_FLOAT;if(r===av)return s.ALPHA;if(r===rv)return s.RGB;if(r===Ti)return s.RGBA;if(r===Jo)return s.DEPTH_COMPONENT;if(r===$o)return s.DEPTH_STENCIL;if(r===sv)return s.RED;if(r===jh)return s.RED_INTEGER;if(r===ov)return s.RG;if(r===Zh)return s.RG_INTEGER;if(r===Kh)return s.RGBA_INTEGER;if(r===Xc||r===Wc||r===qc||r===Yc)if(d===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lh||r===ch||r===uh||r===fh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dh||r===hh||r===ph)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dh||r===hh)return d===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ph)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mh||r===gh||r===_h||r===vh||r===xh||r===yh||r===Sh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===wh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===mh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jc||r===Ch||r===Dh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===jc)return d===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ch)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lv||r===Uh||r===Lh||r===Nh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===jc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Uh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class Dv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
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

}`;class m1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Dv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ka({vertexShader:h1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wn(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g1 extends Hs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,E=null;const R=new m1,M={},_=i.getContextAttributes();let z=null,O=null;const w=[],B=[],V=new pe;let k=null;const G=new ii;G.viewport=new qe;const C=new ii;C.viewport=new qe;const D=[G,C],H=new zM;let lt=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=w[et];return dt===void 0&&(dt=new Pd,w[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=w[et];return dt===void 0&&(dt=new Pd,w[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=w[et];return dt===void 0&&(dt=new Pd,w[et]=dt),dt.getHandSpace()};function ut(et){const dt=B.indexOf(et.inputSource);if(dt===-1)return;const pt=w[dt];pt!==void 0&&(pt.update(et.inputSource,et.frame,p||d),pt.dispatchEvent({type:et.type,data:et.inputSource}))}function ct(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",P);for(let et=0;et<w.length;et++){const dt=B[et];dt!==null&&(B[et]=null,w[et].disconnect(dt))}lt=null,ot=null,R.reset();for(const et in M)delete M[et];t.setRenderTarget(z),y=null,x=null,v=null,l=null,O=null,Et.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,Ht=null;_.depth&&(Ht=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pt=_.stencil?$o:Jo,Dt=_.stencil?Qo:Rr);const $t={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};x=v.createProjectionLayer($t),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new wr(x.textureWidth,x.textureHeight,{format:Ti,type:Fi,depthTexture:new Ev(x.textureWidth,x.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const pt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,pt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new wr(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Et.setContext(l),Et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function P(et){for(let dt=0;dt<et.removed.length;dt++){const pt=et.removed[dt],Dt=B.indexOf(pt);Dt>=0&&(B[Dt]=null,w[Dt].disconnect(pt))}for(let dt=0;dt<et.added.length;dt++){const pt=et.added[dt];let Dt=B.indexOf(pt);if(Dt===-1){for(let $t=0;$t<w.length;$t++)if($t>=B.length){B.push(pt),Dt=$t;break}else if(B[$t]===null){B[$t]=pt,Dt=$t;break}if(Dt===-1)break}const Ht=w[Dt];Ht&&Ht.connect(pt)}}const q=new K,F=new K;function St(et,dt,pt){q.setFromMatrixPosition(dt.matrixWorld),F.setFromMatrixPosition(pt.matrixWorld);const Dt=q.distanceTo(F),Ht=dt.projectionMatrix.elements,$t=pt.projectionMatrix.elements,Ce=Ht[14]/(Ht[10]-1),Mt=Ht[14]/(Ht[10]+1),N=(Ht[9]+1)/Ht[5],ae=(Ht[9]-1)/Ht[5],Wt=(Ht[8]-1)/Ht[0],te=($t[8]+1)/$t[0],Nt=Ce*Wt,Te=Ce*te,Bt=Dt/(-Wt+te),ee=Bt*-Wt;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ee),et.translateZ(Bt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ht[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Pe=Ce+Bt,be=Mt+Bt,L=Nt-ee,b=Te+(Dt-ee),Q=N*Mt/be*Pe,ft=ae*Mt/be*Pe;et.projectionMatrix.makePerspective(L,b,Q,ft,Pe,be),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let dt=et.near,pt=et.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(pt=R.depthFar)),H.near=C.near=G.near=dt,H.far=C.far=G.far=pt,(lt!==H.near||ot!==H.far)&&(l.updateRenderState({depthNear:H.near,depthFar:H.far}),lt=H.near,ot=H.far),H.layers.mask=et.layers.mask|6,G.layers.mask=H.layers.mask&3,C.layers.mask=H.layers.mask&5;const Dt=et.parent,Ht=H.cameras;U(H,Dt);for(let $t=0;$t<Ht.length;$t++)U(Ht[$t],Dt);Ht.length===2?St(H,G,C):H.projectionMatrix.copy(G.projectionMatrix),$(et,H,Dt)};function $(et,dt,pt){pt===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(pt.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ph*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(H)},this.getCameraTexture=function(et){return M[et]};let vt=null;function gt(et,dt){if(g=dt.getViewerPose(p||d),E=dt,g!==null){const pt=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let Dt=!1;pt.length!==H.cameras.length&&(H.cameras.length=0,Dt=!0);for(let Mt=0;Mt<pt.length;Mt++){const N=pt[Mt];let ae=null;if(y!==null)ae=y.getViewport(N);else{const te=v.getViewSubImage(x,N);ae=te.viewport,Mt===0&&(t.setRenderTargetTextures(O,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(O))}let Wt=D[Mt];Wt===void 0&&(Wt=new ii,Wt.layers.enable(Mt),Wt.viewport=new qe,D[Mt]=Wt),Wt.matrix.fromArray(N.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(N.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ae.x,ae.y,ae.width,ae.height),Mt===0&&(H.matrix.copy(Wt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Dt===!0&&H.cameras.push(Wt)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Mt=v.getDepthInformation(pt[0]);Mt&&Mt.isValid&&Mt.texture&&R.init(Mt,l.renderState)}if(Ht&&Ht.includes("camera-access")&&(t.state.unbindTexture(),v))for(let Mt=0;Mt<pt.length;Mt++){const N=pt[Mt].camera;if(N){let ae=M[N];ae||(ae=new Dv,M[N]=ae);const Wt=v.getCameraImage(N);ae.sourceTexture=Wt}}}for(let pt=0;pt<w.length;pt++){const Dt=B[pt],Ht=w[pt];Dt!==null&&Ht!==void 0&&Ht.update(Dt,dt,p||d)}vt&&vt(et,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Et=new Tv;Et.setAnimationLoop(gt),this.setAnimationLoop=function(et){vt=et},this.dispose=function(){}}}const xr=new Hi,_1=new Qe;function v1(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,_v(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,z,O,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,w)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,z,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Yn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Yn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const z=t.get(_),O=z.envMap,w=z.envMapRotation;O&&(M.envMap.value=O,xr.copy(w),xr.x*=-1,xr.y*=-1,xr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),M.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(xr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,z,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*z,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,z){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const z=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function x1(s,t,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,O){const w=O.program;r.uniformBlockBinding(z,w)}function p(z,O){let w=l[z.id];w===void 0&&(E(z),w=g(z),l[z.id]=w,z.addEventListener("dispose",M));const B=O.program;r.updateUBOMapping(z,B);const V=t.render.frame;c[z.id]!==V&&(x(z),c[z.id]=V)}function g(z){const O=v();z.__bindingPointIndex=O;const w=s.createBuffer(),B=z.__size,V=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,B,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,w),w}function v(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const O=l[z.id],w=z.uniforms,B=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let V=0,k=w.length;V<k;V++){const G=Array.isArray(w[V])?w[V]:[w[V]];for(let C=0,D=G.length;C<D;C++){const H=G[C];if(y(H,V,C,B)===!0){const lt=H.__offset,ot=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let ct=0;ct<ot.length;ct++){const P=ot[ct],q=R(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,lt+ut,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,ut),ut+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(z,O,w,B){const V=z.value,k=O+"_"+w;if(B[k]===void 0)return typeof V=="number"||typeof V=="boolean"?B[k]=V:B[k]=V.clone(),!0;{const G=B[k];if(typeof V=="number"||typeof V=="boolean"){if(G!==V)return B[k]=V,!0}else if(G.equals(V)===!1)return G.copy(V),!0}return!1}function E(z){const O=z.uniforms;let w=0;const B=16;for(let k=0,G=O.length;k<G;k++){const C=Array.isArray(O[k])?O[k]:[O[k]];for(let D=0,H=C.length;D<H;D++){const lt=C[D],ot=Array.isArray(lt.value)?lt.value:[lt.value];for(let ut=0,ct=ot.length;ut<ct;ut++){const P=ot[ut],q=R(P),F=w%B,St=F%q.boundary,U=F+St;w+=St,U!==0&&B-U<q.storage&&(w+=B-U),lt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=q.storage}}}const V=w%B;return V>0&&(w+=B-V),z.__size=w,z.__cache={},this}function R(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function M(z){const O=z.target;O.removeEventListener("dispose",M);const w=d.indexOf(O.__bindingPointIndex);d.splice(w,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const z in l)s.deleteBuffer(l[z]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}class y1{constructor(t={}){const{canvas:i=WS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const z=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let B=!1;this._outputColorSpace=pi;let V=0,k=0,G=null,C=-1,D=null;const H=new qe,lt=new qe;let ot=null;const ut=new we(0);let ct=0,P=i.width,q=i.height,F=1,St=null,U=null;const $=new qe(0,0,P,q),vt=new qe(0,0,P,q);let gt=!1;const Et=new tp;let et=!1,dt=!1;const pt=new Qe,Dt=new K,Ht=new qe,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Mt(){return G===null?F:1}let N=r;function ae(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),N===null){const Y="webgl2";if(N=ae(Y,A),N===null)throw ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Wt,te,Nt,Te,Bt,ee,Pe,be,L,b,Q,ft,_t,st,It,wt,jt,Kt,bt,Ot,Jt,Yt,Ut,fe;function W(){Wt=new DT(N),Wt.init(),Yt=new d1(N,Wt),te=new ET(N,Wt,t,Yt),Nt=new u1(N,Wt),te.reversedDepthBuffer&&x&&Nt.buffers.depth.setReversed(!0),Te=new NT(N),Bt=new QA,ee=new f1(N,Wt,Nt,Bt,te,Yt,Te),Pe=new TT(w),be=new CT(w),L=new FM(N),Ut=new ST(N,L),b=new UT(N,L,Te,Ut),Q=new PT(N,b,L,Te),bt=new OT(N,te,ee),wt=new bT(Bt),ft=new KA(w,Pe,be,Wt,te,Ut,wt),_t=new v1(w,Bt),st=new $A,It=new r1(Wt),Kt=new yT(w,Pe,be,Nt,Q,y,m),jt=new l1(w,Q,te),fe=new x1(N,Te,te,Nt),Ot=new MT(N,Wt,Te),Jt=new LT(N,Wt,Te),Te.programs=ft.programs,w.capabilities=te,w.extensions=Wt,w.properties=Bt,w.renderLists=st,w.shadowMap=jt,w.state=Nt,w.info=Te}W();const Rt=new g1(w,N);this.xr=Rt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(P,q,!1))},this.getSize=function(A){return A.set(P,q)},this.setSize=function(A,Y,at=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,q=Y,i.width=Math.floor(A*F),i.height=Math.floor(Y*F),at===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(P*F,q*F).floor()},this.setDrawingBufferSize=function(A,Y,at){P=A,q=Y,F=at,i.width=Math.floor(A*at),i.height=Math.floor(Y*at),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,Y,at,rt){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,Y,at,rt),Nt.viewport(H.copy($).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,Y,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,Y,at,rt),Nt.scissor(lt.copy(vt).multiplyScalar(F).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){Nt.setScissorTest(gt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,at=!0){let rt=0;if(A){let Z=!1;if(G!==null){const At=G.texture.format;Z=At===Kh||At===Zh||At===jh}if(Z){const At=G.texture.type,Lt=At===Fi||At===Rr||At===Ko||At===Qo||At===qh||At===Yh,Gt=Kt.getClearColor(),Pt=Kt.getClearAlpha(),ie=Gt.r,se=Gt.g,Zt=Gt.b;Lt?(E[0]=ie,E[1]=se,E[2]=Zt,E[3]=Pt,N.clearBufferuiv(N.COLOR,0,E)):(R[0]=ie,R[1]=se,R[2]=Zt,R[3]=Pt,N.clearBufferiv(N.COLOR,0,R))}else rt|=N.COLOR_BUFFER_BIT}Y&&(rt|=N.DEPTH_BUFFER_BIT),at&&(rt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Kt.dispose(),st.dispose(),It.dispose(),Bt.dispose(),Pe.dispose(),be.dispose(),Q.dispose(),Ut.dispose(),fe.dispose(),ft.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",dn),Rt.removeEventListener("sessionend",hn),en.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=Te.autoReset,Y=jt.enabled,at=jt.autoUpdate,rt=jt.needsUpdate,Z=jt.type;W(),Te.autoReset=A,jt.enabled=Y,jt.autoUpdate=at,jt.needsUpdate=rt,jt.type=Z}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yt(A){const Y=A.target;Y.removeEventListener("dispose",yt),qt(Y)}function qt(A){ue(A),Bt.remove(A)}function ue(A){const Y=Bt.get(A).programs;Y!==void 0&&(Y.forEach(function(at){ft.releaseProgram(at)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,at,rt,Z,At){Y===null&&(Y=$t);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Gt=da(A,Y,at,rt,Z);Nt.setMaterial(rt,Lt);let Pt=at.index,ie=1;if(rt.wireframe===!0){if(Pt=b.getWireframeAttribute(at),Pt===void 0)return;ie=2}const se=at.drawRange,Zt=at.attributes.position;let me=se.start*ie,Le=(se.start+se.count)*ie;At!==null&&(me=Math.max(me,At.start*ie),Le=Math.min(Le,(At.start+At.count)*ie)),Pt!==null?(me=Math.max(me,0),Le=Math.min(Le,Pt.count)):Zt!=null&&(me=Math.max(me,0),Le=Math.min(Le,Zt.count));const Je=Le-me;if(Je<0||Je===1/0)return;Ut.setup(Z,rt,Gt,at,Pt);let He,ge=Ot;if(Pt!==null&&(He=L.get(Pt),ge=Jt,ge.setIndex(He)),Z.isMesh)rt.wireframe===!0?(Nt.setLineWidth(rt.wireframeLinewidth*Mt()),ge.setMode(N.LINES)):ge.setMode(N.TRIANGLES);else if(Z.isLine){let ne=rt.linewidth;ne===void 0&&(ne=1),Nt.setLineWidth(ne*Mt()),Z.isLineSegments?ge.setMode(N.LINES):Z.isLineLoop?ge.setMode(N.LINE_LOOP):ge.setMode(N.LINE_STRIP)}else Z.isPoints?ge.setMode(N.POINTS):Z.isSprite&&ge.setMode(N.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ge.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ne=Z._multiDrawStarts,Ke=Z._multiDrawCounts,Se=Z._multiDrawCount,Cn=Pt?L.get(Pt).bytesPerElement:1,vi=Bt.get(rt).currentProgram.getUniforms();for(let Bn=0;Bn<Se;Bn++)vi.setValue(N,"_gl_DrawID",Bn),ge.render(ne[Bn]/Cn,Ke[Bn])}else if(Z.isInstancedMesh)ge.renderInstances(me,Je,Z.count);else if(at.isInstancedBufferGeometry){const ne=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ke=Math.min(at.instanceCount,ne);ge.renderInstances(me,Je,Ke)}else ge.render(me,Je)};function Be(A,Y,at){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,wi(A,Y,at),A.side=Za,A.needsUpdate=!0,wi(A,Y,at),A.side=Pi):wi(A,Y,at)}this.compile=function(A,Y,at=null){at===null&&(at=A),_=It.get(at),_.init(Y),O.push(_),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),A!==at&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const rt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const At=Z.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Gt=At[Lt];Be(Gt,at,Z),rt.add(Gt)}else Be(At,at,Z),rt.add(At)}),_=O.pop(),rt},this.compileAsync=function(A,Y,at=null){const rt=this.compile(A,Y,at);return new Promise(Z=>{function At(){if(rt.forEach(function(Lt){Bt.get(Lt).currentProgram.isReady()&&rt.delete(Lt)}),rt.size===0){Z(A);return}setTimeout(At,10)}Wt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let De=null;function _i(A){De&&De(A)}function dn(){en.stop()}function hn(){en.start()}const en=new Tv;en.setAnimationLoop(_i),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(A){De=A,Rt.setAnimationLoop(A),A===null?en.stop():en.start()},Rt.addEventListener("sessionstart",dn),Rt.addEventListener("sessionend",hn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Y,G),_=It.get(A,O.length),_.init(Y),O.push(_),pt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Et.setFromProjectionMatrix(pt,Ii,Y.reversedDepth),dt=this.localClippingEnabled,et=wt.init(this.clippingPlanes,dt),M=st.get(A,z.length),M.init(),z.push(M),Rt.enabled===!0&&Rt.isPresenting===!0){const At=w.xr.getDepthSensingMesh();At!==null&&Ri(At,Y,-1/0,w.sortObjects)}Ri(A,Y,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(St,U),Ce=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Ce&&Kt.addToRenderList(M,A),this.info.render.frame++,et===!0&&wt.beginShadows();const at=_.state.shadowsArray;jt.render(at,A,Y),et===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Z=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const At=Y.cameras;if(Z.length>0)for(let Lt=0,Gt=At.length;Lt<Gt;Lt++){const Pt=At[Lt];sl(rt,Z,A,Pt)}Ce&&Kt.render(A);for(let Lt=0,Gt=At.length;Lt<Gt;Lt++){const Pt=At[Lt];Dr(M,A,Pt,Pt.viewport)}}else Z.length>0&&sl(rt,Z,A,Y),Ce&&Kt.render(A),Dr(M,A,Y);G!==null&&k===0&&(ee.updateMultisampleRenderTarget(G),ee.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(w,A,Y),Ut.resetDefaultState(),C=-1,D=null,O.pop(),O.length>0?(_=O[O.length-1],et===!0&&wt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Ri(A,Y,at,rt){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Et.intersectsSprite(A)){rt&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const Lt=Q.update(A),Gt=A.material;Gt.visible&&M.push(A,Lt,Gt,at,Ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Et.intersectsObject(A))){const Lt=Q.update(A),Gt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ht.copy(Lt.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(Gt)){const Pt=Lt.groups;for(let ie=0,se=Pt.length;ie<se;ie++){const Zt=Pt[ie],me=Gt[Zt.materialIndex];me&&me.visible&&M.push(A,Lt,me,at,Ht.z,Zt)}}else Gt.visible&&M.push(A,Lt,Gt,at,Ht.z,null)}}const At=A.children;for(let Lt=0,Gt=At.length;Lt<Gt;Lt++)Ri(At[Lt],Y,at,rt)}function Dr(A,Y,at,rt){const Z=A.opaque,At=A.transmissive,Lt=A.transparent;_.setupLightsView(at),et===!0&&wt.setGlobalState(w.clippingPlanes,at),rt&&Nt.viewport(H.copy(rt)),Z.length>0&&Ur(Z,Y,at),At.length>0&&Ur(At,Y,at),Lt.length>0&&Ur(Lt,Y,at),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function sl(A,Y,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new wr(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?el:Fi,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const At=_.state.transmissionRenderTarget[rt.id],Lt=rt.viewport||H;At.setSize(Lt.z*w.transmissionResolutionScale,Lt.w*w.transmissionResolutionScale);const Gt=w.getRenderTarget(),Pt=w.getActiveCubeFace(),ie=w.getActiveMipmapLevel();w.setRenderTarget(At),w.getClearColor(ut),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),Ce&&Kt.render(at);const se=w.toneMapping;w.toneMapping=Ya;const Zt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),et===!0&&wt.setGlobalState(w.clippingPlanes,rt),Ur(A,at,rt),ee.updateMultisampleRenderTarget(At),ee.updateRenderTargetMipmap(At),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Le=0,Je=Y.length;Le<Je;Le++){const He=Y[Le],ge=He.object,ne=He.geometry,Ke=He.material,Se=He.group;if(Ke.side===Pi&&ge.layers.test(rt.layers)){const Cn=Ke.side;Ke.side=Yn,Ke.needsUpdate=!0,Xs(ge,at,rt,ne,Ke,Se),Ke.side=Cn,Ke.needsUpdate=!0,me=!0}}me===!0&&(ee.updateMultisampleRenderTarget(At),ee.updateRenderTargetMipmap(At))}w.setRenderTarget(Gt,Pt,ie),w.setClearColor(ut,ct),Zt!==void 0&&(rt.viewport=Zt),w.toneMapping=se}function Ur(A,Y,at){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,At=A.length;Z<At;Z++){const Lt=A[Z],Gt=Lt.object,Pt=Lt.geometry,ie=Lt.group;let se=Lt.material;se.allowOverride===!0&&rt!==null&&(se=rt),Gt.layers.test(at.layers)&&Xs(Gt,Y,at,Pt,se,ie)}}function Xs(A,Y,at,rt,Z,At){A.onBeforeRender(w,Y,at,rt,Z,At),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(w,Y,at,rt,A,At),Z.transparent===!0&&Z.side===Pi&&Z.forceSinglePass===!1?(Z.side=Yn,Z.needsUpdate=!0,w.renderBufferDirect(at,Y,rt,Z,A,At),Z.side=Za,Z.needsUpdate=!0,w.renderBufferDirect(at,Y,rt,Z,A,At),Z.side=Pi):w.renderBufferDirect(at,Y,rt,Z,A,At),A.onAfterRender(w,Y,at,rt,Z,At)}function wi(A,Y,at){Y.isScene!==!0&&(Y=$t);const rt=Bt.get(A),Z=_.state.lights,At=_.state.shadowsArray,Lt=Z.state.version,Gt=ft.getParameters(A,Z.state,At,Y,at),Pt=ft.getProgramCacheKey(Gt);let ie=rt.programs;rt.environment=A.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(A.isMeshStandardMaterial?be:Pe).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ie===void 0&&(A.addEventListener("dispose",yt),ie=new Map,rt.programs=ie);let se=ie.get(Pt);if(se!==void 0){if(rt.currentProgram===se&&rt.lightsStateVersion===Lt)return Gi(A,Gt),se}else Gt.uniforms=ft.getUniforms(A),A.onBeforeCompile(Gt,w),se=ft.acquireProgram(Gt,Pt),ie.set(Pt,se),rt.uniforms=Gt.uniforms;const Zt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=wt.uniform),Gi(A,Gt),rt.needsLights=ha(A),rt.lightsStateVersion=Lt,rt.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=se,rt.uniformsList=null,se}function Lr(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Zc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Gi(A,Y){const at=Bt.get(A);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function da(A,Y,at,rt,Z){Y.isScene!==!0&&(Y=$t),ee.resetTextureUnits();const At=Y.fog,Lt=rt.isMeshStandardMaterial?Y.environment:null,Gt=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Is,Pt=(rt.isMeshStandardMaterial?be:Pe).get(rt.envMap||Lt),ie=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,se=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Zt=!!at.morphAttributes.position,me=!!at.morphAttributes.normal,Le=!!at.morphAttributes.color;let Je=Ya;rt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Je=w.toneMapping);const He=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ge=He!==void 0?He.length:0,ne=Bt.get(rt),Ke=_.state.lights;if(et===!0&&(dt===!0||A!==D)){const nn=A===D&&rt.id===C;wt.setState(rt,A,nn)}let Se=!1;rt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ke.state.version||ne.outputColorSpace!==Gt||Z.isBatchedMesh&&ne.batching===!1||!Z.isBatchedMesh&&ne.batching===!0||Z.isBatchedMesh&&ne.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ne.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ne.instancing===!1||!Z.isInstancedMesh&&ne.instancing===!0||Z.isSkinnedMesh&&ne.skinning===!1||!Z.isSkinnedMesh&&ne.skinning===!0||Z.isInstancedMesh&&ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ne.instancingMorph===!1&&Z.morphTexture!==null||ne.envMap!==Pt||rt.fog===!0&&ne.fog!==At||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==wt.numPlanes||ne.numIntersection!==wt.numIntersection)||ne.vertexAlphas!==ie||ne.vertexTangents!==se||ne.morphTargets!==Zt||ne.morphNormals!==me||ne.morphColors!==Le||ne.toneMapping!==Je||ne.morphTargetsCount!==ge)&&(Se=!0):(Se=!0,ne.__version=rt.version);let Cn=ne.currentProgram;Se===!0&&(Cn=wi(rt,Y,Z));let vi=!1,Bn=!1,xn=!1;const Ye=Cn.getUniforms(),In=ne.uniforms;if(Nt.useProgram(Cn.program)&&(vi=!0,Bn=!0,xn=!0),rt.id!==C&&(C=rt.id,Bn=!0),vi||D!==A){Nt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ye.setValue(N,"projectionMatrix",A.projectionMatrix),Ye.setValue(N,"viewMatrix",A.matrixWorldInverse);const bn=Ye.map.cameraPosition;bn!==void 0&&bn.setValue(N,Dt.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&Ye.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ye.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Bn=!0,xn=!0)}if(Z.isSkinnedMesh){Ye.setOptional(N,Z,"bindMatrix"),Ye.setOptional(N,Z,"bindMatrixInverse");const nn=Z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ye.setValue(N,"boneTexture",nn.boneTexture,ee))}Z.isBatchedMesh&&(Ye.setOptional(N,Z,"batchingTexture"),Ye.setValue(N,"batchingTexture",Z._matricesTexture,ee),Ye.setOptional(N,Z,"batchingIdTexture"),Ye.setValue(N,"batchingIdTexture",Z._indirectTexture,ee),Ye.setOptional(N,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ye.setValue(N,"batchingColorTexture",Z._colorsTexture,ee));const Dn=at.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&bt.update(Z,at,Cn),(Bn||ne.receiveShadow!==Z.receiveShadow)&&(ne.receiveShadow=Z.receiveShadow,Ye.setValue(N,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(In.envMap.value=Pt,In.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(In.envMapIntensity.value=Y.environmentIntensity),Bn&&(Ye.setValue(N,"toneMappingExposure",w.toneMappingExposure),ne.needsLights&&Qa(In,xn),At&&rt.fog===!0&&_t.refreshFogUniforms(In,At),_t.refreshMaterialUniforms(In,rt,F,q,_.state.transmissionRenderTarget[A.id]),Zc.upload(N,Lr(ne),In,ee)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Zc.upload(N,Lr(ne),In,ee),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ye.setValue(N,"center",Z.center),Ye.setValue(N,"modelViewMatrix",Z.modelViewMatrix),Ye.setValue(N,"normalMatrix",Z.normalMatrix),Ye.setValue(N,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const nn=rt.uniformsGroups;for(let bn=0,Nr=nn.length;bn<Nr;bn++){const Vn=nn[bn];fe.update(Vn,Cn),fe.bind(Vn,Cn)}}return Cn}function Qa(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function ha(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,Y,at){const rt=Bt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Bt.get(A.texture).__webglTexture=Y,Bt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const at=Bt.get(A);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const ln=N.createFramebuffer();this.setRenderTarget=function(A,Y=0,at=0){G=A,V=Y,k=at;let rt=!0,Z=null,At=!1,Lt=!1;if(A){const Pt=Bt.get(A);if(Pt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(N.FRAMEBUFFER,null),rt=!1;else if(Pt.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if(Pt.__hasExternalTextures)ee.rebindTextures(A,Bt.get(A.texture).__webglTexture,Bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Pt.__boundDepthTexture!==Zt){if(Zt!==null&&Bt.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}const ie=A.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Lt=!0);const se=Bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[Y])?Z=se[Y][at]:Z=se[Y],At=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?Z=Bt.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?Z=se[at]:Z=se,H.copy(A.viewport),lt.copy(A.scissor),ot=A.scissorTest}else H.copy($).multiplyScalar(F).floor(),lt.copy(vt).multiplyScalar(F).floor(),ot=gt;if(at!==0&&(Z=ln),Nt.bindFramebuffer(N.FRAMEBUFFER,Z)&&rt&&Nt.drawBuffers(A,Z),Nt.viewport(H),Nt.scissor(lt),Nt.setScissorTest(ot),At){const Pt=Bt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,at)}else if(Lt){const Pt=Y;for(let ie=0;ie<A.textures.length;ie++){const se=Bt.get(A.textures[ie]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ie,se.__webglTexture,at,Pt)}}else if(A!==null&&at!==0){const Pt=Bt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(A,Y,at,rt,Z,At,Lt,Gt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt){Nt.bindFramebuffer(N.FRAMEBUFFER,Pt);try{const ie=A.textures[Gt],se=ie.format,Zt=ie.type;if(!te.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-rt&&at>=0&&at<=A.height-Z&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Gt),N.readPixels(Y,at,rt,Z,Yt.convert(se),Yt.convert(Zt),At))}finally{const ie=G!==null?Bt.get(G).__webglFramebuffer:null;Nt.bindFramebuffer(N.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(A,Y,at,rt,Z,At,Lt,Gt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt)if(Y>=0&&Y<=A.width-rt&&at>=0&&at<=A.height-Z){Nt.bindFramebuffer(N.FRAMEBUFFER,Pt);const ie=A.textures[Gt],se=ie.format,Zt=ie.type;if(!te.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.bufferData(N.PIXEL_PACK_BUFFER,At.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Gt),N.readPixels(Y,at,rt,Z,Yt.convert(se),Yt.convert(Zt),0);const Le=G!==null?Bt.get(G).__webglFramebuffer:null;Nt.bindFramebuffer(N.FRAMEBUFFER,Le);const Je=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await qS(N,Je,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,At),N.deleteBuffer(me),N.deleteSync(Je),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,at=0){const rt=Math.pow(2,-at),Z=Math.floor(A.image.width*rt),At=Math.floor(A.image.height*rt),Lt=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;ee.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,at,0,0,Lt,Gt,Z,At),Nt.unbindTexture()};const ol=N.createFramebuffer(),ll=N.createFramebuffer();this.copyTextureToTexture=function(A,Y,at=null,rt=null,Z=0,At=null){At===null&&(Z!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Z,Z=0):At=0);let Lt,Gt,Pt,ie,se,Zt,me,Le,Je;const He=A.isCompressedTexture?A.mipmaps[At]:A.image;if(at!==null)Lt=at.max.x-at.min.x,Gt=at.max.y-at.min.y,Pt=at.isBox3?at.max.z-at.min.z:1,ie=at.min.x,se=at.min.y,Zt=at.isBox3?at.min.z:0;else{const Dn=Math.pow(2,-Z);Lt=Math.floor(He.width*Dn),Gt=Math.floor(He.height*Dn),A.isDataArrayTexture?Pt=He.depth:A.isData3DTexture?Pt=Math.floor(He.depth*Dn):Pt=1,ie=0,se=0,Zt=0}rt!==null?(me=rt.x,Le=rt.y,Je=rt.z):(me=0,Le=0,Je=0);const ge=Yt.convert(Y.format),ne=Yt.convert(Y.type);let Ke;Y.isData3DTexture?(ee.setTexture3D(Y,0),Ke=N.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ee.setTexture2DArray(Y,0),Ke=N.TEXTURE_2D_ARRAY):(ee.setTexture2D(Y,0),Ke=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=N.getParameter(N.UNPACK_ROW_LENGTH),Cn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vi=N.getParameter(N.UNPACK_SKIP_PIXELS),Bn=N.getParameter(N.UNPACK_SKIP_ROWS),xn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,He.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,He.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ie),N.pixelStorei(N.UNPACK_SKIP_ROWS,se),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt);const Ye=A.isDataArrayTexture||A.isData3DTexture,In=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Dn=Bt.get(A),nn=Bt.get(Y),bn=Bt.get(Dn.__renderTarget),Nr=Bt.get(nn.__renderTarget);Nt.bindFramebuffer(N.READ_FRAMEBUFFER,bn.__webglFramebuffer),Nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Vn=0;Vn<Pt;Vn++)Ye&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.get(A).__webglTexture,Z,Zt+Vn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.get(Y).__webglTexture,At,Je+Vn)),N.blitFramebuffer(ie,se,Lt,Gt,me,Le,Lt,Gt,N.DEPTH_BUFFER_BIT,N.NEAREST);Nt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Bt.has(A)){const Dn=Bt.get(A),nn=Bt.get(Y);Nt.bindFramebuffer(N.READ_FRAMEBUFFER,ol),Nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ll);for(let bn=0;bn<Pt;bn++)Ye?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dn.__webglTexture,Z,Zt+bn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dn.__webglTexture,Z),In?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,nn.__webglTexture,At,Je+bn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,nn.__webglTexture,At),Z!==0?N.blitFramebuffer(ie,se,Lt,Gt,me,Le,Lt,Gt,N.COLOR_BUFFER_BIT,N.NEAREST):In?N.copyTexSubImage3D(Ke,At,me,Le,Je+bn,ie,se,Lt,Gt):N.copyTexSubImage2D(Ke,At,me,Le,ie,se,Lt,Gt);Nt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else In?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ke,At,me,Le,Je,Lt,Gt,Pt,ge,ne,He.data):Y.isCompressedArrayTexture?N.compressedTexSubImage3D(Ke,At,me,Le,Je,Lt,Gt,Pt,ge,He.data):N.texSubImage3D(Ke,At,me,Le,Je,Lt,Gt,Pt,ge,ne,He):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,At,me,Le,Lt,Gt,ge,ne,He.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,At,me,Le,He.width,He.height,ge,He.data):N.texSubImage2D(N.TEXTURE_2D,At,me,Le,Lt,Gt,ge,ne,He);N.pixelStorei(N.UNPACK_ROW_LENGTH,Se),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Cn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,xn),At===0&&Y.generateMipmaps&&N.generateMipmap(Ke),Nt.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,at=null,rt=null,Z=0){return Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,at,rt,Z)},this.initRenderTarget=function(A){Bt.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),Nt.unbindTexture()},this.resetState=function(){V=0,k=0,G=null,Nt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const S1={radius_km:6371,distance_from_sun_au:1,orbital_period_earth_days:365,rotation_period_hours:23.93},M1={radius_km:1737.4,distance_from_earth_km:384400,orbital_period_earth_days:27.3,rotation_period_earth_days:27.3},E1={radius_km:3389.5,distance_from_sun_au:1.52,orbital_period_earth_days:687,rotation_period_hours:24.62},b1={radius_km:6051.8,distance_from_sun_au:.72,orbital_period_earth_days:225,rotation_period_earth_days:243},T1={radius_km:2439.7,distance_from_sun_au:.39,orbital_period_earth_days:88,rotation_period_earth_days:58.67},A1={radius_km:69911,distance_from_sun_au:5.2,orbital_period_earth_days:4333,rotation_period_hours:9.92},R1={radius_km:58232,distance_from_sun_au:9.5,orbital_period_earth_days:10759,rotation_period_hours:10.55},w1={radius_km:25362,distance_from_sun_au:19.8,orbital_period_earth_days:30687,rotation_period_hours:17.23},C1={radius_km:24622,distance_from_sun_au:30,orbital_period_earth_days:60190,rotation_period_hours:16.1},D1={Earth:S1,Moon:M1,Mars:E1,Venus:b1,Mercury:T1,Jupiter:A1,Saturn:R1,Uranus:w1,Neptune:C1},Uv=Ue.forwardRef(({onLocationChange:s},t)=>{const i=Ue.useRef(null),r=Ue.useRef(null),l=Ue.useRef(null),c=Ue.useRef(null),d=Ue.useRef({}),h=Ue.useRef(null);Ue.useImperativeHandle(t,()=>({focusOnPlanet:p=>{typeof window<"u"&&window.focusOnPlanetRef&&window.focusOnPlanetRef(p)}}),[]),Ue.useEffect(()=>{if(!i.current)return;const p=new _M;p.background=new we(8),r.current=p;const g=new gi,v=2e4,x=new Float32Array(v*3),y=new Float32Array(v*3);for(let Mt=0;Mt<v;Mt++){x[Mt*3]=(Math.random()-.5)*2500,x[Mt*3+1]=(Math.random()-.5)*2500,x[Mt*3+2]=(Math.random()-.5)*2500;const N=Math.random();N<.6?(y[Mt*3]=1,y[Mt*3+1]=1,y[Mt*3+2]=1):N<.8?(y[Mt*3]=.6,y[Mt*3+1]=.8,y[Mt*3+2]=1):N<.95?(y[Mt*3]=1,y[Mt*3+1]=1,y[Mt*3+2]=.7):(y[Mt*3]=1,y[Mt*3+1]=.6,y[Mt*3+2]=.4)}g.setAttribute("position",new ai(x,3)),g.setAttribute("color",new ai(y,3));const E=new Mv({size:2,vertexColors:!0,transparent:!0,opacity:.8}),R=new EM(g,E);p.add(R);const M=R,_=new ii(75,window.innerWidth/window.innerHeight,.1,3e3);_.position.set(0,50,150),c.current=_;const z=new y1({antialias:!0});z.setSize(window.innerWidth,window.innerHeight),z.shadowMap.enabled=!0,z.shadowMap.type=$0,i.current.appendChild(z.domElement),l.current=z;const O=new PM(4210752,1.5);p.add(O);const w=new NM(16777215,2,1e3);w.position.set(0,0,0),w.castShadow=!0,w.shadow.mapSize.width=2048,w.shadow.mapSize.height=2048,p.add(w);const B=new DM,V=new ca(8,64,64),k=B.load("/assets/textures/sun_texture.jpg"),G=new Va({map:k,emissive:16755200,emissiveIntensity:.3}),C=new wn(V,G);p.add(C),d.current.Sun={mesh:C,radius:8,distance:0,angle:0};const D=50,H=.5,lt={Mercury:{color:9205843,texture:"/assets/textures/mercury_texture.jpg",emissive:0},Venus:{color:16762441,texture:"/assets/textures/venus_texture.png",emissive:3351040},Earth:{color:30654,texture:"/assets/textures/earth_texture.jpg",emissive:4386},Mars:{color:13458524,texture:"/assets/textures/mars_texture.jpg",emissive:2228224},Jupiter:{color:13808780,texture:"/assets/textures/jupiter_texture.jpg",emissive:2232576},Saturn:{color:16438693,texture:"/assets/textures/saturn_texture.jpg",emissive:2232576},Uranus:{color:5230823,texture:"/assets/textures/uranus_texture.png",emissive:4386},Neptune:{color:4944093,texture:"/assets/textures/neptune_texture.jpg",emissive:34}};Object.entries(D1).forEach(([Mt,N])=>{if(Mt==="Moon")return;const ae=Math.max(N.radius_km*H*.001,.2),Wt=N.distance_from_sun_au*D,te=lt[Mt],Nt=new ca(ae,64,64);let Te;const Bt=B.load(te.texture);Te=new Va({map:Bt,color:te.color,emissive:te.emissive,emissiveIntensity:.8,transparent:!1,opacity:1});const ee=new wn(Nt,Te);if(ee.position.x=Wt,ee.castShadow=!0,ee.receiveShadow=!0,p.add(ee),Mt==="Saturn"){const ft=new ep(ae*1.2,ae*2.2,64),_t=new Va({color:12632256,side:Pi,transparent:!0,opacity:.7,alphaTest:.1}),st=new wn(ft,_t);st.rotation.x=Math.PI/2,st.castShadow=!0,st.receiveShadow=!0,ee.add(st)}d.current[Mt]={mesh:ee,data:N,distance:Wt,angle:0,radius:ae,moons:[]};const Pe=document.createElement("canvas"),be=Pe.getContext("2d");Pe.width=512,Pe.height=128,be.fillStyle="rgba(255, 255, 255, 0.9)",be.font="bold 32px Arial",be.textAlign="center",be.textBaseline="middle",be.shadowColor="rgba(0, 0, 0, 0.8)",be.shadowBlur=4,be.shadowOffsetX=2,be.shadowOffsetY=2,be.fillText(Mt,256,64);const L=new bM(Pe),b=new yv({map:L,transparent:!0,alphaTest:.1}),Q=new xM(b);Q.position.copy(ee.position),Q.position.y+=ae*4,Q.scale.set(ae*12,ae*3,1),p.add(Q),d.current[Mt].label=Q}),m(p,d.current,B);let ot=!1,ut=0,ct=0,P=0,q=0,F=150,St=!1,U=5;const $=Mt=>{Mt.preventDefault(),ot=!0,St=!1,ut=Mt.clientX,ct=Mt.clientY},vt=Mt=>{if(!ot)return;Mt.preventDefault();const N=Mt.clientX-ut,ae=Mt.clientY-ct;(Math.abs(N)>U||Math.abs(ae)>U)&&(St=!0),St&&(P+=N*.005,q+=ae*.005,q=Math.max(-Math.PI/2,Math.min(Math.PI/2,q)),ut=Mt.clientX,ct=Mt.clientY)},gt=Mt=>{Mt.preventDefault(),!St&&ot&&Et(Mt),ot=!1,St=!1},Et=Mt=>{const N=z.domElement.getBoundingClientRect(),ae=new pe;ae.x=(Mt.clientX-N.left)/N.width*2-1,ae.y=-((Mt.clientY-N.top)/N.height)*2+1;const Wt=new BM;Wt.setFromCamera(ae,_);const te=Object.values(d.current).map(Te=>Te.mesh).filter(Boolean),Nt=Wt.intersectObjects(te);if(Nt.length>0){const Te=Nt[0].object;for(const[Bt,ee]of Object.entries(d.current))if(ee.mesh===Te){$t(Bt),s&&s(Bt);break}}},et=Mt=>{Mt.preventDefault(),F+=Mt.deltaY*.1,F=Math.max(20,Math.min(800,F))},dt=Mt=>{Mt.touches.length===1&&(Mt.preventDefault(),ot=!0,ut=Mt.touches[0].clientX,ct=Mt.touches[0].clientY)},pt=Mt=>{if(!ot||Mt.touches.length!==1)return;Mt.preventDefault();const N=Mt.touches[0].clientX-ut,ae=Mt.touches[0].clientY-ct;P+=N*.005,q+=ae*.005,q=Math.max(-Math.PI/2,Math.min(Math.PI/2,q)),ut=Mt.touches[0].clientX,ct=Mt.touches[0].clientY},Dt=Mt=>{Mt.preventDefault(),ot=!1};z.domElement.addEventListener("mousedown",$),z.domElement.addEventListener("mousemove",vt),z.domElement.addEventListener("mouseup",gt),z.domElement.addEventListener("wheel",et),z.domElement.addEventListener("touchstart",dt),z.domElement.addEventListener("touchmove",pt),z.domElement.addEventListener("touchend",Dt);const Ht=()=>{h.current=requestAnimationFrame(Ht),_.position.x=Math.cos(P)*Math.cos(q)*F,_.position.y=Math.sin(q)*F,_.position.z=Math.sin(P)*Math.cos(q)*F,_.lookAt(0,0,0),M.rotation.x+=1e-4,M.rotation.y+=2e-4,Object.entries(d.current).forEach(([Mt,N])=>{if(Mt==="Sun"){N.mesh.rotation.y+=.005;return}const ae=.005/Math.sqrt(N.data.distance_from_sun_au);N.angle+=ae,N.mesh.position.x=Math.cos(N.angle)*N.distance,N.mesh.position.z=Math.sin(N.angle)*N.distance,N.label&&(N.label.position.copy(N.mesh.position),N.label.position.y+=N.radius*4);const Wt=Mt==="Venus"?-.005:.02;N.mesh.rotation.y+=Wt,N.moons&&N.moons.forEach(te=>{te.angle+=te.speed;const Nt=N.mesh.position;te.mesh.position.x=Nt.x+Math.cos(te.angle)*te.distance,te.mesh.position.z=Nt.z+Math.sin(te.angle)*te.distance,te.mesh.position.y=Nt.y+Math.sin(te.angle*.3)*te.distance*.05,te.mesh.rotation.y+=.01})}),z.render(p,_)};Ht();const $t=Mt=>{const N=d.current[Mt];if(N&&N.mesh){const ae=N.mesh,Wt=Mt==="Sun"?50:20,te=ae.position.clone(),Nt=Wt,Te=Math.atan2(te.z,te.x),Bt=0,ee=P,Pe=q,be=F,L=Date.now(),b=2e3,Q=()=>{const ft=Date.now()-L,_t=Math.min(ft/b,1),st=1-Math.pow(1-_t,3);P=ee+(Te-ee)*st,q=Pe+(Bt-Pe)*st,F=be+(Nt-be)*st,_t<1&&requestAnimationFrame(Q)};Q()}};window.focusOnPlanetRef=$t;const Ce=()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),z.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ce),()=>{window.removeEventListener("resize",Ce),z.domElement.removeEventListener("mousedown",$),z.domElement.removeEventListener("mousemove",vt),z.domElement.removeEventListener("mouseup",gt),z.domElement.removeEventListener("wheel",et),z.domElement.removeEventListener("touchstart",dt),z.domElement.removeEventListener("touchmove",pt),z.domElement.removeEventListener("touchend",Dt),typeof window<"u"&&delete window.focusOnPlanetRef,h.current&&cancelAnimationFrame(h.current),i.current&&z.domElement&&i.current.removeChild(z.domElement),z.dispose()}},[]);function m(p,g,v){if(g.Earth){const E=new ca(.15,32,32),R=v.load("/assets/textures/moon_texture.jpg"),M=new Va({map:R,emissive:1118481,emissiveIntensity:.05}),_=new wn(E,M);_.castShadow=!0,_.receiveShadow=!0,p.add(_),g.Earth.moons.push({mesh:_,distance:3,angle:0,speed:.02,name:"Moon"})}if(g.Mars){const E=new ca(.05,16,16),R=new Va({color:6908265}),M=new wn(E,R);M.castShadow=!0,p.add(M),g.Mars.moons.push({mesh:M,distance:1.5,angle:0,speed:.05,name:"Phobos"});const _=.03,z=2.2,O=new ca(_,16,16),w=new Va({color:5592405}),B=new wn(O,w);B.castShadow=!0,p.add(B),g.Mars.moons.push({mesh:B,distance:z,angle:Math.PI,speed:.03,name:"Deimos"})}g.Jupiter&&[{name:"Io",radius:.08,distance:4,speed:.04,color:16777113},{name:"Europa",radius:.07,distance:5,speed:.03,color:11184895},{name:"Ganymede",radius:.09,distance:6.5,speed:.025,color:8947848},{name:"Callisto",radius:.08,distance:8,speed:.02,color:4473924}].forEach((y,E)=>{const R=new ca(y.radius,16,16),M=new Va({color:y.color}),_=new wn(R,M);_.castShadow=!0,p.add(_),g.Jupiter.moons.push({mesh:_,distance:y.distance,angle:E*Math.PI/2,speed:y.speed,name:y.name})}),g.Saturn&&[{name:"Titan",radius:.12,distance:8,speed:.015,color:13408614},{name:"Enceladus",radius:.04,distance:5,speed:.03,color:16777215}].forEach((y,E)=>{const R=new ca(y.radius,16,16),M=new Va({color:y.color}),_=new wn(R,M);_.castShadow=!0,p.add(_),g.Saturn.moons.push({mesh:_,distance:y.distance,angle:E*Math.PI,speed:y.speed,name:y.name})})}return ce.jsx("div",{ref:i,className:"w-full h-full"})});Uv.displayName="EnhancedRealisticUniverseScene";function X0(s,t){if(typeof s=="function")return s(t);s!=null&&(s.current=t)}function U1(...s){return t=>{let i=!1;const r=s.map(l=>{const c=X0(l,t);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():X0(s[l],null)}}}}function L1(...s){return Ue.useCallback(U1(...s),s)}function N1(s){const t=P1(s),i=Ue.forwardRef((r,l)=>{const{children:c,...d}=r,h=Ue.Children.toArray(c),m=h.find(B1);if(m){const p=m.props.children,g=h.map(v=>v===m?Ue.Children.count(p)>1?Ue.Children.only(null):Ue.isValidElement(p)?p.props.children:null:v);return ce.jsx(t,{...d,ref:l,children:Ue.isValidElement(p)?Ue.cloneElement(p,void 0,g):null})}return ce.jsx(t,{...d,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var O1=N1("Slot");function P1(s){const t=Ue.forwardRef((i,r)=>{const{children:l,...c}=i,d=Ue.isValidElement(l)?F1(l):void 0,h=L1(d,r);if(Ue.isValidElement(l)){const m=I1(c,l.props);return l.type!==Ue.Fragment&&(m.ref=h),Ue.cloneElement(l,m)}return Ue.Children.count(l)>1?Ue.Children.only(null):null});return t.displayName=`${s}.SlotClone`,t}var z1=Symbol("radix.slottable");function B1(s){return Ue.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===z1}function I1(s,t){const i={...t};for(const r in t){const l=s[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...h)=>{const m=c(...h);return l(...h),m}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function F1(s){var r,l;let t=(r=Object.getOwnPropertyDescriptor(s.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?s.ref:(t=(l=Object.getOwnPropertyDescriptor(s,"ref"))==null?void 0:l.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function Lv(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=Lv(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function Nv(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=Lv(s))&&(r&&(r+=" "),r+=t);return r}const W0=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,q0=Nv,H1=(s,t)=>i=>{var r;if((t==null?void 0:t.variants)==null)return q0(s,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:c}=t,d=Object.keys(l).map(p=>{const g=i==null?void 0:i[p],v=c==null?void 0:c[p];if(g===null)return null;const x=W0(g)||W0(v);return l[p][x]}),h=i&&Object.entries(i).reduce((p,g)=>{let[v,x]=g;return x===void 0||(p[v]=x),p},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,g)=>{let{class:v,className:x,...y}=g;return Object.entries(y).every(E=>{let[R,M]=E;return Array.isArray(M)?M.includes({...c,...h}[R]):{...c,...h}[R]===M})?[...p,v,x]:p},[]);return q0(s,d,m,i==null?void 0:i.class,i==null?void 0:i.className)},ap="-",G1=s=>{const t=k1(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:d=>{const h=d.split(ap);return h[0]===""&&h.length!==1&&h.shift(),Ov(h,t)||V1(d)},getConflictingClassGroupIds:(d,h)=>{const m=i[d]||[];return h&&r[d]?[...m,...r[d]]:m}}},Ov=(s,t)=>{var d;if(s.length===0)return t.classGroupId;const i=s[0],r=t.nextPart.get(i),l=r?Ov(s.slice(1),r):void 0;if(l)return l;if(t.validators.length===0)return;const c=s.join(ap);return(d=t.validators.find(({validator:h})=>h(c)))==null?void 0:d.classGroupId},Y0=/^\[(.+)\]$/,V1=s=>{if(Y0.test(s)){const t=Y0.exec(s)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},k1=s=>{const{theme:t,classGroups:i}=s,r={nextPart:new Map,validators:[]};for(const l in i)Fh(i[l],r,l,t);return r},Fh=(s,t,i,r)=>{s.forEach(l=>{if(typeof l=="string"){const c=l===""?t:j0(t,l);c.classGroupId=i;return}if(typeof l=="function"){if(X1(l)){Fh(l(r),t,i,r);return}t.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([c,d])=>{Fh(d,j0(t,c),i,r)})})},j0=(s,t)=>{let i=s;return t.split(ap).forEach(r=>{i.nextPart.has(r)||i.nextPart.set(r,{nextPart:new Map,validators:[]}),i=i.nextPart.get(r)}),i},X1=s=>s.isThemeGetter,W1=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,r=new Map;const l=(c,d)=>{i.set(c,d),t++,t>s&&(t=0,r=i,i=new Map)};return{get(c){let d=i.get(c);if(d!==void 0)return d;if((d=r.get(c))!==void 0)return l(c,d),d},set(c,d){i.has(c)?i.set(c,d):l(c,d)}}},Hh="!",Gh=":",q1=Gh.length,Y1=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const c=[];let d=0,h=0,m=0,p;for(let E=0;E<l.length;E++){let R=l[E];if(d===0&&h===0){if(R===Gh){c.push(l.slice(m,E)),m=E+q1;continue}if(R==="/"){p=E;continue}}R==="["?d++:R==="]"?d--:R==="("?h++:R===")"&&h--}const g=c.length===0?l:l.substring(m),v=j1(g),x=v!==g,y=p&&p>m?p-m:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:y}};if(t){const l=t+Gh,c=r;r=d=>d.startsWith(l)?c(d.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},j1=s=>s.endsWith(Hh)?s.substring(0,s.length-1):s.startsWith(Hh)?s.substring(1):s,Z1=s=>{const t=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const l=[];let c=[];return r.forEach(d=>{d[0]==="["||t[d]?(l.push(...c.sort(),d),c=[]):c.push(d)}),l.push(...c.sort()),l}},K1=s=>({cache:W1(s.cacheSize),parseClassName:Y1(s),sortModifiers:Z1(s),...G1(s)}),Q1=/\s+/,J1=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,d=[],h=s.trim().split(Q1);let m="";for(let p=h.length-1;p>=0;p-=1){const g=h[p],{isExternal:v,modifiers:x,hasImportantModifier:y,baseClassName:E,maybePostfixModifierPosition:R}=i(g);if(v){m=g+(m.length>0?" "+m:m);continue}let M=!!R,_=r(M?E.substring(0,R):E);if(!_){if(!M){m=g+(m.length>0?" "+m:m);continue}if(_=r(E),!_){m=g+(m.length>0?" "+m:m);continue}M=!1}const z=c(x).join(":"),O=y?z+Hh:z,w=O+_;if(d.includes(w))continue;d.push(w);const B=l(_,M);for(let V=0;V<B.length;++V){const k=B[V];d.push(O+k)}m=g+(m.length>0?" "+m:m)}return m};function $1(){let s=0,t,i,r="";for(;s<arguments.length;)(t=arguments[s++])&&(i=Pv(t))&&(r&&(r+=" "),r+=i);return r}const Pv=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=Pv(s[r]))&&(i&&(i+=" "),i+=t);return i};function tR(s,...t){let i,r,l,c=d;function d(m){const p=t.reduce((g,v)=>v(g),s());return i=K1(p),r=i.cache.get,l=i.cache.set,c=h,h(m)}function h(m){const p=r(m);if(p)return p;const g=J1(m,i);return l(m,g),g}return function(){return c($1.apply(null,arguments))}}const gn=s=>{const t=i=>i[s]||[];return t.isThemeGetter=!0,t},zv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Bv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,eR=/^\d+\/\d+$/,nR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,iR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,aR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,rR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ds=s=>eR.test(s),xe=s=>!!s&&!Number.isNaN(Number(s)),ka=s=>!!s&&Number.isInteger(Number(s)),Yd=s=>s.endsWith("%")&&xe(s.slice(0,-1)),oa=s=>nR.test(s),oR=()=>!0,lR=s=>iR.test(s)&&!aR.test(s),Iv=()=>!1,cR=s=>rR.test(s),uR=s=>sR.test(s),fR=s=>!kt(s)&&!Xt(s),dR=s=>Vs(s,Gv,Iv),kt=s=>zv.test(s),yr=s=>Vs(s,Vv,lR),jd=s=>Vs(s,_R,xe),Z0=s=>Vs(s,Fv,Iv),hR=s=>Vs(s,Hv,uR),Vc=s=>Vs(s,kv,cR),Xt=s=>Bv.test(s),jo=s=>ks(s,Vv),pR=s=>ks(s,vR),K0=s=>ks(s,Fv),mR=s=>ks(s,Gv),gR=s=>ks(s,Hv),kc=s=>ks(s,kv,!0),Vs=(s,t,i)=>{const r=zv.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},ks=(s,t,i=!1)=>{const r=Bv.exec(s);return r?r[1]?t(r[1]):i:!1},Fv=s=>s==="position"||s==="percentage",Hv=s=>s==="image"||s==="url",Gv=s=>s==="length"||s==="size"||s==="bg-size",Vv=s=>s==="length",_R=s=>s==="number",vR=s=>s==="family-name",kv=s=>s==="shadow",xR=()=>{const s=gn("color"),t=gn("font"),i=gn("text"),r=gn("font-weight"),l=gn("tracking"),c=gn("leading"),d=gn("breakpoint"),h=gn("container"),m=gn("spacing"),p=gn("radius"),g=gn("shadow"),v=gn("inset-shadow"),x=gn("text-shadow"),y=gn("drop-shadow"),E=gn("blur"),R=gn("perspective"),M=gn("aspect"),_=gn("ease"),z=gn("animate"),O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],B=()=>[...w(),Xt,kt],V=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],G=()=>[Xt,kt,m],C=()=>[Ds,"full","auto",...G()],D=()=>[ka,"none","subgrid",Xt,kt],H=()=>["auto",{span:["full",ka,Xt,kt]},ka,Xt,kt],lt=()=>[ka,"auto",Xt,kt],ot=()=>["auto","min","max","fr",Xt,kt],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ct=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...G()],q=()=>[Ds,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...G()],F=()=>[s,Xt,kt],St=()=>[...w(),K0,Z0,{position:[Xt,kt]}],U=()=>["no-repeat",{repeat:["","x","y","space","round"]}],$=()=>["auto","cover","contain",mR,dR,{size:[Xt,kt]}],vt=()=>[Yd,jo,yr],gt=()=>["","none","full",p,Xt,kt],Et=()=>["",xe,jo,yr],et=()=>["solid","dashed","dotted","double"],dt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pt=()=>[xe,Yd,K0,Z0],Dt=()=>["","none",E,Xt,kt],Ht=()=>["none",xe,Xt,kt],$t=()=>["none",xe,Xt,kt],Ce=()=>[xe,Xt,kt],Mt=()=>[Ds,"full",...G()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[oa],breakpoint:[oa],color:[oR],container:[oa],"drop-shadow":[oa],ease:["in","out","in-out"],font:[fR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[oa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[oa],shadow:[oa],spacing:["px",xe],text:[oa],"text-shadow":[oa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ds,kt,Xt,M]}],container:["container"],columns:[{columns:[xe,kt,Xt,h]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:B()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[ka,"auto",Xt,kt]}],basis:[{basis:[Ds,"full","auto",h,...G()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[xe,Ds,"auto","initial","none",kt]}],grow:[{grow:["",xe,Xt,kt]}],shrink:[{shrink:["",xe,Xt,kt]}],order:[{order:[ka,"first","last","none",Xt,kt]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":lt()}],"col-end":[{"col-end":lt()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":lt()}],"row-end":[{"row-end":lt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ot()}],"auto-rows":[{"auto-rows":ot()}],gap:[{gap:G()}],"gap-x":[{"gap-x":G()}],"gap-y":[{"gap-y":G()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...ct(),"normal"]}],"justify-self":[{"justify-self":["auto",...ct()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...ct(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ct(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...ct(),"baseline"]}],"place-self":[{"place-self":["auto",...ct()]}],p:[{p:G()}],px:[{px:G()}],py:[{py:G()}],ps:[{ps:G()}],pe:[{pe:G()}],pt:[{pt:G()}],pr:[{pr:G()}],pb:[{pb:G()}],pl:[{pl:G()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":G()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":G()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],w:[{w:[h,"screen",...q()]}],"min-w":[{"min-w":[h,"screen","none",...q()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",i,jo,yr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Xt,jd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Yd,kt]}],"font-family":[{font:[pR,kt,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,Xt,kt]}],"line-clamp":[{"line-clamp":[xe,"none",Xt,jd]}],leading:[{leading:[c,...G()]}],"list-image":[{"list-image":["none",Xt,kt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Xt,kt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...et(),"wavy"]}],"text-decoration-thickness":[{decoration:[xe,"from-font","auto",Xt,yr]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[xe,"auto",Xt,kt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Xt,kt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Xt,kt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:St()}],"bg-repeat":[{bg:U()}],"bg-size":[{bg:$()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ka,Xt,kt],radial:["",Xt,kt],conic:[ka,Xt,kt]},gR,hR]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:vt()}],"gradient-via-pos":[{via:vt()}],"gradient-to-pos":[{to:vt()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:gt()}],"rounded-s":[{"rounded-s":gt()}],"rounded-e":[{"rounded-e":gt()}],"rounded-t":[{"rounded-t":gt()}],"rounded-r":[{"rounded-r":gt()}],"rounded-b":[{"rounded-b":gt()}],"rounded-l":[{"rounded-l":gt()}],"rounded-ss":[{"rounded-ss":gt()}],"rounded-se":[{"rounded-se":gt()}],"rounded-ee":[{"rounded-ee":gt()}],"rounded-es":[{"rounded-es":gt()}],"rounded-tl":[{"rounded-tl":gt()}],"rounded-tr":[{"rounded-tr":gt()}],"rounded-br":[{"rounded-br":gt()}],"rounded-bl":[{"rounded-bl":gt()}],"border-w":[{border:Et()}],"border-w-x":[{"border-x":Et()}],"border-w-y":[{"border-y":Et()}],"border-w-s":[{"border-s":Et()}],"border-w-e":[{"border-e":Et()}],"border-w-t":[{"border-t":Et()}],"border-w-r":[{"border-r":Et()}],"border-w-b":[{"border-b":Et()}],"border-w-l":[{"border-l":Et()}],"divide-x":[{"divide-x":Et()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Et()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...et(),"hidden","none"]}],"divide-style":[{divide:[...et(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...et(),"none","hidden"]}],"outline-offset":[{"outline-offset":[xe,Xt,kt]}],"outline-w":[{outline:["",xe,jo,yr]}],"outline-color":[{outline:F()}],shadow:[{shadow:["","none",g,kc,Vc]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",v,kc,Vc]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:Et()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[xe,yr]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":Et()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":["none",x,kc,Vc]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[xe,Xt,kt]}],"mix-blend":[{"mix-blend":[...dt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":dt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[xe]}],"mask-image-linear-from-pos":[{"mask-linear-from":pt()}],"mask-image-linear-to-pos":[{"mask-linear-to":pt()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":pt()}],"mask-image-t-to-pos":[{"mask-t-to":pt()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":pt()}],"mask-image-r-to-pos":[{"mask-r-to":pt()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":pt()}],"mask-image-b-to-pos":[{"mask-b-to":pt()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":pt()}],"mask-image-l-to-pos":[{"mask-l-to":pt()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":pt()}],"mask-image-x-to-pos":[{"mask-x-to":pt()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":pt()}],"mask-image-y-to-pos":[{"mask-y-to":pt()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[Xt,kt]}],"mask-image-radial-from-pos":[{"mask-radial-from":pt()}],"mask-image-radial-to-pos":[{"mask-radial-to":pt()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[xe]}],"mask-image-conic-from-pos":[{"mask-conic-from":pt()}],"mask-image-conic-to-pos":[{"mask-conic-to":pt()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:St()}],"mask-repeat":[{mask:U()}],"mask-size":[{mask:$()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Xt,kt]}],filter:[{filter:["","none",Xt,kt]}],blur:[{blur:Dt()}],brightness:[{brightness:[xe,Xt,kt]}],contrast:[{contrast:[xe,Xt,kt]}],"drop-shadow":[{"drop-shadow":["","none",y,kc,Vc]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:["",xe,Xt,kt]}],"hue-rotate":[{"hue-rotate":[xe,Xt,kt]}],invert:[{invert:["",xe,Xt,kt]}],saturate:[{saturate:[xe,Xt,kt]}],sepia:[{sepia:["",xe,Xt,kt]}],"backdrop-filter":[{"backdrop-filter":["","none",Xt,kt]}],"backdrop-blur":[{"backdrop-blur":Dt()}],"backdrop-brightness":[{"backdrop-brightness":[xe,Xt,kt]}],"backdrop-contrast":[{"backdrop-contrast":[xe,Xt,kt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",xe,Xt,kt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[xe,Xt,kt]}],"backdrop-invert":[{"backdrop-invert":["",xe,Xt,kt]}],"backdrop-opacity":[{"backdrop-opacity":[xe,Xt,kt]}],"backdrop-saturate":[{"backdrop-saturate":[xe,Xt,kt]}],"backdrop-sepia":[{"backdrop-sepia":["",xe,Xt,kt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":G()}],"border-spacing-x":[{"border-spacing-x":G()}],"border-spacing-y":[{"border-spacing-y":G()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Xt,kt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[xe,"initial",Xt,kt]}],ease:[{ease:["linear","initial",_,Xt,kt]}],delay:[{delay:[xe,Xt,kt]}],animate:[{animate:["none",z,Xt,kt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[R,Xt,kt]}],"perspective-origin":[{"perspective-origin":B()}],rotate:[{rotate:Ht()}],"rotate-x":[{"rotate-x":Ht()}],"rotate-y":[{"rotate-y":Ht()}],"rotate-z":[{"rotate-z":Ht()}],scale:[{scale:$t()}],"scale-x":[{"scale-x":$t()}],"scale-y":[{"scale-y":$t()}],"scale-z":[{"scale-z":$t()}],"scale-3d":["scale-3d"],skew:[{skew:Ce()}],"skew-x":[{"skew-x":Ce()}],"skew-y":[{"skew-y":Ce()}],transform:[{transform:[Xt,kt,"","none","gpu","cpu"]}],"transform-origin":[{origin:B()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Mt()}],"translate-x":[{"translate-x":Mt()}],"translate-y":[{"translate-y":Mt()}],"translate-z":[{"translate-z":Mt()}],"translate-none":["translate-none"],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Xt,kt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Xt,kt]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[xe,jo,yr,jd]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},yR=tR(xR);function rl(...s){return yR(Nv(s))}const SR=H1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function MR({className:s,variant:t,size:i,asChild:r=!1,...l}){const c=r?O1:"button";return ce.jsx(c,{"data-slot":"button",className:rl(SR({variant:t,size:i,className:s})),...l})}function ER({className:s,...t}){return ce.jsx("div",{"data-slot":"card",className:rl("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...t})}function bR({className:s,...t}){return ce.jsx("div",{"data-slot":"card-header",className:rl("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...t})}function TR({className:s,...t}){return ce.jsx("div",{"data-slot":"card-title",className:rl("leading-none font-semibold",s),...t})}function AR({className:s,...t}){return ce.jsx("div",{"data-slot":"card-content",className:rl("px-6",s),...t})}/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wR=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Q0=s=>{const t=wR(s);return t.charAt(0).toUpperCase()+t.slice(1)},Xv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),CR=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=Ue.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>Ue.createElement("svg",{ref:m,...DR,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:Xv("lucide",l),...!c&&!CR(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,g])=>Ue.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=(s,t)=>{const i=Ue.forwardRef(({className:r,...l},c)=>Ue.createElement(UR,{ref:c,iconNode:t,className:Xv(`lucide-${RR(Q0(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Q0(s),i};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],NR=iu("globe",LR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],PR=iu("house",OR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],BR=iu("rocket",zR);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xa=iu("zap",IR),FR=({onNavigateTo:s,currentLocation:t})=>{const i=[{name:"Earth",icon:NR,color:"text-blue-500"},{name:"Moon",icon:Xa,color:"text-gray-400"},{name:"Mars",icon:BR,color:"text-red-500"},{name:"Venus",icon:Xa,color:"text-yellow-500"},{name:"Mercury",icon:Xa,color:"text-orange-500"},{name:"Jupiter",icon:Xa,color:"text-orange-300"},{name:"Saturn",icon:Xa,color:"text-yellow-300"},{name:"Uranus",icon:Xa,color:"text-cyan-400"},{name:"Neptune",icon:Xa,color:"text-blue-600"},{name:"Sun",icon:Xa,color:"text-yellow-400"}];return ce.jsxs(ER,{className:"absolute top-4 right-4 w-64 bg-black/80 text-white border-gray-600",children:[ce.jsx(bR,{className:"pb-2",children:ce.jsxs(TR,{className:"text-lg flex items-center gap-2",children:[ce.jsx(PR,{className:"w-5 h-5"}),"Navigation"]})}),ce.jsxs(AR,{className:"space-y-2",children:[ce.jsxs("div",{className:"text-sm text-gray-300 mb-3",children:["Current: ",ce.jsx("span",{className:"text-white font-semibold",children:t})]}),ce.jsx("div",{className:"grid grid-cols-2 gap-2",children:i.map(r=>{const l=r.icon;return ce.jsxs(MR,{variant:"outline",size:"sm",className:"justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white",onClick:()=>s(r.name),children:[ce.jsx(l,{className:`w-4 h-4 ${r.color}`}),r.name]},r.name)})}),ce.jsxs("div",{className:"text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded",children:[ce.jsx("p",{children:ce.jsx("strong",{children:"Controls:"})}),ce.jsx("p",{children:"• Mouse: Rotate view"}),ce.jsx("p",{children:"• Scroll: Zoom in/out"}),ce.jsx("p",{children:"• Buttons: Quick travel"})]})]})]})};function HR(){const[s,t]=Ue.useState("Solar System"),i=Ue.useRef(null),r=c=>{t(c),i.current&&i.current.focusOnPlanet(c)},l=c=>{t(c)};return ce.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[ce.jsx(Uv,{ref:i,onLocationChange:l}),ce.jsx(FR,{onNavigateTo:r,currentLocation:s}),ce.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md",children:[ce.jsx("h2",{className:"text-lg font-bold mb-2",children:"Enhanced Universe Simulation"}),ce.jsx("p",{className:"text-sm text-gray-300 mb-2",children:"Explore our solar system with NASA-accurate planet textures, realistic colors, and transparent labels."}),ce.jsxs("div",{className:"text-xs text-gray-400 space-y-1",children:[ce.jsx("p",{children:ce.jsx("strong",{children:"Enhanced Features:"})}),ce.jsxs("p",{children:["• ",ce.jsx("strong",{children:"Realistic Textures:"})," High-quality NASA-based planet surface textures"]}),ce.jsxs("p",{children:["• ",ce.jsx("strong",{children:"Transparent Labels:"})," Clean, readable planet names with transparent backgrounds"]}),ce.jsxs("p",{children:["• ",ce.jsx("strong",{children:"Enhanced Sun:"})," Realistic solar surface texture with proper lighting"]}),ce.jsxs("p",{children:["• ",ce.jsx("strong",{children:"Major Moons:"})," Earth's Moon, Mars' Phobos & Deimos, Jupiter's Galilean moons, and more"]}),ce.jsxs("p",{children:["• ",ce.jsx("strong",{children:"Improved Graphics:"})," Enhanced lighting, shadows, and star field"]})]}),ce.jsx("div",{className:"mt-2 text-xs text-yellow-400",children:ce.jsxs("p",{children:["Current focus: ",ce.jsx("strong",{children:s})]})})]})]})}iS.createRoot(document.getElementById("root")).render(ce.jsx(Ue.StrictMode,{children:ce.jsx(HR,{})}));
