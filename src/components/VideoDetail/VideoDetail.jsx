import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video pllayer" src={videoSrc} allow="fullscreen;" />
      </div>
      <div className="ui segment video-detail">
        <h4 className="header title-detail">{video.snippet.title}</h4>
        <p className="text-detail">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
