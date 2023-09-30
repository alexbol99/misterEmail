function mp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ef={exports:{}},Ni={},tf={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),pp=Symbol.for("react.portal"),hp=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),_p=Symbol.for("react.suspense"),kp=Symbol.for("react.memo"),xp=Symbol.for("react.lazy"),uu=Symbol.iterator;function Sp(e){return e===null||typeof e!="object"?null:(e=uu&&e[uu]||e["@@iterator"],typeof e=="function"?e:null)}var nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rf=Object.assign,af={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||nf}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function of(){}of.prototype=Qn.prototype;function Jl(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||nf}var $l=Jl.prototype=new of;$l.constructor=Jl;rf($l,Qn.prototype);$l.isPureReactComponent=!0;var cu=Array.isArray,lf=Object.prototype.hasOwnProperty,Ql={current:null},sf={key:!0,ref:!0,__self:!0,__source:!0};function uf(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)lf.call(t,r)&&!sf.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:$r,type:e,key:i,ref:o,props:a,_owner:Ql.current}}function Cp(e,t){return{$$typeof:$r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function Pp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fu=/\/+/g;function ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pp(""+e.key):t.toString(36)}function Da(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $r:case pp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ro(o,0):r,cu(a)?(n="",e!=null&&(n=e.replace(fu,"$&/")+"/"),Da(a,t,n,"",function(u){return u})):a!=null&&(Kl(a)&&(a=Cp(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(fu,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",cu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ro(i,l);o+=Da(i,t,n,s,a)}else if(s=Sp(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ro(i,l++),o+=Da(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(e,t,n){if(e==null)return e;var r=[],a=0;return Da(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Ap(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Oa={transition:null},Ep={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Ql};D.Children={map:fa,forEach:function(e,t,n){fa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fa(e,function(){t++}),t},toArray:function(e){return fa(e,function(t){return t})||[]},only:function(e){if(!Kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Qn;D.Fragment=hp;D.Profiler=gp;D.PureComponent=Jl;D.StrictMode=vp;D.Suspense=_p;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ep;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rf({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Ql.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)lf.call(t,s)&&!sf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$r,type:e.type,key:a,ref:i,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:wp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yp,_context:e},e.Consumer=e};D.createElement=uf;D.createFactory=function(e){var t=uf.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:bp,render:e}};D.isValidElement=Kl;D.lazy=function(e){return{$$typeof:xp,_payload:{_status:-1,_result:e},_init:Ap}};D.memo=function(e,t){return{$$typeof:kp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Oa.transition;Oa.transition={};try{e()}finally{Oa.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return ge.current.useCallback(e,t)};D.useContext=function(e){return ge.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};D.useEffect=function(e,t){return ge.current.useEffect(e,t)};D.useId=function(){return ge.current.useId()};D.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ge.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};D.useRef=function(e){return ge.current.useRef(e)};D.useState=function(e){return ge.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ge.current.useTransition()};D.version="18.2.0";tf.exports=D;var _=tf.exports;const Ri=qc(_),Np=mp({__proto__:null,default:Ri},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=_,Lp=Symbol.for("react.element"),Tp=Symbol.for("react.fragment"),Ip=Object.prototype.hasOwnProperty,jp=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fp={key:!0,ref:!0,__self:!0,__source:!0};function cf(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ip.call(t,r)&&!Fp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Lp,type:e,key:i,ref:o,props:a,_owner:jp.current}}Ni.Fragment=Tp;Ni.jsx=cf;Ni.jsxs=cf;ef.exports=Ni;var b=ef.exports,zo={},ff={exports:{}},Ee={},df={exports:{}},mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,j){var F=R.length;R.push(j);e:for(;0<F;){var Q=F-1>>>1,ae=R[Q];if(0<a(ae,j))R[Q]=j,R[F]=ae,F=Q;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var j=R[0],F=R.pop();if(F!==j){R[0]=F;e:for(var Q=0,ae=R.length,ua=ae>>>1;Q<ua;){var Zt=2*(Q+1)-1,no=R[Zt],Ht=Zt+1,ca=R[Ht];if(0>a(no,F))Ht<ae&&0>a(ca,no)?(R[Q]=ca,R[Ht]=F,Q=Ht):(R[Q]=no,R[Zt]=F,Q=Zt);else if(Ht<ae&&0>a(ca,F))R[Q]=ca,R[Ht]=F,Q=Ht;else break e}}return j}function a(R,j){var F=R.sortIndex-j.sortIndex;return F!==0?F:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,h=3,g=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=R)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function w(R){if(v=!1,p(R),!y)if(n(s)!==null)y=!0,eo(k);else{var j=n(u);j!==null&&to(w,j.startTime-R)}}function k(R,j){y=!1,v&&(v=!1,m(T),T=-1),g=!0;var F=h;try{for(p(j),d=n(s);d!==null&&(!(d.expirationTime>j)||R&&!ce());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,h=d.priorityLevel;var ae=Q(d.expirationTime<=j);j=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(s)&&r(s),p(j)}else r(s);d=n(s)}if(d!==null)var ua=!0;else{var Zt=n(u);Zt!==null&&to(w,Zt.startTime-j),ua=!1}return ua}finally{d=null,h=F,g=!1}}var C=!1,P=null,T=-1,N=5,I=-1;function ce(){return!(e.unstable_now()-I<N)}function wt(){if(P!==null){var R=e.unstable_now();I=R;var j=!0;try{j=P(!0,R)}finally{j?tr():(C=!1,P=null)}}else C=!1}var tr;if(typeof c=="function")tr=function(){c(wt)};else if(typeof MessageChannel<"u"){var su=new MessageChannel,dp=su.port2;su.port1.onmessage=wt,tr=function(){dp.postMessage(null)}}else tr=function(){S(wt,0)};function eo(R){P=R,C||(C=!0,tr())}function to(R,j){T=S(function(){R(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,eo(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var F=h;h=j;try{return R()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=h;h=R;try{return j()}finally{h=F}},e.unstable_scheduleCallback=function(R,j,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=F+ae,R={id:f++,callback:j,priorityLevel:R,startTime:F,expirationTime:ae,sortIndex:-1},F>Q?(R.sortIndex=F,t(u,R),n(s)===null&&R===n(u)&&(v?(m(T),T=-1):v=!0,to(w,F-Q))):(R.sortIndex=ae,t(s,R),y||g||(y=!0,eo(k))),R},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(R){var j=h;return function(){var F=h;h=j;try{return R.apply(this,arguments)}finally{h=F}}}})(mf);df.exports=mf;var Mp=df.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf=_,Ae=Mp;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hf=new Set,Pr={};function pn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Pr[e]=t,e=0;e<t.length;e++)hf.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=Object.prototype.hasOwnProperty,Dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,du={},mu={};function Op(e){return Wo.call(mu,e)?!0:Wo.call(du,e)?!1:Dp.test(e)?mu[e]=!0:(du[e]=!0,!1)}function zp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wp(e,t,n,r){if(t===null||typeof t>"u"||zp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ql,es);ue[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ql,es);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ql,es);ue[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ts(e,t,n,r){var a=ue.hasOwnProperty(t)?ue[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wp(t,n,a,r)&&(n=null),r||a===null?Op(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),_n=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),ns=Symbol.for("react.strict_mode"),Bo=Symbol.for("react.profiler"),vf=Symbol.for("react.provider"),gf=Symbol.for("react.context"),rs=Symbol.for("react.forward_ref"),Go=Symbol.for("react.suspense"),Uo=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),yf=Symbol.for("react.offscreen"),pu=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ao;function cr(e){if(ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ao=t&&t[1]||""}return`
`+ao+e}var io=!1;function oo(e,t){if(!e||io)return"";io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function Bp(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=oo(e.type,!1),e;case 11:return e=oo(e.type.render,!1),e;case 1:return e=oo(e.type,!0),e;default:return""}}function Vo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case _n:return"Portal";case Bo:return"Profiler";case ns:return"StrictMode";case Go:return"Suspense";case Uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gf:return(e.displayName||"Context")+".Consumer";case vf:return(e._context.displayName||"Context")+".Provider";case rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:Vo(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return Vo(e(t))}catch{}}return null}function Gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vo(t);case 8:return t===ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e){var t=wf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ma(e){e._valueTracker||(e._valueTracker=Up(e))}function bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yo(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _f(e,t){t=t.checked,t!=null&&ts(e,"checked",t,!1)}function Xo(e,t){_f(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zo(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zo(e,t,n){(t!=="number"||Qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(fr(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function kf(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pa,Sf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vp=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Cf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Pf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Cf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Yp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(e,t){if(t){if(Yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,Dn=null,On=null;function wu(e){if(e=qr(e)){if(typeof qo!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Fi(t),qo(e.stateNode,e.type,t))}}function Af(e){Dn?On?On.push(e):On=[e]:Dn=e}function Ef(){if(Dn){var e=Dn,t=On;if(On=Dn=null,wu(e),t)for(e=0;e<t.length;e++)wu(t[e])}}function Nf(e,t){return e(t)}function Rf(){}var lo=!1;function Lf(e,t,n){if(lo)return e(t,n);lo=!0;try{return Nf(e,t,n)}finally{lo=!1,(Dn!==null||On!==null)&&(Rf(),Ef())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=Fi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var el=!1;if(ut)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){el=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{el=!1}function Xp(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var vr=!1,Ka=null,qa=!1,tl=null,Zp={onError:function(e){vr=!0,Ka=e}};function Hp(e,t,n,r,a,i,o,l,s){vr=!1,Ka=null,Xp.apply(Zp,arguments)}function Jp(e,t,n,r,a,i,o,l,s){if(Hp.apply(this,arguments),vr){if(vr){var u=Ka;vr=!1,Ka=null}else throw Error(x(198));qa||(qa=!0,tl=u)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bu(e){if(hn(e)!==e)throw Error(x(188))}function $p(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return bu(a),e;if(i===r)return bu(a),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function If(e){return e=$p(e),e!==null?jf(e):null}function jf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jf(e);if(t!==null)return t;e=e.sibling}return null}var Ff=Ae.unstable_scheduleCallback,_u=Ae.unstable_cancelCallback,Qp=Ae.unstable_shouldYield,Kp=Ae.unstable_requestPaint,K=Ae.unstable_now,qp=Ae.unstable_getCurrentPriorityLevel,os=Ae.unstable_ImmediatePriority,Mf=Ae.unstable_UserBlockingPriority,ei=Ae.unstable_NormalPriority,eh=Ae.unstable_LowPriority,Df=Ae.unstable_IdlePriority,Li=null,qe=null;function th(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Li,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:ah,nh=Math.log,rh=Math.LN2;function ah(e){return e>>>=0,e===0?32:31-(nh(e)/rh|0)|0}var ha=64,va=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=dr(l):(i&=o,i!==0&&(r=dr(i)))}else o=n&~a,o!==0?r=dr(o):i!==0&&(r=dr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),a=1<<n,r|=e[n],t&=~a;return r}function ih(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ye(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=ih(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Of(){var e=ha;return ha<<=1,!(ha&4194240)&&(ha=64),e}function so(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ye(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var z=0;function zf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wf,ss,Bf,Gf,Uf,rl=!1,ga=[],Rt=null,Lt=null,Tt=null,Nr=new Map,Rr=new Map,St=[],sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function ar(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=qr(t),t!==null&&ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function uh(e,t,n,r,a){switch(t){case"focusin":return Rt=ar(Rt,e,t,n,r,a),!0;case"dragenter":return Lt=ar(Lt,e,t,n,r,a),!0;case"mouseover":return Tt=ar(Tt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Nr.set(i,ar(Nr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Rr.set(i,ar(Rr.get(i)||null,e,t,n,r,a)),!0}return!1}function Vf(e){var t=Kt(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Tf(n),t!==null){e.blockedOn=t,Uf(e.priority,function(){Bf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ko=r,n.target.dispatchEvent(r),Ko=null}else return t=qr(n),t!==null&&ss(t),e.blockedOn=n,!1;t.shift()}return!0}function xu(e,t,n){za(e)&&n.delete(t)}function ch(){rl=!1,Rt!==null&&za(Rt)&&(Rt=null),Lt!==null&&za(Lt)&&(Lt=null),Tt!==null&&za(Tt)&&(Tt=null),Nr.forEach(xu),Rr.forEach(xu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,ch)))}function Lr(e){function t(a){return ir(a,e)}if(0<ga.length){ir(ga[0],e);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&ir(Rt,e),Lt!==null&&ir(Lt,e),Tt!==null&&ir(Tt,e),Nr.forEach(t),Rr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&St.shift()}var zn=vt.ReactCurrentBatchConfig,ni=!0;function fh(e,t,n,r){var a=z,i=zn.transition;zn.transition=null;try{z=1,us(e,t,n,r)}finally{z=a,zn.transition=i}}function dh(e,t,n,r){var a=z,i=zn.transition;zn.transition=null;try{z=4,us(e,t,n,r)}finally{z=a,zn.transition=i}}function us(e,t,n,r){if(ni){var a=al(e,t,n,r);if(a===null)wo(e,t,r,ri,n),ku(e,r);else if(uh(a,e,t,n,r))r.stopPropagation();else if(ku(e,r),t&4&&-1<sh.indexOf(e)){for(;a!==null;){var i=qr(a);if(i!==null&&Wf(i),i=al(e,t,n,r),i===null&&wo(e,t,r,ri,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else wo(e,t,r,null,n)}}var ri=null;function al(e,t,n,r){if(ri=null,e=is(r),e=Kt(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ri=e,null}function Yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qp()){case os:return 1;case Mf:return 4;case ei:case eh:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Pt=null,cs=null,Wa=null;function Xf(){if(Wa)return Wa;var e,t=cs,n=t.length,r,a="value"in Pt?Pt.value:Pt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Wa=a.slice(e,1<r?1-r:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ya(){return!0}function Su(){return!1}function Ne(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ya:Su,this.isPropagationStopped=Su,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=Ne(Kn),Kr=H({},Kn,{view:0,detail:0}),mh=Ne(Kr),uo,co,or,Ti=H({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(uo=e.screenX-or.screenX,co=e.screenY-or.screenY):co=uo=0,or=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:co}}),Cu=Ne(Ti),ph=H({},Ti,{dataTransfer:0}),hh=Ne(ph),vh=H({},Kr,{relatedTarget:0}),fo=Ne(vh),gh=H({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=Ne(gh),wh=H({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bh=Ne(wh),_h=H({},Kn,{data:0}),Pu=Ne(_h),kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ch(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sh[e])?!!t[e]:!1}function ds(){return Ch}var Ph=H({},Kr,{key:function(e){if(e.key){var t=kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ah=Ne(Ph),Eh=H({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=Ne(Eh),Nh=H({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Rh=Ne(Nh),Lh=H({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Th=Ne(Lh),Ih=H({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jh=Ne(Ih),Fh=[9,13,27,32],ms=ut&&"CompositionEvent"in window,gr=null;ut&&"documentMode"in document&&(gr=document.documentMode);var Mh=ut&&"TextEvent"in window&&!gr,Zf=ut&&(!ms||gr&&8<gr&&11>=gr),Eu=String.fromCharCode(32),Nu=!1;function Hf(e,t){switch(e){case"keyup":return Fh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Dh(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:(Nu=!0,Eu);case"textInput":return e=t.data,e===Eu&&Nu?null:e;default:return null}}function Oh(e,t){if(xn)return e==="compositionend"||!ms&&Hf(e,t)?(e=Xf(),Wa=cs=Pt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zf&&t.locale!=="ko"?null:t.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zh[e.type]:t==="textarea"}function $f(e,t,n,r){Af(r),t=ai(t,"onChange"),0<t.length&&(n=new fs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Tr=null;function Wh(e){ld(e,0)}function Ii(e){var t=Pn(e);if(bf(t))return e}function Bh(e,t){if(e==="change")return t}var Qf=!1;if(ut){var mo;if(ut){var po="oninput"in document;if(!po){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),po=typeof Lu.oninput=="function"}mo=po}else mo=!1;Qf=mo&&(!document.documentMode||9<document.documentMode)}function Tu(){yr&&(yr.detachEvent("onpropertychange",Kf),Tr=yr=null)}function Kf(e){if(e.propertyName==="value"&&Ii(Tr)){var t=[];$f(t,Tr,e,is(e)),Lf(Wh,t)}}function Gh(e,t,n){e==="focusin"?(Tu(),yr=t,Tr=n,yr.attachEvent("onpropertychange",Kf)):e==="focusout"&&Tu()}function Uh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(Tr)}function Vh(e,t){if(e==="click")return Ii(t)}function Yh(e,t){if(e==="input"||e==="change")return Ii(t)}function Xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Xh;function Ir(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Wo.call(t,a)||!Ze(e[a],t[a]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ed(){for(var e=window,t=Qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qa(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zh(e){var t=ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qf(n.ownerDocument.documentElement,n)){if(r!==null&&ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ju(n,i);var o=ju(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hh=ut&&"documentMode"in document&&11>=document.documentMode,Sn=null,il=null,wr=null,ol=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ol||Sn==null||Sn!==Qa(r)||(r=Sn,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Ir(wr,r)||(wr=r,r=ai(il,"onSelect"),0<r.length&&(t=new fs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},ho={},td={};ut&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function ji(e){if(ho[e])return ho[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return ho[e]=t[n];return e}var nd=ji("animationend"),rd=ji("animationiteration"),ad=ji("animationstart"),id=ji("transitionend"),od=new Map,Mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){od.set(e,t),pn(t,[e])}for(var vo=0;vo<Mu.length;vo++){var go=Mu[vo],Jh=go.toLowerCase(),$h=go[0].toUpperCase()+go.slice(1);Vt(Jh,"on"+$h)}Vt(nd,"onAnimationEnd");Vt(rd,"onAnimationIteration");Vt(ad,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(id,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function Du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jp(r,t,void 0,e),e.currentTarget=null}function ld(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Du(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Du(a,l,u),i=s}}}if(qa)throw e=tl,qa=!1,tl=null,e}function B(e,t){var n=t[fl];n===void 0&&(n=t[fl]=new Set);var r=e+"__bubble";n.has(r)||(sd(t,e,2,!1),n.add(r))}function yo(e,t,n){var r=0;t&&(r|=4),sd(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[ba]){e[ba]=!0,hf.forEach(function(n){n!=="selectionchange"&&(Qh.has(n)||yo(n,!1,e),yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,yo("selectionchange",!1,t))}}function sd(e,t,n,r){switch(Yf(t)){case 1:var a=fh;break;case 4:a=dh;break;default:a=us}n=a.bind(null,t,n,e),a=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wo(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Kt(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Lf(function(){var u=i,f=is(n),d=[];e:{var h=od.get(e);if(h!==void 0){var g=fs,y=e;switch(e){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":g=Ah;break;case"focusin":y="focus",g=fo;break;case"focusout":y="blur",g=fo;break;case"beforeblur":case"afterblur":g=fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rh;break;case nd:case rd:case ad:g=yh;break;case id:g=Th;break;case"scroll":g=mh;break;case"wheel":g=jh;break;case"copy":case"cut":case"paste":g=bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Au}var v=(t&4)!==0,S=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=Er(c,m),w!=null&&v.push(Fr(c,w,p)))),S)break;c=c.return}0<v.length&&(h=new g(h,y,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Ko&&(y=n.relatedTarget||n.fromElement)&&(Kt(y)||y[ct]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Kt(y):null,y!==null&&(S=hn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Cu,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Au,w="onPointerLeave",m="onPointerEnter",c="pointer"),S=g==null?h:Pn(g),p=y==null?h:Pn(y),h=new v(w,c+"leave",g,n,f),h.target=S,h.relatedTarget=p,w=null,Kt(f)===u&&(v=new v(m,c+"enter",y,n,f),v.target=p,v.relatedTarget=S,w=v),S=w,g&&y)t:{for(v=g,m=y,c=0,p=v;p;p=yn(p))c++;for(p=0,w=m;w;w=yn(w))p++;for(;0<c-p;)v=yn(v),c--;for(;0<p-c;)m=yn(m),p--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=yn(v),m=yn(m)}v=null}else v=null;g!==null&&Ou(d,h,g,v,!1),y!==null&&S!==null&&Ou(d,S,y,v,!0)}}e:{if(h=u?Pn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=Bh;else if(Ru(h))if(Qf)k=Yh;else{k=Uh;var C=Gh}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Vh);if(k&&(k=k(e,u))){$f(d,k,n,f);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Zo(h,"number",h.value)}switch(C=u?Pn(u):window,e){case"focusin":(Ru(C)||C.contentEditable==="true")&&(Sn=C,il=u,wr=null);break;case"focusout":wr=il=Sn=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,Fu(d,n,f);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":Fu(d,n,f)}var P;if(ms)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else xn?Hf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Zf&&n.locale!=="ko"&&(xn||T!=="onCompositionStart"?T==="onCompositionEnd"&&xn&&(P=Xf()):(Pt=f,cs="value"in Pt?Pt.value:Pt.textContent,xn=!0)),C=ai(u,T),0<C.length&&(T=new Pu(T,e,null,n,f),d.push({event:T,listeners:C}),P?T.data=P:(P=Jf(n),P!==null&&(T.data=P)))),(P=Mh?Dh(e,n):Oh(e,n))&&(u=ai(u,"onBeforeInput"),0<u.length&&(f=new Pu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=P))}ld(d,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Er(e,n),i!=null&&r.unshift(Fr(e,i,a)),i=Er(e,t),i!=null&&r.push(Fr(e,i,a))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Er(n,i),s!=null&&o.unshift(Fr(n,s,l))):a||(s=Er(n,i),s!=null&&o.push(Fr(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kh=/\r\n?/g,qh=/\u0000|\uFFFD/g;function zu(e){return(typeof e=="string"?e:""+e).replace(Kh,`
`).replace(qh,"")}function _a(e,t,n){if(t=zu(t),zu(e)!==t&&n)throw Error(x(425))}function ii(){}var ll=null,sl=null;function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cl=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,t1=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(n1)}:cl;function n1(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Lr(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+qn,Mr="__reactProps$"+qn,ct="__reactContainer$"+qn,fl="__reactEvents$"+qn,r1="__reactListeners$"+qn,a1="__reactHandles$"+qn;function Kt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bu(e);e!==null;){if(n=e[Qe])return n;e=Bu(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[Qe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Fi(e){return e[Mr]||null}var dl=[],An=-1;function Yt(e){return{current:e}}function U(e){0>An||(e.current=dl[An],dl[An]=null,An--)}function W(e,t){An++,dl[An]=e.current,e.current=t}var Wt={},pe=Yt(Wt),_e=Yt(!1),on=Wt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ke(e){return e=e.childContextTypes,e!=null}function oi(){U(_e),U(pe)}function Gu(e,t,n){if(pe.current!==Wt)throw Error(x(168));W(pe,t),W(_e,n)}function ud(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(x(108,Gp(e)||"Unknown",a));return H({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,on=pe.current,W(pe,e),W(_e,_e.current),!0}function Uu(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=ud(e,t,on),r.__reactInternalMemoizedMergedChildContext=e,U(_e),U(pe),W(pe,e)):U(_e),W(_e,n)}var at=null,Mi=!1,_o=!1;function cd(e){at===null?at=[e]:at.push(e)}function i1(e){Mi=!0,cd(e)}function Xt(){if(!_o&&at!==null){_o=!0;var e=0,t=z;try{var n=at;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,Mi=!1}catch(a){throw at!==null&&(at=at.slice(e+1)),Ff(os,Xt),a}finally{z=t,_o=!1}}return null}var En=[],Nn=0,si=null,ui=0,Le=[],Te=0,ln=null,ot=1,lt="";function $t(e,t){En[Nn++]=ui,En[Nn++]=si,si=e,ui=t}function fd(e,t,n){Le[Te++]=ot,Le[Te++]=lt,Le[Te++]=ln,ln=e;var r=ot;e=lt;var a=32-Ye(r)-1;r&=~(1<<a),n+=1;var i=32-Ye(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,ot=1<<32-Ye(t)+a|n<<a|r,lt=i+e}else ot=1<<i|n<<a|r,lt=e}function hs(e){e.return!==null&&($t(e,1),fd(e,1,0))}function vs(e){for(;e===si;)si=En[--Nn],En[Nn]=null,ui=En[--Nn],En[Nn]=null;for(;e===ln;)ln=Le[--Te],Le[Te]=null,lt=Le[--Te],Le[Te]=null,ot=Le[--Te],Le[Te]=null}var Pe=null,Ce=null,Y=!1,Ue=null;function dd(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Ce=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Ce=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(Y){var t=Ce;if(t){var n=t;if(!Vu(e,t)){if(ml(e))throw Error(x(418));t=It(n.nextSibling);var r=Pe;t&&Vu(e,t)?dd(r,n):(e.flags=e.flags&-4097|2,Y=!1,Pe=e)}}else{if(ml(e))throw Error(x(418));e.flags=e.flags&-4097|2,Y=!1,Pe=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function ka(e){if(e!==Pe)return!1;if(!Y)return Yu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=Ce)){if(ml(e))throw md(),Error(x(418));for(;t;)dd(e,t),t=It(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Pe?It(e.stateNode.nextSibling):null;return!0}function md(){for(var e=Ce;e;)e=It(e.nextSibling)}function Yn(){Ce=Pe=null,Y=!1}function gs(e){Ue===null?Ue=[e]:Ue.push(e)}var o1=vt.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ci=Yt(null),fi=null,Rn=null,ys=null;function ws(){ys=Rn=fi=null}function bs(e){var t=ci.current;U(ci),e._currentValue=t}function hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){fi=e,ys=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(ys!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(fi===null)throw Error(x(308));Rn=e,fi.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var qt=null;function _s(e){qt===null?qt=[e]:qt.push(e)}function pd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,_s(t)):(n.next=a.next,a.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,ft(e,n)}return a=r.interleaved,a===null?(t.next=t,_s(r)):(t.next=a.next,a.next=t),r.interleaved=t,ft(e,n)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}function Xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function di(e,t,n,r){var a=e.updateQueue;xt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=a.baseState;o=0,f=u=s=null,l=i;do{var h=l.lane,g=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(h=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=H({},d,h);break e;case 2:xt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,s=d):f=f.next=g,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);un|=o,e.lanes=o,e.memoizedState=d}}function Zu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(x(191,a));a.call(r)}}}var vd=new pf.Component().refs;function vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Di={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),a=Mt(e),i=st(r,a);i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,a),t!==null&&(Xe(t,e,a,r),Ga(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),a=Mt(e),i=st(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,a),t!==null&&(Xe(t,e,a,r),Ga(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Mt(e),a=st(n,r);a.tag=2,t!=null&&(a.callback=t),t=jt(e,a,r),t!==null&&(Xe(t,e,r,n),Ga(t,e,r))}};function Hu(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(a,i):!0}function gd(e,t,n){var r=!1,a=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=De(i):(a=ke(t)?on:pe.current,r=t.contextTypes,i=(r=r!=null)?Vn(e,a):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function gl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=vd,ks(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=De(i):(i=ke(t)?on:pe.current,a.context=Vn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(vl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Di.enqueueReplaceState(a,a.state,null),di(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===vd&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $u(e){var t=e._init;return t(e._payload)}function yd(e){function t(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function a(m,c){return m=Dt(m,c),m.index=0,m.sibling=null,m}function i(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,p,w){return c===null||c.tag!==6?(c=Eo(p,m.mode,w),c.return=m,c):(c=a(c,p),c.return=m,c)}function s(m,c,p,w){var k=p.type;return k===kn?f(m,c,p.props.children,w,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kt&&$u(k)===c.type)?(w=a(c,p.props),w.ref=lr(m,c,p),w.return=m,w):(w=Ha(p.type,p.key,p.props,null,m.mode,w),w.ref=lr(m,c,p),w.return=m,w)}function u(m,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=No(p,m.mode,w),c.return=m,c):(c=a(c,p.children||[]),c.return=m,c)}function f(m,c,p,w,k){return c===null||c.tag!==7?(c=an(p,m.mode,w,k),c.return=m,c):(c=a(c,p),c.return=m,c)}function d(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Eo(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case da:return p=Ha(c.type,c.key,c.props,null,m.mode,p),p.ref=lr(m,null,c),p.return=m,p;case _n:return c=No(c,m.mode,p),c.return=m,c;case kt:var w=c._init;return d(m,w(c._payload),p)}if(fr(c)||nr(c))return c=an(c,m.mode,p,null),c.return=m,c;xa(m,c)}return null}function h(m,c,p,w){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(m,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case da:return p.key===k?s(m,c,p,w):null;case _n:return p.key===k?u(m,c,p,w):null;case kt:return k=p._init,h(m,c,k(p._payload),w)}if(fr(p)||nr(p))return k!==null?null:f(m,c,p,w,null);xa(m,p)}return null}function g(m,c,p,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,l(c,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case da:return m=m.get(w.key===null?p:w.key)||null,s(c,m,w,k);case _n:return m=m.get(w.key===null?p:w.key)||null,u(c,m,w,k);case kt:var C=w._init;return g(m,c,p,C(w._payload),k)}if(fr(w)||nr(w))return m=m.get(p)||null,f(c,m,w,k,null);xa(c,w)}return null}function y(m,c,p,w){for(var k=null,C=null,P=c,T=c=0,N=null;P!==null&&T<p.length;T++){P.index>T?(N=P,P=null):N=P.sibling;var I=h(m,P,p[T],w);if(I===null){P===null&&(P=N);break}e&&P&&I.alternate===null&&t(m,P),c=i(I,c,T),C===null?k=I:C.sibling=I,C=I,P=N}if(T===p.length)return n(m,P),Y&&$t(m,T),k;if(P===null){for(;T<p.length;T++)P=d(m,p[T],w),P!==null&&(c=i(P,c,T),C===null?k=P:C.sibling=P,C=P);return Y&&$t(m,T),k}for(P=r(m,P);T<p.length;T++)N=g(P,m,T,p[T],w),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?T:N.key),c=i(N,c,T),C===null?k=N:C.sibling=N,C=N);return e&&P.forEach(function(ce){return t(m,ce)}),Y&&$t(m,T),k}function v(m,c,p,w){var k=nr(p);if(typeof k!="function")throw Error(x(150));if(p=k.call(p),p==null)throw Error(x(151));for(var C=k=null,P=c,T=c=0,N=null,I=p.next();P!==null&&!I.done;T++,I=p.next()){P.index>T?(N=P,P=null):N=P.sibling;var ce=h(m,P,I.value,w);if(ce===null){P===null&&(P=N);break}e&&P&&ce.alternate===null&&t(m,P),c=i(ce,c,T),C===null?k=ce:C.sibling=ce,C=ce,P=N}if(I.done)return n(m,P),Y&&$t(m,T),k;if(P===null){for(;!I.done;T++,I=p.next())I=d(m,I.value,w),I!==null&&(c=i(I,c,T),C===null?k=I:C.sibling=I,C=I);return Y&&$t(m,T),k}for(P=r(m,P);!I.done;T++,I=p.next())I=g(P,m,T,I.value,w),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?T:I.key),c=i(I,c,T),C===null?k=I:C.sibling=I,C=I);return e&&P.forEach(function(wt){return t(m,wt)}),Y&&$t(m,T),k}function S(m,c,p,w){if(typeof p=="object"&&p!==null&&p.type===kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case da:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===kn){if(C.tag===7){n(m,C.sibling),c=a(C,p.props.children),c.return=m,m=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kt&&$u(k)===C.type){n(m,C.sibling),c=a(C,p.props),c.ref=lr(m,C,p),c.return=m,m=c;break e}n(m,C);break}else t(m,C);C=C.sibling}p.type===kn?(c=an(p.props.children,m.mode,w,p.key),c.return=m,m=c):(w=Ha(p.type,p.key,p.props,null,m.mode,w),w.ref=lr(m,c,p),w.return=m,m=w)}return o(m);case _n:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(m,c.sibling),c=a(c,p.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=No(p,m.mode,w),c.return=m,m=c}return o(m);case kt:return C=p._init,S(m,c,C(p._payload),w)}if(fr(p))return y(m,c,p,w);if(nr(p))return v(m,c,p,w);xa(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(m,c.sibling),c=a(c,p),c.return=m,m=c):(n(m,c),c=Eo(p,m.mode,w),c.return=m,m=c),o(m)):n(m,c)}return S}var Xn=yd(!0),wd=yd(!1),ea={},et=Yt(ea),Dr=Yt(ea),Or=Yt(ea);function en(e){if(e===ea)throw Error(x(174));return e}function xs(e,t){switch(W(Or,t),W(Dr,e),W(et,ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jo(t,e)}U(et),W(et,t)}function Zn(){U(et),U(Dr),U(Or)}function bd(e){en(Or.current);var t=en(et.current),n=Jo(t,e.type);t!==n&&(W(Dr,e),W(et,n))}function Ss(e){Dr.current===e&&(U(et),U(Dr))}var X=Yt(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ko=[];function Cs(){for(var e=0;e<ko.length;e++)ko[e]._workInProgressVersionPrimary=null;ko.length=0}var Ua=vt.ReactCurrentDispatcher,xo=vt.ReactCurrentBatchConfig,sn=0,Z=null,te=null,ie=null,pi=!1,br=!1,zr=0,l1=0;function fe(){throw Error(x(321))}function Ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function As(e,t,n,r,a,i){if(sn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?f1:d1,e=n(r,a),br){i=0;do{if(br=!1,zr=0,25<=i)throw Error(x(301));i+=1,ie=te=null,t.updateQueue=null,Ua.current=m1,e=n(r,a)}while(br)}if(Ua.current=hi,t=te!==null&&te.next!==null,sn=0,ie=te=Z=null,pi=!1,t)throw Error(x(300));return e}function Es(){var e=zr!==0;return zr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Z.memoizedState=ie=e:ie=ie.next=e,ie}function Oe(){if(te===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?Z.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(x(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Z.memoizedState=ie=e:ie=ie.next=e}return ie}function Wr(e,t){return typeof t=="function"?t(e):t}function So(e){var t=Oe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=te,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((sn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,Z.lanes|=f,un|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,Ze(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Z.lanes|=i,un|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Co(e){var t=Oe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Ze(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _d(){}function kd(e,t){var n=Z,r=Oe(),a=t(),i=!Ze(r.memoizedState,a);if(i&&(r.memoizedState=a,be=!0),r=r.queue,Ns(Cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Br(9,Sd.bind(null,n,r,a,t),void 0,null),oe===null)throw Error(x(349));sn&30||xd(n,t,a)}return a}function xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sd(e,t,n,r){t.value=n,t.getSnapshot=r,Pd(t)&&Ad(e)}function Cd(e,t,n){return n(function(){Pd(t)&&Ad(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function Ad(e){var t=ft(e,1);t!==null&&Xe(t,e,1,-1)}function Qu(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=c1.bind(null,Z,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ed(){return Oe().memoizedState}function Va(e,t,n,r){var a=$e();Z.flags|=e,a.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function Oi(e,t,n,r){var a=Oe();r=r===void 0?null:r;var i=void 0;if(te!==null){var o=te.memoizedState;if(i=o.destroy,r!==null&&Ps(r,o.deps)){a.memoizedState=Br(t,n,i,r);return}}Z.flags|=e,a.memoizedState=Br(1|t,n,i,r)}function Ku(e,t){return Va(8390656,8,e,t)}function Ns(e,t){return Oi(2048,8,e,t)}function Nd(e,t){return Oi(4,2,e,t)}function Rd(e,t){return Oi(4,4,e,t)}function Ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4,4,Ld.bind(null,t,e),n)}function Rs(){}function Id(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jd(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fd(e,t,n){return sn&21?(Ze(n,t)||(n=Of(),Z.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function s1(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=xo.transition;xo.transition={};try{e(!1),t()}finally{z=n,xo.transition=r}}function Md(){return Oe().memoizedState}function u1(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dd(e))Od(t,n);else if(n=pd(e,t,n,r),n!==null){var a=ve();Xe(n,e,r,a),zd(n,t,r)}}function c1(e,t,n){var r=Mt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Od(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Ze(l,o)){var s=t.interleaved;s===null?(a.next=a,_s(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=pd(e,t,a,r),n!==null&&(a=ve(),Xe(n,e,r,a),zd(n,t,r))}}function Dd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Od(e,t){br=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}var hi={readContext:De,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},f1={readContext:De,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Va(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Va(4194308,4,e,t)},useInsertionEffect:function(e,t){return Va(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u1.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:Qu,useDebugValue:Rs,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Qu(!1),t=e[0];return e=s1.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,a=$e();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),oe===null)throw Error(x(349));sn&30||xd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ku(Cd.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,Sd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$e(),t=oe.identifierPrefix;if(Y){var n=lt,r=ot;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d1={readContext:De,useCallback:Id,useContext:De,useEffect:Ns,useImperativeHandle:Td,useInsertionEffect:Nd,useLayoutEffect:Rd,useMemo:jd,useReducer:So,useRef:Ed,useState:function(){return So(Wr)},useDebugValue:Rs,useDeferredValue:function(e){var t=Oe();return Fd(t,te.memoizedState,e)},useTransition:function(){var e=So(Wr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:kd,useId:Md,unstable_isNewReconciler:!1},m1={readContext:De,useCallback:Id,useContext:De,useEffect:Ns,useImperativeHandle:Td,useInsertionEffect:Nd,useLayoutEffect:Rd,useMemo:jd,useReducer:Co,useRef:Ed,useState:function(){return Co(Wr)},useDebugValue:Rs,useDeferredValue:function(e){var t=Oe();return te===null?t.memoizedState=e:Fd(t,te.memoizedState,e)},useTransition:function(){var e=Co(Wr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:kd,useId:Md,unstable_isNewReconciler:!1};function Hn(e,t){try{var n="",r=t;do n+=Bp(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Po(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p1=typeof WeakMap=="function"?WeakMap:Map;function Wd(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,El=r),yl(e,t)},n}function Bd(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){yl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){yl(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new p1;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=E1.bind(null,e,t,n),t.then(e,e))}function ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tc(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var h1=vt.ReactCurrentOwner,be=!1;function he(e,t,n,r){t.child=e===null?wd(t,null,n,r):Xn(t,e.child,n,r)}function nc(e,t,n,r,a){n=n.render;var i=t.ref;return Wn(t,a),r=As(e,t,n,r,i,a),n=Es(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,dt(e,t,a)):(Y&&n&&hs(t),t.flags|=1,he(e,t,r,a),t.child)}function rc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Os(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Gd(e,t,i,r,a)):(e=Ha(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(o,r)&&e.ref===t.ref)return dt(e,t,a)}return t.flags|=1,e=Dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Ir(i,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,dt(e,t,a)}return wl(e,t,n,r,a)}function Ud(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Tn,Se),Se|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Tn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Tn,Se),Se|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Tn,Se),Se|=r;return he(e,t,a,n),t.child}function Vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wl(e,t,n,r,a){var i=ke(n)?on:pe.current;return i=Vn(t,i),Wn(t,a),n=As(e,t,n,r,i,a),r=Es(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,dt(e,t,a)):(Y&&r&&hs(t),t.flags|=1,he(e,t,n,a),t.child)}function ac(e,t,n,r,a){if(ke(n)){var i=!0;li(t)}else i=!1;if(Wn(t,a),t.stateNode===null)Ya(e,t),gd(t,n,r),gl(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=ke(n)?on:pe.current,u=Vn(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Ju(t,o,r,u),xt=!1;var h=t.memoizedState;o.state=h,di(t,r,o,a),s=t.memoizedState,l!==r||h!==s||_e.current||xt?(typeof f=="function"&&(vl(t,n,f,r),s=t.memoizedState),(l=xt||Hu(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Be(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=ke(n)?on:pe.current,s=Vn(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Ju(t,o,r,s),xt=!1,h=t.memoizedState,o.state=h,di(t,r,o,a);var y=t.memoizedState;l!==d||h!==y||_e.current||xt?(typeof g=="function"&&(vl(t,n,g,r),y=t.memoizedState),(u=xt||Hu(t,n,u,r,h,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,i,a)}function bl(e,t,n,r,a,i){Vd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Uu(t,n,!1),dt(e,t,i);r=t.stateNode,h1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Xn(t,e.child,null,i),t.child=Xn(t,null,l,i)):he(e,t,l,i),t.memoizedState=r.state,a&&Uu(t,n,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),xs(e,t.containerInfo)}function ic(e,t,n,r,a){return Yn(),gs(a),t.flags|=256,he(e,t,n,r),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,t,n){var r=t.pendingProps,a=X.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(X,a&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Bi(o,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=kl(n),t.memoizedState=_l,e):Ls(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return v1(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Dt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Dt(l,i):(i=an(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?kl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=_l,r}return i=e.child,e=i.sibling,r=Dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ls(e,t){return t=Bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sa(e,t,n,r){return r!==null&&gs(r),Xn(t,e.child,null,n),e=Ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v1(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Po(Error(x(422))),Sa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Bi({mode:"visible",children:r.children},a,0,null),i=an(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Xn(t,e.child,null,o),t.child.memoizedState=kl(o),t.memoizedState=_l,i);if(!(t.mode&1))return Sa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(x(419)),r=Po(i,r,void 0),Sa(e,t,o,r)}if(l=(o&e.childLanes)!==0,be||l){if(r=oe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,ft(e,a),Xe(r,e,a,-1))}return Ds(),r=Po(Error(x(421))),Sa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=N1.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ce=It(a.nextSibling),Pe=t,Y=!0,Ue=null,e!==null&&(Le[Te++]=ot,Le[Te++]=lt,Le[Te++]=ln,ot=e.id,lt=e.overflow,ln=t),t=Ls(t,r.children),t.flags|=4096,t)}function oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hl(e.return,t,n)}function Ao(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Zd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(he(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,n,t);else if(e.tag===19)oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ao(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&mi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ao(t,!0,n,null,i);break;case"together":Ao(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function g1(e,t,n){switch(t.tag){case 3:Yd(t),Yn();break;case 5:bd(t);break;case 1:ke(t.type)&&li(t);break;case 4:xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;W(ci,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Xd(e,t,n):(W(X,X.current&1),e=dt(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Ud(e,t,n)}return dt(e,t,n)}var Hd,xl,Jd,$d;Hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xl=function(){};Jd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,en(et.current);var i=null;switch(n){case"input":a=Yo(e,a),r=Yo(e,r),i=[];break;case"select":a=H({},a,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":a=Ho(e,a),r=Ho(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ii)}$o(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&B("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};$d=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y1(e,t,n){var r=t.pendingProps;switch(vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&oi(),de(t),null;case 3:return r=t.stateNode,Zn(),U(_e),U(pe),Cs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(Ll(Ue),Ue=null))),xl(e,t),de(t),null;case 5:Ss(t);var a=en(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)Jd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return de(t),null}if(e=en(et.current),ka(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[Mr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(a=0;a<mr.length;a++)B(mr[a],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":hu(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":gu(r,i),B("invalid",r)}$o(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&_a(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&_a(r.textContent,l,e),a=["children",""+l]):Pr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":ma(r),vu(r,i,!0);break;case"textarea":ma(r),yu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ii)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[Mr]=r,Hd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Qo(n,r),n){case"dialog":B("cancel",e),B("close",e),a=r;break;case"iframe":case"object":case"embed":B("load",e),a=r;break;case"video":case"audio":for(a=0;a<mr.length;a++)B(mr[a],e);a=r;break;case"source":B("error",e),a=r;break;case"img":case"image":case"link":B("error",e),B("load",e),a=r;break;case"details":B("toggle",e),a=r;break;case"input":hu(e,r),a=Yo(e,r),B("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=H({},r,{value:void 0}),B("invalid",e);break;case"textarea":gu(e,r),a=Ho(e,r),B("invalid",e);break;default:a=r}$o(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Pf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ar(e,s):typeof s=="number"&&Ar(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Pr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&ts(e,i,s,o))}switch(n){case"input":ma(e),vu(e,r,!1);break;case"textarea":ma(e),yu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Mn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)$d(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=en(Or.current),en(et.current),ka(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:_a(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_a(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return de(t),null;case 13:if(U(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ce!==null&&t.mode&1&&!(t.flags&128))md(),Yn(),t.flags|=98560,i=!1;else if(i=ka(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Qe]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ue!==null&&(Ll(Ue),Ue=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ne===0&&(ne=3):Ds())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Zn(),xl(e,t),e===null&&jr(t.stateNode.containerInfo),de(t),null;case 10:return bs(t.type._context),de(t),null;case 17:return ke(t.type)&&oi(),de(t),null;case 19:if(U(X),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)sr(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mi(e),o!==null){for(t.flags|=128,sr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>Jn&&(t.flags|=128,r=!0,sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=mi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Y)return de(t),null}else 2*K()-i.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,sr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Ms(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function w1(e,t){switch(vs(t),t.tag){case 1:return ke(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),U(_e),U(pe),Cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(U(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(X),null;case 4:return Zn(),null;case 10:return bs(t.type._context),null;case 22:case 23:return Ms(),null;case 24:return null;default:return null}}var Ca=!1,me=!1,b1=typeof WeakSet=="function"?WeakSet:Set,E=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Sl(e,t,n){try{n()}catch(r){J(e,t,r)}}var lc=!1;function _1(e,t){if(ll=ni,e=ed(),ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var g;d!==n||a!==0&&d.nodeType!==3||(l=o+a),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++f===r&&(s=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(sl={focusedElem:e,selectionRange:n},ni=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Be(t.type,v),S);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=lc,lc=!1,y}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Sl(t,n,i)}a=a.next}while(a!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qd(e){var t=e.alternate;t!==null&&(e.alternate=null,Qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[Mr],delete t[fl],delete t[r1],delete t[a1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ii));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var le=null,Ge=!1;function bt(e,t,n){for(n=n.child;n!==null;)qd(e,t,n),n=n.sibling}function qd(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Li,n)}catch{}switch(n.tag){case 5:me||Ln(n,t);case 6:var r=le,a=Ge;le=null,bt(e,t,n),le=r,Ge=a,le!==null&&(Ge?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ge?(e=le,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),Lr(e)):bo(le,n.stateNode));break;case 4:r=le,a=Ge,le=n.stateNode.containerInfo,Ge=!0,bt(e,t,n),le=r,Ge=a;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Sl(n,t,o),a=a.next}while(a!==r)}bt(e,t,n);break;case 1:if(!me&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){J(n,t,l)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,bt(e,t,n),me=r):bt(e,t,n);break;default:bt(e,t,n)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new b1),t.forEach(function(r){var a=R1.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:le=l.stateNode,Ge=!1;break e;case 3:le=l.stateNode.containerInfo,Ge=!0;break e;case 4:le=l.stateNode.containerInfo,Ge=!0;break e}l=l.return}if(le===null)throw Error(x(160));qd(i,o,a),le=null,Ge=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){J(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)em(t,e),t=t.sibling}function em(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),He(e),r&4){try{_r(3,e,e.return),zi(3,e)}catch(v){J(e,e.return,v)}try{_r(5,e,e.return)}catch(v){J(e,e.return,v)}}break;case 1:ze(t,e),He(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(ze(t,e),He(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var a=e.stateNode;try{Ar(a,"")}catch(v){J(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&_f(a,i),Qo(l,o);var u=Qo(l,i);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?Pf(a,d):f==="dangerouslySetInnerHTML"?Sf(a,d):f==="children"?Ar(a,d):ts(a,f,d,u)}switch(l){case"input":Xo(a,i);break;case"textarea":kf(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Mn(a,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Mn(a,!!i.multiple,i.defaultValue,!0):Mn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Mr]=i}catch(v){J(e,e.return,v)}}break;case 6:if(ze(t,e),He(e),r&4){if(e.stateNode===null)throw Error(x(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(v){J(e,e.return,v)}}break;case 3:if(ze(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(v){J(e,e.return,v)}break;case 4:ze(t,e),He(e);break;case 13:ze(t,e),He(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(js=K())),r&4&&uc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||f,ze(t,e),me=u):ze(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(E=e,f=e.child;f!==null;){for(d=E=f;E!==null;){switch(h=E,g=h.child,h.tag){case 0:case 11:case 14:case 15:_r(4,h,h.return);break;case 1:Ln(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){J(r,n,v)}}break;case 5:Ln(h,h.return);break;case 22:if(h.memoizedState!==null){fc(d);continue}}g!==null?(g.return=h,E=g):fc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Cf("display",o))}catch(v){J(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){J(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ze(t,e),He(e),r&4&&uc(e);break;case 21:break;default:ze(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kd(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ar(a,""),r.flags&=-33);var i=sc(e);Al(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sc(e);Pl(e,l,o);break;default:throw Error(x(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k1(e,t,n){E=e,tm(e)}function tm(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var a=E,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ca;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||me;l=Ca;var u=me;if(Ca=o,(me=s)&&!u)for(E=a;E!==null;)o=E,s=o.child,o.tag===22&&o.memoizedState!==null?dc(a):s!==null?(s.return=o,E=s):dc(a);for(;i!==null;)E=i,tm(i),i=i.sibling;E=a,Ca=l,me=u}cc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,E=i):cc(e)}}function cc(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Lr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}me||t.flags&512&&Cl(t)}catch(h){J(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function fc(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function dc(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(s){J(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){J(t,a,s)}}var i=t.return;try{Cl(t)}catch(s){J(t,i,s)}break;case 5:var o=t.return;try{Cl(t)}catch(s){J(t,o,s)}}}catch(s){J(t,t.return,s)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var x1=Math.ceil,vi=vt.ReactCurrentDispatcher,Ts=vt.ReactCurrentOwner,Fe=vt.ReactCurrentBatchConfig,O=0,oe=null,q=null,se=0,Se=0,Tn=Yt(0),ne=0,Gr=null,un=0,Wi=0,Is=0,kr=null,we=null,js=0,Jn=1/0,rt=null,gi=!1,El=null,Ft=null,Pa=!1,At=null,yi=0,xr=0,Nl=null,Xa=-1,Za=0;function ve(){return O&6?K():Xa!==-1?Xa:Xa=K()}function Mt(e){return e.mode&1?O&2&&se!==0?se&-se:o1.transition!==null?(Za===0&&(Za=Of()),Za):(e=z,e!==0||(e=window.event,e=e===void 0?16:Yf(e.type)),e):1}function Xe(e,t,n,r){if(50<xr)throw xr=0,Nl=null,Error(x(185));Qr(e,n,r),(!(O&2)||e!==oe)&&(e===oe&&(!(O&2)&&(Wi|=n),ne===4&&Ct(e,se)),xe(e,r),n===1&&O===0&&!(t.mode&1)&&(Jn=K()+500,Mi&&Xt()))}function xe(e,t){var n=e.callbackNode;oh(e,t);var r=ti(e,e===oe?se:0);if(r===0)n!==null&&_u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_u(n),t===1)e.tag===0?i1(mc.bind(null,e)):cd(mc.bind(null,e)),t1(function(){!(O&6)&&Xt()}),n=null;else{switch(zf(r)){case 1:n=os;break;case 4:n=Mf;break;case 16:n=ei;break;case 536870912:n=Df;break;default:n=ei}n=um(n,nm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nm(e,t){if(Xa=-1,Za=0,O&6)throw Error(x(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=ti(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wi(e,r);else{t=r;var a=O;O|=2;var i=am();(oe!==e||se!==t)&&(rt=null,Jn=K()+500,rn(e,t));do try{P1();break}catch(l){rm(e,l)}while(1);ws(),vi.current=i,O=a,q!==null?t=0:(oe=null,se=0,t=ne)}if(t!==0){if(t===2&&(a=nl(e),a!==0&&(r=a,t=Rl(e,a))),t===1)throw n=Gr,rn(e,0),Ct(e,r),xe(e,K()),n;if(t===6)Ct(e,r);else{if(a=e.current.alternate,!(r&30)&&!S1(a)&&(t=wi(e,r),t===2&&(i=nl(e),i!==0&&(r=i,t=Rl(e,i))),t===1))throw n=Gr,rn(e,0),Ct(e,r),xe(e,K()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Qt(e,we,rt);break;case 3:if(Ct(e,r),(r&130023424)===r&&(t=js+500-K(),10<t)){if(ti(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=cl(Qt.bind(null,e,we,rt),t);break}Qt(e,we,rt);break;case 4:if(Ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Ye(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x1(r/1960))-r,10<r){e.timeoutHandle=cl(Qt.bind(null,e,we,rt),r);break}Qt(e,we,rt);break;case 5:Qt(e,we,rt);break;default:throw Error(x(329))}}}return xe(e,K()),e.callbackNode===n?nm.bind(null,e):null}function Rl(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=we,we=n,t!==null&&Ll(t)),e}function Ll(e){we===null?we=e:we.push.apply(we,e)}function S1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Ze(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~Is,t&=~Wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function mc(e){if(O&6)throw Error(x(327));Bn();var t=ti(e,0);if(!(t&1))return xe(e,K()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=nl(e);r!==0&&(t=r,n=Rl(e,r))}if(n===1)throw n=Gr,rn(e,0),Ct(e,t),xe(e,K()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,we,rt),xe(e,K()),null}function Fs(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Jn=K()+500,Mi&&Xt())}}function cn(e){At!==null&&At.tag===0&&!(O&6)&&Bn();var t=O;O|=1;var n=Fe.transition,r=z;try{if(Fe.transition=null,z=1,e)return e()}finally{z=r,Fe.transition=n,O=t,!(O&6)&&Xt()}}function Ms(){Se=Tn.current,U(Tn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e1(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:Zn(),U(_e),U(pe),Cs();break;case 5:Ss(r);break;case 4:Zn();break;case 13:U(X);break;case 19:U(X);break;case 10:bs(r.type._context);break;case 22:case 23:Ms()}n=n.return}if(oe=e,q=e=Dt(e.current,null),se=Se=t,ne=0,Gr=null,Is=Wi=un=0,we=kr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}qt=null}return e}function rm(e,t){do{var n=q;try{if(ws(),Ua.current=hi,pi){for(var r=Z.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}pi=!1}if(sn=0,ie=te=Z=null,br=!1,zr=0,Ts.current=null,n===null||n.return===null){ne=1,Gr=t,q=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=se,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ec(o);if(g!==null){g.flags&=-257,tc(g,o,l,i,t),g.mode&1&&qu(i,u,t),t=g,s=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(s),t.updateQueue=v}else y.add(s);break e}else{if(!(t&1)){qu(i,u,t),Ds();break e}s=Error(x(426))}}else if(Y&&l.mode&1){var S=ec(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),tc(S,o,l,i,t),gs(Hn(s,l));break e}}i=s=Hn(s,l),ne!==4&&(ne=2),kr===null?kr=[i]:kr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Wd(i,s,t);Xu(i,m);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ft===null||!Ft.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Bd(i,l,t);Xu(i,w);break e}}i=i.return}while(i!==null)}om(n)}catch(k){t=k,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function am(){var e=vi.current;return vi.current=hi,e===null?hi:e}function Ds(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(un&268435455)&&!(Wi&268435455)||Ct(oe,se)}function wi(e,t){var n=O;O|=2;var r=am();(oe!==e||se!==t)&&(rt=null,rn(e,t));do try{C1();break}catch(a){rm(e,a)}while(1);if(ws(),O=n,vi.current=r,q!==null)throw Error(x(261));return oe=null,se=0,ne}function C1(){for(;q!==null;)im(q)}function P1(){for(;q!==null&&!Qp();)im(q)}function im(e){var t=sm(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?om(e):q=t,Ts.current=null}function om(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w1(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,q=null;return}}else if(n=y1(n,t,Se),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ne===0&&(ne=5)}function Qt(e,t,n){var r=z,a=Fe.transition;try{Fe.transition=null,z=1,A1(e,t,n,r)}finally{Fe.transition=a,z=r}return null}function A1(e,t,n,r){do Bn();while(At!==null);if(O&6)throw Error(x(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lh(e,i),e===oe&&(q=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,um(ei,function(){return Bn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var o=z;z=1;var l=O;O|=4,Ts.current=null,_1(e,n),em(n,e),Zh(sl),ni=!!ll,sl=ll=null,e.current=n,k1(n),Kp(),O=l,z=o,Fe.transition=i}else e.current=n;if(Pa&&(Pa=!1,At=e,yi=a),i=e.pendingLanes,i===0&&(Ft=null),th(n.stateNode),xe(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(gi)throw gi=!1,e=El,El=null,e;return yi&1&&e.tag!==0&&Bn(),i=e.pendingLanes,i&1?e===Nl?xr++:(xr=0,Nl=e):xr=0,Xt(),null}function Bn(){if(At!==null){var e=zf(yi),t=Fe.transition,n=z;try{if(Fe.transition=null,z=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,yi=0,O&6)throw Error(x(331));var a=O;for(O|=4,E=e.current;E!==null;){var i=E,o=i.child;if(E.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(E=u;E!==null;){var f=E;switch(f.tag){case 0:case 11:case 15:_r(8,f,i)}var d=f.child;if(d!==null)d.return=f,E=d;else for(;E!==null;){f=E;var h=f.sibling,g=f.return;if(Qd(f),f===u){E=null;break}if(h!==null){h.return=g,E=h;break}E=g}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}E=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,E=o;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,E=m;break e}E=i.return}}var c=e.current;for(E=c;E!==null;){o=E;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,E=p;else e:for(o=c;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zi(9,l)}}catch(k){J(l,l.return,k)}if(l===o){E=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,E=w;break e}E=l.return}}if(O=a,Xt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Li,e)}catch{}r=!0}return r}finally{z=n,Fe.transition=t}}return!1}function pc(e,t,n){t=Hn(n,t),t=Wd(e,t,1),e=jt(e,t,1),t=ve(),e!==null&&(Qr(e,1,t),xe(e,t))}function J(e,t,n){if(e.tag===3)pc(e,e,n);else for(;t!==null;){if(t.tag===3){pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Hn(n,e),e=Bd(t,e,1),t=jt(t,e,1),e=ve(),t!==null&&(Qr(t,1,e),xe(t,e));break}}t=t.return}}function E1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>K()-js?rn(e,0):Is|=n),xe(e,t)}function lm(e,t){t===0&&(e.mode&1?(t=va,va<<=1,!(va&130023424)&&(va=4194304)):t=1);var n=ve();e=ft(e,t),e!==null&&(Qr(e,t,n),xe(e,n))}function N1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lm(e,n)}function R1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),lm(e,n)}var sm;sm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,g1(e,t,n);be=!!(e.flags&131072)}else be=!1,Y&&t.flags&1048576&&fd(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ya(e,t),e=t.pendingProps;var a=Vn(t,pe.current);Wn(t,n),a=As(null,t,r,e,a,n);var i=Es();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,li(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ks(t),a.updater=Di,t.stateNode=a,a._reactInternals=t,gl(t,r,e,n),t=bl(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&hs(t),he(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ya(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=T1(r),e=Be(r,e),a){case 0:t=wl(null,t,r,e,n);break e;case 1:t=ac(null,t,r,e,n);break e;case 11:t=nc(null,t,r,e,n);break e;case 14:t=rc(null,t,r,Be(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),wl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),ac(e,t,r,a,n);case 3:e:{if(Yd(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,a=i.element,hd(e,t),di(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Hn(Error(x(423)),t),t=ic(e,t,r,n,a);break e}else if(r!==a){a=Hn(Error(x(424)),t),t=ic(e,t,r,n,a);break e}else for(Ce=It(t.stateNode.containerInfo.firstChild),Pe=t,Y=!0,Ue=null,n=wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===a){t=dt(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return bd(t),e===null&&pl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,ul(r,a)?o=null:i!==null&&ul(r,i)&&(t.flags|=32),Vd(e,t),he(e,t,o,n),t.child;case 6:return e===null&&pl(t),null;case 13:return Xd(e,t,n);case 4:return xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),nc(e,t,r,a,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,W(ci,r._currentValue),r._currentValue=o,i!==null)if(Ze(i.value,o)){if(i.children===a.children&&!_e.current){t=dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=st(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),hl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hl(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}he(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Wn(t,n),a=De(a),r=r(a),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,a=Be(r,t.pendingProps),a=Be(r.type,a),rc(e,t,r,a,n);case 15:return Gd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Be(r,a),Ya(e,t),t.tag=1,ke(r)?(e=!0,li(t)):e=!1,Wn(t,n),gd(t,r,a),gl(t,r,a,n),bl(null,t,r,!0,e,n);case 19:return Zd(e,t,n);case 22:return Ud(e,t,n)}throw Error(x(156,t.tag))};function um(e,t){return Ff(e,t)}function L1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new L1(e,t,n,r)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T1(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rs)return 11;if(e===as)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ha(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Os(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kn:return an(n.children,a,i,t);case ns:o=8,a|=8;break;case Bo:return e=je(12,n,t,a|2),e.elementType=Bo,e.lanes=i,e;case Go:return e=je(13,n,t,a),e.elementType=Go,e.lanes=i,e;case Uo:return e=je(19,n,t,a),e.elementType=Uo,e.lanes=i,e;case yf:return Bi(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vf:o=10;break e;case gf:o=9;break e;case rs:o=11;break e;case as:o=14;break e;case kt:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=je(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Bi(e,t,n,r){return e=je(22,e,r,t),e.elementType=yf,e.lanes=n,e.stateNode={isHidden:!1},e}function Eo(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I1(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,a,i,o,l,s){return e=new I1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ks(i),e}function j1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cm(e){if(!e)return Wt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ke(n))return ud(e,n,t)}return t}function fm(e,t,n,r,a,i,o,l,s){return e=zs(n,r,!0,e,a,i,o,l,s),e.context=cm(null),n=e.current,r=ve(),a=Mt(n),i=st(r,a),i.callback=t??null,jt(n,i,a),e.current.lanes=a,Qr(e,a,r),xe(e,r),e}function Gi(e,t,n,r){var a=t.current,i=ve(),o=Mt(a);return n=cm(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(a,t,o),e!==null&&(Xe(e,a,o,i),Ga(e,a,o)),o}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){hc(e,t),(e=e.alternate)&&hc(e,t)}function F1(){return null}var dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}Ui.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Gi(e,t,null,null)};Ui.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Gi(null,e,null,null)}),t[ct]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&Vf(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vc(){}function M1(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=bi(o);i.call(u)}}var o=fm(t,r,e,0,null,!1,!1,"",vc);return e._reactRootContainer=o,e[ct]=o.current,jr(e.nodeType===8?e.parentNode:e),cn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=bi(s);l.call(u)}}var s=zs(e,0,!1,null,null,!1,!1,"",vc);return e._reactRootContainer=s,e[ct]=s.current,jr(e.nodeType===8?e.parentNode:e),cn(function(){Gi(t,s,n,r)}),s}function Yi(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=bi(o);l.call(s)}}Gi(t,o,e,a)}else o=M1(n,t,e,a,r);return bi(o)}Wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(ls(t,n|1),xe(t,K()),!(O&6)&&(Jn=K()+500,Xt()))}break;case 13:cn(function(){var r=ft(e,1);if(r!==null){var a=ve();Xe(r,e,1,a)}}),Ws(e,1)}};ss=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ve();Xe(t,e,134217728,n)}Ws(e,134217728)}};Bf=function(e){if(e.tag===13){var t=Mt(e),n=ft(e,t);if(n!==null){var r=ve();Xe(n,e,t,r)}Ws(e,t)}};Gf=function(){return z};Uf=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};qo=function(e,t,n){switch(t){case"input":if(Xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Fi(r);if(!a)throw Error(x(90));bf(r),Xo(r,a)}}}break;case"textarea":kf(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};Nf=Fs;Rf=cn;var D1={usingClientEntryPoint:!1,Events:[qr,Pn,Fi,Af,Ef,Fs]},ur={findFiberByHostInstance:Kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},O1={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||F1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{Li=Aa.inject(O1),qe=Aa}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(t))throw Error(x(200));return j1(e,t,null,n)};Ee.createRoot=function(e,t){if(!Gs(e))throw Error(x(299));var n=!1,r="",a=dm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,a),e[ct]=t.current,jr(e.nodeType===8?e.parentNode:e),new Bs(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return cn(e)};Ee.hydrate=function(e,t,n){if(!Vi(t))throw Error(x(200));return Yi(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Gs(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=dm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=fm(t,null,e,1,n??null,a,!1,i,o),e[ct]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ui(t)};Ee.render=function(e,t,n){if(!Vi(t))throw Error(x(200));return Yi(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(x(40));return e._reactRootContainer?(cn(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Ee.unstable_batchedUpdates=Fs;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vi(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Yi(e,t,n,!1,r)};Ee.version="18.2.0-next-9e3b772b8-20220608";function mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mm)}catch(e){console.error(e)}}mm(),ff.exports=Ee;var z1=ff.exports,gc=z1;zo.createRoot=gc.createRoot,zo.hydrateRoot=gc.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ur.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const yc="popstate";function W1(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:l="",hash:s=""}=vn(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Tl("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:_i(i))}function r(a,i){Xi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return G1(t,n,r,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function B1(){return Math.random().toString(36).substr(2,8)}function wc(e,t){return{usr:e.state,key:e.key,idx:t}}function Tl(e,t,n,r){return n===void 0&&(n=null),Ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vn(t):t,{state:n,key:t&&t.key||r||B1()})}function _i(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function G1(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Et.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(Ur({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=Et.Pop;let S=f(),m=S==null?null:S-u;u=S,s&&s({action:l,location:v.location,delta:m})}function h(S,m){l=Et.Push;let c=Tl(v.location,S,m);n&&n(c,S),u=f()+1;let p=wc(c,u),w=v.createHref(c);try{o.pushState(p,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(w)}i&&s&&s({action:l,location:v.location,delta:1})}function g(S,m){l=Et.Replace;let c=Tl(v.location,S,m);n&&n(c,S),u=f();let p=wc(c,u),w=v.createHref(c);o.replaceState(p,"",w),i&&s&&s({action:l,location:v.location,delta:0})}function y(S){let m=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof S=="string"?S:_i(S);return ee(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let v={get action(){return l},get location(){return e(a,o)},listen(S){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(yc,d),s=S,()=>{a.removeEventListener(yc,d),s=null}},createHref(S){return t(a,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(S){return o.go(S)}};return v}var bc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bc||(bc={}));function U1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vn(t):t,a=Us(r.pathname||"/",n);if(a==null)return null;let i=pm(e);V1(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=q1(i[l],n0(a));return o}function pm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ee(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Ot([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(ee(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Q1(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of hm(i.path))a(i,o,s)}),t}function hm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=hm(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function V1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Y1=/^:\w+$/,X1=3,Z1=2,H1=1,J1=10,$1=-2,_c=e=>e==="*";function Q1(e,t){let n=e.split("/"),r=n.length;return n.some(_c)&&(r+=$1),t&&(r+=Z1),n.filter(a=>!_c(a)).reduce((a,i)=>a+(Y1.test(i)?X1:i===""?H1:J1),r)}function K1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function q1(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=e0({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:Ot([a,f.pathname]),pathnameBase:o0(Ot([a,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(a=Ot([a,f.pathnameBase]))}return i}function e0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=t0(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let h=l[d]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=r0(l[d]||"",f),u},{}),pathname:i,pathnameBase:o,pattern:e}}function t0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function n0(e){try{return decodeURI(e)}catch(t){return Xi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function r0(e,t){try{return decodeURIComponent(e)}catch(n){return Xi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Us(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function a0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?vn(e):e;return{pathname:n?n.startsWith("/")?n:i0(n,t):t,search:l0(r),hash:s0(a)}}function i0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Ro(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gm(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=vn(e):(a=Ur({},e),ee(!a.pathname||!a.pathname.includes("?"),Ro("?","pathname","search",a)),ee(!a.pathname||!a.pathname.includes("#"),Ro("#","pathname","hash",a)),ee(!a.search||!a.search.includes("#"),Ro("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=a0(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),o0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),l0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function u0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ym=["post","put","patch","delete"];new Set(ym);const c0=["get",...ym];new Set(c0);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}const Vs=_.createContext(null),wm=_.createContext(null),gn=_.createContext(null),Zi=_.createContext(null),gt=_.createContext({outlet:null,matches:[],isDataRoute:!1}),bm=_.createContext(null);function f0(e,t){let{relative:n}=t===void 0?{}:t;ta()||ee(!1);let{basename:r,navigator:a}=_.useContext(gn),{hash:i,pathname:o,search:l}=Ys(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Ot([r,o])),a.createHref({pathname:s,search:l,hash:i})}function ta(){return _.useContext(Zi)!=null}function tt(){return ta()||ee(!1),_.useContext(Zi).location}function _m(e){_.useContext(gn).static||_.useLayoutEffect(e)}function na(){let{isDataRoute:e}=_.useContext(gt);return e?A0():d0()}function d0(){ta()||ee(!1);let e=_.useContext(Vs),{basename:t,navigator:n}=_.useContext(gn),{matches:r}=_.useContext(gt),{pathname:a}=tt(),i=JSON.stringify(vm(r).map(s=>s.pathnameBase)),o=_.useRef(!1);return _m(()=>{o.current=!0}),_.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=gm(s,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ot([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,a,e])}const m0=_.createContext(null);function p0(e){let t=_.useContext(gt).outlet;return t&&_.createElement(m0.Provider,{value:e},t)}function h0(){let{matches:e}=_.useContext(gt),t=e[e.length-1];return t?t.params:{}}function Ys(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(gt),{pathname:a}=tt(),i=JSON.stringify(vm(r).map(o=>o.pathnameBase));return _.useMemo(()=>gm(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function v0(e,t){return g0(e,t)}function g0(e,t,n){ta()||ee(!1);let{navigator:r}=_.useContext(gn),{matches:a}=_.useContext(gt),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=tt(),u;if(t){var f;let v=typeof t=="string"?vn(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||ee(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",g=U1(e,{pathname:h}),y=k0(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Ot([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Ot([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),a,n);return t&&y?_.createElement(Zi.Provider,{value:{location:ki({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Et.Pop}},y):y}function y0(){let e=P0(),t=u0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:a},n):null,i)}const w0=_.createElement(y0,null);class b0 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(gt.Provider,{value:this.props.routeContext},_.createElement(bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _0(e){let{routeContext:t,match:n,children:r}=e,a=_.useContext(Vs);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(gt.Provider,{value:t},r)}function k0(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||ee(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,d=null;n&&(d=s.route.errorElement||w0);let h=t.concat(i.slice(0,u+1)),g=()=>{let y;return f?y=d:s.route.Component?y=_.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=l,_.createElement(_0,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?_.createElement(b0,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var km=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(km||{}),xi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xi||{});function x0(e){let t=_.useContext(Vs);return t||ee(!1),t}function S0(e){let t=_.useContext(wm);return t||ee(!1),t}function C0(e){let t=_.useContext(gt);return t||ee(!1),t}function xm(e){let t=C0(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function P0(){var e;let t=_.useContext(bm),n=S0(xi.UseRouteError),r=xm(xi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function A0(){let{router:e}=x0(km.UseNavigateStable),t=xm(xi.UseNavigateStable),n=_.useRef(!1);return _m(()=>{n.current=!0}),_.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ki({fromRouteId:t},i)))},[e,t])}function E0(e){return p0(e.context)}function bn(e){ee(!1)}function N0(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Et.Pop,navigator:i,static:o=!1}=e;ta()&&ee(!1);let l=t.replace(/^\/*/,"/"),s=_.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=vn(r));let{pathname:u="/",search:f="",hash:d="",state:h=null,key:g="default"}=r,y=_.useMemo(()=>{let v=Us(u,l);return v==null?null:{location:{pathname:v,search:f,hash:d,state:h,key:g},navigationType:a}},[l,u,f,d,h,g,a]);return y==null?null:_.createElement(gn.Provider,{value:s},_.createElement(Zi.Provider,{children:n,value:y}))}function R0(e){let{children:t,location:n}=e;return v0(Il(t),n)}new Promise(()=>{});function Il(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,a)=>{if(!_.isValidElement(r))return;let i=[...t,a];if(r.type===_.Fragment){n.push.apply(n,Il(r.props.children,i));return}r.type!==bn&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Il(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Si(){return Si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(this,arguments)}function Sm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function L0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function T0(e,t){return e.button===0&&(!t||t==="_self")&&!L0(e)}function jl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(a=>[n,a]):[[n,r]])},[]))}function I0(e,t){let n=jl(e);return t&&t.forEach((r,a)=>{n.has(a)||t.getAll(a).forEach(i=>{n.append(a,i)})}),n}const j0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],F0=["aria-current","caseSensitive","className","end","style","to","children"],M0="startTransition",kc=Np[M0];function D0(e){let{basename:t,children:n,future:r,window:a}=e,i=_.useRef();i.current==null&&(i.current=W1({window:a,v5Compat:!0}));let o=i.current,[l,s]=_.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=_.useCallback(d=>{u&&kc?kc(()=>s(d)):s(d)},[s,u]);return _.useLayoutEffect(()=>o.listen(f),[o,f]),_.createElement(N0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const O0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cm=_.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:f}=t,d=Sm(t,j0),{basename:h}=_.useContext(gn),g,y=!1;if(typeof u=="string"&&z0.test(u)&&(g=u,O0))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=Us(p.pathname,h);p.origin===c.origin&&w!=null?u=w+p.search+p.hash:y=!0}catch{}let v=f0(u,{relative:a}),S=W0(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:a});function m(c){r&&r(c),c.defaultPrevented||S(c)}return _.createElement("a",Si({},d,{href:g||v,onClick:y||i?r:m,ref:n,target:s}))}),Pm=_.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,children:u}=t,f=Sm(t,F0),d=Ys(s,{relative:f.relative}),h=tt(),g=_.useContext(wm),{navigator:y}=_.useContext(gn),v=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,S=h.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(S=S.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let c=S===v||!o&&S.startsWith(v)&&S.charAt(v.length)==="/",p=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),w=c?r:void 0,k;typeof i=="function"?k=i({isActive:c,isPending:p}):k=[i,c?"active":null,p?"pending":null].filter(Boolean).join(" ");let C=typeof l=="function"?l({isActive:c,isPending:p}):l;return _.createElement(Cm,Si({},f,{"aria-current":w,className:k,ref:n,style:C,to:s}),typeof u=="function"?u({isActive:c,isPending:p}):u)});var xc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(xc||(xc={}));var Sc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sc||(Sc={}));function W0(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=na(),s=tt(),u=Ys(e,{relative:o});return _.useCallback(f=>{if(T0(f,n)){f.preventDefault();let d=r!==void 0?r:_i(s)===_i(u);l(e,{replace:d,state:a,preventScrollReset:i,relative:o})}},[s,l,u,r,a,n,e,i,o])}function Hi(e){let t=_.useRef(jl(e)),n=_.useRef(!1),r=tt(),a=_.useMemo(()=>I0(r.search,n.current?null:t.current),[r.search]),i=na(),o=_.useCallback((l,s)=>{const u=jl(typeof l=="function"?l(a):l);n.current=!0,i("?"+u,s)},[i,a]);return[a,o]}const B0="_welcome_x9txs_2",G0="_welcomeContainer_x9txs_9",U0="_goToAppButton_x9txs_13",Lo={welcome:B0,welcomeContainer:G0,goToAppButton:U0};function V0(){return b.jsx("main",{className:Lo.welcome,children:b.jsxs("div",{className:Lo.welcomeContainer,children:[b.jsx("h1",{children:"Welcome to MisterEmail"}),b.jsx("div",{className:Lo.goToAppButton,children:b.jsx(Cm,{to:"/inbox",children:"Go to app"})})]})})}function Cc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cc(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function Y0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X0(e,t,n){return t&&Pc(e.prototype,t),n&&Pc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xs(e,t){return H0(e)||$0(e,t)||Am(e,t)||K0()}function ra(e){return Z0(e)||J0(e)||Am(e)||Q0()}function Z0(e){if(Array.isArray(e))return Fl(e)}function H0(e){if(Array.isArray(e))return e}function J0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Am(e,t){if(e){if(typeof e=="string")return Fl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fl(e,t)}}function Fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ac=function(){},Zs={},Em={},Nm=null,Rm={mark:Ac,measure:Ac};try{typeof window<"u"&&(Zs=window),typeof document<"u"&&(Em=document),typeof MutationObserver<"u"&&(Nm=MutationObserver),typeof performance<"u"&&(Rm=performance)}catch{}var q0=Zs.navigator||{},Ec=q0.userAgent,Nc=Ec===void 0?"":Ec,Bt=Zs,V=Em,Rc=Nm,Ea=Rm;Bt.document;var yt=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Lm=~Nc.indexOf("MSIE")||~Nc.indexOf("Trident/"),Na,Ra,La,Ta,Ia,mt="___FONT_AWESOME___",Ml=16,Tm="fa",Im="svg-inline--fa",fn="data-fa-i2svg",Dl="data-fa-pseudo-element",ev="data-fa-pseudo-element-pending",Hs="data-prefix",Js="data-icon",Lc="fontawesome-i2svg",tv="async",nv=["HTML","HEAD","STYLE","SCRIPT"],jm=function(){try{return!0}catch{return!1}}(),G="classic",$="sharp",$s=[G,$];function aa(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var Vr=aa((Na={},re(Na,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),re(Na,$,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Na)),Yr=aa((Ra={},re(Ra,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(Ra,$,{solid:"fass",regular:"fasr",light:"fasl"}),Ra)),Xr=aa((La={},re(La,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(La,$,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),La)),rv=aa((Ta={},re(Ta,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(Ta,$,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ta)),av=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Fm="fa-layers-text",iv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ov=aa((Ia={},re(Ia,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(Ia,$,{900:"fass",400:"fasr",300:"fasl"}),Ia)),Mm=[1,2,3,4,5,6,7,8,9,10],lv=Mm.concat([11,12,13,14,15,16,17,18,19,20]),sv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zr=new Set;Object.keys(Yr[G]).map(Zr.add.bind(Zr));Object.keys(Yr[$]).map(Zr.add.bind(Zr));var uv=[].concat($s,ra(Zr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tn.GROUP,tn.SWAP_OPACITY,tn.PRIMARY,tn.SECONDARY]).concat(Mm.map(function(e){return"".concat(e,"x")})).concat(lv.map(function(e){return"w-".concat(e)})),Sr=Bt.FontAwesomeConfig||{};function cv(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var dv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dv.forEach(function(e){var t=Xs(e,2),n=t[0],r=t[1],a=fv(cv(n));a!=null&&(Sr[r]=a)})}var Dm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Tm,replacementClass:Im,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Sr.familyPrefix&&(Sr.cssPrefix=Sr.familyPrefix);var $n=A(A({},Dm),Sr);$n.autoReplaceSvg||($n.observeMutations=!1);var L={};Object.keys(Dm).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){$n[e]=n,Cr.forEach(function(r){return r(L)})},get:function(){return $n[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){$n.cssPrefix=t,Cr.forEach(function(n){return n(L)})},get:function(){return $n.cssPrefix}});Bt.FontAwesomeConfig=L;var Cr=[];function mv(e){return Cr.push(e),function(){Cr.splice(Cr.indexOf(e),1)}}var _t=Ml,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pv(e){if(!(!e||!yt)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var hv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Hr(){for(var e=12,t="";e-- >0;)t+=hv[Math.random()*62|0];return t}function er(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qs(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Om(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vv(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Om(e[n]),'" ')},"").trim()}function Ji(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ks(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function gv(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function yv(e){var t=e.transform,n=e.width,r=n===void 0?Ml:n,a=e.height,i=a===void 0?Ml:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Lm?s+="translate(".concat(t.x/_t-r/2,"em, ").concat(t.y/_t-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/_t,"em), calc(-50% + ").concat(t.y/_t,"em)) "):s+="translate(".concat(t.x/_t,"em, ").concat(t.y/_t,"em) "),s+="scale(".concat(t.size/_t*(t.flipX?-1:1),", ").concat(t.size/_t*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var wv=`:root, :host {
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
}`;function zm(){var e=Tm,t=Im,n=L.cssPrefix,r=L.replacementClass,a=wv;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Tc=!1;function To(){L.autoAddCss&&!Tc&&(pv(zm()),Tc=!0)}var bv={mixout:function(){return{dom:{css:zm,insertCss:To}}},hooks:function(){return{beforeDOMElementCreation:function(){To()},beforeI2svg:function(){To()}}}},pt=Bt||{};pt[mt]||(pt[mt]={});pt[mt].styles||(pt[mt].styles={});pt[mt].hooks||(pt[mt].hooks={});pt[mt].shims||(pt[mt].shims=[]);var Ve=pt[mt],Wm=[],_v=function e(){V.removeEventListener("DOMContentLoaded",e),Pi=1,Wm.map(function(t){return t()})},Pi=!1;yt&&(Pi=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Pi||V.addEventListener("DOMContentLoaded",_v));function kv(e){yt&&(Pi?setTimeout(e,0):Wm.push(e))}function ia(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Om(e):"<".concat(t," ").concat(vv(r),">").concat(i.map(ia).join(""),"</").concat(t,">")}function Ic(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xv=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Io=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?xv(n,a):n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function Sv(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ol(e){var t=Sv(e);return t.length===1?t[0].toString(16):null}function Cv(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function jc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function zl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=jc(t);typeof Ve.hooks.addPack=="function"&&!a?Ve.hooks.addPack(e,jc(t)):Ve.styles[e]=A(A({},Ve.styles[e]||{}),i),e==="fas"&&zl("fa",t)}var ja,Fa,Ma,In=Ve.styles,Pv=Ve.shims,Av=(ja={},re(ja,G,Object.values(Xr[G])),re(ja,$,Object.values(Xr[$])),ja),qs=null,Bm={},Gm={},Um={},Vm={},Ym={},Ev=(Fa={},re(Fa,G,Object.keys(Vr[G])),re(Fa,$,Object.keys(Vr[$])),Fa);function Nv(e){return~uv.indexOf(e)}function Rv(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Nv(a)?a:null}var Xm=function(){var t=function(i){return Io(In,function(o,l,s){return o[s]=Io(l,i,{}),o},{})};Bm=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),Gm=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),Ym=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in In||L.autoFetchSvg,r=Io(Pv,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});Um=r.names,Vm=r.unicodes,qs=$i(L.styleDefault,{family:L.familyDefault})};mv(function(e){qs=$i(e.styleDefault,{family:L.familyDefault})});Xm();function eu(e,t){return(Bm[e]||{})[t]}function Lv(e,t){return(Gm[e]||{})[t]}function nn(e,t){return(Ym[e]||{})[t]}function Zm(e){return Um[e]||{prefix:null,iconName:null}}function Tv(e){var t=Vm[e],n=eu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gt(){return qs}var tu=function(){return{prefix:null,iconName:null,rest:[]}};function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,a=Vr[r][e],i=Yr[r][e]||Yr[r][a],o=e in Ve.styles?e:null;return i||o||null}var Fc=(Ma={},re(Ma,G,Object.keys(Xr[G])),re(Ma,$,Object.keys(Xr[$])),Ma);function Qi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},re(t,G,"".concat(L.cssPrefix,"-").concat(G)),re(t,$,"".concat(L.cssPrefix,"-").concat($)),t),o=null,l=G;(e.includes(i[G])||e.some(function(u){return Fc[G].includes(u)}))&&(l=G),(e.includes(i[$])||e.some(function(u){return Fc[$].includes(u)}))&&(l=$);var s=e.reduce(function(u,f){var d=Rv(L.cssPrefix,f);if(In[f]?(f=Av[l].includes(f)?rv[l][f]:f,o=f,u.prefix=f):Ev[l].indexOf(f)>-1?(o=f,u.prefix=$i(f,{family:l})):d?u.iconName=d:f!==L.replacementClass&&f!==i[G]&&f!==i[$]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var h=o==="fa"?Zm(u.iconName):{},g=nn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!In.far&&In.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},tu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===$&&(In.fass||L.autoFetchSvg)&&(s.prefix="fass",s.iconName=nn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Gt()||"fas"),s}var Iv=function(){function e(){Y0(this,e),this.definitions={}}return X0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=A(A({},n.definitions[l]||{}),o[l]),zl(l,o[l]);var s=Xr[G][l];s&&zl(s,o[l]),Xm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),Mc=[],jn={},Gn={},jv=Object.keys(Gn);function Fv(e,t){var n=t.mixoutsTo;return Mc=e,jn={},Object.keys(Gn).forEach(function(r){jv.indexOf(r)===-1&&delete Gn[r]}),Mc.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ci(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jn[o]||(jn[o]=[]),jn[o].push(i[o])})}r.provides&&r.provides(Gn)}),n}function Wl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function dn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jn[e]||[];a.forEach(function(i){i.apply(null,n)})}function ht(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Gn[e]?Gn[e].apply(null,t):void 0}function Bl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Gt();if(t)return t=nn(n,t)||t,Ic(Hm.definitions,n,t)||Ic(Ve.styles,n,t)}var Hm=new Iv,Mv=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,dn("noAuto")},Dv={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return yt?(dn("beforeI2svg",t),ht("pseudoElements2svg",t),ht("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,kv(function(){zv({autoReplaceSvgRoot:n}),dn("watch",t)})}},Ov={icon:function(t){if(t===null)return null;if(Ci(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:nn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=$i(t[0]);return{prefix:r,iconName:nn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(av))){var a=Qi(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Gt(),iconName:nn(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Gt();return{prefix:i,iconName:nn(i,t)||t}}}},Re={noAuto:Mv,config:L,dom:Dv,parse:Ov,library:Hm,findIconDefinition:Bl,toHtml:ia},zv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ve.styles).length>0||L.autoFetchSvg)&&yt&&L.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Ki(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ia(r)})}}),Object.defineProperty(e,"node",{get:function(){if(yt){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Wv(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ks(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=Ji(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bv(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function nu(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,y=r.found?r:n,v=y.width,S=y.height,m=a==="fak",c=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(function(N){return d.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(d.classes).join(" "),p={children:[],attributes:A(A({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},w=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};g&&(p.attributes[fn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||Hr())},children:[s]}),delete p.attributes.title);var k=A(A({},p),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:A(A({},w),d.styles)}),C=r.found&&n.found?ht("generateAbstractMask",k)||{children:[],attributes:{}}:ht("generateAbstractIcon",k)||{children:[],attributes:{}},P=C.children,T=C.attributes;return k.children=P,k.attributes=T,l?Bv(k):Wv(k)}function Dc(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[fn]="");var f=A({},o.styles);Ks(a)&&(f.transform=yv({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Ji(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Gv(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ji(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jo=Ve.styles;function Gl(e){var t=e[0],n=e[1],r=e.slice(4),a=Xs(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(tn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(tn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(tn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Uv={found:!1,width:512,height:512};function Vv(e,t){!jm&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ul(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=Gt()),new Promise(function(r,a){if(ht("missingIconAbstract"),n==="fa"){var i=Zm(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&jo[t]&&jo[t][e]){var o=jo[t][e];return r(Gl(o))}Vv(e,t),r(A(A({},Uv),{},{icon:L.showMissingIcons&&e?ht("missingIconAbstract")||{}:{}}))})}var Oc=function(){},Vl=L.measurePerformance&&Ea&&Ea.mark&&Ea.measure?Ea:{mark:Oc,measure:Oc},pr='FA "6.4.2"',Yv=function(t){return Vl.mark("".concat(pr," ").concat(t," begins")),function(){return Jm(t)}},Jm=function(t){Vl.mark("".concat(pr," ").concat(t," ends")),Vl.measure("".concat(pr," ").concat(t),"".concat(pr," ").concat(t," begins"),"".concat(pr," ").concat(t," ends"))},ru={begin:Yv,end:Jm},Ja=function(){};function zc(e){var t=e.getAttribute?e.getAttribute(fn):null;return typeof t=="string"}function Xv(e){var t=e.getAttribute?e.getAttribute(Hs):null,n=e.getAttribute?e.getAttribute(Js):null;return t&&n}function Zv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function Hv(){if(L.autoReplaceSvg===!0)return $a.replace;var e=$a[L.autoReplaceSvg];return e||$a.replace}function Jv(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function $v(e){return V.createElement(e)}function $m(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Jv:$v:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild($m(o,{ceFn:r}))}),a}function Qv(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $a={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore($m(a),n)}),n.getAttribute(fn)===null&&L.keepOriginalSource){var r=V.createComment(Qv(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qs(n).indexOf(L.replacementClass))return $a.replace(t);var a=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===L.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ia(l)}).join(`
`);n.setAttribute(fn,""),n.innerHTML=o}};function Wc(e){e()}function Qm(e,t){var n=typeof t=="function"?t:Ja;if(e.length===0)n();else{var r=Wc;L.mutateApproach===tv&&(r=Bt.requestAnimationFrame||Wc),r(function(){var a=Hv(),i=ru.begin("mutate");e.map(a),i(),n()})}}var au=!1;function Km(){au=!0}function Yl(){au=!1}var Ai=null;function Bc(e){if(Rc&&L.observeMutations){var t=e.treeCallback,n=t===void 0?Ja:t,r=e.nodeCallback,a=r===void 0?Ja:r,i=e.pseudoElementsCallback,o=i===void 0?Ja:i,l=e.observeMutationsRoot,s=l===void 0?V:l;Ai=new Rc(function(u){if(!au){var f=Gt();er(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!zc(d.addedNodes[0])&&(L.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&zc(d.target)&&~sv.indexOf(d.attributeName))if(d.attributeName==="class"&&Xv(d.target)){var h=Qi(Qs(d.target)),g=h.prefix,y=h.iconName;d.target.setAttribute(Hs,g||f),y&&d.target.setAttribute(Js,y)}else Zv(d.target)&&a(d.target)})}}),yt&&Ai.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kv(){Ai&&Ai.disconnect()}function qv(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function eg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qi(Qs(e));return a.prefix||(a.prefix=Gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Lv(a.prefix,e.innerText)||eu(a.prefix,Ol(e.innerText))),!a.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function tg(e){var t=er(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Hr()):(t["aria-hidden"]="true",t.focusable="false")),t}function ng(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=eg(e),r=n.iconName,a=n.prefix,i=n.rest,o=tg(e),l=Wl("parseNodeAttributes",{},e),s=t.styleParser?qv(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var rg=Ve.styles;function qm(e){var t=L.autoReplaceSvg==="nest"?Gc(e,{styleParser:!1}):Gc(e);return~t.extra.classes.indexOf(Fm)?ht("generateLayersText",e,t):ht("generateSvgReplacementMutation",e,t)}var Ut=new Set;$s.map(function(e){Ut.add("fa-".concat(e))});Object.keys(Vr[G]).map(Ut.add.bind(Ut));Object.keys(Vr[$]).map(Ut.add.bind(Ut));Ut=ra(Ut);function Uc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!yt)return Promise.resolve();var n=V.documentElement.classList,r=function(d){return n.add("".concat(Lc,"-").concat(d))},a=function(d){return n.remove("".concat(Lc,"-").concat(d))},i=L.autoFetchSvg?Ut:$s.map(function(f){return"fa-".concat(f)}).concat(Object.keys(rg));i.includes("fa")||i.push("fa");var o=[".".concat(Fm,":not([").concat(fn,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(fn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=er(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=ru.begin("onTree"),u=l.reduce(function(f,d){try{var h=qm(d);h&&f.push(h)}catch(g){jm||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){Qm(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),d(h)})})}function ag(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qm(e).then(function(n){n&&Qm([n],t)})}function ig(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Bl(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Bl(a||{})),e(r,A(A({},n),{},{mask:a}))}}var og=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,v=n.classes,S=v===void 0?[]:v,m=n.attributes,c=m===void 0?{}:m,p=n.styles,w=p===void 0?{}:p;if(t){var k=t.prefix,C=t.iconName,P=t.icon;return Ki(A({type:"icon"},t),function(){return dn("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(h?c["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||Hr()):(c["aria-hidden"]="true",c.focusable="false")),nu({icons:{main:Gl(P),mask:s?Gl(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:A(A({},Ke),a),symbol:o,title:h,maskId:f,titleId:y,extra:{attributes:c,styles:w,classes:S}})})}},lg={mixout:function(){return{icon:ig(og)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Uc,n.nodeCallback=ag,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Uc(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,y){Promise.all([Ul(a,l),f.iconName?Ul(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=Xs(v,2),m=S[0],c=S[1];g([n,nu({icons:{main:m,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Ji(l);s.length>0&&(a.style=s);var u;return Ks(o)&&(u=ht("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},sg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ki({type:"layer"},function(){dn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(ra(i)).join(" ")},children:o}]})}}}},ug={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return Ki({type:"counter",content:n},function(){return dn("beforeDOMElementCreation",{content:n,params:r}),Gv({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(ra(l))}})})}}}},cg={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Ki({type:"text",content:n},function(){return dn("beforeDOMElementCreation",{content:n,params:r}),Dc({content:n,transform:A(A({},Ke),i),title:l,extra:{attributes:d,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(ra(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Lm){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return L.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Dc({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},fg=new RegExp('"',"ug"),Vc=[1105920,1112319];function dg(e){var t=e.replace(fg,""),n=Cv(t,0),r=n>=Vc[0]&&n<=Vc[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ol(a?t[0]:t),isSecondary:r||a}}function Yc(e,t){var n="".concat(ev).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=er(e.children),o=i.filter(function(P){return P.getAttribute(Dl)===t})[0],l=Bt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(iv),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?$:G,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Yr[h][s[2].toLowerCase()]:ov[h][u],y=dg(d),v=y.value,S=y.isSecondary,m=s[0].startsWith("FontAwesome"),c=eu(g,v),p=c;if(m){var w=Tv(v);w.iconName&&w.prefix&&(c=w.iconName,g=w.prefix)}if(c&&!S&&(!o||o.getAttribute(Hs)!==g||o.getAttribute(Js)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var k=ng(),C=k.extra;C.attributes[Dl]=t,Ul(c,g).then(function(P){var T=nu(A(A({},k),{},{icons:{main:P,mask:tu()},prefix:g,iconName:p,extra:C,watchable:!0})),N=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=T.map(function(I){return ia(I)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function mg(e){return Promise.all([Yc(e,"::before"),Yc(e,"::after")])}function pg(e){return e.parentNode!==document.head&&!~nv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xc(e){if(yt)return new Promise(function(t,n){var r=er(e.querySelectorAll("*")).filter(pg).map(mg),a=ru.begin("searchPseudoElements");Km(),Promise.all(r).then(function(){a(),Yl(),t()}).catch(function(){a(),Yl(),n()})})}var hg={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;L.searchPseudoElements&&Xc(a)}}},Zc=!1,vg={mixout:function(){return{dom:{unwatch:function(){Km(),Zc=!0}}}},hooks:function(){return{bootstrap:function(){Bc(Wl("mutationObserverCallbacks",{}))},noAuto:function(){Kv()},watch:function(n){var r=n.observeMutationsRoot;Zc?Yl():Bc(Wl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},gg={mixout:function(){return{parse:{transform:function(n){return Hc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Hc(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:h};return{tag:"g",attributes:A({},g.outer),children:[{tag:"g",attributes:A({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),g.path)}]}]}}}},Fo={x:0,y:0,width:"100%",height:"100%"};function Jc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yg(e){return e.tag==="g"?e.children:[e]}var wg={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qi(a.split(" ").map(function(o){return o.trim()})):tu();return i.prefix||(i.prefix=Gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,d=o.width,h=o.icon,g=gv({transform:s,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:A(A({},Fo),{},{fill:"white"})},v=f.children?{children:f.children.map(Jc)}:{},S={tag:"g",attributes:A({},g.inner),children:[Jc(A({tag:f.tag,attributes:A(A({},f.attributes),g.path)},v))]},m={tag:"g",attributes:A({},g.outer),children:[S]},c="mask-".concat(l||Hr()),p="clip-".concat(l||Hr()),w={tag:"mask",attributes:A(A({},Fo),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:yg(h)},w]};return r.push(k,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},Fo)}),{children:r,attributes:a}}}},bg={provides:function(t){var n=!1;Bt.matchMedia&&(n=Bt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_g={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},kg=[bv,lg,sg,ug,cg,hg,vg,gg,wg,bg,_g];Fv(kg,{mixoutsTo:Re});Re.noAuto;Re.config;Re.library;Re.dom;var Xl=Re.parse;Re.findIconDefinition;Re.toHtml;var xg=Re.icon;Re.layer;Re.text;Re.counter;var ep={exports:{}},Sg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Cg=Sg,Pg=Cg;function tp(){}function np(){}np.resetWarningCache=tp;var Ag=function(){function e(r,a,i,o,l,s){if(s!==Pg){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:np,resetWarningCache:tp};return n.PropTypes=n,n};ep.exports=Ag();var Eg=ep.exports;const M=qc(Eg);function $c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$c(Object(n),!0).forEach(function(r){Fn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$c(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function Fn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ng(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Rg(e,t){if(e==null)return{};var n=Ng(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zl(e){return Lg(e)||Tg(e)||Ig(e)||jg()}function Lg(e){if(Array.isArray(e))return Hl(e)}function Tg(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ig(e,t){if(e){if(typeof e=="string")return Hl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hl(e,t)}}function Hl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fg(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,g=e.inverse,y=e.border,v=e.listItem,S=e.flip,m=e.size,c=e.rotation,p=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":y,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Fn(t,"fa-".concat(m),typeof m<"u"&&m!==null),Fn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Fn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Fn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function Mg(e){return e=e-0,e===e}function rp(e){return Mg(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Dg=["style"];function Og(e){return e.charAt(0).toUpperCase()+e.slice(1)}function zg(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=rp(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Og(a)]=i:t[a]=i,t},{})}function ap(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return ap(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=zg(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[rp(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Rg(n,Dg);return a.attrs.style=Nt(Nt({},a.attrs.style),o),e.apply(void 0,[t.tag,Nt(Nt({},a.attrs),l)].concat(Zl(r)))}var ip=!1;try{ip=!0}catch{}function Wg(){if(!ip&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qc(e){if(e&&Ei(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xl.icon)return Xl.icon(e);if(e===null)return null;if(e&&Ei(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Mo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Fn({},e,t):{}}var Me=Ri.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Qc(n),f=Mo("classes",[].concat(Zl(Fg(e)),Zl(i.split(" ")))),d=Mo("transform",typeof e.transform=="string"?Xl.transform(e.transform):e.transform),h=Mo("mask",Qc(r)),g=xg(u,Nt(Nt(Nt(Nt({},f),d),h),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!g)return Wg("Could not find icon",u),null;var y=g.abstract,v={ref:t};return Object.keys(e).forEach(function(S){Me.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),Bg(y[0],v)});Me.displayName="FontAwesomeIcon";Me.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Me.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Bg=ap.bind(null,Ri.createElement),Gg={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Ug=Gg,Vg={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Yg={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Xg={prefix:"fas",iconName:"envelope-open",icon:[512,512,[62135],"f2b6","M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"]},Zg={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},iu={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Hg={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"]},Jg=Hg,$g={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"]},Qg={prefix:"fas",iconName:"trash-arrow-up",icon:[448,512,["trash-restore"],"f829","M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"]},op=Qg,Kg={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};const qg="_appHeader_klehz_1",e2="_logoSection_klehz_13",t2="_mainMenuButton_klehz_20",n2="_active_klehz_24",r2="_logo_klehz_13",a2="_searchBox_klehz_35",i2="_breadcrumbs_klehz_42",wn={appHeader:qg,logoSection:e2,mainMenuButton:t2,active:n2,logo:r2,searchBox:a2,breadcrumbs:i2};function o2({toggleExpandMenu:e}){const[t,n]=Hi();function r(a){const i=a.target.value;t.get("text")===null?n(o=>[...o.entries(),["text",i]]):n(o=>[...o.entries()].map(([l,s])=>l==="text"?[l,i]:[l,s]))}return b.jsxs("header",{className:wn.appHeader,children:[b.jsxs("section",{className:wn.logoSection,children:[b.jsx("button",{className:wn.mainMenuButton,title:"Shrink/expand menu",onClick:e,children:b.jsx(Me,{icon:Vg})}),b.jsx("h1",{className:wn.logo,children:"MisterEmail"})]}),b.jsx("input",{type:"text",className:wn.searchBox,placeholder:"Start typing to search ...",value:t.get("text")||"",onChange:r}),b.jsxs("section",{className:wn.breadcrumbs,children:[b.jsx("a",{href:"#",children:"Help"}),b.jsx("a",{href:"#",children:"Settings"}),b.jsx("a",{href:"#",children:"User"})]})]})}const l2="_asideMenu_1k3tv_1",s2="_menuItems_1k3tv_9",u2="_menuItem_1k3tv_9",c2="_itemComposeButton_1k3tv_27",f2="_itemLink_1k3tv_41",d2="_title_1k3tv_57",m2="_unreadCounter_1k3tv_61",p2="_itemLinkSelected_1k3tv_65",it={asideMenu:l2,menuItems:s2,menuItem:u2,itemComposeButton:c2,itemLink:f2,title:d2,unreadCounter:m2,itemLinkSelected:p2};let h2="alexbol99@gmail.com";const qi={currentUser:h2},Jr={makeId:v2,saveToStorage:g2,loadFromStorage:y2,isNarrowDevice:w2};function v2(e=5){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function g2(e,t){localStorage.setItem(e,JSON.stringify(t))}function y2(e,t=null){var n=localStorage[e]||t;return JSON.parse(n)}function w2(){return window.screen.width>620}const oa={query:la,get:b2,post:_2,put:k2,remove:x2};function la(e,t=200){let n=JSON.parse(localStorage.getItem(e))||[];return new Promise(r=>setTimeout(()=>r(n),t))}function b2(e,t){return la(e).then(n=>{const r=n.find(a=>a.id===t);if(!r)throw new Error(`Get failed, cannot find entity with id: ${t} in: ${e}`);return r})}function _2(e,t){return t={...t},t.id=Jr.makeId(6),la(e).then(n=>(n.push(t),Jr.saveToStorage(e,n),t))}function k2(e,t){return la(e).then(n=>{const r=n.findIndex(a=>a.id===t.id);if(r<0)throw new Error(`Update failed, cannot find entity with id: ${t.id} in: ${e}`);return n.splice(r,1,t),lp(e,n),t})}function x2(e,t){return la(e).then(n=>{const r=n.findIndex(a=>a.id===t);if(r<0)throw new Error(`Remove failed, cannot find entity with id: ${t} in: ${e}`);n.splice(r,1),lp(e,n)})}function lp(e,t){localStorage.setItem(e,JSON.stringify(t))}const mn={get:S2,create:C2,update:E2,remove:A2,getById:P2},sa="mails";async function S2(){return await oa.query(sa)}async function C2(e){return await oa.post(sa,e)}async function P2(e){return await oa.get(sa,e)}async function A2(e){return await oa.remove(sa,e)}async function E2(e){return await oa.put(sa,e)}const N2=[{Date:"9/2/2013 4:36:30 AM",Subject:"top_b_box has sent a message",Body:`\r
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
`,From:"alexbol99@gmail.com",To:"support+id11699320@ryanairsupport.zendesk.com",CC:"",Attachments:"Bank account ownership.pdf; ","Attachments Path":"/Users/alexanderbol/Documents/CodingAcademy/Day3/MacUncle_September 6, 2023 4:32 PM/Mail/Starred.mbox/Attachments",id:"Z2JZMO"}],Do=10,sp={pathname:"/inbox",pageNum:0,text:""},up={date:!0,dateSortAscending:!1,subject:!1,subjectSortAscending:!0},Ie={query:R2,remove:F2,getById:L2,create:I2,update:j2,defaultSortBy:up,defaultFilterBy:sp,getUnreadCounter:T2};async function R2(e=sp,t=up){let n=await mn.get(),r=M2(n,e.pathname);if(r.length===0)return[];let a=D2(r,e.pageNum),i=z2(r,t);return i=O2(i,a),i=V2(i,e.text),[i,a]}async function L2(e){let n={...await mn.getById(e),isViewed:!0};return await mn.update(n),n}async function T2(){return(await mn.get()).filter(t=>t.To===qi.currentUser&&!t.isDeleted).reduce((t,n)=>n.isViewed?t:t+1,0)}function I2(e=Y2()){return mn.create(e)}function j2(e){return mn.update(e)}function F2(e){return mn.remove(e)}function M2(e,t){const n=qi.currentUser;let r;switch(t){case"/inbox":r=e.filter(a=>a.To===n&&!a.isDeleted);break;case"/starred":r=e.filter(a=>a.isStarred&&!a.isDeleted);break;case"/sent":r=e.filter(a=>a.From===n&&!a.isDraft&&!a.isDeleted);break;case"/drafts":r=e.filter(a=>a.From===n&&a.isDraft&&!a.isDeleted);break;case"/trash":r=e.filter(a=>a.isDeleted);break;default:r=e.filter(a=>a.To===n&&!a.isDeleted);break}return r}function D2(e,t){const n=Do*t,r=Math.min(Do*(t+1),e.length);return{start:n,end:r,total:e.length,isLastPage:n+Do>=e.length}}function O2(e,t){return e.slice(t.start,t.end)}function z2(e,t){let n;return t.date&&(n=t.dateSortAscending?W2:B2),t.subject&&(n=t.subjectSortAscending?G2:U2),e.sort(n)}function W2(e,t){return new Date(e.Date)-new Date(t.Date)}function B2(e,t){return new Date(t.Date)-new Date(e.Date)}function G2(e,t){return e.Subject<t.Subject?1:t.Subject<e.Subject?-1:0}function U2(e,t){return e.Subject<t.Subject?-1:t.Subject<e.Subject?1:0}function V2(e,t){return e.filter(n=>n.To.includes(t)||n.From.includes(t)||n.Body.includes(t))}function Y2(e="",t="",n=""){return{id:null,Date:new Date().toLocaleString(),From:qi.currentUser,To:e,CC:"",Subject:t,Body:n,Attachments:"","Attachments Path":"",isDraft:!0,isViewed:!0,isStarred:!1,isDeleted:!1}}localStorage.getItem("mails")||localStorage.setItem("mails",JSON.stringify(N2));const X2=[{to:"/inbox",name:"Inbox",icon:$g},{to:"/starred",name:"Starred",icon:Yg},{to:"/sent",name:"Sent",icon:Kg},{to:"/drafts",name:"Drafts",icon:Ug},{to:"/trash",name:"Trash",icon:iu}];function Z2({to:e,name:t,icon:n,selected:r,expanded:a,unreadCounter:i}){return b.jsx("li",{className:`${it.menuItem} ${it.itemLink} ${r?it.itemLinkSelected:""}`,children:b.jsxs(Pm,{to:e,title:t,children:[b.jsx(Me,{icon:n})," ",a&&b.jsx("span",{className:it.title,children:t}),a&&t==="Inbox"&&i>1&&b.jsx("span",{className:it.unreadCounter,children:i})]})})}function H2(){const[e,t]=_.useState(0),[n,r]=_.useState(Jr.isNarrowDevice()),{pathname:a}=tt();_.useEffect(()=>{i()});async function i(){try{const o=await Ie.getUnreadCounter();t(o)}catch(o){console.error(o.message)}}return b.jsxs("aside",{className:it.asideMenu,children:[b.jsx("div",{className:`${it.menuItem} ${it.itemComposeButton}`,children:b.jsxs(Pm,{to:`${a}/?compose=new`,title:"Compose new mail",children:[b.jsx(Me,{icon:Zg})," ",b.jsx("span",{children:"Compose"})]})}),b.jsx("ul",{className:it.menuItems,children:X2.map(o=>b.jsx(Z2,{to:o.to,name:o.name,icon:o.icon,selected:!1,expanded:n,unreadCounter:e},o.name))})]})}function J2(){const e={};return{on(t,n){return e[t]=e[t]?[...e[t],n]:[n],()=>{e[t]=e[t].filter(r=>r!==n)}},emit(t,n){e[t]&&e[t].forEach(r=>r(n))}}}const cp=J2();function fp(e){cp.emit("show-user-msg",e)}function ou(e){fp({txt:e,type:"success"})}function lu(e){fp({txt:e,type:"error"})}const $2="_pagination_by6k3_16",nt={"list-header":"_list-header_by6k3_1","sort-button":"_sort-button_by6k3_8",pagination:$2,"pagination-button":"_pagination-button_by6k3_20","horizontal-menu":"_horizontal-menu_by6k3_29","action-button":"_action-button_by6k3_37","select-all-checkbox":"_select-all-checkbox_by6k3_48","delete-selected-items":"_delete-selected-items_by6k3_48","restore-selected-items":"_restore-selected-items_by6k3_48"};function Q2({mails:e,pathname:t,paginationParams:n,toggleSelectAll:r,toggleSelectedItemsAreDeleted:a,deleteSelectedItems:i,onPrevPageButtonClick:o,onNextPageButtonClick:l,toggleSortByDate:s,toggleSortBySubject:u}){return b.jsxs("header",{className:nt["list-header"],children:[b.jsx("input",{type:"checkbox",className:nt["select-all-checkbox"],onClick:f=>r(f.target.checked)}),b.jsx("button",{className:nt["delete-selected-items"],onClick:t==="/trash"?i:a,title:t==="/trash"?"Completely delete selected mails":"Move selected mails to Trash folder",children:b.jsx(Me,{icon:iu})}),t==="/trash"&&b.jsx("button",{className:nt["restore-selected-items"],onClick:a,title:"Restore selected mails from Trash folder",children:b.jsx(Me,{icon:op})}),b.jsx("button",{className:nt["sort-button"],title:"Sort by date",onClick:s,children:"Sort By Date"}),b.jsx("button",{className:nt["sort-button"],title:"Sort by subject",onClick:u,children:"Sort By Subject"}),n&&e.length>0&&b.jsx("div",{className:nt.pagination,children:`${n.start+1}-${n.end} of ${n.total}`}),n&&e.length>0&&b.jsx("button",{className:nt["pagination-button"],onClick:()=>o(),children:"‹"}),n&&e.length>0&&b.jsx("button",{className:nt["pagination-button"],onClick:()=>l(),children:"›"})]})}const K2="_emailPreviewContainer_1u27r_1",q2="_asideIcons_1u27r_7",ey="_emailPreviewItem_1u27r_12",ty="_emailPreviewItemUnread_1u27r_29",ny="_emailPreviewSelectCheckbox_1u27r_34",ry="_emailPreviewStar_1u27r_39",ay="_emailPreviewStarUnchecked_1u27r_44",iy="_emailPreviewStarChecked_1u27r_51",oy="_emailPreviewItemFrom_1u27r_59",ly="_emailPreviewItemContent_1u27r_63",sy="_emailPreviewItemDate_1u27r_67",We={emailPreviewContainer:K2,asideIcons:q2,emailPreviewItem:ey,emailPreviewItemUnread:ty,emailPreviewSelectCheckbox:ny,emailPreviewStar:ry,emailPreviewStarUnchecked:ay,emailPreviewStarChecked:iy,emailPreviewItemFrom:oy,emailPreviewItemContent:ly,emailPreviewItemDate:sy};function uy({pathname:e,mail:t,isSelected:n,saveUpdatedMail:r,toggleIsSelected:a}){const i=na(),[o,l]=Hi();function s(h){e==="/drafts"?l({compose:h.id}):(r({...h,isViewed:!0}),i(`${h.id}`))}function u(h){r({...h,isStarred:!h.isStarred})}const f=t.isViewed?"":We.emailPreviewItemUnread,d=t.isStarred?We.emailPreviewStarChecked:We.emailPreviewStarUnchecked;return b.jsxs("div",{className:We.emailPreviewContainer,children:[b.jsxs("div",{className:We.asideIcons,children:[b.jsx("input",{className:We.emailPreviewSelectCheckbox,type:"checkbox",onChange:()=>a(t),checked:n}),b.jsx("span",{className:`${We.emailPreviewStar} ${d}`,title:t.isStarred?"Starred":"Not starred",onClick:()=>u(t)})]}),b.jsxs("div",{className:`${We.emailPreviewItem} ${f}`,onClick:()=>s(t),children:[b.jsx("div",{className:We.emailPreviewItemFrom,children:["/sent","/drafts","/trash"].includes(e)?`To:${t.To.split("@")[0]}`:t.From.split("@")[0]}),b.jsx("div",{className:We.emailPreviewItemContent,children:t.Subject}),b.jsx("div",{className:We.emailPreviewItemDate,children:new Date(t.Date).toLocaleDateString()})]})]})}const cy="_emailPreview_91dxu_1",fy={emailPreview:cy,"items-list":"_items-list_91dxu_8"};function dy({mails:e,selectedMails:t,pathname:n,toggleIsSelected:r,saveUpdatedMail:a}){return b.jsx("main",{className:fy.emailPreview,children:e.map(i=>b.jsx(uy,{pathname:n,mail:i,isSelected:t.includes(i),toggleIsSelected:r,saveUpdatedMail:a},i.id))})}const my="_emailsPreviewContainer_395dm_1",py={emailsPreviewContainer:my};function hy(){const[e,t]=_.useState(null),[n,r]=_.useState([]),{pathname:a}=tt(),[i,o]=_.useState(Ie.defaultFilterBy),[l,s]=_.useState(Ie.defaultSortBy),[u,f]=_.useState(null),[d,h]=Hi(),[g,y]=_.useState(Jr.isNarrowDevice());_.useEffect(()=>{o(N=>({...N,pathname:a})),Jr.isNarrowDevice()||y(!1)},[a]),_.useEffect(()=>{v()},[i,l,window.location.href]),_.useEffect(()=>{o(N=>({...N,text:d.get("text")||""}))},[d]);async function v(){try{const[N,I]=await Ie.query(i,l);t(N),f(I)}catch(N){console.error(N.message)}}function S(){i.pageNum>0&&o(N=>({...N,pageNum:N.pageNum-1}))}function m(){u.isLastPage||o(N=>({...N,pageNum:N.pageNum+1}))}async function c(N,I=""){t(ce=>ce.map(wt=>wt.id===N.id?N:wt));try{await Ie.update(N),v(),I&&ou(I)}catch{lu("Error occurred while saving email")}}function p(N){r(I=>I.includes(N)?I.filter(ce=>ce!==N):[...I,N])}function w(N){r(N?e:[])}async function k(){for(let N of n){const I={...N,isDeleted:!N.isDeleted};await Ie.update(I),v()}r([])}async function C(){for(let N of n)await Ie.remove(N.id),v()}function P(){s(N=>({...N,date:!0,dateSortAscending:!N.dateSortAscending,subject:!1}))}function T(){s(N=>({...N,date:!1,subject:!0,subjectSortAscending:!N.subjectSortAscending}))}return e?b.jsxs(Ri.Fragment,{children:[b.jsxs("div",{className:py.emailsPreviewContainer,children:[b.jsx(Q2,{mails:e,pathname:a,paginationParams:u,toggleSelectAll:w,toggleSelectedItemsAreDeleted:k,deleteSelectedItems:C,onPrevPageButtonClick:S,onNextPageButtonClick:m,toggleSortByDate:P,toggleSortBySubject:T}),b.jsx(dy,{pathname:a,mails:e,selectedMails:n,saveUpdatedMail:c,toggleIsSelected:p})]}),b.jsx(E0,{}),"   "]}):b.jsx("div",{children:"Loading mails ..."})}const Jt={"email-compose":"_email-compose_1ql9s_2","compose-popup":"_compose-popup_1ql9s_12","compose-popup-title":"_compose-popup-title_1ql9s_19","compose-input":"_compose-input_1ql9s_23","compose-textarea":"_compose-textarea_1ql9s_31","send-button":"_send-button_1ql9s_43"};function vy(){const[e,t]=_.useState(null),{pathname:n}=tt(),r=na(),[a,i]=Hi(),o=_.useRef(e),l=_.useRef(null),s=a.get("compose");_.useEffect(()=>{o.current=e},[e]),_.useEffect(()=>{s&&(s==="new"?u():f(s))},[s]);async function u(){try{const y=await Ie.create();y.id&&t(y)}catch(y){console.log(y.message),r(n)}}async function f(y){try{const v=await Ie.getById(y);t(v)}catch(v){console.log(v.message),r(n)}}async function d(y,v=""){try{await Ie.update(y),v&&ou(v)}catch{lu("Error occurred while saving email")}}function h(y){let{value:v,name:S}=y.target;t(m=>({...m,[S]:v})),clearTimeout(l.current),l.current=setTimeout(()=>{d(o.current,"Updated message saved automatically")},5e3)}async function g(y){y.preventDefault();const v={...e,Date:new Date().toLocaleString(),isDraft:!1};d(v,"Message sent"),r(n)}return s?e?b.jsx("div",{className:Jt["email-compose"],children:b.jsxs("div",{className:Jt["compose-popup"],children:[b.jsx("h2",{className:Jt["compose-popup-title"],children:s==="new"?"New Message":e.Subject}),b.jsxs("form",{onSubmit:g,children:[b.jsx("label",{htmlFor:"To",children:"To:"}),b.jsx("input",{type:"text",id:"To",name:"To",className:Jt["compose-input"],placeholder:"Recipient",onChange:h,value:e.To}),b.jsx("label",{htmlFor:"Subject",children:"Subject:"}),b.jsx("input",{type:"text",id:"Subject",name:"Subject",className:Jt["compose-input"],placeholder:"Subject",onChange:h,value:e.Subject,dir:"auto"}),b.jsx("textarea",{id:"Body",name:"Body",className:Jt["compose-textarea"],placeholder:"Compose your message...",onChange:h,value:e.Body,dir:"auto"}),b.jsx("button",{className:Jt["send-button"],children:"Send"})]})]})}):b.jsx("div",{children:'"Loading mail"'}):null}const gy="_emailDetailsContainer_hsx6s_2",yy="_header_hsx6s_16",wy="_goBackButton_hsx6s_22",by="_horizontalMenu_hsx6s_26",_y="_actionButton_hsx6s_34",ky="_subject_hsx6s_40",xy="_from_hsx6s_45",Sy="_date_hsx6s_50",Cy="_content_hsx6s_56",Py="_attachments_hsx6s_71",Je={emailDetailsContainer:gy,header:yy,goBackButton:wy,horizontalMenu:by,actionButton:_y,subject:ky,from:xy,date:Sy,content:Cy,attachments:Py};function Ay(){const{mailId:e}=h0(),[t,n]=_.useState(null),{pathname:r}=tt(),a=na();_.useEffect(()=>{i()},[]);async function i(){try{const u=await Ie.getById(e);n(u)}catch(u){console.error(u.message),a(r.slice(0,r.indexOf(e)-1))}}async function o(){await l({...t,isViewed:!t.isViewed}),a(r.slice(0,r.indexOf(e)-1))}async function l(u,f=""){try{await Ie.update(u),f&&ou(f)}catch{lu("Error occurred while saving email")}}function s(u){l({...u,isDeleted:!u.isDeleted},"Messages moved to Trash folder")}return t?b.jsxs("div",{className:Je.emailDetailsContainer,children:[b.jsx("header",{className:Je.header,children:b.jsxs("nav",{className:"breadcrumbs",children:[b.jsx("button",{className:"back-button",title:"Back to the previous page",onClick:()=>a(r.slice(0,r.indexOf(e)-1)),children:b.jsx(Me,{icon:Jg})}),b.jsx("button",{className:Je.actionButton,title:t.isDeleted?"Restore from trash folder":"Move to trash folder",onClick:()=>s(t),children:b.jsx(Me,{icon:t.isDeleted?op:iu})}),b.jsx("button",{className:Je.actionButton,title:"Mark as unread",onClick:()=>o(),children:b.jsx(Me,{icon:Xg})})]})}),b.jsx("h2",{className:Je.subject,dir:"auto",children:t.Subject}),b.jsx("p",{className:Je.from,children:qi.currentUser===t.To?t.From:t.To}),b.jsx("div",{className:Je.date,children:t.Date}),b.jsx("p",{className:Je.content,dir:"auto",children:t.Body}),b.jsx("section",{className:Je.attachments})]}):b.jsx("div",{className:Je.emailDetailsContainer,children:"Loading mail details"})}const Ey="_success_1t5sh_15",Ny="_error_1t5sh_19",Kc={"user-msg":"_user-msg_1t5sh_1",success:Ey,error:Ny};function Ry(){const[e,t]=_.useState(null);_.useEffect(()=>cp.on("show-user-msg",a=>{t(a),setTimeout(()=>{n()},3e3)}),[]);function n(){t(null)}return e?b.jsx("div",{className:`${Kc["user-msg"]} ${Kc[e.type]}`,children:b.jsx("p",{children:e.txt})}):b.jsx(b.Fragment,{})}const Ly="_appLayout_v4xbg_2",Ty="_expanded_v4xbg_11",Iy="_shrunk_v4xbg_14",jy="_mainPanel_v4xbg_50",Oo={appLayout:Ly,expanded:Ty,shrunk:Iy,mainPanel:jy};function Fy(){function e(){}return b.jsxs(D0,{children:[b.jsxs("div",{className:`${Oo.appLayout} ${Oo.asideMenuExpandStyle}`,children:[b.jsx(o2,{toggleExpandMenu:e}),b.jsx(H2,{}),b.jsx("main",{className:Oo.mainPanel,children:b.jsxs(R0,{children:[b.jsx(bn,{path:"/",element:b.jsx(V0,{})}),b.jsx(bn,{path:"/:pagename/:mailId",element:b.jsx(Ay,{})}),b.jsx(bn,{path:"/:pagename",element:b.jsx(hy,{}),children:b.jsx(bn,{path:"/:pagename",element:b.jsx(vy,{})})}),b.jsx(bn,{path:"*",element:b.jsx(My,{})})]})})]}),b.jsx(Ry,{})]})}function My(){return b.jsx("div",{children:b.jsx("h2",{children:"404 Page not found"})})}zo.createRoot(document.getElementById("root")).render(b.jsx(Fy,{}));
