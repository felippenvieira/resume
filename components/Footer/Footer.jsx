import React from 'react';

const Footer = () => {
  return (
    <div
      id="contato"
      className="bg-black py-10 md:py-0 text-white"
      aria-label="Contato"
    >
      <footer className="lg:py-36 py-16 max-w-screen-xl mx-auto detail-4 px-10 md:px-12">
        <div className="lg:grid lg:grid-cols-3 gap-24 auto-cols-max items-center">
          <div className="col-span-1 max-w-[520px] text-zinc-200 text-2xl">
            <p className="mb-10 lg:mb-0">
              I am available for new projects at the moment. Get in touch with
              me and we will schedule a meeting.
            </p>
          </div>
          <div className="grid gap-4 col-span-2 text-3xl font-bold pt-8 md:pt-0">
            <h2>
              <a
                className="px-5 py-3 hover:animate-pulse"
                target="blank"
                href="https://github.com/felippenvieira"
              >
                GitHub →
              </a>
            </h2>
            <h2>
              <a
                className="px-5 py-3 hover:animate-pulse"
                target="blank"
                href="https://www.linkedin.com/in/felippe-vieira-3bb8bb113/"
              >
                Linkedin →
              </a>
            </h2>
          </div>
        </div>
        <p className="text-zinc-500 mt-10 text-xl">
          Felippe Vieira. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
