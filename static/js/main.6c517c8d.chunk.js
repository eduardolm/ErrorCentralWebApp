(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{100:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),o=t.n(l),c=(t(91),t(17)),s=t(9),u=t(68),i=t.n(u),m=t(72),d=t.n(m),p=t(73),v=t.n(p),b=t(162);t(92);var g=function(){var e=Object(s.f)();return r.a.createElement("div",{id:"landing-page"},r.a.createElement("div",{id:"landing-page-content",className:"container"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:i.a,alt:"Central de Erros"})),r.a.createElement("div",{className:"buttons-container"},r.a.createElement(b.a,{size:"large",variant:"contained",color:"primary",onClick:function(){e.push("/user/login")},startIcon:r.a.createElement(d.a,null)},"Login"),r.a.createElement(b.a,{size:"large",variant:"contained",onClick:function(){e.push("/user/registry")},startIcon:r.a.createElement(v.a,null)},"Cadastrar"))))},E=t(5),f=t.n(E),h=t(8),O=t(2),j=t(171),k=t(74),N=t.n(k),x=(t(99),t(169)),y=t(38),C=t(52),S=t(4),z=t(165),w=t(172),I=t(170),F=t(166),A=t(173),D=t(167),L=t(174),B=t(31),q=t.n(B),T=t(75),_=t.n(T),P=t(53),R=t.n(P),G=t(32),U=t.n(G),M=t(77),H=t.n(M),W=t(54),J=t.n(W),K=t(76),Q=t.n(K),V=t(168),X=Object(z.a)((function(e){return Object(w.a)({list:{width:250},fullList:{width:"auto"},root:{"& > *":{margin:e.spacing(1)}}})})),Y=function(e){var a=Object(j.a)(["token"]),t=Object(O.a)(a,3),n=(t[0],t[1],t[2]),l=Object(s.f)(),o=X(),c=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),u=Object(O.a)(c,2),i=u[0],m=u[1],d=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&m(Object(C.a)(Object(C.a)({},i),{},Object(y.a)({},e,a)))}},p=function(){n("token"),l.push("/user/login")};return r.a.createElement("div",null,["top"].map((function(a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{onClick:d(a,!0)},r.a.createElement(H.a,{style:{fontSize:40,color:"#9C98A6"}})),r.a.createElement(I.a,{anchor:a,open:i[a],onClose:d(a,!1)},"user"===e.menuType?function(e){return r.a.createElement("div",{className:Object(S.a)(o.fullList,Object(y.a)({},o.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:d(e,!1),onKeyDown:d(e,!1)},r.a.createElement(F.a,{component:"nav"},r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/user/list")}},r.a.createElement(D.a,null," ",r.a.createElement(q.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Listar"}))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/user/create")}},r.a.createElement(D.a,null," ",r.a.createElement(_.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Cadastrar"}))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/user/update")}},r.a.createElement(D.a,null," ",r.a.createElement(R.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Alterar"}))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/user/delete")}},r.a.createElement(D.a,null," ",r.a.createElement(U.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Excluir"}))),r.a.createElement(V.a,null),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){p()}},r.a.createElement(D.a,null," ",r.a.createElement(J.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Logout"})))))}(a):function(e){return r.a.createElement("div",{className:Object(S.a)(o.fullList,Object(y.a)({},o.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:d(e,!1),onKeyDown:d(e,!1)},r.a.createElement(F.a,{component:"nav"},r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/log/list")}},r.a.createElement(D.a,null," ",r.a.createElement(q.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Listar"}))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/log/create")}},r.a.createElement(D.a,null," ",r.a.createElement(Q.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Cadastrar"}))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/log/update")}},r.a.createElement(D.a,null," ",r.a.createElement(R.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Alterar"}))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){l.push("/log/delete")}},r.a.createElement(D.a,null," ",r.a.createElement(U.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Excluir"}))),r.a.createElement(V.a,null),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){p()}},r.a.createElement(D.a,null," ",r.a.createElement(J.a,{fontSize:"large"})," "),r.a.createElement(L.a,{primary:"Logout"})))))}(a)))})))},Z=t(78),$=t.n(Z),ee=function(e){var a=Object(s.f)();return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"top-bar-container"},r.a.createElement(x.a,{"aria-label":"Back",size:"medium",style:{color:"#9C98A6"},onClick:function(){return a.push("/main")}},r.a.createElement($.a,null)),r.a.createElement("img",{src:N.a,alt:"Central de Erros",className:"logout-icon"})),r.a.createElement("div",{className:"header-content"},r.a.createElement("strong",null,e.title),e.description&&r.a.createElement("p",null,e.description),e.children),r.a.createElement("div",{className:"header-menu-container"},r.a.createElement("div",{className:"header-button-nav"},r.a.createElement(Y,{menuType:e.menu}))))},ae=t(34),te=(t(100),function(e){var a=e.label,t=e.name,n=Object(ae.a)(e,["label","name"]);return r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({type:"text",id:t},n)))}),ne=t(79),re=t.n(ne).a.create({baseURL:"https://errorcentralv102.azurewebsites.net"}),le=t(80),oe=t.n(le);t(118),t(119);var ce=function(){return r.a.createElement("footer",{className:"page-footer"})};var se=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,2),l=(t[0],t[1]),o=Object(n.useState)(""),c=Object(O.a)(o,2),u=c[0],i=c[1],m=Object(n.useState)(""),d=Object(O.a)(m,2),p=d[0],v=d[1];function g(){return(g=Object(h.a)(f.a.mark((function a(t){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,re.post("/user/login",{email:u,password:p});case 3:(n=a.sent).data.access_token&&(l("token",n.data,{path:"/",maxAge:3600}),e.push("/main"));case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("div",{id:"login-page",className:"container"},r.a.createElement(ee,{title:"Login",description:"Fa\xe7a seu login utilizando o formul\xe1rio abaixo.",menu:"user"}),r.a.createElement("main",null,r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Seus dados"),r.a.createElement(te,{name:"email",label:"E-mail",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(te,{name:"password",label:"Senha",value:p,onChange:function(e){v(e.target.value)}})),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement(oe.a,{style:{fontSize:30,color:"#D71414",margin:10}}),"Importante! ",r.a.createElement("br",null),"Preencha todos os dados"),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){return g.apply(this,arguments)}},"Login")))),r.a.createElement(ce,null))};t(120);var ue=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,1)[0],l=t.token?"Bearer ".concat(t.token.access_token):"",o=Object(n.useState)(""),c=Object(O.a)(o,2),u=c[0],i=c[1];function m(e){return d.apply(this,arguments)}function d(){return(d=Object(h.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=5,re.delete("user/"+u,{headers:{authorization:l}});case 5:if(204!==a.sent.status){a.next=9;break}return alert("Registro n\xe3o encontrado."),a.abrupt("return",[]);case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),401===a.t0.statusCode?(e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir.")):500===a.t0.statusCode?alert("Erro do servidor. Tente novamente em alguns minutos. Se o erro se repetir, entre em contato com o administrador do sistema"):(e.push("/user/delete"),alert("Erro ao realizar sua solicita\xe7\xe3o."));case 14:case"end":return a.stop()}}),a,null,[[1,11]])})))).apply(this,arguments)}return r.a.createElement("div",{id:"user-page",className:"container"},r.a.createElement(ee,{title:"Excluir usu\xe1rio",description:"Aqui \xe9 poss\xedvel excluir usu\xe1rios.",menu:"user"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:m,className:"user-delete"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Exclus\xe3o"),r.a.createElement("div",{className:"user-delete-action"},r.a.createElement(te,{className:"user-delete-input",name:"id",label:"Id do usu\xe1rio a ser exclu\xeddo",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(b.a,{type:"submit",className:"delete",variant:"contained",color:"primary",onClick:m,startIcon:r.a.createElement(U.a,null)},"Excluir"))))),r.a.createElement(ce,null))},ie=(t(121),t(26)),me=t.n(ie);var de=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,1)[0],l=t.token?"Bearer ".concat(t.token.access_token):"",o=Object(n.useState)(""),c=Object(O.a)(o,2),u=c[0],i=c[1],m=Object(n.useState)(""),d=Object(O.a)(m,2),p=d[0],v=d[1],g=Object(n.useState)(""),E=Object(O.a)(g,2),k=E[0],N=E[1];function x(e){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=4,re.post("user/create",{fullName:u,email:p,password:k},{headers:{authorization:l}}).then((function(){alert("Cadastro realizado com sucesso!")})).catch((function(){alert("Erro no cadastro.")}));case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("div",{id:"user-page",className:"container"},r.a.createElement(ee,{title:"Cadastrar usu\xe1ro",description:"Aqui \xe9 poss\xedvel cadastrar novos usu\xe1rios.",menu:"user"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:x,className:"user-create"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Cadastro"),r.a.createElement(te,{className:"create-name",name:"fullName",label:"Nome completo",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(te,{className:"create-email",name:"email",label:"E-mail",value:p,onChange:function(e){v(e.target.value)}}),r.a.createElement("div",{className:"user-create-action"},r.a.createElement(te,{className:"create-password",name:"password",label:"Senha",value:k,onChange:function(e){N(e.target.value)}}),r.a.createElement(b.a,{type:"submit",className:"create",variant:"contained",color:"primary",onClick:x,startIcon:r.a.createElement(me.a,null)},"Gravar"))))),r.a.createElement(ce,null))};t(122);var pe=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,1)[0],l=t.token?"Bearer ".concat(t.token.access_token):"",o=Object(n.useState)(""),c=Object(O.a)(o,2),u=c[0],i=c[1],m=Object(n.useState)(""),d=Object(O.a)(m,2),p=d[0],v=d[1],g=Object(n.useState)(""),E=Object(O.a)(g,2),k=E[0],N=E[1],x=Object(n.useState)(""),y=Object(O.a)(x,2),C=y[0],S=y[1],z=Object(n.useState)(new Date),w=Object(O.a)(z,2),I=w[0],F=w[1];function A(e){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(f.a.mark((function a(n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=5,re.get("user/"+u,{headers:{authorization:l}});case 5:if(204!==(r=a.sent).status){a.next=9;break}return alert("Registro n\xe3o encontrado."),a.abrupt("return",[]);case 9:return F(r.data.createdAt),a.next=12,re.put("user",{id:u,fullName:p,email:k,password:C,createdAt:I},{headers:{authorization:l}});case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),401===a.t0.statusCode?(e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir.")):400===a.t0.statusCode?alert("Erro ao atualizar o usu\xe1rio. Confira os dados informados."):500===a.t0.statusCode?alert("Erro do servidor. Tente novamente em alguns minutos. Se o erro se repetir, entre em contato com o administrador do sistema"):(e.push("/user/update"),alert("Erro ao realizar sua solicita\xe7\xe3o."));case 17:case"end":return a.stop()}}),a,null,[[1,14]])})))).apply(this,arguments)}return r.a.createElement("div",{id:"user-page",className:"container"},r.a.createElement(ee,{title:"Alterar usu\xe1rio",description:"Aqui \xe9 poss\xedvel alterar os cadastros dos usu\xe1rios.",menu:"user"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:A,className:"user-update"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Altera\xe7\xe3o"),r.a.createElement(te,{className:"update-id",name:"id",label:"Id do usu\xe1rio a ser alterado",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(te,{className:"update-name",name:"fullName",label:"Nome completo",value:p,onChange:function(e){v(e.target.value)}}),r.a.createElement(te,{className:"update-email",name:"email",label:"E-mail",value:k,onChange:function(e){N(e.target.value)}}),r.a.createElement("div",{className:"user-update-action"},r.a.createElement(te,{className:"update-password",name:"password",label:"Senha",value:C,onChange:function(e){S(e.target.value)}}),r.a.createElement(b.a,{type:"submit",className:"update",variant:"contained",color:"primary",onClick:A,startIcon:r.a.createElement(me.a,null)},"Gravar"))))),r.a.createElement(ce,null))},ve=(t(123),t(124),function(e){var a=e.user;return r.a.createElement("article",{className:"user-item"},r.a.createElement("div",null,r.a.createElement("ul",{className:"user-item-list"},r.a.createElement("li",null,r.a.createElement("strong",null,"Id: ","  ",a.id)),r.a.createElement("li",null,"Nome: ","  ",a.fullName),r.a.createElement("li",null,"E-mail: ","  ",a.email),r.a.createElement("li",null,"Cadastro: ","  ",a.createdAt))))}),be=t(47),ge=t.n(be);var Ee=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,1)[0],l=t.token?"Bearer ".concat(t.token.access_token):"",o=Object(n.useState)([]),c=Object(O.a)(o,2),u=c[0],i=c[1],m=Object(n.useState)(""),d=Object(O.a)(m,2),p=d[0],v=d[1];function g(e){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(f.a.mark((function a(n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=5,re.get("user",{headers:{authorization:l}});case 5:if(204!==(r=a.sent).status){a.next=9;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 9:i(r.data),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),(401===a.t0.statusCode||a.t0)&&(e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir."));case 15:case"end":return a.stop()}}),a,null,[[1,12]])})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(h.a)(f.a.mark((function a(n){var r,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=5,re.get("/user/".concat(p),{headers:{authorization:l}});case 5:if(204!==(r=a.sent).status){a.next=9;break}return alert("Registro n\xe3o encontrado."),a.abrupt("return",[]);case 9:console.log(r.status),"[object Array]"!==Object.prototype.toString.call(r.data)&&(o=[].concat(r.data),i(o)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),401===a.t0.statusCode&&(e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir."));case 16:case"end":return a.stop()}}),a,null,[[1,13]])})))).apply(this,arguments)}return r.a.createElement("div",{id:"user-page",className:"container"},r.a.createElement(ee,{title:"Listar usu\xe1rios",description:"Aqui \xe9 poss\xedvel listar os usu\xe1rios cadastrados.",menu:"user"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:g,className:"user-list"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Listagem"),r.a.createElement("div",{className:"list-all"},r.a.createElement(b.a,{type:"submit",className:"list-all",variant:"contained",color:"primary",onClick:g,startIcon:r.a.createElement(q.a,null)},"Listar Todos")))),r.a.createElement("form",{onSubmit:k,className:"user-list-id"},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"list-id"},r.a.createElement(te,{name:"id",label:"Informe o id do usu\xe1rio",value:p,onChange:function(e){v(e.target.value)}}),r.a.createElement(b.a,{type:"submit",className:"list-by-id",variant:"contained",color:"primary",onClick:k,startIcon:r.a.createElement(ge.a,null)},"Listar por Id"))))),r.a.createElement("main",null,r.a.createElement("div",{id:"list-users-response"},u.map((function(e){return r.a.createElement(ve,{key:e.id,user:e})})))),r.a.createElement(ce,null))};var fe=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(O.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),u=Object(O.a)(c,2),i=u[0],m=u[1],d=Object(n.useState)(""),p=Object(O.a)(d,2),v=p[0],g=p[1];function E(e){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(f.a.mark((function a(t){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,re.post("user/registry",{fullName:l,email:i,password:v}).then((function(){alert("Cadastro realizado com sucesso!"),e.push("/user/login")})).catch((function(){alert("Erro no cadastro.")}));case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("div",{id:"user-page",className:"container"},r.a.createElement(ee,{title:"Novo cadastro",description:"Bem-vindo! Fa\xe7a seu cadastro para come\xe7ar a utilizar o sistema.",menu:"user"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:E,className:"user-create"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Cadastro"),r.a.createElement(te,{className:"create-name",name:"fullName",label:"Nome completo",value:l,onChange:function(e){o(e.target.value)}}),r.a.createElement(te,{className:"create-email",name:"email",label:"E-mail",value:i,onChange:function(e){m(e.target.value)}}),r.a.createElement("div",{className:"user-create-action"},r.a.createElement(te,{className:"create-password",name:"password",label:"Senha",value:v,onChange:function(e){g(e.target.value)}}),r.a.createElement(b.a,{type:"submit",className:"create",variant:"contained",color:"primary",onClick:E,startIcon:r.a.createElement(me.a,null)},"Gravar"))))))},he=t(81),Oe=t.n(he),je=t(82),ke=t.n(je);t(125);var Ne=function(){var e=Object(s.f)(),a=Object(j.a)();return Object(O.a)(a,1)[0].token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),r.a.createElement("div",{id:"main-page",className:"container"},r.a.createElement(ee,{title:"Bem-vindos!",description:"Esta \xe9 a p\xe1gina principal da aplica\xe7\xe3o. Nela \xe9 poss\xedvel escolher qual o tipo de informa\xe7\xe3o desejado.",menu:"user"}),r.a.createElement("main",{className:"main-work-area-container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("p",null,'Clique em "usu\xe1rios" para acessar o conte\xfado relacionado aos usu\xe1rios, ou "logs" para ter acesso aos logs de erros.')),r.a.createElement("div",{className:"main-page-buttons-container"},r.a.createElement(b.a,{className:"user-button",size:"large",variant:"contained",style:{width:120},color:"primary",startIcon:r.a.createElement(Oe.a,null),onClick:function(){e.push("/user/list")}},"Usu\xe1rios"),r.a.createElement(b.a,{className:"log-button",size:"large",variant:"contained",style:{width:120},startIcon:r.a.createElement(ke.a,null),onClick:function(){e.push("/log/list")}},"Logs"))),r.a.createElement("footer",{className:"main-footer"}))},xe=(t(126),t(127),function(e){var a=e.label,t=e.name,n=Object(ae.a)(e,["label","name"]);return r.a.createElement("div",{className:"textarea-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("textarea",Object.assign({id:t},n)))}),ye=(t(128),function(e){var a=e.label,t=e.name,n=e.options,l=Object(ae.a)(e,["label","name","options"]);return r.a.createElement("div",{className:"select-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({value:"",id:t},l),r.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione"),n.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))))});var Ce=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,1)[0],l=t.token?"Bearer ".concat(t.token.access_token):"",o=Object(n.useState)(""),c=Object(O.a)(o,2),u=c[0],i=c[1],m=Object(n.useState)(""),d=Object(O.a)(m,2),p=d[0],v=d[1],g=Object(n.useState)(""),E=Object(O.a)(g,2),k=E[0],N=E[1],x=Object(n.useState)(""),y=Object(O.a)(x,2),C=y[0],S=y[1],z=Object(n.useState)(""),w=Object(O.a)(z,2),I=w[0],F=w[1],A=Object(n.useState)(""),D=Object(O.a)(A,2),L=D[0],B=D[1],q=Object(n.useState)(""),T=Object(O.a)(q,2),_=T[0],P=T[1];function R(e){return G.apply(this,arguments)}function G(){return(G=Object(h.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=4,re.post("log/create",{name:u,description:p,userId:k,environmentId:C,layerId:I,levelId:L,statusId:_},{headers:{authorization:l}}).then((function(){alert("Cadastro realizado com sucesso!")})).catch((function(){alert("Erro no cadastro.")}));case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("div",{id:"log-page",className:"container"},r.a.createElement(ee,{title:"Cadastrar log",description:"Aqui \xe9 poss\xedvel cadastrar novos logs de erros.",menu:"log"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:R,className:"log-create"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Cadastro"),r.a.createElement(te,{className:"create-name",name:"name",label:"T\xedtulo",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(xe,{name:"description",label:"Descri\xe7\xe3o",value:p,onChange:function(e){v(e.target.value)}}),r.a.createElement("div",{className:"grid-container-1-create"},r.a.createElement(te,{className:"create-user-id",name:"userId",label:"User Id",value:k,onChange:function(e){N(e.target.value)}}),r.a.createElement(ye,{name:"environment",label:"Ambiente",value:C,onChange:function(e){S(e.target.value)},options:[{value:1,label:"Desenvolvimento"},{value:2,label:"Homologa\xe7\xe3o"},{value:3,label:"Produ\xe7\xe3o"}]}),r.a.createElement(ye,{name:"layer",label:"Camada",value:I,onChange:function(e){F(e.target.value)},options:[{value:1,label:"Backend"},{value:2,label:"Frontend"},{value:3,label:"Mobile"},{value:4,label:"Desktop"}]})),r.a.createElement("div",{className:"grid-container-2-create"},r.a.createElement(ye,{name:"level",label:"Level",value:L,onChange:function(e){B(e.target.value)},options:[{value:1,label:"Debug"},{value:2,label:"Warning"},{value:3,label:"Error"}]}),r.a.createElement(ye,{name:"status",label:"Status",value:_,onChange:function(e){P(e.target.value)},options:[{value:1,label:"Arquivado"},{value:2,label:"Pendente"},{value:3,label:"Ignorado"}]}),r.a.createElement(b.a,{type:"submit",className:"create-log-button",variant:"contained",color:"primary",onClick:R,startIcon:r.a.createElement(me.a,null)},"Gravar"))))),r.a.createElement(ce,null))},Se=(t(129),t(130),function(e){return r.a.createElement("article",{className:"log-item"},r.a.createElement("header",{className:"log-item-header"},r.a.createElement("h2",null,"T\xedtulo: ","  ",e.log.name)),r.a.createElement("div",null,r.a.createElement("ul",{className:"log-item-list"},r.a.createElement("li",null,r.a.createElement("strong",null,"Id: ","  ",e.log.id)),r.a.createElement("li",null,"Descri\xe7\xe3o: ","  ",e.log.description),r.a.createElement("li",null,"Usu\xe1rio: ","  ",e.log.user.fullName),r.a.createElement("li",null,"Ambiente: ","  ",e.log.environment.name),r.a.createElement("li",null,"Origem: ","  ",e.log.layer.name),r.a.createElement("li",null,"Level: ","  ",e.log.level.name),r.a.createElement("li",null,"Status: ","  ",e.log.status.name),r.a.createElement("li",null,"Cadastro: ","  ",e.log.createdAt))))});var ze=function(){var e=Object(s.f)(),a=Object(j.a)(),l=Object(O.a)(a,1)[0],o=l.token?"Bearer ".concat(l.token.access_token):"",c=Object(n.useState)([]),u=Object(O.a)(c,2),i=u[0],m=u[1],d=Object(n.useState)(""),p=Object(O.a)(d,2),v=p[0],g=p[1],E=Object(n.useState)(""),k=Object(O.a)(E,2),N=k[0],x=k[1],y=Object(n.useState)(""),C=Object(O.a)(y,2),S=C[0],z=C[1],w=Object(n.useState)(""),I=Object(O.a)(w,2),F=I[0],A=I[1],D=Object(n.useState)(""),L=Object(O.a)(D,2),B=L[0],T=L[1],_=Object(n.useState)(""),P=Object(O.a)(_,2),R=P[0],G=P[1],U=Object(n.useState)(""),M=Object(O.a)(U,2),H=M[0],W=M[1];function J(){return(J=Object(h.a)(f.a.mark((function a(t){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,l.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=5,re.get("log",{headers:{authorization:o}});case 5:if(n=a.sent,m(n.data),204!==n.status){a.next=10;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),401===a.t0.statusCode?(e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir.")):a.t0&&(e.push("/user/login"),alert("Ocorre um erro ao processar sua solicita\xe7\xe3o. Favor tentar novamente dentro de alguns minutos."));case 15:case"end":return a.stop()}}),a,null,[[1,12]])})))).apply(this,arguments)}function K(){return(K=Object(h.a)(f.a.mark((function a(t){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,l.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.next=5,re.get("/log/".concat(v),{headers:{authorization:o}});case 5:if(204!==(n=a.sent).status){a.next=9;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 9:"[object Array]"!==Object.prototype.toString.call(n.data)&&m([].concat(n.data)),a.next=25;break;case 12:if(a.prev=12,a.t0=a.catch(1),401!==a.t0.statusCode){a.next=19;break}e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir."),a.next=25;break;case 19:if(404!==a.t0.statusCode){a.next=24;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 24:alert("Ocorreu um erro ao processar sua solicita\xe7\xe3o. Favor tentar novamente dentro de alguns minutos.");case 25:case"end":return a.stop()}}),a,null,[[1,12]])})))).apply(this,arguments)}function Q(){return(Q=Object(h.a)(f.a.mark((function a(t){var n,r,c,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),a.prev=1,l.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),"1"!==R){a.next=13;break}return a.next=6,re.get("/log/environment/".concat(N,"/level/").concat(S),{headers:{authorization:o}});case 6:if(204!==(n=a.sent).status){a.next=10;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 10:"[object Array]"!==Object.prototype.toString.call(n.data)?m([].concat(n.data)):m(n.data),a.next=33;break;case 13:if("2"!==R){a.next=23;break}return a.next=16,re.get("/log/environment?environmentId=".concat(N,"&description=").concat(H),{headers:{authorization:o}});case 16:if(204!==(r=a.sent).status){a.next=20;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 20:"1"===B?m(V(X(r.data),"level.id")):"2"===B&&m(V(X(r.data),"frequency")),a.next=33;break;case 23:if("3"!==R){a.next=33;break}return a.next=26,re.get("/log/environment/".concat(N,"/layer/").concat(F),{headers:{authorization:o}});case 26:if(204!==(c=a.sent).status){a.next=30;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 30:s=X(c.data),console.log(V(s,"frequency")),"1"===B?m(V(X(c.data),"level.id")):"2"===B&&m(V(X(c.data),"frequency"));case 33:a.next=38;break;case 35:a.prev=35,a.t0=a.catch(1),401===a.t0.statusCode?(e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir.")):(e.push("/log/list"),alert("Ocorreu um erro ao processar sua solicita\xe7\xe3o. Favor tentar novamente dentro de alguns minutos."));case 38:case"end":return a.stop()}}),a,null,[[1,35]])})))).apply(this,arguments)}function V(e,a){var n=t(131);return"1"===B?n(e,a):"2"===B?function(e){var a=Object.create(null);return e.forEach((function(e){a[e.level.id]=(a[e.level.id]||0)+1})),e.sort((function(e,t){return a[t.level.id]-a[e.level.id]})),e}(e):void 0}function X(e){return"[object Array]"!==Object.prototype.toString.call(e)?[].concat(e):e}return r.a.createElement("div",{id:"log-page",className:"container"},r.a.createElement(ee,{title:"Listar Logs",description:"Aqui \xe9 poss\xedvel listar os logs cadastrados.",menu:"log"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{className:"log-list"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Listagem"),r.a.createElement("div",{className:"list-all"},r.a.createElement(b.a,{type:"submit",className:"list-all",variant:"contained",color:"primary",onClick:function(e){return J.apply(this,arguments)},startIcon:r.a.createElement(q.a,null)},"Listar Todos")))),r.a.createElement("form",{className:"log-list-id"},r.a.createElement("fieldset",null,r.a.createElement("div",{className:"grid-container-1-list"},r.a.createElement(te,{name:"id",label:"Informe o id do log",value:v,onChange:function(e){g(e.target.value)}}),r.a.createElement(b.a,{type:"submit",className:"list-by-id-button",variant:"contained",color:"primary",onClick:function(e){return K.apply(this,arguments)},startIcon:r.a.createElement(ge.a,null)},"Listar por Id")))),r.a.createElement("form",{className:"log-list-env-id-level-id"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Busca avan\xe7ada"),r.a.createElement("div",{className:"grid-container-2-list"},r.a.createElement(ye,{name:"environment",label:"Ambiente",value:N,onChange:function(e){x(e.target.value)},options:[{value:1,label:"Desenvolvimento"},{value:2,label:"Homologa\xe7\xe3o"},{value:3,label:"Produ\xe7\xe3o"}]}),r.a.createElement(ye,{name:"orderby",label:"Ordenar por",value:B,onChange:function(e){T(e.target.value)},options:[{value:1,label:"Level"},{value:2,label:"Frequ\xeancia"}]}),r.a.createElement(ye,{name:"searchfor",label:"Buscar por",value:R,onChange:function(e){!function(e){G(e)}(e.target.value)},options:[{value:1,label:"Level"},{value:2,label:"Descri\xe7\xe3o"},{value:3,label:"Origem"}]})),r.a.createElement("div",{className:"grid-container-3-list"},r.a.createElement("div",null,""===R||"1"===R||"3"===R?r.a.createElement("div",null,""===R||"1"===R?r.a.createElement(ye,{name:"level-select",label:"Level",value:S,options:[{value:1,label:"Debug"},{value:2,label:"Warning"},{value:3,label:"Error"}],onChange:function(e){return z(e.target.value)}}):r.a.createElement(ye,{name:"layer-select",label:"Origem",value:F,options:[{value:1,label:"Backend"},{value:2,label:"Frontend"},{value:3,label:"Mobile"},{value:4,label:"Desktop"}],onChange:function(e){return A(e.target.value)}})):r.a.createElement(te,{name:"description",label:"Descri\xe7\xe3o",value:H,onChange:function(e){W(e.target.value)}})),r.a.createElement(b.a,{type:"submit",className:"list-advanced-button",variant:"contained",color:"primary",onClick:function(e){return Q.apply(this,arguments)},startIcon:r.a.createElement(q.a,null)},"Buscar"))))),r.a.createElement("main",null,r.a.createElement("div",{id:"list-logs-response"},i.map((function(e){return r.a.createElement(Se,{key:e.id,log:e})})))),r.a.createElement(ce,null))};t(133);var we=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,1)[0],l=t.token?"Bearer ".concat(t.token.access_token):"",o=Object(n.useState)(""),c=Object(O.a)(o,2),u=c[0],i=c[1];function m(e){return d.apply(this,arguments)}function d(){return(d=Object(h.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.prev=2,a.next=5,re.delete("log/"+u,{headers:{authorization:l}});case 5:if(204!==a.sent.status){a.next=9;break}return alert("Registro n\xe3o encontrado."),a.abrupt("return",[]);case 9:a.next=24;break;case 11:if(a.prev=11,a.t0=a.catch(2),401!==a.t0.statusCode){a.next=18;break}e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir."),a.next=24;break;case 18:if(404!==a.t0.statusCode){a.next=23;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 23:alert("Ocorreu um erro ao processar sua solicita\xe7\xe3o. Favor tentar novamente dentro de alguns minutos.");case 24:case"end":return a.stop()}}),a,null,[[2,11]])})))).apply(this,arguments)}return r.a.createElement("div",{id:"log-page",className:"container"},r.a.createElement(ee,{title:"Excluir log",description:"Aqui \xe9 poss\xedvel excluir logs.",menu:"log"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:m,className:"log-delete"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Exclus\xe3o"),r.a.createElement("div",{className:"log-delete-action"},r.a.createElement(te,{className:"log-delete-input",name:"id",label:"Id do log a ser exclu\xeddo",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(b.a,{type:"submit",className:"delete",variant:"contained",color:"primary",onClick:m,startIcon:r.a.createElement(U.a,null)},"Excluir"))))),r.a.createElement(ce,null))};t(134);var Ie=function(){var e=Object(s.f)(),a=Object(j.a)(),t=Object(O.a)(a,1)[0],l=t.token?"Bearer ".concat(t.token.access_token):"",o=Object(n.useState)(""),c=Object(O.a)(o,2),u=c[0],i=c[1],m=Object(n.useState)(""),d=Object(O.a)(m,2),p=d[0],v=d[1],g=Object(n.useState)(""),E=Object(O.a)(g,2),k=E[0],N=E[1],x=Object(n.useState)(""),y=Object(O.a)(x,2),C=y[0],S=y[1],z=Object(n.useState)(""),w=Object(O.a)(z,2),I=w[0],F=w[1],A=Object(n.useState)(""),D=Object(O.a)(A,2),L=D[0],B=D[1],q=Object(n.useState)(""),T=Object(O.a)(q,2),_=T[0],P=T[1],R=Object(n.useState)(""),G=Object(O.a)(R,2),U=G[0],M=G[1],H=Object(n.useState)(""),W=Object(O.a)(H,2),J=W[0],K=W[1];function Q(e){return V.apply(this,arguments)}function V(){return(V=Object(h.a)(f.a.mark((function a(n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),t.token||(e.push("/user/login"),alert("Sess\xe3o expirada! Favor fazer o login para prosseguir.")),a.prev=2,a.next=5,re.get("log/"+u,{headers:{authorization:l}});case 5:return r=a.sent,K(r.data.createdAt),a.next=9,re.put("/log",{id:u,name:p,description:k,userId:C,environmentId:I,layerId:L,levelId:_,statusId:U,createdAt:J},{headers:{authorization:l}});case 9:if(204!==a.sent.status){a.next=13;break}return alert("Registro n\xe3o encontrado."),a.abrupt("return",[]);case 13:a.next=28;break;case 15:if(a.prev=15,a.t0=a.catch(2),401!==a.t0.statusCode){a.next=22;break}e.push("/user/login"),alert("Sess\xe3o expirada. Favor fazer o login para prosseguir."),a.next=28;break;case 22:if(244!==a.t0.statusCode){a.next=27;break}return alert("Nenhum registro encontrado."),a.abrupt("return",[]);case 27:alert("Ocorreu um erro ao processar sua solicita\xe7\xe3o. Favor tentar novamente dentro de alguns minutos.");case 28:case"end":return a.stop()}}),a,null,[[2,15]])})))).apply(this,arguments)}return r.a.createElement("div",{id:"log-page",className:"container"},r.a.createElement(ee,{title:"Alterar log",description:"Aqui \xe9 poss\xedvel alterar os logs de erros.",menu:"log"}),r.a.createElement("div",{id:"nav-bar",className:"nav-bar-container"},r.a.createElement("form",{onSubmit:Q,className:"log-update"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Altera\xe7\xe3o"),r.a.createElement(te,{className:"update-id",name:"id",label:"Id",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(te,{className:"update-name",name:"name",label:"T\xedtulo",value:p,onChange:function(e){v(e.target.value)}}),r.a.createElement(xe,{name:"description",label:"Descri\xe7\xe3o",value:k,onChange:function(e){N(e.target.value)}}),r.a.createElement("div",{className:"grid-container-1-update"},r.a.createElement(te,{className:"update-user-id",name:"userId",label:"User Id",value:C,onChange:function(e){S(e.target.value)}}),r.a.createElement(ye,{name:"environment",label:"Ambiente",value:I,onChange:function(e){F(e.target.value)},options:[{value:1,label:"Desenvolvimento"},{value:2,label:"Homologa\xe7\xe3o"},{value:3,label:"Produ\xe7\xe3o"}]}),r.a.createElement(ye,{name:"layer",label:"Camada",value:L,onChange:function(e){B(e.target.value)},options:[{value:1,label:"Backend"},{value:2,label:"Frontend"},{value:3,label:"Mobile"},{value:4,label:"Desktop"}]})),r.a.createElement("div",{className:"grid-container-2-update"},r.a.createElement(ye,{name:"level",label:"Level",value:_,onChange:function(e){P(e.target.value)},options:[{value:1,label:"Debug"},{value:2,label:"Warning"},{value:3,label:"Error"}]}),r.a.createElement(ye,{name:"status",label:"Status",value:U,onChange:function(e){M(e.target.value)},options:[{value:1,label:"Arquivado"},{value:2,label:"Pendente"},{value:3,label:"Ignorado"}]}),r.a.createElement(b.a,{type:"submit",className:"update-log-button",variant:"contained",color:"primary",onClick:Q,startIcon:r.a.createElement(me.a,null)},"Gravar"))))),r.a.createElement(ce,null))},Fe=function(){return r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:g}),r.a.createElement(s.a,{path:"/main",component:Ne}),r.a.createElement(s.a,{path:"/user/login",component:se}),r.a.createElement(s.a,{path:"/user/registry",component:fe}),r.a.createElement(s.a,{path:"/user/list",component:Ee}),r.a.createElement(s.a,{path:"/user/create",component:de}),r.a.createElement(s.a,{path:"/user/update",component:pe}),r.a.createElement(s.a,{path:"/user/delete",component:ue}),r.a.createElement(s.a,{path:"/log/list",component:ze}),r.a.createElement(s.a,{path:"/log/create",component:Ce}),r.a.createElement(s.a,{path:"/log/update",component:Ie}),r.a.createElement(s.a,{path:"/log/delete",component:we})))},Ae=function(){return r.a.createElement(Fe,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null)),document.getElementById("root"))},68:function(e,a,t){e.exports=t.p+"static/media/logo.8ff1c14c.png"},74:function(e,a,t){e.exports=t.p+"static/media/logo-small.15e963db.png"},86:function(e,a,t){e.exports=t(135)},91:function(e,a,t){},92:function(e,a,t){},99:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.6c517c8d.chunk.js.map