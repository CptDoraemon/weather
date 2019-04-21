(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),s=a(9),n=a.n(s),o=(a(17),a(10)),c=a(2),u=a(3),l=a(5),h=a(4),m=a(6),p=a(1),d=(a(7),a(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-wrapper quarter-height-wrapper grey"},r.a.createElement("h1",null," ",this.props.geoData," "),r.a.createElement("h2",null," ",this.props.getDisplayTime(this.props.selectedDataObj.time,this.props.isDaySummary)," "),r.a.createElement("h2",null," ",this.props.selectedDataObj.summary," "))}}]),t}(i.Component)),y=(a(19),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={width:this.props.width,height:this.props.height,objectFit:"cover"},t=-1===["clear-day","clear-night","rain","snow","sleet","wind","fog","cloudy","partly-cloudy-day","partly-cloudy-night"].indexOf(this.props.icon)?"na.svg":this.props.icon+".svg";return r.a.createElement("img",{src:"/weather/svg/"+t,style:e,alt:this.props.icon})}}]),t}(r.a.Component));function b(e){return r.a.createElement("div",{className:"daily-wrapper",onClick:function(){e.setSelectedDataObj(e.obj),e.setIsDaySummary(!0)}},e.time,r.a.createElement(y,{width:"50px",height:"50px",icon:e.icon}),r.a.createElement("div",{className:"daily-temp"},r.a.createElement("span",{className:"daily-temp-high"},e.temperatureHigh,"\xb0"),r.a.createElement("span",{className:"daily-temp-low"},e.temperatureLow,"\xb0")))}var g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return r.a.createElement("div",{className:"daychart-wrapper quarter-height-wrapper"},this.props.objArray.map(function(a){var i=e.props.isCelsius?Math.round(e.props.fToC(a.temperatureHigh)):Math.round(a.temperatureHigh),s=e.props.isCelsius?Math.round(e.props.fToC(a.temperatureLow)):Math.round(a.temperatureLow);return r.a.createElement(b,{key:a.time,icon:a.icon,time:t[new Date(1e3*a.time).getDay()],temperatureHigh:i,temperatureLow:s,obj:a,setSelectedDataObj:e.props.setSelectedDataObj,setIsDaySummary:e.props.setIsDaySummary})}))}}]),t}(i.Component),f=(a(20),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"quarter-height-wrapper"})}}]),t}(i.Component));a(21);function j(e){return r.a.createElement("div",{className:"unit-switcher-wrapper"},r.a.createElement("span",{className:e.isCelsius?"unit-switcher-button-active":"unit-switcher-button-inactive",onClick:function(){return e.unitSwitcher(!1)}},"\u2103"),r.a.createElement("span",null," | "),r.a.createElement("span",{onClick:function(){return e.unitSwitcher(!0)},className:e.isCelsius?"unit-switcher-button-inactive":"unit-switcher-button-active"},"\u2109"))}function O(e){return r.a.createElement("div",{className:"selected-summary-left-wrapper"},r.a.createElement(y,{icon:e.icon,width:"80px",height:"80px"}),r.a.createElement("div",{className:"selected-summary-temperature"}," ",e.temperature," "),r.a.createElement(j,{unitSwitcher:e.unitSwitcher,isCelsius:e.isCelsius}))}function v(e){return r.a.createElement("div",{className:"selected-summary-right-wrapper grey"},r.a.createElement("div",{className:"selected-summary-right-item"},"Precipitation: ",e.precipitation,"%"),r.a.createElement("div",{className:"selected-summary-right-item"},"Humidity: ",e.humidity,"%"),r.a.createElement("div",{className:"selected-summary-right-item"},"Wind: ",e.windSpeed))}var w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=void 0===this.props.selectedDataObj.temperature?this.props.selectedDataObj.temperatureHigh:this.props.selectedDataObj.temperature,t=this.props.isCelsius?this.props.fToC(e):e;t=Math.round(t);var a=Math.round(100*this.props.selectedDataObj.precipProbability),i=Math.round(100*this.props.selectedDataObj.humidity),s=this.props.selectedDataObj.windSpeed,n=this.props.isCelsius?this.props.mphToKmh(s)+" km/h":s+" mph";return r.a.createElement("div",{className:"selected-summary-wrapper quarter-height-wrapper"},r.a.createElement(O,{icon:this.props.selectedDataObj.icon,temperature:t,unitSwitcher:this.props.unitSwitcher,isCelsius:this.props.isCelsius}),r.a.createElement(v,{precipitation:a,humidity:i,windSpeed:n}))}}]),t}(i.Component),D=(a(22),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={isTimeout:!1},a.timeout=null,a.showTimeoutMessage=a.showTimeoutMessage.bind(Object(p.a)(Object(p.a)(a))),a.refresh=a.refresh.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"refresh",value:function(){this.state.isTimeout&&window.location.reload()}},{key:"showTimeoutMessage",value:function(){this.setState({isTimeout:!0})}},{key:"componentDidMount",value:function(){this.timeout=setTimeout(this.showTimeoutMessage,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),this.timeout=null}},{key:"render",value:function(){for(var e=[],t=0;t<"loading...".length;t++){var a={animationDelay:.2*t+"s"},i=r.a.createElement("span",{key:"loading"+t,className:"loading-span",style:a},"loading...".charAt(t));e.push(i)}var s=this.state.isTimeout?"loading-timeout-active":"loading-timeout-inactive";return r.a.createElement("div",{className:"loading-wrapper grey"},r.a.createElement("div",{className:s},r.a.createElement("div",{className:"loading-timeout-message"},"This app relies on free tiers of the weather and geocoding API services, the responses can be slow sometimes.")),r.a.createElement("div",{className:"loading-text-wrapper grey"},e),r.a.createElement("div",{className:s},r.a.createElement("div",{className:"loading-refresher",onClick:this.refresh},"refresh?")))}}]),t}(i.Component));var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={selectedDataObj:a.props.weatherData.currently,isDaySummary:!1,isCelsius:!0},a.unitSwitcher=a.unitSwitcher.bind(Object(p.a)(Object(p.a)(a))),a.setSelectedDataObj=a.setSelectedDataObj.bind(Object(p.a)(Object(p.a)(a))),a.setIsDaySummary=a.setIsDaySummary.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"getDisplayTime",value:function(e,t){var a=new Date(1e3*e),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],r=a.getHours()<10?"0"+a.getHours():a.getHours(),s=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes();return t?i:i+" "+r+":"+s}},{key:"fToC",value:function(e){return 5*(e-32)/9}},{key:"mphToKmh",value:function(e){return(e/1.609).toFixed(2)}},{key:"unitSwitcher",value:function(e){this.setState({isCelsius:!e})}},{key:"setSelectedDataObj",value:function(e){this.setState({selectedDataObj:e})}},{key:"setIsDaySummary",value:function(e){this.setState({isDaySummary:e})}},{key:"render",value:function(){var e={isDaySummary:this.state.isDaySummary,isCelsius:this.state.isCelsius},t={geoData:this.props.geoData,weatherData:this.props.weatherData,selectedDataObj:this.state.selectedDataObj},a={getDisplayTime:this.getDisplayTime,fToC:this.fToC,mphToKmh:this.mphToKmh,unitSwitcher:this.unitSwitcher,setSelectedDataObj:this.setSelectedDataObj},i=Object(o.a)({},e,t,a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,i),r.a.createElement(w,i),r.a.createElement(f,null),r.a.createElement(g,{objArray:this.props.weatherData.daily.data,fToC:this.fToC,setSelectedDataObj:this.setSelectedDataObj,setIsDaySummary:this.setIsDaySummary,isCelsius:this.state.isCelsius}))}}]),t}(i.Component);function S(e){return r.a.createElement("div",{className:"attributions-wrapper grey"},r.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noopener noreferrer"},"Powered by Dark Sky"),r.a.createElement("a",{href:"https://locationiq.com/",target:"_blank",rel:"noopener noreferrer"},"Search by LocationIQ.com"))}var k,C=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"app-safe-area"},this.props.isFailed?this.props.errorMessage:this.props.isLoaded?r.a.createElement(E,this.props):r.a.createElement(D,null)),r.a.createElement(S,null))}}]),t}(i.Component),T=(k=C,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={isLoaded:!1,isFailed:!1},a.latitude=null,a.longitude=null,a.weatherData=null,a.geoData=null,a.errorMessage="",a.sendQuery=a.sendQuery.bind(Object(p.a)(Object(p.a)(a))),a.useMockLoacation=a.useMockLoacation.bind(Object(p.a)(Object(p.a)(a))),a.getGeoLocation=a.getGeoLocation.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"sendQuery",value:function(){var e=this,t=!1,a=!1,i="https://www.xiaoxihome.com/",r={method:"POST",mode:"cors",cache:"default",credentials:"same-origin",headers:{"content-type":"application/json"},redirect:"follow",referrer:"client",body:JSON.stringify({latitude:this.latitude,longitude:this.longitude})};fetch(i+"api/weather",r).then(function(e){return e.json()}).then(function(i){"success"===i.status?(e.weatherData=i.data,console.log(i.data),(t=!0)&&a&&e.setState({isLoaded:!0})):(e.errorMessage=i.data,e.setState({isFailed:!0}))}).catch(function(e){return console.log(e)}),fetch(i+"api/reversegeocoding",r).then(function(e){return e.json()}).then(function(i){"success"===i.status?(e.geoData=i.data,console.log(i.data),a=!0,t&&a&&e.setState({isLoaded:!0})):(e.errorMessage=i.data,e.setState({isFailed:!0}))}).catch(function(e){return console.log(e)})}},{key:"useMockLoacation",value:function(){this.latitude=43.70011,this.longitude=-79.4163,this.sendQuery()}},{key:"getGeoLocation",value:function(){var e=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude,e.sendQuery()},this.useMockLoacation):this.useMockLoacation()}},{key:"componentDidMount",value:function(){this.getGeoLocation()}},{key:"render",value:function(){var e={isLoaded:this.state.isLoaded,weatherData:this.weatherData,geoData:this.geoData,isFailed:this.state.isFailed,errorMessage:this.errorMessage};return r.a.createElement(k,Object.assign({},this.props,e))}}]),t}(i.Component));n.a.render(r.a.createElement(function(e){return r.a.createElement("div",{className:"index-wrapper"},r.a.createElement(T,null))},null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ce1ee878.chunk.js.map