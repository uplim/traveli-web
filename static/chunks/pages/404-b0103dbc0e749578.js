(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{5193:function(e,n,t){"use strict";t.d(n,{hU:function(){return j},zx:function(){return N}});var r=t(7375),a=t(1604),i=t(9703),l=t(8554),o=t.n(l),c=t(7294),s=t(6450),u=t(9609);function d(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}var f=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],g=(0,s.kr)({strict:!1,name:"ButtonGroupContext"}),p=g[0],h=g[1],v=(0,a.Gp)((function(e,n){var t=e.size,r=e.colorScheme,l=e.variant,o=e.className,s=e.spacing,u=void 0===s?"0.5rem":s,g=e.isAttached,h=e.isDisabled,v=d(e,f),b=(0,i.cx)("chakra-button__group",o),x=c.useMemo((function(){return{size:t,colorScheme:r,variant:l,isDisabled:h}}),[t,r,l,h]),_={display:"inline-flex"};return _=m({},_,g?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(p,{value:x},c.createElement(a.m$.div,m({ref:n,role:"group",__css:_,className:b},v)))}));i.Ts&&(v.displayName="ButtonGroup");var b=["label","placement","spacing","children","className","__css"],x=function(e){var n=e.label,t=e.placement,r=e.spacing,l=void 0===r?"0.5rem":r,o=e.children,s=void 0===o?c.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):o,f=e.className,g=e.__css,p=d(e,b),h=(0,i.cx)("chakra-button__spinner",f),v="start"===t?"marginEnd":"marginStart",x=c.useMemo((function(){var e;return m(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[v]=n?l:0,e.fontSize="1em",e.lineHeight="normal",e),g)}),[g,n,v,l]);return c.createElement(a.m$.div,m({className:h},p,{__css:x}),s)};i.Ts&&(x.displayName="ButtonSpinner");var _=["children","className"],E=function(e){var n=e.children,t=e.className,r=d(e,_),l=c.isValidElement(n)?c.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,i.cx)("chakra-button__icon",t);return c.createElement(a.m$.span,m({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:o}),l)};i.Ts&&(E.displayName="ButtonIcon");var y=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],N=(0,a.Gp)((function(e,n){var t=h(),l=(0,a.mq)("Button",m({},t,e)),s=(0,a.Lr)(e),u=s.isDisabled,f=void 0===u?null==t?void 0:t.isDisabled:u,g=s.isLoading,p=s.isActive,v=s.isFullWidth,b=s.children,_=s.leftIcon,E=s.rightIcon,N=s.loadingText,S=s.iconSpacing,j=void 0===S?"0.5rem":S,w=s.type,O=s.spinner,I=s.spinnerPlacement,T=void 0===I?"start":I,z=s.className,B=s.as,C=d(s,y),F=c.useMemo((function(){var e,n=o()({},null!=(e=null==l?void 0:l._focus)?e:{},{zIndex:1});return m({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:v?"100%":"auto"},l,!!t&&{_focus:n})}),[l,t,v]),P=function(e){var n=c.useState(!e),t=n[0],r=n[1];return{ref:c.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(B),R=P.ref,$=P.type,A={rightIcon:E,leftIcon:_,iconSpacing:j,children:b};return c.createElement(a.m$.button,m({disabled:f||g,ref:(0,r.qq)(n,R),as:B,type:null!=w?w:$,"data-active":(0,i.PB)(p),"data-loading":(0,i.PB)(g),__css:F,className:(0,i.cx)("chakra-button",z)},C),g&&"start"===T&&c.createElement(x,{className:"chakra-button__spinner--start",label:N,placement:"start",spacing:j},O),g?N||c.createElement(a.m$.span,{opacity:0},c.createElement(k,A)):c.createElement(k,A),g&&"end"===T&&c.createElement(x,{className:"chakra-button__spinner--end",label:N,placement:"end",spacing:j},O))}));function k(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return c.createElement(c.Fragment,null,n&&c.createElement(E,{marginEnd:a},n),r,t&&c.createElement(E,{marginStart:a},t))}i.Ts&&(N.displayName="Button");var S=["icon","children","isRound","aria-label"],j=(0,a.Gp)((function(e,n){var t=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],l=d(e,S),o=t||r,s=c.isValidElement(o)?c.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(N,m({padding:"0",borderRadius:a?"full":void 0,ref:n,"aria-label":i},l),s)}));i.Ts&&(j.displayName="IconButton")},4651:function(e,n,t){"use strict";t.d(n,{Ee:function(){return f},d9:function(){return s}});var r=t(1604),a=t(9703),i=t(7294),l=t(4697);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function s(e){var n=e.loading,t=e.src,r=e.srcSet,a=e.onLoad,o=e.onError,c=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,d=(0,i.useState)("pending"),m=d[0],f=d[1];(0,i.useEffect)((function(){f(t?"loading":"pending")}),[t]);var g=(0,i.useRef)(),p=(0,i.useCallback)((function(){if(t){h();var e=new Image;e.src=t,c&&(e.crossOrigin=c),r&&(e.srcset=r),s&&(e.sizes=s),n&&(e.loading=n),e.onload=function(e){h(),f("loaded"),null==a||a(e)},e.onerror=function(e){h(),f("failed"),null==o||o(e)},g.current=e}}),[t,c,r,s,a,o,n]),h=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,l.a)((function(){if(!u)return"loading"===m&&p(),function(){h()}}),[m,p,u]),u?"loaded":m}var u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],m=i.forwardRef((function(e,n){var t=e.htmlWidth,r=e.htmlHeight,a=e.alt,l=c(e,u);return i.createElement("img",o({width:t,height:r,ref:n,alt:a},l))})),f=(0,r.Gp)((function(e,n){var t=e.fallbackSrc,l=e.fallback,u=e.src,f=e.srcSet,g=e.align,p=e.fit,h=e.loading,v=e.ignoreFallback,b=e.crossOrigin,x=c(e,d),_=null!=h||v||void 0===t&&void 0===l,E=s(o({},e,{ignoreFallback:_})),y=o({ref:n,objectFit:p,objectPosition:g},_?x:(0,a.CE)(x,["onError","onLoad"]));return"loaded"!==E?l||i.createElement(r.m$.img,o({as:m,className:"chakra-image__placeholder",src:t},y)):i.createElement(r.m$.img,o({as:m,src:u,srcSet:f,crossOrigin:b,loading:h,className:"chakra-image"},y))}));a.Ts&&(f.displayName="Image")},6141:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(680)}])},680:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(8527),i=t(4651),l=t(5193),o=t(1163);n.default=function(){var e=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.kC,{marginTop:"1.2rem",children:[(0,r.jsx)(a.LZ,{}),(0,r.jsx)(a.kC,{bgImage:"/images/traveli.svg",marginTop:"1rem",w:"7.7rem",h:"1.8rem"}),(0,r.jsx)(a.LZ,{})]}),(0,r.jsxs)(a.xu,{margin:"10.8rem auto 4.8rem auto",w:"90%",children:[(0,r.jsx)(i.Ee,{src:"/images/person_bowing.svg",alt:"\ud83d\ude47",w:"6.4rem",margin:"0 auto"}),(0,r.jsx)(a.xv,{color:"brandBlue",fontWeight:"extrabold",fontSize:"2.4rem",margin:"1.6rem 0 4.8rem 0",textAlign:"center",children:"404 Not Found"}),(0,r.jsxs)(a.xv,{color:"gray",fontWeight:"medium",fontSize:"1.5rem",textAlign:"center",children:["\u304a\u63a2\u3057\u306e\u30da\u30fc\u30b8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",(0,r.jsx)("br",{}),"\u304a\u624b\u6570\u3092\u304a\u304b\u3051\u3057\u307e\u3059\u304c\u3001",(0,r.jsx)("br",{}),"traveli\u306e\u30db\u30fc\u30e0\u3088\u308a\u3001",(0,r.jsx)("br",{}),"\u518d\u5ea6\u304a\u3055\u304c\u3057\u3044\u305f\u3060\u304d\u307e\u3059\u3088\u3046",(0,r.jsx)("br",{}),"\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002"]})]}),(0,r.jsx)(l.zx,{position:"absolute",right:"50%",transform:"translateX(50%)",variant:"round",padding:"0 6rem",w:"16.8rem",onClick:function(){return e.push("/home")},children:"\u30db\u30fc\u30e0\u3078\u3082\u3069\u308b"})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=6141,e(e.s=n);var n}));var n=e.O();_N_E=n}]);