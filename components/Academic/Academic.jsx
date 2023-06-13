import React from 'react';
import Image from 'next/image';

const Academic = () => {
  return (
    <div className="bg-zinc-900">
      <section
        id="formacao"
        aria-label="Formação"
        className="grid grid-flow-col auto-cols-max gap-36 py-36 max-w-screen-xl mx-auto"
      >
        <span className="text-[9rem] leading-[1] font-bold break-all max-w-sm">
          ACADEMIC
        </span>
        <div className="col-span-4 text-white">
          <p className="text-2xl text-zinc-300 max-w-xl mb-16">
            Minha mais recente experiência acadêmica foi o <span>mestrado</span>{' '}
            que fiz no exterior em <span>UX Design</span>. Além disso, me
            mantenho sempre atualizado com cursos intensivos online.
          </p>
          <div className="flex flex-wrap max-w-[240px]">
            <div className="p-5 bg-black rounded">
              <span className="text-zinc-400">BACHAREL</span>
              <h2 className="font-bold text-xl mt-3 mb-10">
                Administração de Empresas
              </h2>
              <p className="text-zinc-400 text-xl">UFRRJ</p>
            </div>
          </div>
          <div>
            <div className="">
              <div className="flex gap-5 items-center mt-10">
                <Image
                  width={24}
                  height={24}
                  src="/cursos.svg"
                  alt="cursos"
                  className="-ml-10"
                />
                <span className="text-zinc-400 text-sm font-bold">
                  CURSOS INTENSIVOS
                </span>
              </div>
              <div>
                <div>
                  <div className="flex justify-between px-1 py-5 text-xl">
                    <p>UX Design & UI Design</p>
                    <span className="text-zinc-400">56h</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-5 items-center mt-10">
                <Image
                  width={24}
                  height={24}
                  src="/idiomas.svg"
                  alt="idiomas"
                  className="-ml-10"
                />
                <span className="text-zinc-400 text-sm font-bold">IDIOMAS</span>
              </div>
              <div>
                <div>
                  <div className="flex px-1 py-5 text-xl">
                    <p>Inglês </p>
                    <span className="text-zinc-400"> / Fluent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academic;
