(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{138:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("h4",null,e.header),r.a.createElement("p",null,e.description))}},61:function(e,t,a){"use strict";a.r(t),function(e){var n=a(8),r=a.n(n),c=a(0),l=a.n(c),o=a(138),i=(a(52),a(17)),s=a.n(i),m=a(50),u=a(51),d="https://otm-dispatch-strapi.herokuapp.com",p="".concat(d,"/solutions-pages");t.default=function(){var t=Object(c.useState)([]),a=r()(t,2),n=(a[0],a[1]),i=Object(c.useState)([]),E=r()(i,2),b=E[0],h=E[1],v=Object(c.useState)([]),S=r()(v,2),f=S[0],N=S[1],g=Object(c.useState)([]),j=r()(g,2),w=j[0],x=j[1],y=Object(c.useState)([]),k=r()(y,2),O=k[0],H=k[1],I=Object(c.useState)([]),B=r()(I,2),z=B[0],C=B[1];return Object(c.useEffect)((function(){s.a.get(p).then((function(e){n(e.data[0]),h(e.data[0].ShipperSolutions),N(e.data[0].CarrierSolutions),x(e.data[0].ShipperBannerHeader),H(e.data[0].CarrierBannerHeader),C("".concat(d+e.data[0].BannerImage.BannerImage.url))}))}),[]),e.browser&&("#carriers"===location.hash?setTimeout((function(){document.getElementById("carriers").scrollIntoView(!0)}),150):scrollTo(0,0)),l.a.createElement("div",null,l.a.createElement(m.a,null),l.a.createElement("div",{id:"shippers"},l.a.createElement("div",{className:"jumbotron jumbotron-fluid pb-4 text-light",style:{backgroundImage:"url(".concat(z,")"),backgroundSize:"cover"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mx-auto my-auto text-center"},l.a.createElement("h1",null,w.Header),l.a.createElement("p",{className:"mx-auto w-50"},w.Subheader)))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5 mb-5 mx-auto justify-content-center"},b.map((function(e,t){return l.a.createElement("div",{key:t,className:"col-sm-6 mt-3 text-center"},l.a.createElement(o.a,{id:e._id,header:e.SolutionHeader,description:e.SolutionDescription}))})))),l.a.createElement("div",{id:"carriers",className:"py-5"},l.a.createElement("div",{className:"jumbotron jumbotron-fluid pb-4 text-light",style:{backgroundImage:"url(".concat(z,")"),backgroundSize:"cover"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mx-auto my-auto text-center"},l.a.createElement("h1",null,O.Header),l.a.createElement("p",{className:"mx-auto w-50"},O.Subheader)))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5 mb-5 mx-auto justify-content-center"},f.map((function(e,t){return l.a.createElement("div",{key:t,className:"col-sm-6 mt-3 text-center"},l.a.createElement(o.a,{id:e._id,header:e.SolutionHeader,description:e.SolutionDescription}))})))))),l.a.createElement(u.a,null))}}.call(this,a(26))}}]);