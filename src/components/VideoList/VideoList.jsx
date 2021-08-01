import React from "react";
import VideoItem from "../VideoItem/VideoItem";
const VideoList = ({ videos, onVideoSelected }) => {
  const renderdList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelected={onVideoSelected}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list ">{renderdList}</div>;
};

export default VideoList;
