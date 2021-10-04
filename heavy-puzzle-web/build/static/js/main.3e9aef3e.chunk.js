(this["webpackJsonpheavy-puzzle-web"]=this["webpackJsonpheavy-puzzle-web"]||[]).push([[0],{165:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(61),a=n.n(r),o=n(4),s=n(181),u=n(183),d=n(177),l=n(179),f=n(184),h=n(182),j=n(14),b=n(39),g=n(66),x=n(74),O=n(58),p={pieces:void 0},v=Object(x.b)({name:"puzzle",initialState:p,reducers:{set:function(e,t){e.pieces=t.payload}}}),m=function(e){return e.puzzle.pieces},y=v.reducer,w=Object(x.a)({reducer:{puzzle:y}}),k=O.c,z=n(110),S=Object(z.io)("http://207.154.244.40:8000/");S.on("connect",(function(){})),S.on("state",(function(e){var t=e.blocks;w.dispatch(v.actions.set(t))}));var X=void 0;setInterval((function(){X&&(S.emit(X.type,X.data),X=void 0)}),50);var Y=n(180),C=n(6);function F(e){var t,n=e.piece,c=e.selected;return Object(C.jsx)(Y.a.image,{animate:{x:n.x,y:n.y},transition:{duration:.5},imageRendering:"optimizeSpeed",strokeWidth:c?3:0,stroke:"black",href:(t=n.imageUrl,"http://207.154.244.40:8000/"+t),width:1.03*n.width,height:1.03*n.height})}function R(e){var t=e.block,n=Object(c.useRef)(null),i=Object(c.useContext)(I);return Object(g.useGesture)({onDrag:function(e){return n=t.id,c=e.offset[0],i=e.offset[1],void(X={type:"drag",data:{blockId:n,x:c,y:i}});var n,c,i},onDragEnd:function(){X={type:"release",data:{}}}},{target:n,drag:{from:function(){return[t.centerX,t.centerY]},transform:function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return[n/i,c/i]},bounds:{top:50,bottom:950,left:50,right:950}}}),Object(C.jsx)(Y.a.g,{ref:n,style:{touchAction:"none"},children:Object(j.a)(t.pieces).sort((function(e,t){return e.id-t.id})).map((function(e){return Object(C.jsx)(F,{selected:!0,piece:e},e.id)}))})}function U(e){var t=e.block,n="hsl(".concat(1337*t.id%360," 100% 50%)");return Object(C.jsxs)(Y.a.g,{initial:{opacity:0},animate:{opacity:t.draggingUsers.length>0?1:0},transition:{duration:.15},children:[t.draggingUsers.map((function(e){return Object(C.jsxs)(i.a.Fragment,{children:[Object(C.jsx)(Y.a.line,{x1:t.centerX,y1:t.centerY,initial:{x2:e.x,y2:e.y},animate:{x2:e.x,y2:e.y},transition:{duration:.5},stroke:n,strokeWidth:5,z:10},"l".concat(e.id)),Object(C.jsx)(Y.a.circle,{initial:{r:"0.1cm",cx:e.x,cy:e.y},animate:{r:"0.3cm",cx:e.x,cy:e.y},transition:{duration:.5},fill:n},"c".concat(e.id))]},e.id)})),Object(C.jsx)(Y.a.circle,{initial:{r:"0.1cm"},animate:{r:t.draggingUsers.length>0?"0.4cm":"0.1cm"},transition:{duration:.5},cx:t.centerX,cy:t.centerY,stroke:n,strokeWidth:6,fill:"white"},t.id+1e3),Object(C.jsx)(Y.a.circle,{initial:{r:"0.1cm"},animate:{r:"".concat(.33*t.draggingUsers.length/t.weight,"cm")},transition:{duration:.5},cx:t.centerX,cy:t.centerY,fill:n},-t.id)]},t.id)}var B=function(e,t,n){return e<t?t:e>n?n:e},D=1e3,E=function(e,t){var n,c,i=t.getBoundingClientRect(),r=B(e.scale,1,5),a=Math.max(i.width,i.height)/D*r,o=D/r;return i.width>i.height?c=(n=o)/i.width*i.height:n=(c=o)/i.height*i.width,{offsetX:B(e.offsetX,0,D-n),offsetY:B(e.offsetY,0,D-c),scale:r,trueScale:a,width:n,height:c}},I=i.a.createContext(1);function P(){var e=k(m),t=Object(c.useRef)(null),n=Object(c.useRef)(null),i=Object(c.useState)({offsetX:0,offsetY:0,scale:1,width:D,height:D,trueScale:void 0}),r=Object(o.a)(i,2),a=r[0],s=r[1];return Object(g.useGesture)({onDrag:function(e){var n=E(Object(b.a)(Object(b.a)({},a),{},{offsetX:a.offsetX-e.delta[0]/(a.trueScale||1),offsetY:a.offsetY-e.delta[1]/(a.trueScale||1)}),t.current);s(n)},onPinch:function(e){s(E(Object(b.a)(Object(b.a)({},a),{},{scale:Math.abs(e.offset[0])}),t.current)),e.offset[0]=B(e.offset[0],1,5)}},{target:n}),Object(c.useEffect)((function(){return s(E(a,t.current))}),[]),Object(C.jsx)(I.Provider,{value:a.trueScale||1,children:Object(C.jsx)(d.a,{overflow:"hidden",h:"100vh",ref:t,children:Object(C.jsxs)(Y.a.svg,{animate:{viewBox:"\n                        ".concat(a.offsetX.toFixed(2)," \n                        ").concat(a.offsetY.toFixed(2)," \n                        ").concat(a.width," ").concat(a.height,"\n                        ")},style:{touchAction:"none"},children:[Object(C.jsx)("rect",{ref:n,width:1e3,height:1e3,fill:"white",style:{touchAction:"none"}}),Object(j.a)(e||[]).sort((function(e,t){return t.weight-e.weight})).map((function(e){return Object(C.jsx)(R,{block:e},e.id)})),null===e||void 0===e?void 0:e.map((function(e){return Object(C.jsx)(U,{block:e},e.id)}))]})})})}var A=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(C.jsx)(O.a,{store:w,children:Object(C.jsxs)(s.a,{children:[Object(C.jsx)(P,{}),Object(C.jsx)(u.a,{in:n,unmountOnExit:!0,children:Object(C.jsx)(d.a,{pos:"fixed",top:"0",left:"0",w:"100vw",h:"100vh",bg:"#ddd",children:Object(C.jsxs)(l.a,{m:2,children:[Object(C.jsxs)(f.b,{children:[Object(C.jsx)(f.a,{children:"\u041f\u0435\u0440\u0435\u0442\u044f\u0433\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u0438 \u043f\u0430\u0437\u043b\u0430 \u0434\u0440\u0443\u0433 \u043a \u0434\u0440\u0443\u0433\u0443"}),Object(C.jsx)(f.a,{children:"\u041a\u043e\u0433\u0434\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043a\u0443\u0441\u043e\u0447\u043a\u0438 \u0440\u044f\u0434\u043e\u043c - \u043e\u043d\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c\u0441\u044f"}),Object(C.jsx)(f.a,{children:"\u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043a\u0443\u0441\u043e\u0447\u0435\u043a, \u0442\u0435\u043c \u0441\u043b\u043e\u0436\u043d\u0435\u0435 \u0435\u0433\u043e \u0442\u0430\u0449\u0438\u0442\u044c"}),Object(C.jsx)(f.a,{children:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0432\u0435\u0441\u044c \u043f\u0430\u0437\u043b!"})]}),Object(C.jsx)(h.a,{onClick:function(){return i(!1)},children:"\u0412\u043f\u0435\u0440\u0435\u0434!"})]})})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root")),M()}},[[165,1,2]]]);
//# sourceMappingURL=main.3e9aef3e.chunk.js.map