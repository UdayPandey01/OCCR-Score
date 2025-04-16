import React from "react";
import SplineChain from "./SplineChain";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CheckScoreInput from "./CheckScoreInput";

const ScoreContainer = () => {
  return (
    <div className="relative h-screen w-full">
      <SplineChain />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
        <span className="text-2xl font-bold text-white">OCCR</span>
        <ConnectButton />
      </div>

      {/* Centered Input + Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col md:flex-row items-center justify-center gap-4">
        <CheckScoreInput />
      </div>
      <div className="absolute bottom-2 right-2 z-[9999] bg-black w-[200px] h-[80px] text-white flex items-center justify-center" />


    </div>
  );
};

export default ScoreContainer;
