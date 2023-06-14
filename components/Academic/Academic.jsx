import React from 'react';
import Image from 'next/image';

const academics = [
  {
    id: 1,
    title: 'Technologist',
    degree: 'Analysis and Systems Development',
    institution: 'Estácio de Sá University',
  },
  {
    id: 2,
    title: 'Post-Graduation',
    degree: 'Tax Law',
    institution: 'EBRADI',
  },
  {
    id: 3,
    title: "Bachelor's Degree",
    degree: 'Law School',
    institution: 'Estácio de Sá University',
  },
];

const courses = [
  {
    id: 1,
    title: 'Complete React',
    hours: '36h',
  },
  {
    id: 2,
    title: 'Complete JavaScript ES6',
    hours: '74h',
  },
  {
    id: 3,
    title: 'CSS Flexbox',
    hours: '6h',
  },
  {
    id: 4,
    title: 'CSS Grid Layout',
    hours: '10h',
  },
  {
    id: 6,
    title: 'HTML and CSS For Beginners',
    hours: '46h',
  },
  {
    id: 7,
    title: 'UI Design For Beginners',
    hours: '34h',
  },
];

const languages = [
  {
    id: 1,
    title: 'English',
    level: 'Fluent',
  },
  {
    id: 2,
    title: 'Portuguese',
    level: 'Native',
  },
];

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
            My most recent academic experience is a degree in{' '}
            <span>Analysis and Systems Development</span>. Additionally, I
            always stay updated with intensive online courses.
          </p>
          <div className="flex flex-wrap gap-8">
            {academics.map(({ id, title, degree, institution }) => (
              <div key={id} className="p-5 bg-black rounded w-[240px] grid">
                <span className="text-zinc-400">{title}</span>
                <h2 className="font-bold text-xl mt-3 mb-10">{degree}</h2>
                <p className="text-zinc-400 text-xl self-end">{institution}</p>
              </div>
            ))}
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
                  INTENSIVE ONLINE COURSES
                </span>
              </div>
              <div>
                <div>
                  {courses.map(({ id, title, hours }) => (
                    <div
                      key={id}
                      className="flex justify-between px-1 py-2 text-xl"
                    >
                      <p>{title}</p>
                      <span className="text-zinc-400">{hours}</span>
                    </div>
                  ))}
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
                <span className="text-zinc-400 text-sm font-bold">
                  LANGUAGES
                </span>
              </div>
              <div>
                <div>
                  {languages.map(({ id, title, level }) => (
                    <div key={id} className="flex px-1 py-2 text-xl">
                      <p>{title}</p>
                      <span className="text-zinc-400"> / {level}</span>
                    </div>
                  ))}
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
