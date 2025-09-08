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
    <section className="flex flex-col relative min-h-[407px] w-[1257px] max-w-full justify-center mt-[124px] px-20 py-[79px] rounded-[0px_0px_0px_0px] max-md:mt-10 max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/ac0068038693853edc8d114ddd5e91aad219f2ba?placeholderIfAbsent=true"
        alt="Newsletter background"
        className="absolute h-full w-full object-cover inset-0 rounded-[20px]"
      />
      <div className="relative flex w-[881px] max-w-full flex-col items-stretch">
        <h2 className="text-[#5E6282] text-center text-[33px] font-semibold leading-[54px] max-md:max-w-full">
          Subscribe to get information, latest news and other
          <br />
          interesting offers about Jadoo
        </h2>
        
        {isSubscribed ? (
          <div className="self-center mt-[74px] max-md:mt-10">
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-[10px] text-center">
              Thank you for subscribing! 🎉
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="self-center flex w-[625px] max-w-full items-stretch gap-6 flex-wrap mt-[74px] max-md:mt-10"
          >
            <div className="bg-white flex flex-col text-sm text-[#39425D] font-normal justify-center grow shrink-0 basis-0 w-fit px-[66px] py-[26px] rounded-[10px] max-md:max-w-full max-md:px-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="outline-none bg-transparent w-full"
                aria-label="Email address for newsletter subscription"
              />
            </div>
            <button
              type="submit"
              className="bg-[linear-gradient(180deg,#FF946D_0%,#FF7D68_100%)] flex flex-col items-stretch text-[17px] text-white font-semibold whitespace-nowrap text-center justify-center px-[50px] py-[23px] rounded-[10px] hover:opacity-90 transition-opacity max-md:px-5"
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