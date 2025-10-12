import React from 'react';

const BookingSteps: React.FC = () => {
  const steps = [
    {
      title: 'Choose Destination',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      icon: '🗺️',
    },
    {
      title: 'Make Payment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      icon: '💳',
    },
    {
      title: 'Reach Airport on Selected Date',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
      icon: '✈️',
    },
  ];

  return (
    <section className="w-full">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5E6282]">
            Easy &amp; Fast
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#14183E] sm:text-4xl">
            Book your next trip in 3 easy steps
          </h2>
          <ul className="space-y-6">
            {steps.map((step) => (
              <li
                key={step.title}
                className="flex gap-5 rounded-2xl border border-[#f0f2ff] bg-white p-4 shadow-sm transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F1A501]/10 text-2xl">
                  {step.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#5E6282]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5E6282]/80">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/69e9877b48ae18f0508ee02cfd35089155fe6d43?placeholderIfAbsent=true"
            alt="Booking process illustration"
            className="w-full max-w-md rounded-[40px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
