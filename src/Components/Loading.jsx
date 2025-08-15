import React, { useState, useEffect } from "react";

const Loading = ({ children }) => {
    return (
      <div className="min-h-screen w-full bg-gray-800 flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Rolling Square */}
          <div className="w-5 h-5 border-3 border-white rounded-sm mb-1 origin-bottom-right animate-roll"></div>
          
          {/* Infinite Scroll Bar */}
          <div className="relative w-15 h-0.5 overflow-hidden">
            <div className="absolute w-5 h-full bg-white left-1/2 transform -translate-x-1/2 animate-moveBefore"></div>
            <div className="absolute w-5 h-full bg-white left-full animate-moveAfter"></div>
          </div>
        </div>
      </div>
    );
  }

export default Loading;
