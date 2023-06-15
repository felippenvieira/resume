import React from 'react';

const Footer = () => {
  return (
    <div id="contato" className="bg-black text-white" aria-label="Contato">
      <footer className="py-36 px-10 max-w-screen-xl mx-auto detail-4">
        <div className="grid grid-cols-3 gap-24 auto-cols-max items-center">
          <div className="col-span-1 max-w-[520px] text-zinc-200 text-2xl">
            <p>
              I am available for new projects at the moment. Get in touch with
              me and we will schedule a meeting.
            </p>
          </div>
          <div className="col-span-2 text-2xl font-bold">
            <h2>felippe.nvieira@gmail.com</h2>
            <h2>+55 21 9999-9999</h2>
            <h2>@origamid.cursos</h2>
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
