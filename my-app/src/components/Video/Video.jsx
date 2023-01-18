import React from "react";
import { Link } from "react-router-dom";
export default function Video({ video }) {
  const { id, snippet } = video;
  const imgUrl = snippet.thumbnails.default.url;
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const publishedAt = snippet.publishedAt;
  const channelId = snippet.channelId;
  const desc = snippet.description;
  return (
    <Link
      to={`/videos/watch/${id}`}
      state={{
        title,
        channelTitle,
        channelId,
        desc,
      }}
      className='w-96 md:w-44 p-0.5 flex flex-col'
    >
      <li key={id}>
        <img className='w-96' src={`${imgUrl}`} alt='thumbnails' />
        <div className='flex flex-col'>
          <span className='font-bold text-gray-300 truncate'>{title}</span>
          <span className='text-gray-600 font-semibold truncate'>
            {channelTitle}
          </span>
          <span className='text-gray-600 font-semibold truncate'>
            {publishedAt}
          </span>
        </div>
      </li>
    </Link>
  );
}
