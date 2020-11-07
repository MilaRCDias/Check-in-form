(this["webpackJsonpcheckin-form"]=this["webpackJsonpcheckin-form"]||[]).push([[0],{159:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(0),i=r.n(n),l=r(10),s=r.n(l),c=r(200),o=r(122),u=r(199),d=r(94),b=r(70),h=r(198),j=r(202),m=r(191),p=r(204),x=r(63),O=r(71),f=r(9),y=r(161),N=r(206),v=r(195),g=r(208),C=r(201),S=r(209),q=r(196),I=r(203),w=r(197),W=Object(m.a)((function(){return Object(p.a)({error:{color:"red",fontStyle:"italic"}})})),D=function(e){var t,r,i=e.formValues,l=e.currentStep,s=e.handleStep,c=e.setStep,o=e.nationalityList,u=W(),h=Object(n.useState)(""),m=Object(b.a)(h,2),p=m[0],x=m[1],D=(null===(t=i.lastName)||void 0===t?void 0:t.charAt(0).toUpperCase())+(null===(r=i.lastName)||void 0===r?void 0:r.slice(1)),F={firstName:"",lastName:i.lastName,nationality:"",email:"",phoneNumber:"",passportNumber:"",city:"",country:"",address:"",birthdate:"",birthplace:"",passportExpireDate:"",passportDateIssue:"",passportCityIssue:"",passportCountryIssue:"",terms:""},P=f.b().shape({firstName:f.c().min(2,"Too Short!").max(20,"Too Long!").required("Firstname is required"),lastName:f.c().nullable(),nationality:f.c().required("Select a nationality"),email:f.c().email().required("Email is required"),phoneNumber:f.c().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Invalid phone").required("Phone number is required"),passportNumber:f.c().min(2,"Too Short!").required("enter a valid passport number").test({test:function(e){return!/[!@#$%^&*(),.?":{}|<>]/.test(e)}}),city:f.c().nullable().when("nationality",{is:function(){return["Austria","Belgium","France"].includes(p)},then:f.c().nullable().required("required")}),country:f.c().nullable().when("nationality",{is:function(){return["Austria","Belgium","France"].includes(p)},then:f.c().nullable().required("required")}),address:f.c().nullable().when("nationality",{is:function(){return["Belgium","Spain"].includes(p)},then:f.c().nullable().required("required")}),birthdate:f.c().nullable().when("nationality",{is:function(){return["Belgium","France"].includes(p)},then:f.c().nullable().required("required")}),birthplace:f.c().nullable().when("nationality",{is:function(){return["France"].includes(p)},then:f.c().nullable().required("required")}),passportExpireDate:f.c().nullable().when("nationality",{is:function(){return["Austria","Greece"].includes(p)},then:f.c().nullable().required("required")}),passportDateIssue:f.c().nullable().when("nationality",{is:function(){return["Greece"].includes(p)},then:f.c().nullable().required("required")}),passportCityIssue:f.c().nullable().when("nationality",{is:function(){return["Greece"].includes(p)},then:f.c().nullable().required("required")}),passportCountryIssue:f.c().nullable().when("nationality",{is:function(){return["Greece"].includes(p)},then:f.c().nullable().required("required")}),terms:f.a().required("Terms and conditions are required")});return Object(a.jsx)("div",{children:2===l?Object(a.jsxs)("div",{children:[" ",Object(a.jsxs)(j.a,{mt:8,mx:4,children:[Object(a.jsxs)(y.a,{variant:"h4",component:"h1",align:"left",color:"textSecondary",children:[" ","Hi, ",D," "]}),Object(a.jsx)(y.a,{variant:"body1",align:"left",color:"textSecondary",children:"Please fill your informations"})]}),Object(a.jsx)(O.b,{initialValues:F,validationSchema:P,onSubmit:function(e){var t=Object(d.a)({flightNumber:i.flightNumber},e);s(t),c(3)},children:function(e){var t=e.errors,r=e.touched,n=e.handleChange,l=e.isSubmitting;return Object(a.jsxs)(O.a,{children:[Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"firstName",name:"firstName",label:"first name",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.firstName}),t.firstName&&r.firstName?Object(a.jsx)("div",{className:u.error,children:t.firstName}):null]}),Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"lastName",name:"lastName",label:"Last Name",disabled:!0,fullWidth:!0,variant:"outlined",value:i.lastName,onChange:n,error:!!t.lastName}),t.lastName&&r.lastName?Object(a.jsx)("div",{className:u.error,children:t.lastName}):null]}),Object(a.jsx)(j.a,{m:4,children:Object(a.jsxs)(v.a,{fullWidth:!0,variant:"outlined",error:!!t.nationality,children:[Object(a.jsx)(g.a,{id:"nationality",children:"Nationality"}),Object(a.jsxs)(C.a,{labelId:"nationality",id:"nationality",name:"nationality",label:"Nationality",value:p,onChange:function(e){n(e),x(e.target.value)},children:[Object(a.jsx)(S.a,{value:"",disabled:!0,children:"Choose"}),o.map((function(e){return Object(a.jsx)(S.a,{value:e,children:e},e)}))]}),t.nationality&&r.nationality?Object(a.jsx)("div",{className:u.error,children:t.nationality}):null]})}),["Austria","France"].includes(p)?Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"city",name:"city",label:"City of residence",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.city}),t.city&&r.city?Object(a.jsx)("div",{className:u.error,children:t.city}):null]}),Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"country",name:"country",label:"Country of residence",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.country}),t.country&&r.country?Object(a.jsx)("div",{className:u.error,children:t.country}):null]})]}):null,["Belgium","Spain"].includes(p)?Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"address",label:"Address",name:"address",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.address}),t.address&&r.address?Object(a.jsx)("div",{className:u.error,children:t.address}):null]}):null,["Belgium","France"].includes(p)?Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"birthdate",label:"Date of birth",name:"birthdate",type:"date",fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},onChange:n,error:!!t.birthdate}),t.birthdate&&r.birthdate?Object(a.jsx)("div",{className:u.error,children:t.birthdate}):null]}):null,"France"===p?Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"birthplace",name:"birthplace",label:"Place of birth",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.birthplace}),t.birthplace&&r.birthplace?Object(a.jsx)("div",{className:u.error,children:t.birthplace}):null]}):null,Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"email",name:"email",label:"email",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.email}),t.email&&r.email?Object(a.jsx)("div",{className:u.error,children:t.email}):null]}),Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"phoneNumber",name:"phoneNumber",label:"Phone Number",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.phoneNumber}),t.phoneNumber&&r.phoneNumber?Object(a.jsx)("div",{className:u.error,children:t.phoneNumber}):null]}),Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"passportNumber",name:"passportNumber",label:"Passport Number",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.passportNumber}),t.passportNumber&&r.passportNumber?Object(a.jsx)("div",{className:u.error,children:t.passportNumber}):null]}),["Austria","Greece"].includes(p)?Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"passportExpireDate",name:"passportExpireDate",label:"Passport expire date",type:"date",fullWidth:!0,variant:"outlined",onChange:n,InputLabelProps:{shrink:!0},error:!!t.passportExpireDate}),t.passportExpireDate&&r.passportExpireDate?Object(a.jsx)("div",{className:u.error,children:t.passportExpireDate}):null]}):null,"Greece"===p?Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"passportDateIssue",name:"passportDateIssue",label:"Passport date of issue",type:"date",fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},onChange:n,error:!!t.passportDateIssue}),t.passportDateIssue&&r.passportDateIssue?Object(a.jsx)("div",{className:u.error,children:t.passportDateIssue}):null]}),Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"passportCityIssue",name:"passportCityIssue",label:"Passport city of issue",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.passportCityIssue}),t.passportCityIssue&&r.passportCityIssue?Object(a.jsx)("div",{className:u.error,children:t.passportCityIssue}):null]}),Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(N.a,{id:"passportCountryIssue",name:"passportCountryIssue",label:"Passport country of issue",fullWidth:!0,variant:"outlined",onChange:n,error:!!t.passportCountryIssue}),t.passportCountryIssue&&r.passportCountryIssue?Object(a.jsx)("div",{className:u.error,children:t.passportCountryIssue}):null]})]}):null,Object(a.jsxs)(j.a,{m:4,children:[Object(a.jsx)(q.a,{control:Object(a.jsx)(I.a,{onChange:n,name:"terms",color:"primary",error:t.terms}),label:"Terms & conditions"}),t.terms&&r.terms?Object(a.jsx)("div",{className:u.error,children:t.terms}):null]}),Object(a.jsx)(w.a,{disabled:l,type:"submit",variant:"contained",color:"primary",children:"Continue"})]})}})]}):null})},F=Object(m.a)((function(){return Object(p.a)({error:{color:"red",fontStyle:"italic"}})})),P=function(e){var t=e.handleStep,r=e.currentStep,n=F(),i=f.b().shape({flightNumber:f.c().min(2,"Too Short!").required("Enter a valid flight number. No special character allow").test({test:function(e){return!/[!@#$%^&*(),.?":{}|<>]/.test(e)}}),lastName:f.c().min(2,"Too Short!").max(50,"Too Long!").required("Lastname is required")});return Object(a.jsx)("div",{children:1===r?Object(a.jsxs)(j.a,{my:8,mx:4,children:[Object(a.jsxs)(y.a,{variant:"h4",component:"h1",align:"left",color:"textSecondary",children:[" ","Welcome to your web check-in"]}),Object(a.jsx)(O.b,{initialValues:{flightNumber:"",lastName:""},validationSchema:i,onSubmit:function(e){t(e)},children:function(e){var t=e.errors,r=e.touched,i=e.handleChange,l=e.isSubmitting;return Object(a.jsxs)(O.a,{children:[Object(a.jsxs)(j.a,{my:6,children:[Object(a.jsx)(N.a,{id:"flightNumber",label:"Flight Number",onChange:i,error:!!t.flightNumber,fullWidth:!0,variant:"outlined"}),t.flightNumber&&r.flightNumber?Object(a.jsx)("div",{className:n.error,children:t.flightNumber}):null]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(N.a,{id:"lastName",label:"Last Name",onChange:i,error:!!t.lastName,fullWidth:!0,variant:"outlined"}),t.lastName&&r.lastName?Object(a.jsx)("div",{className:n.error,children:t.lastName}):null]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(w.a,{type:"submit",variant:"contained",color:"primary",disabled:l,children:"Submit"})]})}})]}):null})},k=function(e){var t=e.formValues,r=e.currentStep,n=e.submitForm;return Object(a.jsx)(j.a,{mx:4,my:8,children:3===r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(y.a,{variant:"h4",component:"h1",align:"left",color:"textSecondary",children:["Please review your information"," "]}),t&&Object.entries(t).map((function(e){return Object(a.jsx)(a.Fragment,{children:""!==e[1]&&!0!==e[1]?Object(a.jsx)(j.a,{m:4,children:Object(a.jsx)(N.a,{disabled:!0,defaultValue:e[1],label:e[0],fullWidth:!0,variant:"outlined"})},"id_".concat(e[0])):null})})),Object(a.jsx)(w.a,{variant:"contained",color:"primary",type:"submit",onClick:n,children:"Confirm"})]}):null})},L=function(e){var t=e.currentStep;return Object(a.jsx)(j.a,{m:8,children:4===t?Object(a.jsx)("div",{children:Object(a.jsx)(y.a,{variant:"h3",component:"h3",align:"left",color:"textSecondary",children:"Your check-in is confirmed"})}):null})},E=r(121),T=r.n(E).a.create({baseURL:" http://localhost:3000/",timeout:1e3}),A=Object(m.a)((function(){return Object(p.a)({main:{width:"30rem",textAlign:"center"},mainMobile:{width:"100%",textAlign:"center"}})})),B=function(){var e=Object(x.a)(),t=Object(h.a)(e.breakpoints.up("md")),r=A(),i=Object(n.useState)({}),l=Object(b.a)(i,2),s=l[0],c=l[1],o=Object(n.useState)(1),u=Object(b.a)(o,2),m=u[0],p=u[1],O=Object(n.useState)([]),f=Object(b.a)(O,2),y=f[0],N=f[1];Object(n.useEffect)((function(){T.get("/nationality").then((function(e){N(e.data)})).catch((function(e){throw e}))}),[2===m]);return Object(a.jsxs)(j.a,{mx:"auto",className:t?r.main:r.mainMobile,children:[Object(a.jsx)(P,{currentStep:m,handleStep:function(e){T.get("checkin").then((function(t){t.data.map((function(t){t.flightNumber===e.flightNumber&&t.lastName===e.lastName?(alert("This checkin was been done already. Please enter new information"),p(1)):(c(e),p(2))}))})).catch((function(e){throw e}))}}),Object(a.jsx)(D,{currentStep:m,formValues:s,handleStep:c,setStep:p,nationalityList:y}),Object(a.jsx)(k,{currentStep:m,formValues:s,submitForm:function(){var e=Object(d.a)({id:"".concat(s.lastName,"_").concat(s.flightNumber)},s);T.post("/checkin",e).then((function(){p(4)})).catch((function(e){throw e}))}}),Object(a.jsx)(L,{currentStep:m})]})},V=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(B,{})})},G=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,210)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;r(e),a(e),n(e),i(e),l(e)}))},M=Object(o.a)();s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsxs)(u.a,{theme:M,children:[Object(a.jsx)(c.a,{}),Object(a.jsx)(V,{})]})}),document.getElementById("root")),G()}},[[159,1,2]]]);
//# sourceMappingURL=main.eabbac88.chunk.js.map