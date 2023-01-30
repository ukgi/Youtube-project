import React from "react";
import Video from "../Video/Video";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../pages/Loading";
import Error from "../../pages/Error";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

export default function Videos() {
  const { search } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ["videos", search],
    () => {
      return youtube.handleSearch(search);
    },
    {
      staleTime: 1000 * 60 * 1,
    }
  );

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <ul className='bg-slate-800 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
      {videos && videos.map((video) => <Video key={uuidv4()} video={video} />)}
    </ul>
  );
}
