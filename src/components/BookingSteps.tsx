import React from 'react';

const BookingSteps: React.FC = () => {
  const steps = [
    {
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "🗺️"
    },
    {
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "💳"
    },
    {
      title: "Reach Airport on Selected Date",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: "✈️"
    }
  ];

  return (
    <section className="w-full max-w-[1114px] ml-[23px] mt-[186px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch text-[#5E6282] font-bold max-md:max-w-full max-md:mt-10">
            <h3 className="text-[#5E6282] text-lg font-semibold max-md:ml-[3px]">
              Easy and Fast
            </h3>
            <h2 className="text-[#14183E] text-[50px] capitalize mt-[15px] max-md:max-w-full max-md:text-[40px]">
              Book your next trip <br />
              in 3 easy steps
            </h2>
            <div className="self-center flex w-[327px] max-w-full flex-col items-stretch text-base leading-none mt-[31px]">
              {steps.map((step, index) => (
                <div key={step.title} className={index > 0 ? "mt-12 max-md:mt-10" : ""}>
                  <div className="flex items-center gap-4 mb-1">
                    <span className="text-2xl">{step.icon}</span>
                    <h4 className="text-[#5E6282] font-bold">{step.title}</h4>
                  </div>
                  <p className="text-[#5E6282] font-normal leading-5 ml-12">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/69e9877b48ae18f0508ee02cfd35089155fe6d43?placeholderIfAbsent=true"
            alt="Booking process illustration"
            className="aspect-[1.21] object-contain w-full mt-[78px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;