import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Video from "../Video/Video";
import { v4 as uuidv4 } from "uuid";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function hotTrendRequest() {
      const response = await fetch("/data/hotTrend.json", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data.items);
      handleSetVideos(data.items);
    }
    hotTrendRequest();
  }, []);

  const handleSetVideos = (items) => setVideos(items);

  return (
    <div className='bg-slate-800'>
      <Header handleSearch={searchForKeywordRequest} />
      <ul className='m-auto flex flex-wrap w-4/5 md:w-3/4'>
        {videos &&
          videos.map((video) => <Video key={uuidv4()} video={video} />)}
      </ul>
    </div>
  );

  async function searchForKeywordRequest(keyword) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    handleSetVideos(data.items);
  }
}
