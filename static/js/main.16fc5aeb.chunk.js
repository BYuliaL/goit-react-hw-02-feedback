(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports={buttonsContainer:"feedbackOptions_buttonsContainer__3Gm8R"}},11:function(e,t,a){e.exports={titleStatistics:"statisticTitle_titleStatistics__ua9ht"}},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),r=a(5),s=a.n(r),c=a(6),o=a(7),l=a(8),u=a(13),d=a(12),b=a(1),j=a.n(b),h=a(9),v=a.n(h),p=a(0),g=function(e){var t=e.title,a=e.children;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:v.a.mainTitle,children:t}),a]})};g.prototype={title:j.a.string.isRequired};var O=g,f=a(10),m=a.n(f),x=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(p.jsx)("div",{className:m.a.buttonsContainer,children:t.map((function(e){return Object(p.jsx)("button",{type:"button",onClick:a,name:e,children:e},e)}))})},k=function(e){var t=e.good,a=e.neutral,n=e.bad,i=e.total,r=e.positivePercentage;return Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Good: ",t]}),Object(p.jsxs)("li",{children:["Neutral: ",a]}),Object(p.jsxs)("li",{children:["Bad: ",n]}),Object(p.jsxs)("li",{children:["Total: ",i]}),Object(p.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})})};k.prototype={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired};var _=k,P=a(11),y=a.n(P),F=function(e){var t=e.title,a=e.children;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:y.a.titleStatistics,children:t}),a]})};F.prototype={title:j.a.string.isRequired};var T=F,R=a(4),V=a.n(R),q=function(e){var t=e.message;return Object(p.jsx)("div",{className:V.a.messageContainer,children:Object(p.jsx)("p",{className:V.a.message,children:t})})};q.prototype={message:j.a.string.isRequired};var C=q,N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={good:e.props.goodValue,neutral:e.props.neutralValue,bad:e.props.badValue},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(c.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good/e.countTotalFeedback()*100;return Math.floor(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,i=Object.keys(this.state);return Object(p.jsx)("div",{children:Object(p.jsxs)(O,{title:"Please leave feedback",children:[Object(p.jsx)(x,{options:i,onLeaveFeedback:this.onLeaveFeedback}),Object(p.jsx)(T,{title:"Statistics",children:0===this.countTotalFeedback()?Object(p.jsx)(C,{message:"No feedback given"}):Object(p.jsx)(_,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})})}}]),a}(i.a.Component);N.defaultProps={goodValue:0,neutralValue:0,badValue:0};var S=N;a(21),a(22);s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(S,{goodValue:0,neutralValue:0,badValue:0})}),document.getElementById("root"))},4:function(e,t,a){e.exports={messageContainer:"notification_messageContainer__3DAP8",message:"notification_message__1KJOn"}},9:function(e,t,a){e.exports={mainTitle:"section_mainTitle__3T-c5"}}},[[23,1,2]]]);
//# sourceMappingURL=main.16fc5aeb.chunk.js.map