(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports={titleStatistics:"statisticTitle_titleStatistics__ua9ht"}},11:function(e,t,a){e.exports={message:"notification_message__1KJOn"}},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),r=a(4),s=a.n(r),c=a(5),o=a(6),l=a(7),u=a(13),d=a(12),b=a(1),j=a.n(b),h=a(8),p=a.n(h),v=a(0),O=function(e){var t=e.title,a=e.children;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:p.a.mainTitle,children:t}),a]})};O.prototype={title:j.a.string.isRequired};var f=O,x=a(9),g=a.n(x),m=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(v.jsx)("div",{className:g.a.buttonsContainer,children:t.map((function(e){return Object(v.jsx)("button",{type:"button",onClick:a,name:e,children:e},e)}))})},k=function(e){var t=e.good,a=e.neutral,n=e.bad,i=e.total,r=e.positivePercentage;return Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["Good: ",t]}),Object(v.jsxs)("li",{children:["Neutral: ",a]}),Object(v.jsxs)("li",{children:["Bad: ",n]}),Object(v.jsxs)("li",{children:["Total: ",i]}),Object(v.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})})};k.prototype={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired};var _=k,y=a(10),F=a.n(y),P=function(e){var t=e.title,a=e.children;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:F.a.titleStatistics,children:t}),a]})};P.prototype={title:j.a.string.isRequired};var T=P,N=a(11),R=a.n(N),V=function(e){var t=e.message;return Object(v.jsx)("div",{children:Object(v.jsx)("p",{className:R.a.message,children:t})})};V.prototype={message:j.a.string.isRequired};var q=V,G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={Good:e.props.goodValue,Neutral:e.props.neutralValue,Bad:e.props.badValue},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(c.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return e.state.Good+e.state.Neutral+e.state.Bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.Good/e.countTotalFeedback()*100;return Math.floor(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=Object.keys(this.state);return Object(v.jsx)("div",{children:Object(v.jsxs)(f,{title:"Please leave feedback",children:[Object(v.jsx)(m,{options:e,onLeaveFeedback:this.onLeaveFeedback}),Object(v.jsx)(T,{title:"Statistics",children:0===this.countTotalFeedback()?Object(v.jsx)(q,{message:"No feedback given"}):Object(v.jsx)(_,{good:this.state.Good,neutral:this.state.Neutral,bad:this.state.Bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})})}}]),a}(i.a.Component);G.defaultProps={goodValue:0,neutralValue:0,badValue:0};var S=G;a(21),a(22);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(S,{goodValue:0,neutralValue:0,badValue:0})}),document.getElementById("root"))},8:function(e,t,a){e.exports={mainTitle:"section_mainTitle__3T-c5"}},9:function(e,t,a){e.exports={buttonsContainer:"feedbackOptions_buttonsContainer__3Gm8R"}}},[[23,1,2]]]);
//# sourceMappingURL=main.b045c09e.chunk.js.map