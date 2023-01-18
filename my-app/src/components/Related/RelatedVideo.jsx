import React from "react";
import { Link } from "react-router-dom";
export default function RelatedVideo({ video }) {
  const { id, snippet } = video;
  const imgUrl = snippet.thumbnails.default.url;
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const publishedAt = snippet.publishedAt;
  const channelId = snippet.channelId;
  const desc = snippet.publishedAt;
  return (
    <Link
      to={`/videos/watch/${id}`}
      state={{
        title,
        channelTitle,
        channelId,
        desc,
      }}
    >
      <li key={id} className='flex grow bg-slate-800 p-1'>
        <img className='mr-3 w-44' src={`${imgUrl}`} alt='thumbnails' />
        <div className='flex flex-col justify-center w-96 h-32'>
          <span className='inline-block font-bold text-gray-300 h-9 truncate'>
            {title}
          </span>
          <span className='inline-block text-gray-600 font-semibold truncate'>
            {channelTitle}
          </span>
          <span className='inline-block text-gray-600 font-semibold truncate'>
            {publishedAt}
          </span>
        </div>
      </li>
    </Link>
  );
}
