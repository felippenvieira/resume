import Image from 'next/image';
import React from 'react';

const MainFrame = () => {
  return (
    <section className="grid grid-cols-3 gap-36 my-36 max-w-screen-xl mx-auto px-10">
      <Image
        src="/assets/perfil2.png"
        width={360}
        height={360}
        alt="Lobo"
        className="max-w-sm col-span-1"
      />
      <div className="col-span-2 ml-10 justify-self-stretch flex flex-col self-center">
        <h1 className="text-8xl font-bold max-w-lg detail">
          Front-End Developer
        </h1>
        <p className="text-2xl mt-5">Brazil 📍</p>
      </div>
    </section>
  );
};

export default MainFrame;
