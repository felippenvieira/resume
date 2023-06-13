import React from 'react';

const Header = () => {
  return (
    // <header>
    <header className="flex justify-between items-center mt-11 max-w-screen-xl mx-auto">
      <p className="text-4xl font-bold">Felippe Vieira</p>
      <nav>
        <ul className="flex gap-5 text-lg">
          <li>
            <a className="p-3" href="#experiencia">
              Experience
            </a>
          </li>
          <li>
            <a className="p-3" href="#formacao">
              Academic
            </a>
          </li>
          <li>
            <a className="p-3" href="#contato">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
