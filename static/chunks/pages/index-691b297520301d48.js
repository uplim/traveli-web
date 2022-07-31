(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5193:function(n,e,r){"use strict";r.d(e,{hU:function(){return _},zx:function(){return E}});var t=r(7375),a=r(1604),i=r(9703),o=r(8554),l=r.n(o),c=r(7294),u=r(6450),s=r(9609);function f(n,e){if(null==n)return{};var r,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}function d(){return d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},d.apply(this,arguments)}var m=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],p=(0,u.kr)({strict:!1,name:"ButtonGroupContext"}),h=p[0],v=p[1],g=(0,a.Gp)((function(n,e){var r=n.size,t=n.colorScheme,o=n.variant,l=n.className,u=n.spacing,s=void 0===u?"0.5rem":u,p=n.isAttached,v=n.isDisabled,g=f(n,m),y=(0,i.cx)("chakra-button__group",l),b=c.useMemo((function(){return{size:r,colorScheme:t,variant:o,isDisabled:v}}),[r,t,o,v]),x={display:"inline-flex"};return x=d({},x,p?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:s}}),c.createElement(h,{value:b},c.createElement(a.m$.div,d({ref:e,role:"group",__css:x,className:y},g)))}));i.Ts&&(g.displayName="ButtonGroup");var y=["label","placement","spacing","children","className","__css"],b=function(n){var e=n.label,r=n.placement,t=n.spacing,o=void 0===t?"0.5rem":t,l=n.children,u=void 0===l?c.createElement(s.$,{color:"currentColor",width:"1em",height:"1em"}):l,m=n.className,p=n.__css,h=f(n,y),v=(0,i.cx)("chakra-button__spinner",m),g="start"===r?"marginEnd":"marginStart",b=c.useMemo((function(){var n;return d(((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"})[g]=e?o:0,n.fontSize="1em",n.lineHeight="normal",n),p)}),[p,e,g,o]);return c.createElement(a.m$.div,d({className:v},h,{__css:b}),u)};i.Ts&&(b.displayName="ButtonSpinner");var x=["children","className"],k=function(n){var e=n.children,r=n.className,t=f(n,x),o=c.isValidElement(e)?c.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,l=(0,i.cx)("chakra-button__icon",r);return c.createElement(a.m$.span,d({display:"inline-flex",alignSelf:"center",flexShrink:0},t,{className:l}),o)};i.Ts&&(k.displayName="ButtonIcon");var w=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],E=(0,a.Gp)((function(n,e){var r=v(),o=(0,a.mq)("Button",d({},r,n)),u=(0,a.Lr)(n),s=u.isDisabled,m=void 0===s?null==r?void 0:r.isDisabled:s,p=u.isLoading,h=u.isActive,g=u.isFullWidth,y=u.children,x=u.leftIcon,k=u.rightIcon,E=u.loadingText,A=u.iconSpacing,_=void 0===A?"0.5rem":A,j=u.type,N=u.spinner,I=u.spinnerPlacement,O=void 0===I?"start":I,T=u.className,C=u.as,P=f(u,w),U=c.useMemo((function(){var n,e=l()({},null!=(n=null==o?void 0:o._focus)?n:{},{zIndex:1});return d({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:g?"100%":"auto"},o,!!r&&{_focus:e})}),[o,r,g]),R=function(n){var e=c.useState(!n),r=e[0],t=e[1];return{ref:c.useCallback((function(n){n&&t("BUTTON"===n.tagName)}),[]),type:r?"button":void 0}}(C),B=R.ref,$=R.type,z={rightIcon:k,leftIcon:x,iconSpacing:_,children:y};return c.createElement(a.m$.button,d({disabled:m||p,ref:(0,t.qq)(e,B),as:C,type:null!=j?j:$,"data-active":(0,i.PB)(h),"data-loading":(0,i.PB)(p),__css:U,className:(0,i.cx)("chakra-button",T)},P),p&&"start"===O&&c.createElement(b,{className:"chakra-button__spinner--start",label:E,placement:"start",spacing:_},N),p?E||c.createElement(a.m$.span,{opacity:0},c.createElement(S,z)):c.createElement(S,z),p&&"end"===O&&c.createElement(b,{className:"chakra-button__spinner--end",label:E,placement:"end",spacing:_},N))}));function S(n){var e=n.leftIcon,r=n.rightIcon,t=n.children,a=n.iconSpacing;return c.createElement(c.Fragment,null,e&&c.createElement(k,{marginEnd:a},e),t,r&&c.createElement(k,{marginStart:a},r))}i.Ts&&(E.displayName="Button");var A=["icon","children","isRound","aria-label"],_=(0,a.Gp)((function(n,e){var r=n.icon,t=n.children,a=n.isRound,i=n["aria-label"],o=f(n,A),l=r||t,u=c.isValidElement(l)?c.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(E,d({padding:"0",borderRadius:a?"full":void 0,ref:e,"aria-label":i},o),u)}));i.Ts&&(_.displayName="IconButton")},4651:function(n,e,r){"use strict";r.d(e,{Ee:function(){return m},d9:function(){return u}});var t=r(1604),a=r(9703),i=r(7294),o=r(4697);function l(){return l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},l.apply(this,arguments)}function c(n,e){if(null==n)return{};var r,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}function u(n){var e=n.loading,r=n.src,t=n.srcSet,a=n.onLoad,l=n.onError,c=n.crossOrigin,u=n.sizes,s=n.ignoreFallback,f=(0,i.useState)("pending"),d=f[0],m=f[1];(0,i.useEffect)((function(){m(r?"loading":"pending")}),[r]);var p=(0,i.useRef)(),h=(0,i.useCallback)((function(){if(r){v();var n=new Image;n.src=r,c&&(n.crossOrigin=c),t&&(n.srcset=t),u&&(n.sizes=u),e&&(n.loading=e),n.onload=function(n){v(),m("loaded"),null==a||a(n)},n.onerror=function(n){v(),m("failed"),null==l||l(n)},p.current=n}}),[r,c,t,u,a,l,e]),v=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,o.a)((function(){if(!s)return"loading"===d&&h(),function(){v()}}),[d,h,s]),s?"loaded":d}var s=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=i.forwardRef((function(n,e){var r=n.htmlWidth,t=n.htmlHeight,a=n.alt,o=c(n,s);return i.createElement("img",l({width:r,height:t,ref:e,alt:a},o))})),m=(0,t.Gp)((function(n,e){var r=n.fallbackSrc,o=n.fallback,s=n.src,m=n.srcSet,p=n.align,h=n.fit,v=n.loading,g=n.ignoreFallback,y=n.crossOrigin,b=c(n,f),x=null!=v||g||void 0===r&&void 0===o,k=u(l({},n,{ignoreFallback:x})),w=l({ref:e,objectFit:h,objectPosition:p},x?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==k?o||i.createElement(t.m$.img,l({as:d,className:"chakra-image__placeholder",src:r},w)):i.createElement(t.m$.img,l({as:d,src:s,srcSet:m,crossOrigin:y,loading:v,className:"chakra-image"},w))}));a.Ts&&(m.displayName="Image")},8312:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5970)}])},4588:function(n,e,r){"use strict";r.d(e,{lN:function(){return p},QJ:function(){return y}});r(7417);var t=r(4051),a=r.n(t),i=r(1163),o=r(5873),l=r(4480),c=r(7375),u=r(7658),s=r(8843);function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function d(n,e,r,t,a,i,o){try{var l=n[i](o),c=l.value}catch(u){return void r(u)}l.done?e(c):Promise.resolve(c).then(t,a)}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,l=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return f(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(){var n=(0,i.useRouter)(),e=m((0,c.kt)(),2),r=e[0],t=e[1],f=(0,l.Zl)(u.y),p=(0,l.Zl)(u.f),h=(0,s.O2)().createUser,v=function(){var e,r=(e=a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.on(),r=(0,o.v0)(),e.prev=2,!r.currentUser){e.next=6;break}return n.push("/home"),e.abrupt("return");case 6:return e.next=8,(0,o.XB)(r);case 8:(0,o.Aj)(r,(function(n){n?(f({uid:n.uid,isAnonymous:n.isAnonymous}),h(n)):f(null)})),p("/"),n.push("/user"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0),t.off();case 17:case"end":return e.stop()}}),e,null,[[2,13]])})),function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(n){d(i,t,a,o,l,"next",n)}function l(n){d(i,t,a,o,l,"throw",n)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();return{signInAnonymouslyHandler:v,disabled:r}};function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function v(n,e,r,t,a,i,o){try{var l=n[i](o),c=l.value}catch(u){return void r(u)}l.done?e(c):Promise.resolve(c).then(t,a)}function g(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,l=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(){var n=(0,i.useRouter)(),e=g((0,c.kt)(),2),r=e[0],t=e[1],s=(0,l.Zl)(u.y),f=function(){var e,r=(e=a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.on(),e.prev=1,(r=(0,o.v0)()).currentUser){e.next=6;break}return t.off(),e.abrupt("return");case 6:return e.next=8,r.signOut();case 8:s(null),t.off(),n.push("/"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0),t.off();case 17:case"end":return e.stop()}}),e,null,[[1,13]])})),function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(n){v(i,t,a,o,l,"next",n)}function l(n){v(i,t,a,o,l,"throw",n)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();return{signOutHandler:f,disabled:r}}},5684:function(n,e,r){"use strict";r.d(e,{d:function(){return p}});var t=r(4051),a=r.n(t),i=r(1163),o=r(5873),l=r(4480),c=r(7658),u=r(7375),s=r(8843);function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function d(n,e,r,t,a,i,o){try{var l=n[i](o),c=l.value}catch(u){return void r(u)}l.done?e(c):Promise.resolve(c).then(t,a)}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,l=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return f(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(){var n=(0,i.useRouter)(),e=m((0,u.kt)(),2),r=e[0],t=e[1],f=m((0,l.FV)(c.y),2),p=f[0],h=f[1],v=(0,s.O2)().createUser,g=function(){var e,r=(e=a().mark((function e(){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.on(),r=(0,o.v0)(),i=new o.hJ,!r.currentUser){e.next=8;break}return e.next=6,(0,o.k9)(r.currentUser,i).then((function(e){var r=e.user;h({uid:r.uid,isAnonymous:r.isAnonymous}),n.push("/home")})).catch((function(n){console.error(n),h(null),t.off()}));case 6:e.next=10;break;case 8:return e.next=10,(0,o.rh)(r,i).then((function(e){var r=e.user;h({uid:r.uid,isAnonymous:r.isAnonymous}),n.push("/home"),v(r)})).catch((function(n){console.error(n),h(null),t.off()}));case 10:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(n){d(i,t,a,o,l,"next",n)}function l(n){d(i,t,a,o,l,"throw",n)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();return{signInGoogleHandler:g,disabled:r,currentUser:p}}},5970:function(n,e,r){"use strict";r.r(e);var t=r(5893),a=r(4588),i=r(8527),o=r(4651),l=r(5684),c=r(2837),u=r(2770);e.default=function(){var n=(0,a.lN)(),e=n.signInAnonymouslyHandler,r=n.disabled,s=(0,l.d)(),f=s.signInGoogleHandler,d=s.disabled;return(0,t.jsxs)(c.A,{children:[(0,t.jsx)(i.kC,{mt:"7.7rem",alignItems:"center",justifyContent:"center",children:(0,t.jsx)(o.Ee,{src:"/images/top.svg",alt:""})}),(0,t.jsx)(i.xu,{mt:"4.3rem",textAlign:"right",children:(0,t.jsx)(o.Ee,{src:"/images/text.svg",alt:"",display:"inline"})}),(0,t.jsx)(i.xu,{mt:"-5rem",textAlign:"center",children:(0,t.jsx)(o.Ee,{src:"/images/smartphone.svg",alt:"",w:"100%",h:"100%"})}),(0,t.jsxs)(i.xv,{mt:"2.7rem",textAlign:"center",lineHeight:"1.92rem",fontSize:"md",children:["traveli\u306f\u3001\u65c5\u5148\u3067\u5fc5\u8981\u306aURL\u3092\u307e\u3068\u3081\u3066\u3001",(0,t.jsx)("br",{})," \u7ba1\u7406\u30fb\u5171\u6709\u3067\u304d\u308bweb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002"]}),(0,t.jsx)(u.p4,{disabled:d,mt:"2.1rem",iconType:"google",onClick:function(){f()}}),(0,t.jsx)(u.p4,{disabled:r,mt:"2.1rem",iconType:"anonymous",onClick:function(){e()}})]})}}},function(n){n.O(0,[856,774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);