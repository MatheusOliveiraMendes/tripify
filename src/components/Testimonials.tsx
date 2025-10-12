import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5E6282]">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#14183E] sm:text-4xl">
            What people say about us
          </h2>
          <p className="text-sm leading-6 text-[#5E6282]">
            Hear real stories from travelers who trusted us with their once in a lifetime
            adventures around the globe.
          </p>
        </div>
        <article className="relative rounded-[32px] bg-white p-10 shadow-[0_40px_120px_rgba(24,30,75,0.12)]">
          <span className="absolute -left-6 top-14 hidden h-20 w-20 rounded-[28px] bg-[#DF6951]/10 blur-lg lg:block" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4df447f25c9b58a49866bd51dae57eeaf8e22ba8?placeholderIfAbsent=true"
              alt="Chris Thomas profile"
              className="h-20 w-20 flex-shrink-0 rounded-full object-cover ring-4 ring-[#f5f6ff]"
            />
            <div className="space-y-4">
              <blockquote className="text-base leading-7 text-[#5E6282]">
                “On the Windows talking painted pasture yet its express parties use. Sure last
                upon he same as knew next. Of believed or diverted no.”
              </blockquote>
              <footer className="space-y-1">
                <cite className="block text-lg font-semibold not-italic text-[#14183E]">
                  Chris Thomas
                </cite>
                <p className="text-sm text-[#5E6282]">CEO of Red Button</p>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
