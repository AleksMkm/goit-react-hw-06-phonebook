(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={contact:"Contact_contact__1dVZK",icon:"Contact_icon__1ZZvd",name:"Contact_name__3NYKL",phone:"Contact_phone__Wo9bu",btn:"Contact_btn__2aFN6"}},19:function(e,t,n){e.exports={form:"Filter_form__3dD5N",title:"Filter_title__2VhkD",searchField:"Filter_searchField__JvstB"}},27:function(e,t,n){e.exports={section:"Section_section__2CD9M",title:"Section_title__1EphG"}},31:function(e,t,n){e.exports={container:"Container_container__1wnX6"}},32:function(e,t,n){e.exports={iconBtn:"IconButton_iconBtn__2fl_o"}},36:function(e,t,n){e.exports={contactList:"ContactList_contactList__2HhRW"}},52:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c,a=n(2),r=n(0),o=n.n(r),i=n(13),s=n.n(i),l=n(6),b=n(29),d=n(3),j=n(11),m=n(12),u=n(30),h=n.n(u),O=n(7),x=n(5),p=n(69),f={addContact:Object(j.b)("contact/add",(function(e,t){return{payload:{id:Object(p.a)(),name:e,number:t}}})),deleteContact:Object(j.b)("contact/delete"),changeFilter:Object(j.b)("filter/change")},_=Object(j.c)([],(c={},Object(O.a)(c,f.addContact,(function(e,t){var n=t.payload;return[].concat(Object(d.a)(e),[n])})),Object(O.a)(c,f.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),N=Object(j.c)("",Object(O.a)({},f.changeFilter,(function(e,t){return t.payload}))),C=Object(x.c)({contacts:_,filter:N}),v={key:"contacts",storage:h.a,blacklist:["filter"]},g=Object(d.a)(Object(j.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),y=Object(m.g)(v,C),F=Object(j.a)({reducer:y,middleware:g,devTools:!1}),k=Object(m.h)(F),L=(n(52),n(31)),w=n.n(L);function q(e){var t=e.children;return Object(a.jsx)("div",{className:w.a.container,children:t})}var B=n(33),Z=n.n(B),M=n(34),S=n.n(M),A=n(35),J=n.n(A),P=n(15),z=n.n(P),D=n(26),H=n(38),I=n(32),E=n.n(I);function G(e){var t=e.children,n=e.onClick,c=Object(H.a)(e,["children","onClick"]);return Object(a.jsx)("button",Object(D.a)(Object(D.a)({type:"button",className:E.a.iconBtn,onClick:n},c),{},{children:t}))}G.defaultProps={onClick:function(){return null},children:null};var K=G;var R=function(e){var t=e.id,n=e.name,c=e.phone,r=e.deleteHandler;return Object(a.jsxs)("li",{className:z.a.contact,children:[Object(a.jsxs)("span",{className:z.a.name,children:[Object(a.jsx)(Z.a,{className:z.a.icon}),n]}),Object(a.jsxs)("span",{className:z.a.phone,children:[Object(a.jsx)(S.a,{className:z.a.icon}),c]}),Object(a.jsx)(K,{onClick:r,"aria-label":"delete contact",children:Object(a.jsx)(J.a,{})})]},t)},T=n(36),V=n.n(T),W=function(e){return e.contacts},X=function(e){return e.filter},Y=function(e){var t=X(e),n=W(e),c=t.toLowerCase().trim();return n.filter((function(e){return e.name.toLowerCase().includes(c)}))};var $=function(){var e=Object(l.c)(W),t=Object(l.c)(X),n=Object(l.c)(Y),c=Object(l.b)(),r=t.trim()?n:e;return Object(a.jsx)("ul",{className:V.a.contactList,children:r.map((function(e){return R({id:e.id,name:e.name,phone:e.number,deleteHandler:function(){return c(f.deleteContact(e.id))}})}))})},Q=n(37),U=n(8),ee=n.n(U);var te=function(){var e=Object(Q.a)(),t=e.register,n=e.handleSubmit,c=e.errors,o=e.reset,i=Object(r.useRef)(),s=Object(l.c)(W),b=Object(l.b)();return Object(a.jsxs)("form",{className:ee.a.form,onSubmit:n((function(e){s.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in Phonebook")):(b(f.addContact(e.name.trim(),e.number.trim())),i.current.blur(),o({}))})),children:[Object(a.jsxs)("label",{className:ee.a.label,children:[Object(a.jsx)("input",{ref:t({required:!0,minLength:3,maxLength:18,pattern:/^[A-Za-z]+([ A-Za-z]+)*$/}),className:ee.a.addField,type:"text",name:"name",placeholder:"name"}),c.name&&"required"===c.name.type&&Object(a.jsx)("p",{className:ee.a.error,children:"Name is required"}),c.name&&"minLength"===c.name.type&&Object(a.jsx)("p",{className:ee.a.error,children:"Name is too short. Minimum 3 characters required."}),c.name&&"maxLength"===c.name.type&&Object(a.jsx)("p",{className:ee.a.error,children:"Name is too long. Maximum 18 characters allowed."}),c.name&&"pattern"===c.name.type&&Object(a.jsx)("p",{className:ee.a.error,children:"Name can contain only english letters."})]}),Object(a.jsxs)("label",{className:ee.a.label,children:[Object(a.jsx)("input",{ref:t({required:!0,pattern:/^\d+$/}),className:ee.a.addField,type:"text",name:"number",placeholder:"xxxx-xx-xx"}),c.number&&"required"===c.number.type&&Object(a.jsx)("p",{className:ee.a.error,children:"Number is required"}),c.number&&"pattern"===c.number.type&&Object(a.jsx)("p",{className:ee.a.error,children:"Phone number should consist only from numbers."})]}),Object(a.jsx)("button",{ref:i,className:ee.a.btn,type:"submit",children:"Add contact"})]})},ne=n(27),ce=n.n(ne);var ae=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:ce.a.section,children:[Object(a.jsx)("p",{className:ce.a.title,children:t}),n]})},re=n(19),oe=n.n(re);var ie=function(){var e=Object(l.c)(X),t=Object(l.b)();return Object(a.jsx)("form",{className:oe.a.form,children:Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:oe.a.title,children:"Find contacts by name"}),Object(a.jsx)("input",{className:oe.a.searchField,type:"text",value:e,onChange:function(e){return t(f.changeFilter(e.target.value))}})]})})};var se=function(){var e=Object(l.c)(W);return Object(a.jsxs)(q,{children:[Object(a.jsx)(ae,{title:"Phonebook",children:Object(a.jsx)(te,{})}),Object(a.jsx)(ae,{title:"Contacts",children:e.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ie,{}),Object(a.jsx)($,{})]}):Object(a.jsx)("div",{children:"Oops. no contacts here! Let's add some data!"})})]})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l.a,{store:F,children:Object(a.jsx)(b.a,{loading:null,persistor:k,children:Object(a.jsx)(se,{})})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"ContactForm_form__1GTZJ",addField:"ContactForm_addField__mumpN",btn:"ContactForm_btn__OIYM5",label:"ContactForm_label__2lgtc",error:"ContactForm_error__2vX4t"}}},[[56,1,2]]]);
//# sourceMappingURL=main.3c57ac3c.chunk.js.map