import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import Loading from "./Loading";
import Error from "./Error";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function DetailPage() {
  const { videoId } = useParams();
  const location = useLocation();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videoDetail,
  } = useQuery(
    ["detail", videoId],
    () => {
      return youtube.handleDetailInfo(location.state.channelId);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  // useEffect(() => {
  //   async function videoDetailRequest() {
  //     const response = await fetch("/data/Detail.json", {
  //       method: "GET",
  //     });
  //     const data = await response.json();
  //     setVideoDetail(data.items);
  //     console.log("비디오 상세정보", data.items);
  //   }
  //   videoDetailRequest();
  //   console.log("비디오 ID", videoId);
  // }, [videoId]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {videoDetail &&
        videoDetail.map((video) => (
          <VideoDetail
            key={uuidv4()}
            videoInfo={location.state}
            videoId={videoId}
            channelImg={video.snippet.thumbnails.default.url}
          />
        ))}
    </>
  );
}
