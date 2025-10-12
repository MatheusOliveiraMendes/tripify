import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="w-full">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#DF6951]">
            Best destinations around the world
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#181E4B] sm:text-5xl lg:text-[64px] lg:leading-[68px]">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[#5E6282]">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it
            engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="rounded-2xl bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-[#FF7D68]/30 transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,125,104,0.35)]">
              Find out more
            </button>
            <button className="flex items-center gap-4 rounded-2xl border border-transparent px-4 py-2 text-sm font-medium text-[#686D7D] transition-all hover:border-[#DF6951]/30 hover:text-[#181E4B]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DF6951] text-white shadow-lg shadow-[#DF6951]/40">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M0 0V14L12 7L0 0Z" fill="white" />
                </svg>
              </span>
              Play Demo
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/806108179b28a5075c81abad38bcdffe1f620275?placeholderIfAbsent=true"
            alt="Traveler flying on suitcase illustration"
            className="w-full max-w-lg rounded-[48px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
