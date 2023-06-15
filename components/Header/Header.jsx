import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-11 max-w-screen-xl mx-auto px-10">
      <Link className="text-4xl font-bold px-5 py-3" href="/">
        Felippe Vieira
      </Link>
      <nav>
        <ul className="flex gap-5 text-lg">
          <li>
            <a className="px-5 py-3" href="#experiencia">
              Experience
            </a>
          </li>
          <li>
            <a className="px-5 py-3" href="#formacao">
              Academic
            </a>
          </li>
          <li>
            <a className="px-5 py-3" href="#contato">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
