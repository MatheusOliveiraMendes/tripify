import React from 'react';

const Destinations: React.FC = () => {
  const destinations = [
    {
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/1dbdce6b18c5b900fb2d493e8209e7b4bf4072ae?placeholderIfAbsent=true",
      alt: "Rome, Italy destination"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/d38f04775e7c58b2a1bfe171515537e205a5b692?placeholderIfAbsent=true",
      alt: "London, UK destination"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/525802e259bc83b41a218967b0798153964eb83b?placeholderIfAbsent=true",
      alt: "Europe destination"
    }
  ];

  return (
    <section className="w-full max-w-[1103px] mt-[156px] max-md:max-w-full max-md:mt-10">
      <div className="text-center mb-[60px]">
        <h3 className="text-[#5E6282] text-lg font-semibold">
          Top Selling
        </h3>
        <h2 className="text-[#14183E] text-[50px] font-bold capitalize mt-2 max-md:text-[40px]">
          Top Destinations
        </h2>
      </div>

      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {destinations.map((destination, index) => (
          <article 
            key={index}
            className="w-[33%] max-md:w-full max-md:ml-0"
          >
            <div className="group cursor-pointer">
              <img
                src={destination.image}
                alt={destination.alt}
                className={`${
                  index === 2 ? 'aspect-[0.83]' : 'aspect-[0.69]'
                } object-contain w-full grow rounded-[24px] hover:shadow-lg transition-shadow duration-300 max-md:mt-[35px]`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Destinations;