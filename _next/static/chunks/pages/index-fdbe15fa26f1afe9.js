(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6842)}])},7127:function(e,t,n){"use strict";var a=n(5893),i=(n(7294),n(1664)),r=n.n(i);t.Z=function(){return(0,a.jsxs)("div",{className:"border-t-[1px] mt-14 flex justify-around items-center text-white py-2",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(r(),{href:"/contact",children:(0,a.jsx)("p",{className:"cursor-pointer hover:text-gray-300 hover:scale-110 ease-out duration-500",children:"Contact"})}),(0,a.jsx)("p",{children:"Email: ondrejhrzan@gmail.com"})]}),(0,a.jsx)("div",{className:"flex"}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"text-xs italic",children:"Copyright \xa9 2022 - Hrz\xe1n Ond\u0159ej"})})]})}},2787:function(e,t,n){"use strict";var a=n(5893),i=(n(7294),n(1664)),r=n.n(i);t.Z=function(){return(0,a.jsxs)("div",{className:"text-white bg-black top-0 max-w-screen flex justify-end items-center h-14 pr-[100px] border-b-[1px]",children:[(0,a.jsx)(r(),{href:"/",children:(0,a.jsx)("p",{className:"px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none",children:"Home"})}),(0,a.jsx)(r(),{href:"/about",children:(0,a.jsx)("p",{className:"px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none",children:"About"})}),(0,a.jsx)(r(),{href:"/contact",children:(0,a.jsx)("p",{className:"px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none",children:"Contact"})})]})}},9749:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return r}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,s=void 0!==a&&a,l=e.priority,c=void 0!==l&&l,m=e.loading,g=e.lazyRoot,j=void 0===g?null:g,N=e.lazyBoundary,E=void 0===N?"200px":N,I=e.className,T=e.quality,M=e.width,P=e.height,_=e.style,R=e.objectFit,L=e.objectPosition,C=e.onLoadingComplete,D=e.placeholder,q=void 0===D?"empty":D,W=e.blurDataURL,B=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=u.useContext(p.ImageConfigContext),U=u.useMemo((function(){var e=w||H||h.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[H]),V=B,F=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(F=V.layout),delete V.layout);var G=z;if("loader"in V){if(V.loader){var Z=V.loader;G=function(e){e.config;var t=b(e,["config"]);return Z(t)}}delete V.loader}var Q="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,Q=J.src,(!F||"fill"!==F)&&(P=P||J.height,M=M||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:Q;var K=A(M),X=A(P),Y=A(T),$=!c&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,$=!1);x.has(t)&&($=!1);var ee,te=r(u.useState(!1),2),ne=te[0],ae=te[1],ie=r(f.useIntersection({rootRef:j,rootMargin:E,disabled:!$}),3),re=ie[0],oe=ie[1],se=ie[2],le=!$||oe,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,he={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:L};0;0;var fe=Object.assign({},_,"raw"===F?{}:he),pe="blur"!==q||ne?{}:{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(W,'")'),backgroundPosition:L||"0% 0%"};if("fill"===F)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var me=X/K,ge=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===F?(ce.display="block",ce.position="relative",de=!0,ue.paddingTop=ge):"intrinsic"===F?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===F&&(ce.display="inline-block",ce.position="relative",ce.width=K,ce.height=X)}else 0;var ye={src:v,srcSet:void 0,sizes:void 0};le&&(ye=k({config:U,src:t,unoptimized:s,layout:F,width:K,quality:Y,sizes:n,loader:G}));var be=t;0;var we,xe="imagesrcset",ve="imagesizes";xe="imageSrcSet",ve="imageSizes";var je=(i(we={},xe,ye.srcSet),i(we,ve,ye.sizes),we),Se=u.default.useLayoutEffect,ke=u.useRef(C),Ae=u.useRef(t);u.useEffect((function(){ke.current=C}),[C]),Se((function(){Ae.current!==t&&(se(),Ae.current=t)}),[se,t]);var ze=y({isLazy:$,imgAttributes:ye,heightInt:X,widthInt:K,qualityInt:Y,layout:F,className:I,imgStyle:fe,blurStyle:pe,loading:m,config:U,unoptimized:s,placeholder:q,loader:G,srcString:be,onLoadingCompleteRef:ke,setBlurComplete:ae,setIntersection:re,isVisible:le},V);return u.default.createElement(u.default.Fragment,null,"raw"===F?u.default.createElement(O,Object.assign({},ze)):u.default.createElement("span",{style:ce},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(O,Object.assign({},ze))),c?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},je))):null)};var l,c,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(l=n(3121))&&l.__esModule?l:{default:l},h=n(139),f=n(9246),p=n(8730),m=(n(670),n(2700));function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var a=null!=t[n]?t[n]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(t){g(e,t,a[t])}))},a=1;a<arguments.length;a++)n(a);return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},x=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,a=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,a=e.width,i=e.quality,r=new URL("".concat(t.path).concat(E(n))),o=r.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||a.toString()),i&&o.set("q",i.toString());return r.href}],["cloudinary",function(e){var t=e.config,n=e.src,a=e.width,i=e.quality,r=["f_auto","c_limit","w_"+a,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,a=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(a)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function k(e){var t=e.config,n=e.src,a=e.unoptimized,i=e.layout,r=e.width,s=e.quality,l=e.sizes,c=e.loader;if(a)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,a){var i=e.deviceSizes,r=e.allSizes;if(a&&("fill"===n||"responsive"===n||"raw"===n)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(a);s)c.push(parseInt(s[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:r.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,i,l),d=u.widths,h=u.kind,f=d.length-1;return{sizes:l||"w"!==h?l:"100vw",srcSet:d.map((function(e,a){return"".concat(c({config:t,src:n,quality:s,width:e})," ").concat("w"===h?e:a+1).concat(h)})).join(", "),src:c({config:t,src:n,quality:s,width:d[f]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",a=j.get(n);if(a)return a(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(n))}function N(e,t,n,a,i,r){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(x.add(t),"blur"===a&&r(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,o=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:o})}})))}var O=function(e){var t=e.imgAttributes,n=e.heightInt,a=e.widthInt,i=e.qualityInt,r=e.layout,o=e.className,s=e.imgStyle,l=e.blurStyle,c=e.isLazy,d=e.placeholder,h=e.loading,f=e.srcString,p=e.config,m=e.unoptimized,g=e.loader,w=e.onLoadingCompleteRef,x=e.setBlurComplete,v=e.setIntersection,j=e.onLoad,S=e.onError,A=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},A,t,"raw"===r?{height:n,width:a}:{},{decoding:"async","data-nimg":r,className:o,style:y({},s,l),ref:u.useCallback((function(e){v(e),(null===e||void 0===e?void 0:e.complete)&&N(e,f,0,d,w,x)}),[v,f,r,d,w,x]),onLoad:function(e){N(e.currentTarget,f,0,d,w,x),j&&j(e)},onError:function(e){"blur"===d&&x(!0),S&&S(e)}})),(c||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},A,k({config:p,src:f,unoptimized:m,layout:r,width:a,quality:i,sizes:t.sizes,loader:g}),"raw"===r?{height:n,width:a}:{},{decoding:"async","data-nimg":r,style:s,className:o,loading:h||"lazy"}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6842:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(5893),i=n(9008),r=n.n(i),o=n(5675),s=n.n(o),l=n(2787),c=n(4051),u=n.n(c),d=n(7294);function h(e,t,n,a,i,r,o){try{var s=e[r](o),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(a,i)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function o(e){h(r,a,i,o,s,"next",e)}function s(e){h(r,a,i,o,s,"throw",e)}o(void 0)}))}}var p=function(){var e=function(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))},t=(0,d.useState)("https://apod.nasa.gov/apod/image/2205/RhoLunarEclipse_Dascalu_1920.jpg"),n=t[0],i=t[1],r=(0,d.useState)("A Deep Sky Behind an Eclipsed Moon"),o=r[0],l=r[1],c=(0,d.useState)("The plan was to capture a picturesque part of the sky that was hosting an unusual guest.  The result included a bonus \u2014 an additional and unexpected guest. The beautiful background features part of the central band of our Milky Way galaxy on the far left, and the colorful clouds of Rho Ophiuchi in the image center. The unusual guest, a dimmed and reddened Moon on the right, was expected because the image was taken during last week\u2019s total lunar eclipse. The timing had to be right because the Moon \u2014 both before and after eclipse \u2014 would be so bright it would overwhelm the background.  The unexpected guest was the bright meteor across the image center. The fleeting meteor streak was captured on only one of the 10 consecutively-captured deep-field images from La Palma in the Spanish Canary Islands, while the eclipsed Moon image was taken immediately afterwards with the same camera and from the same location. The next total lunar eclipse \u2014 also quite expected \u2014 will occur in early November.    Notable Submissions to APOD: Total Lunar Eclipse of 2022 May"),h=c[0],p=c[1],m=(0,d.useState)("https://apod.nasa.gov/apod/image/2205/RhoLunarEclipse_Dascalu_1920.jpg"),g=m[0],y=m[1],b=(0,d.useState)("A Deep Sky Behind an Eclipsed Moon"),w=b[0],x=b[1],v=(0,d.useState)("The plan was to capture a picturesque part of the sky that was hosting an unusual guest.  The result included a bonus \u2014 an additional and unexpected guest. The beautiful background features part of the central band of our Milky Way galaxy on the far left, and the colorful clouds of Rho Ophiuchi in the image center. The unusual guest, a dimmed and reddened Moon on the right, was expected because the image was taken during last week\u2019s total lunar eclipse. The timing had to be right because the Moon \u2014 both before and after eclipse \u2014 would be so bright it would overwhelm the background.  The unexpected guest was the bright meteor across the image center. The fleeting meteor streak was captured on only one of the 10 consecutively-captured deep-field images from La Palma in the Spanish Canary Islands, while the eclipsed Moon image was taken immediately afterwards with the same camera and from the same location. The next total lunar eclipse \u2014 also quite expected \u2014 will occur in early November.    Notable Submissions to APOD: Total Lunar Eclipse of 2022 May"),j=v[0],S=v[1],k=(0,d.useState)("https://apod.nasa.gov/apod/image/2205/RhoLunarEclipse_Dascalu_1920.jpg"),A=k[0],z=k[1],N=(0,d.useState)("A Deep Sky Behind an Eclipsed Moon"),O=N[0],E=N[1],I=(0,d.useState)("The plan was to capture a picturesque part of the sky that was hosting an unusual guest.  The result included a bonus \u2014 an additional and unexpected guest. The beautiful background features part of the central band of our Milky Way galaxy on the far left, and the colorful clouds of Rho Ophiuchi in the image center. The unusual guest, a dimmed and reddened Moon on the right, was expected because the image was taken during last week\u2019s total lunar eclipse. The timing had to be right because the Moon \u2014 both before and after eclipse \u2014 would be so bright it would overwhelm the background.  The unexpected guest was the bright meteor across the image center. The fleeting meteor streak was captured on only one of the 10 consecutively-captured deep-field images from La Palma in the Spanish Canary Islands, while the eclipsed Moon image was taken immediately afterwards with the same camera and from the same location. The next total lunar eclipse \u2014 also quite expected \u2014 will occur in early November.    Notable Submissions to APOD: Total Lunar Eclipse of 2022 May"),T=I[0],M=I[1];function P(e,t,n){return _.apply(this,arguments)}function _(){return(_=f(u().mark((function t(n,a,i){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e(new Date(2e3,0,1),new Date),o=(o="")+r.getFullYear()+"-",r.getMonth().toString().length+1<2?o=o+"0"+(r.getMonth()+1):o+=r.getMonth()+1,o=o+"-"+r.getDate(),console.log(o),t.next=8,fetch("https://api.nasa.gov/planetary/apod?api_key=eIfrPRv0IskcVMySQp1zGRg2zgtN56Kie31aoolS&date="+o).then((function(e){return e.json()})).then((function(e){e.url&&(n(e.url),a(e.title),i(e.explanation))}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return L.apply(this,arguments)}function L(){return(L=f(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=eIfrPRv0IskcVMySQp1zGRg2zgtN56Kie31aoolS").then((function(e){return e.json()})).then((function(e){i(e.url),l(e.title),p(e.explanation)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=f(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return e.next=4,P(y,x,S);case 4:return e.next=6,P(z,E,M);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){!function(){C.apply(this,arguments)}()}),[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex border-b-[1px] mt-20 pl-14 pb-14",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-gray-300",children:"Image of the day"}),(0,a.jsx)(s(),{className:"select-none",alt:o,src:n,height:500,width:800}),(0,a.jsx)("p",{className:"text-white font-bold text-xl",children:o}),(0,a.jsx)("p",{className:"text-gray-300 inline-block max-w-2xl",children:h})]}),(0,a.jsxs)("div",{className:"w-full text-center",children:[(0,a.jsxs)("h1",{className:"text-white text-5xl mb-24",children:["Welcome to ",(0,a.jsx)("span",{className:"font-bold",children:"Spejs"})]}),(0,a.jsx)(s(),{className:"select-none",alt:w,src:g,height:500,width:1e3}),(0,a.jsx)("p",{className:"text-white font-bold text-xl",children:w}),(0,a.jsx)("p",{className:"text-gray-300 inline-block max-w-5xl",children:j})]})]}),(0,a.jsxs)("div",{className:"pt-14 pl-14 flex justify-center",children:[(0,a.jsx)(s(),{className:"select-none p-14",src:A,alt:O,height:500,width:700}),(0,a.jsxs)("div",{className:"p-14 flex flex-col",children:[(0,a.jsx)("p",{className:"text-white font-bold text-xl text-center",children:O}),(0,a.jsx)("p",{className:"text-gray-300 inline-block max-w-5xl",children:T}),(0,a.jsx)("button",{onClick:function(){return P(z,E,M)},className:"bg-white p-2 w-max self-center mt-14 select-none ",children:"Load Another Image"})]})]})]})},m=n(7127);function g(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Spejs"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"".concat("/spejs-nextjs","/favicon.ico")})]}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(p,{}),(0,a.jsx)(m.Z,{})]})}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[664,774,888,179],(function(){return t=5728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);