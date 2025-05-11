import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Project data
const projects = [
  {
    id: 1,
    title: "Modern Product Animation",
    category: "3D Animation",
    youtubeLink: "https://youtu.be/s2X6yV8gPcY",
    description: "3D animation showcasing a product from all angles with detailed rendering and lighting.",
  },
  {
    id: 2,
    title: "Cinematic Trailer Edit",
    category: "3D Animation",
    youtubeLink: "https://youtu.be/zEVyui39KtI",
    description: "Dramatic trailer edit with color grading, sound design, and captivating transitions.",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "3D Animation",
    youtubeLink: "https://youtu.be/Swl7FQjJTiI",
    description: "Complete brand identity package including logo, color palette, typography, and brand guidelines.",
  },
  {
    id: 4,
    title: "UGC Product Campaign",
    category: "UGC Content",
    youtubeLink: "https://youtube.com/shorts/VXTIOOkPtPY",
    description: "Authentic user-generated style content created for product marketing and social media campaigns.",
  },
  {
    id: 5,
    title: "UGC Product Campaign",
    category: "UGC Content",
    youtubeLink: "https://youtube.com/shorts/ZVgBH1Q3OoU",
    description: "Authentic user-generated style content created for product marketing and social media campaigns.",
  },
  {
    id: 6,
    title: "UGC Product Campaign",
    category: "UGC Content",
    youtubeLink: "https://youtube.com/shorts/718IHjvmfEY",
    description: "Authentic user-generated style content created for product marketing and social media campaigns.",
  },
  {
    id: 7,
    title: "UGC Product Campaign",
    category: "UGC Content",
    youtubeLink: "https://youtube.com/shorts/UbTleUQ3bUU",
    description: "Authentic user-generated style content created for product marketing and social media campaigns.",
  },
  {
    id: 8,
    title: "UGC Product Campaign",
    category: "UGC Content",
    youtubeLink: "https://youtube.com/shorts/UTDkgJI4LVc",
    description: "Authentic user-generated style content created for product marketing and social media campaigns.",
  },
  {
    id: 9,
    title: "UGC Product Campaign",
    category: "UGC Content",
    youtubeLink: "https://youtube.com/shorts/WFzH1v0SVwo",
    description: "Authentic user-generated style content created for product marketing and social media campaigns.",
  }
];

// Categories
const categories = ["All", "Cinematic Editing", "UGC Content", "3D Animation", "Motion Graphics"];

// Extract video ID and type (short or not)
const getYouTubeInfo = (url: string): { videoId: string | null; isShort: boolean } => {
  const shortMatch = url.match(/youtube\.com\/shorts\/([\w-]{11})/);
  const standardMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
  const videoId = shortMatch?.[1] || standardMatch?.[1] || null;
  return { videoId, isShort: !!shortMatch };
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-tertiary">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-secondary">Explore my creative work across different specialties</p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-full shadow-sm">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-transparent text-secondary hover:bg-tertiary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => {
              const { videoId, isShort } = getYouTubeInfo(project.youtubeLink || "");
              const isPlaying = playingVideoId === project.id;
              const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

              return (
                <div
                  key={project.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all ${
                    isShort ? 'aspect-[9/16]' : ''
                  }`}
                >
                  <div
                    className={`relative w-full ${isShort ? 'pt-[177.77%]' : 'pt-[56.25%]'} overflow-hidden cursor-pointer`}
                    onClick={() => setPlayingVideoId(isPlaying ? null : project.id)}
                  >
                    {isPlaying && videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={thumbnailUrl}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const img = e.currentTarget;
                            img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/80 rounded-full p-3">
                            <svg
                              className="w-8 h-8 text-black"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-secondary mb-4">{project.description}</p>
                    <button className="text-primary font-medium hover:underline">View Details</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
