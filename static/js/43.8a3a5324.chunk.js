(this.webpackJsonpblinkstars=this.webpackJsonpblinkstars||[]).push([[43],{1106:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1116:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1391:function(e,t,a){"use strict";var n=a(40),r=a(27),c=a(312),l=a(9),o=a(1134),i=a(61),m=a(1459),s=a(146),u=a(1070),p=a(39),b=a(112),E=a(1077),f=a(1085),d=a(1086),g=a(111),j=a(1231),v=a.n(j),h=a(1232),y=a.n(h),O=a(2156),x=a(5),k=a(2),C=a.n(k),N=a(1122),S=a.n(N),w=a(0),I=a.n(w),P=a(1458),A=a(20),L=a(1116),z=Object(c.a)((function(e){return{root:{},image:{height:200,backgroundColor:e.palette.background.dark},likedButton:{color:l.a.red[600]},membersIcon:{marginLeft:e.spacing(2),marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.className,a=e.project,c=Object(r.a)(e,["className","project"]),l=z(),j=Object(w.useState)(a.isLiked),h=Object(n.a)(j,2),k=h[0],N=h[1],B=Object(w.useState)(void 0===a.likesCount?0:a.likesCount),T=Object(n.a)(B,2),W=T[0],R=T[1];return I.a.createElement(o.a,Object.assign({className:Object(x.a)(l.root,t)},c),I.a.createElement(i.a,{p:3},I.a.createElement(m.a,{className:l.image,image:a.image}),I.a.createElement(i.a,{display:"flex",alignItems:"center",mt:2},I.a.createElement(s.a,{alt:"Author",src:a.author.avatar},Object(L.a)(a.author.name)),I.a.createElement(i.a,{ml:2},I.a.createElement(u.a,{color:"textPrimary",component:A.a,to:"#",variant:"h5"},a.title),I.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"by"," ",I.a.createElement(u.a,{color:"textPrimary",component:A.a,to:"#",variant:"h6"},a.author.name)," ","| Updated ",C()(a.updatedAt).fromNow())))),I.a.createElement(i.a,{pb:2,px:3},I.a.createElement(p.a,{color:"textSecondary",variant:"body2"},a.caption)),I.a.createElement(i.a,{py:2,px:3},I.a.createElement(b.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},I.a.createElement(b.a,{item:!0},I.a.createElement(p.a,{variant:"h5",color:"textPrimary"},S()(a.budget).format("".concat(a.currency,"0,0.00"))),I.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"Budget")),I.a.createElement(b.a,{item:!0},I.a.createElement(p.a,{variant:"h5",color:"textPrimary"},a.location),I.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"Location")),I.a.createElement(b.a,{item:!0},I.a.createElement(p.a,{variant:"h5",color:"textPrimary"},a.type),I.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"Type")))),I.a.createElement(E.a,null),I.a.createElement(i.a,{py:2,pl:2,pr:3,display:"flex",alignItems:"center"},k?I.a.createElement(f.a,{title:"Unlike"},I.a.createElement(d.a,{className:l.likedButton,onClick:function(){N(!1),R((function(e){return e-1}))}},I.a.createElement(v.a,{fontSize:"small"}))):I.a.createElement(f.a,{title:"Like"},I.a.createElement(d.a,{onClick:function(){N(!0),R((function(e){return e+1}))}},I.a.createElement(y.a,{fontSize:"small"}))),I.a.createElement(p.a,{variant:"subtitle2",color:"textSecondary"},W),I.a.createElement(g.a,{fontSize:"small",color:"action",className:l.membersIcon},I.a.createElement(P.a,null)),I.a.createElement(p.a,{variant:"subtitle2",color:"textSecondary"},a.membersCount),I.a.createElement(i.a,{flexGrow:1}),I.a.createElement(O.a,{value:a.rating,size:"small",readOnly:!0})))}},2132:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(11),l=a(40),o=a(312),i=a(599),m=a(61),s=a(0),u=a.n(s),p=a(316),b=a(1106),E=a(16),f=a(42),d=a(27),g=a(1134),j=a(2070),v=a(1077),h=a(1309),y=a(1266),O=a(1166),x=a(1349),k=a.n(x),C=a(5),N=a(1071),S=a(1061),w=a(1081),I=a(1551),P=a.n(I),A=Object(o.a)((function(e){return{root:{},menuItem:{padding:0},formControlLabel:{padding:e.spacing(.5,2),width:"100%",margin:0}}})),L=function(e){var t=e.label,a=e.options,n=e.value,r=e.onChange,c=A(),o=Object(s.useRef)(null),i=Object(s.useState)(!1),m=Object(l.a)(i,2),p=m[0],b=m[1],E=function(e){var t=Object(f.a)(n);e.target.checked?t.push(e.target.value):t=t.filter((function(t){return t!==e.target.value})),r&&r(t)};return u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{onClick:function(){b(!0)},ref:o},t,u.a.createElement(P.a,null)),u.a.createElement(S.a,{anchorEl:o.current,elevation:1,onClose:function(){b(!1)},open:p,PaperProps:{style:{width:250}}},a.map((function(e){return u.a.createElement(w.a,{className:c.menuItem,key:e},u.a.createElement(y.a,{className:c.formControlLabel,control:u.a.createElement(O.a,{checked:n.indexOf(e)>-1,onChange:E,value:e}),label:e}))}))))},z=[{label:"Type",options:["Freelance","Full Time","Part Time","Internship"]},{label:"Level",options:["Novice","Expert"]},{label:"Location",options:["Africa","Asia","Australia","Europe","North America","South America"]},{label:"Roles",options:["Android","Web Developer","iOS"]}],B=Object(o.a)((function(e){return{root:{},searchInput:{marginLeft:e.spacing(2)},chip:{margin:e.spacing(1)}}})),T=function(e){var t=e.className,a=Object(d.a)(e,["className"]),n=B(),r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],i=c[1],p=Object(s.useState)(["Freelance","Full Time","Novice","Europe","Android","Web Developer"]),b=Object(l.a)(p,2),E=b[0],x=b[1],N=function(e){x(e)};return u.a.createElement(g.a,Object.assign({className:Object(C.a)(n.root,t)},a),u.a.createElement(m.a,{p:2,display:"flex",alignItems:"center"},u.a.createElement(k.a,null),u.a.createElement(j.a,{disableUnderline:!0,fullWidth:!0,className:n.searchInput,onChange:function(e){e.persist(),i(e.target.value)},onKeyUp:function(e){e.persist(),13===e.keyCode&&o&&(E.includes(o)||(x((function(e){return[].concat(Object(f.a)(e),[o])})),i("")))},placeholder:"Enter a keyword",value:o})),u.a.createElement(v.a,null),u.a.createElement(m.a,{p:2,display:"flex",alignItems:"center",flexWrap:"wrap"},E.map((function(e){return u.a.createElement(h.a,{className:n.chip,key:e,label:e,onDelete:function(){return function(e){x((function(t){return t.filter((function(t){return e!==t}))}))}(e)}})}))),u.a.createElement(v.a,null),u.a.createElement(m.a,{display:"flex",alignItems:"center",flexWrap:"wrap",p:1},z.map((function(e){return u.a.createElement(L,{key:e.label,label:e.label,onChange:N,options:e.options,value:E})})),u.a.createElement(m.a,{flexGrow:1}),u.a.createElement(y.a,{control:u.a.createElement(O.a,{defaultChecked:!0}),label:"In network"})))},W=a(112),R=a(1132),F=a(1070),U=a(39),D=a(111),G=a(1108),J=a.n(G),M=a(1240),H=a(20),K=Object(o.a)((function(){return{root:{}}})),q=function(e){var t=e.className,a=Object(d.a)(e,["className"]),n=K();return u.a.createElement(W.a,Object.assign({alignItems:"center",container:!0,justify:"space-between",spacing:3,className:Object(C.a)(n.root,t)},a),u.a.createElement(W.a,{item:!0},u.a.createElement(R.a,{separator:u.a.createElement(J.a,{fontSize:"small"}),"aria-label":"breadcrumb"},u.a.createElement(F.a,{variant:"body1",color:"inherit",to:"/app",component:H.a},"Dashboard"),u.a.createElement(F.a,{variant:"body1",color:"inherit",to:"/app/projects",component:H.a},"Projects"),u.a.createElement(U.a,{variant:"body1",color:"textPrimary"},"Browse")),u.a.createElement(U.a,{variant:"h3",color:"textPrimary"},"See the latest opportunities")),u.a.createElement(W.a,{item:!0},u.a.createElement(N.a,{color:"secondary",component:H.a,to:"/app/campaign/create",variant:"contained",startIcon:u.a.createElement(D.a,{fontSize:"small"},u.a.createElement(M.a,null))},"Add new project")))},Q=a(1089),V=a(2044),X=a.n(V),Y=a(2157),Z=a(2096),$=a(2130),_=a(1391),ee=Object(o.a)((function(e){return{root:{},title:{position:"relative","&:after":{position:"absolute",bottom:-8,left:0,content:'" "',height:3,width:48,backgroundColor:e.palette.primary.main}},sortButton:{textTransform:"none",letterSpacing:0,marginRight:e.spacing(2)}}})),te=function(e){var t=e.className,a=e.projects,n=Object(d.a)(e,["className","projects"]),r=ee(),c=Object(s.useRef)(null),o=Object(s.useState)(!1),i=Object(l.a)(o,2),p=i[0],b=i[1],E=Object(s.useState)("Most popular"),f=Object(l.a)(E,2),g=f[0],j=f[1],v=Object(s.useState)("grid"),h=Object(l.a)(v,2),y=h[0],O=h[1];return u.a.createElement("div",Object.assign({className:Object(C.a)(r.root,t)},n),u.a.createElement(m.a,{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",mb:2},u.a.createElement(U.a,{className:r.title,variant:"h5",color:"textPrimary"},"Showing ",a.length," projects"),u.a.createElement(m.a,{display:"flex",alignItems:"center"},u.a.createElement(N.a,{className:r.sortButton,onClick:function(){b(!0)},ref:c},g,u.a.createElement(P.a,null)),u.a.createElement(Y.a,{exclusive:!0,onChange:function(e,t){O(t)},size:"small",value:y},u.a.createElement(Z.a,{value:"grid"},u.a.createElement(X.a,null))))),u.a.createElement(W.a,{container:!0,spacing:3},a.map((function(e){return u.a.createElement(W.a,{item:!0,key:e.id,md:"grid"===y?4:12,sm:"grid"===y?6:12,xs:12},u.a.createElement(_.a,{project:e}))}))),u.a.createElement(m.a,{mt:6,display:"flex",justifyContent:"center"},u.a.createElement($.a,{count:3})),u.a.createElement(S.a,{anchorEl:c.current,onClose:function(){b(!1)},open:p,elevation:1},["Most recent","Popular","Price high","Price low","On sale"].map((function(e){return u.a.createElement(w.a,{key:e,onClick:function(){return j(e),void b(!1)}},u.a.createElement(Q.a,{primary:e}))}))))},ae=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=ae(),t=Object(b.a)(),a=Object(s.useState)([]),n=Object(l.a)(a,2),o=n[0],f=n[1],d=Object(s.useCallback)(Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/projects/projects");case 3:a=e.sent,t.current&&f(a.data.projects),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(s.useEffect)((function(){d()}),[d]),u.a.createElement(p.a,{className:e.root,title:"Project List"},u.a.createElement(i.a,{maxWidth:"lg"},u.a.createElement(q,null),u.a.createElement(m.a,{mt:3},u.a.createElement(T,null)),u.a.createElement(m.a,{mt:6},u.a.createElement(te,{projects:o}))))}}}]);
//# sourceMappingURL=43.8a3a5324.chunk.js.map