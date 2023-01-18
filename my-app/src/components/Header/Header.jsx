import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { search } = useParams();

  useEffect(() => {
    setKeyword(search || "");
  }, [search]);

  const handleKeywordSearch = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };

  return (
    <header className='border-b border-zinc-600 md:flex md:justify-center md:items-center mb-4 pb-4 pt-6 bg-inherit bg-slate-800 w-full'>
      <Link to='/' className='md:flex md:items-center hidden'>
        <YouTubeIcon className='text-brand' style={{ fontSize: "48px" }} />
        <h1 className='text-3xl text-zinc-100 font-bold'>Youtube</h1>
      </Link>
      <form
        className='flex justify-center md:ml-24'
        onSubmit={handleKeywordSearch}
      >
        <input
          className='block w-96 px-1.5 py-1.5 grow-1 outline-none bg-slate-900 text-white'
          type='text'
          placeholder='Search...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className='bg-slate-500'>
          <SearchIcon style={{ color: "white", fontSize: "36px" }} />
        </button>
      </form>
    </header>
  );
}
