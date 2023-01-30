import React from "react";
import { Link } from "react-router-dom";
import { formatAgo } from "../../util/date";

export default function Video({ video, type }) {
  const { id, snippet } = video;
  const imgUrl = snippet.thumbnails.default.url;
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const publishedAt = snippet.publishedAt;
  const channelId = snippet.channelId;
  const desc = snippet.description;
  const isList = type === "list";
  return (
    <Link
      to={`/videos/watch/${id}`}
      state={{
        title,
        channelTitle,
        channelId,
        desc,
      }}
      className='w-full'
    >
      <li key={id} className={isList ? "flex justify-start gap-1 m-2" : ""}>
        <img
          className={isList ? "w-{80} mr-2" : "w-full"}
          src={`${imgUrl}`}
          alt='thumbnails'
        />
        <div>
          <p className='font-bold text-gray-300 line-clamp-2'>{title}</p>
          <p className='text-gray-600 font-semibold line-clamp-1'>
            {channelTitle}
          </p>
          <p className='text-gray-600 font-semibold line-clamp-2'>
            {formatAgo(publishedAt, "ko")}
          </p>
        </div>
      </li>
    </Link>
  );
}
