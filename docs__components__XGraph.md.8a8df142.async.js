(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{KAT9:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("dEAq"),l=a("Zxc8"),i=r.a.memo((e=>{var t=e.demos,a=t["mydemo-xgraph"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"x6"},r.a.createElement(o["AnchorLink"],{to:"#x6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"X6")),r.a.createElement(l["default"],t["mydemo-xgraph"].previewerProps,r.a.createElement(a,null))))}));t["default"]=e=>{var t=r.a.useContext(o["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:a})}},RZMt:function(e,t,a){},Zxc8:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("k3GJ"),l=a("9kvl"),i=a("dEAq"),c=a("H1Ra");a("RZMt");function u(e,t){return b(e)||f(e,t)||s(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done);l=!0)if(o.push(n.value),t&&o.length===t)break}catch(c){i=!0,r=c}finally{try{l||null==a["return"]||a["return"]()}finally{if(i)throw r}}return o}}function b(e){if(Array.isArray(e))return e}function p(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var v=function(e){var t,a,d,s=Object(n["useRef"])(),m=Object(n["useContext"])(i["context"]),f=m.locale,b=Object(i["useLocaleProps"])(f,e),v=Object(i["useDemoUrl"])(b.identifier),_=b.demoUrl||v,E=(null===l["a"]||void 0===l["a"]?void 0:l["a"].location.hash)==="#".concat(b.identifier),h=1===Object.keys(b.sources).length,y=Object(i["useCodeSandbox"])((null===(t=b.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:b),g=Object(i["useRiddle"])((null===(a=b.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:b),w=Object(i["useMotions"])(b.motions||[],s.current),k=u(w,2),x=k[0],j=k[1],O=Object(i["useCopy"])(),C=u(O,2),N=C[0],A=C[1],S=Object(n["useState"])((function(){return b.sources._?"_":Object.keys(b.sources)[0]})),R=u(S,2),I=R[0],L=R[1],M=Object(n["useState"])(p(I,b.sources[I])),T=u(M,2),P=T[0],U=T[1],q=Object(n["useState"])(Boolean(b.defaultShowCode)),J=u(q,2),Z=J[0],$=J[1],B=Object(n["useState"])(Math.random()),D=u(B,2),X=D[0],F=D[1],G=b.sources[I][P]||b.sources[I].content,H=Object(i["useTSPlaygroundUrl"])(f,G),K=Object(n["useRef"])(),z=Object(i["usePrefersColor"])(),Q=u(z,1),V=Q[0];function W(e){L(e),U(p(e,b.sources[e]))}return Object(n["useEffect"])((function(){F(Math.random())}),[V]),r.a.createElement("div",{style:b.style,className:[b.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:b.identifier,"data-debug":b.debug||void 0,"data-iframe":b.iframe||void 0},b.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:b.transform?"translate(0, 0)":void 0,padding:b.compact||b.iframe&&!1!==b.compact?"0":void 0,background:b.background}},b.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(b.iframe).replace(/(\d)$/,"$1px")},key:X,src:_,ref:K}):b.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":b.title},b.title&&r.a.createElement(i["AnchorLink"],{to:"#".concat(b.identifier)},b.title),b.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:b.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},y&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),g&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),b.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return x()}}),b.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return F(Math.random())}}),!(null===(d=b.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(i["Link"],{target:"_blank",to:_},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":A,onClick:function(){return N(G)}}),"tsx"===P&&Z&&r.a.createElement(i["Link"],{target:"_blank",to:H},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Z?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return $(!Z)}})),Z&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.a.createElement(o["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:W},Object.keys(b.sources).map((function(e){return r.a.createElement(o["a"],{tab:"_"===e?"index.".concat(p(e,b.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(c["a"],{code:G,lang:P,showCopy:!1}))))};t["default"]=v}}]);