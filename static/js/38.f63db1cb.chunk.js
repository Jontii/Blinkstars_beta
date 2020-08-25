(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[38],{1132:function(e,a,t){"use strict";var n=t(0);a.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1140:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1143:function(e,a,t){"use strict";var n=t(55),r=t(39),c=t(1048),l=t(26),o=t(4),i=t(0),s=t.n(i),u=Object(c.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(l.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(l.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(l.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(l.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(l.c)(e.palette.warning.main,.08)}}}));a.a=function(e){var a=e.className,t=void 0===a?"":a,c=e.color,l=void 0===c?"secondary":c,i=e.children,m=(e.style,Object(r.a)(e,["className","color","children","style"])),d=u();return s.a.createElement("span",Object.assign({className:Object(o.a)(d.root,Object(n.a)({},d[l],l),t)},m),i)}},2150:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t.n(n),c=t(13),l=t(28),o=t(1048),i=t(1114),s=t(1117),u=t(0),m=t.n(u),d=t(332),p=t(1132),g=t(16),b=t(39),f=t(1115),E=t(1150),v=t(1082),h=t(125),O=t(1083),j=t(113),y=t(1134),k=t.n(y),x=t(4),S=t(2100),C=t(2101),w=t(1395),N=t(19),P=Object(o.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}})),I=function(e){var a=e.className,t=Object(b.a)(e,["className"]),n=P();return m.a.createElement(f.a,Object.assign({className:Object(x.a)(n.root,a),container:!0,justify:"space-between",spacing:3},t),m.a.createElement(f.a,{item:!0},m.a.createElement(E.a,{separator:m.a.createElement(k.a,{fontSize:"small"}),"aria-label":"breadcrumb"},m.a.createElement(v.a,{variant:"body1",color:"inherit",to:"/app",component:N.a},"Dashboard"),m.a.createElement(v.a,{variant:"body1",color:"inherit",to:"/app/management",component:N.a},"Management"),m.a.createElement(h.a,{variant:"body1",color:"textPrimary"},"Invoices")),m.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"All Invoices"),m.a.createElement(s.a,{mt:2},m.a.createElement(O.a,{className:n.action,startIcon:m.a.createElement(j.a,{fontSize:"small"},m.a.createElement(S.a,null))},"Import"),m.a.createElement(O.a,{className:n.action,startIcon:m.a.createElement(j.a,{fontSize:"small"},m.a.createElement(C.a,null))},"Export"))),m.a.createElement(f.a,{item:!0},m.a.createElement(O.a,{color:"secondary",variant:"contained",className:n.action,startIcon:m.a.createElement(j.a,{fontSize:"small"},m.a.createElement(w.a,null))},"New Invoice")))},A=t(41),z=t(32),D=t(11),F=t(1151),L=t(1104),R=t(1105),W=t(1194),B=t(1476),M=t(1477),T=t(1478),Y=t(1479),q=t(1480),G=t(1125),J=t(1058),H=t(2155),U=t(3),K=t.n(U),Q=t(1138),V=t.n(Q),X=t(1102),Z=t(1576),$=t(1446),_=t(187),ee=t.n(_),ae=t(1143),te=t(1140),ne=[{id:"all",name:"All"},{id:"paid",name:"Paid"},{id:"pending",name:"Pending"},{id:"canceled",name:"Canceled"}],re=[{value:"createdAt|desc",label:"Newest first"},{value:"createdAt|asc",label:"Oldest first"}],ce=Object(o.a)((function(e){return{root:{},queryField:{width:500},statusField:{flexBasis:200},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{backgroundColor:D.a.red[500],color:D.a.common.white}}})),le=function(e){var a=e.className,t=e.invoices,n=Object(b.a)(e,["className","invoices"]),r=ce(),c=Object(u.useState)([]),o=Object(l.a)(c,2),i=o[0],d=o[1],p=Object(u.useState)(0),g=Object(l.a)(p,2),f=g[0],E=g[1],y=Object(u.useState)(10),k=Object(l.a)(y,2),S=k[0],C=k[1],w=Object(u.useState)(""),P=Object(l.a)(w,2),I=P[0],D=P[1],U=Object(u.useState)(re[0].value),Q=Object(l.a)(U,2),_=Q[0],le=Q[1],oe=Object(u.useState)({status:null}),ie=Object(l.a)(oe,2),se=ie[0],ue=ie[1],me=function(e){d(e.target.checked?t.map((function(e){return e.id})):[])},de=function(e,a,t){return e.filter((function(e){var n=!0;if(a){var r=!1;["name","email"].forEach((function(t){e.customer[t].toLowerCase().includes(a.toLowerCase())&&(r=!0)})),r||(n=!1)}return t.status&&e.status!==t.status&&(n=!1),n}))}(t,I,se),pe=function(e,a,t){return e.slice(a*t,a*t+t)}(de,f,S),ge=i.length>0,be=i.length>0&&i.length<t.length,fe=i.length===t.length;return m.a.createElement(F.a,Object.assign({className:Object(x.a)(r.root,a)},n),m.a.createElement(s.a,{p:2},m.a.createElement(s.a,{display:"flex",alignItems:"center"},m.a.createElement(L.a,{className:r.queryField,InputProps:{startAdornment:m.a.createElement(R.a,{position:"start"},m.a.createElement(j.a,{fontSize:"small",color:"action"},m.a.createElement(X.a,null)))},onChange:function(e){e.persist(),D(e.target.value)},placeholder:"Search invoices by customer",value:I,variant:"outlined"}),m.a.createElement(s.a,{flexGrow:1}),m.a.createElement(L.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),le(e.target.value)},select:!0,SelectProps:{native:!0},value:_,variant:"outlined"},re.map((function(e){return m.a.createElement("option",{key:e.value,value:e.value},e.label)})))),m.a.createElement(s.a,{mt:2,display:"flex",alignItems:"center"},m.a.createElement(L.a,{className:r.statusField,label:"Status",name:"status",onChange:function(e){e.persist();var a=null;"all"!==e.target.value&&(a=e.target.value),ue((function(e){return Object(z.a)(Object(z.a)({},e),{},{status:a})}))},select:!0,SelectProps:{native:!0},value:se.status||"all",variant:"outlined"},ne.map((function(e){return m.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),ge&&m.a.createElement("div",{className:r.bulkOperations},m.a.createElement("div",{className:r.bulkActions},m.a.createElement(W.a,{checked:fe,indeterminate:be,onChange:me}),m.a.createElement(O.a,{variant:"outlined",className:r.bulkAction},"Delete"),m.a.createElement(O.a,{variant:"outlined",className:r.bulkAction},"Edit"))),m.a.createElement(ee.a,null,m.a.createElement(s.a,{minWidth:1200},m.a.createElement(B.a,null,m.a.createElement(M.a,null,m.a.createElement(T.a,null,m.a.createElement(Y.a,{padding:"checkbox"},m.a.createElement(W.a,{checked:fe,indeterminate:be,onChange:me})),m.a.createElement(Y.a,null,"Customer"),m.a.createElement(Y.a,null,"Status"),m.a.createElement(Y.a,null,"Amount"),m.a.createElement(Y.a,null,"ID"),m.a.createElement(Y.a,null,"Date"),m.a.createElement(Y.a,{align:"right"},"Actions"))),m.a.createElement(q.a,null,pe.map((function(e){var a=i.includes(e.id);return m.a.createElement(T.a,{hover:!0,key:e.id,selected:a},m.a.createElement(Y.a,{padding:"checkbox"},m.a.createElement(W.a,{checked:a,onChange:function(a){return t=e.id,void(i.includes(t)?d((function(e){return e.filter((function(e){return e!==t}))})):d((function(e){return[].concat(Object(A.a)(e),[t])})));var t},value:a})),m.a.createElement(Y.a,null,m.a.createElement(s.a,{display:"flex",alignItems:"center"},m.a.createElement(G.a,{className:r.avatar},Object(te.a)(e.customer.name)),m.a.createElement(s.a,{ml:2},m.a.createElement(v.a,{variant:"subtitle2",color:"textPrimary",component:N.a,underline:"none",to:"#"},e.customer.name),m.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.customer.email)))),m.a.createElement(Y.a,null,function(e){var a={canceled:{text:"Canceled",color:"error"},paid:{text:"Paid",color:"success"},pending:{text:"Pending",color:"warning"}}[e],t=a.text,n=a.color;return m.a.createElement(ae.a,{color:n},t)}(e.status)),m.a.createElement(Y.a,null,V()(e.totalAmount).format("".concat(e.currency,"0,0.00"))),m.a.createElement(Y.a,null,e.id),m.a.createElement(Y.a,null,K()(e.issueDate).format("DD/MM/YYYY")),m.a.createElement(Y.a,{align:"right"},m.a.createElement(J.a,{component:N.a,to:"#"},m.a.createElement(j.a,{fontSize:"small"},m.a.createElement(Z.a,null))),m.a.createElement(J.a,{component:N.a,to:"/app/management/invoices/1"},m.a.createElement(j.a,{fontSize:"small"},m.a.createElement($.a,null)))))})))))),m.a.createElement(H.a,{component:"div",count:de.length,onChangePage:function(e,a){E(a)},onChangeRowsPerPage:function(e){C(parseInt(e.target.value))},page:f,rowsPerPage:S,rowsPerPageOptions:[5,10,25]}))};le.defaultProps={invoices:[]};var oe=le,ie=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));a.default=function(){var e=ie(),a=Object(p.a)(),t=Object(u.useState)([]),n=Object(l.a)(t,2),o=n[0],b=n[1],f=Object(u.useCallback)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/api/invoices");case 3:t=e.sent,a.current&&b(t.data.invoices),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);return Object(u.useEffect)((function(){f()}),[f]),m.a.createElement(d.a,{className:e.root,title:"Invoice List"},m.a.createElement(i.a,{maxWidth:!1},m.a.createElement(I,null),m.a.createElement(s.a,{mt:3},m.a.createElement(oe,{invoices:o}))))}}}]);
//# sourceMappingURL=38.f63db1cb.chunk.js.map