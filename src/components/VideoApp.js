import React from "react";
import ReactPlayer from "react-player";
import MovieScene from "../assets/MovieDrive.mp4";
import "../components/VideoApp.css";

const VideoApp = () => {
  const videoSrc = MovieScene;
  const poster = "https://wallpaperaccess.com/full/2103591.jpg";

  return (
    <div className="container">
      <h1>Drive (2011)</h1>
      <ReactPlayer
        className="react-player"
        url={videoSrc}
        width="100%"
        height="720px"
        controls="true"
        light="true"
        light={poster}
        playing="true"
      />
    </div>
  );
};
export default VideoApp;
