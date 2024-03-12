import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const video_data = await axios.get(
      String(import.meta.env.VITE_YOUTUBE_API_URL)
    );
    setVideosData(video_data.data.items);
  };

  return (
    <div className="sm:flex flex-wrap p-1">
      {videosData.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
