import React, { useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function Header({ handleSetVideos }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  async function searchForKeywordRequest(keyword) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_GOOGLE_YOUTUBE_API_KEY}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    handleSetVideos(data.items);
    navigate(`videos/${keyword}`);
  }

  const handleKeywordSearch = (e) => {
    e.preventDefault();
    searchForKeywordRequest(keyword);
  };

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <div className=' md:flex md:justify-center md:items-center m-auto pb-4 pt-6 bg-inherit bg-slate-800 w-full'>
      <button className='md:flex md:items-center hidden' onClick={goToMainPage}>
        <YouTubeIcon style={{ color: "red", fontSize: "48px" }} />
        <h1 className='text-3xl text-zinc-100'>Youtube</h1>
      </button>
      <form
        className='flex justify-center md:ml-24'
        onSubmit={handleKeywordSearch}
      >
        <input
          className=' block w-96 px-1.5 py-1.5 grow-1 outline-none bg-slate-900 text-white'
          type='text'
          placeholder='Search...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className='bg-slate-500'>
          <SearchIcon style={{ color: "white", fontSize: "36px" }} />
        </button>
      </form>
    </div>
  );
}
