"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import dynamic from "next/dynamic";
import ChainScore from "./ChainScore";

const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export const Hero = () => {
  const { address, isConnected } = useAccount();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const maskedAddress = address
    ? `${address.slice(0, 12)}...${address.slice(-4)}`
    : "";

  return (
    <div className="bg-black/90 min-h-screen flex flex-col items-center justify-start px-4 py-10">
      <h2 className="text-4xl md:text-7xl text-center font-light bg-gradient-to-r from-[#62a7f7] via-[#FFFFFF] to-[#f05aaa] bg-clip-text text-transparent mb-12 leading-[1.3] font-[Spline_Sans]">
        Your Score Dashboard
      </h2>

      <div className="relative mt-6 rounded-3xl px-10 shadow-2xl backdrop-blur-[30px] border border-white/10 w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">

        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-300/50 to-purple-300/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="w-full md:w-1/2 flex items-center justify-center mt-10">
          <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] ">
            <GaugeComponent
              value={240}
              minValue={0}
              maxValue={250}
              arc={{
                subArcs: [
                  { limit: 50, color: "#A78BFA", showTick: true },
                  { limit: 100, color: "#C084FC", showTick: true },
                  { limit: 150, color: "#E879F9", showTick: true },
                  { limit: 200, color: "#E879F9", showTick: true },
                  { limit: 250, color: "#F472B6", showTick: true },
                ],
              }}
              pointer={{ color: "#fff" }}
              labels={{
                valueLabel: {
                  style: {
                    fill: "#fff",
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full md:w-1/2 mb-4">
          {isConnected ? (
            <>
              <p className="px-4 py-2 rounded-lg min-w-[280px] text-center bg-[#1f1f1f] text-white text-base font-medium shadow-md border border-white/10">
                {maskedAddress}
              </p>
              <span className="text-sm text-gray-400">
                Last updated: 31 March 2025
              </span>
              <button className="px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 transition-all shadow-md border border-white/10">
                Update Score
              </button>
            </>
          ) : (
            <p className="px-6 py-3 rounded-xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,100,100,0.3),rgba(255,255,255,0))] text-red-300 text-base font-medium shadow-lg shadow-red-500/10 backdrop-blur-md border border-red-500/10">
              Not connected
            </p>
          )}
        </div>
      </div>
      <ChainScore/>
    </div>
  );
};
