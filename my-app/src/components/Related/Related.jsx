import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RelatedVideo from "../Video/RelatedVideo";

export default function Related() {
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();
  useEffect(() => {
    async function relatedVideoRequest() {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setVideos(data.items);
      console.log("연관 동영상 데이터를 받아옵니다 💥", data.items);
    }
    relatedVideoRequest();
  }, []);

  return (
    <ul className='w-full flex flex-col items-center bg-slate-800'>
      {videos &&
        videos.map((video) => <RelatedVideo key={uuidv4()} video={video} />)}
    </ul>
  );
}
