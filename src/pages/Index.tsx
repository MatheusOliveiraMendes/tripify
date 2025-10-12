import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import BookingSteps from '../components/BookingSteps';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#14183E]">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center gap-24 px-6 pb-24 pt-16 sm:px-10 lg:px-12">
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        <img
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/ce4abe5070078bc96c3cefc8f075712b2ef0762f?placeholderIfAbsent=true"
          alt="Company logos"
          className="w-full max-w-[1073px] object-contain"
        />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
