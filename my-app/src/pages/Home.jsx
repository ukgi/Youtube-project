import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { YoutubeApiProvider } from "../context/YoutubeApiContext";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
