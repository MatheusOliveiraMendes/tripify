import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-[#f4f6ff] via-white to-[#fff4ed] p-10 text-[#14183E] shadow-[0_30px_80px_rgba(24,30,75,0.08)] sm:p-16">
      <span className="pointer-events-none absolute -right-8 top-6 h-32 w-32 rounded-[36px] bg-[#FF946D]/20 blur-3xl" />
      <span className="pointer-events-none absolute -left-10 bottom-10 h-32 w-32 rounded-[36px] bg-[#4475F2]/10 blur-3xl" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <h2 className="text-2xl font-semibold leading-snug text-[#5E6282] sm:text-3xl">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        {isSubscribed ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-sm font-medium text-green-600">
            Thank you for subscribing! 🎉
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4 sm:flex-row sm:items-center"
          >
            <label className="flex flex-1 items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm text-[#39425D] shadow-inner">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.333 4.167h13.334c.737 0 1.333.597 1.333 1.333v9c0 .736-.596 1.333-1.333 1.333H3.333c-.736 0-1.333-.597-1.333-1.333v-9c0-.736.597-1.333 1.333-1.333Z"
                  stroke="#5E6282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m17.333 5-7.333 5-7.333-5"
                  stroke="#5E6282"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full border-none bg-transparent outline-none"
                aria-label="Email address for newsletter subscription"
              />
            </label>
            <button
              type="submit"
              className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF946D] to-[#FF7D68] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#FF7D68]/30 transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,125,104,0.35)]"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
