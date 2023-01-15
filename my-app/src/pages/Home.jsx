import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const handleSetVideos = (items) => setVideos(items);

  return (
    <>
      <Header handleSetVideos={handleSetVideos} />
      <Outlet context={{ videos, handleSetVideos }} />
    </>
  );
}
