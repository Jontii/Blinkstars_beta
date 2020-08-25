(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[62],{2145:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(13),o=a(28),l=a(32),i=(a(1559),a(1394)),d=(a(1560),a(1561)),u=a(1562),s=(a(1563),a(1564)),m=a(1566),p=(a(1567),a(1568)),f=a(1048),b=a(34),h=a(1052),v=a(1114),g=a(245),y=a(1258),E=a(3),k=a.n(E),C=a(0),j=a.n(C),O=a(332),D=a(363),x=a(100),w=a(1117),A=a(125),N=a(1104),W=a(1109),S=a(1110),T=a(1064),P=a(1089),B=a(1058),M=a(113),V=a(1083),G=a(2160),z=a(1156),F=a(9),I=a.n(F),R=a(129),Y=a(1312),q=a(1149),L=function(e,t){return e?I.a.merge({},{allDay:!1,color:"",description:"",end:k()().add(30,"minutes").toDate(),start:k()().toDate(),title:"",submit:null},e):t?I.a.merge({},{allDay:!1,color:"",description:"",end:new Date(t.end),start:new Date(t.start),title:"",submit:null},e):{allDay:!1,color:"",description:"",end:k()().add(30,"minutes").toDate(),start:k()().toDate(),title:"",submit:null}},H=Object(f.a)((function(e){return{root:{},confirmButton:{marginLeft:e.spacing(2)}}})),J=function(e){var t=e.event,a=e.onAddComplete,n=e.onCancel,o=e.onDeleteComplete,l=e.onEditComplete,i=e.range,d=H(),u=Object(x.b)(),s=Object(R.b)().enqueueSnackbar,m=!t,p=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(Object(D.c)(t.id));case 3:o(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return j.a.createElement(z.a,{initialValues:L(t,i),validationSchema:q.f().shape({allDay:q.b(),description:q.h().max(5e3),end:q.d().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:q.d(),title:q.h().max(255).required("Title is required")}),onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(n,c){var o,i,d,p,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=c.resetForm,i=c.setErrors,d=c.setStatus,p=c.setSubmitting,e.prev=1,f={allDay:n.allDay,description:n.description,end:n.end,start:n.start,title:n.title},!t){e.next=8;break}return e.next=6,u(Object(D.i)(t.id,f));case 6:e.next=10;break;case 8:return e.next=10,u(Object(D.b)(f));case 10:o(),d({success:!0}),p(!1),s("Calendar updated",{variant:"success"}),m?a():l(),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),d({success:!1}),i({submit:e.t0.message}),p(!1);case 23:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,a=e.handleBlur,r=e.handleChange,c=e.handleSubmit,o=e.isSubmitting,l=e.setFieldTouched,i=e.setFieldValue,u=e.touched,s=e.values;return j.a.createElement("form",{onSubmit:c},j.a.createElement(w.a,{p:3},j.a.createElement(A.a,{align:"center",gutterBottom:!0,variant:"h3",color:"textPrimary"},m?"Add Event":"Edit Event")),j.a.createElement(w.a,{p:3},j.a.createElement(N.a,{error:Boolean(u.title&&t.title),fullWidth:!0,helperText:u.title&&t.title,label:"Title",name:"title",onBlur:a,onChange:r,value:s.title,variant:"outlined"}),j.a.createElement(w.a,{mt:2},j.a.createElement(N.a,{error:Boolean(u.description&&t.description),fullWidth:!0,helperText:u.description&&t.description,label:"Description",name:"description",onBlur:a,onChange:r,value:s.description,variant:"outlined"})),j.a.createElement(w.a,{mt:2},j.a.createElement(W.a,{control:j.a.createElement(S.a,{checked:s.allDay,name:"allDay",onChange:r}),label:"All day"})),j.a.createElement(w.a,{mt:2},j.a.createElement(G.a,{fullWidth:!0,inputVariant:"outlined",label:"Start date",name:"start",onClick:function(){return l("end")},onChange:function(e){return i("start",e)},value:s.start})),j.a.createElement(w.a,{mt:2},j.a.createElement(G.a,{fullWidth:!0,inputVariant:"outlined",label:"End date",name:"end",onClick:function(){return l("end")},onChange:function(e){return i("end",e)},value:s.end})),Boolean(u.end&&t.end)&&j.a.createElement(w.a,{mt:2},j.a.createElement(T.a,{error:!0},t.end))),j.a.createElement(P.a,null),j.a.createElement(w.a,{p:2,display:"flex",alignItems:"center"},!m&&j.a.createElement(B.a,{onClick:function(){return p()}},j.a.createElement(M.a,null,j.a.createElement(Y.a,null))),j.a.createElement(w.a,{flexGrow:1}),j.a.createElement(V.a,{onClick:n},"Cancel"),j.a.createElement(V.a,{variant:"contained",type:"submit",disabled:o,color:"secondary",className:d.confirmButton},"Confirm")))}))};J.defaultProps={onAddComplete:function(){},onCancel:function(){},onDeleteComplete:function(){},onEditComplete:function(){}};var K=J,Q=a(39),U=a(1115),X=a(1150),Z=a(1082),$=a(1134),_=a.n($),ee=a(4),te=a(1395),ae=a(19),ne=Object(f.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}})),re=function(e){var t=e.className,a=e.onAddClick,n=Object(Q.a)(e,["className","onAddClick"]),r=ne();return j.a.createElement(U.a,Object.assign({className:Object(ee.a)(r.root,t),container:!0,justify:"space-between",spacing:3},n),j.a.createElement(U.a,{item:!0},j.a.createElement(X.a,{separator:j.a.createElement(_.a,{fontSize:"small"}),"aria-label":"breadcrumb"},j.a.createElement(Z.a,{variant:"body1",color:"inherit",to:"/app",component:ae.a},"Dashboard"),j.a.createElement(A.a,{variant:"body1",color:"textPrimary"},"Calendar")),j.a.createElement(A.a,{variant:"h3",color:"textPrimary"},"Here's what you planned")),j.a.createElement(U.a,{item:!0},j.a.createElement(V.a,{color:"secondary",variant:"contained",onClick:a,className:r.action,startIcon:j.a.createElement(M.a,{fontSize:"small"},j.a.createElement(te.a,null))},"New Event")))};re.defaultProps={onAddClick:function(){}};var ce=re,oe=a(2087),le=a(1121),ie=a(1094),de=a(1574),ue=a.n(de),se=a(1571),me=a.n(se),pe=a(1573),fe=a.n(pe),be=a(1572),he=a.n(be),ve=[{label:"Month",value:"dayGridMonth",icon:me.a},{label:"Week",value:"timeGridWeek",icon:he.a},{label:"Day",value:"timeGridDay",icon:fe.a},{label:"Agenda",value:"listWeek",icon:ue.a}],ge=Object(f.a)((function(){return{root:{}}})),ye=function(e){var t=e.className,a=e.date,n=e.onDateNext,r=e.onDatePrev,c=e.onDateToday,o=(e.onAddClick,e.onViewChange),l=e.view,i=Object(Q.a)(e,["className","date","onDateNext","onDatePrev","onDateToday","onAddClick","onViewChange","view"]),d=ge();return j.a.createElement(U.a,Object.assign({className:Object(ee.a)(d.root,t),alignItems:"center",container:!0,justify:"space-between",spacing:3},i),j.a.createElement(U.a,{item:!0},j.a.createElement(oe.a,{size:"small"},j.a.createElement(V.a,{onClick:r},"Prev"),j.a.createElement(V.a,{onClick:c},"Today"),j.a.createElement(V.a,{onClick:n},"Next"))),j.a.createElement(le.a,{smDown:!0},j.a.createElement(U.a,{item:!0},j.a.createElement(A.a,{variant:"h3",color:"textPrimary"},k()(a).format("MMMM YYYY"))),j.a.createElement(U.a,{item:!0},ve.map((function(e){var t=e.icon;return j.a.createElement(ie.a,{key:e.value,title:e.label},j.a.createElement(B.a,{color:e.value===l?"secondary":"default",onClick:function(){return o(e.value)}},j.a.createElement(t,null)))})))))};ye.defaultProps={onDateNext:function(){},onDatePrev:function(){},onDateToday:function(){},onAddClick:function(){},onViewChange:function(){}};var Ee=ye,ke=function(e){var t=e.calendar,a=t.events,n=t.selectedEventId;return n?a.find((function(e){return e.id===n})):null},Ce=Object(f.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},calendar:{marginTop:e.spacing(3),padding:e.spacing(2),"& .fc-unthemed .fc-head":{backgroundColor:e.palette.background.dark},"& .fc-unthemed .fc-body":{backgroundColor:e.palette.background.default},"& .fc-unthemed .fc-row":{borderColor:e.palette.divider},"& .fc-unthemed .fc-axis":Object(l.a)({},e.typography.body2),"& .fc-unthemed .fc-divider":{backgroundColor:e.palette.background.dark,borderColor:e.palette.divider},"& .fc-unthemed th":{borderColor:e.palette.divider},"& .fc-unthemed td":{borderColor:e.palette.divider},"& .fc-unthemed td.fc-today":{backgroundColor:e.palette.background.dark},"& .fc-unthemed .fc-highlight":{backgroundColor:e.palette.background.dark},"& .fc-unthemed .fc-event":{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,borderWidth:2,opacity:.9,"& .fc-time":Object(l.a)(Object(l.a)({},e.typography.h6),{},{color:"inherit"}),"& .fc-title":Object(l.a)(Object(l.a)({},e.typography.body1),{},{color:"inherit"})},"& .fc-unthemed .fc-day-top":Object(l.a)({},e.typography.body2),"& .fc-unthemed .fc-day-header":Object(l.a)(Object(l.a)({},e.typography.subtitle2),{},{fontWeight:e.typography.fontWeightMedium,color:e.palette.text.secondary,padding:e.spacing(1),backgroundColor:e.palette.background.dark}),"& .fc-unthemed .fc-list-view":{borderColor:e.palette.divider},"& .fc-unthemed .fc-list-empty":Object(l.a)({},e.typography.subtitle1),"& .fc-unthemed .fc-list-heading td":{backgroundColor:e.palette.background.dark,borderColor:e.palette.divider},"& .fc-unthemed .fc-list-heading-main":Object(l.a)({},e.typography.h6),"& .fc-unthemed .fc-list-heading-alt":Object(l.a)({},e.typography.h6),"& .fc-unthemed .fc-list-item:hover td":{backgroundColor:e.palette.background.dark},"& .fc-unthemed .fc-list-item-title":Object(l.a)({},e.typography.body1),"& .fc-unthemed .fc-list-item-time":Object(l.a)({},e.typography.body2)}}}));t.default=function(){var e=Ce(),t=Object(C.useRef)(null),a=Object(b.a)(),n=Object(h.a)(a.breakpoints.down("sm")),l=Object(x.b)(),f=Object(x.c)((function(e){return e.calendar})),E=f.events,w=f.isModalOpen,A=f.selectedRange,N=Object(x.c)(ke),W=Object(C.useState)(k()().toDate()),S=Object(o.a)(W,2),T=S[0],P=S[1],B=Object(C.useState)(n?"listWeek":"dayGridMonth"),M=Object(o.a)(B,2),V=M[0],G=M[1],z=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.event,e.prev=1,e.next=4,l(Object(D.i)(a.id,{allDay:a.allDay,start:a.start,end:a.end}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.event,e.prev=1,e.next=4,l(Object(D.i)(a.id,{allDay:a.allDay,start:a.start,end:a.end}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){l(Object(D.a)())};return Object(C.useEffect)((function(){l(Object(D.d)())}),[l]),Object(C.useEffect)((function(){var e=t.current;if(e){var a=e.getApi(),r=n?"listWeek":"dayGridMonth";a.changeView(r),G(r)}}),[n]),j.a.createElement(O.a,{className:e.root,title:"Calendar"},j.a.createElement(v.a,{maxWidth:!1},j.a.createElement(ce,{onAddClick:function(){l(Object(D.e)())}}),j.a.createElement(Ee,{date:T,onDateNext:function(){var e=t.current;if(e){var a=e.getApi();a.next(),P(a.getDate())}},onDatePrev:function(){var e=t.current;if(e){var a=e.getApi();a.prev(),P(a.getDate())}},onDateToday:function(){var e=t.current;if(e){var a=e.getApi();a.today(),P(a.getDate())}},onViewChange:function(e){var a=t.current;a&&(a.getApi().changeView(e),G(e))},view:V}),j.a.createElement(g.a,{className:e.calendar},j.a.createElement(s.a,{allDayMaintainDuration:!0,defaultDate:T,defaultView:V,droppable:!0,editable:!0,eventClick:function(e){l(Object(D.g)(e.event.id))},eventDrop:F,eventLimit:!0,eventResizableFromStart:!0,eventResize:z,events:E,header:!1,height:800,ref:t,rerenderDelay:10,select:function(e){var a=t.current;a&&a.getApi().unselect();l(Object(D.h)(e.start,e.end))},selectable:!0,weekends:!0,plugins:[i.d,m.a,d.a,u.a,p.a]})),j.a.createElement(y.a,{maxWidth:"sm",fullWidth:!0,onClose:I,open:w},w&&j.a.createElement(K,{event:N,range:A,onAddComplete:I,onCancel:I,onDeleteComplete:I,onEditComplete:I}))))}}}]);
//# sourceMappingURL=62.1dd94d58.chunk.js.map