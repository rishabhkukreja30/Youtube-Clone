import axios from "axios";
import React, { useEffect } from "react";

const VideContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const video_data = await axios.get(
      String(import.meta.env.VITE_YOUTUBE_API_URL)
    );
    console.log(video_data.data);
  };

  return <div>VideContainer</div>;
};

export default VideContainer;
