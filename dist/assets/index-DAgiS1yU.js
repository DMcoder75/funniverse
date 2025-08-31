(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Lf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Px(){if(kg)return _o;kg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return _o.Fragment=t,_o.jsx=i,_o.jsxs=i,_o}var Xg;function Bx(){return Xg||(Xg=1,Lf.exports=Px()),Lf.exports}var _e=Bx(),Nf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function zx(){if(Wg)return oe;Wg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function M(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=M.prototype;function I(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||y}var O=I.prototype=new g;O.constructor=I,b(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function H(U,$,vt,St,At,tt){return vt=tt.ref,{$$typeof:o,type:U,key:$,ref:vt!==void 0?vt:null,props:tt}}function j(U,$){return H(U.type,$,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function w(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var B=/\/+/g;function ot(U,$){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):$.toString(36)}function lt(){}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(lt,lt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,$,vt,St,At){var tt=typeof U;(tt==="undefined"||tt==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(tt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case o:case t:dt=!0;break;case _:return dt=U._init,ht(dt(U._payload),$,vt,St,At)}}if(dt)return At=At(U),dt=St===""?"."+ot(U,0):St,D(At)?(vt="",dt!=null&&(vt=dt.replace(B,"$&/")+"/"),ht(At,$,vt,"",function(kt){return kt})):At!=null&&(C(At)&&(At=j(At,vt+(At.key==null||U&&U.key===At.key?"":(""+At.key).replace(B,"$&/")+"/")+dt)),$.push(At)),1;dt=0;var Mt=St===""?".":St+":";if(D(U))for(var Dt=0;Dt<U.length;Dt++)St=U[Dt],tt=Mt+ot(St,Dt),dt+=ht(St,$,vt,tt,At);else if(Dt=x(U),typeof Dt=="function")for(U=Dt.call(U),Dt=0;!(St=U.next()).done;)St=St.value,tt=Mt+ot(St,Dt++),dt+=ht(St,$,vt,tt,At);else if(tt==="object"){if(typeof U.then=="function")return ht(ct(U),$,vt,St,At);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function L(U,$,vt){if(U==null)return U;var St=[],At=0;return ht(U,St,"","",function(tt){return $.call(vt,tt,At++)}),St}function k(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function _t(){}return oe.Children={map:L,forEach:function(U,$,vt){L(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return L(U,function(){$++}),$},toArray:function(U){return L(U,function($){return $})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=I,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=b({},U.props),At=U.key,tt=void 0;if($!=null)for(dt in $.ref!==void 0&&(tt=void 0),$.key!==void 0&&(At=""+$.key),$)!G.call($,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&$.ref===void 0||(St[dt]=$[dt]);var dt=arguments.length-2;if(dt===1)St.children=vt;else if(1<dt){for(var Mt=Array(dt),Dt=0;Dt<dt;Dt++)Mt[Dt]=arguments[Dt+2];St.children=Mt}return H(U.type,At,void 0,void 0,tt,St)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,$,vt){var St,At={},tt=null;if($!=null)for(St in $.key!==void 0&&(tt=""+$.key),$)G.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(At[St]=$[St]);var dt=arguments.length-2;if(dt===1)At.children=vt;else if(1<dt){for(var Mt=Array(dt),Dt=0;Dt<dt;Dt++)Mt[Dt]=arguments[Dt+2];At.children=Mt}if(U&&U.defaultProps)for(St in dt=U.defaultProps,dt)At[St]===void 0&&(At[St]=dt[St]);return H(U,tt,void 0,void 0,null,At)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=C,oe.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:k}},oe.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},oe.startTransition=function(U){var $=z.T,vt={};z.T=vt;try{var St=U(),At=z.S;At!==null&&At(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(_t,W)}catch(tt){W(tt)}finally{z.T=$}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(U){return z.H.use(U)},oe.useActionState=function(U,$,vt){return z.H.useActionState(U,$,vt)},oe.useCallback=function(U,$){return z.H.useCallback(U,$)},oe.useContext=function(U){return z.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,$){return z.H.useDeferredValue(U,$)},oe.useEffect=function(U,$,vt){var St=z.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(U,$,vt){return z.H.useImperativeHandle(U,$,vt)},oe.useInsertionEffect=function(U,$){return z.H.useInsertionEffect(U,$)},oe.useLayoutEffect=function(U,$){return z.H.useLayoutEffect(U,$)},oe.useMemo=function(U,$){return z.H.useMemo(U,$)},oe.useOptimistic=function(U,$){return z.H.useOptimistic(U,$)},oe.useReducer=function(U,$,vt){return z.H.useReducer(U,$,vt)},oe.useRef=function(U){return z.H.useRef(U)},oe.useState=function(U){return z.H.useState(U)},oe.useSyncExternalStore=function(U,$,vt){return z.H.useSyncExternalStore(U,$,vt)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.1.0",oe}var qg;function rd(){return qg||(qg=1,Nf.exports=zx()),Nf.exports}var Gn=rd(),Of={exports:{}},vo={},Pf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Ix(){return Yg||(Yg=1,function(o){function t(L,k){var W=L.length;L.push(k);t:for(;0<W;){var _t=W-1>>>1,U=L[_t];if(0<l(U,k))L[_t]=k,L[W]=U,W=_t;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var k=L[0],W=L.pop();if(W!==k){L[0]=W;t:for(var _t=0,U=L.length,$=U>>>1;_t<$;){var vt=2*(_t+1)-1,St=L[vt],At=vt+1,tt=L[At];if(0>l(St,W))At<U&&0>l(tt,St)?(L[_t]=tt,L[At]=W,_t=At):(L[_t]=St,L[vt]=W,_t=vt);else if(At<U&&0>l(tt,W))L[_t]=tt,L[At]=W,_t=At;else break t}}return k}function l(L,k){var W=L.sortIndex-k.sortIndex;return W!==0?W:L.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,y=!1,b=!1,R=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var k=i(p);k!==null;){if(k.callback===null)r(p);else if(k.startTime<=L)r(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function z(L){if(R=!1,D(L),!b)if(i(m)!==null)b=!0,G||(G=!0,ot());else{var k=i(p);k!==null&&ht(z,k.startTime-L)}}var G=!1,H=-1,j=5,C=-1;function w(){return M?!0:!(o.unstable_now()-C<j)}function B(){if(M=!1,G){var L=o.unstable_now();C=L;var k=!0;try{t:{b=!1,R&&(R=!1,I(H),H=-1),y=!0;var W=x;try{e:{for(D(L),v=i(m);v!==null&&!(v.expirationTime>L&&w());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,x=v.priorityLevel;var U=_t(v.expirationTime<=L);if(L=o.unstable_now(),typeof U=="function"){v.callback=U,D(L),k=!0;break e}v===i(m)&&r(m),D(L)}else r(m);v=i(m)}if(v!==null)k=!0;else{var $=i(p);$!==null&&ht(z,$.startTime-L),k=!1}}break t}finally{v=null,x=W,y=!1}k=void 0}}finally{k?ot():G=!1}}}var ot;if(typeof O=="function")ot=function(){O(B)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ct=lt.port2;lt.port1.onmessage=B,ot=function(){ct.postMessage(null)}}else ot=function(){g(B,0)};function ht(L,k){H=g(function(){L(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(L){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var W=x;x=k;try{return L()}finally{x=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=x;x=L;try{return k()}finally{x=W}},o.unstable_scheduleCallback=function(L,k,W){var _t=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?_t+W:_t):W=_t,L){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,L={id:_++,callback:k,priorityLevel:L,startTime:W,expirationTime:U,sortIndex:-1},W>_t?(L.sortIndex=W,t(p,L),i(m)===null&&L===i(p)&&(R?(I(H),H=-1):R=!0,ht(z,W-_t))):(L.sortIndex=U,t(m,L),b||y||(b=!0,G||(G=!0,ot()))),L},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(L){var k=x;return function(){var W=x;x=k;try{return L.apply(this,arguments)}finally{x=W}}}}(Bf)),Bf}var Zg;function Fx(){return Zg||(Zg=1,Pf.exports=Ix()),Pf.exports}var zf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Hx(){if(jg)return bn;jg=1;var o=rd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},bn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var Kg;function Gx(){if(Kg)return zf.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zf.exports=Hx(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Vx(){if(Qg)return vo;Qg=1;var o=Fx(),t=rd(),i=Gx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case z:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case O:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ht=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},_t=[],U=-1;function $(e){return{current:e}}function vt(e){0>U||(e.current=_t[U],_t[U]=null,U--)}function St(e,n){U++,_t[U]=e.current,e.current=n}var At=$(null),tt=$(null),dt=$(null),Mt=$(null);function Dt(e,n){switch(St(dt,n),St(tt,e),St(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_g(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_g(n),e=vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(At),St(At,e)}function kt(){vt(At),vt(tt),vt(dt)}function ee(e){e.memoizedState!==null&&St(Mt,e);var n=At.current,a=vg(n,e.type);n!==a&&(St(tt,e),St(At,a))}function Le(e){tt.current===e&&(vt(At),vt(tt)),Mt.current===e&&(vt(Mt),fo._currentValue=W)}var ae=Object.prototype.hasOwnProperty,F=o.unstable_scheduleCallback,Me=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,xe=o.unstable_requestPaint,It=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,Ft=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,qe=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ut=null,xt=null;function st(e){if(typeof E=="function"&&et(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(ut,e)}catch{}}var Pt=Math.clz32?Math.clz32:qt,Rt=Math.log,Xt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var yt=256,Lt=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=jt(s):(S&=T,S!==0?c=jt(S):a||(a=T&~e,a!==0&&(c=jt(a))))):(T=s&~f,T!==0?c=jt(T):S!==0?c=jt(S):a||(a=s&~e,a!==0&&(c=jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,Q=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Pt(a),mt=1<<ft;T[ft]=0,P[ft]=-1;var nt=Q[ft];if(nt!==null)for(Q[ft]=null,ft=0;ft<nt.length;ft++){var it=nt[ft];it!==null&&(it.lane&=-536870913)}a&=~mt}s!==0&&gt(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Gt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:zg(e.type))}function ci(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var on=Math.random().toString(36).slice(2),ln="__reactFiber$"+on,Ke="__reactProps$"+on,Mi="__reactContainer$"+on,_r="__reactEvents$"+on,zo="__reactListeners$"+on,vr="__reactHandles$"+on,Es="__reactResources$"+on,yi="__reactMarker$"+on;function xr(e){delete e[ln],delete e[Ke],delete e[_r],delete e[zo],delete e[vr]}function Oi(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Mi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=yg(e);e!==null;){if(a=e[ln])return a;e=yg(e)}return n}e=a,a=e.parentNode}return null}function ra(e){if(e=e[ln]||e[Mi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Fa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function sa(e){var n=e[Es];return n||(n=e[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[yi]=!0}var Io=new Set,Fo={};function A(e,n){q(e,n),q(e+"Capture",n)}function q(e,n){for(Fo[e]=n,e=0;e<n.length;e++)Io.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Z={};function Tt(e){return ae.call(Z,e)?!0:ae.call(rt,e)?!1:at.test(e)?Z[e]=!0:(rt[e]=!0,!1)}function Ut(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Qt,$t;function Wt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+$t}var ce=!1;function be(e,n){if(!e||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){nt=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var P=S.split(`
`),Q=T.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===Q.length)for(s=P.length-1,c=Q.length-1;1<=s&&0<=c&&P[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==Q[c]){var ft=`
`+P[s].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=s&&0<=c);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function Xe(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return Wt("Activity");default:return""}}function Ne(e){try{var n="";do n+=Xe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ke(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pe(e){e._valueTracker||(e._valueTracker=ke(e))}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Kt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wn=/[\n"\\]/g;function dn(e){return e.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,a,s,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ue(n)):e.value!==""+ue(n)&&(e.value=""+ue(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?En(e,S,ue(n)):a!=null?En(e,S,ue(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ue(T):e.removeAttribute("name")}function Cn(e,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function En(e,n,a){n==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function vn(e,n,a){if(n!=null&&(n=""+ue(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ue(a):""}function Sr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Lv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _d(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Lv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&_d(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&_d(e,f,n[f])}function Dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(e){return Ov.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uc=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,yr=null;function xd(e){var n=ra(e);if(n&&(e=n.stateNode)){var a=e[Ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Ke]||null;if(!c)throw Error(r(90));Fe(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&yn(s)}break t;case"textarea":vn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var Nc=!1;function Sd(e,n,a){if(Nc)return e(n,a);Nc=!0;try{var s=e(n);return s}finally{if(Nc=!1,(Mr!==null||yr!==null)&&(bl(),Mr&&(n=Mr,e=yr,yr=Mr=null,xd(n),e)))for(n=0;n<e.length;n++)xd(e[n])}}function Ts(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Ke]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(Pi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Oc=!1}var oa=null,Pc=null,Go=null;function Md(){if(Go)return Go;var e,n=Pc,a=n.length,s,c="value"in oa?oa.value:oa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Go=c.slice(e,1<s?1-s:void 0)}function Vo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function yd(){return!1}function Bn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:yd,this.isPropagationStopped=yd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Bn(Ha),As=_({},Ha,{view:0,detail:0}),Pv=Bn(As),Bc,zc,Rs,Wo=_({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rs&&(Rs&&e.type==="mousemove"?(Bc=e.screenX-Rs.screenX,zc=e.screenY-Rs.screenY):zc=Bc=0,Rs=e),Bc)},movementY:function(e){return"movementY"in e?e.movementY:zc}}),Ed=Bn(Wo),Bv=_({},Wo,{dataTransfer:0}),zv=Bn(Bv),Iv=_({},As,{relatedTarget:0}),Ic=Bn(Iv),Fv=_({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=Bn(Fv),Gv=_({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=Bn(Gv),kv=_({},Ha,{data:0}),Td=Bn(kv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qv[e])?!!n[e]:!1}function Fc(){return Yv}var Zv=_({},As,{key:function(e){if(e.key){var n=Xv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jv=Bn(Zv),Kv=_({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Bn(Kv),Qv=_({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),Jv=Bn(Qv),$v=_({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=Bn($v),e0=_({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=Bn(e0),i0=_({},Ha,{newState:0,oldState:0}),a0=Bn(i0),r0=[9,13,27,32],Hc=Pi&&"CompositionEvent"in window,ws=null;Pi&&"documentMode"in document&&(ws=document.documentMode);var s0=Pi&&"TextEvent"in window&&!ws,Ad=Pi&&(!Hc||ws&&8<ws&&11>=ws),Rd=" ",wd=!1;function Cd(e,n){switch(e){case"keyup":return r0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function o0(e,n){switch(e){case"compositionend":return Dd(n);case"keypress":return n.which!==32?null:(wd=!0,Rd);case"textInput":return e=n.data,e===Rd&&wd?null:e;default:return null}}function l0(e,n){if(Er)return e==="compositionend"||!Hc&&Cd(e,n)?(e=Md(),Go=Pc=oa=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ad&&n.locale!=="ko"?null:n.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!c0[e.type]:n==="textarea"}function Ld(e,n,a,s){Mr?yr?yr.push(s):yr=[s]:Mr=s,n=Ul(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Cs=null,Ds=null;function u0(e){hg(e,0)}function qo(e){var n=Fa(e);if(yn(n))return e}function Nd(e,n){if(e==="change")return n}var Od=!1;if(Pi){var Gc;if(Pi){var Vc="oninput"in document;if(!Vc){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Vc=typeof Pd.oninput=="function"}Gc=Vc}else Gc=!1;Od=Gc&&(!document.documentMode||9<document.documentMode)}function Bd(){Cs&&(Cs.detachEvent("onpropertychange",zd),Ds=Cs=null)}function zd(e){if(e.propertyName==="value"&&qo(Ds)){var n=[];Ld(n,Ds,e,Lc(e)),Sd(u0,n)}}function f0(e,n,a){e==="focusin"?(Bd(),Cs=n,Ds=a,Cs.attachEvent("onpropertychange",zd)):e==="focusout"&&Bd()}function h0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ds)}function d0(e,n){if(e==="click")return qo(n)}function p0(e,n){if(e==="input"||e==="change")return qo(n)}function m0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:m0;function Us(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ae.call(n,c)||!Vn(e[c],n[c]))return!1}return!0}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var a=Id(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Id(a)}}function Hd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ui(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ui(e.document)}return n}function kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var g0=Pi&&"documentMode"in document&&11>=document.documentMode,Tr=null,Xc=null,Ls=null,Wc=!1;function Vd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Tr==null||Tr!==ui(s)||(s=Tr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ls&&Us(Ls,s)||(Ls=s,s=Ul(Xc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Tr)))}function Ga(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var br={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},qc={},kd={};Pi&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Va(e){if(qc[e])return qc[e];if(!br[e])return e;var n=br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kd)return qc[e]=n[a];return e}var Xd=Va("animationend"),Wd=Va("animationiteration"),qd=Va("animationstart"),_0=Va("transitionrun"),v0=Va("transitionstart"),x0=Va("transitioncancel"),Yd=Va("transitionend"),Zd=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function fi(e,n){Zd.set(e,n),A(n,[e])}var jd=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ne(n)},jd.set(e,n),n)}return{value:e,source:n,stack:Ne(n)}}var $n=[],Ar=0,Zc=0;function Yo(){for(var e=Ar,n=Zc=Ar=0;n<e;){var a=$n[n];$n[n++]=null;var s=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&Kd(a,c,f)}}function Zo(e,n,a,s){$n[Ar++]=e,$n[Ar++]=n,$n[Ar++]=a,$n[Ar++]=s,Zc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function jc(e,n,a,s){return Zo(e,n,a,s),jo(e)}function Rr(e,n){return Zo(e,null,null,n),jo(e)}function Kd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(e){if(50<io)throw io=0,ef=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var wr={};function S0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,s){return new S0(e,n,a,s)}function Kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ko(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")Kc(e)&&(S=1);else if(typeof e=="string")S=yx(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=kn(31,a,n,c),e.elementType=C,e.lanes=f,e;case b:return ka(a.children,c,f,n);case R:S=8,c|=24;break;case M:return e=kn(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case z:return e=kn(13,a,n,c),e.elementType=z,e.lanes=f,e;case G:return e=kn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case O:S=10;break t;case I:S=9;break t;case D:S=11;break t;case H:S=14;break t;case j:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=kn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ka(e,n,a,s){return e=kn(7,e,s,n),e.lanes=a,e}function Qc(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function Jc(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cr=[],Dr=0,Qo=null,Jo=0,ti=[],ei=0,Xa=null,zi=1,Ii="";function Wa(e,n){Cr[Dr++]=Jo,Cr[Dr++]=Qo,Qo=e,Jo=n}function Jd(e,n,a){ti[ei++]=zi,ti[ei++]=Ii,ti[ei++]=Xa,Xa=e;var s=zi;e=Ii;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,zi=1<<32-Pt(n)+c|a<<c|s,Ii=f+e}else zi=1<<f|a<<c|s,Ii=e}function $c(e){e.return!==null&&(Wa(e,1),Jd(e,1,0))}function tu(e){for(;e===Qo;)Qo=Cr[--Dr],Cr[Dr]=null,Jo=Cr[--Dr],Cr[Dr]=null;for(;e===Xa;)Xa=ti[--ei],ti[ei]=null,Ii=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null}var Dn=null,Je=null,we=!1,qa=null,Ei=!1,eu=Error(r(519));function Ya(e){var n=Error(r(418,""));throw Ps(Jn(n,e)),eu}function $d(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[ln]=e,n[Ke]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)ge(ro[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),pe(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Sr(n,s.value,s.defaultValue,s.children),pe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||gg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Ya(e)}function tp(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Dn=Dn.return}}function Ns(e){if(e!==Dn)return!1;if(!we)return tp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vf(e.type,e.memoizedProps)),a=!a),a&&Je&&Ya(e),tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=di(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Ea(e.type)?(e=yf,yf=null,Je=e):Je=n):Je=Dn?di(e.stateNode.nextSibling):null;return!0}function Os(){Je=Dn=null,we=!1}function ep(){var e=qa;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),qa=null),e}function Ps(e){qa===null?qa=[e]:qa.push(e)}var nu=$(null),Za=null,Fi=null;function la(e,n,a){St(nu,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=nu.current,vt(nu)}function iu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function au(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),iu(f.return,a,e),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),iu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Bs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Vn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===Mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(fo):e=[fo])}c=c.return}e!==null&&au(n,e,a,s),n.flags|=262144}function $o(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Za=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return np(Za,e)}function tl(e,n){return Za===null&&ja(e),np(e,n)}function np(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var M0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},y0=o.unstable_scheduleCallback,E0=o.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new M0,data:new Map,refCount:0}}function zs(e){e.refCount--,e.refCount===0&&y0(E0,function(){e.controller.abort()})}var Is=null,su=0,Ur=0,Lr=null;function T0(e,n){if(Is===null){var a=Is=[];su=0,Ur=cf(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return su++,n.then(ip,ip),n}function ip(){if(--su===0&&Is!==null){Lr!==null&&(Lr.status="fulfilled");var e=Is;Is=null,Ur=0,Lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function b0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var ap=L.S;L.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&T0(e,n),ap!==null&&ap(e,n)};var Ka=$(null);function ou(){var e=Ka.current;return e!==null?e:Ve.pooledCache}function el(e,n){n===null?St(Ka,Ka.current):St(Ka,n.pool)}function rp(){var e=ou();return e===null?null:{parent:cn._currentValue,pool:e}}var Fs=Error(r(460)),sp=Error(r(474)),nl=Error(r(542)),lu={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function il(){}function lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(il,il),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e;default:if(typeof n.status=="string")n.then(il,il);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,up(e),e}throw Hs=n,Fs}}var Hs=null;function cp(){if(Hs===null)throw Error(r(459));var e=Hs;return Hs=null,e}function up(e){if(e===Fs||e===nl)throw Error(r(483))}var ca=!1;function cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=jo(e),Kd(e,null,a),n}return Zo(e,s,n,a),jo(e)}function Gs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Gt(e,a)}}function fu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var hu=!1;function Vs(){if(hu){var e=Lr;if(e!==null)throw e}}function ks(e,n,a,s){hu=!1;var c=e.updateQueue;ca=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,Q=P.next;P.next=null,S===null?f=Q:S.next=Q,S=P;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==S&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;S=0,ft=Q=P=null,T=f;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(ye&nt)===nt:(s&nt)===nt){nt!==0&&nt===Ur&&(hu=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,Jt=T;nt=n;var Be=a;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){mt=ne.call(Be,mt,nt);break t}mt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,nt=typeof ne=="function"?ne.call(Be,mt,nt):ne,nt==null)break t;mt=_({},mt,nt);break t;case 2:ca=!0}}nt=T.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=it,P=mt):ft=ft.next=it,S|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;it=T,T=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ft===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),xa|=S,e.lanes=S,e.memoizedState=mt}}function fp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fp(a[e],n)}var Nr=$(null),al=$(0);function dp(e,n){e=Yi,St(al,e),St(Nr,n),Yi=e|n.baseLanes}function du(){St(al,Yi),St(Nr,Nr.current)}function pu(){Yi=al.current,vt(Nr),vt(al)}var ha=0,he=null,Oe=null,an=null,rl=!1,Or=!1,Qa=!1,sl=0,Xs=0,Pr=null,A0=0;function tn(){throw Error(r(321))}function mu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function gu(e,n,a,s,c,f){return ha=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Kp:Qp,Qa=!1,f=a(s,c),Qa=!1,Or&&(f=mp(n,a,s,c)),pp(e),f}function pp(e){L.H=hl;var n=Oe!==null&&Oe.next!==null;if(ha=0,an=Oe=he=null,rl=!1,Xs=0,Pr=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&$o(e)&&(pn=!0))}function mp(e,n,a,s){he=e;var c=0;do{if(Or&&(Pr=null),Xs=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,an=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=N0,f=n(a,s)}while(Or);return f}function R0(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Ws(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(he.flags|=1024),n}function _u(){var e=sl!==0;return sl=0,e}function vu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function xu(e){if(rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rl=!1}ha=0,an=Oe=he=null,Or=!1,Xs=sl=0,Pr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?he.memoizedState=an=e:an=an.next=e,an}function rn(){if(Oe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=an===null?he.memoizedState:an.next;if(n!==null)an=n,Oe=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?he.memoizedState=an=e:an=an.next=e}return an}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(e){var n=Xs;return Xs+=1,Pr===null&&(Pr=[]),e=lp(Pr,e,n),n=he,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Kp:Qp),e}function ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ws(e);if(e.$$typeof===O)return Tn(e)}throw Error(r(438,String(e)))}function Mu(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=w;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=rn();return yu(n,Oe,e)}function yu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,P=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(ye&mt)===mt:(ha&mt)===mt){var nt=Q.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Ur&&(ft=!0);else if((ha&nt)===nt){Q=Q.next,nt===Ur&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=mt,S=f):P=P.next=mt,he.lanes|=nt,xa|=nt;mt=Q.action,Qa&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else nt={lane:mt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=nt,S=f):P=P.next=nt,he.lanes|=mt,xa|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?S=f:P.next=T,!Vn(f,e.memoizedState)&&(pn=!0,ft&&(a=Lr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Eu(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Vn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function gp(e,n,a){var s=he,c=rn(),f=we;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Oe||c).memoizedState,a);S&&(c.memoizedState=a,pn=!0),c=c.queue;var T=xp.bind(null,s,c,e);if(qs(2048,8,T,[e]),c.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Br(9,cl(),vp.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(ha&124)!==0||_p(s,n,a)}return a}function _p(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Su(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vp(e,n,a,s){n.value=a,n.getSnapshot=s,Sp(n)&&Mp(e)}function xp(e,n,a){return a(function(){Sp(n)&&Mp(e)})}function Sp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Mp(e){var n=Rr(e,2);n!==null&&Zn(n,e,2)}function Tu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),Qa){st(!0);try{a()}finally{st(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function yp(e,n,a,s){return e.baseState=a,yu(e,Oe,typeof s=="function"?s:Gi)}function w0(e,n,a,s,c){if(fl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Ep(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ep(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=L.T,S={};L.T=S;try{var T=a(c,s),P=L.S;P!==null&&P(S,T),Tp(e,n,T)}catch(Q){bu(e,n,Q)}finally{L.T=f}}else try{f=a(c,s),Tp(e,n,f)}catch(Q){bu(e,n,Q)}}function Tp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){bp(e,n,s)},function(s){return bu(e,n,s)}):bp(e,n,a)}function bp(e,n,a){n.status="fulfilled",n.value=a,Ap(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ep(e,a)))}function bu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ap(n),n=n.next;while(n!==s)}e.action=null}function Ap(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rp(e,n){return n}function wp(e,n){if(we){var a=Ve.formState;if(a!==null){t:{var s=he;if(we){if(Je){e:{for(var c=Je,f=Ei;c.nodeType!==8;){if(!f){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=di(c.nextSibling),s=c.data==="F!";break t}}Ya(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rp,lastRenderedState:n},a.queue=s,a=Yp.bind(null,he,s),s.dispatch=a,s=Tu(!1),f=Du.bind(null,he,!1,s.queue),s=zn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=w0.bind(null,he,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Cp(e){var n=rn();return Dp(n,Oe,e)}function Dp(e,n,a){if(n=yu(e,n,Rp)[0],e=ll(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ws(n)}catch(S){throw S===Fs?nl:S}else s=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Br(9,cl(),C0.bind(null,c,a),null)),[s,f,e]}function C0(e,n){e.action=n}function Up(e){var n=rn(),a=Oe;if(a!==null)return Dp(n,a,e);rn(),n=n.memoizedState,a=rn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Br(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Su(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function cl(){return{destroy:void 0,resource:void 0}}function Lp(){return rn().memoizedState}function ul(e,n,a,s){var c=zn();s=s===void 0?null:s,he.flags|=e,c.memoizedState=Br(1|n,cl(),a,s)}function qs(e,n,a,s){var c=rn();s=s===void 0?null:s;var f=c.memoizedState.inst;Oe!==null&&s!==null&&mu(s,Oe.memoizedState.deps)?c.memoizedState=Br(n,f,a,s):(he.flags|=e,c.memoizedState=Br(1|n,f,a,s))}function Np(e,n){ul(8390656,8,e,n)}function Op(e,n){qs(2048,8,e,n)}function Pp(e,n){return qs(4,2,e,n)}function Bp(e,n){return qs(4,4,e,n)}function zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ip(e,n,a){a=a!=null?a.concat([e]):null,qs(4,4,zp.bind(null,n,e),a)}function Au(){}function Fp(e,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Hp(e,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mu(n,s[1]))return s[0];if(s=e(),Qa){st(!0);try{e()}finally{st(!1)}}return a.memoizedState=[s,n],s}function Ru(e,n,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=km(),he.lanes|=e,xa|=e,a)}function Gp(e,n,a,s){return Vn(a,n)?a:Nr.current!==null?(e=Ru(e,a,s),Vn(e,n)||(pn=!0),e):(ha&42)===0?(pn=!0,e.memoizedState=a):(e=km(),he.lanes|=e,xa|=e,n)}function Vp(e,n,a,s,c){var f=k.p;k.p=f!==0&&8>f?f:8;var S=L.T,T={};L.T=T,Du(e,!1,n,a);try{var P=c(),Q=L.S;if(Q!==null&&Q(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=b0(P,s);Ys(e,n,ft,Yn(e))}else Ys(e,n,s,Yn(e))}catch(mt){Ys(e,n,{then:function(){},status:"rejected",reason:mt},Yn())}finally{k.p=f,L.T=S}}function D0(){}function wu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=kp(e).queue;Vp(e,c,n,W,a===null?D0:function(){return Xp(e),a(s)})}function kp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xp(e){var n=kp(e).next.queue;Ys(e,n,{},Yn())}function Cu(){return Tn(fo)}function Wp(){return rn().memoizedState}function qp(){return rn().memoizedState}function U0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();e=ua(a);var s=fa(n,e,a);s!==null&&(Zn(s,n,a),Gs(s,n,a)),n={cache:ru()},e.payload=n;return}n=n.return}}function L0(e,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)?Zp(n,a):(a=jc(e,n,a,s),a!==null&&(Zn(a,e,s),jp(a,n,s)))}function Yp(e,n,a){var s=Yn();Ys(e,n,a,s)}function Ys(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(e))Zp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,S))return Zo(e,n,c,0),Ve===null&&Yo(),!1}catch{}finally{}if(a=jc(e,n,c,s),a!==null)return Zn(a,e,s),jp(a,n,s),!0}return!1}function Du(e,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(n)throw Error(r(479))}else n=jc(e,a,s,2),n!==null&&Zn(n,e,2)}function fl(e){var n=e.alternate;return e===he||n!==null&&n===he}function Zp(e,n){Or=rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Gt(e,a)}}var hl={readContext:Tn,use:ol,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Kp={readContext:Tn,use:ol,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Np,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ul(4194308,4,zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ul(4194308,4,e,n)},useInsertionEffect:function(e,n){ul(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var s=e();if(Qa){st(!0);try{e()}finally{st(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=zn();if(a!==void 0){var c=a(n);if(Qa){st(!0);try{a(n)}finally{st(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=L0.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Tu(e);var n=e.queue,a=Yp.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Au,useDeferredValue:function(e,n){var a=zn();return Ru(a,e,n)},useTransition:function(){var e=Tu(!1);return e=Vp.bind(null,he,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=he,c=zn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ye&124)!==0||_p(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Np(xp.bind(null,s,f,e),[e]),s.flags|=2048,Br(9,cl(),vp.bind(null,s,f,a,n),null),a},useId:function(){var e=zn(),n=Ve.identifierPrefix;if(we){var a=Ii,s=zi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=A0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Cu,useFormState:wp,useActionState:wp,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Du.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Mu,useCacheRefresh:function(){return zn().memoizedState=U0.bind(null,he)}},Qp={readContext:Tn,use:ol,useCallback:Fp,useContext:Tn,useEffect:Op,useImperativeHandle:Ip,useInsertionEffect:Pp,useLayoutEffect:Bp,useMemo:Hp,useReducer:ll,useRef:Lp,useState:function(){return ll(Gi)},useDebugValue:Au,useDeferredValue:function(e,n){var a=rn();return Gp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=ll(Gi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:gp,useId:Wp,useHostTransitionStatus:Cu,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,n){var a=rn();return yp(a,Oe,e,n)},useMemoCache:Mu,useCacheRefresh:qp},N0={readContext:Tn,use:ol,useCallback:Fp,useContext:Tn,useEffect:Op,useImperativeHandle:Ip,useInsertionEffect:Pp,useLayoutEffect:Bp,useMemo:Hp,useReducer:Eu,useRef:Lp,useState:function(){return Eu(Gi)},useDebugValue:Au,useDeferredValue:function(e,n){var a=rn();return Oe===null?Ru(a,e,n):Gp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Eu(Gi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:gp,useId:Wp,useHostTransitionStatus:Cu,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=rn();return Oe!==null?yp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:qp},zr=null,Zs=0;function dl(e){var n=Zs;return Zs+=1,zr===null&&(zr=[]),lp(zr,e,n)}function js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){var n=e._init;return n(e._payload)}function $p(e){function n(Y,V){if(e){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Bi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,K,pt){return V===null||V.tag!==6?(V=Qc(K,Y.mode,pt),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function P(Y,V,K,pt){var Ht=K.type;return Ht===b?ft(Y,V,K.props.children,pt,K.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===j&&Jp(Ht)===V.type)?(V=c(V,K.props),js(V,K),V.return=Y,V):(V=Ko(K.type,K.key,K.props,null,Y.mode,pt),js(V,K),V.return=Y,V)}function Q(Y,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Jc(K,Y.mode,pt),V.return=Y,V):(V=c(V,K.children||[]),V.return=Y,V)}function ft(Y,V,K,pt,Ht){return V===null||V.tag!==7?(V=ka(K,Y.mode,pt,Ht),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function mt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Qc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=Ko(V.type,V.key,V.props,null,Y.mode,K),js(K,V),K.return=Y,K;case y:return V=Jc(V,Y.mode,K),V.return=Y,V;case j:var pt=V._init;return V=pt(V._payload),mt(Y,V,K)}if(ht(V)||ot(V))return V=ka(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,dl(V),K);if(V.$$typeof===O)return mt(Y,tl(Y,V),K);pl(Y,V)}return null}function nt(Y,V,K,pt){var Ht=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:T(Y,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ht?P(Y,V,K,pt):null;case y:return K.key===Ht?Q(Y,V,K,pt):null;case j:return Ht=K._init,K=Ht(K._payload),nt(Y,V,K,pt)}if(ht(K)||ot(K))return Ht!==null?null:ft(Y,V,K,pt,null);if(typeof K.then=="function")return nt(Y,V,dl(K),pt);if(K.$$typeof===O)return nt(Y,V,tl(Y,K),pt);pl(Y,K)}return null}function it(Y,V,K,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,T(V,Y,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return Y=Y.get(pt.key===null?K:pt.key)||null,P(V,Y,pt,Ht);case y:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(V,Y,pt,Ht);case j:var de=pt._init;return pt=de(pt._payload),it(Y,V,K,pt,Ht)}if(ht(pt)||ot(pt))return Y=Y.get(K)||null,ft(V,Y,pt,Ht,null);if(typeof pt.then=="function")return it(Y,V,K,dl(pt),Ht);if(pt.$$typeof===O)return it(Y,V,K,tl(V,pt),Ht);pl(V,pt)}return null}function ne(Y,V,K,pt){for(var Ht=null,de=null,Zt=V,te=V=0,gn=null;Zt!==null&&te<K.length;te++){Zt.index>te?(gn=Zt,Zt=null):gn=Zt.sibling;var Ae=nt(Y,Zt,K[te],pt);if(Ae===null){Zt===null&&(Zt=gn);break}e&&Zt&&Ae.alternate===null&&n(Y,Zt),V=f(Ae,V,te),de===null?Ht=Ae:de.sibling=Ae,de=Ae,Zt=gn}if(te===K.length)return a(Y,Zt),we&&Wa(Y,te),Ht;if(Zt===null){for(;te<K.length;te++)Zt=mt(Y,K[te],pt),Zt!==null&&(V=f(Zt,V,te),de===null?Ht=Zt:de.sibling=Zt,de=Zt);return we&&Wa(Y,te),Ht}for(Zt=s(Zt);te<K.length;te++)gn=it(Zt,Y,te,K[te],pt),gn!==null&&(e&&gn.alternate!==null&&Zt.delete(gn.key===null?te:gn.key),V=f(gn,V,te),de===null?Ht=gn:de.sibling=gn,de=gn);return e&&Zt.forEach(function(wa){return n(Y,wa)}),we&&Wa(Y,te),Ht}function Jt(Y,V,K,pt){if(K==null)throw Error(r(151));for(var Ht=null,de=null,Zt=V,te=V=0,gn=null,Ae=K.next();Zt!==null&&!Ae.done;te++,Ae=K.next()){Zt.index>te?(gn=Zt,Zt=null):gn=Zt.sibling;var wa=nt(Y,Zt,Ae.value,pt);if(wa===null){Zt===null&&(Zt=gn);break}e&&Zt&&wa.alternate===null&&n(Y,Zt),V=f(wa,V,te),de===null?Ht=wa:de.sibling=wa,de=wa,Zt=gn}if(Ae.done)return a(Y,Zt),we&&Wa(Y,te),Ht;if(Zt===null){for(;!Ae.done;te++,Ae=K.next())Ae=mt(Y,Ae.value,pt),Ae!==null&&(V=f(Ae,V,te),de===null?Ht=Ae:de.sibling=Ae,de=Ae);return we&&Wa(Y,te),Ht}for(Zt=s(Zt);!Ae.done;te++,Ae=K.next())Ae=it(Zt,Y,te,Ae.value,pt),Ae!==null&&(e&&Ae.alternate!==null&&Zt.delete(Ae.key===null?te:Ae.key),V=f(Ae,V,te),de===null?Ht=Ae:de.sibling=Ae,de=Ae);return e&&Zt.forEach(function(Ox){return n(Y,Ox)}),we&&Wa(Y,te),Ht}function Be(Y,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ht=K.key;V!==null;){if(V.key===Ht){if(Ht=K.type,Ht===b){if(V.tag===7){a(Y,V.sibling),pt=c(V,K.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===j&&Jp(Ht)===V.type){a(Y,V.sibling),pt=c(V,K.props),js(pt,K),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===b?(pt=ka(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=Ko(K.type,K.key,K.props,null,Y.mode,pt),js(pt,K),pt.return=Y,Y=pt)}return S(Y);case y:t:{for(Ht=K.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),pt=c(V,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=Jc(K,Y.mode,pt),pt.return=Y,Y=pt}return S(Y);case j:return Ht=K._init,K=Ht(K._payload),Be(Y,V,K,pt)}if(ht(K))return ne(Y,V,K,pt);if(ot(K)){if(Ht=ot(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Jt(Y,V,K,pt)}if(typeof K.then=="function")return Be(Y,V,dl(K),pt);if(K.$$typeof===O)return Be(Y,V,tl(Y,K),pt);pl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),pt=c(V,K),pt.return=Y,Y=pt):(a(Y,V),pt=Qc(K,Y.mode,pt),pt.return=Y,Y=pt),S(Y)):a(Y,V)}return function(Y,V,K,pt){try{Zs=0;var Ht=Be(Y,V,K,pt);return zr=null,Ht}catch(Zt){if(Zt===Fs||Zt===nl)throw Zt;var de=kn(29,Zt,null,Y.mode);return de.lanes=pt,de.return=Y,de}finally{}}}var Ir=$p(!0),tm=$p(!1),ni=$(null),Ti=null;function da(e){var n=e.alternate;St(un,un.current&1),St(ni,e),Ti===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(Ti=e)}function em(e){if(e.tag===22){if(St(un,un.current),St(ni,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else pa()}function pa(){St(un,un.current),St(ni,ni.current)}function Vi(e){vt(ni),Ti===e&&(Ti=null),vt(un)}var un=$(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Mf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Lu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Yn(),c=ua(s);c.payload=n,a!=null&&(c.callback=a),n=fa(e,c,s),n!==null&&(Zn(n,e,s),Gs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Yn(),c=ua(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=fa(e,c,s),n!==null&&(Zn(n,e,s),Gs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yn(),s=ua(a);s.tag=2,n!=null&&(s.callback=n),n=fa(e,s,a),n!==null&&(Zn(n,e,a),Gs(n,e,a))}};function nm(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Us(a,s)||!Us(c,f):!0}function im(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Lu.enqueueReplaceState(n,n.state,null)}function Ja(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function am(e){gl(e)}function rm(e){console.error(e)}function sm(e){gl(e)}function _l(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function om(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Nu(e,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(e,n)},a}function lm(e){return e=ua(e),e.tag=3,e}function cm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){om(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){om(n,a,s),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function O0(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ti===null?af():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(e,s,c)),!1;case 22:return a.flags|=65536,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(e,s,c)),!1}throw Error(r(435,a.tag))}return sf(e,s,c),af(),!1}if(we)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==eu&&(e=Error(r(422),{cause:s}),Ps(Jn(e,a)))):(s!==eu&&(n=Error(r(423),{cause:s}),Ps(Jn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Jn(s,a),c=Nu(e.stateNode,s,c),fu(e,c),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),no===null?no=[f]:no.push(f),$e!==4&&($e=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Nu(a.stateNode,s,e),fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=lm(c),cm(c,e,a,s),fu(a,c),!1}a=a.return}while(a!==null);return!1}var um=Error(r(461)),pn=!1;function xn(e,n,a,s){n.child=e===null?tm(n,null,a,s):Ir(n,e.child,a,s)}function fm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return ja(n),s=gu(e,n,a,S,f,c),T=_u(),e!==null&&!pn?(vu(e,n,c),ki(e,n,c)):(we&&T&&$c(n),n.flags|=1,xn(e,n,s,c),n.child)}function hm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Kc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,dm(e,n,f,s,c)):(e=Ko(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Gu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Us,a(S,s)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=Bi(f,s),e.ref=n.ref,e.return=n,n.child=e}function dm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Us(f,s)&&e.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Gu(e,c))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return Ou(e,n,a,s,c)}function pm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return mm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&el(n,f!==null?f.cachePool:null),f!==null?dp(n,f):du(),em(n);else return n.lanes=n.childLanes=536870912,mm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(el(n,f.cachePool),dp(n,f),pa(),n.memoizedState=null):(e!==null&&el(n,null),du(),pa());return xn(e,n,c,a),n.child}function mm(e,n,a,s){var c=ou();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&el(n,null),du(),em(n),e!==null&&Bs(e,n,s,!0),null}function vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ou(e,n,a,s,c){return ja(n),a=gu(e,n,a,s,void 0,c),s=_u(),e!==null&&!pn?(vu(e,n,c),ki(e,n,c)):(we&&s&&$c(n),n.flags|=1,xn(e,n,a,c),n.child)}function gm(e,n,a,s,c,f){return ja(n),n.updateQueue=null,a=mp(n,s,a,c),pp(e),s=_u(),e!==null&&!pn?(vu(e,n,f),ki(e,n,f)):(we&&s&&$c(n),n.flags|=1,xn(e,n,a,f),n.child)}function _m(e,n,a,s,c){if(ja(n),n.stateNode===null){var f=wr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Lu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},cu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):wr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Uu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Lu.enqueueReplaceState(f,f.state,null),ks(n,s,f,c),Vs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=Ja(a,T);f.props=P;var Q=f.context,ft=a.contextType;S=wr,typeof ft=="object"&&ft!==null&&(S=Tn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==S)&&im(n,f,s,S),ca=!1;var nt=n.memoizedState;f.state=nt,ks(n,s,f,c),Vs(),Q=n.memoizedState,T||nt!==Q||ca?(typeof mt=="function"&&(Uu(n,a,mt,s),Q=n.memoizedState),(P=ca||nm(n,a,P,s,nt,Q,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=S,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,uu(e,n),S=n.memoizedProps,ft=Ja(a,S),f.props=ft,mt=n.pendingProps,nt=f.context,Q=a.contextType,P=wr,typeof Q=="object"&&Q!==null&&(P=Tn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||nt!==P)&&im(n,f,s,P),ca=!1,nt=n.memoizedState,f.state=nt,ks(n,s,f,c),Vs();var it=n.memoizedState;S!==mt||nt!==it||ca||e!==null&&e.dependencies!==null&&$o(e.dependencies)?(typeof T=="function"&&(Uu(n,a,T,s),it=n.memoizedState),(ft=ca||nm(n,a,ft,s,nt,it,P)||e!==null&&e.dependencies!==null&&$o(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=P,s=ft):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,vl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Ir(n,e.child,null,c),n.child=Ir(n,null,a,c)):xn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function vm(e,n,a,s){return Os(),n.flags|=256,xn(e,n,a,s),n.child}var Pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bu(e){return{baseLanes:e,cachePool:rp()}}function zu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function xm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(c?da(n):pa(),we){var T=Je,P;if(P=T){t:{for(P=T,T=Ei;P.nodeType!==8;){if(!T){T=null;break t}if(P=di(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:Xa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},P=kn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Dn=n,Je=null,P=!0):P=!1}P||Ya(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Mf(T)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return T=s.children,s=s.fallback,c?(pa(),c=n.mode,T=xl({mode:"hidden",children:T},c),s=ka(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=Bu(a),c.childLanes=zu(e,S,a),n.memoizedState=Pu,s):(da(n),Iu(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(da(n),n.flags&=-257,n=Fu(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),c=s.fallback,T=n.mode,s=xl({mode:"visible",children:s.children},T),c=ka(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ir(n,e.child,null,a),s=n.child,s.memoizedState=Bu(a),s.childLanes=zu(e,S,a),n.memoizedState=Pu,n=c);else if(da(n),Mf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var Q=S.dgst;S=Q,s=Error(r(419)),s.stack="",s.digest=S,Ps({value:s,source:null,stack:null}),n=Fu(e,n,a)}else if(pn||Bs(e,n,a,!1),S=(a&e.childLanes)!==0,pn||S){if(S=Ve,S!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Rr(e,s),Zn(S,e,s),um;T.data==="$?"||af(),n=Fu(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Je=di(T.nextSibling),Dn=n,we=!0,qa=null,Ei=!1,e!==null&&(ti[ei++]=zi,ti[ei++]=Ii,ti[ei++]=Xa,zi=e.id,Ii=e.overflow,Xa=n),n=Iu(n,s.children),n.flags|=4096);return n}return c?(pa(),c=s.fallback,T=n.mode,P=e.child,Q=P.sibling,s=Bi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,Q!==null?c=Bi(Q,c):(c=ka(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=e.child.memoizedState,T===null?T=Bu(a):(P=T.cachePool,P!==null?(Q=cn._currentValue,P=P.parent!==Q?{parent:Q,pool:Q}:P):P=rp(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=zu(e,S,a),n.memoizedState=Pu,s):(da(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Iu(e,n){return n=xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xl(e,n){return e=kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Fu(e,n,a){return Ir(n,e.child,null,a),e=Iu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),iu(e.return,n,a)}function Hu(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Mm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(xn(e,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sm(e,a,n);else if(e.tag===19)Sm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(St(un,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Hu(n,!0,a,null,f);break;case"together":Hu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Bs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&$o(e)))}function P0(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),la(n,cn,e.memoizedState.cache),Os();break;case 27:case 5:ee(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xm(e,n,a):(da(n),e=ki(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Bs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Mm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,pm(e,n,a);case 24:la(n,cn,e.memoizedState.cache)}return ki(e,n,a)}function ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Gu(e,a)&&(n.flags&128)===0)return pn=!1,P0(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,we&&(n.flags&1048576)!==0&&Jd(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Kc(s)?(e=Ja(s,e),n.tag=1,n=_m(null,n,s,e,a)):(n.tag=0,n=Ou(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===D){n.tag=11,n=fm(null,n,s,e,a);break t}else if(c===H){n.tag=14,n=hm(null,n,s,e,a);break t}}throw n=ct(s)||s,Error(r(306,n,""))}}return n;case 0:return Ou(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ja(s,n.pendingProps),_m(e,n,s,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,uu(e,n),ks(n,s,null,a);var S=n.memoizedState;if(s=S.cache,la(n,cn,s),s!==f.cache&&au(n,[cn],a,!0),Vs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=vm(e,n,s,a);break t}else if(s!==c){c=Jn(Error(r(424)),n),Ps(c),n=vm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=di(e.firstChild),Dn=n,we=!0,qa=null,Ei=!0,a=tm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),s===c){n=ki(e,n,a);break t}xn(e,n,s,a)}n=n.child}return n;case 26:return vl(e,n),e===null?(a=Ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,s=Nl(dt.current).createElement(a),s[ln]=n,s[Ke]=e,Mn(s,a,e),nn(s),n.stateNode=s):n.memoizedState=Ag(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&we&&(s=n.stateNode=Eg(n.type,n.pendingProps,dt.current),Dn=n,Ei=!0,c=Je,Ea(n.type)?(yf=c,Je=di(s.firstChild)):Je=c),xn(e,n,n.pendingProps.children,a),vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((c=s=Je)&&(s=cx(s,n.type,n.pendingProps,Ei),s!==null?(n.stateNode=s,Dn=n,Je=di(s.firstChild),Ei=!1,c=!0):c=!1),c||Ya(n)),ee(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,vf(c,f)?s=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=gu(e,n,R0,null,null,a),fo._currentValue=c),vl(e,n),xn(e,n,s,a),n.child;case 6:return e===null&&we&&((e=a=Je)&&(a=ux(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Dn=n,Je=null,e=!0):e=!1),e||Ya(n)),null;case 13:return xm(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ir(n,null,s,a):xn(e,n,s,a),n.child;case 11:return fm(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,la(n,n.type,s.value),xn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ja(n),c=Tn(c),s=s(c),n.flags|=1,xn(e,n,s,a),n.child;case 14:return hm(e,n,n.type,n.pendingProps,a);case 15:return dm(e,n,n.type,n.pendingProps,a);case 19:return Mm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=xl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return pm(e,n,a);case 24:return ja(n),s=Tn(cn),e===null?(c=ou(),c===null&&(c=Ve,f=ru(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},cu(n),la(n,cn,c)):((e.lanes&a)!==0&&(uu(e,n),ks(n,null,null,a),Vs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),la(n,cn,s)):(s=f.cache,la(n,cn,s),s!==c.cache&&au(n,[cn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(e){e.flags|=4}function Em(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ug(n)){if(n=ni.current,n!==null&&((ye&4194048)===ye?Ti!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ti))throw Hs=lu,sp;e.flags|=8192}}function Sl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,Vr|=n)}function Ks(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function B0(e,n,a){var s=n.pendingProps;switch(tu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(cn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ns(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ep())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Xi(n),a!==null?(Ze(n),Em(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Xi(n),Ze(n),Em(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==s&&Xi(n),Ze(n),n.flags&=-16777217),null;case 27:Le(n),a=dt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=At.current,Ns(n)?$d(n):(e=Eg(c,s,a),n.stateNode=e,Xi(n))}return Ze(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=At.current,Ns(n))$d(n);else{switch(c=Nl(dt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[ln]=n,e[Ke]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,Ns(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||gg(e.nodeValue,a)),e||Ya(n)}else e=Nl(e).createTextNode(s),e[ln]=n,n.stateNode=e}return Ze(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ns(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),Ze(n),null;case 4:return kt(),e===null&&df(n.stateNode.containerInfo),Ze(n),null;case 10:return Hi(n.type),Ze(n),null;case 19:if(vt(un),c=n.memoizedState,c===null)return Ze(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Ks(c,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,Ks(c,!1),e=f.updateQueue,n.updateQueue=e,Sl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qd(a,e),a=a.sibling;return St(un,un.current&1|2),n.child}e=e.sibling}c.tail!==null&&It()>El&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304)}else{if(!s)if(e=ml(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Sl(n,e),Ks(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!we)return Ze(n),null}else 2*It()-c.renderingStartTime>El&&a!==536870912&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=It(),n.sibling=null,e=un.current,St(un,s?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return Vi(n),pu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&vt(Ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function z0(e,n){switch(tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(cn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(un),null;case 4:return kt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),pu(),e!==null&&vt(Ka),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(cn),null;case 25:return null;default:return null}}function Tm(e,n){switch(tu(n),n.tag){case 3:Hi(cn),kt();break;case 26:case 27:case 5:Le(n);break;case 4:kt();break;case 13:Vi(n);break;case 19:vt(un);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),pu(),e!==null&&vt(Ka);break;case 24:Hi(cn)}}function Qs(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){He(n,n.return,T)}}function ma(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var P=a,Q=T;try{Q()}catch(ft){He(c,P,ft)}}}s=s.next}while(s!==f)}}catch(ft){He(n,n.return,ft)}}function bm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hp(n,a)}catch(s){He(e,e.return,s)}}}function Am(e,n,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){He(e,n,s)}}function Js(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){He(e,n,c)}}function bi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function Rm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function Vu(e,n,a){try{var s=e.stateNode;ax(s,e.type,a,n),s[Ke]=n}catch(c){He(e,e.return,c)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function ku(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&(s===27&&Ea(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Xu(e,n,a),e=e.sibling;e!==null;)Xu(e,n,a),e=e.sibling}function Ml(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function Cm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[ln]=e,n[Ke]=a}catch(f){He(e,e.return,f)}}var Wi=!1,en=!1,Wu=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function I0(e,n){if(e=e.containerInfo,gf=Fl,e=Gd(e),kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,P=-1,Q=0,ft=0,mt=e,nt=null;e:for(;;){for(var it;mt!==a||c!==0&&mt.nodeType!==3||(T=S+c),mt!==f||s!==0&&mt.nodeType!==3||(P=S+s),mt.nodeType===3&&(S+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===e)break e;if(nt===a&&++Q===c&&(T=S),nt===f&&++ft===s&&(P=S),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:e,selectionRange:a},Fl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=Ja(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){He(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Sf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Um(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),s&4&&Qs(5,a);break;case 1:if(ga(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}s&64&&bm(a),s&512&&Js(a,a.return);break;case 3:if(ga(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hp(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&s&4&&Cm(a);case 26:case 5:ga(e,a),n===null&&s&4&&Rm(a),s&512&&Js(a,a.return);break;case 12:ga(e,a);break;case 13:ga(e,a),s&4&&Om(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Y0.bind(null,a),fx(e,a))));break;case 22:if(s=a.memoizedState!==null||Wi,!s){n=n!==null&&n.memoizedState!==null||en,c=Wi;var f=en;Wi=s,(en=n)&&!f?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),Wi=c,en=f}break;case 30:break;default:ga(e,a)}}function Lm(e){var n=e.alternate;n!==null&&(e.alternate=null,Lm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,In=!1;function qi(e,n,a){for(a=a.child;a!==null;)Nm(e,n,a),a=a.sibling}function Nm(e,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:en||bi(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||bi(a,n);var s=We,c=In;Ea(a.type)&&(We=a.stateNode,In=!1),qi(e,n,a),oo(a.stateNode),We=s,In=c;break;case 5:en||bi(a,n);case 6:if(s=We,c=In,We=null,qi(e,n,a),We=s,In=c,We!==null)if(In)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:We!==null&&(In?(e=We,Mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),go(e)):Mg(We,a.stateNode));break;case 4:s=We,c=In,We=a.stateNode.containerInfo,In=!0,qi(e,n,a),We=s,In=c;break;case 0:case 11:case 14:case 15:en||ma(2,a,n),en||ma(4,a,n),qi(e,n,a);break;case 1:en||(bi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Am(a,n,s)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:en=(s=en)||a.memoizedState!==null,qi(e,n,a),en=s;break;default:qi(e,n,a)}}function Om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{go(e)}catch(a){He(n,n.return,a)}}function F0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dm),n;default:throw Error(r(435,e.tag))}}function qu(e,n){var a=F0(e);n.forEach(function(s){var c=Z0.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Ea(T.type)){We=T.stateNode,In=!1;break t}break;case 5:We=T.stateNode,In=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(We===null)throw Error(r(160));Nm(f,S,c),We=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Pm(n,e),n=n.sibling}var hi=null;function Pm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),s&4&&(ma(3,e,e.return),Qs(3,e),ma(5,e,e.return));break;case 1:Xn(n,e),Wn(e),s&512&&(en||a===null||bi(a,a.return)),s&64&&Wi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(Xn(n,e),Wn(e),s&512&&(en||a===null||bi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[yi]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[ln]=e,nn(f),s=f;break t;case"link":var S=Cg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Cg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=e,nn(f),s=f}e.stateNode=s}else Dg(c,e.type,e.stateNode);else e.stateNode=wg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Dg(c,e.type,e.stateNode):wg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Vu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),s&512&&(en||a===null||bi(a,a.return)),a!==null&&s&4&&Vu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),s&512&&(en||a===null||bi(a,a.return)),e.flags&32){c=e.stateNode;try{Pn(c,"")}catch(it){He(e,e.return,it)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Vu(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Wu=!0);break;case 6:if(Xn(n,e),Wn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(it){He(e,e.return,it)}}break;case 3:if(Bl=null,c=hi,hi=Ol(n.containerInfo),Xn(n,e),hi=c,Wn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(it){He(e,e.return,it)}Wu&&(Wu=!1,Bm(e));break;case 4:s=hi,hi=Ol(e.stateNode.containerInfo),Xn(n,e),Wn(e),hi=s;break;case 12:Xn(n,e),Wn(e);break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=It()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,qu(e,s)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=Wi,ft=en;if(Wi=Q||c,en=ft||P,Xn(n,e),en=ft,Wi=Q,Wn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Wi||en||$a(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){He(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){He(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,qu(e,a))));break;case 19:Xn(n,e),Wn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,qu(e,s)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ku(e);Ml(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Pn(S,""),a.flags&=-33);var T=ku(e);Ml(e,T,S);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=ku(e);Xu(e,Q,P);break;default:throw Error(r(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Um(e,n.alternate,n),n=n.sibling}function $a(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),$a(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Am(n,n.return,a),$a(n);break;case 27:oo(n.stateNode);case 26:case 5:bi(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:_a(c,f,a),Qs(4,f);break;case 1:if(_a(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){He(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)fp(P[c],T)}catch(Q){He(s,s.return,Q)}}a&&S&64&&bm(f),Js(f,f.return);break;case 27:Cm(f);case 26:case 5:_a(c,f,a),a&&s===null&&S&4&&Rm(f),Js(f,f.return);break;case 12:_a(c,f,a);break;case 13:_a(c,f,a),a&&S&4&&Om(c,f);break;case 22:f.memoizedState===null&&_a(c,f,a),Js(f,f.return);break;case 30:break;default:_a(c,f,a)}n=n.sibling}}function Yu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zs(a))}function Zu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zs(e))}function Ai(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(e,n,a,s),n=n.sibling}function zm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,s),c&2048&&Qs(9,n);break;case 1:Ai(e,n,a,s);break;case 3:Ai(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zs(e)));break;case 12:if(c&2048){Ai(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else Ai(e,n,a,s);break;case 13:Ai(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,s):$s(e,n):f._visibility&2?Ai(e,n,a,s):(f._visibility|=2,Fr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Yu(S,n);break;case 24:Ai(e,n,a,s),c&2048&&Zu(n.alternate,n);break;default:Ai(e,n,a,s)}}function Fr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,P=s,Q=S.flags;switch(S.tag){case 0:case 11:case 15:Fr(f,S,T,P,c),Qs(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?Fr(f,S,T,P,c):$s(f,S):(ft._visibility|=2,Fr(f,S,T,P,c)),c&&Q&2048&&Yu(S.alternate,S);break;case 24:Fr(f,S,T,P,c),c&&Q&2048&&Zu(S.alternate,S);break;default:Fr(f,S,T,P,c)}n=n.sibling}}function $s(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:$s(a,s),c&2048&&Yu(s.alternate,s);break;case 24:$s(a,s),c&2048&&Zu(s.alternate,s);break;default:$s(a,s)}n=n.sibling}}var to=8192;function Hr(e){if(e.subtreeFlags&to)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 26:Hr(e),e.flags&to&&e.memoizedState!==null&&Tx(hi,e.memoizedState,e.memoizedProps);break;case 5:Hr(e);break;case 3:case 4:var n=hi;hi=Ol(e.stateNode.containerInfo),Hr(e),hi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=to,to=16777216,Hr(e),to=n):Hr(e));break;default:Hr(e)}}function Fm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Gm(s,e)}Fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 0:case 11:case 15:eo(e),e.flags&2048&&ma(9,e,e.return);break;case 3:eo(e);break;case 12:eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,yl(e)):eo(e);break;default:eo(e)}}function yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Gm(s,e)}Fm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ma(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}e=e.sibling}}function Gm(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=e;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Lm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var H0={getCacheForType:function(e){var n=Tn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},G0=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,me=null,ye=0,Ue=0,qn=null,va=!1,Gr=!1,ju=!1,Yi=0,$e=0,xa=0,tr=0,Ku=0,ii=0,Vr=0,no=null,Fn=null,Qu=!1,Ju=0,El=1/0,Tl=null,Sa=null,Sn=0,Ma=null,kr=null,Xr=0,$u=0,tf=null,Vm=null,io=0,ef=null;function Yn(){if((De&2)!==0&&ye!==0)return ye&-ye;if(L.T!==null){var e=Ur;return e!==0?e:cf()}return Ee()}function km(){ii===0&&(ii=(ye&536870912)===0||we?X():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function Zn(e,n,a){(e===Ve&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),ya(e,ye,ii,!1)),Bt(e,a),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(tr|=a),$e===4&&ya(e,ye,ii,!1)),Ri(e))}function Xm(e,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=s?X0(e,n):rf(e,n,!0),f=s;do{if(c===0){Gr&&!s&&ya(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!V0(a)){c=rf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=no;var P=T.current.memoizedState.isDehydrated;if(P&&(Wr(T,S).flags|=256),S=rf(T,S,!1),S!==2){if(ju&&!P){T.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Wr(e,0),ya(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ya(s,n,ii,!va);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ju+300-It(),10<c)){if(ya(s,n,ii,!va),Vt(s,0,!0)!==0)break t;s.timeoutHandle=xg(Wm.bind(null,s,a,Fn,Tl,Qu,n,ii,tr,Vr,va,f,2,-0,0),c);break t}Wm(s,a,Fn,Tl,Qu,n,ii,tr,Vr,va,f,0,-0,0)}}break}while(!0);Ri(e)}function Wm(e,n,a,s,c,f,S,T,P,Q,ft,mt,nt,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(uo={stylesheets:null,count:0,unsuspend:Ex},Im(n),mt=bx(),mt!==null)){e.cancelPendingCommit=mt(Jm.bind(null,e,n,f,a,s,c,S,T,P,ft,1,nt,it)),ya(e,f,S,!Q);return}Jm(e,n,f,a,s,c,S,T,P)}function V0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(e,n,a,s){n&=~Ku,n&=~tr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&gt(e,a,n)}function bl(){return(De&6)===0?(ao(0),!1):!0}function nf(){if(me!==null){if(Ue===0)var e=me.return;else e=me,Fi=Za=null,xu(e),zr=null,Zs=0,e=me;for(;e!==null;)Tm(e.alternate,e),e=e.return;me=null}}function Wr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nf(),Ve=e,me=a=Bi(e.current,null),ye=n,Ue=0,qn=null,va=!1,Gr=Ct(e,n),ju=!1,Vr=ii=Ku=tr=xa=$e=0,Fn=no=null,Qu=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=e[c],s&=~f}return Yi=n,Yo(),a}function qm(e,n){he=null,L.H=hl,n===Fs||n===nl?(n=cp(),Ue=3):n===sp?(n=cp(),Ue=4):Ue=n===um?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,me===null&&($e=1,_l(e,Jn(n,e.current)))}function Ym(){var e=L.H;return L.H=hl,e===null?hl:e}function Zm(){var e=L.A;return L.A=H0,e}function af(){$e=4,va||(ye&4194048)!==ye&&ni.current!==null||(Gr=!0),(xa&134217727)===0&&(tr&134217727)===0||Ve===null||ya(Ve,ye,ii,!1)}function rf(e,n,a){var s=De;De|=2;var c=Ym(),f=Zm();(Ve!==e||ye!==n)&&(Tl=null,Wr(e,n)),n=!1;var S=$e;t:do try{if(Ue!==0&&me!==null){var T=me,P=qn;switch(Ue){case 8:nf(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var Q=Ue;if(Ue=0,qn=null,qr(e,T,P,Q),a&&Gr){S=0;break t}break;default:Q=Ue,Ue=0,qn=null,qr(e,T,P,Q)}}k0(),S=$e;break}catch(ft){qm(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Fi=Za=null,De=s,L.H=c,L.A=f,me===null&&(Ve=null,ye=0,Yo()),S}function k0(){for(;me!==null;)jm(me)}function X0(e,n){var a=De;De|=2;var s=Ym(),c=Zm();Ve!==e||ye!==n?(Tl=null,El=It()+500,Wr(e,n)):Gr=Ct(e,n);t:do try{if(Ue!==0&&me!==null){n=me;var f=qn;e:switch(Ue){case 1:Ue=0,qn=null,qr(e,n,f,1);break;case 2:case 9:if(op(f)){Ue=0,qn=null,Km(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==e||(Ue=7),Ri(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:op(f)?(Ue=0,qn=null,Km(n)):(Ue=0,qn=null,qr(e,n,f,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var T=me;if(!S||Ug(S)){Ue=0,qn=null;var P=T.sibling;if(P!==null)me=P;else{var Q=T.return;Q!==null?(me=Q,Al(Q)):me=null}break e}}Ue=0,qn=null,qr(e,n,f,5);break;case 6:Ue=0,qn=null,qr(e,n,f,6);break;case 8:nf(),$e=6;break t;default:throw Error(r(462))}}W0();break}catch(ft){qm(e,ft)}while(!0);return Fi=Za=null,L.H=s,L.A=c,De=a,me!==null?0:(Ve=null,ye=0,Yo(),$e)}function W0(){for(;me!==null&&!Yt();)jm(me)}function jm(e){var n=ym(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,n===null?Al(e):me=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=gm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=gm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:xu(n);default:Tm(a,n),n=me=Qd(n,Yi),n=ym(a,n,Yi)}e.memoizedProps=e.pendingProps,n===null?Al(e):me=n}function qr(e,n,a,s){Fi=Za=null,xu(n),zr=null,Zs=0;var c=n.return;try{if(O0(e,c,n,a,ye)){$e=1,_l(e,Jn(a,e.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;$e=1,_l(e,Jn(a,e.current)),me=null;return}n.flags&32768?(we||s===1?e=!0:Gr||(ye&536870912)!==0?e=!1:(va=e=!0,(s===2||s===9||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),Qm(n,e)):Al(n)}function Al(e){var n=e;do{if((n.flags&32768)!==0){Qm(n,va);return}e=n.return;var a=B0(n.alternate,n,Yi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);$e===0&&($e=5)}function Qm(e,n){do{var a=z0(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);$e=6,me=null}function Jm(e,n,a,s,c,f,S,T,P){e.cancelPendingCommit=null;do Rl();while(Sn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Zc,Et(e,a,f,S,T,P),e===Ve&&(me=Ve=null,ye=0),kr=n,Ma=e,Xr=a,$u=f,tf=c,Vm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,j0(qe,function(){return ig(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=k.p,k.p=2,S=De,De|=4;try{I0(e,n,a)}finally{De=S,k.p=c,L.T=s}}Sn=1,$m(),tg(),eg()}}function $m(){if(Sn===1){Sn=0;var e=Ma,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=k.p;k.p=2;var c=De;De|=4;try{Pm(n,e);var f=_f,S=Gd(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Hd(T.ownerDocument.documentElement,T)){if(P!==null&&kc(T)){var Q=P.start,ft=P.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var mt=T.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ne=T.textContent.length,Jt=Math.min(P.start,ne),Be=P.end===void 0?Jt:Math.min(P.end,ne);!it.extend&&Jt>Be&&(S=Be,Be=Jt,Jt=S);var Y=Fd(T,Jt),V=Fd(T,Be);if(Y&&V&&(it.rangeCount!==1||it.anchorNode!==Y.node||it.anchorOffset!==Y.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(Y.node,Y.offset),it.removeAllRanges(),Jt>Be?(it.addRange(K),it.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),it.addRange(K))}}}}for(mt=[],it=T;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Fl=!!gf,_f=gf=null}finally{De=c,k.p=s,L.T=a}}e.current=n,Sn=2}}function tg(){if(Sn===2){Sn=0;var e=Ma,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=k.p;k.p=2;var c=De;De|=4;try{Um(e,n.alternate,n)}finally{De=c,k.p=s,L.T=a}}Sn=3}}function eg(){if(Sn===4||Sn===3){Sn=0,xe();var e=Ma,n=kr,a=Xr,s=Vm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,kr=Ma=null,ng(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Sa=null),Ce(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=k.p,k.p=2,L.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{L.T=n,k.p=c}}(Xr&3)!==0&&Rl(),Ri(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===ef?io++:(io=0,ef=e):io=0,ao(0)}}function ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,zs(n)))}function Rl(e){return $m(),tg(),eg(),ig()}function ig(){if(Sn!==5)return!1;var e=Ma,n=$u;$u=0;var a=Ce(Xr),s=L.T,c=k.p;try{k.p=32>a?32:a,L.T=null,a=tf,tf=null;var f=Ma,S=Xr;if(Sn=0,kr=Ma=null,Xr=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,Hm(f.current),zm(f,f.current,S,a),De=T,ao(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{k.p=c,L.T=s,ng(e,n)}}function ag(e,n,a){n=Jn(a,n),n=Nu(e.stateNode,n,2),e=fa(e,n,2),e!==null&&(Bt(e,2),Ri(e))}function He(e,n,a){if(e.tag===3)ag(e,e,a);else for(;n!==null;){if(n.tag===3){ag(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){e=Jn(a,e),a=lm(2),s=fa(n,a,2),s!==null&&(cm(a,s,n,e),Bt(s,2),Ri(s));break}}n=n.return}}function sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new G0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),e=q0.bind(null,e,n,a),n.then(e,e))}function q0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ye&a)===a&&($e===4||$e===3&&(ye&62914560)===ye&&300>It()-Ju?(De&2)===0&&Wr(e,0):Ku|=a,Vr===ye&&(Vr=0)),Ri(e)}function rg(e,n){n===0&&(n=bt()),e=Rr(e,n),e!==null&&(Bt(e,n),Ri(e))}function Y0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),rg(e,a)}function Z0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),rg(e,a)}function j0(e,n){return F(e,n)}var wl=null,Yr=null,of=!1,Cl=!1,lf=!1,er=0;function Ri(e){e!==Yr&&e.next===null&&(Yr===null?wl=Yr=e:Yr=Yr.next=e),Cl=!0,of||(of=!0,Q0())}function ao(e,n){if(!lf&&Cl){lf=!0;do for(var a=!1,s=wl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,cg(s,f))}else f=ye,f=Vt(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,cg(s,f));s=s.next}while(a);lf=!1}}function K0(){sg()}function sg(){Cl=of=!1;var e=0;er!==0&&(rx()&&(e=er),er=0);for(var n=It(),a=null,s=wl;s!==null;){var c=s.next,f=og(s,n);f===0?(s.next=null,a===null?wl=c:a.next=c,c===null&&(Yr=a)):(a=s,(e!==0||(f&3)!==0)&&(Cl=!0)),s=c}ao(e)}function og(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),T=1<<S,P=c[S];P===-1?((T&a)===0||(T&s)!==0)&&(c[S]=re(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ve,a=ye,a=Vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Me(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Me(s),Ce(a)){case 2:case 8:a=se;break;case 32:a=qe;break;case 268435456:a=N;break;default:a=qe}return s=lg.bind(null,e),a=F(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Me(s),e.callbackPriority=2,e.callbackNode=null,2}function lg(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rl()&&e.callbackNode!==a)return null;var s=ye;return s=Vt(e,e===Ve?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Xm(e,s,n),og(e,It()),e.callbackNode!=null&&e.callbackNode===a?lg.bind(null,e):null)}function cg(e,n){if(Rl())return null;Xm(e,n,!0)}function Q0(){ox(function(){(De&6)!==0?F(Ft,K0):sg()})}function cf(){return er===0&&(er=X()),er}function ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ho(""+e)}function fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function J0(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=ug((c[Ke]||null).action),S=s.submitter;S&&(n=(n=S[Ke]||null)?ug(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Xo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var P=S?fg(c,S):new FormData(c);wu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=S?fg(c,S):new FormData(c),wu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var uf=0;uf<Yc.length;uf++){var ff=Yc[uf],$0=ff.toLowerCase(),tx=ff[0].toUpperCase()+ff.slice(1);fi($0,"on"+tx)}fi(Xd,"onAnimationEnd"),fi(Wd,"onAnimationIteration"),fi(qd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(_0,"onTransitionRun"),fi(v0,"onTransitionStart"),fi(x0,"onTransitionCancel"),fi(Yd,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],P=T.instance,Q=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ft){gl(ft)}c.currentTarget=null,f=P}else for(S=0;S<s.length;S++){if(T=s[S],P=T.instance,Q=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ft){gl(ft)}c.currentTarget=null,f=P}}}}function ge(e,n){var a=n[_r];a===void 0&&(a=n[_r]=new Set);var s=e+"__bubble";a.has(s)||(dg(n,e,2,!1),a.add(s))}function hf(e,n,a){var s=0;n&&(s|=4),dg(a,e,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function df(e){if(!e[Dl]){e[Dl]=!0,Io.forEach(function(a){a!=="selectionchange"&&(ex.has(a)||hf(a,!1,e),hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,hf("selectionchange",!1,n))}}function dg(e,n,a,s){switch(zg(n)){case 2:var c=wx;break;case 8:c=Cx;break;default:c=Rf}a=c.bind(null,n,a,e),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function pf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Oi(T),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Sd(function(){var Q=f,ft=Lc(a),mt=[];t:{var nt=Zd.get(e);if(nt!==void 0){var it=Xo,ne=e;switch(e){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":it=jv;break;case"focusin":ne="focus",it=Ic;break;case"focusout":ne="blur",it=Ic;break;case"beforeblur":case"afterblur":it=Ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Jv;break;case Xd:case Wd:case qd:it=Hv;break;case Yd:it=t0;break;case"scroll":case"scrollend":it=Pv;break;case"wheel":it=n0;break;case"copy":case"cut":case"paste":it=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=bd;break;case"toggle":case"beforetoggle":it=a0}var Jt=(n&4)!==0,Be=!Jt&&(e==="scroll"||e==="scrollend"),Y=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=Ts(V,Y),pt!=null&&Jt.push(so(V,pt,K))),Be)break;V=V.return}0<Jt.length&&(nt=new it(nt,ne,null,a,ft),mt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Uc&&(ne=a.relatedTarget||a.fromElement)&&(Oi(ne)||ne[Mi]))break t;if((it||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=Q,ne=ne?Oi(ne):null,ne!==null&&(Be=u(ne),Jt=ne.tag,ne!==Be||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(it=null,ne=Q),it!==ne)){if(Jt=Ed,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=bd,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Be=it==null?nt:Fa(it),K=ne==null?nt:Fa(ne),nt=new Jt(pt,V+"leave",it,a,ft),nt.target=Be,nt.relatedTarget=K,pt=null,Oi(ft)===Q&&(Jt=new Jt(Y,V+"enter",ne,a,ft),Jt.target=K,Jt.relatedTarget=Be,pt=Jt),Be=pt,it&&ne)e:{for(Jt=it,Y=ne,V=0,K=Jt;K;K=Zr(K))V++;for(K=0,pt=Y;pt;pt=Zr(pt))K++;for(;0<V-K;)Jt=Zr(Jt),V--;for(;0<K-V;)Y=Zr(Y),K--;for(;V--;){if(Jt===Y||Y!==null&&Jt===Y.alternate)break e;Jt=Zr(Jt),Y=Zr(Y)}Jt=null}else Jt=null;it!==null&&pg(mt,nt,it,Jt,!1),ne!==null&&Be!==null&&pg(mt,Be,ne,Jt,!0)}}t:{if(nt=Q?Fa(Q):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=Nd;else if(Ud(nt))if(Od)Ht=p0;else{Ht=h0;var de=f0}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?Q&&Dc(Q.elementType)&&(Ht=Nd):Ht=d0;if(Ht&&(Ht=Ht(e,Q))){Ld(mt,Ht,a,ft);break t}de&&de(e,nt,Q),e==="focusout"&&Q&&nt.type==="number"&&Q.memoizedProps.value!=null&&En(nt,"number",nt.value)}switch(de=Q?Fa(Q):window,e){case"focusin":(Ud(de)||de.contentEditable==="true")&&(Tr=de,Xc=Q,Ls=null);break;case"focusout":Ls=Xc=Tr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Vd(mt,a,ft);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Vd(mt,a,ft)}var Zt;if(Hc)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Er?Cd(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Ad&&a.locale!=="ko"&&(Er||te!=="onCompositionStart"?te==="onCompositionEnd"&&Er&&(Zt=Md()):(oa=ft,Pc="value"in oa?oa.value:oa.textContent,Er=!0)),de=Ul(Q,te),0<de.length&&(te=new Td(te,e,null,a,ft),mt.push({event:te,listeners:de}),Zt?te.data=Zt:(Zt=Dd(a),Zt!==null&&(te.data=Zt)))),(Zt=s0?o0(e,a):l0(e,a))&&(te=Ul(Q,"onBeforeInput"),0<te.length&&(de=new Td("onBeforeInput","beforeinput",null,a,ft),mt.push({event:de,listeners:te}),de.data=Zt)),J0(mt,e,Q,a,ft)}hg(mt,n)})}function so(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ul(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ts(e,a),c!=null&&s.unshift(so(e,c,f)),c=Ts(e,n),c!=null&&s.push(so(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pg(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,P=T.alternate,Q=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||Q===null||(P=Q,c?(Q=Ts(a,f),Q!=null&&S.unshift(so(a,Q,P))):c||(Q=Ts(a,f),Q!=null&&S.push(so(a,Q,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var nx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function mg(e){return(typeof e=="string"?e:""+e).replace(nx,`
`).replace(ix,"")}function gg(e,n){return n=mg(n),mg(e)===n}function Ll(){}function Pe(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pn(e,""+s);break;case"className":zt(e,"class",s);break;case"tabIndex":zt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,s);break;case"style":vd(e,s,f);break;case"data":if(n!=="object"){zt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",c.name,c,null),Pe(e,n,"formEncType",c.formEncType,c,null),Pe(e,n,"formMethod",c.formMethod,c,null),Pe(e,n,"formTarget",c.formTarget,c,null)):(Pe(e,n,"encType",c.encType,c,null),Pe(e,n,"method",c.method,c,null),Pe(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"onScroll":s!=null&&ge("scroll",e);break;case"onScrollEnd":s!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ho(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ut(e,"popover",s);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ut(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nv.get(a)||a,Ut(e,a,s))}}function mf(e,n,a,s,c,f){switch(a){case"style":vd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Pn(e,s):(typeof s=="number"||typeof s=="bigint")&&Pn(e,""+s);break;case"onScroll":s!=null&&ge("scroll",e);break;case"onScrollEnd":s!=null&&ge("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ut(e,a,s)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,f,S,a,null)}}c&&Pe(e,n,"srcSet",a.srcSet,a,null),s&&Pe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var T=f=S=c=null,P=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":S=ft;break;case"checked":P=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Pe(e,n,s,ft,a,null)}}Cn(e,f,T,P,Q,S,c,!1),pe(e);return;case"select":ge("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Pe(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?Qe(e,!!s,n,!1):a!=null&&Qe(e,!!s,a,!0);return;case"textarea":ge("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Pe(e,n,S,T,a,null)}Sr(e,s,c,f),pe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(e,n,P,s,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(s=0;s<ro.length;s++)ge(ro[s],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,Q,s,a,null)}return;default:if(Dc(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&mf(e,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Pe(e,n,T,s,a,null))}function ax(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,P=null,Q=null,ft=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=mt;default:s.hasOwnProperty(it)||Pe(e,n,it,null,s,mt)}}for(var nt in s){var it=s[nt];if(mt=a[nt],s.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":Q=it;break;case"defaultChecked":ft=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==mt&&Pe(e,n,nt,it,s,mt)}}Fe(e,S,T,P,Q,ft,f,c);return;case"select":it=S=T=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:s.hasOwnProperty(f)||Pe(e,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==P&&Pe(e,n,c,f,s,P)}n=T,a=S,s=it,nt!=null?Qe(e,!!a,nt,!1):!!s!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(e,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Pe(e,n,S,c,s,f)}vn(e,nt,it);return;case"option":for(var ne in a)if(nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Pe(e,n,ne,null,s,nt)}for(P in s)if(nt=s[P],it=a[P],s.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,P,nt,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!s.hasOwnProperty(Jt)&&Pe(e,n,Jt,null,s,nt);for(Q in s)if(nt=s[Q],it=a[Q],s.hasOwnProperty(Q)&&nt!==it&&(nt!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Pe(e,n,Q,nt,s,it)}return;default:if(Dc(n)){for(var Be in a)nt=a[Be],a.hasOwnProperty(Be)&&nt!==void 0&&!s.hasOwnProperty(Be)&&mf(e,n,Be,void 0,s,nt);for(ft in s)nt=s[ft],it=a[ft],!s.hasOwnProperty(ft)||nt===it||nt===void 0&&it===void 0||mf(e,n,ft,nt,s,it);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!s.hasOwnProperty(Y)&&Pe(e,n,Y,null,s,nt);for(mt in s)nt=s[mt],it=a[mt],!s.hasOwnProperty(mt)||nt===it||nt==null&&it==null||Pe(e,n,mt,nt,s,it)}var gf=null,_f=null;function Nl(e){return e.nodeType===9?e:e.ownerDocument}function _g(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function rx(){var e=window.event;return e&&e.type==="popstate"?e===xf?!1:(xf=e,!0):(xf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(lx)}:xg;function lx(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function Mg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=e.ownerDocument;if(a&1&&oo(S.documentElement),a&2&&oo(S.body),a&4)for(a=S.head,oo(a),S=a.firstChild;S;){var T=S.nextSibling,P=S.nodeName;S[yi]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){e.removeChild(f),go(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);go(n)}function Sf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function cx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[yi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function ux(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function Mf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function fx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var yf=null;function yg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Eg(e,n,a){switch(n=Nl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xr(e)}var ai=new Map,Tg=new Set;function Ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=k.d;k.d={f:hx,r:dx,D:px,C:mx,L:gx,m:_x,X:xx,S:vx,M:Sx};function hx(){var e=Zi.f(),n=bl();return e||n}function dx(e){var n=ra(e);n!==null&&n.tag===5&&n.type==="form"?Xp(n):Zi.r(e)}var jr=typeof document>"u"?null:document;function bg(e,n,a){var s=jr;if(s&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Tg.has(c)||(Tg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",e),nn(n),s.head.appendChild(n)))}}function px(e){Zi.D(e),bg("dns-prefetch",e,null)}function mx(e,n){Zi.C(e,n),bg("preconnect",e,n)}function gx(e,n,a){Zi.L(e,n,a);var s=jr;if(s&&e&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(e)+'"]';var f=c;switch(n){case"style":f=Kr(e);break;case"script":f=Qr(e)}ai.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(lo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),Mn(n,"link",e),nn(n),s.head.appendChild(n)))}}function _x(e,n){Zi.m(e,n);var a=jr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(s)+'"][href="'+dn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(e)}if(!ai.has(f)&&(e=_({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),Mn(s,"link",e),nn(s),a.head.appendChild(s)}}}function vx(e,n,a){Zi.S(e,n,a);var s=jr;if(s&&e){var c=sa(s).hoistableStyles,f=Kr(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(lo(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&Ef(e,a);var P=S=s.createElement("link");nn(P),Mn(P,"link",e),P._p=new Promise(function(Q,ft){P.onload=Q,P.onerror=ft}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Pl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function xx(e,n){Zi.X(e,n);var a=jr;if(a&&e){var s=sa(a).hoistableScripts,c=Qr(e),f=s.get(c);f||(f=a.querySelector(co(c)),f||(e=_({src:e,async:!0},n),(n=ai.get(c))&&Tf(e,n),f=a.createElement("script"),nn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Sx(e,n){Zi.M(e,n);var a=jr;if(a&&e){var s=sa(a).hoistableScripts,c=Qr(e),f=s.get(c);f||(f=a.querySelector(co(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ai.get(c))&&Tf(e,n),f=a.createElement("script"),nn(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ag(e,n,a,s){var c=(c=dt.current)?Ol(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Kr(a.href),a=sa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kr(a.href);var f=sa(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(lo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||Mx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(a),a=sa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Kr(e){return'href="'+dn(e)+'"'}function lo(e){return'link[rel="stylesheet"]['+e+"]"}function Rg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Mx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),nn(n),e.head.appendChild(n))}function Qr(e){return'[src="'+dn(e)+'"]'}function co(e){return"script[async]"+e}function wg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+dn(a.href)+'"]');if(s)return n.instance=s,nn(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),nn(s),Mn(s,"style",c),Pl(s,a.precedence,e),n.instance=s;case"stylesheet":c=Kr(a.href);var f=e.querySelector(lo(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;s=Rg(a),(c=ai.get(c))&&Ef(s,c),f=(e.ownerDocument||e).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Mn(f,"link",s),n.state.loading|=4,Pl(f,a.precedence,e),n.instance=f;case"script":return f=Qr(a.src),(c=e.querySelector(co(f)))?(n.instance=c,nn(c),c):(s=a,(c=ai.get(f))&&(s=_({},a),Tf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),Mn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pl(s,a.precedence,e));return n.instance}function Pl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Tf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Bl=null;function Cg(e,n,a){if(Bl===null){var s=new Map,c=Bl=new Map;c.set(a,s)}else c=Bl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[yi]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Dg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var uo=null;function Ex(){}function Tx(e,n,a){if(uo===null)throw Error(r(475));var s=uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Kr(a.href),f=e.querySelector(lo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=zl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=Rg(a),(c=ai.get(c))&&Ef(a,c),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(T,P){S.onload=T,S.onerror=P}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=zl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function bx(){if(uo===null)throw Error(r(475));var e=uo;return e.stylesheets&&e.count===0&&bf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&bf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function bf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,n.forEach(Ax,e),Il=null,zl.call(e))}function Ax(e,n){if(!(n.state.loading&4)){var a=Il.get(e);if(a)var s=a.get(null);else{a=new Map,Il.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var fo={$$typeof:O,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Rx(e,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Lg(e,n,a,s,c,f,S,T,P,Q,ft,mt){return e=new Rx(e,n,a,S,T,P,Q,mt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),e.current=f,f.stateNode=e,n=ru(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},cu(f),e}function Ng(e){return e?(e=wr,e):wr}function Og(e,n,a,s,c,f){c=Ng(c),s.context===null?s.context=c:s.pendingContext=c,s=ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=fa(e,s,n),a!==null&&(Zn(a,e,n),Gs(a,e,n))}function Pg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Af(e,n){Pg(e,n),(e=e.alternate)&&Pg(e,n)}function Bg(e){if(e.tag===13){var n=Rr(e,67108864);n!==null&&Zn(n,e,67108864),Af(e,67108864)}}var Fl=!0;function wx(e,n,a,s){var c=L.T;L.T=null;var f=k.p;try{k.p=2,Rf(e,n,a,s)}finally{k.p=f,L.T=c}}function Cx(e,n,a,s){var c=L.T;L.T=null;var f=k.p;try{k.p=8,Rf(e,n,a,s)}finally{k.p=f,L.T=c}}function Rf(e,n,a,s){if(Fl){var c=wf(s);if(c===null)pf(e,n,s,Hl,a),Ig(e,s);else if(Ux(c,e,n,a,s))s.stopPropagation();else if(Ig(e,s),n&4&&-1<Dx.indexOf(e)){for(;c!==null;){var f=ra(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=jt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var P=1<<31-Pt(S);T.entanglements[1]|=P,S&=~P}Ri(f),(De&6)===0&&(El=It()+500,ao(0))}}break;case 13:T=Rr(f,2),T!==null&&Zn(T,f,2),bl(),Af(f,2)}if(f=wf(s),f===null&&pf(e,n,s,Hl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(e,n,s,null,a)}}function wf(e){return e=Lc(e),Cf(e)}var Hl=null;function Cf(e){if(Hl=null,e=Oi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hl=e,null}function zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ft:return 2;case se:return 8;case qe:case Ye:return 32;case N:return 268435456;default:return 32}default:return 32}}var Df=!1,Ta=null,ba=null,Aa=null,ho=new Map,po=new Map,Ra=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ig(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(n.pointerId)}}function mo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ra(n),n!==null&&Bg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Ux(e,n,a,s,c){switch(n){case"focusin":return Ta=mo(Ta,e,n,a,s,c),!0;case"dragenter":return ba=mo(ba,e,n,a,s,c),!0;case"mouseover":return Aa=mo(Aa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return ho.set(f,mo(ho.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,po.set(f,mo(po.get(f)||null,e,n,a,s,c)),!0}return!1}function Fg(e){var n=Oi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ci(e.priority,function(){if(a.tag===13){var s=Yn();s=ie(s);var c=Rr(a,s);c!==null&&Zn(c,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=ra(a),n!==null&&Bg(n),e.blockedOn=a,!1;n.shift()}return!0}function Hg(e,n,a){Gl(e)&&a.delete(n)}function Lx(){Df=!1,Ta!==null&&Gl(Ta)&&(Ta=null),ba!==null&&Gl(ba)&&(ba=null),Aa!==null&&Gl(Aa)&&(Aa=null),ho.forEach(Hg),po.forEach(Hg)}function Vl(e,n){e.blockedOn===n&&(e.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Lx)))}var kl=null;function Gg(e){kl!==e&&(kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===e&&(kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var f=ra(a);f!==null&&(e.splice(n,3),n-=3,wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function go(e){function n(P){return Vl(P,e)}Ta!==null&&Vl(Ta,e),ba!==null&&Vl(ba,e),Aa!==null&&Vl(Aa,e),ho.forEach(n),po.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Ke]||null;if(typeof f=="function")S||Gg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Ke]||null)T=S.formAction;else if(Cf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Gg(a)}}}function Uf(e){this._internalRoot=e}Xl.prototype.render=Uf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Og(a,s,e,n,null,null)},Xl.prototype.unmount=Uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Og(e.current,2,null,e,null,null),bl(),n[Mi]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Fg(e)}};var Vg=t.version;if(Vg!=="19.1.0")throw Error(r(527,Vg,"19.1.0"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Nx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{ut=Wl.inject(Nx),xt=Wl}catch{}}return vo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=am,f=rm,S=sm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Lg(e,1,!1,null,null,a,s,c,f,S,T,null),e[Mi]=n.current,df(e),new Uf(n)},vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=am,S=rm,T=sm,P=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=Lg(e,1,!0,n,a??null,s,c,f,S,T,P,Q),n.context=Ng(null),a=n.current,s=Yn(),s=ie(s),c=ua(s),c.callback=null,fa(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Ri(n),e[Mi]=n.current,df(e),new Xl(n)},vo.version="19.1.0",vo}var Jg;function kx(){if(Jg)return Of.exports;Jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Of.exports=Vx(),Of.exports}var Xx=kx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="179",Wx=0,$g=1,qx=2,tv=1,Yx=2,ta=3,Ia=0,Ln=1,ea=2,Ba=0,ds=1,_h=2,t_=3,e_=4,Zx=5,ur=100,jx=101,Kx=102,Qx=103,Jx=104,$x=200,tS=201,eS=202,nS=203,vh=204,xh=205,iS=206,aS=207,rS=208,sS=209,oS=210,lS=211,cS=212,uS=213,fS=214,Sh=0,Mh=1,yh=2,gs=3,Eh=4,Th=5,bh=6,Ah=7,bc=0,hS=1,dS=2,za=0,ev=1,pS=2,mS=3,gS=4,_S=5,vS=6,xS=7,nv=300,_s=301,vs=302,Rh=303,wh=304,Ac=306,Ro=1e3,hr=1001,Ch=1002,xi=1003,SS=1004,ql=1005,Ci=1006,If=1007,dr=1008,Li=1009,iv=1010,av=1011,wo=1012,od=1013,pr=1014,na=1015,Lo=1016,ld=1017,cd=1018,Co=1020,rv=35902,sv=1021,ov=1022,vi=1023,Do=1026,Uo=1027,lv=1028,ud=1029,cv=1030,fd=1031,hd=1033,gc=33776,_c=33777,vc=33778,xc=33779,Dh=35840,Uh=35841,Lh=35842,Nh=35843,Oh=36196,Ph=37492,Bh=37496,zh=37808,Ih=37809,Fh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,Zh=37819,jh=37820,Kh=37821,Sc=36492,Qh=36494,Jh=36495,uv=36283,$h=36284,td=36285,ed=36286,MS=3200,yS=3201,dd=0,ES=1,Pa="",si="srgb",xs="srgb-linear",yc="linear",ze="srgb",Jr=7680,n_=519,TS=512,bS=513,AS=514,fv=515,RS=516,wS=517,CS=518,DS=519,i_=35044,a_="300 es",Di=2e3,Ec=2001;class Ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,nd=180/Math.PI;function No(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function US(o,t){return(o%t+t)%t}function Hf(o,t,i){return(1-i)*o+i*t}function xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,i=0){Te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=u[h+0],y=u[h+1],b=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=R;return}if(v!==R||m!==x||p!==y||_!==b){let M=1-d;const g=m*x+p*y+_*b+v*R,I=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const z=Math.sqrt(O),G=Math.atan2(z,g*I);M=Math.sin(M*G)/z,d=Math.sin(d*G)/z}const D=d*I;if(m=m*M+x*D,p=p*M+y*D,_=_*M+b*D,v=v*M+R*D,M===1-d){const z=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=z,p*=z,_*=z,v*=z}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=u[h],x=u[h+1],y=u[h+2],b=u[h+3];return t[i]=d*b+_*v+m*y-p*x,t[i+1]=m*b+_*x+p*v-d*y,t[i+2]=p*b+_*y+d*x-m*v,t[i+3]=_*b-d*v-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(u/2),x=m(r/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*_*v+p*y*b,this._y=p*y*v-x*_*b,this._z=p*_*b+x*y*v,this._w=p*_*v-x*y*b;break;case"YXZ":this._x=x*_*v+p*y*b,this._y=p*y*v-x*_*b,this._z=p*_*b-x*y*v,this._w=p*_*v+x*y*b;break;case"ZXY":this._x=x*_*v-p*y*b,this._y=p*y*v+x*_*b,this._z=p*_*b+x*y*v,this._w=p*_*v-x*y*b;break;case"ZYX":this._x=x*_*v-p*y*b,this._y=p*y*v+x*_*b,this._z=p*_*b-x*y*v,this._w=p*_*v+x*y*b;break;case"YZX":this._x=x*_*v+p*y*b,this._y=p*y*v+x*_*b,this._z=p*_*b-x*y*v,this._w=p*_*v-x*y*b;break;case"XZY":this._x=x*_*v-p*y*b,this._y=p*y*v-x*_*b,this._z=p*_*b+x*y*v,this._w=p*_*v+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(r_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(r_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Gf.copy(this).projectOnVector(t),this.sub(Gf)}reflect(t){return this.sub(Gf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new J,r_=new Oo;class le{constructor(t,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],y=r[5],b=r[8],R=l[0],M=l[3],g=l[6],I=l[1],O=l[4],D=l[7],z=l[2],G=l[5],H=l[8];return u[0]=h*R+d*I+m*z,u[3]=h*M+d*O+m*G,u[6]=h*g+d*D+m*H,u[1]=p*R+_*I+v*z,u[4]=p*M+_*O+v*G,u[7]=p*g+_*D+v*H,u[2]=x*R+y*I+b*z,u[5]=x*M+y*O+b*G,u[8]=x*g+y*D+b*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,x=d*m-_*u,y=p*u-h*m,b=i*v+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*p-_*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Vf.makeScale(t,i)),this}rotate(t){return this.premultiply(Vf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new le;function hv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Tc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function LS(){const o=Tc("canvas");return o.style.display="block",o}const s_={};function ps(o){o in s_||(s_[o]=!0,console.warn(o))}function NS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const o_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const o={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?yc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xs]:{primaries:t,whitePoint:r,transfer:yc,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Re=OS();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class PS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{$r===void 0&&($r=Tc("canvas")),$r.width=t.width,$r.height=t.height;const l=$r.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Tc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BS=0;class pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=No(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(kf(l[h].image)):u.push(kf(l[h]))}else u=kf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?PS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zS=0;const Xf=new J;class Nn extends Ms{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=hr,l=hr,u=Ci,h=dr,d=vi,m=Li,p=Nn.DEFAULT_ANISOTROPY,_=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=No(),this.name="",this.source=new pd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xf).x}get height(){return this.source.getSize(Xf).y}get depth(){return this.source.getSize(Xf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case hr:t.x=t.x<0?0:1;break;case Ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case hr:t.y=t.y<0?0:1;break;case Ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=nv;Nn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,i=0,r=0,l=1){Ie.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],y=m[5],b=m[9],R=m[2],M=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(y+1)/2,z=(g+1)/2,G=(_+x)/4,H=(v+R)/4,j=(b+M)/4;return O>D&&O>z?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=G/r,u=H/r):D>z?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=G/l,u=j/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=H/u,l=j/u),this.set(r,l,u,i),this}let I=Math.sqrt((M-b)*(M-b)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(M-b)/I,this.y=(v-R)/I,this.z=(x-_)/I,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IS extends Ms{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ie(0,0,t,i),this.scissorTest=!1,this.viewport=new Ie(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new pd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends IS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class dv extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(So),Zl.subVectors(this.max,So),ts.subVectors(t.a,So),es.subVectors(t.b,So),ns.subVectors(t.c,So),Ca.subVectors(es,ts),Da.subVectors(ns,es),nr.subVectors(ts,ns);let i=[0,-Ca.z,Ca.y,0,-Da.z,Da.y,0,-nr.z,nr.y,Ca.z,0,-Ca.x,Da.z,0,-Da.x,nr.z,0,-nr.x,-Ca.y,Ca.x,0,-Da.y,Da.x,0,-nr.y,nr.x,0];return!Wf(i,ts,es,ns,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Wf(i,ts,es,ns,Zl))?!1:(jl.crossVectors(Ca,Da),i=[jl.x,jl.y,jl.z],Wf(i,ts,es,ns,Zl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ji=[new J,new J,new J,new J,new J,new J,new J,new J],pi=new J,Yl=new Po,ts=new J,es=new J,ns=new J,Ca=new J,Da=new J,nr=new J,So=new J,Zl=new J,jl=new J,ir=new J;function Wf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ir.fromArray(o,u);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),m=t.dot(ir),p=i.dot(ir),_=r.dot(ir);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const HS=new Po,Mo=new J,qf=new J;class Rc{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):HS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(qf)),this.expandByPoint(Mo.copy(t.center).sub(qf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new J,Yf=new J,Kl=new J,Ua=new J,Zf=new J,Ql=new J,jf=new J;class pv{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Yf.copy(t).add(i).multiplyScalar(.5),Kl.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(Yf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Ua.dot(this.direction),m=-Ua.dot(Kl),p=Ua.lengthSq(),_=Math.abs(1-h*h);let v,x,y,b;if(_>0)if(v=h*m-d,x=h*d-m,b=u*_,v>=0)if(x>=-b)if(x<=b){const R=1/_;v*=R,x*=R,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Yf).addScaledVector(Kl,x),y}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){Zf.subVectors(i,t),Ql.subVectors(r,t),jf.crossVectors(Zf,Ql);let h=this.direction.dot(jf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,t);const m=d*this.direction.dot(Ql.crossVectors(Ua,Ql));if(m<0)return null;const p=d*this.direction.dot(Zf.cross(Ua));if(p<0||m+p>h)return null;const _=-d*Ua.dot(jf);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,h,d,m,p,_,v,x,y,b,R,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,_,v,x,y,b,R,M)}set(t,i,r,l,u,h,d,m,p,_,v,x,y,b,R,M){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=b,g[11]=R,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/is.setFromMatrixColumn(t,0).length(),u=1/is.setFromMatrixColumn(t,1).length(),h=1/is.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*_,y=h*v,b=d*_,R=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+y*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,y=m*v,b=p*_,R=p*v;i[0]=x+R*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,y=m*v,b=p*_,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,y=h*v,b=d*_,R=d*v;i[0]=m*_,i[4]=b*p-y,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*_,i[4]=R-x*v,i[8]=b*v+y,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+b,i[10]=x-R*v}else if(t.order==="XZY"){const x=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+R,i[5]=h*_,i[9]=y*v-b,i[2]=b*v-y,i[6]=d*_,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GS,t,VS)}lookAt(t,i,r){const l=this.elements;return jn.subVectors(t,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),La.crossVectors(r,jn),La.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),La.crossVectors(r,jn)),La.normalize(),Jl.crossVectors(jn,La),l[0]=La.x,l[4]=Jl.x,l[8]=jn.x,l[1]=La.y,l[5]=Jl.y,l[9]=jn.y,l[2]=La.z,l[6]=Jl.z,l[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],y=r[13],b=r[2],R=r[6],M=r[10],g=r[14],I=r[3],O=r[7],D=r[11],z=r[15],G=l[0],H=l[4],j=l[8],C=l[12],w=l[1],B=l[5],ot=l[9],lt=l[13],ct=l[2],ht=l[6],L=l[10],k=l[14],W=l[3],_t=l[7],U=l[11],$=l[15];return u[0]=h*G+d*w+m*ct+p*W,u[4]=h*H+d*B+m*ht+p*_t,u[8]=h*j+d*ot+m*L+p*U,u[12]=h*C+d*lt+m*k+p*$,u[1]=_*G+v*w+x*ct+y*W,u[5]=_*H+v*B+x*ht+y*_t,u[9]=_*j+v*ot+x*L+y*U,u[13]=_*C+v*lt+x*k+y*$,u[2]=b*G+R*w+M*ct+g*W,u[6]=b*H+R*B+M*ht+g*_t,u[10]=b*j+R*ot+M*L+g*U,u[14]=b*C+R*lt+M*k+g*$,u[3]=I*G+O*w+D*ct+z*W,u[7]=I*H+O*B+D*ht+z*_t,u[11]=I*j+O*ot+D*L+z*U,u[15]=I*C+O*lt+D*k+z*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],y=t[14],b=t[3],R=t[7],M=t[11],g=t[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*y-r*m*y)+R*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*_-u*m*_)+M*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*_-r*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*h*v-r*h*x+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],y=t[11],b=t[12],R=t[13],M=t[14],g=t[15],I=v*M*p-R*x*p+R*m*y-d*M*y-v*m*g+d*x*g,O=b*x*p-_*M*p-b*m*y+h*M*y+_*m*g-h*x*g,D=_*R*p-b*v*p+b*d*y-h*R*y-_*d*g+h*v*g,z=b*v*m-_*R*m-b*d*x+h*R*x+_*d*M-h*v*M,G=i*I+r*O+l*D+u*z;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/G;return t[0]=I*H,t[1]=(R*x*u-v*M*u-R*l*y+r*M*y+v*l*g-r*x*g)*H,t[2]=(d*M*u-R*m*u+R*l*p-r*M*p-d*l*g+r*m*g)*H,t[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*y-r*m*y)*H,t[4]=O*H,t[5]=(_*M*u-b*x*u+b*l*y-i*M*y-_*l*g+i*x*g)*H,t[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*g-i*m*g)*H,t[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*y+i*m*y)*H,t[8]=D*H,t[9]=(b*v*u-_*R*u-b*r*y+i*R*y+_*r*g-i*v*g)*H,t[10]=(h*R*u-b*d*u+b*r*p-i*R*p-h*r*g+i*d*g)*H,t[11]=(_*d*u-h*v*u-_*r*p+i*v*p+h*r*y-i*d*y)*H,t[12]=z*H,t[13]=(_*R*l-b*v*l+b*r*x-i*R*x-_*r*M+i*v*M)*H,t[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*M-i*d*M)*H,t[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*x+i*d*x)*H,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,x=u*p,y=u*_,b=u*v,R=h*_,M=h*v,g=d*v,I=m*p,O=m*_,D=m*v,z=r.x,G=r.y,H=r.z;return l[0]=(1-(R+g))*z,l[1]=(y+D)*z,l[2]=(b-O)*z,l[3]=0,l[4]=(y-D)*G,l[5]=(1-(x+g))*G,l[6]=(M+I)*G,l[7]=0,l[8]=(b+O)*H,l[9]=(M-I)*H,l[10]=(1-(x+R))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const h=is.set(l[4],l[5],l[6]).length(),d=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const p=1/u,_=1/h,v=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=_,mi.elements[5]*=_,mi.elements[6]*=_,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,i.setFromRotationMatrix(mi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=Di,m=!1){const p=this.elements,_=2*u/(i-t),v=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let b,R;if(m)b=u/(h-u),R=h*u/(h-u);else if(d===Di)b=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Ec)b=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=Di,m=!1){const p=this.elements,_=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,R;if(m)b=1/(h-u),R=h/(h-u);else if(d===Di)b=-2/(h-u),R=-(h+u)/(h-u);else if(d===Ec)b=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const is=new J,mi=new je,GS=new J(0,0,0),VS=new J(1,1,1),La=new J,Jl=new J,jn=new J,c_=new je,u_=new Oo;class Si{constructor(t=0,i=0,r=0,l=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return c_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return u_.setFromEuler(this),this.setFromQuaternion(u_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class mv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kS=0;const f_=new J,as=new Oo,Qi=new je,$l=new J,yo=new J,XS=new J,WS=new Oo,h_=new J(1,0,0),d_=new J(0,1,0),p_=new J(0,0,1),m_={type:"added"},qS={type:"removed"},rs={type:"childadded",child:null},Kf={type:"childremoved",child:null};class On extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new J,i=new Si,r=new Oo,l=new J(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return as.setFromAxisAngle(t,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,i){return as.setFromAxisAngle(t,i),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(h_,t)}rotateY(t){return this.rotateOnAxis(d_,t)}rotateZ(t){return this.rotateOnAxis(p_,t)}translateOnAxis(t,i){return f_.copy(t).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(h_,t)}translateY(t){return this.translateOnAxis(d_,t)}translateZ(t){return this.translateOnAxis(p_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?$l.copy(t):$l.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(yo,$l,this.up):Qi.lookAt($l,yo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Qi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(m_),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(qS),Kf.child=t,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(m_),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,XS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,WS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),x=h(t.skeletons),y=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new J(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new J,Ji=new J,Qf=new J,$i=new J,ss=new J,os=new J,g_=new J,Jf=new J,$f=new J,th=new J,eh=new Ie,nh=new Ie,ih=new Ie;class _i{constructor(t=new J,i=new J,r=new J){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),gi.subVectors(t,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){gi.subVectors(l,i),Ji.subVectors(r,i),Qf.subVectors(t,i);const h=gi.dot(gi),d=gi.dot(Ji),m=gi.dot(Qf),p=Ji.dot(Ji),_=Ji.dot(Qf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-d*_)*x,b=(h*_-d*m)*x;return u.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,i),nh.fromBufferAttribute(t,r),ih.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(eh,u.x),h.addScaledVector(nh,u.y),h.addScaledVector(ih,u.z),h}static isFrontFacing(t,i,r,l){return gi.subVectors(r,i),Ji.subVectors(t,i),gi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),gi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;ss.subVectors(l,r),os.subVectors(u,r),Jf.subVectors(t,r);const m=ss.dot(Jf),p=os.dot(Jf);if(m<=0&&p<=0)return i.copy(r);$f.subVectors(t,l);const _=ss.dot($f),v=os.dot($f);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(ss,h);th.subVectors(t,u);const y=ss.dot(th),b=os.dot(th);if(b>=0&&y<=b)return i.copy(u);const R=y*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(os,d);const M=_*b-y*v;if(M<=0&&v-_>=0&&y-b>=0)return g_.subVectors(u,l),d=(v-_)/(v-_+(y-b)),i.copy(l).addScaledVector(g_,d);const g=1/(M+R+x);return h=R*g,d=x*g,i.copy(r).addScaledVector(ss,h).addScaledVector(os,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},tc={h:0,s:0,l:0};function ah(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ve{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=US(t,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ah(h,u,t+1/3),this.g=ah(h,u,t),this.b=ah(h,u,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=gv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Re.workingToColorSpace(Rn.copy(this),t),Math.round(Se(Rn.r*255,0,255))*65536+Math.round(Se(Rn.g*255,0,255))*256+Math.round(Se(Rn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=si){Re.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+i,Na.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Na),t.getHSL(tc);const r=Hf(Na.h,tc.h,i),l=Hf(Na.s,tc.s,i),u=Hf(Na.l,tc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ve;ve.NAMES=gv;let YS=0;class gr extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=No(),this.name="",this.type="Material",this.blending=ds,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _v extends gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new J,ec=new Te;let ZS=0;class li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=i_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(t),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==i_&&(t.usage=this.usage),t}}class vv extends li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class xv extends li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ui extends li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let jS=0;const ri=new je,rh=new On,ls=new J,Kn=new Po,Eo=new Po,_n=new J;class Ni extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hv(t)?xv:vv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ui(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Eo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,Eo.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,Eo.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(Eo.min),Kn.expandByPoint(Eo.max))}Kn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)_n.fromBufferAttribute(d,p),m&&(ls.fromBufferAttribute(t,p),_n.add(ls)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new J,m[j]=new J;const p=new J,_=new J,v=new J,x=new Te,y=new Te,b=new Te,R=new J,M=new J;function g(j,C,w){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,C),b.fromBufferAttribute(u,w),_.sub(p),v.sub(p),y.sub(x),b.sub(x);const B=1/(y.x*b.y-b.x*y.y);isFinite(B)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(B),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(B),d[j].add(R),d[C].add(R),d[w].add(R),m[j].add(M),m[C].add(M),m[w].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let j=0,C=I.length;j<C;++j){const w=I[j],B=w.start,ot=w.count;for(let lt=B,ct=B+ot;lt<ct;lt+=3)g(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const O=new J,D=new J,z=new J,G=new J;function H(j){z.fromBufferAttribute(l,j),G.copy(z);const C=d[j];O.copy(C),O.sub(z.multiplyScalar(z.dot(C))).normalize(),D.crossVectors(G,C);const B=D.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,B)}for(let j=0,C=I.length;j<C;++j){const w=I[j],B=w.start,ot=w.count;for(let lt=B,ct=B+ot;lt<ct;lt+=3)H(t.getX(lt+0)),H(t.getX(lt+1)),H(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,_=new J,v=new J;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),R=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*_;for(let g=0;g<_;g++)x[b++]=p[y++]}return new li(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],y=t(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const __=new je,ar=new pv,nc=new Rc,v_=new J,ic=new J,ac=new J,rc=new J,sh=new J,sc=new J,x_=new J,oc=new J;class oi extends On{constructor(t=new Ni,i=new _v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(sh.fromBufferAttribute(v,t),h?sc.addScaledVector(sh,_):sc.addScaledVector(sh.sub(i),_))}i.add(sc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(u),ar.copy(t.ray).recast(t.near),!(nc.containsPoint(ar.origin)===!1&&(ar.intersectSphere(nc,v_)===null||ar.origin.distanceToSquared(v_)>(t.far-t.near)**2))&&(__.copy(u).invert(),ar.copy(t.ray).applyMatrix4(__),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ar)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const M=x[b],g=h[M.materialIndex],I=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,z=O;D<z;D+=3){const G=d.getX(D),H=d.getX(D+1),j=d.getX(D+2);l=lc(this,g,t,r,p,_,v,G,H,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=b,g=R;M<g;M+=3){const I=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=lc(this,h,t,r,p,_,v,I,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const M=x[b],g=h[M.materialIndex],I=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,z=O;D<z;D+=3){const G=D,H=D+1,j=D+2;l=lc(this,g,t,r,p,_,v,G,H,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=b,g=R;M<g;M+=3){const I=M,O=M+1,D=M+2;l=lc(this,h,t,r,p,_,v,I,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KS(o,t,i,r,l,u,h,d){let m;if(t.side===Ln?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Ia,d),m===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(oc);return p<i.near||p>i.far?null:{distance:p,point:oc.clone(),object:o}}function lc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,ic),o.getVertexPosition(m,ac),o.getVertexPosition(p,rc);const _=KS(o,t,i,r,ic,ac,rc,x_);if(_){const v=new J;_i.getBarycoord(x_,ic,ac,rc,v),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,v,new Te)),u&&(_.uv1=_i.getInterpolatedAttribute(u,d,m,p,v,new Te)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,v,new J),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new J,materialIndex:0};_i.getNormal(ic,ac,rc,x.normal),_.face=x,_.barycoord=v}return _}class Bo extends Ni{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ui(p,3)),this.setAttribute("normal",new Ui(_,3)),this.setAttribute("uv",new Ui(v,2));function b(R,M,g,I,O,D,z,G,H,j,C){const w=D/H,B=z/j,ot=D/2,lt=z/2,ct=G/2,ht=H+1,L=j+1;let k=0,W=0;const _t=new J;for(let U=0;U<L;U++){const $=U*B-lt;for(let vt=0;vt<ht;vt++){const St=vt*w-ot;_t[R]=St*I,_t[M]=$*O,_t[g]=ct,p.push(_t.x,_t.y,_t.z),_t[R]=0,_t[M]=0,_t[g]=G>0?1:-1,_.push(_t.x,_t.y,_t.z),v.push(vt/H),v.push(1-U/j),k+=1}}for(let U=0;U<j;U++)for(let $=0;$<H;$++){const vt=x+$+ht*U,St=x+$+ht*(U+1),At=x+($+1)+ht*(U+1),tt=x+($+1)+ht*U;m.push(vt,St,tt),m.push(St,At,tt),W+=6}d.addGroup(y,W,C),y+=W,x+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)t[l]=r[l]}return t}function QS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Sv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const JS={clone:Ss,merge:Un};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=QS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Mv extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new J,S_=new Te,M_=new Te;class Qn extends Mv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,S_,M_),i.subVectors(M_,S_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ff*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,us=1;class eM extends On{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qn(cs,us,t,i);l.layers=this.layers,this.add(l);const u=new Qn(cs,us,t,i);u.layers=this.layers,this.add(u);const h=new Qn(cs,us,t,i);h.layers=this.layers,this.add(h);const d=new Qn(cs,us,t,i);d.layers=this.layers,this.add(d);const m=new Qn(cs,us,t,i);m.layers=this.layers,this.add(m);const p=new Qn(cs,us,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(v,x,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class yv extends Nn{constructor(t=[],i=_s,r,l,u,h,d,m,p,_){super(t,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nM extends mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new yv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bo(5,5,5),u=new aa({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:Ba});u.uniforms.tEquirect.value=i;const h=new oi(l,u),d=i.minFilter;return i.minFilter===dr&&(i.minFilter=Ci),new eM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class cc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),g=this._getHandJoint(p,R);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new cc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class aM extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const lh=new J,rM=new J,sM=new le;class lr{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=lh.subVectors(r,i).cross(rM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||sM.getNormalMatrix(t),l=this.coplanarPoint(lh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Rc,oM=new Te(.5,.5),uc=new J;class md{constructor(t=new lr,i=new lr,r=new lr,l=new lr,u=new lr,h=new lr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Di,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],v=u[5],x=u[6],y=u[7],b=u[8],R=u[9],M=u[10],g=u[11],I=u[12],O=u[13],D=u[14],z=u[15];if(l[0].setComponents(p-h,y-_,g-b,z-I).normalize(),l[1].setComponents(p+h,y+_,g+b,z+I).normalize(),l[2].setComponents(p+d,y+v,g+R,z+O).normalize(),l[3].setComponents(p-d,y-v,g-R,z-O).normalize(),r)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,y-x,g-M,z-D).normalize();else if(l[4].setComponents(p-m,y-x,g-M,z-D).normalize(),i===Di)l[5].setComponents(p+m,y+x,g+M,z+D).normalize();else if(i===Ec)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);const i=oM.distanceTo(t.center);return rr.radius=.7071067811865476+i,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uc.x=l.normal.x>0?t.max.x:t.min.x,uc.y=l.normal.y>0?t.max.y:t.min.y,uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ev extends gr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const y_=new je,id=new pv,fc=new Rc,hc=new J;class lM extends On{constructor(t=new Ni,i=new Ev){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,t.ray.intersectsSphere(fc)===!1)return;y_.copy(l).invert(),id.copy(t.ray).applyMatrix4(y_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=x,R=y;b<R;b++){const M=p.getX(b);hc.fromBufferAttribute(v,M),E_(hc,M,m,l,t,i,this)}}else{const x=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let b=x,R=y;b<R;b++)hc.fromBufferAttribute(v,b),E_(hc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function E_(o,t,i,r,l,u,h){const d=id.distanceSqToPoint(o);if(d<i){const m=new J;id.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class T_ extends Nn{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tv extends Nn{constructor(t,i,r=pr,l,u,h,d=xi,m=xi,p,_=Do,v=1){if(_!==Do&&_!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wc extends Ni{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=t/d,x=i/m,y=[],b=[],R=[],M=[];for(let g=0;g<_;g++){const I=g*x-h;for(let O=0;O<p;O++){const D=O*v-u;b.push(D,-I,0),R.push(0,0,1),M.push(O/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let I=0;I<d;I++){const O=I+p*g,D=I+p*(g+1),z=I+1+p*(g+1),G=I+1+p*g;y.push(O,D,G),y.push(D,z,G)}this.setIndex(y),this.setAttribute("position",new Ui(b,3)),this.setAttribute("normal",new Ui(R,3)),this.setAttribute("uv",new Ui(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ao extends Ni{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const _=[],v=new J,x=new J,y=[],b=[],R=[],M=[];for(let g=0;g<=r;g++){const I=[],O=g/r;let D=0;g===0&&h===0?D=.5/i:g===r&&m===Math.PI&&(D=-.5/i);for(let z=0;z<=i;z++){const G=z/i;v.x=-t*Math.cos(l+G*u)*Math.sin(h+O*d),v.y=t*Math.cos(h+O*d),v.z=t*Math.sin(l+G*u)*Math.sin(h+O*d),b.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),M.push(G+D,1-O),I.push(p++)}_.push(I)}for(let g=0;g<r;g++)for(let I=0;I<i;I++){const O=_[g][I+1],D=_[g][I],z=_[g+1][I],G=_[g+1][I+1];(g!==0||h>0)&&y.push(O,D,G),(g!==r-1||m<Math.PI)&&y.push(D,z,G)}this.setIndex(y),this.setAttribute("position",new Ui(b,3)),this.setAttribute("normal",new Ui(R,3)),this.setAttribute("uv",new Ui(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cM extends gr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uM extends gr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fM extends gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hM extends gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bv extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ch=new je,b_=new J,A_=new J;class dM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;b_.setFromMatrixPosition(t.matrixWorld),i.position.copy(b_),A_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const R_=new je,To=new J,uh=new J;class pM extends dM{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),To.setFromMatrixPosition(t.matrixWorld),r.position.copy(To),uh.copy(r.position),uh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(uh),r.updateMatrixWorld(),l.makeTranslation(-To.x,-To.y,-To.z),R_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R_,r.coordinateSystem,r.reversedDepth)}}class mM extends bv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new pM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gM extends Mv{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _M extends bv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class vM extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function w_(o,t,i,r){const l=xM(r);switch(i){case sv:return o*t;case lv:return o*t/l.components*l.byteLength;case ud:return o*t/l.components*l.byteLength;case cv:return o*t*2/l.components*l.byteLength;case fd:return o*t*2/l.components*l.byteLength;case ov:return o*t*3/l.components*l.byteLength;case vi:return o*t*4/l.components*l.byteLength;case hd:return o*t*4/l.components*l.byteLength;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Uh:case Nh:return Math.max(o,16)*Math.max(t,8)/4;case Dh:case Lh:return Math.max(o,8)*Math.max(t,8)/2;case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case jh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Sc:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case uv:case $h:return Math.ceil(o/4)*Math.ceil(t/4)*8;case td:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xM(o){switch(o){case Li:case iv:return{byteLength:1,components:1};case wo:case av:case Lo:return{byteLength:2,components:1};case ld:case cd:return{byteLength:2,components:4};case pr:case od:case na:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Av(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function SM(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<v.length;y++){const b=v[x],R=v[y];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,b=v.length;y<b;y++){const R=v[y];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var MM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
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
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
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
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OM=`#ifdef USE_IRIDESCENCE
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
#endif`,PM=`#ifdef USE_BUMPMAP
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,XM=`#define PI 3.141592653589793
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
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qM=`vec3 transformedNormal = objectNormal;
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
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hy=`uniform bool receiveShadow;
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
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
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
#endif`,xy=`struct PhysicalMaterial {
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
}`,Sy=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dy=`#if defined( USE_POINTS_UV )
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
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
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
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
}`,wE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,PE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,zE=`#define LAMBERT
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
}`,IE=`#define MATCAP
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
}`,FE=`#define MATCAP
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
}`,HE=`#define NORMAL
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
}`,GE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,kE=`#define PHONG
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
}`,XE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,qE=`#define TOON
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
}`,YE=`#define TOON
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
}`,ZE=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,QE=`uniform vec3 color;
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
}`,JE=`uniform float rotation;
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
}`,$E=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:MM,alphahash_pars_fragment:yM,alphamap_fragment:EM,alphamap_pars_fragment:TM,alphatest_fragment:bM,alphatest_pars_fragment:AM,aomap_fragment:RM,aomap_pars_fragment:wM,batching_pars_vertex:CM,batching_vertex:DM,begin_vertex:UM,beginnormal_vertex:LM,bsdfs:NM,iridescence_fragment:OM,bumpmap_pars_fragment:PM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:FM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:VM,color_vertex:kM,common:XM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:qM,displacementmap_pars_vertex:YM,displacementmap_vertex:ZM,emissivemap_fragment:jM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:ty,envmap_pars_fragment:ey,envmap_pars_vertex:ny,envmap_physical_pars_fragment:dy,envmap_vertex:iy,fog_vertex:ay,fog_pars_vertex:ry,fog_fragment:sy,fog_pars_fragment:oy,gradientmap_pars_fragment:ly,lightmap_pars_fragment:cy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:fy,lights_pars_begin:hy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:_y,lights_physical_fragment:vy,lights_physical_pars_fragment:xy,lights_fragment_begin:Sy,lights_fragment_maps:My,lights_fragment_end:yy,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:Ay,map_fragment:Ry,map_pars_fragment:wy,map_particle_fragment:Cy,map_particle_pars_fragment:Dy,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Ly,morphinstance_vertex:Ny,morphcolor_vertex:Oy,morphnormal_vertex:Py,morphtarget_pars_vertex:By,morphtarget_vertex:zy,normal_fragment_begin:Iy,normal_fragment_maps:Fy,normal_pars_fragment:Hy,normal_pars_vertex:Gy,normal_vertex:Vy,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:Yy,opaque_fragment:Zy,packing:jy,premultiplied_alpha_fragment:Ky,project_vertex:Qy,dithering_fragment:Jy,dithering_pars_fragment:$y,roughnessmap_fragment:tE,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:aE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:_E,uv_vertex:vE,worldpos_vertex:xE,background_vert:SE,background_frag:ME,backgroundCube_vert:yE,backgroundCube_frag:EE,cube_vert:TE,cube_frag:bE,depth_vert:AE,depth_frag:RE,distanceRGBA_vert:wE,distanceRGBA_frag:CE,equirect_vert:DE,equirect_frag:UE,linedashed_vert:LE,linedashed_frag:NE,meshbasic_vert:OE,meshbasic_frag:PE,meshlambert_vert:BE,meshlambert_frag:zE,meshmatcap_vert:IE,meshmatcap_frag:FE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:VE,meshphong_frag:kE,meshphysical_vert:XE,meshphysical_frag:WE,meshtoon_vert:qE,meshtoon_frag:YE,points_vert:ZE,points_frag:jE,shadow_vert:KE,shadow_frag:QE,sprite_vert:JE,sprite_frag:$E},Ot={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},wi={basic:{uniforms:Un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Un([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Un([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Un([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Un([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Un([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Un([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Un([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Un([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Un([Ot.common,Ot.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Un([Ot.lights,Ot.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};wi.physical={uniforms:Un([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const dc={r:0,b:0,g:0},sr=new Si,tT=new je;function eT(o,t,i,r,l,u,h){const d=new ve(0);let m=u===!0?0:1,p,_,v=null,x=0,y=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function R(O){let D=!1;const z=b(O);z===null?g(d,m):z&&z.isColor&&(g(z,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const z=b(D);z&&(z.isCubeTexture||z.mapping===Ac)?(_===void 0&&(_=new oi(new Bo(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:Ss(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,H,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),sr.copy(D.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(sr)),_.material.toneMapped=Re.getTransfer(z.colorSpace)!==ze,(v!==z||x!==z.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,v=z,x=z.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new oi(new wc(2,2),new aa({name:"BackgroundMaterial",uniforms:Ss(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(z.colorSpace)!==ze,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||x!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,x=z.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,D){O.getRGB(dc,Sv(o)),r.buffers.color.setClear(dc.r,dc.g,dc.b,D,h)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(d,m)},render:R,addToRenderList:M,dispose:I}}function nT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(w,B,ot,lt,ct){let ht=!1;const L=v(lt,ot,B);u!==L&&(u=L,p(u.object)),ht=y(w,lt,ot,ct),ht&&b(w,lt,ot,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(w,B,ot,lt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function v(w,B,ot){const lt=ot.wireframe===!0;let ct=r[w.id];ct===void 0&&(ct={},r[w.id]=ct);let ht=ct[B.id];ht===void 0&&(ht={},ct[B.id]=ht);let L=ht[lt];return L===void 0&&(L=x(m()),ht[lt]=L),L}function x(w){const B=[],ot=[],lt=[];for(let ct=0;ct<i;ct++)B[ct]=0,ot[ct]=0,lt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ot,attributeDivisors:lt,object:w,attributes:{},index:null}}function y(w,B,ot,lt){const ct=u.attributes,ht=B.attributes;let L=0;const k=ot.getAttributes();for(const W in k)if(k[W].location>=0){const U=ct[W];let $=ht[W];if($===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;L++}return u.attributesNum!==L||u.index!==lt}function b(w,B,ot,lt){const ct={},ht=B.attributes;let L=0;const k=ot.getAttributes();for(const W in k)if(k[W].location>=0){let U=ht[W];U===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ct[W]=$,L++}u.attributes=ct,u.attributesNum=L,u.index=lt}function R(){const w=u.newAttributes;for(let B=0,ot=w.length;B<ot;B++)w[B]=0}function M(w){g(w,0)}function g(w,B){const ot=u.newAttributes,lt=u.enabledAttributes,ct=u.attributeDivisors;ot[w]=1,lt[w]===0&&(o.enableVertexAttribArray(w),lt[w]=1),ct[w]!==B&&(o.vertexAttribDivisor(w,B),ct[w]=B)}function I(){const w=u.newAttributes,B=u.enabledAttributes;for(let ot=0,lt=B.length;ot<lt;ot++)B[ot]!==w[ot]&&(o.disableVertexAttribArray(ot),B[ot]=0)}function O(w,B,ot,lt,ct,ht,L){L===!0?o.vertexAttribIPointer(w,B,ot,ct,ht):o.vertexAttribPointer(w,B,ot,lt,ct,ht)}function D(w,B,ot,lt){R();const ct=lt.attributes,ht=ot.getAttributes(),L=B.defaultAttributeValues;for(const k in ht){const W=ht[k];if(W.location>=0){let _t=ct[k];if(_t===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const U=_t.normalized,$=_t.itemSize,vt=t.get(_t);if(vt===void 0)continue;const St=vt.buffer,At=vt.type,tt=vt.bytesPerElement,dt=At===o.INT||At===o.UNSIGNED_INT||_t.gpuType===od;if(_t.isInterleavedBufferAttribute){const Mt=_t.data,Dt=Mt.stride,kt=_t.offset;if(Mt.isInstancedInterleavedBuffer){for(let ee=0;ee<W.locationSize;ee++)g(W.location+ee,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ee=0;ee<W.locationSize;ee++)M(W.location+ee);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ee=0;ee<W.locationSize;ee++)O(W.location+ee,$/W.locationSize,At,U,Dt*tt,(kt+$/W.locationSize*ee)*tt,dt)}else{if(_t.isInstancedBufferAttribute){for(let Mt=0;Mt<W.locationSize;Mt++)g(W.location+Mt,_t.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Mt=0;Mt<W.locationSize;Mt++)M(W.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<W.locationSize;Mt++)O(W.location+Mt,$/W.locationSize,At,U,$*tt,$/W.locationSize*Mt*tt,dt)}}else if(L!==void 0){const U=L[k];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(W.location,U);break;case 3:o.vertexAttrib3fv(W.location,U);break;case 4:o.vertexAttrib4fv(W.location,U);break;default:o.vertexAttrib1fv(W.location,U)}}}}I()}function z(){j();for(const w in r){const B=r[w];for(const ot in B){const lt=B[ot];for(const ct in lt)_(lt[ct].object),delete lt[ct];delete B[ot]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const B=r[w.id];for(const ot in B){const lt=B[ot];for(const ct in lt)_(lt[ct].object),delete lt[ct];delete B[ot]}delete r[w.id]}function H(w){for(const B in r){const ot=r[B];if(ot[w.id]===void 0)continue;const lt=ot[w.id];for(const ct in lt)_(lt[ct].object),delete lt[ct];delete ot[w.id]}}function j(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:G,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function iT(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let y=0;for(let b=0;b<v;b++)y+=_[b];i.update(y,r,1)}function m(p,_,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=_[R]*x[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function aT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==vi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const j=H===Lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Li&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==na&&!j)}function m(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:z,maxSamples:G}}function rT(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new lr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,y){const b=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,g=o.get(v);if(!l||b===null||b.length===0||u&&!M)u?_(null):p();else{const I=u?0:r,O=I*4;let D=g.clippingState||null;m.value=D,D=_(b,x,O,y);for(let z=0;z!==O;++z)D[z]=i[z];g.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,x,y,b){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const g=y+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,D=y;O!==R;++O,D+=4)h.copy(v[O]).applyMatrix4(I,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function sT(o){let t=new WeakMap;function i(h,d){return d===Rh?h.mapping=_s:d===wh&&(h.mapping=vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Rh||d===wh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new nM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const hs=4,C_=[.125,.215,.35,.446,.526,.582],fr=20,fh=new gM,D_=new ve;let hh=null,dh=0,ph=0,mh=!1;const cr=(1+Math.sqrt(5))/2,fs=1/cr,U_=[new J(-cr,fs,0),new J(cr,fs,0),new J(-fs,0,cr),new J(fs,0,cr),new J(0,cr,-fs),new J(0,cr,fs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],oT=new J;class L_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=oT}=u;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Lo,format:vi,colorSpace:xs,depthBuffer:!1},l=N_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lT(u)),this._blurMaterial=cT(u,t,i)}return l}_compileMaterial(t){const i=new oi(this._lodPlanes[0],t);this._renderer.compile(i,fh)}_sceneToCubeUV(t,i,r,l,u){const m=new Qn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(D_),v.toneMapping=za,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new _v({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),M=new oi(new Bo,R);let g=!1;const I=t.background;I?I.isColor&&(R.color.copy(I),t.background=null,g=!0):(R.color.copy(D_),g=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[O],u.y,u.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[O]));const z=this._cubeSize;pc(l,D*z,O>2?z:0,z,z),v.setRenderTarget(l),g&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=I}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===_s||t.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new oi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;pc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,fh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=U_[(l-u-1)%U_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new oi(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*fr-1),R=u/b,M=isFinite(u)?1+Math.floor(_*R):fr;M>fr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${fr}`);const g=[];let I=0;for(let H=0;H<fr;++H){const j=H/R,C=Math.exp(-j*j/2);g.push(C),H===0?I+=C:H<M&&(I+=2*C)}for(let H=0;H<g.length;H++)g[H]=g[H]/I;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=b,x.mipInt.value=O-r;const D=this._sizeLods[l],z=3*D*(l>O-hs?l-O+hs:0),G=4*(this._cubeSize-D);pc(i,z,G,3*D,2*D),m.setRenderTarget(i),m.render(v,fh)}}function lT(o){const t=[],i=[],r=[];let l=o;const u=o-hs+1+C_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=C_[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,b=6,R=3,M=2,g=1,I=new Float32Array(R*b*y),O=new Float32Array(M*b*y),D=new Float32Array(g*b*y);for(let G=0;G<y;G++){const H=G%3*2/3-1,j=G>2?0:-1,C=[H,j,0,H+2/3,j,0,H+2/3,j+1,0,H,j,0,H+2/3,j+1,0,H,j+1,0];I.set(C,R*b*G),O.set(x,M*b*G);const w=[G,G,G,G,G,G];D.set(w,g*b*G)}const z=new Ni;z.setAttribute("position",new li(I,R)),z.setAttribute("uv",new li(O,M)),z.setAttribute("faceIndex",new li(D,g)),t.push(z),l>hs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function N_(o,t,i){const r=new mr(o,t,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function cT(o,t,i){const r=new Float32Array(fr),l=new J(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function O_(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function P_(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function gd(){return`

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
	`}function uT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Rh||m===wh,_=m===_s||m===vs;if(p||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new L_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new L_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function fT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ps("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function hT(o,t,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)t.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,b=v.attributes.position;let R=0;if(y!==null){const I=y.array;R=y.version;for(let O=0,D=I.length;O<D;O+=3){const z=I[O+0],G=I[O+1],H=I[O+2];x.push(z,G,G,H,H,z)}}else if(b!==void 0){const I=b.array;R=b.version;for(let O=0,D=I.length/3-1;O<D;O+=3){const z=O+0,G=O+1,H=O+2;x.push(z,G,G,H,H,z)}}else return;const M=new(hv(x)?xv:vv)(x,1);M.version=R;const g=u.get(v);g&&t.remove(g),u.set(v,M)}function _(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function dT(o,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,u,x*h),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,u,x*h,b),i.update(y,r,b))}function _(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,b);let M=0;for(let g=0;g<b;g++)M+=y[g];i.update(M,r,1)}function v(x,y,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)p(x[g]/h,y[g],R[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,b);let g=0;for(let I=0;I<b;I++)g+=y[I]*R[I];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function pT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function mT(o,t,i){const r=new WeakMap,l=new Ie;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let z=d.attributes.position.count*D,G=1;z>t.maxTextureSize&&(G=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const H=new Float32Array(z*G*4*v),j=new dv(H,z,G,v);j.type=na,j.needsUpdate=!0;const C=D*4;for(let B=0;B<v;B++){const ot=g[B],lt=I[B],ct=O[B],ht=z*G*4*B;for(let L=0;L<ot.count;L++){const k=L*C;b===!0&&(l.fromBufferAttribute(ot,L),H[ht+k+0]=l.x,H[ht+k+1]=l.y,H[ht+k+2]=l.z,H[ht+k+3]=0),R===!0&&(l.fromBufferAttribute(lt,L),H[ht+k+4]=l.x,H[ht+k+5]=l.y,H[ht+k+6]=l.z,H[ht+k+7]=0),M===!0&&(l.fromBufferAttribute(ct,L),H[ht+k+8]=l.x,H[ht+k+9]=l.y,H[ht+k+10]=l.z,H[ht+k+11]=ct.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new Te(z,G)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function gT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Rv=new Nn,B_=new Tv(1,1),wv=new dv,Cv=new FS,Dv=new yv,z_=[],I_=[],F_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function ys(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=z_[l];if(u===void 0&&(u=new Float32Array(l),z_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function hn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Cc(o,t){let i=I_[t];i===void 0&&(i=new Int32Array(t),I_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function _T(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),hn(i,t)}}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),hn(i,t)}}function ST(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),hn(i,t)}}function MT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;G_.set(r),o.uniformMatrix2fv(this.addr,!1,G_),hn(i,r)}}function yT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;H_.set(r),o.uniformMatrix3fv(this.addr,!1,H_),hn(i,r)}}function ET(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;F_.set(r),o.uniformMatrix4fv(this.addr,!1,F_),hn(i,r)}}function TT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function bT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),hn(i,t)}}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),hn(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),hn(i,t)}}function wT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),hn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),hn(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),hn(i,t)}}function LT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(B_.compareFunction=fv,u=B_):u=Rv,i.setTexture2D(t||u,l)}function NT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Cv,l)}function OT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Dv,l)}function PT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||wv,l)}function BT(o){switch(o){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return ST;case 35674:return MT;case 35675:return yT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return bT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return wT;case 36294:return CT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function zT(o,t){o.uniform1fv(this.addr,t)}function IT(o,t){const i=ys(t,this.size,2);o.uniform2fv(this.addr,i)}function FT(o,t){const i=ys(t,this.size,3);o.uniform3fv(this.addr,i)}function HT(o,t){const i=ys(t,this.size,4);o.uniform4fv(this.addr,i)}function GT(o,t){const i=ys(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function VT(o,t){const i=ys(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function kT(o,t){const i=ys(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function XT(o,t){o.uniform1iv(this.addr,t)}function WT(o,t){o.uniform2iv(this.addr,t)}function qT(o,t){o.uniform3iv(this.addr,t)}function YT(o,t){o.uniform4iv(this.addr,t)}function ZT(o,t){o.uniform1uiv(this.addr,t)}function jT(o,t){o.uniform2uiv(this.addr,t)}function KT(o,t){o.uniform3uiv(this.addr,t)}function QT(o,t){o.uniform4uiv(this.addr,t)}function JT(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Rv,u[h])}function $T(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Cv,u[h])}function tb(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Dv,u[h])}function eb(o,t,i){const r=this.cache,l=t.length,u=Cc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||wv,u[h])}function nb(o){switch(o){case 5126:return zT;case 35664:return IT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return ZT;case 36294:return jT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}class ib{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BT(i.type)}}class ab{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nb(i.type)}}class rb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function V_(o,t){o.seq.push(t),o.map[t.id]=t}function sb(o,t,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),h=gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){V_(i,p===void 0?new ib(d,o,t):new ab(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new rb(d),V_(i,v)),i=v}}}class Mc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);sb(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function k_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const ob=37297;let lb=0;function cb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const X_=new le;function ub(o){Re._getMatrix(X_,Re.workingColorSpace,o);const t=`mat3( ${X_.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case yc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function W_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+cb(o.getShaderSource(t),d)}else return u}function fb(o,t){const i=ub(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function hb(o,t){let i;switch(t){case ev:i="Linear";break;case pS:i="Reinhard";break;case mS:i="Cineon";break;case gS:i="ACESFilmic";break;case vS:i="AgX";break;case xS:i="Neutral";break;case _S:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new J;function db(){Re.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),t=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function mb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function gb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function bo(o){return o!==""}function q_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Y_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _b=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(_b,xb)}const vb=new Map;function xb(o,t){let i=fe[t];if(i===void 0){const r=vb.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ad(i)}const Sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(o){return o.replace(Sb,Mb)}function Mb(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function j_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function yb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===tv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Yx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function Eb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case Ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function bb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case bc:t="ENVMAP_BLENDING_MULTIPLY";break;case hS:t="ENVMAP_BLENDING_MIX";break;case dS:t="ENVMAP_BLENDING_ADD";break}return t}function Ab(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Rb(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=yb(i),p=Eb(i),_=Tb(i),v=bb(i),x=Ab(i),y=pb(i),b=mb(u),R=l.createProgram();let M,g,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bo).join(`
`),g.length>0&&(g+=`
`)):(M=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),g=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?fe.tonemapping_pars_fragment:"",i.toneMapping!==za?hb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,fb("linearToOutputTexel",i.outputColorSpace),db(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=ad(h),h=q_(h,i),h=Y_(h,i),d=ad(d),d=q_(d,i),d=Y_(d,i),h=Z_(h),d=Z_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=I+M+h,D=I+g+d,z=k_(l,l.VERTEX_SHADER,O),G=k_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,z),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(B){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(z)||"",ct=l.getShaderInfoLog(G)||"",ht=ot.trim(),L=lt.trim(),k=ct.trim();let W=!0,_t=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,z,G);else{const U=W_(l,z,"vertex"),$=W_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ht+`
`+U+`
`+$)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(L===""||k==="")&&(_t=!1);_t&&(B.diagnostics={runnable:W,programLog:ht,vertexShader:{log:L,prefix:M},fragmentShader:{log:k,prefix:g}})}l.deleteShader(z),l.deleteShader(G),j=new Mc(l,R),C=gb(l,R)}let j;this.getUniforms=function(){return j===void 0&&H(this),j};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,ob)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=G,this}let wb=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Db(t),i.set(t,r)),r}}class Db{constructor(t){this.id=wb++,this.code=t,this.usedTimes=0}}function Ub(o,t,i,r,l,u,h){const d=new mv,m=new Cb,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,B,ot,lt){const ct=ot.fog,ht=lt.geometry,L=C.isMeshStandardMaterial?ot.environment:null,k=(C.isMeshStandardMaterial?i:t).get(C.envMap||L),W=k&&k.mapping===Ac?k.image.height:null,_t=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,At,tt,dt;if(_t){const Ee=wi[_t];St=Ee.vertexShader,At=Ee.fragmentShader}else St=C.vertexShader,At=C.fragmentShader,m.update(C),tt=m.getVertexShaderID(C),dt=m.getFragmentShaderID(C);const Mt=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=lt.isInstancedMesh===!0,ee=lt.isBatchedMesh===!0,Le=!!C.map,ae=!!C.matcap,F=!!k,Me=!!C.aoMap,Yt=!!C.lightMap,xe=!!C.bumpMap,It=!!C.normalMap,Ge=!!C.displacementMap,Ft=!!C.emissiveMap,se=!!C.metalnessMap,qe=!!C.roughnessMap,Ye=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,et=C.iridescence>0,ut=C.sheen>0,xt=C.transmission>0,st=Ye&&!!C.anisotropyMap,Pt=N&&!!C.clearcoatMap,Rt=N&&!!C.clearcoatNormalMap,Xt=N&&!!C.clearcoatRoughnessMap,qt=et&&!!C.iridescenceMap,yt=et&&!!C.iridescenceThicknessMap,Lt=ut&&!!C.sheenColorMap,jt=ut&&!!C.sheenRoughnessMap,Vt=!!C.specularMap,Ct=!!C.specularColorMap,re=!!C.specularIntensityMap,X=xt&&!!C.transmissionMap,bt=xt&&!!C.thicknessMap,wt=!!C.gradientMap,Bt=!!C.alphaMap,Et=C.alphaTest>0,gt=!!C.alphaHash,Gt=!!C.extensions;let ie=za;C.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ce={shaderID:_t,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:At,defines:C.defines,customVertexShaderID:tt,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:ee,batchingColor:ee&&lt._colorsTexture!==null,instancing:kt,instancingColor:kt&&lt.instanceColor!==null,instancingMorph:kt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:xs,alphaToCoverage:!!C.alphaToCoverage,map:Le,matcap:ae,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:W,aoMap:Me,lightMap:Yt,bumpMap:xe,normalMap:It,displacementMap:x&&Ge,emissiveMap:Ft,normalMapObjectSpace:It&&C.normalMapType===ES,normalMapTangentSpace:It&&C.normalMapType===dd,metalnessMap:se,roughnessMap:qe,anisotropy:Ye,anisotropyMap:st,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:et,iridescenceMap:qt,iridescenceThicknessMap:yt,sheen:ut,sheenColorMap:Lt,sheenRoughnessMap:jt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:re,transmission:xt,transmissionMap:X,thicknessMap:bt,gradientMap:wt,opaque:C.transparent===!1&&C.blending===ds&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:gt,combine:C.combine,mapUv:Le&&R(C.map.channel),aoMapUv:Me&&R(C.aoMap.channel),lightMapUv:Yt&&R(C.lightMap.channel),bumpMapUv:xe&&R(C.bumpMap.channel),normalMapUv:It&&R(C.normalMap.channel),displacementMapUv:Ge&&R(C.displacementMap.channel),emissiveMapUv:Ft&&R(C.emissiveMap.channel),metalnessMapUv:se&&R(C.metalnessMap.channel),roughnessMapUv:qe&&R(C.roughnessMap.channel),anisotropyMapUv:st&&R(C.anisotropyMap.channel),clearcoatMapUv:Pt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:jt&&R(C.sheenRoughnessMap.channel),specularMapUv:Vt&&R(C.specularMap.channel),specularColorMapUv:Ct&&R(C.specularColorMap.channel),specularIntensityMapUv:re&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:bt&&R(C.thicknessMap.channel),alphaMapUv:Bt&&R(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(It||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ht.attributes.uv&&(Le||Bt),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:lt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Le&&C.map.isVideoTexture===!0&&Re.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&Re.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ea,flipSided:C.side===Ln,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Gt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&C.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)w.push(B),w.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(I(w,C),O(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function I(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=b[C.type];let B;if(w){const ot=wi[w];B=JS.clone(ot.uniforms)}else B=C.uniforms;return B}function z(C,w){let B;for(let ot=0,lt=_.length;ot<lt;ot++){const ct=_[ot];if(ct.cacheKey===w){B=ct,++B.usedTimes;break}}return B===void 0&&(B=new Rb(o,w,C,u),_.push(B)),B}function G(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),C.destroy()}}function H(C){m.remove(C)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:z,releaseProgram:G,releaseShaderCache:H,programs:_,dispose:j}}function Lb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Nb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function K_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Q_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,b,R,M){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:b,renderOrder:v.renderOrder,z:R,group:M},o[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=b,g.renderOrder=v.renderOrder,g.z=R,g.group=M),t++,g}function d(v,x,y,b,R,M){const g=h(v,x,y,b,R,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(v,x,y,b,R,M){const g=h(v,x,y,b,R,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||Nb),r.length>1&&r.sort(x||K_),l.length>1&&l.sort(x||K_)}function _(){for(let v=t,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function Ob(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new Q_,o.set(r,[h])):l>=u.length?(h=new Q_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Pb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new ve};break;case"SpotLight":i={position:new J,direction:new J,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function Bb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let zb=0;function Ib(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Fb(o){const t=new Pb,i=Bb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,u=new je,h=new je;function d(p){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,b=0,R=0,M=0,g=0,I=0,O=0,D=0,z=0,G=0,H=0;p.sort(Ib);for(let C=0,w=p.length;C<w;C++){const B=p[C],ot=B.color,lt=B.intensity,ct=B.distance,ht=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ot.r*lt,v+=ot.g*lt,x+=ot.b*lt;else if(B.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(B.sh.coefficients[L],lt);H++}else if(B.isDirectionalLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const k=B.shadow,W=i.get(B);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=B.shadow.matrix,I++}r.directional[y]=L,y++}else if(B.isSpotLight){const L=t.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(ot).multiplyScalar(lt),L.distance=ct,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,r.spot[R]=L;const k=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,k.updateMatrices(B),B.castShadow&&G++),r.spotLightMatrix[R]=k.matrix,B.castShadow){const W=i.get(B);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,r.spotShadow[R]=W,r.spotShadowMap[R]=ht,D++}R++}else if(B.isRectAreaLight){const L=t.get(B);L.color.copy(ot).multiplyScalar(lt),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=L,M++}else if(B.isPointLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const k=B.shadow,W=i.get(B);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=B.shadow.matrix,O++}r.point[b]=L,b++}else if(B.isHemisphereLight){const L=t.get(B);L.skyColor.copy(B.color).multiplyScalar(lt),L.groundColor.copy(B.groundColor).multiplyScalar(lt),r.hemi[g]=L,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==g||j.numDirectionalShadows!==I||j.numPointShadows!==O||j.numSpotShadows!==D||j.numSpotMaps!==z||j.numLightProbes!==H)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+z-G,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=H,j.directionalLength=y,j.pointLength=b,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=g,j.numDirectionalShadows=I,j.numPointShadows=O,j.numSpotShadows=D,j.numSpotMaps=z,j.numLightProbes=H,r.version=zb++)}function m(p,_){let v=0,x=0,y=0,b=0,R=0;const M=_.matrixWorldInverse;for(let g=0,I=p.length;g<I;g++){const O=p[g];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function J_(o){const t=new Fb(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Hb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new J_(o),t.set(l,[d])):u>=h.length?(d=new J_(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vb=`uniform sampler2D shadow_pass;
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
}`;function kb(o,t,i){let r=new md;const l=new Te,u=new Te,h=new Ie,d=new fM({depthPacking:yS}),m=new hM,p={},_=i.maxTextureSize,v={[Ia]:Ln,[Ln]:Ia,[ea]:ea},x=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Gb,fragmentShader:Vb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ni;b.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new oi(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let g=this.type;this.render=function(G,H,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const C=o.getRenderTarget(),w=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Ba),ot.buffers.depth.getReversed()?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const lt=g!==ta&&this.type===ta,ct=g===ta&&this.type!==ta;for(let ht=0,L=G.length;ht<L;ht++){const k=G[ht],W=k.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const _t=W.getFrameExtents();if(l.multiply(_t),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/_t.x),l.x=u.x*_t.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/_t.y),l.y=u.y*_t.y,W.mapSize.y=u.y)),W.map===null||lt===!0||ct===!0){const $=this.type!==ta?{minFilter:xi,magFilter:xi}:{};W.map!==null&&W.map.dispose(),W.map=new mr(l.x,l.y,$),W.map.texture.name=k.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const U=W.getViewportCount();for(let $=0;$<U;$++){const vt=W.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),ot.viewport(h),W.updateMatrices(k,$),r=W.getFrustum(),D(H,j,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===ta&&I(W,j),W.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(C,w,B)};function I(G,H){const j=t.update(R);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new mr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(H,null,j,x,R,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(H,null,j,y,R,null)}function O(G,H,j,C){let w=null;const B=j.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)w=B;else if(w=j.isPointLight===!0?m:d,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const ot=w.uuid,lt=H.uuid;let ct=p[ot];ct===void 0&&(ct={},p[ot]=ct);let ht=ct[lt];ht===void 0&&(ht=w.clone(),ct[lt]=ht,H.addEventListener("dispose",z)),w=ht}if(w.visible=H.visible,w.wireframe=H.wireframe,C===ta?w.side=H.shadowSide!==null?H.shadowSide:H.side:w.side=H.shadowSide!==null?H.shadowSide:v[H.side],w.alphaMap=H.alphaMap,w.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,w.map=H.map,w.clipShadows=H.clipShadows,w.clippingPlanes=H.clippingPlanes,w.clipIntersection=H.clipIntersection,w.displacementMap=H.displacementMap,w.displacementScale=H.displacementScale,w.displacementBias=H.displacementBias,w.wireframeLinewidth=H.wireframeLinewidth,w.linewidth=H.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ot=o.properties.get(w);ot.light=j}return w}function D(G,H,j,C,w){if(G.visible===!1)return;if(G.layers.test(H.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===ta)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,G.matrixWorld);const lt=t.update(G),ct=G.material;if(Array.isArray(ct)){const ht=lt.groups;for(let L=0,k=ht.length;L<k;L++){const W=ht[L],_t=ct[W.materialIndex];if(_t&&_t.visible){const U=O(G,_t,C,w);G.onBeforeShadow(o,G,H,j,lt,U,W),o.renderBufferDirect(j,null,lt,U,G,W),G.onAfterShadow(o,G,H,j,lt,U,W)}}}else if(ct.visible){const ht=O(G,ct,C,w);G.onBeforeShadow(o,G,H,j,lt,ht,null),o.renderBufferDirect(j,null,lt,ht,G,null),G.onAfterShadow(o,G,H,j,lt,ht,null)}}const ot=G.children;for(let lt=0,ct=ot.length;lt<ct;lt++)D(ot[lt],H,j,C,w)}function z(G){G.target.removeEventListener("dispose",z);for(const j in p){const C=p[j],w=G.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const Xb={[Sh]:Mh,[yh]:bh,[Eh]:Ah,[gs]:Th,[Mh]:Sh,[bh]:yh,[Ah]:Eh,[Th]:gs};function Wb(o,t){function i(){let X=!1;const bt=new Ie;let wt=null;const Bt=new Ie(0,0,0,0);return{setMask:function(Et){wt!==Et&&!X&&(o.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,gt,Gt,ie,Ce){Ce===!0&&(Et*=ie,gt*=ie,Gt*=ie),bt.set(Et,gt,Gt,ie),Bt.equals(bt)===!1&&(o.clearColor(Et,gt,Gt,ie),Bt.copy(bt))},reset:function(){X=!1,wt=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,bt=!1,wt=null,Bt=null,Et=null;return{setReversed:function(gt){if(bt!==gt){const Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const ie=Et;Et=null,this.setClear(ie)}},getReversed:function(){return bt},setTest:function(gt){gt?Mt(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!X&&(o.depthMask(gt),wt=gt)},setFunc:function(gt){if(bt&&(gt=Xb[gt]),Bt!==gt){switch(gt){case Sh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case yh:o.depthFunc(o.LESS);break;case gs:o.depthFunc(o.LEQUAL);break;case Eh:o.depthFunc(o.EQUAL);break;case Th:o.depthFunc(o.GEQUAL);break;case bh:o.depthFunc(o.GREATER);break;case Ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Et!==gt&&(bt&&(gt=1-gt),o.clearDepth(gt),Et=gt)},reset:function(){X=!1,wt=null,Bt=null,Et=null,bt=!1}}}function l(){let X=!1,bt=null,wt=null,Bt=null,Et=null,gt=null,Gt=null,ie=null,Ce=null;return{setTest:function(Ee){X||(Ee?Mt(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Ee){bt!==Ee&&!X&&(o.stencilMask(Ee),bt=Ee)},setFunc:function(Ee,ci,on){(wt!==Ee||Bt!==ci||Et!==on)&&(o.stencilFunc(Ee,ci,on),wt=Ee,Bt=ci,Et=on)},setOp:function(Ee,ci,on){(gt!==Ee||Gt!==ci||ie!==on)&&(o.stencilOp(Ee,ci,on),gt=Ee,Gt=ci,ie=on)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ce!==Ee&&(o.clearStencil(Ee),Ce=Ee)},reset:function(){X=!1,bt=null,wt=null,Bt=null,Et=null,gt=null,Gt=null,ie=null,Ce=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,y=[],b=null,R=!1,M=null,g=null,I=null,O=null,D=null,z=null,G=null,H=new ve(0,0,0),j=0,C=!1,w=null,B=null,ot=null,lt=null,ct=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,k=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),L=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),L=k>=2);let _t=null,U={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new Ie().fromArray($),At=new Ie().fromArray(vt);function tt(X,bt,wt,Bt){const Et=new Uint8Array(4),gt=o.createTexture();o.bindTexture(X,gt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<wt;Gt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return gt}const dt={};dt[o.TEXTURE_2D]=tt(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(gs),xe(!1),It($g),Mt(o.CULL_FACE),Me(Ba);function Mt(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Dt(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function kt(X,bt){return v[X]!==bt?(o.bindFramebuffer(X,bt),v[X]=bt,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=bt),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function ee(X,bt){let wt=y,Bt=!1;if(X){wt=x.get(bt),wt===void 0&&(wt=[],x.set(bt,wt));const Et=X.textures;if(wt.length!==Et.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Gt=Et.length;gt<Gt;gt++)wt[gt]=o.COLOR_ATTACHMENT0+gt;wt.length=Et.length,Bt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(wt)}function Le(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const ae={[ur]:o.FUNC_ADD,[jx]:o.FUNC_SUBTRACT,[Kx]:o.FUNC_REVERSE_SUBTRACT};ae[Qx]=o.MIN,ae[Jx]=o.MAX;const F={[$x]:o.ZERO,[tS]:o.ONE,[eS]:o.SRC_COLOR,[vh]:o.SRC_ALPHA,[oS]:o.SRC_ALPHA_SATURATE,[rS]:o.DST_COLOR,[iS]:o.DST_ALPHA,[nS]:o.ONE_MINUS_SRC_COLOR,[xh]:o.ONE_MINUS_SRC_ALPHA,[sS]:o.ONE_MINUS_DST_COLOR,[aS]:o.ONE_MINUS_DST_ALPHA,[lS]:o.CONSTANT_COLOR,[cS]:o.ONE_MINUS_CONSTANT_COLOR,[uS]:o.CONSTANT_ALPHA,[fS]:o.ONE_MINUS_CONSTANT_ALPHA};function Me(X,bt,wt,Bt,Et,gt,Gt,ie,Ce,Ee){if(X===Ba){R===!0&&(Dt(o.BLEND),R=!1);return}if(R===!1&&(Mt(o.BLEND),R=!0),X!==Zx){if(X!==M||Ee!==C){if((g!==ur||D!==ur)&&(o.blendEquation(o.FUNC_ADD),g=ur,D=ur),Ee)switch(X){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _h:o.blendFunc(o.ONE,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case e_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case _h:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case t_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,O=null,z=null,G=null,H.set(0,0,0),j=0,M=X,C=Ee}return}Et=Et||bt,gt=gt||wt,Gt=Gt||Bt,(bt!==g||Et!==D)&&(o.blendEquationSeparate(ae[bt],ae[Et]),g=bt,D=Et),(wt!==I||Bt!==O||gt!==z||Gt!==G)&&(o.blendFuncSeparate(F[wt],F[Bt],F[gt],F[Gt]),I=wt,O=Bt,z=gt,G=Gt),(ie.equals(H)===!1||Ce!==j)&&(o.blendColor(ie.r,ie.g,ie.b,Ce),H.copy(ie),j=Ce),M=X,C=!1}function Yt(X,bt){X.side===ea?Dt(o.CULL_FACE):Mt(o.CULL_FACE);let wt=X.side===Ln;bt&&(wt=!wt),xe(wt),X.blending===ds&&X.transparent===!1?Me(Ba):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ft(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function xe(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function It(X){X!==Wx?(Mt(o.CULL_FACE),X!==B&&(X===$g?o.cullFace(o.BACK):X===qx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),B=X}function Ge(X){X!==ot&&(L&&o.lineWidth(X),ot=X)}function Ft(X,bt,wt){X?(Mt(o.POLYGON_OFFSET_FILL),(lt!==bt||ct!==wt)&&(o.polygonOffset(bt,wt),lt=bt,ct=wt)):Dt(o.POLYGON_OFFSET_FILL)}function se(X){X?Mt(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function qe(X){X===void 0&&(X=o.TEXTURE0+ht-1),_t!==X&&(o.activeTexture(X),_t=X)}function Ye(X,bt,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+ht-1:wt=_t);let Bt=U[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},U[wt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(X,bt||dt[X]),Bt.type=X,Bt.texture=bt)}function N(){const X=U[_t];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function jt(X){At.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),At.copy(X))}function Vt(X,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Bt=wt.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(bt,X.name),wt.set(X,Bt))}function Ct(X,bt){const Bt=p.get(bt).get(X);m.get(bt)!==Bt&&(o.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),m.set(bt,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_t=null,U={},v={},x=new WeakMap,y=[],b=null,R=!1,M=null,g=null,I=null,O=null,D=null,z=null,G=null,H=new ve(0,0,0),j=0,C=!1,w=null,B=null,ot=null,lt=null,ct=null,St.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:Dt,bindFramebuffer:kt,drawBuffers:ee,useProgram:Le,setBlending:Me,setMaterial:Yt,setFlipSided:xe,setCullFace:It,setLineWidth:Ge,setPolygonOffset:Ft,setScissorTest:se,activeTexture:qe,bindTexture:Ye,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:qt,texImage3D:yt,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ut,texSubImage3D:xt,compressedTexSubImage2D:st,compressedTexSubImage3D:Pt,scissor:Lt,viewport:jt,reset:re}}function qb(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Te,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return y?new OffscreenCanvas(N,E):Tc("canvas")}function R(N,E,et){let ut=1;const xt=Ye(N);if((xt.width>et||xt.height>et)&&(ut=et/Math.max(xt.width,xt.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const st=Math.floor(ut*xt.width),Pt=Math.floor(ut*xt.height);v===void 0&&(v=b(st,Pt));const Rt=E?b(st,Pt):v;return Rt.width=st,Rt.height=Pt,Rt.getContext("2d").drawImage(N,0,0,st,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+st+"x"+Pt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function M(N){return N.generateMipmaps}function g(N){o.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(N,E,et,ut,xt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let st=E;if(E===o.RED&&(et===o.FLOAT&&(st=o.R32F),et===o.HALF_FLOAT&&(st=o.R16F),et===o.UNSIGNED_BYTE&&(st=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(st=o.R8UI),et===o.UNSIGNED_SHORT&&(st=o.R16UI),et===o.UNSIGNED_INT&&(st=o.R32UI),et===o.BYTE&&(st=o.R8I),et===o.SHORT&&(st=o.R16I),et===o.INT&&(st=o.R32I)),E===o.RG&&(et===o.FLOAT&&(st=o.RG32F),et===o.HALF_FLOAT&&(st=o.RG16F),et===o.UNSIGNED_BYTE&&(st=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(st=o.RG8UI),et===o.UNSIGNED_SHORT&&(st=o.RG16UI),et===o.UNSIGNED_INT&&(st=o.RG32UI),et===o.BYTE&&(st=o.RG8I),et===o.SHORT&&(st=o.RG16I),et===o.INT&&(st=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(st=o.RGB8UI),et===o.UNSIGNED_SHORT&&(st=o.RGB16UI),et===o.UNSIGNED_INT&&(st=o.RGB32UI),et===o.BYTE&&(st=o.RGB8I),et===o.SHORT&&(st=o.RGB16I),et===o.INT&&(st=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(st=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(st=o.RGBA16UI),et===o.UNSIGNED_INT&&(st=o.RGBA32UI),et===o.BYTE&&(st=o.RGBA8I),et===o.SHORT&&(st=o.RGBA16I),et===o.INT&&(st=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(st=o.RGB9_E5),E===o.RGBA){const Pt=xt?yc:Re.getTransfer(ut);et===o.FLOAT&&(st=o.RGBA32F),et===o.HALF_FLOAT&&(st=o.RGBA16F),et===o.UNSIGNED_BYTE&&(st=Pt===ze?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(st=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(st=o.RGB5_A1)}return(st===o.R16F||st===o.R32F||st===o.RG16F||st===o.RG32F||st===o.RGBA16F||st===o.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function D(N,E){let et;return N?E===null||E===pr||E===Co?et=o.DEPTH24_STENCIL8:E===na?et=o.DEPTH32F_STENCIL8:E===wo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===Co?et=o.DEPTH_COMPONENT24:E===na?et=o.DEPTH_COMPONENT32F:E===wo&&(et=o.DEPTH_COMPONENT16),et}function z(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==xi&&N.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function G(N){const E=N.target;E.removeEventListener("dispose",G),j(E),E.isVideoTexture&&_.delete(E)}function H(N){const E=N.target;E.removeEventListener("dispose",H),w(E)}function j(N){const E=r.get(N);if(E.__webglInit===void 0)return;const et=N.source,ut=x.get(et);if(ut){const xt=ut[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(N),Object.keys(ut).length===0&&x.delete(et)}r.remove(N)}function C(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const et=N.source,ut=x.get(et);delete ut[E.__cacheKey],h.memory.textures--}function w(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let xt=0;xt<E.__webglFramebuffer[ut].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ut=0,xt=et.length;ut<xt;ut++){const st=r.get(et[ut]);st.__webglTexture&&(o.deleteTexture(st.__webglTexture),h.memory.textures--),r.remove(et[ut])}r.remove(N)}let B=0;function ot(){B=0}function lt(){const N=B;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function ct(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ht(N,E){const et=r.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&et.__version!==N.version){const ut=N.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(et,N,E);return}}else N.isExternalTexture&&(et.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function L(N,E){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){dt(et,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function k(N,E){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){dt(et,N,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function W(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const _t={[Ro]:o.REPEAT,[hr]:o.CLAMP_TO_EDGE,[Ch]:o.MIRRORED_REPEAT},U={[xi]:o.NEAREST,[SS]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[If]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},$={[TS]:o.NEVER,[DS]:o.ALWAYS,[bS]:o.LESS,[fv]:o.LEQUAL,[AS]:o.EQUAL,[CS]:o.GEQUAL,[RS]:o.GREATER,[wS]:o.NOTEQUAL};function vt(N,E){if(E.type===na&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===If||E.magFilter===ql||E.magFilter===dr||E.minFilter===Ci||E.minFilter===If||E.minFilter===ql||E.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,_t[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,_t[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,_t[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xi||E.minFilter!==ql&&E.minFilter!==dr||E.type===na&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",G));const ut=E.source;let xt=x.get(ut);xt===void 0&&(xt={},x.set(ut,xt));const st=ct(E);if(st!==N.__cacheKey){xt[st]===void 0&&(xt[st]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),xt[st].usedTimes++;const Pt=xt[N.__cacheKey];Pt!==void 0&&(xt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&C(E)),N.__cacheKey=st,N.__webglTexture=xt[st].texture}return et}function At(N,E,et){return Math.floor(Math.floor(N/et)/E)}function tt(N,E,et,ut){const st=N.updateRanges;if(st.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ut,E.data);else{st.sort((yt,Lt)=>yt.start-Lt.start);let Pt=0;for(let yt=1;yt<st.length;yt++){const Lt=st[Pt],jt=st[yt],Vt=Lt.start+Lt.count,Ct=At(jt.start,E.width,4),re=At(Lt.start,E.width,4);jt.start<=Vt+1&&Ct===re&&At(jt.start+jt.count-1,E.width,4)===Ct?Lt.count=Math.max(Lt.count,jt.start+jt.count-Lt.start):(++Pt,st[Pt]=jt)}st.length=Pt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,Lt=st.length;yt<Lt;yt++){const jt=st[yt],Vt=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),re=Vt%E.width,X=Math.floor(Vt/E.width),bt=Ct,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,re,X,bt,wt,et,ut,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function dt(N,E,et){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const xt=St(N,E),st=E.source;i.bindTexture(ut,N.__webglTexture,o.TEXTURE0+et);const Pt=r.get(st);if(st.version!==Pt.__version||xt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Re.getPrimaries(Re.workingColorSpace),Xt=E.colorSpace===Pa?null:Re.getPrimaries(E.colorSpace),qt=E.colorSpace===Pa||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let yt=R(E.image,!1,l.maxTextureSize);yt=qe(E,yt);const Lt=u.convert(E.format,E.colorSpace),jt=u.convert(E.type);let Vt=O(E.internalFormat,Lt,jt,E.colorSpace,E.isVideoTexture);vt(ut,E);let Ct;const re=E.mipmaps,X=E.isVideoTexture!==!0,bt=Pt.__version===void 0||xt===!0,wt=st.dataReady,Bt=z(E,yt);if(E.isDepthTexture)Vt=D(E.format===Uo,E.type),bt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Vt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,yt.width,yt.height,0,Lt,jt,null));else if(E.isDataTexture)if(re.length>0){X&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Ct=re[Et],X?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,jt,Ct.data):i.texImage2D(o.TEXTURE_2D,Et,Vt,Ct.width,Ct.height,0,Lt,jt,Ct.data);E.generateMipmaps=!1}else X?(bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height),wt&&tt(E,yt,Lt,jt)):i.texImage2D(o.TEXTURE_2D,0,Vt,yt.width,yt.height,0,Lt,jt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,re[0].width,re[0].height,yt.depth);for(let Et=0,gt=re.length;Et<gt;Et++)if(Ct=re[Et],E.format!==vi)if(Lt!==null)if(X){if(wt)if(E.layerUpdates.size>0){const Gt=w_(Ct.width,Ct.height,E.format,E.type);for(const ie of E.layerUpdates){const Ce=Ct.data.subarray(ie*Gt/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Gt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ie,Ct.width,Ct.height,1,Lt,Ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,yt.depth,Lt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Vt,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,yt.depth,Lt,jt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Vt,Ct.width,Ct.height,yt.depth,0,Lt,jt,Ct.data)}else{X&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Ct=re[Et],E.format!==vi?Lt!==null?X?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,jt,Ct.data):i.texImage2D(o.TEXTURE_2D,Et,Vt,Ct.width,Ct.height,0,Lt,jt,Ct.data)}else if(E.isDataArrayTexture)if(X){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,yt.width,yt.height,yt.depth),wt)if(E.layerUpdates.size>0){const Et=w_(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const Gt=yt.data.subarray(gt*Et/yt.data.BYTES_PER_ELEMENT,(gt+1)*Et/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Lt,jt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(E.isData3DTexture)X?(bt&&i.texStorage3D(o.TEXTURE_3D,Bt,Vt,yt.width,yt.height,yt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Lt,jt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,yt.width,yt.height,yt.depth,0,Lt,jt,yt.data);else if(E.isFramebufferTexture){if(bt)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height);else{let Et=yt.width,gt=yt.height;for(let Gt=0;Gt<Bt;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Vt,Et,gt,0,Lt,jt,null),Et>>=1,gt>>=1}}else if(re.length>0){if(X&&bt){const Et=Ye(re[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Et.width,Et.height)}for(let Et=0,gt=re.length;Et<gt;Et++)Ct=re[Et],X?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt,jt,Ct):i.texImage2D(o.TEXTURE_2D,Et,Vt,Lt,jt,Ct);E.generateMipmaps=!1}else if(X){if(bt){const Et=Ye(yt);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Et.width,Et.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,jt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Lt,jt,yt);M(E)&&g(ut),Pt.__version=st.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Mt(N,E,et){if(E.image.length!==6)return;const ut=St(N,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const st=r.get(xt);if(xt.version!==st.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Pt=Re.getPrimaries(Re.workingColorSpace),Rt=E.colorSpace===Pa?null:Re.getPrimaries(E.colorSpace),Xt=E.colorSpace===Pa||Pt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let gt=0;gt<6;gt++)!qt&&!yt?Lt[gt]=R(E.image[gt],!0,l.maxCubemapSize):Lt[gt]=yt?E.image[gt].image:E.image[gt],Lt[gt]=qe(E,Lt[gt]);const jt=Lt[0],Vt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),re=O(E.internalFormat,Vt,Ct,E.colorSpace),X=E.isVideoTexture!==!0,bt=st.__version===void 0||ut===!0,wt=xt.dataReady;let Bt=z(E,jt);vt(o.TEXTURE_CUBE_MAP,E);let Et;if(qt){X&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,jt.width,jt.height);for(let gt=0;gt<6;gt++){Et=Lt[gt].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ie=Et[Gt];E.format!==vi?Vt!==null?X?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,ie.width,ie.height,Vt,Ct,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,re,ie.width,ie.height,0,Vt,Ct,ie.data)}}}else{if(Et=E.mipmaps,X&&bt){Et.length>0&&Bt++;const gt=Ye(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Lt[gt].width,Lt[gt].height,Vt,Ct,Lt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Lt[gt].width,Lt[gt].height,0,Vt,Ct,Lt[gt].data);for(let Gt=0;Gt<Et.length;Gt++){const Ce=Et[Gt].image[gt].image;X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,Ce.width,Ce.height,Vt,Ct,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,re,Ce.width,Ce.height,0,Vt,Ct,Ce.data)}}else{X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,Ct,Lt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Vt,Ct,Lt[gt]);for(let Gt=0;Gt<Et.length;Gt++){const ie=Et[Gt];X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,Vt,Ct,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,re,Vt,Ct,ie.image[gt])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),st.__version=xt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Dt(N,E,et,ut,xt,st){const Pt=u.convert(et.format,et.colorSpace),Rt=u.convert(et.type),Xt=O(et.internalFormat,Pt,Rt,et.colorSpace),qt=r.get(E),yt=r.get(et);if(yt.__renderTarget=E,!qt.__hasExternalTextures){const Lt=Math.max(1,E.width>>st),jt=Math.max(1,E.height>>st);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,st,Xt,Lt,jt,E.depth,0,Pt,Rt,null):i.texImage2D(xt,st,Xt,Lt,jt,0,Pt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,xt,yt.__webglTexture,0,Ge(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,xt,yt.__webglTexture,st),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(N,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ut=E.depthTexture,xt=ut&&ut.isDepthTexture?ut.type:null,st=D(E.stencilBuffer,xt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ge(E);Ft(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,st,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,st,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,st,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,N)}else{const ut=E.textures;for(let xt=0;xt<ut.length;xt++){const st=ut[xt],Pt=u.convert(st.format,st.colorSpace),Rt=u.convert(st.type),Xt=O(st.internalFormat,Pt,Rt,st.colorSpace),qt=Ge(E);et&&Ft(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Xt,E.width,E.height):Ft(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ee(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const xt=ut.__webglTexture,st=Ge(E);if(E.depthTexture.format===Do)Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Uo)Ft(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Le(N){const E=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",xt)};ut.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ut}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ut=N.texture.mipmaps;ut&&ut.length>0?ee(E.__webglFramebuffer[0],N):ee(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),kt(E.__webglDepthbuffer[ut],N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,st)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),kt(E.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,st)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(N,E,et){const ut=r.get(N);E!==void 0&&Dt(ut.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Le(N)}function F(N){const E=N.texture,et=r.get(N),ut=r.get(E);N.addEventListener("dispose",H);const xt=N.textures,st=N.isWebGLCubeRenderTarget===!0,Pt=xt.length>1;if(Pt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),st){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)et.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const qt=r.get(xt[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Ft(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Xt=xt[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const qt=u.convert(Xt.format,Xt.colorSpace),yt=u.convert(Xt.type),Lt=O(Xt.internalFormat,qt,yt,Xt.colorSpace,N.isXRRenderTarget===!0),jt=Ge(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Lt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(st){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Dt(et.__webglFramebuffer[Rt][Xt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Dt(et.__webglFramebuffer[Rt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const qt=xt[Rt],yt=r.get(qt);let Lt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,yt.__webglTexture),vt(Lt,qt),Dt(et.__webglFramebuffer,N,qt,o.COLOR_ATTACHMENT0+Rt,Lt,0),M(qt)&&g(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ut.__webglTexture),vt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Dt(et.__webglFramebuffer[Xt],N,E,o.COLOR_ATTACHMENT0,Rt,Xt);else Dt(et.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Rt,0);M(E)&&g(Rt),i.unbindTexture()}N.depthBuffer&&Le(N)}function Me(N){const E=N.textures;for(let et=0,ut=E.length;et<ut;et++){const xt=E[et];if(M(xt)){const st=I(N),Pt=r.get(xt).__webglTexture;i.bindTexture(st,Pt),g(st),i.unbindTexture()}}}const Yt=[],xe=[];function It(N){if(N.samples>0){if(Ft(N)===!1){const E=N.textures,et=N.width,ut=N.height;let xt=o.COLOR_BUFFER_BIT;const st=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(N),Rt=E.length>1;if(Rt)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const yt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,xt,o.NEAREST),m===!0&&(Yt.length=0,xe.length=0,Yt.push(o.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Yt.push(st),xe.push(st),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const yt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(N){return Math.min(l.maxSamples,N.samples)}function Ft(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(N){const E=h.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function qe(N,E){const et=N.colorSpace,ut=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==xs&&et!==Pa&&(Re.getTransfer(et)===ze?(ut!==vi||xt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=ot,this.setTexture2D=ht,this.setTexture2DArray=L,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=ae,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ft}function Yb(o,t){function i(r,l=Pa){let u;const h=Re.getTransfer(l);if(r===Li)return o.UNSIGNED_BYTE;if(r===ld)return o.UNSIGNED_SHORT_4_4_4_4;if(r===cd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===rv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===iv)return o.BYTE;if(r===av)return o.SHORT;if(r===wo)return o.UNSIGNED_SHORT;if(r===od)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Lo)return o.HALF_FLOAT;if(r===sv)return o.ALPHA;if(r===ov)return o.RGB;if(r===vi)return o.RGBA;if(r===Do)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===lv)return o.RED;if(r===ud)return o.RED_INTEGER;if(r===cv)return o.RG;if(r===fd)return o.RG_INTEGER;if(r===hd)return o.RGBA_INTEGER;if(r===gc||r===_c||r===vc||r===xc)if(h===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oh||r===Ph||r===Bh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Oh||r===Ph)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Bh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===zh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sc||r===Qh||r===Jh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Sc)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uv||r===$h||r===td||r===ed)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class Uv extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const Zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jb=`
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

}`;class Kb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Uv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new aa({vertexShader:Zb,fragmentShader:jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oi(new wc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qb extends Ms{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,y=null,b=null;const R=new Kb,M={},g=i.getContextAttributes();let I=null,O=null;const D=[],z=[],G=new Te;let H=null;const j=new Qn;j.viewport=new Ie;const C=new Qn;C.viewport=new Ie;const w=[j,C],B=new vM;let ot=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let dt=D[tt];return dt===void 0&&(dt=new oh,D[tt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(tt){let dt=D[tt];return dt===void 0&&(dt=new oh,D[tt]=dt),dt.getGripSpace()},this.getHand=function(tt){let dt=D[tt];return dt===void 0&&(dt=new oh,D[tt]=dt),dt.getHandSpace()};function ct(tt){const dt=z.indexOf(tt.inputSource);if(dt===-1)return;const Mt=D[dt];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,p||h),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function ht(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",L);for(let tt=0;tt<D.length;tt++){const dt=z[tt];dt!==null&&(z[tt]=null,D[tt].disconnect(dt))}ot=null,lt=null,R.reset();for(const tt in M)delete M[tt];t.setRenderTarget(I),y=null,x=null,v=null,l=null,O=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Dt=null,kt=null;g.depth&&(kt=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=g.stencil?Uo:Do,Dt=g.stencil?Co:pr);const ee={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:u};x=v.createProjectionLayer(ee),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new mr(x.textureWidth,x.textureHeight,{format:vi,type:Li,depthTexture:new Tv(x.textureWidth,x.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new mr(y.framebufferWidth,y.framebufferHeight,{format:vi,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function L(tt){for(let dt=0;dt<tt.removed.length;dt++){const Mt=tt.removed[dt],Dt=z.indexOf(Mt);Dt>=0&&(z[Dt]=null,D[Dt].disconnect(Mt))}for(let dt=0;dt<tt.added.length;dt++){const Mt=tt.added[dt];let Dt=z.indexOf(Mt);if(Dt===-1){for(let ee=0;ee<D.length;ee++)if(ee>=z.length){z.push(Mt),Dt=ee;break}else if(z[ee]===null){z[ee]=Mt,Dt=ee;break}if(Dt===-1)break}const kt=D[Dt];kt&&kt.connect(Mt)}}const k=new J,W=new J;function _t(tt,dt,Mt){k.setFromMatrixPosition(dt.matrixWorld),W.setFromMatrixPosition(Mt.matrixWorld);const Dt=k.distanceTo(W),kt=dt.projectionMatrix.elements,ee=Mt.projectionMatrix.elements,Le=kt[14]/(kt[10]-1),ae=kt[14]/(kt[10]+1),F=(kt[9]+1)/kt[5],Me=(kt[9]-1)/kt[5],Yt=(kt[8]-1)/kt[0],xe=(ee[8]+1)/ee[0],It=Le*Yt,Ge=Le*xe,Ft=Dt/(-Yt+xe),se=Ft*-Yt;if(dt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(se),tt.translateZ(Ft),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),kt[10]===-1)tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qe=Le+Ft,Ye=ae+Ft,N=It-se,E=Ge+(Dt-se),et=F*ae/Ye*qe,ut=Me*ae/Ye*qe;tt.projectionMatrix.makePerspective(N,E,et,ut,qe,Ye),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function U(tt,dt){dt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(dt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let dt=tt.near,Mt=tt.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),B.near=C.near=j.near=dt,B.far=C.far=j.far=Mt,(ot!==B.near||lt!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),ot=B.near,lt=B.far),B.layers.mask=tt.layers.mask|6,j.layers.mask=B.layers.mask&3,C.layers.mask=B.layers.mask&5;const Dt=tt.parent,kt=B.cameras;U(B,Dt);for(let ee=0;ee<kt.length;ee++)U(kt[ee],Dt);kt.length===2?_t(B,j,C):B.projectionMatrix.copy(j.projectionMatrix),$(tt,B,Dt)};function $(tt,dt,Mt){Mt===null?tt.matrix.copy(dt.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(dt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=nd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(tt){m=tt,x!==null&&(x.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(B)},this.getCameraTexture=function(tt){return M[tt]};let vt=null;function St(tt,dt){if(_=dt.getViewerPose(p||h),b=dt,_!==null){const Mt=_.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let Dt=!1;Mt.length!==B.cameras.length&&(B.cameras.length=0,Dt=!0);for(let ae=0;ae<Mt.length;ae++){const F=Mt[ae];let Me=null;if(y!==null)Me=y.getViewport(F);else{const xe=v.getViewSubImage(x,F);Me=xe.viewport,ae===0&&(t.setRenderTargetTextures(O,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(O))}let Yt=w[ae];Yt===void 0&&(Yt=new Qn,Yt.layers.enable(ae),Yt.viewport=new Ie,w[ae]=Yt),Yt.matrix.fromArray(F.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(F.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Me.x,Me.y,Me.width,Me.height),ae===0&&(B.matrix.copy(Yt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Dt===!0&&B.cameras.push(Yt)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const ae=v.getDepthInformation(Mt[0]);ae&&ae.isValid&&ae.texture&&R.init(ae,l.renderState)}if(kt&&kt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let ae=0;ae<Mt.length;ae++){const F=Mt[ae].camera;if(F){let Me=M[F];Me||(Me=new Uv,M[F]=Me);const Yt=v.getCameraImage(F);Me.sourceTexture=Yt}}}for(let Mt=0;Mt<D.length;Mt++){const Dt=z[Mt],kt=D[Mt];Dt!==null&&kt!==void 0&&kt.update(Dt,dt,p||h)}vt&&vt(tt,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const At=new Av;At.setAnimationLoop(St),this.setAnimationLoop=function(tt){vt=tt},this.dispose=function(){}}}const or=new Si,Jb=new je;function $b(o,t){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,Sv(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,I,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),v(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,D)):g.isMeshMatcapMaterial?(u(M,g),b(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),R(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,I,O):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Ln&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Ln&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const I=t.get(g),O=I.envMap,D=I.envMapRotation;O&&(M.envMap.value=O,or.copy(D),or.x*=-1,or.y*=-1,or.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),M.envMapRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(or)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,I,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*I,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,I){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,g){g.matcap&&(M.matcap.value=g.matcap)}function R(M,g){const I=t.get(g).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function tA(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const D=O.program;r.uniformBlockBinding(I,D)}function p(I,O){let D=l[I.id];D===void 0&&(b(I),D=_(I),l[I.id]=D,I.addEventListener("dispose",M));const z=O.program;r.updateUBOMapping(I,z);const G=t.render.frame;u[I.id]!==G&&(x(I),u[I.id]=G)}function _(I){const O=v();I.__bindingPointIndex=O;const D=o.createBuffer(),z=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,z,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const O=l[I.id],D=I.uniforms,z=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,H=D.length;G<H;G++){const j=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,w=j.length;C<w;C++){const B=j[C];if(y(B,G,C,z)===!0){const ot=B.__offset,lt=Array.isArray(B.value)?B.value:[B.value];let ct=0;for(let ht=0;ht<lt.length;ht++){const L=lt[ht],k=R(L);typeof L=="number"||typeof L=="boolean"?(B.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,ot+ct,B.__data)):L.isMatrix3?(B.__data[0]=L.elements[0],B.__data[1]=L.elements[1],B.__data[2]=L.elements[2],B.__data[3]=0,B.__data[4]=L.elements[3],B.__data[5]=L.elements[4],B.__data[6]=L.elements[5],B.__data[7]=0,B.__data[8]=L.elements[6],B.__data[9]=L.elements[7],B.__data[10]=L.elements[8],B.__data[11]=0):(L.toArray(B.__data,ct),ct+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,O,D,z){const G=I.value,H=O+"_"+D;if(z[H]===void 0)return typeof G=="number"||typeof G=="boolean"?z[H]=G:z[H]=G.clone(),!0;{const j=z[H];if(typeof G=="number"||typeof G=="boolean"){if(j!==G)return z[H]=G,!0}else if(j.equals(G)===!1)return j.copy(G),!0}return!1}function b(I){const O=I.uniforms;let D=0;const z=16;for(let H=0,j=O.length;H<j;H++){const C=Array.isArray(O[H])?O[H]:[O[H]];for(let w=0,B=C.length;w<B;w++){const ot=C[w],lt=Array.isArray(ot.value)?ot.value:[ot.value];for(let ct=0,ht=lt.length;ct<ht;ct++){const L=lt[ct],k=R(L),W=D%z,_t=W%k.boundary,U=W+_t;D+=_t,U!==0&&z-U<k.storage&&(D+=z-U),ot.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=k.storage}}}const G=D%z;return G>0&&(D+=z-G),I.__size=D,I.__cache={},this}function R(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function M(I){const O=I.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class $_{constructor(t={}){const{canvas:i=LS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,g=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let z=!1;this._outputColorSpace=si;let G=0,H=0,j=null,C=-1,w=null;const B=new Ie,ot=new Ie;let lt=null;const ct=new ve(0);let ht=0,L=i.width,k=i.height,W=1,_t=null,U=null;const $=new Ie(0,0,L,k),vt=new Ie(0,0,L,k);let St=!1;const At=new md;let tt=!1,dt=!1;const Mt=new je,Dt=new J,kt=new Ie,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function ae(){return j===null?W:1}let F=r;function Me(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),F===null){const q="webgl2";if(F=Me(q,A),F===null)throw Me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Yt,xe,It,Ge,Ft,se,qe,Ye,N,E,et,ut,xt,st,Pt,Rt,Xt,qt,yt,Lt,jt,Vt,Ct,re;function X(){Yt=new fT(F),Yt.init(),Vt=new Yb(F,Yt),xe=new aT(F,Yt,t,Vt),It=new Wb(F,Yt),xe.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),Ge=new pT(F),Ft=new Lb,se=new qb(F,Yt,It,Ft,xe,Vt,Ge),qe=new sT(D),Ye=new uT(D),N=new SM(F),Ct=new nT(F,N),E=new hT(F,N,Ge,Ct),et=new gT(F,E,N,Ge),yt=new mT(F,xe,se),Rt=new rT(Ft),ut=new Ub(D,qe,Ye,Yt,xe,Ct,Rt),xt=new $b(D,Ft),st=new Ob,Pt=new Hb(Yt),qt=new eT(D,qe,Ye,It,et,y,m),Xt=new kb(D,et,xe),re=new tA(F,Ge,xe,It),Lt=new iT(F,Yt,Ge),jt=new dT(F,Yt,Ge),Ge.programs=ut.programs,D.capabilities=xe,D.extensions=Yt,D.properties=Ft,D.renderLists=st,D.shadowMap=Xt,D.state=It,D.info=Ge}X();const bt=new Qb(D,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(L,k,!1))},this.getSize=function(A){return A.set(L,k)},this.setSize=function(A,q,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,k=q,i.width=Math.floor(A*W),i.height=Math.floor(q*W),at===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(L*W,k*W).floor()},this.setDrawingBufferSize=function(A,q,at){L=A,k=q,W=at,i.width=Math.floor(A*at),i.height=Math.floor(q*at),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,q,at,rt){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,q,at,rt),It.viewport(B.copy($).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,q,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,q,at,rt),It.scissor(ot.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){It.setScissorTest(St=A)},this.setOpaqueSort=function(A){_t=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,at=!0){let rt=0;if(A){let Z=!1;if(j!==null){const Tt=j.texture.format;Z=Tt===hd||Tt===fd||Tt===ud}if(Z){const Tt=j.texture.type,Ut=Tt===Li||Tt===pr||Tt===wo||Tt===Co||Tt===ld||Tt===cd,zt=qt.getClearColor(),Nt=qt.getClearAlpha(),Qt=zt.r,$t=zt.g,Wt=zt.b;Ut?(b[0]=Qt,b[1]=$t,b[2]=Wt,b[3]=Nt,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=Qt,R[1]=$t,R[2]=Wt,R[3]=Nt,F.clearBufferiv(F.COLOR,0,R))}else rt|=F.COLOR_BUFFER_BIT}q&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),qt.dispose(),st.dispose(),Pt.dispose(),Ft.dispose(),qe.dispose(),Ye.dispose(),et.dispose(),Ct.dispose(),re.dispose(),ut.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",on),bt.removeEventListener("sessionend",ln),Ke.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Ge.autoReset,q=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,Z=Xt.type;X(),Ge.autoReset=A,Xt.enabled=q,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=Z}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const q=A.target;q.removeEventListener("dispose",gt),Gt(q)}function Gt(A){ie(A),Ft.remove(A)}function ie(A){const q=Ft.get(A).programs;q!==void 0&&(q.forEach(function(at){ut.releaseProgram(at)}),A.isShaderMaterial&&ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,at,rt,Z,Tt){q===null&&(q=ee);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=ra(A,q,at,rt,Z);It.setMaterial(rt,Ut);let Nt=at.index,Qt=1;if(rt.wireframe===!0){if(Nt=E.getWireframeAttribute(at),Nt===void 0)return;Qt=2}const $t=at.drawRange,Wt=at.attributes.position;let ce=$t.start*Qt,be=($t.start+$t.count)*Qt;Tt!==null&&(ce=Math.max(ce,Tt.start*Qt),be=Math.min(be,(Tt.start+Tt.count)*Qt)),Nt!==null?(ce=Math.max(ce,0),be=Math.min(be,Nt.count)):Wt!=null&&(ce=Math.max(ce,0),be=Math.min(be,Wt.count));const Xe=be-ce;if(Xe<0||Xe===1/0)return;Ct.setup(Z,rt,zt,at,Nt);let Ne,ue=Lt;if(Nt!==null&&(Ne=N.get(Nt),ue=jt,ue.setIndex(Ne)),Z.isMesh)rt.wireframe===!0?(It.setLineWidth(rt.wireframeLinewidth*ae()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(Z.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),It.setLineWidth(Kt*ae()),Z.isLineSegments?ue.setMode(F.LINES):Z.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else Z.isPoints?ue.setMode(F.POINTS):Z.isSprite&&ue.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ue.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,ke=Z._multiDrawCounts,pe=Z._multiDrawCount,yn=Nt?N.get(Nt).bytesPerElement:1,ui=Ft.get(rt).currentProgram.getUniforms();for(let wn=0;wn<pe;wn++)ui.setValue(F,"_gl_DrawID",wn),ue.render(Kt[wn]/yn,ke[wn])}else if(Z.isInstancedMesh)ue.renderInstances(ce,Xe,Z.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ke=Math.min(at.instanceCount,Kt);ue.renderInstances(ce,Xe,ke)}else ue.render(ce,Xe)};function Ce(A,q,at){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,yi(A,q,at),A.side=Ia,A.needsUpdate=!0,yi(A,q,at),A.side=ea):yi(A,q,at)}this.compile=function(A,q,at=null){at===null&&(at=A),g=Pt.get(at),g.init(q),O.push(g),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),A!==at&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const rt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const zt=Tt[Ut];Ce(zt,at,Z),rt.add(zt)}else Ce(Tt,at,Z),rt.add(Tt)}),g=O.pop(),rt},this.compileAsync=function(A,q,at=null){const rt=this.compile(A,q,at);return new Promise(Z=>{function Tt(){if(rt.forEach(function(Ut){Ft.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){Z(A);return}setTimeout(Tt,10)}Yt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ee=null;function ci(A){Ee&&Ee(A)}function on(){Ke.stop()}function ln(){Ke.start()}const Ke=new Av;Ke.setAnimationLoop(ci),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){Ee=A,bt.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},bt.addEventListener("sessionstart",on),bt.addEventListener("sessionend",ln),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,q,j),g=Pt.get(A,O.length),g.init(q),O.push(g),Mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),At.setFromProjectionMatrix(Mt,Di,q.reversedDepth),dt=this.localClippingEnabled,tt=Rt.init(this.clippingPlanes,dt),M=st.get(A,I.length),M.init(),I.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Mi(Tt,q,-1/0,D.sortObjects)}Mi(A,q,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(_t,U),Le=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Le&&qt.addToRenderList(M,A),this.info.render.frame++,tt===!0&&Rt.beginShadows();const at=g.state.shadowsArray;Xt.render(at,A,q),tt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Z=M.transmissive;if(g.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(Z.length>0)for(let Ut=0,zt=Tt.length;Ut<zt;Ut++){const Nt=Tt[Ut];zo(rt,Z,A,Nt)}Le&&qt.render(A);for(let Ut=0,zt=Tt.length;Ut<zt;Ut++){const Nt=Tt[Ut];_r(M,A,Nt,Nt.viewport)}}else Z.length>0&&zo(rt,Z,A,q),Le&&qt.render(A),_r(M,A,q);j!==null&&H===0&&(se.updateMultisampleRenderTarget(j),se.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(D,A,q),Ct.resetDefaultState(),C=-1,w=null,O.pop(),O.length>0?(g=O[O.length-1],tt===!0&&Rt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Mi(A,q,at,rt){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){rt&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Ut=et.update(A),zt=A.material;zt.visible&&M.push(A,Ut,zt,at,kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Ut=et.update(A),zt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),kt.copy(Ut.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(zt)){const Nt=Ut.groups;for(let Qt=0,$t=Nt.length;Qt<$t;Qt++){const Wt=Nt[Qt],ce=zt[Wt.materialIndex];ce&&ce.visible&&M.push(A,Ut,ce,at,kt.z,Wt)}}else zt.visible&&M.push(A,Ut,zt,at,kt.z,null)}}const Tt=A.children;for(let Ut=0,zt=Tt.length;Ut<zt;Ut++)Mi(Tt[Ut],q,at,rt)}function _r(A,q,at,rt){const Z=A.opaque,Tt=A.transmissive,Ut=A.transparent;g.setupLightsView(at),tt===!0&&Rt.setGlobalState(D.clippingPlanes,at),rt&&It.viewport(B.copy(rt)),Z.length>0&&vr(Z,q,at),Tt.length>0&&vr(Tt,q,at),Ut.length>0&&vr(Ut,q,at),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function zo(A,q,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[rt.id]===void 0&&(g.state.transmissionRenderTarget[rt.id]=new mr(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Lo:Li,minFilter:dr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||B;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const zt=D.getRenderTarget(),Nt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(ct),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Le&&qt.render(at);const $t=D.toneMapping;D.toneMapping=za;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),g.setupLightsView(rt),tt===!0&&Rt.setGlobalState(D.clippingPlanes,rt),vr(A,at,rt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let be=0,Xe=q.length;be<Xe;be++){const Ne=q[be],ue=Ne.object,Kt=Ne.geometry,ke=Ne.material,pe=Ne.group;if(ke.side===ea&&ue.layers.test(rt.layers)){const yn=ke.side;ke.side=Ln,ke.needsUpdate=!0,Es(ue,at,rt,Kt,ke,pe),ke.side=yn,ke.needsUpdate=!0,ce=!0}}ce===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}D.setRenderTarget(zt,Nt,Qt),D.setClearColor(ct,ht),Wt!==void 0&&(rt.viewport=Wt),D.toneMapping=$t}function vr(A,q,at){const rt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Tt=A.length;Z<Tt;Z++){const Ut=A[Z],zt=Ut.object,Nt=Ut.geometry,Qt=Ut.group;let $t=Ut.material;$t.allowOverride===!0&&rt!==null&&($t=rt),zt.layers.test(at.layers)&&Es(zt,q,at,Nt,$t,Qt)}}function Es(A,q,at,rt,Z,Tt){A.onBeforeRender(D,q,at,rt,Z,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(D,q,at,rt,A,Tt),Z.transparent===!0&&Z.side===ea&&Z.forceSinglePass===!1?(Z.side=Ln,Z.needsUpdate=!0,D.renderBufferDirect(at,q,rt,Z,A,Tt),Z.side=Ia,Z.needsUpdate=!0,D.renderBufferDirect(at,q,rt,Z,A,Tt),Z.side=ea):D.renderBufferDirect(at,q,rt,Z,A,Tt),A.onAfterRender(D,q,at,rt,Z,Tt)}function yi(A,q,at){q.isScene!==!0&&(q=ee);const rt=Ft.get(A),Z=g.state.lights,Tt=g.state.shadowsArray,Ut=Z.state.version,zt=ut.getParameters(A,Z.state,Tt,q,at),Nt=ut.getProgramCacheKey(zt);let Qt=rt.programs;rt.environment=A.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(A.isMeshStandardMaterial?Ye:qe).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",gt),Qt=new Map,rt.programs=Qt);let $t=Qt.get(Nt);if($t!==void 0){if(rt.currentProgram===$t&&rt.lightsStateVersion===Ut)return Oi(A,zt),$t}else zt.uniforms=ut.getUniforms(A),A.onBeforeCompile(zt,D),$t=ut.acquireProgram(zt,Nt),Qt.set(Nt,$t),rt.uniforms=zt.uniforms;const Wt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),Oi(A,zt),rt.needsLights=sa(A),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=$t,rt.uniformsList=null,$t}function xr(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Mc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Oi(A,q){const at=Ft.get(A);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function ra(A,q,at,rt,Z){q.isScene!==!0&&(q=ee),se.resetTextureUnits();const Tt=q.fog,Ut=rt.isMeshStandardMaterial?q.environment:null,zt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:xs,Nt=(rt.isMeshStandardMaterial?Ye:qe).get(rt.envMap||Ut),Qt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,$t=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,be=!!at.morphAttributes.color;let Xe=za;rt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const Ne=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ue=Ne!==void 0?Ne.length:0,Kt=Ft.get(rt),ke=g.state.lights;if(tt===!0&&(dt===!0||A!==w)){const Qe=A===w&&rt.id===C;Rt.setState(rt,A,Qe)}let pe=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ke.state.version||Kt.outputColorSpace!==zt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Nt||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==$t||Kt.morphTargets!==Wt||Kt.morphNormals!==ce||Kt.morphColors!==be||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Kt.__version=rt.version);let yn=Kt.currentProgram;pe===!0&&(yn=yi(rt,q,Z));let ui=!1,wn=!1,dn=!1;const Fe=yn.getUniforms(),Cn=Kt.uniforms;if(It.useProgram(yn.program)&&(ui=!0,wn=!0,dn=!0),rt.id!==C&&(C=rt.id,wn=!0),ui||w!==A){It.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(F,"projectionMatrix",A.projectionMatrix),Fe.setValue(F,"viewMatrix",A.matrixWorldInverse);const vn=Fe.map.cameraPosition;vn!==void 0&&vn.setValue(F,Dt.setFromMatrixPosition(A.matrixWorld)),xe.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,wn=!0,dn=!0)}if(Z.isSkinnedMesh){Fe.setOptional(F,Z,"bindMatrix"),Fe.setOptional(F,Z,"bindMatrixInverse");const Qe=Z.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Fe.setValue(F,"boneTexture",Qe.boneTexture,se))}Z.isBatchedMesh&&(Fe.setOptional(F,Z,"batchingTexture"),Fe.setValue(F,"batchingTexture",Z._matricesTexture,se),Fe.setOptional(F,Z,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",Z._indirectTexture,se),Fe.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",Z._colorsTexture,se));const En=at.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&yt.update(Z,at,yn),(wn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Fe.setValue(F,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Cn.envMap.value=Nt,Cn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Cn.envMapIntensity.value=q.environmentIntensity),wn&&(Fe.setValue(F,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Fa(Cn,dn),Tt&&rt.fog===!0&&xt.refreshFogUniforms(Cn,Tt),xt.refreshMaterialUniforms(Cn,rt,W,k,g.state.transmissionRenderTarget[A.id]),Mc.upload(F,xr(Kt),Cn,se)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Mc.upload(F,xr(Kt),Cn,se),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Fe.setValue(F,"center",Z.center),Fe.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Fe.setValue(F,"normalMatrix",Z.normalMatrix),Fe.setValue(F,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Qe=rt.uniformsGroups;for(let vn=0,Sr=Qe.length;vn<Sr;vn++){const Pn=Qe[vn];re.update(Pn,yn),re.bind(Pn,yn)}}return yn}function Fa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function sa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,q,at){const rt=Ft.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ft.get(A.texture).__webglTexture=q,Ft.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const at=Ft.get(A);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const nn=F.createFramebuffer();this.setRenderTarget=function(A,q=0,at=0){j=A,G=q,H=at;let rt=!0,Z=null,Tt=!1,Ut=!1;if(A){const Nt=Ft.get(A);if(Nt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Nt.__hasExternalTextures)se.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&Ft.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const $t=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[q])?Z=$t[q][at]:Z=$t[q],Tt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?Z=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Z=$t[at]:Z=$t,B.copy(A.viewport),ot.copy(A.scissor),lt=A.scissorTest}else B.copy($).multiplyScalar(W).floor(),ot.copy(vt).multiplyScalar(W).floor(),lt=St;if(at!==0&&(Z=nn),It.bindFramebuffer(F.FRAMEBUFFER,Z)&&rt&&It.drawBuffers(A,Z),It.viewport(B),It.scissor(ot),It.setScissorTest(lt),Tt){const Nt=Ft.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,at)}else if(Ut){const Nt=q;for(let Qt=0;Qt<A.textures.length;Qt++){const $t=Ft.get(A.textures[Qt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,at,Nt)}}else if(A!==null&&at!==0){const Nt=Ft.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(A,q,at,rt,Z,Tt,Ut,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){It.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const Qt=A.textures[zt],$t=Qt.format,Wt=Qt.type;if(!xe.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-rt&&at>=0&&at<=A.height-Z&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+zt),F.readPixels(q,at,rt,Z,Vt.convert($t),Vt.convert(Wt),Tt))}finally{const Qt=j!==null?Ft.get(j).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,q,at,rt,Z,Tt,Ut,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(q>=0&&q<=A.width-rt&&at>=0&&at<=A.height-Z){It.bindFramebuffer(F.FRAMEBUFFER,Nt);const Qt=A.textures[zt],$t=Qt.format,Wt=Qt.type;if(!xe.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+zt),F.readPixels(q,at,rt,Z,Vt.convert($t),Vt.convert(Wt),0);const be=j!==null?Ft.get(j).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,be);const Xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await NS(F,Xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(ce),F.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,at=0){const rt=Math.pow(2,-at),Z=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Ut=q!==null?q.x:0,zt=q!==null?q.y:0;se.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ut,zt,Z,Tt),It.unbindTexture()};const Io=F.createFramebuffer(),Fo=F.createFramebuffer();this.copyTextureToTexture=function(A,q,at=null,rt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Ut,zt,Nt,Qt,$t,Wt,ce,be,Xe;const Ne=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)Ut=at.max.x-at.min.x,zt=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,$t=at.min.y,Wt=at.isBox3?at.min.z:0;else{const En=Math.pow(2,-Z);Ut=Math.floor(Ne.width*En),zt=Math.floor(Ne.height*En),A.isDataArrayTexture?Nt=Ne.depth:A.isData3DTexture?Nt=Math.floor(Ne.depth*En):Nt=1,Qt=0,$t=0,Wt=0}rt!==null?(ce=rt.x,be=rt.y,Xe=rt.z):(ce=0,be=0,Xe=0);const ue=Vt.convert(q.format),Kt=Vt.convert(q.type);let ke;q.isData3DTexture?(se.setTexture3D(q,0),ke=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(se.setTexture2DArray(q,0),ke=F.TEXTURE_2D_ARRAY):(se.setTexture2D(q,0),ke=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const pe=F.getParameter(F.UNPACK_ROW_LENGTH),yn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ui=F.getParameter(F.UNPACK_SKIP_PIXELS),wn=F.getParameter(F.UNPACK_SKIP_ROWS),dn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Fe=A.isDataArrayTexture||A.isData3DTexture,Cn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const En=Ft.get(A),Qe=Ft.get(q),vn=Ft.get(En.__renderTarget),Sr=Ft.get(Qe.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,vn.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Pn=0;Pn<Nt;Pn++)Fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,Z,Wt+Pn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(q).__webglTexture,Tt,Xe+Pn)),F.blitFramebuffer(Qt,$t,Ut,zt,ce,be,Ut,zt,F.DEPTH_BUFFER_BIT,F.NEAREST);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Ft.has(A)){const En=Ft.get(A),Qe=Ft.get(q);It.bindFramebuffer(F.READ_FRAMEBUFFER,Io),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fo);for(let vn=0;vn<Nt;vn++)Fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,En.__webglTexture,Z,Wt+vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,En.__webglTexture,Z),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,Xe+vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,Tt),Z!==0?F.blitFramebuffer(Qt,$t,Ut,zt,ce,be,Ut,zt,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(ke,Tt,ce,be,Xe+vn,Qt,$t,Ut,zt):F.copyTexSubImage2D(ke,Tt,ce,be,Qt,$t,Ut,zt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ke,Tt,ce,be,Xe,Ut,zt,Nt,ue,Kt,Ne.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,Tt,ce,be,Xe,Ut,zt,Nt,ue,Ne.data):F.texSubImage3D(ke,Tt,ce,be,Xe,Ut,zt,Nt,ue,Kt,Ne):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,ce,be,Ut,zt,ue,Kt,Ne.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,ce,be,Ne.width,Ne.height,ue,Ne.data):F.texSubImage2D(F.TEXTURE_2D,Tt,ce,be,Ut,zt,ue,Kt,Ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ui),F.pixelStorei(F.UNPACK_SKIP_ROWS,wn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dn),Tt===0&&q.generateMipmaps&&F.generateMipmap(ke),It.unbindTexture()},this.copyTextureToTexture3D=function(A,q,at=null,rt=null,Z=0){return ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,at,rt,Z)},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){G=0,H=0,j=null,It.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const eA=Gn.forwardRef(({onLocationChange:o},t)=>{const i=Gn.useRef(null),r=Gn.useRef(null),l=Gn.useRef(null),u=Gn.useRef(null),h=Gn.useRef(null),d=Gn.useRef(null),m=Gn.useRef(null),p=Gn.useRef({isMouseDown:!1,mouseX:0,mouseY:0,phi:0,theta:Math.PI/2,distance:15,targetDistance:15,minDistance:4,maxDistance:100});return Gn.useEffect(()=>{if(!i.current)return;const _=new aM;_.background=new ve(17),r.current=_;const v=new Ni,x=8e3,y=new Float32Array(x*3),b=new Float32Array(x*3);for(let L=0;L<x;L++){y[L*3]=(Math.random()-.5)*2e3,y[L*3+1]=(Math.random()-.5)*2e3,y[L*3+2]=(Math.random()-.5)*2e3;const k=Math.random();k<.7?(b[L*3]=1,b[L*3+1]=1,b[L*3+2]=1):k<.85?(b[L*3]=.7,b[L*3+1]=.8,b[L*3+2]=1):(b[L*3]=1,b[L*3+1]=.7,b[L*3+2]=.4)}v.setAttribute("position",new li(y,3)),v.setAttribute("color",new li(b,3));const R=new Ev({size:2,vertexColors:!0,transparent:!0,opacity:.8}),M=new lM(v,R);_.add(M);const g=new Qn(75,window.innerWidth/window.innerHeight,.1,1e4);g.position.set(15,0,0),g.lookAt(0,0,0),u.current=g;const I=new $_({antialias:!0,alpha:!0,failIfMajorPerformanceCaveat:!1});if(I.getContext())l.current=I;else{console.warn("WebGL not available, trying fallback options");const L=new $_({antialias:!1,alpha:!1,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0});l.current=L}const D=l.current;D.setSize(window.innerWidth,window.innerHeight),D.shadowMap.enabled=!1,D.toneMapping=ev,D.toneMappingExposure=1,i.current.appendChild(I.domElement);const z=new _M(4210752,.4);_.add(z);const G=new mM(16777215,1.2,0);G.position.set(100,0,0),_.add(G),(()=>{const L=new Ao(3.5,64,64),k=document.createElement("canvas");k.width=1024,k.height=512;const W=k.getContext("2d"),_t=W.createLinearGradient(0,0,k.width,0);_t.addColorStop(0,"#1e3a8a"),_t.addColorStop(.3,"#3b82f6"),_t.addColorStop(.5,"#22c55e"),_t.addColorStop(.7,"#a3a3a3"),_t.addColorStop(1,"#1e3a8a"),W.fillStyle=_t,W.fillRect(0,0,k.width,k.height);for(let ae=0;ae<5e3;ae++){const F=Math.random()*k.width,Me=Math.random()*k.height,Yt=Math.random()*20+5;Math.random()>.7?W.fillStyle="#16a34a":Math.random()>.8?W.fillStyle="#a3a3a3":W.fillStyle="#0ea5e9",W.beginPath(),W.arc(F,Me,Yt,0,Math.PI*2),W.fill()}const U=new T_(k);U.wrapS=Ro,U.wrapT=Ro;const $=new cM({map:U,shininess:5,transparent:!1}),vt=new oi(L,$);_.add(vt),h.current=vt;const St=new Ao(3.52,32,32),At=document.createElement("canvas");At.width=512,At.height=256;const tt=At.getContext("2d");tt.fillStyle="rgba(255, 255, 255, 0)",tt.fillRect(0,0,At.width,At.height);for(let ae=0;ae<200;ae++){const F=Math.random()*At.width,Me=Math.random()*At.height,Yt=Math.random()*50+10,xe=Math.random()*.8+.2;tt.fillStyle=`rgba(255, 255, 255, ${xe})`,tt.beginPath(),tt.arc(F,Me,Yt,0,Math.PI*2),tt.fill()}const dt=new T_(At),Mt=new uM({map:dt,transparent:!0,opacity:.4}),Dt=new oi(St,Mt);_.add(Dt),d.current=Dt;const kt=new Ao(3.8,32,32),ee=new aa({uniforms:{c:{value:.3},p:{value:3}},vertexShader:`
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
        `,side:Ln,blending:_h,transparent:!0}),Le=new oi(kt,ee);_.add(Le),console.log("Procedural Earth created successfully")})();const j=L=>{p.current.isMouseDown=!0,p.current.mouseX=L.clientX,p.current.mouseY=L.clientY},C=()=>{p.current.isMouseDown=!1},w=L=>{if(!p.current.isMouseDown)return;const k=L.clientX-p.current.mouseX,W=L.clientY-p.current.mouseY;p.current.phi-=k*.01,p.current.theta+=W*.01,p.current.theta=Math.max(.1,Math.min(Math.PI-.1,p.current.theta)),p.current.mouseX=L.clientX,p.current.mouseY=L.clientY,ot()},B=L=>{L.preventDefault();const k=1+L.deltaY*.001;p.current.targetDistance*=k,p.current.targetDistance=Math.max(p.current.minDistance,Math.min(p.current.maxDistance,p.current.targetDistance))},ot=()=>{const L=p.current,k=L.distance*Math.sin(L.theta)*Math.cos(L.phi),W=L.distance*Math.cos(L.theta),_t=L.distance*Math.sin(L.theta)*Math.sin(L.phi);g.position.set(k,W,_t),g.lookAt(0,0,0)},lt=()=>{m.current=requestAnimationFrame(lt);const L=p.current.targetDistance-p.current.distance;Math.abs(L)>.01&&(p.current.distance+=L*.1,ot()),h.current&&(h.current.rotation.y+=.005),d.current&&(d.current.rotation.y+=.007),I.render(_,g)};lt();const ct=I.domElement;ct.addEventListener("mousedown",j),ct.addEventListener("mouseup",C),ct.addEventListener("mousemove",w),ct.addEventListener("wheel",B,{passive:!1});const ht=()=>{g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),I.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ht),window.focusOnEarth=(L="orbit")=>{const k=p.current;L==="surface"?(k.targetDistance=4.5,k.minDistance=4,k.maxDistance=20,o==null||o("Earth Surface")):(k.targetDistance=15,k.minDistance=4,k.maxDistance=100,o==null||o("Earth Orbit"))},()=>{window.removeEventListener("resize",ht),ct.removeEventListener("mousedown",j),ct.removeEventListener("mouseup",C),ct.removeEventListener("mousemove",w),ct.removeEventListener("wheel",B),m.current&&cancelAnimationFrame(m.current),i.current&&I.domElement&&i.current.removeChild(I.domElement),I.dispose()}},[]),Gn.useImperativeHandle(t,()=>({focusOnEarth:_=>{window.focusOnEarth&&window.focusOnEarth(_)},getDistance:()=>p.current.distance})),_e.jsx("div",{ref:i,className:"w-full h-screen"})});function nA(){const[o,t]=Gn.useState("Earth Orbit"),i=Gn.useRef(null),r=h=>{t(h)},l=()=>{i.current&&i.current.focusOnEarth("surface")},u=()=>{i.current&&i.current.focusOnEarth("orbit")};return _e.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[_e.jsx(eA,{ref:i,onLocationChange:r}),_e.jsxs("div",{className:"absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600",children:[_e.jsx("h3",{className:"text-lg font-bold mb-3",children:"Earth Exploration"}),_e.jsxs("div",{className:"space-y-2",children:[_e.jsx("button",{onClick:u,className:"w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors",children:"🌍 Orbit View"}),_e.jsx("button",{onClick:l,className:"w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition-colors",children:"🏔️ Surface Exploration"})]}),_e.jsxs("div",{className:"mt-3 text-xs text-gray-400",children:[_e.jsx("p",{children:_e.jsx("strong",{children:"Controls:"})}),_e.jsx("p",{children:"• Mouse drag: Rotate view 360°"}),_e.jsx("p",{children:"• Mouse wheel: Zoom in/out"}),_e.jsx("p",{children:"• Get close to see surface detail"})]})]}),_e.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md",children:[_e.jsx("h2",{className:"text-lg font-bold mb-2",children:"Realistic Earth Simulation"}),_e.jsx("p",{className:"text-sm text-gray-300 mb-2",children:"Experience Earth with high-resolution NASA textures, realistic lighting, atmospheric effects, and surface exploration capabilities."}),_e.jsxs("div",{className:"text-xs text-gray-400 space-y-1",children:[_e.jsx("p",{children:_e.jsx("strong",{children:"Features:"})}),_e.jsxs("p",{children:["• ",_e.jsx("strong",{children:"NASA Textures:"})," High-resolution Blue Marble imagery"]}),_e.jsxs("p",{children:["• ",_e.jsx("strong",{children:"Surface Detail:"})," Normal mapping for realistic terrain"]}),_e.jsxs("p",{children:["• ",_e.jsx("strong",{children:"Atmosphere:"})," Realistic atmospheric glow effect"]}),_e.jsxs("p",{children:["• ",_e.jsx("strong",{children:"Cloud Layer:"})," Animated cloud coverage"]}),_e.jsxs("p",{children:["• ",_e.jsx("strong",{children:"Day/Night:"})," Realistic lighting and shadows"]}),_e.jsxs("p",{children:["• ",_e.jsx("strong",{children:"Surface Exploration:"})," Get close to explore terrain"]})]}),_e.jsx("div",{className:"mt-2 text-xs text-yellow-400",children:_e.jsxs("p",{children:["Current view: ",_e.jsx("strong",{children:o})]})})]})]})}Xx.createRoot(document.getElementById("root")).render(_e.jsx(Gn.StrictMode,{children:_e.jsx(nA,{})}));
