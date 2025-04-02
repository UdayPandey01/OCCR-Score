"use client"

import React from "react";
import { useAccount } from "wagmi";

export const Hero = () => {
  const { address, isConnected } = useAccount();

  const maskedAddress = address
    ? `${address.slice(0, 12)}...${address.slice(-4)}`
    : "";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-80 mt-12 mx-auto max-w-5xl rounded-3xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.7),rgba(255,255,255,0))] shadow-xl p-6 md:p-8 shadow-white/20 backdrop-blur-md border border-white/10">
      <div className="flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">OCCR</h1>
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-xl md:text-2xl text-gray-100">Score:</span>
          <span className="text-2xl md:text-3xl font-semibold text-white">200</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 mt-6 md:mt-0">
        {isConnected ? (
          <div className="flex flex-col items-center">
            <p className="px-4 py-2 rounded-xl min-w-64 text-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.7),rgba(255,255,255,0))] text-white text-base md:text-lg font-medium shadow-lg shadow-white/10 backdrop-blur-md border border-white/10 transition-all hover:shadow-white/20 hover:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(140,139,218,0.7),rgba(255,255,255,0))]">
              {maskedAddress}
            </p>
            <span className="text-xs md:text-sm text-gray-400 mt-1">Last updated: 31 March 2025</span>
            <button className="mt-3 px-6 py-2 rounded-lg bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.7),rgba(255,255,255,0))] text-white font-semibold shadow-xl shadow-white/20 backdrop-blur-md border border-white/10">
              Update Score
            </button>
          </div>
        ) : (
          <p className="px-6 py-3 rounded-xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,100,100,0.3),rgba(255,255,255,0))] text-red-300 text-base font-medium shadow-lg shadow-red-500/10 backdrop-blur-md border border-red-500/10">
            Not connected
          </p>
        )}
      </div>
    </div>
  );
};