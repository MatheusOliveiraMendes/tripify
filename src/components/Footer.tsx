import React from 'react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Careers", "Mobile"]
    },
    {
      title: "Contact",
      links: ["Help/FAQ", "Press", "Affilates"]
    },
    {
      title: "More",
      links: ["Airlinefees", "Airline", "Low fare tips"]
    }
  ];

  return (
    <footer className="w-full max-w-[1025px] mt-[166px] max-md:max-w-full max-md:mt-10">
      <div className="flex w-full gap-5 font-normal flex-wrap justify-between">
        <div className="flex flex-col items-stretch">
          <h2 className="text-[#181E4B] text-[44px] font-bold">Tripify</h2>
          <p className="text-[#5E6282] text-[13px] leading-4 mt-[19px]">
            Book your trip in minute, get full
            <br />
            Control for much longer.
          </p>
        </div>

        {footerSections.map((section) => (
          <nav key={section.title} className="flex flex-col text-lg text-[#5E6282] whitespace-nowrap leading-none mt-[21px]">
            <h3 className="text-[#080809] text-[21px] font-bold">
              {section.title}
            </h3>
            <ul className="space-y-3 mt-[34px]">
              {section.links.map((link,) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-[#5E6282] hover:text-[#181E4B] transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="text-xl text-[#5E6282] tracking-[0.1px] leading-none mt-[21px]">
          <div className="flex flex-col items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/92200b342b50c99b8d8c276beb03da4ac7bcbd7b?placeholderIfAbsent=true"
              alt="Social media icons"
              className="aspect-[3.94] object-contain w-[177px]"
            />
            <p className="text-[#5E6282] mt-[26px] max-md:mr-1">
              Discover our app
            </p>
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/5a9803b0b59bed20a7ad5430b71f6e2ead54f654?placeholderIfAbsent=true"
              alt="App store badges"
              className="aspect-[3.06] object-contain w-[107px] max-w-full mt-4 rounded-[0px_0px_0px_0px]"
            />
          </div>
        </div>
      </div>

      <div className="text-[#5E6282] text-sm font-normal leading-none mt-[84px] text-center max-md:mt-10">
        All rights reserved@jadoo.co
      </div>
    </footer>
  );
};

export default Footer;