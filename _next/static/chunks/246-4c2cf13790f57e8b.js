(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{8273:function(e,n,r){"use strict";r.r(n),r.d(n,{CountUp:function(){return a}});var t=function(){return(t=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var s in n=arguments[r])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},a=function(){function i(e,n,r){var a=this;this.endVal=n,this.options=r,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){a.startTime||(a.startTime=e);var n=e-a.startTime;a.remaining=a.duration-n,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(n,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(n,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(n/a.duration);var r=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=r?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),n<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(e){var n,r,s,o=(Math.abs(e).toFixed(a.options.decimalPlaces)+"").split(".");if(n=o[0],r=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){s="";for(var u=3,l=0,c=0,f=n.length;c<f;++c)a.options.useIndianSeparators&&4===c&&(u=2,l=1),0!==c&&l%u==0&&(s=a.options.separator+s),l++,s=n[f-c-1]+s;n=s}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return a.options.numerals[+e]}),r=r.replace(/[0-9]/g,function(e){return a.options.numerals[+e]})),(e<0?"-":"")+a.options.prefix+n+r+a.options.suffix},this.easeOutExpo=function(e,n,r,a){return r*(1-Math.pow(2,-10*e/a))*1024/1023+n},this.options=t(t({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return a.handleScroll(a)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return i.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),a=r.top+window.pageYOffset,s=r.top+r.height+window.pageYOffset;s<n&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||a>n)&&!e.paused&&e.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(e){var n;if(this.el){var r=this.formattingFn(e);(null===(n=this.options.plugin)||void 0===n?void 0:n.render)?this.options.plugin.render(this.el,r):"INPUT"===this.el.tagName?this.el.value=r:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=r:this.el.innerHTML=r}},i.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},i.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}()},9008:function(e,n,r){e.exports=r(4605)},7857:function(e,n,r){"use strict";var a=r(7294),s=r(8273);function ownKeys(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function _objectSpread2(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(r),!0).forEach(function(n){var a,s;a=n,s=r[n],(a=function(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,a=Array(n);r<n;r++)a[r]=e[r];return a}var o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function useEventCallback(e){var n=a.useRef(e);return o(function(){n.current=e}),a.useCallback(function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return n.current.apply(void 0,r)},[])}var createCountUpInstance=function(e,n){var r=n.decimal,a=n.decimals,o=n.duration,u=n.easingFn,l=n.end,c=n.formattingFn,f=n.numerals,p=n.prefix,d=n.separator,h=n.start,m=n.suffix,g=n.useEasing,v=n.useGrouping,y=n.useIndianSeparators,b=n.enableScrollSpy,V=n.scrollSpyDelay,w=n.scrollSpyOnce;return new s.CountUp(e,l,{startVal:h,duration:o,decimal:r,decimalPlaces:a,easingFn:u,formattingFn:c,numerals:f,separator:d,prefix:p,suffix:m,useEasing:g,useIndianSeparators:y,useGrouping:v,enableScrollSpy:b,scrollSpyDelay:V,scrollSpyOnce:w})},u=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],l={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1};n.$i=function(e){var n=Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==(function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,s,o,u,l=[],c=!0,f=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(l.push(a.value),l.length!==n);c=!0);}catch(e){f=!0,s=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(f)throw s}}return l}}(e,2)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,n)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),r=a.useMemo(function(){return _objectSpread2(_objectSpread2({},l),n)},[e]),s=r.ref,o=r.startOnMount,c=r.enableReinitialize,f=r.delay,p=r.onEnd,d=r.onStart,h=r.onPauseResume,m=r.onReset,g=r.onUpdate,v=function(e,n){if(null==e)return{};var r,a,s=function(e,n){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(r,u),y=a.useRef(),b=a.useRef(),V=a.useRef(!1),w=useEventCallback(function(){return createCountUpInstance("string"==typeof s?s:s.current,v)}),E=useEventCallback(function(e){var n=y.current;if(n&&!e)return n;var r=w();return y.current=r,r}),O=useEventCallback(function(){var run=function(){return E(!0).start(function(){null==p||p({pauseResume:S,reset:A,start:F,update:C})})};f&&f>0?b.current=setTimeout(run,1e3*f):run(),null==d||d({pauseResume:S,reset:A,update:C})}),S=useEventCallback(function(){E().pauseResume(),null==h||h({reset:A,start:F,update:C})}),A=useEventCallback(function(){E().el&&(b.current&&clearTimeout(b.current),E().reset(),null==m||m({pauseResume:S,start:F,update:C}))}),C=useEventCallback(function(e){E().update(e),null==g||g({pauseResume:S,reset:A,start:F})}),F=useEventCallback(function(){A(),O()}),j=useEventCallback(function(e){o&&(e&&A(),O())});return a.useEffect(function(){V.current?c&&j(!0):(V.current=!0,j())},[c,V,j,f,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),a.useEffect(function(){return function(){A()}},[A]),{start:F,pauseResume:S,reset:A,update:C,getCountUp:E}}},5815:function(e,n,r){"use strict";r.d(n,{Z:function(){return useOnClickOutside}});var a,s=r(7294),are_passive_events_supported_esm_browser=function(){if(void 0!==a)return a;var e=!1,n={get passive(){e=!0}},noop=function(){};return window.addEventListener("t",noop,n),window.removeEventListener("t",noop,n),a=e,e},o=s.useLayoutEffect,useLatest=function(e){var n=s.useRef(e);return o(function(){n.current=e}),n},u="touchstart",l=["mousedown",u],getAddOptions=function(e){if(e===u&&are_passive_events_supported_esm_browser())return{passive:!0}},c=document;function useOnClickOutside(e,n,r){var a=(void 0===r?{}:r).document,o=void 0===a?c:a,u=useLatest(n);(0,s.useEffect)(function(){if(n){var listener=function(n){!e.current||!u.current||e.current.contains(n.target)||u.current(n)};return l.forEach(function(e){o.addEventListener(e,listener,getAddOptions(e))}),function(){l.forEach(function(e){o.removeEventListener(e,listener)})}}},[!n])}},2708:function(e,n,r){"use strict";r.d(n,{YD:function(){return useInView}});var a=r(7294),s=Object.defineProperty,o=new Map,u=new WeakMap,l=0,c=void 0;function useInView({threshold:e,delay:n,trackVisibility:r,rootMargin:s,root:f,triggerOnce:p,skip:d,initialInView:h,fallbackInView:m,onChange:g}={}){var v;let[y,b]=a.useState(null),V=a.useRef(),[w,E]=a.useState({inView:!!h,entry:void 0});V.current=g,a.useEffect(()=>{let a;if(!d&&y)return a=function(e,n,r={},a=c){if(void 0===window.IntersectionObserver&&void 0!==a){let s=e.getBoundingClientRect();return n(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:f,elements:p}=function(e){let n=Object.keys(e).sort().filter(n=>void 0!==e[n]).map(n=>{var r;return`${n}_${"root"===n?(r=e.root)?(u.has(r)||(l+=1,u.set(r,l.toString())),u.get(r)):"0":e[n]}`}).toString(),r=o.get(n);if(!r){let a;let s=new Map,u=new IntersectionObserver(n=>{n.forEach(n=>{var r;let o=n.isIntersecting&&a.some(e=>n.intersectionRatio>=e);e.trackVisibility&&void 0===n.isVisible&&(n.isVisible=o),null==(r=s.get(n.target))||r.forEach(e=>{e(o,n)})})},e);a=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:u,elements:s},o.set(n,r)}return r}(r),d=p.get(e)||[];return p.has(e)||p.set(e,d),d.push(n),f.observe(e),function(){d.splice(d.indexOf(n),1),0===d.length&&(p.delete(e),f.unobserve(e)),0===p.size&&(f.disconnect(),o.delete(s))}}(y,(e,n)=>{E({inView:e,entry:n}),V.current&&V.current(e,n),n.isIntersecting&&p&&a&&(a(),a=void 0)},{root:f,rootMargin:s,threshold:e,trackVisibility:r,delay:n},m),()=>{a&&a()}},[Array.isArray(e)?e.toString():e,y,f,s,p,d,r,m,n]);let O=null==(v=w.entry)?void 0:v.target,S=a.useRef();y||!O||p||d||S.current===O||(S.current=O,E({inView:!!h,entry:void 0}));let A=[b,w.inView,w.entry];return A.ref=A[0],A.inView=A[1],A.entry=A[2],A}a.Component}}]);