(window["webpackJsonpreact-nickelodeon"]=window["webpackJsonpreact-nickelodeon"]||[]).push([[0],{31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},42:function(e){e.exports=JSON.parse('{"name":"react-nickelodeon","version":"2020110200","private":true,"homepage":"https://www.humppakone.com","api_homepage":"https://api.humppakone.com","contact_email":"info@humppakone.com","dependencies":{"@sentry/browser":"^5.14.2","gh-pages":"^2.1.1","is-mobile":"^2.1.0","jquery":"^3.4.1","react":"^16.9.0","react-dom":"^16.9.0","react-icons":"^3.7.0","react-scripts":"3.1.1","sweetalert":"^2.1.2","use-no-sleep":"^0.3.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn run build && cp CNAME ./build","deploy":"gh-pages -b gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},43:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(26),i=a.n(r),s=(a(36),a(30)),u=a(10),l=a.n(u),c=a(21),d=a(11),p=a(12),m=a(14),f=a(13),h=a(15),g=a(7),v=a.n(g),A=a(6),E=a.n(A),y=a(27);var k=function(e){return("0"+e).slice(-2)},S=function(e){e=Math.round(e);var t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return[k(t),k(a),k(n)].join(":")},N=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.audio,n=t.queue,r=t.username,i=n.findIndex((function(e){return e.id===a.id}));return o.a.createElement("div",{className:"searchResultItem"},o.a.createElement("span",{className:"link",title:a.filename,onClick:function(){return e.props.onQueueAudio(a)}},o.a.createElement("img",{className:"cover",src:"/vinyl.jpg",alt:"cover"}),-1!==i&&o.a.createElement("div",{class:"queueNumber"},(i+1).toString())),o.a.createElement("span",{className:"link",title:a.filename,onClick:function(){return e.props.onRandomAudioLoaded(a)}},a.filename.split("/").pop()),r===a.owner&&o.a.createElement("span",{className:"searchResultActions"},o.a.createElement("span",{className:"link",onClick:function(){return e.props.editAudioFilename(a)}},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement("span",{className:"link",onClick:function(){return e.props.deleteAudio(a)}},o.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(o.a.PureComponent),w=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.audio,n=t.username,r=t.queueIndex;return o.a.createElement("div",{className:"queueItem"},o.a.createElement("span",{title:a.filename},o.a.createElement("img",{className:"cover",src:"/vinyl.jpg",alt:"cover"}),-1!==r&&o.a.createElement("div",{class:"queueNumber"},(r+1).toString())),o.a.createElement("span",{className:"link",title:a.filename,onClick:function(){return e.props.onRandomAudioLoaded(a)}},a.filename.split("/").pop()),n===a.owner&&o.a.createElement("span",{className:"searchResultActions"},o.a.createElement("span",{className:"link",onClick:function(){return e.props.editAudioFilename(a)}},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement("span",{className:"link",onClick:function(){return e.props.deleteAudio(a)}},o.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(o.a.PureComponent),T=a(42),b={apiRoot:localStorage.devserver||T.api_homepage,authToken:localStorage.getItem("auth_token"),username:localStorage.getItem("username")},P=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).NETWORK_STATE={NETWORK_EMPTY:0,NETWORK_IDLE:1,NETWORK_LOADING:2,NETWORK_NO_SOURCE:3},e.READY_SUCCESS_STATE=4,e.state={params:b,currentAudio:{},queue:[],xhrRand:[],attemptingLogin:!1,currentTime:0,pause:!0,playId:"",fetchingNext:!1,firstPlay:!0,playing:!1,searchResults:[],searchTimeout:null,xhrSearch:null,viewQueue:!1},e.unBindEvents=function(){var t;(t=e).bindEvents.apply(t,arguments)},e.onLogin=function(t){t.preventDefault();var a=e.usernameInput.value,n=e.passwordInput.value;E.a.ajax({url:e.state.params.apiRoot+"/login/",data:{username:a,password:n},dataType:"json",method:"POST"}).done(e.onLoginSuccess).fail(e.onLoginFail),e.setState({attemptingLogin:!0})},e.onLoginSuccess=function(t){var a=Object(c.a)({},e.state.params,{authToken:t.token,username:t.user.username});e.setState({params:a,attemptingLogin:!1}),localStorage.setItem("auth_token",t.token),localStorage.setItem("username",t.user.username),console.log("Login successful"),e.playNext()},e.onLoginFail=function(){e.setState({attemptingLogin:!1}),v()("Error","Username/Password do not match.","error")},e.fetchRandomAudio=function(){var t=E.a.ajax({url:e.state.params.apiRoot+"/songs/random?t="+ +new Date,method:"GET",dataType:"json",headers:{Authorization:"Token "+e.state.params.authToken}}).done((function(t){return e.onRandomAudioLoaded(t)})).fail(e.onAjaxFail),a=e.state.xhrRand;a.push(t);var n=a.filter((function(e){return 4!==e.readyState}));e.setState({xhrRand:n,fetchingNext:!0})},e.onQueueAudio=function(t){var a=e.state.queue.filter((function(){return!0}));a.push(t),e.setState({queue:a})},e.onfetchingError=function(t){e.setState({fetchingNext:!1}),e.onAjaxFail(t)},e.clearAuthToken=function(){var t=Object(c.a)({},e.state.params,{authToken:null});localStorage.setItem("auth_token",""),e.setState({params:t})},e.onLogout=function(t){t.preventDefault(),e.state.pause||e.onCurrentAudioPlay("-"),e.setState({params:b,currentAudio:{},playId:"",xhrRand:[],attemptingLogin:!1,currentTime:0,pause:!0,fetchingNext:!1,firstPlay:!0,playing:!1}),e.clearAuthToken(),E.a.ajax({url:e.state.params.apiRoot+"/logout/",method:"POST",headers:{Authorization:"Token "+e.state.params.authToken}}).done((function(e){console.log("Logged out, token removed")}))},e.onYoutubeDlPrompt=function(){var t,a,n;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,l.a.awrap(v()("Enter a Youtube URL:",{content:"input"}));case 2:if(t=o.sent,a=null,n=[{pos:1,re:/^([a-zA-Z0-9_-]{11})$/},{pos:4,re:/^(https?:\/\/)?(www\.|m\.)?youtube\.com\/watch\?(.*&)?v=([a-zA-Z0-9_-]{11})(&.*)?#?$/},{pos:2,re:/^(https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})(\?.*)?#?$/}],t){o.next=7;break}return o.abrupt("return");case 7:(a=n.map((function(e){return e.re.test(t)?t.match(e.re)[e.pos]:null})).filter((function(e){return!!e}))[0])?(console.log("Sending intent to download video "+a),E.a.ajax({url:e.state.params.apiRoot+"/youtube-dl/",data:{v:a},type:"POST",headers:{Authorization:"Token "+e.state.params.authToken}}).done((function(e){return console.log("task id: "+e.task_id)})).fail((function(t){return e.onYoutubeFail(t,a)}))):v()("Error","Invalid Youtube URL","error");case 9:case"end":return o.stop()}}))},e.onYoutubeFail=function(t,a){401===t.status?e.clearAuthToken():v()("Oops!","Youtube download "+a+" did not go through...","error")},e.onAjaxFail=function(t){401===t.status&&e.clearAuthToken()},e.onRandomAudioLoaded=function(t){if(console.log("GOTCHA!!! ",t),e.setState({fetchingNext:!1,currentAudio:t}),"mediaSession"in navigator){var a=t.filename;navigator.mediaSession.metadata=new MediaMetadata({title:a.split("/").pop(),artwork:[{src:t.download_url+".jpg?auth_token="+e.state.params.authToken,sizes:"500x500",type:"image/jpg"}]}),navigator.mediaSession.setActionHandler("play",(function(){e.setState({pause:!1,playing:!0}),e.audio.play(),e.props.ontogglePause(!1)})),navigator.mediaSession.setActionHandler("pause",(function(){e.setState({pause:!0,playing:!0}),e.audio.pause(),e.props.ontogglePause(!0)})),navigator.mediaSession.setActionHandler("nexttrack",e.playNext)}},e.playNext=function(){if(console.log("NEXT!!!"),e.setState({playId:"",currentAudio:{}}),e.state.queue.length>0){var t=e.state.queue.filter((function(){return!0})),a=t.shift();return e.setState({queue:t}),void e.onRandomAudioLoaded(a)}e.state.fetchingNext||(e.fetchRandomAudio(!0),console.log("FETCH!!!"))},e.getAudioTitle=function(){var t=e.state.currentAudio.filename;return t?t.split("/").pop():"-"},e.getAudioSrc=function(){var t=e.state,a=t.currentAudio,n=t.params.authToken;return a.download_url?a.download_url+".mp3?auth_token="+n:null},e.onSearchPrompt=function(){},e.togglePause=function(){},e.setAudioLength=function(){e.setState({duration:e.audio.duration})},e.canPlay=function(){e.setAudioLength(),e.loadAndPlayAudio(),e.setState({loading:!1,playing:!1})},e.loadAndPlayAudio=function(){var t=e.state,a=t.loadProgress,n=t.firstPlay,o=e.audio.networkState;e.setState({loading:!0}),a<100&&e.setState({loadProgress:a+1}),o!==e.NETWORK_STATE.NETWORK_NO_SOURCE?e.setState({playing:!n,loading:!1,pause:n,loadProgress:100},(function(){e.setState({firstPlay:!1})})):e.onAudioLoadError()},e.audioEnd=function(){e.playNext()},e.onAudioLoadError=function(t){e.audio.error&&(console.log("Audio error ",e.audio.error),e.playNext())},e.onAudioSeeked=function(){e.state.playing&&(e.loadAndPlayAudio(),setTimeout((function(){e.setState({playing:!0})})))},e.onPauseAudio=function(){},e.onAudioPlay=function(){e.setState({playing:!0,loading:!1})},e.bindEvents=function(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.audio,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waiting:e.loadAndPlayAudio,canplay:e.canPlay,error:e.onAudioLoadError,ended:e.audioEnd,seeked:e.onAudioSeeked,pause:e.onPauseAudio,play:e.onAudioPlay,timeupdate:e.audioTimeUpdate,stalled:e.onAudioLoadError,abort:e.onAudioAbort},o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.props.once;for(t in n){var i=n[t];o?a.addEventListener(t,i,{once:!(!r||"play"!==t)}):a.removeEventListener(t,i)}},e.onAudioAbort=function(t){e.audio.pause(),e.audio.play()},e._pauseAudio=function(){e.audio.pause(),e.setState({playing:!1,pause:!0})},e.onTogglePlay=function(){var t=e.state.playId;e.onCurrentAudioPlay(t)},e.audioTimeUpdate=function(){var t=e.audio?e.audio.currentTime:0;e.setState({currentTime:t}),e.props.remember&&e.saveLastPlayStatus(),e.props.onAudioProgress&&e.props.onAudioProgress(e.getBaseAudioInfo())},e.getProgressText=function(){var t=e.state.currentTime,a=e.audio?e.audio.duration:0;return S(t)+"/"+S(a)},e.getProgressPercentage=function(){var t=e.state.currentTime,a=e.audio?e.audio.duration:0;return a?t/a*100:0},e.onCurrentAudioPlay=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.state,o=n.playId,r=n.pause,i=n.playing,s=n.currentAudio;if(s.id||console.log("no audio"),t===o&&!a)return e.setState({pause:!r,playing:!i}),r?e.audio.play():e.audio.pause(),void e.props.onTogglePause(r);var u=t===s.id?s:{},l=function(a){e.setState({currentTime:0,duration:0,playing:!1,loading:!0,loadProgress:0,currentAudio:u,playId:t},(function(){e.audio.load()}))};l(e.getAudioSrc())},e.searchInputKeyPress=function(t){if(13===t.which){var a=t.target.value;console.log("Searching",a),e.state.searchTimeout&&clearTimeout(e.state.searchTimeout);var n=setTimeout((function(){return e.searchSongs(a)}),0);e.setState({searchTimeout:n}),t.target.blur()}},e.onSubmitSearchForm=function(e){e.preventDefault(),E()(e.target).find(".searchInput").trigger("keypress")},e.searchSongs=function(e){var t=this;this.setState({viewQueue:!1}),this.state.xhrSearch&&this.state.xhrSearch.abort();var a=E.a.ajax({url:this.state.params.apiRoot+"/songs/",data:{q:e},method:"GET",dataType:"json",headers:{Authorization:"Token "+this.state.params.authToken}}).done((function(a){t.setState({xhrSearch:null}),console.log("Found "+a.length+' match for query "'+e+'"'),t.setState({searchResults:a})})).fail((function(e){401===e.status&&t.clearAuthToken(),t.setState({searchResults:[]})}));this.setState({xhrSearch:a})},e.deleteAudio=function(t){var a,n,o;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.state.params,n=a.apiRoot,o=a.authToken,r.next=3,l.a.awrap(v()('Are you sure you want to delete this file "'+t.filename.split("/").pop()+'"?'));case 3:r.sent&&E.a.ajax({url:n+"/songs/"+t.id,method:"DELETE",dataType:"JSON",headers:{Authorization:"Token "+o}}).done((function(){console.log("Song "+t.id+" Deleted");var a=e.state.searchResults.filter((function(e){return e.id!==t.id}));e.setState({searchResults:a}),e.state.currentAudio.id===t.id&&e.playNext()})).fail((function(e){401===e.status&&this.clearAuthToken()}));case 5:case"end":return r.stop()}}))},e.editAudioFilename=function(e){var t,a,n,o,r=this;return l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l.a.awrap(v()("new file path",{content:{element:"input",attributes:{defaultValue:e.filename}}}));case 2:(t=i.sent)&&t!==e.filename&&(a=this.state.params,n=a.apiRoot,o=a.authToken,E.a.ajax({url:n+"/songs/"+e.id,method:"PATCH",data:{filename:t},dataType:"JSON",headers:{Authorization:"Token "+o}}).done((function(){console.log("Filename changed from "+e.filename+" to "+t);var a=r.state.searchResults.map((function(a){return a.id!==e.id?a:(a.filename=t,a)}));r.setState({searchResults:a})})).fail((function(e){401===e.status?r.clearAuthToken():v()("Something went wrong...","","error")})));case 4:case"end":return i.stop()}}),null,this)},e.onAudioDownload=function(t){var a=e.state.params.authToken,n=t.filename?t.filename.split("/").pop()+".mp3":"",o=t.download_url+".mp3?auth_token="+a;n&&o&&(e.downloadNode.setAttribute("download",n),e.downloadNode.setAttribute("name",n),e.downloadNode.setAttribute("href",o),e.downloadNode.click())},e.onMP3Upload=function(){var e=window.open("/mp3-upload.html","upload","height=480,width=640");return window.focus&&e.focus(),!1},e.onClickProgressBar=function(t){var a=t.pageX/E()(e.progressBar).width();if(e.audio){var n=e.audio.duration*a;console.log("Seek song "+S(n)),e.audio.currentTime=n}},e.displayQueue=function(t){e.setState({viewQueue:!0})},console.log(e.state.params.authToken),e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){this.unBindEvents(this.audio,void 0,!1)}},{key:"componentDidMount",value:function(){this.bindEvents(this.audio),this.state.params.authToken&&this.playNext()}},{key:"render",value:function(){var e=this,t=this.state,a=t.params,n=a.authToken,r=a.username,i=t.currentAudio,s=t.attemptingLogin,u=t.pause,l=t.searchResults,c=t.xhrSearch,d=t.queue,p=t.viewQueue;return o.a.createElement("div",null,n&&o.a.createElement("div",{className:"progressbar",onClick:this.onClickProgressBar,ref:function(t){return e.progressBar=t},title:this.getProgressText()},o.a.createElement("div",{className:"progressbarBar",style:{width:this.getProgressPercentage()+"%"}})),n&&!i&&o.a.createElement("div",{id:"loading"},o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," Loading"),!n&&o.a.createElement("div",{className:"loginComponent"},o.a.createElement("form",{className:"loginForm",onSubmit:this.onLogin},o.a.createElement("div",{className:"usernameInputWrapper"},o.a.createElement("input",{ref:function(t){return e.usernameInput=t},type:"text",className:"usernameInput",placeholder:"Username"})),o.a.createElement("div",{className:"passwordInputWrapper"},o.a.createElement("input",{ref:function(t){return e.passwordInput=t},type:"password",className:"passwordInput",placeholder:"Password"})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",className:"loginBtn myBtn"},o.a.createElement("i",{className:s?"fas fa-spinner fa-spin":"fas fa-sign-in-alt fa-fw"})," Login"))),o.a.createElement("p",null,o.a.createElement("small",null,"This app offers its users the pleasure to listen to their favourite songs in a good old stereo fashion.",o.a.createElement("br",null),"No surround sound bullshit here, Good old MPEG-1 standard only.")),o.a.createElement("p",null,o.a.createElement("small",null,"Contact: ",o.a.createElement("a",{href:"mailto:"+T.contact_email},T.contact_email)))),n&&o.a.createElement("div",{className:"jukebox"},o.a.createElement("div",{className:"iconMenu"},o.a.createElement("span",null,o.a.createElement("img",{className:"mainCover"+(u?"":" rotate"),src:i.download_url?i.download_url+".jpg?auth_token="+n:"/vinyl.jpg",alt:""})),o.a.createElement("span",{className:"playPauseButton link",onClick:this.onTogglePlay,title:"Play/Pause"},o.a.createElement("i",{className:u?"fas fa-fw fa-play":"fas fa-fw fa-pause"})),o.a.createElement("span",{onClick:this.playNext,title:"Next",className:"link"},o.a.createElement("i",{className:"fas fa-fw fa-forward"})),o.a.createElement("span",{onClick:this.onYoutubeDlPrompt,title:"Import From Youtube",className:"link youtube"},o.a.createElement("i",{className:"fab fa-fw fa-youtube"})),o.a.createElement("span",{onClick:function(){return e.onAudioDownload(i)},title:"Download",className:"link"},o.a.createElement("a",{href:this.getAudioSrc(),ref:function(t){return e.downloadNode=t}},o.a.createElement("i",{className:"fas fa-fw fa-cloud-download-alt"}))),o.a.createElement("span",{onClick:function(){return e.onMP3Upload(i)},title:"MP3 Upload",className:"link"},o.a.createElement("i",{className:"fas fa-fw fa-upload"})),o.a.createElement("span",{onClick:this.onLogout,title:"Sign out",className:"logoutBtn link"},o.a.createElement("i",{className:"fas fa-fw fa-sign-out-alt"}))),o.a.createElement("div",{className:"currentTitle"},"Now Playing: ",o.a.createElement("span",{id:"currentTitle",title:i.filename},this.getAudioTitle()||"-")),o.a.createElement("p",{className:"searchInputWrapper"},o.a.createElement("form",{className:"searchForm",onSubmit:this.onSubmitSearchForm},o.a.createElement("input",{type:"search",onKeyPress:this.searchInputKeyPress,className:"searchInput",placeholder:"Search"}),o.a.createElement("span",{onClick:this.displayQueue,className:"link"},o.a.createElement("i",{className:"fas fa-layer-group"})))),p?o.a.createElement("div",{className:"queueList"},d.map((function(t,a){return o.a.createElement(w,{key:t.id,audio:t,username:r,queueIndex:a,onQueueAudio:e.onQueueAudio,onRandomAudioLoaded:e.onRandomAudioLoaded.bind(e),deleteAudio:e.deleteAudio.bind(e),editAudioFilename:e.editAudioFilename.bind(e)})}))):o.a.createElement("div",{className:"searchResults"},c&&o.a.createElement("i",{className:"fas fa-spin fa-2x fa-compact-disc"}),!c&&l.map((function(t){return o.a.createElement(N,{key:t.id,audio:t,username:r,queue:d,onQueueAudio:e.onQueueAudio,onRandomAudioLoaded:e.onRandomAudioLoaded.bind(e),deleteAudio:e.deleteAudio.bind(e),editAudioFilename:e.editAudioFilename.bind(e)})})))),o.a.createElement("div",{className:"version"},o.a.createElement("small",null," v"+T.version)),o.a.createElement("audio",{key:"audio",className:"music-player-audio",preload:"auto",src:this.getAudioSrc(),ref:function(t){return e.audio=t}}))}}]),t}(o.a.PureComponent);var x=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(y.a)(a),o.a.createElement(P,{onTogglePause:function(e){return n(!e)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48).a({dsn:"https://b31de5237b044454b3b61080061d6abd@sentry.io/273693"}),i.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.3c7b4a4a.chunk.js.map