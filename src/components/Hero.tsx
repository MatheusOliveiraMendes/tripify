import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="w-full max-w-[1182px] ml-[19px] mt-[18px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[42%] max-md:w-full max-md:ml-0">
          <div className="flex mr-[-130px] w-full flex-col self-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-[rgba(223,105,81,1)] text-xl font-bold uppercase">
              Best Destinations around the world
            </div>
            <h1 className="text-[#181E4B] text-[84px] font-bold leading-[89px] tracking-[-3.36px] self-stretch mt-6 max-md:max-w-full max-md:text-[40px] max-md:leading-[47px]">
              Travel, enjoy
              <br />
              and live a new
              <br />
              and full life
            </h1>
            <p className="text-[rgba(94,98,130,1)] text-base font-normal leading-[30px] mt-[30px] max-md:max-w-full">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell
              they west hard for the.
            </p>
            <div className="flex items-stretch gap-[40px_44px] mt-[34px]">
              <button className="aspect-[2.83] object-contain w-[170px] shrink-0 max-w-full rounded-[10px] bg-[#F1A501] text-white font-semibold hover:bg-[#e09501] transition-colors">
                Find out more
              </button>
              <div className="flex w-[165px] shrink-0 h-[52px] my-auto items-center justify-center">
                <button className="flex items-center gap-2 text-[#686D7D] hover:text-[#181E4B] transition-colors">
                  <div className="w-[52px] h-[52px] bg-[#DF6951] rounded-full flex items-center justify-center">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M0 0V14L12 7L0 0Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="font-medium">Play Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[58%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/806108179b28a5075c81abad38bcdffe1f620275?placeholderIfAbsent=true"
            alt="Travel destination"
            className="aspect-[1] object-contain w-full grow max-md:max-w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
