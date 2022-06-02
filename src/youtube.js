import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {

   videoOnReady(event) {
      event.target.pauseVideo();
      console.log(event.target)
    }

  render() {
    const opts = {
      height: '390px',
      width: '40%',
      
      playerVars: {

        autoplay: 1,
      },
    };
    const {videoId} = this.props
    return <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />;
  }
}
export default Youtube;