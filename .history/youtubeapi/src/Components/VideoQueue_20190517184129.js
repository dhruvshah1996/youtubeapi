import React from 'react';
import VideoItem from './VideoItem';

const VideoQueue = ({videos}) => {
    const listVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} />
        console.log(video.id.videoId);
    });
    return <div>{listVideos}</div>;
};
export default VideoQueue;