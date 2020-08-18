(this["webpackJsonpalgo-visualizer"]=this["webpackJsonpalgo-visualizer"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),u=(n(13),n(4)),c=n(5),l=n(7),s=n(6),m=(n(14),n(1));var h=function(e){var t=[];if(e.length<=1)return e;var n=e.slice();return function e(t,n,r,a,o){if(n===r)return;var i=Math.floor((n+r)/2);e(a,n,i,t,o),e(a,i+1,r,t,o),function(e,t,n,r,a,o){var i=t,u=t,c=n+1;for(;u<=n&&c<=r;)o.push([u,c]),o.push([u,c]),a[u]<=a[c]?(o.push([i,a[u]]),e[i++]=a[u++]):(o.push([i,a[c]]),e[i++]=a[c++]);for(;u<=n;)o.push([u,u]),o.push([u,u]),o.push([i,a[u]]),e[i++]=a[u++];for(;c<=r;)o.push([c,c]),o.push([c,c]),o.push([i,a[c]]),e[i++]=a[c++]}(t,n,i,r,a,o)}(e,0,e.length-1,n,t),t},f=function(e){for(var t=h(e),n=document.getElementsByClassName("bar"),r=function(e){if(e%3!==2){var r=Object(m.a)(t[e],2),a=r[0],o=r[1],i=n[a].style,u=n[o].style;e%3===0?setTimeout((function(){i.backgroundColor="pink",u.backgroundColor="pink"}),5*e):setTimeout((function(){i.backgroundColor="teal",u.backgroundColor="teal"}),5*e)}else setTimeout((function(){var r=Object(m.a)(t[e],2),a=r[0],o=r[1];n[a].style.height="".concat(o,"px")}),5*e)},a=0;a<t.length;a++)r(a)},g=function(e){for(var t=document.getElementsByClassName("bar"),n=0;n<e.length;n++)for(var r=function(r){setTimeout((function(){if(e[r]<e[r+1]){t[r].style.backgroundColor="pink",t[r+1].style.backgroundColor="pink";var n=e[r];e[r]=e[r+1],e[r+1]=n;var a=t[r].style,o=t[r+1].style,i=a.height;a.height=o.height,o.height=i}else t[r].style.backgroundColor="teal"}),70*n)},a=0;a<e.length-n;a++)r(a);return e},v=[];function y(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}var b=function e(t,n,r){var a=function(e,t,n,r){for(var a=n,o=t,i=t;i<n;i++)e[i]<=e[a]&&(y(e,o,i),r.push([o,i]),o++);return y(e,o,n),r.push([o,n]),o}(t,n=n||0,r=r||t.length-1,v);return n<a-1&&e(t,n,a-1),r>a&&e(t,a,r),v},d=function(e){var t=b(e);console.log(t);for(var n=document.getElementsByClassName("bar"),r=function(e){var r=Object(m.a)(t[e],2),a=r[0],o=r[1],i=n[a].style,u=n[o].style;setTimeout((function(){var e=i.height;i.height=u.height,u.height=e}),5*e)},a=0;a<t.length;a++)r(a)},p=function(e){for(var t=[],n=1;n<e.length;n++){for(var r=e[n],a=n-1;a>=0&&r<e[a];)e[a+1]=e[a],t.push([a+1,a]),console.log("Values1: "+(a+1)+", "+n),a--;e[a+1]=r,console.log("Values2: "+(a+1)+", "+n)}return t},k=function(e){for(var t=p(e),n=document.getElementsByClassName("bar"),r=function(e){var r=Object(m.a)(t[e],2),a=r[0],o=r[1],i=n[a].style,u=n[o].style;setTimeout((function(){var e=i.height;i.height=u.height,u.height=e}),3*e)},a=0;a<t.length;a++)r(a)},E=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={randomArray:[],animationSpeed:5},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.resetArray(300)}},{key:"resetArray",value:function(e){for(var t=[],n=0;n<e;n++)t.push(this.randomInteger(10,500));this.setState({randomArray:t})}},{key:"randomInteger",value:function(e,t){return Math.floor(Math.random()*(t-e))+e}},{key:"render",value:function(){var e=this;return console.log(this.state.randomArray),a.a.createElement("div",{className:"main-container"},a.a.createElement("header",{className:"top"},a.a.createElement("h1",{style:{position:"center"}},"Algorithm visualizer")),a.a.createElement("div",{className:"array-container"},this.state.randomArray.map((function(e,t){return a.a.createElement("div",{className:"bar",style:{height:"".concat(e,"px")},key:t})}))),a.a.createElement("div",{className:"bottom"},a.a.createElement("div",{className:"bottom-container"},a.a.createElement("h3",null,"Generate array size"),a.a.createElement("button",{ref:"button",onClick:function(){return e.resetArray(50)}},"50"),a.a.createElement("button",{ref:"button",onClick:function(){return e.resetArray(150)}},"150"),a.a.createElement("button",{onClick:function(){return e.resetArray(300)}},"300")),a.a.createElement("div",{className:"bottom-container"},a.a.createElement("h3",null,"Algorithms"),a.a.createElement("button",{ref:"button",onClick:function(){return f(e.state.randomArray,e.state.animationSpeed)}},"Merge Sort"),a.a.createElement("button",{ref:"button",onClick:function(){return g(e.state.randomArray,e.state.animationSpeed)}},"Bubble Sort"),a.a.createElement("button",{ref:"button",onClick:function(){return d(e.state.randomArray,e.state.animationSpeed)}},"Quick Sort"),a.a.createElement("button",{ref:"button",onClick:function(){return k(e.state.randomArray,e.state.animationSpeed)}},"Insertion Sort"))))}}]),n}(r.Component);var C=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,null))};i.a.render(a.a.createElement(C,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e6c1e54c.chunk.js.map