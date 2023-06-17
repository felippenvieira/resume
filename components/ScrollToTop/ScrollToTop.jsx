'use client';

import React from 'react';

const ScrollToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="rounded-full w-10 h-10 fixed bg-white border-black bottom-10 right-10 flex items-center font-bold justify-center hover:cursor-pointer"
      onClick={scrollTop}
    >
      ↑
    </div>
  );
};

export default ScrollToTop;
