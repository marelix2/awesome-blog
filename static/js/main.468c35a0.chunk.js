(this["webpackJsonpawesome-blog"]=this["webpackJsonpawesome-blog"]||[]).push([[0],{144:function(e,t,n){var a={"./article.md":145,"./article2.md":146,"./article3.md":147,"./article4.md":148};function i(e){return r(e).then((function(e){return n.t(e,7)}))}function r(e){return Promise.resolve().then((function(){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}))}i.keys=function(){return Object.keys(a)},i.resolve=r,i.id=144,e.exports=i},145:function(e,t,n){e.exports=n.p+"static/media/article.01becbaf.md"},146:function(e,t,n){e.exports=n.p+"static/media/article2.20ffdc9d.md"},147:function(e,t,n){e.exports=n.p+"static/media/article3.680ee265.md"},148:function(e,t,n){e.exports=n.p+"static/media/article4.5de089a2.md"},149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(40),c=n.n(r),s=n(41),o=n(42),A=n.n(o),m=n(15),l="/awesome-blog",d=n(160),p=Object(d.a)((function(){return{link:{display:"flex",justifyContent:"center",alignItems:" center"},logo:{width:"80%"}}})),g=function(){var e=p();return i.a.createElement(m.b,{to:l,className:e.link},i.a.createElement("img",{src:A.a,alt:"just-dev.pl",className:e.logo}))},E=n(162),u=n(16),f=n(10),C=n(44),I=n.n(C),k=n(61),w=Object(d.a)((function(e){var t={"&::first-letter":{textTransform:"capitalize"},fontFamily:"'Open Sans', sans-serif"};return{wrapper:Object(f.a)({width:"60vw",height:300,border:"30px solid black",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{flexDirection:"column",border:"10px solid black",width:"90vw"}),icon:Object(f.a)({width:120,minWidth:100,margin:"0 30px"},e.breakpoints.down("sm"),{margin:"16px"}),section:Object(f.a)({height:"80%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",width:"calc(100% - 150px)"},e.breakpoints.down("sm"),{width:"auto",justifyContent:"flex-start",alignItems:"center",height:"auto",textAlign:"center"}),header:Object(u.a)({},t,{margin:0}),date:Object(u.a)({},t,{margin:0}),description:Object(u.a)({},t,Object(f.a)({width:"calc(100% - 150px)"},e.breakpoints.down("sm"),{display:"none"}))}})),B=function(e){var t=e.iconSrc,n=void 0===t?"default":t,a=e.title,r=e.description,c=e.date,s=e.src,o=function(e,t){return e.find((function(e){return e==="./".concat(t,".svg")}))||"./defualt.svg"}(k.keys(),n),A=w();return i.a.createElement(m.b,{to:{pathname:"/article/".concat(s),state:{src:s}}},i.a.createElement("div",{className:A.wrapper},i.a.createElement("img",{src:k(o),className:A.icon,alt:a}),i.a.createElement("section",{className:A.section},i.a.createElement("h2",{className:A.header},a),i.a.createElement("p",{className:A.date},I()(c).format("MMM Do YYYY")),i.a.createElement("p",{className:A.description}," ",r))))},j=Object(d.a)((function(){return{item:{marginBottom:16}}})),S=function(e){var t=e.articles,n=j();return i.a.createElement(E.a,{container:!0,direction:"column-reverse",justify:"space-around",alignItems:"center"},t.map((function(e){var t=e.iconSrc,a=e.id,r=e.title,c=e.description,s=e.date,o=e.src;return i.a.createElement(E.a,{item:!0,key:a,className:n.item},i.a.createElement(B,{iconSrc:t,title:r,description:c,date:s,src:o}))})))},y=n(46),J=n(45),h=n.n(J),T=Object(d.a)((function(e){return{section:Object(u.a)({},{"&::first-letter":{textTransform:"capitalize"},fontFamily:"'Open Sans', sans-serif"},Object(f.a)({width:"60vw",borderLeft:"5px solid #444",paddingLeft:"16px"},e.breakpoints.down("sm"),{width:"90vw",overflowX:"hidden"}))}})),x=function(e){var t=e.location,r=Object(a.useState)(""),c=Object(y.a)(r,2),s=c[0],o=c[1];Object(a.useEffect)((function(){var e,a;e=t.state.src,a=o,n(144)("./".concat(e,".md")).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return a(e)}))}))}),[]);var A=T();return i.a.createElement("section",{className:A.section},i.a.createElement(h.a,{source:s}))},O=n(12),b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(E.a,{container:!0,item:!0,xs:12,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(g,null)),i.a.createElement(O.d,null,i.a.createElement(O.b,{exact:!0,path:l},i.a.createElement(S,{articles:s})),i.a.createElement(O.b,{path:"/article/:article",component:x}),i.a.createElement(O.a,{from:"/",to:l})))))};n(149);var M=function(){return i.a.createElement(b,null)};c.a.render(i.a.createElement(M,null),document.getElementById("root"))},41:function(e){e.exports=JSON.parse('[{"id":"1","title":"jak dzia\u0142a mechanizm port\xf3wnywania?","src":"article","iconSrc":"js-icon","date":"10.10.2019","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"id":"2","title":"Programista - praca czy studia?","src":"article2","date":"10.10.2019","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"id":"3","title":"Jak powinni ubiera\u0107 si\u0119 programi\u015bci?","src":"article3","iconSrc":"js-icon","date":"10.10.2019","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"id":"4","title":"markdown - konfiguracja","src":"article4","iconSrc":"markdown-icon","date":"10.10.2019","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]')},42:function(e,t){e.exports="data:image/png;base64,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"},50:function(e,t,n){e.exports=n(150)},61:function(e,t,n){var a={"./default.svg":62,"./js-icon.svg":63,"./markdown-icon.svg":64};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=61},62:function(e,t,n){e.exports=n.p+"static/media/default.a868f3cb.svg"},63:function(e,t,n){e.exports=n.p+"static/media/js-icon.bb824348.svg"},64:function(e,t,n){e.exports=n.p+"static/media/markdown-icon.9d9ec1b8.svg"}},[[50,1,2]]]);
//# sourceMappingURL=main.468c35a0.chunk.js.map