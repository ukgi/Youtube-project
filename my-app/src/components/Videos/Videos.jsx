import React, { useEffect } from "react";
import Video from "../Video/Video";
import { v4 as uuidv4 } from "uuid";
import { useOutletContext, useParams } from "react-router-dom";

export default function Videos() {
  const { videos, handleSetVideos } = useOutletContext();
  const { search } = useParams();
  useEffect(() => {
    async function hotTrendRequest() {
      const response = await fetch(
        `${
          search
            ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY}`
            : "/data/hotTrend.json"
        }`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      handleSetVideos(data.items);
      console.log("데이터를 서버로부터 받아옵니다 ✨", data.items);
    }
    hotTrendRequest();
  }, []);

  return (
    <div className='bg-slate-800'>
      <ul className='m-auto flex flex-col items-center flex-wrap w-4/5 md:w-3/4 md:flex-row md:justify-center'>
        {videos &&
          videos.map((video) => <Video key={uuidv4()} video={video} />)}
      </ul>
    </div>
  );
}
