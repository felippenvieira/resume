import React from 'react';

const Footer = () => {
  return (
    <div id="contato" class="bg-black text-white" aria-label="Contato">
      <footer className="py-36 max-w-screen-xl mx-auto">
        <div className="grid grid-flow-col gap-36 auto-cols-max items-center">
          <div className="max-w-[520px] text-zinc-200 text-2xl">
            <p>
              Estou disponível para novos projetos no momento. Entre em contato
              comigo e marcaremos uma conversa.
            </p>
          </div>
          <div className="text-6xl font-bold">
            <h2>felippe.nvieira@gmail.com</h2>
            <h2>+55 21 9999-9999</h2>
            <h2>@origamid.cursos</h2>
          </div>
        </div>
        <p className="text-zinc-500 mt-10 text-xl">
          Felippe Vieira. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
