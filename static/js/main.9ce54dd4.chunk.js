(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var a=e(0),c=e.n(a),o=e(2),r=e.n(o),u=e(3),i=e(4),s=e(7),l=e(6),d=e(5),p=e.n(d),m=(e(13),function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(){var t;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.addOne(),t.state.count%5===0&&t.add100()},t}return Object(i.a)(e,[{key:"render",value:function(){var t=this.state.count;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Count: ".concat(t)),c.a.createElement("div",{className:"App__buttons"},c.a.createElement("button",{type:"button",className:"button is-primary",onClick:this.addOne},"Add 1"),c.a.createElement("button",{type:"button",className:"button is-primary is-link",onClick:this.add100},"Add 100"),c.a.createElement("button",{type:"button",className:p()("button",{"is-primary":t%5!==0},{"is-link":t%5===0}),onClick:this.increase},"1 or 100")))}}]),e}(c.a.Component));r.a.render(c.a.createElement(m,null),document.getElementById("root"))},8:function(t,n,e){t.exports=e(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9ce54dd4.chunk.js.map