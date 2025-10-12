import React from 'react';

const navLinks = ['Destinations', 'Hotels', 'Flights', 'Bookings'];

const Header: React.FC = () => {
  return (
    <header className="relative flex w-full justify-center">
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[480px] lg:block">
        <div className="absolute inset-0 -right-32 rounded-[46%] bg-gradient-to-br from-[#f0f4ff] via-[#ffe7d6] to-[#fff9f4] blur-[120px] opacity-80" />
        <div className="absolute right-10 top-10 h-24 w-24 rounded-full border-[18px] border-[#F8A985]/40" />
        <div className="absolute right-40 top-32 h-10 w-10 rounded-full bg-[#DF6951]" />
        <div className="absolute right-6 bottom-16 h-16 w-16 rotate-[32deg] rounded-[28px] bg-[#4475F2]/20" />
      </div>

      <div className="flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <img
          src="/Logo.png"
          alt="Tripify logo"
          className="h-20 w-auto select-none"
          draggable="false"
        />

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#212832] lg:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-[#DF6951]">
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button className="text-sm font-medium text-[#212832] transition-colors hover:text-[#DF6951]">
            Login
          </button>
          <button className="rounded-2xl bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-[#FF7D68]/30 transition-transform hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(255,125,104,0.35)]">
            Sign up
          </button>
          <div className="flex items-center gap-2 text-sm font-medium text-[#212832]">
            EN
            <svg
              className="text-current"
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 5L11 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d0d4f7] text-[#212832] transition-colors hover:border-[#212832]/70 hover:text-[#181E4B] lg:hidden"
          aria-label="Open navigation menu"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1H17M1 6H17M1 11H17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
