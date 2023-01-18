import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import Error from "../../pages/Error";
import Loading from "../../pages/Loading";
import RelatedVideo from "./RelatedVideo";

export default function Related() {
  // ✅react query를 이용하면 이렇게 client 에서 따로 상태를 관리할 필요가 없다 !
  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   async function relatedVideoRequest() {
  //     const response = await fetch("/data/relatedVideo.json", {
  //       method: "GET",
  //     });
  //     const data = await response.json();
  //     setVideos(data.items);
  //     console.log("연관 동영상 데이터를 받아옵니다 💥", data.items);
  //   }
  //   relatedVideoRequest();
  // }, []);

  // ⬇️실제 api 사용할 때 videoId 가 필요함 !
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: relatedVideos,
  } = useQuery(
    ["related", videoId],
    () => {
      return youtube.handleRelatedVideo(videoId);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <ul className='w-full flex flex-col items-center bg-slate-800'>
      {isLoading && <Loading />}
      {error && <Error />}
      {relatedVideos &&
        relatedVideos.map((video) => (
          <RelatedVideo key={uuidv4()} video={video} />
        ))}
    </ul>
  );
}
