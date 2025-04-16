import React from 'react'

const ChainScore = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl mx-auto px-4 py-10 gap-6">
      {/* Ethereum Container */}
      <div className="relative h-96 w-full max-w-3xl rounded-3xl px-6 py-4 shadow-2xl backdrop-blur-[30px] border border-white/10 overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-300/50 to-purple-300/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <h3 className="text-white text-xl font-semibold">Ethereum</h3>
      </div>

      {/* Polygon Container */}
      <div className="relative h-96 w-full max-w-3xl rounded-3xl px-6 py-4 shadow-2xl backdrop-blur-[30px] border border-white/10 overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-300/50 to-purple-300/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <h3 className="text-white text-xl font-semibold">Polygon</h3>
      </div>
    </div>
  )
}

export default ChainScore;
