(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5193:function(e,n,t){"use strict";t.d(n,{hU:function(){return w},zx:function(){return N}});var r=t(7375),a=t(1604),i=t(9703),o=t(8554),s=t.n(o),c=t(7294),l=t(6450),u=t(9609);function d(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}var p=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],m=(0,l.kr)({strict:!1,name:"ButtonGroupContext"}),h=m[0],v=m[1],y=(0,a.Gp)((function(e,n){var t=e.size,r=e.colorScheme,o=e.variant,s=e.className,l=e.spacing,u=void 0===l?"0.5rem":l,m=e.isAttached,v=e.isDisabled,y=d(e,p),b=(0,i.cx)("chakra-button__group",s),g=c.useMemo((function(){return{size:t,colorScheme:r,variant:o,isDisabled:v}}),[t,r,o,v]),x={display:"inline-flex"};return x=f({},x,m?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(h,{value:g},c.createElement(a.m$.div,f({ref:n,role:"group",__css:x,className:b,"data-attached":m?"":void 0},y)))}));i.Ts&&(y.displayName="ButtonGroup");var b=["label","placement","spacing","children","className","__css"],g=function(e){var n=e.label,t=e.placement,r=e.spacing,o=void 0===r?"0.5rem":r,s=e.children,l=void 0===s?c.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):s,p=e.className,m=e.__css,h=d(e,b),v=(0,i.cx)("chakra-button__spinner",p),y="start"===t?"marginEnd":"marginStart",g=c.useMemo((function(){var e;return f(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[y]=n?o:0,e.fontSize="1em",e.lineHeight="normal",e),m)}),[m,n,y,o]);return c.createElement(a.m$.div,f({className:v},h,{__css:g}),l)};i.Ts&&(g.displayName="ButtonSpinner");var x=["children","className"],_=function(e){var n=e.children,t=e.className,r=d(e,x),o=c.isValidElement(n)?c.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,s=(0,i.cx)("chakra-button__icon",t);return c.createElement(a.m$.span,f({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:s}),o)};i.Ts&&(_.displayName="ButtonIcon");var E=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],N=(0,a.Gp)((function(e,n){var t=v(),o=(0,a.mq)("Button",f({},t,e)),l=(0,a.Lr)(e),u=l.isDisabled,p=void 0===u?null==t?void 0:t.isDisabled:u,m=l.isLoading,h=l.isActive,y=l.children,b=l.leftIcon,x=l.rightIcon,_=l.loadingText,N=l.iconSpacing,k=void 0===N?"0.5rem":N,w=l.type,j=l.spinner,A=l.spinnerPlacement,I=void 0===A?"start":A,T=l.className,B=l.as,O=d(l,E),C=c.useMemo((function(){var e,n=s()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return f({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},o,!!t&&{_focus:n})}),[o,t]),P=function(e){var n=c.useState(!e),t=n[0],r=n[1];return{ref:c.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(B),z=P.ref,R=P.type,$={rightIcon:x,leftIcon:b,iconSpacing:k,children:y};return c.createElement(a.m$.button,f({disabled:p||m,ref:(0,r.qq)(n,z),as:B,type:null!=w?w:R,"data-active":(0,i.PB)(h),"data-loading":(0,i.PB)(m),__css:C,className:(0,i.cx)("chakra-button",T)},O),m&&"start"===I&&c.createElement(g,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:k},j),m?_||c.createElement(a.m$.span,{opacity:0},c.createElement(S,$)):c.createElement(S,$),m&&"end"===I&&c.createElement(g,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:k},j))}));function S(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return c.createElement(c.Fragment,null,n&&c.createElement(_,{marginEnd:a},n),r,t&&c.createElement(_,{marginStart:a},t))}i.Ts&&(N.displayName="Button");var k=["icon","children","isRound","aria-label"],w=(0,a.Gp)((function(e,n){var t=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],o=d(e,k),s=t||r,l=c.isValidElement(s)?c.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(N,f({padding:"0",borderRadius:a?"full":void 0,ref:n,"aria-label":i},o),l)}));i.Ts&&(w.displayName="IconButton")},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4422)}])},4422:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(5893),a=t(1664),i=t.n(a),o=(t(7417),t(4051)),s=t.n(o),c=t(1163),l=t(5873),u=t(5321),d=t(4480),f=t(7375),p=t(3125);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){h(i,r,a,o,s,"next",e)}function s(e){h(i,r,a,o,s,"throw",e)}o(void 0)}))}}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=t(5193),g=t(8527),x=function(){var e=function(){var e=y((0,f.kt)(),2),n=e[0],t=e[1],r=(0,c.useRouter)(),a=(0,d.Zl)(p.y),i=function(){var e=v(s().mark((function e(n){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,u.ad)(),r=(0,u.hJ)(t,"users"),a=(0,u.JU)(r,n.uid),e.next=5,(0,u.QT)(a);case 5:if(!e.sent.exists()){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,(0,u.pl)(a,{uid:n.uid,isAnonymous:n.isAnonymous});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=v(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.on(),n=(0,l.v0)(),e.prev=2,e.next=5,(0,l.XB)(n);case 5:(0,l.Aj)(n,(function(e){e?(a({uid:e.uid,isAnonymous:e.isAnonymous}),i(e)):a(null)})),r.push("/home"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),t.off();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return{signInAnonymouslyHandler:o,disabled:n}}(),n=e.signInAnonymouslyHandler,t=e.disabled;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.xv,{fontWeight:"bold",children:"index\u30da\u30fc\u30b8"}),(0,r.jsx)(i(),{href:"/signin",passHref:!0,children:(0,r.jsx)("a",{href:"replace",children:(0,r.jsx)("p",{children:"/signin"})})}),(0,r.jsx)(i(),{href:"/signup",passHref:!0,children:(0,r.jsx)("a",{href:"replace",children:(0,r.jsx)("p",{children:"/signup"})})}),(0,r.jsx)(b.zx,{bgColor:"brandBlue",disabled:t,onClick:function(){return n()},children:"\u767b\u9332\u305b\u305a\u5229\u7528"})]})}}},function(e){e.O(0,[664,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);