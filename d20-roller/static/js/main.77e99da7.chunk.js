(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var i=s(1),l=s(8),o=s.n(l),n=(s(13),s(14),s(2)),c=s(3),r=s(4),a=s(6),u=s(5),h=(s(15),s(0)),j=function(t){Object(a.a)(s,t);var e=Object(u.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var t="";return t=0===this.props.roll||this.props.isRolling?"assets/blank-d20.jpeg":"assets/".concat(this.props.roll,".png"),Object(h.jsx)("div",{className:"Dice",children:Object(h.jsx)("img",{className:this.props.isRolling?"Dice-rolling":"",src:t,alt:0===this.props.roll?"No roll yet":this.props.roll})})}}]),s}(i.Component),p=j,b=function(t){Object(a.a)(s,t);var e=Object(u.a)(s);function s(t){var i;return Object(n.a)(this,s),(i=e.call(this,t)).state={roll:0,isRolling:!1,outcome:"It's time to roll!"},i.roll=i.roll.bind(Object(r.a)(i)),i}return Object(c.a)(s,[{key:"roll",value:function(t){var e=this,s=Math.ceil(20*Math.random());this.setState({roll:s,isRolling:!0}),20===s?this.setState({outcome:"Critical success! You won DnD!"}):1===s?this.setState({outcome:"Critical failure, you died!"}):s>=15?this.setState({outcome:"Strong Success!"}):s>=10?this.setState({outcome:"Success!"}):this.setState({outcome:"Failure!"}),setTimeout((function(){e.setState({isRolling:!1})}),500)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"TAKE A CHANCE, ROLL THE DICE!"}),Object(h.jsx)(p,{roll:this.state.roll,isRolling:this.state.isRolling}),Object(h.jsx)("h3",{children:this.state.isRolling?"The DM waits patiently...":this.state.outcome}),Object(h.jsx)("button",{onClick:this.roll,disabled:this.state.isRolling,children:this.state.isRolling?"ROLLING...":"ROLL!"})]})}}]),s}(i.Component);var d=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b,{})})};o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.77e99da7.chunk.js.map