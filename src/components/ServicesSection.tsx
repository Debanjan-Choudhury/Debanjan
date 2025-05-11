
import React from 'react';
import { Video, ImageIcon, Box, MessageSquare } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Video Editing",
    description: "Professional video editing including color grading, transitions, effects, and sound design for commercials, social media, and films.",
    icon: <Video size={32} className="text-primary" />,
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creative designs for branding, social media, print materials, and digital assets that capture attention and convey your message.",
    icon: <ImageIcon size={32} className="text-primary" />,
  },
  {
    id: 3,
    title: "3D Animation",
    description: "Stunning 3D product animations, character designs, and visual effects that bring your ideas to life with dimension and movement.",
    icon: <Box size={32} className="text-primary" />,
  },
  {
    id: 4,
    title: "UGC Content",
    description: "Authentic user-generated style content creation that resonates with audiences and drives engagement for your brand.",
    icon: <MessageSquare size={32} className="text-primary" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Creative solutions tailored to your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
