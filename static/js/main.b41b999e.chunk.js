(this["webpackJsonpmath-games"]=this["webpackJsonpmath-games"]||[]).push([[0],{64:function(e,t,a){e.exports=a(82)},69:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(4),i=a(89),s=a(90),m=(a(69),a(94)),u=a(96),d=a(91);var f=a(17),b=a(95),g=a(14),y=a.n(g),E={18:5,19:3,20:2,21:0},h={1:"03",2:"14",3:"07",4:"04",5:"09",6:"06",7:"11",8:"08",9:"05",10:"10",11:"07",12:"12"},v=Object(f.a)(Object(f.a)({},h),{},{1:"04",2:"15"});function p(e){for(var t=g(e.currentDay),a=E[t.format("Y").substring(0,2)],l=Number(t.format("YY")),c=l%2===1?l+11:l,o=c/2,i=o%2===1?o+11:o,u=i%7===0?i:i+7-i%7,d=(u-i+a)%7,f=t.isLeapYear()?"".concat(t.format("MM-")).concat(v[t.format("M")]):"".concat(t.format("MM-")).concat(h[t.format("M")]),y=Number(t.format("D")),p=Number(f.substring(3)),O=[];Math.abs(y-p)>6;)O.push("".concat(t.format("MM-")).concat(p<10?"0".concat(p):p)),p<y?p+=7:p-=7;return O.length>0&&O.push("".concat(t.format("MM-")).concat(p<10?"0".concat(p):p)),r.a.createElement(s.a,{direction:"column",margin:"medium"},r.a.createElement(m.a,{alignSelf:"center"},r.a.createElement("span",{className:"century"},t.format("Y").substring(0,2)),r.a.createElement("span",{className:"year"},t.format("YY")),"-",r.a.createElement("span",{className:"month"},t.format("MM")),"-",r.a.createElement("span",{className:"day"},t.format("DD"))),r.a.createElement(b.a,{margin:{bottom:"xsmall"}},"Century index for the ",r.a.createElement("b",{className:"century"},t.format("Y").substring(0,2)),"00s is ",r.a.createElement("b",{className:"centuryIndex"},a),"."),r.a.createElement(b.a,null,"Calculating the year index for year ",r.a.createElement("b",{className:"year"},t.format("YY")),' using "odd + 11" method:'),r.a.createElement(s.a,{pad:{horizontal:"medium",vertical:"xsmall"},margin:{bottom:"xsmall"}},l!==c&&r.a.createElement(b.a,null,l," is odd, adding 11: ",l," + 11 = ",c,";"),r.a.createElement(b.a,null,c," is even, dividing by 2: ",c," / 2 = ",o===i?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",{className:"yearIndex"},o),"."):"".concat(o,";")),o!==i&&r.a.createElement(b.a,null,o," is odd, adding 11: ",o," + 11 = ",r.a.createElement("b",{className:"yearIndex"},i),".")),r.a.createElement(b.a,null,"The nearest higher multiple of 7 to ",r.a.createElement("b",{className:"yearIndex"},i)," is ",r.a.createElement("b",{className:"nearestMultiple"},u),"."),r.a.createElement(b.a,{margin:{bottom:"xsmall"}},"Calculating the weekday of the doomsday: (",r.a.createElement("b",{className:"nearestMultiple"},u)," - ",r.a.createElement("b",{className:"yearIndex"},i)," + ",r.a.createElement("b",{className:"centuryIndex"},a),") mod 7 = ",r.a.createElement("b",{className:"doomsdayWeekDay"},d)," ",r.a.createElement("b",null,"(",g.weekdays(d),")"),"."),r.a.createElement(b.a,null,"Doomsday for ",t.format("MMMM")," is ",r.a.createElement("b",null,f.substring(0,3)),r.a.createElement("b",{className:0===O.length?"doomsday":""},f.substring(3)),t.isLeapYear()&&t.format("M")<3&&r.a.createElement("b",null," (leap year)"),"."),O.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,"Selecting a doomsday closer to our date:"),r.a.createElement(s.a,{pad:{horizontal:"medium",vertical:"xsmall"}},r.a.createElement(b.a,null,O.map((function(e,t){return t===O.length-1?r.a.createElement(n.Fragment,{key:t},r.a.createElement("b",null,e.substring(0,3)),r.a.createElement("b",{className:"doomsday"},e.substring(3)),"."):"".concat(e," -> ")}))))),p===y?r.a.createElement(b.a,null,"Our date matches the doomsday, and it is ",r.a.createElement("b",null,t.format("dddd")),"."):r.a.createElement(b.a,null,"Calculating the day of the week: (",r.a.createElement("b",{className:"doomsdayWeekDay"},d)," ",y>p?r.a.createElement(r.a.Fragment,null," + (",r.a.createElement("b",{className:"day"},y)," - ",r.a.createElement("b",{className:"doomsday"},p),")"):r.a.createElement(r.a.Fragment,null," - (",r.a.createElement("b",{className:"doomsday"},p)," - ",r.a.createElement("b",{className:"day"},y),")"),") mod 7 = ",r.a.createElement("b",null,t.format("d")," (",t.format("dddd"),")"),"."))}function O(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],c=a[1],i=r.a.useState(!1),m=Object(o.a)(i,2),f=m[0],b=m[1];return function(e,t){var a=Object(n.useRef)(!1);Object(n.useEffect)((function(){a.current?e():a.current=!0}),t)}((function(){c(!1)}),[e.isVisible]),r.a.createElement(s.a,{key:e.isVisible,direction:"row",justify:"between",margin:{bottom:"small",right:"large",left:"large"},animation:e.isVisible?{type:"fadeIn"}:{type:"fadeOut",duration:200}},r.a.createElement(u.a,{label:"Explanation",onClick:e.isVisible?function(){return b(!0)}:function(){},style:{visibility:l?"hidden":"visible"}}),f&&r.a.createElement(d.a,{onEsc:function(){return b(!1)},onClickOutside:function(){return b(!1)},margin:"medium",className:"modal",responsive:!1},r.a.createElement(p,{currentDay:e.currentDay})),r.a.createElement(u.a,{label:"Continue",onClick:e.isVisible?e.onContinueClick:function(){},style:{visibility:l?"hidden":"visible"}}))}function k(e){var t=void 0!==e.selectedDayOfWeek,a=t&&e.selectedDayOfWeek!==e.expectedDayOfWeek&&e.number===e.selectedDayOfWeek,n=t&&e.number===e.expectedDayOfWeek;return void 0!==e.number?r.a.createElement(s.a,{flex:{grow:1},basis:"xxsmall",align:"center",justify:"center",style:{boxShadow:"none"},animation:a||n?{type:"zoomIn",duration:400}:{},background:a?"status-error":n?"status-ok":"",onClick:function(){t||e.setSelectedDayOfWeek(e.number)}},r.a.createElement(b.a,{size:"large"},y.a.weekdays(e.number))):r.a.createElement(s.a,{flex:{grow:1},basis:"xxsmall"})}function w(e){var t=e.selectedDayOfWeek,a=e.setSelectedDayOfWeek,n=e.expectedDayOfWeek;return r.a.createElement(s.a,{flex:{grow:2},direction:"column",justify:"center",alignSelf:"center",style:{width:"100%"}},r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},r.a.createElement(k,{number:1,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(k,{number:2,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(k,{number:3,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n})),r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},r.a.createElement(k,{number:4,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(k,{number:5,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(k,{number:6,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n})),r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0},r.a.createElement(k,null),r.a.createElement(k,{number:0,selectedDayOfWeek:t,setSelectedDayOfWeek:a,expectedDayOfWeek:n}),r.a.createElement(k,null)))}function j(e){return("0"+Math.floor(e/6e4)%60).slice(-2)+":"+("0"+Math.floor(e/1e3)%60).slice(-2)+"."+("0"+Math.floor(e/10)%100).slice(-2)}var x=function(e){var t=e.running,a=e.time,l=e.setTime;return Object(n.useEffect)((function(){var e;return t?e=setInterval((function(){l((function(e){return e+10}))}),10):t||clearInterval(e),function(){return clearInterval(e)}}),[t,l]),r.a.createElement(s.a,null,r.a.createElement(m.a,{level:3},j(a)))};var D=function(e){var t=e.score,a=e.success,n=e.index;return r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",height:"25px",wrap:!0},r.a.createElement(b.a,{color:"darkslategrey",style:{marginRight:"10px"}},n+1),r.a.createElement(b.a,{color:a?"white":"darkred"},j(t)))},S=function(e){return parseInt(localStorage.getItem("highScore"+e))||0},W=function(e,t){localStorage.setItem("highScore"+e,t)};function M(e){var t=Object(n.useState)(S(e)),a=Object(o.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){W(e,r)}),[r]),[r,l]}var N=function(e){return-1===e?"DNF":0===e?"-":j(e)};var C=function(e){var t=e.scores,a=e.averageSize,l=(e.type,Object(n.useState)(0)),c=Object(o.a)(l,2),i=c[0],m=c[1],u=M(a.toString()),d=Object(o.a)(u,2),f=d[0],g=d[1];return Object(n.useEffect)((function(){var e=function(e,t){var a=e.slice(0).reverse().slice(0,t);if(a.length<t)return 0;for(var n=0,r=0;r<a.length;r++){if(!1===a[r][1])return-1;n+=a[r][0]}return n/a.length}(t,a);m(e),(0===f||e>0&&(f<=0||f>e))&&g(Math.max(e,0))}),[t.length]),r.a.createElement(s.a,null,r.a.createElement(b.a,null,"Average of ",a,": ",N(i)),r.a.createElement(b.a,null,"Best Average of ",a,": ",N(f)))};var I=function(e){var t=e.scores,a=e.averagesToShow,l=e.type,c=Object(n.useState)(0),i=Object(o.a)(c,2),u=i[0],d=i[1],f=M(l+"streak"),g=Object(o.a)(f,2),y=g[0],E=g[1];return Object(n.useEffect)((function(){if(t.length>0)if(!1===t[t.length-1][1])d(0);else{var e=u+1;y<e&&E(e),d(e)}}),[t.length,t]),r.a.createElement(s.a,{flex:"grow",direction:"row",align:"stretch",wrap:!0,style:{padding:"15px"}},r.a.createElement(s.a,{align:"start",style:{padding:"15px"},justify:"center"},r.a.createElement(m.a,{level:3},"Scores:"),r.a.createElement(s.a,{width:"300px",height:"150px",style:{border:"2px solid white",padding:"10px",overflowY:"scroll"}},t.length>0?t.map((function(e,t){var a=Object(o.a)(e,2),n=a[0],l=a[1];return r.a.createElement(D,{key:t,index:t,score:n,success:l})})).reverse():r.a.createElement(b.a,null,"No scores yet..."))),r.a.createElement(s.a,{align:"start",style:{padding:"15px"},justify:"center"},a.map((function(e,a){return r.a.createElement(C,{key:a,scores:t,averageSize:e,type:l})})),r.a.createElement(b.a,null,"Current Streak: ",u),r.a.createElement(b.a,null,"Best Streak: ",y)))},Y=a(14),A=a(78);var T=function(e){var t=function(){return A(Y(e.endDate),Y(e.startDate))},a=function(e){return Number(e.format("d"))},l=t(),c=Object(n.useState)(l.format("Y-MM-DD")),i=Object(o.a)(c,2),u=i[0],d=i[1],f=Object(n.useState)([]),b=Object(o.a)(f,2),g=b[0],y=b[1],E=Object(n.useState)(),h=Object(o.a)(E,2),v=h[0],p=h[1],k=Object(n.useState)(!0),j=Object(o.a)(k,2),D=j[0],S=j[1],W=Object(n.useState)(0),M=Object(o.a)(W,2),N=M[0],C=M[1],T=Object(n.useState)(a(l)),z=Object(o.a)(T,2),F=z[0],L=z[1];return Object(n.useEffect)((function(){void 0!==v&&(S(!1),v===F?g.push([N,!0]):g.push([N,!1]),y(g))}),[v]),r.a.createElement(s.a,{direction:"column",flex:"grow",style:{width:"100%"},alignSelf:"center"},r.a.createElement(s.a,{key:u,flex:{grow:1},align:"center",justify:"center",animation:{type:"fadeIn"}},r.a.createElement(s.a,{flex:{grow:4}},r.a.createElement(m.a,{size:"large",level:"1"},u))),r.a.createElement(w,{selectedDayOfWeek:v,setSelectedDayOfWeek:p,expectedDayOfWeek:F}),r.a.createElement(s.a,{align:"center"},r.a.createElement(x,{running:D,time:N,setTime:C}),r.a.createElement(I,{scores:g,type:"doomsday",averagesToShow:[5,12]})),r.a.createElement(O,{onContinueClick:function(){var e=t();p(void 0),d(e.format("Y-MM-DD")),L(a(e)),S(!0),C(0)},isVisible:void 0!==v,currentDay:u}))},z=a(92);var F=function(e){var t=e.numberLength,a=Object(n.useState)([]),l=Object(o.a)(a,2),c=l[0],i=l[1],d=Object(n.useState)(!0),f=Object(o.a)(d,2),b=f[0],g=f[1],y=Object(n.useState)(T()),E=Object(o.a)(y,2),h=E[0],v=E[1],p=r.a.useState(""),O=Object(o.a)(p,2),k=O[0],w=O[1],j=r.a.useState(!1),D=Object(o.a)(j,2),S=D[0],W=D[1],M=Object(n.useState)(0),N=Object(o.a)(M,2),C=N[0],Y=N[1];function A(e){for(var t="",a=0;a<e.length;a+=5){t+=e.slice(a,a+5)+"-"}return t=t.replace(/-$/,"")}function T(){for(var e="",a=0;a<t;a++)e+=Math.floor(10*Math.random()).toString();return A(e)}return r.a.createElement(s.a,{direction:"column",flex:"grow",style:{width:"100%"},alignSelf:"center"},r.a.createElement(s.a,{flex:{grow:1},align:"center",justify:"center",animation:{type:"fadeIn"}},r.a.createElement(s.a,{flex:{grow:4}},r.a.createElement(m.a,{size:"large",level:"3"},S?A("X".repeat(k.length)):h)),b?r.a.createElement(z.a,{placeholder:"Type your answer here",value:k,onChange:function(e){return t=e.target.value,W(!0),void w(t);var t}}):r.a.createElement(m.a,{level:"3"},A(k)),r.a.createElement(u.a,{label:"Submit",onClick:function(){return function(){var e=!1;h.replace("-","")===k&&(e=!0),g(!1),W(!1),c.push([C,e]),i(c)}()},style:{visibility:b?"visible":"hidden"}})),r.a.createElement(s.a,{align:"center"},r.a.createElement(x,{running:b,time:C,setTime:Y}),r.a.createElement(I,{scores:c,type:"numberMemory"+t,averagesToShow:[3]})),r.a.createElement(s.a,{direction:"row",justify:"between",margin:{bottom:"small",right:"large",left:"large"}},r.a.createElement(u.a,{label:"Abort",style:{visibility:b?"visible":"hidden"},onClick:function(){return g(!1),W(!1),c.push([C,!1]),void i(c)}}),r.a.createElement(u.a,{label:"Continue",style:{visibility:b?"hidden":"visible"},onClick:function(){return Y(0),g(!0),v(T()),void w("")}})))},L=a(97);var V=function(e){var t=e.chooseGame,a=e.games;return r.a.createElement(s.a,{align:"center",as:"header",direction:"row",flex:!1,gap:"small",justify:"between"},r.a.createElement(m.a,{level:3},"Segalos"),Object.entries(a).map((function(e,a){var n=Object(o.a)(e,2),l=n[0],c=n[1];return"object"===typeof c?r.a.createElement(L.a,{key:a,label:l,items:c.map((function(e){return{label:e,onClick:function(){t(l,e)}}}))}):r.a.createElement(u.a,{key:a,hoverIndicator:!0,onClick:function(){return t(l,"")}}," ",l," ")})))},P=a(60),R={global:{font:{family:"Solway"}}};var B=function(){var e=Object(n.useState)("Number Mind Palace"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(2),m=Object(o.a)(c,2),u=m[0],d=m[1],f={"Number Mind Palace":[10,20,30],"Doomsday Algorithm":""};return r.a.createElement(i.a,{theme:R,full:!0},r.a.createElement(s.a,{background:"brand",direction:"column",style:{minHeight:"100%"}},r.a.createElement(V,{chooseGame:function(e,t){l(e),d(t)},games:f}),"Doomsday Algorithm"===a?r.a.createElement(T,{startDate:"1800-01-01",endDate:"2199-12-31"}):"Number Mind Palace"===a?r.a.createElement(F,{key:u,numberLength:u}):r.a.createElement(s.a,null),r.a.createElement(s.a,{direction:"row",justify:"end",margin:{right:"large",left:"large"}},r.a.createElement(P.a,{href:"https://github.com/dansegal10/Doomsday-algorithm-practice","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star me on GitHub"},"Star"))))},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Doomsday-algorithm-practice",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Doomsday-algorithm-practice","/service-worker.js");G?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}()}},[[64,1,2]]]);
//# sourceMappingURL=main.b41b999e.chunk.js.map