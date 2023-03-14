"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4195],{59335:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var r=n(67294),a=n(86010),i=n(54774),s=n(39960),o=n(52263);const l={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var u=n(87462);const c={features:"features_xdhU",featureSvg:"featureSvg__8YW"};var f=n(17857);const p=[{title:1100,description:r.createElement(r.Fragment,null,"applications")},{title:450,description:r.createElement(r.Fragment,null,"projects funded")},{title:50,description:r.createElement(r.Fragment,null,"countries")}];function d(t){let{Svg:e,title:n,description:i}=t;return r.createElement("div",{className:(0,a.Z)("col col--4")},r.createElement("div",{className:"text--center"}),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",{className:"number--count"},r.createElement(f.ZP,{end:n}),"+"),r.createElement("p",{className:"number--title"},i)))}function m(){return r.createElement("section",{className:c.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},p.map(((t,e)=>r.createElement(d,(0,u.Z)({key:e},t)))))))}function h(){const{siteConfig:t}=(0,o.Z)();return r.createElement("header",{className:(0,a.Z)("hero hero--primary",l.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},t.title," "),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:l.buttons},r.createElement(s.Z,{className:"button button--secondary button--lg",to:"./docs/Process/how-to-apply"},"Apply"),r.createElement(s.Z,{className:"button button--secondary button--lg",to:"./docs/rfps",style:{marginLeft:"20px"}},"Browse RFPs"))))}function g(){const{siteConfig:t}=(0,o.Z)();return r.createElement(i.Z,{title:`${t.title}`,description:"Web3 Foundation Grants"},r.createElement(h,null),r.createElement("main",null,r.createElement(m,null)))}},8273:(t,e,n)=>{n.r(e),n.d(e,{CountUp:()=>a});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a=function(){function t(t,e,n){var a=this;this.endVal=e,this.options=n,this.version="2.6.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var e=t-a.startTime;a.remaining=a.duration-e,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(e,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(e,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(e/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),e<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,i,s=t<0?"-":"";e=Math.abs(t).toFixed(a.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){i="";for(var l=3,u=0,c=0,f=n.length;c<f;++c)a.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(i=a.options.separator+i),u++,i=n[f-c-1]+i;n=i}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),s+a.options.prefix+n+r+a.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<e&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);null!==(e=this.options.plugin)&&void 0!==e&&e.render?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},17857:(t,e,n)=>{var r=n(67294),a=n(8273);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i,s,o=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(c){u=!0,a=c}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw a}}return o}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function d(t){var e=r.useRef(t);return p((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},g=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==c(t,2)[1]}))),n=r.useMemo((function(){return s(s({},h),e)}),[t]),i=n.ref,o=n.startOnMount,l=n.enableReinitialize,f=n.delay,p=n.onEnd,g=n.onStart,y=n.onPauseResume,b=n.onReset,v=n.onUpdate,E=u(n,m),V=r.useRef(),w=r.useRef(),O=r.useRef(!1),S=d((function(){return function(t,e){var n=e.decimal,r=e.decimals,i=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,m=e.useEasing,h=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,b=e.scrollSpyDelay,v=e.scrollSpyOnce;return new a.CountUp(t,o,{startVal:p,duration:i,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:d,useEasing:m,useIndianSeparators:g,useGrouping:h,enableScrollSpy:y,scrollSpyDelay:b,scrollSpyOnce:v})}("string"==typeof i?i:i.current,E)})),F=d((function(t){var e=V.current;if(e&&!t)return e;var n=S();return V.current=n,n})),N=d((function(){var t=function(){return F(!0).start((function(){null==p||p({pauseResume:j,reset:P,start:x,update:A})}))};f&&f>0?w.current=setTimeout(t,1e3*f):t(),null==g||g({pauseResume:j,reset:P,update:A})})),j=d((function(){F().pauseResume(),null==y||y({reset:P,start:x,update:A})})),P=d((function(){F().el&&(w.current&&clearTimeout(w.current),F().reset(),null==b||b({pauseResume:j,start:x,update:A}))})),A=d((function(t){F().update(t),null==v||v({pauseResume:j,reset:P,start:x})})),x=d((function(){P(),N()})),R=d((function(t){o&&(t&&P(),N())}));return r.useEffect((function(){O.current?l&&R(!0):(O.current=!0,R())}),[l,O,R,f,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){P()}}),[P]),{start:x,pauseResume:j,reset:P,update:A,getCountUp:F}},y=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,a=t.containerProps,i=t.children,o=t.style,c=u(t,y),f=r.useRef(null),p=r.useRef(!1),m=g(s(s({},c),{},{ref:f,startOnMount:"function"!=typeof i||0===t.delay,enableReinitialize:!1})),h=m.start,b=m.reset,v=m.update,E=m.pauseResume,V=m.getCountUp,w=d((function(){h()})),O=d((function(e){t.preserveValue||b(),v(e)})),S=d((function(){"function"!=typeof t.children||f.current instanceof Element?V():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){S()}),[S]),r.useEffect((function(){p.current&&O(t.end)}),[t.end,O]);var F=n&&t;return r.useEffect((function(){n&&p.current&&w()}),[w,n,F]),r.useEffect((function(){!n&&p.current&&w()}),[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"==typeof i?i({countUpRef:f,start:h,reset:b,update:v,pauseResume:E,getCountUp:V}):r.createElement("span",l({className:e,ref:f,style:o},a),void 0!==t.start?V().formattingFn(t.start):"")}}}]);