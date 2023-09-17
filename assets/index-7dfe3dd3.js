function np(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vc={exports:{}},Si={},Bc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),rp=Symbol.for("react.portal"),ap=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),lp=Symbol.for("react.provider"),sp=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),dp=Symbol.for("react.lazy"),Ks=Symbol.iterator;function mp(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xc=Object.assign,Zc={};function Un(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Uc}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hc(){}Hc.prototype=Un.prototype;function Wl(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Uc}var Gl=Wl.prototype=new Hc;Gl.constructor=Wl;Xc(Gl,Un.prototype);Gl.isPureReactComponent=!0;var qs=Array.isArray,Jc=Object.prototype.hasOwnProperty,Yl={current:null},Qc={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Jc.call(t,r)&&!Qc.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Br,type:e,key:i,ref:o,props:a,_owner:Yl.current}}function pp(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function hp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function Qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hp(""+e.key):t.toString(36)}function Ta(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Br:case rp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Qi(o,0):r,qs(a)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Ta(a,t,n,"",function(u){return u})):a!=null&&(Vl(a)&&(a=pp(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(eu,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",qs(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Qi(i,l);o+=Ta(i,t,n,s,a)}else if(s=mp(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Qi(i,l++),o+=Ta(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(e,t,n){if(e==null)return e;var r=[],a=0;return Ta(e,r,"","",function(i){return t.call(n,i,a++)}),r}function gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},La={transition:null},vp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:La,ReactCurrentOwner:Yl};D.Children={map:ia,forEach:function(e,t,n){ia(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ia(e,function(){t++}),t},toArray:function(e){return ia(e,function(t){return t})||[]},only:function(e){if(!Vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Un;D.Fragment=ap;D.Profiler=op;D.PureComponent=Wl;D.StrictMode=ip;D.Suspense=cp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xc({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Yl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Jc.call(t,s)&&!Qc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Br,type:e.type,key:a,ref:i,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lp,_context:e},e.Consumer=e};D.createElement=$c;D.createFactory=function(e){var t=$c.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:up,render:e}};D.isValidElement=Vl;D.lazy=function(e){return{$$typeof:dp,_payload:{_status:-1,_result:e},_init:gp}};D.memo=function(e,t){return{$$typeof:fp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=La.transition;La.transition={};try{e()}finally{La.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return ve.current.useCallback(e,t)};D.useContext=function(e){return ve.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};D.useEffect=function(e,t){return ve.current.useEffect(e,t)};D.useId=function(){return ve.current.useId()};D.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ve.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};D.useRef=function(e){return ve.current.useRef(e)};D.useState=function(e){return ve.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ve.current.useTransition()};D.version="18.2.0";Bc.exports=D;var S=Bc.exports;const xi=Yc(S),yp=np({__proto__:null,default:xi},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=S,bp=Symbol.for("react.element"),kp=Symbol.for("react.fragment"),_p=Object.prototype.hasOwnProperty,Sp=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xp={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_p.call(t,r)&&!xp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:bp,type:e,key:i,ref:o,props:a,_owner:Sp.current}}Si.Fragment=kp;Si.jsx=Kc;Si.jsxs=Kc;Vc.exports=Si;var _=Vc.exports,No={},qc={exports:{}},Ne={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var F=T.length;T.push(j);e:for(;0<F;){var K=F-1>>>1,ie=T[K];if(0<a(ie,j))T[K]=j,T[F]=ie,F=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],F=T.pop();if(F!==j){T[0]=F;e:for(var K=0,ie=T.length,ra=ie>>>1;K<ra;){var Bt=2*(K+1)-1,Ji=T[Bt],Ut=Bt+1,aa=T[Ut];if(0>a(Ji,F))Ut<ie&&0>a(aa,Ji)?(T[K]=aa,T[Ut]=F,K=Ut):(T[K]=Ji,T[Bt]=F,K=Bt);else if(Ut<ie&&0>a(aa,F))T[K]=aa,T[Ut]=F,K=Ut;else break e}}return j}function a(T,j){var F=T.sortIndex-j.sortIndex;return F!==0?F:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,h=3,g=!1,y=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function w(T){if(v=!1,p(T),!y)if(n(s)!==null)y=!0,Zi(b);else{var j=n(u);j!==null&&Hi(w,j.startTime-T)}}function b(T,j){y=!1,v&&(v=!1,m(I),I=-1),g=!0;var F=h;try{for(p(j),d=n(s);d!==null&&(!(d.expirationTime>j)||T&&!J());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var ie=K(d.expirationTime<=j);j=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(s)&&r(s),p(j)}else r(s);d=n(s)}if(d!==null)var ra=!0;else{var Bt=n(u);Bt!==null&&Hi(w,Bt.startTime-j),ra=!1}return ra}finally{d=null,h=F,g=!1}}var C=!1,A=null,I=-1,E=5,P=-1;function J(){return!(e.unstable_now()-P<E)}function pt(){if(A!==null){var T=e.unstable_now();P=T;var j=!0;try{j=A(!0,T)}finally{j?Jn():(C=!1,A=null)}}else C=!1}var Jn;if(typeof c=="function")Jn=function(){c(pt)};else if(typeof MessageChannel<"u"){var $s=new MessageChannel,tp=$s.port2;$s.port1.onmessage=pt,Jn=function(){tp.postMessage(null)}}else Jn=function(){x(pt,0)};function Zi(T){A=T,C||(C=!0,Jn())}function Hi(T,j){I=x(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Zi(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var F=h;h=j;try{return T()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=h;h=T;try{return j()}finally{h=F}},e.unstable_scheduleCallback=function(T,j,F){var K=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?K+F:K):F=K,T){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=F+ie,T={id:f++,callback:j,priorityLevel:T,startTime:F,expirationTime:ie,sortIndex:-1},F>K?(T.sortIndex=F,t(u,T),n(s)===null&&T===n(u)&&(v?(m(I),I=-1):v=!0,Hi(w,F-K))):(T.sortIndex=ie,t(s,T),y||g||(y=!0,Zi(b))),T},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(T){var j=h;return function(){var F=h;h=j;try{return T.apply(this,arguments)}finally{h=F}}}})(tf);ef.exports=tf;var Cp=ef.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=S,Pe=Cp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rf=new Set,kr={};function cn(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(kr[e]=t,e=0;e<t.length;e++)rf.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function Ep(e){return Ro.call(nu,e)?!0:Ro.call(tu,e)?!1:Ap.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function Pp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Np(e,t,n,r){if(t===null||typeof t>"u"||Pp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bl=/[\-:]([a-z])/g;function Ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bl,Ul);ce[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bl,Ul);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bl,Ul);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,t,n,r){var a=ce.hasOwnProperty(t)?ce[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Np(t,n,a,r)&&(n=null),r||a===null?Ep(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),hn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),of=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),lf=Symbol.for("react.offscreen"),ru=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,$i;function ir(e){if($i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$i=t&&t[1]||""}return`
`+$i+e}var Ki=!1;function qi(e,t){if(!e||Ki)return"";Ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function Rp(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function jo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case hn:return"Portal";case To:return"Profiler";case Zl:return"StrictMode";case Lo:return"Suspense";case Io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case of:return(e.displayName||"Context")+".Consumer";case af:return(e._context.displayName||"Context")+".Provider";case Hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:jo(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return jo(e(t))}catch{}}return null}function Tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jo(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lp(e){var t=sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function la(e){e._valueTracker||(e._valueTracker=Lp(e))}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fo(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cf(e,t){t=t.checked,t!=null&&Xl(e,"checked",t,!1)}function Mo(e,t){cf(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Do(e,t.type,n):t.hasOwnProperty("defaultValue")&&Do(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Do(e,t,n){(t!=="number"||Ua(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function Rn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(or(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function ff(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sa,mf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ip=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){Ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function pf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function hf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=pf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var jp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yo=null;function Ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,Tn=null,Ln=null;function su(e){if(e=Zr(e)){if(typeof Vo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ni(t),Vo(e.stateNode,e.type,t))}}function gf(e){Tn?Ln?Ln.push(e):Ln=[e]:Tn=e}function vf(){if(Tn){var e=Tn,t=Ln;if(Ln=Tn=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function yf(e,t){return e(t)}function wf(){}var eo=!1;function bf(e,t,n){if(eo)return e(t,n);eo=!0;try{return yf(e,t,n)}finally{eo=!1,(Tn!==null||Ln!==null)&&(wf(),vf())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Bo=!1;if(it)try{var $n={};Object.defineProperty($n,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{Bo=!1}function Fp(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var fr=!1,Xa=null,Za=!1,Uo=null,Mp={onError:function(e){fr=!0,Xa=e}};function Dp(e,t,n,r,a,i,o,l,s){fr=!1,Xa=null,Fp.apply(Mp,arguments)}function Op(e,t,n,r,a,i,o,l,s){if(Dp.apply(this,arguments),fr){if(fr){var u=Xa;fr=!1,Xa=null}else throw Error(k(198));Za||(Za=!0,Uo=u)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uu(e){if(fn(e)!==e)throw Error(k(188))}function zp(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return uu(a),e;if(i===r)return uu(a),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function _f(e){return e=zp(e),e!==null?Sf(e):null}function Sf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sf(e);if(t!==null)return t;e=e.sibling}return null}var xf=Pe.unstable_scheduleCallback,cu=Pe.unstable_cancelCallback,Wp=Pe.unstable_shouldYield,Gp=Pe.unstable_requestPaint,q=Pe.unstable_now,Yp=Pe.unstable_getCurrentPriorityLevel,$l=Pe.unstable_ImmediatePriority,Cf=Pe.unstable_UserBlockingPriority,Ha=Pe.unstable_NormalPriority,Vp=Pe.unstable_LowPriority,Af=Pe.unstable_IdlePriority,Ci=null,$e=null;function Bp(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Zp,Up=Math.log,Xp=Math.LN2;function Zp(e){return e>>>=0,e===0?32:31-(Up(e)/Xp|0)|0}var ua=64,ca=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ja(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=lr(l):(i&=o,i!==0&&(r=lr(i)))}else o=n&~a,o!==0?r=lr(o):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),a=1<<n,r|=e[n],t&=~a;return r}function Hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ve(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=Hp(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ef(){var e=ua;return ua<<=1,!(ua&4194240)&&(ua=64),e}function to(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Qp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ve(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Kl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var z=0;function Pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nf,ql,Rf,Tf,Lf,Zo=!1,fa=[],At=null,Et=null,Pt=null,xr=new Map,Cr=new Map,bt=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Kn(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Zr(t),t!==null&&ql(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Kp(e,t,n,r,a){switch(t){case"focusin":return At=Kn(At,e,t,n,r,a),!0;case"dragenter":return Et=Kn(Et,e,t,n,r,a),!0;case"mouseover":return Pt=Kn(Pt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return xr.set(i,Kn(xr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Cr.set(i,Kn(Cr.get(i)||null,e,t,n,r,a)),!0}return!1}function If(e){var t=Ht(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=kf(n),t!==null){e.blockedOn=t,Lf(e.priority,function(){Rf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ia(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ho(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yo=r,n.target.dispatchEvent(r),Yo=null}else return t=Zr(n),t!==null&&ql(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Ia(e)&&n.delete(t)}function qp(){Zo=!1,At!==null&&Ia(At)&&(At=null),Et!==null&&Ia(Et)&&(Et=null),Pt!==null&&Ia(Pt)&&(Pt=null),xr.forEach(du),Cr.forEach(du)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,qp)))}function Ar(e){function t(a){return qn(a,e)}if(0<fa.length){qn(fa[0],e);for(var n=1;n<fa.length;n++){var r=fa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&qn(At,e),Et!==null&&qn(Et,e),Pt!==null&&qn(Pt,e),xr.forEach(t),Cr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)If(n),n.blockedOn===null&&bt.shift()}var In=dt.ReactCurrentBatchConfig,Qa=!0;function eh(e,t,n,r){var a=z,i=In.transition;In.transition=null;try{z=1,es(e,t,n,r)}finally{z=a,In.transition=i}}function th(e,t,n,r){var a=z,i=In.transition;In.transition=null;try{z=4,es(e,t,n,r)}finally{z=a,In.transition=i}}function es(e,t,n,r){if(Qa){var a=Ho(e,t,n,r);if(a===null)fo(e,t,r,$a,n),fu(e,r);else if(Kp(a,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<$p.indexOf(e)){for(;a!==null;){var i=Zr(a);if(i!==null&&Nf(i),i=Ho(e,t,n,r),i===null&&fo(e,t,r,$a,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else fo(e,t,r,null,n)}}var $a=null;function Ho(e,t,n,r){if($a=null,e=Ql(r),e=Ht(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $a=e,null}function jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yp()){case $l:return 1;case Cf:return 4;case Ha:case Vp:return 16;case Af:return 536870912;default:return 16}default:return 16}}var _t=null,ts=null,ja=null;function Ff(){if(ja)return ja;var e,t=ts,n=t.length,r,a="value"in _t?_t.value:_t.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return ja=a.slice(e,1<r?1-r:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function da(){return!0}function mu(){return!1}function Re(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?da:mu,this.isPropagationStopped=mu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Re(Xn),Xr=H({},Xn,{view:0,detail:0}),nh=Re(Xr),no,ro,er,Ai=H({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(no=e.screenX-er.screenX,ro=e.screenY-er.screenY):ro=no=0,er=e),no)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),pu=Re(Ai),rh=H({},Ai,{dataTransfer:0}),ah=Re(rh),ih=H({},Xr,{relatedTarget:0}),ao=Re(ih),oh=H({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=Re(oh),sh=H({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=Re(sh),ch=H({},Xn,{data:0}),hu=Re(ch),fh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mh[e])?!!t[e]:!1}function rs(){return ph}var hh=H({},Xr,{key:function(e){if(e.key){var t=fh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=Re(hh),vh=H({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Re(vh),yh=H({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),wh=Re(yh),bh=H({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=Re(bh),_h=H({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sh=Re(_h),xh=[9,13,27,32],as=it&&"CompositionEvent"in window,dr=null;it&&"documentMode"in document&&(dr=document.documentMode);var Ch=it&&"TextEvent"in window&&!dr,Mf=it&&(!as||dr&&8<dr&&11>=dr),vu=String.fromCharCode(32),yu=!1;function Df(e,t){switch(e){case"keyup":return xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Ah(e,t){switch(e){case"compositionend":return Of(t);case"keypress":return t.which!==32?null:(yu=!0,vu);case"textInput":return e=t.data,e===vu&&yu?null:e;default:return null}}function Eh(e,t){if(vn)return e==="compositionend"||!as&&Df(e,t)?(e=Ff(),ja=ts=_t=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mf&&t.locale!=="ko"?null:t.data;default:return null}}var Ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ph[e.type]:t==="textarea"}function zf(e,t,n,r){gf(r),t=Ka(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,Er=null;function Nh(e){Qf(e,0)}function Ei(e){var t=bn(e);if(uf(t))return e}function Rh(e,t){if(e==="change")return t}var Wf=!1;if(it){var io;if(it){var oo="oninput"in document;if(!oo){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),oo=typeof bu.oninput=="function"}io=oo}else io=!1;Wf=io&&(!document.documentMode||9<document.documentMode)}function ku(){mr&&(mr.detachEvent("onpropertychange",Gf),Er=mr=null)}function Gf(e){if(e.propertyName==="value"&&Ei(Er)){var t=[];zf(t,Er,e,Ql(e)),bf(Nh,t)}}function Th(e,t,n){e==="focusin"?(ku(),mr=t,Er=n,mr.attachEvent("onpropertychange",Gf)):e==="focusout"&&ku()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Er)}function Ih(e,t){if(e==="click")return Ei(t)}function jh(e,t){if(e==="input"||e==="change")return Ei(t)}function Fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Fh;function Pr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ro.call(t,a)||!Xe(e[a],t[a]))return!1}return!0}function _u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=_u(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_u(n)}}function Yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vf(){for(var e=window,t=Ua();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ua(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mh(e){var t=Vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yf(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Su(n,i);var o=Su(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dh=it&&"documentMode"in document&&11>=document.documentMode,yn=null,Jo=null,pr=null,Qo=!1;function xu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||yn==null||yn!==Ua(r)||(r=yn,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Pr(pr,r)||(pr=r,r=Ka(Jo,"onSelect"),0<r.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},lo={},Bf={};it&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function Pi(e){if(lo[e])return lo[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bf)return lo[e]=t[n];return e}var Uf=Pi("animationend"),Xf=Pi("animationiteration"),Zf=Pi("animationstart"),Hf=Pi("transitionend"),Jf=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Jf.set(e,t),cn(t,[e])}for(var so=0;so<Cu.length;so++){var uo=Cu[so],Oh=uo.toLowerCase(),zh=uo[0].toUpperCase()+uo.slice(1);Wt(Oh,"on"+zh)}Wt(Uf,"onAnimationEnd");Wt(Xf,"onAnimationIteration");Wt(Zf,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Hf,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Au(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Op(r,t,void 0,e),e.currentTarget=null}function Qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Au(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Au(a,l,u),i=s}}}if(Za)throw e=Uo,Za=!1,Uo=null,e}function G(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var r=e+"__bubble";n.has(r)||($f(t,e,2,!1),n.add(r))}function co(e,t,n){var r=0;t&&(r|=4),$f(n,e,r,t)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[pa]){e[pa]=!0,rf.forEach(function(n){n!=="selectionchange"&&(Wh.has(n)||co(n,!1,e),co(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pa]||(t[pa]=!0,co("selectionchange",!1,t))}}function $f(e,t,n,r){switch(jf(t)){case 1:var a=eh;break;case 4:a=th;break;default:a=es}n=a.bind(null,t,n,e),a=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function fo(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Ht(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}bf(function(){var u=i,f=Ql(n),d=[];e:{var h=Jf.get(e);if(h!==void 0){var g=ns,y=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":g=gh;break;case"focusin":y="focus",g=ao;break;case"focusout":y="blur",g=ao;break;case"beforeblur":case"afterblur":g=ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wh;break;case Uf:case Xf:case Zf:g=lh;break;case Hf:g=kh;break;case"scroll":g=nh;break;case"wheel":g=Sh;break;case"copy":case"cut":case"paste":g=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gu}var v=(t&4)!==0,x=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=Sr(c,m),w!=null&&v.push(Rr(c,w,p)))),x)break;c=c.return}0<v.length&&(h=new g(h,y,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Yo&&(y=n.relatedTarget||n.fromElement)&&(Ht(y)||y[ot]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Ht(y):null,y!==null&&(x=fn(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=pu,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=gu,w="onPointerLeave",m="onPointerEnter",c="pointer"),x=g==null?h:bn(g),p=y==null?h:bn(y),h=new v(w,c+"leave",g,n,f),h.target=x,h.relatedTarget=p,w=null,Ht(f)===u&&(v=new v(m,c+"enter",y,n,f),v.target=p,v.relatedTarget=x,w=v),x=w,g&&y)t:{for(v=g,m=y,c=0,p=v;p;p=pn(p))c++;for(p=0,w=m;w;w=pn(w))p++;for(;0<c-p;)v=pn(v),c--;for(;0<p-c;)m=pn(m),p--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=pn(v),m=pn(m)}v=null}else v=null;g!==null&&Eu(d,h,g,v,!1),y!==null&&x!==null&&Eu(d,x,y,v,!0)}}e:{if(h=u?bn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var b=Rh;else if(wu(h))if(Wf)b=jh;else{b=Lh;var C=Th}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Ih);if(b&&(b=b(e,u))){zf(d,b,n,f);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Do(h,"number",h.value)}switch(C=u?bn(u):window,e){case"focusin":(wu(C)||C.contentEditable==="true")&&(yn=C,Jo=u,pr=null);break;case"focusout":pr=Jo=yn=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,xu(d,n,f);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":xu(d,n,f)}var A;if(as)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else vn?Df(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Mf&&n.locale!=="ko"&&(vn||I!=="onCompositionStart"?I==="onCompositionEnd"&&vn&&(A=Ff()):(_t=f,ts="value"in _t?_t.value:_t.textContent,vn=!0)),C=Ka(u,I),0<C.length&&(I=new hu(I,e,null,n,f),d.push({event:I,listeners:C}),A?I.data=A:(A=Of(n),A!==null&&(I.data=A)))),(A=Ch?Ah(e,n):Eh(e,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(f=new hu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}Qf(d,t)})}function Rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Sr(e,n),i!=null&&r.unshift(Rr(e,i,a)),i=Sr(e,t),i!=null&&r.push(Rr(e,i,a))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Sr(n,i),s!=null&&o.unshift(Rr(n,s,l))):a||(s=Sr(n,i),s!=null&&o.push(Rr(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gh=/\r\n?/g,Yh=/\u0000|\uFFFD/g;function Pu(e){return(typeof e=="string"?e:""+e).replace(Gh,`
`).replace(Yh,"")}function ha(e,t,n){if(t=Pu(t),Pu(e)!==t&&n)throw Error(k(425))}function qa(){}var $o=null,Ko=null;function qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,Vh=typeof clearTimeout=="function"?clearTimeout:void 0,Nu=typeof Promise=="function"?Promise:void 0,Bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Nu<"u"?function(e){return Nu.resolve(null).then(e).catch(Uh)}:el;function Uh(e){setTimeout(function(){throw e})}function mo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ar(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Zn,Tr="__reactProps$"+Zn,ot="__reactContainer$"+Zn,tl="__reactEvents$"+Zn,Xh="__reactListeners$"+Zn,Zh="__reactHandles$"+Zn;function Ht(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ru(e);e!==null;){if(n=e[Je])return n;e=Ru(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[Je]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ni(e){return e[Tr]||null}var nl=[],kn=-1;function Gt(e){return{current:e}}function V(e){0>kn||(e.current=nl[kn],nl[kn]=null,kn--)}function W(e,t){kn++,nl[kn]=e.current,e.current=t}var Mt={},pe=Gt(Mt),ke=Gt(!1),tn=Mt;function On(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function _e(e){return e=e.childContextTypes,e!=null}function ei(){V(ke),V(pe)}function Tu(e,t,n){if(pe.current!==Mt)throw Error(k(168));W(pe,t),W(ke,n)}function Kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(k(108,Tp(e)||"Unknown",a));return H({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,tn=pe.current,W(pe,e),W(ke,ke.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Kf(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,V(ke),V(pe),W(pe,e)):V(ke),W(ke,n)}var tt=null,Ri=!1,po=!1;function qf(e){tt===null?tt=[e]:tt.push(e)}function Hh(e){Ri=!0,qf(e)}function Yt(){if(!po&&tt!==null){po=!0;var e=0,t=z;try{var n=tt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Ri=!1}catch(a){throw tt!==null&&(tt=tt.slice(e+1)),xf($l,Yt),a}finally{z=t,po=!1}}return null}var _n=[],Sn=0,ni=null,ri=0,Le=[],Ie=0,nn=null,nt=1,rt="";function Xt(e,t){_n[Sn++]=ri,_n[Sn++]=ni,ni=e,ri=t}function ed(e,t,n){Le[Ie++]=nt,Le[Ie++]=rt,Le[Ie++]=nn,nn=e;var r=nt;e=rt;var a=32-Ve(r)-1;r&=~(1<<a),n+=1;var i=32-Ve(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,nt=1<<32-Ve(t)+a|n<<a|r,rt=i+e}else nt=1<<i|n<<a|r,rt=e}function os(e){e.return!==null&&(Xt(e,1),ed(e,1,0))}function ls(e){for(;e===ni;)ni=_n[--Sn],_n[Sn]=null,ri=_n[--Sn],_n[Sn]=null;for(;e===nn;)nn=Le[--Ie],Le[Ie]=null,rt=Le[--Ie],Le[Ie]=null,nt=Le[--Ie],Le[Ie]=null}var Ee=null,Ae=null,U=!1,Ge=null;function td(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Iu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Ae=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Ae=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(U){var t=Ae;if(t){var n=t;if(!Iu(e,t)){if(rl(e))throw Error(k(418));t=Nt(n.nextSibling);var r=Ee;t&&Iu(e,t)?td(r,n):(e.flags=e.flags&-4097|2,U=!1,Ee=e)}}else{if(rl(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,Ee=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function ga(e){if(e!==Ee)return!1;if(!U)return ju(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qo(e.type,e.memoizedProps)),t&&(t=Ae)){if(rl(e))throw nd(),Error(k(418));for(;t;)td(e,t),t=Nt(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Ee?Nt(e.stateNode.nextSibling):null;return!0}function nd(){for(var e=Ae;e;)e=Nt(e.nextSibling)}function zn(){Ae=Ee=null,U=!1}function ss(e){Ge===null?Ge=[e]:Ge.push(e)}var Jh=dt.ReactCurrentBatchConfig;function ze(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ai=Gt(null),ii=null,xn=null,us=null;function cs(){us=xn=ii=null}function fs(e){var t=ai.current;V(ai),e._currentValue=t}function il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){ii=e,us=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(ii===null)throw Error(k(308));xn=e,ii.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Jt=null;function ds(e){Jt===null?Jt=[e]:Jt.push(e)}function rd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,ds(t)):(n.next=a.next,a.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,lt(e,n)}return a=r.interleaved,a===null?(t.next=t,ds(r)):(t.next=a.next,a.next=t),r.interleaved=t,lt(e,n)}function Ma(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kl(e,n)}}function Fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oi(e,t,n,r){var a=e.updateQueue;wt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=a.baseState;o=0,f=u=s=null,l=i;do{var h=l.lane,g=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(h=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=H({},d,h);break e;case 2:wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,s=d):f=f.next=g,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);an|=o,e.lanes=o,e.memoizedState=d}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(k(191,a));a.call(r)}}}var id=new nf.Component().refs;function ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ti={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),a=Lt(e),i=at(r,a);i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,a),t!==null&&(Be(t,e,a,r),Ma(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),a=Lt(e),i=at(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,a),t!==null&&(Be(t,e,a,r),Ma(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Lt(e),a=at(n,r);a.tag=2,t!=null&&(a.callback=t),t=Rt(e,a,r),t!==null&&(Be(t,e,r,n),Ma(t,e,r))}};function Du(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(a,i):!0}function od(e,t,n){var r=!1,a=Mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(a=_e(t)?tn:pe.current,r=t.contextTypes,i=(r=r!=null)?On(e,a):Mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ti,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ti.enqueueReplaceState(t,t.state,null)}function ll(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=id,ms(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Me(i):(i=_e(t)?tn:pe.current,a.context=On(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ol(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ti.enqueueReplaceState(a,a.state,null),oi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===id&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function ld(e){function t(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function a(m,c){return m=It(m,c),m.index=0,m.sibling=null,m}function i(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,p,w){return c===null||c.tag!==6?(c=ko(p,m.mode,w),c.return=m,c):(c=a(c,p),c.return=m,c)}function s(m,c,p,w){var b=p.type;return b===gn?f(m,c,p.props.children,w,p.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===yt&&zu(b)===c.type)?(w=a(c,p.props),w.ref=tr(m,c,p),w.return=m,w):(w=Ya(p.type,p.key,p.props,null,m.mode,w),w.ref=tr(m,c,p),w.return=m,w)}function u(m,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=_o(p,m.mode,w),c.return=m,c):(c=a(c,p.children||[]),c.return=m,c)}function f(m,c,p,w,b){return c===null||c.tag!==7?(c=en(p,m.mode,w,b),c.return=m,c):(c=a(c,p),c.return=m,c)}function d(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ko(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oa:return p=Ya(c.type,c.key,c.props,null,m.mode,p),p.ref=tr(m,null,c),p.return=m,p;case hn:return c=_o(c,m.mode,p),c.return=m,c;case yt:var w=c._init;return d(m,w(c._payload),p)}if(or(c)||Qn(c))return c=en(c,m.mode,p,null),c.return=m,c;va(m,c)}return null}function h(m,c,p,w){var b=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:l(m,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oa:return p.key===b?s(m,c,p,w):null;case hn:return p.key===b?u(m,c,p,w):null;case yt:return b=p._init,h(m,c,b(p._payload),w)}if(or(p)||Qn(p))return b!==null?null:f(m,c,p,w,null);va(m,p)}return null}function g(m,c,p,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,l(c,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oa:return m=m.get(w.key===null?p:w.key)||null,s(c,m,w,b);case hn:return m=m.get(w.key===null?p:w.key)||null,u(c,m,w,b);case yt:var C=w._init;return g(m,c,p,C(w._payload),b)}if(or(w)||Qn(w))return m=m.get(p)||null,f(c,m,w,b,null);va(c,w)}return null}function y(m,c,p,w){for(var b=null,C=null,A=c,I=c=0,E=null;A!==null&&I<p.length;I++){A.index>I?(E=A,A=null):E=A.sibling;var P=h(m,A,p[I],w);if(P===null){A===null&&(A=E);break}e&&A&&P.alternate===null&&t(m,A),c=i(P,c,I),C===null?b=P:C.sibling=P,C=P,A=E}if(I===p.length)return n(m,A),U&&Xt(m,I),b;if(A===null){for(;I<p.length;I++)A=d(m,p[I],w),A!==null&&(c=i(A,c,I),C===null?b=A:C.sibling=A,C=A);return U&&Xt(m,I),b}for(A=r(m,A);I<p.length;I++)E=g(A,m,I,p[I],w),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?I:E.key),c=i(E,c,I),C===null?b=E:C.sibling=E,C=E);return e&&A.forEach(function(J){return t(m,J)}),U&&Xt(m,I),b}function v(m,c,p,w){var b=Qn(p);if(typeof b!="function")throw Error(k(150));if(p=b.call(p),p==null)throw Error(k(151));for(var C=b=null,A=c,I=c=0,E=null,P=p.next();A!==null&&!P.done;I++,P=p.next()){A.index>I?(E=A,A=null):E=A.sibling;var J=h(m,A,P.value,w);if(J===null){A===null&&(A=E);break}e&&A&&J.alternate===null&&t(m,A),c=i(J,c,I),C===null?b=J:C.sibling=J,C=J,A=E}if(P.done)return n(m,A),U&&Xt(m,I),b;if(A===null){for(;!P.done;I++,P=p.next())P=d(m,P.value,w),P!==null&&(c=i(P,c,I),C===null?b=P:C.sibling=P,C=P);return U&&Xt(m,I),b}for(A=r(m,A);!P.done;I++,P=p.next())P=g(A,m,I,P.value,w),P!==null&&(e&&P.alternate!==null&&A.delete(P.key===null?I:P.key),c=i(P,c,I),C===null?b=P:C.sibling=P,C=P);return e&&A.forEach(function(pt){return t(m,pt)}),U&&Xt(m,I),b}function x(m,c,p,w){if(typeof p=="object"&&p!==null&&p.type===gn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case oa:e:{for(var b=p.key,C=c;C!==null;){if(C.key===b){if(b=p.type,b===gn){if(C.tag===7){n(m,C.sibling),c=a(C,p.props.children),c.return=m,m=c;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===yt&&zu(b)===C.type){n(m,C.sibling),c=a(C,p.props),c.ref=tr(m,C,p),c.return=m,m=c;break e}n(m,C);break}else t(m,C);C=C.sibling}p.type===gn?(c=en(p.props.children,m.mode,w,p.key),c.return=m,m=c):(w=Ya(p.type,p.key,p.props,null,m.mode,w),w.ref=tr(m,c,p),w.return=m,m=w)}return o(m);case hn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(m,c.sibling),c=a(c,p.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=_o(p,m.mode,w),c.return=m,m=c}return o(m);case yt:return C=p._init,x(m,c,C(p._payload),w)}if(or(p))return y(m,c,p,w);if(Qn(p))return v(m,c,p,w);va(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(m,c.sibling),c=a(c,p),c.return=m,m=c):(n(m,c),c=ko(p,m.mode,w),c.return=m,m=c),o(m)):n(m,c)}return x}var Wn=ld(!0),sd=ld(!1),Hr={},Ke=Gt(Hr),Lr=Gt(Hr),Ir=Gt(Hr);function Qt(e){if(e===Hr)throw Error(k(174));return e}function ps(e,t){switch(W(Ir,t),W(Lr,e),W(Ke,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zo(t,e)}V(Ke),W(Ke,t)}function Gn(){V(Ke),V(Lr),V(Ir)}function ud(e){Qt(Ir.current);var t=Qt(Ke.current),n=zo(t,e.type);t!==n&&(W(Lr,e),W(Ke,n))}function hs(e){Lr.current===e&&(V(Ke),V(Lr))}var X=Gt(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function gs(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var Da=dt.ReactCurrentDispatcher,go=dt.ReactCurrentBatchConfig,rn=0,Z=null,ne=null,oe=null,si=!1,hr=!1,jr=0,Qh=0;function fe(){throw Error(k(321))}function vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function ys(e,t,n,r,a,i){if(rn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Da.current=e===null||e.memoizedState===null?e1:t1,e=n(r,a),hr){i=0;do{if(hr=!1,jr=0,25<=i)throw Error(k(301));i+=1,oe=ne=null,t.updateQueue=null,Da.current=n1,e=n(r,a)}while(hr)}if(Da.current=ui,t=ne!==null&&ne.next!==null,rn=0,oe=ne=Z=null,si=!1,t)throw Error(k(300));return e}function ws(){var e=jr!==0;return jr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Z.memoizedState=oe=e:oe=oe.next=e,oe}function De(){if(ne===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?Z.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Z.memoizedState=oe=e:oe=oe.next=e}return oe}function Fr(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((rn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,Z.lanes|=f,an|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,Xe(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Z.lanes|=i,an|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yo(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Xe(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function cd(){}function fd(e,t){var n=Z,r=De(),a=t(),i=!Xe(r.memoizedState,a);if(i&&(r.memoizedState=a,be=!0),r=r.queue,bs(pd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Mr(9,md.bind(null,n,r,a,t),void 0,null),le===null)throw Error(k(349));rn&30||dd(n,t,a)}return a}function dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function md(e,t,n,r){t.value=n,t.getSnapshot=r,hd(t)&&gd(e)}function pd(e,t,n){return n(function(){hd(t)&&gd(e)})}function hd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function gd(e){var t=lt(e,1);t!==null&&Be(t,e,1,-1)}function Wu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=qh.bind(null,Z,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vd(){return De().memoizedState}function Oa(e,t,n,r){var a=He();Z.flags|=e,a.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function Li(e,t,n,r){var a=De();r=r===void 0?null:r;var i=void 0;if(ne!==null){var o=ne.memoizedState;if(i=o.destroy,r!==null&&vs(r,o.deps)){a.memoizedState=Mr(t,n,i,r);return}}Z.flags|=e,a.memoizedState=Mr(1|t,n,i,r)}function Gu(e,t){return Oa(8390656,8,e,t)}function bs(e,t){return Li(2048,8,e,t)}function yd(e,t){return Li(4,2,e,t)}function wd(e,t){return Li(4,4,e,t)}function bd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kd(e,t,n){return n=n!=null?n.concat([e]):null,Li(4,4,bd.bind(null,t,e),n)}function ks(){}function _d(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xd(e,t,n){return rn&21?(Xe(n,t)||(n=Ef(),Z.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function $h(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=go.transition;go.transition={};try{e(!1),t()}finally{z=n,go.transition=r}}function Cd(){return De().memoizedState}function Kh(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ad(e))Ed(t,n);else if(n=rd(e,t,n,r),n!==null){var a=ge();Be(n,e,r,a),Pd(n,t,r)}}function qh(e,t,n){var r=Lt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ad(e))Ed(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Xe(l,o)){var s=t.interleaved;s===null?(a.next=a,ds(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=rd(e,t,a,r),n!==null&&(a=ge(),Be(n,e,r,a),Pd(n,t,r))}}function Ad(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Ed(e,t){hr=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kl(e,n)}}var ui={readContext:Me,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},e1={readContext:Me,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oa(4194308,4,bd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Wu,useDebugValue:ks,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Wu(!1),t=e[0];return e=$h.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,a=He();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),le===null)throw Error(k(349));rn&30||dd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Gu(pd.bind(null,r,i,e),[e]),r.flags|=2048,Mr(9,md.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=He(),t=le.identifierPrefix;if(U){var n=rt,r=nt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t1={readContext:Me,useCallback:_d,useContext:Me,useEffect:bs,useImperativeHandle:kd,useInsertionEffect:yd,useLayoutEffect:wd,useMemo:Sd,useReducer:vo,useRef:vd,useState:function(){return vo(Fr)},useDebugValue:ks,useDeferredValue:function(e){var t=De();return xd(t,ne.memoizedState,e)},useTransition:function(){var e=vo(Fr)[0],t=De().memoizedState;return[e,t]},useMutableSource:cd,useSyncExternalStore:fd,useId:Cd,unstable_isNewReconciler:!1},n1={readContext:Me,useCallback:_d,useContext:Me,useEffect:bs,useImperativeHandle:kd,useInsertionEffect:yd,useLayoutEffect:wd,useMemo:Sd,useReducer:yo,useRef:vd,useState:function(){return yo(Fr)},useDebugValue:ks,useDeferredValue:function(e){var t=De();return ne===null?t.memoizedState=e:xd(t,ne.memoizedState,e)},useTransition:function(){var e=yo(Fr)[0],t=De().memoizedState;return[e,t]},useMutableSource:cd,useSyncExternalStore:fd,useId:Cd,unstable_isNewReconciler:!1};function Yn(e,t){try{var n="",r=t;do n+=Rp(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function Nd(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fi||(fi=!0,yl=r),sl(e,t)},n}function Rd(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){sl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r1;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=v1.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var a1=dt.ReactCurrentOwner,be=!1;function he(e,t,n,r){t.child=e===null?sd(t,null,n,r):Wn(t,e.child,n,r)}function Uu(e,t,n,r,a){n=n.render;var i=t.ref;return jn(t,a),r=ys(e,t,n,r,i,a),n=ws(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,st(e,t,a)):(U&&n&&os(t),t.flags|=1,he(e,t,r,a),t.child)}function Xu(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Ns(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Td(e,t,i,r,a)):(e=Ya(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(o,r)&&e.ref===t.ref)return st(e,t,a)}return t.flags|=1,e=It(i,r),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Pr(i,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,st(e,t,a)}return ul(e,t,n,r,a)}function Ld(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(An,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(An,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(An,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(An,xe),xe|=r;return he(e,t,a,n),t.child}function Id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,n,r,a){var i=_e(n)?tn:pe.current;return i=On(t,i),jn(t,a),n=ys(e,t,n,r,i,a),r=ws(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,st(e,t,a)):(U&&r&&os(t),t.flags|=1,he(e,t,n,a),t.child)}function Zu(e,t,n,r,a){if(_e(n)){var i=!0;ti(t)}else i=!1;if(jn(t,a),t.stateNode===null)za(e,t),od(t,n,r),ll(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=_e(n)?tn:pe.current,u=On(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Ou(t,o,r,u),wt=!1;var h=t.memoizedState;o.state=h,oi(t,r,o,a),s=t.memoizedState,l!==r||h!==s||ke.current||wt?(typeof f=="function"&&(ol(t,n,f,r),s=t.memoizedState),(l=wt||Du(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ad(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ze(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=_e(n)?tn:pe.current,s=On(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Ou(t,o,r,s),wt=!1,h=t.memoizedState,o.state=h,oi(t,r,o,a);var y=t.memoizedState;l!==d||h!==y||ke.current||wt?(typeof g=="function"&&(ol(t,n,g,r),y=t.memoizedState),(u=wt||Du(t,n,u,r,h,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return cl(e,t,n,r,i,a)}function cl(e,t,n,r,a,i){Id(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Lu(t,n,!1),st(e,t,i);r=t.stateNode,a1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Wn(t,e.child,null,i),t.child=Wn(t,null,l,i)):he(e,t,l,i),t.memoizedState=r.state,a&&Lu(t,n,!0),t.child}function jd(e){var t=e.stateNode;t.pendingContext?Tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tu(e,t.context,!1),ps(e,t.containerInfo)}function Hu(e,t,n,r,a){return zn(),ss(a),t.flags|=256,he(e,t,n,r),t.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,t,n){var r=t.pendingProps,a=X.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(X,a&1),e===null)return al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Fi(o,r,0,null),e=en(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=dl(n),t.memoizedState=fl,e):_s(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return i1(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=It(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=It(l,i):(i=en(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?dl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=fl,r}return i=e.child,e=i.sibling,r=It(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _s(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ya(e,t,n,r){return r!==null&&ss(r),Wn(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i1(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(k(422))),ya(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Fi({mode:"visible",children:r.children},a,0,null),i=en(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Wn(t,e.child,null,o),t.child.memoizedState=dl(o),t.memoizedState=fl,i);if(!(t.mode&1))return ya(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(k(419)),r=wo(i,r,void 0),ya(e,t,o,r)}if(l=(o&e.childLanes)!==0,be||l){if(r=le,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,lt(e,a),Be(r,e,a,-1))}return Ps(),r=wo(Error(k(421))),ya(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=y1.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ae=Nt(a.nextSibling),Ee=t,U=!0,Ge=null,e!==null&&(Le[Ie++]=nt,Le[Ie++]=rt,Le[Ie++]=nn,nt=e.id,rt=e.overflow,nn=t),t=_s(t,r.children),t.flags|=4096,t)}function Ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),il(e.return,t,n)}function bo(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Md(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(he(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,n,t);else if(e.tag===19)Ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),bo(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&li(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}bo(t,!0,n,null,i);break;case"together":bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o1(e,t,n){switch(t.tag){case 3:jd(t),zn();break;case 5:ud(t);break;case 1:_e(t.type)&&ti(t);break;case 4:ps(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;W(ai,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Fd(e,t,n):(W(X,X.current&1),e=st(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Md(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Ld(e,t,n)}return st(e,t,n)}var Dd,ml,Od,zd;Dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};Od=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Qt(Ke.current);var i=null;switch(n){case"input":a=Fo(e,a),r=Fo(e,r),i=[];break;case"select":a=H({},a,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":a=Oo(e,a),r=Oo(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qa)}Wo(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&G("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};zd=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function l1(e,t,n){var r=t.pendingProps;switch(ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return _e(t.type)&&ei(),de(t),null;case 3:return r=t.stateNode,Gn(),V(ke),V(pe),gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ga(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(kl(Ge),Ge=null))),ml(e,t),de(t),null;case 5:hs(t);var a=Qt(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Od(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return de(t),null}if(e=Qt(Ke.current),ga(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Je]=t,r[Tr]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(a=0;a<sr.length;a++)G(sr[a],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":au(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":ou(r,i),G("invalid",r)}Wo(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ha(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ha(r.textContent,l,e),a=["children",""+l]):kr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":la(r),iu(r,i,!0);break;case"textarea":la(r),lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qa)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=df(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Je]=t,e[Tr]=r,Dd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Go(n,r),n){case"dialog":G("cancel",e),G("close",e),a=r;break;case"iframe":case"object":case"embed":G("load",e),a=r;break;case"video":case"audio":for(a=0;a<sr.length;a++)G(sr[a],e);a=r;break;case"source":G("error",e),a=r;break;case"img":case"image":case"link":G("error",e),G("load",e),a=r;break;case"details":G("toggle",e),a=r;break;case"input":au(e,r),a=Fo(e,r),G("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=H({},r,{value:void 0}),G("invalid",e);break;case"textarea":ou(e,r),a=Oo(e,r),G("invalid",e);break;default:a=r}Wo(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?hf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&mf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&_r(e,s):typeof s=="number"&&_r(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(kr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&G("scroll",e):s!=null&&Xl(e,i,s,o))}switch(n){case"input":la(e),iu(e,r,!1);break;case"textarea":la(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Rn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)zd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Qt(Ir.current),Qt(Ke.current),ga(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(i=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return de(t),null;case 13:if(V(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Ae!==null&&t.mode&1&&!(t.flags&128))nd(),zn(),t.flags|=98560,i=!1;else if(i=ga(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Je]=t}else zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ge!==null&&(kl(Ge),Ge=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?re===0&&(re=3):Ps())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Gn(),ml(e,t),e===null&&Nr(t.stateNode.containerInfo),de(t),null;case 10:return fs(t.type._context),de(t),null;case 17:return _e(t.type)&&ei(),de(t),null;case 19:if(V(X),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)nr(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=li(e),o!==null){for(t.flags|=128,nr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Vn&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=li(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return de(t),null}else 2*q()-i.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function s1(e,t){switch(ls(t),t.tag){case 1:return _e(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),V(ke),V(pe),gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hs(t),null;case 13:if(V(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(X),null;case 4:return Gn(),null;case 10:return fs(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var wa=!1,me=!1,u1=typeof WeakSet=="function"?WeakSet:Set,R=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function pl(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qu=!1;function c1(e,t){if($o=Qa,e=Vf(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var g;d!==n||a!==0&&d.nodeType!==3||(l=o+a),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++f===r&&(s=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ko={focusedElem:e,selectionRange:n},Qa=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,x=y.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:ze(t.type,v),x);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){Q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Qu,Qu=!1,y}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&pl(t,n,i)}a=a.next}while(a!==r)}}function Ii(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[Tr],delete t[tl],delete t[Xh],delete t[Zh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gd(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qa));else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}var se=null,We=!1;function ht(e,t,n){for(n=n.child;n!==null;)Yd(e,t,n),n=n.sibling}function Yd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:me||Cn(n,t);case 6:var r=se,a=We;se=null,ht(e,t,n),se=r,We=a,se!==null&&(We?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(We?(e=se,n=n.stateNode,e.nodeType===8?mo(e.parentNode,n):e.nodeType===1&&mo(e,n),Ar(e)):mo(se,n.stateNode));break;case 4:r=se,a=We,se=n.stateNode.containerInfo,We=!0,ht(e,t,n),se=r,We=a;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&pl(n,t,o),a=a.next}while(a!==r)}ht(e,t,n);break;case 1:if(!me&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(e,t,n);break;default:ht(e,t,n)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u1),t.forEach(function(r){var a=w1.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,We=!1;break e;case 3:se=l.stateNode.containerInfo,We=!0;break e;case 4:se=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(se===null)throw Error(k(160));Yd(i,o,a),se=null,We=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){Q(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vd(t,e),t=t.sibling}function Vd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ze(e),r&4){try{gr(3,e,e.return),Ii(3,e)}catch(v){Q(e,e.return,v)}try{gr(5,e,e.return)}catch(v){Q(e,e.return,v)}}break;case 1:Oe(t,e),Ze(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Oe(t,e),Ze(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var a=e.stateNode;try{_r(a,"")}catch(v){Q(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&cf(a,i),Go(l,o);var u=Go(l,i);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?hf(a,d):f==="dangerouslySetInnerHTML"?mf(a,d):f==="children"?_r(a,d):Xl(a,f,d,u)}switch(l){case"input":Mo(a,i);break;case"textarea":ff(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Rn(a,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Rn(a,!!i.multiple,i.defaultValue,!0):Rn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Tr]=i}catch(v){Q(e,e.return,v)}}break;case 6:if(Oe(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(v){Q(e,e.return,v)}}break;case 3:if(Oe(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(v){Q(e,e.return,v)}break;case 4:Oe(t,e),Ze(e);break;case 13:Oe(t,e),Ze(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Cs=q())),r&4&&Ku(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||f,Oe(t,e),me=u):Oe(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(d=R=f;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:gr(4,h,h.return);break;case 1:Cn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Q(r,n,v)}}break;case 5:Cn(h,h.return);break;case 22:if(h.memoizedState!==null){ec(d);continue}}g!==null?(g.return=h,R=g):ec(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=pf("display",o))}catch(v){Q(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Q(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Oe(t,e),Ze(e),r&4&&Ku(e);break;case 21:break;default:Oe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(_r(a,""),r.flags&=-33);var i=$u(e);vl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$u(e);gl(e,l,o);break;default:throw Error(k(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f1(e,t,n){R=e,Bd(e)}function Bd(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var a=R,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||wa;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||me;l=wa;var u=me;if(wa=o,(me=s)&&!u)for(R=a;R!==null;)o=R,s=o.child,o.tag===22&&o.memoizedState!==null?tc(a):s!==null?(s.return=o,R=s):tc(a);for(;i!==null;)R=i,Bd(i),i=i.sibling;R=a,wa=l,me=u}qu(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,R=i):qu(e)}}function qu(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ii(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ar(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&hl(t)}catch(h){Q(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ec(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function tc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ii(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){Q(t,a,s)}}var i=t.return;try{hl(t)}catch(s){Q(t,i,s)}break;case 5:var o=t.return;try{hl(t)}catch(s){Q(t,o,s)}}}catch(s){Q(t,t.return,s)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var d1=Math.ceil,ci=dt.ReactCurrentDispatcher,Ss=dt.ReactCurrentOwner,Fe=dt.ReactCurrentBatchConfig,O=0,le=null,ee=null,ue=0,xe=0,An=Gt(0),re=0,Dr=null,an=0,ji=0,xs=0,vr=null,we=null,Cs=0,Vn=1/0,et=null,fi=!1,yl=null,Tt=null,ba=!1,St=null,di=0,yr=0,wl=null,Wa=-1,Ga=0;function ge(){return O&6?q():Wa!==-1?Wa:Wa=q()}function Lt(e){return e.mode&1?O&2&&ue!==0?ue&-ue:Jh.transition!==null?(Ga===0&&(Ga=Ef()),Ga):(e=z,e!==0||(e=window.event,e=e===void 0?16:jf(e.type)),e):1}function Be(e,t,n,r){if(50<yr)throw yr=0,wl=null,Error(k(185));Ur(e,n,r),(!(O&2)||e!==le)&&(e===le&&(!(O&2)&&(ji|=n),re===4&&kt(e,ue)),Se(e,r),n===1&&O===0&&!(t.mode&1)&&(Vn=q()+500,Ri&&Yt()))}function Se(e,t){var n=e.callbackNode;Jp(e,t);var r=Ja(e,e===le?ue:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?Hh(nc.bind(null,e)):qf(nc.bind(null,e)),Bh(function(){!(O&6)&&Yt()}),n=null;else{switch(Pf(r)){case 1:n=$l;break;case 4:n=Cf;break;case 16:n=Ha;break;case 536870912:n=Af;break;default:n=Ha}n=Kd(n,Ud.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ud(e,t){if(Wa=-1,Ga=0,O&6)throw Error(k(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Ja(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mi(e,r);else{t=r;var a=O;O|=2;var i=Zd();(le!==e||ue!==t)&&(et=null,Vn=q()+500,qt(e,t));do try{h1();break}catch(l){Xd(e,l)}while(1);cs(),ci.current=i,O=a,ee!==null?t=0:(le=null,ue=0,t=re)}if(t!==0){if(t===2&&(a=Xo(e),a!==0&&(r=a,t=bl(e,a))),t===1)throw n=Dr,qt(e,0),kt(e,r),Se(e,q()),n;if(t===6)kt(e,r);else{if(a=e.current.alternate,!(r&30)&&!m1(a)&&(t=mi(e,r),t===2&&(i=Xo(e),i!==0&&(r=i,t=bl(e,i))),t===1))throw n=Dr,qt(e,0),kt(e,r),Se(e,q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Zt(e,we,et);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Cs+500-q(),10<t)){if(Ja(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=el(Zt.bind(null,e,we,et),t);break}Zt(e,we,et);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Ve(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d1(r/1960))-r,10<r){e.timeoutHandle=el(Zt.bind(null,e,we,et),r);break}Zt(e,we,et);break;case 5:Zt(e,we,et);break;default:throw Error(k(329))}}}return Se(e,q()),e.callbackNode===n?Ud.bind(null,e):null}function bl(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=mi(e,t),e!==2&&(t=we,we=n,t!==null&&kl(t)),e}function kl(e){we===null?we=e:we.push.apply(we,e)}function m1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Xe(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~xs,t&=~ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function nc(e){if(O&6)throw Error(k(327));Fn();var t=Ja(e,0);if(!(t&1))return Se(e,q()),null;var n=mi(e,t);if(e.tag!==0&&n===2){var r=Xo(e);r!==0&&(t=r,n=bl(e,r))}if(n===1)throw n=Dr,qt(e,0),kt(e,t),Se(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,we,et),Se(e,q()),null}function As(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Vn=q()+500,Ri&&Yt())}}function on(e){St!==null&&St.tag===0&&!(O&6)&&Fn();var t=O;O|=1;var n=Fe.transition,r=z;try{if(Fe.transition=null,z=1,e)return e()}finally{z=r,Fe.transition=n,O=t,!(O&6)&&Yt()}}function Es(){xe=An.current,V(An)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vh(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:Gn(),V(ke),V(pe),gs();break;case 5:hs(r);break;case 4:Gn();break;case 13:V(X);break;case 19:V(X);break;case 10:fs(r.type._context);break;case 22:case 23:Es()}n=n.return}if(le=e,ee=e=It(e.current,null),ue=xe=t,re=0,Dr=null,xs=ji=an=0,we=vr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}Jt=null}return e}function Xd(e,t){do{var n=ee;try{if(cs(),Da.current=ui,si){for(var r=Z.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}si=!1}if(rn=0,oe=ne=Z=null,hr=!1,jr=0,Ss.current=null,n===null||n.return===null){re=1,Dr=t,ee=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=ue,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Vu(o);if(g!==null){g.flags&=-257,Bu(g,o,l,i,t),g.mode&1&&Yu(i,u,t),t=g,s=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(s),t.updateQueue=v}else y.add(s);break e}else{if(!(t&1)){Yu(i,u,t),Ps();break e}s=Error(k(426))}}else if(U&&l.mode&1){var x=Vu(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Bu(x,o,l,i,t),ss(Yn(s,l));break e}}i=s=Yn(s,l),re!==4&&(re=2),vr===null?vr=[i]:vr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Nd(i,s,t);Fu(i,m);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Tt===null||!Tt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Rd(i,l,t);Fu(i,w);break e}}i=i.return}while(i!==null)}Jd(n)}catch(b){t=b,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Zd(){var e=ci.current;return ci.current=ui,e===null?ui:e}function Ps(){(re===0||re===3||re===2)&&(re=4),le===null||!(an&268435455)&&!(ji&268435455)||kt(le,ue)}function mi(e,t){var n=O;O|=2;var r=Zd();(le!==e||ue!==t)&&(et=null,qt(e,t));do try{p1();break}catch(a){Xd(e,a)}while(1);if(cs(),O=n,ci.current=r,ee!==null)throw Error(k(261));return le=null,ue=0,re}function p1(){for(;ee!==null;)Hd(ee)}function h1(){for(;ee!==null&&!Wp();)Hd(ee)}function Hd(e){var t=$d(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Jd(e):ee=t,Ss.current=null}function Jd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s1(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=l1(n,t,xe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Zt(e,t,n){var r=z,a=Fe.transition;try{Fe.transition=null,z=1,g1(e,t,n,r)}finally{Fe.transition=a,z=r}return null}function g1(e,t,n,r){do Fn();while(St!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qp(e,i),e===le&&(ee=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,Kd(Ha,function(){return Fn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var o=z;z=1;var l=O;O|=4,Ss.current=null,c1(e,n),Vd(n,e),Mh(Ko),Qa=!!$o,Ko=$o=null,e.current=n,f1(n),Gp(),O=l,z=o,Fe.transition=i}else e.current=n;if(ba&&(ba=!1,St=e,di=a),i=e.pendingLanes,i===0&&(Tt=null),Bp(n.stateNode),Se(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(fi)throw fi=!1,e=yl,yl=null,e;return di&1&&e.tag!==0&&Fn(),i=e.pendingLanes,i&1?e===wl?yr++:(yr=0,wl=e):yr=0,Yt(),null}function Fn(){if(St!==null){var e=Pf(di),t=Fe.transition,n=z;try{if(Fe.transition=null,z=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,di=0,O&6)throw Error(k(331));var a=O;for(O|=4,R=e.current;R!==null;){var i=R,o=i.child;if(R.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:gr(8,f,i)}var d=f.child;if(d!==null)d.return=f,R=d;else for(;R!==null;){f=R;var h=f.sibling,g=f.return;if(Wd(f),f===u){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}R=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,R=o;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var c=e.current;for(R=c;R!==null;){o=R;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,R=p;else e:for(o=c;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ii(9,l)}}catch(b){Q(l,l.return,b)}if(l===o){R=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,R=w;break e}R=l.return}}if(O=a,Yt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Ci,e)}catch{}r=!0}return r}finally{z=n,Fe.transition=t}}return!1}function rc(e,t,n){t=Yn(n,t),t=Nd(e,t,1),e=Rt(e,t,1),t=ge(),e!==null&&(Ur(e,1,t),Se(e,t))}function Q(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){e=Yn(n,e),e=Rd(t,e,1),t=Rt(t,e,1),e=ge(),t!==null&&(Ur(t,1,e),Se(t,e));break}}t=t.return}}function v1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>q()-Cs?qt(e,0):xs|=n),Se(e,t)}function Qd(e,t){t===0&&(e.mode&1?(t=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):t=1);var n=ge();e=lt(e,t),e!==null&&(Ur(e,t,n),Se(e,n))}function y1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qd(e,n)}function w1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Qd(e,n)}var $d;$d=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,o1(e,t,n);be=!!(e.flags&131072)}else be=!1,U&&t.flags&1048576&&ed(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;za(e,t),e=t.pendingProps;var a=On(t,pe.current);jn(t,n),a=ys(null,t,r,e,a,n);var i=ws();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,ti(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ms(t),a.updater=Ti,t.stateNode=a,a._reactInternals=t,ll(t,r,e,n),t=cl(null,t,r,!0,i,n)):(t.tag=0,U&&i&&os(t),he(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(za(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=k1(r),e=ze(r,e),a){case 0:t=ul(null,t,r,e,n);break e;case 1:t=Zu(null,t,r,e,n);break e;case 11:t=Uu(null,t,r,e,n);break e;case 14:t=Xu(null,t,r,ze(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ze(r,a),ul(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ze(r,a),Zu(e,t,r,a,n);case 3:e:{if(jd(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,a=i.element,ad(e,t),oi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Yn(Error(k(423)),t),t=Hu(e,t,r,n,a);break e}else if(r!==a){a=Yn(Error(k(424)),t),t=Hu(e,t,r,n,a);break e}else for(Ae=Nt(t.stateNode.containerInfo.firstChild),Ee=t,U=!0,Ge=null,n=sd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zn(),r===a){t=st(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return ud(t),e===null&&al(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,qo(r,a)?o=null:i!==null&&qo(r,i)&&(t.flags|=32),Id(e,t),he(e,t,o,n),t.child;case 6:return e===null&&al(t),null;case 13:return Fd(e,t,n);case 4:return ps(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ze(r,a),Uu(e,t,r,a,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,W(ai,r._currentValue),r._currentValue=o,i!==null)if(Xe(i.value,o)){if(i.children===a.children&&!ke.current){t=st(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=at(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),il(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),il(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}he(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,jn(t,n),a=Me(a),r=r(a),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,a=ze(r,t.pendingProps),a=ze(r.type,a),Xu(e,t,r,a,n);case 15:return Td(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ze(r,a),za(e,t),t.tag=1,_e(r)?(e=!0,ti(t)):e=!1,jn(t,n),od(t,r,a),ll(t,r,a,n),cl(null,t,r,!0,e,n);case 19:return Md(e,t,n);case 22:return Ld(e,t,n)}throw Error(k(156,t.tag))};function Kd(e,t){return xf(e,t)}function b1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new b1(e,t,n,r)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function k1(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Jl)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ya(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Ns(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case gn:return en(n.children,a,i,t);case Zl:o=8,a|=8;break;case To:return e=je(12,n,t,a|2),e.elementType=To,e.lanes=i,e;case Lo:return e=je(13,n,t,a),e.elementType=Lo,e.lanes=i,e;case Io:return e=je(19,n,t,a),e.elementType=Io,e.lanes=i,e;case lf:return Fi(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case af:o=10;break e;case of:o=9;break e;case Hl:o=11;break e;case Jl:o=14;break e;case yt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=je(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function en(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=je(22,e,r,t),e.elementType=lf,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function _o(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _1(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=to(0),this.expirationTimes=to(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Rs(e,t,n,r,a,i,o,l,s){return e=new _1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(i),e}function S1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qd(e){if(!e)return Mt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(_e(n))return Kf(e,n,t)}return t}function em(e,t,n,r,a,i,o,l,s){return e=Rs(n,r,!0,e,a,i,o,l,s),e.context=qd(null),n=e.current,r=ge(),a=Lt(n),i=at(r,a),i.callback=t??null,Rt(n,i,a),e.current.lanes=a,Ur(e,a,r),Se(e,r),e}function Mi(e,t,n,r){var a=t.current,i=ge(),o=Lt(a);return n=qd(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(a,t,o),e!==null&&(Be(e,a,o,i),Ma(e,a,o)),o}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function x1(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ls(e){this._internalRoot=e}Di.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Mi(e,t,null,null)};Di.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Mi(null,e,null,null)}),t[ot]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&If(e)}};function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function C1(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=pi(o);i.call(u)}}var o=em(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=o,e[ot]=o.current,Nr(e.nodeType===8?e.parentNode:e),on(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=pi(s);l.call(u)}}var s=Rs(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=s,e[ot]=s.current,Nr(e.nodeType===8?e.parentNode:e),on(function(){Mi(t,s,n,r)}),s}function zi(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=pi(o);l.call(s)}}Mi(t,o,e,a)}else o=C1(n,t,e,a,r);return pi(o)}Nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Kl(t,n|1),Se(t,q()),!(O&6)&&(Vn=q()+500,Yt()))}break;case 13:on(function(){var r=lt(e,1);if(r!==null){var a=ge();Be(r,e,1,a)}}),Ts(e,1)}};ql=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=ge();Be(t,e,134217728,n)}Ts(e,134217728)}};Rf=function(e){if(e.tag===13){var t=Lt(e),n=lt(e,t);if(n!==null){var r=ge();Be(n,e,t,r)}Ts(e,t)}};Tf=function(){return z};Lf=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Vo=function(e,t,n){switch(t){case"input":if(Mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ni(r);if(!a)throw Error(k(90));uf(r),Mo(r,a)}}}break;case"textarea":ff(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};yf=As;wf=on;var A1={usingClientEntryPoint:!1,Events:[Zr,bn,Ni,gf,vf,As]},rr={findFiberByHostInstance:Ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E1={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_f(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||x1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Ci=ka.inject(E1),$e=ka}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Is(t))throw Error(k(200));return S1(e,t,null,n)};Ne.createRoot=function(e,t){if(!Is(e))throw Error(k(299));var n=!1,r="",a=tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Rs(e,1,!1,null,null,n,!1,r,a),e[ot]=t.current,Nr(e.nodeType===8?e.parentNode:e),new Ls(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=_f(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return on(e)};Ne.hydrate=function(e,t,n){if(!Oi(t))throw Error(k(200));return zi(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Is(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=tm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=em(t,null,e,1,n??null,a,!1,i,o),e[ot]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Di(t)};Ne.render=function(e,t,n){if(!Oi(t))throw Error(k(200));return zi(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(k(40));return e._reactRootContainer?(on(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Ne.unstable_batchedUpdates=As;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return zi(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm)}catch(e){console.error(e)}}nm(),qc.exports=Ne;var P1=qc.exports,oc=P1;No.createRoot=oc.createRoot,No.hydrateRoot=oc.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}var xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xt||(xt={}));const lc="popstate";function N1(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:l="",hash:s=""}=dn(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),_l("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:hi(i))}function r(a,i){Wi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return T1(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R1(){return Math.random().toString(36).substr(2,8)}function sc(e,t){return{usr:e.state,key:e.key,idx:t}}function _l(e,t,n,r){return n===void 0&&(n=null),Or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||R1()})}function hi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function T1(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=xt.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(Or({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=xt.Pop;let x=f(),m=x==null?null:x-u;u=x,s&&s({action:l,location:v.location,delta:m})}function h(x,m){l=xt.Push;let c=_l(v.location,x,m);n&&n(c,x),u=f()+1;let p=sc(c,u),w=v.createHref(c);try{o.pushState(p,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(w)}i&&s&&s({action:l,location:v.location,delta:1})}function g(x,m){l=xt.Replace;let c=_l(v.location,x,m);n&&n(c,x),u=f();let p=sc(c,u),w=v.createHref(c);o.replaceState(p,"",w),i&&s&&s({action:l,location:v.location,delta:0})}function y(x){let m=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof x=="string"?x:hi(x);return te(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let v={get action(){return l},get location(){return e(a,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(lc,d),s=x,()=>{a.removeEventListener(lc,d),s=null}},createHref(x){return t(a,x)},createURL:y,encodeLocation(x){let m=y(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(x){return o.go(x)}};return v}var uc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uc||(uc={}));function L1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dn(t):t,a=js(r.pathname||"/",n);if(a==null)return null;let i=rm(e);I1(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=Y1(i[l],U1(a));return o}function rm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=jt([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:W1(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of am(i.path))a(i,o,s)}),t}function am(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=am(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function I1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j1=/^:\w+$/,F1=3,M1=2,D1=1,O1=10,z1=-2,cc=e=>e==="*";function W1(e,t){let n=e.split("/"),r=n.length;return n.some(cc)&&(r+=z1),t&&(r+=M1),n.filter(a=>!cc(a)).reduce((a,i)=>a+(j1.test(i)?F1:i===""?D1:O1),r)}function G1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Y1(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=V1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:jt([a,f.pathname]),pathnameBase:J1(jt([a,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(a=jt([a,f.pathnameBase]))}return i}function V1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B1(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let h=l[d]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=X1(l[d]||"",f),u},{}),pathname:i,pathnameBase:o,pattern:e}}function B1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function U1(e){try{return decodeURI(e)}catch(t){return Wi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function X1(e,t){try{return decodeURIComponent(e)}catch(n){return Wi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function js(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Z1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?dn(e):e;return{pathname:n?n.startsWith("/")?n:H1(n,t):t,search:Q1(r),hash:$1(a)}}function H1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function So(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function im(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function om(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=dn(e):(a=Or({},e),te(!a.pathname||!a.pathname.includes("?"),So("?","pathname","search",a)),te(!a.pathname||!a.pathname.includes("#"),So("#","pathname","hash",a)),te(!a.search||!a.search.includes("#"),So("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Z1(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const jt=e=>e.join("/").replace(/\/\/+/g,"/"),J1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Q1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function K1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lm=["post","put","patch","delete"];new Set(lm);const q1=["get",...lm];new Set(q1);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}const Fs=S.createContext(null),sm=S.createContext(null),mn=S.createContext(null),Gi=S.createContext(null),Vt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),um=S.createContext(null);function e0(e,t){let{relative:n}=t===void 0?{}:t;Jr()||te(!1);let{basename:r,navigator:a}=S.useContext(mn),{hash:i,pathname:o,search:l}=Ms(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:jt([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Jr(){return S.useContext(Gi)!=null}function qe(){return Jr()||te(!1),S.useContext(Gi).location}function cm(e){S.useContext(mn).static||S.useLayoutEffect(e)}function Qr(){let{isDataRoute:e}=S.useContext(Vt);return e?p0():t0()}function t0(){Jr()||te(!1);let e=S.useContext(Fs),{basename:t,navigator:n}=S.useContext(mn),{matches:r}=S.useContext(Vt),{pathname:a}=qe(),i=JSON.stringify(im(r).map(s=>s.pathnameBase)),o=S.useRef(!1);return cm(()=>{o.current=!0}),S.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=om(s,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:jt([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,a,e])}function n0(){let{matches:e}=S.useContext(Vt),t=e[e.length-1];return t?t.params:{}}function Ms(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(Vt),{pathname:a}=qe(),i=JSON.stringify(im(r).map(o=>o.pathnameBase));return S.useMemo(()=>om(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function r0(e,t){return a0(e,t)}function a0(e,t,n){Jr()||te(!1);let{navigator:r}=S.useContext(mn),{matches:a}=S.useContext(Vt),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=qe(),u;if(t){var f;let v=typeof t=="string"?dn(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||te(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",g=L1(e,{pathname:h}),y=u0(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:jt([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:jt([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),a,n);return t&&y?S.createElement(Gi.Provider,{value:{location:gi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xt.Pop}},y):y}function i0(){let e=m0(),t=K1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:a},n):null,i)}const o0=S.createElement(i0,null);class l0 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(Vt.Provider,{value:this.props.routeContext},S.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s0(e){let{routeContext:t,match:n,children:r}=e,a=S.useContext(Fs);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Vt.Provider,{value:t},r)}function u0(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||te(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,d=null;n&&(d=s.route.errorElement||o0);let h=t.concat(i.slice(0,u+1)),g=()=>{let y;return f?y=d:s.route.Component?y=S.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=l,S.createElement(s0,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?S.createElement(l0,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fm||{}),vi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vi||{});function c0(e){let t=S.useContext(Fs);return t||te(!1),t}function f0(e){let t=S.useContext(sm);return t||te(!1),t}function d0(e){let t=S.useContext(Vt);return t||te(!1),t}function dm(e){let t=d0(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function m0(){var e;let t=S.useContext(um),n=f0(vi.UseRouteError),r=dm(vi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function p0(){let{router:e}=c0(fm.UseNavigateStable),t=dm(vi.UseNavigateStable),n=S.useRef(!1);return cm(()=>{n.current=!0}),S.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,gi({fromRouteId:t},i)))},[e,t])}function vt(e){te(!1)}function h0(e){let{basename:t="/",children:n=null,location:r,navigationType:a=xt.Pop,navigator:i,static:o=!1}=e;Jr()&&te(!1);let l=t.replace(/^\/*/,"/"),s=S.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=dn(r));let{pathname:u="/",search:f="",hash:d="",state:h=null,key:g="default"}=r,y=S.useMemo(()=>{let v=js(u,l);return v==null?null:{location:{pathname:v,search:f,hash:d,state:h,key:g},navigationType:a}},[l,u,f,d,h,g,a]);return y==null?null:S.createElement(mn.Provider,{value:s},S.createElement(Gi.Provider,{children:n,value:y}))}function g0(e){let{children:t,location:n}=e;return r0(Sl(t),n)}new Promise(()=>{});function Sl(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,a)=>{if(!S.isValidElement(r))return;let i=[...t,a];if(r.type===S.Fragment){n.push.apply(n,Sl(r.props.children,i));return}r.type!==vt&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Sl(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yi.apply(this,arguments)}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function v0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function y0(e,t){return e.button===0&&(!t||t==="_self")&&!v0(e)}function xl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(a=>[n,a]):[[n,r]])},[]))}function w0(e,t){let n=xl(e);return t&&t.forEach((r,a)=>{n.has(a)||t.getAll(a).forEach(i=>{n.append(a,i)})}),n}const b0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],k0=["aria-current","caseSensitive","className","end","style","to","children"],_0="startTransition",fc=yp[_0];function S0(e){let{basename:t,children:n,future:r,window:a}=e,i=S.useRef();i.current==null&&(i.current=N1({window:a,v5Compat:!0}));let o=i.current,[l,s]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=S.useCallback(d=>{u&&fc?fc(()=>s(d)):s(d)},[s,u]);return S.useLayoutEffect(()=>o.listen(f),[o,f]),S.createElement(h0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const x0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pm=S.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:f}=t,d=mm(t,b0),{basename:h}=S.useContext(mn),g,y=!1;if(typeof u=="string"&&C0.test(u)&&(g=u,x0))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=js(p.pathname,h);p.origin===c.origin&&w!=null?u=w+p.search+p.hash:y=!0}catch{}let v=e0(u,{relative:a}),x=E0(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:a});function m(c){r&&r(c),c.defaultPrevented||x(c)}return S.createElement("a",yi({},d,{href:g||v,onClick:y||i?r:m,ref:n,target:s}))}),A0=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,children:u}=t,f=mm(t,k0),d=Ms(s,{relative:f.relative}),h=qe(),g=S.useContext(sm),{navigator:y}=S.useContext(mn),v=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,x=h.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(x=x.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let c=x===v||!o&&x.startsWith(v)&&x.charAt(v.length)==="/",p=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),w=c?r:void 0,b;typeof i=="function"?b=i({isActive:c,isPending:p}):b=[i,c?"active":null,p?"pending":null].filter(Boolean).join(" ");let C=typeof l=="function"?l({isActive:c,isPending:p}):l;return S.createElement(pm,yi({},f,{"aria-current":w,className:b,ref:n,style:C,to:s}),typeof u=="function"?u({isActive:c,isPending:p}):u)});var dc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(dc||(dc={}));var mc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function E0(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=Qr(),s=qe(),u=Ms(e,{relative:o});return S.useCallback(f=>{if(y0(f,n)){f.preventDefault();let d=r!==void 0?r:hi(s)===hi(u);l(e,{replace:d,state:a,preventScrollReset:i,relative:o})}},[s,l,u,r,a,n,e,i,o])}function Yi(e){let t=S.useRef(xl(e)),n=S.useRef(!1),r=qe(),a=S.useMemo(()=>w0(r.search,n.current?null:t.current),[r.search]),i=Qr(),o=S.useCallback((l,s)=>{const u=xl(typeof l=="function"?l(a):l);n.current=!0,i("?"+u,s)},[i,a]);return[a,o]}function P0(){return _.jsx("main",{className:"welcome",children:_.jsxs("div",{className:"welcome-container",children:[_.jsx("h1",{children:"Welcome to MasterEmail"}),_.jsx("div",{className:"go-to-app-button",children:_.jsx(pm,{to:"/inbox",children:"Go to app"})})]})})}function N0({pathname:e,mail:t,toggleIsSelected:n,toggleIsStarred:r,toogleIsViewed:a}){const i=Qr(),[o,l]=Yi();function s(g){a(g),e==="/drafts"?l({compose:g.id}):i(`${g.id}`)}function u(g,y){g.stopPropagation(),n(y)}function f(g,y){g.stopPropagation(),r(y)}const d=t.isViewed?"":"email-preview-item-unread",h=t.isStarred?"email-preview-star-checked":"email-preview-star-unchecked";return _.jsxs("article",{className:`email-preview-item ${d}`,onClick:()=>s(t),children:[_.jsx("input",{className:"email-preview-select-checkbox",type:"checkbox",onClick:g=>u(g,t.id),onChange:g=>u(g,t.id),checked:t.isSelected}),_.jsx("span",{className:`email-preview-star ${h}`,title:t.isStarred?"Starred":"Not starred",onClick:g=>f(g,t)}),_.jsx("div",{className:"email-preview-item-from",children:e==="/sent"?`To:${t.To.split("@")[0]}`:t.From.split("@")[0]}),_.jsx("div",{className:"email-preview-item-content",children:t.Subject}),_.jsx("div",{className:"email-preview-item-date",children:new Date(t.Date).toLocaleDateString()})]})}function pc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pc(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(e)}function R0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T0(e,t,n){return t&&hc(e.prototype,t),n&&hc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ds(e,t){return I0(e)||F0(e,t)||hm(e,t)||D0()}function $r(e){return L0(e)||j0(e)||hm(e)||M0()}function L0(e){if(Array.isArray(e))return Cl(e)}function I0(e){if(Array.isArray(e))return e}function j0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function F0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function hm(e,t){if(e){if(typeof e=="string")return Cl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cl(e,t)}}function Cl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gc=function(){},Os={},gm={},vm=null,ym={mark:gc,measure:gc};try{typeof window<"u"&&(Os=window),typeof document<"u"&&(gm=document),typeof MutationObserver<"u"&&(vm=MutationObserver),typeof performance<"u"&&(ym=performance)}catch{}var O0=Os.navigator||{},vc=O0.userAgent,yc=vc===void 0?"":vc,Dt=Os,B=gm,wc=vm,_a=ym;Dt.document;var mt=!!B.documentElement&&!!B.head&&typeof B.addEventListener=="function"&&typeof B.createElement=="function",wm=~yc.indexOf("MSIE")||~yc.indexOf("Trident/"),Sa,xa,Ca,Aa,Ea,ut="___FONT_AWESOME___",Al=16,bm="fa",km="svg-inline--fa",ln="data-fa-i2svg",El="data-fa-pseudo-element",z0="data-fa-pseudo-element-pending",zs="data-prefix",Ws="data-icon",bc="fontawesome-i2svg",W0="async",G0=["HTML","HEAD","STYLE","SCRIPT"],_m=function(){try{return!0}catch{return!1}}(),Y="classic",$="sharp",Gs=[Y,$];function Kr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var zr=Kr((Sa={},ae(Sa,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(Sa,$,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Sa)),Wr=Kr((xa={},ae(xa,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(xa,$,{solid:"fass",regular:"fasr",light:"fasl"}),xa)),Gr=Kr((Ca={},ae(Ca,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(Ca,$,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ca)),Y0=Kr((Aa={},ae(Aa,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(Aa,$,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Aa)),V0=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Sm="fa-layers-text",B0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,U0=Kr((Ea={},ae(Ea,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Ea,$,{900:"fass",400:"fasr",300:"fasl"}),Ea)),xm=[1,2,3,4,5,6,7,8,9,10],X0=xm.concat([11,12,13,14,15,16,17,18,19,20]),Z0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yr=new Set;Object.keys(Wr[Y]).map(Yr.add.bind(Yr));Object.keys(Wr[$]).map(Yr.add.bind(Yr));var H0=[].concat(Gs,$r(Yr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$t.GROUP,$t.SWAP_OPACITY,$t.PRIMARY,$t.SECONDARY]).concat(xm.map(function(e){return"".concat(e,"x")})).concat(X0.map(function(e){return"w-".concat(e)})),wr=Dt.FontAwesomeConfig||{};function J0(e){var t=B.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Q0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(B&&typeof B.querySelector=="function"){var $0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$0.forEach(function(e){var t=Ds(e,2),n=t[0],r=t[1],a=Q0(J0(n));a!=null&&(wr[r]=a)})}var Cm={styleDefault:"solid",familyDefault:"classic",cssPrefix:bm,replacementClass:km,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wr.familyPrefix&&(wr.cssPrefix=wr.familyPrefix);var Bn=N(N({},Cm),wr);Bn.autoReplaceSvg||(Bn.observeMutations=!1);var L={};Object.keys(Cm).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Bn[e]=n,br.forEach(function(r){return r(L)})},get:function(){return Bn[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Bn.cssPrefix=t,br.forEach(function(n){return n(L)})},get:function(){return Bn.cssPrefix}});Dt.FontAwesomeConfig=L;var br=[];function K0(e){return br.push(e),function(){br.splice(br.indexOf(e),1)}}var gt=Al,Qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function q0(e){if(!(!e||!mt)){var t=B.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=B.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return B.head.insertBefore(t,r),e}}var eg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vr(){for(var e=12,t="";e-- >0;)t+=eg[Math.random()*62|0];return t}function Hn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ys(e){return e.classList?Hn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Am(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Am(e[n]),'" ')},"").trim()}function Vi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Vs(e){return e.size!==Qe.size||e.x!==Qe.x||e.y!==Qe.y||e.rotate!==Qe.rotate||e.flipX||e.flipY}function ng(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function rg(e){var t=e.transform,n=e.width,r=n===void 0?Al:n,a=e.height,i=a===void 0?Al:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&wm?s+="translate(".concat(t.x/gt-r/2,"em, ").concat(t.y/gt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/gt,"em), calc(-50% + ").concat(t.y/gt,"em)) "):s+="translate(".concat(t.x/gt,"em, ").concat(t.y/gt,"em) "),s+="scale(".concat(t.size/gt*(t.flipX?-1:1),", ").concat(t.size/gt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var ag=`:root, :host {
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
}`;function Em(){var e=bm,t=km,n=L.cssPrefix,r=L.replacementClass,a=ag;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var kc=!1;function xo(){L.autoAddCss&&!kc&&(q0(Em()),kc=!0)}var ig={mixout:function(){return{dom:{css:Em,insertCss:xo}}},hooks:function(){return{beforeDOMElementCreation:function(){xo()},beforeI2svg:function(){xo()}}}},ct=Dt||{};ct[ut]||(ct[ut]={});ct[ut].styles||(ct[ut].styles={});ct[ut].hooks||(ct[ut].hooks={});ct[ut].shims||(ct[ut].shims=[]);var Ye=ct[ut],Pm=[],og=function e(){B.removeEventListener("DOMContentLoaded",e),bi=1,Pm.map(function(t){return t()})},bi=!1;mt&&(bi=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),bi||B.addEventListener("DOMContentLoaded",og));function lg(e){mt&&(bi?setTimeout(e,0):Pm.push(e))}function qr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Am(e):"<".concat(t," ").concat(tg(r),">").concat(i.map(qr).join(""),"</").concat(t,">")}function _c(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var sg=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Co=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?sg(n,a):n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function ug(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Pl(e){var t=ug(e);return t.length===1?t[0].toString(16):null}function cg(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Sc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Sc(t);typeof Ye.hooks.addPack=="function"&&!a?Ye.hooks.addPack(e,Sc(t)):Ye.styles[e]=N(N({},Ye.styles[e]||{}),i),e==="fas"&&Nl("fa",t)}var Pa,Na,Ra,En=Ye.styles,fg=Ye.shims,dg=(Pa={},ae(Pa,Y,Object.values(Gr[Y])),ae(Pa,$,Object.values(Gr[$])),Pa),Bs=null,Nm={},Rm={},Tm={},Lm={},Im={},mg=(Na={},ae(Na,Y,Object.keys(zr[Y])),ae(Na,$,Object.keys(zr[$])),Na);function pg(e){return~H0.indexOf(e)}function hg(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!pg(a)?a:null}var jm=function(){var t=function(i){return Co(En,function(o,l,s){return o[s]=Co(l,i,{}),o},{})};Nm=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),Rm=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),Im=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in En||L.autoFetchSvg,r=Co(fg,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});Tm=r.names,Lm=r.unicodes,Bs=Bi(L.styleDefault,{family:L.familyDefault})};K0(function(e){Bs=Bi(e.styleDefault,{family:L.familyDefault})});jm();function Us(e,t){return(Nm[e]||{})[t]}function gg(e,t){return(Rm[e]||{})[t]}function Kt(e,t){return(Im[e]||{})[t]}function Fm(e){return Tm[e]||{prefix:null,iconName:null}}function vg(e){var t=Lm[e],n=Us("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ot(){return Bs}var Xs=function(){return{prefix:null,iconName:null,rest:[]}};function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,a=zr[r][e],i=Wr[r][e]||Wr[r][a],o=e in Ye.styles?e:null;return i||o||null}var xc=(Ra={},ae(Ra,Y,Object.keys(Gr[Y])),ae(Ra,$,Object.keys(Gr[$])),Ra);function Ui(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,Y,"".concat(L.cssPrefix,"-").concat(Y)),ae(t,$,"".concat(L.cssPrefix,"-").concat($)),t),o=null,l=Y;(e.includes(i[Y])||e.some(function(u){return xc[Y].includes(u)}))&&(l=Y),(e.includes(i[$])||e.some(function(u){return xc[$].includes(u)}))&&(l=$);var s=e.reduce(function(u,f){var d=hg(L.cssPrefix,f);if(En[f]?(f=dg[l].includes(f)?Y0[l][f]:f,o=f,u.prefix=f):mg[l].indexOf(f)>-1?(o=f,u.prefix=Bi(f,{family:l})):d?u.iconName=d:f!==L.replacementClass&&f!==i[Y]&&f!==i[$]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var h=o==="fa"?Fm(u.iconName):{},g=Kt(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!En.far&&En.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},Xs());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===$&&(En.fass||L.autoFetchSvg)&&(s.prefix="fass",s.iconName=Kt(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Ot()||"fas"),s}var yg=function(){function e(){R0(this,e),this.definitions={}}return T0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),o[l]),Nl(l,o[l]);var s=Gr[Y][l];s&&Nl(s,o[l]),jm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),Cc=[],Pn={},Mn={},wg=Object.keys(Mn);function bg(e,t){var n=t.mixoutsTo;return Cc=e,Pn={},Object.keys(Mn).forEach(function(r){wg.indexOf(r)===-1&&delete Mn[r]}),Cc.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),wi(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Pn[o]||(Pn[o]=[]),Pn[o].push(i[o])})}r.provides&&r.provides(Mn)}),n}function Rl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Pn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function sn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Pn[e]||[];a.forEach(function(i){i.apply(null,n)})}function ft(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mn[e]?Mn[e].apply(null,t):void 0}function Tl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ot();if(t)return t=Kt(n,t)||t,_c(Mm.definitions,n,t)||_c(Ye.styles,n,t)}var Mm=new yg,kg=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,sn("noAuto")},_g={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mt?(sn("beforeI2svg",t),ft("pseudoElements2svg",t),ft("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,lg(function(){xg({autoReplaceSvgRoot:n}),sn("watch",t)})}},Sg={icon:function(t){if(t===null)return null;if(wi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Bi(t[0]);return{prefix:r,iconName:Kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(V0))){var a=Ui(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ot(),iconName:Kt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ot();return{prefix:i,iconName:Kt(i,t)||t}}}},Te={noAuto:kg,config:L,dom:_g,parse:Sg,library:Mm,findIconDefinition:Tl,toHtml:qr},xg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?B:n;(Object.keys(Ye.styles).length>0||L.autoFetchSvg)&&mt&&L.autoReplaceSvg&&Te.dom.i2svg({node:r})};function Xi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(mt){var r=B.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Cg(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Vs(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=Vi(N(N({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ag(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},a),{},{id:o}),children:r}]}]}function Zs(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,y=r.found?r:n,v=y.width,x=y.height,m=a==="fak",c=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(function(E){return d.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(d.classes).join(" "),p={children:[],attributes:N(N({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},w=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};g&&(p.attributes[ln]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||Vr())},children:[s]}),delete p.attributes.title);var b=N(N({},p),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:N(N({},w),d.styles)}),C=r.found&&n.found?ft("generateAbstractMask",b)||{children:[],attributes:{}}:ft("generateAbstractIcon",b)||{children:[],attributes:{}},A=C.children,I=C.attributes;return b.children=A,b.attributes=I,l?Ag(b):Cg(b)}function Ac(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=N(N(N({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[ln]="");var f=N({},o.styles);Vs(a)&&(f.transform=rg({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Vi(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Eg(e){var t=e.content,n=e.title,r=e.extra,a=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Vi(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ao=Ye.styles;function Ll(e){var t=e[0],n=e[1],r=e.slice(4),a=Ds(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat($t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat($t.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat($t.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Pg={found:!1,width:512,height:512};function Ng(e,t){!_m&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Il(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=Ot()),new Promise(function(r,a){if(ft("missingIconAbstract"),n==="fa"){var i=Fm(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ao[t]&&Ao[t][e]){var o=Ao[t][e];return r(Ll(o))}Ng(e,t),r(N(N({},Pg),{},{icon:L.showMissingIcons&&e?ft("missingIconAbstract")||{}:{}}))})}var Ec=function(){},jl=L.measurePerformance&&_a&&_a.mark&&_a.measure?_a:{mark:Ec,measure:Ec},ur='FA "6.4.2"',Rg=function(t){return jl.mark("".concat(ur," ").concat(t," begins")),function(){return Dm(t)}},Dm=function(t){jl.mark("".concat(ur," ").concat(t," ends")),jl.measure("".concat(ur," ").concat(t),"".concat(ur," ").concat(t," begins"),"".concat(ur," ").concat(t," ends"))},Hs={begin:Rg,end:Dm},Va=function(){};function Pc(e){var t=e.getAttribute?e.getAttribute(ln):null;return typeof t=="string"}function Tg(e){var t=e.getAttribute?e.getAttribute(zs):null,n=e.getAttribute?e.getAttribute(Ws):null;return t&&n}function Lg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function Ig(){if(L.autoReplaceSvg===!0)return Ba.replace;var e=Ba[L.autoReplaceSvg];return e||Ba.replace}function jg(e){return B.createElementNS("http://www.w3.org/2000/svg",e)}function Fg(e){return B.createElement(e)}function Om(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?jg:Fg:n;if(typeof e=="string")return B.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Om(o,{ceFn:r}))}),a}function Mg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ba={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Om(a),n)}),n.getAttribute(ln)===null&&L.keepOriginalSource){var r=B.createComment(Mg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ys(n).indexOf(L.replacementClass))return Ba.replace(t);var a=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===L.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return qr(l)}).join(`
`);n.setAttribute(ln,""),n.innerHTML=o}};function Nc(e){e()}function zm(e,t){var n=typeof t=="function"?t:Va;if(e.length===0)n();else{var r=Nc;L.mutateApproach===W0&&(r=Dt.requestAnimationFrame||Nc),r(function(){var a=Ig(),i=Hs.begin("mutate");e.map(a),i(),n()})}}var Js=!1;function Wm(){Js=!0}function Fl(){Js=!1}var ki=null;function Rc(e){if(wc&&L.observeMutations){var t=e.treeCallback,n=t===void 0?Va:t,r=e.nodeCallback,a=r===void 0?Va:r,i=e.pseudoElementsCallback,o=i===void 0?Va:i,l=e.observeMutationsRoot,s=l===void 0?B:l;ki=new wc(function(u){if(!Js){var f=Ot();Hn(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Pc(d.addedNodes[0])&&(L.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Pc(d.target)&&~Z0.indexOf(d.attributeName))if(d.attributeName==="class"&&Tg(d.target)){var h=Ui(Ys(d.target)),g=h.prefix,y=h.iconName;d.target.setAttribute(zs,g||f),y&&d.target.setAttribute(Ws,y)}else Lg(d.target)&&a(d.target)})}}),mt&&ki.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Dg(){ki&&ki.disconnect()}function Og(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function zg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ui(Ys(e));return a.prefix||(a.prefix=Ot()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=gg(a.prefix,e.innerText)||Us(a.prefix,Pl(e.innerText))),!a.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Wg(e){var t=Hn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Vr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Gg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zg(e),r=n.iconName,a=n.prefix,i=n.rest,o=Wg(e),l=Rl("parseNodeAttributes",{},e),s=t.styleParser?Og(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var Yg=Ye.styles;function Gm(e){var t=L.autoReplaceSvg==="nest"?Tc(e,{styleParser:!1}):Tc(e);return~t.extra.classes.indexOf(Sm)?ft("generateLayersText",e,t):ft("generateSvgReplacementMutation",e,t)}var zt=new Set;Gs.map(function(e){zt.add("fa-".concat(e))});Object.keys(zr[Y]).map(zt.add.bind(zt));Object.keys(zr[$]).map(zt.add.bind(zt));zt=$r(zt);function Lc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mt)return Promise.resolve();var n=B.documentElement.classList,r=function(d){return n.add("".concat(bc,"-").concat(d))},a=function(d){return n.remove("".concat(bc,"-").concat(d))},i=L.autoFetchSvg?zt:Gs.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Yg));i.includes("fa")||i.push("fa");var o=[".".concat(Sm,":not([").concat(ln,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(ln,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Hn(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=Hs.begin("onTree"),u=l.reduce(function(f,d){try{var h=Gm(d);h&&f.push(h)}catch(g){_m||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){zm(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),d(h)})})}function Vg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gm(e).then(function(n){n&&zm([n],t)})}function Bg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Tl(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Tl(a||{})),e(r,N(N({},n),{},{mask:a}))}}var Ug=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Qe:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,v=n.classes,x=v===void 0?[]:v,m=n.attributes,c=m===void 0?{}:m,p=n.styles,w=p===void 0?{}:p;if(t){var b=t.prefix,C=t.iconName,A=t.icon;return Xi(N({type:"icon"},t),function(){return sn("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(h?c["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||Vr()):(c["aria-hidden"]="true",c.focusable="false")),Zs({icons:{main:Ll(A),mask:s?Ll(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:C,transform:N(N({},Qe),a),symbol:o,title:h,maskId:f,titleId:y,extra:{attributes:c,styles:w,classes:x}})})}},Xg={mixout:function(){return{icon:Bg(Ug)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lc,n.nodeCallback=Vg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?B:r,i=n.callback,o=i===void 0?function(){}:i;return Lc(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,y){Promise.all([Il(a,l),f.iconName?Il(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=Ds(v,2),m=x[0],c=x[1];g([n,Zs({icons:{main:m,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Vi(l);s.length>0&&(a.style=s);var u;return Vs(o)&&(u=ft("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Zg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Xi({type:"layer"},function(){sn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat($r(i)).join(" ")},children:o}]})}}}},Hg={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return Xi({type:"counter",content:n},function(){return sn("beforeDOMElementCreation",{content:n,params:r}),Eg({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat($r(l))}})})}}}},Jg={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Qe:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Xi({type:"text",content:n},function(){return sn("beforeDOMElementCreation",{content:n,params:r}),Ac({content:n,transform:N(N({},Qe),i),title:l,extra:{attributes:d,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat($r(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(wm){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return L.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ac({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},Qg=new RegExp('"',"ug"),Ic=[1105920,1112319];function $g(e){var t=e.replace(Qg,""),n=cg(t,0),r=n>=Ic[0]&&n<=Ic[1],a=t.length===2?t[0]===t[1]:!1;return{value:Pl(a?t[0]:t),isSecondary:r||a}}function jc(e,t){var n="".concat(z0).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Hn(e.children),o=i.filter(function(A){return A.getAttribute(El)===t})[0],l=Dt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(B0),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?$:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Wr[h][s[2].toLowerCase()]:U0[h][u],y=$g(d),v=y.value,x=y.isSecondary,m=s[0].startsWith("FontAwesome"),c=Us(g,v),p=c;if(m){var w=vg(v);w.iconName&&w.prefix&&(c=w.iconName,g=w.prefix)}if(c&&!x&&(!o||o.getAttribute(zs)!==g||o.getAttribute(Ws)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var b=Gg(),C=b.extra;C.attributes[El]=t,Il(c,g).then(function(A){var I=Zs(N(N({},b),{},{icons:{main:A,mask:Xs()},prefix:g,iconName:p,extra:C,watchable:!0})),E=B.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=I.map(function(P){return qr(P)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Kg(e){return Promise.all([jc(e,"::before"),jc(e,"::after")])}function qg(e){return e.parentNode!==document.head&&!~G0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(El)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Fc(e){if(mt)return new Promise(function(t,n){var r=Hn(e.querySelectorAll("*")).filter(qg).map(Kg),a=Hs.begin("searchPseudoElements");Wm(),Promise.all(r).then(function(){a(),Fl(),t()}).catch(function(){a(),Fl(),n()})})}var ev={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?B:r;L.searchPseudoElements&&Fc(a)}}},Mc=!1,tv={mixout:function(){return{dom:{unwatch:function(){Wm(),Mc=!0}}}},hooks:function(){return{bootstrap:function(){Rc(Rl("mutationObserverCallbacks",{}))},noAuto:function(){Dg()},watch:function(n){var r=n.observeMutationsRoot;Mc?Fl():Rc(Rl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Dc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},nv={mixout:function(){return{parse:{transform:function(n){return Dc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Dc(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:h};return{tag:"g",attributes:N({},g.outer),children:[{tag:"g",attributes:N({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),g.path)}]}]}}}},Eo={x:0,y:0,width:"100%",height:"100%"};function Oc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function rv(e){return e.tag==="g"?e.children:[e]}var av={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Ui(a.split(" ").map(function(o){return o.trim()})):Xs();return i.prefix||(i.prefix=Ot()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,d=o.width,h=o.icon,g=ng({transform:s,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:N(N({},Eo),{},{fill:"white"})},v=f.children?{children:f.children.map(Oc)}:{},x={tag:"g",attributes:N({},g.inner),children:[Oc(N({tag:f.tag,attributes:N(N({},f.attributes),g.path)},v))]},m={tag:"g",attributes:N({},g.outer),children:[x]},c="mask-".concat(l||Vr()),p="clip-".concat(l||Vr()),w={tag:"mask",attributes:N(N({},Eo),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:rv(h)},w]};return r.push(b,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},Eo)}),{children:r,attributes:a}}}},iv={provides:function(t){var n=!1;Dt.matchMedia&&(n=Dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ov={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},lv=[ig,Xg,Zg,Hg,Jg,ev,tv,nv,av,iv,ov];bg(lv,{mixoutsTo:Te});Te.noAuto;Te.config;Te.library;Te.dom;var Ml=Te.parse;Te.findIconDefinition;Te.toHtml;var sv=Te.icon;Te.layer;Te.text;Te.counter;var Ym={exports:{}},uv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cv=uv,fv=cv;function Vm(){}function Bm(){}Bm.resetWarningCache=Vm;var dv=function(){function e(r,a,i,o,l,s){if(s!==fv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Bm,resetWarningCache:Vm};return n.PropTypes=n,n};Ym.exports=dv();var mv=Ym.exports;const M=Yc(mv);function zc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zc(Object(n),!0).forEach(function(r){Nn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function Nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pv(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hv(e,t){if(e==null)return{};var n=pv(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Dl(e){return gv(e)||vv(e)||yv(e)||wv()}function gv(e){if(Array.isArray(e))return Ol(e)}function vv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yv(e,t){if(e){if(typeof e=="string")return Ol(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ol(e,t)}}function Ol(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bv(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,g=e.inverse,y=e.border,v=e.listItem,x=e.flip,m=e.size,c=e.rotation,p=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":y,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Nn(t,"fa-".concat(m),typeof m<"u"&&m!==null),Nn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Nn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Nn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(b){return w[b]?b:null}).filter(function(b){return b})}function kv(e){return e=e-0,e===e}function Um(e){return kv(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var _v=["style"];function Sv(e){return e.charAt(0).toUpperCase()+e.slice(1)}function xv(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Um(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Sv(a)]=i:t[a]=i,t},{})}function Xm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return Xm(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=xv(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[Um(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=hv(n,_v);return a.attrs.style=Ct(Ct({},a.attrs.style),o),e.apply(void 0,[t.tag,Ct(Ct({},a.attrs),l)].concat(Dl(r)))}var Zm=!1;try{Zm=!0}catch{}function Cv(){if(!Zm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wc(e){if(e&&_i(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ml.icon)return Ml.icon(e);if(e===null)return null;if(e&&_i(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Po(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Nn({},e,t):{}}var Ue=xi.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Wc(n),f=Po("classes",[].concat(Dl(bv(e)),Dl(i.split(" ")))),d=Po("transform",typeof e.transform=="string"?Ml.transform(e.transform):e.transform),h=Po("mask",Wc(r)),g=sv(u,Ct(Ct(Ct(Ct({},f),d),h),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!g)return Cv("Could not find icon",u),null;var y=g.abstract,v={ref:t};return Object.keys(e).forEach(function(x){Ue.defaultProps.hasOwnProperty(x)||(v[x]=e[x])}),Av(y[0],v)});Ue.displayName="FontAwesomeIcon";Ue.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Ue.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Av=Xm.bind(null,xi.createElement),Ev={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},Pv=Ev,Nv={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Rv={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Tv={prefix:"fas",iconName:"envelope-open",icon:[512,512,[62135],"f2b6","M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"]},Qs={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Lv={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"]},Iv=Lv,jv={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"]},Fv={prefix:"fas",iconName:"trash-arrow-up",icon:[448,512,["trash-restore"],"f829","M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"]},Hm=Fv,Mv={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};let Dv="alexbol99@gmail.com";const Jm={currentUser:Dv},Gc={makeId:Ov,saveToStorage:zv,loadFromStorage:Wv};function Ov(e=5){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function zv(e,t){localStorage.setItem(e,JSON.stringify(t))}function Wv(e,t=null){var n=localStorage[e]||t;return JSON.parse(n)}const ea={query:ta,get:Gv,post:Yv,put:Vv,remove:Bv};function ta(e,t=200){let n=JSON.parse(localStorage.getItem(e))||[];return new Promise(r=>setTimeout(()=>r(n),t))}function Gv(e,t){return ta(e).then(n=>{const r=n.find(a=>a.id===t);if(!r)throw new Error(`Get failed, cannot find entity with id: ${t} in: ${e}`);return r})}function Yv(e,t){return t={...t},t.id=Gc.makeId(6),ta(e).then(n=>(n.push(t),Gc.saveToStorage(e,n),t))}function Vv(e,t){return ta(e).then(n=>{const r=n.findIndex(a=>a.id===t.id);if(r<0)throw new Error(`Update failed, cannot find entity with id: ${t.id} in: ${e}`);return n.splice(r,1,t),Qm(e,n),t})}function Bv(e,t){return ta(e).then(n=>{const r=n.findIndex(a=>a.id===t);if(r<0)throw new Error(`Remove failed, cannot find entity with id: ${t} in: ${e}`);n.splice(r,1),Qm(e,n)})}function Qm(e,t){localStorage.setItem(e,JSON.stringify(t))}const un={get:Uv,create:Xv,update:Jv,remove:Hv,getById:Zv},na="mails";async function Uv(){return await ea.query(na)}async function Xv(e){return await ea.post(na,e)}async function Zv(e){return await ea.get(na,e)}async function Hv(e){return await ea.remove(na,e)}async function Jv(e){return await ea.put(na,e)}const zl=10,$m={pathname:"/inbox",pageNum:0,filter:""},Km={date:!0,dateSortAscending:!1,subject:!1,subjectSortAscending:!0},Ce={query:Qv,remove:t2,getById:$v,create:qv,update:e2,getPaginationParams:Kv,defaultSortBy:Km,defaultFilterBy:$m};async function Qv(e=$m,t=Km){let n=await un.get(),r=qm(n,e.pathname);if(r.length===0)return[];let a=r2(r,t),[i,o]=n2(a,e.pageNum);return i=s2(i,e.filter),[i,o]}async function $v(e){let n={...await un.getById(e),isViewed:!0};return await un.update(n),n}async function Kv(e,t){let n=await un.get(),r=qm(n,e);const[a,i]=ep(r,t);return[a,i,r.length]}function qv(e=u2()){return un.create(e)}function e2(e){return un.update(e)}function t2(e){return un.remove(e)}function qm(e,t){const n=Jm.currentUser;let r;switch(t){case"/inbox":r=e.filter(a=>a.To===n&&!a.isDeleted);break;case"/starred":r=e.filter(a=>a.isStarred&&!a.isDeleted);break;case"/sent":r=e.filter(a=>a.From===n&&!a.isDraft&&!a.isDeleted);break;case"/drafts":r=e.filter(a=>a.From===n&&a.isDraft&&!a.isDeleted);break;case"/trash":r=e.filter(a=>a.isDeleted);break;default:r=e.filter(a=>a.To===n&&!a.isDeleted);break}return r}function ep(e,t){const n=zl*t,r=Math.min(zl*(t+1),e.length);return[n,r]}function n2(e,t){const[n,r]=ep(e,t),a=n+zl>=e.length;return[e.slice(n,r),a]}function r2(e,t){let n;return t.date&&(n=t.dateSortAscending?a2:i2),t.subject&&(n=t.subjectSortAscending?o2:l2),e.sort(n)}function a2(e,t){return new Date(e.Date)-new Date(t.Date)}function i2(e,t){return new Date(t.Date)-new Date(e.Date)}function o2(e,t){return e.Subject<t.Subject?1:t.Subject<e.Subject?-1:0}function l2(e,t){return e.Subject<t.Subject?-1:t.Subject<e.Subject?1:0}function s2(e,t){return e.filter(n=>n.To.includes(t)||n.From.includes(t)||n.Body.includes(t))}function u2(e="",t="",n=""){return{id:null,Date:new Date().toLocaleString(),From:Jm.currentUser,To:e,CC:"",Subject:t,Body:n,Attachments:"","Attachments Path":"",isDraft:!0,isViewed:!0,isStarred:!1,isSelected:!1,isSent:!1,isDeleted:!1}}function c2({mails:e,pathname:t,pageNum:n,toggleSelectAll:r,toggleIsSelected:a,toggleIsStarred:i,toogleIsViewed:o,toggleSelectedItemsIsDeleted:l,deletedSelectedItems:s,onPrevPageButtonClick:u,onNextPageButtonClick:f,toggleSortByDate:d,toggleSortBySubject:h}){const[g,y]=S.useState(null);return S.useEffect(()=>{async function v(x,m){const[c,p,w]=await Ce.getPaginationParams(x,m);y({start:c,end:p,total:w})}v(t,n)},[t,n]),_.jsxs("div",{className:"items-list",children:[_.jsxs("div",{className:"list-header",children:[_.jsx("input",{type:"checkbox",className:"select-all-checkbox",onClick:v=>r(v.target.checked)}),_.jsx("button",{className:"",onClick:t==="/trash"?s:l,title:t==="/trash"?"Completely delete selected mails":"Move selected mails to Trash folder",children:_.jsx(Ue,{icon:Qs})}),t==="/trash"&&_.jsx("button",{className:"",onClick:l,title:"Restore selected mails from Trash folder",children:_.jsx(Ue,{icon:Hm})}),_.jsx("button",{className:"sort-button",title:"Sort by date",onClick:d,children:"Sort By Date"}),_.jsx("button",{className:"sort-button",title:"Sort by subject",onClick:h,children:"Sort By Subject"}),g&&e.length>0&&_.jsx("div",{className:"pagination",children:`${g.start+1}-${g.end} of ${g.total}`}),g&&e.length>0&&_.jsx("button",{className:"pagination-button",onClick:()=>u(),children:"‹"}),g&&e.length>0&&_.jsx("button",{className:"pagination-button",onClick:()=>f(),children:"›"})]}),_.jsx("div",{className:"email-preview",children:_.jsx("ul",{className:"items-list",children:e.map(v=>_.jsx(N0,{pathname:t,mail:v,toggleIsSelected:a,toggleIsStarred:i,toogleIsViewed:o},v.id))})})]})}const f2=[{to:"/inbox",name:"Inbox",icon:jv},{to:"/starred",name:"Starred",icon:Rv},{to:"/sent",name:"Sent",icon:Mv},{to:"/drafts",name:"Drafts",icon:Pv},{to:"/trash",name:"Trash",icon:Qs}];function d2({to:e,name:t,icon:n,selected:r}){return _.jsx("li",{className:r?"menu-item-selected":"",children:_.jsxs(A0,{to:e,title:t,children:[_.jsx(Ue,{icon:n}),"  ",t]})})}function m2(e){const[t,n]=Yi(),{pathname:r}=qe();function a(){n({compose:"new"})}return _.jsxs("aside",{className:"aside-menu",children:[_.jsx("button",{className:"compose-button",onClick:a,children:"Compose"}),_.jsx("ul",{className:"menu-items",children:f2.map(i=>_.jsx(d2,{to:i.to,name:i.name,icon:i.icon,selected:r===i.to},i.name))})]})}function p2({id:e,toogleIsViewed:t,toggleIsDeleted:n}){const[r,a]=S.useState(null),{pathname:i}=qe(),o=Qr();S.useEffect(()=>{l()},[]);async function l(){try{const u=await Ce.getById(e);a(u)}catch(u){console.error(u.message),o(i.slice(0,i.indexOf(e)-1))}}async function s(){await t(r),o(i.slice(0,i.indexOf(e)-1))}return r?_.jsxs("div",{className:"email-details",children:[_.jsxs("nav",{className:"breadcrumbs",children:[_.jsx("button",{className:"back-button",title:"Back to the previous page",onClick:()=>o(i.slice(0,i.indexOf(e)-1)),children:_.jsx(Ue,{icon:Iv})}),_.jsx("button",{className:"action-button",title:r.isDeleted?"Restore from trash folder":"Move to trash folder",onClick:()=>n(r),children:_.jsx(Ue,{icon:r.isDeleted?Hm:Qs})}),_.jsx("button",{className:"action-button",title:"Mark as unread",onClick:()=>s(),children:_.jsx(Ue,{icon:Tv})})]}),_.jsx("h2",{children:r==null?void 0:r.Subject}),_.jsx("div",{className:"email-content",children:r==null?void 0:r.Body}),_.jsx("section",{className:"attachments"})]}):"Loading mail details"}function h2(e){const[t,n]=S.useState(null),{pathname:r}=qe(),a=Qr(),[i,o]=Yi(),l=S.useRef(t),s=i.get("compose");S.useEffect(()=>{l.current=t},[t]),S.useEffect(()=>(s==="new"?u():f(s),()=>{d(l.current)}),[s]);async function u(){try{const y=await Ce.create();y.id&&n(y)}catch(y){console.log(y.message),a(r)}}async function f(y){try{const v=await Ce.getById(y);n(v)}catch(v){console.log(v.message),a(r)}}async function d(y){try{await Ce.update(y)}catch(v){console.log(v.message),a(r)}}function h(y){let{value:v,name:x}=y.target;n(m=>({...m,[x]:v}))}async function g(y){y.preventDefault(),await d({...t,Date:new Date().toLocaleString(),isDraft:!1}),a(r)}return t?_.jsx("div",{className:"email-compose",children:_.jsxs("div",{className:"compose-popup",children:[_.jsx("h2",{className:"compose-popup-title",children:s==="new"?"New Message":t.Subject}),_.jsxs("form",{onSubmit:g,children:[_.jsx("label",{htmlFor:"To",children:"To:"}),_.jsx("input",{type:"text",id:"To",name:"To",className:"compose-input",placeholder:"Recipient",onChange:h,value:t.To}),_.jsx("label",{htmlFor:"Subject",children:"Subject:"}),_.jsx("input",{type:"text",id:"Subject",name:"Subject",className:"compose-input",placeholder:"Subject",onChange:h,value:t.Subject}),_.jsx("textarea",{id:"Body",name:"Body",className:"compose-textarea",placeholder:"Compose your message...",onChange:h,value:t.Body}),_.jsx("button",{className:"send-button",children:"Send"})]})]})}):"Reading mail"}function g2({setContextFilter:e}){return _.jsxs("header",{children:[_.jsxs("nav",{className:"breadcrumbs",children:[_.jsx("button",{className:"main-menu-button",title:"Main menu",children:_.jsx(Ue,{icon:Nv})}),_.jsx("div",{className:"logo",children:"MisterEmail"})]}),_.jsx("input",{type:"text",className:"search-box",placeholder:"Start typing to search ...",onChange:e}),_.jsxs("nav",{className:"breadcrumbs",children:[_.jsx("a",{href:"#",children:"Help"}),_.jsx("a",{href:"#",children:"Settings"}),_.jsx("a",{href:"#",children:"User"})]})]})}function ar(){const[e,t]=S.useState(null),n=n0(),{pathname:r}=qe(),[a,i]=Yi(),[o,l]=S.useState(Ce.defaultFilterBy),[s,u]=S.useState(Ce.defaultSortBy),[f,d]=S.useState(!1);S.useEffect(()=>{l(E=>({...E,pathname:r}))},[r]),S.useEffect(()=>{h()},[o,s]);async function h(){try{const[E,P]=await Ce.query(o,s);t(E),d(P)}catch(E){console.error(E.message),E.message==="Pagination error"&&l(P=>({...P,pageNum:Math.max(P.pageNum-1,0)}))}}function g(E){o.pageNum>0&&l(P=>({...P,pageNum:P.pageNum-1}))}function y(){f||l(E=>({...E,pageNum:E.pageNum+1}))}function v(E){t(P=>P.map(J=>J.id===E?{...J,isSelected:!J.isSelected}:J))}async function x(E){t(P=>P.map(J=>({...J,isSelected:E})))}async function m(E){const P={...E,isViewed:!E.isViewed};await Ce.update(P)}async function c(E){const P={...E,isDeleted:!E.isDeleted};await Ce.update(P)}async function p(E){const P={...E,isStarred:!E.isStarred};t(J=>J.map(pt=>pt===E?P:pt)),await Ce.update(P),h()}async function w(){const E=e.filter(P=>P.isSelected);for(let P of E){const J={...P,isSelected:!1,isDeleted:!P.isDeleted};await Ce.update(J),h()}}async function b(){const E=e.filter(P=>P.isSelected);for(let P of E)await Ce.remove(P.id),h()}function C(E){l(P=>({...P,filter:E.target.value}))}function A(){u(E=>({...E,date:!0,dateSortAscending:!E.dateSortAscending,subject:!1}))}function I(){u(E=>({...E,date:!1,subject:!0,subjectSortAscending:!E.subjectSortAscending}))}return _.jsxs(xi.Fragment,{children:[_.jsxs("div",{className:"email-index",children:[_.jsx(g2,{setContextFilter:C}),_.jsxs("main",{children:[_.jsx(m2,{}),n.mailId?_.jsx(p2,{id:n.mailId,toogleIsViewed:m,toggleIsDeleted:c}):e&&_.jsx(c2,{mails:e,pathname:o.pathname,pageNum:o.pageNum,toggleSelectAll:x,toggleIsSelected:v,toggleIsStarred:p,toogleIsViewed:m,toggleSelectedItemsIsDeleted:w,deletedSelectedItems:b,onPrevPageButtonClick:g,onNextPageButtonClick:y,toggleSortByDate:A,toggleSortBySubject:I})]})]}),a.get("compose")&&_.jsx(h2,{})]})}const v2=[{Date:"9/2/2013 4:36:30 AM",Subject:"top_b_box has sent a message",Body:`\r
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
`,From:"alexbol99@gmail.com",To:"support+id11699320@ryanairsupport.zendesk.com",CC:"",Attachments:"Bank account ownership.pdf; ","Attachments Path":"/Users/alexanderbol/Documents/CodingAcademy/Day3/MacUncle_September 6, 2023 4:32 PM/Mail/Starred.mbox/Attachments",id:"Z2JZMO"}];function y2(){localStorage.getItem("mails")||localStorage.setItem("mails",JSON.stringify(v2));function e(){return _.jsx("div",{children:_.jsx("h2",{children:"404 Page not found"})})}return _.jsx(S0,{children:_.jsxs(g0,{children:[_.jsx(vt,{path:"/",element:_.jsx(P0,{})}),_.jsx(vt,{path:"/inbox/:mailId?",element:_.jsx(ar,{})}),_.jsx(vt,{path:"/starred/:mailId?",element:_.jsx(ar,{})}),_.jsx(vt,{path:"/sent/:mailId?",element:_.jsx(ar,{})}),_.jsx(vt,{path:"/drafts/:mailId?",element:_.jsx(ar,{})}),_.jsx(vt,{path:"/trash/:mailId?",element:_.jsx(ar,{})}),_.jsx(vt,{path:"*",element:_.jsx(e,{})})]})})}No.createRoot(document.getElementById("root")).render(_.jsx(y2,{}));
