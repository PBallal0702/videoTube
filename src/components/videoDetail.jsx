import React from 'react';

const VideoDetail = (props)=>{
    if(props.video== null){
        return <div>click on video you want to see </div>
    }
    else{
        const iframeUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`
        return( <div>

            <div>
                <div>
                    <iframe src={iframeUrl} width="90%" height="500px" />
                </div>
                <div className ="ui segment">
                    <h4 className="ui header">{props.video.snippet.title}</h4>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div>

        </div>
        )
    }
    
}

export default VideoDetail;