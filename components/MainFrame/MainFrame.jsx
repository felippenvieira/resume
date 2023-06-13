import Image from 'next/image';
import React from 'react';

const MainFrame = () => {
  return (
    <section className="grid grid-flow-col auto-cols-max gap-40 my-36 max-w-screen-xl mx-auto">
      <Image
        src="/assets/perfil2.png"
        width={360}
        height={360}
        alt="Lobo"
        className="max-w-sm"
      />
      <div className="justify-self-stretch flex flex-col self-center">
        <h1 className="text-8xl font-bold max-w-lg">Front-End Developer</h1>
        <p className="text-2xl mt-5">Brazil 📍</p>
      </div>
    </section>
  );
};

export default MainFrame;
