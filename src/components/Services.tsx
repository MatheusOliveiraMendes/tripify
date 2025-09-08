import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
      icon: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/29edc20e11334517dd6cf6a220785d1f45b25415?placeholderIfAbsent=true",
      featured: false
    },
    {
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
      icon: null,
      featured: true
    },
    {
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      icon: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/29edc20e11334517dd6cf6a220785d1f45b25415?placeholderIfAbsent=true",
      featured: false
    },
    {
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers",
      icon: null,
      featured: false
    }
  ];

  return (
    <section className="w-full max-w-[1088px] mt-3 max-md:max-w-full">
      <div className="flex w-[954px] max-w-full items-stretch gap-5 text-center flex-wrap justify-between mb-[97px] max-md:mb-10">
        <div className="flex flex-col items-stretch mt-2 max-md:max-w-full">
          <h3 className="text-[#5E6282] text-lg font-semibold self-center">
            CATEGORY
          </h3>
          <h2 className="text-[#14183E] text-[50px] font-bold capitalize mt-2.5 max-md:max-w-full max-md:text-[40px]">
            We Offer Best Services
          </h2>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/60fc8c78a4b165fdbda426e4685cdbb5f9f971a2?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[0.92] object-contain w-[153px] shrink-0 max-w-full rounded-[0px_0px_0px_0px]"
        />
      </div>

      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {services.map((service, index) => (
          <article 
            key={service.title}
            className={`${
              index === 0 ? 'w-[23%]' : 
              index === 1 ? 'w-[33%] ml-5' : 
              index === 2 ? 'w-[21%] ml-5' : 
              'w-[22%] ml-5'
            } max-md:w-full max-md:ml-0`}
          >
            {service.featured ? (
              <div className="shadow-[0_100px_80px_0_rgba(0,0,0,0.02),0_64.815px_46.852px_0_rgba(0,0,0,0.02),0_38.519px_25.481px_0_rgba(0,0,0,0.01),0_20px_13px_0_rgba(0,0,0,0.01),0_8.148px_6.519px_0_rgba(0,0,0,0.01),0_1.852px_3.148px_0_rgba(0,0,0,0.00)] flex grow flex-col items-stretch w-full bg-white pt-[149px] pb-[59px] px-[53px] rounded-[36px] max-md:mt-10 max-md:pt-[100px] max-md:px-5">
                <h4 className="text-[#1E1D4C] text-xl font-semibold self-center">
                  {service.title}
                </h4>
                <p className="text-[#5E6282] text-center text-base font-normal leading-[26px] mt-[15px]">
                  {service.description}
                </p>
              </div>
            ) : (
              <div className={`flex flex-col items-center text-center ${index === 0 ? 'mt-[149px]' : index === 2 ? 'self-stretch my-auto' : 'mt-[149px]'} max-md:mt-10`}>
                {service.icon && (
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="aspect-[0.89] object-contain w-[67px] rounded-[0px_0px_0px_0px] mb-[34px]"
                  />
                )}
                <h4 className="text-[#1E1D4C] text-xl font-semibold mt-[34px]">
                  {service.title}
                </h4>
                <p className="text-[#5E6282] text-base font-normal leading-[26px] mt-[15px]">
                  {service.description}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;