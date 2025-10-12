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

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8h3V5h-3c-2.21 0-4 1.79-4 4v2H7v3h3v7h3v-7h2.5l.5-3H13V9c0-.552.448-1 1-1Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 6.5a5.87 5.87 0 0 1-1.77.5 3.13 3.13 0 0 0 1.37-1.72 5.93 5.93 0 0 1-1.94.77A3 3 0 0 0 12 8.83a8.42 8.42 0 0 1-6.87-3.5 3 3 0 0 0 .93 4 2.94 2.94 0 0 1-1.37-.38v.04A3 3 0 0 0 7 11a3 3 0 0 1-1.36.05 3 3 0 0 0 2.8 2.1A6 6 0 0 1 4 14.5 8.43 8.43 0 0 0 8.62 16 8.45 8.45 0 0 0 17.1 7.45c0-.13 0-.26-.01-.39A6.2 6.2 0 0 0 21 6.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full max-w-[1025px] mt-[166px] max-md:max-w-full max-md:mt-10">
      <div className="flex w-full gap-5 font-normal flex-wrap justify-between">
        <div className="flex flex-col items-stretch">
          <img
            src="/Logo.png"
            alt="Tripify logo"
            className="h-20 w-auto select-none"
            draggable="false"
          />
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

        <div className="flex flex-col items-stretch text-[#5E6282] mt-[21px] gap-6 min-w-[220px]">
          <div className="space-y-4">
            <h3 className="text-[#080809] text-[21px] font-bold">Social</h3>
            <ul className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    onClick={(e) => e.preventDefault()}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e2e4f5] text-[#181E4B] transition-colors hover:border-[#DF6951] hover:text-[#DF6951]"
                    aria-label={`Visit ${social.name}`}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-[#5E6282] text-sm uppercase tracking-[0.2em]">Discover our app</p>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-3 rounded-2xl border border-[#e2e4f5] bg-white px-4 py-3 text-left text-[#181E4B] shadow-sm transition-transform hover:-translate-y-1 hover:border-[#DF6951] hover:shadow-lg"
                aria-label="Download on the App Store"
              >
                <svg
                  className="h-6 w-6 text-[#181E4B]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.365 13.534c-.024-2.276 1.876-3.36 1.962-3.411-1.07-1.561-2.73-1.777-3.315-1.797-1.407-.142-2.742.818-3.458.818-.72 0-1.814-.798-2.985-.777-1.532.023-2.956.906-3.744 2.318-1.595 2.833-.406 7.017 1.14 9.313.756 1.091 1.653 2.319 2.828 2.275 1.136-.046 1.563-.73 2.94-.73 1.373 0 1.76.73 2.96.705 1.225-.02 1.998-1.115 2.736-2.211.887-1.298 1.246-2.561 1.266-2.627-.03-.013-2.428-.928-2.434-3.278ZM14.53 6.37c.617-.748 1.033-1.79.919-2.82-.886.036-1.965.59-2.6 1.334-.573.663-1.075 1.735-.943 2.756.997.078 2.015-.507 2.624-1.27Z" />
                </svg>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#5E6282]">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-3 rounded-2xl border border-[#e2e4f5] bg-white px-4 py-3 text-left text-[#181E4B] shadow-sm transition-transform hover:-translate-y-1 hover:border-[#DF6951] hover:shadow-lg"
                aria-label="Get it on Google Play"
              >
                <svg
                  className="h-6 w-6 text-[#181E4B]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.6 2.3A1 1 0 0 0 2 3.153v17.694a1 1 0 0 0 1.6.853l10.092-6.743 4.598 5.206a1 1 0 0 0 1.71-.692V3.529a1 1 0 0 0-1.71-.692l-4.598 5.206L3.6 2.3Z" />
                </svg>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#5E6282]">
                    Get it on
                  </span>
                  <span className="text-sm font-semibold">Google Play</span>
                </span>
              </a>
            </div>
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
