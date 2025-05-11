
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-tertiary">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Creative <span className="text-secondary">Visual</span> Storyteller
          </h1>
          <p className="text-xl text-secondary">
            Hi, I'm Debanjan. I bring stories to life through video editing, graphic design, and 3D artistry. Let's create something memorable together.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <Link to="/projects">
                View Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/40 z-10 mix-blend-multiply rounded-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Debanjan working on visual design" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
