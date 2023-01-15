import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import VideoDetail from "../components/VideoDetail/VideoDetail";

export default function DetailPage() {
  const [videoDetail, setVideoDetail] = useState([]);
  const { videoId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function videoDetailRequest() {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${location.state.channelId}&key=${process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setVideoDetail(data.items);
      console.log("비디오 상세정보", data.items);
    }
    videoDetailRequest();
    console.log("비디오 ID", videoId);
  }, [videoId]);

  return (
    <div>
      {videoDetail &&
        videoDetail.map((video) => (
          <VideoDetail
            key={uuidv4()}
            videoInfo={location.state}
            videoId={videoId}
            channelImg={video.snippet.thumbnails.default.url}
          />
        ))}
    </div>
  );
}
