"use strict";(self.webpackChunkfinance_tracker=self.webpackChunkfinance_tracker||[]).push([[925],{4352:(e,n,o)=>{o.d(n,{Z:()=>q});var a=o(2791),t=o(1938),c=o(1418),r=o.n(c),i=o(7462),l=o(3433),d=o(9439),s=o(1002),p=o(5179),u=o(632),f=o(4925),m=o(5501),v=o(4942),b=o(8568),g=o(1354),h=a.forwardRef((function(e,n){var o=e.prefixCls,t=e.forceRender,c=e.className,i=e.style,l=e.children,s=e.isActive,p=e.role,u=a.useState(s||t),f=(0,d.Z)(u,2),m=f[0],b=f[1];return a.useEffect((function(){(t||s)&&b(!0)}),[t,s]),m?a.createElement("div",{ref:n,className:r()("".concat(o,"-content"),(0,v.Z)((0,v.Z)({},"".concat(o,"-content-active"),s),"".concat(o,"-content-inactive"),!s),c),style:i,role:p},a.createElement("div",{className:"".concat(o,"-content-box")},l)):null}));h.displayName="PanelContent";const x=h;var y=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"];const C=a.forwardRef((function(e,n){var o=e.showArrow,t=void 0===o||o,c=e.headerClass,l=e.isActive,d=e.onItemClick,s=e.forceRender,p=e.className,u=e.prefixCls,m=e.collapsible,h=e.accordion,C=e.panelKey,I=e.extra,k=e.header,Z=e.expandIcon,P=e.openMotion,N=e.destroyInactivePanel,E=e.children,S=(0,f.Z)(e,y),w="disabled"===m,R="header"===m,O="icon"===m,M=null!==I&&void 0!==I&&"boolean"!==typeof I,A=function(){null===d||void 0===d||d(C)},j="function"===typeof Z?Z(e):a.createElement("i",{className:"arrow"});j&&(j=a.createElement("div",{className:"".concat(u,"-expand-icon"),onClick:["header","icon"].includes(m)?A:void 0},j));var B=r()((0,v.Z)((0,v.Z)((0,v.Z)({},"".concat(u,"-item"),!0),"".concat(u,"-item-active"),l),"".concat(u,"-item-disabled"),w),p),T={className:r()(c,(0,v.Z)((0,v.Z)((0,v.Z)({},"".concat(u,"-header"),!0),"".concat(u,"-header-collapsible-only"),R),"".concat(u,"-icon-collapsible-only"),O)),"aria-expanded":l,"aria-disabled":w,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==g.Z.ENTER&&e.which!==g.Z.ENTER||A()}};return R||O||(T.onClick=A,T.role=h?"tab":"button",T.tabIndex=w?-1:0),a.createElement("div",(0,i.Z)({},S,{ref:n,className:B}),a.createElement("div",T,t&&j,a.createElement("span",{className:"".concat(u,"-header-text"),onClick:"header"===m?A:void 0},k),M&&a.createElement("div",{className:"".concat(u,"-extra")},I)),a.createElement(b.ZP,(0,i.Z)({visible:l,leavedClassName:"".concat(u,"-content-hidden")},P,{forceRender:s,removeOnLeave:N}),(function(e,n){var o=e.className,t=e.style;return a.createElement(x,{ref:n,prefixCls:u,className:o,style:t,isActive:l,forceRender:s,role:h?"tabpanel":void 0},E)})))}));var I=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];const k=function(e,n,o){return Array.isArray(e)?function(e,n){var o=n.prefixCls,t=n.accordion,c=n.collapsible,r=n.destroyInactivePanel,l=n.onItemClick,d=n.activeKey,s=n.openMotion,p=n.expandIcon;return e.map((function(e,n){var u=e.children,m=e.label,v=e.key,b=e.collapsible,g=e.onItemClick,h=e.destroyInactivePanel,x=(0,f.Z)(e,I),y=String(null!==v&&void 0!==v?v:n),k=null!==b&&void 0!==b?b:c,Z=null!==h&&void 0!==h?h:r,P=!1;return P=t?d[0]===y:d.indexOf(y)>-1,a.createElement(C,(0,i.Z)({},x,{prefixCls:o,key:y,panelKey:y,isActive:P,accordion:t,openMotion:s,expandIcon:p,header:m,collapsible:k,onItemClick:function(e){"disabled"!==k&&(l(e),null===g||void 0===g||g(e))},destroyInactivePanel:Z}),u)}))}(e,o):(0,m.Z)(n).map((function(e,n){return function(e,n,o){if(!e)return null;var t=o.prefixCls,c=o.accordion,r=o.collapsible,i=o.destroyInactivePanel,l=o.onItemClick,d=o.activeKey,s=o.openMotion,p=o.expandIcon,u=e.key||String(n),f=e.props,m=f.header,v=f.headerClass,b=f.destroyInactivePanel,g=f.collapsible,h=f.onItemClick,x=!1;x=c?d[0]===u:d.indexOf(u)>-1;var y=null!==g&&void 0!==g?g:r,C={key:u,panelKey:u,header:m,headerClass:v,isActive:x,prefixCls:t,destroyInactivePanel:null!==b&&void 0!==b?b:i,openMotion:s,accordion:c,children:e.props.children,onItemClick:function(e){"disabled"!==y&&(l(e),null===h||void 0===h||h(e))},expandIcon:p,collapsible:y};return"string"===typeof e.type?e:(Object.keys(C).forEach((function(e){"undefined"===typeof C[e]&&delete C[e]})),a.cloneElement(e,C))}(e,n,o)}))};var Z=o(4170);function P(e){var n=e;if(!Array.isArray(n)){var o=(0,s.Z)(n);n="number"===o||"string"===o?[n]:[]}return n.map((function(e){return String(e)}))}var N=a.forwardRef((function(e,n){var o=e.prefixCls,t=void 0===o?"rc-collapse":o,c=e.destroyInactivePanel,s=void 0!==c&&c,f=e.style,m=e.accordion,v=e.className,b=e.children,g=e.collapsible,h=e.openMotion,x=e.expandIcon,y=e.activeKey,C=e.defaultActiveKey,I=e.onChange,N=e.items,E=r()(t,v),S=(0,p.Z)([],{value:y,onChange:function(e){return null===I||void 0===I?void 0:I(e)},defaultValue:C,postState:P}),w=(0,d.Z)(S,2),R=w[0],O=w[1];(0,u.ZP)(!b,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var M=k(N,b,{prefixCls:t,accordion:m,openMotion:h,expandIcon:x,collapsible:g,destroyInactivePanel:s,onItemClick:function(e){return O((function(){return m?R[0]===e?[]:[e]:R.indexOf(e)>-1?R.filter((function(n){return n!==e})):[].concat((0,l.Z)(R),[e])}))},activeKey:R});return a.createElement("div",(0,i.Z)({ref:n,className:E,style:f,role:m?"tablist":void 0},(0,Z.Z)(e,{aria:!0,data:!0})),M)}));const E=Object.assign(N,{Panel:C}),S=E;E.Panel;var w=o(1818),R=o(9464),O=o(1113),M=o(1929),A=o(4107);const j=a.forwardRef(((e,n)=>{const{getPrefixCls:o}=a.useContext(M.E_),{prefixCls:t,className:c,showArrow:i=!0}=e,l=o("collapse",t),d=r()({["".concat(l,"-no-arrow")]:!i},c);return a.createElement(S.Panel,Object.assign({ref:n},e,{prefixCls:l,className:d}))}));var B=o(5586),T=o(7521),H=o(6753),K=o(6562),L=o(9922);const G=e=>{const{componentCls:n,contentBg:o,padding:a,headerBg:t,headerPadding:c,collapseHeaderPaddingSM:r,collapseHeaderPaddingLG:i,collapsePanelBorderRadius:l,lineWidth:d,lineType:s,colorBorder:p,colorText:u,colorTextHeading:f,colorTextDisabled:m,fontSizeLG:v,lineHeight:b,lineHeightLG:g,marginSM:h,paddingSM:x,paddingLG:y,paddingXS:C,motionDurationSlow:I,fontSizeIcon:k,contentPadding:Z,fontHeight:P,fontHeightLG:N}=e,E="".concat((0,B.bf)(d)," ").concat(s," ").concat(p);return{[n]:Object.assign(Object.assign({},(0,T.Wf)(e)),{backgroundColor:t,border:E,borderBottom:0,borderRadius:l,"&-rtl":{direction:"rtl"},["& > ".concat(n,"-item")]:{borderBottom:E,"&:last-child":{["\n            &,\n            & > ".concat(n,"-header")]:{borderRadius:"0 0 ".concat((0,B.bf)(l)," ").concat((0,B.bf)(l))}},["> ".concat(n,"-header")]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:c,color:f,lineHeight:b,cursor:"pointer",transition:"all ".concat(I,", visibility 0s"),["> ".concat(n,"-header-text")]:{flex:"auto"},"&:focus":{outline:"none"},["".concat(n,"-expand-icon")]:{height:P,display:"flex",alignItems:"center",paddingInlineEnd:h},["".concat(n,"-arrow")]:Object.assign(Object.assign({},(0,T.Ro)()),{fontSize:k,svg:{transition:"transform ".concat(I)}}),["".concat(n,"-header-text")]:{marginInlineEnd:"auto"}},["".concat(n,"-icon-collapsible-only")]:{cursor:"unset",["".concat(n,"-expand-icon")]:{cursor:"pointer"}}},["".concat(n,"-content")]:{color:u,backgroundColor:o,borderTop:E,["& > ".concat(n,"-content-box")]:{padding:Z},"&-hidden":{display:"none"}},"&-small":{["> ".concat(n,"-item")]:{["> ".concat(n,"-header")]:{padding:r,paddingInlineStart:C,["> ".concat(n,"-expand-icon")]:{marginInlineStart:e.calc(x).sub(C).equal()}},["> ".concat(n,"-content > ").concat(n,"-content-box")]:{padding:x}}},"&-large":{["> ".concat(n,"-item")]:{fontSize:v,lineHeight:g,["> ".concat(n,"-header")]:{padding:i,paddingInlineStart:a,["> ".concat(n,"-expand-icon")]:{height:N,marginInlineStart:e.calc(y).sub(a).equal()}},["> ".concat(n,"-content > ").concat(n,"-content-box")]:{padding:y}}},["".concat(n,"-item:last-child")]:{["> ".concat(n,"-content")]:{borderRadius:"0 0 ".concat((0,B.bf)(l)," ").concat((0,B.bf)(l))}},["& ".concat(n,"-item-disabled > ").concat(n,"-header")]:{"\n          &,\n          & > .arrow\n        ":{color:m,cursor:"not-allowed"}},["&".concat(n,"-icon-position-end")]:{["& > ".concat(n,"-item")]:{["> ".concat(n,"-header")]:{["".concat(n,"-expand-icon")]:{order:1,paddingInlineEnd:0,paddingInlineStart:h}}}}})}},z=e=>{const{componentCls:n}=e,o="> ".concat(n,"-item > ").concat(n,"-header ").concat(n,"-arrow svg");return{["".concat(n,"-rtl")]:{[o]:{transform:"rotate(180deg)"}}}},X=e=>{const{componentCls:n,headerBg:o,paddingXXS:a,colorBorder:t}=e;return{["".concat(n,"-borderless")]:{backgroundColor:o,border:0,["> ".concat(n,"-item")]:{borderBottom:"1px solid ".concat(t)},["\n        > ".concat(n,"-item:last-child,\n        > ").concat(n,"-item:last-child ").concat(n,"-header\n      ")]:{borderRadius:0},["> ".concat(n,"-item:last-child")]:{borderBottom:0},["> ".concat(n,"-item > ").concat(n,"-content")]:{backgroundColor:"transparent",borderTop:0},["> ".concat(n,"-item > ").concat(n,"-content > ").concat(n,"-content-box")]:{paddingTop:a}}}},_=e=>{const{componentCls:n,paddingSM:o}=e;return{["".concat(n,"-ghost")]:{backgroundColor:"transparent",border:0,["> ".concat(n,"-item")]:{borderBottom:0,["> ".concat(n,"-content")]:{backgroundColor:"transparent",border:0,["> ".concat(n,"-content-box")]:{paddingBlock:o}}}}}},D=(0,K.I$)("Collapse",(e=>{const n=(0,L.TS)(e,{collapseHeaderPaddingSM:"".concat((0,B.bf)(e.paddingXS)," ").concat((0,B.bf)(e.paddingSM)),collapseHeaderPaddingLG:"".concat((0,B.bf)(e.padding)," ").concat((0,B.bf)(e.paddingLG)),collapsePanelBorderRadius:e.borderRadiusLG});return[G(n),X(n),_(n),z(n),(0,H.Z)(n)]}),(e=>({headerPadding:"".concat(e.paddingSM,"px ").concat(e.padding,"px"),headerBg:e.colorFillAlter,contentPadding:"".concat(e.padding,"px 16px"),contentBg:e.colorBgContainer}))),W=a.forwardRef(((e,n)=>{const{getPrefixCls:o,direction:c,collapse:i}=a.useContext(M.E_),{prefixCls:l,className:d,rootClassName:s,style:p,bordered:u=!0,ghost:f,size:v,expandIconPosition:b="start",children:g,expandIcon:h}=e,x=(0,A.Z)((e=>{var n;return null!==(n=null!==v&&void 0!==v?v:e)&&void 0!==n?n:"middle"})),y=o("collapse",l),C=o(),[I,k,Z]=D(y);const P=a.useMemo((()=>"left"===b?"start":"right"===b?"end":b),[b]),N=null!==h&&void 0!==h?h:null===i||void 0===i?void 0:i.expandIcon,E=a.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n="function"===typeof N?N(e):a.createElement(t.Z,{rotate:e.isActive?90:void 0});return(0,O.Tm)(n,(()=>{var e;return{className:r()(null===(e=null===n||void 0===n?void 0:n.props)||void 0===e?void 0:e.className,"".concat(y,"-arrow"))}}))}),[N,y]),j=r()("".concat(y,"-icon-position-").concat(P),{["".concat(y,"-borderless")]:!u,["".concat(y,"-rtl")]:"rtl"===c,["".concat(y,"-ghost")]:!!f,["".concat(y,"-").concat(x)]:"middle"!==x},null===i||void 0===i?void 0:i.className,d,s,k,Z),B=Object.assign(Object.assign({},(0,R.Z)(C)),{motionAppear:!1,leavedClassName:"".concat(y,"-content-hidden")}),T=a.useMemo((()=>g?(0,m.Z)(g).map(((e,n)=>{var o,a;if(null===(o=e.props)||void 0===o?void 0:o.disabled){const o=null!==(a=e.key)&&void 0!==a?a:String(n),{disabled:t,collapsible:c}=e.props,r=Object.assign(Object.assign({},(0,w.Z)(e.props,["disabled"])),{key:o,collapsible:null!==c&&void 0!==c?c:t?"disabled":void 0});return(0,O.Tm)(e,r)}return e})):null),[g]);return I(a.createElement(S,Object.assign({ref:n,openMotion:B},(0,w.Z)(e,["rootClassName"]),{expandIcon:E,prefixCls:y,className:j,style:Object.assign(Object.assign({},null===i||void 0===i?void 0:i.style),p)}),T))}));const q=Object.assign(W,{Panel:j})}}]);
//# sourceMappingURL=925.799f7475.chunk.js.map