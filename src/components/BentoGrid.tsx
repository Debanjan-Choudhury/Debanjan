import React from 'react';
import './bento.css';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const bentoItems = [
    {
      media: 'https://www.youtube.com/embed/s2X6yV8gPcY?autoplay=1&mute=1&controls=0&loop=1&playlist=s2X6yV8gPcY', // YouTube video with autoplay, mute, and loop
      title: '3d watch animation',
      description: '3D Modeling, 3D Animation, Video Editing, Color Grading',
      category: 'large',
      type: 'video'
    },
    {
      media: "https://www.youtube.com/embed/Swl7FQjJTiI?autoplay=1&mute=1&controls=0&loop=1&playlist=Swl7FQjJTiI",
      title: '3d Headphone',
      description: '3D Modeling, 3D Animation, Video Editing, Color Grading',
      category: 'regular',
      type: 'video'
    },
    {
      media: 'https://www.youtube.com/embed/HnpfE00rBiU?autoplay=1&mute=1&controls=0&loop=1&playlist=HnpfE00rBiU',
      title: 'MOtion Graphics Reel',
      description: 'Motion Graphics',
      category: 'regular',
      type: 'video'
    },
    {
      media: 'https://www.youtube.com/embed/VXTIOOkPtPY?autoplay=1&mute=1&controls=0&loop=1&playlist=VXTIOOkPtPY', // YouTube Shorts with autoplay, mute, and loop
      title: '2d Animation',
      description: '2d Animation,  Video Editing, Colorgrading',
      category: 'tall',
      type: 'video'
    },
    {
      media: 'https://www.youtube.com/embed/840c6ui8DC4?autoplay=1&mute=1&controls=0&loop=1&playlist=840c6ui8DC4',
      title: '3D Scenery',
      description: '3D modeling , Color grading , Texturing',
      category: 'regular',
      type: 'video'
    },
    {
      media: 'https://www.youtube.com/embed/zEVyui39KtI?autoplay=1&mute=1&controls=0&loop=1&playlist=zEVyui39KtI',
      title: '3D Bottle Animaiton',
      description: '3D Modeling, 3D Animation, Video Editing, Color Grading',
      category: 'regular',
      type: 'video'
    },
    {
      media: 'https://www.youtube.com/embed/WFzH1v0SVwo?autoplay=1&mute=1&controls=0&loop=1&playlist=WFzH1v0SVwo', // YouTube video with autoplay, mute, and loop
      title: 'Stopmotion',
      description: ' Video Editing, Colorgrading',
      category: 'tall',
      type: 'video'
    },
    {
      media: 'https://www.youtube.com/embed/SsV__wvIO8g?autoplay=1&mute=1&controls=0&loop=1&playlist=SsV__wvIO8g',
      title: 'Cinematic Video',
      description: 'Cinematography, Video Editing, Colorgrading',
      category: 'large',
      type: 'video'
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tertiary mb-4">
            Featured Projects
          </h2>
          <p className="text-secondary text-lg">
            Explore some of my recent creative works
          </p>
        </div>

        <div className="bento-grid">
          {bentoItems.map((item, index) => (
            <div 
              key={index}
              className={`bento-item ${item.category === 'large' ? 'bento-large' : 
                item.category === 'tall' ? 'bento-tall' : ''}`}
            >
              {item.type === 'video' ? (
                item.media.includes('youtube.com') ? (
                  // Embed YouTube video with autoplay, mute, and loop
                  <iframe
                    className="bento-media"
                    width="100%"
                    height="100%"
                    src={item.media}
                    title={item.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // For local videos, autoplay, mute, and loop
                  <video 
                    className="bento-media"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <img
                  className="bento-media"
                  src={item.media}
                  alt={item.title}
                  loading="lazy"
                />
              )}
              
              <div className="bento-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {/* Removed View Project Link */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-secondary hover:bg-tertiary text-primary rounded-full px-6 py-4">
            <Link to="/projects">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
