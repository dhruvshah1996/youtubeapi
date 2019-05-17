import React from 'react';

const VideoView = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }
    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}
export default VideoView;