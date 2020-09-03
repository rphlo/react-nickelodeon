import React from "react";
import swal from "sweetalert";
import $ from "jquery";
import { printTime } from "./utils";
import SearchResultItem from "./components/searchResultItem";
import QueueItem from "./components/queueItem";

const pkg = require('../package.json');

const options = {
  //audio lists model
  apiRoot: localStorage.devserver || pkg.api_homepage,
  authToken: localStorage.getItem('auth_token'),
  username: localStorage.getItem('username'),
};

class App extends React.PureComponent {
  NETWORK_STATE = {
    NETWORK_EMPTY: 0,
    NETWORK_IDLE: 1,
    NETWORK_LOADING: 2,
    NETWORK_NO_SOURCE: 3
  };
  READY_SUCCESS_STATE = 4;
  state = {
    params: options,
    currentAudio: {},
    queue: [],
    xhrRand: [],
    attemptingLogin: false,
    currentTime: 0,
    pause: true,
    playId:'',
    fetchingNext: false,
    firstPlay: true,
    playing: false,
    searchResults: [],
    searchTimeout: null,
    xhrSearch: null,
    viewQueue: false,
  };

  constructor() {
    super();
    console.log(this.state.params.authToken)
  }

  componentWillUnmount() {
    this.unBindEvents(this.audio, undefined, false);
    this.media.removeListener(this.listenerIsMobile);
    this.media = undefined;
  }
  
  componentDidMount() {
    this.addMobileListener();
    this.bindEvents(this.audio);
    if(this.state.params.authToken) {
      this.playNext();
    }
  }
  unBindEvents = (...options) => {
    this.bindEvents(...options);
  };

  onLogin = (e) => {
    e.preventDefault();
    const username = this.usernameInput.value,
          password = this.passwordInput.value;
    $.ajax({
      url: this.state.params.apiRoot + '/login/',
      data: {
        username: username,
        password: password
      },
      dataType: 'json',
      method: 'POST'
    })
    .done(this.onLoginSuccess)
    .fail(this.onLoginFail);
    this.setState({attemptingLogin: true})
  };
  addMobileListener = () => {
    this.media = window.matchMedia(
      "(max-width: 768px) and (orientation : portrait)"
    );
    this.media.addListener(this.listenerIsMobile);
  };
  onLoginSuccess = (response) => {
    const data = {
      ...this.state.params,
      authToken: response.token,
      username: response.user.username
    }
    this.setState({
      params: data,
      attemptingLogin: false
    });
    localStorage.setItem('auth_token', response.token);
    localStorage.setItem('username', response.user.username);
    console.log('Login successful');
    this.playNext();
  }
  onLoginFail = () => {
    this.setState({attemptingLogin: false})
    swal('Error', 'Username/Password do not match.', 'error');
  }
  fetchRandomAudio = () => {
    const jqXhr = $.ajax({
        url: this.state.params.apiRoot + '/songs/random?t='+(+new Date()),
        method: 'GET',
        dataType: 'json',
        headers: {
            Authorization: 'Token ' + this.state.params.authToken
        }
    })
    .done((r)=>this.onRandomAudioLoaded(r))
    .fail(this.onAjaxFail);

    const xhrRand = this.state.xhrRand;
    xhrRand.push(jqXhr);
    const newXhrRand = xhrRand.filter(xhr => xhr.readyState !== 4);

    this.setState({
      xhrRand: newXhrRand,
      fetchingNext: true,
    });
  };
  onQueueAudio = (audio) => {
    const newQueue = this.state.queue.filter(()=>true);
    newQueue.push(audio);
    this.setState({queue: newQueue});
  };
  onfetchingError = (e) => {
    this.setState({
      fetchingNext: false
    });
    this.onAjaxFail(e);
  };
  clearAuthToken = () => {
    const data = {
      ...this.state.params,
      authToken: null
    };
    localStorage.setItem('auth_token', '');
    this.setState({
      params: data
    });
  }
  onLogout = (e) => {
    e.preventDefault();
    if (!this.state.pause)this.onCurrentAudioPlay('-');
    this.setState({
      params: options,
      currentAudio: {},
      playId:'',
      xhrRand: [],
      attemptingLogin: false,
      currentTime: 0,
      pause: true,
      fetchingNext: false,
      firstPlay: true,
      playing: false,
    })
    this.clearAuthToken();
    $.ajax({
      url: this.state.params.apiRoot + '/logout/',
      method: 'POST',
      headers: {
          Authorization: 'Token ' + this.state.params.authToken
      }
    })
    .done(e => {console.log('Logged out, token removed')});
  }
  onYoutubeDlPrompt = async () => {
    const url = await swal("Enter a Youtube URL:", {
      content: "input",
    })
    let videoId = null;
    const ytVideoIdRe = [
      {pos: 1, re: /^([a-zA-Z0-9_-]{11})$/},
      {pos: 4, re: /^(https?:\/\/)?(www\.|m\.)?youtube\.com\/watch\?(.*&)?v=([a-zA-Z0-9_-]{11})(&.*)?#?$/},
      {pos: 2, re: /^(https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})(\?.*)?#?$/}
    ];
    if (!url) {
      return;
    }
    videoId = ytVideoIdRe.map(function(re) {
      if (re.re.test(url)) {
        return url.match(re.re)[re.pos];
      }
      return null;
    }).filter(el => !!el)[0];
    if (videoId) {
      console.log('Sending intent to download video ' + videoId);
      $.ajax(
        {
          url: this.state.params.apiRoot + '/youtube-dl/',
          data: {
            v: videoId
          },
          type: 'POST',
          headers: {
            Authorization: 'Token ' + this.state.params.authToken
          }
        }
      )
      .done(response => console.log('task id: ' + response.task_id))
      .fail(e => this.onYoutubeFail(e, videoId));
    } else {
      swal('Error', 'Invalid Youtube URL', 'error');
    }   
  }
  onYoutubeFail = (e, videoId) => {
    if (e.status === 401) {
      this.clearAuthToken();
    } else {
      swal('Oops!', 'Youtube download ' + videoId + ' did not go through...', 'error');
    }
  }
  onAjaxFail = (e) => {
    if (e.status === 401) {
      this.clearAuthToken();
    }
  }
  onRandomAudioLoaded = audioInfo => {
    console.log('GOTCHA!!! ', audioInfo)
    this.setState({
      fetchingNext: false,
      currentAudio: audioInfo,
    });

    if ('mediaSession' in navigator) {
      /*eslint-disable no-undef*/
      const filename = audioInfo.filename
      navigator.mediaSession.metadata = new MediaMetadata({
        title: filename.split('/').pop(),
        artwork: [
          { src: audioInfo.download_url + '.jpg?auth_token=' + this.state.params.authToken, sizes: '500x500', type: 'image/jpg' },
        ]
      });
      /*eslint-enable no-undef*/

      navigator.mediaSession.setActionHandler('play', ()=>{
        this.setState({ pause: false, playing: true });
        this.audio.play();
      });
      navigator.mediaSession.setActionHandler('pause', ()=>{
        this.setState({ pause: true, playing: true });
        this.audio.pause();
      });
      navigator.mediaSession.setActionHandler('nexttrack', this.playNext);
    }
  }
  playNext = () => {
    console.log('NEXT!!!')
    this.setState({
      playId: '',
      currentAudio: {}
    });
    if (this.state.queue.length > 0) {
      const newQueue = this.state.queue.filter(() => true);
      const nextAudio = newQueue.shift();
      this.setState({queue: newQueue});
      this.onRandomAudioLoaded(nextAudio);
      return
    }
    if (!this.state.fetchingNext) {
      this.fetchRandomAudio(true)
      console.log('FETCH!!!')
    }
  }
  getAudioTitle = () => {
    const { filename } = this.state.currentAudio;
    return filename ? filename.split('/').pop() : '-'
  }
  getAudioSrc = () => {
    const { currentAudio, params: { authToken } } = this.state;
    return currentAudio.download_url ? currentAudio.download_url + '.mp3?auth_token=' + authToken : null;
  }
  onSearchPrompt = () => {
  }
  togglePause = () => {

  }
  setAudioLength = () => {
    this.setState({
      duration: this.audio.duration
    });
  };
  canPlay = () => {
    this.setAudioLength();
    this.loadAndPlayAudio();
    this.setState({
      loading: false,
      playing: false
    });
  };
  loadAndPlayAudio = () => {
    const { loadProgress, firstPlay } = this.state;
    const { networkState } = this.audio;
    const maxLoadProgress = 100;
    this.setState({ loading: true });
    if (loadProgress < maxLoadProgress) {
      this.setState({ loadProgress: loadProgress + 1 });
    }
    if (
      networkState !== this.NETWORK_STATE.NETWORK_NO_SOURCE
    ) {
      
      this.setState(
        {
          playing: !firstPlay,
          loading: false,
          pause: firstPlay,
          loadProgress: maxLoadProgress
        },
        () => {
          if (firstPlay) {
            //this.audio.play();
          }
          this.setState({ firstPlay: false });
        }
      );
    } else {
      this.onAudioLoadError();
    }
  };
  audioEnd = () => {
    this.playNext();
  };
  onAudioLoadError = e => {
    if (this.audio.error) {
      console.log('Audio error ', this.audio.error);
      this.playNext();
    }
  };
  onAudioSeeked = () => {
    if (this.state.playing) {
      this.loadAndPlayAudio();
      setTimeout(() => {
         this.setState({ playing: true });
      });
    }
  };
  onPauseAudio = () => {
  };
  onAudioPlay = () => {
    this.setState({ playing: true, loading: false });
  };
  bindEvents = (
    target = this.audio,
    eventsNames = {
      waiting: this.loadAndPlayAudio,
      canplay: this.canPlay,
      error: this.onAudioLoadError,
      ended: this.audioEnd,
      seeked: this.onAudioSeeked,
      pause: this.onPauseAudio,
      play: this.onAudioPlay,
      timeupdate: this.audioTimeUpdate,
      stalled: this.onAudioLoadError,
      abort: this.onAudioAbort
    },
    bind = true
  ) => {
    const { once } = this.props;
    let name;
    for (name in eventsNames) {
      const _events = eventsNames[name];
      bind
        ? target.addEventListener(name, _events, {
            once: !!(once && name === "play")
          })
        : target.removeEventListener(name, _events);
    }
  };
  onAudioAbort = e => {
      this.audio.pause()
      this.audio.play();
  };
  _pauseAudio = () => {
    this.audio.pause();
    this.setState({ playing: false, pause: true });
  };
  onTogglePlay = () => {
    const { playId } = this.state;
    this.onCurrentAudioPlay(playId);
  }
  audioTimeUpdate = () => {
    const currentTime = this.audio ? this.audio.currentTime : 0;
    this.setState({ currentTime });
    if (this.props.remember) {
      this.saveLastPlayStatus();
    }
    this.props.onAudioProgress &&
      this.props.onAudioProgress(this.getBaseAudioInfo());
  };
  getProgressText = () => {
    const { currentTime } = this.state;
    const duration = this.audio ? this.audio.duration : 0;
    return printTime(currentTime) + '/' + printTime(duration);
  };
  getProgressPercentage = () => {
    const { currentTime } = this.state;
    const duration = this.audio ? this.audio.duration : 0;
    return duration ? currentTime / duration * 100 : 0;
  }
  onCurrentAudioPlay = (playId, ignore = false) => {
    const { playId: currentPlayId, pause, playing, currentAudio } = this.state;

    if (!currentAudio.id) {
      /*eslint-disable no-console*/
      console.log('no audio')
      /*eslint-disable no-console*/
    }
    if (playId === currentPlayId && !ignore) {
      this.setState({ pause: !pause, playing: !playing });
      if (pause) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
      return 
    }

    const playingAudio = playId === currentAudio.id ? currentAudio : {}
    const loadAudio = musicSrc => {
      this.setState(
        {
          currentTime: 0,
          duration: 0,
          playing: false,
          loading: true,
          loadProgress: 0,
          currentAudio: playingAudio,
          playId,
        },
        () => {
          this.audio.load();
        }
      );
    };

    loadAudio(this.getAudioSrc());
  };
  searchInputKeyPress = (e) => {
    if (e.which === 13) {
      const query = e.target.value;
      console.log('Searching', query);
      if (this.state.searchTimeout) {
        clearTimeout(this.state.searchTimeout);
      }
      const searchTimeout = setTimeout(
        () => this.searchSongs(query),
        0,
      );
      this.setState({searchTimeout});
      e.target.blur()
    }
  }
  onSubmitSearchForm = (e) => {
    e.preventDefault();
    $(e.target).find('.searchInput').trigger('keypress');
  }
  searchSongs = function(query) {
    this.setState({viewQueue: false});
    if (this.state.xhrSearch) {
      this.state.xhrSearch.abort();
    }
    const xhrSearch = $.ajax({
      url: this.state.params.apiRoot + '/songs/',
      data: {'q': query},
      method: 'GET',
      dataType: 'json',
      headers: {
          Authorization: 'Token ' + this.state.params.authToken
      }
    }).done(songs => {
        this.setState({xhrSearch: null});
        console.log('Found ' + songs.length + ' match for query "' + query + '"');
        this.setState({searchResults: songs});
    }).fail(e => {
        if (e.status === 401) {
            this.clearAuthToken();
        }
        this.setState({searchResults: []});
    });
    this.setState({xhrSearch: xhrSearch});
  };
  deleteAudio = async (song) => {
    const { apiRoot, authToken } = this.state.params;
    const hasConfirmed = await swal('Are you sure you want to delete this file "'+song.filename.split('/').pop()+'"?');
    if (hasConfirmed) {
      $.ajax({
        url: apiRoot + '/songs/' + song.id,
        method: 'DELETE',
        dataType: 'JSON',
        headers: {
          Authorization: 'Token ' + authToken
        }
      }).done(() => {
        console.log('Song ' + song.id + ' Deleted');
        const searchResults = this.state.searchResults.filter(s => s.id !== song.id);
        this.setState({searchResults});
        //queue = queue.filter(function(s) {return s.id !== song.id});
        if (this.state.currentAudio.id === song.id) {
          this.playNext();
        }
      }).fail(function (e) {
        if (e.status === 401) {
          this.clearAuthToken();
        }
      });
    }
  };
  editAudioFilename = async function(song) {
    var newPath = await swal('new file path', {
      content: {
        element: 'input',
        attributes: {
          defaultValue: song.filename,
        }
      }
    });
    if (newPath && newPath !== song.filename) {
        const { apiRoot, authToken } = this.state.params;
        $.ajax({
            url: apiRoot + '/songs/'+song.id,
            method: 'PATCH',
            data: {filename: newPath},
            dataType: 'JSON',
            headers: {
              Authorization: 'Token ' + authToken
            }
        }).done(() => {
          console.log('Filename changed from '+ song.filename + ' to ' + newPath);
          const searchResults = this.state.searchResults.map(s => {
            if(s.id !== song.id) {
              return s
            }
            s.filename = newPath;
            return s;
          });
          this.setState({searchResults});
        }).fail(e => {
          if (e.status === 401) {
            this.clearAuthToken()
          } else {
            swal('Something went wrong...', '', 'error');
          }
        });
    }
  };
  onAudioDownload = audio => {
    const { authToken } = this.state.params;
    const name = audio.filename ? audio.filename.split('/').pop() + '.mp3' : '';
    const url = audio.download_url + '.mp3?auth_token=' + authToken
    if (name && url) {
      this.downloadNode.setAttribute("download", name);
      this.downloadNode.setAttribute("name", name);
      this.downloadNode.setAttribute("href", url);
      this.downloadNode.click();
    }
  };
  onMP3Upload = () => {
    const newWindow = window.open('/mp3-upload.html', 'upload', 'height=480,width=640');
    if (window.focus) {
       newWindow.focus()
    }
    return false;
  };
  onClickProgressBar = e => {
    var perc = e.pageX/$(this.progressBar).width();
    if (this.audio) {
      var target = this.audio.duration * perc
      console.log('Seek song ' + printTime(target));
      this.audio.currentTime = target;
    }
  };
  displayQueue = e => {
    this.setState({viewQueue: true});
  }
  render() {
    const { 
      params: { authToken, username},
      currentAudio,
      attemptingLogin,
      pause,
      searchResults,
      xhrSearch,
      queue,
      viewQueue,
    } = this.state;

    return (
      <div>
        { authToken &&
         <div
          className="progressbar"
          onClick={this.onClickProgressBar}
          ref={node => (this.progressBar = node)}
          title={this.getProgressText()}
          >
          <div
           className="progressbarBar"
           style={{width: (this.getProgressPercentage() + '%')}}
          ></div>
        </div>}
        { authToken && !currentAudio &&
          <div id="loading">
            <i className="fas fa-spinner fa-spin"></i> Loading
          </div>
        }
        { !authToken && <div className="loginComponent">
          <form className="loginForm" onSubmit={this.onLogin}>
            <div className="usernameInputWrapper">
              <input  
                ref={node => (this.usernameInput = node)}
                type="text"
                className="usernameInput"
               placeholder="Username" />
            </div>
            <div className="passwordInputWrapper">
              <input 
                ref={node => (this.passwordInput = node)}
                type="password"
                className="passwordInput"
                placeholder="Password"/>
            </div>
            <div>
              <button type="submit" className="loginBtn myBtn">
                <i className={!attemptingLogin ? "fas fa-sign-in-alt fa-fw" : 'fas fa-spinner fa-spin'}></i> Login
              </button>
            </div>
          </form>
          <p><small>This app offers its users the pleasure to listen to their favourite songs in a good old stereo fashion.<br/>No surround sound bullshit here, Good old MPEG-1 standard only.</small></p>
          <p><small>Contact: <a href={'mailto:' + pkg.contact_email}>{pkg.contact_email}</a></small></p>
        </div>}
        { authToken && <div className="jukebox">
          <div className="iconMenu">
            <span>
              <img
                className={"mainCover" + (pause ? "" : " rotate")} 
                src={currentAudio.download_url ? currentAudio.download_url + '.jpg?auth_token=' + authToken : '/vinyl.jpg'}
                alt=""
              />
            </span>
            <span
              className="playPauseButton link"
              onClick={this.onTogglePlay}
              title="Play/Pause">
              <i className={pause ? "fas fa-fw fa-play" : "fas fa-fw fa-pause"}></i>
            </span>
            <span
              onClick={this.playNext} 
              title="Next"
              className="link">
              <i className="fas fa-fw fa-forward"></i>
            </span>
            <span
              onClick={this.onYoutubeDlPrompt} 
              title="Import From Youtube"
              className="link youtube">
              <i className="fab fa-fw fa-youtube"></i>
            </span>
            <span
              onClick={() => this.onAudioDownload(currentAudio)} 
              title="Download"
              className="link">
              <a
                href={this.getAudioSrc()}
                ref={node => (this.downloadNode = node)}
              >
                <i className="fas fa-fw fa-cloud-download-alt"></i>
              </a>
            </span>
            <span
              onClick={() => this.onMP3Upload(currentAudio)} 
              title="MP3 Upload"
              className="link">
             <i className="fas fa-fw fa-upload"></i>
            </span>
            <span
              onClick={this.onLogout}
              title="Sign out"
              className="logoutBtn link">
                <i className="fas fa-fw fa-sign-out-alt"></i>
            </span>
          </div>
          <div className="currentTitle">Now Playing: <span id="currentTitle" title={currentAudio.filename}>{this.getAudioTitle() || '-'}</span></div>
          
          <p className="searchInputWrapper">
            <form className="searchForm" onSubmit={this.onSubmitSearchForm}>
              <input type="search" onKeyPress={this.searchInputKeyPress} className="searchInput" placeholder="Search"/>
              <span onClick={this.displayQueue} className="link"><i className="fas fa-layer-group"></i></span></form>
          </p>
          { viewQueue ? 
          (
            <div className="queueList">
              { queue.map((audio, idx) => (<QueueItem
                  key={audio.id}
                  audio={audio}
                  username={username}
                  queueIndex={idx}
                  onQueueAudio={this.onQueueAudio}
                  onRandomAudioLoaded={this.onRandomAudioLoaded.bind(this)}
                  deleteAudio={this.deleteAudio.bind(this)}
                  editAudioFilename={this.editAudioFilename.bind(this)} />)) }
            </div>
          )
          : (<div className="searchResults">
            { xhrSearch &&
              <i className="fas fa-spin fa-2x fa-compact-disc"></i>
            }
            { !xhrSearch &&
              searchResults.map(audio => (
                <SearchResultItem
                  key={audio.id}
                  audio={audio}
                  username={username}
                  queue={queue}
                  onQueueAudio={this.onQueueAudio}
                  onRandomAudioLoaded={this.onRandomAudioLoaded.bind(this)}
                  deleteAudio={this.deleteAudio.bind(this)}
                  editAudioFilename={this.editAudioFilename.bind(this)} />)
              )
            }
          </div>)
          }
        </div>
        }
        <div className="version">
          <small>{' v' + pkg.version}</small>
        </div>
        <audio
          key="audio"
          className="music-player-audio"
          preload="auto"
          src={this.getAudioSrc()}
          ref={node => (this.audio = node)}
        />
      </div>
    );
  }
}

export default App;
