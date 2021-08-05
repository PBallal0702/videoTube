import React from 'react';
import '../styles/video_item.css';

const VideoItem =(props)=>{
    return(
        <div onClick={()=>{props.onVideoSelect(props.videoItemProp)}} className=" video-item item">
            <img className="ui image" src={props.videoItemProp.snippet.thumbnails.medium.url}></img>
            <div className="content">
            <h5 className="header">{props.videoItemProp.snippet.title} </h5>
            </div>
        </div>
       
    )
} 

export default VideoItem;