(this["webpackJsonppoke-dex"]=this["webpackJsonppoke-dex"]||[]).push([[0],{122:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),s=n(14),i=n.n(s),o=(n(122),n(102)),l=n(13),p=(n(71),n(54)),m=n(8),u=n.n(m),d=n(18),j=(n(32),n(9)),b=n(17),h=n(263),g=n(266),f=n(231),x=n(268),O=n(269),k=n(270),v=n(271),w=Object(h.a)((function(e){var t;return{pokedexContainer:(t={overflow:"hidden"},Object(j.a)(t,e.breakpoints.up("xs"),{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"2rem",overflow:"hidden"}),Object(j.a)(t,e.breakpoints.up("md"),{paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"2rem"}),Object(j.a)(t,e.breakpoints.up("lg"),{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"2rem"}),t),pokecard:{position:"relative",height:"8.8rem",width:"6.5rem",maxHeight:"9rem",backgroundColor:"#444444",boxShadow:"2px 2px 5px black"},rank:{position:"absolute",zIndex:"1",fontSize:"0.6rem",padding:"0.05rem 0.5rem 0.05rem 0.5rem",backgroundColor:"#CEBF7B",borderBottomRightRadius:"0.4rem"},cardImage:{height:"6rem",padding:"0.5rem"},titleContent:{margin:"0.5rem 0.05rem 0.2rem 0.05rem",padding:"0 0"},title:{fontSize:"0.80rem",margin:"0rem 0.5rem ",padding:"0 0",color:"white"}}}));function y(e,t,n){var a=w();return e.map((function(e,c){return Object(r.jsx)(g.a,{item:!0,onClick:function(){return function(e,t){t.push("/pokemon/"+e.id),n("")}(e,t)},children:Object(r.jsxs)(f.a,{className:a.pokecard,children:[Object(r.jsx)(x.a,{variant:"h1",component:"h5",className:a.rank,children:"#"+e.id}),Object(r.jsxs)(O.a,{children:[Object(r.jsx)(k.a,{className:a.cardImage,component:"img",alt:e.name,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),title:e.name}),Object(r.jsx)(v.a,{className:a.titleContent,children:Object(r.jsx)(x.a,{align:"center",display:"block",variant:"p",component:"h6",className:a.title,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})})]})]})},e.keys)}))}var B=function(e){var t=e.pokemons,n=e.setKeyword,a=Object(b.f)(),c=w();return Object(r.jsx)(g.a,{container:!0,spacing:1,justify:"center",className:c.pokedexContainer,children:y(t,a,n)})};function C(e){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){return fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.log(e)})),function(){!1}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return I.apply(this,arguments)}function I(){return(I=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){return fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(t){e(404)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return P.apply(this,arguments)}function P(){return(P=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.log(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.log(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return F.apply(this,arguments)}function F(){return(F=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(t.ability.url));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.log(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=n(272),M=n(273),T=n(274),H=Object(h.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},customHoverFocus:{"&:hover, &.Mui-focusVisible":{backgroundColor:"white"},backgroundColor:"#888",marginBottom:"1rem"},loading:{color:"#EEE",alignSelf:"center"}}}));var K=function(e){var t=e.pokemons,n=e.setPokemons,c=e.setKeyword,s=e.pokemonsArray,i=e.setPokemonsArray,o=e.loadMore,m=e.setLoadMore,j=Object(a.useState)("https://pokeapi.co/api/v2/pokemon/?limit=50"),b=Object(l.a)(j,2),h=(b[0],b[1],Object(a.useState)("")),f=Object(l.a)(h,2),x=(f[0],f[1],Object(a.useState)("")),O=Object(l.a)(x,2),k=(O[0],O[1],Object(a.useState)(!0)),v=Object(l.a)(k,2),w=v[0],y=v[1],N=Object(a.useState)(0),S=Object(l.a)(N,2),I=S[0],A=S[1],P=Object(a.useState)(1),_=Object(l.a)(P,2),E=_[0],R=_[1],F=H();return Object(a.useEffect)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){return(t=Object(d.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("https://pokeapi.co/api/v2/pokemon/?limit=1200");case 2:t=e.sent,r=t.results.map((function(e){var t=e.url.split("/"),n=t[t.length-2];return{key:n,id:n,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png")}})),i(r),n(r.slice(0,50)),A(50),R(1),y(!1),m(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)},function(){return t.apply(this,arguments)}();case 3:case"end":return e.stop()}}),e)}))),[]),w?Object(r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)(z.a,{className:F.loading})}):Object(r.jsxs)("div",{style:{backgroundColor:"#333333",overflow:"hidden",paddingRight:"0rem",marginRight:"0rem"},children:[Object(r.jsx)(B,{pokemons:t,setKeyword:c}),Object(r.jsx)("hr",{style:{padding:"0rem",overflow:"hidden"}}),Object(r.jsx)(g.a,{container:!0,spacing:"center",justify:"center",children:Object(r.jsx)(M.a,{className:F.customHoverFocus,"aria-label":"Load More",children:Object(r.jsx)(T.a,{color:"error",onClick:function(){o||(n([].concat(Object(p.a)(t),Object(p.a)(s.slice(I,I+50)))),A(I+50),R(E+1))}})})})]})},W=n(283),U=n(25),G=Object(h.a)((function(e){var t,n,r;return{root:{},paperBackground:{color:"black",backgroundColor:"#555",boxShadow:"none",margin:"0rem",padding:"0rem"},evoChart:(t={borderRadius:"2%",border:"2px solid black",boxShadow:"2px 2px 5px black",padding:"1rem",backgroundImage:"linear-gradient(120deg, rgb(68, 68, 71), rgb(15, 15, 24))"},Object(j.a)(t,e.breakpoints.up("xs"),{flexDirection:"column"}),Object(j.a)(t,e.breakpoints.up("md"),{flexDirection:"row"}),t),evoImage:Object(j.a)({backgroundImage:"linear-gradient(120deg, rgb(136, 136, 139), rgb(43, 43, 46))",borderRadius:"50%",border:"5px solid white",boxShadow:"0.3rem 0.3rem 1rem black",marginBottom:"1rem",width:"9rem",padding:"0.8rem"},e.breakpoints.up("xs"),{width:"7rem"}),evoImageSmall:Object(j.a)({backgroundImage:"linear-gradient(120deg, rgb(136, 136, 139), rgb(43, 43, 46))",borderRadius:"50%",border:"5px solid white",boxShadow:"0.3rem 0.3rem 1rem black",marginBottom:"1rem",width:"7rem",padding:"0.2rem"},e.breakpoints.up("xs"),{width:"5rem"}),changeFlex:{},changeArrow:(n={},Object(j.a)(n,e.breakpoints.up("xs"),{flexDirection:"column"}),Object(j.a)(n,e.breakpoints.up("md"),{flexDirection:"row"}),n),arrow:(r={fontSize:"3rem",color:"#aaa"},Object(j.a)(r,e.breakpoints.up("xs"),{marginBottom:"2rem"}),Object(j.a)(r,e.breakpoints.up("md"),{transform:"rotate(-90deg)",marginLeft:"1rem",marginRight:"1rem",marginBottom:"2rem"}),r)}})),J=2,V=function(e,t){var n=e.length;return console.log("length  "+n),e.map((function(e,a){return console.log("evo "+e.sprite),Array.isArray(e)?Object(r.jsx)(g.a,{item:!0,md:J,children:Object(r.jsx)(g.a,{container:!0,justify:"space-evenly",alignItems:"center",spacing:"5",className:t.changeFlex,children:q(e,t)})}):Object(r.jsx)(g.a,{item:!0,direction:"row",justify:"center",alignContent:"center",children:Object(r.jsxs)(g.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:t.changeArrow,children:[Object(r.jsxs)(U.b,{to:{pathname:"/pokemon/"+e.species_name,key:e.species_name},children:[Object(r.jsx)(W.a.Img,{src:e.sprite,alt:e.species_name,className:t.evoImage}),Object(r.jsx)("h3",{className:"evo-name",children:e.species_name.charAt(0).toUpperCase()+e.species_name.slice(1)})]}),n!==a+1&&Object(r.jsx)("i",{className:t.arrow,children:Object(r.jsx)("i",{className:"fa fa-chevron-down"})})]})})}))};function q(e,t){return J=e.length>2?8:2,e.map((function(e,n){return Object(r.jsx)(g.a,{item:!0,children:Object(r.jsxs)(U.b,{to:{pathname:"/pokemon/"+e.species_name,key:e.species_name},children:[Object(r.jsx)(W.a.Img,{src:e.sprite,alt:e.species_name,className:t.evoImageSmall}),Object(r.jsx)("h3",{className:"evo-name",children:e.species_name.charAt(0).toUpperCase()+e.species_name.slice(1)})]})})}))}var Q=function(e){var t=e.evolution,n=G();return Object(r.jsx)(f.a,{className:n.paperBackground,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)("h3",{style:{textAlign:"center",margin:"1rem 0rem"},children:"Evolutions"}),Object(r.jsx)(g.a,{container:!0,justify:"center",alignItems:"center",className:n.evoChart,children:V(t,n)})]})})},X=n(275),Y=n(276),Z=(n(128),n(280));var $=function(e){var t=e.abilities,n=Object(a.useState)([]),c=Object(l.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(!1),m=Object(l.a)(o,2),j=m[0],b=m[1],h=Object(a.useState)(""),g=Object(l.a)(h,2),f=g[0],x=g[1],O=Object(a.useState)(""),k=Object(l.a)(O,2),v=k[0],w=k[1],y=Object(a.useState)(""),B=Object(l.a)(y,2),C=B[0],N=B[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:e.sent.map((function(e,t){var n=e.name,r="",a="";e.flavor_text_entries.map((function(e,t){"en"===e.language.name&&(r=e.flavor_text)})),e.effect_entries.map((function(e,t){"en"===e.language.name&&(a=e.effect)}));var c={id:n,name:n,summary:r,effect:a};i((function(e){return[].concat(Object(p.a)(e),[c])}))}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{style:{textAlign:"left",marginLeft:"20px",color:"#EEE"},children:"Abilities"}),Object(r.jsx)(Y.a,{className:"no-gutters",children:function(e){var t=function(){b(!1)};return e.map((function(e,n){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(X.a,{xs:"12",sm:"6",md:"12",lg:"12",xl:"6",style:{cursor:"pointer"},onClick:function(){return function(e){console.log("in"+e),x(s[e].name),w(s[e].summary),N(s[e].effect),b(!0)}(n)},children:Object(r.jsxs)("h5",{className:"ability-style",children:[e.ability.name+" ",Object(r.jsx)("i",{className:"fa fa-info-circle",style:{fontSize:"0.8rem"}})]})}),Object(r.jsxs)(Z.a,{show:j,onHide:t,style:{width:"100%"},children:[Object(r.jsx)(Z.a.Header,{closeButton:!0,children:Object(r.jsx)(Z.a.Title,{children:f})}),Object(r.jsx)(Z.a.Header,{children:Object(r.jsx)(Z.a.Body,{children:v})}),Object(r.jsx)(Z.a.Header,{children:Object(r.jsx)(Z.a.Body,{children:C})})]})]})}))}(t)})]})};function ee(e){var t={normal:"linear-gradient(#A4ACAF 100%,transparent)",fighting:"linear-gradient(#D56723 100%,transparent)",flying:"linear-gradient(to bottom,#3DC7EF 50%, #BDB9B8 50%)",poison:"linear-gradient(#B97FC9 100%,transparent)",ground:"linear-gradient(to bottom,#F7DE3F 50%, #AB9842 50%)",rock:"linear-gradient(#A38C21 100%,transparent)",bug:"linear-gradient(#729F3F 100%,transparent)",ghost:"linear-gradient(#7B62A3 100%,transparent)",steel:"linear-gradient(#9EB7B8 100%,transparent)",fire:"linear-gradient(#FD7D24 100%,transparent)",water:"linear-gradient(#4592C4 100%,transparent)",grass:"linear-gradient(#9BCC50 100%,transparent)",electric:"linear-gradient(#EED535 100%,transparent)",psychic:"linear-gradient(#F366B9 100%,transparent)",ice:"linear-gradient(#51C4E7 100%,transparent)",dragon:"linear-gradient(to bottom,#53A4CF 50%, #F16E57 50%)",dark:"linear-gradient(#717171 100%,transparent)",fairy:"linear-gradient(#FDB9E9 100%,transparent)",unknown:"linear-gradient(#000 100%,transparent)",shadow:"linear-gradient(#000 100%,transparent)"};return e.map((function(e,n){return Object(r.jsx)(X.a,{xs:"6",sm:"6",md:"6",lg:"6",xl:"6",children:Object(r.jsx)("h5",{className:"ability-style",style:{backgroundImage:t[e.type.name],color:"white"},children:e.type.name},e.type.name)})}))}var te=function(e){var t=e.types;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{style:{textAlign:"left",marginLeft:"20px",color:"#EEE"},children:"Type"}),Object(r.jsx)(Y.a,{className:"no-gutters",children:ee(t)})]})};n(107);function ne(e,t,n){return e.map((function(e,t){return"special-attack"!==e.stat.name&&"special-defense"!==e.stat.name&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(X.a,{className:"stat-row",children:[console.log(e.stat.name),Object(r.jsx)("h6",{className:"stat-col",children:e.stat.name}),Object(r.jsx)("p",{style:{padding:"0rem",margin:"0rem 0rem 0.4rem"},children:e.base_stat})]})})}))}var re=function(e){var t=e.stats,n=Object(a.useState)([]),c=Object(l.a)(n,2);return c[0],c[1],Object(r.jsx)(Y.a,{className:"no-gutters stat-row stat",children:ne(t)})},ae=n(282),ce=n(277),se=Object(h.a)((function(e){var t,n;return{root:{display:"flex",flexGrow:1,overflow:"hidden"},container:(t={backgroundColor:"#555",padding:"0rem 0rem",overflow:"hidden"},Object(j.a)(t,e.breakpoints.up("sm"),{padding:"0rem 5rem"}),Object(j.a)(t,e.breakpoints.up("md"),{padding:"0rem 2rem"}),t),cardLeft:Object(j.a)({backgroundColor:"#333",padding:"0rem",borderRadius:"0.5rem",marginBottom:"2rem",boxShadow:"2px 2px 5px black"},e.breakpoints.up("md"),{marginBottom:"0rem"}),cardRight:{backgroundColor:"#333",padding:"1rem",borderRadius:"0.5rem",boxShadow:"2px 2px 5px black"},loading:{color:"#EEE",alignSelf:"center",overflow:"hidden",paddingRight:"0rem",marginRight:"0rem"},paperBackground:{color:"black",backgroundColor:"#555",boxShadow:"none",margin:"0 2rem"},pokeImage:(n={maxWidth:"15rem",margin:"1.5rem auto"},Object(j.a)(n,e.breakpoints.up("sm"),{margin:"0rem auto",maxWidth:"25rem"}),Object(j.a)(n,e.breakpoints.up("md"),{margin:"0rem auto",maxWidth:"20rem"}),n)}}));var ie=function(e){var t=e.pokemon,n=e.evolution,a=e.pokeDetails,c=e.prevBtn,s=se(),i=Object(b.f)(),o=function(){i.push("/pokemon/"+(t.id-1))},l=function(){i.push("/pokemon/"+(t.id+1))};return Object(r.jsx)("div",{className:s.container,children:Object(r.jsxs)(g.a,{container:!0,direction:"column",spacing:2,justify:"center",style:{backgroundColor:"#555",paddingTop:"0.5rem"},children:[Object(r.jsx)(g.a,{item:!0,children:Object(r.jsx)(f.a,{className:s.paperBackground,children:Object(r.jsxs)(g.a,{container:!0,justify:"space-between",children:[Object(r.jsx)(g.a,{item:!0,children:Object(r.jsx)(ae.a,{disabled:!c,className:"btn-dark",onClick:o,children:Object(r.jsx)("i",{className:"fa fa-arrow-left"})})}),Object(r.jsx)(g.a,{item:!0,children:Object(r.jsxs)("h4",{style:{margin:"0.3rem 1rem 0rem",textAlign:"center",color:"#eee"},children:[Object(r.jsxs)("span",{style:{color:"#BBB"},children:[" ","#"+t.id+"   "]})," ",t.name.toUpperCase()," "]})}),Object(r.jsx)(g.a,{item:!0,children:Object(r.jsx)(ae.a,{className:"btn-dark",onClick:l,children:Object(r.jsx)("i",{className:"fa fa-arrow-right"})})})]})})}),Object(r.jsx)(g.a,{item:!0,children:Object(r.jsx)(f.a,{className:s.paperBackground,children:Object(r.jsxs)(g.a,{container:!0,alignItems:"spac",justify:"space-between",children:[Object(r.jsxs)(g.a,{xs:12,sm:12,md:6,item:!0,className:s.cardLeft,children:[Object(r.jsx)(g.a,{container:!0,className:s.card,children:Object(r.jsx)(ce.a,{className:s.pokeImage,src:t.sprites.other["official-artwork"].front_default})}),Object(r.jsx)(re,{stats:t.stats})]}),Object(r.jsxs)(g.a,{item:!0,xs:12,sm:12,md:6,className:s.cardRight,children:[Object(r.jsx)("h5",{style:{margin:"1rem"},className:"poke-details",children:a}),Object(r.jsxs)(g.a,{item:!0,container:!0,children:[Object(r.jsx)(g.a,{item:!0,xs:6,children:Object(r.jsx)("h5",{className:"physic-details",children:"Height: "+t.height/10+"m"})}),Object(r.jsx)(g.a,{item:!0,xs:6,children:Object(r.jsx)("h5",{className:"physic-details",children:"Weight: "+t.weight/10+"kg"})})]}),Object(r.jsx)($,{abilities:t.abilities}),Object(r.jsx)(te,{types:t.types})]})]})})}),Object(r.jsx)(g.a,{item:!0,children:Object(r.jsx)(f.a,{className:s.paperBackground,children:"404"!=n&&n.length>1&&Object(r.jsx)(Q,{evolution:n})})})]})})};var oe=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!0),o=Object(l.a)(i,2),p=o[0],m=o[1],j=Object(a.useState)([]),h=Object(l.a)(j,2),g=(h[0],h[1]),f=Object(a.useState)([]),x=Object(l.a)(f,2),O=x[0],k=x[1],v=Object(a.useState)(""),w=Object(l.a)(v,2),y=w[0],B=w[1],C=Object(a.useState)(!1),N=Object(l.a)(C,2),I=N[0],P=N[1],E=Object(a.useState)(!1),R=Object(l.a)(E,2),F=R[0],L=R[1],D=(Object(b.f)(),"https://pokeapi.co/api/v2"+e.location.pathname);return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t,n,r,a,c,i,o,l,p,d,j,b,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(D);case 2:if(404!==(t=e.sent)){e.next=7;break}P(!0),e.next=40;break;case 7:return P(!1),s(t),t.id<2?L(!1):L(!0),e.next=12,A(t.species.url);case 12:return n=e.sent,g(n),n.flavor_text_entries.map((function(e,t){"en"===e.language.name&&B(e.flavor_text)})),e.next=17,_(n.evolution_chain.url);case 17:r=e.sent,a=[],c=r.chain,0;do{if(i=c.evolves_to.length,o=c.species.url.split("/"),l=o[o.length-2],a.push({id:l,species_name:c.species.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(l,".png")}),i>1){for(p=[],d=0;d<i;d++)o=c.evolves_to[d].species.url.split("/"),l=o[o.length-2],p.push({id:l,species_name:c.evolves_to[d].species.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(l,".png")});a=a.concat([p]),c=c.evolves_to[0].evolves_to[0]}else c=c.evolves_to[0]}while(c&&c.hasOwnProperty("evolves_to"));if(Array.isArray(a[a.length-1])){e.next=32;break}return console.log("inside last form"),e.next=26,A("https://pokeapi.co/api/v2/pokemon-species/"+a[a.length-1].id);case 26:j=e.sent,b=[],j.varieties.forEach((function(e,t){if(console.log("inside loop"),!e.is_default&&e.pokemon.name.includes("mega")){var n=e.pokemon.url.split("/"),r=n[n.length-2];console.log("inside iff"+e.pokemon.url),b.push({id:r,species_name:e.pokemon.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(r,".png")})}})),b.length>0&&(a=a.concat([b])),e.next=39;break;case 32:return console.log("inside last form"),e.next=35,A("https://pokeapi.co/api/v2/pokemon-species/"+a[a.length-1][0].id);case 35:h=e.sent,b=[],h.varieties.forEach((function(e,t){if(console.log("inside loop"),!e.is_default&&e.pokemon.name.includes("mega")){var n=e.pokemon.url.split("/"),r=n[n.length-2];console.log("inside iff"+e.pokemon.url),b.push({id:r,species_name:e.pokemon.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(r,".png")})}})),b.length>0&&(a=a.concat([b]));case 39:k(a);case 40:m(!1);case 41:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m(!0),function(){e.apply(this,arguments)}()}),[D]),p?Object(r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)(z.a,{})}):I?Object(r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:Object(r.jsx)("h4",{style:{color:"#ddd",overflow:"hidden"},children:" No Pokemon Found For this Search"})}):Object(r.jsx)(ie,{pokemon:c,evolution:O,pokeDetails:y,prevBtn:F})},le=n(278),pe=n(279),me=n(284),ue=n(281),de=n(34),je=n(108),be=n.n(je),he=Object(h.a)((function(e){var t,n;return{root:{flexGrow:1,overflow:"hidden",paddingRight:"0rem",marginRight:"0rem"},customizeToolbar:{overflow:"hidden",paddingRight:"0rem",marginRight:"0rem",maxHeight:1,backgroundColor:"#222"},menuButton:{marginRight:e.spacing(2)},title:Object(j.a)({display:"flex",position:"relative",marginLeft:"1rem",color:"#A0822E",cursor:"pointer",alignItems:"center"},e.breakpoints.up("sm"),{marginLeft:"2.0rem"}),small:{width:e.spacing(3),height:e.spacing(3)},search:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(de.b)(e.palette.common.white,.1),"&:hover":{backgroundColor:Object(de.b)(e.palette.common.white,.2)}},Object(j.a)(t,"position","absolute"),Object(j.a)(t,"marginRight",0),Object(j.a)(t,"right","1rem"),Object(j.a)(t,"height",40),Object(j.a)(t,"width","40%"),Object(j.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"30%"}),t),searchIcon:{padding:e.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",color:"#BBB",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"#BBB"},resize:{height:9,color:"#DDD",borderColor:"#BBB"},searchInput:(n={color:"#ddd",padding:e.spacing(0,1,1,0),marginLeft:"calc(1em + ".concat(e.spacing(4),"px)"),marginRight:"calc(1em + ".concat(e.spacing(3),"px)"),transition:e.transitions.create("width"),width:"80%",fontSize:10},Object(j.a)(n,e.breakpoints.up("sm"),{width:"80%","&:focus":{width:"80%"}}),Object(j.a)(n,e.breakpoints.up("md"),{width:"90%","&:focus":{width:"90%"}}),n)}}));var ge=function(e){e.pokemons;var t=e.setPokemons,n=e.keyword,a=e.setKeyword,c=e.pokemonsArray,s=(e.setPokemonsArray,e.loadMore,e.setLoadMore),i=Object(b.f)(),o=function(){var e=Object(d.a)(u.a.mark((function e(n){var r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>1)){e.next=7;break}r=c.filter((function(e){return e.name.includes(n)})),t(r),s(!1),e.next=17;break;case 7:if(!(n.length>0&&n.length<2)){e.next=14;break}a=c.slice(0,200),i=a.filter((function(e){return e.name.includes(n)})),s(!1),t(i),e.next=17;break;case 14:return s(!0),e.next=17,t(c.slice(0,50));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=he();return Object(r.jsx)("div",{className:l.root,children:Object(r.jsx)(le.a,{position:"static",children:Object(r.jsxs)(pe.a,{className:l.customizeToolbar,children:[Object(r.jsxs)("div",{className:l.title,onClick:function(){a(""),i.push("/")},children:[Object(r.jsx)(me.a,{src:"/poke-dex/pokeball.png",className:l.small}),Object(r.jsx)(x.a,{variant:"h5",noWrap:!0,children:"Pokedex"})]}),Object(r.jsxs)("div",{className:l.search,children:[Object(r.jsx)("div",{className:l.searchIcon,children:Object(r.jsx)(be.a,{})}),Object(r.jsx)(ue.a,{onChange:function(e){var t=e.target.value.toLowerCase();a(t),o(t)},onKeyDownCapture:function(e){"Enter"===e.key&&(i.push("/pokemon/"+e.target.value.toLowerCase()),e.target.value="")},className:l.searchInput,InputProps:{classes:{input:l.resize}},InputLabelProps:{style:{color:"#BBB",borderBottomColor:"#BBB"}},label:"Pokemon",variant:"filled",value:n,size:"small"})]})]})})})};var fe=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(l.a)(s,2),p=i[0],m=i[1],u=Object(a.useState)([]),d=Object(l.a)(u,2),j=d[0],h=d[1],g=Object(a.useState)(!0),f=Object(l.a)(g,2),x=f[0],O=f[1];return Object(r.jsxs)(U.a,{children:[Object(r.jsx)(ge,{pokemons:p,setPokemons:m,keyword:n,setKeyword:c,pokemonsArray:j,setPokemonsArray:h,loadMore:x,setLoadMore:O}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(r.jsx)(K,{pokemons:p,setPokemons:m,setKeyword:c,pokemonsArray:j,setPokemonsArray:h,loadMore:x,setLoadMore:O})}}),Object(r.jsx)(b.a,{exact:!0,path:"/pokemon/:name",render:function(e){return Object(r.jsx)(oe,Object(o.a)({},e))}})]})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,286)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(fe,{})}),document.getElementById("root")),xe()},32:function(e,t,n){}},[[229,1,2]]]);
//# sourceMappingURL=main.f2b5324b.chunk.js.map