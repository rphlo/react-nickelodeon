
import React from "react";

export default class SearchResultItem extends React.PureComponent {
  render() {
    const { audio, queue } = this.props;
    const queueIndex = queue.findIndex(el => el.id === audio.id);

    return (
    <div className="searchResultItem" >
      <span
        className="link"
        title={audio.filename}
        onClick={()=>this.props.onQueueAudio(audio)} >
        <img
          className="cover"
          src="/vinyl.jpg"
          alt="cover" />
        { (queueIndex !== -1) && 
          (<div class="queueNumber">{(queueIndex+1).toString()}</div>)}
      </span>
      <span className="link" onClick={()=>this.props.onRandomAudioLoaded(audio)}>{ audio.filename.split('/').pop() }</span>
      <span className="searchResultActions">
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
      </span>
    </div>);
  } 
}