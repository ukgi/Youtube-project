import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Video from "../Video/Video";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    hotTrendRequest();
  }, []);

  return (
    <div className='bg-slate-800'>
      <Header />
      <ul className='m-auto flex flex-wrap w-4/5 md:w-3/4'>
        {videos &&
          videos.map((video) => <Video key={video.id} video={video} />)}
      </ul>
    </div>
  );

  async function hotTrendRequest() {
    const response = await fetch("/data/hotTrend.json", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data.items);
    setVideos(data.items);
  }
}
