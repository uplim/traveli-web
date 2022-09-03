(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5193:function(n,e,t){"use strict";t.d(e,{hU:function(){return N},zx:function(){return _}});var r=t(7375),a=t(6052),i=t(9703),o=t(8554),l=t.n(o),c=t(7294),s=t(6450),u=t(9609);function d(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}function f(){return f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},f.apply(this,arguments)}var m=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],p=(0,s.kr)({strict:!1,name:"ButtonGroupContext"}),g=p[0],h=p[1],v=(0,a.Gp)((function(n,e){var t=n.size,r=n.colorScheme,o=n.variant,l=n.className,s=n.spacing,u=void 0===s?"0.5rem":s,p=n.isAttached,h=n.isDisabled,v=d(n,m),y=(0,i.cx)("chakra-button__group",l),b=c.useMemo((function(){return{size:t,colorScheme:r,variant:o,isDisabled:h}}),[t,r,o,h]),x={display:"inline-flex"};return x=f({},x,p?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(g,{value:b},c.createElement(a.m$.div,f({ref:e,role:"group",__css:x,className:y},v)))}));i.Ts&&(v.displayName="ButtonGroup");var y=["label","placement","spacing","children","className","__css"],b=function(n){var e=n.label,t=n.placement,r=n.spacing,o=void 0===r?"0.5rem":r,l=n.children,s=void 0===l?c.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):l,m=n.className,p=n.__css,g=d(n,y),h=(0,i.cx)("chakra-button__spinner",m),v="start"===t?"marginEnd":"marginStart",b=c.useMemo((function(){var n;return f(((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"})[v]=e?o:0,n.fontSize="1em",n.lineHeight="normal",n),p)}),[p,e,v,o]);return c.createElement(a.m$.div,f({className:h},g,{__css:b}),s)};i.Ts&&(b.displayName="ButtonSpinner");var x=["children","className"],E=function(n){var e=n.children,t=n.className,r=d(n,x),o=c.isValidElement(e)?c.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,l=(0,i.cx)("chakra-button__icon",t);return c.createElement(a.m$.span,f({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:l}),o)};i.Ts&&(E.displayName="ButtonIcon");var S=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],_=(0,a.Gp)((function(n,e){var t=h(),o=(0,a.mq)("Button",f({},t,n)),s=(0,a.Lr)(n),u=s.isDisabled,m=void 0===u?null==t?void 0:t.isDisabled:u,p=s.isLoading,g=s.isActive,v=s.isFullWidth,y=s.children,x=s.leftIcon,E=s.rightIcon,_=s.loadingText,w=s.iconSpacing,N=void 0===w?"0.5rem":w,j=s.type,A=s.spinner,I=s.spinnerPlacement,O=void 0===I?"start":I,T=s.className,C=s.as,P=d(s,S),R=c.useMemo((function(){var n,e=l()({},null!=(n=null==o?void 0:o._focus)?n:{},{zIndex:1});return f({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:v?"100%":"auto"},o,!!t&&{_focus:e})}),[o,t,v]),B=function(n){var e=c.useState(!n),t=e[0],r=e[1];return{ref:c.useCallback((function(n){n&&r("BUTTON"===n.tagName)}),[]),type:t?"button":void 0}}(C),U=B.ref,$=B.type,z={rightIcon:E,leftIcon:x,iconSpacing:N,children:y};return c.createElement(a.m$.button,f({disabled:m||p,ref:(0,r.qq)(e,U),as:C,type:null!=j?j:$,"data-active":(0,i.PB)(g),"data-loading":(0,i.PB)(p),__css:R,className:(0,i.cx)("chakra-button",T)},P),p&&"start"===O&&c.createElement(b,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:N},A),p?_||c.createElement(a.m$.span,{opacity:0},c.createElement(k,z)):c.createElement(k,z),p&&"end"===O&&c.createElement(b,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:N},A))}));function k(n){var e=n.leftIcon,t=n.rightIcon,r=n.children,a=n.iconSpacing;return c.createElement(c.Fragment,null,e&&c.createElement(E,{marginEnd:a},e),r,t&&c.createElement(E,{marginStart:a},t))}i.Ts&&(_.displayName="Button");var w=["icon","children","isRound","aria-label"],N=(0,a.Gp)((function(n,e){var t=n.icon,r=n.children,a=n.isRound,i=n["aria-label"],o=d(n,w),l=t||r,s=c.isValidElement(l)?c.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(_,f({padding:"0",borderRadius:a?"full":void 0,ref:e,"aria-label":i},o),s)}));i.Ts&&(N.displayName="IconButton")},4651:function(n,e,t){"use strict";t.d(e,{Ee:function(){return m},d9:function(){return s}});var r=t(6052),a=t(9703),i=t(7294),o=t(4697);function l(){return l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},l.apply(this,arguments)}function c(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}function s(n){var e=n.loading,t=n.src,r=n.srcSet,a=n.onLoad,l=n.onError,c=n.crossOrigin,s=n.sizes,u=n.ignoreFallback,d=(0,i.useState)("pending"),f=d[0],m=d[1];(0,i.useEffect)((function(){m(t?"loading":"pending")}),[t]);var p=(0,i.useRef)(),g=(0,i.useCallback)((function(){if(t){h();var n=new Image;n.src=t,c&&(n.crossOrigin=c),r&&(n.srcset=r),s&&(n.sizes=s),e&&(n.loading=e),n.onload=function(n){h(),m("loaded"),null==a||a(n)},n.onerror=function(n){h(),m("failed"),null==l||l(n)},p.current=n}}),[t,c,r,s,a,l,e]),h=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,o.a)((function(){if(!u)return"loading"===f&&g(),function(){h()}}),[f,g,u]),u?"loaded":f}var u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=i.forwardRef((function(n,e){var t=n.htmlWidth,r=n.htmlHeight,a=n.alt,o=c(n,u);return i.createElement("img",l({width:t,height:r,ref:e,alt:a},o))})),m=(0,r.Gp)((function(n,e){var t=n.fallbackSrc,o=n.fallback,u=n.src,m=n.srcSet,p=n.align,g=n.fit,h=n.loading,v=n.ignoreFallback,y=n.crossOrigin,b=c(n,d),x=null!=h||v||void 0===t&&void 0===o,E=s(l({},n,{ignoreFallback:x})),S=l({ref:e,objectFit:g,objectPosition:p},x?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==E?o||i.createElement(r.m$.img,l({as:f,className:"chakra-image__placeholder",src:t},S)):i.createElement(r.m$.img,l({as:f,src:u,srcSet:m,crossOrigin:y,loading:h,className:"chakra-image"},S))}));a.Ts&&(m.displayName="Image")},8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(153)}])},5684:function(n,e,t){"use strict";t.d(e,{d:function(){return p}});var r=t(4051),a=t.n(r),i=t(1163),o=t(5873),l=t(4480),c=t(3125),s=t(7375),u=t(8843);function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function f(n,e,t,r,a,i,o){try{var l=n[i](o),c=l.value}catch(s){return void t(s)}l.done?e(c):Promise.resolve(c).then(r,a)}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,i=[],o=!0,l=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(){var n=(0,i.useRouter)(),e=m((0,s.kt)(),2),t=e[0],r=e[1],d=m((0,l.FV)(c.y),2),p=d[0],g=d[1],h=u.O2,v=function(){var e,t=(e=a().mark((function e(){var t,i,l,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.on(),t=(0,o.v0)(),i=new o.hJ,!t.currentUser){e.next=9;break}return e.next=6,(0,o.k9)(t.currentUser,i);case 6:(0,o.Aj)(t,(function(e){g(e?{uid:e.uid,isAnonymous:e.isAnonymous}:null),n.push("/home")})),e.next=15;break;case 9:return e.next=12,(0,o.rh)(t,i);case 12:c=e.sent,s=null===(l=(0,o.gK)(c))||void 0===l?void 0:l.isNewUser,(0,o.Aj)(t,(function(e){if(e){if(s){var t,r,a={uid:e.uid,isAnonymous:e.isAnonymous,name:null!==(t=e.providerData[0].displayName)&&void 0!==t?t:"",icon:null!==(r=e.providerData[0].photoURL)&&void 0!==r?r:""};h(a),g(a)}}else g(null);n.push("/home")}));case 15:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(n){f(i,r,a,o,l,"next",n)}function l(n){f(i,r,a,o,l,"throw",n)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return{signInGoogleHandler:v,disabled:t,currentUser:p}}},153:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r=t(5893),a=t(9301),i=t(8527),o=t(4651),l=t(5684),c=t(2837),s=t(2770),u=t(7375),d=t(7294);function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,i=[],o=!0,l=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return f(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=t(7043),g=function(){var n=(0,a.lN)(),e=n.signInAnonymouslyHandler,t=n.disabled,f=(0,l.d)(),g=f.signInGoogleHandler,h=f.disabled,v=function(n){var e=m((0,u.kt)(),2),t=e[0],r=e[1];return(0,d.useEffect)((function(){r.on();var e=new Image;e.onload=function(){r.off()},e.src=n}),[]),{isLoading:t}}("/images/smartphone.png").isLoading;return(0,r.jsx)(c.A,{children:v?(0,r.jsx)(p.g,{}):(0,r.jsxs)(i.xu,{py:"7.7rem",children:[(0,r.jsx)(i.kC,{alignItems:"center",justifyContent:"center",children:(0,r.jsx)(o.Ee,{src:"/images/top.svg",alt:""})}),(0,r.jsx)(i.xu,{mt:"4.3rem",textAlign:"right",children:(0,r.jsx)(o.Ee,{src:"/images/text.svg",alt:"",display:"inline"})}),(0,r.jsx)(i.xu,{mt:"-3rem",textAlign:"center",children:(0,r.jsx)(o.Ee,{src:"/images/smartphone.png",alt:"",w:"100%",h:"100%"})}),(0,r.jsxs)(i.xv,{mt:"2.7rem",textAlign:"center",lineHeight:"1.92rem",fontSize:"md",children:["traveli\u306f\u3001\u65c5\u5148\u3067\u5fc5\u8981\u306aURL\u3092\u307e\u3068\u3081\u3066\u3001",(0,r.jsx)("br",{})," \u7ba1\u7406\u30fb\u5171\u6709\u3067\u304d\u308bweb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002"]}),(0,r.jsx)(s.p4,{disabled:h,mt:"2.1rem",iconType:"google",onClick:function(){g()}}),(0,r.jsx)(s.p4,{disabled:t,mt:"2.1rem",iconType:"anonymous",onClick:function(){e()}})]})})}}},function(n){n.O(0,[856,774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);