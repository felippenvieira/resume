import Image from 'next/image';
import React from 'react';

const MainFrame = () => {
  return (
    <section className="grid grid-cols-3 gap-10 md:my-36 my-14 max-w-screen-xl mx-auto px-10 md:px-12">
      <div>
        <Image
          src="/assets/perfil2.png"
          width={450}
          height={450}
          alt="Lobo"
          priority
          className="hidden sm:grid md:col-span-1 md:self-center"
        />
      </div>
      <div className="col-span-3 sm:col-span-2 ml-4 lg:ml-20 flex flex-col md:items-start self-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold max-w-lg detail">
          Front-End Developer
        </h1>
        <p className="text-2xl mt-5">Brazil 📍</p>
      </div>
    </section>
  );
};

export default MainFrame;
