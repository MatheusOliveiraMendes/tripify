import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Destinations from '@/components/Destinations';
import BookingSteps from '@/components/BookingSteps';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center pt-[47px] pb-[79px] px-12 max-md:px-5 min-h-screen">
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/f6d35c31d80b5268b90523ce0baadfd906548577?placeholderIfAbsent=true"
        alt="Header decoration"
        className="aspect-[29.41] object-contain w-[1160px] max-w-[1160px] rounded-[0px_0px_0px_0px] max-md:max-w-full"
      />
      
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        
        <img
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/ce4abe5070078bc96c3cefc8f075712b2ef0762f?placeholderIfAbsent=true"
          alt="Company logos"
          className="aspect-[6.62] object-contain w-full max-w-[1073px] mt-24 rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
        />
        
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default Index;