import React from "react";
import Spinner from "../assets/Spinner-1s-200px.gif";
import { Background } from "../LoadingStyles";

export default function Loading() {
  return (
    <Background>
      <img src={Spinner} alt='로딩중' width='15%' />
    </Background>
  );
}
