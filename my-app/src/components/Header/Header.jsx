import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div className='md:w-3/4 md:flex md:justify-between md:items-center m-auto mb-4 pt-6'>
      <div className='md:flex md:items-center hidden'>
        <YouTubeIcon style={{ color: "red", fontSize: "48px" }} />
        <h1 className='text-3xl text-zinc-100'>Youtube</h1>
      </div>
      <form className='flex justify-center'>
        <input
          className=' block w-96 px-1.5 py-1.5 grow-1 outline-none bg-slate-900 text-white'
          type='text'
          placeholder='Search...'
        />
        <button className='bg-slate-500'>
          <SearchIcon style={{ color: "white", fontSize: "36px" }} />
        </button>
      </form>
    </div>
  );
}
