(this["webpackJsonpreact-ts-todo-app"]=this["webpackJsonpreact-ts-todo-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(5),i=n.n(r),u=(n(12),n(6)),d=n(7),s=(n(13),n(0)),j=function(t){var e=t.items,n=t.onDeleteTodo;return Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{children:t.text}),Object(s.jsx)("button",{onClick:n.bind(null,t.id),children:"DELETE"})]},t.id)}))})},l=(n(15),function(t){var e=t.onAddTodo,n=Object(c.useRef)(null);return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=n.current.value;e(c)},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"todo-text",children:"Todo Text"}),Object(s.jsx)("input",{type:"text",id:"todo-text",ref:n})]}),Object(s.jsx)("button",{type:"submit",children:"ADD TODO"})]})}),a=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],o=e[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{onAddTodo:function(t){o((function(e){return[].concat(Object(u.a)(e),[{id:Math.random().toString(),text:t}])}))}}),Object(s.jsx)(j,{items:n,onDeleteTodo:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(a,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ddf062ad.chunk.js.map