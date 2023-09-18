function cp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qc={exports:{}},Ni={},Kc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),fp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),ou=Symbol.iterator;function _p(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,tf={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||qc}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nf(){}nf.prototype=Jn.prototype;function Hl(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||qc}var Jl=Hl.prototype=new nf;Jl.constructor=Hl;ef(Jl,Jn.prototype);Jl.isPureReactComponent=!0;var lu=Array.isArray,rf=Object.prototype.hasOwnProperty,$l={current:null},af={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)rf.call(t,r)&&!af.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Jr,type:e,key:i,ref:o,props:a,_owner:$l.current}}function kp(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function Sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var su=/\/+/g;function no(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sp(""+e.key):t.toString(36)}function Ma(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jr:case fp:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+no(o,0):r,lu(a)?(n="",e!=null&&(n=e.replace(su,"$&/")+"/"),Ma(a,t,n,"",function(u){return u})):a!=null&&(Ql(a)&&(a=kp(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(su,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",lu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+no(i,l);o+=Ma(i,t,n,s,a)}else if(s=_p(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+no(i,l++),o+=Ma(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(e,t,n){if(e==null)return e;var r=[],a=0;return Ma(e,r,"","",function(i){return t.call(n,i,a++)}),r}function xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Da={transition:null},Cp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Da,ReactCurrentOwner:$l};D.Children={map:ca,forEach:function(e,t,n){ca(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ca(e,function(){t++}),t},toArray:function(e){return ca(e,function(t){return t})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Jn;D.Fragment=dp;D.Profiler=pp;D.PureComponent=Hl;D.StrictMode=mp;D.Suspense=yp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=$l.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)rf.call(t,s)&&!af.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Jr,type:e.type,key:a,ref:i,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hp,_context:e},e.Consumer=e};D.createElement=of;D.createFactory=function(e){var t=of.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:vp,render:e}};D.isValidElement=Ql;D.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:xp}};D.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Da.transition;Da.transition={};try{e()}finally{Da.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return ve.current.useCallback(e,t)};D.useContext=function(e){return ve.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};D.useEffect=function(e,t){return ve.current.useEffect(e,t)};D.useId=function(){return ve.current.useId()};D.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ve.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};D.useRef=function(e){return ve.current.useRef(e)};D.useState=function(e){return ve.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ve.current.useTransition()};D.version="18.2.0";Kc.exports=D;var x=Kc.exports;const Ri=$c(x),Pp=cp({__proto__:null,default:Ri},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=x,Ep=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),Rp=Object.prototype.hasOwnProperty,Ip=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tp={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Rp.call(t,r)&&!Tp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ep,type:e,key:i,ref:o,props:a,_owner:Ip.current}}Ni.Fragment=Np;Ni.jsx=lf;Ni.jsxs=lf;Qc.exports=Ni;var b=Qc.exports,Do={},sf={exports:{}},Ne={},uf={exports:{}},cf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,j){var F=I.length;I.push(j);e:for(;0<F;){var K=F-1>>>1,ie=I[K];if(0<a(ie,j))I[K]=j,I[F]=ie,F=K;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var j=I[0],F=I.pop();if(F!==j){I[0]=F;e:for(var K=0,ie=I.length,sa=ie>>>1;K<sa;){var Ut=2*(K+1)-1,to=I[Ut],Xt=Ut+1,ua=I[Xt];if(0>a(to,F))Xt<ie&&0>a(ua,to)?(I[K]=ua,I[Xt]=F,K=Xt):(I[K]=to,I[Ut]=F,K=Ut);else if(Xt<ie&&0>a(ua,F))I[K]=ua,I[Xt]=F,K=Xt;else break e}}return j}function a(I,j){var F=I.sortIndex-j.sortIndex;return F!==0?F:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,h=3,g=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=I)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function w(I){if(v=!1,p(I),!y)if(n(s)!==null)y=!0,qi(_);else{var j=n(u);j!==null&&eo(w,j.startTime-I)}}function _(I,j){y=!1,v&&(v=!1,m(L),L=-1),g=!0;var F=h;try{for(p(j),d=n(s);d!==null&&(!(d.expirationTime>j)||I&&!J());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var ie=K(d.expirationTime<=j);j=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(s)&&r(s),p(j)}else r(s);d=n(s)}if(d!==null)var sa=!0;else{var Ut=n(u);Ut!==null&&eo(w,Ut.startTime-j),sa=!1}return sa}finally{d=null,h=F,g=!1}}var C=!1,P=null,L=-1,A=5,E=-1;function J(){return!(e.unstable_now()-E<A)}function ht(){if(P!==null){var I=e.unstable_now();E=I;var j=!0;try{j=P(!0,I)}finally{j?qn():(C=!1,P=null)}}else C=!1}var qn;if(typeof c=="function")qn=function(){c(ht)};else if(typeof MessageChannel<"u"){var iu=new MessageChannel,up=iu.port2;iu.port1.onmessage=ht,qn=function(){up.postMessage(null)}}else qn=function(){S(ht,0)};function qi(I){P=I,C||(C=!0,qn())}function eo(I,j){L=S(function(){I(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,qi(_))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var F=h;h=j;try{return I()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=h;h=I;try{return j()}finally{h=F}},e.unstable_scheduleCallback=function(I,j,F){var K=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?K+F:K):F=K,I){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=F+ie,I={id:f++,callback:j,priorityLevel:I,startTime:F,expirationTime:ie,sortIndex:-1},F>K?(I.sortIndex=F,t(u,I),n(s)===null&&I===n(u)&&(v?(m(L),L=-1):v=!0,eo(w,F-K))):(I.sortIndex=ie,t(s,I),y||g||(y=!0,qi(_))),I},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(I){var j=h;return function(){var F=h;h=j;try{return I.apply(this,arguments)}finally{h=F}}}})(cf);uf.exports=cf;var Lp=uf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=x,Ee=Lp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var df=new Set,Pr={};function mn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Pr[e]=t,e=0;e<t.length;e++)df.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},cu={};function Fp(e){return zo.call(cu,e)?!0:zo.call(uu,e)?!1:jp.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function Mp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,r){if(t===null||typeof t>"u"||Mp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kl=/[\-:]([a-z])/g;function ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kl,ql);ce[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kl,ql);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kl,ql);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,t,n,r){var a=ce.hasOwnProperty(t)?ce[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,a,r)&&(n=null),r||a===null?Fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),wn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),pf=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),Wo=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),hf=Symbol.for("react.offscreen"),fu=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=fu&&e[fu]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ro;function cr(e){if(ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ro=t&&t[1]||""}return`
`+ro+e}var ao=!1;function io(e,t){if(!e||ao)return"";ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{ao=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function zp(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=io(e.type,!1),e;case 11:return e=io(e.type.render,!1),e;case 1:return e=io(e.type,!0),e;default:return""}}function Go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case wn:return"Portal";case Oo:return"Profiler";case ts:return"StrictMode";case Wo:return"Suspense";case Bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pf:return(e.displayName||"Context")+".Consumer";case mf:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return t=e.displayName||null,t!==null?t:Go(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return Go(e(t))}catch{}}return null}function Op(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Go(t);case 8:return t===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wp(e){var t=gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function da(e){e._valueTracker||(e._valueTracker=Wp(e))}function vf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yo(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function du(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yf(e,t){t=t.checked,t!=null&&es(e,"checked",t,!1)}function Vo(e,t){yf(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Uo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Uo(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uo(e,t,n){(t!=="number"||Qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Xo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(fr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function wf(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,_f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function kf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Sf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=kf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Gp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ho(e,t){if(t){if(Gp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Jo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function as(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,Fn=null,Mn=null;function gu(e){if(e=Kr(e)){if(typeof Qo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Fi(t),Qo(e.stateNode,e.type,t))}}function xf(e){Fn?Mn?Mn.push(e):Mn=[e]:Fn=e}function Cf(){if(Fn){var e=Fn,t=Mn;if(Mn=Fn=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function Pf(e,t){return e(t)}function Af(){}var oo=!1;function Ef(e,t,n){if(oo)return e(t,n);oo=!0;try{return Pf(e,t,n)}finally{oo=!1,(Fn!==null||Mn!==null)&&(Af(),Cf())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=Fi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ko=!1;if(ot)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Ko=!1}function Yp(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var gr=!1,Ka=null,qa=!1,qo=null,Vp={onError:function(e){gr=!0,Ka=e}};function Up(e,t,n,r,a,i,o,l,s){gr=!1,Ka=null,Yp.apply(Vp,arguments)}function Xp(e,t,n,r,a,i,o,l,s){if(Up.apply(this,arguments),gr){if(gr){var u=Ka;gr=!1,Ka=null}else throw Error(k(198));qa||(qa=!0,qo=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vu(e){if(pn(e)!==e)throw Error(k(188))}function Zp(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return vu(a),e;if(i===r)return vu(a),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Rf(e){return e=Zp(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var Tf=Ee.unstable_scheduleCallback,yu=Ee.unstable_cancelCallback,Hp=Ee.unstable_shouldYield,Jp=Ee.unstable_requestPaint,q=Ee.unstable_now,$p=Ee.unstable_getCurrentPriorityLevel,is=Ee.unstable_ImmediatePriority,Lf=Ee.unstable_UserBlockingPriority,ei=Ee.unstable_NormalPriority,Qp=Ee.unstable_LowPriority,jf=Ee.unstable_IdlePriority,Ii=null,Ke=null;function Kp(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:th,qp=Math.log,eh=Math.LN2;function th(e){return e>>>=0,e===0?32:31-(qp(e)/eh|0)|0}var pa=64,ha=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=dr(l):(i&=o,i!==0&&(r=dr(i)))}else o=n&~a,o!==0?r=dr(o):i!==0&&(r=dr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),a=1<<n,r|=e[n],t&=~a;return r}function nh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ve(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=nh(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ff(){var e=pa;return pa<<=1,!(pa&4194240)&&(pa=64),e}function lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function ah(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ve(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var O=0;function Mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Df,ls,zf,Of,Wf,tl=!1,ga=[],At=null,Et=null,Nt=null,Nr=new Map,Rr=new Map,_t=[],ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function nr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Kr(t),t!==null&&ls(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function oh(e,t,n,r,a){switch(t){case"focusin":return At=nr(At,e,t,n,r,a),!0;case"dragenter":return Et=nr(Et,e,t,n,r,a),!0;case"mouseover":return Nt=nr(Nt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Nr.set(i,nr(Nr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Rr.set(i,nr(Rr.get(i)||null,e,t,n,r,a)),!0}return!1}function Bf(e){var t=Qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nf(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$o=r,n.target.dispatchEvent(r),$o=null}else return t=Kr(n),t!==null&&ls(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){za(e)&&n.delete(t)}function lh(){tl=!1,At!==null&&za(At)&&(At=null),Et!==null&&za(Et)&&(Et=null),Nt!==null&&za(Nt)&&(Nt=null),Nr.forEach(bu),Rr.forEach(bu)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,lh)))}function Ir(e){function t(a){return rr(a,e)}if(0<ga.length){rr(ga[0],e);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&rr(At,e),Et!==null&&rr(Et,e),Nt!==null&&rr(Nt,e),Nr.forEach(t),Rr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Bf(n),n.blockedOn===null&&_t.shift()}var Dn=mt.ReactCurrentBatchConfig,ni=!0;function sh(e,t,n,r){var a=O,i=Dn.transition;Dn.transition=null;try{O=1,ss(e,t,n,r)}finally{O=a,Dn.transition=i}}function uh(e,t,n,r){var a=O,i=Dn.transition;Dn.transition=null;try{O=4,ss(e,t,n,r)}finally{O=a,Dn.transition=i}}function ss(e,t,n,r){if(ni){var a=nl(e,t,n,r);if(a===null)yo(e,t,r,ri,n),wu(e,r);else if(oh(a,e,t,n,r))r.stopPropagation();else if(wu(e,r),t&4&&-1<ih.indexOf(e)){for(;a!==null;){var i=Kr(a);if(i!==null&&Df(i),i=nl(e,t,n,r),i===null&&yo(e,t,r,ri,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else yo(e,t,r,null,n)}}var ri=null;function nl(e,t,n,r){if(ri=null,e=as(r),e=Qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ri=e,null}function Gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($p()){case is:return 1;case Lf:return 4;case ei:case Qp:return 16;case jf:return 536870912;default:return 16}default:return 16}}var St=null,us=null,Oa=null;function Yf(){if(Oa)return Oa;var e,t=us,n=t.length,r,a="value"in St?St.value:St.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Oa=a.slice(e,1<r?1-r:void 0)}function Wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function _u(){return!1}function Re(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?va:_u,this.isPropagationStopped=_u,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Re($n),Qr=H({},$n,{view:0,detail:0}),ch=Re(Qr),so,uo,ar,Ti=H({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(so=e.screenX-ar.screenX,uo=e.screenY-ar.screenY):uo=so=0,ar=e),so)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),ku=Re(Ti),fh=H({},Ti,{dataTransfer:0}),dh=Re(fh),mh=H({},Qr,{relatedTarget:0}),co=Re(mh),ph=H({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),hh=Re(ph),gh=H({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vh=Re(gh),yh=H({},$n,{data:0}),Su=Re(yh),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_h[e])?!!t[e]:!1}function fs(){return kh}var Sh=H({},Qr,{key:function(e){if(e.key){var t=wh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?Wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xh=Re(Sh),Ch=H({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Re(Ch),Ph=H({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),Ah=Re(Ph),Eh=H({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nh=Re(Eh),Rh=H({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ih=Re(Rh),Th=[9,13,27,32],ds=ot&&"CompositionEvent"in window,vr=null;ot&&"documentMode"in document&&(vr=document.documentMode);var Lh=ot&&"TextEvent"in window&&!vr,Vf=ot&&(!ds||vr&&8<vr&&11>=vr),Cu=String.fromCharCode(32),Pu=!1;function Uf(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function jh(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(Pu=!0,Cu);case"textInput":return e=t.data,e===Cu&&Pu?null:e;default:return null}}function Fh(e,t){if(_n)return e==="compositionend"||!ds&&Uf(e,t)?(e=Yf(),Oa=us=St=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vf&&t.locale!=="ko"?null:t.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mh[e.type]:t==="textarea"}function Zf(e,t,n,r){xf(r),t=ai(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Tr=null;function Dh(e){ad(e,0)}function Li(e){var t=xn(e);if(vf(t))return e}function zh(e,t){if(e==="change")return t}var Hf=!1;if(ot){var fo;if(ot){var mo="oninput"in document;if(!mo){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),mo=typeof Eu.oninput=="function"}fo=mo}else fo=!1;Hf=fo&&(!document.documentMode||9<document.documentMode)}function Nu(){yr&&(yr.detachEvent("onpropertychange",Jf),Tr=yr=null)}function Jf(e){if(e.propertyName==="value"&&Li(Tr)){var t=[];Zf(t,Tr,e,as(e)),Ef(Dh,t)}}function Oh(e,t,n){e==="focusin"?(Nu(),yr=t,Tr=n,yr.attachEvent("onpropertychange",Jf)):e==="focusout"&&Nu()}function Wh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Tr)}function Bh(e,t){if(e==="click")return Li(t)}function Gh(e,t){if(e==="input"||e==="change")return Li(t)}function Yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Yh;function Lr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!zo.call(t,a)||!Xe(e[a],t[a]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var n=Ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ru(n)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qf(){for(var e=window,t=Qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qa(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vh(e){var t=Qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$f(n.ownerDocument.documentElement,n)){if(r!==null&&ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Iu(n,i);var o=Iu(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uh=ot&&"documentMode"in document&&11>=document.documentMode,kn=null,rl=null,wr=null,al=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||kn==null||kn!==Qa(r)||(r=kn,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Lr(wr,r)||(wr=r,r=ai(rl,"onSelect"),0<r.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},po={},Kf={};ot&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function ji(e){if(po[e])return po[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return po[e]=t[n];return e}var qf=ji("animationend"),ed=ji("animationiteration"),td=ji("animationstart"),nd=ji("transitionend"),rd=new Map,Lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){rd.set(e,t),mn(t,[e])}for(var ho=0;ho<Lu.length;ho++){var go=Lu[ho],Xh=go.toLowerCase(),Zh=go[0].toUpperCase()+go.slice(1);Bt(Xh,"on"+Zh)}Bt(qf,"onAnimationEnd");Bt(ed,"onAnimationIteration");Bt(td,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(nd,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function ju(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xp(r,t,void 0,e),e.currentTarget=null}function ad(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;ju(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;ju(a,l,u),i=s}}}if(qa)throw e=qo,qa=!1,qo=null,e}function B(e,t){var n=t[ul];n===void 0&&(n=t[ul]=new Set);var r=e+"__bubble";n.has(r)||(id(t,e,2,!1),n.add(r))}function vo(e,t,n){var r=0;t&&(r|=4),id(n,e,r,t)}var wa="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[wa]){e[wa]=!0,df.forEach(function(n){n!=="selectionchange"&&(Hh.has(n)||vo(n,!1,e),vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wa]||(t[wa]=!0,vo("selectionchange",!1,t))}}function id(e,t,n,r){switch(Gf(t)){case 1:var a=sh;break;case 4:a=uh;break;default:a=ss}n=a.bind(null,t,n,e),a=void 0,!Ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function yo(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Qt(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Ef(function(){var u=i,f=as(n),d=[];e:{var h=rd.get(e);if(h!==void 0){var g=cs,y=e;switch(e){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":g=xh;break;case"focusin":y="focus",g=co;break;case"focusout":y="blur",g=co;break;case"beforeblur":case"afterblur":g=co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=dh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ah;break;case qf:case ed:case td:g=hh;break;case nd:g=Nh;break;case"scroll":g=ch;break;case"wheel":g=Ih;break;case"copy":case"cut":case"paste":g=vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xu}var v=(t&4)!==0,S=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=Er(c,m),w!=null&&v.push(Fr(c,w,p)))),S)break;c=c.return}0<v.length&&(h=new g(h,y,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==$o&&(y=n.relatedTarget||n.fromElement)&&(Qt(y)||y[lt]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Qt(y):null,y!==null&&(S=pn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=ku,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=xu,w="onPointerLeave",m="onPointerEnter",c="pointer"),S=g==null?h:xn(g),p=y==null?h:xn(y),h=new v(w,c+"leave",g,n,f),h.target=S,h.relatedTarget=p,w=null,Qt(f)===u&&(v=new v(m,c+"enter",y,n,f),v.target=p,v.relatedTarget=S,w=v),S=w,g&&y)t:{for(v=g,m=y,c=0,p=v;p;p=vn(p))c++;for(p=0,w=m;w;w=vn(w))p++;for(;0<c-p;)v=vn(v),c--;for(;0<p-c;)m=vn(m),p--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=vn(v),m=vn(m)}v=null}else v=null;g!==null&&Fu(d,h,g,v,!1),y!==null&&S!==null&&Fu(d,S,y,v,!0)}}e:{if(h=u?xn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var _=zh;else if(Au(h))if(Hf)_=Gh;else{_=Wh;var C=Oh}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Bh);if(_&&(_=_(e,u))){Zf(d,_,n,f);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Uo(h,"number",h.value)}switch(C=u?xn(u):window,e){case"focusin":(Au(C)||C.contentEditable==="true")&&(kn=C,rl=u,wr=null);break;case"focusout":wr=rl=kn=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Tu(d,n,f);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":Tu(d,n,f)}var P;if(ds)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else _n?Uf(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Vf&&n.locale!=="ko"&&(_n||L!=="onCompositionStart"?L==="onCompositionEnd"&&_n&&(P=Yf()):(St=f,us="value"in St?St.value:St.textContent,_n=!0)),C=ai(u,L),0<C.length&&(L=new Su(L,e,null,n,f),d.push({event:L,listeners:C}),P?L.data=P:(P=Xf(n),P!==null&&(L.data=P)))),(P=Lh?jh(e,n):Fh(e,n))&&(u=ai(u,"onBeforeInput"),0<u.length&&(f=new Su("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=P))}ad(d,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Er(e,n),i!=null&&r.unshift(Fr(e,i,a)),i=Er(e,t),i!=null&&r.push(Fr(e,i,a))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fu(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Er(n,i),s!=null&&o.unshift(Fr(n,s,l))):a||(s=Er(n,i),s!=null&&o.push(Fr(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function Mu(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace($h,"")}function ba(e,t,n){if(t=Mu(t),Mu(e)!==t&&n)throw Error(k(425))}function ii(){}var il=null,ol=null;function ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,Qh=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,Kh=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(qh)}:sl;function qh(e){setTimeout(function(){throw e})}function wo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ir(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Qn,Mr="__reactProps$"+Qn,lt="__reactContainer$"+Qn,ul="__reactEvents$"+Qn,e1="__reactListeners$"+Qn,t1="__reactHandles$"+Qn;function Qt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zu(e);e!==null;){if(n=e[$e])return n;e=zu(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[$e]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Fi(e){return e[Mr]||null}var cl=[],Cn=-1;function Gt(e){return{current:e}}function Y(e){0>Cn||(e.current=cl[Cn],cl[Cn]=null,Cn--)}function W(e,t){Cn++,cl[Cn]=e.current,e.current=t}var Dt={},pe=Gt(Dt),_e=Gt(!1),an=Dt;function Gn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ke(e){return e=e.childContextTypes,e!=null}function oi(){Y(_e),Y(pe)}function Ou(e,t,n){if(pe.current!==Dt)throw Error(k(168));W(pe,t),W(_e,n)}function od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(k(108,Op(e)||"Unknown",a));return H({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,an=pe.current,W(pe,e),W(_e,_e.current),!0}function Wu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=od(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,Y(_e),Y(pe),W(pe,e)):Y(_e),W(_e,n)}var nt=null,Mi=!1,bo=!1;function ld(e){nt===null?nt=[e]:nt.push(e)}function n1(e){Mi=!0,ld(e)}function Yt(){if(!bo&&nt!==null){bo=!0;var e=0,t=O;try{var n=nt;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Mi=!1}catch(a){throw nt!==null&&(nt=nt.slice(e+1)),Tf(is,Yt),a}finally{O=t,bo=!1}}return null}var Pn=[],An=0,si=null,ui=0,Te=[],Le=0,on=null,rt=1,at="";function Jt(e,t){Pn[An++]=ui,Pn[An++]=si,si=e,ui=t}function sd(e,t,n){Te[Le++]=rt,Te[Le++]=at,Te[Le++]=on,on=e;var r=rt;e=at;var a=32-Ve(r)-1;r&=~(1<<a),n+=1;var i=32-Ve(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,rt=1<<32-Ve(t)+a|n<<a|r,at=i+e}else rt=1<<i|n<<a|r,at=e}function ps(e){e.return!==null&&(Jt(e,1),sd(e,1,0))}function hs(e){for(;e===si;)si=Pn[--An],Pn[An]=null,ui=Pn[--An],Pn[An]=null;for(;e===on;)on=Te[--Le],Te[Le]=null,at=Te[--Le],Te[Le]=null,rt=Te[--Le],Te[Le]=null}var Ae=null,Pe=null,U=!1,Ge=null;function ud(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Pe=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:rt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Pe=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(U){var t=Pe;if(t){var n=t;if(!Bu(e,t)){if(fl(e))throw Error(k(418));t=Rt(n.nextSibling);var r=Ae;t&&Bu(e,t)?ud(r,n):(e.flags=e.flags&-4097|2,U=!1,Ae=e)}}else{if(fl(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,Ae=e}}}function Gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function _a(e){if(e!==Ae)return!1;if(!U)return Gu(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ll(e.type,e.memoizedProps)),t&&(t=Pe)){if(fl(e))throw cd(),Error(k(418));for(;t;)ud(e,t),t=Rt(t.nextSibling)}if(Gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Ae?Rt(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=Pe;e;)e=Rt(e.nextSibling)}function Yn(){Pe=Ae=null,U=!1}function gs(e){Ge===null?Ge=[e]:Ge.push(e)}var r1=mt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ci=Gt(null),fi=null,En=null,vs=null;function ys(){vs=En=fi=null}function ws(e){var t=ci.current;Y(ci),e._currentValue=t}function ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){fi=e,vs=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(vs!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(fi===null)throw Error(k(308));En=e,fi.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Kt=null;function bs(e){Kt===null?Kt=[e]:Kt.push(e)}function fd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,bs(t)):(n.next=a.next,a.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function _s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,st(e,n)}return a=r.interleaved,a===null?(t.next=t,bs(r)):(t.next=a.next,a.next=t),r.interleaved=t,st(e,n)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}function Yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function di(e,t,n,r){var a=e.updateQueue;bt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=a.baseState;o=0,f=u=s=null,l=i;do{var h=l.lane,g=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(h=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=H({},d,h);break e;case 2:bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,s=d):f=f.next=g,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);sn|=o,e.lanes=o,e.memoizedState=d}}function Vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(k(191,a));a.call(r)}}}var md=new ff.Component().refs;function pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Di={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),a=Lt(e),i=it(r,a);i.payload=t,n!=null&&(i.callback=n),t=It(e,i,a),t!==null&&(Ue(t,e,a,r),Ba(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),a=Lt(e),i=it(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=It(e,i,a),t!==null&&(Ue(t,e,a,r),Ba(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Lt(e),a=it(n,r);a.tag=2,t!=null&&(a.callback=t),t=It(e,a,r),t!==null&&(Ue(t,e,r,n),Ba(t,e,r))}};function Uu(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(a,i):!0}function pd(e,t,n){var r=!1,a=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=De(i):(a=ke(t)?an:pe.current,r=t.contextTypes,i=(r=r!=null)?Gn(e,a):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function hl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=md,_s(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=De(i):(i=ke(t)?an:pe.current,a.context=Gn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(pl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Di.enqueueReplaceState(a,a.state,null),di(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===md&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zu(e){var t=e._init;return t(e._payload)}function hd(e){function t(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function a(m,c){return m=jt(m,c),m.index=0,m.sibling=null,m}function i(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,p,w){return c===null||c.tag!==6?(c=Ao(p,m.mode,w),c.return=m,c):(c=a(c,p),c.return=m,c)}function s(m,c,p,w){var _=p.type;return _===bn?f(m,c,p.props.children,w,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===wt&&Zu(_)===c.type)?(w=a(c,p.props),w.ref=ir(m,c,p),w.return=m,w):(w=Za(p.type,p.key,p.props,null,m.mode,w),w.ref=ir(m,c,p),w.return=m,w)}function u(m,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Eo(p,m.mode,w),c.return=m,c):(c=a(c,p.children||[]),c.return=m,c)}function f(m,c,p,w,_){return c===null||c.tag!==7?(c=rn(p,m.mode,w,_),c.return=m,c):(c=a(c,p),c.return=m,c)}function d(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ao(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fa:return p=Za(c.type,c.key,c.props,null,m.mode,p),p.ref=ir(m,null,c),p.return=m,p;case wn:return c=Eo(c,m.mode,p),c.return=m,c;case wt:var w=c._init;return d(m,w(c._payload),p)}if(fr(c)||er(c))return c=rn(c,m.mode,p,null),c.return=m,c;ka(m,c)}return null}function h(m,c,p,w){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:l(m,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fa:return p.key===_?s(m,c,p,w):null;case wn:return p.key===_?u(m,c,p,w):null;case wt:return _=p._init,h(m,c,_(p._payload),w)}if(fr(p)||er(p))return _!==null?null:f(m,c,p,w,null);ka(m,p)}return null}function g(m,c,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,l(c,m,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fa:return m=m.get(w.key===null?p:w.key)||null,s(c,m,w,_);case wn:return m=m.get(w.key===null?p:w.key)||null,u(c,m,w,_);case wt:var C=w._init;return g(m,c,p,C(w._payload),_)}if(fr(w)||er(w))return m=m.get(p)||null,f(c,m,w,_,null);ka(c,w)}return null}function y(m,c,p,w){for(var _=null,C=null,P=c,L=c=0,A=null;P!==null&&L<p.length;L++){P.index>L?(A=P,P=null):A=P.sibling;var E=h(m,P,p[L],w);if(E===null){P===null&&(P=A);break}e&&P&&E.alternate===null&&t(m,P),c=i(E,c,L),C===null?_=E:C.sibling=E,C=E,P=A}if(L===p.length)return n(m,P),U&&Jt(m,L),_;if(P===null){for(;L<p.length;L++)P=d(m,p[L],w),P!==null&&(c=i(P,c,L),C===null?_=P:C.sibling=P,C=P);return U&&Jt(m,L),_}for(P=r(m,P);L<p.length;L++)A=g(P,m,L,p[L],w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?L:A.key),c=i(A,c,L),C===null?_=A:C.sibling=A,C=A);return e&&P.forEach(function(J){return t(m,J)}),U&&Jt(m,L),_}function v(m,c,p,w){var _=er(p);if(typeof _!="function")throw Error(k(150));if(p=_.call(p),p==null)throw Error(k(151));for(var C=_=null,P=c,L=c=0,A=null,E=p.next();P!==null&&!E.done;L++,E=p.next()){P.index>L?(A=P,P=null):A=P.sibling;var J=h(m,P,E.value,w);if(J===null){P===null&&(P=A);break}e&&P&&J.alternate===null&&t(m,P),c=i(J,c,L),C===null?_=J:C.sibling=J,C=J,P=A}if(E.done)return n(m,P),U&&Jt(m,L),_;if(P===null){for(;!E.done;L++,E=p.next())E=d(m,E.value,w),E!==null&&(c=i(E,c,L),C===null?_=E:C.sibling=E,C=E);return U&&Jt(m,L),_}for(P=r(m,P);!E.done;L++,E=p.next())E=g(P,m,L,E.value,w),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?L:E.key),c=i(E,c,L),C===null?_=E:C.sibling=E,C=E);return e&&P.forEach(function(ht){return t(m,ht)}),U&&Jt(m,L),_}function S(m,c,p,w){if(typeof p=="object"&&p!==null&&p.type===bn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fa:e:{for(var _=p.key,C=c;C!==null;){if(C.key===_){if(_=p.type,_===bn){if(C.tag===7){n(m,C.sibling),c=a(C,p.props.children),c.return=m,m=c;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===wt&&Zu(_)===C.type){n(m,C.sibling),c=a(C,p.props),c.ref=ir(m,C,p),c.return=m,m=c;break e}n(m,C);break}else t(m,C);C=C.sibling}p.type===bn?(c=rn(p.props.children,m.mode,w,p.key),c.return=m,m=c):(w=Za(p.type,p.key,p.props,null,m.mode,w),w.ref=ir(m,c,p),w.return=m,m=w)}return o(m);case wn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(m,c.sibling),c=a(c,p.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=Eo(p,m.mode,w),c.return=m,m=c}return o(m);case wt:return C=p._init,S(m,c,C(p._payload),w)}if(fr(p))return y(m,c,p,w);if(er(p))return v(m,c,p,w);ka(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(m,c.sibling),c=a(c,p),c.return=m,m=c):(n(m,c),c=Ao(p,m.mode,w),c.return=m,m=c),o(m)):n(m,c)}return S}var Vn=hd(!0),gd=hd(!1),qr={},qe=Gt(qr),Dr=Gt(qr),zr=Gt(qr);function qt(e){if(e===qr)throw Error(k(174));return e}function ks(e,t){switch(W(zr,t),W(Dr,e),W(qe,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zo(t,e)}Y(qe),W(qe,t)}function Un(){Y(qe),Y(Dr),Y(zr)}function vd(e){qt(zr.current);var t=qt(qe.current),n=Zo(t,e.type);t!==n&&(W(Dr,e),W(qe,n))}function Ss(e){Dr.current===e&&(Y(qe),Y(Dr))}var X=Gt(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function xs(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var Ga=mt.ReactCurrentDispatcher,ko=mt.ReactCurrentBatchConfig,ln=0,Z=null,ne=null,oe=null,pi=!1,br=!1,Or=0,a1=0;function fe(){throw Error(k(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,a,i){if(ln=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?s1:u1,e=n(r,a),br){i=0;do{if(br=!1,Or=0,25<=i)throw Error(k(301));i+=1,oe=ne=null,t.updateQueue=null,Ga.current=c1,e=n(r,a)}while(br)}if(Ga.current=hi,t=ne!==null&&ne.next!==null,ln=0,oe=ne=Z=null,pi=!1,t)throw Error(k(300));return e}function As(){var e=Or!==0;return Or=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Z.memoizedState=oe=e:oe=oe.next=e,oe}function ze(){if(ne===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?Z.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Z.memoizedState=oe=e:oe=oe.next=e}return oe}function Wr(e,t){return typeof t=="function"?t(e):t}function So(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((ln&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,Z.lanes|=f,sn|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,Xe(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,Z.lanes|=i,sn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xo(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Xe(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yd(){}function wd(e,t){var n=Z,r=ze(),a=t(),i=!Xe(r.memoizedState,a);if(i&&(r.memoizedState=a,be=!0),r=r.queue,Es(kd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Br(9,_d.bind(null,n,r,a,t),void 0,null),le===null)throw Error(k(349));ln&30||bd(n,t,a)}return a}function bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,r){t.value=n,t.getSnapshot=r,Sd(t)&&xd(e)}function kd(e,t,n){return n(function(){Sd(t)&&xd(e)})}function Sd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function xd(e){var t=st(e,1);t!==null&&Ue(t,e,1,-1)}function Hu(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=l1.bind(null,Z,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cd(){return ze().memoizedState}function Ya(e,t,n,r){var a=Je();Z.flags|=e,a.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function zi(e,t,n,r){var a=ze();r=r===void 0?null:r;var i=void 0;if(ne!==null){var o=ne.memoizedState;if(i=o.destroy,r!==null&&Cs(r,o.deps)){a.memoizedState=Br(t,n,i,r);return}}Z.flags|=e,a.memoizedState=Br(1|t,n,i,r)}function Ju(e,t){return Ya(8390656,8,e,t)}function Es(e,t){return zi(2048,8,e,t)}function Pd(e,t){return zi(4,2,e,t)}function Ad(e,t){return zi(4,4,e,t)}function Ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,zi(4,4,Ed.bind(null,t,e),n)}function Ns(){}function Rd(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Id(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return ln&21?(Xe(n,t)||(n=Ff(),Z.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function i1(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ko.transition;ko.transition={};try{e(!1),t()}finally{O=n,ko.transition=r}}function Ld(){return ze().memoizedState}function o1(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jd(e))Fd(t,n);else if(n=fd(e,t,n,r),n!==null){var a=ge();Ue(n,e,r,a),Md(n,t,r)}}function l1(e,t,n){var r=Lt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jd(e))Fd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Xe(l,o)){var s=t.interleaved;s===null?(a.next=a,bs(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=fd(e,t,a,r),n!==null&&(a=ge(),Ue(n,e,r,a),Md(n,t,r))}}function jd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Fd(e,t){br=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Md(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}var hi={readContext:De,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},s1={readContext:De,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4194308,4,Ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ya(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=o1.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Hu,useDebugValue:Ns,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Hu(!1),t=e[0];return e=i1.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,a=Je();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),le===null)throw Error(k(349));ln&30||bd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ju(kd.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,_d.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=le.identifierPrefix;if(U){var n=at,r=rt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u1={readContext:De,useCallback:Rd,useContext:De,useEffect:Es,useImperativeHandle:Nd,useInsertionEffect:Pd,useLayoutEffect:Ad,useMemo:Id,useReducer:So,useRef:Cd,useState:function(){return So(Wr)},useDebugValue:Ns,useDeferredValue:function(e){var t=ze();return Td(t,ne.memoizedState,e)},useTransition:function(){var e=So(Wr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:wd,useId:Ld,unstable_isNewReconciler:!1},c1={readContext:De,useCallback:Rd,useContext:De,useEffect:Es,useImperativeHandle:Nd,useInsertionEffect:Pd,useLayoutEffect:Ad,useMemo:Id,useReducer:xo,useRef:Cd,useState:function(){return xo(Wr)},useDebugValue:Ns,useDeferredValue:function(e){var t=ze();return ne===null?t.memoizedState=e:Td(t,ne.memoizedState,e)},useTransition:function(){var e=xo(Wr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:wd,useId:Ld,unstable_isNewReconciler:!1};function Xn(e,t){try{var n="",r=t;do n+=zp(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var f1=typeof WeakMap=="function"?WeakMap:Map;function Dd(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,Pl=r),gl(e,t)},n}function zd(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){gl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){gl(e,t),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new f1;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=C1.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ku(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var d1=mt.ReactCurrentOwner,be=!1;function he(e,t,n,r){t.child=e===null?gd(t,null,n,r):Vn(t,e.child,n,r)}function qu(e,t,n,r,a){n=n.render;var i=t.ref;return zn(t,a),r=Ps(e,t,n,r,i,a),n=As(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ut(e,t,a)):(U&&n&&ps(t),t.flags|=1,he(e,t,r,a),t.child)}function ec(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Ds(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Od(e,t,i,r,a)):(e=Za(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(o,r)&&e.ref===t.ref)return ut(e,t,a)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Lr(i,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,ut(e,t,a)}return vl(e,t,n,r,a)}function Wd(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Rn,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Rn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Rn,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Rn,xe),xe|=r;return he(e,t,a,n),t.child}function Bd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vl(e,t,n,r,a){var i=ke(n)?an:pe.current;return i=Gn(t,i),zn(t,a),n=Ps(e,t,n,r,i,a),r=As(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ut(e,t,a)):(U&&r&&ps(t),t.flags|=1,he(e,t,n,a),t.child)}function tc(e,t,n,r,a){if(ke(n)){var i=!0;li(t)}else i=!1;if(zn(t,a),t.stateNode===null)Va(e,t),pd(t,n,r),hl(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=De(u):(u=ke(n)?an:pe.current,u=Gn(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Xu(t,o,r,u),bt=!1;var h=t.memoizedState;o.state=h,di(t,r,o,a),s=t.memoizedState,l!==r||h!==s||_e.current||bt?(typeof f=="function"&&(pl(t,n,f,r),s=t.memoizedState),(l=bt||Uu(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,dd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:We(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=ke(n)?an:pe.current,s=Gn(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Xu(t,o,r,s),bt=!1,h=t.memoizedState,o.state=h,di(t,r,o,a);var y=t.memoizedState;l!==d||h!==y||_e.current||bt?(typeof g=="function"&&(pl(t,n,g,r),y=t.memoizedState),(u=bt||Uu(t,n,u,r,h,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return yl(e,t,n,r,i,a)}function yl(e,t,n,r,a,i){Bd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Wu(t,n,!1),ut(e,t,i);r=t.stateNode,d1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Vn(t,e.child,null,i),t.child=Vn(t,null,l,i)):he(e,t,l,i),t.memoizedState=r.state,a&&Wu(t,n,!0),t.child}function Gd(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),ks(e,t.containerInfo)}function nc(e,t,n,r,a){return Yn(),gs(a),t.flags|=256,he(e,t,n,r),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yd(e,t,n){var r=t.pendingProps,a=X.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(X,a&1),e===null)return dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Bi(o,r,0,null),e=rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bl(n),t.memoizedState=wl,e):Rs(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return m1(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=jt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=jt(l,i):(i=rn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?bl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=wl,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rs(e,t){return t=Bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sa(e,t,n,r){return r!==null&&gs(r),Vn(t,e.child,null,n),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m1(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Co(Error(k(422))),Sa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Bi({mode:"visible",children:r.children},a,0,null),i=rn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Vn(t,e.child,null,o),t.child.memoizedState=bl(o),t.memoizedState=wl,i);if(!(t.mode&1))return Sa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(k(419)),r=Co(i,r,void 0),Sa(e,t,o,r)}if(l=(o&e.childLanes)!==0,be||l){if(r=le,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,st(e,a),Ue(r,e,a,-1))}return Ms(),r=Co(Error(k(421))),Sa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=P1.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Pe=Rt(a.nextSibling),Ae=t,U=!0,Ge=null,e!==null&&(Te[Le++]=rt,Te[Le++]=at,Te[Le++]=on,rt=e.id,at=e.overflow,on=t),t=Rs(t,r.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ml(e.return,t,n)}function Po(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Vd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(he(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Po(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&mi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Po(t,!0,n,null,i);break;case"together":Po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Va(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p1(e,t,n){switch(t.tag){case 3:Gd(t),Yn();break;case 5:vd(t);break;case 1:ke(t.type)&&li(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;W(ci,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Yd(e,t,n):(W(X,X.current&1),e=ut(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Wd(e,t,n)}return ut(e,t,n)}var Ud,_l,Xd,Zd;Ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_l=function(){};Xd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qt(qe.current);var i=null;switch(n){case"input":a=Yo(e,a),r=Yo(e,r),i=[];break;case"select":a=H({},a,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":a=Xo(e,a),r=Xo(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ii)}Ho(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&B("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Zd=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h1(e,t,n){var r=t.pendingProps;switch(hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&oi(),de(t),null;case 3:return r=t.stateNode,Un(),Y(_e),Y(pe),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(Nl(Ge),Ge=null))),_l(e,t),de(t),null;case 5:Ss(t);var a=qt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Xd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return de(t),null}if(e=qt(qe.current),_a(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[$e]=t,r[Mr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(a=0;a<mr.length;a++)B(mr[a],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":du(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":pu(r,i),B("invalid",r)}Ho(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),a=["children",""+l]):Pr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":da(r),mu(r,i,!0);break;case"textarea":da(r),hu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ii)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$e]=t,e[Mr]=r,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(o=Jo(n,r),n){case"dialog":B("cancel",e),B("close",e),a=r;break;case"iframe":case"object":case"embed":B("load",e),a=r;break;case"video":case"audio":for(a=0;a<mr.length;a++)B(mr[a],e);a=r;break;case"source":B("error",e),a=r;break;case"img":case"image":case"link":B("error",e),B("load",e),a=r;break;case"details":B("toggle",e),a=r;break;case"input":du(e,r),a=Yo(e,r),B("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=H({},r,{value:void 0}),B("invalid",e);break;case"textarea":pu(e,r),a=Xo(e,r),B("invalid",e);break;default:a=r}Ho(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Sf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_f(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ar(e,s):typeof s=="number"&&Ar(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Pr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&es(e,i,s,o))}switch(n){case"input":da(e),mu(e,r,!1);break;case"textarea":da(e),hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Zd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=qt(zr.current),qt(qe.current),_a(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(i=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:ba(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return de(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Pe!==null&&t.mode&1&&!(t.flags&128))cd(),Yn(),t.flags|=98560,i=!1;else if(i=_a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[$e]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ge!==null&&(Nl(Ge),Ge=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?re===0&&(re=3):Ms())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Un(),_l(e,t),e===null&&jr(t.stateNode.containerInfo),de(t),null;case 10:return ws(t.type._context),de(t),null;case 17:return ke(t.type)&&oi(),de(t),null;case 19:if(Y(X),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)or(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mi(e),o!==null){for(t.flags|=128,or(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Zn&&(t.flags|=128,r=!0,or(i,!1),t.lanes=4194304)}else{if(!r)if(e=mi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return de(t),null}else 2*q()-i.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,or(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function g1(e,t){switch(hs(t),t.tag){case 1:return ke(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),Y(_e),Y(pe),xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return Un(),null;case 10:return ws(t.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var xa=!1,me=!1,v1=typeof WeakSet=="function"?WeakSet:Set,R=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function kl(e,t,n){try{n()}catch(r){$(e,t,r)}}var ac=!1;function y1(e,t){if(il=ni,e=Qf(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var g;d!==n||a!==0&&d.nodeType!==3||(l=o+a),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++f===r&&(s=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},ni=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),S);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){$(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=ac,ac=!1,y}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&kl(t,n,i)}a=a.next}while(a!==r)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hd(e){var t=e.alternate;t!==null&&(e.alternate=null,Hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Mr],delete t[ul],delete t[e1],delete t[t1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jd(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ii));else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}var se=null,Be=!1;function gt(e,t,n){for(n=n.child;n!==null;)$d(e,t,n),n=n.sibling}function $d(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 5:me||Nn(n,t);case 6:var r=se,a=Be;se=null,gt(e,t,n),se=r,Be=a,se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?wo(e.parentNode,n):e.nodeType===1&&wo(e,n),Ir(e)):wo(se,n.stateNode));break;case 4:r=se,a=Be,se=n.stateNode.containerInfo,Be=!0,gt(e,t,n),se=r,Be=a;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&kl(n,t,o),a=a.next}while(a!==r)}gt(e,t,n);break;case 1:if(!me&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$(n,t,l)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,gt(e,t,n),me=r):gt(e,t,n);break;default:gt(e,t,n)}}function oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v1),t.forEach(function(r){var a=A1.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,Be=!1;break e;case 3:se=l.stateNode.containerInfo,Be=!0;break e;case 4:se=l.stateNode.containerInfo,Be=!0;break e}l=l.return}if(se===null)throw Error(k(160));$d(i,o,a),se=null,Be=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){$(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}function Qd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Ze(e),r&4){try{_r(3,e,e.return),Oi(3,e)}catch(v){$(e,e.return,v)}try{_r(5,e,e.return)}catch(v){$(e,e.return,v)}}break;case 1:Oe(t,e),Ze(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Oe(t,e),Ze(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var a=e.stateNode;try{Ar(a,"")}catch(v){$(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&yf(a,i),Jo(l,o);var u=Jo(l,i);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?Sf(a,d):f==="dangerouslySetInnerHTML"?_f(a,d):f==="children"?Ar(a,d):es(a,f,d,u)}switch(l){case"input":Vo(a,i);break;case"textarea":wf(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?jn(a,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?jn(a,!!i.multiple,i.defaultValue,!0):jn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Mr]=i}catch(v){$(e,e.return,v)}}break;case 6:if(Oe(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(v){$(e,e.return,v)}}break;case 3:if(Oe(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(v){$(e,e.return,v)}break;case 4:Oe(t,e),Ze(e);break;case 13:Oe(t,e),Ze(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ls=q())),r&4&&oc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||f,Oe(t,e),me=u):Oe(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(d=R=f;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:_r(4,h,h.return);break;case 1:Nn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){$(r,n,v)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){sc(d);continue}}g!==null?(g.return=h,R=g):sc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=kf("display",o))}catch(v){$(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){$(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Oe(t,e),Ze(e),r&4&&oc(e);break;case 21:break;default:Oe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ar(a,""),r.flags&=-33);var i=ic(e);Cl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ic(e);xl(e,l,o);break;default:throw Error(k(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w1(e,t,n){R=e,Kd(e)}function Kd(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var a=R,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||xa;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||me;l=xa;var u=me;if(xa=o,(me=s)&&!u)for(R=a;R!==null;)o=R,s=o.child,o.tag===22&&o.memoizedState!==null?uc(a):s!==null?(s.return=o,R=s):uc(a);for(;i!==null;)R=i,Kd(i),i=i.sibling;R=a,xa=l,me=u}lc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,R=i):lc(e)}}function lc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Vu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ir(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&Sl(t)}catch(h){$(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function sc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function uc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oi(4,t)}catch(s){$(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){$(t,a,s)}}var i=t.return;try{Sl(t)}catch(s){$(t,i,s)}break;case 5:var o=t.return;try{Sl(t)}catch(s){$(t,o,s)}}}catch(s){$(t,t.return,s)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var b1=Math.ceil,gi=mt.ReactCurrentDispatcher,Is=mt.ReactCurrentOwner,Fe=mt.ReactCurrentBatchConfig,z=0,le=null,ee=null,ue=0,xe=0,Rn=Gt(0),re=0,Gr=null,sn=0,Wi=0,Ts=0,kr=null,we=null,Ls=0,Zn=1/0,tt=null,vi=!1,Pl=null,Tt=null,Ca=!1,xt=null,yi=0,Sr=0,Al=null,Ua=-1,Xa=0;function ge(){return z&6?q():Ua!==-1?Ua:Ua=q()}function Lt(e){return e.mode&1?z&2&&ue!==0?ue&-ue:r1.transition!==null?(Xa===0&&(Xa=Ff()),Xa):(e=O,e!==0||(e=window.event,e=e===void 0?16:Gf(e.type)),e):1}function Ue(e,t,n,r){if(50<Sr)throw Sr=0,Al=null,Error(k(185));$r(e,n,r),(!(z&2)||e!==le)&&(e===le&&(!(z&2)&&(Wi|=n),re===4&&kt(e,ue)),Se(e,r),n===1&&z===0&&!(t.mode&1)&&(Zn=q()+500,Mi&&Yt()))}function Se(e,t){var n=e.callbackNode;rh(e,t);var r=ti(e,e===le?ue:0);if(r===0)n!==null&&yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yu(n),t===1)e.tag===0?n1(cc.bind(null,e)):ld(cc.bind(null,e)),Kh(function(){!(z&6)&&Yt()}),n=null;else{switch(Mf(r)){case 1:n=is;break;case 4:n=Lf;break;case 16:n=ei;break;case 536870912:n=jf;break;default:n=ei}n=om(n,qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qd(e,t){if(Ua=-1,Xa=0,z&6)throw Error(k(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=ti(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wi(e,r);else{t=r;var a=z;z|=2;var i=tm();(le!==e||ue!==t)&&(tt=null,Zn=q()+500,nn(e,t));do try{S1();break}catch(l){em(e,l)}while(1);ys(),gi.current=i,z=a,ee!==null?t=0:(le=null,ue=0,t=re)}if(t!==0){if(t===2&&(a=el(e),a!==0&&(r=a,t=El(e,a))),t===1)throw n=Gr,nn(e,0),kt(e,r),Se(e,q()),n;if(t===6)kt(e,r);else{if(a=e.current.alternate,!(r&30)&&!_1(a)&&(t=wi(e,r),t===2&&(i=el(e),i!==0&&(r=i,t=El(e,i))),t===1))throw n=Gr,nn(e,0),kt(e,r),Se(e,q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:$t(e,we,tt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Ls+500-q(),10<t)){if(ti(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=sl($t.bind(null,e,we,tt),t);break}$t(e,we,tt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Ve(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b1(r/1960))-r,10<r){e.timeoutHandle=sl($t.bind(null,e,we,tt),r);break}$t(e,we,tt);break;case 5:$t(e,we,tt);break;default:throw Error(k(329))}}}return Se(e,q()),e.callbackNode===n?qd.bind(null,e):null}function El(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=we,we=n,t!==null&&Nl(t)),e}function Nl(e){we===null?we=e:we.push.apply(we,e)}function _1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Xe(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Ts,t&=~Wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(z&6)throw Error(k(327));On();var t=ti(e,0);if(!(t&1))return Se(e,q()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=el(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=Gr,nn(e,0),kt(e,t),Se(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,we,tt),Se(e,q()),null}function js(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Zn=q()+500,Mi&&Yt())}}function un(e){xt!==null&&xt.tag===0&&!(z&6)&&On();var t=z;z|=1;var n=Fe.transition,r=O;try{if(Fe.transition=null,O=1,e)return e()}finally{O=r,Fe.transition=n,z=t,!(z&6)&&Yt()}}function Fs(){xe=Rn.current,Y(Rn)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qh(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(hs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:Un(),Y(_e),Y(pe),xs();break;case 5:Ss(r);break;case 4:Un();break;case 13:Y(X);break;case 19:Y(X);break;case 10:ws(r.type._context);break;case 22:case 23:Fs()}n=n.return}if(le=e,ee=e=jt(e.current,null),ue=xe=t,re=0,Gr=null,Ts=Wi=sn=0,we=kr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}Kt=null}return e}function em(e,t){do{var n=ee;try{if(ys(),Ga.current=hi,pi){for(var r=Z.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}pi=!1}if(ln=0,oe=ne=Z=null,br=!1,Or=0,Is.current=null,n===null||n.return===null){re=1,Gr=t,ee=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=ue,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Qu(o);if(g!==null){g.flags&=-257,Ku(g,o,l,i,t),g.mode&1&&$u(i,u,t),t=g,s=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(s),t.updateQueue=v}else y.add(s);break e}else{if(!(t&1)){$u(i,u,t),Ms();break e}s=Error(k(426))}}else if(U&&l.mode&1){var S=Qu(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ku(S,o,l,i,t),gs(Xn(s,l));break e}}i=s=Xn(s,l),re!==4&&(re=2),kr===null?kr=[i]:kr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Dd(i,s,t);Yu(i,m);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Tt===null||!Tt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=zd(i,l,t);Yu(i,w);break e}}i=i.return}while(i!==null)}rm(n)}catch(_){t=_,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function tm(){var e=gi.current;return gi.current=hi,e===null?hi:e}function Ms(){(re===0||re===3||re===2)&&(re=4),le===null||!(sn&268435455)&&!(Wi&268435455)||kt(le,ue)}function wi(e,t){var n=z;z|=2;var r=tm();(le!==e||ue!==t)&&(tt=null,nn(e,t));do try{k1();break}catch(a){em(e,a)}while(1);if(ys(),z=n,gi.current=r,ee!==null)throw Error(k(261));return le=null,ue=0,re}function k1(){for(;ee!==null;)nm(ee)}function S1(){for(;ee!==null&&!Hp();)nm(ee)}function nm(e){var t=im(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?rm(e):ee=t,Is.current=null}function rm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=g1(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=h1(n,t,xe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function $t(e,t,n){var r=O,a=Fe.transition;try{Fe.transition=null,O=1,x1(e,t,n,r)}finally{Fe.transition=a,O=r}return null}function x1(e,t,n,r){do On();while(xt!==null);if(z&6)throw Error(k(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ah(e,i),e===le&&(ee=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,om(ei,function(){return On(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var o=O;O=1;var l=z;z|=4,Is.current=null,y1(e,n),Qd(n,e),Vh(ol),ni=!!il,ol=il=null,e.current=n,w1(n),Jp(),z=l,O=o,Fe.transition=i}else e.current=n;if(Ca&&(Ca=!1,xt=e,yi=a),i=e.pendingLanes,i===0&&(Tt=null),Kp(n.stateNode),Se(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(vi)throw vi=!1,e=Pl,Pl=null,e;return yi&1&&e.tag!==0&&On(),i=e.pendingLanes,i&1?e===Al?Sr++:(Sr=0,Al=e):Sr=0,Yt(),null}function On(){if(xt!==null){var e=Mf(yi),t=Fe.transition,n=O;try{if(Fe.transition=null,O=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,yi=0,z&6)throw Error(k(331));var a=z;for(z|=4,R=e.current;R!==null;){var i=R,o=i.child;if(R.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:_r(8,f,i)}var d=f.child;if(d!==null)d.return=f,R=d;else for(;R!==null;){f=R;var h=f.sibling,g=f.return;if(Hd(f),f===u){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}R=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,R=o;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var c=e.current;for(R=c;R!==null;){o=R;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,R=p;else e:for(o=c;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Oi(9,l)}}catch(_){$(l,l.return,_)}if(l===o){R=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,R=w;break e}R=l.return}}if(z=a,Yt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ii,e)}catch{}r=!0}return r}finally{O=n,Fe.transition=t}}return!1}function fc(e,t,n){t=Xn(n,t),t=Dd(e,t,1),e=It(e,t,1),t=ge(),e!==null&&($r(e,1,t),Se(e,t))}function $(e,t,n){if(e.tag===3)fc(e,e,n);else for(;t!==null;){if(t.tag===3){fc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){e=Xn(n,e),e=zd(t,e,1),t=It(t,e,1),e=ge(),t!==null&&($r(t,1,e),Se(t,e));break}}t=t.return}}function C1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>q()-Ls?nn(e,0):Ts|=n),Se(e,t)}function am(e,t){t===0&&(e.mode&1?(t=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):t=1);var n=ge();e=st(e,t),e!==null&&($r(e,t,n),Se(e,n))}function P1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function A1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),am(e,n)}var im;im=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,p1(e,t,n);be=!!(e.flags&131072)}else be=!1,U&&t.flags&1048576&&sd(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Va(e,t),e=t.pendingProps;var a=Gn(t,pe.current);zn(t,n),a=Ps(null,t,r,e,a,n);var i=As();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,li(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,_s(t),a.updater=Di,t.stateNode=a,a._reactInternals=t,hl(t,r,e,n),t=yl(null,t,r,!0,i,n)):(t.tag=0,U&&i&&ps(t),he(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Va(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=N1(r),e=We(r,e),a){case 0:t=vl(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=ec(null,t,r,We(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:We(r,a),vl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:We(r,a),tc(e,t,r,a,n);case 3:e:{if(Gd(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,a=i.element,dd(e,t),di(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Xn(Error(k(423)),t),t=nc(e,t,r,n,a);break e}else if(r!==a){a=Xn(Error(k(424)),t),t=nc(e,t,r,n,a);break e}else for(Pe=Rt(t.stateNode.containerInfo.firstChild),Ae=t,U=!0,Ge=null,n=gd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===a){t=ut(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return vd(t),e===null&&dl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,ll(r,a)?o=null:i!==null&&ll(r,i)&&(t.flags|=32),Bd(e,t),he(e,t,o,n),t.child;case 6:return e===null&&dl(t),null;case 13:return Yd(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:We(r,a),qu(e,t,r,a,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,W(ci,r._currentValue),r._currentValue=o,i!==null)if(Xe(i.value,o)){if(i.children===a.children&&!_e.current){t=ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=it(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ml(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ml(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}he(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zn(t,n),a=De(a),r=r(a),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,a=We(r,t.pendingProps),a=We(r.type,a),ec(e,t,r,a,n);case 15:return Od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:We(r,a),Va(e,t),t.tag=1,ke(r)?(e=!0,li(t)):e=!1,zn(t,n),pd(t,r,a),hl(t,r,a,n),yl(null,t,r,!0,e,n);case 19:return Vd(e,t,n);case 22:return Wd(e,t,n)}throw Error(k(156,t.tag))};function om(e,t){return Tf(e,t)}function E1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new E1(e,t,n,r)}function Ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N1(e){if(typeof e=="function")return Ds(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===rs)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Za(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Ds(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case bn:return rn(n.children,a,i,t);case ts:o=8,a|=8;break;case Oo:return e=je(12,n,t,a|2),e.elementType=Oo,e.lanes=i,e;case Wo:return e=je(13,n,t,a),e.elementType=Wo,e.lanes=i,e;case Bo:return e=je(19,n,t,a),e.elementType=Bo,e.lanes=i,e;case hf:return Bi(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mf:o=10;break e;case pf:o=9;break e;case ns:o=11;break e;case rs:o=14;break e;case wt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=je(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function rn(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Bi(e,t,n,r){return e=je(22,e,r,t),e.elementType=hf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ao(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Eo(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function R1(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lo(0),this.expirationTimes=lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,a,i,o,l,s){return e=new R1(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_s(i),e}function I1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lm(e){if(!e)return Dt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return od(e,n,t)}return t}function sm(e,t,n,r,a,i,o,l,s){return e=zs(n,r,!0,e,a,i,o,l,s),e.context=lm(null),n=e.current,r=ge(),a=Lt(n),i=it(r,a),i.callback=t??null,It(n,i,a),e.current.lanes=a,$r(e,a,r),Se(e,r),e}function Gi(e,t,n,r){var a=t.current,i=ge(),o=Lt(a);return n=lm(n),t.context===null?t.context=n:t.pendingContext=n,t=it(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(a,t,o),e!==null&&(Ue(e,a,o,i),Ba(e,a,o)),o}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){dc(e,t),(e=e.alternate)&&dc(e,t)}function T1(){return null}var um=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ws(e){this._internalRoot=e}Yi.prototype.render=Ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Gi(e,t,null,null)};Yi.prototype.unmount=Ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){Gi(null,e,null,null)}),t[lt]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Bf(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function L1(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=bi(o);i.call(u)}}var o=sm(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=o,e[lt]=o.current,jr(e.nodeType===8?e.parentNode:e),un(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=bi(s);l.call(u)}}var s=zs(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=s,e[lt]=s.current,jr(e.nodeType===8?e.parentNode:e),un(function(){Gi(t,s,n,r)}),s}function Ui(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=bi(o);l.call(s)}}Gi(t,o,e,a)}else o=L1(n,t,e,a,r);return bi(o)}Df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(os(t,n|1),Se(t,q()),!(z&6)&&(Zn=q()+500,Yt()))}break;case 13:un(function(){var r=st(e,1);if(r!==null){var a=ge();Ue(r,e,1,a)}}),Os(e,1)}};ls=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=ge();Ue(t,e,134217728,n)}Os(e,134217728)}};zf=function(e){if(e.tag===13){var t=Lt(e),n=st(e,t);if(n!==null){var r=ge();Ue(n,e,t,r)}Os(e,t)}};Of=function(){return O};Wf=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Qo=function(e,t,n){switch(t){case"input":if(Vo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Fi(r);if(!a)throw Error(k(90));vf(r),Vo(r,a)}}}break;case"textarea":wf(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};Pf=js;Af=un;var j1={usingClientEntryPoint:!1,Events:[Kr,xn,Fi,xf,Cf,js]},lr={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F1={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rf(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||T1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Ii=Pa.inject(F1),Ke=Pa}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(t))throw Error(k(200));return I1(e,t,null,n)};Ne.createRoot=function(e,t){if(!Bs(e))throw Error(k(299));var n=!1,r="",a=um;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,a),e[lt]=t.current,jr(e.nodeType===8?e.parentNode:e),new Ws(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Rf(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return un(e)};Ne.hydrate=function(e,t,n){if(!Vi(t))throw Error(k(200));return Ui(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Bs(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=um;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sm(t,null,e,1,n??null,a,!1,i,o),e[lt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Yi(t)};Ne.render=function(e,t,n){if(!Vi(t))throw Error(k(200));return Ui(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(k(40));return e._reactRootContainer?(un(function(){Ui(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ne.unstable_batchedUpdates=js;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ui(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),sf.exports=Ne;var M1=sf.exports,pc=M1;Do.createRoot=pc.createRoot,Do.hydrateRoot=pc.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yr(){return Yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yr.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const hc="popstate";function D1(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:l="",hash:s=""}=hn(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Rl("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:_i(i))}function r(a,i){Xi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return O1(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z1(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Rl(e,t,n,r){return n===void 0&&(n=null),Yr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||z1()})}function _i(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function O1(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Ct.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(Yr({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=Ct.Pop;let S=f(),m=S==null?null:S-u;u=S,s&&s({action:l,location:v.location,delta:m})}function h(S,m){l=Ct.Push;let c=Rl(v.location,S,m);n&&n(c,S),u=f()+1;let p=gc(c,u),w=v.createHref(c);try{o.pushState(p,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(w)}i&&s&&s({action:l,location:v.location,delta:1})}function g(S,m){l=Ct.Replace;let c=Rl(v.location,S,m);n&&n(c,S),u=f();let p=gc(c,u),w=v.createHref(c);o.replaceState(p,"",w),i&&s&&s({action:l,location:v.location,delta:0})}function y(S){let m=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof S=="string"?S:_i(S);return te(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let v={get action(){return l},get location(){return e(a,o)},listen(S){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(hc,d),s=S,()=>{a.removeEventListener(hc,d),s=null}},createHref(S){return t(a,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(S){return o.go(S)}};return v}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function W1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?hn(t):t,a=Gs(r.pathname||"/",n);if(a==null)return null;let i=fm(e);B1(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=$1(i[l],q1(a));return o}function fm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Ft([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:H1(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of dm(i.path))a(i,o,s)}),t}function dm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=dm(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function B1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G1=/^:\w+$/,Y1=3,V1=2,U1=1,X1=10,Z1=-2,yc=e=>e==="*";function H1(e,t){let n=e.split("/"),r=n.length;return n.some(yc)&&(r+=Z1),t&&(r+=V1),n.filter(a=>!yc(a)).reduce((a,i)=>a+(G1.test(i)?Y1:i===""?U1:X1),r)}function J1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function $1(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=Q1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:Ft([a,f.pathname]),pathnameBase:r0(Ft([a,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(a=Ft([a,f.pathnameBase]))}return i}function Q1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=K1(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let h=l[d]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=e0(l[d]||"",f),u},{}),pathname:i,pathnameBase:o,pattern:e}}function K1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function q1(e){try{return decodeURI(e)}catch(t){return Xi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function e0(e,t){try{return decodeURIComponent(e)}catch(n){return Xi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function t0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?hn(e):e;return{pathname:n?n.startsWith("/")?n:n0(n,t):t,search:a0(r),hash:i0(a)}}function n0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function No(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pm(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=hn(e):(a=Yr({},e),te(!a.pathname||!a.pathname.includes("?"),No("?","pathname","search",a)),te(!a.pathname||!a.pathname.includes("#"),No("#","pathname","hash",a)),te(!a.search||!a.search.includes("#"),No("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=t0(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),r0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),a0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hm=["post","put","patch","delete"];new Set(hm);const l0=["get",...hm];new Set(l0);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}const Ys=x.createContext(null),gm=x.createContext(null),gn=x.createContext(null),Zi=x.createContext(null),Vt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),vm=x.createContext(null);function s0(e,t){let{relative:n}=t===void 0?{}:t;ea()||te(!1);let{basename:r,navigator:a}=x.useContext(gn),{hash:i,pathname:o,search:l}=Vs(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Ft([r,o])),a.createHref({pathname:s,search:l,hash:i})}function ea(){return x.useContext(Zi)!=null}function et(){return ea()||te(!1),x.useContext(Zi).location}function ym(e){x.useContext(gn).static||x.useLayoutEffect(e)}function ta(){let{isDataRoute:e}=x.useContext(Vt);return e?k0():u0()}function u0(){ea()||te(!1);let e=x.useContext(Ys),{basename:t,navigator:n}=x.useContext(gn),{matches:r}=x.useContext(Vt),{pathname:a}=et(),i=JSON.stringify(mm(r).map(s=>s.pathnameBase)),o=x.useRef(!1);return ym(()=>{o.current=!0}),x.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=pm(s,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ft([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,a,e])}function c0(){let{matches:e}=x.useContext(Vt),t=e[e.length-1];return t?t.params:{}}function Vs(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Vt),{pathname:a}=et(),i=JSON.stringify(mm(r).map(o=>o.pathnameBase));return x.useMemo(()=>pm(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function f0(e,t){return d0(e,t)}function d0(e,t,n){ea()||te(!1);let{navigator:r}=x.useContext(gn),{matches:a}=x.useContext(Vt),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=et(),u;if(t){var f;let v=typeof t=="string"?hn(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||te(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",g=W1(e,{pathname:h}),y=v0(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Ft([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Ft([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),a,n);return t&&y?x.createElement(Zi.Provider,{value:{location:ki({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ct.Pop}},y):y}function m0(){let e=_0(),t=o0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,i)}const p0=x.createElement(m0,null);class h0 extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Vt.Provider,{value:this.props.routeContext},x.createElement(vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g0(e){let{routeContext:t,match:n,children:r}=e,a=x.useContext(Ys);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Vt.Provider,{value:t},r)}function v0(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||te(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,d=null;n&&(d=s.route.errorElement||p0);let h=t.concat(i.slice(0,u+1)),g=()=>{let y;return f?y=d:s.route.Component?y=x.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=l,x.createElement(g0,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?x.createElement(h0,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var wm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wm||{}),Si=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Si||{});function y0(e){let t=x.useContext(Ys);return t||te(!1),t}function w0(e){let t=x.useContext(gm);return t||te(!1),t}function b0(e){let t=x.useContext(Vt);return t||te(!1),t}function bm(e){let t=b0(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function _0(){var e;let t=x.useContext(vm),n=w0(Si.UseRouteError),r=bm(Si.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function k0(){let{router:e}=y0(wm.UseNavigateStable),t=bm(Si.UseNavigateStable),n=x.useRef(!1);return ym(()=>{n.current=!0}),x.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ki({fromRouteId:t},i)))},[e,t])}function yt(e){te(!1)}function S0(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Ct.Pop,navigator:i,static:o=!1}=e;ea()&&te(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=hn(r));let{pathname:u="/",search:f="",hash:d="",state:h=null,key:g="default"}=r,y=x.useMemo(()=>{let v=Gs(u,l);return v==null?null:{location:{pathname:v,search:f,hash:d,state:h,key:g},navigationType:a}},[l,u,f,d,h,g,a]);return y==null?null:x.createElement(gn.Provider,{value:s},x.createElement(Zi.Provider,{children:n,value:y}))}function x0(e){let{children:t,location:n}=e;return f0(Il(t),n)}new Promise(()=>{});function Il(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,a)=>{if(!x.isValidElement(r))return;let i=[...t,a];if(r.type===x.Fragment){n.push.apply(n,Il(r.props.children,i));return}r.type!==yt&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Il(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}function _m(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function C0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function P0(e,t){return e.button===0&&(!t||t==="_self")&&!C0(e)}function Tl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(a=>[n,a]):[[n,r]])},[]))}function A0(e,t){let n=Tl(e);return t&&t.forEach((r,a)=>{n.has(a)||t.getAll(a).forEach(i=>{n.append(a,i)})}),n}const E0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],N0=["aria-current","caseSensitive","className","end","style","to","children"],R0="startTransition",wc=Pp[R0];function I0(e){let{basename:t,children:n,future:r,window:a}=e,i=x.useRef();i.current==null&&(i.current=D1({window:a,v5Compat:!0}));let o=i.current,[l,s]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=x.useCallback(d=>{u&&wc?wc(()=>s(d)):s(d)},[s,u]);return x.useLayoutEffect(()=>o.listen(f),[o,f]),x.createElement(S0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const T0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,km=x.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:f}=t,d=_m(t,E0),{basename:h}=x.useContext(gn),g,y=!1;if(typeof u=="string"&&L0.test(u)&&(g=u,T0))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=Gs(p.pathname,h);p.origin===c.origin&&w!=null?u=w+p.search+p.hash:y=!0}catch{}let v=s0(u,{relative:a}),S=F0(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:a});function m(c){r&&r(c),c.defaultPrevented||S(c)}return x.createElement("a",xi({},d,{href:g||v,onClick:y||i?r:m,ref:n,target:s}))}),j0=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,children:u}=t,f=_m(t,N0),d=Vs(s,{relative:f.relative}),h=et(),g=x.useContext(gm),{navigator:y}=x.useContext(gn),v=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,S=h.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(S=S.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let c=S===v||!o&&S.startsWith(v)&&S.charAt(v.length)==="/",p=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),w=c?r:void 0,_;typeof i=="function"?_=i({isActive:c,isPending:p}):_=[i,c?"active":null,p?"pending":null].filter(Boolean).join(" ");let C=typeof l=="function"?l({isActive:c,isPending:p}):l;return x.createElement(km,xi({},f,{"aria-current":w,className:_,ref:n,style:C,to:s}),typeof u=="function"?u({isActive:c,isPending:p}):u)});var bc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(bc||(bc={}));var _c;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_c||(_c={}));function F0(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=ta(),s=et(),u=Vs(e,{relative:o});return x.useCallback(f=>{if(P0(f,n)){f.preventDefault();let d=r!==void 0?r:_i(s)===_i(u);l(e,{replace:d,state:a,preventScrollReset:i,relative:o})}},[s,l,u,r,a,n,e,i,o])}function Hi(e){let t=x.useRef(Tl(e)),n=x.useRef(!1),r=et(),a=x.useMemo(()=>A0(r.search,n.current?null:t.current),[r.search]),i=ta(),o=x.useCallback((l,s)=>{const u=Tl(typeof l=="function"?l(a):l);n.current=!0,i("?"+u,s)},[i,a]);return[a,o]}const M0="_welcome_x9txs_2",D0="_welcomeContainer_x9txs_9",z0="_goToAppButton_x9txs_13",Ro={welcome:M0,welcomeContainer:D0,goToAppButton:z0};function O0(){return b.jsx("main",{className:Ro.welcome,children:b.jsxs("div",{className:Ro.welcomeContainer,children:[b.jsx("h1",{children:"Welcome to MisterEmail"}),b.jsx("div",{className:Ro.goToAppButton,children:b.jsx(km,{to:"/inbox",children:"Go to app"})})]})})}function kc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kc(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function W0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B0(e,t,n){return t&&Sc(e.prototype,t),n&&Sc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Us(e,t){return Y0(e)||U0(e,t)||Sm(e,t)||Z0()}function na(e){return G0(e)||V0(e)||Sm(e)||X0()}function G0(e){if(Array.isArray(e))return Ll(e)}function Y0(e){if(Array.isArray(e))return e}function V0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function U0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Sm(e,t){if(e){if(typeof e=="string")return Ll(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ll(e,t)}}function Ll(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xc=function(){},Xs={},xm={},Cm=null,Pm={mark:xc,measure:xc};try{typeof window<"u"&&(Xs=window),typeof document<"u"&&(xm=document),typeof MutationObserver<"u"&&(Cm=MutationObserver),typeof performance<"u"&&(Pm=performance)}catch{}var H0=Xs.navigator||{},Cc=H0.userAgent,Pc=Cc===void 0?"":Cc,zt=Xs,V=xm,Ac=Cm,Aa=Pm;zt.document;var pt=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Am=~Pc.indexOf("MSIE")||~Pc.indexOf("Trident/"),Ea,Na,Ra,Ia,Ta,ct="___FONT_AWESOME___",jl=16,Em="fa",Nm="svg-inline--fa",cn="data-fa-i2svg",Fl="data-fa-pseudo-element",J0="data-fa-pseudo-element-pending",Zs="data-prefix",Hs="data-icon",Ec="fontawesome-i2svg",$0="async",Q0=["HTML","HEAD","STYLE","SCRIPT"],Rm=function(){try{return!0}catch{return!1}}(),G="classic",Q="sharp",Js=[G,Q];function ra(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var Vr=ra((Ea={},ae(Ea,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(Ea,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ea)),Ur=ra((Na={},ae(Na,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(Na,Q,{solid:"fass",regular:"fasr",light:"fasl"}),Na)),Xr=ra((Ra={},ae(Ra,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(Ra,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ra)),K0=ra((Ia={},ae(Ia,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(Ia,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ia)),q0=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Im="fa-layers-text",eg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tg=ra((Ta={},ae(Ta,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Ta,Q,{900:"fass",400:"fasr",300:"fasl"}),Ta)),Tm=[1,2,3,4,5,6,7,8,9,10],ng=Tm.concat([11,12,13,14,15,16,17,18,19,20]),rg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],en={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zr=new Set;Object.keys(Ur[G]).map(Zr.add.bind(Zr));Object.keys(Ur[Q]).map(Zr.add.bind(Zr));var ag=[].concat(Js,na(Zr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",en.GROUP,en.SWAP_OPACITY,en.PRIMARY,en.SECONDARY]).concat(Tm.map(function(e){return"".concat(e,"x")})).concat(ng.map(function(e){return"w-".concat(e)})),xr=zt.FontAwesomeConfig||{};function ig(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function og(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var lg=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lg.forEach(function(e){var t=Us(e,2),n=t[0],r=t[1],a=og(ig(n));a!=null&&(xr[r]=a)})}var Lm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Em,replacementClass:Nm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xr.familyPrefix&&(xr.cssPrefix=xr.familyPrefix);var Hn=N(N({},Lm),xr);Hn.autoReplaceSvg||(Hn.observeMutations=!1);var T={};Object.keys(Lm).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Hn[e]=n,Cr.forEach(function(r){return r(T)})},get:function(){return Hn[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Hn.cssPrefix=t,Cr.forEach(function(n){return n(T)})},get:function(){return Hn.cssPrefix}});zt.FontAwesomeConfig=T;var Cr=[];function sg(e){return Cr.push(e),function(){Cr.splice(Cr.indexOf(e),1)}}var vt=jl,Qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ug(e){if(!(!e||!pt)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var cg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Hr(){for(var e=12,t="";e-- >0;)t+=cg[Math.random()*62|0];return t}function Kn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $s(e){return e.classList?Kn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(jm(e[n]),'" ')},"").trim()}function Ji(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qs(e){return e.size!==Qe.size||e.x!==Qe.x||e.y!==Qe.y||e.rotate!==Qe.rotate||e.flipX||e.flipY}function dg(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function mg(e){var t=e.transform,n=e.width,r=n===void 0?jl:n,a=e.height,i=a===void 0?jl:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Am?s+="translate(".concat(t.x/vt-r/2,"em, ").concat(t.y/vt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/vt,"em), calc(-50% + ").concat(t.y/vt,"em)) "):s+="translate(".concat(t.x/vt,"em, ").concat(t.y/vt,"em) "),s+="scale(".concat(t.size/vt*(t.flipX?-1:1),", ").concat(t.size/vt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var pg=`:root, :host {
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
}`;function Fm(){var e=Em,t=Nm,n=T.cssPrefix,r=T.replacementClass,a=pg;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Nc=!1;function Io(){T.autoAddCss&&!Nc&&(ug(Fm()),Nc=!0)}var hg={mixout:function(){return{dom:{css:Fm,insertCss:Io}}},hooks:function(){return{beforeDOMElementCreation:function(){Io()},beforeI2svg:function(){Io()}}}},ft=zt||{};ft[ct]||(ft[ct]={});ft[ct].styles||(ft[ct].styles={});ft[ct].hooks||(ft[ct].hooks={});ft[ct].shims||(ft[ct].shims=[]);var Ye=ft[ct],Mm=[],gg=function e(){V.removeEventListener("DOMContentLoaded",e),Pi=1,Mm.map(function(t){return t()})},Pi=!1;pt&&(Pi=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Pi||V.addEventListener("DOMContentLoaded",gg));function vg(e){pt&&(Pi?setTimeout(e,0):Mm.push(e))}function aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?jm(e):"<".concat(t," ").concat(fg(r),">").concat(i.map(aa).join(""),"</").concat(t,">")}function Rc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var yg=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},To=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?yg(n,a):n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function wg(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ml(e){var t=wg(e);return t.length===1?t[0].toString(16):null}function bg(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ic(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ic(t);typeof Ye.hooks.addPack=="function"&&!a?Ye.hooks.addPack(e,Ic(t)):Ye.styles[e]=N(N({},Ye.styles[e]||{}),i),e==="fas"&&Dl("fa",t)}var La,ja,Fa,In=Ye.styles,_g=Ye.shims,kg=(La={},ae(La,G,Object.values(Xr[G])),ae(La,Q,Object.values(Xr[Q])),La),Ks=null,Dm={},zm={},Om={},Wm={},Bm={},Sg=(ja={},ae(ja,G,Object.keys(Vr[G])),ae(ja,Q,Object.keys(Vr[Q])),ja);function xg(e){return~ag.indexOf(e)}function Cg(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!xg(a)?a:null}var Gm=function(){var t=function(i){return To(In,function(o,l,s){return o[s]=To(l,i,{}),o},{})};Dm=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),zm=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),Bm=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in In||T.autoFetchSvg,r=To(_g,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});Om=r.names,Wm=r.unicodes,Ks=$i(T.styleDefault,{family:T.familyDefault})};sg(function(e){Ks=$i(e.styleDefault,{family:T.familyDefault})});Gm();function qs(e,t){return(Dm[e]||{})[t]}function Pg(e,t){return(zm[e]||{})[t]}function tn(e,t){return(Bm[e]||{})[t]}function Ym(e){return Om[e]||{prefix:null,iconName:null}}function Ag(e){var t=Wm[e],n=qs("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ot(){return Ks}var eu=function(){return{prefix:null,iconName:null,rest:[]}};function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,a=Vr[r][e],i=Ur[r][e]||Ur[r][a],o=e in Ye.styles?e:null;return i||o||null}var Tc=(Fa={},ae(Fa,G,Object.keys(Xr[G])),ae(Fa,Q,Object.keys(Xr[Q])),Fa);function Qi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,G,"".concat(T.cssPrefix,"-").concat(G)),ae(t,Q,"".concat(T.cssPrefix,"-").concat(Q)),t),o=null,l=G;(e.includes(i[G])||e.some(function(u){return Tc[G].includes(u)}))&&(l=G),(e.includes(i[Q])||e.some(function(u){return Tc[Q].includes(u)}))&&(l=Q);var s=e.reduce(function(u,f){var d=Cg(T.cssPrefix,f);if(In[f]?(f=kg[l].includes(f)?K0[l][f]:f,o=f,u.prefix=f):Sg[l].indexOf(f)>-1?(o=f,u.prefix=$i(f,{family:l})):d?u.iconName=d:f!==T.replacementClass&&f!==i[G]&&f!==i[Q]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var h=o==="fa"?Ym(u.iconName):{},g=tn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!In.far&&In.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},eu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===Q&&(In.fass||T.autoFetchSvg)&&(s.prefix="fass",s.iconName=tn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Ot()||"fas"),s}var Eg=function(){function e(){W0(this,e),this.definitions={}}return B0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),o[l]),Dl(l,o[l]);var s=Xr[G][l];s&&Dl(s,o[l]),Gm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),Lc=[],Tn={},Wn={},Ng=Object.keys(Wn);function Rg(e,t){var n=t.mixoutsTo;return Lc=e,Tn={},Object.keys(Wn).forEach(function(r){Ng.indexOf(r)===-1&&delete Wn[r]}),Lc.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ci(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Tn[o]||(Tn[o]=[]),Tn[o].push(i[o])})}r.provides&&r.provides(Wn)}),n}function zl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function fn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tn[e]||[];a.forEach(function(i){i.apply(null,n)})}function dt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wn[e]?Wn[e].apply(null,t):void 0}function Ol(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ot();if(t)return t=tn(n,t)||t,Rc(Vm.definitions,n,t)||Rc(Ye.styles,n,t)}var Vm=new Eg,Ig=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,fn("noAuto")},Tg={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pt?(fn("beforeI2svg",t),dt("pseudoElements2svg",t),dt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,vg(function(){jg({autoReplaceSvgRoot:n}),fn("watch",t)})}},Lg={icon:function(t){if(t===null)return null;if(Ci(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:tn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=$i(t[0]);return{prefix:r,iconName:tn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(q0))){var a=Qi(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ot(),iconName:tn(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ot();return{prefix:i,iconName:tn(i,t)||t}}}},Ie={noAuto:Ig,config:T,dom:Tg,parse:Lg,library:Vm,findIconDefinition:Ol,toHtml:aa},jg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ye.styles).length>0||T.autoFetchSvg)&&pt&&T.autoReplaceSvg&&Ie.dom.i2svg({node:r})};function Ki(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(pt){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Fg(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Qs(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=Ji(N(N({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Mg(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},a),{},{id:o}),children:r}]}]}function tu(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,y=r.found?r:n,v=y.width,S=y.height,m=a==="fak",c=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(A){return d.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(d.classes).join(" "),p={children:[],attributes:N(N({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},w=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};g&&(p.attributes[cn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||Hr())},children:[s]}),delete p.attributes.title);var _=N(N({},p),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:N(N({},w),d.styles)}),C=r.found&&n.found?dt("generateAbstractMask",_)||{children:[],attributes:{}}:dt("generateAbstractIcon",_)||{children:[],attributes:{}},P=C.children,L=C.attributes;return _.children=P,_.attributes=L,l?Mg(_):Fg(_)}function jc(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=N(N(N({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[cn]="");var f=N({},o.styles);Qs(a)&&(f.transform=mg({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Ji(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Dg(e){var t=e.content,n=e.title,r=e.extra,a=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ji(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lo=Ye.styles;function Wl(e){var t=e[0],n=e[1],r=e.slice(4),a=Us(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(en.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(en.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(en.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var zg={found:!1,width:512,height:512};function Og(e,t){!Rm&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Bl(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ot()),new Promise(function(r,a){if(dt("missingIconAbstract"),n==="fa"){var i=Ym(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Lo[t]&&Lo[t][e]){var o=Lo[t][e];return r(Wl(o))}Og(e,t),r(N(N({},zg),{},{icon:T.showMissingIcons&&e?dt("missingIconAbstract")||{}:{}}))})}var Fc=function(){},Gl=T.measurePerformance&&Aa&&Aa.mark&&Aa.measure?Aa:{mark:Fc,measure:Fc},pr='FA "6.4.2"',Wg=function(t){return Gl.mark("".concat(pr," ").concat(t," begins")),function(){return Um(t)}},Um=function(t){Gl.mark("".concat(pr," ").concat(t," ends")),Gl.measure("".concat(pr," ").concat(t),"".concat(pr," ").concat(t," begins"),"".concat(pr," ").concat(t," ends"))},nu={begin:Wg,end:Um},Ha=function(){};function Mc(e){var t=e.getAttribute?e.getAttribute(cn):null;return typeof t=="string"}function Bg(e){var t=e.getAttribute?e.getAttribute(Zs):null,n=e.getAttribute?e.getAttribute(Hs):null;return t&&n}function Gg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Yg(){if(T.autoReplaceSvg===!0)return Ja.replace;var e=Ja[T.autoReplaceSvg];return e||Ja.replace}function Vg(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Ug(e){return V.createElement(e)}function Xm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vg:Ug:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Xm(o,{ceFn:r}))}),a}function Xg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ja={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Xm(a),n)}),n.getAttribute(cn)===null&&T.keepOriginalSource){var r=V.createComment(Xg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~$s(n).indexOf(T.replacementClass))return Ja.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===T.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return aa(l)}).join(`
`);n.setAttribute(cn,""),n.innerHTML=o}};function Dc(e){e()}function Zm(e,t){var n=typeof t=="function"?t:Ha;if(e.length===0)n();else{var r=Dc;T.mutateApproach===$0&&(r=zt.requestAnimationFrame||Dc),r(function(){var a=Yg(),i=nu.begin("mutate");e.map(a),i(),n()})}}var ru=!1;function Hm(){ru=!0}function Yl(){ru=!1}var Ai=null;function zc(e){if(Ac&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Ha:t,r=e.nodeCallback,a=r===void 0?Ha:r,i=e.pseudoElementsCallback,o=i===void 0?Ha:i,l=e.observeMutationsRoot,s=l===void 0?V:l;Ai=new Ac(function(u){if(!ru){var f=Ot();Kn(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Mc(d.addedNodes[0])&&(T.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&T.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Mc(d.target)&&~rg.indexOf(d.attributeName))if(d.attributeName==="class"&&Bg(d.target)){var h=Qi($s(d.target)),g=h.prefix,y=h.iconName;d.target.setAttribute(Zs,g||f),y&&d.target.setAttribute(Hs,y)}else Gg(d.target)&&a(d.target)})}}),pt&&Ai.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zg(){Ai&&Ai.disconnect()}function Hg(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Jg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qi($s(e));return a.prefix||(a.prefix=Ot()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Pg(a.prefix,e.innerText)||qs(a.prefix,Ml(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function $g(e){var t=Kn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Hr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Jg(e),r=n.iconName,a=n.prefix,i=n.rest,o=$g(e),l=zl("parseNodeAttributes",{},e),s=t.styleParser?Hg(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var Kg=Ye.styles;function Jm(e){var t=T.autoReplaceSvg==="nest"?Oc(e,{styleParser:!1}):Oc(e);return~t.extra.classes.indexOf(Im)?dt("generateLayersText",e,t):dt("generateSvgReplacementMutation",e,t)}var Wt=new Set;Js.map(function(e){Wt.add("fa-".concat(e))});Object.keys(Vr[G]).map(Wt.add.bind(Wt));Object.keys(Vr[Q]).map(Wt.add.bind(Wt));Wt=na(Wt);function Wc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pt)return Promise.resolve();var n=V.documentElement.classList,r=function(d){return n.add("".concat(Ec,"-").concat(d))},a=function(d){return n.remove("".concat(Ec,"-").concat(d))},i=T.autoFetchSvg?Wt:Js.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Kg));i.includes("fa")||i.push("fa");var o=[".".concat(Im,":not([").concat(cn,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(cn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Kn(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=nu.begin("onTree"),u=l.reduce(function(f,d){try{var h=Jm(d);h&&f.push(h)}catch(g){Rm||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){Zm(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),d(h)})})}function qg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jm(e).then(function(n){n&&Zm([n],t)})}function ev(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ol(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ol(a||{})),e(r,N(N({},n),{},{mask:a}))}}var tv=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Qe:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,v=n.classes,S=v===void 0?[]:v,m=n.attributes,c=m===void 0?{}:m,p=n.styles,w=p===void 0?{}:p;if(t){var _=t.prefix,C=t.iconName,P=t.icon;return Ki(N({type:"icon"},t),function(){return fn("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?c["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(y||Hr()):(c["aria-hidden"]="true",c.focusable="false")),tu({icons:{main:Wl(P),mask:s?Wl(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:C,transform:N(N({},Qe),a),symbol:o,title:h,maskId:f,titleId:y,extra:{attributes:c,styles:w,classes:S}})})}},nv={mixout:function(){return{icon:ev(tv)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wc,n.nodeCallback=qg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Wc(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,y){Promise.all([Bl(a,l),f.iconName?Bl(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=Us(v,2),m=S[0],c=S[1];g([n,tu({icons:{main:m,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Ji(l);s.length>0&&(a.style=s);var u;return Qs(o)&&(u=dt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},rv={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ki({type:"layer"},function(){fn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(na(i)).join(" ")},children:o}]})}}}},av={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return Ki({type:"counter",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:r}),Dg({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(na(l))}})})}}}},iv={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Qe:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Ki({type:"text",content:n},function(){return fn("beforeDOMElementCreation",{content:n,params:r}),jc({content:n,transform:N(N({},Qe),i),title:l,extra:{attributes:d,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(na(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Am){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,jc({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},ov=new RegExp('"',"ug"),Bc=[1105920,1112319];function lv(e){var t=e.replace(ov,""),n=bg(t,0),r=n>=Bc[0]&&n<=Bc[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ml(a?t[0]:t),isSecondary:r||a}}function Gc(e,t){var n="".concat(J0).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Kn(e.children),o=i.filter(function(P){return P.getAttribute(Fl)===t})[0],l=zt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(eg),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?Q:G,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Ur[h][s[2].toLowerCase()]:tg[h][u],y=lv(d),v=y.value,S=y.isSecondary,m=s[0].startsWith("FontAwesome"),c=qs(g,v),p=c;if(m){var w=Ag(v);w.iconName&&w.prefix&&(c=w.iconName,g=w.prefix)}if(c&&!S&&(!o||o.getAttribute(Zs)!==g||o.getAttribute(Hs)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var _=Qg(),C=_.extra;C.attributes[Fl]=t,Bl(c,g).then(function(P){var L=tu(N(N({},_),{},{icons:{main:P,mask:eu()},prefix:g,iconName:p,extra:C,watchable:!0})),A=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=L.map(function(E){return aa(E)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function sv(e){return Promise.all([Gc(e,"::before"),Gc(e,"::after")])}function uv(e){return e.parentNode!==document.head&&!~Q0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yc(e){if(pt)return new Promise(function(t,n){var r=Kn(e.querySelectorAll("*")).filter(uv).map(sv),a=nu.begin("searchPseudoElements");Hm(),Promise.all(r).then(function(){a(),Yl(),t()}).catch(function(){a(),Yl(),n()})})}var cv={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;T.searchPseudoElements&&Yc(a)}}},Vc=!1,fv={mixout:function(){return{dom:{unwatch:function(){Hm(),Vc=!0}}}},hooks:function(){return{bootstrap:function(){zc(zl("mutationObserverCallbacks",{}))},noAuto:function(){Zg()},watch:function(n){var r=n.observeMutationsRoot;Vc?Yl():zc(zl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Uc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},dv={mixout:function(){return{parse:{transform:function(n){return Uc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Uc(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:h};return{tag:"g",attributes:N({},g.outer),children:[{tag:"g",attributes:N({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),g.path)}]}]}}}},jo={x:0,y:0,width:"100%",height:"100%"};function Xc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function mv(e){return e.tag==="g"?e.children:[e]}var pv={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qi(a.split(" ").map(function(o){return o.trim()})):eu();return i.prefix||(i.prefix=Ot()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,d=o.width,h=o.icon,g=dg({transform:s,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:N(N({},jo),{},{fill:"white"})},v=f.children?{children:f.children.map(Xc)}:{},S={tag:"g",attributes:N({},g.inner),children:[Xc(N({tag:f.tag,attributes:N(N({},f.attributes),g.path)},v))]},m={tag:"g",attributes:N({},g.outer),children:[S]},c="mask-".concat(l||Hr()),p="clip-".concat(l||Hr()),w={tag:"mask",attributes:N(N({},jo),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:mv(h)},w]};return r.push(_,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},jo)}),{children:r,attributes:a}}}},hv={provides:function(t){var n=!1;zt.matchMedia&&(n=zt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},gv={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},vv=[hg,nv,rv,av,iv,cv,fv,dv,pv,hv,gv];Rg(vv,{mixoutsTo:Ie});Ie.noAuto;Ie.config;Ie.library;Ie.dom;var Vl=Ie.parse;Ie.findIconDefinition;Ie.toHtml;var yv=Ie.icon;Ie.layer;Ie.text;Ie.counter;var $m={exports:{}},wv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bv=wv,_v=bv;function Qm(){}function Km(){}Km.resetWarningCache=Qm;var kv=function(){function e(r,a,i,o,l,s){if(s!==_v){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Km,resetWarningCache:Qm};return n.PropTypes=n,n};$m.exports=kv();var Sv=$m.exports;const M=$c(Sv);function Zc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zc(Object(n),!0).forEach(function(r){Ln(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function Ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xv(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Cv(e,t){if(e==null)return{};var n=xv(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ul(e){return Pv(e)||Av(e)||Ev(e)||Nv()}function Pv(e){if(Array.isArray(e))return Xl(e)}function Av(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ev(e,t){if(e){if(typeof e=="string")return Xl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xl(e,t)}}function Xl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Nv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rv(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,g=e.inverse,y=e.border,v=e.listItem,S=e.flip,m=e.size,c=e.rotation,p=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":y,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Ln(t,"fa-".concat(m),typeof m<"u"&&m!==null),Ln(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Ln(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Ln(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(_){return w[_]?_:null}).filter(function(_){return _})}function Iv(e){return e=e-0,e===e}function qm(e){return Iv(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Tv=["style"];function Lv(e){return e.charAt(0).toUpperCase()+e.slice(1)}function jv(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qm(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Lv(a)]=i:t[a]=i,t},{})}function ep(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return ep(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=jv(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[qm(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Cv(n,Tv);return a.attrs.style=Pt(Pt({},a.attrs.style),o),e.apply(void 0,[t.tag,Pt(Pt({},a.attrs),l)].concat(Ul(r)))}var tp=!1;try{tp=!0}catch{}function Fv(){if(!tp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Hc(e){if(e&&Ei(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vl.icon)return Vl.icon(e);if(e===null)return null;if(e&&Ei(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Fo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ln({},e,t):{}}var Me=Ri.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Hc(n),f=Fo("classes",[].concat(Ul(Rv(e)),Ul(i.split(" ")))),d=Fo("transform",typeof e.transform=="string"?Vl.transform(e.transform):e.transform),h=Fo("mask",Hc(r)),g=yv(u,Pt(Pt(Pt(Pt({},f),d),h),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!g)return Fv("Could not find icon",u),null;var y=g.abstract,v={ref:t};return Object.keys(e).forEach(function(S){Me.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),Mv(y[0],v)});Me.displayName="FontAwesomeIcon";Me.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Me.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Mv=ep.bind(null,Ri.createElement),Dv={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},zv=Dv,Ov={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Wv={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Bv={prefix:"fas",iconName:"envelope-open",icon:[512,512,[62135],"f2b6","M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"]},Gv={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},au={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Yv={prefix:"fas",iconName:"left-long",icon:[512,512,["long-arrow-alt-left"],"f30a","M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z"]},Vv=Yv,Uv={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"]},Xv={prefix:"fas",iconName:"trash-arrow-up",icon:[448,512,["trash-restore"],"f829","M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"]},np=Xv,Zv={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};const Hv="_asideMenu_unhxh_1",Jv="_menuItems_unhxh_7",$v="_menuItemSelected_unhxh_28",Qv="_composeButton_unhxh_32",$a={asideMenu:Hv,menuItems:Jv,menuItemSelected:$v,composeButton:Qv},Kv=[{to:"/inbox",name:"Inbox",icon:Uv},{to:"/starred",name:"Starred",icon:Wv},{to:"/sent",name:"Sent",icon:Zv},{to:"/drafts",name:"Drafts",icon:zv},{to:"/trash",name:"Trash",icon:au}];function qv({to:e,name:t,icon:n,selected:r}){return b.jsx("li",{className:r?$a.menuItemSelected:"",children:b.jsxs(j0,{to:e,title:t,children:[b.jsx(Me,{icon:n}),"  ",t]})})}function e2(e){const[t,n]=Hi(),{pathname:r}=et();function a(){n({compose:"new"})}return b.jsxs("aside",{className:$a.asideMenu,children:[b.jsxs("button",{className:$a.composeButton,onClick:a,children:[b.jsx(Me,{icon:Gv}),"  Compose"]}),b.jsx("ul",{className:$a.menuItems,children:Kv.map(i=>b.jsx(qv,{to:i.to,name:i.name,icon:i.icon,selected:r===i.to},i.name))})]})}let t2="alexbol99@gmail.com";const rp={currentUser:t2},Jc={makeId:n2,saveToStorage:r2,loadFromStorage:a2};function n2(e=5){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function r2(e,t){localStorage.setItem(e,JSON.stringify(t))}function a2(e,t=null){var n=localStorage[e]||t;return JSON.parse(n)}const ia={query:oa,get:i2,post:o2,put:l2,remove:s2};function oa(e,t=200){let n=JSON.parse(localStorage.getItem(e))||[];return new Promise(r=>setTimeout(()=>r(n),t))}function i2(e,t){return oa(e).then(n=>{const r=n.find(a=>a.id===t);if(!r)throw new Error(`Get failed, cannot find entity with id: ${t} in: ${e}`);return r})}function o2(e,t){return t={...t},t.id=Jc.makeId(6),oa(e).then(n=>(n.push(t),Jc.saveToStorage(e,n),t))}function l2(e,t){return oa(e).then(n=>{const r=n.findIndex(a=>a.id===t.id);if(r<0)throw new Error(`Update failed, cannot find entity with id: ${t.id} in: ${e}`);return n.splice(r,1,t),ap(e,n),t})}function s2(e,t){return oa(e).then(n=>{const r=n.findIndex(a=>a.id===t);if(r<0)throw new Error(`Remove failed, cannot find entity with id: ${t} in: ${e}`);n.splice(r,1),ap(e,n)})}function ap(e,t){localStorage.setItem(e,JSON.stringify(t))}const dn={get:u2,create:c2,update:m2,remove:d2,getById:f2},la="mails";async function u2(){return await ia.query(la)}async function c2(e){return await ia.post(la,e)}async function f2(e){return await ia.get(la,e)}async function d2(e){return await ia.remove(la,e)}async function m2(e){return await ia.put(la,e)}const Zl=10,ip={pathname:"/inbox",pageNum:0,filter:""},op={date:!0,dateSortAscending:!1,subject:!1,subjectSortAscending:!0},Ce={query:p2,remove:w2,getById:h2,create:v2,update:y2,getPaginationParams:g2,defaultSortBy:op,defaultFilterBy:ip};async function p2(e=ip,t=op){let n=await dn.get(),r=lp(n,e.pathname);if(r.length===0)return[];let a=_2(r,t),[i,o]=b2(a,e.pageNum);return i=P2(i,e.filter),[i,o]}async function h2(e){let n={...await dn.getById(e),isViewed:!0};return await dn.update(n),n}async function g2(e,t){let n=await dn.get(),r=lp(n,e);const[a,i]=sp(r,t);return[a,i,r.length]}function v2(e=A2()){return dn.create(e)}function y2(e){return dn.update(e)}function w2(e){return dn.remove(e)}function lp(e,t){const n=rp.currentUser;let r;switch(t){case"/inbox":r=e.filter(a=>a.To===n&&!a.isDeleted);break;case"/starred":r=e.filter(a=>a.isStarred&&!a.isDeleted);break;case"/sent":r=e.filter(a=>a.From===n&&!a.isDraft&&!a.isDeleted);break;case"/drafts":r=e.filter(a=>a.From===n&&a.isDraft&&!a.isDeleted);break;case"/trash":r=e.filter(a=>a.isDeleted);break;default:r=e.filter(a=>a.To===n&&!a.isDeleted);break}return r}function sp(e,t){const n=Zl*t,r=Math.min(Zl*(t+1),e.length);return[n,r]}function b2(e,t){const[n,r]=sp(e,t),a=n+Zl>=e.length;return[e.slice(n,r),a]}function _2(e,t){let n;return t.date&&(n=t.dateSortAscending?k2:S2),t.subject&&(n=t.subjectSortAscending?x2:C2),e.sort(n)}function k2(e,t){return new Date(e.Date)-new Date(t.Date)}function S2(e,t){return new Date(t.Date)-new Date(e.Date)}function x2(e,t){return e.Subject<t.Subject?1:t.Subject<e.Subject?-1:0}function C2(e,t){return e.Subject<t.Subject?-1:t.Subject<e.Subject?1:0}function P2(e,t){return e.filter(n=>n.To.includes(t)||n.From.includes(t)||n.Body.includes(t))}function A2(e="",t="",n=""){return{id:null,Date:new Date().toLocaleString(),From:rp.currentUser,To:e,CC:"",Subject:t,Body:n,Attachments:"","Attachments Path":"",isDraft:!0,isViewed:!0,isStarred:!1,isSelected:!1,isSent:!1,isDeleted:!1}}const Zt={"email-compose":"_email-compose_1ql9s_2","compose-popup":"_compose-popup_1ql9s_12","compose-popup-title":"_compose-popup-title_1ql9s_19","compose-input":"_compose-input_1ql9s_23","compose-textarea":"_compose-textarea_1ql9s_31","send-button":"_send-button_1ql9s_43"};function E2(){const[e,t]=x.useState(null),[n,r]=x.useState(!0),{pathname:a}=et(),i=ta(),[o,l]=Hi(),s=x.useRef(e),u=o.get("compose");x.useEffect(()=>{s.current=e},[e]),x.useEffect(()=>(u==="new"?f():d(u),()=>{h(s.current)}),[u]),x.useEffect(()=>{n||i(a)},[n]);async function f(){try{const v=await Ce.create();v.id&&t(v)}catch(v){console.log(v.message),i(a)}}async function d(v){try{const S=await Ce.getById(v);t(S)}catch(S){console.log(S.message),i(a)}}async function h(v){try{await Ce.update(v)}catch(S){console.log(S.message),i(a)}}function g(v){let{value:S,name:m}=v.target;t(c=>({...c,[m]:S}))}async function y(v){v.preventDefault(),await h({...e,Date:new Date().toLocaleString(),isDraft:!1}),t(S=>({...e,Date:new Date().toLocaleString(),isDraft:!1})),r(!1)}return e?b.jsx("div",{className:Zt["email-compose"],children:b.jsxs("div",{className:Zt["compose-popup"],children:[b.jsx("h2",{className:Zt["compose-popup-title"],children:u==="new"?"New Message":e.Subject}),b.jsxs("form",{onSubmit:y,children:[b.jsx("label",{htmlFor:"To",children:"To:"}),b.jsx("input",{type:"text",id:"To",name:"To",className:Zt["compose-input"],placeholder:"Recipient",onChange:g,value:e.To}),b.jsx("label",{htmlFor:"Subject",children:"Subject:"}),b.jsx("input",{type:"text",id:"Subject",name:"Subject",className:Zt["compose-input"],placeholder:"Subject",onChange:g,value:e.Subject}),b.jsx("textarea",{id:"Body",name:"Body",className:Zt["compose-textarea"],placeholder:"Compose your message...",onChange:g,value:e.Body}),b.jsx("button",{className:Zt["send-button"],children:"Send"})]})]})}):"Reading mail"}const N2="_appHeader_z9ncp_1",R2="_logoSection_z9ncp_13",I2="_mainMenuButton_z9ncp_20",T2="_logo_z9ncp_13",L2="_searchBox_z9ncp_29",j2="_breadcrumbs_z9ncp_36",yn={appHeader:N2,logoSection:R2,mainMenuButton:I2,logo:T2,searchBox:L2,breadcrumbs:j2};function F2({setContextFilter:e}){return b.jsxs("header",{className:yn.appHeader,children:[b.jsxs("section",{className:yn.logoSection,children:[b.jsx("button",{className:yn.mainMenuButton,title:"Main menu",children:b.jsx(Me,{icon:Ov})}),b.jsx("h1",{className:yn.logo,children:"MisterEmail"})]}),b.jsx("input",{type:"text",className:yn.searchBox,placeholder:"Start typing to search ...",onChange:e}),b.jsxs("section",{className:yn.breadcrumbs,children:[b.jsx("a",{href:"#",children:"Help"}),b.jsx("a",{href:"#",children:"Settings"}),b.jsx("a",{href:"#",children:"User"})]})]})}const M2="_emailIndex_su4ug_3",D2="_itemsList_su4ug_46",z2="_listHeader_su4ug_54",O2="_sortButton_su4ug_61",W2="_pagination_su4ug_70",B2="_paginationButton_su4ug_74",G2="_horizontalMenu_su4ug_83",Y2="_actionButton_su4ug_91",V2="_emailDetails_su4ug_99",U2="_emailContent_su4ug_103",X2="_attachments_su4ug_109",Z2="_composePopup_su4ug_115",H2={emailIndex:M2,itemsList:D2,listHeader:z2,sortButton:O2,pagination:W2,paginationButton:B2,horizontalMenu:G2,actionButton:Y2,emailDetails:V2,emailContent:U2,attachments:X2,composePopup:Z2},J2="_attachments_11kd6_28",sr={"horizontal-menu":"_horizontal-menu_11kd6_2","action-button":"_action-button_11kd6_10","email-details":"_email-details_11kd6_18","email-content":"_email-content_11kd6_22",attachments:J2};function $2({id:e,toogleIsViewed:t,toggleIsDeleted:n}){const[r,a]=x.useState(null),{pathname:i}=et(),o=ta();x.useEffect(()=>{l()},[]);async function l(){try{const u=await Ce.getById(e);a(u)}catch(u){console.error(u.message),o(i.slice(0,i.indexOf(e)-1))}}async function s(){await t(r),o(i.slice(0,i.indexOf(e)-1))}return r?b.jsxs("div",{className:sr["email-details"],children:[b.jsxs("nav",{className:"breadcrumbs",children:[b.jsx("button",{className:"back-button",title:"Back to the previous page",onClick:()=>o(i.slice(0,i.indexOf(e)-1)),children:b.jsx(Me,{icon:Vv})}),b.jsx("button",{className:sr["action-button"],title:r.isDeleted?"Restore from trash folder":"Move to trash folder",onClick:()=>n(r),children:b.jsx(Me,{icon:r.isDeleted?np:au})}),b.jsx("button",{className:sr["action-button"],title:"Mark as unread",onClick:()=>s(),children:b.jsx(Me,{icon:Bv})})]}),b.jsx("h2",{children:r==null?void 0:r.Subject}),b.jsx("div",{className:sr["email-content"],children:r==null?void 0:r.Body}),b.jsx("section",{className:sr.attachments})]}):"Loading mail details"}const Q2="_emailPreviewContainer_11cq3_1",K2="_emailPreviewItem_11cq3_12",q2="_emailPreviewItemUnread_11cq3_27",ey="_emailPreviewSelectCheckbox_11cq3_32",ty="_emailPreviewStar_11cq3_37",ny="_emailPreviewStarUnchecked_11cq3_42",ry="_emailPreviewStarChecked_11cq3_49",ay="_emailPreviewItemFrom_11cq3_57",iy="_emailPreviewItemContent_11cq3_61",oy="_emailPreviewItemDate_11cq3_65",He={emailPreviewContainer:Q2,emailPreviewItem:K2,emailPreviewItemUnread:q2,emailPreviewSelectCheckbox:ey,emailPreviewStar:ty,emailPreviewStarUnchecked:ny,emailPreviewStarChecked:ry,emailPreviewItemFrom:ay,emailPreviewItemContent:iy,emailPreviewItemDate:oy};function ly({pathname:e,mail:t,toggleIsSelected:n,toggleIsStarred:r,toogleIsViewed:a}){const i=ta(),[o,l]=Hi();function s(g){a(g),e==="/drafts"?l({compose:g.id}):i(`${g.id}`)}function u(g,y){n(y)}function f(g,y){r(y)}const d=t.isViewed?"":He.emailPreviewItemUnread,h=t.isStarred?He.emailPreviewStarChecked:He.emailPreviewStarUnchecked;return b.jsxs("div",{className:He.emailPreviewContainer,children:[b.jsxs("aside",{children:[b.jsx("input",{className:He.emailPreviewSelectCheckbox,type:"checkbox",onChange:g=>u(g,t.id),checked:t.isSelected}),b.jsx("span",{className:`${He.emailPreviewStar} ${h}`,title:t.isStarred?"Starred":"Not starred",onClick:g=>f(g,t)})]}),b.jsxs("div",{className:`${He.emailPreviewItem} ${d}`,onClick:()=>s(t),children:[b.jsx("div",{className:He.emailPreviewItemFrom,children:e==="/sent"?`To:${t.To.split("@")[0]}`:t.From.split("@")[0]}),b.jsx("div",{className:He.emailPreviewItemContent,children:t.Subject}),b.jsx("div",{className:He.emailPreviewItemDate,children:new Date(t.Date).toLocaleDateString()})]})]})}const sy="_pagination_eduqz_17",Ht={"list-header":"_list-header_eduqz_1","sort-button":"_sort-button_eduqz_8",pagination:sy,"pagination-button":"_pagination-button_eduqz_21","horizontal-menu":"_horizontal-menu_eduqz_30","action-button":"_action-button_eduqz_38"};function uy({mails:e,pathname:t,paginationParams:n,toggleSelectAll:r,toggleSelectedItemsIsDeleted:a,deletedSelectedItems:i,onPrevPageButtonClick:o,onNextPageButtonClick:l,toggleSortByDate:s,toggleSortBySubject:u}){return b.jsxs("header",{className:Ht["list-header"],children:[b.jsx("input",{type:"checkbox",className:Ht["select-all-checkbox"],onClick:f=>r(f.target.checked)}),b.jsx("button",{className:"",onClick:t==="/trash"?i:a,title:t==="/trash"?"Completely delete selected mails":"Move selected mails to Trash folder",children:b.jsx(Me,{icon:au})}),t==="/trash"&&b.jsx("button",{className:"",onClick:a,title:"Restore selected mails from Trash folder",children:b.jsx(Me,{icon:np})}),b.jsx("button",{className:Ht["sort-button"],title:"Sort by date",onClick:s,children:"Sort By Date"}),b.jsx("button",{className:Ht["sort-button"],title:"Sort by subject",onClick:u,children:"Sort By Subject"}),n&&e.length>0&&b.jsx("div",{className:Ht.pagination,children:`${n.start+1}-${n.end} of ${n.total}`}),n&&e.length>0&&b.jsx("button",{className:Ht["pagination-button"],onClick:()=>o(),children:"‹"}),n&&e.length>0&&b.jsx("button",{className:Ht["pagination-button"],onClick:()=>l(),children:"›"})]})}const cy="_emailPreviewContainer_1wllz_1",fy="_emailIndex_1wllz_12",Mo={emailPreviewContainer:cy,emailIndex:fy};function dy({mails:e,pathname:t,pageNum:n,toggleSelectAll:r,toggleIsSelected:a,toggleIsStarred:i,toogleIsViewed:o,toggleSelectedItemsIsDeleted:l,deletedSelectedItems:s,onPrevPageButtonClick:u,onNextPageButtonClick:f,toggleSortByDate:d,toggleSortBySubject:h}){const[g,y]=x.useState(null);return x.useEffect(()=>{async function v(S,m){const[c,p,w]=await Ce.getPaginationParams(S,m);y({start:c,end:p,total:w})}v(t,n)},[t,n]),b.jsxs("div",{className:Mo.emailPreviewContainer,children:[b.jsx(uy,{mails:e,pathname:t,paginationParams:g,toggleSelectAll:r,toggleSelectedItemsIsDeleted:l,deletedSelectedItems:s,onPrevPageButtonClick:u,onNextPageButtonClick:f,toggleSortByDate:d,toggleSortBySubject:h}),b.jsx("div",{className:Mo["email-preview"],children:b.jsx("ul",{className:Mo["items-list"],children:e.map(v=>b.jsx(ly,{pathname:t,mail:v,toggleIsSelected:a,toggleIsStarred:i,toogleIsViewed:o},v.id))})})]})}function my({mails:e,filterBy:t,mailId:n,toggleSelectAll:r,toggleIsSelected:a,toggleIsStarred:i,toogleIsViewed:o,toggleIsDeleted:l,toggleSelectedItemsIsDeleted:s,deletedSelectedItems:u,onPrevPageButtonClick:f,onNextPageButtonClick:d,toggleSortByDate:h,toggleSortBySubject:g}){return b.jsx("main",{children:n?b.jsx($2,{id:n,toogleIsViewed:o,toggleIsDeleted:l}):e&&b.jsx(dy,{mails:e,pathname:t.pathname,pageNum:t.pageNum,toggleSelectAll:r,toggleIsSelected:a,toggleIsStarred:i,toogleIsViewed:o,toggleSelectedItemsIsDeleted:s,deletedSelectedItems:u,onPrevPageButtonClick:f,onNextPageButtonClick:d,toggleSortByDate:h,toggleSortBySubject:g})})}function ur(){const[e,t]=x.useState(null),n=c0(),{pathname:r}=et(),[a,i]=Hi(),[o,l]=x.useState(Ce.defaultFilterBy),[s,u]=x.useState(Ce.defaultSortBy),[f,d]=x.useState(!1);x.useEffect(()=>{l(A=>({...A,pathname:r}))},[r]),x.useEffect(()=>{h()},[o,s,n]);async function h(){try{const[A,E]=await Ce.query(o,s);t(A),d(E)}catch(A){console.error(A.message),A.message==="Pagination error"&&l(E=>({...E,pageNum:Math.max(E.pageNum-1,0)}))}}function g(A){o.pageNum>0&&l(E=>({...E,pageNum:E.pageNum-1}))}function y(){f||l(A=>({...A,pageNum:A.pageNum+1}))}function v(A){t(E=>E.map(J=>J.id===A?{...J,isSelected:!J.isSelected}:J))}async function S(A){t(E=>E.map(J=>({...J,isSelected:A})))}async function m(A){const E={...A,isViewed:!A.isViewed};await Ce.update(E)}async function c(A){const E={...A,isDeleted:!A.isDeleted};await Ce.update(E)}async function p(A){const E={...A,isStarred:!A.isStarred};t(J=>J.map(ht=>ht===A?E:ht)),await Ce.update(E),h()}async function w(){const A=e.filter(E=>E.isSelected);for(let E of A){const J={...E,isSelected:!1,isDeleted:!E.isDeleted};await Ce.update(J),h()}}async function _(){const A=e.filter(E=>E.isSelected);for(let E of A)await Ce.remove(E.id),h()}function C(A){l(E=>({...E,filter:A.target.value}))}function P(){u(A=>({...A,date:!0,dateSortAscending:!A.dateSortAscending,subject:!1}))}function L(){u(A=>({...A,date:!1,subject:!0,subjectSortAscending:!A.subjectSortAscending}))}return b.jsxs(Ri.Fragment,{children:[b.jsxs("div",{className:H2.emailIndex,children:[b.jsx(F2,{setContextFilter:C}),b.jsx(e2,{}),b.jsx(my,{mails:e,filterBy:o,mailId:n.mailId,pathname:o.pathname,pageNum:o.pageNum,toggleSelectAll:S,toggleIsSelected:v,toggleIsStarred:p,toogleIsViewed:m,toggleIsDeleted:c,toggleSelectedItemsIsDeleted:w,deletedSelectedItems:_,onPrevPageButtonClick:g,onNextPageButtonClick:y,toggleSortByDate:P,toggleSortBySubject:L})]}),a.get("compose")&&b.jsx(E2,{})]})}const py=[{Date:"9/2/2013 4:36:30 AM",Subject:"top_b_box has sent a message",Body:`\r
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
`,From:"alexbol99@gmail.com",To:"support+id11699320@ryanairsupport.zendesk.com",CC:"",Attachments:"Bank account ownership.pdf; ","Attachments Path":"/Users/alexanderbol/Documents/CodingAcademy/Day3/MacUncle_September 6, 2023 4:32 PM/Mail/Starred.mbox/Attachments",id:"Z2JZMO"}];function hy(){localStorage.getItem("mails")||localStorage.setItem("mails",JSON.stringify(py));function e(){return b.jsx("div",{children:b.jsx("h2",{children:"404 Page not found"})})}return b.jsx(I0,{children:b.jsxs(x0,{children:[b.jsx(yt,{path:"/",element:b.jsx(O0,{})}),b.jsx(yt,{path:"/inbox/:mailId?",element:b.jsx(ur,{})}),b.jsx(yt,{path:"/starred/:mailId?",element:b.jsx(ur,{})}),b.jsx(yt,{path:"/sent/:mailId?",element:b.jsx(ur,{})}),b.jsx(yt,{path:"/drafts/:mailId?",element:b.jsx(ur,{})}),b.jsx(yt,{path:"/trash/:mailId?",element:b.jsx(ur,{})}),b.jsx(yt,{path:"*",element:b.jsx(e,{})})]})})}Do.createRoot(document.getElementById("root")).render(b.jsx(hy,{}));
