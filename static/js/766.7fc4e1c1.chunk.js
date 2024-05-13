"use strict";(self.webpackChunkfinance_tracker=self.webpackChunkfinance_tracker||[]).push([[766],{6201:(e,t,s)=>{s.d(t,{Z:()=>d});var n=s(9596),a=s(8341),o=s(2143),r=s(4248),l=s(7257),i=s(2791),c=s(8807),u=s(184);const d=(0,l.Pi)((e=>{let{type:t,onChange:s,extra:l}=e;const{isSmallScreen:d}=c.userStore,m=(0,i.useMemo)((()=>{const e=[{label:(0,u.jsx)(n.Z,{}),value:"expense"},{label:(0,u.jsx)(a.Z,{}),value:"income"}];return l&&e.splice(1,0,{label:(0,u.jsx)(o.Z,{}),value:"all"}),e}),[l]);return(0,u.jsx)(r.Z,{size:d?"small":"middle",value:t,onChange:s,options:m})}))},2158:(e,t,s)=>{s.d(t,{Z:()=>j});var n=s(2791),a=s(7257),o=s(7201),r=s(7708),l=s(4320),i=s(7892),c=s.n(i),u=s(9026),d=s.n(u),m=s(5967),p=s(3623),g=s(7703),y=s(6619),f=s(184);const h=(0,a.Pi)((()=>{const{list:e}=l.listStore,{defaultRange:t}=g.optionsStore,s=(0,n.useMemo)((()=>(0,y.BF)(e,t)),[e,t]),a={labels:new Array(s.length).fill(""),datasets:[{data:s}]};return(0,f.jsx)(p.x1,{style:{inlineSize:"100%"},data:a,options:{plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},elements:{point:{radius:0},line:{cubicInterpolationMode:"monotone",borderColor:"#7775"}},aspectRatio:25}})})),x=(0,n.memo)(h);m.kL.register(m.u,m.jn,m.ST,m.uw,m.f$,m.od),c().extend(d());const S=(0,a.Pi)((e=>{let{range:t,type:s,setRange:a}=e;const{list:i}=l.listStore,{defaultRange:u,setDefaultRange:d}=g.optionsStore,[m,p]=(0,n.useState)(u),y=(0,n.useMemo)((()=>{const e=Object.values(i).filter((e=>e.type===s||"all"===s)).map((e=>e.date));return e.length?[Math.min(...e),Math.max(...e)]:[c()().valueOf(),c()().valueOf()]}),[i,s]),h=(0,n.useMemo)((()=>{const e=c()(y[0]).startOf("day"),t=c()(y[1]).endOf("day"),s={};let n=e;for(;n.isBefore(t)||n.isSame(t,"month");)s[n.valueOf()]=0===n.month()?n.format("YYYY"):" ",n=n.add(1,"month").startOf("month");return s}),[y]);(0,n.useEffect)((()=>{d(y)}),[y,d]),(0,n.useEffect)((()=>{a(u)}),[u,a]);const S=(0,n.useCallback)((e=>{a(e)}),[a]);return(0,n.useEffect)((()=>{p(t)}),[t]),c()(u[1]).diff(c()(u[0]),"hours")>=48?(0,f.jsxs)(o.Z,{vertical:!0,align:"stretch",style:{inlineSize:"100%"},children:[(0,f.jsx)(x,{}),(0,f.jsx)(r.Z,{range:!0,value:m,marks:h,step:null,dots:!0,tooltip:{formatter:e=>c()(e).format("MM.YY")},min:y[0],max:y[1],defaultValue:u,onChange:p,onChangeComplete:S})]}):(0,f.jsx)(f.Fragment,{})})),j=(0,n.memo)(S)},9766:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});var n=s(2791),a=s(7257),o=s(4320),r=s(7201),l=s(4664),i=s(8807),c=s(3623),u=s(8416),d=s(8418),m=s(7892),p=s.n(m),g=s(5967),y=s(6619),f=s(7703),h=s(4878),x=s(184);g.kL.register(g.u,g.vn,g.ZL,g.uw,g.f$);const S=(0,a.Pi)((e=>{let{mode:t,setMode:s}=e;const{isSmallScreen:a}=i.userStore,{list:l}=o.listStore,{statsOptions:m,userOptions:g,setStatsRange:S}=f.optionsStore,{currency:j,language:Z}=g,{range:v,type:b}=m,O=(0,n.useMemo)((()=>(0,y.u1)(l,b,j,t,p()(v[0]).year())),[j,b,t,v,l]),k=(0,n.useMemo)((()=>Object.keys(O).map((e=>{let s=0,n=!1;return"month"===t?(s=Number(e),n=s>=p()(v[0]).startOf("month").month()&&s<=p()(v[1]).endOf("month").month()):"year"===t&&(s=p()(e),n=s>=p()(v[0]).startOf("year")&&s<=p()(v[1]).endOf("year")),"expense"===b?n?h.Z.colors.expense:h.Z.colors.expenseLight:n?h.Z.colors.income:h.Z.colors.incomeLight}))),[v,O,t,b]),M={labels:"month"===t?u.Z.months[Z]:Object.keys(O),datasets:[{label:(0,d.Rh)(j),data:Object.values(O),backgroundColor:k}]},C={plugins:{legend:{display:!1}},onClick:(e,n)=>{if(n.length){const e=n[0].index,a="year"===t?[p()(v[0]).year(Number(M.labels[e])).startOf("year").valueOf(),p()(v[0]).year(Number(M.labels[e])).endOf("year").valueOf()]:[p()(v[0]).month(e).startOf("month").valueOf(),p()(v[0]).month(e).endOf("month").valueOf()];"year"===t&&s("month"),S(a)}}};return(0,x.jsx)(r.Z,{style:{inlineSize:a?"unset":"50%"},children:(0,x.jsx)(c.$Q,{data:M,options:C})})}));var j=s(3475);g.kL.register(g.qi,g.tt,g.u,g.De,g.Dx);const Z=(0,a.Pi)((()=>{const{isSmallScreen:e}=i.userStore,{list:t}=o.listStore,{userOptions:s,statsOptions:a}=f.optionsStore,{currency:l}=s,{categories:u}=j.categoryStore,{range:m,type:p}=a,g=(0,n.useMemo)((()=>(0,y.CH)(t,p,m,l)),[t,p,l,m]),[h,S,Z]=(0,n.useMemo)((()=>[g.map((e=>u[e.categoryId].name)),g.map((e=>u[e.categoryId].color)),g.map((e=>Math.round(e.value)))]),[u,g]),v={labels:h,datasets:[{label:(0,d.Rh)(l),data:Z,backgroundColor:S}]};return(0,x.jsx)(r.Z,{style:{inlineSize:e?"unset":"35%"},children:(0,x.jsx)(c.by,{data:v,options:{plugins:{legend:{display:!0,position:"right"}}}})})}));var v=s(6818),b=s.n(v),O=s(2158),k=s(6281),M=s(5563),C=s(4231),R=s(6473),E=s(1429),w=s(1468),D=s(3605),z=s(6201);const P=(0,a.Pi)((e=>{let{resetRange:t,open:s}=e;const{isSmallScreen:a}=i.userStore,{list:l}=o.listStore,{statsOptions:c,userOptions:u,setStatsRange:m,setStatsType:g}=f.optionsStore,{range:S,type:j}=c,{currency:Z}=u,v=(0,n.useMemo)((()=>(0,y.r6)(l,j,S,Z)),[l,j,S,Z]),b=(0,n.useMemo)((()=>{const e="DD.MM.YY";return(0,x.jsxs)(M.Z.Text,{type:"secondary",style:{fontSize:a?".8em":"1.2em"},children:[p()(S[0]).format(e),S[0]!==S[1]?"-".concat(p()(S[1]).format(e)):""]})}),[S,a]);return(0,x.jsxs)(r.Z,{align:"end",gap:a?16:32,children:[(0,x.jsx)(C.Z,{placement:"rightTop",color:"#0000",open:s,title:(0,x.jsx)(D.Z,{onClick:t,style:{scale:a?"1":"1.25",filter:"invert()"}}),children:(0,x.jsx)(R.Z,{bordered:!0,children:(0,x.jsx)(E.Z,{title:(0,x.jsx)(C.Z,{color:"#0000",trigger:"click",title:(0,x.jsx)(w.Z.RangePicker,{onChange:e=>{m(e.map((e=>e.valueOf())))},value:[p()(S[0]),p()(S[1])],size:a?"small":"middle",minDate:h.Z.startDate,maxDate:p()()}),children:b}),value:v,prefix:(0,d.Rh)(Z),valueStyle:{color:"expense"===j?h.Z.colors.expense:h.Z.colors.income,fontSize:a?"1.5em":"2.25em"}})})}),(0,x.jsx)(z.Z,{type:j,onChange:g})]})})),L=(0,n.memo)(P);var Y=s(763);p().extend(b());const I=(0,a.Pi)((()=>{const{list:e}=o.listStore,{isSmallScreen:t,loading:s}=i.userStore,{statsOptions:a,defaultRange:c,setStatsRange:u}=f.optionsStore,{range:d,type:m}=a,[g,y]=(0,n.useState)("year"),j=(0,n.useCallback)((()=>{y("year"),u(c)}),[y,c,u]);(0,n.useEffect)((()=>{const e=e=>{"Escape"===e.key&&j()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[j]),(0,n.useEffect)((()=>{p()(d[0]).year()!==p()(d[1]).year()?y("year"):y("month")}),[d]);const[v,b]=(0,n.useState)(!1),M=(0,n.useCallback)((0,Y.debounce)(b,h.Z.optionsDebounceDelay),[b]);(0,n.useEffect)((()=>{const e=d[0]!==c[0]||d[1]!==c[1];console.log(),M(e)}),[d,c,M]);const C=(0,x.jsxs)(r.Z,{vertical:!0,align:"stretch",style:{inlineSize:"100%"},children:[(0,x.jsx)(r.Z,{style:{inlineSize:"100%"},children:(0,x.jsx)(O.Z,{range:d,type:m,setRange:u})}),(0,x.jsxs)(r.Z,{align:"center",justify:"space-between",vertical:t,children:[(0,x.jsx)(S,{mode:g,setMode:y}),(0,x.jsx)(Z,{})]})]});return s?(0,x.jsx)(k.Z,{}):Object.keys(e).length?(0,x.jsxs)(r.Z,{vertical:!0,align:"start",children:[(0,x.jsx)(L,{open:v,resetRange:j}),C]}):(0,x.jsx)(l.Z,{image:l.Z.PRESENTED_IMAGE_SIMPLE,description:""})})),T=(0,n.memo)(I)}}]);
//# sourceMappingURL=766.7fc4e1c1.chunk.js.map