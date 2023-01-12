import React from "react";

export default function Video({ video }) {
  const { id, snippet } = video;
  const imgUrl = snippet.thumbnails.default.url;
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const publishedAt = snippet.publishedAt;
  return (
    <li className='w-5/12 md:w-44 p-0.5 flex flex-col' key={id}>
      <img src={`${imgUrl}`} alt='thumbnails' />
      <div className='flex flex-col'>
        <span className='font-bold text-gray-300'>{title}</span>
        <span className='text-gray-600 font-semibold'>{channelTitle}</span>
        <span className='text-gray-600 font-semibold'>{publishedAt}</span>
      </div>
    </li>
  );
}
