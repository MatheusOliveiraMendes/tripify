import React from 'react';

const Destinations: React.FC = () => {
  const destinations = [
    {
      image: '/Rome.jpg',
      alt: 'Rome, Italy destination',
      location: 'Rome, Italy',
      price: '$5.2k',
      duration: '10 Days Trip',
      accent: '#DF6951',
    },
    {
      image: '/London.jpg',
      alt: 'London, UK destination',
      location: 'London, UK',
      price: '$4.2k',
      duration: '12 Days Trip',
      accent: '#4475F2',
    },
    {
      image: '/Paris.jpg',
      alt: 'Europe destination',
      location: 'Paris, France',
      price: '$5k',
      duration: '18 Days Trip',
      accent: '#F1A501',
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5E6282]">
          Top Selling
        </p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14183E] sm:text-4xl">
          Top Destinations
        </h2>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article
            key={destination.location}
            className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#f0f2ff] bg-white shadow-[0_30px_80px_rgba(24,30,75,0.08)] transition-transform duration-300 hover:-translate-y-3 hover:shadow-[0_40px_120px_rgba(24,30,75,0.12)]"
          >
            <div className="relative aspect-[0.75] w-full overflow-hidden">
              <img
                src={destination.image}
                alt={destination.alt}
                className="h-full w-full object-cover"
              />
              <span
                className="absolute left-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#14183E] shadow-sm"
                style={{ borderBottom: `3px solid ${destination.accent}` }}
              >
                {destination.location.split(',')[0]}
              </span>
            </div>
            <div className="flex grow flex-col justify-between space-y-4 px-8 pb-8 pt-6">
              <div className="flex items-center justify-between text-sm font-medium text-[#14183E]">
                <span>{destination.location}</span>
                <span>{destination.price}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5E6282]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.333v4l2.667 1.334"
                    stroke="#DF6951"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="#DF6951"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>{destination.duration}</span>
              </div>
            </div>
            <span
              className="pointer-events-none absolute -left-6 top-8 h-16 w-16 rounded-3xl blur-xl transition-opacity duration-300 group-hover:opacity-100"
              style={{ backgroundColor: `${destination.accent}1A` }}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
