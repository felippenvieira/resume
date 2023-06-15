import React from 'react';

const experiences = [
  {
    id: 1,
    date: 'oct/22 - now',
    company: 'STgenetics',
    jobDescription:
      'Construction, development and maintenance of company systems with C#, .NET, MVC, SQLServer, JavaScript, Razor, HTML, CSS, JavaScript and Bootstrap',
    role: 'Junior Full-Stack Developer',
    competences: [
      'C#',
      '.NET',
      'MVC',
      'SQL Server',
      'JavaScript',
      'Razor',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
  },
  {
    id: 2,
    date: 'may/22 - oct/22',
    company: 'GFT Brazil',
    jobDescription:
      "Development of C# .NET back-end projects using OOP, TDD, MVC, API's REST and front-end development with Angular.",
    role: 'Starter',
    competences: ['C#', '.NET', 'TDD', 'MVC', 'Angular'],
  },
];

const Experience = () => {
  return (
    <section
      id="experiencia"
      className="grid grid-cols-3 gap-36 my-36 max-w-screen-xl mx-auto px-10"
      aria-label="Experience"
    >
      <span className="col-span-1 text-[9rem] leading-[1] font-bold break-all text-zinc-200 max-w-sm">
        EXPERIENCE
      </span>
      <div className="col-span-2 ml-10">
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
          {experiences.map(
            ({ id, date, company, jobDescription, role, competences }) => (
              <div
                key={id}
                className="grid-flow-col auto-cols-max gap-1 mt-10 detail-2"
              >
                <span className="mt-8 text-sm text-zinc-700">{date}</span>
                <div className="p-7 bg-zinc-50 grid grid-cols-2 rounded gap-20 border-2 border-zinc-100 max-w-[750px]">
                  <div>
                    <h2 className="text-lg font-bold mb-2">{company}</h2>
                    <p className="max-w-sm text-sm text-zinc-700">
                      {jobDescription}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold mb-2">{role}</h2>
                    <div className="flex flex-wrap gap-2">
                      {competences.map((competence) => (
                        <span
                          key={competence}
                          className="py-2 px-3 bg-white rounded text-sm"
                        >
                          {competence}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
