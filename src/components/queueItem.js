
import React from "react";

export default class QueueItem extends React.PureComponent {
  render() {
    const { audio, username, queueIndex, isSuperuser } = this.props;

    return (
    <div className="queueItem" >
      <span
        title={audio.filename}
      >
        <img
          className="cover"
          src="/vinyl.jpg"
          alt="cover" />
        { (queueIndex !== -1) && 
          (<div class="queueNumber">{(queueIndex+1).toString()}</div>)}
      </span>
      <span className="link" title={audio.filename} onClick={()=>this.props.onRandomAudioLoaded(audio)}>{ audio.filename.split('/').pop() }</span>
      { (username === audio.owner || isSuperuser) && <span className="searchResultActions">
        <span
          className="link"
          onClick={()=>this.props.editAudioFilename(audio)} >
          <i className="fas fa-edit"></i>
        </span>
        <span
          className="link"
          onClick={()=>this.props.deleteAudio(audio)} >
          <i className="fas fa-trash"></i>
        </span>
      </span>}
    </div>);
  } 
}