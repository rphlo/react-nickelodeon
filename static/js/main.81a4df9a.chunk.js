(window["webpackJsonpreact-nickelodeon"]=window["webpackJsonpreact-nickelodeon"]||[]).push([[0],{78:function(e,a,t){e.exports=t(94)},83:function(e,a,t){},93:function(e){e.exports=JSON.parse('{"name":"react-nickelodeon","version":"2021032700","private":true,"homepage":"https://www.humppakone.com","api_homepage":"https://api.humppakone.com","contact_email":"info@humppakone.com","dependencies":{"@material-ui/core":"^4.11.3","@sentry/react":"^5.27.4","@sentry/tracing":"^5.27.4","gh-pages":"^2.1.1","is-mobile":"^2.1.0","jquery":"^3.4.1","notistack":"^1.0.5","react":"^16.9.0","react-dom":"^16.9.0","react-icons":"^3.7.0","react-scripts":"3.1.1","sweetalert":"^2.1.2","use-no-sleep":"^0.3.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn run build && cp CNAME ./build","deploy":"gh-pages -b gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},94:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(9),s=t.n(r),i=(t(83),t(73)),u=t(30),l=t.n(u),c=t(61),d=t(32),p=t(33),m=t(38),f=t(34),h=t(50),g=t(39),v=t(24),E=t.n(v),y=t(17),A=t.n(y),S=t(67);var k=function(e){return("0"+e).slice(-2)},b=function(e){e=Math.round(e);var a=Math.floor(e/3600),t=Math.floor(e%3600/60),n=e%60;return[k(a),k(t),k(n)].join(":")},w=t(122),T=function(e){function a(){return Object(d.a)(this,a),Object(m.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.audio,n=a.queue,r=a.username,s=a.isSuperuser,i=n.findIndex((function(e){return e.id===t.id}));return o.a.createElement("div",{className:"searchResultItem"},o.a.createElement("span",{className:"link",title:t.filename,onClick:function(){return e.props.onQueueAudio(t)}},o.a.createElement("img",{className:"cover",src:"/vinyl.jpg",alt:"cover"}),-1!==i&&o.a.createElement("div",{class:"queueNumber"},(i+1).toString())),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:t.filename},o.a.createElement("span",{className:"link",onClick:function(){return e.props.onRandomAudioLoaded(t)}},t.filename.split("/").pop())),(r===t.owner||s)&&o.a.createElement("span",{className:"searchResultActions"},o.a.createElement("span",{className:"link",onClick:function(){return e.props.editAudioFilename(t)}},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement("span",{className:"link",onClick:function(){return e.props.deleteAudio(t)}},o.a.createElement("i",{className:"fas fa-trash"}))))}}]),a}(o.a.PureComponent),N=function(e){function a(){return Object(d.a)(this,a),Object(m.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.audio,n=a.username,r=a.queueIndex,s=a.isSuperuser;return o.a.createElement("div",{className:"queueItem"},o.a.createElement("span",{title:t.filename},o.a.createElement("img",{className:"cover",src:"/vinyl.jpg",alt:"cover"}),-1!==r&&o.a.createElement("div",{class:"queueNumber"},(r+1).toString())),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:t.filename},o.a.createElement("span",{className:"link",onClick:function(){return e.props.onRandomAudioLoaded(t)}},t.filename.split("/").pop())),(n===t.owner||s)&&o.a.createElement("span",{className:"searchResultActions"},o.a.createElement("span",{className:"link",onClick:function(){return e.props.editAudioFilename(t)}},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement("span",{className:"link",onClick:function(){return e.props.deleteAudio(t)}},o.a.createElement("i",{className:"fas fa-trash"}))))}}]),a}(o.a.PureComponent),P=t(55),x=t(93),R={apiRoot:localStorage.devserver||x.api_homepage,authToken:localStorage.getItem("auth_token"),username:localStorage.getItem("username"),isSuperuser:localStorage.getItem("is_superuser")},L=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(m.a)(this,Object(f.a)(a).call(this))).NETWORK_STATE={NETWORK_EMPTY:0,NETWORK_IDLE:1,NETWORK_LOADING:2,NETWORK_NO_SOURCE:3},e.READY_SUCCESS_STATE=4,e.state={params:R,currentAudio:{},queue:[],xhrRand:[],attemptingLogin:!1,currentTime:0,pause:!0,playId:"",fetchingNext:!1,firstPlay:!0,playing:!1,searchResults:[],searchTimeout:null,xhrSearch:null,viewQueue:!1,youtubeDL:{}},e.unBindEvents=function(){var a;(a=e).bindEvents.apply(a,arguments)},e.onLogin=function(a){a.preventDefault();var t=e.usernameInput.value,n=e.passwordInput.value;A.a.ajax({url:e.state.params.apiRoot+"/login/",data:{username:t,password:n},dataType:"json",method:"POST"}).done(e.onLoginSuccess).fail(e.onLoginFail),e.setState({attemptingLogin:!0})},e.onLoginSuccess=function(a){var t=Object(c.a)({},e.state.params,{authToken:a.token,username:a.user.username,isSuperuser:a.is_superuser});e.setState({params:t,attemptingLogin:!1}),localStorage.setItem("auth_token",a.token),localStorage.setItem("username",a.user.username),localStorage.setItem("is_superuser",a.is_superuser),console.log("Login successful"),e.playNext()},e.onLoginFail=function(){e.setState({attemptingLogin:!1}),E()("Error","Username/Password do not match.","error")},e.fetchRandomAudio=function(){var a=A.a.ajax({url:e.state.params.apiRoot+"/songs/random?t="+ +new Date,method:"GET",dataType:"json",headers:{Authorization:"Token "+e.state.params.authToken}}).done((function(a){return e.onRandomAudioLoaded(a)})).fail(e.onAjaxFail),t=e.state.xhrRand;t.push(a);var n=t.filter((function(e){return 4!==e.readyState}));e.setState({xhrRand:n,fetchingNext:!0})},e.onQueueAudio=function(a){var t=e.state.queue.filter((function(){return!0}));t.push(a),e.setState({queue:t})},e.onfetchingError=function(a){e.setState({fetchingNext:!1}),e.onAjaxFail(a)},e.clearAuthToken=function(){var a=Object(c.a)({},e.state.params,{authToken:null});localStorage.setItem("auth_token",""),e.setState({params:a})},e.onLogout=function(a){a.preventDefault(),e.state.pause||e.onCurrentAudioPlay("-"),e.setState({params:R,currentAudio:{},playId:"",xhrRand:[],attemptingLogin:!1,currentTime:0,pause:!0,fetchingNext:!1,firstPlay:!0,playing:!1}),e.clearAuthToken(),A.a.ajax({url:e.state.params.apiRoot+"/logout/",method:"POST",headers:{Authorization:"Token "+e.state.params.authToken}}).done((function(e){console.log("Logged out, token removed")}))},e.onYoutubeDlPrompt=function(){var a,t,n;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,l.a.awrap(E()("Enter a Youtube URL:",{content:"input"}));case 2:if(a=o.sent,t=null,n=[{pos:1,re:/^([a-zA-Z0-9_-]{11})$/},{pos:4,re:/^(https?:\/\/)?(www\.|m\.)?youtube\.com\/watch\?(.*&)?v=([a-zA-Z0-9_-]{11})(&.*)?#?$/},{pos:2,re:/^(https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})(\?.*)?#?$/}],a){o.next=7;break}return o.abrupt("return");case 7:(t=n.map((function(e){return e.re.test(a)?a.match(e.re)[e.pos]:null})).filter((function(e){return!!e}))[0])?(console.log("Sending intent to download video "+t),A.a.ajax({url:e.state.params.apiRoot+"/youtube-dl/",data:{v:t},type:"POST",headers:{Authorization:"Token "+e.state.params.authToken}}).done((function(a){return e.onStartYouTubeDL(t,a.task_id)})).fail((function(a){return e.onYoutubeFail(a,t)}))):E()("Error","Invalid Youtube URL","error");case 9:case"end":return o.stop()}}))},e.onStartYouTubeDL=function(a,t){e.props.snackbarMessage('Youtube video "'+a+'" download started...');var n=e.state.youtubeDL;n[a]={taskId:t,done:!1},e.setState({youtubeDL:n}),function e(n){A.a.ajax({url:n.state.params.apiRoot+"/tasks/"+t,type:"GET",headers:{Authorization:"Token "+n.state.params.authToken}}).done((function(t){if(t.pk){var o=t.filename.split("/").pop();n.props.snackbarMessage('Song "'+o+'" ready',{variant:"success"})}else t.error?n.props.snackbarMessage('Youtube video "'+a+'" download failed',{variant:"error"}):setTimeout((r=n,function(){return e(r)}),1e3);var r}))}(Object(h.a)(e))},e.onYoutubeFail=function(a,t){401===a.status?e.clearAuthToken():E()("Oops!","Youtube download "+t+" did not go through...","error")},e.onAjaxFail=function(a){401===a.status&&e.clearAuthToken()},e.onRandomAudioLoaded=function(a){if(console.log("GOTCHA!!! ",a),e.setState({fetchingNext:!1,currentAudio:a}),"mediaSession"in navigator){var t=a.filename;navigator.mediaSession.metadata=new MediaMetadata({title:t.split("/").pop(),artwork:[{src:a.download_url+".jpg?auth_token="+e.state.params.authToken,sizes:"500x500",type:"image/jpg"}]}),navigator.mediaSession.setActionHandler("play",(function(){e.setState({pause:!1,playing:!0}),e.audio.play(),e.props.onTogglePause(!1)})),navigator.mediaSession.setActionHandler("pause",(function(){e.setState({pause:!0,playing:!0}),e.audio.pause(),e.props.onTogglePause(!0)})),navigator.mediaSession.setActionHandler("nexttrack",e.playNext)}},e.playNext=function(){if(console.log("NEXT!!!"),e.setState({playId:"",currentAudio:{}}),e.state.queue.length>0){var a=e.state.queue.filter((function(){return!0})),t=a.shift();return e.setState({queue:a}),void e.onRandomAudioLoaded(t)}e.state.fetchingNext||(e.fetchRandomAudio(!0),console.log("FETCH!!!"))},e.getAudioTitle=function(){var a=e.state.currentAudio.filename;return a?a.split("/").pop():"-"},e.getAudioSrc=function(){var a=e.state,t=a.currentAudio,n=a.params.authToken;return t.download_url?t.download_url+".mp3?auth_token="+n:null},e.onSearchPrompt=function(){},e.togglePause=function(){},e.setAudioLength=function(){e.setState({duration:e.audio.duration})},e.canPlay=function(){e.setAudioLength(),e.loadAndPlayAudio(),e.setState({loading:!1,playing:!1})},e.loadAndPlayAudio=function(){var a=e.state,t=a.loadProgress,n=a.firstPlay,o=e.audio.networkState;e.setState({loading:!0}),t<100&&e.setState({loadProgress:t+1}),o!==e.NETWORK_STATE.NETWORK_NO_SOURCE?e.setState({playing:!n,loading:!1,pause:n,loadProgress:100},(function(){e.setState({firstPlay:!1}),e.props.onTogglePause(n)})):e.onAudioLoadError()},e.audioEnd=function(){e.playNext()},e.onAudioLoadError=function(a){e.audio.error&&(console.log("Audio error ",e.audio.error),e.playNext())},e.onAudioSeeked=function(){e.state.playing&&(e.loadAndPlayAudio(),setTimeout((function(){e.setState({playing:!0})})))},e.onPauseAudio=function(){},e.onAudioPlay=function(){e.setState({playing:!0,loading:!1})},e.bindEvents=function(){var a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.audio,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waiting:e.loadAndPlayAudio,canplay:e.canPlay,error:e.onAudioLoadError,ended:e.audioEnd,seeked:e.onAudioSeeked,pause:e.onPauseAudio,play:e.onAudioPlay,timeupdate:e.audioTimeUpdate,stalled:e.onAudioLoadError,abort:e.onAudioAbort},o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.props.once;for(a in n){var s=n[a];o?t.addEventListener(a,s,{once:!(!r||"play"!==a)}):t.removeEventListener(a,s)}},e.onAudioAbort=function(a){e.audio.pause(),e.audio.play()},e._pauseAudio=function(){e.audio.pause(),e.setState({playing:!1,pause:!0})},e.onTogglePlay=function(){var a=e.state.playId;e.onCurrentAudioPlay(a)},e.audioTimeUpdate=function(){var a=e.audio?e.audio.currentTime:0;e.setState({currentTime:a}),e.props.remember&&e.saveLastPlayStatus(),e.props.onAudioProgress&&e.props.onAudioProgress(e.getBaseAudioInfo())},e.getProgressText=function(){var a=e.state.currentTime,t=e.audio?e.audio.duration:0;return b(a)+"/"+b(t)},e.getProgressPercentage=function(){var a=e.state.currentTime,t=e.audio?e.audio.duration:0;return t?a/t*100:0},e.onCurrentAudioPlay=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.state,o=n.playId,r=n.pause,s=n.playing,i=n.currentAudio;if(i.id||console.log("no audio"),a===o&&!t)return e.setState({pause:!r,playing:!s}),r?e.audio.play():e.audio.pause(),void e.props.onTogglePause(!r);var u=a===i.id?i:{},l=function(t){e.setState({currentTime:0,duration:0,playing:!1,loading:!0,loadProgress:0,currentAudio:u,playId:a},(function(){e.audio.load()}))};l(e.getAudioSrc())},e.searchInputKeyPress=function(a){if(13===a.which){var t=a.target.value;console.log("Searching",t),e.state.searchTimeout&&clearTimeout(e.state.searchTimeout);var n=setTimeout((function(){return e.searchSongs(t)}),0);e.setState({searchTimeout:n}),a.target.blur()}},e.onSubmitSearchForm=function(e){e.preventDefault(),A()(e.target).find(".searchInput").trigger("keypress")},e.searchSongs=function(e){var a=this;this.setState({viewQueue:!1}),this.state.xhrSearch&&this.state.xhrSearch.abort();var t=A.a.ajax({url:this.state.params.apiRoot+"/songs/",data:{q:e},method:"GET",dataType:"json",headers:{Authorization:"Token "+this.state.params.authToken}}).done((function(t){a.setState({xhrSearch:null}),console.log("Found "+t.length+' match for query "'+e+'"'),a.setState({searchResults:t})})).fail((function(e){401===e.status&&a.clearAuthToken(),a.setState({searchResults:[]})}));this.setState({xhrSearch:t})},e.deleteAudio=function(a){var t,n,o;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.state.params,n=t.apiRoot,o=t.authToken,r.next=3,l.a.awrap(E()('Are you sure you want to delete this file "'+a.filename.split("/").pop()+'"?'));case 3:r.sent&&A.a.ajax({url:n+"/songs/"+a.id,method:"DELETE",dataType:"JSON",headers:{Authorization:"Token "+o}}).done((function(){console.log("Song "+a.id+" Deleted");var t=e.state.searchResults.filter((function(e){return e.id!==a.id}));e.setState({searchResults:t}),e.state.currentAudio.id===a.id&&e.playNext()})).fail((function(e){401===e.status&&this.clearAuthToken()}));case 5:case"end":return r.stop()}}))},e.editAudioFilename=function(e){var a,t,n,o,r=this;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.a.awrap(E()("new file path",{content:{element:"input",attributes:{defaultValue:e.filename}}}));case 2:(a=s.sent)&&a!==e.filename&&(t=this.state.params,n=t.apiRoot,o=t.authToken,A.a.ajax({url:n+"/songs/"+e.id,method:"PATCH",data:{filename:a},dataType:"JSON",headers:{Authorization:"Token "+o}}).done((function(){console.log("Filename changed from "+e.filename+" to "+a);var t=r.state.searchResults.map((function(t){return t.id!==e.id?t:(t.filename=a,t)}));r.setState({searchResults:t})})).fail((function(e){401===e.status?r.clearAuthToken():E()("Something went wrong...","","error")})));case 4:case"end":return s.stop()}}),null,this)},e.onAudioDownload=function(a){var t=e.state.params.authToken,n=a.filename?a.filename.split("/").pop()+".mp3":"",o=a.download_url+".mp3?auth_token="+t;n&&o&&(e.downloadNode.setAttribute("download",n),e.downloadNode.setAttribute("name",n),e.downloadNode.setAttribute("href",o),e.downloadNode.click())},e.onMP3Upload=function(){var e=window.open("/mp3-upload.html","upload","height=480,width=640");return window.focus&&e.focus(),!1},e.onClickProgressBar=function(a){var t=a.pageX/A()(e.progressBar).width();if(e.audio){var n=e.audio.duration*t;console.log("Seek song "+b(n)),e.audio.currentTime=n}},e.displayQueue=function(a){e.setState({viewQueue:!0})},console.log(e.state.params.authToken),e}return Object(g.a)(a,e),Object(p.a)(a,[{key:"componentWillUnmount",value:function(){this.unBindEvents(this.audio,void 0,!1)}},{key:"componentDidMount",value:function(){this.bindEvents(this.audio),this.state.params.authToken&&this.playNext()}},{key:"render",value:function(){var e=this,a=this.state,t=a.params,n=t.authToken,r=t.username,s=t.isSuperuser,i=a.currentAudio,u=a.attemptingLogin,l=a.pause,c=a.searchResults,d=a.xhrSearch,p=a.queue,m=a.viewQueue;return o.a.createElement("div",null,n&&o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:this.getProgressText()},o.a.createElement("div",{className:"progressbar",onClick:this.onClickProgressBar,ref:function(a){return e.progressBar=a}},o.a.createElement("div",{className:"progressbarBar",style:{width:this.getProgressPercentage()+"%"}}))),n&&!i&&o.a.createElement("div",{id:"loading"},o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," Loading"),!n&&o.a.createElement("div",{className:"loginComponent"},o.a.createElement("form",{className:"loginForm",onSubmit:this.onLogin},o.a.createElement("div",{className:"usernameInputWrapper"},o.a.createElement("input",{ref:function(a){return e.usernameInput=a},type:"text",className:"usernameInput",placeholder:"Username"})),o.a.createElement("div",{className:"passwordInputWrapper"},o.a.createElement("input",{ref:function(a){return e.passwordInput=a},type:"password",className:"passwordInput",placeholder:"Password"})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",className:"loginBtn myBtn"},o.a.createElement("i",{className:u?"fas fa-spinner fa-spin":"fas fa-sign-in-alt fa-fw"})," Login"))),o.a.createElement("p",null,o.a.createElement("small",null,"This app offers its users the pleasure to listen to their favourite songs in a good old stereo fashion.",o.a.createElement("br",null),"No surround sound bullshit here, Good old MPEG-1 standard only.")),o.a.createElement("p",null,o.a.createElement("small",null,"Contact: ",o.a.createElement("a",{href:"mailto:"+x.contact_email},x.contact_email)))),n&&o.a.createElement("div",{className:"jukebox"},o.a.createElement("div",{className:"iconMenu"},o.a.createElement("span",null,o.a.createElement("img",{className:"mainCover"+(l?"":" rotate"),src:i.download_url?i.download_url+".jpg?auth_token="+n:"/vinyl.jpg",alt:""})),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:"Play/Pause"},o.a.createElement("span",{className:"playPauseButton link",onClick:this.onTogglePlay},o.a.createElement("i",{className:l?"fas fa-fw fa-play":"fas fa-fw fa-pause"}))),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:"Next"},o.a.createElement("span",{onClick:this.playNext,className:"link"},o.a.createElement("i",{className:"fas fa-fw fa-forward"}))),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:"Import From Youtube"},o.a.createElement("span",{onClick:this.onYoutubeDlPrompt,className:"link youtube"},o.a.createElement("i",{className:"fab fa-fw fa-youtube"}))),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:"Download"},o.a.createElement("span",{onClick:function(){return e.onAudioDownload(i)},className:"link"},o.a.createElement("a",{href:this.getAudioSrc(),ref:function(a){return e.downloadNode=a}},o.a.createElement("i",{className:"fas fa-fw fa-cloud-download-alt"})))),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:"MP3 Upload"},o.a.createElement("span",{onClick:function(){return e.onMP3Upload(i)},className:"link"},o.a.createElement("i",{className:"fas fa-fw fa-upload"}))),o.a.createElement(w.a,{arrow:!0,placement:"bottom",title:"Sign out"},o.a.createElement("span",{onClick:this.onLogout,className:"logoutBtn link"},o.a.createElement("i",{className:"fas fa-fw fa-sign-out-alt"})))),o.a.createElement("div",{className:"currentTitle"},"Now Playing: ",o.a.createElement("span",{id:"currentTitle",title:i.filename},this.getAudioTitle()||"-")),o.a.createElement("span",{className:"searchInputWrapper"},o.a.createElement("form",{className:"searchForm",onSubmit:this.onSubmitSearchForm},o.a.createElement("input",{type:"search",onKeyPress:this.searchInputKeyPress,className:"searchInput",placeholder:"Search"}),o.a.createElement("span",{onClick:this.displayQueue,className:"link"},o.a.createElement("i",{className:"fas fa-layer-group"})))),m?o.a.createElement("div",{className:"queueList"},p.map((function(a,t){return o.a.createElement(N,{key:a.id,audio:a,username:r,isSuperuser:s,queueIndex:t,onQueueAudio:e.onQueueAudio,onRandomAudioLoaded:e.onRandomAudioLoaded.bind(e),deleteAudio:e.deleteAudio.bind(e),editAudioFilename:e.editAudioFilename.bind(e)})}))):o.a.createElement("div",{className:"searchResults"},d&&o.a.createElement("i",{className:"fas fa-spin fa-2x fa-compact-disc"}),!d&&c.map((function(a){return o.a.createElement(T,{key:a.id,audio:a,username:r,isSuperuser:s,queue:p,onQueueAudio:e.onQueueAudio,onRandomAudioLoaded:e.onRandomAudioLoaded.bind(e),deleteAudio:e.deleteAudio.bind(e),editAudioFilename:e.editAudioFilename.bind(e)})})))),o.a.createElement("div",{className:"version"},o.a.createElement("small",null," v"+x.version)),o.a.createElement("audio",{key:"audio",className:"music-player-audio",preload:"auto",src:this.getAudioSrc(),ref:function(a){return e.audio=a}}))}}]),a}(o.a.PureComponent);var j=function(){var e=o.a.useState(!1),a=Object(i.a)(e,2),t=a[0],n=a[1];Object(S.a)(t);var r=Object(P.b)().enqueueSnackbar;return o.a.createElement(L,{snackbarMessage:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r(e,a)},onTogglePause:function(e){console.log("noSleep "+(e?"off":"on")),n(!e)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(120),_=t(72);O.a({dsn:"https://b31de5237b044454b3b61080061d6abd@o91052.ingest.sentry.io/273693",integrations:[new _.a.BrowserTracing],tracesSampleRate:.1}),s.a.render(o.a.createElement(P.a,{maxSnack:5},o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.81a4df9a.chunk.js.map