function cp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kc={exports:{}},Ri={},qc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),fp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),lu=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tf=Object.assign,nf={};function qn(e,t,n){this.props=e,this.context=t,this.refs=nf,this.updater=n||ef}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rf(){}rf.prototype=qn.prototype;function $l(e,t,n){this.props=e,this.context=t,this.refs=nf,this.updater=n||ef}var Ql=$l.prototype=new rf;Ql.constructor=$l;tf(Ql,qn.prototype);Ql.isPureReactComponent=!0;var su=Array.isArray,af=Object.prototype.hasOwnProperty,Kl={current:null},of={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)af.call(t,r)&&!of.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Qr,type:e,key:i,ref:o,props:a,_owner:Kl.current}}function _p(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function Sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uu=/\/+/g;function ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sp(""+e.key):t.toString(36)}function za(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qr:case fp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ro(o,0):r,su(a)?(n="",e!=null&&(n=e.replace(uu,"$&/")+"/"),za(a,t,n,"",function(u){return u})):a!=null&&(ql(a)&&(a=_p(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(uu,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",su(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ro(i,l);o+=za(i,t,n,s,a)}else if(s=kp(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ro(i,l++),o+=za(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function da(e,t,n){if(e==null)return e;var r=[],a=0;return za(e,r,"","",function(i){return t.call(n,i,a++)}),r}function xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Oa={transition:null},Cp={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Kl};D.Children={map:da,forEach:function(e,t,n){da(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return da(e,function(){t++}),t},toArray:function(e){return da(e,function(t){return t})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=qn;D.Fragment=dp;D.Profiler=pp;D.PureComponent=$l;D.StrictMode=mp;D.Suspense=yp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tf({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Kl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)af.call(t,s)&&!of.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Qr,type:e.type,key:a,ref:i,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hp,_context:e},e.Consumer=e};D.createElement=lf;D.createFactory=function(e){var t=lf.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:gp,render:e}};D.isValidElement=ql;D.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:xp}};D.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Oa.transition;Oa.transition={};try{e()}finally{Oa.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return ye.current.useCallback(e,t)};D.useContext=function(e){return ye.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};D.useEffect=function(e,t){return ye.current.useEffect(e,t)};D.useId=function(){return ye.current.useId()};D.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ye.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};D.useRef=function(e){return ye.current.useRef(e)};D.useState=function(e){return ye.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ye.current.useTransition()};D.version="18.2.0";qc.exports=D;var x=qc.exports;const Ii=Qc(x),Pp=cp({__proto__:null,default:Ii},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=x,Ep=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),Rp=Object.prototype.hasOwnProperty,Ip=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function sf(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Rp.call(t,r)&&!Lp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ep,type:e,key:i,ref:o,props:a,_owner:Ip.current}}Ri.Fragment=Np;Ri.jsx=sf;Ri.jsxs=sf;Kc.exports=Ri;var b=Kc.exports,Oo={},uf={exports:{}},Re={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var F=N.length;N.push(T);e:for(;0<F;){var K=F-1>>>1,oe=N[K];if(0<a(oe,T))N[K]=T,N[F]=oe,F=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],F=N.pop();if(F!==T){N[0]=F;e:for(var K=0,oe=N.length,ca=oe>>>1;K<ca;){var $t=2*(K+1)-1,no=N[$t],Qt=$t+1,fa=N[Qt];if(0>a(no,F))Qt<oe&&0>a(fa,no)?(N[K]=fa,N[Qt]=F,K=Qt):(N[K]=no,N[$t]=F,K=$t);else if(Qt<oe&&0>a(fa,F))N[K]=fa,N[Qt]=F,K=Qt;else break e}}return T}function a(N,T){var F=N.sortIndex-T.sortIndex;return F!==0?F:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,m=null,h=3,v=!1,y=!1,g=!1,k=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=N)r(u),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(u)}}function w(N){if(g=!1,p(N),!y)if(n(s)!==null)y=!0,eo(_);else{var T=n(u);T!==null&&to(w,T.startTime-N)}}function _(N,T){y=!1,g&&(g=!1,d(I),I=-1),v=!0;var F=h;try{for(p(T),m=n(s);m!==null&&(!(m.expirationTime>T)||N&&!Ce());){var K=m.callback;if(typeof K=="function"){m.callback=null,h=m.priorityLevel;var oe=K(m.expirationTime<=T);T=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(s)&&r(s),p(T)}else r(s);m=n(s)}if(m!==null)var ca=!0;else{var $t=n(u);$t!==null&&to(w,$t.startTime-T),ca=!1}return ca}finally{m=null,h=F,v=!1}}var C=!1,P=null,I=-1,O=5,j=-1;function Ce(){return!(e.unstable_now()-j<O)}function L(){if(P!==null){var N=e.unstable_now();j=N;var T=!0;try{T=P(!0,N)}finally{T?ee():(C=!1,P=null)}}else C=!1}var ee;if(typeof c=="function")ee=function(){c(L)};else if(typeof MessageChannel<"u"){var Jt=new MessageChannel,up=Jt.port2;Jt.port1.onmessage=L,ee=function(){up.postMessage(null)}}else ee=function(){k(L,0)};function eo(N){P=N,C||(C=!0,ee())}function to(N,T){I=k(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,eo(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var F=h;h=T;try{return N()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=h;h=N;try{return T()}finally{h=F}},e.unstable_scheduleCallback=function(N,T,F){var K=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?K+F:K):F=K,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=F+oe,N={id:f++,callback:T,priorityLevel:N,startTime:F,expirationTime:oe,sortIndex:-1},F>K?(N.sortIndex=F,t(u,N),n(s)===null&&N===n(u)&&(g?(d(I),I=-1):g=!0,to(w,F-K))):(N.sortIndex=oe,t(s,N),y||v||(y=!0,eo(_))),N},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(N){var T=h;return function(){var F=h;h=T;try{return N.apply(this,arguments)}finally{h=F}}}})(ff);cf.exports=ff;var Tp=cf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=x,Ne=Tp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mf=new Set,Er={};function vn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Er[e]=t,e=0;e<t.length;e++)mf.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},fu={};function Fp(e){return Wo.call(fu,e)?!0:Wo.call(cu,e)?!1:jp.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function Mp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,r){if(t===null||typeof t>"u"||Mp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var es=/[\-:]([a-z])/g;function ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(es,ts);fe[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(es,ts);fe[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(es,ts);fe[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,t,n,r){var a=fe.hasOwnProperty(t)?fe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,a,r)&&(n=null),r||a===null?Fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),Bo=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),as=Symbol.for("react.forward_ref"),Go=Symbol.for("react.suspense"),Vo=Symbol.for("react.suspense_list"),is=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),vf=Symbol.for("react.offscreen"),du=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ao;function dr(e){if(ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ao=t&&t[1]||""}return`
`+ao+e}var io=!1;function oo(e,t){if(!e||io)return"";io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function zp(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=oo(e.type,!1),e;case 11:return e=oo(e.type.render,!1),e;case 1:return e=oo(e.type,!0),e;default:return""}}function Yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case _n:return"Portal";case Bo:return"Profiler";case rs:return"StrictMode";case Go:return"Suspense";case Vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hf:return(e.displayName||"Context")+".Consumer";case pf:return(e._context.displayName||"Context")+".Provider";case as:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case is:return t=e.displayName||null,t!==null?t:Yo(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Yo(e(t))}catch{}}return null}function Op(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yo(t);case 8:return t===rs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wp(e){var t=gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pa(e){e._valueTracker||(e._valueTracker=Wp(e))}function yf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uo(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wf(e,t){t=t.checked,t!=null&&ns(e,"checked",t,!1)}function Xo(e,t){wf(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zo(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zo(e,t,n){(t!=="number"||Ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(mr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function bf(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,_f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Gp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(e,t){if(t){if(Gp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,zn=null,On=null;function gu(e){if(e=ea(e)){if(typeof qo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Mi(t),qo(e.stateNode,e.type,t))}}function Cf(e){zn?On?On.push(e):On=[e]:zn=e}function Pf(){if(zn){var e=zn,t=On;if(On=zn=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function Af(e,t){return e(t)}function Ef(){}var lo=!1;function Nf(e,t,n){if(lo)return e(t,n);lo=!0;try{return Af(e,t,n)}finally{lo=!1,(zn!==null||On!==null)&&(Ef(),Pf())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var el=!1;if(ct)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){el=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{el=!1}function Vp(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var yr=!1,qa=null,ei=!1,tl=null,Yp={onError:function(e){yr=!0,qa=e}};function Up(e,t,n,r,a,i,o,l,s){yr=!1,qa=null,Vp.apply(Yp,arguments)}function Xp(e,t,n,r,a,i,o,l,s){if(Up.apply(this,arguments),yr){if(yr){var u=qa;yr=!1,qa=null}else throw Error(S(198));ei||(ei=!0,tl=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yu(e){if(gn(e)!==e)throw Error(S(188))}function Zp(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return yu(a),e;if(i===r)return yu(a),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function If(e){return e=Zp(e),e!==null?Lf(e):null}function Lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lf(e);if(t!==null)return t;e=e.sibling}return null}var Tf=Ne.unstable_scheduleCallback,wu=Ne.unstable_cancelCallback,Hp=Ne.unstable_shouldYield,Jp=Ne.unstable_requestPaint,q=Ne.unstable_now,$p=Ne.unstable_getCurrentPriorityLevel,ls=Ne.unstable_ImmediatePriority,jf=Ne.unstable_UserBlockingPriority,ti=Ne.unstable_NormalPriority,Qp=Ne.unstable_LowPriority,Ff=Ne.unstable_IdlePriority,Li=null,nt=null;function Kp(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Li,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:th,qp=Math.log,eh=Math.LN2;function th(e){return e>>>=0,e===0?32:31-(qp(e)/eh|0)|0}var va=64,ga=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=pr(l):(i&=o,i!==0&&(r=pr(i)))}else o=n&~a,o!==0?r=pr(o):i!==0&&(r=pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),a=1<<n,r|=e[n],t&=~a;return r}function nh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Xe(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=nh(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mf(){var e=va;return va<<=1,!(va&4194240)&&(va=64),e}function so(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function ah(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Xe(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var W=0;function Df(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zf,us,Of,Wf,Bf,rl=!1,ya=[],It=null,Lt=null,Tt=null,Ir=new Map,Lr=new Map,xt=[],ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function ir(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ea(t),t!==null&&us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function oh(e,t,n,r,a){switch(t){case"focusin":return It=ir(It,e,t,n,r,a),!0;case"dragenter":return Lt=ir(Lt,e,t,n,r,a),!0;case"mouseover":return Tt=ir(Tt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Ir.set(i,ir(Ir.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Lr.set(i,ir(Lr.get(i)||null,e,t,n,r,a)),!0}return!1}function Gf(e){var t=tn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Bf(e.priority,function(){Of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ko=r,n.target.dispatchEvent(r),Ko=null}else return t=ea(n),t!==null&&us(t),e.blockedOn=n,!1;t.shift()}return!0}function ku(e,t,n){Wa(e)&&n.delete(t)}function lh(){rl=!1,It!==null&&Wa(It)&&(It=null),Lt!==null&&Wa(Lt)&&(Lt=null),Tt!==null&&Wa(Tt)&&(Tt=null),Ir.forEach(ku),Lr.forEach(ku)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,lh)))}function Tr(e){function t(a){return or(a,e)}if(0<ya.length){or(ya[0],e);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&or(It,e),Lt!==null&&or(Lt,e),Tt!==null&&or(Tt,e),Ir.forEach(t),Lr.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&xt.shift()}var Wn=gt.ReactCurrentBatchConfig,ri=!0;function sh(e,t,n,r){var a=W,i=Wn.transition;Wn.transition=null;try{W=1,cs(e,t,n,r)}finally{W=a,Wn.transition=i}}function uh(e,t,n,r){var a=W,i=Wn.transition;Wn.transition=null;try{W=4,cs(e,t,n,r)}finally{W=a,Wn.transition=i}}function cs(e,t,n,r){if(ri){var a=al(e,t,n,r);if(a===null)wo(e,t,r,ai,n),bu(e,r);else if(oh(a,e,t,n,r))r.stopPropagation();else if(bu(e,r),t&4&&-1<ih.indexOf(e)){for(;a!==null;){var i=ea(a);if(i!==null&&zf(i),i=al(e,t,n,r),i===null&&wo(e,t,r,ai,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else wo(e,t,r,null,n)}}var ai=null;function al(e,t,n,r){if(ai=null,e=os(r),e=tn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ai=e,null}function Vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($p()){case ls:return 1;case jf:return 4;case ti:case Qp:return 16;case Ff:return 536870912;default:return 16}default:return 16}}var Pt=null,fs=null,Ba=null;function Yf(){if(Ba)return Ba;var e,t=fs,n=t.length,r,a="value"in Pt?Pt.value:Pt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Ba=a.slice(e,1<r?1-r:void 0)}function Ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function _u(){return!1}function Ie(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wa:_u,this.isPropagationStopped=_u,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Ie(er),qr=J({},er,{view:0,detail:0}),ch=Ie(qr),uo,co,lr,Ti=J({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(uo=e.screenX-lr.screenX,co=e.screenY-lr.screenY):co=uo=0,lr=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:co}}),Su=Ie(Ti),fh=J({},Ti,{dataTransfer:0}),dh=Ie(fh),mh=J({},qr,{relatedTarget:0}),fo=Ie(mh),ph=J({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),hh=Ie(ph),vh=J({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gh=Ie(vh),yh=J({},er,{data:0}),xu=Ie(yh),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _h(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kh[e])?!!t[e]:!1}function ms(){return _h}var Sh=J({},qr,{key:function(e){if(e.key){var t=wh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?Ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xh=Ie(Sh),Ch=J({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Ie(Ch),Ph=J({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),Ah=Ie(Ph),Eh=J({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nh=Ie(Eh),Rh=J({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ih=Ie(Rh),Lh=[9,13,27,32],ps=ct&&"CompositionEvent"in window,wr=null;ct&&"documentMode"in document&&(wr=document.documentMode);var Th=ct&&"TextEvent"in window&&!wr,Uf=ct&&(!ps||wr&&8<wr&&11>=wr),Pu=String.fromCharCode(32),Au=!1;function Xf(e,t){switch(e){case"keyup":return Lh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function jh(e,t){switch(e){case"compositionend":return Zf(t);case"keypress":return t.which!==32?null:(Au=!0,Pu);case"textInput":return e=t.data,e===Pu&&Au?null:e;default:return null}}function Fh(e,t){if(xn)return e==="compositionend"||!ps&&Xf(e,t)?(e=Yf(),Ba=fs=Pt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uf&&t.locale!=="ko"?null:t.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mh[e.type]:t==="textarea"}function Hf(e,t,n,r){Cf(r),t=ii(t,"onChange"),0<t.length&&(n=new ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,jr=null;function Dh(e){id(e,0)}function ji(e){var t=An(e);if(yf(t))return e}function zh(e,t){if(e==="change")return t}var Jf=!1;if(ct){var mo;if(ct){var po="oninput"in document;if(!po){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),po=typeof Nu.oninput=="function"}mo=po}else mo=!1;Jf=mo&&(!document.documentMode||9<document.documentMode)}function Ru(){br&&(br.detachEvent("onpropertychange",$f),jr=br=null)}function $f(e){if(e.propertyName==="value"&&ji(jr)){var t=[];Hf(t,jr,e,os(e)),Nf(Dh,t)}}function Oh(e,t,n){e==="focusin"?(Ru(),br=t,jr=n,br.attachEvent("onpropertychange",$f)):e==="focusout"&&Ru()}function Wh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(jr)}function Bh(e,t){if(e==="click")return ji(t)}function Gh(e,t){if(e==="input"||e==="change")return ji(t)}function Vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Vh;function Fr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Wo.call(t,a)||!He(e[a],t[a]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function Qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(){for(var e=window,t=Ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ka(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yh(e){var t=Kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qf(n.ownerDocument.documentElement,n)){if(r!==null&&hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Lu(n,i);var o=Lu(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uh=ct&&"documentMode"in document&&11>=document.documentMode,Cn=null,il=null,kr=null,ol=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ol||Cn==null||Cn!==Ka(r)||(r=Cn,"selectionStart"in r&&hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Fr(kr,r)||(kr=r,r=ii(il,"onSelect"),0<r.length&&(t=new ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},ho={},qf={};ct&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Fi(e){if(ho[e])return ho[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return ho[e]=t[n];return e}var ed=Fi("animationend"),td=Fi("animationiteration"),nd=Fi("animationstart"),rd=Fi("transitionend"),ad=new Map,ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){ad.set(e,t),vn(t,[e])}for(var vo=0;vo<ju.length;vo++){var go=ju[vo],Xh=go.toLowerCase(),Zh=go[0].toUpperCase()+go.slice(1);Ut(Xh,"on"+Zh)}Ut(ed,"onAnimationEnd");Ut(td,"onAnimationIteration");Ut(nd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(rd,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xp(r,t,void 0,e),e.currentTarget=null}function id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Fu(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Fu(a,l,u),i=s}}}if(ei)throw e=tl,ei=!1,tl=null,e}function G(e,t){var n=t[fl];n===void 0&&(n=t[fl]=new Set);var r=e+"__bubble";n.has(r)||(od(t,e,2,!1),n.add(r))}function yo(e,t,n){var r=0;t&&(r|=4),od(n,e,r,t)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[ka]){e[ka]=!0,mf.forEach(function(n){n!=="selectionchange"&&(Hh.has(n)||yo(n,!1,e),yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ka]||(t[ka]=!0,yo("selectionchange",!1,t))}}function od(e,t,n,r){switch(Vf(t)){case 1:var a=sh;break;case 4:a=uh;break;default:a=cs}n=a.bind(null,t,n,e),a=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wo(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=tn(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Nf(function(){var u=i,f=os(n),m=[];e:{var h=ad.get(e);if(h!==void 0){var v=ds,y=e;switch(e){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":v=xh;break;case"focusin":y="focus",v=fo;break;case"focusout":y="blur",v=fo;break;case"beforeblur":case"afterblur":v=fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=dh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ah;break;case ed:case td:case nd:v=hh;break;case rd:v=Nh;break;case"scroll":v=ch;break;case"wheel":v=Ih;break;case"copy":case"cut":case"paste":v=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cu}var g=(t&4)!==0,k=!g&&e==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=Rr(c,d),w!=null&&g.push(Dr(c,w,p)))),k)break;c=c.return}0<g.length&&(h=new v(h,y,null,n,f),m.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Ko&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[ft]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?tn(y):null,y!==null&&(k=gn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(g=Su,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Cu,w="onPointerLeave",d="onPointerEnter",c="pointer"),k=v==null?h:An(v),p=y==null?h:An(y),h=new g(w,c+"leave",v,n,f),h.target=k,h.relatedTarget=p,w=null,tn(f)===u&&(g=new g(d,c+"enter",y,n,f),g.target=p,g.relatedTarget=k,w=g),k=w,v&&y)t:{for(g=v,d=y,c=0,p=g;p;p=bn(p))c++;for(p=0,w=d;w;w=bn(w))p++;for(;0<c-p;)g=bn(g),c--;for(;0<p-c;)d=bn(d),p--;for(;c--;){if(g===d||d!==null&&g===d.alternate)break t;g=bn(g),d=bn(d)}g=null}else g=null;v!==null&&Mu(m,h,v,g,!1),y!==null&&k!==null&&Mu(m,k,y,g,!0)}}e:{if(h=u?An(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var _=zh;else if(Eu(h))if(Jf)_=Gh;else{_=Wh;var C=Oh}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Bh);if(_&&(_=_(e,u))){Hf(m,_,n,f);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Zo(h,"number",h.value)}switch(C=u?An(u):window,e){case"focusin":(Eu(C)||C.contentEditable==="true")&&(Cn=C,il=u,kr=null);break;case"focusout":kr=il=Cn=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,Tu(m,n,f);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":Tu(m,n,f)}var P;if(ps)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else xn?Xf(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Uf&&n.locale!=="ko"&&(xn||I!=="onCompositionStart"?I==="onCompositionEnd"&&xn&&(P=Yf()):(Pt=f,fs="value"in Pt?Pt.value:Pt.textContent,xn=!0)),C=ii(u,I),0<C.length&&(I=new xu(I,e,null,n,f),m.push({event:I,listeners:C}),P?I.data=P:(P=Zf(n),P!==null&&(I.data=P)))),(P=Th?jh(e,n):Fh(e,n))&&(u=ii(u,"onBeforeInput"),0<u.length&&(f=new xu("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=P))}id(m,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Rr(e,n),i!=null&&r.unshift(Dr(e,i,a)),i=Rr(e,t),i!=null&&r.push(Dr(e,i,a))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Rr(n,i),s!=null&&o.unshift(Dr(n,s,l))):a||(s=Rr(n,i),s!=null&&o.push(Dr(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace($h,"")}function _a(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(S(425))}function oi(){}var ll=null,sl=null;function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cl=typeof setTimeout=="function"?setTimeout:void 0,Qh=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,Kh=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(qh)}:cl;function qh(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Tr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),et="__reactFiber$"+tr,zr="__reactProps$"+tr,ft="__reactContainer$"+tr,fl="__reactEvents$"+tr,e1="__reactListeners$"+tr,t1="__reactHandles$"+tr;function tn(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ou(e);e!==null;){if(n=e[et])return n;e=Ou(e)}return t}e=n,n=e.parentNode}return null}function ea(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Mi(e){return e[zr]||null}var dl=[],En=-1;function Xt(e){return{current:e}}function Y(e){0>En||(e.current=dl[En],dl[En]=null,En--)}function B(e,t){En++,dl[En]=e.current,e.current=t}var Bt={},he=Xt(Bt),_e=Xt(!1),un=Bt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Se(e){return e=e.childContextTypes,e!=null}function li(){Y(_e),Y(he)}function Wu(e,t,n){if(he.current!==Bt)throw Error(S(168));B(he,t),B(_e,n)}function ld(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,Op(e)||"Unknown",a));return J({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,un=he.current,B(he,e),B(_e,_e.current),!0}function Bu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=ld(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,Y(_e),Y(he),B(he,e)):Y(_e),B(_e,n)}var ot=null,Di=!1,ko=!1;function sd(e){ot===null?ot=[e]:ot.push(e)}function n1(e){Di=!0,sd(e)}function Zt(){if(!ko&&ot!==null){ko=!0;var e=0,t=W;try{var n=ot;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Di=!1}catch(a){throw ot!==null&&(ot=ot.slice(e+1)),Tf(ls,Zt),a}finally{W=t,ko=!1}}return null}var Nn=[],Rn=0,ui=null,ci=0,Te=[],je=0,cn=null,lt=1,st="";function qt(e,t){Nn[Rn++]=ci,Nn[Rn++]=ui,ui=e,ci=t}function ud(e,t,n){Te[je++]=lt,Te[je++]=st,Te[je++]=cn,cn=e;var r=lt;e=st;var a=32-Xe(r)-1;r&=~(1<<a),n+=1;var i=32-Xe(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,lt=1<<32-Xe(t)+a|n<<a|r,st=i+e}else lt=1<<i|n<<a|r,st=e}function vs(e){e.return!==null&&(qt(e,1),ud(e,1,0))}function gs(e){for(;e===ui;)ui=Nn[--Rn],Nn[Rn]=null,ci=Nn[--Rn],Nn[Rn]=null;for(;e===cn;)cn=Te[--je],Te[je]=null,st=Te[--je],Te[je]=null,lt=Te[--je],Te[je]=null}var Ee=null,Ae=null,X=!1,Ye=null;function cd(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Ae=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:lt,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Ae=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(X){var t=Ae;if(t){var n=t;if(!Gu(e,t)){if(ml(e))throw Error(S(418));t=jt(n.nextSibling);var r=Ee;t&&Gu(e,t)?cd(r,n):(e.flags=e.flags&-4097|2,X=!1,Ee=e)}}else{if(ml(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,Ee=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Sa(e){if(e!==Ee)return!1;if(!X)return Vu(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=Ae)){if(ml(e))throw fd(),Error(S(418));for(;t;)cd(e,t),t=jt(t.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Ee?jt(e.stateNode.nextSibling):null;return!0}function fd(){for(var e=Ae;e;)e=jt(e.nextSibling)}function Xn(){Ae=Ee=null,X=!1}function ys(e){Ye===null?Ye=[e]:Ye.push(e)}var r1=gt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var fi=Xt(null),di=null,In=null,ws=null;function bs(){ws=In=di=null}function ks(e){var t=fi.current;Y(fi),e._currentValue=t}function hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){di=e,ws=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(di===null)throw Error(S(308));In=e,di.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var nn=null;function _s(e){nn===null?nn=[e]:nn.push(e)}function dd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,_s(t)):(n.next=a.next,a.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,dt(e,n)}return a=r.interleaved,a===null?(t.next=t,_s(r)):(t.next=a.next,a.next=t),r.interleaved=t,dt(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,r){var a=e.updateQueue;St=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var m=a.baseState;o=0,f=u=s=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,g=l;switch(h=t,v=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){m=y.call(v,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,h=typeof y=="function"?y.call(v,m,h):y,h==null)break e;m=J({},m,h);break e;case 2:St=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=m):f=f.next=v,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(s=m),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);dn|=o,e.lanes=o,e.memoizedState=m}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var pd=new df.Component().refs;function vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),a=Dt(e),i=ut(r,a);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,a),t!==null&&(Ze(t,e,a,r),Va(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),a=Dt(e),i=ut(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,a),t!==null&&(Ze(t,e,a,r),Va(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Dt(e),a=ut(n,r);a.tag=2,t!=null&&(a.callback=t),t=Ft(e,a,r),t!==null&&(Ze(t,e,r,n),Va(t,e,r))}};function Xu(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(a,i):!0}function hd(e,t,n){var r=!1,a=Bt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(a=Se(t)?un:he.current,r=t.contextTypes,i=(r=r!=null)?Un(e,a):Bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function gl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=pd,Ss(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=ze(i):(i=Se(t)?un:he.current,a.context=Un(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(vl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&zi.enqueueReplaceState(a,a.state,null),mi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===pd&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function vd(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function a(d,c){return d=zt(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,p,w){return c===null||c.tag!==6?(c=Eo(p,d.mode,w),c.return=d,c):(c=a(c,p),c.return=d,c)}function s(d,c,p,w){var _=p.type;return _===Sn?f(d,c,p.props.children,w,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===_t&&Hu(_)===c.type)?(w=a(c,p.props),w.ref=sr(d,c,p),w.return=d,w):(w=Ja(p.type,p.key,p.props,null,d.mode,w),w.ref=sr(d,c,p),w.return=d,w)}function u(d,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=No(p,d.mode,w),c.return=d,c):(c=a(c,p.children||[]),c.return=d,c)}function f(d,c,p,w,_){return c===null||c.tag!==7?(c=sn(p,d.mode,w,_),c.return=d,c):(c=a(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Eo(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ma:return p=Ja(c.type,c.key,c.props,null,d.mode,p),p.ref=sr(d,null,c),p.return=d,p;case _n:return c=No(c,d.mode,p),c.return=d,c;case _t:var w=c._init;return m(d,w(c._payload),p)}if(mr(c)||rr(c))return c=sn(c,d.mode,p,null),c.return=d,c;xa(d,c)}return null}function h(d,c,p,w){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:l(d,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ma:return p.key===_?s(d,c,p,w):null;case _n:return p.key===_?u(d,c,p,w):null;case _t:return _=p._init,h(d,c,_(p._payload),w)}if(mr(p)||rr(p))return _!==null?null:f(d,c,p,w,null);xa(d,p)}return null}function v(d,c,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,l(c,d,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ma:return d=d.get(w.key===null?p:w.key)||null,s(c,d,w,_);case _n:return d=d.get(w.key===null?p:w.key)||null,u(c,d,w,_);case _t:var C=w._init;return v(d,c,p,C(w._payload),_)}if(mr(w)||rr(w))return d=d.get(p)||null,f(c,d,w,_,null);xa(c,w)}return null}function y(d,c,p,w){for(var _=null,C=null,P=c,I=c=0,O=null;P!==null&&I<p.length;I++){P.index>I?(O=P,P=null):O=P.sibling;var j=h(d,P,p[I],w);if(j===null){P===null&&(P=O);break}e&&P&&j.alternate===null&&t(d,P),c=i(j,c,I),C===null?_=j:C.sibling=j,C=j,P=O}if(I===p.length)return n(d,P),X&&qt(d,I),_;if(P===null){for(;I<p.length;I++)P=m(d,p[I],w),P!==null&&(c=i(P,c,I),C===null?_=P:C.sibling=P,C=P);return X&&qt(d,I),_}for(P=r(d,P);I<p.length;I++)O=v(P,d,I,p[I],w),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?I:O.key),c=i(O,c,I),C===null?_=O:C.sibling=O,C=O);return e&&P.forEach(function(Ce){return t(d,Ce)}),X&&qt(d,I),_}function g(d,c,p,w){var _=rr(p);if(typeof _!="function")throw Error(S(150));if(p=_.call(p),p==null)throw Error(S(151));for(var C=_=null,P=c,I=c=0,O=null,j=p.next();P!==null&&!j.done;I++,j=p.next()){P.index>I?(O=P,P=null):O=P.sibling;var Ce=h(d,P,j.value,w);if(Ce===null){P===null&&(P=O);break}e&&P&&Ce.alternate===null&&t(d,P),c=i(Ce,c,I),C===null?_=Ce:C.sibling=Ce,C=Ce,P=O}if(j.done)return n(d,P),X&&qt(d,I),_;if(P===null){for(;!j.done;I++,j=p.next())j=m(d,j.value,w),j!==null&&(c=i(j,c,I),C===null?_=j:C.sibling=j,C=j);return X&&qt(d,I),_}for(P=r(d,P);!j.done;I++,j=p.next())j=v(P,d,I,j.value,w),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?I:j.key),c=i(j,c,I),C===null?_=j:C.sibling=j,C=j);return e&&P.forEach(function(L){return t(d,L)}),X&&qt(d,I),_}function k(d,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ma:e:{for(var _=p.key,C=c;C!==null;){if(C.key===_){if(_=p.type,_===Sn){if(C.tag===7){n(d,C.sibling),c=a(C,p.props.children),c.return=d,d=c;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===_t&&Hu(_)===C.type){n(d,C.sibling),c=a(C,p.props),c.ref=sr(d,C,p),c.return=d,d=c;break e}n(d,C);break}else t(d,C);C=C.sibling}p.type===Sn?(c=sn(p.props.children,d.mode,w,p.key),c.return=d,d=c):(w=Ja(p.type,p.key,p.props,null,d.mode,w),w.ref=sr(d,c,p),w.return=d,d=w)}return o(d);case _n:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=a(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=No(p,d.mode,w),c.return=d,d=c}return o(d);case _t:return C=p._init,k(d,c,C(p._payload),w)}if(mr(p))return y(d,c,p,w);if(rr(p))return g(d,c,p,w);xa(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=a(c,p),c.return=d,d=c):(n(d,c),c=Eo(p,d.mode,w),c.return=d,d=c),o(d)):n(d,c)}return k}var Zn=vd(!0),gd=vd(!1),ta={},rt=Xt(ta),Or=Xt(ta),Wr=Xt(ta);function rn(e){if(e===ta)throw Error(S(174));return e}function xs(e,t){switch(B(Wr,t),B(Or,e),B(rt,ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jo(t,e)}Y(rt),B(rt,t)}function Hn(){Y(rt),Y(Or),Y(Wr)}function yd(e){rn(Wr.current);var t=rn(rt.current),n=Jo(t,e.type);t!==n&&(B(Or,e),B(rt,n))}function Cs(e){Or.current===e&&(Y(rt),Y(Or))}var Z=Xt(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function Ps(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var Ya=gt.ReactCurrentDispatcher,So=gt.ReactCurrentBatchConfig,fn=0,H=null,re=null,le=null,hi=!1,_r=!1,Br=0,a1=0;function de(){throw Error(S(321))}function As(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Es(e,t,n,r,a,i){if(fn=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ya.current=e===null||e.memoizedState===null?s1:u1,e=n(r,a),_r){i=0;do{if(_r=!1,Br=0,25<=i)throw Error(S(301));i+=1,le=re=null,t.updateQueue=null,Ya.current=c1,e=n(r,a)}while(_r)}if(Ya.current=vi,t=re!==null&&re.next!==null,fn=0,le=re=H=null,hi=!1,t)throw Error(S(300));return e}function Ns(){var e=Br!==0;return Br=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?H.memoizedState=le=e:le=le.next=e,le}function Oe(){if(re===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?H.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?H.memoizedState=le=e:le=le.next=e}return le}function Gr(e,t){return typeof t=="function"?t(e):t}function xo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((fn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,o=r):s=s.next=m,H.lanes|=f,dn|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,He(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,H.lanes|=i,dn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Co(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);He(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wd(){}function bd(e,t){var n=H,r=Oe(),a=t(),i=!He(r.memoizedState,a);if(i&&(r.memoizedState=a,ke=!0),r=r.queue,Rs(Sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Vr(9,_d.bind(null,n,r,a,t),void 0,null),se===null)throw Error(S(349));fn&30||kd(n,t,a)}return a}function kd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,r){t.value=n,t.getSnapshot=r,xd(t)&&Cd(e)}function Sd(e,t,n){return n(function(){xd(t)&&Cd(e)})}function xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Cd(e){var t=dt(e,1);t!==null&&Ze(t,e,1,-1)}function Ju(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=l1.bind(null,H,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pd(){return Oe().memoizedState}function Ua(e,t,n,r){var a=Ke();H.flags|=e,a.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Oi(e,t,n,r){var a=Oe();r=r===void 0?null:r;var i=void 0;if(re!==null){var o=re.memoizedState;if(i=o.destroy,r!==null&&As(r,o.deps)){a.memoizedState=Vr(t,n,i,r);return}}H.flags|=e,a.memoizedState=Vr(1|t,n,i,r)}function $u(e,t){return Ua(8390656,8,e,t)}function Rs(e,t){return Oi(2048,8,e,t)}function Ad(e,t){return Oi(4,2,e,t)}function Ed(e,t){return Oi(4,4,e,t)}function Nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4,4,Nd.bind(null,t,e),n)}function Is(){}function Id(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&As(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ld(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&As(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return fn&21?(He(n,t)||(n=Mf(),H.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function i1(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{W=n,So.transition=r}}function jd(){return Oe().memoizedState}function o1(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fd(e))Md(t,n);else if(n=dd(e,t,n,r),n!==null){var a=ge();Ze(n,e,r,a),Dd(n,t,r)}}function l1(e,t,n){var r=Dt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fd(e))Md(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,He(l,o)){var s=t.interleaved;s===null?(a.next=a,_s(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=dd(e,t,a,r),n!==null&&(a=ge(),Ze(n,e,r,a),Dd(n,t,r))}}function Fd(e){var t=e.alternate;return e===H||t!==null&&t===H}function Md(e,t){_r=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var vi={readContext:ze,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},s1={readContext:ze,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:$u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4194308,4,Nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=o1.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:Ju,useDebugValue:Is,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Ju(!1),t=e[0];return e=i1.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,a=Ke();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));fn&30||kd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,$u(Sd.bind(null,r,i,e),[e]),r.flags|=2048,Vr(9,_d.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ke(),t=se.identifierPrefix;if(X){var n=st,r=lt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u1={readContext:ze,useCallback:Id,useContext:ze,useEffect:Rs,useImperativeHandle:Rd,useInsertionEffect:Ad,useLayoutEffect:Ed,useMemo:Ld,useReducer:xo,useRef:Pd,useState:function(){return xo(Gr)},useDebugValue:Is,useDeferredValue:function(e){var t=Oe();return Td(t,re.memoizedState,e)},useTransition:function(){var e=xo(Gr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:bd,useId:jd,unstable_isNewReconciler:!1},c1={readContext:ze,useCallback:Id,useContext:ze,useEffect:Rs,useImperativeHandle:Rd,useInsertionEffect:Ad,useLayoutEffect:Ed,useMemo:Ld,useReducer:Co,useRef:Pd,useState:function(){return Co(Gr)},useDebugValue:Is,useDeferredValue:function(e){var t=Oe();return re===null?t.memoizedState=e:Td(t,re.memoizedState,e)},useTransition:function(){var e=Co(Gr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:wd,useSyncExternalStore:bd,useId:jd,unstable_isNewReconciler:!1};function Jn(e,t){try{var n="",r=t;do n+=zp(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Po(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var f1=typeof WeakMap=="function"?WeakMap:Map;function zd(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,El=r),yl(e,t)},n}function Od(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){yl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){yl(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new f1;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=C1.bind(null,e,t,n),t.then(e,e))}function Ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var d1=gt.ReactCurrentOwner,ke=!1;function ve(e,t,n,r){t.child=e===null?gd(t,null,n,r):Zn(t,e.child,n,r)}function ec(e,t,n,r,a){n=n.render;var i=t.ref;return Bn(t,a),r=Es(e,t,n,r,i,a),n=Ns(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mt(e,t,a)):(X&&n&&vs(t),t.flags|=1,ve(e,t,r,a),t.child)}function tc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Os(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wd(e,t,i,r,a)):(e=Ja(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(o,r)&&e.ref===t.ref)return mt(e,t,a)}return t.flags|=1,e=zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Fr(i,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,mt(e,t,a)}return wl(e,t,n,r,a)}function Bd(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Tn,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Tn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(Tn,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(Tn,Pe),Pe|=r;return ve(e,t,a,n),t.child}function Gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wl(e,t,n,r,a){var i=Se(n)?un:he.current;return i=Un(t,i),Bn(t,a),n=Es(e,t,n,r,i,a),r=Ns(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mt(e,t,a)):(X&&r&&vs(t),t.flags|=1,ve(e,t,n,a),t.child)}function nc(e,t,n,r,a){if(Se(n)){var i=!0;si(t)}else i=!1;if(Bn(t,a),t.stateNode===null)Xa(e,t),hd(t,n,r),gl(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=Se(n)?un:he.current,u=Un(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Zu(t,o,r,u),St=!1;var h=t.memoizedState;o.state=h,mi(t,r,o,a),s=t.memoizedState,l!==r||h!==s||_e.current||St?(typeof f=="function"&&(vl(t,n,f,r),s=t.memoizedState),(l=St||Xu(t,n,l,r,h,s,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,md(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ge(t.type,l),o.props=u,m=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=Se(n)?un:he.current,s=Un(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||h!==s)&&Zu(t,o,r,s),St=!1,h=t.memoizedState,o.state=h,mi(t,r,o,a);var y=t.memoizedState;l!==m||h!==y||_e.current||St?(typeof v=="function"&&(vl(t,n,v,r),y=t.memoizedState),(u=St||Xu(t,n,u,r,h,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,i,a)}function bl(e,t,n,r,a,i){Gd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Bu(t,n,!1),mt(e,t,i);r=t.stateNode,d1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Zn(t,e.child,null,i),t.child=Zn(t,null,l,i)):ve(e,t,l,i),t.memoizedState=r.state,a&&Bu(t,n,!0),t.child}function Vd(e){var t=e.stateNode;t.pendingContext?Wu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wu(e,t.context,!1),xs(e,t.containerInfo)}function rc(e,t,n,r,a){return Xn(),ys(a),t.flags|=256,ve(e,t,n,r),t.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yd(e,t,n){var r=t.pendingProps,a=Z.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),B(Z,a&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gi(o,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_l(n),t.memoizedState=kl,e):Ls(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return m1(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=zt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=zt(l,i):(i=sn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?_l(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=kl,r}return i=e.child,e=i.sibling,r=zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ls(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&ys(r),Zn(t,e.child,null,n),e=Ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m1(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Po(Error(S(422))),Ca(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Gi({mode:"visible",children:r.children},a,0,null),i=sn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Zn(t,e.child,null,o),t.child.memoizedState=_l(o),t.memoizedState=kl,i);if(!(t.mode&1))return Ca(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(S(419)),r=Po(i,r,void 0),Ca(e,t,o,r)}if(l=(o&e.childLanes)!==0,ke||l){if(r=se,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,dt(e,a),Ze(r,e,a,-1))}return zs(),r=Po(Error(S(421))),Ca(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=P1.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ae=jt(a.nextSibling),Ee=t,X=!0,Ye=null,e!==null&&(Te[je++]=lt,Te[je++]=st,Te[je++]=cn,lt=e.id,st=e.overflow,cn=t),t=Ls(t,r.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hl(e.return,t,n)}function Ao(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Ud(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Z,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ao(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&pi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ao(t,!0,n,null,i);break;case"together":Ao(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p1(e,t,n){switch(t.tag){case 3:Vd(t),Xn();break;case 5:yd(t);break;case 1:Se(t.type)&&si(t);break;case 4:xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;B(fi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Yd(e,t,n):(B(Z,Z.current&1),e=mt(e,t,n),e!==null?e.sibling:null);B(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ud(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),B(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Bd(e,t,n)}return mt(e,t,n)}var Xd,Sl,Zd,Hd;Xd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sl=function(){};Zd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,rn(rt.current);var i=null;switch(n){case"input":a=Uo(e,a),r=Uo(e,r),i=[];break;case"select":a=J({},a,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":a=Ho(e,a),r=Ho(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oi)}$o(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Er.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Er.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&G("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Hd=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h1(e,t,n){var r=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Se(t.type)&&li(),me(t),null;case 3:return r=t.stateNode,Hn(),Y(_e),Y(he),Ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Il(Ye),Ye=null))),Sl(e,t),me(t),null;case 5:Cs(t);var a=rn(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=rn(rt.current),Sa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[et]=t,r[zr]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(a=0;a<hr.length;a++)G(hr[a],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":mu(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":hu(r,i),G("invalid",r)}$o(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&_a(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&_a(r.textContent,l,e),a=["children",""+l]):Er.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":pa(r),pu(r,i,!0);break;case"textarea":pa(r),vu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[et]=t,e[zr]=r,Xd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Qo(n,r),n){case"dialog":G("cancel",e),G("close",e),a=r;break;case"iframe":case"object":case"embed":G("load",e),a=r;break;case"video":case"audio":for(a=0;a<hr.length;a++)G(hr[a],e);a=r;break;case"source":G("error",e),a=r;break;case"img":case"image":case"link":G("error",e),G("load",e),a=r;break;case"details":G("toggle",e),a=r;break;case"input":mu(e,r),a=Uo(e,r),G("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=J({},r,{value:void 0}),G("invalid",e);break;case"textarea":hu(e,r),a=Ho(e,r),G("invalid",e);break;default:a=r}$o(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?xf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_f(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Nr(e,s):typeof s=="number"&&Nr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Er.hasOwnProperty(i)?s!=null&&i==="onScroll"&&G("scroll",e):s!=null&&ns(e,i,s,o))}switch(n){case"input":pa(e),pu(e,r,!1);break;case"textarea":pa(e),vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Hd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=rn(Wr.current),rn(rt.current),Sa(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(i=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:_a(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_a(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return me(t),null;case 13:if(Y(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ae!==null&&t.mode&1&&!(t.flags&128))fd(),Xn(),t.flags|=98560,i=!1;else if(i=Sa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[et]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ye!==null&&(Il(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ae===0&&(ae=3):zs())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Hn(),Sl(e,t),e===null&&Mr(t.stateNode.containerInfo),me(t),null;case 10:return ks(t.type._context),me(t),null;case 17:return Se(t.type)&&li(),me(t),null;case 19:if(Y(Z),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)ur(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=pi(e),o!==null){for(t.flags|=128,ur(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>$n&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304)}else{if(!r)if(e=pi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!X)return me(t),null}else 2*q()-i.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,ur(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=Z.current,B(Z,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function v1(e,t){switch(gs(t),t.tag){case 1:return Se(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),Y(_e),Y(he),Ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cs(t),null;case 13:if(Y(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Z),null;case 4:return Hn(),null;case 10:return ks(t.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var Pa=!1,pe=!1,g1=typeof WeakSet=="function"?WeakSet:Set,E=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){$(e,t,r)}}var ic=!1;function y1(e,t){if(ll=ri,e=Kf(),hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,m=e,h=null;t:for(;;){for(var v;m!==n||a!==0&&m.nodeType!==3||(l=o+a),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++f===r&&(s=o),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(sl={focusedElem:e,selectionRange:n},ri=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,k=y.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ge(t.type,g),k);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){$(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=ic,ic=!1,y}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&xl(t,n,i)}a=a.next}while(a!==r)}}function Wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[zr],delete t[fl],delete t[e1],delete t[t1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oi));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var ue=null,Ve=!1;function wt(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Li,n)}catch{}switch(n.tag){case 5:pe||Ln(n,t);case 6:var r=ue,a=Ve;ue=null,wt(e,t,n),ue=r,Ve=a,ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ve?(e=ue,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),Tr(e)):bo(ue,n.stateNode));break;case 4:r=ue,a=Ve,ue=n.stateNode.containerInfo,Ve=!0,wt(e,t,n),ue=r,Ve=a;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&xl(n,t,o),a=a.next}while(a!==r)}wt(e,t,n);break;case 1:if(!pe&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$(n,t,l)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,wt(e,t,n),pe=r):wt(e,t,n);break;default:wt(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g1),t.forEach(function(r){var a=A1.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Ve=!1;break e;case 3:ue=l.stateNode.containerInfo,Ve=!0;break e;case 4:ue=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(ue===null)throw Error(S(160));Qd(i,o,a),ue=null,Ve=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){$(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}function Kd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),$e(e),r&4){try{Sr(3,e,e.return),Wi(3,e)}catch(g){$(e,e.return,g)}try{Sr(5,e,e.return)}catch(g){$(e,e.return,g)}}break;case 1:We(t,e),$e(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(We(t,e),$e(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var a=e.stateNode;try{Nr(a,"")}catch(g){$(e,e.return,g)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&wf(a,i),Qo(l,o);var u=Qo(l,i);for(o=0;o<s.length;o+=2){var f=s[o],m=s[o+1];f==="style"?xf(a,m):f==="dangerouslySetInnerHTML"?_f(a,m):f==="children"?Nr(a,m):ns(a,f,m,u)}switch(l){case"input":Xo(a,i);break;case"textarea":bf(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Dn(a,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Dn(a,!!i.multiple,i.defaultValue,!0):Dn(a,!!i.multiple,i.multiple?[]:"",!1))}a[zr]=i}catch(g){$(e,e.return,g)}}break;case 6:if(We(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){$(e,e.return,g)}}break;case 3:if(We(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(g){$(e,e.return,g)}break;case 4:We(t,e),$e(e);break;case 13:We(t,e),$e(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Fs=q())),r&4&&lc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||f,We(t,e),pe=u):We(t,e),$e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(E=e,f=e.child;f!==null;){for(m=E=f;E!==null;){switch(h=E,v=h.child,h.tag){case 0:case 11:case 14:case 15:Sr(4,h,h.return);break;case 1:Ln(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){$(r,n,g)}}break;case 5:Ln(h,h.return);break;case 22:if(h.memoizedState!==null){uc(m);continue}}v!==null?(v.return=h,E=v):uc(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{a=m.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Sf("display",o))}catch(g){$(e,e.return,g)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(g){$(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(t,e),$e(e),r&4&&lc(e);break;case 21:break;default:We(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($d(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Nr(a,""),r.flags&=-33);var i=oc(e);Al(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=oc(e);Pl(e,l,o);break;default:throw Error(S(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w1(e,t,n){E=e,qd(e)}function qd(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var a=E,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Pa;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||pe;l=Pa;var u=pe;if(Pa=o,(pe=s)&&!u)for(E=a;E!==null;)o=E,s=o.child,o.tag===22&&o.memoizedState!==null?cc(a):s!==null?(s.return=o,E=s):cc(a);for(;i!==null;)E=i,qd(i),i=i.sibling;E=a,Pa=l,pe=u}sc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,E=i):sc(e)}}function sc(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Wi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Uu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Tr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&Cl(t)}catch(h){$(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function uc(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function cc(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wi(4,t)}catch(s){$(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){$(t,a,s)}}var i=t.return;try{Cl(t)}catch(s){$(t,i,s)}break;case 5:var o=t.return;try{Cl(t)}catch(s){$(t,o,s)}}}catch(s){$(t,t.return,s)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var b1=Math.ceil,gi=gt.ReactCurrentDispatcher,Ts=gt.ReactCurrentOwner,Me=gt.ReactCurrentBatchConfig,z=0,se=null,te=null,ce=0,Pe=0,Tn=Xt(0),ae=0,Yr=null,dn=0,Bi=0,js=0,xr=null,be=null,Fs=0,$n=1/0,it=null,yi=!1,El=null,Mt=null,Aa=!1,At=null,wi=0,Cr=0,Nl=null,Za=-1,Ha=0;function ge(){return z&6?q():Za!==-1?Za:Za=q()}function Dt(e){return e.mode&1?z&2&&ce!==0?ce&-ce:r1.transition!==null?(Ha===0&&(Ha=Mf()),Ha):(e=W,e!==0||(e=window.event,e=e===void 0?16:Vf(e.type)),e):1}function Ze(e,t,n,r){if(50<Cr)throw Cr=0,Nl=null,Error(S(185));Kr(e,n,r),(!(z&2)||e!==se)&&(e===se&&(!(z&2)&&(Bi|=n),ae===4&&Ct(e,ce)),xe(e,r),n===1&&z===0&&!(t.mode&1)&&($n=q()+500,Di&&Zt()))}function xe(e,t){var n=e.callbackNode;rh(e,t);var r=ni(e,e===se?ce:0);if(r===0)n!==null&&wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wu(n),t===1)e.tag===0?n1(fc.bind(null,e)):sd(fc.bind(null,e)),Kh(function(){!(z&6)&&Zt()}),n=null;else{switch(Df(r)){case 1:n=ls;break;case 4:n=jf;break;case 16:n=ti;break;case 536870912:n=Ff;break;default:n=ti}n=lm(n,em.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function em(e,t){if(Za=-1,Ha=0,z&6)throw Error(S(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=ni(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bi(e,r);else{t=r;var a=z;z|=2;var i=nm();(se!==e||ce!==t)&&(it=null,$n=q()+500,ln(e,t));do try{S1();break}catch(l){tm(e,l)}while(1);bs(),gi.current=i,z=a,te!==null?t=0:(se=null,ce=0,t=ae)}if(t!==0){if(t===2&&(a=nl(e),a!==0&&(r=a,t=Rl(e,a))),t===1)throw n=Yr,ln(e,0),Ct(e,r),xe(e,q()),n;if(t===6)Ct(e,r);else{if(a=e.current.alternate,!(r&30)&&!k1(a)&&(t=bi(e,r),t===2&&(i=nl(e),i!==0&&(r=i,t=Rl(e,i))),t===1))throw n=Yr,ln(e,0),Ct(e,r),xe(e,q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:en(e,be,it);break;case 3:if(Ct(e,r),(r&130023424)===r&&(t=Fs+500-q(),10<t)){if(ni(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=cl(en.bind(null,e,be,it),t);break}en(e,be,it);break;case 4:if(Ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Xe(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b1(r/1960))-r,10<r){e.timeoutHandle=cl(en.bind(null,e,be,it),r);break}en(e,be,it);break;case 5:en(e,be,it);break;default:throw Error(S(329))}}}return xe(e,q()),e.callbackNode===n?em.bind(null,e):null}function Rl(e,t){var n=xr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=bi(e,t),e!==2&&(t=be,be=n,t!==null&&Il(t)),e}function Il(e){be===null?be=e:be.push.apply(be,e)}function k1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!He(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~js,t&=~Bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if(z&6)throw Error(S(327));Gn();var t=ni(e,0);if(!(t&1))return xe(e,q()),null;var n=bi(e,t);if(e.tag!==0&&n===2){var r=nl(e);r!==0&&(t=r,n=Rl(e,r))}if(n===1)throw n=Yr,ln(e,0),Ct(e,t),xe(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,be,it),xe(e,q()),null}function Ms(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&($n=q()+500,Di&&Zt())}}function mn(e){At!==null&&At.tag===0&&!(z&6)&&Gn();var t=z;z|=1;var n=Me.transition,r=W;try{if(Me.transition=null,W=1,e)return e()}finally{W=r,Me.transition=n,z=t,!(z&6)&&Zt()}}function Ds(){Pe=Tn.current,Y(Tn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qh(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:Hn(),Y(_e),Y(he),Ps();break;case 5:Cs(r);break;case 4:Hn();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:ks(r.type._context);break;case 22:case 23:Ds()}n=n.return}if(se=e,te=e=zt(e.current,null),ce=Pe=t,ae=0,Yr=null,js=Bi=dn=0,be=xr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}nn=null}return e}function tm(e,t){do{var n=te;try{if(bs(),Ya.current=vi,hi){for(var r=H.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}hi=!1}if(fn=0,le=re=H=null,_r=!1,Br=0,Ts.current=null,n===null||n.return===null){ae=1,Yr=t,te=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=ce,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ku(o);if(v!==null){v.flags&=-257,qu(v,o,l,i,t),v.mode&1&&Qu(i,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var g=new Set;g.add(s),t.updateQueue=g}else y.add(s);break e}else{if(!(t&1)){Qu(i,u,t),zs();break e}s=Error(S(426))}}else if(X&&l.mode&1){var k=Ku(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),qu(k,o,l,i,t),ys(Jn(s,l));break e}}i=s=Jn(s,l),ae!==4&&(ae=2),xr===null?xr=[i]:xr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=zd(i,s,t);Yu(i,d);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Mt===null||!Mt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Od(i,l,t);Yu(i,w);break e}}i=i.return}while(i!==null)}am(n)}catch(_){t=_,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function nm(){var e=gi.current;return gi.current=vi,e===null?vi:e}function zs(){(ae===0||ae===3||ae===2)&&(ae=4),se===null||!(dn&268435455)&&!(Bi&268435455)||Ct(se,ce)}function bi(e,t){var n=z;z|=2;var r=nm();(se!==e||ce!==t)&&(it=null,ln(e,t));do try{_1();break}catch(a){tm(e,a)}while(1);if(bs(),z=n,gi.current=r,te!==null)throw Error(S(261));return se=null,ce=0,ae}function _1(){for(;te!==null;)rm(te)}function S1(){for(;te!==null&&!Hp();)rm(te)}function rm(e){var t=om(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?am(e):te=t,Ts.current=null}function am(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=v1(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,te=null;return}}else if(n=h1(n,t,Pe),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ae===0&&(ae=5)}function en(e,t,n){var r=W,a=Me.transition;try{Me.transition=null,W=1,x1(e,t,n,r)}finally{Me.transition=a,W=r}return null}function x1(e,t,n,r){do Gn();while(At!==null);if(z&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ah(e,i),e===se&&(te=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,lm(ti,function(){return Gn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var o=W;W=1;var l=z;z|=4,Ts.current=null,y1(e,n),Kd(n,e),Yh(sl),ri=!!ll,sl=ll=null,e.current=n,w1(n),Jp(),z=l,W=o,Me.transition=i}else e.current=n;if(Aa&&(Aa=!1,At=e,wi=a),i=e.pendingLanes,i===0&&(Mt=null),Kp(n.stateNode),xe(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(yi)throw yi=!1,e=El,El=null,e;return wi&1&&e.tag!==0&&Gn(),i=e.pendingLanes,i&1?e===Nl?Cr++:(Cr=0,Nl=e):Cr=0,Zt(),null}function Gn(){if(At!==null){var e=Df(wi),t=Me.transition,n=W;try{if(Me.transition=null,W=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,wi=0,z&6)throw Error(S(331));var a=z;for(z|=4,E=e.current;E!==null;){var i=E,o=i.child;if(E.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(E=u;E!==null;){var f=E;switch(f.tag){case 0:case 11:case 15:Sr(8,f,i)}var m=f.child;if(m!==null)m.return=f,E=m;else for(;E!==null;){f=E;var h=f.sibling,v=f.return;if(Jd(f),f===u){E=null;break}if(h!==null){h.return=v,E=h;break}E=v}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var k=g.sibling;g.sibling=null,g=k}while(g!==null)}}E=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,E=o;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,E=d;break e}E=i.return}}var c=e.current;for(E=c;E!==null;){o=E;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,E=p;else e:for(o=c;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wi(9,l)}}catch(_){$(l,l.return,_)}if(l===o){E=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,E=w;break e}E=l.return}}if(z=a,Zt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Li,e)}catch{}r=!0}return r}finally{W=n,Me.transition=t}}return!1}function dc(e,t,n){t=Jn(n,t),t=zd(e,t,1),e=Ft(e,t,1),t=ge(),e!==null&&(Kr(e,1,t),xe(e,t))}function $(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Jn(n,e),e=Od(t,e,1),t=Ft(t,e,1),e=ge(),t!==null&&(Kr(t,1,e),xe(t,e));break}}t=t.return}}function C1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(ae===4||ae===3&&(ce&130023424)===ce&&500>q()-Fs?ln(e,0):js|=n),xe(e,t)}function im(e,t){t===0&&(e.mode&1?(t=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):t=1);var n=ge();e=dt(e,t),e!==null&&(Kr(e,t,n),xe(e,n))}function P1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),im(e,n)}function A1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),im(e,n)}var om;om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,p1(e,t,n);ke=!!(e.flags&131072)}else ke=!1,X&&t.flags&1048576&&ud(t,ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xa(e,t),e=t.pendingProps;var a=Un(t,he.current);Bn(t,n),a=Es(null,t,r,e,a,n);var i=Ns();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(i=!0,si(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ss(t),a.updater=zi,t.stateNode=a,a._reactInternals=t,gl(t,r,e,n),t=bl(null,t,r,!0,i,n)):(t.tag=0,X&&i&&vs(t),ve(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xa(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=N1(r),e=Ge(r,e),a){case 0:t=wl(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=ec(null,t,r,e,n);break e;case 14:t=tc(null,t,r,Ge(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),wl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),nc(e,t,r,a,n);case 3:e:{if(Vd(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,a=i.element,md(e,t),mi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Jn(Error(S(423)),t),t=rc(e,t,r,n,a);break e}else if(r!==a){a=Jn(Error(S(424)),t),t=rc(e,t,r,n,a);break e}else for(Ae=jt(t.stateNode.containerInfo.firstChild),Ee=t,X=!0,Ye=null,n=gd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===a){t=mt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return yd(t),e===null&&pl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,ul(r,a)?o=null:i!==null&&ul(r,i)&&(t.flags|=32),Gd(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&pl(t),null;case 13:return Yd(e,t,n);case 4:return xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),ec(e,t,r,a,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,B(fi,r._currentValue),r._currentValue=o,i!==null)if(He(i.value,o)){if(i.children===a.children&&!_e.current){t=mt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=ut(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),hl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hl(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ve(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Bn(t,n),a=ze(a),r=r(a),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,a=Ge(r,t.pendingProps),a=Ge(r.type,a),tc(e,t,r,a,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ge(r,a),Xa(e,t),t.tag=1,Se(r)?(e=!0,si(t)):e=!1,Bn(t,n),hd(t,r,a),gl(t,r,a,n),bl(null,t,r,!0,e,n);case 19:return Ud(e,t,n);case 22:return Bd(e,t,n)}throw Error(S(156,t.tag))};function lm(e,t){return Tf(e,t)}function E1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new E1(e,t,n,r)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N1(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===as)return 11;if(e===is)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ja(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Os(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return sn(n.children,a,i,t);case rs:o=8,a|=8;break;case Bo:return e=Fe(12,n,t,a|2),e.elementType=Bo,e.lanes=i,e;case Go:return e=Fe(13,n,t,a),e.elementType=Go,e.lanes=i,e;case Vo:return e=Fe(19,n,t,a),e.elementType=Vo,e.lanes=i,e;case vf:return Gi(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pf:o=10;break e;case hf:o=9;break e;case as:o=11;break e;case is:o=14;break e;case _t:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Fe(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Gi(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=vf,e.lanes=n,e.stateNode={isHidden:!1},e}function Eo(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function R1(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ws(e,t,n,r,a,i,o,l,s){return e=new R1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ss(i),e}function I1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sm(e){if(!e)return Bt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Se(n))return ld(e,n,t)}return t}function um(e,t,n,r,a,i,o,l,s){return e=Ws(n,r,!0,e,a,i,o,l,s),e.context=sm(null),n=e.current,r=ge(),a=Dt(n),i=ut(r,a),i.callback=t??null,Ft(n,i,a),e.current.lanes=a,Kr(e,a,r),xe(e,r),e}function Vi(e,t,n,r){var a=t.current,i=ge(),o=Dt(a);return n=sm(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(a,t,o),e!==null&&(Ze(e,a,o,i),Va(e,a,o)),o}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bs(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function L1(){return null}var cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}Yi.prototype.render=Gs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Vi(e,t,null,null)};Yi.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){Vi(null,e,null,null)}),t[ft]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&Gf(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pc(){}function T1(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=ki(o);i.call(u)}}var o=um(t,r,e,0,null,!1,!1,"",pc);return e._reactRootContainer=o,e[ft]=o.current,Mr(e.nodeType===8?e.parentNode:e),mn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=ki(s);l.call(u)}}var s=Ws(e,0,!1,null,null,!1,!1,"",pc);return e._reactRootContainer=s,e[ft]=s.current,Mr(e.nodeType===8?e.parentNode:e),mn(function(){Vi(t,s,n,r)}),s}function Xi(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=ki(o);l.call(s)}}Vi(t,o,e,a)}else o=T1(n,t,e,a,r);return ki(o)}zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(ss(t,n|1),xe(t,q()),!(z&6)&&($n=q()+500,Zt()))}break;case 13:mn(function(){var r=dt(e,1);if(r!==null){var a=ge();Ze(r,e,1,a)}}),Bs(e,1)}};us=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ge();Ze(t,e,134217728,n)}Bs(e,134217728)}};Of=function(e){if(e.tag===13){var t=Dt(e),n=dt(e,t);if(n!==null){var r=ge();Ze(n,e,t,r)}Bs(e,t)}};Wf=function(){return W};Bf=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};qo=function(e,t,n){switch(t){case"input":if(Xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Mi(r);if(!a)throw Error(S(90));yf(r),Xo(r,a)}}}break;case"textarea":bf(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Af=Ms;Ef=mn;var j1={usingClientEntryPoint:!1,Events:[ea,An,Mi,Cf,Pf,Ms]},cr={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F1={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Li=Ea.inject(F1),nt=Ea}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(S(200));return I1(e,t,null,n)};Re.createRoot=function(e,t){if(!Vs(e))throw Error(S(299));var n=!1,r="",a=cm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ws(e,1,!1,null,null,n,!1,r,a),e[ft]=t.current,Mr(e.nodeType===8?e.parentNode:e),new Gs(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return mn(e)};Re.hydrate=function(e,t,n){if(!Ui(t))throw Error(S(200));return Xi(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=cm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=um(t,null,e,1,n??null,a,!1,i,o),e[ft]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Yi(t)};Re.render=function(e,t,n){if(!Ui(t))throw Error(S(200));return Xi(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(S(40));return e._reactRootContainer?(mn(function(){Xi(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Re.unstable_batchedUpdates=Ms;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ui(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Xi(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm)}catch(e){console.error(e)}}fm(),uf.exports=Re;var M1=uf.exports,hc=M1;Oo.createRoot=hc.createRoot,Oo.hydrateRoot=hc.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ur.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const vc="popstate";function D1(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:l="",hash:s=""}=yn(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ll("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:_i(i))}function r(a,i){Zi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return O1(t,n,r,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z1(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ll(e,t,n,r){return n===void 0&&(n=null),Ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||z1()})}function _i(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function O1(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Et.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(Ur({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=Et.Pop;let k=f(),d=k==null?null:k-u;u=k,s&&s({action:l,location:g.location,delta:d})}function h(k,d){l=Et.Push;let c=Ll(g.location,k,d);n&&n(c,k),u=f()+1;let p=gc(c,u),w=g.createHref(c);try{o.pushState(p,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(w)}i&&s&&s({action:l,location:g.location,delta:1})}function v(k,d){l=Et.Replace;let c=Ll(g.location,k,d);n&&n(c,k),u=f();let p=gc(c,u),w=g.createHref(c);o.replaceState(p,"",w),i&&s&&s({action:l,location:g.location,delta:0})}function y(k){let d=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof k=="string"?k:_i(k);return ne(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let g={get action(){return l},get location(){return e(a,o)},listen(k){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(vc,m),s=k,()=>{a.removeEventListener(vc,m),s=null}},createHref(k){return t(a,k)},createURL:y,encodeLocation(k){let d=y(k);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:v,go(k){return o.go(k)}};return g}var yc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yc||(yc={}));function W1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yn(t):t,a=Ys(r.pathname||"/",n);if(a==null)return null;let i=dm(e);B1(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=$1(i[l],q1(a));return o}function dm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ne(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Ot([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:H1(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of mm(i.path))a(i,o,s)}),t}function mm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=mm(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function B1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G1=/^:\w+$/,V1=3,Y1=2,U1=1,X1=10,Z1=-2,wc=e=>e==="*";function H1(e,t){let n=e.split("/"),r=n.length;return n.some(wc)&&(r+=Z1),t&&(r+=Y1),n.filter(a=>!wc(a)).reduce((a,i)=>a+(G1.test(i)?V1:i===""?U1:X1),r)}function J1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function $1(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=Q1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let m=l.route;i.push({params:r,pathname:Ot([a,f.pathname]),pathnameBase:r0(Ot([a,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(a=Ot([a,f.pathnameBase]))}return i}function Q1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=K1(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,f,m)=>{if(f==="*"){let h=l[m]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=e0(l[m]||"",f),u},{}),pathname:i,pathnameBase:o,pattern:e}}function K1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function q1(e){try{return decodeURI(e)}catch(t){return Zi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function e0(e,t){try{return decodeURIComponent(e)}catch(n){return Zi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ys(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function t0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?yn(e):e;return{pathname:n?n.startsWith("/")?n:n0(n,t):t,search:a0(r),hash:i0(a)}}function n0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Ro(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hm(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=yn(e):(a=Ur({},e),ne(!a.pathname||!a.pathname.includes("?"),Ro("?","pathname","search",a)),ne(!a.pathname||!a.pathname.includes("#"),Ro("#","pathname","hash",a)),ne(!a.search||!a.search.includes("#"),Ro("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let m=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;a.pathname=h.join("/")}l=m>=0?t[m]:"/"}let s=t0(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),r0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),a0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vm=["post","put","patch","delete"];new Set(vm);const l0=["get",...vm];new Set(l0);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Si(){return Si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(this,arguments)}const Us=x.createContext(null),gm=x.createContext(null),wn=x.createContext(null),Hi=x.createContext(null),Ht=x.createContext({outlet:null,matches:[],isDataRoute:!1}),ym=x.createContext(null);function s0(e,t){let{relative:n}=t===void 0?{}:t;na()||ne(!1);let{basename:r,navigator:a}=x.useContext(wn),{hash:i,pathname:o,search:l}=Xs(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Ot([r,o])),a.createHref({pathname:s,search:l,hash:i})}function na(){return x.useContext(Hi)!=null}function Je(){return na()||ne(!1),x.useContext(Hi).location}function wm(e){x.useContext(wn).static||x.useLayoutEffect(e)}function ra(){let{isDataRoute:e}=x.useContext(Ht);return e?_0():u0()}function u0(){na()||ne(!1);let e=x.useContext(Us),{basename:t,navigator:n}=x.useContext(wn),{matches:r}=x.useContext(Ht),{pathname:a}=Je(),i=JSON.stringify(pm(r).map(s=>s.pathnameBase)),o=x.useRef(!1);return wm(()=>{o.current=!0}),x.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=hm(s,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ot([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,a,e])}function c0(){let{matches:e}=x.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function Xs(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Ht),{pathname:a}=Je(),i=JSON.stringify(pm(r).map(o=>o.pathnameBase));return x.useMemo(()=>hm(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function f0(e,t){return d0(e,t)}function d0(e,t,n){na()||ne(!1);let{navigator:r}=x.useContext(wn),{matches:a}=x.useContext(Ht),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=Je(),u;if(t){var f;let g=typeof t=="string"?yn(t):t;l==="/"||(f=g.pathname)!=null&&f.startsWith(l)||ne(!1),u=g}else u=s;let m=u.pathname||"/",h=l==="/"?m:m.slice(l.length)||"/",v=W1(e,{pathname:h}),y=g0(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Ot([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Ot([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),a,n);return t&&y?x.createElement(Hi.Provider,{value:{location:Si({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Et.Pop}},y):y}function m0(){let e=k0(),t=o0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,i)}const p0=x.createElement(m0,null);class h0 extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Ht.Provider,{value:this.props.routeContext},x.createElement(ym.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v0(e){let{routeContext:t,match:n,children:r}=e,a=x.useContext(Us);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Ht.Provider,{value:t},r)}function g0(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||ne(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,m=null;n&&(m=s.route.errorElement||p0);let h=t.concat(i.slice(0,u+1)),v=()=>{let y;return f?y=m:s.route.Component?y=x.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=l,x.createElement(v0,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?x.createElement(h0,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var bm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bm||{}),xi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xi||{});function y0(e){let t=x.useContext(Us);return t||ne(!1),t}function w0(e){let t=x.useContext(gm);return t||ne(!1),t}function b0(e){let t=x.useContext(Ht);return t||ne(!1),t}function km(e){let t=b0(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function k0(){var e;let t=x.useContext(ym),n=w0(xi.UseRouteError),r=km(xi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function _0(){let{router:e}=y0(bm.UseNavigateStable),t=km(xi.UseNavigateStable),n=x.useRef(!1);return wm(()=>{n.current=!0}),x.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Si({fromRouteId:t},i)))},[e,t])}function kt(e){ne(!1)}function S0(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Et.Pop,navigator:i,static:o=!1}=e;na()&&ne(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=yn(r));let{pathname:u="/",search:f="",hash:m="",state:h=null,key:v="default"}=r,y=x.useMemo(()=>{let g=Ys(u,l);return g==null?null:{location:{pathname:g,search:f,hash:m,state:h,key:v},navigationType:a}},[l,u,f,m,h,v,a]);return y==null?null:x.createElement(wn.Provider,{value:s},x.createElement(Hi.Provider,{children:n,value:y}))}function x0(e){let{children:t,location:n}=e;return f0(Tl(t),n)}new Promise(()=>{});function Tl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,a)=>{if(!x.isValidElement(r))return;let i=[...t,a];if(r.type===x.Fragment){n.push.apply(n,Tl(r.props.children,i));return}r.type!==kt&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tl(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}function _m(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function C0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function P0(e,t){return e.button===0&&(!t||t==="_self")&&!C0(e)}function jl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(a=>[n,a]):[[n,r]])},[]))}function A0(e,t){let n=jl(e);return t&&t.forEach((r,a)=>{n.has(a)||t.getAll(a).forEach(i=>{n.append(a,i)})}),n}const E0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],N0=["aria-current","caseSensitive","className","end","style","to","children"],R0="startTransition",bc=Pp[R0];function I0(e){let{basename:t,children:n,future:r,window:a}=e,i=x.useRef();i.current==null&&(i.current=D1({window:a,v5Compat:!0}));let o=i.current,[l,s]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=x.useCallback(m=>{u&&bc?bc(()=>s(m)):s(m)},[s,u]);return x.useLayoutEffect(()=>o.listen(f),[o,f]),x.createElement(S0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const L0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",T0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sm=x.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:f}=t,m=_m(t,E0),{basename:h}=x.useContext(wn),v,y=!1;if(typeof u=="string"&&T0.test(u)&&(v=u,L0))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=Ys(p.pathname,h);p.origin===c.origin&&w!=null?u=w+p.search+p.hash:y=!0}catch{}let g=s0(u,{relative:a}),k=j0(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:a});function d(c){r&&r(c),c.defaultPrevented||k(c)}return x.createElement("a",Ci({},m,{href:v||g,onClick:y||i?r:d,ref:n,target:s}))}),xm=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,children:u}=t,f=_m(t,N0),m=Xs(s,{relative:f.relative}),h=Je(),v=x.useContext(gm),{navigator:y}=x.useContext(wn),g=y.encodeLocation?y.encodeLocation(m).pathname:m.pathname,k=h.pathname,d=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;a||(k=k.toLowerCase(),d=d?d.toLowerCase():null,g=g.toLowerCase());let c=k===g||!o&&k.startsWith(g)&&k.charAt(g.length)==="/",p=d!=null&&(d===g||!o&&d.startsWith(g)&&d.charAt(g.length)==="/"),w=c?r:void 0,_;typeof i=="function"?_=i({isActive:c,isPending:p}):_=[i,c?"active":null,p?"pending":null].filter(Boolean).join(" ");let C=typeof l=="function"?l({isActive:c,isPending:p}):l;return x.createElement(Sm,Ci({},f,{"aria-current":w,className:_,ref:n,style:C,to:s}),typeof u=="function"?u({isActive:c,isPending:p}):u)});var kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(kc||(kc={}));var _c;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_c||(_c={}));function j0(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=ra(),s=Je(),u=Xs(e,{relative:o});return x.useCallback(f=>{if(P0(f,n)){f.preventDefault();let m=r!==void 0?r:_i(s)===_i(u);l(e,{replace:m,state:a,preventScrollReset:i,relative:o})}},[s,l,u,r,a,n,e,i,o])}function Ji(e){let t=x.useRef(jl(e)),n=x.useRef(!1),r=Je(),a=x.useMemo(()=>A0(r.search,n.current?null:t.current),[r.search]),i=ra(),o=x.useCallback((l,s)=>{const u=jl(typeof l=="function"?l(a):l);n.current=!0,i("?"+u,s)},[i,a]);return[a,o]}const F0="_welcome_x9txs_2",M0="_welcomeContainer_x9txs_9",D0="_goToAppButton_x9txs_13",Io={welcome:F0,welcomeContainer:M0,goToAppButton:D0};function z0(){return b.jsx("main",{className:Io.welcome,children:b.jsxs("div",{className:Io.welcomeContainer,children:[b.jsx("h1",{children:"Welcome to MisterEmail"}),b.jsx("div",{className:Io.goToAppButton,children:b.jsx(Sm,{to:"/inbox",children:"Go to app"})})]})})}function Sc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sc(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}function O0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W0(e,t,n){return t&&xc(e.prototype,t),n&&xc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zs(e,t){return G0(e)||Y0(e,t)||Cm(e,t)||X0()}function aa(e){return B0(e)||V0(e)||Cm(e)||U0()}function B0(e){if(Array.isArray(e))return Fl(e)}function G0(e){if(Array.isArray(e))return e}function V0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Y0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Cm(e,t){if(e){if(typeof e=="string")return Fl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fl(e,t)}}function Fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cc=function(){},Hs={},Pm={},Am=null,Em={mark:Cc,measure:Cc};try{typeof window<"u"&&(Hs=window),typeof document<"u"&&(Pm=document),typeof MutationObserver<"u"&&(Am=MutationObserver),typeof performance<"u"&&(Em=performance)}catch{}var Z0=Hs.navigator||{},Pc=Z0.userAgent,Ac=Pc===void 0?"":Pc,Gt=Hs,U=Pm,Ec=Am,Na=Em;Gt.document;var yt=!!U.documentElement&&!!U.head&&typeof U.addEventListener=="function"&&typeof U.createElement=="function",Nm=~Ac.indexOf("MSIE")||~Ac.indexOf("Trident/"),Ra,Ia,La,Ta,ja,pt="___FONT_AWESOME___",Ml=16,Rm="fa",Im="svg-inline--fa",pn="data-fa-i2svg",Dl="data-fa-pseudo-element",H0="data-fa-pseudo-element-pending",Js="data-prefix",$s="data-icon",Nc="fontawesome-i2svg",J0="async",$0=["HTML","HEAD","STYLE","SCRIPT"],Lm=function(){try{return!0}catch{return!1}}(),V="classic",Q="sharp",Qs=[V,Q];function ia(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Xr=ia((Ra={},ie(Ra,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(Ra,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ra)),Zr=ia((Ia={},ie(Ia,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(Ia,Q,{solid:"fass",regular:"fasr",light:"fasl"}),Ia)),Hr=ia((La={},ie(La,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(La,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),La)),Q0=ia((Ta={},ie(Ta,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(Ta,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ta)),K0=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Tm="fa-layers-text",q0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ev=ia((ja={},ie(ja,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(ja,Q,{900:"fass",400:"fasr",300:"fasl"}),ja)),jm=[1,2,3,4,5,6,7,8,9,10],tv=jm.concat([11,12,13,14,15,16,17,18,19,20]),nv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],an={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jr=new Set;Object.keys(Zr[V]).map(Jr.add.bind(Jr));Object.keys(Zr[Q]).map(Jr.add.bind(Jr));var rv=[].concat(Qs,aa(Jr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",an.GROUP,an.SWAP_OPACITY,an.PRIMARY,an.SECONDARY]).concat(jm.map(function(e){return"".concat(e,"x")})).concat(tv.map(function(e){return"w-".concat(e)})),Pr=Gt.FontAwesomeConfig||{};function av(e){var t=U.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function iv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(U&&typeof U.querySelector=="function"){var ov=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ov.forEach(function(e){var t=Zs(e,2),n=t[0],r=t[1],a=iv(av(n));a!=null&&(Pr[r]=a)})}var Fm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rm,replacementClass:Im,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pr.familyPrefix&&(Pr.cssPrefix=Pr.familyPrefix);var Qn=A(A({},Fm),Pr);Qn.autoReplaceSvg||(Qn.observeMutations=!1);var R={};Object.keys(Fm).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Qn[e]=n,Ar.forEach(function(r){return r(R)})},get:function(){return Qn[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Qn.cssPrefix=t,Ar.forEach(function(n){return n(R)})},get:function(){return Qn.cssPrefix}});Gt.FontAwesomeConfig=R;var Ar=[];function lv(e){return Ar.push(e),function(){Ar.splice(Ar.indexOf(e),1)}}var bt=Ml,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sv(e){if(!(!e||!yt)){var t=U.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=U.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return U.head.insertBefore(t,r),e}}var uv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $r(){for(var e=12,t="";e-- >0;)t+=uv[Math.random()*62|0];return t}function nr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ks(e){return e.classList?nr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cv(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mm(e[n]),'" ')},"").trim()}function $i(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qs(e){return e.size!==tt.size||e.x!==tt.x||e.y!==tt.y||e.rotate!==tt.rotate||e.flipX||e.flipY}function fv(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function dv(e){var t=e.transform,n=e.width,r=n===void 0?Ml:n,a=e.height,i=a===void 0?Ml:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Nm?s+="translate(".concat(t.x/bt-r/2,"em, ").concat(t.y/bt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/bt,"em), calc(-50% + ").concat(t.y/bt,"em)) "):s+="translate(".concat(t.x/bt,"em, ").concat(t.y/bt,"em) "),s+="scale(".concat(t.size/bt*(t.flipX?-1:1),", ").concat(t.size/bt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var mv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Dm(){var e=Rm,t=Im,n=R.cssPrefix,r=R.replacementClass,a=mv;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Rc=!1;function Lo(){R.autoAddCss&&!Rc&&(sv(Dm()),Rc=!0)}var pv={mixout:function(){return{dom:{css:Dm,insertCss:Lo}}},hooks:function(){return{beforeDOMElementCreation:function(){Lo()},beforeI2svg:function(){Lo()}}}},ht=Gt||{};ht[pt]||(ht[pt]={});ht[pt].styles||(ht[pt].styles={});ht[pt].hooks||(ht[pt].hooks={});ht[pt].shims||(ht[pt].shims=[]);var Ue=ht[pt],zm=[],hv=function e(){U.removeEventListener("DOMContentLoaded",e),Ai=1,zm.map(function(t){return t()})},Ai=!1;yt&&(Ai=(U.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(U.readyState),Ai||U.addEventListener("DOMContentLoaded",hv));function vv(e){yt&&(Ai?setTimeout(e,0):zm.push(e))}function oa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Mm(e):"<".concat(t," ").concat(cv(r),">").concat(i.map(oa).join(""),"</").concat(t,">")}function Ic(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gv=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},To=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?gv(n,a):n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function yv(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function zl(e){var t=yv(e);return t.length===1?t[0].toString(16):null}function wv(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Lc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ol(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Lc(t);typeof Ue.hooks.addPack=="function"&&!a?Ue.hooks.addPack(e,Lc(t)):Ue.styles[e]=A(A({},Ue.styles[e]||{}),i),e==="fas"&&Ol("fa",t)}var Fa,Ma,Da,jn=Ue.styles,bv=Ue.shims,kv=(Fa={},ie(Fa,V,Object.values(Hr[V])),ie(Fa,Q,Object.values(Hr[Q])),Fa),eu=null,Om={},Wm={},Bm={},Gm={},Vm={},_v=(Ma={},ie(Ma,V,Object.keys(Xr[V])),ie(Ma,Q,Object.keys(Xr[Q])),Ma);function Sv(e){return~rv.indexOf(e)}function xv(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Sv(a)?a:null}var Ym=function(){var t=function(i){return To(jn,function(o,l,s){return o[s]=To(l,i,{}),o},{})};Om=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),Wm=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),Vm=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in jn||R.autoFetchSvg,r=To(bv,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});Bm=r.names,Gm=r.unicodes,eu=Qi(R.styleDefault,{family:R.familyDefault})};lv(function(e){eu=Qi(e.styleDefault,{family:R.familyDefault})});Ym();function tu(e,t){return(Om[e]||{})[t]}function Cv(e,t){return(Wm[e]||{})[t]}function on(e,t){return(Vm[e]||{})[t]}function Um(e){return Bm[e]||{prefix:null,iconName:null}}function Pv(e){var t=Gm[e],n=tu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Vt(){return eu}var nu=function(){return{prefix:null,iconName:null,rest:[]}};function Qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Xr[r][e],i=Zr[r][e]||Zr[r][a],o=e in Ue.styles?e:null;return i||o||null}var Tc=(Da={},ie(Da,V,Object.keys(Hr[V])),ie(Da,Q,Object.keys(Hr[Q])),Da);function Ki(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,V,"".concat(R.cssPrefix,"-").concat(V)),ie(t,Q,"".concat(R.cssPrefix,"-").concat(Q)),t),o=null,l=V;(e.includes(i[V])||e.some(function(u){return Tc[V].includes(u)}))&&(l=V),(e.includes(i[Q])||e.some(function(u){return Tc[Q].includes(u)}))&&(l=Q);var s=e.reduce(function(u,f){var m=xv(R.cssPrefix,f);if(jn[f]?(f=kv[l].includes(f)?Q0[l][f]:f,o=f,u.prefix=f):_v[l].indexOf(f)>-1?(o=f,u.prefix=Qi(f,{family:l})):m?u.iconName=m:f!==R.replacementClass&&f!==i[V]&&f!==i[Q]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var h=o==="fa"?Um(u.iconName):{},v=on(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||v||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!jn.far&&jn.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},nu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===Q&&(jn.fass||R.autoFetchSvg)&&(s.prefix="fass",s.iconName=on(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Vt()||"fas"),s}var Av=function(){function e(){O0(this,e),this.definitions={}}return W0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=A(A({},n.definitions[l]||{}),o[l]),Ol(l,o[l]);var s=Hr[V][l];s&&Ol(s,o[l]),Ym()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[l][m]=u)}),n[l][s]=u}),n}}]),e}(),jc=[],Fn={},Vn={},Ev=Object.keys(Vn);function Nv(e,t){var n=t.mixoutsTo;return jc=e,Fn={},Object.keys(Vn).forEach(function(r){Ev.indexOf(r)===-1&&delete Vn[r]}),jc.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Pi(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Fn[o]||(Fn[o]=[]),Fn[o].push(i[o])})}r.provides&&r.provides(Vn)}),n}function Wl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Fn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function hn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Fn[e]||[];a.forEach(function(i){i.apply(null,n)})}function vt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vn[e]?Vn[e].apply(null,t):void 0}function Bl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Vt();if(t)return t=on(n,t)||t,Ic(Xm.definitions,n,t)||Ic(Ue.styles,n,t)}var Xm=new Av,Rv=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,hn("noAuto")},Iv={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return yt?(hn("beforeI2svg",t),vt("pseudoElements2svg",t),vt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,vv(function(){Tv({autoReplaceSvgRoot:n}),hn("watch",t)})}},Lv={icon:function(t){if(t===null)return null;if(Pi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:on(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Qi(t[0]);return{prefix:r,iconName:on(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(K0))){var a=Ki(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Vt(),iconName:on(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Vt();return{prefix:i,iconName:on(i,t)||t}}}},Le={noAuto:Rv,config:R,dom:Iv,parse:Lv,library:Xm,findIconDefinition:Bl,toHtml:oa},Tv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?U:n;(Object.keys(Ue.styles).length>0||R.autoFetchSvg)&&yt&&R.autoReplaceSvg&&Le.dom.i2svg({node:r})};function qi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return oa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(yt){var r=U.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function jv(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(qs(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=$i(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Fv(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function ru(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,m=e.extra,h=e.watchable,v=h===void 0?!1:h,y=r.found?r:n,g=y.width,k=y.height,d=a==="fak",c=[R.replacementClass,i?"".concat(R.cssPrefix,"-").concat(i):""].filter(function(O){return m.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(m.classes).join(" "),p={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(k)})},w=d&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/k*16*.0625,"em")}:{};v&&(p.attributes[pn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||$r())},children:[s]}),delete p.attributes.title);var _=A(A({},p),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:A(A({},w),m.styles)}),C=r.found&&n.found?vt("generateAbstractMask",_)||{children:[],attributes:{}}:vt("generateAbstractIcon",_)||{children:[],attributes:{}},P=C.children,I=C.attributes;return _.children=P,_.attributes=I,l?Fv(_):jv(_)}function Fc(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[pn]="");var f=A({},o.styles);qs(a)&&(f.transform=dv({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=$i(f);m.length>0&&(u.style=m);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Mv(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=$i(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jo=Ue.styles;function Gl(e){var t=e[0],n=e[1],r=e.slice(4),a=Zs(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(an.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(an.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(an.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Dv={found:!1,width:512,height:512};function zv(e,t){!Lm&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vl(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=Vt()),new Promise(function(r,a){if(vt("missingIconAbstract"),n==="fa"){var i=Um(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&jo[t]&&jo[t][e]){var o=jo[t][e];return r(Gl(o))}zv(e,t),r(A(A({},Dv),{},{icon:R.showMissingIcons&&e?vt("missingIconAbstract")||{}:{}}))})}var Mc=function(){},Yl=R.measurePerformance&&Na&&Na.mark&&Na.measure?Na:{mark:Mc,measure:Mc},vr='FA "6.4.2"',Ov=function(t){return Yl.mark("".concat(vr," ").concat(t," begins")),function(){return Zm(t)}},Zm=function(t){Yl.mark("".concat(vr," ").concat(t," ends")),Yl.measure("".concat(vr," ").concat(t),"".concat(vr," ").concat(t," begins"),"".concat(vr," ").concat(t," ends"))},au={begin:Ov,end:Zm},$a=function(){};function Dc(e){var t=e.getAttribute?e.getAttribute(pn):null;return typeof t=="string"}function Wv(e){var t=e.getAttribute?e.getAttribute(Js):null,n=e.getAttribute?e.getAttribute($s):null;return t&&n}function Bv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function Gv(){if(R.autoReplaceSvg===!0)return Qa.replace;var e=Qa[R.autoReplaceSvg];return e||Qa.replace}function Vv(e){return U.createElementNS("http://www.w3.org/2000/svg",e)}function Yv(e){return U.createElement(e)}function Hm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vv:Yv:n;if(typeof e=="string")return U.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Hm(o,{ceFn:r}))}),a}function Uv(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Qa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Hm(a),n)}),n.getAttribute(pn)===null&&R.keepOriginalSource){var r=U.createComment(Uv(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ks(n).indexOf(R.replacementClass))return Qa.replace(t);var a=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===R.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return oa(l)}).join(`
`);n.setAttribute(pn,""),n.innerHTML=o}};function zc(e){e()}function Jm(e,t){var n=typeof t=="function"?t:$a;if(e.length===0)n();else{var r=zc;R.mutateApproach===J0&&(r=Gt.requestAnimationFrame||zc),r(function(){var a=Gv(),i=au.begin("mutate");e.map(a),i(),n()})}}var iu=!1;function $m(){iu=!0}function Ul(){iu=!1}var Ei=null;function Oc(e){if(Ec&&R.observeMutations){var t=e.treeCallback,n=t===void 0?$a:t,r=e.nodeCallback,a=r===void 0?$a:r,i=e.pseudoElementsCallback,o=i===void 0?$a:i,l=e.observeMutationsRoot,s=l===void 0?U:l;Ei=new Ec(function(u){if(!iu){var f=Vt();nr(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Dc(m.addedNodes[0])&&(R.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&R.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Dc(m.target)&&~nv.indexOf(m.attributeName))if(m.attributeName==="class"&&Wv(m.target)){var h=Ki(Ks(m.target)),v=h.prefix,y=h.iconName;m.target.setAttribute(Js,v||f),y&&m.target.setAttribute($s,y)}else Bv(m.target)&&a(m.target)})}}),yt&&Ei.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xv(){Ei&&Ei.disconnect()}function Zv(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Hv(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ki(Ks(e));return a.prefix||(a.prefix=Vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Cv(a.prefix,e.innerText)||tu(a.prefix,zl(e.innerText))),!a.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Jv(e){var t=nr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||$r()):(t["aria-hidden"]="true",t.focusable="false")),t}function $v(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hv(e),r=n.iconName,a=n.prefix,i=n.rest,o=Jv(e),l=Wl("parseNodeAttributes",{},e),s=t.styleParser?Zv(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var Qv=Ue.styles;function Qm(e){var t=R.autoReplaceSvg==="nest"?Wc(e,{styleParser:!1}):Wc(e);return~t.extra.classes.indexOf(Tm)?vt("generateLayersText",e,t):vt("generateSvgReplacementMutation",e,t)}var Yt=new Set;Qs.map(function(e){Yt.add("fa-".concat(e))});Object.keys(Xr[V]).map(Yt.add.bind(Yt));Object.keys(Xr[Q]).map(Yt.add.bind(Yt));Yt=aa(Yt);function Bc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!yt)return Promise.resolve();var n=U.documentElement.classList,r=function(m){return n.add("".concat(Nc,"-").concat(m))},a=function(m){return n.remove("".concat(Nc,"-").concat(m))},i=R.autoFetchSvg?Yt:Qs.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Qv));i.includes("fa")||i.push("fa");var o=[".".concat(Tm,":not([").concat(pn,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(pn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=nr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=au.begin("onTree"),u=l.reduce(function(f,m){try{var h=Qm(m);h&&f.push(h)}catch(v){Lm||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,m){Promise.all(u).then(function(h){Jm(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),m(h)})})}function Kv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qm(e).then(function(n){n&&Jm([n],t)})}function qv(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Bl(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Bl(a||{})),e(r,A(A({},n),{},{mask:a}))}}var eg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?tt:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,m=n.title,h=m===void 0?null:m,v=n.titleId,y=v===void 0?null:v,g=n.classes,k=g===void 0?[]:g,d=n.attributes,c=d===void 0?{}:d,p=n.styles,w=p===void 0?{}:p;if(t){var _=t.prefix,C=t.iconName,P=t.icon;return qi(A({type:"icon"},t),function(){return hn("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(h?c["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(y||$r()):(c["aria-hidden"]="true",c.focusable="false")),ru({icons:{main:Gl(P),mask:s?Gl(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:C,transform:A(A({},tt),a),symbol:o,title:h,maskId:f,titleId:y,extra:{attributes:c,styles:w,classes:k}})})}},tg={mixout:function(){return{icon:qv(eg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bc,n.nodeCallback=Kv,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?U:r,i=n.callback,o=i===void 0?function(){}:i;return Bc(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,m=r.maskId,h=r.extra;return new Promise(function(v,y){Promise.all([Vl(a,l),f.iconName?Vl(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var k=Zs(g,2),d=k[0],c=k[1];v([n,ru({icons:{main:d,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=$i(l);s.length>0&&(a.style=s);var u;return qs(o)&&(u=vt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},ng={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qi({type:"layer"},function(){hn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(aa(i)).join(" ")},children:o}]})}}}},rg={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,m=f===void 0?{}:f;return qi({type:"counter",content:n},function(){return hn("beforeDOMElementCreation",{content:n,params:r}),Mv({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(aa(l))}})})}}}},ag={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?tt:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,m=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return qi({type:"text",content:n},function(){return hn("beforeDOMElementCreation",{content:n,params:r}),Fc({content:n,transform:A(A({},tt),i),title:l,extra:{attributes:m,styles:v,classes:["".concat(R.cssPrefix,"-layers-text")].concat(aa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Nm){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return R.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fc({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},ig=new RegExp('"',"ug"),Gc=[1105920,1112319];function og(e){var t=e.replace(ig,""),n=wv(t,0),r=n>=Gc[0]&&n<=Gc[1],a=t.length===2?t[0]===t[1]:!1;return{value:zl(a?t[0]:t),isSecondary:r||a}}function Vc(e,t){var n="".concat(H0).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=nr(e.children),o=i.filter(function(P){return P.getAttribute(Dl)===t})[0],l=Gt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(q0),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var m=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?Q:V,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Zr[h][s[2].toLowerCase()]:ev[h][u],y=og(m),g=y.value,k=y.isSecondary,d=s[0].startsWith("FontAwesome"),c=tu(v,g),p=c;if(d){var w=Pv(g);w.iconName&&w.prefix&&(c=w.iconName,v=w.prefix)}if(c&&!k&&(!o||o.getAttribute(Js)!==v||o.getAttribute($s)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var _=$v(),C=_.extra;C.attributes[Dl]=t,Vl(c,v).then(function(P){var I=ru(A(A({},_),{},{icons:{main:P,mask:nu()},prefix:v,iconName:p,extra:C,watchable:!0})),O=U.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=I.map(function(j){return oa(j)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function lg(e){return Promise.all([Vc(e,"::before"),Vc(e,"::after")])}function sg(e){return e.parentNode!==document.head&&!~$0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yc(e){if(yt)return new Promise(function(t,n){var r=nr(e.querySelectorAll("*")).filter(sg).map(lg),a=au.begin("searchPseudoElements");$m(),Promise.all(r).then(function(){a(),Ul(),t()}).catch(function(){a(),Ul(),n()})})}var ug={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?U:r;R.searchPseudoElements&&Yc(a)}}},Uc=!1,cg={mixout:function(){return{dom:{unwatch:function(){$m(),Uc=!0}}}},hooks:function(){return{bootstrap:function(){Oc(Wl("mutationObserverCallbacks",{}))},noAuto:function(){Xv()},watch:function(n){var r=n.observeMutationsRoot;Uc?Ul():Oc(Wl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},fg={mixout:function(){return{parse:{transform:function(n){return Xc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Xc(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:l,inner:m,path:h};return{tag:"g",attributes:A({},v.outer),children:[{tag:"g",attributes:A({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),v.path)}]}]}}}},Fo={x:0,y:0,width:"100%",height:"100%"};function Zc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function dg(e){return e.tag==="g"?e.children:[e]}var mg={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Ki(a.split(" ").map(function(o){return o.trim()})):nu();return i.prefix||(i.prefix=Vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,m=o.width,h=o.icon,v=fv({transform:s,containerWidth:m,iconWidth:u}),y={tag:"rect",attributes:A(A({},Fo),{},{fill:"white"})},g=f.children?{children:f.children.map(Zc)}:{},k={tag:"g",attributes:A({},v.inner),children:[Zc(A({tag:f.tag,attributes:A(A({},f.attributes),v.path)},g))]},d={tag:"g",attributes:A({},v.outer),children:[k]},c="mask-".concat(l||$r()),p="clip-".concat(l||$r()),w={tag:"mask",attributes:A(A({},Fo),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,d]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:dg(h)},w]};return r.push(_,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},Fo)}),{children:r,attributes:a}}}},pg={provides:function(t){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hg={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},vg=[pv,tg,ng,rg,ag,ug,cg,fg,mg,pg,hg];Nv(vg,{mixoutsTo:Le});Le.noAuto;Le.config;Le.library;Le.dom;var Xl=Le.parse;Le.findIconDefinition;Le.toHtml;var gg=Le.icon;Le.layer;Le.text;Le.counter;var Km={exports:{}},yg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wg=yg,bg=wg;function qm(){}function ep(){}ep.resetWarningCache=qm;var kg=function(){function e(r,a,i,o,l,s){if(s!==bg){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ep,resetWarningCache:qm};return n.PropTypes=n,n};Km.exports=kg();var _g=Km.exports;const M=Qc(_g);function Hc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hc(Object(n),!0).forEach(function(r){Mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sg(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function xg(e,t){if(e==null)return{};var n=Sg(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zl(e){return Cg(e)||Pg(e)||Ag(e)||Eg()}function Cg(e){if(Array.isArray(e))return Hl(e)}function Pg(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ag(e,t){if(e){if(typeof e=="string")return Hl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hl(e,t)}}function Hl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Eg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ng(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,m=e.pulse,h=e.fixedWidth,v=e.inverse,y=e.border,g=e.listItem,k=e.flip,d=e.size,c=e.rotation,p=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":h,"fa-inverse":v,"fa-border":y,"fa-li":g,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Mn(t,"fa-".concat(d),typeof d<"u"&&d!==null),Mn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Mn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(_){return w[_]?_:null}).filter(function(_){return _})}function Rg(e){return e=e-0,e===e}function tp(e){return Rg(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ig=["style"];function Lg(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Tg(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=tp(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Lg(a)]=i:t[a]=i,t},{})}function np(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return np(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=Tg(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[tp(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=xg(n,Ig);return a.attrs.style=Nt(Nt({},a.attrs.style),o),e.apply(void 0,[t.tag,Nt(Nt({},a.attrs),l)].concat(Zl(r)))}var rp=!1;try{rp=!0}catch{}function jg(){if(!rp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jc(e){if(e&&Ni(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xl.icon)return Xl.icon(e);if(e===null)return null;if(e&&Ni(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Mo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var De=Ii.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Jc(n),f=Mo("classes",[].concat(Zl(Ng(e)),Zl(i.split(" ")))),m=Mo("transform",typeof e.transform=="string"?Xl.transform(e.transform):e.transform),h=Mo("mask",Jc(r)),v=gg(u,Nt(Nt(Nt(Nt({},f),m),h),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!v)return jg("Could not find icon",u),null;var y=v.abstract,g={ref:t};return Object.keys(e).forEach(function(k){De.defaultProps.hasOwnProperty(k)||(g[k]=e[k])}),Fg(y[0],g)});De.displayName="FontAwesomeIcon";De.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};De.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Fg=np.bind(null,Ii.createElement),Mg={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Dg=Mg,zg={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Og={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Wg={prefix:"fas",iconName:"envelope-open",icon:[512,512,[62135],"f2b6","M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"]},Bg={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},ou={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Gg={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"]},Vg=Gg,Yg={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"]},Ug={prefix:"fas",iconName:"trash-arrow-up",icon:[448,512,["trash-restore"],"f829","M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"]},ap=Ug,Xg={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};const Zg="_asideMenu_1k40q_1",Hg="_menuItems_1k40q_9",Jg="_menuItem_1k40q_9",$g="_itemComposeButton_1k40q_27",Qg="_itemLink_1k40q_37",Kg="_title_1k40q_53",qg="_itemLinkSelected_1k40q_57",Rt={asideMenu:Zg,menuItems:Hg,menuItem:Jg,itemComposeButton:$g,itemLink:Qg,title:Kg,itemLinkSelected:qg},e2=[{to:"/inbox",name:"Inbox",icon:Yg},{to:"/starred",name:"Starred",icon:Og},{to:"/sent",name:"Sent",icon:Xg},{to:"/drafts",name:"Drafts",icon:Dg},{to:"/trash",name:"Trash",icon:ou}];function t2({to:e,name:t,icon:n,selected:r,expanded:a}){return b.jsx("li",{className:`${Rt.menuItem} ${Rt.itemLink} ${r?Rt.itemLinkSelected:""}`,children:b.jsxs(xm,{to:e,title:t,children:[b.jsx(De,{icon:n})," ",a&&b.jsx("span",{className:Rt.title,children:t})]})})}function n2({expanded:e}){const[t,n]=Ji(),{pathname:r}=Je();function a(){n({compose:"new"})}return b.jsxs("aside",{className:Rt.asideMenu,children:[b.jsxs("button",{className:`${Rt.menuItem} ${Rt.itemComposeButton}`,onClick:a,children:[b.jsx(De,{icon:Bg})," ",b.jsx("span",{children:"Compose"})]}),b.jsx("ul",{className:Rt.menuItems,children:e2.map(i=>b.jsx(t2,{to:i.to,name:i.name,icon:i.icon,selected:r===i.to,expanded:e},i.name))})]})}let r2="alexbol99@gmail.com";const ip={currentUser:r2},$c={makeId:a2,saveToStorage:i2,loadFromStorage:o2};function a2(e=5){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function i2(e,t){localStorage.setItem(e,JSON.stringify(t))}function o2(e,t=null){var n=localStorage[e]||t;return JSON.parse(n)}const la={query:sa,get:l2,post:s2,put:u2,remove:c2};function sa(e,t=200){let n=JSON.parse(localStorage.getItem(e))||[];return new Promise(r=>setTimeout(()=>r(n),t))}function l2(e,t){return sa(e).then(n=>{const r=n.find(a=>a.id===t);if(!r)throw new Error(`Get failed, cannot find entity with id: ${t} in: ${e}`);return r})}function s2(e,t){return t={...t},t.id=$c.makeId(6),sa(e).then(n=>(n.push(t),$c.saveToStorage(e,n),t))}function u2(e,t){return sa(e).then(n=>{const r=n.findIndex(a=>a.id===t.id);if(r<0)throw new Error(`Update failed, cannot find entity with id: ${t.id} in: ${e}`);return n.splice(r,1,t),op(e,n),t})}function c2(e,t){return sa(e).then(n=>{const r=n.findIndex(a=>a.id===t);if(r<0)throw new Error(`Remove failed, cannot find entity with id: ${t} in: ${e}`);n.splice(r,1),op(e,n)})}function op(e,t){localStorage.setItem(e,JSON.stringify(t))}const Kn={get:f2,create:d2,update:h2,remove:p2,getById:m2},ua="mails";async function f2(){return await la.query(ua)}async function d2(e){return await la.post(ua,e)}async function m2(e){return await la.get(ua,e)}async function p2(e){return await la.remove(ua,e)}async function h2(e){return await la.put(ua,e)}const Do=10,lp={pathname:"/inbox",pageNum:0,filter:""},sp={date:!0,dateSortAscending:!1,subject:!1,subjectSortAscending:!0},qe={query:v2,remove:b2,getById:g2,create:y2,update:w2,defaultSortBy:sp,defaultFilterBy:lp};async function v2(e=lp,t=sp){let n=await Kn.get(),r=k2(n,e.pathname);if(r.length===0)return[];let a=_2(r,e.pageNum),i=x2(r,t);return i=S2(i,a),i=N2(i,e.filter),[i,a]}async function g2(e){let n={...await Kn.getById(e),isViewed:!0};return await Kn.update(n),n}function y2(e=R2()){return Kn.create(e)}function w2(e){return Kn.update(e)}function b2(e){return Kn.remove(e)}function k2(e,t){const n=ip.currentUser;let r;switch(t){case"/inbox":r=e.filter(a=>a.To===n&&!a.isDeleted);break;case"/starred":r=e.filter(a=>a.isStarred&&!a.isDeleted);break;case"/sent":r=e.filter(a=>a.From===n&&!a.isDraft&&!a.isDeleted);break;case"/drafts":r=e.filter(a=>a.From===n&&a.isDraft&&!a.isDeleted);break;case"/trash":r=e.filter(a=>a.isDeleted);break;default:r=e.filter(a=>a.To===n&&!a.isDeleted);break}return r}function _2(e,t){const n=Do*t,r=Math.min(Do*(t+1),e.length);return{start:n,end:r,total:e.length,isLastPage:n+Do>=e.length}}function S2(e,t){return e.slice(t.start,t.end)}function x2(e,t){let n;return t.date&&(n=t.dateSortAscending?C2:P2),t.subject&&(n=t.subjectSortAscending?A2:E2),e.sort(n)}function C2(e,t){return new Date(e.Date)-new Date(t.Date)}function P2(e,t){return new Date(t.Date)-new Date(e.Date)}function A2(e,t){return e.Subject<t.Subject?1:t.Subject<e.Subject?-1:0}function E2(e,t){return e.Subject<t.Subject?-1:t.Subject<e.Subject?1:0}function N2(e,t){return e.filter(n=>n.To.includes(t)||n.From.includes(t)||n.Body.includes(t))}function R2(e="",t="",n=""){return{id:null,Date:new Date().toLocaleString(),From:ip.currentUser,To:e,CC:"",Subject:t,Body:n,Attachments:"","Attachments Path":"",isDraft:!0,isViewed:!0,isStarred:!1,isDeleted:!1}}const Kt={"email-compose":"_email-compose_1ql9s_2","compose-popup":"_compose-popup_1ql9s_12","compose-popup-title":"_compose-popup-title_1ql9s_19","compose-input":"_compose-input_1ql9s_23","compose-textarea":"_compose-textarea_1ql9s_31","send-button":"_send-button_1ql9s_43"};function I2({saveUpdatedMail:e}){const[t,n]=x.useState(null),[r,a]=x.useState(!0),{pathname:i}=Je(),o=ra(),[l,s]=Ji(),u=x.useRef(t),f=l.get("compose");x.useEffect(()=>{const k=setInterval(()=>{e(u.current)},5e3);return()=>clearInterval(k)},[]),x.useEffect(()=>{u.current=t},[t]),x.useEffect(()=>(f==="new"?m():h(f),()=>{e(u.current)}),[f]),x.useEffect(()=>{r||o(i)},[r]);async function m(){try{const k=await qe.create();k.id&&n(k)}catch(k){console.log(k.message),o(i)}}async function h(k){try{const d=await qe.getById(k);n(d)}catch(d){console.log(d.message),o(i)}}async function v(k){try{await qe.update(k)}catch(d){console.log(d.message),o(i)}}function y(k){let{value:d,name:c}=k.target;n(p=>({...p,[c]:d}))}async function g(k){k.preventDefault(),await v({...t,Date:new Date().toLocaleString(),isDraft:!1}),n(d=>({...d,Date:new Date().toLocaleString(),isDraft:!1})),a(!1)}return t?b.jsx("div",{className:Kt["email-compose"],children:b.jsxs("div",{className:Kt["compose-popup"],children:[b.jsx("h2",{className:Kt["compose-popup-title"],children:f==="new"?"New Message":t.Subject}),b.jsxs("form",{onSubmit:g,children:[b.jsx("label",{htmlFor:"To",children:"To:"}),b.jsx("input",{type:"text",id:"To",name:"To",className:Kt["compose-input"],placeholder:"Recipient",onChange:y,value:t.To}),b.jsx("label",{htmlFor:"Subject",children:"Subject:"}),b.jsx("input",{type:"text",id:"Subject",name:"Subject",className:Kt["compose-input"],placeholder:"Subject",onChange:y,value:t.Subject,dir:"auto"}),b.jsx("textarea",{id:"Body",name:"Body",className:Kt["compose-textarea"],placeholder:"Compose your message...",onChange:y,value:t.Body,dir:"auto"}),b.jsx("button",{className:Kt["send-button"],children:"Send"})]})]})}):b.jsx("div",{children:'"Loading mail"'})}const L2="_appHeader_klehz_1",T2="_logoSection_klehz_13",j2="_mainMenuButton_klehz_20",F2="_active_klehz_24",M2="_logo_klehz_13",D2="_searchBox_klehz_35",z2="_breadcrumbs_klehz_42",kn={appHeader:L2,logoSection:T2,mainMenuButton:j2,active:F2,logo:M2,searchBox:D2,breadcrumbs:z2};function O2({setContextFilter:e,toggleExpandMenu:t}){const{pathname:n}=Je();return b.jsxs("header",{className:kn.appHeader,children:[b.jsxs("section",{className:kn.logoSection,children:[b.jsx("button",{className:kn.mainMenuButton,title:"Shrink/expand menu",onClick:t,children:b.jsx(De,{icon:zg})}),b.jsx(xm,{to:n,children:b.jsx("h1",{className:kn.logo,children:"MisterEmail"})})]}),b.jsx("input",{type:"text",className:kn.searchBox,placeholder:"Start typing to search ...",onChange:e}),b.jsxs("section",{className:kn.breadcrumbs,children:[b.jsx("a",{href:"#",children:"Help"}),b.jsx("a",{href:"#",children:"Settings"}),b.jsx("a",{href:"#",children:"User"})]})]})}const W2="_emailIndex_ig6jg_3",B2="_expanded_ig6jg_12",G2="_shrunk_ig6jg_15",zo={emailIndex:W2,expanded:B2,shrunk:G2},V2="_emailDetailsContainer_zi5uz_2",Y2="_header_zi5uz_13",U2="_goBackButton_zi5uz_19",X2="_horizontalMenu_zi5uz_23",Z2="_actionButton_zi5uz_31",H2="_subject_zi5uz_37",J2="_from_zi5uz_42",$2="_date_zi5uz_47",Q2="_content_zi5uz_52",K2="_attachments_zi5uz_62",Qe={emailDetailsContainer:V2,header:Y2,goBackButton:U2,horizontalMenu:X2,actionButton:Z2,subject:H2,from:J2,date:$2,content:Q2,attachments:K2};function q2({id:e,saveUpdatedMail:t}){const[n,r]=x.useState(null),{pathname:a}=Je(),i=ra();x.useEffect(()=>{o()},[]);async function o(){try{const u=await qe.getById(e);r(u)}catch(u){console.error(u.message),i(a.slice(0,a.indexOf(e)-1))}}async function l(){await t({...n,isViewed:!n.isViewed}),i(a.slice(0,a.indexOf(e)-1))}function s(u){t({...u,isDeleted:!u.isDeleted})}return n?b.jsxs("div",{className:Qe.emailDetailsContainer,children:[b.jsx("header",{className:Qe.header,children:b.jsxs("nav",{className:"breadcrumbs",children:[b.jsx("button",{className:"back-button",title:"Back to the previous page",onClick:()=>i(a.slice(0,a.indexOf(e)-1)),children:b.jsx(De,{icon:Vg})}),b.jsx("button",{className:Qe.actionButton,title:n.isDeleted?"Restore from trash folder":"Move to trash folder",onClick:()=>s(n),children:b.jsx(De,{icon:n.isDeleted?ap:ou})}),b.jsx("button",{className:Qe.actionButton,title:"Mark as unread",onClick:()=>l(),children:b.jsx(De,{icon:Wg})})]})}),b.jsx("h2",{className:Qe.subject,dir:"auto",children:n==null?void 0:n.Subject}),b.jsx("p",{className:Qe.from,children:n==null?void 0:n.From}),b.jsx("div",{className:Qe.date,children:n==null?void 0:n.Date}),b.jsx("p",{className:Qe.content,dir:"auto",children:n==null?void 0:n.Body}),b.jsx("section",{className:Qe.attachments})]}):b.jsx("div",{className:Qe.emailDetailsContainer,children:"Loading mail details"})}const ey="_pagination_by6k3_16",at={"list-header":"_list-header_by6k3_1","sort-button":"_sort-button_by6k3_8",pagination:ey,"pagination-button":"_pagination-button_by6k3_20","horizontal-menu":"_horizontal-menu_by6k3_29","action-button":"_action-button_by6k3_37","select-all-checkbox":"_select-all-checkbox_by6k3_48","delete-selected-items":"_delete-selected-items_by6k3_48","restore-selected-items":"_restore-selected-items_by6k3_48"};function ty({mails:e,pathname:t,paginationParams:n,toggleSelectAll:r,toggleSelectedItemsAreDeleted:a,deleteSelectedItems:i,onPrevPageButtonClick:o,onNextPageButtonClick:l,toggleSortByDate:s,toggleSortBySubject:u}){return b.jsxs("header",{className:at["list-header"],children:[b.jsx("input",{type:"checkbox",className:at["select-all-checkbox"],onClick:f=>r(f.target.checked)}),b.jsx("button",{className:at["delete-selected-items"],onClick:t==="/trash"?i:a,title:t==="/trash"?"Completely delete selected mails":"Move selected mails to Trash folder",children:b.jsx(De,{icon:ou})}),t==="/trash"&&b.jsx("button",{className:at["restore-selected-items"],onClick:a,title:"Restore selected mails from Trash folder",children:b.jsx(De,{icon:ap})}),b.jsx("button",{className:at["sort-button"],title:"Sort by date",onClick:s,children:"Sort By Date"}),b.jsx("button",{className:at["sort-button"],title:"Sort by subject",onClick:u,children:"Sort By Subject"}),n&&e.length>0&&b.jsx("div",{className:at.pagination,children:`${n.start+1}-${n.end} of ${n.total}`}),n&&e.length>0&&b.jsx("button",{className:at["pagination-button"],onClick:()=>o(),children:"‹"}),n&&e.length>0&&b.jsx("button",{className:at["pagination-button"],onClick:()=>l(),children:"›"})]})}const ny="_emailPreviewContainer_1qlm0_1",ry="_asideIcons_1qlm0_7",ay="_emailPreviewItem_1qlm0_12",iy="_emailPreviewItemUnread_1qlm0_29",oy="_emailPreviewSelectCheckbox_1qlm0_34",ly="_emailPreviewStar_1qlm0_39",sy="_emailPreviewStarUnchecked_1qlm0_44",uy="_emailPreviewStarChecked_1qlm0_51",cy="_emailPreviewItemFrom_1qlm0_59",fy="_emailPreviewItemContent_1qlm0_63",dy="_emailPreviewItemDate_1qlm0_67",Be={emailPreviewContainer:ny,asideIcons:ry,emailPreviewItem:ay,emailPreviewItemUnread:iy,emailPreviewSelectCheckbox:oy,emailPreviewStar:ly,emailPreviewStarUnchecked:sy,emailPreviewStarChecked:uy,emailPreviewItemFrom:cy,emailPreviewItemContent:fy,emailPreviewItemDate:dy};function my({pathname:e,mail:t,isSelected:n,saveUpdatedMail:r,toggleIsSelected:a}){const i=ra(),[o,l]=Ji();function s(h){r({...h,isViewed:!h.isViewed}),e==="/drafts"?l({compose:h.id}):i(`${h.id}`)}function u(h){r({...h,isStarred:!h.isStarred})}const f=t.isViewed?"":Be.emailPreviewItemUnread,m=t.isStarred?Be.emailPreviewStarChecked:Be.emailPreviewStarUnchecked;return b.jsxs("div",{className:Be.emailPreviewContainer,children:[b.jsxs("div",{className:Be.asideIcons,children:[b.jsx("input",{className:Be.emailPreviewSelectCheckbox,type:"checkbox",onChange:()=>a(t),checked:n}),b.jsx("span",{className:`${Be.emailPreviewStar} ${m}`,title:t.isStarred?"Starred":"Not starred",onClick:()=>u(t)})]}),b.jsxs("div",{className:`${Be.emailPreviewItem} ${f}`,onClick:()=>s(t),children:[b.jsx("div",{className:Be.emailPreviewItemFrom,children:["/sent","/drafts"].includes(e)?`To:${t.To.split("@")[0]}`:t.From.split("@")[0]}),b.jsx("div",{className:Be.emailPreviewItemContent,children:t.Subject}),b.jsx("div",{className:Be.emailPreviewItemDate,children:new Date(t.Date).toLocaleDateString()})]})]})}const py="_emailPreviewContainer_1wllz_1",hy="_emailIndex_1wllz_12",Jl={emailPreviewContainer:py,emailIndex:hy};function vy({mails:e,selectedMails:t,pathname:n,toggleIsSelected:r,saveUpdatedMail:a}){return b.jsx("main",{className:Jl["email-preview"],children:b.jsx("ul",{className:Jl["items-list"],children:e.map(i=>b.jsx(my,{pathname:n,mail:i,isSelected:t.includes(i),toggleIsSelected:r,saveUpdatedMail:a},i.id))})})}function gy({mails:e,pathname:t,paginationParams:n,selectedMails:r,toggleSelectAll:a,saveUpdatedMail:i,toggleIsSelected:o,toggleSelectedItemsAreDeleted:l,deleteSelectedItems:s,onPrevPageButtonClick:u,onNextPageButtonClick:f,toggleSortByDate:m,toggleSortBySubject:h}){return e?b.jsxs("div",{className:Jl.emailPreviewContainer,children:[b.jsx(ty,{mails:e,pathname:t,paginationParams:n,toggleSelectAll:a,toggleSelectedItemsAreDeleted:l,deleteSelectedItems:s,onPrevPageButtonClick:u,onNextPageButtonClick:f,toggleSortByDate:m,toggleSortBySubject:h}),b.jsx(vy,{pathname:t,mails:e,selectedMails:r,saveUpdatedMail:i,toggleIsSelected:o})]}):b.jsx("div",{children:"Loading mails ..."})}const yy="_mainPanel_6sqgm_1",wy={mainPanel:yy};function by({mails:e,filterBy:t,paginationParams:n,selectedMails:r,toggleSelectAll:a,saveUpdatedMail:i,toggleIsSelected:o,toggleSelectedItemsAreDeleted:l,deleteSelectedItems:s,onPrevPageButtonClick:u,onNextPageButtonClick:f,toggleSortByDate:m,toggleSortBySubject:h}){const{mailId:v}=c0();return b.jsx("main",{className:wy.mainPanel,children:v?b.jsx(q2,{id:v,saveUpdatedMail:i}):b.jsx(gy,{mails:e,pathname:t.pathname,paginationParams:n,selectedMails:r,toggleSelectAll:a,saveUpdatedMail:i,toggleIsSelected:o,toggleSelectedItemsAreDeleted:l,deleteSelectedItems:s,onPrevPageButtonClick:u,onNextPageButtonClick:f,toggleSortByDate:m,toggleSortBySubject:h})})}function fr(){const[e,t]=x.useState(null),[n,r]=x.useState([]),{pathname:a}=Je(),[i,o]=Ji(),[l,s]=x.useState(qe.defaultFilterBy),[u,f]=x.useState(qe.defaultSortBy),[m,h]=x.useState(null),[v,y]=x.useState(window.screen.width>620);x.useEffect(()=>{s(L=>({...L,pathname:a})),window.screen.width<620&&y(!1)},[a]),x.useEffect(()=>{g()},[l,u]);async function g(){try{const[L,ee]=await qe.query(l,u);t(L),h(ee)}catch(L){console.error(L.message),L.message==="Pagination error"&&s(ee=>({...ee,pageNum:Math.max(ee.pageNum-1,0)}))}}function k(){l.pageNum>0&&s(L=>({...L,pageNum:L.pageNum-1}))}function d(){m.isLastPage||s(L=>({...L,pageNum:L.pageNum+1}))}async function c(L){t(ee=>ee.map(Jt=>Jt.id===L.id?L:Jt)),await qe.update(L),g()}function p(L){r(ee=>ee.includes(L)?ee.filter(Jt=>Jt!==L):[...ee,L])}function w(L){r(L?e:[])}async function _(){for(let L of n){const ee={...L,isDeleted:!L.isDeleted};await qe.update(ee),g()}r([])}async function C(){for(let L of n)await qe.remove(L.id),g()}function P(L){s(ee=>({...ee,filter:L.target.value}))}function I(){f(L=>({...L,date:!0,dateSortAscending:!L.dateSortAscending,subject:!1}))}function O(){y(L=>!L)}function j(){f(L=>({...L,date:!1,subject:!0,subjectSortAscending:!L.subjectSortAscending}))}const Ce=v?zo.expanded:zo.shrunk;return b.jsxs(Ii.Fragment,{children:[b.jsxs("div",{className:`${zo.emailIndex} ${Ce}`,children:[b.jsx(O2,{setContextFilter:P,toggleExpandMenu:O}),b.jsx(n2,{expanded:v}),b.jsx(by,{mails:e,filterBy:l,paginationParams:m,selectedMails:n,toggleSelectAll:w,saveUpdatedMail:c,toggleIsSelected:p,toggleSelectedItemsAreDeleted:_,deleteSelectedItems:C,onPrevPageButtonClick:k,onNextPageButtonClick:d,toggleSortByDate:I,toggleSortBySubject:j})]}),i.get("compose")&&b.jsx(I2,{saveUpdatedMail:c})]})}const ky=[{Date:"9/2/2013 4:36:30 AM",Subject:"top_b_box has sent a message",Body:`\r
[http://q.ebaystatic.com/aw/pics/logos/ebay_95x39.gif]  eBay sent this message to Alexander Bol (alexbol992012).\r
Your registered name is included to show this message originated from eBay. Learn more<http://pages.ebay.com/help/confidence/name-userid-emails.html>.\r
\r
        Message from eBay member, top_b_box\r
\r
[http://q.ebaystatic.com/aw/pics/icon/iconAlert_32x32.gif]      Do not respond to the sender if this message requests that you complete the transaction outside of eBay. This type of offer is against eBay policy, may be fraudulent, and is not covered by buyer protection programs. Learn More<http://pages.ebay.com/help/policies/rfe-spam-non-ebay-sale.html>\r
\r
\r
User details:\r
From User:\r
top_b_box<http://rover.ebay.com/rover/0/e12050.m66.l1181/7?euid=93443474931d4e14958babbd8db02348&loc=http%3A%2F%2Fmyworld.ebay.com%2Ftop_b_box%3FssPageName%3DADME%3AX%3ACEM%3AUS%3A1181> (13706<http://rover.ebay.com/rover/0/e12050.m66.l1183/7?euid=93443474931d4e14958babbd8db02348&loc=http%3A%2F%2Ffeedback.ebay.com%2Fws%2FeBayISAPI.dll%3FViewFeedback%26%26userid%3Dtop_b_box%26ssPageName%3DADME%3AX%3ACEM%3AUS%3A1183>[http://p.ebaystatic.com/aw/pics/icon/iconShootYllw_25x25.gif])\r
98.8% Positive Feedback\r
Member since Nov-02-09 in China\r
Location: 广东省, China\r
Activity with top_b_box (last 90 days): I have bid on 1 items from top_b_box\r
Activity with top_b_box (last 90 days): top_b_box has bid on 0 of my items\r
\r
\r
\r
\r
Dear alexbol992012,\r
\r
Dear:\r
My kind friend. Thanks for your purchasing, today we will check the item and then arrange the item during 24 hours, then we will update the tracking number , it generally take 2-4 weeks, pls check this website http://www.17track.net/IndexEn.html\r
Coz this is international shipment , so the tracking information will update during24hours, I am sure you will receive it soon , hope you can like it and leave a positive feedback, if you receive item or have any problem, pls email me without hesitate, I will try my best to make you satisfied. The bad feedback and case is not fair for you and for me,\r
It will destroy the store , I am sure you are kind hearted people,pls believe me, I will make you satisfied.\r
Have a nice day\r
Thanks & regards\r
\r
\r
best     regards\r
-laptoppowerlead\r
\r
\r
Click respond to reply through Messages, or go to your email to reply\r
\r
[http://p.ebaystatic.com/aw/pics/buttons/btnRespond.gif]<http://rover.ebay.com/rover/0/e12050.m44.l1159/7?euid=93443474931d4e14958babbd8db02348&loc=http%3A%2F%2Fcontact.ebay.com%2Fws%2FeBayISAPI.dll%3FM2MContact%26requested%3Dtop_b_box%26qid%3D659979327018%26redirect%3D0%26ssPageName%3DADME%3AX%3ACEM%3AUS%3A1159>\r
\r
\r
[http://p.ebaystatic.com/aw/pics/securityCenter/imgShield_25x25.gif]    Marketplace Safety Tip  [http://p.ebaystatic.com/aw/pics/securityCenter/imgTabCorner_25x25.gif]\r
\r
 *   Keep your money safe<http://pages.ebay.com/help/buy/payment.html> - never pay for items with cash or instant money transfer services, such as Western Union or MoneyGram. In the past some sellers have exploited these payment methods in order to defraud buyers, so eBay has banned them from the site.\r
 *   Received a Second Chance Offer email? Double check that it's genuine<http://pages.ebay.com/help/buy/personal-offer.html>: Second Chance Offer emails come directly from eBay and are shown in your My Messages.\r
 *   Trade safely. Beware of anyone who contacts you about buying or selling outside of eBay<http://pages.ebay.com/help/policies/rfe-spam-non-ebay-sale.html>. When you trade outside of eBay, you're not able to leave feedback or take advantage of protection programs and case resolution tools available on eBay. Report<http://ocs.ebay.com/ws/eBayISAPI.dll?ContactUs&wftype=3002> an inappropriate email.\r
 *   eBay helps guard your privacy and online safety when you use our messaging tools. If you and the member you're contacting haven't bought or sold from each other recently, our tools may make both of your email addresses anonymous.\r
\r
\r
\r
\r
________________________________\r
Email reference id: [#a08-b78nrhxmip#]_[#93443474931d4e14958babbd8db02348#]\r
Please don't remove this number. eBay customer support may ask you for this number, if you should need assistance.\r
\r
________________________________\r
Learn More<http://pages.ebay.com/education/spooftutorial/index.html> to protect yourself from spoof (fake) emails.\r
\r
Another eBay member sent this email to your email address through the eBay platform. eBay takes no liability for the sending of this email or its content.\r
\r
Visit our Privacy Policy<http://pages.ebay.com/help/policies/privacy-policy.html> and User Agreement<http://pages.ebay.com/help/policies/user-agreement.html> if you have any questions.\r
\r
You can report this message<http://pages.ebay.com/help/policies/rfe-spam-ov.html> as unsolicited (spam/spoof) email.\r
\r
Copyright © 2013 eBay Inc. All Rights Reserved. Designated trademarks and brands are the property of their respective owners. eBay and the eBay logo are trademarks of eBay Inc. eBay Inc. is located at 2145 Hamilton Avenue, San Jose, CA 95125.\r
\r
\r
`,From:"smallk_gr5147rcj@members.ebay.com.hk",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"1YAFOO"},{Date:"10/21/2013 7:12:56 PM",Subject:'inayyar replied on topic 08/10/2013 - Known Issue - Fac...""',Body:`Dear alexbol99,\r
\r
You are a follower of the topic:&nbsp;08/10/2013 - Known Issue - FaceBook site not coming up on FaceBook Page. Please find the latest reply to this topic:\r
\r
inayyar wrote:\r
\r
&quot;<p>Please let us know how long it takes to solve this problem. Days, weeks, months?</p>\r
\r
<p>Just let us know so we can know what to do with our business. If it takes days so we can wait, if it takes month then we can find other sources .</p>\r
&quot;\r
\r
You can reply to this topic&nbsp;here.\r
\r
Thanks,\r
Wix Support Team\r
\r
&nbsp;\r
\r
You have received this message because you follow this topic.&nbsp;To unfollow this topic, please go to topic:&nbsp;08/10/2013 - Known Issue - FaceBook site not coming up on FaceBook Page&nbsp;and click&nbsp;Unfollow this topic.\r
\r
Please do not reply to this email. We are unable to respond to messages sent to this address.`,From:"donotreply@wix.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"49ZGKQ"},{Date:"11/29/2017 11:52:29 AM",Subject:'Златоуст""',Body:`http://newrezume.org/news/2017-08-11-22875 Событие и аппаратура уже многократно были описаны. Mне кажется, впервые так подробно.\r
Ужасная судьба изобретателя этого устройства, отдельная новелла.\r
`,From:"btorlin@yahoo.com.au",To:"btorlin@yahoo.com.au",CC:"",Attachments:"","Attachments Path":"",id:"9B8ZJQ"},{Date:"9/10/2021 3:14:14 PM",Subject:"הכנות אחרונות! 🟡 הכל לקראת המשחק נגד מכבי פ״ת",Body:`[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/editor_images/1212.gif]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg5p/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
☰✕\r
חדשות<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg5r/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI> משחקים<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg5t/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI> חנות<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg5w/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI> מנויים וכרטיסים<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg5y/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI> אקדמיה<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg61/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI> קרן מכבי<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg63/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
\r
\r
\r
מגזין המשחק חוזר!\r
\r
[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/MAGAZINE.jpg]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg65/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
\r
פרומו לקראת המשחק, תכנים בלעדיים, פוסטרים להורדה לסטורי וכל מה שצריך לדעת לקראת המשחק תמצאו במגזין המשחק שזמין לכם באפליקציה\r
\r
צפו במגזין<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg65/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
הידעת?! המספרים במפגשים עם מכבי פת\r
\r
[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/%D7%A8%D7%90%D7%A9%D7%99%20%D7%9C%D7%99%D7%93%D7%A2%D7%AA.jpg]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg67/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
לכתבה מלאה<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg67/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/MTA_20210825102204a9b1d7a4f487554ea33fcb982f442375.jpg]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg69/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
ההנחיות לקראת ההגעה לאצטדיון, לא לשכוח מסכה והלינק להרשמה לבדיקות המהירות!\r
\r
לפרטים נוספים<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg69/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
ההרשמה לבדיקות הקורונה המהירות מחוץ לבלומפילד בעיצומה\r
\r
[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/%D7%91%D7%93%D7%99%D7%A7%D7%95%D7%AA%D7%9E%D7%94%D7%99%D7%A8%D7%95%D7%AA.jpg]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6c/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
הרשמה לבדיקה<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6c/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/1920X1080_44.jpg]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6f/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
מכירת הכרטיסים למשחק נגד מכבי פת\r
\r
[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/1920X1080%20ticketsale.jpg]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6h/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
שכחתם את הארנק? תירגעו. המנוי אצלכם באפליקציה\r
\r
[https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/537723_518710/MTA_202109021113114eeaddb3304c20a37ff5bab9aca22322-818x460.jpg]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6k/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
לפרטים נוספים<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6k/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
כל העדכונים בקליק אחד\r
\r
<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg65/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI> <https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg65/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
\r
\r
[https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png]<https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6m/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>        [https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png] <https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6p/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>        [https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png] <https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6r/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>      [https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-outline-circle-white/youtube@2x.png] <https://info.maccabi-tlv.co.il/e/703253/campaign-Newsletter-9Sept-2021/2flg6t/260615280?h=hpFhXzM3bQ9RSEbYPjx5Sf9GY2ygSnROaRfLeoJCMeI>\r
\r
\r
קיבלת דיוור זה כיוון שהסכמת בעבר לקבל הודעות פרסומיות ממכבי תל אביב\r
\r
להסרה מרשימת התפוצה לחצו כאן<https://info.maccabi-tlv.co.il/unsubscribe/u/703253/93d4928e87984561b153779ef19392273ce05b516eefaf02c9815c4e58779a46/260615280>\r
\r
\r
[https://info.maccabi-tlv.co.il/r/703253/1/260615280/open/1]\r
\r
`,From:"Do-Not-Reply@mtafc.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"JXYBOT"},{Date:"5/10/2018 8:24:14 AM",Subject:"Willson Lei's invitation is waiting for your response",Body:`More opportunities to grow your network\r
[https://www.linkedin.com/comm/dms/logo?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-null-30-null&trkEmail=eml-email_m2m_invite_reminder_02-null-30-null-null-ea3td%7Ejh038fgv%7E7l-null-comms%7Ebadging%7Edynamic&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D&_sig=2AVdUXN7pA48g1]<https://www.linkedin.com/comm/feed/?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-header-23-home&trkEmail=eml-email_m2m_invite_reminder_02-header-23-home-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Ffeed&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>      Alexander Bol<https://www.linkedin.com/comm/in/alexanderbol?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-header-31-profile&trkEmail=eml-email_m2m_invite_reminder_02-header-31-profile-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>  [https://media.licdn.com/dms/image/C5603AQFdgztYk_PNrA/profile-displayphoto-shrink_100_100/0?e=2159024400&v=beta&t=kP42DxF6j3RFCKPtWc5ytolr4VGfy-6vYzcw0ra23zY] <https://www.linkedin.com/comm/in/alexanderbol?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-header-31-profile&trkEmail=eml-email_m2m_invite_reminder_02-header-31-profile-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
\r
\r
Willson Lei invited you to connect 5 days ago.\r
\r
\r
<https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6398391992467976192/sharedKey/hAPiJd9X/?trk=eml-comm_invm-b-accept-newinvite&midToken=AQHU3LNraRnLYw&trkEmail=eml-email_m2m_invite_reminder_02-null-1-null-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
Accept<https://www.linkedin.com/comm/mynetwork/invite-accept/invitationId/6398391992467976192/sharedKey/hAPiJd9X/?trk=eml-comm_invm-b-accept-newinvite&midToken=AQHU3LNraRnLYw&trkEmail=eml-email_m2m_invite_reminder_02-null-1-null-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fmynetwork%2Einvite%7Eaccept&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
\r
<https://www.linkedin.com/comm/mynetwork/?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-0-view%7Einvite&trkEmail=eml-email_m2m_invite_reminder_02-hero-0-view%7Einvite-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fmynetwork&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
View Invitation<https://www.linkedin.com/comm/mynetwork/?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-0-view%7Einvite&trkEmail=eml-email_m2m_invite_reminder_02-hero-0-view%7Einvite-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fmynetwork&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
\r
\r
________________________________\r
\r
[https://media.licdn.com/dms/image/C5103AQHCRp4dxH7NKQ/profile-displayphoto-shrink_100_100/0?e=2159024400&v=beta&t=LFdVVYoqTKV7omHRaUDh6lhz9Asm2mwKZIEaVnVSzF4]<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-2-profile_image&trkEmail=eml-email_m2m_invite_reminder_02-hero-2-profile_image-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
Willson Lei<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-3-profile_name&trkEmail=eml-email_m2m_invite_reminder_02-hero-3-profile_name-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
\r
PCB&PCBA Manufacturer of aluminum,FR4,FPC...\r
\r
\r
\r
<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
View profile<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
\r
\r
\r
\r
\r
[https://static.licdn.com/scds/common/u/images/email/phoenix/icons/icon_phoenix_connect_in_common_32x32_v1.png] You have 4 connections in common\r
\r
\r
\r
<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
View profile<https://www.linkedin.com/comm/in/willson-lei-7a935053?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
\r
\r
\r
\r
\r
\r
Unsubscribe<https://www.linkedin.com/e/v2?e=ea3td-jh038fgv-7l&t=lun&midToken=AQHU3LNraRnLYw&ek=email_m2m_invite_reminder_02&li=28&m=unsub&ts=unsub&loid=AQEA3Y39_Nd0aAAAAWNIgb9hfWbb0kKuFUOtLh_X2u4QCiqX21MCawKgMCVbF7w5AuTcO3A5XoKKqDKvxkM-OuxVGA1n&eid=ea3td-jh038fgv-7l>  |   Help<https://www.linkedin.com/e/v2?e=ea3td-jh038fgv-7l&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D&a=customerServiceUrl&midToken=AQHU3LNraRnLYw&ek=email_m2m_invite_reminder_02&li=27&m=footer&ts=help&articleId=67>\r
\r
\r
You are receiving LinkedIn notification emails.\r
\r
\r
This email was intended for Alexander Bol (Senior Software Engineer at Frontline PCB Solutions). Learn why we included this.<https://www.linkedin.com/e/v2?e=ea3td-jh038fgv-7l&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D&a=customerServiceUrl&midToken=AQHU3LNraRnLYw&ek=email_m2m_invite_reminder_02&articleId=4788>\r
\r
\r
[https://static.licdn.com/scds/common/u/images/email/phoenix/logos/logo_phoenix_footer_darkgray_197x48_v1.png]<https://www.linkedin.com/comm/feed/?midToken=AQHU3LNraRnLYw&trk=eml-email_m2m_invite_reminder_02-footer-25-home&trkEmail=eml-email_m2m_invite_reminder_02-footer-25-home-null-ea3td%7Ejh038fgv%7E7l-null-neptune%2Ffeed&lipi=urn%3Ali%3Apage%3Aemail_email_m2m_invite_reminder_02%3B9l%2BpbAf%2FSIysaZvCLtRkug%3D%3D>\r
\r
© 2018 LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.\r
\r
\r
\r
\r
\r
[https://www.linkedin.com/emimp/ip_WldFemRHUXRhbWd3TXpobVozWXROMnc9OlpXMWhhV3hmYlRKdFgybHVkbWwwWlY5eVpXMXBibVJsY2w4d01nPT06.gif]\r
`,From:"messages-noreply@linkedin.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"JASYIQ"},{Date:"1/2/2015 11:25:01 PM",Subject:"אישור הזמנה",Body:`[http://www.onlineticketing.co.il/Cameri/assets/images/cameri/logo.jpg]\r
התיאטרון הקאמרי של תל אביב\r
אישור הזמנת כרטיסים\r
למחלקת שירות לקוחות:\r
03-6060900\r
מספר הזמנה:\r
42812866130     תאריך משלוח:\r
יום שישי 02/01/2015 23:23\r
\r
שלום אנג'ליקה ואלכסנדר   בול\r
הזמנתכם אושרה. תודה על ההזמנה. אנא בידקו את פריטי ההזמנה המוצגים.\r
\r
שימו לב:\r
\r
את הכרטיסים ניתן לאסוף בקופות\r
מומלץ להגיע כ30 דקות לפני תחילת ההצגה.\r
\r
ביטולים ושינויים יש לבצע 48 שעות לפני ההצגה\r
\r
לא ישמרו מקומות לאחר תחילת ההצגה.\r
פרטי ההזמנה:\r
הצגה    תאריך ושעה      אולם    אזור    מס' כרטיסים     מקומות ישיבה\r
שיער    שבת 04/04/2015 21:00    קאמרי 1 אולם    2       שורה 03: כסאות 22,21\r
\r
\r
פרטי משלוח : איסוף בקופות.\r
\r
\r
סהכ בהזמנה:\r
כרטיסים:        ₪100.00\r
עמלה:   ₪0.00\r
סהכ:   ₪100.00\r
\r
שולם: מנוי, ויזה ********1300, ************4682\r
מידע ללקוח\r
--------------------------------------------\r
\r
שימו לב לגבי ההצגות שמופיעות באולמות מחוץ לקאמרי כגון נחמני, פארק הירקון ועוד. הכרטיסים ימסרו בקופות האולם בו מתקיימת ההצגה בסמוך לתחילתה\r
\r
לברור נוסף, ניתן ליצור עמנו קשר :\r
\r
דוא''ל שירות לקוחות\r
service@cameri.co.il\r
\r
טלפון שירות לקוחות:\r
03-6060900\r
\r
התיאטרון הקאמרי של תל-אביב\r
שד' שאול המלך 19\r
תל אביב\r
`,From:"ORDERS@CAMERI.CO.IL",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"YFJNQA"},{Date:"1/2/2015 11:08:30 PM",Subject:"אישור הזמנה",Body:`[http://www.onlineticketing.co.il/Cameri/assets/images/cameri/logo.jpg]\r
התיאטרון הקאמרי של תל אביב\r
אישור הזמנת כרטיסים\r
למחלקת שירות לקוחות:\r
03-6060900\r
מספר הזמנה:\r
24312866128     תאריך משלוח:\r
יום שישי 02/01/2015 23:06\r
\r
שלום אנג'ליקה ואלכסנדר   בול\r
הזמנתכם אושרה. תודה על ההזמנה. אנא בידקו את פריטי ההזמנה המוצגים.\r
\r
שימו לב:\r
\r
את הכרטיסים ניתן לאסוף בקופות\r
מומלץ להגיע כ30 דקות לפני תחילת ההצגה.\r
\r
ביטולים ושינויים יש לבצע 48 שעות לפני ההצגה\r
\r
לא ישמרו מקומות לאחר תחילת ההצגה.\r
פרטי ההזמנה:\r
הצגה    תאריך ושעה      אולם    אזור    מס' כרטיסים     מקומות ישיבה\r
שיער    שבת 04/04/2015 21:00    קאמרי 1 אולם    2       שורה 03: כסאות 20,19\r
\r
\r
פרטי משלוח : איסוף בקופות.\r
\r
\r
סהכ בהזמנה:\r
כרטיסים:        ₪100.00\r
עמלה:   ₪0.00\r
סהכ:   ₪100.00\r
\r
שולם: מנוי, ויזה ************4007, ************4682\r
מידע ללקוח\r
--------------------------------------------\r
\r
שימו לב לגבי ההצגות שמופיעות באולמות מחוץ לקאמרי כגון נחמני, פארק הירקון ועוד. הכרטיסים ימסרו בקופות האולם בו מתקיימת ההצגה בסמוך לתחילתה\r
\r
לברור נוסף, ניתן ליצור עמנו קשר :\r
\r
דוא''ל שירות לקוחות\r
service@cameri.co.il\r
\r
טלפון שירות לקוחות:\r
03-6060900\r
\r
התיאטרון הקאמרי של תל-אביב\r
שד' שאול המלך 19\r
תל אביב\r
`,From:"ORDERS@CAMERI.CO.IL",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"HFEFKK"},{Date:"9/4/2018 10:32:55 AM",Subject:"Codevalue has an opportunity for you!",Body:`[https://woo.io/static/assets/img/email/wooLogoGreyBG.jpg]      You haven't been responsive\r
Responsive users get matched more often         [https://woo.io/static/assets/img/email/sad.jpg]\r
\r
Hi Alexander,\r
Codevalue has an opportunity for you as a Front End Developer. Let them find out more about you.\r
\r
They can meet these expectations:\r
[https://woo.io/static/assets/img/email/checked.jpg]\r
Preferred location (You asked for: Herzliyya)\r
\r
[https://woo.io/static/assets/img/email/checked.jpg]\r
Work from home (You asked for: Occasionally)\r
\r
[https://woo.io/static/assets/img/email/checked.jpg]\r
Technologies\r
\r
[https://woo.io/static/assets/img/email/checked.jpg]\r
Job title (You asked for: Front End Developer)\r
\r
[https://woo.io/static/assets/img/email/checked.jpg]\r
Type of company (You asked for: Private company)\r
\r
[https://woo.io/static/assets/img/email/checked.jpg]\r
Monthly salary (You asked for: ₪28000)\r
\r
\r
View the Front End Developer position<http://maillink.woo.io/wf/click?upn=3ibeNM06sk3hwkvcie1DPMrjqTDL1rfcYjMvMG-2BI29Io7P38WJVrQjhksrxFRe8db0LAer2GAGyrUCMA50IOqS3mPo9PHzjvzLJaGwiuaDjIoH9FulEMmP0LzjBuree17LXGzMWIH3Kqbmi58SqLBvwn49NA29pLLMNKO870hTYlAErmI7qJA9zTy9H11DSF5bKukxx1w1p-2FsAA-2BFVupukuLn40m0b-2BISX5-2B5vB08jabcjO5grqREn9msFR-2B3tln9ekgx3iQeRP-2FGUsN7Tvcwg-3D-3D_tTBNhUY33HUDG-2BvCl2p97OFowg-2BFkHXuQPotnSrwoZ8UTS1sJrtdIM6tcDf8TPVrXXr0FXHPctgbFO7vzclJBdJTPRtYBRslCcKVTW68Q47aPyqCeMb4-2FM0lLyl5If0uHKuLyZAg9Wy7M2Vjx34xuWaz2VClQ-2B09rHIqVf2gQLbsRUPfnFSKehyZ5TpfPq7itgPIgns9ixJ2jFe5wfRvMJXGlZF8F-2FIauWB-2B2LDVUyzyyed-2BBzL9uXA2KQwl4YfJs5hyCUgKNbZpto1lCjZdkuq1W44e6to4FSL0rWaPD4I2-2BVDY6youBUwdzGi7Fy1tLDFXbIVKeFDPW6plosxEFCli0TXQypvCptcY7AsshgdT2XFc2IkGawwCLPgtFCfuJ1VYp9Uy-2FuD2-2F1kgXu-2FJ-2FRLeRsfLh9pv8d-2FrIYZrg3lPMITprOybA1tKWKgUFE3aSH0TKjbJlG1rXx9AM8xuSmsWTauzwkrvTzXlVwgHPIg-3D>\r
\r
\r
Not interested<http://maillink.woo.io/wf/click?upn=3ibeNM06sk3hwkvcie1DPMrjqTDL1rfcYjMvMG-2BI29Io7P38WJVrQjhksrxFRe8db0LAer2GAGyrUCMA50IOqS3mPo9PHzjvzLJaGwiuaDjIoH9FulEMmP0LzjBuree17LXGzMWIH3Kqbmi58SqLBvwn49NA29pLLMNKO870hTYlAErmI7qJA9zTy9H11DSF5bKukxx1w1p-2FsAA-2BFVupukuLn40m0b-2BISX5-2B5vB08jabcjO5grqREn9msFR-2B3tlnQcXFTS2gts-2BguiMoyBgu0-2F4m0qNPYU-2B8ZoeeWI-2BM1to-3D_tTBNhUY33HUDG-2BvCl2p97OFowg-2BFkHXuQPotnSrwoZ8UTS1sJrtdIM6tcDf8TPVrXXr0FXHPctgbFO7vzclJBdJTPRtYBRslCcKVTW68Q47aPyqCeMb4-2FM0lLyl5If0uHKuLyZAg9Wy7M2Vjx34xuWaz2VClQ-2B09rHIqVf2gQLbsRUPfnFSKehyZ5TpfPq7itgPIgns9ixJ2jFe5wfRvMJXGlZF8F-2FIauWB-2B2LDVUyzyyed-2BBzL9uXA2KQwl4YfJs5hyCUgKNbZpto1lCjZdkuvSztiDeT0GnXeW0vv1hlO4MFqVNjDLIE8col1viNdfOes1Xlqq8nRE9gGutSakOQD50Zpoh5-2B-2F84T2q6DjseRlehzUwPAb9V0Jmh-2FUn-2FvOsATDvKqJ7SZZYe-2BOGm2dSEe6J8hN50l2UmOYBXk8LG4pNuxgIqi5D56cK1ODde3f08PRc5NEM7oMXEJFWIXtV-2F3lo9WRMCTrRD6pYTwk6RI-3D> Not right now<http://maillink.woo.io/wf/click?upn=3ibeNM06sk3hwkvcie1DPMrjqTDL1rfcYjMvMG-2BI29Io7P38WJVrQjhksrxFRe8db0LAer2GAGyrUCMA50IOqS3mPo9PHzjvzLJaGwiuaDjIoH9FulEMmP0LzjBuree17LXGzMWIH3Kqbmi58SqLBvwn49NA29pLLMNKO870hTYlAErmI7qJA9zTy9H11DSF5bKukxx1w1p-2FsAA-2BFVupukuLn40m0b-2BISX5-2B5vB08jabcjO5grqREn9msFR-2B3tlnQcXFTS2gts-2BguiMoyBgu0wzsIVzLRs2esfJf7QokrNU-3D_tTBNhUY33HUDG-2BvCl2p97OFowg-2BFkHXuQPotnSrwoZ8UTS1sJrtdIM6tcDf8TPVrXXr0FXHPctgbFO7vzclJBdJTPRtYBRslCcKVTW68Q47aPyqCeMb4-2FM0lLyl5If0uHKuLyZAg9Wy7M2Vjx34xuWaz2VClQ-2B09rHIqVf2gQLbsRUPfnFSKehyZ5TpfPq7itgPIgns9ixJ2jFe5wfRvMJXGlZF8F-2FIauWB-2B2LDVUyzyyed-2BBzL9uXA2KQwl4YfJs5hyCUgKNbZpto1lCjZdkqhbN0T91Ac0Qqo62vtUf4Xn-2BuYp9CfYOriX7ILs5-2FmSdD8Fon9hY4J5tUpvU7GD-2B7rLbEY1dPE2PoemUTLjnU-2B3wXdHN3Dl9To6BFuyLyQLxhw0e090KFy0B6RSE6xDujtDXhlRzbKBPZ7YY2NoDpcsCYvmICNz4ueDMHAyIxEafZmkvuYYrE243IBa0zZWWcnxhB-2BnDgZgx3uRT1rfHcE-3D> Share full profile<http://maillink.woo.io/wf/click?upn=3ibeNM06sk3hwkvcie1DPMrjqTDL1rfcYjMvMG-2BI29Io7P38WJVrQjhksrxFRe8db0LAer2GAGyrUCMA50IOqS3mPo9PHzjvzLJaGwiuaDjIoH9FulEMmP0LzjBuree17LXGzMWIH3Kqbmi58SqLBvwn49NA29pLLMNKO870hTYlAErmI7qJA9zTy9H11DSF5bKukxx1w1p-2FsAA-2BFVupukuLn40m0b-2BISX5-2B5vB08jabcjO5grqREn9msFR-2B3tlnQcXFTS2gts-2BguiMoyBgu02mAL4xPJQvQmxgwSmxg-2BSI-3D_tTBNhUY33HUDG-2BvCl2p97OFowg-2BFkHXuQPotnSrwoZ8UTS1sJrtdIM6tcDf8TPVrXXr0FXHPctgbFO7vzclJBdJTPRtYBRslCcKVTW68Q47aPyqCeMb4-2FM0lLyl5If0uHKuLyZAg9Wy7M2Vjx34xuWaz2VClQ-2B09rHIqVf2gQLbsRUPfnFSKehyZ5TpfPq7itgPIgns9ixJ2jFe5wfRvMJXGlZF8F-2FIauWB-2B2LDVUyzyyed-2BBzL9uXA2KQwl4YfJs5hyCUgKNbZpto1lCjZdkvhNeLVx-2BdtuVU6iDbDc-2FmQbfxPop1wFD3ZGuBaiFCnC77Pi4kwBDCAUXdo9bbwmbirC6YkVhFHgE66HFORYsawttR9nSmlWIyLaW52pPYq9-2BOIm5gvIc35k5WC6iU2pNlaT-2BFfEZe6OdG-2FP6vFxHs-2BLzHm6A-2BXct-2FJkWc97uL9XJlVZzlMLRp-2F-2FMxgzv4ttsQTL0waUqNewlgGRfLxYIik-3D>\r
\r
\r
\r
\r
\r
You received this opportunity from Codevalue because your expectations can be met.\r
Don't want to be approached for a while? Freeze your account here<http://maillink.woo.io/wf/click?upn=3ibeNM06sk3hwkvcie1DPK2hVV0ZlJ-2Fs6lXzi7B8a4yNt3hpQ7j4NJ6c7XqmTSLn1S6G3oJCCz6LurIJ9FEPoA-3D-3D_tTBNhUY33HUDG-2BvCl2p97OFowg-2BFkHXuQPotnSrwoZ8UTS1sJrtdIM6tcDf8TPVrXXr0FXHPctgbFO7vzclJBdJTPRtYBRslCcKVTW68Q47aPyqCeMb4-2FM0lLyl5If0uHKuLyZAg9Wy7M2Vjx34xuWaz2VClQ-2B09rHIqVf2gQLbsRUPfnFSKehyZ5TpfPq7itgPIgns9ixJ2jFe5wfRvMJXGlZF8F-2FIauWB-2B2LDVUyzyyed-2BBzL9uXA2KQwl4YfJs5hyCUgKNbZpto1lCjZdkq-2FTGBj3ajpzmIFMiA6OdqW5JekD9o08OZy4voXSvPy80i8c7-2BZLxMgSfqVYe-2FMKxuxCO2kgKExBd6TcGEUdmaX9HebOQoUT-2FT4fPApJFZSnXkaule9oyIqZkvVUr8FzYZHRmRLRABksevCECYpOc27ICf2xeIo4yYsrbUxIBJ76bxlNpIlUOg3X0dUiH0yLSpWl0j8PY26or7YEtDMtZa0-3D>.\r
\r
\r
`,From:"hello@woo.io",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"A3LN82"},{Date:"10/8/2013 11:53:15 PM",Subject:"שיעור טנגו ופרקטיקה בסטודיו רמת גן",Body:`\r
שלום חברים!!!\r
נפגשים ביום חמישי בסטודיו\r
לשיעור ופרקטיקה\r
20:00 - 21:00 מתחילים\r
21:00 -22:00 מתקדמים\r
22:00 ועד האחרון שנשאר פרקטיקה פתוחה לכולם\r
\r
מחכים לכם\r
נטע & ויקטור\r
--\r
\r
--\r
\r
\r
 מפת הגעה לסטודיו<http://goo.gl/maps/mWsD4>\r
בקרו אותנו בפייסבוק<http://www.facebook.com/#!/profile.php?id=100002599700958>\r
\r
    סטודיו רמת גן\r
בהנהלת ילנה פייטליכר\r
\r
\r
\r
\r
להסרה מרשימת התפוצה לחץ כאן<mailto:tangoramatgan@gmail.com>\r
`,From:"tangoramatgan@gmail.com",To:"tangoramatgan@gmail.com, alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"1KI9SH"},{Date:"8/15/2018 9:31:46 PM",Subject:"How I've made $33,000 from one of my side projects",Body:`Paul Jarvis explains how he's earned a total of\r
$33,000 from WPComplete, one of his many side projects.\r
\r
‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌\r
\r
( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/dpheh0/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS8_dXRtX3NvdXJjZT1JbmRpZStIYWNrZXJzK05ld3NsZXR0ZXImdXRtX2NhbXBhaWduPWluZGllLWhhY2tlcnMtbmV3c2xldHRlci0yMDE4MDgxNSZ1dG1fbWVkaXVtPWVtYWls )\r
\r
INTERVIEW ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/e5uph7/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9pbnRlcnZpZXdzP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA==\r
)\r
\r
Because I was the target market for\r
it, I really had great insight into what was needed. Paul Jarvis\r
explains how he's earned a total of $33,000 from WPComplete, one\r
of his many side projects. ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/78i7h8/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9pbnRlcnZpZXcvMWVkN2Y3MTJiND91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw= ) 🤗\r
\r
Running a profitable business or side project?\r
Sign up for an interview! ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/opfkhq/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9jb250cmlidXRlP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
COMMUNITY ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/zvtghn/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbT91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw=\r
)\r
\r
Weigh in: Is it more important that you\r
just start building something? Or should you first find an idea\r
you're passionate about? ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/pnceh9/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS9pZGVhLXlvdXJlLXBhc3Npb25hdGUtdnMtanVzdC1idWlsZC1zb21ldGhpbmctNWY4OTE2ODVjYT91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw= ) 🤔\r
\r
Is being too early in a market bad? (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/xksph6/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS9hc2staWgtaXMtYmVpbmctdG9vLWVhcmx5LWluLWEtbWFya2V0LWJhZC1hNDE3ODcwMWNjP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
Learning to accept small losses is part\r
of being an indie hacker. Find out how others handle it. (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/60aeh8/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS9sZWFybmluZy10by1hY2NlcHQtc21hbGwtbG9zc2VzLTZkZTY4NThiNzM_dXRtX3NvdXJjZT1JbmRpZStIYWNrZXJzK05ld3NsZXR0ZXImdXRtX2NhbXBhaWduPWluZGllLWhhY2tlcnMtbmV3c2xldHRlci0yMDE4MDgxNSZ1dG1fbWVkaXVtPWVtYWls )\r
\r
Does it make sense for to diversify\r
your skill sets, or double down on a single one? (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/kmbmh6/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS9kaXZlcnNpZnktc2tpbGxzZXQtb3ItZG91YmxlLWRvd24tb24tb25lLTNmYzA1MjUwNjQ_dXRtX3NvdXJjZT1JbmRpZStIYWNrZXJzK05ld3NsZXR0ZXImdXRtX2NhbXBhaWduPWluZGllLWhhY2tlcnMtbmV3c2xldHRlci0yMDE4MDgxNSZ1dG1fbWVkaXVtPWVtYWls ) 🧠\r
\r
Where are the iOS developers?\r
Introduce yourselves! ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/52hvh7/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS93aGVyZS1hcmUtdGhlLWlvcy1kZXZlbG9wZXJzLTg3Njg1OTg0MTE_dXRtX3NvdXJjZT1JbmRpZStIYWNrZXJzK05ld3NsZXR0ZXImdXRtX2NhbXBhaWduPWluZGllLWhhY2tlcnMtbmV3c2xldHRlci0yMDE4MDgxNSZ1dG1fbWVkaXVtPWVtYWls )\r
\r
Interested in learning more about\r
UI/UX? Check out the resources other indie hackers recommend, and\r
add some of your own. ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/2ou2ho/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS9yZWNvbW1lbmRhdGlvbnMtZm9yLWdvb2QtcmVzb3VyY2VzLWZvci1sZWFybmluZy11aS11eC1vbmxpbmUtYjNkMTAyMWQ4ZT91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw= )\r
\r
Do you prefer building mobile apps or\r
web apps? Join the conversation. ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/q3i8h7/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS9hcHBzLWlvcy1hbmRyb2lkLXZzLXdlYi0yNTIxYTlmMWNhP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
What's the best cold email subject line\r
you've ever written? What made it so effective? (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/gvfnh5/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9mb3J1bS9hc2staWgtd2hhdC13YXMtdGhlLWJlc3QtY29sZC1lbWFpbC1zdWJqZWN0LXlvdS1ldmVyLXdyb3RlLTZjNmRhYmU4MDI_dXRtX3NvdXJjZT1JbmRpZStIYWNrZXJzK05ld3NsZXR0ZXImdXRtX2NhbXBhaWduPWluZGllLWhhY2tlcnMtbmV3c2xldHRlci0yMDE4MDgxNSZ1dG1fbWVkaXVtPWVtYWls )\r
\r
MEETUPS 🌎 (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/93tzhn/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9tZWV0dXBzP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
San Mateo, California (Wednesday,\r
August 15th) ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/3wcphk/aHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9pbmRpZS1oYWNrZXJzLXNhbi1tYXRlby1tZWV0dXAtdGlja2V0cy00ODQ1ODExMTUxNj91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw= ) ⏳\r
\r
Plano, Texas (Wednesday, August 15th) (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/nesohv/aHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9pbmRpZWhhY2tlcnMtcGxhbm8tbWVldHVwLXRpY2tldHMtNDg5MDg4Mzc2NTA_dXRtX3NvdXJjZT1JbmRpZStIYWNrZXJzK05ld3NsZXR0ZXImdXRtX2NhbXBhaWduPWluZGllLWhhY2tlcnMtbmV3c2xldHRlci0yMDE4MDgxNSZ1dG1fbWVkaXVtPWVtYWls ) ⏳\r
\r
Chicago, Illinois (Thursday, August\r
16th) ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/43avhe/aHR0cHM6Ly93d3cubWVldHVwLmNvbS9DaGljYWdvLUluZGllLUhhY2tlcnMvZXZlbnRzLzI1Mjk1ODgxMi8_dXRtX3NvdXJjZT1JbmRpZStIYWNrZXJzK05ld3NsZXR0ZXImdXRtX2NhbXBhaWduPWluZGllLWhhY2tlcnMtbmV3c2xldHRlci0yMDE4MDgxNSZ1dG1fbWVkaXVtPWVtYWls )\r
\r
San Jose, California (Saturday, August\r
18th) ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/w4b2hg/aHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9pbmRpZS1oYWNrZXJzLXNhbi1qb3NlLWNhLWNvLXdvcmtpbmctZGF5LW1lZXR1cC10aWNrZXRzLTQ4OTgzMTU2OTQxP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
Nairobi, Kenya (Saturday, August 18th)\r
( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/rxh8ho/aHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9pbmRpZS1oYWNrZXJzLW5haXJvYmktZWRpdGlvbi10aWNrZXRzLTQ4MzEyMzQzNTIwP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
Mumbai, India (Saturday, August 18th) (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/0luwh9/aHR0cHM6Ly93d3cubWVldHVwLmNvbS9JbmRpZS1IYWNrZXJzLU11bWJhaS9ldmVudHMveGxiY3pweXhsYnhiLz91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw= )\r
\r
Berlin, Germany (Sunday, August 19th) (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/8viqho/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9AdmluY2VudGNob2kvaWgtYmVybGluLWxldHMtZ3JhYi1hLWNvZmZlZS1zdW5kYXktYXVnLTE5dGgtMTFhbS00ODM5NTJkMWEzP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
Bend, Oregon (Tuesday, August 21st) (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/vzf3hr/aHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9jZW50cmFsLW9yZWdvbi1pbmRpZS1oYWNrZXJzLW1lZXR1cC10aWNrZXRzLTQ4MTc3NjgzNzQ5P3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
Portland, Oregon (Tuesday, August 21st)\r
( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/lotehm/aHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9wZHgtaW5kaWUtaGFja2Vycy1tZWV0dXAtdGlja2V0cy00ODM2MjA5MzMyMz91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw= )\r
\r
Vienna, Austria (Tuesday, August 21st)\r
( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/mqc7h5/aHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9pbmRpZS1oYWNrZXJzLXZpZW5uYS10aWNrZXRzLTQ3OTIzNTgzNzI5P3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
ARTICLES ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/d0pseh0/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9sZWFybj91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw=\r
)\r
\r
Justin Jackson: Bootstrapper’s Paradox\r
( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/e55aph7/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9AbWlqdXN0aW4vYm9vdHN0cmFwcGVyLXMtcGFyYWRveC00NDFmMzI4N2ZlP3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== ) 💪\r
\r
Corey Gwin: How I'm Managing a Side\r
Project with a Full-Time Job ( https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/758b7h8/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbS9AY29yZXlnd2luL2hvdy1pbS1tYW5hZ2luZy1hLXNpZGUtcHJvamVjdC13aXRoLWEtZnVsbC10aW1lLWpvYi0xNmI5MDdhNmE0P3V0bV9zb3VyY2U9SW5kaWUrSGFja2VycytOZXdzbGV0dGVyJnV0bV9jYW1wYWlnbj1pbmRpZS1oYWNrZXJzLW5ld3NsZXR0ZXItMjAxODA4MTUmdXRtX21lZGl1bT1lbWFpbA== )\r
\r
❤️,\r
\r
Channing (@channingallen (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/o8phkhq/aHR0cHM6Ly93d3cudHdpdHRlci5jb20vY2hhbm5pbmdhbGxlbg== ))\r
\r
You are receiving this email because you\r
signed up for the Indie Hackers mailing list.\r
\r
To get in touch with me (Channing),\r
just reply to this email! 👋\r
\r
Indie Hackers (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/zlvughn/aHR0cHM6Ly93d3cuaW5kaWVoYWNrZXJzLmNvbT91dG1fc291cmNlPUluZGllK0hhY2tlcnMrTmV3c2xldHRlciZ1dG1fY2FtcGFpZ249aW5kaWUtaGFja2Vycy1uZXdzbGV0dGVyLTIwMTgwODE1JnV0bV9tZWRpdW09ZW1haWw= ) | Stripe (\r
https://el2.convertkit-mail2.com/c/p9u58n3r0c9h5wvgl/p9nieh9/aHR0cHM6Ly9zdHJpcGUuY29t ) | Unsubscribe (\r
https://el2.convertkit-mail2.com/u/p9u58n3r0c9h5wvgl ) | 185 Berry St. 550, San\r
Francisco, CA 94107`,From:"channing=indiehackers.com@ckmail4.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"8YEAOI"},{Date:"1/20/2022 5:44:08 PM",Subject:"You wanted flatten-editor.com? You got it!",Body:`\r
\r
This name is now available, Alex.  ‌ ‌ ‌ ‌ ‌ ‌\r
\r
 ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌\r
\r
\r
\r
[https://p3pprd001.cloudstorage.secureserver.net/cdn/Image/Email/All/dark-godaddy-logo-316x106.png]<https://click.godaddy.com/email/5Zhxl3t2OgQ3bXj1A7XwtB/?currencyId=ILS&eid=ocp.email.marketing/PreviouslySearched/.LayoutSimple/Rebrand/LogoGD.link.click&marketId=en-IL&redir=https%3A%2F%2Fwww.godaddy.com%3Fisc%3Dgdrp3215%26utm_source%3Dgdredpoint%26utm_medium%3Demail%26utm_campaign%3Den-IL_dom_email-revenue_base_gd%26utm_content%3D220120_4367_Attach-Upgrade_Domain-Reg-Domain-Name-Registration_Promotion_Product-Promotion_gdrp3215_5Zhxl3t2OgQ3bXj1A7XwtB>\r
\r
\r
Need help? Contact us.<https://click.godaddy.com/email/rv2U27VuYX138Sf6DWF5g/?currencyId=ILS&eid=ocp.email.marketing/PreviouslySearched/.LayoutSimple/Rebrand/LogoGD.link.click&marketId=en-IL&redir=https%3A%2F%2Fwww.godaddy.com%2Fhelp%3Fisc%3Dgdrp3215%26utm_source%3Dgdredpoint%26utm_medium%3Demail%26utm_campaign%3Den-IL_dom_email-revenue_base_gd%26utm_content%3D220120_4367_Attach-Upgrade_Domain-Reg-Domain-Name-Registration_Promotion_Product-Promotion_gdrp3215_rv2U27VuYX138Sf6DWF5g>\r
Customer Number: 134340068\r
\r
\r
\r
\r
\r
flatten-editor.com* can now be yours.<https://click.godaddy.com/email/7xATmI1grGIjXlAKRwLzSy/?currencyId=ILS&eid=ocp.email.marketing/PreviouslySearched/body1.RP_Body_Blocks/AAndURecurring/PreviouslySearchedDomains_Body_A.link.click&marketId=en-IL&redir=https%3A%2F%2Fwww.godaddy.com%2Fapi%2Fdpp%2Fsearch%2Fsingle%3FCheckAvail%3D1%26domainToCheck%3Dflatten-editor.com%26iphoneview%3D1%26isc%3Dgdrp3215%26utm_source%3Dgdredpoint%26utm_medium%3Demail%26utm_campaign%3Den-IL_dom_email-revenue_base_gd%26utm_content%3D220120_4367_Attach-Upgrade_Domain-Reg-Domain-Name-Registration_Promotion_Product-Promotion_gdrp3215_7xATmI1grGIjXlAKRwLzSy>\r
\r
\r
A while back, you searched for some pretty sweet names, but they weren't available.\r
\r
\r
\r
\r
\r
\r
\r
Now you're in luck.\r
\r
\r
The domains you need to do your thing are back on the market:\r
\r
\r
\r
flatten-editor.com\r
flatten-js.com\r
flatten-viewer.com\r
flattenviewer.com\r
\r
\r
\r
\r
Get Your Names [https://img1.wsimg.com/cdn/Image/Email/All/1e6d903b-eaa2-4e0b-9096-7ee498e64f34/arrow_btn_white.png] <https://click.godaddy.com/email/5HXvBaftKCqvJSKhEyGZRM/?currencyId=ILS&eid=ocp.email.marketing/PreviouslySearched/body2.RP_Body_Blocks/AAndURecurring/PreviouslySearchedDomains_Body_B.link.click&marketId=en-IL&redir=https%3A%2F%2Fwww.godaddy.com%2Fapi%2Fdpp%2Fsearch%2Fsingle%3FCheckAvail%3D1%26domainToCheck%3Dflatten-editor.com%26iphoneview%3D1%26isc%3Dgdrp3215%26utm_source%3Dgdredpoint%26utm_medium%3Demail%26utm_campaign%3Den-IL_dom_email-revenue_base_gd%26utm_content%3D220120_4367_Attach-Upgrade_Domain-Reg-Domain-Name-Registration_Promotion_Product-Promotion_gdrp3215_5HXvBaftKCqvJSKhEyGZRM>\r
\r
\r
\r
\r
We aren't allowed to save these for you, so snag 'em while you can.<https://click.godaddy.com/email/5tZUIUcCpL0plU0Sj50Rla/?currencyId=ILS&eid=ocp.email.marketing/PreviouslySearched/body3.RP_Body_Blocks/AAndURecurring/PreviouslySearchedDomains_Body_C.link.click&marketId=en-IL&redir=https%3A%2F%2Fwww.godaddy.com%2Fapi%2Fdpp%2Fsearch%2Fsingle%3FCheckAvail%3D1%26domainToCheck%3Dflatten-editor.com%26iphoneview%3D1%26isc%3Dgdrp3215%26utm_source%3Dgdredpoint%26utm_medium%3Demail%26utm_campaign%3Den-IL_dom_email-revenue_base_gd%26utm_content%3D220120_4367_Attach-Upgrade_Domain-Reg-Domain-Name-Registration_Promotion_Product-Promotion_gdrp3215_5tZUIUcCpL0plU0Sj50Rla>\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
*This email does not assure the availability of the specific domains; only that they were still available as of 20 January 2022.\r
\r
\r
\r
Click here to unsubscribe<https://click.godaddy.com/email/7Lz2e8hEEBPNCpmzDxzrsC/?currencyId=ILS&eid=ocp.email.marketing/PreviouslySearched/disclaimer6.RP_Disclaimer/Notifications/Rebrand2019_Unsubscribe.link.click&marketId=en-IL&redir=https%3A%2F%2Fwww.godaddy.com%2Fsubscription%2Funsubscribe%3Fee%3Dyjcceiuihjggwbgcnaqdgalbugnhybudpcbcpfbbvcujfjohychejemhpfjdijyc%26prog_id%3DGoDaddy%26isc%3Dgdrp3215u%26utm_source%3Dgdredpoint%26utm_medium%3Demail%26utm_campaign%3Den-IL_dom_email-revenue_base_gd%26utm_content%3D220120_4367_Attach-Upgrade_Domain-Reg-Domain-Name-Registration_Promotion_Product-Promotion_gdrp3215u_7Lz2e8hEEBPNCpmzDxzrsC> or manage your email preferences.\r
\r
\r
\r
Please do not reply to this email. Emails sent to this address will not be answered.\r
\r
\r
\r
Copyright © 1999-2022 GoDaddy Operating Company, LLC. 2155 E. GoDaddy Way, Tempe, AZ 85284 USA. All rights reserved.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
5275132307\r
\r
\r
\r
`,From:"donotreply@godaddy.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"PSOAMV"},{Date:"12/24/2018 7:33:26 PM",Subject:"חשבונית מס/קבלה 01/200517",Body:`ענת וניר רז [https://app.caspitweb.biz/uploads/4316_logo%20web.jpg]\r
\r
עבור:\r
\r
אלכס בול\r
\r
שלום :\r
\r
רצב חשבונית מס/קבלה מספר 01/200517 מיום 24/12/2018 בסך 550.00 ₪.\r
\r
ניתן לצפות במסמך גם בלינק הבא: http://casp.it/QPveRnSIBv\r
\r
בברכה,\r
\r
מנהל העסק\r
\r
המייל נשלח על-ידי כספית - התוכנה הקלה והמשתלמת להנהלת חשבונות\r
www.caspitweb.biz<http://www.caspitweb.biz>\r
`,From:"bounce+4316+niranat=darmayoga.co.il@caspit.biz",To:"alexbol99@gmail.com",CC:"",Attachments:"ענת וניר ר-חש_ק-01_200517.pdf; ","Attachments Path":"/Users/alexanderbol/Documents/CodingAcademy/Day3/MacUncle_September 6, 2023 4:32 PM/Mail/Starred.mbox/Attachments",id:"D3FLEP"},{Date:"5/25/2018 7:28:32 PM",Subject:"Terms of Use/ Privacy Policy",Body:`Dear Alex,\r
\r
At SkillValue, your privacy and the security of your personal data are top priority.\r
\r
In our effort to be even more transparent with you, we have updated our General Terms and Conditions <http://go.pentalog-platform.com/CEp0060770OE0qYa0R04T01> and Privacy Policy <http://go.pentalog-platform.com/s08O0740aEq70E0R1p00Y0T> and invite you to read them.\r
\r
The elements updated in our new privacy policy mainly concern:\r
\r
\r
	- The cases in which your personal data can be collected\r
	- The list of personal data that we have to deal with\r
	- The use cases of this personal data\r
	- Your rights and how to exercise them\r
\r
\r
\r
Please remember that acceptance of the General Terms and Conditions are necessary to benefit from our services. If you do not agree to the terms of our Privacy Policy, you have the option to unsubscribe from our communications by clicking on the following link: I wish to unsubscribe <http://go.pentalog-platform.com/CEp0080970OE0qYa0R04T01>.\r
\r
You can also claim your rights by emailing us at contact@skillvalue.com <http://go.pentalog-platform.com/x0E0000O00407qE0ZY1paTR> or by mail to the following address:\r
SKILLVALUE SOLUTIONS SAS\r
1 rue des Hauts \r
F45380 La Chapelle Saint Mesmin\r
\r
Best regards,\r
\r
<table style=float: left; width=100%> <tbody> <tr> <td colspan=2 style=border-bottom: 2px solid #f2f2f2; height: 8px;><br /></td> </tr> <tr> <td rowspan=6 style=width: 100px; width=201px><span style=font-weight: bold; color: #f9bd2e;><img src=https://digital-platform.pentalog.com/rs/232-EET-259/images/SKILLVALUE_logoalternative_01.png alt=SKILLVALUE_logoalternative_01.png constrain=true imagepreview=false width=200 height=132 /></span><br /></td> <td style=hyphens: none; border-collapse: collapse; font-family: Arial, sans-serif; font-weight: bold; font-size: 16px; color: #f9bd2e; padding: 5px 0px 1px 15px; height: 20px;>Eric GOUIN</td> </tr> <tr> <td style=hyphens: none; border-collapse: collapse; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; color: #777777; padding: 0px 0px 0px 15px; height: 14px;>CEO Skillvalue</td> </tr> <tr> <td style=height: 8px; padding: 0px 0px 0px 15px;> <table> <tbody> <tr> <td style=border-bottom: 2px solid #f9bd2e; font-size: 8px; width: 20px;><br /></td> </tr> </tbody> </table> </td> </tr> <tr> <td style=height: 14px;> <table> <tbody> <tr> <td style=hyphens: none; border-collapse: collapse; display: block; float: left; font-family: Arial, sans-serif; font-weight: normal; font-size: 12px; color: #777777; padding: 0px 4px 5px 15px;><span style=font-weight: bold; color: #f9bd2e;>T.&nbsp;</span><a style=color: #777777; href= http://go.pentalog-platform.com/T9qEO0p04000aEa0071RYT0 target=_blank >+33 (0) 970 754 570</a></td> <td style=hyphens: none; border-collapse: collapse; display: block; float: left; font-family: Arial, sans-serif; font-weight: normal; font-size: 12px; color: #777777; padding: 0px 4px 5px 15px;><span style=font-weight: bold; color: #f9bd2e;>W.&nbsp;</span><a style=color: #777777; href= http://go.pentalog-platform.com/h7p4b1E00E000RYOq000Taa target=_blank >www.skillvalue.com</a></td> </tr> </tbody> </table> </td> </tr> <tr> <td style=hyphens: none; border-collapse: collapse; font-family: Arial, sans-serif; font-weight: bold; font-size: 12px; color: #72a5c1; padding: 0px 0px 0px 15px; height: 10px;><a style=color: #f9bd2e; href= http://go.pentalog-platform.com/jRbE0407E001a0pqTYc0O00 target=_blank >about me</a></td> </tr> <tr> <td style=hyphens: none; border-collapse: collapse; font-family: Arial, sans-serif; font-weight: bold; font-size: 12px; color: #72a5c1; padding: 0px 0px 0px 15px; height: 14px;><a style=color: #f9bd2e; href= http://go.pentalog-platform.com/f00OY070ad004E0REqTcp01 target=_blank >People Centric becomes SkillValue!</a></td> </tr> <tr> <td colspan=2 style=border-top: 2px solid #f2f2f2; height: 8px;><br /></td> </tr> </tbody> </table> <p><br /></p>\r
\r
Note: This is not a commercial email. If you have recently made a request to unsubscribe or delete your personal data, please ignore this email.\r
\r
unsubscribe here: https://digital-platform.pentalog.com/en-email-preferences-mkto.html.\r
`,From:"eric.gouin@coders-skillvalue.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"DWOLLZ"},{Date:"9/30/2013 10:50:35 AM",Subject:"‎הלנה חן‎ wants to be friends on Facebook",Body:`facebook<http://www.facebook.com/n/?friends%2Frequests%2F&aref=74993766&medium=email&mid=8b32a74G61243ab8G4785066G2&bcode=1.1380527433.AbmilgsIYkMoOsdn&n_m=alexbol99%40gmail.com&lloc=logo>\r
[https://fbcdn-photos-e-a.akamaihd.net/hphotos-ak-frc3/c22.0.135.135/s110x80/1380801_1388865824680504_687710701_a.jpg]<http://www.facebook.com/n/?friends%2Frequests%2F&aref=74993766&medium=email&mid=8b32a74G61243ab8G4785066G2&bcode=1.1380527433.AbmilgsIYkMoOsdn&n_m=alexbol99%40gmail.com&lloc=profile_pic>\r
‎הלנה חן<http://www.facebook.com/n/?n%2F&friends%2Frequests%2F&aref=74993766&medium=email&mid=8b32a74G61243ab8G4785066G2&bcode=1.1380527433.AbmilgsIYkMoOsdn&n_m=alexbol99%40gmail.com&lloc=header>‎ wants to be friends with you on Facebook.\r
\r
6 friends\r
\r
\r
\r
Confirm Request<http://www.facebook.com/n/?friends%2Frequests%2F&fcode=AY8Jh6Wd-y2MdGNb&f=100006712989648&r=1629764280&aref=74993766&medium=email&mid=8b32a74G61243ab8G4785066G2&bcode=1.1380527433.AbmilgsIYkMoOsdn&n_m=alexbol99%40gmail.com&lloc=1st_cta>\r
\r
\r
See All Requests<http://www.facebook.com/n/?friends%2Frequests%2F&aref=74993766&medium=email&mid=8b32a74G61243ab8G4785066G2&bcode=1.1380527433.AbmilgsIYkMoOsdn&n_m=alexbol99%40gmail.com&lloc=2nd_cta>\r
\r
\r
\r
\r
\r
This message was sent to alexbol99@gmail.com<mailto:alexbol99@gmail.com>. If you don't want to receive these emails from Facebook in the future, please unsubscribe<https://www.facebook.com/o.php?k=AS2M7zv0VYezeasD&u=1629764280&mid=8b32a74G61243ab8G4785066G2>.\r
Facebook, Inc., Attention: Department 415, PO Box 10005, Palo Alto, CA 94303\r
[https://www.facebook.com/email_open_log_pic.php?mid=8b32a74G61243ab8G4785066G2]\r
`,From:"notification+2j44atfc@facebookmail.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"5FKTG0"},{Date:"2/1/2018 12:45:38 PM",Subject:"אישור הזמנה - אופרה",Body:`\r
\r
\r
\r
                                                                                                        אישורהזמנה\r
                        [http://212.143.181.86/IsraelOperaWebLink/1448/get.resource/images/1033/1000119.jpg?etag=2661B44E40CBFFCC6607A6E325CD541E]\r
\r
                                                                        האופרההישראליתתלאביב-יפו\r
\r
                                                                                                        שד'שאולהמלך19,תלאביב\r
\r
                                                        עסקהמס':1940298\r
\r
        01/02/2018      תאריךעסקה:\r
\r
\r
                                                                                                                                לכבוד:אלכסנדרבול\r
                                                                                                                                                                כתובת:רמבם51דירה9ראשוןלציון\r
                                                                                                                                                                                ראשוןלציון75310\r
\r
                                                                                                                                                                הזמנתךנרשמהבמערכתכדלקמן:\r
\r
\r
                                                                                                                                                                                                                רשימתהכרטיסים\r
\r
מחיר לכרטיס     תעריף           פירוט מקומות הישיבה             אולם    אירוע\r
369.00 שח      רגיל            אולם אולם שורה 2 כסא 31,32              בית האופרה.     להקת יאנג לי פינג\r
28.04.2018 בשעה 20:00\r
\r
\r
                                                                                                                                                        שח     738.00  הסכום ששולם הוא:\r
\r
                תודה על ביצוע ההזמנה!\r
מסירת כתובתכם מאשרת קבלת פרסומים, מבצעים, פרסומות והודעות על פעילות שמתקיימת בבית האופרה.\r
הכתובות לא משמשות צד שלישי ושמורות במערכת.\r
אם ברצונכם להסיר את שמכם מרשימת התפוצה אנא שילחו מייל לכתובת : kupa@israelopera.org.il\r
\r
לתשומת לב:\r
* נא להציג כרטיס אשראי אשר חוייב בעסקה + תעודה מזהה.\r
* במידה ורכשת כרטיסים בתעריף מוזל כגון 'גמלאי' / 'מנוי' יש להציג תעודה מתאימה בעת איסוף הכרטיסים.\r
* מאחרים יופנו ליציע ויגיעו למקומותיהם רק לאחר ההפסקה.\r
* ביטול הזמנה עד 2 ימי עסקים לפני המופע וכרוך בחיוב עמלה של 5%.\r
* לא יינתן החזר כספי ו/או החלפת כרטיסים בגין כרטיסים שלא נוצלו.\r
\r
אנא זיכרו להביא עמכם את העתק ההזמנה והכרטיס המגנטי בו בוצעה ההזמנה.\r
\r
לידיעתכם, בגלל מבנה הפרסה של אולמות האופרה, בהפקות מסוימות תיתכן ראייה חלקית ממושבים מסוימים ברמות מחיר ג, ד, ה.\r
\r
        01/02/2018      תאריך:                                                                                                          הופק עי: אינטרנט\r
                                                                                                                                                                                        קופת בית האופרה : 03-6927777\r
\r
                צפייה מהנה!\r
\r
\r
`,From:"do-not-reply@israelopera.org.il",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"9J1DTX"},{Date:"8/18/2023 11:35:02 AM",Subject:"Invoice : 386852",Body:`[http://www.domainthenet.com/MailBody/version1/logo.gif]\r
\r
Domain The Net Technologies LTD<http://www.domainthenet.com>\r
81 Sokolov st., Ramat-Hasharon, Israel 47211\r
Tel:972-3-7600500 Fax:972-3-7600505\r
www.DomainTheNet.com<http://www.domainthenet.com>\r
\r
\r
\r
Email Invoice No.       386852\r
\r
\r
User Name:      alexbol99\r
Individual or Organization Name:        Alexander Bol\r
Address:        Rambam 51\r
City:   Rishon lezion\r
State/Province:\r
Postal/Zip Code:        75310\r
Country Code:   IL\r
Contact First Name:     Alexander\r
Contact Last Name:      Bol\r
Contact Phone:  +972 -52 -6508861\r
Contact Fax:    +972 -8 -9322186\r
Contact Email:  alexbol99@gmail.com\r
\r
\r
Description:\r
חידוש דומיין בסיומת co.il\r
angelika.co.il\r
        2       שנים    NIS     177.78\r
________________________________\r
\r
Total without VAT:      NIS     177.78\r
VAT:    NIS     30.22\r
Total charged:  NIS     208\r
\r
\r
\r
You hereby agree to be bound by the Registration Agreement located at http://www.domainthenet.com/hebrewSite/Agreements/Agreement.htm\r
Thank you again for choosing Domain The Net.\r
Don't forget to visit our Web site regularly at http://www.DomainTheNet.com, to learn about the variety of Internet services you are entitled to as our customer.\r
\r
We look forward to serving you for years to come.\r
\r
A printable invoice will be sent to you by e-mail.\r
\r
Domain The Net\r
\r
\r
\r
\r
\r
Domain The Net Technologies Ltd.\r
81 Sokolov st. Ramat-Hasharon Israel 47238\r
Phone: +972-3-7600500 Fax: +972-3-7600505\r
\r
\r
`,From:"invoice@dtnt.com",To:"alexbol99@gmail.com, invoice@dtnt.com",CC:"",Attachments:"","Attachments Path":"",id:"ILNC2Q"},{Date:"6/22/2015 10:06:10 PM",Subject:"[React.js Israel] So today was our 2nd meetup. We heard you and,...",Body:`        Doron Zavelevsky June 22 at 12:05pm   So today was our 2nd meetup. We heard you and, according to your votes on the poll we covered React's basics, flux and reflux, a bit about build tools - and TDD with react. All was done using live coding - by speakers with real, hard gained experience. Please add options to this poll and vote to let us know what to talk about next. Please reply with any feedback you have regarding the meetups. If you chose not to arrive I'd appreciate knowing the reason (location, level of talks, hour...)       Like     Comment     Share\r
\r
\r
[https://fbstatic-a.akamaihd.net/rsrc.php/v2/yk/r/_2faPUZhPI6.png]<https://www.facebook.com/n/?groups%2Freactjsil%2Fpermalink%2F1590210587912739%2F&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com>         React.js Israel<https://www.facebook.com/n/?groups%2Freactjsil%2Fpermalink%2F1590210587912739%2F&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com>\r
\r
\r
\r
\r
\r
\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p100x100/10624589_10152375124087202_8959208450327351574_n.jpg?oh=35190738c86762760a45cff94682dd0b&oe=5620958A&__gda__=1445710875_d4f93b261cd715e66c48694d3aac62bc]<https://www.facebook.com/zavelevsky>\r
Doron Zavelevsky<https://www.facebook.com/zavelevsky>\r
June 22 at 12:05pm\r
\r
\r
So today was our 2nd meetup. We heard you and, according to your votes on the poll we covered React's basics, flux and reflux, a bit about build tools - and TDD with react. All was done using live coding - by speakers with real, hard gained experience.\r
Please add options to this poll and vote to let us know what to talk about next.\r
Please reply with any feedback you have regarding the meetups. If you chose not to arrive I'd appreciate knowing the reason (location, level of talks, hour...)\r
\r
\r
\r
\r
<https://www.facebook.com/n/?email%2Fufi%2Fclick&action=like&target=1590210587912739&hash=AVKR4JaQvYzZjUb0&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&lloc=email_ufi_like&sig_t=1434999968&sig=AVJislT8sgj89c00>\r
        [https://fbstatic-a.akamaihd.net/rsrc.php/v2/yM/r/aL-TjjYppK9.png]      Like<https://www.facebook.com/n/?email%2Fufi%2Fclick&action=like&target=1590210587912739&hash=AVKR4JaQvYzZjUb0&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&lloc=email_ufi_like&sig_t=1434999968&sig=AVJislT8sgj89c00>\r
        <https://www.facebook.com/n/?email%2Fufi%2Fclick&action=comment&target=1590210587912739&hash=AVLBkX3sZuILcQGL&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&lloc=email_ufi_comment&sig_t=1434999968&sig=AVI_0Afi44vDOBB0>\r
        [https://fbstatic-a.akamaihd.net/rsrc.php/v2/yK/r/pydUbhpFodk.png]      Comment<https://www.facebook.com/n/?email%2Fufi%2Fclick&action=comment&target=1590210587912739&hash=AVLBkX3sZuILcQGL&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&lloc=email_ufi_comment&sig_t=1434999968&sig=AVI_0Afi44vDOBB0>\r
        <https://www.facebook.com/n/?email%2Fufi%2Fclick&action=share&target=1590210587912739&hash=AVKPDXU0XyG4D4-w&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&lloc=email_ufi_share&sig_t=1434999968&sig=AVKT1-FKB10FebZW>\r
        [https://fbstatic-a.akamaihd.net/rsrc.php/v2/yU/r/1xTlxxl7Lck.png]      Share<https://www.facebook.com/n/?email%2Fufi%2Fclick&action=share&target=1590210587912739&hash=AVKPDXU0XyG4D4-w&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&lloc=email_ufi_share&sig_t=1434999968&sig=AVKT1-FKB10FebZW>\r
\r
\r
\r
\r
\r
\r
\r
\r
<https://www.facebook.com/n/?groups%2Freactjsil%2Fpermalink%2F1590210587912739%2F&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com>\r
<https://www.facebook.com/n/?groups%2Freactjsil%2Fpermalink%2F1590210587912739%2F&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com>\r
View Post\r
\r
                <https://www.facebook.com/n/?settings&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&tab=notifications&section=email>\r
<https://www.facebook.com/n/?settings&aref=1434983499876178&medium=email&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6&bcode=1.1434999968.Abku3UNU--qXWq6D&n_m=alexbol99%40gmail.com&tab=notifications&section=email>\r
Edit Email Settings\r
\r
\r
\r
\r
\r
Reply to this email to comment on this post.\r
\r
\r
\r
\r
This message was sent to alexbol99@gmail.com<mailto:alexbol99@gmail.com>. If you don't want to receive these emails from Facebook in the future, please unsubscribe<https://www.facebook.com/o.php?k=AS3TCjmjTWaWB_5A&u=1629764280&mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6>.\r
Facebook, Inc., Attention: Department 415, PO Box 10005, Palo Alto, CA 94303\r
\r
\r
[https://www.facebook.com/email_open_log_pic.php?mid=bf259c5G61243ab8G5191c21c4c752G96Gbf6]\r
`,From:"notification+2j44atfc@facebookmail.com",To:"reactjsil@groups.facebook.com",CC:"",Attachments:"","Attachments Path":"",id:"5O4AU6"},{Date:"6/18/2014 2:38:35 PM",Subject:"אתם-מוזמנים-לענות-על-הסקר-הבא",Body:`[http://www.ipanel.co.il/images/logo.jpg]\r
\r
שלום אלכסנדר ,\r
הנכם מוזמנים להשתתף בסקר חדש המופנה אליכם במסגרת חברותכם בפאנל\r
הצרכנים הייחודי של  iPanel\r
תשובותיכם בסקר זה ישפיעו על המוצרים והשירותים השונים שיוצעו בעתיד בישראל.\r
עבור השתתפותכם בסקר תקבלו נקודות בהתאם\r
לרשום בפתיח הסקר אותן תוכלו להמיר לתווי קנייה .\r
\r
לכניסה לסקר לחץ כאן<http://www.net-mr.com/survey/s.phtml?YI_308612_962a7fa4ffc8142e27ab97c799966bfd> (סקר זה אינו מותאם למענה בסמארטפונים או טאבלטים)\r
\r
במידה ואינכם מצליחים להכנס דרך הקישור - תוכלו להעתיק את הקישור הבא לדפדפן\r
\r
http://www.net-mr.com/survey/s.phtml?YI_308612_962a7fa4ffc8142e27ab97c799966bfd\r
לתשומת לבכם, הסקר אותו סיימתם למלא יתעדכן אוטומטית בתוך מספר\r
דקות ברשימת סקרים שהושלמו בעמוד הסקרים שלי באתר.\r
\r
במידה ואתם נתקלים בקשיים - אנא פנו אלינו במייל\r
\r
info@ipanel.co.il<mailto:info@ipanel.co.il>\r
\r
לעדכונים, תוצאות סקרים ועוד, לחצו Like והצטרפו לעמוד הפייסבוק שלנו לחץ כאן<http://www.facebook.com/pages/IPanel/199756256734415>\r
\r
\r
\r
\r
\r
לתשומת לבכם דיוור זה נשלח לרשימת חברי iPanel\r
שנרשמו ואישרו לנו לשלוח אליהם זימונים לסקרים\r
במידה והינכם רוצים לבטל את חברותכם בפאנל\r
עדכנו אותנו דרך האתר בכתובת\r
www.iPanel.co.il<http://www.ipanel.co.il/>\r
\r
`,From:"info@ipanel.co.il",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"HA0XGE"},{Date:"10/18/2014 1:41:30 AM",Subject:"Michael Ginzburg confirmed your Facebook friend request",Body:`Alexander, Michael Ginzburg has confirmed that you're friends on Facebook. You may know some of Michael's friends: Anna Avrahami Kainer 10 mutual friends Add Friend Marina Gruzd 4 mutual friends Add Friend Anatoly Vorobey 2 mutual friends Add Friend Maria Sivak 23 mutual friends Add Friend Konstantin Ignatiev 1 mutual friend Add Friend Alla Rabinovich 3 mutual friends Add Friend\r
facebook<https://www.facebook.com/n/?michael.ginzburg.3&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=logo>\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c129.33.412.412/s50x50/183110_100552840026017_4938665_n.jpg?oh=a6c04e1af0adb0b8f60615de43912dec&oe=54AC7EE2&__gda__=1425178219_ae7464c37ac340fbbaba71ef5d78ba8f]<https://www.facebook.com/n/?michael.ginzburg.3&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=image>\r
Alexander, Michael Ginzburg<https://www.facebook.com/n/?michael.ginzburg.3&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com> has confirmed that you're friends on Facebook.\r
\r
You may know some of Michael's friends:\r
\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c0.0.50.50/p50x50/535515_10150772504472361_876595283_n.jpg?oh=25f2163cacce7a59ce5219d186322549&oe=54AF6BA0&__gda__=1425288237_8a468ed541a29db81142392e155bdb07]<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f> Anna Avrahami Kainer<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
10 mutual friends\r
\r
Add Friend<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&f_to_add=537757360&ref=email&hash=AUpgQaCg2IvPHBD_&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
\r
\r
\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c127.37.466.466/s50x50/151089_483813102365_101659_n.jpg?oh=8f21d7f21016df62f087d06e6cd96378&oe=54AC8530&__gda__=1420823423_d71a9ee7b4fbb410ce01dbd73e9ab55e]<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>    Marina Gruzd<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
4 mutual friends\r
\r
Add Friend<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&f_to_add=546532365&ref=email&hash=AUoNIY83w8HPLOrS&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
\r
\r
\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c15.0.50.50/p50x50/10264732_10150002137498343_3701109639787196793_n.jpg?oh=8df13afdd2b8c27e7aa97a3d2f402903&oe=54F04C94&__gda__=1422059723_103f2dd8a6008badb2d8f98962888b4c]<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>    Anatoly Vorobey<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
2 mutual friends\r
\r
Add Friend<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&f_to_add=546754623&ref=email&hash=AUrZV50qFk50ICqT&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
\r
\r
\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.3.50.50/p50x50/1609916_10152378916513727_8733790781183724388_n.jpg?oh=37f913ae99eb9cf288980feb39c0e13d&oe=54B540DB&__gda__=1425488426_9555312abc148dce2d780a315b4711be]<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>      Maria Sivak<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
23 mutual friends\r
\r
Add Friend<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&f_to_add=547963726&ref=email&hash=AUpVnN3UfeifiK0u&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
\r
\r
\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p50x50/1620374_10152110009644822_1464244701_n.jpg?oh=dc027cf0592a6f1399df24c02ab85bc1&oe=54BEBD30&__gda__=1422039066_b8ba92450d429c4ddbce18dbdb013f93]<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>  Konstantin Ignatiev<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
1 mutual friend\r
\r
Add Friend<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&f_to_add=577354821&ref=email&hash=AUqNraZqHsSs8BAq&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
\r
\r
\r
[https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c6.0.50.50/p50x50/10599648_10152396071141026_3378582494400282342_n.jpg?oh=e26acb9d7fb768ca82b82bc18663f5f9&oe=54B5B9C8&__gda__=1421430980_f9f7329d3881762836c6d662db2e9e4b]<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>     Alla Rabinovich<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
3 mutual friends\r
\r
Add Friend<https://www.facebook.com/n/?find-friends%2Fbrowser%2F&f_to_add=585521025&ref=email&hash=AUqQzniOVkBIRTVN&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=add_f>\r
\r
\r
\r
\r
\r
\r
\r
View Timeline<https://www.facebook.com/n/?michael.ginzburg.3&aref=96154174&medium=email&mid=aab9844G61243ab8G5bb323eG1bG1bde&bcode=1.1413585688.AbkEYRSsNPDxbOza&n_m=alexbol99%40gmail.com&lloc=1st_cta>\r
\r
\r
\r
\r
\r
This message was sent to alexbol99@gmail.com<mailto:alexbol99@gmail.com>. If you don't want to receive these emails from Facebook in the future, please unsubscribe<https://www.facebook.com/o.php?k=AS0BzqsZIukIlrWE&u=1629764280&mid=aab9844G61243ab8G5bb323eG1bG1bde>.\r
Facebook, Inc., Attention: Department 415, PO Box 10005, Palo Alto, CA 94303\r
[https://www.facebook.com/email_open_log_pic.php?mid=aab9844G61243ab8G5bb323eG1bG1bde]\r
`,From:"notification+2j44atfc@facebookmail.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"20Q0FZ"},{Date:"7/2/2014 4:07:46 PM",Subject:"אתם-מוזמנים-לענות-על-הסקר-הבא",Body:`[http://www.ipanel.co.il/images/logo.jpg]\r
\r
שלום אלכסנדר ,\r
הנכם מוזמנים להשתתף בסקר חדש המופנה אליכם במסגרת חברותכם בפאנל\r
הצרכנים הייחודי של  iPanel\r
תשובותיכם בסקר זה ישפיעו על המוצרים והשירותים השונים שיוצעו בעתיד בישראל.\r
עבור השתתפותכם בסקר תקבלו נקודות בהתאם\r
לרשום בפתיח הסקר אותן תוכלו להמיר לתווי קנייה .\r
\r
לכניסה לסקר לחץ כאן<http://www.net-mr.com/survey/s.phtml?YI_310061_5ac70c9e06d053fc93091e555ac6b7f8> (סקר זה אינו מותאם למענה בסמארטפונים או טאבלטים)\r
\r
במידה ואינכם מצליחים להכנס דרך הקישור - תוכלו להעתיק את הקישור הבא לדפדפן\r
\r
http://www.net-mr.com/survey/s.phtml?YI_310061_5ac70c9e06d053fc93091e555ac6b7f8\r
לתשומת לבכם, הסקר אותו סיימתם למלא יתעדכן אוטומטית בתוך מספר\r
דקות ברשימת סקרים שהושלמו בעמוד הסקרים שלי באתר.\r
\r
במידה ואתם נתקלים בקשיים - אנא פנו אלינו במייל\r
\r
info@ipanel.co.il<mailto:info@ipanel.co.il>\r
\r
לעדכונים, תוצאות סקרים ועוד, לחצו Like והצטרפו לעמוד הפייסבוק שלנו לחץ כאן<http://www.facebook.com/pages/IPanel/199756256734415>\r
\r
\r
\r
\r
\r
לתשומת לבכם דיוור זה נשלח לרשימת חברי iPanel\r
שנרשמו ואישרו לנו לשלוח אליהם זימונים לסקרים\r
במידה והינכם רוצים לבטל את חברותכם בפאנל\r
עדכנו אותנו דרך האתר בכתובת\r
www.iPanel.co.il<http://www.ipanel.co.il/>\r
\r
`,From:"info@ipanel.co.il",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"5VLS2U"},{Date:"7/2/2014 8:58:43 AM",Subject:"אתם-מוזמנים-לענות-על-הסקר-הבא",Body:`[http://www.ipanel.co.il/images/logo.jpg]\r
\r
שלום אלכסנדר ,\r
הנכם מוזמנים להשתתף בסקר חדש המופנה אליכם במסגרת חברותכם בפאנל\r
הצרכנים הייחודי של  iPanel\r
תשובותיכם בסקר זה ישפיעו על המוצרים והשירותים השונים שיוצעו בעתיד בישראל.\r
עבור השתתפותכם בסקר תקבלו נקודות בהתאם\r
לרשום בפתיח הסקר אותן תוכלו להמיר לתווי קנייה .\r
\r
לכניסה לסקר לחץ כאן<http://www.net-mr.com/survey/s.phtml?YI_310718_3be279426a1f2e28084e9291ee4af4d7> (סקר זה אינו מותאם למענה בסמארטפונים או טאבלטים)\r
\r
במידה ואינכם מצליחים להכנס דרך הקישור - תוכלו להעתיק את הקישור הבא לדפדפן\r
\r
http://www.net-mr.com/survey/s.phtml?YI_310718_3be279426a1f2e28084e9291ee4af4d7\r
לתשומת לבכם, הסקר אותו סיימתם למלא יתעדכן אוטומטית בתוך מספר\r
דקות ברשימת סקרים שהושלמו בעמוד הסקרים שלי באתר.\r
\r
במידה ואתם נתקלים בקשיים - אנא פנו אלינו במייל\r
\r
info@ipanel.co.il<mailto:info@ipanel.co.il>\r
\r
לעדכונים, תוצאות סקרים ועוד, לחצו Like והצטרפו לעמוד הפייסבוק שלנו לחץ כאן<http://www.facebook.com/pages/IPanel/199756256734415>\r
\r
\r
\r
\r
\r
לתשומת לבכם דיוור זה נשלח לרשימת חברי iPanel\r
שנרשמו ואישרו לנו לשלוח אליהם זימונים לסקרים\r
במידה והינכם רוצים לבטל את חברותכם בפאנל\r
עדכנו אותנו דרך האתר בכתובת\r
www.iPanel.co.il<http://www.ipanel.co.il/>\r
\r
`,From:"info@ipanel.co.il",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"CN800M"},{Date:"10/14/2013 5:43:55 AM",Subject:"Meetups this week with: Or Aricha, WebRTC IL Members, Entrepreneurs, and others",Body:`\r
        [http://www.meetup.com/t/img/wc1f.1/logo_52x35.gif] <http://www.meetup.com/t/wc1f.1_1>\r
\r
\r
Your calendar for the week of October 14\r
\r
Hi Alexander Bol, here's what Meetup looks like for you this week.\r
\r
Your friends\r
Or Aricha is attending\r
[http://photos3.meetupstatic.com/photos/event/a/9/2/6/thumb_244543302.jpeg] <http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_gp?gj=wc1f.1_g&rv=wc1f.1_g>\r
\r
Front-End.IL<http://www.meetup.com/FrontEnd-IL/t/wc1f.1_wr2/?gj=wc1f.1_c&rv=wc1f.1_c>\r
Meetup 4 - Responsive Web Design & Front-End Unit Testing<http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_gnl?gj=wc1f.1_e&rv=wc1f.1_e>\r
Tuesday, 5:30 PM Oct 15\r
[http://photos4.meetupstatic.com/photos/member/1/3/d/a/thumb_91265082.jpeg]<http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p> [http://photos3.meetupstatic.com/photos/member/4/7/c/4/thumb_124998372.jpeg] <http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos3.meetupstatic.com/photos/member/d/4/6/e/thumb_112674382.jpeg] <http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos1.meetupstatic.com/photos/member/8/f/b/8/thumb_120516792.jpeg] <http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos2.meetupstatic.com/photos/member/4/7/6/thumb_136861142.jpeg] <http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos2.meetupstatic.com/photos/member/d/e/a/0/thumb_68516992.jpeg] <http://www.meetup.com/FrontEnd-IL/events/138093802/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>\r
109 FEDs\r
\r
Top Meetups for you\r
Tech\r
[http://img1.meetupstatic.com/img/nobodies_50.png] <http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_gp?gj=wc1f.1_g&rv=wc1f.1_g>\r
\r
WebRTC IL<http://www.meetup.com/WebRTC-IL/t/wc1f.1_wr2/?gj=wc1f.1_c&rv=wc1f.1_c>\r
WebRTC IL Meeting: NAT Traversal<http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_gnl?gj=wc1f.1_e&rv=wc1f.1_e>\r
Monday, 5:00 PM Oct 14\r
[http://photos4.meetupstatic.com/photos/member/1/0/1/0/thumb_99844112.jpeg]<http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p> [http://photos2.meetupstatic.com/photos/member/a/c/a/thumb_121922762.jpeg] <http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos3.meetupstatic.com/photos/member/c/c/9/e/thumb_111832382.jpeg] <http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos2.meetupstatic.com/photos/member/3/f/6/7/thumb_18016231.jpeg] <http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos1.meetupstatic.com/photos/member/7/2/d/a/thumb_66089402.jpeg] <http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos3.meetupstatic.com/photos/member/b/d/0/8/thumb_69888392.jpeg] <http://www.meetup.com/WebRTC-IL/events/142962072/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>\r
36 Members\r
\r
[http://photos4.meetupstatic.com/photos/event/9/b/2/thumb_278102482.jpeg] <http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_gp?gj=wc1f.1_g&rv=wc1f.1_g>\r
\r
Cleanweb Israel powered by Terralab Ventures<http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/t/wc1f.1_wr2/?gj=wc1f.1_c&rv=wc1f.1_c>\r
Make Profit and Change the World<http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_gnl?gj=wc1f.1_e&rv=wc1f.1_e>\r
Monday, 6:30 PM Oct 14\r
[http://photos4.meetupstatic.com/photos/member/a/8/e/0/thumb_58903232.jpeg]<http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p> [http://photos1.meetupstatic.com/photos/member/3/a/e/a/thumb_139035082.jpeg] <http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos1.meetupstatic.com/photos/member/a/e/6/2/thumb_119864642.jpeg] <http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos1.meetupstatic.com/photos/member/e/3/a/thumb_41343642.jpeg] <http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos3.meetupstatic.com/photos/member/4/7/4/2/thumb_125178242.jpeg] <http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos4.meetupstatic.com/photos/member/2/7/3/0/thumb_33010032.jpeg] <http://www.meetup.com/Cleanweb-Israel-powered-by-Terralab-Ventures/events/142731392/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>\r
46 Entrepreneurs\r
\r
[http://photos4.meetupstatic.com/photos/event/1/3/8/thumb_271320312.jpeg] <http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_gp?gj=wc1f.1_g&rv=wc1f.1_g>\r
\r
PTT - Pushing Technology into Tourism<http://www.meetup.com/PTT-Joy-Makers/t/wc1f.1_wr2/?gj=wc1f.1_c&rv=wc1f.1_c>\r
Interesting presentations that invite original ideas<http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_gnl?gj=wc1f.1_e&rv=wc1f.1_e>\r
Tuesday, 5:00 PM Oct 15\r
[http://photos2.meetupstatic.com/photos/member/b/d/2/6/thumb_116808422.jpeg]<http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p> [http://photos3.meetupstatic.com/photos/member/8/3/c/4/thumb_132753732.jpeg] <http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos3.meetupstatic.com/photos/member/9/0/2/4/thumb_8856900.jpeg] <http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos4.meetupstatic.com/photos/member/9/4/f/4/thumb_151538132.jpeg] <http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos3.meetupstatic.com/photos/member/3/b/1/2/thumb_43755122.jpeg] <http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos2.meetupstatic.com/photos/member/4/7/6/thumb_136861142.jpeg] <http://www.meetup.com/PTT-Joy-Makers/events/139399602/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>\r
49 Joy Makers\r
\r
[http://photos4.meetupstatic.com/photos/event/2/f/8/2/thumb_118452162.jpeg] <http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_gp?gj=wc1f.1_g&rv=wc1f.1_g>\r
\r
Hub Tel Aviv - TECH on BEER<http://www.meetup.com/Tel-Aviv-Nightowls/t/wc1f.1_wr2/?gj=wc1f.1_c&rv=wc1f.1_c>\r
Funding High Impact Startups - TECH on BEER @ DLD Tel Aviv Festival<http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_gnl?gj=wc1f.1_e&rv=wc1f.1_e>\r
Tuesday, 6:30 PM Oct 15\r
[http://photos3.meetupstatic.com/photos/member/3/e/f/0/thumb_111196112.jpeg]<http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p> [http://photos2.meetupstatic.com/photos/member/5/9/e/e/thumb_43283022.jpeg] <http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos4.meetupstatic.com/photos/member/a/8/e/0/thumb_58903232.jpeg] <http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos1.meetupstatic.com/photos/member/6/1/e/1/thumb_12025057.jpeg] <http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos2.meetupstatic.com/photos/member/3/0/d/6/thumb_25032502.jpeg] <http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>  [http://photos2.meetupstatic.com/photos/member/8/4/6/2/thumb_3453890.jpeg] <http://www.meetup.com/Tel-Aviv-Nightowls/events/139816662/t/wc1f.1_ppl?gj=wc1f.1_p&rv=wc1f.1_p>\r
187 Techies\r
\r
Start your own Tech Meetup →<http://www.meetup.com/create/t/wc1f.1_smp?ic=wc1f.1_s>\r
See all Meetups in your area →<http://www.meetup.com/find/?events=true&eventFilter=mysugg>\r
\r
\r
Unsubscribe<http://www.meetup.com/__ms97594362/account/optout/?submit=true&email=city_news&expires=1381891432218&sig=27f13acc34605b1b8f8d14caa3db8ef1ffa7c036> from this email\r
\r
Add info@meetup.com<mailto:info@meetup.com> to your address book to receive all Meetup emails\r
\r
Meetup, POB 4668 #37895 NY NY USA 10163\r
\r
Meetup HQ in NYC is hiring! meetup.com/jobs<http://www.meetup.com/jobs/>\r
`,From:"info@meetup.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"3CLS7M"},{Date:"5/5/2020 5:13:36 PM",Subject:"Want access to hands-on, advanced, Neo4j training - for free?",Body:`[https://go.neo4j.com/rs/710-RRC-335/images/get-certified-banner.png]\r
\r
We’re hosting 8 virtual, advanced-training sessions, available to all our Neo4j Certified Professionals<https://message.neo4j.com/By00ER2CN00060TR01X1bQY>, at no cost, over the course of the year. If you cannot attend the live session, the sessions will be recorded and made available for you to view at your leisure.\r
\r
Links and more info will be available soon, but for now, mark your calendars (and if you’re not already certified, get certified<https://message.neo4j.com/By00ER2CN00060TR01X1bQY>)!\r
\r
Upcoming Training Sessions:\r
Scheduled and Announced:\r
\r
June 23: Cypher Query Tuning\r
10:00-14:00 EDT | 14:00-18:00 GMT\r
\r
June 24: Neo4j Graph Algorithms for Data Science\r
10:00-14:00 EDT | 14:00-18:00 GMT\r
\r
Coming soon:\r
\r
October 6–8: TBD\r
10:00–14:00 EDT | 14:00–18:00 GMT\r
\r
October 13–15: TBD\r
10:00–14:00 EDT | 14:00–18:00 GMT\r
\r
Help us select the upcoming advanced-training topics:\r
\r
Vote for Advanced-Training Topics<https://message.neo4j.com/wR1CN6YR10000byF00Q2Y0T>\r
\r
\r
How to access these training sessions:\r
\r
To take advantage of this opportunity, you must be a Neo4j Certified Professional<https://message.neo4j.com/By00ER2CN00060TR01X1bQY>.\r
\r
Already certified?\r
Login to Neo4j Community Site<https://message.neo4j.com/n0Rb0dW02QN10CR01y00YV6> with the email associated with your certification and your membership will automatically be granted into the Neo4j Certified Professionals group<https://message.neo4j.com/Q0TC01R0RZ21Q0NyY00G6b0>.\r
Links for the training sessions will be made available in a private category<https://message.neo4j.com/v0610NU00Y1CRbIyR02Q000>, accessible only to approved members of the Neo4j Certified Professionals group.\r
\r
Not Certified?\r
Take the Neo4j Certification exam now! It’s only 1-hour long and free!\r
\r
Get Certified<https://message.neo4j.com/By00ER2CN00060TR01X1bQY>\r
\r
\r
[https://go.neo4j.com/rs/710-RRC-335/images/certification-badge.jpeg]<https://message.neo4j.com/By00ER2CN00060TR01X1bQY>\r
\r
Karin Wolok\r
'Mother of Nodes', Neo4j\r
\r
[https://go.neo4j.com/rs/710-RRC-335/images/neo4j-signature-logo.png]\r
\r
\r
© 2020 Neo4j, Inc.\r
\r
\r
neo4j.com<https://message.neo4j.com/WR0yXNR610e2CYb00Q01V00> | privacy policy<https://message.neo4j.com/dY01byfNVQ0C100R6Y020R0> | update subscriptions<https://message.neo4j.com/ugN0001R610Y0Z02VbQRCy0>\r
\r
\r
\r
111 E 5th Ave,  San Mateo, CA 94401\r
P: +1 855 636 4532<https://message.neo4j.com/DRh60000CR100V0y1N2b0YQ>\r
\r
\r
[https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-color/twitter@2x.png]<https://message.neo4j.com/x0R0000V2iy01NR01Y6b1CQ>\r
\r
\r
[https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-color/youtube@2x.png]<https://message.neo4j.com/MN0C0Q01RU6yY00J10bR012>\r
\r
\r
[https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-color/facebook@2x.png]<https://message.neo4j.com/h1by26R00R000QYUN020CK1>\r
\r
\r
[https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-color/linkedin@2x.png]<https://message.neo4j.com/wR1CN6YR10000byL00Q230U>\r
\r
\r
\r
\r
This email was sent to alexbol99@gmail.com. If you no longer wish to receive these emails you may unsubscribe<https://message.neo4j.com/u/CRb00M0410UR0NY12Q0yC06> at any time.\r
`,From:"community@neo4j.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"OU5MJH"},{Date:"10/27/2021 6:43:52 PM",Subject:"Re: Ryanair Ref: 11699320/G2THHY OTA claim",Body:`\r
\r
[https://s3-eu-west-1.amazonaws.com/fr-prod-zendesk-prod-s3logos/logos/Ryanair_logo.png] <https://www.ryanair.com/en/>\r
\r
\r
\r
Your request (11699320) has been updated. To add additional comments, reply to this email.\r
\r
Gabor T. (Ryanair)\r
\r
27 Oct 2021, 16:43 IST\r
\r
Dear Alexander Bol,\r
\r
We refer to your recent correspondence dated 18/10/2021.\r
\r
Thank you for providing us with your bank details. We wish to confirm that a transfer for the sum of $160.00 has been processed by Ryanair.\r
\r
Please allow 10 working days for this amount to reach your account.\r
\r
Please be advised that we calculate payment based on the applicable exchange rate provided on (www.xe.com<http://www.xe.com>) for the date your booking was made. Therefore, the historical currency rates of the 05/04/2021 to which the claim is related was used.\r
\r
Yours sincerely,\r
\r
Gabor T.\r
Customer Services\r
\r
\r
\r
Alex Bol\r
\r
18 Oct 2021, 17:40 IST\r
\r
Dear Gabor,\r
\r
I attached a requested bank confirmation to this email.\r
Please process my claim.\r
\r
Thanks and Best wishes,\r
Alexander\r
\r
\r
\r
Attachment(s)\r
Bank account ownership.pdf<https://help.ryanair.com/attachments/token/vz8CfLomM0sn9Iq9EH1ivBh6s/?name=Bank+account+ownership.pdf>\r
\r
\r
\r
Gabor T. (Ryanair)\r
\r
30 Sep 2021, 08:43 IST\r
\r
Dear Alexander Bol,\r
\r
I refer to your recent correspondence dated 24/09/2021.\r
\r
In order for us to proceed with the relevant payment that may be due, please forward us an official proof (top of bank statement) on which it is clearly visible that the provided bank details belong to you (the account holder name, IBAN and SWIFT/BIC code has to be visible). You can upload the requested information by replying to this email.\r
\r
Once we have the relevant document submitted, we will be able to process the claim, without further delay.\r
\r
Yours sincerely,\r
\r
Gabor T.\r
Customer Services\r
\r
\r
\r
Ryanair System Admin (Ryanair)\r
\r
24 Sep 2021, 12:42 IST\r
\r
Alexander Bol\r
alexbol99@gmail.com<mailto:alexbol99@gmail.com>\r
G2THHY\r
\r
\r
\r
E-MAIL DISCLAIMER\r
This e-mail and any files and attachments transmitted with it are confidential and may be legally privileged. They are intended solely for the use of the intended recipient. Any views and opinions expressed are those of the individual author/sender and are not necessarily shared or endorsed by Ryanair Holdings plc or any associated or related company. In particular e-mail transmissions are not binding for the purposes of forming a contract to sell airline seats, directly or via promotions, and do not form a contractual obligation of any type.\r
Such contracts can only be formed in writing by post or fax, duly signed by a senior company executive, subject to approval by the Board of Directors.\r
\r
The content of this e-mail or any file or attachment transmitted with it may have been changed or altered without the consent of the author. If you are not the intended recipient of this e-mail, you are hereby notified that any review, dissemination, disclosure, alteration, printing, circulation or transmission of, or any action taken or omitted in reliance on this e-mail or any file or attachment transmitted with it is prohibited and may be unlawful.\r
\r
If you have received this e-mail in error please notify Ryanair Holdings plc by contacting Ryanair Holdings plc (Company No. 249885) / Ryanair DAC. (Company No. 104547). Registered in the Republic Of Ireland. Airside Business Park, Swords, Co Dublin, Ireland.\r
\r
trigger_logic_for_ryanair\r
\r
\r
\r
\r
\r
Ryanair Holdings plc (Company No. 249885) / Ryanair D.A.C. (Company No. 104547).\r
Registered in the Republic of Ireland. With registered address Airside Business Park, Swords, Co. Dublin, Ireland.\r
\r
\r
\r
\r
\r
[Q5O4XO-0XD7]\r
`,From:"support@ryanairsupport.zendesk.com",To:"alexbol99@gmail.com",CC:"",Attachments:"","Attachments Path":"",id:"2R6C5M"},{Date:"10/18/2021 7:39:49 PM",Subject:"Re: Ryanair Ref: 11699320/G2THHY OTA claim",Body:`Dear Gabor,\r
\r
I attached a requested bank confirmation to this email.\r
Please process my claim.\r
\r
Thanks and Best wishes,\r
Alexander\r
\r
\r
On Thu, Sep 30, 2021 at 10:43 AM Ryanair <support@ryanairsupport.zendesk.com>\r
wrote:\r
\r
> [image: Ryanair] <https://www.ryanair.com/en/>\r
>\r
> Your request (11699320) has been updated. To add additional comments,\r
> reply to this email.\r
>\r
> *Gabor T.* (Ryanair)\r
>\r
> 30 Sep 2021, 08:43 IST\r
> Dear Alexander Bol,\r
>\r
> I refer to your recent correspondence dated 24/09/2021.\r
>\r
> In order for us to proceed with the relevant payment that may be due,\r
> please forward us an official proof (top of bank statement) on which it is\r
> clearly visible that the provided bank details belong to you (the account\r
> holder name, IBAN and SWIFT/BIC code has to be visible). You can upload the\r
> requested information by replying to this email.\r
>\r
> Once we have the relevant document submitted, we will be able to process\r
> the claim, without further delay.\r
>\r
> Yours sincerely,\r
>\r
> Gabor T.\r
> Customer Services\r
>\r
> *Ryanair System Admin* (Ryanair)\r
>\r
> 24 Sep 2021, 12:42 IST\r
>\r
> Alexander Bol\r
> alexbol99@gmail.com\r
> G2THHY\r
>\r
> E-MAIL DISCLAIMER\r
> This e-mail and any files and attachments transmitted with it are\r
> confidential and may be legally privileged. They are intended solely for\r
> the use of the intended recipient. Any views and opinions expressed are\r
> those of the individual author/sender and are not necessarily shared or\r
> endorsed by Ryanair Holdings plc or any associated or related company. In\r
> particular e-mail transmissions are not binding for the purposes of forming\r
> a contract to sell airline seats, directly or via promotions, and do not\r
> form a contractual obligation of any type.\r
> Such contracts can only be formed in writing by post or fax, duly signed\r
> by a senior company executive, subject to approval by the Board of\r
> Directors.\r
>\r
> The content of this e-mail or any file or attachment transmitted with it\r
> may have been changed or altered without the consent of the author. If you\r
> are not the intended recipient of this e-mail, you are hereby notified that\r
> any review, dissemination, disclosure, alteration, printing, circulation or\r
> transmission of, or any action taken or omitted in reliance on this e-mail\r
> or any file or attachment transmitted with it is prohibited and may be\r
> unlawful.\r
>\r
> If you have received this e-mail in error please notify Ryanair Holdings\r
> plc by contacting Ryanair Holdings plc (Company No. 249885) / Ryanair DAC.\r
> (Company No. 104547). Registered in the Republic Of Ireland. Airside\r
> Business Park, Swords, Co Dublin, Ireland.\r
> trigger_logic_for_ryanair\r
> Ryanair Holdings plc (Company No. 249885) / Ryanair D.A.C. (Company No.\r
> 104547).\r
> Registered in the Republic of Ireland. With registered address Airside\r
> Business Park, Swords, Co. Dublin, Ireland.\r
> [Q5O4XO-0XD7]\r
>\r
`,From:"alexbol99@gmail.com",To:"support+id11699320@ryanairsupport.zendesk.com",CC:"",Attachments:"Bank account ownership.pdf; ","Attachments Path":"/Users/alexanderbol/Documents/CodingAcademy/Day3/MacUncle_September 6, 2023 4:32 PM/Mail/Starred.mbox/Attachments",id:"Z2JZMO"}];function _y(){localStorage.getItem("mails")||localStorage.setItem("mails",JSON.stringify(ky));function e(){return b.jsx("div",{children:b.jsx("h2",{children:"404 Page not found"})})}return b.jsx(I0,{children:b.jsxs(x0,{children:[b.jsx(kt,{path:"/",element:b.jsx(z0,{})}),b.jsx(kt,{path:"/inbox/:mailId?",element:b.jsx(fr,{})}),b.jsx(kt,{path:"/starred/:mailId?",element:b.jsx(fr,{})}),b.jsx(kt,{path:"/sent/:mailId?",element:b.jsx(fr,{})}),b.jsx(kt,{path:"/drafts/:mailId?",element:b.jsx(fr,{})}),b.jsx(kt,{path:"/trash/:mailId?",element:b.jsx(fr,{})}),b.jsx(kt,{path:"*",element:b.jsx(e,{})})]})})}Oo.createRoot(document.getElementById("root")).render(b.jsx(_y,{}));
