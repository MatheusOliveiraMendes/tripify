import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full max-w-[1085px] mt-[200px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[41%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch mt-[9px] max-md:mt-10">
            <h3 className="text-[#5E6282] text-lg font-semibold uppercase">
              Testimonials
            </h3>
            <h2 className="text-[#14183E] text-[50px] font-bold capitalize mt-2 max-md:text-[40px]">
              What people say
              <br />
              about Us.
            </h2>
          </div>
        </div>
        <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0">
          <article className="flex grow items-start gap-[19px] flex-wrap max-md:max-w-full max-md:mt-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4df447f25c9b58a49866bd51dae57eeaf8e22ba8?placeholderIfAbsent=true"
              alt="Chris Thomas profile"
              className="aspect-[1] object-contain w-[68px] shrink-0 rounded-[50%]"
            />
            <div className="shadow-[0_100px_80px_0_rgba(0,0,0,0.02),0_64.815px_46.852px_0_rgba(0,0,0,0.02),0_38.519px_25.481px_0_rgba(0,0,0,0.01),0_20px_13px_0_rgba(0,0,0,0.01),0_8.148px_6.519px_0_rgba(0,0,0,0.01),0_1.852px_3.148px_0_rgba(0,0,0,0.00)] flex flex-col grow shrink-0 basis-0 w-fit mt-[124px] pr-12 pb-[22px] rounded-[10px] border-2 border-solid border-[#F7F7F7] max-md:max-w-full max-md:mt-10">
              <div className="shadow-[0_100px_80px_0_rgba(0,0,0,0.02),0_64.815px_46.852px_0_rgba(0,0,0,0.02),0_38.519px_25.481px_0_rgba(0,0,0,0.01),0_20px_13px_0_rgba(0,0,0,0.01),0_8.148px_6.519px_0_rgba(0,0,0,0.01),0_1.852px_3.148px_0_rgba(0,0,0,0.00)] z-10 flex mt-[-90px] flex-col text-base font-normal leading-8 bg-white px-[34px] py-9 rounded-[10px] max-md:max-w-full max-md:pl-5">
                <blockquote className="text-[#5E6282] z-10">
                  "On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of
                  believed or diverted no."
                </blockquote>
              </div>
              <div className="text-[#5E6282] ml-[34px] max-md:ml-2.5">
                <cite className="text-[#5E6282] text-lg font-semibold not-italic">
                  Chris Thomas
                </cite>
                <p className="text-[#5E6282] text-sm font-normal mt-1.5">
                  CEO of Red Button
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;