(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{45:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},46:function(e,t,c){e.exports={card:"Card_card__1m44e"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),a=c(35),r=c(37),s=c(45),i=c.n(s),u=c(46),l=c.n(u),d=c(1),j=function(e){var t=e.children;return Object(d.jsx)("div",{className:l.a.card,children:t})},b=c(15),f=function(e){var t=e.onAddQuote,c=e.isLoading,a=Object(n.useRef)(),s=Object(n.useRef)(),u=Object(n.useState)(!1),l=Object(r.a)(u,2),f=l[0],h=l[1];return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(o.a,{when:f,message:function(e){return"Are you sure you want to leave? All entered data will be lost"}}),Object(d.jsx)(j,{children:Object(d.jsxs)("form",{onFocus:function(){h(!0)},className:i.a.form,onSubmit:function(e){e.preventDefault();var c=a.current.value,n=s.current.value;t({author:c,text:n})},children:[c&&Object(d.jsx)("div",{className:i.a.loading,children:Object(d.jsx)(b.a,{})}),Object(d.jsxs)("div",{className:i.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:a})]}),Object(d.jsxs)("div",{className:i.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:s})]}),Object(d.jsx)("div",{className:i.a.actions,children:Object(d.jsx)("button",{onClick:function(){h(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(36);t.default=function(){var e=Object(a.a)(h.b),t=e.sendRequest,c=e.status,r=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&r.push("/allQuotes")}),[c,r]);return Object(d.jsx)(f,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.903f7fa6.chunk.js.map