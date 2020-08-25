(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[35],{1132:function(e,a,t){"use strict";var r=t(0);a.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1134:function(e,a,t){"use strict";var r=t(246);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),o=(0,r(t(331)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=o},1150:function(e,a,t){"use strict";var r=t(1),n=t(85),o=t(5),c=t(0),s=(t(114),t(2),t(4)),l=t(7),i=t(125),m=t(26),u=t(186),d=Object(u.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=t(330);var p=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(o.a)(e,["classes"]);return c.createElement(h.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(d,{className:a.icon}))}));var f=c.forwardRef((function(e,a){var t=e.children,l=e.classes,m=e.className,u=e.component,d=void 0===u?"nav":u,h=e.expandText,f=void 0===h?"Show path":h,b=e.itemsAfterCollapse,v=void 0===b?1:b,E=e.itemsBeforeCollapse,g=void 0===E?1:E,x=e.maxItems,y=void 0===x?8:x,j=e.separator,O=void 0===j?"/":j,C=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),N=c.useState(!1),k=N[0],B=N[1],S=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})).map((function(e,a){return c.createElement("li",{className:l.li,key:"child-".concat(a)},e)}));return c.createElement(i.a,Object(r.a)({ref:a,component:d,color:"textSecondary",className:Object(s.a)(l.root,m)},C),c.createElement("ol",{className:l.ol},function(e,a,t){return e.reduce((function(r,n,o){return o<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:a},t)):r.push(n),r}),[])}(k||y&&S.length<=y?S:function(e){return g+v>=e.length?e:[].concat(Object(n.a)(e.slice(0,g)),[c.createElement(p,{"aria-label":f,key:"ellipsis",onClick:function(e){B(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-v,e.length)))}(S),l.separator,O)))}));a.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},1151:function(e,a,t){"use strict";var r=t(1),n=t(5),o=t(0),c=(t(2),t(4)),s=t(245),l=t(7),i=o.forwardRef((function(e,a){var t=e.classes,l=e.className,i=e.raised,m=void 0!==i&&i,u=Object(n.a)(e,["classes","className","raised"]);return o.createElement(s.a,Object(r.a)({className:Object(c.a)(t.root,l),elevation:m?8:1,ref:a},u))}));a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(i)},1166:function(e,a,t){"use strict";var r=t(1),n=t(5),o=t(0),c=(t(2),t(4)),s=t(7),l=o.forwardRef((function(e,a){var t=e.classes,s=e.className,l=e.component,i=void 0===l?"div":l,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(i,Object(r.a)({className:Object(c.a)(t.root,s),ref:a},m))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},2153:function(e,a,t){"use strict";t.r(a);var r=t(8),n=t.n(r),o=t(13),c=t(28),s=t(1048),l=t(1114),i=t(1117),m=t(0),u=t.n(m),d=t(332),h=t(1132),p=t(16),f=t(39),b=t(1083),v=t(1151),E=t(1166),g=t(1115),x=t(1104),y=t(125),j=t(1110),O=t(4),C=t(1156),N=t(129),k=t(155),B=t(1149),S=Object(s.a)((function(){return{root:{}}})),w=function(e){var a=e.className,t=e.customer,r=Object(f.a)(e,["className","customer"]),c=S(),s=Object(N.b)().enqueueSnackbar;return u.a.createElement(C.a,{initialValues:{address1:t.address1||"",address2:t.address2||"",country:t.country||"",email:t.email||"",hasDiscountedPrices:t.hasDiscountedPrices||!1,isVerified:t.isVerified||!1,name:t.name||"",phone:t.phone||"",state:t.state||"",submit:null},validationSchema:B.f().shape({address1:B.h().max(255),address2:B.h().max(255),country:B.h().max(255),email:B.h().email("Must be a valid email").max(255).required("Email is required"),hasDiscountedPrices:B.b(),isVerified:B.b(),name:B.h().max(255).required("Name is required"),phone:B.h().max(15),state:B.h().max(255)}),onSubmit:function(){var e=Object(o.a)(n.a.mark((function e(a,t){var r,o,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,o=t.setErrors,c=t.setStatus,l=t.setSubmitting,e.prev=1,e.next=4,Object(k.a)(500);case 4:r(),c({success:!0}),l(!1),s("Customer updated",{variant:"success",action:u.a.createElement(b.a,null,"See all")}),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),c({success:!1}),o({submit:e.t0.message}),l(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,n=e.handleBlur,o=e.handleChange,s=e.handleSubmit,l=e.isSubmitting,m=e.touched,d=e.values;return u.a.createElement("form",Object.assign({className:Object(O.a)(c.root,a),onSubmit:s},r),u.a.createElement(v.a,null,u.a.createElement(E.a,null,u.a.createElement(g.a,{container:!0,spacing:3},u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(x.a,{error:Boolean(m.name&&t.name),fullWidth:!0,helperText:m.name&&t.name,label:"Full name",name:"name",onBlur:n,onChange:o,required:!0,value:d.name,variant:"outlined"})),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(x.a,{error:Boolean(m.email&&t.email),fullWidth:!0,helperText:m.email&&t.email,label:"Email address",name:"email",onBlur:n,onChange:o,required:!0,value:d.email,variant:"outlined"})),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(x.a,{error:Boolean(m.country&&t.country),fullWidth:!0,helperText:m.country&&t.country,label:"Country",name:"country",onBlur:n,onChange:o,value:d.country,variant:"outlined"})),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(x.a,{error:Boolean(m.state&&t.state),fullWidth:!0,helperText:m.state&&t.state,label:"State/Region",name:"state",onBlur:n,onChange:o,value:d.state,variant:"outlined"})),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(x.a,{error:Boolean(m.address1&&t.address1),fullWidth:!0,helperText:m.address1&&t.address1,label:"Address 1",name:"address1",onBlur:n,onChange:o,value:d.address1,variant:"outlined"})),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(x.a,{error:Boolean(m.address2&&t.address2),fullWidth:!0,helperText:m.address2&&t.address2,label:"Address 2",name:"address2",onBlur:n,onChange:o,value:d.address2,variant:"outlined"})),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(x.a,{error:Boolean(m.phone&&t.phone),fullWidth:!0,helperText:m.phone&&t.phone,label:"Phone number",name:"phone",onBlur:n,onChange:o,value:d.phone,variant:"outlined"})),u.a.createElement(g.a,{item:!0}),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(y.a,{variant:"h5",color:"textPrimary"},"Email Verified"),u.a.createElement(y.a,{variant:"body2",color:"textSecondary"},"Disabling this will automatically send the user a verification email"),u.a.createElement(j.a,{checked:d.isVerified,color:"secondary",edge:"start",name:"isVerified",onChange:o,value:d.isVerified})),u.a.createElement(g.a,{item:!0,md:6,xs:12},u.a.createElement(y.a,{variant:"h5",color:"textPrimary"},"Discounted Prices"),u.a.createElement(y.a,{variant:"body2",color:"textSecondary"},"This will give the user discounted prices for all products"),u.a.createElement(j.a,{checked:d.hasDiscountedPrices,color:"secondary",edge:"start",name:"hasDiscountedPrices",onChange:o,value:d.hasDiscountedPrices}))),u.a.createElement(i.a,{mt:2},u.a.createElement(b.a,{variant:"contained",color:"secondary",type:"submit",disabled:l},"Update Customer")))))}))},P=t(1150),T=t(1082),W=t(1134),D=t.n(W),M=t(19),R=Object(s.a)((function(){return{root:{}}})),V=function(e){var a=e.className,t=Object(f.a)(e,["className"]),r=R();return u.a.createElement("div",Object.assign({className:Object(O.a)(r.root,a)},t),u.a.createElement(P.a,{separator:u.a.createElement(D.a,{fontSize:"small"}),"aria-label":"breadcrumb"},u.a.createElement(T.a,{variant:"body1",color:"inherit",to:"/app",component:M.a},"Dashboard"),u.a.createElement(T.a,{variant:"body1",color:"inherit",to:"/app/management",component:M.a},"Management"),u.a.createElement(y.a,{variant:"body1",color:"textPrimary"},"Customers")),u.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"Edit Customer"))},q=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=q(),a=Object(h.a)(),t=Object(m.useState)(null),r=Object(c.a)(t,2),s=r[0],f=r[1],b=Object(m.useCallback)(Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/customers/1");case 3:t=e.sent,a.current&&f(t.data.customer),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);return Object(m.useEffect)((function(){b()}),[b]),s?u.a.createElement(d.a,{className:e.root,title:"Customer Edit"},u.a.createElement(l.a,{maxWidth:!1},u.a.createElement(V,null)),u.a.createElement(i.a,{mt:3},u.a.createElement(l.a,{maxWidth:"lg"},u.a.createElement(w,{customer:s})))):null}}}]);
//# sourceMappingURL=35.9d01782e.chunk.js.map