(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),l=n.n(c),r=(n(15),n(1)),i=n(2),s=n(4),h=n(3),u=n(5),m=(n(7),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.init(e.data)}},{key:"init",value:function(e){for(var t=e.tokens,n=e.entities,a=document.getElementById("myCanvas"),o=a.getContext("2d"),c=10,l=0;l<t.length;l++){for(var r=25*t[l].token.length+10,i=0;i<n.length;i++)if(n[i].text===t[l].token){var s=10*n[i].nerTag.length+10;r=s>r?s:r}c+=r}a.width=c,a.height=100,o.clearRect(0,0,a.width,a.height);for(var h=10,u=0;u<t.length;u++){var m=0;m=25*t[u].token.length,o.fillStyle="#132c42",o.font="16px \u5fae\u8f6f\u96c5\u9ed1",o.fillText(t[u].token,h,20),o.fillStyle="#66879c",o.font="12px \u5fae\u8f6f\u96c5\u9ed1",o.fillText(t[u].postag,h,50);for(var d=0;d<n.length;d++)if(n[d].text===t[u].token){o.fillStyle="#42d2cd",o.font="12px \u5fae\u8f6f\u96c5\u9ed1",o.fillText(n[d].nerTag,h,70);var f=9*n[d].nerTag.length+5;console.log(m),console.log(f),m=f>m?f:m,console.log(m)}console.log("thisLen: ",m),h+=m,console.log("len: ",h)}}},{key:"render",value:function(){return o.a.createElement("div",{className:"Canvas"},o.a.createElement("div",null,o.a.createElement("div",{className:"title"},"\u8bcd\u6cd5\u5206\u6790"),o.a.createElement("div",{className:"canvas-area"},o.a.createElement("canvas",{id:"myCanvas"},"\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301canvas,\u8bf7\u5347\u7ea7\u4f60\u7684\u6d4f\u89c8\u5668"))))}}]),t}(a.Component)),d=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={data:{}},n.search(),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"search",value:function(){var e=this,t=this.refs.search_input&&this.refs.search_input.value||"\u4e07\u79d1\u96c6\u56e2\u53bb\u5e743\u4ebf\u8425\u65363\u4ebf\u8425\u6536";fetch("http://huricane.smoothnlp.com:18000/?text="+t).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({data:t})}).catch(function(e){return console.error(e)})}},{key:"onkeyUp",value:function(e){13===e.keyCode&&this.search()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{className:"App-logo",alt:"logo",src:"http://www.smoothnlp.com/static/images/smoothnlp_hlog.png"})),o.a.createElement("div",{className:"search"},o.a.createElement("input",{className:"search-input",ref:"search_input",placeholder:"\u8bf7\u8f93\u5165\u4e00\u4e2a\u53e5\u5b50\u8fdb\u884c\u5206\u6790",onKeyUp:this.onkeyUp.bind(this)}),o.a.createElement("button",{className:"search-button",onClick:this.search.bind(this)},"Search")),o.a.createElement(m,{data:this.state.data}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e5ef3e02.chunk.js.map