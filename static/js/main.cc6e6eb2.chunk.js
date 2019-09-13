(window["webpackJsonpreact-nickelodeon"]=window["webpackJsonpreact-nickelodeon"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},24:function(e,t,a){},25:function(e){e.exports=JSON.parse('{"name":"react-nickelodeon","version":"0.1.1","private":true,"homepage":"https://www.humppakone.com","api_homepage":"https://api.humppakone.com","dependencies":{"gh-pages":"^2.1.1","is-mobile":"^2.1.0","jquery":"^3.4.1","react":"^16.9.0","react-dom":"^16.9.0","react-icons":"^3.7.0","react-scripts":"3.1.1","sweetalert":"^2.1.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn run build && cp CNAME ./build","deploy":"gh-pages -b gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},26:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),i=a.n(r),s=(a(20),a(3)),u=a.n(s),l=a(9),c=a(14),d=a(4),p=a(5),m=a(7),f=a(6),h=a(8),g=a(2),v=a.n(g),y=a(1),A=a.n(y);var E=function(e){return("0"+e).slice(-2)},k=function(e){e=Math.round(e);var t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return[E(t),E(a),E(n)].join(":")},T=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.audio;return o.a.createElement("div",{className:"searchResultItem"},o.a.createElement("span",{className:"link",title:t.filename,onClick:function(){return e.props.onRandomAudioLoaded(t)}},o.a.createElement("img",{className:"cover",src:"/vinyl.jpg",alt:"cover"}),t.filename.split("/").pop()),o.a.createElement("span",{className:"searchResultActions"},o.a.createElement("span",{className:"link",onClick:function(){return e.props.editAudioFilename(t)}},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement("span",{className:"link",onClick:function(){return e.props.deleteAudio(t)}},o.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(o.a.PureComponent);a(24);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var N=a(25),b={apiRoot:localStorage.devserver||N.api_homepage,authToken:localStorage.getItem("auth_token")},P=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).NETWORK_STATE={NETWORK_EMPTY:0,NETWORK_IDLE:1,NETWORK_LOADING:2,NETWORK_NO_SOURCE:3},e.READY_SUCCESS_STATE=4,e.state={params:b,currentAudio:{},xhrRand:[],attemptingLogin:!1,currentTime:0,pause:!0,playId:"",fetchingNext:!1,firstPlay:!0,playing:!1,searchResults:[],searchTimeout:null,xhrSearch:null},e.unBindEvents=function(){var t;(t=e).bindEvents.apply(t,arguments)},e.onLogin=function(t){t.preventDefault();var a=e.usernameInput.value,n=e.passwordInput.value;A.a.ajax({url:e.state.params.apiRoot+"/login/",data:{username:a,password:n},dataType:"json",method:"POST"}).done(e.onLoginSuccess).fail(e.onLoginFail),e.setState({attemptingLogin:!0})},e.addMobileListener=function(){e.media=window.matchMedia("(max-width: 768px) and (orientation : portrait)"),e.media.addListener(e.listenerIsMobile)},e.onLoginSuccess=function(t){var a=S({},e.state.params,{authToken:t.token});e.setState({params:a,attemptingLogin:!1}),localStorage.setItem("auth_token",t.token),console.log("Login successful"),e.playNext()},e.onLoginFail=function(){e.setState({attemptingLogin:!1}),v()("Error","Username/Password do not match.","error")},e.fetchRandomAudio=function(){var t=A.a.ajax({url:e.state.params.apiRoot+"/songs/random?t="+ +new Date,method:"GET",dataType:"json",headers:{Authorization:"Token "+e.state.params.authToken}}).done(function(t){return e.onRandomAudioLoaded(t)}).fail(e.onAjaxFail),a=e.state.xhrRand;a.push(t);var n=a.filter(function(e){return 4!==e.readyState});e.setState({xhrRand:n,fetchingNext:!0})},e.onfetchingError=function(t){e.setState({fetchingNext:!1}),e.onAjaxFail(t)},e.clearAuthToken=function(){var t=S({},e.state.params,{authToken:null});localStorage.setItem("auth_token",""),e.setState({params:t})},e.onLogout=function(t){t.preventDefault(),e.state.pause||e.onCurrentAudioPlay("-"),e.setState({params:b,currentAudio:{},playId:"",xhrRand:[],attemptingLogin:!1,currentTime:0,pause:!0,fetchingNext:!1,firstPlay:!0,playing:!1}),e.clearAuthToken(),A.a.ajax({url:e.state.params.apiRoot+"/logout/",method:"POST",headers:{Authorization:"Token "+e.state.params.authToken}}).done(function(e){console.log("Logged out, token removed")})},e.onYoutubeDlPrompt=Object(l.a)(u.a.mark(function t(){var a,n,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("Enter a Youtube URL:",{content:"input"});case 2:if(a=t.sent,n=null,o=[{pos:1,re:/^([a-zA-Z0-9_-]{11})$/},{pos:4,re:/^(https?:\/\/)?(www\.|m\.)?youtube\.com\/watch\?(.*&)?v=([a-zA-Z0-9_-]{11})(&.*)?#?$/},{pos:2,re:/^(https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})(\?.*)?#?$/}],a){t.next=7;break}return t.abrupt("return");case 7:(n=o.map(function(e){return e.re.test(a)?a.match(e.re)[e.pos]:null}).filter(function(e){return!!e})[0])?(console.log("Sending intent to download video "+n),A.a.ajax({url:e.state.params.apiRoot+"/youtube-dl/",data:{v:n},type:"POST",headers:{Authorization:"Token "+e.state.params.authToken}}).done(function(e){return console.log("task id: "+e.task_id)}).fail(function(t){return e.onYoutubeFail(t,n)})):v()("Error","Invalid Youtube URL","error");case 9:case"end":return t.stop()}},t)})),e.onYoutubeFail=function(t,a){401===t.status?e.clearAuthToken():v()("Oops!","Youtube download "+a+" did not go through...","error")},e.onAjaxFail=function(t){401===t.status&&e.clearAuthToken()},e.onRandomAudioLoaded=function(t){console.log("GOTCHA!!! ",t),e.setState({fetchingNext:!1,currentAudio:t})},e.playNext=function(){console.log("NEXT!!!"),e.setState({playId:"",currentAudio:{}}),e.state.fetchingNext||(e.fetchRandomAudio(!0),console.log("FETCH!!!"))},e.getAudioTitle=function(){var t=e.state.currentAudio.filename;return t?t.split("/").pop():"-"},e.getAudioSrc=function(){var t=e.state,a=t.currentAudio,n=t.params.authToken;return a.download_url?a.download_url+".mp3?auth_token="+n:null},e.onSearchPrompt=function(){},e.togglePause=function(){},e.setAudioLength=function(){e.setState({duration:e.audio.duration})},e.canPlay=function(){e.setAudioLength(),e.loadAndPlayAudio(),e.setState({loading:!1,playing:!1})},e.loadAndPlayAudio=function(){var t=e.state,a=t.loadProgress,n=t.firstPlay,o=e.audio.networkState;e.setState({loading:!0}),a<100&&e.setState({loadProgress:a+1}),o!==e.NETWORK_STATE.NETWORK_NO_SOURCE?e.setState({playing:!n,loading:!1,pause:n,loadProgress:100},function(){e.setState({firstPlay:!1})}):e.onAudioLoadError()},e.audioEnd=function(){e.playNext()},e.onAudioLoadError=function(t){e.audio.error&&(console.log("Audio error ",e.audio.error),e.playNext())},e.onAudioSeeked=function(){e.state.playing&&(e.loadAndPlayAudio(),setTimeout(function(){e.setState({playing:!0})}))},e.onPauseAudio=function(){},e.onAudioPlay=function(){e.setState({playing:!0,loading:!1})},e.bindEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.audio,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waiting:e.loadAndPlayAudio,canplay:e.canPlay,error:e.onAudioLoadError,ended:e.audioEnd,seeked:e.onAudioSeeked,pause:e.onPauseAudio,play:e.onAudioPlay,timeupdate:e.audioTimeUpdate,stalled:e.onAudioLoadError,abort:e.onAudioAbort},n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=e.props.once;for(var r in a){var i=a[r];n?t.addEventListener(r,i,{once:!(!o||"play"!==r)}):t.removeEventListener(r,i)}},e.onAudioAbort=function(t){e.audio.pause(),e.audio.play()},e._pauseAudio=function(){e.audio.pause(),e.setState({playing:!1,pause:!0})},e.onTogglePlay=function(){var t=e.state.playId;e.onCurrentAudioPlay(t)},e.audioTimeUpdate=function(){var t=e.audio?e.audio.currentTime:0;e.setState({currentTime:t}),e.props.remember&&e.saveLastPlayStatus(),e.props.onAudioProgress&&e.props.onAudioProgress(e.getBaseAudioInfo())},e.getProgressText=function(){var t=e.state.currentTime,a=e.audio?e.audio.duration:0;return k(t)+"/"+k(a)},e.getProgressPercentage=function(){var t=e.state.currentTime,a=e.audio?e.audio.duration:0;return a?t/a*100:0},e.onCurrentAudioPlay=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.state,o=n.playId,r=n.pause,i=n.playing,s=n.currentAudio;if(s.id||console.log("no audio"),t===o&&!a)return e.setState({pause:!r,playing:!i}),void(r?e.audio.play():e.audio.pause());var u=t===s.id?s:{},l=function(a){e.setState({currentTime:0,duration:0,playing:!1,loading:!0,loadProgress:0,currentAudio:u,playId:t},function(){e.audio.load()})};l(e.getAudioSrc())},e.searchInputKeyPress=function(t){if(13===t.which){var a=t.target.value;console.log("Searching",a),e.state.searchTimeout&&clearTimeout(e.state.searchTimeout);var n=setTimeout(function(){return e.searchSongs(a)},0);e.setState({searchTimeout:n})}},e.searchSongs=function(e){var t=this;this.state.xhrSearch&&this.state.xhrSearch.abort();var a=A.a.ajax({url:this.state.params.apiRoot+"/songs/",data:{q:e},method:"GET",dataType:"json",headers:{Authorization:"Token "+this.state.params.authToken}}).done(function(a){t.setState({xhrSearch:null}),console.log("Found "+a.length+' match for query "'+e+'"'),t.setState({searchResults:a})}).fail(function(e){401===e.status&&t.clearAuthToken(),t.setState({searchResults:[]})});this.setState({xhrSearch:a})},e.deleteAudio=function(){var t=Object(l.a)(u.a.mark(function t(a){var n,o,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.params,o=n.apiRoot,r=n.authToken,t.next=3,v()('Are you sure you want to delete this file "'+a.filename.split("/").pop()+'"?');case 3:t.sent&&A.a.ajax({url:o+"/songs/"+a.id,method:"DELETE",dataType:"JSON",headers:{Authorization:"Token "+r}}).done(function(){console.log("Song "+a.id+" Deleted");var t=e.state.searchResults.filter(function(e){return e.id!==a.id});e.setState({searchResults:t}),e.state.currentAudio.id===a.id&&e.playNext()}).fail(function(e){401===e.status&&this.clearAuthToken()});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.editAudioFilename=function(){var e=Object(l.a)(u.a.mark(function e(t){var a,n,o,r,i=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("new file path",{content:{element:"input",attributes:{defaultValue:t.filename}}});case 2:(a=e.sent)&&a!==t.filename&&(n=this.state.params,o=n.apiRoot,r=n.authToken,A.a.ajax({url:o+"/songs/"+t.id,method:"PATCH",data:{filename:a},dataType:"JSON",headers:{Authorization:"Token "+r}}).done(function(){console.log("Filename changed from "+t.filename+" to "+a);var e=i.state.searchResults.map(function(e){return e.id!==t.id?e:(e.filename=a,e)});i.setState({searchResults:e})}).fail(function(e){401===e.status?i.clearAuthToken():v()("Something went wrong...","","error")}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),e.onAudioDownload=function(t){var a=e.state.params.authToken,n=t.filename?t.filename.split("/").pop()+".mp3":"",o=t.download_url+".mp3?auth_token="+a;n&&o&&(e.downloadNode.setAttribute("download",n),e.downloadNode.setAttribute("name",n),e.downloadNode.setAttribute("href",o),e.downloadNode.click())},e.onClickProgressBar=function(t){var a=t.pageX/A()(e.progressBar).width();if(e.audio){var n=e.audio.duration*a;console.log("Seek song "+k(n)),e.audio.currentTime=n}},console.log(e.state.params.authToken),e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){this.unBindEvents(this.audio,void 0,!1),this.media.removeListener(this.listenerIsMobile),this.media=void 0}},{key:"componentDidMount",value:function(){this.addMobileListener(),this.bindEvents(this.audio),this.state.params.authToken&&this.playNext()}},{key:"render",value:function(){var e=this,t=this.state,a=t.params.authToken,n=t.currentAudio,r=t.attemptingLogin,i=t.pause,s=t.searchResults,u=t.xhrSearch;return o.a.createElement("div",null,a&&o.a.createElement("div",{className:"progressbar",onClick:this.onClickProgressBar,ref:function(t){return e.progressBar=t}},o.a.createElement("div",{className:"progressbarBar",title:this.getProgressText(),style:{width:this.getProgressPercentage()+"%"}})),a&&!n&&o.a.createElement("div",{id:"loading"},o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," Loading"),!a&&o.a.createElement("div",{className:"loginComponent"},o.a.createElement("form",{className:"loginForm",onSubmit:this.onLogin},o.a.createElement("div",{className:"usernameInputWrapper"},o.a.createElement("input",{ref:function(t){return e.usernameInput=t},type:"text",className:"usernameInput",placeholder:"Username"})),o.a.createElement("div",{className:"passwordInputWrapper"},o.a.createElement("input",{ref:function(t){return e.passwordInput=t},type:"password",className:"passwordInput",placeholder:"Password"})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",className:"loginBtn myBtn"},o.a.createElement("i",{className:r?"fas fa-spinner fa-spin":"fas fa-sign-in-alt fa-fw"})," Login")))),a&&o.a.createElement("div",{className:"jukebox"},o.a.createElement("div",{className:"iconMenu"},o.a.createElement("span",null,o.a.createElement("img",{className:"mainCover"+(i?"":" rotate"),src:n.download_url?n.download_url+".jpg?auth_token="+a:"/vinyl.jpg",alt:""})),o.a.createElement("span",{className:"playPauseButton link",onClick:this.onTogglePlay,title:"Play/Pause"},o.a.createElement("i",{className:i?"fas fa-fw fa-play":"fas fa-fw fa-pause"})),o.a.createElement("span",{onClick:this.playNext,title:"Next",className:"link"},o.a.createElement("i",{className:"fas fa-fw fa-forward"})),o.a.createElement("span",{onClick:this.onYoutubeDlPrompt,title:"Import From Youtube",className:"link"},o.a.createElement("i",{className:"fab fa-fw fa-youtube"})),o.a.createElement("span",{onClick:function(){return e.onAudioDownload(n)},title:"Download",className:"link"},o.a.createElement("a",{href:this.getAudioSrc(),ref:function(t){return e.downloadNode=t}},o.a.createElement("i",{className:"fas fa-fw fa-cloud-download-alt"}))),o.a.createElement("span",{onClick:this.onLogout,title:"Sign out",className:"logoutBtn link"},o.a.createElement("i",{className:"fas fa-fw fa-sign-out-alt"}))),o.a.createElement("div",{className:"currentTitle"},"Now Playing: ",o.a.createElement("span",{id:"currentTitle"},this.getAudioTitle()||"-")),o.a.createElement("p",{className:"searchInputWrapper"},o.a.createElement("input",{type:"search",onKeyPress:this.searchInputKeyPress,className:"searchInput",placeholder:"Search"})),o.a.createElement("div",{className:"searchResults"},u&&o.a.createElement("i",{className:"fas fa-spin fa-2x fa-compact-disc"}),!u&&s.map(function(t){return o.a.createElement(T,{key:t.id,audio:t,onRandomAudioLoaded:e.onRandomAudioLoaded,deleteAudio:e.deleteAudio,editAudioFilename:e.editAudioFilename})}))),o.a.createElement("div",{className:"version"},o.a.createElement("small",null," v"+N.version)),o.a.createElement("audio",{key:"audio",className:"music-player-audio",preload:"auto",src:this.getAudioSrc(),ref:function(t){return e.audio=t}}))}}]),t}(o.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.cc6e6eb2.chunk.js.map