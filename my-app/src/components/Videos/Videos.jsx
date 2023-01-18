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
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className='bg-slate-800'>
      <ul className='m-auto flex flex-col items-center flex-wrap w-4/5 md:w-3/4 md:flex-row md:justify-center'>
        {videos &&
          videos.map((video) => <Video key={uuidv4()} video={video} />)}
      </ul>
    </div>
  );
}
