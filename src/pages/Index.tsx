
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BentoGrid from '@/components/BentoGrid';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
