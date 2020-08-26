(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[31],{1134:function(e,a,t){"use strict";var r=t(246);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(331)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=c},1150:function(e,a,t){"use strict";var r=t(1),n=t(85),c=t(5),o=t(0),l=(t(114),t(2),t(4)),i=t(7),s=t(125),m=t(26),d=t(186),u=Object(d.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(330);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(c.a)(e,["classes"]);return o.createElement(p.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),o.createElement(u,{className:a.icon}))}));var h=o.forwardRef((function(e,a){var t=e.children,i=e.classes,m=e.className,d=e.component,u=void 0===d?"nav":d,p=e.expandText,h=void 0===p?"Show path":p,v=e.itemsAfterCollapse,g=void 0===v?1:v,f=e.itemsBeforeCollapse,E=void 0===f?1:f,y=e.maxItems,k=void 0===y?8:y,x=e.separator,O=void 0===x?"/":x,j=Object(c.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=o.useState(!1),S=C[0],N=C[1],P=o.Children.toArray(t).filter((function(e){return o.isValidElement(e)})).map((function(e,a){return o.createElement("li",{className:i.li,key:"child-".concat(a)},e)}));return o.createElement(s.a,Object(r.a)({ref:a,component:u,color:"textSecondary",className:Object(l.a)(i.root,m)},j),o.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce((function(r,n,c){return c<e.length-1?r=r.concat(n,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:a},t)):r.push(n),r}),[])}(S||k&&P.length<=k?P:function(e){return E+g>=e.length?e:[].concat(Object(n.a)(e.slice(0,E)),[o.createElement(b,{"aria-label":h,key:"ellipsis",onClick:function(e){N(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-g,e.length)))}(P),i.separator,O)))}));a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},1151:function(e,a,t){"use strict";var r=t(1),n=t(5),c=t(0),o=(t(2),t(4)),l=t(245),i=t(7),s=c.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,d=Object(n.a)(e,["classes","className","raised"]);return c.createElement(l.a,Object(r.a)({className:Object(o.a)(t.root,i),elevation:m?8:1,ref:a},d))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1180:function(e,a,t){"use strict";var r=t(1),n=t(5),c=t(0),o=(t(2),t(4)),l=t(7),i=t(125),s=c.forwardRef((function(e,a){var t=e.action,l=e.avatar,s=e.classes,m=e.className,d=e.component,u=void 0===d?"div":d,p=e.disableTypography,b=void 0!==p&&p,h=e.subheader,v=e.subheaderTypographyProps,g=e.title,f=e.titleTypographyProps,E=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=g;null==y||y.type===i.a||b||(y=c.createElement(i.a,Object(r.a)({variant:l?"body2":"h5",className:s.title,component:"span",display:"block"},f),y));var k=h;return null==k||k.type===i.a||b||(k=c.createElement(i.a,Object(r.a)({variant:l?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},v),k)),c.createElement(u,Object(r.a)({className:Object(o.a)(s.root,m),ref:a},E),l&&c.createElement("div",{className:s.avatar},l),c.createElement("div",{className:s.content},y,k),t&&c.createElement("div",{className:s.action},t))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1188:function(e,a,t){"use strict";var r=t(39),n=t(1048),c=t(4),o=t(0),l=t.n(o),i=t(1270),s=t.n(i),m=Object(n.a)((function(e){return{root:{"& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}}}}));a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]),n=m();return l.a.createElement(s.a,Object.assign({className:Object(c.a)(n.root,a)},t))}},1194:function(e,a,t){"use strict";var r=t(1),n=t(5),c=t(0),o=(t(2),t(4)),l=t(337),i=t(186),s=Object(i.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(i.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(26),u=Object(i.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(10),b=t(7),h=c.createElement(m,null),v=c.createElement(s,null),g=c.createElement(u,null),f=c.forwardRef((function(e,a){var t=e.checkedIcon,i=void 0===t?h:t,s=e.classes,m=e.color,d=void 0===m?"secondary":m,u=e.icon,b=void 0===u?v:u,f=e.indeterminate,E=void 0!==f&&f,y=e.indeterminateIcon,k=void 0===y?g:y,x=e.inputProps,O=e.size,j=void 0===O?"medium":O,C=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=E?k:b,N=E?k:i;return c.createElement(l.a,Object(r.a)({type:"checkbox",classes:{root:Object(o.a)(s.root,s["color".concat(Object(p.a)(d))],E&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(r.a)({"data-indeterminate":E},x),icon:c.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===j?j:S.props.fontSize}),checkedIcon:c.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===j?j:N.props.fontSize}),ref:a},C))}));a.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(f)},1221:function(e,a,t){"use strict";a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var t=1024,r=a<0?0:a,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(t));return"".concat(parseFloat((e/Math.pow(t,c)).toFixed(r))," ").concat(n[c])}},1250:function(e,a,t){"use strict";var r=t(55),n=t(41),c=t(28),o=t(39),l=t(1048),i=t(125),s=t(1117),m=t(1082),d=t(1051),u=t(1050),p=t(1231),b=t(1097),h=t(1094),v=t(1058),g=t(1083),f=t(1178),E=t.n(f),y=t(1144),k=t.n(y),x=t(4),O=t(0),j=t.n(O),C=t(1379),S=t(187),N=t.n(S),P=t(1221),B=Object(l.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}}}}));a.a=function(e){var a,t=e.className,l=Object(o.a)(e,["className"]),f=B(),y=Object(O.useState)([]),S=Object(c.a)(y,2),T=S[0],w=S[1],q=Object(O.useCallback)((function(e){w((function(a){return Object(n.a)(a).concat(e)}))}),[]),z=Object(C.a)({onDrop:q}),M=z.getRootProps,R=z.getInputProps,I=z.isDragActive;return j.a.createElement("div",Object.assign({className:Object(x.a)(f.root,t)},l),j.a.createElement("div",Object.assign({className:Object(x.a)((a={},Object(r.a)(a,f.dropZone,!0),Object(r.a)(a,f.dragActive,I),a))},M()),j.a.createElement("input",R()),j.a.createElement("div",null,j.a.createElement("img",{alt:"Select file",className:f.image,src:"".concat("/Blinkstars_beta","/static/images/undraw_add_file2_gvbb.svg")})),j.a.createElement("div",null,j.a.createElement(i.a,{gutterBottom:!0,variant:"h3"},"Select files"),j.a.createElement(s.a,{mt:2},j.a.createElement(i.a,{color:"textPrimary",variant:"body1"},"Drop files here or click ",j.a.createElement(m.a,{underline:"always"},"browse")," ","thorough your machine")))),T.length>0&&j.a.createElement(j.a.Fragment,null,j.a.createElement(N.a,{options:{suppressScrollX:!0}},j.a.createElement(d.a,{className:f.list},T.map((function(e,a){return j.a.createElement(u.a,{divider:a<T.length-1,key:a},j.a.createElement(p.a,null,j.a.createElement(E.a,null)),j.a.createElement(b.a,{primary:e.name,primaryTypographyProps:{variant:"h5"},secondary:Object(P.a)(e.size)}),j.a.createElement(h.a,{title:"More options"},j.a.createElement(v.a,{edge:"end"},j.a.createElement(k.a,null))))})))),j.a.createElement("div",{className:f.actions},j.a.createElement(g.a,{onClick:function(){w([])},size:"small"},"Remove all"),j.a.createElement(g.a,{color:"secondary",size:"small",variant:"contained"},"Upload files"))))}},2154:function(e,a,t){"use strict";t.r(a);var r=t(1048),n=t(1114),c=t(0),o=t.n(c),l=t(332),i=t(39),s=t(1115),m=t(1150),d=t(1082),u=t(125),p=t(1083),b=t(1134),h=t.n(b),v=t(4),g=t(19),f=Object(r.a)((function(){return{root:{}}})),E=function(e){var a=e.className,t=Object(i.a)(e,["className"]),r=f();return o.a.createElement(s.a,Object.assign({className:Object(v.a)(r.root,a),container:!0,justify:"space-between",spacing:3},t),o.a.createElement(s.a,{item:!0},o.a.createElement(m.a,{separator:o.a.createElement(h.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(d.a,{variant:"body1",color:"inherit",to:"/app",component:g.a},"Dashboard"),o.a.createElement(d.a,{variant:"body1",color:"inherit",to:"/app/management",component:g.a},"Management"),o.a.createElement(u.a,{variant:"body1",color:"textPrimary"},"Products")),o.a.createElement(u.a,{variant:"h3",color:"textPrimary"},"Create a new product")),o.a.createElement(s.a,{item:!0},o.a.createElement(p.a,{component:g.a,to:"/app/management/products"},"Cancel")))},y=t(8),k=t.n(y),x=t(13),O=t(1151),j=t(1166),C=t(1104),S=t(1117),N=t(245),P=t(1064),B=t(1180),T=t(1089),w=t(1109),q=t(1194),z=t(1156),M=t(129),R=t(38),I=t(1250),H=t(1188),W=t(1149),L=[{id:"shirts",name:"Shirts"},{id:"phones",name:"Phones"},{id:"cars",name:"Cars"}],V=Object(r.a)((function(){return{root:{},editor:{"& .ql-editor":{height:400}}}})),A=function(e){var a=e.className,t=Object(i.a)(e,["className"]),r=V(),n=Object(R.g)(),c=Object(M.b)().enqueueSnackbar;return o.a.createElement(z.a,{initialValues:{category:"",description:"",images:[],includesTaxes:!1,isTaxable:!1,name:"",price:"",productCode:"",productSku:"",salePrice:"",submit:null},validationSchema:W.f().shape({category:W.h().max(255),description:W.h().max(5e3),images:W.a(),includesTaxes:W.b().required(),isTaxable:W.b().required(),name:W.h().max(255).required(),price:W.e().min(0).required(),productCode:W.h().max(255),productSku:W.h().max(255),salePrice:W.e().min(0)}),onSubmit:function(){var e=Object(x.a)(k.a.mark((function e(a,t){var r,o,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.setErrors,o=t.setStatus,l=t.setSubmitting;try{o({success:!0}),l(!1),c("Product Created",{variant:"success"}),n.push("/app/products")}catch(a){console.error(a),o({success:!1}),r({submit:a.message}),l(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,c=e.handleBlur,l=e.handleChange,i=e.handleSubmit,m=e.isSubmitting,d=e.setFieldValue,b=e.touched,h=e.values;return o.a.createElement("form",Object.assign({onSubmit:i,className:Object(v.a)(r.root,a)},t),o.a.createElement(s.a,{container:!0,spacing:3},o.a.createElement(s.a,{item:!0,xs:12,lg:8},o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(C.a,{error:Boolean(b.name&&n.name),fullWidth:!0,helperText:b.name&&n.name,label:"Product Name",name:"name",onBlur:c,onChange:l,value:h.name,variant:"outlined"}),o.a.createElement(S.a,{mt:3,mb:1},o.a.createElement(u.a,{variant:"subtitle2",color:"textSecondary"},"Description")),o.a.createElement(N.a,{variant:"outlined"},o.a.createElement(H.a,{className:r.editor,value:h.description,onChange:function(e){return d("description",e)}})),b.description&&n.description&&o.a.createElement(S.a,{mt:2},o.a.createElement(P.a,{error:!0},n.description)))),o.a.createElement(S.a,{mt:3},o.a.createElement(O.a,null,o.a.createElement(B.a,{title:"Upload Images"}),o.a.createElement(T.a,null),o.a.createElement(j.a,null,o.a.createElement(I.a,null)))),o.a.createElement(S.a,{mt:3},o.a.createElement(O.a,null,o.a.createElement(B.a,{title:"Prices"}),o.a.createElement(T.a,null),o.a.createElement(j.a,null,o.a.createElement(s.a,{container:!0,spacing:3},o.a.createElement(s.a,{item:!0,xs:12,md:6},o.a.createElement(C.a,{error:Boolean(b.price&&n.price),fullWidth:!0,helperText:b.price&&n.price?n.price:"If you have a sale price this will be shown as old price",label:"Price",name:"price",type:"number",onBlur:c,onChange:l,value:h.price,variant:"outlined"})),o.a.createElement(s.a,{item:!0,xs:12,md:6},o.a.createElement(C.a,{error:Boolean(b.salePrice&&n.salePrice),fullWidth:!0,helperText:b.salePrice&&n.salePrice,label:"Sale price",name:"salePrice",type:"number",onBlur:c,onChange:l,value:h.salePrice,variant:"outlined"}))),o.a.createElement(S.a,{mt:2},o.a.createElement(w.a,{control:o.a.createElement(q.a,{checked:h.isTaxable,onChange:l,value:h.isTaxable,name:"isTaxable"}),label:"Product is taxable"})),o.a.createElement(S.a,{mt:2},o.a.createElement(w.a,{control:o.a.createElement(q.a,{checked:h.includesTaxes,onChange:l,value:h.includesTaxes,name:"includesTaxes"}),label:"Price includes taxes"})))))),o.a.createElement(s.a,{item:!0,xs:12,lg:4},o.a.createElement(O.a,null,o.a.createElement(B.a,{title:"Organize"}),o.a.createElement(T.a,null),o.a.createElement(j.a,null,o.a.createElement(C.a,{fullWidth:!0,label:"Category",name:"category",onChange:l,select:!0,SelectProps:{native:!0},value:h.category,variant:"outlined"},L.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))),o.a.createElement(S.a,{mt:2},o.a.createElement(C.a,{error:Boolean(b.productCode&&n.productCode),fullWidth:!0,helperText:b.productCode&&n.productCode,label:"Product Code",name:"productCode",onBlur:c,onChange:l,value:h.productCode,variant:"outlined"})),o.a.createElement(S.a,{mt:2},o.a.createElement(C.a,{error:Boolean(b.productSku&&n.productSku),fullWidth:!0,helperText:b.productSku&&n.productSku,label:"Product Sku",name:"productSku",onBlur:c,onChange:l,value:h.productSku,variant:"outlined"})))))),n.submit&&o.a.createElement(S.a,{mt:3},o.a.createElement(P.a,{error:!0},n.submit)),o.a.createElement(S.a,{mt:2},o.a.createElement(p.a,{color:"secondary",variant:"contained",type:"submit",disabled:m},"Create product")))}))},F=Object(r.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));a.default=function(){var e=F();return o.a.createElement(l.a,{className:e.root,title:"Product Create"},o.a.createElement(n.a,{maxWidth:"lg"},o.a.createElement(E,null),o.a.createElement(A,null)))}}}]);
//# sourceMappingURL=31.77396ebc.chunk.js.map