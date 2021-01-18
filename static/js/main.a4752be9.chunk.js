(this["webpackJsonpcovid-19-in-asia"]=this["webpackJsonpcovid-19-in-asia"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(1),i=s.n(r),n=s(7),o=s.n(n),a=(s(13),s(2)),l=s(3),d=s(5),j=s(4),m=(s(14),s(15),s(16),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("h1",{className:"section-title mb-5",children:this.props.section_title})}}]),s}(i.a.Component)),h=(s(17),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("nav",{className:"navbar fixed-top navbar-dark navbar-bg",children:[Object(c.jsxs)("a",{className:"navbar-brand",href:"#home",children:[Object(c.jsx)("img",{src:"./assets/images/covid-19-in-asia-logo.png",width:"30",height:"30",alt:""}),Object(c.jsx)("span",{children:" COVID-19 in Asia"})]}),Object(c.jsxs)("ul",{className:"navbar-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-link",href:"#symptoms",children:"Symptoms"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-link",href:"#prevention",children:"Prevention"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-link",href:"#top-10",children:"Top 10"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-link",href:"#home",children:"Home"})})]})]})}}]),s}(i.a.Component)),b=(s(18),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(a.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"col-lg-3 col-md-3 col-sm-6 mb-4",children:[Object(c.jsx)("img",{src:this.props.symptom_image_url,className:"symptoms-image"}),Object(c.jsx)("h5",{className:"symptoms-description",children:this.props.symptom_description})]})}}]),s}(i.a.Component)),p=(s(19),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(a.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"card prevention-card",children:[Object(c.jsx)("img",{className:"card-img-top",src:this.props.prevention_image_url}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title text-center",children:this.props.card_title}),Object(c.jsx)("p",{className:"card-text text-center",children:this.props.card_description})]})]})}}]),s}(i.a.Component)),u=(s(20),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(a.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e={backgroundColor:this.props.background_color_button};return Object(c.jsx)("button",{className:"sort_btn py-3 "+(this.props.is_disabled?"clicked":""),style:e,onClick:this.props.onclick_sort_btn,disabled:this.props.is_disabled,children:this.props.sort_by_text})}}]),s}(i.a.Component)),v=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).symptomsEntries=[{url:"./assets/images/symptom-breath.jpg",description:"Difficult to Breath"},{url:"./assets/images/symptom-chills.jpg",description:"Chills"},{url:"./assets/images/symptom-cough.jpg",description:"Cough"},{url:"./assets/images/symptom-diarrhea.jpg",description:"Diarrhea"},{url:"./assets/images/symptom-fever.jpg",description:"Fever"},{url:"./assets/images/symptom-loss.jpg",description:"Loss of Taste or Smell"},{url:"./assets/images/symptom-muscle.jpg",description:"Muscle or Body Aches"},{url:"./assets/images/symptom-vomit.jpg",description:"Vomiting"}],c.preventionFirstEntries=[{url:"./assets/images/preventing-touch.jpg",title:"Don't Touch Your Face",description:"Do not touch your eyes, nose, and mouth."},{url:"./assets/images/preventing-disinfect.jpg",title:"Disinfect Belongings",description:"Clean and disinfect frequently touched objects and surfaces."},{url:"./assets/images/preventing-distance.jpg",title:"Social Distancing",description:"Stay at least 6 feet (about 2 arm lengths) from other people."},{url:"./assets/images/preventing-mask.jpg",title:"Wear Mask",description:"Wear a mask over your nose and mouth in public."}],c.preventionSecondEntries=[{url:"./assets/images/preventing-cough.jpg",title:"Cover Your Cough",description:"Cover your cough or sneeze with tissue, then throw the tissue in the trash and wash your hands."},{url:"./assets/images/preventing-wash.jpg",title:"Wash Your Hands",description:"Wash your hands often with soap and water for at least 20 seconds."},{url:"./assets/images/preventing-wfh.jpg",title:"Stay at Home",description:"Stay at home and work from home, especially when you are sick. Except to get medical care."}],c.sortTable=function(e){var t;"confirmed"==e?(t=c.state.covidData.sort((function(e,t){return parseInt(t.confirmed)-parseInt(e.confirmed)})),c.setState({sortedByConfirmed:!0,sortedByRecovered:!1,sortedByDeaths:!1})):"recovered"==e?(t=c.state.covidData.sort((function(e,t){return parseInt(t.recovered)-parseInt(e.recovered)})),c.setState({sortedByConfirmed:!1,sortedByRecovered:!0,sortedByDeaths:!1})):(t=c.state.covidData.sort((function(e,t){return parseInt(t.deaths)-parseInt(e.deaths)})),c.setState({sortedByConfirmed:!1,sortedByRecovered:!1,sortedByDeaths:!0})),c.setState({covidData:t})},c.state={confirmed:"Calculating...",recovered:"Calculating...",deaths:"Calculating...",covidData:[],sortedByConfirmed:!0,sortedByRecovered:!1,sortedByDeaths:!1},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid-api.mmediagroup.fr/v1/cases?continent=Asia").then((function(e){return e.json()})).then((function(t){var s=0,c=0,r=0,i=[];for(var n in t){var o=t[n];o.hasOwnProperty("All")&&(s+=o.All.confirmed,c+=o.All.recovered,r+=o.All.deaths),i.push({countryName:n,confirmed:o.All.confirmed,recovered:o.All.recovered,deaths:o.All.deaths})}e.setState({confirmed:s,recovered:c,deaths:r,covidData:i}),e.sortTable("confirmed")}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{id:"main-page",className:"container-fluid",children:[Object(c.jsx)(h,{}),Object(c.jsxs)("div",{id:"home",className:"section-odd py-5",children:[Object(c.jsx)(m,{section_title:"Total Cases in Asia"}),Object(c.jsxs)("div",{id:"home-row",className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-5 confirmed-text",children:Object(c.jsx)("h1",{children:"Confirmed"})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-7 confirmed-text",children:Object(c.jsxs)("h1",{children:[": ",this.state.confirmed]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-5 recovered-text",children:Object(c.jsx)("h1",{children:"Recovered"})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-7 recovered-text",children:Object(c.jsxs)("h1",{children:[": ",this.state.recovered]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-5 deaths-text",children:Object(c.jsx)("h1",{children:"Deaths"})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-7  deaths-text",children:Object(c.jsxs)("h1",{children:[": ",this.state.deaths]})})]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:Object(c.jsx)("img",{id:"asia-map",src:"./assets/images/asia-map.jpg",className:"fade-in",alt:"World Map (Asia)"})})]})]}),Object(c.jsxs)("div",{id:"top-10",className:"section-even py-5",children:[Object(c.jsx)(m,{section_title:"Top 10 Countries with Highest COVID-19 Cases"}),Object(c.jsxs)("div",{className:"row default-margin",children:[Object(c.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-12 table-responsive",children:Object(c.jsxs)("table",{id:"covid-table",className:"table table-hover table-bordered",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",className:"text-center",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Country"}),Object(c.jsx)("th",{scope:"col",className:"text-center confirmed-col",children:"Confirmed"}),Object(c.jsx)("th",{scope:"col",className:"text-center recovered-col",children:"Recovered"}),Object(c.jsx)("th",{scope:"col",className:"text-center deaths-col",children:"Deaths"})]})}),Object(c.jsx)("tbody",{children:this.state.covidData.slice(0,10).map((function(e,t){return Object(c.jsxs)("tr",{className:(t+1)%2==0?"even-row":"odd-row",children:[Object(c.jsx)("th",{scope:"row",className:"text-center",children:t+1}),Object(c.jsx)("td",{children:e.countryName}),Object(c.jsx)("td",{className:"text-center",children:e.confirmed}),Object(c.jsx)("td",{className:"text-center recovered-col",children:e.recovered}),Object(c.jsx)("td",{className:"text-center deaths-col",children:e.deaths})]},"tbody-row-".concat(t))}))})]})}),Object(c.jsx)("div",{className:"col-lg-6 col-md-4 col-sm-12 center-aligned",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h3",{id:"sort-table-text",children:"Sort table by :"}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(u,{sort_by_text:"Most Cases",onclick_sort_btn:function(){return e.sortTable("confirmed")},is_disabled:this.state.sortedByConfirmed,background_color_button:"lightgrey"})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(u,{sort_by_text:"Most Recovered",onclick_sort_btn:function(){return e.sortTable("recovered")},is_disabled:this.state.sortedByRecovered,background_color_button:"lightgreen"})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(u,{sort_by_text:"Most Deaths",onclick_sort_btn:function(){return e.sortTable("deaths")},is_disabled:this.state.sortedByDeaths,background_color_button:"lightcoral"})})]})})]})]}),Object(c.jsxs)("div",{id:"prevention",className:"section-odd py-5",style:{height:"auto"},children:[Object(c.jsx)(m,{section_title:"How to Prevent COVID-19"}),Object(c.jsx)("div",{className:"row default-margin",children:this.preventionFirstEntries.map((function(e,t){return Object(c.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:Object(c.jsx)(p,{prevention_image_url:e.url,card_title:e.title,card_description:e.description})},"prevention-first-row-".concat(t))}))}),Object(c.jsx)("div",{className:"row prevention-second-row",children:this.preventionSecondEntries.map((function(e,t){return Object(c.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:Object(c.jsx)(p,{prevention_image_url:e.url,card_title:e.title,card_description:e.description})},"prevention-second-row-".concat(t))}))})]}),Object(c.jsxs)("div",{id:"symptoms",className:"section-even py-5",children:[Object(c.jsx)(m,{section_title:"COVID-19 Symptoms"}),Object(c.jsx)("div",{id:"symptoms-row",className:"row",children:this.symptomsEntries.map((function(e,t){return Object(c.jsx)(b,{symptom_image_url:e.url,symptom_description:e.description},"symptom-item-".concat(t))}))})]})]})}}]),s}(r.Component),O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),r(e),i(e),n(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.a4752be9.chunk.js.map