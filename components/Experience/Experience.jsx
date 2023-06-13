import React from 'react';

const Experience = () => {
  return (
    <section
      id="experiencia"
      className="grid grid-flow-col auto-cols-max gap-36 my-36 max-w-screen-xl mx-auto"
      aria-label="Experience"
    >
      <span className="text-[9rem] leading-[1] font-bold break-all text-zinc-200 max-w-sm">
        EXPERIENCE
      </span>
      <div className="">
        <div className="">
          <p className="text-3xl text-zinc-700 max-w-2xl">
            I have been working as a Front-End Developer since may 2021 on small
            projects and as an employee at a few companies, using{' '}
            <span className="font-bold">
              HTML, CSS, JavaScript, React.js, Next.js, TailwindCSS
            </span>
            , and more.
          </p>
        </div>
        <div>
          <div className="flex mt-10 max-w-4xl -ml-24">
            <span className="mt-8 text-sm text-zinc-700">may/22 - oct/22</span>
            <div className="p-7 bg-zinc-50 flex rounded gap-20 border-2 border-zinc-100">
              <div className="">
                <h2 className="text-lg font-bold mb-2">Bikcraft</h2>
                <p className="max-w-xs text-sm">
                  Desenvolvo pequenos projetos como o Bikcraft utilizando apenas
                  HTML, CSS e JavaScript. Para aplicativos web como a rede
                  social Dogs.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">Desenvolvedor Júnior</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="p-2 bg-white rounded text-sm">HTML</span>
                  <span className="p-2 bg-white rounded text-sm">CSS</span>
                  <span className="p-2 bg-white rounded text-sm">
                    Javascript
                  </span>
                  <span className="p-2 bg-white rounded text-sm">
                    UX Design
                  </span>
                  <span className="p-2 bg-white rounded text-sm">
                    UI Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
