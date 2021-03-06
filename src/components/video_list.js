/**
 * Created by Daniel on 19/06/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoitems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect ={props.onVideoSelect}
                key ={ video.etag }
                video ={ video }/>
                );
    });

    return(
      <ul className="col-md-4 list-group">
          {videoitems}
      </ul>
    );
};

export default VideoList;