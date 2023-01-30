import React, { useState } from "react";
import Related from "../Related/Related";

export default function VideoDetail({ videoInfo, videoId, channelImg }) {
  const { title, channelTitle, desc } = videoInfo;
  const [moreDesc, setMoreDesc] = useState(false);

  return (
    <div className='bg-slate-800 h-screen flex flex-col md:h-auto md:flex-row md:justify-center '>
      <div className='basis-4/6 pt-0 pb-12 px-2 md:px-6 flex flex-col items-center md:items-start'>
        <iframe
          className='w-11/12 md:w-full'
          title='DetailVideo'
          id='ytplayer'
          type='text/html'
          width='100%'
          height='405'
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder='0'
          allowFullScreen
        />
        <div className='mt-5 flex flex-col items-start w-96 md:w-[50rem]'>
          <h1 className='text-lg font-semibold text-slate-50'>{title}</h1>
          <div className='flex items-center'>
            <img
              className='h-8 rounded-full translate-y-1 mr-2'
              src={channelImg}
              alt=''
            />
            <p className='mt-3 font-medium text-slate-50'>{channelTitle}</p>
          </div>
          <div>
            <pre
              className={`mt-3 text-slate-50 w-96 md:w-[50rem] ${
                moreDesc
                  ? "whitespace-pre-wrap"
                  : "overflow-hidden text-ellipsis whitespace-nowrap"
              }`}
            >
              {desc}
            </pre>
            <button
              onClick={() => setMoreDesc((prev) => !prev)}
              className='text-slate-50 mt-4'
            >
              {moreDesc ? "간략히" : "더보기"}
            </button>
          </div>
        </div>
      </div>
      <div className='basis-2/6 bg-slate-300'>
        <Related />
      </div>
    </div>
  );
}
