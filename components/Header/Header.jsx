'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const anchor = e.target.hash;
    document.querySelector(anchor).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className="md:flex md:justify-between items-center mt-11 max-w-screen-xl mx-auto x-10 md:px-12">
      <div className="flex justify-center">
        <Link className="text-4xl font-bold px-5 py-3" href="/">
          Felippe Vieira
        </Link>
      </div>
      <nav>
        <ul className="flex flex-wrap gap-5 text-lg justify-center mt-5 md:mt-0">
          <li>
            <a
              className="bg-zinc-100 rounded md:bg-transparent px-5 py-3 inline-block"
              href="#experiencia"
              onClick={smoothScroll}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="bg-zinc-100 rounded md:bg-transparent px-5 py-3 inline-block"
              href="#formacao"
              onClick={smoothScroll}
            >
              Academic
            </a>
          </li>
          <li>
            <a
              className="bg-zinc-100 rounded md:bg-transparent px-5 py-3 inline-block"
              href="#contato"
              onClick={smoothScroll}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
