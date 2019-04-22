(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),i=a(9),n=a.n(i),o=(a(17),a(10)),c=a(2),u=a(3),l=a(5),h=a(4),p=a(6),m=a(1),d=(a(7),a(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header-wrapper quarter-height-wrapper grey"},s.a.createElement("h1",null," ",this.props.geoData," "),s.a.createElement("h2",null," ",this.props.getDisplayTime(this.props.selectedDataObj.time,this.props.isDaySummary)," "),s.a.createElement("h2",null," ",this.props.selectedDataObj.summary," "))}}]),t}(r.Component)),f=(a(19),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={width:this.props.width,height:this.props.height,objectFit:"cover"},t=-1===["clear-day","clear-night","rain","snow","sleet","wind","fog","cloudy","partly-cloudy-day","partly-cloudy-night"].indexOf(this.props.icon)?"na.svg":this.props.icon+".svg";return s.a.createElement("img",{src:"/weather/svg/"+t,style:e,alt:this.props.icon})}}]),t}(s.a.Component));function y(e){return s.a.createElement("div",{className:"daily-wrapper",onClick:function(){e.setSelectedDataObj(e.obj),e.setIsDaySummary(!0),e.setHourChartOffset(e.dayIndex)}},e.time,s.a.createElement(f,{width:"50px",height:"50px",icon:e.icon}),s.a.createElement("div",{className:"daily-temp"},s.a.createElement("span",{className:"daily-temp-high"},e.temperatureHigh,"\xb0"),s.a.createElement("span",{className:"daily-temp-low"},e.temperatureLow,"\xb0")))}var b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return s.a.createElement("div",{className:"daychart-wrapper quarter-height-wrapper"},this.props.objArray.map(function(a,r){var i=e.props.isCelsius?Math.round(e.props.fToC(a.temperatureHigh)):Math.round(a.temperatureHigh),n=e.props.isCelsius?Math.round(e.props.fToC(a.temperatureLow)):Math.round(a.temperatureLow);return s.a.createElement(y,{key:a.time,icon:a.icon,time:t[new Date(1e3*a.time).getDay()],temperatureHigh:i,temperatureLow:n,obj:a,setSelectedDataObj:e.props.setSelectedDataObj,setIsDaySummary:e.props.setIsDaySummary,setHourChartOffset:e.props.setHourChartOffset,dayIndex:r})}))}}]),t}(r.Component);a(20);function g(e){var t=e.obj.time===e.selectedDataObj.time?{fill:"rgb(0, 0, 0)",fontSize:"12px",fontWeight:700}:{fill:"rgb(150, 150, 150)",fontSize:"12px",fontWeight:700,cursor:"pointer"};return s.a.createElement("text",{x:e.x,y:e.y,style:t,onClick:function(){e.setSelectedDataObj(e.obj),e.setIsDaySummary(!1)}},e.text)}function O(e){var t={fill:"rgba(0, 0, 0, 0.2)",fontSize:"14px",fontWeight:700,textTransform:"uppercase"};return s.a.createElement(s.a.Fragment,null,[2,3,4,5,6].map(function(a){return s.a.createElement("text",{key:"nodata"+a,x:e.wrapperWidth*(a+.5)+e.noDataCenterOffset,y:.5*e.svgHeight,style:t,textAnchor:"middle"},"Hourly forecasts are only available for next 48 hours")}))}var v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={isReady:!1},a.tempMax=null,a.tempMin=null,a.wrapperWidth=null,a.svgHeight=null,a.svgWidth=null,a.tempArray=null,a.xInterval=null,a.topTextArea=null,a.bottomTextArea=null,a.lowestTemperatureHeight=null,a.wrapperRef=s.a.createRef(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getCoordinateY",value:function(e){var t=this.svgHeight-this.topTextArea-this.bottomTextArea-this.lowestTemperatureHeight,a=(e-this.tempMin)/(this.tempMax-this.tempMin)*t,r=this.bottomTextArea+this.lowestTemperatureHeight+a,s={tempText:r+10,chartTop:r,chartBot:this.bottomTextArea,timeText:5};for(var i in s)s.hasOwnProperty(i)&&(s[i]=this.svgHeight-s[i]);return s}},{key:"componentDidMount",value:function(){this.tempArray=this.props.objArray.map(function(e){return e.temperature});var e=this.tempArray.slice().sort(function(e,t){return e-t});this.tempMax=e[e.length-1],this.tempMin=e[0];var t=window.getComputedStyle(this.wrapperRef.current,null);this.wrapperWidth=window.parseInt(t.getPropertyValue("width")),this.svgWidth=8*this.wrapperWidth,this.svgHeight=100,this.xInterval=this.svgWidth/191,this.topTextArea=20,this.bottomTextArea=20,this.lowestTemperatureHeight=10,this.setState({isReady:!0})}},{key:"render",value:function(){var e,t=this,a={stroke:"rgb(29, 161, 242)",strokeWidth:2},r={fill:"rgba(29, 161, 242, 0.5)"},i={fill:"rgb(150, 150, 150)",fontSize:"12px"},n=s.a.createElement(s.a.Fragment,null,this.props.objArray.map(function(e,n){if(0!==n){var o=t.getCoordinateY(t.props.objArray[n-1].temperature),c=t.getCoordinateY(e.temperature),u=(n-1)*t.xInterval,l=n*t.xInterval,h=t.props.objArray[n-1].temperature,p=t.props.isCelsius?Math.round(t.props.fToC(h)):Math.round(h),m=new Date(1e3*e.time).getHours()+":00";return s.a.createElement(s.a.Fragment,{key:e.time},s.a.createElement("line",{x1:u,y1:o.chartTop,x2:l,y2:c.chartTop,style:a}),s.a.createElement("polygon",{points:"".concat(u,",").concat(o.chartBot," ").concat(u,",").concat(o.chartTop," ").concat(l,",").concat(c.chartTop," ").concat(l,",").concat(c.chartBot),style:r}),(n-1)%3===0?s.a.createElement(s.a.Fragment,null,s.a.createElement(g,{x:u,y:o.tempText,text:p,obj:t.props.objArray[n-1],selectedDataObj:t.props.selectedDataObj,setSelectedDataObj:t.props.setSelectedDataObj,setIsDaySummary:t.props.setIsDaySummary}),s.a.createElement("text",{x:u,y:o.timeText,style:i},m)):null)}return null})),o=new Date(1e3*this.props.objArray[0].time).getHours(),c=24-o===24?0:24-o;e=0===this.props.hourChartOffset?0:1===this.props.hourChartOffset?-c*this.xInterval:-(c+24*(this.props.hourChartOffset-1))*this.xInterval;var u=c*this.xInterval,l=s.a.createElement(s.a.Fragment,null,s.a.createElement("svg",{height:this.svgHeight,width:this.svgWidth,style:{transform:"translateX(".concat(e,"px)")}},n,s.a.createElement(O,{wrapperWidth:this.wrapperWidth,svgHeight:this.svgHeight,noDataCenterOffset:u})));return s.a.createElement("div",{className:"hour-chart-wrapper quarter-height-wrapper",ref:this.wrapperRef},this.state.isReady?l:null)}}]),t}(r.Component);a(21);function j(e){return s.a.createElement("div",{className:"unit-switcher-wrapper"},s.a.createElement("span",{className:e.isCelsius?"unit-switcher-button-active":"unit-switcher-button-inactive",onClick:function(){return e.unitSwitcher(!1)}},"\xb0C"),s.a.createElement("span",null," | "),s.a.createElement("span",{onClick:function(){return e.unitSwitcher(!0)},className:e.isCelsius?"unit-switcher-button-inactive":"unit-switcher-button-active"},"\xb0F"))}function w(e){return s.a.createElement("div",{className:"selected-summary-left-wrapper"},s.a.createElement(f,{icon:e.icon,width:"80px",height:"80px"}),s.a.createElement("div",{className:"selected-summary-temperature"}," ",e.temperature," "),s.a.createElement(j,{unitSwitcher:e.unitSwitcher,isCelsius:e.isCelsius}))}function D(e){return s.a.createElement("div",{className:"selected-summary-right-wrapper grey"},s.a.createElement("div",{className:"selected-summary-right-item"},"Precipitation: ",e.precipitation,"%"),s.a.createElement("div",{className:"selected-summary-right-item"},"Humidity: ",e.humidity,"%"),s.a.createElement("div",{className:"selected-summary-right-item"},"Wind: ",e.windSpeed))}var S=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=void 0===this.props.selectedDataObj.temperature?this.props.selectedDataObj.temperatureHigh:this.props.selectedDataObj.temperature,t=this.props.isCelsius?this.props.fToC(e):e;t=Math.round(t);var a=Math.round(100*this.props.selectedDataObj.precipProbability),r=Math.round(100*this.props.selectedDataObj.humidity),i=this.props.selectedDataObj.windSpeed,n=this.props.isCelsius?Math.round(this.props.mphToKmh(i))+" km/h":Math.round(i)+" mph";return s.a.createElement("div",{className:"selected-summary-wrapper quarter-height-wrapper"},s.a.createElement(w,{icon:this.props.selectedDataObj.icon,temperature:t,unitSwitcher:this.props.unitSwitcher,isCelsius:this.props.isCelsius}),s.a.createElement(D,{precipitation:a,humidity:r,windSpeed:n}))}}]),t}(r.Component),C=(a(22),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={isTimeout:!1},a.timeout=null,a.showTimeoutMessage=a.showTimeoutMessage.bind(Object(m.a)(Object(m.a)(a))),a.refresh=a.refresh.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"refresh",value:function(){this.state.isTimeout&&window.location.reload()}},{key:"showTimeoutMessage",value:function(){this.setState({isTimeout:!0})}},{key:"componentDidMount",value:function(){this.timeout=setTimeout(this.showTimeoutMessage,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),this.timeout=null}},{key:"render",value:function(){for(var e=[],t=0;t<"loading...".length;t++){var a={animationDelay:.2*t+"s"},r=s.a.createElement("span",{key:"loading"+t,className:"loading-span",style:a},"loading...".charAt(t));e.push(r)}var i=this.state.isTimeout?"loading-timeout-active":"loading-timeout-inactive";return s.a.createElement("div",{className:"loading-wrapper grey"},s.a.createElement("div",{className:i},s.a.createElement("div",{className:"loading-timeout-message"},"This app relies on free tiers of the weather and geocoding API services, the responses can be slow sometimes.")),s.a.createElement("div",{className:"loading-text-wrapper grey"},e),s.a.createElement("div",{className:i},s.a.createElement("div",{className:"loading-refresher",onClick:this.refresh},"refresh?")))}}]),t}(r.Component));var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={selectedDataObj:a.props.weatherData.currently,isDaySummary:!1,isCelsius:!0,hourChartOffset:0},a.unitSwitcher=a.unitSwitcher.bind(Object(m.a)(Object(m.a)(a))),a.setSelectedDataObj=a.setSelectedDataObj.bind(Object(m.a)(Object(m.a)(a))),a.setIsDaySummary=a.setIsDaySummary.bind(Object(m.a)(Object(m.a)(a))),a.setHourChartOffset=a.setHourChartOffset.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getDisplayTime",value:function(e,t){var a=new Date(1e3*e),r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],s=a.getHours()<10?"0"+a.getHours():a.getHours(),i=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes();return t?r:r+" "+s+":"+i}},{key:"fToC",value:function(e){return 5*(e-32)/9}},{key:"mphToKmh",value:function(e){return e/1.609}},{key:"unitSwitcher",value:function(e){this.setState({isCelsius:!e})}},{key:"setSelectedDataObj",value:function(e){this.setState({selectedDataObj:e})}},{key:"setIsDaySummary",value:function(e){this.setState({isDaySummary:e})}},{key:"setHourChartOffset",value:function(e){this.setState({hourChartOffset:e})}},{key:"render",value:function(){var e={isDaySummary:this.state.isDaySummary,isCelsius:this.state.isCelsius},t={geoData:this.props.geoData,weatherData:this.props.weatherData,selectedDataObj:this.state.selectedDataObj},a={getDisplayTime:this.getDisplayTime,fToC:this.fToC,mphToKmh:this.mphToKmh,unitSwitcher:this.unitSwitcher,setSelectedDataObj:this.setSelectedDataObj},r=Object(o.a)({},e,t,a);return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,r),s.a.createElement(S,r),s.a.createElement(v,{objArray:this.props.weatherData.hourly.data,selectedDataObj:this.state.selectedDataObj,isCelsius:this.state.isCelsius,fToC:this.fToC,setSelectedDataObj:this.setSelectedDataObj,setIsDaySummary:this.setIsDaySummary,hourChartOffset:this.state.hourChartOffset}),s.a.createElement(b,{objArray:this.props.weatherData.daily.data,fToC:this.fToC,setSelectedDataObj:this.setSelectedDataObj,setIsDaySummary:this.setIsDaySummary,isCelsius:this.state.isCelsius,setHourChartOffset:this.setHourChartOffset}))}}]),t}(r.Component);function T(e){return s.a.createElement("div",{className:"attributions-wrapper grey"},s.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noopener noreferrer"},"Powered by Dark Sky"),s.a.createElement("a",{href:"https://locationiq.com/",target:"_blank",rel:"noopener noreferrer"},"Search by LocationIQ.com"),s.a.createElement("a",{href:"https://erikflowers.github.io/weather-icons/",target:"_blank",rel:"noopener noreferrer"},"The Weather Icons"))}var x,k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app-wrapper"},s.a.createElement("div",{className:"app-safe-area"},this.props.isFailed?this.props.errorMessage:this.props.isLoaded?s.a.createElement(E,this.props):s.a.createElement(C,null)),s.a.createElement(T,null))}}]),t}(r.Component),M=(x=k,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={isLoaded:!1,isFailed:!1},a.latitude=null,a.longitude=null,a.weatherData=null,a.geoData=null,a.errorMessage="",a.sendQuery=a.sendQuery.bind(Object(m.a)(Object(m.a)(a))),a.useMockLoacation=a.useMockLoacation.bind(Object(m.a)(Object(m.a)(a))),a.getGeoLocation=a.getGeoLocation.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"sendQuery",value:function(){var e=this,t=!1,a=!1,r="https://www.xiaoxihome.com/",s={method:"POST",mode:"cors",cache:"default",credentials:"same-origin",headers:{"content-type":"application/json"},redirect:"follow",referrer:"client",body:JSON.stringify({latitude:this.latitude,longitude:this.longitude})};fetch(r+"api/weather",s).then(function(e){return e.json()}).then(function(r){"success"===r.status?(e.weatherData=r.data,console.log(r.data),(t=!0)&&a&&e.setState({isLoaded:!0})):(e.errorMessage=r.data,e.setState({isFailed:!0}))}).catch(function(e){return console.log(e)}),fetch(r+"api/reversegeocoding",s).then(function(e){return e.json()}).then(function(r){"success"===r.status?(e.geoData=r.data,console.log(r.data),a=!0,t&&a&&e.setState({isLoaded:!0})):(e.errorMessage=r.data,e.setState({isFailed:!0}))}).catch(function(e){return console.log(e)})}},{key:"useMockLoacation",value:function(){this.latitude=43.70011,this.longitude=-79.4163,this.sendQuery()}},{key:"getGeoLocation",value:function(){var e=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude,e.sendQuery()},this.useMockLoacation):this.useMockLoacation()}},{key:"componentDidMount",value:function(){this.getGeoLocation()}},{key:"render",value:function(){var e={isLoaded:this.state.isLoaded,weatherData:this.weatherData,geoData:this.geoData,isFailed:this.state.isFailed,errorMessage:this.errorMessage};return s.a.createElement(x,Object.assign({},this.props,e))}}]),t}(r.Component));n.a.render(s.a.createElement(function(e){return s.a.createElement("div",{className:"index-wrapper"},s.a.createElement(M,null))},null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.fc96745a.chunk.js.map