(this["webpackJsonpcovid-india-stats"]=this["webpackJsonpcovid-india-stats"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(7),a=c.n(r),i=(c(12),c(6)),d=c.n(i),j=c(0),l=function(){var e=d()(new Date).format("DD MMMM YYYY"),t=d()().format("h:mm A");return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("h1",{children:["COVID INDIA STATS",Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"date",children:[e,", ",t]})]})})},o=c(2),h=c.n(o),b=c(4),O=c(3),x=(c(16),function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),a=Object(O.a)(r,2),i=a[0],d=a[1],l=function(){var e=Object(b.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c),d(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l()}),[]),Object(j.jsx)("div",{children:i?Object(j.jsx)("div",{children:"Loading..."}):Object(j.jsx)("table",{className:"center",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{className:"tr",children:[Object(j.jsx)("td",{className:"blue top td",children:Object(j.jsx)("span",{children:"Active"})}),Object(j.jsx)("td",{className:"red top td",children:Object(j.jsx)("span",{children:"Confirmed"})}),Object(j.jsx)("td",{className:"green top td",children:Object(j.jsx)("span",{children:"Recovered"})}),Object(j.jsx)("td",{className:"grey top td",children:Object(j.jsx)("span",{children:"Deceased"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"mid td",children:Object(j.jsx)("div",{className:"plus blue",children:c.activeCasesNew>=0?Object(j.jsxs)("div",{children:[" + ",c.activeCasesNew.toLocaleString("en-in")," "]}):Object(j.jsxs)("div",{children:["  ",c.activeCasesNew.toLocaleString("en-in")," "]})})}),Object(j.jsx)("td",{className:"mid td",children:Object(j.jsx)("div",{className:"plus redp"})}),Object(j.jsx)("td",{className:"mid td",children:Object(j.jsx)("div",{className:"plus green",children:c.recoveredNew>=0?Object(j.jsxs)("div",{children:["+ ",c.recoveredNew.toLocaleString("en-in")," "]}):Object(j.jsxs)("div",{children:[" ",c.recoveredNew.toLocaleString("en-in")," "]})})}),Object(j.jsx)("td",{className:"mid td",children:Object(j.jsx)("div",{className:"plus grey",children:c.deathsNew>=0?Object(j.jsxs)("div",{children:["+ ",c.deathsNew.toLocaleString("en-in")]}):Object(j.jsx)("div",{children:c.deathsNew.toLocaleString("en-in")})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"blue bottom td",children:Object(j.jsx)("div",{className:"num",children:c.activeCases.toLocaleString("en-in")})}),Object(j.jsx)("td",{className:"red bottom td",children:Object(j.jsx)("div",{className:"num",children:c.totalCases.toLocaleString("en-in")})}),Object(j.jsx)("td",{className:"green bottom td",children:Object(j.jsx)("div",{className:"num",children:c.recovered.toLocaleString("en-in")})}),Object(j.jsx)("td",{className:"grey bottom td",children:Object(j.jsx)("div",{className:"num",children:c.deaths.toLocaleString("en-in")})})]})]})})})}),v=(c(17),function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],r=function(){var e=Object(b.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c.regionData),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),a=c.filter((function(e,t){return 0!==t}));return Object(s.useEffect)((function(){r()}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"states",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"t-head",children:"State"}),Object(j.jsx)("th",{className:"t-head",children:"Confirmed"}),Object(j.jsx)("th",{className:"t-head",children:"Active"}),Object(j.jsx)("th",{className:"t-head",children:"Recovered"}),Object(j.jsx)("th",{className:"t-head",children:"Deaths"})]})}),Object(j.jsx)("tbody",{children:a.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{id:"st",children:Object(j.jsx)("div",{children:e.region})}),Object(j.jsx)("td",{className:"td2 hover",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"plusred",children:e.newInfected>=0?Object(j.jsxs)("div",{children:[" \u2191 ",e.newInfected.toLocaleString()," "]}):Object(j.jsxs)("div",{children:[" \u2193 ",Math.abs(e.newInfected.toLocaleString())," "]})}),e.totalInfected.toLocaleString("en-in")]})}),Object(j.jsx)("td",{className:"td2 hover blue",children:Object(j.jsx)("div",{children:e.activeCases.toLocaleString("en-in")})}),Object(j.jsx)("td",{className:"td2 hover",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"plusgreen",children:["\u2191 ",e.newRecovered.toLocaleString("en-in")]}),e.recovered.toLocaleString("en-in")]})}),Object(j.jsx)("td",{className:"td2 hover",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"plusgrey",children:e.newDeceased>0?Object(j.jsxs)("div",{children:["+ ",e.newDeceased.toLocaleString("en-in")," "]}):Object(j.jsx)("div",{})}),e.deceased.toLocaleString("en-in")]})})]},t)}))})]})})}),u=(c(18),function(){return Object(j.jsxs)("div",{className:"end",children:[Object(j.jsx)("div",{}),Object(j.jsx)("h4",{children:"Source: Ministry of Health and Family Welfare of India"})]})}),m=(c(19),function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l,{}),Object(j.jsx)(x,{}),Object(j.jsx)(v,{}),Object(j.jsx)(u,{})]})});a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8bb332bb.chunk.js.map