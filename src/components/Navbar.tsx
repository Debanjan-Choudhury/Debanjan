import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
          Debanjan
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link to="/projects" className="hover:text-secondary transition-colors">
            Projects
          </Link>
          <HashLink smooth to="/#services" className="hover:text-secondary transition-colors">
            Services
          </HashLink>
          <HashLink smooth to="/#contact" className="hover:text-secondary transition-colors">
            Contact
          </HashLink>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full right-0 left-0 bg-white shadow-lg p-4 md:hidden flex flex-col space-y-4 animate-fade-in">
            <Link to="/" className="hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/projects" className="hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <HashLink smooth to="/#services" className="hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </HashLink>
            <HashLink smooth to="/#contact" className="hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
