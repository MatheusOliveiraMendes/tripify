import React from 'react';

const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    weather: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="5" fill="#F1A501" />
        <path
          d="M9.5 22H19C21.2091 22 23 20.2091 23 18C23 15.7909 21.2091 14 19 14C18.6858 14 18.3778 14.0353 18.0795 14.1035C16.9938 11.7339 14.7055 10 12 10C8.68629 10 6 12.6863 6 16C6 19.3137 8.68629 22 12 22H9.5Z"
          fill="#F1A501"
          fillOpacity="0.7"
        />
      </svg>
    ),
    flights: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 15.5L24 8L20.5 14.5H13.6L10.8 20.5L8.2 19.6L11.4 14.5H4V15.5Z"
          fill="#4475F2"
        />
        <path
          d="M11 14.5L6 11.5L7.1 10.1L13.5 13.5L11 14.5Z"
          fill="#4475F2"
          fillOpacity="0.7"
        />
      </svg>
    ),
    events: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5C9.58172 5 6 8.58172 6 13C6 18.25 14 25 14 25C14 25 22 18.25 22 13C22 8.58172 18.4183 5 14 5Z"
          fill="#DF6951"
          fillOpacity="0.85"
        />
        <circle cx="14" cy="13" r="3" fill="#FFFFFF" fillOpacity="0.9" />
      </svg>
    ),
    customization: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.25 3a1 1 0 011-1h1.5a1 1 0 011 1v1.373c.44.142.86.327 1.257.55l.971-.971a1 1 0 011.414 0l1.06 1.06a1 1 0 010 1.415l-.97.97c.223.397.408.817.55 1.257H22a1 1 0 011 1v1.5a1 1 0 01-1 1h-1.373a7.98 7.98 0 01-.55 1.257l.97.97a1 1 0 010 1.415l-1.06 1.06a1 1 0 01-1.414 0l-.971-.971a7.98 7.98 0 01-1.257.55V22a1 1 0 01-1 1h-1.5a1 1 0 01-1-1v-1.373a7.98 7.98 0 01-1.257-.55l-.971.971a1 1 0 01-1.414 0l-1.06-1.06a1 1 0 010-1.415l.97-.97a7.98 7.98 0 01-.55-1.257H6a1 1 0 01-1-1v-1.5a1 1 0 011-1h1.373a7.98 7.98 0 01.55-1.257l-.97-.97a1 1 0 010-1.415l1.06-1.06a1 1 0 011.414 0l.971.971c.397-.223.817-.408 1.257-.55V3z"
          fill="#4475F2"
          fillOpacity="0.9"
        />
        <circle cx="13.5" cy="14" r="3" fill="#FFFFFF" />
      </svg>
    ),
  };

  const services = [
    {
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
      icon: 'weather',
      iconBackground: '#FFF4E5',
      featured: false,
    },
    {
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
      icon: 'flights',
      iconBackground: '#EEF3FF',
      featured: true,
    },
    {
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.',
      icon: 'events',
      iconBackground: '#FFECEF',
      featured: false,
    },
    {
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers.',
      icon: 'customization',
      iconBackground: '#EEF4FF',
      featured: false,
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5E6282]">
          Category
        </p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14183E] sm:text-4xl">
          We Offer Best Services
        </h2>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className={`group relative overflow-hidden rounded-[30px] border border-[#f0f2ff] bg-white p-8 text-center shadow-[0_30px_80px_rgba(24,30,75,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_40px_120px_rgba(24,30,75,0.12)] ${
              service.featured ? 'bg-gradient-to-br from-[#fff4ec] via-white to-[#f5f6ff]' : ''
            }`}
          >
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl shadow-inner"
              style={{ backgroundColor: service.iconBackground }}
            >
              {iconMap[service.icon] ?? null}
            </div>
            <h3 className="mt-8 text-xl font-semibold text-[#1E1D4C]">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#5E6282]">
              {service.description}
            </p>
            {service.featured && (
              <span className="pointer-events-none absolute -right-6 top-8 h-16 w-16 rounded-3xl bg-[#DF6951]/20 blur-lg" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
