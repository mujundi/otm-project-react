(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,e.header),c.a.createElement("p",null,e.description))}},55:function(e,t,a){"use strict";a.r(t),function(e){var n=a(8),c=a.n(n),r=a(0),l=a.n(r),o=a(137),s=(a(52),a(17)),m=a.n(s),i=a(50),u=a(51),d="https://otm-dispatch-strapi.herokuapp.com",E="".concat(d,"/company-pages");t.default=function(){var t=Object(r.useState)([]),a=c()(t,2),n=(a[0],a[1]),s=Object(r.useState)([]),b=c()(s,2),p=b[0],v=b[1],h=Object(r.useState)([]),f=c()(h,2),g=f[0],N=f[1],j=Object(r.useState)([]),w=c()(j,2),S=w[0],k=w[1],x=Object(r.useState)([]),y=c()(x,2),O=y[0],H=y[1],B=Object(r.useState)([]),I=c()(B,2),z=I[0],A=I[1];return e.browser&&("#services"===location.hash?setTimeout((function(){document.getElementById("services").scrollIntoView(!0)}),150):scrollTo(0,0)),Object(r.useEffect)((function(){m.a.get(E).then((function(e){n(e.data[0]),v(e.data[0].AboutUsHeader),N(e.data[0].AboutDescriptions),k(e.data[0].ServicesHeader),H(e.data[0].ServicesDescriptions),A("".concat(d+e.data[0].BannerImage.url))}))}),[]),l.a.createElement("div",null,l.a.createElement(i.a,null),l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"jumbotron jumbotron-fluid pb-4 text-light",style:{backgroundImage:"url(".concat(z,")"),backgroundSize:"cover"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mx-auto my-auto text-center"},l.a.createElement("h1",null,p.BannerHeader),l.a.createElement("p",{className:"mx-auto w-50"},p.Motto)))),l.a.createElement("div",{className:"container mt-5 mb-5"},g.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("h3",null,e.Header),l.a.createElement("p",null,e.Paragraph))})))),l.a.createElement("div",{id:"services"},l.a.createElement("div",{className:"jumbotron jumbotron-fluid pb-4 text-light",style:{backgroundImage:"url(".concat(z,")"),backgroundSize:"cover"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mx-auto my-auto text-center"},l.a.createElement("h1",null,S.BannerHeader),l.a.createElement("p",{className:"mx-auto w-50"},S.BannerSubheader)))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-5 mb-5"},O.map((function(e,t){return l.a.createElement("div",{key:t,className:"col-sm-6 mt-3 text-center"},l.a.createElement(o.a,{id:e._id,header:e.Header,description:e.Paragraph}))}))))),l.a.createElement(u.a,null))}}.call(this,a(26))}}]);