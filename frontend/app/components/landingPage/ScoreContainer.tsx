import React from "react";
import SplineChain from "./SplineChain";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ScoreContainer = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Spline 3D Scene */}
      <SplineChain />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
        <span className="text-2xl font-bold text-white">OCCR</span>
        <ConnectButton />
      </div>

      {/* Centered Input + Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Enter your address"
          className="px-6 py-3 rounded-full font-medium text-white bg-zinc-900/70 border border-white/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition w-80 placeholder-white/60 shadow-md"
        />
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block w-fit">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2.5 px-4 ring-1 ring-white/10">
            <span>{`Check Score`}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
    </div>
  );
};

export default ScoreContainer;
