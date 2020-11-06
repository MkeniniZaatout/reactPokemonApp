(this["webpackJsonpreact-pokemons-app"]=this["webpackJsonpreact-pokemons-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),s=a(3),o=(a(29),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear())}),i=function(e){var t;switch(e){case"Feu":t="red lighten-1";break;case"Eau":t="blue lighten-1";break;case"Plante":t="green lighten-1";break;case"Insecte":t="brown lighten-1";break;case"Normal":t="grey lighten-3";break;case"Vol":t="blue lighten-3";break;case"Poison":t="deep-purple accent-1";break;case"F\xe9e":t="pink lighten-4";break;case"Psy":t="deep-purple darken-2";break;case"Electrik":t="lime accent-1";break;case"Combat":t="deep-orange";break;default:t="grey"}return"chip ".concat(t)},m=a(2),u=function(e){var t=e.pokemon,a=e.borderColorCardPokemon,r=void 0===a?"#009688":a,l=Object(n.useState)(),u=Object(s.a)(l,2),p=u[0],d=u[1],h=Object(m.g)();return c.a.createElement("div",{className:"",onClick:function(){return e=t.id,void h.push("/pokemons/".concat(e));var e},onMouseEnter:function(){d(r)},onMouseLeave:function(){d("#f5f5f5")}},c.a.createElement("div",{className:"card horizontal",style:{borderColor:p}},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.picture,alt:t.name})),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.name),c.a.createElement("p",null,c.a.createElement("small",null,o(t.created))),t.types.map((function(e){return c.a.createElement("span",{className:i(e),key:e},e," ")}))))))},p=a(5),d=a(10),h=a(13),v=[{id:1,name:"Bulbizarre",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",types:["Plante","Poison"],created:new Date},{id:2,name:"Salam\xe8che",hp:28,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",types:["Feu"],created:new Date},{id:3,name:"Carapuce",hp:21,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",types:["Eau"],created:new Date},{id:4,name:"Aspicot",hp:16,cp:2,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",types:["Insecte","Poison"],created:new Date},{id:5,name:"Roucool",hp:30,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",types:["Normal","Vol"],created:new Date},{id:6,name:"Rattata",hp:18,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",types:["Normal"],created:new Date},{id:7,name:"Piafabec",hp:14,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",types:["Normal","Vol"],created:new Date},{id:8,name:"Abo",hp:16,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",types:["Poison"],created:new Date},{id:9,name:"Pikachu",hp:21,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",types:["Electrik"],created:new Date},{id:10,name:"Sabelette",hp:19,cp:3,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",types:["Normal"],created:new Date},{id:11,name:"M\xe9lof\xe9e",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",types:["F\xe9e"],created:new Date},{id:12,name:"Groupix",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",types:["Feu"],created:new Date}],f=function(){function e(){Object(d.a)(this,e)}return Object(h.a)(e,null,[{key:"getPokemons",value:function(){var e=this;return this.isDev?fetch("http://localhost:3001/pokemons").then((function(e){return e.json()})).catch((function(t){return e.handleError(t)})):new Promise((function(t){t(e.pokemons)}))}},{key:"getPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e)).then((function(e){return e.json()})).then((function(e){return t.isEmpty(e)?null:e})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.find((function(t){return e===t.id})))}))}},{key:"updatePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id,c=t.pokemons.findIndex((function(e){return e.id===n}));t.pokemons[c]=e,a(e)}))}},{key:"deletePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id;t.pokemons=t.pokemons.filter((function(e){return e.id!==n})),a({})}))}},{key:"addPokemon",value:function(e){var t=this;return e.created=new Date(e.created),this.isDev?fetch("http://localhost:3001/pokemons",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){t.pokemons.push(e),a(e)}))}},{key:"searchPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons?q=".concat(e)).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.filter((function(t){return t.name.includes(e)})))}))}},{key:"isEmpty",value:function(e){return 0===Object.keys(e).length}},{key:"handleError",value:function(e){console.error(e)}}]),e}();f.pokemons=v,f.isDev=!1;var E=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],m=o[1];return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",placeholder:"Rechercher un pok\xe9mon",value:a,onChange:function(e){return function(e){var t=e.target.value;r(t),t.length<=1?m([]):f.searchPokemon(t).then((function(e){return m(e)}))}(e)}})),c.a.createElement("div",{className:"collection"},i.map((function(e){return c.a.createElement(p.b,{key:e.id,to:"/pokemons/".concat(e.id),className:"collection-item"},e.name)})))))))},b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(m.g)();return Object(n.useEffect)((function(){fetch("http://localhost:3001/pokemons").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("h1",{className:"center"},"Pok\xe9dex"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"center"},c.a.createElement("button",{onClick:function(){l.push("/add")}},"Ajouter un pokemon")),c.a.createElement(E,null),c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement(u,{key:e.id,pokemon:e})})))))},k=function(){return c.a.createElement("div",{className:"preloader-wrapper big active"},c.a.createElement("div",{className:"spinner-layer spinner-blue"},c.a.createElement("div",{className:"circle-clipper left"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"gap-patch"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"circle-clipper right"},c.a.createElement("div",{className:"circle"}))))},g=(a(35),function(e){var t=e.match,a=Object(n.useState)(null),r=Object(s.a)(a,2),l=r[0],m=r[1];return Object(n.useEffect)((function(){fetch("http://localhost:3001/pokemons/".concat(t.params.id)).then((function(e){return e.json()})).then((function(e){e.id&&m(e)}))}),[t.params.id]),c.a.createElement("div",null,l?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("h2",{className:"header center"},l.name),c.a.createElement("div",{className:"card hoverable"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:l.picture,alt:l.name,style:{width:"250px",margin:"0 auto"}}),c.a.createElement(p.b,{to:"edit/".concat(l.id),className:"btn btn-floating halfway-fab waves-effect waves-light"},c.a.createElement("i",{className:"material-icons"},"edit"))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("table",{className:"bordered striped"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Nom"),c.a.createElement("td",null,c.a.createElement("strong",null,l.name))),c.a.createElement("tr",null,c.a.createElement("td",null,"Points de vie"),c.a.createElement("td",null,c.a.createElement("strong",null,l.hp))),c.a.createElement("tr",null,c.a.createElement("td",null,"D\xe9g\xe2ts"),c.a.createElement("td",null,c.a.createElement("strong",null,l.cp))),c.a.createElement("tr",null,c.a.createElement("td",null,"Types"),c.a.createElement("td",null,l.types.map((function(e){return c.a.createElement("span",{key:e,className:i(e)},e)})))),c.a.createElement("tr",null,c.a.createElement("td",null,"Date de cr\xe9ation"),c.a.createElement("td",null,o(l.created)))))),c.a.createElement("div",{className:"card-action"},c.a.createElement(p.b,{to:"/"},"Retour")))))):c.a.createElement("div",{className:"center"},c.a.createElement("h4",{className:"card-action"}," ",c.a.createElement(k,null)," ")))}),N=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["Normal"],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new Date;Object(d.a)(this,e),this.id=void 0,this.hp=void 0,this.cp=void 0,this.name=void 0,this.picture=void 0,this.types=void 0,this.created=void 0,this.id=t,this.hp=a,this.cp=n,this.name=c,this.picture=r,this.types=l,this.created=s},j=a(1),y=a(11),O=function(e){var t=e.pokemon,a=e.isEditForm,r=Object(m.g)(),l={name:{value:t.name,isValid:!0},hp:{value:t.hp,isValid:!0},cp:{value:t.cp,isValid:!0},types:{value:t.types,isValid:!0},picture:{value:t.picture,isValid:!0}},o=Object(n.useState)(l),u=Object(s.a)(o,2),p=u[0],d=u[1],h=function(e){return p.types.value.includes(e)},v=function(e){var t=e.target.name,a=e.target.value,n=Object(y.a)({},t,{value:a});d(Object(j.a)(Object(j.a)({},p),n))},E=function(){f.addPokemon(t).then((function(){r.push("/pokemons")}))},b=function(){var e=p;if(!a){var t={};if(p.picture.value.startsWith("https://assets.pokemon.com/assets/css2/img/pokedex/detail")&&p.picture.value.endWith(".png"))t={value:p.picture.value,error:"",isValid:!0};else{t={value:p.picture.value,error:"",isValid:!1}}e=Object(j.a)(Object(j.a)({},p),{picture:t})}if(/^[a-zA-Z\xe0\xe9\xe8 ]{3,25}$/.test(p.name.value)){var n={value:p.name.value,error:"",isValid:!0};e=Object(j.a)(Object(j.a)({},e),{name:n})}else{var c={value:p.name.value,error:"Le nom du pok\xe9mon est requis (1-25).",isValid:!1};e=Object(j.a)(Object(j.a)({},e),{name:c})}if(/^[0-9]{1,3}$/.test(p.hp.value)){var r={value:p.hp.value,error:"",isValid:!0};e=Object(j.a)(Object(j.a)({},e),{hp:r})}else{var l={value:p.hp.value,error:"Les points de vie du pok\xe9mon sont compris entre 0 et 999.",isValid:!1};e=Object(j.a)(Object(j.a)({},e),{hp:l})}if(/^[0-9]{1,2}$/.test(p.cp.value)){var s={value:p.cp.value,error:"",isValid:!0};e=Object(j.a)(Object(j.a)({},e),{cp:s})}else{var o={value:p.cp.value,error:"Les d\xe9g\xe2ts du pok\xe9mon sont compris entre 0 et 99",isValid:!1};e=Object(j.a)(Object(j.a)({},e),{cp:o})}return d(e),e.name.isValid&&e.hp.isValid&&e.cp.isValid},k=function(e){return(1!==p.types.value.length||!h(e))&&!(p.types.value.length>=3&&!h(e))};return c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),b()&&(t.picture=p.picture.value,t.name=p.name.value,t.cp=p.cp.value,t.hp=p.hp.value,t.types=p.types.value,a?f.updatePokemon(t).then((function(){r.push("/pokemons/".concat(t.id))})):E())}(e)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("div",{className:"card hoverable"},a&&c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.picture,alt:t.name,style:{width:"250px",margin:"0 auto"}}),c.a.createElement("span",{className:"btn-floating halfway-fab waves-effect waves-light"},c.a.createElement("i",{onClick:function(){window.confirm("Voulez-vous vraiment supprimer le pokemon ?")&&f.deletePokemon(t).then((function(){return r.push("/pokemons")}))},className:"material-icons"},"delete"))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"picture"},"Image"),c.a.createElement("input",{id:"picture",name:"picture",type:"text",className:"form-control",value:p.picture.value,onChange:function(e){return v(e)},required:!0}),p.picture.error&&c.a.createElement("div",{className:"card-panel red accent-1"},p.picture.error)))),c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Nom"),c.a.createElement("input",{id:"name",name:"name",type:"text",className:"form-control",placeholder:"Nom du pok\xe9mon",value:p.name.value,onChange:function(e){return v(e)},required:!0}),p.name.error&&c.a.createElement("div",{className:"card-panel red accent-1"},p.name.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"hp"},"Point de vie"),c.a.createElement("input",{id:"hp",name:"hp",type:"number",className:"form-control",min:"0",max:"999",value:p.hp.value,onChange:function(e){return v(e)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"cp"},"D\xe9g\xe2ts"),c.a.createElement("input",{id:"cp",name:"cp",type:"number",className:"form-control",min:"0",max:"999",value:p.cp.value,onChange:function(e){return v(e)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Types"),["Plante","Feu","Eau","Insecte","Normal","Electrik","Poison","Fe\u0301e","Vol","Combat","Psy"].map((function(e){return c.a.createElement("div",{key:e,style:{marginBottom:"10px"}},c.a.createElement("label",null,c.a.createElement("input",{id:e,type:"checkbox",className:"filled-in",value:p.types.value.toString(),checked:h(e),onChange:function(t){return function(e,t){var a;a={value:t.target.checked?p.types.value.concat([e]):p.types.value.filter((function(t){return t!==e}))},d(Object(j.a)(Object(j.a)({},p),{types:a}))}(e,t)},disabled:!k(e)}),c.a.createElement("span",null,c.a.createElement("p",{className:i(e)},e))))})))),c.a.createElement("div",{className:"card-action center"},c.a.createElement("button",{type:"submit",className:"btn"},"Valider")))))))},w=function(){var e=Object(n.useState)((new Date).getTime()),t=Object(s.a)(e,1)[0],a=Object(n.useState)(new N(t,void 0,void 0,void 0,void 0,void 0,new Date)),r=Object(s.a)(a,1)[0];return c.a.createElement("div",null,c.a.createElement("h1",{className:"header center"},"Ajouter un pokemon"),c.a.createElement(O,{pokemon:r,isEditForm:!1}))},x=function(e){var t=e.match;console.log("match :",t);var a=Object(n.useState)(null),r=Object(s.a)(a,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){fetch("http://localhost:3001/pokemons/".concat(t.params.id)).then((function(e){return e.json()})).then((function(e){e.id&&o(e)}))}),[t.params.id]),c.a.createElement("div",null,l?c.a.createElement("div",null,c.a.createElement("h2",{className:"header center"},"\xc9diter ",l.name),c.a.createElement(O,{pokemon:l,isEditForm:!0})):c.a.createElement("h4",{className:"center"},"Aucun pok\xe9mon \xe0 afficher !"))},P=function(){return c.a.createElement("div",{className:"center"},c.a.createElement("img",{src:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",alt:"Page non trouv\xe9e"}),c.a.createElement("h1",null,"404 NOT FOUND"),c.a.createElement("h2",null,"Hey, cette page n'existe pas !"),c.a.createElement(p.b,{to:"/",className:"waves-effect waves-teal btn-flat"},"Retourner \xe0 l'accueil"))},D=function(){function e(){Object(d.a)(this,e)}return Object(h.a)(e,null,[{key:"login",value:function(e,t){var a=this,n="pikachu"===e&&"pikachu"===t;return new Promise((function(e){setTimeout((function(){a.isAuthenticated=n,e(n)}),1e3)}))}}]),e}();D.isAuthenticated=!1;var V=function(){var e=Object(m.g)(),t=Object(n.useState)({username:{value:""},password:{value:""}}),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)("Vous \xeates d\xe9connect\xe9. (pikachu / pikachu)"),i=Object(s.a)(o,2),u=i[0],p=i[1],d=function(e){var t=e.target.name,a=e.target.value,n=Object(y.a)({},t,{value:a});l(Object(j.a)(Object(j.a)({},r),n))},h=function(t){t.preventDefault(),function(){var e=r;if(r.username.value.length<3){var t={value:r.username.value,error:"Votre pr\xe9nom doit faire au moins 3 caract\xe8res de long.",isValid:!1};e=Object(j.a)(Object(j.a)({},e),{username:t})}else{var a={value:r.username.value,error:"",isValid:!0};e=Object(j.a)(Object(j.a)({},e),{username:a})}if(r.password.value.length<6){var n={value:r.password.value,error:"Votre mot de passe doit faire au moins 6 caract\xe8res de long.",isValid:!1};e=Object(j.a)(Object(j.a)({},e),{password:n})}else{var c={value:r.password.value,error:"",isValid:!0};e=Object(j.a)(Object(j.a)({},e),{password:c})}return l(e),e.username.isValid&&e.password.isValid}()&&(p("\ud83d\udc49 Tentative de connexion en cours ..."),D.login(r.username.value,r.password.value).then((function(t){t?e.push("/pokemons"):p("\ud83d\udd10 Identifiant ou mot de passe incorrect.")})))};return c.a.createElement("form",{onSubmit:function(e){return h(e)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8 offset-m2"},c.a.createElement("div",{className:"card hoverable"},c.a.createElement("div",{className:"card-stacked"},c.a.createElement("div",{className:"card-content"},u&&c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"card-panel grey lighten-5"},u)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"username"},"Identifiant"),c.a.createElement("input",{id:"username",type:"text",name:"username",className:"form-control",value:r.username.value,onChange:function(e){return d(e)}}),r.username.error&&c.a.createElement("div",{className:"card-panel red accent-1"},r.username.error)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Mot de passe"),c.a.createElement("input",{id:"password",type:"password",name:"password",className:"form-control",value:r.password.value,onChange:function(e){return d(e)}}),r.password.error&&c.a.createElement("div",{className:"card-panel red accent-1"},r.password.error))),c.a.createElement("div",{className:"card-action center"},c.a.createElement("button",{type:"submit",className:"btn"},"Valider")))))))},C=a(23),S=function(e){var t=e.component,a=Object(C.a)(e,["component"]);return c.a.createElement(m.b,Object.assign({},a,{render:function(e){return D.isAuthenticated?c.a.createElement(t,e):c.a.createElement(m.a,{to:{pathname:"/login"}})}}))},F=a(21),T=a(22),A=a.n(T),I=function(){return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper teal"},c.a.createElement(p.b,{to:"/",className:"brand-logo center"},"Pok\xe9dex"),c.a.createElement(F.Icon,{icon:A.a}))),c.a.createElement(m.d,null,c.a.createElement(S,{exact:!0,path:"/",component:b}),c.a.createElement(m.b,{exact:!0,path:"/login",component:V}),c.a.createElement(S,{exact:!0,path:"/pokemons",component:b}),c.a.createElement(S,{exact:!0,path:"/pokemons/:id",component:g}),c.a.createElement(S,{exact:!0,path:"/add",component:w}),c.a.createElement(S,{path:"/pokemons/edit/:id",component:x}),c.a.createElement(m.b,{component:P}))))};l.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0c21b303.chunk.js.map