import React from "react";
import Related from "../Related/Related";

export default function VideoDetail({ videoInfo, videoId, channelImg }) {
  const { title, channelTitle, desc } = videoInfo;

  return (
    <>
      <div className='bg-slate-800 h-screen flex flex-col  md:flex-row md:justify-center '>
        <div className='basis-1/2 pt-0 pb-12 px-2 md:px-6 flex flex-col items-center md:items-start'>
          <iframe
            className='w-11/12 md:w-full'
            title='DetailVideo'
            id='ytplayer'
            type='text/html'
            width='720'
            height='405'
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder='0'
            allowFullScreen
          ></iframe>
          <div className='mt-5'>
            <h1 className='text-lg font-semibold text-slate-50'>{title}</h1>
            <div className='flex items-center'>
              <img
                className='h-8 rounded-full translate-y-1 mr-2'
                src={channelImg}
                alt=''
              />
              <p className='mt-3 font-medium text-slate-50'>{channelTitle}</p>
            </div>
            <p className='mt-3 text-slate-50 w-96 truncate'>{desc}</p>
          </div>
        </div>
        <div className='basis-1/2 bg-slate-300'>
          <Related />
        </div>
      </div>
    </>
  );
}
